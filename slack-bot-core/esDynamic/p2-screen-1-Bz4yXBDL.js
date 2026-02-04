import { bC as b, bD as c, bJ as i, bL as g, bM as o, bN as u, bO as s, bP as r, bQ as d, fC as n } from "./main-CmejC-so.js";
const m = { class: "flex flex-row justify-center items-center mt-16" }, f = { class: "mt-16" }, C = /* @__PURE__ */ b({
  __name: "p2-screen-1",
  props: {
    panel: { type: Object, required: !0 },
    greeting: { type: String }
  },
  setup(t) {
    const { t: a } = c();
    return (x, e) => {
      const l = i("panel-screen");
      return u(), g(l, { panel: t.panel }, {
        header: o(() => e[2] || (e[2] = [
          s(" Gazebo/Panel 2/Screen A ")
        ])),
        content: o(() => [
          s(r(d(a)("gz.hello")) + " ", 1),
          n("div", m, [
            n("button", {
              type: "button",
              onClick: e[0] || (e[0] = (p) => t.panel.show({
                screen: "p-2-screen-2",
                props: { greeting: "Howdy?" }
              })),
              class: "bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16 m-2"
            }, " Go back to B "),
            n("button", {
              type: "button",
              onClick: e[1] || (e[1] = (p) => t.panel.show("p-2-screen-3")),
              class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2"
            }, " Go to C ")
          ]),
          n("p", f, r(t.greeting), 1)
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  C as default
};
//# sourceMappingURL=p2-screen-1-Bz4yXBDL.js.map
