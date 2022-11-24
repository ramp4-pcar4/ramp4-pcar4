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
        this._columnFilters = {};
        this._open = true;
        this._columnState = null;
        this._filtered = true;
        this._search = baseLayer.search ?? true;
        this._searchFilter = baseLayer.searchFilter ?? '';
        this._applyToMap = baseLayer.applyToMap ?? false;
    }

    /**
     * Returns the stored filter value for the given column field.
     *
     * @param {*} colDefField
     * @returns
     * @memberof TableStateManager
     */
    getColumnFilter(colDefField: any) {
        return this._columnFilters[colDefField];
    }

    /**
     * Saves the current value of the filter for the given column field.
     *
     * @param {*} colDefField
     * @param {(string | number)} filterValue
     * @memberof TableStateManager
     */
    setColumnFilter(colDefField: any, filterValue: string | number) {
        let newFilterValue = filterValue;
        if (filterValue && typeof filterValue === 'string') {
            const escRegex = /[(!"#$%&'+,.\\/:;<=>?@[\]^`{|}~)]/g;
            newFilterValue = filterValue.replace(escRegex, '\\$&');
        }

        this._columnFilters[colDefField] = newFilterValue;

        if (this._columnFilters[colDefField] !== '') {
            this._filtered = true;
        } else {
            this._checkFilters();
        }
    }

    /**
     * Clears all saved column filters.
     *
     * @memberof TableStateManager
     */
    clearFilters() {
        this._columnFilters = {};
        this._filterByExtent = false;
        this._filtered = false;
        this._searchFilter = '';
    }

    _checkFilters() {
        this._filtered = Object.values(this._columnFilters).some(filter => {
            return filter !== '';
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
}

export default interface TableStateManager {
    baseLayer: any;
    _title: string;
    _showFilter: boolean;
    _filterByExtent: boolean;
    _columnFilters: any;
    _open: boolean;
    _columnState: any;
    _filtered: boolean;
    _search: boolean;
    _searchFilter: string;
    _applyToMap: boolean;
}
