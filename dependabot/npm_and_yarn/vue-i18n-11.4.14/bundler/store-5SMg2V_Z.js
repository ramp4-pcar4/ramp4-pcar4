import { defineStore as e } from "pinia";
import { computed as t, reactive as n, ref as r } from "vue";
//#region src/fixtures/draw/settings.ts
var i = "draw-settings", a = "draw-shape-details", o = "draw-import", s = [{
	value: "meters",
	labelKey: "draw.settings.unit.meters"
}, {
	value: "kilometers",
	labelKey: "draw.settings.unit.kilometers"
}], c = "#0099db", l = 35, u = "shape-buffer", d = (e, t, n) => Math.min(n, Math.max(t, e)), f = (e, t) => Object.prototype.hasOwnProperty.call(e, t), p = (e, t, n) => `#${[
	e,
	t,
	n
].map((e) => d(Math.round(e), 0, 255).toString(16).padStart(2, "0")).join("")}`, m = (e, t = c) => {
	if (!e) return t;
	let n = e.trim(), r = n.startsWith("#") ? n.slice(1) : n;
	return /^[0-9a-fA-F]{3}$/.test(r) ? `#${r.split("").map((e) => `${e}${e}`).join("").toLowerCase()}` : /^[0-9a-fA-F]{6}$/.test(r) ? `#${r.toLowerCase()}` : /^[0-9a-fA-F]{8}$/.test(r) ? `#${r.slice(0, 6).toLowerCase()}` : t;
}, h = (e) => {
	let t = m(e).slice(1);
	return [
		parseInt(t.slice(0, 2), 16),
		parseInt(t.slice(2, 4), 16),
		parseInt(t.slice(4, 6), 16)
	];
}, g = (e, t, n) => {
	let [r, i, a] = h(e), o = d(n, 0, 1);
	return p(r + (t[0] - r) * o, i + (t[1] - i) * o, a + (t[2] - a) * o);
}, _ = (e) => g(e, [
	0,
	0,
	0
], .32), v = (e) => g(e, [
	255,
	255,
	255
], .46), y = () => {
	let e = c;
	return {
		fillColor: e,
		borderColor: _(e),
		bufferColor: v(e),
		opacity: l,
		borderColorManual: !1,
		bufferColorManual: !1
	};
}, b = () => ({
	distance: 0,
	unit: "kilometers"
}), x = () => ({
	areaLabel: !1,
	segmentLength: !1,
	segmentLetters: !1,
	vertexNumbers: !1
}), S = (e = {}) => {
	let t = y();
	return {
		fillColor: m(e.fillColor, t.fillColor),
		borderColor: m(e.borderColor, t.borderColor),
		bufferColor: m(e.bufferColor, t.bufferColor),
		opacity: d(Math.round(Number(e.opacity ?? t.opacity)), 0, 100),
		borderColorManual: !!e.borderColorManual,
		bufferColorManual: !!e.bufferColorManual
	};
}, C = (e = {}) => {
	let t = b(), n = s.some((t) => t.value === e.unit) ? e.unit : t.unit, r = Number(e.distance ?? t.distance);
	return {
		distance: Number.isFinite(r) ? Math.max(0, r) : t.distance,
		unit: n
	};
}, w = (e = {}) => ({
	...x(),
	areaLabel: !!e.areaLabel,
	segmentLength: !!e.segmentLength,
	segmentLetters: f(e, "segmentLetters") ? !!e.segmentLetters : !!e.segmentLength,
	vertexNumbers: !!e.vertexNumbers
}), T = (e, t = y()) => S({
	...t,
	...e?.drawStyle
}), E = (e, t = b()) => C({
	...t,
	...e?.drawBuffer
}), D = (e, t = x()) => {
	let n = e?.drawMapLabels, r = w({
		...t,
		...n
	});
	return n && !f(n, "segmentLetters") && (r.segmentLetters = !!n.segmentLength || t.segmentLetters), r;
}, O = (e, t = u) => e === "shape-buffer" || e === "shape" || e === "buffer-only" ? e : t, k = (e, t = u) => O(e?.drawIdentifyBufferMode, t), A = (e, t) => [...h(e), d(t, 0, 1)], j = (e = "details") => ({
	screen: "draw-shape-details-screen",
	props: {
		initialTab: e,
		tabRequestId: Date.now()
	}
}), M = (e, t = "details", n = {}) => {
	let r = j(t);
	e.panel.get("draw-shape-details")?.isOpen ? (e.panel.show(a, r), n.focusExisting && e.panel.focus(a)) : e.panel.open({
		id: a,
		...r
	});
}, N = (e, t) => [...e.orderedItems, ...e.teleported].some((e) => e.id === t), P = e("draw", () => {
	let e = 0, i = r([]), a = r(!1), o = r(null), s = n([]), c = r(null), l = r(null), u = r(!1), d = r(null), f = r(null), p = r(null), h = r(null), g = r(!1), x = r(!1), T = r(!1), E = r("details"), D = r(0), k = r(0), A = r(0), j = r(0), M = r(0), N = r(!0), P = r(0), F = r(!1), I = r(0), L = r(0), R = r(null), z = r(0), B = r(null), V = r(0), H = r([]), U = r(null), W = n(y()), G = n(b()), K = r("geodesic"), q = r("shape-buffer"), J = n({}), ee = t(() => d.value ?? f.value), te = t(() => p.value ?? h.value);
	function ne(e) {
		i.value.splice(0, i.value.length, ...e), a.value = !0;
	}
	function re(e) {
		o.value = e;
	}
	function ie(e) {
		K.value = e;
	}
	function ae(t) {
		let n = t.id ?? t.attributes?.id ?? `graphic-${Date.now()}-${++e}`;
		return s.push({
			...t,
			id: n
		}), n;
	}
	function Y() {
		g.value = !1, x.value = !1, T.value = !1, E.value = "details";
	}
	function oe(e) {
		let t = s.findIndex((t) => t.id === e);
		t !== -1 && (s.splice(t, 1), delete J[e], c.value === e && (c.value = null), s.length === 0 && Y(), $());
	}
	function se() {
		for (; s.length;) {
			let e = s.at(-1).id;
			B.value = e, z.value++, delete J[e], s.pop();
		}
		Y(), X();
	}
	function ce(e) {
		c.value !== e && $(), c.value = e;
	}
	function X() {
		c.value = null, $();
	}
	function le() {
		D.value++;
	}
	function ue() {
		k.value++;
	}
	function de() {
		A.value++;
	}
	function fe(e = !0) {
		N.value = e, M.value++;
	}
	function pe(e = !1) {
		F.value = e, P.value++;
	}
	function me() {
		I.value++;
	}
	function he() {
		j.value++;
	}
	function ge(e) {
		H.value = [...H.value, ...e], V.value++;
	}
	function _e(e) {
		(e === void 0 || e === V.value) && (H.value = []);
	}
	function ve() {
		return c.value ? s.find((e) => e.id === c.value) : null;
	}
	function ye(e, t) {
		let n = s.find((t) => t.id === e);
		n && (n.geometry = t);
	}
	function be(e, t) {
		let n = s.find((t) => t.id === e);
		return n && Object.assign(n, t), n;
	}
	function xe(e, t) {
		let n = s.find((t) => t.id === e);
		n && (n.attributes = {
			...n.attributes ?? {},
			drawMapLabels: w({
				...n.attributes?.drawMapLabels ?? {},
				...t
			})
		}, B.value = e, z.value++);
	}
	function Z(e) {
		let t = c.value;
		if (!t) return;
		let n = s.find((e) => e.id === t);
		n && (e(n), R.value = t, L.value++);
	}
	function Se(e) {
		Z((t) => {
			let n = S(t.attributes?.drawStyle);
			t.attributes = {
				...t.attributes ?? {},
				drawStyle: S({
					...n,
					...e
				})
			};
		});
	}
	function Ce(e) {
		Z((t) => {
			let n = S(t.attributes?.drawStyle), r = m(e, n.fillColor);
			t.attributes = {
				...t.attributes ?? {},
				drawStyle: S({
					...n,
					fillColor: r,
					borderColor: n.borderColorManual ? n.borderColor : _(r),
					bufferColor: n.bufferColorManual ? n.bufferColor : v(r),
					borderColorManual: n.borderColorManual,
					bufferColorManual: n.bufferColorManual
				})
			};
		});
	}
	function we(e) {
		Z((t) => {
			let n = S(t.attributes?.drawStyle);
			t.attributes = {
				...t.attributes ?? {},
				drawStyle: S({
					...n,
					borderColor: m(e, n.borderColor),
					borderColorManual: !0
				})
			};
		});
	}
	function Te(e) {
		Z((t) => {
			let n = S(t.attributes?.drawStyle);
			t.attributes = {
				...t.attributes ?? {},
				drawStyle: S({
					...n,
					bufferColor: m(e, n.bufferColor),
					bufferColorManual: !0
				})
			};
		});
	}
	function Ee(e) {
		let t = Number(e);
		Se({ opacity: Number.isFinite(t) ? Math.min(100, Math.max(0, Math.round(t))) : 0 });
	}
	function Q(e) {
		Z((t) => {
			let n = C(t.attributes?.drawBuffer);
			t.attributes = {
				...t.attributes ?? {},
				drawBuffer: C({
					...n,
					...e
				})
			};
		});
	}
	function De(e) {
		let t = Number(e);
		Q({ distance: Number.isFinite(t) ? Math.max(0, t) : 0 });
	}
	function Oe(e) {
		Q({ unit: e });
	}
	function ke(e) {
		Z((t) => {
			t.attributes = {
				...t.attributes ?? {},
				drawIdentifyBufferMode: O(e)
			};
		});
	}
	function Ae(e) {
		u.value = e;
	}
	function je() {
		u.value = !u.value;
	}
	function Me(e) {
		d.value = e;
	}
	function Ne(e) {
		f.value = e;
	}
	function Pe(e) {
		p.value = e;
	}
	function Fe(e) {
		h.value = e;
	}
	function $() {
		d.value = null, f.value = null, p.value = null, h.value = null;
	}
	function Ie(e) {
		g.value = e;
	}
	function Le(e) {
		x.value = e;
	}
	function Re(e) {
		T.value = e;
	}
	function ze(e) {
		E.value = e, e !== "details" && $();
	}
	function Be() {
		g.value = !g.value;
	}
	function Ve(e) {
		let t = m(e, W.fillColor);
		W.fillColor = t, W.borderColor = _(t), W.bufferColor = v(t), W.borderColorManual = !1, W.bufferColorManual = !1;
	}
	function He(e) {
		W.borderColor = m(e, W.borderColor), W.borderColorManual = !0;
	}
	function Ue(e) {
		W.bufferColor = m(e, W.bufferColor), W.bufferColorManual = !0;
	}
	function We(e) {
		let t = Number(e);
		W.opacity = Number.isFinite(t) ? Math.min(100, Math.max(0, Math.round(t))) : 0;
	}
	function Ge(e) {
		Object.assign(W, S(e));
	}
	function Ke(e) {
		let t = Number(e);
		G.distance = Number.isFinite(t) ? Math.max(0, t) : 0;
	}
	function qe(e) {
		G.unit = C({ unit: e }).unit;
	}
	function Je(e) {
		Object.assign(G, C(e));
	}
	function Ye(e) {
		q.value = O(e);
	}
	function Xe(e) {
		U.value = e;
	}
	function Ze(e, t) {
		J[e] = t;
	}
	function Qe(e) {
		J[e] = {
			shape: J[e]?.shape ?? null,
			buffer: J[e]?.buffer ?? null,
			total: J[e]?.total ?? null,
			loading: !0,
			updatedAt: J[e]?.updatedAt
		};
	}
	return {
		activeSegmentKey: ee,
		activeTool: o,
		activeVertexKey: te,
		bufferMath: K,
		bufferSettings: G,
		cancelEditModeClearSelection: F,
		cancelEditModeRequestId: P,
		configParsed: a,
		deleteSelectedGraphicRequestId: D,
		editSelectedGraphicRequestId: k,
		graphics: s,
		hoveredSegmentKey: d,
		hoveredVertexKey: p,
		identifyBufferMode: q,
		identifyGeometryGraphicId: U,
		identifySelectedGraphicRequestId: A,
		importShapeRecords: H,
		importShapesRequestId: V,
		mapLabelSettingsUpdateRequestId: z,
		mapLabelSettingsUpdatedGraphicId: B,
		mapNavEl: l,
		measurementsEnabled: u,
		refreshSelectedGraphicFeatureCountsRequestId: I,
		selectedGraphicId: c,
		selectedGraphicSettingsUpdateRequestId: L,
		selectedGraphicSettingsUpdatedGraphicId: R,
		selectedSegmentKey: f,
		selectedVertexKey: h,
		shapeDetailsActiveTab: E,
		shapeDetailsLabelsUseSettings: T,
		shapeDetailsLabelsVisible: x,
		shapeDetailsPickEnabled: g,
		shapeFeatureCounts: J,
		shapePanelFocusRequestId: j,
		stopEditModeClearSelection: N,
		stopEditModeRequestId: M,
		styleSettings: W,
		supportedTypes: i,
		addGraphic: ae,
		clearImportShapes: _e,
		clearMeasurementInteraction: $,
		clearSelection: X,
		getSelectedGraphic: ve,
		removeAll: se,
		removeGraphic: oe,
		requestCancelEditMode: pe,
		requestDeleteSelectedGraphic: le,
		requestEditSelectedGraphic: ue,
		requestIdentifySelectedGraphic: de,
		requestImportShapes: ge,
		requestRefreshSelectedGraphicFeatureCounts: me,
		requestShapePanelFocus: he,
		requestStopEditMode: fe,
		selectGraphic: ce,
		setActiveTool: re,
		setBorderColor: He,
		setBufferColor: Ue,
		setBufferDistance: Ke,
		setBufferMath: ie,
		setBufferSettings: Je,
		setBufferUnit: qe,
		setFillColor: Ve,
		setGraphicMapLabelSettings: xe,
		setHoveredSegmentKey: Me,
		setHoveredVertexKey: Pe,
		setIdentifyBufferMode: Ye,
		setIdentifyGeometryGraphicId: Xe,
		setMeasurementsEnabled: Ae,
		setOpacity: We,
		setSelectedGraphicBorderColor: we,
		setSelectedGraphicBufferColor: Te,
		setSelectedGraphicBufferDistance: De,
		setSelectedGraphicBufferSettings: Q,
		setSelectedGraphicBufferUnit: Oe,
		setSelectedGraphicFillColor: Ce,
		setSelectedGraphicIdentifyBufferMode: ke,
		setSelectedGraphicOpacity: Ee,
		setSelectedGraphicStyleSettings: Se,
		setSelectedSegmentKey: Ne,
		setSelectedVertexKey: Fe,
		setShapeDetailsActiveTab: ze,
		setShapeDetailsLabelsUseSettings: Re,
		setShapeDetailsLabelsVisible: Le,
		setShapeDetailsPickEnabled: Ie,
		setShapeFeatureCounts: Ze,
		setShapeFeatureCountsLoading: Qe,
		setStyleSettings: Ge,
		setSupportedTypes: ne,
		toggleMeasurements: je,
		toggleShapeDetailsPickEnabled: Be,
		updateGraphic: be,
		updateGraphicGeometry: ye
	};
});
//#endregion
export { D as _, o as a, d as c, S as d, x as f, k as g, E as h, s as i, C as l, m, N as n, i as o, O as p, M as r, a as s, P as t, w as u, T as v, A as y };
