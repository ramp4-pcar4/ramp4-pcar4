// TODO add proper comments

import esri = __esri;
import { InfoBundle, GetGraphicParams, GetGraphicResult, QueryFeaturesGeoJsonParams, QueryFeaturesParams } from '../gapiTypes';
import BaseLayer from './BaseLayer';
import AttribFC from './AttribFC';
import { AttributeLoaderDetails, FileLayerAttributeLoader } from '../util/AttributeLoader';
import QuickCache from './QuickCache';
import GeoJsonLayer from './GeoJsonLayer';

export default class GeoJsonFC extends AttribFC {

    tooltipField: string; // TODO if we end up having more things that are shared with FeatureFC, consider making a FeatureBaseFC class for both to inherit from

    constructor (infoBundle: InfoBundle, parent: BaseLayer, layerIdx: number = 0) {
        super(infoBundle, parent, layerIdx);
    }

    // TODO consider moving a bulk of this out to LayerModule; the wizard may have use for running this (e.g. getting field list for a service url)
    extractLayerMetadata(): void {

        const l: esri.FeatureLayer = <esri.FeatureLayer>this.parentLayer.innerLayer;

        // properties for all endpoints
        this.layerType = 'Feature Layer'; // TODO validate this matches server string. TODO validate we don't want to change to a different value. TODO define an Enum for layerType?
        this.supportsFeatures = true;

        this.geomType = l.geometryType;
        this.quickCache = new QuickCache(this.geomType);

        // TODO if we ever make config override for scale, would need to apply on the layer constructor, will end up here
        this.scaleSet.minScale = l.minScale || 0;
        this.scaleSet.maxScale = l.maxScale || 0;

        // TODO will need to calculate this as esri removed their library to calculate it
        // TODO check if layer auto-gens this in .fullExtent
        this.extent = l.fullExtent;

        this.fields = l.fields;
        this.nameField = l.displayField;
        this.oidField = l.objectIdField;

        // TODO revist. see https://github.com/james-rae/pocGAPI/issues/14
        // ensure our attribute list contains the object id
        /*
        if (attribs !== '*') {
            if (attribs.split(',').indexOf(layerData.oidField) === -1) {
                attribs += (',' + layerData.oidField);
            }
        }
        */

        // if there was a custom renderer in the config, it would have been applied when the
        // layer was constructed. no need to check here.
        this.renderer = this.gapi.utils.symbology.makeRenderer(l.renderer, this.fields);

        // this array will have a set of promises that resolve when all the legend svg has drawn.
        // for now, will not include that set (promise.all'd) on the layer load blocker;
        // don't want to stop a layer from loading just because an icon won't draw.
        // ideally we'll have placeholder symbol (white square, loading symbol, caution symbol, etc)
        this.legend = this.gapi.utils.symbology.rendererToLegend(this.renderer);

        const loadData: AttributeLoaderDetails = {
            sourceGraphics: l.source,
            oidField: this.oidField,
            attribs: '*' // TODO re-align with our attribs decision above

        };
        this.attLoader = new FileLayerAttributeLoader(this.infoBundle(), loadData);

    }

    /**
     * Fetches a graphic from the given layer.
     * This overrides the baseclass method, as we are all local and dont need quick caches or server hits
     *
     * @function getGraphic
     * @param  {Integer} objectId      ID of object being searched for
     * @param {Object} opts            object containing option parametrs
     *                 - map           map wrapper object of current map. only required if requesting geometry
     *                 - getGeom          boolean. indicates if return value should have geometry included. default to false
     *                 - getAttribs       boolean. indicates if return value should have attributes included. default to false
     * @returns {Promise} resolves with a bundle of information. .graphic is the graphic; .layerFC for convenience
     */
    getGraphic (objectId: number, opts: GetGraphicParams): Promise<GetGraphicResult> {

        const gjOpt: QueryFeaturesParams = {
            filterSql: `${this.oidField}=${objectId}`,
            includeGeometry: !!opts.getGeom
        };

        // TODO not sure how much we care about this. since local, result will always have attribs and geom,
        //      regardless of what requester asked for.
        //      if thats a problem, add some logic to pare off properties of the result (might need to clone
        //      to avoid breaking original source in the layer)

        return this.queryFeatures(gjOpt).then(resultArr => {
            if (resultArr.length === 0) {
                throw new Error(`Could not find object id ${objectId}`);
            } else if (resultArr.length !== 1) {
                console.warn('did not get a single result on a query for a specific object id');
            }
            return resultArr[0];
        });
    }

    // TODO we are using the getgraphci type as it's an unbound loosely typed feature
    //      may want to change name of the type to something more general
    /**
     * Requests a set of features for this layer that match the criteria of the options
     *
     * @param options {Object} options to provide filters and helpful information.
     * @returns {Array} set of features that satisfy the criteria
     */
    queryFeatures(options: QueryFeaturesParams): Promise<Array<GetGraphicResult>> {

        const gjOpt: QueryFeaturesGeoJsonParams = {
            layer: (<GeoJsonLayer>this.parentLayer),
            ...options
        };

        return this.gapi.utils.query.geoJsonQuery(gjOpt);
    }

}