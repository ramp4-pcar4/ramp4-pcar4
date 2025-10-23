import { default as TableStateManager } from './table-state-manager';
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
    /**
     * The field mapping for this grid.
     *
     * @type { [source: string]: string }
     * @memberof GridConfig
     */
    fieldMap: {
        [source: string]: string;
    };
}
export interface MergeGridConfig {
    /**
     * The id of the merge grid.
     */
    gridId: string;
    /**
     * Ids for layers contained in the merge grid.
     */
    layers: {
        layerId: string;
        subLayers: number[];
    };
    /**
     * The state options for the merge grid.
     */
    options: TableStateOptions;
    /**
     * The mapping parameters for the merge grid.
     */
    fieldMap: {
        field: string;
        sources: string[];
    };
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
    controls: (string | ActionButtonDefinition)[];
}
export interface AttributeMapPair {
    origAttr: string;
    mappedAttr: string | undefined;
}
export interface ActionButtonDefinition {
    actionEvent: string;
    icon: string;
    tooltip: string;
    displayOn: string;
}
