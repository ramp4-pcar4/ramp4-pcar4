import { defineComponent as Q, ref as V, onMounted as ce, resolveDirective as N, openBlock as l, createElementBlock as a, withModifiers as k, withDirectives as x, createElementVNode as o, unref as t, withKeys as se, normalizeClass as C, inject as ge, computed as U, toRaw as M, resolveComponent as me, createVNode as Le, withCtx as re, createTextVNode as B, toDisplayString as w, Fragment as le, renderList as ne, normalizeStyle as pe, createCommentVNode as v, watch as ke, createStaticVNode as de, createBlock as Z, resolveDynamicComponent as xe } from "vue";
import { p as we, o as u, X as Ce, a as ye, $ as I, G as K, _ as ae, N as Me, n as Se, a1 as f, a2 as G, S as Te, a3 as O, a4 as ee } from "./main-lcO-efBh.js";
import "pinia";
import { useI18n as oe } from "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "@arcgis/core/Color";
import "@arcgis/core/config";
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
import "terraformer";
import "proj4";
import "throttle-debounce";
import "terraformer-arcgis-parser";
import "csv2geojson";
import "redaxios";
import ze from "await-to-js";
import "svg.js";
import { marked as Ve } from "marked";
const Ee = ["type", "aria-label", "checked", "disabled", "content"], te = /* @__PURE__ */ Q({
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
    const { t: y } = oe(), s = e, m = V(s.legendItem.visibility);
    ce(() => {
      s.legendItem.checkVisibilityRules(), m.value = s.legendItem.visibility === s.checked;
    });
    const b = (i) => !i.symbologyStack.some((r) => r.visibility), $ = () => {
      if (s.value instanceof we)
        s.legendItem.toggleVisibility();
      else if (s.legendItem instanceof u) {
        if (b(s.legendItem) ? (s.legendItem.setSymbologyVisibility(void 0, !1), s.legendItem.setSymbologyVisibility(s.value.uid, !0), s.legendItem.toggleVisibility(!0)) : s.legendItem.setSymbologyVisibility(s.value.uid, !s.value.lastVisbility), b(s.legendItem) && s.legendItem.toggleVisibility(!1), s.legendItem.layer?.supportsFeatures) {
          const i = s.legendItem.symbologyStack.filter((T) => T.lastVisbility === !0).map((T) => T.definitionClause || "");
          let r = "";
          i.length === 0 ? r = "1=2" : i.length < s.legendItem.symbologyStack.length && (r = i.join(" OR ")), s.legendItem.layer?.setSqlFilter(Ce.SYMBOL, r);
        }
        m.value = !0;
      }
    };
    return (i, r) => {
      const T = N("tippy");
      return l(), a("div", {
        class: "relative",
        onMouseover: r[3] || (r[3] = k(() => {
        }, ["stop"]))
      }, [
        x(o("input", {
          type: e.isRadio ? "radio" : "checkbox",
          "aria-label": t(y)(e.checked ? `legend.visibility.hide${e.label}` : `legend.visibility.show${e.label}`),
          onClick: r[0] || (r[0] = k((P) => $(), ["stop"])),
          checked: e.checked && m.value,
          onKeypress: r[1] || (r[1] = se(k(() => {
          }, ["prevent"]), ["enter"])),
          onKeyup: r[2] || (r[2] = se(k((P) => $(), ["stop"]), ["enter"])),
          class: C([[
            e.disabled ? "text-gray-400 border-gray-300" : "text-black cursor-pointer border-gray-500 hover:border-black"
          ], "mx-5 h-15 w-15"]),
          tabindex: "-1",
          disabled: e.disabled,
          content: t(y)(e.checked ? `legend.visibility.hide${e.label}` : `legend.visibility.show${e.label}`)
        }, null, 42, Ee), [
          [T, { placement: "top-end", hideOnClick: !1 }]
        ])
      ], 32);
    };
  }
}), He = ["aria-label"], Ae = ["aria-label"], Be = ["aria-label"], $e = ["aria-label"], Ze = ["aria-label"], Ge = ["aria-label"], Ue = ["content", "aria-label"], Re = /* @__PURE__ */ Q({
  __name: "legend-options",
  props: {
    legendItem: u
  },
  setup(e) {
    const { t: y } = oe(), s = ge("iApi"), m = V(), b = V(!1), $ = ye(), i = V($.mobileView), r = e, T = () => {
      r.legendItem.layerControlAvailable(I.Symbology) && r.legendItem.toggleSymbology();
    }, P = () => {
      r.legendItem.layerControlAvailable(I.Datatable) && A("grid") && s.event.emit(K.GRID_TOGGLE, r.legendItem.layer);
    }, q = () => {
      r.legendItem.layerControlAvailable(I.Settings) && A("settings") && s.event.emit(K.SETTINGS_TOGGLE, r.legendItem.layer);
    }, X = () => {
      if (r.legendItem.layerControlAvailable(I.Metadata) && A("metadata")) {
        const z = r.legendItem?.layer?.config.metadata || r.legendItem?.layer?.parentLayer?.config?.metadata || {}, c = z?.name || r.legendItem?.layer?.name || "", L = r.legendItem?.layer?.config?.catalogueUrl || r.legendItem?.layer?.layerType === "sublayer" && r.legendItem?.layer?.parentLayer?.config?.catalogueUrl || void 0;
        if (z.url) {
          const R = z.url.split("."), E = R[R.length - 1], J = E === "xml" || E === "md" ? E : "html";
          s.event.emit(K.METADATA_TOGGLE, {
            type: J,
            layerName: c,
            url: z.url,
            catalogueUrl: L,
            layer: r.legendItem.layer
          });
        } else
          console.warn("Layer does not have a metadata url defined");
      }
    }, H = () => {
      r.legendItem.layerControlAvailable(I.BoundaryZoom) && r.legendItem?.layer?.zoomToLayerBoundary();
    }, F = () => {
      r.legendItem.layerControlAvailable(I.Remove) && s.geo.map.removeLayer(r.legendItem.layerUid);
    }, D = () => {
      j.value && (M(r.legendItem.layer).reload(), m.value.open = !1);
    }, j = U(() => r.legendItem.layerControlAvailable(I.Reload) && r.legendItem instanceof u && M(r.legendItem.layer)?.canReload), Y = (z) => {
      b.value = !0, setTimeout(() => {
        b.value && (i.value || z._tippy?.show());
      }, 300);
    }, A = (z) => {
      try {
        return s.fixture.exists(z);
      } catch {
        return !1;
      }
    };
    return (z, c) => {
      const L = me("dropdown-menu"), R = N("tippy");
      return l(), a("div", {
        onClick: c[2] || (c[2] = k(() => {
        }, ["stop"])),
        onMouseover: c[3] || (c[3] = k(() => {
        }, ["stop"])),
        class: "options display-block cursor-auto"
      }, [
        Le(L, {
          class: "flex-shrink-0",
          position: "bottom-end",
          tooltip: t(y)("legend.layer.options"),
          tooltipPlacement: "left",
          tooltipPlacementAlt: "left",
          ref_key: "dropdown",
          ref: m
        }, {
          header: re(() => c[4] || (c[4] = [
            o("div", { class: "flex p-4 justify-center items-center" }, [
              o("svg", {
                class: "inline-block fill-current w-18 h-18 mx-4",
                viewBox: "0 0 23 21"
              }, [
                o("path", { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
              ])
            ], -1)
          ])),
          default: re(() => [
            o("a", {
              href: "javascript:;",
              class: C(["flex leading-snug items-center text-left w-auto", {
                disabled: !e.legendItem.layerControlAvailable(t(I).Metadata) || !A("metadata")
              }]),
              onClick: X,
              role: "button",
              "aria-label": t(y)("legend.layer.controls.metadata")
            }, [
              c[5] || (c[5] = o("svg", {
                class: "setting-svg",
                viewBox: "0 0 23 21"
              }, [
                o("path", { d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" })
              ], -1)),
              B(" " + w(t(y)("legend.layer.controls.metadata")), 1)
            ], 10, He),
            o("a", {
              href: "javascript:;",
              class: C(["flex leading-snug items-center text-left w-auto", {
                disabled: !e.legendItem.layerControlAvailable(t(I).Settings) || !A("settings")
              }]),
              onClick: q,
              role: "button",
              "aria-label": t(y)("legend.layer.controls.settings")
            }, [
              c[6] || (c[6] = o("svg", {
                class: "setting-svg",
                viewBox: "0 0 23 21"
              }, [
                o("g", null, [
                  o("path", { d: "M 3,17L 3,19L 9,19L 9,17L 3,17 Z M 3,5L 3,7L 13,7L 13,5L 3,5 Z M 13,21L 13,19L 21,19L 21,17L 13,17L 13,15L 11,15L 11,21L 13,21 Z M 7,9L 7,11L 3,11L 3,13L 7,13L 7,15L 9,15L 9,9L 7,9 Z M 21,13L 21,11L 11,11L 11,13L 21,13 Z M 15,9L 17,9L 17,7L 21,7L 21,5L 17,5L 17,3L 15,3L 15,9 Z " })
                ])
              ], -1)),
              B(" " + w(t(y)("legend.layer.controls.settings")), 1)
            ], 10, Ae),
            o("a", {
              href: "javascript:;",
              class: C(["flex leading-snug items-center text-left w-auto", {
                disabled: !e.legendItem.layerControlAvailable(t(I).Datatable) || !A("grid")
              }]),
              onClick: P,
              role: "button",
              "aria-label": t(y)("legend.layer.controls.datatable")
            }, [
              c[7] || (c[7] = o("svg", {
                class: "setting-svg",
                viewBox: "0 0 23 21"
              }, [
                o("path", { d: "M 4.00002,3L 20,3C 21.1046,3 22,3.89543 22,5L 22,20C 22,21.1046 21.1046,22 20,22L 4.00001,22C 2.89544,22 2.00001,21.1046 2.00001,20L 2.00002,5C 2.00002,3.89543 2.89545,3 4.00002,3 Z M 4.00002,7L 4.00001,10L 8,10L 8,7.00001L 4.00002,7 Z M 10,7.00001L 9.99999,10L 14,10L 14,7.00001L 10,7.00001 Z M 20,10L 20,7L 16,7.00001L 16,10L 20,10 Z M 4.00002,12L 4.00002,15L 8,15L 8,12L 4.00002,12 Z M 4.00001,20L 8,20L 8,17L 4.00002,17L 4.00001,20 Z M 9.99999,12L 9.99999,15L 14,15L 14,12L 9.99999,12 Z M 9.99999,20L 14,20L 14,17L 9.99999,17L 9.99999,20 Z M 20,20L 20,17L 16,17L 16,20L 20,20 Z M 20,12L 16,12L 16,15L 20,15L 20,12 Z " })
              ], -1)),
              B(" " + w(t(y)("legend.layer.controls.datatable")), 1)
            ], 10, Be),
            o("a", {
              href: "javascript:;",
              class: C(["flex leading-snug items-center text-left w-auto", {
                disabled: !e.legendItem.layerControlAvailable(t(I).Symbology)
              }]),
              onClick: T,
              role: "button",
              "aria-label": t(y)("legend.layer.controls.symbology")
            }, [
              c[8] || (c[8] = o("svg", {
                class: "setting-svg",
                viewBox: "0 0 23 21"
              }, [
                o("path", { d: "M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" })
              ], -1)),
              B(" " + w(t(y)("legend.layer.controls.symbology")), 1)
            ], 10, $e),
            o("a", {
              href: "javascript:;",
              class: C(["flex leading-snug items-center text-left w-auto", {
                disabled: !e.legendItem.layerControlAvailable(t(I).BoundaryZoom)
              }]),
              onClick: H,
              role: "button",
              "aria-label": t(y)("legend.layer.controls.boundaryzoom")
            }, [
              c[9] || (c[9] = o("svg", {
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
              B(" " + w(t(y)("legend.layer.controls.boundaryzoom")), 1)
            ], 10, Ze),
            o("a", {
              href: "javascript:;",
              class: C(["flex leading-snug items-center text-left w-auto", {
                disabled: !e.legendItem.layerControlAvailable(t(I).Remove)
              }]),
              onClick: F,
              role: "button",
              "aria-label": t(y)("legend.layer.controls.remove")
            }, [
              c[10] || (c[10] = o("svg", {
                class: "setting-svg",
                viewBox: "0 0 23 21"
              }, [
                o("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" })
              ], -1)),
              B(" " + w(t(y)("legend.layer.controls.remove")), 1)
            ], 10, Ge),
            x((l(), a("a", {
              href: "javascript:;",
              class: C(["flex leading-snug items-center text-left w-auto", {
                disabled: !j.value
              }]),
              content: j.value ? "" : t(y)("legend.layer.controls.reloadDisabled"),
              onMouseover: c[0] || (c[0] = k((E) => Y(E.currentTarget), ["stop"])),
              onMouseout: c[1] || (c[1] = (E) => (
                //@ts-expect-error TODO: explain why this is needed or remove
                (i.value || E.currentTarget?._tippy?.hide(), b.value = !1)
              )),
              onClick: D,
              role: "button",
              "aria-label": t(y)("legend.layer.controls.reload")
            }, [
              c[11] || (c[11] = o("svg", {
                class: "setting-svg",
                viewBox: "0 0 24 24"
              }, [
                o("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })
              ], -1)),
              B(" " + w(t(y)("legend.layer.controls.reload")), 1)
            ], 42, Ue)), [
              [R, {
                placement: "top-start",
                trigger: "manual focus",
                aria: "describedby"
              }]
            ])
          ]),
          _: 1
        }, 8, ["tooltip"])
      ], 32);
    };
  }
}), Pe = /* @__PURE__ */ ae(Re, [["__scopeId", "data-v-9229eed2"]]), De = { key: 0 }, je = {
  key: 0,
  class: "relative left-3"
}, Oe = ["innerHTML"], Ne = ["src"], qe = {
  key: 1,
  class: "symbologyIcon w-32 h-32"
}, Fe = ["innerHTML"], We = ["src"], Ke = {
  key: 1,
  class: "h-32 w-32 inline-flex justify-center items-center"
}, Qe = /* @__PURE__ */ Q({
  __name: "symbology-stack",
  props: {
    visible: { type: Boolean, required: !0 },
    legendItem: { type: Object, required: !0 }
  },
  setup(e) {
    const y = e, s = V([]);
    return ce(() => {
      y.legendItem.loadPromise.then(() => {
        y.legendItem.layerUid !== void 0 && Promise.all(M(y.legendItem.symbologyStack).map((m) => m.drawPromise)).then(() => {
          s.value = M(y.legendItem).symbologyStack;
        });
      });
    }), (m, b) => e.visible ? (l(), a("div", Ke, b[0] || (b[0] = [
      o("svg", {
        class: "fill-current w-16 h-16",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 352 512"
      }, [
        o("path", { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" })
      ], -1)
    ]))) : (l(), a("div", De, [
      s.value.length > 1 ? (l(), a("div", je, [
        (l(!0), a(le, null, ne(s.value.slice(0, 3).reverse(), ($, i) => (l(), a("div", {
          class: C(["absolute", [i == 0 ? "symbol-0" : i == 1 ? "left-3 symbol-1" : "left-6 symbol-2"]]),
          style: pe({ "z-index": 3 - i }),
          key: i
        }, [
          s.value[i].svgcode ? (l(), a("span", {
            key: 0,
            class: "symbologyIcon w-28 h-28",
            innerHTML: s.value[i].svgcode
          }, null, 8, Oe)) : s.value[i].imgUrl ? (l(), a("img", {
            key: 1,
            class: "symbologyIcon w-28 h-28",
            src: s.value[i].imgUrl
          }, null, 8, Ne)) : v("", !0)
        ], 6))), 128))
      ])) : s.value.length > 0 ? (l(), a("div", qe, [
        s.value[0].svgcode ? (l(), a("span", {
          key: 0,
          innerHTML: s.value[0].svgcode
        }, null, 8, Fe)) : s.value[0].imgUrl ? (l(), a("img", {
          key: 1,
          class: "symbologyIcon w-full h-full",
          src: s.value[0].imgUrl
        }, null, 8, We)) : v("", !0)
      ])) : v("", !0)
    ]));
  }
}), Xe = /* @__PURE__ */ ae(Qe, [["__scopeId", "data-v-34dfeccd"]]), Ye = { class: "relative" }, Je = ["content"], _e = {
  key: 0,
  class: "flex p-5 mr-[13px]"
}, et = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "black",
  width: "24px",
  height: "24px"
}, tt = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "black",
  width: "24px",
  height: "24px"
}, lt = ["disabled", "content", "aria-label"], nt = ["src"], at = { class: "h-auto break-words text-ellipsis" }, ot = {
  key: 4,
  class: "flex-1 pointer-events-none p-5"
}, it = {
  key: 5,
  class: "flex-1"
}, st = {
  key: 0,
  class: "text-lg font-bold"
}, rt = { key: 1 }, dt = { key: 2 }, ct = ["src"], gt = ["innerHTML"], mt = {
  key: 6,
  class: "relative"
}, yt = ["content", "aria-label"], ut = {
  key: 8,
  class: "relative"
}, vt = ["content", "aria-label"], It = { class: "flex p-5" }, bt = {
  key: 0,
  class: "fill-current w-18 h-18",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 352 512"
}, ft = {
  key: 1,
  class: "inline-block fill-current w-18 h-18 mr-1",
  viewBox: "0 1 23 22"
}, ht = ["content"], Lt = ["content"], pt = {
  key: 11,
  class: "relative top-1"
}, kt = ["content"], xt = {
  key: 0,
  class: "h-3 w-full absolute bottom-0"
}, wt = {
  key: 0,
  class: "symbology-stack default-focus-style"
}, Ct = { key: 0 }, Mt = {
  key: 0,
  class: "m-5"
}, St = {
  key: 0,
  class: "items-center grid-cols-1"
}, Tt = {
  key: 0,
  class: "symbologyIcon w-full p-5"
}, zt = ["src"], Vt = ["innerHTML"], Et = {
  key: 2,
  class: "flex-1 p-5 bg-black-75 text-white"
}, Ht = {
  key: 1,
  class: "flex items-center"
}, At = {
  key: 0,
  class: "symbologyIcon"
}, Bt = ["src"], $t = {
  key: 1,
  class: "symbologyIcon"
}, Zt = ["innerHTML"], Gt = { class: "flex-1 ml-15" }, Ut = { key: 1 }, Rt = { class: "flex p-5 ml-48" }, Pt = {
  key: 0,
  class: "relative animate-spin spinner h-20 w-20 mr-10 pt-2"
}, Dt = { class: "flex-1 text-gray-500" }, jt = {
  key: 1,
  class: "legend-group border-l-2 ml-4 pl-4"
}, Ot = /* @__PURE__ */ Q({
  __name: "item",
  props: {
    legendItem: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const y = Me(), s = ye(), { t: m } = oe(), b = ge("iApi"), $ = V(), i = e, r = Se(), T = r.multilineItems, P = (i.legendItem instanceof u && i.legendItem.maxLines) ?? r.maxLines, q = V(s.mobileView), X = U(() => y.layerConfigs), H = V([]), F = V(!1), D = V(!1), j = U(() => i.legendItem instanceof u ? M(i.legendItem.layer)?.layerType : ""), Y = U(() => i.legendItem instanceof u && M(i.legendItem.layer)?.canModifyLayer), A = U(() => {
      if (i.legendItem instanceof u) {
        const d = M(i.legendItem.layer);
        return d ? d.canReload : !0;
      } else
        return !1;
    }), z = U(() => b.animate), c = U(() => i.legendItem.children.length > 0 || // TODO: Determine why Vue reactivity isn't picking updates to the children property of the parent.
    // isGroup is being called on the parent before the children are mapped in legend.ts. After they're mapped, isGroup isn't called again.
    i.legendItem instanceof u && M(i.legendItem.layer)?.sublayers.length > 0), L = (d) => d === G.Expand || d === G.Visibility ? i.legendItem.controlAvailable(d) : i.legendItem.layerControlAvailable(d), R = (d) => Ve(d), E = () => {
      i.legendItem.children.length === 0 || !L(G.Expand) || (i.legendItem.toggleExpanded(), b.updateAlert(m(`legend.alert.group${i.legendItem.expanded ? "Expanded" : "Collapsed"}`)));
    }, J = () => {
      if (L(I.Symbology)) {
        const d = i.legendItem.toggleSymbology();
        b.updateAlert(m(`legend.alert.symbology${d ? "Expanded" : "Collapsed"}`));
      }
    }, ue = () => {
      L(I.Datatable) && W() && b.event.emit(K.GRID_TOGGLE, i.legendItem.layer);
    }, ve = (d) => {
      const n = document.createElement("span");
      n.innerHTML = d.svgcode;
      const h = n.firstElementChild;
      return h?.classList.add("max-w-full"), h?.classList.add("h-full"), h?.setAttribute("height", d.imgHeight), h?.setAttribute("width", d.imgWidth), n.outerHTML;
    }, W = () => {
      try {
        return b.fixture.exists("grid");
      } catch {
        return !1;
      }
    }, Ie = () => {
      i.legendItem.reload(), setTimeout(() => {
        const d = i.legendItem;
        let n = !0;
        if (d.layer)
          M(d.layer).reload(), n = !1;
        else if (d.isSublayer && d.parentLayerId) {
          const h = b.geo.layer.getLayer(d.parentLayerId);
          h && (M(h).reload(), n = !1);
        }
        if (n) {
          const h = d.isSublayer ? d.parentLayerId : d.layerId, p = X.value.find((S) => S.id === h);
          p !== void 0 && be(p);
        }
        i.legendItem.loadPromise.catch(() => {
        });
      }, 400);
    }, be = async (d) => {
      try {
        const n = b.geo.layer.getLayer(d.id);
        if (n) {
          const [h] = await ze(M(n).reload());
          if (h)
            throw new Error();
          return n;
        } else {
          const h = b.geo.layer.createLayer(d);
          return await b.geo.map.addLayer(h).catch(() => {
            throw new Error();
          }), h;
        }
      } catch {
        return;
      }
    }, fe = () => {
      const d = M(i.legendItem);
      let n = 0;
      if (d.type === f.Error) {
        i.legendItem.toggleHidden(!0);
        const h = setInterval(() => {
          const p = d.layer;
          (p && (p.layerExists || p.initiationState === ee.NEW || p.initiationState === ee.TERMINATING || p.initiationState === ee.TERMINATED) || n > 1200) && (clearInterval(h), p && b.geo.map.removeLayer(p), y.removeLayerConfig(d.layerId), b.fixture.get("legend")?.removeLayerItem(d.layerId)), n++;
        }, 250);
      } else {
        i.legendItem.error();
        const h = setInterval(() => {
          const p = d.parentLayerId || d.layerId, S = b.geo.layer.getLayer(p);
          S && (clearInterval(h), S.cancelLoad(), (b.fixture.get("legend")?.getLayerBoundItems(S) || []).forEach((g) => g.error())), n > 1200 && clearInterval(h), n++;
        }, 50);
      }
    }, ie = () => {
      i.legendItem.loadPromise.then(() => {
        if (H.value = [], !i.legendItem.layer) {
          console.warn("Attempted to mount legend item component with undefined layer");
          return;
        }
        Promise.all(
          M(i.legendItem.symbologyStack.map((d) => d.drawPromise))
        ).then(() => {
          H.value = i.legendItem.symbologyStack, F.value = !0;
        });
      }).catch(() => {
      });
    }, he = (d) => {
      D.value = !0, setTimeout(() => {
        D.value && (q.value || d._tippy?.show());
      }, 300);
    };
    return i.legendItem instanceof u && (ie(), ke(
      () => i.legendItem.symbologyStack,
      () => {
        ie();
      }
    )), (d, n) => {
      const h = me("item", !0), p = N("tippy"), S = N("truncate"), _ = N("focus-item");
      return e.legendItem.hidden ? v("", !0) : (l(), a("div", {
        key: `${e.legendItem.uid}`,
        ref_key: "el",
        ref: $
      }, [
        o("div", Ye, [
          x((l(), a("div", {
            class: C(["flex items-center hover:bg-gray-200 default-focus-style !p-5", [
              e.legendItem.type === t(f).Item ? "loaded-item" : e.legendItem.type === t(f).Error ? "non-loaded-item bg-red-200" : "non-loaded-item",
              c.value && L(t(G).Expand) || !c.value && e.legendItem instanceof t(u) && L(t(I).Datatable) && W() && e.legendItem.type === t(f).Item ? "cursor-pointer" : "cursor-default",
              t(T) ? "multilined" : "singlelined"
            ]]),
            onMouseover: n[9] || (n[9] = k((g) => he(g.currentTarget), ["stop"])),
            onMouseout: n[10] || (n[10] = (g) => (
              //@ts-expect-error TODO: explain why this is needed or remove
              (q.value || g.currentTarget?._tippy?.hide(), D.value = !1)
            )),
            onClick: n[11] || (n[11] = () => {
              !c.value && e.legendItem instanceof t(u) && L(t(I).Datatable) && W() && e.legendItem.type === t(f).Item ? ue() : c.value && E();
            }),
            content: c.value && L(t(G).Expand) ? t(m)(e.legendItem.expanded ? "legend.group.collapse" : "legend.group.expand") : e.legendItem instanceof t(u) && e.legendItem.type === t(f).Item && L(t(I).Datatable) && W() ? t(m)("legend.layer.data") : "",
            "truncate-trigger": ""
          }, [
            e.legendItem.type !== t(f).Item ? (l(), a("div", _e, [
              e.legendItem.type === t(f).Placeholder ? (l(), a("svg", et, n[12] || (n[12] = [
                de('<path d="M0 0h24v24H0V0z" fill="none" data-v-999de570></path><path d="M0 0h24v24H0V0z" fill="none" data-v-999de570></path><circle cx="15.5" cy="9.5" r="1.5" data-v-999de570></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-999de570></circle><circle cx="15.5" cy="9.5" r="1.5" data-v-999de570></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-999de570></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5z" data-v-999de570></path>', 7)
              ]))) : (l(), a("svg", tt, n[13] || (n[13] = [
                de('<path d="M0 0h24v24H0V0z" fill="none" data-v-999de570></path><path d="M0 0h24v24H0V0z" fill="none" data-v-999de570></path><circle cx="15.5" cy="9.5" r="1.5" data-v-999de570></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-999de570></circle><circle cx="15.5" cy="9.5" r="1.5" data-v-999de570></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-999de570></circle><path d="M 20,12C 20,7.6 16.4,4 12,4C 7.6,4 4,7.6 4,12C 4,16.4 7.6,20 12,20C 16.4,20 20,16.4 20,12 Z M 22,12C 22,17.5 17.5,22 12,22C 6.5,22 2,17.5 2,12C 2,6.5 6.5,2.00001 12,2.00001C 17.5,2.00001 22,6.5 22,12 Z M 15.5,8C 16.3,8 17,8.7 17,9.5C 17,10.3 16.3,11 15.5,11C 14.7,11 14,10.3 14,9.5C 14,8.7 14.7,8 15.5,8 Z M 10,9.5C 10,10.3 9.3,11 8.5,11C 7.7,11 7,10.3 7,9.5C 7,8.7 7.7,8 8.5,8C 9.3,8 10,8.7 10,9.5 Z M 12,14C 13.7524,14 15.2943,14.7212 16.1871,15.8129L 14.7697,17.2302C 14.3175,16.5078 13.2477,16 12,16C 10.7523,16 9.68254,16.5078 9.23024,17.2302L 7.81291,15.8129C 8.7057,14.7212 10.2476,14 12,14 Z" data-v-999de570></path>', 7)
              ])))
            ])) : v("", !0),
            e.legendItem.type === t(f).Item && e.legendItem instanceof t(u) && e.legendItem.layer.legend.length > 0 ? (l(), a("div", {
              key: 1,
              class: "relative w-32 h-32 mr-15",
              onMouseover: n[0] || (n[0] = k(() => {
              }, ["stop"]))
            }, [
              x((l(), a("button", {
                type: "button",
                onClick: k(J, ["stop"]),
                class: C([L(t(I).Symbology) ? "cursor-pointer" : "cursor-default"]),
                disabled: !L(t(I).Symbology),
                content: e.legendItem instanceof t(u) && e.legendItem.symbologyExpanded ? t(m)("legend.symbology.hide") : t(m)("legend.symbology.expand"),
                "aria-label": e.legendItem instanceof t(u) && e.legendItem.symbologyExpanded ? t(m)("legend.symbology.hide") : t(m)("legend.symbology.expand")
              }, [
                e.legendItem.coverIcon ? (l(), a("img", {
                  key: 1,
                  class: C([{
                    "pointer-events-none": !L(t(I).Symbology)
                  }, "w-32 h-32 hover:scale-105"]),
                  src: e.legendItem.coverIcon,
                  alt: "Cover icon not found :("
                }, null, 10, nt)) : (l(), Z(Xe, {
                  key: 0,
                  class: C([{
                    "pointer-events-none": !L(t(I).Symbology)
                  }, "w-32 h-32"]),
                  visible: e.legendItem instanceof t(u) && e.legendItem.symbologyExpanded,
                  legendItem: e.legendItem
                }, null, 8, ["class", "visible", "legendItem"]))
              ], 10, lt)), [
                [p, {
                  placement: "top-start"
                }]
              ])
            ], 32)) : v("", !0),
            c.value && L(t(G).Expand) ? (l(), a("div", {
              key: 2,
              class: C(["expand-toggle p-8 pointer-events-none", { "rotate-180": e.legendItem.expanded }])
            }, n[14] || (n[14] = [
              o("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                height: "18",
                viewBox: "0 0 24 24",
                width: "18"
              }, [
                o("path", { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" })
              ], -1)
            ]), 2)) : v("", !0),
            e.legendItem instanceof t(u) && t(T) ? x((l(), a("div", {
              key: 3,
              class: C(["flex-1 pointer-events-none m-5", `line-clamp-${t(P)}`])
            }, [
              o("span", at, w(e.legendItem.name ?? (e.legendItem?.layer?.name ? e.legendItem.layer?.name : e.legendItem.layerId)), 1)
            ], 2)), [
              [S, {
                externalTrigger: !0,
                noTruncateClass: !0
              }]
            ]) : e.legendItem instanceof t(u) ? x((l(), a("div", ot, [
              o("span", null, w(e.legendItem.name ?? (!e.legendItem.layer || e.legendItem?.layer?.name === "" ? e.legendItem.layerId : e.legendItem.layer?.name)), 1)
            ])), [
              [S, { externalTrigger: !0 }]
            ]) : e.legendItem instanceof t(Te) ? (l(), a("div", it, [
              e.legendItem.infoType === t(O).Title && e.legendItem.content ? (l(), a("h3", st, w(e.legendItem.content), 1)) : e.legendItem.infoType === t(O).Title ? (l(), a("h3", rt, w(e.legendItem.name), 1)) : e.legendItem.infoType === t(O).Text ? (l(), a("p", dt, w(e.legendItem.content), 1)) : e.legendItem.infoType === t(O).Image ? (l(), a("img", {
                key: 3,
                src: e.legendItem.content,
                alt: "InfoType image not found :("
              }, null, 8, ct)) : e.legendItem.infoType === t(O).Markdown ? (l(), a("div", {
                key: 4,
                class: "ramp-markdown",
                innerHTML: R(e.legendItem.content)
              }, null, 8, gt)) : (l(), Z(xe(`${e.legendItem.uid}-info-section`), { key: 5 }))
            ])) : v("", !0),
            e.legendItem.type === t(f).Error && A.value ? (l(), a("div", mt, [
              x((l(), a("button", {
                type: "button",
                class: "text-gray-500 hover:text-black",
                content: t(m)("legend.layer.controls.reload"),
                onMouseover: n[1] || (n[1] = k(() => {
                }, ["stop"])),
                onClick: k(Ie, ["stop"]),
                "aria-label": t(m)("legend.layer.controls.reload")
              }, n[15] || (n[15] = [
                o("div", { class: "flex p-8" }, [
                  o("svg", {
                    class: "inline-block fill-current w-18 h-18",
                    viewBox: "0 0 24 24"
                  }, [
                    o("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })
                  ])
                ], -1)
              ]), 40, yt)), [
                [p, {
                  placement: "top-start"
                }]
              ])
            ])) : v("", !0),
            (e.legendItem.type === t(f).Item || e.legendItem.type === t(f).Placeholder && t(T)) && e.legendItem instanceof t(u) ? (l(), Z(Pe, {
              key: 7,
              class: C({
                invisible: e.legendItem.type === t(f).Placeholder
              }),
              legendItem: e.legendItem
            }, null, 8, ["class", "legendItem"])) : v("", !0),
            e.legendItem.type !== t(f).Item && e.legendItem instanceof t(u) ? (l(), a("div", ut, [
              x((l(), a("button", {
                type: "button",
                class: "text-gray-500 hover:text-black",
                content: e.legendItem.type === t(f).Error ? t(m)("legend.layer.controls.remove") : t(m)("legend.layer.controls.cancel"),
                onMouseover: n[2] || (n[2] = k(() => {
                }, ["stop"])),
                onClick: k(fe, ["stop"]),
                "aria-label": e.legendItem.type === t(f).Error ? t(m)("legend.layer.controls.remove") : t(m)("legend.layer.controls.cancel")
              }, [
                o("div", It, [
                  e.legendItem.type === t(f).Placeholder ? (l(), a("svg", bt, n[16] || (n[16] = [
                    o("path", { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, null, -1)
                  ]))) : (l(), a("svg", ft, n[17] || (n[17] = [
                    o("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" }, null, -1)
                  ])))
                ])
              ], 40, vt)), [
                [p, {
                  placement: "top-start"
                }]
              ])
            ])) : v("", !0),
            e.legendItem.type === t(f).Item && e.legendItem instanceof t(u) && e.legendItem.layerOffscale ? x((l(), a("div", {
              key: 9,
              class: "relative p-4 cursor-default",
              content: t(m)("legend.layer.offscale"),
              onMouseover: n[3] || (n[3] = k(() => {
              }, ["stop"])),
              onClick: n[4] || (n[4] = k(() => {
              }, ["stop"])),
              "focus-icon": ""
            }, n[18] || (n[18] = [
              o("svg", {
                class: "inline-block fill-gray-400 w-18 h-18",
                viewBox: "0 0 24 24"
              }, [
                o("path", { d: "M19.81 14.99l1.19-.92-1.43-1.43-1.19.92 1.43 1.43zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88 2.4-1.88zM3.27 1L2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73 3.27 1z" })
              ], -1)
            ]), 40, ht)), [
              [p, {
                placement: "top-start"
              }]
            ]) : v("", !0),
            e.legendItem.type === t(f).Item && e.legendItem instanceof t(u) && !e.legendItem.layer?.mapLayer ? x((l(), a("div", {
              key: 10,
              class: "relative p-4 cursor-default",
              content: t(m)("legend.layer.data.only"),
              onMouseover: n[5] || (n[5] = k(() => {
              }, ["stop"])),
              onClick: n[6] || (n[6] = k(() => {
              }, ["stop"])),
              "focus-icon": ""
            }, n[19] || (n[19] = [
              o("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                height: "18",
                viewBox: "0 -960 960 960",
                width: "18",
                class: "inline-block fill-gray-400"
              }, [
                o("path", { d: "m776.109-63.565-73.435-69.196q-51.302 32.573-106.091 59.145-54.788 26.572-116.255 26.572-88.94 0-167.803-33.893-78.862-33.894-138.052-93.239-59.19-59.346-93.19-138.205-34-78.86-34-167.619 0-64.607 19.12-125.521Q85.521-666.435 120-719.674l-50.848-50.848 68.761-68.761L844.87-132.326l-68.761 68.76Zm-345.392-92.653v-72.5l-52.25-52.086v-50.009l-219.01-218.752q-3 17.015-5 34.031-2 17.015-2 35.136 0 124.449 78.826 214.674 78.826 90.224 199.434 109.506Zm410.392-85.412-76.739-77.74q21.288-37.275 32.35-77.847 11.062-40.572 11.062-84.059 0-95.003-56.304-169.853-56.304-74.849-145.391-108.893v.522l-174.413 76.087v31.348L241.87-842.109q52.483-34.989 113.387-52.918 60.903-17.93 125.159-17.93 89.709 0 168.127 33.869 78.418 33.868 137.435 93.28 59.016 59.413 92.997 137.683 33.982 78.269 33.982 167.993 0 64.203-18.43 125.111-18.429 60.907-53.418 113.391Z" })
              ], -1)
            ]), 40, Lt)), [
              [p, {
                placement: "top-end"
              }]
            ]) : v("", !0),
            e.legendItem.type === t(f).Item && e.legendItem instanceof t(u) && e.legendItem.layerOffscale ? (l(), a("div", pt, [
              x((l(), a("button", {
                type: "button",
                class: "p-4",
                content: t(m)("legend.layer.zoomToVisible"),
                onMouseover: n[7] || (n[7] = k(() => {
                }, ["stop"])),
                onClick: n[8] || (n[8] = k((g) => e.legendItem.layer.zoomToVisibleScale(), ["stop"]))
              }, n[20] || (n[20] = [
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
              ]), 40, kt)), [
                [p, {
                  placement: "top-start"
                }]
              ])
            ])) : e.legendItem.type === t(f).Item && L(t(G).Visibility) ? (l(), Z(te, {
              key: 12,
              checked: e.legendItem.visibility,
              value: e.legendItem,
              isRadio: e.legendItem.parent && e.legendItem.parent.exclusive,
              legendItem: e.legendItem,
              disabled: e.legendItem instanceof t(u) && !e.legendItem.layerControlAvailable(t(I).Visibility),
              label: c.value ? "Group" : "Layer"
            }, null, 8, ["checked", "value", "isRadio", "legendItem", "disabled", "label"])) : v("", !0)
          ], 42, Je)), [
            [_, "show-truncate"],
            [p, {
              placement: "top-start",
              trigger: "manual focus",
              aria: "describedby"
            }]
          ]),
          e.legendItem.type === t(f).Placeholder || e.legendItem instanceof t(u) && e.legendItem.layerRedrawing && e.legendItem.visibility ? (l(), a("div", xt, n[21] || (n[21] = [
            o("div", { class: "progress-line" }, null, -1)
          ]))) : v("", !0)
        ]),
        e.legendItem instanceof t(u) && e.legendItem.symbologyExpanded ? x((l(), a("div", wt, [
          H.value.length > 0 ? (l(), a("div", Ct, [
            e.legendItem instanceof t(u) && e.legendItem.description ? (l(), a("p", Mt, w(e.legendItem.description), 1)) : v("", !0),
            (l(!0), a(le, null, ne(H.value, (g) => (l(), a("div", {
              class: "m-5",
              key: g.uid
            }, [
              g.imgUrl && e.legendItem.symbologyRenderStyle === "images" || !g.imgUrl && j.value === "ogc-wms" ? (l(), a("div", St, [
                g.imgUrl ? (l(), a("div", Tt, [
                  o("img", {
                    class: "max-w-full",
                    src: g.imgUrl
                  }, null, 8, zt)
                ])) : g.imgHeight ? (l(), a("div", {
                  key: 1,
                  class: "symbologyIcon w-full p-5",
                  innerHTML: ve(g)
                }, null, 8, Vt)) : v("", !0),
                g.label ? x((l(), a("div", Et, [
                  o("span", null, w(g.label), 1),
                  !g.imgUrl && H.value.length > 1 || g.imgUrl && g.definitionClause ? (l(), Z(te, {
                    key: 0,
                    class: "float-right",
                    value: g,
                    legendItem: e.legendItem,
                    checked: g.visibility,
                    disabled: !L(t(I).Visibility),
                    label: "Symbol"
                  }, null, 8, ["value", "legendItem", "checked", "disabled"])) : v("", !0)
                ])), [
                  [S]
                ]) : v("", !0)
              ])) : (l(), a("div", Ht, [
                g.imgUrl ? (l(), a("div", At, [
                  o("img", {
                    class: "w-32 h-32",
                    src: g.imgUrl
                  }, null, 8, Bt)
                ])) : g.svgcode ? (l(), a("div", $t, [
                  o("span", {
                    innerHTML: g.svgcode
                  }, null, 8, Zt)
                ])) : v("", !0),
                x((l(), a("div", Gt, [
                  B(w(g.label), 1)
                ])), [
                  [S]
                ]),
                Y.value && e.legendItem.layer.supportsFeatures && (!g.imgUrl && H.value.length > 1 || g.imgUrl && g.definitionClause) ? (l(), Z(te, {
                  key: 2,
                  value: g,
                  legendItem: e.legendItem,
                  checked: g.visibility,
                  disabled: !L(t(I).Visibility),
                  label: "Symbol"
                }, null, 8, ["value", "legendItem", "checked", "disabled"])) : v("", !0)
              ]))
            ]))), 128))
          ])) : v("", !0),
          F.value ? v("", !0) : (l(), a("div", Ut, [
            x((l(), a("div", Rt, [
              z.value ? (l(), a("div", Pt)) : v("", !0),
              x((l(), a("div", Dt, [
                o("span", null, w(t(m)("legend.symbology.loading")), 1)
              ])), [
                [S]
              ])
            ])), [
              [S]
            ])
          ]))
        ])), [
          [_]
        ]) : v("", !0),
        e.legendItem.expanded ? (l(), a("div", jt, [
          (l(!0), a(le, null, ne(e.legendItem.children, (g) => (l(), Z(h, {
            legendItem: g,
            key: g.uid
          }, null, 8, ["legendItem"]))), 128))
        ])) : v("", !0)
      ]));
    };
  }
}), Cl = /* @__PURE__ */ ae(Ot, [["__scopeId", "data-v-999de570"]]);
export {
  Cl as default
};
