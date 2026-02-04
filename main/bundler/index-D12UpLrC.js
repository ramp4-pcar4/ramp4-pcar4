import { defineComponent as q, inject as j, computed as H, resolveComponent as K, createBlock as _, createCommentVNode as z, openBlock as s, unref as L, withCtx as V, createElementVNode as E, normalizeClass as I, createElementBlock as v, ref as w, watch as oe, onMounted as Q, onBeforeUnmount as Z, resolveDirective as T, withDirectives as P, renderSlot as ne, vShow as ee, nextTick as te, toDisplayString as re, onBeforeMount as ie, getCurrentInstance as F, onUpdated as se, createVNode as U, Fragment as $, renderList as C, resolveDynamicComponent as Y } from "vue";
import { useI18n as D } from "vue-i18n";
import { _ as G, u as ae, a as le, b as R, A as pe, F as ce, G as ue } from "./main-6dWPqJr6.js";
import { createPopper as de } from "@popperjs/core";
import me from "popper-max-size-modifier";
import { k as fe } from "./keyboard-O-FN7ZtD.js";
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
import "lodash-es";
import "vue-tippy";
import "linkify-html";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
class W {
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
  constructor(a) {
    const l = {
      options: {},
      ...a
    };
    ({ id: this.id, options: this.options, componentId: this.componentId } = l);
  }
}
const ve = ["innerHTML"], O = /* @__PURE__ */ q({
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
  setup(g) {
    const { t: a } = D(), l = j("iApi"), i = g, d = H(() => l.panel.get(i.panelId)?.button), p = () => {
      i.minimize ? l.panel.toggleMinimize(i.panelId) : l.panel.toggle(i.panelId);
    };
    return (e, x) => {
      const u = K("appbar-button");
      return d.value ? (s(), _(u, {
        key: 0,
        onClickFunction: p,
        tooltip: L(a)(d.value.tooltip),
        "button-id": g.panelId
      }, {
        default: V(() => [
          E("div", {
            class: I(["default fill-current w-24 h-24 ml-8 sm:ml-20", { "ml-20": g.overflow }]),
            innerHTML: d.value.icon
          }, null, 10, ve)
        ]),
        _: 1
      }, 8, ["tooltip", "button-id"])) : z("", !0);
    };
  }
}), he = {}, be = { class: "border-b p-0 self-center w-2/3" };
function ge(g, a) {
  return s(), v("span", be);
}
const J = /* @__PURE__ */ G(he, [["render", ge], ["__scopeId", "data-v-5d32b715"]]), ye = ["content", "aria-label"], $e = /* @__PURE__ */ q({
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
  setup(g, { expose: a, emit: l }) {
    const { t: i } = D(), d = j("iApi"), p = g, e = l;
    function x() {
      e("updateParent");
    }
    const u = w(!1), c = w(0), b = w(), B = w(), k = w();
    function S() {
      x(), te(() => {
        N(), u.value = !u.value;
      });
    }
    oe(
      () => p.renderWatch,
      () => {
        S();
      }
    );
    const N = () => {
      u.value = !u.value;
      const o = d.$vApp.$el.querySelector(".inner-shell"), m = {
        name: "applyMaxSize",
        enabled: !0,
        phase: "beforeWrite",
        requires: ["maxSize"],
        fn({ state: f }) {
          const { width: h } = f.modifiersData.maxSize;
          f.styles.popper = {
            ...f.styles.popper,
            maxWidth: `${h}px`,
            maxHeight: `${o.offsetHeight - 45}px`
          };
          const n = Math.min(
            p.numItems <= 0 ? 0 : 55 + 44 * (p.numItems - 1),
            o.offsetHeight - 45
          );
          f.styles.popper.height = `${n}px`, k?.value?.offsetHeight && (k.value.style.height = `${n}px`), f.styles.popper.overflowY = "auto", f.styles.popper.overflowX = "hidden";
        }
      };
      B.value && k.value && (c.value++, de(B.value, k.value, {
        placement: p.position || "right-end",
        modifiers: [
          {
            ...me,
            options: {
              boundary: o
            }
          },
          m,
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
              boundary: o
            }
          }
        ],
        ...p.popperOptions
      })), c.value === 1 && S();
    };
    return Q(() => {
      window.addEventListener(
        "click",
        (o) => {
          o.target instanceof HTMLElement && !b.value?.contains(o.target) && (u.value = !1);
        },
        { capture: !0 }
      );
    }), Z(() => {
      window.removeEventListener(
        "click",
        (o) => {
          o.target instanceof HTMLElement && !b.value?.contains(o.target) && (u.value = !1);
        },
        { capture: !0 }
      );
    }), a({
      rerender: S
    }), (o, m) => {
      const f = T("focus-item"), h = T("tippy");
      return s(), v("div", {
        class: "appbar-item relative inset-x-0 w-full text-center",
        ref_key: "el",
        ref: b
      }, [
        P((s(), v("button", {
          type: "button",
          class: "text-gray-400 w-full h-48 focus:outline-none hover:text-white",
          onClick: m[0] || (m[0] = (n) => N()),
          content: L(i)("appbar.more"),
          "aria-label": L(i)("appbar.more"),
          ref_key: "dropdownTrigger",
          ref: B
        }, m[1] || (m[1] = [
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
        ]), 8, ye)), [
          [f],
          [h, { placement: "right-end" }]
        ]),
        P(E("div", {
          id: "dropdown",
          class: "dropdown shadow-md border border-gray:200 absolute w-64 flex flex-col bg-white rounded",
          ref_key: "dropdown",
          ref: k
        }, [
          ne(o.$slots, "default", {}, void 0, !0)
        ], 512), [
          [ee, u.value]
        ])
      ], 512);
    };
  }
}), _e = /* @__PURE__ */ G($e, [["__scopeId", "data-v-87bcc276"]]), we = {
  key: 0,
  class: "number absolute top-1 right-2 text-white w-18 rounded-full"
}, xe = /* @__PURE__ */ q({
  __name: "appbar-button",
  setup(g) {
    const a = ae(), { t: l } = D(), i = j("iApi"), d = H(() => a.notificationNumber), p = () => {
      i.panel.toggle("notifications");
    };
    return (e, x) => {
      const u = K("appbar-button", !0);
      return s(), _(u, {
        onClickFunction: p,
        tooltip: L(l)("notifications.title"),
        class: "notification-button",
        "button-id": "notificationsButton"
      }, {
        default: V(() => [
          x[0] || (x[0] = E("svg", {
            class: "fill-current w-24 h-24 mx-8 sm:mx-20",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            E("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" })
          ], -1)),
          d.value && d.value > 0 ? (s(), v("span", we, re(d.value), 1)) : z("", !0)
        ]),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), Ie = /* @__PURE__ */ G(xe, [["__scopeId", "data-v-9d3c6152"]]), ke = ["content"], Ee = /* @__PURE__ */ q({
  __name: "appbar",
  setup(g) {
    const a = le(), l = R(), i = w(0), d = w(0), p = H(() => l.visible), e = H(() => l.temporary), { t: x } = D(), u = w(!1), c = w({}), b = w(), B = () => {
      te(() => {
        F()?.proxy?.$forceUpdate();
      });
    }, k = () => {
      b.value._tippy.hide();
    }, S = (o) => {
      fe(o, b.value) && b.value._tippy.show();
    }, N = () => {
      const o = b.value;
      let m;
      const f = [...o.children];
      let h = f[f.length - 2].getBoundingClientRect().top;
      a.mobileView || (h = o.getBoundingClientRect().bottom - 38);
      const n = o.querySelector("#dropdown");
      for (let r = f.length - 4; r >= 0; r--) {
        const A = f[r].getBoundingClientRect().bottom;
        if (h && n && (A > h || u.value && A + 56 > h))
          f[r].classList.forEach((M) => {
            M.includes("identifier") && (m = M.slice(11));
          }), m && (c.value[m] = !0, m.includes("divider") || i.value++, d.value++), u.value || (u.value = !0);
        else if (A !== 0)
          break;
      }
      const y = o.querySelector("#more");
      let t = y.getBoundingClientRect().bottom;
      if (m = void 0, u.value && h && y && n && t !== 0 && (t <= h - 56 || n.childElementCount == 1 && t <= h)) {
        let r = n.childElementCount, A = 0;
        for (; t <= h - 56 || r == 1; ) {
          const M = n.children[A];
          if (M && (M.classList.forEach((X) => {
            X.includes("identifier") && (m = X.slice(11));
          }), m && (c.value[m] = !1, m.includes("divider") || i.value--), t += 48, r -= 1, A += 1), r === 0) {
            u.value = !1;
            break;
          }
        }
      }
      Object.keys(c.value).forEach((r) => {
        o.querySelector(`.identifier-${r}`) || (delete c.value[r], r.includes("divider") || (i.value = Math.max(0, i.value - 1)), d.value++);
      });
    };
    return Q(() => {
      b.value?.addEventListener("blur", k), b.value?.addEventListener("keyup", S);
    }), ie(() => {
      const o = F();
      window.addEventListener("resize", () => o?.proxy?.$forceUpdate());
    }), Z(() => {
      const o = F();
      window.removeEventListener("resize", () => o?.proxy?.$forceUpdate()), b.value?.removeEventListener("blur", k), b.value?.removeEventListener("keyup", S);
    }), se(async () => {
      setTimeout(() => N(), 0);
    }), (o, m) => {
      const f = T("focus-list"), h = T("tippy");
      return P((s(), v("div", {
        class: "absolute top-0 left-0 bottom-28 flex flex-col w-40 pointer-events-auto appbar z-50 sm:z-20 bg-black-75 sm:w-64 sm:bottom-38",
        content: L(x)("panels.controls.items"),
        ref_key: "el",
        ref: b
      }, [
        (s(!0), v($, null, C(p.value, (n, y) => (s(), v($, null, [
          (s(!0), v($, null, C(n, (t, r) => (s(), v($, null, [
            typeof t == "string" && c.value[`${t}-${r}`] !== !0 ? (s(), _(O, {
              key: `${t}-${r}-default`,
              panelId: t,
              class: I(["appbar-item h-48", `identifier-${t}-${r}`])
            }, null, 8, ["panelId", "class"])) : c.value[`${t.id}-${r}`] !== !0 ? (s(), _(Y(t.componentId), {
              key: `${t.id}-${r}-custom`,
              options: t.options,
              class: I(["appbar-item h-48", `identifier-${t.id}-${r}`]),
              buttonId: t.id
            }, null, 8, ["options", "buttonId", "class"])) : z("", !0)
          ], 64))), 256)),
          c.value[`divider-${y}`] !== !0 ? (s(), _(J, {
            class: I(["appbar-item", `identifier-divider-${y}`]),
            key: `${n}-${y}-default`
          }, null, 8, ["class"])) : z("", !0)
        ], 64))), 256)),
        (s(!0), v($, null, C(e.value?.filter((n) => c.value[`${n}-temp`] !== !0), (n) => (s(), _(O, {
          panelId: n,
          minimize: !0,
          key: `${n}-temp`,
          class: I([`identifier-${n}-temp`, "appbar-item h-48"])
        }, null, 8, ["panelId", "class"]))), 128)),
        P(U(_e, {
          id: "more",
          numItems: i.value,
          renderWatch: d.value,
          onUpdateParent: B
        }, {
          default: V(() => [
            (s(!0), v($, null, C(p.value, (n, y) => (s(), v($, { key: y }, [
              (s(!0), v($, null, C(n, (t, r) => (s(), v($, null, [
                typeof t == "string" && c.value[`${t}-${r}`] ? (s(), _(O, {
                  key: `${t}-${r}-default`,
                  panelId: t,
                  class: I(["text-black hover:bg-gray my-4 h-36", `identifier-${t}-${r}`]),
                  overflow: ""
                }, null, 8, ["panelId", "class"])) : c.value[`${t.id}-${r}`] ? (s(), _(Y(t.componentId), {
                  key: `${t.id}-${r}-custom`,
                  options: t.options,
                  buttonId: t.id,
                  class: I(["appbar-item h-48", `identifier-${t.id}-${r}`])
                }, null, 8, ["options", "buttonId", "class"])) : z("", !0)
              ], 64))), 256)),
              c.value[`divider-${y}`] ? (s(), _(J, {
                key: 0,
                class: I(["border-black my-4", `identifier-divider-${y}`])
              }, null, 8, ["class"])) : z("", !0)
            ], 64))), 128)),
            (s(!0), v($, null, C(e.value?.filter((n) => c.value[`${n}-temp`]), (n) => (s(), _(O, {
              panelId: n,
              minimize: !0,
              key: `${n}-temp`,
              class: I([`identifier-${n}-temp`, "text-black hover:bg-gray my-4 h-36"]),
              overflow: ""
            }, null, 8, ["panelId", "class"]))), 128))
          ]),
          _: 1
        }, 8, ["numItems", "renderWatch"]), [
          [ee, u.value]
        ]),
        U(Ie, { class: "appbar-item bottom-48 h-48 sm:display-none" }),
        U(pe, {
          class: "absolute bottom-0 h-40 sm:display-none w-full text-center",
          position: "right-start"
        })
      ], 8, ke)), [
        [f],
        [h, {
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
class Se extends ce {
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
  _parseConfig(a) {
    if (!a)
      return;
    const l = R(this.$vApp.$pinia);
    let i;
    Array.isArray(a.items[0]) ? i = a.items : i = [a.items];
    const d = [];
    i.forEach((p) => {
      d.push(
        p.map((e) => typeof e == "string" ? e : new W(e))
      );
    }), l.items = d.flat().reduce((p, e) => (p[e instanceof W ? e.id : e] = e, p), {}), l.order = d.map(
      (p) => p.map((e) => e instanceof W ? e.id : e)
    ), this._validateItems();
  }
  /**
   * Checks if components specified as appbar items are registered or not.
   *
   * @memberof AppbarAPI
   */
  _validateItems() {
    const a = R(this.$vApp.$pinia);
    a.order.flat().forEach((l) => {
      typeof a.items[l] != "string" && [l].some((i) => {
        this.$iApi.fixture.exists(i) && !a.items[l] && (a.items[l].componentId = `${i}-appbar-button`);
      });
    });
  }
}
const Ae = { en: { "appbar.navigation": "Navigation", "appbar.more": "More", "navigation.export": "Export", "navigation.map.export": "Export Map" }, fr: { "appbar.navigation": "Navigation", "appbar.more": "Plus", "navigation.export": "Exporter", "navigation.map.export": "Exporter la Carte" } };
class ft extends Se {
  initialized() {
  }
  async added() {
    Object.entries(Ae).forEach((e) => this.$iApi.$i18n.mergeLocaleMessage(...e));
    const { destroy: a, el: l } = this.mount(Ee, {
      app: this.$element
    }), i = this.$vApp.$el.getElementsByClassName("inner-shell")[0];
    i.insertBefore(l.childNodes[0], i.querySelector(".panel-stack")), this._parseConfig(this.config);
    const d = this.$vApp.$watch(
      () => this.config,
      (e) => this._parseConfig(e)
    ), p = [];
    p.push(
      this.$iApi.event.on(ue.COMPONENT, () => {
        this._parseConfig(this.config);
      })
    ), this.removed = () => {
      const e = R(this.$vApp.$pinia);
      d(), p.forEach((c) => this.$iApi.event.off(c));
      const x = { ...e.items }, u = [...e.temporary];
      Object.keys(x).forEach((c) => e.removeButton(c)), u.forEach((c) => e.removeButton(c)), a(), e.$reset();
    };
  }
}
export {
  ft as default
};
