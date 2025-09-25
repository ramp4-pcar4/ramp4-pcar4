import { cD as y, cF as je, cG as Xe, eH as Z, cE as wt, cH as bt, jZ as xt } from "./main-BpIyUAdL.js";
import { g as yt, t as ue, f as Et, q as Pt, v as Ye, b as At } from "./dom-DkH2gtZS.js";
import { g as Ke } from "./guid-Dls486Er.js";
import { u as Ct, c as Ot, a as Rt, s as kt, d as Dt, b as Lt, h as qe } from "./t9n-DZy8an7K.js";
import { s as Ge, a as Ze, c as Qe } from "./loadable-mV3e0zNp.js";
import { d as Je } from "./action-CjDCgE6r.js";
import { d as et } from "./icon-vgnKLT3A.js";
import { d as tt } from "./loader-D5UFN86B.js";
import { d as St } from "./debounce-DSwYeavs.js";
import { d as fe, a as ye, c as Mt, u as Tt } from "./focusTrapComponent-BH_rQxeR.js";
import { o as Ee } from "./openCloseComponent-BR1Lyke1.js";
import { c as Bt } from "./observers-BKbzQbLw.js";
import { g as Ht } from "./component-CWGf1hug.js";
function Pe(t, e) {
  return (t + e) % e;
}
const nt = ["top", "right", "bottom", "left"], Ae = ["start", "end"], Ce = /* @__PURE__ */ nt.reduce((t, e) => t.concat(e, e + "-" + Ae[0], e + "-" + Ae[1]), []), q = Math.min, j = Math.max, ne = Math.round, te = Math.floor, N = (t) => ({
  x: t,
  y: t
}), It = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ft = {
  start: "end",
  end: "start"
};
function he(t, e, n) {
  return j(t, q(e, n));
}
function Y(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function z(t) {
  return t.split("-")[0];
}
function H(t) {
  return t.split("-")[1];
}
function it(t) {
  return t === "x" ? "y" : "x";
}
function ge(t) {
  return t === "y" ? "height" : "width";
}
function le(t) {
  return ["top", "bottom"].includes(z(t)) ? "y" : "x";
}
function ve(t) {
  return it(le(t));
}
function ot(t, e, n) {
  n === void 0 && (n = !1);
  const i = H(t), o = ve(t), s = ge(o);
  let r = o === "x" ? i === (n ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (r = oe(r)), [r, oe(r)];
}
function $t(t) {
  const e = oe(t);
  return [ie(t), e, ie(e)];
}
function ie(t) {
  return t.replace(/start|end/g, (e) => Ft[e]);
}
function zt(t, e, n) {
  const i = ["left", "right"], o = ["right", "left"], s = ["top", "bottom"], r = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? o : i : e ? i : o;
    case "left":
    case "right":
      return e ? s : r;
    default:
      return [];
  }
}
function _t(t, e, n, i) {
  const o = H(t);
  let s = zt(z(t), n === "start", i);
  return o && (s = s.map((r) => r + "-" + o), e && (s = s.concat(s.map(ie)))), s;
}
function oe(t) {
  return t.replace(/left|right|bottom|top/g, (e) => It[e]);
}
function Wt(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function st(t) {
  return typeof t != "number" ? Wt(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function se(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
function Oe(t, e, n) {
  let {
    reference: i,
    floating: o
  } = t;
  const s = le(e), r = ve(e), l = ge(r), a = z(e), c = s === "y", u = i.x + i.width / 2 - o.width / 2, d = i.y + i.height / 2 - o.height / 2, g = i[l] / 2 - o[l] / 2;
  let f;
  switch (a) {
    case "top":
      f = {
        x: u,
        y: i.y - o.height
      };
      break;
    case "bottom":
      f = {
        x: u,
        y: i.y + i.height
      };
      break;
    case "right":
      f = {
        x: i.x + i.width,
        y: d
      };
      break;
    case "left":
      f = {
        x: i.x - o.width,
        y: d
      };
      break;
    default:
      f = {
        x: i.x,
        y: i.y
      };
  }
  switch (H(e)) {
    case "start":
      f[r] -= g * (n && c ? -1 : 1);
      break;
    case "end":
      f[r] += g * (n && c ? -1 : 1);
      break;
  }
  return f;
}
const Nt = async (t, e, n) => {
  const {
    placement: i = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: r
  } = n, l = s.filter(Boolean), a = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let c = await r.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: u,
    y: d
  } = Oe(c, i, a), g = i, f = {}, h = 0;
  for (let m = 0; m < l.length; m++) {
    const {
      name: v,
      fn: p
    } = l[m], {
      x: w,
      y: b,
      data: E,
      reset: x
    } = await p({
      x: u,
      y: d,
      initialPlacement: i,
      placement: g,
      strategy: o,
      middlewareData: f,
      rects: c,
      platform: r,
      elements: {
        reference: t,
        floating: e
      }
    });
    if (u = w ?? u, d = b ?? d, f = {
      ...f,
      [v]: {
        ...f[v],
        ...E
      }
    }, x && h <= 50) {
      h++, typeof x == "object" && (x.placement && (g = x.placement), x.rects && (c = x.rects === !0 ? await r.getElementRects({
        reference: t,
        floating: e,
        strategy: o
      }) : x.rects), {
        x: u,
        y: d
      } = Oe(c, g, a)), m = -1;
      continue;
    }
  }
  return {
    x: u,
    y: d,
    placement: g,
    strategy: o,
    middlewareData: f
  };
};
async function Q(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: i,
    y: o,
    platform: s,
    rects: r,
    elements: l,
    strategy: a
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: g = !1,
    padding: f = 0
  } = Y(e, t), h = st(f), v = l[g ? d === "floating" ? "reference" : "floating" : d], p = se(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(v))) == null || n ? v : v.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: a
  })), w = d === "floating" ? {
    ...r.floating,
    x: i,
    y: o
  } : r.reference, b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)), E = await (s.isElement == null ? void 0 : s.isElement(b)) ? await (s.getScale == null ? void 0 : s.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, x = se(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: w,
    offsetParent: b,
    strategy: a
  }) : w);
  return {
    top: (p.top - x.top + h.top) / E.y,
    bottom: (x.bottom - p.bottom + h.bottom) / E.y,
    left: (p.left - x.left + h.left) / E.x,
    right: (x.right - p.right + h.right) / E.x
  };
}
const Ut = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: i,
      placement: o,
      rects: s,
      platform: r,
      elements: l,
      middlewareData: a
    } = e, {
      element: c,
      padding: u = 0
    } = Y(t, e) || {};
    if (c == null)
      return {};
    const d = st(u), g = {
      x: n,
      y: i
    }, f = ve(o), h = ge(f), m = await r.getDimensions(c), v = f === "y", p = v ? "top" : "left", w = v ? "bottom" : "right", b = v ? "clientHeight" : "clientWidth", E = s.reference[h] + s.reference[f] - g[f] - s.floating[h], x = g[f] - s.reference[f], P = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c));
    let A = P ? P[b] : 0;
    (!A || !await (r.isElement == null ? void 0 : r.isElement(P))) && (A = l.floating[b] || s.floating[h]);
    const S = E / 2 - x / 2, M = A / 2 - m[h] / 2 - 1, C = q(d[p], M), L = q(d[w], M), O = C, V = A - m[h] - L, R = A / 2 - m[h] / 2 + S, T = he(O, R, V), B = !a.arrow && H(o) != null && R != T && s.reference[h] / 2 - (R < O ? C : L) - m[h] / 2 < 0, F = B ? R < O ? R - O : R - V : 0;
    return {
      [f]: g[f] + F,
      data: {
        [f]: T,
        centerOffset: R - T - F,
        ...B && {
          alignmentOffset: F
        }
      },
      reset: B
    };
  }
});
function Vt(t, e, n) {
  return (t ? [...n.filter((o) => H(o) === t), ...n.filter((o) => H(o) !== t)] : n.filter((o) => z(o) === o)).filter((o) => t ? H(o) === t || (e ? ie(o) !== o : !1) : !0);
}
const jt = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, i, o;
      const {
        rects: s,
        middlewareData: r,
        placement: l,
        platform: a,
        elements: c
      } = e, {
        crossAxis: u = !1,
        alignment: d,
        allowedPlacements: g = Ce,
        autoAlignment: f = !0,
        ...h
      } = Y(t, e), m = d !== void 0 || g === Ce ? Vt(d || null, f, g) : g, v = await Q(e, h), p = ((n = r.autoPlacement) == null ? void 0 : n.index) || 0, w = m[p];
      if (w == null)
        return {};
      const b = ot(w, s, await (a.isRTL == null ? void 0 : a.isRTL(c.floating)));
      if (l !== w)
        return {
          reset: {
            placement: m[0]
          }
        };
      const E = [v[z(w)], v[b[0]], v[b[1]]], x = [...((i = r.autoPlacement) == null ? void 0 : i.overflows) || [], {
        placement: w,
        overflows: E
      }], P = m[p + 1];
      if (P)
        return {
          data: {
            index: p + 1,
            overflows: x
          },
          reset: {
            placement: P
          }
        };
      const A = x.map((C) => {
        const L = H(C.placement);
        return [C.placement, L && u ? (
          // Check along the mainAxis and main crossAxis side.
          C.overflows.slice(0, 2).reduce((O, V) => O + V, 0)
        ) : (
          // Check only the mainAxis.
          C.overflows[0]
        ), C.overflows];
      }).sort((C, L) => C[1] - L[1]), M = ((o = A.filter((C) => C[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        H(C[0]) ? 2 : 3
      ).every((L) => L <= 0))[0]) == null ? void 0 : o[0]) || A[0][0];
      return M !== l ? {
        data: {
          index: p + 1,
          overflows: x
        },
        reset: {
          placement: M
        }
      } : {};
    }
  };
}, Xt = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, i;
      const {
        placement: o,
        middlewareData: s,
        rects: r,
        initialPlacement: l,
        platform: a,
        elements: c
      } = e, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: g,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: m = !0,
        ...v
      } = Y(t, e);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const p = z(o), w = z(l) === l, b = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), E = g || (w || !m ? [oe(l)] : $t(l));
      !g && h !== "none" && E.push(..._t(l, m, h, b));
      const x = [l, ...E], P = await Q(e, v), A = [];
      let S = ((i = s.flip) == null ? void 0 : i.overflows) || [];
      if (u && A.push(P[p]), d) {
        const O = ot(o, r, b);
        A.push(P[O[0]], P[O[1]]);
      }
      if (S = [...S, {
        placement: o,
        overflows: A
      }], !A.every((O) => O <= 0)) {
        var M, C;
        const O = (((M = s.flip) == null ? void 0 : M.index) || 0) + 1, V = x[O];
        if (V)
          return {
            data: {
              index: O,
              overflows: S
            },
            reset: {
              placement: V
            }
          };
        let R = (C = S.filter((T) => T.overflows[0] <= 0).sort((T, B) => T.overflows[1] - B.overflows[1])[0]) == null ? void 0 : C.placement;
        if (!R)
          switch (f) {
            case "bestFit": {
              var L;
              const T = (L = S.map((B) => [B.placement, B.overflows.filter((F) => F > 0).reduce((F, vt) => F + vt, 0)]).sort((B, F) => B[1] - F[1])[0]) == null ? void 0 : L[0];
              T && (R = T);
              break;
            }
            case "initialPlacement":
              R = l;
              break;
          }
        if (o !== R)
          return {
            reset: {
              placement: R
            }
          };
      }
      return {};
    }
  };
};
function Re(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function ke(t) {
  return nt.some((e) => t[e] >= 0);
}
const Yt = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n
      } = e, {
        strategy: i = "referenceHidden",
        ...o
      } = Y(t, e);
      switch (i) {
        case "referenceHidden": {
          const s = await Q(e, {
            ...o,
            elementContext: "reference"
          }), r = Re(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: r,
              referenceHidden: ke(r)
            }
          };
        }
        case "escaped": {
          const s = await Q(e, {
            ...o,
            altBoundary: !0
          }), r = Re(s, n.floating);
          return {
            data: {
              escapedOffsets: r,
              escaped: ke(r)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function Kt(t, e) {
  const {
    placement: n,
    platform: i,
    elements: o
  } = t, s = await (i.isRTL == null ? void 0 : i.isRTL(o.floating)), r = z(n), l = H(n), a = le(n) === "y", c = ["left", "top"].includes(r) ? -1 : 1, u = s && a ? -1 : 1, d = Y(e, t);
  let {
    mainAxis: g,
    crossAxis: f,
    alignmentAxis: h
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return l && typeof h == "number" && (f = l === "end" ? h * -1 : h), a ? {
    x: f * u,
    y: g * c
  } : {
    x: g * c,
    y: f * u
  };
}
const qt = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, i;
      const {
        x: o,
        y: s,
        placement: r,
        middlewareData: l
      } = e, a = await Kt(e, t);
      return r === ((n = l.offset) == null ? void 0 : n.placement) && (i = l.arrow) != null && i.alignmentOffset ? {} : {
        x: o + a.x,
        y: s + a.y,
        data: {
          ...a,
          placement: r
        }
      };
    }
  };
}, Gt = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: i,
        placement: o
      } = e, {
        mainAxis: s = !0,
        crossAxis: r = !1,
        limiter: l = {
          fn: (v) => {
            let {
              x: p,
              y: w
            } = v;
            return {
              x: p,
              y: w
            };
          }
        },
        ...a
      } = Y(t, e), c = {
        x: n,
        y: i
      }, u = await Q(e, a), d = le(z(o)), g = it(d);
      let f = c[g], h = c[d];
      if (s) {
        const v = g === "y" ? "top" : "left", p = g === "y" ? "bottom" : "right", w = f + u[v], b = f - u[p];
        f = he(w, f, b);
      }
      if (r) {
        const v = d === "y" ? "top" : "left", p = d === "y" ? "bottom" : "right", w = h + u[v], b = h - u[p];
        h = he(w, h, b);
      }
      const m = l.fn({
        ...e,
        [g]: f,
        [d]: h
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - i
        }
      };
    }
  };
};
function U(t) {
  return rt(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function k(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function W(t) {
  var e;
  return (e = (rt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function rt(t) {
  return t instanceof Node || t instanceof k(t).Node;
}
function _(t) {
  return t instanceof Element || t instanceof k(t).Element;
}
function I(t) {
  return t instanceof HTMLElement || t instanceof k(t).HTMLElement;
}
function De(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof k(t).ShadowRoot;
}
function ee(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: i,
    display: o
  } = D(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + i + n) && !["inline", "contents"].includes(o);
}
function Zt(t) {
  return ["table", "td", "th"].includes(U(t));
}
function we(t) {
  const e = be(), n = D(t);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((i) => (n.willChange || "").includes(i)) || ["paint", "layout", "strict", "content"].some((i) => (n.contain || "").includes(i));
}
function Qt(t) {
  let e = G(t);
  for (; I(e) && !ae(e); ) {
    if (we(e))
      return e;
    e = G(e);
  }
  return null;
}
function be() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ae(t) {
  return ["html", "body", "#document"].includes(U(t));
}
function D(t) {
  return k(t).getComputedStyle(t);
}
function ce(t) {
  return _(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function G(t) {
  if (U(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    De(t) && t.host || // Fallback.
    W(t)
  );
  return De(e) ? e.host : e;
}
function lt(t) {
  const e = G(t);
  return ae(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : I(e) && ee(e) ? e : lt(e);
}
function J(t, e, n) {
  var i;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const o = lt(t), s = o === ((i = t.ownerDocument) == null ? void 0 : i.body), r = k(o);
  return s ? e.concat(r, r.visualViewport || [], ee(o) ? o : [], r.frameElement && n ? J(r.frameElement) : []) : e.concat(o, J(o, [], n));
}
function at(t) {
  const e = D(t);
  let n = parseFloat(e.width) || 0, i = parseFloat(e.height) || 0;
  const o = I(t), s = o ? t.offsetWidth : n, r = o ? t.offsetHeight : i, l = ne(n) !== s || ne(i) !== r;
  return l && (n = s, i = r), {
    width: n,
    height: i,
    $: l
  };
}
function xe(t) {
  return _(t) ? t : t.contextElement;
}
function K(t) {
  const e = xe(t);
  if (!I(e))
    return N(1);
  const n = e.getBoundingClientRect(), {
    width: i,
    height: o,
    $: s
  } = at(e);
  let r = (s ? ne(n.width) : n.width) / i, l = (s ? ne(n.height) : n.height) / o;
  return (!r || !Number.isFinite(r)) && (r = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: r,
    y: l
  };
}
const Jt = /* @__PURE__ */ N(0);
function ct(t) {
  const e = k(t);
  return !be() || !e.visualViewport ? Jt : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function en(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== k(t) ? !1 : e;
}
function X(t, e, n, i) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), s = xe(t);
  let r = N(1);
  e && (i ? _(i) && (r = K(i)) : r = K(t));
  const l = en(s, n, i) ? ct(s) : N(0);
  let a = (o.left + l.x) / r.x, c = (o.top + l.y) / r.y, u = o.width / r.x, d = o.height / r.y;
  if (s) {
    const g = k(s), f = i && _(i) ? k(i) : i;
    let h = g, m = h.frameElement;
    for (; m && i && f !== h; ) {
      const v = K(m), p = m.getBoundingClientRect(), w = D(m), b = p.left + (m.clientLeft + parseFloat(w.paddingLeft)) * v.x, E = p.top + (m.clientTop + parseFloat(w.paddingTop)) * v.y;
      a *= v.x, c *= v.y, u *= v.x, d *= v.y, a += b, c += E, h = k(m), m = h.frameElement;
    }
  }
  return se({
    width: u,
    height: d,
    x: a,
    y: c
  });
}
const tn = [":popover-open", ":modal"];
function ft(t) {
  return tn.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function nn(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: i,
    strategy: o
  } = t;
  const s = o === "fixed", r = W(i), l = e ? ft(e.floating) : !1;
  if (i === r || l && s)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = N(1);
  const u = N(0), d = I(i);
  if ((d || !d && !s) && ((U(i) !== "body" || ee(r)) && (a = ce(i)), I(i))) {
    const g = X(i);
    c = K(i), u.x = g.x + i.clientLeft, u.y = g.y + i.clientTop;
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + u.x,
    y: n.y * c.y - a.scrollTop * c.y + u.y
  };
}
function on(t) {
  return Array.from(t.getClientRects());
}
function dt(t) {
  return X(W(t)).left + ce(t).scrollLeft;
}
function sn(t) {
  const e = W(t), n = ce(t), i = t.ownerDocument.body, o = j(e.scrollWidth, e.clientWidth, i.scrollWidth, i.clientWidth), s = j(e.scrollHeight, e.clientHeight, i.scrollHeight, i.clientHeight);
  let r = -n.scrollLeft + dt(t);
  const l = -n.scrollTop;
  return D(i).direction === "rtl" && (r += j(e.clientWidth, i.clientWidth) - o), {
    width: o,
    height: s,
    x: r,
    y: l
  };
}
function rn(t, e) {
  const n = k(t), i = W(t), o = n.visualViewport;
  let s = i.clientWidth, r = i.clientHeight, l = 0, a = 0;
  if (o) {
    s = o.width, r = o.height;
    const c = be();
    (!c || c && e === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: l,
    y: a
  };
}
function ln(t, e) {
  const n = X(t, !0, e === "fixed"), i = n.top + t.clientTop, o = n.left + t.clientLeft, s = I(t) ? K(t) : N(1), r = t.clientWidth * s.x, l = t.clientHeight * s.y, a = o * s.x, c = i * s.y;
  return {
    width: r,
    height: l,
    x: a,
    y: c
  };
}
function Le(t, e, n) {
  let i;
  if (e === "viewport")
    i = rn(t, n);
  else if (e === "document")
    i = sn(W(t));
  else if (_(e))
    i = ln(e, n);
  else {
    const o = ct(t);
    i = {
      ...e,
      x: e.x - o.x,
      y: e.y - o.y
    };
  }
  return se(i);
}
function ut(t, e) {
  const n = G(t);
  return n === e || !_(n) || ae(n) ? !1 : D(n).position === "fixed" || ut(n, e);
}
function an(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let i = J(t, [], !1).filter((l) => _(l) && U(l) !== "body"), o = null;
  const s = D(t).position === "fixed";
  let r = s ? G(t) : t;
  for (; _(r) && !ae(r); ) {
    const l = D(r), a = we(r);
    !a && l.position === "fixed" && (o = null), (s ? !a && !o : !a && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ee(r) && !a && ut(t, r)) ? i = i.filter((u) => u !== r) : o = l, r = G(r);
  }
  return e.set(t, i), i;
}
function cn(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: i,
    strategy: o
  } = t;
  const r = [...n === "clippingAncestors" ? an(e, this._c) : [].concat(n), i], l = r[0], a = r.reduce((c, u) => {
    const d = Le(e, u, o);
    return c.top = j(d.top, c.top), c.right = q(d.right, c.right), c.bottom = q(d.bottom, c.bottom), c.left = j(d.left, c.left), c;
  }, Le(e, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function fn(t) {
  const {
    width: e,
    height: n
  } = at(t);
  return {
    width: e,
    height: n
  };
}
function dn(t, e, n) {
  const i = I(e), o = W(e), s = n === "fixed", r = X(t, !0, s, e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = N(0);
  if (i || !i && !s)
    if ((U(e) !== "body" || ee(o)) && (l = ce(e)), i) {
      const d = X(e, !0, s, e);
      a.x = d.x + e.clientLeft, a.y = d.y + e.clientTop;
    } else o && (a.x = dt(o));
  const c = r.left + l.scrollLeft - a.x, u = r.top + l.scrollTop - a.y;
  return {
    x: c,
    y: u,
    width: r.width,
    height: r.height
  };
}
function Se(t, e) {
  return !I(t) || D(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function ht(t, e) {
  const n = k(t);
  if (!I(t) || ft(t))
    return n;
  let i = Se(t, e);
  for (; i && Zt(i) && D(i).position === "static"; )
    i = Se(i, e);
  return i && (U(i) === "html" || U(i) === "body" && D(i).position === "static" && !we(i)) ? n : i || Qt(t) || n;
}
const un = async function(t) {
  const e = this.getOffsetParent || ht, n = this.getDimensions;
  return {
    reference: dn(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      ...await n(t.floating)
    }
  };
};
function hn(t) {
  return D(t).direction === "rtl";
}
const me = {
  convertOffsetParentRelativeRectToViewportRelativeRect: nn,
  getDocumentElement: W,
  getClippingRect: cn,
  getOffsetParent: ht,
  getElementRects: un,
  getClientRects: on,
  getDimensions: fn,
  getScale: K,
  isElement: _,
  isRTL: hn
};
function mn(t, e) {
  let n = null, i;
  const o = W(t);
  function s() {
    var l;
    clearTimeout(i), (l = n) == null || l.disconnect(), n = null;
  }
  function r(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), s();
    const {
      left: c,
      top: u,
      width: d,
      height: g
    } = t.getBoundingClientRect();
    if (l || e(), !d || !g)
      return;
    const f = te(u), h = te(o.clientWidth - (c + d)), m = te(o.clientHeight - (u + g)), v = te(c), w = {
      rootMargin: -f + "px " + -h + "px " + -m + "px " + -v + "px",
      threshold: j(0, q(1, a)) || 1
    };
    let b = !0;
    function E(x) {
      const P = x[0].intersectionRatio;
      if (P !== a) {
        if (!b)
          return r();
        P ? r(!1, P) : i = setTimeout(() => {
          r(!1, 1e-7);
        }, 100);
      }
      b = !1;
    }
    try {
      n = new IntersectionObserver(E, {
        ...w,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(E, w);
    }
    n.observe(t);
  }
  return r(!0), s;
}
function pn(t, e, n, i) {
  i === void 0 && (i = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: l = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = i, c = xe(t), u = o || s ? [...c ? J(c) : [], ...J(e)] : [];
  u.forEach((p) => {
    o && p.addEventListener("scroll", n, {
      passive: !0
    }), s && p.addEventListener("resize", n);
  });
  const d = c && l ? mn(c, n) : null;
  let g = -1, f = null;
  r && (f = new ResizeObserver((p) => {
    let [w] = p;
    w && w.target === c && f && (f.unobserve(e), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var b;
      (b = f) == null || b.observe(e);
    })), n();
  }), c && !a && f.observe(c), f.observe(e));
  let h, m = a ? X(t) : null;
  a && v();
  function v() {
    const p = X(t);
    m && (p.x !== m.x || p.y !== m.y || p.width !== m.width || p.height !== m.height) && n(), m = p, h = requestAnimationFrame(v);
  }
  return n(), () => {
    var p;
    u.forEach((w) => {
      o && w.removeEventListener("scroll", n), s && w.removeEventListener("resize", n);
    }), d?.(), (p = f) == null || p.disconnect(), f = null, a && cancelAnimationFrame(h);
  };
}
const gn = jt, vn = Gt, Me = Xt, wn = Yt, bn = Ut, xn = (t, e, n) => {
  const i = /* @__PURE__ */ new Map(), o = {
    platform: me,
    ...n
  }, s = {
    ...o.platform,
    _c: i
  };
  return Nt(t, e, {
    ...o,
    platform: s
  });
};
function yn(t) {
  return En(t);
}
function de(t) {
  return t.assignedSlot ? t.assignedSlot : t.parentNode instanceof ShadowRoot ? t.parentNode.host : t.parentNode;
}
function En(t) {
  for (let e = t; e; e = de(e))
    if (e instanceof Element && getComputedStyle(e).display === "none")
      return null;
  for (let e = de(t); e; e = de(e)) {
    if (!(e instanceof Element))
      continue;
    const n = getComputedStyle(e);
    if (n.display !== "contents" && (n.position !== "static" || n.filter !== "none" || e.tagName === "BODY"))
      return e;
  }
  return null;
}
(function() {
  {
    const e = me.getOffsetParent;
    me.getOffsetParent = (n) => e(n, yn);
  }
})();
function Te(t) {
  const e = window.devicePixelRatio || 1;
  return Math.round(t * e) / e;
}
const mt = (
  /* we export arrow function to allow us to spy on it during testing */
  async (t, { referenceEl: e, floatingEl: n, overlayPositioning: i = "absolute", placement: o, flipDisabled: s, flipPlacements: r, offsetDistance: l, offsetSkidding: a, arrowEl: c, type: u }) => {
    if (!e || !n)
      return null;
    const { x: d, y: g, placement: f, strategy: h, middlewareData: m } = await xn(e, n, {
      strategy: i,
      placement: o === "auto" || o === "auto-start" || o === "auto-end" ? void 0 : On(n, o),
      middleware: An({
        placement: o,
        flipDisabled: s,
        flipPlacements: r,
        offsetDistance: l,
        offsetSkidding: a,
        arrowEl: c,
        type: u
      })
    });
    if (c && m.arrow) {
      const { x: E, y: x } = m.arrow, P = f.split("-")[0], A = E != null ? "left" : "top", S = Dn[P], M = { left: "", top: "", bottom: "", right: "" };
      "floatingLayout" in t && (t.floatingLayout = P === "left" || P === "right" ? "horizontal" : "vertical"), Object.assign(c.style, {
        ...M,
        [A]: `${A == "left" ? E : x}px`,
        [P]: "100%",
        transform: S
      });
    }
    const p = m.hide?.referenceHidden ? "hidden" : null, w = p ? "none" : null;
    n.setAttribute(Pn, f);
    const { open: b } = t;
    Object.assign(n.style, {
      visibility: p,
      pointerEvents: w,
      position: h,
      transform: b ? `translate(${Te(d)}px,${Te(g)}px)` : "",
      top: 0,
      left: 0
    });
  }
), Pn = "data-placement", Be = 100, He = [
  "top",
  "bottom",
  "right",
  "left",
  "top-start",
  "top-end",
  "bottom-start",
  "bottom-end",
  "right-start",
  "right-end",
  "left-start",
  "left-end"
], Ie = {
  animation: "calcite-floating-ui-anim",
  animationActive: "calcite-floating-ui-anim--active"
};
function An({ placement: t, flipDisabled: e, flipPlacements: n, offsetDistance: i, offsetSkidding: o, arrowEl: s, type: r }) {
  const l = [vn(), wn()];
  if (r === "menu")
    return [
      ...l,
      Me({
        fallbackPlacements: n || ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"]
      })
    ];
  if (r === "popover" || r === "tooltip") {
    const a = [
      ...l,
      qt({
        mainAxis: typeof i == "number" ? i : 0,
        crossAxis: typeof o == "number" ? o : 0
      })
    ];
    return t === "auto" || t === "auto-start" || t === "auto-end" ? a.push(gn({ alignment: t === "auto-start" ? "start" : t === "auto-end" ? "end" : null })) : e || a.push(Me(n ? { fallbackPlacements: n } : {})), s && a.push(bn({
      element: s
    })), a;
  }
  return [];
}
function Cn(t, e) {
  const n = t.filter((i) => He.includes(i));
  return n.length !== t.length && console.warn(`${e.tagName}: Invalid value found in: flipPlacements. Try any of these: ${He.map((i) => `"${i}"`).join(", ").trim()}`, { el: e }), n;
}
function On(t, e) {
  const n = ["left", "right"];
  return yt(t) === "rtl" && n.reverse(), e.replace(/leading/gi, n[0]).replace(/trailing/gi, n[1]);
}
async function Rn(t, e, n = !1) {
  return t.open ? (n ? kn(t) : mt)(t, e) : void 0;
}
function kn(t) {
  let e = re.get(t);
  return e || (e = St(mt, Be, {
    leading: !0,
    maxWait: Be
  }), re.set(t, e), e);
}
const Dn = {
  top: "",
  left: "rotate(-90deg)",
  bottom: "rotate(180deg)",
  right: "rotate(90deg)"
}, pe = /* @__PURE__ */ new WeakMap(), re = /* @__PURE__ */ new WeakMap();
function Fe(t, e, n) {
  if (!n || !e)
    return;
  pt(t, e, n), Object.assign(n.style, {
    visibility: "hidden",
    pointerEvents: "none",
    // initial positioning based on https://floating-ui.com/docs/computePosition#initial-layout
    position: t.overlayPositioning
  });
  const i = pn;
  pe.set(t, i(e, n, () => t.reposition()));
}
function pt(t, e, n) {
  !n || !e || (pe.get(t)?.(), pe.delete(t), re.get(t)?.cancel(), re.delete(t));
}
const $e = 4, Ln = Math.ceil(Math.hypot($e, $e));
const Sn = (t, e) => {
  const n = t.level ? `h${t.level}` : "div";
  return delete t.level, y(n, { ...t }, e);
};
const ze = {
  arrow: "calcite-floating-ui-arrow",
  arrowStroke: "calcite-floating-ui-arrow__stroke"
}, Mn = {
  width: 12,
  height: 6,
  strokeWidth: 1
}, Tn = ({ floatingLayout: t, key: e, ref: n }) => {
  const { width: i, height: o, strokeWidth: s } = Mn, r = i / 2, l = t === "vertical", a = `M0,0 H${i} L${i - r},${o} Q${r},${o} ${r},${o} Z`;
  return y(
    "svg",
    {
      "aria-hidden": "true",
      class: ze.arrow,
      height: i,
      key: e,
      viewBox: `0 0 ${i} ${i + (l ? 0 : s)}`,
      width: i + (l ? s : 0),
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: n
    },
    s > 0 && y("path", { class: ze.arrowStroke, d: a, fill: "none", "stroke-width": s + 1 }),
    y("path", { d: a, stroke: "none" })
  );
};
const $ = {
  container: "container",
  imageContainer: "image-container",
  closeButtonContainer: "close-button-container",
  closeButton: "close-button",
  content: "content",
  hasHeader: "has-header",
  header: "header",
  headerContent: "header-content",
  heading: "heading"
}, Bn = "auto", _e = "aria-controls", We = "aria-expanded";
class Hn {
  constructor() {
    this.registeredElements = /* @__PURE__ */ new Map(), this.registeredElementCount = 0, this.queryPopover = (e) => {
      const { registeredElements: n } = this, i = e.find((o) => n.has(o));
      return n.get(i);
    }, this.togglePopovers = (e) => {
      const n = e.composedPath(), i = this.queryPopover(n);
      i && !i.triggerDisabled && (i.open = !i.open), Array.from(this.registeredElements.values()).filter((o) => o !== i && o.autoClose && o.open && !n.includes(o)).forEach((o) => o.open = !1);
    }, this.keyHandler = (e) => {
      e.defaultPrevented || (e.key === "Escape" ? this.closeAllPopovers() : qe(e.key) && this.togglePopovers(e));
    }, this.clickHandler = (e) => {
      Ye(e) && this.togglePopovers(e);
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  registerElement(e, n) {
    this.registeredElementCount++, this.registeredElements.set(e, n), this.registeredElementCount === 1 && this.addListeners();
  }
  unregisterElement(e) {
    this.registeredElements.delete(e) && this.registeredElementCount--, this.registeredElementCount === 0 && this.removeListeners();
  }
  closeAllPopovers() {
    Array.from(this.registeredElements.values()).forEach((e) => e.open = !1);
  }
  addListeners() {
    window.addEventListener("pointerdown", this.clickHandler, { capture: !0 }), window.addEventListener("keydown", this.keyHandler, { capture: !0 });
  }
  removeListeners() {
    window.removeEventListener("pointerdown", this.clickHandler, { capture: !0 }), window.removeEventListener("keydown", this.keyHandler, { capture: !0 });
  }
}
const In = ":host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, var(--calcite-z-index-popup));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1)}.arrow::before{outline:1px solid var(--calcite-color-border-3)}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-color-border-3)}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;color:var(--calcite-color-text-1)}.container.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}:host([hidden]){display:none}[hidden]{display:none}", Ne = new Hn(), Fn = /* @__PURE__ */ je(class extends Xe {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calcitePopoverBeforeClose = Z(this, "calcitePopoverBeforeClose", 6), this.calcitePopoverClose = Z(this, "calcitePopoverClose", 6), this.calcitePopoverBeforeOpen = Z(this, "calcitePopoverBeforeOpen", 6), this.calcitePopoverOpen = Z(this, "calcitePopoverOpen", 6), this.mutationObserver = Bt("mutation", () => this.updateFocusTrapElements()), this.guid = `calcite-popover-${Ke()}`, this.openTransitionProp = "opacity", this.hasLoaded = !1, this.setTransitionEl = (e) => {
      this.transitionEl = e;
    }, this.setFilteredPlacements = () => {
      const { el: e, flipPlacements: n } = this;
      this.filteredFlipPlacements = n ? Cn(n, e) : null;
    }, this.setUpReferenceElement = (e = !0) => {
      this.removeReferences(), this.effectiveReferenceElement = this.getReferenceElement(), Fe(this, this.effectiveReferenceElement, this.el);
      const { el: n, referenceElement: i, effectiveReferenceElement: o } = this;
      e && i && !o && console.warn(`${n.tagName}: reference-element id "${i}" was not found.`, {
        el: n
      }), this.addReferences();
    }, this.getId = () => this.el.id || this.guid, this.setExpandedAttr = () => {
      const { effectiveReferenceElement: e, open: n } = this;
      e && "setAttribute" in e && e.setAttribute(We, ue(n));
    }, this.addReferences = () => {
      const { effectiveReferenceElement: e } = this;
      if (!e)
        return;
      const n = this.getId();
      "setAttribute" in e && e.setAttribute(_e, n), Ne.registerElement(e, this.el), this.setExpandedAttr();
    }, this.removeReferences = () => {
      const { effectiveReferenceElement: e } = this;
      e && ("removeAttribute" in e && (e.removeAttribute(_e), e.removeAttribute(We)), Ne.unregisterElement(e));
    }, this.hide = () => {
      this.open = !1;
    }, this.storeArrowEl = (e) => {
      this.arrowEl = e, this.reposition(!0);
    }, this.autoClose = !1, this.closable = !1, this.flipDisabled = !1, this.focusTrapDisabled = !1, this.pointerDisabled = !1, this.flipPlacements = void 0, this.heading = void 0, this.headingLevel = void 0, this.label = void 0, this.messageOverrides = void 0, this.messages = void 0, this.offsetDistance = Ln, this.offsetSkidding = 0, this.open = !1, this.overlayPositioning = "absolute", this.placement = Bn, this.referenceElement = void 0, this.scale = "m", this.triggerDisabled = !1, this.effectiveLocale = "", this.floatingLayout = "vertical", this.effectiveReferenceElement = void 0, this.defaultMessages = void 0;
  }
  handleFocusTrapDisabled(e) {
    this.open && (e ? fe(this) : ye(this));
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements(), this.reposition(!0);
  }
  onMessagesChange() {
  }
  offsetDistanceOffsetHandler() {
    this.reposition(!0);
  }
  offsetSkiddingHandler() {
    this.reposition(!0);
  }
  openHandler() {
    Ee(this), this.reposition(!0), this.setExpandedAttr();
  }
  overlayPositioningHandler() {
    this.reposition(!0);
  }
  placementHandler() {
    this.reposition(!0);
  }
  referenceElementHandler() {
    this.setUpReferenceElement(), this.reposition(!0);
  }
  effectiveLocaleChange() {
    Ct(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.setFilteredPlacements(), Ot(this), Rt(this), this.setUpReferenceElement(this.hasLoaded), Mt(this), this.open && Ee(this), Fe(this, this.effectiveReferenceElement, this.el);
  }
  async componentWillLoad() {
    await kt(this), Ge(this);
  }
  componentDidLoad() {
    Ze(this), this.referenceElement && !this.effectiveReferenceElement && this.setUpReferenceElement(), this.reposition(), this.hasLoaded = !0;
  }
  disconnectedCallback() {
    this.removeReferences(), Dt(this), Lt(this), pt(this, this.effectiveReferenceElement, this.el), fe(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  async reposition(e = !1) {
    const { el: n, effectiveReferenceElement: i, placement: o, overlayPositioning: s, flipDisabled: r, filteredFlipPlacements: l, offsetDistance: a, offsetSkidding: c, arrowEl: u } = this;
    return Rn(this, {
      floatingEl: n,
      referenceEl: i,
      overlayPositioning: s,
      placement: o,
      flipDisabled: r,
      flipPlacements: l,
      offsetDistance: a,
      offsetSkidding: c,
      arrowEl: u,
      type: "popover"
    }, e);
  }
  /**
   * Sets focus on the component's first focusable element.
   */
  async setFocus() {
    await Qe(this), wt(this.el), Et(this.el);
  }
  /**
   * Updates the element(s) that are used within the focus-trap of the component.
   */
  async updateFocusTrapElements() {
    Tt(this);
  }
  getReferenceElement() {
    const { referenceElement: e, el: n } = this;
    return (typeof e == "string" ? Pt(n, { id: e }) : e) || null;
  }
  onBeforeOpen() {
    this.calcitePopoverBeforeOpen.emit();
  }
  onOpen() {
    this.calcitePopoverOpen.emit(), ye(this);
  }
  onBeforeClose() {
    this.calcitePopoverBeforeClose.emit();
  }
  onClose() {
    this.calcitePopoverClose.emit(), fe(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderCloseButton() {
    const { messages: e, closable: n } = this;
    return n ? y("div", { class: $.closeButtonContainer, key: $.closeButtonContainer }, y("calcite-action", {
      appearance: "transparent",
      class: $.closeButton,
      onClick: this.hide,
      scale: this.scale,
      text: e.close,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (i) => this.closeButtonEl = i
    }, y("calcite-icon", { icon: "x", scale: Ht(this.scale) }))) : null;
  }
  renderHeader() {
    const { heading: e, headingLevel: n } = this, i = e ? y(Sn, { class: $.heading, level: n }, e) : null;
    return i ? y("div", { class: $.header, key: $.header }, i, this.renderCloseButton()) : null;
  }
  render() {
    const { effectiveReferenceElement: e, heading: n, label: i, open: o, pointerDisabled: s, floatingLayout: r } = this, l = e && o, a = !l, c = s ? null : y(Tn, {
      floatingLayout: r,
      key: "floating-arrow",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.storeArrowEl
    });
    return y(bt, { "aria-hidden": ue(a), "aria-label": i, "aria-live": "polite", "calcite-hydrated-hidden": a, id: this.getId(), role: "dialog" }, y("div", {
      class: {
        [Ie.animation]: !0,
        [Ie.animationActive]: l
      },
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setTransitionEl
    }, c, y("div", { class: {
      [$.hasHeader]: !!n,
      [$.container]: !0
    } }, this.renderHeader(), y("div", { class: $.content }, y("slot", null)), n ? null : this.renderCloseButton())));
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      focusTrapDisabled: ["handleFocusTrapDisabled"],
      flipPlacements: ["flipPlacementsHandler"],
      messageOverrides: ["onMessagesChange"],
      offsetDistance: ["offsetDistanceOffsetHandler"],
      offsetSkidding: ["offsetSkiddingHandler"],
      open: ["openHandler"],
      overlayPositioning: ["overlayPositioningHandler"],
      placement: ["placementHandler"],
      referenceElement: ["referenceElementHandler"],
      effectiveLocale: ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return In;
  }
}, [1, "calcite-popover", {
  autoClose: [516, "auto-close"],
  closable: [516],
  flipDisabled: [516, "flip-disabled"],
  focusTrapDisabled: [516, "focus-trap-disabled"],
  pointerDisabled: [516, "pointer-disabled"],
  flipPlacements: [16],
  heading: [1],
  headingLevel: [514, "heading-level"],
  label: [1],
  messageOverrides: [1040],
  messages: [1040],
  offsetDistance: [514, "offset-distance"],
  offsetSkidding: [514, "offset-skidding"],
  open: [1540],
  overlayPositioning: [513, "overlay-positioning"],
  placement: [513],
  referenceElement: [1, "reference-element"],
  scale: [513],
  triggerDisabled: [516, "trigger-disabled"],
  effectiveLocale: [32],
  floatingLayout: [32],
  effectiveReferenceElement: [32],
  defaultMessages: [32],
  reposition: [64],
  setFocus: [64],
  updateFocusTrapElements: [64]
}, void 0, {
  focusTrapDisabled: ["handleFocusTrapDisabled"],
  flipPlacements: ["flipPlacementsHandler"],
  messageOverrides: ["onMessagesChange"],
  offsetDistance: ["offsetDistanceOffsetHandler"],
  offsetSkidding: ["offsetSkiddingHandler"],
  open: ["openHandler"],
  overlayPositioning: ["overlayPositioningHandler"],
  placement: ["placementHandler"],
  referenceElement: ["referenceElementHandler"],
  effectiveLocale: ["effectiveLocaleChange"]
}]);
function gt() {
  if (typeof customElements > "u")
    return;
  ["calcite-popover", "calcite-action", "calcite-icon", "calcite-loader"].forEach((e) => {
    switch (e) {
      case "calcite-popover":
        customElements.get(e) || customElements.define(e, Fn);
        break;
      case "calcite-action":
        customElements.get(e) || Je();
        break;
      case "calcite-icon":
        customElements.get(e) || et();
        break;
      case "calcite-loader":
        customElements.get(e) || tt();
        break;
    }
  });
}
gt();
const Ue = {
  menu: "menu",
  defaultTrigger: "default-trigger"
}, Ve = {
  tooltip: "tooltip",
  trigger: "trigger"
}, $n = {
  menu: "ellipsis"
}, zn = "data-active", _n = ":host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1);color:var(--calcite-color-text-2)}::slotted(calcite-action-group){border-block-end:1px solid var(--calcite-color-border-3)}::slotted(calcite-action-group:last-child){border-block-end:0}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{max-block-size:45vh;flex-direction:column;flex-wrap:nowrap;overflow-y:auto;overflow-x:hidden;outline:2px solid transparent;outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}", Wn = ["ArrowUp", "ArrowDown", "End", "Home"], Nn = /* @__PURE__ */ je(class extends Xe {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calciteActionMenuOpen = Z(this, "calciteActionMenuOpen", 6), this.actionElements = [], this.guid = `calcite-action-menu-${Ke()}`, this.menuId = `${this.guid}-menu`, this.menuButtonId = `${this.guid}-menu-button`, this.connectMenuButtonEl = () => {
      const { menuButtonId: e, menuId: n, open: i, label: o } = this, s = this.slottedMenuButtonEl || this.defaultMenuButtonEl;
      this.menuButtonEl !== s && (this.disconnectMenuButtonEl(), this.menuButtonEl = s, this.setTooltipReferenceElement(), s && (s.active = i, s.setAttribute("aria-controls", n), s.setAttribute("aria-expanded", ue(i)), s.setAttribute("aria-haspopup", "true"), s.id || (s.id = e), s.label || (s.label = o), s.text || (s.text = o), s.addEventListener("pointerdown", this.menuButtonClick), s.addEventListener("keydown", this.menuButtonKeyDown)));
    }, this.disconnectMenuButtonEl = () => {
      const { menuButtonEl: e } = this;
      e && (e.removeEventListener("pointerdown", this.menuButtonClick), e.removeEventListener("keydown", this.menuButtonKeyDown));
    }, this.setMenuButtonEl = (e) => {
      const n = e.target.assignedElements({
        flatten: !0
      }).filter((i) => i?.matches("calcite-action"));
      this.slottedMenuButtonEl = n[0], this.connectMenuButtonEl();
    }, this.setDefaultMenuButtonEl = (e) => {
      this.defaultMenuButtonEl = e, this.connectMenuButtonEl();
    }, this.handleCalciteActionClick = () => {
      this.open = !1, this.setFocus();
    }, this.menuButtonClick = (e) => {
      Ye(e) && this.toggleOpen();
    }, this.updateTooltip = (e) => {
      const n = e.target.assignedElements({
        flatten: !0
      }).filter((i) => i?.matches("calcite-tooltip"));
      this.tooltipEl = n[0], this.setTooltipReferenceElement();
    }, this.setTooltipReferenceElement = () => {
      const { tooltipEl: e, expanded: n, menuButtonEl: i, open: o } = this;
      e && (e.referenceElement = !n && !o ? i : null);
    }, this.updateAction = (e, n) => {
      const { guid: i, activeMenuItemIndex: o } = this, s = `${i}-action-${n}`;
      e.tabIndex = -1, e.setAttribute("role", "menuitem"), e.id || (e.id = s), e.toggleAttribute(zn, n === o);
    }, this.updateActions = (e) => {
      e?.forEach(this.updateAction);
    }, this.handleDefaultSlotChange = (e) => {
      const n = e.target.assignedElements({
        flatten: !0
      }).reduce((i, o) => o?.matches("calcite-action") ? (i.push(o), i) : o?.matches("calcite-action-group") ? i.concat(Array.from(o.querySelectorAll("calcite-action"))) : i, []);
      this.actionElements = n.filter((i) => !i.disabled && !i.hidden);
    }, this.menuButtonKeyDown = (e) => {
      const { key: n } = e, { actionElements: i, activeMenuItemIndex: o, open: s } = this;
      if (i.length) {
        if (qe(n)) {
          if (e.preventDefault(), !s) {
            this.toggleOpen();
            return;
          }
          const r = i[o];
          r ? r.click() : this.toggleOpen(!1);
        }
        if (n === "Tab") {
          this.open = !1;
          return;
        }
        if (n === "Escape") {
          this.toggleOpen(!1), e.preventDefault();
          return;
        }
        this.handleActionNavigation(e, n, i);
      }
    }, this.handleActionNavigation = (e, n, i) => {
      if (!this.isValidKey(n, Wn))
        return;
      if (e.preventDefault(), !this.open) {
        this.toggleOpen(), (n === "Home" || n === "ArrowDown") && (this.activeMenuItemIndex = 0), (n === "End" || n === "ArrowUp") && (this.activeMenuItemIndex = i.length - 1);
        return;
      }
      n === "Home" && (this.activeMenuItemIndex = 0), n === "End" && (this.activeMenuItemIndex = i.length - 1);
      const o = this.activeMenuItemIndex;
      n === "ArrowUp" && (this.activeMenuItemIndex = Pe(Math.max(o - 1, -1), i.length)), n === "ArrowDown" && (this.activeMenuItemIndex = Pe(o + 1, i.length));
    }, this.toggleOpenEnd = () => {
      this.setFocus(), this.el.removeEventListener("calcitePopoverOpen", this.toggleOpenEnd);
    }, this.toggleOpen = (e = !this.open) => {
      this.el.addEventListener("calcitePopoverOpen", this.toggleOpenEnd), this.open = e;
    }, this.handlePopoverOpen = () => {
      this.open = !0;
    }, this.handlePopoverClose = () => {
      this.open = !1;
    }, this.appearance = "solid", this.expanded = !1, this.flipPlacements = void 0, this.label = void 0, this.open = !1, this.overlayPositioning = "absolute", this.placement = "auto", this.scale = void 0, this.menuButtonEl = void 0, this.activeMenuItemIndex = -1;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.connectMenuButtonEl();
  }
  componentWillLoad() {
    Ge(this);
  }
  componentDidLoad() {
    Ze(this);
  }
  disconnectedCallback() {
    this.disconnectMenuButtonEl();
  }
  expandedHandler() {
    this.open = !1, this.setTooltipReferenceElement();
  }
  openHandler(e) {
    this.activeMenuItemIndex = this.open ? 0 : -1, this.menuButtonEl && (this.menuButtonEl.active = e), this.calciteActionMenuOpen.emit(), this.setTooltipReferenceElement();
  }
  activeMenuItemIndexHandler() {
    this.updateActions(this.actionElements);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    return await Qe(this), At(this.menuButtonEl);
  }
  renderMenuButton() {
    const { appearance: e, label: n, scale: i, expanded: o } = this;
    return y("slot", { name: Ve.trigger, onSlotchange: this.setMenuButtonEl }, y("calcite-action", {
      appearance: e,
      class: Ue.defaultTrigger,
      icon: $n.menu,
      scale: i,
      text: n,
      textEnabled: o,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setDefaultMenuButtonEl
    }));
  }
  renderMenuItems() {
    const { actionElements: e, activeMenuItemIndex: n, open: i, menuId: o, menuButtonEl: s, label: r, placement: l, overlayPositioning: a, flipPlacements: c } = this, d = e[n]?.id || null;
    return y("calcite-popover", { autoClose: !0, flipPlacements: c, focusTrapDisabled: !0, label: r, offsetDistance: 0, onCalcitePopoverClose: this.handlePopoverClose, onCalcitePopoverOpen: this.handlePopoverOpen, open: i, overlayPositioning: a, placement: l, pointerDisabled: !0, referenceElement: s }, y("div", { "aria-activedescendant": d, "aria-labelledby": s?.id, class: Ue.menu, id: o, onClick: this.handleCalciteActionClick, role: "menu", tabIndex: -1 }, y("slot", { onSlotchange: this.handleDefaultSlotChange })));
  }
  render() {
    return y(xt, null, this.renderMenuButton(), this.renderMenuItems(), y("slot", { name: Ve.tooltip, onSlotchange: this.updateTooltip }));
  }
  isValidKey(e, n) {
    return !!n.find((i) => i === e);
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      expanded: ["expandedHandler"],
      open: ["openHandler"],
      activeMenuItemIndex: ["activeMenuItemIndexHandler"]
    };
  }
  static get style() {
    return _n;
  }
}, [1, "calcite-action-menu", {
  appearance: [513],
  expanded: [516],
  flipPlacements: [16],
  label: [1],
  open: [1540],
  overlayPositioning: [513, "overlay-positioning"],
  placement: [513],
  scale: [513],
  menuButtonEl: [32],
  activeMenuItemIndex: [32],
  setFocus: [64]
}, void 0, {
  expanded: ["expandedHandler"],
  open: ["openHandler"],
  activeMenuItemIndex: ["activeMenuItemIndexHandler"]
}]);
function Un() {
  if (typeof customElements > "u")
    return;
  ["calcite-action-menu", "calcite-action", "calcite-icon", "calcite-loader", "calcite-popover"].forEach((e) => {
    switch (e) {
      case "calcite-action-menu":
        customElements.get(e) || customElements.define(e, Nn);
        break;
      case "calcite-action":
        customElements.get(e) || Je();
        break;
      case "calcite-icon":
        customElements.get(e) || et();
        break;
      case "calcite-loader":
        customElements.get(e) || tt();
        break;
      case "calcite-popover":
        customElements.get(e) || gt();
        break;
    }
  });
}
Un();
export {
  Sn as H,
  Ve as S,
  Un as a,
  gt as d
};
//# sourceMappingURL=action-menu-ykXBXpeb.js.map
