// TODO add proper comments


import esri = __esri;
import { InfoBundle, LayerState, RampLayerConfig, ArcGisServerUrl, IdentifyParameters, IdentifyResultSet, IdentifyResult, IdentifyResultFormat, QueryFeaturesParams } from '../gapiTypes';
import AttribLayer from './AttribLayer';
import TreeNode from './TreeNode';
import FeatureFC from './FeatureFC';
import { LayerType, GeometryType } from '../api/apiDefs';
import Point from '../api/geometry/Point';

export class FeatureLayer extends AttribLayer {

    _innerLayer: esri.FeatureLayer;

    constructor (infoBundle: InfoBundle, config: RampLayerConfig, reloadTree?: TreeNode) {
        super(infoBundle, config, reloadTree);
        this._layerType = LayerType.FEATURE;
        this._innerLayer = new this.esriBundle.FeatureLayer(this.makeEsriLayerConfig(config));
        this.initLayer();

    }

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): esri.FeatureLayerProperties {
        // TODO flush out
        // NOTE: it would be nice to put esri.LayerProperties as the return type, but since we are cheating with refreshInterval it wont work
        //       we can make our own interface if it needs to happen (or can extent the esri one)
        const esriConfig: esri.FeatureLayerProperties = super.makeEsriLayerConfig(rampLayerConfig);

        // TODO add any extra properties for attrib-based layers here
        // if we have a definition at load, apply it here to avoid cancellation errors on
        if (rampLayerConfig.initialFilteredQuery) {
            esriConfig.definitionExpression = rampLayerConfig.initialFilteredQuery;
        }
        return esriConfig;
    }

    /**
     * Triggers when the layer loads.
     *
     * @function onLoadActions
     */
    onLoadActions (): Array<Promise<void>> {
        const loadPromises: Array<Promise<void>> = super.onLoadActions();

        // we run into a lot of funny business with functions/constructors modifying parameters.
        // this essentially clones an object to protect original objects against trickery.
        const jsonCloner = (inputObject: any) => {
            return JSON.parse(JSON.stringify(inputObject));
        };

        // attempt to set custom renderer here. if fails, we can attempt on client but prefer it here
        // as this doesnt care where the layer came from
        if (this.origRampConfig.customRenderer.type) {
            // TODO implement custom renderers
            // TODO try and do this in the constructor for the esri layer; API4 might accomodate that.
            //      since GeoJsonLayer would use this too, maybe abstarct the creation part to a util module
            /*
            // all renderers have a type field. if it's missing, no renderer was provided, or its garbage
            const classMapper = {
                simple: this._apiRef.symbology.SimpleRenderer,
                classBreaks: this._apiRef.symbology.ClassBreaksRenderer,
                uniqueValue: this._apiRef.symbology.UniqueValueRenderer
            }

            // renderer constructors apparently convert their input json from server style to client style.
            // we dont want that. use a clone to protect config's property.
            const cloneRenderer = jsonCloner(this.config.customRenderer);
            const custRend = classMapper[cloneRenderer.type](cloneRenderer);
            this._layer.setRenderer(custRend);
            */
        }

        // TODO .url seems to not have the /index ending.  there is parsedUrl.path, but thats not on official definition
        //      can also consider changing logic to use origRampConfig.url;
        // const layerUrl: string = (<esri.FeatureLayer>this._innerLayer).url;
        const layerUrl: string = (<any>this._innerLayer).parsedUrl.path;
        const urlData: ArcGisServerUrl = this.gapi.utils.shared.parseUrlIndex(layerUrl);
        const featIdx: number =  urlData.index;

        // feature has only one layer
        const featFC = new FeatureFC(this.infoBundle(), this, featIdx);
        this.fcs[featIdx] = featFC;
        featFC.serviceUrl = layerUrl;
        this.layerTree.children.push(new TreeNode(featIdx, featFC.uid, this.name)); // TODO verify name is populated at this point

        // TODO see if we need to re-synch the parent name
        // this.layerTree.name = this.name;

        // update asynch data
        // TODO check if we have custom renderer, add to options parameter here
        const pLD: Promise<void> = featFC.loadLayerMetadata().then(() => {
            // apply any config based overrides to the data we just downloaded
            featFC.nameField = this.origRampConfig.nameField || featFC.nameField || '';
            featFC.tooltipField = this.origRampConfig.tooltipField || featFC.nameField;

            featFC.processFieldMetadata(this.origRampConfig.fieldMetadata);
            featFC.attLoader.updateFieldList(featFC.fieldList);
        });

        /*
        const pLD = aFC.getLayerData().then(ld => {


            // TODO implement, maybe move into superclass

            // trickery. file layer can have field names that are bad keys.
            // our file loader will have corrected them, but config.nameField and config.tooltipField will have
            // been supplied from the wizard (it pre-fetches fields to present a choice
            // to the user). If the nameField / tooltipField was adjusted for bad characters, we need to
            // re-synchronize it here.
            if (this.dataSource() !== shared.dataSources.ESRI) {
                if (ld.fields.findIndex(f => f.name === aFC.nameField) === -1) {
                    const validField = ld.fields.find(f => f.alias === aFC.nameField);
                    if (validField) {
                        aFC.nameField = validField.name;
                        if (!this.config.tooltipField) {    // tooltipField wasn't explicitly provided, so it was also using the bad nameField key
                            aFC.tooltipField = validField.name
                        }
                    } else {
                        // give warning. impact is tooltips will have no text, details pane no header
                        console.warn(`Cannot find name field in layer field list: ${aFC.nameField}`);
                    }
                }

                // only check the tooltipField if it was provided from the config, otherwise it would have been corrected above already (if required)
                if (this.config.tooltipField && ld.fields.findIndex(f => f.name === aFC.tooltipField) === -1) {
                    const validField = ld.fields.find(f => f.alias === aFC.tooltipField);
                    if (validField) {
                        aFC.tooltipField = validField.name;
                    } else {
                        // give warning. impact is tooltips will have no text, details pane no header
                        console.warn(`Cannot find name field in layer field list: ${aFC.tooltipField}`);
                    }
                }
            }
        });
        */

        const pFC = featFC.loadFeatureCount();


        // if file based (or server extent was fried), calculate extent based on geometry
        // TODO implement this. may need a manual loop to calculate graphicsExtent since ESRI torpedo'd the function
        /*
        if (!this.extent || !this.extent.xmin) {
            this.extent = this._apiRef.proj.graphicsUtils.graphicsExtent(this._layer.graphics);
        }
        */

        // TODO add back in promises
        loadPromises.push(pLD, pFC); // , pLS

        return loadPromises;
    }

    // ----------- LAYER ACTIONS -----------

    identify(options: IdentifyParameters): IdentifyResultSet {

        const myFC: FeatureFC = <FeatureFC>this.getFC(undefined); // undefined will get the first/only
        const map = options.unboundMap || this.hostMap;

        // early kickout check. not loaded/error; not visible; not queryable; off scale
        if (!this.isValidState() ||
            !myFC.getVisibility() ||
            // !this.isQueryable() || // TODO implement when we have this flag created
            myFC.scaleSet.isOffScale(map.getScale()).offScale) {

            // return empty result.
            return super.identify(options);
        }

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

        // run a spatial query
        // const qry: esri.Query = new this.esriBundle.Query();
        // TODO investigate if we need the sourceSR param set here
        const qOpts: QueryFeaturesParams = {
            outFields: myFC.fieldList,
            includeGeometry: false,
            map
        };

        if (myFC.geomType !== 'polygon' && options.geometry.type === GeometryType.POINT) {
            // if our layer is not polygon, and our identify input is a point, make a point buffer
            qOpts.filterGeometry = this.gapi.utils.query.makeClickBuffer(<Point>options.geometry, map, options.tolerance);
        } else {
            qOpts.filterGeometry = options.geometry;
        }

        result.done = myFC.queryFeatures(qOpts).then(results => {
            // TODO might be a problem overwriting the array if something is watching/binding to the original
            innerResult.items = results.map(gr => {
                return {
                    // TODO decide if we want to handle alias mapping here or not.
                    //      if we do, our "ESRI" format will need to include field metadata.
                    //      if we dont, we need to ensure an outside fixture can access field metadata via uid easily.
                    data: gr.attributes, // this.attributesToDetails(vAtt.attributes, layerData.fields),
                    format: IdentifyResultFormat.ESRI

                    // See comments on IdentifyItem interface definition; we may decide to not keep these properties
                    // id:  gr.attributes[myFC.oidField].toString(),
                    // symbol: this.gapi.utils.symbology.getGraphicIcon(gr.attributes, myFC.renderer) // TODO update to myFC.getIcon
                    // name: this.getFeatureName(vAtt.oid.toString(), vAtt.attributes),
                };
            });

            innerResult.isLoading = false;
        });

        return result;
    }
}

export default FeatureLayer;