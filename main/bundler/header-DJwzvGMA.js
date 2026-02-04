import { defineComponent as k, inject as _, computed as E, resolveComponent as A, resolveDirective as I, createElementBlock as c, openBlock as v, createElementVNode as e, withDirectives as n, unref as o, vShow as a, createVNode as f, withCtx as p, toDisplayString as d } from "vue";
import { p as M, G as w, _ as R } from "./main-6dWPqJr6.js";
import "pinia";
import { useI18n as j } from "vue-i18n";
import "screenfull";
import "lodash-es";
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
import "@arcgis/map-components/components/arcgis-swipe";
import "deepmerge";
import "@terraformer/spatial";
import "proj4";
import "throttle-debounce";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
const B = { class: "relative legend-header flex align-middle" }, G = ["content", "aria-label"], L = ["content", "aria-label"], D = /* @__PURE__ */ k({
  __name: "header",
  setup(H) {
    const x = M(), { t: r } = j(), i = _("iApi"), l = E(() => i.fixture.get("legend")), b = () => {
      i.event.emit(w.WIZARD_TOGGLE);
    }, y = () => {
      try {
        return i.fixture.exists("wizard");
      } catch {
        return !1;
      }
    }, C = () => {
      i.event.emit(w.REORDER_TOGGLE);
    }, z = () => {
      try {
        return i.fixture.exists("layer-reorder");
      } catch {
        return !1;
      }
    }, s = (h) => x.headerControls.includes(h);
    return (h, t) => {
      const u = A("dropdown-menu"), g = I("tippy");
      return v(), c("div", B, [
        e("div", null, [
          n((v(), c("button", {
            type: "button",
            onClick: b,
            class: "relative mr-auto text-gray-500 hover:text-black",
            content: o(r)("legend.header.addlayer"),
            "aria-label": o(r)("legend.header.addlayer")
          }, t[4] || (t[4] = [
            e("div", { class: "p-8" }, [
              e("svg", {
                class: "fill-current w-18 h-18 flip",
                viewBox: "0 0 24 24"
              }, [
                e("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })
              ])
            ], -1)
          ]), 8, G)), [
            [a, y() && s("wizard")],
            [g, { placement: "right" }]
          ])
        ]),
        e("div", null, [
          n((v(), c("button", {
            type: "button",
            onClick: C,
            class: "relative mr-auto text-gray-500 hover:text-black flex justify-center items-center",
            content: o(r)("legend.header.reorderlayers"),
            "aria-label": o(r)("legend.header.reorderlayers")
          }, t[5] || (t[5] = [
            e("div", { class: "p-8" }, [
              e("svg", {
                class: "fill-current w-18 h-18 flip",
                viewBox: "0 0 24 24"
              }, [
                e("path", {
                  d: "M0 0h24v24H0z",
                  fill: "none"
                }),
                e("path", { d: "M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z" })
              ])
            ], -1)
          ]), 8, L)), [
            [a, z() && s("layerReorder")],
            [g, { placement: "right" }]
          ])
        ]),
        t[8] || (t[8] = e("span", { class: "flex-1" }, null, -1)),
        n(f(u, {
          class: "relative",
          position: "left-start",
          tooltip: o(r)("legend.header.groups"),
          tooltipPlacement: "left-start",
          tooltipPlacementAlt: "bottom-end"
        }, {
          header: p(() => t[6] || (t[6] = [
            e("div", { class: "p-8" }, [
              e("svg", {
                class: "fill-current w-18 h-18",
                viewBox: "0 0 24 24"
              }, [
                e("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" })
              ])
            ], -1)
          ])),
          default: p(() => [
            e("a", {
              href: "javascript:;",
              class: "flex leading-snug items-center overflow-hidden whitespace-nowrap",
              onClick: t[0] || (t[0] = (m) => l.value.expandItems(!0))
            }, d(o(r)("legend.header.groups.expand")), 1),
            e("a", {
              href: "javascript:;",
              class: "flex leading-snug items-center overflow-hidden whitespace-nowrap",
              onClick: t[1] || (t[1] = (m) => l.value.expandItems(!1))
            }, d(o(r)("legend.header.groups.collapse")), 1)
          ]),
          _: 1
        }, 8, ["tooltip"]), [
          [a, s("groupToggle")]
        ]),
        n(f(u, {
          class: "relative",
          position: "left-start",
          tooltip: o(r)("legend.header.visible"),
          tooltipPlacement: "left-start",
          tooltipPlacementAlt: "bottom-end"
        }, {
          header: p(() => t[7] || (t[7] = [
            e("div", { class: "flex p-8" }, [
              e("svg", {
                class: "fill-current w-18 h-18",
                viewBox: "0 0 24 24"
              }, [
                e("path", { d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" })
              ])
            ], -1)
          ])),
          default: p(() => [
            e("a", {
              href: "javascript:;",
              class: "flex leading-snug items-center overflow-hidden whitespace-nowrap",
              onClick: t[2] || (t[2] = (m) => l.value.showItems(!0))
            }, d(o(r)("legend.header.visible.show")), 1),
            e("a", {
              href: "javascript:;",
              class: "flex leading-snug items-center overflow-hidden whitespace-nowrap",
              onClick: t[3] || (t[3] = (m) => l.value.showItems(!1))
            }, d(o(r)("legend.header.visible.hide")), 1)
          ]),
          _: 1
        }, 8, ["tooltip"]), [
          [a, s("visibilityToggle")]
        ])
      ]);
    };
  }
}), xe = /* @__PURE__ */ R(D, [["__scopeId", "data-v-9e355db4"]]);
export {
  xe as default
};
