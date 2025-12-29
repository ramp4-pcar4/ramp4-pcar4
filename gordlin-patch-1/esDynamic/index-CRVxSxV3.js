import { bC as _, bD as E, bE as w, bF as m, ip as h, bG as b, fK as p, bH as x, bT as y, fC as T, bP as A, bQ as M, bN as P, i4 as D, bx as I } from "./main-BEi6lHs4.js";
const R = { en: { "panguard.instructions": "Use two fingers to pan the map" }, fr: { "panguard.instructions": "Utilisez deux doigts pour faire un panoramique de la carte" } }, S = { class: "pg-label" }, B = /* @__PURE__ */ _({
  __name: "map-panguard",
  setup(f) {
    const { t: c } = E(), t = w("iApi"), o = m(), a = m(-1), n = h([]), i = h([]);
    b(() => {
      u(), i.push(
        t.event.on(p.MAP_CREATED, () => {
          u();
        })
      ), i.push(
        t.event.on(p.MAP_DESTROYED, () => {
          n.forEach((e) => e.remove());
        })
      ), i.push(
        t.event.on(p.MAP_REFRESH_START, () => {
          n.forEach((e) => e.remove());
        })
      ), i.push(
        t.event.on(p.MAP_REFRESH_END, () => {
          u();
        })
      );
    }), x(() => {
      i.forEach((e) => t.event.off(e)), n.forEach((e) => e.remove());
    });
    const u = () => {
      const e = /* @__PURE__ */ new Map();
      t.geo.map.viewPromise.then(() => {
        n.push(
          t.geo.map.esriView.on("pointer-down", (s) => {
            s.pointerType === "touch" && e.set(s.pointerId, { x: s.x, y: s.y });
          })
        ), n.push(
          //@ts-ignore
          t.geo.map.esriView.on(["pointer-up", "pointer-leave"], (s) => {
            s.pointerType === "touch" && window.setTimeout(() => {
              e.delete(s.pointerId);
            }, 200);
          })
        ), n.push(
          t.geo.map.esriView.on("pointer-move", (s) => {
            const { pointerId: v, pointerType: g, x: d, y: l } = s, r = e.get(v);
            if (!r || g !== "touch" || e.size !== 1) {
              o.value.classList.remove("pg-active");
              return;
            }
            Math.sqrt(Math.pow(d - r.x, 2) + Math.pow(l - r.y, 2)) < 20 || (o.value.classList.add("pg-active"), a.value !== -1 && clearTimeout(a.value), a.value = window.setTimeout(() => {
              o.value.classList.remove("pg-active");
            }, 2e3), window.scrollBy(r.x - d, r.y - l));
          })
        );
      });
    };
    return (e, s) => (P(), y("div", {
      class: "pg",
      ref_key: "panGuard",
      ref: o
    }, [
      T("p", S, A(M(c)("panguard.instructions")), 1)
    ], 512));
  }
}), C = /* @__PURE__ */ D(B, [["__scopeId", "data-v-e91f9000"]]);
class N extends I {
  added() {
    Object.entries(R).forEach((a) => this.$iApi.$i18n.mergeLocaleMessage(...a));
    const { destroy: c, el: t } = this.mount(C, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]), this.removed = () => {
      c();
    };
  }
}
export {
  N as default
};
//# sourceMappingURL=index-CRVxSxV3.js.map
