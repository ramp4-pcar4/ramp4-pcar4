import { c1 as c, c3 as h, c4 as r, c5 as d, g1 as o, c6 as p, ci as u, fV as t, fW as v, cc as f, ix as m, bY as _ } from "./main-DMoCLB29.js";
const w = /* @__PURE__ */ c({
  __name: "crosshairs",
  setup(n) {
    const e = h("iApi"), s = r(!1), a = r([]);
    return d(() => {
      a.value.push(
        e.event.on(o.MAP_EXTENTCHANGE, () => {
          e.geo.map.keysActive && (s.value = !0);
        })
      ), a.value.push(
        e.event.on(o.MAP_FOCUS, () => {
          e.geo.map.mouseFocus || (s.value = !0);
        })
      ), a.value.push(
        e.event.on(o.MAP_MOUSEDOWN, () => {
          s.value = !1;
        })
      ), a.value.push(
        e.event.on(o.MAP_BLUR, () => {
          s.value = !1;
        })
      );
    }), p(() => {
      a.value.forEach((i) => e.event.off(i));
    }), (i, l) => (f(), u("div", {
      class: v(["crosshairs absolute duration-150 top-1/2 left-1/2 h-230 w-230", { "opacity-0": !s.value }])
    }, l[0] || (l[0] = [
      t("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fit: "",
        height: "100%",
        width: "100%",
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 24 24",
        focusable: "false"
      }, [
        t("g", {
          fill: "#545353",
          stroke: "#fff",
          id: "crosshairs"
        }, [
          t("ellipse", {
            ry: ".254",
            rx: ".262",
            id: "path3808",
            cx: "12",
            cy: "12",
            "stroke-width": ".076"
          }),
          t("path", {
            d: "M.045 12.047l6.093.051 4.264.068v-.332l-4.264.067-6.093.064v.039z",
            id: "rect4632-6",
            "stroke-width": ".09"
          }),
          t("path", {
            d: "M12.047 23.955l.051-6.093.068-4.264h-.332l.067 4.264.064 6.093h.039z",
            id: "rect4632-6-0",
            "stroke-width": ".09"
          }),
          t("path", {
            d: "M23.955 11.953l-6.093-.051-4.264-.068v.332l4.264-.067 6.093-.064v-.039z",
            id: "rect4632-6-4",
            "stroke-width": ".09"
          }),
          t("path", {
            d: "M11.953.045l-.051 6.093-.068 4.264h.332l-.067-4.264-.064-6.093h-.039z",
            id: "rect4632-6-9",
            "stroke-width": ".09"
          })
        ])
      ], -1)
    ]), 2));
  }
}), x = /* @__PURE__ */ m(w, [["__scopeId", "data-v-55a2f166"]]);
class A extends _ {
  added() {
    const { destroy: e, el: s } = this.mount(x, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(s.childNodes[0]), this.removed = () => {
      e();
    };
  }
}
export {
  A as default
};
//# sourceMappingURL=index-CbDXjxOV.js.map
