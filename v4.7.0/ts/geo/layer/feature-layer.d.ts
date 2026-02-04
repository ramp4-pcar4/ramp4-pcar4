import { AttribLayer, InstanceAPI } from '@/api/internal';
import type { IdentifyResult } from '@/api/internal';
import { Extent } from '@/geo/api';
import type { IdentifyParameters, RampLayerConfig } from '@/geo/api';
import { EsriFeatureLayer } from '@/geo/esri';
/**
 * A layer class which implements an ESRI Feature Layer.
 */
export declare class FeatureLayer extends AttribLayer {
    esriLayer: EsriFeatureLayer | undefined;
    tooltipField: string;
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
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
    /**
     * Applies the current filter settings to the physical map layer.
     *
     * @function applySqlFilter
     * @param {Array} [exclusions] list of any filters to exclude from the result. omission includes all keys
     */
    applySqlFilter(exclusions?: Array<string>): void;
    /**
     * Gets the extent where the provided object id is on the map.
     * Can only be used on feature layers. Not applicable to point geometry.
     *
     * @param objectId the object id to query
     * @returns {Promise} resolves with the extent where the object id is present, rejects if geometry type is invalid or esri layer does not exist
     */
    getGraphicExtent(objectId: number): Promise<Extent>;
}
