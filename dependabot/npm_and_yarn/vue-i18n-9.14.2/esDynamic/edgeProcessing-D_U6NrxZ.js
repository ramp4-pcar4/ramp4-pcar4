import { e as St } from "./deduplicate-B3ij4FuD.js";
import { H as F } from "./InterleavedLayout-B4AM1PrG.js";
import { e as l } from "./VertexAttribute-CAkzp1tV.js";
import { C as V } from "./enums-DDkmfb-t.js";
import { t as Ot } from "./VertexElementDescriptor-BAy1DPb3.js";
import { aG as T, bS as tt, ja as Et, fL as G, dF as rt, aC as q, j8 as At, kX as Tt, aD as dt, dG as at, aF as ht, gh as Nt, aN as wt, dJ as $t, kY as yt } from "./main-uCo5F72j.js";
function et(t, e = 0) {
  const o = t.stride;
  return Array.from(t.fields.keys()).map((s) => {
    const r = t.fields.get(s), c = r.constructor.ElementCount, d = Mt(r.constructor.ElementType), h = r.offset, g = r.optional?.glNormalized ?? !1;
    return new Ot(s, c, d, h, o, g, e);
  });
}
function Mt(t) {
  const e = vt[t];
  if (e) return e;
  throw new Error("BufferType not supported in WebGL");
}
const vt = { u8: V.UNSIGNED_BYTE, u16: V.UNSIGNED_SHORT, u32: V.UNSIGNED_INT, i8: V.BYTE, i16: V.SHORT, i32: V.INT, f32: V.FLOAT }, Rt = F().vec3f(l.POSITION).u16(l.COMPONENTINDEX).freeze(), Pt = F().vec2u8(l.SIDENESS).freeze();
et(Pt);
const K = F().vec3f(l.POSITION0).vec3f(l.POSITION1).vec2i16(l.NORMALCOMPRESSED).u16(l.COMPONENTINDEX).u8(l.VARIANTOFFSET, { glNormalized: !0 }).u8(l.VARIANTSTROKE).u8(l.VARIANTEXTENSION, { glNormalized: !0 }).freeze(), Y = F().vec3f(l.POSITION0).vec3f(l.POSITION1).vec2i16(l.NORMALCOMPRESSED).vec2i16(l.NORMAL2COMPRESSED).u16(l.COMPONENTINDEX).u8(l.VARIANTOFFSET, { glNormalized: !0 }).u8(l.VARIANTSTROKE).u8(l.VARIANTEXTENSION, { glNormalized: !0 }).freeze();
l.POSITION0, l.POSITION1, l.COMPONENTINDEX, l.VARIANTOFFSET, l.VARIANTSTROKE, l.VARIANTEXTENSION, l.NORMALCOMPRESSED, l.NORMAL2COMPRESSED, l.SIDENESS;
let Vt = class {
  constructor() {
    this.position0 = T(), this.position1 = T(), this.faceNormal0 = T(), this.faceNormal1 = T(), this.componentIndex = 0, this.cosAngle = 0;
  }
};
const W = -1;
function Dt(t, e, o) {
  const s = t.vertices.position, r = t.vertices.componentIndex, c = S.position0, d = S.position1, h = S.faceNormal0, g = S.faceNormal1, { edges: i, normals: p } = bt(t), m = i.length / 4, E = e.allocate(m);
  let P = 0;
  const B = m, w = o?.allocate(B);
  let _ = 0, n = 0, a = 0;
  z.length = 0;
  for (let N = 0; N < m; ++N) {
    const y = 4 * N;
    s.getVec(i.data[y], c), s.getVec(i.data[y + 1], d);
    const x = z.pushNew();
    x.index = 4 * N, x.length = Et(c, d);
  }
  z.sort((N, y) => y.length - N.length);
  const f = new Array(), u = new Array();
  z.forAll(({ length: N, index: y }) => {
    const x = i.data[y], It = i.data[y + 1], nt = i.data[y + 2], ot = i.data[y + 3], st = ot === W;
    if (s.getVec(x, c), s.getVec(It, d), st) {
      const A = 3 * nt;
      G(h, p.data[A], p.data[A + 1], p.data[A + 2]), rt(g, h), S.componentIndex = r.get(x), S.cosAngle = q(h, g);
    } else {
      let A = 3 * nt;
      if (G(h, p.data[A], p.data[A + 1], p.data[A + 2]), A = 3 * ot, G(g, p.data[A], p.data[A + 1], p.data[A + 2]), S.componentIndex = r.get(x), S.cosAngle = q(h, g), Lt(S, _t)) return;
      S.cosAngle < -0.9999 && rt(g, h);
    }
    n += N, a++, st || xt(S, Ut) ? (e.write(E, P++, S), f.push(N)) : Ct(S, gt) && (w && o && o.write(w, _++, S), u.push(N));
  });
  const O = new Float32Array(f.reverse()), $ = new Float32Array(u.reverse()), M = w && o ? { instancesData: w.slice(0, _), lodInfo: { lengths: $ } } : void 0;
  return { regular: { instancesData: E.slice(0, P), lodInfo: { lengths: O } }, silhouette: M, averageEdgeLength: n / a };
}
function xt(t, e) {
  return t.cosAngle < e;
}
function Lt(t, e) {
  return t.cosAngle > e;
}
function Ct(t, e) {
  const o = At(t.cosAngle);
  return Tt(it, t.position1, t.position0), o * (q(dt(Bt, t.faceNormal0, t.faceNormal1), it) > 0 ? -1 : 1) > e;
}
function bt(t) {
  const e = t.faces.length / 3, o = t.faces, s = t.neighbors, r = t.vertices.position;
  I.length = H.length = 0;
  for (let c = 0; c < e; c++) {
    const d = 3 * c, h = s[d], g = s[d + 1], i = s[d + 2], p = o[d], m = o[d + 1], E = o[d + 2];
    r.getVec(p, D), r.getVec(m, U), r.getVec(E, X), at(U, U, D), at(X, X, D), dt(D, U, X), ht(D, D), H.pushArray(D), (h === W || p < m) && (I.push(p), I.push(m), I.push(c), I.push(h)), (g === W || m < E) && (I.push(m), I.push(E), I.push(c), I.push(g)), (i === W || E < p) && (I.push(E), I.push(p), I.push(c), I.push(i));
  }
  return { edges: I, normals: H };
}
class Ft {
  constructor() {
    this.index = 0, this.length = 0;
  }
}
const z = new tt({ allocator: (t) => t || new Ft(), deallocator: null }), I = new tt({ deallocator: null }), H = new tt({ deallocator: null }), S = new Vt(), Bt = T(), it = T(), D = T(), U = T(), X = T(), gt = Nt(4), _t = Math.cos(gt), zt = Nt(35), Ut = Math.cos(zt);
function ct(t, e, o) {
  const s = e / 3, r = new Uint32Array(o + 1), c = new Uint32Array(o + 1), d = (n, a) => {
    n < a ? r[n + 1]++ : c[a + 1]++;
  };
  for (let n = 0; n < s; n++) {
    const a = t[3 * n], f = t[3 * n + 1], u = t[3 * n + 2];
    d(a, f), d(f, u), d(u, a);
  }
  let h = 0, g = 0;
  for (let n = 0; n < o; n++) {
    const a = r[n + 1], f = c[n + 1];
    r[n + 1] = h, c[n + 1] = g, h += a, g += f;
  }
  const i = new Uint32Array(6 * s), p = r[o], m = (n, a, f) => {
    if (n < a) {
      const u = r[n + 1]++;
      i[2 * u] = a, i[2 * u + 1] = f;
    } else {
      const u = c[a + 1]++;
      i[2 * p + 2 * u] = n, i[2 * p + 2 * u + 1] = f;
    }
  };
  for (let n = 0; n < s; n++) {
    const a = t[3 * n], f = t[3 * n + 1], u = t[3 * n + 2];
    m(a, f, n), m(f, u, n), m(u, a, n);
  }
  const E = (n, a) => {
    const f = 2 * n, u = a - n;
    for (let O = 1; O < u; O++) {
      const $ = i[f + 2 * O], M = i[f + 2 * O + 1];
      let N = O - 1;
      for (; N >= 0 && i[f + 2 * N] > $; N--) i[f + 2 * N + 2] = i[f + 2 * N], i[f + 2 * N + 3] = i[f + 2 * N + 1];
      i[f + 2 * N + 2] = $, i[f + 2 * N + 3] = M;
    }
  };
  for (let n = 0; n < o; n++) E(r[n], r[n + 1]), E(p + c[n], p + c[n + 1]);
  const P = new Int32Array(3 * s), B = (n, a) => n === t[3 * a] ? 0 : n === t[3 * a + 1] ? 1 : n === t[3 * a + 2] ? 2 : -1, w = (n, a) => {
    const f = B(n, a);
    P[3 * a + f] = -1;
  }, _ = (n, a, f, u) => {
    const O = B(n, a);
    P[3 * a + O] = u;
    const $ = B(f, u);
    P[3 * u + $] = a;
  };
  for (let n = 0; n < o; n++) {
    let a = r[n];
    const f = r[n + 1];
    let u = c[n];
    const O = c[n + 1];
    for (; a < f && u < O; ) {
      const $ = i[2 * a], M = i[2 * p + 2 * u];
      $ === M ? (_(n, i[2 * a + 1], M, i[2 * p + 2 * u + 1]), a++, u++) : $ < M ? (w(n, i[2 * a + 1]), a++) : (w(M, i[2 * p + 2 * u + 1]), u++);
    }
    for (; a < f; ) w(n, i[2 * a + 1]), a++;
    for (; u < O; )
      w(i[2 * p + 2 * u], i[2 * p + 2 * u + 1]), u++;
  }
  return P;
}
function J(t, e, o, s, r, c = 2) {
  const d = 1 / (Math.abs(o) + Math.abs(s) + Math.abs(r)), h = o * d, g = s * d, i = r <= 0 ? (h >= 0 ? 1 : -1) * (1 - Math.abs(g)) : h, p = r <= 0 ? (g >= 0 ? 1 : -1) * (1 - Math.abs(h)) : g, m = e * c;
  t[m] = lt(i), t[m + 1] = lt(p);
}
function lt(t) {
  return wt(Math.round(32767 * t), -32767, 32767);
}
const j = 0.7;
let mt = class {
  updateSettings(e) {
    this.settings = e, this._edgeHashFunction = e.reducedPrecision ? kt : Xt;
  }
  write(e, o, s) {
    k.seed = this._edgeHashFunction(s);
    const r = k.getIntRange(0, 255), c = k.getIntRange(0, this.settings.variants - 1), d = k.getFloat(), h = 255 * (0.5 * Wt(-(1 - Math.min(d / j, 1)) + Math.max(0, d - j) / (1 - j), 1.2) + 0.5);
    e.position0.setVec(o, s.position0), e.position1.setVec(o, s.position1), e.componentIndex.set(o, s.componentIndex), e.variantOffset.set(o, r), e.variantStroke.set(o, c), e.variantExtension.set(o, h);
  }
};
const v = new Float32Array(6), R = new Uint32Array(v.buffer), b = new Uint32Array(1);
function Xt(t) {
  return v[0] = t.position0[0], v[1] = t.position0[1], v[2] = t.position0[2], v[3] = t.position1[0], v[4] = t.position1[1], v[5] = t.position1[2], b[0] = 31 * (31 * (31 * (31 * (31 * (166811 + R[0]) + R[1]) + R[2]) + R[3]) + R[4]) + R[5], b[0];
}
function kt(t) {
  const e = v;
  e[0] = L(t.position0[0]), e[1] = L(t.position0[1]), e[2] = L(t.position0[2]), e[3] = L(t.position1[0]), e[4] = L(t.position1[1]), e[5] = L(t.position1[2]), b[0] = 5381;
  for (let o = 0; o < R.length; o++) b[0] = 31 * b[0] + R[o];
  return b[0];
}
const ut = 1e4;
function L(t) {
  return Math.round(t * ut) / ut;
}
function Wt(t, e) {
  return Math.abs(t) ** e * Math.sign(t);
}
class Q {
  constructor() {
    this._commonWriter = new mt();
  }
  updateSettings(e) {
    this._commonWriter.updateSettings(e);
  }
  allocate(e) {
    return K.createBuffer(e);
  }
  write(e, o, s) {
    this._commonWriter.write(e, o, s), $t(C, s.faceNormal0, s.faceNormal1), ht(C, C);
    const { typedBuffer: r, typedBufferStride: c } = e.normalCompressed;
    J(r, o, C[0], C[1], C[2], c);
  }
}
Q.Layout = K, Q.glLayout = et(K, 1);
class Z {
  constructor() {
    this._commonWriter = new mt();
  }
  updateSettings(e) {
    this._commonWriter.updateSettings(e);
  }
  allocate(e) {
    return Y.createBuffer(e);
  }
  write(e, o, s) {
    this._commonWriter.write(e, o, s);
    {
      const { typedBuffer: r, typedBufferStride: c } = e.normalCompressed;
      J(r, o, s.faceNormal0[0], s.faceNormal0[1], s.faceNormal0[2], c);
    }
    {
      const { typedBuffer: r, typedBufferStride: c } = e.normal2Compressed;
      J(r, o, s.faceNormal1[0], s.faceNormal1[1], s.faceNormal1[2], c);
    }
  }
}
Z.Layout = Y, Z.glLayout = et(Y, 1);
const C = T(), k = new yt();
function ee(t) {
  const e = Gt(t.data, t.skipDeduplicate, t.indices, t.indicesLength);
  return ft.updateSettings(t.writerSettings), pt.updateSettings(t.writerSettings), Dt(e, ft, pt);
}
function Gt(t, e, o, s) {
  if (e) {
    const d = ct(o, s, t.count);
    return new Ht(o, s, d, t);
  }
  const r = St(t.buffer, t.stride / 4, { originalIndices: o, originalIndicesLength: s }), c = ct(r.indices, s, r.uniqueCount);
  return { faces: r.indices, facesLength: r.indices.length, neighbors: c, vertices: Rt.createView(r.buffer) };
}
class Ht {
  constructor(e, o, s, r) {
    this.faces = e, this.facesLength = o, this.neighbors = s, this.vertices = r;
  }
}
const ft = new Q(), pt = new Z(), ne = F().vec3f(l.POSITION0).vec3f(l.POSITION1), oe = F().vec3f(l.POSITION0).vec3f(l.POSITION1).u16(l.COMPONENTINDEX);
export {
  Rt as E,
  ne as d,
  ee as f,
  oe as m,
  Dt as p,
  Gt as u
};
//# sourceMappingURL=edgeProcessing-D_U6NrxZ.js.map
