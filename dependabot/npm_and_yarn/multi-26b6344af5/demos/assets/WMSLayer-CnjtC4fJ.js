import{dI as Me,aQ as V,aO as J,aJ as N,bK as Ue,V as K,H as o,J as l,bB as M,M as $,bI as je,N as be,s as xe,c1 as U,O,I as we,aD as Te,ay as _e,Z as Ce,cD as ne,a5 as D,gp as qe,bj as Ve,dD as Be,b9 as We,b6 as De,f1 as ke,$ as Ge,v as Xe,aH as He,K as k,bv as Je,eg as Ze}from"./main-Cv8ITM2j.js";import{n as ze}from"./CollectionFlattener-C24Vb2Tx.js";import{m as Ke,S as Qe}from"./MultiOriginJSONSupport-CtsATS64.js";import{i as ie}from"./scaleUtils-DO2I8oTt.js";import{f as Ye}from"./Layer-CVn99KK7.js";import{p as et}from"./BlendLayer-BlUOZnIK.js";import{b as tt}from"./OperationalLayer-D1cLfmBd.js";import{j as rt}from"./PortalLayer-DYpNTE1E.js";import{f as nt}from"./RefreshableLayer-9GjajGR6.js";import{t as it}from"./ScaleRangeLayer-DD2_yhdp.js";import{l as st}from"./TemporalLayer-BgA-pMFb.js";import{o as Z}from"./crsUtils-DAndLU68.js";import{d as at,y as ot}from"./commonProperties-BKS4jiR6.js";import{a as se}from"./ExportWMSImageParameters-DMQe5KB-.js";import{t as lt}from"./imageBitmapUtils-DUwQO6j1.js";import"./preload-helper-ExcqyqRp.js";import"./TimeExtent-CmJt7e8T.js";import"./layerContainerType-C5CzMsLd.js";import"./jsonUtils-CX527-Zb.js";import"./parser-OujP_0wM.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-B2F2AQse.js";import"./common-DQOJ18NT.js";import"./PortalItem-auRHFq7R.js";import"./portalItemUtils-B5PDao5z.js";import"./projection-DALJEM5z.js";import"./projectBuffer-C3I4aBT7.js";import"./TimeInfo-C3kYwiZZ.js";import"./timeZoneUtils-DBnpKbsS.js";import"./ElevationInfo-CFzKWoUt.js";import"./lengthUtils-BjSb-BVP.js";var _;let ut=0,h=_=class extends Me.IdentifiableMixin(Ke){constructor(e){super(e),this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.legendUrl=null,this.legendEnabled=!0,this.layer=null,this.maxScale=0,this.minScale=0,this.name=null,this.parent=null,this.popupEnabled=!1,this.queryable=!1,this.sublayers=null,this.spatialReferences=null,this.title=null,this.addHandles([V(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},N),V(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},N),J(()=>this.sublayers,(t,r)=>{if(r)for(const n of r)n.layer=n.parent=null;if(t)for(const n of t)n.parent=this,n.layer=this.layer},N),J(()=>this.layer,t=>{if(this.sublayers)for(const r of this.sublayers)r.layer=t},N)])}get id(){return this._get("id")??ut++}set id(e){this._set("id",e)}readLegendUrl(e,t){return t.legendUrl??t.legendURL??null}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}castSublayers(e){return Ue(K.ofType(_),e)}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){const e=new _;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents?.map(t=>t.clone())??null),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers?.map(t=>t.clone())),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences?.map(t=>t)),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};o([l()],h.prototype,"description",void 0),o([l({readOnly:!0})],h.prototype,"dimensions",void 0),o([l({type:M,json:{name:"extent"}})],h.prototype,"fullExtent",void 0),o([l()],h.prototype,"fullExtents",void 0),o([l({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],h.prototype,"id",null),o([l({type:String,json:{name:"legendUrl",write:{ignoreOrigin:!0}}})],h.prototype,"legendUrl",void 0),o([$("legendUrl",["legendUrl","legendURL"])],h.prototype,"readLegendUrl",null),o([l({type:Boolean,json:{name:"showLegend",origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],h.prototype,"legendEnabled",void 0),o([l()],h.prototype,"layer",void 0),o([l()],h.prototype,"maxScale",void 0),o([l()],h.prototype,"minScale",void 0),o([l({readOnly:!0})],h.prototype,"effectiveScaleRange",null),o([l({type:String,json:{write:{ignoreOrigin:!0}}})],h.prototype,"name",void 0),o([l()],h.prototype,"parent",void 0),o([l({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],h.prototype,"popupEnabled",void 0),o([l({type:Boolean,json:{write:{ignoreOrigin:!0}}})],h.prototype,"queryable",void 0),o([l()],h.prototype,"sublayers",void 0),o([je("sublayers")],h.prototype,"castSublayers",null),o([l({type:[Number],json:{read:{source:"spatialReferences"}}})],h.prototype,"spatialReferences",void 0),o([l({type:String,json:{write:{ignoreOrigin:!0}}})],h.prototype,"title",void 0),o([l({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],h.prototype,"visible",null),h=_=o([be("esri.layers.support.WMSSublayer")],h);const z=h,ae={84:4326,83:4269,27:4267};function pt(e){if(!e)return null;const t={idCounter:-1};typeof e=="string"&&(e=new DOMParser().parseFromString(e,"text/xml"));const r=e.documentElement;if(r.nodeName==="ServiceExceptionReport"){const w=Array.prototype.slice.call(r.childNodes).map(L=>L.textContent).join(`\r
`);throw new xe("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",w)}const n=x("Capability",r),i=x("Service",r),s=n&&x("Request",n);if(!n||!i||!s)return null;const a=x("Layer",n);if(!a)return null;const u=r.nodeName==="WMS_Capabilities"||r.nodeName==="WMT_MS_Capabilities"?r.getAttribute("version"):"1.3.0",c=S("Title",i,"")||S("Name",i,""),g=S("AccessConstraints",i,""),p=/^none$/i.test(g)?"":g,f=S("Abstract",i,""),y=parseInt(S("MaxWidth",i,"5000"),10),d=parseInt(S("MaxHeight",i,"5000"),10),v=le(s,"GetMap"),I=oe(s,"GetMap"),b=A(a,u,t);if(!b)return null;let F,R=0;const Fe=Array.prototype.slice.call(n.childNodes),Ee=b.sublayers??[],B=w=>{w!=null&&Ee.push(w)};Fe.forEach(w=>{w.nodeName==="Layer"&&(R===0?F=w:(R===1&&b.name&&(b.name="",B(A(F,u,t))),B(A(w,u,t))),R++)});const j=b.sublayers??[],$e=b.fullExtents??[];j.length===0&&j.push(b),b.extent??=j[0].extent;const Oe=b.spatialReferences.length>0?b.spatialReferences:ve(b),Q=oe(s,"GetFeatureInfo"),Re=Q?le(s,"GetFeatureInfo"):null,Y=Se(j),Le=b.minScale||0,Pe=b.maxScale||0,ee=b.dimensions??[],Ae=Y.reduce((w,L)=>w.concat(L.dimensions??[]),[]),te=ee.concat(Ae).filter(Ne);let re=null;if(te.length){const w=te.map(L=>{const{extent:W}=L;return dt(W)?W.map(T=>T.getTime()):W?.map(T=>[T.min.getTime(),T.max.getTime()])}).flat(2).filter(U);re={startTimeField:null,endTimeField:null,trackIdField:void 0,timeExtent:[Math.min(...w),Math.max(...w)]}}return{copyright:p,description:f,dimensions:ee,extent:b.extent,fullExtents:$e,featureInfoFormats:Re,featureInfoUrl:Q,mapUrl:I,maxWidth:y,maxHeight:d,maxScale:Pe,minScale:Le,layers:Y,spatialReferences:Oe,supportedImageFormatTypes:v,timeInfo:re,title:c,version:u}}function mt(e){const t=e.filter(r=>r.popupEnabled&&r.name&&r.queryable);return t.length?t.map(({name:r})=>r).join():null}function ve(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const r=ve(t);if(r.length>0)return r}return[]}function Se(e){let t=[];for(const r of e)t.push(r),r.sublayers?.length&&(t=t.concat(Se(r.sublayers)),delete r.sublayers);return t}function C(e,t,r){return t.getAttribute(e)??r}function ct(e,t,r,n){const i=x(e,r);return i?C(t,i,n):n}function x(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(Ie(n)&&n.nodeName===e)return n}return null}function q(e,t){if(t==null)return[];const r=[];for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n];Ie(i)&&i.nodeName===e&&r.push(i)}return r}function S(e,t,r){return x(e,t)?.textContent??r}function P(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),i=parseFloat(e.getAttribute("miny")),s=parseFloat(e.getAttribute("maxx")),a=parseFloat(e.getAttribute("maxy"));let u,c,g,p;return r?(u=isNaN(i)?-Number.MAX_VALUE:i,c=isNaN(n)?-Number.MAX_VALUE:n,g=isNaN(a)?Number.MAX_VALUE:a,p=isNaN(s)?Number.MAX_VALUE:s):(u=isNaN(n)?-Number.MAX_VALUE:n,c=isNaN(i)?-Number.MAX_VALUE:i,g=isNaN(s)?Number.MAX_VALUE:s,p=isNaN(a)?Number.MAX_VALUE:a),{xmin:u,ymin:c,xmax:g,ymax:p,spatialReference:{wkid:t}}}function oe(e,t){const r=x(t,e);if(r){const n=x("DCPType",r);if(n){const i=x("HTTP",n);if(i){const s=x("Get",i);if(s){let a=ct("OnlineResource","xlink:href",s,null);if(a){const u=a.indexOf("&");return u!==-1&&u===a.length-1&&(a=a.slice(0,-1)),yt(a,["service","request"])}}}}}return null}function le(e,t){const r=q("Operation",e);if(!r.length)return q("Format",x(t,e)).map(({textContent:i})=>i).filter(U);const n=[];for(const i of r)if(i.getAttribute("name")===t){const s=q("Format",i);for(const{textContent:a}of s)a!=null&&n.push(a)}return n}function ue(e,t,r){const n=x(t,e);if(!n)return r;const{textContent:i}=n;if(i==null||i==="")return r;const s=Number(i);return isNaN(s)?r:s}function A(e,t,r){if(!e)return null;const n=e.getAttribute("queryable")?.toLowerCase(),i=n==="1"||n==="true",s={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:i,spatialReferences:[],sublayers:null},a=x("LatLonBoundingBox",e),u=x("EX_GeographicBoundingBox",e);let c=null;a&&(c=P(a,4326)),u&&(c=new M(0,0,0,0,new O({wkid:4326})),c.xmin=parseFloat(S("westBoundLongitude",u,"0")),c.ymin=parseFloat(S("southBoundLatitude",u,"0")),c.xmax=parseFloat(S("eastBoundLongitude",u,"0")),c.ymax=parseFloat(S("northBoundLatitude",u,"0"))),a||u||(c=new M(-180,-90,180,90,new O({wkid:4326}))),s.minScale=ue(e,"MaxScaleDenominator",0),s.maxScale=ue(e,"MinScaleDenominator",0);const g=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(p=>{if(p.nodeName==="Name")s.name=p.textContent||"";else if(p.nodeName==="Title")s.title=p.textContent||"";else if(p.nodeName==="Abstract")s.description=p.textContent||"";else if(p.nodeName==="BoundingBox"){const f=p.getAttribute(g);if(f&&f.indexOf("EPSG:")===0){const d=parseInt(f.slice(5),10);d===0||isNaN(d)||c||(c=t==="1.3.0"?P(p,d,Z(d)):P(p,d))}const y=f?.indexOf(":");if(y&&y>-1){let d=parseInt(f.slice(y+1),10);d===0||isNaN(d)||(d=ae[d]??d);const v=t==="1.3.0"?P(p,d,Z(d)):P(p,d);v&&s.fullExtents&&s.fullExtents.push(v)}}else if(p.nodeName===g)(p.textContent?.split(" ")??[]).forEach(f=>{let y=NaN;if(f.includes(":")){const[d,v]=f.toUpperCase().split(":");d!=="CRS"&&d!=="EPSG"||(y=parseInt(v,10))}else y=parseInt(f,10);if(y!==0&&!isNaN(y)){const d=ae[y]??y;s.spatialReferences.includes(d)||s.spatialReferences.push(d)}});else if(p.nodeName!=="Style"||s.legendUrl){if(p.nodeName==="Layer"){const f=A(p,t,r);f&&(f.parentLayerId=s.id,s.sublayers||(s.sublayers=[]),s.sublayers.push(f))}}else{const f=x("LegendURL",p);if(f){const y=x("OnlineResource",f);y&&(s.legendUrl=y.getAttribute("xlink:href"))}}}),s.extent=c,s.dimensions=q("Dimension",e).filter(p=>p.getAttribute("name")&&p.getAttribute("units")&&p.textContent).map(p=>{const f=p.getAttribute("name"),y=p.getAttribute("units"),d=p.textContent,v=p.getAttribute("unitSymbol")??void 0,I=p.getAttribute("default")??void 0,b=C("default",p,"0")!=="0",F=C("nearestValue",p,"0")!=="0",R=C("current",p,"0")!=="0";return Ne({name:f,units:y})?{name:"time",units:"ISO8601",extent:ce(d),default:ce(I),multipleValues:b,nearestValue:F,current:R}:ft({name:f,units:y})?{name:"elevation",units:y,extent:pe(d),unitSymbol:v,default:pe(I),multipleValues:b,nearestValue:F}:{name:f,units:y,extent:me(d),unitSymbol:v,default:me(I),multipleValues:b,nearestValue:F}}),s}function dt(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}function Ie(e){return e.nodeType===Node.ELEMENT_NODE}function ft(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function Ne(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function yt(e,t){const r=[],n=we(e);for(const i in n.query)n.query.hasOwnProperty(i)&&(t.includes(i.toLowerCase())||r.push(i+"="+n.query[i]));return n.path+(r.length?"?"+r.join("&"):"")}function pe(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const i=n.split("/");return i.length<2?null:{min:parseFloat(i[0]),max:parseFloat(i[1]),resolution:i.length>=3&&i[2]!=="0"?parseFloat(i[2]):void 0}}).filter(U):r.map(n=>parseFloat(n))}function me(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const i=n.split("/");return i.length<2?null:{min:i[0],max:i[1],resolution:i.length>=3&&i[2]!=="0"?i[2]:void 0}}).filter(U):r}function ce(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const i=n.split("/");return i.length<2?null:{min:G(i[0]),max:G(i[1]),resolution:i.length>=3&&i[2]!=="0"?ht(i[2]):void 0}}).filter(U):r.map(n=>G(n))}function G(e){return Te.fromISO(e,{zone:_e.utcInstance}).toJSDate()}function ht(e){const t=/(?:p(\d+y|\d+(?:\.|,)\d+y)?(\d+m|\d+(?:\.|,)\d+m)?(\d+d|\d+(?:\.|,)\d+d)?)?(?:t(\d+h|\d+(?:\.|,)\d+h)?(\d+m|\d+(?:\.|,)\d+m)?(\d+s|\d+(?:\.|,)\d+s)?)?/i,r=e.match(t);return r?{years:E(r[1]),months:E(r[2]),days:E(r[3]),hours:E(r[4]),minutes:E(r[5]),seconds:E(r[6])}:null}function E(e){if(!e)return 0;const t=/(?:\d+(?:\.|,)\d+|\d+)/,r=e.match(t);if(!r)return 0;const n=r[0].replace(",",".");return Number(n)}function X(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const gt="0000-01-01T00:00:00Z",bt="9999-12-31T23:59:59Z";function de(e){if(!e||e.isAllTime||e.isEmpty)return;const{start:t,end:r}=e;return t&&r&&t.getTime()===r.getTime()?`${X(t)}`:`${t?X(t):gt}/${r?X(r):bt}`}const fe=new Set([102100,3857,102113,900913]),xt=new Set([3395,54004]);function wt(e,t){let r=e.wkid;return t==null?r:(r!=null&&t.includes(r)||!e.latestWkid||(r=e.latestWkid),r!=null&&fe.has(r)?t.find(n=>fe.has(n))||t.find(n=>xt.has(n))||102100:r)}const H=new He({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});function ye(e){return e==="text/html"}function he(e){return e==="text/plain"}let m=class extends et(st(nt(it(tt(rt(Qe(Ye))))))){constructor(...e){super(...e),this.allSublayers=new ze({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormats=null,this.featureInfoUrl=null,this.fetchFeatureInfoFunction=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.version=null,this.addHandles([V(()=>this.sublayers,"after-add",({item:t})=>{t.parent=t.layer=this},N),V(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},N),J(()=>this.sublayers,(t,r)=>{if(r)for(const n of r)n.layer=n.parent=null;if(t)for(const n of t)n.parent=n.layer=this},N)])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){this.allSublayers.destroy()}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(Ce).then(()=>this._fetchService(t)).then(()=>this._checkLayerValidity())),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return r?new M({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]}):null}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}get featureInfoFormat(){return this.featureInfoFormats==null?null:this.featureInfoFormats.find(ye)??this.featureInfoFormats.find(he)??null}set featureInfoFormat(e){e==null?(this.revert("featureInfoFormat","service"),this._clearOverride("featureInfoFormat")):(ye(e)||he(e))&&this._override("featureInfoFormat",e)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new O(t.spatialReferences[0])}writeSpatialReferences(e,t){const r=this.spatialReference?.wkid;e&&r?(t.spatialReferences=e.filter(n=>n!==r),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return ge(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return ge(t.layers,r)}writeSublayers(e,t,r,n){t.layers=[];const i=new Map,s=e.flatten(({sublayers:a})=>a??[]);for(const a of s)if(typeof a.parent?.id=="number"){const u=i.get(a.parent.id);u!=null?u.push(a.id):i.set(a.parent.id,[a.id])}for(const a of s){const u={sublayer:a,...n},c=a.write({parentLayerId:typeof a.parent?.id=="number"?a.parent.id:-1},u);if(i.has(a.id)&&(c.sublayerIds=i.get(a.id)),!a.sublayers&&a.name){const g=a.write({},u);delete g.id,t.layers.push(g)}}t.visibleLayers=s.filter(({visible:a,sublayers:u})=>a&&!u).map(({name:a})=>a).toArray()}set url(e){if(!e)return void this._set("url",e);const{path:t,query:r}=we(e);for(const i in r)/^(request|service)$/i.test(i)&&delete r[i];const n=ne(t,r??{});this._set("url",n)}createExportImageParameters(e,t,r,n){const i=n?.pixelRatio??1,s=ie({extent:e,width:t})*i,a=new se({layer:this,scale:s}),{xmin:u,ymin:c,xmax:g,ymax:p,spatialReference:f}=e,y=wt(f,this.spatialReferences),d=this.version==="1.3.0"&&Z(y)?`${c},${u},${p},${g}`:`${u},${c},${g},${p}`,v=a.toJSON(),I=this.version==="1.3.0"?"crs":"srs";return{bbox:d,[I]:y==null||isNaN(y)?void 0:"EPSG:"+y,...v}}async fetchImage(e,t,r,n){const i=this.mapUrl,s=this.createExportImageParameters(e,t,r,n);if(!s.layers){const c=document.createElement("canvas");return c.width=t,c.height=r,c}const a=de(n?.timeExtent),u={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...s,time:a,...this.refreshParameters}),signal:n?.signal};return D(i??"",u).then(c=>c.data)}async fetchImageBitmap(e,t,r,n){const i=this.mapUrl??"",s=this.createExportImageParameters(e,t,r,n);if(!s.layers){const g=document.createElement("canvas");return g.width=t,g.height=r,g}const a=de(n?.timeExtent),u={responseType:"blob",query:this._mixCustomParameters({width:t,height:r,...s,time:a,...this.refreshParameters}),signal:n?.signal},{data:c}=await D(i,u);return lt(c,i,n?.signal)}fetchFeatureInfo(e,t,r,n,i){const s=ie({extent:e,width:t}),a=new se({layer:this,scale:s}),u=mt(a.visibleSublayers);if(this.featureInfoUrl==null||u==null)return Promise.resolve([]);if(this.fetchFeatureInfoFunction==null&&this.featureInfoFormat==null)return Promise.resolve([]);const c=this.version==="1.3.0"?{I:n,J:i}:{x:n,y:i},g={query_layers:u,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...c},p={...this.createExportImageParameters(e,t,r),...g},f=this._mixCustomParameters(p);return this.fetchFeatureInfoFunction!=null?this.fetchFeatureInfoFunction(f):this._defaultFetchFeatureInfoFunction(ne(this.featureInfoUrl,f))}findSublayerById(e){return this.allSublayers.find(t=>t.id===e)}findSublayerByName(e){return this.allSublayers.find(t=>t.name===e)}serviceSupportsSpatialReference(e){return qe(this.url)||this.spatialReferences!=null&&this.spatialReferences.some(t=>{const r=t===900913?O.WebMercator:new O({wkid:t});return Ve(r,e)})}_defaultFetchFeatureInfoFunction(e){const t=document.createElement("iframe");t.src=Be(e),t.style.border="none",t.style.margin="0",t.style.width="100%",t.setAttribute("sandbox","");const r=new We({title:this.title,content:t}),n=new De({sourceLayer:this,popupTemplate:r});return Promise.resolve([n])}async _fetchService(e){if(!this.resourceInfo&&this.parsedUrl?.path){const{path:t,query:r}=this.parsedUrl,{data:n}=await D(t,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...r,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=pt(n)}if(this.parsedUrl){const t=new ke(this.parsedUrl.path),{httpsDomains:r}=Ge.request;t.scheme!=="https"||t.port&&t.port!=="443"||!t.host||r.includes(t.host)||r.push(t.host)}this.read(this.resourceInfo,{origin:"service"})}_checkLayerValidity(){if(!this.allSublayers.length)throw new xe("wmslayer:empty-layer","The layer doesn't have any sublayer")}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function vt(e,t){return e.some(r=>{for(const n in r)if(Ze(r,n,null,t))return!0;return!1})}function ge(e,t,r){e=e??[];const n=new Map;e.every(s=>s.id==null)&&(e=Xe(e)).forEach((s,a)=>s.id=a);for(const s of e){const a=new z;a.read(s,t),r&&!r.includes(a.name)&&(a.visible=!1),n.set(a.id,a)}const i=[];for(const s of e){const a=s.id!=null?n.get(s.id):null;if(a)if(s.parentLayerId!=null&&s.parentLayerId>=0){const u=n.get(s.parentLayerId);if(!u)continue;u.sublayers||(u.sublayers=new K),u.sublayers.push(a)}else i.push(a)}return i}o([l({readOnly:!0})],m.prototype,"allSublayers",void 0),o([l({json:{type:Object,write:!0}})],m.prototype,"customParameters",void 0),o([l({json:{type:Object,write:!0}})],m.prototype,"customLayerParameters",void 0),o([l({type:String,json:{write:!0}})],m.prototype,"copyright",void 0),o([l()],m.prototype,"description",void 0),o([l({readOnly:!0})],m.prototype,"dimensions",void 0),o([l({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],m.prototype,"fullExtent",void 0),o([$(["web-document","portal-item"],"fullExtent",["extent"])],m.prototype,"readFullExtentFromItemOrMap",null),o([k(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],m.prototype,"writeFullExtent",null),o([l({type:[M]})],m.prototype,"fullExtents",void 0),o([l({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"featureInfoFormat",null),o([l({type:[String],readOnly:!0})],m.prototype,"featureInfoFormats",void 0),o([l({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"featureInfoUrl",void 0),o([l()],m.prototype,"fetchFeatureInfoFunction",void 0),o([l({type:String,json:{origins:{"web-document":{default:"image/png",type:H.jsonValues,read:{reader:H.read,source:"format"},write:{writer:H.write,target:"format"}}}}})],m.prototype,"imageFormat",void 0),o([$("imageFormat",["supportedImageFormatTypes"])],m.prototype,"readImageFormat",null),o([l({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],m.prototype,"imageMaxHeight",void 0),o([l({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],m.prototype,"imageMaxWidth",void 0),o([l()],m.prototype,"imageTransparency",void 0),o([l(at)],m.prototype,"legendEnabled",void 0),o([l({type:["show","hide","hide-children"]})],m.prototype,"listMode",void 0),o([l({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"mapUrl",void 0),o([l({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],m.prototype,"isReference",void 0),o([l({type:["WMS"]})],m.prototype,"operationalLayerType",void 0),o([l()],m.prototype,"resourceInfo",void 0),o([l({type:O,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],m.prototype,"spatialReference",void 0),o([$(["web-document","portal-item"],"spatialReference",["spatialReferences"])],m.prototype,"readSpatialReferenceFromItemOrDocument",null),o([l({type:[Je],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],m.prototype,"spatialReferences",void 0),o([k(["web-document","portal-item"],"spatialReferences")],m.prototype,"writeSpatialReferences",null),o([l({type:K.ofType(z),json:{write:{target:"layers",overridePolicy(e,t,r){if(vt(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],m.prototype,"sublayers",void 0),o([$(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],m.prototype,"readSublayersFromItemOrMap",null),o([$("service","sublayers",["layers"])],m.prototype,"readSublayers",null),o([k("sublayers",{layers:{type:[z]},visibleLayers:{type:[String]}})],m.prototype,"writeSublayers",null),o([l({json:{read:!1},readOnly:!0,value:"wms"})],m.prototype,"type",void 0),o([l(ot)],m.prototype,"url",null),o([l({type:String,json:{write:{ignoreOrigin:!0}}})],m.prototype,"version",void 0),m=o([be("esri.layers.WMSLayer")],m);const Yt=m;export{Yt as default};
