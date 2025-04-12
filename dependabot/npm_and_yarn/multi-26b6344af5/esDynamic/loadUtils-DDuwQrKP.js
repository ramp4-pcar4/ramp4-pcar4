import{t as i,i as o}from"./fetchService-DhSw0l78.js";import{s as y}from"./associatedFeatureServiceUtils-CCZNkoIs.js";class m{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,t){const r=this._serviceMetadatas.get(e);if(r)return r;const s=await i(e,t);return this._serviceMetadatas.set(e,s),s}async fetchItemData(e){const{id:t}=e;if(!t)return null;const{_itemDatas:r}=this;if(r.has(t))return r.get(t);const s=await e.fetchData();return r.set(t,s),s}async fetchCustomParameters(e,t){const r=await this.fetchItemData(e);return r&&typeof r=="object"&&(t?t(r):r.customParameters)||null}}function l(a){const e={id:a.id,name:a.name},t=o(a.type);return t!=="FeatureLayer"&&(e.layerType=t),e}async function f(a,e,t){if(a?.layers==null||a?.tables==null){const r=await t.fetchServiceMetadata(e,{customParameters:u(a)?.customParameters});(a=a||{}).layers=a.layers||r?.layers?.map(l),a.tables=a.tables||r?.tables?.map(l)}return a}function u(a){if(!a)return null;const{layers:e,tables:t}=a;return e?.length?e[0]:t?.length?t[0]:null}function p(a,e){return e==null?null:[...a.layers||[],...a.tables||[]].find(t=>t.id===e)}function b(a,e){return[...a.layers||[],...a.tables||[]].filter(({layerType:t})=>t?e.includes(t):e.includes("ArcGISFeatureLayer"))}function h(a){return(a?.layers?.length??0)+(a?.tables?.length??0)}function d(a){switch(a){case"catalog":return["CatalogLayer"];case"feature":return["ArcGISFeatureLayer"];case"oriented-imagery":return["OrientedImageryLayer"];case"subtype-group":return["SubtypeGroupLayer","SubtypeGroupTable"]}return null}function g(a){switch(a){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":case"SubtypeGroupTable":return"SubtypeGroupLayer"}return"FeatureLayer"}async function L(a,e,t){if(!a?.url)return e??{};if(e??={},!e.layers){const n=await t.fetchServiceMetadata(a.url);e.layers=n.layers?.map(l)}const{serverUrl:r,portalItem:s}=await y(a.url,{sceneLayerItem:a,customParameters:u(e)?.customParameters}).catch(()=>({serverUrl:null,portalItem:null}));if(r==null)return e.tables=[],e;if(!e.tables&&s){const n=await s.fetchData().catch(()=>null);if(n?.tables)e.tables=n.tables.map(l);else{const c=await t.fetchServiceMetadata(r,{customParameters:u(n)?.customParameters}).catch(()=>null);e.tables=c?.tables?.map(l)}}if(e.tables)for(const n of e.tables)n.url=`${r}/${n.id}`;return e}export{f as a,d as c,m as e,g as i,u as l,b as n,L as o,p as s,l as t,h as u};
