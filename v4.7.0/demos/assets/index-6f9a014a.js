import { bG as defineComponent, bI as inject, fF as ref, fJ as onMounted, fO as GlobalEvents, fK as onBeforeUnmount, bM as openBlock, bU as createElementBlock, fD as normalizeClass, i8 as pushScopeId, i9 as popScopeId, fE as createBaseVNode, ia as _export_sfc, bB as FixtureInstance } from './main-b03b5063.js';
import './preload-helper-a4975f27.js';

const _withScopeId = (n) => (pushScopeId("data-v-ab5a0be4"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fit: "",
  height: "100%",
  width: "100%",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  focusable: "false"
}, [
  /* @__PURE__ */ createBaseVNode("g", {
    fill: "#545353",
    stroke: "#fff",
    id: "crosshairs"
  }, [
    /* @__PURE__ */ createBaseVNode("ellipse", {
      ry: ".254",
      rx: ".262",
      id: "path3808",
      cx: "12",
      cy: "12",
      "stroke-width": ".076"
    }),
    /* @__PURE__ */ createBaseVNode("path", {
      d: "M.045 12.047l6.093.051 4.264.068v-.332l-4.264.067-6.093.064v.039z",
      id: "rect4632-6",
      "stroke-width": ".09"
    }),
    /* @__PURE__ */ createBaseVNode("path", {
      d: "M12.047 23.955l.051-6.093.068-4.264h-.332l.067 4.264.064 6.093h.039z",
      id: "rect4632-6-0",
      "stroke-width": ".09"
    }),
    /* @__PURE__ */ createBaseVNode("path", {
      d: "M23.955 11.953l-6.093-.051-4.264-.068v.332l4.264-.067 6.093-.064v-.039z",
      id: "rect4632-6-4",
      "stroke-width": ".09"
    }),
    /* @__PURE__ */ createBaseVNode("path", {
      d: "M11.953.045l-.051 6.093-.068 4.264h.332l-.067-4.264-.064-6.093h-.039z",
      id: "rect4632-6-9",
      "stroke-width": ".09"
    })
  ])
], -1));
const _hoisted_2 = [
  _hoisted_1
];
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
      }, _hoisted_2, 2);
    };
  }
});

const crosshairs_vue_vue_type_style_index_0_scoped_ab5a0be4_lang = '';

const CrosshairsV = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ab5a0be4"]]);

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
