//#region src/fixtures/grid/store/column-state-manager.ts
var e = class {
	columnConfig;
	_field;
	_title;
	_visible;
	_width;
	_sort;
	_searchable;
	_filter;
	_template;
	constructor(e) {
		this.columnConfig = e, this._field = e?.field, this._title = e?.title || "", this._visible = e.visible ?? !0, this._width = e?.width, this._sort = e.sort ?? "none", this._searchable = e.searchable ?? !0, this._filter = {
			type: e?.filter?.type ?? "string",
			value: e?.filter?.value ?? "",
			min: e?.filter?.min ?? "",
			max: e?.filter?.max ?? "",
			static: e?.filter?.static ?? !1
		}, this._template = e.template ?? "";
	}
	get field() {
		return this._field;
	}
	get title() {
		return this._title;
	}
	set title(e) {
		this._title = e;
	}
	get visible() {
		return this._visible;
	}
	set visible(e) {
		this._visible = e;
	}
	get width() {
		return this._width;
	}
	set width(e) {
		this._width = e;
	}
	get sort() {
		return this._sort;
	}
	set sort(e) {
		this._sort = e;
	}
	get searchable() {
		return this._searchable;
	}
	set searchable(e) {
		this._searchable = e;
	}
	get filter() {
		return this._filter;
	}
	set filter(e) {
		this._filter = e;
	}
	set template(e) {
		this._template = e;
	}
	get template() {
		return this._template;
	}
}, t = class {
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
	constructor(e) {
		this.state = e ?? {}, this._title = e?.title ?? "", this._showFilter = e?.showFilter ?? !0, this._filterByExtent = e?.filterByExtent ?? !1, this._columns = {}, this._open = !0, this._filtered = !0, this._search = e?.search ?? !0, this._searchFilter = e?.searchFilter ?? "", this._applyToMap = e?.applyToMap ?? !1, this._controls = e?.controls ?? ["zoom", "details"], this.parsecolumns();
	}
	parsecolumns() {
		this.state.columns && this.state.columns.forEach((t) => {
			this._columns[t.field] = new e(t);
		});
	}
	getColumnFilterValue(e, t) {
		let n = this._columns[e].filter;
		return t === "min" ? n.min : t === "max" ? n.max : n.value;
	}
	setColumnFilterValue(e, t, n) {
		let r = t;
		t && typeof t == "string" && (r = t.replace(/[(!"#$%&'+,.\\/:;<=>?@[\]^`{|}~)]/g, "\\$&")), n === "min" ? this._columns[e].filter.min = r : n === "max" ? this._columns[e].filter.max = r : this._columns[e].filter.value = r, this._columns[e].filter.value === "" ? this._checkFilters() : this._filtered = !0;
	}
	clearFilters() {
		Object.entries(this._columns).forEach(([, e]) => {
			e.filter.static || (e.filter.min = "", e.filter.max = "", e.filter.value = "");
		}), this._filterByExtent = !1, this._filtered = !1;
	}
	_checkFilters() {
		this._filtered = Object.values(this._columns).some((e) => !e.filter.static && (e.filter.value !== "" || e.filter.min !== "" || e.filter.max !== ""));
	}
	get filtered() {
		return this._filtered;
	}
	get title() {
		return this._title;
	}
	set title(e) {
		this._title = e;
	}
	get colFilter() {
		return this._showFilter;
	}
	set colFilter(e) {
		this._showFilter = e;
	}
	get filterByExtent() {
		return this._filterByExtent;
	}
	set filterByExtent(e) {
		this._filterByExtent = e;
	}
	get open() {
		return this._open;
	}
	set open(e) {
		this._open = e;
	}
	get search() {
		return this._search;
	}
	set search(e) {
		this._search = e;
	}
	get searchFilter() {
		return this._searchFilter;
	}
	set searchFilter(e) {
		this._searchFilter = e;
	}
	get applyToMap() {
		return this._applyToMap;
	}
	set applyToMap(e) {
		this._applyToMap = e;
	}
	get columns() {
		return this._columns;
	}
	set columns(e) {
		this._columns = e;
	}
	get controls() {
		return this._controls;
	}
};
//#endregion
export { e as n, t };
