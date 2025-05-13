import { bC as p, bx as i, bF as r, bG as u, bT as m, fC as c, bN as l, bE as d, bJ as b, bL as _, bM as h } from "./main-DIdq27YS.js";
const f = ["src"], x = /* @__PURE__ */ p({
  __name: "snowman",
  props: {
    fixture: {
      type: i,
      required: !0
    },
    message: String
  },
  setup(s) {
    const e = s, t = r(), o = r("https://i.imgur.com/p13yknD.png");
    return u(() => {
      setTimeout(() => {
        t.value.parentNode.removeChild(t.value), e.fixture.remove();
      }, 6e3);
    }), (n, a) => (l(), m("div", {
      class: "absolute top-0 right-0",
      ref_key: "el",
      ref: t
    }, [
      c("img", {
        style: { width: "250px" },
        src: o.value,
        alt: "Snowman",
        srcset: ""
      }, null, 8, f)
    ], 512));
  }
}), g = /* @__PURE__ */ p({
  __name: "appbar-button",
  setup(s) {
    const e = d("iApi"), t = () => {
      e.fixture.add("snowman");
    };
    return (o, n) => {
      const a = b("appbar-button", !0);
      return l(), _(a, {
        onClickFunction: t,
        tooltip: "⛄"
      }, {
        default: h(() => n[0] || (n[0] = [
          c("span", { class: "block h-24" }, "⛄", -1)
        ])),
        _: 1
      });
    };
  }
});
class w extends i {
  added() {
    this.$iApi.component("snowman-appbar-button", g);
    const { el: e } = this.mount(x, {
      app: this.$element,
      props: { message: "This is a snowman prop.", fixture: this }
    });
    this.$vApp.$el.appendChild(e.childNodes[0]);
  }
  removed() {
  }
}
export {
  w as default
};
//# sourceMappingURL=index-DmMWZgWx.js.map
