import e from "@arcgis/core/Color";
import t from "@arcgis/core/config";
import { watch as n } from "@arcgis/core/core/reactiveUtils";
import r from "@arcgis/core/Graphic";
import i from "@arcgis/core/geometry/Extent";
import a from "@arcgis/core/geometry/Multipoint";
import o from "@arcgis/core/geometry/Point";
import s from "@arcgis/core/geometry/Polygon";
import c from "@arcgis/core/geometry/Polyline";
import l from "@arcgis/core/geometry/SpatialReference";
import { execute as u } from "@arcgis/core/geometry/operators/areaOperator";
import { execute as d } from "@arcgis/core/geometry/operators/bufferOperator";
import { execute as f } from "@arcgis/core/geometry/operators/centroidOperator";
import { execute as p } from "@arcgis/core/geometry/operators/differenceOperator";
import { execute as m, isLoaded as h, load as g } from "@arcgis/core/geometry/operators/geodesicBufferOperator";
import { execute as _, isLoaded as v, load as y } from "@arcgis/core/geometry/operators/geodeticAreaOperator";
import { execute as b, isLoaded as x, load as S } from "@arcgis/core/geometry/operators/geodeticLengthOperator";
import * as C from "@arcgis/core/geometry/operators/intersectsOperator";
import { execute as w } from "@arcgis/core/geometry/operators/lengthOperator";
import { fromJSON as T } from "@arcgis/core/geometry/support/jsonUtils";
import E from "@arcgis/core/request";
import D from "@arcgis/core/symbols/PictureMarkerSymbol";
import O from "@arcgis/core/symbols/SimpleFillSymbol";
import k from "@arcgis/core/symbols/SimpleLineSymbol";
import A from "@arcgis/core/symbols/SimpleMarkerSymbol";
import j from "@arcgis/core/symbols/TextSymbol";
import { fromJSON as M } from "@arcgis/core/symbols/support/jsonUtils";
import N from "@arcgis/core/widgets/Sketch/SketchViewModel";
import "@arcgis/map-components/components/arcgis-sketch";
import "@arcgis/map-components/components/arcgis-swipe";
//#region src/geo/esri.ts
var P = class {
	static async Basemap(e) {
		let t = await import("@arcgis/core/Basemap");
		return Reflect.construct(t.default, [e]);
	}
	static async Map(e) {
		let t = await import("@arcgis/core/Map");
		return Reflect.construct(t.default, [e]);
	}
	static async MapView(e) {
		let t = await import("@arcgis/core/views/MapView");
		return Reflect.construct(t.default, [e]);
	}
	static async FeatureLayer(e) {
		let t = await import("@arcgis/core/layers/FeatureLayer");
		return Reflect.construct(t.default, [e]);
	}
	static async GraphicsLayer(e) {
		let t = await import("@arcgis/core/layers/GraphicsLayer");
		return Reflect.construct(t.default, [e]);
	}
	static async ImageryLayer(e) {
		let t = await import("@arcgis/core/layers/ImageryLayer");
		return Reflect.construct(t.default, [e]);
	}
	static async ImageryTileLayer(e) {
		let t = await import("@arcgis/core/layers/ImageryTileLayer");
		return Reflect.construct(t.default, [e]);
	}
	static async MapImageLayer(e) {
		let t = await import("@arcgis/core/layers/MapImageLayer");
		return Reflect.construct(t.default, [e]);
	}
	static async OpenStreetMapLayer(e) {
		let t = await import("@arcgis/core/layers/OpenStreetMapLayer");
		return Reflect.construct(t.default, [e]);
	}
	static async TileLayer(e) {
		let t = await import("@arcgis/core/layers/TileLayer");
		return Reflect.construct(t.default, [e]);
	}
	static async VectorTileLayer(e) {
		let t = await import("@arcgis/core/layers/VectorTileLayer");
		return Reflect.construct(t.default, [e]);
	}
	static async WMSLayer(e) {
		let t = await import("@arcgis/core/layers/WMSLayer");
		return Reflect.construct(t.default, [e]);
	}
	static async ArcadeExecutor(e, t) {
		let { createArcadeExecutor: n } = await import("@arcgis/core/arcade");
		return await n(e, t);
	}
	static async ColorBackground(e) {
		let t = await import("@arcgis/core/webmap/background/ColorBackground");
		return Reflect.construct(t.default, [e]);
	}
	static async FeatureFilter(e) {
		let t = await import("@arcgis/core/layers/support/FeatureFilter");
		return Reflect.construct(t.default, [e]);
	}
	static async FieldFromJson(e) {
		return (await import("@arcgis/core/layers/support/Field")).default.fromJSON(e);
	}
	static async Query() {
		let e = await import("@arcgis/core/rest/support/Query");
		return Reflect.construct(e.default, []);
	}
	static async QueryByIds(e, t, n) {
		let { executeForIds: r } = await import("@arcgis/core/rest/query");
		return r(e, t, n);
	}
	static async RendererFromJson(e) {
		let { fromJSON: t } = await import("@arcgis/core/renderers/support/jsonUtils");
		return t(e);
	}
};
//#endregion
export { A, D as C, E as D, c as E, n as F, l as M, M as N, O, j as P, a as S, s as T, S as _, e as a, C as b, i as c, g as d, _ as f, x as g, b as h, f as i, N as j, k, m as l, y as m, u as n, t as o, v as p, d as r, p as s, P as t, h as u, T as v, o as w, w as x, r as y };
