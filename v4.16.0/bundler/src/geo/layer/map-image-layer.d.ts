import { InstanceAPI, MapLayer, IdentifyResult } from '../../api/internal';
import { DrawState, LayerState, IdentifyParameters, RampLayerConfig } from '../api';
import { EsriMapImageLayer } from '../esri';
/**
 * A layer class which implements an ESRI Map Image Layer.
 */
export declare class MapImageLayer extends MapLayer {
    isDynamic: boolean;
    private origState;
    esriLayer: EsriMapImageLayer | undefined;
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    /**
     * We delay the visibility change of the esri layer when going invisible to avoid flicker.
     * This tracks what our intended viz state is, i.e. what they layer is pretending to be.
     * See issue #2815 for all kinds of details on the flicker
     */
    private actualViz;
    get visibility(): boolean;
    set visibility(newVisibility: boolean);
    protected onInitiate(): Promise<void>;
    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): __esri.MapImageLayerProperties;
    protected onLoadActions(): Array<Promise<void>>;
    updateLayerState(newState: LayerState, userCancel?: boolean): void;
    updateDrawState(newState: DrawState): void;
    runIdentify(options: IdentifyParameters): Array<IdentifyResult>;
}
