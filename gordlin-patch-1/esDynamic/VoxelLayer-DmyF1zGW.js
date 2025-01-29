import { cq as je, ch as ge, fR as ze, nO as ve, lm as fe, ci as Pe, cj as Y, dS as A, jd as $, je as R, N as e, O as i, jc as ee, P as d, b_ as g, eb as _e, gw as z, ax as B, V as c, bq as te, ay as Z, nP as H, ag as X, bh as $e, C as L, J as Me, cr as Be, nQ as Ee, a6 as ne, iT as Oe, hP as Ce, cu as ke, ew as Ue, dX as Je, dY as We, dZ as Ge, d_ as Xe, ex as Ye, ey as Ze, mA as He, a1 as Qe, s as le, aU as Re, dH as E, g4 as Ke, e1 as et, e2 as tt, d$ as be, Z as it, e8 as ot } from "./main-BEi6lHs4.js";
import { L as st } from "./SceneService-gM_aPGXM.js";
import { j as rt } from "./persistable-DxI5DFh3.js";
import { I as ae, x as nt } from "./quat-DytykOB-.js";
import { e as se } from "./quatf64-DxbQqBtW.js";
const f = Pe(), Se = se(), xe = se(), we = se(), Ie = Y(0, 0, 1), lt = Y(0, 1, 0), at = Y(1, 0, 0);
function O(o) {
  je(f, o), ge(f, f);
  const t = Math.atan2(f[1], f[0]), s = ae(se(), Ie, -t);
  ze(f, f, s);
  const r = -1 * Math.atan2(f[2], f[0]);
  return [ve(t) + 270, ve(r) + 90];
}
function ie(o, t) {
  return ae(xe, Ie, fe(o - 270)), ae(we, lt, fe(t - 90)), nt(Se, xe, we), je(f, at), ze(f, f, Se), ge(f, f), [f[0], f[1], f[2]];
}
let I = class extends A(g) {
  constructor(t) {
    super(t), this.enabled = !0, this.label = "", this.normal = null, this.point = null;
  }
  get orientation() {
    if (!Array.isArray(this.normal) || this.normal.length !== 3) return 0;
    const [t, s] = O(this.normal);
    return $.normalize(R(t), 0, !0);
  }
  set orientation(t) {
    const s = ie(t, this.tilt);
    this._set("normal", s), this._set("orientation", t);
  }
  get tilt() {
    if (!Array.isArray(this.normal) || this.normal.length !== 3) return 0;
    const [t, s] = O(this.normal);
    return $.normalize(R(s), 0, !0);
  }
  set tilt(t) {
    const s = ie(this.orientation, t);
    this._set("normal", s), this._set("tilt", t);
  }
};
e([i({ type: Boolean, json: { write: !0 } })], I.prototype, "enabled", void 0), e([i({ type: String, json: { write: !0 } })], I.prototype, "label", void 0), e([i({ type: Number, json: { read: !1 }, clonable: !1, range: { min: 0, max: 360 } }), ee((o) => $.normalize(R(o), 0, !0))], I.prototype, "orientation", null), e([i({ type: Number, json: { read: !1 }, clonable: !1, range: { min: 0, max: 360 } }), ee((o) => $.normalize(R(o), 0, !0))], I.prototype, "tilt", null), e([i({ type: [Number], json: { write: !0 } })], I.prototype, "normal", void 0), e([i({ type: [Number], json: { write: !0 } })], I.prototype, "point", void 0), I = e([d("esri.layers.voxel.VoxelSlice")], I);
const oe = I;
let S = class extends A(g) {
  constructor() {
    super(...arguments), this.enabled = !0, this.href = null, this.id = null, this.label = "", this.normal = null, this.point = null, this.sizeInPixel = null, this.slices = null, this.timeId = 0, this.variableId = null;
  }
  get orientation() {
    if (!Array.isArray(this.normal) || this.normal.length !== 3) return 0;
    const [t, s] = O(this.normal);
    return $.normalize(R(t), 0, !0);
  }
  get tilt() {
    if (!Array.isArray(this.normal) || this.normal.length !== 3) return 0;
    const [t, s] = O(this.normal);
    return $.normalize(R(s), 0, !0);
  }
};
e([i({ type: Boolean, json: { default: !0, write: !0 } })], S.prototype, "enabled", void 0), e([i({ type: String, json: { origins: { service: { read: _e } }, write: { enabled: !0, isRequired: !0 } } }), rt({ origins: ["web-scene"], type: "resource", prefix: "sections", compress: !0 })], S.prototype, "href", void 0), e([i({ type: z, json: { write: { enabled: !0, isRequired: !0 } } })], S.prototype, "id", void 0), e([i({ type: String, json: { write: !0 } })], S.prototype, "label", void 0), e([i({ type: Number, clonable: !1, readOnly: !0, range: { min: 0, max: 360 } })], S.prototype, "orientation", null), e([i({ type: Number, clonable: !1, readOnly: !0, range: { min: 0, max: 360 } })], S.prototype, "tilt", null), e([i({ type: [Number], json: { write: { enabled: !0, isRequired: !0 } } })], S.prototype, "normal", void 0), e([i({ type: [Number], json: { write: { enabled: !0, isRequired: !0 } } })], S.prototype, "point", void 0), e([i({ type: [z], json: { write: { enabled: !0, isRequired: !0 } } })], S.prototype, "sizeInPixel", void 0), e([i({ type: [oe], json: { write: !0 } })], S.prototype, "slices", void 0), e([i({ type: z, json: { default: 0, write: !0 } })], S.prototype, "timeId", void 0), e([i({ type: z, json: { write: { enabled: !0, isRequired: !0 } } })], S.prototype, "variableId", void 0), S = e([d("esri.layers.voxel.VoxelSection")], S);
const pe = S;
let k = class extends g {
  constructor() {
    super(...arguments), this.diffuseFactor = 0.5, this.specularFactor = 0.5;
  }
};
e([i({ type: Number, range: { min: 0, max: 1 }, json: { default: 0.5, write: !0 } })], k.prototype, "diffuseFactor", void 0), e([i({ type: Number, range: { min: 0, max: 1 }, json: { default: 0.5, write: !0 } })], k.prototype, "specularFactor", void 0), k = e([d("esri.layers.voxel.VoxelSimpleShading")], k);
const Ne = k;
let N = class extends g {
  constructor() {
    super(...arguments), this.continuity = null, this.hasNoData = !1, this.noData = 0, this.offset = 0, this.scale = 1, this.type = null;
  }
};
e([i({ type: ["discrete", "continuous"], json: { write: !0 } })], N.prototype, "continuity", void 0), e([i({ type: Boolean, json: { write: !0 } })], N.prototype, "hasNoData", void 0), e([i({ type: Number, json: { write: !0 } })], N.prototype, "noData", void 0), e([i({ type: Number, json: { write: !0 } })], N.prototype, "offset", void 0), e([i({ type: Number, json: { write: !0 } })], N.prototype, "scale", void 0), e([i({ type: String, json: { write: { enabled: !0, isRequired: !0 } } })], N.prototype, "type", void 0), N = e([d("esri.layers.voxel.VoxelFormat")], N);
const Ve = N;
let j = class extends g {
  constructor() {
    super(...arguments), this.id = null, this.description = "", this.name = null, this.originalFormat = null, this.renderingFormat = null, this.unit = "", this.volumeId = 0, this.type = null;
  }
};
e([i({ type: Number, json: { write: { enabled: !0, isRequired: !0 } } })], j.prototype, "id", void 0), e([i({ type: String, json: { write: !0 } })], j.prototype, "description", void 0), e([i({ type: String, json: { write: { enabled: !0, isRequired: !0 } } })], j.prototype, "name", void 0), e([i({ type: Ve, json: { write: !0 } })], j.prototype, "originalFormat", void 0), e([i({ type: Ve, json: { write: { enabled: !0, isRequired: !0 } } })], j.prototype, "renderingFormat", void 0), e([i({ type: String, json: { write: !0 } })], j.prototype, "unit", void 0), e([i({ type: Number, json: { write: !0 } })], j.prototype, "volumeId", void 0), e([i({ type: ["stc-hot-spot-results", "stc-cluster-outlier-results", "stc-estimated-bin", "generic-nearest-interpolated"], json: { write: !0 } })], j.prototype, "type", void 0), j = e([d("esri.layers.voxel.VoxelVariable")], j);
const pt = j;
let F = class extends A(g) {
  constructor() {
    super(...arguments), this.color = B.fromArray([0, 0, 0, 0]), this.value = 0, this.enabled = !0, this.label = "", this.colorLocked = !1;
  }
};
e([i({ type: B, json: { type: [z], write: { enabled: !0, isRequired: !0 } } })], F.prototype, "color", void 0), e([i({ type: Number, json: { write: { enabled: !0, isRequired: !0 } } })], F.prototype, "value", void 0), e([i({ type: Boolean, json: { default: !0, write: !0 } })], F.prototype, "enabled", void 0), e([i({ type: String, json: { write: !0 } })], F.prototype, "label", void 0), e([i({ type: Boolean, json: { default: !1, write: !0 } })], F.prototype, "colorLocked", void 0), F = e([d("esri.layers.voxel.VoxelIsosurface")], F);
const Te = F;
let U = class extends A(g) {
  constructor() {
    super(...arguments), this.color = null, this.position = 0;
  }
};
e([i({ type: B, json: { type: [z], write: { enabled: !0, isRequired: !0 } } })], U.prototype, "color", void 0), e([i({ type: Number, json: { write: { enabled: !0, isRequired: !0 } } })], U.prototype, "position", void 0), U = e([d("esri.layers.voxel.VoxelColorStop")], U);
const ue = U;
let J = class extends A(g) {
  constructor() {
    super(...arguments), this.opacity = 1, this.position = 0;
  }
};
e([i({ type: Number, json: { name: "alpha", write: { enabled: !0, isRequired: !0 } } })], J.prototype, "opacity", void 0), e([i({ type: Number, json: { write: { enabled: !0, isRequired: !0 } } })], J.prototype, "position", void 0), J = e([d("esri.layers.voxel.VoxelOpacityStop")], J);
const ce = J;
let W = class extends A(g) {
  constructor() {
    super(...arguments), this.enabled = !1, this.range = null;
  }
};
e([i({ type: Boolean, json: { default: !1, write: !0 } })], W.prototype, "enabled", void 0), e([i({ type: [Number], json: { write: !0 } })], W.prototype, "range", void 0), W = e([d("esri.layers.voxel.VoxelRangeFilter")], W);
const ut = W;
var V;
(function(o) {
  o[o.Color = 1] = "Color", o[o.Alpha = 2] = "Alpha", o[o.Both = 3] = "Both";
})(V || (V = {}));
let T = class extends A(g) {
  constructor(t) {
    super(t), this.interpolation = null, this.stretchRange = null, this.rangeFilter = null, this._colorMapSize = 256, this.colorStops = new (c.ofType(ue))(), this.opacityStops = new (c.ofType(ce))();
  }
  set colorStops(t) {
    this._set("colorStops", te(t, this._get("colorStops"), c.ofType(ue)));
  }
  set opacityStops(t) {
    this._set("opacityStops", te(t, this._get("opacityStops"), c.ofType(ce)));
  }
  getPreviousNext(t, s, r) {
    let n = t;
    for (; --n > 0 && s[n].type !== r && s[n].type !== V.Both; ) ;
    let l = t;
    const y = s.length;
    for (; ++l < y && s[l].type !== r && s[l].type !== V.Both; ) ;
    return [n, l];
  }
  get rasterizedTransferFunction() {
    const t = [];
    if (this.colorStops.length < 2) return t;
    const s = [], r = [], n = 1e-5;
    for (const u of this.colorStops) {
      if (!u.color) return t;
      r.push({ color: { r: u.color.r, g: u.color.g, b: u.color.b, a: Math.round(255 * (1 - u.color.a)) }, position: u.position, type: V.Color });
    }
    if (this.opacityStops.length === 0) for (const u of r) s.push({ color: u.color, position: u.position });
    else {
      for (const p of this.opacityStops) {
        const h = Z(p.position, 0, 1), m = Math.round(255 * Z(1 - p.opacity, 0, 1));
        let b = !1;
        for (const v of r) if (v.type === V.Color && Math.abs(v.position - h) < n) {
          v.color.a = m, v.type = V.Both, b = !0;
          break;
        }
        b || r.push({ color: { r: 0, g: 0, b: 0, a: m }, position: p.position, type: V.Alpha });
      }
      r.sort((p, h) => p.position < h.position ? -1 : 1);
      const u = r.length;
      for (let p = 0; p < u; ++p) {
        const h = r[p];
        if (h.type !== V.Both) if (h.type === V.Color) {
          const [m, b] = this.getPreviousNext(p, r, V.Alpha);
          if (m !== -1 && b !== u) {
            const v = (h.position - r[m].position) / (r[b].position - r[m].position);
            h.color.a = Math.round(H(r[m].color.a, r[b].color.a, v));
          } else h.color.a = m !== -1 ? r[m].color.a : r[b].color.a;
        } else {
          const [m, b] = this.getPreviousNext(p, r, V.Color);
          if (m !== -1 && b !== u) {
            const v = (h.position - r[m].position) / (r[b].position - r[m].position), C = r[m].color, Fe = r[b].color;
            Q.forEach((re) => {
              h.color[re] = Math.round(H(C[re], Fe[re], v));
            });
          } else m !== -1 ? Q.forEach((v) => {
            h.color[v] = r[m].color[v];
          }) : Q.forEach((v) => {
            h.color[v] = r[b].color[v];
          });
        }
      }
      for (const p of r) s.push({ color: p.color, position: p.position });
    }
    s[0].position = 0, s[s.length - 1].position = 1;
    let l = 0, y = 1;
    for (let u = 0; u < this._colorMapSize; ++u) {
      const p = u / this._colorMapSize;
      for (; p > s[y].position; ) l = y++;
      const h = (p - s[l].position) / (s[y].position - s[l].position), m = s[l].color, b = s[y].color, v = new B();
      Q.forEach((C) => {
        v[C] = Math.round(H(m[C], b[C], h));
      }), v.a = Z(1 - H(m.a, b.a, h) / 255, 0, 1), t.push(v);
    }
    return t;
  }
  getColorForContinuousDataValue(t, s) {
    const r = this.rasterizedTransferFunction;
    if (this.colorStops.length < 2 || !Array.isArray(this.stretchRange) || this.stretchRange.length < 2 || r.length < 256) return null;
    let n = this.stretchRange[0], l = this.stretchRange[1];
    if (n > l) {
      const u = n;
      n = l, l = u;
    }
    t = Z(t, n, l);
    const y = r[Math.round((t - n) / (l - n) * (this._colorMapSize - 1))].clone();
    return s || (y.a = 1), y;
  }
};
e([i({ type: ["linear", "nearest"], json: { write: !0 } })], T.prototype, "interpolation", void 0), e([i({ type: [Number], json: { write: { enabled: !0, isRequired: !0 } } })], T.prototype, "stretchRange", void 0), e([i({ type: c.ofType(ue), json: { write: { enabled: !0, overridePolicy() {
  return { enabled: !!this.colorStops && this.colorStops.length > 0 };
} } } })], T.prototype, "colorStops", null), e([i({ type: c.ofType(ce), json: { read: { source: "alphaStops" }, write: { enabled: !0, target: "alphaStops", overridePolicy() {
  return { enabled: !!this.opacityStops && this.opacityStops.length > 0 };
} } } })], T.prototype, "opacityStops", null), e([i({ type: ut, json: { write: !0 } })], T.prototype, "rangeFilter", void 0), e([i({ type: [B], clonable: !1, json: { read: !1 } })], T.prototype, "rasterizedTransferFunction", null), T = e([d("esri.layers.voxel.VoxelTransferFunctionStyle")], T);
const ct = T, Q = ["r", "g", "b"];
let _ = class extends A(g) {
  constructor() {
    super(...arguments), this.color = B.fromArray([0, 0, 0, 0]), this.value = 0, this.enabled = !0, this.label = "";
  }
};
e([i({ type: B, json: { type: [z], write: { enabled: !0, isRequired: !0 } } })], _.prototype, "color", void 0), e([i({ type: z, json: { write: { enabled: !0, isRequired: !0 } } })], _.prototype, "value", void 0), e([i({ type: Boolean, json: { default: !0, write: !0 } })], _.prototype, "enabled", void 0), e([i({ type: String, json: { write: !0 } })], _.prototype, "label", void 0), _ = e([d("esri.layers.voxel.VoxelUniqueValue")], _);
const qe = _;
var ye;
let P = ye = class extends g {
  constructor(o) {
    super(o), this.variableId = 0, this.label = "", this.transferFunction = null, this.uniqueValues = null, this.isosurfaces = null, this.uniqueValues = new (c.ofType(qe))(), this.isosurfaces = new (c.ofType(Te))();
  }
  clone() {
    return new ye({ variableId: this.variableId, label: this.label, transferFunction: X(this.transferFunction), uniqueValues: X(this.uniqueValues), isosurfaces: X(this.isosurfaces) });
  }
};
e([i({ type: z, json: { write: { enabled: !0, isRequired: !0 } } })], P.prototype, "variableId", void 0), e([i({ type: String, json: { write: !0 } })], P.prototype, "label", void 0), e([i({ type: ct, json: { write: { enabled: !0, overridePolicy() {
  return { enabled: !this.uniqueValues || this.uniqueValues.length < 1 };
} } } })], P.prototype, "transferFunction", void 0), e([i({ type: c.ofType(qe), json: { write: { enabled: !0, overridePolicy() {
  return { enabled: !!this.uniqueValues && this.uniqueValues.length > 0 };
} } } })], P.prototype, "uniqueValues", void 0), e([i({ type: c.ofType(Te), json: { write: { enabled: !0, overridePolicy() {
  const o = !this.uniqueValues || this.uniqueValues.length < 1, t = !!this.isosurfaces && this.isosurfaces.length > 0;
  return { enabled: o && t };
} } } })], P.prototype, "isosurfaces", void 0), P = ye = e([d("esri.layers.voxel.VoxelVariableStyle")], P);
const De = P;
let K = class extends g {
  constructor() {
    super(...arguments), this.values = null;
  }
};
e([i({ type: [Number], json: { write: !0 } })], K.prototype, "values", void 0), K = e([d("esri.layers.voxel.VoxelIrregularSpacing")], K);
const yt = K;
let G = class extends g {
  constructor() {
    super(...arguments), this.scale = 1, this.offset = 0;
  }
};
e([i({ type: Number, json: { write: !0 } })], G.prototype, "scale", void 0), e([i({ type: Number, json: { write: !0 } })], G.prototype, "offset", void 0), G = e([d("esri.layers.voxel.VoxelRegularSpacing")], G);
const dt = G;
let x = class extends g {
  constructor() {
    super(...arguments), this.irregularSpacing = null, this.isPositiveUp = !0, this.isWrappedDateLine = !1, this.label = null, this.name = null, this.quantity = null, this.regularSpacing = null, this.size = 0, this.unit = null;
  }
  get isRegular() {
    return (this.irregularSpacing == null || this.irregularSpacing === void 0) && this.regularSpacing !== null;
  }
  getRange() {
    return this.isRegular ? [this.regularSpacing.offset, this.regularSpacing.offset + this.regularSpacing.scale * (this.size - 1)] : Array.isArray(this.irregularSpacing?.values) && this.irregularSpacing.values.length > 1 ? [this.irregularSpacing.values[0], this.irregularSpacing.values[this.irregularSpacing.values.length - 1]] : [0, 0];
  }
};
e([i({ type: yt, json: { write: !0 } })], x.prototype, "irregularSpacing", void 0), e([i({ type: Boolean, json: { write: !0 } })], x.prototype, "isPositiveUp", void 0), e([i({ type: Boolean, json: { write: !0 } })], x.prototype, "isWrappedDateLine", void 0), e([i({ type: String, json: { write: !0 } })], x.prototype, "label", void 0), e([i({ type: String, json: { write: !0 } })], x.prototype, "name", void 0), e([i({ type: String, json: { write: !0 } })], x.prototype, "quantity", void 0), e([i({ type: dt, json: { write: !0 } })], x.prototype, "regularSpacing", void 0), e([i({ type: Number, json: { write: !0 } })], x.prototype, "size", void 0), e([i({ type: String, json: { write: !0 } })], x.prototype, "unit", void 0), e([i({ type: Boolean, json: { read: !1 } })], x.prototype, "isRegular", null), x = e([d("esri.layers.voxel.VoxelDimension")], x);
const ht = x;
let w = class extends g {
  constructor(t) {
    super(t), this.id = 0, this.dimensions = null, this.spatialReference = $e.WGS84;
  }
  get zDimension() {
    if (!this.dimensions || !Array.isArray(this.dimensions) || this.dimensions.length !== 4) return -1;
    for (let t = 2; t < 4; ++t) if (this.dimensions[t].size > 0) return t;
    return -1;
  }
  get isValid() {
    return !!this.dimensions && !!Array.isArray(this.dimensions) && this.dimensions.length === 4 && !(this.dimensions[0].size < 1 || this.dimensions[1].size < 1) && !(this.zDimension === -1 || this.dimensions[this.zDimension].size < 1);
  }
  get originInLayerSpace3D() {
    if (!this.isValid || this.volumeType === "xyt") return [0, 0, 0];
    const t = this.dimensions[0].getRange(), s = this.dimensions[1].getRange(), r = this.dimensions[2], n = r.isRegular ? r.getRange() : [0, r.size];
    return [t[0], s[0], n[0]];
  }
  get voxelSizeInLayerSpaceSigned() {
    if (!this.isValid || this.volumeType === "xyt") return [0, 0, 0];
    const t = this.dimensions[0].getRange(), s = this.dimensions[1].getRange(), r = this.dimensions[2], n = r.isRegular ? r.getRange() : [0, r.size], l = [this.sizeInVoxels[0], this.sizeInVoxels[1], this.sizeInVoxels[2]];
    for (let y = 0; y < 3; ++y) l[y] < 2 ? l[y] = 1 : l[y] -= 1;
    return r.isRegular && !r.isPositiveUp && (l[2] *= -1), [(t[1] - t[0]) / l[0], (s[1] - s[0]) / l[1], (n[1] - n[0]) / l[2]];
  }
  get volumeType() {
    if (this.isValid) {
      const t = this.dimensions[2].size > 0, s = this.dimensions[3].size > 0;
      if (!t && s) return "xyt";
      if (t && s) return "xyzt";
    }
    return "xyz";
  }
  get sizeInVoxels() {
    if (!this.isValid) return [0, 0, 0];
    const t = this.zDimension;
    return [this.dimensions[0].size, this.dimensions[1].size, this.dimensions[t].size];
  }
  computeVoxelSpaceLocation(t) {
    if (!this.isValid) return [0, 0, 0];
    if (this.volumeType === "xyt") return L.getLogger(this).error("computeVoxelSpacePosition cannot be used with XYT volumes."), [0, 0, 0];
    if (!Me(this.spatialReference, t.spatialReference)) return L.getLogger(this).error("pos argument should have the same spatial reference as the VoxelLayer."), [0, 0, 0];
    const s = Y(t.x, t.y, t.z ?? 0);
    Be(s, s, this.originInLayerSpace3D), Ee(s, s, this.voxelSizeInLayerSpaceSigned);
    const r = this.dimensions[this.zDimension];
    if (!r.isRegular && Array.isArray(r.irregularSpacing?.values) && r.irregularSpacing.values.length > 1) {
      const n = t.z ?? 0, l = r.irregularSpacing.values, y = r.isPositiveUp ? 1 : -1, u = l.reduce((p, h) => Math.abs(y * h - n) < Math.abs(y * p - n) ? h : p);
      for (let p = 0; p < l.length; ++p) if (l[p] === u) {
        s[2] = p;
        break;
      }
    }
    return [s[0], s[1], s[2]];
  }
  computeLayerSpaceLocation(t) {
    if (!this.isValid) return new ne({ x: 0, y: 0, spatialReference: this.spatialReference });
    const s = Oe(t);
    if (Ce(s, s, this.voxelSizeInLayerSpaceSigned), ke(s, s, this.originInLayerSpace3D), this.volumeType === "xyt") return new ne({ x: s[0], y: s[1], spatialReference: this.spatialReference });
    const r = this.dimensions[this.zDimension];
    return r.isRegular || Array.isArray(r.irregularSpacing?.values) && (t[2] < 0 ? s[2] = r.irregularSpacing.values[0] : t[2] < r.irregularSpacing.values.length ? s[2] = r.irregularSpacing.values[t[2]] : s[2] = r.irregularSpacing.values[r.irregularSpacing.values.length - 1], r.isPositiveUp || (s[2] *= -1)), new ne({ x: s[0], y: s[1], z: s[2], spatialReference: this.spatialReference });
  }
};
e([i({ type: Number, json: { write: { enabled: !0, isRequired: !0 } } })], w.prototype, "id", void 0), e([i({ type: [ht], json: { write: { enabled: !0, isRequired: !0 } } })], w.prototype, "dimensions", void 0), e([i({ type: $e, json: { read: { enabled: !1 } } })], w.prototype, "spatialReference", void 0), e([i({ type: Number, json: { read: !1 } })], w.prototype, "zDimension", null), e([i({ type: [Boolean], json: { read: !1 } })], w.prototype, "isValid", null), e([i({ type: [Number], json: { read: !1 } })], w.prototype, "originInLayerSpace3D", null), e([i({ type: [Number], json: { read: !1 } })], w.prototype, "voxelSizeInLayerSpaceSigned", null), e([i({ type: ["xyz", "xyzt", "xyt"], json: { read: { enabled: !1 } } })], w.prototype, "volumeType", null), e([i({ type: [Number], json: { read: !1 } })], w.prototype, "sizeInVoxels", null), w = e([d("esri.layers.voxel.VoxelVolume")], w);
const Le = w;
var de;
let M = de = class extends g {
  constructor() {
    super(...arguments), this.apronWidth = 1, this.brickSize = [32, 32, 32], this.maxLodLevel = 0, this.nodeSize = [4, 4, 4];
  }
  isValid() {
    const o = new de();
    return o.apronWidth === this.apronWidth && o.maxLodLevel === this.maxLodLevel && !!this.brickSize && !!this.nodeSize && !(!Array.isArray(this.brickSize) || !Array.isArray(this.nodeSize)) && this.brickSize.length === 3 && this.nodeSize.length === 3 && this.brickSize[0] === 32 && this.brickSize[1] === 32 && this.brickSize[2] === 32 && this.nodeSize[0] === 4 && this.nodeSize[1] === 4 && this.nodeSize[2] === 4;
  }
};
e([i({ type: Number, json: { write: { enabled: !0, isRequired: !0 } } })], M.prototype, "apronWidth", void 0), e([i({ type: [Number], json: { write: { enabled: !0, isRequired: !0 } } })], M.prototype, "brickSize", void 0), e([i({ type: Number, json: { write: { enabled: !0, isRequired: !0 } } })], M.prototype, "maxLodLevel", void 0), e([i({ type: [Number], json: { write: { enabled: !0, isRequired: !0 } } })], M.prototype, "nodeSize", void 0), M = de = e([d("esri.layers.voxel.VoxelVolumeIndex")], M);
const mt = M;
let q = class extends A(g) {
  constructor(t) {
    super(t), this.enabled = !0, this.label = "", this.normal = null, this.point = null;
  }
  get orientation() {
    if (!Array.isArray(this.normal) || this.normal.length !== 3) return 0;
    const [t, s] = O(this.normal);
    return $.normalize(R(t), 0, !0);
  }
  set orientation(t) {
    const s = ie(t, this.tilt);
    this._set("normal", s), this._set("orientation", t);
  }
  get tilt() {
    if (!Array.isArray(this.normal) || this.normal.length !== 3) return 0;
    const [t, s] = O(this.normal);
    return $.normalize(R(s), 0, !0);
  }
  set tilt(t) {
    const s = ie(this.orientation, t);
    this._set("normal", s), this._set("tilt", t);
  }
};
e([i({ type: Boolean, json: { default: !0, write: !0 } })], q.prototype, "enabled", void 0), e([i({ type: String, json: { write: !0 } })], q.prototype, "label", void 0), e([i({ type: Number, json: { read: !1 }, clonable: !1, range: { min: 0, max: 360 } }), ee((o) => $.normalize(R(o), 0, !0))], q.prototype, "orientation", null), e([i({ type: Number, json: { read: !1 }, clonable: !1, range: { min: 0, max: 360 } }), ee((o) => $.normalize(R(o), 0, !0))], q.prototype, "tilt", null), e([i({ type: [Number], json: { write: !0 } })], q.prototype, "normal", void 0), e([i({ type: [Number], json: { write: !0 } })], q.prototype, "point", void 0), q = e([d("esri.layers.voxel.VoxelDynamicSection")], q);
const he = q;
var me;
let D = me = class extends g {
  constructor(o) {
    super(o), this.volumeId = 0, this.verticalExaggeration = 1, this.exaggerationMode = "scale-height", this.verticalOffset = 0, this.slices = new (c.ofType(oe))(), this.dynamicSections = new (c.ofType(he))();
  }
  set slices(o) {
    this._set("slices", te(o, this._get("slices"), c.ofType(oe)));
  }
  set dynamicSections(o) {
    this._set("dynamicSections", te(o, this._get("dynamicSections"), c.ofType(he)));
  }
  clone() {
    return new me({ volumeId: this.volumeId, verticalExaggeration: this.verticalExaggeration, exaggerationMode: this.exaggerationMode, verticalOffset: this.verticalOffset, slices: X(this.slices), dynamicSections: X(this.dynamicSections) });
  }
};
e([i({ type: z, json: { write: { enabled: !0, isRequired: !0 } } })], D.prototype, "volumeId", void 0), e([i({ type: Number, json: { default: 1, write: !0 } })], D.prototype, "verticalExaggeration", void 0), e([i({ type: ["scale-position", "scale-height"], json: { default: "scale-height", write: !0 } })], D.prototype, "exaggerationMode", void 0), e([i({ type: Number, json: { default: 0, write: !0 } })], D.prototype, "verticalOffset", void 0), e([i({ type: c.ofType(oe), json: { write: { enabled: !0, overridePolicy() {
  return { enabled: !!this.slices && this.slices.length > 0 };
} } } })], D.prototype, "slices", null), e([i({ type: c.ofType(he), json: { write: { enabled: !0, overridePolicy() {
  return { enabled: !!this.dynamicSections && this.dynamicSections.length > 0 };
} } } })], D.prototype, "dynamicSections", null), D = me = e([d("esri.layers.voxel.VoxelVolumeStyle")], D);
const Ae = D;
let a = class extends st(Ue(Je(We(Ge(Xe(Ye(Ze(ot)))))))) {
  constructor(o) {
    super(o), this.serviceRoot = "", this.operationalLayerType = "Voxel", this.legendEnabled = !0, this.title = null, this.sections = null, this.currentVariableId = 0, this.volumeStyles = null, this.renderMode = "volume", this.variableStyles = null, this.enableSlices = !0, this.enableSections = !0, this.enableDynamicSections = !0, this.enableIsosurfaces = !0, this.shading = new Ne(), this.opacity = 1, this.variables = new c(), this.volumes = new c(), this.index = null, this.minScale = 0, this.maxScale = 0, this.type = "voxel", this.version = { major: Number.NaN, minor: Number.NaN, versionString: "" }, this.fullExtent = null, this.popupEnabled = !1, this.test = null, this.volumeStyles = new (c.ofType(Ae))(), this.variableStyles = new (c.ofType(De))(), this.sections = new (c.ofType(pe))();
  }
  normalizeCtorArgs(o) {
    return o?.constantUpscaling && (this.test = { constantUpscaling: !0 }, delete o.constantUpscaling), o;
  }
  set url(o) {
    this._set("url", He(o, L.getLogger(this)));
  }
  load(o) {
    const t = o != null ? o.signal : null, s = this.loadFromPortal({ supportedTypes: ["Scene Service"] }, o).catch(Qe).then(() => this._fetchService(t)).then(() => this.serviceRoot = this.url);
    return this.addResolvingPromise(s), Promise.resolve(this);
  }
  read(o, t) {
    super.read(o, t);
    for (const s of this.volumes) s.spatialReference = this.spatialReference;
  }
  readVersion(o, t) {
    return super.parseVersionString(o);
  }
  validateLayer(o) {
    if (o.layerType && o.layerType !== this.operationalLayerType) throw new le("voxel-layer:layer-type-not-supported", "VoxelLayer does not support this layer type", { layerType: o.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor) || this.version.major < 3) throw new le("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "3.x" });
    if (this.version.major > 3) throw new le("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "3.x" });
  }
  readFullExtent(o, t, s) {
    if (o != null && typeof o == "object") {
      const r = Re.fromJSON(o, s);
      if (r.zmin === 0 && r.zmax === 0 && Array.isArray(t.volumes)) {
        const n = Le.fromJSON(t.volumes[0]);
        if (n.isValid && n.volumeType !== "xyt") {
          const l = n.dimensions[2];
          if (l.isRegular) {
            let y = l.regularSpacing.offset, u = l.regularSpacing.offset + l.regularSpacing.scale * (l.size - 1);
            if (y > u) {
              const p = y;
              y = u, u = p;
            }
            r.zmin = y, r.zmax = u;
          }
        }
      }
      return r;
    }
    return null;
  }
  get voxelFields() {
    const o = [new E({ name: "Voxel.ServiceValue", alias: "Value", domain: null, editable: !1, length: 128, type: "string" }), new E({ name: "Voxel.ServiceVariableLabel", alias: "Variable", domain: null, editable: !1, length: 128, type: "string" }), new E({ name: "Voxel.Position", alias: "Voxel Position", domain: null, editable: !1, length: 128, type: "string" })], t = this.getVolume(null);
    if (t != null) {
      if (t.volumeType === "xyzt" || t.volumeType === "xyt") {
        const s = new E({ name: "Voxel.ServiceLocalTime", alias: "Local Time", domain: null, editable: !1, length: 128, type: "string" });
        o.push(s);
        const r = new E({ name: "Voxel.ServiceNativeTime", alias: "Native Time", domain: null, editable: !1, length: 128, type: "string" });
        o.push(r);
      }
      if (t.volumeType !== "xyt") {
        const s = new E({ name: "Voxel.ServiceDepth", alias: "Depth", domain: null, editable: !1, length: 128, type: "string" });
        o.push(s);
      }
    }
    return o;
  }
  get popupTemplate() {
    return this.loaded ? this.createPopupTemplate() : null;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  createPopupTemplate(o) {
    const t = this.voxelFields, s = this.title;
    return Ke({ fields: t, title: s }, o);
  }
  getConfiguration() {
    const o = { layerType: this.operationalLayerType, version: this.version.versionString, name: this.title, spatialReference: this.spatialReference, fullExtent: this.fullExtent, volumes: this.volumes.toJSON(), variables: this.variables.toJSON(), index: this.index?.toJSON(), sections: this.getSections(), style: { volumeStyles: this.getVolumeStyles(), currentVariableId: this.currentVariableId, renderMode: this.renderMode, variableStyles: this.getVariableStyles(), enableSections: this.enableSections, enableDynamicSections: this.enableDynamicSections, enableIsosurfaces: this.enableIsosurfaces, enableSlices: this.enableSlices, shading: this.shading } };
    return o.index && this.index?.isValid() ? JSON.stringify(o) : "";
  }
  getVariableStyle(o) {
    let t = -1;
    if (t = o ?? this.currentVariableId, !this.variableStyles || t === -1) return null;
    const s = this.variableStyles.findIndex((r) => r.variableId === t);
    return s < 0 ? null : this.variableStyles.at(s);
  }
  getVariable(o) {
    let t = -1;
    if (t = o ?? this.currentVariableId, !this.variables || t === -1) return null;
    const s = this.variables.findIndex((r) => r.id === t);
    return s < 0 ? null : this.variables.at(s);
  }
  getVolume(o) {
    const t = this.getVariable(o);
    return t != null ? this.volumes.find(({ id: s }) => s === t.volumeId) : null;
  }
  getVolumeStyle(o) {
    const t = this.getVariable(o);
    return t != null ? this.volumeStyles.find(({ volumeId: s }) => s === t.volumeId) : null;
  }
  getColorForContinuousDataValue(o, t, s) {
    const r = this.getVariable(o);
    if (r == null || r.renderingFormat?.continuity !== "continuous" || !this.variableStyles) return null;
    const n = this.variableStyles.findIndex((y) => y.variableId === o);
    if (n < 0) return null;
    const l = this.variableStyles.at(n);
    return l?.transferFunction ? l.transferFunction.getColorForContinuousDataValue(t, s) : null;
  }
  getSections() {
    const o = [];
    for (const t of this.sections) o.push(new pe({ enabled: t.enabled, href: t.href, id: t.id, label: t.label, normal: t.normal, point: t.point, sizeInPixel: t.sizeInPixel, slices: t.slices, timeId: t.timeId, variableId: t.variableId }));
    return o;
  }
  getVariableStyles() {
    const o = [];
    for (const t of this.variableStyles) {
      const s = this._getVariable(t);
      if (s != null) {
        const r = t.clone();
        r.isosurfaces.length > 4 && (r.isosurfaces = r.isosurfaces.slice(0, 3), L.getLogger(this).error("A maximum of 4 isosurfaces are supported for Voxel Layers."));
        for (const n of r.isosurfaces) if (!n.colorLocked) {
          const l = this.getColorForContinuousDataValue(r.variableId, n.value, !1);
          l === null || l.equals(n.color) || (n.color = l);
        }
        if (s.renderingFormat.continuity === "continuous") (r.transferFunction === null || r.transferFunction.colorStops.length < 2) && L.getLogger(this).error(`VoxelVariableStyle for variable ${s.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`), r.transferFunction !== null && (Array.isArray(r.transferFunction.stretchRange) && r.transferFunction.stretchRange.length === 2 || (L.getLogger(this).error(`VoxelVariableStyle for variable ${s.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`), r.transferFunction.stretchRange = [0, 1], r.transferFunction.colorStops.removeAll()));
        else if (s.renderingFormat.continuity === "discrete") if (t.uniqueValues.length === 0) L.getLogger(this).error(`VoxelVariableStyle for variable ${s.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);
        else for (const n of t.uniqueValues) n.label !== null && n.label !== void 0 || n.value === null || n.value === void 0 || (n.label = n.value.toString());
        o.push(r);
      } else L.getLogger(this).error(`VoxelVariable ID=${t.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`);
    }
    return o;
  }
  getVolumeStyles() {
    const o = [];
    for (const t of this.volumeStyles) {
      const s = this._getVolumeFromVolumeId(t.volumeId);
      if (s != null) {
        const r = t.clone();
        for (const n of r.slices) this._isPlaneValid(n, [0, 1, s.zDimension], s.dimensions) || (n.enabled = !1, n.label = "invalid");
        for (const n of r.dynamicSections) this._isPlaneValid(n, [0, 1, s.zDimension], s.dimensions) || (n.enabled = !1, n.label = "invalid");
        o.push(r);
      } else L.getLogger(this).error(`VoxelVolume ID=${t.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`);
    }
    return o;
  }
  _getVariable(o) {
    const t = o.variableId;
    for (const s of this.variables) if (s.id === t) return s;
    return null;
  }
  _getVolumeFromVolumeId(o) {
    for (const t of this.volumes) if (t.id === o) return t;
    return null;
  }
  _isPlaneValid(o, t, s) {
    if (!o.point || !Array.isArray(o.point) || o.point.length !== 3 || !o.normal || !Array.isArray(o.normal) || o.normal.length !== 3) return !1;
    const r = Y(o.normal[0], o.normal[1], o.normal[2]);
    return ge(r, r), !(Math.abs(r[0]) + Math.abs(r[1]) + Math.abs(r[2]) < 1e-6) && (o.normal[0] = r[0], o.normal[1] = r[1], o.normal[2] = r[2], !0);
  }
};
e([i({ type: ["Voxel"] })], a.prototype, "operationalLayerType", void 0), e([i(et)], a.prototype, "legendEnabled", void 0), e([i({ json: { write: !0 } })], a.prototype, "title", void 0), e([i(tt)], a.prototype, "url", null), e([i({ type: c.ofType(pe), json: { origins: { "web-scene": { name: "layerDefinition.sections", write: !0 } } } })], a.prototype, "sections", void 0), e([i({ type: z, json: { origins: { "web-scene": { name: "layerDefinition.style.currentVariableId", write: { enabled: !0, isRequired: !0, ignoreOrigin: !0 } }, service: { name: "style.currentVariableId" } } } })], a.prototype, "currentVariableId", void 0), e([i({ type: c.ofType(Ae), json: { origins: { "web-scene": { name: "layerDefinition.style.volumeStyles", write: !0 }, service: { name: "style.volumeStyles" } } } })], a.prototype, "volumeStyles", void 0), e([i({ type: ["volume", "surfaces"], json: { origins: { "web-scene": { name: "layerDefinition.style.renderMode", write: !0 }, service: { name: "style.renderMode" } } } })], a.prototype, "renderMode", void 0), e([i({ type: c.ofType(De), json: { origins: { "web-scene": { name: "layerDefinition.style.variableStyles", write: !0 }, service: { name: "style.variableStyles" } } } })], a.prototype, "variableStyles", void 0), e([i({ type: Boolean, json: { origins: { "web-scene": { name: "layerDefinition.style.enableSlices", write: !0 }, service: { name: "style.enableSlices" } } } })], a.prototype, "enableSlices", void 0), e([i({ type: Boolean, json: { origins: { "web-scene": { name: "layerDefinition.style.enableSections", write: !0 }, service: { name: "style.enableSections" } } } })], a.prototype, "enableSections", void 0), e([i({ type: Boolean, json: { origins: { "web-scene": { name: "layerDefinition.style.enableDynamicSections", write: !0 }, service: { name: "style.enableDynamicSections" } } } })], a.prototype, "enableDynamicSections", void 0), e([i({ type: Boolean, json: { origins: { "web-scene": { name: "layerDefinition.style.enableIsosurfaces", write: !0 }, service: { name: "style.enableIsosurfaces" } } } })], a.prototype, "enableIsosurfaces", void 0), e([i({ type: Ne, json: { origins: { "web-scene": { name: "layerDefinition.style.shading", write: !0 }, service: { name: "style.shading" } } } })], a.prototype, "shading", void 0), e([i({ type: ["show", "hide"] })], a.prototype, "listMode", void 0), e([i({ type: Number, range: { min: 0, max: 1 }, nonNullable: !0, json: { read: !1, write: !1, origins: { "web-scene": { read: !1, write: !1 }, "portal-item": { read: !1, write: !1 } } } })], a.prototype, "opacity", void 0), e([i({ type: c.ofType(pt) })], a.prototype, "variables", void 0), e([i({ type: c.ofType(Le) })], a.prototype, "volumes", void 0), e([i({ type: mt })], a.prototype, "index", void 0), e([i({ type: Number, json: { name: "layerDefinition.minScale", write: !0, origins: { service: { read: !1, write: !1 } } } })], a.prototype, "minScale", void 0), e([i({ type: Number, json: { name: "layerDefinition.maxScale", write: !0, origins: { service: { read: !1, write: !1 } } } })], a.prototype, "maxScale", void 0), e([i({ json: { read: !1 }, readOnly: !0 })], a.prototype, "type", void 0), e([i({ readOnly: !0, json: { name: "serviceVersion" } })], a.prototype, "version", void 0), e([be("service", "version")], a.prototype, "readVersion", null), e([i({ type: Re })], a.prototype, "fullExtent", void 0), e([be("service", "fullExtent", ["fullExtent"])], a.prototype, "readFullExtent", null), e([i({ readOnly: !0, clonable: !1, json: { read: !1 } })], a.prototype, "voxelFields", null), e([i({ type: Boolean, json: { name: "disablePopup", read: { reader: (o, t) => !t.disablePopup }, write: { enabled: !0, ignoreOrigin: !0, writer(o, t, s) {
  t[s] = !o;
} }, origins: { "portal-item": { default: !0 }, "web-scene": { default: !0 } } } })], a.prototype, "popupEnabled", void 0), e([i({ type: it, json: { read: !1 } })], a.prototype, "popupTemplate", null), e([i({ readOnly: !0 })], a.prototype, "defaultPopupTemplate", null), a = e([d("esri.layers.VoxelLayer")], a);
const Pt = a;
export {
  Pt as default
};
//# sourceMappingURL=VoxelLayer-DmyF1zGW.js.map
