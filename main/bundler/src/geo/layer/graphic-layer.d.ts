import { CommonGraphicLayer, InstanceAPI } from '../../api/internal';
import { RampLayerConfig } from '../api';
/**
 * A common layer class which implements a basic graphic layer (vector graphics not bound to a schema).
 */
export declare class GraphicLayer extends CommonGraphicLayer {
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    protected onInitiate(): Promise<void>;
    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): __esri.GraphicsLayerProperties;
    protected onLoadActions(): Array<Promise<void>>;
}
