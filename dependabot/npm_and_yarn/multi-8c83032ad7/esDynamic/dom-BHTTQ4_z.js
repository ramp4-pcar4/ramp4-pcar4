function G(e) {
  return e.map((t) => {
    let r = "";
    for (let n = 0; n < t; n++)
      r += ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
    return r;
  }).join("-");
}
const W = () => G([2, 1, 1, 1, 3]);
var x = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], S = /* @__PURE__ */ x.join(","), F = typeof Element > "u", d = F ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, p = !F && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e?.ownerDocument;
}, w = function e(t, r) {
  var n;
  r === void 0 && (r = !0);
  var a = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert"), u = a === "" || a === "true", i = u || r && t && e(t.parentNode);
  return i;
}, X = function(t) {
  var r, n = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "contenteditable");
  return n === "" || n === "true";
}, O = function(t, r, n) {
  if (w(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(S));
  return r && d.call(t, S) && a.unshift(t), a = a.filter(n), a;
}, D = function e(t, r, n) {
  for (var a = [], u = Array.from(t); u.length; ) {
    var i = u.shift();
    if (!w(i, !1))
      if (i.tagName === "SLOT") {
        var s = i.assignedElements(), o = s.length ? s : i.children, l = e(o, !0, n);
        n.flatten ? a.push.apply(a, l) : a.push({
          scopeParent: i,
          candidates: l
        });
      } else {
        var f = d.call(i, S);
        f && n.filter(i) && (r || !t.includes(i)) && a.push(i);
        var c = i.shadowRoot || // check for an undisclosed shadow
        typeof n.getShadowRoot == "function" && n.getShadowRoot(i), y = !w(c, !1) && (!n.shadowRootFilter || n.shadowRootFilter(i));
        if (c && y) {
          var v = e(c === !0 ? i.children : c.children, !0, n);
          n.flatten ? a.push.apply(a, v) : a.push({
            scopeParent: i,
            candidates: v
          });
        } else
          u.unshift.apply(u, i.children);
      }
  }
  return a;
}, L = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, q = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || X(t)) && !L(t) ? 0 : t.tabIndex;
}, Z = function(t, r) {
  var n = q(t);
  return n < 0 && r && !L(t) ? 0 : n;
}, z = function(t, r) {
  return t.tabIndex === r.tabIndex ? t.documentOrder - r.documentOrder : t.tabIndex - r.tabIndex;
}, B = function(t) {
  return t.tagName === "INPUT";
}, H = function(t) {
  return B(t) && t.type === "hidden";
}, K = function(t) {
  var r = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
    return n.tagName === "SUMMARY";
  });
  return r;
}, Y = function(t, r) {
  for (var n = 0; n < t.length; n++)
    if (t[n].checked && t[n].form === r)
      return t[n];
}, J = function(t) {
  if (!t.name)
    return !0;
  var r = t.form || p(t), n = function(s) {
    return r.querySelectorAll('input[type="radio"][name="' + s + '"]');
  }, a;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    a = n(window.CSS.escape(t.name));
  else
    try {
      a = n(t.name);
    } catch (i) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", i.message), !1;
    }
  var u = Y(a, t.form);
  return !u || u === t;
}, Q = function(t) {
  return B(t) && t.type === "radio";
}, V = function(t) {
  return Q(t) && !J(t);
}, _ = function(t) {
  var r, n = t && p(t), a = (r = n) === null || r === void 0 ? void 0 : r.host, u = !1;
  if (n && n !== t) {
    var i, s, o;
    for (u = !!((i = a) !== null && i !== void 0 && (s = i.ownerDocument) !== null && s !== void 0 && s.contains(a) || t != null && (o = t.ownerDocument) !== null && o !== void 0 && o.contains(t)); !u && a; ) {
      var l, f, c;
      n = p(a), a = (l = n) === null || l === void 0 ? void 0 : l.host, u = !!((f = a) !== null && f !== void 0 && (c = f.ownerDocument) !== null && c !== void 0 && c.contains(a));
    }
  }
  return u;
}, N = function(t) {
  var r = t.getBoundingClientRect(), n = r.width, a = r.height;
  return n === 0 && a === 0;
}, tt = function(t, r) {
  var n = r.displayCheck, a = r.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var u = d.call(t, "details>summary:first-of-type"), i = u ? t.parentElement : t;
  if (d.call(i, "details:not([open]) *"))
    return !0;
  if (!n || n === "full" || n === "legacy-full") {
    if (typeof a == "function") {
      for (var s = t; t; ) {
        var o = t.parentElement, l = p(t);
        if (o && !o.shadowRoot && a(o) === !0)
          return N(t);
        t.assignedSlot ? t = t.assignedSlot : !o && l !== t.ownerDocument ? t = l.host : t = o;
      }
      t = s;
    }
    if (_(t))
      return !t.getClientRects().length;
    if (n !== "legacy-full")
      return !0;
  } else if (n === "non-zero-area")
    return N(t);
  return !1;
}, et = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var r = t.parentElement; r; ) {
      if (r.tagName === "FIELDSET" && r.disabled) {
        for (var n = 0; n < r.children.length; n++) {
          var a = r.children.item(n);
          if (a.tagName === "LEGEND")
            return d.call(r, "fieldset[disabled] *") ? !0 : !a.contains(t);
        }
        return !0;
      }
      r = r.parentElement;
    }
  return !1;
}, T = function(t, r) {
  return !(r.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  w(r) || H(r) || tt(r, t) || // For a details element with a summary, the summary element gets the focus
  K(r) || et(r));
}, I = function(t, r) {
  return !(V(r) || q(r) < 0 || !T(t, r));
}, rt = function(t) {
  var r = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(r) || r >= 0);
}, nt = function e(t) {
  var r = [], n = [];
  return t.forEach(function(a, u) {
    var i = !!a.scopeParent, s = i ? a.scopeParent : a, o = Z(s, i), l = i ? e(a.candidates) : s;
    o === 0 ? i ? r.push.apply(r, l) : r.push(s) : n.push({
      documentOrder: u,
      tabIndex: o,
      item: a,
      isScope: i,
      content: l
    });
  }), n.sort(z).reduce(function(a, u) {
    return u.isScope ? a.push.apply(a, u.content) : a.push(u.content), a;
  }, []).concat(r);
}, at = function(t, r) {
  r = r || {};
  var n;
  return r.getShadowRoot ? n = D([t], r.includeContainer, {
    filter: I.bind(null, r),
    flatten: !1,
    getShadowRoot: r.getShadowRoot,
    shadowRootFilter: rt
  }) : n = O(t, r.includeContainer, I.bind(null, r)), nt(n);
}, Tt = function(t, r) {
  r = r || {};
  var n;
  return r.getShadowRoot ? n = D([t], r.includeContainer, {
    filter: T.bind(null, r),
    flatten: !0,
    getShadowRoot: r.getShadowRoot
  }) : n = O(t, r.includeContainer, T.bind(null, r)), n;
}, At = function(t, r) {
  if (r = r || {}, !t)
    throw new Error("No node provided");
  return d.call(t, S) === !1 ? !1 : I(r, t);
}, it = /* @__PURE__ */ x.concat("iframe").join(","), Et = function(t, r) {
  if (r = r || {}, !t)
    throw new Error("No node provided");
  return d.call(t, it) === !1 ? !1 : T(r, t);
};
const ut = {
  getShadowRoot: !0
};
function Ct(e) {
  return e ? e.id = e.id || `${e.tagName.toLowerCase()}-${W()}` : "";
}
function It(e) {
  const t = "dir", r = `[${t}]`, n = M(e, r);
  return n ? n.getAttribute(t) : "ltr";
}
function k(e) {
  return e.getRootNode();
}
function P(e) {
  return e.host || null;
}
function ot(e, { selector: t, id: r }) {
  if (!e)
    return null;
  e.assignedSlot && (e = e.assignedSlot);
  const n = k(e);
  return (r ? "getElementById" in n ? (
    /*
      Check to make sure 'getElementById' exists in cases where element is no longer connected to the DOM and getRootNode() returns the element.
      https://github.com/Esri/calcite-design-system/pull/4280
       */
    n.getElementById(r)
  ) : null : t ? n.querySelector(t) : null) || ot(P(n), { selector: t, id: r });
}
function M(e, t) {
  return e ? e.closest(t) || M(P(k(e)), t) : null;
}
function st(e, t) {
  return j(e, t);
}
function j(e, t) {
  if (!e)
    return;
  const r = t(e);
  if (r !== void 0)
    return r;
  const { parentNode: n } = e;
  return j(n instanceof ShadowRoot ? n.host : n, t);
}
function Nt(e, t) {
  return !!st(t, (r) => r === e ? !0 : void 0);
}
function lt(e) {
  return typeof e?.setFocus == "function";
}
async function Rt(e) {
  if (e)
    return lt(e) ? e.setFocus() : e.focus();
}
function ct(e) {
  if (e)
    return at(e, ut)[0] ?? e;
}
function xt(e) {
  ct(e)?.focus();
}
const g = ":not([slot])";
function Ft(e, t, r) {
  t && !Array.isArray(t) && typeof t != "string" && (r = t, t = null);
  const n = t ? Array.isArray(t) ? t.map((a) => `[slot="${a}"]`).join(",") : `[slot="${t}"]` : g;
  return r?.all ? ft(e, n, r) : dt(e, n, r);
}
function $(e, t) {
  return e ? Array.from(e.children || []).filter((r) => r?.matches(t)) : [];
}
function ft(e, t, r) {
  let n = t === g ? $(e, g) : Array.from(e.querySelectorAll(t));
  n = r && r.direct === !1 ? n : n.filter((u) => u.parentElement === e), n = r?.matches ? n.filter((u) => u?.matches(r.matches)) : n;
  const a = r?.selector;
  return a ? n.map((u) => Array.from(u.querySelectorAll(a))).reduce((u, i) => [...u, ...i], []).filter((u) => !!u) : n;
}
function dt(e, t, r) {
  let n = t === g ? $(e, g)[0] || null : e.querySelector(t);
  n = r && r.direct === !1 || n?.parentElement === e ? n : null, n = r?.matches ? n?.matches(r.matches) ? n : null : n;
  const a = r?.selector;
  return a ? n?.querySelector(a) : n;
}
function vt(e, t) {
  return e.filter((r) => r.matches(t));
}
function Ot(e, t, r) {
  if (typeof t == "string" && t !== "")
    return t;
  if (t === "")
    return e[r];
}
function Dt(e) {
  return (!!e).toString();
}
function Lt(e) {
  return yt(e) || bt(e);
}
function ht(e) {
  return gt(e).filter((t) => t.nodeType === Node.TEXT_NODE).map((t) => t.textContent).join("").trim();
}
function bt(e) {
  return !!ht(e);
}
function gt(e) {
  return e.currentTarget.assignedNodes({
    flatten: !0
  });
}
function yt(e) {
  return !!mt(e).length;
}
function mt(e, t) {
  return St(e.target, t);
}
function St(e, t) {
  const r = e.assignedElements({
    flatten: !0
  });
  return t ? vt(r, t) : r;
}
function qt(e) {
  return !!(e.isPrimary && e.button === 0);
}
function Bt(e) {
  return e.detail === 0;
}
function kt(e, t) {
  if (e.parentNode !== t.parentNode)
    return !1;
  const r = Array.from(e.parentNode.children);
  return r.indexOf(e) < r.indexOf(t);
}
async function Pt(e, t, r, n) {
  return pt(e, t, "transition", r, n);
}
async function pt(e, t, r, n, a) {
  const u = window.getComputedStyle(e), i = u.transitionDuration, s = u.transitionProperty, o = i.split(","), f = s.split(",").map((m) => m.trim()).indexOf(t), c = o[f] ?? /* Safari will have a single duration value for the shorthand prop when multiple, separate names/props are defined,
          so we fall back to it if there's no matching prop duration */
  o[0];
  function y() {
    requestAnimationFrame(() => {
      n?.(), requestAnimationFrame(() => a?.());
    });
  }
  if (c === "0s") {
    y();
    return;
  }
  const v = "transitionstart", A = "transitionend", E = "transitioncancel";
  return new Promise((m) => {
    const U = window.setTimeout(() => {
      e.removeEventListener(v, C), e.removeEventListener(A, h), e.removeEventListener(E, h), y(), m();
    }, parseFloat(c) * 1e3);
    e.addEventListener(v, C), e.addEventListener(A, h), e.addEventListener(E, h);
    function C(b) {
      b.target === e && R(b) === t && (window.clearTimeout(U), e.removeEventListener(v, C), n?.());
    }
    function h(b) {
      b.target === e && R(b) === t && (e.removeEventListener(A, h), e.removeEventListener(E, h), a?.(), m());
    }
  });
}
function wt(e) {
  return "propertyName" in e;
}
function R(e) {
  return wt(e) ? e.propertyName : e.animationName;
}
export {
  W as a,
  ut as b,
  M as c,
  Et as d,
  at as e,
  Rt as f,
  It as g,
  Tt as h,
  kt as i,
  At as j,
  q as k,
  yt as l,
  Nt as m,
  Ft as n,
  xt as o,
  Ct as p,
  ot as q,
  Ot as r,
  Lt as s,
  Dt as t,
  mt as u,
  ct as v,
  Pt as w,
  qt as x,
  Bt as y
};
//# sourceMappingURL=dom-BHTTQ4_z.js.map
