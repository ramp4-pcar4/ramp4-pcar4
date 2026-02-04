class ColumnStateManager {
  constructor(columnConfig) {
    this.columnConfig = columnConfig;
    this._field = columnConfig?.field;
    this._title = columnConfig?.title;
    this._visible = columnConfig.visible ?? true;
    this._width = columnConfig?.width;
    this._sort = columnConfig.sort ?? "none";
    this._searchable = columnConfig.searchable ?? true;
    this._filter = {
      type: columnConfig?.filter?.type ?? "string",
      value: columnConfig?.filter?.value ?? "",
      min: columnConfig?.filter?.min ?? null,
      max: columnConfig?.filter?.max ?? null,
      static: columnConfig?.filter?.static ?? false
    };
    this._template = columnConfig.template ?? "";
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
  /**
   * Sets the vue template of the column
   * @memberof ColumnStateManager
   */
  set template(val) {
    this._template = val;
  }
  get template() {
    return this._template;
  }
}

class TableStateManager {
  constructor(options) {
    this.state = options ?? {};
    this._title = options?.title ?? "";
    this._showFilter = options?.showFilter ?? true;
    this._filterByExtent = options?.filterByExtent ?? false;
    this._columns = {};
    this._open = true;
    this._filtered = true;
    this._search = options?.search ?? true;
    this._searchFilter = options?.searchFilter ?? "";
    this._applyToMap = options?.applyToMap ?? false;
    this._controls = options?.controls ?? ["zoom", "details"];
    this.parsecolumns();
  }
  /**
   * Parses any given configurations of columns.
   *
   * @memberof TableStateManager
   */
  parsecolumns() {
    if (this.state.columns) {
      this.state.columns.forEach((columnConfig) => {
        this._columns[columnConfig.field] = new ColumnStateManager(columnConfig);
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
  getColumnFilterValue(colDefField, range) {
    const filter = this._columns[colDefField].filter;
    if (range === "min") {
      return filter.min;
    } else if (range === "max") {
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
  setColumnFilterValue(colDefField, filterValue, range) {
    let newFilterValue = filterValue;
    if (filterValue && typeof filterValue === "string") {
      const escRegex = /[(!"#$%&'+,.\\/:;<=>?@[\]^`{|}~)]/g;
      newFilterValue = filterValue.replace(escRegex, "\\$&");
    }
    if (range === "min") {
      this._columns[colDefField].filter.min = newFilterValue;
    } else if (range === "max") {
      this._columns[colDefField].filter.max = newFilterValue;
    } else {
      this._columns[colDefField].filter.value = newFilterValue;
    }
    if (this._columns[colDefField].filter.value !== "") {
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
        config.filter.value = "";
      }
    });
    this._filterByExtent = false;
    this._filtered = false;
    this._searchFilter = "";
  }
  _checkFilters() {
    this._filtered = Object.values(this._columns).some((config) => {
      return config.filter.value !== "" || config.filter.min || config.filter.max;
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

export { ColumnStateManager as C, TableStateManager as T };
