import { i4 as x, bN as i, bT as c, bC as y, bD as $, bE as E, kE as f, bJ as A, bR as u, bM as _, fC as r, bQ as m, hc as d, bF as M, bG as S, bH as F, bI as O, bK as b, bS as N, bU as g, bV as V, bL as w, kF as B, fI as L, bx as D, fK as H } from "./main-BEi6lHs4.js";
const P = {}, T = { class: "border-b p-0 self-center w-2/3" };
function Z(v, n) {
  return i(), c("span", T);
}
const k = /* @__PURE__ */ x(P, [["render", Z]]), j = /* @__PURE__ */ y({
  __name: "zoom-nav",
  setup(v) {
    const { t: n } = $(), o = E("iApi"), e = f(400, !0, () => o.geo.map.zoomIn()), a = f(400, !0, () => o.geo.map.zoomOut());
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
        u(k),
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
}), G = { class: "mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12" }, K = ["content"], U = { class: "mapnav-section bg-white-75 hover:bg-white" }, Y = /* @__PURE__ */ y({
  __name: "mapnav",
  setup(v) {
    const n = d(), { t: o } = $(), e = M(), a = () => {
      e.value._tippy.hide();
    }, l = (s) => {
      s.key === "Tab" && e.value?.matches(":focus") && e.value._tippy.show();
    };
    S(() => {
      e.value?.addEventListener("blur", a), e.value?.addEventListener("keyup", l);
    }), F(() => {
      e.value?.removeEventListener("blur", a), e.value?.removeEventListener("keyup", l);
    });
    const t = O(() => n.order.map((s) => n.items[s]).filter((s) => s.componentId));
    return (s, p) => {
      const C = b("focus-list"), I = b("tippy");
      return i(), c("div", G, [
        N((i(), c("div", {
          class: "flex flex-col",
          content: m(o)("panels.controls.items"),
          ref_key: "el",
          ref: e
        }, [
          u(j, { class: "mapnav-section bg-white-75 hover:bg-white" }),
          p[0] || (p[0] = r("span", { class: "py-1" }, null, -1)),
          r("div", U, [
            (i(!0), c(g, null, V(t.value, (h, z) => (i(), c(g, {
              key: h.id + "button"
            }, [
              (i(), w(B(h.id + "-nav-button"))),
              z !== t.value.length - 1 ? (i(), w(k, {
                key: 0,
                class: "mapnav-divider"
              })) : L("", !0)
            ], 64))), 128))
          ])
        ], 8, K)), [
          [C],
          [I, {
            trigger: "manual",
            placement: "top-end",
            maxWidth: 190
          }]
        ])
      ]);
    };
  }
}), q = /* @__PURE__ */ x(Y, [["__scopeId", "data-v-dde7576f"]]);
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
const Q = { en: { "mapnav.zoomIn": "Zoom In", "mapnav.zoomOut": "Zoom Out", "mapnav.home": "Home", "mapnav.fullscreen": "Full Screen", "mapnav.geolocator": "Your Location", "mapnav.geolocator.error.permission": "The location request was denied. Please check your browser permission settings.", "mapnav.geolocator.error.internal": "Your location could not be found." }, fr: { "mapnav.zoomIn": "Zoom avant", "mapnav.zoomOut": "Zoom arrière", "mapnav.home": "Accueil", "mapnav.fullscreen": "Plein Écran", "mapnav.geolocator": "Votre position", "mapnav.geolocator.error.permission": "Demande de localisation refusée. Veuillez vérifier les paramètres d'autorisation de votre navigateur.", "mapnav.geolocator.error.internal": "Votre emplacement n'a pu être trouvé." } };
class W extends J {
  async added() {
    Object.entries(Q).forEach((t) => this.$iApi.$i18n.mergeLocaleMessage(...t));
    const { destroy: n, el: o } = this.mount(q, {
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
  W as default
};
//# sourceMappingURL=index-B_GiSDAX.js.map
