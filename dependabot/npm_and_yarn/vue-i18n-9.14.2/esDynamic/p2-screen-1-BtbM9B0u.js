import { c1 as p, c2 as i, c8 as b, ca as g, cb as o, cc as u, cd as s, ce as r, cf as d, fV as n } from "./main-uCo5F72j.js";
const f = { class: "flex flex-row justify-center items-center mt-16" }, m = { class: "mt-16" }, w = /* @__PURE__ */ p({
  __name: "p2-screen-1",
  props: {
    panel: { type: Object, required: !0 },
    greeting: { type: String }
  },
  setup(t) {
    const { t: a } = i();
    return (x, e) => {
      const c = b("panel-screen");
      return u(), g(c, { panel: t.panel }, {
        header: o(() => e[2] || (e[2] = [
          s(" Gazebo/Panel 2/Screen A ")
        ])),
        content: o(() => [
          s(r(d(a)("gz.hello")) + " ", 1),
          n("div", f, [
            n("button", {
              type: "button",
              onClick: e[0] || (e[0] = (l) => t.panel.show({
                screen: "p-2-screen-2",
                props: { greeting: "Howdy?" }
              })),
              class: "bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16 m-2"
            }, " Go back to B "),
            n("button", {
              type: "button",
              onClick: e[1] || (e[1] = (l) => t.panel.show("p-2-screen-3")),
              class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2"
            }, " Go to C ")
          ]),
          n("p", m, r(t.greeting), 1)
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  w as default
};
//# sourceMappingURL=p2-screen-1-BtbM9B0u.js.map
