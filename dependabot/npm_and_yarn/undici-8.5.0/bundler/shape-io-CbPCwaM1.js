import { v as e } from "./esri-vcEQ1sbb.js";
import { b as t, c as n, g as r, l as i, u as a, v as o, x as s, y as c } from "./store-Bl__6-s2.js";
import l from "file-saver";
//#region src/fixtures/draw/shape-io.ts
var u = "ramp4-draw-shapes", d = "json", f = (e) => typeof e == "object" && !!e && !Array.isArray(e), p = (e) => JSON.parse(JSON.stringify(e)), m = (e, t) => f(e) ? e : f(t) ? t : {}, h = (e) => {
	let t = e.geometry;
	if (t) return p(typeof t.toJSON == "function" ? t.toJSON() : t);
}, g = (e) => typeof e.attributes?.type == "string" ? e.attributes.type : e.geometry?.type, _ = (e) => typeof e.attributes?.id == "string" ? e.attributes.id : typeof e.id == "string" ? e.id : void 0, v = (e) => {
	let n = h(e), r = g(e);
	if (!n || !r) return;
	let i = _(e);
	return {
		...i ? { id: i } : {},
		type: r,
		geometry: n,
		settings: {
			drawStyle: s(e.attributes),
			drawBuffer: o(e.attributes),
			drawIdentifyBufferMode: c(e.attributes),
			drawMapLabels: t(e.attributes)
		}
	};
}, y = (e) => ({
	fileType: u,
	version: 1,
	exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
	shapes: e.flatMap((e) => {
		let t = v(e);
		return t ? [t] : [];
	})
}), b = (e = "ramp-draw-shapes") => `${e}-${(/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-")}.${d}`, x = (e, t) => {
	let n = y(e);
	if (!n.shapes.length) return !1;
	let r = new Blob([JSON.stringify(n, null, 2)], { type: "application/json;charset=utf-8" });
	return l.saveAs(r, t ?? b()), !0;
}, S = (e) => {
	if (Array.isArray(e)) return e;
	if (f(e)) return Array.isArray(e.shapes) ? (e.fileType ?? e.format) === "ramp4-draw-shapes" ? e.shapes : void 0 : f(e.geometry) ? [e] : void 0;
}, C = (t) => {
	if (!f(t) || !f(t.geometry)) return;
	let o = f(t.attributes) ? t.attributes : {}, s = f(t.settings) ? t.settings : t, c = p(t.geometry), l = e(c);
	if (!l) return;
	let u = typeof t.type == "string" ? t.type : typeof o.type == "string" ? o.type : l.type;
	return {
		id: typeof t.id == "string" ? t.id : void 0,
		type: u,
		geometry: typeof l.toJSON == "function" ? l.toJSON() : c,
		settings: {
			drawStyle: a(m(s.drawStyle, o.drawStyle)),
			drawBuffer: n(m(s.drawBuffer, o.drawBuffer)),
			drawIdentifyBufferMode: r(s.drawIdentifyBufferMode ?? o.drawIdentifyBufferMode),
			drawMapLabels: i(m(s.drawMapLabels, o.drawMapLabels))
		}
	};
}, w = (e) => {
	let t = S(e);
	if (!t?.length) return [];
	let n = t.map(C);
	return n.every(Boolean) ? n : [];
}, T = async (e) => {
	let t = [];
	for (let n of e) {
		let e;
		try {
			e = JSON.parse(await n.text());
		} catch {
			throw Error("Invalid draw shape file.");
		}
		let r = w(e);
		if (!r.length) throw Error("Invalid draw shape file.");
		t.push(...r);
	}
	if (!t.length) throw Error("Invalid draw shape file.");
	return t;
};
//#endregion
export { w as a, _ as i, b as n, T as o, x as r, y as t };
