import type TableStateManager from './table-state-manager';

export interface GridConfig {
    /**
     * The id of the grid.
     *
     * @type {String}
     * @memberof GridConfig
     */
    id: string;

    /**
     * The ids for the layers that this grid contains.
     *
     * @type {Array<String>}
     * @memberof GridConfig
     */
    layerIds: string[];

    /**
     * The state manager for this grid.
     *
     * @type {PanelStateManager}
     * @memberof GridConfig
     */
    state: TableStateManager;
}

export interface TableStateOptions {
    title: string;
    showFilter: boolean;
    filterByExtent: boolean;
    columns: any;
    open: boolean;
    filtered: boolean;
    search: boolean;
    searchFilter: string;
    applyToMap: boolean;
}

export interface AttributeMapPair {
    origAttr: string;
    mappedAttr: string | undefined;
}
