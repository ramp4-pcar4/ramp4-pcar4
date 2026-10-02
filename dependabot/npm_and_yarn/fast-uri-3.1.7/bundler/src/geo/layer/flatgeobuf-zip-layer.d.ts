import { FileLayer, InstanceAPI } from '../../api/internal';
import { RampLayerConfig } from '../api';
/**
 * A layer class which implements an ESRI Feature Layer with data from a zipped FlatGeobuf source.
 */
export declare class FlatGeobufZipLayer extends FileLayer {
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    protected onInitiate(): Promise<void>;
}
