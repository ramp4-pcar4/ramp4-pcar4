const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./visualVariableUtils-Wo4FvR6P.js","./main-Cv8ITM2j.js","./preload-helper-ExcqyqRp.js","./main-gKmidBZg.css","./lengthUtils-BjSb-BVP.js"])))=>i.map(i=>d[i]);
import{_ as W}from"./preload-helper-ExcqyqRp.js";import{aW as C,bA as K,bC as U,x as H,bs as X,H as n,J as u,b7 as Y,b8 as ee,K as Q,bB as B,O as te,V as re,N as I,b6 as J,fP as ie,M as se,a5 as oe,aN as ae,e7 as ne,aQ as le,s as T,dL as L,az as ue,bl as pe,a$ as ye,X as M,i0 as ce,c1 as de,b3 as he}from"./main-Cv8ITM2j.js";import{i as fe,u as me}from"./scaleUtils-DO2I8oTt.js";import{n as G}from"./floorFilterUtils-DKzVzLpH.js";import{o as A}from"./drapedUtils-3spoKDml.js";import{R as ge}from"./normalizeUtils-BN5Ve0-A.js";import{f as be,s as we,i as ve}from"./utils-DI5eYgHm.js";import{i as xe}from"./sublayerUtils-5asJdzrq.js";import{p as $e}from"./TimeExtent-CmJt7e8T.js";import{n as Se,p as Fe}from"./popupUtils-CuZrW1jl.js";function Oe(t,e){const{dpi:i,gdbVersion:o,geometry:r,geometryPrecision:a,height:s,historicMoment:h,layerOption:y,mapExtent:l,maxAllowableOffset:p,returnFieldName:c,returnGeometry:m,returnUnformattedValues:x,returnZ:f,spatialReference:F,timeExtent:b,tolerance:g,width:w}=t.toJSON(),{dynamicLayers:E,layerDefs:$,layerIds:P}=Ee(t),j=e?.geometry!=null?e.geometry:null,v={historicMoment:h,geometryPrecision:a,maxAllowableOffset:p,returnFieldName:c,returnGeometry:m,returnUnformattedValues:x,returnZ:f,tolerance:g},R=j?.toJSON()||r;v.imageDisplay=`${w},${s},${i}`,o&&(v.gdbVersion=o),R&&(delete R.spatialReference,v.geometry=JSON.stringify(R),v.geometryType=C(R));const V=F??R?.spatialReference??l?.spatialReference;if(V&&(v.sr=K(V)),v.time=b?[b.start,b.end].join(","):null,l){const{xmin:q,ymin:D,xmax:k,ymax:Z}=l;v.mapExtent=`${q},${D},${k},${Z}`}return $&&(v.layerDefs=$),E&&!$&&(v.dynamicLayers=E),v.layers=y==="popup"?"visible":y,P&&!E&&(v.layers+=`:${P.join(",")}`),v}function Ee(t){const{mapExtent:e,floors:i,width:o,sublayers:r,layerIds:a,layerOption:s,gdbVersion:h}=t,y=r?.find(f=>f.layer!=null)?.layer?.serviceSublayers,l=s==="popup",p={},c=fe({extent:e,width:o,spatialReference:e?.spatialReference}),m=[],x=f=>{const F=c===0,b=f.minScale===0||c<=f.minScale,g=f.maxScale===0||c>=f.maxScale;if(f.visible&&(F||b&&g))if(f.sublayers)f.sublayers.forEach(x);else{if(a?.includes(f.id)===!1||l&&(!f.popupTemplate||!f.popupEnabled))return;m.unshift(f)}};if(r?.forEach(x),r&&!m.length)p.layerIds=[];else{const f=xe(m,y,h),F=m.map(b=>{const g=G(i,b);return b.toExportImageJSON(g)});if(f)p.dynamicLayers=JSON.stringify(F);else{if(r){let g=m.map(({id:w})=>w);a&&(g=g.filter(w=>a.includes(w))),p.layerIds=g}else a?.length&&(p.layerIds=a);const b=Pe(i,m);if(b!=null&&b.length){const g={};for(const w of b)w.definitionExpression&&(g[w.id]=w.definitionExpression);Object.keys(g).length&&(p.layerDefs=JSON.stringify(g))}}}return p}function Pe(t,e){const i=!!t?.length,o=e.filter(r=>r.definitionExpression!=null||i&&r.floorInfo!=null);return o.length?o.map(r=>{const a=G(t,r),s=U(a,r.definitionExpression);return{id:r.id,definitionExpression:s??void 0}}):null}var _;let d=_=class extends H{static from(t){return X(_,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.historicMoment=null,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}};n([u({type:Number,json:{write:!0}})],d.prototype,"dpi",void 0),n([u()],d.prototype,"floors",void 0),n([u({type:String,json:{write:!0}})],d.prototype,"gdbVersion",void 0),n([u({types:ee,json:{read:Y,write:!0}})],d.prototype,"geometry",void 0),n([u({type:Number,json:{write:!0}})],d.prototype,"geometryPrecision",void 0),n([u({type:Number,json:{write:!0}})],d.prototype,"height",void 0),n([u({type:Date})],d.prototype,"historicMoment",void 0),n([Q("historicMoment")],d.prototype,"writeHistoricMoment",null),n([u({type:[Number],json:{write:!0}})],d.prototype,"layerIds",void 0),n([u({type:["top","visible","all","popup"],json:{write:!0}})],d.prototype,"layerOption",void 0),n([u({type:B,json:{write:!0}})],d.prototype,"mapExtent",void 0),n([u({type:Number,json:{write:!0}})],d.prototype,"maxAllowableOffset",void 0),n([u({type:Boolean,json:{write:!0}})],d.prototype,"returnFieldName",void 0),n([u({type:Boolean,json:{write:!0}})],d.prototype,"returnGeometry",void 0),n([u({type:Boolean,json:{write:!0}})],d.prototype,"returnM",void 0),n([u({type:Boolean,json:{write:!0}})],d.prototype,"returnUnformattedValues",void 0),n([u({type:Boolean,json:{write:!0}})],d.prototype,"returnZ",void 0),n([u({type:te,json:{write:!0}})],d.prototype,"spatialReference",void 0),n([u({type:re})],d.prototype,"sublayers",void 0),n([u({type:$e,json:{write:!0}})],d.prototype,"timeExtent",void 0),n([u({type:Number,json:{write:!0}})],d.prototype,"tolerance",void 0),n([u({type:Number,json:{write:!0}})],d.prototype,"width",void 0),d=_=n([I("esri.rest.support.IdentifyParameters")],d);const z=d;let S=class extends H{constructor(t){super(t),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(t,e){return J.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(t,e){if(!t)return;const{attributes:i,geometry:o}=t;i&&(e.attributes={...i}),o!=null&&(e.geometry=o.toJSON(),e.geometryType=ie.toJSON(o.type))}};n([u({type:String,json:{write:!0}})],S.prototype,"displayFieldName",void 0),n([u({type:J})],S.prototype,"feature",void 0),n([se("feature",["attributes","geometry"])],S.prototype,"readFeature",null),n([Q("feature")],S.prototype,"writeFeature",null),n([u({type:Number,json:{write:!0}})],S.prototype,"layerId",void 0),n([u({type:String,json:{write:!0}})],S.prototype,"layerName",void 0),S=n([I("esri.rest.support.IdentifyResult")],S);const Re=S;async function je(t,e,i){const o=(e=_e(e)).geometry?[e.geometry]:[],r=be(t);return r.path+="/identify",ge(o).then(a=>{const s=Oe(e,{geometry:a?.[0]}),h=we({...r.query,f:"json",...s}),y=ve(h,i);return oe(r.path,y).then(Ne).then(l=>Ie(l,e.sublayers))})}function Ne(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=!!e.exceededTransferLimit,e.results=e.results.map(i=>Re.fromJSON(i)),e}function _e(t){return t=z.from(t)}function Ie(t,e){if(!e?.length)return t;const i=new Map;function o(r){i.set(r.id,r),r.sublayers&&r.sublayers.forEach(o)}e.forEach(o);for(const r of t.results)r.feature.sourceLayer=i.get(r.layerId);return t}let N=null;function ke(t,e){return e.type==="tile"||e.type==="map-image"}let O=class extends ae{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=ne(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{for(const i of e){const{sourceLayer:o}=i;o!=null&&"geometryType"in o&&o.geometryType==="point"&&(i.visible=!1)}this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([le(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeaturesAtLocation(t,e){const{layerView:{layer:i,view:{scale:o}}}=this;if(!t)throw new T("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:i});const r=Ge(i.sublayers,o,e);if(!r.length)return[];const a=await Te(i,r);if(!((i.capabilities?.operations?.supportsIdentify??!0)&&i.version>=10.5)&&!a)throw new T("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:i});return a?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){this.highlightGraphics?.removeAll()}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:i,highlightGraphicUpdated:o}=this;if(i&&o)for(const r of t){const a=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&a&&"getSymbolAsync"in a&&a.getSymbolAsync(r).then(async s=>{s||=new L;let h=null;const y="visualVariables"in a?a.visualVariables?.find(l=>l.type==="size"):void 0;y&&(N||(N=(await W(async()=>{const{getSize:l}=await import("./visualVariableUtils-Wo4FvR6P.js").then(p=>p.b);return{getSize:l}},__vite__mapDeps([0,1,2,3,4]),import.meta.url)).getSize),h=N(y,r,{view:e.type,scale:e.scale,shape:s.type==="simple-marker"?s.style:null})),h||="width"in s&&"height"in s&&s.width!=null&&s.height!=null?Math.max(s.width,s.height):"size"in s?s.size:16,i.includes(r)&&(r.symbol=new L({style:"square",size:h,xoffset:"xoffset"in s?s.xoffset:0,yoffset:"yoffset"in s?s.yoffset:0}),o(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:i},highlightGraphics:o,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!o?.length||!e.capabilities.operations.supportsQuery)return;const a=this._getTargetResolution(t),s=new Map;for(const l of o)if(!this._featuresResolutions.has(l)||this._featuresResolutions.get(l)>a){const p=l.sourceLayer;ue(s,p,()=>new Map).set(l.getObjectId(),l)}const h=Array.from(s,([l,p])=>{const c=l.createQuery();return c.objectIds=[...p.keys()],c.outFields=[l.objectIdField],c.returnGeometry=!0,c.maxAllowableOffset=a,c.outSpatialReference=i.spatialReference,l.queryFeatures(c)}),y=await Promise.all(h);if(!this.destroyed)for(const{features:l}of y)for(const p of l){const c=p.sourceLayer,m=s.get(c).get(p.getObjectId());m&&o.includes(m)&&(m.geometry=p.geometry,r(m,"geometry"),this._featuresResolutions.set(m,a))}}_getTargetResolution(t){const e=t*pe(this.layerView.view.spatialReference),i=e/16;return i<=10?0:t/e*i}async _fetchPopupFeaturesUsingIdentify(t,e,i){const o=await this._createIdentifyParameters(t,e,i);if(o==null)return[];const{results:r}=await je(this.layerView.layer.parsedUrl,o,i);return r.map(a=>a.feature)}async _createIdentifyParameters(t,e,i){const{floors:o,layer:r,timeExtent:a,view:{spatialReference:s,scale:h}}=this.layerView;if(!e.length)return null;await Promise.all(e.map(({sublayer:x})=>x.load(i).catch(()=>{})));const y=Math.min(ye("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce((x,f)=>f.renderer?A({renderer:f.renderer,pointerType:i?.pointerType}):x,2)),l=this.createFetchPopupFeaturesQueryGeometry(t,y),p=me(h,s),c=Math.round(l.width/p),m=new B({xmin:l.center.x-p*c,ymin:l.center.y-p*c,xmax:l.center.x+p*c,ymax:l.center.y+p*c,spatialReference:l.spatialReference});return new z({floors:o,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:c,layerOption:"popup",mapExtent:m,returnGeometry:!0,spatialReference:s,sublayers:r.sublayers,timeExtent:a,tolerance:y,width:c})}async _fetchPopupFeaturesUsingQueries(t,e,i){const{layerView:{floors:o,timeExtent:r}}=this,a=e.map(async({sublayer:s,popupTemplate:h})=>{if(await s.load(i).catch(()=>{}),s.capabilities&&!s.capabilities.operations.supportsQuery)return[];const y=s.createQuery(),l=A({renderer:s.renderer,pointerType:i?.pointerType}),p=this.createFetchPopupFeaturesQueryGeometry(t,l),c=new Set,[m]=await Promise.all([Se(s,h),s.renderer?.collectRequiredFields(c,s.fieldsIndex)]);M(i),ce(c,s.fieldsIndex,m);const x=Array.from(c).sort();y.geometry=p,y.outFields=x,y.timeExtent=r;const f=G(o,s);if(y.where=U(y.where,f),s.capabilities?.query.supportsOrderBy&&s.orderBy?.[0]){const $=s.orderBy[0],P=!$.valueExpression&&$.field,j=$.order==="ascending"?"asc":"desc";P&&(y.orderByFields=[`${P} ${j}`])}const F=this._getTargetResolution(p.width/l),b=await Ve(h);M(i);const g=s.geometryType==="point"||b&&b.arcadeUtils.hasGeometryOperations(h);g||(y.maxAllowableOffset=F);let{features:w}=await s.queryFeatures(y,i);const E=g?0:F;w=await Le(s,w,i);for(const $ of w)this._featuresResolutions.set($,E);return w});return(await Promise.allSettled(a)).reduce((s,h)=>h.status==="fulfilled"?[...s,...h.value]:s,[]).filter(de)}};function Ge(t,e,i){const o=[];if(!t)return o;const r=a=>{const s=a.minScale===0||e<=a.minScale,h=a.maxScale===0||e>=a.maxScale;if(a.visible&&s&&h){if(a.sublayers)a.sublayers.forEach(r);else if(a.popupEnabled){const y=Fe(a,{...i,defaultPopupTemplateEnabled:!1});y!=null&&o.unshift({sublayer:a,popupTemplate:y})}}};return t.map(r),o}function Ve(t){return t.expressionInfos?.length||Array.isArray(t.content)&&t.content.some(e=>e.type==="expression")?he():Promise.resolve()}async function Te(t,e){if(t.capabilities?.operations?.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:i})=>i.load().then(()=>i.capabilities.operations.supportsQuery)))}catch{return!1}}async function Le(t,e,i){const o=t.renderer;return o&&"defaultSymbol"in o&&!o.defaultSymbol&&(e=o.valueExpression?await Promise.all(e.map(r=>o.getSymbolAsync(r,i).then(a=>a?r:null))).then(r=>r.filter(a=>a!=null)):e.filter(r=>o.getSymbol(r)!=null)),e}n([u({constructOnly:!0})],O.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),n([u({constructOnly:!0})],O.prototype,"layerView",void 0),n([u({constructOnly:!0})],O.prototype,"highlightGraphics",void 0),n([u({constructOnly:!0})],O.prototype,"highlightGraphicUpdated",void 0),n([u({constructOnly:!0})],O.prototype,"updatingHandles",void 0),O=n([I("esri.views.layers.support.MapServiceLayerViewHelper")],O);export{ke as P,O as S};
