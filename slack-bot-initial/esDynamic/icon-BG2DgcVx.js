import { cF as m, cG as b, cD as h, cH as x, cI as g } from "./main-3gzXighg.js";
import { g as v, t as I } from "./dom-DkH2gtZS.js";
import { c as z } from "./observers-U5l2-sbJ.js";
const D = {
  icon: "icon",
  flipRtl: "flip-rtl"
}, d = {}, u = {}, f = {
  s: 16,
  m: 24,
  l: 32
};
async function y({ icon: n, scale: t }) {
  const s = f[t], e = C(n), c = e.charAt(e.length - 1) === "F", i = `${c ? e.substring(0, e.length - 1) : e}${s}${c ? "F" : ""}`;
  if (d[i])
    return d[i];
  u[i] || (u[i] = fetch(g(`./assets/icon/${i}.json`)).then((o) => o.json()).catch(() => (console.error(`"${i}" is not a valid calcite-ui-icon name`), "")));
  const a = await u[i];
  return d[i] = a, a;
}
function C(n) {
  const t = !isNaN(Number(n.charAt(0))), s = n.split("-");
  if (s.length > 0) {
    const c = /[a-z]/i;
    n = s.map((l, i) => l.replace(c, function(o, p) {
      return i === 0 && p === 0 ? o : o.toUpperCase();
    })).join("");
  }
  return t ? `i${n}` : n;
}
const w = ":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}", k = /* @__PURE__ */ m(class extends b {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.icon = null, this.flipRtl = !1, this.scale = "m", this.textLabel = void 0, this.pathData = void 0, this.visible = !1;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.waitUntilVisible(() => {
      this.visible = !0, this.loadIconPathData();
    });
  }
  disconnectedCallback() {
    this.intersectionObserver?.disconnect(), this.intersectionObserver = null;
  }
  async componentWillLoad() {
    this.loadIconPathData();
  }
  render() {
    const { el: t, flipRtl: s, pathData: e, scale: c, textLabel: l } = this, i = v(t), a = f[c], o = !!l, p = [].concat(e || "");
    return h(x, { "aria-hidden": I(!o), "aria-label": o ? l : null, role: o ? "img" : null }, h("svg", { "aria-hidden": "true", class: {
      [D.flipRtl]: i === "rtl" && s,
      svg: !0
    }, fill: "currentColor", height: "100%", viewBox: `0 0 ${a} ${a}`, width: "100%", xmlns: "http://www.w3.org/2000/svg" }, p.map((r) => typeof r == "string" ? h("path", { d: r }) : h("path", { d: r.d, opacity: "opacity" in r ? r.opacity : 1 }))));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  async loadIconPathData() {
    const { icon: t, scale: s, visible: e } = this;
    if (!t || !e)
      return;
    const c = await y({ icon: t, scale: s });
    t === this.icon && (this.pathData = c);
  }
  waitUntilVisible(t) {
    if (this.intersectionObserver = z("intersection", (s) => {
      s.forEach((e) => {
        e.isIntersecting && (this.intersectionObserver.disconnect(), this.intersectionObserver = null, t());
      });
    }, { rootMargin: "50px" }), !this.intersectionObserver) {
      t();
      return;
    }
    this.intersectionObserver.observe(this.el);
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      icon: ["loadIconPathData"],
      scale: ["loadIconPathData"]
    };
  }
  static get style() {
    return w;
  }
}, [1, "calcite-icon", {
  icon: [513],
  flipRtl: [516, "flip-rtl"],
  scale: [513],
  textLabel: [1, "text-label"],
  pathData: [32],
  visible: [32]
}, void 0, {
  icon: ["loadIconPathData"],
  scale: ["loadIconPathData"]
}]);
function P() {
  if (typeof customElements > "u")
    return;
  ["calcite-icon"].forEach((t) => {
    switch (t) {
      case "calcite-icon":
        customElements.get(t) || customElements.define(t, k);
        break;
    }
  });
}
P();
export {
  k as I,
  P as d
};
//# sourceMappingURL=icon-BG2DgcVx.js.map
