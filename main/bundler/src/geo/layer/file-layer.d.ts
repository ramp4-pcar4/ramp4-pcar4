import { AttribLayer, InstanceAPI, IdentifyResult } from '../../api/internal';
import { Graphic, GetGraphicParams, IdentifyParameters, QueryFeaturesParams, RampLayerConfig } from '../api';
import { EsriFeatureLayer } from '../esri';
/**
 * A common layer class which is inherited by layer classes that implement map-based layers that are not server-bound after creation.
 */
export declare class FileLayer extends AttribLayer {
    esriLayer: EsriFeatureLayer | undefined;
    esriView: __esri.FeatureLayerView | undefined;
    protected esriJson: __esri.FeatureLayerProperties | undefined;
    protected sourceGeoJson: object | undefined;
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
    protected onLoadActions(): Array<Promise<void>>;
    runIdentify(options: IdentifyParameters): Array<IdentifyResult>;
    extractLayerMetadata(): void;
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
    applySqlFilter(exclusions?: Array<string>): void;
}
