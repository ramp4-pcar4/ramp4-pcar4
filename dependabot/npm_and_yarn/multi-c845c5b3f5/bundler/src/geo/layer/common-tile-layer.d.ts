import { InstanceAPI, MapLayer } from '../../api/internal';
import { RampLayerConfig } from '../api';
/**
 * A common layer class which is inherited by layer classes that implement tile layers (layers locked in a tile schema).
 */
export declare class CommonTileLayer extends MapLayer {
    /**
     * Determines if we run a "matching projection" check when the layer loads.
     * Appears that imagery tile layers will reproject, so this allows them to skip it
     * @private
     */
    schemaLocked: boolean;
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    protected onLoadActions(): Array<Promise<void>>;
    /**
     * Check if the layer's projection matches the current basemap's.
     * If they do not match the layer will enter the error state and the user will receive a warning notification
     * If the layers do match and the layer was previously in the error state, it will reload.
     */
    checkProj(): Promise<void>;
}
