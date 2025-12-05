import { defineComponent as M, resolveDirective as H, createElementBlock as x, createCommentVNode as R, openBlock as u, createElementVNode as r, withDirectives as b, createVNode as I, unref as s, toDisplayString as $, normalizeClass as N, Transition as z, withCtx as k, vShow as A, inject as D, computed as q, ref as g, onBeforeMount as K, watch as U, onBeforeUnmount as F, resolveComponent as G, createBlock as L, withKeys as J, withModifiers as P, isRef as Q, vModelText as W, Fragment as X, renderList as Y, createTextVNode as Z } from "vue";
import { _ as ee, j as te } from "./main-MXZmlokj.js";
import { useI18n as T } from "vue-i18n";
import ne from "redaxios";
import { marked as _ } from "marked";
const oe = { key: 0 }, le = ["content"], re = { class: "text-lg text-left flex-grow" }, ie = ["innerHTML"], ae = /* @__PURE__ */ M({
  __name: "section",
  props: {
    helpSection: {
      type: Object,
      required: !0
    }
  },
  setup(a) {
    const { t: w } = T();
    return (y, i) => {
      const h = H("tippy");
      return a.helpSection.drawn ? (u(), x("div", oe, [
        r("div", null, [
          b((u(), x("button", {
            type: "button",
            class: "help-section-header flex items-center py-15 px-25 hover:bg-gray-200 cursor-pointer select-none w-full",
            onClick: i[0] || (i[0] = (p) => y.$emit("expand")),
            content: s(w)(a.helpSection.expanded ? "help.section.collapse" : "help.section.expand")
          }, [
            r("span", re, $(a.helpSection.header), 1),
            r("div", {
              class: N(["dropdown-icon", { "transform -rotate-180": a.helpSection.expanded }])
            }, i[1] || (i[1] = [
              r("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                height: "24",
                viewBox: "0 0 24 24",
                width: "24"
              }, [
                r("path", {
                  d: "M0 0h24v24H0V0z",
                  fill: "none"
                }),
                r("path", { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" })
              ], -1)
            ]), 2)
          ], 8, le)), [
            [h, { placement: "top-end", hideOnClick: !1 }]
          ]),
          I(z, {
            name: "help-item",
            mode: "out-in"
          }, {
            default: k(() => [
              b(r("div", {
                innerHTML: a.helpSection.info,
                class: "ramp-markdown section-body px-20 pt-5 ml-10 overflow-hidden"
              }, null, 8, ie), [
                [A, a.helpSection.expanded]
              ])
            ]),
            _: 1
          })
        ])
      ])) : R("", !0);
    };
  }
}), se = /* @__PURE__ */ ee(ae, [["__scopeId", "data-v-7dc61532"]]), pe = { class: "h-26 mb-8 mx-8" }, de = ["placeholder", "aria-label"], ce = { key: 0 }, ge = /* @__PURE__ */ M({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(a) {
    const w = D("iApi"), y = te(), { t: i } = T(), h = q(() => y.location), p = g([]), S = g([]), C = g([]), E = g(!1);
    let f, m;
    function j(e, o) {
      const t = o.info.split(/(<[^>]*>)/);
      for (const [n, l] of t.entries())
        if (n % 2 === 0 && l.toLowerCase().indexOf(e.toLowerCase()) > -1)
          return !0;
      return !1;
    }
    function B(e, o) {
      const n = S.value[o].split(/(<[^>]*>)/);
      let l = "";
      for (const [v, d] of n.entries())
        v % 2 === 0 ? l += d.replace(
          new RegExp(e, "gi"),
          (c) => `<mark>${c}</mark>`
        ) : l += d;
      p.value[o].info = l;
    }
    function O(e, o) {
      f = 0, o.forEach((t, n) => {
        t.info = S.value[n], t.drawn = j(e, t) || t.header.toLowerCase().indexOf(e.toLowerCase()) > -1, f = t.drawn ? f + 1 : f, t.expanded = t.drawn && e.length > 2, t.drawn && e.length > 2 && B(e, n);
      }), E.value = f === 0;
    }
    function V(e) {
      e.expanded = !e.expanded;
    }
    return K(() => {
      C.value.push(
        U(
          () => w.language,
          (e, o) => {
            if (e === o) return;
            const t = new _.Renderer(), n = h.value.slice(-1) === "/" ? h.value : `${h.value}/`;
            t.image = (l, v, d) => (l.indexOf("http") === -1 && (l = `${n}images/` + l), `<img src="${l}" alt="${d}">`), ne.get(`${n}${e}.md`).then((l) => {
              const v = /^#\s(.*)\n{2}(?:.+|\n(?!\n{2,}))*/gm, d = l.data.replace(new RegExp("\r", "g"), "");
              p.value = [];
              let c;
              for (; c = v.exec(d); )
                p.value.push({
                  header: c[1],
                  // parse markdown on info section, split/splice/join removes the header
                  // since we can't put info section into its own regex grouping
                  info: _(c[0].split(`
`).splice(2).join(`
`), {
                    renderer: t
                  }),
                  drawn: !0,
                  expanded: !1
                }), S.value.push(
                  _(c[0].split(`
`).splice(2).join(`
`), {
                    renderer: t
                  })
                );
            });
          },
          { immediate: !0 }
        )
      );
    }), F(() => {
      C.value.forEach((e) => e());
    }), (e, o) => {
      const t = G("panel-screen");
      return u(), L(t, { panel: a.panel }, {
        header: k(() => [
          Z($(s(i)("help.title")), 1)
        ]),
        content: k(() => [
          r("div", pe, [
            b(r("input", {
              type: "search",
              class: "rv-help-search-bar border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0",
              placeholder: s(i)("help.search"),
              "onUpdate:modelValue": o[0] || (o[0] = (n) => Q(m) ? m.value = n : m = n),
              "aria-label": s(i)("help.search"),
              onInput: o[1] || (o[1] = (n) => O(s(m), p.value)),
              onKeypress: o[2] || (o[2] = J(P(() => {
              }, ["prevent"]), ["enter"])),
              enterkeyhint: "done"
            }, null, 40, de), [
              [W, s(m)]
            ])
          ]),
          E.value ? (u(), x("div", ce, [
            r("p", null, $(s(i)("help.noResults")), 1)
          ])) : R("", !0),
          (u(!0), x(X, null, Y(p.value, (n, l) => (u(), L(se, {
            helpSection: n,
            key: l,
            onExpand: (v) => V(n)
          }, null, 8, ["helpSection", "onExpand"]))), 128))
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  ge as default
};
