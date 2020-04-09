// TODO add proper comments


import esri = __esri;
import { InfoBundle, IdentifyParameters, IdentifyResultSet, IdentifyResult, RampLayerConfig, RampLayerWmsLayerEntryConfig, IdentifyItem, IdentifyResultFormat } from '../gapiTypes';
import { GeometryType } from '../api/apiDefs';
import BaseLayer from './BaseLayer';
import Point from '../api/geometry/Point';
import WmsFC from './WmsFC';
import TreeNode from './TreeNode';

export class WmsLayer extends BaseLayer {

    _innerLayer: esri.WMSLayer;
    sublayerNames: Array<string>;
    readonly mimeType: string;

    constructor (infoBundle: InfoBundle, config: RampLayerConfig, reloadTree?: TreeNode) {
        super(infoBundle, config, reloadTree);
        this.supportsIdentify = true;
        this.mimeType = config.featureInfoMimeType; // TODO is there a default? will that be in the config defaulting?

        this._innerLayer = new this.esriBundle.WMSLayer(this.makeEsriLayerConfig(config));
        this.initLayer();
    }

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): esri.WMSLayerProperties {
        // TODO flush out
        const esriConfig: esri.WMSLayerProperties = super.makeEsriLayerConfig(rampLayerConfig);
        const lEntries = <Array<RampLayerWmsLayerEntryConfig>>rampLayerConfig.layerEntries;
        this.sublayerNames = lEntries.map(le => le.id);

        // reminder: unlike MapImageLayer, we do not allow tweaking visibility
        //           of sublayers at runtime.
        //           if we decide to add that as a feature, we would need to flush
        //           out WmsFCs for each active sublayer and wire up a visibility
        //           pipeline similar to MapImageLayer

        // this is how the very basic example on esri api page recommends doing it.
        // is it possible to have nested sublayer structures on the server?
        // if so, will this type of flat initialization appropriately map itself
        // to the tree upon layer load event?
        esriConfig.sublayers = this.sublayerNames.map(sln => {
            return {
                name: sln
            };
        });

        const styles = lEntries.map(e => e.currentStyle).join();

        esriConfig.customLayerParameters = {
            styles: styles
        };

        // TODO need to test the .suppressGetCapabilities functionality.
        //      we no longer have .resourceInfo on the layer constructor.
        //      first attempt would be to try and pre-populate .sublayers
        //      and .fullExtent in the constructor config
        //      further complicated as .sublayers is a tree whereas .resourceInfo
        //      was a flat array.
        //      also, the ESRI doc as of 4.14 seems to indicate it always makes
        //      a getcapabilities call so this might be a lost cause

        // old code:

        /*
        if (this.config.suppressGetCapabilities) {
            cfg.resourceInfo = {
                extent: new this._apiRef.Map.Extent(-141, 41, -52, 83.5, {wkid: 4326}), // TODO make this a parameter post-demo
                layerInfos: this.config.layerEntries
                    .map(le => new this._apiRef.layer.WMSLayerInfo({name: le.id, title: le.name || ''}))
            };
        }
        */

        return esriConfig;
    }

    /**
     * Triggers when the layer loads.
     *
     * @function onLoadActions
     */
    onLoadActions (): Array<Promise<void>> {
        const loadPromises: Array<Promise<void>> = super.onLoadActions();

        const wmsFC = new WmsFC(this.infoBundle(), this, 0);
        this.fcs[0] = wmsFC;

        this.layerTree.children.push(new TreeNode(0, wmsFC.uid, this.name));
        // TODO see if we need to re-synch the parent name
        // this.layerTree.name = this.name;

        /*
        // Attempt to set visibility of the sublayers we want. Doesn't work; the esri api definitions
        // and what we get from a raw initialized layer seem totally off. That said we may not need this
        // unless we encounter some weird nested layer service.
        const crawlSublayers = (sublayers: esri.Collection<esri.WMSSublayer>): void => {
            sublayers.forEach(sl => {
                // set visibility based on presence in the config
                sl.visible = this.sublayerNames.indexOf(sl.name) > -1;
                // recurse the tree
                if (sl.sublayers.length > 0) {
                    crawlSublayers(sl.sublayers);
                }
            });
        };

        crawlSublayers(this._innerLayer.sublayers);
        */

        // TODO implement symbology load
        // loadPromises.push(wmsFC.loadSymbology());

        // TODO check out whats going on with layer extent. is it set and donethanks?

        return loadPromises;
    }

    /**
     * Run a getFeatureInfo on a WMS layer, return the result as a promise.
     * Options: specs to be added once finalized
     *
     * @param {Object} options     additional arguemets, see above.
     * @returns {Object} an object with identify results array and identify promise resolving when identify is complete; if an empty object is returned, it will be skipped
     */
    identify (options: IdentifyParameters): IdentifyResultSet {
        // TODO add full documentation for options parameter

        if (options.geometry.type !== GeometryType.POINT) {
            // TODO too harsh? maybe a console warning and generic no result?
            //      just thinking if someone attempts a fancy identify on a map
            //      that happens to have a WMS on it, it will never work.
            throw new Error('a point must be used for WMS Identify');
        }

        // TODO revist how we want to use this.
        //      old ramp would only allow requests that had matching mime types,
        //      and the result of the mapping would dictate which identify panel was used.
        //      we will probably have a different panel scheme.
        const infoMap = {
            'text/html;fgpv=summary': 'HTML',
            'text/html': 'HTML',
            'text/plain': 'Text',
            'application/json': 'EsriFeature'
        };

        const myFC: WmsFC = <WmsFC>this.getFC(undefined); // undefined will get the first/only

        // early kickout check. not loaded/error
        if (!this.isValidState() ||
            !myFC.getVisibility() ||
            // !this.isQueryable() || // TODO implement when we have this flag created
            // !infoMap[this.config.featureInfoMimeType] || // TODO implement once config is defined
            myFC.scaleSet.isOffScale(options.map.getScale()).offScale) {
            // return empty result.
            return super.identify(options);
        }

        // TODO prolly need to flush out the config interfaces for this badboy

        const innerResult: IdentifyResult = {
            uid: myFC.uid,
            isLoading: true,
            items: []
        };

        const result: IdentifyResultSet = {
            results: [innerResult],
            done: undefined, // set below
            parentUid: this.uid
        };

        result.done = this.gapi.utils.ogc
            .getFeatureInfo(
                this,
                options.map,
                this.sublayerNames,
                <Point>options.geometry,
                this.mimeType)
            .then(data => {

                // check if a result is returned by the service. If not, do not add to the array of data
                // TODO verify we want empty .items array
                // TODO is is possible to have more than one item as a result? check how this works
                if (data) {
                    if (typeof data !== 'string') {
                        // likely json or an image
                        // TODO improve the dection (maybe use the this.mimeType?)
                        innerResult.items.push({
                            format: IdentifyResultFormat.JSON,
                            data: data
                        });
                    } else if (data.indexOf('Search returned no results') === -1 && data !== '') {
                        // TODO if service is french, will the "no results" message be different?
                        // TODO consider utilizing the infoMap variable above to detect HTML format.
                        innerResult.items.push({
                            format: IdentifyResultFormat.TEXT,
                            data: data
                        });
                    }
                }

                innerResult.isLoading = false;
            });

        return result;
    }

    /**
     * Add a WMS layer parameter, maybe even refresh the layer
     *
     * @function setCustomParameter
     * @param {String} key name of the key to be created or updated
     * @param {String} value value of the key
     * @param {Boolean} forceRefresh show the new fancy version of the layer or not
     */
    setCustomParameter(key: string, value: string, forceRefresh: boolean = true): void {
        this._innerLayer.customLayerParameters[key] = value;
        if (forceRefresh) {
            this._innerLayer.refresh();
        }
    }
}

export default WmsLayer;