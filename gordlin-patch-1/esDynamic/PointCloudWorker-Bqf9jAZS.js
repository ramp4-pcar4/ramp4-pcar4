import { fQ as D, b6 as S, bh as v, eA as C, fR as x } from "./main-BEi6lHs4.js";
import { O as R } from "./quat-DytykOB-.js";
import { e as k } from "./quatf64-DxbQqBtW.js";
import { t as A, n as w } from "./vec3f32-BS0cezmI.js";
import { a as F, b as U, d as B } from "./PointCloudUniqueValueRenderer-C4ihML7H.js";
import { w as J, l as N, c as V, I as q } from "./I3SBinaryReader-mqZmiDg0.js";
import { O as T } from "./orientedBoundingBox-DcqBPg8B.js";
function _(c, t, l, n) {
  const { rendererJSON: u, isRGBRenderer: p } = c;
  let r = null, s = null;
  if (t && p) r = t;
  else if (t && u?.type === "pointCloudUniqueValueRenderer") {
    s = F.fromJSON(u);
    const e = s.colorUniqueValueInfos;
    r = new Uint8Array(3 * n);
    const i = g(s.fieldTransformType);
    for (let o = 0; o < n; o++) {
      const f = (i ? i(t[o]) : t[o]) + "";
      for (let a = 0; a < e.length; a++) if (e[a].values.includes(f)) {
        r[3 * o] = e[a].color.r, r[3 * o + 1] = e[a].color.g, r[3 * o + 2] = e[a].color.b;
        break;
      }
    }
  } else if (t && u?.type === "pointCloudStretchRenderer") {
    s = U.fromJSON(u);
    const e = s.stops;
    r = new Uint8Array(3 * n);
    const i = g(s.fieldTransformType);
    for (let o = 0; o < n; o++) {
      const f = i ? i(t[o]) : t[o], a = e.length - 1;
      if (f < e[0].value) r[3 * o] = e[0].color.r, r[3 * o + 1] = e[0].color.g, r[3 * o + 2] = e[0].color.b;
      else if (f >= e[a].value) r[3 * o] = e[a].color.r, r[3 * o + 1] = e[a].color.g, r[3 * o + 2] = e[a].color.b;
      else for (let b = 1; b < e.length; b++) if (f < e[b].value) {
        const m = (f - e[b - 1].value) / (e[b].value - e[b - 1].value);
        r[3 * o] = e[b].color.r * m + e[b - 1].color.r * (1 - m), r[3 * o + 1] = e[b].color.g * m + e[b - 1].color.g * (1 - m), r[3 * o + 2] = e[b].color.b * m + e[b - 1].color.b * (1 - m);
        break;
      }
    }
  } else if (t && u?.type === "pointCloudClassBreaksRenderer") {
    s = B.fromJSON(u);
    const e = s.colorClassBreakInfos;
    r = new Uint8Array(3 * n);
    const i = g(s.fieldTransformType);
    for (let o = 0; o < n; o++) {
      const f = i ? i(t[o]) : t[o];
      for (let a = 0; a < e.length; a++) if (f >= e[a].minValue && f <= e[a].maxValue) {
        r[3 * o] = e[a].color.r, r[3 * o + 1] = e[a].color.g, r[3 * o + 2] = e[a].color.b;
        break;
      }
    }
  } else r = new Uint8Array(3 * n).fill(255);
  if (l && s?.colorModulation) {
    const e = s.colorModulation.minValue, i = s.colorModulation.maxValue, o = 0.3;
    for (let f = 0; f < n; f++) {
      const a = l[f], b = a >= i ? 1 : a <= e ? o : o + (1 - o) * (a - e) / (i - e);
      r[3 * f] = b * r[3 * f], r[3 * f + 1] = b * r[3 * f + 1], r[3 * f + 2] = b * r[3 * f + 2];
    }
  }
  return r;
}
function E(c, t) {
  if (c.encoding == null || c.encoding === "") {
    const l = J(t, c);
    if (l.vertexAttributes.position == null) return;
    const n = N(t, l.vertexAttributes.position), u = l.header.fields, p = [u.offsetX, u.offsetY, u.offsetZ], r = [u.scaleX, u.scaleY, u.scaleZ], s = n.length / 3, e = new Float64Array(3 * s);
    for (let i = 0; i < s; i++) e[3 * i] = n[3 * i] * r[0] + p[0], e[3 * i + 1] = n[3 * i + 1] * r[1] + p[1], e[3 * i + 2] = n[3 * i + 2] * r[2] + p[2];
    return e;
  }
  if (c.encoding === "lepcc-xyz") return V(t).result;
}
function h(c, t, l) {
  return c?.attributeInfo.useElevation ? t ? z(t, l) : null : c?.attributeInfo.storageInfo ? q(c.attributeInfo.storageInfo, c.buffer, l) : null;
}
function z(c, t) {
  const l = new Float64Array(t);
  for (let n = 0; n < t; n++) l[n] = c[3 * n + 2];
  return l;
}
function P(c, t, l, n, u) {
  const p = c.length / 3;
  let r = 0;
  for (let s = 0; s < p; s++) {
    let e = !0;
    for (let i = 0; i < n.length && e; i++) {
      const { filterJSON: o } = n[i], f = u[i].values[s];
      switch (o.type) {
        case "pointCloudValueFilter": {
          const a = o.mode === "exclude";
          o.values.includes(f) === a && (e = !1);
          break;
        }
        case "pointCloudBitfieldFilter": {
          const a = M(o.requiredSetBits), b = M(o.requiredClearBits);
          (f & a) === a && !(f & b) || (e = !1);
          break;
        }
        case "pointCloudReturnFilter": {
          const a = 15 & f, b = f >>> 4 & 15, m = b > 1, $ = a === 1, I = a === b;
          let y = !1;
          for (const d of o.includedReturns) if (d === "last" && I || d === "firstOfMany" && $ && m || d === "lastOfMany" && I && m || d === "single" && !m) {
            y = !0;
            break;
          }
          y || (e = !1);
          break;
        }
      }
    }
    e && (l[r] = s, c[3 * r] = c[3 * s], c[3 * r + 1] = c[3 * s + 1], c[3 * r + 2] = c[3 * s + 2], t[3 * r] = t[3 * s], t[3 * r + 1] = t[3 * s + 1], t[3 * r + 2] = t[3 * s + 2], r++);
  }
  return r;
}
function g(c) {
  switch (c) {
    default:
    case null:
    case "none":
      return (t) => t;
    case "low-four-bit":
      return (t) => 15 & t;
    case "high-four-bit":
      return (t) => (240 & t) >> 4;
    case "absolute-value":
      return (t) => Math.abs(t);
    case "modulo-ten":
      return (t) => t % 10;
  }
}
function M(c) {
  let t = 0;
  for (const l of c || []) t |= 1 << l;
  return t;
}
class X {
  transform(t) {
    const l = this._transform(t), n = [l.points.buffer, l.rgb.buffer];
    l.pointIdFilterMap != null && n.push(l.pointIdFilterMap.buffer);
    for (const u of l.attributes) "buffer" in u.values && D(u.values.buffer) && u.values.buffer !== l.rgb.buffer && n.push(u.values.buffer);
    return Promise.resolve({ result: l, transferList: n });
  }
  _transform(t) {
    const l = E(t.schema, t.geometryBuffer);
    let n = l.length / 3, u = null;
    const p = new Array(), r = h(t.primaryAttributeData, l, n);
    t.primaryAttributeData != null && r && p.push({ attributeInfo: t.primaryAttributeData.attributeInfo, values: r });
    const s = h(t.modulationAttributeData, l, n);
    t.modulationAttributeData != null && s && p.push({ attributeInfo: t.modulationAttributeData.attributeInfo, values: s });
    let e = _(t.rendererInfo, r, s, n);
    if (t.filterInfo && t.filterInfo.length > 0 && t.filterAttributesData != null) {
      const o = t.filterAttributesData.filter(S).map((f) => {
        const a = h(f, l, n), b = { attributeInfo: f.attributeInfo, values: a };
        return p.push(b), b;
      });
      u = new Uint32Array(n), n = P(l, e, u, t.filterInfo, o);
    }
    for (const o of t.userAttributesData) {
      const f = h(o, l, n);
      p.push({ attributeInfo: o.attributeInfo, values: f });
    }
    3 * n < e.length && (e = new Uint8Array(e.buffer.slice(0, 3 * n))), this._applyElevationOffsetInPlace(l, n, t.elevationOffset);
    const i = this._transformCoordinates(l, n, T.fromData(t.obbData), v.fromJSON(t.inSR), v.fromJSON(t.outSR));
    return { obbData: t.obbData, points: i, rgb: e, attributes: p, pointIdFilterMap: u };
  }
  _transformCoordinates(t, l, n, u, p) {
    if (!C(t, u, 0, t, p, 0, l)) throw new Error("Can't reproject");
    const r = A(n.center), s = w(), e = w(), i = A(n.halfSize);
    R(O, n.quaternion);
    const o = new Float32Array(3 * l);
    for (let f = 0; f < l; f++) {
      let a = 3 * f;
      s[0] = t[a] - r[0], s[1] = t[a + 1] - r[1], s[2] = t[a + 2] - r[2], x(e, s, O), i[0] = Math.max(i[0], Math.abs(e[0])), i[1] = Math.max(i[1], Math.abs(e[1])), i[2] = Math.max(i[2], Math.abs(e[2])), o[a++] = s[0], o[a++] = s[1], o[a] = s[2];
    }
    return n.halfSize = i, o;
  }
  _applyElevationOffsetInPlace(t, l, n) {
    if (n !== 0) for (let u = 0; u < l; u++) t[3 * u + 2] += n;
  }
}
const O = k();
function K() {
  return new X();
}
export {
  K as default
};
//# sourceMappingURL=PointCloudWorker-Bqf9jAZS.js.map
