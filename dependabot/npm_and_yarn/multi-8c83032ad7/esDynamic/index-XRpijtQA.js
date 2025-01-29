import { c1 as c, bY as p, c4 as r, c5 as u, ci as m, fV as i, cc as l, c3 as d, c8 as _, ca as h, cb as f } from "./main-C4pF0E7B.js";
const b = ["src"], x = /* @__PURE__ */ c({
  __name: "snowman",
  props: {
    fixture: {
      type: p,
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
      i("img", {
        style: { width: "250px" },
        src: o.value,
        alt: "Snowman",
        srcset: ""
      }, null, 8, b)
    ], 512));
  }
}), g = /* @__PURE__ */ c({
  __name: "appbar-button",
  setup(s) {
    const e = d("iApi"), t = () => {
      e.fixture.add("snowman");
    };
    return (o, n) => {
      const a = _("appbar-button", !0);
      return l(), h(a, {
        onClickFunction: t,
        tooltip: "⛄"
      }, {
        default: f(() => n[0] || (n[0] = [
          i("span", { class: "block h-24" }, "⛄", -1)
        ])),
        _: 1
      });
    };
  }
});
class w extends p {
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
//# sourceMappingURL=index-XRpijtQA.js.map
