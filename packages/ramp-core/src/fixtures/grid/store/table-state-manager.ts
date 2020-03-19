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
        this._showFilter = baseLayer.table.showFilter !== undefined ? baseLayer.table.showFilter : true;
        this._filterByExtent = baseLayer.table.filterByExtent || false;
        this._lazyFilter = baseLayer.table.lazyFilter !== undefined ? baseLayer.table.lazyFilter : true;
        this._columnFilters = {};
        this._open = true;
        this._columnState = null;
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
     * Returns whether the filter mode is on lazy or not.
     *
     * @memberof TableStateManager
     */
    get lazyFilter() {
        return this._lazyFilter;
    }

    /**
     * Sets the lazy filter to on or off.
     *
     * @memberof TableStateManager
     */
    set lazyFilter(val) {
        this._lazyFilter = val;
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

}

export default interface TableStateManager {
    baseLayer: any;
    _showFilter: boolean;
    _filterByExtent: boolean;
    _lazyFilter: boolean;
    _columnFilters: any;
    _open: boolean;
    _columnState: any;
}