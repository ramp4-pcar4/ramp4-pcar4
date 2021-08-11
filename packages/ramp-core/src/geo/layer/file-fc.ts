// TODO add proper comments

import {
    AttribFC,
    AttributeLoaderDetails,
    FileLayer,
    FileLayerAttributeLoader,
    QueryFeaturesFileParams,
    QuickCache
} from '@/api/internal';
import {
    DataFormat,
    GetGraphicParams,
    GetGraphicResult,
    QueryFeaturesParams
} from '@/geo/api';
import { EsriFeatureFilter } from '@/geo/esri';
import { toRaw } from 'vue';

export class FileFC extends AttribFC {
    // @ts-ignore
    protected parentLayer: FileLayer;
    tooltipField: string; // TODO if we end up having more things that are shared with FeatureFC, consider making a FeatureBaseFC class for both to inherit from

    constructor(parent: FileLayer, layerIdx: number = 0) {
        super(parent, layerIdx);
        this.dataFormat = DataFormat.ESRI_FEATURE;
        this.tooltipField = '';
    }

    extractLayerMetadata(): void {
        const l = this.parentLayer.esriLayer;
        if (!l) {
            throw new Error(
                'file layer attempted to extract data from esri layer, esri layer did not exist'
            );
        }

        // properties for all endpoints
        this.supportsFeatures = true;

        this.geomType = this.parentLayer.$iApi.geo.utils.geom.clientGeomTypeToRampGeomType(
            l.geometryType
        );
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

        // if there was a custom renderer in the config, it would have been applied when the
        // layer was constructed. no need to check here.
        this.renderer = this.parentLayer.$iApi.geo.utils.symbology.makeRenderer(
            l.renderer,
            this.fields
        );

        // this array will have a set of promises that resolve when all the legend svg has drawn.
        // for now, will not include that set (promise.all'd) on the layer load blocker;
        // don't want to stop a layer from loading just because an icon won't draw.
        // ideally we'll have placeholder symbol (white square, loading symbol, caution symbol, etc)
        this.legend = this.parentLayer.$iApi.geo.utils.symbology.rendererToLegend(
            this.renderer
        );

        const loadData: AttributeLoaderDetails = {
            sourceGraphics: l.source,
            oidField: this.oidField,
            attribs: '*', // * as default. layer loader may update after processing config overrides
            batchSize: -1
        };
        this.attLoader = new FileLayerAttributeLoader(
            this.parentLayer.$iApi,
            loadData
        );
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
            layer: this.parentLayer,
            ...options
        };

        return this.parentLayer.$iApi.geo.utils.query.geoJsonQuery(gjOpt);
    }

    // TODO this is more of a utility function. leaving it public as it might be useful, revist when
    //      the app is mature.
    async queryOIDs(options: QueryFeaturesParams): Promise<Array<number>> {
        const gjOpt: QueryFeaturesFileParams = {
            layer: this.parentLayer,
            ...options
        };

        // run the query. since geojson is local, the util always returns everything.
        // iterate through the results and strip out the OIDs
        const gjFeats = await this.parentLayer.$iApi.geo.utils.query.geoJsonQuery(
            gjOpt
        );
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
        if (!this.parentLayer.esriView) {
            this.noLayerErr();
            return;
        }

        const sql = this.filter.getCombinedSql(exclusions);

        // NOTE this can be expanded to have spatial filters as well. if we head to that,
        //      will will need to ensure any spatial elements get included in the new FeatureFilter
        toRaw(this.parentLayer.esriView).filter = new EsriFeatureFilter({
            where: sql
        });
    }
}
