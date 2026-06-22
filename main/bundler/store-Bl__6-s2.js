import { A as e, O as t, d as n, k as r, l as i, r as a, s as o, u as s, y as c } from "./esri-vcEQ1sbb.js";
import { defineStore as l } from "pinia";
import { computed as u, reactive as d, ref as f } from "vue";
//#region src/fixtures/draw/settings.ts
var p = "draw-settings", m = "draw-shape-details", h = "draw-import", g = [{
	value: "meters",
	labelKey: "draw.settings.unit.meters"
}, {
	value: "kilometers",
	labelKey: "draw.settings.unit.kilometers"
}], _ = "#0099db", v = 35, y = "shape-buffer", b = (e, t, n) => Math.min(n, Math.max(t, e)), x = (e, t) => Object.prototype.hasOwnProperty.call(e, t), S = (e, t, n) => `#${[
	e,
	t,
	n
].map((e) => b(Math.round(e), 0, 255).toString(16).padStart(2, "0")).join("")}`, C = (e, t = _) => {
	if (!e) return t;
	let n = e.trim(), r = n.startsWith("#") ? n.slice(1) : n;
	return /^[0-9a-fA-F]{3}$/.test(r) ? `#${r.split("").map((e) => `${e}${e}`).join("").toLowerCase()}` : /^[0-9a-fA-F]{6}$/.test(r) ? `#${r.toLowerCase()}` : /^[0-9a-fA-F]{8}$/.test(r) ? `#${r.slice(0, 6).toLowerCase()}` : t;
}, w = (e) => {
	let t = C(e).slice(1);
	return [
		parseInt(t.slice(0, 2), 16),
		parseInt(t.slice(2, 4), 16),
		parseInt(t.slice(4, 6), 16)
	];
}, T = (e, t, n) => {
	let [r, i, a] = w(e), o = b(n, 0, 1);
	return S(r + (t[0] - r) * o, i + (t[1] - i) * o, a + (t[2] - a) * o);
}, E = (e) => T(e, [
	0,
	0,
	0
], .32), D = (e) => T(e, [
	255,
	255,
	255
], .46), O = () => {
	let e = _;
	return {
		fillColor: e,
		borderColor: E(e),
		bufferColor: D(e),
		opacity: v,
		borderColorManual: !1,
		bufferColorManual: !1
	};
}, k = () => ({
	distance: 0,
	unit: "kilometers"
}), A = () => ({
	areaLabel: !1,
	segmentLength: !1,
	segmentLetters: !1,
	vertexNumbers: !1
}), j = (e = {}) => {
	let t = O();
	return {
		fillColor: C(e.fillColor, t.fillColor),
		borderColor: C(e.borderColor, t.borderColor),
		bufferColor: C(e.bufferColor, t.bufferColor),
		opacity: b(Math.round(Number(e.opacity ?? t.opacity)), 0, 100),
		borderColorManual: !!e.borderColorManual,
		bufferColorManual: !!e.bufferColorManual
	};
}, M = (e = {}) => {
	let t = k(), n = g.some((t) => t.value === e.unit) ? e.unit : t.unit, r = Number(e.distance ?? t.distance);
	return {
		distance: Number.isFinite(r) ? Math.max(0, r) : t.distance,
		unit: n
	};
}, N = (e = {}) => ({
	...A(),
	areaLabel: !!e.areaLabel,
	segmentLength: !!e.segmentLength,
	segmentLetters: x(e, "segmentLetters") ? !!e.segmentLetters : !!e.segmentLength,
	vertexNumbers: !!e.vertexNumbers
}), P = (e, t = O()) => j({
	...t,
	...e?.drawStyle
}), F = (e, t = k()) => M({
	...t,
	...e?.drawBuffer
}), I = (e, t = A()) => {
	let n = e?.drawMapLabels, r = N({
		...t,
		...n
	});
	return n && !x(n, "segmentLetters") && (r.segmentLetters = !!n.segmentLength || t.segmentLetters), r;
}, L = (e, t = y) => e === "shape-buffer" || e === "shape" || e === "buffer-only" ? e : t, R = (e, t = y) => L(e?.drawIdentifyBufferMode, t), z = (e, t) => [...w(e), b(t, 0, 1)], B = (n, i) => {
	let a = i.opacity / 100, o = b(a + .35, 0, 1);
	switch (n) {
		case "point":
		case "multipoint": return new e({
			color: z(i.fillColor, a),
			size: 12,
			outline: {
				color: z(i.borderColor, o),
				width: 1.5
			}
		});
		case "polyline": return new r({
			color: z(i.borderColor, o),
			width: 2
		});
		default: return new t({
			color: z(i.fillColor, a),
			outline: {
				color: z(i.borderColor, o),
				width: 1.5
			}
		});
	}
}, V = (e) => new t({
	color: z(e.bufferColor, e.opacity / 100 * .65),
	outline: {
		color: z(e.bufferColor, 0),
		width: 0
	}
}), H = async () => {
	s() || await n();
}, U = (e, t) => {
	let n = G(e, t);
	if (!(!e || !n)) {
		if (e.type !== "polygon") return n;
		try {
			return o(n, e) ?? void 0;
		} catch {
			return n;
		}
	}
}, W = (e) => !!e.spatialReference?.isGeographic || !!e.spatialReference?.isWebMercator, G = (e, t) => {
	if (!(!e || !t.distance)) {
		if (W(e) && s()) try {
			return i(e, t.distance, { unit: t.unit }) ?? void 0;
		} catch {}
		try {
			return a(e, t.distance, { unit: t.unit }) ?? void 0;
		} catch {
			return;
		}
	}
}, K = (e, t, n) => {
	let r = e.attributes?.id, i = G(e.geometry, n);
	if (!(!r || !i)) return new c({
		geometry: i,
		symbol: V(t),
		attributes: { drawBufferFor: r }
	});
}, q = (e = "details") => ({
	screen: "draw-shape-details-screen",
	props: {
		initialTab: e,
		tabRequestId: Date.now()
	}
}), J = (e, t = "details", n = {}) => {
	let r = q(t);
	if (e.panel.get("draw-shape-details")?.isOpen) {
		e.panel.show(m, r), n.focusExisting && e.panel.focus(m);
		return;
	}
	e.panel.open({
		id: m,
		...r
	});
}, Y = (e, t) => [...e.orderedItems, ...e.teleported].some((e) => e.id === t), X = l("draw", () => {
	let e = 0, t = f([]), n = f(!1), r = f(null), i = d([]), a = f(null), o = f(null), s = f(!1), c = f(null), l = f(null), p = f(null), m = f(null), h = f(!1), g = f(!1), _ = f(!1), v = f("details"), y = f(0), b = f(0), x = f(0), S = f(0), w = f(0), T = f(!0), A = f(0), P = f(!1), F = f(0), I = f(0), R = f(null), z = f(0), B = f(null), V = f(0), H = f([]), U = f(null), W = d(O()), G = d(k()), K = f("shape-buffer"), q = d({}), J = u(() => c.value ?? l.value), Y = u(() => p.value ?? m.value);
	function X(e) {
		t.value.splice(0, t.value.length, ...e), n.value = !0;
	}
	function ee(e) {
		r.value = e;
	}
	function te(t) {
		let n = t.id ?? t.attributes?.id ?? `graphic-${Date.now()}-${++e}`;
		return i.push({
			...t,
			id: n
		}), n;
	}
	function ne(e) {
		let t = i.findIndex((t) => t.id === e);
		t !== -1 && (i.splice(t, 1), delete q[e], a.value === e && (a.value = null), i.length === 0 && (h.value = !1, g.value = !1, _.value = !1, v.value = "details"), $());
	}
	function re(e) {
		a.value !== e && $(), a.value = e;
	}
	function ie() {
		a.value = null, $();
	}
	function ae() {
		y.value++;
	}
	function oe() {
		b.value++;
	}
	function se() {
		x.value++;
	}
	function ce(e = !0) {
		T.value = e, w.value++;
	}
	function le(e = !1) {
		P.value = e, A.value++;
	}
	function ue() {
		F.value++;
	}
	function de() {
		S.value++;
	}
	function fe(e) {
		H.value = [...H.value, ...e], V.value++;
	}
	function pe(e) {
		e !== void 0 && e !== V.value || (H.value = []);
	}
	function me() {
		return a.value ? i.find((e) => e.id === a.value) : null;
	}
	function he(e, t) {
		let n = i.find((t) => t.id === e);
		n && (n.geometry = t);
	}
	function ge(e, t) {
		let n = i.find((t) => t.id === e);
		n && Object.assign(n, t);
	}
	function _e(e, t) {
		let n = i.find((t) => t.id === e);
		n && (n.attributes = {
			...n.attributes ?? {},
			drawMapLabels: N({
				...n.attributes?.drawMapLabels ?? {},
				...t
			})
		}, B.value = e, z.value++);
	}
	function Z(e) {
		let t = a.value;
		if (!t) return;
		let n = i.find((e) => e.id === t);
		n && (e(n), R.value = t, I.value++);
	}
	function ve(e) {
		Z((t) => {
			let n = j(t.attributes?.drawStyle);
			t.attributes = {
				...t.attributes ?? {},
				drawStyle: j({
					...n,
					...e
				})
			};
		});
	}
	function ye(e) {
		Z((t) => {
			let n = j(t.attributes?.drawStyle), r = C(e, n.fillColor);
			t.attributes = {
				...t.attributes ?? {},
				drawStyle: j({
					...n,
					fillColor: r,
					borderColor: n.borderColorManual ? n.borderColor : E(r),
					bufferColor: n.bufferColorManual ? n.bufferColor : D(r),
					borderColorManual: n.borderColorManual,
					bufferColorManual: n.bufferColorManual
				})
			};
		});
	}
	function be(e) {
		Z((t) => {
			let n = j(t.attributes?.drawStyle);
			t.attributes = {
				...t.attributes ?? {},
				drawStyle: j({
					...n,
					borderColor: C(e, n.borderColor),
					borderColorManual: !0
				})
			};
		});
	}
	function xe(e) {
		Z((t) => {
			let n = j(t.attributes?.drawStyle);
			t.attributes = {
				...t.attributes ?? {},
				drawStyle: j({
					...n,
					bufferColor: C(e, n.bufferColor),
					bufferColorManual: !0
				})
			};
		});
	}
	function Se(e) {
		let t = Number(e);
		ve({ opacity: Number.isFinite(t) ? Math.min(100, Math.max(0, Math.round(t))) : 0 });
	}
	function Q(e) {
		Z((t) => {
			let n = M(t.attributes?.drawBuffer);
			t.attributes = {
				...t.attributes ?? {},
				drawBuffer: M({
					...n,
					...e
				})
			};
		});
	}
	function Ce(e) {
		let t = Number(e);
		Q({ distance: Number.isFinite(t) ? Math.max(0, t) : 0 });
	}
	function we(e) {
		Q({ unit: e });
	}
	function Te(e) {
		Z((t) => {
			t.attributes = {
				...t.attributes ?? {},
				drawIdentifyBufferMode: L(e)
			};
		});
	}
	function Ee(e) {
		s.value = e;
	}
	function De() {
		s.value = !s.value;
	}
	function Oe(e) {
		c.value = e;
	}
	function ke(e) {
		l.value = e;
	}
	function Ae(e) {
		p.value = e;
	}
	function je(e) {
		m.value = e;
	}
	function $() {
		c.value = null, l.value = null, p.value = null, m.value = null;
	}
	function Me(e) {
		h.value = e;
	}
	function Ne(e) {
		g.value = e;
	}
	function Pe(e) {
		_.value = e;
	}
	function Fe(e) {
		v.value = e, e !== "details" && $();
	}
	function Ie() {
		h.value = !h.value;
	}
	function Le(e) {
		let t = C(e, W.fillColor);
		W.fillColor = t, W.borderColor = E(t), W.bufferColor = D(t), W.borderColorManual = !1, W.bufferColorManual = !1;
	}
	function Re(e) {
		W.borderColor = C(e, W.borderColor), W.borderColorManual = !0;
	}
	function ze(e) {
		W.bufferColor = C(e, W.bufferColor), W.bufferColorManual = !0;
	}
	function Be(e) {
		let t = Number(e);
		W.opacity = Number.isFinite(t) ? Math.min(100, Math.max(0, Math.round(t))) : 0;
	}
	function Ve(e) {
		Object.assign(W, j(e));
	}
	function He(e) {
		let t = Number(e);
		G.distance = Number.isFinite(t) ? Math.max(0, t) : 0;
	}
	function Ue(e) {
		G.unit = M({ unit: e }).unit;
	}
	function We(e) {
		Object.assign(G, M(e));
	}
	function Ge(e) {
		K.value = L(e);
	}
	function Ke(e) {
		U.value = e;
	}
	function qe(e, t) {
		q[e] = t;
	}
	function Je(e) {
		q[e] = {
			shape: q[e]?.shape ?? null,
			buffer: q[e]?.buffer ?? null,
			total: q[e]?.total ?? null,
			loading: !0,
			updatedAt: q[e]?.updatedAt
		};
	}
	return {
		supportedTypes: t,
		configParsed: n,
		activeTool: r,
		graphics: i,
		selectedGraphicId: a,
		measurementsEnabled: s,
		hoveredSegmentKey: c,
		selectedSegmentKey: l,
		activeSegmentKey: J,
		hoveredVertexKey: p,
		selectedVertexKey: m,
		activeVertexKey: Y,
		shapeDetailsPickEnabled: h,
		shapeDetailsLabelsVisible: g,
		shapeDetailsLabelsUseSettings: _,
		shapeDetailsActiveTab: v,
		deleteSelectedGraphicRequestId: y,
		editSelectedGraphicRequestId: b,
		identifySelectedGraphicRequestId: x,
		shapePanelFocusRequestId: S,
		stopEditModeRequestId: w,
		stopEditModeClearSelection: T,
		cancelEditModeRequestId: A,
		cancelEditModeClearSelection: P,
		refreshSelectedGraphicFeatureCountsRequestId: F,
		selectedGraphicSettingsUpdateRequestId: I,
		selectedGraphicSettingsUpdatedGraphicId: R,
		mapLabelSettingsUpdateRequestId: z,
		mapLabelSettingsUpdatedGraphicId: B,
		importShapesRequestId: V,
		importShapeRecords: H,
		identifyGeometryGraphicId: U,
		styleSettings: W,
		bufferSettings: G,
		identifyBufferMode: K,
		shapeFeatureCounts: q,
		setSupportedTypes: X,
		setActiveTool: ee,
		addGraphic: te,
		removeGraphic: ne,
		selectGraphic: re,
		clearSelection: ie,
		requestDeleteSelectedGraphic: ae,
		requestEditSelectedGraphic: oe,
		requestIdentifySelectedGraphic: se,
		requestStopEditMode: ce,
		requestCancelEditMode: le,
		requestRefreshSelectedGraphicFeatureCounts: ue,
		requestShapePanelFocus: de,
		requestImportShapes: fe,
		clearImportShapes: pe,
		getSelectedGraphic: me,
		updateGraphicGeometry: he,
		updateGraphic: ge,
		setGraphicMapLabelSettings: _e,
		setSelectedGraphicStyleSettings: ve,
		setSelectedGraphicFillColor: ye,
		setSelectedGraphicBorderColor: be,
		setSelectedGraphicBufferColor: xe,
		setSelectedGraphicOpacity: Se,
		setSelectedGraphicBufferSettings: Q,
		setSelectedGraphicBufferDistance: Ce,
		setSelectedGraphicBufferUnit: we,
		setSelectedGraphicIdentifyBufferMode: Te,
		setMeasurementsEnabled: Ee,
		toggleMeasurements: De,
		setHoveredSegmentKey: Oe,
		setSelectedSegmentKey: ke,
		setHoveredVertexKey: Ae,
		setSelectedVertexKey: je,
		clearMeasurementInteraction: $,
		setShapeDetailsPickEnabled: Me,
		setShapeDetailsLabelsVisible: Ne,
		setShapeDetailsLabelsUseSettings: Pe,
		setShapeDetailsActiveTab: Fe,
		toggleShapeDetailsPickEnabled: Ie,
		setFillColor: Le,
		setBorderColor: Re,
		setBufferColor: ze,
		setOpacity: Be,
		setStyleSettings: Ve,
		setBufferDistance: He,
		setBufferUnit: Ue,
		setBufferSettings: We,
		setIdentifyBufferMode: Ge,
		setIdentifyGeometryGraphicId: Ke,
		setShapeFeatureCounts: qe,
		setShapeFeatureCountsLoading: Je,
		mapNavEl: o
	};
});
//#endregion
export { C as _, h as a, I as b, M as c, G as d, K as f, L as g, H as h, g as i, N as l, B as m, Y as n, p as o, U as p, J as r, m as s, X as t, j as u, F as v, P as x, R as y };
