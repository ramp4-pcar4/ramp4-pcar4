import { defineComponent as x, defineAsyncComponent as u, inject as b, ref as C, onMounted as w, onBeforeUnmount as A, computed as B, resolveComponent as D, resolveDirective as p, createBlock as a, openBlock as o, withCtx as d, createVNode as F, withDirectives as T, unref as r, createElementBlock as m, Fragment as j, renderList as N, createTextVNode as V, toDisplayString as q } from "vue";
import { useI18n as H } from "vue-i18n";
const M = ["content"], W = /* @__PURE__ */ x({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(v) {
    const f = u(() => import("./header-DkJ3p0xY.js")), _ = u(() => import("./item-BRHrfZEy.js")), { t: s } = H(), g = b("iApi"), e = C(), c = () => {
      e.value._tippy.hide();
    }, l = (t) => {
      t.key === "Tab" && e.value?.matches(":focus") && e.value._tippy.show();
    }, y = (t) => {
      const n = new CustomEvent("refocusLegendItem", { detail: { focusItem: t } });
      e.value?.dispatchEvent(n);
    };
    w(() => {
      e.value?.addEventListener("blur", c), e.value?.addEventListener("keyup", l);
    }), A(() => {
      e.value?.removeEventListener("blur", c), e.value?.removeEventListener("keyup", l);
    });
    const h = B(() => {
      const t = g.fixture.get("legend");
      return t ? [...t.getLegend()] : [];
    });
    return (t, n) => {
      const E = D("panel-screen"), k = p("focus-list"), I = p("tippy");
      return o(), a(E, { panel: v.panel }, {
        header: d(() => [
          V(q(r(s)("legend.title")), 1)
        ]),
        content: d(() => [
          F(r(f)),
          T((o(), m("div", {
            content: r(s)("panels.controls.items"),
            ref_key: "el",
            ref: e
          }, [
            (o(!0), m(j, null, N(h.value, (i) => (o(), a(r(_), {
              legendItem: i,
              key: i.uid,
              onFocusItem: n[0] || (n[0] = (L, O) => y(L))
            }, null, 8, ["legendItem"]))), 128))
          ], 8, M)), [
            [k],
            [I, {
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
  W as default
};
