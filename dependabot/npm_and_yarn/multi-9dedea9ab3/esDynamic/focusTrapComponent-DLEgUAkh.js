import { f as ae, b as ne, d as G, e as re, h as oe, j as N, k as K } from "./dom-BHTTQ4_z.js";
import { eS as ie } from "./main-DMoCLB29.js";
function ue(i, a, u) {
  return (a = ce(a)) in i ? Object.defineProperty(i, a, {
    value: u,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[a] = u, i;
}
function Q(i, a) {
  var u = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(i);
    a && (o = o.filter(function(b) {
      return Object.getOwnPropertyDescriptor(i, b).enumerable;
    })), u.push.apply(u, o);
  }
  return u;
}
function W(i) {
  for (var a = 1; a < arguments.length; a++) {
    var u = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Q(Object(u), !0).forEach(function(o) {
      ue(i, o, u[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(u)) : Q(Object(u)).forEach(function(o) {
      Object.defineProperty(i, o, Object.getOwnPropertyDescriptor(u, o));
    });
  }
  return i;
}
function se(i, a) {
  if (typeof i != "object" || !i) return i;
  var u = i[Symbol.toPrimitive];
  if (u !== void 0) {
    var o = u.call(i, a || "default");
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(i);
}
function ce(i) {
  var a = se(i, "string");
  return typeof a == "symbol" ? a : a + "";
}
var X = {
  activateTrap: function(a, u) {
    if (a.length > 0) {
      var o = a[a.length - 1];
      o !== u && o.pause();
    }
    var b = a.indexOf(u);
    b === -1 || a.splice(b, 1), a.push(u);
  },
  deactivateTrap: function(a, u) {
    var o = a.indexOf(u);
    o !== -1 && a.splice(o, 1), a.length > 0 && a[a.length - 1].unpause();
  }
}, fe = function(a) {
  return a.tagName && a.tagName.toLowerCase() === "input" && typeof a.select == "function";
}, le = function(a) {
  return a?.key === "Escape" || a?.key === "Esc" || a?.keyCode === 27;
}, B = function(a) {
  return a?.key === "Tab" || a?.keyCode === 9;
}, de = function(a) {
  return B(a) && !a.shiftKey;
}, ve = function(a) {
  return B(a) && a.shiftKey;
}, Z = function(a) {
  return setTimeout(a, 0);
}, _ = function(a, u) {
  var o = -1;
  return a.every(function(b, s) {
    return u(b) ? (o = s, !1) : !0;
  }), o;
}, L = function(a) {
  for (var u = arguments.length, o = new Array(u > 1 ? u - 1 : 0), b = 1; b < u; b++)
    o[b - 1] = arguments[b];
  return typeof a == "function" ? a.apply(void 0, o) : a;
}, C = function(a) {
  return a.target.shadowRoot && typeof a.composedPath == "function" ? a.composedPath()[0] : a.target;
}, be = [], pe = function(a, u) {
  var o = u?.document || document, b = u?.trapStack || be, s = W({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: de,
    isKeyBackward: ve
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
  }, y, h = function(e, t, r) {
    return e && e[t] !== void 0 ? e[t] : s[r || t];
  }, T = function(e, t) {
    var r = typeof t?.composedPath == "function" ? t.composedPath() : void 0;
    return n.containerGroups.findIndex(function(c) {
      var f = c.container, d = c.tabbableNodes;
      return f.contains(e) || r?.includes(f) || d.find(function(v) {
        return v === e;
      });
    });
  }, E = function(e) {
    var t = s[e];
    if (typeof t == "function") {
      for (var r = arguments.length, c = new Array(r > 1 ? r - 1 : 0), f = 1; f < r; f++)
        c[f - 1] = arguments[f];
      t = t.apply(void 0, c);
    }
    if (t === !0 && (t = void 0), !t) {
      if (t === void 0 || t === !1)
        return t;
      throw new Error("`".concat(e, "` was specified but was not a node, or did not return a node"));
    }
    var d = t;
    if (typeof t == "string" && (d = o.querySelector(t), !d))
      throw new Error("`".concat(e, "` as selector refers to no known node"));
    return d;
  }, k = function() {
    var e = E("initialFocus");
    if (e === !1)
      return !1;
    if (e === void 0 || !G(e, s.tabbableOptions))
      if (T(o.activeElement) >= 0)
        e = o.activeElement;
      else {
        var t = n.tabbableGroups[0], r = t && t.firstTabbableNode;
        e = r || E("fallbackFocus");
      }
    if (!e)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return e;
  }, D = function() {
    if (n.containerGroups = n.containers.map(function(e) {
      var t = re(e, s.tabbableOptions), r = oe(e, s.tabbableOptions), c = t.length > 0 ? t[0] : void 0, f = t.length > 0 ? t[t.length - 1] : void 0, d = r.find(function(p) {
        return N(p);
      }), v = r.slice().reverse().find(function(p) {
        return N(p);
      }), m = !!t.find(function(p) {
        return K(p) > 0;
      });
      return {
        container: e,
        tabbableNodes: t,
        focusableNodes: r,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: m,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: c,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: f,
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
        nextTabbableNode: function(F) {
          var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, w = t.indexOf(F);
          return w < 0 ? O ? r.slice(r.indexOf(F) + 1).find(function(R) {
            return N(R);
          }) : r.slice(0, r.indexOf(F)).reverse().find(function(R) {
            return N(R);
          }) : t[w + (O ? 1 : -1)];
        }
      };
    }), n.tabbableGroups = n.containerGroups.filter(function(e) {
      return e.tabbableNodes.length > 0;
    }), n.tabbableGroups.length <= 0 && !E("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (n.containerGroups.find(function(e) {
      return e.posTabIndexesFound;
    }) && n.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, S = function(e) {
    var t = e.activeElement;
    if (t)
      return t.shadowRoot && t.shadowRoot.activeElement !== null ? S(t.shadowRoot) : t;
  }, g = function(e) {
    if (e !== !1 && e !== S(document)) {
      if (!e || !e.focus) {
        g(k());
        return;
      }
      e.focus({
        preventScroll: !!s.preventScroll
      }), n.mostRecentlyFocusedNode = e, fe(e) && e.select();
    }
  }, U = function(e) {
    var t = E("setReturnFocus", e);
    return t || (t === !1 ? !1 : e);
  }, q = function(e) {
    var t = e.target, r = e.event, c = e.isBackward, f = c === void 0 ? !1 : c;
    t = t || C(r), D();
    var d = null;
    if (n.tabbableGroups.length > 0) {
      var v = T(t, r), m = v >= 0 ? n.containerGroups[v] : void 0;
      if (v < 0)
        f ? d = n.tabbableGroups[n.tabbableGroups.length - 1].lastTabbableNode : d = n.tabbableGroups[0].firstTabbableNode;
      else if (f) {
        var p = _(n.tabbableGroups, function(I) {
          var x = I.firstTabbableNode;
          return t === x;
        });
        if (p < 0 && (m.container === t || G(t, s.tabbableOptions) && !N(t, s.tabbableOptions) && !m.nextTabbableNode(t, !1)) && (p = v), p >= 0) {
          var F = p === 0 ? n.tabbableGroups.length - 1 : p - 1, O = n.tabbableGroups[F];
          d = K(t) >= 0 ? O.lastTabbableNode : O.lastDomTabbableNode;
        } else B(r) || (d = m.nextTabbableNode(t, !1));
      } else {
        var w = _(n.tabbableGroups, function(I) {
          var x = I.lastTabbableNode;
          return t === x;
        });
        if (w < 0 && (m.container === t || G(t, s.tabbableOptions) && !N(t, s.tabbableOptions) && !m.nextTabbableNode(t)) && (w = v), w >= 0) {
          var R = w === n.tabbableGroups.length - 1 ? 0 : w + 1, J = n.tabbableGroups[R];
          d = K(t) >= 0 ? J.firstTabbableNode : J.firstDomTabbableNode;
        } else B(r) || (d = m.nextTabbableNode(t));
      }
    } else
      d = E("fallbackFocus");
    return d;
  }, j = function(e) {
    var t = C(e);
    if (!(T(t, e) >= 0)) {
      if (L(s.clickOutsideDeactivates, e)) {
        y.deactivate({
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
      L(s.allowOutsideClick, e) || e.preventDefault();
    }
  }, H = function(e) {
    var t = C(e), r = T(t, e) >= 0;
    if (r || t instanceof Document)
      r && (n.mostRecentlyFocusedNode = t);
    else {
      e.stopImmediatePropagation();
      var c, f = !0;
      if (n.mostRecentlyFocusedNode)
        if (K(n.mostRecentlyFocusedNode) > 0) {
          var d = T(n.mostRecentlyFocusedNode), v = n.containerGroups[d].tabbableNodes;
          if (v.length > 0) {
            var m = v.findIndex(function(p) {
              return p === n.mostRecentlyFocusedNode;
            });
            m >= 0 && (s.isKeyForward(n.recentNavEvent) ? m + 1 < v.length && (c = v[m + 1], f = !1) : m - 1 >= 0 && (c = v[m - 1], f = !1));
          }
        } else
          n.containerGroups.some(function(p) {
            return p.tabbableNodes.some(function(F) {
              return K(F) > 0;
            });
          }) || (f = !1);
      else
        f = !1;
      f && (c = q({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: n.mostRecentlyFocusedNode,
        isBackward: s.isKeyBackward(n.recentNavEvent)
      })), g(c || n.mostRecentlyFocusedNode || k());
    }
    n.recentNavEvent = void 0;
  }, ee = function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    n.recentNavEvent = e;
    var r = q({
      event: e,
      isBackward: t
    });
    r && (B(e) && e.preventDefault(), g(r));
  }, M = function(e) {
    (s.isKeyForward(e) || s.isKeyBackward(e)) && ee(e, s.isKeyBackward(e));
  }, Y = function(e) {
    le(e) && L(s.escapeDeactivates, e) !== !1 && (e.preventDefault(), y.deactivate());
  }, V = function(e) {
    var t = C(e);
    T(t, e) >= 0 || L(s.clickOutsideDeactivates, e) || L(s.allowOutsideClick, e) || (e.preventDefault(), e.stopImmediatePropagation());
  }, $ = function() {
    if (n.active)
      return X.activateTrap(b, y), n.delayInitialFocusTimer = s.delayInitialFocus ? Z(function() {
        g(k());
      }) : g(k()), o.addEventListener("focusin", H, !0), o.addEventListener("mousedown", j, {
        capture: !0,
        passive: !1
      }), o.addEventListener("touchstart", j, {
        capture: !0,
        passive: !1
      }), o.addEventListener("click", V, {
        capture: !0,
        passive: !1
      }), o.addEventListener("keydown", M, {
        capture: !0,
        passive: !1
      }), o.addEventListener("keydown", Y), y;
  }, z = function() {
    if (n.active)
      return o.removeEventListener("focusin", H, !0), o.removeEventListener("mousedown", j, !0), o.removeEventListener("touchstart", j, !0), o.removeEventListener("click", V, !0), o.removeEventListener("keydown", M, !0), o.removeEventListener("keydown", Y), y;
  }, te = function(e) {
    var t = e.some(function(r) {
      var c = Array.from(r.removedNodes);
      return c.some(function(f) {
        return f === n.mostRecentlyFocusedNode;
      });
    });
    t && g(k());
  }, A = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(te) : void 0, P = function() {
    A && (A.disconnect(), n.active && !n.paused && n.containers.map(function(e) {
      A.observe(e, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return y = {
    get active() {
      return n.active;
    },
    get paused() {
      return n.paused;
    },
    activate: function(e) {
      if (n.active)
        return this;
      var t = h(e, "onActivate"), r = h(e, "onPostActivate"), c = h(e, "checkCanFocusTrap");
      c || D(), n.active = !0, n.paused = !1, n.nodeFocusedBeforeActivation = o.activeElement, t?.();
      var f = function() {
        c && D(), $(), P(), r?.();
      };
      return c ? (c(n.containers.concat()).then(f, f), this) : (f(), this);
    },
    deactivate: function(e) {
      if (!n.active)
        return this;
      var t = W({
        onDeactivate: s.onDeactivate,
        onPostDeactivate: s.onPostDeactivate,
        checkCanReturnFocus: s.checkCanReturnFocus
      }, e);
      clearTimeout(n.delayInitialFocusTimer), n.delayInitialFocusTimer = void 0, z(), n.active = !1, n.paused = !1, P(), X.deactivateTrap(b, y);
      var r = h(t, "onDeactivate"), c = h(t, "onPostDeactivate"), f = h(t, "checkCanReturnFocus"), d = h(t, "returnFocus", "returnFocusOnDeactivate");
      r?.();
      var v = function() {
        Z(function() {
          d && g(U(n.nodeFocusedBeforeActivation)), c?.();
        });
      };
      return d && f ? (f(U(n.nodeFocusedBeforeActivation)).then(v, v), this) : (v(), this);
    },
    pause: function(e) {
      if (n.paused || !n.active)
        return this;
      var t = h(e, "onPause"), r = h(e, "onPostPause");
      return n.paused = !0, t?.(), z(), P(), r?.(), this;
    },
    unpause: function(e) {
      if (!n.paused || !n.active)
        return this;
      var t = h(e, "onUnpause"), r = h(e, "onPostUnpause");
      return n.paused = !1, t?.(), D(), $(), P(), r?.(), this;
    },
    updateContainerElements: function(e) {
      var t = [].concat(e).filter(Boolean);
      return n.containers = t.map(function(r) {
        return typeof r == "string" ? o.querySelector(r) : r;
      }), n.active && D(), P(), this;
    }
  }, y.updateContainerElements(a), y;
};
function ye(i, a) {
  const { el: u } = i, o = u;
  if (!o)
    return;
  const b = {
    clickOutsideDeactivates: !0,
    escapeDeactivates: !1,
    fallbackFocus: o,
    setReturnFocus: (s) => (ae(s), !1),
    ...a?.focusTrapOptions,
    // the following options are not overridable
    document: u.ownerDocument,
    tabbableOptions: ne,
    trapStack: ie
  };
  i.focusTrap = pe(o, b);
}
function ge(i, a) {
  i.focusTrapDisabled || i.focusTrap?.activate(a);
}
function we(i, a) {
  i.focusTrap?.deactivate(a);
}
function Fe(i) {
  i.focusTrap?.updateContainerElements(i.el);
}
export {
  ge as a,
  ye as c,
  we as d,
  Fe as u
};
//# sourceMappingURL=focusTrapComponent-DLEgUAkh.js.map
