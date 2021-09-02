// this is a generic for all file based layers. they share a lot of common code.
// the specific implementations will be made in the layer subfolders.
// most of the implementations will only change the initiate() code, which will have whatever
// custom pre-processing of data to massage it into geojson for this class to process.

import { AttribLayer, FileFC, InstanceAPI } from '@/api/internal';
import {
    DefPromise,
    GeometryType,
    IdentifyParameters,
    IdentifyResult,
    IdentifyResultFormat,
    IdentifyResultSet,
    LayerType,
    Point,
    QueryFeaturesParams,
    RampLayerConfig,
    TreeNode
} from '@/geo/api';
import { EsriFeatureLayer, EsriField } from '@/geo/esri';
import { markRaw } from 'vue';

// util function to manage trickery. file layer can have field names that are bad keys.
// our file loader will have corrected them, but ramp layer config .nameField and .tooltipField may
// still have the original field names.
// This function will return a valid field name for a given field name. First attempts at
// direct match, then attempts to reverse any bad field renaming logic.
function fieldValidator(fields: Array<EsriField>, targetName: string): string {
    if (fields.findIndex(f => f.name === targetName) === -1) {
        // no direct match found.
        const validField = fields.find(f => f.alias === targetName);
        if (validField) {
            return validField.name;
        } else {
            // give warning and return OBJECTID, which is guaranteed to exist in file layer.
            // Issue is not critical enough to blow up the app with an error
            console.warn(`Cannot find name field in layer field list: ${targetName}`);
            return 'OBJECTID';
        }
    } else {
        // target name was ok
        return targetName;
    }
}

export class FileLayer extends AttribLayer {
    esriLayer: EsriFeatureLayer | undefined;
    esriView: __esri.FeatureLayerView | undefined;

    protected esriJson: __esri.FeatureLayerProperties | undefined; // used as temp var to get around typescript parameter grousing. will be undefined after initLayer()

    sourceGeoJson: string | object | undefined; // TODO property for now. need to make final decison of how source geojson gets provided for initiate() to consume.

    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.supportsIdentify = true;
        this.isFile = true;
        this._layerType = LayerType.FEATURE;
    }

    async initiate(): Promise<void> {
        // NOTE subclasses of FileLayer should do all their file data processing first,
        //      drop it in this.sourceGeoJson,
        //      then call super.initiate() as final step.

        // TODO figure out how the geojson is supplied.
        // another protected property? a permananent property to support reloads? part of rampConfig?

        const realJson: any =
            typeof this.sourceGeoJson === 'string'
                ? JSON.parse(this.sourceGeoJson)
                : this.sourceGeoJson;

        // esri 4: https://developers.arcgis.com/javascript/latest/sample-code/layers-featurelayer-collection/index.html
        // might need to change our terraformer call to just create a set of graphics? need to inspect terrafomer outputs

        // TODO figure out options parameter.
        // TODO look into supporting renderer from rampConfig. dont we already have something like this?
        // TODO should be a colour option. figure out where that comes from. will our ramp config have that? or is it sys option for wizard trickery?
        // TODO figure out how a sourceProjection option would work. who is supplying this? an API caller? RAMP UI / Config really doesnt support it.
        const opts = {
            layerId: this.origRampConfig.id || '',
            targetSR: this.$iApi.geo.map.getSR()
        };

        this.esriJson = await this.$iApi.geo.layer.files.geoJsonToEsriJson(realJson, opts);

        this.esriLayer = markRaw(
            new EsriFeatureLayer(this.makeEsriLayerConfig(this.origRampConfig))
        );

        this.esriJson = undefined;

        await super.initiate();
    }

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): __esri.FeatureLayerProperties {
        // TODO might want to add an extra paremter here, as we will be passing in fields, source graphics, renderer, etc.
        const esriConfig: __esri.FeatureLayerProperties = super.makeEsriLayerConfig(
            rampLayerConfig
        );

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
            // @ts-ignore
            esriConfig[p] = this.esriJson[p];
        });

        esriConfig.displayField =
            fieldValidator(
                <Array<EsriField>>esriConfig.fields,
                this.origRampConfig.nameField || ''
            ) || 'OBJECTID';
        esriConfig.outFields = ['*']; // TODO eventually will want this overridable by the config.

        // TODO inspect rampLayerConfig for any config field alias overrides or field restrictions. apply them to esriConfig.fields

        this.esriJson = undefined; // done with parameter trickery, erase this.

        delete esriConfig.url;

        return esriConfig;
    }

    /**
     * Triggers when the layer loads.
     *
     * @function onLoadActions
     */
    onLoadActions(): Array<Promise<void>> {
        const loadPromises: Array<Promise<void>> = super.onLoadActions();

        if (!this.layerTree) {
            throw new Error('superclass did not create layer tree');
        }

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
        const fFC = new FileFC(this, featIdx);
        fFC.name = this.name; // geojson layer is flat, so the FC and layer share their name. we do this here and not in extractMetaData because .name is private
        this.fcs[featIdx] = fFC;
        this.layerTree.children.push(new TreeNode(featIdx, fFC.uid, this.name));

        // TODO implement symbology load
        // const pLS = aFC.loadSymbology();

        // NOTE: call extract, not load, as there is no service involved here
        // TODO figure out what do to with custom renderer here
        fFC.extractLayerMetadata();
        // NOTE name field overrides from config have already been applied by this point
        if (this.origRampConfig.tooltipField) {
            fFC.tooltipField = fieldValidator(fFC.fields, this.origRampConfig.tooltipField);
        } else {
            fFC.tooltipField = fFC.nameField;
        }

        fFC.processFieldMetadata(this.origRampConfig.fieldMetadata);
        if (!fFC.attLoader) {
            throw new Error('file fc did not have attribute loader object');
        }
        fFC.attLoader.updateFieldList(fFC.fieldList);

        fFC.featureCount = this.esriLayer?.source.length || 0;

        // if file based (or server extent was fried), calculate extent based on geometry
        // TODO implement this. may need a manual loop to calculate graphicsExtent since ESRI torpedo'd the function
        /*
        if (!this.extent || !this.extent.xmin) {
            this.extent = this._apiRef.proj.graphicsUtils.graphicsExtent(this._layer.graphics);
        }
        */

        // TODO testing this out for now. our SQL support needs the view in place, so this delays our load promise until the view is ready.
        //      if this becomes problematic (e.g. we want to create a layer and have it "load" without adding it to a map),
        //      we can instead put the view promise dependency on the applySqlFilter of GeoJsonFC. this will require making the viewPromise public.
        //      Alllso, we might consider putting this promise in the onLoadActions of BaseLayer, if we find other layers
        //      become hooked on the power of the view and require it to be ready.
        loadPromises.push(this.viewPromise.getPromise());

        return loadPromises;
    }

    // ----------- LAYER ACTIONS -----------

    identify(options: IdentifyParameters): IdentifyResultSet {
        // TODO this function is pretty much identical to FeatureLayer, now that we are using query for everything.
        //      the queryFeatures on the FC will automatically go to the correct server/file instance due to the
        //      overridden functions.
        //      once we figure out the tolerance/geometry and things are cooking, consider making this function
        //      the generic one on AttribLayer, and then MapImageLayer overrides it with the child variation.

        const myFC: FileFC = <FileFC>this.getFC(undefined); // undefined will get the first/only
        const map = this.$iApi.geo.map;

        // early kickout check. not loaded/error; not visible; not queryable; off scale
        if (
            !this.isValidState() ||
            !myFC.getVisibility() ||
            // !this.isQueryable() || // TODO implement when we have this flag created
            myFC.scaleSet.isOffScale(map.getScale()).offScale
        ) {
            // return empty result.
            return super.identify(options);
        }

        let loadResolve: any;
        const innerResult: IdentifyResult = {
            uid: myFC.uid,
            loadPromise: new Promise(resolve => {
                loadResolve = resolve;
            }),
            items: []
        };

        const result: IdentifyResultSet = {
            results: [innerResult],
            done: Promise.resolve(), // set properly below
            parentUid: this.uid
        };

        const tolerance = options.tolerance || 0; // this.clickTolerance; // TODO remove the 0 and add the parameter once we implement clickTolerance from config constructor

        // run a spatial query
        const qOpts: QueryFeaturesParams = {
            outFields: myFC.fieldList,
            includeGeometry: false
        };

        // TODO in RAMP2, it was found that doing a point identify against a polygon layer
        //      needed a buffer when running against local feature layers (file based, WFS, etc)
        //      this never made much sense, re-test against ESRI 4.x api

        if (
            myFC.geomType !== GeometryType.POLYGON &&
            options.geometry.type === GeometryType.POINT
        ) {
            // if our layer is not polygon, and our identify input is a point, make a point buffer
            qOpts.filterGeometry = this.$iApi.geo.utils.query.makeClickBuffer(
                <Point>options.geometry,
                options.tolerance
            );
        } else {
            qOpts.filterGeometry = options.geometry;
        }

        // TODO: Test if works after #206 is implemented
        qOpts.filterSql = myFC.getCombinedSqlFilter();

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
                    // symbol: this.$iApi.geo.utils.symbology.getGraphicIcon(gr.attributes, myFC.renderer) // TODO use myFC.getIcon instead
                    // name: this.getFeatureName(vAtt.oid.toString(), vAtt.attributes),
                };
            });

            // Resolve the load promise
            loadResolve();
        });

        return result;
    }
}
