import { c2 as defineComponent, c3 as useI18n, c7 as resolveDirective, c8 as openBlock, cg as createElementBlock, fn as createBaseVNode, cf as withDirectives, cd as unref, cc as toDisplayString, fm as normalizeClass, ce as createVNode, ca as withCtx, hq as vShow, hR as Transition, hE as createCommentVNode, hs as pushScopeId, ht as popScopeId, hu as _export_sfc, c4 as inject, hQ as useHelpStore, c5 as computed, fo as ref, hS as onBeforeMount, hN as watch, fr as onBeforeUnmount, c6 as resolveComponent, c9 as createBlock, cb as createTextVNode, hT as vModelText, hU as isRef, hG as withKeys, hF as withModifiers, ci as renderList, ch as Fragment, hV as axios } from './main-5658cd6e.js';
import { m as marked } from './marked.esm-4889c960.js';

const _withScopeId = (n) => (pushScopeId("data-v-ecc54d26"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { key: 0 };
const _hoisted_2$1 = ["content"];
const _hoisted_3$1 = { class: "text-lg text-left flex-grow" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }),
  /* @__PURE__ */ createBaseVNode("path", { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" })
], -1));
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = ["innerHTML"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "section",
  props: {
    helpSection: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      const _directive_tippy = resolveDirective("tippy");
      return __props.helpSection.drawn ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", null, [
          withDirectives((openBlock(), createElementBlock("button", {
            type: "button",
            class: "help-section-header flex items-center py-15 px-25 hover:bg-gray-200 cursor-pointer select-none w-full",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("expand")),
            content: unref(t)(
              __props.helpSection.expanded ? "help.section.collapse" : "help.section.expand"
            )
          }, [
            createBaseVNode("span", _hoisted_3$1, toDisplayString(__props.helpSection.header), 1),
            createBaseVNode("div", {
              class: normalizeClass(["dropdown-icon", { "transform -rotate-180": __props.helpSection.expanded }])
            }, _hoisted_5, 2)
          ], 8, _hoisted_2$1)), [
            [_directive_tippy, { placement: "top-end", hideOnClick: false }]
          ]),
          createVNode(Transition, {
            name: "help-item",
            mode: "out-in"
          }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("div", {
                innerHTML: __props.helpSection.info,
                class: "ramp-markdown section-body px-20 pt-5 ml-10 overflow-hidden"
              }, null, 8, _hoisted_6), [
                [vShow, __props.helpSection.expanded]
              ])
            ]),
            _: 1
          })
        ])
      ])) : createCommentVNode("", true);
    };
  }
});

const section_vue_vue_type_style_index_0_scoped_ecc54d26_lang = '';

const HelpSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ecc54d26"]]);

const _hoisted_1 = { class: "h-26 mb-8 mx-8" };
const _hoisted_2 = ["placeholder", "aria-label"];
const _hoisted_3 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const iApi = inject("iApi");
    const helpStore = useHelpStore();
    const { t } = useI18n();
    const location = computed(() => helpStore.location);
    const helpSections = ref([]);
    const originalTextArray = ref([]);
    const watchers = ref([]);
    const noResults = ref(false);
    let numResults;
    let searchTerm;
    function findInfo(searchTerm2, section) {
      const segments = section.info.split(/(<[^>]*>)/);
      for (const [i, segment] of segments.entries()) {
        if (i % 2 === 0) {
          if (segment.toLowerCase().indexOf(searchTerm2.toLowerCase()) > -1) {
            return true;
          }
        }
      }
      return false;
    }
    function highlightSearchTerm(searchTerm2, idx) {
      const originalText = originalTextArray.value[idx];
      const segments = originalText.split(/(<[^>]*>)/);
      let highlightedText = "";
      for (const [i, segment] of segments.entries()) {
        if (i % 2 === 0) {
          highlightedText += segment.replace(
            new RegExp(searchTerm2, "gi"),
            (match) => `<mark>${match}</mark>`
          );
        } else {
          highlightedText += segment;
        }
      }
      helpSections.value[idx].info = highlightedText;
    }
    function doSearch(searchTerm2, sections) {
      numResults = 0;
      sections.forEach((section, index) => {
        section.info = originalTextArray.value[index];
        section.drawn = findInfo(searchTerm2, section) || section.header.toLowerCase().indexOf(searchTerm2.toLowerCase()) > -1;
        numResults = section.drawn ? numResults + 1 : numResults;
        section.expanded = section.drawn && searchTerm2.length > 2;
        if (section.drawn && searchTerm2.length > 2) {
          highlightSearchTerm(searchTerm2, index);
        }
      });
      noResults.value = numResults === 0;
    }
    function toggleExpanded(section) {
      section.expanded = !section.expanded;
    }
    onBeforeMount(() => {
      watchers.value.push(
        watch(
          () => iApi.language,
          (newLocale, oldLocale) => {
            if (newLocale === oldLocale)
              return;
            const renderer = new marked.Renderer();
            const loc = location.value.slice(-1) === "/" ? location.value : `${location.value}/`;
            renderer.image = (href, title, text) => {
              if (href.indexOf("http") === -1) {
                href = `${loc}images/` + href;
              }
              return `<img src="${href}" alt="${text}">`;
            };
            axios.get(`${loc}${newLocale}.md`).then((r) => {
              const reg = /^#\s(.*)\n{2}(?:.+|\n(?!\n{2,}))*/gm;
              let helpMd = r.data.replace(
                new RegExp(String.fromCharCode(13), "g"),
                ""
              );
              helpSections.value = [];
              let section;
              while (section = reg.exec(helpMd)) {
                helpSections.value.push({
                  header: section[1],
                  // parse markdown on info section, split/splice/join removes the header
                  // since we can't put info section into its own regex grouping
                  info: marked(
                    section[0].split("\n").splice(2).join("\n"),
                    {
                      renderer
                    }
                  ),
                  drawn: true,
                  expanded: false
                });
                originalTextArray.value.push(
                  marked(
                    section[0].split("\n").splice(2).join("\n"),
                    {
                      renderer
                    }
                  )
                );
              }
            });
          },
          { immediate: true }
        )
      );
    });
    onBeforeUnmount(() => {
      watchers.value.forEach((unwatch) => unwatch());
    });
    return (_ctx, _cache) => {
      const _component_panel_screen = resolveComponent("panel-screen");
      return openBlock(), createBlock(_component_panel_screen, { panel: __props.panel }, {
        header: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("help.title")), 1)
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            withDirectives(createBaseVNode("input", {
              type: "search",
              class: "rv-help-search-bar border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0",
              placeholder: unref(t)("help.search"),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(searchTerm) ? searchTerm.value = $event : searchTerm = $event),
              "aria-label": unref(t)("help.search"),
              onInput: _cache[1] || (_cache[1] = ($event) => doSearch(unref(searchTerm), helpSections.value)),
              onKeypress: _cache[2] || (_cache[2] = withKeys(withModifiers(() => {
              }, ["prevent"]), ["enter"])),
              enterkeyhint: "done"
            }, null, 40, _hoisted_2), [
              [vModelText, unref(searchTerm)]
            ])
          ]),
          noResults.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createBaseVNode("p", null, toDisplayString(unref(t)("help.noResults")), 1)
          ])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(helpSections.value, (section, idx) => {
            return openBlock(), createBlock(HelpSection, {
              helpSection: section,
              key: idx,
              onExpand: ($event) => toggleExpanded(section)
            }, null, 8, ["helpSection", "onExpand"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});

export { _sfc_main as _ };
