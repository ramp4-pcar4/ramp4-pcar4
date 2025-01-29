import { c1 as _, c2 as E, c3 as w, c4 as m, iP as h, c5 as x, g1 as c, c6 as y, ci as A, fV as M, ce as T, cf as P, cc as I, ix as R, bY as S } from "./main-uCo5F72j.js";
const B = { en: { "panguard.instructions": "Use two fingers to pan the map" }, fr: { "panguard.instructions": "Utilisez deux doigts pour faire un panoramique de la carte" } }, D = { class: "pg-label" }, V = /* @__PURE__ */ _({
  __name: "map-panguard",
  setup(f) {
    const { t: p } = E(), t = w("iApi"), o = m(), a = m(-1), n = h([]), i = h([]);
    x(() => {
      u(), i.push(
        t.event.on(c.MAP_CREATED, () => {
          u();
        })
      ), i.push(
        t.event.on(c.MAP_DESTROYED, () => {
          n.forEach((e) => e.remove());
        })
      ), i.push(
        t.event.on(c.MAP_REFRESH_START, () => {
          n.forEach((e) => e.remove());
        })
      ), i.push(
        t.event.on(c.MAP_REFRESH_END, () => {
          u();
        })
      );
    }), y(() => {
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
    return (e, s) => (I(), A("div", {
      class: "pg",
      ref_key: "panGuard",
      ref: o
    }, [
      M("p", D, T(P(p)("panguard.instructions")), 1)
    ], 512));
  }
}), $ = /* @__PURE__ */ R(V, [["__scopeId", "data-v-e91f9000"]]);
class F extends S {
  added() {
    Object.entries(B).forEach((a) => this.$iApi.$i18n.mergeLocaleMessage(...a));
    const { destroy: p, el: t } = this.mount($, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]), this.removed = () => {
      p();
    };
  }
}
export {
  F as default
};
//# sourceMappingURL=index-BmDTcpPR.js.map
