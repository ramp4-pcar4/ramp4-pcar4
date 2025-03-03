import { defineComponent as R, resolveDirective as b, withDirectives as y, openBlock as s, createElementBlock as l, normalizeClass as L, unref as u, createElementVNode as d, inject as Y, ref as E, computed as j, onMounted as q, onBeforeUnmount as P, toDisplayString as h, createBlock as V, withCtx as w, createCommentVNode as S, createVNode as I, Fragment as U, renderList as F, createTextVNode as M, toRaw as Z, resolveComponent as J } from "vue";
import { _ as K, G as k, Z as Q } from "./main-lcO-efBh.js";
import "pinia";
import { useI18n as $ } from "vue-i18n";
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
import W from "vuedraggable";
const X = ["content", "aria-label"], ee = ["disabled", "aria-label"], te = /* @__PURE__ */ R({
  __name: "reorder-button",
  props: {
    disabled: {
      type: Boolean
    },
    direction: {
      type: String,
      required: !0
    }
  },
  setup(m) {
    const { t: o } = $();
    return (c, i) => {
      const f = b("tippy"), _ = b("focus-item");
      return m.disabled ? (s(), l("button", {
        key: 1,
        type: "button",
        class: L(`pb-10 text-gray-300 p-8 ${m.direction === "up" ? "rotate-180" : ""}`),
        disabled: m.disabled,
        "aria-label": u(o)(`layer-reorder.move.${m.direction}`)
      }, i[1] || (i[1] = [
        d("svg", {
          class: "fill-current w-20 h-20",
          viewBox: "0 0 23 21"
        }, [
          d("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" })
        ], -1)
      ]), 10, ee)) : y((s(), l("button", {
        key: 0,
        type: "button",
        class: L(`pb-10 text-gray-500 hover:text-black p-8 ${m.direction === "up" ? "rotate-180" : ""}`),
        content: u(o)(`layer-reorder.move.${m.direction}`),
        "aria-label": u(o)(`layer-reorder.move.${m.direction}`)
      }, i[0] || (i[0] = [
        d("svg", {
          class: "fill-current w-20 h-20",
          viewBox: "0 0 23 21"
        }, [
          d("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" })
        ], -1)
      ]), 10, X)), [
        [f, {
          placement: "top-start",
          aria: "describedby"
        }],
        [_]
      ]);
    };
  }
}), O = /* @__PURE__ */ K(te, [["__scopeId", "data-v-d96028bc"]]), re = {
  key: 0,
  class: "flex-1 ms-10"
}, oe = { class: "p-5" }, ae = ["aria-label", "content"], ne = { class: "flex items-center p-5 h-44 cursor-pointer hover:bg-gray-200" }, ie = ["onClick", "content", "aria-label"], se = {
  key: 0,
  class: "fill-current w-20 h-20 mx-4",
  viewBox: "0 0 24 24"
}, de = {
  key: 1,
  class: "fill-current w-20 h-20 mx-4",
  viewBox: "0 0 24 24"
}, le = { class: "flex-1 mx-10" }, ce = {
  key: 0,
  class: "items-center p-5 pl-30 default-focus-style cursor-pointer"
}, pe = ["content", "aria-label"], ue = ["content", "aria-label"], me = { class: "flex-1 mx-10" }, ve = /* @__PURE__ */ R({
  __name: "layer-component",
  setup(m) {
    const o = Y("iApi"), { t: c } = $(), i = E([]), f = E([]), _ = E([]), D = E([]), z = j(() => o.animate), g = () => {
      const e = {};
      i.value.forEach((r) => {
        e[r.id] = r.isExpanded;
      }), i.value = [];
      const t = o.geo.layer.layerOrderIds(), a = [...Z(o.geo.layer.allLayersOnMap(!0))].filter(
        (r) => !r.isCosmetic && r.layerState !== Q.ERROR
      );
      i.value = a.reverse().map((r, v) => {
        const p = t.indexOf(r.id);
        return {
          id: r.id,
          uid: r.uid,
          name: "",
          orderIdx: p,
          componentIdx: v,
          isExpanded: e[r.id] || !1,
          isLoaded: !1,
          supportsSublayers: r.supportsSublayers,
          sublayers: []
        };
      }), a.forEach((r) => {
        r.loadPromise().then(() => {
          G(r);
        }).catch(() => 1);
      });
    }, G = (e) => {
      const t = i.value.find(
        (a) => a.id === e.id
      );
      t && (t.name = e.name, t.sublayers = e.sublayers.filter((a) => a !== void 0 && !a.isRemoved).map((a) => ({
        id: a.id,
        name: a.name
      })), t.isLoaded = !0);
    }, N = (e) => {
      e.supportsSublayers && (e.isExpanded = !e.isExpanded, o.updateAlert(
        c(e.isExpanded ? "layer-reorder.expanded" : "layer-reorder.collapsed", {
          name: e.name
        })
      ));
    }, H = () => {
      f.value = i.value.map((e) => e.orderIdx);
    }, T = (e) => {
      if (!e.moved)
        return;
      const t = e.moved.element, a = e.moved.oldIndex, r = e.moved.newIndex;
      if (a === r)
        return;
      const v = o.geo.layer.getLayer(t.uid), p = f.value[r];
      o.geo.map.reorder(v, p), o.updateAlert(
        c("layer-reorder.layermoved", {
          name: t.name,
          index: p
        })
      );
    }, C = (e, t) => {
      const a = o.geo.layer.getLayer(e.id), r = i.value.indexOf(e);
      if (a === void 0 || r === -1)
        return;
      const v = r - t, p = i.value[v].orderIdx;
      o.geo.map.reorder(a, p), o.updateAlert(
        c("layer-reorder.layermoved", {
          name: e.name,
          index: p
        })
      );
    }, A = (e) => e < 0 || e > i.value.length - 1;
    return q(() => {
      g(), _.value.push(
        o.event.on(k.LAYER_REMOVE, () => {
          g();
        })
      ), _.value.push(
        o.event.on(k.LAYER_LAYERSTATECHANGE, () => {
          g();
        })
      ), _.value.push(
        o.event.on(k.MAP_REORDER, () => {
          g();
        })
      );
    }), P(() => {
      _.value.forEach((e) => o.event.off(e)), D.value.forEach((e) => e());
    }), (e, t) => {
      const a = b("truncate"), r = b("focus-item"), v = b("tippy"), p = b("focus-container"), B = b("focus-list");
      return s(), l("div", null, [
        i.value.length === 0 ? y((s(), l("div", re, [
          d("span", oe, h(u(c)("layer-reorder.nolayers")), 1)
        ])), [
          [a]
        ]) : (s(), V(u(W), {
          key: 1,
          class: "p-3",
          modelValue: i.value,
          "onUpdate:modelValue": t[0] || (t[0] = (n) => i.value = n),
          "item-key": "uid",
          animation: z.value ? 200 : 0,
          onChange: T,
          onStart: H
        }, {
          item: w(({ element: n }) => [
            n.isLoaded ? y((s(), l("div", {
              key: 0,
              class: L(`
                        mt-4
                        relative
                        ${n.isExpanded ? "hover:bg-gray-200" : ""}
                        border-2
                        border-gray-300
                        default-focus-style
                    `),
              "aria-label": n.name,
              content: n.name
            }, [
              t[3] || (t[3] = d("div", { class: "display-none" }, null, -1)),
              d("div", ne, [
                n.supportsSublayers ? y((s(), l("button", {
                  key: 0,
                  type: "button",
                  onClick: (x) => N(n),
                  class: "text-gray-500 hover:text-black p-5",
                  content: u(c)(`layer-reorder.${n.isExpanded ? "collapse" : "expand"}`),
                  "aria-label": u(c)(`layer-reorder.${n.isExpanded ? "collapse" : "expand"}`)
                }, [
                  n.isExpanded ? (s(), l("svg", se, t[1] || (t[1] = [
                    d("path", {
                      d: "M0 0h24v24H0z",
                      fill: "none"
                    }, null, -1),
                    d("path", { d: "M19 13H5v-2h14v2z" }, null, -1)
                  ]))) : (s(), l("svg", de, t[2] || (t[2] = [
                    d("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }, null, -1)
                  ])))
                ], 8, ie)), [
                  [r],
                  [v, {
                    placement: "right",
                    aria: "describedby"
                  }]
                ]) : S("", !0),
                y((s(), l("div", le, [
                  d("span", null, h(n.name), 1)
                ])), [
                  [a]
                ]),
                I(O, {
                  disabled: A(n.componentIdx - 1),
                  direction: "up",
                  class: "px-7",
                  onClick: (x) => C(n, 1)
                }, null, 8, ["disabled", "onClick"]),
                I(O, {
                  disabled: A(n.componentIdx + 1),
                  direction: "down",
                  class: "px-7",
                  onClick: (x) => C(n, -1)
                }, null, 8, ["disabled", "onClick"])
              ]),
              n.isExpanded && n.sublayers.length > 0 ? y((s(), l("div", ce, [
                (s(!0), l(U, null, F(n.sublayers, (x) => y((s(), l("div", {
                  key: x.id,
                  class: "m-15 default-focus-style",
                  content: x.name,
                  "aria-label": x.name
                }, [
                  M(h(x.name), 1)
                ], 8, pe)), [
                  [a],
                  [v, {
                    placement: "bottom-start",
                    aria: "describedby"
                  }],
                  [p]
                ])), 128))
              ])), [
                [B]
              ]) : S("", !0)
            ], 10, ae)), [
              [v, {
                placement: "top-start",
                aria: "describedby"
              }],
              [p]
            ]) : y((s(), l("div", {
              key: 1,
              class: "flex items-center p-5 mx-8 h-44 default-focus-style",
              content: u(c)("layer-reorder.loading"),
              "aria-label": u(c)("layer-reorder.loading"),
              "truncate-trigger": ""
            }, [
              t[4] || (t[4] = d("div", { class: "animate-spin spinner h-20 w-20 px-5" }, null, -1)),
              d("div", me, [
                d("span", null, h(u(c)("layer-reorder.loading")), 1)
              ])
            ], 8, ue)), [
              [v, {
                placement: "top-start",
                aria: "describedby"
              }],
              [p]
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "animation"]))
      ]);
    };
  }
}), Ke = /* @__PURE__ */ R({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(m) {
    const { t: o } = $();
    return (c, i) => {
      const f = J("panel-screen");
      return s(), V(f, { panel: m.panel }, {
        header: w(() => [
          M(h(u(o)("layer-reorder.title")), 1)
        ]),
        content: w(() => [
          I(ve)
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  Ke as default
};
