import { FileLayer, InstanceAPI } from '@/api/internal';
import { type RampLayerConfig } from '@/geo/api';
/**
 * A layer class which implements an ESRI Feature Layer with data from a Shapefile zip.
 */
export declare class ShapefileLayer extends FileLayer {
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    protected onInitiate(): Promise<void>;
}
