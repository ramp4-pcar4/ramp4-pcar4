import { defineComponent as k, computed as h, resolveComponent as $, resolveDirective as O, withDirectives as R, createBlock as C, openBlock as i, unref as r, withCtx as m, createElementBlock as S, Fragment as j, renderList as V, normalizeClass as y, createElementVNode as e, toDisplayString as w, inject as q, ref as b, useTemplateRef as D, onBeforeMount as N, watch as P, onMounted as A, onBeforeUnmount as F, createCommentVNode as T, createTextVNode as H } from "vue";
import { debounce as I } from "throttle-debounce";
import { useI18n as E } from "vue-i18n";
import { a as U, f as z } from "./main-6dWPqJr6.js";
const W = ["onClick", "aria-label"], G = { class: "md-icon-small inline" }, J = /* @__PURE__ */ k({
  __name: "settings-button",
  props: {
    componentSelectedState: {
      type: Object,
      required: !0
    }
  },
  setup(v) {
    const { t: f } = E(), s = U(), u = z(), _ = h(() => s.mobileView ? "top-end" : "left-end"), n = (a) => {
      a.selectable && u.toggleSelected({
        name: a.name
      });
    };
    return (a, l) => {
      const x = $("dropdown-menu"), p = O("focus-item");
      return R((i(), C(x, {
        position: _.value,
        tooltip: r(f)("export.menu"),
        tooltipPlacement: "top"
      }, {
        header: m(() => l[0] || (l[0] = [
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
          (i(!0), S(j, null, V(v.componentSelectedState, (o) => (i(), S("a", {
            key: o.name,
            onClick: (g) => n(o),
            href: "javascript:;",
            class: y(`text-left text-sm sm:text-base ${o.selectable ? "cursor-pointer" : "cursor-default"}`),
            "aria-label": o.name
          }, [
            e("div", G, [
              (i(), S("svg", {
                height: "20",
                width: "20",
                viewBox: "0 0 24 24",
                class: y(`inline mx-8 ${o.selected ? "" : "invisible"}`)
              }, l[1] || (l[1] = [
                e("g", null, [
                  e("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                ], -1)
              ]), 2)),
              e("span", {
                class: y(`inline ${o.selectable ? "" : "text-gray-300"}
                    `)
              }, w(r(f)(`export.menu.component.${o.name}`)), 3)
            ])
          ], 10, W))), 128))
        ]),
        _: 1
      }, 8, ["position", "tooltip"])), [
        [p]
      ]);
    };
  }
}), K = {
  class: "overflow-hidden border border-gray-200",
  ref: "componentEl"
}, Q = { class: "flex" }, X = ["aria-label"], Y = ["aria-label"], ne = /* @__PURE__ */ k({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(v) {
    const f = v, { t: s } = E(), u = q("iApi"), _ = z(), n = b(), a = b(void 0), l = b(void 0), x = b([]), p = D("componentEl"), o = h(() => _.componentSelectedState), g = h(() => {
      const c = {};
      return n.value && Object.keys(o.value).forEach((t) => {
        c[t] = {
          name: t,
          selected: o.value[t] ?? !1,
          selectable: (n.value?.config)[t]?.selectable ?? !0
        };
      }), c;
    }), L = h(() => !!n.value?.customRendererFunc), d = I(300, () => {
      if (!n.value || !p.value)
        return;
      const c = p.value.querySelector(".export-canvas");
      n.value.make(c, p.value.clientWidth);
    });
    return N(() => {
      f.panel.exportMake = d, x.value.push(
        // Listen for any changes to the settings, and refresh the image when they do change
        P(g, () => {
          d();
        })
      );
    }), A(() => {
      n.value = u.fixture.get("export"), a.value = new ResizeObserver(d), l.value = new ResizeObserver(d), a.value.observe(u.$rootEl), l.value.observe(u.$rootEl.querySelector('[data-cy="export"]'));
    }), F(() => {
      a.value.disconnect(), l.value.disconnect(), x.value.forEach((c) => c());
    }), (c, t) => {
      const B = $("panel-screen");
      return i(), C(B, {
        panel: v.panel,
        footer: !0
      }, {
        header: m(() => [
          H(w(r(s)("export.title")), 1)
        ]),
        content: m(() => [
          e("div", K, t[2] || (t[2] = [
            e("canvas", { class: "export-canvas !w-[100%]" }, null, -1)
          ]), 512)
        ]),
        footer: m(() => [
          e("div", Q, [
            e("button", {
              type: "button",
              onClick: t[0] || (t[0] = (M) => n.value?.export()),
              class: "bg-green-700 hover:bg-green-800 text-white font-bold py-8 px-4 sm:px-16 mr-8 sm:mr-16",
              "aria-label": r(s)("export.download")
            }, w(r(s)("export.download")), 9, X),
            e("button", {
              type: "button",
              onClick: t[1] || (t[1] = (M) => r(d)()),
              class: "py-8 px-4 sm:px-16",
              "aria-label": r(s)("export.refresh")
            }, w(r(s)("export.refresh")), 9, Y),
            L.value ? T("", !0) : (i(), C(J, {
              key: 0,
              componentSelectedState: g.value,
              class: "ml-auto flex px-4 sm:px-8"
            }, null, 8, ["componentSelectedState"]))
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  ne as _
};
