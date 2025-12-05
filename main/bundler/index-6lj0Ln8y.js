import { defineComponent as R, inject as j, computed as O, resolveComponent as K, createBlock as _, createCommentVNode as C, openBlock as i, unref as L, withCtx as V, createElementVNode as E, normalizeClass as I, createElementBlock as v, ref as w, watch as te, onMounted as Q, onBeforeUnmount as Z, resolveDirective as H, withDirectives as P, renderSlot as oe, vShow as ee, nextTick as W, toDisplayString as ne, onBeforeMount as re, getCurrentInstance as D, onUpdated as ie, createVNode as F, Fragment as $, renderList as z, resolveDynamicComponent as Y } from "vue";
import { useI18n as q } from "vue-i18n";
import { _ as G, u as ae, a as se, b as T, A as le, F as pe, G as ce } from "./main-MXZmlokj.js";
import { createPopper as ue } from "@popperjs/core";
import de from "popper-max-size-modifier";
import "tiny-emitter";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/core/reactiveUtils.js";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/map-components/components/arcgis-swipe";
import "deepmerge";
import "@terraformer/spatial";
import "proj4";
import "throttle-debounce";
import "pinia";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
class U {
  id;
  /**
   * Optional object containing any options to be passed to the appbar component.
   *
   * @type {object}
   * @memberof AppbarItemInstance
   */
  options;
  /**
   * An actual id of the appbar Vue component to use when rendering in the template.
   *
   * @type {string}
   * @memberof AppbarItemInstance
   */
  componentId;
  constructor(s) {
    const l = {
      options: {},
      ...s
    };
    ({ id: this.id, options: this.options, componentId: this.componentId } = l);
  }
}
const me = ["innerHTML"], N = /* @__PURE__ */ R({
  __name: "default-button",
  props: {
    panelId: {
      type: String,
      required: !0
    },
    minimize: {
      type: Boolean,
      default: !1
    },
    overflow: {
      type: Boolean
    }
  },
  setup(y) {
    const { t: s } = q(), l = j("iApi"), r = y, d = O(() => l.panel.get(r.panelId)?.button), p = () => {
      r.minimize ? l.panel.toggleMinimize(r.panelId) : l.panel.toggle(r.panelId);
    };
    return (e, x) => {
      const u = K("appbar-button");
      return d.value ? (i(), _(u, {
        key: 0,
        onClickFunction: p,
        tooltip: L(s)(d.value.tooltip),
        id: y.panelId
      }, {
        default: V(() => [
          E("div", {
            class: I(["default fill-current w-24 h-24 ml-8 sm:ml-20", { "ml-20": y.overflow }]),
            innerHTML: d.value.icon
          }, null, 10, me)
        ]),
        _: 1
      }, 8, ["tooltip", "id"])) : C("", !0);
    };
  }
}), fe = {}, ve = { class: "border-b p-0 self-center w-2/3" };
function he(y, s) {
  return i(), v("span", ve);
}
const J = /* @__PURE__ */ G(fe, [["render", he], ["__scopeId", "data-v-5d32b715"]]), be = ["content", "aria-label"], ge = /* @__PURE__ */ R({
  __name: "more-button",
  props: {
    position: {
      type: String,
      default: "right-end"
    },
    popperOptions: {
      type: Object,
      default() {
        return {};
      }
    },
    numItems: {
      type: Number,
      default: 1
    },
    renderWatch: {
      type: Number,
      default: 0
    }
  },
  emits: ["updateParent"],
  setup(y, { expose: s, emit: l }) {
    const { t: r } = q(), d = j("iApi"), p = y, e = l;
    function x() {
      e("updateParent");
    }
    const u = w(!1), c = w(0), g = w(), B = w(), k = w();
    function S() {
      x(), W(() => {
        f(), u.value = !u.value;
      });
    }
    te(
      () => p.renderWatch,
      () => {
        S();
      }
    );
    const f = () => {
      u.value = !u.value;
      const a = d.$vApp.$el.querySelector(".inner-shell"), h = {
        name: "applyMaxSize",
        enabled: !0,
        phase: "beforeWrite",
        requires: ["maxSize"],
        fn({ state: m }) {
          const { width: o } = m.modifiersData.maxSize;
          m.styles.popper = {
            ...m.styles.popper,
            maxWidth: `${o}px`,
            maxHeight: `${a.offsetHeight - 45}px`
          };
          const b = Math.min(
            p.numItems <= 0 ? 0 : 55 + 44 * (p.numItems - 1),
            a.offsetHeight - 45
          );
          m.styles.popper.height = `${b}px`, k?.value?.offsetHeight && (k.value.style.height = `${b}px`), m.styles.popper.overflowY = "auto", m.styles.popper.overflowX = "hidden";
        }
      };
      B.value && k.value && (c.value++, ue(B.value, k.value, {
        placement: p.position || "right-end",
        modifiers: [
          {
            ...de,
            options: {
              boundary: a
            }
          },
          h,
          {
            name: "offset",
            options: {
              offset: [0, 5]
            }
          },
          {
            name: "preventOverflow",
            enabled: !0,
            options: {
              boundary: a
            }
          }
        ],
        ...p.popperOptions
      })), c.value === 1 && S();
    };
    return Q(() => {
      window.addEventListener(
        "click",
        (a) => {
          a.target instanceof HTMLElement && !g.value?.contains(a.target) && (u.value = !1);
        },
        { capture: !0 }
      );
    }), Z(() => {
      window.removeEventListener(
        "click",
        (a) => {
          a.target instanceof HTMLElement && !g.value?.contains(a.target) && (u.value = !1);
        },
        { capture: !0 }
      );
    }), s({
      rerender: S
    }), (a, h) => {
      const m = H("focus-item"), o = H("tippy");
      return i(), v("div", {
        class: "appbar-item relative inset-x-0 w-full text-center",
        ref_key: "el",
        ref: g
      }, [
        P((i(), v("button", {
          type: "button",
          class: "text-gray-400 w-full h-48 focus:outline-none hover:text-white",
          onClick: h[0] || (h[0] = (b) => f()),
          content: L(r)("appbar.more"),
          "aria-label": L(r)("appbar.more"),
          ref_key: "dropdownTrigger",
          ref: B
        }, h[1] || (h[1] = [
          E("svg", {
            class: "fill-current w-24 h-24 m-auto",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            E("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
            }),
            E("path", { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
          ], -1)
        ]), 8, be)), [
          [m],
          [o, { placement: "right-end" }]
        ]),
        P(E("div", {
          id: "dropdown",
          class: "dropdown shadow-md border border-gray:200 absolute w-64 flex flex-col bg-white rounded",
          ref_key: "dropdown",
          ref: k
        }, [
          oe(a.$slots, "default", {}, void 0, !0)
        ], 512), [
          [ee, u.value]
        ])
      ], 512);
    };
  }
}), ye = /* @__PURE__ */ G(ge, [["__scopeId", "data-v-87bcc276"]]), $e = {
  key: 0,
  class: "number absolute top-1 right-2 text-white w-18 rounded-full"
}, _e = /* @__PURE__ */ R({
  __name: "appbar-button",
  setup(y) {
    const s = ae(), { t: l } = q(), r = j("iApi"), d = O(() => s.notificationNumber), p = () => {
      r.panel.toggle("notifications");
    };
    return (e, x) => {
      const u = K("appbar-button", !0);
      return i(), _(u, {
        onClickFunction: p,
        tooltip: L(l)("notifications.title"),
        class: "notification-button",
        id: ""
      }, {
        default: V(() => [
          x[0] || (x[0] = E("svg", {
            class: "fill-current w-24 h-24 mx-8 sm:mx-20",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            E("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" })
          ], -1)),
          d.value && d.value > 0 ? (i(), v("span", $e, ne(d.value), 1)) : C("", !0)
        ]),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), we = /* @__PURE__ */ G(_e, [["__scopeId", "data-v-787da765"]]), xe = ["content"], Ie = /* @__PURE__ */ R({
  __name: "appbar",
  setup(y) {
    const s = se(), l = T(), r = w(0), d = w(0), p = O(() => l.visible), e = O(() => l.temporary), { t: x } = q(), u = w(!1), c = w({}), g = w(), B = () => {
      W(() => {
        D()?.proxy?.$forceUpdate();
      });
    }, k = () => {
      g.value._tippy.hide();
    }, S = (f) => {
      f.key === "Tab" && g.value?.matches(":focus") && g.value._tippy.show();
    };
    return Q(() => {
      g.value?.addEventListener("blur", k), g.value?.addEventListener("keyup", S);
    }), re(() => {
      const f = D();
      window.addEventListener("resize", () => f?.proxy?.$forceUpdate());
    }), Z(() => {
      const f = D();
      window.removeEventListener("resize", () => f?.proxy?.$forceUpdate()), g.value?.removeEventListener("blur", k), g.value?.removeEventListener("keyup", S);
    }), ie(() => {
      W(() => {
        const f = g.value;
        let a;
        const h = [...f.children];
        let m = h[h.length - 2].getBoundingClientRect().top;
        s.mobileView || (m = f.getBoundingClientRect().bottom - 38);
        const o = f.querySelector("#dropdown");
        for (let n = h.length - 4; n >= 0; n--) {
          const A = h[n].getBoundingClientRect().bottom;
          if (m && o && (A > m || u.value && A + 56 > m))
            h[n].classList.forEach((M) => {
              M.includes("identifier") && (a = M.slice(11));
            }), a && (c.value[a] = !0, a.includes("divider") || r.value++, d.value++), u.value || (u.value = !0);
          else if (A !== 0)
            break;
        }
        const b = f.querySelector("#more");
        let t = b.getBoundingClientRect().bottom;
        if (a = void 0, u.value && m && b && o && t !== 0 && (t <= m - 56 || o.childElementCount == 1 && t <= m)) {
          let n = o.childElementCount, A = 0;
          for (; t <= m - 56 || n == 1; ) {
            const M = o.children[A];
            if (M && (M.classList.forEach((X) => {
              X.includes("identifier") && (a = X.slice(11));
            }), a && (c.value[a] = !1, a.includes("divider") || r.value--), t += 48, n -= 1, A += 1), n === 0) {
              u.value = !1;
              break;
            }
          }
        }
        Object.keys(c.value).forEach((n) => {
          f.querySelector(`.identifier-${n}`) || (delete c.value[n], n.includes("divider") || (r.value = Math.max(0, r.value - 1)), d.value++);
        });
      });
    }), (f, a) => {
      const h = H("focus-list"), m = H("tippy");
      return P((i(), v("div", {
        class: "absolute top-0 left-0 bottom-28 flex flex-col w-40 pointer-events-auto appbar z-50 sm:z-20 bg-black-75 sm:w-64 sm:bottom-38",
        content: L(x)("panels.controls.items"),
        ref_key: "el",
        ref: g
      }, [
        (i(!0), v($, null, z(p.value, (o, b) => (i(), v($, null, [
          (i(!0), v($, null, z(o, (t, n) => (i(), v($, null, [
            typeof t == "string" && c.value[`${t}-${n}`] !== !0 ? (i(), _(N, {
              key: `${t}-${n}-default`,
              panelId: t,
              class: I(["appbar-item h-48", `identifier-${t}-${n}`])
            }, null, 8, ["panelId", "class"])) : c.value[`${t.id}-${n}`] !== !0 ? (i(), _(Y(t.componentId), {
              key: `${t.id}-${n}-custom`,
              options: t.options,
              class: I(["appbar-item h-48", `identifier-${t.id}-${n}`]),
              buttonId: t.id
            }, null, 8, ["options", "buttonId", "class"])) : C("", !0)
          ], 64))), 256)),
          c.value[`divider-${b}`] !== !0 ? (i(), _(J, {
            class: I(["appbar-item", `identifier-divider-${b}`]),
            key: `${o}-${b}-default`
          }, null, 8, ["class"])) : C("", !0)
        ], 64))), 256)),
        (i(!0), v($, null, z(e.value?.filter((o) => c.value[`${o}-temp`] !== !0), (o) => (i(), _(N, {
          panelId: o,
          minimize: !0,
          key: `${o}-temp`,
          class: I([`identifier-${o}-temp`, "appbar-item h-48"])
        }, null, 8, ["panelId", "class"]))), 128)),
        P(F(ye, {
          id: "more",
          numItems: r.value,
          renderWatch: d.value,
          onUpdateParent: B
        }, {
          default: V(() => [
            (i(!0), v($, null, z(p.value, (o, b) => (i(), v($, { key: b }, [
              (i(!0), v($, null, z(o, (t, n) => (i(), v($, null, [
                typeof t == "string" && c.value[`${t}-${n}`] ? (i(), _(N, {
                  key: `${t}-${n}-default`,
                  panelId: t,
                  class: I(["text-black hover:bg-gray my-4 h-36", `identifier-${t}-${n}`]),
                  overflow: ""
                }, null, 8, ["panelId", "class"])) : c.value[`${t.id}-${n}`] ? (i(), _(Y(t.componentId), {
                  key: `${t.id}-${n}-custom`,
                  options: t.options,
                  buttonId: t.id,
                  class: I(["appbar-item h-48", `identifier-${t.id}-${n}`])
                }, null, 8, ["options", "buttonId", "class"])) : C("", !0)
              ], 64))), 256)),
              c.value[`divider-${b}`] ? (i(), _(J, {
                key: 0,
                class: I(["border-black my-4", `identifier-divider-${b}`])
              }, null, 8, ["class"])) : C("", !0)
            ], 64))), 128)),
            (i(!0), v($, null, z(e.value?.filter((o) => c.value[`${o}-temp`]), (o) => (i(), _(N, {
              panelId: o,
              minimize: !0,
              key: `${o}-temp`,
              class: I([`identifier-${o}-temp`, "text-black hover:bg-gray my-4 h-36"]),
              overflow: ""
            }, null, 8, ["panelId", "class"]))), 128))
          ]),
          _: 1
        }, 8, ["numItems", "renderWatch"]), [
          [ee, u.value]
        ]),
        F(we, { class: "appbar-item bottom-48 h-48 sm:display-none" }),
        F(le, {
          class: "absolute bottom-0 h-40 sm:display-none w-full text-center",
          position: "right-start"
        })
      ], 8, xe)), [
        [h],
        [m, {
          trigger: "manual",
          touch: !1,
          placement: "top-end",
          popperOptions: {
            placement: "top",
            modifiers: [
              { name: "preventOverflow", options: { altAxis: !0 } },
              { name: "flip", options: { fallbackPlacements: ["top"] } }
            ]
          }
        }]
      ]);
    };
  }
});
class ke extends pe {
  /**
   * Returns `AppbarFixtureConfig` section of the global config file.
   *
   * @readonly
   * @type {AppbarFixtureConfig}
   * @memberof AppbarFixture
   */
  get config() {
    return super.config;
  }
  /**
   * Parses the appbar config JSON snippet from the config file and save resulting objects to the fixture store.
   *
   * @param {AppbarFixtureConfig} [appbarConfig]
   * @returns
   * @memberof AppbarAPI
   */
  _parseConfig(s) {
    if (!s)
      return;
    const l = T(this.$vApp.$pinia);
    let r;
    Array.isArray(s.items[0]) ? r = s.items : r = [s.items];
    const d = [];
    r.forEach((p) => {
      d.push(
        p.map((e) => typeof e == "string" ? e : new U(e))
      );
    }), l.items = d.flat().reduce((p, e) => (p[e instanceof U ? e.id : e] = e, p), {}), l.order = d.map(
      (p) => p.map((e) => e instanceof U ? e.id : e)
    ), this._validateItems();
  }
  /**
   * Checks if components specified as appbar items are registered or not.
   *
   * @memberof AppbarAPI
   */
  _validateItems() {
    const s = T(this.$vApp.$pinia);
    s.order.flat().forEach((l) => {
      typeof s.items[l] != "string" && [l].some((r) => {
        this.$iApi.fixture.exists(r) && !s.items[l] && (s.items[l].componentId = `${r}-appbar-button`);
      });
    });
  }
}
const Ee = { en: { "appbar.navigation": "Navigation", "appbar.more": "More", "navigation.export": "Export", "navigation.map.export": "Export Map" }, fr: { "appbar.navigation": "Navigation", "appbar.more": "Plus", "navigation.export": "Exporter", "navigation.map.export": "Exporter la Carte" } };
class ut extends ke {
  initialized() {
  }
  async added() {
    Object.entries(Ee).forEach((e) => this.$iApi.$i18n.mergeLocaleMessage(...e));
    const { destroy: s, el: l } = this.mount(Ie, {
      app: this.$element
    }), r = this.$vApp.$el.getElementsByClassName("inner-shell")[0];
    r.insertBefore(l.childNodes[0], r.querySelector(".panel-stack")), this._parseConfig(this.config);
    const d = this.$vApp.$watch(
      () => this.config,
      (e) => this._parseConfig(e)
    ), p = [];
    p.push(
      this.$iApi.event.on(ce.COMPONENT, () => {
        this._parseConfig(this.config);
      })
    ), this.removed = () => {
      const e = T(this.$vApp.$pinia);
      d(), p.forEach((c) => this.$iApi.event.off(c));
      const x = { ...e.items }, u = [...e.temporary];
      Object.keys(x).forEach((c) => e.removeButton(c)), u.forEach((c) => e.removeButton(c)), s(), e.$reset();
    };
  }
}
export {
  ut as default
};
