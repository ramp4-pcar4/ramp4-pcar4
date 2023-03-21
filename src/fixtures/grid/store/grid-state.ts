import type TableStateManager from './table-state-manager';

export interface GridConfig {
    /**
     * The id for the layer that this grid represents.
     *
     * @type {String}
     * @memberof GridConfig
     */
    id: string;

    /**
     * The state manager for this grid.
     *
     * @type {PanelStateManager}
     * @memberof GridConfig
     */
    state: TableStateManager;
}
