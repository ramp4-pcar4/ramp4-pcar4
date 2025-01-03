import { c1 as $, c2 as z, c3 as I, iL as U, c7 as N, c9 as m, cc as t, ci as a, ch as v, cf as x, fV as l, fW as _, cj as b, ck as f, ce as T, iJ as C, iK as D, f$ as V, ix as K, fX as O, c4 as S, c5 as q, c6 as A, c8 as W, ca as F, cb as L, cd as E, cg as H } from "./main-C4pF0E7B.js";
const J = { class: "mb-10" }, R = ["aria-label"], X = {
  key: 0,
  class: "w-full h-30 hidden"
}, G = ["alt", "src"], P = ["alt", "src"], Q = ["alt"], Y = { class: "pl-5" }, Z = { class: "ml-auto pr-5" }, ee = ["content"], te = {
  key: 0,
  class: "rv-basemap-check absolute top-0 right-0"
}, ae = /* @__PURE__ */ $({
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
    const { t: p } = z(), y = I("iApi"), i = U(), o = N(() => i.activeBasemapConfig), u = (r) => {
      r.id !== o.value.id && y?.geo.map.setBasemap(r.id);
    };
    return (r, s) => {
      const g = m("truncate"), n = m("tippy"), d = m("focus-item");
      return t(), a("div", J, [
        v((t(), a("button", {
          class: "basemap-item-button bg-gray-300 w-full h-full",
          type: "button",
          "aria-label": x(p)("basemap.select"),
          onClick: s[2] || (s[2] = (c) => u(e.basemap))
        }, [
          l("div", null, [
            l("div", {
              class: _(["flex hover:opacity-50 basemap-item-image basemap-item-container", e.basemap.hideThumbnail ? "h-30" : "h-180"])
            }, [
              e.basemap.hideThumbnail ? (t(), a("div", X)) : e.basemap.thumbnailUrl ? (t(), a("img", {
                key: 1,
                class: "w-full h-180",
                alt: e.basemap.altText,
                src: e.basemap.thumbnailUrl
              }, null, 8, G)) : e.tileSchema.thumbnailTileUrls && e.tileSchema.thumbnailTileUrls.length > 0 && e.basemap.layers.every((c) => c.layerType === "esri-tile") ? (t(!0), a(b, { key: 2 }, f(e.basemap.layers, (c) => (t(), a("div", {
                key: c.id,
                class: "flex basemap-item-inner h-180"
              }, [
                (t(!0), a(b, null, f(e.tileSchema.thumbnailTileUrls, (w, k) => (t(), a("img", {
                  class: "w-full",
                  alt: e.basemap.altText,
                  src: c.url + w,
                  key: k
                }, null, 8, P))), 128))
              ]))), 128)) : (t(), a("img", {
                key: 3,
                class: "w-full bg-white h-180",
                alt: e.basemap.altText,
                src: "https://openclipart.org/image/800px/275366"
              }, null, 8, Q))
            ], 2)
          ]),
          l("div", {
            class: _(["absolute flex w-full bg-black text-white h-30 bottom-6 items-center", e.basemap.hideThumbnail && e.basemap.id === o.value.id ? "opacity-85" : "opacity-75"])
          }, [
            v((t(), a("div", Y, [
              l("span", null, T(e.basemap.name), 1)
            ])), [
              [g]
            ]),
            l("div", Z, [
              v((t(), a("a", {
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
              ]), 40, ee)), [
                [n, {
                  placement: "bottom",
                  trigger: "click focus"
                }]
              ])
            ])
          ], 2),
          e.basemap.id === o.value.id && !e.basemap.hideThumbnail ? (t(), a("div", te, s[4] || (s[4] = [
            l("svg", {
              class: "fill-current w-25 h-25 relative",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24"
            }, [
              l("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
            ], -1)
          ]))) : V("", !0)
        ], 8, R)), [
          [d]
        ])
      ]);
    };
  }
}), se = /* @__PURE__ */ K(ae, [["__scopeId", "data-v-7cf27f80"]]), le = ["content"], ie = { class: "h-600 overflow-y-auto" }, ne = { class: "font-bold text-xl" }, ce = {
  key: 0,
  class: "border-t border-b border-gray-600"
}, re = /* @__PURE__ */ $({
  __name: "screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(e) {
    const { t: p } = z(), y = U(), i = O("el"), o = S([]), u = S([]), r = (n) => {
      n.key === "Tab" && i.value?.matches(":focus") && i.value._tippy.show();
    }, s = () => {
      i.value._tippy.hide();
    };
    q(() => {
      const n = y.config.map;
      o.value = n.tileSchemas, u.value = n.basemaps, i.value?.addEventListener("blur", s), i.value?.addEventListener("keyup", r);
    }), A(() => {
      i.value?.removeEventListener("blur", s), i.value?.removeEventListener("keyup", r);
    });
    const g = (n) => u.value.filter((d) => d.tileSchemaId === n);
    return (n, d) => {
      const c = W("panel-screen"), w = m("truncate"), k = m("focus-list"), j = m("tippy");
      return t(), F(c, { panel: e.panel }, {
        header: L(() => [
          E(T(x(p)("basemap.title")), 1)
        ]),
        content: L(() => [
          v((t(), a("div", {
            content: x(p)("panels.controls.items"),
            ref_key: "el",
            ref: i
          }, [
            l("div", ie, [
              (t(!0), a(b, null, f(o.value, (h, M) => (t(), a("div", {
                class: "mx-5",
                key: h.id
              }, [
                l("div", {
                  class: _((M === 0 ? "mt-5" : "mt-36") + " flex mb-5")
                }, [
                  v((t(), a("h3", ne, [
                    E(T(h.name), 1)
                  ])), [
                    [w]
                  ])
                ], 2),
                u.value.length > 0 ? (t(), a("ul", ce, [
                  (t(!0), a(b, null, f(g(h.id), (B) => (t(), a("li", {
                    key: B.id
                  }, [
                    H(se, {
                      basemap: B,
                      tileSchema: h,
                      class: "block relative overflow-hidden"
                    }, null, 8, ["basemap", "tileSchema"])
                  ]))), 128))
                ])) : V("", !0)
              ]))), 128))
            ])
          ], 8, le)), [
            [k],
            [j, {
              trigger: "manual",
              placement: "top-end",
              maxWidth: 190
            }]
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  re as _
};
//# sourceMappingURL=screen.vue_vue_type_script_setup_true_lang-CoJvyAIH.js.map
