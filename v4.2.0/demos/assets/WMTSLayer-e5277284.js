import{jx as ee,e as o,y as n,w as R,f8 as H,k as N,dB as z,dO as C,bv as B,c as _,jy as X,bh as he,fL as ye,jz as W,jA as fe,r as Y,dG as ge,dH as we,dK as xe,dI as ve,dJ as Se,dL as Me,bp as te,e2 as U,br as re,dM as ie,jB as Ie,jC as Le,jD as Te,U as K,fJ as be,a9 as se,L as ae,fb as Ee,e1 as Pe,a4 as Ce}from"./main-8009ebf4.js";import{o as le}from"./xmlUtils-444cb4c0.js";import"./preload-helper-388ac9d5.js";let Oe=class{constructor(t,r=0,i=t.lods.length-1){this.tileInfo=t,this.minLOD=r,this.maxLOD=i}getAvailability(t,r,i){const s=this.tileInfo?.lodAt(t);return!s||t<this.minLOD||t>this.maxLOD?"unavailable":s.cols&&s.rows?i>=s.cols[0]&&i<=s.cols[1]&&r>=s.rows[0]&&r<=s.rows[1]?"available":"unavailable":"available"}async fetchAvailability(t,r,i,s){return await ee(s),this.getAvailability(t,r,i)}async fetchAvailabilityUpsample(t,r,i,s,l){await ee(l),s.level=t,s.row=r,s.col=i;const a=this.tileInfo;for(a.updateTileInfo(s);;){const u=this.getAvailability(s.level,s.row,s.col);if(u!=="unavailable")return u;if(!a.upsampleTile(s))return"unavailable"}}};var J;let $=J=class extends z{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new J;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}};o([n({type:R,json:{read:{source:"fullExtent"}}})],$.prototype,"fullExtent",void 0),o([n({type:String,json:{read:{source:"id"}}})],$.prototype,"id",void 0),o([n({type:H,json:{read:{source:"tileInfo"}}})],$.prototype,"tileInfo",void 0),$=J=o([N("esri.layer.support.TileMatrixSet")],$);const Re=$;var G;let T=G=class extends z{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new G;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};o([n({json:{read:{source:"id"}}})],T.prototype,"id",void 0),o([n({json:{read:{source:"title"}}})],T.prototype,"title",void 0),o([n({json:{read:{source:"abstract"}}})],T.prototype,"description",void 0),o([n({json:{read:{source:"legendUrl"}}})],T.prototype,"legendUrl",void 0),o([n({json:{read:{source:"isDefault"}}})],T.prototype,"isDefault",void 0),o([n({json:{read:{source:"keywords"}}})],T.prototype,"keywords",void 0),T=G=o([N("esri.layer.support.WMTSStyle")],T);const $e=T;var q;let x=q=class extends z{constructor(e){super(e),this.fullExtent=null,this.fullExtents=null,this.imageFormats=null,this.id=null,this.layer=null,this.styles=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}get description(){return this._get("description")}set description(e){this._set("description",e)}readFullExtent(e,t){return(e=t.fullExtent)?R.fromJSON(e):null}readFullExtents(e,t){return t.fullExtents?.length?t.fullExtents.map(r=>R.fromJSON(r)):t.tileMatrixSets?.map(r=>R.fromJSON(r.fullExtent)).filter(r=>r)??[]}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.includes("image/")||t&&!t.includes(e))&&(e.includes("image/")||(e="image/"+e),t&&!t.includes(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){let e=this._get("styleId");return e||(e=this.styles?.length?this.styles.getItemAt(0).id:""),e}set styleId(e){this._set("styleId",e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find(e=>e.id===this.tileMatrixSetId):null}clone(){const e=new q;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=this.tileMatrixSets?.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}};o([n()],x.prototype,"description",null),o([n()],x.prototype,"fullExtent",void 0),o([C("fullExtent",["fullExtent"])],x.prototype,"readFullExtent",null),o([n({readOnly:!0})],x.prototype,"fullExtents",void 0),o([C("fullExtents",["fullExtents","tileMatrixSets"])],x.prototype,"readFullExtents",null),o([n()],x.prototype,"imageFormat",null),o([n({json:{read:{source:"formats"}}})],x.prototype,"imageFormats",void 0),o([n()],x.prototype,"id",void 0),o([n()],x.prototype,"layer",void 0),o([n()],x.prototype,"styleId",null),o([n({type:B.ofType($e),json:{read:{source:"styles"}}})],x.prototype,"styles",void 0),o([n({value:null,json:{write:{ignoreOrigin:!0}}})],x.prototype,"title",null),o([n()],x.prototype,"tileMatrixSetId",void 0),o([n({readOnly:!0})],x.prototype,"tileMatrixSet",null),o([n({type:B.ofType(Re),json:{read:{source:"tileMatrixSets"}}})],x.prototype,"tileMatrixSets",void 0),x=q=o([N("esri.layers.support.WMTSSublayer")],x);const j=x,ce=90.71428571428571;function oe(e){const t=e.replace(/ows:/gi,"");if(!g("Contents",new DOMParser().parseFromString(t,"text/xml").documentElement))throw new _("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:e})}function Fe(e,t){e=e.replace(/ows:/gi,"");const r=new DOMParser().parseFromString(e,"text/xml").documentElement,i=new Map,s=new Map,l=g("Contents",r);if(!l)throw new _("wmtslayer:wmts-capabilities-xml-is-not-valid");const a=g("OperationsMetadata",r)?.querySelector("[name='GetTile']"),u=a?.getElementsByTagName("Get"),c=u&&Array.prototype.slice.call(u),m=t.url?.indexOf("https"),y=m!==void 0&&m>-1;let p,w,S=t.serviceMode,f=t?.url;c&&c.length&&c.some(M=>{const L=g("Constraint",M);return!L||A("AllowedValues","Value",S,L)?(f=M.attributes[0].nodeValue,!0):(!L||A("AllowedValues","Value","RESTful",L)||A("AllowedValues","Value","REST",L)?w=M.attributes[0].nodeValue:L&&!A("AllowedValues","Value","KVP",L)||(p=M.attributes[0].nodeValue),!1)}),!f&&(w?(f=w,S="RESTful"):p?(f=p,S="KVP"):f=g("ServiceMetadataURL",r)?.getAttribute("xlink:href"));const b=f.indexOf("1.0.0/");b===-1&&S==="RESTful"?f+="/":b>-1&&(f=f.substring(0,b)),S==="KVP"&&(f+=b>-1?"":"?"),y&&(f=f.replace(/^http:/i,"https:"));const F=h("ServiceIdentification>ServiceTypeVersion",r),v=h("ServiceIdentification>AccessConstraints",r),I=v&&/^none$/i.test(v)?null:v,E=P("Layer",l),D=P("TileMatrixSet",l),k=E.map(M=>{const L=h("Identifier",M);return i.set(L,M),Ve(L,M,D,y,F)});return{copyright:I,dimensionMap:s,layerMap:i,layers:k,serviceMode:S,tileUrl:f}}function Ae(e){return e.layers.forEach(t=>{t.tileMatrixSets?.forEach(r=>{const i=r.tileInfo;i&&i.dpi!==96&&(i.lods?.forEach(s=>{s.scale=96*s.scale/i.dpi,s.resolution=me(i.spatialReference?.wkid,s.scale*ce/96,r.id)}),i.dpi=96)})}),e}function Q(e){return e.nodeType===Node.ELEMENT_NODE}function g(e,t){for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];if(Q(i)&&i.nodeName===e)return i}return null}function P(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];Q(s)&&s.nodeName===e&&r.push(s)}return r}function O(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];Q(s)&&s.nodeName===e&&r.push(s)}return r.map(i=>i.textContent).filter(Y)}function h(e,t){return e.split(">").forEach(r=>{t&&(t=g(r,t))}),t&&t.textContent}function A(e,t,r,i){let s;return Array.prototype.slice.call(i.childNodes).some(l=>{if(l.nodeName.includes(e)){const a=g(t,l),u=a&&a.textContent;if(u===r||r.split(":")&&r.split(":")[1]===u)return s=l,!0}return!1}),s}function Ve(e,t,r,i,s){const l=h("Abstract",t),a=O("Format",t);return{id:e,fullExtent:Ne(t),fullExtents:De(t),description:l,formats:a,styles:ke(t,i),title:h("Title",t),tileMatrixSets:We(s,t,r)}}function pe(e,t){const r=[],i=e.layerMap?.get(t);if(!i)return null;const s=P("ResourceURL",i),l=P("Dimension",i);let a,u,c,m;return l.length&&(a=h("Identifier",l[0]),u=O("Default",l[0])||O("Value",l[0])),l.length>1&&(c=h("Identifier",l[1]),m=O("Default",l[1])||O("Value",l[1])),e.dimensionMap.set(t,{dimensions:u,dimensions2:m}),s.forEach(y=>{let p=y.getAttribute("template");if(y.getAttribute("resourceType")==="tile"){if(a&&u.length)if(p.includes("{"+a+"}"))p=p.replace("{"+a+"}","{dimensionValue}");else{const w=p.toLowerCase().indexOf("{"+a.toLowerCase()+"}");w>-1&&(p=p.substring(0,w)+"{dimensionValue}"+p.substring(w+a.length+2))}if(c&&m.length)if(p.includes("{"+c+"}"))p=p.replace("{"+c+"}","{dimensionValue2}");else{const w=p.toLowerCase().indexOf("{"+c.toLowerCase()+"}");w>-1&&(p=p.substring(0,w)+"{dimensionValue2}"+p.substring(w+c.length+2))}r.push({template:p,format:y.getAttribute("format"),resourceType:"tile"})}}),r}function je(e,t,r,i,s,l,a,u){const c=Ue(e,t,i);if(!(c?.length>0))return"";const{dimensionMap:m}=e,y=m.get(t).dimensions?.[0],p=m.get(t).dimensions2?.[0];return c[a%c.length].template.replace(/\{Style\}/gi,s??"").replace(/\{TileMatrixSet\}/gi,r??"").replace(/\{TileMatrix\}/gi,l).replace(/\{TileRow\}/gi,""+a).replace(/\{TileCol\}/gi,""+u).replace(/\{dimensionValue\}/gi,y).replace(/\{dimensionValue2\}/gi,p)}function Ue(e,t,r){const i=pe(e,t),s=i?.filter(l=>l.format===r);return(s?.length?s:i)??[]}function _e(e,t,r,i){const{dimensionMap:s}=e,l=pe(e,t);let a="";if(l&&l.length>0){const u=s.get(t).dimensions&&s.get(t).dimensions[0],c=s.get(t).dimensions2&&s.get(t).dimensions2[0];a=l[0].template,a.indexOf(".xxx")===a.length-4&&(a=a.slice(0,a.length-4)),a=a.replace(/\{Style\}/gi,i),a=a.replace(/\{TileMatrixSet\}/gi,r),a=a.replace(/\{TileMatrix\}/gi,"{level}"),a=a.replace(/\{TileRow\}/gi,"{row}"),a=a.replace(/\{TileCol\}/gi,"{col}"),a=a.replace(/\{dimensionValue\}/gi,u),a=a.replace(/\{dimensionValue2\}/gi,c)}return a}function Ne(e){const t=g("WGS84BoundingBox",e),r=t?h("LowerCorner",t).split(" "):["-180","-90"],i=t?h("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function De(e){const t=[];return le(e,{BoundingBox:r=>{if(!r.getAttribute("crs"))return;const i=r.getAttribute("crs").toLowerCase(),s=Z(i),l=i.includes("epsg")&&X(s.wkid);let a,u,c,m;le(r,{LowerCorner:y=>{[a,u]=y.textContent.split(" ").map(p=>Number.parseFloat(p)),l&&([a,u]=[u,a])},UpperCorner:y=>{[c,m]=y.textContent.split(" ").map(p=>Number.parseFloat(p)),l&&([c,m]=[m,c])}}),t.push({xmin:a,ymin:u,xmax:c,ymax:m,spatialReference:s})}}),t}function ke(e,t){return P("Style",e).map(r=>{const i=g("LegendURL",r),s=g("Keywords",r),l=s?O("Keyword",s):[];let a=i&&i.getAttribute("xlink:href");return t&&(a=a&&a.replace(/^http:/i,"https:")),{abstract:h("Abstract",r),id:h("Identifier",r),isDefault:r.getAttribute("isDefault")==="true",keywords:l,legendUrl:a,title:h("Title",r)}})}function We(e,t,r){return P("TileMatrixSetLink",t).map(i=>Ke(e,i,r))}function Ke(e,t,r){const i=g("TileMatrixSet",t).textContent,s=O("TileMatrix",t),l=r.find(v=>{const I=g("Identifier",v),E=I&&I.textContent;return!!(E===i||i.split(":")&&i.split(":")[1]===E)}),a=g("TileMatrixSetLimits",t),u=a&&P("TileMatrixLimits",a),c=new Map;if(u?.length)for(const v of u){const I=g("TileMatrix",v).textContent,E=+g("MinTileRow",v).textContent,D=+g("MaxTileRow",v).textContent,k=+g("MinTileCol",v).textContent,M=+g("MaxTileCol",v).textContent;c.set(I,{minCol:k,maxCol:M,minRow:E,maxRow:D})}const m=h("SupportedCRS",l).toLowerCase(),y=Be(l,m),p=y.spatialReference,w=g("TileMatrix",l),S=[parseInt(h("TileWidth",w),10),parseInt(h("TileHeight",w),10)],f=[];s.length?s.forEach((v,I)=>{const E=A("TileMatrix","Identifier",v,l);f.push(ne(E,m,I,i,c))}):P("TileMatrix",l).forEach((v,I)=>{f.push(ne(v,m,I,i,c))});const b=Je(e,l,y,S,f[0]).toJSON(),F=new H({dpi:96,spatialReference:p,size:S,origin:y,lods:f}).toJSON();return{id:i,fullExtent:b,tileInfo:F}}function Z(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);t!==900913&&t!==3857||(t=102100);const r=qe(e);return Y(r)&&(t=r),{wkid:t}}function Be(e,t){return de(g("TileMatrix",e),t)}function de(e,t){const r=Z(t),[i,s]=h("TopLeftCorner",e).split(" ").map(a=>parseFloat(a)),l=t.includes("epsg")&&X(r.wkid);return new he(l?{x:s,y:i,spatialReference:r}:{x:i,y:s,spatialReference:r})}function Je(e,t,r,i,s){const l=g("BoundingBox",t);let a,u,c,m,y,p;if(l&&(a=h("LowerCorner",l).split(" "),u=h("UpperCorner",l).split(" ")),a&&a.length>1&&u&&u.length>1)c=parseFloat(a[0]),y=parseFloat(a[1]),m=parseFloat(u[0]),p=parseFloat(u[1]);else{const w=g("TileMatrix",t),S=parseInt(h("MatrixWidth",w),10),f=parseInt(h("MatrixHeight",w),10);c=r.x,p=r.y,m=c+S*i[0]*s.resolution,y=p-f*i[1]*s.resolution}return Ge(e,r.spatialReference,r)?new R(y,c,p,m,r.spatialReference):new R(c,y,m,p,r.spatialReference)}function Ge(e,t,r){return e==="1.0.0"&&X(t.wkid)&&!(r.spatialReference.isGeographic&&r.x<-90&&r.y>=-90)}var V;function qe(e){return e.includes("crs84")||e.includes("crs:84")?V.CRS84:e.includes("crs83")||e.includes("crs:83")?V.CRS83:e.includes("crs27")||e.includes("crs:27")?V.CRS27:null}function ne(e,t,r,i,s){const l=Z(t),a=h("Identifier",e);let u=parseFloat(h("ScaleDenominator",e));const c=me(l.wkid,u,i);u*=96/ce;const m=+h("MatrixWidth",e),y=+h("MatrixHeight",e),{maxCol:p=m-1,maxRow:w=y-1,minCol:S=0,minRow:f=0}=s.get(a)??{},{x:b,y:F}=de(e,t);return new ye({cols:[S,p],level:r,levelValue:a,origin:[b,F],scale:u,resolution:c,rows:[f,w]})}function me(e,t,r){let i;return i=W.hasOwnProperty(""+e)?W.values[W[e]]:r==="default028mm"?6370997*Math.PI/180:fe(e).metersPerDegree,7*t/25e3/i}(function(e){e[e.CRS84=4326]="CRS84",e[e.CRS83=4269]="CRS83",e[e.CRS27=4267]="CRS27"})(V||(V={}));const ue={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},He=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let d=class extends ge(we(xe(ve(Se(Me(Ce)))))){constructor(...e){super(...e),this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.addHandles([te(()=>this.activeLayer,(t,r)=>{r&&(r.layer=null),t&&(t.layer=this)},U),re(()=>this.sublayers,"after-add",({item:t})=>{t.layer=this},U),re(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=null},U),te(()=>this.sublayers,(t,r)=>{if(r)for(const i of r)i.layer=null;if(t)for(const i of t)i.layer=this},U)])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){if(this.serviceMode==="KVP"||this.serviceMode==="RESTful")return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(ie).then(()=>this._fetchService(e)).catch(t=>{throw ie(t),new _("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:t})})),Promise.resolve(this);console.error("WMTS mode could only be 'KVP' or 'RESTful'")}get activeLayer(){return this._get("activeLayer")}set activeLayer(e){this._set("activeLayer",e)}readActiveLayerFromService(e,t,r){this.activeLayer||(this.activeLayer=new j);let i=t.layers.find(s=>s.id===this.activeLayer.id);return i||(i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,l=i?.layerIdentifier;let a=null;const u=i?.tileMatrixSet;u&&(Array.isArray(u)?u.length&&(a=u[0]):a=u);const c=s?.format,m=s?.style;return new j({id:l,imageFormat:c,styleId:m,tileMatrixSetId:a})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const l=Ie("tileMatrixSet.tileInfo",s);t.tileInfo=l?l.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"}readSublayersFromService(e,t,r){return ze(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets?.map(e=>e.tileInfo?.spatialReference).toArray().filter(Y)??[]}get tilemapCache(){const e=this.activeLayer?.tileMatrixSet?.tileInfo;return e?new Oe(e):void 0}get title(){return this.activeLayer?.title??"Layer"}set title(e){this._overrideIfSome("title",e)}get url(){return this._get("url")}set url(e){e&&e.substr(-1)==="/"?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId)?.tileInfo,i=e.fullExtent,s=new Le({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(s.customLayerParameters=this.customLayerParameters),this.customParameters&&(s.customParameters=this.customParameters),new Te({fullExtent:i,urlTemplate:t,tileInfo:r,wmtsInfo:s})}async fetchTile(e,t,r){const i=this.getTileUrl(e,t,r),{data:s}=await K(i,{responseType:"image"});return s}async fetchImageBitmapTile(e,t,r){const i=this.getTileUrl(e,t,r),{data:s}=await K(i,{responseType:"blob"});return be(s,i)}findSublayerById(e){return this.sublayers?.find(t=>t.id===e)}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId)?.tileInfo?.lods[e],s=i?i.levelValue?i.levelValue:`${i.level}`:`${e}`;let l=this.resourceInfo?"":je({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,s,t,r);return l||(l=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,s).replace(/\{row\}/gi,`${t}`).replace(/\{col\}/gi,`${r}`)),l=this._appendCustomLayerParameters(l),l}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const s=_e({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(s)return s}if(this.serviceMode==="KVP")return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if(this.serviceMode==="RESTful"){let s="";return ue[r.toLowerCase()]&&(s=ue[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return""}async _fetchService(e){let t;if(this.resourceInfo)this.resourceInfo.serviceMode==="KVP"&&(this.url+=this.url.includes("?")?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e),oe(t.data)}catch{const r=this.serviceMode==="KVP"?"RESTful":"KVP";try{t=await this._getCapabilities(r,e),oe(t.data),this.serviceMode=r}catch(i){throw new _("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:i})}}this.resourceInfo?t.data=Ae(t.data):t.data=Fe(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,t){const r=this._getCapabilitiesUrl(e);return await K(r,{...t,responseType:"text"})}_getTileMatrixSetById(e){return this.findSublayerById(this.activeLayer.id)?.tileMatrixSets?.find(r=>r.id===e)}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...se(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const r=ae(e),i={...r.query,...t},s=Ee(i);return s===""?r.path:`${r.path}?${s}`}_getCapabilitiesUrl(e){this.url=this.url.split("?")[0];const t=e==="KVP"?`${this.url}?request=GetCapabilities&service=WMTS&version=${this.version}`:`${this.url}/${this.version}/WMTSCapabilities.xml`;return this._appendCustomParameters(t)}_getLowerCasedUrlParams(e){if(!e)return null;const t=ae(e).query;if(!t)return null;const r={};return Object.keys(t).forEach(i=>{r[i.toLowerCase()]=t[i]}),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const i=Object.keys(r);i.length&&(e=e?se(e):{},i.forEach(s=>{e.hasOwnProperty(s)||He.has(s)||(e[s]=r[s])}))}return e}};function ze(e,t){return e.map(r=>{const i=new j;return i.read(r,t),i})}o([n()],d.prototype,"dimensionMap",void 0),o([n()],d.prototype,"layerMap",void 0),o([n({type:j,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],d.prototype,"activeLayer",null),o([C("service","activeLayer",["layers"])],d.prototype,"readActiveLayerFromService",null),o([C(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],d.prototype,"readActiveLayerFromItemOrWebDoc",null),o([Pe(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:H},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],d.prototype,"writeActiveLayer",null),o([n({type:String,value:"",json:{write:!0}})],d.prototype,"copyright",void 0),o([n({type:["show","hide"]})],d.prototype,"listMode",void 0),o([n({json:{read:!0,write:!0}})],d.prototype,"blendMode",void 0),o([n({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],d.prototype,"customParameters",void 0),o([C(["portal-item","web-document"],"customParameters")],d.prototype,"readCustomParameters",null),o([n({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],d.prototype,"customLayerParameters",void 0),o([n({type:R,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],d.prototype,"fullExtent",void 0),o([n({readOnly:!0})],d.prototype,"fullExtents",null),o([n({type:["WebTiledLayer"]})],d.prototype,"operationalLayerType",void 0),o([n()],d.prototype,"resourceInfo",void 0),o([n()],d.prototype,"serviceMode",void 0),o([C(["portal-item","web-document"],"serviceMode",["templateUrl"])],d.prototype,"readServiceMode",null),o([n({type:B.ofType(j)})],d.prototype,"sublayers",void 0),o([C("service","sublayers",["layers"])],d.prototype,"readSublayersFromService",null),o([n({readOnly:!0})],d.prototype,"supportedSpatialReferences",null),o([n({readOnly:!0})],d.prototype,"tilemapCache",null),o([n({json:{read:{source:"title"}}})],d.prototype,"title",null),o([n({json:{read:!1},readOnly:!0,value:"wmts"})],d.prototype,"type",void 0),o([n({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],d.prototype,"url",null),o([n()],d.prototype,"version",void 0),d=o([N("esri.layers.WMTSLayer")],d);const et=d;export{et as default};
