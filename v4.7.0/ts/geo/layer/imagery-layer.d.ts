import { InstanceAPI, MapLayer } from '@/api/internal';
import type { RampLayerConfig } from '@/geo/api';
import { EsriImageryLayer } from '@/geo/esri';
/**
 * A layer class which implements an ESRI Imagery Layer.
 */
export declare class ImageryLayer extends MapLayer {
    esriLayer: EsriImageryLayer | undefined;
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    protected onInitiate(): Promise<void>;
    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): __esri.ImageryLayerProperties;
    /**
     * Triggers when the layer loads.
     *
     * @function onLoadActions
     */
    onLoadActions(): Array<Promise<void>>;
}
