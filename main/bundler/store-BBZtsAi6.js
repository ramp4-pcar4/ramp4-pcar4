import { defineStore as e } from "pinia";
import { reactive as t, ref as n } from "vue";
//#region src/fixtures/draw/store/draw-store.ts
var r = e("draw", () => {
	let e = n([]), r = n(null), i = t([]), a = n(null), o = n(null);
	function s(t) {
		e.value.splice(0, e.value.length, ...t);
	}
	function c(e) {
		r.value = e;
	}
	function l(e) {
		let t = `graphic-${Date.now()}`;
		return i.push({
			id: t,
			...e
		}), t;
	}
	function u(e) {
		let t = i.findIndex((t) => t.id === e);
		t !== -1 && (i.splice(t, 1), a.value === e && (a.value = null));
	}
	function d(e) {
		a.value = e;
	}
	function f() {
		a.value = null;
	}
	function p() {
		return a.value ? i.find((e) => e.id === a.value) : null;
	}
	function m(e, t) {
		let n = i.find((t) => t.id === e);
		n && (n.geometry = t);
	}
	return {
		supportedTypes: e,
		activeTool: r,
		graphics: i,
		selectedGraphicId: a,
		setSupportedTypes: s,
		setActiveTool: c,
		addGraphic: l,
		removeGraphic: u,
		selectGraphic: d,
		clearSelection: f,
		getSelectedGraphic: p,
		updateGraphicGeometry: m,
		mapNavEl: o
	};
});
//#endregion
export { r as t };
