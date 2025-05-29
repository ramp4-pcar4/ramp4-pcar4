import { defineComponent as Y, ref as H, onMounted as ye, resolveDirective as q, openBlock as l, createElementBlock as a, withModifiers as k, withDirectives as x, createElementVNode as o, unref as t, withKeys as ce, normalizeClass as C, inject as ue, computed as R, toRaw as S, resolveComponent as ve, createBlock as $, withCtx as ge, createTextVNode as Z, toDisplayString as w, Fragment as oe, renderList as ie, normalizeStyle as ke, createCommentVNode as u, useTemplateRef as xe, watch as we, createStaticVNode as me, resolveDynamicComponent as Ce } from "vue";
import { p as Me, o as y, Z as Se, a as Ie, a1 as I, G as Q, _ as se, Q as Te, n as ze, a3 as b, a4 as G, S as Ee, a5 as F, a6 as ne } from "./main-YJTupnfU.js";
import "pinia";
import { useI18n as re } from "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
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
import "deepmerge";
import "@terraformer/spatial";
import "proj4";
import "throttle-debounce";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import Ve from "await-to-js";
import "svg.js";
import { marked as He } from "marked";
const Ae = ["type", "aria-label", "checked", "disabled", "content"], ae = /* @__PURE__ */ Y({
  __name: "checkbox",
  props: {
    value: {
      type: Object,
      required: !0
    },
    legendItem: {
      type: Object,
      required: !0
    },
    checked: { type: Boolean },
    label: { type: String },
    isRadio: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    const { t: T } = re(), i = e, c = H(i.legendItem.visibility);
    ye(() => {
      i.legendItem.checkVisibilityRules(), c.value = i.legendItem.visibility === i.checked;
    });
    const f = (s) => !s.symbologyStack.some((L) => L.visibility), A = () => {
      if (i.value instanceof Me)
        i.legendItem.toggleVisibility();
      else if (i.legendItem instanceof y) {
        if (f(i.legendItem) ? (i.legendItem.setSymbologyVisibility(void 0, !1), i.legendItem.setSymbologyVisibility(i.value.uid, !0), i.legendItem.toggleVisibility(!0)) : i.legendItem.setSymbologyVisibility(i.value.uid, !i.value.lastVisbility), f(i.legendItem) && i.legendItem.toggleVisibility(!1), i.legendItem.layer?.supportsFeatures) {
          const s = i.legendItem.symbologyStack.filter((E) => E.lastVisbility === !0).map((E) => E.definitionClause || "");
          let L = "";
          s.length === 0 ? L = "1=2" : s.length < i.legendItem.symbologyStack.length && (L = s.join(" OR ")), i.legendItem.layer?.setSqlFilter(Se.SYMBOL, L);
        }
        c.value = !0;
      }
    };
    return (s, L) => {
      const E = q("tippy");
      return l(), a("div", {
        class: "relative",
        onMouseover: L[3] || (L[3] = k(() => {
        }, ["stop"]))
      }, [
        x(o("input", {
          type: e.isRadio ? "radio" : "checkbox",
          "aria-label": t(T)(e.checked ? `legend.visibility.hide${e.label}` : `legend.visibility.show${e.label}`),
          onClick: L[0] || (L[0] = k((U) => A(), ["stop"])),
          checked: e.checked && c.value,
          onKeypress: L[1] || (L[1] = ce(k(() => {
          }, ["prevent"]), ["enter"])),
          onKeyup: L[2] || (L[2] = ce(k((U) => A(), ["stop"]), ["enter"])),
          class: C([[
            e.disabled ? "text-gray-400 border-gray-300" : "text-black cursor-pointer border-gray-500 hover:border-black"
          ], "mx-5 h-15 w-15"]),
          tabindex: "-1",
          disabled: e.disabled,
          content: t(T)(e.checked ? `legend.visibility.hide${e.label}` : `legend.visibility.show${e.label}`)
        }, null, 42, Ae), [
          [E, { placement: "top-end", hideOnClick: !1 }]
        ])
      ], 32);
    };
  }
}), Be = ["aria-label"], $e = ["aria-label"], Ze = ["aria-label"], Ge = ["aria-label"], Re = ["aria-label"], Ue = ["aria-label"], Pe = ["content", "aria-label"], De = /* @__PURE__ */ Y({
  __name: "legend-options",
  props: {
    legendItem: y
  },
  emits: ["focusItem"],
  setup(e, { emit: T }) {
    const { t: i } = re(), c = ue("iApi"), f = H(), A = H(!1), s = Ie(), L = H(s.mobileView), E = T, U = H(0), v = e, J = () => {
      v.legendItem.layerControlAvailable(I.Symbology) && v.legendItem.toggleSymbology();
    }, B = () => {
      v.legendItem.layerControlAvailable(I.Datatable) && M("grid") && c.event.emit(Q.GRID_TOGGLE, v.legendItem.layer);
    }, N = () => {
      v.legendItem.layerControlAvailable(I.Settings) && M("settings") && c.event.emit(Q.SETTINGS_TOGGLE, v.legendItem.layer);
    }, D = () => {
      if (v.legendItem.layerControlAvailable(I.Metadata) && M("metadata")) {
        const m = v.legendItem?.layer?.config.metadata || v.legendItem?.layer?.parentLayer?.config?.metadata || {}, g = m?.name || v.legendItem?.layer?.name || "", j = v.legendItem?.layer?.config?.catalogueUrl || v.legendItem?.layer?.layerType === "sublayer" && v.legendItem?.layer?.parentLayer?.config?.catalogueUrl || void 0;
        if (m.url) {
          const P = m.url.split("."), V = P[P.length - 1], te = V === "xml" || V === "md" ? V : "html";
          c.event.emit(Q.METADATA_TOGGLE, {
            type: te,
            layerName: g,
            url: m.url,
            catalogueUrl: j,
            layer: v.legendItem.layer
          });
        } else
          console.warn("Layer does not have a metadata url defined");
      }
    }, K = () => {
      v.legendItem.layerControlAvailable(I.BoundaryZoom) && v.legendItem?.layer?.zoomToLayerBoundary();
    }, X = () => {
      v.legendItem.layerControlAvailable(I.Remove) && c.geo.map.removeLayer(v.legendItem.layerUid);
    }, _ = (m) => {
      O.value && S(v.legendItem.layer).reload().then(() => {
        U.value += 1, m.pointerType !== "mouse" && E("focusItem");
      });
    }, O = R(() => v.legendItem.layerControlAvailable(I.Reload) && v.legendItem instanceof y && S(v.legendItem.layer)?.canReload), ee = (m) => {
      A.value = !0, setTimeout(() => {
        A.value && (L.value || m._tippy?.show());
      }, 300);
    }, M = (m) => {
      try {
        return c.fixture.exists(m);
      } catch {
        return !1;
      }
    };
    return (m, g) => {
      const j = ve("dropdown-menu"), P = q("tippy");
      return l(), a("div", {
        onClick: g[3] || (g[3] = k(() => {
        }, ["stop"])),
        onMouseover: g[4] || (g[4] = k(() => {
        }, ["stop"])),
        class: "options display-block cursor-auto"
      }, [
        (l(), $(j, {
          class: "flex-shrink-0",
          position: "bottom-end",
          tooltip: t(i)("legend.layer.options"),
          tooltipPlacement: "left",
          tooltipPlacementAlt: "left",
          ref_key: "dropdown",
          ref: f,
          key: U.value
        }, {
          header: ge(() => g[5] || (g[5] = [
            o("div", { class: "flex p-4 justify-center items-center" }, [
              o("svg", {
                class: "inline-block fill-current w-18 h-18 mx-4",
                viewBox: "0 0 23 21"
              }, [
                o("path", { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
              ])
            ], -1)
          ])),
          default: ge(() => [
            o("a", {
              href: "javascript:;",
              class: C(["flex leading-snug items-center text-left w-auto", {
                disabled: !e.legendItem.layerControlAvailable(t(I).Metadata) || !M("metadata")
              }]),
              onClick: D,
              role: "button",
              "aria-label": t(i)("legend.layer.controls.metadata")
            }, [
              g[6] || (g[6] = o("svg", {
                class: "setting-svg",
                viewBox: "0 0 23 21"
              }, [
                o("path", { d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" })
              ], -1)),
              Z(" " + w(t(i)("legend.layer.controls.metadata")), 1)
            ], 10, Be),
            o("a", {
              href: "javascript:;",
              class: C(["flex leading-snug items-center text-left w-auto", {
                disabled: !e.legendItem.layerControlAvailable(t(I).Settings) || !M("settings")
              }]),
              onClick: N,
              role: "button",
              "aria-label": t(i)("legend.layer.controls.settings")
            }, [
              g[7] || (g[7] = o("svg", {
                class: "setting-svg",
                viewBox: "0 0 23 21"
              }, [
                o("g", null, [
                  o("path", { d: "M 3,17L 3,19L 9,19L 9,17L 3,17 Z M 3,5L 3,7L 13,7L 13,5L 3,5 Z M 13,21L 13,19L 21,19L 21,17L 13,17L 13,15L 11,15L 11,21L 13,21 Z M 7,9L 7,11L 3,11L 3,13L 7,13L 7,15L 9,15L 9,9L 7,9 Z M 21,13L 21,11L 11,11L 11,13L 21,13 Z M 15,9L 17,9L 17,7L 21,7L 21,5L 17,5L 17,3L 15,3L 15,9 Z " })
                ])
              ], -1)),
              Z(" " + w(t(i)("legend.layer.controls.settings")), 1)
            ], 10, $e),
            o("a", {
              href: "javascript:;",
              class: C(["flex leading-snug items-center text-left w-auto", {
                disabled: !e.legendItem.layerControlAvailable(t(I).Datatable) || !M("grid")
              }]),
              onClick: B,
              role: "button",
              "aria-label": t(i)("legend.layer.controls.datatable")
            }, [
              g[8] || (g[8] = o("svg", {
                class: "setting-svg",
                viewBox: "0 0 23 21"
              }, [
                o("path", { d: "M 4.00002,3L 20,3C 21.1046,3 22,3.89543 22,5L 22,20C 22,21.1046 21.1046,22 20,22L 4.00001,22C 2.89544,22 2.00001,21.1046 2.00001,20L 2.00002,5C 2.00002,3.89543 2.89545,3 4.00002,3 Z M 4.00002,7L 4.00001,10L 8,10L 8,7.00001L 4.00002,7 Z M 10,7.00001L 9.99999,10L 14,10L 14,7.00001L 10,7.00001 Z M 20,10L 20,7L 16,7.00001L 16,10L 20,10 Z M 4.00002,12L 4.00002,15L 8,15L 8,12L 4.00002,12 Z M 4.00001,20L 8,20L 8,17L 4.00002,17L 4.00001,20 Z M 9.99999,12L 9.99999,15L 14,15L 14,12L 9.99999,12 Z M 9.99999,20L 14,20L 14,17L 9.99999,17L 9.99999,20 Z M 20,20L 20,17L 16,17L 16,20L 20,20 Z M 20,12L 16,12L 16,15L 20,15L 20,12 Z " })
              ], -1)),
              Z(" " + w(t(i)("legend.layer.controls.datatable")), 1)
            ], 10, Ze),
            o("a", {
              href: "javascript:;",
              class: C(["flex leading-snug items-center text-left w-auto", {
                disabled: !e.legendItem.layerControlAvailable(t(I).Symbology)
              }]),
              onClick: J,
              role: "button",
              "aria-label": t(i)("legend.layer.controls.symbology")
            }, [
              g[9] || (g[9] = o("svg", {
                class: "setting-svg",
                viewBox: "0 0 23 21"
              }, [
                o("path", { d: "M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" })
              ], -1)),
              Z(" " + w(t(i)("legend.layer.controls.symbology")), 1)
            ], 10, Ge),
            o("a", {
              href: "javascript:;",
              class: C(["flex leading-snug items-center text-left w-auto", {
                disabled: !e.legendItem.layerControlAvailable(t(I).BoundaryZoom)
              }]),
              onClick: K,
              role: "button",
              "aria-label": t(i)("legend.layer.controls.boundaryzoom")
            }, [
              g[10] || (g[10] = o("svg", {
                class: "setting-svg",
                viewBox: "0 0 24 24"
              }, [
                o("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
                o("path", {
                  d: "M0 0h24v24H0V0z",
                  fill: "none"
                }),
                o("path", { d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" })
              ], -1)),
              Z(" " + w(t(i)("legend.layer.controls.boundaryzoom")), 1)
            ], 10, Re),
            o("a", {
              href: "javascript:;",
              class: C(["flex leading-snug items-center text-left w-auto", {
                disabled: !e.legendItem.layerControlAvailable(t(I).Remove)
              }]),
              onClick: X,
              role: "button",
              "aria-label": t(i)("legend.layer.controls.remove")
            }, [
              g[11] || (g[11] = o("svg", {
                class: "setting-svg",
                viewBox: "0 0 23 21"
              }, [
                o("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" })
              ], -1)),
              Z(" " + w(t(i)("legend.layer.controls.remove")), 1)
            ], 10, Ue),
            x((l(), a("a", {
              href: "javascript:;",
              class: C(["flex leading-snug items-center text-left w-auto", {
                disabled: !O.value
              }]),
              content: O.value ? "" : t(i)("legend.layer.controls.reloadDisabled"),
              onMouseover: g[0] || (g[0] = k((V) => ee(V.currentTarget), ["stop"])),
              onMouseout: g[1] || (g[1] = (V) => (
                //@ts-expect-error TODO: explain why this is needed or remove
                (L.value || V.currentTarget?._tippy?.hide(), A.value = !1)
              )),
              onClick: g[2] || (g[2] = (V) => _(V)),
              role: "button",
              "aria-label": t(i)("legend.layer.controls.reload")
            }, [
              g[12] || (g[12] = o("svg", {
                class: "setting-svg",
                viewBox: "0 0 24 24"
              }, [
                o("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })
              ], -1)),
              Z(" " + w(t(i)("legend.layer.controls.reload")), 1)
            ], 42, Pe)), [
              [P, {
                placement: "top-start",
                trigger: "manual focus",
                aria: "describedby"
              }]
            ])
          ]),
          _: 1
        }, 8, ["tooltip"]))
      ], 32);
    };
  }
}), Oe = /* @__PURE__ */ se(De, [["__scopeId", "data-v-2ade21d9"]]), je = { key: 0 }, Fe = {
  key: 0,
  class: "relative left-3"
}, qe = ["innerHTML"], Ne = ["src"], Ke = {
  key: 1,
  class: "symbologyIcon w-32 h-32"
}, We = ["innerHTML"], Qe = ["src"], Ye = {
  key: 1,
  class: "h-32 w-32 inline-flex justify-center items-center"
}, Je = /* @__PURE__ */ Y({
  __name: "symbology-stack",
  props: {
    visible: { type: Boolean, required: !0 },
    legendItem: { type: Object, required: !0 }
  },
  setup(e) {
    const T = e, i = H([]);
    return ye(() => {
      T.legendItem.loadPromise.then(() => {
        T.legendItem.layerUid !== void 0 && Promise.all(S(T.legendItem.symbologyStack).map((c) => c.drawPromise)).then(() => {
          i.value = S(T.legendItem).symbologyStack;
        });
      });
    }), (c, f) => e.visible ? (l(), a("div", Ye, f[0] || (f[0] = [
      o("svg", {
        class: "fill-current w-16 h-16",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 352 512"
      }, [
        o("path", { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" })
      ], -1)
    ]))) : (l(), a("div", je, [
      i.value.length > 1 ? (l(), a("div", Fe, [
        (l(!0), a(oe, null, ie(i.value.slice(0, 3).reverse(), (A, s) => (l(), a("div", {
          class: C(["absolute", [s == 0 ? "symbol-0" : s == 1 ? "left-3 symbol-1" : "left-6 symbol-2"]]),
          style: ke({ "z-index": 3 - s }),
          key: s
        }, [
          i.value[s].svgcode ? (l(), a("span", {
            key: 0,
            class: "symbologyIcon w-28 h-28",
            innerHTML: i.value[s].svgcode
          }, null, 8, qe)) : i.value[s].imgUrl ? (l(), a("img", {
            key: 1,
            class: "symbologyIcon w-28 h-28",
            src: i.value[s].imgUrl
          }, null, 8, Ne)) : u("", !0)
        ], 6))), 128))
      ])) : i.value.length > 0 ? (l(), a("div", Ke, [
        i.value[0].svgcode ? (l(), a("span", {
          key: 0,
          innerHTML: i.value[0].svgcode
        }, null, 8, We)) : i.value[0].imgUrl ? (l(), a("img", {
          key: 1,
          class: "symbologyIcon w-full h-full",
          src: i.value[0].imgUrl
        }, null, 8, Qe)) : u("", !0)
      ])) : u("", !0)
    ]));
  }
}), Xe = /* @__PURE__ */ se(Je, [["__scopeId", "data-v-34dfeccd"]]), _e = { class: "relative" }, et = ["content"], tt = {
  key: 0,
  class: "flex p-5 mr-[13px]"
}, lt = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "black",
  width: "24px",
  height: "24px"
}, nt = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "black",
  width: "24px",
  height: "24px"
}, at = ["disabled", "content", "aria-label"], ot = ["src"], it = { class: "h-auto break-words text-ellipsis" }, st = {
  key: 4,
  class: "flex-1 pointer-events-none p-5"
}, rt = {
  key: 5,
  class: "flex-1"
}, dt = {
  key: 0,
  class: "text-lg font-bold"
}, ct = { key: 1 }, gt = { key: 2 }, mt = ["src"], yt = ["innerHTML"], ut = {
  key: 6,
  class: "relative"
}, vt = ["content", "aria-label"], It = {
  key: 8,
  class: "relative"
}, bt = ["content", "aria-label"], ft = { class: "flex p-5" }, ht = {
  key: 0,
  class: "fill-current w-18 h-18",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 352 512"
}, Lt = {
  key: 1,
  class: "inline-block fill-current w-18 h-18 mr-1",
  viewBox: "0 1 23 22"
}, pt = ["content"], kt = ["content"], xt = {
  key: 11,
  class: "relative top-1"
}, wt = ["content"], Ct = {
  key: 0,
  class: "h-3 w-full absolute bottom-0"
}, Mt = {
  key: 0,
  class: "symbology-stack default-focus-style"
}, St = { key: 0 }, Tt = {
  key: 0,
  class: "m-5"
}, zt = {
  key: 0,
  class: "items-center grid-cols-1"
}, Et = {
  key: 0,
  class: "symbologyIcon w-full p-5"
}, Vt = ["src"], Ht = ["innerHTML"], At = {
  key: 2,
  class: "flex-1 p-5 bg-black-75 text-white"
}, Bt = {
  key: 1,
  class: "flex items-center"
}, $t = {
  key: 0,
  class: "symbologyIcon"
}, Zt = ["src"], Gt = {
  key: 1,
  class: "symbologyIcon"
}, Rt = ["innerHTML"], Ut = { class: "flex-1 ml-15" }, Pt = { key: 1 }, Dt = { class: "flex p-5 ml-48" }, Ot = {
  key: 0,
  class: "relative animate-spin spinner h-20 w-20 mr-10 pt-2"
}, jt = { class: "flex-1 text-gray-500" }, Ft = {
  key: 1,
  class: "legend-group border-l-2 ml-4 pl-4"
}, qt = /* @__PURE__ */ Y({
  __name: "item",
  props: {
    legendItem: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const T = Te(), i = Ie(), { t: c } = re(), f = ue("iApi"), A = H(), s = e, L = ze(), E = L.multilineItems, U = (s.legendItem instanceof y && s.legendItem.maxLines) ?? L.maxLines, v = H(i.mobileView), J = R(() => T.layerConfigs), B = H([]), N = H(!1), D = H(!1), K = xe("legendFocusItem"), X = R(() => s.legendItem instanceof y ? S(s.legendItem.layer)?.layerType : ""), _ = R(() => s.legendItem instanceof y && S(s.legendItem.layer)?.canModifyLayer), O = R(() => {
      if (s.legendItem instanceof y) {
        const r = S(s.legendItem.layer);
        return r ? r.canReload : !0;
      } else
        return !1;
    }), ee = R(() => f.animate), M = R(() => s.legendItem.children.length > 0 || // TODO: Determine why Vue reactivity isn't picking updates to the children property of the parent.
    // isGroup is being called on the parent before the children are mapped in legend.ts. After they're mapped, isGroup isn't called again.
    s.legendItem instanceof y && S(s.legendItem.layer)?.sublayers.length > 0), m = (r) => r === G.Expand || r === G.Visibility ? s.legendItem.controlAvailable(r) : s.legendItem.layerControlAvailable(r), g = (r) => He(r), j = () => {
      s.legendItem.children.length === 0 || !m(G.Expand) || (s.legendItem.toggleExpanded(), f.updateAlert(c(`legend.alert.group${s.legendItem.expanded ? "Expanded" : "Collapsed"}`)));
    }, P = () => {
      if (m(I.Symbology)) {
        const r = s.legendItem.toggleSymbology();
        f.updateAlert(c(`legend.alert.symbology${r ? "Expanded" : "Collapsed"}`));
      }
    }, V = () => {
      m(I.Datatable) && W() && f.event.emit(Q.GRID_TOGGLE, s.legendItem.layer);
    }, te = (r) => {
      const n = document.createElement("span");
      n.innerHTML = r.svgcode;
      const h = n.firstElementChild;
      return h?.classList.add("max-w-full"), h?.classList.add("h-full"), h?.setAttribute("height", r.imgHeight), h?.setAttribute("width", r.imgWidth), n.outerHTML;
    }, W = () => {
      try {
        return f.fixture.exists("grid");
      } catch {
        return !1;
      }
    }, be = () => {
      s.legendItem.reload(), setTimeout(() => {
        const r = s.legendItem;
        let n = !0;
        if (r.layer)
          S(r.layer).reload(), n = !1;
        else if (r.isSublayer && r.parentLayerId) {
          const h = f.geo.layer.getLayer(r.parentLayerId);
          h && (S(h).reload(), n = !1);
        }
        if (n) {
          const h = r.isSublayer ? r.parentLayerId : r.layerId, p = J.value.find((z) => z.id === h);
          p !== void 0 && fe(p);
        }
        s.legendItem.loadPromise.catch(() => {
        });
      }, 400);
    }, fe = async (r) => {
      try {
        const n = f.geo.layer.getLayer(r.id);
        if (n) {
          const [h] = await Ve(S(n).reload());
          if (h)
            throw new Error();
          return n;
        } else {
          const h = f.geo.layer.createLayer(r);
          return await f.geo.map.addLayer(h).catch(() => {
            throw new Error();
          }), h;
        }
      } catch {
        return;
      }
    }, he = () => {
      const r = S(s.legendItem);
      let n = 0;
      if (r.type === b.Error) {
        s.legendItem.toggleHidden(!0);
        const h = setInterval(() => {
          const p = r.layer;
          (p && (p.layerExists || p.initiationState === ne.NEW || p.initiationState === ne.TERMINATING || p.initiationState === ne.TERMINATED) || n > 1200) && (clearInterval(h), p && f.geo.map.removeLayer(p), T.removeLayerConfig(r.layerId), f.fixture.get("legend")?.removeLayerItem(r.layerId)), n++;
        }, 250);
      } else {
        s.legendItem.error();
        const h = setInterval(() => {
          const p = r.parentLayerId || r.layerId, z = f.geo.layer.getLayer(p);
          z && (clearInterval(h), z.cancelLoad(), (f.fixture.get("legend")?.getLayerBoundItems(z) || []).forEach((d) => d.error())), n > 1200 && clearInterval(h), n++;
        }, 50);
      }
    }, de = () => {
      s.legendItem.loadPromise.then(() => {
        if (B.value = [], !s.legendItem.layer) {
          console.warn("Attempted to mount legend item component with undefined layer");
          return;
        }
        Promise.all(
          S(s.legendItem.symbologyStack.map((r) => r.drawPromise))
        ).then(() => {
          B.value = s.legendItem.symbologyStack, N.value = !0;
        });
      }).catch(() => {
      });
    }, Le = (r) => {
      D.value = !0, setTimeout(() => {
        D.value && (v.value || r._tippy?.show());
      }, 300);
    };
    return s.legendItem instanceof y && (de(), we(
      () => s.legendItem.symbologyStack,
      () => {
        de();
      }
    )), (r, n) => {
      const h = ve("item", !0), p = q("tippy"), z = q("truncate"), le = q("focus-item");
      return e.legendItem.hidden ? u("", !0) : (l(), a("div", {
        key: `${e.legendItem.uid}`,
        ref_key: "el",
        ref: A
      }, [
        o("div", _e, [
          x((l(), a("div", {
            class: C(["flex items-center hover:bg-gray-200 default-focus-style !p-5", [
              e.legendItem.type === t(b).Item ? "loaded-item" : e.legendItem.type === t(b).Error ? "non-loaded-item bg-red-200" : "non-loaded-item",
              M.value && m(t(G).Expand) || !M.value && e.legendItem instanceof t(y) && m(t(I).Datatable) && W() && e.legendItem.type === t(b).Item ? "cursor-pointer" : "cursor-default",
              t(E) ? "multilined" : "singlelined"
            ]]),
            onMouseover: n[10] || (n[10] = k((d) => Le(d.currentTarget), ["stop"])),
            onMouseout: n[11] || (n[11] = (d) => (
              //@ts-expect-error TODO: explain why this is needed or remove
              (v.value || d.currentTarget?._tippy?.hide(), D.value = !1)
            )),
            onClick: n[12] || (n[12] = () => {
              !M.value && e.legendItem instanceof t(y) && m(t(I).Datatable) && W() && e.legendItem.type === t(b).Item ? V() : M.value && j();
            }),
            content: M.value && m(t(G).Expand) ? t(c)(e.legendItem.expanded ? "legend.group.collapse" : "legend.group.expand") : e.legendItem instanceof t(y) && e.legendItem.type === t(b).Item && m(t(I).Datatable) && W() ? t(c)("legend.layer.data") : "",
            "truncate-trigger": "",
            ref_key: "legendFocusItem",
            ref: K
          }, [
            e.legendItem.type !== t(b).Item ? (l(), a("div", tt, [
              e.legendItem.type === t(b).Placeholder ? (l(), a("svg", lt, n[14] || (n[14] = [
                me('<path d="M0 0h24v24H0V0z" fill="none" data-v-ea22b3ac></path><path d="M0 0h24v24H0V0z" fill="none" data-v-ea22b3ac></path><circle cx="15.5" cy="9.5" r="1.5" data-v-ea22b3ac></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-ea22b3ac></circle><circle cx="15.5" cy="9.5" r="1.5" data-v-ea22b3ac></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-ea22b3ac></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5z" data-v-ea22b3ac></path>', 7)
              ]))) : (l(), a("svg", nt, n[15] || (n[15] = [
                me('<path d="M0 0h24v24H0V0z" fill="none" data-v-ea22b3ac></path><path d="M0 0h24v24H0V0z" fill="none" data-v-ea22b3ac></path><circle cx="15.5" cy="9.5" r="1.5" data-v-ea22b3ac></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-ea22b3ac></circle><circle cx="15.5" cy="9.5" r="1.5" data-v-ea22b3ac></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-ea22b3ac></circle><path d="M 20,12C 20,7.6 16.4,4 12,4C 7.6,4 4,7.6 4,12C 4,16.4 7.6,20 12,20C 16.4,20 20,16.4 20,12 Z M 22,12C 22,17.5 17.5,22 12,22C 6.5,22 2,17.5 2,12C 2,6.5 6.5,2.00001 12,2.00001C 17.5,2.00001 22,6.5 22,12 Z M 15.5,8C 16.3,8 17,8.7 17,9.5C 17,10.3 16.3,11 15.5,11C 14.7,11 14,10.3 14,9.5C 14,8.7 14.7,8 15.5,8 Z M 10,9.5C 10,10.3 9.3,11 8.5,11C 7.7,11 7,10.3 7,9.5C 7,8.7 7.7,8 8.5,8C 9.3,8 10,8.7 10,9.5 Z M 12,14C 13.7524,14 15.2943,14.7212 16.1871,15.8129L 14.7697,17.2302C 14.3175,16.5078 13.2477,16 12,16C 10.7523,16 9.68254,16.5078 9.23024,17.2302L 7.81291,15.8129C 8.7057,14.7212 10.2476,14 12,14 Z" data-v-ea22b3ac></path>', 7)
              ])))
            ])) : u("", !0),
            e.legendItem.type === t(b).Item && e.legendItem instanceof t(y) && e.legendItem.layer.legend.length > 0 ? (l(), a("div", {
              key: 1,
              class: "relative w-32 h-32 mr-15",
              onMouseover: n[0] || (n[0] = k(() => {
              }, ["stop"]))
            }, [
              x((l(), a("button", {
                type: "button",
                onClick: k(P, ["stop"]),
                class: C([m(t(I).Symbology) ? "cursor-pointer" : "cursor-default"]),
                disabled: !m(t(I).Symbology),
                content: e.legendItem instanceof t(y) && e.legendItem.symbologyExpanded ? t(c)("legend.symbology.hide") : t(c)("legend.symbology.expand"),
                "aria-label": e.legendItem instanceof t(y) && e.legendItem.symbologyExpanded ? t(c)("legend.symbology.hide") : t(c)("legend.symbology.expand")
              }, [
                e.legendItem.coverIcon ? (l(), a("img", {
                  key: 1,
                  class: C([{
                    "pointer-events-none": !m(t(I).Symbology)
                  }, "w-32 h-32 hover:scale-105"]),
                  src: e.legendItem.coverIcon,
                  alt: "Cover icon not found :("
                }, null, 10, ot)) : (l(), $(Xe, {
                  key: 0,
                  class: C([{
                    "pointer-events-none": !m(t(I).Symbology)
                  }, "w-32 h-32"]),
                  visible: e.legendItem instanceof t(y) && e.legendItem.symbologyExpanded,
                  legendItem: e.legendItem
                }, null, 8, ["class", "visible", "legendItem"]))
              ], 10, at)), [
                [p, {
                  placement: "top-start"
                }]
              ])
            ], 32)) : u("", !0),
            M.value && m(t(G).Expand) ? (l(), a("div", {
              key: 2,
              class: C(["expand-toggle p-8 pointer-events-none", { "rotate-180": e.legendItem.expanded }])
            }, n[16] || (n[16] = [
              o("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                height: "18",
                viewBox: "0 0 24 24",
                width: "18"
              }, [
                o("path", { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" })
              ], -1)
            ]), 2)) : u("", !0),
            e.legendItem instanceof t(y) && t(E) ? x((l(), a("div", {
              key: 3,
              class: C(["flex-1 pointer-events-none m-5", `line-clamp-${t(U)}`])
            }, [
              o("span", it, w(e.legendItem.name ?? (e.legendItem?.layer?.name ? e.legendItem.layer?.name : e.legendItem.layerId)), 1)
            ], 2)), [
              [z, {
                externalTrigger: !0,
                noTruncateClass: !0
              }]
            ]) : e.legendItem instanceof t(y) ? x((l(), a("div", st, [
              o("span", null, w(e.legendItem.name ?? (!e.legendItem.layer || e.legendItem?.layer?.name === "" ? e.legendItem.layerId : e.legendItem.layer?.name)), 1)
            ])), [
              [z, { externalTrigger: !0 }]
            ]) : e.legendItem instanceof t(Ee) ? (l(), a("div", rt, [
              e.legendItem.infoType === t(F).Title && e.legendItem.content ? (l(), a("h3", dt, w(e.legendItem.content), 1)) : e.legendItem.infoType === t(F).Title ? (l(), a("h3", ct, w(e.legendItem.name), 1)) : e.legendItem.infoType === t(F).Text ? (l(), a("p", gt, w(e.legendItem.content), 1)) : e.legendItem.infoType === t(F).Image ? (l(), a("img", {
                key: 3,
                src: e.legendItem.content,
                alt: "InfoType image not found :("
              }, null, 8, mt)) : e.legendItem.infoType === t(F).Markdown ? (l(), a("div", {
                key: 4,
                class: "ramp-markdown",
                innerHTML: g(e.legendItem.content)
              }, null, 8, yt)) : (l(), $(Ce(`${e.legendItem.uid}-info-section`), { key: 5 }))
            ])) : u("", !0),
            e.legendItem.type === t(b).Error && O.value ? (l(), a("div", ut, [
              x((l(), a("button", {
                type: "button",
                class: "text-gray-500 hover:text-black",
                content: t(c)("legend.layer.controls.reload"),
                onMouseover: n[1] || (n[1] = k(() => {
                }, ["stop"])),
                onClick: k(be, ["stop"]),
                "aria-label": t(c)("legend.layer.controls.reload")
              }, n[17] || (n[17] = [
                o("div", { class: "flex p-8" }, [
                  o("svg", {
                    class: "inline-block fill-current w-18 h-18",
                    viewBox: "0 0 24 24"
                  }, [
                    o("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })
                  ])
                ], -1)
              ]), 40, vt)), [
                [p, {
                  placement: "top-start"
                }]
              ])
            ])) : u("", !0),
            (e.legendItem.type === t(b).Item || e.legendItem.type === t(b).Placeholder && t(E)) && e.legendItem instanceof t(y) ? (l(), $(Oe, {
              key: 7,
              class: C({
                invisible: e.legendItem.type === t(b).Placeholder
              }),
              legendItem: e.legendItem,
              onFocusItem: n[2] || (n[2] = () => r.$emit("focusItem", t(K)))
            }, null, 8, ["class", "legendItem"])) : u("", !0),
            e.legendItem.type !== t(b).Item && e.legendItem instanceof t(y) ? (l(), a("div", It, [
              x((l(), a("button", {
                type: "button",
                class: "text-gray-500 hover:text-black",
                content: e.legendItem.type === t(b).Error ? t(c)("legend.layer.controls.remove") : t(c)("legend.layer.controls.cancel"),
                onMouseover: n[3] || (n[3] = k(() => {
                }, ["stop"])),
                onClick: k(he, ["stop"]),
                "aria-label": e.legendItem.type === t(b).Error ? t(c)("legend.layer.controls.remove") : t(c)("legend.layer.controls.cancel")
              }, [
                o("div", ft, [
                  e.legendItem.type === t(b).Placeholder ? (l(), a("svg", ht, n[18] || (n[18] = [
                    o("path", { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, null, -1)
                  ]))) : (l(), a("svg", Lt, n[19] || (n[19] = [
                    o("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" }, null, -1)
                  ])))
                ])
              ], 40, bt)), [
                [p, {
                  placement: "top-start"
                }]
              ])
            ])) : u("", !0),
            e.legendItem.type === t(b).Item && e.legendItem instanceof t(y) && e.legendItem.layerOffscale ? x((l(), a("div", {
              key: 9,
              class: "relative p-4 cursor-default",
              content: t(c)("legend.layer.offscale"),
              onMouseover: n[4] || (n[4] = k(() => {
              }, ["stop"])),
              onClick: n[5] || (n[5] = k(() => {
              }, ["stop"])),
              "focus-icon": ""
            }, n[20] || (n[20] = [
              o("svg", {
                class: "inline-block fill-gray-400 w-18 h-18",
                viewBox: "0 0 24 24"
              }, [
                o("path", { d: "M19.81 14.99l1.19-.92-1.43-1.43-1.19.92 1.43 1.43zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88 2.4-1.88zM3.27 1L2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73 3.27 1z" })
              ], -1)
            ]), 40, pt)), [
              [p, {
                placement: "top-start"
              }]
            ]) : u("", !0),
            e.legendItem.type === t(b).Item && e.legendItem instanceof t(y) && !e.legendItem.layer?.mapLayer ? x((l(), a("div", {
              key: 10,
              class: "relative p-4 cursor-default",
              content: t(c)("legend.layer.data.only"),
              onMouseover: n[6] || (n[6] = k(() => {
              }, ["stop"])),
              onClick: n[7] || (n[7] = k(() => {
              }, ["stop"])),
              "focus-icon": ""
            }, n[21] || (n[21] = [
              o("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                height: "18",
                viewBox: "0 -960 960 960",
                width: "18",
                class: "inline-block fill-gray-400"
              }, [
                o("path", { d: "m776.109-63.565-73.435-69.196q-51.302 32.573-106.091 59.145-54.788 26.572-116.255 26.572-88.94 0-167.803-33.893-78.862-33.894-138.052-93.239-59.19-59.346-93.19-138.205-34-78.86-34-167.619 0-64.607 19.12-125.521Q85.521-666.435 120-719.674l-50.848-50.848 68.761-68.761L844.87-132.326l-68.761 68.76Zm-345.392-92.653v-72.5l-52.25-52.086v-50.009l-219.01-218.752q-3 17.015-5 34.031-2 17.015-2 35.136 0 124.449 78.826 214.674 78.826 90.224 199.434 109.506Zm410.392-85.412-76.739-77.74q21.288-37.275 32.35-77.847 11.062-40.572 11.062-84.059 0-95.003-56.304-169.853-56.304-74.849-145.391-108.893v.522l-174.413 76.087v31.348L241.87-842.109q52.483-34.989 113.387-52.918 60.903-17.93 125.159-17.93 89.709 0 168.127 33.869 78.418 33.868 137.435 93.28 59.016 59.413 92.997 137.683 33.982 78.269 33.982 167.993 0 64.203-18.43 125.111-18.429 60.907-53.418 113.391Z" })
              ], -1)
            ]), 40, kt)), [
              [p, {
                placement: "top-end"
              }]
            ]) : u("", !0),
            e.legendItem.type === t(b).Item && e.legendItem instanceof t(y) && e.legendItem.layerOffscale ? (l(), a("div", xt, [
              x((l(), a("button", {
                type: "button",
                class: "p-4",
                content: t(c)("legend.layer.zoomToVisible"),
                onMouseover: n[8] || (n[8] = k(() => {
                }, ["stop"])),
                onClick: n[9] || (n[9] = k((d) => e.legendItem.layer.zoomToVisibleScale(), ["stop"]))
              }, n[22] || (n[22] = [
                o("svg", {
                  class: "m-auto",
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "18",
                  viewBox: "0 0 24 24",
                  width: "18"
                }, [
                  o("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
                  o("path", {
                    d: "M0 0h24v24H0V0z",
                    fill: "none"
                  }),
                  o("path", { d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" })
                ], -1)
              ]), 40, wt)), [
                [p, {
                  placement: "top-start"
                }]
              ])
            ])) : e.legendItem.type === t(b).Item && m(t(G).Visibility) ? (l(), $(ae, {
              key: 12,
              checked: e.legendItem.visibility,
              value: e.legendItem,
              isRadio: e.legendItem.parent && e.legendItem.parent.exclusive,
              legendItem: e.legendItem,
              disabled: e.legendItem instanceof t(y) && !e.legendItem.layerControlAvailable(t(I).Visibility),
              label: M.value ? "Group" : "Layer"
            }, null, 8, ["checked", "value", "isRadio", "legendItem", "disabled", "label"])) : u("", !0)
          ], 42, et)), [
            [le, "show-truncate"],
            [p, {
              placement: "top-start",
              trigger: "manual focus",
              aria: "describedby"
            }]
          ]),
          e.legendItem.type === t(b).Placeholder || e.legendItem instanceof t(y) && e.legendItem.layerRedrawing && e.legendItem.visibility ? (l(), a("div", Ct, n[23] || (n[23] = [
            o("div", { class: "progress-line" }, null, -1)
          ]))) : u("", !0)
        ]),
        e.legendItem instanceof t(y) && e.legendItem.symbologyExpanded ? x((l(), a("div", Mt, [
          B.value.length > 0 ? (l(), a("div", St, [
            e.legendItem instanceof t(y) && e.legendItem.description ? (l(), a("p", Tt, w(e.legendItem.description), 1)) : u("", !0),
            (l(!0), a(oe, null, ie(B.value, (d) => (l(), a("div", {
              class: "m-5",
              key: d.uid
            }, [
              d.imgUrl && e.legendItem.symbologyRenderStyle === "images" || !d.imgUrl && X.value === "ogc-wms" ? (l(), a("div", zt, [
                d.imgUrl ? (l(), a("div", Et, [
                  o("img", {
                    class: "max-w-full",
                    src: d.imgUrl
                  }, null, 8, Vt)
                ])) : d.imgHeight ? (l(), a("div", {
                  key: 1,
                  class: "symbologyIcon w-full p-5",
                  innerHTML: te(d)
                }, null, 8, Ht)) : u("", !0),
                d.label ? x((l(), a("div", At, [
                  o("span", null, w(d.label), 1),
                  !d.imgUrl && B.value.length > 1 || d.imgUrl && d.definitionClause ? (l(), $(ae, {
                    key: 0,
                    class: "float-right",
                    value: d,
                    legendItem: e.legendItem,
                    checked: d.visibility,
                    disabled: !m(t(I).Visibility),
                    label: "Symbol"
                  }, null, 8, ["value", "legendItem", "checked", "disabled"])) : u("", !0)
                ])), [
                  [z]
                ]) : u("", !0)
              ])) : (l(), a("div", Bt, [
                d.imgUrl ? (l(), a("div", $t, [
                  o("img", {
                    class: "w-32 h-32",
                    src: d.imgUrl
                  }, null, 8, Zt)
                ])) : d.svgcode ? (l(), a("div", Gt, [
                  o("span", {
                    innerHTML: d.svgcode
                  }, null, 8, Rt)
                ])) : u("", !0),
                x((l(), a("div", Ut, [
                  Z(w(d.label), 1)
                ])), [
                  [z]
                ]),
                _.value && e.legendItem.layer.supportsFeatures && (!d.imgUrl && B.value.length > 1 || d.imgUrl && d.definitionClause) ? (l(), $(ae, {
                  key: 2,
                  value: d,
                  legendItem: e.legendItem,
                  checked: d.visibility,
                  disabled: !m(t(I).Visibility),
                  label: "Symbol"
                }, null, 8, ["value", "legendItem", "checked", "disabled"])) : u("", !0)
              ]))
            ]))), 128))
          ])) : u("", !0),
          N.value ? u("", !0) : (l(), a("div", Pt, [
            x((l(), a("div", Dt, [
              ee.value ? (l(), a("div", Ot)) : u("", !0),
              x((l(), a("div", jt, [
                o("span", null, w(t(c)("legend.symbology.loading")), 1)
              ])), [
                [z]
              ])
            ])), [
              [z]
            ])
          ]))
        ])), [
          [le]
        ]) : u("", !0),
        e.legendItem.expanded ? (l(), a("div", Ft, [
          (l(!0), a(oe, null, ie(e.legendItem.children, (d) => (l(), $(h, {
            legendItem: d,
            key: d.uid,
            onFocusItem: n[13] || (n[13] = (pe) => r.$emit("focusItem", pe))
          }, null, 8, ["legendItem"]))), 128))
        ])) : u("", !0)
      ]));
    };
  }
}), Tl = /* @__PURE__ */ se(qt, [["__scopeId", "data-v-ea22b3ac"]]);
export {
  Tl as default
};
