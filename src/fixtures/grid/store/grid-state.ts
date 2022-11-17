import type TableStateManager from './table-state-manager';
import type { PanelConfig } from '@/store/modules/panel';
import type { PanelWidthObject } from '@/api';

export class GridState {
    /**
     * A list of all existing grid configuration files.
     *
     * @type {{ [id: string]: GridConfig }}
     * @memberof GridState
     */
    grids: { [id: string]: GridConfig } = {};

    /**
     * The grid panel.
     *
     * @type {PanelConfig | null}
     * @memberof GridState
     */
    panel: PanelConfig | null = null;

    /**
     * The id of the layer that is currently open in the grid.
     *
     * @type {(string | null)}
     * @memberof GridState
     */
    currentId: string | null = null;
}

export interface GridConfig {
    /**
     * The id for the layer that this grid represents.
     *
     * @type {String}
     * @memberof GridItemConfig
     */
    id: string;

    /**
     * The state manager for this grid.
     *
     * @type {PanelStateManager}
     * @memberof GridItemConfig
     */
    state: TableStateManager;

    /**
     * The width of the grid panel in pixels.
     *
     * @type {number}
     * @interface GridConfig
     */
    panelWidth: PanelWidthObject | number;
}
