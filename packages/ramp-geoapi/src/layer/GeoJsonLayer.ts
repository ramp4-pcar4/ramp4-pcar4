// TODO add proper comments


import esri = __esri;
import { InfoBundle, LayerState, RampLayerConfig, IdentifyParameters, IdentifyResultSet, IdentifyResult, QueryFeaturesParams, IdentifyResultFormat } from '../gapiTypes';
import AttribLayer from './AttribLayer';
import TreeNode from './TreeNode';
import GeoJsonFC from './GeoJsonFC';


// util function to manage trickery. file layer can have field names that are bad keys.
// our file loader will have corrected them, but ramp layer config .nameField and .tooltipField may
// still have the original field names.
// This function will return a valid field name for a given field name. First attempts at
// direct match, then attempts to reverse any bad field renaming logic.
function fieldValidator(fields: Array<esri.Field>, targetName: string): string {
    if (fields.findIndex((f: esri.Field) => f.name === targetName) === -1) {
        // no direct match found.
        const validField: esri.Field = fields.find((f: esri.Field) => f.alias === targetName);
        if (validField) {
            return validField.name;
        } else {
            // give warning and return OBJECTID, which is guaranteed to exist in file layer.
            // Issue is not critical enough to blow up the app with an error
            console.warn(`Cannot find name field in layer field list: ${targetName}`);
            return 'OBJECTID';
        }
    } else {
        // target name wa ok
        return targetName;
    }
}

// TODO i think we need to change the extends to AttribLayer, as FeatureLayer constructor will attempt to make its own feature layer
export class GeoJsonLayer extends AttribLayer {

    private esriJson: esri.FeatureLayerProperties; // used as temp var to get around typescript parameter grousing. will be undefined after initLayer()

    constructor (infoBundle: InfoBundle, rampLayerConfig: RampLayerConfig, geoJson: any, systemOptions: any) {

        super(infoBundle, rampLayerConfig);
        this.isFile = true;

        // NOTE: file based layers can require reprojection.
        //       that is an asynchronous action. and has to happen before the esri layer
        //       can be created.
        //       means we need some type of promise for the map to know to wait on before adding the layer to it.
        //       could be a problem for adding things in order to the map. i.e. 1 layer delays, gets added later.
        //       if we have the synch layer stack we will be ok
        // TODO execute the logic to convert geoJson to EsriJson, then smash into feature layer
        const realJson: any = typeof geoJson === 'string' ? JSON.parse(geoJson) : geoJson;

        // esri 4: https://developers.arcgis.com/javascript/latest/sample-code/layers-featurelayer-collection/index.html
        // might need to change our terraformer call to just create a set of graphics? need to inspect terrafomer outputs

        // TODO figure out options parameter.
        // TODO look into supporting renderer from rampConfig. dont we already have something like this?
        // TODO should be a colour option. figure out where that comes from. will our ramp config have that? or is it sys option for wizard trickery?
        // TODO figure out how a sourceProjection option would work. who is supplying this? an API caller? RAMP UI / Config really doesnt support it.
        const opts = {
            layerId: rampLayerConfig.id || '',
            targetSR: systemOptions.mapSR
        };
        this.gapi.layers.file.geoJsonToEsriJson(realJson, opts).then((eJson: esri.FeatureLayerProperties) => {

            this.esriJson = eJson;
            // this will be asynch, triggered after the reprojection of the geojson
            this.innerLayer = new this.esriBundle.FeatureLayer(this.makeEsriLayerConfig(rampLayerConfig));

            this.esriJson = undefined;
            this.initLayer();
        });
    }

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): esri.FeatureLayerProperties {
        // TODO might want to add an extra paremter here, as we will be passing in fields, source graphics, renderer, etc.
        const esriConfig: esri.FeatureLayerProperties = super.makeEsriLayerConfig(rampLayerConfig);

        // TEMP CHECKLIST OF PROPERTIES
        // source - converter
        // objectIdField - converter
        // id - config || converter
        // fields - converter, possibly alias overrides from config
        // renderer - converter
        // spatialReference - converter
        // geometryType - converter
        // definitionExpression - TODO need to test / figure out. likely need to port to our filter framework and not set on the layer. might also be handled by AttribLayer plumbing


        // TODO add any extra properties for geoJson layers here
        //      in none, delete this function and let super get called automatically
        const copyProp: Array<string> = [
            'source',
            'objectIdField',
            'id',
            'fields',
            'renderer',
            'spatialReference',
            'geometryType'
        ];

        copyProp.forEach((p: string) => {
            esriConfig[p] = this.esriJson[p];
        });

        esriConfig.displayField = fieldValidator(<Array<esri.Field>>esriConfig.fields, rampLayerConfig.nameField) || 'OBJECTID';

        // TODO inspect rampLayerConfig for any config field alias overrides or field restrictions. apply them to esriConfig.fields

        this.esriJson = undefined; // done with parameter trickery, erase this.

        return esriConfig;
    }

    /**
     * Triggers when the layer loads.
     *
     * @function onLoadActions
     */
    onLoadActions (): Array<Promise<void>> {
        const loadPromises: Array<Promise<void>> = super.onLoadActions();

        // attempt to set custom renderer here. if fails, we can attempt on client but prefer it here
        // as this doesnt care where the layer came from
        // TODO implement custom renderers
        // TODO look at final implementation of FeatureLayer, will probably be similar
        /*
        if (this.origRampConfig.customRenderer.type) {
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

        }
        */

        // feature has only one layer
        const featIdx: number = 0; // GeoJSON is always 0
        const gjFC = new GeoJsonFC(this.infoBundle(), this, featIdx);
        this.fcs[featIdx] = gjFC;
        this.layerTree = new TreeNode(featIdx, gjFC.uid, this.name);

        // TODO implement symbology load
        // const pLS = aFC.loadSymbology();

        // update asynch data
        // TODO do all this lol
        // NOTE: call extract, not load, as there is no service involved here
        // TODO figure out what do to with custom renderer here
        gjFC.extractLayerMetadata();
        if (this.origRampConfig.tooltipField) {
            gjFC.tooltipField = fieldValidator(gjFC.fields, this.origRampConfig.tooltipField);
        } else {
            gjFC.tooltipField = gjFC.nameField;
        }

        /*

        // TODO add back in after we deicde https://github.com/james-rae/pocGAPI/issues/14

        // check the config for any custom field aliases, and add the alias as a property if it exists
        if (this.origRampConfig.fieldMetadata) {
            ld.fields.forEach(field => {
                const clientAlias = this.config.source.fieldMetadata.find(f => f.data === field.name);
                field.clientAlias = clientAlias ? clientAlias.alias : undefined;
            });
        }

        */

        gjFC.featureCount = (<esri.FeatureLayer>this.innerLayer).source.length;

        // if file based (or server extent was fried), calculate extent based on geometry
        // TODO implement this. may need a manual loop to calculate graphicsExtent since ESRI torpedo'd the function
        /*
        if (!this.extent || !this.extent.xmin) {
            this.extent = this._apiRef.proj.graphicsUtils.graphicsExtent(this._layer.graphics);
        }
        */

        return loadPromises;
    }

    // ----------- LAYER ACTIONS -----------

    identify(options: IdentifyParameters): IdentifyResultSet {

        // TODO this function is pretty much identical to FeatureLayer, now that we are using query for everything.
        //      the queryFeatures on the FC will automatically go to the correct server/file instance due to the
        //      overridden functions.
        //      once we figure out the tolerance/geometry and things are cooking, consider making this function
        //      the generic one on AttribLayer, and then MapImageLayer overrides it with the child variation.

        const myFC: GeoJsonFC = <GeoJsonFC>this.getFC(undefined); // undefined will get the first/only

        // early kickout check. not loaded/error; not visible; not queryable; off scale
        if (!this.isValidState() ||
            !myFC.getVisibility() ||
            // !this.isQueryable() || // TODO implement when we have this flag created
            myFC.scaleSet.isOffScale(options.map.getScale()).offScale) {

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
            uid: this.uid
        };

        const tolerance = options.tolerance || 0; // this.clickTolerance; // TODO remove the 0 and add the parameter once we implement clickTolerance from config constructor

        // run a spatial query
        // const qry: esri.Query = new this.esriBundle.Query();
        const qOpts: QueryFeaturesParams = {
            outFields: '*', // TODO investigate this further, possibly add in layer defined outfields
            includeGeometry: false,
            map: options.map
        };

        // more accurate results without making the buffer if we're dealing with extents
        // polygons from added file need buffer
        // TODO further investigate why esri is requiring buffer for file-based polygons. logic says it shouldnt
        // TODO FOR REAL TEST THIS OUT IN 4.x

        // TODO default to point for now, to make things work.
        //      need to figure out what format the core will be passing in geometry.
        //      might consider having an IdentifyUtils class (or use the queryservice) to help with these common things
        //      (e.g. this, buffer creation, etc)
        //      using Geometry.fromJSON does not work well, it won't figure out the type and cast-up
        const realGeom: esri.Geometry = this.esriBundle.Point.fromJSON(options.geometry);
        if (myFC.geomType === 'polygon') {
            qOpts.filterGeometry = realGeom;
        } else {
            // TODO investigate why we are using opts.clickEvent.mapPoint and not opts.geometry
            // TODO add buffer back once we have buffer tech ready
            // qOpts.filterGeometry = this.makeClickBuffer(opts.clickEvent.mapPoint, opts.map, tolerance);
            qOpts.filterGeometry = realGeom; // TODO remove me after buffer tech
        }

        result.done = myFC.queryFeatures(qOpts).then(results => {
            // TODO might be a problem overwriting the array if something is watching/binding to the original
            innerResult.items = results.map(gr => {
                return {
                    // TODO decide if we want to handle alias mapping here or not.
                    //      if we do, our "ESRI" format will need to include field metadata.
                    //      if we dont, we need to ensure an outside fixture can access field metadata via uid easily.
                    data: gr.attributes, // this.attributesToDetails(vAtt.attributes, layerData.fields),
                    format: IdentifyResultFormat.ESRI,

                    // See comments on IdentifyItem interface definition; we may decide to not keep these properties
                    // id:  gr.attributes[myFC.oidField].toString(),
                    // symbol: this.gapi.utils.symbology.getGraphicIcon(gr.attributes, myFC.renderer) // TODO use myFC.getIcon instead
                    // name: this.getFeatureName(vAtt.oid.toString(), vAtt.attributes),
                };
            });

            innerResult.isLoading = false;
        });

        return result;

    }

}

export default GeoJsonLayer;