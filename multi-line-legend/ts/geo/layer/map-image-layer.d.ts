import { InstanceAPI, MapLayer } from '@/api/internal';
import type { IdentifyResult } from '@/api/internal';
import { DrawState, LayerState } from '@/geo/api';
import type { IdentifyParameters, RampLayerConfig } from '@/geo/api';
import { EsriMapImageLayer } from '@/geo/esri';
/**
 * A layer class which implements an ESRI Map Image Layer.
 */
export declare class MapImageLayer extends MapLayer {
    isDynamic: boolean;
    private origState;
    esriLayer: EsriMapImageLayer | undefined;
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    protected onInitiate(): Promise<void>;
    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): __esri.MapImageLayerProperties;
    /**
     * Triggers when the layer loads.
     *
     * @function onLoadActions
     */
    onLoadActions(): Array<Promise<void>>;
    updateLayerState(newState: LayerState): void;
    updateDrawState(newState: DrawState): void;
    runIdentify(options: IdentifyParameters): Array<IdentifyResult>;
}
