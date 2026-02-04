import { defineComponent as w, inject as C, resolveDirective as l, createElementBlock as n, openBlock as i, withDirectives as s, unref as _, normalizeClass as f, createElementVNode as o, createCommentVNode as g, toDisplayString as x, withKeys as T, withModifiers as v, vShow as z, computed as I, ref as j, onMounted as A, resolveComponent as B, createBlock as M, withCtx as b, Fragment as O, renderList as S, createVNode as V, createTextVNode as $ } from "vue";
import { E, _ as N, c as D } from "./main-6dWPqJr6.js";
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
import { useI18n as y } from "vue-i18n";
const K = { class: "mt-10" }, q = ["aria-label"], F = ["alt", "src"], H = ["alt"], L = { class: "absolute flex w-full bg-black opacity-75 text-white h-30 bottom-6 items-center" }, G = { class: "pl-5" }, J = { class: "ml-auto pr-5" }, P = ["content"], Q = /* @__PURE__ */ w({
  __name: "item",
  props: {
    area: {
      type: Object,
      required: !0
    },
    showThumbnail: {
      type: Boolean
    }
  },
  setup(e) {
    const { t: c } = y(), m = C("iApi"), r = (a) => {
      if (!a.extent) {
        console.error("selected area of interest doesn't have an extent specified.");
        return;
      }
      m.geo.map.zoomMapTo(E.fromConfig("area-of-interest-extent", a.extent));
    };
    return (a, t) => {
      const d = l("truncate"), u = l("tippy"), p = l("focus-item");
      return i(), n("div", K, [
        s((i(), n("button", {
          type: "button",
          class: f(["area-of-interest-item-button bg-gray-300 w-full", { "border border-gray-300": e.showThumbnail }]),
          "aria-label": _(c)("areas-of-interest.select"),
          onClick: t[2] || (t[2] = (h) => r(e.area))
        }, [
          o("div", null, [
            o("div", {
              class: f(["flex hover:opacity-50 area-of-interest-item-image", e.showThumbnail ? "h-180" : "h-30"])
            }, [
              e.area.thumbnail ? (i(), n("img", {
                key: 0,
                class: "w-full bg-white object-contain",
                alt: e.area.altText || e.area.title,
                src: e.area.thumbnail
              }, null, 8, F)) : e.showThumbnail ? (i(), n("img", {
                key: 1,
                class: "w-full bg-white object-contain py-30",
                alt: e.area.altText || e.area.title,
                src: "https://openclipart.org/image/800px/160615"
              }, null, 8, H)) : g("", !0)
            ], 2)
          ]),
          o("div", L, [
            s((i(), n("div", G, [
              o("span", null, x(e.area.title), 1)
            ])), [
              [d]
            ]),
            s(o("div", J, [
              s((i(), n("a", {
                onClick: t[0] || (t[0] = v(() => {
                }, ["stop"])),
                onKeydown: t[1] || (t[1] = T(v(() => {
                }, ["prevent"]), ["enter", "space"])),
                content: e.area.description
              }, t[3] || (t[3] = [
                o("svg", {
                  class: "fill-current w-16 h-16",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }, [
                  o("path", {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                  }),
                  o("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })
                ], -1)
              ]), 40, P)), [
                [u, {
                  placement: "bottom",
                  trigger: "click focus"
                }]
              ])
            ], 512), [
              [z, e.area.description]
            ])
          ])
        ], 10, q)), [
          [p]
        ])
      ]);
    };
  }
}), R = /* @__PURE__ */ N(Q, [["__scopeId", "data-v-e64041d0"]]), U = { class: "h-600 overflow-y-auto" }, W = { class: "mx-5" }, X = { key: 0 }, ye = /* @__PURE__ */ w({
  __name: "screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(e) {
    const { t: c } = y(), m = D(), r = I(() => m.areas), a = j(!1);
    return A(() => {
      a.value = !!r.value?.some((t) => t.thumbnail);
    }), (t, d) => {
      const u = B("panel-screen"), p = l("focus-list");
      return i(), M(u, { panel: e.panel }, {
        header: b(() => [
          $(x(_(c)("areas-of-interest.title")), 1)
        ]),
        content: b(() => [
          o("div", U, [
            o("div", W, [
              r.value.length > 0 ? s((i(), n("ul", X, [
                (i(!0), n(O, null, S(r.value, (h, k) => (i(), n("li", { key: k }, [
                  V(R, {
                    area: h,
                    "show-thumbnail": a.value,
                    class: "block relative overflow-hidden"
                  }, null, 8, ["area", "show-thumbnail"])
                ]))), 128))
              ])), [
                [p]
              ]) : g("", !0)
            ])
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  ye as _
};
