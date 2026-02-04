import { cF as me, cG as be, cD as v, cH as Nn, eH as ct } from "./main-BpIyUAdL.js";
import { s as ut, t as Rn } from "./dom-DkH2gtZS.js";
import { c as Ye, u as $e, d as We, I as Ue } from "./interactive-DvjzvdHh.js";
import { c as jn } from "./observers-BKbzQbLw.js";
import { u as Hn, b as Bn, M as zn } from "./utils3-DwgpwBcl.js";
import { s as qe, a as Ke, c as Ve } from "./loadable-mV3e0zNp.js";
import { u as Ze, s as Qe, c as Xn, a as Je, d as Gn, b as tn, n as Ce } from "./t9n-DZy8an7K.js";
import { S as De, i as ve, r as Yn, b as Ee, f as $n, a as Wn, c as en, d as nn } from "./debounce-DSwYeavs.js";
import { d as an } from "./icon-vgnKLT3A.js";
import { a as rn, b as on, d as sn } from "./input2-DrUNAMIG.js";
import { d as Un } from "./loader-D5UFN86B.js";
import { d as qn } from "./scrim-89QNCZt1.js";
function xe(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t && (i = i.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, i);
  }
  return n;
}
function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xe(Object(n), !0).forEach(function(i) {
      Kn(e, i, n[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xe(Object(n)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
    });
  }
  return e;
}
function Xt(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Xt = function(t) {
    return typeof t;
  } : Xt = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xt(e);
}
function Kn(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function V() {
  return V = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, V.apply(this, arguments);
}
function Vn(e, t) {
  if (e == null) return {};
  var n = {}, i = Object.keys(e), a, r;
  for (r = 0; r < i.length; r++)
    a = i[r], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Zn(e, t) {
  if (e == null) return {};
  var n = Vn(e, t), i, a;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (a = 0; a < r.length; a++)
      i = r[a], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]);
  }
  return n;
}
var Qn = "1.15.1";
function K(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var Z = K(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Mt = K(/Edge/i), Te = K(/firefox/i), At = K(/safari/i) && !K(/chrome/i) && !K(/android/i), ln = K(/iP(ad|od|hone)/i), cn = K(/chrome/i) && K(/android/i), dn = {
  capture: !1,
  passive: !1
};
function w(e, t, n) {
  e.addEventListener(t, n, !Z && dn);
}
function S(e, t, n) {
  e.removeEventListener(t, n, !Z && dn);
}
function Ut(e, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(t);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(t);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Jn(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function Y(e, t, n, i) {
  if (e) {
    n = n || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === n && Ut(e, t) : Ut(e, t)) || i && e === n)
        return e;
      if (e === n) break;
    } while (e = Jn(e));
  }
  return null;
}
var _e = /\s+/g;
function N(e, t, n) {
  if (e && t)
    if (e.classList)
      e.classList[n ? "add" : "remove"](t);
    else {
      var i = (" " + e.className + " ").replace(_e, " ").replace(" " + t + " ", " ");
      e.className = (i + (n ? " " + t : "")).replace(_e, " ");
    }
}
function f(e, t, n) {
  var i = e && e.style;
  if (i) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), t === void 0 ? n : n[t];
    !(t in i) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), i[t] = n + (typeof n == "string" ? "" : "px");
  }
}
function vt(e, t) {
  var n = "";
  if (typeof e == "string")
    n = e;
  else
    do {
      var i = f(e, "transform");
      i && i !== "none" && (n = i + " " + n);
    } while (!t && (e = e.parentNode));
  var a = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return a && new a(n);
}
function un(e, t, n) {
  if (e) {
    var i = e.getElementsByTagName(t), a = 0, r = i.length;
    if (n)
      for (; a < r; a++)
        n(i[a], a);
    return i;
  }
  return [];
}
function $() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function _(e, t, n, i, a) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var r, o, s, l, c, h, u;
    if (e !== window && e.parentNode && e !== $() ? (r = e.getBoundingClientRect(), o = r.top, s = r.left, l = r.bottom, c = r.right, h = r.height, u = r.width) : (o = 0, s = 0, l = window.innerHeight, c = window.innerWidth, h = window.innerHeight, u = window.innerWidth), (t || n) && e !== window && (a = a || e.parentNode, !Z))
      do
        if (a && a.getBoundingClientRect && (f(a, "transform") !== "none" || n && f(a, "position") !== "static")) {
          var m = a.getBoundingClientRect();
          o -= m.top + parseInt(f(a, "border-top-width")), s -= m.left + parseInt(f(a, "border-left-width")), l = o + r.height, c = s + r.width;
          break;
        }
      while (a = a.parentNode);
    if (i && e !== window) {
      var E = vt(a || e), y = E && E.a, b = E && E.d;
      E && (o /= b, s /= y, u /= y, h /= b, l = o + h, c = s + u);
    }
    return {
      top: o,
      left: s,
      bottom: l,
      right: c,
      width: u,
      height: h
    };
  }
}
function hn(e) {
  var t = _(e), n = parseInt(f(e, "padding-left")), i = parseInt(f(e, "padding-top")), a = parseInt(f(e, "padding-right")), r = parseInt(f(e, "padding-bottom"));
  return t.top += i + parseInt(f(e, "border-top-width")), t.left += n + parseInt(f(e, "border-left-width")), t.width = e.clientWidth - n - a, t.height = e.clientHeight - i - r, t.bottom = t.top + t.height, t.right = t.left + t.width, t;
}
function Ae(e, t, n) {
  for (var i = it(e, !0), a = _(e)[t]; i; ) {
    var r = _(i)[n], o = void 0;
    if (o = a >= r, !o) return i;
    if (i === $()) break;
    i = it(i, !1);
  }
  return !1;
}
function Et(e, t, n, i) {
  for (var a = 0, r = 0, o = e.children; r < o.length; ) {
    if (o[r].style.display !== "none" && o[r] !== p.ghost && (i || o[r] !== p.dragged) && Y(o[r], n.draggable, e, !1)) {
      if (a === t)
        return o[r];
      a++;
    }
    r++;
  }
  return null;
}
function ye(e, t) {
  for (var n = e.lastElementChild; n && (n === p.ghost || f(n, "display") === "none" || t && !Ut(n, t)); )
    n = n.previousElementSibling;
  return n || null;
}
function H(e, t) {
  var n = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== p.clone && (!t || Ut(e, t)) && n++;
  return n;
}
function Oe(e) {
  var t = 0, n = 0, i = $();
  if (e)
    do {
      var a = vt(e), r = a.a, o = a.d;
      t += e.scrollLeft * r, n += e.scrollTop * o;
    } while (e !== i && (e = e.parentNode));
  return [t, n];
}
function ti(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      for (var i in t)
        if (t.hasOwnProperty(i) && t[i] === e[n][i]) return Number(n);
    }
  return -1;
}
function it(e, t) {
  if (!e || !e.getBoundingClientRect) return $();
  var n = e, i = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var a = f(n);
      if (n.clientWidth < n.scrollWidth && (a.overflowX == "auto" || a.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (a.overflowY == "auto" || a.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body) return $();
        if (i || t) return n;
        i = !0;
      }
    }
  while (n = n.parentNode);
  return $();
}
function ei(e, t) {
  if (e && t)
    for (var n in t)
      t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
function te(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var Ot;
function fn(e, t) {
  return function() {
    if (!Ot) {
      var n = arguments, i = this;
      n.length === 1 ? e.call(i, n[0]) : e.apply(i, n), Ot = setTimeout(function() {
        Ot = void 0;
      }, t);
    }
  };
}
function ni() {
  clearTimeout(Ot), Ot = void 0;
}
function pn(e, t, n) {
  e.scrollLeft += t, e.scrollTop += n;
}
function gn(e) {
  var t = window.Polymer, n = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}
var j = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function ii() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var i = [].slice.call(this.el.children);
        i.forEach(function(a) {
          if (!(f(a, "display") === "none" || a === p.ghost)) {
            e.push({
              target: a,
              rect: _(a)
            });
            var r = W({}, e[e.length - 1].rect);
            if (a.thisAnimationDuration) {
              var o = vt(a, !0);
              o && (r.top -= o.f, r.left -= o.e);
            }
            a.fromRect = r;
          }
        });
      }
    },
    addAnimationState: function(i) {
      e.push(i);
    },
    removeAnimationState: function(i) {
      e.splice(ti(e, {
        target: i
      }), 1);
    },
    animateAll: function(i) {
      var a = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof i == "function" && i();
        return;
      }
      var r = !1, o = 0;
      e.forEach(function(s) {
        var l = 0, c = s.target, h = c.fromRect, u = _(c), m = c.prevFromRect, E = c.prevToRect, y = s.rect, b = vt(c, !0);
        b && (u.top -= b.f, u.left -= b.e), c.toRect = u, c.thisAnimationDuration && te(m, u) && !te(h, u) && // Make sure animatingRect is on line between toRect & fromRect
        (y.top - u.top) / (y.left - u.left) === (h.top - u.top) / (h.left - u.left) && (l = ri(y, m, E, a.options)), te(u, h) || (c.prevFromRect = h, c.prevToRect = u, l || (l = a.options.animation), a.animate(c, y, u, l)), l && (r = !0, o = Math.max(o, l), clearTimeout(c.animationResetTimer), c.animationResetTimer = setTimeout(function() {
          c.animationTime = 0, c.prevFromRect = null, c.fromRect = null, c.prevToRect = null, c.thisAnimationDuration = null;
        }, l), c.thisAnimationDuration = l);
      }), clearTimeout(t), r ? t = setTimeout(function() {
        typeof i == "function" && i();
      }, o) : typeof i == "function" && i(), e = [];
    },
    animate: function(i, a, r, o) {
      if (o) {
        f(i, "transition", ""), f(i, "transform", "");
        var s = vt(this.el), l = s && s.a, c = s && s.d, h = (a.left - r.left) / (l || 1), u = (a.top - r.top) / (c || 1);
        i.animatingX = !!h, i.animatingY = !!u, f(i, "transform", "translate3d(" + h + "px," + u + "px,0)"), this.forRepaintDummy = ai(i), f(i, "transition", "transform " + o + "ms" + (this.options.easing ? " " + this.options.easing : "")), f(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
          f(i, "transition", ""), f(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1;
        }, o);
      }
    }
  };
}
function ai(e) {
  return e.offsetWidth;
}
function ri(e, t, n, i) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) * i.animation;
}
var ht = [], ee = {
  initializeByDefault: !0
}, Nt = {
  mount: function(t) {
    for (var n in ee)
      ee.hasOwnProperty(n) && !(n in t) && (t[n] = ee[n]);
    ht.forEach(function(i) {
      if (i.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), ht.push(t);
  },
  pluginEvent: function(t, n, i) {
    var a = this;
    this.eventCanceled = !1, i.cancel = function() {
      a.eventCanceled = !0;
    };
    var r = t + "Global";
    ht.forEach(function(o) {
      n[o.pluginName] && (n[o.pluginName][r] && n[o.pluginName][r](W({
        sortable: n
      }, i)), n.options[o.pluginName] && n[o.pluginName][t] && n[o.pluginName][t](W({
        sortable: n
      }, i)));
    });
  },
  initializePlugins: function(t, n, i, a) {
    ht.forEach(function(s) {
      var l = s.pluginName;
      if (!(!t.options[l] && !s.initializeByDefault)) {
        var c = new s(t, n, t.options);
        c.sortable = t, c.options = t.options, t[l] = c, V(i, c.defaults);
      }
    });
    for (var r in t.options)
      if (t.options.hasOwnProperty(r)) {
        var o = this.modifyOption(t, r, t.options[r]);
        typeof o < "u" && (t.options[r] = o);
      }
  },
  getEventProperties: function(t, n) {
    var i = {};
    return ht.forEach(function(a) {
      typeof a.eventProperties == "function" && V(i, a.eventProperties.call(n[a.pluginName], t));
    }), i;
  },
  modifyOption: function(t, n, i) {
    var a;
    return ht.forEach(function(r) {
      t[r.pluginName] && r.optionListeners && typeof r.optionListeners[n] == "function" && (a = r.optionListeners[n].call(t[r.pluginName], i));
    }), a;
  }
};
function oi(e) {
  var t = e.sortable, n = e.rootEl, i = e.name, a = e.targetEl, r = e.cloneEl, o = e.toEl, s = e.fromEl, l = e.oldIndex, c = e.newIndex, h = e.oldDraggableIndex, u = e.newDraggableIndex, m = e.originalEvent, E = e.putSortable, y = e.extraEventProperties;
  if (t = t || n && n[j], !!t) {
    var b, B = t.options, U = "on" + i.charAt(0).toUpperCase() + i.substr(1);
    window.CustomEvent && !Z && !Mt ? b = new CustomEvent(i, {
      bubbles: !0,
      cancelable: !0
    }) : (b = document.createEvent("Event"), b.initEvent(i, !0, !0)), b.to = o || n, b.from = s || n, b.item = a || n, b.clone = r, b.oldIndex = l, b.newIndex = c, b.oldDraggableIndex = h, b.newDraggableIndex = u, b.originalEvent = m, b.pullMode = E ? E.lastPutMode : void 0;
    var F = W(W({}, y), Nt.getEventProperties(i, t));
    for (var z in F)
      b[z] = F[z];
    n && n.dispatchEvent(b), B[U] && B[U].call(t, b);
  }
}
var si = ["evt"], P = function(t, n) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = i.evt, r = Zn(i, si);
  Nt.pluginEvent.bind(p)(t, n, W({
    dragEl: d,
    parentEl: x,
    ghostEl: g,
    rootEl: C,
    nextEl: dt,
    lastDownEl: Gt,
    cloneEl: D,
    cloneHidden: nt,
    dragStarted: xt,
    putSortable: A,
    activeSortable: p.active,
    originalEvent: a,
    oldIndex: mt,
    oldDraggableIndex: Ft,
    newIndex: R,
    newDraggableIndex: et,
    hideGhostForTarget: En,
    unhideGhostForTarget: yn,
    cloneNowHidden: function() {
      nt = !0;
    },
    cloneNowShown: function() {
      nt = !1;
    },
    dispatchSortableEvent: function(s) {
      L({
        sortable: n,
        name: s,
        originalEvent: a
      });
    }
  }, r));
};
function L(e) {
  oi(W({
    putSortable: A,
    cloneEl: D,
    targetEl: d,
    rootEl: C,
    oldIndex: mt,
    oldDraggableIndex: Ft,
    newIndex: R,
    newDraggableIndex: et
  }, e));
}
var d, x, g, C, dt, Gt, D, nt, mt, R, Ft, et, jt, A, gt = !1, qt = !1, Kt = [], st, X, ne, ie, Fe, Le, xt, ft, Lt, Pt = !1, Ht = !1, Yt, O, ae = [], ue = !1, Vt = [], Qt = typeof document < "u", Bt = ln, Pe = Mt || Z ? "cssFloat" : "float", li = Qt && !cn && !ln && "draggable" in document.createElement("div"), mn = function() {
  if (Qt) {
    if (Z)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), bn = function(t, n) {
  var i = f(t), a = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth), r = Et(t, 0, n), o = Et(t, 1, n), s = r && f(r), l = o && f(o), c = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + _(r).width, h = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + _(o).width;
  if (i.display === "flex")
    return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (i.display === "grid")
    return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && s.float && s.float !== "none") {
    var u = s.float === "left" ? "left" : "right";
    return o && (l.clear === "both" || l.clear === u) ? "vertical" : "horizontal";
  }
  return r && (s.display === "block" || s.display === "flex" || s.display === "table" || s.display === "grid" || c >= a && i[Pe] === "none" || o && i[Pe] === "none" && c + h > a) ? "vertical" : "horizontal";
}, ci = function(t, n, i) {
  var a = i ? t.left : t.top, r = i ? t.right : t.bottom, o = i ? t.width : t.height, s = i ? n.left : n.top, l = i ? n.right : n.bottom, c = i ? n.width : n.height;
  return a === s || r === l || a + o / 2 === s + c / 2;
}, di = function(t, n) {
  var i;
  return Kt.some(function(a) {
    var r = a[j].options.emptyInsertThreshold;
    if (!(!r || ye(a))) {
      var o = _(a), s = t >= o.left - r && t <= o.right + r, l = n >= o.top - r && n <= o.bottom + r;
      if (s && l)
        return i = a;
    }
  }), i;
}, vn = function(t) {
  function n(r, o) {
    return function(s, l, c, h) {
      var u = s.options.group.name && l.options.group.name && s.options.group.name === l.options.group.name;
      if (r == null && (o || u))
        return !0;
      if (r == null || r === !1)
        return !1;
      if (o && r === "clone")
        return r;
      if (typeof r == "function")
        return n(r(s, l, c, h), o)(s, l, c, h);
      var m = (o ? s : l).options.group.name;
      return r === !0 || typeof r == "string" && r === m || r.join && r.indexOf(m) > -1;
    };
  }
  var i = {}, a = t.group;
  (!a || Xt(a) != "object") && (a = {
    name: a
  }), i.name = a.name, i.checkPull = n(a.pull, !0), i.checkPut = n(a.put), i.revertClone = a.revertClone, t.group = i;
}, En = function() {
  !mn && g && f(g, "display", "none");
}, yn = function() {
  !mn && g && f(g, "display", "");
};
Qt && !cn && document.addEventListener("click", function(e) {
  if (qt)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), qt = !1, !1;
}, !0);
var lt = function(t) {
  if (d) {
    t = t.touches ? t.touches[0] : t;
    var n = di(t.clientX, t.clientY);
    if (n) {
      var i = {};
      for (var a in t)
        t.hasOwnProperty(a) && (i[a] = t[a]);
      i.target = i.rootEl = n, i.preventDefault = void 0, i.stopPropagation = void 0, n[j]._onDragOver(i);
    }
  }
}, ui = function(t) {
  d && d.parentNode[j]._isOutsideThisEl(t.target);
};
function p(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = V({}, t), e[j] = this;
  var n = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return bn(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(o, s) {
      o.setData("Text", s.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: p.supportPointer !== !1 && "PointerEvent" in window && !At,
    emptyInsertThreshold: 5
  };
  Nt.initializePlugins(this, e, n);
  for (var i in n)
    !(i in t) && (t[i] = n[i]);
  vn(t);
  for (var a in this)
    a.charAt(0) === "_" && typeof this[a] == "function" && (this[a] = this[a].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : li, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? w(e, "pointerdown", this._onTapStart) : (w(e, "mousedown", this._onTapStart), w(e, "touchstart", this._onTapStart)), this.nativeDraggable && (w(e, "dragover", this), w(e, "dragenter", this)), Kt.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), V(this, ii());
}
p.prototype = /** @lends Sortable.prototype */
{
  constructor: p,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (ft = null);
  },
  _getDirection: function(t, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, n, d) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var n = this, i = this.el, a = this.options, r = a.preventOnFilter, o = t.type, s = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, l = (s || t).target, c = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || l, h = a.filter;
      if (Ei(i), !d && !(/mousedown|pointerdown/.test(o) && t.button !== 0 || a.disabled) && !c.isContentEditable && !(!this.nativeDraggable && At && l && l.tagName.toUpperCase() === "SELECT") && (l = Y(l, a.draggable, i, !1), !(l && l.animated) && Gt !== l)) {
        if (mt = H(l), Ft = H(l, a.draggable), typeof h == "function") {
          if (h.call(this, t, l, this)) {
            L({
              sortable: n,
              rootEl: c,
              name: "filter",
              targetEl: l,
              toEl: i,
              fromEl: i
            }), P("filter", n, {
              evt: t
            }), r && t.cancelable && t.preventDefault();
            return;
          }
        } else if (h && (h = h.split(",").some(function(u) {
          if (u = Y(c, u.trim(), i, !1), u)
            return L({
              sortable: n,
              rootEl: u,
              name: "filter",
              targetEl: l,
              fromEl: i,
              toEl: i
            }), P("filter", n, {
              evt: t
            }), !0;
        }), h)) {
          r && t.cancelable && t.preventDefault();
          return;
        }
        a.handle && !Y(c, a.handle, i, !1) || this._prepareDragStart(t, s, l);
      }
    }
  },
  _prepareDragStart: function(t, n, i) {
    var a = this, r = a.el, o = a.options, s = r.ownerDocument, l;
    if (i && !d && i.parentNode === r) {
      var c = _(i);
      if (C = r, d = i, x = d.parentNode, dt = d.nextSibling, Gt = i, jt = o.group, p.dragged = d, st = {
        target: d,
        clientX: (n || t).clientX,
        clientY: (n || t).clientY
      }, Fe = st.clientX - c.left, Le = st.clientY - c.top, this._lastX = (n || t).clientX, this._lastY = (n || t).clientY, d.style["will-change"] = "all", l = function() {
        if (P("delayEnded", a, {
          evt: t
        }), p.eventCanceled) {
          a._onDrop();
          return;
        }
        a._disableDelayedDragEvents(), !Te && a.nativeDraggable && (d.draggable = !0), a._triggerDragStart(t, n), L({
          sortable: a,
          name: "choose",
          originalEvent: t
        }), N(d, o.chosenClass, !0);
      }, o.ignore.split(",").forEach(function(h) {
        un(d, h.trim(), re);
      }), w(s, "dragover", lt), w(s, "mousemove", lt), w(s, "touchmove", lt), w(s, "mouseup", a._onDrop), w(s, "touchend", a._onDrop), w(s, "touchcancel", a._onDrop), Te && this.nativeDraggable && (this.options.touchStartThreshold = 4, d.draggable = !0), P("delayStart", this, {
        evt: t
      }), o.delay && (!o.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Mt || Z))) {
        if (p.eventCanceled) {
          this._onDrop();
          return;
        }
        w(s, "mouseup", a._disableDelayedDrag), w(s, "touchend", a._disableDelayedDrag), w(s, "touchcancel", a._disableDelayedDrag), w(s, "mousemove", a._delayedDragTouchMoveHandler), w(s, "touchmove", a._delayedDragTouchMoveHandler), o.supportPointer && w(s, "pointermove", a._delayedDragTouchMoveHandler), a._dragStartTimer = setTimeout(l, o.delay);
      } else
        l();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var n = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    d && re(d), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    S(t, "mouseup", this._disableDelayedDrag), S(t, "touchend", this._disableDelayedDrag), S(t, "touchcancel", this._disableDelayedDrag), S(t, "mousemove", this._delayedDragTouchMoveHandler), S(t, "touchmove", this._delayedDragTouchMoveHandler), S(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, n) {
    n = n || t.pointerType == "touch" && t, !this.nativeDraggable || n ? this.options.supportPointer ? w(document, "pointermove", this._onTouchMove) : n ? w(document, "touchmove", this._onTouchMove) : w(document, "mousemove", this._onTouchMove) : (w(d, "dragend", this), w(C, "dragstart", this._onDragStart));
    try {
      document.selection ? $t(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, n) {
    if (gt = !1, C && d) {
      P("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && w(document, "dragover", ui);
      var i = this.options;
      !t && N(d, i.dragClass, !1), N(d, i.ghostClass, !0), p.active = this, t && this._appendGhost(), L({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (X) {
      this._lastX = X.clientX, this._lastY = X.clientY, En();
      for (var t = document.elementFromPoint(X.clientX, X.clientY), n = t; t && t.shadowRoot; ) {
        t = t.shadowRoot.elementFromPoint(X.clientX, X.clientY);
        const a = t.getRootNode().host;
        if (a && (t = a), t === n) break;
        n = t;
      }
      if (d.parentNode[j]._isOutsideThisEl(t), n)
        do {
          if (n[j]) {
            var i = void 0;
            if (i = n[j]._onDragOver({
              clientX: X.clientX,
              clientY: X.clientY,
              target: t,
              rootEl: n
            }), i && !this.options.dragoverBubble)
              break;
          }
          t = n;
        } while (n = n.parentNode);
      yn();
    }
  },
  _onTouchMove: function(t) {
    if (st) {
      var n = this.options, i = n.fallbackTolerance, a = n.fallbackOffset, r = t.touches ? t.touches[0] : t, o = g && vt(g, !0), s = g && o && o.a, l = g && o && o.d, c = Bt && O && Oe(O), h = (r.clientX - st.clientX + a.x) / (s || 1) + (c ? c[0] - ae[0] : 0) / (s || 1), u = (r.clientY - st.clientY + a.y) / (l || 1) + (c ? c[1] - ae[1] : 0) / (l || 1);
      if (!p.active && !gt) {
        if (i && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < i)
          return;
        this._onDragStart(t, !0);
      }
      if (g) {
        o ? (o.e += h - (ne || 0), o.f += u - (ie || 0)) : o = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: h,
          f: u
        };
        var m = "matrix(".concat(o.a, ",").concat(o.b, ",").concat(o.c, ",").concat(o.d, ",").concat(o.e, ",").concat(o.f, ")");
        f(g, "webkitTransform", m), f(g, "mozTransform", m), f(g, "msTransform", m), f(g, "transform", m), ne = h, ie = u, X = r;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!g) {
      var t = this.options.fallbackOnBody ? document.body : C, n = _(d, !0, Bt, !0, t), i = this.options;
      if (Bt) {
        for (O = t; f(O, "position") === "static" && f(O, "transform") === "none" && O !== document; )
          O = O.parentNode;
        O !== document.body && O !== document.documentElement ? (O === document && (O = $()), n.top += O.scrollTop, n.left += O.scrollLeft) : O = $(), ae = Oe(O);
      }
      g = d.cloneNode(!0), N(g, i.ghostClass, !1), N(g, i.fallbackClass, !0), N(g, i.dragClass, !0), f(g, "transition", ""), f(g, "transform", ""), f(g, "box-sizing", "border-box"), f(g, "margin", 0), f(g, "top", n.top), f(g, "left", n.left), f(g, "width", n.width), f(g, "height", n.height), f(g, "opacity", "0.8"), f(g, "position", Bt ? "absolute" : "fixed"), f(g, "zIndex", "100000"), f(g, "pointerEvents", "none"), p.ghost = g, t.appendChild(g), f(g, "transform-origin", Fe / parseInt(g.style.width) * 100 + "% " + Le / parseInt(g.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, n) {
    var i = this, a = t.dataTransfer, r = i.options;
    if (P("dragStart", this, {
      evt: t
    }), p.eventCanceled) {
      this._onDrop();
      return;
    }
    P("setupClone", this), p.eventCanceled || (D = gn(d), D.removeAttribute("id"), D.draggable = !1, D.style["will-change"] = "", this._hideClone(), N(D, this.options.chosenClass, !1), p.clone = D), i.cloneId = $t(function() {
      P("clone", i), !p.eventCanceled && (i.options.removeCloneOnHide || C.insertBefore(D, d), i._hideClone(), L({
        sortable: i,
        name: "clone"
      }));
    }), !n && N(d, r.dragClass, !0), n ? (qt = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (S(document, "mouseup", i._onDrop), S(document, "touchend", i._onDrop), S(document, "touchcancel", i._onDrop), a && (a.effectAllowed = "move", r.setData && r.setData.call(i, a, d)), w(document, "drop", i), f(d, "transform", "translateZ(0)")), gt = !0, i._dragStartId = $t(i._dragStarted.bind(i, n, t)), w(document, "selectstart", i), xt = !0, At && f(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var n = this.el, i = t.target, a, r, o, s = this.options, l = s.group, c = p.active, h = jt === l, u = s.sort, m = A || c, E, y = this, b = !1;
    if (ue) return;
    function B(Ct, kn) {
      P(Ct, y, W({
        evt: t,
        isOwner: h,
        axis: E ? "vertical" : "horizontal",
        revert: o,
        dragRect: a,
        targetRect: r,
        canSort: u,
        fromSortable: m,
        target: i,
        completed: F,
        onMove: function(Ie, Mn) {
          return zt(C, n, d, a, Ie, _(Ie), t, Mn);
        },
        changed: z
      }, kn));
    }
    function U() {
      B("dragOverAnimationCapture"), y.captureAnimationState(), y !== m && m.captureAnimationState();
    }
    function F(Ct) {
      return B("dragOverCompleted", {
        insertion: Ct
      }), Ct && (h ? c._hideClone() : c._showClone(y), y !== m && (N(d, A ? A.options.ghostClass : c.options.ghostClass, !1), N(d, s.ghostClass, !0)), A !== y && y !== p.active ? A = y : y === p.active && A && (A = null), m === y && (y._ignoreWhileAnimating = i), y.animateAll(function() {
        B("dragOverAnimationComplete"), y._ignoreWhileAnimating = null;
      }), y !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (i === d && !d.animated || i === n && !i.animated) && (ft = null), !s.dragoverBubble && !t.rootEl && i !== document && (d.parentNode[j]._isOutsideThisEl(t.target), !Ct && lt(t)), !s.dragoverBubble && t.stopPropagation && t.stopPropagation(), b = !0;
    }
    function z() {
      R = H(d), et = H(d, s.draggable), L({
        sortable: y,
        name: "change",
        toEl: n,
        newIndex: R,
        newDraggableIndex: et,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), i = Y(i, s.draggable, n, !0), B("dragOver"), p.eventCanceled) return b;
    if (d.contains(t.target) || i.animated && i.animatingX && i.animatingY || y._ignoreWhileAnimating === i)
      return F(!1);
    if (qt = !1, c && !s.disabled && (h ? u || (o = x !== C) : A === this || (this.lastPutMode = jt.checkPull(this, c, d, t)) && l.checkPut(this, c, d, t))) {
      if (E = this._getDirection(t, i) === "vertical", a = _(d), B("dragOverValid"), p.eventCanceled) return b;
      if (o)
        return x = C, U(), this._hideClone(), B("revert"), p.eventCanceled || (dt ? C.insertBefore(d, dt) : C.appendChild(d)), F(!0);
      var k = ye(n, s.draggable);
      if (!k || gi(t, E, this) && !k.animated) {
        if (k === d)
          return F(!1);
        if (k && n === t.target && (i = k), i && (r = _(i)), zt(C, n, d, a, i, r, t, !!i) !== !1)
          return U(), k && k.nextSibling ? n.insertBefore(d, k.nextSibling) : n.appendChild(d), x = n, z(), F(!0);
      } else if (k && pi(t, E, this)) {
        var at = Et(n, 0, s, !0);
        if (at === d)
          return F(!1);
        if (i = at, r = _(i), zt(C, n, d, a, i, r, t, !1) !== !1)
          return U(), n.insertBefore(d, at), x = n, z(), F(!0);
      } else if (i.parentNode === n) {
        r = _(i);
        var G = 0, rt, yt = d.parentNode !== n, M = !ci(d.animated && d.toRect || a, i.animated && i.toRect || r, E), St = E ? "top" : "left", Q = Ae(i, "top", "top") || Ae(d, "top", "top"), wt = Q ? Q.scrollTop : void 0;
        ft !== i && (rt = r[St], Pt = !1, Ht = !M && s.invertSwap || yt), G = mi(t, i, r, E, M ? 1 : s.swapThreshold, s.invertedSwapThreshold == null ? s.swapThreshold : s.invertedSwapThreshold, Ht, ft === i);
        var q;
        if (G !== 0) {
          var ot = H(d);
          do
            ot -= G, q = x.children[ot];
          while (q && (f(q, "display") === "none" || q === g));
        }
        if (G === 0 || q === i)
          return F(!1);
        ft = i, Lt = G;
        var It = i.nextElementSibling, J = !1;
        J = G === 1;
        var Rt = zt(C, n, d, a, i, r, t, J);
        if (Rt !== !1)
          return (Rt === 1 || Rt === -1) && (J = Rt === 1), ue = !0, setTimeout(fi, 30), U(), J && !It ? n.appendChild(d) : i.parentNode.insertBefore(d, J ? It : i), Q && pn(Q, 0, wt - Q.scrollTop), x = d.parentNode, rt !== void 0 && !Ht && (Yt = Math.abs(rt - _(i)[St])), z(), F(!0);
      }
      if (n.contains(d))
        return F(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    S(document, "mousemove", this._onTouchMove), S(document, "touchmove", this._onTouchMove), S(document, "pointermove", this._onTouchMove), S(document, "dragover", lt), S(document, "mousemove", lt), S(document, "touchmove", lt);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    S(t, "mouseup", this._onDrop), S(t, "touchend", this._onDrop), S(t, "pointerup", this._onDrop), S(t, "touchcancel", this._onDrop), S(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var n = this.el, i = this.options;
    if (R = H(d), et = H(d, i.draggable), P("drop", this, {
      evt: t
    }), x = d && d.parentNode, R = H(d), et = H(d, i.draggable), p.eventCanceled) {
      this._nulling();
      return;
    }
    gt = !1, Ht = !1, Pt = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), he(this.cloneId), he(this._dragStartId), this.nativeDraggable && (S(document, "drop", this), S(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), At && f(document.body, "user-select", ""), f(d, "transform", ""), t && (xt && (t.cancelable && t.preventDefault(), !i.dropBubble && t.stopPropagation()), g && g.parentNode && g.parentNode.removeChild(g), (C === x || A && A.lastPutMode !== "clone") && D && D.parentNode && D.parentNode.removeChild(D), d && (this.nativeDraggable && S(d, "dragend", this), re(d), d.style["will-change"] = "", xt && !gt && N(d, A ? A.options.ghostClass : this.options.ghostClass, !1), N(d, this.options.chosenClass, !1), L({
      sortable: this,
      name: "unchoose",
      toEl: x,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), C !== x ? (R >= 0 && (L({
      rootEl: x,
      name: "add",
      toEl: x,
      fromEl: C,
      originalEvent: t
    }), L({
      sortable: this,
      name: "remove",
      toEl: x,
      originalEvent: t
    }), L({
      rootEl: x,
      name: "sort",
      toEl: x,
      fromEl: C,
      originalEvent: t
    }), L({
      sortable: this,
      name: "sort",
      toEl: x,
      originalEvent: t
    })), A && A.save()) : R !== mt && R >= 0 && (L({
      sortable: this,
      name: "update",
      toEl: x,
      originalEvent: t
    }), L({
      sortable: this,
      name: "sort",
      toEl: x,
      originalEvent: t
    })), p.active && ((R == null || R === -1) && (R = mt, et = Ft), L({
      sortable: this,
      name: "end",
      toEl: x,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    P("nulling", this), C = d = x = g = dt = D = Gt = nt = st = X = xt = R = et = mt = Ft = ft = Lt = A = jt = p.dragged = p.ghost = p.clone = p.active = null, Vt.forEach(function(t) {
      t.checked = !0;
    }), Vt.length = ne = ie = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        d && (this._onDragOver(t), hi(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var t = [], n, i = this.el.children, a = 0, r = i.length, o = this.options; a < r; a++)
      n = i[a], Y(n, o.draggable, this.el, !1) && t.push(n.getAttribute(o.dataIdAttr) || vi(n));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, n) {
    var i = {}, a = this.el;
    this.toArray().forEach(function(r, o) {
      var s = a.children[o];
      Y(s, this.options.draggable, a, !1) && (i[r] = s);
    }, this), n && this.captureAnimationState(), t.forEach(function(r) {
      i[r] && (a.removeChild(i[r]), a.appendChild(i[r]));
    }), n && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(t, n) {
    return Y(t, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, n) {
    var i = this.options;
    if (n === void 0)
      return i[t];
    var a = Nt.modifyOption(this, t, n);
    typeof a < "u" ? i[t] = a : i[t] = n, t === "group" && vn(i);
  },
  /**
   * Destroy
   */
  destroy: function() {
    P("destroy", this);
    var t = this.el;
    t[j] = null, S(t, "mousedown", this._onTapStart), S(t, "touchstart", this._onTapStart), S(t, "pointerdown", this._onTapStart), this.nativeDraggable && (S(t, "dragover", this), S(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Kt.splice(Kt.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!nt) {
      if (P("hideClone", this), p.eventCanceled) return;
      f(D, "display", "none"), this.options.removeCloneOnHide && D.parentNode && D.parentNode.removeChild(D), nt = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (nt) {
      if (P("showClone", this), p.eventCanceled) return;
      d.parentNode == C && !this.options.group.revertClone ? C.insertBefore(D, d) : dt ? C.insertBefore(D, dt) : C.appendChild(D), this.options.group.revertClone && this.animate(d, D), f(D, "display", ""), nt = !1;
    }
  }
};
function hi(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function zt(e, t, n, i, a, r, o, s) {
  var l, c = e[j], h = c.options.onMove, u;
  return window.CustomEvent && !Z && !Mt ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = t, l.from = e, l.dragged = n, l.draggedRect = i, l.related = a || t, l.relatedRect = r || _(t), l.willInsertAfter = s, l.originalEvent = o, e.dispatchEvent(l), h && (u = h.call(c, l, o)), u;
}
function re(e) {
  e.draggable = !1;
}
function fi() {
  ue = !1;
}
function pi(e, t, n) {
  var i = _(Et(n.el, 0, n.options, !0)), a = hn(n.el), r = 10;
  return t ? e.clientX < a.left - r || e.clientY < i.top && e.clientX < i.right : e.clientY < a.top - r || e.clientY < i.bottom && e.clientX < i.left;
}
function gi(e, t, n) {
  var i = _(ye(n.el, n.options.draggable)), a = hn(n.el), r = 10;
  return t ? e.clientX > a.right + r || e.clientY > i.bottom && e.clientX > i.left : e.clientY > a.bottom + r || e.clientX > i.right && e.clientY > i.top;
}
function mi(e, t, n, i, a, r, o, s) {
  var l = i ? e.clientY : e.clientX, c = i ? n.height : n.width, h = i ? n.top : n.left, u = i ? n.bottom : n.right, m = !1;
  if (!o) {
    if (s && Yt < c * a) {
      if (!Pt && (Lt === 1 ? l > h + c * r / 2 : l < u - c * r / 2) && (Pt = !0), Pt)
        m = !0;
      else if (Lt === 1 ? l < h + Yt : l > u - Yt)
        return -Lt;
    } else if (l > h + c * (1 - a) / 2 && l < u - c * (1 - a) / 2)
      return bi(t);
  }
  return m = m || o, m && (l < h + c * r / 2 || l > u - c * r / 2) ? l > h + c / 2 ? 1 : -1 : 0;
}
function bi(e) {
  return H(d) < H(e) ? 1 : -1;
}
function vi(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, i = 0; n--; )
    i += t.charCodeAt(n);
  return i.toString(36);
}
function Ei(e) {
  Vt.length = 0;
  for (var t = e.getElementsByTagName("input"), n = t.length; n--; ) {
    var i = t[n];
    i.checked && Vt.push(i);
  }
}
function $t(e) {
  return setTimeout(e, 0);
}
function he(e) {
  return clearTimeout(e);
}
Qt && w(document, "touchmove", function(e) {
  (p.active || gt) && e.cancelable && e.preventDefault();
});
p.utils = {
  on: w,
  off: S,
  css: f,
  find: un,
  is: function(t, n) {
    return !!Y(t, n, t, !1);
  },
  extend: ei,
  throttle: fn,
  closest: Y,
  toggleClass: N,
  clone: gn,
  index: H,
  nextTick: $t,
  cancelNextTick: he,
  detectDirection: bn,
  getChild: Et
};
p.get = function(e) {
  return e[j];
};
p.mount = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(i) {
    if (!i.prototype || !i.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));
    i.utils && (p.utils = W(W({}, p.utils), i.utils)), Nt.mount(i);
  });
};
p.create = function(e, t) {
  return new p(e, t);
};
p.version = Qn;
var T = [], Tt, fe, pe = !1, oe, se, Zt, _t;
function yi() {
  function e() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var t in this)
      t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  }
  return e.prototype = {
    dragStarted: function(n) {
      var i = n.originalEvent;
      this.sortable.nativeDraggable ? w(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? w(document, "pointermove", this._handleFallbackAutoScroll) : i.touches ? w(document, "touchmove", this._handleFallbackAutoScroll) : w(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var i = n.originalEvent;
      !this.options.dragOverBubble && !i.rootEl && this._handleAutoScroll(i);
    },
    drop: function() {
      this.sortable.nativeDraggable ? S(document, "dragover", this._handleAutoScroll) : (S(document, "pointermove", this._handleFallbackAutoScroll), S(document, "touchmove", this._handleFallbackAutoScroll), S(document, "mousemove", this._handleFallbackAutoScroll)), ke(), Wt(), ni();
    },
    nulling: function() {
      Zt = fe = Tt = pe = _t = oe = se = null, T.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, i) {
      var a = this, r = (n.touches ? n.touches[0] : n).clientX, o = (n.touches ? n.touches[0] : n).clientY, s = document.elementFromPoint(r, o);
      if (Zt = n, i || this.options.forceAutoScrollFallback || Mt || Z || At) {
        le(n, this.options, s, i);
        var l = it(s, !0);
        pe && (!_t || r !== oe || o !== se) && (_t && ke(), _t = setInterval(function() {
          var c = it(document.elementFromPoint(r, o), !0);
          c !== l && (l = c, Wt()), le(n, a.options, c, i);
        }, 10), oe = r, se = o);
      } else {
        if (!this.options.bubbleScroll || it(s, !0) === $()) {
          Wt();
          return;
        }
        le(n, this.options, it(s, !1), !1);
      }
    }
  }, V(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Wt() {
  T.forEach(function(e) {
    clearInterval(e.pid);
  }), T = [];
}
function ke() {
  clearInterval(_t);
}
var le = fn(function(e, t, n, i) {
  if (t.scroll) {
    var a = (e.touches ? e.touches[0] : e).clientX, r = (e.touches ? e.touches[0] : e).clientY, o = t.scrollSensitivity, s = t.scrollSpeed, l = $(), c = !1, h;
    fe !== n && (fe = n, Wt(), Tt = t.scroll, h = t.scrollFn, Tt === !0 && (Tt = it(n, !0)));
    var u = 0, m = Tt;
    do {
      var E = m, y = _(E), b = y.top, B = y.bottom, U = y.left, F = y.right, z = y.width, k = y.height, at = void 0, G = void 0, rt = E.scrollWidth, yt = E.scrollHeight, M = f(E), St = E.scrollLeft, Q = E.scrollTop;
      E === l ? (at = z < rt && (M.overflowX === "auto" || M.overflowX === "scroll" || M.overflowX === "visible"), G = k < yt && (M.overflowY === "auto" || M.overflowY === "scroll" || M.overflowY === "visible")) : (at = z < rt && (M.overflowX === "auto" || M.overflowX === "scroll"), G = k < yt && (M.overflowY === "auto" || M.overflowY === "scroll"));
      var wt = at && (Math.abs(F - a) <= o && St + z < rt) - (Math.abs(U - a) <= o && !!St), q = G && (Math.abs(B - r) <= o && Q + k < yt) - (Math.abs(b - r) <= o && !!Q);
      if (!T[u])
        for (var ot = 0; ot <= u; ot++)
          T[ot] || (T[ot] = {});
      (T[u].vx != wt || T[u].vy != q || T[u].el !== E) && (T[u].el = E, T[u].vx = wt, T[u].vy = q, clearInterval(T[u].pid), (wt != 0 || q != 0) && (c = !0, T[u].pid = setInterval(function() {
        i && this.layer === 0 && p.active._onTouchMove(Zt);
        var It = T[this.layer].vy ? T[this.layer].vy * s : 0, J = T[this.layer].vx ? T[this.layer].vx * s : 0;
        typeof h == "function" && h.call(p.dragged.parentNode[j], J, It, e, Zt, T[this.layer].el) !== "continue" || pn(T[this.layer].el, J, It);
      }.bind({
        layer: u
      }), 24))), u++;
    } while (t.bubbleScroll && m !== l && (m = it(m, !1)));
    pe = c;
  }
}, 30), Sn = function(t) {
  var n = t.originalEvent, i = t.putSortable, a = t.dragEl, r = t.activeSortable, o = t.dispatchSortableEvent, s = t.hideGhostForTarget, l = t.unhideGhostForTarget;
  if (n) {
    var c = i || r;
    s();
    var h = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, u = document.elementFromPoint(h.clientX, h.clientY);
    l(), c && !c.el.contains(u) && (o("spill"), this.onSpill({
      dragEl: a,
      putSortable: i
    }));
  }
};
function Se() {
}
Se.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var n = t.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(t) {
    var n = t.dragEl, i = t.putSortable;
    this.sortable.captureAnimationState(), i && i.captureAnimationState();
    var a = Et(this.sortable.el, this.startIndex, this.options);
    a ? this.sortable.el.insertBefore(n, a) : this.sortable.el.appendChild(n), this.sortable.animateAll(), i && i.animateAll();
  },
  drop: Sn
};
V(Se, {
  pluginName: "revertOnSpill"
});
function we() {
}
we.prototype = {
  onSpill: function(t) {
    var n = t.dragEl, i = t.putSortable, a = i || this.sortable;
    a.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), a.animateAll();
  },
  drop: Sn
};
V(we, {
  pluginName: "removeOnSpill"
});
p.mount(new yi());
p.mount(we, Se);
const Jt = /* @__PURE__ */ new Set(), Si = {
  ghostClass: "calcite-sortable--ghost",
  chosenClass: "calcite-sortable--chosen",
  dragClass: "calcite-sortable--drag",
  fallbackClass: "calcite-sortable--fallback"
};
function wi(e) {
  wn(e), Jt.add(e);
  const t = "id", { group: n, handleSelector: i, dragSelector: a } = e;
  e.sortable = p.create(e.el, {
    dataIdAttr: t,
    ...Si,
    ...!!a && { draggable: a },
    ...!!n && {
      group: {
        name: n,
        ...!!e.canPull && {
          pull: (r, o, s, { newIndex: l, oldIndex: c }) => e.canPull({ toEl: r.el, fromEl: o.el, dragEl: s, newIndex: l, oldIndex: c })
        },
        ...!!e.canPut && {
          put: (r, o, s, { newIndex: l, oldIndex: c }) => e.canPut({ toEl: r.el, fromEl: o.el, dragEl: s, newIndex: l, oldIndex: c })
        }
      }
    },
    handle: i,
    filter: "[drag-disabled]",
    onStart: ({ from: r, item: o, to: s, newIndex: l, oldIndex: c }) => {
      ge.active = !0, Ii(), e.onDragStart({ fromEl: r, dragEl: o, toEl: s, newIndex: l, oldIndex: c });
    },
    onEnd: ({ from: r, item: o, to: s, newIndex: l, oldIndex: c }) => {
      ge.active = !1, Ci(), e.onDragEnd({ fromEl: r, dragEl: o, toEl: s, newIndex: l, oldIndex: c });
    },
    onSort: ({ from: r, item: o, to: s, newIndex: l, oldIndex: c }) => {
      e.onDragSort({ fromEl: r, dragEl: o, toEl: s, newIndex: l, oldIndex: c });
    }
  });
}
function wn(e) {
  Jt.delete(e), e.sortable?.destroy(), e.sortable = null;
}
const ge = { active: !1 };
function Me(e) {
  return e.dragEnabled && ge.active;
}
function Ii() {
  Array.from(Jt).forEach((e) => e.onGlobalDragStart());
}
function Ci() {
  Array.from(Jt).forEach((e) => e.onGlobalDragEnd());
}
const pt = {
  container: "container",
  actionsStart: "actions-start",
  contentStart: "content-start",
  content: "content",
  contentEnd: "content-end",
  actionsEnd: "actions-end"
}, bt = {
  actionsStart: "actions-start",
  contentStart: "content-start",
  contentEnd: "content-end",
  actionsEnd: "actions-end"
}, Di = ":host([disabled]) .content{cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) .content *,:host([disabled]) .content ::slotted(*){pointer-events:none}:host{display:flex;flex:1 1 0%;flex-direction:column}.container{display:flex;flex:1 1 auto;align-items:stretch;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}.content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;font-size:var(--calcite-font-size--2);line-height:1.375;padding-inline:var(--calcite-stack-padding-inline, 0.75rem);padding-block:var(--calcite-stack-padding-block, 0.5rem)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:0 1 auto}.actions-start,.actions-end,.content-start,.content-end{display:flex;align-items:center}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}:host([hidden]){display:none}[hidden]{display:none}", xi = /* @__PURE__ */ me(class extends be {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.handleActionsStartSlotChange = (t) => {
      this.hasActionsStart = ut(t);
    }, this.handleActionsEndSlotChange = (t) => {
      this.hasActionsEnd = ut(t);
    }, this.handleContentStartSlotChange = (t) => {
      this.hasContentStart = ut(t);
    }, this.handleContentEndSlotChange = (t) => {
      this.hasContentEnd = ut(t);
    }, this.disabled = !1, this.hasActionsStart = !1, this.hasActionsEnd = !1, this.hasContentStart = !1, this.hasContentEnd = !1;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderActionsStart() {
    const { hasActionsStart: t } = this;
    return v("div", { class: pt.actionsStart, hidden: !t, key: "actions-start-container" }, v("slot", { name: bt.actionsStart, onSlotchange: this.handleActionsStartSlotChange }));
  }
  renderActionsEnd() {
    const { hasActionsEnd: t } = this;
    return v("div", { class: pt.actionsEnd, hidden: !t, key: "actions-end-container" }, v("slot", { name: bt.actionsEnd, onSlotchange: this.handleActionsEndSlotChange }));
  }
  renderContentStart() {
    const { hasContentStart: t } = this;
    return v("div", { class: pt.contentStart, hidden: !t }, v("slot", { name: bt.contentStart, onSlotchange: this.handleContentStartSlotChange }));
  }
  renderDefaultContent() {
    return v("div", { class: pt.content }, v("slot", null));
  }
  renderContentEnd() {
    const { hasContentEnd: t } = this;
    return v("div", { class: pt.contentEnd, hidden: !t }, v("slot", { name: bt.contentEnd, onSlotchange: this.handleContentEndSlotChange }));
  }
  render() {
    return v(Nn, null, v("div", { class: pt.container }, this.renderActionsStart(), this.renderContentStart(), this.renderDefaultContent(), this.renderContentEnd(), this.renderActionsEnd()));
  }
  static get style() {
    return Di;
  }
}, [1, "calcite-stack", {
  disabled: [516],
  hasActionsStart: [32],
  hasActionsEnd: [32],
  hasContentStart: [32],
  hasContentEnd: [32]
}]);
function In() {
  if (typeof customElements > "u")
    return;
  ["calcite-stack"].forEach((t) => {
    switch (t) {
      case "calcite-stack":
        customElements.get(t) || customElements.define(t, xi);
        break;
    }
  });
}
In();
function Ti(e, t) {
  for (var n = -1, i = e == null ? 0 : e.length, a = Array(i); ++n < i; )
    a[n] = t(e[n], n, e);
  return a;
}
var Cn = Array.isArray, _i = 1 / 0, Ne = De ? De.prototype : void 0, Re = Ne ? Ne.toString : void 0;
function Dn(e) {
  if (typeof e == "string")
    return e;
  if (Cn(e))
    return Ti(e, Dn) + "";
  if (Wn(e))
    return Re ? Re.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -_i ? "-0" : t;
}
function Ai(e) {
  return e;
}
var Oi = "[object AsyncFunction]", Fi = "[object Function]", Li = "[object GeneratorFunction]", Pi = "[object Proxy]";
function ki(e) {
  if (!en(e))
    return !1;
  var t = Ee(e);
  return t == Fi || t == Li || t == Oi || t == Pi;
}
var Mi = 9007199254740991, Ni = /^(?:0|[1-9]\d*)$/;
function Ri(e, t) {
  var n = typeof e;
  return t = t ?? Mi, !!t && (n == "number" || n != "symbol" && Ni.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var ji = 9007199254740991;
function xn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ji;
}
function Hi(e) {
  return e != null && xn(e.length) && !ki(e);
}
var Bi = Object.prototype;
function zi(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Bi;
  return e === n;
}
function Xi(e, t) {
  for (var n = -1, i = Array(e); ++n < e; )
    i[n] = t(n);
  return i;
}
var Gi = "[object Arguments]";
function je(e) {
  return ve(e) && Ee(e) == Gi;
}
var Tn = Object.prototype, Yi = Tn.hasOwnProperty, $i = Tn.propertyIsEnumerable, Wi = je(/* @__PURE__ */ function() {
  return arguments;
}()) ? je : function(e) {
  return ve(e) && Yi.call(e, "callee") && !$i.call(e, "callee");
};
function Ui() {
  return !1;
}
var _n = typeof exports == "object" && exports && !exports.nodeType && exports, He = _n && typeof module == "object" && module && !module.nodeType && module, qi = He && He.exports === _n, Be = qi ? Yn.Buffer : void 0, Ki = Be ? Be.isBuffer : void 0, Vi = Ki || Ui, Zi = "[object Arguments]", Qi = "[object Array]", Ji = "[object Boolean]", ta = "[object Date]", ea = "[object Error]", na = "[object Function]", ia = "[object Map]", aa = "[object Number]", ra = "[object Object]", oa = "[object RegExp]", sa = "[object Set]", la = "[object String]", ca = "[object WeakMap]", da = "[object ArrayBuffer]", ua = "[object DataView]", ha = "[object Float32Array]", fa = "[object Float64Array]", pa = "[object Int8Array]", ga = "[object Int16Array]", ma = "[object Int32Array]", ba = "[object Uint8Array]", va = "[object Uint8ClampedArray]", Ea = "[object Uint16Array]", ya = "[object Uint32Array]", I = {};
I[ha] = I[fa] = I[pa] = I[ga] = I[ma] = I[ba] = I[va] = I[Ea] = I[ya] = !0;
I[Zi] = I[Qi] = I[da] = I[Ji] = I[ua] = I[ta] = I[ea] = I[na] = I[ia] = I[aa] = I[ra] = I[oa] = I[sa] = I[la] = I[ca] = !1;
function Sa(e) {
  return ve(e) && xn(e.length) && !!I[Ee(e)];
}
function wa(e) {
  return function(t) {
    return e(t);
  };
}
var An = typeof exports == "object" && exports && !exports.nodeType && exports, kt = An && typeof module == "object" && module && !module.nodeType && module, Ia = kt && kt.exports === An, ce = Ia && $n.process, ze = function() {
  try {
    var e = kt && kt.require && kt.require("util").types;
    return e || ce && ce.binding && ce.binding("util");
  } catch {
  }
}(), Xe = ze && ze.isTypedArray, Ca = Xe ? wa(Xe) : Sa;
function Da(e, t) {
  var n = Cn(e), i = !n && Wi(e), a = !n && !i && Vi(e), r = !n && !i && !a && Ca(e), o = n || i || a || r, s = o ? Xi(e.length, String) : [], l = s.length;
  for (var c in e)
    o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    r && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Ri(c, l)) || s.push(c);
  return s;
}
function xa(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Ta = Object.prototype, _a = Ta.hasOwnProperty;
function Aa(e) {
  if (!en(e))
    return xa(e);
  var t = zi(e), n = [];
  for (var i in e)
    i == "constructor" && (t || !_a.call(e, i)) || n.push(i);
  return n;
}
function Oa(e) {
  return Hi(e) ? Da(e) : Aa(e);
}
function Fa(e) {
  return e == null ? "" : Dn(e);
}
function La(e) {
  return function(t, n, i) {
    for (var a = -1, r = Object(t), o = i(t), s = o.length; s--; ) {
      var l = o[++a];
      if (n(r[l], l, r) === !1)
        break;
    }
    return t;
  };
}
var Pa = La();
function ka(e) {
  return typeof e == "function" ? e : Ai;
}
var On = /[\\^$.*+?()[\]{}|]/g, Ma = RegExp(On.source);
function Na(e) {
  return e = Fa(e), e && Ma.test(e) ? e.replace(On, "\\$&") : e;
}
function Ra(e, t) {
  return e == null ? e : Pa(e, ka(t), Oa);
}
const Ge = (e, t) => {
  const n = Na(t), i = new RegExp(n, "i");
  e.length === 0 && console.warn(`No data was passed to the filter function.
    The data argument should be an array of objects`);
  const a = (o, s) => {
    if (o?.constant || o?.filterDisabled)
      return !0;
    let l = !1;
    return Ra(o, (c) => {
      typeof c == "function" || c == null || (Array.isArray(c) || typeof c == "object" && c !== null ? a(c, s) && (l = !0) : s.test(c) && (l = !0));
    }), l;
  };
  return e.filter((o) => a(o, i));
};
const ja = {
  container: "container",
  searchIcon: "search-icon"
}, Ha = {
  search: "search",
  close: "x"
}, Ba = 250, za = ":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;inline-size:100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{display:flex;inline-size:100%;padding:0.5rem}label{position:relative;margin-inline:0.25rem;margin-block:0px;display:flex;inline-size:100%;align-items:center;overflow:hidden}input[type=text]{margin-block-end:0.25rem;inline-size:100%;border-style:none;background-color:transparent;padding-block:0.25rem;font-family:inherit;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-color-text-1);padding-inline-end:0.25rem;padding-inline-start:1.5rem;transition:padding var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}input[type=text]::-ms-clear{display:none}calcite-input{inline-size:100%}.search-icon{position:absolute;display:flex;color:var(--calcite-color-text-2);inset-inline-start:0;transition:inset-inline-start var(--calcite-animation-timing), inset-inline-end var(--calcite-animation-timing), opacity var(--calcite-animation-timing)}input[type=text]:focus{border-color:var(--calcite-color-brand);outline:2px solid transparent;outline-offset:2px;padding-inline:0.25rem}input[type=text]:focus~.search-icon{inset-inline-start:calc(1rem * -1);opacity:0}.clear-button{display:flex;cursor:pointer;align-items:center;border-width:0px;background-color:transparent;color:var(--calcite-color-text-2)}.clear-button:hover,.clear-button:focus{color:var(--calcite-color-text-1)}:host([hidden]){display:none}[hidden]{display:none}", Xa = /* @__PURE__ */ me(class extends be {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calciteFilterChange = ct(this, "calciteFilterChange", 6), this.filterDebounced = nn((t, n = !1, i) => this.items.length && this.updateFiltered(Ge(this.items, t), n, i), Ba), this.inputHandler = (t) => {
      const n = t.target;
      this.value = n.value, this.filterDebounced(n.value, !0);
    }, this.keyDownHandler = (t) => {
      t.key === "Escape" && (this.clear(), t.preventDefault()), t.key === "Enter" && t.preventDefault();
    }, this.clear = () => {
      this.value = "", this.filterDebounced("", !0), this.setFocus();
    }, this.items = [], this.disabled = !1, this.filteredItems = [], this.placeholder = void 0, this.scale = "m", this.value = "", this.messages = void 0, this.messageOverrides = void 0, this.effectiveLocale = void 0, this.defaultMessages = void 0;
  }
  watchItemsHandler() {
    this.filterDebounced(this.value);
  }
  onMessagesChange() {
  }
  valueHandler(t) {
    this.filterDebounced(t);
  }
  effectiveLocaleChange() {
    Ze(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  async componentWillLoad() {
    qe(this), this.items.length && this.updateFiltered(Ge(this.items, this.value)), await Qe(this);
  }
  connectedCallback() {
    Ye(this), Xn(this), Je(this);
  }
  componentDidRender() {
    $e(this);
  }
  disconnectedCallback() {
    We(this), Gn(this), tn(this), this.filterDebounced.cancel();
  }
  componentDidLoad() {
    Ke(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Performs a filter on the component.
   *
   * This method can be useful because filtering is delayed and asynchronous.
   *
   * @param {string} value - The filter text value.
   * @returns {Promise<void>}
   */
  async filter(t = this.value) {
    return new Promise((n) => {
      this.value = t, this.filterDebounced(t, !1, n);
    });
  }
  /** Sets focus on the component. */
  async setFocus() {
    await Ve(this), this.el?.focus();
  }
  updateFiltered(t, n = !1, i) {
    this.filteredItems = t, n && this.calciteFilterChange.emit(), i?.();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { disabled: t, scale: n } = this;
    return v(Ue, { disabled: t }, v("div", { class: ja.container }, v("label", null, v("calcite-input", {
      clearable: !0,
      disabled: t,
      icon: Ha.search,
      label: this.messages.label,
      messageOverrides: { clear: this.messages.clear },
      onCalciteInputInput: this.inputHandler,
      onKeyDown: this.keyDownHandler,
      placeholder: this.placeholder,
      scale: n,
      type: "text",
      value: this.value,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (i) => {
        this.textInput = i;
      }
    }))));
  }
  static get delegatesFocus() {
    return !0;
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      items: ["watchItemsHandler"],
      messageOverrides: ["onMessagesChange"],
      value: ["valueHandler"],
      effectiveLocale: ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return za;
  }
}, [17, "calcite-filter", {
  items: [16],
  disabled: [516],
  filteredItems: [1040],
  placeholder: [1],
  scale: [513],
  value: [1025],
  messages: [1040],
  messageOverrides: [1040],
  effectiveLocale: [32],
  defaultMessages: [32],
  filter: [64],
  setFocus: [64]
}, void 0, {
  items: ["watchItemsHandler"],
  messageOverrides: ["onMessagesChange"],
  value: ["valueHandler"],
  effectiveLocale: ["effectiveLocaleChange"]
}]);
function Fn() {
  if (typeof customElements > "u")
    return;
  ["calcite-filter", "calcite-icon", "calcite-input", "calcite-input-message", "calcite-progress"].forEach((t) => {
    switch (t) {
      case "calcite-filter":
        customElements.get(t) || customElements.define(t, Xa);
        break;
      case "calcite-icon":
        customElements.get(t) || an();
        break;
      case "calcite-input":
        customElements.get(t) || sn();
        break;
      case "calcite-input-message":
        customElements.get(t) || on();
        break;
      case "calcite-progress":
        customElements.get(t) || rn();
        break;
    }
  });
}
Fn();
const tt = {
  container: "container",
  table: "table",
  scrim: "scrim",
  stack: "stack",
  tableContainer: "table-container",
  sticky: "sticky-pos",
  assistiveText: "assistive-text"
}, Ga = 0, de = {
  filterNoResults: "filter-no-results",
  filterActionsStart: "filter-actions-start",
  filterActionsEnd: "filter-actions-end"
}, Ya = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{position:relative}.table-container{box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;background-color:transparent}.table-container *{box-sizing:border-box}.table{inline-size:100%;border-collapse:collapse}.stack{--calcite-stack-padding-inline:0;--calcite-stack-padding-block:0}::slotted(calcite-list-item){--tw-shadow:0 -1px 0 var(--calcite-color-border-3);--tw-shadow-colored:0 -1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);margin-block-start:1px}::slotted(calcite-list-item:first-of-type){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}::slotted(calcite-list-item[data-filter]){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);margin-block-start:0px}.sticky-pos{position:sticky;inset-block-start:0px;z-index:var(--calcite-z-index-sticky);background-color:var(--calcite-color-foreground-1)}.sticky-pos th{padding:0px}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}", Dt = "calcite-list-item", $a = ":scope > calcite-list-item", Wa = "calcite-list-item-group, calcite-list-item", Ln = /* @__PURE__ */ me(class extends be {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calciteListChange = ct(this, "calciteListChange", 6), this.calciteListDragEnd = ct(this, "calciteListDragEnd", 6), this.calciteListDragStart = ct(this, "calciteListDragStart", 6), this.calciteListFilter = ct(this, "calciteListFilter", 6), this.calciteListOrderChange = ct(this, "calciteListOrderChange", 6), this.calciteInternalListDefaultSlotChange = ct(this, "calciteInternalListDefaultSlotChange", 6), this.dragSelector = Dt, this.focusableItems = [], this.handleSelector = "calcite-handle", this.listItems = [], this.mutationObserver = jn("mutation", () => this.updateListItems()), this.visibleItems = [], this.handleDefaultSlotChange = (t) => {
      Hn(Bn(t.target)), this.parentListEl && this.calciteInternalListDefaultSlotChange.emit();
    }, this.handleFilterActionsStartSlotChange = (t) => {
      this.hasFilterActionsStart = ut(t);
    }, this.handleFilterActionsEndSlotChange = (t) => {
      this.hasFilterActionsEnd = ut(t);
    }, this.handleFilterNoResultsSlotChange = (t) => {
      this.hasFilterNoResults = ut(t);
    }, this.setActiveListItem = () => {
      const { focusableItems: t } = this;
      t.some((n) => n.active) || t[0] && (t[0].active = !0);
    }, this.updateSelectedItems = (t = !1) => {
      this.selectedItems = this.visibleItems.filter((n) => n.selected), t && this.calciteListChange.emit();
    }, this.updateFilteredItems = (t = !1) => {
      const { visibleItems: n, filteredData: i, filterText: a } = this, r = i.map((c) => c.value), o = n?.filter((c) => n.every((h) => h === c || !c.contains(h))), s = n.filter((c) => !a || r.includes(c.value)) || [], l = /* @__PURE__ */ new WeakSet();
      o.forEach((c) => this.filterElements({ el: c, filteredItems: s, visibleParents: l })), s.length > 0 && this.findAncestorOfFirstFilteredItem(s), this.filteredItems = s, t && this.calciteListFilter.emit();
    }, this.setFilterEl = (t) => {
      this.filterEl = t, this.performFilter();
    }, this.handleFilterChange = (t) => {
      t.stopPropagation();
      const { value: n } = t.currentTarget;
      this.filterText = n, this.updateFilteredData(!0);
    }, this.getItemData = () => this.listItems.map((t) => ({
      label: t.label,
      description: t.description,
      metadata: t.metadata,
      value: t.value
    })), this.updateListItems = nn((t = !1) => {
      const { selectionAppearance: n, selectionMode: i, dragEnabled: a } = this;
      if (this.parentListEl) {
        this.queryListItems(!0).forEach((l) => {
          l.dragHandle = a;
        }), this.setUpSorting();
        return;
      }
      const r = this.queryListItems();
      r.forEach((s) => {
        s.selectionAppearance = n, s.selectionMode = i;
      }), this.queryListItems(!0).forEach((s) => {
        s.dragHandle = a;
      }), this.listItems = r, this.filterEnabled && (this.dataForFilter = this.getItemData(), this.filterEl && (this.filterEl.items = this.dataForFilter)), this.visibleItems = this.listItems.filter((s) => !s.closed && !s.hidden), this.updateFilteredItems(t), this.focusableItems = this.filteredItems.filter((s) => !s.disabled), this.setActiveListItem(), this.updateSelectedItems(t), this.setUpSorting();
    }, Ga), this.queryListItems = (t = !1) => Array.from(this.el.querySelectorAll(t ? $a : Dt)), this.focusRow = (t) => {
      const { focusableItems: n } = this;
      t && (n.forEach((i) => i.active = i === t), t.setFocus());
    }, this.isNavigable = (t) => {
      const n = t.parentElement?.closest(Dt);
      return n ? n.open && this.isNavigable(n) : !0;
    }, this.handleListKeydown = (t) => {
      if (t.defaultPrevented || this.parentListEl)
        return;
      const { key: n } = t, i = this.focusableItems.filter((r) => this.isNavigable(r)), a = i.findIndex((r) => r.active);
      if (n === "ArrowDown") {
        t.preventDefault();
        const r = t.target === this.filterEl ? 0 : a + 1;
        i[r] && this.focusRow(i[r]);
      } else if (n === "ArrowUp") {
        if (t.preventDefault(), a === 0 && this.filterEnabled) {
          this.filterEl?.setFocus();
          return;
        }
        const r = a - 1;
        i[r] && this.focusRow(i[r]);
      } else if (n === "Home") {
        t.preventDefault();
        const r = i[0];
        r && this.focusRow(r);
      } else if (n === "End") {
        t.preventDefault();
        const r = i[i.length - 1];
        r && this.focusRow(r);
      }
    }, this.findAncestorOfFirstFilteredItem = (t) => {
      this.ancestorOfFirstFilteredItem?.removeAttribute("data-filter"), t.forEach((n) => {
        n.removeAttribute("data-filter");
      }), this.ancestorOfFirstFilteredItem = this.getTopLevelAncestorItemElement(t[0]), t[0].setAttribute("data-filter", "0"), this.ancestorOfFirstFilteredItem?.setAttribute("data-filter", "0");
    }, this.getTopLevelAncestorItemElement = (t) => {
      let n = t.parentElement.closest(Dt);
      for (; n; ) {
        const i = n.parentElement.closest(Dt);
        if (i)
          n = i;
        else
          return n;
      }
      return null;
    }, this.disabled = !1, this.canPull = void 0, this.canPut = void 0, this.dragEnabled = !1, this.group = void 0, this.filterEnabled = !1, this.filteredItems = [], this.filteredData = [], this.filterPlaceholder = void 0, this.filterText = void 0, this.label = void 0, this.loading = !1, this.messageOverrides = void 0, this.messages = void 0, this.numberingSystem = void 0, this.openable = !1, this.selectedItems = [], this.selectionMode = "none", this.selectionAppearance = "icon", this.effectiveLocale = "", this.defaultMessages = void 0, this.assistiveText = void 0, this.dataForFilter = [], this.hasFilterActionsEnd = !1, this.hasFilterActionsStart = !1, this.hasFilterNoResults = !1;
  }
  async handleFilterTextChange() {
    this.performFilter();
  }
  onMessagesChange() {
  }
  handleListItemChange() {
    this.updateListItems();
  }
  handleCalciteInternalFocusPreviousItem(t) {
    if (this.parentListEl)
      return;
    t.stopPropagation();
    const { focusableItems: n } = this, a = n.findIndex((r) => r.active) - 1;
    n[a] && this.focusRow(n[a]);
  }
  handleCalciteInternalListItemActive(t) {
    if (this.parentListEl)
      return;
    t.stopPropagation();
    const n = t.target, { listItems: i } = this;
    i.forEach((a) => {
      a.active = a === n;
    });
  }
  handleCalciteListItemSelect() {
    this.parentListEl || this.updateSelectedItems(!0);
  }
  handleCalciteInternalAssistiveTextChange(t) {
    this.assistiveText = t.detail.message, t.stopPropagation();
  }
  handleCalciteHandleNudge(t) {
    this.parentListEl || this.handleNudgeEvent(t);
  }
  handleCalciteInternalListItemSelect(t) {
    if (this.parentListEl)
      return;
    t.stopPropagation();
    const n = t.target, { listItems: i, selectionMode: a } = this;
    n.selected && (a === "single" || a === "single-persist") && i.forEach((r) => r.selected = r === n), this.updateSelectedItems();
  }
  handleCalciteInternalListItemSelectMultiple(t) {
    if (this.parentListEl)
      return;
    t.stopPropagation();
    const { target: n, detail: i } = t, { focusableItems: a, lastSelectedInfo: r } = this, o = n;
    if (i.selectMultiple && r) {
      const s = a.indexOf(o), l = a.indexOf(r.selectedItem), c = Math.min(l, s), h = Math.max(l, s);
      a.slice(c, h + 1).forEach((u) => u.selected = r.selected);
    } else
      this.lastSelectedInfo = { selectedItem: o, selected: o.selected };
  }
  handleCalciteInternalListItemChange(t) {
    this.parentListEl || (t.stopPropagation(), this.updateListItems());
  }
  handleCalciteInternalListItemGroupDefaultSlotChange(t) {
    t.stopPropagation();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    Me(this) || (Je(this), this.connectObserver(), this.updateListItems(), this.setUpSorting(), Ye(this), this.setParentList());
  }
  async componentWillLoad() {
    qe(this), await Qe(this);
  }
  componentDidRender() {
    $e(this);
  }
  componentDidLoad() {
    Ke(this);
  }
  disconnectedCallback() {
    Me(this) || (this.disconnectObserver(), wn(this), We(this), tn(this));
  }
  effectiveLocaleChange() {
    Ze(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Sets focus on the component's first focusable element.
   *
   * @returns {Promise<void>}
   */
  async setFocus() {
    return await Ve(this), this.filterEnabled ? this.filterEl?.setFocus() : this.focusableItems.find((t) => t.active)?.setFocus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { loading: t, label: n, disabled: i, dataForFilter: a, filterEnabled: r, filterPlaceholder: o, filterText: s, filteredItems: l, hasFilterActionsStart: c, hasFilterActionsEnd: h, hasFilterNoResults: u } = this;
    return v(Ue, { disabled: this.disabled }, v("div", { class: tt.container }, this.dragEnabled ? v("span", { "aria-live": "assertive", class: tt.assistiveText }, this.assistiveText) : null, this.renderItemAriaLive(), t ? v("calcite-scrim", { class: tt.scrim, loading: t }) : null, v("table", { "aria-busy": Rn(t), "aria-label": n || "", class: tt.table, onKeyDown: this.handleListKeydown, role: "treegrid" }, r || c || h ? v("thead", null, v("tr", { class: { [tt.sticky]: !0 } }, v("th", { colSpan: zn }, v("calcite-stack", { class: tt.stack }, v("slot", { name: de.filterActionsStart, onSlotchange: this.handleFilterActionsStartSlotChange, slot: bt.actionsStart }), v("calcite-filter", {
      "aria-label": o,
      disabled: i,
      items: a,
      onCalciteFilterChange: this.handleFilterChange,
      placeholder: o,
      value: s,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setFilterEl
    }), v("slot", { name: de.filterActionsEnd, onSlotchange: this.handleFilterActionsEndSlotChange, slot: bt.actionsEnd }))))) : null, v("tbody", { class: tt.tableContainer }, v("slot", { onSlotchange: this.handleDefaultSlotChange }))), v("div", { "aria-live": "polite", "data-test-id": "no-results-container", hidden: !(u && r && s && !l.length) }, v("slot", { name: de.filterNoResults, onSlotchange: this.handleFilterNoResultsSlotChange }))));
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  renderItemAriaLive() {
    const { messages: t, filteredItems: n, parentListEl: i, effectiveLocale: a, numberingSystem: r, filterEnabled: o, filterText: s, filteredData: l } = this;
    return Ce.numberFormatOptions = {
      locale: a,
      numberingSystem: r
    }, i ? null : v("div", { "aria-live": "polite", class: tt.assistiveText }, o && s && l?.length ? v("div", { key: "aria-filter-enabled" }, t.filterEnabled) : null, v("div", { key: "aria-item-count" }, t.total.replace("{count}", Ce.localize(n.length.toString()))), n.length ? v("ol", { key: "aria-item-list" }, n.map((c) => v("li", null, c.label))) : null);
  }
  connectObserver() {
    this.mutationObserver?.observe(this.el, { childList: !0, subtree: !0 });
  }
  disconnectObserver() {
    this.mutationObserver?.disconnect();
  }
  setUpSorting() {
    const { dragEnabled: t } = this;
    t && wi(this);
  }
  onGlobalDragStart() {
    this.disconnectObserver();
  }
  onGlobalDragEnd() {
    this.connectObserver();
  }
  onDragEnd(t) {
    this.calciteListDragEnd.emit(t);
  }
  onDragStart(t) {
    this.calciteListDragStart.emit(t);
  }
  onDragSort(t) {
    this.setParentList(), this.updateListItems(), this.calciteListOrderChange.emit(t);
  }
  setParentList() {
    this.parentListEl = this.el.parentElement?.closest("calcite-list");
  }
  filterElements({ el: t, filteredItems: n, visibleParents: i }) {
    const a = !i.has(t) && !n.includes(t);
    t.filterHidden = a;
    const r = t.parentElement.closest(Wa);
    r && (a || i.add(r), this.filterElements({
      el: r,
      filteredItems: n,
      visibleParents: i
    }));
  }
  updateFilteredData(t = !1) {
    const { filterEl: n } = this;
    n && (n.filteredItems && (this.filteredData = n.filteredItems), this.updateListItems(t));
  }
  async performFilter() {
    const { filterEl: t, filterText: n } = this;
    t && (t.value = n, await t.filter(n), this.updateFilteredData());
  }
  handleNudgeEvent(t) {
    const { handleSelector: n, dragSelector: i } = this, { direction: a } = t.detail, r = t.composedPath(), o = r.find((b) => b?.tagName && b.matches(n)), s = r.find((b) => b?.tagName && b.matches(i)), l = s?.parentElement;
    if (!l)
      return;
    const { filteredItems: c } = this, h = c.filter((b) => b.parentElement === l), u = h.length - 1, m = h.indexOf(s);
    let E;
    a === "up" ? E = m === 0 ? u : m - 1 : E = m === u ? 0 : m + 1, this.disconnectObserver(), o.blurUnselectDisabled = !0;
    const y = a === "up" && E !== u || a === "down" && E === 0 ? h[E] : h[E].nextSibling;
    l.insertBefore(s, y), this.updateListItems(), this.connectObserver(), this.calciteListOrderChange.emit({
      dragEl: s,
      fromEl: l,
      toEl: l,
      newIndex: E,
      oldIndex: m
    }), o.setFocus().then(() => o.blurUnselectDisabled = !1);
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      filterText: ["handleFilterTextChange"],
      messageOverrides: ["onMessagesChange"],
      filterEnabled: ["handleListItemChange"],
      group: ["handleListItemChange"],
      dragEnabled: ["handleListItemChange"],
      selectionMode: ["handleListItemChange"],
      selectionAppearance: ["handleListItemChange"],
      effectiveLocale: ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return Ya;
  }
}, [1, "calcite-list", {
  disabled: [516],
  canPull: [16],
  canPut: [16],
  dragEnabled: [516, "drag-enabled"],
  group: [513],
  filterEnabled: [516, "filter-enabled"],
  filteredItems: [1040],
  filteredData: [1040],
  filterPlaceholder: [513, "filter-placeholder"],
  filterText: [1537, "filter-text"],
  label: [1],
  loading: [516],
  messageOverrides: [1040],
  messages: [1040],
  numberingSystem: [1, "numbering-system"],
  openable: [4],
  selectedItems: [1040],
  selectionMode: [513, "selection-mode"],
  selectionAppearance: [513, "selection-appearance"],
  effectiveLocale: [32],
  defaultMessages: [32],
  assistiveText: [32],
  dataForFilter: [32],
  hasFilterActionsEnd: [32],
  hasFilterActionsStart: [32],
  hasFilterNoResults: [32],
  setFocus: [64]
}, [[0, "calciteInternalFocusPreviousItem", "handleCalciteInternalFocusPreviousItem"], [0, "calciteInternalListItemActive", "handleCalciteInternalListItemActive"], [0, "calciteListItemSelect", "handleCalciteListItemSelect"], [0, "calciteInternalAssistiveTextChange", "handleCalciteInternalAssistiveTextChange"], [0, "calciteHandleNudge", "handleCalciteHandleNudge"], [0, "calciteInternalListItemSelect", "handleCalciteInternalListItemSelect"], [0, "calciteInternalListItemSelectMultiple", "handleCalciteInternalListItemSelectMultiple"], [0, "calciteInternalListItemChange", "handleCalciteInternalListItemChange"], [0, "calciteInternalListItemGroupDefaultSlotChange", "handleCalciteInternalListItemGroupDefaultSlotChange"]], {
  filterText: ["handleFilterTextChange"],
  messageOverrides: ["onMessagesChange"],
  filterEnabled: ["handleListItemChange"],
  group: ["handleListItemChange"],
  dragEnabled: ["handleListItemChange"],
  selectionMode: ["handleListItemChange"],
  selectionAppearance: ["handleListItemChange"],
  effectiveLocale: ["effectiveLocaleChange"]
}]);
function Pn() {
  if (typeof customElements > "u")
    return;
  ["calcite-list", "calcite-filter", "calcite-icon", "calcite-input", "calcite-input-message", "calcite-loader", "calcite-progress", "calcite-scrim", "calcite-stack"].forEach((t) => {
    switch (t) {
      case "calcite-list":
        customElements.get(t) || customElements.define(t, Ln);
        break;
      case "calcite-filter":
        customElements.get(t) || Fn();
        break;
      case "calcite-icon":
        customElements.get(t) || an();
        break;
      case "calcite-input":
        customElements.get(t) || sn();
        break;
      case "calcite-input-message":
        customElements.get(t) || on();
        break;
      case "calcite-loader":
        customElements.get(t) || Un();
        break;
      case "calcite-progress":
        customElements.get(t) || rn();
        break;
      case "calcite-scrim":
        customElements.get(t) || qn();
        break;
      case "calcite-stack":
        customElements.get(t) || In();
        break;
    }
  });
}
Pn();
const cr = Ln, dr = Pn;
export {
  cr as CalciteList,
  dr as defineCustomElement
};
//# sourceMappingURL=calcite-list-CjoFlyg5.js.map
