import { co as defineComponent, hz as useMetadataStore, cp as useI18n, cq as inject, fH as ref, cr as computed, iu as reactive, fJ as onMounted, fN as GlobalEvents, iv as watch, fK as onBeforeUnmount, cs as resolveComponent, cu as openBlock, cv as createBlock, cw as withCtx, cx as createTextVNode, cy as toDisplayString, cz as unref, cC as createElementBlock, fG as createBaseVNode } from './main-8822140d.js';
import { m as marked } from './marked.esm-4889c960.js';

const XSLT_en = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<xsl:stylesheet version=\"1.0\"\n                xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\"\n                xmlns:gmd=\"http://www.isotc211.org/2005/gmd\"\n                xmlns:gco=\"http://www.isotc211.org/2005/gco\"\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                xmlns:gmdl=\"http://www.canada.gc.ca/ns/gmdl\"\n                xmlns:napec=\"http://www.ec.gc.ca/data_donnees/standards/schemas/napec\"\n                xmlns:gml=\"http://www.opengis.net/gml\"\n                xmlns:geonet=\"http://www.fao.org/geonetwork\"\n                xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n                xsi:schemaLocation=\"http://www.ec.gc.ca/data_donnees/standards/schemas/napec/schema.xsd\">\n\n  <xsl:param name=\"catalogue_url\" />\n  <xsl:decimal-format NaN=\"\"/>\n\n  <xsl:template match=\"/\">\n\n    <div class=\"metadata-view\">\n\n      <xsl:if test=\"//gmd:abstract/gco:CharacterString/text() != ''\">\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.Abstract}}</h5>\n        <p>\n          <xsl:value-of select=\"//gmd:abstract/gco:CharacterString/text()\" />\n        </p>\n      </xsl:if>\n\n      <xsl:comment>\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.Scope}}</h5>\n        <p>{{metadata.xslt.hereBeScope}}</p>\n      </xsl:comment>\n\n      <xsl:if test=\"//gml:TimePeriod//* != ''\">\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.timePeriod}}</h5>\n        <p>\n          <xsl:value-of select=\"//gml:TimePeriod//gml:beginPosition\" />\n          <xsl:if test=\"//gml:TimePeriod//gml:beginPosition/text() != '' and //gml:TimePeriod//gml:endPosition/text() != ''\">\n            -\n          </xsl:if>\n          <xsl:value-of select=\"//gml:TimePeriod//gml:endPosition\" />\n        </p>\n      </xsl:if>\n\n      <xsl:comment>\n        <xsl:if test=\"//gmd:supplementalInformation/gco:CharacterString/text() != ''\">\n          <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.supplementalData}}</h5>\n          <p>\n            <xsl:value-of select=\"//gmd:supplementalInformation/gco:CharacterString/text()\" />\n          </p>\n        </xsl:if>\n      </xsl:comment>\n\n      <xsl:if test=\"//gmd:pointOfContact//gmd:individualName/* != '' \n              or //gmd:pointOfContact//gmd:organisationName/gco:CharacterString/text() != ''\n              or //gmd:pointOfContact//gmd:positionName/gco:CharacterString/text() != ''\n              or //gmd:pointOfContact//gmd:electronicMailAddress/* != ''\n              or //gmd:pointOfContact//gmd:role/gmd:CI_RoleCode/@codeListValue != ''\">\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.contactInfo}}</h5>\n        <p>\n          <xsl:value-of select=\"//gmd:pointOfContact//gmd:individualName\" />\n        </p>\n        <p>\n          <xsl:value-of select=\"//gmd:pointOfContact//gmd:organisationName/gco:CharacterString/text()\" />\n        </p>\n        <p>\n          <xsl:value-of select=\"//gmd:pointOfContact//gmd:positionName/gco:CharacterString/text()\" />\n        </p>\n        <p>\n          <a href=\"mailto:{//gmd:pointOfContact//gmd:electronicMailAddress/gco:CharacterString/text()}?Subject={//gmd:identificationInfo//gmd:title/gco:CharacterString/text()}\">\n            <xsl:value-of select=\"//gmd:pointOfContact//gmd:electronicMailAddress\" />\n          </a>\n        </p>\n        <p>\n          <xsl:variable name=\"roleCode\" >\n            <xsl:value-of select=\"concat(substring(//gmd:pointOfContact//gmd:role/gmd:CI_RoleCode/@codeListValue,1,1),\n                        substring(//gmd:pointOfContact//gmd:role/gmd:CI_RoleCode/@codeListValue, 2))\" />\n          </xsl:variable>\n\n          <xsl:choose>\n            <xsl:when test=\"$roleCode = 'resourceProvider'\">{{metadata.xslt.resourceProvider}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'custodian'\">{{metadata.xslt.custodian}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'owner'\">{{metadata.xslt.owner}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'user'\">{{metadata.xslt.user}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'distributor'\">{{metadata.xslt.distributor}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'originator'\">{{metadata.xslt.originator}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'pointOfContact'\">{{metadata.xslt.pointOfContact}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'principalInvestigator'\">{{metadata.xslt.principalInvestigator}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'processor'\">{{metadata.xslt.processor}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'publisher'\">{{metadata.xslt.publisher}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'author'\">{{metadata.xslt.author}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'collaborator'\">{{metadata.xslt.collaborator}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'editor'\">{{metadata.xslt.editor}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'mediator'\">{{metadata.xslt.mediator}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'rightsHolder'\">{{metadata.xslt.rightsHolder}}</xsl:when>\n          </xsl:choose>\n        </p>\n      </xsl:if>\n\n      <xsl:if test=\"$catalogue_url != ''\">\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.cataloguePage}}</h5>\n        <p>\n          <a href=\"{$catalogue_url}\"\n             rel=\"external\" target=\"_blank\" class=\"ui-link\">\n            {{metadata.xslt.metadata}}\n          </a>\n        </p>\n      </xsl:if>\n    </div>\n  </xsl:template>\n</xsl:stylesheet>\n";

const XSLT_fr = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<xsl:stylesheet version=\"1.0\"\n                xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\"\n                xmlns:gmd=\"http://www.isotc211.org/2005/gmd\"\n                xmlns:gco=\"http://www.isotc211.org/2005/gco\"\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                xmlns:gmdl=\"http://www.canada.gc.ca/ns/gmdl\"\n                xmlns:napec=\"http://www.ec.gc.ca/data_donnees/standards/schemas/napec\"\n                xmlns:gml=\"http://www.opengis.net/gml\"\n                xmlns:geonet=\"http://www.fao.org/geonetwork\"\n                xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n                xsi:schemaLocation=\"http://www.ec.gc.ca/data_donnees/standards/schemas/napec/schema.xsd\">\n\n  <xsl:param name=\"catalogue_url\" />\n  <xsl:decimal-format NaN=\"\"/>\n\n  <xsl:template match=\"/\">\n\n    <div class=\"metadata-view\">\n\n      <xsl:if test=\"//gmd:abstract//gmd:LocalisedCharacterString[@locale='#fra']/text() != ''\">\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.Abstract}}</h5>\n        <p>\n          <xsl:value-of select=\"//gmd:abstract//gmd:LocalisedCharacterString[@locale='#fra']/text()\" />\n        </p>\n      </xsl:if>\n\n      <xsl:comment>\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.Scope}}</h5>\n        <p>{{metadata.xslt.hereBeScope}}</p>\n      </xsl:comment>\n\n      <xsl:if test=\"//gml:TimePeriod//* != ''\">\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.timePeriod}}</h5>\n        <p>\n          <xsl:value-of select=\"//gml:TimePeriod//gml:beginPosition\" />\n          <xsl:if test=\"//gml:TimePeriod//gml:beginPosition/text() != '' and //gml:TimePeriod//gml:endPosition/text() != ''\">\n            -\n          </xsl:if>\n          <xsl:value-of select=\"//gml:TimePeriod//gml:endPosition\" />\n        </p>\n      </xsl:if>\n\n      <xsl:comment>\n        <xsl:if test=\"//gmd:supplementalInformation//gmd:LocalisedCharacterString[@locale='#fra']/text() != ''\">\n          <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.supplementalData}}</h5>\n          <p>\n            <xsl:value-of select=\"//gmd:supplementalInformation//gmd:LocalisedCharacterString[@locale='#fra']/text()\" />\n          </p>\n        </xsl:if>\n      </xsl:comment>\n\n      <xsl:if test=\"//gmd:pointOfContact//gmd:individualName/* != '' \n              or //gmd:pointOfContact//gmd:organisationName//gmd:LocalisedCharacterString[@locale='#fra']/text() != ''\n              or //gmd:pointOfContact//gmd:positionName//gmd:LocalisedCharacterString[@locale='#fra']/text() != ''\n              or //gmd:pointOfContact//gmd:electronicMailAddress/* != ''\n              or //gmd:pointOfContact//gmd:role/gmd:CI_RoleCode/@codeListValue != ''\">\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.contactInfo}}</h5>\n        <p>\n          <xsl:value-of select=\"//gmd:pointOfContact//gmd:individualName\" />\n        </p>\n        <p>\n          <xsl:value-of select=\"//gmd:pointOfContact//gmd:organisationName//gmd:LocalisedCharacterString[@locale='#fra']/text()\" />\n        </p>\n        <p>\n          <xsl:value-of select=\"//gmd:pointOfContact//gmd:positionName//gmd:LocalisedCharacterString[@locale='#fra']/text()\" />\n        </p>\n        <p>\n          <a href=\"mailto:{//gmd:pointOfContact//gmd:electronicMailAddress//gmd:LocalisedCharacterString[@locale='#fra']/text()}?Subject={//gmd:identificationInfo//gmd:title//gmd:LocalisedCharacterString[@locale='#fra']/text()}\">\n            <xsl:value-of select=\"//gmd:pointOfContact//gmd:electronicMailAddress\" />\n          </a>\n        </p>\n        <p>\n          <xsl:variable name=\"roleCode\" >\n            <xsl:value-of select=\"concat(substring(//gmd:pointOfContact//gmd:role/gmd:CI_RoleCode/@codeListValue,1,1),\n                        substring(//gmd:pointOfContact//gmd:role/gmd:CI_RoleCode/@codeListValue, 2))\" />\n          </xsl:variable>\n\n          <xsl:choose>\n            <xsl:when test=\"$roleCode = 'resourceProvider'\">{{metadata.xslt.resourceProvider}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'custodian'\">{{metadata.xslt.custodian}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'owner'\">{{metadata.xslt.owner}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'user'\">{{metadata.xslt.user}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'distributor'\">{{metadata.xslt.distributor}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'originator'\">{{metadata.xslt.originator}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'pointOfContact'\">{{metadata.xslt.pointOfContact}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'principalInvestigator'\">{{metadata.xslt.principalInvestigator}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'processor'\">{{metadata.xslt.processor}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'publisher'\">{{metadata.xslt.publisher}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'author'\">{{metadata.xslt.author}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'collaborator'\">{{metadata.xslt.collaborator}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'editor'\">{{metadata.xslt.editor}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'mediator'\">{{metadata.xslt.mediator}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'rightsHolder'\">{{metadata.xslt.rightsHolder}}</xsl:when>\n          </xsl:choose>\n        </p>\n      </xsl:if>\n\n      <xsl:if test=\"$catalogue_url != ''\">\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.cataloguePage}}</h5>\n        <p>\n          <a href=\"{$catalogue_url}\"\n             rel=\"external\" target=\"_blank\" class=\"ui-link\">\n            {{metadata.xslt.metadata}}\n          </a>\n        </p>\n      </xsl:if>\n    </div>\n  </xsl:template>\n</xsl:stylesheet>\n";

const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "flex justify-center" };
const _hoisted_3 = {
  key: 0,
  class: "flex flex-col justify-center text-center"
};
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = {
  key: 3,
  class: "flex flex-col justify-center text-center"
};
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("img", { src: "https://i.imgur.com/fA5EqV6.png" }, null, -1);
const _hoisted_8 = { class: "text-xl mt-20" };
const _hoisted_9 = {
  key: 1,
  class: "p-5"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: true
    },
    payload: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const metadataStore = useMetadataStore();
    const { t } = useI18n();
    const iApi = inject("iApi");
    const el = ref();
    const status = computed(() => metadataStore.status);
    const response = computed(() => metadataStore.response);
    const layerExists = ref(false);
    const cache = reactive({});
    const handlers = reactive([]);
    const watchers = reactive([]);
    onMounted(() => {
      loadMetadata();
      handlers.push(
        iApi.event.on(
          GlobalEvents.LAYER_REMOVE,
          (removedLayer) => {
            if (props.payload.layer?.uid === removedLayer.uid) {
              props.panel.close();
            }
          }
        )
      );
      watchers.push(
        watch(
          () => props.payload.layer.uid,
          (newUid, oldUid) => {
            if (newUid !== oldUid) {
              loadMetadata();
            }
          }
        )
      );
    });
    onBeforeUnmount(() => {
      handlers.forEach((handler) => iApi.event.off(handler));
      watchers.forEach((unwatch) => unwatch());
    });
    const loadMetadata = () => {
      layerExists.value = props.payload.layer !== void 0 && !props.payload.layer.isRemoved;
      if (props.payload.type === "xml") {
        loadFromURL(props.payload.url, []).then((r) => {
          metadataStore.status = "success";
          if (r !== null) {
            const textContainer = document.createElement("div");
            textContainer.appendChild(
              stringToFragment(`${r.firstElementChild.outerHTML}`)
            );
            if (props.payload.catalogueUrl || props.payload.url) {
              textContainer.appendChild(
                stringToFragment(
                  `<h5 class="text-xl font-bold mb-3">${t(
                    "metadata.xslt.metadata"
                  )}</h5>`
                )
              );
            }
            if (props.payload.catalogueUrl) {
              textContainer.appendChild(
                stringToFragment(
                  `<p><a style="color: blue;" href="${props.payload.catalogueUrl}" target="_blank">${t(
                    "metadata.xslt.cataloguePage"
                  )}</a></p>`
                )
              );
            }
            textContainer.appendChild(
              stringToFragment(
                `<p><a style="color: blue;" href="${props.payload.url}" target="_blank">${t(
                  "metadata.xslt.metadataPage"
                )}</a> (xml)</p>`
              )
            );
            metadataStore.response = textContainer.outerHTML;
          }
        });
      } else if (props.payload.type === "html") {
        requestContent(props.payload.url).then((r) => {
          metadataStore.status = r.status;
          metadataStore.response = r.response;
        });
      } else if (props.payload.type === "md") {
        requestContent(props.payload.url).then((r) => {
          metadataStore.status = r.status;
          metadataStore.response = marked(r.response);
        });
      }
    };
    const loadFromURL = (xmlUrl, params) => {
      let XSLT = iApi.language === "en" ? XSLT_en : XSLT_fr;
      XSLT = XSLT.replace(
        /\{\{([\w.]+)\}\}/g,
        (_, tag) => t(tag)
      );
      if (!cache[xmlUrl]) {
        return requestContent(xmlUrl).then((xmlData) => {
          cache[xmlUrl] = xmlData.response;
          return applyXSLT(cache[xmlUrl], XSLT, params);
        });
      } else {
        return Promise.resolve(applyXSLT(cache[xmlUrl], XSLT, params));
      }
    };
    const applyXSLT = (xmlString, xslString, params) => {
      let output = null;
      if (window.XSLTProcessor) {
        const xsltProc = new window.XSLTProcessor();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "text/xml");
        const xslDoc = parser.parseFromString(xslString, "text/xml");
        xsltProc.importStylesheet(xslDoc);
        if (params) {
          params.forEach(
            (p) => xsltProc.setParameter("", p.key, p.value || "")
          );
        }
        output = xsltProc.transformToFragment(xmlDoc, document);
      }
      return output;
    };
    const requestContent = (url) => {
      return new Promise((resolve) => {
        const xobj = new XMLHttpRequest();
        xobj.open("GET", url, true);
        xobj.responseType = "text";
        xobj.onload = () => {
          if (xobj.status === 200) {
            resolve({ status: "success", response: xobj.response });
          } else {
            resolve({
              status: "error",
              response: "Could not load results from remote service."
            });
          }
        };
        xobj.onerror = () => {
          resolve({
            status: "error",
            response: "Could not load results from remote service."
          });
        };
        xobj.send();
      });
    };
    function stringToFragment(string) {
      const temp = document.createElement("div");
      temp.innerHTML = string;
      return temp;
    }
    return (_ctx, _cache) => {
      const _component_panel_screen = resolveComponent("panel-screen");
      return openBlock(), createBlock(_component_panel_screen, {
        panel: __props.panel,
        ref_key: "el",
        ref: el
      }, {
        header: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("metadata.title")) + ": " + toDisplayString(__props.payload.layerName), 1)
        ]),
        content: withCtx(() => [
          layerExists.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              status.value == "loading" ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(unref(t)("metadata.loading")), 1)) : __props.payload.type === "xml" && status.value == "success" ? (openBlock(), createElementBlock("div", {
                key: 1,
                innerHTML: response.value,
                class: "flex flex-col justify-center xml-content"
              }, null, 8, _hoisted_4)) : (__props.payload.type === "html" || __props.payload.type === "md") && status.value == "success" ? (openBlock(), createElementBlock("div", {
                key: 2,
                innerHTML: response.value,
                class: "flex flex-col justify-center max-w-full metadata-view"
              }, null, 8, _hoisted_5)) : (openBlock(), createElementBlock("div", _hoisted_6, [
                _hoisted_7,
                createBaseVNode("span", _hoisted_8, toDisplayString(unref(t)("metadata.error")), 1)
              ]))
            ])
          ])) : (openBlock(), createElementBlock("div", _hoisted_9, [
            createBaseVNode("span", null, toDisplayString(unref(t)("metadata.label.no.layer")), 1)
          ]))
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});

const screen_vue_vue_type_style_index_0_lang = '';

export { _sfc_main as _ };
