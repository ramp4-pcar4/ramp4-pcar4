import { os as At, ot as It, ou as F, ov as $t, k9 as he, ow as Dt, ox as fe, oy as O, oz as Pe, oA as se, kK as Et, ag as Rt, oB as ge, oC as Te, oD as Ye, oE as Lt, oF as Nt, oG as Ut, oH as Vt, cP as Q, oI as Gt, oJ as zt, C as Le, or as B, ja as Ht, cR as Wt, fj as Ke, fy as qt, h4 as jt, af as U, oK as Xt, oL as Yt, oM as Kt, hs as Jt, oN as Qt, oO as Zt, h0 as P, oP as ei, ff as ti, a2 as de, m9 as Je, jG as ii, lJ as ri, s as Z, mz as si, a8 as Ne, K as Qe, a4 as ai, aj as ni, f8 as oi, ci as Ce, fg as Ue, fr as Ee, m0 as li, h2 as Ze, fc as hi, fa as ci, lk as ui, lm as di, kq as pi, lI as _i, oQ as mi, oR as fi, lL as et, oS as gi, lM as yi, b5 as vi, fk as bi, U as Re, X as wi, ay as tt, c_ as xi, oT as Mi } from "./main-CmejC-so.js";
import { aU as it, aV as Oi, K as ae, aW as Si, t as Pi, aX as Ti, aY as Ci } from "./UpdateTracking2D-D4yfHw6T.js";
import { i as we } from "./enums-CQ3NrvMA.js";
import { f as rt, m as st, e as Ei, a as Ri } from "./SDFHelper-EtEZbkJF.js";
import { o as zi, $ as V, _ as ze, e as Fi, j as at, t as Bi, p as ki, f as Ai, M as Ie, I as ce, J as Ii, T as Ft, v as $i } from "./definitions-7ZaZRHRo.js";
import { A as ye, E as $, t as Di, g as Li, o as nt, h as Ni, i as Ui } from "./Container-B1L9L638.js";
import { d as Vi, e as ot, a as j, c as lt, h as ht, i as Gi, m as Hi } from "./WGLContainer-Dtu9wLrk.js";
import { L as k } from "./enums-qHpGJ28Q.js";
import { a as Wi, e as xe, o as Ve } from "./ProgramTemplate-p_8Syt13.js";
import { glslifyDefineMap as Oe } from "./webglDeps-NW7Ig1UZ.js";
import { e as ct, r as qi, t as ji, a as Xi, n as Yi, b as Ki, c as Ji } from "./MagnifierPrograms-BMqYEvT6.js";
import { d as Fa, f as Ba } from "./MagnifierPrograms-BMqYEvT6.js";
import { h as Ge, x as D, i as He, s as Qi } from "./Program-DzoSBHvo.js";
import { R as v, E as ne, F as We, G as E, D as R, L, O as $e, I as Fe, C as De, B as qe, U as je, T as ut, N as Be, P as Zi } from "./enums-Do5C4ZjN.js";
import { o as er, w as tr } from "./RenderingContext-Uwo8i5HU.js";
import { p as ir, s as rr } from "./imageUtils-BBfO1gZE.js";
import { e as sr, i as ar } from "./rasterizingUtils-CO8tgVKs.js";
import { t as I } from "./Rect-DD6XS68q.js";
import { e as z, m as G } from "./Texture-DgcJZ8H_.js";
import { o as nr } from "./floatRGBA-6b4v8hd5.js";
import { j as or, M as lr, y as hr } from "./LabelMetric-pYmPcoN1.js";
import { f as cr } from "./utils-CVFK0GyW.js";
import { t as dt } from "./VertexElementDescriptor-BAy1DPb3.js";
import { F as ur, T as dr } from "./FeatureCommandQueue-HINe040b.js";
import { $ as Aa } from "./GraphicsView2D-BSSXQt0w.js";
import { t as $a } from "./GraphicContainer-DeD9Mibq.js";
import { t as pt } from "./requestImageUtils-S6yLMQNL.js";
const pr = () => Le.getLogger("esri.symbols.cim.cimAnalyzer");
function _r(u) {
  const e = u.markerPlacement;
  return e && e.angleToLine ? we.MAP : we.SCREEN;
}
class mr {
  constructor(e) {
    this._cimLayers = [], this._poMap = {}, this._primitiveOverrides = [], e && (this._resourceManager = e);
  }
  analyzeSymbolReference(e, t, i) {
    if (this._cimLayers = i ?? [], !e) return this._cimLayers;
    if (this._reset(), e.primitiveOverrides) {
      this._primitiveOverrides = e.primitiveOverrides;
      for (const r of this._primitiveOverrides) {
        const a = r.valueExpressionInfo;
        if (a) this._setPoMap(r.primitiveName, r.propertyName, a);
        else if (r.value != null) {
          let s = r.value;
          r.propertyName.includes("Color") && (At(s) && (s = It(s)), s = F(s)), this._setPoMap(r.primitiveName, r.propertyName, s);
        }
      }
    }
    return this._analyzeSymbol(e.symbol, t), this._cimLayers;
  }
  _reset() {
    this._cimLayers = [], this._poMap = {}, this._primitiveOverrides = [];
  }
  _analyzeSymbol(e, t) {
    switch (e?.type) {
      case "CIMPointSymbol":
      case "CIMLineSymbol":
      case "CIMPolygonSymbol":
        this._analyzeMultiLayerSymbol(e, t);
    }
  }
  _analyzeMultiLayerSymbol(e, t) {
    const i = e?.symbolLayers;
    if (!i) return;
    const r = e.effects;
    let a = we.SCREEN;
    const s = $t(e) ?? 0;
    e.type === "CIMPointSymbol" && e.angleAlignment === "Map" && (a = we.MAP);
    const n = e.type === "CIMPolygonSymbol";
    let o = i.length;
    for (; o--; ) {
      const l = i[o];
      if (!l || l.enable === !1) continue;
      let h;
      r?.length && (h = [...r]);
      const c = l.effects;
      c?.length && (r ? h.push(...c) : h = [...c]);
      let d = null;
      if (h) {
        d = [];
        for (const _ of h) {
          const m = he.findEffectOverrides(_, this._primitiveOverrides);
          m && d.push(m);
        }
      }
      const p = [];
      switch (he.findApplicableOverrides(l, this._primitiveOverrides, p), l.type) {
        case "CIMSolidFill":
          this._analyzeSolidFill(l, d);
          break;
        case "CIMPictureFill":
          this._analyzePictureFill(l, d);
          break;
        case "CIMHatchFill":
          this._analyzeHatchFill(l, d);
          break;
        case "CIMGradientFill":
          this._analyzeGradientFill(l, d);
          break;
        case "CIMSolidStroke":
          this._analyzeSolidStroke(l, d, n, s);
          break;
        case "CIMPictureStroke":
          this._analyzePictureStroke(l, d, n, s);
          break;
        case "CIMGradientStroke":
          this._analyzeGradientStroke(l, d, n, s);
          break;
        case "CIMCharacterMarker":
        case "CIMPictureMarker":
        case "CIMVectorMarker": {
          e.type !== "CIMLineSymbol" && e.type !== "CIMPolygonSymbol" || (a = _r(l));
          const _ = [], m = l.primitiveName;
          m && _.push(m);
          const g = n && Dt(l.markerPlacement);
          this._analyzeMarker(l, d, null, _, a, s, t, [], !1, g);
          break;
        }
        default:
          pr().error("Cannot analyze CIM layer", l.type);
      }
    }
  }
  _analyzeSolidFill(e, t) {
    const { primitiveName: i, type: r } = e, a = F(e.color);
    this._cimLayers.push({ type: "fill", spriteRasterizationParam: null, colorLocked: !!e.colorLocked, color: this._getValueOrOverrideExpression(r, i, "Color", a), height: 0, angle: 0, offsetX: 0, offsetY: 0, scaleX: 1, effects: t, applyRandomOffset: !1, sampleAlphaOnly: !0, hasUnresolvedReplacementColor: !1 });
  }
  _analyzePictureFill(e, t) {
    const { primitiveName: i, type: r } = e, a = fe(e), s = O(e.height, B.CIMPictureFill.height);
    let n = O(e.scaleX, 1);
    if ("width" in e && typeof e.width == "number") {
      const l = e.width;
      let h = 1;
      const c = this._resourceManager.getResource(e.url);
      c != null && (h = c.width / c.height), n /= h * (s / l);
    }
    const o = { type: "sprite-rasterization-param", resource: e, overrides: this._getPrimitiveMaterialOverrides(i, r) };
    this._cimLayers.push({ type: "fill", spriteRasterizationParam: o, colorLocked: !!e.colorLocked, effects: t, color: this._getValueOrOverrideExpression(r, i, "TintColor", a), height: this._getValueOrOverrideExpression(r, i, "Height", s), scaleX: this._getValueOrOverrideExpression(r, i, "ScaleX", n), angle: this._getValueOrOverrideExpression(r, i, "Rotation", O(e.rotation)), offsetX: this._getValueOrOverrideExpression(r, i, "OffsetX", O(e.offsetX)), offsetY: this._getValueOrOverrideExpression(r, i, "OffsetY", O(e.offsetY)), applyRandomOffset: !1, sampleAlphaOnly: !1, hasUnresolvedReplacementColor: !1 });
  }
  _analyzeHatchFill(e, t) {
    const { primitiveName: i, type: r } = e, a = this._analyzeMaterialOverrides(i, ["Rotation", "OffsetX", "OffsetY"]), s = this._normalizePrimitiveOverrideProps(a);
    let n = [255, 255, 255, 1], o = !1;
    if (e.lineSymbol?.symbolLayers) for (const h of e.lineSymbol.symbolLayers) {
      if (h.type !== "CIMSolidStroke") continue;
      const c = h.primitiveName ?? i;
      o || !c || h.colorLocked || this._poMap[c]?.Color == null && this._poMap[c]?.StrokeColor == null || (n = F(h.color), n = this._maybeGetValueOrOverrideExpression(c, "StrokeColor") ?? this._getValueOrOverrideExpression(r, c, "Color", n), o = !0);
      const d = this._maybeGetValueOrOverrideExpression(c, "StrokeWidth");
      if (d) {
        let p = null, _ = null;
        typeof d == "number" ? p = d : _ = d.valueExpressionInfo;
        let m = s.find((g) => g.propertyName === "strokeWidth");
        m ? m.propertyName = "width" : (m = { type: "CIMPrimitiveOverride", primitiveName: c, propertyName: "width", valueExpressionInfo: _, value: p, defaultValue: Pe(r, "width") }, s.push(m));
      }
    }
    const l = { type: "sprite-rasterization-param", resource: e, overrides: s };
    this._cimLayers.push({ type: "fill", spriteRasterizationParam: l, colorLocked: !!e.colorLocked, effects: t, color: n, height: this._getValueOrOverrideExpression(r, i, "Separation", O(e.separation, B.CIMHatchFill.separation)), scaleX: 1, angle: this._getValueOrOverrideExpression(r, i, "Rotation", O(e.rotation)), offsetX: this._getValueOrOverrideExpression(r, i, "OffsetX", O(e.offsetX)), offsetY: this._getValueOrOverrideExpression(r, i, "OffsetY", O(e.offsetY)), applyRandomOffset: !1, sampleAlphaOnly: !0, hasUnresolvedReplacementColor: !o });
  }
  _analyzeGradientFill(e, t) {
    this._cimLayers.push({ type: "fill", spriteRasterizationParam: null, colorLocked: !!e.colorLocked, effects: t, color: [128, 128, 128, 1], height: 0, angle: 0, offsetX: 0, offsetY: 0, scaleX: 1, applyRandomOffset: !1, sampleAlphaOnly: !1, hasUnresolvedReplacementColor: !1 });
  }
  _analyzeSolidStroke(e, t, i, r) {
    const { primitiveName: a, type: s } = e, n = F(e.color), o = O(e.width, B.CIMSolidStroke.width), l = se(e.capStyle, B.CIMSolidStroke.capstyle), h = se(e.joinStyle, B.CIMSolidStroke.joinstyle), c = e.miterLimit;
    let d, p, _ = [];
    if (this._analyzePrimitiveOverrides(a, t, null, null) && (_ = this._getPrimitiveMaterialOverrides(a, s)), t && t instanceof Array && t.length > 0) {
      const g = t[t.length - 1].effect;
      g && g.type === "CIMGeometricEffectDashes" && g.lineDashEnding === "NoConstraint" && g.offsetAlongLine === null && (d = g.dashTemplate, p = g.scaleDash, (t = [...t]).pop());
    }
    const m = d !== void 0 ? { type: "sprite-rasterization-param", resource: { type: "dash", dashTemplate: d, capStyle: l }, overrides: _ } : null;
    this._cimLayers.push({ type: "line", spriteRasterizationParam: m, isOutline: i, colorLocked: !!e.colorLocked, effects: t, color: this._getValueOrOverrideExpression(s, a, "Color", n), width: this._getValueOrOverrideExpression(s, a, "Width", o), cap: this._getValueOrOverrideExpression(s, a, "CapStyle", l), join: this._getValueOrOverrideExpression(s, a, "JoinStyle", h), miterLimit: c && this._getValueOrOverrideExpression(s, a, "MiterLimit", c), referenceWidth: r, zOrder: ke(e.name), dashTemplate: d, scaleDash: p, sampleAlphaOnly: !0 });
  }
  _analyzePictureStroke(e, t, i, r) {
    const { primitiveName: a, type: s } = e, n = fe(e), o = O(e.width, B.CIMPictureStroke.width), l = se(e.capStyle, B.CIMPictureStroke.capstyle), h = se(e.joinStyle, B.CIMPictureStroke.joinstyle), c = e.miterLimit, d = { type: "sprite-rasterization-param", resource: e, overrides: this._getPrimitiveMaterialOverrides(a, s) };
    this._cimLayers.push({ type: "line", spriteRasterizationParam: d, isOutline: i, colorLocked: !!e.colorLocked, effects: t, color: this._getValueOrOverrideExpression(s, a, "TintColor", n), width: this._getValueOrOverrideExpression(s, a, "Width", o), cap: this._getValueOrOverrideExpression(s, a, "CapStyle", l), join: this._getValueOrOverrideExpression(s, a, "JoinStyle", h), miterLimit: c && this._getValueOrOverrideExpression(s, a, "MiterLimit", c), referenceWidth: r, zOrder: ke(e.name), dashTemplate: null, scaleDash: !1, sampleAlphaOnly: !1 });
  }
  _analyzeGradientStroke(e, t, i, r) {
    const { primitiveName: a, type: s } = e, n = O(e.width, B.CIMSolidStroke.width), o = se(e.capStyle, B.CIMGradientStroke.capstyle), l = se(e.joinStyle, B.CIMGradientStroke.joinstyle), h = e.miterLimit;
    this._cimLayers.push({ type: "line", spriteRasterizationParam: null, isOutline: i, colorLocked: !!e.colorLocked, effects: t, color: [128, 128, 128, 1], width: this._getValueOrOverrideExpression(s, a, "Width", n), cap: this._getValueOrOverrideExpression(s, a, "CapStyle", o), join: this._getValueOrOverrideExpression(s, a, "JoinStyle", l), miterLimit: h && this._getValueOrOverrideExpression(s, a, "MiterLimit", h), referenceWidth: r, zOrder: ke(e.name), dashTemplate: null, scaleDash: !1, sampleAlphaOnly: !1 });
  }
  _analyzeMarker(e, t, i, r, a, s, n, o, l = !1, h = !1) {
    if (l ||= !!e.colorLocked, this._analyzeMarkerInsidePolygon(e, t, l)) return;
    const c = O(e.size, B.CIMVectorMarker.size), d = O(e.rotation), p = O(e.offsetX), _ = O(e.offsetY), { primitiveName: m, type: g } = e, y = this._getValueOrOverrideExpression(g, m, "Size", c), f = this._getValueOrOverrideExpression(g, m, "Rotation", d), M = this._getValueOrOverrideExpression(g, m, "OffsetX", p), w = this._getValueOrOverrideExpression(g, m, "OffsetY", _);
    switch (e.type) {
      case "CIMPictureMarker":
        this._analyzePictureMarker(e, t, i, r, a, s, y, f, M, w, o, l, h);
        break;
      case "CIMVectorMarker":
        this._analyzeVectorMarker(e, t, i, r, a, s, y, f, M, w, o, n, l, h);
    }
  }
  _analyzeMarkerInsidePolygon(e, t, i) {
    const { markerPlacement: r, type: a } = e;
    if (!r || r.type !== "CIMMarkerPlacementInsidePolygon") return !1;
    if (a === "CIMVectorMarker" || a === "CIMPictureMarker") {
      const d = e.primitiveName;
      if (d && this._analyzePrimitiveOverrides([d], t, null, null)) return !1;
      const p = r.primitiveName;
      if (p && this._analyzePrimitiveOverrides([p], t, null, null)) return !1;
      if (a === "CIMVectorMarker") {
        const { markerGraphics: _ } = e;
        if (_) for (const m of _) {
          const { symbol: g } = m;
          if (g?.type === "CIMPolygonSymbol" && g.symbolLayers) {
            const { symbolLayers: y } = g;
            for (const f of y) if (f.type === "CIMSolidStroke") return !1;
          }
        }
      } else {
        const { animatedSymbolProperties: _ } = e;
        if (_) return !1;
      }
    }
    const s = Math.abs(r.stepX), n = Math.abs(r.stepY);
    if (s === 0 || n === 0) return !0;
    let o, l;
    if (r.gridType === "Random") {
      const d = Ht(zi), p = Math.max(Math.floor(d / s), 1);
      o = n * Math.max(Math.floor(d / n), 1), l = p * s / o;
    } else r.shiftOddRows ? (o = 2 * n, l = s / n * 0.5) : (o = n, l = s / n);
    const h = fe(e), c = e.type === "CIMCharacterMarker" ? null : { type: "sprite-rasterization-param", resource: e, overrides: [] };
    return this._cimLayers.push({ type: "fill", spriteRasterizationParam: c, colorLocked: i, effects: t, color: h, height: o, scaleX: l, angle: r.gridAngle, offsetX: O(r.offsetX), offsetY: O(r.offsetY), applyRandomOffset: r.gridType === "Random", sampleAlphaOnly: e.type !== "CIMPictureMarker", hasUnresolvedReplacementColor: !0 }), !0;
  }
  _analyzePictureMarker(e, t, i, r, a, s, n, o, l, h, c, d, p) {
    const { primitiveName: _, type: m } = e;
    let g = O(e.scaleX, 1);
    const y = fe(e);
    i || (i = this._createMarkerPlacementOverrideExpression(e.markerPlacement));
    const f = this._createAnimatedSymbolPropertiesOverrideExpression(e.animatedSymbolProperties), M = e.anchorPoint ?? { x: 0, y: 0 };
    if ("width" in e && typeof e.width == "number") {
      const T = e.width;
      let S = 1;
      const C = this._resourceManager.getResource(e.url);
      C != null && (S = C.width / C.height), g /= S * (O(e.size) / T);
    }
    const w = [...r];
    let x;
    e.primitiveName && w.push(e.primitiveName), e.animatedSymbolProperties || f ? x = { type: "animated", url: e.url, urlHash: "H" + Et(e.url), playAnimation: e.animatedSymbolProperties?.playAnimation, reverseAnimation: e.animatedSymbolProperties?.reverseAnimation, randomizeStartTime: e.animatedSymbolProperties?.randomizeStartTime, randomizeStartSeed: e.animatedSymbolProperties?.randomizeStartSeed, startTimeOffset: e.animatedSymbolProperties?.startTimeOffset, duration: e.animatedSymbolProperties?.duration, repeatType: e.animatedSymbolProperties?.repeatType, repeatDelay: e.animatedSymbolProperties?.repeatDelay } : (x = Rt(e), x.markerPlacement = null);
    const b = { type: "sprite-rasterization-param", resource: x, overrides: this._getMaterialOverrides(w, m) };
    f && b.overrides.push(...f.overrides), this._cimLayers.push({ type: "marker", spriteRasterizationParam: b, colorLocked: d, effects: t, scaleSymbolsProportionally: !1, alignment: a, size: n, scaleX: this._getValueOrOverrideExpression(m, _, "ScaleX", g), rotation: o, offsetX: l, offsetY: h, transform: { type: "cim-marker-transform-param", params: c }, color: this._getValueOrOverrideExpression(m, _, "TintColor", y), anchorPoint: { x: M.x, y: M.y }, isAbsoluteAnchorPoint: e.anchorPointUnits !== "Relative", outlineColor: [0, 0, 0, 0], outlineWidth: 0, frameHeight: 0, widthRatio: 1, rotateClockwise: !!e.rotateClockwise, referenceSize: s, sizeRatio: 1, isOutline: p, markerPlacement: i, animatedSymbolProperties: f });
  }
  _analyzeVectorMarker(e, t, i, r, a, s, n, o, l, h, c, d, p, _) {
    const m = e.markerGraphics;
    if (!m) return;
    const g = e.frame;
    let y = 0;
    if (y = g ? g.ymax - g.ymin : s, y) {
      const f = { offsetX: l, offsetY: h, rotation: o, size: n, frameHeight: y, rotateClockWise: !!e.rotateClockwise };
      c = [...c, f];
    }
    i || (i = this._createMarkerPlacementOverrideExpression(e.markerPlacement));
    for (const f of m) if (f) {
      const M = f.symbol;
      if (!M) continue;
      const w = f.primitiveName;
      let x;
      if (w && r.push(w), (M.type === "CIMPointSymbol" || M.type === "CIMTextSymbol") && g) {
        let b = 0, T = 0;
        const S = f.geometry;
        "x" in S && "y" in S && (b += S.x - 0.5 * (g.xmin + g.xmax), T += S.y - 0.5 * (g.ymin + g.ymax));
        const C = e.anchorPoint;
        C && (e.anchorPointUnits === "Absolute" ? (b -= C.x, T -= C.y) : g && (b -= (g.xmax - g.xmin) * C.x, T -= (g.ymax - g.ymin) * C.y));
        const H = { offsetX: b, offsetY: T, rotation: 0, size: 0, frameHeight: 0, rotateClockWise: !1 };
        x = [...c, H];
      }
      switch (M.type) {
        case "CIMPointSymbol":
        case "CIMLineSymbol":
        case "CIMPolygonSymbol":
          d || gr(M) ? this._analyzeMultiLayerGraphicNonSDF(e, t, i, null, f, r, a, s, x ?? c, y, p, _) : this._analyzeMultiLayerGraphic(e, t, i, null, f, r, a, s, x ?? c, y, p, _);
          break;
        case "CIMTextSymbol":
          this._analyzeTextGraphic(t, i, f, r, a, s, x ?? c, p);
      }
      w && r.pop();
    }
  }
  _analyzeMultiLayerGraphic(e, t, i, r, a, s, n, o, l, h, c, d) {
    const p = a.symbol, _ = p.symbolLayers;
    if (!_) return;
    let m = _.length;
    if (fr(_)) return void this._analyzeCompositeMarkerGraphic(e, t, i, r, a, _, n, o, l, h, c, d);
    const g = this._resourceManager.geometryEngine, y = it.applyEffects(p.effects, a.geometry, g);
    if (y) for (; m--; ) {
      const f = _[m];
      if (!f || f.enable === !1) continue;
      const M = f.primitiveName;
      switch (M && s.push(M), f.type) {
        case "CIMSolidFill":
        case "CIMSolidStroke": {
          const w = it.applyEffects(f.effects, y, g), x = rt(w);
          if (!x) continue;
          const b = e.anchorPointUnits !== "Relative", [T, S, C, H] = st(x, e.frame, e.size, e.anchorPoint, b), N = f.type === "CIMSolidFill", ee = { type: "sdf", geom: w, asFill: N }, { path: W } = f, te = N ? F(ge(f)) : W == null ? F(Te(f)) : [0, 0, 0, 0], ie = N ? [0, 0, 0, 0] : F(Te(f)), oe = Ye(f) ?? 0;
          if (!N && !oe) break;
          const re = a.primitiveName;
          let _e = null;
          N && !f.colorLocked && (_e = this._maybeGetValueOrOverrideExpression(re, "FillColor"));
          let le = null;
          N || f.colorLocked || (le = this._maybeGetValueOrOverrideExpression(re, "StrokeColor"));
          const Se = _e ?? this._getValueOrOverrideExpression(f.type, M, "Color", te), X = le ?? this._getValueOrOverrideExpression(f.type, M, "Color", ie), me = this._maybeGetValueOrOverrideExpression(re, "StrokeWidth") ?? this._getValueOrOverrideExpression(f.type, M, "Width", oe), Y = W ? { type: "sprite-rasterization-param", resource: { type: "path", path: W, asFill: N }, overrides: [] } : { type: "sprite-rasterization-param", resource: ee, overrides: [] };
          this._cimLayers.push({ type: "marker", spriteRasterizationParam: Y, colorLocked: !!f.colorLocked || !!c, effects: t, scaleSymbolsProportionally: !!e.scaleSymbolsProportionally, alignment: n, anchorPoint: { x: S, y: C }, isAbsoluteAnchorPoint: b, size: h, rotation: 0, offsetX: 0, offsetY: 0, scaleX: 1, transform: { type: "cim-marker-transform-param", params: l }, frameHeight: h, widthRatio: H, rotateClockwise: !1, referenceSize: o, sizeRatio: T, color: Se, outlineColor: X, outlineWidth: me, isOutline: d, markerPlacement: i, animatedSymbolProperties: r });
          break;
        }
        case "CIMPictureMarker":
        case "CIMVectorMarker":
          f.markerPlacement ? this._analyzeMultiLayerGraphicNonSDF(e, t, i, r, a, s, n, o, l, h, !!f.colorLocked || !!c, d) : this._analyzeMarker(f, t, i, s, n, o, !1, l, c, d);
          break;
        default:
          this._analyzeMultiLayerGraphicNonSDF(e, t, i, r, a, s, n, o, l, h, !!f.colorLocked || !!c, d);
      }
      M && s.pop();
    }
  }
  _analyzeTextGraphic(e, t, i, r, a, s, n, o) {
    const l = [];
    he.findApplicableOverrides(i, this._primitiveOverrides, l);
    const h = i.geometry;
    if (!("x" in h) || !("y" in h)) return;
    const c = i.symbol, d = Lt(c), p = Nt(c.fontStyleName), _ = Oi(c.fontFamilyName);
    c.font = { family: _, decoration: d, ...p };
    const m = O(c.height, B.CIMTextSymbol.height), g = O(c.angle), y = O(c.offsetX), f = O(c.offsetY), M = F(ge(c));
    let w = F(Te(c)), x = Ye(c) ?? 0;
    x || (w = F(ge(c.haloSymbol)), x = O(c.haloSize));
    let b = !1;
    if (c.symbol?.symbolLayers) for (const X of c.symbol.symbolLayers)
      F(ge(X)) != null && (b = !!X.colorLocked);
    const T = i.primitiveName;
    let S = null;
    b || (S = this._maybeGetValueOrOverrideExpression(T, "FillColor"));
    const C = this._maybeGetValueOrOverrideExpression(T, "TextSize"), H = this._maybeGetValueOrOverrideExpression(T, "TextAngle"), N = this._maybeGetValueOrOverrideExpression(T, "TextOffsetX"), ee = this._maybeGetValueOrOverrideExpression(T, "TextOffsetY");
    let W = null, te = null, ie = 0;
    if (c.callout && c.callout.type === "CIMBackgroundCallout") {
      const X = c.callout;
      if (X.backgroundSymbol) {
        const me = X.backgroundSymbol.symbolLayers;
        if (me) for (const Y of me) Y.type === "CIMSolidFill" ? W = F(Y.color) : Y.type === "CIMSolidStroke" && (te = F(Y.color), ie = O(Y.width, B.CIMSolidStroke.width));
      }
    }
    const oe = this._getValueOrOverrideExpression(c.type, i.primitiveName, "TextString", i.textString ?? "");
    if (oe == null) return;
    const { fontStyleName: re } = c, _e = _ + (re ? "-" + re.toLowerCase() : "-regular"), le = this._getMaterialOverrides(r, c.type);
    le.push(...this._getPrimitiveMaterialOverrides(i.primitiveName, c.type));
    const Se = { type: "text-rasterization-param", resource: { type: "text", textString: i.textString ?? "", font: c.font, symbol: c, primitiveName: i.primitiveName }, overrides: le };
    this._cimLayers.push({ type: "text", lineWidth: null, textRasterizationParam: Se, colorLocked: !!o || !!b, effects: e, alignment: a, anchorPoint: { x: 0, y: 0 }, isAbsoluteAnchorPoint: !1, fontName: _e, decoration: d, weight: p.weight, style: p.style, size: C ?? m, angle: H ?? g, offsetX: N ?? y, offsetY: ee ?? f, transform: { type: "cim-marker-transform-param", params: n }, horizontalAlignment: Ut(c.horizontalAlignment), verticalAlignment: Vt(c.verticalAlignment), text: oe, color: S ?? this._getValueOrOverrideExpression(c.type, i.primitiveName, "Color", M), outlineColor: w, outlineSize: x, backgroundColor: W, borderLineColor: te, borderLineWidth: ie, referenceSize: s, sizeRatio: 1, markerPlacement: t });
  }
  _analyzeMultiLayerGraphicNonSDF(e, t, i, r, a, s, n, o, l, h, c, d) {
    const p = this._buildSimpleMarker(e, a), _ = e.primitiveName, m = this._analyzeMaterialOverrides(_, ["Rotation", "OffsetX", "OffsetY"]), g = this._normalizePrimitiveOverrideProps(m), [y, f, M] = ae.getTextureAnchor(p, this._resourceManager), w = this._getMaterialOverrides(s, e.type);
    w.push(...g);
    const x = { type: "sprite-rasterization-param", resource: { ...p, avoidSDFRasterization: !0 }, overrides: w };
    this._cimLayers.push({ type: "marker", spriteRasterizationParam: x, colorLocked: c, effects: t, scaleSymbolsProportionally: !!e.scaleSymbolsProportionally, alignment: n, anchorPoint: { x: y, y: f }, isAbsoluteAnchorPoint: !1, size: h, rotation: 0, offsetX: 0, offsetY: 0, transform: { type: "cim-marker-transform-param", params: l }, color: [255, 255, 255, 1], outlineColor: [0, 0, 0, 0], outlineWidth: 0, scaleX: 1, frameHeight: h, widthRatio: 1, rotateClockwise: !!e.rotateClockwise, referenceSize: o, sizeRatio: M / Q(e.size), isOutline: d, markerPlacement: i, animatedSymbolProperties: r });
  }
  _createMarkerPlacementOverrideExpression(e) {
    if (!e) return null;
    const t = [];
    return he.findApplicableOverrides(e, this._primitiveOverrides, t), { type: "cim-marker-placement-info", placement: e, overrides: _t(t) };
  }
  _createAnimatedSymbolPropertiesOverrideExpression(e) {
    if (!e) return null;
    const t = [];
    return he.findApplicableOverrides(e, this._primitiveOverrides, t), { type: "cim-animation-info", animation: e, overrides: _t(t) };
  }
  _buildSimpleMarker(e, t) {
    return { type: e.type, enable: !0, name: e.name, colorLocked: e.colorLocked, primitiveName: e.primitiveName, anchorPoint: e.anchorPoint, anchorPointUnits: e.anchorPointUnits, offsetX: 0, offsetY: 0, rotateClockwise: e.rotateClockwise, rotation: 0, size: e.size, billboardMode3D: e.billboardMode3D, depth3D: e.depth3D, frame: e.frame, markerGraphics: [t], scaleSymbolsProportionally: e.scaleSymbolsProportionally, respectFrame: e.respectFrame, clippingPath: e.clippingPath };
  }
  _analyzeCompositeMarkerGraphic(e, t, i, r, a, s, n, o, l, h, c, d) {
    const p = a.geometry, _ = s[0], m = s[1], g = rt(p);
    if (!g) return;
    const y = e.anchorPointUnits !== "Relative", [f, M, w, x] = st(g, e.frame, e.size, e.anchorPoint, y), { path: b } = m, T = m.primitiveName, S = _.primitiveName, C = a.primitiveName;
    let H = null;
    m.colorLocked || c || (H = this._maybeGetValueOrOverrideExpression(C, "FillColor"));
    const N = H ?? this._getValueOrOverrideExpression(m.type, T, "Color", F(m.color));
    let ee = null;
    _.colorLocked || c || (ee = this._maybeGetValueOrOverrideExpression(C, "StrokeColor"));
    const W = ee ?? this._getValueOrOverrideExpression(_.type, S, "Color", F(_.color)), te = this._maybeGetValueOrOverrideExpression(C, "StrokeWidth") ?? this._getValueOrOverrideExpression(_.type, S, "Width", O(_.width, B.CIMSolidStroke.width)), ie = { type: "sprite-rasterization-param", resource: b ? { type: "path", path: b, asFill: !0 } : { type: "sdf", geom: p, asFill: !0 }, overrides: [] };
    this._cimLayers.push({ type: "marker", spriteRasterizationParam: ie, colorLocked: c, effects: t, scaleSymbolsProportionally: !!e.scaleSymbolsProportionally, alignment: n, anchorPoint: { x: M, y: w }, isAbsoluteAnchorPoint: y, size: h, rotation: 0, offsetX: 0, offsetY: 0, scaleX: 1, transform: { type: "cim-marker-transform-param", params: l }, frameHeight: h, widthRatio: x, rotateClockwise: !1, referenceSize: o, sizeRatio: f, color: N, outlineColor: W, outlineWidth: te, isOutline: d, markerPlacement: i, animatedSymbolProperties: r });
  }
  _setPoMap(e, t, i) {
    let r;
    this._poMap[e] ? r = this._poMap[e] : (r = {}, this._poMap[e] = r), r[t] = i;
  }
  _maybeGetValueOrOverrideExpression(e, t, i) {
    return this._getValueOrOverrideExpression("", e, t, i, !1);
  }
  _getValueOrOverrideExpression(e, t, i, r, a = !0) {
    if (a && !Gt(r) && (r = Pe(e, i.toLowerCase())), t == null) return r;
    const s = this._poMap[t];
    if (s == null) return r;
    const n = s[i];
    return typeof n == "string" || typeof n == "number" || Array.isArray(n) ? n : n ? { valueExpressionInfo: n, defaultValue: r } : r;
  }
  _analyzePrimitiveOverrides(e, t, i, r) {
    if (e == null) return !1;
    typeof e == "string" && (e = [e]);
    for (const a of this._primitiveOverrides) if (e.includes(a.primitiveName) && a.valueExpressionInfo) return !0;
    if (t != null) {
      for (const a of t) if (a?.overrides.length > 0) return !0;
    }
    if (i != null) {
      for (const a of i) if (a?.overrides.length > 0) return !0;
    }
    if (r != null) {
      for (const a of r) if (a?.overrides.length > 0) return !0;
    }
    return !1;
  }
  _getMaterialOverrides(e, t) {
    if (!e) return [];
    const i = [];
    for (const r of e) i.push(...this._getPrimitiveMaterialOverrides(r, t));
    return i;
  }
  _getPrimitiveMaterialOverrides(e, t) {
    if (!e) return [];
    const i = this._normalizePrimitiveOverrideProps(this._primitiveOverrides.filter((r) => r.primitiveName === e));
    return i.forEach((r) => r.defaultValue = Pe(t, r.propertyName.toLowerCase())), i;
  }
  _analyzeMaterialOverrides(e, t) {
    return this._primitiveOverrides.filter((i) => i.primitiveName !== e || !t.includes(i.propertyName));
  }
  _normalizePrimitiveOverrideProps(e) {
    return e.map((t) => ({ ...t, propertyName: zt(t.propertyName) }));
  }
}
function ke(u) {
  if (u && u.indexOf("Level_") === 0) {
    const e = parseInt(u.substr(6), 10);
    if (!isNaN(e)) return e;
  }
  return 0;
}
const fr = (u) => u && u.length === 2 && u[0].enable && u[1].enable && u[0].type === "CIMSolidStroke" && u[1].type === "CIMSolidFill" && u[0].path == null && u[1].path == null && !u[0].effects && !u[1].effects;
function gr(u) {
  const e = u.symbolLayers;
  if (!e || e.length !== 2) return !1;
  const t = e.find((r) => r.effects?.find((a) => a.type === "CIMGeometricEffectDashes" && a.dashTemplate != null)), i = e.find((r) => r.effects?.find((a) => a.type === "CIMGeometricEffectAddControlPoints"));
  return !!t || !!i;
}
function _t(u) {
  return Rt(u).map((e) => ({ ...e, propertyName: zt(e.propertyName) }));
}
let yr = class {
  constructor(e) {
    this.events = new Wt(), this._hasMajorPerformanceCaveat = !1, this._lastRenderFrameCounter = 0, this._canvas = document.createElement("canvas"), this._canvas.setAttribute("style", "width: 100%; height:100%; display:block; willChange:transform");
    const t = { failIfMajorPerformanceCaveat: !0, alpha: !0, antialias: !1, depth: !0, stencil: !0 };
    e.appendChild(this._canvas);
    let i = Ke(this._canvas, t);
    i || (i = Ke(this._canvas, { ...t, failIfMajorPerformanceCaveat: !1 }), this._hasMajorPerformanceCaveat = !0), this._gl = i, this._handles = qt([jt(this._canvas, "webglcontextlost", (r) => this.events.emit("webgl-context-lost", r))]);
  }
  destroy() {
    this._canvas.parentNode?.removeChild(this._canvas), this._canvas = null, this._handles.remove(), this._gl = null;
  }
  get gl() {
    return this._gl;
  }
  render(e, t) {
    if (this._hasMajorPerformanceCaveat || U("esri-force-performance-mode")) {
      if (++this._lastRenderFrameCounter >= U("esri-performance-mode-frames-between-render") && (t(), this._lastRenderViewState = e.state.clone(), this._lastRenderFrameCounter = 0), this._lastRenderViewState) {
        const [i, r, a, s, n, o] = this._computeViewTransform(this._lastRenderViewState, e.state);
        this._canvas.style.transform = `matrix(${i}, ${r}, ${a}, ${s}, ${n}, ${o})`;
      }
    } else t();
  }
  resize(e) {
    const t = this._canvas, i = t.style, { state: { size: r }, pixelRatio: a } = e, s = r[0], n = r[1], o = Math.round(s * a), l = Math.round(n * a);
    t.width === o && t.height === l || (t.width = o, t.height = l), i.width = s + "px", i.height = n + "px";
  }
  _computeViewTransform(e, t) {
    const [i, r] = e.center, [a, s] = t.center, [n, o] = e.toScreen([0, 0], a, s), [l, h] = e.toScreen([0, 0], i, r), c = l - n, d = h - o, p = e.scale / t.scale, _ = t.rotation - e.rotation, m = Zt();
    return Xt(m), Yt(m, m, [p, p]), Kt(m, m, Jt(_)), Qt(m, m, [c, d]), m;
  }
};
const vr = { background: { "background.frag": `#ifdef PATTERN
uniform lowp float u_opacity;
uniform lowp sampler2D u_texture;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#else
uniform lowp vec4 u_color;
#endif
void main() {
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = u_opacity * color;
#else
gl_FragColor = u_color;
#endif
}`, "background.vert": `precision mediump float;
attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform mediump float u_coord_range;
uniform mediump float u_depth;
#ifdef PATTERN
uniform mediump mat3 u_pattern_matrix;
varying mediump vec2 v_tileTextureCoord;
uniform mediump vec4 u_tlbr;
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
#endif
void main() {
gl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);
#ifdef PATTERN
v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;
v_tlbr             = u_tlbr / u_mosaicSize.xyxy;
#endif
}` }, circle: { "circle.frag": `precision lowp float;
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
void main()
{
mediump float dist = length(v_offset);
mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);
lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));
gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);
}`, "circle.vert": `precision mediump float;
attribute vec2 a_pos;
#pragma header
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_circleTranslation;
uniform mediump float u_depth;
uniform mediump float u_antialiasingWidth;
void main()
{
#pragma main
v_color = color * opacity;
v_stroke_color = stroke_color * stroke_opacity;
v_stroke_width = stroke_width;
v_radius = radius;
v_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));
mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);
v_offset = offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}` }, fill: { "fill.frag": `precision lowp float;
#ifdef PATTERN
uniform lowp sampler2D u_texture;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
varying lowp vec4 v_color;
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = v_color[3] * color;
#else
gl_FragColor = v_color;
#endif
}`, "fill.vert": `precision mediump float;
attribute vec2 a_pos;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_fillTranslation;
#ifdef PATTERN
#include <util/util.glsl>
uniform mediump vec2 u_mosaicSize;
uniform mediump float u_patternFactor;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
varying lowp vec4 v_color;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef PATTERN
float patternWidth = nextPOT(tlbr.z - tlbr.x);
float patternHeight = nextPOT(tlbr.w - tlbr.y);
float scaleX = 1.0 / (patternWidth * u_patternFactor);
float scaleY = 1.0 / (patternHeight * u_patternFactor);
mat3 patterMat = mat3(scaleX, 0.0,    0.0,
0.0,    -scaleY, 0.0,
0.0,    0.0,    1.0);
v_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;
v_tlbr             = tlbr / u_mosaicSize.xyxy;
#endif
vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}` }, icon: { "icon.frag": `precision mediump float;
uniform lowp sampler2D u_texture;
#ifdef SDF
uniform lowp vec4 u_color;
uniform lowp vec4 u_outlineColor;
#endif
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
varying lowp vec4 v_color;
#ifdef SDF
varying mediump flaot v_halo_width;
#endif
#include <util/encoding.glsl>
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef SDF
lowp vec4 fillPixelColor = v_color;
float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;
const float softEdgeRatio = 0.248062016;
float size = max(v_size.x, v_size.y);
float dist = d * softEdgeRatio * size;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
if (v_halo_width > 0.25) {
lowp vec4 outlinePixelColor = u_outlineColor;
const float outlineLimitRatio = (16.0 / 86.0);
float clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));
outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);
gl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);
}
else {
gl_FragColor = v_opacity * fillPixelColor;
}
#else
lowp vec4 texColor = texture2D(u_texture, v_tex);
gl_FragColor = v_opacity * texColor;
#endif
}`, "icon.vert": `attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
#ifdef SDF
varying mediump float v_halo_width;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_iconTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
const float C_OFFSET_PRECISION = 1.0 / 8.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float tileCoordRatio = 1.0 / 8.0;
uniform highp float u_time;
void main()
{
#pragma main
v_color = color;
v_opacity = opacity;
#ifdef SDF
v_halo_width = halo_width;
#endif
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_opacity *= interpolatedOpacity;
mediump float a_angle         = a_levelInfo[1];
mediump float a_minLevel      = a_levelInfo[2];
mediump float a_maxLevel      = a_levelInfo[3];
mediump vec2 a_tex            = a_texAngleRange.xy;
mediump float delta_z = 0.0;
mediump float rotated = mod(a_angle + u_mapRotation, 256.0);
delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_opacity, 0.0);
vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;
v_size = abs(offset);
#ifdef SDF
offset = (120.0 / 86.0) * offset;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
v_tex = a_tex.xy / u_mosaicSize;
}` }, line: { "line.frag": `precision lowp float;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
varying mediump float v_lineHalfWidth;
varying lowp vec4 v_color;
varying mediump float v_blur;
#if defined (PATTERN) || defined(SDF)
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
uniform sampler2D u_texture;
uniform mediump float u_antialiasing;
#endif
#ifdef SDF
#include <util/encoding.glsl>
#endif
void main()
{
mediump float fragDist = length(v_normal) * v_lineHalfWidth;
lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);
#ifdef PATTERN
mediump float relativeTexX = fract(v_accumulatedDistance / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
gl_FragColor = alpha * v_color[3] * color;
#elif defined(SDF)
mediump float relativeTexX = fract((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY =  0.5 + 0.25 * v_normal.y;
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * (v_lineHalfWidth + u_antialiasing / 2.0);
gl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;
#else
gl_FragColor = alpha * v_color;
#endif
}`, "line.vert": `precision mediump float;
attribute vec2 a_pos;
attribute vec4 a_extrude_offset;
attribute vec4 a_dir_normal;
attribute vec2 a_accumulatedDistance;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump float u_zoomFactor;
uniform mediump vec2 u_lineTranslation;
uniform mediump float u_antialiasing;
uniform mediump float u_depth;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
const float scale = 1.0 / 31.0;
const mediump float tileCoordRatio = 8.0;
#if defined (SDF)
const mediump float sdfPatternHalfWidth = 15.5;
#endif
#if defined (PATTERN) || defined(SDF)
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
#endif
varying lowp vec4 v_color;
varying mediump float v_lineHalfWidth;
varying mediump float v_blur;
void main()
{
#pragma main
v_color = color * opacity;
v_blur = blur + u_antialiasing;
v_normal = a_dir_normal.zw * scale;
#if defined (PATTERN) || defined(SDF)
v_tlbr          = tlbr / u_mosaicSize.xyxy;
v_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);
#if defined (PATTERN)
v_widthRatio = width / v_patternSize.y;
#else
v_widthRatio = width / sdfPatternHalfWidth / 2.0;
#endif
#endif
v_lineHalfWidth = (width + u_antialiasing) * 0.5;
mediump vec2 dir = a_dir_normal.xy * scale;
mediump vec2 offset_ = a_extrude_offset.zw * scale * offset;
mediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
#if defined (PATTERN) || defined(SDF)
v_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);
#endif
}` }, outline: { "outline.frag": `varying lowp vec4 v_color;
varying mediump vec2 v_normal;
void main()
{
lowp float dist = abs(v_normal.y);
lowp float alpha = smoothstep(1.0, 0.0, dist);
gl_FragColor = alpha * v_color;
}`, "outline.vert": `attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_xnormal;
#pragma header
varying lowp vec4 v_color;
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_fillTranslation;
uniform mediump float u_depth;
uniform mediump float u_outline_width;
varying lowp vec2 v_normal;
const float scale = 1.0 / 15.0;
void main()
{
#pragma main
v_color = color * opacity;
v_normal = a_xnormal;
mediump vec2 dist = u_outline_width * scale * a_offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}` }, text: { "text.frag": `uniform lowp sampler2D u_texture;
varying lowp vec2 v_tex;
varying lowp vec4 v_color;
varying mediump float v_edgeWidth;
varying mediump float v_edgeDistance;
void main()
{
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);
gl_FragColor = alpha * v_color;
}`, "text.vert": `attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_textTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying lowp vec2 v_tex;
const float offsetPrecision = 1.0 / 8.0;
const mediump float edgePos = 0.75;
uniform mediump float u_antialiasingWidth;
varying mediump float v_edgeDistance;
varying mediump float v_edgeWidth;
uniform lowp float u_halo;
const float sdfFontScale = 1.0 / 24.0;
const float sdfPixel = 3.0;
uniform highp float u_time;
void main()
{
#pragma main
if (u_halo > 0.5)
{
v_color = halo_color * opacity;
halo_width *= sdfPixel;
halo_blur *= sdfPixel;
}
else
{
v_color = color * opacity;
halo_width = 0.0;
halo_blur = 0.0;
}
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_color *= interpolatedOpacity;
mediump float a_angle       = a_levelInfo[1];
mediump float a_minLevel    = a_levelInfo[2];
mediump float a_maxLevel    = a_levelInfo[3];
mediump vec2 a_tex          = a_texAngleRange.xy;
mediump float a_visMinAngle    = a_texAngleRange.z;
mediump float a_visMaxAngle    = a_texAngleRange.w;
mediump float delta_z = 0.0;
mediump float angle = mod(a_angle + u_mapRotation, 256.0);
if (a_visMinAngle < a_visMaxAngle)
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));
}
else
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));
}
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_color[3], 0.0);
v_tex = a_tex.xy / u_mosaicSize;
v_edgeDistance = edgePos - halo_width / size;
v_edgeWidth = (u_antialiasingWidth + halo_blur) / size;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
}` }, util: { "encoding.glsl": `const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`, "util.glsl": `float nextPOT(in float x) {
return pow(2.0, ceil(log2(abs(x))));
}` } };
function br(u) {
  let e = vr;
  return u.split("/").forEach((t) => {
    e && (e = e[t]);
  }), e;
}
const wr = new Wi(br);
function A(u) {
  return wr.resolveIncludes(u);
}
const mt = (u) => Oe({ PATTERN: u.pattern }), xr = { shaders: (u) => ({ vertexShader: mt(u) + A("background/background.vert"), fragmentShader: mt(u) + A("background/background.frag") }) }, Mr = { shaders: (u) => ({ vertexShader: A("circle/circle.vert"), fragmentShader: A("circle/circle.frag") }) }, ft = (u) => Oe({ PATTERN: u.pattern }), Or = { shaders: (u) => ({ vertexShader: ft(u) + A("fill/fill.vert"), fragmentShader: ft(u) + A("fill/fill.frag") }) }, Sr = { shaders: (u) => ({ vertexShader: A("outline/outline.vert"), fragmentShader: A("outline/outline.frag") }) }, gt = (u) => Oe({ SDF: u.sdf }), Pr = { shaders: (u) => ({ vertexShader: gt(u) + A("icon/icon.vert"), fragmentShader: gt(u) + A("icon/icon.frag") }) }, yt = (u) => Oe({ PATTERN: u.pattern, SDF: u.sdf }), Tr = { shaders: (u) => ({ vertexShader: yt(u) + A("line/line.vert"), fragmentShader: yt(u) + A("line/line.frag") }) }, Cr = { shaders: (u) => ({ vertexShader: A("text/text.vert"), fragmentShader: A("text/text.frag") }) };
let Er = class {
  constructor() {
    this._programByKey = /* @__PURE__ */ new Map();
  }
  dispose() {
    this._programByKey.forEach((e) => e.dispose()), this._programByKey.clear();
  }
  getMaterialProgram(e, t, i) {
    const r = t.key << 3 | this._getMaterialOptionsValue(t.type, i);
    if (this._programByKey.has(r)) return this._programByKey.get(r);
    const a = this._getProgramTemplate(t.type), { shaders: s } = a, { vertexShader: n, fragmentShader: o } = s(i), l = t.getShaderHeader(), h = t.getShaderMain(), c = n.replace("#pragma header", l).replace("#pragma main", h), d = e.programCache.acquire(c, o, t.getAttributeLocations());
    return this._programByKey.set(r, d), d;
  }
  _getMaterialOptionsValue(e, t) {
    switch (e) {
      case k.BACKGROUND:
        return (t.pattern ? 1 : 0) << 1;
      case k.FILL:
        return (t.pattern ? 1 : 0) << 1;
      case k.OUTLINE:
        return 0;
      case k.LINE: {
        const i = t;
        return (i.sdf ? 1 : 0) << 2 | (i.pattern ? 1 : 0) << 1;
      }
      case k.ICON:
        return (t.sdf ? 1 : 0) << 1;
      case k.CIRCLE:
      case k.TEXT:
      default:
        return 0;
    }
  }
  _getProgramTemplate(e) {
    switch (e) {
      case k.BACKGROUND:
        return xr;
      case k.CIRCLE:
        return Mr;
      case k.FILL:
        return Or;
      case k.ICON:
        return Pr;
      case k.LINE:
        return Tr;
      case k.OUTLINE:
        return Sr;
      case k.TEXT:
        return Cr;
      default:
        return null;
    }
  }
}, Bt = class {
  constructor() {
    this._initialized = !1;
  }
  dispose() {
    this._program = P(this._program), this._vertexArrayObject = P(this._vertexArrayObject);
  }
  render(e, t, i, r) {
    e && (this._initialized || this._initialize(e), e.setBlendFunctionSeparate(v.ONE, v.ONE_MINUS_SRC_ALPHA, v.ONE, v.ONE_MINUS_SRC_ALPHA), e.bindVAO(this._vertexArrayObject), e.useProgram(this._program), t.setSamplingMode(i), e.bindTexture(t, 0), this._program.setUniform1i("u_tex", 0), this._program.setUniform1f("u_opacity", r), e.drawArrays(ne.TRIANGLE_STRIP, 0, 4), e.bindTexture(null, 0), e.bindVAO());
  }
  _initialize(e) {
    if (this._initialized) return !0;
    const t = xe(e, ct);
    if (!t) return !1;
    const i = new Int8Array(16);
    i[0] = -1, i[1] = -1, i[2] = 0, i[3] = 0, i[4] = 1, i[5] = -1, i[6] = 1, i[7] = 0, i[8] = -1, i[9] = 1, i[10] = 0, i[11] = 1, i[12] = 1, i[13] = 1, i[14] = 1, i[15] = 1;
    const r = ct.attributes, a = new Ve(e, r, Vi, { geometry: Ge.createVertex(e, We.STATIC_DRAW, i) });
    return this._program = t, this._vertexArrayObject = a, this._initialized = !0, !0;
  }
};
class Rr {
  constructor(e) {
    this._rctx = e, this._programByKey = /* @__PURE__ */ new Map();
  }
  dispose() {
    this._programByKey.forEach((e) => e.dispose()), this._programByKey.clear();
  }
  getProgram(e, t = []) {
    const i = e.vsPath + "." + e.fsPath + JSON.stringify(t);
    if (this._programByKey.has(i)) return this._programByKey.get(i);
    const r = { ...t.map((h) => typeof h == "string" ? { name: h, value: !0 } : h).reduce((h, c) => ({ ...h, [c.name]: c.value }), {}) }, { vsPath: a, fsPath: s, attributes: n } = e, o = er(a, s, n, r), l = this._rctx.programCache.acquire(o.shaders.vertexShader, o.shaders.fragmentShader, o.attributes);
    if (!l) throw new Error("Unable to get program for key: ${key}");
    return this._programByKey.set(i, l), l;
  }
}
let zr = class {
  constructor() {
    this._resourceMap = /* @__PURE__ */ new Map(), this._inFlightResourceMap = /* @__PURE__ */ new Map(), this.geometryEngine = null, this.geometryEnginePromise = null;
  }
  destroy() {
    this._inFlightResourceMap.clear(), this._resourceMap.clear();
  }
  getResource(e) {
    return this._resourceMap.get(e) ?? null;
  }
  async fetchResource(e, t) {
    const i = this._resourceMap.get(e);
    if (i) return { width: i.width, height: i.height };
    let r = this._inFlightResourceMap.get(e);
    return r ? r.then((a) => ({ width: a.width, height: a.height })) : (r = ir(e, t), this._inFlightResourceMap.set(e, r), r.then((a) => (this._inFlightResourceMap.delete(e), this._resourceMap.set(e, a), { width: a.width, height: a.height }), () => ({ width: 0, height: 0 })));
  }
  deleteResource(e) {
    this._inFlightResourceMap.delete(e), this._resourceMap.delete(e);
  }
  loadFont(e) {
    return Si(e);
  }
};
const Fr = 512;
let Br = class {
  constructor(e) {
    this._resourceManager = e, this._cachedRasterizationCanvas = null;
  }
  dispose() {
    this._cachedRasterizationCanvas = null;
  }
  get _canvas() {
    return this._cachedRasterizationCanvas || (this._cachedRasterizationCanvas = document.createElement("canvas")), this._cachedRasterizationCanvas;
  }
  rasterizeJSONResource(e, t) {
    switch (e.type) {
      case "dash": {
        const i = e.dashTemplate, r = e.capStyle, [a, s, n] = ar(i, r);
        return { size: [s, n], image: new Uint32Array(a.buffer), sdf: !0, simplePattern: !0, anchorX: 0, anchorY: 0 };
      }
      case "fill-style": {
        const [i, r, a, s] = sr(this._canvas, e, t);
        return { size: [r, a], image: new Uint32Array(i.buffer), sdf: !1, simplePattern: !0, anchorX: 0, anchorY: 0, rasterizationScale: s };
      }
      case "sdf":
        return this._rasterizeSDFInfo(e);
      case "CIMHatchFill":
      case "CIMVectorMarker":
      case "CIMPictureMarker":
        return this._rasterizeCIMJSONResource(e, t);
    }
  }
  _rasterizeCIMJSONResource(e, t) {
    switch (e.type) {
      case "CIMHatchFill": {
        const i = ae.fromCIMHatchFill(e, t);
        return this._rasterizeCIMVectorMarker(i);
      }
      case "CIMPictureMarker": {
        const i = ae.fromCIMInsidePolygon(e);
        return this._rasterizeCIMVectorMarker(i);
      }
      case "CIMVectorMarker": {
        if (e.markerPlacement?.type === "CIMMarkerPlacementInsidePolygon") {
          const r = ae.fromCIMInsidePolygon(e);
          return this._rasterizeCIMVectorMarker(r);
        }
        const i = Ei(e);
        return i && !e.avoidSDFRasterization ? this._rasterizeSDFInfo(i) : this._rasterizeCIMVectorMarker(e, !1);
      }
    }
  }
  _rasterizeSDFInfo(e) {
    if (!e) return null;
    const [t, i, r] = Ri(e);
    return t ? { size: [i, r], image: new Uint32Array(t.buffer), sdf: !0, simplePattern: !0, anchorX: 0, anchorY: 0 } : null;
  }
  _rasterizeCIMVectorMarker(e, t = !0) {
    const i = t ? Pi.fromExtent(e.frame) : null, [r, a, s, n, o] = ae.rasterize(this._canvas, e, i, this._resourceManager);
    return r ? { size: [a, s], image: new Uint32Array(r.buffer), sdf: !1, simplePattern: !1, anchorX: n, anchorY: o } : null;
  }
  rasterizeImageResource(e, t, i, r) {
    this._canvas.width = e, this._canvas.height = t;
    const a = this._canvas.getContext("2d", { willReadFrequently: !0 });
    i instanceof ImageData ? a.putImageData(i, 0, 0) : (i.setAttribute("width", `${e}px`), i.setAttribute("height", `${t}px`), a.drawImage(i, 0, 0, e, t));
    const s = a.getImageData(0, 0, e, t), n = new Uint8Array(s.data);
    if (r) {
      for (const p of r) if (p && p.oldColor && p.oldColor.length === 4 && p.newColor && p.newColor.length === 4) {
        const [_, m, g, y] = p.oldColor, [f, M, w, x] = p.newColor;
        if (_ === f && m === M && g === w && y === x) continue;
        for (let b = 0; b < n.length; b += 4) _ === n[b] && m === n[b + 1] && g === n[b + 2] && y === n[b + 3] && (n[b] = f, n[b + 1] = M, n[b + 2] = w, n[b + 3] = x);
      }
    }
    let o;
    for (let p = 0; p < n.length; p += 4) o = n[p + 3] / 255, n[p] = n[p] * o, n[p + 1] = n[p + 1] * o, n[p + 2] = n[p + 2] * o;
    let l = n, h = e, c = t;
    const d = Fr;
    if (h >= d || c >= d) {
      const p = h / c;
      p > 1 ? (h = d, c = Math.round(d / p)) : (c = d, h = Math.round(d * p)), l = new Uint8Array(4 * h * c);
      const _ = new Uint8ClampedArray(l.buffer);
      ei(n, e, t, _, h, c, !1);
    }
    return { size: [h, c], image: new Uint32Array(l.buffer), sdf: !1, simplePattern: !1, anchorX: 0, anchorY: 0 };
  }
}, Me = class {
  constructor(e, t) {
    this._width = 0, this._height = 0, this._free = [], this._width = e, this._height = t, this._free.push(new I(0, 0, e, t));
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  allocate(e, t) {
    if (e > this._width || t > this._height) return new I();
    let i = null, r = -1;
    for (let a = 0; a < this._free.length; ++a) {
      const s = this._free[a];
      e <= s.width && t <= s.height && (i === null || s.y <= i.y && s.x <= i.x) && (i = s, r = a);
    }
    return i === null ? new I() : (this._free.splice(r, 1), i.width < i.height ? (i.width > e && this._free.push(new I(i.x + e, i.y, i.width - e, t)), i.height > t && this._free.push(new I(i.x, i.y + t, i.width, i.height - t))) : (i.width > e && this._free.push(new I(i.x + e, i.y, i.width - e, i.height)), i.height > t && this._free.push(new I(i.x, i.y + t, e, i.height - t))), new I(i.x, i.y, e, t));
  }
  release(e) {
    for (let t = 0; t < this._free.length; ++t) {
      const i = this._free[t];
      if (i.y === e.y && i.height === e.height && i.x + i.width === e.x) i.width += e.width;
      else if (i.x === e.x && i.width === e.width && i.y + i.height === e.y) i.height += e.height;
      else if (e.y === i.y && e.height === i.height && e.x + e.width === i.x) i.x = e.x, i.width += e.width;
      else {
        if (e.x !== i.x || e.width !== i.width || e.y + e.height !== i.y) continue;
        i.y = e.y, i.height += e.height;
      }
      this._free.splice(t, 1), this.release(e);
    }
    this._free.push(e);
  }
};
const kr = 256, Ar = (u) => Math.floor(u / 256);
function Ir(u) {
  const e = /* @__PURE__ */ new Set();
  for (const t of u) e.add(Ar(t));
  return e;
}
function $r(u, e, t) {
  return u.has(e) || u.set(e, t().then(() => {
    u.delete(e);
  }).catch((i) => {
    u.delete(e), ti(i);
  })), u.get(e);
}
const Dr = (u) => ({ rect: new I(0, 0, 0, 0), page: 0, metrics: { left: 0, width: 0, height: 0, advance: 0, top: 0 }, code: u, sdf: !0 });
let Lr = class {
  constructor(e, t, i) {
    this.width = 0, this.height = 0, this._dirties = [], this._glyphData = [], this._currentPage = 0, this._glyphCache = {}, this._textures = [], this._rangePromises = /* @__PURE__ */ new Map(), this._preloadCache = {}, this.width = e, this.height = t, this._glyphSource = i, this._binPack = new Me(e - 4, t - 4), this._glyphData.push(new Uint8Array(e * t)), this._dirties.push(!0), this._textures.push(null), this._initDecorationGlyphs();
  }
  dispose() {
    this._binPack = null;
    for (const e of this._textures) e && e.dispose();
    this._textures.length = 0, this._glyphData.length = 0;
  }
  _initDecorationGlyphs() {
    const e = [117, 149, 181, 207, 207, 181, 149, 117], t = [], i = [];
    for (let s = 0; s < e.length; s++) {
      const n = e[s];
      for (let o = 0; o < 11; o++) {
        const l = s >= 3 && s < 5 && o >= 3 && o < 8 ? 255 : 0;
        t.push(n), i.push(l);
      }
    }
    const r = { metrics: { width: 5, height: 2, left: 0, top: 0, advance: 0 }, bitmap: new Uint8Array(t) }, a = { metrics: { width: 5, height: 2, left: 0, top: 0, advance: 0 }, bitmap: new Uint8Array(i) };
    this._recordGlyph(r), this._recordGlyph(a);
  }
  getTexture(e, t) {
    if (!this._textures[t]) {
      const i = new z();
      i.pixelFormat = E.ALPHA, i.wrapMode = R.CLAMP_TO_EDGE, i.width = this.width, i.height = this.height, this._textures[t] = new G(e, i, new Uint8Array(this.width * this.height));
    }
    return this._dirties[t] && (this._textures[t].setData(this._glyphData[t]), this._dirties[t] = !1), this._textures[t];
  }
  async getGlyphItems(e, t, i) {
    const r = this._getGlyphCache(e);
    return await this._fetchRanges(e, t, i), t.map((a) => this._getMosaicItem(r, e, a));
  }
  bind(e, t, i, r) {
    const a = this.getTexture(e, i);
    a.setSamplingMode(t), e.bindTexture(a, r);
  }
  preloadASCIIGlyphCache(e) {
    const t = this._preloadCache[e];
    if (t != null) return t;
    const i = this._glyphSource.preloadASCIIRange(e).then(() => {
      const r = this._getGlyphCache(e);
      for (let a = 0; a < 256; a++) this._getMosaicItem(r, e, a);
    });
    return this._preloadCache[e] = i, i;
  }
  _getGlyphCache(e) {
    return this._glyphCache[e] || (this._glyphCache[e] = {}), this._glyphCache[e];
  }
  _invalidate() {
    this._dirties[this._currentPage] = !0;
  }
  async _fetchRanges(e, t, i) {
    const r = Ir(t), a = [];
    r.forEach((s) => {
      a.push(this._fetchRange(e, s, i));
    }), await Promise.all(a);
  }
  async _fetchRange(e, t, i) {
    if (t > kr) return;
    const r = e + t;
    return $r(this._rangePromises, r, () => this._glyphSource.getRange(e, t, i));
  }
  _getMosaicItem(e, t, i) {
    if (!e[i]) {
      const r = this._glyphSource.getGlyph(t, i);
      if (!r?.metrics) return Dr(i);
      const a = this._recordGlyph(r), s = this._currentPage, n = r.metrics;
      e[i] = { rect: a, page: s, metrics: n, code: i, sdf: !0 }, this._invalidate();
    }
    return e[i];
  }
  _recordGlyph(e) {
    const t = e.metrics;
    let i;
    if (t.width === 0) i = new I(0, 0, 0, 0);
    else {
      const a = t.width + 6, s = t.height + 2 * 3;
      i = this._binPack.allocate(a, s), i.isEmpty && (this._dirties[this._currentPage] || (this._glyphData[this._currentPage] = null), this._currentPage = this._glyphData.length, this._glyphData.push(new Uint8Array(this.width * this.height)), this._dirties.push(!0), this._textures.push(null), this._initDecorationGlyphs(), this._binPack = new Me(this.width - 4, this.height - 4), i = this._binPack.allocate(a, s));
      const n = this._glyphData[this._currentPage], o = e.bitmap;
      let l, h;
      if (o) for (let c = 0; c < s; c++) {
        l = a * c, h = this.width * (i.y + c) + i.x;
        for (let d = 0; d < a; d++) n[h + d] = o[l + d];
      }
      U("esri-glyph-debug") && this._showDebugPage(n);
    }
    return i;
  }
  _showDebugPage(e) {
    const t = document.createElement("canvas"), i = t.getContext("2d"), r = new ImageData(this.width, this.height), a = r.data;
    t.width = this.width, t.height = this.height, t.style.border = "1px solid black";
    for (let s = 0; s < e.length; ++s) a[4 * s] = e[s], a[4 * s + 1] = 0, a[4 * s + 2] = 0, a[4 * s + 3] = 255;
    i.putImageData(r, 0, 0), document.body.appendChild(t);
  }
}, vt = class {
  constructor(e) {
    for (this._metrics = [], this._bitmaps = []; e.next(); ) switch (e.tag()) {
      case 1: {
        const t = e.getMessage();
        for (; t.next(); ) switch (t.tag()) {
          case 3: {
            const i = t.getMessage();
            let r, a, s, n, o, l, h;
            for (; i.next(); ) switch (i.tag()) {
              case 1:
                r = i.getUInt32();
                break;
              case 2:
                a = i.getBytes();
                break;
              case 3:
                s = i.getUInt32();
                break;
              case 4:
                n = i.getUInt32();
                break;
              case 5:
                o = i.getSInt32();
                break;
              case 6:
                l = i.getSInt32();
                break;
              case 7:
                h = i.getUInt32();
                break;
              default:
                i.skip();
            }
            i.release(), r && (this._metrics[r] = { width: s, height: n, left: o, top: l, advance: h }, this._bitmaps[r] = a);
            break;
          }
          default:
            t.skip();
        }
        t.release();
        break;
      }
      default:
        e.skip();
    }
  }
  getMetrics(e) {
    return this._metrics[e];
  }
  getBitmap(e) {
    return this._bitmaps[e];
  }
}, Nr = class {
  constructor() {
    this._ranges = [];
  }
  getRange(e) {
    return this._ranges[e];
  }
  addRange(e, t) {
    this._ranges[e] = t;
  }
}, Ur = class {
  constructor(e) {
    this._glyphInfo = {}, this._baseURL = e;
  }
  getRange(e, t, i) {
    const r = this._getFontStack(e);
    if (r.getRange(t)) return Promise.resolve();
    const a = 256 * t, s = a + 255, n = this._baseURL.replace("{fontstack}", e).replace("{range}", a + "-" + s);
    return de(n, { responseType: "array-buffer", ...i }).then((o) => {
      r.addRange(t, new vt(new Je(new Uint8Array(o.data), new DataView(o.data))));
    });
  }
  async preloadASCIIRange(e) {
    const t = this._getFontStack(e), i = 0, r = 255, a = this._baseURL.replace("{fontstack}", e).replace("{range}", i + "-" + r), s = await de(a, { responseType: "array-buffer" }), n = new vt(new Je(new Uint8Array(s.data), new DataView(s.data)));
    for (let o = i; o <= r; o++) t.getRange(o) || t.addRange(o, n);
  }
  getGlyph(e, t) {
    const i = this._getFontStack(e);
    if (!i) return;
    const r = Math.floor(t / 256), a = i.getRange(r);
    return a ? { metrics: a.getMetrics(t), bitmap: a.getBitmap(t) } : void 0;
  }
  _getFontStack(e) {
    let t = this._glyphInfo[e];
    return t || (t = this._glyphInfo[e] = new Nr()), t;
  }
};
const ue = 1e20;
let Vr = class {
  constructor(e) {
    this._svg = null, this.size = e;
    const t = document.createElement("canvas");
    t.width = t.height = e, this._context = t.getContext("2d", { willReadFrequently: !1 }), this._gridOuter = new Float64Array(e * e), this._gridInner = new Float64Array(e * e), this._f = new Float64Array(e), this._d = new Float64Array(e), this._z = new Float64Array(e + 1), this._v = new Int16Array(e);
  }
  dispose() {
    this._context = this._gridOuter = this._gridInner = this._f = this._d = this._z = this._v = null, this._svg && (document.body.removeChild(this._svg), this._svg = null);
  }
  draw(e, t, i, r = 31) {
    this._initSVG();
    const a = this.createSVGString(e, t);
    return new Promise((s, n) => {
      const o = new Image();
      o.src = "data:image/svg+xml; charset=utf8, " + encodeURIComponent(a), o.onload = () => {
        o.onload = null, this._context.clearRect(0, 0, this.size, this.size), this._context.drawImage(o, 0, 0, this.size, this.size);
        const h = this._context.getImageData(0, 0, this.size, this.size), c = new Uint8Array(this.size * this.size * 4);
        for (let d = 0; d < this.size * this.size; d++) {
          const p = h.data[4 * d + 3] / 255;
          this._gridOuter[d] = p === 1 ? 0 : p === 0 ? ue : Math.max(0, 0.5 - p) ** 2, this._gridInner[d] = p === 1 ? ue : p === 0 ? 0 : Math.max(0, p - 0.5) ** 2;
        }
        this._edt(this._gridOuter, this.size, this.size), this._edt(this._gridInner, this.size, this.size);
        for (let d = 0; d < this.size * this.size; d++) {
          const p = this._gridOuter[d] - this._gridInner[d];
          nr(0.5 - p / (2 * r), c, 4 * d);
        }
        s(c);
      };
      const l = i?.signal;
      l && ii(l, () => n(ri()));
    });
  }
  _initSVG() {
    if (!this._svg) {
      const e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      e.setAttribute("style", "position: absolute;"), e.setAttribute("width", "0"), e.setAttribute("height", "0"), e.setAttribute("aria-hidden", "true"), e.setAttribute("role", "presentation"), document.body.appendChild(e), this._svg = e;
    }
    return this._svg;
  }
  createSVGString(e, t) {
    const i = this._initSVG(), r = document.createElementNS("http://www.w3.org/2000/svg", "path");
    r.setAttribute("d", e), i.appendChild(r);
    const a = r.getBBox(), s = a.width / a.height, n = this.size / 2;
    let o, l, h;
    if (s > 1) {
      o = n / a.width;
      const _ = n * (1 / s);
      l = this.size / 4, h = n - _ / 2;
    } else
      o = n / a.height, l = n - n * s / 2, h = this.size / 4;
    const c = -a.x * o + l, d = -a.y * o + h;
    r.setAttribute("style", `transform: matrix(${o}, 0, 0, ${o}, ${c}, ${d})`), r.setAttribute("stroke-width", "" + 0.5 / o);
    const p = `<svg style="fill:${t ? "red" : "none"}; stroke:${t ? "none" : "red"}" height="${this.size}" width="${this.size}" xmlns="http://www.w3.org/2000/svg">${i.innerHTML}</svg>`;
    return i.removeChild(r), p;
  }
  _edt(e, t, i) {
    const r = this._f, a = this._d, s = this._v, n = this._z;
    for (let o = 0; o < t; o++) {
      for (let l = 0; l < i; l++) r[l] = e[l * t + o];
      this._edt1d(r, a, s, n, i);
      for (let l = 0; l < i; l++) e[l * t + o] = a[l];
    }
    for (let o = 0; o < i; o++) {
      for (let l = 0; l < t; l++) r[l] = e[o * t + l];
      this._edt1d(r, a, s, n, t);
      for (let l = 0; l < t; l++) e[o * t + l] = Math.sqrt(a[l]);
    }
  }
  _edt1d(e, t, i, r, a) {
    i[0] = 0, r[0] = -ue, r[1] = +ue;
    for (let s = 1, n = 0; s < a; s++) {
      let o = (e[s] + s * s - (e[i[n]] + i[n] * i[n])) / (2 * s - 2 * i[n]);
      for (; o <= r[n]; ) n--, o = (e[s] + s * s - (e[i[n]] + i[n] * i[n])) / (2 * s - 2 * i[n]);
      n++, i[n] = s, r[n] = o, r[n + 1] = +ue;
    }
    for (let s = 0, n = 0; s < a; s++) {
      for (; r[n + 1] < s; ) n++;
      t[s] = (s - i[n]) * (s - i[n]) + e[i[n]];
    }
  }
};
function q(u) {
  return u && u.type === "static";
}
let Gr = class kt {
  constructor(e, t, i = 0) {
    this._mosaicPages = [], this._maxItemSize = 0, this._currentPage = 0, this._pageWidth = 0, this._pageHeight = 0, this._mosaicRects = /* @__PURE__ */ new Map(), this._spriteCopyQueue = [], this.pixelRatio = 1, (e <= 0 || t <= 0) && console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"), this._pageWidth = e, this._pageHeight = t, i > 0 && (this._maxItemSize = i), this.pixelRatio = window.devicePixelRatio || 1, this._binPack = new Me(this._pageWidth, this._pageHeight);
    const r = Math.floor(this._pageWidth), a = Math.floor(this._pageHeight);
    this._mosaicPages.push({ mosaicsData: { type: "static", data: new Uint32Array(r * a) }, size: [this._pageWidth, this._pageHeight], dirty: !0, texture: void 0 });
  }
  getWidth(e) {
    return e >= this._mosaicPages.length ? -1 : this._mosaicPages[e].size[0];
  }
  getHeight(e) {
    return e >= this._mosaicPages.length ? -1 : this._mosaicPages[e].size[1];
  }
  getPageTexture(e) {
    return e < this._mosaicPages.length ? this._mosaicPages[e].texture : null;
  }
  has(e) {
    return this._mosaicRects.has(e);
  }
  get itemCount() {
    return this._mosaicRects.size;
  }
  getSpriteItem(e) {
    return this._mosaicRects.get(e);
  }
  addSpriteItem(e, t, i, r, a, s, n = 1) {
    if (this._mosaicRects.has(e)) return this._mosaicRects.get(e);
    let o, l, h;
    if (q(i) ? [o, l, h] = this._allocateImage(t[0], t[1]) : (o = new I(0, 0, t[0], t[1]), l = this._mosaicPages.length, this._mosaicPages.push({ mosaicsData: i, size: [t[0] + 2 * V, t[1] + 2 * V], dirty: !0, texture: void 0 })), o.width <= 0 || o.height <= 0) return null;
    const c = { type: "sprite", rect: o, width: t[0], height: t[1], sdf: a, simplePattern: s, rasterizationScale: n, page: l };
    return this._mosaicRects.set(e, c), q(i) && (U("esri-mosaic-debug") && this._showDebugSprite(t, i.data), this._copy({ rect: o, spriteSize: t, spriteData: i.data, page: l, pageSize: h, repeat: r, sdf: a })), c;
  }
  hasItemsToProcess() {
    return this._spriteCopyQueue.length !== 0;
  }
  processNextItem() {
    const e = this._spriteCopyQueue.pop();
    e && this._copy(e);
  }
  getMosaicItemPosition(e) {
    const t = this.getSpriteItem(e), i = t?.rect;
    if (!i) return null;
    i.width = t.width, i.height = t.height;
    const r = t.width, a = t.height, s = V, n = this._mosaicPages[t.page].size;
    return { size: [t.width, t.height], tl: [(i.x + s) / n[0], (i.y + s) / n[1]], br: [(i.x + s + r) / n[0], (i.y + s + a) / n[1]], page: t.page };
  }
  bind(e, t, i = 0, r = 0) {
    const a = this._mosaicPages[i], s = a.mosaicsData;
    let n = a.texture;
    n || (n = bt(e, a.size), a.texture = n), n.setSamplingMode(t), q(s) ? (e.bindTexture(n, r), a.dirty && (n.setData(new Uint8Array(s.data.buffer)), n.generateMipmap(), U("esri-mosaic-debug") && this._showDebugPage(i))) : (s.data.loadFrame(n), e.bindTexture(n, r), n.generateMipmap()), a.dirty = !1;
  }
  getTexture(e, t = 0) {
    const i = this._mosaicPages[t], r = i.mosaicsData;
    let a = i.texture;
    return a || (a = bt(e, i.size), i.texture = a), q(r) ? i.dirty && (a.setData(new Uint8Array(r.data.buffer)), a.generateMipmap(), U("esri-mosaic-debug") && this._showDebugPage(t)) : (r.data.loadFrame(a), a.generateMipmap()), i.dirty = !1, a;
  }
  dispose() {
    this._binPack = null;
    for (const e of this._mosaicPages) {
      const t = e.texture;
      t && t.dispose();
      const i = e.mosaicsData;
      q(i) || i.data.destroy();
    }
    this._mosaicPages = null, this._mosaicRects.clear();
  }
  static _copyBits(e, t, i, r, a, s, n, o, l, h, c) {
    let d = r * t + i, p = o * s + n;
    if (c) {
      p -= s;
      for (let _ = -1; _ <= h; _++, d = ((_ + h) % h + r) * t + i, p += s) for (let m = -1; m <= l; m++) a[p + m] = e[d + (m + l) % l];
    } else for (let _ = 0; _ < h; _++) {
      for (let m = 0; m < l; m++) a[p + m] = e[d + m];
      d += t, p += s;
    }
  }
  _copy(e) {
    if (e.page >= this._mosaicPages.length) return;
    const t = this._mosaicPages[e.page], i = t.mosaicsData;
    if (!q(t.mosaicsData)) throw new Z("mapview-invalid-resource", "unsuitable data type!");
    const r = e.spriteData, a = i.data;
    a && r || console.error("Source or target images are uninitialized!"), kt._copyBits(r, e.spriteSize[0], 0, 0, a, e.pageSize[0], e.rect.x + V, e.rect.y + V, e.spriteSize[0], e.spriteSize[1], e.repeat), t.dirty = !0;
  }
  _allocateImage(e, t) {
    e += 2 * V, t += 2 * V;
    const i = Math.max(e, t);
    if (this._maxItemSize && this._maxItemSize < i) {
      const a = 2 ** Math.ceil(ot(e)), s = 2 ** Math.ceil(ot(t)), n = new I(0, 0, e, t);
      return this._mosaicPages.push({ mosaicsData: { type: "static", data: new Uint32Array(a * s) }, size: [a, s], dirty: !0, texture: void 0 }), [n, this._mosaicPages.length - 1, [a, s]];
    }
    const r = this._binPack.allocate(e, t);
    if (r.width <= 0) {
      const a = this._mosaicPages[this._currentPage];
      return !a.dirty && q(a.mosaicsData) && (a.mosaicsData.data = null), this._currentPage = this._mosaicPages.length, this._mosaicPages.push({ mosaicsData: { type: "static", data: new Uint32Array(this._pageWidth * this._pageHeight) }, size: [this._pageWidth, this._pageHeight], dirty: !0, texture: void 0 }), this._binPack = new Me(this._pageWidth, this._pageHeight), this._allocateImage(e, t);
    }
    return [r, this._currentPage, [this._pageWidth, this._pageHeight]];
  }
  _showDebugSprite([e, t], i) {
    const r = document.createElement("canvas");
    r.width = e, r.height = t, r.setAttribute("style", `position: absolute; top: ${4 + 204 * Hr++}px; right: 208px; width: 200px; height: 200px; border: 1px solid black;`);
    const a = r.getContext("2d"), s = new ImageData(e, t);
    s.data.set(new Uint8Array(i.buffer)), a.putImageData(s, 0, 0), document.body.appendChild(r);
  }
  _showDebugPage(e) {
    const t = this._mosaicPages[e], { size: [i, r], mosaicsData: a } = t;
    if (!q(a)) return void console.error("Could not show sprite mosaic debug for non-static resource");
    const s = `mosaicDebugPage${e}`, n = document.getElementById(s) ?? document.createElement("canvas");
    n.id = s, n.width = i, n.height = r, n.setAttribute("style", `position: absolute; top: ${4 + 204 * e}px; right: 4px; width: 200px; height: 200px; border: 1px solid black;`);
    const o = n.getContext("2d"), l = new ImageData(i, r);
    l.data.set(new Uint8Array(a.data.buffer)), o.putImageData(l, 0, 0), document.body.appendChild(n);
  }
}, Hr = 0;
function bt(u, e) {
  const t = new z();
  return t.width = e[0], t.height = e[1], t.wrapMode = R.CLAMP_TO_EDGE, new G(u, t, null);
}
let Wr = class {
  constructor(e, t, i, r) {
    this._animation = e, this._frameData = null;
    const a = (s) => {
      this._frameData = s, t.requestRender();
    };
    this.frameCount = this._animation.frameDurations.length, this.width = this._animation.width, this.height = this._animation.height, this._playHandle = cr(this._animation, i, r, a);
  }
  destroy() {
    this._playHandle.remove();
  }
  loadFrame(e) {
    const t = this._frameData;
    if (t == null) return;
    const i = "width" in t ? t.width : t.codedWidth, r = "height" in t ? t.height : t.codedHeight;
    e.updateData(0, V, V, i, r, t), this._frameData = null;
  }
};
const wt = "arial-unicode-ms-regular", qr = () => Le.getLogger("esri.views.2d.engine.webgl.TextureManager"), K = (u, e, t) => qr().error(new Z(u, e, t));
function jr(u) {
  switch (u.type) {
    case "fill-style":
    case "CIMHatchFill":
      return Bi;
  }
  return 1;
}
class Xe {
  static fromMosaic(e, t) {
    return new Xe(e, t.page, t.sdf);
  }
  constructor(e, t, i) {
    this.mosaicType = e, this.page = t, this.sdf = i;
  }
}
class Xr {
  constructor(e) {
    this._requestRender = e, this._resourceManager = new zr(), this._invalidFontsMap = /* @__PURE__ */ new Map(), this._sdfConverter = new Vr(ze), this._bindingInfos = new Array(), this._hashToBindingIndex = /* @__PURE__ */ new Map(), this._ongoingRasterizations = /* @__PURE__ */ new Map(), this._imageRequestQueue = new si({ concurrency: 10, process: async (t, i) => {
      Ne(i);
      try {
        return await de(t, { responseType: "image", signal: i });
      } catch (r) {
        throw Qe(r) ? r : new Z("mapview-invalid-resource", `Could not fetch requested resource at ${t}`, r);
      }
    } }), this._spriteMosaic = new Gr(2048, 2048, 500), this._glyphSource = new Ur(`${ai.fontsUrl}/{fontstack}/{range}.pbf`), this._glyphMosaic = new Lr(1024, 1024, this._glyphSource), this._rasterizer = new Br(this.resourceManager);
  }
  dispose() {
    this._spriteMosaic.dispose(), this._glyphMosaic.dispose(), this._rasterizer.dispose(), this._sdfConverter.dispose(), this._spriteMosaic = null, this._glyphMosaic = null, this._sdfConverter = null, this._hashToBindingIndex.clear(), this._hashToBindingIndex = null, this._bindingInfos = null, this._ongoingRasterizations.clear(), this._ongoingRasterizations = null, this._imageRequestQueue.clear(), this._imageRequestQueue = null, this._resourceManager.destroy();
  }
  get sprites() {
    return this._spriteMosaic;
  }
  get glyphs() {
    return this._glyphMosaic;
  }
  get resourceManager() {
    return this._resourceManager;
  }
  async rasterizeItem(e, t) {
    if (e == null) return K("mapview-null-resource", "Unable to rasterize null resource"), null;
    if (e.type !== "cim-rasterization-info") return K("mapview-unexpected-resource", "Unable to rasterize resource"), null;
    const { resource: i } = e;
    if (i.type === "text") {
      const a = await this._rasterizeText(i, t);
      for (const s of a.glyphs) this._setTextureBinding(ye.GLYPH, s);
      return a;
    }
    const r = await this._rasterizeSprite(i, t);
    return r && this._setTextureBinding(ye.SPRITE, r), r;
  }
  getMosaicInfo(e, t, i = !1) {
    const r = this._getTextureBindingInfo(e, t, i);
    return r ? { size: r.size, texture: { texture: r.texture, unit: r.type === "sprite" ? Fi : at } } : (K("mapview-invalid-resource", `Unable to find resource for ${t}`), { size: [0, 0], texture: { texture: null, unit: 0 } });
  }
  _getTextureBindingInfo(e, t, i) {
    const r = this._bindingInfos[t - 1], a = r.page, s = i ? L.LINEAR_MIPMAP_LINEAR : L.LINEAR;
    switch (r.mosaicType) {
      case ye.SPRITE: {
        const n = [this.sprites.getWidth(a), this.sprites.getHeight(a)], o = this._spriteMosaic.getTexture(e, a);
        return o.setSamplingMode(s), { type: "sprite", texture: o, size: n };
      }
      case ye.GLYPH: {
        const n = [this.glyphs.width, this.glyphs.height], o = this._glyphMosaic.getTexture(e, a);
        return this._glyphMosaic.bind(e, s, a, at), o.setSamplingMode(s), { type: "glyph", texture: o, size: n };
      }
      default:
        return K("mapview-texture-manager", `Cannot handle unknown type ${r.mosaicType}`), null;
    }
  }
  _hashMosaic(e, t) {
    return 1 | e << 1 | (t.sdf ? 1 : 0) << 2 | t.page << 3;
  }
  _setTextureBinding(e, t) {
    const i = this._hashMosaic(e, t);
    if (!this._hashToBindingIndex.has(i)) {
      const r = Xe.fromMosaic(e, t), a = this._bindingInfos.length + 1;
      this._hashToBindingIndex.set(i, a), this._bindingInfos.push(r);
    }
    t.textureBinding = this._hashToBindingIndex.get(i);
  }
  async _rasterizeText(e, t) {
    const { font: i, textString: r } = e, a = Ti(i), s = this._invalidFontsMap.has(a), [n, o] = Ci(r), l = or(n);
    try {
      const h = s ? wt : a;
      return U("esri-2d-stabilize-glyphs") && await this._glyphMosaic.preloadASCIIGlyphCache(h), { type: "glyphs", glyphs: await this._glyphMosaic.getGlyphItems(h, l, t), isRightToLeft: o };
    } catch {
      return K("mapview-invalid-resource", `Couldn't find font ${a}. Falling back to Arial Unicode MS Regular`), this._invalidFontsMap.set(a, !0), { type: "glyphs", glyphs: await this._glyphMosaic.getGlyphItems(wt, l, t), isRightToLeft: o };
    }
  }
  _hashSpriteResource(e) {
    switch (e.type) {
      case "path":
        return `path:${e.path}.${e.asFill ? 1 : 0}`;
      case "CIMPictureMarker":
        return `${e.type}:${e.url}:${e.size}`;
      case "CIMPictureFill":
        return `${e.type}:${e.url}:${e.height}`;
      case "CIMPictureStroke":
        return `${e.type}:${e.url}:${e.width}`;
      case "dash":
        return `dash:${e.capStyle}.${e.dashTemplate.join("")}`;
      case "sdf":
        return `sdf:${JSON.stringify(e.geom)}.${e.asFill ? 1 : 0}`;
      case "fill-style":
        return `fill_style:${e.style}`;
      case "animated":
        return JSON.stringify(lr(e));
      case "CIMHatchFill":
      case "CIMVectorMarker":
        return JSON.stringify(e);
    }
  }
  async _rasterizeSprite(e, t) {
    if (!e) return null;
    const i = Et(this._hashSpriteResource(e));
    if (this._spriteMosaic.has(i)) return this._spriteMosaic.getSpriteItem(i);
    if ("url" in e && e.url || e.type === "CIMPictureFill" || e.type === "CIMPictureStroke" || e.type === "CIMPictureMarker" || e.type === "CIMVectorMarker") {
      const r = [];
      ae.fetchResources({ type: "CIMPointSymbol", symbolLayers: [e] }, this._resourceManager, r), r.length > 0 && await Promise.all(r);
    }
    switch (e.type) {
      case "CIMPictureMarker":
        return e.markerPlacement?.type === "CIMMarkerPlacementInsidePolygon" ? this._rasterizeJSONResource(i, e) : this._handleAsyncResource(i, e, t);
      case "animated":
      case "CIMPictureFill":
      case "CIMPictureStroke":
      case "path":
        return this._handleAsyncResource(i, e, t);
      case "sdf":
      case "dash":
      case "fill-style":
      case "CIMVectorMarker":
      case "CIMHatchFill":
        return this._rasterizeJSONResource(i, e);
    }
  }
  _rasterizeJSONResource(e, t) {
    const i = this._rasterizer.rasterizeJSONResource(t, jr(t));
    if (i) {
      const { size: r, image: a, sdf: s, simplePattern: n, rasterizationScale: o } = i;
      return this._addItemToMosaic(e, r, { type: "static", data: a }, ve(t), s, n, o);
    }
    return null;
  }
  async _handleAsyncResource(e, t, i) {
    if (this._ongoingRasterizations.has(e)) return this._ongoingRasterizations.get(e);
    let r;
    return r = t.type === "path" ? this._handleSVG(t, e, i) : this._handleImage(t, e, i), this._ongoingRasterizations.set(e, r), r.finally(() => this._ongoingRasterizations.delete(e)), r;
  }
  async _handleSVG(e, t, i) {
    const r = [ze, ze], { asFill: a } = e, s = await this._sdfConverter.draw(e.path, a, i);
    return this._addItemToMosaic(t, r, { type: "static", data: new Uint32Array(s.buffer) }, !1, !0, !0);
  }
  async _handleGIFOrPNG(e, t, i) {
    const r = e.url, a = this.resourceManager.getResource(r);
    if (a == null) return null;
    const { width: s, height: n } = a;
    if (a instanceof HTMLImageElement) {
      if (e.type === "animated") return K("mapview-unexpected-resource", "Attempt to configure animations for a non-animated image."), null;
      const d = "colorSubstitutions" in e ? e.colorSubstitutions : void 0, { size: p, sdf: _, image: m } = this._rasterizer.rasterizeImageResource(s, n, a, d);
      return this._addItemToMosaic(t, p, { type: "static", data: m }, ve(e), _, !1);
    }
    let o, l, h;
    e.type === "animated" ? (o = !1, l = { playAnimation: e.playAnimation, reverseAnimation: e.reverseAnimation, randomizeStartTime: e.randomizeStartTime, randomizeStartSeed: e.randomizeStartSeed, startTimeOffset: e.startTimeOffset, duration: e.duration, repeatType: e.repeatType, repeatDelay: e.repeatDelay }, h = e.startGroup || 0) : (o = ve(e), l = {}, h = 0);
    const c = new Wr(a, this._requestRender, l, h);
    return this._addItemToMosaic(t, [c.width, c.height], { type: "animated", data: c }, o, !1, !1);
  }
  async _handleImage(e, t, i) {
    const r = e.url;
    if (Kr(r) || Qr(r)) return this._handleGIFOrPNG(e, t, i);
    if (e.type === "animated") return K("mapview-unexpected-resource", "Attempt to configure animations for a non-animated image."), null;
    try {
      let a;
      const s = this.resourceManager.getResource(r);
      if (s != null && s instanceof HTMLImageElement) a = s;
      else {
        const { data: p } = await this._imageRequestQueue.push(r, { ...i });
        a = p;
      }
      if (hr(r)) {
        if ("width" in e && "height" in e) a.width = Q(e.width), a.height = Q(e.height);
        else if ("cim" in e) {
          const p = e;
          a.width = Q(p.width ?? p.scaleX * p.size), a.height = Q(p.size);
        }
      }
      if (!a.width || !a.height) return null;
      const n = a.width, o = a.height, l = "colorSubstitutions" in e ? e.colorSubstitutions : void 0, { size: h, sdf: c, image: d } = this._rasterizer.rasterizeImageResource(n, o, a, l);
      return this._addItemToMosaic(t, h, { type: "static", data: d }, ve(e), c, !1);
    } catch (a) {
      throw Qe(a) ? a : new Z("mapview-invalid-resource", `Could not fetch requested resource at ${r}. ${a.message}`);
    }
  }
  _addItemToMosaic(e, t, i, r, a, s, n) {
    return this._spriteMosaic.addSpriteItem(e, t, i, r, a, s, n);
  }
}
function ve(u) {
  switch (u.type) {
    case "CIMVectorMarker":
    case "CIMPictureMarker":
      return Zr(u);
    default:
      return !0;
  }
}
const Yr = (u) => u != null && u.startsWith("data:image/gif"), Kr = (u) => u && (u.includes(".gif") || Yr(u)), Jr = (u) => u != null && u.startsWith("data:image/png"), Qr = (u) => u && (u.includes(".png") || Jr(u)), Zr = (u) => u && "markerPlacement" in u && u.markerPlacement && u.markerPlacement.type === "CIMMarkerPlacementInsidePolygon";
let es = class {
  constructor(e) {
    this._queue = [], this._refreshable = e;
  }
  destroy() {
    this._queue = [];
  }
  enqueueTextureUpdate(e, t) {
    const i = ni(), r = e, a = Ai, s = Math.ceil(r.height / a);
    Ne(t);
    for (let n = 0; n < s; n++) {
      const o = n * a, l = n === s - 1, h = l ? r.height - a * n : a;
      this._queue.push({ type: "chunk", request: e, resolver: i, chunk: n, chunkOffset: o, destHeight: h, chunkIsLast: l, options: t });
    }
    return oi(t, (n) => i.reject(n)), i.promise;
  }
  upload() {
    let e = 0;
    for (; this._queue.length; ) {
      const t = performance.now(), i = this._queue.shift();
      if (i) {
        if (i.options.signal != null && i.options.signal.aborted) continue;
        switch (i.type) {
          case "chunk":
            this._uploadChunk(i);
            break;
          case "no-chunk":
            this._uploadNoChunk(i);
        }
        const r = performance.now() - t;
        if (e += r, e + r >= ki) break;
      }
    }
    this._queue.length && this._refreshable.requestRender();
  }
  _uploadChunk(e) {
    const { request: t, resolver: i, chunkOffset: r, chunkIsLast: a, destHeight: s } = e, { data: n, texture: o, width: l } = t;
    n != null && (o.updateData(0, 0, r, l, s, n, r), a && i.resolve());
  }
  _uploadNoChunk(e) {
    const { request: t, resolver: i } = e, { data: r, texture: a } = t;
    a.setData(r), i.resolve();
  }
};
const ts = ui(-0.5, -0.5);
let is = class {
  constructor() {
    this._centerNdc = Ce(), this._pxToNdc = Ce(), this._worldDimensionsPx = Ce(), this._mat3 = Ue(), this._initialized = !1;
  }
  dispose() {
    this._program = P(this._program), this._quad = P(this._quad);
  }
  render(e, t, i) {
    const { context: r } = e, a = this._updateGeometry(e, i);
    if (t != null) {
      const { r: s, g: n, b: o, a: l } = t;
      r.setClearColor(l * s / 255, l * n / 255, l * o / 255, l);
    } else r.setClearColor(0, 0, 0, 0);
    if (r.setStencilFunction($e.ALWAYS, 0, 255), r.setStencilWriteMask(255), !a) return r.setClearStencil(1), void r.clear(r.gl.STENCIL_BUFFER_BIT | r.gl.COLOR_BUFFER_BIT);
    r.setClearStencil(0), r.clear(r.gl.STENCIL_BUFFER_BIT | r.gl.COLOR_BUFFER_BIT), this._initialized || this._initialize(r), r.setDepthWriteEnabled(!1), r.setDepthTestEnabled(!1), r.setColorMask(!1, !1, !1, !1), r.setBlendingEnabled(!1), r.setStencilOp(Fe.KEEP, Fe.KEEP, Fe.REPLACE), r.setStencilFunction($e.ALWAYS, 1, 255), r.setStencilTestEnabled(!0), r.useProgram(this._program), this._program.setUniformMatrix3fv("u_worldExtent", this._mat3), this._quad.draw(), this._quad.unbind();
  }
  _initialize(e) {
    if (this._initialized) return;
    const t = xe(e, qi);
    t && (this._program = t, this._quad = new j(e, [0, 0, 1, 0, 0, 1, 1, 1]), this._initialized = !0);
  }
  _updateGeometry(e, t) {
    const { state: i, pixelRatio: r } = e, { size: a, rotation: s } = i, n = Math.round(a[0] * r), o = Math.round(a[1] * r);
    if (!i.spatialReference.isWrappable) return !1;
    const l = di(s), h = Math.abs(Math.cos(l)), c = Math.abs(Math.sin(l)), d = Math.round(n * h + o * c), p = Math.round(i.worldScreenWidth);
    if (d <= p) return !1;
    const _ = n * c + o * h, m = p * r, g = (t.left - t.right) * r / n, y = (t.bottom - t.top) * r / o;
    Ee(this._worldDimensionsPx, m, _, 1), Ee(this._pxToNdc, 2 / n, -2 / o, 1), Ee(this._centerNdc, g, y, 1);
    const f = this._mat3;
    return li(f, this._centerNdc), Ze(f, f, this._pxToNdc), s !== 0 && hi(f, f, l), Ze(f, f, this._worldDimensionsPx), ci(f, f, ts), !0;
  }
}, pe = class {
  constructor() {
    this.name = this.constructor.name;
  }
  createOptions(e, t) {
    return null;
  }
}, rs = class extends pe {
  constructor() {
    super(...arguments), this.defines = [], this._desc = { vsPath: "fx/integrate", fsPath: "fx/integrate", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) };
  }
  dispose() {
    this._quad && this._quad.dispose();
  }
  bind() {
  }
  unbind() {
  }
  draw(e, t) {
    if (!t?.size) return;
    const { context: i, renderingOptions: r } = e;
    this._quad || (this._quad = new j(i, [0, 0, 1, 0, 0, 1, 1, 1]));
    const a = i.getBoundFramebufferObject(), { x: s, y: n, width: o, height: l } = i.getViewport(), h = t.getBlock(Ie.Animation);
    if (h == null) return;
    const c = t.getUniforms(i);
    i.setViewport(0, 0, t.size, t.size);
    const d = c.filterFlags, p = c.animation, _ = U("featurelayer-animation-enabled") ? r.labelsAnimationTime : 1, m = h.getFBO(i, 1);
    i.unbindTexture(m.colorTexture), this._computeDelta(e, m, p, d, _);
    const g = h.getFBO(i);
    i.unbindTexture(g.colorTexture), this._updateAnimationState(e, m, g), i.bindFramebuffer(a), i.setViewport(s, n, o, l);
  }
  _computeDelta(e, t, i, r, a) {
    const { context: s, painter: n, displayLevel: o } = e, l = n.materialManager.getProgram(this._desc, ["delta"]);
    if (s.bindFramebuffer(t), s.setColorMask(!0, !0, !0, !0), s.setClearColor(0, 0, 0, 0), s.clear(s.gl.COLOR_BUFFER_BIT), s.useProgram(l), !("type" in r.texture) || !("type" in i.texture)) throw new Error("InternalError: Expected to find texture");
    s.bindTexture(r.texture, r.unit), s.bindTexture(i.texture, i.unit), l.setUniform1i("u_maskTexture", r.unit), l.setUniform1i("u_sourceTexture", i.unit), l.setUniform1f("u_timeDelta", e.deltaTime), l.setUniform1f("u_animationTime", a), l.setUniform1f("u_zoomLevel", Math.round(10 * o)), this._quad.draw();
  }
  _updateAnimationState(e, t, i) {
    const { context: r, painter: a } = e, s = a.materialManager.getProgram(this._desc, ["update"]);
    r.bindTexture(t.colorTexture, 1), r.useProgram(s), s.setUniform1i("u_sourceTexture", 1), r.bindFramebuffer(i), r.setColorMask(!0, !0, !0, !0), r.setClearColor(0, 0, 0, 0), r.clear(r.gl.COLOR_BUFFER_BIT), this._quad.draw();
  }
};
const ss = (u) => u.replace("-", "_").toUpperCase(), xt = (u) => `#define ${ss(u)}
`;
function Mt(u) {
  return { attributes: /* @__PURE__ */ new Map([["a_pos", 0], ["a_tex", 1]]), shaders: { vertexShader: xt(u) + lt("blend/blend.vert"), fragmentShader: xt(u) + lt("blend/blend.frag") } };
}
const Ot = () => Le.getLogger("esri.views.2d.engine.webgl.effects.blendEffects.BlendEffect");
let as = class {
  constructor() {
    this._size = [0, 0];
  }
  dispose(e) {
    this._backBufferTexture = P(this._backBufferTexture), this._quad = P(this._quad);
  }
  draw(e, t, i, r, a) {
    const { context: s, drawPhase: n } = e;
    if (this._setupShader(s), r && r !== "normal" && n !== $.LABEL) return void this._drawBlended(e, t, i, r, a);
    const o = Mt("normal"), l = s.programCache.acquire(o.shaders.vertexShader, o.shaders.fragmentShader, o.attributes);
    if (!l) return void Ot().error(new Z("mapview-BlendEffect", 'Error creating shader program for blend mode "normal"'));
    s.useProgram(l), t.setSamplingMode(i), s.bindTexture(t, 0), l.setUniform1i("u_layerTexture", 0), l.setUniform1f("u_opacity", a), s.setBlendingEnabled(!0), s.setBlendFunction(v.ONE, v.ONE_MINUS_SRC_ALPHA);
    const h = this._quad;
    h.draw(), h.unbind(), l.dispose();
  }
  _drawBlended(e, t, i, r, a) {
    const { context: s, state: n, pixelRatio: o, inFadeTransition: l } = e, { size: h } = n, c = s.getBoundFramebufferObject();
    let d, p;
    c != null ? (d = c.width, p = c.height) : (d = Math.round(o * h[0]), p = Math.round(o * h[1])), this._createOrResizeTexture(e, d, p);
    const _ = this._backBufferTexture;
    c.copyToTexture(0, 0, d, p, 0, 0, _), s.setStencilTestEnabled(!1), s.setStencilWriteMask(0), s.setBlendingEnabled(!0), s.setDepthTestEnabled(!1), s.setDepthWriteEnabled(!1);
    const m = Mt(r), g = s.programCache.acquire(m.shaders.vertexShader, m.shaders.fragmentShader, m.attributes);
    if (!g) return void Ot().error(new Z("mapview-BlendEffect", `Error creating shader program for blend mode ${r}`));
    s.useProgram(g), _.setSamplingMode(i), s.bindTexture(_, 0), g.setUniform1i("u_backbufferTexture", 0), t.setSamplingMode(i), s.bindTexture(t, 1), g.setUniform1i("u_layerTexture", 1), g.setUniform1f("u_opacity", a), g.setUniform1f("u_inFadeOpacity", l ? 1 : 0), s.setBlendFunction(v.ONE, v.ZERO);
    const y = this._quad;
    y.draw(), y.unbind(), g.dispose(), s.setBlendFunction(v.ONE, v.ONE_MINUS_SRC_ALPHA);
  }
  _setupShader(e) {
    this._quad || (this._quad = new j(e, [-1, -1, 1, -1, -1, 1, 1, 1]));
  }
  _createOrResizeTexture(e, t, i) {
    const { context: r } = e;
    if (this._backBufferTexture === null || t !== this._size[0] || i !== this._size[1]) {
      if (this._backBufferTexture) this._backBufferTexture.resize(t, i);
      else {
        const a = new z();
        a.internalFormat = E.RGBA, a.wrapMode = R.CLAMP_TO_EDGE, a.width = t, a.height = i, this._backBufferTexture = new G(r, a);
      }
      this._size[0] = t, this._size[1] = i;
    }
  }
}, St = class extends pe {
  constructor(e) {
    super(), this.name = this.constructor.name, this.defines = [e];
  }
  dispose() {
  }
  bind({ context: e, painter: t }) {
    this._prev = e.getBoundFramebufferObject();
    const i = t.getFbos().effect0;
    e.bindFramebuffer(i), e.setColorMask(!0, !0, !0, !0), e.setClearColor(0, 0, 0, 0), e.clear(e.gl.COLOR_BUFFER_BIT);
  }
  unbind() {
  }
  draw(e, t) {
    const { context: i, painter: r } = e, a = r.getPostProcessingEffects(t), s = i.getBoundFramebufferObject();
    for (const { postProcessingEffect: n, effect: o } of a) n.draw(e, s, o);
    i.bindFramebuffer(this._prev), i.setStencilTestEnabled(!1), r.blitTexture(i, s.colorTexture, L.NEAREST), i.setStencilTestEnabled(!0);
  }
}, ns = class {
  constructor() {
    this._width = void 0, this._height = void 0, this._resources = null;
  }
  dispose() {
    this._resources && (this._resources.quadGeometry.dispose(), this._resources.quadVAO.dispose(), this._resources.highlightProgram.dispose(), this._resources.blurProgram.dispose(), this._resources = null);
  }
  preBlur(e, t) {
    e.bindTexture(t, ce), e.useProgram(this._resources.blurProgram), this._resources.blurProgram.setUniform4fv("u_direction", [1, 0, 1 / this._width, 0]), this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector", Di), e.bindVAO(this._resources.quadVAO), e.drawArrays(ne.TRIANGLE_STRIP, 0, 4), e.bindVAO();
  }
  finalBlur(e, t) {
    e.bindTexture(t, ce), e.useProgram(this._resources.blurProgram), this._resources.blurProgram.setUniform4fv("u_direction", [0, 1, 0, 1 / this._height]), this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector", Li), e.bindVAO(this._resources.quadVAO), e.drawArrays(ne.TRIANGLE_STRIP, 0, 4), e.bindVAO();
  }
  renderHighlight(e, t, i) {
    e.bindTexture(t, ce), e.useProgram(this._resources.highlightProgram), i.applyHighlightOptions(e, this._resources.highlightProgram), e.bindVAO(this._resources.quadVAO), e.setBlendingEnabled(!0), e.setBlendFunction(v.ONE, v.ONE_MINUS_SRC_ALPHA), e.drawArrays(ne.TRIANGLE_STRIP, 0, 4), e.bindVAO();
  }
  _initialize(e, t, i) {
    this._width = t, this._height = i;
    const r = Ge.createVertex(e, We.STATIC_DRAW, new Int8Array([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]).buffer), a = new Ve(e, /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]), { geometry: [new dt("a_position", 2, De.BYTE, 0, 4), new dt("a_texcoord", 2, De.UNSIGNED_BYTE, 2, 4)] }, { geometry: r }), s = xe(e, ji), n = xe(e, Xi);
    e.useProgram(s), s.setUniform1i("u_texture", ce), s.setUniform1i("u_shade", Ii), s.setUniform1f("u_sigma", nt), e.useProgram(n), n.setUniform1i("u_texture", ce), n.setUniform1f("u_sigma", nt), this._resources = { quadGeometry: r, quadVAO: a, highlightProgram: s, blurProgram: n };
  }
  setup(e, t, i) {
    this._resources ? (this._width = t, this._height = i) : this._initialize(e, t, i);
  }
};
function Pt(u, e, t) {
  const i = new z(e, t);
  return i.wrapMode = R.CLAMP_TO_EDGE, new D(u, i, new He(qe.STENCIL_INDEX8, e, t));
}
let os = class {
  constructor() {
    this._width = void 0, this._height = void 0, this._resources = null;
  }
  dispose() {
    this._resources && (this._resources.sharedBlur1Fbo.dispose(), this._resources.sharedBlur2Fbo.dispose(), this._resources = null);
  }
  _initialize(e, t, i) {
    this._width = t, this._height = i;
    const r = Pt(e, t, i), a = Pt(e, t, i);
    this._resources = { sharedBlur1Fbo: r, sharedBlur2Fbo: a };
  }
  setup(e, t, i) {
    !this._resources || this._width === t && this._height === i || this.dispose(), this._resources || this._initialize(e, t, i);
  }
  get sharedBlur1Tex() {
    return this._resources.sharedBlur1Fbo.colorTexture;
  }
  get sharedBlur1Fbo() {
    return this._resources.sharedBlur1Fbo;
  }
  get sharedBlur2Tex() {
    return this._resources.sharedBlur2Fbo.colorTexture;
  }
  get sharedBlur2Fbo() {
    return this._resources.sharedBlur2Fbo;
  }
};
const J = 4, be = 4 / J;
let ls = class extends pe {
  constructor() {
    super(...arguments), this.defines = ["highlight"], this._hlRenderer = new ns(), this._width = void 0, this._height = void 0, this._boundFBO = null, this._hlSurfaces = new os(), this._adjustedWidth = void 0, this._adjustedHeight = void 0, this._blitRenderer = new Bt();
  }
  dispose() {
    this._hlSurfaces?.dispose(), this._hlRenderer?.dispose(), this._boundFBO = null;
  }
  bind(e) {
    const { context: t, painter: i } = e, { width: r, height: a } = t.getViewport(), s = i.getFbos().effect0;
    this.setup(e, r, a), t.bindFramebuffer(s), t.setColorMask(!0, !0, !0, !0), t.setClearColor(0, 0, 0, 0), t.clear(t.gl.COLOR_BUFFER_BIT);
  }
  unbind() {
  }
  setup({ context: e }, t, i) {
    this._width = t, this._height = i;
    const r = t % J, a = i % J;
    t += r < J / 2 ? -r : J - r, i += a < J / 2 ? -a : J - a, this._adjustedWidth = t, this._adjustedHeight = i, this._boundFBO = e.getBoundFramebufferObject();
    const s = Math.round(t * be), n = Math.round(i * be);
    this._hlRenderer.setup(e, s, n), this._hlSurfaces.setup(e, s, n);
  }
  draw(e) {
    const { context: t, passOptions: i } = e, r = i.activeGradient, a = t.getBoundFramebufferObject();
    t.setViewport(0, 0, this._adjustedWidth * be, this._adjustedHeight * be), t.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo), t.setStencilTestEnabled(!1), t.setClearColor(0, 0, 0, 0), t.clear(t.gl.COLOR_BUFFER_BIT), this._blitRenderer.render(t, a.colorTexture, L.NEAREST, 1), t.setStencilTestEnabled(!1), t.setBlendingEnabled(!1), t.setColorMask(!1, !1, !1, !0), t.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo), t.setClearColor(0, 0, 0, 0), t.clear(t.gl.COLOR_BUFFER_BIT), this._hlRenderer.preBlur(t, this._hlSurfaces.sharedBlur1Tex), t.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo), t.setClearColor(0, 0, 0, 0), t.clear(t.gl.COLOR_BUFFER_BIT), this._hlRenderer.finalBlur(t, this._hlSurfaces.sharedBlur2Tex), t.bindFramebuffer(this._boundFBO), t.setBlendingEnabled(!0), t.setColorMask(!0, !0, !0, !0), t.setViewport(0, 0, this._width, this._height), this._hlRenderer.renderHighlight(t, this._hlSurfaces.sharedBlur1Tex, r), this._boundFBO = null;
  }
}, hs = class extends pe {
  constructor() {
    super(...arguments), this.name = this.constructor.name, this.defines = ["hittest"];
  }
  dispose() {
    this._fbo != null && this._fbo.dispose();
  }
  createOptions({ pixelRatio: e }, t, i = Ft) {
    if (!t.length) return null;
    const r = t.shift(), a = r.x, s = r.y;
    return this._outstanding = r, { type: "hittest", distance: i * e, smallSymbolDistance: 0, smallSymbolSizeThreshold: 3, position: [a, s] };
  }
  bind(e) {
    const { context: t, attributeView: i } = e;
    if (!i.size) return;
    const r = i.getBlock(Ie.GPGPU);
    if (r == null) return;
    const a = r.getFBO(t);
    t.setViewport(0, 0, i.size, i.size), t.bindFramebuffer(a), t.setColorMask(!0, !0, !0, !0), t.setClearColor(0, 0, 0, 0), t.clear(t.gl.COLOR_BUFFER_BIT | t.gl.DEPTH_BUFFER_BIT);
  }
  unbind() {
  }
  draw(e) {
    if (this._outstanding == null) return;
    const t = this._outstanding;
    this._outstanding = null, this._resolve(e, t.resolvers);
  }
  async _resolve(e, t) {
    const { context: i, attributeView: r } = e, a = r.getBlock(Ie.GPGPU);
    if (a == null) return void t.forEach((l) => l.resolve([]));
    const s = a.getFBO(i), n = new Uint8Array(s.width * s.height * 4);
    try {
      await s.readPixelsAsync(0, 0, s.width, s.height, E.RGBA, je.UNSIGNED_BYTE, n);
    } catch {
      return void t.forEach((h) => h.resolve([]));
    }
    const o = [];
    for (let l = 0; l < n.length; l += 4) {
      const h = l / 4;
      n[l] && o.push(h);
    }
    t.forEach((l) => l.resolve(o));
  }
}, cs = class extends pe {
  constructor() {
    super(...arguments), this.name = this.constructor.name, this.defines = ["id"], this._lastSize = 0, this._boundFBO = null;
  }
  dispose() {
    this._fbo != null && this._fbo.dispose();
  }
  bind({ context: e, painter: t }) {
    this._boundFBO = e.getBoundFramebufferObject();
    const i = t.getFbos().effect0;
    e.bindFramebuffer(i), e.setColorMask(!0, !0, !0, !0), e.setClearColor(0, 0, 0, 0), e.clear(e.gl.COLOR_BUFFER_BIT);
  }
  unbind({ context: e }) {
    e.bindFramebuffer(this._boundFBO), this._boundFBO = null;
  }
  draw(e, t, i = 2 * Ft) {
    this._resolve(e, t, i);
  }
  async _resolve({ context: e, state: t, pixelRatio: i }, r, a) {
    const s = e.getBoundFramebufferObject(), n = t.size[1] * i, o = Math.round(a * i), l = o / 2, h = o / 2;
    this._ensureBuffer(o), r.forEach(async (c, d) => {
      const p = /* @__PURE__ */ new Map(), _ = Math.floor(d.x * i - o / 2), m = Math.floor(n - d.y * i - o / 2);
      await s.readPixelsAsync(_, m, o, o, E.RGBA, je.UNSIGNED_BYTE, this._buf);
      for (let y = 0; y < this._buf32.length; y++) {
        const f = this._buf32[y];
        if (f !== 4294967295 && f !== 0) {
          const M = y % o, w = o - Math.floor(y / o), x = (l - M) * (l - M) + (h - w) * (h - w), b = p.has(f) ? p.get(f) : 4294967295;
          p.set(f, Math.min(x, b));
        }
      }
      const g = Array.from(p).sort((y, f) => y[1] - f[1]).map((y) => y[0]);
      c.resolve(g), r.delete(d);
    });
  }
  _ensureBuffer(e) {
    this._lastSize !== e && (this._lastSize = e, this._buf = new Uint8Array(4 * e * e), this._buf32 = new Uint32Array(this._buf.buffer));
  }
};
const Ae = 5, us = [1, 0], ds = [0, 1], ps = [1, 0.8, 0.6, 0.4, 0.2], _s = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let ms = class {
  constructor() {
    this._intensityFBO = null, this._compositeFBO = null, this._mipsFBOs = new Array(Ae), this._nMips = Ae, this._kernelSizeArray = [3, 5, 7, 9, 11], this._size = [0, 0], this._programDesc = { luminosityHighPass: { vsPath: "post-processing/pp", fsPath: "post-processing/bloom/luminosityHighPass", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, gaussianBlur: { vsPath: "post-processing/pp", fsPath: "post-processing/bloom/gaussianBlur", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, composite: { vsPath: "post-processing/pp", fsPath: "post-processing/bloom/composite", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, blit: { vsPath: "post-processing/pp", fsPath: "post-processing/blit", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) } };
  }
  dispose() {
    if (this._quad = P(this._quad), this._intensityFBO = P(this._intensityFBO), this._compositeFBO = P(this._compositeFBO), this._mipsFBOs) {
      for (let e = 0; e < this._nMips; e++) this._mipsFBOs[e] && (this._mipsFBOs[e].horizontal.dispose(), this._mipsFBOs[e].vertical.dispose());
      this._mipsFBOs = null;
    }
  }
  draw(e, t, i) {
    const { width: r, height: a } = t, { context: s, painter: n } = e, { materialManager: o } = n, l = s.gl, h = this._programDesc, { strength: c, radius: d, threshold: p } = i;
    this._quad || (this._quad = new j(s, [-1, -1, 1, -1, -1, 1, 1, 1])), this._createOrResizeResources(e, r, a), s.setStencilTestEnabled(!1), s.setBlendingEnabled(!0), s.setBlendFunction(v.ONE, v.ONE_MINUS_SRC_ALPHA), s.setStencilWriteMask(0);
    const _ = this._quad;
    _.bind(), s.bindFramebuffer(this._intensityFBO);
    const m = o.getProgram(h.luminosityHighPass);
    s.useProgram(m), s.bindTexture(t.colorTexture, 0), m.setUniform1i("u_texture", 0), m.setUniform3fv("u_defaultColor", [0, 0, 0]), m.setUniform1f("u_defaultOpacity", 0), m.setUniform1f("u_luminosityThreshold", p), m.setUniform1f("u_smoothWidth", 0.01);
    const g = [Math.round(r / 2), Math.round(a / 2)];
    s.setViewport(0, 0, g[0], g[1]), s.setClearColor(0, 0, 0, 0), s.clear(l.COLOR_BUFFER_BIT), _.draw(), s.setBlendingEnabled(!1);
    let y = this._intensityFBO.colorTexture;
    for (let w = 0; w < this._nMips; w++) {
      const x = o.getProgram(h.gaussianBlur, [{ name: "radius", value: this._kernelSizeArray[w] }]);
      s.useProgram(x), s.bindTexture(y, w + 1), x.setUniform1i("u_colorTexture", w + 1), x.setUniform2fv("u_texSize", g), x.setUniform2fv("u_direction", us), s.setViewport(0, 0, g[0], g[1]);
      const b = this._mipsFBOs[w];
      s.bindFramebuffer(b.horizontal), _.draw(), y = b.horizontal.colorTexture, s.bindFramebuffer(b.vertical), s.bindTexture(y, w + 1), x.setUniform2fv("u_direction", ds), _.draw(), y = b.vertical.colorTexture, g[0] = Math.round(g[0] / 2), g[1] = Math.round(g[1] / 2);
    }
    s.setViewport(0, 0, r, a);
    const f = o.getProgram(h.composite, [{ name: "nummips", value: Ae }]);
    s.bindFramebuffer(this._compositeFBO), s.useProgram(f), f.setUniform1f("u_bloomStrength", c), f.setUniform1f("u_bloomRadius", d), f.setUniform1fv("u_bloomFactors", ps), f.setUniform3fv("u_bloomTintColors", _s), s.bindTexture(this._mipsFBOs[0].vertical.colorTexture, 1), f.setUniform1i("u_blurTexture1", 1), s.bindTexture(this._mipsFBOs[1].vertical.colorTexture, 2), f.setUniform1i("u_blurTexture2", 2), s.bindTexture(this._mipsFBOs[2].vertical.colorTexture, 3), f.setUniform1i("u_blurTexture3", 3), s.bindTexture(this._mipsFBOs[3].vertical.colorTexture, 4), f.setUniform1i("u_blurTexture4", 4), s.bindTexture(this._mipsFBOs[4].vertical.colorTexture, 5), f.setUniform1i("u_blurTexture5", 5), _.draw(), s.bindFramebuffer(t), s.setBlendingEnabled(!0);
    const M = o.getProgram(h.blit);
    s.useProgram(M), s.bindTexture(this._compositeFBO.colorTexture, 6), M.setUniform1i("u_texture", 6), s.setBlendFunction(v.ONE, v.ONE), _.draw(), _.unbind(), s.setBlendFunction(v.ONE, v.ONE_MINUS_SRC_ALPHA), s.setStencilTestEnabled(!0);
  }
  _createOrResizeResources(e, t, i) {
    const { context: r } = e;
    if (this._compositeFBO && this._size[0] === t && this._size[1] === i) return;
    this._size[0] = t, this._size[1] = i;
    const a = [Math.round(t / 2), Math.round(i / 2)];
    if (this._compositeFBO) this._compositeFBO.resize(t, i);
    else {
      const s = new z(t, i);
      s.internalFormat = E.RGBA, s.wrapMode = R.CLAMP_TO_EDGE, this._compositeFBO = new D(r, s);
    }
    if (this._intensityFBO) this._intensityFBO.resize(a[0], a[1]);
    else {
      const s = new z(a[0], a[1]);
      s.internalFormat = E.RGBA, s.wrapMode = R.CLAMP_TO_EDGE, this._intensityFBO = new D(r, s);
    }
    for (let s = 0; s < this._nMips; s++) {
      if (this._mipsFBOs[s]) this._mipsFBOs[s].horizontal.resize(a[0], a[1]), this._mipsFBOs[s].vertical.resize(a[0], a[1]);
      else {
        const n = new z(a[0], a[1]);
        n.internalFormat = E.RGBA, n.wrapMode = R.CLAMP_TO_EDGE, this._mipsFBOs[s] = { horizontal: new D(r, n), vertical: new D(r, n) };
      }
      a[0] = Math.round(a[0] / 2), a[1] = Math.round(a[1] / 2);
    }
  }
};
const fs = [1, 0], gs = [0, 1];
let ys = class {
  constructor() {
    this._blurFBO = null, this._size = [0, 0], this._programDesc = { gaussianBlur: { vsPath: "post-processing/pp", fsPath: "post-processing/blur/gaussianBlur", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, radialBlur: { vsPath: "post-processing/pp", fsPath: "post-processing/blur/radial-blur", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, blit: { vsPath: "post-processing/pp", fsPath: "post-processing/blit", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) } };
  }
  dispose() {
    this._blurFBO && (this._blurFBO.dispose(), this._blurFBO = null);
  }
  draw(e, t, i) {
    const { context: r } = e, { type: a, radius: s } = i;
    if (s === 0) return;
    this._createOrResizeResources(e), this._quad || (this._quad = new j(r, [-1, -1, 1, -1, -1, 1, 1, 1]));
    const n = this._quad;
    n.bind(), a === "blur" ? this._gaussianBlur(e, t, s) : this._radialBlur(e, t), n.unbind();
  }
  _gaussianBlur(e, t, i) {
    const { context: r, state: a, painter: s, pixelRatio: n } = e, { size: o } = a, { materialManager: l } = s, h = this._programDesc, c = this._quad, d = [Math.round(n * o[0]), Math.round(n * o[1])], p = this._blurFBO, _ = l.getProgram(h.gaussianBlur, [{ name: "radius", value: Math.ceil(i) }]);
    r.useProgram(_), r.setBlendingEnabled(!1), r.bindFramebuffer(p), r.bindTexture(t.colorTexture, 4), _.setUniform1i("u_colorTexture", 4), _.setUniform2fv("u_texSize", d), _.setUniform2fv("u_direction", fs), _.setUniform1f("u_sigma", i), c.draw(), r.bindFramebuffer(t), r.setStencilWriteMask(0), r.setStencilTestEnabled(!1), r.setDepthWriteEnabled(!1), r.setDepthTestEnabled(!1), r.bindTexture(p?.colorTexture, 5), _.setUniform1i("u_colorTexture", 5), _.setUniform2fv("u_direction", gs), c.draw(), r.setBlendingEnabled(!0), r.setBlendFunction(v.ONE, v.ONE_MINUS_SRC_ALPHA), r.setStencilTestEnabled(!0);
  }
  _radialBlur(e, t) {
    const { context: i, painter: r } = e, { materialManager: a } = r, s = this._programDesc, n = this._quad, o = this._blurFBO;
    i.bindFramebuffer(o);
    const l = a.getProgram(s.radialBlur);
    i.useProgram(l), i.setBlendingEnabled(!1), i.bindTexture(t.colorTexture, 4), l.setUniform1i("u_colorTexture", 4), n.draw(), i.bindFramebuffer(t), i.setStencilWriteMask(0), i.setStencilTestEnabled(!1), i.setDepthWriteEnabled(!1), i.setDepthTestEnabled(!1), i.setBlendingEnabled(!0);
    const h = a.getProgram(s.blit);
    i.useProgram(h), i.bindTexture(o?.colorTexture, 5), h.setUniform1i("u_texture", 5), i.setBlendFunction(v.ONE, v.ONE_MINUS_SRC_ALPHA), n.draw();
  }
  _createOrResizeResources(e) {
    const { context: t, state: i, pixelRatio: r } = e, { size: a } = i, s = Math.round(r * a[0]), n = Math.round(r * a[1]);
    if (!this._blurFBO || this._size[0] !== s || this._size[1] !== n) if (this._size[0] = s, this._size[1] = n, this._blurFBO) this._blurFBO.resize(s, n);
    else {
      const o = new z(s, n);
      o.internalFormat = E.RGBA, o.wrapMode = R.CLAMP_TO_EDGE, this._blurFBO = new D(t, o);
    }
  }
};
class vs {
  constructor() {
    this._layerFBOTexture = null, this._size = [0, 0], this._programDesc = { vsPath: "post-processing/pp", fsPath: "post-processing/filterEffect", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) };
  }
  dispose() {
    this._layerFBOTexture = P(this._layerFBOTexture);
  }
  draw(e, t, i) {
    const { width: r, height: a } = t;
    this._createOrResizeResources(e, r, a);
    const { context: s, painter: n } = e, { materialManager: o } = n, l = this._programDesc, h = this._quad, c = i.colorMatrix;
    h.bind();
    const d = this._layerFBOTexture;
    s.bindFramebuffer(t), t.copyToTexture(0, 0, r, a, 0, 0, d), s.setBlendingEnabled(!1), s.setStencilTestEnabled(!1);
    const p = o.getProgram(l);
    s.useProgram(p), s.bindTexture(d, 2), p.setUniformMatrix4fv("u_coefficients", c), p.setUniform1i("u_colorTexture", 2), h.draw(), s.setBlendingEnabled(!0), s.setBlendFunction(v.ONE, v.ONE_MINUS_SRC_ALPHA), s.setStencilTestEnabled(!0), h.unbind();
  }
  _createOrResizeResources(e, t, i) {
    const { context: r } = e;
    if (!this._layerFBOTexture || this._size[0] !== t || this._size[1] !== i) {
      if (this._size[0] = t, this._size[1] = i, this._layerFBOTexture) this._layerFBOTexture.resize(t, i);
      else {
        const a = new z();
        a.internalFormat = E.RGBA, a.wrapMode = R.CLAMP_TO_EDGE, a.width = t, a.height = i, this._layerFBOTexture = new G(r, a);
      }
      this._quad || (this._quad = new j(r, [-1, -1, 1, -1, -1, 1, 1, 1]));
    }
  }
}
const bs = [1, 0], ws = [0, 1];
class xs {
  constructor() {
    this._layerFBOTexture = null, this._horizontalBlurFBO = null, this._verticalBlurFBO = null, this._size = [0, 0], this._quad = null, this._programDesc = { blur: { vsPath: "post-processing/pp", fsPath: "post-processing/blur/gaussianBlur", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, composite: { vsPath: "post-processing/pp", fsPath: "post-processing/drop-shadow/composite", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) }, blit: { vsPath: "post-processing/pp", fsPath: "post-processing/blit", attributes: /* @__PURE__ */ new Map([["a_position", 0]]) } };
  }
  dispose() {
    this._layerFBOTexture = P(this._layerFBOTexture), this._horizontalBlurFBO = P(this._horizontalBlurFBO), this._verticalBlurFBO = P(this._verticalBlurFBO);
  }
  draw(e, t, i) {
    const { context: r, state: a, painter: s } = e, { materialManager: n } = s, o = this._programDesc, l = t.width, h = t.height, c = [Math.round(l), Math.round(h)], { blurRadius: d, offsetX: p, offsetY: _, color: m } = i, g = [Q(p), Q(_)];
    this._createOrResizeResources(e, l, h, c);
    const y = this._horizontalBlurFBO, f = this._verticalBlurFBO;
    r.setStencilWriteMask(0), r.setStencilTestEnabled(!1), r.setDepthWriteEnabled(!1), r.setDepthTestEnabled(!1);
    const M = this._layerFBOTexture;
    t.copyToTexture(0, 0, l, h, 0, 0, M), this._quad || (this._quad = new j(r, [-1, -1, 1, -1, -1, 1, 1, 1])), r.setViewport(0, 0, c[0], c[1]);
    const w = this._quad;
    w.bind(), r.setBlendingEnabled(!1);
    const x = n.getProgram(o.blur, [{ name: "radius", value: Math.ceil(d) }]);
    r.useProgram(x), r.bindFramebuffer(y), r.bindTexture(t.colorTexture, 4), x.setUniform1i("u_colorTexture", 4), x.setUniform2fv("u_texSize", c), x.setUniform2fv("u_direction", bs), x.setUniform1f("u_sigma", d), w.draw(), r.bindFramebuffer(f), r.bindTexture(y?.colorTexture, 5), x.setUniform1i("u_colorTexture", 5), x.setUniform2fv("u_direction", ws), w.draw(), r.bindFramebuffer(t), r.setViewport(0, 0, l, h);
    const b = n.getProgram(o.composite);
    r.useProgram(b), r.bindTexture(f?.colorTexture, 2), b.setUniform1i("u_blurTexture", 2), r.bindTexture(M, 3), b.setUniform1i("u_layerFBOTexture", 3), b.setUniform4fv("u_shadowColor", [m[3] * (m[0] / 255), m[3] * (m[1] / 255), m[3] * (m[2] / 255), m[3]]), b.setUniformMatrix3fv("u_displayViewMat3", a.displayMat3), b.setUniform2fv("u_shadowOffset", g), w.draw(), r.setBlendingEnabled(!0), r.setStencilTestEnabled(!0), r.setBlendFunction(v.ONE, v.ONE_MINUS_SRC_ALPHA), w.unbind();
  }
  _createOrResizeResources(e, t, i, r) {
    const { context: a } = e;
    if (!this._horizontalBlurFBO || this._size[0] !== t || this._size[1] !== i) {
      if (this._size[0] = t, this._size[1] = i, this._horizontalBlurFBO) this._horizontalBlurFBO.resize(r[0], r[1]);
      else {
        const s = new z(r[0], r[1]);
        s.internalFormat = E.RGBA, s.wrapMode = R.CLAMP_TO_EDGE, this._horizontalBlurFBO = new D(a, s);
      }
      if (this._verticalBlurFBO) this._verticalBlurFBO.resize(r[0], r[1]);
      else {
        const s = new z(r[0], r[1]);
        s.internalFormat = E.RGBA, s.wrapMode = R.CLAMP_TO_EDGE, this._verticalBlurFBO = new D(a, s);
      }
      if (this._layerFBOTexture) this._layerFBOTexture.resize(t, i);
      else {
        const s = new z();
        s.internalFormat = E.RGBA, s.wrapMode = R.CLAMP_TO_EDGE, s.width = t, s.height = i, this._layerFBOTexture = new G(a, s);
      }
    }
  }
}
class Ms {
  constructor() {
    this._size = [0, 0], this._layerFBOTexture = null;
  }
  dispose() {
    this._layerFBOTexture = P(this._layerFBOTexture);
  }
  draw(e, t, i) {
    const { width: r, height: a } = t;
    this._createOrResizeResources(e, r, a);
    const { context: s, painter: n } = e, { amount: o } = i, l = s.gl, h = this._layerFBOTexture;
    s.bindFramebuffer(t), t.copyToTexture(0, 0, r, a, 0, 0, h), s.setBlendingEnabled(!0), s.setStencilTestEnabled(!1), s.setDepthTestEnabled(!1), s.setClearColor(0, 0, 0, 0), s.clear(l.COLOR_BUFFER_BIT), n.blitTexture(s, h, L.NEAREST, o);
  }
  _createOrResizeResources(e, t, i) {
    const { context: r } = e;
    if (!this._layerFBOTexture || this._size[0] !== t || this._size[1] !== i) if (this._size[0] = t, this._size[1] = i, this._layerFBOTexture) this._layerFBOTexture.resize(t, i);
    else {
      const a = new z();
      a.internalFormat = E.RGBA, a.wrapMode = R.CLAMP_TO_EDGE, a.samplingMode = L.NEAREST, a.width = t, a.height = i, this._layerFBOTexture = new G(r, a);
    }
  }
}
function Os(u) {
  switch (u) {
    case "bloom":
    case "blur":
    case "opacity":
    case "drop-shadow":
      return u;
    default:
      return "colorize";
  }
}
const Ss = { colorize: () => new vs(), blur: () => new ys(), bloom: () => new ms(), opacity: () => new Ms(), "drop-shadow": () => new xs() };
class Ps {
  constructor() {
    this._effectMap = /* @__PURE__ */ new Map();
  }
  dispose() {
    this._effectMap.forEach((e) => e.dispose()), this._effectMap.clear();
  }
  getPostProcessingEffects(e) {
    if (!e || e.length === 0) return [];
    const t = [];
    for (const i of e) {
      const r = Os(i.type);
      let a = this._effectMap.get(r);
      a || (a = Ss[r](), this._effectMap.set(r, a)), t.push({ postProcessingEffect: a, effect: i });
    }
    return t;
  }
}
class Ts {
  constructor(e, t) {
    this.brushes = e, this.name = t.name, this.drawPhase = t.drawPhase || $.MAP, this._targetFn = t.target, this.effects = t.effects || [], this.enableDefaultDraw = t.enableDefaultDraw ?? (() => !0), this.forceDrawByDisplayOrder = !!t.forceDrawByDisplayOrder;
  }
  render(e) {
    const { context: t, profiler: i } = e, r = this._targetFn(), a = this.drawPhase & e.drawPhase;
    if (i.recordPassStart(this.name), a) {
      this.enableDefaultDraw() && this._doRender(e, r), i.recordPassEnd();
      for (const s of this.effects) {
        if (!s.enable()) continue;
        const n = s.apply, o = s.args?.(), l = t.getViewport(), h = t.getBoundFramebufferObject(), c = e.passOptions;
        this._bindEffect(e, n, o), this._doRender(e, r, n.defines), this._drawAndUnbindEffect(e, n, l, h, c, o);
      }
    }
  }
  _doRender(e, t, i) {
    if (t == null) return;
    const { profiler: r, context: a } = e;
    for (const s of this.brushes) {
      if (r.recordBrushStart(s.name), s.brushEffect != null) {
        const n = a.getViewport(), o = a.getBoundFramebufferObject(), l = e.passOptions;
        this._bindEffect(e, s.brushEffect), this._drawWithBrush(s, e, t, i), this._drawAndUnbindEffect(e, s.brushEffect, n, o, l);
      } else this._drawWithBrush(s, e, t, i);
      r.recordBrushEnd();
    }
  }
  _drawWithBrush(e, t, i, r) {
    pi(i) ? (e.prepareState(t, r), e.drawMany(t, i, r)) : i.visible && (e.prepareState(t, r), e.draw(t, i, r));
  }
  _bindEffect(e, t, i) {
    const { profiler: r } = e;
    r.recordPassStart(this.name + "." + t.name), t.bind(e, i);
    const a = t.createOptions(e, i);
    e.passOptions = a;
  }
  _drawAndUnbindEffect(e, t, i, r, a, s) {
    const { profiler: n, context: o } = e;
    e.passOptions = a, n.recordBrushStart(t.name), t.draw(e, s), t.unbind(e, s), o.bindFramebuffer(r);
    const { x: l, y: h, width: c, height: d } = i;
    o.setViewport(l, h, c, d), n.recordBrushEnd(), n.recordPassEnd();
  }
}
class Tt {
  constructor() {
    this._programCache = /* @__PURE__ */ new Map();
  }
  destroy() {
    for (const e of this._programCache.values()) e.destroy();
    this._programCache.clear();
  }
  getProgram(e, t, i, r, a) {
    const s = e.getShaderKey(t, i, r, a);
    let n = this._programCache.get(s);
    return n || (n = e.getProgram(t, i, r, a), this._programCache.set(s, n)), n;
  }
}
class Cs {
  constructor(e, t) {
    this.context = e, this._currentPipelineStateNeedsUpdate = !1, this._blitRenderer = new Bt(), this._worldExtentRenderer = new is(), this._brushCache = /* @__PURE__ */ new Map(), this._lastWidth = null, this._lastHeight = null, this._vtlMaterialManager = new Er(), this._blendEffect = new as(), this._stencilBuf = null, this._prevBeforeLayerFBOStack = [], this._fboPool = [], this.effects = { highlight: new ls(), hittest: new hs(), hittestVTL: new cs(), integrate: new rs(), insideEffect: new St("inside"), outsideEffect: new St("outside") }, this._programCache = new Tt(), this._shaderState = { shader: null, uniforms: null, defines: null, optionalAttributes: null, useComputeBuffer: !1 }, this.materialManager = new Rr(e), this.textureManager = new Xr(t), this.textureUploadManager = new es(t), this._effectsManager = new Ps(), this._quadMesh = new j(e, [0, 0, 1, 0, 0, 1, 1, 1]);
  }
  dispose() {
    if (this._programCache.destroy(), this.materialManager.dispose(), this.textureManager.dispose(), this.textureUploadManager.destroy(), this._blitRenderer = P(this._blitRenderer), this._worldExtentRenderer = P(this._worldExtentRenderer), this._quadMesh.dispose(), this._brushCache && (this._brushCache.forEach((e) => e.dispose()), this._brushCache.clear(), this._brushCache = null), this._fbos) {
      let e;
      for (e in this._fbos) this._fbos[e] && this._fbos[e].dispose();
    }
    for (const e of this._fboPool) e.dispose();
    if (this._fboPool.length = 0, this.effects) {
      let e;
      for (e in this.effects) this.effects[e] && this.effects[e].dispose();
    }
    this._effectsManager.dispose(), this._blendEffect.dispose(this.context), this._vtlMaterialManager = P(this._vtlMaterialManager);
  }
  clearShaderCache() {
    this._programCache.destroy(), this._programCache = new Tt();
  }
  get blitRenderer() {
    return this._blitRenderer;
  }
  get vectorTilesMaterialManager() {
    return this._vtlMaterialManager;
  }
  getFbos() {
    if (!this._fbos) throw new Error("InternalError: Painter FBOs not initialized");
    return this._fbos;
  }
  acquireFbo(e, t) {
    let i;
    if (this._fboPool.length > 0) i = this._fboPool.pop();
    else {
      const r = new z(e, t);
      r.samplingMode = L.NEAREST, r.wrapMode = R.CLAMP_TO_EDGE, i = new D(this.context, r, this._stencilBuf);
    }
    return i.width === e && i.height === t || i.resize(e, t), i;
  }
  releaseFbo(e) {
    this._fboPool.push(e);
  }
  getSharedStencilBuffer() {
    return this._stencilBuf;
  }
  beforeRenderPhases(e, t, i) {
    const { context: r } = e;
    this._worldExtentRenderer.render(e, t, i);
    const { width: a, height: s } = r.getViewport();
    if (this.updateFBOs(a, s), this._prevFBO = r.getBoundFramebufferObject(), r.bindFramebuffer(this.getFbos().output), r.setColorMask(!0, !0, !0, !0), t != null) {
      const { r: n, g: o, b: l, a: h } = t;
      r.setClearColor(h * n / 255, h * o / 255, h * l / 255, h);
    } else r.setClearColor(0, 0, 0, 0);
    r.setDepthWriteEnabled(!0), r.setClearDepth(1), r.clear(r.gl.COLOR_BUFFER_BIT | r.gl.DEPTH_BUFFER_BIT), r.setDepthWriteEnabled(!1);
  }
  afterRenderPhases(e) {
    const { context: t } = e;
    t.bindFramebuffer(this._prevFBO), t.setStencilFunction($e.EQUAL, 1, 255), t.setStencilTestEnabled(!0), t.setDepthTestEnabled(!1), this.blitTexture(t, this.getFbos().output.colorTexture, L.NEAREST);
  }
  beforeRenderLayer(e, t, i) {
    const { context: r, blendMode: a, effects: s, drawPhase: n, requireFBO: o } = e;
    if (o || Ct(n, a, s, i)) {
      const l = r.getBoundFramebufferObject();
      this._prevBeforeLayerFBOStack.push(l);
      const { width: h, height: c } = r.getViewport(), d = this.acquireFbo(h, c);
      r.bindFramebuffer(d), r.setColorMask(!0, !0, !0, !0), r.setClearColor(0, 0, 0, 0), r.setDepthWriteEnabled(!0), r.setClearDepth(1), r.clear(r.gl.COLOR_BUFFER_BIT | r.gl.DEPTH_BUFFER_BIT), r.setDepthWriteEnabled(!1);
    }
    r.setDepthWriteEnabled(!1), r.setDepthTestEnabled(!1), r.setStencilTestEnabled(!0), r.setClearStencil(t), r.setStencilWriteMask(255), r.clear(r.gl.STENCIL_BUFFER_BIT);
  }
  afterRenderLayer(e, t) {
    const { context: i, blendMode: r, effects: a, requireFBO: s, drawPhase: n } = e;
    if (s || Ct(n, r, a, t)) {
      const o = i.getBoundFramebufferObject();
      a != null && a.length > 0 && n === $.MAP && (i.setColorMask(!0, !0, !0, !0), this._applyEffects(e, a, o)), i.bindFramebuffer(this._prevBeforeLayerFBOStack.pop()), i.setStencilTestEnabled(!1), i.setStencilWriteMask(0), i.setBlendingEnabled(!0), i.setBlendFunctionSeparate(v.ONE, v.ONE_MINUS_SRC_ALPHA, v.ONE, v.ONE_MINUS_SRC_ALPHA), i.setColorMask(!0, !0, !0, !0);
      const l = r == null || n === $.HIGHLIGHT ? "normal" : r;
      this._blendEffect.draw(e, o.colorTexture, L.NEAREST, l, t), this.releaseFbo(o);
    }
  }
  renderObject(e, t, i, r) {
    const a = ht[i];
    if (!a) return;
    let s = this._brushCache.get(a);
    s === void 0 && (s = new a(), this._brushCache.set(a, s)), s.prepareState(e), s.draw(e, t, r);
  }
  renderObjects(e, t, i, r) {
    const a = ht[i];
    if (!a) return;
    let s = this._brushCache.get(a);
    s === void 0 && (s = new a(), this._brushCache.set(a, s)), s.drawMany(e, t, r);
  }
  registerRenderPass(e) {
    const t = e.brushes.map((i) => (this._brushCache.has(i) || this._brushCache.set(i, new i()), this._brushCache.get(i)));
    return new Ts(t, e);
  }
  blitTexture(e, t, i, r = 1) {
    e.setBlendingEnabled(!0), e.setBlendFunctionSeparate(v.ONE, v.ONE_MINUS_SRC_ALPHA, v.ONE, v.ONE_MINUS_SRC_ALPHA), e.setColorMask(!0, !0, !0, !0), this._blitRenderer.render(e, t, i, r), this._currentPipelineStateNeedsUpdate = !0;
  }
  getPostProcessingEffects(e) {
    return this._effectsManager.getPostProcessingEffects(e);
  }
  updateFBOs(e, t) {
    if (e !== this._lastWidth || t !== this._lastHeight) {
      if (this._lastWidth = e, this._lastHeight = t, this._fbos) {
        let a;
        for (a in this._fbos) this._fbos[a].resize(e, t);
        return;
      }
      const i = new z(e, t);
      i.samplingMode = L.NEAREST, i.wrapMode = R.CLAMP_TO_EDGE;
      const r = new He(qe.DEPTH_STENCIL, e, t);
      this._stencilBuf = new Qi(this.context, r), this._fbos = { output: new D(this.context, i, this._stencilBuf), effect0: new D(this.context, i, this._stencilBuf) };
    }
  }
  _applyEffects(e, t, i) {
    const { context: r } = e, a = this._effectsManager.getPostProcessingEffects(t);
    for (const { postProcessingEffect: s, effect: n } of a) r.bindFramebuffer(i), s.draw(e, i, n);
    this._currentPipelineStateNeedsUpdate = !0;
  }
  setShader(e) {
    this._shaderState.shader = e.shader, this._shaderState.uniforms = e.uniforms, this._shaderState.defines = e.defines, this._shaderState.optionalAttributes = e.optionalAttributes, this._shaderState.useComputeBuffer = e.useComputeBuffer ?? !1;
  }
  setPipelineState(e) {
    e !== this._currentPipelineState && (this._currentPipelineState = e, this._currentPipelineStateNeedsUpdate = !0);
  }
  submitDraw(e, t) {
    const { instance: i } = t, r = i.instanceId, { shader: a, uniforms: s, defines: n, optionalAttributes: o, useComputeBuffer: l } = this._shaderState, h = t.target.getMesh(r), c = { useComputeBuffer: l, locationInfo: a.locationInfo, computeAttributeMap: a.computeAttributes }, d = h.getLayout(c);
    if (d == null) return null;
    const { primitive: p, count: _, offset: m } = h.getDrawArgs(ne.TRIANGLES, t.count, t.start * Uint32Array.BYTES_PER_ELEMENT, l), g = this._programCache.getProgram(a, d, s, n ?? {}, o ?? {});
    g.setUniforms(s), g.bind(e), this.updatePipelineState(e), this._updateStencilRef(e, t.target);
    const y = h.getVAO(e, a.locationInfo, c);
    return e.bindVAO(y), e.drawElements(p, _, De.UNSIGNED_INT, m), e.bindVAO(null), g.cleanupTemporaryTextures(), { vertexShader: g.vertexShader, fragmentShader: g.fragmentShader };
  }
  submitDrawQuad(e) {
    const { shader: t, uniforms: i, defines: r, optionalAttributes: a } = this._shaderState, s = this._programCache.getProgram(t, this._quadMesh.layout, i, r ?? {}, a ?? {});
    s.setUniforms(i), s.bind(e), this.updatePipelineState(e), this._updateStencilRef(e, null), this._quadMesh.draw(), e.bindVAO(null), s.cleanupTemporaryTextures();
  }
  submitDrawMesh(e, t, i) {
    const { shader: r, uniforms: a, defines: s, optionalAttributes: n } = this._shaderState, o = this._programCache.getProgram(r, t.layout, a, s ?? {}, n ?? {});
    if (o.setUniforms(a), o.bind(e), this.updatePipelineState(e), this._updateStencilRef(e, null), i) for (const l of i) t.bind(e, l), t.draw(e);
    else for (let l = 0; l < t.parts.length; l++) t.bind(e, l), t.draw(e);
    t.unbind(e), o.cleanupTemporaryTextures();
  }
  updatePipelineState(e) {
    this._currentPipelineStateNeedsUpdate && (this._currentPipelineStateNeedsUpdate = !1, this._updatePipelineState(e));
  }
  _updatePipelineState(e) {
    if (this._currentPipelineState == null) throw new Error("Pipeline state not defined. Call setPipelineState before calling submitDraw ");
    const { color: t, depth: i, stencil: r } = this._currentPipelineState;
    if (t) {
      const { blendMode: a, write: s } = t;
      switch (e.setColorMask(...s), e.setBlendingEnabled(!0), e.setBlendEquation(ut.ADD), a) {
        case "composite":
          e.setBlendFunctionSeparate(v.ONE, v.ONE_MINUS_SRC_ALPHA, v.ONE, v.ONE_MINUS_SRC_ALPHA);
          break;
        case "additive":
          e.setBlendFunctionSeparate(v.ONE, v.ONE, v.ONE, v.ONE);
          break;
        case "custom": {
          const { blendParameters: n } = t, { dstAlpha: o, dstRGB: l, srcAlpha: h, srcRGB: c } = n;
          e.setBlendFunctionSeparate(c, l, h, o);
          break;
        }
        case "delete":
          e.setBlendEquation(ut.REVERSE_SUBTRACT), e.setBlendFunctionSeparate(v.ONE, v.ONE_MINUS_SRC_ALPHA, v.ONE, v.ONE_MINUS_SRC_ALPHA);
      }
    }
    if (i) {
      const { test: a, write: s } = i;
      s ? (e.setDepthWriteEnabled(!0), e.setDepthRange(s.zNear, s.zFar)) : e.setDepthWriteEnabled(!1), a ? (e.setDepthTestEnabled(!0), e.setDepthFunction(a)) : e.setDepthTestEnabled(!1);
    } else e.setDepthTestEnabled(!1), e.setDepthWriteEnabled(!1);
    if (r) {
      const { test: a, write: s } = r;
      if (a) {
        const { compare: n, mask: o, op: l, ref: h } = a;
        e.setStencilTestEnabled(!0), typeof h != "function" && e.setStencilFunctionSeparate(Be.FRONT_AND_BACK, n, h, o), e.setStencilOpSeparate(Be.FRONT_AND_BACK, l.fail, l.zFail, l.zPass);
      } else e.setStencilTestEnabled(!1);
      if (s) {
        const { mask: n } = s;
        e.setStencilWriteMask(n);
      } else e.setStencilWriteMask(0);
    } else e.setStencilTestEnabled(!1), e.setStencilWriteMask(0);
  }
  _updateStencilRef(e, t) {
    if (this._currentPipelineState == null) throw new Error("Pipeline state not defined. Call setPipelineState before calling submitDraw ");
    const { stencil: i } = this._currentPipelineState;
    if (i) {
      const { test: r } = i;
      if (r) {
        const { compare: a, mask: s, ref: n } = r;
        typeof n == "function" && e.setStencilFunctionSeparate(Be.FRONT_AND_BACK, a, n(t), s);
      }
    }
  }
}
function Ct(u, e, t, i) {
  return u !== $.LABEL_ALPHA && u !== $.LABEL && u !== $.HIGHLIGHT && (i !== 1 || e != null && e !== "normal" || t != null && t.length > 0);
}
let Es = class {
  constructor() {
    this._candidateTiles = [];
  }
  schedule(e) {
    this._candidateTiles.includes(e) || this._candidateTiles.push(e);
  }
  reshuffle(e) {
    const t = [];
    for (const i of this._candidateTiles) e > 0 ? (i.reshuffle(), e--) : t.push(i);
    this._candidateTiles = t;
  }
};
const Rs = 2e3;
class Ca extends Ni {
  constructor(e, t) {
    super(), this._trash = /* @__PURE__ */ new Set(), this._renderRemainingTime = 0, this._lastFrameRenderTime = 0, this._renderRequested = _i(!1), this.stage = this, this._stationary = !0, this._reshuffleManager = new Es(), this._canvas = new yr(e), this.context = new tr(this._canvas.gl, t.contextOptions ?? {}), this.painter = new Cs(this.context, this), this._cimAnalyzer = new mr(this.painter.textureManager.resourceManager), U("esri-2d-profiler") && (this._debugOutput = document.createElement("div"), this._debugOutput.setAttribute("style", "margin: 24px 64px; position: absolute; color: red;"), e.appendChild(this._debugOutput));
    const i = () => this._highlightGradient;
    this._renderParameters = { drawPhase: 0, state: this.state, pixelRatio: window.devicePixelRatio, stationary: !1, globalOpacity: 1, blendMode: null, deltaTime: -1, time: 0, inFadeTransition: !1, effects: null, context: this.context, painter: this.painter, timeline: t.timeline || new mi(), renderingOptions: t.renderingOptions, requestRender: () => this.requestRender(), allowDelayedRender: !1, requireFBO: !1, profiler: new Yi(this.context, this._debugOutput), dataUploadCounter: 0, get highlightGradient() {
      return i();
    }, reshuffleManager: this._reshuffleManager, backgroundColor: t.backgroundColor }, this._taskHandle = fi({ render: (r) => this.renderFrame(r) }), this._taskHandle.pause(), this._lostWebGLContextHandle = this._canvas.events.on("webgl-context-lost", (r) => this.emit("webgl-error", { error: new Z("webgl-context-lost", r.statusMessage) })), this._bufferPool = new Gi(), ur();
  }
  destroy() {
    dr(this.context), this.removeAllChildren(), this._emptyTrash(), this._taskHandle = et(this._taskHandle), this._lostWebGLContextHandle = et(this._lostWebGLContextHandle), this._canvas.destroy(), this._debugOutput?.parentNode?.removeChild(this._debugOutput), this._bufferPool.destroy(), this.painter.dispose(), this.context.dispose(), this._canvas = null;
  }
  get textureManager() {
    return this.painter.textureManager;
  }
  get backgroundColor() {
    return this._renderParameters.backgroundColor;
  }
  set backgroundColor(e) {
    this._renderParameters.backgroundColor = e, this.requestRender();
  }
  get bufferPool() {
    return this._bufferPool;
  }
  get cimAnalyzer() {
    return this._cimAnalyzer;
  }
  get renderingOptions() {
    return this._renderingOptions;
  }
  set renderingOptions(e) {
    this._renderingOptions = e, this.requestRender();
  }
  get renderRequested() {
    return this._renderRequested.value;
  }
  get state() {
    return this._state;
  }
  set state(e) {
    this._state = e, this.requestRender();
  }
  get stationary() {
    return this._stationary;
  }
  set stationary(e) {
    this._stationary !== e && (this._stationary = e, this.requestRender());
  }
  trashDisplayObject(e) {
    this._trash.add(e), this.requestRender();
  }
  untrashDisplayObject(e) {
    return this._trash.delete(e);
  }
  requestRender() {
    this._renderRemainingTime = Rs, this.renderRequested || (this._renderRequested.value = !0, this._taskHandle.resume());
  }
  renderFrame(e) {
    const t = this._lastFrameRenderTime ? e.time - this._lastFrameRenderTime : 0;
    this._renderRemainingTime -= t, this._renderRemainingTime <= 0 && this._taskHandle.pause(), this._lastFrameRenderTime = e.time, this._renderRequested.value = !1, this._renderParameters.state = this._state, this._renderParameters.stationary = this.stationary, this._renderParameters.pixelRatio = window.devicePixelRatio, this._renderParameters.globalOpacity = 1, this._renderParameters.time = e.time, this._renderParameters.deltaTime = e.deltaTime, this._renderParameters.effects = null, this.processRender(this._renderParameters), this._emptyTrash();
  }
  _createTransforms() {
    return { displayViewScreenMat3: Ue() };
  }
  renderChildren(e) {
    for (const t of this.children) t.beforeRender(e);
    this._reshuffleManager.reshuffle($i), this._canvas.render(e, () => this._renderChildren(this.children, e));
    for (const t of this.children) t.afterRender(e);
  }
  _renderChildren(e, t) {
    const i = this.context;
    this.painter.textureUploadManager.upload(), i.resetInfo(), t.profiler.recordStart("drawLayers"), t.dataUploadCounter = 0, this.painter.beforeRenderPhases(t, t.backgroundColor, this.state.padding), t.drawPhase = $.MAP;
    for (const r of e) r.processRender(t);
    if (this.children.some((r) => r.hasHighlight)) {
      t.drawPhase = $.HIGHLIGHT;
      for (const r of e) r.processRender(t);
    }
    if (this.children.some((r) => r.hasLabels)) {
      t.drawPhase = $.LABEL;
      for (const r of e) r.processRender(t);
    }
    if (U("esri-tiles-debug")) {
      t.drawPhase = $.DEBUG;
      for (const r of e) r.processRender(t);
    }
    this.painter.afterRenderPhases(t), t.profiler.recordEnd("drawLayers"), i.logInfo();
  }
  doRender(e) {
    const t = this.context, { state: i, pixelRatio: r } = e;
    this._canvas.resize(e), t.setViewport(0, 0, r * i.size[0], r * i.size[1]), t.setDepthWriteEnabled(!0), t.setStencilWriteMask(255), this.renderChildren(e);
  }
  async takeScreenshot(e, t, i, r) {
    const a = Math.round(this.state.size[0] * e.resolutionScale), s = Math.round(this.state.size[1] * e.resolutionScale), n = e.resolutionScale, o = this.context, l = this._state.clone();
    if (r != null) {
      const f = l.viewpoint;
      l.viewpoint.rotation = r, l.viewpoint = f;
    }
    const h = { ...this._renderParameters, drawPhase: null, globalOpacity: 1, stationary: !0, state: l, pixelRatio: n, time: performance.now(), deltaTime: 0, blendMode: null, effects: null, inFadeTransition: !1, backgroundColor: i }, c = new z(a, s);
    c.wrapMode = R.CLAMP_TO_EDGE, c.internalFormat = Zi.RGBA8, c.isImmutable = !0;
    const d = new D(o, c, new He(qe.DEPTH_STENCIL, a, s)), p = o.getBoundFramebufferObject(), _ = o.getViewport();
    o.bindFramebuffer(d), o.setViewport(0, 0, a, s), this._renderChildren(t ?? this.children, h);
    const m = this._readbackScreenshot(d, { ...e.cropArea, y: s - (e.cropArea.y + e.cropArea.height) });
    o.bindFramebuffer(p), o.setViewport(_.x, _.y, _.width, _.height), this.requestRender();
    const g = await m;
    let y;
    return e.outputScale === 1 ? y = g : (y = new ImageData(Math.round(g.width * e.outputScale), Math.round(g.height * e.outputScale)), gi(g, y)), d.dispose(), y;
  }
  async _readbackScreenshot(e, t) {
    const i = rr(t.width, t.height, document.createElement("canvas"));
    return await e.readPixelsAsync(t.x, t.y, t.width, t.height, E.RGBA, je.UNSIGNED_BYTE, new Uint8Array(i.data.buffer)), i;
  }
  _emptyTrash() {
    for (; this._trash.size > 0; ) {
      const e = Array.from(this._trash);
      this._trash.clear();
      for (const t of e) t.processDetach();
    }
  }
}
async function zs(u) {
  const e = import("./mask-svg-DxA9o6hM.js"), t = import("./overlay-svg-C7fxD_NX.js"), i = pt((await e).default, { signal: u }), r = pt((await t).default, { signal: u }), a = { mask: await i, overlay: await r };
  return Ne(u), a;
}
class Ea extends Ui {
  constructor() {
    super(), this._handles = new yi(), this._resourcePixelRatio = 1, this.visible = !1;
  }
  destroy() {
    this._handles = vi(this._handles), this._disposeRenderResources(), this._resourcesTask = bi(this._resourcesTask);
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(e) {
    this._backgroundColor = e, this.requestRender();
  }
  get magnifier() {
    return this._magnifier;
  }
  set magnifier(e) {
    this._magnifier = e, this._handles.removeAll(), this._handles.add([Re(() => e.version, () => {
      this.visible = e.visible && e.position != null && e.size > 0, this.requestRender();
    }, wi), Re(() => [e.maskUrl, e.overlayUrl], () => this._reloadResources()), Re(() => e.size, () => {
      this._disposeRenderResources(), this.requestRender();
    })]);
  }
  _createTransforms() {
    return { displayViewScreenMat3: Ue() };
  }
  doRender(e) {
    const t = e.context;
    if (!this._resourcesTask) return void this._reloadResources();
    if (e.drawPhase !== $.MAP || !this._canRender()) return;
    this._updateResources(e);
    const i = this._magnifier;
    if (i.position == null) return;
    const r = e.pixelRatio, a = i.size * r, s = 1 / i.factor, n = Math.ceil(s * a);
    this._readbackTexture.resize(n, n);
    const { size: o } = e.state, l = r * o[0], h = r * o[1], c = 0.5 * n, d = 0.5 * n, p = tt(r * i.position.x, c, l - c - 1), _ = tt(h - r * i.position.y, d, h - d - 1);
    t.setBlendingEnabled(!0);
    const m = p - c, g = _ - d, y = this._readbackTexture;
    t.bindTexture(y, 0), t.gl.copyTexImage2D(y.descriptor.target, 0, y.descriptor.pixelFormat, m, g, n, n, 0);
    const f = this.backgroundColor, M = f ? [f.a * f.r / 255, f.a * f.g / 255, f.a * f.b / 255, f.a] : [1, 1, 1, 1], w = (p + i.offset.x * r) / l * 2 - 1, x = (_ - i.offset.y * r) / h * 2 - 1, b = a / l * 2, T = a / h * 2, S = this._program;
    t.bindVAO(this._vertexArrayObject), t.bindTexture(this._overlayTexture, 6), t.bindTexture(this._maskTexture, 7), t.useProgram(S), S.setUniform4fv("u_background", M), S.setUniform1i("u_readbackTexture", 0), S.setUniform1i("u_overlayTexture", 6), S.setUniform1i("u_maskTexture", 7), S.setUniform4f("u_drawPos", w, x, b, T), S.setUniform1i("u_maskEnabled", i.maskEnabled ? 1 : 0), S.setUniform1i("u_overlayEnabled", i.overlayEnabled ? 1 : 0), t.setStencilTestEnabled(!1), t.setColorMask(!0, !0, !0, !0), t.drawArrays(ne.TRIANGLE_STRIP, 0, 4), t.bindVAO();
  }
  _canRender() {
    return this.mask && this.overlay && this._magnifier != null;
  }
  _reloadResources() {
    this._resourcesTask && this._resourcesTask.abort();
    const e = this._magnifier != null ? this._magnifier.maskUrl : null, t = this._magnifier != null ? this._magnifier.overlayUrl : null;
    this._resourcesTask = xi(async (i) => {
      const r = e == null || t == null ? zs(i) : null, a = e != null ? de(e, { responseType: "image", signal: i }).then((l) => l.data) : r.then((l) => l.mask), s = t != null ? de(t, { responseType: "image", signal: i }).then((l) => l.data) : r.then((l) => l.overlay), [n, o] = await Promise.all([a, s]);
      this.mask = n, this.overlay = o, this._disposeRenderResources(), this.requestRender();
    });
  }
  _disposeRenderResources() {
    this._readbackTexture = P(this._readbackTexture), this._overlayTexture = P(this._overlayTexture), this._maskTexture = P(this._maskTexture), this._vertexArrayObject = P(this._vertexArrayObject), this._program = P(this._program);
  }
  _updateResources(e) {
    if (e.pixelRatio !== this._resourcePixelRatio && this._disposeRenderResources(), this._readbackTexture) return;
    const t = e.context;
    this._resourcePixelRatio = e.pixelRatio;
    const i = Math.ceil(this._magnifier.size * e.pixelRatio);
    this._program = Ki(t);
    const r = new Uint16Array([0, 1, 0, 0, 1, 1, 1, 0]), a = Ji.attributes;
    this._vertexArrayObject = new Ve(t, a, Hi, { geometry: Ge.createVertex(t, We.STATIC_DRAW, r) }), this.overlay.width = i, this.overlay.height = i;
    const s = new z();
    s.internalFormat = E.RGBA, s.wrapMode = R.CLAMP_TO_EDGE, s.samplingMode = L.NEAREST, s.flipped = !0, s.preMultiplyAlpha = !Mi(this.overlay.src) || !e.context.driverTest.svgPremultipliesAlpha.result, this._overlayTexture = new G(t, s, this.overlay), this.mask.width = i, this.mask.height = i, s.pixelFormat = s.internalFormat = E.ALPHA, this._maskTexture = new G(t, s, this.mask);
    const n = 1 / this._magnifier.factor;
    s.pixelFormat = s.internalFormat = E.RGBA, s.width = s.height = Math.ceil(n * i), s.samplingMode = L.LINEAR, s.flipped = !1, this._readbackTexture = new G(t, s);
  }
}
export {
  $a as GraphicContainer,
  Aa as GraphicsView2D,
  Fa as LabelManager,
  Ea as MagnifierView2D,
  Ba as MapViewNavigation,
  Ca as Stage
};
//# sourceMappingURL=mapViewDeps-tGoQQN9C.js.map
