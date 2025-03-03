import { defineComponent as A, inject as H, ref as O, computed as T, reactive as C, onMounted as j, watch as R, onBeforeUnmount as X, resolveComponent as V, openBlock as s, createBlock as F, withCtx as k, createTextVNode as B, toDisplayString as c, unref as g, createElementBlock as i, createElementVNode as h } from "vue";
import { r as D, G as q } from "./main-lcO-efBh.js";
import "pinia";
import { useI18n as G } from "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "deepmerge";
import "terraformer";
import "proj4";
import "throttle-debounce";
import "terraformer-arcgis-parser";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import { marked as U } from "marked";
const Y = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:gmd="http://www.isotc211.org/2005/gmd"
                xmlns:gco="http://www.isotc211.org/2005/gco"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:gmdl="http://www.canada.gc.ca/ns/gmdl"
                xmlns:napec="http://www.ec.gc.ca/data_donnees/standards/schemas/napec"
                xmlns:gml="http://www.opengis.net/gml"
                xmlns:geonet="http://www.fao.org/geonetwork"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xsi:schemaLocation="http://www.ec.gc.ca/data_donnees/standards/schemas/napec/schema.xsd">

  <xsl:param name="catalogue_url" />
  <xsl:decimal-format NaN=""/>

  <xsl:template match="/">

    <div class="metadata-view">

      <xsl:if test="//gmd:abstract/gco:CharacterString/text() != ''">
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.Abstract}}</h5>
        <p>
          <xsl:value-of select="//gmd:abstract/gco:CharacterString/text()" />
        </p>
      </xsl:if>

      <xsl:comment>
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.Scope}}</h5>
        <p>{{metadata.xslt.hereBeScope}}</p>
      </xsl:comment>

      <xsl:if test="//gml:TimePeriod//* != ''">
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.timePeriod}}</h5>
        <p>
          <xsl:value-of select="//gml:TimePeriod//gml:beginPosition" />
          <xsl:if test="//gml:TimePeriod//gml:beginPosition/text() != '' and //gml:TimePeriod//gml:endPosition/text() != ''">
            -
          </xsl:if>
          <xsl:value-of select="//gml:TimePeriod//gml:endPosition" />
        </p>
      </xsl:if>

      <xsl:comment>
        <xsl:if test="//gmd:supplementalInformation/gco:CharacterString/text() != ''">
          <h5 class="text-xl font-bold mb-3">{{metadata.xslt.supplementalData}}</h5>
          <p>
            <xsl:value-of select="//gmd:supplementalInformation/gco:CharacterString/text()" />
          </p>
        </xsl:if>
      </xsl:comment>

      <xsl:if test="//gmd:pointOfContact//gmd:individualName/* != '' 
              or //gmd:pointOfContact//gmd:organisationName/gco:CharacterString/text() != ''
              or //gmd:pointOfContact//gmd:positionName/gco:CharacterString/text() != ''
              or //gmd:pointOfContact//gmd:electronicMailAddress/* != ''
              or //gmd:pointOfContact//gmd:role/gmd:CI_RoleCode/@codeListValue != ''">
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.contactInfo}}</h5>
        <p>
          <xsl:value-of select="//gmd:pointOfContact//gmd:individualName" />
        </p>
        <p>
          <xsl:value-of select="//gmd:pointOfContact//gmd:organisationName/gco:CharacterString/text()" />
        </p>
        <p>
          <xsl:value-of select="//gmd:pointOfContact//gmd:positionName/gco:CharacterString/text()" />
        </p>
        <p>
          <a href="mailto:{//gmd:pointOfContact//gmd:electronicMailAddress/gco:CharacterString/text()}?Subject={//gmd:identificationInfo//gmd:title/gco:CharacterString/text()}">
            <xsl:value-of select="//gmd:pointOfContact//gmd:electronicMailAddress" />
          </a>
        </p>
        <p>
          <xsl:variable name="roleCode" >
            <xsl:value-of select="concat(substring(//gmd:pointOfContact//gmd:role/gmd:CI_RoleCode/@codeListValue,1,1),
                        substring(//gmd:pointOfContact//gmd:role/gmd:CI_RoleCode/@codeListValue, 2))" />
          </xsl:variable>

          <xsl:choose>
            <xsl:when test="$roleCode = 'resourceProvider'">{{metadata.xslt.resourceProvider}}</xsl:when>
            <xsl:when test="$roleCode = 'custodian'">{{metadata.xslt.custodian}}</xsl:when>
            <xsl:when test="$roleCode = 'owner'">{{metadata.xslt.owner}}</xsl:when>
            <xsl:when test="$roleCode = 'user'">{{metadata.xslt.user}}</xsl:when>
            <xsl:when test="$roleCode = 'distributor'">{{metadata.xslt.distributor}}</xsl:when>
            <xsl:when test="$roleCode = 'originator'">{{metadata.xslt.originator}}</xsl:when>
            <xsl:when test="$roleCode = 'pointOfContact'">{{metadata.xslt.pointOfContact}}</xsl:when>
            <xsl:when test="$roleCode = 'principalInvestigator'">{{metadata.xslt.principalInvestigator}}</xsl:when>
            <xsl:when test="$roleCode = 'processor'">{{metadata.xslt.processor}}</xsl:when>
            <xsl:when test="$roleCode = 'publisher'">{{metadata.xslt.publisher}}</xsl:when>
            <xsl:when test="$roleCode = 'author'">{{metadata.xslt.author}}</xsl:when>
            <xsl:when test="$roleCode = 'collaborator'">{{metadata.xslt.collaborator}}</xsl:when>
            <xsl:when test="$roleCode = 'editor'">{{metadata.xslt.editor}}</xsl:when>
            <xsl:when test="$roleCode = 'mediator'">{{metadata.xslt.mediator}}</xsl:when>
            <xsl:when test="$roleCode = 'rightsHolder'">{{metadata.xslt.rightsHolder}}</xsl:when>
          </xsl:choose>
        </p>
      </xsl:if>

      <xsl:if test="$catalogue_url != ''">
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.cataloguePage}}</h5>
        <p>
          <a href="{$catalogue_url}"
             rel="external" target="_blank" class="ui-link">
            {{metadata.xslt.metadata}}
          </a>
        </p>
      </xsl:if>
    </div>
  </xsl:template>
</xsl:stylesheet>
`, z = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:gmd="http://www.isotc211.org/2005/gmd"
                xmlns:gco="http://www.isotc211.org/2005/gco"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:gmdl="http://www.canada.gc.ca/ns/gmdl"
                xmlns:napec="http://www.ec.gc.ca/data_donnees/standards/schemas/napec"
                xmlns:gml="http://www.opengis.net/gml"
                xmlns:geonet="http://www.fao.org/geonetwork"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xsi:schemaLocation="http://www.ec.gc.ca/data_donnees/standards/schemas/napec/schema.xsd">

  <xsl:param name="catalogue_url" />
  <xsl:decimal-format NaN=""/>

  <xsl:template match="/">

    <div class="metadata-view">

      <xsl:if test="//gmd:abstract//gmd:LocalisedCharacterString[@locale='#fra']/text() != ''">
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.Abstract}}</h5>
        <p>
          <xsl:value-of select="//gmd:abstract//gmd:LocalisedCharacterString[@locale='#fra']/text()" />
        </p>
      </xsl:if>

      <xsl:comment>
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.Scope}}</h5>
        <p>{{metadata.xslt.hereBeScope}}</p>
      </xsl:comment>

      <xsl:if test="//gml:TimePeriod//* != ''">
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.timePeriod}}</h5>
        <p>
          <xsl:value-of select="//gml:TimePeriod//gml:beginPosition" />
          <xsl:if test="//gml:TimePeriod//gml:beginPosition/text() != '' and //gml:TimePeriod//gml:endPosition/text() != ''">
            -
          </xsl:if>
          <xsl:value-of select="//gml:TimePeriod//gml:endPosition" />
        </p>
      </xsl:if>

      <xsl:comment>
        <xsl:if test="//gmd:supplementalInformation//gmd:LocalisedCharacterString[@locale='#fra']/text() != ''">
          <h5 class="text-xl font-bold mb-3">{{metadata.xslt.supplementalData}}</h5>
          <p>
            <xsl:value-of select="//gmd:supplementalInformation//gmd:LocalisedCharacterString[@locale='#fra']/text()" />
          </p>
        </xsl:if>
      </xsl:comment>

      <xsl:if test="//gmd:pointOfContact//gmd:individualName/* != '' 
              or //gmd:pointOfContact//gmd:organisationName//gmd:LocalisedCharacterString[@locale='#fra']/text() != ''
              or //gmd:pointOfContact//gmd:positionName//gmd:LocalisedCharacterString[@locale='#fra']/text() != ''
              or //gmd:pointOfContact//gmd:electronicMailAddress/* != ''
              or //gmd:pointOfContact//gmd:role/gmd:CI_RoleCode/@codeListValue != ''">
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.contactInfo}}</h5>
        <p>
          <xsl:value-of select="//gmd:pointOfContact//gmd:individualName" />
        </p>
        <p>
          <xsl:value-of select="//gmd:pointOfContact//gmd:organisationName//gmd:LocalisedCharacterString[@locale='#fra']/text()" />
        </p>
        <p>
          <xsl:value-of select="//gmd:pointOfContact//gmd:positionName//gmd:LocalisedCharacterString[@locale='#fra']/text()" />
        </p>
        <p>
          <a href="mailto:{//gmd:pointOfContact//gmd:electronicMailAddress//gmd:LocalisedCharacterString[@locale='#fra']/text()}?Subject={//gmd:identificationInfo//gmd:title//gmd:LocalisedCharacterString[@locale='#fra']/text()}">
            <xsl:value-of select="//gmd:pointOfContact//gmd:electronicMailAddress" />
          </a>
        </p>
        <p>
          <xsl:variable name="roleCode" >
            <xsl:value-of select="concat(substring(//gmd:pointOfContact//gmd:role/gmd:CI_RoleCode/@codeListValue,1,1),
                        substring(//gmd:pointOfContact//gmd:role/gmd:CI_RoleCode/@codeListValue, 2))" />
          </xsl:variable>

          <xsl:choose>
            <xsl:when test="$roleCode = 'resourceProvider'">{{metadata.xslt.resourceProvider}}</xsl:when>
            <xsl:when test="$roleCode = 'custodian'">{{metadata.xslt.custodian}}</xsl:when>
            <xsl:when test="$roleCode = 'owner'">{{metadata.xslt.owner}}</xsl:when>
            <xsl:when test="$roleCode = 'user'">{{metadata.xslt.user}}</xsl:when>
            <xsl:when test="$roleCode = 'distributor'">{{metadata.xslt.distributor}}</xsl:when>
            <xsl:when test="$roleCode = 'originator'">{{metadata.xslt.originator}}</xsl:when>
            <xsl:when test="$roleCode = 'pointOfContact'">{{metadata.xslt.pointOfContact}}</xsl:when>
            <xsl:when test="$roleCode = 'principalInvestigator'">{{metadata.xslt.principalInvestigator}}</xsl:when>
            <xsl:when test="$roleCode = 'processor'">{{metadata.xslt.processor}}</xsl:when>
            <xsl:when test="$roleCode = 'publisher'">{{metadata.xslt.publisher}}</xsl:when>
            <xsl:when test="$roleCode = 'author'">{{metadata.xslt.author}}</xsl:when>
            <xsl:when test="$roleCode = 'collaborator'">{{metadata.xslt.collaborator}}</xsl:when>
            <xsl:when test="$roleCode = 'editor'">{{metadata.xslt.editor}}</xsl:when>
            <xsl:when test="$roleCode = 'mediator'">{{metadata.xslt.mediator}}</xsl:when>
            <xsl:when test="$roleCode = 'rightsHolder'">{{metadata.xslt.rightsHolder}}</xsl:when>
          </xsl:choose>
        </p>
      </xsl:if>

      <xsl:if test="$catalogue_url != ''">
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.cataloguePage}}</h5>
        <p>
          <a href="{$catalogue_url}"
             rel="external" target="_blank" class="ui-link">
            {{metadata.xslt.metadata}}
          </a>
        </p>
      </xsl:if>
    </div>
  </xsl:template>
</xsl:stylesheet>
`, J = { key: 0 }, K = { class: "flex justify-center" }, Q = {
  key: 0,
  class: "flex flex-col justify-center text-center"
}, W = ["innerHTML"], Z = ["innerHTML"], tt = {
  key: 3,
  class: "flex flex-col justify-center text-center"
}, et = { class: "text-xl mt-20" }, nt = {
  key: 1,
  class: "p-5"
}, Rt = /* @__PURE__ */ A({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    },
    payload: {
      type: Object,
      required: !0
    }
  },
  setup(r) {
    const o = D(), { t: l } = G(), u = H("iApi"), M = O(), a = r, f = T(() => o.status), v = T(() => o.response), b = O(!1), x = C({}), y = C([]), S = C([]);
    j(() => {
      $(), y.push(
        u.event.on(q.LAYER_REMOVE, (t) => {
          a.payload.layer?.uid === t.uid && a.panel.close();
        })
      ), S.push(
        R(
          () => a.payload.layer.uid,
          (t, e) => {
            t !== e && $();
          }
        )
      );
    }), X(() => {
      y.forEach((t) => u.event.off(t)), S.forEach((t) => t());
    });
    const $ = () => {
      b.value = a.payload.layer !== void 0 && !a.payload.layer.isRemoved, a.payload.type === "xml" ? I(a.payload.url, []).then((t) => {
        if (o.status = "success", t !== null) {
          const e = document.createElement("div");
          e.appendChild(p(`${t.firstElementChild.outerHTML}`)), (a.payload.catalogueUrl || a.payload.url) && e.appendChild(
            p(`<h5 class="text-xl font-bold mb-3">${l("metadata.xslt.metadata")}</h5>`)
          ), a.payload.catalogueUrl && e.appendChild(
            p(
              `<p><a style="color: blue;" href="${a.payload.catalogueUrl}" target="_blank">${l(
                "metadata.xslt.cataloguePage"
              )}</a></p>`
            )
          ), e.appendChild(
            p(
              `<p><a style="color: blue;" href="${a.payload.url}" target="_blank">${l(
                "metadata.xslt.metadataPage"
              )}</a> (xml)</p>`
            )
          ), o.response = e.outerHTML;
        }
      }) : a.payload.type === "html" ? w(a.payload.url).then((t) => {
        o.status = t.status, o.response = t.response;
      }) : a.payload.type === "md" && w(a.payload.url).then((t) => {
        o.status = t.status, o.response = U(t.response);
      });
    }, I = (t, e) => {
      let n = u.language === "en" ? Y : z;
      return n = n.replace(/\{\{([\w.]+)\}\}/g, (d, m) => l(m)), x[t] ? Promise.resolve(_(x[t], n, e)) : w(t).then((d) => (x[t] = d.response, _(x[t], n, e)));
    }, _ = (t, e, n) => {
      let d = null;
      if (window.XSLTProcessor) {
        const m = new window.XSLTProcessor(), L = new DOMParser(), N = L.parseFromString(t, "text/xml"), E = L.parseFromString(e, "text/xml");
        m.importStylesheet(E), n && n.forEach((P) => m.setParameter("", P.key, P.value || "")), d = m.transformToFragment(N, document);
      }
      return d;
    }, w = (t) => new Promise((e) => {
      const n = new XMLHttpRequest();
      n.open("GET", t, !0), n.responseType = "text", n.onload = () => {
        n.status === 200 ? e({ status: "success", response: n.response }) : e({
          status: "error",
          response: "Could not load results from remote service."
        });
      }, n.onerror = () => {
        e({
          status: "error",
          response: "Could not load results from remote service."
        });
      }, n.send();
    });
    function p(t) {
      const e = document.createElement("div");
      return e.innerHTML = t, e;
    }
    return (t, e) => {
      const n = V("panel-screen");
      return s(), F(n, {
        panel: r.panel,
        ref_key: "el",
        ref: M
      }, {
        header: k(() => [
          B(c(g(l)("metadata.title")) + ": " + c(r.payload.layerName), 1)
        ]),
        content: k(() => [
          b.value ? (s(), i("div", J, [
            h("div", K, [
              f.value == "loading" ? (s(), i("div", Q, c(g(l)("metadata.loading")), 1)) : r.payload.type === "xml" && f.value == "success" ? (s(), i("div", {
                key: 1,
                innerHTML: v.value,
                class: "flex flex-col justify-center xml-content"
              }, null, 8, W)) : (r.payload.type === "html" || r.payload.type === "md") && f.value == "success" ? (s(), i("div", {
                key: 2,
                innerHTML: v.value,
                class: "flex flex-col justify-center max-w-full metadata-view"
              }, null, 8, Z)) : (s(), i("div", tt, [
                e[0] || (e[0] = h("img", { src: "https://i.imgur.com/fA5EqV6.png" }, null, -1)),
                h("span", et, c(g(l)("metadata.error")), 1)
              ]))
            ])
          ])) : (s(), i("div", nt, [
            h("span", null, c(g(l)("metadata.label.no.layer")), 1)
          ]))
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  Rt as default
};
