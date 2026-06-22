import { R as e, V as t, b as n } from "./main-BgfQyEh5.js";
import { computed as r, createBlock as i, createElementBlock as a, createElementVNode as o, createTextVNode as s, defineComponent as c, inject as l, onBeforeUnmount as u, onMounted as d, openBlock as f, reactive as p, ref as m, resolveComponent as h, toDisplayString as g, unref as _, watch as v, withCtx as y } from "vue";
import { useI18n as b } from "vue-i18n";
import x from "linkify-html";
import { marked as S } from "marked";
//#region src/fixtures/metadata/files/xstyle_default_en.xsl?raw
var C = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<xsl:stylesheet version=\"1.0\"\n                xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\"\n                xmlns:gmd=\"http://www.isotc211.org/2005/gmd\"\n                xmlns:gco=\"http://www.isotc211.org/2005/gco\"\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                xmlns:gmdl=\"http://www.canada.gc.ca/ns/gmdl\"\n                xmlns:napec=\"http://www.ec.gc.ca/data_donnees/standards/schemas/napec\"\n                xmlns:gml=\"http://www.opengis.net/gml\"\n                xmlns:geonet=\"http://www.fao.org/geonetwork\"\n                xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n                xsi:schemaLocation=\"http://www.ec.gc.ca/data_donnees/standards/schemas/napec/schema.xsd\">\n\n  <xsl:param name=\"catalogue_url\" />\n  <xsl:decimal-format NaN=\"\"/>\n\n  <xsl:template match=\"/\">\n\n    <div class=\"metadata-view\">\n\n      <xsl:if test=\"//gmd:abstract/gco:CharacterString/text() != ''\">\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.Abstract}}</h5>\n        <p>\n          <xsl:value-of select=\"//gmd:abstract/gco:CharacterString/text()\" />\n        </p>\n      </xsl:if>\n\n      <xsl:comment>\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.Scope}}</h5>\n        <p>{{metadata.xslt.hereBeScope}}</p>\n      </xsl:comment>\n\n      <xsl:if test=\"//gml:TimePeriod//* != ''\">\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.timePeriod}}</h5>\n        <p>\n          <xsl:value-of select=\"//gml:TimePeriod//gml:beginPosition\" />\n          <xsl:if test=\"//gml:TimePeriod//gml:beginPosition/text() != '' and //gml:TimePeriod//gml:endPosition/text() != ''\">\n            -\n          </xsl:if>\n          <xsl:value-of select=\"//gml:TimePeriod//gml:endPosition\" />\n        </p>\n      </xsl:if>\n\n      <xsl:comment>\n        <xsl:if test=\"//gmd:supplementalInformation/gco:CharacterString/text() != ''\">\n          <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.supplementalData}}</h5>\n          <p>\n            <xsl:value-of select=\"//gmd:supplementalInformation/gco:CharacterString/text()\" />\n          </p>\n        </xsl:if>\n      </xsl:comment>\n\n      <xsl:if test=\"//gmd:citedResponsibleParty//gmd:individualName/* != '' \n              or //gmd:citedResponsibleParty//gmd:organisationName/gco:CharacterString/text() != ''\n              or //gmd:citedResponsibleParty//gmd:positionName/gco:CharacterString/text() != ''\n              or //gmd:citedResponsibleParty//gmd:electronicMailAddress/* != ''\n              or //gmd:citedResponsibleParty//gmd:role/gmd:CI_RoleCode/@codeListValue != ''\">\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.contactInfo}}</h5>\n        <p>\n          <xsl:value-of select=\"//gmd:citedResponsibleParty//gmd:individualName\" />\n        </p>\n        <p>\n          <xsl:value-of select=\"//gmd:citedResponsibleParty//gmd:organisationName/gco:CharacterString/text()\" />\n        </p>\n        <p>\n          <xsl:value-of select=\"//gmd:citedResponsibleParty//gmd:positionName/gco:CharacterString/text()\" />\n        </p>\n        <p>\n          <a href=\"mailto:{//gmd:citedResponsibleParty//gmd:electronicMailAddress/gco:CharacterString/text()}?Subject={//gmd:identificationInfo//gmd:title/gco:CharacterString/text()}\">\n            <xsl:value-of select=\"//gmd:citedResponsibleParty//gmd:electronicMailAddress\" />\n          </a>\n        </p>\n        <p>\n          <xsl:variable name=\"roleCode\" >\n            <xsl:value-of select=\"concat(substring(//gmd:citedResponsibleParty//gmd:role/gmd:CI_RoleCode/@codeListValue,1,1),\n                        substring(//gmd:citedResponsibleParty//gmd:role/gmd:CI_RoleCode/@codeListValue, 2))\" />\n          </xsl:variable>\n\n          <xsl:choose>\n            <xsl:when test=\"$roleCode = 'resourceProvider'\">{{metadata.xslt.resourceProvider}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'custodian'\">{{metadata.xslt.custodian}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'owner'\">{{metadata.xslt.owner}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'user'\">{{metadata.xslt.user}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'distributor'\">{{metadata.xslt.distributor}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'originator'\">{{metadata.xslt.originator}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'pointOfContact'\">{{metadata.xslt.pointOfContact}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'principalInvestigator'\">{{metadata.xslt.principalInvestigator}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'processor'\">{{metadata.xslt.processor}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'publisher'\">{{metadata.xslt.publisher}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'author'\">{{metadata.xslt.author}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'collaborator'\">{{metadata.xslt.collaborator}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'editor'\">{{metadata.xslt.editor}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'mediator'\">{{metadata.xslt.mediator}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'rightsHolder'\">{{metadata.xslt.rightsHolder}}</xsl:when>\n          </xsl:choose>\n        </p>\n      </xsl:if>\n\n      <xsl:if test=\"$catalogue_url != ''\">\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.cataloguePage}}</h5>\n        <p>\n          <a href=\"{$catalogue_url}\"\n             rel=\"external\" target=\"_blank\" class=\"ui-link\">\n            {{metadata.xslt.metadata}}\n          </a>\n        </p>\n      </xsl:if>\n    </div>\n  </xsl:template>\n</xsl:stylesheet>\n", w = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<xsl:stylesheet version=\"1.0\"\n                xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\"\n                xmlns:gmd=\"http://www.isotc211.org/2005/gmd\"\n                xmlns:gco=\"http://www.isotc211.org/2005/gco\"\n                xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                xmlns:gmdl=\"http://www.canada.gc.ca/ns/gmdl\"\n                xmlns:napec=\"http://www.ec.gc.ca/data_donnees/standards/schemas/napec\"\n                xmlns:gml=\"http://www.opengis.net/gml\"\n                xmlns:geonet=\"http://www.fao.org/geonetwork\"\n                xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n                xsi:schemaLocation=\"http://www.ec.gc.ca/data_donnees/standards/schemas/napec/schema.xsd\">\n\n  <xsl:param name=\"catalogue_url\" />\n  <xsl:decimal-format NaN=\"\"/>\n\n  <xsl:template match=\"/\">\n\n    <div class=\"metadata-view\">\n\n      <xsl:if test=\"//gmd:abstract//gmd:LocalisedCharacterString[@locale='#fra']/text() != ''\">\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.Abstract}}</h5>\n        <p>\n          <xsl:value-of select=\"//gmd:abstract//gmd:LocalisedCharacterString[@locale='#fra']/text()\" />\n        </p>\n      </xsl:if>\n\n      <xsl:comment>\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.Scope}}</h5>\n        <p>{{metadata.xslt.hereBeScope}}</p>\n      </xsl:comment>\n\n      <xsl:if test=\"//gml:TimePeriod//* != ''\">\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.timePeriod}}</h5>\n        <p>\n          <xsl:value-of select=\"//gml:TimePeriod//gml:beginPosition\" />\n          <xsl:if test=\"//gml:TimePeriod//gml:beginPosition/text() != '' and //gml:TimePeriod//gml:endPosition/text() != ''\">\n            -\n          </xsl:if>\n          <xsl:value-of select=\"//gml:TimePeriod//gml:endPosition\" />\n        </p>\n      </xsl:if>\n\n      <xsl:comment>\n        <xsl:if test=\"//gmd:supplementalInformation//gmd:LocalisedCharacterString[@locale='#fra']/text() != ''\">\n          <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.supplementalData}}</h5>\n          <p>\n            <xsl:value-of select=\"//gmd:supplementalInformation//gmd:LocalisedCharacterString[@locale='#fra']/text()\" />\n          </p>\n        </xsl:if>\n      </xsl:comment>\n\n      <xsl:if test=\"//gmd:citedResponsibleParty//gmd:individualName/* != '' \n              or //gmd:citedResponsibleParty//gmd:organisationName//gmd:LocalisedCharacterString[@locale='#fra']/text() != ''\n              or //gmd:citedResponsibleParty//gmd:positionName//gmd:LocalisedCharacterString[@locale='#fra']/text() != ''\n              or //gmd:citedResponsibleParty//gmd:electronicMailAddress/* != ''\n              or //gmd:citedResponsibleParty//gmd:role/gmd:CI_RoleCode/@codeListValue != ''\">\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.contactInfo}}</h5>\n        <p>\n          <xsl:value-of select=\"//gmd:citedResponsibleParty//gmd:individualName\" />\n        </p>\n        <p>\n          <xsl:value-of select=\"//gmd:citedResponsibleParty//gmd:organisationName//gmd:LocalisedCharacterString[@locale='#fra']/text()\" />\n        </p>\n        <p>\n          <xsl:value-of select=\"//gmd:citedResponsibleParty//gmd:positionName//gmd:LocalisedCharacterString[@locale='#fra']/text()\" />\n        </p>\n        <p>\n          <a href=\"mailto:{//gmd:citedResponsibleParty//gmd:electronicMailAddress//gmd:LocalisedCharacterString[@locale='#fra']/text()}?Subject={//gmd:identificationInfo//gmd:title//gmd:LocalisedCharacterString[@locale='#fra']/text()}\">\n            <xsl:value-of select=\"//gmd:citedResponsibleParty//gmd:electronicMailAddress\" />\n          </a>\n        </p>\n        <p>\n          <xsl:variable name=\"roleCode\" >\n            <xsl:value-of select=\"concat(substring(//gmd:citedResponsibleParty//gmd:role/gmd:CI_RoleCode/@codeListValue,1,1),\n                        substring(//gmd:citedResponsibleParty//gmd:role/gmd:CI_RoleCode/@codeListValue, 2))\" />\n          </xsl:variable>\n\n          <xsl:choose>\n            <xsl:when test=\"$roleCode = 'resourceProvider'\">{{metadata.xslt.resourceProvider}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'custodian'\">{{metadata.xslt.custodian}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'owner'\">{{metadata.xslt.owner}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'user'\">{{metadata.xslt.user}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'distributor'\">{{metadata.xslt.distributor}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'originator'\">{{metadata.xslt.originator}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'pointOfContact'\">{{metadata.xslt.pointOfContact}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'principalInvestigator'\">{{metadata.xslt.principalInvestigator}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'processor'\">{{metadata.xslt.processor}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'publisher'\">{{metadata.xslt.publisher}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'author'\">{{metadata.xslt.author}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'collaborator'\">{{metadata.xslt.collaborator}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'editor'\">{{metadata.xslt.editor}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'mediator'\">{{metadata.xslt.mediator}}</xsl:when>\n            <xsl:when test=\"$roleCode = 'rightsHolder'\">{{metadata.xslt.rightsHolder}}</xsl:when>\n          </xsl:choose>\n        </p>\n      </xsl:if>\n\n      <xsl:if test=\"$catalogue_url != ''\">\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.cataloguePage}}</h5>\n        <p>\n          <a href=\"{$catalogue_url}\"\n             rel=\"external\" target=\"_blank\" class=\"ui-link\">\n            {{metadata.xslt.metadata}}\n          </a>\n        </p>\n      </xsl:if>\n    </div>\n  </xsl:template>\n</xsl:stylesheet>\n", T = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<xsl:stylesheet version=\"1.0\"\n                xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\"\n                xmlns:dct=\"http://purl.org/dc/terms/\"\n                xmlns:vcard=\"http://www.w3.org/2006/vcard/ns#\"\n                xmlns:dcat=\"http://www.w3.org/ns/dcat#\"\n                xmlns:locn=\"http://www.w3.org/ns/locn#\"\n                xmlns:foaf=\"http://xmlns.com/foaf/0.1/\"\n                xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n\n  <xsl:param name=\"catalogue_url\" />\n  <xsl:decimal-format NaN=\"\"/>\n\n  <xsl:template match=\"/\">\n\n    <div class=\"metadata-view\">\n\n      <xsl:if test=\"//dct:description[@xml:lang='en']/text() != ''\">\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.Abstract}}</h5>\n        <p>\n          <xsl:value-of select=\"//dct:description[@xml:lang='en']/text()\" />\n        </p>\n      </xsl:if>\n\n      <xsl:comment>\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.Scope}}</h5>\n        <p>{{metadata.xslt.hereBeScope}}</p>\n      </xsl:comment>\n\n      <!-- xsl:if test=\"//gml:TimePeriod//* != ''\">\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.timePeriod}}</h5>\n        <p>\n          <xsl:value-of select=\"//gml:TimePeriod//gml:beginPosition\" />\n          <xsl:if test=\"//gml:TimePeriod//gml:beginPosition/text() != '' and //gml:TimePeriod//gml:endPosition/text() != ''\">\n            -\n          </xsl:if>\n          <xsl:value-of select=\"//gml:TimePeriod//gml:endPosition\" />\n        </p>\n      </xsl:if -->\n\n      <!-- xsl:comment>\n        <xsl:if test=\"//gmd:supplementalInformation/gco:CharacterString/text() != ''\">\n          <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.supplementalData}}</h5>\n          <p>\n            <xsl:value-of select=\"//gmd:supplementalInformation/gco:CharacterString/text()\" />\n          </p>\n        </xsl:if>\n      </xsl:comment -->\n\n      <xsl:if test=\"//dct:publisher//foaf:Organization/* != '' \n              or //dcat:contactPoint//vcard:hasEmail != ''\">\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.contactInfo}}</h5>\n        <p>\n          <xsl:value-of select=\"//dct:publisher//foaf:name[@xml:lang='en']/text()\" />\n        </p>\n        <p>\n          <a href=\"mailto:{substring-after(//dcat:contactPoint//vcard:hasEmail/@rdf:resource, 'mailto:')}\">\n            <xsl:value-of select=\"substring-after(//dcat:contactPoint//vcard:hasEmail/@rdf:resource, 'mailto:')\" />\n          </a>\n        </p>\n      </xsl:if>\n\n      <xsl:if test=\"$catalogue_url != ''\">\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.cataloguePage}}</h5>\n        <p>\n          <a href=\"{$catalogue_url}\"\n             rel=\"external\" target=\"_blank\" class=\"ui-link\">\n            {{metadata.xslt.metadata}}\n          </a>\n        </p>\n      </xsl:if>\n    </div>\n  </xsl:template>\n</xsl:stylesheet>\n", E = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<xsl:stylesheet version=\"1.0\"\n                xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\"\n                xmlns:dct=\"http://purl.org/dc/terms/\"\n                xmlns:vcard=\"http://www.w3.org/2006/vcard/ns#\"\n                xmlns:dcat=\"http://www.w3.org/ns/dcat#\"\n                xmlns:locn=\"http://www.w3.org/ns/locn#\"\n                xmlns:foaf=\"http://xmlns.com/foaf/0.1/\"\n                xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n\n  <xsl:param name=\"catalogue_url\" />\n  <xsl:decimal-format NaN=\"\"/>\n\n  <xsl:template match=\"/\">\n\n    <div class=\"metadata-view\">\n\n      <xsl:if test=\"//dct:description[@xml:lang='fr']/text() != ''\">\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.Abstract}}</h5>\n        <p>\n          <xsl:value-of select=\"//dct:description[@xml:lang='fr']/text()\" />\n        </p>\n      </xsl:if>\n\n      <xsl:comment>\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.Scope}}</h5>\n        <p>{{metadata.xslt.hereBeScope}}</p>\n      </xsl:comment>\n\n      <!-- xsl:if test=\"//gml:TimePeriod//* != ''\">\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.timePeriod}}</h5>\n        <p>\n          <xsl:value-of select=\"//gml:TimePeriod//gml:beginPosition\" />\n          <xsl:if test=\"//gml:TimePeriod//gml:beginPosition/text() != '' and //gml:TimePeriod//gml:endPosition/text() != ''\">\n            -\n          </xsl:if>\n          <xsl:value-of select=\"//gml:TimePeriod//gml:endPosition\" />\n        </p>\n      </xsl:if -->\n\n      <!-- xsl:comment>\n        <xsl:if test=\"//gmd:supplementalInformation/gco:CharacterString/text() != ''\">\n          <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.supplementalData}}</h5>\n          <p>\n            <xsl:value-of select=\"//gmd:supplementalInformation/gco:CharacterString/text()\" />\n          </p>\n        </xsl:if>\n      </xsl:comment -->\n\n      <xsl:if test=\"//dct:publisher//foaf:Organization/* != '' \n              or //dcat:contactPoint//vcard:hasEmail != ''\">\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.contactInfo}}</h5>\n        <p>\n          <xsl:value-of select=\"//dct:publisher//foaf:name[@xml:lang='fr']/text()\" />\n        </p>\n        <p>\n          <a href=\"mailto:{substring-after(//dcat:contactPoint//vcard:hasEmail/@rdf:resource, 'mailto:')}\">\n            <xsl:value-of select=\"substring-after(//dcat:contactPoint//vcard:hasEmail/@rdf:resource, 'mailto:')\" />\n          </a>\n        </p>\n      </xsl:if>\n\n      <xsl:if test=\"$catalogue_url != ''\">\n        <h5 class=\"text-xl font-bold mb-3\">{{metadata.xslt.cataloguePage}}</h5>\n        <p>\n          <a href=\"{$catalogue_url}\"\n             rel=\"external\" target=\"_blank\" class=\"ui-link\">\n            {{metadata.xslt.metadata}}\n          </a>\n        </p>\n      </xsl:if>\n    </div>\n  </xsl:template>\n</xsl:stylesheet>\n", D = { key: 0 }, O = { class: "flex justify-center" }, k = {
	key: 0,
	class: "flex flex-col justify-center text-center"
}, A = ["innerHTML"], j = ["innerHTML"], M = {
	key: 3,
	class: "flex flex-col justify-center text-center"
}, N = { class: "text-xl mt-20" }, P = {
	key: 1,
	class: "p-5"
}, F = /* @__PURE__ */ c({
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
	setup(c) {
		let F = n(), { t: I } = b(), L = l("iApi"), R = m(), z = c, B = r(() => F.status), V = r(() => F.response), H = m(!1), U = p({}), W = p([]), G = p([]);
		d(() => {
			F.status = "loading", K(), W.push(L.event.on(t.LAYER_REMOVE, (e) => {
				z.payload.layer?.uid === e.uid && z.panel.close();
			})), G.push(v(() => z.payload.layer.uid, (e, t) => {
				e !== t && (F.status = "loading", K());
			}));
		}), u(() => {
			W.forEach((e) => L.event.off(e)), G.forEach((e) => e());
		});
		let K = async () => {
			if (H.value = z.payload.layer !== void 0 && !z.payload.layer.isRemoved, H.value) {
				if (z.payload.type === "xml") {
					let e = await q(z.payload.url, []);
					if (F.status = "success", e?.firstElementChild) {
						let t = document.createElement("div");
						t.appendChild(X(`${e.firstElementChild.outerHTML}`)), (z.payload.catalogueUrl || z.payload.url) && t.appendChild(X(`<h5 class="text-xl font-bold mb-3">${I("metadata.xslt.metadata")}</h5>`)), z.payload.catalogueUrl && t.appendChild(X(`<p><a style="color: blue;" href="${z.payload.catalogueUrl}" target="_blank">${I("metadata.xslt.cataloguePage")}</a></p>`)), t.appendChild(X(`<p><a style="color: blue;" href="${z.payload.url}" target="_blank">${I("metadata.xslt.metadataPage")}</a> (xml)</p>`)), F.response = t.outerHTML;
					}
				} else if (z.payload.type === "html") {
					let e = await Y(z.payload.url);
					F.status = e.status, F.response = e.response;
				} else if (z.payload.type === "md") {
					let e = await Y(z.payload.url);
					F.status = e.status, F.response = S(e.response, { async: !1 });
				}
			}
		}, q = async (t, n) => {
			let r;
			if (r = z.payload.xmlType && z.payload.xmlType === "DCAT" ? L.language === "en" ? T : E : L.language === "en" ? C : w, r = r.replace(/\{\{([\w.]+)\}\}/g, (e, t) => I(t)), !U[t]) {
				let n = await Y(t);
				if (n.status === "error") {
					let t = n.reason ? I("metadata.notification.rawFallbackWithReason", { reason: n.reason }) : I("metadata.notification.rawFallback");
					L.notify.show(e.WARNING, t);
				}
				U[t] = n.response;
			}
			return J(U[t], r, n);
		}, J = (e, t, n) => {
			let r = null;
			if (window.XSLTProcessor) {
				let i = new window.XSLTProcessor(), a = new DOMParser(), o = a.parseFromString(e, "text/xml"), s = a.parseFromString(t, "text/xml");
				i.importStylesheet(s), n && n.forEach((e) => i.setParameter("", e.key, e.value || "")), r = i.transformToFragment(o, document);
				let c = {
					className: "underline text-blue-700 break-all",
					target: "_blank",
					validate: { url: (e) => /^https?:\/\//.test(e) }
				}, l = r.firstElementChild;
				l && (z.payload.treatXmlAsMarkdown ? l.innerHTML = S.parse(l.innerHTML, { async: !1 }) : l.innerHTML = x(l.innerHTML, c));
			}
			return r;
		}, Y = (e) => new Promise((t) => {
			let n = new XMLHttpRequest();
			n.open("GET", e, !0), n.responseType = "text", n.onload = () => {
				n.status === 200 ? t({
					status: "success",
					response: n.response
				}) : t({
					status: "error",
					response: "Could not load results from remote service.",
					reason: (n.statusText ? `${n.status} ${n.statusText}` : `HTTP ${n.status}`) || void 0
				});
			}, n.onerror = () => {
				t({
					status: "error",
					response: "Could not load results from remote service."
				});
			}, n.send();
		});
		function X(e) {
			let t = document.createElement("div");
			return t.innerHTML = e, t;
		}
		return (e, t) => {
			let n = h("panel-screen");
			return f(), i(n, {
				panel: c.panel,
				ref_key: "el",
				ref: R
			}, {
				header: y(() => [s(g(_(I)("metadata.title")) + ": " + g(c.payload.layerName), 1)]),
				content: y(() => [H.value ? (f(), a("div", D, [o("div", O, [B.value == "loading" ? (f(), a("div", k, g(_(I)("metadata.loading")), 1)) : c.payload.type === "xml" && B.value == "success" ? (f(), a("div", {
					key: 1,
					innerHTML: V.value,
					class: "flex flex-col justify-center max-w-full xml-content"
				}, null, 8, A)) : (c.payload.type === "html" || c.payload.type === "md") && B.value == "success" ? (f(), a("div", {
					key: 2,
					innerHTML: V.value,
					class: "flex flex-col justify-center max-w-full metadata-view"
				}, null, 8, j)) : (f(), a("div", M, [t[0] ||= o("img", { src: "https://i.imgur.com/fA5EqV6.png" }, null, -1), o("span", N, g(_(I)("metadata.error")), 1)]))])])) : (f(), a("div", P, [o("span", null, g(_(I)("metadata.label.no.layer")), 1)]))]),
				_: 1
			}, 8, ["panel"]);
		};
	}
});
//#endregion
export { F as default };
