import { fC as H, bF as ee, ip as Xe, bI as Se, fH as lt, bG as Pt, bH as ut, bN as k, bT as te, im as Ge, bO as Ze, fI as ue, bU as gn, bV as mn, bP as re, bC as qe, bD as zt, iq as yr, bQ as G, i4 as ct, iP as Sr, bE as Bt, bK as bn, bR as pe, bM as ge, bS as Dt, fD as Je, i3 as cn, it as Or, mw as xr, iJ as Er, iB as ae, mx as Nr, fK as dn, kN as Et, my as ze, bJ as Tr, bL as Ie, ii as fn, mq as Cr } from "./main-BEi6lHs4.js";
import { r as Ir } from "./vue.esm-bundler-OC7J_XZK.js";
function Be(d, o, l) {
  return Math.max(o, Math.min(d, l));
}
function fe(d, o = 2) {
  return d.toFixed(o).replace(/\.?0+$/, "");
}
function vn(d) {
  return d.endsWith(".") ? NaN : (parseFloat(d) % 360 + 360) % 360 / 360;
}
function hn(d) {
  return fe(360 * d);
}
function Ke(d) {
  if (!d.endsWith("%")) return NaN;
  const o = d.substring(0, d.length - 1);
  if (o.endsWith(".")) return NaN;
  const l = parseFloat(o);
  return Number.isNaN(l) ? NaN : Be(l, 0, 100) / 100;
}
function at(d) {
  return fe(100 * d) + "%";
}
function Nt(d) {
  if (d.endsWith("%")) return Ke(d);
  if (d.endsWith(".")) return NaN;
  const o = parseFloat(d);
  return Number.isNaN(o) ? NaN : Be(o, 0, 255) / 255;
}
function Tt(d) {
  return fe(255 * d);
}
function Ct(d) {
  return d.endsWith("%") ? Ke(d) : Be(parseFloat(d), 0, 1);
}
function It(d) {
  return String(d);
}
const Vt = { hsl: { h: { to: hn, from: vn }, s: { to: at, from: Ke }, l: { to: at, from: Ke }, a: { to: It, from: Ct } }, hwb: { h: { to: hn, from: vn }, w: { to: at, from: Ke }, b: { to: at, from: Ke }, a: { to: It, from: Ct } }, rgb: { r: { to: Tt, from: Nt }, g: { to: Tt, from: Nt }, b: { to: Tt, from: Nt }, a: { to: It, from: Ct } } };
function ot(d) {
  const o = d.replace(/^#/, ""), l = [], e = o.length > 4 ? 2 : 1;
  for (let i = 0; i < o.length; i += e) {
    const r = o.slice(i, i + e);
    l.push(r.repeat(e % 2 + 1));
  }
  l.length === 3 && l.push("ff");
  const a = l.map((i) => parseInt(i, 16) / 255);
  return { r: a[0], g: a[1], b: a[2], a: a[3] };
}
function Lt(d) {
  const o = d.l < 0.5 ? d.l * (1 + d.s) : d.l + d.s - d.l * d.s, l = 2 * d.l - o;
  return { r: At(l, o, d.h + 1 / 3), g: At(l, o, d.h), b: At(l, o, d.h - 1 / 3), a: d.a };
}
function At(d, o, l) {
  return l < 0 ? l += 1 : l > 1 && (l -= 1), l < 1 / 6 ? d + 6 * (o - d) * l : l < 0.5 ? o : l < 2 / 3 ? d + (o - d) * (2 / 3 - l) * 6 : d;
}
function ke(d) {
  return { r: Mt(5, d), g: Mt(3, d), b: Mt(1, d), a: d.a };
}
function Mt(d, o) {
  const l = (d + 6 * o.h) % 6;
  return o.v - o.v * o.s * Math.max(0, Math.min(l, 4 - l, 1));
}
function Ue(d) {
  return { h: d.h, s: d.b === 1 ? 0 : 1 - d.w / (1 - d.b), v: 1 - d.b, a: d.a };
}
function We(d) {
  const o = Math.min(d.r, d.g, d.b), l = Math.max(d.r, d.g, d.b);
  let e;
  return e = l === o ? 0 : l === d.r ? (0 + (d.g - d.b) / (l - o)) / 6 : l === d.g ? (2 + (d.b - d.r) / (l - o)) / 6 : (4 + (d.r - d.g) / (l - o)) / 6, e < 0 && (e += 1), { h: e, w: o, b: 1 - l, a: d.a };
}
function Rt(d) {
  const o = We(d), l = o.w, e = 1 - o.b, a = (e + l) / 2;
  let i;
  return i = e === 0 || l === 1 ? 0 : (e - a) / Math.min(a, 1 - a), { h: o.h, s: i, l: a, a: d.a };
}
function it(d) {
  return "#" + Object.values(d).map((o) => {
    const l = 255 * o, e = Math.round(l).toString(16);
    return e.length === 1 ? "0" + e : e;
  }).join("");
}
const Lr = { hex: [["hsl", (d) => be(d, [ot, Rt])], ["hsv", (d) => be(d, [ot, We, Ue])], ["hwb", (d) => be(d, [ot, We])], ["rgb", ot]], hsl: [["hex", (d) => be(d, [Lt, it])], ["hsv", function(d) {
  const o = d.l + d.s * Math.min(d.l, 1 - d.l), l = o === 0 ? 0 : 2 - 2 * d.l / o;
  return { h: d.h, s: l, v: o, a: d.a };
}], ["hwb", (d) => be(d, [Lt, We])], ["rgb", Lt]], hsv: [["hex", (d) => be(d, [ke, it])], ["hsl", function(d) {
  const o = d.v - d.v * d.s / 2, l = Math.min(o, 1 - o), e = l === 0 ? 0 : (d.v - o) / l;
  return { h: d.h, s: e, l: o, a: d.a };
}], ["hwb", function(d) {
  return { h: d.h, w: (1 - d.s) * d.v, b: 1 - d.v, a: d.a };
}], ["rgb", ke]], hwb: [["hex", (d) => be(d, [Ue, ke, it])], ["hsl", (d) => be(d, [Ue, ke, Rt])], ["hsv", Ue], ["rgb", (d) => be(d, [Ue, ke])]], rgb: [["hex", it], ["hsl", Rt], ["hsv", (d) => be(d, [We, Ue])], ["hwb", We]] };
function be(d, o) {
  return o.reduce((l, e) => e(l), d);
}
function st(d) {
  const o = {};
  for (const l in d) o[l] = d[l];
  return o;
}
const Ar = { hex: (d, o) => o && [5, 9].includes(d.length) ? d.substring(0, d.length - (d.length - 1) / 4) : d, hsl: (d, o) => `hsl(${fe(360 * d.h)} ${fe(100 * d.s)}% ${fe(100 * d.l)}%` + (o ? ")" : ` / ${fe(d.a)})`), hwb: (d, o) => `hwb(${fe(360 * d.h)} ${fe(100 * d.w)}% ${fe(100 * d.b)}%` + (o ? ")" : ` / ${fe(d.a)})`), rgb: (d, o) => `rgb(${fe(255 * d.r)} ${fe(255 * d.g)} ${fe(255 * d.b)}` + (o ? ")" : ` / ${fe(d.a)})`) };
function pn(d, o, l) {
  return Ar[o](d, l);
}
function yn(d) {
  return /^#(?:(?:[A-F0-9]{2}){3,4}|[A-F0-9]{3,4})$/i.test(d);
}
function Mr(d) {
  if (typeof d != "string")
    return { format: function(c) {
      return Object.prototype.hasOwnProperty.call(c, "r") ? "rgb" : Object.prototype.hasOwnProperty.call(c, "w") ? "hwb" : Object.prototype.hasOwnProperty.call(c, "v") ? "hsv" : "hsl";
    }(d), color: d };
  if (yn(d)) return { format: "hex", color: d };
  if (!d.includes("(")) {
    const u = document.createElement("canvas").getContext("2d");
    u.fillStyle = d;
    const c = u.fillStyle;
    return c === "#000000" && d !== "black" ? null : { format: "hex", color: c };
  }
  const [o, l] = d.split("("), e = o.substring(0, 3), a = l.replace(/[,/)]/g, " ").replace(/\s+/g, " ").trim().split(" ");
  a.length === 3 && a.push("1");
  const i = (e + "a").split(""), r = Object.fromEntries(i.map((u, c) => [u, Vt[e][u].from(a[c])]));
  return { format: e, color: r };
}
const wt = ["hex", "hsl", "hwb", "rgb"], Rr = ["show", "hide"], wr = { class: "vacp-range-input-group" }, jr = ["for"], Fr = { class: "vacp-range-input-label-text vacp-range-input-label-text--hue" }, Dr = ["id", "value"], Vr = ["for"], Pr = { class: "vacp-range-input-label-text vacp-range-input-label-text--alpha" }, zr = ["id", "value"], Br = H("span", { class: "vacp-visually-hidden" }, "Copy color", -1), $r = H("svg", { class: "vacp-icon", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", width: "24", height: "24", viewBox: "0 0 32 32" }, [H("path", { d: "M25.313 28v-18.688h-14.625v18.688h14.625zM25.313 6.688c1.438 0 2.688 1.188 2.688 2.625v18.688c0 1.438-1.25 2.688-2.688 2.688h-14.625c-1.438 0-2.688-1.25-2.688-2.688v-18.688c0-1.438 1.25-2.625 2.688-2.625h14.625zM21.313 1.313v2.688h-16v18.688h-2.625v-18.688c0-1.438 1.188-2.688 2.625-2.688h16z", fill: "currentColor" })], -1), Hr = { class: "vacp-color-inputs" }, Ur = { class: "vacp-color-input-group" }, Wr = ["for"], Gr = H("span", { class: "vacp-color-input-label-text" }, " Hex ", -1), Kr = ["id", "value"], Xr = ["id", "for", "onInput"], Qr = { class: "vacp-color-input-label-text" }, Yr = ["id", "value", "onInput"], kr = H("span", { class: "vacp-visually-hidden" }, "Switch format", -1), Jr = H("svg", { class: "vacp-icon", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", width: "16", height: "15" }, [H("path", { d: "M8 15l5-5-1-1-4 2-4-2-1 1zm4-9l1-1-5-5-5 5 1 1 4-2z", fill: "currentColor" })], -1);
var Sn = { __name: "ColorPicker", props: { color: { type: [String, Object], default: "#ffffffff" }, id: { type: String, default: "color-picker" }, visibleFormats: { type: Array, default: () => wt, validator: (d) => d.length > 0 && d.every((o) => wt.includes(o)) }, defaultFormat: { type: String, default: "hsl", validator: (d) => wt.includes(d) }, alphaChannel: { type: String, default: "show", validator: (d) => Rr.includes(d) } }, emits: ["color-change"], setup(d, { emit: o }) {
  const l = d, e = ee(null), a = ee(null), i = ee(null);
  let r = !1;
  const u = ee(l.visibleFormats.includes(l.defaultFormat) ? l.defaultFormat : l.visibleFormats[0]), c = Xe({ hex: "#ffffffff", hsl: { h: 0, s: 0, l: 1, a: 1 }, hsv: { h: 0, s: 0, v: 1, a: 1 }, hwb: { h: 0, w: 1, b: 0, a: 1 }, rgb: { r: 1, g: 1, b: 1, a: 1 } }), h = Se(function() {
    const g = Object.keys(c[u.value]);
    return u.value !== "hex" && l.alphaChannel === "hide" ? g.slice(0, 3) : g;
  }), v = Se(function() {
    return l.alphaChannel === "hide" && [5, 9].includes(c.hex.length) ? c.hex.substring(0, c.hex.length - (c.hex.length - 1) / 4) : c.hex;
  });
  function p() {
    const g = (l.visibleFormats.findIndex((L) => L === u.value) + 1) % l.visibleFormats.length;
    u.value = l.visibleFormats[g];
  }
  function O(g) {
    r = !0, E(g);
  }
  function m(g) {
    r = !0, w(g);
  }
  function y() {
    r = !1;
  }
  function E(g) {
    g.buttons === 1 && r !== !1 && a.value instanceof HTMLElement && R(a.value, g.clientX, g.clientY);
  }
  function w(g) {
    if (r === !1 || !(a.value instanceof HTMLElement)) return;
    g.preventDefault();
    const L = g.touches[0];
    R(a.value, L.clientX, L.clientY);
  }
  function R(g, L, b) {
    const S = function(U, W, Z) {
      const X = U.getBoundingClientRect(), ie = W - X.left, ce = Z - X.top;
      return { x: X.width === 0 ? 0 : Be(ie / X.width, 0, 1), y: X.height === 0 ? 0 : Be(1 - ce / X.height, 0, 1) };
    }(g, L, b), P = st(c.hsv);
    P.s = S.x, P.v = S.y, T("hsv", P);
  }
  function M(g) {
    if (!["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"].includes(g.key)) return;
    g.preventDefault();
    const L = ["ArrowLeft", "ArrowDown"].includes(g.key) ? -1 : 1, b = ["ArrowLeft", "ArrowRight"].includes(g.key) ? "s" : "v", S = g.shiftKey ? 10 : 1, P = c.hsv[b] + L * S * 0.01, U = st(c.hsv);
    U[b] = Be(P, 0, 1), T("hsv", U);
  }
  function F(g) {
    const L = Mr(g);
    L !== null && T(L.format, L.color);
  }
  function D(g, L) {
    const b = g.currentTarget, S = st(c.hsv);
    S[L] = parseInt(b.value) / parseInt(b.max), T("hsv", S);
  }
  function V(g) {
    const L = g.target;
    yn(L.value) && T("hex", L.value);
  }
  function I(g, L) {
    const b = g.target, S = st(c[u.value]), P = Vt[u.value][L].from(b.value);
    Number.isNaN(P) || P === void 0 || (S[L] = P, T(u.value, S));
  }
  function T(g, L) {
    let b = L;
    if (l.alphaChannel === "hide") if (typeof L != "string") L.a = 1, b = L;
    else if ([5, 9].includes(L.length)) {
      const S = (L.length - 1) / 4;
      b = L.substring(0, L.length - S) + "f".repeat(S);
    } else [4, 7].includes(L.length) && (b = L + "f".repeat((L.length - 1) / 3));
    if (!function(S, P) {
      if (typeof S == "string" || typeof P == "string") return S === P;
      for (const U in S) if (S[U] !== P[U]) return !1;
      return !0;
    }(c[g], b)) {
      (function(P, U) {
        c[P] = U;
        for (const [W, Z] of Lr[P]) c[W] = Z(c[P]);
      })(g, b);
      const S = function() {
        const P = l.alphaChannel === "hide", U = pn(c[u.value], u.value, P);
        return { colors: c, cssColor: U };
      }();
      o("color-change", S);
    }
    (function() {
      e.value instanceof HTMLElement && a.value instanceof HTMLElement && i.value instanceof HTMLElement && (e.value.style.setProperty("--vacp-hsl-h", String(c.hsl.h)), e.value.style.setProperty("--vacp-hsl-s", String(c.hsl.s)), e.value.style.setProperty("--vacp-hsl-l", String(c.hsl.l)), e.value.style.setProperty("--vacp-hsl-a", String(c.hsl.a)), a.value.style.position = "relative", a.value.style.backgroundColor = "hsl(calc(var(--vacp-hsl-h) * 360) 100% 50%)", a.value.style.backgroundImage = "linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent)", i.value.style.boxSizing = "border-box", i.value.style.position = "absolute", i.value.style.left = 100 * c.hsv.s + "%", i.value.style.bottom = 100 * c.hsv.v + "%");
    })();
  }
  async function A() {
    const g = c[u.value], L = l.alphaChannel === "hide", b = pn(g, u.value, L);
    await window.navigator.clipboard.writeText(b);
  }
  function z(g, L) {
    return Vt[g][L].to(c[g][L]);
  }
  function C(g) {
    if (!["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"].includes(g.key) || !g.shiftKey) return;
    const L = g.currentTarget, b = parseFloat(L.step), S = ["ArrowLeft", "ArrowDown"].includes(g.key) ? -1 : 1, P = Be(parseFloat(L.value) + S * b * 10, parseInt(L.min), parseInt(L.max));
    L.value = String(P - S * b);
  }
  return lt(() => l.color, F), Pt(function() {
    document.addEventListener("mousemove", E, { passive: !1 }), document.addEventListener("touchmove", w, { passive: !1 }), document.addEventListener("mouseup", y), document.addEventListener("touchend", y), F(l.color);
  }), ut(function() {
    document.removeEventListener("mousemove", E), document.removeEventListener("touchmove", w), document.removeEventListener("mouseup", y), document.removeEventListener("touchend", y);
  }), (g, L) => (k(), te("div", { ref_key: "colorPicker", ref: e, class: "vacp-color-picker" }, [H("div", { ref_key: "colorSpace", ref: a, class: "vacp-color-space", onMousedown: O, onTouchstart: m }, [H("div", { ref_key: "thumb", ref: i, class: "vacp-color-space-thumb", tabindex: "0", "aria-label": "Color space thumb", onKeydown: M }, null, 544)], 544), H("div", wr, [H("label", { class: "vacp-range-input-label vacp-range-input-label--hue", for: `${d.id}-hue-slider` }, [H("span", Fr, [Ge(g.$slots, "hue-range-input-label", {}, () => [Ze("Hue")])]), H("input", { id: `${d.id}-hue-slider`, class: "vacp-range-input vacp-range-input--hue", value: 360 * c.hsv.h, type: "range", min: "0", max: "360", step: "1", onKeydownPassive: C, onInput: L[0] || (L[0] = (b) => D(b, "h")) }, null, 40, Dr)], 8, jr), d.alphaChannel === "show" ? (k(), te("label", { key: 0, class: "vacp-range-input-label vacp-range-input-label--alpha", for: `${d.id}-alpha-slider` }, [H("span", Pr, [Ge(g.$slots, "alpha-range-input-label", {}, () => [Ze("Alpha")])]), H("input", { id: `${d.id}-alpha-slider`, class: "vacp-range-input vacp-range-input--alpha", value: 100 * c.hsv.a, type: "range", min: "0", max: "100", step: "1", onKeydownPassive: C, onInput: L[1] || (L[1] = (b) => D(b, "a")) }, null, 40, zr)], 8, Vr)) : ue("v-if", !0)]), H("button", { class: "vacp-copy-button", type: "button", onClick: A }, [Ge(g.$slots, "copy-button", {}, () => [Br, $r])]), H("div", Hr, [H("div", Ur, [u.value === "hex" ? (k(), te("label", { key: 0, class: "vacp-color-input-label", for: `${d.id}-color-hex` }, [Gr, H("input", { id: `${d.id}-color-hex`, class: "vacp-color-input", type: "text", value: v.value, onInput: V }, null, 40, Kr)], 8, Wr)) : (k(!0), te(gn, { key: 1 }, mn(h.value, (b) => (k(), te("label", { id: `${d.id}-color-${u.value}-${b}-label`, key: `${d.id}-color-${u.value}-${b}-label`, class: "vacp-color-input-label", for: `${d.id}-color-${u.value}-${b}`, onInput: (S) => I(S, b) }, [H("span", Qr, re(b.toUpperCase()), 1), H("input", { id: `${d.id}-color-${u.value}-${b}`, class: "vacp-color-input", type: "text", value: z(u.value, b), onInput: (S) => I(S, b) }, null, 40, Yr)], 40, Xr))), 128))]), d.visibleFormats.length > 1 ? (k(), te("button", { key: 0, class: "vacp-format-switch-button", type: "button", onClick: p }, [Ge(g.$slots, "format-switch-button", {}, () => [kr, Jr])])) : ue("v-if", !0)])], 512));
} };
(function(d, o) {
  o === void 0 && (o = {});
  var l = o.insertAt;
  if (typeof document < "u") {
    var e = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", l === "top" && e.firstChild ? e.insertBefore(a, e.firstChild) : e.appendChild(a), a.styleSheet ? a.styleSheet.cssText = d : a.appendChild(document.createTextNode(d));
  }
})(".vacp-color-picker{--vacp-color:hsl(calc(var(--vacp-hsl-h)*360) calc(var(--vacp-hsl-s)*100%) calc(var(--vacp-hsl-l)*100%)/var(--vacp-hsl-a));--vacp-focus-color:#19f;--vacp-focus-outline:2px solid var(--vacp-focus-color);--vacp-border-width:1px;--vacp-border-color:#000;--vacp-border:var(--vacp-border-width) solid var(--vacp-border-color);--vacp-color-space-width:300px;--vacp-spacing:6px;grid-gap:var(--vacp-spacing);background-color:#fff;display:grid;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:.8em;grid-template-columns:1fr min-content;max-width:var(--vacp-color-space-width);padding:var(--vacp-spacing)}.vacp-color-picker,.vacp-color-picker *,.vacp-color-picker :after,.vacp-color-picker :before{box-sizing:border-box}.vacp-color-picker button::-moz-focus-inner{border:none;padding:0}.vacp-color-picker :focus{outline:var(--vacp-focus-outline)}.vacp-color-space{grid-column:1/-1;height:calc(var(--vacp-color-space-width)*.6);overflow:hidden}.vacp-color-space-thumb{--vacp-thumb-size:calc(var(--vacp-spacing)*4);border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color);height:var(--vacp-thumb-size);margin-bottom:calc(var(--vacp-thumb-size)*-1/2);margin-left:calc(var(--vacp-thumb-size)*-1/2);transform:rotate(0);width:var(--vacp-thumb-size)}.vacp-color-space-thumb:focus{box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color),0 0 0 3px var(--vacp-focus-color);outline-color:transparent}.vacp-range-input-label{--vacp-slider-track-width:100%;--vacp-slider-track-height:calc(var(--vacp-spacing)*3);display:block}.vacp-range-input-group{display:flex;flex-direction:column;justify-content:center}.vacp-range-input-group>:not(:first-child){margin-top:var(--vacp-spacing)}.vacp-range-input,.vacp-range-input::-webkit-slider-thumb{-webkit-appearance:none}.vacp-range-input{background:none;border:none;display:block;height:var(--vacp-slider-track-height);margin-bottom:calc(var(--vacp-spacing)/2 + 1px);margin-left:0;margin-right:0;margin-top:calc(var(--vacp-spacing)/2 + 1px);padding:0;width:var(--vacp-slider-track-width)}.vacp-range-input:focus{outline:none}.vacp-range-input::-moz-focus-outer{border:none}.vacp-range-input--alpha{background-color:#fff;background-image:linear-gradient(45deg,#eee 25%,transparent 0,transparent 75%,#eee 0,#eee),linear-gradient(45deg,#eee 25%,transparent 0,transparent 75%,#eee 0,#eee);background-position:0 0,var(--vacp-spacing) var(--vacp-spacing);background-size:calc(var(--vacp-spacing)*2) calc(var(--vacp-spacing)*2)}.vacp-range-input::-moz-range-track{border:var(--vacp-border);box-sizing:content-box;height:var(--vacp-slider-track-height);width:var(--vacp-slider-track-width)}.vacp-range-input::-webkit-slider-runnable-track{border:var(--vacp-border);box-sizing:content-box;height:var(--vacp-slider-track-height);width:var(--vacp-slider-track-width)}.vacp-range-input::-ms-track{border:var(--vacp-border);box-sizing:content-box;height:var(--vacp-slider-track-height);width:var(--vacp-slider-track-width)}.vacp-range-input:focus::-moz-range-track{outline:var(--vacp-focus-outline)}.vacp-range-input:focus::-webkit-slider-runnable-track{outline:var(--vacp-focus-outline)}.vacp-range-input:focus::-ms-track{outline:var(--vacp-focus-outline)}.vacp-range-input--alpha::-moz-range-track{background-image:linear-gradient(to right,transparent,var(--vacp-color))}.vacp-range-input--alpha::-webkit-slider-runnable-track{background-image:linear-gradient(to right,transparent,var(--vacp-color))}.vacp-range-input--alpha::-ms-track{background-image:linear-gradient(to right,transparent,var(--vacp-color))}.vacp-range-input--hue::-moz-range-track{background-image:linear-gradient(90deg,red 0,#ff0 16.66667%,#0f0 33.33333%,#0ff 50%,#00f 66.66667%,#f0f 83.33333%,red 100%)}.vacp-range-input--hue::-webkit-slider-runnable-track{background-image:linear-gradient(90deg,red 0,#ff0 16.66667%,#0f0 33.33333%,#0ff 50%,#00f 66.66667%,#f0f 83.33333%,red 100%)}.vacp-range-input--hue::-ms-track{background-image:linear-gradient(90deg,red 0,#ff0 16.66667%,#0f0 33.33333%,#0ff 50%,#00f 66.66667%,#f0f 83.33333%,red 100%)}.vacp-range-input::-moz-range-thumb{background-color:transparent;border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color);box-sizing:content-box;height:var(--vacp-slider-track-height);isolation:isolate;width:var(--vacp-slider-track-height)}.vacp-range-input::-webkit-slider-thumb{background-color:transparent;border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color);box-sizing:content-box;height:var(--vacp-slider-track-height);isolation:isolate;margin-top:calc((var(--vacp-spacing)/2)*-1);width:var(--vacp-slider-track-height)}.vacp-range-input::-ms-thumb{background-color:transparent;border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 var(--vacp-border-width) var(--vacp-border-color);box-sizing:content-box;height:var(--vacp-slider-track-height);isolation:isolate;margin-top:calc((var(--vacp-spacing)/2)*-1);width:var(--vacp-slider-track-height)}.vacp-copy-button{align-items:center;align-self:center;background-color:#fff;border:var(--vacp-border-width) solid transparent;border-radius:50%;display:flex;height:calc(var(--vacp-spacing)*6);justify-content:center;justify-self:center;overflow:hidden;position:relative;width:calc(var(--vacp-spacing)*6)}.vacp-copy-button:enabled:focus{border-color:var(--vacp-border-color);box-shadow:0 0 0 2px var(--vacp-focus-color);outline:none}.vacp-copy-button:enabled:hover{background-color:#0002}.vacp-color-inputs{align-items:center;display:flex;grid-column:1/-1}.vacp-color-inputs>:not(:first-child){margin-left:var(--vacp-spacing)}.vacp-color-input-group{column-gap:var(--vacp-spacing);display:grid;flex-grow:1;grid-auto-flow:column}.vacp-color-input-label{text-align:center}.vacp-color-input{border:var(--vacp-border);margin:0;margin-top:calc(var(--vacp-spacing)/2);text-align:center;width:100%}.vacp-color-input,.vacp-format-switch-button{background-color:#fff;color:inherit;font:inherit;padding:var(--vacp-spacing)}.vacp-format-switch-button{align-items:center;border:var(--vacp-border-width) solid transparent;border-radius:50%;display:flex;justify-content:center;margin:0}.vacp-format-switch-button:enabled:focus{border-color:var(--vacp-border-color)}.vacp-format-switch-button:enabled:hover{background-color:#0002}.vacp-visually-hidden{clip:rect(0 0 0 0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}"), Sn.__file = "src/ColorPicker.vue";
const Zr = { class: "flex justify-end mb-20" }, qr = ["disabled", "animation"], _r = { class: "button-text" }, ea = /* @__PURE__ */ qe({
  __name: "form-footer",
  props: {
    animation: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !0
    }
  },
  setup(d) {
    const { t: o } = zt(), l = d, e = ee();
    lt(yr(l, "disabled"), (i) => {
      !i && e.value.classList.contains("button--loading") && e.value.classList.remove("button--loading");
    });
    const a = () => {
      l.animation && e.value.classList.toggle("button--loading");
    };
    return (i, r) => (k(), te("div", Zr, [
      H("button", {
        class: "hover:bg-gray-200 text-gray-600 font-bold py-8 px-16 m-2",
        type: "button",
        onClick: r[0] || (r[0] = (u) => i.$emit("cancel"))
      }, re(G(o)("wizard.step.cancel")), 1),
      H("button", {
        class: "button bg-blue-700 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2 disabled:bg-gray-200 disabled:cursor-default disabled:text-gray-400",
        ref_key: "submitButton",
        ref: e,
        type: "button",
        disabled: d.disabled,
        animation: d.animation,
        onClick: r[1] || (r[1] = (u) => {
          i.$emit("submit"), a();
        })
      }, [
        H("span", _r, re(G(o)("wizard.step.continue")), 1)
      ], 8, qr)
    ]));
  }
}), jt = /* @__PURE__ */ ct(ea, [["__scopeId", "data-v-5e77d8d6"]]);
var On = { exports: {} };
(function(d) {
  d.exports = /******/
  function(o) {
    var l = {};
    function e(a) {
      if (l[a])
        return l[a].exports;
      var i = l[a] = {
        /******/
        i: a,
        /******/
        l: !1,
        /******/
        exports: {}
        /******/
      };
      return o[a].call(i.exports, i, i.exports, e), i.l = !0, i.exports;
    }
    return e.m = o, e.c = l, e.d = function(a, i, r) {
      e.o(a, i) || Object.defineProperty(a, i, { enumerable: !0, get: r });
    }, e.r = function(a) {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a, "__esModule", { value: !0 });
    }, e.t = function(a, i) {
      if (i & 1 && (a = e(a)), i & 8 || i & 4 && typeof a == "object" && a && a.__esModule) return a;
      var r = /* @__PURE__ */ Object.create(null);
      if (e.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: a }), i & 2 && typeof a != "string") for (var u in a) e.d(r, u, function(c) {
        return a[c];
      }.bind(null, u));
      return r;
    }, e.n = function(a) {
      var i = a && a.__esModule ? (
        /******/
        function() {
          return a.default;
        }
      ) : (
        /******/
        function() {
          return a;
        }
      );
      return e.d(i, "a", i), i;
    }, e.o = function(a, i) {
      return Object.prototype.hasOwnProperty.call(a, i);
    }, e.p = "", e(e.s = "fb15");
  }({
    /***/
    "00ee": (
      /***/
      function(o, l, e) {
        var a = e("b622"), i = a("toStringTag"), r = {};
        r[i] = "z", o.exports = String(r) === "[object z]";
      }
    ),
    /***/
    "00fd": (
      /***/
      function(o, l, e) {
        var a = e("9e69"), i = Object.prototype, r = i.hasOwnProperty, u = i.toString, c = a ? a.toStringTag : void 0;
        function h(v) {
          var p = r.call(v, c), O = v[c];
          try {
            v[c] = void 0;
            var m = !0;
          } catch {
          }
          var y = u.call(v);
          return m && (p ? v[c] = O : delete v[c]), y;
        }
        o.exports = h;
      }
    ),
    /***/
    "0366": (
      /***/
      function(o, l, e) {
        var a = e("1c0b");
        o.exports = function(i, r, u) {
          if (a(i), r === void 0) return i;
          switch (u) {
            case 0:
              return function() {
                return i.call(r);
              };
            case 1:
              return function(c) {
                return i.call(r, c);
              };
            case 2:
              return function(c, h) {
                return i.call(r, c, h);
              };
            case 3:
              return function(c, h, v) {
                return i.call(r, c, h, v);
              };
          }
          return function() {
            return i.apply(r, arguments);
          };
        };
      }
    ),
    /***/
    "0481": (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("a2bf"), r = e("7b0b"), u = e("50c4"), c = e("a691"), h = e("65f0");
        a({ target: "Array", proto: !0 }, {
          flat: function() {
            var p = arguments.length ? arguments[0] : void 0, O = r(this), m = u(O.length), y = h(O, 0);
            return y.length = i(y, O, O, m, 0, p === void 0 ? 1 : c(p)), y;
          }
        });
      }
    ),
    /***/
    "06cf": (
      /***/
      function(o, l, e) {
        var a = e("83ab"), i = e("d1e7"), r = e("5c6c"), u = e("fc6a"), c = e("c04e"), h = e("5135"), v = e("0cfb"), p = Object.getOwnPropertyDescriptor;
        l.f = a ? p : function(m, y) {
          if (m = u(m), y = c(y, !0), v) try {
            return p(m, y);
          } catch {
          }
          if (h(m, y)) return r(!i.f.call(m, y), m[y]);
        };
      }
    ),
    /***/
    "0cb2": (
      /***/
      function(o, l, e) {
        var a = e("7b0b"), i = Math.floor, r = "".replace, u = /\$([$&'`]|\d\d?|<[^>]*>)/g, c = /\$([$&'`]|\d\d?)/g;
        o.exports = function(h, v, p, O, m, y) {
          var E = p + h.length, w = O.length, R = c;
          return m !== void 0 && (m = a(m), R = u), r.call(y, R, function(M, F) {
            var D;
            switch (F.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return h;
              case "`":
                return v.slice(0, p);
              case "'":
                return v.slice(E);
              case "<":
                D = m[F.slice(1, -1)];
                break;
              default:
                var V = +F;
                if (V === 0) return M;
                if (V > w) {
                  var I = i(V / 10);
                  return I === 0 ? M : I <= w ? O[I - 1] === void 0 ? F.charAt(1) : O[I - 1] + F.charAt(1) : M;
                }
                D = O[V - 1];
            }
            return D === void 0 ? "" : D;
          });
        };
      }
    ),
    /***/
    "0cfb": (
      /***/
      function(o, l, e) {
        var a = e("83ab"), i = e("d039"), r = e("cc12");
        o.exports = !a && !i(function() {
          return Object.defineProperty(r("div"), "a", {
            get: function() {
              return 7;
            }
          }).a != 7;
        });
      }
    ),
    /***/
    1276: (
      /***/
      function(o, l, e) {
        var a = e("d784"), i = e("44e7"), r = e("825a"), u = e("1d80"), c = e("4840"), h = e("8aa5"), v = e("50c4"), p = e("14c3"), O = e("9263"), m = e("d039"), y = [].push, E = Math.min, w = 4294967295, R = !m(function() {
          return !RegExp(w, "y");
        });
        a("split", 2, function(M, F, D) {
          var V;
          return "abbc".split(/(b)*/)[1] == "c" || "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length ? V = function(I, T) {
            var A = String(u(this)), z = T === void 0 ? w : T >>> 0;
            if (z === 0) return [];
            if (I === void 0) return [A];
            if (!i(I))
              return F.call(A, I, z);
            for (var C = [], g = (I.ignoreCase ? "i" : "") + (I.multiline ? "m" : "") + (I.unicode ? "u" : "") + (I.sticky ? "y" : ""), L = 0, b = new RegExp(I.source, g + "g"), S, P, U; (S = O.call(b, A)) && (P = b.lastIndex, !(P > L && (C.push(A.slice(L, S.index)), S.length > 1 && S.index < A.length && y.apply(C, S.slice(1)), U = S[0].length, L = P, C.length >= z))); )
              b.lastIndex === S.index && b.lastIndex++;
            return L === A.length ? (U || !b.test("")) && C.push("") : C.push(A.slice(L)), C.length > z ? C.slice(0, z) : C;
          } : "0".split(void 0, 0).length ? V = function(I, T) {
            return I === void 0 && T === 0 ? [] : F.call(this, I, T);
          } : V = F, [
            // `String.prototype.split` method
            // https://tc39.es/ecma262/#sec-string.prototype.split
            function(T, A) {
              var z = u(this), C = T?.[M];
              return C !== void 0 ? C.call(T, z, A) : V.call(String(z), T, A);
            },
            // `RegExp.prototype[@@split]` method
            // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
            //
            // NOTE: This cannot be properly polyfilled in engines that don't support
            // the 'y' flag.
            function(I, T) {
              var A = D(V, I, this, T, V !== F);
              if (A.done) return A.value;
              var z = r(I), C = String(this), g = c(z, RegExp), L = z.unicode, b = (z.ignoreCase ? "i" : "") + (z.multiline ? "m" : "") + (z.unicode ? "u" : "") + (R ? "y" : "g"), S = new g(R ? z : "^(?:" + z.source + ")", b), P = T === void 0 ? w : T >>> 0;
              if (P === 0) return [];
              if (C.length === 0) return p(S, C) === null ? [C] : [];
              for (var U = 0, W = 0, Z = []; W < C.length; ) {
                S.lastIndex = R ? W : 0;
                var X = p(S, R ? C : C.slice(W)), ie;
                if (X === null || (ie = E(v(S.lastIndex + (R ? 0 : W)), C.length)) === U)
                  W = h(C, W, L);
                else {
                  if (Z.push(C.slice(U, W)), Z.length === P) return Z;
                  for (var ce = 1; ce <= X.length - 1; ce++)
                    if (Z.push(X[ce]), Z.length === P) return Z;
                  W = U = ie;
                }
              }
              return Z.push(C.slice(U)), Z;
            }
          ];
        }, !R);
      }
    ),
    /***/
    1310: (
      /***/
      function(o, l) {
        function e(a) {
          return a != null && typeof a == "object";
        }
        o.exports = e;
      }
    ),
    /***/
    "13d5": (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("d58f").left, r = e("a640"), u = e("ae40"), c = e("2d00"), h = e("605d"), v = r("reduce"), p = u("reduce", { 1: 0 }), O = !h && c > 79 && c < 83;
        a({ target: "Array", proto: !0, forced: !v || !p || O }, {
          reduce: function(y) {
            return i(this, y, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }
    ),
    /***/
    "14c3": (
      /***/
      function(o, l, e) {
        var a = e("c6b6"), i = e("9263");
        o.exports = function(r, u) {
          var c = r.exec;
          if (typeof c == "function") {
            var h = c.call(r, u);
            if (typeof h != "object")
              throw TypeError("RegExp exec method returned something other than an Object or null");
            return h;
          }
          if (a(r) !== "RegExp")
            throw TypeError("RegExp#exec called on incompatible receiver");
          return i.call(r, u);
        };
      }
    ),
    /***/
    "159b": (
      /***/
      function(o, l, e) {
        var a = e("da84"), i = e("fdbc"), r = e("17c2"), u = e("9112");
        for (var c in i) {
          var h = a[c], v = h && h.prototype;
          if (v && v.forEach !== r) try {
            u(v, "forEach", r);
          } catch {
            v.forEach = r;
          }
        }
      }
    ),
    /***/
    "17c2": (
      /***/
      function(o, l, e) {
        var a = e("b727").forEach, i = e("a640"), r = e("ae40"), u = i("forEach"), c = r("forEach");
        o.exports = !u || !c ? function(v) {
          return a(this, v, arguments.length > 1 ? arguments[1] : void 0);
        } : [].forEach;
      }
    ),
    /***/
    "1a8c": (
      /***/
      function(o, l) {
        function e(a) {
          var i = typeof a;
          return a != null && (i == "object" || i == "function");
        }
        o.exports = e;
      }
    ),
    /***/
    "1be4": (
      /***/
      function(o, l, e) {
        var a = e("d066");
        o.exports = a("document", "documentElement");
      }
    ),
    /***/
    "1c0b": (
      /***/
      function(o, l) {
        o.exports = function(e) {
          if (typeof e != "function")
            throw TypeError(String(e) + " is not a function");
          return e;
        };
      }
    ),
    /***/
    "1d80": (
      /***/
      function(o, l) {
        o.exports = function(e) {
          if (e == null) throw TypeError("Can't call method on " + e);
          return e;
        };
      }
    ),
    /***/
    "1d92": (
      /***/
      function(o, l, e) {
        var a = e("e0ef");
        function i(r) {
          return a(2, r);
        }
        o.exports = i;
      }
    ),
    /***/
    "1dde": (
      /***/
      function(o, l, e) {
        var a = e("d039"), i = e("b622"), r = e("2d00"), u = i("species");
        o.exports = function(c) {
          return r >= 51 || !a(function() {
            var h = [], v = h.constructor = {};
            return v[u] = function() {
              return { foo: 1 };
            }, h[c](Boolean).foo !== 1;
          });
        };
      }
    ),
    /***/
    "23cb": (
      /***/
      function(o, l, e) {
        var a = e("a691"), i = Math.max, r = Math.min;
        o.exports = function(u, c) {
          var h = a(u);
          return h < 0 ? i(h + c, 0) : r(h, c);
        };
      }
    ),
    /***/
    "23e7": (
      /***/
      function(o, l, e) {
        var a = e("da84"), i = e("06cf").f, r = e("9112"), u = e("6eeb"), c = e("ce4e"), h = e("e893"), v = e("94ca");
        o.exports = function(p, O) {
          var m = p.target, y = p.global, E = p.stat, w, R, M, F, D, V;
          if (y ? R = a : E ? R = a[m] || c(m, {}) : R = (a[m] || {}).prototype, R) for (M in O) {
            if (D = O[M], p.noTargetGet ? (V = i(R, M), F = V && V.value) : F = R[M], w = v(y ? M : m + (E ? "." : "#") + M, p.forced), !w && F !== void 0) {
              if (typeof D == typeof F) continue;
              h(D, F);
            }
            (p.sham || F && F.sham) && r(D, "sham", !0), u(R, M, D, p);
          }
        };
      }
    ),
    /***/
    "241c": (
      /***/
      function(o, l, e) {
        var a = e("ca84"), i = e("7839"), r = i.concat("length", "prototype");
        l.f = Object.getOwnPropertyNames || function(c) {
          return a(c, r);
        };
      }
    ),
    /***/
    "25f0": (
      /***/
      function(o, l, e) {
        var a = e("6eeb"), i = e("825a"), r = e("d039"), u = e("ad6d"), c = "toString", h = RegExp.prototype, v = h[c], p = r(function() {
          return v.call({ source: "a", flags: "b" }) != "/a/b";
        }), O = v.name != c;
        (p || O) && a(RegExp.prototype, c, function() {
          var y = i(this), E = String(y.source), w = y.flags, R = String(w === void 0 && y instanceof RegExp && !("flags" in h) ? u.call(y) : w);
          return "/" + E + "/" + R;
        }, { unsafe: !0 });
      }
    ),
    /***/
    2655: (
      /***/
      function(o, l) {
        o.exports = e, o.exports.default = e;
        function e(a) {
          return !!a && (typeof a == "object" || typeof a == "function") && typeof a.then == "function";
        }
      }
    ),
    /***/
    "29f3": (
      /***/
      function(o, l) {
        var e = Object.prototype, a = e.toString;
        function i(r) {
          return a.call(r);
        }
        o.exports = i;
      }
    ),
    /***/
    "2b3e": (
      /***/
      function(o, l, e) {
        var a = e("585a"), i = typeof self == "object" && self && self.Object === Object && self, r = a || i || Function("return this")();
        o.exports = r;
      }
    ),
    /***/
    "2d00": (
      /***/
      function(o, l, e) {
        var a = e("da84"), i = e("342f"), r = a.process, u = r && r.versions, c = u && u.v8, h, v;
        c ? (h = c.split("."), v = h[0] + h[1]) : i && (h = i.match(/Edge\/(\d+)/), (!h || h[1] >= 74) && (h = i.match(/Chrome\/(\d+)/), h && (v = h[1]))), o.exports = v && +v;
      }
    ),
    /***/
    "2e39": (
      /***/
      function(o, l, e) {
        function a(i, r) {
          var u = r.length, c = i.length;
          if (c > u)
            return !1;
          if (c === u)
            return i === r;
          e: for (var h = 0, v = 0; h < c; h++) {
            for (var p = i.charCodeAt(h); v < u; )
              if (r.charCodeAt(v++) === p)
                continue e;
            return !1;
          }
          return !0;
        }
        o.exports = a;
      }
    ),
    /***/
    3410: (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("d039"), r = e("7b0b"), u = e("e163"), c = e("e177"), h = i(function() {
          u(1);
        });
        a({ target: "Object", stat: !0, forced: h, sham: !c }, {
          getPrototypeOf: function(p) {
            return u(r(p));
          }
        });
      }
    ),
    /***/
    "342f": (
      /***/
      function(o, l, e) {
        var a = e("d066");
        o.exports = a("navigator", "userAgent") || "";
      }
    ),
    /***/
    3729: (
      /***/
      function(o, l, e) {
        var a = e("9e69"), i = e("00fd"), r = e("29f3"), u = "[object Null]", c = "[object Undefined]", h = a ? a.toStringTag : void 0;
        function v(p) {
          return p == null ? p === void 0 ? c : u : h && h in Object(p) ? i(p) : r(p);
        }
        o.exports = v;
      }
    ),
    /***/
    "37e8": (
      /***/
      function(o, l, e) {
        var a = e("83ab"), i = e("9bf2"), r = e("825a"), u = e("df75");
        o.exports = a ? Object.defineProperties : function(h, v) {
          r(h);
          for (var p = u(v), O = p.length, m = 0, y; O > m; ) i.f(h, y = p[m++], v[y]);
          return h;
        };
      }
    ),
    /***/
    "3bbe": (
      /***/
      function(o, l, e) {
        var a = e("861d");
        o.exports = function(i) {
          if (!a(i) && i !== null)
            throw TypeError("Can't set " + String(i) + " as a prototype");
          return i;
        };
      }
    ),
    /***/
    4069: (
      /***/
      function(o, l, e) {
        var a = e("44d2");
        a("flat");
      }
    ),
    /***/
    "408c": (
      /***/
      function(o, l, e) {
        var a = e("2b3e"), i = function() {
          return a.Date.now();
        };
        o.exports = i;
      }
    ),
    /***/
    4160: (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("17c2");
        a({ target: "Array", proto: !0, forced: [].forEach != i }, {
          forEach: i
        });
      }
    ),
    /***/
    "428f": (
      /***/
      function(o, l, e) {
        var a = e("da84");
        o.exports = a;
      }
    ),
    /***/
    4416: (
      /***/
      function(o, l) {
        function e(a) {
          var i = a == null ? 0 : a.length;
          return i ? a[i - 1] : void 0;
        }
        o.exports = e;
      }
    ),
    /***/
    "44ad": (
      /***/
      function(o, l, e) {
        var a = e("d039"), i = e("c6b6"), r = "".split;
        o.exports = a(function() {
          return !Object("z").propertyIsEnumerable(0);
        }) ? function(u) {
          return i(u) == "String" ? r.call(u, "") : Object(u);
        } : Object;
      }
    ),
    /***/
    "44d2": (
      /***/
      function(o, l, e) {
        var a = e("b622"), i = e("7c73"), r = e("9bf2"), u = a("unscopables"), c = Array.prototype;
        c[u] == null && r.f(c, u, {
          configurable: !0,
          value: i(null)
        }), o.exports = function(h) {
          c[u][h] = !0;
        };
      }
    ),
    /***/
    "44e7": (
      /***/
      function(o, l, e) {
        var a = e("861d"), i = e("c6b6"), r = e("b622"), u = r("match");
        o.exports = function(c) {
          var h;
          return a(c) && ((h = c[u]) !== void 0 ? !!h : i(c) == "RegExp");
        };
      }
    ),
    /***/
    "45fc": (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("b727").some, r = e("a640"), u = e("ae40"), c = r("some"), h = u("some");
        a({ target: "Array", proto: !0, forced: !c || !h }, {
          some: function(p) {
            return i(this, p, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }
    ),
    /***/
    4840: (
      /***/
      function(o, l, e) {
        var a = e("825a"), i = e("1c0b"), r = e("b622"), u = r("species");
        o.exports = function(c, h) {
          var v = a(c).constructor, p;
          return v === void 0 || (p = a(v)[u]) == null ? h : i(p);
        };
      }
    ),
    /***/
    4930: (
      /***/
      function(o, l, e) {
        var a = e("d039");
        o.exports = !!Object.getOwnPropertySymbols && !a(function() {
          return !String(Symbol());
        });
      }
    ),
    /***/
    "498a": (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("58a8").trim, r = e("c8d2");
        a({ target: "String", proto: !0, forced: r("trim") }, {
          trim: function() {
            return i(this);
          }
        });
      }
    ),
    /***/
    "4b17": (
      /***/
      function(o, l, e) {
        var a = e("6428");
        function i(r) {
          var u = a(r), c = u % 1;
          return u === u ? c ? u - c : u : 0;
        }
        o.exports = i;
      }
    ),
    /***/
    "4d64": (
      /***/
      function(o, l, e) {
        var a = e("fc6a"), i = e("50c4"), r = e("23cb"), u = function(c) {
          return function(h, v, p) {
            var O = a(h), m = i(O.length), y = r(p, m), E;
            if (c && v != v) {
              for (; m > y; )
                if (E = O[y++], E != E) return !0;
            } else for (; m > y; y++)
              if ((c || y in O) && O[y] === v) return c || y || 0;
            return !c && -1;
          };
        };
        o.exports = {
          // `Array.prototype.includes` method
          // https://tc39.es/ecma262/#sec-array.prototype.includes
          includes: u(!0),
          // `Array.prototype.indexOf` method
          // https://tc39.es/ecma262/#sec-array.prototype.indexof
          indexOf: u(!1)
        };
      }
    ),
    /***/
    "4de4": (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("b727").filter, r = e("1dde"), u = e("ae40"), c = r("filter"), h = u("filter");
        a({ target: "Array", proto: !0, forced: !c || !h }, {
          filter: function(p) {
            return i(this, p, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }
    ),
    /***/
    "4e82": (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("1c0b"), r = e("7b0b"), u = e("d039"), c = e("a640"), h = [], v = h.sort, p = u(function() {
          h.sort(void 0);
        }), O = u(function() {
          h.sort(null);
        }), m = c("sort"), y = p || !O || !m;
        a({ target: "Array", proto: !0, forced: y }, {
          sort: function(w) {
            return w === void 0 ? v.call(r(this)) : v.call(r(this), i(w));
          }
        });
      }
    ),
    /***/
    "50c4": (
      /***/
      function(o, l, e) {
        var a = e("a691"), i = Math.min;
        o.exports = function(r) {
          return r > 0 ? i(a(r), 9007199254740991) : 0;
        };
      }
    ),
    /***/
    5135: (
      /***/
      function(o, l) {
        var e = {}.hasOwnProperty;
        o.exports = function(a, i) {
          return e.call(a, i);
        };
      }
    ),
    /***/
    5319: (
      /***/
      function(o, l, e) {
        var a = e("d784"), i = e("825a"), r = e("50c4"), u = e("a691"), c = e("1d80"), h = e("8aa5"), v = e("0cb2"), p = e("14c3"), O = Math.max, m = Math.min, y = function(E) {
          return E === void 0 ? E : String(E);
        };
        a("replace", 2, function(E, w, R, M) {
          var F = M.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, D = M.REPLACE_KEEPS_$0, V = F ? "$" : "$0";
          return [
            // `String.prototype.replace` method
            // https://tc39.es/ecma262/#sec-string.prototype.replace
            function(T, A) {
              var z = c(this), C = T?.[E];
              return C !== void 0 ? C.call(T, z, A) : w.call(String(z), T, A);
            },
            // `RegExp.prototype[@@replace]` method
            // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
            function(I, T) {
              if (!F && D || typeof T == "string" && T.indexOf(V) === -1) {
                var A = R(w, I, this, T);
                if (A.done) return A.value;
              }
              var z = i(I), C = String(this), g = typeof T == "function";
              g || (T = String(T));
              var L = z.global;
              if (L) {
                var b = z.unicode;
                z.lastIndex = 0;
              }
              for (var S = []; ; ) {
                var P = p(z, C);
                if (P === null || (S.push(P), !L)) break;
                var U = String(P[0]);
                U === "" && (z.lastIndex = h(C, r(z.lastIndex), b));
              }
              for (var W = "", Z = 0, X = 0; X < S.length; X++) {
                P = S[X];
                for (var ie = String(P[0]), ce = O(m(u(P.index), C.length), 0), Le = [], Ae = 1; Ae < P.length; Ae++) Le.push(y(P[Ae]));
                var Te = P.groups;
                if (g) {
                  var Me = [ie].concat(Le, ce, C);
                  Te !== void 0 && Me.push(Te);
                  var Re = String(T.apply(void 0, Me));
                } else
                  Re = v(ie, C, ce, Le, Te, T);
                ce >= Z && (W += C.slice(Z, ce) + Re, Z = ce + ie.length);
              }
              return W + C.slice(Z);
            }
          ];
        });
      }
    ),
    /***/
    5692: (
      /***/
      function(o, l, e) {
        var a = e("c430"), i = e("c6cd");
        (o.exports = function(r, u) {
          return i[r] || (i[r] = u !== void 0 ? u : {});
        })("versions", []).push({
          version: "3.8.2",
          mode: a ? "pure" : "global",
          copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
        });
      }
    ),
    /***/
    "56ef": (
      /***/
      function(o, l, e) {
        var a = e("d066"), i = e("241c"), r = e("7418"), u = e("825a");
        o.exports = a("Reflect", "ownKeys") || function(h) {
          var v = i.f(u(h)), p = r.f;
          return p ? v.concat(p(h)) : v;
        };
      }
    ),
    /***/
    "585a": (
      /***/
      function(o, l, e) {
        (function(a) {
          var i = typeof a == "object" && a && a.Object === Object && a;
          o.exports = i;
        }).call(this, e("c8ba"));
      }
    ),
    /***/
    5899: (
      /***/
      function(o, l) {
        o.exports = `	
\v\f\r                　\u2028\u2029\uFEFF`;
      }
    ),
    /***/
    "58a8": (
      /***/
      function(o, l, e) {
        var a = e("1d80"), i = e("5899"), r = "[" + i + "]", u = RegExp("^" + r + r + "*"), c = RegExp(r + r + "*$"), h = function(v) {
          return function(p) {
            var O = String(a(p));
            return v & 1 && (O = O.replace(u, "")), v & 2 && (O = O.replace(c, "")), O;
          };
        };
        o.exports = {
          // `String.prototype.{ trimLeft, trimStart }` methods
          // https://tc39.es/ecma262/#sec-string.prototype.trimstart
          start: h(1),
          // `String.prototype.{ trimRight, trimEnd }` methods
          // https://tc39.es/ecma262/#sec-string.prototype.trimend
          end: h(2),
          // `String.prototype.trim` method
          // https://tc39.es/ecma262/#sec-string.prototype.trim
          trim: h(3)
        };
      }
    ),
    /***/
    "5c6c": (
      /***/
      function(o, l) {
        o.exports = function(e, a) {
          return {
            enumerable: !(e & 1),
            configurable: !(e & 2),
            writable: !(e & 4),
            value: a
          };
        };
      }
    ),
    /***/
    "605d": (
      /***/
      function(o, l, e) {
        var a = e("c6b6"), i = e("da84");
        o.exports = a(i.process) == "process";
      }
    ),
    /***/
    6428: (
      /***/
      function(o, l, e) {
        var a = e("b4b0"), i = 1 / 0, r = 17976931348623157e292;
        function u(c) {
          if (!c)
            return c === 0 ? c : 0;
          if (c = a(c), c === i || c === -i) {
            var h = c < 0 ? -1 : 1;
            return h * r;
          }
          return c === c ? c : 0;
        }
        o.exports = u;
      }
    ),
    /***/
    6547: (
      /***/
      function(o, l, e) {
        var a = e("a691"), i = e("1d80"), r = function(u) {
          return function(c, h) {
            var v = String(i(c)), p = a(h), O = v.length, m, y;
            return p < 0 || p >= O ? u ? "" : void 0 : (m = v.charCodeAt(p), m < 55296 || m > 56319 || p + 1 === O || (y = v.charCodeAt(p + 1)) < 56320 || y > 57343 ? u ? v.charAt(p) : m : u ? v.slice(p, p + 2) : (m - 55296 << 10) + (y - 56320) + 65536);
          };
        };
        o.exports = {
          // `String.prototype.codePointAt` method
          // https://tc39.es/ecma262/#sec-string.prototype.codepointat
          codeAt: r(!1),
          // `String.prototype.at` method
          // https://github.com/mathiasbynens/String.prototype.at
          charAt: r(!0)
        };
      }
    ),
    /***/
    "65f0": (
      /***/
      function(o, l, e) {
        var a = e("861d"), i = e("e8b5"), r = e("b622"), u = r("species");
        o.exports = function(c, h) {
          var v;
          return i(c) && (v = c.constructor, typeof v == "function" && (v === Array || i(v.prototype)) ? v = void 0 : a(v) && (v = v[u], v === null && (v = void 0))), new (v === void 0 ? Array : v)(h === 0 ? 0 : h);
        };
      }
    ),
    /***/
    "69f3": (
      /***/
      function(o, l, e) {
        var a = e("7f9a"), i = e("da84"), r = e("861d"), u = e("9112"), c = e("5135"), h = e("c6cd"), v = e("f772"), p = e("d012"), O = i.WeakMap, m, y, E, w = function(T) {
          return E(T) ? y(T) : m(T, {});
        }, R = function(T) {
          return function(A) {
            var z;
            if (!r(A) || (z = y(A)).type !== T)
              throw TypeError("Incompatible receiver, " + T + " required");
            return z;
          };
        };
        if (a) {
          var M = h.state || (h.state = new O()), F = M.get, D = M.has, V = M.set;
          m = function(T, A) {
            return A.facade = T, V.call(M, T, A), A;
          }, y = function(T) {
            return F.call(M, T) || {};
          }, E = function(T) {
            return D.call(M, T);
          };
        } else {
          var I = v("state");
          p[I] = !0, m = function(T, A) {
            return A.facade = T, u(T, I, A), A;
          }, y = function(T) {
            return c(T, I) ? T[I] : {};
          }, E = function(T) {
            return c(T, I);
          };
        }
        o.exports = {
          set: m,
          get: y,
          has: E,
          enforce: w,
          getterFor: R
        };
      }
    ),
    /***/
    "6eeb": (
      /***/
      function(o, l, e) {
        var a = e("da84"), i = e("9112"), r = e("5135"), u = e("ce4e"), c = e("8925"), h = e("69f3"), v = h.get, p = h.enforce, O = String(String).split("String");
        (o.exports = function(m, y, E, w) {
          var R = w ? !!w.unsafe : !1, M = w ? !!w.enumerable : !1, F = w ? !!w.noTargetGet : !1, D;
          if (typeof E == "function" && (typeof y == "string" && !r(E, "name") && i(E, "name", y), D = p(E), D.source || (D.source = O.join(typeof y == "string" ? y : ""))), m === a) {
            M ? m[y] = E : u(y, E);
            return;
          } else R ? !F && m[y] && (M = !0) : delete m[y];
          M ? m[y] = E : i(m, y, E);
        })(Function.prototype, "toString", function() {
          return typeof this == "function" && v(this).source || c(this);
        });
      }
    ),
    /***/
    7156: (
      /***/
      function(o, l, e) {
        var a = e("861d"), i = e("d2bb");
        o.exports = function(r, u, c) {
          var h, v;
          return (
            // it can work only with native `setPrototypeOf`
            i && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
            typeof (h = u.constructor) == "function" && h !== c && a(v = h.prototype) && v !== c.prototype && i(r, v), r
          );
        };
      }
    ),
    /***/
    "72f0": (
      /***/
      function(o, l) {
        function e(a) {
          return function() {
            return a;
          };
        }
        o.exports = e;
      }
    ),
    /***/
    7418: (
      /***/
      function(o, l) {
        l.f = Object.getOwnPropertySymbols;
      }
    ),
    /***/
    7839: (
      /***/
      function(o, l) {
        o.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf"
        ];
      }
    ),
    /***/
    "7b0b": (
      /***/
      function(o, l, e) {
        var a = e("1d80");
        o.exports = function(i) {
          return Object(a(i));
        };
      }
    ),
    /***/
    "7c73": (
      /***/
      function(o, l, e) {
        var a = e("825a"), i = e("37e8"), r = e("7839"), u = e("d012"), c = e("1be4"), h = e("cc12"), v = e("f772"), p = ">", O = "<", m = "prototype", y = "script", E = v("IE_PROTO"), w = function() {
        }, R = function(I) {
          return O + y + p + I + O + "/" + y + p;
        }, M = function(I) {
          I.write(R("")), I.close();
          var T = I.parentWindow.Object;
          return I = null, T;
        }, F = function() {
          var I = h("iframe"), T = "java" + y + ":", A;
          return I.style.display = "none", c.appendChild(I), I.src = String(T), A = I.contentWindow.document, A.open(), A.write(R("document.F=Object")), A.close(), A.F;
        }, D, V = function() {
          try {
            D = document.domain && new ActiveXObject("htmlfile");
          } catch {
          }
          V = D ? M(D) : F();
          for (var I = r.length; I--; ) delete V[m][r[I]];
          return V();
        };
        u[E] = !0, o.exports = Object.create || function(T, A) {
          var z;
          return T !== null ? (w[m] = a(T), z = new w(), w[m] = null, z[E] = T) : z = V(), A === void 0 ? z : i(z, A);
        };
      }
    ),
    /***/
    "7f9a": (
      /***/
      function(o, l, e) {
        var a = e("da84"), i = e("8925"), r = a.WeakMap;
        o.exports = typeof r == "function" && /native code/.test(i(r));
      }
    ),
    /***/
    "825a": (
      /***/
      function(o, l, e) {
        var a = e("861d");
        o.exports = function(i) {
          if (!a(i))
            throw TypeError(String(i) + " is not an object");
          return i;
        };
      }
    ),
    /***/
    "83ab": (
      /***/
      function(o, l, e) {
        var a = e("d039");
        o.exports = !a(function() {
          return Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1] != 7;
        });
      }
    ),
    /***/
    8418: (
      /***/
      function(o, l, e) {
        var a = e("c04e"), i = e("9bf2"), r = e("5c6c");
        o.exports = function(u, c, h) {
          var v = a(c);
          v in u ? i.f(u, v, r(0, h)) : u[v] = h;
        };
      }
    ),
    /***/
    "861d": (
      /***/
      function(o, l) {
        o.exports = function(e) {
          return typeof e == "object" ? e !== null : typeof e == "function";
        };
      }
    ),
    /***/
    8925: (
      /***/
      function(o, l, e) {
        var a = e("c6cd"), i = Function.toString;
        typeof a.inspectSource != "function" && (a.inspectSource = function(r) {
          return i.call(r);
        }), o.exports = a.inspectSource;
      }
    ),
    /***/
    "8aa5": (
      /***/
      function(o, l, e) {
        var a = e("6547").charAt;
        o.exports = function(i, r, u) {
          return r + (u ? a(i, r).length : 1);
        };
      }
    ),
    /***/
    "8bbf": (
      /***/
      function(o, l) {
        o.exports = Ir;
      }
    ),
    /***/
    "90e3": (
      /***/
      function(o, l) {
        var e = 0, a = Math.random();
        o.exports = function(i) {
          return "Symbol(" + String(i === void 0 ? "" : i) + ")_" + (++e + a).toString(36);
        };
      }
    ),
    /***/
    9112: (
      /***/
      function(o, l, e) {
        var a = e("83ab"), i = e("9bf2"), r = e("5c6c");
        o.exports = a ? function(u, c, h) {
          return i.f(u, c, r(1, h));
        } : function(u, c, h) {
          return u[c] = h, u;
        };
      }
    ),
    /***/
    9263: (
      /***/
      function(o, l, e) {
        var a = e("ad6d"), i = e("9f7f"), r = RegExp.prototype.exec, u = String.prototype.replace, c = r, h = function() {
          var m = /a/, y = /b*/g;
          return r.call(m, "a"), r.call(y, "a"), m.lastIndex !== 0 || y.lastIndex !== 0;
        }(), v = i.UNSUPPORTED_Y || i.BROKEN_CARET, p = /()??/.exec("")[1] !== void 0, O = h || p || v;
        O && (c = function(y) {
          var E = this, w, R, M, F, D = v && E.sticky, V = a.call(E), I = E.source, T = 0, A = y;
          return D && (V = V.replace("y", ""), V.indexOf("g") === -1 && (V += "g"), A = String(y).slice(E.lastIndex), E.lastIndex > 0 && (!E.multiline || E.multiline && y[E.lastIndex - 1] !== `
`) && (I = "(?: " + I + ")", A = " " + A, T++), R = new RegExp("^(?:" + I + ")", V)), p && (R = new RegExp("^" + I + "$(?!\\s)", V)), h && (w = E.lastIndex), M = r.call(D ? R : E, A), D ? M ? (M.input = M.input.slice(T), M[0] = M[0].slice(T), M.index = E.lastIndex, E.lastIndex += M[0].length) : E.lastIndex = 0 : h && M && (E.lastIndex = E.global ? M.index + M[0].length : w), p && M && M.length > 1 && u.call(M[0], R, function() {
            for (F = 1; F < arguments.length - 2; F++)
              arguments[F] === void 0 && (M[F] = void 0);
          }), M;
        }), o.exports = c;
      }
    ),
    /***/
    "94ca": (
      /***/
      function(o, l, e) {
        var a = e("d039"), i = /#|\.prototype\./, r = function(p, O) {
          var m = c[u(p)];
          return m == v ? !0 : m == h ? !1 : typeof O == "function" ? a(O) : !!O;
        }, u = r.normalize = function(p) {
          return String(p).replace(i, ".").toLowerCase();
        }, c = r.data = {}, h = r.NATIVE = "N", v = r.POLYFILL = "P";
        o.exports = r;
      }
    ),
    /***/
    "99af": (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("d039"), r = e("e8b5"), u = e("861d"), c = e("7b0b"), h = e("50c4"), v = e("8418"), p = e("65f0"), O = e("1dde"), m = e("b622"), y = e("2d00"), E = m("isConcatSpreadable"), w = 9007199254740991, R = "Maximum allowed index exceeded", M = y >= 51 || !i(function() {
          var I = [];
          return I[E] = !1, I.concat()[0] !== I;
        }), F = O("concat"), D = function(I) {
          if (!u(I)) return !1;
          var T = I[E];
          return T !== void 0 ? !!T : r(I);
        }, V = !M || !F;
        a({ target: "Array", proto: !0, forced: V }, {
          concat: function(T) {
            var A = c(this), z = p(A, 0), C = 0, g, L, b, S, P;
            for (g = -1, b = arguments.length; g < b; g++)
              if (P = g === -1 ? A : arguments[g], D(P)) {
                if (S = h(P.length), C + S > w) throw TypeError(R);
                for (L = 0; L < S; L++, C++) L in P && v(z, C, P[L]);
              } else {
                if (C >= w) throw TypeError(R);
                v(z, C++, P);
              }
            return z.length = C, z;
          }
        });
      }
    ),
    /***/
    "9bf2": (
      /***/
      function(o, l, e) {
        var a = e("83ab"), i = e("0cfb"), r = e("825a"), u = e("c04e"), c = Object.defineProperty;
        l.f = a ? c : function(v, p, O) {
          if (r(v), p = u(p, !0), r(O), i) try {
            return c(v, p, O);
          } catch {
          }
          if ("get" in O || "set" in O) throw TypeError("Accessors not supported");
          return "value" in O && (v[p] = O.value), v;
        };
      }
    ),
    /***/
    "9e69": (
      /***/
      function(o, l, e) {
        var a = e("2b3e"), i = a.Symbol;
        o.exports = i;
      }
    ),
    /***/
    "9f7f": (
      /***/
      function(o, l, e) {
        var a = e("d039");
        function i(r, u) {
          return RegExp(r, u);
        }
        l.UNSUPPORTED_Y = a(function() {
          var r = i("a", "y");
          return r.lastIndex = 2, r.exec("abcd") != null;
        }), l.BROKEN_CARET = a(function() {
          var r = i("^r", "gy");
          return r.lastIndex = 2, r.exec("str") != null;
        });
      }
    ),
    /***/
    a15b: (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("44ad"), r = e("fc6a"), u = e("a640"), c = [].join, h = i != Object, v = u("join", ",");
        a({ target: "Array", proto: !0, forced: h || !v }, {
          join: function(O) {
            return c.call(r(this), O === void 0 ? "," : O);
          }
        });
      }
    ),
    /***/
    a2bf: (
      /***/
      function(o, l, e) {
        var a = e("e8b5"), i = e("50c4"), r = e("0366"), u = function(c, h, v, p, O, m, y, E) {
          for (var w = O, R = 0, M = y ? r(y, E, 3) : !1, F; R < p; ) {
            if (R in v) {
              if (F = M ? M(v[R], R, h) : v[R], m > 0 && a(F))
                w = u(c, h, F, i(F.length), w, m - 1) - 1;
              else {
                if (w >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                c[w] = F;
              }
              w++;
            }
            R++;
          }
          return w;
        };
        o.exports = u;
      }
    ),
    /***/
    a434: (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("23cb"), r = e("a691"), u = e("50c4"), c = e("7b0b"), h = e("65f0"), v = e("8418"), p = e("1dde"), O = e("ae40"), m = p("splice"), y = O("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), E = Math.max, w = Math.min, R = 9007199254740991, M = "Maximum allowed length exceeded";
        a({ target: "Array", proto: !0, forced: !m || !y }, {
          splice: function(D, V) {
            var I = c(this), T = u(I.length), A = i(D, T), z = arguments.length, C, g, L, b, S, P;
            if (z === 0 ? C = g = 0 : z === 1 ? (C = 0, g = T - A) : (C = z - 2, g = w(E(r(V), 0), T - A)), T + C - g > R)
              throw TypeError(M);
            for (L = h(I, g), b = 0; b < g; b++)
              S = A + b, S in I && v(L, b, I[S]);
            if (L.length = g, C < g) {
              for (b = A; b < T - g; b++)
                S = b + g, P = b + C, S in I ? I[P] = I[S] : delete I[P];
              for (b = T; b > T - g + C; b--) delete I[b - 1];
            } else if (C > g)
              for (b = T - g; b > A; b--)
                S = b + g - 1, P = b + C - 1, S in I ? I[P] = I[S] : delete I[P];
            for (b = 0; b < C; b++)
              I[b + A] = arguments[b + 2];
            return I.length = T - g + C, L;
          }
        });
      }
    ),
    /***/
    a623: (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("b727").every, r = e("a640"), u = e("ae40"), c = r("every"), h = u("every");
        a({ target: "Array", proto: !0, forced: !c || !h }, {
          every: function(p) {
            return i(this, p, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }
    ),
    /***/
    a640: (
      /***/
      function(o, l, e) {
        var a = e("d039");
        o.exports = function(i, r) {
          var u = [][i];
          return !!u && a(function() {
            u.call(null, r || function() {
              throw 1;
            }, 1);
          });
        };
      }
    ),
    /***/
    a691: (
      /***/
      function(o, l) {
        var e = Math.ceil, a = Math.floor;
        o.exports = function(i) {
          return isNaN(i = +i) ? 0 : (i > 0 ? a : e)(i);
        };
      }
    ),
    /***/
    a9e3: (
      /***/
      function(o, l, e) {
        var a = e("83ab"), i = e("da84"), r = e("94ca"), u = e("6eeb"), c = e("5135"), h = e("c6b6"), v = e("7156"), p = e("c04e"), O = e("d039"), m = e("7c73"), y = e("241c").f, E = e("06cf").f, w = e("9bf2").f, R = e("58a8").trim, M = "Number", F = i[M], D = F.prototype, V = h(m(D)) == M, I = function(g) {
          var L = p(g, !1), b, S, P, U, W, Z, X, ie;
          if (typeof L == "string" && L.length > 2) {
            if (L = R(L), b = L.charCodeAt(0), b === 43 || b === 45) {
              if (S = L.charCodeAt(2), S === 88 || S === 120) return NaN;
            } else if (b === 48) {
              switch (L.charCodeAt(1)) {
                case 66:
                case 98:
                  P = 2, U = 49;
                  break;
                case 79:
                case 111:
                  P = 8, U = 55;
                  break;
                default:
                  return +L;
              }
              for (W = L.slice(2), Z = W.length, X = 0; X < Z; X++)
                if (ie = W.charCodeAt(X), ie < 48 || ie > U) return NaN;
              return parseInt(W, P);
            }
          }
          return +L;
        };
        if (r(M, !F(" 0o1") || !F("0b1") || F("+0x1"))) {
          for (var T = function(L) {
            var b = arguments.length < 1 ? 0 : L, S = this;
            return S instanceof T && (V ? O(function() {
              D.valueOf.call(S);
            }) : h(S) != M) ? v(new F(I(b)), S, T) : I(b);
          }, A = a ? y(F) : (
            // ES3:
            "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(",")
          ), z = 0, C; A.length > z; z++)
            c(F, C = A[z]) && !c(T, C) && w(T, C, E(F, C));
          T.prototype = D, D.constructor = T, u(i, M, T);
        }
      }
    ),
    /***/
    ac1f: (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("9263");
        a({ target: "RegExp", proto: !0, forced: /./.exec !== i }, {
          exec: i
        });
      }
    ),
    /***/
    ad6d: (
      /***/
      function(o, l, e) {
        var a = e("825a");
        o.exports = function() {
          var i = a(this), r = "";
          return i.global && (r += "g"), i.ignoreCase && (r += "i"), i.multiline && (r += "m"), i.dotAll && (r += "s"), i.unicode && (r += "u"), i.sticky && (r += "y"), r;
        };
      }
    ),
    /***/
    ae40: (
      /***/
      function(o, l, e) {
        var a = e("83ab"), i = e("d039"), r = e("5135"), u = Object.defineProperty, c = {}, h = function(v) {
          throw v;
        };
        o.exports = function(v, p) {
          if (r(c, v)) return c[v];
          p || (p = {});
          var O = [][v], m = r(p, "ACCESSORS") ? p.ACCESSORS : !1, y = r(p, 0) ? p[0] : h, E = r(p, 1) ? p[1] : void 0;
          return c[v] = !!O && !i(function() {
            if (m && !a) return !0;
            var w = { length: -1 };
            m ? u(w, 1, { enumerable: !0, get: h }) : w[1] = 1, O.call(w, y, E);
          });
        };
      }
    ),
    /***/
    b041: (
      /***/
      function(o, l, e) {
        var a = e("00ee"), i = e("f5df");
        o.exports = a ? {}.toString : function() {
          return "[object " + i(this) + "]";
        };
      }
    ),
    /***/
    b047: (
      /***/
      function(o, l, e) {
        var a = e("1a8c"), i = e("408c"), r = e("b4b0"), u = "Expected a function", c = Math.max, h = Math.min;
        function v(p, O, m) {
          var y, E, w, R, M, F, D = 0, V = !1, I = !1, T = !0;
          if (typeof p != "function")
            throw new TypeError(u);
          O = r(O) || 0, a(m) && (V = !!m.leading, I = "maxWait" in m, w = I ? c(r(m.maxWait) || 0, O) : w, T = "trailing" in m ? !!m.trailing : T);
          function A(W) {
            var Z = y, X = E;
            return y = E = void 0, D = W, R = p.apply(X, Z), R;
          }
          function z(W) {
            return D = W, M = setTimeout(L, O), V ? A(W) : R;
          }
          function C(W) {
            var Z = W - F, X = W - D, ie = O - Z;
            return I ? h(ie, w - X) : ie;
          }
          function g(W) {
            var Z = W - F, X = W - D;
            return F === void 0 || Z >= O || Z < 0 || I && X >= w;
          }
          function L() {
            var W = i();
            if (g(W))
              return b(W);
            M = setTimeout(L, C(W));
          }
          function b(W) {
            return M = void 0, T && y ? A(W) : (y = E = void 0, R);
          }
          function S() {
            M !== void 0 && clearTimeout(M), D = 0, y = F = E = M = void 0;
          }
          function P() {
            return M === void 0 ? R : b(i());
          }
          function U() {
            var W = i(), Z = g(W);
            if (y = arguments, E = this, F = W, Z) {
              if (M === void 0)
                return z(F);
              if (I)
                return clearTimeout(M), M = setTimeout(L, O), A(F);
            }
            return M === void 0 && (M = setTimeout(L, O)), R;
          }
          return U.cancel = S, U.flush = P, U;
        }
        o.exports = v;
      }
    ),
    /***/
    b4b0: (
      /***/
      function(o, l, e) {
        var a = e("1a8c"), i = e("ffd6"), r = NaN, u = /^\s+|\s+$/g, c = /^[-+]0x[0-9a-f]+$/i, h = /^0b[01]+$/i, v = /^0o[0-7]+$/i, p = parseInt;
        function O(m) {
          if (typeof m == "number")
            return m;
          if (i(m))
            return r;
          if (a(m)) {
            var y = typeof m.valueOf == "function" ? m.valueOf() : m;
            m = a(y) ? y + "" : y;
          }
          if (typeof m != "string")
            return m === 0 ? m : +m;
          m = m.replace(u, "");
          var E = h.test(m);
          return E || v.test(m) ? p(m.slice(2), E ? 2 : 8) : c.test(m) ? r : +m;
        }
        o.exports = O;
      }
    ),
    /***/
    b622: (
      /***/
      function(o, l, e) {
        var a = e("da84"), i = e("5692"), r = e("5135"), u = e("90e3"), c = e("4930"), h = e("fdbf"), v = i("wks"), p = a.Symbol, O = h ? p : p && p.withoutSetter || u;
        o.exports = function(m) {
          return r(v, m) || (c && r(p, m) ? v[m] = p[m] : v[m] = O("Symbol." + m)), v[m];
        };
      }
    ),
    /***/
    b64b: (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("7b0b"), r = e("df75"), u = e("d039"), c = u(function() {
          r(1);
        });
        a({ target: "Object", stat: !0, forced: c }, {
          keys: function(v) {
            return r(i(v));
          }
        });
      }
    ),
    /***/
    b727: (
      /***/
      function(o, l, e) {
        var a = e("0366"), i = e("44ad"), r = e("7b0b"), u = e("50c4"), c = e("65f0"), h = [].push, v = function(p) {
          var O = p == 1, m = p == 2, y = p == 3, E = p == 4, w = p == 6, R = p == 7, M = p == 5 || w;
          return function(F, D, V, I) {
            for (var T = r(F), A = i(T), z = a(D, V, 3), C = u(A.length), g = 0, L = I || c, b = O ? L(F, C) : m || R ? L(F, 0) : void 0, S, P; C > g; g++) if ((M || g in A) && (S = A[g], P = z(S, g, T), p))
              if (O) b[g] = P;
              else if (P) switch (p) {
                case 3:
                  return !0;
                case 5:
                  return S;
                case 6:
                  return g;
                case 2:
                  h.call(b, S);
              }
              else switch (p) {
                case 4:
                  return !1;
                case 7:
                  h.call(b, S);
              }
            return w ? -1 : y || E ? E : b;
          };
        };
        o.exports = {
          // `Array.prototype.forEach` method
          // https://tc39.es/ecma262/#sec-array.prototype.foreach
          forEach: v(0),
          // `Array.prototype.map` method
          // https://tc39.es/ecma262/#sec-array.prototype.map
          map: v(1),
          // `Array.prototype.filter` method
          // https://tc39.es/ecma262/#sec-array.prototype.filter
          filter: v(2),
          // `Array.prototype.some` method
          // https://tc39.es/ecma262/#sec-array.prototype.some
          some: v(3),
          // `Array.prototype.every` method
          // https://tc39.es/ecma262/#sec-array.prototype.every
          every: v(4),
          // `Array.prototype.find` method
          // https://tc39.es/ecma262/#sec-array.prototype.find
          find: v(5),
          // `Array.prototype.findIndex` method
          // https://tc39.es/ecma262/#sec-array.prototype.findIndex
          findIndex: v(6),
          // `Array.prototype.filterOut` method
          // https://github.com/tc39/proposal-array-filtering
          filterOut: v(7)
        };
      }
    ),
    /***/
    bcdf: (
      /***/
      function(o, l) {
        function e() {
        }
        o.exports = e;
      }
    ),
    /***/
    c04e: (
      /***/
      function(o, l, e) {
        var a = e("861d");
        o.exports = function(i, r) {
          if (!a(i)) return i;
          var u, c;
          if (r && typeof (u = i.toString) == "function" && !a(c = u.call(i)) || typeof (u = i.valueOf) == "function" && !a(c = u.call(i)) || !r && typeof (u = i.toString) == "function" && !a(c = u.call(i))) return c;
          throw TypeError("Can't convert object to primitive value");
        };
      }
    ),
    /***/
    c430: (
      /***/
      function(o, l) {
        o.exports = !1;
      }
    ),
    /***/
    c6b6: (
      /***/
      function(o, l) {
        var e = {}.toString;
        o.exports = function(a) {
          return e.call(a).slice(8, -1);
        };
      }
    ),
    /***/
    c6cd: (
      /***/
      function(o, l, e) {
        var a = e("da84"), i = e("ce4e"), r = "__core-js_shared__", u = a[r] || i(r, {});
        o.exports = u;
      }
    ),
    /***/
    c8ba: (
      /***/
      function(o, l) {
        var e;
        e = /* @__PURE__ */ function() {
          return this;
        }();
        try {
          e = e || new Function("return this")();
        } catch {
          typeof window == "object" && (e = window);
        }
        o.exports = e;
      }
    ),
    /***/
    c8d2: (
      /***/
      function(o, l, e) {
        var a = e("d039"), i = e("5899"), r = "​᠎";
        o.exports = function(u) {
          return a(function() {
            return !!i[u]() || r[u]() != r || i[u].name !== u;
          });
        };
      }
    ),
    /***/
    c975: (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("4d64").indexOf, r = e("a640"), u = e("ae40"), c = [].indexOf, h = !!c && 1 / [1].indexOf(1, -0) < 0, v = r("indexOf"), p = u("indexOf", { ACCESSORS: !0, 1: 0 });
        a({ target: "Array", proto: !0, forced: h || !v || !p }, {
          indexOf: function(m) {
            return h ? c.apply(this, arguments) || 0 : i(this, m, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }
    ),
    /***/
    ca84: (
      /***/
      function(o, l, e) {
        var a = e("5135"), i = e("fc6a"), r = e("4d64").indexOf, u = e("d012");
        o.exports = function(c, h) {
          var v = i(c), p = 0, O = [], m;
          for (m in v) !a(u, m) && a(v, m) && O.push(m);
          for (; h.length > p; ) a(v, m = h[p++]) && (~r(O, m) || O.push(m));
          return O;
        };
      }
    ),
    /***/
    cc12: (
      /***/
      function(o, l, e) {
        var a = e("da84"), i = e("861d"), r = a.document, u = i(r) && i(r.createElement);
        o.exports = function(c) {
          return u ? r.createElement(c) : {};
        };
      }
    ),
    /***/
    cd9d: (
      /***/
      function(o, l) {
        function e(a) {
          return a;
        }
        o.exports = e;
      }
    ),
    /***/
    ce4e: (
      /***/
      function(o, l, e) {
        var a = e("da84"), i = e("9112");
        o.exports = function(r, u) {
          try {
            i(a, r, u);
          } catch {
            a[r] = u;
          }
          return u;
        };
      }
    ),
    /***/
    d012: (
      /***/
      function(o, l) {
        o.exports = {};
      }
    ),
    /***/
    d039: (
      /***/
      function(o, l) {
        o.exports = function(e) {
          try {
            return !!e();
          } catch {
            return !0;
          }
        };
      }
    ),
    /***/
    d066: (
      /***/
      function(o, l, e) {
        var a = e("428f"), i = e("da84"), r = function(u) {
          return typeof u == "function" ? u : void 0;
        };
        o.exports = function(u, c) {
          return arguments.length < 2 ? r(a[u]) || r(i[u]) : a[u] && a[u][c] || i[u] && i[u][c];
        };
      }
    ),
    /***/
    d15f: (
      /***/
      function(o, l, e) {
      }
    ),
    /***/
    d1e7: (
      /***/
      function(o, l, e) {
        var a = {}.propertyIsEnumerable, i = Object.getOwnPropertyDescriptor, r = i && !a.call({ 1: 2 }, 1);
        l.f = r ? function(c) {
          var h = i(this, c);
          return !!h && h.enumerable;
        } : a;
      }
    ),
    /***/
    d2bb: (
      /***/
      function(o, l, e) {
        var a = e("825a"), i = e("3bbe");
        o.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
          var r = !1, u = {}, c;
          try {
            c = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, c.call(u, []), r = u instanceof Array;
          } catch {
          }
          return function(v, p) {
            return a(v), i(p), r ? c.call(v, p) : v.__proto__ = p, v;
          };
        }() : void 0);
      }
    ),
    /***/
    d3b7: (
      /***/
      function(o, l, e) {
        var a = e("00ee"), i = e("6eeb"), r = e("b041");
        a || i(Object.prototype, "toString", r, { unsafe: !0 });
      }
    ),
    /***/
    d58f: (
      /***/
      function(o, l, e) {
        var a = e("1c0b"), i = e("7b0b"), r = e("44ad"), u = e("50c4"), c = function(h) {
          return function(v, p, O, m) {
            a(p);
            var y = i(v), E = r(y), w = u(y.length), R = h ? w - 1 : 0, M = h ? -1 : 1;
            if (O < 2) for (; ; ) {
              if (R in E) {
                m = E[R], R += M;
                break;
              }
              if (R += M, h ? R < 0 : w <= R)
                throw TypeError("Reduce of empty array with no initial value");
            }
            for (; h ? R >= 0 : w > R; R += M) R in E && (m = p(m, E[R], R, y));
            return m;
          };
        };
        o.exports = {
          // `Array.prototype.reduce` method
          // https://tc39.es/ecma262/#sec-array.prototype.reduce
          left: c(!1),
          // `Array.prototype.reduceRight` method
          // https://tc39.es/ecma262/#sec-array.prototype.reduceright
          right: c(!0)
        };
      }
    ),
    /***/
    d784: (
      /***/
      function(o, l, e) {
        e("ac1f");
        var a = e("6eeb"), i = e("d039"), r = e("b622"), u = e("9263"), c = e("9112"), h = r("species"), v = !i(function() {
          var E = /./;
          return E.exec = function() {
            var w = [];
            return w.groups = { a: "7" }, w;
          }, "".replace(E, "$<a>") !== "7";
        }), p = function() {
          return "a".replace(/./, "$0") === "$0";
        }(), O = r("replace"), m = function() {
          return /./[O] ? /./[O]("a", "$0") === "" : !1;
        }(), y = !i(function() {
          var E = /(?:)/, w = E.exec;
          E.exec = function() {
            return w.apply(this, arguments);
          };
          var R = "ab".split(E);
          return R.length !== 2 || R[0] !== "a" || R[1] !== "b";
        });
        o.exports = function(E, w, R, M) {
          var F = r(E), D = !i(function() {
            var C = {};
            return C[F] = function() {
              return 7;
            }, ""[E](C) != 7;
          }), V = D && !i(function() {
            var C = !1, g = /a/;
            return E === "split" && (g = {}, g.constructor = {}, g.constructor[h] = function() {
              return g;
            }, g.flags = "", g[F] = /./[F]), g.exec = function() {
              return C = !0, null;
            }, g[F](""), !C;
          });
          if (!D || !V || E === "replace" && !(v && p && !m) || E === "split" && !y) {
            var I = /./[F], T = R(F, ""[E], function(C, g, L, b, S) {
              return g.exec === u ? D && !S ? { done: !0, value: I.call(g, L, b) } : { done: !0, value: C.call(L, g, b) } : { done: !1 };
            }, {
              REPLACE_KEEPS_$0: p,
              REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: m
            }), A = T[0], z = T[1];
            a(String.prototype, E, A), a(
              RegExp.prototype,
              F,
              w == 2 ? function(C, g) {
                return z.call(C, this, g);
              } : function(C) {
                return z.call(C, this);
              }
            );
          }
          M && c(RegExp.prototype[F], "sham", !0);
        };
      }
    ),
    /***/
    d81d: (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("b727").map, r = e("1dde"), u = e("ae40"), c = r("map"), h = u("map");
        a({ target: "Array", proto: !0, forced: !c || !h }, {
          map: function(p) {
            return i(this, p, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      }
    ),
    /***/
    da84: (
      /***/
      function(o, l, e) {
        (function(a) {
          var i = function(r) {
            return r && r.Math == Math && r;
          };
          o.exports = // eslint-disable-next-line no-undef
          i(typeof globalThis == "object" && globalThis) || i(typeof window == "object" && window) || i(typeof self == "object" && self) || i(typeof a == "object" && a) || // eslint-disable-next-line no-new-func
          /* @__PURE__ */ function() {
            return this;
          }() || Function("return this")();
        }).call(this, e("c8ba"));
      }
    ),
    /***/
    df75: (
      /***/
      function(o, l, e) {
        var a = e("ca84"), i = e("7839");
        o.exports = Object.keys || function(u) {
          return a(u, i);
        };
      }
    ),
    /***/
    e0ef: (
      /***/
      function(o, l, e) {
        var a = e("4b17"), i = "Expected a function";
        function r(u, c) {
          var h;
          if (typeof c != "function")
            throw new TypeError(i);
          return u = a(u), function() {
            return --u > 0 && (h = c.apply(this, arguments)), u <= 1 && (c = void 0), h;
          };
        }
        o.exports = r;
      }
    ),
    /***/
    e163: (
      /***/
      function(o, l, e) {
        var a = e("5135"), i = e("7b0b"), r = e("f772"), u = e("e177"), c = r("IE_PROTO"), h = Object.prototype;
        o.exports = u ? Object.getPrototypeOf : function(v) {
          return v = i(v), a(v, c) ? v[c] : typeof v.constructor == "function" && v instanceof v.constructor ? v.constructor.prototype : v instanceof Object ? h : null;
        };
      }
    ),
    /***/
    e177: (
      /***/
      function(o, l, e) {
        var a = e("d039");
        o.exports = !a(function() {
          function i() {
          }
          return i.prototype.constructor = null, Object.getPrototypeOf(new i()) !== i.prototype;
        });
      }
    ),
    /***/
    e893: (
      /***/
      function(o, l, e) {
        var a = e("5135"), i = e("56ef"), r = e("06cf"), u = e("9bf2");
        o.exports = function(c, h) {
          for (var v = i(h), p = u.f, O = r.f, m = 0; m < v.length; m++) {
            var y = v[m];
            a(c, y) || p(c, y, O(h, y));
          }
        };
      }
    ),
    /***/
    e8b5: (
      /***/
      function(o, l, e) {
        var a = e("c6b6");
        o.exports = Array.isArray || function(r) {
          return a(r) == "Array";
        };
      }
    ),
    /***/
    f5df: (
      /***/
      function(o, l, e) {
        var a = e("00ee"), i = e("c6b6"), r = e("b622"), u = r("toStringTag"), c = i(/* @__PURE__ */ function() {
          return arguments;
        }()) == "Arguments", h = function(v, p) {
          try {
            return v[p];
          } catch {
          }
        };
        o.exports = a ? i : function(v) {
          var p, O, m;
          return v === void 0 ? "Undefined" : v === null ? "Null" : typeof (O = h(p = Object(v), u)) == "string" ? O : c ? i(p) : (m = i(p)) == "Object" && typeof p.callee == "function" ? "Arguments" : m;
        };
      }
    ),
    /***/
    f772: (
      /***/
      function(o, l, e) {
        var a = e("5692"), i = e("90e3"), r = a("keys");
        o.exports = function(u) {
          return r[u] || (r[u] = i(u));
        };
      }
    ),
    /***/
    fb15: (
      /***/
      function(o, l, e) {
        if (e.r(l), e.d(l, "Treeselect", function() {
          return (
            /* reexport */
            on
          );
        }), e.d(l, "treeselectMixin", function() {
          return (
            /* reexport */
            Xt
          );
        }), e.d(l, "LOAD_ROOT_OPTIONS", function() {
          return (
            /* reexport */
            $
          );
        }), e.d(l, "LOAD_CHILDREN_OPTIONS", function() {
          return (
            /* reexport */
            B
          );
        }), e.d(l, "ASYNC_SEARCH", function() {
          return (
            /* reexport */
            J
          );
        }), typeof window < "u") {
          var a = window.document.currentScript, i = a && a.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
          i && (e.p = i[1]);
        }
        var r = e("8bbf");
        function u(s, t, n, f, x, N) {
          var j = Object(r.resolveComponent)("HiddenFields"), Q = Object(r.resolveComponent)("Control"), ne = Object(r.resolveComponent)("MenuPortal"), se = Object(r.resolveComponent)("Menu");
          return Object(r.openBlock)(), Object(r.createBlock)("div", {
            ref: "wrapper",
            class: s.wrapperClass
          }, [Object(r.createVNode)(j), Object(r.createVNode)(Q, {
            ref: "control"
          }, null, 512), s.appendToBody ? (Object(r.openBlock)(), Object(r.createBlock)(ne, {
            key: 0,
            ref: "portal"
          }, null, 512)) : (Object(r.openBlock)(), Object(r.createBlock)(se, {
            key: 1,
            ref: "menu"
          }, null, 512))], 2);
        }
        e("99af"), e("a623"), e("4de4"), e("0481"), e("4160"), e("c975"), e("d81d"), e("13d5"), e("fb6a"), e("45fc"), e("4e82"), e("4069"), e("a9e3"), e("ac1f"), e("5319"), e("1276"), e("498a"), e("159b");
        function c(s) {
          if (Array.isArray(s)) return s;
        }
        function h(s, t) {
          if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(s)))) {
            var n = [], f = !0, x = !1, N = void 0;
            try {
              for (var j = s[Symbol.iterator](), Q; !(f = (Q = j.next()).done) && (n.push(Q.value), !(t && n.length === t)); f = !0)
                ;
            } catch (ne) {
              x = !0, N = ne;
            } finally {
              try {
                !f && j.return != null && j.return();
              } finally {
                if (x) throw N;
              }
            }
            return n;
          }
        }
        function v(s, t) {
          (t == null || t > s.length) && (t = s.length);
          for (var n = 0, f = new Array(t); n < t; n++)
            f[n] = s[n];
          return f;
        }
        function p(s, t) {
          if (s) {
            if (typeof s == "string") return v(s, t);
            var n = Object.prototype.toString.call(s).slice(8, -1);
            if (n === "Object" && s.constructor && (n = s.constructor.name), n === "Map" || n === "Set") return Array.from(s);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(s, t);
          }
        }
        function O() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function m(s, t) {
          return c(s) || h(s, t) || p(s, t) || O();
        }
        function y(s, t, n) {
          return t in s ? Object.defineProperty(s, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : s[t] = n, s;
        }
        function E(s) {
          if (Array.isArray(s)) return v(s);
        }
        function w(s) {
          if (typeof Symbol < "u" && Symbol.iterator in Object(s)) return Array.from(s);
        }
        function R() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function M(s) {
          return E(s) || w(s) || p(s) || R();
        }
        function F(s, t) {
          var n = Object.keys(s);
          if (Object.getOwnPropertySymbols) {
            var f = Object.getOwnPropertySymbols(s);
            t && (f = f.filter(function(x) {
              return Object.getOwnPropertyDescriptor(s, x).enumerable;
            })), n.push.apply(n, f);
          }
          return n;
        }
        function D(s) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t] != null ? arguments[t] : {};
            t % 2 ? F(Object(n), !0).forEach(function(f) {
              y(s, f, n[f]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach(function(f) {
              Object.defineProperty(s, f, Object.getOwnPropertyDescriptor(n, f));
            });
          }
          return s;
        }
        var V = e("2e39"), I = /* @__PURE__ */ e.n(V);
        function T(s) {
          return s !== s;
        }
        function A(s, t) {
          return s.indexOf(t) !== -1;
        }
        var z = e("72f0"), C = /* @__PURE__ */ e.n(z), g = e("cd9d"), L = /* @__PURE__ */ e.n(g), b = function() {
          return /* @__PURE__ */ Object.create(null);
        };
        function S(s, t) {
          if (s.length !== t.length) return !0;
          for (var n = 0; n < s.length; n++)
            if (s[n] !== t[n]) return !0;
          return !1;
        }
        var P = e("bcdf"), U = /* @__PURE__ */ e.n(P), W = (
          /* istanbul ignore next */
          U.a
        );
        function Z(s, t, n) {
          for (var f = 0, x = s.length; f < x; f++)
            if (t.call(n, s[f], f, s)) return s[f];
        }
        function X(s) {
          return function(n) {
            if (n.type === "mousedown" && n.button === 0) {
              for (var f = arguments.length, x = new Array(f > 1 ? f - 1 : 0), N = 1; N < f; N++)
                x[N - 1] = arguments[N];
              s.call.apply(s, [this, n].concat(x));
            }
          };
        }
        var ie = e("4416"), ce = /* @__PURE__ */ e.n(ie), Le = e("1d92"), Ae = /* @__PURE__ */ e.n(Le), Te = e("2655"), Me = /* @__PURE__ */ e.n(Te);
        e("a434");
        function Re(s, t) {
          var n = s.indexOf(t);
          n !== -1 && s.splice(n, 1);
        }
        var Oe = null, Qe = 0, _e = 1, Ye = 2, xe = "ALL_CHILDREN", we = "ALL_DESCENDANTS", je = "LEAF_CHILDREN", Fe = "LEAF_DESCENDANTS", $ = "LOAD_ROOT_OPTIONS", B = "LOAD_CHILDREN_OPTIONS", J = "ASYNC_SEARCH", q = "ALL", oe = "BRANCH_PRIORITY", K = "LEAF_PRIORITY", de = "ALL_WITH_INDETERMINATE", Ee = "ORDER_SELECTED", $t = "LEVEL", Ht = "INDEX", le = {
          BACKSPACE: 8,
          ENTER: 13,
          ESCAPE: 27,
          END: 35,
          HOME: 36,
          ARROW_LEFT: 37,
          ARROW_UP: 38,
          ARROW_RIGHT: 39,
          ARROW_DOWN: 40,
          DELETE: 46
        }, xn = (
          /* istanbul ignore next */
          200
        ), Ut = 5, Wt = 40;
        function Gt(s, t) {
          var n = 0;
          do {
            if (s.level < n) return -1;
            if (t.level < n) return 1;
            if (s.index[n] !== t.index[n]) return s.index[n] - t.index[n];
            n++;
          } while (!0);
        }
        function En(s, t) {
          return s.level === t.level ? Gt(s, t) : s.level - t.level;
        }
        function dt() {
          return {
            isLoaded: !1,
            isLoading: !1,
            loadingError: ""
          };
        }
        function Nn(s) {
          return typeof s == "string" ? s : typeof s == "number" && !T(s) ? s + "" : "";
        }
        function Kt(s, t, n) {
          return s ? I()(t, n) : A(n, t);
        }
        function ft(s) {
          return s.message || /* istanbul ignore next */
          String(s);
        }
        var Tn = 0, Xt = {
          provide: function() {
            return {
              // Enable access to the instance of root component of vue-treeselect
              // across hierarchy.
              instance: this
            };
          },
          props: {
            /**
             * Whether to allow resetting value even if there are disabled selected nodes.
             */
            allowClearingDisabled: {
              type: Boolean,
              default: !1
            },
            /**
             * When an ancestor node is selected/deselected, whether its disabled descendants should be selected/deselected.
             * You may want to use this in conjunction with `allowClearingDisabled` prop.
             */
            allowSelectingDisabledDescendants: {
              type: Boolean,
              default: !1
            },
            /**
             * Whether the menu should be always open.
             */
            alwaysOpen: {
              type: Boolean,
              default: !1
            },
            /**
             * Append the menu to <body />?
             */
            appendToBody: {
              type: Boolean,
              default: !1
            },
            /**
             * Whether to enable async search mode.
             */
            async: {
              type: Boolean,
              default: !1
            },
            /**
             * Automatically focus the component on mount?
             */
            autoFocus: {
              type: Boolean,
              default: !1
            },
            /**
             * Automatically load root options on mount. When set to `false`, root options will be loaded when the menu is opened.
             */
            autoLoadRootOptions: {
              type: Boolean,
              default: !0
            },
            /**
             * When user deselects a node, automatically deselect its ancestors. Applies to flat mode only.
             */
            autoDeselectAncestors: {
              type: Boolean,
              default: !1
            },
            /**
             * When user deselects a node, automatically deselect its descendants. Applies to flat mode only.
             */
            autoDeselectDescendants: {
              type: Boolean,
              default: !1
            },
            /**
             * When user selects a node, automatically select its ancestors. Applies to flat mode only.
             */
            autoSelectAncestors: {
              type: Boolean,
              default: !1
            },
            /**
             * When user selects a node, automatically select its descendants. Applies to flat mode only.
             */
            autoSelectDescendants: {
              type: Boolean,
              default: !1
            },
            /**
             * Whether pressing backspace key removes the last item if there is no text input.
             */
            backspaceRemoves: {
              type: Boolean,
              default: !0
            },
            /**
             * Function that processes before clearing all input fields.
             * Return `false` to prevent value from being cleared.
             * @type {function(): (boolean|Promise<boolean>)}
             */
            beforeClearAll: {
              type: Function,
              default: C()(!0)
            },
            /**
             * Show branch nodes before leaf nodes?
             */
            branchNodesFirst: {
              type: Boolean,
              default: !1
            },
            /**
             * Should cache results of every search request?
             */
            cacheOptions: {
              type: Boolean,
              default: !0
            },
            /**
             * Show an "×" button that resets value?
             */
            clearable: {
              type: Boolean,
              default: !0
            },
            /**
             * Title for the "×" button when `multiple: true`.
             */
            clearAllText: {
              type: String,
              default: "Clear all"
            },
            /**
             * Whether to clear the search input after selecting.
             * Use only when `multiple` is `true`.
             * For single-select mode, it **always** clears the input after selecting an option regardless of the prop value.
             */
            clearOnSelect: {
              type: Boolean,
              default: !1
            },
            /**
             * Title for the "×" button.
             */
            clearValueText: {
              type: String,
              default: "Clear value"
            },
            /**
             * Whether to close the menu after selecting an option?
             * Use only when `multiple` is `true`.
             */
            closeOnSelect: {
              type: Boolean,
              default: !0
            },
            /**
             * How many levels of branch nodes should be automatically expanded when loaded.
             * Set `Infinity` to make all branch nodes expanded by default.
             */
            defaultExpandLevel: {
              type: Number,
              default: 0
            },
            /**
             * The default set of options to show before the user starts searching. Used for async search mode.
             * When set to `true`, the results for search query as a empty string will be autoloaded.
             * @type {boolean|node[]}
             */
            defaultOptions: {
              default: !1
            },
            /**
             * Whether pressing delete key removes the last item if there is no text input.
             */
            deleteRemoves: {
              type: Boolean,
              default: !0
            },
            /**
             * Delimiter to use to join multiple values for the hidden field value.
             */
            delimiter: {
              type: String,
              default: ","
            },
            /**
             * Only show the nodes that match the search value directly, excluding its ancestors.
             *
             * @type {Object}
             */
            flattenSearchResults: {
              type: Boolean,
              default: !1
            },
            /**
             * Prevent branch nodes from being selected?
             */
            disableBranchNodes: {
              type: Boolean,
              default: !1
            },
            /**
             * Disable the control?
             */
            disabled: {
              type: Boolean,
              default: !1
            },
            /**
             * Disable the fuzzy matching functionality?
             */
            disableFuzzyMatching: {
              type: Boolean,
              default: !1
            },
            /**
             * Whether to enable flat mode or not. Non-flat mode (default) means:
             *   - Whenever a branch node gets checked, all its children will be checked too
             *   - Whenever a branch node has all children checked, the branch node itself will be checked too
             * Set `true` to disable this mechanism
             */
            flat: {
              type: Boolean,
              default: !1
            },
            /**
             * Will be passed with all events as the last param.
             * Useful for identifying events origin.
            */
            instanceId: {
              // Add two trailing "$" to distinguish from explictly specified ids.
              default: function() {
                return "".concat(Tn++, "$$");
              },
              type: [String, Number]
            },
            /**
             * Joins multiple values into a single form field with the `delimiter` (legacy mode).
            */
            joinValues: {
              type: Boolean,
              default: !1
            },
            /**
             * Limit the display of selected options.
             * The rest will be hidden within the limitText string.
             */
            limit: {
              type: Number,
              default: 1 / 0
            },
            /**
             * Function that processes the message shown when selected elements pass the defined limit.
             * @type {function(number): string}
             */
            limitText: {
              type: Function,
              default: function(t) {
                return "and ".concat(t, " more");
              }
            },
            /**
             * Text displayed when loading options.
             */
            loadingText: {
              type: String,
              default: "Loading..."
            },
            /**
             * Used for dynamically loading options.
             * @type {function({action: string, callback: (function((Error|string)=): void), parentNode: node=, instanceId}): void}
             */
            loadOptions: {
              type: Function
            },
            /**
             * Which node properties to filter on.
             */
            matchKeys: {
              type: Array,
              default: C()(["label"])
            },
            /**
             * Sets `maxHeight` style value of the menu.
             */
            maxHeight: {
              type: Number,
              default: 300
            },
            /**
             * Set `true` to allow selecting multiple options (a.k.a., multi-select mode).
             */
            multiple: {
              type: Boolean,
              default: !1
            },
            /**
             * Generates a hidden <input /> tag with this field name for html forms.
             */
            name: {
              type: String
            },
            /**
             * Text displayed when a branch node has no children.
             */
            noChildrenText: {
              type: String,
              default: "No sub-options."
            },
            /**
             * Text displayed when there are no available options.
             */
            noOptionsText: {
              type: String,
              default: "No options available."
            },
            /**
             * Text displayed when there are no matching search results.
             */
            noResultsText: {
              type: String,
              default: "No results found..."
            },
            /**
             * Used for normalizing source data.
             * @type {function(node, instanceId): node}
             */
            normalizer: {
              type: Function,
              default: L.a
            },
            /**
             * By default (`auto`), the menu will open below the control. If there is not
             * enough space, vue-treeselect will automatically flip the menu.
             * You can use one of other four options to force the menu to be always opened
             * to specified direction.
             * Acceptable values:
             *   - `"auto"`
             *   - `"below"`
             *   - `"bottom"`
             *   - `"above"`
             *   - `"top"`
             */
            openDirection: {
              type: String,
              default: "auto",
              validator: function(t) {
                var n = ["auto", "top", "bottom", "above", "below"];
                return A(n, t);
              }
            },
            /**
             * Whether to automatically open the menu when the control is clicked.
             */
            openOnClick: {
              type: Boolean,
              default: !0
            },
            /**
             * Whether to automatically open the menu when the control is focused.
             */
            openOnFocus: {
              type: Boolean,
              default: !1
            },
            /**
             * Array of available options.
             * @type {node[]}
             */
            options: {
              type: Array
            },
            /**
             * Field placeholder, displayed when there's no value.
             */
            placeholder: {
              type: String,
              default: "Select..."
            },
            /**
             * Applies HTML5 required attribute when needed.
             */
            required: {
              type: Boolean,
              default: !1
            },
            /**
             * Text displayed asking user whether to retry loading children options.
             */
            retryText: {
              type: String,
              default: "Retry?"
            },
            /**
             * Title for the retry button.
             */
            retryTitle: {
              type: String,
              default: "Click to retry"
            },
            /**
             * Enable searching feature?
             */
            searchable: {
              type: Boolean,
              default: !0
            },
            /**
             * Search in ancestor nodes too.
             */
            searchNested: {
              type: Boolean,
              default: !1
            },
            /**
             * Text tip to prompt for async search.
             */
            searchPromptText: {
              type: String,
              default: "Type to search..."
            },
            /**
             * Whether to show a children count next to the label of each branch node.
             */
            showCount: {
              type: Boolean,
              default: !1
            },
            /**
             * Used in conjunction with `showCount` to specify which type of count number should be displayed.
             * Acceptable values:
             *   - "ALL_CHILDREN"
             *   - "ALL_DESCENDANTS"
             *   - "LEAF_CHILDREN"
             *   - "LEAF_DESCENDANTS"
             */
            showCountOf: {
              type: String,
              default: xe,
              validator: function(t) {
                var n = [xe, we, je, Fe];
                return A(n, t);
              }
            },
            /**
             * Whether to show children count when searching.
             * Fallbacks to the value of `showCount` when not specified.
             * @type {boolean}
             */
            showCountOnSearch: null,
            /**
             * In which order the selected options should be displayed in trigger & sorted in `value` array.
             * Used for multi-select mode only.
             * Acceptable values:
             *   - "ORDER_SELECTED"
             *   - "LEVEL"
             *   - "INDEX"
             */
            sortValueBy: {
              type: String,
              default: Ee,
              validator: function(t) {
                var n = [Ee, $t, Ht];
                return A(n, t);
              }
            },
            /**
             * Tab index of the control.
             */
            tabIndex: {
              type: Number,
              default: 0
            },
            /**
             * The value of the control.
             * Should be `id` or `node` object for single-select mode, or an array of `id` or `node` object for multi-select mode.
             * Its format depends on the `valueFormat` prop.
             * For most cases, just use `v-model` instead.
             * @type {?Array}
             */
            modelValue: null,
            /**
             * Which kind of nodes should be included in the `value` array in multi-select mode.
             * Acceptable values:
             *   - "ALL" - Any node that is checked will be included in the `value` array
             *   - "BRANCH_PRIORITY" (default) - If a branch node is checked, all its descendants will be excluded in the `value` array
             *   - "LEAF_PRIORITY" - If a branch node is checked, this node itself and its branch descendants will be excluded from the `value` array but its leaf descendants will be included
             *   - "ALL_WITH_INDETERMINATE" - Any node that is checked will be included in the `value` array, plus indeterminate nodes
             */
            valueConsistsOf: {
              type: String,
              default: oe,
              validator: function(t) {
                var n = [q, oe, K, de];
                return A(n, t);
              }
            },
            /**
             * Format of `value` prop.
             * Note that, when set to `"object"`, only `id` & `label` properties are required in each `node` object in `value` prop.
             * Acceptable values:
             *   - "id"
             *   - "object"
             */
            valueFormat: {
              type: String,
              default: "id"
            },
            /**
             * z-index of the menu.
             */
            zIndex: {
              type: [Number, String],
              default: 999
            }
          },
          data: function() {
            return {
              trigger: {
                // Is the control focused?
                isFocused: !1,
                // User entered search query - value of the input.
                searchQuery: ""
              },
              menu: {
                // Is the menu opened?
                isOpen: !1,
                // Id of current highlighted option.
                current: null,
                // The scroll position before last menu closing.
                lastScrollPosition: 0,
                // Which direction to open the menu.
                placement: "bottom"
              },
              forest: {
                // Normalized options.
                normalizedOptions: [],
                // <id, node> map for quick look-up.
                nodeMap: b(),
                // <id, checkedState> map, used for multi-select mode.
                checkedStateMap: b(),
                // Id list of all selected options.
                selectedNodeIds: this.extractCheckedNodeIdsFromValue(),
                // <id, true> map for fast checking:
                //   if (forest.selectedNodeIds.indexOf(id) !== -1) forest.selectedNodeMap[id] === true
                selectedNodeMap: b()
              },
              // States of root options.
              rootOptionsStates: dt(),
              localSearch: {
                // Has user entered any query to search local options?
                active: !1,
                // Has any options matched the search query?
                noResults: !0,
                // <id, countObject> map for counting matched children/descendants.
                countMap: b()
              },
              // <searchQuery, remoteSearchEntry> map.
              remoteSearch: b()
            };
          },
          computed: {
            /* eslint-disable valid-jsdoc */
            /**
             * Normalized nodes that have been selected.
             * @type {node[]}
             */
            selectedNodes: function() {
              return this.forest.selectedNodeIds.map(this.getNode);
            },
            /**
             * Id list of selected nodes with `sortValueBy` prop applied.
             * @type {nodeId[]}
             */
            internalValue: function() {
              var t = this, n;
              if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === q)
                n = this.forest.selectedNodeIds.slice();
              else if (this.valueConsistsOf === oe)
                n = this.forest.selectedNodeIds.filter(function(N) {
                  var j = t.getNode(N);
                  return j.isRootNode ? !0 : !t.isSelected(j.parentNode);
                });
              else if (this.valueConsistsOf === K)
                n = this.forest.selectedNodeIds.filter(function(N) {
                  var j = t.getNode(N);
                  return j.isLeaf ? !0 : j.children.length === 0;
                });
              else if (this.valueConsistsOf === de) {
                var f, x = [];
                n = this.forest.selectedNodeIds.slice(), this.selectedNodes.forEach(function(N) {
                  N.ancestors.forEach(function(j) {
                    A(x, j.id) || A(n, j.id) || x.push(j.id);
                  });
                }), (f = n).push.apply(f, x);
              }
              return this.sortValueBy === $t ? n.sort(function(N, j) {
                return En(t.getNode(N), t.getNode(j));
              }) : this.sortValueBy === Ht && n.sort(function(N, j) {
                return Gt(t.getNode(N), t.getNode(j));
              }), n;
            },
            /**
             * Has any option been selected?
             * @type {boolean}
             */
            hasValue: function() {
              return this.internalValue.length > 0;
            },
            /**
             * Single-select mode?
             * @type {boolean}
             */
            single: function() {
              return !this.multiple;
            },
            /**
             * Id list of nodes displayed in the menu. Nodes that are considered NOT visible:
             *   - descendants of a collapsed branch node
             *   - in local search mode, nodes that are not matched, unless
             *       - it's a branch node and has matched descendants
             *       - it's a leaf node and its parent node is explicitly set to show all children
             * @type {id[]}
             */
            visibleOptionIds: function() {
              var t = this, n = [];
              return this.traverseAllNodesByIndex(function(f) {
                if ((!t.localSearch.active || t.shouldOptionBeIncludedInSearchResult(f)) && n.push(f.id), f.isBranch && !t.shouldExpand(f))
                  return !1;
              }), n;
            },
            /**
             * Has any option should be displayed in the menu?
             * @type {boolean}
             */
            hasVisibleOptions: function() {
              return this.visibleOptionIds.length !== 0;
            },
            /**
             * Should show children count when searching?
             * @type {boolean}
             */
            showCountOnSearchComputed: function() {
              return typeof this.showCountOnSearch == "boolean" ? this.showCountOnSearch : this.showCount;
            },
            /**
             * Is there any branch node?
             * @type {boolean}
             */
            hasBranchNodes: function() {
              return this.forest.normalizedOptions.some(function(t) {
                return t.isBranch;
              });
            },
            shouldFlattenOptions: function() {
              return this.localSearch.active && this.flattenSearchResults;
            }
            /* eslint-enable valid-jsdoc */
          },
          watch: {
            alwaysOpen: function(t) {
              t ? this.openMenu() : this.closeMenu();
            },
            branchNodesFirst: function() {
              this.initialize();
            },
            disabled: function(t) {
              t && this.menu.isOpen ? this.closeMenu() : !t && !this.menu.isOpen && this.alwaysOpen && this.openMenu();
            },
            flat: function() {
              this.initialize();
            },
            internalValue: function(t, n) {
              var f = S(t, n);
              f && this.$emit("update:modelValue", this.getValue(), this.getInstanceId());
            },
            matchKeys: function() {
              this.initialize();
            },
            multiple: function(t) {
              t && this.buildForestState();
            },
            options: {
              handler: function() {
                this.async || (this.initialize(), this.rootOptionsStates.isLoaded = Array.isArray(this.options));
              },
              deep: !0,
              immediate: !0
            },
            "trigger.searchQuery": function() {
              this.async ? this.handleRemoteSearch() : this.handleLocalSearch(), this.$emit("search-change", this.trigger.searchQuery, this.getInstanceId());
            },
            value: function() {
              var t = this.extractCheckedNodeIdsFromValue(), n = S(t, this.internalValue);
              n && this.fixSelectedNodeIds(t);
            }
          },
          methods: {
            verifyProps: function() {
              var t = this;
              if (W(function() {
                return t.async ? t.searchable : !0;
              }, function() {
                return 'For async search mode, the value of "searchable" prop must be true.';
              }), this.options == null && !this.loadOptions && W(function() {
                return !1;
              }, function() {
                return 'Are you meant to dynamically load options? You need to use "loadOptions" prop.';
              }), this.flat && W(function() {
                return t.multiple;
              }, function() {
                return 'You are using flat mode. But you forgot to add "multiple=true"?';
              }), !this.flat) {
                var n = ["autoSelectAncestors", "autoSelectDescendants", "autoDeselectAncestors", "autoDeselectDescendants"];
                n.forEach(function(f) {
                  W(function() {
                    return !t[f];
                  }, function() {
                    return '"'.concat(f, '" only applies to flat mode.');
                  });
                });
              }
            },
            resetFlags: function() {
              this._blurOnSelect = !1;
            },
            initialize: function() {
              var t = this.async ? this.getRemoteSearchEntry().options : this.options;
              if (Array.isArray(t)) {
                var n = this.forest.nodeMap;
                this.forest.nodeMap = b(), this.keepDataOfSelectedNodes(n), this.forest.normalizedOptions = this.normalize(Oe, t, n), this.fixSelectedNodeIds(this.internalValue);
              } else
                this.forest.normalizedOptions = [];
            },
            getInstanceId: function() {
              return this.instanceId == null ? this.id : this.instanceId;
            },
            getValue: function() {
              var t = this;
              if (this.valueFormat === "id")
                return this.multiple ? this.internalValue.slice() : this.internalValue[0];
              var n = this.internalValue.map(function(f) {
                return t.getNode(f).raw;
              });
              return this.multiple ? n : n[0];
            },
            getNode: function(t) {
              return W(function() {
                return t != null;
              }, function() {
                return "Invalid node id: ".concat(t);
              }), t == null ? null : t in this.forest.nodeMap ? this.forest.nodeMap[t] : this.createFallbackNode(t);
            },
            createFallbackNode: function(t) {
              var n = this.extractNodeFromValue(t), f = this.enhancedNormalizer(n).label || "".concat(t, " (unknown)"), x = {
                id: t,
                label: f,
                ancestors: [],
                parentNode: Oe,
                isFallbackNode: !0,
                isRootNode: !0,
                isLeaf: !0,
                isBranch: !1,
                isDisabled: !1,
                isNew: !1,
                index: [-1],
                level: 0,
                raw: n
              };
              return this.forest.nodeMap[t] = x;
            },
            extractCheckedNodeIdsFromValue: function() {
              var t = this;
              return this.modelValue == null ? [] : this.valueFormat === "id" ? this.multiple ? this.modelValue.slice() : [this.modelValue] : (this.multiple ? this.modelValue : [this.modelValue]).map(function(n) {
                return t.enhancedNormalizer(n);
              }).map(function(n) {
                return n.id;
              });
            },
            extractNodeFromValue: function(t) {
              var n = this, f = {
                id: t
              };
              if (this.valueFormat === "id")
                return f;
              var x = this.multiple ? Array.isArray(this.modelValue) ? this.modelValue : [] : this.modelValue ? [this.modelValue] : [], N = Z(x, function(j) {
                return j && n.enhancedNormalizer(j).id === t;
              });
              return N || f;
            },
            fixSelectedNodeIds: function(t) {
              var n = this, f = [];
              if (this.single || this.flat || this.disableBranchNodes || this.valueConsistsOf === q)
                f = t;
              else if (this.valueConsistsOf === oe)
                t.forEach(function(me) {
                  f.push(me);
                  var De = n.getNode(me);
                  De.isBranch && n.traverseDescendantsBFS(De, function($e) {
                    f.push($e.id);
                  });
                });
              else if (this.valueConsistsOf === K)
                for (var x = b(), N = t.slice(); N.length; ) {
                  var j = N.shift(), Q = this.getNode(j);
                  f.push(j), !Q.isRootNode && (Q.parentNode.id in x || (x[Q.parentNode.id] = Q.parentNode.children.length), --x[Q.parentNode.id] === 0 && N.push(Q.parentNode.id));
                }
              else if (this.valueConsistsOf === de)
                for (var ne = b(), se = t.filter(function(me) {
                  var De = n.getNode(me);
                  return De.isLeaf || De.children.length === 0;
                }); se.length; ) {
                  var ve = se.shift(), _ = this.getNode(ve);
                  f.push(ve), !_.isRootNode && (_.parentNode.id in ne || (ne[_.parentNode.id] = _.parentNode.children.length), --ne[_.parentNode.id] === 0 && se.push(_.parentNode.id));
                }
              var he = S(this.forest.selectedNodeIds, f);
              he && (this.forest.selectedNodeIds = f), this.buildForestState();
            },
            keepDataOfSelectedNodes: function(t) {
              var n = this;
              this.forest.selectedNodeIds.forEach(function(f) {
                if (t[f]) {
                  var x = D(D({}, t[f]), {}, {
                    isFallbackNode: !0
                  });
                  n.forest.nodeMap[f] = x;
                }
              });
            },
            isSelected: function(t) {
              return this.forest.selectedNodeMap[t.id] === !0;
            },
            traverseDescendantsBFS: function(t, n) {
              if (t.isBranch)
                for (var f = t.children.slice(); f.length; ) {
                  var x = f[0];
                  x.isBranch && f.push.apply(f, M(x.children)), n(x), f.shift();
                }
            },
            traverseDescendantsDFS: function(t, n) {
              var f = this;
              t.isBranch && t.children.forEach(function(x) {
                f.traverseDescendantsDFS(x, n), n(x);
              });
            },
            traverseAllNodesDFS: function(t) {
              var n = this;
              this.forest.normalizedOptions.forEach(function(f) {
                n.traverseDescendantsDFS(f, t), t(f);
              });
            },
            traverseAllNodesByIndex: function(t) {
              var n = function f(x) {
                x.children.forEach(function(N) {
                  t(N) !== !1 && N.isBranch && f(N);
                });
              };
              n({
                children: this.forest.normalizedOptions
              });
            },
            toggleClickOutsideEvent: function(t) {
              t ? document.addEventListener("mousedown", this.handleClickOutside, !1) : document.removeEventListener("mousedown", this.handleClickOutside, !1);
            },
            getValueContainer: function() {
              return this.$refs.control.$refs["value-container"];
            },
            getInput: function() {
              return this.getValueContainer().$refs.input;
            },
            focusInput: function() {
              this.getInput().focus();
            },
            blurInput: function() {
              this.getInput().blur();
            },
            handleMouseDown: X(function(t) {
              if (t.preventDefault(), t.stopPropagation(), !this.disabled) {
                var n = this.getValueContainer().$el.contains(t.target);
                n && !this.menu.isOpen && (this.openOnClick || this.trigger.isFocused) && this.openMenu(), this._blurOnSelect ? this.blurInput() : this.focusInput(), this.resetFlags();
              }
            }),
            handleClickOutside: function(t) {
              this.$refs.wrapper && !this.$refs.wrapper.contains(t.target) && (this.blurInput(), this.closeMenu());
            },
            handleLocalSearch: function() {
              var t = this, n = this.trigger.searchQuery, f = function() {
                return t.resetHighlightedOptionWhenNecessary(!0);
              };
              if (!n)
                return this.localSearch.active = !1, f();
              this.localSearch.active = !0, this.localSearch.noResults = !0, this.traverseAllNodesDFS(function(j) {
                if (j.isBranch) {
                  var Q;
                  j.isExpandedOnSearch = !1, j.showAllChildrenOnSearch = !1, j.isMatched = !1, j.hasMatchedDescendants = !1, t.localSearch.countMap[j.id] = (Q = {}, y(Q, xe, 0), y(Q, we, 0), y(Q, je, 0), y(Q, Fe, 0), Q);
                }
              });
              var x = n.trim().toLocaleLowerCase(), N = x.replace(/\s+/g, " ").split(" ");
              this.traverseAllNodesDFS(function(j) {
                t.searchNested && N.length > 1 ? j.isMatched = N.every(function(Q) {
                  return Kt(!1, Q, j.nestedSearchLabel);
                }) : j.isMatched = t.matchKeys.some(function(Q) {
                  return Kt(!t.disableFuzzyMatching, x, j.lowerCased[Q]);
                }), j.isMatched && (t.localSearch.noResults = !1, j.ancestors.forEach(function(Q) {
                  return t.localSearch.countMap[Q.id][we]++;
                }), j.isLeaf && j.ancestors.forEach(function(Q) {
                  return t.localSearch.countMap[Q.id][Fe]++;
                }), j.parentNode !== Oe && (t.localSearch.countMap[j.parentNode.id][xe] += 1, j.isLeaf && (t.localSearch.countMap[j.parentNode.id][je] += 1))), (j.isMatched || j.isBranch && j.isExpandedOnSearch) && j.parentNode !== Oe && (j.parentNode.isExpandedOnSearch = !0, j.parentNode.hasMatchedDescendants = !0);
              }), f();
            },
            handleRemoteSearch: function() {
              var t = this, n = this.trigger.searchQuery, f = this.getRemoteSearchEntry(), x = function() {
                t.initialize(), t.resetHighlightedOptionWhenNecessary(!0);
              };
              if ((n === "" || this.cacheOptions) && f.isLoaded)
                return x();
              this.callLoadOptionsProp({
                action: J,
                args: {
                  searchQuery: n
                },
                isPending: function() {
                  return f.isLoading;
                },
                start: function() {
                  f.isLoading = !0, f.isLoaded = !1, f.loadingError = "";
                },
                succeed: function(j) {
                  f.isLoaded = !0, f.options = j, t.trigger.searchQuery === n && x();
                },
                fail: function(j) {
                  f.loadingError = ft(j);
                },
                end: function() {
                  f.isLoading = !1;
                }
              });
            },
            getRemoteSearchEntry: function() {
              var t = this, n = this.trigger.searchQuery, f = this.remoteSearch[n] || D(D({}, dt()), {}, {
                options: []
              });
              if (this.$watch(function() {
                return f.options;
              }, function() {
                t.trigger.searchQuery === n && t.initialize();
              }, {
                deep: !0
              }), n === "") {
                if (Array.isArray(this.defaultOptions))
                  return f.options = this.defaultOptions, f.isLoaded = !0, f;
                if (this.defaultOptions !== !0)
                  return f.isLoaded = !0, f;
              }
              return this.remoteSearch[n] || (this.remoteSearch[n] = f), f;
            },
            shouldExpand: function(t) {
              return this.localSearch.active ? t.isExpandedOnSearch : t.isExpanded;
            },
            shouldOptionBeIncludedInSearchResult: function(t) {
              return !!(t.isMatched || t.isBranch && t.hasMatchedDescendants && !this.flattenSearchResults || !t.isRootNode && t.parentNode.showAllChildrenOnSearch);
            },
            shouldShowOptionInMenu: function(t) {
              return !(this.localSearch.active && !this.shouldOptionBeIncludedInSearchResult(t));
            },
            getControl: function() {
              return this.$refs.control.$el;
            },
            getMenu: function() {
              var t = this.appendToBody ? this.$refs.portal.portalTarget : this, n = t.$refs.menu.$refs.menu;
              return n && n.nodeName !== "#comment" ? n : null;
            },
            setCurrentHighlightedOption: function(t) {
              var n = this.menu.current;
              n != null && n in this.forest.nodeMap && (this.forest.nodeMap[n].isHighlighted = !1), this.menu.current = t?.id;
            },
            resetHighlightedOptionWhenNecessary: function() {
              var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, n = this.menu.current;
              (t || n == null || !(n in this.forest.nodeMap) || !this.shouldShowOptionInMenu(this.getNode(n))) && this.highlightFirstOption();
            },
            highlightFirstOption: function() {
              if (this.hasVisibleOptions) {
                var t = this.visibleOptionIds[0];
                this.setCurrentHighlightedOption(this.getNode(t));
              }
            },
            highlightPrevOption: function() {
              if (this.hasVisibleOptions) {
                var t = this.visibleOptionIds.indexOf(this.menu.current) - 1;
                if (t === -1) return this.highlightLastOption();
                this.setCurrentHighlightedOption(this.getNode(this.visibleOptionIds[t]));
              }
            },
            highlightNextOption: function() {
              if (this.hasVisibleOptions) {
                var t = this.visibleOptionIds.indexOf(this.menu.current) + 1;
                if (t === this.visibleOptionIds.length) return this.highlightFirstOption();
                this.setCurrentHighlightedOption(this.getNode(this.visibleOptionIds[t]));
              }
            },
            highlightLastOption: function() {
              if (this.hasVisibleOptions) {
                var t = ce()(this.visibleOptionIds);
                this.setCurrentHighlightedOption(this.getNode(t));
              }
            },
            resetSearchQuery: function() {
              this.trigger.searchQuery = "";
            },
            closeMenu: function() {
              !this.menu.isOpen || !this.disabled && this.alwaysOpen || (this.saveMenuScrollPosition(), this.menu.isOpen = !1, this.toggleClickOutsideEvent(!1), this.resetSearchQuery(), this.$emit("close", this.getValue(), this.getInstanceId()));
            },
            openMenu: function() {
              this.disabled || this.menu.isOpen || (this.menu.isOpen = !0, this.$nextTick(this.resetHighlightedOptionWhenNecessary), this.$nextTick(this.restoreMenuScrollPosition), !this.options && !this.async && this.loadRootOptions(), this.toggleClickOutsideEvent(!0), this.$emit("open", this.getInstanceId()));
            },
            toggleMenu: function() {
              this.menu.isOpen ? this.closeMenu() : this.openMenu();
            },
            toggleExpanded: function(t) {
              var n;
              this.localSearch.active ? (n = t.isExpandedOnSearch = !t.isExpandedOnSearch, n && (t.showAllChildrenOnSearch = !0)) : n = t.isExpanded = !t.isExpanded, n && !t.childrenStates.isLoaded && this.loadChildrenOptions(t);
            },
            buildForestState: function() {
              var t = this, n = b();
              this.forest.selectedNodeIds.forEach(function(x) {
                n[x] = !0;
              }), this.forest.selectedNodeMap = n;
              var f = b();
              this.multiple && (this.traverseAllNodesByIndex(function(x) {
                f[x.id] = Qe;
              }), this.selectedNodes.forEach(function(x) {
                f[x.id] = Ye, !t.flat && !t.disableBranchNodes && x.ancestors.forEach(function(N) {
                  t.isSelected(N) || (f[N.id] = _e);
                });
              })), this.forest.checkedStateMap = f;
            },
            enhancedNormalizer: function(t) {
              return D(D({}, t), this.normalizer(t, this.getInstanceId()));
            },
            normalize: function(t, n, f) {
              var x = this, N = n.map(function(ne) {
                return [x.enhancedNormalizer(ne), ne];
              }).map(function(ne, se) {
                var ve = m(ne, 2), _ = ve[0], he = ve[1];
                x.checkDuplication(_), x.verifyNodeShape(_);
                var me = _.id, De = _.label, $e = _.children, yt = _.isDefaultExpanded, Ve = t === Oe, sn = Ve ? 0 : t.level + 1, St = Array.isArray($e) || $e === null, Ot = !St, ln = !!_.isDisabled || !x.flat && !Ve && t.isDisabled, mr = !!_.isNew, xt = x.matchKeys.reduce(function(Pe, un) {
                  return D(D({}, Pe), {}, y({}, un, Nn(_[un]).toLocaleLowerCase()));
                }, {}), br = Ve ? xt.label : t.nestedSearchLabel + " " + xt.label;
                x.forest.nodeMap[me] = b();
                var Y = x.forest.nodeMap[me];
                if (Y.id = me, Y.label = De, Y.level = sn, Y.ancestors = Ve ? [] : [t].concat(t.ancestors), Y.index = (Ve ? [] : t.index).concat(se), Y.parentNode = t, Y.lowerCased = xt, Y.nestedSearchLabel = br, Y.isDisabled = ln, Y.isNew = mr, Y.isMatched = !1, Y.isHighlighted = !1, Y.isBranch = St, Y.isLeaf = Ot, Y.isRootNode = Ve, Y.raw = he, St) {
                  var He, rt = Array.isArray($e);
                  Y.childrenStates = D(D({}, dt()), {}, {
                    isLoaded: rt
                  }), Y.isExpanded = typeof yt == "boolean" ? yt : sn < x.defaultExpandLevel, Y.hasMatchedDescendants = !1, Y.hasDisabledDescendants = !1, Y.isExpandedOnSearch = !1, Y.showAllChildrenOnSearch = !1, Y.count = (He = {}, y(He, xe, 0), y(He, we, 0), y(He, je, 0), y(He, Fe, 0), He), Y.children = rt ? x.normalize(Y, $e, f) : [], yt === !0 && Y.ancestors.forEach(function(Pe) {
                    Pe.isExpanded = !0;
                  }), !rt && typeof x.loadOptions != "function" ? W(function() {
                    return !1;
                  }, function() {
                    return 'Unloaded branch node detected. "loadOptions" prop is required to load its children.';
                  }) : !rt && Y.isExpanded && x.loadChildrenOptions(Y);
                }
                if (Y.ancestors.forEach(function(Pe) {
                  return Pe.count[we]++;
                }), Ot && Y.ancestors.forEach(function(Pe) {
                  return Pe.count[Fe]++;
                }), Ve || (t.count[xe] += 1, Ot && (t.count[je] += 1), ln && (t.hasDisabledDescendants = !0)), f && f[me]) {
                  var Ce = f[me];
                  Y.isMatched = Ce.isMatched, Y.showAllChildrenOnSearch = Ce.showAllChildrenOnSearch, Y.isHighlighted = Ce.isHighlighted, Ce.isBranch && Y.isBranch && (Y.isExpanded = Ce.isExpanded, Y.isExpandedOnSearch = Ce.isExpandedOnSearch, Ce.childrenStates.isLoaded && !Y.childrenStates.isLoaded ? Y.isExpanded = !1 : Y.childrenStates = D({}, Ce.childrenStates));
                }
                return Y;
              });
              if (this.branchNodesFirst) {
                var j = N.filter(function(ne) {
                  return ne.isBranch;
                }), Q = N.filter(function(ne) {
                  return ne.isLeaf;
                });
                N = j.concat(Q);
              }
              return N;
            },
            loadRootOptions: function() {
              var t = this;
              this.callLoadOptionsProp({
                action: $,
                isPending: function() {
                  return t.rootOptionsStates.isLoading;
                },
                start: function() {
                  t.rootOptionsStates.isLoading = !0, t.rootOptionsStates.loadingError = "";
                },
                succeed: function() {
                  t.rootOptionsStates.isLoaded = !0, t.$nextTick(function() {
                    t.resetHighlightedOptionWhenNecessary(!0);
                  });
                },
                fail: function(f) {
                  t.rootOptionsStates.loadingError = ft(f);
                },
                end: function() {
                  t.rootOptionsStates.isLoading = !1;
                }
              });
            },
            loadChildrenOptions: function(t) {
              var n = this, f = t.id, x = t.raw;
              this.callLoadOptionsProp({
                action: B,
                args: {
                  // We always pass the raw node instead of the normalized node to any
                  // callback provided by the user of this component.
                  // Because the shape of the raw node is more likely to be closing to
                  // what the back-end API service of the application needs.
                  parentNode: x
                },
                isPending: function() {
                  return n.getNode(f).childrenStates.isLoading;
                },
                start: function() {
                  n.getNode(f).childrenStates.isLoading = !0, n.getNode(f).childrenStates.loadingError = "";
                },
                succeed: function() {
                  n.getNode(f).childrenStates.isLoaded = !0;
                },
                fail: function(j) {
                  n.getNode(f).childrenStates.loadingError = ft(j);
                },
                end: function() {
                  n.getNode(f).childrenStates.isLoading = !1;
                }
              });
            },
            callLoadOptionsProp: function(t) {
              var n = t.action, f = t.args, x = t.isPending, N = t.start, j = t.succeed, Q = t.fail, ne = t.end;
              if (!(!this.loadOptions || x())) {
                N();
                var se = Ae()(function(_, he) {
                  _ ? Q(_) : j(he), ne();
                }), ve = this.loadOptions(D(D({
                  id: this.getInstanceId(),
                  instanceId: this.getInstanceId(),
                  action: n
                }, f), {}, {
                  callback: se
                }));
                Me()(ve) && ve.then(function() {
                  se();
                }, function(_) {
                  se(_);
                }).catch(function(_) {
                  console.error(_);
                });
              }
            },
            checkDuplication: function(t) {
              var n = this;
              W(function() {
                return !(t.id in n.forest.nodeMap && !n.forest.nodeMap[t.id].isFallbackNode);
              }, function() {
                return "Detected duplicate presence of node id ".concat(JSON.stringify(t.id), ". ") + 'Their labels are "'.concat(n.forest.nodeMap[t.id].label, '" and "').concat(t.label, '" respectively.');
              });
            },
            verifyNodeShape: function(t) {
              W(function() {
                return !(t.children === void 0 && t.isBranch === !0);
              }, function() {
                return "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead.";
              });
            },
            select: function(t) {
              if (!(this.disabled || t.isDisabled)) {
                this.single && this.clear();
                var n = this.multiple && !this.flat ? this.forest.checkedStateMap[t.id] === Qe : !this.isSelected(t);
                n ? this._selectNode(t) : this._deselectNode(t), this.buildForestState(), n ? this.$emit("select", t.raw, this.getInstanceId()) : this.$emit("deselect", t.raw, this.getInstanceId()), this.localSearch.active && n && (this.single || this.clearOnSelect) && this.resetSearchQuery(), this.single && this.closeOnSelect && (this.closeMenu(), this.searchable && (this._blurOnSelect = !0));
              }
            },
            clear: function() {
              var t = this;
              this.hasValue && (this.single || this.allowClearingDisabled ? this.forest.selectedNodeIds = [] : this.forest.selectedNodeIds = this.forest.selectedNodeIds.filter(function(n) {
                return t.getNode(n).isDisabled;
              }), this.buildForestState());
            },
            // This is meant to be called only by `select()`.
            _selectNode: function(t) {
              var n = this;
              if (this.single || this.disableBranchNodes)
                return this.addValue(t);
              if (this.flat) {
                this.addValue(t), this.autoSelectAncestors ? t.ancestors.forEach(function(N) {
                  !n.isSelected(N) && !N.isDisabled && n.addValue(N);
                }) : this.autoSelectDescendants && this.traverseDescendantsBFS(t, function(N) {
                  !n.isSelected(N) && !N.isDisabled && n.addValue(N);
                });
                return;
              }
              var f = t.isLeaf || /* node.isBranch && */
              !t.hasDisabledDescendants || /* node.isBranch && */
              this.allowSelectingDisabledDescendants;
              if (f && this.addValue(t), t.isBranch && this.traverseDescendantsBFS(t, function(N) {
                (!N.isDisabled || n.allowSelectingDisabledDescendants) && n.addValue(N);
              }), f)
                for (var x = t; (x = x.parentNode) !== Oe && x.children.every(this.isSelected); )
                  this.addValue(x);
            },
            // This is meant to be called only by `select()`.
            _deselectNode: function(t) {
              var n = this;
              if (this.disableBranchNodes)
                return this.removeValue(t);
              if (this.flat) {
                this.removeValue(t), this.autoDeselectAncestors ? t.ancestors.forEach(function(N) {
                  n.isSelected(N) && !N.isDisabled && n.removeValue(N);
                }) : this.autoDeselectDescendants && this.traverseDescendantsBFS(t, function(N) {
                  n.isSelected(N) && !N.isDisabled && n.removeValue(N);
                });
                return;
              }
              var f = !1;
              if (t.isBranch && this.traverseDescendantsDFS(t, function(N) {
                (!N.isDisabled || n.allowSelectingDisabledDescendants) && (n.removeValue(N), f = !0);
              }), t.isLeaf || /* node.isBranch && */
              f || /* node.isBranch && */
              t.children.length === 0) {
                this.removeValue(t);
                for (var x = t; (x = x.parentNode) !== Oe && this.isSelected(x); )
                  this.removeValue(x);
              }
            },
            addValue: function(t) {
              this.forest.selectedNodeIds.push(t.id), this.forest.selectedNodeMap[t.id] = !0;
            },
            removeValue: function(t) {
              Re(this.forest.selectedNodeIds, t.id), delete this.forest.selectedNodeMap[t.id];
            },
            removeLastValue: function() {
              if (this.hasValue) {
                if (this.single) return this.clear();
                var t = ce()(this.internalValue), n = this.getNode(t);
                this.select(n);
              }
            },
            saveMenuScrollPosition: function() {
              var t = this.getMenu();
              t && (this.menu.lastScrollPosition = t.scrollTop);
            },
            restoreMenuScrollPosition: function() {
              var t = this.getMenu();
              t && (t.scrollTop = this.menu.lastScrollPosition);
            }
          },
          created: function() {
            this.verifyProps(), this.resetFlags();
          },
          mounted: function() {
            this.autoFocus && this.focusInput(), !this.options && !this.async && this.autoLoadRootOptions && this.loadRootOptions(), this.alwaysOpen && this.openMenu(), this.async && this.defaultOptions && this.handleRemoteSearch();
          },
          unmounted: function() {
            this.toggleClickOutsideEvent(!1);
          }
        };
        e("a15b");
        function Cn(s) {
          return typeof s == "string" ? s : s != null && !T(s) ? JSON.stringify(s) : "";
        }
        var In = Object(r.defineComponent)({
          name: "vue-treeselect--hidden-fields",
          inject: ["instance"],
          functional: !0,
          render: function(t) {
            var n = t.instance;
            if (!n.name || n.disabled || !n.hasValue) return null;
            var f = n.internalValue.map(Cn);
            return n.multiple && n.joinValues && (f = [f.join(n.delimiter)]), f.map(function(x, N) {
              return Object(r.createVNode)("input", {
                type: "hidden",
                name: n.name,
                value: x,
                key: "hidden-field-" + N
              }, null);
            });
          }
        }), Ln = In;
        e("d3b7"), e("25f0");
        var An = e("b047"), Mn = /* @__PURE__ */ e.n(An);
        e("3410"), e("b64b");
        function et(s) {
          "@babel/helpers - typeof";
          return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? et = function(n) {
            return typeof n;
          } : et = function(n) {
            return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
          }, et(s);
        }
        function Qt(s) {
          return s == null || et(s) !== "object" ? !1 : Object.getPrototypeOf(s) === Object.prototype;
        }
        function Rn(s, t, n) {
          Qt(n) ? (s[t] || (s[t] = {}), vt(s[t], n)) : s[t] = n;
        }
        function vt(s, t) {
          if (Qt(t))
            for (var n = Object.keys(t), f = 0, x = n.length; f < x; f++)
              Rn(s, n[f], t[n[f]]);
          return s;
        }
        function wn(s) {
          return typeof s == "function" || Object.prototype.toString.call(s) === "[object Object]" && !Object(r.isVNode)(s);
        }
        var jn = [le.ENTER, le.END, le.HOME, le.ARROW_LEFT, le.ARROW_UP, le.ARROW_RIGHT, le.ARROW_DOWN], Fn = {
          name: "vue-treeselect--input",
          inject: ["instance"],
          data: function() {
            return {
              inputWidth: Ut,
              value: ""
            };
          },
          computed: {
            needAutoSize: function() {
              var t = this.instance;
              return t.searchable && !t.disabled && t.multiple;
            },
            inputStyle: function() {
              return {
                width: this.needAutoSize ? "".concat(this.inputWidth, "px") : null
              };
            }
          },
          watch: {
            "instance.trigger.searchQuery": function(t) {
              this.value = t;
            },
            value: function() {
              this.needAutoSize && this.$nextTick(this.updateInputWidth);
            }
          },
          created: function() {
            this.debouncedCallback = Mn()(this.updateSearchQuery, xn, {
              leading: !0,
              trailing: !0
            });
          },
          methods: {
            clear: function() {
              this.onInput({
                target: {
                  value: ""
                }
              });
            },
            focus: function() {
              var t = this.instance;
              t.disabled || this.$refs.input && this.$refs.input.focus();
            },
            blur: function() {
              this.$refs.input && this.$refs.input.blur();
            },
            onFocus: function() {
              var t = this.instance;
              t.trigger.isFocused = !0, t.openOnFocus && t.openMenu();
            },
            onBlur: function() {
              var t = this.instance, n = t.getMenu();
              if (n && document.activeElement === n)
                return this.focus();
              t.trigger.isFocused = !1, t.closeMenu();
            },
            onInput: function(t) {
              var n = t.target.value;
              this.value = n, n ? this.debouncedCallback() : (this.debouncedCallback.cancel(), this.updateSearchQuery());
            },
            // 用 keyUp 事件存在一个问题，删除输入框最后一个字符也会导致取消选中最后一项
            onKeyDown: function(t) {
              var n = this.instance, f = "which" in t ? t.which : (
                /* istanbul ignore next */
                t.keyCode
              );
              if (!(t.ctrlKey || t.shiftKey || t.altKey || t.metaKey)) {
                if (!n.menu.isOpen && A(jn, f))
                  return t.preventDefault(), n.openMenu();
                switch (f) {
                  case le.BACKSPACE: {
                    n.backspaceRemoves && !this.value.length && n.removeLastValue();
                    break;
                  }
                  case le.ENTER: {
                    if (t.preventDefault(), n.menu.current === null) return;
                    var x = n.getNode(n.menu.current);
                    if (x.isBranch && n.disableBranchNodes) return;
                    n.select(x);
                    break;
                  }
                  case le.ESCAPE: {
                    this.value.length ? this.clear() : n.menu.isOpen && n.closeMenu();
                    break;
                  }
                  case le.END: {
                    t.preventDefault(), n.highlightLastOption();
                    break;
                  }
                  case le.HOME: {
                    t.preventDefault(), n.highlightFirstOption();
                    break;
                  }
                  case le.ARROW_LEFT: {
                    var N = n.getNode(n.menu.current);
                    N.isBranch && n.shouldExpand(N) ? (t.preventDefault(), n.toggleExpanded(N)) : !N.isRootNode && (N.isLeaf || N.isBranch && !n.shouldExpand(N)) && (t.preventDefault(), n.setCurrentHighlightedOption(N.parentNode));
                    break;
                  }
                  case le.ARROW_UP: {
                    t.preventDefault(), n.highlightPrevOption();
                    break;
                  }
                  case le.ARROW_RIGHT: {
                    var j = n.getNode(n.menu.current);
                    j.isBranch && !n.shouldExpand(j) && (t.preventDefault(), n.toggleExpanded(j));
                    break;
                  }
                  case le.ARROW_DOWN: {
                    t.preventDefault(), n.highlightNextOption();
                    break;
                  }
                  case le.DELETE: {
                    n.deleteRemoves && !this.value.length && n.removeLastValue();
                    break;
                  }
                  default:
                    n.openMenu();
                }
              }
            },
            onMouseDown: function(t) {
              this.value.length && t.stopPropagation();
            },
            renderInputContainer: function() {
              var t = this.instance, n = {}, f = [];
              return t.searchable && !t.disabled && (f.push(this.renderInput()), this.needAutoSize && f.push(this.renderSizer())), t.searchable || vt(n, {
                on: {
                  focus: this.onFocus,
                  blur: this.onBlur,
                  keydown: this.onKeyDown
                },
                ref: "input"
              }), !t.searchable && !t.disabled && vt(n, {
                attrs: {
                  tabIndex: t.tabIndex
                }
              }), Object(r.createVNode)("div", Object(r.mergeProps)({
                class: "vue-treeselect__input-container"
              }, n), wn(f) ? f : {
                default: function() {
                  return [f];
                }
              });
            },
            renderInput: function() {
              var t = this.instance;
              return Object(r.createVNode)("input", {
                ref: "input",
                class: "vue-treeselect__input",
                type: "text",
                autocomplete: "off",
                tabIndex: t.tabIndex,
                required: t.required && !t.hasValue,
                value: this.value,
                style: this.inputStyle,
                onFocus: this.onFocus,
                onInput: this.onInput,
                onBlur: this.onBlur,
                onKeydown: this.onKeyDown,
                onMousedown: this.onMouseDown
              }, null);
            },
            renderSizer: function() {
              return Object(r.createVNode)("div", {
                ref: "sizer",
                class: "vue-treeselect__sizer"
              }, [this.value]);
            },
            updateInputWidth: function() {
              this.inputWidth = Math.max(Ut, this.$refs.sizer.scrollWidth + 15);
            },
            updateSearchQuery: function() {
              var t = this.instance;
              t.trigger.searchQuery = this.value;
            }
          },
          render: function() {
            return this.renderInputContainer();
          }
        }, Yt = Fn, Dn = {
          name: "vue-treeselect--placeholder",
          inject: ["instance"],
          render: function() {
            var t = this.instance, n = {
              "vue-treeselect__placeholder": !0,
              "vue-treeselect-helper-zoom-effect-off": !0,
              "vue-treeselect-helper-hide": t.hasValue || t.trigger.searchQuery
            };
            return Object(r.createVNode)("div", {
              class: n
            }, [t.placeholder]);
          }
        }, kt = Dn, Vn = {
          name: "vue-treeselect--single-value",
          inject: ["instance"],
          methods: {
            renderSingleValueLabel: function() {
              var t = this.instance, n = t.selectedNodes[0], f = t.$slots["value-label"];
              return f ? f({
                node: n
              }) : n.label;
            }
          },
          render: function() {
            var t = this.instance, n = this.$parent.renderValueContainer, f = t.hasValue && !t.trigger.searchQuery;
            return n([f && Object(r.createVNode)("div", {
              class: "vue-treeselect__single-value"
            }, [this.renderSingleValueLabel()]), Object(r.createVNode)(kt, null, null), Object(r.createVNode)(Yt, {
              ref: "input"
            }, null)]);
          }
        }, Pn = Vn, zn = {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 348.333 348.333"
        }, Bn = /* @__PURE__ */ Object(r.createVNode)("path", {
          d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z"
        }, null, -1);
        function $n(s, t, n, f, x, N) {
          return Object(r.openBlock)(), Object(r.createBlock)("svg", zn, [Bn]);
        }
        var Jt = {
          name: "vue-treeselect--x"
        };
        Jt.render = $n;
        var Zt = Jt;
        function Hn(s) {
          return typeof s == "function" || Object.prototype.toString.call(s) === "[object Object]" && !Object(r.isVNode)(s);
        }
        var Un = {
          name: "vue-treeselect--multi-value-item",
          inject: ["instance"],
          props: {
            node: {
              type: Object,
              required: !0
            }
          },
          methods: {
            handleMouseDown: X(function() {
              var t = this.instance, n = this.node;
              t.select(n);
            })
          },
          render: function() {
            var t = this.instance, n = this.node, f = {
              "vue-treeselect__multi-value-item": !0,
              "vue-treeselect__multi-value-item-disabled": n.isDisabled,
              "vue-treeselect__multi-value-item-new": n.isNew
            }, x = t.$slots["value-label"], N = x ? x({
              node: n
            }) : n.label;
            return Object(r.createVNode)("div", {
              class: "vue-treeselect__multi-value-item-container"
            }, [Object(r.createVNode)("div", {
              class: f,
              onMousedown: this.handleMouseDown
            }, [Object(r.createVNode)("span", {
              class: "vue-treeselect__multi-value-label"
            }, Hn(N) ? N : {
              default: function() {
                return [N];
              }
            }), Object(r.createVNode)("span", {
              class: "vue-treeselect__icon vue-treeselect__value-remove"
            }, [Object(r.createVNode)(Zt, null, null)])])]);
          }
        }, Wn = Un, Gn = {
          name: "vue-treeselect--multi-value",
          inject: ["instance"],
          methods: {
            renderMultiValueItems: function() {
              var t = this.instance;
              return t.internalValue.slice(0, t.limit).map(t.getNode).map(function(n) {
                return Object(r.createVNode)(Wn, {
                  key: "multi-value-item-".concat(n.id),
                  node: n
                }, null);
              });
            },
            renderExceedLimitTip: function() {
              var t = this.instance, n = t.internalValue.length - t.limit;
              return n <= 0 ? null : Object(r.createVNode)("div", {
                class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off",
                key: "exceed-limit-tip"
              }, [Object(r.createVNode)("span", {
                class: "vue-treeselect__limit-tip-text"
              }, [t.limitText(n)])]);
            }
          },
          render: function() {
            var t = this, n = this.$parent.renderValueContainer;
            return n(Object(r.createVNode)(Object(r.resolveComponent)("transition-group"), {
              class: "vue-treeselect__multi-value",
              tag: "div",
              name: "vue-treeselect__multi-value-item--transition",
              appear: !0
            }, {
              default: function() {
                return [t.renderMultiValueItems(), t.renderExceedLimitTip(), Object(r.createVNode)(kt, {
                  key: "placeholder"
                }, null), Object(r.createVNode)(Yt, {
                  ref: "input",
                  key: "input"
                }, null)];
              }
            }));
          }
        }, Kn = Gn, Xn = {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 292.362 292.362"
        }, Qn = /* @__PURE__ */ Object(r.createVNode)("path", {
          d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"
        }, null, -1);
        function Yn(s, t, n, f, x, N) {
          return Object(r.openBlock)(), Object(r.createBlock)("svg", Xn, [Qn]);
        }
        var qt = {
          name: "vue-treeselect--arrow"
        };
        qt.render = Yn;
        var _t = qt;
        function kn(s) {
          return typeof s == "function" || Object.prototype.toString.call(s) === "[object Object]" && !Object(r.isVNode)(s);
        }
        var Jn = {
          name: "vue-treeselect--control",
          inject: ["instance"],
          computed: {
            /* eslint-disable valid-jsdoc */
            /**
             * Should show the "×" button that resets value?
             * @return {boolean}
             */
            shouldShowX: function() {
              var t = this.instance;
              return t.clearable && !t.disabled && t.hasValue && (this.hasUndisabledValue || t.allowClearingDisabled);
            },
            /**
             * Should show the arrow button that toggles menu?
             * @return {boolean}
             */
            shouldShowArrow: function() {
              var t = this.instance;
              return t.alwaysOpen ? !t.menu.isOpen : !0;
            },
            /**
             * Has any undisabled option been selected?
             * @type {boolean}
             */
            hasUndisabledValue: function() {
              var t = this.instance;
              return t.hasValue && t.internalValue.some(function(n) {
                return !t.getNode(n).isDisabled;
              });
            }
            /* eslint-enable valid-jsdoc */
          },
          methods: {
            renderX: function() {
              var t = this.instance, n = t.multiple ? t.clearAllText : t.clearValueText;
              return this.shouldShowX ? Object(r.createVNode)("div", {
                class: "vue-treeselect__x-container",
                title: n,
                onMousedown: this.handleMouseDownOnX
              }, [Object(r.createVNode)(Zt, {
                class: "vue-treeselect__x"
              }, null)]) : null;
            },
            renderArrow: function() {
              var t = this.instance, n = {
                "vue-treeselect__control-arrow": !0,
                "vue-treeselect__control-arrow--rotated": t.menu.isOpen
              };
              return this.shouldShowArrow ? Object(r.createVNode)("div", {
                class: "vue-treeselect__control-arrow-container",
                onMousedown: this.handleMouseDownOnArrow
              }, [Object(r.createVNode)(_t, {
                class: n
              }, null)]) : null;
            },
            handleMouseDownOnX: X(function(t) {
              t.stopPropagation(), t.preventDefault();
              var n = this.instance, f = n.beforeClearAll(), x = function(j) {
                j && n.clear();
              };
              Me()(f) ? f.then(x) : setTimeout(function() {
                return x(f);
              }, 0);
            }),
            handleMouseDownOnArrow: X(function(t) {
              t.preventDefault(), t.stopPropagation();
              var n = this.instance;
              n.focusInput(), n.toggleMenu();
            }),
            // This is meant to be called by child `<Value />` component.
            renderValueContainer: function(t) {
              return Object(r.createVNode)("div", {
                class: "vue-treeselect__value-container"
              }, kn(t) ? t : {
                default: function() {
                  return [t];
                }
              });
            }
          },
          render: function() {
            var t = this.instance, n = t.single ? Pn : Kn;
            return Object(r.createVNode)("div", {
              class: "vue-treeselect__control",
              onMousedown: t.handleMouseDown
            }, [Object(r.createVNode)(n, {
              ref: "value-container"
            }, null), this.renderX(), this.renderArrow()]);
          }
        }, Zn = Jn, qn = function(s, t) {
          var n = document.createElement("_"), f = n.appendChild(document.createElement("_")), x = n.appendChild(document.createElement("_")), N = f.appendChild(document.createElement("_")), j = void 0, Q = void 0;
          return f.style.cssText = n.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1", N.style.cssText = x.style.cssText = "display:block;height:100%;transition:0s;width:100%", N.style.width = N.style.height = "200%", s.appendChild(n), ne(), ve;
          function ne() {
            se();
            var _ = s.offsetWidth, he = s.offsetHeight;
            (_ !== j || he !== Q) && (j = _, Q = he, x.style.width = _ * 2 + "px", x.style.height = he * 2 + "px", n.scrollLeft = n.scrollWidth, n.scrollTop = n.scrollHeight, f.scrollLeft = f.scrollWidth, f.scrollTop = f.scrollHeight, t({ width: _, height: he })), f.addEventListener("scroll", ne), n.addEventListener("scroll", ne);
          }
          function se() {
            f.removeEventListener("scroll", ne), n.removeEventListener("scroll", ne);
          }
          function ve() {
            se(), s.removeChild(n);
          }
        }, _n = qn, ht, tt = [], er = 100;
        function tr() {
          ht = setInterval(function() {
            tt.forEach(en);
          }, er);
        }
        function nr() {
          clearInterval(ht), ht = null;
        }
        function en(s) {
          var t = s.$el, n = s.listener, f = s.lastWidth, x = s.lastHeight, N = t.offsetWidth, j = t.offsetHeight;
          (f !== N || x !== j) && (s.lastWidth = N, s.lastHeight = j, n({
            width: N,
            height: j
          }));
        }
        function rr(s, t) {
          var n = {
            $el: s,
            listener: t,
            lastWidth: null,
            lastHeight: null
          }, f = function() {
            Re(tt, n), tt.length || nr();
          };
          return tt.push(n), en(n), tr(), f;
        }
        function tn(s, t) {
          var n = document.documentMode === 9, f = !0, x = function() {
            return f || t.apply(void 0, arguments);
          }, N = n ? rr : _n, j = N(s, x);
          return f = !1, j;
        }
        function ar(s) {
          for (var t = [], n = s.parentNode; n && n.nodeName !== "BODY" && n.nodeType === document.ELEMENT_NODE; )
            or(n) && t.push(n), n = n.parentNode;
          return t.push(window), t;
        }
        function or(s) {
          var t = getComputedStyle(s), n = t.overflow, f = t.overflowX, x = t.overflowY;
          return /(auto|scroll|overlay)/.test(n + x + f);
        }
        function nn(s, t) {
          var n = ar(s);
          return window.addEventListener("resize", t, {
            passive: !0
          }), n.forEach(function(f) {
            f.addEventListener("scroll", t, {
              passive: !0
            });
          }), function() {
            window.removeEventListener("resize", t, {
              passive: !0
            }), n.forEach(function(x) {
              x.removeEventListener("scroll", t, {
                passive: !0
              });
            });
          };
        }
        var ir = Object(r.defineComponent)({
          name: "vue-treeselect--tip",
          functional: !0,
          props: {
            type: {
              type: String,
              required: !0
            },
            icon: {
              type: String,
              required: !0
            }
          },
          render: function(t) {
            var n = this.type, f = this.icon;
            return Object(r.createVNode)("div", {
              class: "vue-treeselect__tip vue-treeselect__".concat(n, "-tip")
            }, [Object(r.createVNode)("div", {
              class: "vue-treeselect__icon-container"
            }, [Object(r.createVNode)("span", {
              class: "vue-treeselect__icon-".concat(f)
            }, null)]), Object(r.createVNode)("span", {
              class: "vue-treeselect__tip-text vue-treeselect__".concat(n, "-tip-text")
            }, [this.$slots.default()])]);
          }
        }), Ne = ir;
        function nt(s) {
          return typeof s == "function" || Object.prototype.toString.call(s) === "[object Object]" && !Object(r.isVNode)(s);
        }
        var pt, gt, mt, sr = {
          name: "vue-treeselect--option",
          inject: ["instance"],
          props: {
            node: {
              type: Object,
              required: !0
            }
          },
          computed: {
            shouldExpand: function() {
              var t = this.instance, n = this.node;
              return n.isBranch && t.shouldExpand(n);
            },
            shouldShow: function() {
              var t = this.instance, n = this.node;
              return t.shouldShowOptionInMenu(n);
            }
          },
          methods: {
            renderOption: function() {
              var t = this.instance, n = this.node, f = {
                "vue-treeselect__option": !0,
                "vue-treeselect__option--disabled": n.isDisabled,
                "vue-treeselect__option--selected": t.isSelected(n),
                "vue-treeselect__option--highlight": n.isHighlighted,
                "vue-treeselect__option--matched": t.localSearch.active && n.isMatched,
                "vue-treeselect__option--hide": !this.shouldShow
              };
              return Object(r.createVNode)("div", {
                class: f,
                onMouseenter: this.handleMouseEnterOption,
                "data-id": n.id
              }, [this.renderArrow(), this.renderLabelContainer([this.renderCheckboxContainer([this.renderCheckbox()]), this.renderLabel()])]);
            },
            renderSubOptionsList: function() {
              return this.shouldExpand ? Object(r.createVNode)("div", {
                class: "vue-treeselect__list"
              }, [this.renderSubOptions(), this.renderNoChildrenTip(), this.renderLoadingChildrenTip(), this.renderLoadingChildrenErrorTip()]) : null;
            },
            renderArrow: function() {
              var t = this.instance, n = this.node;
              if (t.shouldFlattenOptions && this.shouldShow) return null;
              if (n.isBranch) {
                var f, x = {
                  "vue-treeselect__option-arrow": !0,
                  "vue-treeselect__option-arrow--rotated": this.shouldExpand
                };
                return Object(r.createVNode)("div", {
                  class: "vue-treeselect__option-arrow-container",
                  onMousedown: this.handleMouseDownOnArrow
                }, [Object(r.createVNode)(Object(r.resolveComponent)("transition"), {
                  name: "vue-treeselect__option-arrow--prepare",
                  appear: !0
                }, nt(f = Object(r.createVNode)(_t, {
                  class: x
                }, null)) ? f : {
                  default: function() {
                    return [f];
                  }
                })]);
              }
              return (
                /*node.isLeaf && */
                t.hasBranchNodes ? (pt || (pt = Object(r.createVNode)("div", {
                  class: "vue-treeselect__option-arrow-placeholder"
                }, [Object(r.createTextVNode)(" ")])), pt) : null
              );
            },
            renderLabelContainer: function(t) {
              return Object(r.createVNode)("div", {
                class: "vue-treeselect__label-container",
                onMousedown: this.handleMouseDownOnLabelContainer
              }, nt(t) ? t : {
                default: function() {
                  return [t];
                }
              });
            },
            renderCheckboxContainer: function(t) {
              var n = this.instance, f = this.node;
              return n.single || n.disableBranchNodes && f.isBranch ? null : Object(r.createVNode)("div", {
                class: "vue-treeselect__checkbox-container"
              }, nt(t) ? t : {
                default: function() {
                  return [t];
                }
              });
            },
            renderCheckbox: function() {
              var t = this.instance, n = this.node, f = t.forest.checkedStateMap[n.id], x = {
                "vue-treeselect__checkbox": !0,
                "vue-treeselect__checkbox--checked": f === Ye,
                "vue-treeselect__checkbox--indeterminate": f === _e,
                "vue-treeselect__checkbox--unchecked": f === Qe,
                "vue-treeselect__checkbox--disabled": n.isDisabled
              };
              return gt || (gt = Object(r.createVNode)("span", {
                class: "vue-treeselect__check-mark"
              }, null)), mt || (mt = Object(r.createVNode)("span", {
                class: "vue-treeselect__minus-mark"
              }, null)), Object(r.createVNode)("span", {
                class: x
              }, [gt, mt]);
            },
            renderLabel: function() {
              var t = this.instance, n = this.node, f = n.isBranch && (t.localSearch.active ? t.showCountOnSearchComputed : t.showCount), x = f ? t.localSearch.active ? t.localSearch.countMap[n.id][t.showCountOf] : n.count[t.showCountOf] : NaN, N = "vue-treeselect__label", j = "vue-treeselect__count", Q = t.$slots["option-label"];
              return Q ? Q({
                node: n,
                shouldShowCount: f,
                count: x,
                labelClassName: N,
                countClassName: j
              }) : Object(r.createVNode)("label", {
                class: N
              }, [n.label, f && Object(r.createVNode)("span", {
                class: j
              }, [Object(r.createTextVNode)("("), x, Object(r.createTextVNode)(")")])]);
            },
            renderSubOptions: function() {
              var t = this.node;
              return t.childrenStates.isLoaded ? t.children.map(function(n) {
                return Object(r.createVNode)(Object(r.resolveComponent)("vue-treeselect--option"), {
                  node: n,
                  key: n.id
                }, null);
              }) : null;
            },
            renderNoChildrenTip: function() {
              var t = this.instance, n = this.node;
              return !n.childrenStates.isLoaded || n.children.length ? null : Object(r.createVNode)(Ne, {
                type: "no-children",
                icon: "warning"
              }, {
                default: function() {
                  return [t.noChildrenText];
                }
              });
            },
            renderLoadingChildrenTip: function() {
              var t = this.instance, n = this.node;
              return n.childrenStates.isLoading ? Object(r.createVNode)(Ne, {
                type: "loading",
                icon: "loader"
              }, {
                default: function() {
                  return [t.loadingText];
                }
              }) : null;
            },
            renderLoadingChildrenErrorTip: function() {
              var t = this, n = this.instance, f = this.node;
              return f.childrenStates.loadingError ? Object(r.createVNode)(Ne, {
                type: "error",
                icon: "error"
              }, {
                default: function() {
                  return [f.childrenStates.loadingError, Object(r.createVNode)("a", {
                    class: "vue-treeselect__retry",
                    title: n.retryTitle,
                    onMousedown: t.handleMouseDownOnRetry
                  }, [n.retryText])];
                }
              }) : null;
            },
            handleMouseEnterOption: function(t) {
              var n = this.instance, f = this.node;
              t.target === t.currentTarget && n.setCurrentHighlightedOption(f, !1);
            },
            handleMouseDownOnArrow: X(function() {
              var t = this.instance, n = this.node;
              t.toggleExpanded(n);
            }),
            handleMouseDownOnLabelContainer: X(function() {
              var t = this.instance, n = this.node;
              n.isBranch && t.disableBranchNodes ? t.toggleExpanded(n) : t.select(n);
            }),
            handleMouseDownOnRetry: X(function() {
              var t = this.instance, n = this.node;
              t.loadChildrenOptions(n);
            })
          },
          render: function() {
            var t, n = this.node, f = this.instance.shouldFlattenOptions ? 0 : n.level, x = y({
              "vue-treeselect__list-item": !0
            }, "vue-treeselect__indent-level-".concat(f), !0);
            return Object(r.createVNode)("div", {
              class: x
            }, [this.renderOption(), n.isBranch ? Object(r.createVNode)(Object(r.resolveComponent)("transition"), {
              name: "vue-treeselect__list--transition"
            }, nt(t = this.renderSubOptionsList()) ? t : {
              default: function() {
                return [t];
              }
            }) : ""]);
          }
        }, lr = sr, ur = lr;
        function cr(s) {
          return typeof s == "function" || Object.prototype.toString.call(s) === "[object Object]" && !Object(r.isVNode)(s);
        }
        var dr = {
          top: "top",
          bottom: "bottom",
          above: "top",
          below: "bottom"
        }, fr = {
          name: "vue-treeselect--menu",
          inject: ["instance"],
          computed: {
            menuStyle: function() {
              var t = this.instance;
              return {
                maxHeight: t.maxHeight + "px"
              };
            },
            menuContainerStyle: function() {
              var t = this.instance;
              return {
                zIndex: t.appendToBody ? null : t.zIndex
              };
            }
          },
          watch: {
            "instance.menu.isOpen": function(t) {
              t ? this.$nextTick(this.onMenuOpen) : this.onMenuClose();
            }
          },
          created: function() {
            this.menuSizeWatcher = null, this.menuResizeAndScrollEventListeners = null;
          },
          mounted: function() {
            var t = this.instance;
            t.menu.isOpen && this.$nextTick(this.onMenuOpen);
          },
          unmounted: function() {
            this.onMenuClose();
          },
          methods: {
            renderMenu: function() {
              var t = this.instance;
              return t.menu.isOpen ? Object(r.createVNode)("div", {
                ref: "menu",
                class: "vue-treeselect__menu",
                onMousedown: t.handleMouseDown,
                style: this.menuStyle
              }, [this.renderBeforeList(), t.async ? this.renderAsyncSearchMenuInner() : t.localSearch.active ? this.renderLocalSearchMenuInner() : this.renderNormalMenuInner(), this.renderAfterList()]) : null;
            },
            renderBeforeList: function() {
              var t = this.instance, n = t.$slots["before-list"];
              return n ? n() : null;
            },
            renderAfterList: function() {
              var t = this.instance, n = t.$slots["after-list"];
              return n ? n() : null;
            },
            renderNormalMenuInner: function() {
              var t = this.instance;
              return t.rootOptionsStates.isLoading ? this.renderLoadingOptionsTip() : t.rootOptionsStates.loadingError ? this.renderLoadingRootOptionsErrorTip() : t.rootOptionsStates.isLoaded && t.forest.normalizedOptions.length === 0 ? this.renderNoAvailableOptionsTip() : this.renderOptionList();
            },
            renderLocalSearchMenuInner: function() {
              var t = this.instance;
              return t.rootOptionsStates.isLoading ? this.renderLoadingOptionsTip() : t.rootOptionsStates.loadingError ? this.renderLoadingRootOptionsErrorTip() : t.rootOptionsStates.isLoaded && t.forest.normalizedOptions.length === 0 ? this.renderNoAvailableOptionsTip() : t.localSearch.noResults ? this.renderNoResultsTip() : this.renderOptionList();
            },
            renderAsyncSearchMenuInner: function() {
              var t = this.instance, n = t.getRemoteSearchEntry(), f = t.trigger.searchQuery === "" && !t.defaultOptions, x = f ? !1 : n.isLoaded && n.options.length === 0;
              return f ? this.renderSearchPromptTip() : n.isLoading ? this.renderLoadingOptionsTip() : n.loadingError ? this.renderAsyncSearchLoadingErrorTip() : x ? this.renderNoResultsTip() : this.renderOptionList();
            },
            renderOptionList: function() {
              var t = this.instance;
              return Object(r.createVNode)("div", {
                class: "vue-treeselect__list"
              }, [t.forest.normalizedOptions.map(function(n) {
                return Object(r.createVNode)(ur, {
                  node: n,
                  key: n.id
                }, null);
              })]);
            },
            renderSearchPromptTip: function() {
              var t = this.instance;
              return Object(r.createVNode)(Ne, {
                type: "search-prompt",
                icon: "warning"
              }, {
                default: function() {
                  return [t.searchPromptText];
                }
              });
            },
            renderLoadingOptionsTip: function() {
              var t = this.instance;
              return Object(r.createVNode)(Ne, {
                type: "loading",
                icon: "loader"
              }, {
                default: function() {
                  return [t.loadingText];
                }
              });
            },
            renderLoadingRootOptionsErrorTip: function() {
              var t = this.instance;
              return Object(r.createVNode)(Ne, {
                type: "error",
                icon: "error"
              }, {
                default: function() {
                  return [t.rootOptionsStates.loadingError, Object(r.createVNode)("a", {
                    class: "vue-treeselect__retry",
                    onClick: t.loadRootOptions,
                    title: t.retryTitle
                  }, [t.retryText])];
                }
              });
            },
            renderAsyncSearchLoadingErrorTip: function() {
              var t = this.instance, n = t.getRemoteSearchEntry();
              return Object(r.createVNode)(Ne, {
                type: "error",
                icon: "error"
              }, {
                default: function() {
                  return [n.loadingError, Object(r.createVNode)("a", {
                    class: "vue-treeselect__retry",
                    onClick: t.handleRemoteSearch,
                    title: t.retryTitle
                  }, [t.retryText])];
                }
              });
            },
            renderNoAvailableOptionsTip: function() {
              var t = this.instance;
              return Object(r.createVNode)(Ne, {
                type: "no-options",
                icon: "warning"
              }, {
                default: function() {
                  return [t.noOptionsText];
                }
              });
            },
            renderNoResultsTip: function() {
              var t = this.instance;
              return Object(r.createVNode)(Ne, {
                type: "no-results",
                icon: "warning"
              }, {
                default: function() {
                  return [t.noResultsText];
                }
              });
            },
            onMenuOpen: function() {
              this.adjustMenuOpenDirection(), this.setupMenuSizeWatcher(), this.setupMenuResizeAndScrollEventListeners();
            },
            onMenuClose: function() {
              this.removeMenuSizeWatcher(), this.removeMenuResizeAndScrollEventListeners();
            },
            adjustMenuOpenDirection: function() {
              var t = this.instance;
              if (t.menu.isOpen) {
                var n = t.getMenu(), f = t.getControl(), x = n.getBoundingClientRect(), N = f.getBoundingClientRect(), j = x.height, Q = window.innerHeight, ne = N.top, se = window.innerHeight - N.bottom, ve = N.top >= 0 && N.top <= Q || N.top < 0 && N.bottom > 0, _ = se > j + Wt, he = ne > j + Wt;
                ve ? t.openDirection !== "auto" ? t.menu.placement = dr[t.openDirection] : _ || !he ? t.menu.placement = "bottom" : t.menu.placement = "top" : t.closeMenu();
              }
            },
            setupMenuSizeWatcher: function() {
              var t = this.instance, n = t.getMenu();
              this.menuSizeWatcher || (this.menuSizeWatcher = {
                remove: tn(n, this.adjustMenuOpenDirection)
              });
            },
            setupMenuResizeAndScrollEventListeners: function() {
              var t = this.instance, n = t.getControl();
              this.menuResizeAndScrollEventListeners || (this.menuResizeAndScrollEventListeners = {
                remove: nn(n, this.adjustMenuOpenDirection)
              });
            },
            removeMenuSizeWatcher: function() {
              this.menuSizeWatcher && (this.menuSizeWatcher.remove(), this.menuSizeWatcher = null);
            },
            removeMenuResizeAndScrollEventListeners: function() {
              this.menuResizeAndScrollEventListeners && (this.menuResizeAndScrollEventListeners.remove(), this.menuResizeAndScrollEventListeners = null);
            }
          },
          render: function() {
            var t;
            return Object(r.createVNode)("div", {
              ref: "menu-container",
              class: "vue-treeselect__menu-container",
              style: this.menuContainerStyle
            }, [Object(r.createVNode)(Object(r.resolveComponent)("transition"), {
              name: "vue-treeselect__menu--transition"
            }, cr(t = this.renderMenu()) ? t : {
              default: function() {
                return [t];
              }
            })]);
          }
        }, rn = fr, vr = {
          name: "vue-treeselect--portal-target",
          inject: ["instance"],
          watch: {
            "instance.menu.isOpen": function(t) {
              t ? this.setupHandlers() : this.removeHandlers();
            },
            "instance.menu.placement": function() {
              this.updateMenuContainerOffset();
            }
          },
          created: function() {
            this.controlResizeAndScrollEventListeners = null, this.controlSizeWatcher = null;
          },
          mounted: function() {
            var t = this.instance;
            t.menu.isOpen && this.setupHandlers();
          },
          methods: {
            setupHandlers: function() {
              this.updateWidth(), this.updateMenuContainerOffset(), this.setupControlResizeAndScrollEventListeners(), this.setupControlSizeWatcher();
            },
            removeHandlers: function() {
              this.removeControlResizeAndScrollEventListeners(), this.removeControlSizeWatcher();
            },
            setupControlResizeAndScrollEventListeners: function() {
              var t = this.instance, n = t.getControl();
              this.controlResizeAndScrollEventListeners || (this.controlResizeAndScrollEventListeners = {
                remove: nn(n, this.updateMenuContainerOffset)
              });
            },
            setupControlSizeWatcher: function() {
              var t = this, n = this.instance, f = n.getControl();
              this.controlSizeWatcher || (this.controlSizeWatcher = {
                remove: tn(f, function() {
                  t.updateWidth(), t.updateMenuContainerOffset();
                })
              });
            },
            removeControlResizeAndScrollEventListeners: function() {
              this.controlResizeAndScrollEventListeners && (this.controlResizeAndScrollEventListeners.remove(), this.controlResizeAndScrollEventListeners = null);
            },
            removeControlSizeWatcher: function() {
              this.controlSizeWatcher && (this.controlSizeWatcher.remove(), this.controlSizeWatcher = null);
            },
            updateWidth: function() {
              var t = this.instance, n = this.$el, f = t.getControl(), x = f.getBoundingClientRect();
              n.style.width = x.width + "px";
            },
            updateMenuContainerOffset: function() {
              var t = this.instance, n = t.getControl(), f = this.$el, x = n.getBoundingClientRect(), N = f.getBoundingClientRect(), j = t.menu.placement === "bottom" ? x.height : 0, Q = Math.round(x.left - N.left) + "px", ne = Math.round(x.top - N.top + j) + "px", se = this.$refs.menu.$refs["menu-container"].style, ve = ["transform", "webkitTransform", "MozTransform", "msTransform"], _ = Z(ve, function(he) {
                return he in document.body.style;
              });
              se[_] = "translate(".concat(Q, ", ").concat(ne, ")");
            }
          },
          render: function() {
            var t = this.instance, n = ["vue-treeselect__portal-target", t.wrapperClass], f = {
              zIndex: t.zIndex
            };
            return Object(r.createVNode)("div", {
              class: n,
              style: f,
              "data-instance-id": t.getInstanceId()
            }, [Object(r.createVNode)(rn, {
              ref: "menu"
            }, null)]);
          },
          unmounted: function() {
            this.removeHandlers();
          }
        }, bt, hr = {
          name: "vue-treeselect--menu-portal",
          created: function() {
            this.portalTarget = null;
          },
          mounted: function() {
            this.setup();
          },
          unmounted: function() {
            this.teardown();
          },
          methods: {
            setup: function() {
              var t = document.createElement("div");
              document.body.appendChild(t), this.portalTarget = Object(r.createApp)(D({
                parent: this
              }, vr)), this.portalTarget.mount(t);
            },
            teardown: function() {
              document.body.removeChild(this.portalTarget.$el), this.portalTarget.$el.innerHTML = "", this.portalTarget.$destroy(), this.portalTarget = null;
            }
          },
          render: function() {
            return bt || (bt = Object(r.createVNode)("div", {
              class: "vue-treeselect__menu-placeholder"
            }, null)), bt;
          }
        }, pr = hr, an = Object(r.defineComponent)({
          name: "vue-treeselect",
          mixins: [Xt],
          components: {
            HiddenFields: Ln,
            Control: Zn,
            Menu: rn,
            MenuPortal: pr
          },
          computed: {
            wrapperClass: function() {
              return {
                "vue-treeselect": !0,
                "vue-treeselect--single": this.single,
                "vue-treeselect--multi": this.multiple,
                "vue-treeselect--searchable": this.searchable,
                "vue-treeselect--disabled": this.disabled,
                "vue-treeselect--focused": this.trigger.isFocused,
                "vue-treeselect--has-value": this.hasValue,
                "vue-treeselect--open": this.menu.isOpen,
                "vue-treeselect--open-above": this.menu.placement === "top",
                "vue-treeselect--open-below": this.menu.placement === "bottom",
                "vue-treeselect--branch-nodes-disabled": this.disableBranchNodes,
                "vue-treeselect--append-to-body": this.appendToBody
              };
            }
          }
          // render() {
          //   return (
          //     <div ref="wrapper" class={this.wrapperClass}>
          //       <HiddenFields />
          //       <Control ref="control" />
          //       {this.appendToBody ? <MenuPortal ref="portal" /> : <Menu ref="menu" />}
          //     </div>
          //   )
          // },
        });
        an.render = u;
        var on = an;
        e("d15f");
        var gr = on;
        l.default = gr;
      }
    ),
    /***/
    fb6a: (
      /***/
      function(o, l, e) {
        var a = e("23e7"), i = e("861d"), r = e("e8b5"), u = e("23cb"), c = e("50c4"), h = e("fc6a"), v = e("8418"), p = e("b622"), O = e("1dde"), m = e("ae40"), y = O("slice"), E = m("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), w = p("species"), R = [].slice, M = Math.max;
        a({ target: "Array", proto: !0, forced: !y || !E }, {
          slice: function(D, V) {
            var I = h(this), T = c(I.length), A = u(D, T), z = u(V === void 0 ? T : V, T), C, g, L;
            if (r(I) && (C = I.constructor, typeof C == "function" && (C === Array || r(C.prototype)) ? C = void 0 : i(C) && (C = C[w], C === null && (C = void 0)), C === Array || C === void 0))
              return R.call(I, A, z);
            for (g = new (C === void 0 ? Array : C)(M(z - A, 0)), L = 0; A < z; A++, L++) A in I && v(g, L, I[A]);
            return g.length = L, g;
          }
        });
      }
    ),
    /***/
    fc6a: (
      /***/
      function(o, l, e) {
        var a = e("44ad"), i = e("1d80");
        o.exports = function(r) {
          return a(i(r));
        };
      }
    ),
    /***/
    fdbc: (
      /***/
      function(o, l) {
        o.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0
        };
      }
    ),
    /***/
    fdbf: (
      /***/
      function(o, l, e) {
        var a = e("4930");
        o.exports = a && !Symbol.sham && typeof Symbol.iterator == "symbol";
      }
    ),
    /***/
    ffd6: (
      /***/
      function(o, l, e) {
        var a = e("3729"), i = e("1310"), r = "[object Symbol]";
        function u(c) {
          return typeof c == "symbol" || i(c) && a(c) == r;
        }
        o.exports = u;
      }
    )
    /******/
  });
})(On);
var ta = On.exports;
const na = /* @__PURE__ */ Sr(ta), ra = { key: 0 }, aa = { class: "text-base font-bold" }, oa = {
  class: "relative py-8 mb-0.5 h-75",
  "data-type": "file"
}, ia = ["aria-label"], sa = { class: "text-gray-500 text-xs mb-1" }, la = { key: 1 }, ua = { class: "text-base font-bold" }, ca = {
  class: "mb-0.5",
  "data-type": "url"
}, da = ["value", "aria-label"], fa = {
  key: 0,
  class: "text-red-900 text-xs"
}, va = { key: 2 }, ha = { class: "text-base font-bold" }, pa = {
  class: "relative mb-0.5",
  "data-type": "select"
}, ga = { key: 0 }, ma = {
  key: 0,
  class: "text-red-900 text-xs"
}, ba = { key: 1 }, ya = ["size", "value", "aria-label"], Sa = ["value"], Oa = {
  key: 0,
  class: "text-red-900 text-xs"
}, xa = {
  key: 1,
  class: "text-red-900 text-xs"
}, Ea = { key: 3 }, Na = ["aria-label"], Ta = { class: "text-base font-bold" }, Ca = { key: 4 }, Ia = { class: "text-base font-bold" }, La = { class: "relative mb-0.5" }, Aa = ["value", "aria-label"], Ma = {
  key: 0,
  class: "text-red-900 text-xs"
}, Ra = /* @__PURE__ */ qe({
  __name: "form-input",
  props: {
    defaultOption: {
      type: Boolean,
      default: !1
    },
    formatError: {
      type: Boolean,
      default: !1
    },
    failureError: {
      type: Boolean,
      default: !1
    },
    help: {
      type: [String, Boolean],
      default: !1
    },
    label: {
      type: [String, Boolean],
      default: !1
    },
    modelValue: {
      type: [String, Array],
      default: ""
    },
    name: {
      type: [String, Boolean],
      default: !1
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    selectedValues: {
      type: Array,
      default: () => []
    },
    size: {
      type: [Number, String],
      default: 0
    },
    sublayerOptions: {
      type: Function,
      default() {
        return [];
      }
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    searchable: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "text"
    },
    url: {
      type: [String, Boolean],
      default: !1
    },
    validation: {
      type: Boolean,
      default: !1
    },
    validationMessages: {
      type: Object
    },
    ariaLabel: {
      type: String,
      default: !1
    }
  },
  emits: ["update:modelValue", "link", "select", "upload", "text", "nested"],
  setup(d, { emit: o }) {
    const l = Bt("iApi"), { t: e } = zt(), a = o, i = d, r = ee(), u = ee(!1), c = ee(!1), h = ee(!1), v = ee(!1), p = ee([...i.selectedValues]), O = ee("value-label"), m = ee("option-label"), y = ee(void 0), E = ee(null), w = Xe([]);
    if (i.defaultOption && i.modelValue === "" && i.options.length) {
      let b = i.options[0].value;
      if (i.name === "latField") {
        const S = new RegExp(/^(y|lat.*)$/i);
        b = i.options.find((U) => S.test(U.label))?.value || b;
      } else if (i.name === "longField") {
        const S = new RegExp(/^(x|long.*)$/i);
        b = i.options.find((U) => S.test(U.label))?.value || b;
      }
      a("update:modelValue", b);
    }
    const R = (b) => {
      b.trim() !== "" ? u.value = !0 : (u.value = !1, l.updateAlert(e("wizard.configure.name.error.required")));
    }, M = (b) => {
      let S;
      try {
        S = new URL(b);
      } catch {
        return u.value = !1, !1;
      }
      S.protocol === "http:" || S.protocol === "https:" ? u.value = !0 : u.value = !1;
    }, F = (b) => {
      a("upload", b.target.files[0]), b.target.value = "";
    }, D = (b) => {
      M(b.target.value), a("link", b.target.value, u), c.value = !1;
    }, V = (b, S) => {
      a(b ? "select" : "update:modelValue", S.target.value);
    }, I = (b) => {
      a("nested", b.target.checked);
    }, T = (b) => {
      R(b.target.value), a("link", b.target.value, u), h.value = !1;
    }, A = () => {
      a("select", i.sublayerOptions(p.value)), p.value && p.value.length > 0 ? v.value = !1 : v.value = !0;
    }, z = (b) => b.length > 5 ? `${b.slice(0, 5)}...` : b;
    function C() {
      y.value = new ResizeObserver(function() {
        g();
      }), y.value.observe(l.$vApp.$el.querySelector(".vue-treeselect__control")), y.value.observe(l.$vApp.$el.querySelector(".vue-treeselect__menu"));
    }
    const g = () => {
      const b = l.$vApp.$el.querySelector(".vue-treeselect__menu")?.clientHeight, S = l.$vApp.$el.querySelector(".vue-treeselect__control")?.clientHeight;
      r.value.style.height = `${b + S + 30}px`;
    };
    w.push(
      lt(E, (b) => {
        b && L();
      })
    );
    const L = () => {
      if (E.value) {
        const b = E.value.querySelector('input[type="text"]');
        b && b.setAttribute("aria-label", e("wizard.configure.sublayers.select"));
      }
    };
    return ut(() => {
      y.value.disconnect(), w.forEach((b) => b());
    }), (b, S) => {
      const P = bn("truncate");
      return k(), te("div", {
        class: "input-wrapper mb-12",
        ref_key: "el",
        ref: r
      }, [
        d.type === "file" ? (k(), te("div", ra, [
          H("label", aa, re(d.label), 1),
          H("div", oa, [
            H("input", {
              class: "absolute w-full opacity-0 inset-0 cursor-pointer",
              type: "file",
              name: "file",
              accept: ".geojson,.json,.csv,.zip",
              "aria-label": i.ariaLabel,
              onInput: S[0] || (S[0] = (U) => {
                F(U);
              })
            }, null, 40, ia),
            S[11] || (S[11] = H("div", { class: "upload-mask absolute inset-0 flex border-dashed border-2 border-gray-400 pointer-events-none justify-center" }, [
              H("svg", {
                class: "w-30 h-30 m-auto",
                fill: "#a8a8a8",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 58 58"
              }, [
                H("path", { d: "M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z" }),
                H("polygon", { points: "27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22" })
              ])
            ], -1))
          ]),
          H("div", sa, re(d.help), 1)
        ])) : d.type === "url" ? (k(), te("div", la, [
          H("label", ua, re(d.label), 1),
          H("div", ca, [
            H("input", {
              class: "text-sm w-full border-solid border-gray-300 mb-5 focus:border-green-500",
              type: "url",
              name: "url",
              value: d.modelValue,
              "aria-label": i.ariaLabel,
              onChange: S[1] || (S[1] = (U) => u.value ? c.value = !1 : c.value = !0),
              onInput: S[2] || (S[2] = (U) => {
                D(U);
              })
            }, null, 40, da)
          ]),
          c.value ? (k(), te("div", fa, re(d.modelValue ? d.validationMessages?.invalid : d.validationMessages?.required), 1)) : ue("", !0)
        ])) : d.type === "select" ? (k(), te("div", va, [
          H("label", ha, re(d.label), 1),
          H("div", pa, [
            d.multiple ? (k(), te("div", ga, [
              H("div", {
                ref_key: "treeWrapper",
                ref: E
              }, [
                pe(G(na), {
                  modelValue: p.value,
                  "onUpdate:modelValue": S[3] || (S[3] = (U) => p.value = U),
                  multiple: !0,
                  options: d.options,
                  "default-expand-level": 1,
                  "always-open": !0,
                  "open-direction": "bottom",
                  "max-height": 300,
                  limit: 4,
                  disableFuzzyMatching: !0,
                  searchable: d.searchable,
                  childrenIgnoreDisabled: !0,
                  placeholder: G(e)("wizard.configure.sublayers.select"),
                  noResultsText: G(e)("wizard.configure.sublayers.results"),
                  clearAllText: G(e)("wizard.configure.sublayers.clearAll"),
                  onSelect: S[4] || (S[4] = (U) => {
                    b.$nextTick(() => {
                      A();
                    });
                  }),
                  onDeselect: S[5] || (S[5] = (U) => {
                    b.$nextTick(() => {
                      A();
                    });
                  }),
                  onOpen: S[6] || (S[6] = (U) => {
                    b.$nextTick(() => {
                      C();
                    });
                  })
                }, {
                  [O.value]: ge(({ node: U }) => [
                    H("label", null, re(z(U.label)), 1)
                  ]),
                  [m.value]: ge(({ node: U, labelClassName: W }) => [
                    Dt((k(), te("label", {
                      class: Je(W)
                    }, [
                      Ze(re(U.label), 1)
                    ], 2)), [
                      [P, {
                        options: {
                          placement: "top",
                          hideOnClick: !1,
                          theme: "ramp4",
                          animation: "scale"
                        }
                      }]
                    ])
                  ]),
                  _: 2
                }, 1032, ["modelValue", "options", "searchable", "placeholder", "noResultsText", "clearAllText"])
              ], 512),
              d.validation && v.value ? (k(), te("div", ma, re(d.validationMessages?.required), 1)) : ue("", !0)
            ])) : (k(), te("div", ba, [
              H("select", {
                class: Je(["block border-solid border-gray-300 w-full p-3 overflow-y-auto", d.size && "configure-select"]),
                size: d.size,
                value: d.modelValue,
                onInput: S[7] || (S[7] = (U) => V(d.size, U)),
                "aria-label": i.ariaLabel
              }, [
                (k(!0), te(gn, null, mn(d.options, (U) => (k(), te("option", {
                  class: "p-6",
                  key: U.label,
                  value: U.value
                }, re(U.label), 9, Sa))), 128))
              ], 42, ya),
              d.validation && d.formatError ? (k(), te("div", Oa, re(d.validationMessages?.invalid), 1)) : ue("", !0),
              d.validation && d.failureError ? (k(), te("div", xa, re(d.validationMessages?.failure), 1)) : ue("", !0)
            ]))
          ])
        ])) : d.type === "checkbox" ? (k(), te("div", Ea, [
          H("input", {
            class: "text-sm border-solid border-gray-300 mb-5 focus:border-green-500 mr-10",
            type: "checkbox",
            name: "nested",
            checked: !0,
            "aria-label": i.ariaLabel,
            onChange: S[8] || (S[8] = (U) => {
              I(U);
            })
          }, null, 40, Na),
          H("label", Ta, re(d.label), 1)
        ])) : (k(), te("div", Ca, [
          H("label", Ia, re(d.label), 1),
          H("div", La, [
            H("input", {
              class: Je(["border-solid border-gray-300 p-3 w-full", { "error-border": !u.value && !d.modelValue }]),
              type: "text",
              value: d.modelValue,
              "aria-label": i.ariaLabel,
              onChange: S[9] || (S[9] = (U) => u.value ? h.value = !1 : h.value = !0),
              onInput: S[10] || (S[10] = (U) => {
                T(U);
              })
            }, null, 42, Aa)
          ]),
          d.validation && !d.modelValue ? (k(), te("div", Ma, re(d.validationMessages?.required), 1)) : ue("", !0)
        ]))
      ], 512);
    };
  }
}), ye = /* @__PURE__ */ ct(Ra, [["__scopeId", "data-v-be5c9863"]]), wa = { class: "step relative flex flex-col px-12" }, ja = { class: "stepper-header flex pb-24" }, Fa = {
  key: 1,
  class: "flex-none stepper-check w-24 h-24 text-gray-400"
}, Da = { class: "flex flex-col overflow-hidden" }, Va = { class: "pl-12 flex items-center text-md" }, Pa = { class: "pl-12 text-xs transition-opacity duration-1000 ease-out" }, za = { class: "pl-36" }, Ba = /* @__PURE__ */ qe({
  __name: "stepper-item",
  props: {
    title: {
      type: String,
      required: !0
    },
    summary: {
      type: String
    }
  },
  setup(d) {
    const o = Bt("stepper"), l = ee(-1);
    Pt(() => {
      l.value = o.numSteps++;
    });
    const e = () => o.activeIndex > l.value, a = () => o.activeIndex === l.value;
    return (i, r) => {
      const u = bn("truncate");
      return k(), te("div", wa, [
        H("div", ja, [
          e() ? (k(), te("div", Fa, r[0] || (r[0] = [
            H("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              height: "100%",
              width: "100%",
              preserveAspectRatio: "xMidYMid meet",
              viewBox: "0 0 24 24",
              focusable: "false"
            }, [
              H("g", { id: "check_circle" }, [
                H("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })
              ])
            ], -1)
          ]))) : (k(), te("div", {
            key: 0,
            class: Je(["w-24 h-24 bg-gray-500 rounded-full flex justify-center items-center text-white text-xs font-semibold", { "bg-blue-500": a }])
          }, re(l.value + 1), 3)),
          H("div", Da, [
            H("div", Va, re(d.title), 1),
            Dt((k(), te("div", Pa, [
              Ze(re(d.summary), 1)
            ])), [
              [cn, !a()],
              [u]
            ])
          ])
        ]),
        pe(Or, {
          name: "step",
          mode: "out-in"
        }, {
          default: ge(() => [
            Dt(H("div", za, [
              Ge(i.$slots, "default", {}, void 0, !0)
            ], 512), [
              [cn, a()]
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
}), Ft = /* @__PURE__ */ ct(Ba, [["__scopeId", "data-v-686fab2c"]]), $a = { class: "py-12 h-auto stepper" }, Ha = /* @__PURE__ */ qe({
  __name: "stepper",
  props: {
    activeStep: {
      type: Number,
      default: 0
    }
  },
  setup(d) {
    const o = d, l = Se(() => o.activeStep), e = Xe([]), a = Xe({
      activeIndex: o.activeStep,
      numSteps: 0
    });
    return xr("stepper", a), e.push(
      lt(l, () => {
        a.activeIndex = o.activeStep;
      })
    ), ut(() => {
      e.forEach((i) => i());
    }), (i, r) => (k(), te("div", $a, [
      Ge(i.$slots, "default")
    ]));
  }
}), Ua = {
  key: 0,
  class: "inline-flex items-center mb-10"
}, Wa = { class: "px-5 text-xs" }, Ga = { key: 5 }, Ka = ["for"], Xa = {
  key: 6,
  class: "text-base font-bold"
}, Qa = { class: "sr-only" }, Ya = { class: "sr-only" }, ka = /* @__PURE__ */ qe({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(d) {
    const o = Er(), { t: l } = zt(), e = Bt("iApi"), a = ee(), i = ee([]), r = Se(() => o.layerSource), u = Se(() => o.currStep), c = ee(), h = ee(), v = ee(0), p = ee(!1), O = ee(!1), m = ee(!1), y = ee(!1), E = ee(!1), w = ee(!1), R = ee(!1), M = ee(!0), F = ee(""), D = ee(""), V = ee([]), I = Xe([
      {
        value: ae.FEATURE,
        label: l("wizard.layerType.esriFeature")
      },
      {
        value: ae.MAPIMAGE,
        label: l("wizard.layerType.esriMapImage")
      },
      {
        value: ae.TILE,
        label: l("wizard.layerType.esriTile")
      },
      {
        value: ae.IMAGERY,
        label: l("wizard.layerType.esriImagery")
      },
      {
        value: ae.WMS,
        label: l("wizard.layerType.ogcWms")
      },
      {
        value: ae.WFS,
        label: l("wizard.layerType.ogcWfs")
      }
    ]), T = Xe([
      {
        value: ae.GEOJSON,
        label: l("wizard.fileType.geojson")
      },
      {
        value: ae.SHAPEFILE,
        label: l("wizard.fileType.shapefile")
      },
      { value: ae.CSV, label: l("wizard.fileType.csv") }
    ]), A = Se({
      get() {
        return o.url;
      },
      set($) {
        o.url = $;
      }
    }), z = Se({
      get() {
        return o.fileData;
      },
      set($) {
        o.fileData = $;
      }
    }), C = Se({
      get() {
        return o.typeSelection;
      },
      set($) {
        o.typeSelection = $;
      }
    }), g = Se({
      get() {
        return o.layerInfo;
      },
      set($) {
        o.layerInfo = $;
      }
    }), L = Se(() => {
      let $ = e.geo.proxy !== "";
      switch (C.value) {
        case ae.FEATURE:
        case ae.MAPIMAGE:
        case ae.TILE:
        case ae.IMAGERY:
          return !$;
        case ae.WFS:
          return !0;
        case ae.WMS:
          return !$;
        case ae.GEOJSON:
        case ae.SHAPEFILE:
        case ae.CSV:
          return !!(X() && !z.value);
        default:
          return !1;
      }
    });
    Nr(() => ((u.value === ze.FORMAT || u.value === ze.CONFIGURE) && (O.value = !0, o.goToStep(ze.FORMAT)), !1)), Pt(() => {
      i.value.push(
        e.event.on(dn.LAYER_LAYERSTATECHANGE, ($) => {
          $.layer.userAdded && (F.value = $.layer.name, R.value = $.state !== Et.LOADING && $.state !== Et.NEW, M.value = R.value && $.state === Et.LOADED);
        })
      ), u.value === ze.CONFIGURE && (g.value?.configOptions.includes("colour") && xe(), E.value = !g.value?.configOptions.includes("sublayers") && !!g.value?.config.name);
    }), ut(() => {
      i.value.forEach(($) => e.event.off($));
    });
    const b = async ($) => {
      const B = new FileReader();
      B.onload = (J) => {
        z.value = B.result, A.value = $.name, S(J);
      }, B.readAsArrayBuffer($);
    }, S = ($) => {
      $?.preventDefault(), C.value = r.value.guessFormatFromURL(A.value), o.goToStep(ze.FORMAT);
    }, P = async ($) => {
      $?.preventDefault(), p.value = !0, m.value = !1, w.value = !0, D.value = X() ? T.find((J) => J.value === C.value)?.label : I.find((J) => J.value === C.value)?.label;
      try {
        g.value = X() ? await r.value.fetchFileInfo(A.value, C.value, z.value) : await r.value.fetchServiceInfo(
          A.value,
          C.value,
          o.nested
        ), X() && z.value && (g.value.config.url = "");
      } catch {
        p.value = !1, m.value = !0;
        return;
      }
      const B = C.value === ae.FEATURE && !(g.value && g.value.fields);
      if (!g.value || B) {
        O.value = !0, g.value = {
          config: {
            id: "Placeholder",
            layerType: ae.UNKNOWN,
            url: ""
          },
          configOptions: []
        }, p.value = !1;
        return;
      }
      xe(), o.goToStep(ze.CONFIGURE), E.value = !(g.value.configOptions.includes("sublayers") || !g.value.config.name), p.value = !1, w.value = !1;
    }, U = async ($) => {
      $?.preventDefault();
      const B = Object.assign(g.value.config, $);
      V.value = [], D.value = "";
      const J = e.geo.layer.createLayer(B);
      e.geo.map.addLayer(J).catch(() => {
      }), J.userAdded = !0, e.event.emit(dn.USER_LAYER_ADDED, J), y.value = !1, o.goToStep(ze.UPLOAD);
    }, W = () => g.value?.fields.map(($) => ({
      value: $.name,
      label: $.alias || $.name
    })), Z = ($) => g.value?.latLonFields[$].map((B) => ({
      value: B,
      label: B
    })), X = () => z.value || A.value.match(/\.(zip|csv|json|geojson)$/), ie = ($) => {
      b($), A.value = "";
    }, ce = ($, B) => {
      A.value = $.trim(), B ? y.value = !0 : y.value = !1;
    }, Le = ($) => {
      C.value = $, O.value = !1;
    }, Ae = ($) => {
      g.value.config.name = $.trim();
      const B = g.value?.config.sublayers;
      (B ? $ && B.length > 0 : $.trim()) ? E.value = !0 : E.value = !1;
    }, Te = ($) => {
      g.value.config.sublayers = $, $.length > 0 && g.value?.config.name ? E.value = !0 : E.value = !1;
    }, Me = ($) => {
      if (o.nested = $, V.value = [], v.value += 1, C.value === ae.MAPIMAGE) {
        g.value.layers = r.value.createLayerHierarchy(
          g.value.layersRaw,
          o.nested
        );
        const B = new Set(
          (g.value?.config?.sublayers ?? []).map((J) => J.index)
        );
        o.nested ? Re(g, B) : Qe(g, B);
      } else if (C.value === ae.WMS) {
        g.value.layers = r.value.mapWmsLayerList(
          g.value.layersRaw,
          o.nested
        );
        const B = new Set((g.value?.config?.sublayers ?? []).map((J) => J.id));
        o.nested ? Oe(g, B) : _e(g, B);
      }
      Te(Ye(V.value));
    }, Re = ($, B) => {
      const J = /* @__PURE__ */ new Map();
      for (const K of $.value.layersRaw)
        if (K.parentLayerId !== -1) {
          const de = J.get(K.parentLayerId) || [];
          de.push(K.id), J.set(K.parentLayerId, de);
        }
      const q = (K) => {
        const de = J.get(K);
        return de ? de.every((Ee) => J.has(Ee) ? q(Ee) : B.has(Ee)) : !1;
      }, oe = (K) => {
        if (q(K))
          V.value.push(K);
        else {
          const de = J.get(K);
          if (de)
            for (const Ee of de)
              B.has(Ee) && V.value.push(Ee);
        }
      };
      for (const K of J.keys()) oe(K);
      for (const K of $.value.layersRaw)
        K.parentLayerId === -1 && !J.has(K.id) && B.has(K.id) && V.value.push(K.id);
      V.value = Array.from(new Set(V.value));
    }, Oe = ($, B) => {
      const J = (K) => !K.layers || K.layers.length === 0 ? B.has(K.name) : K.layers.every((de) => J(de)), q = (K) => {
        J(K) ? V.value.push(K.name) : K.layers && K.layers.forEach(q);
      }, oe = $.value.layersRaw[0];
      oe && oe.layers && oe.layers.forEach((K) => q(K)), V.value = Array.from(new Set(V.value));
    }, Qe = ($, B) => {
      const J = (q) => {
        const oe = $.value.layersRaw.filter((K) => K.parentLayerId === q);
        if (oe.length > 0)
          for (const K of oe)
            B.has(K.id) ? V.value.push(K.id) : J(K.id);
        else V.value.push(q);
      };
      for (const q of $.value.layersRaw)
        B.has(q.id) && J(q.id);
      V.value = Array.from(new Set(V.value));
    }, _e = ($, B) => {
      const J = (oe) => {
        oe.layers && oe.layers.length > 0 ? oe.layers.forEach(J) : V.value.push(oe.name);
      }, q = $.value.layersRaw[0];
      for (const oe of B) {
        const K = q.layers.find((de) => de.name === oe);
        K && K.layers && K.layers.length > 0 ? J(K) : K && V.value.push(K.name);
      }
      V.value = Array.from(new Set(V.value));
    }, Ye = ($) => $.map((B) => {
      switch (C.value) {
        case ae.MAPIMAGE:
          return {
            index: B,
            state: { opacity: 1, visibility: !0 }
          };
        case ae.WMS: {
          const J = B.lastIndexOf("#");
          return { id: B.substring(0, J) };
        }
        default:
          return {
            id: B
          };
      }
    }), xe = () => {
      c.value = g.value?.config.colour ?? "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
      do
        h.value = Math.random().toString(36).substring(2, 9);
      while (document.getElementById(h.value + "-hue-slider") !== null);
    }, we = ($) => {
      g.value.config.colour = $.colors.hex.substring(0, 7), Cr(() => {
        a.value.querySelector(".vacp-copy-button").style.backgroundColor = g.value?.config.colour;
      });
    }, je = () => {
      y.value = !1, o.goToStep(0);
    }, Fe = () => {
      V.value = [], E.value = !1, o.goToStep(1);
    };
    return ($, B) => {
      const J = Tr("panel-screen");
      return k(), Ie(J, { panel: d.panel }, {
        header: ge(() => [
          Ze(re(G(l)("wizard.title")), 1)
        ]),
        content: ge(() => [
          pe(Ha, { activeStep: u.value }, {
            default: ge(() => [
              pe(Ft, {
                title: G(l)("wizard.upload.title"),
                summary: A.value
              }, {
                default: ge(() => [
                  H("form", {
                    name: "upload",
                    onSubmit: S,
                    onClick: B[1] || (B[1] = (q) => R.value = !1)
                  }, [
                    pe(ye, {
                      type: "file",
                      name: "file",
                      label: G(l)("wizard.upload.file.label"),
                      help: G(l)("wizard.upload.file.help"),
                      onUpload: ie,
                      "aria-label": G(l)("wizard.upload.file.label")
                    }, null, 8, ["label", "help", "aria-label"]),
                    B[12] || (B[12] = H("span", { class: "block text-center mb-10" }, "or", -1)),
                    pe(ye, {
                      type: "url",
                      name: "url",
                      modelValue: A.value,
                      "onUpdate:modelValue": B[0] || (B[0] = (q) => A.value = q),
                      label: G(l)("wizard.upload.url.label"),
                      onLink: ce,
                      validation: !0,
                      "validation-messages": {
                        required: G(l)("wizard.upload.url.error.required"),
                        invalid: G(l)("wizard.upload.url.error.url")
                      },
                      "aria-label": G(l)("wizard.upload.url.label")
                    }, null, 8, ["modelValue", "label", "validation-messages", "aria-label"]),
                    pe(jt, {
                      onSubmit: S,
                      onCancel: je,
                      disabled: !y.value
                    }, null, 8, ["disabled"])
                  ], 32)
                ]),
                _: 1
              }, 8, ["title", "summary"]),
              pe(Ft, {
                title: G(l)("wizard.format.title"),
                summary: D.value
              }, {
                default: ge(() => [
                  H("form", {
                    name: "format",
                    onSubmit: P
                  }, [
                    L.value ? (k(), te("div", Ua, [
                      B[13] || (B[13] = H("svg", {
                        class: "inline-block fill-current w-16 h-16",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                      }, [
                        H("path", {
                          d: "M0 0h24v24H0z",
                          fill: "none"
                        }),
                        H("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })
                      ], -1)),
                      H("span", Wa, re(G(l)("wizard.format.info.cors")), 1)
                    ])) : ue("", !0),
                    pe(ye, {
                      type: "select",
                      name: "type",
                      modelValue: C.value,
                      "onUpdate:modelValue": B[2] || (B[2] = (q) => C.value = q),
                      onSelect: Le,
                      size: X() ? T.length : I.length,
                      label: X() ? G(l)("wizard.format.type.file") : G(l)("wizard.format.type.service"),
                      options: X() ? T : I,
                      formatError: O.value,
                      failureError: m.value,
                      validation: w.value,
                      "validation-messages": {
                        required: G(l)("wizard.format.type.error.required"),
                        invalid: G(l)("wizard.format.type.error.invalid"),
                        failure: `${G(l)("wizard.format.type.error.failure")}.${L.value ? " " + G(l)("wizard.format.warn.cors") + "." : ""}${" " + G(l)("wizard.format.warn.vpn") + "."}`
                      },
                      onKeydown: B[3] || (B[3] = fn(() => {
                      }, ["stop"])),
                      "aria-label": G(l)("wizard.format.type.service")
                    }, null, 8, ["modelValue", "size", "label", "options", "formatError", "failureError", "validation", "validation-messages", "aria-label"]),
                    pe(jt, {
                      onSubmit: P,
                      onCancel: B[4] || (B[4] = () => {
                        p.value = !1, O.value = !1, m.value = !1, A.value ? y.value = !0 : y.value = !1, w.value = !1, G(o).goToStep(0), D.value = "";
                      }),
                      animation: !0,
                      disabled: p.value
                    }, null, 8, ["disabled"])
                  ], 32)
                ]),
                _: 1
              }, 8, ["title", "summary"]),
              pe(Ft, {
                title: G(l)("wizard.configure.title")
              }, {
                default: ge(() => [
                  H("form", {
                    name: "configure",
                    onSubmit: U,
                    ref_key: "formElement",
                    ref: a
                  }, [
                    g.value?.configOptions.includes("name") ? (k(), Ie(ye, {
                      key: 0,
                      type: "text",
                      name: "name",
                      modelValue: g.value.config.name,
                      "onUpdate:modelValue": B[5] || (B[5] = (q) => g.value.config.name = q),
                      onLink: Ae,
                      label: G(l)("wizard.configure.name.label"),
                      "aria-label": G(l)("wizard.configure.name.label"),
                      validation: !0,
                      "validation-messages": {
                        required: G(l)("wizard.configure.name.error.required")
                      }
                    }, null, 8, ["modelValue", "label", "aria-label", "validation-messages"])) : ue("", !0),
                    g.value?.configOptions.includes("nameField") ? (k(), Ie(ye, {
                      key: 1,
                      type: "select",
                      name: "nameField",
                      modelValue: g.value.config.nameField,
                      "onUpdate:modelValue": B[6] || (B[6] = (q) => g.value.config.nameField = q),
                      label: G(l)("wizard.configure.nameField.label"),
                      "aria-label": G(l)("wizard.configure.nameField.label"),
                      defaultOption: !0,
                      options: W()
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : ue("", !0),
                    g.value?.configOptions.includes("tooltipField") ? (k(), Ie(ye, {
                      key: 2,
                      type: "select",
                      name: "tooltipField",
                      modelValue: g.value.config.tooltipField,
                      "onUpdate:modelValue": B[7] || (B[7] = (q) => g.value.config.tooltipField = q),
                      label: G(l)("wizard.configure.tooltipField.label"),
                      "aria-label": G(l)("wizard.configure.tooltipField.label"),
                      options: W()
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : ue("", !0),
                    g.value?.configOptions.includes("latField") ? (k(), Ie(ye, {
                      key: 3,
                      type: "select",
                      name: "latField",
                      modelValue: g.value.config.latField,
                      "onUpdate:modelValue": B[8] || (B[8] = (q) => g.value.config.latField = q),
                      defaultOption: !0,
                      label: G(l)("wizard.configure.latField.label"),
                      "aria-label": G(l)("wizard.configure.latField.label"),
                      options: Z("lat")
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : ue("", !0),
                    g.value?.configOptions.includes("longField") ? (k(), Ie(ye, {
                      key: 4,
                      type: "select",
                      name: "longField",
                      modelValue: g.value.config.longField,
                      "onUpdate:modelValue": B[9] || (B[9] = (q) => g.value.config.longField = q),
                      defaultOption: !0,
                      label: G(l)("wizard.configure.longField.label"),
                      "aria-label": G(l)("wizard.configure.longField.label"),
                      options: Z("lon")
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : ue("", !0),
                    g.value?.configOptions.includes("sublayers") ? (k(), te("div", Ga, [
                      pe(ye, {
                        type: "checkbox",
                        name: "nested",
                        onNested: Me,
                        label: G(l)("wizard.configure.sublayers.nested"),
                        "aria-label": G(l)("wizard.configure.sublayers.nested")
                      }, null, 8, ["label", "aria-label"]),
                      (k(), Ie(ye, {
                        type: "select",
                        key: v.value,
                        name: "sublayers",
                        modelValue: g.value.config.sublayers,
                        "onUpdate:modelValue": B[10] || (B[10] = (q) => g.value.config.sublayers = q),
                        onSelect: Te,
                        label: G(l)("wizard.configure.sublayers.label"),
                        "aria-label": G(l)("wizard.configure.sublayers.label"),
                        options: g.value.layers,
                        selectedValues: V.value,
                        sublayerOptions: Ye,
                        multiple: !0,
                        searchable: !0,
                        validation: !0,
                        "validation-messages": {
                          required: G(l)("wizard.configure.sublayers.error.required")
                        },
                        onKeydown: B[11] || (B[11] = fn(() => {
                        }, ["stop"]))
                      }, null, 8, ["modelValue", "label", "aria-label", "options", "selectedValues", "validation-messages"]))
                    ])) : ue("", !0),
                    H("label", {
                      class: "sr-only",
                      for: `${h.value}-color-hex`
                    }, re(G(l)("wizard.configure.colour.hex")), 9, Ka),
                    g.value?.configOptions.includes("colour") ? (k(), te("label", Xa, re(G(l)("wizard.configure.colour.label")), 1)) : ue("", !0),
                    g.value?.configOptions.includes("colour") ? (k(), Ie(G(Sn), {
                      key: 7,
                      "alpha-channel": "hide",
                      "visible-formats": ["hex"],
                      "default-format": "hex",
                      id: h.value,
                      color: c.value,
                      onColorChange: we
                    }, {
                      "hue-range-input-label": ge(() => [
                        H("span", Qa, re(G(l)("wizard.configure.colour.hue")), 1)
                      ]),
                      "copy-button": ge(() => [
                        H("span", Ya, re(G(l)("wizard.configure.colour.copy")), 1),
                        B[14] || (B[14] = H("svg", {
                          "aria-hidden": "true",
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "15",
                          height: "15",
                          viewBox: "0 0 15 15"
                        }, [
                          H("path", {
                            d: "M5 0v2H1v13h12v-3h-1v2H2V5h10v3h1V2H9V0zm1 1h2v2h3v1H3V3h3z",
                            fill: "currentColor"
                          }),
                          H("path", {
                            d: "M10 7v2h5v2h-5v2l-3-3zM3 6h5v1H3zm0 2h3v1H3zm0 2h3v1H3zm0 2h5v1H3z",
                            fill: "currentColor"
                          })
                        ], -1))
                      ]),
                      _: 1
                    }, 8, ["id", "color"])) : ue("", !0),
                    pe(jt, {
                      onSubmit: U,
                      onCancel: Fe,
                      disabled: !E.value
                    }, null, 8, ["disabled"])
                  ], 544)
                ]),
                _: 1
              }, 8, ["title"])
            ]),
            _: 1
          }, 8, ["activeStep"]),
          R.value ? (k(), te("div", {
            key: 0,
            class: Je(["p-3 border-solid border-2", M.value ? "bg-green-100 !border-green-900" : "bg-red-100 !border-red-900"])
          }, re(F.value) + " " + re(G(l)(`wizard.upload.${M.value ? "success" : "fail"}`)), 3)) : ue("", !0)
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), qa = /* @__PURE__ */ ct(ka, [["__scopeId", "data-v-085c20bf"]]);
export {
  qa as default
};
//# sourceMappingURL=screen-ooRq_nWr.js.map
