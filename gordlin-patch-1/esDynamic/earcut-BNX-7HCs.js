import { v as Y } from "./main-BEi6lHs4.js";
var D, E, F, G = { exports: {} };
D = G, E = function() {
  function m(t, r, n) {
    n = n || 2;
    var x, i, e, u, v, f, c, l = r && r.length, s = l ? r[0] * n : t.length, a = B(t, 0, s, n, !0), y = [];
    if (!a || a.next === a.prev) return y;
    if (l && (a = N(t, r, a, n)), t.length > 80 * n) {
      x = e = t[0], i = u = t[1];
      for (var o = n; o < s; o += n) (v = t[o]) < x && (x = v), (f = t[o + 1]) < i && (i = f), v > e && (e = v), f > u && (u = f);
      c = (c = Math.max(e - x, u - i)) !== 0 ? 1 / c : 0;
    }
    return g(a, y, n, x, i, c), y;
  }
  function B(t, r, n, x, i) {
    var e, u;
    if (i === A(t, r, n, x) > 0) for (e = r; e < n; e += x) u = _(e, t[e], t[e + 1], u);
    else for (e = n - x; e >= r; e -= x) u = _(e, t[e], t[e + 1], u);
    if (u && M(u, u.next)) {
      var v = u.next;
      w(u), u = v;
    }
    return u;
  }
  function h(t, r) {
    if (!t) return t;
    r || (r = t);
    var n, x = t;
    do
      if (n = !1, x.steiner || !M(x, x.next) && p(x.prev, x, x.next) !== 0) x = x.next;
      else {
        var i = x.prev;
        if (w(x), (x = r = i) === x.next) break;
        n = !0;
      }
    while (n || x !== r);
    return r;
  }
  function g(t, r, n, x, i, e, u) {
    if (t) {
      !u && e && S(t, x, i, e);
      for (var v, f, c = t; t.prev !== t.next; ) if (v = t.prev, f = t.next, e ? J(t, x, i, e) : I(t)) r.push(v.i / n), r.push(t.i / n), r.push(f.i / n), w(t), t = f.next, c = f.next;
      else if ((t = f) === c) {
        u ? u === 1 ? g(t = K(h(t), r, n), r, n, x, i, e, 2) : u === 2 && L(t, r, n, x, i, e) : g(h(t), r, n, x, i, e, 1);
        break;
      }
    }
  }
  function I(t) {
    var r = t.prev, n = t, x = t.next;
    if (p(r, n, x) >= 0) return !1;
    for (var i = t.next.next; i !== t.prev; ) {
      if (Z(r.x, r.y, n.x, n.y, x.x, x.y, i.x, i.y) && p(i.prev, i, i.next) >= 0) return !1;
      i = i.next;
    }
    return !0;
  }
  function J(t, r, n, x) {
    var i = t.prev, e = t, u = t.next;
    if (p(i, e, u) >= 0) return !1;
    for (var v = i.x < e.x ? i.x < u.x ? i.x : u.x : e.x < u.x ? e.x : u.x, f = i.y < e.y ? i.y < u.y ? i.y : u.y : e.y < u.y ? e.y : u.y, c = i.x > e.x ? i.x > u.x ? i.x : u.x : e.x > u.x ? e.x : u.x, l = i.y > e.y ? i.y > u.y ? i.y : u.y : e.y > u.y ? e.y : u.y, s = j(v, f, r, n, x), a = j(c, l, r, n, x), y = t.prevZ, o = t.nextZ; y && y.z >= s && o && o.z <= a; ) {
      if (y !== t.prev && y !== t.next && Z(i.x, i.y, e.x, e.y, u.x, u.y, y.x, y.y) && p(y.prev, y, y.next) >= 0 || (y = y.prevZ, o !== t.prev && o !== t.next && Z(i.x, i.y, e.x, e.y, u.x, u.y, o.x, o.y) && p(o.prev, o, o.next) >= 0)) return !1;
      o = o.nextZ;
    }
    for (; y && y.z >= s; ) {
      if (y !== t.prev && y !== t.next && Z(i.x, i.y, e.x, e.y, u.x, u.y, y.x, y.y) && p(y.prev, y, y.next) >= 0) return !1;
      y = y.prevZ;
    }
    for (; o && o.z <= a; ) {
      if (o !== t.prev && o !== t.next && Z(i.x, i.y, e.x, e.y, u.x, u.y, o.x, o.y) && p(o.prev, o, o.next) >= 0) return !1;
      o = o.nextZ;
    }
    return !0;
  }
  function K(t, r, n) {
    var x = t;
    do {
      var i = x.prev, e = x.next.next;
      !M(i, e) && C(i, x, x.next, e) && d(i, e) && d(e, i) && (r.push(i.i / n), r.push(x.i / n), r.push(e.i / n), w(x), w(x.next), x = t = e), x = x.next;
    } while (x !== t);
    return h(x);
  }
  function L(t, r, n, x, i, e) {
    var u = t;
    do {
      for (var v = u.next.next; v !== u.prev; ) {
        if (u.i !== v.i && V(u, v)) {
          var f = H(u, v);
          return u = h(u, u.next), f = h(f, f.next), g(u, r, n, x, i, e), void g(f, r, n, x, i, e);
        }
        v = v.next;
      }
      u = u.next;
    } while (u !== t);
  }
  function N(t, r, n, x) {
    var i, e, u, v = [];
    for (i = 0, e = r.length; i < e; i++) (u = B(t, r[i] * x, i < e - 1 ? r[i + 1] * x : t.length, x, !1)) === u.next && (u.steiner = !0), v.push(U(u));
    for (v.sort(O), i = 0; i < v.length; i++) n = h(n = P(v[i], n), n.next);
    return n;
  }
  function O(t, r) {
    return t.x - r.x;
  }
  function k(t) {
    if (t.next.prev === t) return t;
    let r = t;
    for (; ; ) {
      const n = r.next;
      if (n.prev === r || n === r || n === t) break;
      r = n;
    }
    return r;
  }
  function P(t, r) {
    var n = Q(t, r);
    if (!n) return r;
    var x = H(n, t), i = h(n, n.next);
    let e = k(x);
    return h(e, e.next), i = k(i), k(r === n ? i : r);
  }
  function Q(t, r) {
    var n, x = r, i = t.x, e = t.y, u = -1 / 0;
    do {
      if (e <= x.y && e >= x.next.y && x.next.y !== x.y) {
        var v = x.x + (e - x.y) * (x.next.x - x.x) / (x.next.y - x.y);
        if (v <= i && v > u) {
          if (u = v, v === i) {
            if (e === x.y) return x;
            if (e === x.next.y) return x.next;
          }
          n = x.x < x.next.x ? x : x.next;
        }
      }
      x = x.next;
    } while (x !== r);
    if (!n) return null;
    if (i === u) return n;
    var f, c = n, l = n.x, s = n.y, a = 1 / 0;
    x = n;
    do
      i >= x.x && x.x >= l && i !== x.x && Z(e < s ? i : u, e, l, s, e < s ? u : i, e, x.x, x.y) && (f = Math.abs(e - x.y) / (i - x.x), d(x, t) && (f < a || f === a && (x.x > n.x || x.x === n.x && R(n, x))) && (n = x, a = f)), x = x.next;
    while (x !== c);
    return n;
  }
  function R(t, r) {
    return p(t.prev, t, r.prev) < 0 && p(r.next, t, t.next) < 0;
  }
  function S(t, r, n, x) {
    var i = t;
    do
      i.z === null && (i.z = j(i.x, i.y, r, n, x)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
    while (i !== t);
    i.prevZ.nextZ = null, i.prevZ = null, T(i);
  }
  function T(t) {
    var r, n, x, i, e, u, v, f, c = 1;
    do {
      for (n = t, t = null, e = null, u = 0; n; ) {
        for (u++, x = n, v = 0, r = 0; r < c && (v++, x = x.nextZ); r++) ;
        for (f = c; v > 0 || f > 0 && x; ) v !== 0 && (f === 0 || !x || n.z <= x.z) ? (i = n, n = n.nextZ, v--) : (i = x, x = x.nextZ, f--), e ? e.nextZ = i : t = i, i.prevZ = e, e = i;
        n = x;
      }
      e.nextZ = null, c *= 2;
    } while (u > 1);
    return t;
  }
  function j(t, r, n, x, i) {
    return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * i) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (r = 1431655765 & ((r = 858993459 & ((r = 252645135 & ((r = 16711935 & ((r = 32767 * (r - x) * i) | r << 8)) | r << 4)) | r << 2)) | r << 1)) << 1;
  }
  function U(t) {
    var r = t, n = t;
    do
      (r.x < n.x || r.x === n.x && r.y < n.y) && (n = r), r = r.next;
    while (r !== t);
    return n;
  }
  function Z(t, r, n, x, i, e, u, v) {
    return (i - u) * (r - v) - (t - u) * (e - v) >= 0 && (t - u) * (x - v) - (n - u) * (r - v) >= 0 && (n - u) * (e - v) - (i - u) * (x - v) >= 0;
  }
  function V(t, r) {
    return t.next.i !== r.i && t.prev.i !== r.i && !W(t, r) && (d(t, r) && d(r, t) && X(t, r) && (p(t.prev, t, r.prev) || p(t, r.prev, r)) || M(t, r) && p(t.prev, t, t.next) > 0 && p(r.prev, r, r.next) > 0);
  }
  function p(t, r, n) {
    return (r.y - t.y) * (n.x - r.x) - (r.x - t.x) * (n.y - r.y);
  }
  function M(t, r) {
    return t.x === r.x && t.y === r.y;
  }
  function C(t, r, n, x) {
    var i = b(p(t, r, n)), e = b(p(t, r, x)), u = b(p(n, x, t)), v = b(p(n, x, r));
    return i !== e && u !== v || !(i !== 0 || !z(t, n, r)) || !(e !== 0 || !z(t, x, r)) || !(u !== 0 || !z(n, t, x)) || !(v !== 0 || !z(n, r, x));
  }
  function z(t, r, n) {
    return r.x <= Math.max(t.x, n.x) && r.x >= Math.min(t.x, n.x) && r.y <= Math.max(t.y, n.y) && r.y >= Math.min(t.y, n.y);
  }
  function b(t) {
    return t > 0 ? 1 : t < 0 ? -1 : 0;
  }
  function W(t, r) {
    var n = t;
    do {
      if (n.i !== t.i && n.next.i !== t.i && n.i !== r.i && n.next.i !== r.i && C(n, n.next, t, r)) return !0;
      n = n.next;
    } while (n !== t);
    return !1;
  }
  function d(t, r) {
    return p(t.prev, t, t.next) < 0 ? p(t, r, t.next) >= 0 && p(t, t.prev, r) >= 0 : p(t, r, t.prev) < 0 || p(t, t.next, r) < 0;
  }
  function X(t, r) {
    var n = t, x = !1, i = (t.x + r.x) / 2, e = (t.y + r.y) / 2;
    do
      n.y > e != n.next.y > e && n.next.y !== n.y && i < (n.next.x - n.x) * (e - n.y) / (n.next.y - n.y) + n.x && (x = !x), n = n.next;
    while (n !== t);
    return x;
  }
  function H(t, r) {
    var n = new q(t.i, t.x, t.y), x = new q(r.i, r.x, r.y), i = t.next, e = r.prev;
    return t.next = r, r.prev = t, n.next = i, i.prev = n, x.next = n, n.prev = x, e.next = x, x.prev = e, x;
  }
  function _(t, r, n, x) {
    var i = new q(t, r, n);
    return x ? (i.next = x.next, i.prev = x, x.next.prev = i, x.next = i) : (i.prev = i, i.next = i), i;
  }
  function w(t) {
    t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ);
  }
  function q(t, r, n) {
    this.i = t, this.x = r, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
  }
  function A(t, r, n, x) {
    for (var i = 0, e = r, u = n - x; e < n; e += x) i += (t[u] - t[e]) * (t[e + 1] + t[u + 1]), u = e;
    return i;
  }
  return m.deviation = function(t, r, n, x) {
    var i = r && r.length, e = i ? r[0] * n : t.length, u = Math.abs(A(t, 0, e, n));
    if (i) for (var v = 0, f = r.length; v < f; v++) {
      var c = r[v] * n, l = v < f - 1 ? r[v + 1] * n : t.length;
      u -= Math.abs(A(t, c, l, n));
    }
    var s = 0;
    for (v = 0; v < x.length; v += 3) {
      var a = x[v] * n, y = x[v + 1] * n, o = x[v + 2] * n;
      s += Math.abs((t[a] - t[o]) * (t[y + 1] - t[a + 1]) - (t[a] - t[y]) * (t[o + 1] - t[a + 1]));
    }
    return u === 0 && s === 0 ? 0 : Math.abs((s - u) / u);
  }, m.flatten = function(t) {
    for (var r = t[0][0].length, n = { vertices: [], holes: [], dimensions: r }, x = 0, i = 0; i < t.length; i++) {
      for (var e = 0; e < t[i].length; e++) for (var u = 0; u < r; u++) n.vertices.push(t[i][e][u]);
      i > 0 && (x += t[i - 1].length, n.holes.push(x));
    }
    return n;
  }, m;
}, (F = E()) !== void 0 && (D.exports = F);
const tt = Y(G.exports);
export {
  tt as i
};
//# sourceMappingURL=earcut-BNX-7HCs.js.map
