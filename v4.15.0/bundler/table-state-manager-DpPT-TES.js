class h {
  columnConfig;
  _field;
  _title;
  _visible;
  _width;
  _sort;
  _searchable;
  _filter;
  _template;
  constructor(t) {
    this.columnConfig = t, this._field = t?.field, this._title = t?.title, this._visible = t.visible ?? !0, this._width = t?.width, this._sort = t.sort ?? "none", this._searchable = t.searchable ?? !0, this._filter = {
      type: t?.filter?.type ?? "string",
      value: t?.filter?.value ?? "",
      min: t?.filter?.min ?? null,
      max: t?.filter?.max ?? null,
      static: t?.filter?.static ?? !1
    }, this._template = t.template ?? "";
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
  set title(t) {
    this._title = t;
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
  set visible(t) {
    this._visible = t;
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
  set width(t) {
    this._width = t;
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
  set sort(t) {
    this._sort = t;
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
  set searchable(t) {
    this._searchable = t;
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
  set filter(t) {
    this._filter = t;
  }
  /**
   * Sets the vue template of the column
   * @memberof ColumnStateManager
   */
  set template(t) {
    this._template = t;
  }
  get template() {
    return this._template;
  }
}
class a {
  state;
  _title;
  _showFilter;
  _filterByExtent;
  _open;
  _columns;
  _filtered;
  _search;
  _searchFilter;
  _applyToMap;
  _controls;
  constructor(t) {
    this.state = t ?? {}, this._title = t?.title ?? "", this._showFilter = t?.showFilter ?? !0, this._filterByExtent = t?.filterByExtent ?? !1, this._columns = {}, this._open = !0, this._filtered = !0, this._search = t?.search ?? !0, this._searchFilter = t?.searchFilter ?? "", this._applyToMap = t?.applyToMap ?? !1, this._controls = t?.controls ?? ["zoom", "details"], this.parsecolumns();
  }
  /**
   * Parses any given configurations of columns.
   *
   * @memberof TableStateManager
   */
  parsecolumns() {
    this.state.columns && this.state.columns.forEach((t) => {
      this._columns[t.field] = new h(t);
    });
  }
  /**
   * Returns the stored filter value for the given column field.
   *
   * @param {*} colDefField
   * @param {string} range
   * @returns {string | number}
   * @memberof TableStateManager
   */
  getColumnFilterValue(t, e) {
    const s = this._columns[t].filter;
    return e === "min" ? s.min : e === "max" ? s.max : s.value;
  }
  /**
   * Saves the current value of the filter for the given column field.
   *
   * @param {*} colDefField
   * @param {(string | number)} filterValue
   * @param {string} range
   * @memberof TableStateManager
   */
  setColumnFilterValue(t, e, s) {
    let i = e;
    if (e && typeof e == "string") {
      const l = /[(!"#$%&'+,.\\/:;<=>?@[\]^`{|}~)]/g;
      i = e.replace(l, "\\$&");
    }
    s === "min" ? this._columns[t].filter.min = i : s === "max" ? this._columns[t].filter.max = i : this._columns[t].filter.value = i, this._columns[t].filter.value !== "" ? this._filtered = !0 : this._checkFilters();
  }
  /**
   * Clears all saved filters.
   *
   * @memberof TableStateManager
   */
  clearFilters() {
    Object.entries(this._columns).forEach(([, t]) => {
      t.filter.static || (t.filter.min = null, t.filter.max = null, t.filter.value = "");
    }), this._filterByExtent = !1, this._filtered = !1;
  }
  _checkFilters() {
    this._filtered = Object.values(this._columns).some((t) => t.filter.value !== "" || t.filter.min !== "" && t.filter.min !== null || t.filter.max !== "" && t.filter.max !== null);
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
  set title(t) {
    this._title = t;
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
  set colFilter(t) {
    this._showFilter = t;
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
  set filterByExtent(t) {
    this._filterByExtent = t;
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
  set open(t) {
    this._open = t;
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
  set search(t) {
    this._search = t;
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
  set searchFilter(t) {
    this._searchFilter = t;
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
  set applyToMap(t) {
    this._applyToMap = t;
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
  set columns(t) {
    this._columns = t;
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
export {
  h as C,
  a as T
};
