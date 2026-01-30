import { InstanceAPI, MapLayer } from '../../api/internal';
import { RampLayerConfig } from '../api';
import { EsriOpenStreetMapLayer } from '../esri';
/**
 * A layer class which implements an OpenStreetMap Tile Layer.
 */
export declare class OsmTileLayer extends MapLayer {
    esriLayer: EsriOpenStreetMapLayer | undefined;
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    protected onInitiate(): Promise<void>;
    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): __esri.OpenStreetMapLayerProperties;
    protected onLoadActions(): Array<Promise<void>>;
}
