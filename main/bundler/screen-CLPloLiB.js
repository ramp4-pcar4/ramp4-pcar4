import { defineComponent as U, inject as q, useTemplateRef as $, ref as T, computed as A, onMounted as M, onBeforeUnmount as V, resolveDirective as p, createElementBlock as s, openBlock as a, withDirectives as h, unref as L, createElementVNode as n, createCommentVNode as j, normalizeClass as B, Fragment as w, renderList as k, toDisplayString as C, withKeys as K, withModifiers as S, resolveComponent as F, createBlock as H, withCtx as I, createTextVNode as z, createVNode as R } from "vue";
import { useI18n as N } from "vue-i18n";
import { l as D, _ as W } from "./main-MXZmlokj.js";
const G = { class: "mb-10" }, J = ["aria-label"], P = {
  key: 0,
  class: "w-full h-30 hidden"
}, Q = ["alt", "src"], X = ["alt", "src"], Y = ["alt"], Z = { class: "pl-5" }, ee = { class: "ml-auto pr-5" }, te = ["content"], ae = {
  key: 0,
  class: "rv-basemap-check absolute top-0 right-0"
}, se = /* @__PURE__ */ U({
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
  setup(t) {
    const { t: b } = N(), _ = q("iApi"), i = D(), e = $("basemapInfo"), r = T(!1), m = A(() => i.activeBasemapConfig), f = (c) => {
      c.id !== m.value.id && _.geo.map.setBasemap(c.id);
    }, y = (c) => {
      c.key === "Tab" && e.value?.matches(":focus") && (r.value = !0, e.value._tippy.show());
    }, o = () => {
      r.value = !1, e.value._tippy.hide();
    }, v = (c) => {
      c.pointerType === "touch" && (r.value = !r.value, r.value ? e.value._tippy.show() : e.value._tippy.hide());
    };
    return M(() => {
      e.value?.addEventListener("mouseenter", () => e.value._tippy.show()), e.value?.addEventListener("mouseleave", () => e.value._tippy.hide()), e.value?.addEventListener("click", v), e.value?.addEventListener("keyup", y), e.value?.addEventListener("blur", o);
    }), V(() => {
      e.value?.removeEventListener("mouseenter", () => e.value._tippy.show()), e.value?.removeEventListener("mouseleave", () => e.value._tippy.hide()), e.value?.removeEventListener("click", v), e.value?.removeEventListener("focus", () => y), e.value?.removeEventListener("blur", () => o);
    }), (c, l) => {
      const x = p("truncate"), E = p("tippy"), d = p("focus-item");
      return a(), s("div", G, [
        h((a(), s("button", {
          class: "basemap-item-button bg-gray-300 w-full h-full",
          type: "button",
          "aria-label": L(b)("basemap.select"),
          onClick: l[2] || (l[2] = (u) => f(t.basemap))
        }, [
          n("div", null, [
            n("div", {
              class: B(["flex hover:opacity-50 basemap-item-image basemap-item-container", t.basemap.hideThumbnail ? "h-30" : "h-180"])
            }, [
              t.basemap.hideThumbnail ? (a(), s("div", P)) : t.basemap.thumbnailUrl ? (a(), s("img", {
                key: 1,
                class: "w-full h-180",
                alt: t.basemap.altText,
                src: t.basemap.thumbnailUrl
              }, null, 8, Q)) : t.tileSchema.thumbnailTileUrls && t.tileSchema.thumbnailTileUrls.length > 0 && t.basemap.layers.every((u) => u.layerType === "esri-tile") ? (a(!0), s(w, { key: 2 }, k(t.basemap.layers, (u) => (a(), s("div", {
                key: u.id,
                class: "flex basemap-item-inner h-180"
              }, [
                (a(!0), s(w, null, k(t.tileSchema.thumbnailTileUrls, (g, O) => (a(), s("img", {
                  class: "w-full",
                  alt: t.basemap.altText,
                  src: u.url + g,
                  key: O
                }, null, 8, X))), 128))
              ]))), 128)) : (a(), s("img", {
                key: 3,
                class: "w-full bg-white h-180",
                alt: t.basemap.altText,
                src: "https://openclipart.org/image/800px/275366"
              }, null, 8, Y))
            ], 2)
          ]),
          n("div", {
            class: B(["absolute flex w-full bg-black text-white h-30 bottom-6 items-center", t.basemap.hideThumbnail && t.basemap.id === m.value.id ? "opacity-85" : "opacity-75"])
          }, [
            h((a(), s("div", Z, [
              n("span", null, C(t.basemap.name), 1)
            ])), [
              [x]
            ]),
            n("div", ee, [
              h((a(), s("a", {
                onClick: l[0] || (l[0] = S(() => {
                }, ["stop"])),
                onKeydown: l[1] || (l[1] = K(S(() => {
                }, ["prevent"]), ["enter", "space"])),
                content: t.basemap.description,
                ref_key: "basemapInfo",
                ref: e
              }, l[3] || (l[3] = [
                n("svg", {
                  class: "fill-current w-16 h-16",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }, [
                  n("path", {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                  }),
                  n("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })
                ], -1)
              ]), 40, te)), [
                [E, {
                  placement: "bottom",
                  trigger: "manual"
                }]
              ])
            ])
          ], 2),
          t.basemap.id === m.value.id && !t.basemap.hideThumbnail ? (a(), s("div", ae, l[4] || (l[4] = [
            n("svg", {
              class: "fill-current w-25 h-25 relative",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24"
            }, [
              n("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
            ], -1)
          ]))) : j("", !0)
        ], 8, J)), [
          [d]
        ])
      ]);
    };
  }
}), le = /* @__PURE__ */ W(se, [["__scopeId", "data-v-9fadece5"]]), ne = ["content"], ie = { class: "h-600 overflow-y-auto" }, oe = { class: "font-bold text-xl" }, re = {
  key: 0,
  class: "border-t border-b border-gray-600"
}, ve = /* @__PURE__ */ U({
  __name: "screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(t) {
    const { t: b } = N(), _ = D(), i = $("el"), e = T([]), r = T([]), m = (o) => {
      o.key === "Tab" && i.value?.matches(":focus") && i.value._tippy.show();
    }, f = () => {
      i.value._tippy.hide();
    };
    M(() => {
      const o = _.config.map;
      e.value = o.tileSchemas, r.value = o.basemaps, i.value?.addEventListener("blur", f), i.value?.addEventListener("keyup", m);
    }), V(() => {
      i.value?.removeEventListener("blur", f), i.value?.removeEventListener("keyup", m);
    });
    const y = (o) => r.value.filter((v) => v.tileSchemaId === o);
    return (o, v) => {
      const c = F("panel-screen"), l = p("truncate"), x = p("focus-list"), E = p("tippy");
      return a(), H(c, { panel: t.panel }, {
        header: I(() => [
          z(C(L(b)("basemap.title")), 1)
        ]),
        content: I(() => [
          h((a(), s("div", {
            content: L(b)("panels.controls.items"),
            ref_key: "el",
            ref: i
          }, [
            n("div", ie, [
              (a(!0), s(w, null, k(e.value, (d, u) => (a(), s("div", {
                class: "mx-5",
                key: d.id
              }, [
                n("div", {
                  class: B((u === 0 ? "mt-5" : "mt-36") + " flex mb-5")
                }, [
                  h((a(), s("h3", oe, [
                    z(C(d.name), 1)
                  ])), [
                    [l]
                  ])
                ], 2),
                r.value.length > 0 ? (a(), s("ul", re, [
                  (a(!0), s(w, null, k(y(d.id), (g) => (a(), s("li", {
                    key: g.id
                  }, [
                    R(le, {
                      basemap: g,
                      tileSchema: d,
                      class: "block relative overflow-hidden"
                    }, null, 8, ["basemap", "tileSchema"])
                  ]))), 128))
                ])) : j("", !0)
              ]))), 128))
            ])
          ], 8, ne)), [
            [x],
            [E, {
              trigger: "manual",
              placement: "top-end",
              touch: !1,
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
  ve as default
};
