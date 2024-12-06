import { g as D } from "./guid-Dls486Er.js";
var w = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], h = /* @__PURE__ */ w.join(","), T = typeof Element > "u", f = T ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, b = !T && Element.prototype.getRootNode ? function(r) {
  var t;
  return r == null || (t = r.getRootNode) === null || t === void 0 ? void 0 : t.call(r);
} : function(r) {
  return r?.ownerDocument;
}, g = function r(t, e) {
  var a;
  e === void 0 && (e = !0);
  var n = t == null || (a = t.getAttribute) === null || a === void 0 ? void 0 : a.call(t, "inert"), i = n === "" || n === "true", u = i || e && t && r(t.parentNode);
  return u;
}, B = function(t) {
  var e, a = t == null || (e = t.getAttribute) === null || e === void 0 ? void 0 : e.call(t, "contenteditable");
  return a === "" || a === "true";
}, C = function(t, e, a) {
  if (g(t))
    return [];
  var n = Array.prototype.slice.apply(t.querySelectorAll(h));
  return e && f.call(t, h) && n.unshift(t), n = n.filter(a), n;
}, A = function r(t, e, a) {
  for (var n = [], i = Array.from(t); i.length; ) {
    var u = i.shift();
    if (!g(u, !1))
      if (u.tagName === "SLOT") {
        var l = u.assignedElements(), s = l.length ? l : u.children, o = r(s, !0, a);
        a.flatten ? n.push.apply(n, o) : n.push({
          scopeParent: u,
          candidates: o
        });
      } else {
        var d = f.call(u, h);
        d && a.filter(u) && (e || !t.includes(u)) && n.push(u);
        var c = u.shadowRoot || // check for an undisclosed shadow
        typeof a.getShadowRoot == "function" && a.getShadowRoot(u), q = !g(c, !1) && (!a.shadowRootFilter || a.shadowRootFilter(u));
        if (c && q) {
          var m = r(c === !0 ? u.children : c.children, !0, a);
          a.flatten ? n.push.apply(n, m) : n.push({
            scopeParent: u,
            candidates: m
          });
        } else
          i.unshift.apply(i, u.children);
      }
  }
  return n;
}, E = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, I = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || B(t)) && !E(t) ? 0 : t.tabIndex;
}, k = function(t, e) {
  var a = I(t);
  return a < 0 && e && !E(t) ? 0 : a;
}, M = function(t, e) {
  return t.tabIndex === e.tabIndex ? t.documentOrder - e.documentOrder : t.tabIndex - e.tabIndex;
}, R = function(t) {
  return t.tagName === "INPUT";
}, P = function(t) {
  return R(t) && t.type === "hidden";
}, L = function(t) {
  var e = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(a) {
    return a.tagName === "SUMMARY";
  });
  return e;
}, $ = function(t, e) {
  for (var a = 0; a < t.length; a++)
    if (t[a].checked && t[a].form === e)
      return t[a];
}, j = function(t) {
  if (!t.name)
    return !0;
  var e = t.form || b(t), a = function(l) {
    return e.querySelectorAll('input[type="radio"][name="' + l + '"]');
  }, n;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    n = a(window.CSS.escape(t.name));
  else
    try {
      n = a(t.name);
    } catch (u) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", u.message), !1;
    }
  var i = $(n, t.form);
  return !i || i === t;
}, U = function(t) {
  return R(t) && t.type === "radio";
}, G = function(t) {
  return U(t) && !j(t);
}, W = function(t) {
  var e, a = t && b(t), n = (e = a) === null || e === void 0 ? void 0 : e.host, i = !1;
  if (a && a !== t) {
    var u, l, s;
    for (i = !!((u = n) !== null && u !== void 0 && (l = u.ownerDocument) !== null && l !== void 0 && l.contains(n) || t != null && (s = t.ownerDocument) !== null && s !== void 0 && s.contains(t)); !i && n; ) {
      var o, d, c;
      a = b(n), n = (o = a) === null || o === void 0 ? void 0 : o.host, i = !!((d = n) !== null && d !== void 0 && (c = d.ownerDocument) !== null && c !== void 0 && c.contains(n));
    }
  }
  return i;
}, p = function(t) {
  var e = t.getBoundingClientRect(), a = e.width, n = e.height;
  return a === 0 && n === 0;
}, X = function(t, e) {
  var a = e.displayCheck, n = e.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var i = f.call(t, "details>summary:first-of-type"), u = i ? t.parentElement : t;
  if (f.call(u, "details:not([open]) *"))
    return !0;
  if (!a || a === "full" || a === "legacy-full") {
    if (typeof n == "function") {
      for (var l = t; t; ) {
        var s = t.parentElement, o = b(t);
        if (s && !s.shadowRoot && n(s) === !0)
          return p(t);
        t.assignedSlot ? t = t.assignedSlot : !s && o !== t.ownerDocument ? t = o.host : t = s;
      }
      t = l;
    }
    if (W(t))
      return !t.getClientRects().length;
    if (a !== "legacy-full")
      return !0;
  } else if (a === "non-zero-area")
    return p(t);
  return !1;
}, Z = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var e = t.parentElement; e; ) {
      if (e.tagName === "FIELDSET" && e.disabled) {
        for (var a = 0; a < e.children.length; a++) {
          var n = e.children.item(a);
          if (n.tagName === "LEGEND")
            return f.call(e, "fieldset[disabled] *") ? !0 : !n.contains(t);
        }
        return !0;
      }
      e = e.parentElement;
    }
  return !1;
}, y = function(t, e) {
  return !(e.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  g(e) || P(e) || X(e, t) || // For a details element with a summary, the summary element gets the focus
  L(e) || Z(e));
}, S = function(t, e) {
  return !(G(e) || I(e) < 0 || !y(t, e));
}, z = function(t) {
  var e = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(e) || e >= 0);
}, H = function r(t) {
  var e = [], a = [];
  return t.forEach(function(n, i) {
    var u = !!n.scopeParent, l = u ? n.scopeParent : n, s = k(l, u), o = u ? r(n.candidates) : l;
    s === 0 ? u ? e.push.apply(e, o) : e.push(l) : a.push({
      documentOrder: i,
      tabIndex: s,
      item: n,
      isScope: u,
      content: o
    });
  }), a.sort(M).reduce(function(n, i) {
    return i.isScope ? n.push.apply(n, i.content) : n.push(i.content), n;
  }, []).concat(e);
}, Y = function(t, e) {
  e = e || {};
  var a;
  return e.getShadowRoot ? a = A([t], e.includeContainer, {
    filter: S.bind(null, e),
    flatten: !1,
    getShadowRoot: e.getShadowRoot,
    shadowRootFilter: z
  }) : a = C(t, e.includeContainer, S.bind(null, e)), H(a);
}, ot = function(t, e) {
  e = e || {};
  var a;
  return e.getShadowRoot ? a = A([t], e.includeContainer, {
    filter: y.bind(null, e),
    flatten: !0,
    getShadowRoot: e.getShadowRoot
  }) : a = C(t, e.includeContainer, y.bind(null, e)), a;
}, ct = function(t, e) {
  if (e = e || {}, !t)
    throw new Error("No node provided");
  return f.call(t, h) === !1 ? !1 : S(e, t);
}, J = /* @__PURE__ */ w.concat("iframe").join(","), ft = function(t, e) {
  if (e = e || {}, !t)
    throw new Error("No node provided");
  return f.call(t, J) === !1 ? !1 : y(e, t);
};
const K = {
  getShadowRoot: !0
};
function dt(r) {
  return r ? r.id = r.id || `${r.tagName.toLowerCase()}-${D()}` : "";
}
function vt(r) {
  const t = "dir", e = `[${t}]`, a = Q(r, e);
  return a ? a.getAttribute(t) : "ltr";
}
function N(r) {
  return r.getRootNode();
}
function x(r) {
  return r.host || null;
}
function ht(r, { selector: t, id: e }) {
  function a(n) {
    if (!n)
      return null;
    n.assignedSlot && (n = n.assignedSlot);
    const i = N(n), u = e ? "getElementById" in i ? (
      /*
      Check to make sure 'getElementById' exists in cases where element is no longer connected to the DOM and getRootNode() returns the element.
      https://github.com/Esri/calcite-design-system/pull/4280
       */
      i.getElementById(e)
    ) : null : t ? i.querySelector(t) : null, l = x(i);
    return u || (l ? a(l) : null);
  }
  return a(r);
}
function Q(r, t) {
  function e(a) {
    return a ? a.closest(t) || e(x(N(a))) : null;
  }
  return e(r);
}
function V(r, t) {
  return F(r, t);
}
function F(r, t) {
  if (!r)
    return;
  const e = t(r);
  if (e !== void 0)
    return e;
  const { parentNode: a } = r;
  return F(a instanceof ShadowRoot ? a.host : a, t);
}
function bt(r, t) {
  return !!V(t, (e) => e === r ? !0 : void 0);
}
function _(r) {
  return typeof r?.setFocus == "function";
}
async function gt(r) {
  if (r)
    return _(r) ? r.setFocus() : r.focus();
}
function tt(r) {
  if (r)
    return Y(r, K)[0] ?? r;
}
function yt(r) {
  tt(r)?.focus();
}
const v = ":not([slot])";
function St(r, t, e) {
  t && !Array.isArray(t) && typeof t != "string" && (e = t, t = null);
  const a = t ? Array.isArray(t) ? t.map((n) => `[slot="${n}"]`).join(",") : `[slot="${t}"]` : v;
  return e?.all ? et(r, a, e) : rt(r, a, e);
}
function O(r, t) {
  return r ? Array.from(r.children || []).filter((e) => e?.matches(t)) : [];
}
function et(r, t, e) {
  let a = t === v ? O(r, v) : Array.from(r.querySelectorAll(t));
  a = e && e.direct === !1 ? a : a.filter((i) => i.parentElement === r), a = e?.matches ? a.filter((i) => i?.matches(e.matches)) : a;
  const n = e?.selector;
  return n ? a.map((i) => Array.from(i.querySelectorAll(n))).reduce((i, u) => [...i, ...u], []).filter((i) => !!i) : a;
}
function rt(r, t, e) {
  let a = t === v ? O(r, v)[0] || null : r.querySelector(t);
  a = e && e.direct === !1 || a?.parentElement === r ? a : null, a = e?.matches ? a?.matches(e.matches) ? a : null : a;
  const n = e?.selector;
  return n ? a?.querySelector(n) : a;
}
function mt(r, t, e) {
  if (typeof t == "string" && t !== "")
    return t;
  if (t === "")
    return r[e];
}
function pt(r) {
  return (!!r).toString();
}
function wt(r) {
  return ut(r) || nt(r);
}
function at(r) {
  return it(r).filter((t) => t.nodeType === Node.TEXT_NODE).map((t) => t.textContent).join("").trim();
}
function nt(r) {
  return !!at(r);
}
function it(r) {
  return r.target.assignedNodes({
    flatten: !0
  });
}
function ut(r) {
  return !!lt(r).length;
}
function lt(r) {
  return r.target.assignedElements({
    flatten: !0
  });
}
function Tt(r) {
  return !!(r.isPrimary && r.button === 0);
}
function Ct(r, t) {
  if (r.parentNode !== t.parentNode)
    return !1;
  const e = Array.from(r.parentNode.children);
  return e.indexOf(r) < e.indexOf(t);
}
export {
  St as a,
  gt as b,
  Q as c,
  K as d,
  dt as e,
  yt as f,
  vt as g,
  ft as h,
  Ct as i,
  Y as j,
  ot as k,
  ct as l,
  I as m,
  wt as n,
  mt as o,
  lt as p,
  ht as q,
  tt as r,
  ut as s,
  pt as t,
  bt as u,
  Tt as v
};
//# sourceMappingURL=dom-DkH2gtZS.js.map
