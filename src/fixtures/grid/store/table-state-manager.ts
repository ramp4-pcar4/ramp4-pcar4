import ColumnStateManager from '../store/column-state-manager';

/**
 * Saves relevant enhancedTable states so that it can be reset on reload/reopen. A PanelStateManager is linked to a BaseLayer.
 * setters are called each time enhancedTable states are updated, getters are called each time enhancedTable is reloaded/reopened.
 * States to save and reset:
 *      - displayed rows (on symbology and layer visibility updates)
 *      - column filters
 *      - whether table maximized is in maximized or split view
 */
export default class TableStateManager {
    constructor(baseLayer: any) {
        this.baseLayer = baseLayer;
        this._title = baseLayer.title ?? '';
        this._showFilter = baseLayer.showFilter ?? true;
        this._filterByExtent = baseLayer.filterByExtent ?? false;
        this._columns = {};
        this._open = true;
        this._filtered = true;
        this._search = baseLayer.search ?? true;
        this._searchFilter = baseLayer.searchFilter ?? '';
        this._applyToMap = baseLayer.applyToMap ?? false;

        this.parsecolumns();
    }

    /**
     * Parses any given configurations of columns.
     *
     * @memberof TableStateManager
     */
    parsecolumns() {
        if (this.baseLayer.columns) {
            this.baseLayer.columns.forEach((columnConfig: any) => {
                this._columns[columnConfig.field] = new ColumnStateManager(
                    columnConfig
                );
            });
        }
    }

    /**
     * Returns the stored filter value for the given column field.
     *
     * @param {*} colDefField
     * @param {string} range
     * @returns {string | number}
     * @memberof TableStateManager
     */
    getColumnFilterValue(colDefField: any, range?: string): string | number {
        const filter = this._columns[colDefField].filter;
        if (range === 'min') {
            return filter.min;
        } else if (range === 'max') {
            return filter.max;
        } else {
            return filter.value;
        }
    }

    /**
     * Saves the current value of the filter for the given column field.
     *
     * @param {*} colDefField
     * @param {(string | number)} filterValue
     * @param {string} range
     * @memberof TableStateManager
     */
    setColumnFilterValue(
        colDefField: any,
        filterValue: string | number,
        range?: string
    ) {
        let newFilterValue = filterValue;
        if (filterValue && typeof filterValue === 'string') {
            const escRegex = /[(!"#$%&'+,.\\/:;<=>?@[\]^`{|}~)]/g;
            newFilterValue = filterValue.replace(escRegex, '\\$&');
        }

        if (range === 'min') {
            this._columns[colDefField].filter.min = newFilterValue;
        } else if (range === 'max') {
            this._columns[colDefField].filter.max = newFilterValue;
        } else {
            this._columns[colDefField].filter.value = newFilterValue;
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
                config.filter.min = null;
                config.filter.max = null;
                config.filter.value = '';
            }
        });
        this._filterByExtent = false;
        this._filtered = false;
        this._searchFilter = '';
    }

    _checkFilters() {
        this._filtered = Object.values(this._columns).some(config => {
            return (
                config.filter.value !== '' ||
                config.filter.min ||
                config.filter.max
            );
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
}

export default interface TableStateManager {
    baseLayer: any;
    _title: string;
    _showFilter: boolean;
    _filterByExtent: boolean;
    _open: boolean;
    _columns: { [field: string]: ColumnStateManager };
    _filtered: boolean;
    _search: boolean;
    _searchFilter: string;
    _applyToMap: boolean;
}
