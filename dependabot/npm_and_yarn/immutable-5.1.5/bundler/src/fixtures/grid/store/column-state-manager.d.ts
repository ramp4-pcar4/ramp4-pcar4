import { TableColumnFilterOptions, TableColumnOptions } from './grid-state';
/**
 * State manager for columns in datagrid.
 */
export default class ColumnStateManager {
    columnConfig: any;
    _field: string;
    _title: string;
    _visible: boolean;
    _width: number | undefined;
    _sort: 'asc' | 'desc' | 'none';
    _searchable: boolean;
    _filter: TableColumnFilterOptions;
    _template: string;
    constructor(columnConfig: TableColumnOptions);
    /**
     * Returns the field of the column.
     *
     * @memberof ColumnStateManager
     */
    get field(): string;
    /**
     * Returns the title of the column.
     *
     * @memberof ColumnStateManager
     */
    get title(): string;
    /**
     * Sets the title of the column.
     *
     * @memberof ColumnStateManager
     */
    set title(val: string);
    /**
     * Returns whether column is visible.
     *
     * @memberof ColumnStateManager
     */
    get visible(): boolean;
    /**
     * Sets column visibility.
     *
     * @memberof ColumnStateManager
     */
    set visible(val: boolean);
    /**
     * Returns the column width.
     *
     * @memberof ColumnStateManager
     */
    get width(): number | undefined;
    /**
     * Sets the column width.
     *
     * @memberof ColumnStateManager
     */
    set width(val: number | undefined);
    /**
     * Returns whether the column is sorted.
     *
     * @memberof ColumnStateManager
     */
    get sort(): "none" | "asc" | "desc";
    /**
     * Sets the column to be sorted.
     *
     * @memberof ColumnStateManager
     */
    set sort(val: "none" | "asc" | "desc");
    /**
     * Returns whether the column search is currently enabled.
     *
     * @memberof ColumnStateManager
     */
    get searchable(): boolean;
    /**
     * Sets the column search to enabled or disabled.
     *
     * @memberof ColumnStateManager
     */
    set searchable(val: boolean);
    /**
     * Returns the filter configuration of the column.
     *
     * @memberof ColumnStateManager
     */
    get filter(): TableColumnFilterOptions;
    /**
     * Sets the filter configuration of the column.
     *
     * @memberof ColumnStateManager
     */
    set filter(val: TableColumnFilterOptions);
    /**
     * Sets the vue template of the column
     * @memberof ColumnStateManager
     */
    set template(val: string);
    get template(): string;
}
