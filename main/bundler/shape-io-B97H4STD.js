import { v as e } from "./esri-vcEQ1sbb.js";
import { S as t, _ as n, b as r, c as i, l as a, u as o, x as s, y as c } from "./store-rB8-tOpA.js";
import l from "file-saver";
//#region src/fixtures/draw/shape-io.ts
var u = "ramp4-draw-shapes", d = "json", f = (e) => typeof e == "object" && !!e && !Array.isArray(e), p = (e) => JSON.parse(JSON.stringify(e)), m = (e, t) => f(e) ? e : f(t) ? t : {}, h = (e) => {
	let t = e.geometry;
	return t ? p(typeof t.toJSON == "function" ? t.toJSON() : t) : void 0;
}, g = (e) => typeof e.attributes?.type == "string" ? e.attributes.type : e.geometry?.type, _ = (e) => typeof e.attributes?.id == "string" ? e.attributes.id : typeof e.id == "string" ? e.id : void 0, v = (e) => {
	let n = h(e), i = g(e);
	if (!n || !i) return;
	let a = _(e);
	return {
		...a ? { id: a } : {},
		type: i,
		geometry: n,
		settings: {
			drawStyle: t(e.attributes),
			drawBuffer: c(e.attributes),
			drawIdentifyBufferMode: r(e.attributes),
			drawMapLabels: s(e.attributes)
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
	let r = f(t.attributes) ? t.attributes : {}, s = f(t.settings) ? t.settings : t, c = p(t.geometry), l = e(c);
	if (!l) return;
	let u = typeof t.type == "string" ? t.type : typeof r.type == "string" ? r.type : l.type;
	return {
		id: typeof t.id == "string" ? t.id : void 0,
		type: u,
		geometry: typeof l.toJSON == "function" ? l.toJSON() : c,
		settings: {
			drawStyle: o(m(s.drawStyle, r.drawStyle)),
			drawBuffer: i(m(s.drawBuffer, r.drawBuffer)),
			drawIdentifyBufferMode: n(s.drawIdentifyBufferMode ?? r.drawIdentifyBufferMode),
			drawMapLabels: a(m(s.drawMapLabels, r.drawMapLabels))
		}
	};
}, w = (e) => {
	let t = S(e);
	if (Array.isArray(t)) if (t.length) {
		let e = t.map(C);
		return e.every(Boolean) ? e : [];
	} else return [];
	else return;
}, T = async (e) => {
	let t = "Invalid draw shape file.";
	if (!e.length) throw Error(t);
	let n = [];
	for (let r of e) {
		let e;
		try {
			e = JSON.parse(await r.text());
		} catch {
			throw Error(t);
		}
		let i = w(e);
		if (Array.isArray(i)) if (i.length) n.push(...i);
		else return [];
		else throw Error(t);
	}
	return n;
};
//#endregion
export { _ as a, x as i, y as n, w as o, b as r, T as s, v as t };
