import { e as St } from "./deduplicate-Bb8wIPsz.js";
import { H as x } from "./InterleavedLayout-C2WW4IMr.js";
import { e as m } from "./VertexAttribute-CAkzp1tV.js";
import { C as R } from "./enums-Do5C4ZjN.js";
import { t as ht } from "./VertexElementDescriptor-BAy1DPb3.js";
import { hs as ot, kl as Ot, hT as Et, fr as H, cq as rt, ce as k, hR as At, km as Tt, cf as mt, cr as st, ch as gt, ci as w, ay as wt, cu as vt, kn as yt } from "./main-DIdq27YS.js";
function J(t, e = 0) {
  const n = t.stride;
  return Array.from(t.fields.keys()).map((s) => {
    const r = t.fields.get(s), i = r.constructor.ElementCount, l = $t(r.constructor.ElementType), c = r.offset, p = !(!r.optional || !r.optional.glNormalized);
    return new ht(s, i, l, c, n, p, e);
  });
}
function $t(t) {
  const e = Mt[t];
  if (e) return e;
  throw new Error("BufferType not supported in WebGL");
}
const Mt = { u8: R.UNSIGNED_BYTE, u16: R.UNSIGNED_SHORT, u32: R.UNSIGNED_INT, i8: R.BYTE, i16: R.SHORT, i32: R.INT, f32: R.FLOAT }, Rt = x().vec3f(m.POSITION).u16(m.COMPONENTINDEX), Pt = x().vec2u8(m.SIDENESS);
J(Pt);
const z = x().vec3f(m.POSITION0).vec3f(m.POSITION1).vec2i16(m.NORMALCOMPRESSED).u16(m.COMPONENTINDEX).u8(m.VARIANTOFFSET, { glNormalized: !0 }).u8(m.VARIANTSTROKE).u8(m.VARIANTEXTENSION, { glNormalized: !0 }), K = x().vec3f(m.POSITION0).vec3f(m.POSITION1).vec2i16(m.NORMALCOMPRESSED).vec2i16(m.NORMAL2COMPRESSED).u16(m.COMPONENTINDEX).u8(m.VARIANTOFFSET, { glNormalized: !0 }).u8(m.VARIANTSTROKE).u8(m.VARIANTEXTENSION, { glNormalized: !0 });
m.POSITION0, m.POSITION1, m.COMPONENTINDEX, m.VARIANTOFFSET, m.VARIANTSTROKE, m.VARIANTEXTENSION, m.NORMALCOMPRESSED, m.NORMAL2COMPRESSED, m.SIDENESS;
const P = -1;
var it;
function Dt(t, e, n, s = _t) {
  const r = t.vertices.position, i = t.vertices.componentIndex, l = ot(s.anglePlanar), c = ot(s.angleSignificantEdge), p = Math.cos(c), f = Math.cos(l), u = G.edge, I = u.position0, S = u.position1, d = u.faceNormal0, v = u.faceNormal1, h = Ft(t), y = xt(t), o = y.length / 4, a = e.allocate(o);
  let g = 0;
  const N = o, O = n.allocate(N);
  let T = 0, $ = 0, E = 0;
  const Z = Ot(0, o), _ = new Float32Array(o);
  _.forEach((D, A, F) => {
    r.getVec(y[4 * A], I), r.getVec(y[4 * A + 1], S), F[A] = Et(I, S);
  }), Z.sort((D, A) => _[A] - _[D]);
  const tt = new Array(), et = new Array();
  for (let D = 0; D < o; D++) {
    const A = Z[D], F = _[A], W = y[4 * A], dt = y[4 * A + 1], V = y[4 * A + 2], b = y[4 * A + 3], nt = b === P;
    if (r.getVec(W, I), r.getVec(dt, S), nt) H(d, h[3 * V], h[3 * V + 1], h[3 * V + 2]), rt(v, d), u.componentIndex = i.get(W), u.cosAngle = k(d, v);
    else {
      if (H(d, h[3 * V], h[3 * V + 1], h[3 * V + 2]), H(v, h[3 * b], h[3 * b + 1], h[3 * b + 2]), u.componentIndex = i.get(W), u.cosAngle = k(d, v), Ct(u, f)) continue;
      u.cosAngle < -0.9999 && rt(v, d);
    }
    $ += F, E++, nt || Vt(u, p) ? (e.write(a, g++, u), tt.push(F)) : Lt(u, l) && (n.write(O, T++, u), et.push(F));
  }
  const pt = new Float32Array(tt.reverse()), It = new Float32Array(et.reverse());
  return { regular: { instancesData: e.trim(a, g), lodInfo: { lengths: pt } }, silhouette: { instancesData: n.trim(O, T), lodInfo: { lengths: It } }, averageEdgeLength: $ / E };
}
function Vt(t, e) {
  return t.cosAngle < e;
}
function Ct(t, e) {
  return t.cosAngle > e;
}
function Lt(t, e) {
  const n = At(t.cosAngle), s = G.fwd, r = G.ortho;
  return Tt(s, t.position1, t.position0), n * (k(mt(r, t.faceNormal0, t.faceNormal1), s) > 0 ? -1 : 1) > e;
}
function xt(t) {
  const e = t.faces.length / 3, n = t.faces, s = t.neighbors;
  let r = 0;
  for (let c = 0; c < e; c++) {
    const p = s[3 * c], f = s[3 * c + 1], u = s[3 * c + 2], I = n[3 * c], S = n[3 * c + 1], d = n[3 * c + 2];
    r += p === P || I < S ? 1 : 0, r += f === P || S < d ? 1 : 0, r += u === P || d < I ? 1 : 0;
  }
  const i = new Int32Array(4 * r);
  let l = 0;
  for (let c = 0; c < e; c++) {
    const p = s[3 * c], f = s[3 * c + 1], u = s[3 * c + 2], I = n[3 * c], S = n[3 * c + 1], d = n[3 * c + 2];
    (p === P || I < S) && (i[l++] = I, i[l++] = S, i[l++] = c, i[l++] = p), (f === P || S < d) && (i[l++] = S, i[l++] = d, i[l++] = c, i[l++] = f), (u === P || d < I) && (i[l++] = d, i[l++] = I, i[l++] = c, i[l++] = u);
  }
  return i;
}
function Ft(t) {
  const e = t.faces.length / 3, n = t.vertices.position, s = t.faces, r = X.v0, i = X.v1, l = X.v2, c = new Float32Array(3 * e);
  for (let p = 0; p < e; p++) {
    const f = s[3 * p], u = s[3 * p + 1], I = s[3 * p + 2];
    n.getVec(f, r), n.getVec(u, i), n.getVec(I, l), st(i, i, r), st(l, l, r), mt(r, i, l), gt(r, r), c[3 * p] = r[0], c[3 * p + 1] = r[1], c[3 * p + 2] = r[2];
  }
  return c;
}
(function(t) {
  t[t.SOLID = 0] = "SOLID", t[t.SKETCH = 1] = "SKETCH";
})(it || (it = {}));
const G = { edge: { position0: w(), position1: w(), faceNormal0: w(), faceNormal1: w(), componentIndex: 0, cosAngle: 0 }, ortho: w(), fwd: w() }, X = { v0: w(), v1: w(), v2: w() }, _t = { anglePlanar: 4, angleSignificantEdge: 35 };
function ct(t, e, n) {
  const s = e / 3, r = new Uint32Array(n + 1), i = new Uint32Array(n + 1), l = (o, a) => {
    o < a ? r[o + 1]++ : i[a + 1]++;
  };
  for (let o = 0; o < s; o++) {
    const a = t[3 * o], g = t[3 * o + 1], N = t[3 * o + 2];
    l(a, g), l(g, N), l(N, a);
  }
  let c = 0, p = 0;
  for (let o = 0; o < n; o++) {
    const a = r[o + 1], g = i[o + 1];
    r[o + 1] = c, i[o + 1] = p, c += a, p += g;
  }
  const f = new Uint32Array(6 * s), u = r[n], I = (o, a, g) => {
    if (o < a) {
      const N = r[o + 1]++;
      f[2 * N] = a, f[2 * N + 1] = g;
    } else {
      const N = i[a + 1]++;
      f[2 * u + 2 * N] = o, f[2 * u + 2 * N + 1] = g;
    }
  };
  for (let o = 0; o < s; o++) {
    const a = t[3 * o], g = t[3 * o + 1], N = t[3 * o + 2];
    I(a, g, o), I(g, N, o), I(N, a, o);
  }
  const S = (o, a) => {
    const g = 2 * o, N = a - o;
    for (let O = 1; O < N; O++) {
      const T = f[g + 2 * O], $ = f[g + 2 * O + 1];
      let E = O - 1;
      for (; E >= 0 && f[g + 2 * E] > T; E--) f[g + 2 * E + 2] = f[g + 2 * E], f[g + 2 * E + 3] = f[g + 2 * E + 1];
      f[g + 2 * E + 2] = T, f[g + 2 * E + 3] = $;
    }
  };
  for (let o = 0; o < n; o++) S(r[o], r[o + 1]), S(u + i[o], u + i[o + 1]);
  const d = new Int32Array(3 * s), v = (o, a) => o === t[3 * a] ? 0 : o === t[3 * a + 1] ? 1 : o === t[3 * a + 2] ? 2 : -1, h = (o, a) => {
    const g = v(o, a);
    d[3 * a + g] = -1;
  }, y = (o, a, g, N) => {
    const O = v(o, a);
    d[3 * a + O] = N;
    const T = v(g, N);
    d[3 * N + T] = a;
  };
  for (let o = 0; o < n; o++) {
    let a = r[o];
    const g = r[o + 1];
    let N = i[o];
    const O = i[o + 1];
    for (; a < g && N < O; ) {
      const T = f[2 * a], $ = f[2 * u + 2 * N];
      T === $ ? (y(o, f[2 * a + 1], $, f[2 * u + 2 * N + 1]), a++, N++) : T < $ ? (h(o, f[2 * a + 1]), a++) : (h($, f[2 * u + 2 * N + 1]), N++);
    }
    for (; a < g; ) h(o, f[2 * a + 1]), a++;
    for (; N < O; )
      h(f[2 * u + 2 * N], f[2 * u + 2 * N + 1]), N++;
  }
  return d;
}
function q(t, e, n, s, r, i = 2) {
  const l = 1 / (Math.abs(n) + Math.abs(s) + Math.abs(r)), c = n * l, p = s * l, f = r <= 0 ? (c >= 0 ? 1 : -1) * (1 - Math.abs(p)) : c, u = r <= 0 ? (p >= 0 ? 1 : -1) * (1 - Math.abs(c)) : p, I = e * i;
  t[I] = at(f), t[I + 1] = at(u);
}
function at(t) {
  return wt(Math.round(32767 * t), -32767, 32767);
}
class Nt {
  updateSettings(e) {
    this.settings = e, this._edgeHashFunction = e.reducedPrecision ? Bt : bt;
  }
  write(e, n, s) {
    const r = this._edgeHashFunction(s);
    B.seed = r;
    const i = B.getIntRange(0, 255), l = B.getIntRange(0, this.settings.variants - 1), c = 0.7, p = B.getFloat(), f = 255 * (0.5 * Ut(-(1 - Math.min(p / c, 1)) + Math.max(0, p - c) / (1 - c), 1.2) + 0.5);
    e.position0.setVec(n, s.position0), e.position1.setVec(n, s.position1), e.componentIndex.set(n, s.componentIndex), e.variantOffset.set(n, i), e.variantStroke.set(n, l), e.variantExtension.set(n, f);
  }
  trim(e, n) {
    return e.slice(0, n);
  }
}
const Q = new Float32Array(6), U = new Uint32Array(Q.buffer), M = new Uint32Array(1);
function bt(t) {
  const e = Q;
  e[0] = t.position0[0], e[1] = t.position0[1], e[2] = t.position0[2], e[3] = t.position1[0], e[4] = t.position1[1], e[5] = t.position1[2], M[0] = 5381;
  for (let n = 0; n < U.length; n++) M[0] = 31 * M[0] + U[n];
  return M[0];
}
function Bt(t) {
  const e = Q;
  e[0] = C(t.position0[0]), e[1] = C(t.position0[1]), e[2] = C(t.position0[2]), e[3] = C(t.position1[0]), e[4] = C(t.position1[1]), e[5] = C(t.position1[2]), M[0] = 5381;
  for (let n = 0; n < U.length; n++) M[0] = 31 * M[0] + U[n];
  return M[0];
}
const ft = 1e4;
function C(t) {
  return Math.round(t * ft) / ft;
}
function Ut(t, e) {
  const n = t < 0 ? -1 : 1;
  return Math.abs(t) ** e * n;
}
class Y {
  constructor() {
    this._commonWriter = new Nt();
  }
  updateSettings(e) {
    this._commonWriter.updateSettings(e);
  }
  allocate(e) {
    return z.createBuffer(e);
  }
  write(e, n, s) {
    this._commonWriter.write(e, n, s), vt(L, s.faceNormal0, s.faceNormal1), gt(L, L);
    const { typedBuffer: r, typedBufferStride: i } = e.normalCompressed;
    q(r, n, L[0], L[1], L[2], i);
  }
  trim(e, n) {
    return this._commonWriter.trim(e, n);
  }
}
Y.Layout = z, Y.glLayout = J(z, 1);
class j {
  constructor() {
    this._commonWriter = new Nt();
  }
  updateSettings(e) {
    this._commonWriter.updateSettings(e);
  }
  allocate(e) {
    return K.createBuffer(e);
  }
  write(e, n, s) {
    this._commonWriter.write(e, n, s);
    {
      const { typedBuffer: r, typedBufferStride: i } = e.normalCompressed;
      q(r, n, s.faceNormal0[0], s.faceNormal0[1], s.faceNormal0[2], i);
    }
    {
      const { typedBuffer: r, typedBufferStride: i } = e.normal2Compressed;
      q(r, n, s.faceNormal1[0], s.faceNormal1[1], s.faceNormal1[2], i);
    }
  }
  trim(e, n) {
    return this._commonWriter.trim(e, n);
  }
}
j.Layout = K, j.glLayout = J(K, 1);
const L = w(), B = new yt();
function Yt(t) {
  const e = Wt(t.data, t.skipDeduplicate, t.indices, t.indicesLength);
  return lt.updateSettings(t.writerSettings), ut.updateSettings(t.writerSettings), Dt(e, lt, ut);
}
function Wt(t, e, n, s) {
  if (e) {
    const l = ct(n, s, t.count);
    return new Ht(n, s, l, t);
  }
  const r = St(t.buffer, t.stride / 4, { originalIndices: n, originalIndicesLength: s }), i = ct(r.indices, s, r.uniqueCount);
  return { faces: r.indices, facesLength: r.indices.length, neighbors: i, vertices: Rt.createView(r.buffer) };
}
class Ht {
  constructor(e, n, s, r) {
    this.faces = e, this.facesLength = n, this.neighbors = s, this.vertices = r;
  }
}
const lt = new Y(), ut = new j(), jt = x().vec3f(m.POSITION0).vec3f(m.POSITION1), Jt = x().vec3f(m.POSITION0).vec3f(m.POSITION1).u16(m.COMPONENTINDEX);
export {
  Rt as I,
  Dt as a,
  jt as d,
  Yt as f,
  Jt as m,
  Wt as u
};
//# sourceMappingURL=edgeProcessing-VHS16Xb4.js.map
