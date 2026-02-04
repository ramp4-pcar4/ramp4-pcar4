import { bG as defineComponent, bH as useI18n, bI as inject, bJ as computed, bK as resolveComponent, bM as openBlock, bN as createBlock, bO as withCtx, fE as createBaseVNode, fD as normalizeClass, bR as unref, fL as createCommentVNode, ia as _export_sfc, bU as createElementBlock, mw as detectOverflow, fF as ref, fJ as onMounted, fK as onBeforeUnmount, bL as resolveDirective, bT as withDirectives, i7 as vShow, it as renderSlot, mx as createPopper, i8 as pushScopeId, i9 as popScopeId, my as useNotificationStore, bQ as toDisplayString, fB as usePanelStore, hf as useAppbarStore, fH as onBeforeMount, mz as onUpdated, mA as nextTick, bV as Fragment, bW as renderList, kN as resolveDynamicComponent, bS as createVNode, mB as AboutRampDropdown, fM as getCurrentInstance, bB as FixtureInstance, fO as GlobalEvents } from './main-b03b5063.js';
import './preload-helper-a4975f27.js';

class AppbarItemInstance {
  id;
  /**
   * Optional object containing any options to be passed to the appbar component.
   *
   * @type {object}
   * @memberof AppbarItemInstance
   */
  options;
  /**
   * An actual id of the appbar Vue component to use when rendering in the template.
   *
   * @type {string}
   * @memberof AppbarItemInstance
   */
  componentId;
  constructor(value) {
    const params = {
      options: {},
      ...value
    };
    ({
      id: this.id,
      options: this.options,
      componentId: this.componentId
    } = params);
  }
}

const _hoisted_1$3 = ["innerHTML"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "default-button",
  props: {
    panelId: {
      type: String,
      required: true
    },
    minimize: {
      type: Boolean,
      default: false
    },
    overflow: {
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const iApi = inject("iApi");
    const panelButton = computed(() => iApi?.panel.get(props.panelId)?.button);
    const onClickFunction = () => {
      if (props.minimize) {
        iApi?.panel.toggleMinimize(props.panelId);
      } else {
        iApi?.panel.toggle(props.panelId);
      }
    };
    return (_ctx, _cache) => {
      const _component_appbar_button = resolveComponent("appbar-button");
      return panelButton.value ? (openBlock(), createBlock(_component_appbar_button, {
        key: 0,
        onClickFunction,
        tooltip: unref(t)(panelButton.value.tooltip),
        id: __props.panelId
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(["default fill-current w-24 h-24 ml-8 sm:ml-20", { "ml-20": __props.overflow }]),
            innerHTML: panelButton.value.icon
          }, null, 10, _hoisted_1$3)
        ]),
        _: 1
      }, 8, ["tooltip", "id"])) : createCommentVNode("", true);
    };
  }
});

const divider_vue_vue_type_style_index_0_scoped_207b7a12_lang = '';

const _sfc_main$3 = {};
const _hoisted_1$2 = { class: "border-b p-0 self-center w-2/3" };

function _sfc_render(_ctx, _cache) {
  return (openBlock(), createElementBlock("span", _hoisted_1$2))
}
const Divider = /*#__PURE__*/_export_sfc(_sfc_main$3, [['render',_sfc_render],['__scopeId',"data-v-207b7a12"]]);

var maxSize = {
  name: 'maxSize',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['offset', 'preventOverflow', 'flip'],
  fn: function fn(_ref) {
    var state = _ref.state,
        name = _ref.name,
        options = _ref.options;
    var overflow = detectOverflow(state, options);

    var _ref2 = state.modifiersData.preventOverflow || {
      x: 0,
      y: 0
    },
        x = _ref2.x,
        y = _ref2.y;

    var _state$rects$popper = state.rects.popper,
        width = _state$rects$popper.width,
        height = _state$rects$popper.height;

    var _state$placement$spli = state.placement.split('-'),
        basePlacement = _state$placement$spli[0];

    var widthProp = basePlacement === 'left' ? 'left' : 'right';
    var heightProp = basePlacement === 'top' ? 'top' : 'bottom';
    state.modifiersData[name] = {
      width: width - overflow[widthProp] - x,
      height: height - overflow[heightProp] - y
    };
  }
};

const _withScopeId$1 = (n) => (pushScopeId("data-v-ed73e3ce"), n = n(), popScopeId(), n);
const _hoisted_1$1 = ["content"];
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("svg", {
  class: "fill-current w-24 h-24 m-auto",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }),
  /* @__PURE__ */ createBaseVNode("path", { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
], -1));
const _hoisted_3 = [
  _hoisted_2$1
];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "more-button",
  props: {
    position: {
      type: String,
      default: "right-end"
    },
    popperOptions: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const iApi = inject("iApi");
    const open = ref(false);
    const el = ref();
    const dropdownTrigger = ref();
    const dropdown = ref();
    const popperSetUp = () => {
      open.value = !open.value;
      const applyMaxSize = {
        name: "applyMaxSize",
        enabled: true,
        phase: "beforeWrite",
        requires: ["maxSize"],
        fn({ state }) {
          const { width, height } = state.modifiersData.maxSize;
          state.styles.popper = {
            ...state.styles.popper,
            maxWidth: `${width}px`,
            maxHeight: `${Math.max(80, height) - 38}px`
          };
          state.styles.popper.overflowY = "auto";
          state.styles.popper.overflowX = "hidden";
        }
      };
      const innerShell = iApi.$vApp.$el.querySelector(".inner-shell");
      if (dropdownTrigger.value && dropdown.value) {
        createPopper(
          dropdownTrigger.value,
          dropdown.value,
          {
            placement: props.position || "right-end",
            modifiers: [
              {
                ...maxSize,
                options: {
                  boundary: innerShell
                }
              },
              applyMaxSize,
              {
                name: "offset",
                options: {
                  offset: [0, 5]
                }
              }
            ],
            ...props.popperOptions
          }
        );
      }
    };
    onMounted(() => {
      window.addEventListener(
        "click",
        (event) => {
          if (event.target instanceof HTMLElement && !el.value?.contains(event.target)) {
            open.value = false;
          }
        },
        { capture: true }
      );
    });
    onBeforeUnmount(() => {
      window.removeEventListener(
        "click",
        (event) => {
          if (event.target instanceof HTMLElement && !el.value?.contains(event.target)) {
            open.value = false;
          }
        },
        { capture: true }
      );
    });
    return (_ctx, _cache) => {
      const _directive_focus_item = resolveDirective("focus-item");
      const _directive_tippy = resolveDirective("tippy");
      return openBlock(), createElementBlock("div", {
        class: "appbar-item relative inset-x-0 w-full text-center",
        ref_key: "el",
        ref: el
      }, [
        withDirectives((openBlock(), createElementBlock("button", {
          type: "button",
          class: "text-gray-400 w-full h-48 focus:outline-none hover:text-white",
          onClick: _cache[0] || (_cache[0] = ($event) => popperSetUp()),
          content: unref(t)("appbar.more"),
          ref_key: "dropdownTrigger",
          ref: dropdownTrigger
        }, _hoisted_3, 8, _hoisted_1$1)), [
          [_directive_focus_item],
          [_directive_tippy, { placement: "right-end" }]
        ]),
        withDirectives(createBaseVNode("div", {
          id: "dropdown",
          class: "dropdown shadow-md border border-gray:200 absolute w-64 flex flex-col bg-white rounded",
          ref_key: "dropdown",
          ref: dropdown
        }, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 512), [
          [vShow, open.value]
        ])
      ], 512);
    };
  }
});

const moreButton_vue_vue_type_style_index_0_scoped_ed73e3ce_lang = '';

const MoreButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ed73e3ce"]]);

const _withScopeId = (n) => (pushScopeId("data-v-830e6165"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
  class: "fill-current w-24 h-24 mx-8 sm:mx-20",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" })
], -1));
const _hoisted_2 = {
  key: 0,
  class: "number absolute top-1 right-2 text-white w-18 rounded-full"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "appbar-button",
  setup(__props) {
    const notificationStore = useNotificationStore();
    const { t } = useI18n();
    const iApi = inject("iApi");
    const number = computed(() => notificationStore.notificationNumber);
    const onClick = () => {
      iApi.panel.toggle("notifications");
    };
    return (_ctx, _cache) => {
      const _component_appbar_button = resolveComponent("appbar-button", true);
      return openBlock(), createBlock(_component_appbar_button, {
        onClickFunction: onClick,
        tooltip: unref(t)("notifications.title"),
        class: "notification-button",
        id: ""
      }, {
        default: withCtx(() => [
          _hoisted_1,
          number.value && number.value > 0 ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(number.value), 1)) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
});

const appbarButton_vue_vue_type_style_index_0_scoped_830e6165_lang = '';

const NotificationsAppbarButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-830e6165"]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "appbar",
  setup(__props) {
    const panelStore = usePanelStore();
    const appbarStore = useAppbarStore();
    const items = computed(() => appbarStore.visible);
    const temporaryItems = computed(
      () => appbarStore.temporary
    );
    const overflow = ref(false);
    const overflowFlags = ref({});
    const el = ref();
    onBeforeMount(() => {
      const instance = getCurrentInstance();
      window.addEventListener("resize", () => instance?.proxy?.$forceUpdate());
    });
    onBeforeUnmount(() => {
      const instance = getCurrentInstance();
      window.removeEventListener("resize", () => instance?.proxy?.$forceUpdate());
    });
    onUpdated(() => {
      nextTick(() => {
        const element = el.value;
        let key = void 0;
        let children = [...element.children];
        let bound = children[children.length - 2].getBoundingClientRect().top;
        if (!panelStore.mobileView) {
          bound = element.getBoundingClientRect().bottom - 38;
        }
        let dropdown = element.querySelector("#dropdown");
        for (let i = children.length - 4; i >= 0; i--) {
          let bottom = children[i].getBoundingClientRect().bottom;
          if (bound && dropdown && (bottom > bound || overflow.value && bottom + 56 > bound)) {
            children[i].classList.forEach((cl) => {
              if (cl.includes("identifier")) {
                key = cl.slice(11);
              }
            });
            if (key)
              overflowFlags.value[key] = true;
            if (!overflow.value)
              overflow.value = true;
          } else if (bottom !== 0) {
            break;
          }
        }
        let more = element.querySelector("#more");
        let moreBottom = more.getBoundingClientRect().bottom;
        key = void 0;
        if (overflow.value && bound && more && dropdown && moreBottom !== 0 && (moreBottom <= bound - 56 || dropdown.childElementCount == 1 && moreBottom <= bound)) {
          let buttonsRemaining = dropdown.childElementCount;
          let index = 0;
          while (moreBottom <= bound - 56 || buttonsRemaining == 1) {
            let item = dropdown.children[index];
            if (item) {
              item.classList.forEach((cl) => {
                if (cl.includes("identifier")) {
                  key = cl.slice(11);
                }
              });
              if (key)
                overflowFlags.value[key] = false;
              moreBottom += 48;
              buttonsRemaining -= 1;
              index += 1;
            }
            if (buttonsRemaining === 0) {
              overflow.value = false;
              break;
            }
          }
        }
        Object.keys(overflowFlags.value).forEach((key2) => {
          if (!element.querySelector(`.identifier-${key2}`))
            delete overflowFlags.value[key2];
        });
      });
    });
    return (_ctx, _cache) => {
      const _directive_focus_list = resolveDirective("focus-list");
      return withDirectives((openBlock(), createElementBlock("div", {
        class: "absolute top-0 left-0 bottom-28 flex flex-col w-40 pointer-events-auto appbar z-50 sm:z-20 bg-black-75 sm:w-64 sm:bottom-38",
        ref_key: "el",
        ref: el
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (subArray, index) => {
          return openBlock(), createElementBlock(Fragment, null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(subArray, (item, index2) => {
              return openBlock(), createElementBlock(Fragment, null, [
                typeof item === "string" && overflowFlags.value[`${item}-${index2}`] !== true ? (openBlock(), createBlock(_sfc_main$4, {
                  key: `${item}-${index2}-default`,
                  panelId: item,
                  class: normalizeClass(["appbar-item h-48", `identifier-${item}-${index2}`])
                }, null, 8, ["panelId", "class"])) : overflowFlags.value[`${item}-${index2}`] !== true ? (openBlock(), createBlock(resolveDynamicComponent(item.componentId), {
                  key: `${item}-${index2}-custom`,
                  options: item.options,
                  class: normalizeClass(["appbar-item h-48", `identifier-${item}-${index2}`]),
                  id: item.id
                }, null, 8, ["options", "id", "class"])) : createCommentVNode("", true)
              ], 64);
            }), 256)),
            overflowFlags.value[`divider-${index}`] !== true ? (openBlock(), createBlock(Divider, {
              class: normalizeClass(["appbar-item", `identifier-divider-${index}`]),
              key: `${subArray}-${index}-default`
            }, null, 8, ["class"])) : createCommentVNode("", true)
          ], 64);
        }), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(temporaryItems.value?.filter(
          (t) => overflowFlags.value[`${t}-temp`] !== true
        ), (item) => {
          return openBlock(), createBlock(_sfc_main$4, {
            panelId: item,
            minimize: true,
            key: `${item}-temp`,
            class: normalizeClass([`identifier-${item}-temp`, "appbar-item h-48"])
          }, null, 8, ["panelId", "class"]);
        }), 128)),
        withDirectives(createVNode(MoreButton, { id: "more" }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (subArray, index) => {
              return openBlock(), createElementBlock(Fragment, { key: index }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(subArray, (item, index2) => {
                  return openBlock(), createElementBlock(Fragment, null, [
                    typeof item === "string" && overflowFlags.value[`${item}-${index2}`] ? (openBlock(), createBlock(_sfc_main$4, {
                      key: `${item}-${index2}-default`,
                      panelId: item,
                      class: normalizeClass(["text-black hover:bg-gray my-4 h-36", `identifier-${item}-${index2}`]),
                      overflow: ""
                    }, null, 8, ["panelId", "class"])) : overflowFlags.value[`${item}-${index2}`] ? (openBlock(), createBlock(resolveDynamicComponent(item.componentId), {
                      key: `${item}-${index2}-custom`,
                      options: item.options,
                      id: item.id,
                      class: normalizeClass(["appbar-item h-48", `identifier-${item}-${index2}`])
                    }, null, 8, ["options", "id", "class"])) : createCommentVNode("", true)
                  ], 64);
                }), 256)),
                overflowFlags.value[`divider-${index}`] ? (openBlock(), createBlock(Divider, {
                  key: 0,
                  class: normalizeClass(["border-black my-4", `identifier-divider-${index}`])
                }, null, 8, ["class"])) : createCommentVNode("", true)
              ], 64);
            }), 128)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(temporaryItems.value?.filter(
              (t) => overflowFlags.value[`${t}-temp`]
            ), (item) => {
              return openBlock(), createBlock(_sfc_main$4, {
                panelId: item,
                minimize: true,
                key: `${item}-temp`,
                class: normalizeClass([`identifier-${item}-temp`, "text-black hover:bg-gray my-4 h-36"]),
                overflow: ""
              }, null, 8, ["panelId", "class"]);
            }), 128))
          ]),
          _: 1
        }, 512), [
          [vShow, overflow.value]
        ]),
        createVNode(NotificationsAppbarButton, { class: "appbar-item bottom-48 h-48 sm:display-none" }),
        createVNode(AboutRampDropdown, {
          class: "absolute bottom-0 h-40 sm:display-none w-full text-center",
          position: "right-start"
        })
      ])), [
        [_directive_focus_list]
      ]);
    };
  }
});

const appbar_vue_vue_type_style_index_0_lang = '';

class AppbarAPI extends FixtureInstance {
  /**
   * Returns `AppbarFixtureConfig` section of the global config file.
   *
   * @readonly
   * @type {AppbarFixtureConfig}
   * @memberof AppbarFixture
   */
  get config() {
    return super.config;
  }
  /**
   * Parses the appbar config JSON snippet from the config file and save resulting objects to the fixture store.
   *
   * @param {AppbarFixtureConfig} [appbarConfig]
   * @returns
   * @memberof AppbarAPI
   */
  _parseConfig(appbarConfig) {
    if (!appbarConfig) {
      return;
    }
    const appbarStore = useAppbarStore(this.$vApp.$pinia);
    let config;
    if (!Array.isArray(appbarConfig.items[0])) {
      config = [appbarConfig.items];
    } else {
      config = appbarConfig.items;
    }
    const appbarItems = [];
    config.forEach((appbarItemList) => {
      appbarItems.push(
        appbarItemList.map((item) => {
          if (typeof item === "string") {
            return item;
          }
          return new AppbarItemInstance(item);
        })
      );
    });
    appbarStore.items = appbarItems.flat().reduce((map, item) => {
      map[item instanceof AppbarItemInstance ? item.id : item] = item;
      return map;
    }, {});
    appbarStore.order = appbarItems.map(
      (subArray) => subArray.map(
        (item) => item instanceof AppbarItemInstance ? item.id : item
      )
    );
    this._validateItems();
  }
  /**
   * Checks if components specified as appbar items are registered or not.
   *
   * @memberof AppbarAPI
   */
  _validateItems() {
    const appbarStore = useAppbarStore(this.$vApp.$pinia);
    appbarStore.order.flat().forEach((id) => {
      if (typeof appbarStore.items[id] === "string") {
        return;
      }
      [id].some((v) => {
        if (this.$iApi.fixture.exists(v) && !appbarStore.items[id]) {
          appbarStore.items[id].componentId = `${v}-appbar-button`;
        }
      });
    });
  }
}

const messages = {"en":{"appbar.navigation":"Navigation","appbar.more":"More","navigation.export":"Export","navigation.map.export":"Export Map"},"fr":{"appbar.navigation":"Navigation","appbar.more":"Plus","navigation.export":"Exporter","navigation.map.export":"Exporter la Carte"}};

class AppbarFixture extends AppbarAPI {
  initialized() {
  }
  async added() {
    Object.entries(messages).forEach(
      (value) => this.$iApi.$i18n.mergeLocaleMessage(...value)
    );
    const { destroy, el } = this.mount(_sfc_main, {
      app: this.$element
    });
    const innerShell = this.$vApp.$el.getElementsByClassName("inner-shell")[0];
    innerShell.insertBefore(
      el.childNodes[0],
      innerShell.querySelector(".panel-stack")
    );
    this._parseConfig(this.config);
    const unwatch = this.$vApp.$watch(
      () => this.config,
      (value) => this._parseConfig(value)
    );
    const eventHandlers = [];
    eventHandlers.push(
      this.$iApi.event.on(GlobalEvents.COMPONENT, () => {
        this._parseConfig(this.config);
      })
    );
    this.removed = () => {
      const appbarStore = useAppbarStore(this.$vApp.$pinia);
      unwatch();
      eventHandlers.forEach((h) => this.$iApi.event.off(h));
      const items = { ...appbarStore.items };
      const tempItems = [...appbarStore.temporary];
      Object.keys(items).forEach((item) => appbarStore.removeButton(item));
      tempItems.forEach((item) => appbarStore.removeButton(item));
      destroy();
      appbarStore.$reset();
    };
  }
}

export { AppbarFixture as default };
