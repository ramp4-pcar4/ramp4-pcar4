import ColumnStateManager from '../store/column-state-manager';
import type { ActionButtonDefinition, FilterRange, TableStateOptions } from './grid-state';

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
    _columns: { [field: string]: ColumnStateManager };
    _filtered: boolean;
    _search: boolean;
    _searchFilter: string;
    _applyToMap: boolean;
    _controls: (string | ActionButtonDefinition)[];

    constructor(options?: TableStateOptions) {
        this.state = options ?? {};
        this._title = options?.title ?? '';
        this._showFilter = options?.showFilter ?? true;
        this._filterByExtent = options?.filterByExtent ?? false;
        this._columns = {};
        this._open = true;
        this._filtered = true;
        this._search = options?.search ?? true;
        this._searchFilter = options?.searchFilter ?? '';
        this._applyToMap = options?.applyToMap ?? false;
        this._controls = options?.controls ?? ['zoom', 'details'];

        this.parsecolumns();
    }

    /**
     * Parses any given configurations of columns.
     *
     * @memberof TableStateManager
     */
    parsecolumns() {
        if (this.state.columns) {
            this.state.columns.forEach(columnConfig => {
                this._columns[columnConfig.field] = new ColumnStateManager(columnConfig);
            });
        }
    }

    /**
     * Returns the stored filter value for the given column field.
     *
     * @param {string} colDefField
     * @param {FilterRange} range
     * @returns {string | number}
     * @memberof TableStateManager
     */
    getColumnFilterValue(colDefField: string, range?: FilterRange): string | number {
        const filter = this._columns[colDefField].filter;
        if (range === 'min') {
            return filter.min!;
        } else if (range === 'max') {
            return filter.max!;
        } else {
            return filter.value!;
        }
    }

    /**
     * Saves the current value of the filter for the given column field.
     *
     * @param {string} colDefField
     * @param {string | number} filterValue
     * @param {FilterRange} range
     * @memberof TableStateManager
     */
    setColumnFilterValue(colDefField: string, filterValue: string | number, range?: FilterRange) {
        let newFilterValue = filterValue;
        if (filterValue && typeof filterValue === 'string') {
            const escRegex = /[(!"#$%&'+,.\\/:;<=>?@[\]^`{|}~)]/g;
            newFilterValue = filterValue.replace(escRegex, '\\$&');
        }

        // min & maxes are used for both number and date fields.
        if (range === 'min') {
            this._columns[colDefField].filter.min = newFilterValue;
        } else if (range === 'max') {
            this._columns[colDefField].filter.max = newFilterValue;
        } else {
            this._columns[colDefField].filter.value = newFilterValue as string;
        }

        if (this._columns[colDefField].filter.value !== '') {
            this._filtered = true;
        } else {
            this._checkFilters();
        }
    }

    /**
     * Clears all saved filters.
     *
     * @memberof TableStateManager
     */
    clearFilters() {
        Object.entries(this._columns).forEach(([, config]) => {
            if (!config.filter.static) {
                config.filter.min = '';
                config.filter.max = '';
                config.filter.value = '';
            }
        });
        this._filterByExtent = false;
        this._filtered = false;
    }

    _checkFilters() {
        // TODO should we be skipping static filters in this check?  clearFilters above seems to suggest we should
        this._filtered = Object.values(this._columns).some(config => {
            return config.filter.value !== '' || config.filter.min !== '' || config.filter.max !== '';
        });
    }

    get filtered() {
        return this._filtered;
    }

    /**
     * Returns the title of the datatable.
     *
     * @memberof TableStateManager
     */
    get title() {
        return this._title;
    }

    /**
     * Sets the title of the datatable.
     *
     * @memberof TableStateManager
     */
    set title(val) {
        this._title = val;
    }

    /**
     * Returns whether column filters are enabled for the table.
     *
     * @memberof TableStateManager
     */
    get colFilter() {
        return this._showFilter;
    }

    /**
     * Sets column filters to on or off.
     *
     * @memberof TableStateManager
     */
    set colFilter(val) {
        this._showFilter = val;
    }

    /**
     * Returns whether the grid is filtering by map extent.
     *
     * @memberof TableStateManager
     */
    get filterByExtent() {
        return this._filterByExtent;
    }

    /**
     * Sets the extent filter to on or off.
     *
     * @memberof TableStateManager
     */
    set filterByExtent(val) {
        this._filterByExtent = val;
    }

    /**
     * Returns whether the grid is currently open.
     *
     * @memberof TableStateManager
     */
    get open() {
        return this._open;
    }

    /**
     * Sets the grid status to open or closed.
     *
     * @memberof TableStateManager
     */
    set open(val) {
        this._open = val;
    }

    /**
     * Returns whether the global search is currently enabled.
     *
     * @memberof TableStateManager
     */
    get search() {
        return this._search;
    }

    /**
     * Sets the global search to enabled or disabled.
     *
     * @memberof TableStateManager
     */
    set search(val) {
        this._search = val;
    }

    /**
     * Returns the value of the global search.
     *
     * @memberof TableStateManager
     */
    get searchFilter() {
        return this._searchFilter;
    }

    /**
     * Sets the value of the global search.
     *
     * @memberof TableStateManager
     */
    set searchFilter(val) {
        this._searchFilter = val;
    }

    /**
     * Returns whether grid filters should apply to the map.
     *
     * @memberof TableStateManager
     */
    get applyToMap() {
        return this._applyToMap;
    }

    /**
     * Sets the grid to enable or disable filtering results on the map.
     *
     * @memberof TableStateManager
     */
    set applyToMap(val) {
        this._applyToMap = val;
    }

    /**
     * Returns an array of column configs.
     *
     * @memberof TableStateManager
     */
    get columns() {
        return this._columns;
    }

    /**
     * Sets column configs
     *
     * @memberof TableStateManager
     */
    set columns(val) {
        this._columns = val;
    }

    /**
     * Returns an array of grid action buttons.
     *
     * @memberof TableStateManager
     */
    get controls() {
        return this._controls;
    }
}
