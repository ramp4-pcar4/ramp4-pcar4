// this is a generic for all file based layers. they share a lot of common code.
// the specific implementations will be made in the layer subfolders.
// most of the implementations will only change the initiate() code, which will have whatever
// custom pre-processing of data to massage it into geojson for this class to process.

import {
    AttribLayer,
    AttributeLoaderDetails,
    FileLayerAttributeLoader,
    InstanceAPI,
    QueryFeaturesFileParams,
    QuickCache
} from '@/api/internal';
import {
    DataFormat,
    DefPromise,
    Extent,
    GeometryType,
    GetGraphicParams,
    GetGraphicResult,
    IdentifyItem,
    IdentifyParameters,
    IdentifyResult,
    IdentifyResultFormat,
    LayerType,
    Point,
    QueryFeaturesParams,
    RampLayerConfig
} from '@/geo/api';
import {
    EsriFeatureFilter,
    EsriFeatureLayer,
    EsriField,
    EsriRendererFromJson
} from '@/geo/esri';
import { markRaw, toRaw } from 'vue';

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
            console.warn(
                `Cannot find name field in layer field list: ${targetName}`
            );
            return 'OBJECTID';
        }
    } else {
        // target name was ok
        return targetName;
    }
}

export class FileLayer extends AttribLayer {
    declare esriLayer: EsriFeatureLayer | undefined;
    declare esriView: __esri.FeatureLayerView | undefined;

    protected esriJson: __esri.FeatureLayerProperties | undefined; // used as temp var to get around typescript parameter grousing. will be undefined after initLayer()

    sourceGeoJson: string | object | undefined; // TODO property for now. need to make final decison of how source geojson gets provided for initiate() to consume.

    tooltipField: string; // TODO if we end up having more things that are shared with FeatureLayer, consider making a FeatureBaseLayer class for both to inherit from

    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.supportsIdentify = true;
        this.isFile = true;
        this.layerType = LayerType.FEATURE;
        this.dataFormat = DataFormat.ESRI_FEATURE;
        this.tooltipField = '';
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

        this.esriJson = await this.$iApi.geo.layer.files.geoJsonToEsriJson(
            realJson,
            opts
        );

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
    protected makeEsriLayerConfig(
        rampLayerConfig: RampLayerConfig
    ): __esri.FeatureLayerProperties {
        // TODO might want to add an extra paremter here, as we will be passing in fields, source graphics, renderer, etc.
        const esriConfig: __esri.FeatureLayerProperties =
            super.makeEsriLayerConfig(rampLayerConfig);

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

        // setting custom renderer here (if one is provided)
        if (this.esriLayer && this.origRampConfig.customRenderer?.type) {
            this.esriLayer.renderer = EsriRendererFromJson(
                this.config.customRenderer
            );
        }

        this.layerTree.name = this.name;

        // TODO implement symbology load
        // const pLS = aFC.loadSymbology();

        // NOTE: call extract, not load, as there is no service involved here
        // TODO figure out what do to with custom renderer here
        this.extractLayerMetadata();
        // NOTE name field overrides from config have already been applied by this point
        if (this.origRampConfig.tooltipField) {
            this.tooltipField = fieldValidator(
                this.esriFields,
                this.origRampConfig.tooltipField
            );
        } else {
            this.tooltipField = this.nameField;
        }

        this.processFieldMetadata(this.origRampConfig.fieldMetadata);
        if (!this.attLoader) {
            throw new Error('file fc did not have attribute loader object');
        }
        this.attLoader.updateFieldList(this.fieldList);

        this.featureCount = this.esriLayer?.source.length || 0;

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

    runIdentify(options: IdentifyParameters): Array<IdentifyResult> {
        // TODO this function is pretty much identical to FeatureLayer, now that we are using query for everything.
        //      the queryFeatures on the sublayer will automatically go to the correct server/file instance due to the
        //      overridden functions.
        //      once we figure out the tolerance/geometry and things are cooking, consider making this function
        //      the generic one on AttribLayer, and then MapImageLayer overrides it with the child variation.

        const map = this.$iApi.geo.map;

        // early kickout check. not loaded/error; not visible; not queryable; off scale
        if (
            !this.isValidState ||
            !this.visibility ||
            !this.identify ||
            this.scaleSet.isOffScale(map.getScale()).offScale
        ) {
            // return empty result.
            return [];
        }

        const dProm = new DefPromise();

        const result: IdentifyResult = {
            items: [],
            loading: dProm.getPromise(),
            loaded: false,
            uid: this.uid
        };

        // run a spatial query
        const qOpts: QueryFeaturesParams = {
            outFields: this.fieldList,
            includeGeometry: false
        };

        if (
            this.geomType !== GeometryType.POLYGON &&
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

        qOpts.filterSql = this.getCombinedSqlFilter();

        this.queryFeatures(qOpts).then(results => {
            results.forEach(gr => {
                // file layer resolves all items at once,
                // so our item-level stuff can be created in
                // a loaded state

                const item: IdentifyItem = {
                    data: gr.attributes,
                    format: IdentifyResultFormat.ESRI,
                    loaded: true,
                    loading: Promise.resolve()
                };

                result.items.push(item); // push, incase something was bound to the array
            });

            // Resolve the loading promise, set the flag
            dProm.resolveMe();
            result.loaded = true;
        });

        return [result];
    }

    extractLayerMetadata(): void {
        const l = this.esriLayer;
        if (!l) {
            throw new Error(
                'file layer attempted to extract data from esri layer, esri layer did not exist'
            );
        }

        // properties for all endpoints
        this.supportsFeatures = true;

        this.geomType = this.$iApi.geo.utils.geom.clientGeomTypeToRampGeomType(
            l.geometryType
        );
        this.quickCache = new QuickCache(this.geomType);

        // TODO if we ever make config override for scale, would need to apply on the layer constructor, will end up here
        this.scaleSet.minScale = l.minScale || 0;
        this.scaleSet.maxScale = l.maxScale || 0;

        // TODO will need to calculate this as esri removed their library to calculate it
        // TODO check if layer auto-gens this in .fullExtent
        this.extent = Extent.fromESRI(l.fullExtent, this.id + '_extent');

        this.esriFields = l.fields;
        this.nameField = l.displayField;
        this.oidField = l.objectIdField;

        // if there was a custom renderer in the config, it would have been applied when the
        // layer was constructed. no need to check here.
        this.renderer = this.$iApi.geo.utils.symbology.makeRenderer(
            l.renderer,
            this.esriFields
        );

        // this array will have a set of promises that resolve when all the legend svg has drawn.
        // for now, will not include that set (promise.all'd) on the layer load blocker;
        // don't want to stop a layer from loading just because an icon won't draw.
        // ideally we'll have placeholder symbol (white square, loading symbol, caution symbol, etc)
        this.legend = this.$iApi.geo.utils.symbology.rendererToLegend(
            this.renderer
        );

        const loadData: AttributeLoaderDetails = {
            sourceGraphics: l.source,
            oidField: this.oidField,
            attribs: '*', // * as default. layer loader may update after processing config overrides
            batchSize: -1
        };
        this.attLoader = new FileLayerAttributeLoader(this.$iApi, loadData);
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
    async getGraphic(
        objectId: number,
        opts: GetGraphicParams
    ): Promise<GetGraphicResult> {
        const gjOpt: QueryFeaturesParams = {
            filterSql: `${this.oidField}=${objectId}`,
            includeGeometry: !!opts.getGeom
        };

        // TODO not sure how much we care about this. since local, result will always have attribs and geom,
        //      regardless of what requester asked for.
        //      if thats a problem, add some logic to pare off properties of the result (might need to clone
        //      to avoid breaking original source in the layer)

        const resultArr = await this.queryFeatures(gjOpt);
        if (resultArr.length === 0) {
            throw new Error(`Could not find object id ${objectId}`);
        } else if (resultArr.length !== 1) {
            console.warn(
                'did not get a single result on a query for a specific object id'
            );
        }
        return resultArr[0];
    }

    // TODO we are using the getgraphic type as it's an unbound loosely typed feature
    //      may want to change name of the type to something more general

    /**
     * Requests a set of features for this layer that match the criteria of the options
     * - filterGeometry : a RAMP API geometry to restrict results to
     * - filterSql : a where clause to apply against feature attributes
     * - includeGeometry : a boolean to indicate if result features should include the geometry
     * - outFields : a string of comma separated field names. will restrict fields included in the output
     * - sourceSR : a spatial reference indicating what the source layer is encoded in. providing can assist in result geometry being of a proper resolution
     * - map : a Ramp map. required if geometry was requested and the layer is not on a map
     *
     * @param options {Object} options to provide filters and helpful information.
     * @returns {Promise} resolves with an array of features that satisfy the criteria
     */
    async queryFeatures(
        options: QueryFeaturesParams
    ): Promise<Array<GetGraphicResult>> {
        const gjOpt: QueryFeaturesFileParams = {
            layer: this,
            ...options
        };

        return this.$iApi.geo.utils.query.geoJsonQuery(gjOpt);
    }

    // TODO this is more of a utility function. leaving it public as it might be useful, revist when
    //      the app is mature.
    async queryOIDs(options: QueryFeaturesParams): Promise<Array<number>> {
        const gjOpt: QueryFeaturesFileParams = {
            layer: this,
            ...options
        };

        // run the query. since geojson is local, the util always returns everything.
        // iterate through the results and strip out the OIDs
        const gjFeats = await this.$iApi.geo.utils.query.geoJsonQuery(gjOpt);
        return gjFeats.map(feat =>
            feat.attributes ? feat.attributes[this.oidField] : -1
        );
    }

    /**
     * Applies the current filter settings to the physical map layer.
     *
     * @function applySqlFilter
     * @param {Array} [exclusions] list of any filters to exclude from the result. omission includes all keys
     */
    applySqlFilter(exclusions: Array<string> = []): void {
        if (!this.esriView) {
            this.noLayerErr();
            return;
        }

        const sql = this.filter.getCombinedSql(exclusions);

        // NOTE this can be expanded to have spatial filters as well. if we head to that,
        //      will will need to ensure any spatial elements get included in the new FeatureFilter
        toRaw(this.esriView).filter = new EsriFeatureFilter({
            where: sql
        });
    }
}
