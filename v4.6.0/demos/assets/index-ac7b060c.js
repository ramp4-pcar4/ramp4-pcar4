import { co as defineComponent, cj as FixtureInstance, fH as ref, fJ as onMounted, cu as openBlock, cC as createElementBlock, fG as createBaseVNode, cq as inject, cs as resolveComponent, cv as createBlock, cw as withCtx } from './main-8822140d.js';
import './preload-helper-a4975f27.js';

const _hoisted_1$1 = ["src"];
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
        }, null, 8, _hoisted_1$1)
      ], 512);
    };
  }
});

const _hoisted_1 = /* @__PURE__ */ createBaseVNode("span", { class: "block h-24" }, "⛄", -1);
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
        default: withCtx(() => [
          _hoisted_1
        ]),
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
