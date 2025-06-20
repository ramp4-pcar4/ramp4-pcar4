import { b as te, d as ae, h as S, j as ne, k as re, l as N, m as K } from "./dom-DkH2gtZS.js";
function z(o, a) {
  var u = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(o);
    a && (i = i.filter(function(b) {
      return Object.getOwnPropertyDescriptor(o, b).enumerable;
    })), u.push.apply(u, i);
  }
  return u;
}
function J(o) {
  for (var a = 1; a < arguments.length; a++) {
    var u = arguments[a] != null ? arguments[a] : {};
    a % 2 ? z(Object(u), !0).forEach(function(i) {
      oe(o, i, u[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(u)) : z(Object(u)).forEach(function(i) {
      Object.defineProperty(o, i, Object.getOwnPropertyDescriptor(u, i));
    });
  }
  return o;
}
function oe(o, a, u) {
  return a = ue(a), a in o ? Object.defineProperty(o, a, {
    value: u,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : o[a] = u, o;
}
function ie(o, a) {
  if (typeof o != "object" || o === null) return o;
  var u = o[Symbol.toPrimitive];
  if (u !== void 0) {
    var i = u.call(o, a || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(o);
}
function ue(o) {
  var a = ie(o, "string");
  return typeof a == "symbol" ? a : String(a);
}
var Q = {
  activateTrap: function(a, u) {
    if (a.length > 0) {
      var i = a[a.length - 1];
      i !== u && i.pause();
    }
    var b = a.indexOf(u);
    b === -1 || a.splice(b, 1), a.push(u);
  },
  deactivateTrap: function(a, u) {
    var i = a.indexOf(u);
    i !== -1 && a.splice(i, 1), a.length > 0 && a[a.length - 1].unpause();
  }
}, se = function(a) {
  return a.tagName && a.tagName.toLowerCase() === "input" && typeof a.select == "function";
}, ce = function(a) {
  return a?.key === "Escape" || a?.key === "Esc" || a?.keyCode === 27;
}, B = function(a) {
  return a?.key === "Tab" || a?.keyCode === 9;
}, le = function(a) {
  return B(a) && !a.shiftKey;
}, fe = function(a) {
  return B(a) && a.shiftKey;
}, W = function(a) {
  return setTimeout(a, 0);
}, X = function(a, u) {
  var i = -1;
  return a.every(function(b, s) {
    return u(b) ? (i = s, !1) : !0;
  }), i;
}, C = function(a) {
  for (var u = arguments.length, i = new Array(u > 1 ? u - 1 : 0), b = 1; b < u; b++)
    i[b - 1] = arguments[b];
  return typeof a == "function" ? a.apply(void 0, i) : a;
}, A = function(a) {
  return a.target.shadowRoot && typeof a.composedPath == "function" ? a.composedPath()[0] : a.target;
}, de = [], ve = function(a, u) {
  var i = u?.document || document, b = u?.trapStack || de, s = J({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: le,
    isKeyBackward: fe
  }, u), n = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   posTabIndexesFound: boolean,
    //   firstTabbableNode: HTMLElement|undefined,
    //   lastTabbableNode: HTMLElement|undefined,
    //   firstDomTabbableNode: HTMLElement|undefined,
    //   lastDomTabbableNode: HTMLElement|undefined,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: !1,
    paused: !1,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  }, g, h = function(t, e, r) {
    return t && t[e] !== void 0 ? t[e] : s[r || e];
  }, T = function(t, e) {
    var r = typeof e?.composedPath == "function" ? e.composedPath() : void 0;
    return n.containerGroups.findIndex(function(c) {
      var l = c.container, d = c.tabbableNodes;
      return l.contains(t) || r?.includes(l) || d.find(function(v) {
        return v === t;
      });
    });
  }, E = function(t) {
    var e = s[t];
    if (typeof e == "function") {
      for (var r = arguments.length, c = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
        c[l - 1] = arguments[l];
      e = e.apply(void 0, c);
    }
    if (e === !0 && (e = void 0), !e) {
      if (e === void 0 || e === !1)
        return e;
      throw new Error("`".concat(t, "` was specified but was not a node, or did not return a node"));
    }
    var d = e;
    if (typeof e == "string" && (d = i.querySelector(e), !d))
      throw new Error("`".concat(t, "` as selector refers to no known node"));
    return d;
  }, k = function() {
    var t = E("initialFocus");
    if (t === !1)
      return !1;
    if (t === void 0 || !S(t, s.tabbableOptions))
      if (T(i.activeElement) >= 0)
        t = i.activeElement;
      else {
        var e = n.tabbableGroups[0], r = e && e.firstTabbableNode;
        t = r || E("fallbackFocus");
      }
    if (!t)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return t;
  }, D = function() {
    if (n.containerGroups = n.containers.map(function(t) {
      var e = ne(t, s.tabbableOptions), r = re(t, s.tabbableOptions), c = e.length > 0 ? e[0] : void 0, l = e.length > 0 ? e[e.length - 1] : void 0, d = r.find(function(p) {
        return N(p);
      }), v = r.slice().reverse().find(function(p) {
        return N(p);
      }), m = !!e.find(function(p) {
        return K(p) > 0;
      });
      return {
        container: t,
        tabbableNodes: e,
        focusableNodes: r,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: m,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: c,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: l,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: d,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: v,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(w) {
          var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, y = e.indexOf(w);
          return y < 0 ? O ? r.slice(r.indexOf(w) + 1).find(function(R) {
            return N(R);
          }) : r.slice(0, r.indexOf(w)).reverse().find(function(R) {
            return N(R);
          }) : e[y + (O ? 1 : -1)];
        }
      };
    }), n.tabbableGroups = n.containerGroups.filter(function(t) {
      return t.tabbableNodes.length > 0;
    }), n.tabbableGroups.length <= 0 && !E("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (n.containerGroups.find(function(t) {
      return t.posTabIndexesFound;
    }) && n.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, Z = function f(t) {
    var e = t.activeElement;
    if (e)
      return e.shadowRoot && e.shadowRoot.activeElement !== null ? f(e.shadowRoot) : e;
  }, F = function f(t) {
    if (t !== !1 && t !== Z(document)) {
      if (!t || !t.focus) {
        f(k());
        return;
      }
      t.focus({
        preventScroll: !!s.preventScroll
      }), n.mostRecentlyFocusedNode = t, se(t) && t.select();
    }
  }, G = function(t) {
    var e = E("setReturnFocus", t);
    return e || (e === !1 ? !1 : t);
  }, U = function(t) {
    var e = t.target, r = t.event, c = t.isBackward, l = c === void 0 ? !1 : c;
    e = e || A(r), D();
    var d = null;
    if (n.tabbableGroups.length > 0) {
      var v = T(e, r), m = v >= 0 ? n.containerGroups[v] : void 0;
      if (v < 0)
        l ? d = n.tabbableGroups[n.tabbableGroups.length - 1].lastTabbableNode : d = n.tabbableGroups[0].firstTabbableNode;
      else if (l) {
        var p = X(n.tabbableGroups, function(I) {
          var x = I.firstTabbableNode;
          return e === x;
        });
        if (p < 0 && (m.container === e || S(e, s.tabbableOptions) && !N(e, s.tabbableOptions) && !m.nextTabbableNode(e, !1)) && (p = v), p >= 0) {
          var w = p === 0 ? n.tabbableGroups.length - 1 : p - 1, O = n.tabbableGroups[w];
          d = K(e) >= 0 ? O.lastTabbableNode : O.lastDomTabbableNode;
        } else B(r) || (d = m.nextTabbableNode(e, !1));
      } else {
        var y = X(n.tabbableGroups, function(I) {
          var x = I.lastTabbableNode;
          return e === x;
        });
        if (y < 0 && (m.container === e || S(e, s.tabbableOptions) && !N(e, s.tabbableOptions) && !m.nextTabbableNode(e)) && (y = v), y >= 0) {
          var R = y === n.tabbableGroups.length - 1 ? 0 : y + 1, $ = n.tabbableGroups[R];
          d = K(e) >= 0 ? $.firstTabbableNode : $.firstDomTabbableNode;
        } else B(r) || (d = m.nextTabbableNode(e));
      }
    } else
      d = E("fallbackFocus");
    return d;
  }, L = function(t) {
    var e = A(t);
    if (!(T(e, t) >= 0)) {
      if (C(s.clickOutsideDeactivates, t)) {
        g.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: s.returnFocusOnDeactivate
        });
        return;
      }
      C(s.allowOutsideClick, t) || t.preventDefault();
    }
  }, q = function(t) {
    var e = A(t), r = T(e, t) >= 0;
    if (r || e instanceof Document)
      r && (n.mostRecentlyFocusedNode = e);
    else {
      t.stopImmediatePropagation();
      var c, l = !0;
      if (n.mostRecentlyFocusedNode)
        if (K(n.mostRecentlyFocusedNode) > 0) {
          var d = T(n.mostRecentlyFocusedNode), v = n.containerGroups[d].tabbableNodes;
          if (v.length > 0) {
            var m = v.findIndex(function(p) {
              return p === n.mostRecentlyFocusedNode;
            });
            m >= 0 && (s.isKeyForward(n.recentNavEvent) ? m + 1 < v.length && (c = v[m + 1], l = !1) : m - 1 >= 0 && (c = v[m - 1], l = !1));
          }
        } else
          n.containerGroups.some(function(p) {
            return p.tabbableNodes.some(function(w) {
              return K(w) > 0;
            });
          }) || (l = !1);
      else
        l = !1;
      l && (c = U({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: n.mostRecentlyFocusedNode,
        isBackward: s.isKeyBackward(n.recentNavEvent)
      })), F(c || n.mostRecentlyFocusedNode || k());
    }
    n.recentNavEvent = void 0;
  }, _ = function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    n.recentNavEvent = t;
    var r = U({
      event: t,
      isBackward: e
    });
    r && (B(t) && t.preventDefault(), F(r));
  }, H = function(t) {
    if (ce(t) && C(s.escapeDeactivates, t) !== !1) {
      t.preventDefault(), g.deactivate();
      return;
    }
    (s.isKeyForward(t) || s.isKeyBackward(t)) && _(t, s.isKeyBackward(t));
  }, M = function(t) {
    var e = A(t);
    T(e, t) >= 0 || C(s.clickOutsideDeactivates, t) || C(s.allowOutsideClick, t) || (t.preventDefault(), t.stopImmediatePropagation());
  }, Y = function() {
    if (n.active)
      return Q.activateTrap(b, g), n.delayInitialFocusTimer = s.delayInitialFocus ? W(function() {
        F(k());
      }) : F(k()), i.addEventListener("focusin", q, !0), i.addEventListener("mousedown", L, {
        capture: !0,
        passive: !1
      }), i.addEventListener("touchstart", L, {
        capture: !0,
        passive: !1
      }), i.addEventListener("click", M, {
        capture: !0,
        passive: !1
      }), i.addEventListener("keydown", H, {
        capture: !0,
        passive: !1
      }), g;
  }, V = function() {
    if (n.active)
      return i.removeEventListener("focusin", q, !0), i.removeEventListener("mousedown", L, !0), i.removeEventListener("touchstart", L, !0), i.removeEventListener("click", M, !0), i.removeEventListener("keydown", H, !0), g;
  }, ee = function(t) {
    var e = t.some(function(r) {
      var c = Array.from(r.removedNodes);
      return c.some(function(l) {
        return l === n.mostRecentlyFocusedNode;
      });
    });
    e && F(k());
  }, j = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(ee) : void 0, P = function() {
    j && (j.disconnect(), n.active && !n.paused && n.containers.map(function(t) {
      j.observe(t, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return g = {
    get active() {
      return n.active;
    },
    get paused() {
      return n.paused;
    },
    activate: function(t) {
      if (n.active)
        return this;
      var e = h(t, "onActivate"), r = h(t, "onPostActivate"), c = h(t, "checkCanFocusTrap");
      c || D(), n.active = !0, n.paused = !1, n.nodeFocusedBeforeActivation = i.activeElement, e?.();
      var l = function() {
        c && D(), Y(), P(), r?.();
      };
      return c ? (c(n.containers.concat()).then(l, l), this) : (l(), this);
    },
    deactivate: function(t) {
      if (!n.active)
        return this;
      var e = J({
        onDeactivate: s.onDeactivate,
        onPostDeactivate: s.onPostDeactivate,
        checkCanReturnFocus: s.checkCanReturnFocus
      }, t);
      clearTimeout(n.delayInitialFocusTimer), n.delayInitialFocusTimer = void 0, V(), n.active = !1, n.paused = !1, P(), Q.deactivateTrap(b, g);
      var r = h(e, "onDeactivate"), c = h(e, "onPostDeactivate"), l = h(e, "checkCanReturnFocus"), d = h(e, "returnFocus", "returnFocusOnDeactivate");
      r?.();
      var v = function() {
        W(function() {
          d && F(G(n.nodeFocusedBeforeActivation)), c?.();
        });
      };
      return d && l ? (l(G(n.nodeFocusedBeforeActivation)).then(v, v), this) : (v(), this);
    },
    pause: function(t) {
      if (n.paused || !n.active)
        return this;
      var e = h(t, "onPause"), r = h(t, "onPostPause");
      return n.paused = !0, e?.(), V(), P(), r?.(), this;
    },
    unpause: function(t) {
      if (!n.paused || !n.active)
        return this;
      var e = h(t, "onUnpause"), r = h(t, "onPostUnpause");
      return n.paused = !1, e?.(), D(), Y(), P(), r?.(), this;
    },
    updateContainerElements: function(t) {
      var e = [].concat(t).filter(Boolean);
      return n.containers = e.map(function(r) {
        return typeof r == "string" ? i.querySelector(r) : r;
      }), n.active && D(), P(), this;
    }
  }, g.updateContainerElements(a), g;
};
const be = globalThis.calciteConfig, pe = be?.focusTrapStack || [];
function he(o, a) {
  const { el: u } = o, i = u;
  if (!i)
    return;
  const b = {
    clickOutsideDeactivates: !0,
    escapeDeactivates: !1,
    fallbackFocus: i,
    setReturnFocus: (s) => (te(s), !1),
    ...a?.focusTrapOptions,
    // the following options are not overridable
    document: u.ownerDocument,
    tabbableOptions: ae,
    trapStack: pe
  };
  o.focusTrap = ve(i, b);
}
function ge(o, a) {
  o.focusTrapDisabled || o.focusTrap?.activate(a);
}
function ye(o, a) {
  o.focusTrap?.deactivate(a);
}
function Fe(o) {
  o.focusTrap?.updateContainerElements(o.el);
}
export {
  ge as a,
  he as c,
  ye as d,
  Fe as u
};
//# sourceMappingURL=focusTrapComponent-BH_rQxeR.js.map
