import { ju as Re, bS as I, dF as Z, jf as Ae, aG as F, dI as y, dJ as B, je as ee, aH as p, i0 as te, ja as X, O as Ee, Q as Se, dK as Fe, dE as w } from "./main-C4pF0E7B.js";
import { v as Ne, h as xe, M as je } from "./lineSegment-DIDFKzbo.js";
import { s as le, m as ne, T as v, l as oe, N as q, H as ie, V as _, _ as M, a as _e } from "./sphere-BrkIxIX8.js";
import "./plane-DEowYbo2.js";
import { i as fe } from "./Util-D0uAziSw.js";
import { m as Me } from "./edgeProcessing-nFsqlTKo.js";
function me(o) {
  return o ? { ray: ne(o.ray), c0: o.c0, c1: o.c1 } : { ray: ne(), c0: 0, c1: Number.MAX_VALUE };
}
new le(() => me());
function H(o, e) {
  for (let t = 0; t < Be; t++) {
    const n = o[t];
    if (n[0] * e[0] + n[1] * e[1] + n[2] * e[2] + n[3] >= e[3]) return !1;
  }
  return !0;
}
var se, c;
(function(o) {
  o[o.LEFT = 0] = "LEFT", o[o.RIGHT = 1] = "RIGHT", o[o.BOTTOM = 2] = "BOTTOM", o[o.TOP = 3] = "TOP", o[o.NEAR = 4] = "NEAR", o[o.FAR = 5] = "FAR";
})(se || (se = {})), function(o) {
  o[o.NEAR_BOTTOM_LEFT = 0] = "NEAR_BOTTOM_LEFT", o[o.NEAR_BOTTOM_RIGHT = 1] = "NEAR_BOTTOM_RIGHT", o[o.NEAR_TOP_RIGHT = 2] = "NEAR_TOP_RIGHT", o[o.NEAR_TOP_LEFT = 3] = "NEAR_TOP_LEFT", o[o.FAR_BOTTOM_LEFT = 4] = "FAR_BOTTOM_LEFT", o[o.FAR_BOTTOM_RIGHT = 5] = "FAR_BOTTOM_RIGHT", o[o.FAR_TOP_RIGHT = 6] = "FAR_TOP_RIGHT", o[o.FAR_TOP_LEFT = 7] = "FAR_TOP_LEFT";
}(c || (c = {}));
c.FAR_BOTTOM_RIGHT, c.NEAR_BOTTOM_RIGHT, c.NEAR_BOTTOM_LEFT, c.FAR_BOTTOM_LEFT, c.NEAR_BOTTOM_LEFT, c.NEAR_BOTTOM_RIGHT, c.NEAR_TOP_RIGHT, c.NEAR_TOP_LEFT, c.FAR_BOTTOM_RIGHT, c.FAR_BOTTOM_LEFT, c.FAR_TOP_LEFT, c.FAR_TOP_RIGHT, c.NEAR_BOTTOM_RIGHT, c.FAR_BOTTOM_RIGHT, c.FAR_TOP_RIGHT, c.NEAR_TOP_RIGHT, c.FAR_BOTTOM_LEFT, c.NEAR_BOTTOM_LEFT, c.NEAR_TOP_LEFT, c.FAR_TOP_LEFT, c.FAR_TOP_LEFT, c.NEAR_TOP_LEFT, c.NEAR_TOP_RIGHT, c.FAR_TOP_RIGHT;
const Be = 6;
new le(me);
let D = class W {
  get bounds() {
    return this._root.bounds;
  }
  get halfSize() {
    return this._root.halfSize;
  }
  get root() {
    return this._root.node;
  }
  get maximumObjectsPerNode() {
    return this._maximumObjectsPerNode;
  }
  get maximumDepth() {
    return this._maximumDepth;
  }
  get objectCount() {
    return this._objectCount;
  }
  constructor(e, t) {
    this.objectToBoundingSphere = e, this._maximumObjectsPerNode = 10, this._maximumDepth = 20, this._degenerateObjects = /* @__PURE__ */ new Set(), this._root = new u(), this._objectCount = 0, t && (t.maximumObjectsPerNode !== void 0 && (this._maximumObjectsPerNode = t.maximumObjectsPerNode), t.maximumDepth !== void 0 && (this._maximumDepth = t.maximumDepth));
  }
  destroy() {
    this._degenerateObjects.clear(), u.clearPool(), U[0] = null, x.prune(), j.prune();
  }
  add(e, t = e.length) {
    this._objectCount += t, this._grow(e, t);
    const n = u.acquire();
    for (let i = 0; i < t; i++) {
      const s = e[i];
      this._isDegenerate(s) ? this._degenerateObjects.add(s) : (n.init(this._root), this._add(s, n));
    }
    u.release(n);
  }
  remove(e, t = null) {
    this._objectCount -= e.length;
    const n = u.acquire();
    for (const i of e) {
      const s = t ?? v(this.objectToBoundingSphere(i), De);
      z(s[3]) ? (n.init(this._root), Pe(i, s, n)) : this._degenerateObjects.delete(i);
    }
    u.release(n), this._shrink();
  }
  update(e, t) {
    if (!z(t[3]) && this._isDegenerate(e)) return;
    const n = ve(e);
    this.remove(n, t), this.add(n);
  }
  forEachAlongRay(e, t, n) {
    const i = oe(e, t);
    N(this._root, (s) => {
      if (!ze(i, s)) return !1;
      const a = s.node;
      return a.terminals.forAll((h) => {
        this._intersectsObject(i, h) && n(h);
      }), a.residents !== null && a.residents.forAll((h) => {
        this._intersectsObject(i, h) && n(h);
      }), !0;
    });
  }
  forEachAlongRayWithVerticalOffset(e, t, n, i) {
    const s = oe(e, t);
    N(this._root, (a) => {
      if (!Ie(s, a, i)) return !1;
      const h = a.node;
      return h.terminals.forAll((r) => {
        this._intersectsObjectWithOffset(s, r, i) && n(r);
      }), h.residents !== null && h.residents.forAll((r) => {
        this._intersectsObjectWithOffset(s, r, i) && n(r);
      }), !0;
    });
  }
  forEach(e) {
    N(this._root, (t) => {
      const n = t.node;
      return n.terminals.forAll(e), n.residents !== null && n.residents.forAll(e), !0;
    }), this._degenerateObjects.forEach(e);
  }
  forEachDegenerateObject(e) {
    this._degenerateObjects.forEach(e);
  }
  findClosest(e, t, n, i = () => !0, s = 1 / 0) {
    let a = 1 / 0, h = 1 / 0, r = null;
    const d = V(e, t), f = (l) => {
      if (--s, !i(l)) return;
      const T = this.objectToBoundingSphere(l);
      if (!H(n, T)) return;
      const R = S(e, t, _(T)), P = R - T[3], m = R + T[3];
      P < a && (a = P, h = m, r = l);
    };
    return re(this._root, (l) => {
      if (s <= 0 || !H(n, l.bounds) || (y(g, d, l.halfSize), B(g, g, _(l.bounds)), S(e, t, g) > h)) return !1;
      const T = l.node;
      return T.terminals.forAll((R) => f(R)), T.residents !== null && T.residents.forAll((R) => f(R)), !0;
    }, e, t), r;
  }
  forEachInDepthRange(e, t, n, i, s, a, h) {
    let r = -1 / 0, d = 1 / 0;
    const f = { setRange: (m) => {
      n === W.DepthOrder.FRONT_TO_BACK ? (r = Math.max(r, m.near), d = Math.min(d, m.far)) : (r = Math.max(r, -m.far), d = Math.min(d, -m.near));
    } };
    f.setRange(i);
    const l = S(t, n, e), T = V(t, n), R = V(t, -n), P = (m) => {
      if (!h(m)) return;
      const E = this.objectToBoundingSphere(m), L = _(E), Y = S(t, n, L) - l, be = Y - E[3], ge = Y + E[3];
      be > d || ge < r || !H(a, E) || s(m, f);
    };
    re(this._root, (m) => {
      if (!H(a, m.bounds) || (y(g, T, m.halfSize), B(g, g, _(m.bounds)), S(t, n, g) - l > d) || (y(g, R, m.halfSize), B(g, g, _(m.bounds)), S(t, n, g) - l < r)) return !1;
      const E = m.node;
      return E.terminals.forAll((L) => P(L)), E.residents !== null && E.residents.forAll((L) => P(L)), !0;
    }, t, n);
  }
  forEachNode(e) {
    N(this._root, (t) => e(t.node, t.bounds, t.halfSize, t.depth));
  }
  forEachNeighbor(e, t) {
    const n = q(t), i = _(t), s = (r) => {
      const d = this.objectToBoundingSphere(r), f = q(d), l = n + f;
      return !(ee(_(d), i) - l * l <= 0) || e(r);
    };
    let a = !0;
    const h = (r) => {
      a && (a = s(r));
    };
    N(this._root, (r) => {
      const d = q(r.bounds), f = n + d;
      if (ee(_(r.bounds), i) - f * f > 0) return !1;
      const l = r.node;
      return l.terminals.forAll(h), a && l.residents !== null && l.residents.forAll(h), a;
    }), a && this.forEachDegenerateObject(h);
  }
  _intersectsObject(e, t) {
    const n = this.objectToBoundingSphere(t);
    return !(n[3] > 0) || ie(n, e);
  }
  _intersectsObjectWithOffset(e, t, n) {
    const i = this.objectToBoundingSphere(t);
    return !(i[3] > 0) || ie(n.applyToBoundingSphere(i), e);
  }
  _add(e, t) {
    t.advanceTo(this.objectToBoundingSphere(e)) ? t.node.terminals.push(e) : (t.node.residents.push(e), t.node.residents.length > this._maximumObjectsPerNode && t.depth < this._maximumDepth && this._split(t));
  }
  _split(e) {
    const t = e.node.residents;
    e.node.residents = null;
    for (let n = 0; n < t.length; n++) {
      const i = u.acquire().init(e);
      this._add(t.at(n), i), u.release(i);
    }
  }
  _grow(e, t) {
    if (t !== 0 && (ae(e, t, (n) => this.objectToBoundingSphere(n), A), z(A[3]) && !this._fitsInsideTree(A))) if (pe(this._root.node)) v(A, this._root.bounds), this._root.halfSize = 1.25 * this._root.bounds[3], this._root.updateBoundsRadiusFromHalfSize();
    else {
      const n = this._rootBoundsForRootAsSubNode(A);
      this._placingRootViolatesMaxDepth(n) ? this._rebuildTree(A, n) : this._growRootAsSubNode(n), u.release(n);
    }
  }
  _rebuildTree(e, t) {
    Z(_(K), _(t.bounds)), K[3] = t.halfSize, ae([e, K], 2, (i) => i, J);
    const n = u.acquire().init(this._root);
    this._root.initFrom(null, J, J[3]), this._root.increaseHalfSize(1.25), N(n, (i) => (this.add(i.node.terminals.data, i.node.terminals.length), i.node.residents !== null && this.add(i.node.residents.data, i.node.residents.length), !0)), u.release(n);
  }
  _placingRootViolatesMaxDepth(e) {
    const t = Math.log(e.halfSize / this._root.halfSize) * Math.LOG2E;
    let n = 0;
    return N(this._root, (i) => (n = Math.max(n, i.depth), n + t <= this._maximumDepth)), n + t > this._maximumDepth;
  }
  _rootBoundsForRootAsSubNode(e) {
    const t = e[3], n = e;
    let i = -1 / 0;
    const s = this._root.bounds, a = this._root.halfSize;
    for (let r = 0; r < 3; r++) {
      const d = s[r] - a - (n[r] - t), f = n[r] + t - (s[r] + a), l = Math.max(0, Math.ceil(d / (2 * a))), T = Math.max(0, Math.ceil(f / (2 * a))) + 1, R = 2 ** Math.ceil(Math.log(l + T) * Math.LOG2E);
      i = Math.max(i, R), C[r].min = l, C[r].max = T;
    }
    for (let r = 0; r < 3; r++) {
      let d = C[r].min, f = C[r].max;
      const l = (i - (d + f)) / 2;
      d += Math.ceil(l), f += Math.floor(l);
      const T = s[r] - a - d * a * 2;
      k[r] = T + (f + d) * a;
    }
    const h = i * a;
    return k[3] = h * Oe, u.acquire().initFrom(null, k, h, 0);
  }
  _growRootAsSubNode(e) {
    const t = this._root.node;
    Z(_(A), _(this._root.bounds)), A[3] = this._root.halfSize, this._root.init(e), e.advanceTo(A, null, !0), e.node.children = t.children, e.node.residents = t.residents, e.node.terminals = t.terminals;
  }
  _shrink() {
    for (; ; ) {
      const e = this._findShrinkIndex();
      if (e === -1) break;
      this._root.advance(e), this._root.depth = 0;
    }
  }
  _findShrinkIndex() {
    if (this._root.node.terminals.length !== 0 || this._root.isLeaf()) return -1;
    let e = null;
    const t = this._root.node.children;
    let n = 0, i = 0;
    for (; i < t.length && e == null; ) n = i++, e = t[n];
    for (; i < t.length; ) if (t[i++]) return -1;
    return n;
  }
  _isDegenerate(e) {
    return !z(this.objectToBoundingSphere(e)[3]);
  }
  _fitsInsideTree(e) {
    const t = this._root.bounds, n = this._root.halfSize;
    return e[3] <= n && e[0] >= t[0] - n && e[0] <= t[0] + n && e[1] >= t[1] - n && e[1] <= t[1] + n && e[2] >= t[2] - n && e[2] <= t[2] + n;
  }
  toJSON() {
    const { maximumDepth: e, maximumObjectsPerNode: t, _objectCount: n } = this, i = this._nodeToJSON(this._root.node);
    return { maximumDepth: e, maximumObjectsPerNode: t, objectCount: n, root: { bounds: this._root.bounds, halfSize: this._root.halfSize, depth: this._root.depth, node: i } };
  }
  _nodeToJSON(e) {
    const t = e.children.map((s) => s ? this._nodeToJSON(s) : null), n = e.residents?.map((s) => this.objectToBoundingSphere(s)), i = e.terminals?.map((s) => this.objectToBoundingSphere(s));
    return { children: t, residents: n, terminals: i };
  }
  static fromJSON(e) {
    const t = new W((n) => n, { maximumDepth: e.maximumDepth, maximumObjectsPerNode: e.maximumObjectsPerNode });
    return t._objectCount = e.objectCount, t._root.initFrom(e.root.node, e.root.bounds, e.root.halfSize, e.root.depth), t;
  }
};
class u {
  constructor() {
    this.bounds = M(), this.halfSize = 0, this.initFrom(null, null, 0, 0);
  }
  init(e) {
    return this.initFrom(e.node, e.bounds, e.halfSize, e.depth);
  }
  initFrom(e, t, n, i = this.depth) {
    return this.node = e ?? u.createEmptyNode(), t && v(t, this.bounds), this.halfSize = n, this.depth = i, this;
  }
  increaseHalfSize(e) {
    this.halfSize *= e, this.updateBoundsRadiusFromHalfSize();
  }
  updateBoundsRadiusFromHalfSize() {
    this.bounds[3] = this.halfSize * Oe;
  }
  advance(e) {
    let t = this.node.children[e];
    t || (t = u.createEmptyNode(), this.node.children[e] = t), this.node = t, this.halfSize /= 2, this.depth++;
    const n = Te[e];
    return this.bounds[0] += n[0] * this.halfSize, this.bounds[1] += n[1] * this.halfSize, this.bounds[2] += n[2] * this.halfSize, this.updateBoundsRadiusFromHalfSize(), this;
  }
  advanceTo(e, t, n = !1) {
    for (; ; ) {
      if (this.isTerminalFor(e)) return t && t(this, -1), !0;
      if (this.isLeaf()) {
        if (!n) return t && t(this, -1), !1;
        this.node.residents = null;
      }
      const i = this._childIndex(e);
      t && t(this, i), this.advance(i);
    }
  }
  isLeaf() {
    return this.node.residents != null;
  }
  isTerminalFor(e) {
    return e[3] > this.halfSize / 2;
  }
  _childIndex(e) {
    const t = this.bounds;
    return (t[0] < e[0] ? 1 : 0) + (t[1] < e[1] ? 2 : 0) + (t[2] < e[2] ? 4 : 0);
  }
  static createEmptyNode() {
    return { children: [null, null, null, null, null, null, null, null], terminals: new I({ shrink: !0 }), residents: new I({ shrink: !0 }) };
  }
  static acquire() {
    return u._pool.acquire();
  }
  static release(e) {
    u._pool.release(e);
  }
  static clearPool() {
    u._pool.prune();
  }
}
function N(o, e) {
  let t = u.acquire().init(o);
  const n = [t];
  for (; n.length !== 0; ) {
    if (t = n.pop(), e(t) && !t.isLeaf()) for (let i = 0; i < t.node.children.length; i++)
      t.node.children[i] && n.push(u.acquire().init(t).advance(i));
    u.release(t);
  }
}
function re(o, e, t, n = D.DepthOrder.FRONT_TO_BACK) {
  let i = u.acquire().init(o);
  const s = [i];
  for (we(t, n, de); s.length !== 0; ) {
    if (i = s.pop(), e(i) && !i.isLeaf()) for (let a = 7; a >= 0; --a) {
      const h = de[a];
      i.node.children[h] && s.push(u.acquire().init(i).advance(h));
    }
    u.release(i);
  }
}
function Pe(o, e, t) {
  x.clear();
  const n = t.advanceTo(e, (i, s) => {
    x.push(i.node), x.push(s);
  }) ? t.node.terminals : t.node.residents;
  if (n.removeUnordered(o), n.length === 0) for (let i = x.length - 2; i >= 0 && Le(x.data[i], x.data[i + 1]); i -= 2)
    ;
}
function Le(o, e) {
  return e >= 0 && (o.children[e] = null), !!pe(o) && (o.residents === null && (o.residents = new I({ shrink: !0 })), !0);
}
function ze(o, e) {
  return G(_(e.bounds), 2 * -e.halfSize, O), G(_(e.bounds), 2 * e.halfSize, b), fe(o.origin, o.direction, O, b);
}
function Ie(o, e, t) {
  return G(_(e.bounds), 2 * -e.halfSize, O), G(_(e.bounds), 2 * e.halfSize, b), t.applyToMinMax(O, b), fe(o.origin, o.direction, O, b);
}
function pe(o) {
  if (o.terminals.length !== 0) return !1;
  if (o.residents !== null) return o.residents.length === 0;
  for (let e = 0; e < o.children.length; e++) if (o.children[e]) return !1;
  return !0;
}
function He(o, e) {
  o[0] = Math.min(o[0], e[0] - e[3]), o[1] = Math.min(o[1], e[1] - e[3]), o[2] = Math.min(o[2], e[2] - e[3]);
}
function Ce(o, e) {
  o[0] = Math.max(o[0], e[0] + e[3]), o[1] = Math.max(o[1], e[1] + e[3]), o[2] = Math.max(o[2], e[2] + e[3]);
}
function G(o, e, t) {
  t[0] = o[0] + e, t[1] = o[1] + e, t[2] = o[2] + e;
}
function ae(o, e, t, n) {
  if (e === 1) {
    const i = t(o[0]);
    v(i, n);
  } else {
    O[0] = 1 / 0, O[1] = 1 / 0, O[2] = 1 / 0, b[0] = -1 / 0, b[1] = -1 / 0, b[2] = -1 / 0;
    for (let i = 0; i < e; i++) {
      const s = t(o[i]);
      z(s[3]) && (He(O, s), Ce(b, s));
    }
    Ae(_(n), O, b, 0.5), n[3] = Math.max(b[0] - O[0], b[1] - O[1], b[2] - O[2]) / 2;
  }
}
function we(o, e, t) {
  if (!j.length) for (let n = 0; n < 8; ++n) j.push({ index: 0, distance: 0 });
  for (let n = 0; n < 8; ++n) {
    const i = Te[n];
    j.data[n].index = n, j.data[n].distance = S(o, e, i);
  }
  j.sort((n, i) => n.distance - i.distance);
  for (let n = 0; n < 8; ++n) t[n] = j.data[n].index;
}
function V(o, e) {
  let t, n = 1 / 0;
  for (let i = 0; i < 8; ++i) {
    const s = S(o, e, he[i]);
    s < n && (n = s, t = he[i]);
  }
  return t;
}
function S(o, e, t) {
  return e * (o[0] * t[0] + o[1] * t[1] + o[2] * t[2]);
}
function z(o) {
  return !isNaN(o) && o !== -1 / 0 && o !== 1 / 0 && o > 0;
}
u._pool = new Re(u), function(o) {
  var e;
  (e = o.DepthOrder || (o.DepthOrder = {}))[e.FRONT_TO_BACK = 1] = "FRONT_TO_BACK", e[e.BACK_TO_FRONT = -1] = "BACK_TO_FRONT";
}(D || (D = {}));
const Te = [p(-1, -1, -1), p(1, -1, -1), p(-1, 1, -1), p(1, 1, -1), p(-1, -1, 1), p(1, -1, 1), p(-1, 1, 1), p(1, 1, 1)], he = [p(-1, -1, -1), p(-1, -1, 1), p(-1, 1, -1), p(-1, 1, 1), p(1, -1, -1), p(1, -1, 1), p(1, 1, -1), p(1, 1, 1)], Oe = Math.sqrt(3), U = [null];
function ve(o) {
  return U[0] = o, U;
}
const k = M(), g = F(), O = F(), b = F(), x = new I(), De = M(), A = M(), K = M(), J = M(), C = [{ min: 0, max: 0 }, { min: 0, max: 0 }, { min: 0, max: 0 }], j = new I(), de = [0, 0, 0, 0, 0, 0, 0, 0], ce = D, Ge = 1e3;
function $e(o, e, t) {
  const n = M(), i = _(n);
  return te(i, i, o, 0.5), te(i, i, e, 0.5), n[3] = X(i, o), B(i, i, t), n;
}
let Q = class {
  constructor() {
    this._idToComponent = /* @__PURE__ */ new Map(), this._components = new ce((o) => o.bounds), this._edges = new ce((o) => o.bounds), this._tmpLineSegment = Ne(), this._tmpP1 = F(), this._tmpP2 = F(), this._tmpP3 = F(), this.remoteClient = null;
  }
  async fetchCandidates(o, e) {
    await Promise.resolve(), Fe(e), await this._ensureEdgeLocations(o, e);
    const t = [];
    return this._edges.forEachNeighbor((n) => (this._addCandidates(o, n, t), t.length < Ge), o.bounds), { result: { candidates: t } };
  }
  async _ensureEdgeLocations(o, e) {
    const t = [];
    if (this._components.forEachNeighbor((s) => {
      if (s.info == null) {
        const { id: a, uid: h } = s;
        t.push({ id: a, uid: h });
      }
      return !0;
    }, o.bounds), !t.length) return;
    const n = { components: t }, i = await this.remoteClient.invoke("fetchAllEdgeLocations", n, e ?? {});
    for (const s of i.components) this._setFetchEdgeLocations(s);
  }
  async add(o) {
    const e = new $(o.id, o.bounds);
    return this._idToComponent.set(e.id, e), this._components.add([e]), { result: {} };
  }
  async remove(o) {
    const e = this._idToComponent.get(o.id);
    if (e) {
      const t = [];
      this._edges.forEachNeighbor((n) => (n.component === e && t.push(n), !0), e.bounds), this._edges.remove(t), this._components.remove([e]), this._idToComponent.delete(e.id);
    }
    return { result: {} };
  }
  _setFetchEdgeLocations(o) {
    const e = this._idToComponent.get(o.id);
    if (e == null || o.uid !== e.uid) return;
    const t = Me.createView(o.locations), n = new Array(t.count), i = F(), s = F();
    for (let r = 0; r < t.count; r++) {
      t.position0.getVec(r, i), t.position1.getVec(r, s);
      const d = $e(i, s, o.origin), f = new ye(e, r, d);
      n[r] = f;
    }
    this._edges.add(n);
    const { objectIds: a, origin: h } = o;
    e.info = { locations: t, objectIds: a, origin: h };
  }
  _addCandidates(o, e, t) {
    const { info: n } = e.component, { origin: i, objectIds: s } = n, a = n.locations, h = a.position0.getVec(e.index, this._tmpP1), r = a.position1.getVec(e.index, this._tmpP2);
    B(h, h, i), B(r, r, i);
    const d = s[a.componentIndex.get(e.index)];
    this._addEdgeCandidate(o, d, h, r, t), ue(o, d, h, t), ue(o, d, r, t);
  }
  _addEdgeCandidate(o, e, t, n, i) {
    if (!o.returnEdge) return;
    const s = _(o.bounds), a = xe(t, n, this._tmpLineSegment), h = je(a, s, this._tmpP3);
    _e(o.bounds, h) && i.push({ type: "edge", objectId: e, target: w(h), distance: X(s, h), start: w(t), end: w(n) });
  }
};
Q = Ee([Se("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")], Q);
const Ue = Q;
function ue(o, e, t, n) {
  if (!o.returnVertex || !_e(o.bounds, t)) return;
  const i = _(o.bounds);
  n.push({ type: "vertex", objectId: e, target: w(t), distance: X(i, t) });
}
class $ {
  constructor(e, t) {
    this.id = e, this.bounds = t, this.info = null, this.uid = ++$.uid;
  }
}
$.uid = 0;
class ye {
  constructor(e, t, n) {
    this.component = e, this.index = t, this.bounds = n;
  }
}
export {
  Ue as default
};
//# sourceMappingURL=SceneLayerSnappingSourceWorker-VIuAF4Lm.js.map
