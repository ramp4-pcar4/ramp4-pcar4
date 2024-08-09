import{c3 as A,gK as H,c4 as j,c5 as R,fp as O,c6 as T,hN as w,fr as X,hs as V,hO as B,fs as F,c7 as D,c9 as l,ca as q,cb as k,cc as U,cd as m,ce as p,ch as r,fo as h}from"./main-a70d3dba.js";const G=`<?xml version="1.0" encoding="UTF-8"?>
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
`,K=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Y={key:0},z={class:"flex justify-center"},J={key:0,class:"flex flex-col justify-center text-center"},Q=["innerHTML"],W=["innerHTML"],Z={key:3,class:"flex flex-col justify-center text-center"},ee=h("img",{src:"https://i.imgur.com/fA5EqV6.png"},null,-1),te={class:"text-xl mt-20"},ne={key:1,class:"p-5"},se=A({__name:"screen",props:{panel:{type:Object,required:!0},payload:{type:Object,required:!0}},setup(d){const a=d,o=H(),{t:s}=j(),f=R("iApi"),M=O(),u=T(()=>o.status),C=T(()=>o.response),v=O(!1),x=w({}),b=w([]),y=w([]);X(()=>{_(),b.push(f.event.on(V.LAYER_REMOVE,e=>{a.payload.layer?.uid===e.uid&&a.panel.close()})),y.push(B(()=>a.payload.layer.uid,(e,t)=>{e!==t&&_()}))}),F(()=>{b.forEach(e=>f.event.off(e)),y.forEach(e=>e())});const _=()=>{v.value=a.payload.layer!==void 0&&!a.payload.layer.isRemoved,a.payload.type==="xml"?N(a.payload.url,[]).then(e=>{if(o.status="success",e!==null){const t=document.createElement("div");t.appendChild(g(`${e.firstElementChild.outerHTML}`)),(a.payload.catalogueUrl||a.payload.url)&&t.appendChild(g(`<h5 class="text-xl font-bold mb-3">${s("metadata.xslt.metadata")}</h5>`)),a.payload.catalogueUrl&&t.appendChild(g(`<p><a style="color: blue;" href="${a.payload.catalogueUrl}" target="_blank">${s("metadata.xslt.cataloguePage")}</a></p>`)),t.appendChild(g(`<p><a style="color: blue;" href="${a.payload.url}" target="_blank">${s("metadata.xslt.metadataPage")}</a> (xml)</p>`)),o.response=t.outerHTML}}):a.payload.type==="html"&&$(a.payload.url).then(e=>{o.status=e.status,o.response=e.response})},N=(e,t)=>{let n=f.language==="en"?G:K;return n=n.replace(/\{\{([\w.]+)\}\}/g,(c,i)=>s(i)),x[e]?Promise.resolve(S(x[e],n,t)):$(e).then(c=>(x[e]=c.response,S(x[e],n,t)))},S=(e,t,n)=>{let c=null;if(window.XSLTProcessor){const i=new window.XSLTProcessor,L=new DOMParser,I=L.parseFromString(e,"text/xml"),E=L.parseFromString(t,"text/xml");i.importStylesheet(E),n&&n.forEach(P=>i.setParameter("",P.key,P.value||"")),c=i.transformToFragment(I,document)}return c},$=e=>new Promise(t=>{const n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="text",n.onload=()=>{n.status===200?t({status:"success",response:n.response}):t({status:"error",response:"Could not load results from remote service."})},n.onerror=()=>{t({status:"error",response:"Could not load results from remote service."})},n.send()});function g(e){const t=document.createElement("div");return t.innerHTML=e,t}return(e,t)=>{const n=D("panel-screen");return l(),q(n,{panel:d.panel,ref_key:"el",ref:M},{header:k(()=>[U(m(p(s)("metadata.title"))+": "+m(d.payload.layerName),1)]),content:k(()=>[v.value?(l(),r("div",Y,[h("div",z,[u.value=="loading"?(l(),r("div",J,m(p(s)("metadata.loading")),1)):d.payload.type==="xml"&&u.value=="success"?(l(),r("div",{key:1,innerHTML:C.value,class:"flex flex-col justify-center xml-content"},null,8,Q)):d.payload.type==="html"&&u.value=="success"?(l(),r("div",{key:2,innerHTML:C.value,class:"flex flex-col justify-center max-w-full"},null,8,W)):(l(),r("div",Z,[ee,h("span",te,m(p(s)("metadata.error")),1)]))])])):(l(),r("div",ne,[h("span",null,m(p(s)("metadata.label.no.layer")),1)]))]),_:1},8,["panel"])}}});export{se as _};
