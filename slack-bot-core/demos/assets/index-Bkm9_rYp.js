import { bF as defineComponent, bA as FixtureInstance, bI as ref, bJ as onMounted, bW as createElementBlock, fG as createBaseVNode, bQ as openBlock, bH as inject, bM as resolveComponent, bO as createBlock, bP as withCtx } from './main-B92PJIAd.js';
import './preload-helper-dJJaZANz.js';

const _hoisted_1 = ["src"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "snowman",
  props: {
    fixture: {
      type: FixtureInstance,
      required: true
    },
    message: String
  },
  setup(__props) {
    const props = __props;
    const el = ref();
    const url = ref("https://i.imgur.com/p13yknD.png");
    onMounted(() => {
      setTimeout(() => {
        el.value.parentNode.removeChild(el.value);
        props.fixture.remove();
      }, 6e3);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "absolute top-0 right-0",
        ref_key: "el",
        ref: el
      }, [
        createBaseVNode("img", {
          style: { "width": "250px" },
          src: url.value,
          alt: "Snowman",
          srcset: ""
        }, null, 8, _hoisted_1)
      ], 512);
    };
  }
});

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "appbar-button",
  setup(__props) {
    const iApi = inject("iApi");
    const togglePanel = () => {
      iApi.fixture.add("snowman");
    };
    return (_ctx, _cache) => {
      const _component_appbar_button = resolveComponent("appbar-button", true);
      return openBlock(), createBlock(_component_appbar_button, {
        onClickFunction: togglePanel,
        tooltip: "⛄"
      }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createBaseVNode("span", { class: "block h-24" }, "⛄", -1)
        ])),
        _: 1
      });
    };
  }
});

class SnowmanFixture extends FixtureInstance {
  added() {
    this.$iApi.component("snowman-appbar-button", _sfc_main);
    const { el } = this.mount(_sfc_main$1, {
      app: this.$element,
      props: { message: "This is a snowman prop.", fixture: this }
    });
    this.$vApp.$el.appendChild(el.childNodes[0]);
  }
  removed() {
  }
}

export { SnowmanFixture as default };
