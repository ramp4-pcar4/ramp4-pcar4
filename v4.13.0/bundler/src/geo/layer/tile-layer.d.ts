import { InstanceAPI, MapLayer } from '../../api/internal';
import { RampLayerConfig } from '../api';
import { EsriTileLayer } from '../esri';
/**
 * A layer class which implements an ESRI Tile Layer.
 */
export declare class TileLayer extends MapLayer {
    esriLayer: EsriTileLayer | undefined;
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    protected onInitiate(): Promise<void>;
    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): __esri.TileLayerProperties;
    protected onLoadActions(): Array<Promise<void>>;
    /**
     * Check if the layer's projection matches the current basemap's.
     * If they do not match the layer will enter the error state and the user will receive a warning notification
     * If the layers do match and the layer was previously in the error state, it will reload.
     */
    checkProj(): Promise<void>;
}
