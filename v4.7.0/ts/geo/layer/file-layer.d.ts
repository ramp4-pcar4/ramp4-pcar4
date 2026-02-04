import { AttribLayer, InstanceAPI } from '@/api/internal';
import type { IdentifyResult } from '@/api/internal';
import { Graphic } from '@/geo/api';
import type { GetGraphicParams, IdentifyParameters, QueryFeaturesParams, RampLayerConfig } from '@/geo/api';
import { EsriFeatureLayer } from '@/geo/esri';
/**
 * A common layer class which is inherited by layer classes that implement map-based layers that are not server-bound after creation.
 */
export declare class FileLayer extends AttribLayer {
    esriLayer: EsriFeatureLayer | undefined;
    esriView: __esri.FeatureLayerView | undefined;
    protected esriJson: __esri.FeatureLayerProperties | undefined;
    protected sourceGeoJson: object | undefined;
    tooltipField: string;
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    reload(): Promise<void>;
    protected onInitiate(): Promise<void>;
    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): __esri.FeatureLayerProperties;
    /**
     * Triggers when the layer loads.
     *
     * @function onLoadActions
     */
    onLoadActions(): Array<Promise<void>>;
    runIdentify(options: IdentifyParameters): Array<IdentifyResult>;
    extractLayerMetadata(): void;
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
     * @returns {Promise} resolves with a Graphic
     */
    getGraphic(objectId: number, opts: GetGraphicParams): Promise<Graphic>;
    /**
     * Requests a set of features for this layer that match the criteria of the options
     * - filterGeometry : a RAMP API geometry to restrict results to
     * - filterSql : a where clause to apply against feature attributes
     * - filterOIDs : an array of Object IDs to filter against (more performant than SQL)
     * - includeGeometry : a boolean to indicate if result features should include the geometry
     * - outFields : a string of comma separated field names. will restrict fields included in the output
     * - sourceSR : a spatial reference indicating what the source layer is encoded in. providing can assist in result geometry being of a proper resolution
     *
     * @param options {Object} options to provide filters and helpful information.
     * @returns {Promise} resolves with an array of features that satisfy the criteria
     */
    queryFeatures(options: QueryFeaturesParams): Promise<Array<Graphic>>;
    /**
     * Will return an array of object ids for features in the layer that satisfy the conditions of the query options parameter.
     * @param options
     * @returns {Promise} resolving with an array of numbers (object ids)
     */
    queryOIDs(options: QueryFeaturesParams): Promise<Array<number>>;
    /**
     * Applies the current filter settings to the physical map layer.
     *
     * @function applySqlFilter
     * @param {Array} [exclusions] list of any filters to exclude from the result. omission includes all keys
     */
    applySqlFilter(exclusions?: Array<string>): void;
}
