import { DataLayer, InstanceAPI } from '../../api/internal';
import { RampLayerConfig } from '../api';
/**
 * A layer class which implements a Data Layer with data from a Compact JSON source.
 */
export declare class JsonDataLayer extends DataLayer {
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    protected onInitiate(): Promise<void>;
}
