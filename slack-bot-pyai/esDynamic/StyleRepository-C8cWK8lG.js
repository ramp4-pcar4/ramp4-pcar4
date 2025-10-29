import { a as I, f as V, l as X } from "./StyleDefinition-CKpkeT8Q.js";
import { ax as b, m4 as qt, m5 as Kt, m6 as Wt, m7 as me, lS as we } from "./main-DhLeoxL5.js";
import { L as W } from "./enums-qHpGJ28Q.js";
import { p as x, i as vt, b as Pt, I as Ee, N as re, P as Ie } from "./GeometryUtils-DohtSXQP.js";
import { C as g } from "./enums-Do5C4ZjN.js";
import { t as v } from "./VertexElementDescriptor-BAy1DPb3.js";
import { S as be } from "./definitions-7ZaZRHRo.js";
let Te = class {
  constructor(t) {
    this._array = [], t <= 0 && console.error("strideInBytes must be positive!"), this._stride = t;
  }
  get array() {
    return this._array;
  }
  get index() {
    return 4 * this._array.length / this._stride;
  }
  get itemSize() {
    return this._stride;
  }
  get sizeInBytes() {
    return 4 * this._array.length;
  }
  reset() {
    this.array.length = 0;
  }
  toBuffer() {
    return new Uint32Array(this._array).buffer;
  }
  static i1616to32(t, e) {
    return 65535 & t | e << 16;
  }
  static i8888to32(t, e, r, a) {
    return 255 & t | (255 & e) << 8 | (255 & r) << 16 | a << 24;
  }
  static i8816to32(t, e, r) {
    return 255 & t | (255 & e) << 8 | r << 16;
  }
};
var c, q;
(function(s) {
  s[s.R8_SIGNED = 0] = "R8_SIGNED", s[s.R8_UNSIGNED = 1] = "R8_UNSIGNED", s[s.R16_SIGNED = 2] = "R16_SIGNED", s[s.R16_UNSIGNED = 3] = "R16_UNSIGNED", s[s.R8G8_SIGNED = 4] = "R8G8_SIGNED", s[s.R8G8_UNSIGNED = 5] = "R8G8_UNSIGNED", s[s.R16G16_SIGNED = 6] = "R16G16_SIGNED", s[s.R16G16_UNSIGNED = 7] = "R16G16_UNSIGNED", s[s.R8G8B8A8_SIGNED = 8] = "R8G8B8A8_SIGNED", s[s.R8G8B8A8_UNSIGNED = 9] = "R8G8B8A8_UNSIGNED", s[s.R8G8B8A8_COLOR = 10] = "R8G8B8A8_COLOR", s[s.R16G16B16A16_DASHARRAY = 11] = "R16G16B16A16_DASHARRAY", s[s.R16G16B16A16_PATTERN = 12] = "R16G16B16A16_PATTERN";
})(c || (c = {})), function(s) {
  s[s.UNIFORM = 0] = "UNIFORM", s[s.DATA_DRIVEN = 1] = "DATA_DRIVEN", s[s.INTERPOLATED_DATA_DRIVEN = 2] = "INTERPOLATED_DATA_DRIVEN", s[s.UNUSED = 3] = "UNUSED";
}(q || (q = {}));
let j = class Dt {
  constructor(t) {
    this._locations = /* @__PURE__ */ new Map(), this._key = t;
  }
  get key() {
    return this._key;
  }
  get type() {
    return 7 & this._key;
  }
  defines() {
    return [];
  }
  getStride() {
    return this._layoutInfo || this._buildAttributesInfo(), this._stride;
  }
  getAttributeLocations() {
    return this._locations.size === 0 && this._buildAttributesInfo(), this._locations;
  }
  getLayoutInfo() {
    return this._layoutInfo || this._buildAttributesInfo(), this._layoutInfo;
  }
  getEncodingInfos() {
    return this._propertyEncodingInfo || this._buildAttributesInfo(), this._propertyEncodingInfo;
  }
  getUniforms() {
    return this._uniforms || this._buildAttributesInfo(), this._uniforms;
  }
  getShaderHeader() {
    return this._shaderHeader || this._buildAttributesInfo(), this._shaderHeader;
  }
  getShaderMain() {
    return this._shaderMain || this._buildAttributesInfo(), this._shaderMain;
  }
  setDataUniforms(t, e, r, a, i) {
    const o = this.getUniforms();
    for (const n of o) {
      const { name: l, type: u, getValue: h } = n, p = h(r, e, a, i);
      if (p !== null) switch (u) {
        case "float":
          t.setUniform1f(l, p);
          break;
        case "vec2":
          t.setUniform2fv(l, p);
          break;
        case "vec4":
          t.setUniform4fv(l, p);
      }
    }
  }
  encodeAttributes(t, e, r, a) {
    const i = this.attributesInfo(), o = this.getEncodingInfos(), n = [];
    let l = 0, u = 0;
    for (const h of Object.keys(o)) {
      const p = o[h], { type: f, precisionFactor: d, isLayout: S } = i[h], $ = S ? r.getLayoutProperty(h) : r.getPaintProperty(h), z = $.interpolator?.getInterpolationRange(e);
      let M = 0;
      for (const T of p) {
        const { offset: _, bufferElementsToAdd: U } = T;
        if (U > 0) {
          for (let H = 0; H < U; H++) n.push(0);
          l += u, u = T.bufferElementsToAdd;
        }
        const E = a ?? $.getValue(z ? z[M] : e, t);
        switch (f) {
          case c.R8_SIGNED:
          case c.R8_UNSIGNED:
            n[l] |= this._encodeByte(E * (d || 1), 8 * _);
            break;
          case c.R16_SIGNED:
          case c.R16_UNSIGNED:
            n[l] |= this._encodeShort(E * (d || 1), 8 * _);
            break;
          case c.R8G8_SIGNED:
          case c.R8G8_UNSIGNED:
            n[l] |= this._encodeByte(E * (d || 1), 8 * _), n[l] |= this._encodeByte(E * (d || 1), 8 * _ + 8);
            break;
          case c.R16G16_SIGNED:
          case c.R16G16_UNSIGNED:
            n[l] |= this._encodeShort(E * (d || 1), 8 * _), n[l] |= this._encodeShort(E * (d || 1), 8 * _ + 16);
            break;
          case c.R8G8B8A8_SIGNED:
          case c.R8G8B8A8_UNSIGNED:
            n[l] |= this._encodeByte(E * (d || 1), 8 * _), n[l] |= this._encodeByte(E * (d || 1), 8 * _ + 8), n[l] |= this._encodeByte(E * (d || 1), 8 * _ + 16), n[l] |= this._encodeByte(E * (d || 1), 8 * _ + 24);
            break;
          case c.R8G8B8A8_COLOR:
            n[l] = this._encodeColor(E);
            break;
          case c.R16G16B16A16_DASHARRAY:
          case c.R16G16B16A16_PATTERN:
            this._encodePattern(l, n, E);
            break;
          default:
            throw new Error("Unsupported encoding type");
        }
        M++;
      }
    }
    return n;
  }
  getAtributeState(t) {
    let e = 0;
    const r = 3 + 2 * t;
    return e |= this._bit(r), e |= this._bit(r + 1) << 1, e;
  }
  _buildAttributesInfo() {
    const t = [], e = {}, r = {};
    let a = -1;
    const i = this.attributesInfo(), o = this.attributes();
    let n = -1;
    for (const p of o) {
      n++;
      const f = this.getAtributeState(n);
      if (f === q.UNIFORM || f === q.UNUSED) continue;
      const d = i[p], S = [];
      e[p] = S;
      const $ = d.type;
      for (let z = 0; z < f; z++) {
        const { dataType: M, bytesPerElement: T, count: _, normalized: U } = Dt._encodingInfo[$], E = T * _, H = `${M}-${U === !0}`;
        let R = r[H], O = 0;
        if (!R || R.count + _ > 4) a++, R = { dataIndex: a, count: 0, offset: 0 }, _ !== 4 && (r[H] = R), t.push({ location: -1, name: "a_data_" + a, count: _, type: M, normalized: U }), O = Math.ceil(Math.max(E / 4, 1));
        else {
          const B = t[R.dataIndex];
          B.count += _, O = Math.ceil(Math.max(B.count * T / 4, 1)) - Math.ceil(Math.max(R.offset / 4, 1));
        }
        S.push({ dataIndex: R.dataIndex, offset: R.offset, bufferElementsToAdd: O }), R.offset += E, R.count += _;
      }
    }
    for (const p of t) switch (p.type) {
      case g.BYTE:
      case g.UNSIGNED_BYTE:
        p.count = 4;
        break;
      case g.SHORT:
      case g.UNSIGNED_SHORT:
        p.count += p.count % 2;
    }
    this._buildVertexBufferLayout(t);
    let l = 0;
    const u = this._layoutInfo.geometry;
    for (const p of u) this._locations.set(p.name, l++);
    const h = this._layoutInfo.opacity;
    if (h) for (const p of h) this._locations.set(p.name, l++);
    this._buildShaderInfo(t, e), this._propertyEncodingInfo = e;
  }
  _buildVertexBufferLayout(t) {
    const e = {}, r = this.geometryInfo();
    let a = r[0].stride;
    if (t.length === 0) e.geometry = r;
    else {
      const i = [];
      let o = a;
      for (const n of t) a += Zt(n.type) * n.count;
      for (const n of r) i.push(new v(n.name, n.count, n.type, n.offset, a, n.normalized));
      for (const n of t) i.push(new v(n.name, n.count, n.type, o, a, n.normalized)), o += Zt(n.type) * n.count;
      e.geometry = i;
    }
    this.opacityInfo() && (e.opacity = this.opacityInfo()), this._layoutInfo = e, this._stride = a;
  }
  _buildShaderInfo(t, e) {
    let r = `
`, a = `
`;
    const i = [];
    for (const u of t) r += `attribute ${this._getType(u.count)} ${u.name};
`;
    const o = this.attributes(), n = this.attributesInfo();
    let l = -1;
    for (const u of o) {
      l++;
      const { name: h, type: p, precisionFactor: f, isLayout: d } = n[u], S = f && f !== 1 ? " * " + 1 / f : "", { bytesPerElement: $, count: z } = Dt._encodingInfo[p], M = (T) => `a_data_${T.dataIndex}${ve(z, T.offset, $)}`;
      switch (this.getAtributeState(l)) {
        case q.UNIFORM:
          {
            const T = this._getType(z), _ = `u_${h}`;
            i.push({ name: _, type: T, getValue: (U, E, H, R) => {
              const O = d ? U.getLayoutValue(u, E) : U.getPaintValue(u, E);
              if (p === c.R16G16B16A16_DASHARRAY) {
                const B = U.getDashKey(O, U.getLayoutValue("line-cap", E)), nt = R.getMosaicItemPosition(B, !1);
                if (nt == null) return null;
                const { tl: st, br: jt } = nt;
                return [st[0], jt[1], jt[0], st[1]];
              }
              if (p === c.R16G16B16A16_PATTERN) {
                const B = R.getMosaicItemPosition(O, !u.includes("line-"));
                if (B == null) return null;
                const { tl: nt, br: st } = B;
                return [nt[0], st[1], st[0], nt[1]];
              }
              if (p === c.R8G8B8A8_COLOR) {
                const B = O[3];
                return [B * O[0], B * O[1], B * O[2], B];
              }
              return O;
            } }), r += `uniform ${T} ${_};
`, a += `${T} ${h} = ${_};
`;
          }
          break;
        case q.DATA_DRIVEN:
          {
            const T = M(e[u][0]);
            a += `${this._getType(z)} ${h} = ${T}${S};
`;
          }
          break;
        case q.INTERPOLATED_DATA_DRIVEN: {
          const T = `u_t_${h}`;
          i.push({ name: T, type: "float", getValue: (E, H, R, O) => (d ? E.getLayoutProperty(u) : E.getPaintProperty(u)).interpolator.interpolationUniformValue(R, H) }), r += `uniform float ${T};
`;
          const _ = M(e[u][0]), U = M(e[u][1]);
          a += `${this._getType(z)} ${h} = mix(${_}${S}, ${U}${S}, ${T});
`;
        }
      }
    }
    this._shaderHeader = r, this._shaderMain = a, this._uniforms = i;
  }
  _bit(t) {
    return (this._key & 1 << t) >> t;
  }
  _getType(t) {
    switch (t) {
      case 1:
        return "float";
      case 2:
        return "vec2";
      case 3:
        return "vec3";
      case 4:
        return "vec4";
    }
    throw new Error("Invalid count");
  }
  _encodeColor(t) {
    const e = 255 * t[3];
    return Te.i8888to32(t[0] * e, t[1] * e, t[2] * e, e);
  }
  _encodePattern(t, e, r) {
    if (!r?.rect) return;
    const a = 2, i = r.rect, o = r.width, n = r.height;
    e[t] = this._encodeShort(i.x + a, 0), e[t] |= this._encodeShort(i.y + a + n, 16), e[t + 1] = this._encodeShort(i.x + a + o, 0), e[t + 1] |= this._encodeShort(i.y + a, 16);
  }
  _encodeByte(t, e) {
    return (255 & t) << e;
  }
  _encodeShort(t, e) {
    return (65535 & t) << e;
  }
};
j._encodingInfo = { [c.R8_SIGNED]: { dataType: g.BYTE, bytesPerElement: 1, count: 1, normalized: !1 }, [c.R8_UNSIGNED]: { dataType: g.UNSIGNED_BYTE, bytesPerElement: 1, count: 1, normalized: !1 }, [c.R16_SIGNED]: { dataType: g.SHORT, bytesPerElement: 2, count: 1, normalized: !1 }, [c.R16_UNSIGNED]: { dataType: g.UNSIGNED_SHORT, bytesPerElement: 2, count: 1, normalized: !1 }, [c.R8G8_SIGNED]: { dataType: g.BYTE, bytesPerElement: 1, count: 2, normalized: !1 }, [c.R8G8_UNSIGNED]: { dataType: g.UNSIGNED_BYTE, bytesPerElement: 1, count: 2, normalized: !1 }, [c.R16G16_SIGNED]: { dataType: g.SHORT, bytesPerElement: 2, count: 2, normalized: !1 }, [c.R16G16_UNSIGNED]: { dataType: g.UNSIGNED_SHORT, bytesPerElement: 2, count: 2, normalized: !1 }, [c.R8G8B8A8_SIGNED]: { dataType: g.BYTE, bytesPerElement: 1, count: 4, normalized: !1 }, [c.R8G8B8A8_UNSIGNED]: { dataType: g.UNSIGNED_BYTE, bytesPerElement: 1, count: 4, normalized: !1 }, [c.R8G8B8A8_COLOR]: { dataType: g.UNSIGNED_BYTE, bytesPerElement: 1, count: 4, normalized: !0 }, [c.R16G16B16A16_DASHARRAY]: { dataType: g.UNSIGNED_SHORT, bytesPerElement: 2, count: 4, normalized: !1 }, [c.R16G16B16A16_PATTERN]: { dataType: g.UNSIGNED_SHORT, bytesPerElement: 2, count: 4, normalized: !1 } };
const Zt = (s) => {
  switch (s) {
    case g.FLOAT:
    case g.INT:
    case g.UNSIGNED_INT:
      return 4;
    case g.SHORT:
    case g.UNSIGNED_SHORT:
      return 2;
    case g.BYTE:
    case g.UNSIGNED_BYTE:
      return 1;
  }
}, ve = (s, t, e) => {
  const r = t / e;
  if (s === 1) switch (r) {
    case 0:
      return ".x";
    case 1:
      return ".y";
    case 2:
      return ".z";
    case 3:
      return ".w";
  }
  else if (s === 2) switch (r) {
    case 0:
      return ".xy";
    case 1:
      return ".yz";
    case 2:
      return ".zw";
  }
  else if (s === 3) switch (r) {
    case 0:
      return ".xyz";
    case 1:
      return ".yzw";
  }
  return "";
};
let Q = class yt extends j {
  constructor(t) {
    super(t);
  }
  geometryInfo() {
    return yt.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return yt.ATTRIBUTES;
  }
  attributesInfo() {
    return yt.ATTRIBUTES_INFO;
  }
};
Q.ATTRIBUTES = [], Q.GEOMETRY_LAYOUT = [new v("a_pos", 2, g.BYTE, 0, 2)], Q.ATTRIBUTES_INFO = {};
let J = class ft extends j {
  constructor(t) {
    super(t);
  }
  geometryInfo() {
    return ft.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return ft.ATTRIBUTES;
  }
  attributesInfo() {
    return ft.ATTRIBUTES_INFO;
  }
};
J.ATTRIBUTES = ["circle-radius", "circle-color", "circle-opacity", "circle-stroke-width", "circle-stroke-color", "circle-stroke-opacity", "circle-blur"], J.GEOMETRY_LAYOUT = [new v("a_pos", 2, g.SHORT, 0, 4)], J.ATTRIBUTES_INFO = { "circle-radius": { name: "radius", type: c.R8_UNSIGNED }, "circle-color": { name: "color", type: c.R8G8B8A8_COLOR }, "circle-opacity": { name: "opacity", type: c.R8_UNSIGNED, precisionFactor: 100 }, "circle-stroke-width": { name: "stroke_width", type: c.R8_UNSIGNED, precisionFactor: 4 }, "circle-stroke-color": { name: "stroke_color", type: c.R8G8B8A8_COLOR }, "circle-stroke-opacity": { name: "stroke_opacity", type: c.R8_UNSIGNED, precisionFactor: 100 }, "circle-blur": { name: "blur", type: c.R8_UNSIGNED, precisionFactor: 32 } };
let tt = class gt extends j {
  constructor(t) {
    super(t);
  }
  geometryInfo() {
    return gt.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return gt.ATTRIBUTES;
  }
  attributesInfo() {
    return gt.ATTRIBUTES_INFO;
  }
};
tt.ATTRIBUTES = ["fill-color", "fill-opacity", "fill-pattern"], tt.GEOMETRY_LAYOUT = [new v("a_pos", 2, g.SHORT, 0, 4)], tt.ATTRIBUTES_INFO = { "fill-color": { name: "color", type: c.R8G8B8A8_COLOR }, "fill-opacity": { name: "opacity", type: c.R8_UNSIGNED, precisionFactor: 100 }, "fill-pattern": { name: "tlbr", type: c.R16G16B16A16_PATTERN, isOptional: !0 } };
let F = class Z extends j {
  constructor(t, e) {
    super(t), this._usefillColor = e;
  }
  geometryInfo() {
    return Z.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return this._usefillColor ? Z.ATTRIBUTES_FILL : Z.ATTRIBUTES_OUTLINE;
  }
  attributesInfo() {
    return this._usefillColor ? Z.ATTRIBUTES_INFO_FILL : Z.ATTRIBUTES_INFO_OUTLINE;
  }
};
F.ATTRIBUTES_OUTLINE = ["fill-outline-color", "fill-opacity"], F.ATTRIBUTES_FILL = ["fill-color", "fill-opacity"], F.GEOMETRY_LAYOUT = [new v("a_pos", 2, g.SHORT, 0, 8), new v("a_offset", 2, g.BYTE, 4, 8), new v("a_xnormal", 2, g.BYTE, 6, 8)], F.ATTRIBUTES_INFO_OUTLINE = { "fill-outline-color": { name: "color", type: c.R8G8B8A8_COLOR }, "fill-opacity": { name: "opacity", type: c.R8_UNSIGNED, precisionFactor: 100 } }, F.ATTRIBUTES_INFO_FILL = { "fill-color": { name: "color", type: c.R8G8B8A8_COLOR }, "fill-opacity": { name: "opacity", type: c.R8_UNSIGNED, precisionFactor: 100 } };
let et = class dt extends j {
  constructor(t) {
    super(t);
  }
  geometryInfo() {
    return dt.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return dt.ATTRIBUTES;
  }
  attributesInfo() {
    return dt.ATTRIBUTES_INFO;
  }
};
et.ATTRIBUTES = ["line-blur", "line-color", "line-gap-width", "line-offset", "line-opacity", "line-width", "line-pattern", "line-dasharray"], et.GEOMETRY_LAYOUT = [new v("a_pos", 2, g.SHORT, 0, 16), new v("a_extrude_offset", 4, g.BYTE, 4, 16), new v("a_dir_normal", 4, g.BYTE, 8, 16), new v("a_accumulatedDistance", 2, g.UNSIGNED_SHORT, 12, 16)], et.ATTRIBUTES_INFO = { "line-width": { name: "width", type: c.R8_UNSIGNED, precisionFactor: 2 }, "line-gap-width": { name: "gap_width", type: c.R8_UNSIGNED, precisionFactor: 2 }, "line-offset": { name: "offset", type: c.R8_SIGNED, precisionFactor: 2 }, "line-color": { name: "color", type: c.R8G8B8A8_COLOR }, "line-opacity": { name: "opacity", type: c.R8_UNSIGNED, precisionFactor: 100 }, "line-blur": { name: "blur", type: c.R8_UNSIGNED, precisionFactor: 4 }, "line-pattern": { name: "tlbr", type: c.R16G16B16A16_PATTERN, isOptional: !0 }, "line-dasharray": { name: "tlbr", type: c.R16G16B16A16_DASHARRAY, isOptional: !0 } };
const ae = [new v("a_pos", 2, g.SHORT, 0, 16), new v("a_vertexOffset", 2, g.SHORT, 4, 16), new v("a_texAngleRange", 4, g.UNSIGNED_BYTE, 8, 16), new v("a_levelInfo", 4, g.UNSIGNED_BYTE, 12, 16)], ie = [new v("a_opacityInfo", 1, g.UNSIGNED_BYTE, 0, 1)];
let lt = class Rt extends j {
  constructor(t) {
    super(t);
  }
  geometryInfo() {
    return ae;
  }
  opacityInfo() {
    return ie;
  }
  attributes() {
    return Rt.ATTRIBUTES;
  }
  attributesInfo() {
    return Rt.ATTRIBUTES_INFO;
  }
};
lt.ATTRIBUTES = ["icon-color", "icon-opacity", "icon-halo-blur", "icon-halo-color", "icon-halo-width", "icon-size"], lt.ATTRIBUTES_INFO = { "icon-color": { name: "color", type: c.R8G8B8A8_COLOR }, "icon-opacity": { name: "opacity", type: c.R8_UNSIGNED, precisionFactor: 100 }, "icon-halo-color": { name: "halo_color", type: c.R8G8B8A8_COLOR }, "icon-halo-width": { name: "halo_width", type: c.R8_UNSIGNED, precisionFactor: 4 }, "icon-halo-blur": { name: "halo_blur", type: c.R8_UNSIGNED, precisionFactor: 4 }, "icon-size": { name: "size", type: c.R8_UNSIGNED, precisionFactor: 32, isLayout: !0 } };
let ut = class xt extends j {
  constructor(t) {
    super(t);
  }
  geometryInfo() {
    return ae;
  }
  opacityInfo() {
    return ie;
  }
  attributes() {
    return xt.ATTRIBUTES;
  }
  attributesInfo() {
    return xt.ATTRIBUTES_INFO;
  }
};
ut.ATTRIBUTES = ["text-color", "text-opacity", "text-halo-blur", "text-halo-color", "text-halo-width", "text-size"], ut.ATTRIBUTES_INFO = { "text-color": { name: "color", type: c.R8G8B8A8_COLOR }, "text-opacity": { name: "opacity", type: c.R8_UNSIGNED, precisionFactor: 100 }, "text-halo-color": { name: "halo_color", type: c.R8G8B8A8_COLOR }, "text-halo-width": { name: "halo_width", type: c.R8_UNSIGNED, precisionFactor: 4 }, "text-halo-blur": { name: "halo_blur", type: c.R8_UNSIGNED, precisionFactor: 4 }, "text-size": { name: "size", type: c.R8_UNSIGNED, isLayout: !0 } };
const ne = { kind: "null" }, w = { kind: "number" }, L = { kind: "string" }, D = { kind: "boolean" }, Y = { kind: "color" }, bt = { kind: "object" }, C = { kind: "value" };
function ht(s, t) {
  return { kind: "array", itemType: s, n: t };
}
const De = [ne, w, L, D, Y, bt, ht(C)];
function rt(s) {
  if (s.kind === "array") {
    const t = rt(s.itemType);
    return typeof s.n == "number" ? `array<${t}, ${s.n}>` : s.itemType.kind === "value" ? "array" : `array<${t}>`;
  }
  return s.kind;
}
function Tt(s) {
  if (s === null) return ne;
  if (typeof s == "string") return L;
  if (typeof s == "boolean") return D;
  if (typeof s == "number") return w;
  if (s instanceof b) return Y;
  if (Array.isArray(s)) {
    let t;
    for (const e of s) {
      const r = Tt(e);
      if (t) {
        if (t !== r) {
          t = C;
          break;
        }
      } else t = r;
    }
    return ht(t || C, s.length);
  }
  return typeof s == "object" ? bt : C;
}
function At(s, t) {
  if (t.kind === "array") return s.kind === "array" && (s.n === 0 && s.itemType.kind === "value" || At(s.itemType, t.itemType)) && (typeof t.n != "number" || t.n === s.n);
  if (t.kind === "value") {
    for (const e of De) if (At(s, e)) return !0;
  }
  return t.kind === s.kind;
}
function Nt(s) {
  if (s === null) return "";
  const t = typeof s;
  return t === "string" ? s : t === "number" || t === "boolean" ? String(s) : s instanceof b ? s.toString() : JSON.stringify(s);
}
let Re = class {
  constructor(t) {
    this._parent = t, this._vars = {};
  }
  add(t, e) {
    this._vars[t] = e;
  }
  get(t) {
    return this._vars[t] ? this._vars[t] : this._parent ? this._parent.get(t) : null;
  }
}, xe = class se {
  constructor() {
    this.type = C;
  }
  static parse(t) {
    if (t.length > 1) throw new Error('"id" does not expect arguments');
    return new se();
  }
  evaluate(t, e) {
    return t?.id;
  }
};
class St {
  constructor() {
    this.type = L;
  }
  static parse(t) {
    if (t.length > 1) throw new Error('"geometry-type" does not expect arguments');
    return new St();
  }
  evaluate(t, e) {
    if (!t) return null;
    switch (t.type) {
      case vt.Point:
        return "Point";
      case vt.LineString:
        return "LineString";
      case vt.Polygon:
        return "Polygon";
      default:
        return null;
    }
  }
}
let Ae = class oe {
  constructor() {
    this.type = bt;
  }
  static parse(t) {
    if (t.length > 1) throw new Error('"properties" does not expect arguments');
    return new oe();
  }
  evaluate(t, e) {
    return t?.values;
  }
}, le = class ue {
  constructor() {
    this.type = w;
  }
  static parse(t) {
    if (t.length > 1) throw new Error('"zoom" does not expect arguments');
    return new ue();
  }
  evaluate(t, e) {
    return e;
  }
};
class P {
  constructor(t, e, r) {
    this._lhs = t, this._rhs = e, this._compare = r, this.type = D;
  }
  static parse(t, e, r) {
    if (t.length !== 3 && t.length !== 4) throw new Error(`"${t[0]}" expects 2 or 3 arguments`);
    if (t.length === 4) throw new Error(`"${t[0]}" collator not supported`);
    return new P(y(t[1], e), y(t[2], e), r);
  }
  evaluate(t, e) {
    return this._compare(this._lhs.evaluate(t, e), this._rhs.evaluate(t, e));
  }
}
class Ne extends P {
  static parse(t, e) {
    return P.parse(t, e, (r, a) => r === a);
  }
}
class Pe extends P {
  static parse(t, e) {
    return P.parse(t, e, (r, a) => r !== a);
  }
}
class Se extends P {
  static parse(t, e) {
    return P.parse(t, e, (r, a) => r < a);
  }
}
let Le = class extends P {
  static parse(t, e) {
    return P.parse(t, e, (r, a) => r <= a);
  }
};
class Ue extends P {
  static parse(t, e) {
    return P.parse(t, e, (r, a) => r > a);
  }
}
class Oe extends P {
  static parse(t, e) {
    return P.parse(t, e, (r, a) => r >= a);
  }
}
class Lt {
  constructor(t) {
    this._arg = t, this.type = D;
  }
  static parse(t, e) {
    if (t.length !== 2) throw new Error('"!" expects 1 argument');
    return new Lt(y(t[1], e));
  }
  evaluate(t, e) {
    return !this._arg.evaluate(t, e);
  }
}
class Ut {
  constructor(t) {
    this._args = t, this.type = D;
  }
  static parse(t, e) {
    const r = [];
    for (let a = 1; a < t.length; a++) r.push(y(t[a], e));
    return new Ut(r);
  }
  evaluate(t, e) {
    for (const r of this._args) if (!r.evaluate(t, e)) return !1;
    return !0;
  }
}
let Be = class ce {
  constructor(t) {
    this._args = t, this.type = D;
  }
  static parse(t, e) {
    const r = [];
    for (let a = 1; a < t.length; a++) r.push(y(t[a], e));
    return new ce(r);
  }
  evaluate(t, e) {
    for (const r of this._args) if (r.evaluate(t, e)) return !0;
    return !1;
  }
};
class Ot {
  constructor(t) {
    this._args = t, this.type = D;
  }
  static parse(t, e) {
    const r = [];
    for (let a = 1; a < t.length; a++) r.push(y(t[a], e));
    return new Ot(r);
  }
  evaluate(t, e) {
    for (const r of this._args) if (r.evaluate(t, e)) return !1;
    return !0;
  }
}
let Ge = class he {
  constructor(t, e, r) {
    this.type = t, this._args = e, this._fallback = r;
  }
  static parse(t, e, r) {
    if (t.length < 4) throw new Error('"case" expects at least 3 arguments');
    if (t.length % 2 == 1) throw new Error('"case" expects an odd number of arguments');
    let a;
    const i = [];
    for (let n = 1; n < t.length - 1; n += 2) {
      const l = y(t[n], e), u = y(t[n + 1], e, r);
      a || (a = u.type), i.push({ condition: l, output: u });
    }
    const o = y(t[t.length - 1], e, r);
    return a || (a = o.type), new he(a, i, o);
  }
  evaluate(t, e) {
    for (const r of this._args) if (r.condition.evaluate(t, e)) return r.output.evaluate(t, e);
    return this._fallback.evaluate(t, e);
  }
}, ke = class pe {
  constructor(t, e) {
    this.type = t, this._args = e;
  }
  static parse(t, e) {
    if (t.length < 2) throw new Error('"coalesce" expects at least 1 argument');
    let r;
    const a = [];
    for (let i = 1; i < t.length; i++) {
      const o = y(t[i], e);
      r || (r = o.type), a.push(o);
    }
    return new pe(r, a);
  }
  evaluate(t, e) {
    for (const r of this._args) {
      const a = r.evaluate(t, e);
      if (a !== null) return a;
    }
    return null;
  }
}, ze = class ye {
  constructor(t, e, r, a, i) {
    this.type = t, this._input = e, this._labels = r, this._outputs = a, this._fallback = i;
  }
  static parse(t, e) {
    if (t.length < 3) throw new Error('"match" expects at least 3 arguments');
    if (t.length % 2 == 0) throw new Error('"case" expects an even number of arguments');
    let r;
    const a = y(t[1], e), i = [], o = {};
    let n;
    for (let l = 2; l < t.length - 1; l += 2) {
      let u = t[l];
      Array.isArray(u) || (u = [u]);
      for (const p of u) {
        const f = typeof p;
        if (f !== "string" && f !== "number") throw new Error('"match" requires string or number literal as labels');
        if (n) {
          if (f !== n) throw new Error('"match" requires labels to have the same type');
        } else n = f;
        o[p] = i.length;
      }
      const h = y(t[l + 1], e);
      r || (r = h.type), i.push(h);
    }
    return new ye(r, a, o, i, y(t[t.length - 1], e));
  }
  evaluate(t, e) {
    const r = this._input.evaluate(t, e);
    return (this._outputs[this._labels[r]] || this._fallback).evaluate(t, e);
  }
};
class k {
  constructor(t, e, r, a, i) {
    this._operator = t, this.type = e, this.interpolation = r, this.input = a, this._stops = i;
  }
  static parse(t, e, r) {
    const a = t[0];
    if (t.length < 5) throw new Error(`"${a}" expects at least 4 arguments`);
    const i = t[1];
    if (!Array.isArray(i) || i.length === 0) throw new Error(`"${i}" is not a valid interpolation`);
    switch (i[0]) {
      case "linear":
        if (i.length !== 1) throw new Error("Linear interpolation cannot have parameters");
        break;
      case "exponential":
        if (i.length !== 2 || typeof i[1] != "number") throw new Error("Exponential interpolation requires one numeric argument");
        break;
      case "cubic-bezier":
        if (i.length !== 5) throw new Error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1");
        for (let u = 1; u < 5; u++) {
          const h = i[u];
          if (typeof h != "number" || h < 0 || h > 1) throw new Error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1");
        }
        break;
      default:
        throw new Error(`"${t[0]}" unknown interpolation type "${i[0]}"`);
    }
    if (t.length % 2 != 1) throw new Error(`"${a}" expects an even number of arguments`);
    const o = y(t[2], e, w);
    let n;
    a === "interpolate-hcl" || a === "interpolate-lab" ? n = Y : r && r.kind !== "value" && (n = r);
    const l = [];
    for (let u = 3; u < t.length; u += 2) {
      const h = t[u];
      if (typeof h != "number") throw new Error(`"${a}" requires stop inputs as literal numbers`);
      if (l.length && l[l.length - 1][0] >= h) throw new Error(`"${a}" requires strictly ascending stop inputs`);
      const p = y(t[u + 1], e, n);
      n || (n = p.type), l.push([h, p]);
    }
    if (n && n !== Y && n !== w && (n.kind !== "array" || n.itemType !== w)) throw new Error(`"${a}" cannot interpolate type ${rt(n)}`);
    return new k(a, n, i, o, l);
  }
  evaluate(t, e) {
    const r = this._stops;
    if (r.length === 1) return r[0][1].evaluate(t, e);
    const a = this.input.evaluate(t, e);
    if (a <= r[0][0]) return r[0][1].evaluate(t, e);
    if (a >= r[r.length - 1][0]) return r[r.length - 1][1].evaluate(t, e);
    let i = 0;
    for (; ++i < r.length && !(a < r[i][0]); ) ;
    const o = r[i - 1][0], n = r[i][0], l = k.interpolationRatio(this.interpolation, a, o, n), u = r[i - 1][1].evaluate(t, e), h = r[i][1].evaluate(t, e);
    if (this._operator === "interpolate") {
      if (this.type.kind === "array" && Array.isArray(u) && Array.isArray(h)) return u.map((p, f) => x(p, h[f], l));
      if (this.type.kind === "color" && u instanceof b && h instanceof b) {
        const p = new b(u), f = new b(h);
        return new b([x(p.r, f.r, l), x(p.g, f.g, l), x(p.b, f.b, l), x(p.a, f.a, l)]);
      }
      if (this.type.kind === "number" && typeof u == "number" && typeof h == "number") return x(u, h, l);
      throw new Error(`"${this._operator}" cannot interpolate type ${rt(this.type)}`);
    }
    if (this._operator === "interpolate-hcl") {
      const p = qt(u), f = qt(h), d = f.h - p.h, S = Kt({ h: p.h + l * (d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d), c: x(p.c, f.c, l), l: x(p.l, f.l, l) });
      return new b({ a: x(u.a, h.a, l), ...S });
    }
    if (this._operator === "interpolate-lab") {
      const p = Wt(u), f = Wt(h), d = Kt({ l: x(p.l, f.l, l), a: x(p.a, f.a, l), b: x(p.b, f.b, l) });
      return new b({ a: x(u.a, h.a, l), ...d });
    }
    throw new Error(`Unexpected operator "${this._operator}"`);
  }
  interpolationUniformValue(t, e) {
    const r = this._stops;
    if (r.length === 1 || t >= r[r.length - 1][0]) return 0;
    let a = 0;
    for (; ++a < r.length && !(t < r[a][0]); ) ;
    const i = r[a - 1][0], o = r[a][0];
    return k.interpolationRatio(this.interpolation, e, i, o);
  }
  getInterpolationRange(t) {
    const e = this._stops;
    if (e.length === 1) {
      const i = e[0][0];
      return [i, i];
    }
    const r = e[e.length - 1][0];
    if (t >= r) return [r, r];
    let a = 0;
    for (; ++a < e.length && !(t < e[a][0]); ) ;
    return [e[a - 1][0], e[a][0]];
  }
  static interpolationRatio(t, e, r, a) {
    let i = 0;
    return t[0] === "linear" ? i = k._exponentialInterpolationRatio(e, 1, r, a) : t[0] === "exponential" ? i = k._exponentialInterpolationRatio(e, t[1], r, a) : t[0] === "cubic-bezier" && (i = me(t[1], t[2], t[3], t[4])(k._exponentialInterpolationRatio(e, 1, r, a), 1e-5)), i < 0 ? i = 0 : i > 1 && (i = 1), i;
  }
  static _exponentialInterpolationRatio(t, e, r, a) {
    const i = a - r;
    if (i === 0) return 0;
    const o = t - r;
    return e === 1 ? o / i : (e ** o - 1) / (e ** i - 1);
  }
}
class Bt {
  constructor(t, e, r) {
    this.type = t, this._input = e, this._stops = r;
  }
  static parse(t, e) {
    if (t.length < 5) throw new Error('"step" expects at least 4 arguments');
    if (t.length % 2 != 1) throw new Error('"step" expects an even number of arguments');
    const r = y(t[1], e, w);
    let a;
    const i = [];
    i.push([-1 / 0, y(t[2], e)]);
    for (let o = 3; o < t.length; o += 2) {
      const n = t[o];
      if (typeof n != "number") throw new Error('"step" requires stop inputs as literal numbers');
      if (i.length && i[i.length - 1][0] >= n) throw new Error('"step" requires strictly ascending stop inputs');
      const l = y(t[o + 1], e);
      a || (a = l.type), i.push([n, l]);
    }
    return new Bt(a, r, i);
  }
  evaluate(t, e) {
    const r = this._stops;
    if (r.length === 1) return r[0][1].evaluate(t, e);
    const a = this._input.evaluate(t, e);
    let i = 0;
    for (; ++i < r.length && !(a < r[i][0]); ) ;
    return this._stops[i - 1][1].evaluate(t, e);
  }
}
class Gt {
  constructor(t, e) {
    this.type = t, this._output = e;
  }
  static parse(t, e, r) {
    if (t.length < 4) throw new Error('"let" expects at least 3 arguments');
    if (t.length % 2 == 1) throw new Error('"let" expects an odd number of arguments');
    const a = new Re(e);
    for (let o = 1; o < t.length - 1; o += 2) {
      const n = t[o];
      if (typeof n != "string") throw new Error(`"let" requires a string to define variable names - found ${n}`);
      a.add(n, y(t[o + 1], e));
    }
    const i = y(t[t.length - 1], a, r);
    return new Gt(i.type, i);
  }
  evaluate(t, e) {
    return this._output.evaluate(t, e);
  }
}
let Ve = class fe {
  constructor(t, e) {
    this.type = t, this.output = e;
  }
  static parse(t, e, r) {
    if (t.length !== 2 || typeof t[1] != "string") throw new Error('"var" requires just one literal string argument');
    const a = e.get(t[1]);
    if (!a) throw new Error(`${t[1]} must be defined before being used in a "var" expression`);
    return new fe(r || C, a);
  }
  evaluate(t, e) {
    return this.output.evaluate(t, e);
  }
}, Fe = class ge {
  constructor(t, e, r) {
    this.type = t, this._index = e, this._array = r;
  }
  static parse(t, e) {
    if (t.length !== 3) throw new Error('"at" expects 2 arguments');
    const r = y(t[1], e, w), a = y(t[2], e);
    return new ge(a.type.itemType, r, a);
  }
  evaluate(t, e) {
    const r = this._index.evaluate(t, e), a = this._array.evaluate(t, e);
    if (r < 0 || r >= a.length) throw new Error('"at" index out of bounds');
    if (r !== Math.floor(r)) throw new Error('"at" index must be an integer');
    return a[r];
  }
};
class _t {
  constructor(t, e) {
    this._key = t, this._obj = e, this.type = C;
  }
  static parse(t, e) {
    let r, a;
    switch (t.length) {
      case 2:
        return r = y(t[1], e), new _t(r);
      case 3:
        return r = y(t[1], e), a = y(t[2], e), new _t(r, a);
      default:
        throw new Error('"get" expects 1 or 2 arguments');
    }
  }
  evaluate(t, e) {
    const r = this._key.evaluate(t, e);
    return this._obj ? this._obj.evaluate(t, e)[r] : t?.values[r];
  }
}
class mt {
  constructor(t, e) {
    this._key = t, this._obj = e, this.type = D;
  }
  static parse(t, e) {
    let r, a;
    switch (t.length) {
      case 2:
        return r = y(t[1], e), new mt(r);
      case 3:
        return r = y(t[1], e), a = y(t[2], e), new mt(r, a);
      default:
        throw new Error('"has" expects 1 or 2 arguments');
    }
  }
  evaluate(t, e) {
    const r = this._key.evaluate(t, e);
    return this._obj ? r in this._obj.evaluate(t, e) : !!t?.values[r];
  }
}
let $e = class de {
  constructor(t, e) {
    this._key = t, this._vals = e, this.type = D;
  }
  static parse(t, e) {
    if (t.length !== 3) throw new Error('"in" expects 2 arguments');
    return new de(y(t[1], e), y(t[2], e));
  }
  evaluate(t, e) {
    const r = this._key.evaluate(t, e);
    return this._vals.evaluate(t, e).includes(r);
  }
};
class wt {
  constructor(t, e, r) {
    this._item = t, this._array = e, this._from = r, this.type = w;
  }
  static parse(t, e) {
    if (t.length < 3 || t.length > 4) throw new Error('"index-of" expects 3 or 4 arguments');
    const r = y(t[1], e), a = y(t[2], e);
    if (t.length === 4) {
      const i = y(t[3], e, w);
      return new wt(r, a, i);
    }
    return new wt(r, a);
  }
  evaluate(t, e) {
    const r = this._item.evaluate(t, e), a = this._array.evaluate(t, e);
    if (this._from) {
      const i = this._from.evaluate(t, e);
      if (i !== Math.floor(i)) throw new Error('"index-of" index must be an integer');
      return a.indexOf(r, i);
    }
    return a.indexOf(r);
  }
}
class kt {
  constructor(t) {
    this._arg = t, this.type = w;
  }
  static parse(t, e) {
    if (t.length !== 2) throw new Error('"length" expects 2 arguments');
    const r = y(t[1], e);
    return new kt(r);
  }
  evaluate(t, e) {
    const r = this._arg.evaluate(t, e);
    if (typeof r == "string" || Array.isArray(r)) return r.length;
    throw new Error('"length" expects string or array');
  }
}
class Et {
  constructor(t, e, r, a) {
    this.type = t, this._array = e, this._from = r, this._to = a;
  }
  static parse(t, e) {
    if (t.length < 3 || t.length > 4) throw new Error('"slice" expects 2 or 3 arguments');
    const r = y(t[1], e), a = y(t[2], e, w);
    if (a.type !== w) throw new Error('"slice" index must return a number');
    if (t.length === 4) {
      const i = y(t[3], e, w);
      if (i.type !== w) throw new Error('"slice" index must return a number');
      return new Et(r.type, r, a, i);
    }
    return new Et(r.type, r, a);
  }
  evaluate(t, e) {
    const r = this._array.evaluate(t, e);
    if (!Array.isArray(r) && typeof r != "string") throw new Error('"slice" input must be an array or a string');
    const a = this._from.evaluate(t, e);
    if (a < 0 || a >= r.length) throw new Error('"slice" index out of bounds');
    if (a !== Math.floor(a)) throw new Error('"slice" index must be an integer');
    if (this._to) {
      const i = this._to.evaluate(t, e);
      if (i < 0 || i >= r.length) throw new Error('"slice" index out of bounds');
      if (i !== Math.floor(i)) throw new Error('"slice" index must be an integer');
      return r.slice(a, i);
    }
    return r.slice(a);
  }
}
class zt {
  constructor() {
    this.type = D;
  }
  static parse(t) {
    if (t.length !== 1) throw new Error('"has-id" expects no arguments');
    return new zt();
  }
  evaluate(t, e) {
    return t?.id !== void 0;
  }
}
class A {
  constructor(t, e) {
    this._args = t, this._calculate = e, this.type = w;
  }
  static parse(t, e, r) {
    const a = t.slice(1).map((i) => y(i, e));
    return new A(a, r);
  }
  evaluate(t, e) {
    let r;
    return this._args && (r = this._args.map((a) => a.evaluate(t, e))), this._calculate(r);
  }
}
class Me extends A {
  static parse(t, e) {
    switch (t.length) {
      case 2:
        return A.parse(t, e, (r) => -r[0]);
      case 3:
        return A.parse(t, e, (r) => r[0] - r[1]);
      default:
        throw new Error('"-" expects 1 or 2 arguments');
    }
  }
}
class Ce extends A {
  static parse(t, e) {
    return A.parse(t, e, (r) => {
      let a = 1;
      for (const i of r) a *= i;
      return a;
    });
  }
}
class Ye extends A {
  static parse(t, e) {
    if (t.length === 3) return A.parse(t, e, (r) => r[0] / r[1]);
    throw new Error('"/" expects 2 arguments');
  }
}
class He extends A {
  static parse(t, e) {
    if (t.length === 3) return A.parse(t, e, (r) => r[0] % r[1]);
    throw new Error('"%" expects 2 arguments');
  }
}
class je extends A {
  static parse(t, e) {
    if (t.length === 3) return A.parse(t, e, (r) => r[0] ** r[1]);
    throw new Error('"^" expects 1 or 2 arguments');
  }
}
class qe extends A {
  static parse(t, e) {
    return A.parse(t, e, (r) => {
      let a = 0;
      for (const i of r) a += i;
      return a;
    });
  }
}
class m {
  constructor(t, e) {
    this._args = t, this._calculate = e, this.type = w;
  }
  static parse(t, e) {
    const r = t.slice(1).map((a) => y(a, e));
    return new m(r, m.ops[t[0]]);
  }
  evaluate(t, e) {
    let r;
    return this._args && (r = this._args.map((a) => a.evaluate(t, e))), this._calculate(r);
  }
}
m.ops = { abs: (s) => Math.abs(s[0]), acos: (s) => Math.acos(s[0]), asin: (s) => Math.asin(s[0]), atan: (s) => Math.atan(s[0]), ceil: (s) => Math.ceil(s[0]), cos: (s) => Math.cos(s[0]), e: () => Math.E, floor: (s) => Math.floor(s[0]), ln: (s) => Math.log(s[0]), ln2: () => Math.LN2, log10: (s) => Math.log(s[0]) / Math.LN10, log2: (s) => Math.log(s[0]) / Math.LN2, max: (s) => Math.max(...s), min: (s) => Math.min(...s), pi: () => Math.PI, round: (s) => Math.round(s[0]), sin: (s) => Math.sin(s[0]), sqrt: (s) => Math.sqrt(s[0]), tan: (s) => Math.tan(s[0]) };
class Vt {
  constructor(t) {
    this._args = t, this.type = L;
  }
  static parse(t, e) {
    return new Vt(t.slice(1).map((r) => y(r, e)));
  }
  evaluate(t, e) {
    return this._args.map((r) => r.evaluate(t, e)).join("");
  }
}
class at {
  constructor(t, e) {
    this._arg = t, this._calculate = e, this.type = L;
  }
  static parse(t, e) {
    if (t.length !== 2) throw new Error(`${t[0]} expects 1 argument`);
    const r = y(t[1], e);
    return new at(r, at.ops[t[0]]);
  }
  evaluate(t, e) {
    return this._calculate(this._arg.evaluate(t, e));
  }
}
at.ops = { downcase: (s) => s.toLowerCase(), upcase: (s) => s.toUpperCase() };
class Ft {
  constructor(t) {
    this._args = t, this.type = Y;
  }
  static parse(t, e) {
    if (t.length !== 4) throw new Error('"rgb" expects 3 arguments');
    const r = t.slice(1).map((a) => y(a, e));
    return new Ft(r);
  }
  evaluate(t, e) {
    const r = this._validate(this._args[0].evaluate(t, e)), a = this._validate(this._args[1].evaluate(t, e)), i = this._validate(this._args[2].evaluate(t, e));
    return new b({ r, g: a, b: i });
  }
  _validate(t) {
    if (typeof t != "number" || t < 0 || t > 255) throw new Error(`${t}: invalid color component`);
    return Math.round(t);
  }
}
class $t {
  constructor(t) {
    this._args = t, this.type = Y;
  }
  static parse(t, e) {
    if (t.length !== 5) throw new Error('"rgba" expects 4 arguments');
    const r = t.slice(1).map((a) => y(a, e));
    return new $t(r);
  }
  evaluate(t, e) {
    const r = this._validate(this._args[0].evaluate(t, e)), a = this._validate(this._args[1].evaluate(t, e)), i = this._validate(this._args[2].evaluate(t, e)), o = this._validateAlpha(this._args[3].evaluate(t, e));
    return new b({ r, g: a, b: i, a: o });
  }
  _validate(t) {
    if (typeof t != "number" || t < 0 || t > 255) throw new Error(`${t}: invalid color component`);
    return Math.round(t);
  }
  _validateAlpha(t) {
    if (typeof t != "number" || t < 0 || t > 1) throw new Error(`${t}: invalid alpha color component`);
    return t;
  }
}
class Mt {
  constructor(t) {
    this._color = t, this.type = ht(w, 4);
  }
  static parse(t, e) {
    if (t.length !== 2) throw new Error('"to-rgba" expects 1 argument');
    const r = y(t[1], e);
    return new Mt(r);
  }
  evaluate(t, e) {
    return new b(this._color.evaluate(t, e)).toRgba();
  }
}
class K {
  constructor(t, e) {
    this.type = t, this._args = e;
  }
  static parse(t, e) {
    const r = t[0];
    if (t.length < 2) throw new Error(`${r} expects at least one argument`);
    let a, i = 1;
    if (r === "array") {
      if (t.length > 2) {
        switch (t[1]) {
          case "string":
            a = L;
            break;
          case "number":
            a = w;
            break;
          case "boolean":
            a = D;
            break;
          default:
            throw new Error('"array" type argument must be string, number or boolean');
        }
        i++;
      } else a = C;
      let n;
      if (t.length > 3) {
        if (n = t[2], n !== null && (typeof n != "number" || n < 0 || n !== Math.floor(n))) throw new Error('"array" length argument must be a positive integer literal');
        i++;
      }
      a = ht(a, n);
    } else switch (r) {
      case "string":
        a = L;
        break;
      case "number":
        a = w;
        break;
      case "boolean":
        a = D;
        break;
      case "object":
        a = bt;
    }
    const o = [];
    for (; i < t.length; i++) {
      const n = y(t[i], e);
      o.push(n);
    }
    return new K(a, o);
  }
  evaluate(t, e) {
    let r;
    for (const a of this._args) {
      const i = a.evaluate(t, e);
      if (r = Tt(i), At(r, this.type)) return i;
    }
    throw new Error(`Expected ${rt(this.type)} but got ${rt(r)}`);
  }
}
class G {
  constructor(t, e) {
    this.type = t, this._args = e;
  }
  static parse(t, e) {
    const r = t[0], a = G.types[r];
    if (a === D || a === L) {
      if (t.length !== 2) throw new Error(`${r} expects one argument`);
    } else if (t.length < 2) throw new Error(`${r} expects at least one argument`);
    const i = [];
    for (let o = 1; o < t.length; o++) {
      const n = y(t[o], e);
      i.push(n);
    }
    return new G(a, i);
  }
  evaluate(t, e) {
    if (this.type === D) return !!this._args[0].evaluate(t, e);
    if (this.type === L) return Nt(this._args[0].evaluate(t, e));
    if (this.type === w) {
      for (const r of this._args) {
        const a = Number(r.evaluate(t, e));
        if (!isNaN(a)) return a;
      }
      return null;
    }
    if (this.type === Y) {
      for (const r of this._args) try {
        const a = G.toColor(r.evaluate(t, e));
        if (a instanceof b) return a;
      } catch {
      }
      return null;
    }
  }
  static toBoolean(t) {
    return !!t;
  }
  static toString(t) {
    return Nt(t);
  }
  static toNumber(t) {
    const e = Number(t);
    if (isNaN(e)) throw new Error(`"${t}" is not a number`);
    return e;
  }
  static toColor(t) {
    if (t instanceof b) return t;
    if (typeof t == "string") {
      const e = b.fromString(t);
      if (e) return e;
      throw new Error(`"${t}" is not a color`);
    }
    if (Array.isArray(t)) return b.fromArray(t);
    throw new Error(`"${t}" is not a color`);
  }
}
G.types = { "to-boolean": D, "to-color": Y, "to-number": w, "to-string": L };
class Ct {
  constructor(t) {
    this._val = t, this.type = Tt(t);
  }
  static parse(t) {
    if (t.length !== 2) throw new Error('"literal" expects 1 argument');
    return new Ct(t[1]);
  }
  evaluate(t, e) {
    return this._val;
  }
}
class Yt {
  constructor(t) {
    this._arg = t, this.type = L;
  }
  static parse(t, e) {
    if (t.length !== 2) throw new Error('"typeof" expects 1 argument');
    return new Yt(y(t[1], e));
  }
  evaluate(t, e) {
    return rt(Tt(this._arg.evaluate(t, e)));
  }
}
function y(s, t, e) {
  const r = typeof s;
  if (r === "string" || r === "boolean" || r === "number" || s === null) {
    if (e) switch (e.kind) {
      case "string":
        r !== "string" && (s = G.toString(s));
        break;
      case "number":
        r !== "number" && (s = G.toNumber(s));
        break;
      case "color":
        s = G.toColor(s);
    }
    s = ["literal", s];
  }
  if (!Array.isArray(s) || s.length === 0) throw new Error("Expression must be a non empty array");
  const a = s[0];
  if (typeof a != "string") throw new Error("First element of expression must be a string");
  const i = _e[a];
  if (i === void 0) throw new Error(`Invalid expression operator "${a}"`);
  if (!i) throw new Error(`Unimplemented expression operator "${a}"`);
  return i.parse(s, t, e);
}
const _e = { array: K, boolean: K, collator: null, format: null, image: null, literal: Ct, number: K, "number-format": null, object: K, string: K, "to-boolean": G, "to-color": G, "to-number": G, "to-string": G, typeof: Yt, accumulated: null, "feature-state": null, "geometry-type": St, id: xe, "line-progress": null, properties: Ae, at: Fe, get: _t, has: mt, in: $e, "index-of": wt, length: kt, slice: Et, "!": Lt, "!=": Pe, "<": Se, "<=": Le, "==": Ne, ">": Ue, ">=": Oe, all: Ut, any: Be, case: Ge, coalesce: ke, match: ze, within: null, interpolate: k, "interpolate-hcl": k, "interpolate-lab": k, step: Bt, let: Gt, var: Ve, concat: Vt, downcase: at, "is-supported-script": null, "resolved-locale": null, upcase: at, rgb: Ft, rgba: $t, "to-rgba": Mt, "-": Me, "*": Ce, "/": Ye, "%": He, "^": je, "+": qe, abs: m, acos: m, asin: m, atan: m, ceil: m, cos: m, e: m, floor: m, ln: m, ln2: m, log10: m, log2: m, max: m, min: m, pi: m, round: m, sin: m, sqrt: m, tan: m, zoom: le, "heatmap-density": null, "has-id": zt, none: Ot };
class N {
  constructor(t) {
    this._expression = t;
  }
  filter(t, e) {
    if (!this._expression) return !0;
    try {
      return this._expression.evaluate(t, e);
    } catch (r) {
      return console.log(r.message), !0;
    }
  }
  static createFilter(t) {
    if (!t) return null;
    this.isLegacyFilter(t) && (t = this.convertLegacyFilter(t));
    try {
      const e = y(t, null, D);
      return new N(e);
    } catch (e) {
      return console.log(e.message), null;
    }
  }
  static isLegacyFilter(t) {
    if (!Array.isArray(t) || t.length === 0) return !0;
    switch (t[0]) {
      case "==":
      case "!=":
      case ">":
      case "<":
      case ">=":
      case "<=":
        return t.length === 3 && typeof t[1] == "string" && !Array.isArray(t[2]);
      case "in":
        return t.length >= 3 && typeof t[1] == "string" && !Array.isArray(t[2]);
      case "!in":
      case "none":
      case "!has":
        return !0;
      case "any":
      case "all":
        for (let e = 1; e < t.length; e++) if (this.isLegacyFilter(t[e])) return !0;
        return !1;
      case "has":
        return t.length === 2 && (t[1] === "$id" || t[1] === "$type");
      default:
        return !1;
    }
  }
  static convertLegacyFilter(t) {
    if (!Array.isArray(t) || t.length === 0) return !0;
    const e = t[0];
    if (t.length === 1) return e !== "any";
    switch (e) {
      case "==":
        return N.convertComparison("==", t[1], t[2]);
      case "!=":
        return N.negate(N.convertComparison("==", t[1], t[2]));
      case ">":
      case "<":
      case ">=":
      case "<=":
        return N.convertComparison(e, t[1], t[2]);
      case "in":
        return N.convertIn(t[1], t.slice(2));
      case "!in":
        return N.negate(N.convertIn(t[1], t.slice(2)));
      case "any":
      case "all":
      case "none":
        return N.convertCombining(e, t.slice(1));
      case "has":
        return N.convertHas(t[1]);
      case "!has":
        return N.negate(N.convertHas(t[1]));
      default:
        throw new Error("Unexpected legacy filter.");
    }
  }
  static convertComparison(t, e, r) {
    switch (e) {
      case "$type":
        return [t, ["geometry-type"], r];
      case "$id":
        return [t, ["id"], r];
      default:
        return [t, ["get", e], r];
    }
  }
  static convertIn(t, e) {
    switch (t) {
      case "$type":
        return ["in", ["geometry-type"], ["literal", e]];
      case "$id":
        return ["in", ["id"], ["literal", e]];
      default:
        return ["in", ["get", t], ["literal", e]];
    }
  }
  static convertHas(t) {
    switch (t) {
      case "$type":
        return !0;
      case "$id":
        return ["has-id"];
      default:
        return ["has", t];
    }
  }
  static convertCombining(t, e) {
    return [t].concat(e.map(this.convertLegacyFilter));
  }
  static negate(t) {
    return ["!", t];
  }
}
class It {
  constructor(t, e) {
    let r;
    switch (this.isDataDriven = !1, this.interpolator = null, t.type) {
      case "number":
      case "color":
        r = !0;
        break;
      case "array":
        r = t.value === "number";
        break;
      default:
        r = !1;
    }
    if (e == null && (e = t.default), Array.isArray(e) && e.length > 0 && _e[e[0]]) {
      const i = { number: w, color: Y, string: L, boolean: D, enum: L };
      try {
        const o = t.type === "array" ? ht(i[t.value] || C, t.length) : i[t.type], n = y(e, null, o);
        this.getValue = this._buildExpression(n, t), this.isDataDriven = !0, n instanceof k && n.input instanceof le && (this.interpolator = n);
      } catch (o) {
        console.log(o.message), this.getValue = this._buildSimple(t.default);
      }
      return;
    }
    r && e.type === "interval" && (r = !1);
    const a = e?.stops && e.stops.length > 0;
    if (a) for (const i of e.stops) i[1] = this._validate(i[1], t);
    if (this.isDataDriven = !!e && !!e.property, this.isDataDriven) if (e.default !== void 0 && (e.default = this._validate(e.default, t)), a) switch (e.type) {
      case "identity":
        this.getValue = this._buildIdentity(e, t);
        break;
      case "categorical":
        this.getValue = this._buildCategorical(e, t);
        break;
      default:
        this.getValue = r ? this._buildInterpolate(e, t) : this._buildInterval(e, t);
    }
    else this.getValue = this._buildIdentity(e, t);
    else a ? this.getValue = r ? this._buildZoomInterpolate(e) : this._buildZoomInterval(e) : (e = this._validate(e, t), this.getValue = this._buildSimple(e));
  }
  _validate(t, e) {
    if (e.type === "number") {
      if (e.minimum != null && t < e.minimum) return e.minimum;
      if (e.maximum != null && t > e.maximum) return e.maximum;
    } else e.type === "color" ? t = It._parseColor(t) : e.type === "enum" ? typeof t == "string" && (t = e.values.indexOf(t)) : e.type === "array" && e.value === "enum" ? t = t.map((r) => typeof r == "string" ? e.values.indexOf(r) : r) : e.type === "string" && (t = Nt(t));
    return t;
  }
  _buildSimple(t) {
    return () => t;
  }
  _buildExpression(t, e) {
    return (r, a) => {
      try {
        const i = t.evaluate(a, r);
        return i === void 0 ? e.default : this._validate(i, e);
      } catch (i) {
        return console.log(i.message), e.default;
      }
    };
  }
  _buildIdentity(t, e) {
    return (r, a) => {
      let i;
      return a && (i = a.values[t.property]), i !== void 0 && (i = this._validate(i, e)), i ?? (t.default !== void 0 ? t.default : e.default);
    };
  }
  _buildCategorical(t, e) {
    return (r, a) => {
      let i;
      return a && (i = a.values[t.property]), i = this._categorical(i, t.stops), i !== void 0 ? i : t.default !== void 0 ? t.default : e.default;
    };
  }
  _buildInterval(t, e) {
    return (r, a) => {
      let i;
      return a && (i = a.values[t.property]), typeof i == "number" ? this._interval(i, t.stops) : t.default !== void 0 ? t.default : e.default;
    };
  }
  _buildInterpolate(t, e) {
    return (r, a) => {
      let i;
      return a && (i = a.values[t.property]), typeof i == "number" ? this._interpolate(i, t.stops, t.base || 1) : t.default !== void 0 ? t.default : e.default;
    };
  }
  _buildZoomInterpolate(t) {
    return (e) => this._interpolate(e, t.stops, t.base || 1);
  }
  _buildZoomInterval(t) {
    return (e) => this._interval(e, t.stops);
  }
  _categorical(t, e) {
    const r = e.length;
    for (let a = 0; a < r; a++) if (e[a][0] === t) return e[a][1];
  }
  _interval(t, e) {
    const r = e.length;
    let a = 0;
    for (let i = 0; i < r && e[i][0] <= t; i++) a = i;
    return e[a][1];
  }
  _interpolate(t, e, r) {
    let a, i;
    const o = e.length;
    for (let n = 0; n < o; n++) {
      const l = e[n];
      if (!(l[0] <= t)) {
        i = l;
        break;
      }
      a = l;
    }
    if (a && i) {
      const n = i[0] - a[0], l = t - a[0], u = r === 1 ? l / n : (r ** l - 1) / (r ** n - 1);
      if (Array.isArray(a[1])) {
        const h = a[1], p = i[1], f = [];
        for (let d = 0; d < h.length; d++) f.push(x(h[d], p[d], u));
        return f;
      }
      return x(a[1], i[1], u);
    }
    return a ? a[1] : i ? i[1] : void 0;
  }
  static _isEmpty(t) {
    for (const e in t) if (t.hasOwnProperty(e)) return !1;
    return !0;
  }
  static _parseColor(t) {
    return Array.isArray(t) ? t : (typeof t == "string" && (t = new b(t)), t instanceof b && !this._isEmpty(t) ? b.toUnitRGBA(t) : void 0);
  }
}
const it = 8;
var ct;
(function(s) {
  s[s.BUTT = 0] = "BUTT", s[s.ROUND = 1] = "ROUND", s[s.SQUARE = 2] = "SQUARE", s[s.UNKNOWN = 4] = "UNKNOWN";
})(ct || (ct = {}));
class ir {
  constructor(t, e, r, a, i, o) {
    this.layer = t, this.feature = e, this.bounds = r, this.normalizationRatio = a, this.normalizationOffsetX = i, this.normalizationOffsetY = o;
  }
}
class pt {
  constructor(t, e, r, a) {
    switch (this.type = t, this.typeName = e.type, this.id = e.id, this.source = e.source, this.sourceLayer = e["source-layer"], this.minzoom = e.minzoom, this.maxzoom = e.maxzoom, this.filter = e.filter, this.layout = e.layout, this.paint = e.paint, this.z = r, this.uid = a, t) {
      case I.BACKGROUND:
        this._layoutDefinition = V.backgroundLayoutDefinition, this._paintDefinition = V.backgroundPaintDefinition;
        break;
      case I.FILL:
        this._layoutDefinition = V.fillLayoutDefinition, this._paintDefinition = V.fillPaintDefinition;
        break;
      case I.LINE:
        this._layoutDefinition = V.lineLayoutDefinition, this._paintDefinition = V.linePaintDefinition;
        break;
      case I.SYMBOL:
        this._layoutDefinition = V.symbolLayoutDefinition, this._paintDefinition = V.symbolPaintDefinition;
        break;
      case I.CIRCLE:
        this._layoutDefinition = V.circleLayoutDefinition, this._paintDefinition = V.circlePaintDefinition;
    }
    this._layoutProperties = this._parseLayout(this.layout), this._paintProperties = this._parsePaint(this.paint);
  }
  getFeatureFilter() {
    return this._featureFilter !== void 0 ? this._featureFilter : this._featureFilter = N.createFilter(this.filter);
  }
  getLayoutProperty(t) {
    return this._layoutProperties[t];
  }
  getPaintProperty(t) {
    return this._paintProperties[t];
  }
  getLayoutValue(t, e, r) {
    let a;
    const i = this._layoutProperties[t];
    return i && (a = i.getValue(e, r)), a === void 0 && (a = this._layoutDefinition[t].default), a;
  }
  getPaintValue(t, e, r) {
    let a;
    const i = this._paintProperties[t];
    return i && (a = i.getValue(e, r)), a === void 0 && (a = this._paintDefinition[t].default), a;
  }
  isPainterDataDriven() {
    const t = this._paintProperties;
    if (t) {
      for (const e in t) if (t[e].isDataDriven) return !0;
    }
    return !1;
  }
  isIntersectingFeature(t, e, r, a, i, o, n) {
    return !1;
  }
  getFeatureInflatedBounds(t, e, r, a) {
    return null;
  }
  _parseLayout(t) {
    const e = {};
    for (const r in t) {
      const a = this._layoutDefinition[r];
      a && (e[r] = new It(a, t[r]));
    }
    return e;
  }
  _parsePaint(t) {
    const e = {};
    for (const r in t) {
      const a = this._paintDefinition[r];
      a && (e[r] = new It(a, t[r]));
    }
    return e;
  }
  computeAttributesKey(t, e, r, a) {
    let i = 0, o = 0;
    for (const n of e) {
      let l = 3;
      if (!n || n !== a) {
        const u = r[n], { isLayout: h, isOptional: p } = u, f = h ? this.getLayoutProperty(n) : this.getPaintProperty(n);
        l = f?.interpolator ? 2 : f?.isDataDriven ? 1 : p && !f ? 3 : 0;
      }
      o |= l << i, i += 2;
    }
    return o << 3 | t;
  }
}
class Xt extends pt {
  constructor(t, e, r, a) {
    super(t, e, r, a), this.backgroundMaterial = new Q(this.computeAttributesKey(W.BACKGROUND, Q.ATTRIBUTES, Q.ATTRIBUTES_INFO));
  }
}
class Qt extends pt {
  constructor(t, e, r, a) {
    super(t, e, r, a);
    const i = this.getPaintProperty("fill-color"), o = this.getPaintProperty("fill-opacity"), n = this.getPaintProperty("fill-pattern");
    this.hasDataDrivenColor = i?.isDataDriven, this.hasDataDrivenOpacity = o?.isDataDriven, this.hasDataDrivenFill = this.hasDataDrivenColor || this.hasDataDrivenOpacity || n?.isDataDriven;
    const l = this.getPaintProperty("fill-outline-color");
    this.outlineUsesFillColor = !l, this.hasDataDrivenOutlineColor = l?.isDataDriven, this.hasDataDrivenOutline = l ? l.isDataDriven : !!i && i.isDataDriven, this.hasDataDrivenOutline = (l ? this.hasDataDrivenOutlineColor : this.hasDataDrivenColor) || this.hasDataDrivenOpacity, this.fillMaterial = new tt(this.computeAttributesKey(W.FILL, tt.ATTRIBUTES, tt.ATTRIBUTES_INFO)), this.outlineMaterial = new F(this.computeAttributesKey(W.OUTLINE, this.outlineUsesFillColor ? F.ATTRIBUTES_FILL : F.ATTRIBUTES_OUTLINE, this.outlineUsesFillColor ? F.ATTRIBUTES_INFO_FILL : F.ATTRIBUTES_INFO_OUTLINE), this.outlineUsesFillColor);
  }
  getFeatureInflatedBounds(t, e, r, a) {
    const i = Ht(t);
    if (!i) return null;
    const o = this.getPaintValue("fill-translate", e, t), n = a * Math.max(o[0], o[1]);
    return i[0] -= n, i[2] -= n, i[1] += n, i[3] += n, i;
  }
  isIntersectingFeature(t, e, r, a, i, o, n) {
    const l = a.getGeometry();
    if (!l) return !1;
    const u = it / n.normalizationRatio;
    t = t / n.normalizationRatio + n.normalizationOffsetX, e = e / n.normalizationRatio + n.normalizationOffsetY;
    const h = Pt(this.getPaintValue("fill-translate", i, a), this.getPaintValue("fill-translate-anchor", i, a), o, it);
    return t -= u * h.x, e -= u * h.y, !!Ee(t, e, l) || re(t, e, l, u * r);
  }
}
class Jt extends pt {
  constructor(t, e, r, a) {
    super(t, e, r, a);
    const i = this.getPaintProperty("line-pattern");
    if (this.lineMaterial = new et(this.computeAttributesKey(W.LINE, et.ATTRIBUTES, et.ATTRIBUTES_INFO, i ? "line-dasharray" : "")), this.hasDataDrivenLine = this.getPaintProperty("line-blur")?.isDataDriven || this.getPaintProperty("line-color")?.isDataDriven || this.getPaintProperty("line-gap-width")?.isDataDriven || this.getPaintProperty("line-offset")?.isDataDriven || this.getPaintProperty("line-opacity")?.isDataDriven || this.getPaintProperty("line-pattern")?.isDataDriven || this.getPaintProperty("line-dasharray")?.isDataDriven || this.getLayoutProperty("line-cap")?.isDataDriven || this.getPaintProperty("line-width")?.isDataDriven, this.canUseThinTessellation = !1, !this.hasDataDrivenLine) {
      const o = this.getPaintProperty("line-width");
      if (!o || typeof o == "number" && 0.5 * o < be) {
        const n = this.getPaintProperty("line-offset");
        (!n || typeof n == "number" && n === 0) && (this.canUseThinTessellation = !0);
      }
    }
  }
  getDashKey(t, e) {
    let r;
    switch (e) {
      case ct.BUTT:
        r = "Butt";
        break;
      case ct.ROUND:
        r = "Round";
        break;
      case ct.SQUARE:
        r = "Square";
        break;
      default:
        r = "Butt";
    }
    return `dasharray-[${t.toString()}]-${r}`;
  }
  getFeatureInflatedBounds(t, e, r, a) {
    const i = Ht(t);
    if (!i) return null;
    const o = this.getPaintValue("line-translate", e, t), n = a * Math.max(o[0], o[1]);
    i[0] -= n, i[2] -= n, i[1] += n, i[3] += n;
    const l = a * Math.abs(this.getPaintValue("line-offset", e, t) || 0), u = a * (this.getPaintValue("line-width", e, t) / 2);
    return i[0] -= l + u, i[1] -= l + u, i[2] += l + u, i[3] += l + u, i;
  }
  isIntersectingFeature(t, e, r, a, i, o, n) {
    let l = a.getGeometry();
    if (!l) return !1;
    const u = it / n.normalizationRatio;
    t = t / n.normalizationRatio + n.normalizationOffsetX, e = e / n.normalizationRatio + n.normalizationOffsetY;
    const h = Pt(this.getPaintValue("line-translate", i, a), this.getPaintValue("line-translate-anchor", i, a), o, it);
    t -= u * h.x, e -= u * h.y;
    const p = u * this.getPaintValue("line-offset", i, a) || 0;
    p !== 0 && (l = Ie(l, -p));
    const f = this.getPaintValue("line-width", i, a);
    return re(t, e, l, u * (r + f / 2));
  }
}
class te extends pt {
  constructor(t, e, r, a) {
    super(t, e, r, a), this.iconMaterial = new lt(this.computeAttributesKey(W.ICON, lt.ATTRIBUTES, lt.ATTRIBUTES_INFO)), this.textMaterial = new ut(this.computeAttributesKey(W.TEXT, ut.ATTRIBUTES, ut.ATTRIBUTES_INFO)), this.hasDataDrivenIcon = this.getPaintProperty("icon-color")?.isDataDriven || this.getPaintProperty("icon-halo-blur")?.isDataDriven || this.getPaintProperty("icon-halo-color")?.isDataDriven || this.getPaintProperty("icon-halo-width")?.isDataDriven || this.getPaintProperty("icon-opacity")?.isDataDriven || this.getLayoutProperty("icon-size")?.isDataDriven, this.hasDataDrivenText = this.getPaintProperty("text-color")?.isDataDriven || this.getPaintProperty("text-halo-blur")?.isDataDriven || this.getPaintProperty("text-halo-color")?.isDataDriven || this.getPaintProperty("text-halo-width")?.isDataDriven || this.getPaintProperty("text-opacity")?.isDataDriven || this.getLayoutProperty("text-size")?.isDataDriven;
  }
}
class ee extends pt {
  constructor(t, e, r, a) {
    super(t, e, r, a), this.circleMaterial = new J(this.computeAttributesKey(W.CIRCLE, J.ATTRIBUTES, J.ATTRIBUTES_INFO));
  }
  getFeatureInflatedBounds(t, e, r, a) {
    const i = Ht(t);
    if (!i) return null;
    const o = this.getPaintValue("circle-translate", e, t), n = Math.max(o[0], o[1]);
    i[0] -= n, i[2] -= n, i[1] += n, i[3] += n;
    const l = a * (it * (this.getPaintValue("circle-radius", e, t) + this.getPaintValue("circle-stroke-width", e, t)) / 2);
    return i[0] -= l, i[1] -= l, i[2] += l, i[3] += l, i;
  }
  isIntersectingFeature(t, e, r, a, i, o, n) {
    const l = a.getGeometry();
    if (!l) return !1;
    const u = it / n.normalizationRatio;
    t = t / n.normalizationRatio + n.normalizationOffsetX, e = e / n.normalizationRatio + n.normalizationOffsetY, r *= u;
    const h = Pt(this.getPaintValue("circle-translate", i, a), this.getPaintValue("circle-translate-anchor", i, a), o, u), p = u * (this.getPaintValue("circle-radius", i, a) + this.getPaintValue("circle-stroke-width", i, a));
    let f, d;
    for (const S of l) if (S) {
      for (const $ of S)
        if (f = $.x + h.x, d = $.y + h.y, Math.sqrt((t - f) * (t - f) + (e - d) * (e - d)) - r <= p) return !0;
    }
    return !1;
  }
}
class nr {
  constructor(t, e, r) {
    let a;
    this.allowOverlap = t.getLayoutValue("icon-allow-overlap", e), this.ignorePlacement = t.getLayoutValue("icon-ignore-placement", e), this.keepUpright = t.getLayoutValue("icon-keep-upright", e), this.optional = t.getLayoutValue("icon-optional", e), this.rotationAlignment = t.getLayoutValue("icon-rotation-alignment", e), this.rotationAlignment === X.AUTO && (this.rotationAlignment = r ? X.MAP : X.VIEWPORT), a = t.getLayoutProperty("icon-anchor"), a?.isDataDriven ? this._anchorProp = a : this.anchor = t.getLayoutValue("icon-anchor", e), a = t.getLayoutProperty("icon-offset"), a?.isDataDriven ? this._offsetProp = a : this.offset = t.getLayoutValue("icon-offset", e), a = t.getLayoutProperty("icon-padding"), a?.isDataDriven ? this._paddingProp = a : this.padding = t.getLayoutValue("icon-padding", e), a = t.getLayoutProperty("icon-rotate"), a?.isDataDriven ? this._rotateProp = a : this.rotate = t.getLayoutValue("icon-rotate", e), a = t.getLayoutProperty("icon-size"), a?.isDataDriven ? this._sizeProp = a : this.size = t.getLayoutValue("icon-size", e);
  }
  update(t, e) {
    this._anchorProp && (this.anchor = this._anchorProp.getValue(t, e)), this._offsetProp && (this.offset = this._offsetProp.getValue(t, e)), this._paddingProp && (this.padding = this._paddingProp.getValue(t, e)), this._rotateProp && (this.rotate = this._rotateProp.getValue(t, e)), this._sizeProp && (this.size = this._sizeProp.getValue(t, e));
  }
}
class sr {
  constructor(t, e, r) {
    let a;
    this.allowOverlap = t.getLayoutValue("text-allow-overlap", e), this.ignorePlacement = t.getLayoutValue("text-ignore-placement", e), this.keepUpright = t.getLayoutValue("text-keep-upright", e), this.optional = t.getLayoutValue("text-optional", e), this.rotationAlignment = t.getLayoutValue("text-rotation-alignment", e), this.rotationAlignment === X.AUTO && (this.rotationAlignment = r ? X.MAP : X.VIEWPORT), a = t.getLayoutProperty("text-anchor"), a?.isDataDriven ? this._anchorProp = a : this.anchor = t.getLayoutValue("text-anchor", e), a = t.getLayoutProperty("text-justify"), a?.isDataDriven ? this._justifyProp = a : this.justify = t.getLayoutValue("text-justify", e), a = t.getLayoutProperty("text-letter-spacing"), a?.isDataDriven ? this._letterSpacingProp = a : this.letterSpacing = t.getLayoutValue("text-letter-spacing", e), a = t.getLayoutProperty("text-line-height"), a?.isDataDriven ? this._lineHeightProp = a : this.lineHeight = t.getLayoutValue("text-line-height", e), a = t.getLayoutProperty("text-max-angle"), a?.isDataDriven ? this._maxAngleProp = a : this.maxAngle = t.getLayoutValue("text-max-angle", e), a = t.getLayoutProperty("text-max-width"), a?.isDataDriven ? this._maxWidthProp = a : this.maxWidth = t.getLayoutValue("text-max-width", e), a = t.getLayoutProperty("text-offset"), a?.isDataDriven ? this._offsetProp = a : this.offset = t.getLayoutValue("text-offset", e), a = t.getLayoutProperty("text-padding"), a?.isDataDriven ? this._paddingProp = a : this.padding = t.getLayoutValue("text-padding", e), a = t.getLayoutProperty("text-rotate"), a?.isDataDriven ? this._rotateProp = a : this.rotate = t.getLayoutValue("text-rotate", e), a = t.getLayoutProperty("text-size"), a?.isDataDriven ? this._sizeProp = a : this.size = t.getLayoutValue("text-size", e), a = t.getLayoutProperty("text-writing-mode"), a?.isDataDriven ? this._writingModeProp = a : this.writingMode = t.getLayoutValue("text-writing-mode", e);
  }
  update(t, e) {
    this._anchorProp && (this.anchor = this._anchorProp.getValue(t, e)), this._justifyProp && (this.justify = this._justifyProp.getValue(t, e)), this._letterSpacingProp && (this.letterSpacing = this._letterSpacingProp.getValue(t, e)), this._lineHeightProp && (this.lineHeight = this._lineHeightProp.getValue(t, e)), this._maxAngleProp && (this.maxAngle = this._maxAngleProp.getValue(t, e)), this._maxWidthProp && (this.maxWidth = this._maxWidthProp.getValue(t, e)), this._offsetProp && (this.offset = this._offsetProp.getValue(t, e)), this._paddingProp && (this.padding = this._paddingProp.getValue(t, e)), this._rotateProp && (this.rotate = this._rotateProp.getValue(t, e)), this._sizeProp && (this.size = this._sizeProp.getValue(t, e)), this._writingModeProp && (this.writingMode = this._writingModeProp.getValue(t, e));
  }
}
function Ht(s) {
  const t = s?.getGeometry();
  if (t == null) return null;
  let e = 1 / 0, r = 1 / 0, a = -1 / 0, i = -1 / 0;
  for (const o of t) if (o) for (const n of o) e = Math.min(e, n.x), r = Math.min(r, n.y), a = Math.max(a, n.x), i = Math.max(i, n.y);
  return we(e, r, a, i);
}
class ot {
  constructor(t) {
    if (this._style = t, this.backgroundBucketIds = [], this._uidToLayer = /* @__PURE__ */ new Map(), this._layerByName = {}, this._runningId = 0, t.layers || (t.layers = []), this.version = parseFloat(t.version), this.layers = t.layers.map((e, r, a) => this._create(e, r, a)).filter((e) => !!e), this.layers) for (let e = 0; e < this.layers.length; e++) {
      const r = this.layers[e];
      this._layerByName[r.id] = r, this._uidToLayer.set(r.uid, r), r.type === I.BACKGROUND && this.backgroundBucketIds.push(r.id);
    }
    this._identifyRefLayers();
  }
  isPainterDataDriven(t) {
    const e = this._layerByName[t];
    return !!e && e.isPainterDataDriven();
  }
  getStyleLayerId(t) {
    return t >= this.layers.length ? null : this.layers[t].id;
  }
  getStyleLayerByUID(t) {
    return this._uidToLayer.get(t) ?? null;
  }
  getStyleLayerIndex(t) {
    const e = this._layerByName[t];
    return e ? this.layers.indexOf(e) : -1;
  }
  setStyleLayer(t, e) {
    if (!t?.id) return;
    const r = this._style;
    e != null && e >= this.layers.length && (e = this.layers.length - 1);
    let a, i = !0;
    const o = this._layerByName[t.id];
    if (o) {
      const n = this.layers.indexOf(o);
      e || (e = n), e === n ? (i = !1, a = ot._recreateLayer(t, o), this.layers[e] = a, r.layers[e] = t) : (this.layers.splice(n, 1), r.layers.splice(n, 1), a = this._create(t, e, this.layers), this.layers.splice(e, 0, a), r.layers.splice(e, 0, t));
    } else a = this._create(t, e, this.layers), !e || e >= this.layers.length ? (this.layers.push(a), r.layers.push(t)) : (this.layers.splice(e, 0, a), r.layers.splice(e, 0, t));
    this._layerByName[t.id] = a, this._uidToLayer.set(a.uid, a), i && this._recomputeZValues(), this._identifyRefLayers();
  }
  getStyleLayer(t) {
    const e = this._layerByName[t];
    return e ? { type: e.typeName, id: e.id, source: e.source, "source-layer": e.sourceLayer, minzoom: e.minzoom, maxzoom: e.maxzoom, filter: e.filter, layout: e.layout, paint: e.paint } : null;
  }
  deleteStyleLayer(t) {
    const e = this._layerByName[t];
    if (e) {
      delete this._layerByName[t], this._uidToLayer.delete(e.uid);
      const r = this.layers.indexOf(e);
      this.layers.splice(r, 1), this._style.layers.splice(r, 1), this._recomputeZValues(), this._identifyRefLayers();
    }
  }
  getLayerById(t) {
    return this._layerByName[t];
  }
  getLayoutProperties(t) {
    const e = this._layerByName[t];
    return e ? e.layout : null;
  }
  getPaintProperties(t) {
    const e = this._layerByName[t];
    return e ? e.paint : null;
  }
  setPaintProperties(t, e) {
    const r = this._layerByName[t];
    if (!r) return;
    const a = { type: r.typeName, id: r.id, source: r.source, "source-layer": r.sourceLayer, minzoom: r.minzoom, maxzoom: r.maxzoom, filter: r.filter, layout: r.layout, paint: e }, i = ot._recreateLayer(a, r), o = this.layers.indexOf(r);
    this.layers[o] = i, this._style.layers[o].paint = e, this._layerByName[r.id] = i, this._uidToLayer.set(r.uid, i);
  }
  setLayoutProperties(t, e) {
    const r = this._layerByName[t];
    if (!r) return;
    const a = { type: r.typeName, id: r.id, source: r.source, "source-layer": r.sourceLayer, minzoom: r.minzoom, maxzoom: r.maxzoom, filter: r.filter, layout: e, paint: r.paint }, i = ot._recreateLayer(a, r), o = this.layers.indexOf(r);
    this.layers[o] = i, this._style.layers[o].layout = e, this._layerByName[r.id] = i, this._uidToLayer.set(r.uid, i);
  }
  setStyleLayerVisibility(t, e) {
    const r = this._layerByName[t];
    if (!r) return;
    const a = r.layout || {};
    a.visibility = e;
    const i = { type: r.typeName, id: r.id, source: r.source, "source-layer": r.sourceLayer, minzoom: r.minzoom, maxzoom: r.maxzoom, filter: r.filter, layout: a, paint: r.paint }, o = ot._recreateLayer(i, r), n = this.layers.indexOf(r);
    this.layers[n] = o, this._style.layers[n].layout = a, this._layerByName[r.id] = o, this._uidToLayer.set(r.uid, o);
  }
  getStyleLayerVisibility(t) {
    const e = this._layerByName[t];
    return e ? e.layout?.visibility ?? "visible" : "none";
  }
  _recomputeZValues() {
    const t = this.layers, e = 1 / (t.length + 1);
    for (let r = 0; r < t.length; r++) t[r].z = 1 - (1 + r) * e;
  }
  _identifyRefLayers() {
    const t = [], e = [];
    let r = 0;
    for (const a of this.layers) {
      const i = a.layout;
      if (a.type === I.FILL) {
        const o = a;
        let n = a.source + "|" + a.sourceLayer;
        n += "|" + (i?.visibility ?? ""), n += "|" + a.minzoom, n += "|" + a.maxzoom, n += "|" + JSON.stringify(a.filter), (o.hasDataDrivenFill || o.hasDataDrivenOutline) && (n += "|" + r), t.push({ key: n, layer: a });
      } else if (a.type === I.LINE) {
        const o = a, n = a.paint, l = n != null && (n["line-pattern"] != null || n["line-dasharray"] != null);
        let u = a.source + "|" + a.sourceLayer;
        u += "|" + (i?.visibility ?? ""), u += "|" + a.minzoom, u += "|" + a.maxzoom, u += "|" + JSON.stringify(a.filter), u += "|" + (i !== void 0 ? i["line-cap"] : ""), u += "|" + (i !== void 0 ? i["line-join"] : ""), (o.hasDataDrivenLine || l) && (u += "|" + r), e.push({ key: u, layer: a });
      }
      ++r;
    }
    this._assignRefLayers(t), this._assignRefLayers(e);
  }
  _assignRefLayers(t) {
    let e, r;
    t.sort((i, o) => i.key < o.key ? -1 : i.key > o.key ? 1 : 0);
    const a = t.length;
    for (let i = 0; i < a; i++) {
      const o = t[i];
      if (o.key === e) o.layer.refLayerId = r;
      else if (e = o.key, r = o.layer.id, o.layer.type === I.FILL) {
        if (!o.layer.getPaintProperty("fill-outline-color")) for (let n = i + 1; n < a; n++) {
          const l = t[n];
          if (l.key !== e) break;
          if (l.layer.getPaintProperty("fill-outline-color")) {
            t[i] = l, t[n] = o, r = l.layer.id;
            break;
          }
        }
      } else if (o.layer.type === I.LINE) {
        let n = o.layer;
        for (let l = i + 1; l < a; l++) {
          const u = t[l];
          if (u.key !== e) break;
          const h = u.layer;
          (n.canUseThinTessellation && !h.canUseThinTessellation || !n.canUseThinTessellation && (h.getPaintProperty("line-pattern") || h.getPaintProperty("line-dasharray"))) && (n = h, t[i] = u, t[l] = o, r = u.layer.id);
        }
      }
    }
  }
  _create(t, e, r) {
    const a = 1 - (1 + e) * (1 / (r.length + 1)), i = this._runningId++;
    switch (t.type) {
      case "background":
        return new Xt(I.BACKGROUND, t, a, i);
      case "fill":
        return new Qt(I.FILL, t, a, i);
      case "line":
        return new Jt(I.LINE, t, a, i);
      case "symbol":
        return new te(I.SYMBOL, t, a, i);
      case "raster":
        return console.warn(`Unsupported vector tile raster layer ${t.id}`), null;
      case "circle":
        return new ee(I.CIRCLE, t, a, i);
    }
    return null;
  }
  static _recreateLayer(t, e) {
    switch (t.type) {
      case "background":
        return new Xt(I.BACKGROUND, t, e.z, e.uid);
      case "fill":
        return new Qt(I.FILL, t, e.z, e.uid);
      case "line":
        return new Jt(I.LINE, t, e.z, e.uid);
      case "symbol":
        return new te(I.SYMBOL, t, e.z, e.uid);
      case "raster":
        return console.warn(`Unsupported vector tile raster layer ${t.id}`), null;
      case "circle":
        return new ee(I.CIRCLE, t, e.z, e.uid);
    }
    return null;
  }
}
export {
  ir as L,
  sr as O,
  nr as U,
  ot as l,
  Te as t
};
//# sourceMappingURL=StyleRepository-C8cWK8lG.js.map
