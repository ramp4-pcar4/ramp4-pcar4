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
    layerIds: Array<string>;

    /**
     * The state manager for this grid.
     *
     * @type {PanelStateManager}
     * @memberof GridConfig
     */
    state: TableStateManager;

    /**
     * The field mapping for this grid. Maps fields in source layers to fields in the grid.
     *
     * @type { [source: string]: string }
     * @memberof GridConfig
     */
    fieldMap: { [source: string]: string };
}

export interface MergeGridConfig {
    /**
     * The id of the merge grid.
     */
    gridId: string;

    /**
     * Ids for layers contained in the merge grid.
     */
    layers: Array<{
        /**
         * Layer id for layer used in merge grid
         */
        layerId: string;
        /**
         * If layer is an MIL, the sublayer indexes being used in the merge grid
         */
        subLayers: Array<number>;
    }>;

    /**
     * The state options for the merge grid.
     */
    options: TableStateOptions;

    /**
     * The mapping parameters for the merge grid.
     */
    fieldMap: Array<{
        /**
         * Target field name in the merge grid
         */
        field: string;
        /**
         * Field names (real) that feed into the target field
         */
        sources: Array<string>;
    }>;
}

export type FilterRange = 'min' | 'max';

// reasonings:
// string  covers empty string, which we use for a blank / cleared filter in UI state.
//         covers active date range filters, e.g. "2025-02-22"
// number  is when an actual number is typed in the filter. it gets converted to a numeric and stored.
export type RangeFilterValue = string | number;

export interface TableColumnFilterOptions {
    type: 'string' | 'number' | 'date' | 'selector';
    value?: string;
    min?: RangeFilterValue;
    max?: RangeFilterValue;
    static?: boolean;
}

export interface TableColumnOptions {
    field: string;
    title?: string;
    visible?: boolean;
    width?: number;
    sort?: 'asc' | 'desc' | 'none';
    searchable?: boolean;
    filter?: TableColumnFilterOptions;
    template?: string;
}

/**
 * This aligns to the "grid" configuration object schema, which sits on layer.fixtures.grid and fixtures.grid.mergeGrids[].options nuggets
 */
export interface TableStateOptions {
    title?: string;
    showFilter?: boolean;
    filterByExtent?: boolean;
    columns?: Array<TableColumnOptions>;
    columnMetadata?: {
        exclusiveColumns?: boolean;
    };
    filtered?: boolean;
    search?: boolean;
    searchFilter?: string;
    applyToMap?: boolean;
    controls?: Array<string | ActionButtonDefinition>;
}

export interface AttributeMapPair {
    /**
     * Attribute name as defined in the source layer
     */
    origAttr: string;

    /**
     * Attribute name the original attribute should fall under in the Merge Grid
     */
    mappedAttr: string | undefined;
}

export interface ActionButtonDefinition {
    /**
     * The name of the event to raise when the button is clicked.
     */
    actionEvent: string;

    /**
     * Icon of the button. Treated as HTML. So could be an Emoji, could be SVG tags. Image tag might work?
     */
    icon: string;

    /**
     * Tooltip for the button
     */
    tooltip: string;

    /**
     * Which layer format this button should appear for. Options are 'geo' for map layers, 'data' for data layers, or 'all' for both.
     */
    displayOn: 'all' | 'geo' | 'data';
}
