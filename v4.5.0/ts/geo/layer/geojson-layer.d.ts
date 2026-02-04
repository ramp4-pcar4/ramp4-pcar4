import { FileLayer, InstanceAPI } from '@/api/internal';
import { type RampLayerConfig } from '@/geo/api';
/**
 * A layer class which implements an ESRI Feature Layer with data from a GeoJSON source.
 */
export declare class GeoJsonLayer extends FileLayer {
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    protected onInitiate(): Promise<void>;
}
