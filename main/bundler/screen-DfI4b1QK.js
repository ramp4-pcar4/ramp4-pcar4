import { defineComponent as T, computed as y, resolveDirective as C, createElementBlock as s, openBlock as t, createElementVNode as a, withKeys as A, unref as u, normalizeClass as F, withModifiers as K, withDirectives as L, createCommentVNode as $, createTextVNode as k, inject as j, ref as M, onBeforeMount as H, watch as O, onBeforeUnmount as I, toDisplayString as g, Fragment as P, renderList as N, onMounted as Z, renderSlot as Q, resolveComponent as X, createBlock as z, withCtx as B, createVNode as V } from "vue";
import { h as E, a as J, G as W, _ as Y, N as ee, O as te, Q as G, V as q } from "./main-6dWPqJr6.js";
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
import { debounce as U } from "throttle-debounce";
import { useI18n as R } from "vue-i18n";
import "pinia";
import "screenfull";
import "lodash-es";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import oe from "await-to-js";
import "svg.js";
const se = { class: "rv-geosearch-bar relative h-26 mx-8 mb-8" }, re = ["placeholder", "value", "aria-label"], ne = { class: "absolute inset-y-0 right-8 grid w-10 place-content-center" }, ae = ["aria-label", "content"], ie = /* @__PURE__ */ T({
  __name: "search-bar",
  setup(S) {
    const { t: i } = R(), p = E(), l = J(), _ = y(() => p.searchVal), m = y(
      () => ['"', "$", "!", "*", "+", "?", "^", "{", "}", "(", ")", "|", "[", "]"].filter((v) => p.searchVal.includes(v)).join("")
    ), f = (v) => {
      p.setSearchTerm(v), p.setSearchRegex(v);
    }, h = U(500, (v) => {
      f(v);
    });
    return (v, e) => {
      const c = C("tippy");
      return t(), s("div", se, [
        a("input", {
          type: "text",
          class: F(["border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0", { "border-yellow-500": m.value }]),
          placeholder: u(i)("geosearch.searchText"),
          value: _.value,
          onInput: e[0] || (e[0] = (o) => u(h)(o.target.value)),
          onKeyup: e[1] || (e[1] = A((o) => {
            u(l).mobileView && o.target.blur();
          }, ["enter"])),
          "aria-label": u(i)("geosearch.searchText"),
          onKeypress: e[2] || (e[2] = A(K(() => {
          }, ["prevent"]), ["enter"])),
          enterkeyhint: "done"
        }, null, 42, re),
        a("span", ne, [
          m.value ? L((t(), s("button", {
            key: 0,
            class: "cursor-default",
            "aria-label": u(i)("geosearch.badChars", { chars: m.value }),
            content: u(i)("geosearch.badChars", { chars: m.value })
          }, e[3] || (e[3] = [
            k(" ⚠ ")
          ]), 8, ae)), [
            [c]
          ]) : $("", !0)
        ])
      ]);
    };
  }
}), le = { class: "rv-geosearch-top-filters sm:flex items-center w-full ml-8 mb-14" }, ce = { class: "w-fit inline-block sm:w-1/2 h-26 mb-8 sm:mb-0 pr-16 sm:pr-0" }, pe = ["value", "aria-label"], ue = {
  value: "",
  disabled: "",
  hidden: ""
}, de = { class: "sm:w-1/2 h-26 sm:mx-16 flex" }, me = ["value", "aria-label"], he = {
  value: "",
  disabled: "",
  hidden: ""
}, ve = ["disabled", "content", "aria-label"], be = /* @__PURE__ */ T({
  __name: "top-filters",
  setup(S) {
    const { t: i } = R(), p = j("iApi"), l = E(), _ = M([]), m = M([]), f = M([]), h = y(() => l.queryParams), v = y(() => p.language), e = (d) => l.setProvince(d), c = (d) => l.setType(d), o = () => {
      e({}), c({});
    }, x = () => {
      l.initService(p.language, p.fixture.get("geosearch").config);
      const d = _.value.find((n) => h.value.province === n.name)?.code, b = m.value.find((n) => h.value.type === n.name)?.code;
      l.getProvinces.then((n) => {
        _.value = n, e({
          province: n.find((w) => w.code === d)?.name,
          forceReRun: !0
        });
      }), l.getTypes.then((n) => {
        m.value = n, c({
          type: n.find((w) => w.code === b)?.name,
          forceReRun: !0
        });
      });
    };
    return H(() => {
      x(), f.value.push(O(v, x));
    }), I(() => {
      f.value.forEach((d) => d());
    }), (d, b) => {
      const n = C("truncate"), w = C("tippy");
      return t(), s("div", le, [
        a("div", ce, [
          L((t(), s("select", {
            class: "border-b border-b-gray-600 w-full h-full py-0 cursor-pointer",
            value: h.value.province,
            "aria-label": u(i)("geosearch.filters.province"),
            onChange: b[0] || (b[0] = (r) => e({
              province: r.target.value
            }))
          }, [
            L((t(), s("option", ue, [
              k(g(u(i)("geosearch.filters.province")), 1)
            ])), [
              [n]
            ]),
            (t(!0), s(P, null, N(_.value, (r) => L((t(), s("option", {
              key: r.code
            }, [
              k(g(r.name), 1)
            ])), [
              [n]
            ])), 128))
          ], 40, pe)), [
            [n]
          ])
        ]),
        a("div", de, [
          L((t(), s("select", {
            class: "border-b border-b-gray-600 w-full h-full py-0 cursor-pointer max-w-150",
            value: h.value.type,
            "aria-label": u(i)("geosearch.filters.type"),
            onChange: b[1] || (b[1] = (r) => c({
              type: r.target.value
            }))
          }, [
            a("option", he, g(u(i)("geosearch.filters.type")), 1),
            (t(!0), s(P, null, N(m.value, (r) => (t(), s("option", {
              key: r.code
            }, g(r.name), 1))), 128))
          ], 40, me)), [
            [n]
          ]),
          L((t(), s("button", {
            type: "button",
            class: "text-gray-500 w-1/8 h-24 pl-8 pr-16 sm:pr-8 hover:text-black disabled:cursor-default disabled:text-gray-400",
            disabled: !h.value.type && !h.value.province,
            onClick: o,
            content: u(i)("geosearch.filters.clear"),
            "aria-label": u(i)("geosearch.filters.clear")
          }, b[2] || (b[2] = [
            a("div", { class: "rv-geosearch-icon" }, [
              a("svg", {
                class: "fill-current w-18 h-18",
                viewBox: "0 0 23 21"
              }, [
                a("path", { d: "M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z " })
              ])
            ], -1)
          ]), 8, ve)), [
            [w, { placement: "bottom" }]
          ])
        ])
      ]);
    };
  }
}), _e = { class: "rv-geosearch-bottom-filters" }, fe = { class: "bg-white" }, ge = { class: "ml-8 cursor-pointer font-normal" }, ye = ["checked"], xe = /* @__PURE__ */ T({
  __name: "bottom-filters",
  setup(S) {
    const { t: i } = R(), p = j("iApi"), l = E(), _ = y(() => l.resultsVisible), m = U(300, (e) => {
      h(e).then((c) => {
        f({
          extent: c,
          visible: _.value
        });
      });
    }), f = (e) => {
      l.setMapExtent(e);
    }, h = async (e) => e.sr.wkid === 4326 ? e : await p.geo.proj.projectGeometry(4326, e), v = (e) => {
      h(p.geo.map.getExtent()).then((c) => {
        f({
          extent: c,
          visible: e
        });
      });
    };
    return Z(() => {
      p.event.on(W.MAP_EXTENTCHANGE, m, "geosearch_map_extent");
    }), I(() => {
      p.event.off("geosearch_map_extent");
    }), (e, c) => (t(), s("div", _e, [
      a("div", fe, [
        a("label", ge, [
          a("input", {
            type: "checkbox",
            class: "border-2 mx-8 border-gray-600 cursor-pointer",
            checked: _.value,
            onChange: c[0] || (c[0] = (o) => v(o.target.checked)),
            onKeypress: c[1] || (c[1] = A(K(() => {
            }, ["prevent"]), ["enter"]))
          }, null, 40, ye),
          k(g(u(i)("geosearch.visible")), 1)
        ])
      ])
    ]));
  }
}), we = {}, Le = { class: "w-full h-6 relative overflow-hidden rounded-full indeterminate mb-14" }, $e = {
  class: "h-full progressbar bg-blue-800 rounded-full top-0",
  "aria-valuemin": "0",
  "aria-valuemax": "100"
}, ke = { class: "flex items-center h-full" };
function Se(S, i) {
  return t(), s("div", Le, [
    a("div", $e, [
      a("span", ke, [
        Q(S.$slots, "default", {}, void 0, !0)
      ])
    ])
  ]);
}
const Ce = /* @__PURE__ */ Y(we, [["render", Se], ["__scopeId", "data-v-0a8d1c36"]]), Te = { class: "flex flex-col h-full" }, Ee = {
  key: 1,
  class: "text-red-900 text-xs px-8 mb-10"
}, Re = {
  key: 2,
  class: "px-8 mb-10 py-8 flex-grow text-wrap border-y border-gray-600 overflow-y-auto"
}, Me = { class: "relative h-48" }, Ve = { class: "font-bold text-blue-600" }, Ae = {
  key: 3,
  class: "rv-results-list flex-grow mb-5 border-t border-b border-gray-600 overflow-y-auto"
}, Pe = ["onClick"], Ne = { class: "rv-result-description px-8" }, je = { class: "flex-1 text-left truncate font-bold leading-tight" }, ze = ["innerHTML"], Be = {
  key: 0,
  class: "text-gray-600 text-sm"
}, Ge = {
  key: 1,
  class: "hidden"
}, qe = {
  key: 2,
  class: "text-sm font-normal"
}, $t = /* @__PURE__ */ T({
  __name: "screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(S) {
    const { t: i } = R(), p = j("iApi"), l = E(), _ = y(() => l.searchVal.replace(/["!*$+?^{}()|[\]\\]/g, "").trim()), m = y(() => l.searchResults), f = y(() => l.loadingResults), h = y(() => l.failedServices), v = y(() => l.GSservice.config.fsaUrl), e = async (o) => {
      if (o.flav === "fsa" && v.value) {
        const d = v.value.replace(ee, o.name), [b, n] = await oe(te(d));
        if (!b) {
          const w = new G(
            "fsazoom",
            n.features[0].geometry.rings,
            q.fromConfig(n.spatialReference),
            // technically not from a config, but config follows esri spec. this server result is raw, does not have esri class wrapper
            !0
          );
          p.geo.map.zoomMapTo(w);
          return;
        }
      }
      const x = new G(
        "zoomies",
        [
          [
            [o.bbox[0], o.bbox[1]],
            [o.bbox[0], o.bbox[3]],
            [o.bbox[2], o.bbox[3]],
            [o.bbox[2], o.bbox[1]],
            [o.bbox[0], o.bbox[1]]
          ]
        ],
        q.latLongSR(),
        !0
      );
      p.geo.map.zoomMapTo(x);
    }, c = (o, x) => {
      const d = o.replace(
        new RegExp(`${l.searchRegex}`, "gi"),
        (b) => '<span class="font-bold text-blue-600">' + b + "</span>"
      );
      return x ? d + "," : d;
    };
    return (o, x) => {
      const d = X("panel-screen"), b = C("truncate"), n = C("focus-item"), w = C("focus-list");
      return t(), z(d, { panel: S.panel }, {
        header: B(() => [
          k(g(u(i)("geosearch.title")), 1)
        ]),
        content: B(() => [
          a("div", Te, [
            V(ie),
            V(be),
            f.value ? (t(), z(Ce, {
              key: 0,
              class: "flex-none"
            })) : $("", !0),
            h.value.length > 0 && !f.value ? (t(), s("div", Ee, g(u(i)("geosearch.serviceError", {
              services: h.value.join(", ")
            })), 1)) : $("", !0),
            _.value && m.value.length === 0 && !f.value ? (t(), s("div", Re, [
              a("span", Me, [
                k(g(u(i)("geosearch.noResults")), 1),
                a("span", Ve, '"' + g(_.value) + '"', 1)
              ])
            ])) : $("", !0),
            m.value.length > 0 ? L((t(), s("ul", Ae, [
              (t(!0), s(P, null, N(m.value, (r, D) => (t(), s("li", {
                class: "relative h-56",
                key: D
              }, [
                L((t(), s("button", {
                  type: "button",
                  class: "absolute inset-0 h-full w-full hover:bg-gray-300 default-focus-style",
                  onClick: (Ke) => e(r),
                  style: { "border-bottom": "1px solid lightgray" },
                  "truncate-trigger": ""
                }, [
                  a("div", Ne, [
                    L((t(), s("div", je, [
                      a("span", {
                        innerHTML: c(r.name, r.location.province)
                      }, null, 8, ze),
                      r.location.province ? (t(), s("span", Be, g(r.location.city ? " " + r.location.city + ", " + r.location.province.abbr : " " + r.location.province.abbr), 1)) : $("", !0),
                      r.type ? (t(), s("span", Ge, "; ")) : $("", !0),
                      r.type ? (t(), s("span", qe, [
                        x[0] || (x[0] = a("br", null, null, -1)),
                        k(g(r.type), 1)
                      ])) : $("", !0)
                    ])), [
                      [b, {
                        externalTrigger: !0,
                        options: { placement: "top-start" }
                      }]
                    ])
                  ])
                ], 8, Pe)), [
                  [n, "show-truncate"]
                ])
              ]))), 128))
            ])), [
              [w]
            ]) : $("", !0),
            V(xe, { class: "mt-auto" })
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  $t as default
};
