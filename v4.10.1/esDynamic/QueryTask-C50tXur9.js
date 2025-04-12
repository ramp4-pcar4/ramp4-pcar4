import{k as a,o as u,A as w,aD as Q,I as R,a$ as V,bu as c,s as d,bh as j}from"./main-Dv0FawL-.js";import{a as q,d as _}from"./infoFor3D-DIuYZyyK.js";import{K as m,b as I}from"./Query-LHTbNS2H.js";import{f as v}from"./utils-U7OGhcP5.js";import{s as T,a as A}from"./executeForIds-BKpaABFR.js";import{a as z,n as J}from"./executeQueryPBF-55qQdJIX.js";import{a as N}from"./executeQueryJSON-Car9Sj9x.js";import{d as U}from"./FeatureSet-CkOfHtsW.js";let s=class extends Q{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return R(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){const r=this._normalizeQuery(e),i=e.outStatistics?.[0]!=null,n=V("featurelayer-pbf-statistics"),o=!i||n;let l;if(this.pbfSupported&&o)try{l=await z(this.url,r,t)}catch(p){if(p.name!=="query:parsing-pbf")throw p;this.pbfSupported=!1}return this.pbfSupported&&o||(l=await N(this.url,r,t)),this._normalizeFields(l.fields),l}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return U.fromJSON(t);const{meshFeatureSetFromJSON:i}=await c(import("./meshFeatureSet-CCVF1iWq.js"),r);return i(e,this.infoFor3D,t)}executeForCount(e,t){return T(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return J(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return A(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:i}]=await c(Promise.all([import("./RelationshipQuery-DGUGx5Ni.js").then(n=>n.R),import("./executeRelationshipQuery-D-TH9tCW.js")]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),i(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:i}]=await c(Promise.all([import("./RelationshipQuery-DGUGx5Ni.js").then(n=>n.R),import("./executeRelationshipQuery-D-TH9tCW.js")]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),i(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:i,processAttachmentQueryResult:n}=await c(import("./queryAttachments-DS9_1Gp9.js"),t),o=v(this.url);return n(o,await(this.queryAttachmentsSupported?r(o,e,t):i(o,e,t)))}async executeBinsQuery(e,t){const{executeBinsQuery:r}=await c(import("./executeBinsQuery-CWTxxp4r.js"),t);return r(this.parsedUrl,e,t)}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await c(import("./executeTopFeaturesQuery-BA9EYc9L.js"),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await c(import("./executeForTopIds--8y_kc1Z.js"),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await c(import("./executeForTopExtents-Cia8TKsQ.js"),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await c(import("./executeForTopCount-Ep6y7lo_.js"),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=I.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?m.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const i=q(r),n=_(r);for(const o of r.queryFormats){if(o===i){t.formatOf3DObjects=o;break}o!==n||t.formatOf3DObjects||(t.formatOf3DObjects=o)}if(!t.formatOf3DObjects)throw new d("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outSpatialReference&&!j(t.outSpatialReference,this.sourceSpatialReference))throw new d("query:unsupported-out-spatial-reference","3D object feature services do not support projection of geometries");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:o,originY:l,originZ:p,translationX:f,translationY:h,translationZ:y,scaleX:S,scaleY:b,scaleZ:F,rotationX:D,rotationY:x,rotationZ:g,rotationDeg:O}=r.transformFieldRoles;t.outFields.push(o,l,p,f,h,y,S,b,F,D,x,g,O)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};a([u({type:m})],s.prototype,"dynamicDataSource",void 0),a([u()],s.prototype,"fieldsIndex",void 0),a([u()],s.prototype,"gdbVersion",void 0),a([u()],s.prototype,"infoFor3D",void 0),a([u({readOnly:!0})],s.prototype,"parsedUrl",null),a([u()],s.prototype,"pbfSupported",void 0),a([u()],s.prototype,"queryAttachmentsSupported",void 0),a([u()],s.prototype,"sourceSpatialReference",void 0),a([u({type:String})],s.prototype,"url",void 0),s=a([w("esri.layers.graphics.sources.support.QueryTask")],s);const C=s;export{C as j};
