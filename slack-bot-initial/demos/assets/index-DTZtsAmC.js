import { bF as defineComponent, bH as inject, bI as ref, bJ as onMounted, fO as GlobalEvents, bK as onBeforeUnmount, bW as createElementBlock, fG as createBaseVNode, fH as normalizeClass, bQ as openBlock, i8 as _export_sfc, bA as FixtureInstance } from './main-h0RsJOaN.js';
import './preload-helper-dJJaZANz.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "crosshairs",
  setup(__props) {
    const iApi = inject("iApi");
    const visible = ref(false);
    const handlers = ref([]);
    onMounted(() => {
      handlers.value.push(
        iApi.event.on(GlobalEvents.MAP_EXTENTCHANGE, () => {
          if (iApi.geo.map.keysActive) {
            visible.value = true;
          }
        })
      );
      handlers.value.push(
        iApi.event.on(GlobalEvents.MAP_FOCUS, () => {
          if (!iApi.geo.map.mouseFocus) {
            visible.value = true;
          }
        })
      );
      handlers.value.push(
        iApi.event.on(GlobalEvents.MAP_MOUSEDOWN, () => {
          visible.value = false;
        })
      );
      handlers.value.push(
        iApi.event.on(GlobalEvents.MAP_BLUR, () => {
          visible.value = false;
        })
      );
    });
    onBeforeUnmount(() => {
      handlers.value.forEach((h) => iApi.event.off(h));
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["crosshairs absolute duration-150 top-1/2 left-1/2 h-230 w-230", { "opacity-0": !visible.value }])
      }, _cache[0] || (_cache[0] = [
        createBaseVNode("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fit: "",
          height: "100%",
          width: "100%",
          preserveAspectRatio: "xMidYMid meet",
          viewBox: "0 0 24 24",
          focusable: "false"
        }, [
          createBaseVNode("g", {
            fill: "#545353",
            stroke: "#fff",
            id: "crosshairs"
          }, [
            createBaseVNode("ellipse", {
              ry: ".254",
              rx: ".262",
              id: "path3808",
              cx: "12",
              cy: "12",
              "stroke-width": ".076"
            }),
            createBaseVNode("path", {
              d: "M.045 12.047l6.093.051 4.264.068v-.332l-4.264.067-6.093.064v.039z",
              id: "rect4632-6",
              "stroke-width": ".09"
            }),
            createBaseVNode("path", {
              d: "M12.047 23.955l.051-6.093.068-4.264h-.332l.067 4.264.064 6.093h.039z",
              id: "rect4632-6-0",
              "stroke-width": ".09"
            }),
            createBaseVNode("path", {
              d: "M23.955 11.953l-6.093-.051-4.264-.068v.332l4.264-.067 6.093-.064v-.039z",
              id: "rect4632-6-4",
              "stroke-width": ".09"
            }),
            createBaseVNode("path", {
              d: "M11.953.045l-.051 6.093-.068 4.264h.332l-.067-4.264-.064-6.093h-.039z",
              id: "rect4632-6-9",
              "stroke-width": ".09"
            })
          ])
        ], -1)
      ]), 2);
    };
  }
});

const CrosshairsV = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9c61d49f"]]);

class CrosshairsFixture extends FixtureInstance {
  added() {
    const { destroy, el } = this.mount(CrosshairsV, {
      app: this.$element
    });
    const innerShell = this.$vApp.$el.getElementsByClassName("inner-shell")[0];
    innerShell.appendChild(el.childNodes[0]);
    this.removed = () => {
      destroy();
    };
  }
}

export { CrosshairsFixture as default };
