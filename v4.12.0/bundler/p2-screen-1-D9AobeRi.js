import { defineComponent as i, resolveComponent as a, openBlock as b, createBlock as g, withCtx as o, createTextVNode as r, toDisplayString as s, unref as m, createElementVNode as n } from "vue";
import { useI18n as u } from "vue-i18n";
const d = { class: "flex flex-row justify-center items-center mt-16" }, f = { class: "mt-16" }, h = /* @__PURE__ */ i({
  __name: "p2-screen-1",
  props: {
    panel: { type: Object, required: !0 },
    greeting: { type: String }
  },
  setup(t) {
    const { t: l } = u();
    return (x, e) => {
      const p = a("panel-screen");
      return b(), g(p, { panel: t.panel }, {
        header: o(() => e[2] || (e[2] = [
          r(" Gazebo/Panel 2/Screen A ")
        ])),
        content: o(() => [
          r(s(m(l)("gz.hello")) + " ", 1),
          n("div", d, [
            n("button", {
              type: "button",
              onClick: e[0] || (e[0] = (c) => t.panel.show({
                screen: "p-2-screen-2",
                props: { greeting: "Howdy?" }
              })),
              class: "bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16 m-2"
            }, " Go back to B "),
            n("button", {
              type: "button",
              onClick: e[1] || (e[1] = (c) => t.panel.show("p-2-screen-3")),
              class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2"
            }, " Go to C ")
          ]),
          n("p", f, s(t.greeting), 1)
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  h as default
};
