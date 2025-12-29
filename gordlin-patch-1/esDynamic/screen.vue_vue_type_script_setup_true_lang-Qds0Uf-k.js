import { bC as S, bD as z, bE as V, ik as I, bI as j, bK as o, bN as t, bT as a, bS as r, bQ as M, fC as l, fD as x, bU as b, bV as d, bP as k, ii as C, ij as D, fI as U, i4 as L, bF as T, bG as N, bJ as $, bL as O, bM as _, bO as B, bR as K } from "./main-BEi6lHs4.js";
const q = { class: "mb-10" }, A = ["aria-label"], E = {
  key: 0,
  class: "w-full h-30 hidden"
}, F = ["alt", "src"], G = ["alt", "src"], H = ["alt"], J = { class: "pl-5" }, P = { class: "ml-auto pr-5" }, Q = ["content"], R = {
  key: 0,
  class: "rv-basemap-check absolute top-0 right-0"
}, W = /* @__PURE__ */ S({
  __name: "item",
  props: {
    basemap: {
      type: Object,
      required: !0
    },
    tileSchema: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const { t: h } = z(), p = V("iApi"), m = I(), c = j(() => m.activeBasemapConfig), v = (n) => {
      n.id !== c.value.id && p?.geo.map.setBasemap(n.id);
    };
    return (n, s) => {
      const f = o("truncate"), g = o("tippy"), y = o("focus-item");
      return t(), a("div", q, [
        r((t(), a("button", {
          class: "basemap-item-button bg-gray-300 w-full h-full",
          type: "button",
          "aria-label": M(h)("basemap.select"),
          onClick: s[2] || (s[2] = (i) => v(e.basemap))
        }, [
          l("div", null, [
            l("div", {
              class: x(["flex hover:opacity-50 basemap-item-image basemap-item-container", e.basemap.hideThumbnail ? "h-30" : "h-180"])
            }, [
              e.basemap.hideThumbnail ? (t(), a("div", E)) : e.basemap.thumbnailUrl ? (t(), a("img", {
                key: 1,
                class: "w-full h-180",
                alt: e.basemap.altText,
                src: e.basemap.thumbnailUrl
              }, null, 8, F)) : e.tileSchema.thumbnailTileUrls && e.tileSchema.thumbnailTileUrls.length > 0 && e.basemap.layers.every((i) => i.layerType === "esri-tile") ? (t(!0), a(b, { key: 2 }, d(e.basemap.layers, (i) => (t(), a("div", {
                key: i.id,
                class: "flex basemap-item-inner h-180"
              }, [
                (t(!0), a(b, null, d(e.tileSchema.thumbnailTileUrls, (w, u) => (t(), a("img", {
                  class: "w-full",
                  alt: e.basemap.altText,
                  src: i.url + w,
                  key: u
                }, null, 8, G))), 128))
              ]))), 128)) : (t(), a("img", {
                key: 3,
                class: "w-full bg-white h-180",
                alt: e.basemap.altText,
                src: "https://openclipart.org/image/800px/275366"
              }, null, 8, H))
            ], 2)
          ]),
          l("div", {
            class: x(["absolute flex w-full bg-black text-white h-30 bottom-6 items-center", e.basemap.hideThumbnail && e.basemap.id === c.value.id ? "opacity-85" : "opacity-75"])
          }, [
            r((t(), a("div", J, [
              l("span", null, k(e.basemap.name), 1)
            ])), [
              [f]
            ]),
            l("div", P, [
              r((t(), a("a", {
                onClick: s[0] || (s[0] = C(() => {
                }, ["stop"])),
                onKeydown: s[1] || (s[1] = D(C(() => {
                }, ["prevent"]), ["enter", "space"])),
                content: e.basemap.description
              }, s[3] || (s[3] = [
                l("svg", {
                  class: "fill-current w-16 h-16",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }, [
                  l("path", {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                  }),
                  l("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })
                ], -1)
              ]), 40, Q)), [
                [g, {
                  placement: "bottom",
                  trigger: "click focus"
                }]
              ])
            ])
          ], 2),
          e.basemap.id === c.value.id && !e.basemap.hideThumbnail ? (t(), a("div", R, s[4] || (s[4] = [
            l("svg", {
              class: "fill-current w-25 h-25 relative",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24"
            }, [
              l("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
            ], -1)
          ]))) : U("", !0)
        ], 8, A)), [
          [y]
        ])
      ]);
    };
  }
}), X = /* @__PURE__ */ L(W, [["__scopeId", "data-v-7cf27f80"]]), Y = { class: "h-600 overflow-y-auto" }, Z = { class: "font-bold text-xl" }, ee = {
  key: 0,
  class: "border-t border-b border-gray-600"
}, ae = /* @__PURE__ */ S({
  __name: "screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(e) {
    const { t: h } = z(), p = I(), m = T([]), c = T([]);
    N(() => {
      const n = p.config.map;
      m.value = n.tileSchemas, c.value = n.basemaps;
    });
    const v = (n) => c.value.filter((s) => s.tileSchemaId === n);
    return (n, s) => {
      const f = $("panel-screen"), g = o("truncate"), y = o("focus-list");
      return t(), O(f, { panel: e.panel }, {
        header: _(() => [
          B(k(M(h)("basemap.title")), 1)
        ]),
        content: _(() => [
          l("div", Y, [
            (t(!0), a(b, null, d(m.value, (i, w) => (t(), a("div", {
              class: "mx-5",
              key: i.id
            }, [
              l("div", {
                class: x((w === 0 ? "mt-5" : "mt-36") + " flex mb-5")
              }, [
                r((t(), a("h3", Z, [
                  B(k(i.name), 1)
                ])), [
                  [g]
                ])
              ], 2),
              c.value.length > 0 ? r((t(), a("ul", ee, [
                (t(!0), a(b, null, d(v(i.id), (u) => (t(), a("li", {
                  key: u.id
                }, [
                  K(X, {
                    basemap: u,
                    tileSchema: i,
                    class: "block relative overflow-hidden"
                  }, null, 8, ["basemap", "tileSchema"])
                ]))), 128))
              ])), [
                [y]
              ]) : U("", !0)
            ]))), 128))
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  ae as _
};
//# sourceMappingURL=screen.vue_vue_type_script_setup_true_lang-Qds0Uf-k.js.map
