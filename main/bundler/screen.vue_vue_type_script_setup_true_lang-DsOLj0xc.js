import { defineComponent as $, computed as h, resolveComponent as C, resolveDirective as O, withDirectives as R, openBlock as i, createBlock as k, unref as r, withCtx as m, createElementVNode as e, createElementBlock as w, Fragment as V, renderList as j, normalizeClass as y, toDisplayString as _, inject as q, ref as b, useTemplateRef as A, onBeforeMount as N, watch as D, onMounted as P, onBeforeUnmount as F, createVNode as T, createTextVNode as H, createCommentVNode as I } from "vue";
import { debounce as U } from "throttle-debounce";
import { useI18n as z } from "vue-i18n";
import { a as W, f as L } from "./main-DP8bZMIm.js";
const G = ["onClick", "aria-label"], J = { class: "md-icon-small inline" }, K = /* @__PURE__ */ $({
  __name: "settings-button",
  props: {
    componentSelectedState: {
      type: Object,
      required: !0
    }
  },
  setup(v) {
    const { t: f } = z(), s = W(), u = L(), g = h(() => s.mobileView ? "top-end" : "left-end"), l = (a) => {
      a.selectable && u.toggleSelected({
        name: a.name
      });
    };
    return (a, n) => {
      const x = C("dropdown-menu"), p = O("focus-item");
      return R((i(), k(x, {
        position: g.value,
        tooltip: r(f)("export.menu"),
        tooltipPlacement: "top"
      }, {
        header: m(() => n[0] || (n[0] = [
          e("div", { class: "flex items-center text-gray-400 w-full h-full hover:text-black p-4 sm:p-8" }, [
            e("svg", {
              class: "fill-current w-24 h-24 m-auto",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24"
            }, [
              e("g", null, [
                e("path", {
                  d: "M0,0h24v24H0V0z",
                  fill: "none"
                }),
                e("path", { d: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" })
              ])
            ])
          ], -1)
        ])),
        default: m(() => [
          (i(!0), w(V, null, j(v.componentSelectedState, (o) => (i(), w("a", {
            key: o.name,
            onClick: (S) => l(o),
            href: "javascript:;",
            class: y(`text-left text-sm sm:text-base ${o.selectable ? "cursor-pointer" : "cursor-default"}`),
            "aria-label": o.name
          }, [
            e("div", J, [
              (i(), w("svg", {
                height: "20",
                width: "20",
                viewBox: "0 0 24 24",
                class: y(`inline mx-8 ${o.selected ? "" : "invisible"}`)
              }, n[1] || (n[1] = [
                e("g", null, [
                  e("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                ], -1)
              ]), 2)),
              e("span", {
                class: y(`inline ${o.selectable ? "" : "text-gray-300"}
                    `)
              }, _(r(f)(`export.menu.component.${o.name}`)), 3)
            ])
          ], 10, G))), 128))
        ]),
        _: 1
      }, 8, ["position", "tooltip"])), [
        [p]
      ]);
    };
  }
}), Q = { ref: "componentEl" }, X = { class: "flex" }, Y = ["aria-label"], Z = ["aria-label"], ne = /* @__PURE__ */ $({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(v) {
    const f = v, { t: s } = z(), u = q("iApi"), g = L(), l = b(), a = b(void 0), n = b(void 0), x = b([]), p = A("componentEl"), o = h(() => g.componentSelectedState), S = h(() => {
      let c = {};
      return l.value && Object.keys(o.value).forEach((t) => {
        c[t] = {
          name: t,
          selected: o.value[t] ?? !1,
          selectable: (l.value?.config)[t]?.selectable ?? !0
        };
      }), c;
    }), E = h(() => !!l.value?.customRendererFunc), d = U(300, () => {
      if (!l.value || !p.value)
        return;
      const c = p.value.querySelector(".export-canvas");
      l.value.make(c, p.value.clientWidth);
    });
    return N(() => {
      f.panel.exportMake = d, x.value.push(
        // Listen for any changes to the settings, and refresh the image when they do change
        D(S, () => {
          d();
        })
      );
    }), P(() => {
      l.value = u.fixture.get("export"), a.value = new ResizeObserver(d), n.value = new ResizeObserver(d), a.value.observe(u?.$vApp.$root?.$el), n.value.observe(u?.$vApp.$root?.$el.querySelector('[data-cy="export"]'));
    }), F(() => {
      a.value.disconnect(), n.value.disconnect(), x.value.forEach((c) => c());
    }), (c, t) => {
      const B = C("panel-screen");
      return i(), w("div", Q, [
        T(B, {
          panel: v.panel,
          footer: !0
        }, {
          header: m(() => [
            H(_(r(s)("export.title")), 1)
          ]),
          content: m(() => t[2] || (t[2] = [
            e("div", { class: "overflow-hidden border border-gray-200" }, [
              e("canvas", { class: "export-canvas !w-[100%]" })
            ], -1)
          ])),
          footer: m(() => [
            e("div", X, [
              e("button", {
                type: "button",
                onClick: t[0] || (t[0] = (M) => l.value?.export()),
                class: "bg-green-700 hover:bg-green-800 text-white font-bold py-8 px-4 sm:px-16 mr-8 sm:mr-16",
                "aria-label": r(s)("export.download")
              }, _(r(s)("export.download")), 9, Y),
              e("button", {
                type: "button",
                onClick: t[1] || (t[1] = (M) => r(d)()),
                class: "py-8 px-4 sm:px-16",
                "aria-label": r(s)("export.refresh")
              }, _(r(s)("export.refresh")), 9, Z),
              E.value ? I("", !0) : (i(), k(K, {
                key: 0,
                componentSelectedState: S.value,
                class: "ml-auto flex px-4 sm:px-8"
              }, null, 8, ["componentSelectedState"]))
            ])
          ]),
          _: 1
        }, 8, ["panel"])
      ], 512);
    };
  }
});
export {
  ne as _
};
