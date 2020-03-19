import TableStateManager from './table-state-manager';
import { PanelConfig } from '@/store/modules/panel';

export class GridState {
    /**
     * A list of all existing grid configuration files.
     *
     * @type {{ [uid: string]: GridConfig }}
     * @memberof GridState
     */
    grids: { [uid: string]: GridConfig } = {};

    /**
     * The grid panel.
     *
     * @type {PanelConfig | null}
     * @memberof GridState
     */
    panel: PanelConfig | null = null;

    /**
     * The uid of the layer that is currently open in the grid.
     *
     * @type {(string | null)}
     * @memberof GridState
     */
    open: String | null = null;
}

export interface GridConfig {
    /**
     * The uid for the layer that this grid represents.
     *
     * @type {String}
     * @memberof GridItemConfig
     */
    uid: string;

    /**
     * The state manager for this grid.
     *
     * @type {PanelStateManager}
     * @memberof GridItemConfig
     */
    state: TableStateManager;
}
