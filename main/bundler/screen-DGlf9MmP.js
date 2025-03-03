import { defineComponent as T, computed as w, resolveDirective as C, openBlock as o, createElementBlock as s, createElementVNode as r, normalizeClass as I, unref as c, withKeys as P, withModifiers as G, withDirectives as x, createTextVNode as k, createCommentVNode as L, inject as j, ref as M, onBeforeMount as D, watch as H, onBeforeUnmount as K, toDisplayString as f, Fragment as A, renderList as B, onMounted as F, renderSlot as Z, resolveComponent as J, createBlock as N, withCtx as z, createVNode as V } from "vue";
import { h as E, a as O, G as U, _ as X, J as Q, K as W } from "./main-lcO-efBh.js";
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
import { debounce as q } from "throttle-debounce";
import { useI18n as R } from "vue-i18n";
import "pinia";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "terraformer-arcgis-parser";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
const Y = { class: "rv-geosearch-bar relative h-26 mx-8 mb-8" }, ee = ["placeholder", "value", "aria-label"], te = { class: "absolute inset-y-0 right-8 grid w-10 place-content-center" }, oe = ["aria-label", "content"], se = /* @__PURE__ */ T({
  __name: "search-bar",
  setup(S) {
    const { t: n } = R(), p = E(), a = O(), b = w(() => p.searchVal), u = w(
      () => ['"', "$", "!", "*", "+", "?", "^", "{", "}", "(", ")", "|", "[", "]"].filter((m) => p.searchVal.includes(m)).join("")
    ), _ = (m) => {
      p.setSearchTerm(m), p.setSearchRegex(m);
    }, d = q(500, (m) => {
      _(m);
    });
    return (m, t) => {
      const e = C("tippy");
      return o(), s("div", Y, [
        r("input", {
          type: "text",
          class: I(["border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0", { "border-yellow-500": u.value }]),
          placeholder: c(n)("geosearch.searchText"),
          value: b.value,
          onInput: t[0] || (t[0] = (h) => c(d)(h.target.value)),
          onKeyup: t[1] || (t[1] = P((h) => {
            c(a).mobileView && h.target.blur();
          }, ["enter"])),
          "aria-label": c(n)("geosearch.searchText"),
          onKeypress: t[2] || (t[2] = P(G(() => {
          }, ["prevent"]), ["enter"])),
          enterkeyhint: "done"
        }, null, 42, ee),
        r("span", te, [
          u.value ? x((o(), s("button", {
            key: 0,
            class: "cursor-default",
            "aria-label": c(n)("geosearch.badChars", { chars: u.value }),
            content: c(n)("geosearch.badChars", { chars: u.value })
          }, t[3] || (t[3] = [
            k(" ⚠ ")
          ]), 8, oe)), [
            [e]
          ]) : L("", !0)
        ])
      ]);
    };
  }
}), re = { class: "rv-geosearch-top-filters sm:flex items-center w-full ml-8 mb-14" }, ne = { class: "w-fit inline-block sm:w-1/2 h-26 mb-8 sm:mb-0 pr-16 sm:pr-0" }, ae = ["value", "aria-label"], le = {
  value: "",
  disabled: "",
  hidden: ""
}, ie = { class: "sm:w-1/2 h-26 sm:mx-16 flex" }, ce = ["value", "aria-label"], pe = {
  value: "",
  disabled: "",
  hidden: ""
}, ue = ["disabled", "content", "aria-label"], de = /* @__PURE__ */ T({
  __name: "top-filters",
  setup(S) {
    const { t: n } = R(), p = j("iApi"), a = E(), b = M([]), u = M([]), _ = M([]), d = w(() => a.queryParams), m = w(() => p.language), t = (v) => a.setProvince(v), e = (v) => a.setType(v), h = () => {
      t({}), e({});
    }, $ = () => {
      a.initService(p.language, p.fixture.get("geosearch").config);
      const v = b.value.find((i) => d.value.province === i.name)?.code, y = u.value.find((i) => d.value.type === i.name)?.code;
      a.getProvinces.then((i) => {
        b.value = i, t({
          province: i.find((l) => l.code === v)?.name,
          forceReRun: !0
        });
      }), a.getTypes.then((i) => {
        u.value = i, e({
          type: i.find((l) => l.code === y)?.name,
          forceReRun: !0
        });
      });
    };
    return D(() => {
      $(), _.value.push(H(m, $));
    }), K(() => {
      _.value.forEach((v) => v());
    }), (v, y) => {
      const i = C("truncate"), l = C("tippy");
      return o(), s("div", re, [
        r("div", ne, [
          x((o(), s("select", {
            class: "border-b border-b-gray-600 w-full h-full py-0 cursor-pointer",
            value: d.value.province,
            "aria-label": c(n)("geosearch.filters.province"),
            onChange: y[0] || (y[0] = (g) => t({
              province: g.target.value
            }))
          }, [
            x((o(), s("option", le, [
              k(f(c(n)("geosearch.filters.province")), 1)
            ])), [
              [i]
            ]),
            (o(!0), s(A, null, B(b.value, (g) => x((o(), s("option", {
              key: g.code
            }, [
              k(f(g.name), 1)
            ])), [
              [i]
            ])), 128))
          ], 40, ae)), [
            [i]
          ])
        ]),
        r("div", ie, [
          x((o(), s("select", {
            class: "border-b border-b-gray-600 w-full h-full py-0 cursor-pointer max-w-150",
            value: d.value.type,
            "aria-label": c(n)("geosearch.filters.type"),
            onChange: y[1] || (y[1] = (g) => e({
              type: g.target.value
            }))
          }, [
            r("option", pe, f(c(n)("geosearch.filters.type")), 1),
            (o(!0), s(A, null, B(u.value, (g) => (o(), s("option", {
              key: g.code
            }, f(g.name), 1))), 128))
          ], 40, ce)), [
            [i]
          ]),
          x((o(), s("button", {
            type: "button",
            class: "text-gray-500 w-1/8 h-24 pl-8 pr-16 sm:pr-8 hover:text-black disabled:cursor-default disabled:text-gray-400",
            disabled: !d.value.type && !d.value.province,
            onClick: h,
            content: c(n)("geosearch.filters.clear"),
            "aria-label": c(n)("geosearch.filters.clear")
          }, y[2] || (y[2] = [
            r("div", { class: "rv-geosearch-icon" }, [
              r("svg", {
                class: "fill-current w-18 h-18",
                viewBox: "0 0 23 21"
              }, [
                r("path", { d: "M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z " })
              ])
            ], -1)
          ]), 8, ue)), [
            [l, { placement: "bottom" }]
          ])
        ])
      ]);
    };
  }
}), he = { class: "rv-geosearch-bottom-filters" }, me = { class: "bg-white" }, ve = { class: "ml-8 cursor-pointer font-normal" }, be = ["checked"], _e = /* @__PURE__ */ T({
  __name: "bottom-filters",
  setup(S) {
    const { t: n } = R(), p = j("iApi"), a = E(), b = w(() => a.resultsVisible), u = q(300, (t) => {
      d(t).then((e) => {
        _({
          extent: e,
          visible: b.value
        });
      });
    }), _ = (t) => {
      a.setMapExtent(t);
    }, d = async (t) => t.sr.wkid === 4326 ? t : await p.geo.proj.projectGeometry(4326, t), m = (t) => {
      d(p.geo.map.getExtent()).then((e) => {
        _({
          extent: e,
          visible: t
        });
      });
    };
    return F(() => {
      p.event.on(U.MAP_EXTENTCHANGE, u, "geosearch_map_extent");
    }), K(() => {
      p.event.off("geosearch_map_extent");
    }), (t, e) => (o(), s("div", he, [
      r("div", me, [
        r("label", ve, [
          r("input", {
            type: "checkbox",
            class: "border-2 mx-8 border-gray-600 cursor-pointer",
            checked: b.value,
            onChange: e[0] || (e[0] = (h) => m(h.target.checked)),
            onKeypress: e[1] || (e[1] = P(G(() => {
            }, ["prevent"]), ["enter"]))
          }, null, 40, be),
          k(f(c(n)("geosearch.visible")), 1)
        ])
      ])
    ]));
  }
}), ge = {}, fe = { class: "w-full h-6 relative overflow-hidden rounded-full indeterminate mb-14" }, ye = {
  class: "h-full progressbar bg-blue-800 rounded-full top-0",
  "aria-valuemin": "0",
  "aria-valuemax": "100"
}, xe = { class: "flex items-center h-full" };
function we(S, n) {
  return o(), s("div", fe, [
    r("div", ye, [
      r("span", xe, [
        Z(S.$slots, "default", {}, void 0, !0)
      ])
    ])
  ]);
}
const Le = /* @__PURE__ */ X(ge, [["render", we], ["__scopeId", "data-v-0a8d1c36"]]), $e = { class: "flex flex-col h-full" }, ke = {
  key: 1,
  class: "text-red-900 text-xs px-8 mb-10"
}, Se = {
  key: 2,
  class: "px-8 mb-10 py-8 flex-grow text-wrap border-y border-gray-600 overflow-y-auto"
}, Ce = { class: "relative h-48" }, Te = { class: "font-bold text-blue-600" }, Ee = {
  key: 3,
  class: "rv-results-list flex-grow mb-5 border-t border-b border-gray-600 overflow-y-auto"
}, Re = ["onClick"], Me = { class: "rv-result-description px-8" }, Ve = { class: "flex-1 text-left truncate font-bold leading-tight" }, Pe = ["innerHTML"], Ae = {
  key: 0,
  class: "text-gray-600 text-sm"
}, Be = {
  key: 1,
  class: "hidden"
}, je = {
  key: 2,
  class: "text-sm font-normal"
}, gt = /* @__PURE__ */ T({
  __name: "screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(S) {
    const { t: n } = R(), p = j("iApi"), a = E(), b = w(() => a.searchVal.replace(/["!*$+?^{}()|[\]\\]/g, "").trim()), u = w(() => a.searchResults), _ = w(() => a.loadingResults), d = w(() => a.failedServices), m = (e) => {
      const h = new Q(
        "zoomies",
        [
          [
            [e.bbox[0], e.bbox[1]],
            [e.bbox[0], e.bbox[3]],
            [e.bbox[2], e.bbox[3]],
            [e.bbox[2], e.bbox[1]],
            [e.bbox[0], e.bbox[1]]
          ]
        ],
        W.latLongSR(),
        !0
      );
      p.geo.map.zoomMapTo(h);
    }, t = (e, h) => {
      const $ = e.replace(
        new RegExp(`${a.searchRegex}`, "gi"),
        (v) => '<span class="font-bold text-blue-600">' + v + "</span>"
      );
      return h ? $ + "," : $;
    };
    return (e, h) => {
      const $ = J("panel-screen"), v = C("truncate"), y = C("focus-item"), i = C("focus-list");
      return o(), N($, { panel: S.panel }, {
        header: z(() => [
          k(f(c(n)("geosearch.title")), 1)
        ]),
        content: z(() => [
          r("div", $e, [
            V(se),
            V(de),
            _.value ? (o(), N(Le, {
              key: 0,
              class: "flex-none"
            })) : L("", !0),
            d.value.length > 0 && !_.value ? (o(), s("div", ke, f(c(n)("geosearch.serviceError", {
              services: d.value.join(", ")
            })), 1)) : L("", !0),
            b.value && u.value.length === 0 && !_.value ? (o(), s("div", Se, [
              r("span", Ce, [
                k(f(c(n)("geosearch.noResults")), 1),
                r("span", Te, '"' + f(b.value) + '"', 1)
              ])
            ])) : L("", !0),
            u.value.length > 0 ? x((o(), s("ul", Ee, [
              (o(!0), s(A, null, B(u.value, (l, g) => (o(), s("li", {
                class: "relative h-56",
                key: g
              }, [
                x((o(), s("button", {
                  type: "button",
                  class: "absolute inset-0 h-full w-full hover:bg-gray-300 default-focus-style",
                  onClick: (Ne) => m(l),
                  style: { "border-bottom": "1px solid lightgray" },
                  "truncate-trigger": ""
                }, [
                  r("div", Me, [
                    x((o(), s("div", Ve, [
                      r("span", {
                        innerHTML: t(l.name, l.location.province)
                      }, null, 8, Pe),
                      l.location.province ? (o(), s("span", Ae, f(l.location.city ? " " + l.location.city + ", " + l.location.province.abbr : " " + l.location.province.abbr), 1)) : L("", !0),
                      l.type ? (o(), s("span", Be, "; ")) : L("", !0),
                      l.type ? (o(), s("span", je, [
                        h[0] || (h[0] = r("br", null, null, -1)),
                        k(f(l.type), 1)
                      ])) : L("", !0)
                    ])), [
                      [v, {
                        externalTrigger: !0,
                        options: { placement: "top-start" }
                      }]
                    ])
                  ])
                ], 8, Re)), [
                  [y, "show-truncate"]
                ])
              ]))), 128))
            ])), [
              [i]
            ]) : L("", !0),
            V(_e, { class: "mt-auto" })
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  gt as default
};
