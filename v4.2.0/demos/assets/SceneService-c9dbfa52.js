import{r as S,U as v,c as u,ed as L,E as V,cr as k,hF as U,p as C,e as p,y as c,dP as q,f as b,dO as f,w as _,hC as F,dR as M,e1 as z,k as J,x as B,hd as D,C as Z,ie as G,ig as H,ih as Q,L as E,A as W,B as $}from"./main-8009ebf4.js";import{i as N}from"./originUtils-1469eeaf.js";import{getSiblingOfSameTypeI as X}from"./resourceUtils-60369a84.js";async function Y(i,s,e,t,o,r){let n=null;if(S(e)){const a=`${i}/nodepages/`,h=a+Math.floor(e.rootIndex/e.nodesPerPage);try{return{type:"page",rootPage:(await v(h,{query:{f:"json",token:t},responseType:"json",signal:r})).data,rootIndex:e.rootIndex,pageSize:e.nodesPerPage,lodMetric:e.lodSelectionMetricType,urlPrefix:a}}catch(y){S(o)&&o.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",h,y),n=y}}if(!s)return null;const l=`${i}/nodes/`,d=l+(s&&s.split("/").pop());try{return{type:"node",rootNode:(await v(d,{query:{f:"json",token:t},responseType:"json",signal:r})).data,urlPrefix:l}}catch(a){throw new u("sceneservice:root-node-missing","Root node missing.",{pageError:n,nodeError:a,url:d})}}let ee=null;function te(){return ee}async function T(i,s,e){if(!s||!s.resources)return;const t=s.portalItem===i.portalItem?new Set(i.paths):new Set;i.paths.length=0,i.portalItem=s.portalItem;const o=new Set(s.resources.toKeep.map(a=>a.resource.path)),r=new Set,n=[];o.forEach(a=>{t.delete(a),i.paths.push(a)});for(const a of s.resources.toUpdate)if(t.delete(a.resource.path),o.has(a.resource.path)||r.has(a.resource.path)){const{resource:h,content:y,finish:x,error:P}=a,A=X(h,L());i.paths.push(A.path),n.push(O({resource:A,content:y,compress:a.compress,finish:x,error:P},e))}else i.paths.push(a.resource.path),n.push(re(a,e)),r.add(a.resource.path);for(const a of s.resources.toAdd)n.push(O(a,e)),i.paths.push(a.resource.path);if(t.forEach(a=>{if(s.portalItem){const h=s.portalItem.resourceFromPath(a);n.push(h.portalItem.removeResource(h).catch(()=>{}))}}),n.length===0)return;const l=await V(n);k(e);const d=l.filter(a=>"error"in a).map(a=>a.error);if(d.length>0)throw new u("save:resources","Failed to save one or more resources",{errors:d})}async function O(i,s){const e={...S(s)?s:{},compress:i.compress},t=await U(i.resource.portalItem.addResource(i.resource,i.content,e));if(t.ok!==!0)throw i.error?.(t.error),t.error;i.finish?.(i.resource)}async function re(i,s){const e=await U(i.resource.update(i.content,s));if(e.ok!==!0)throw i.error?.(e.error),e.error;i.finish?.(i.resource)}const K="esri.layers.mixins.SceneService",m=C.getLogger(K),ie=i=>{let s=class extends i{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=B(async(e,t,o)=>{switch(e){case I.SAVE:return this._save(t);case I.SAVE_AS:return this._saveAs(o,t)}})}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(e.spatialReference!=null)return b.fromJSON(e.spatialReference);{const t=e.store,o=t.indexCRS||t.geographicCRS,r=o&&parseInt(o.substring(o.lastIndexOf("/")+1,o.length),10);return r!=null?new b(r):null}}readFullExtent(e,t,o){if(e!=null&&typeof e=="object"){const l=e.spatialReference==null?{...e,spatialReference:this._readSpatialReference(t)}:e;return _.fromJSON(l,o)}const r=t.store,n=this._readSpatialReference(t);return n==null||r==null||r.extent==null||!Array.isArray(r.extent)||r.extent.some(l=>l<R)?null:new _({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:n})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},o=e.split(".");return o.length>=2&&(t.major=parseInt(o[0],10),t.minor=parseInt(o[1],10)),t}readVersion(e,t){const o=t.store,r=o.version!=null?o.version.toString():"";return this.parseVersionString(r)}readTitlePortalItem(e){return this.sublayerTitleMode!=="item-title"?void 0:e}readTitleService(e,t){const o=this.portalItem&&this.portalItem.title;if(this.sublayerTitleMode==="item-title")return D(this.url,t.name);let r=t.name;if(!r&&this.url){const n=Z(this.url);S(n)&&(r=n.title)}return this.sublayerTitleMode==="item-title-and-service-name"&&o&&(r=o+" - "+r),G(r)}set url(e){const t=H({layer:this,url:e,nonStandardUrlAllowed:!1,logger:m});this._set("url",t.url),t.layerId!=null&&this._set("layerId",t.layerId)}writeUrl(e,t,o,r){Q(this,e,"layers",t,r)}get parsedUrl(){const e=this._get("url"),t=E(e);return this.layerId!=null&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=Y(this.parsedUrl.path,this.rootNode,e,this.apiKey,m,t),this.fullExtent==null||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if(e?.type==="page"){const t=e.rootIndex%e.pageSize,o=e.rootPage?.nodes?.[t];if(o==null||o.obb==null||o.obb.center==null||o.obb.halfSize==null)throw new u("sceneservice:invalid-node-page","Invalid node page.");if(o.obb.center[0]<R||this.fullExtent==null||this.fullExtent.hasZ)return;const r=o.obb.halfSize,n=o.obb.center[2],l=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);this.fullExtent.zmin=n-l,this.fullExtent.zmax=n+l}else if(e?.type==="node"){const t=e.rootNode?.mbs;if(!Array.isArray(t)||t.length!==4||t[0]<R)return;const o=t[2],r=t[3],{fullExtent:n}=this;n&&(n.zmin=o-r,n.zmax=o+r)}}async _fetchService(e){if(this.url==null)throw new u("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(this.layerId==null&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);t!=null&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await v(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){const t=await v(this.parsedUrl?.path??"",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});t.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let o=!1;if(t.data.layerType&&t.data.layerType==="Voxel"&&(o=!0),o)return this._fetchVoxelServiceLayer();const r=t.data;this.read(r,this._getServiceContext()),this.validateLayer(r)}async _fetchVoxelServiceLayer(e){const t=(await v(this.parsedUrl?.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,this._getServiceContext()),this.validateLayer(t)}_getServiceContext(){return{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&typeof this.beforeSave=="function"&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,o){e.typeKeywords||(e.typeKeywords=[]);const r=t.getTypeKeywords();for(const n of r)e.typeKeywords.push(n);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((n,l,d)=>d.indexOf(n)===l),o===g.newItem&&(e.typeKeywords=e.typeKeywords.filter(n=>n!=="Hosted Service")))}async _saveAs(e,t){const o={...j,...t};let r=W.from(e);r||(m.error("_saveAs(): requires a portal item parameter"),await Promise.reject(new u("sceneservice:portal-item-required","_saveAs() requires a portal item to save to"))),r.id&&(r=r.clone(),r.id=null);const n=r.portal||$.getDefault();await this._ensureLoadBeforeSave(),r.type=w,r.portal=n;const l={origin:"portal-item",url:null,messages:[],portal:n,portalItem:r,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},d={layers:[this.write({},l)]};return await Promise.all(l.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(d,l,o),r.url=this.url,r.title||(r.title=this.title),this._updateTypeKeywords(r,o,g.newItem),await n.signIn(),await n.user?.addItem({item:r,folder:o&&o.folder,data:d}),await T(this.resourceReferences,l,null),this.portalItem=r,N(l),l.portalItem=r,r}async _save(e){const t={...j,...e};if(!this.portalItem)throw m.error("_save(): requires the .portalItem property to be set"),new u("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(this.portalItem.type!==w)throw m.error("_save(): Non-matching portal item type. Got "+this.portalItem.type+", expected "+w),new u("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${w}"`);await this._ensureLoadBeforeSave();const o={origin:"portal-item",url:this.portalItem.itemUrl&&E(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||$.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},r={layers:[this.write({},o)]};return await Promise.all(o.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(r,o,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,g.existingItem),await this.portalItem.update({data:r}),await T(this.resourceReferences,o,null),N(o),this.portalItem}async _validateAgainstJSONSchema(e,t,o){let r=t.messages?.filter(a=>a.type==="error").map(a=>new u(a.name,a.message,a.details))??[];o?.validationOptions?.ignoreUnsupported&&(r=r.filter(a=>a.name!=="layer:unsupported"&&a.name!=="symbol:unsupported"&&a.name!=="symbol-layer:unsupported"&&a.name!=="property:unsupported"&&a.name!=="url:unsupported"&&a.name!=="scenemodification:unsupported"));const n=o?.validationOptions,l=n?.enabled,d=te();if(l&&d){const a=(await d()).validate(e,o.portalItemLayerType);if(a.length>0){const h=`Layer item did not validate:
${a.join(`
`)}`;if(m.error(`_validateAgainstJSONSchema(): ${h}`),n.failPolicy==="throw"){const y=a.map(x=>new u("sceneservice:schema-validation",x)).concat(r);throw new u("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:y})}}}if(r.length>0)throw new u("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:r})}};return p([c(q)],s.prototype,"id",void 0),p([c({type:b})],s.prototype,"spatialReference",void 0),p([f("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],s.prototype,"readSpatialReference",null),p([c({type:_})],s.prototype,"fullExtent",void 0),p([f("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],s.prototype,"readFullExtent",null),p([c({readOnly:!0,type:F})],s.prototype,"heightModelInfo",void 0),p([c({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],s.prototype,"minScale",void 0),p([c({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],s.prototype,"maxScale",void 0),p([c({readOnly:!0})],s.prototype,"version",void 0),p([f("version",["store.version"])],s.prototype,"readVersion",null),p([c({type:String,json:{read:{source:"copyrightText"}}})],s.prototype,"copyright",void 0),p([c({type:String,json:{read:!1}})],s.prototype,"sublayerTitleMode",void 0),p([c({type:String})],s.prototype,"title",void 0),p([f("portal-item","title")],s.prototype,"readTitlePortalItem",null),p([f("service","title",["name"])],s.prototype,"readTitleService",null),p([c({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],s.prototype,"layerId",void 0),p([c(M)],s.prototype,"url",null),p([z("url")],s.prototype,"writeUrl",null),p([c()],s.prototype,"parsedUrl",null),p([c({readOnly:!0})],s.prototype,"store",void 0),p([c({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],s.prototype,"rootNode",void 0),s=p([J(K)],s),s},R=-1e38;var g;(function(i){i[i.existingItem=0]="existingItem",i[i.newItem=1]="newItem"})(g||(g={}));const w="Scene Service",j={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var I;(function(i){i[i.SAVE=0]="SAVE",i[i.SAVE_AS=1]="SAVE_AS"})(I||(I={}));export{ie as E,I as L,Y as n};
