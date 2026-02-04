import { defineComponent as X, inject as j, ref as $, computed as R, reactive as v, onMounted as D, watch as O, onBeforeUnmount as V, resolveComponent as F, createBlock as B, openBlock as r, withCtx as k, createElementBlock as d, createElementVNode as f, toDisplayString as c, unref as u, createTextVNode as q } from "vue";
import { t as U, G } from "./main-6dWPqJr6.js";
import "pinia";
import { useI18n as z } from "vue-i18n";
import "screenfull";
import "lodash-es";
import "vue-tippy";
import Y from "linkify-html";
import "@popperjs/core";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/core/reactiveUtils.js";
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
import "@arcgis/map-components/components/arcgis-swipe";
import "deepmerge";
import "@terraformer/spatial";
import "proj4";
import "throttle-debounce";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import { marked as M } from "marked";
const J = `<?xml version="1.0" encoding="UTF-8"?>
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

      <xsl:if test="//gmd:citedResponsibleParty//gmd:individualName/* != '' 
              or //gmd:citedResponsibleParty//gmd:organisationName/gco:CharacterString/text() != ''
              or //gmd:citedResponsibleParty//gmd:positionName/gco:CharacterString/text() != ''
              or //gmd:citedResponsibleParty//gmd:electronicMailAddress/* != ''
              or //gmd:citedResponsibleParty//gmd:role/gmd:CI_RoleCode/@codeListValue != ''">
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.contactInfo}}</h5>
        <p>
          <xsl:value-of select="//gmd:citedResponsibleParty//gmd:individualName" />
        </p>
        <p>
          <xsl:value-of select="//gmd:citedResponsibleParty//gmd:organisationName/gco:CharacterString/text()" />
        </p>
        <p>
          <xsl:value-of select="//gmd:citedResponsibleParty//gmd:positionName/gco:CharacterString/text()" />
        </p>
        <p>
          <a href="mailto:{//gmd:citedResponsibleParty//gmd:electronicMailAddress/gco:CharacterString/text()}?Subject={//gmd:identificationInfo//gmd:title/gco:CharacterString/text()}">
            <xsl:value-of select="//gmd:citedResponsibleParty//gmd:electronicMailAddress" />
          </a>
        </p>
        <p>
          <xsl:variable name="roleCode" >
            <xsl:value-of select="concat(substring(//gmd:citedResponsibleParty//gmd:role/gmd:CI_RoleCode/@codeListValue,1,1),
                        substring(//gmd:citedResponsibleParty//gmd:role/gmd:CI_RoleCode/@codeListValue, 2))" />
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
`, K = `<?xml version="1.0" encoding="UTF-8"?>
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

      <xsl:if test="//gmd:citedResponsibleParty//gmd:individualName/* != '' 
              or //gmd:citedResponsibleParty//gmd:organisationName//gmd:LocalisedCharacterString[@locale='#fra']/text() != ''
              or //gmd:citedResponsibleParty//gmd:positionName//gmd:LocalisedCharacterString[@locale='#fra']/text() != ''
              or //gmd:citedResponsibleParty//gmd:electronicMailAddress/* != ''
              or //gmd:citedResponsibleParty//gmd:role/gmd:CI_RoleCode/@codeListValue != ''">
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.contactInfo}}</h5>
        <p>
          <xsl:value-of select="//gmd:citedResponsibleParty//gmd:individualName" />
        </p>
        <p>
          <xsl:value-of select="//gmd:citedResponsibleParty//gmd:organisationName//gmd:LocalisedCharacterString[@locale='#fra']/text()" />
        </p>
        <p>
          <xsl:value-of select="//gmd:citedResponsibleParty//gmd:positionName//gmd:LocalisedCharacterString[@locale='#fra']/text()" />
        </p>
        <p>
          <a href="mailto:{//gmd:citedResponsibleParty//gmd:electronicMailAddress//gmd:LocalisedCharacterString[@locale='#fra']/text()}?Subject={//gmd:identificationInfo//gmd:title//gmd:LocalisedCharacterString[@locale='#fra']/text()}">
            <xsl:value-of select="//gmd:citedResponsibleParty//gmd:electronicMailAddress" />
          </a>
        </p>
        <p>
          <xsl:variable name="roleCode" >
            <xsl:value-of select="concat(substring(//gmd:citedResponsibleParty//gmd:role/gmd:CI_RoleCode/@codeListValue,1,1),
                        substring(//gmd:citedResponsibleParty//gmd:role/gmd:CI_RoleCode/@codeListValue, 2))" />
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
`, Q = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:dct="http://purl.org/dc/terms/"
                xmlns:vcard="http://www.w3.org/2006/vcard/ns#"
                xmlns:dcat="http://www.w3.org/ns/dcat#"
                xmlns:locn="http://www.w3.org/ns/locn#"
                xmlns:foaf="http://xmlns.com/foaf/0.1/"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">

  <xsl:param name="catalogue_url" />
  <xsl:decimal-format NaN=""/>

  <xsl:template match="/">

    <div class="metadata-view">

      <xsl:if test="//dct:description[@xml:lang='en']/text() != ''">
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.Abstract}}</h5>
        <p>
          <xsl:value-of select="//dct:description[@xml:lang='en']/text()" />
        </p>
      </xsl:if>

      <xsl:comment>
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.Scope}}</h5>
        <p>{{metadata.xslt.hereBeScope}}</p>
      </xsl:comment>

      <!-- xsl:if test="//gml:TimePeriod//* != ''">
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.timePeriod}}</h5>
        <p>
          <xsl:value-of select="//gml:TimePeriod//gml:beginPosition" />
          <xsl:if test="//gml:TimePeriod//gml:beginPosition/text() != '' and //gml:TimePeriod//gml:endPosition/text() != ''">
            -
          </xsl:if>
          <xsl:value-of select="//gml:TimePeriod//gml:endPosition" />
        </p>
      </xsl:if -->

      <!-- xsl:comment>
        <xsl:if test="//gmd:supplementalInformation/gco:CharacterString/text() != ''">
          <h5 class="text-xl font-bold mb-3">{{metadata.xslt.supplementalData}}</h5>
          <p>
            <xsl:value-of select="//gmd:supplementalInformation/gco:CharacterString/text()" />
          </p>
        </xsl:if>
      </xsl:comment -->

      <xsl:if test="//dct:publisher//foaf:Organization/* != '' 
              or //dcat:contactPoint//vcard:hasEmail != ''">
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.contactInfo}}</h5>
        <p>
          <xsl:value-of select="//dct:publisher//foaf:name[@xml:lang='en']/text()" />
        </p>
        <p>
          <a href="mailto:{substring-after(//dcat:contactPoint//vcard:hasEmail/@rdf:resource, 'mailto:')}">
            <xsl:value-of select="substring-after(//dcat:contactPoint//vcard:hasEmail/@rdf:resource, 'mailto:')" />
          </a>
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
`, W = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:dct="http://purl.org/dc/terms/"
                xmlns:vcard="http://www.w3.org/2006/vcard/ns#"
                xmlns:dcat="http://www.w3.org/ns/dcat#"
                xmlns:locn="http://www.w3.org/ns/locn#"
                xmlns:foaf="http://xmlns.com/foaf/0.1/"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">

  <xsl:param name="catalogue_url" />
  <xsl:decimal-format NaN=""/>

  <xsl:template match="/">

    <div class="metadata-view">

      <xsl:if test="//dct:description[@xml:lang='fr']/text() != ''">
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.Abstract}}</h5>
        <p>
          <xsl:value-of select="//dct:description[@xml:lang='fr']/text()" />
        </p>
      </xsl:if>

      <xsl:comment>
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.Scope}}</h5>
        <p>{{metadata.xslt.hereBeScope}}</p>
      </xsl:comment>

      <!-- xsl:if test="//gml:TimePeriod//* != ''">
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.timePeriod}}</h5>
        <p>
          <xsl:value-of select="//gml:TimePeriod//gml:beginPosition" />
          <xsl:if test="//gml:TimePeriod//gml:beginPosition/text() != '' and //gml:TimePeriod//gml:endPosition/text() != ''">
            -
          </xsl:if>
          <xsl:value-of select="//gml:TimePeriod//gml:endPosition" />
        </p>
      </xsl:if -->

      <!-- xsl:comment>
        <xsl:if test="//gmd:supplementalInformation/gco:CharacterString/text() != ''">
          <h5 class="text-xl font-bold mb-3">{{metadata.xslt.supplementalData}}</h5>
          <p>
            <xsl:value-of select="//gmd:supplementalInformation/gco:CharacterString/text()" />
          </p>
        </xsl:if>
      </xsl:comment -->

      <xsl:if test="//dct:publisher//foaf:Organization/* != '' 
              or //dcat:contactPoint//vcard:hasEmail != ''">
        <h5 class="text-xl font-bold mb-3">{{metadata.xslt.contactInfo}}</h5>
        <p>
          <xsl:value-of select="//dct:publisher//foaf:name[@xml:lang='fr']/text()" />
        </p>
        <p>
          <a href="mailto:{substring-after(//dcat:contactPoint//vcard:hasEmail/@rdf:resource, 'mailto:')}">
            <xsl:value-of select="substring-after(//dcat:contactPoint//vcard:hasEmail/@rdf:resource, 'mailto:')" />
          </a>
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
`, Z = { key: 0 }, tt = { class: "flex justify-center" }, et = {
  key: 0,
  class: "flex flex-col justify-center text-center"
}, nt = ["innerHTML"], at = ["innerHTML"], lt = {
  key: 3,
  class: "flex flex-col justify-center text-center"
}, st = { class: "text-xl mt-20" }, ot = {
  key: 1,
  class: "p-5"
}, qt = /* @__PURE__ */ X({
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
  setup(i) {
    const l = U(), { t: o } = z(), x = j("iApi"), I = $(), n = i, w = R(() => l.status), y = R(() => l.response), C = $(!1), p = v({}), P = v([]), T = v([]);
    D(() => {
      l.status = "loading", S(), P.push(
        x.event.on(G.LAYER_REMOVE, (t) => {
          n.payload.layer?.uid === t.uid && n.panel.close();
        })
      ), T.push(
        O(
          () => n.payload.layer.uid,
          (t, e) => {
            t !== e && (l.status = "loading", S());
          }
        )
      );
    }), V(() => {
      P.forEach((t) => x.event.off(t)), T.forEach((t) => t());
    });
    const S = () => {
      C.value = n.payload.layer !== void 0 && !n.payload.layer.isRemoved, n.payload.type === "xml" ? N(n.payload.url, []).then((t) => {
        if (l.status = "success", t !== null) {
          const e = document.createElement("div");
          e.appendChild(g(`${t.firstElementChild.outerHTML}`)), (n.payload.catalogueUrl || n.payload.url) && e.appendChild(
            g(`<h5 class="text-xl font-bold mb-3">${o("metadata.xslt.metadata")}</h5>`)
          ), n.payload.catalogueUrl && e.appendChild(
            g(
              `<p><a style="color: blue;" href="${n.payload.catalogueUrl}" target="_blank">${o(
                "metadata.xslt.cataloguePage"
              )}</a></p>`
            )
          ), e.appendChild(
            g(
              `<p><a style="color: blue;" href="${n.payload.url}" target="_blank">${o(
                "metadata.xslt.metadataPage"
              )}</a> (xml)</p>`
            )
          ), l.response = e.outerHTML;
        }
      }) : n.payload.type === "html" ? b(n.payload.url).then((t) => {
        l.status = t.status, l.response = t.response;
      }) : n.payload.type === "md" && b(n.payload.url).then((t) => {
        l.status = t.status, l.response = M(t.response);
      });
    }, N = (t, e) => {
      let a;
      return n.payload.xmlType && n.payload.xmlType === "DCAT" ? a = x.language === "en" ? Q : W : a = x.language === "en" ? J : K, a = a.replace(/\{\{([\w.]+)\}\}/g, (s, m) => o(m)), p[t] ? Promise.resolve(_(p[t], a, e)) : b(t).then((s) => (p[t] = s.response, _(p[t], a, e)));
    }, _ = (t, e, a) => {
      let s = null;
      if (window.XSLTProcessor) {
        const m = new window.XSLTProcessor(), L = new DOMParser(), E = L.parseFromString(t, "text/xml"), A = L.parseFromString(e, "text/xml");
        m.importStylesheet(A), a && a.forEach((h) => m.setParameter("", h.key, h.value || "")), s = m.transformToFragment(E, document);
        const H = {
          className: "underline text-blue-700 break-all",
          target: "_blank",
          validate: {
            url: (h) => /^https?:\/\//.test(h)
            // only links that begin with a protocol will be hyperlinked
          }
        };
        n.payload.treatXmlAsMarkdown ? s.firstChild.innerHTML = M.parse(s.firstChild.innerHTML) : s.firstChild.innerHTML = Y(s.firstChild.innerHTML, H);
      }
      return s;
    }, b = (t) => new Promise((e) => {
      const a = new XMLHttpRequest();
      a.open("GET", t, !0), a.responseType = "text", a.onload = () => {
        a.status === 200 ? e({ status: "success", response: a.response }) : e({
          status: "error",
          response: "Could not load results from remote service."
        });
      }, a.onerror = () => {
        e({
          status: "error",
          response: "Could not load results from remote service."
        });
      }, a.send();
    });
    function g(t) {
      const e = document.createElement("div");
      return e.innerHTML = t, e;
    }
    return (t, e) => {
      const a = F("panel-screen");
      return r(), B(a, {
        panel: i.panel,
        ref_key: "el",
        ref: I
      }, {
        header: k(() => [
          q(c(u(o)("metadata.title")) + ": " + c(i.payload.layerName), 1)
        ]),
        content: k(() => [
          C.value ? (r(), d("div", Z, [
            f("div", tt, [
              w.value == "loading" ? (r(), d("div", et, c(u(o)("metadata.loading")), 1)) : i.payload.type === "xml" && w.value == "success" ? (r(), d("div", {
                key: 1,
                innerHTML: y.value,
                class: "flex flex-col justify-center max-w-full xml-content"
              }, null, 8, nt)) : (i.payload.type === "html" || i.payload.type === "md") && w.value == "success" ? (r(), d("div", {
                key: 2,
                innerHTML: y.value,
                class: "flex flex-col justify-center max-w-full metadata-view"
              }, null, 8, at)) : (r(), d("div", lt, [
                e[0] || (e[0] = f("img", { src: "https://i.imgur.com/fA5EqV6.png" }, null, -1)),
                f("span", st, c(u(o)("metadata.error")), 1)
              ]))
            ])
          ])) : (r(), d("div", ot, [
            f("span", null, c(u(o)("metadata.label.no.layer")), 1)
          ]))
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  qt as default
};
