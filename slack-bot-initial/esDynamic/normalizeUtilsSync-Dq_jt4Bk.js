import { az as V, aA as b, aB as J, at as X, aC as T, aD as z, aE as B, av as D, aF as E, aG as M, aH as F, aI as G, aJ as H, aK as p } from "./main-3gzXighg.js";
function q(t) {
  return k(t, !0);
}
function Q(t) {
  return k(t, !1);
}
function k(t, s) {
  if (t == null) return null;
  const i = t.spatialReference, n = b(i), e = J(t) ? t.toJSON() : t;
  if (!n) return e;
  const h = X(i) ? 102100 : 4326, u = T[h].maxX, x = T[h].minX;
  if (z(e)) return S(e, u, x);
  if (B(e)) return e.points = e.points.map((o) => S(o, u, x)), e;
  if (D(e)) return K(e, n);
  if (E(e) || M(e)) {
    const o = F(R, e), r = { xmin: o[0], ymin: o[1], xmax: o[2], ymax: o[3] }, a = p(r.xmin, x) * (2 * u), _ = a === 0 ? e : G(e, a);
    return r.xmin += a, r.xmax += a, r.xmax > u ? L(_, u, s) : r.xmin < x ? L(_, x, s) : _;
  }
  return e;
}
function K(t, s) {
  if (!s) return t;
  const i = N(t, s).map((n) => n.extent);
  return i.length < 2 ? i[0] || t : i.length > 2 ? (t.xmin = s.valid[0], t.xmax = s.valid[1], t) : { rings: i.map((n) => [[n.xmin, n.ymin], [n.xmin, n.ymax], [n.xmax, n.ymax], [n.xmax, n.ymin], [n.xmin, n.ymin]]) };
}
function S(t, s, i) {
  if (Array.isArray(t)) {
    const n = t[0];
    if (n > s) {
      const e = p(n, s);
      t[0] = n + e * (-2 * s);
    } else if (n < i) {
      const e = p(n, i);
      t[0] = n + e * (-2 * i);
    }
  } else {
    const n = t.x;
    if (n > s) {
      const e = p(n, s);
      t.x += e * (-2 * s);
    } else if (n < i) {
      const e = p(n, i);
      t.x += e * (-2 * i);
    }
  }
  return t;
}
function N(t, s) {
  const i = [], { ymin: n, ymax: e, xmin: h, xmax: u } = t, x = t.xmax - t.xmin, [o, r] = s.valid, { x: a, frameId: _ } = w(t.xmin, s), { x: l, frameId: c } = w(t.xmax, s), A = a === l && x > 0;
  if (x > 2 * r) {
    const g = { xmin: h < u ? a : l, ymin: n, xmax: r, ymax: e }, O = { xmin: o, ymin: n, xmax: h < u ? l : a, ymax: e }, P = { xmin: 0, ymin: n, xmax: r, ymax: e }, C = { xmin: o, ymin: n, xmax: 0, ymax: e }, f = [], d = [];
    I(g, P) && f.push(_), I(g, C) && d.push(_), I(O, P) && f.push(c), I(O, C) && d.push(c);
    for (let y = _ + 1; y < c; y++) f.push(y), d.push(y);
    i.push(new m(g, [_]), new m(O, [c]), new m(P, f), new m(C, d));
  } else a > l || A ? i.push(new m({ xmin: a, ymin: n, xmax: r, ymax: e }, [_]), new m({ xmin: o, ymin: n, xmax: l, ymax: e }, [c])) : i.push(new m({ xmin: a, ymin: n, xmax: l, ymax: e }, [_]));
  return i;
}
function w(t, s) {
  const [i, n] = s.valid, e = 2 * n;
  let h, u = 0;
  return t > n ? (h = Math.ceil(Math.abs(t - n) / e), t -= h * e, u = h) : t < i && (h = Math.ceil(Math.abs(t - i) / e), t += h * e, u = -h), { x: t, frameId: u };
}
function I(t, s) {
  const { xmin: i, ymin: n, xmax: e, ymax: h } = s;
  return v(t, i, n) && v(t, i, h) && v(t, e, h) && v(t, e, n);
}
function v(t, s, i) {
  return s >= t.xmin && s <= t.xmax && i >= t.ymin && i <= t.ymax;
}
function L(t, s, i = !0) {
  const n = !M(t);
  if (n && H(t), i)
    return new $().cut(t, s);
  const e = n ? t.rings : t.paths, h = n ? 4 : 2, u = e.length, x = -2 * s;
  for (let o = 0; o < u; o++) {
    const r = e[o];
    if (r && r.length >= h) {
      const a = [];
      for (const _ of r) a.push([_[0] + x, _[1]]);
      e.push(a);
    }
  }
  return n ? t.rings = e : t.paths = e, t;
}
class m {
  constructor(s, i) {
    this.extent = s, this.frameIds = i;
  }
}
const R = V();
class $ {
  constructor() {
    this._linesIn = [], this._linesOut = [];
  }
  cut(s, i) {
    let n;
    if (this._xCut = i, s.rings) this._closed = !0, n = s.rings, this._minPts = 4;
    else {
      if (!s.paths) return null;
      this._closed = !1, n = s.paths, this._minPts = 2;
    }
    for (const h of n) {
      if (!h || h.length < this._minPts) continue;
      let u = !0;
      for (const x of h) u ? (this.moveTo(x), u = !1) : this.lineTo(x);
      this._closed && this.close();
    }
    this._pushLineIn(), this._pushLineOut(), n = [];
    for (const h of this._linesIn) h && h.length >= this._minPts && n.push(h);
    const e = -2 * this._xCut;
    for (const h of this._linesOut) if (h && h.length >= this._minPts) {
      for (const u of h) u[0] += e;
      n.push(h);
    }
    return this._closed ? s.rings = n : s.paths = n, s;
  }
  moveTo(s) {
    this._pushLineIn(), this._pushLineOut(), this._prevSide = this._side(s[0]), this._moveTo(s[0], s[1], this._prevSide), this._prevPt = s, this._firstPt = s;
  }
  lineTo(s) {
    const i = this._side(s[0]);
    if (i * this._prevSide == -1) {
      const n = this._intersect(this._prevPt, s);
      this._lineTo(this._xCut, n, 0), this._prevSide = 0, this._lineTo(s[0], s[1], i);
    } else this._lineTo(s[0], s[1], i);
    this._prevSide = i, this._prevPt = s;
  }
  close() {
    const s = this._firstPt, i = this._prevPt;
    s[0] === i[0] && s[1] === i[1] || this.lineTo(s), this._checkClosingPt(this._lineIn), this._checkClosingPt(this._lineOut);
  }
  _moveTo(s, i, n) {
    this._closed ? (this._lineIn.push([n <= 0 ? s : this._xCut, i]), this._lineOut.push([n >= 0 ? s : this._xCut, i])) : (n <= 0 && this._lineIn.push([s, i]), n >= 0 && this._lineOut.push([s, i]));
  }
  _lineTo(s, i, n) {
    this._closed ? (this._addPolyVertex(this._lineIn, n <= 0 ? s : this._xCut, i), this._addPolyVertex(this._lineOut, n >= 0 ? s : this._xCut, i)) : n < 0 ? (this._prevSide === 0 && this._pushLineOut(), this._lineIn.push([s, i])) : n > 0 ? (this._prevSide === 0 && this._pushLineIn(), this._lineOut.push([s, i])) : this._prevSide < 0 ? (this._lineIn.push([s, i]), this._lineOut.push([s, i])) : this._prevSide > 0 && (this._lineOut.push([s, i]), this._lineIn.push([s, i]));
  }
  _addPolyVertex(s, i, n) {
    const e = s.length;
    e > 1 && s[e - 1][0] === i && s[e - 2][0] === i ? s[e - 1][1] = n : s.push([i, n]);
  }
  _checkClosingPt(s) {
    const i = s.length;
    i > 3 && s[0][0] === this._xCut && s[i - 2][0] === this._xCut && s[1][0] === this._xCut && (s[0][1] = s[i - 2][1], s.pop());
  }
  _side(s) {
    return s < this._xCut ? -1 : s > this._xCut ? 1 : 0;
  }
  _intersect(s, i) {
    const n = (this._xCut - s[0]) / (i[0] - s[0]);
    return s[1] + n * (i[1] - s[1]);
  }
  _pushLineIn() {
    this._lineIn && this._lineIn.length >= this._minPts && this._linesIn.push(this._lineIn), this._lineIn = [];
  }
  _pushLineOut() {
    this._lineOut && this._lineOut.length >= this._minPts && this._linesOut.push(this._lineOut), this._lineOut = [];
  }
}
export {
  Q as a,
  q as p
};
//# sourceMappingURL=normalizeUtilsSync-Dq_jt4Bk.js.map
