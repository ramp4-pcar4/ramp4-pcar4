import { M as e, v as t } from "./esri-vcEQ1sbb.js";
import { S as n, _ as r, b as i, c as a, l as o, u as s, x as c, y as l } from "./store-CbXVpAzw.js";
import u from "file-saver";
//#region src/fixtures/draw/shape-io.ts
var d = "ramp4-draw-shapes", f = "json", p = (e) => typeof e == "object" && !!e && !Array.isArray(e), m = (e) => JSON.parse(JSON.stringify(e)), h = (e, t) => p(e) ? e : p(t) ? t : {}, g = (e) => {
	let t = e.geometry;
	return t ? m(typeof t.toJSON == "function" ? t.toJSON() : t) : void 0;
}, _ = (e) => typeof e.attributes?.type == "string" ? e.attributes.type : e.geometry?.type, v = (e) => typeof e.attributes?.id == "string" ? e.attributes.id : typeof e.id == "string" ? e.id : void 0, y = (e) => {
	let t = g(e), r = _(e);
	if (!t || !r) return;
	let a = v(e);
	return {
		...a ? { id: a } : {},
		type: r,
		geometry: t,
		settings: {
			drawStyle: n(e.attributes),
			drawBuffer: l(e.attributes),
			drawIdentifyBufferMode: i(e.attributes),
			drawMapLabels: c(e.attributes)
		}
	};
}, b = (e) => ({
	fileType: d,
	version: 1,
	exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
	shapes: e.flatMap((e) => {
		let t = y(e);
		return t ? [t] : [];
	})
}), x = (e = "ramp-draw-shapes") => `${e}-${(/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-")}.${f}`, S = (e, t) => {
	let n = b(e);
	if (!n.shapes.length) return !1;
	let r = new Blob([JSON.stringify(n, null, 2)], { type: "application/json;charset=utf-8" });
	return u.saveAs(r, t ?? x()), !0;
}, C = (e) => {
	if (Array.isArray(e)) return e;
	if (p(e)) return Array.isArray(e.shapes) ? (e.fileType ?? e.format) === "ramp4-draw-shapes" ? e.shapes : void 0 : p(e.geometry) ? [e] : void 0;
}, w = (e) => {
	if (!p(e) || !p(e.geometry)) return;
	let n = p(e.attributes) ? e.attributes : {}, i = p(e.settings) ? e.settings : e, c = m(e.geometry), l = t(c);
	if (!l) return;
	let u = typeof e.type == "string" ? e.type : typeof n.type == "string" ? n.type : l.type;
	return {
		id: typeof e.id == "string" ? e.id : void 0,
		type: u,
		geometry: typeof l.toJSON == "function" ? l.toJSON() : c,
		settings: {
			drawStyle: s(h(i.drawStyle, n.drawStyle)),
			drawBuffer: a(h(i.drawBuffer, n.drawBuffer)),
			drawIdentifyBufferMode: r(i.drawIdentifyBufferMode ?? n.drawIdentifyBufferMode),
			drawMapLabels: o(h(i.drawMapLabels, n.drawMapLabels))
		}
	};
}, T = (e) => {
	let t = C(e);
	if (Array.isArray(t)) if (t.length) {
		let e = t.map(w);
		return e.every(Boolean) ? e : void 0;
	} else return [];
	else return;
}, E = async (e) => {
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
		let i = T(e);
		if (Array.isArray(i)) if (i.length) n.push(...i);
		else return [];
		else throw Error(t);
	}
	return n;
}, D = (t, n) => {
	let r = y(t);
	if (!r.geometry) return;
	let i;
	switch (r.type) {
		case "point":
		case "polyline":
		case "multipoint":
		case "polygon":
			i = r.type;
			break;
		case "rectangle":
		case "circle":
			i = "polygon";
			break;
		default:
			console.error(`Encountered unhandled drawing type ${r.type}`);
			return;
	}
	let a = r.geometry;
	return a.type = i, a.spatialReference = new e(a.spatialReference), {
		ramp: n.geo.geom.geomEsriToRamp(a, t.id),
		draw: r
	};
};
//#endregion
export { v as a, D as i, x as n, T as o, S as r, E as s, b as t };
