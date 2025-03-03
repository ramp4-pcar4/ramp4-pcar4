import { ix as x, cc as i, ci as c, c1 as $, c2 as k, c3 as E, kV as f, c8 as A, cg as u, cb as _, fV as r, cf as m, hI as d, c4 as M, c5 as S, c6 as O, c7 as V, c9 as g, ch as B, cj as b, ck as F, ca as w, kW as N, f$ as L, bY as D, g1 as H } from "./main-uCo5F72j.js";
const j = {}, P = { class: "border-b p-0 self-center w-2/3" };
function Z(v, n) {
  return i(), c("span", P);
}
const y = /* @__PURE__ */ x(j, [["render", Z]]), T = /* @__PURE__ */ $({
  __name: "zoom-nav",
  setup(v) {
    const { t: n } = k(), o = E("iApi"), e = f(400, !0, () => o.geo.map.zoomIn()), a = f(400, !0, () => o.geo.map.zoomOut());
    return (l, t) => {
      const s = A("mapnav-button");
      return i(), c("div", null, [
        u(s, {
          onClickFunction: m(e),
          tooltip: m(n)("mapnav.zoomIn")
        }, {
          default: _(() => t[0] || (t[0] = [
            r("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "fill-current w-32 h-20"
            }, [
              r("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
              r("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
              })
            ], -1)
          ])),
          _: 1
        }, 8, ["onClickFunction", "tooltip"]),
        u(y),
        u(s, {
          onClickFunction: m(a),
          tooltip: m(n)("mapnav.zoomOut")
        }, {
          default: _(() => t[1] || (t[1] = [
            r("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "fill-current w-32 h-20"
            }, [
              r("path", { d: "M19 13H5v-2h14v2z" }),
              r("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
              })
            ], -1)
          ])),
          _: 1
        }, 8, ["onClickFunction", "tooltip"])
      ]);
    };
  }
}), Y = { class: "mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12" }, W = ["content"], q = { class: "mapnav-section bg-white-75 hover:bg-white" }, G = /* @__PURE__ */ $({
  __name: "mapnav",
  setup(v) {
    const n = d(), { t: o } = k(), e = M(), a = () => {
      e.value._tippy.hide();
    }, l = (s) => {
      s.key === "Tab" && e.value?.matches(":focus") && e.value._tippy.show();
    };
    S(() => {
      e.value?.addEventListener("blur", a), e.value?.addEventListener("keyup", l);
    }), O(() => {
      e.value?.removeEventListener("blur", a), e.value?.removeEventListener("keyup", l);
    });
    const t = V(() => n.order.map((s) => n.items[s]).filter((s) => s.componentId));
    return (s, p) => {
      const z = g("focus-list"), I = g("tippy");
      return i(), c("div", Y, [
        B((i(), c("div", {
          class: "flex flex-col",
          content: m(o)("panels.controls.items"),
          ref_key: "el",
          ref: e
        }, [
          u(T, { class: "mapnav-section bg-white-75 hover:bg-white" }),
          p[0] || (p[0] = r("span", { class: "py-1" }, null, -1)),
          r("div", q, [
            (i(!0), c(b, null, F(t.value, (h, C) => (i(), c(b, {
              key: h.id + "button"
            }, [
              (i(), w(N(h.id + "-nav-button"))),
              C !== t.value.length - 1 ? (i(), w(y, {
                key: 0,
                class: "mapnav-divider"
              })) : L("", !0)
            ], 64))), 128))
          ])
        ], 8, W)), [
          [z],
          [I, {
            trigger: "manual",
            placement: "top-end",
            maxWidth: 190
          }]
        ])
      ]);
    };
  }
}), U = /* @__PURE__ */ x(G, [["__scopeId", "data-v-dde7576f"]]);
class J extends D {
  mapnavStore = d(this.$vApp.$pinia);
  /**
   * Returns `MapnavFixtureConfig` section of the global config file.
   *
   * @readonly
   * @type {MapnavFixtureConfig}
   * @memberof MapnavFixture
   */
  get config() {
    return super.config;
  }
  /**
   * Parses the mapnav config JSON snippet from the config file and save resulting objects to the fixture store.
   *
   * @param {MapnavFixtureConfig} [mapnavConfig]
   * @returns
   * @memberof MapnavAPI
   */
  _parseConfig(n) {
    if (!n)
      return;
    const o = n.items.map((e) => ({
      id: e
    }));
    this.mapnavStore.items = o.reduce((e, a) => (e[a.id] = a, e), {}), this.mapnavStore.order = o.map((e) => e.id), this._validateItems();
  }
  /**
   * Checks if components specified as mapnav items are registered or not.
   * Will check the literal id values, and id values with `-nav-button` suffixes appended.
   *
   * @memberof MapnavAPI
   */
  _validateItems() {
    const n = ["geolocator", "zoom", "home", "fullscreen"];
    this.mapnavStore.order.forEach((o) => {
      (this.$iApi.fixture.exists(o) || n.includes(o)) && (this.mapnavStore.items[o].componentId = `${o}-nav-button`);
    });
  }
}
const K = { en: { "mapnav.zoomIn": "Zoom In", "mapnav.zoomOut": "Zoom Out", "mapnav.home": "Home", "mapnav.fullscreen": "Full Screen", "mapnav.geolocator": "Your Location", "mapnav.geolocator.error.permission": "The location request was denied. Please check your browser permission settings.", "mapnav.geolocator.error.internal": "Your location could not be found." }, fr: { "mapnav.zoomIn": "Zoom avant", "mapnav.zoomOut": "Zoom arrière", "mapnav.home": "Accueil", "mapnav.fullscreen": "Plein Écran", "mapnav.geolocator": "Votre position", "mapnav.geolocator.error.permission": "Demande de localisation refusée. Veuillez vérifier les paramètres d'autorisation de votre navigateur.", "mapnav.geolocator.error.internal": "Votre emplacement n'a pu être trouvé." } };
class R extends J {
  async added() {
    Object.entries(K).forEach((t) => this.$iApi.$i18n.mergeLocaleMessage(...t));
    const { destroy: n, el: o } = this.mount(U, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(o.childNodes[0]), this._parseConfig(this.config);
    const a = this.$vApp.$watch(
      () => this.config,
      (t) => this._parseConfig(t)
    ), l = this.$iApi.event.on(H.COMPONENT, () => {
      this._parseConfig(this.config);
    });
    this.removed = () => {
      a(), this.$iApi.event.off(l);
      const t = d(this.$vApp.$pinia), s = { ...t.items };
      Object.keys(s).forEach((p) => t.removeItem(p)), t.$reset(), n();
    };
  }
}
export {
  R as default
};
//# sourceMappingURL=index-BYWVfWYu.js.map
