import { defineStore as e } from "pinia";
import { ref as t, shallowRef as n } from "vue";
//#region src/stores/layer/layer-store.ts
var r = (e, t) => {
	let n = [...e];
	for (; n.length > 0;) {
		let e = n.shift();
		if (t(e)) return e;
		e && n.push(...e.sublayers);
	}
}, i = e("layer", () => {
	let e = t([]), n = t([]), i = t([]);
	function a(t) {
		return r(e.value, (e) => e?.uid === t);
	}
	function o(t) {
		return r(e.value, (e) => e?.id === t);
	}
	function s(t) {
		return r(e.value, (e) => e !== void 0 && (e.id === t || e.uid === t));
	}
	function c(e) {
		n.value = [...n.value, e];
	}
	function l(t, n = void 0) {
		e.value = [...e.value, t], t.mapLayer && ((n === void 0 || n < 0) && (console.error("Map layer added to store with invalid index!"), n = i.value.length), i.value.splice(n, 0, t.id), i.value = [...i.value]);
	}
	function u(e, t) {
		if (!e.mapLayer) {
			console.error("Data layer passed to layer store reorder");
			return;
		}
		if (t < 0) {
			console.error("Negative index passed to layer store reorder");
			return;
		}
		t >= i.value.length && (t = i.value.length - 1);
		let n = i.value.findIndex((t) => t === e.id);
		n !== -1 && n !== t && (i.value.splice(n, 1), i.value.splice(t, 0, e.id), i.value = [...i.value]);
	}
	function d(t) {
		e.value = e.value.filter((e) => e.id !== t.id || e.uid !== t.uid), t.mapLayer && (i.value = i.value.filter((e) => e !== t.id));
	}
	function f(e) {
		n.value = n.value.filter((t) => t.id !== e);
	}
	return {
		layers: e,
		mapOrder: i,
		layerConfigs: n,
		getLayerByUid: a,
		getLayerById: o,
		getLayerByAny: s,
		addLayerConfig: c,
		addLayer: l,
		reorderLayer: u,
		removeLayer: d,
		removeLayerConfig: f
	};
}), a = e("config", () => {
	let e = n({
		map: {
			lodSets: [],
			extentSets: [],
			tileSchemas: [],
			basemaps: [],
			initialBasemapId: ""
		},
		fixtures: {},
		layers: []
	}), r = t([]), a = t(), o = t({}), s = t({});
	function c(e) {
		if (o.value[s.value[e]] === void 0) throw Error("Unsupported language or no registered config exists for requested language");
		return o.value[s.value[e]];
	}
	function l(t) {
		if (e.value = {
			...e.value,
			...t
		}, Array.isArray(e.value.layers)) {
			let t = i();
			t.layerConfigs = [...t.layerConfigs, e.value.layers];
		}
	}
	function u(e, t) {
		o.value[t] = e, s.value[t] = t;
	}
	function d(e, t) {
		let n = e.configs, r = Object.keys(n);
		if (r.length) {
			let e = r[0];
			t.forEach((t) => {
				let i = r.includes(t) ? t : e;
				o.value[t] = n[i], s.value[t] = i;
			});
		} else console.error("Nothingburger config set was registered", e);
	}
	return {
		activeBasemapConfig: a,
		config: e,
		registeredConfigs: o,
		registeredLangs: s,
		startingFixtures: r,
		getActiveConfig: c,
		newConfig: l,
		registerAllConfigs: d,
		registerConfig: u
	};
});
//#endregion
export { i as n, a as t };
