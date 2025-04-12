import{s as b,bE as f}from"./main-DVcB5zI_.js";import{s as S}from"./associatedFeatureServiceUtils-BWHcQsCY.js";import{t as I,i as h,b as v}from"./fetchService-Dvoe92tu.js";import w from"./PortalItem-CptTE56-.js";import{s as p}from"./portalItemUtils-DIbhp7Hv.js";class M{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(t,a){const r=this._serviceMetadatas.get(t);if(r)return r;const s=await I(t,a);return this._serviceMetadatas.set(t,s),s}async fetchItemData(t){const{id:a}=t;if(!a)return null;const{_itemDatas:r}=this;if(r.has(a))return r.get(a);const s=await t.fetchData();return r.set(a,s),s}async fetchCustomParameters(t,a){const r=await this.fetchItemData(t);return r&&typeof r=="object"&&(a?a(r):r.customParameters)||null}}function l(e){const t={id:e.id,name:e.name},a=h(e.type);return a!=="FeatureLayer"&&(t.layerType=a),t}async function P(e,t,a){if(e?.layers==null||e?.tables==null){const r=await a.fetchServiceMetadata(t,{customParameters:o(e)?.customParameters});(e=e||{}).layers=e.layers||r?.layers?.map(l),e.tables=e.tables||r?.tables?.map(l)}return e}function o(e){if(!e)return null;const{layers:t,tables:a}=e;return t?.length?t[0]:a?.length?a[0]:null}function T(e,t){return t==null?null:[...e.layers||[],...e.tables||[]].find(a=>a.id===t)}function re(e,t){return[...e.layers||[],...e.tables||[]].filter(({layerType:a})=>a?a===t:t==="ArcGISFeatureLayer")}function L(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function se(e){switch(e){case"catalog":return"CatalogLayer";case"feature":return"ArcGISFeatureLayer";case"oriented-imagery":return"OrientedImageryLayer";case"subtype-group":return"SubtypeGroupLayer"}return null}function C(e){switch(e){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":return"SubtypeGroupLayer"}return"FeatureLayer"}async function G(e,t,a){if(!e?.url)return t??{};if(t??={},!t.layers){const n=await a.fetchServiceMetadata(e.url);t.layers=n.layers?.map(l)}const{serverUrl:r,portalItem:s}=await S(e.url,{sceneLayerItem:e,customParameters:o(t)?.customParameters}).catch(()=>({serverUrl:null,portalItem:null}));if(r==null)return t.tables=[],t;if(!t.tables&&s){const n=await s.fetchData().catch(()=>null);if(n?.tables)t.tables=n.tables.map(l);else{const c=await a.fetchServiceMetadata(r,{customParameters:o(n)?.customParameters}).catch(()=>null);t.tables=c?.tables?.map(l)}}if(t.tables)for(const n of t.tables)n.url=`${r}/${n.id}`;return t}async function F(e){let{portalItem:t}=e;!t||t instanceof w||(t=new w(t));const a=await D(t);return new a.constructor({portalItem:t,...a.properties})}async function D(e){await e.load();const t=new M;return j(await N(e,t))}async function N(e,t){switch(e.type){case"3DTiles Service":return U();case"CSV":return k();case"Feature Collection":return K(e);case"Feature Service":return _(e,t);case"Feed":return B();case"GeoJson":return x();case"Group Layer":return H();case"Image Service":return V(e,t);case"KML":return A();case"Knowledge Graph Layer":return E();case"Map Service":return O(e,t);case"Media Layer":return Q();case"Scene Service":return $(e,t);case"Stream Service":return W();case"Vector Tile Service":return J();case"WFS":return R();case"WMS":return z();case"WMTS":return q();default:throw new b("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function j(e){const t=e.className,a=v[t];return{constructor:await a(),properties:e.properties}}async function O(e,t){return await X(e,t)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function _(e,t){const a=await g(e,t);if(typeof a=="object"){const{sourceJSON:r,className:s}=a,n={sourceJSON:r};return a.id!=null&&(n.layerId=a.id),{className:s||"FeatureLayer",properties:n}}return{className:"GroupLayer"}}async function $(e,t){const a=await g(e,t,async()=>{try{if(!e.url)return[];const{serverUrl:r}=await S(e.url,{sceneLayerItem:e});return(await t.fetchServiceMetadata(r))?.tables??[]}catch{return[]}});if(typeof a=="object"){const r={};let s;if(a.id!=null?(r.layerId=a.id,s=`${e.url}/layers/${a.id}`):s=e.url,e.typeKeywords?.length){for(const c of Object.keys(f))if(e.typeKeywords.includes(c))return{className:f[c]}}const n=await t.fetchServiceMetadata(s,{customParameters:await t.fetchCustomParameters(e,c=>o(c)?.customParameters)});return{className:f[n?.layerType]||"SceneLayer",properties:r}}return a===!1&&(await t.fetchServiceMetadata(e.url))?.layerType==="Voxel"?{className:"VoxelLayer"}:{className:"GroupLayer"}}async function K(e){await e.load();const t=p(e,"Map Notes"),a=p(e,"Markup");if(t||a)return{className:"MapNotesLayer"};if(p(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return L(r)===1?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function V(e,t){await e.load();const a=e.typeKeywords?.map(m=>m.toLowerCase())??[];if(a.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(a.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=await t.fetchItemData(e),s=r?.layerType;if(s==="ArcGISTiledImageServiceLayer")return{className:"ImageryTileLayer"};if(s==="ArcGISImageServiceLayer")return{className:"ImageryLayer"};const n=await t.fetchServiceMetadata(e.url,{customParameters:await t.fetchCustomParameters(e)}),c=n.cacheType?.toLowerCase(),y=n.capabilities?.toLowerCase().includes("tilesonly"),u=n.tileInfo?.format?.toLowerCase()??"",i=c==null&&["jpg","jpeg","png","png8","png24","png32","mixed"].includes(u);return c==="map"||i||y?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function W(){return{className:"StreamLayer"}}function J(){return{className:"VectorTileLayer"}}function x(){return{className:"GeoJSONLayer"}}function U(){return{className:"IntegratedMesh3DTilesLayer"}}function k(){return{className:"CSVLayer"}}function A(){return{className:"KMLLayer"}}function E(){return{className:"KnowledgeGraphLayer"}}function R(){return{className:"WFSLayer"}}function z(){return{className:"WMSLayer"}}function q(){return{className:"WMTSLayer"}}function B(){return{className:"StreamLayer"}}function H(){return{className:"GroupLayer"}}function Q(){return{className:"MediaLayer"}}async function X(e,t){const{tileInfo:a}=await t.fetchServiceMetadata(e.url,{customParameters:await t.fetchCustomParameters(e)});return a}async function g(e,t,a){const{url:r,type:s}=e,n=s==="Feature Service";if(!r)return{};if(/\/\d+$/.test(r)){if(n){const u=await t.fetchServiceMetadata(r,{customParameters:await t.fetchCustomParameters(e,i=>o(i)?.customParameters)});return{id:u.id,className:h(u.type),sourceJSON:u}}return{}}await e.load();let c=await t.fetchItemData(e);if(n){const u=await P(c,r,t),i=d(u);if(typeof i=="object"){const m=T(u,i.id);i.className=C(m?.layerType)}return i}if(s==="Scene Service"&&(c=await G(e,c,t)),L(c)>0)return d(c);const y=await t.fetchServiceMetadata(r);return a&&(y.tables=await a()),d(y)}function d(e){return L(e)===1&&{id:o(e)?.id}}const ne=Object.freeze(Object.defineProperty({__proto__:null,fromItem:F,selectLayerClassPath:N},Symbol.toStringTag,{value:"Module"}));export{N as L,P as a,se as c,M as e,C as i,o as l,re as n,G as o,ne as p,l as t,L as u};
