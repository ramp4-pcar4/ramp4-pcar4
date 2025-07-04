import { FixtureInstance } from '../../../api';
import { MergeGridConfig } from '../store';
export declare class GridAPI extends FixtureInstance {
    private gridStore;
    /**
     * Open the grid with the given id.
     *
     * @param {string} id
     * @param {boolean} [open] force panel open or closed
     * @memberof GridAPI
     */
    toggleGrid(id: string, open?: boolean): void;
    /**
     * Parses the grid config JSON snippet from the config file.
     *
     * @param {any} config
     * @memberof GridAPI
     */
    _parseConfig(config?: {
        mergeGrids: MergeGridConfig[];
    }): void;
}
