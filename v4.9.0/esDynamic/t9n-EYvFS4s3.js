import { cI as _ } from "./main-DIdq27YS.js";
import { u as D, c as I } from "./dom-C63VhwMK.js";
import { c as x } from "./observers-B9f2uMW0.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */
function ne(e) {
  return e === "Enter" || e === " ";
}
const w = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */
const R = new RegExp("\\.(0+)?$"), T = new RegExp("0+$");
class i {
  constructor(t) {
    if (t instanceof i)
      return t;
    const [s, n] = U(t).split(".").concat("");
    this.value = BigInt(s + n.padEnd(i.DECIMALS, "0").slice(0, i.DECIMALS)) + BigInt(i.ROUNDED && n[i.DECIMALS] >= "5"), this.isNegative = t.charAt(0) === "-";
  }
  getIntegersAndDecimals() {
    const t = this.value.toString().replace("-", "").padStart(i.DECIMALS + 1, "0"), s = t.slice(0, -i.DECIMALS), n = t.slice(-i.DECIMALS).replace(T, "");
    return { integers: s, decimals: n };
  }
  toString() {
    const { integers: t, decimals: s } = this.getIntegersAndDecimals();
    return `${this.isNegative ? "-" : ""}${t}${s.length ? "." + s : ""}`;
  }
  formatToParts(t) {
    const { integers: s, decimals: n } = this.getIntegersAndDecimals(), r = t.numberFormatter.formatToParts(BigInt(s));
    return this.isNegative && r.unshift({ type: "minusSign", value: t.minusSign }), n.length && (r.push({ type: "decimal", value: t.decimal }), n.split("").forEach((a) => r.push({ type: "fraction", value: a }))), r;
  }
  format(t) {
    const { integers: s, decimals: n } = this.getIntegersAndDecimals(), r = `${this.isNegative ? t.minusSign : ""}${t.numberFormatter.format(BigInt(s))}`, a = n.length ? `${t.decimal}${n.split("").map((l) => t.numberFormatter.format(Number(l))).join("")}` : "";
    return `${r}${a}`;
  }
  add(t) {
    return i.fromBigInt(this.value + new i(t).value);
  }
  subtract(t) {
    return i.fromBigInt(this.value - new i(t).value);
  }
  multiply(t) {
    return i._divRound(this.value * new i(t).value, i.SHIFT);
  }
  divide(t) {
    return i._divRound(this.value * i.SHIFT, new i(t).value);
  }
}
i.DECIMALS = 100;
i.ROUNDED = !0;
i.SHIFT = BigInt("1" + "0".repeat(i.DECIMALS));
i._divRound = (e, t) => i.fromBigInt(e / t + (i.ROUNDED ? e * BigInt(2) / t % BigInt(2) : BigInt(0)));
i.fromBigInt = (e) => Object.assign(Object.create(i.prototype), { value: e, isNegative: e < BigInt(0) });
function b(e) {
  return !(!e || isNaN(Number(e)));
}
function re(e) {
  return !e || !Z(e) ? "" : d(e, (t) => {
    let s = !1;
    const n = t.split("").filter((r, a) => r.match(/\./g) && !s ? (s = !0, !0) : r.match(/\-/g) && a === 0 ? !0 : w.includes(r)).join("");
    return b(n) ? new i(n).toString() : "";
  });
}
const y = /^([-0])0+(?=\d)/, z = /(?!^\.)\.$/, j = /(?!^-)-/g, k = /^-\b0\b\.?0*$/, P = /0*$/, ie = (e) => d(e, (t) => {
  const s = t.replace(j, "").replace(z, "").replace(y, "$1");
  return b(s) ? k.test(s) ? s : H(s) : t;
});
function H(e) {
  const t = e.split(".")[1], s = new i(e).toString(), [n, r] = s.split(".");
  return t && r !== t ? `${n}.${t}` : s;
}
function d(e, t) {
  if (!e)
    return e;
  const s = e.toLowerCase().indexOf("e") + 1;
  return s ? e.replace(/[eE]*$/g, "").substring(0, s).concat(e.slice(s).replace(/[eE]/g, "")).split(/[eE]/).map((n, r) => t(r === 1 ? n.replace(/\./g, "") : n)).join("e").replace(/^e/, "1e") : t(e);
}
function U(e) {
  const t = e.split(/[eE]/);
  if (t.length === 1)
    return e;
  const s = +e;
  if (Number.isSafeInteger(s))
    return `${s}`;
  const n = e.charAt(0) === "-", r = +t[1], a = t[0].split("."), l = (n ? a[0].substring(1) : a[0]) || "", v = a[1] || "", M = (c, o) => {
    const g = Math.abs(o) - c.length, f = g > 0 ? `${"0".repeat(g)}${c}` : c;
    return `${f.slice(0, o)}.${f.slice(o)}`;
  }, A = (c, o) => {
    const g = o > c.length ? `${c}${"0".repeat(o - c.length)}` : c;
    return `${g.slice(0, o)}.${g.slice(o)}`;
  }, S = r > 0 ? `${l}${A(v, r)}` : `${M(l, r)}${v}`;
  return `${n ? "-" : ""}${S.charAt(0) === "." ? "0" : ""}${S.replace(R, "").replace(y, "")}`;
}
function Z(e) {
  return w.some((t) => e.includes(t));
}
function ae(e, t, s) {
  const n = t.split(".")[1];
  if (n) {
    const r = n.match(P)[0];
    if (r && s.delocalize(e).length !== t.length && n.indexOf("e") === -1) {
      const a = s.decimal;
      return e = e.includes(a) ? e : `${e}${a}`, e.padEnd(e.length + r.length, s.localize("0"));
    }
  }
  return e;
}
const u = "en", G = [
  "ar",
  "bg",
  "bs",
  "ca",
  "cs",
  "da",
  "de",
  "el",
  u,
  "es",
  "et",
  "fi",
  "fr",
  "he",
  "hr",
  "hu",
  "id",
  "it",
  "ja",
  "ko",
  "lt",
  "lv",
  "no",
  "nl",
  "pl",
  "pt-BR",
  "pt-PT",
  "ro",
  "ru",
  "sk",
  "sl",
  "sr",
  "sv",
  "th",
  "tr",
  "uk",
  "vi",
  "zh-CN",
  "zh-HK",
  "zh-TW"
], B = [
  "ar",
  "bg",
  "bs",
  "ca",
  "cs",
  "da",
  "de",
  "de-AT",
  "de-CH",
  "el",
  u,
  "en-AU",
  "en-CA",
  "en-GB",
  "es",
  "es-MX",
  "et",
  "fi",
  "fr",
  "fr-CH",
  "he",
  "hi",
  "hr",
  "hu",
  "id",
  "it",
  "it-CH",
  "ja",
  "ko",
  "lt",
  "lv",
  "mk",
  "no",
  "nl",
  "pl",
  "pt",
  "pt-PT",
  "ro",
  "ru",
  "sk",
  "sl",
  "sr",
  "sv",
  "th",
  "tr",
  "uk",
  "vi",
  "zh-CN",
  "zh-HK",
  "zh-TW"
], K = ["arab", "arabext", "latn"], N = (e) => K.includes(e), p = new Intl.NumberFormat().resolvedOptions().numberingSystem, F = p === "arab" || !N(p) ? "latn" : p, J = (e) => N(e) ? e : F;
function O(e, t = "cldr") {
  const s = t === "cldr" ? B : G;
  return e ? s.includes(e) ? e : (e = e.toLowerCase(), e === "nb" ? "no" : t === "t9n" && e === "pt" ? "pt-BR" : (e.includes("-") && (e = e.replace(/(\w+)-(\w+)/, (n, r, a) => `${r}-${a.toUpperCase()}`), s.includes(e) || (e = e.split("-")[0])), e === "zh" ? "zh-CN" : s.includes(e) ? e : (console.warn(`Translations for the "${e}" locale are not available and will fall back to the default, English (en).`), u))) : u;
}
const m = /* @__PURE__ */ new Set();
function ce(e) {
  W(e), m.size === 0 && L?.observe(document.documentElement, {
    attributes: !0,
    attributeFilter: ["lang"],
    subtree: !0
  }), m.add(e);
}
function W(e) {
  e.effectiveLocale = X(e);
}
function oe(e) {
  m.delete(e), m.size === 0 && L.disconnect();
}
const L = x("mutation", (e) => {
  e.forEach((t) => {
    const s = t.target;
    m.forEach((n) => {
      if (!D(s, n.el))
        return;
      const a = I(n.el, "[lang]");
      if (!a) {
        n.effectiveLocale = u;
        return;
      }
      const l = a.lang;
      n.effectiveLocale = // user set lang="" means unknown language, so we use default
      a.hasAttribute("lang") && l === "" ? u : l;
    });
  });
});
function X(e) {
  return e.el.lang || I(e.el, "[lang]")?.lang || document.documentElement.lang || u;
}
class q {
  constructor() {
    this.delocalize = (t) => (
      // For performance, (de)localization is skipped if the formatter isn't initialized.
      // In order to localize/delocalize, e.g. when lang/numberingSystem props are not default values,
      // `numberFormatOptions` must be set in a component to create and cache the formatter.
      this._numberFormatOptions ? d(t, (s) => s.replace(new RegExp(`[${this._minusSign}]`, "g"), "-").replace(new RegExp(`[${this._group}]`, "g"), "").replace(new RegExp(`[${this._decimal}]`, "g"), ".").replace(new RegExp(`[${this._digits.join("")}]`, "g"), this._getDigitIndex)) : t
    ), this.localize = (t) => this._numberFormatOptions ? d(t, (s) => b(s.trim()) ? new i(s.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`, "g"), this._group) : s) : t;
  }
  get group() {
    return this._group;
  }
  get decimal() {
    return this._decimal;
  }
  get minusSign() {
    return this._minusSign;
  }
  get digits() {
    return this._digits;
  }
  get numberFormatter() {
    return this._numberFormatter;
  }
  get numberFormatOptions() {
    return this._numberFormatOptions;
  }
  /**
   * numberFormatOptions needs to be set before localize/delocalize is called to ensure the options are up to date
   */
  set numberFormatOptions(t) {
    if (t.locale = O(t?.locale), t.numberingSystem = J(t?.numberingSystem), // No need to create the formatter if `locale` and `numberingSystem`
    // are the default values and `numberFormatOptions` has not been set
    !this._numberFormatOptions && t.locale === u && t.numberingSystem === F && // don't skip initialization if any options besides locale/numberingSystem are set
    Object.keys(t).length === 2 || // cache formatter by only recreating when options change
    JSON.stringify(this._numberFormatOptions) === JSON.stringify(t))
      return;
    this._numberFormatOptions = t, this._numberFormatter = new Intl.NumberFormat(this._numberFormatOptions.locale, this._numberFormatOptions), this._digits = [
      ...new Intl.NumberFormat(this._numberFormatOptions.locale, {
        useGrouping: !1,
        numberingSystem: this._numberFormatOptions.numberingSystem
      }).format(9876543210)
    ].reverse();
    const s = new Map(this._digits.map((r, a) => [r, a])), n = new Intl.NumberFormat(this._numberFormatOptions.locale, {
      numberingSystem: this._numberFormatOptions.numberingSystem
    }).formatToParts(-123456789e-1);
    this._actualGroup = n.find((r) => r.type === "group").value, this._group = this._actualGroup.trim().length === 0 || this._actualGroup == " " ? " " : this._actualGroup, this._decimal = n.find((r) => r.type === "decimal").value, this._minusSign = n.find((r) => r.type === "minusSign").value, this._getDigitIndex = (r) => s.get(r);
  }
}
const ue = new q();
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */
const h = {};
async function Q(e, t) {
  const s = `${t}_${e}`;
  return h[s] || (h[s] = fetch(_(`./assets/${t}/t9n/messages_${e}.json`)).then((n) => (n.ok || E(), n.json())).catch(() => E())), h[s];
}
function E() {
  throw new Error("could not fetch component message bundle");
}
function $(e) {
  e.messages = {
    ...e.defaultMessages,
    ...e.messageOverrides
  };
}
async function le(e) {
  e.defaultMessages = await C(e, e.effectiveLocale), $(e);
}
async function C(e, t) {
  const { el: s } = e, r = s.tagName.toLowerCase().replace("calcite-", "");
  return Q(O(t, "t9n"), r);
}
async function ge(e, t) {
  e.defaultMessages = await C(e, t), $(e);
}
function me(e) {
  e.onMessagesChange = Y;
}
function he(e) {
  e.onMessagesChange = void 0;
}
function Y() {
  $(this);
}
export {
  i as B,
  me as a,
  he as b,
  ce as c,
  oe as d,
  ie as e,
  ae as f,
  w as g,
  ne as h,
  b as i,
  ue as n,
  re as p,
  le as s,
  ge as u
};
//# sourceMappingURL=t9n-EYvFS4s3.js.map
