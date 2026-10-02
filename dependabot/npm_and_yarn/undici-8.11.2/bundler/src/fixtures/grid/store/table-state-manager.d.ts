import { default as ColumnStateManager } from '../store/column-state-manager';
import { ActionButtonDefinition, FilterRange, TableStateOptions } from './grid-state';
/**
 * Saves relevant enhancedTable states so that it can be reset on reload/reopen. A PanelStateManager is linked to a BaseLayer.
 * setters are called each time enhancedTable states are updated, getters are called each time enhancedTable is reloaded/reopened.
 * States to save and reset:
 *      - displayed rows (on symbology and layer visibility updates)
 *      - column filters
 *      - whether table maximized is in maximized or split view
 */
export default class TableStateManager {
    state: TableStateOptions;
    _title: string;
    _showFilter: boolean;
    _filterByExtent: boolean;
    _open: boolean;
    _columns: {
        [field: string]: ColumnStateManager;
    };
    _filtered: boolean;
    _search: boolean;
    _searchFilter: string;
    _applyToMap: boolean;
    _controls: (string | ActionButtonDefinition)[];
    constructor(options?: TableStateOptions);
    /**
     * Parses any given configurations of columns.
     *
     * @memberof TableStateManager
     */
    parsecolumns(): void;
    /**
     * Returns the stored filter value for the given column field.
     *
     * @param {string} colDefField
     * @param {FilterRange} range
     * @returns {string | number}
     * @memberof TableStateManager
     */
    getColumnFilterValue(colDefField: string, range?: FilterRange): string | number;
    /**
     * Saves the current value of the filter for the given column field.
     *
     * @param {string} colDefField
     * @param {string | number} filterValue
     * @param {FilterRange} range
     * @memberof TableStateManager
     */
    setColumnFilterValue(colDefField: string, filterValue: string | number, range?: FilterRange): void;
    /**
     * Clears all saved filters.
     *
     * @memberof TableStateManager
     */
    clearFilters(): void;
    _checkFilters(): void;
    get filtered(): boolean;
    /**
     * Returns the title of the datatable.
     *
     * @memberof TableStateManager
     */
    get title(): string;
    /**
     * Sets the title of the datatable.
     *
     * @memberof TableStateManager
     */
    set title(val: string);
    /**
     * Returns whether column filters are enabled for the table.
     *
     * @memberof TableStateManager
     */
    get colFilter(): boolean;
    /**
     * Sets column filters to on or off.
     *
     * @memberof TableStateManager
     */
    set colFilter(val: boolean);
    /**
     * Returns whether the grid is filtering by map extent.
     *
     * @memberof TableStateManager
     */
    get filterByExtent(): boolean;
    /**
     * Sets the extent filter to on or off.
     *
     * @memberof TableStateManager
     */
    set filterByExtent(val: boolean);
    /**
     * Returns whether the grid is currently open.
     *
     * @memberof TableStateManager
     */
    get open(): boolean;
    /**
     * Sets the grid status to open or closed.
     *
     * @memberof TableStateManager
     */
    set open(val: boolean);
    /**
     * Returns whether the global search is currently enabled.
     *
     * @memberof TableStateManager
     */
    get search(): boolean;
    /**
     * Sets the global search to enabled or disabled.
     *
     * @memberof TableStateManager
     */
    set search(val: boolean);
    /**
     * Returns the value of the global search.
     *
     * @memberof TableStateManager
     */
    get searchFilter(): string;
    /**
     * Sets the value of the global search.
     *
     * @memberof TableStateManager
     */
    set searchFilter(val: string);
    /**
     * Returns whether grid filters should apply to the map.
     *
     * @memberof TableStateManager
     */
    get applyToMap(): boolean;
    /**
     * Sets the grid to enable or disable filtering results on the map.
     *
     * @memberof TableStateManager
     */
    set applyToMap(val: boolean);
    /**
     * Returns an array of column configs.
     *
     * @memberof TableStateManager
     */
    get columns(): {
        [field: string]: ColumnStateManager;
    };
    /**
     * Sets column configs
     *
     * @memberof TableStateManager
     */
    set columns(val: {
        [field: string]: ColumnStateManager;
    });
    /**
     * Returns an array of grid action buttons.
     *
     * @memberof TableStateManager
     */
    get controls(): (string | ActionButtonDefinition)[];
}
