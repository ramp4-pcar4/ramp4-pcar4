import { a9 as Et, fq as bt } from "./main-DMoCLB29.js";
import { e as I, n as D } from "./enums-BsbtGCGp.js";
import { R as pt } from "./definitions-Doe0g1C2.js";
const Rt = 128e3;
let dt = null, gt = null;
async function St() {
  return dt || (dt = Mt()), dt;
}
async function Mt() {
  gt = await (Et("esri-csp-restrictions") ? await import("./libtess-asm-hzNQp6Es.js").then((i) => i.l) : await import("./libtess-CA21zo3z.js").then((i) => i.l)).default({ locateFile: (i) => bt(`esri/core/libs/libtess/${i}`) });
}
function $t(x, i) {
  const r = Math.max(x.length, Rt);
  return gt.triangulate(x, i, r);
}
function mt(x, i) {
  return x.x === i.x && x.y === i.y;
}
function Ut(x) {
  if (!x) return;
  const i = x.length;
  if (i <= 1) return;
  let r = 0;
  for (let f = 1; f < i; f++) mt(x[f], x[r]) || ++r === f || (x[r] = x[f]);
  x.length = r + 1;
}
function k(x, i) {
  return x.x = i.y, x.y = -i.x, x;
}
function p(x, i) {
  return x.x = -i.y, x.y = i.x, x;
}
function wt(x, i) {
  return x.x = i.x, x.y = i.y, x;
}
function ft(x, i) {
  return x.x = -i.x, x.y = -i.y, x;
}
function vt(x) {
  return Math.sqrt(x.x * x.x + x.y * x.y);
}
function kt(x, i) {
  return x.x * i.y - x.y * i.x;
}
function Tt(x, i) {
  return x.x * i.x + x.y * i.y;
}
function et(x, i, r, f) {
  return x.x = i.x * r + i.y * f, x.y = i.x * f - i.y * r, x;
}
class At {
  constructor(i, r, f) {
    this._writeVertex = i, this._writeTriangle = r, this._canUseThinTessellation = f, this._prevNormal = { x: void 0, y: void 0 }, this._nextNormal = { x: void 0, y: void 0 }, this._textureNormalLeft = { x: 0, y: 1 }, this._textureNormalRight = { x: 0, y: -1 }, this._textureNormal = { x: void 0, y: void 0 }, this._joinNormal = { x: void 0, y: void 0 }, this._inner = { x: void 0, y: void 0 }, this._outer = { x: void 0, y: void 0 }, this._roundStart = { x: void 0, y: void 0 }, this._roundEnd = { x: void 0, y: void 0 }, this._startBreak = { x: void 0, y: void 0 }, this._endBreak = { x: void 0, y: void 0 }, this._innerPrev = { x: void 0, y: void 0 }, this._innerNext = { x: void 0, y: void 0 }, this._bevelStart = { x: void 0, y: void 0 }, this._bevelEnd = { x: void 0, y: void 0 }, this._bevelMiddle = { x: void 0, y: void 0 };
  }
  tessellate(i, r, f = this._canUseThinTessellation) {
    Ut(i), f && r.halfWidth < pt && !r.offset ? this._tessellateThin(i, r) : this._tessellate(i, r);
  }
  _tessellateThin(i, r) {
    if (i.length < 2) return;
    const f = r.wrapDistance || 65535;
    let E = r.initialDistance || 0, P = !1, C = i[0].x, F = i[0].y;
    const B = i.length;
    for (let j = 1; j < B; ++j) {
      P && (P = !1, E = 0);
      let W = i[j].x, X = i[j].y, b = W - C, v = X - F, T = Math.sqrt(b * b + v * v);
      if (b /= T, v /= T, E + T > f) {
        P = !0;
        const t = (f - E) / T;
        T = f - E, W = (1 - t) * C + t * W, X = (1 - t) * F + t * X, --j;
      }
      const o = this._writeVertex(C, F, 0, 0, b, v, v, -b, 0, -1, E), y = this._writeVertex(C, F, 0, 0, b, v, -v, b, 0, 1, E);
      E += T;
      const G = this._writeVertex(W, X, 0, 0, b, v, v, -b, 0, -1, E), e = this._writeVertex(W, X, 0, 0, b, v, -v, b, 0, 1, E);
      this._writeTriangle(o, y, G), this._writeTriangle(y, G, e), C = W, F = X;
    }
  }
  _tessellate(i, r) {
    const f = i[0], E = i[i.length - 1], P = mt(f, E), C = P ? 3 : 2;
    if (i.length < C) return;
    const F = r.pixelCoordRatio, B = r.capType != null ? r.capType : I.BUTT, j = r.joinType != null ? r.joinType : D.MITER, W = r.miterLimit != null ? Math.min(r.miterLimit, 4) : 2, X = r.roundLimit != null ? Math.min(r.roundLimit, 1.05) : 1.05, b = r.halfWidth != null ? r.halfWidth : 2, v = !!r.textured;
    let T, o, y, G = null;
    const e = this._prevNormal, t = this._nextNormal;
    let K = -1, q = -1;
    const s = this._joinNormal;
    let _, c;
    const rt = this._textureNormalLeft, nt = this._textureNormalRight, w = this._textureNormal;
    let u = -1, h = -1;
    const _t = r.wrapDistance || 65535;
    let l = r.initialDistance || 0;
    const Vt = this._writeVertex, Nt = this._writeTriangle, d = (R, st, H, m, L, S) => {
      const $ = Vt(o, y, _, c, H, m, R, st, L, S, l);
      return u >= 0 && h >= 0 && $ >= 0 && Nt(u, h, $), u = h, h = $, $;
    };
    P && (T = i[i.length - 2], t.x = E.x - T.x, t.y = E.y - T.y, q = vt(t), t.x /= q, t.y /= q);
    let Y = !1;
    for (let R = 0; R < i.length; ++R) {
      if (Y && (Y = !1, l = 0), T && (e.x = -t.x, e.y = -t.y, K = q, l + K > _t && (Y = !0)), Y) {
        const n = (_t - l) / K;
        K = _t - l, T = { x: (1 - n) * T.x + n * i[R].x, y: (1 - n) * T.y + n * i[R].y }, --R;
      } else T = i[R];
      o = T.x, y = T.y;
      const st = R <= 0 && !Y, H = R === i.length - 1;
      if (st || (l += K), G = H ? P ? i[1] : null : i[R + 1], G ? (t.x = G.x - o, t.y = G.y - y, q = vt(t), t.x /= q, t.y /= q) : (t.x = void 0, t.y = void 0), !P) {
        if (st) {
          p(s, t), _ = s.x, c = s.y, B === I.SQUARE && (d(-t.y - t.x, t.x - t.y, t.x, t.y, 0, -1), d(t.y - t.x, -t.x - t.y, t.x, t.y, 0, 1)), B === I.ROUND && (d(-t.y - t.x, t.x - t.y, t.x, t.y, -1, -1), d(t.y - t.x, -t.x - t.y, t.x, t.y, -1, 1)), B !== I.ROUND && B !== I.BUTT || (d(-t.y, t.x, t.x, t.y, 0, -1), d(t.y, -t.x, t.x, t.y, 0, 1));
          continue;
        }
        if (H) {
          k(s, e), _ = s.x, c = s.y, B !== I.ROUND && B !== I.BUTT || (d(e.y, -e.x, -e.x, -e.y, 0, -1), d(-e.y, e.x, -e.x, -e.y, 0, 1)), B === I.SQUARE && (d(e.y - e.x, -e.x - e.y, -e.x, -e.y, 0, -1), d(-e.y - e.x, e.x - e.y, -e.x, -e.y, 0, 1)), B === I.ROUND && (d(e.y - e.x, -e.x - e.y, -e.x, -e.y, 1, -1), d(-e.y - e.x, e.x - e.y, -e.x, -e.y, 1, 1));
          continue;
        }
      }
      let m, L, S = -kt(e, t);
      if (Math.abs(S) < 0.01) Tt(e, t) > 0 ? (s.x = e.x, s.y = e.y, S = 1, m = Number.MAX_VALUE, L = !0) : (p(s, t), S = 1, m = 1, L = !1);
      else {
        s.x = (e.x + t.x) / S, s.y = (e.y + t.y) / S, m = vt(s);
        const n = (m - 1) * b * F;
        L = m > 4 || n > K && n > q;
      }
      _ = s.x, c = s.y;
      let $ = j;
      switch (j) {
        case D.BEVEL:
          m < 1.05 && ($ = D.MITER);
          break;
        case D.ROUND:
          m < X && ($ = D.MITER);
          break;
        case D.MITER:
          m > W && ($ = D.BEVEL);
      }
      switch ($) {
        case D.MITER:
          if (d(s.x, s.y, -e.x, -e.y, 0, -1), d(-s.x, -s.y, -e.x, -e.y, 0, 1), H) break;
          if (v) {
            const n = Y ? 0 : l;
            u = this._writeVertex(o, y, _, c, t.x, t.y, s.x, s.y, 0, -1, n), h = this._writeVertex(o, y, _, c, t.x, t.y, -s.x, -s.y, 0, 1, n);
          }
          break;
        case D.BEVEL: {
          const n = S < 0;
          let g, V, Q, M;
          if (n) {
            const a = u;
            u = h, h = a, g = rt, V = nt;
          } else g = nt, V = rt;
          if (L) Q = n ? p(this._innerPrev, e) : k(this._innerPrev, e), M = n ? k(this._innerNext, t) : p(this._innerNext, t);
          else {
            const a = n ? ft(this._inner, s) : wt(this._inner, s);
            Q = a, M = a;
          }
          const U = n ? k(this._bevelStart, e) : p(this._bevelStart, e);
          d(Q.x, Q.y, -e.x, -e.y, g.x, g.y);
          const yt = d(U.x, U.y, -e.x, -e.y, V.x, V.y);
          if (H) break;
          const A = n ? p(this._bevelEnd, t) : k(this._bevelEnd, t);
          if (L) {
            const a = this._writeVertex(o, y, _, c, -e.x, -e.y, 0, 0, 0, 0, l);
            u = this._writeVertex(o, y, _, c, t.x, t.y, M.x, M.y, g.x, g.y, l), h = this._writeVertex(o, y, _, c, t.x, t.y, A.x, A.y, V.x, V.y, l), this._writeTriangle(yt, a, h);
          } else {
            if (v) {
              const a = this._bevelMiddle;
              a.x = (U.x + A.x) / 2, a.y = (U.y + A.y) / 2, et(w, a, -e.x, -e.y), d(a.x, a.y, -e.x, -e.y, w.x, w.y), et(w, a, t.x, t.y), u = this._writeVertex(o, y, _, c, t.x, t.y, a.x, a.y, w.x, w.y, l), h = this._writeVertex(o, y, _, c, t.x, t.y, M.x, M.y, g.x, g.y, l);
            } else {
              const a = u;
              u = h, h = a;
            }
            d(A.x, A.y, t.x, t.y, V.x, V.y);
          }
          if (n) {
            const a = u;
            u = h, h = a;
          }
          break;
        }
        case D.ROUND: {
          const n = S < 0;
          let g, V;
          if (n) {
            const N = u;
            u = h, h = N, g = rt, V = nt;
          } else g = nt, V = rt;
          const Q = n ? ft(this._inner, s) : wt(this._inner, s);
          let M, U;
          L ? (M = n ? p(this._innerPrev, e) : k(this._innerPrev, e), U = n ? k(this._innerNext, t) : p(this._innerNext, t)) : (M = Q, U = Q);
          const yt = n ? k(this._roundStart, e) : p(this._roundStart, e), A = n ? p(this._roundEnd, t) : k(this._roundEnd, t), a = d(M.x, M.y, -e.x, -e.y, g.x, g.y), ot = d(yt.x, yt.y, -e.x, -e.y, V.x, V.y);
          if (H) break;
          const z = this._writeVertex(o, y, _, c, -e.x, -e.y, 0, 0, 0, 0, l);
          L || this._writeTriangle(u, h, z);
          const O = ft(this._outer, Q), J = this._writeVertex(o, y, _, c, t.x, t.y, A.x, A.y, V.x, V.y, l);
          let Z, tt;
          const ht = m > 2;
          if (ht) {
            let N;
            m !== Number.MAX_VALUE ? (O.x /= m, O.y /= m, N = Tt(e, O), N = (m * (N * N - 1) + 1) / N) : N = -1, Z = n ? k(this._startBreak, e) : p(this._startBreak, e), Z.x += e.x * N, Z.y += e.y * N, tt = n ? p(this._endBreak, t) : k(this._endBreak, t), tt.x += t.x * N, tt.y += t.y * N;
          }
          et(w, O, -e.x, -e.y);
          const lt = this._writeVertex(o, y, _, c, -e.x, -e.y, O.x, O.y, w.x, w.y, l);
          et(w, O, t.x, t.y);
          const ct = v ? this._writeVertex(o, y, _, c, t.x, t.y, O.x, O.y, w.x, w.y, l) : lt, ut = z, at = v ? this._writeVertex(o, y, _, c, t.x, t.y, 0, 0, 0, 0, l) : z;
          let it = -1, xt = -1;
          if (ht && (et(w, Z, -e.x, -e.y), it = this._writeVertex(o, y, _, c, -e.x, -e.y, Z.x, Z.y, w.x, w.y, l), et(w, tt, t.x, t.y), xt = this._writeVertex(o, y, _, c, t.x, t.y, tt.x, tt.y, w.x, w.y, l)), v ? ht ? (this._writeTriangle(ut, ot, it), this._writeTriangle(ut, it, lt), this._writeTriangle(at, ct, xt), this._writeTriangle(at, xt, J)) : (this._writeTriangle(ut, ot, lt), this._writeTriangle(at, ct, J)) : ht ? (this._writeTriangle(z, ot, it), this._writeTriangle(z, it, xt), this._writeTriangle(z, xt, J)) : (this._writeTriangle(z, ot, lt), this._writeTriangle(z, ct, J)), L ? (u = this._writeVertex(o, y, _, c, t.x, t.y, U.x, U.y, g.x, g.y, l), h = J) : (u = v ? this._writeVertex(o, y, _, c, t.x, t.y, U.x, U.y, g.x, g.y, l) : a, this._writeTriangle(u, at, J), h = J), n) {
            const N = u;
            u = h, h = N;
          }
          break;
        }
      }
    }
  }
}
export {
  $t as a,
  At as c,
  St as i
};
//# sourceMappingURL=TurboLine-BX3CYQY4.js.map
