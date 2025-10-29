import { s as f, C as D, ag as S } from "./main-DIdq27YS.js";
import { e as U } from "./VertexAttribute-CAkzp1tV.js";
const d = !0, m = { identifierOffset: 0, identifierLength: 10, versionOffset: 10, checksumOffset: 12, byteCount: 16 };
function L(t, e, r) {
  return { identifier: String.fromCharCode.apply(null, new Uint8Array(t, r + m.identifierOffset, m.identifierLength)), version: e.getUint16(r + m.versionOffset, d), checksum: e.getUint32(r + m.checksumOffset, d) };
}
const g = { sizeLo: 0, sizeHi: 4, minX: 8, minY: 16, minZ: 24, maxX: 32, maxY: 40, maxZ: 48, errorX: 56, errorY: 64, errorZ: 72, count: 80, reserved: 84, byteCount: 88 };
function k(t, e) {
  return { sizeLo: t.getUint32(e + g.sizeLo, d), sizeHi: t.getUint32(e + g.sizeHi, d), minX: t.getFloat64(e + g.minX, d), minY: t.getFloat64(e + g.minY, d), minZ: t.getFloat64(e + g.minZ, d), maxX: t.getFloat64(e + g.maxX, d), maxY: t.getFloat64(e + g.maxY, d), maxZ: t.getFloat64(e + g.maxZ, d), errorX: t.getFloat64(e + g.errorX, d), errorY: t.getFloat64(e + g.errorY, d), errorZ: t.getFloat64(e + g.errorZ, d), count: t.getUint32(e + g.count, d), reserved: t.getUint32(e + g.reserved, d) };
}
function q(t) {
  const e = new DataView(t, 0);
  let r = 0;
  const { identifier: c, version: o } = L(t, e, r);
  if (r += m.byteCount, c !== "LEPCC     ") throw new f("lepcc-decode-error", "Bad identifier");
  if (o > 1) throw new f("lepcc-decode-error", "Unknown version");
  const n = k(e, r);
  if (r += g.byteCount, n.sizeHi * 2 ** 32 + n.sizeLo !== t.byteLength) throw new f("lepcc-decode-error", "Bad size");
  const s = new Float64Array(3 * n.count), a = [], i = [], u = [], l = [];
  if (r = I(t, r, a), r = I(t, r, i), r = I(t, r, u), r = I(t, r, l), r !== t.byteLength) throw new f("lepcc-decode-error", "Bad length");
  let w = 0, y = 0;
  for (let b = 0; b < a.length; b++) {
    y += a[b];
    let v = 0;
    for (let C = 0; C < i[b]; C++) {
      v += u[w];
      const P = l[w];
      s[3 * w] = Math.min(n.maxX, n.minX + 2 * n.errorX * v), s[3 * w + 1] = Math.min(n.maxY, n.minY + 2 * n.errorY * y), s[3 * w + 2] = Math.min(n.maxZ, n.minZ + 2 * n.errorZ * P), w++;
    }
  }
  return { errorX: n.errorX, errorY: n.errorY, errorZ: n.errorZ, result: s };
}
function I(t, e, r) {
  const c = [];
  e = M(t, e, c);
  const o = [];
  for (let n = 0; n < c.length; n++) {
    o.length = 0, e = M(t, e, o);
    for (let s = 0; s < o.length; s++) r.push(o[s] + c[n]);
  }
  return e;
}
function M(t, e, r) {
  const c = new DataView(t, e), o = c.getUint8(0), n = 31 & o, s = !!(32 & o), a = (192 & o) >> 6;
  let i = 0;
  if (a === 0) i = c.getUint32(1, d), e += 5;
  else if (a === 1) i = c.getUint16(1, d), e += 3;
  else {
    if (a !== 2) throw new f("lepcc-decode-error", "Bad count type");
    i = c.getUint8(1), e += 2;
  }
  if (s) throw new f("lepcc-decode-error", "LUT not implemented");
  const u = Math.ceil(i * n / 8), l = new Uint8Array(t, e, u);
  let w = 0, y = 0, b = 0;
  const v = -1 >>> 32 - n;
  for (let C = 0; C < i; C++) {
    for (; y < n; ) w |= l[b] << y, y += 8, b += 1;
    r[C] = w & v, w >>>= n, y -= n, y + n > 32 && (w |= l[b - 1] >> 8 - y);
  }
  return e + b;
}
const h = { sizeLo: 0, sizeHi: 4, count: 8, colorMapCount: 12, lookupMethod: 14, compressionMethod: 15, byteCount: 16 };
function Y(t, e) {
  return { sizeLo: t.getUint32(e + h.sizeLo, d), sizeHi: t.getUint32(e + h.sizeHi, d), count: t.getUint32(e + h.count, d), colorMapCount: t.getUint16(e + h.colorMapCount, d), lookupMethod: t.getUint8(e + h.lookupMethod), compressionMethod: t.getUint8(e + h.compressionMethod) };
}
function V(t) {
  const e = new DataView(t, 0);
  let r = 0;
  const { identifier: c, version: o } = L(t, e, r);
  if (r += m.byteCount, c !== "ClusterRGB") throw new f("lepcc-decode-error", "Bad identifier");
  if (o > 1) throw new f("lepcc-decode-error", "Unknown version");
  const n = Y(e, r);
  if (r += h.byteCount, n.sizeHi * 2 ** 32 + n.sizeLo !== t.byteLength) throw new f("lepcc-decode-error", "Bad size");
  if ((n.lookupMethod === 2 || n.lookupMethod === 1) && n.compressionMethod === 0) {
    if (3 * n.colorMapCount + n.count + r !== t.byteLength || n.colorMapCount > 256) throw new f("lepcc-decode-error", "Bad count");
    const s = new Uint8Array(t, r, 3 * n.colorMapCount), a = new Uint8Array(t, r + 3 * n.colorMapCount, n.count), i = new Uint8Array(3 * n.count);
    for (let u = 0; u < n.count; u++) {
      const l = a[u];
      i[3 * u] = s[3 * l], i[3 * u + 1] = s[3 * l + 1], i[3 * u + 2] = s[3 * l + 2];
    }
    return i;
  }
  if (n.lookupMethod === 0 && n.compressionMethod === 0) {
    if (3 * n.count + r !== t.byteLength || n.colorMapCount !== 0) throw new f("lepcc-decode-error", "Bad count");
    return new Uint8Array(t, r).slice();
  }
  if (n.lookupMethod <= 2 && n.compressionMethod === 1) {
    if (r + 3 !== t.byteLength || n.colorMapCount !== 1) throw new f("lepcc-decode-error", "Bad count");
    const s = e.getUint8(r), a = e.getUint8(r + 1), i = e.getUint8(r + 2), u = new Uint8Array(3 * n.count);
    for (let l = 0; l < n.count; l++) u[3 * l] = s, u[3 * l + 1] = a, u[3 * l + 2] = i;
    return u;
  }
  throw new f("lepcc-decode-error", "Bad method " + n.lookupMethod + "," + n.compressionMethod);
}
const p = { sizeLo: 0, sizeHi: 4, count: 8, scaleFactor: 12, bitsPerPoint: 14, reserved: 15, byteCount: 16 };
function $(t, e) {
  return { sizeLo: t.getUint32(e + p.sizeLo, d), sizeHi: t.getUint32(e + p.sizeHi, d), count: t.getUint32(e + p.count, d), scaleFactor: t.getUint16(e + p.scaleFactor, d), bitsPerPoint: t.getUint8(e + p.bitsPerPoint), reserved: t.getUint8(e + p.reserved) };
}
function X(t) {
  const e = new DataView(t, 0);
  let r = 0;
  const { identifier: c, version: o } = L(t, e, r);
  if (r += m.byteCount, c !== "Intensity ") throw new f("lepcc-decode-error", "Bad identifier");
  if (o > 1) throw new f("lepcc-decode-error", "Unknown version");
  const n = $(e, r);
  if (r += p.byteCount, n.sizeHi * 2 ** 32 + n.sizeLo !== t.byteLength) throw new f("lepcc-decode-error", "Bad size");
  const s = new Uint16Array(n.count);
  if (n.bitsPerPoint === 8) {
    if (n.count + r !== t.byteLength) throw new f("lepcc-decode-error", "Bad size");
    const a = new Uint8Array(t, r, n.count);
    for (let i = 0; i < n.count; i++) s[i] = a[i] * n.scaleFactor;
  } else if (n.bitsPerPoint === 16) {
    if (2 * n.count + r !== t.byteLength) throw new f("lepcc-decode-error", "Bad size");
    const a = new Uint16Array(t, r, n.count);
    for (let i = 0; i < n.count; i++) s[i] = a[i] * n.scaleFactor;
  } else {
    const a = [];
    if (M(t, r, a) !== t.byteLength) throw new f("lepcc-decode-error", "Bad size");
    for (let i = 0; i < n.count; i++) s[i] = a[i] * n.scaleFactor;
  }
  return s;
}
const z = () => D.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");
function Z(t, e, r) {
  let c = "", o = 0;
  for (; o < r; ) {
    const n = t[e + o];
    if (n < 128) c += String.fromCharCode(n), o++;
    else if (n >= 192 && n < 224) {
      if (o + 1 >= r) throw new f("utf8-decode-error", "UTF-8 Decode failed. Two byte character was truncated.");
      const s = (31 & n) << 6 | 63 & t[e + o + 1];
      c += String.fromCharCode(s), o += 2;
    } else if (n >= 224 && n < 240) {
      if (o + 2 >= r) throw new f("utf8-decode-error", "UTF-8 Decode failed. Multi byte character was truncated.");
      const s = (15 & n) << 12 | (63 & t[e + o + 1]) << 6 | 63 & t[e + o + 2];
      c += String.fromCharCode(s), o += 3;
    } else {
      if (!(n >= 240 && n < 248)) throw new f("utf8-decode-error", "UTF-8 Decode failed. Invalid multi byte sequence.");
      {
        if (o + 3 >= r) throw new f("utf8-decode-error", "UTF-8 Decode failed. Multi byte character was truncated.");
        const s = (7 & n) << 18 | (63 & t[e + o + 1]) << 12 | (63 & t[e + o + 2]) << 6 | 63 & t[e + o + 3];
        if (s >= 65536) {
          const a = 55296 + (s - 65536 >> 10), i = 56320 + (1023 & s);
          c += String.fromCharCode(a, i);
        } else c += String.fromCharCode(s);
        o += 4;
      }
    }
  }
  return c;
}
function B(t, e) {
  const r = { byteOffset: 0, byteCount: 0, fields: /* @__PURE__ */ Object.create(null) };
  let c = 0;
  for (let o = 0; o < e.length; o++) {
    const n = e[o], s = n.valueType || n.type, a = _[s];
    r.fields[n.property] = a(t, c), c += O[s].BYTES_PER_ELEMENT;
  }
  return r.byteCount = c, r;
}
function H(t, e, r) {
  return T(t, e, r).map((c) => {
    const o = c ? Date.parse(c) : null;
    return o && !Number.isNaN(o) ? o : null;
  });
}
function T(t, e, r) {
  const c = [];
  let o, n, s = 0;
  for (n = 0; n < t; n += 1) {
    if (o = e[n], o > 0) {
      if (c.push(Z(r, s, o - 1)), r[s + o - 1] !== 0) throw new f("string-array-error", "Invalid string array: missing null termination.");
    } else c.push(null);
    s += o;
  }
  return c;
}
function F(t, e) {
  return new O[e.valueType](t, e.byteOffset, e.count * e.valuesPerElement);
}
function N(t, e) {
  return new Uint8Array(t, e.byteOffset, e.byteCount);
}
function j(t, e, r) {
  const c = e.header != null ? B(t, e.header) : { byteOffset: 0, byteCount: 0, fields: { count: r } }, o = { header: c, byteOffset: c.byteCount, byteCount: 0, entries: /* @__PURE__ */ Object.create(null) };
  let n = c.byteCount;
  for (let s = 0; s < e.ordering.length; s++) {
    const a = e.ordering[s], i = S(e[a]);
    if (i.count = c.fields.count ?? 0, i.valueType === "String") {
      if (i.byteOffset = n, i.byteCount = c.fields[a + "ByteCount"], i.encoding !== "UTF-8") throw new f("unsupported-encoding", "Unsupported String encoding.", { encoding: i.encoding });
      if (i.timeEncoding && i.timeEncoding !== "ECMA_ISO8601") throw new f("unsupported-time-encoding", "Unsupported time encoding.", { timeEncoding: i.timeEncoding });
    } else {
      if (!x(i.valueType)) throw new f("unsupported-value-type", "Unsupported binary valueType", { valueType: i.valueType });
      {
        const u = A(i.valueType);
        n += n % u != 0 ? u - n % u : 0, i.byteOffset = n, i.byteCount = u * i.valuesPerElement * i.count;
      }
    }
    n += i.byteCount ?? 0, o.entries[a] = i;
  }
  return o.byteCount = n - o.byteOffset, o;
}
function E(t, e, r) {
  if (e !== t && z().error(`Invalid ${r} buffer size
 expected: ${t}, actual: ${e})`), e < t) throw new f("buffer-too-small", "Binary buffer is too small", { expectedSize: t, actualSize: e });
}
function J(t, e) {
  const r = B(t, e && e.header);
  let c = r.byteCount;
  const o = { isDraco: !1, header: r, byteOffset: r.byteCount, byteCount: 0, vertexAttributes: {} }, n = r.fields, s = n.vertexCount != null ? n.vertexCount : n.count;
  for (const u of e.ordering) {
    if (!e.vertexAttributes[u]) continue;
    const l = { ...e.vertexAttributes[u], byteOffset: c, count: s }, w = R[u] || "_" + u;
    o.vertexAttributes[w] = l, c += A(l.valueType) * l.valuesPerElement * s;
  }
  const a = n.faceCount;
  if (e.faces && a) {
    o.faces = {};
    for (const u of e.ordering) {
      if (!e.faces[u]) continue;
      const l = { ...e.faces[u], byteOffset: c, count: a };
      o.faces[u] = l, c += A(l.valueType) * l.valuesPerElement * a;
    }
  }
  const i = n.featureCount;
  if (e.featureAttributes && e.featureAttributeOrder && i) {
    o.featureAttributes = {};
    for (const u of e.featureAttributeOrder) {
      if (!e.featureAttributes[u]) continue;
      const l = { ...e.featureAttributes[u], byteOffset: c, count: i };
      o.featureAttributes[u] = l, c += (l.valueType === "UInt64" ? 8 : A(l.valueType)) * l.valuesPerElement * i;
    }
  }
  return E(c, t.byteLength, "geometry"), o.byteCount = c - o.byteOffset, o;
}
const R = { position: U.POSITION, normal: U.NORMAL, color: U.COLOR, uv0: U.UV0, region: U.UVREGION };
function K(t, e, r) {
  if (t.encoding === "lepcc-rgb") return V(e);
  if (t.encoding === "lepcc-intensity") return X(e);
  if (t.encoding != null && t.encoding !== "") throw new f("unknown-attribute-storage-info-encoding", "Unknown Attribute Storage Info Encoding");
  t["attributeByteCounts "] && !t.attributeByteCounts && (z().warn("Warning: Trailing space in 'attributeByteCounts '."), t.attributeByteCounts = t["attributeByteCounts "]), t.ordering[0] === "ObjectIds" && t.hasOwnProperty("objectIds") && (z().warn("Warning: Case error in objectIds"), t.ordering[0] = "objectIds");
  const c = j(e, t, r);
  E(c.byteOffset + c.byteCount, e.byteLength, "attribute");
  const o = c.entries.attributeValues || c.entries.objectIds;
  if (o) {
    if (o.valueType === "String") {
      const n = c.entries.attributeByteCounts, s = F(e, n), a = N(e, o);
      return o.timeEncoding ? H(n.count, s, a) : T(n.count, s, a);
    }
    return F(e, o);
  }
  throw new f("bad-attribute-storage-info", "Bad attributeStorageInfo specification.");
}
const O = { Float32: Float32Array, Float64: Float64Array, UInt8: Uint8Array, Int8: Int8Array, UInt16: Uint16Array, Int16: Int16Array, UInt32: Uint32Array, Int32: Int32Array }, _ = { Float32: (t, e) => new DataView(t, 0).getFloat32(e, !0), Float64: (t, e) => new DataView(t, 0).getFloat64(e, !0), UInt8: (t, e) => new DataView(t, 0).getUint8(e), Int8: (t, e) => new DataView(t, 0).getInt8(e), UInt16: (t, e) => new DataView(t, 0).getUint16(e, !0), Int16: (t, e) => new DataView(t, 0).getInt16(e, !0), UInt32: (t, e) => new DataView(t, 0).getUint32(e, !0), Int32: (t, e) => new DataView(t, 0).getInt32(e, !0) };
function x(t) {
  return O.hasOwnProperty(t);
}
function A(t) {
  return x(t) ? O[t].BYTES_PER_ELEMENT : 0;
}
export {
  K as I,
  q as c,
  F as l,
  J as w
};
//# sourceMappingURL=I3SBinaryReader-CS0dSznu.js.map
