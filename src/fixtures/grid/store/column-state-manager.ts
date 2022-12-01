/**
 * State manager for columns in datagrid.
 */
export default class ColumnStateManager {
    constructor(columnConfig: any) {
        this.columnConfig = columnConfig;
        this._field = columnConfig?.field;
        this._title = columnConfig?.title;
        this._visible = columnConfig.visible ?? true;
        this._width = columnConfig?.width;
        this._sort = columnConfig.sort ?? 'none';
        this._searchable = columnConfig.searchable ?? true;
        this._filter = {
            type: columnConfig?.filter?.type ?? 'string',
            value: columnConfig?.filter?.value ?? '',
            min: columnConfig?.filter?.min ?? null,
            max: columnConfig?.filter?.max ?? null,
            static: columnConfig?.filter?.static ?? false
        };
    }

    /**
     * Returns the field of the column.
     *
     * @memberof ColumnStateManager
     */
    get field() {
        return this._field;
    }

    /**
     * Returns the title of the column.
     *
     * @memberof ColumnStateManager
     */
    get title() {
        return this._title;
    }

    /**
     * Sets the title of the column.
     *
     * @memberof ColumnStateManager
     */
    set title(val) {
        this._title = val;
    }

    /**
     * Returns whether column is visible.
     *
     * @memberof ColumnStateManager
     */
    get visible() {
        return this._visible;
    }

    /**
     * Sets column visibility.
     *
     * @memberof ColumnStateManager
     */
    set visible(val) {
        this._visible = val;
    }

    /**
     * Returns the column width.
     *
     * @memberof ColumnStateManager
     */
    get width() {
        return this._width;
    }

    /**
     * Sets the column width.
     *
     * @memberof ColumnStateManager
     */
    set width(val) {
        this._width = val;
    }

    /**
     * Returns whether the column is sorted.
     *
     * @memberof ColumnStateManager
     */
    get sort() {
        return this._sort;
    }

    /**
     * Sets the column to be sorted.
     *
     * @memberof ColumnStateManager
     */
    set sort(val) {
        this._sort = val;
    }

    /**
     * Returns whether the column search is currently enabled.
     *
     * @memberof ColumnStateManager
     */
    get searchable() {
        return this._searchable;
    }

    /**
     * Sets the column search to enabled or disabled.
     *
     * @memberof ColumnStateManager
     */
    set searchable(val) {
        this._searchable = val;
    }

    /**
     * Returns the filter configuration of the column.
     *
     * @memberof ColumnStateManager
     */
    get filter() {
        return this._filter;
    }

    /**
     * Sets the filter configuration of the column.
     *
     * @memberof ColumnStateManager
     */
    set filter(val) {
        this._filter = val;
    }
}

export default interface ColumnStateManager {
    columnConfig: any;
    _field: string;
    _title: string;
    _visible: boolean;
    _width: number;
    _sort: string;
    _searchable: boolean;
    _filter: any;
}
