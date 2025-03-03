import { defineComponent as x, defineAsyncComponent as s, inject as L, ref as b, onMounted as A, onBeforeUnmount as B, computed as C, resolveComponent as I, resolveDirective as p, openBlock as n, createBlock as u, withCtx as a, createTextVNode as w, toDisplayString as D, unref as o, createVNode as j, withDirectives as N, createElementBlock as d, Fragment as T, renderList as V } from "vue";
import { useI18n as q } from "vue-i18n";
const F = ["content"], O = /* @__PURE__ */ x({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(m) {
    const v = s(() => import("./header-BO4cgFar.js")), _ = s(() => import("./item-DNlUcgxj.js")), { t: r } = q(), f = L("iApi"), e = b(), c = () => {
      e.value._tippy.hide();
    }, i = (t) => {
      t.key === "Tab" && e.value?.matches(":focus") && e.value._tippy.show();
    };
    A(() => {
      e.value?.addEventListener("blur", c), e.value?.addEventListener("keyup", i);
    }), B(() => {
      e.value?.removeEventListener("blur", c), e.value?.removeEventListener("keyup", i);
    });
    const g = C(() => {
      const t = f.fixture.get("legend");
      return t ? [...t.getLegend()] : [];
    });
    return (t, y) => {
      const h = I("panel-screen"), k = p("focus-list"), E = p("tippy");
      return n(), u(h, { panel: m.panel }, {
        header: a(() => [
          w(D(o(r)("legend.title")), 1)
        ]),
        content: a(() => [
          j(o(v)),
          N((n(), d("div", {
            content: o(r)("panels.controls.items"),
            ref_key: "el",
            ref: e
          }, [
            (n(!0), d(T, null, V(g.value, (l) => (n(), u(o(_), {
              legendItem: l,
              key: l.uid
            }, null, 8, ["legendItem"]))), 128))
          ], 8, F)), [
            [k],
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
  O as default
};
