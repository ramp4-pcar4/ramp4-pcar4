import { defineComponent as k, inject as _, computed as E, resolveComponent as A, resolveDirective as I, openBlock as v, createElementBlock as h, createElementVNode as e, withDirectives as a, unref as o, vShow as p, createVNode as f, withCtx as d, toDisplayString as m } from "vue";
import { n as M, G as w, _ as R } from "./main-lQo-1M1E.js";
import "pinia";
import { useI18n as j } from "vue-i18n";
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
import "await-to-js";
import "svg.js";
const B = { class: "relative legend-header flex align-middle" }, G = ["content", "aria-label"], L = ["content", "aria-label"], D = /* @__PURE__ */ k({
  __name: "header",
  setup(H) {
    const x = M(), { t: r } = j(), i = _("iApi"), l = E(() => i.fixture.get("legend")), y = () => {
      i.event.emit(w.WIZARD_TOGGLE);
    }, b = () => {
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
    }, s = (n) => x.headerControls.includes(n);
    return (n, t) => {
      const u = A("dropdown-menu"), g = I("tippy");
      return v(), h("div", B, [
        e("div", null, [
          a((v(), h("button", {
            type: "button",
            onClick: y,
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
            [p, b() && s("wizard")],
            [g, { placement: "right" }]
          ])
        ]),
        e("div", null, [
          a((v(), h("button", {
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
            [p, z() && s("layerReorder")],
            [g, { placement: "right" }]
          ])
        ]),
        t[8] || (t[8] = e("span", { class: "flex-1" }, null, -1)),
        a(f(u, {
          class: "relative",
          position: "left-start",
          tooltip: o(r)("legend.header.groups"),
          tooltipPlacement: "left-start",
          tooltipPlacementAlt: "bottom-end"
        }, {
          header: d(() => t[6] || (t[6] = [
            e("div", { class: "p-8" }, [
              e("svg", {
                class: "fill-current w-18 h-18",
                viewBox: "0 0 24 24"
              }, [
                e("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" })
              ])
            ], -1)
          ])),
          default: d(() => [
            e("a", {
              href: "javascript:;",
              class: "flex leading-snug items-center overflow-hidden whitespace-nowrap",
              onClick: t[0] || (t[0] = (c) => l.value.expandItems(!0))
            }, m(o(r)("legend.header.groups.expand")), 1),
            e("a", {
              href: "javascript:;",
              class: "flex leading-snug items-center overflow-hidden whitespace-nowrap",
              onClick: t[1] || (t[1] = (c) => l.value.expandItems(!1))
            }, m(o(r)("legend.header.groups.collapse")), 1)
          ]),
          _: 1
        }, 8, ["tooltip"]), [
          [p, s("groupToggle")]
        ]),
        a(f(u, {
          class: "relative",
          position: "left-start",
          tooltip: o(r)("legend.header.visible"),
          tooltipPlacement: "left-start",
          tooltipPlacementAlt: "bottom-end"
        }, {
          header: d(() => t[7] || (t[7] = [
            e("div", { class: "flex p-8" }, [
              e("svg", {
                class: "fill-current w-18 h-18",
                viewBox: "0 0 24 24"
              }, [
                e("path", { d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" })
              ])
            ], -1)
          ])),
          default: d(() => [
            e("a", {
              href: "javascript:;",
              class: "flex leading-snug items-center overflow-hidden whitespace-nowrap",
              onClick: t[2] || (t[2] = (c) => l.value.showItems(!0))
            }, m(o(r)("legend.header.visible.show")), 1),
            e("a", {
              href: "javascript:;",
              class: "flex leading-snug items-center overflow-hidden whitespace-nowrap",
              onClick: t[3] || (t[3] = (c) => l.value.showItems(!1))
            }, m(o(r)("legend.header.visible.hide")), 1)
          ]),
          _: 1
        }, 8, ["tooltip"]), [
          [p, s("visibilityToggle")]
        ])
      ]);
    };
  }
}), fe = /* @__PURE__ */ R(D, [["__scopeId", "data-v-e8031c30"]]);
export {
  fe as default
};
