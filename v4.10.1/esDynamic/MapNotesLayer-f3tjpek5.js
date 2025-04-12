import{k as o,o as a,A as v,df as B,dc as F,de as L,du as k,B as g,V as O,f as w,bW as x,dv as N,dw as T,dx as C,b1 as z,s as W,aY as A,bh as V,z as M,u as m,q as $,au as q,dy as I}from"./main-Dv0FawL-.js";import{S as K}from"./MultiOriginJSONSupport-D-QAgjCU.js";import{V as b,J as Y,_ as H,W as Q,K as U}from"./projection-DmpruZ6B.js";import{R as X}from"./normalizeUtils-ByZ4e68x.js";import Z from"./FeatureLayer-lbkZMJjN.js";import ee from"./GraphicsLayer-DnJYfBIf.js";import{f as te}from"./Layer-CYWu_N6k.js";import{n as re}from"./objectIdUtils-EszJVKSV.js";import{l as oe}from"./BlendLayer-xfVThUVL.js";import{b as ie}from"./OperationalLayer-DHmMTEXL.js";import{j as le}from"./PortalLayer-BG-KBgpX.js";import{t as ae}from"./ScaleRangeLayer-SjqvBzuX.js";import{y as R}from"./Field-D6py_XvO.js";function h(t){return t.featureCollectionType==="markup"||t.layers.some(e=>e.layerDefinition.visibilityField!=null||!E(e))}function E({layerDefinition:t,featureSet:e}){const r=t.geometryType??e.geometryType;return J.find(i=>r===i.geometryTypeJSON&&t.drawingInfo?.renderer?.symbol?.type===i.identifyingSymbol.type)}function D(){return new q({xmin:-180,ymin:-90,xmax:180,ymax:90})}const _=new R({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ne=new R({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0,length:255});let u=class extends ee{constructor(t){super(t),this.visibilityMode="inherited"}initialize(){for(const t of this.graphics)t.sourceLayer=this.layer;this.graphics.on("after-add",t=>{t.item.sourceLayer=this.layer}),this.graphics.on("after-remove",t=>{t.item.sourceLayer=null})}get fullExtent(){const t=this.layer?.spatialReference,e=this.fullBounds;return t?e==null?b(D(),t).geometry:C(e,t):null}get fullBounds(){const t=this.layer?.spatialReference;if(!t)return null;const e=x();return this.graphics.forEach(r=>{const i=r.geometry!=null?b(r.geometry,t).geometry:null;i!=null&&N(e,i.type==="point"?i:i.extent,e)}),T(e,I)?null:e}get sublayers(){return this.graphics}};o([a({readOnly:!0})],u.prototype,"fullExtent",null),o([a({readOnly:!0})],u.prototype,"fullBounds",null),o([a({readOnly:!0})],u.prototype,"sublayers",null),o([a()],u.prototype,"layer",void 0),o([a()],u.prototype,"layerId",void 0),o([a({readOnly:!0})],u.prototype,"visibilityMode",void 0),u=o([v("esri.layers.MapNotesLayer.MapNotesSublayer")],u);const J=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new B().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new F().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new L().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new L().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new k().toJSON()}];let l=class extends oe(ae(ie(le(K(te))))){constructor(t){super(t),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=g.WGS84,this.sublayers=new O(J.map(e=>new u({id:e.id,layerId:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(t,e,r){return{operations:{supportsMapNotesEditing:!h(e)&&r?.origin!=="portal-item"}}}readFeatureCollections(t,e,r){if(!h(e))return null;const i=e.layers.map(s=>{const n=new Z;return n.read(s,r),n});return new O({items:i})}readLegacyfeatureCollectionJSON(t,e){return h(e)?w(e.featureCollection):null}get fullExtent(){const t=this.spatialReference,e=x();return this.sublayers!=null?this.sublayers.forEach(({fullBounds:r})=>r!=null?N(e,r,e):e,e):this.featureCollectionJSON?.layers.some(r=>r.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(r=>{const i=b(r.layerDefinition.extent,t).geometry;i!=null&&N(e,i,e)}),T(e,I)?b(D(),t).geometry:C(e,t)}readMinScale(t,e){for(const r of e.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(t,e){for(const r of e.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(t,e){return e.layers.length?g.fromJSON(e.layers[0].layerDefinition.spatialReference):g.WGS84}readSublayers(t,e,r){if(h(e))return null;const i=[];let s=e.layers.reduce((n,y)=>Math.max(n,y.layerDefinition.id??-1),-1)+1;for(const n of e.layers){const{layerDefinition:y,featureSet:p}=n,f=y.id??s++,d=E(n);if(d!=null){const c=new u({id:d.id,title:y.name,layerId:f,layer:this,graphics:p.features.map(({geometry:S,symbol:j,attributes:G,popupInfo:P})=>z.fromJSON({attributes:G,geometry:S,symbol:j,popupTemplate:P}))});i.push(c)}}return new O(i)}writeSublayers(t,e,r,i){const{minScale:s,maxScale:n}=this;if(t==null)return;const y=t.some(d=>d.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(y&&i?.messages?.push(new W("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer")));const p=[];let f=this.spatialReference.toJSON();e:for(const d of t)for(const c of d.graphics)if(c.geometry!=null){f=c.geometry.spatialReference.toJSON();break e}for(const d of J){const c=t.find(S=>d.id===S.id);this._writeMapNoteSublayer(p,c,d,s,n,f,i)}A("featureCollection.layers",p,e)}get textLayer(){return this._findSublayer("textLayer")}load(t){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},t)),Promise.resolve(this)}read(t,e){"featureCollection"in t&&(t=w(t),Object.assign(t,t.featureCollection)),super.read(t,e)}async beforeSave(){if(this.sublayers==null)return;let t=null;const e=[];for(const i of this.sublayers)for(const s of i.graphics)if(s.geometry!=null){const n=s.geometry;t?V(n.spatialReference,t)||(Y(n.spatialReference,t)||H()||await Q(),s.geometry=U(n,t)):t=n.spatialReference,e.push(s)}const r=await X(e.map(i=>i.geometry));e.forEach((i,s)=>i.geometry=r[s])}_findSublayer(t){return this.sublayers==null?null:this.sublayers?.find(e=>e.id===t)??null}_writeMapNoteSublayer(t,e,r,i,s,n,y){const p=[];if(e!=null){for(const f of e.graphics)this._writeMapNote(p,f,r.geometryType,y);this._normalizeObjectIds(p,_),t.push({layerDefinition:{name:e.title,drawingInfo:{renderer:{type:"simple",symbol:w(r.identifyingSymbol)}},id:e.layerId,geometryType:r.geometryTypeJSON,minScale:i,maxScale:s,objectIdField:"OBJECTID",fields:[_.toJSON(),ne.toJSON()],spatialReference:n},featureSet:{features:p,geometryType:r.geometryTypeJSON}})}}_writeMapNote(t,e,r,i){if(e==null)return;const{geometry:s,symbol:n,popupTemplate:y}=e;if(s==null)return;if(s.type!==r)return void i?.messages?.push(new M("map-notes-layer:invalid-geometry-type",`Geometry "${s.type}" cannot be saved in "${r}" layer`,{graphic:e}));if(n==null)return void i?.messages?.push(new M("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:e}));const p={attributes:{...e.attributes},geometry:s.toJSON(),symbol:n.toJSON()};y!=null&&(p.popupInfo=y.toJSON()),t.push(p)}_normalizeObjectIds(t,e){const r=e.name;let i=re(r,t)+1;const s=new Set;for(const n of t){n.attributes||(n.attributes={});const{attributes:y}=n;(y[r]==null||s.has(y[r]))&&(y[r]=i++),s.add(y[r])}}};o([a({readOnly:!0})],l.prototype,"capabilities",void 0),o([m(["portal-item","web-map"],"capabilities",["layers"])],l.prototype,"readCapabilities",null),o([a({readOnly:!0})],l.prototype,"featureCollections",void 0),o([m(["web-map","portal-item"],"featureCollections",["layers"])],l.prototype,"readFeatureCollections",null),o([a({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],l.prototype,"featureCollectionJSON",void 0),o([m(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],l.prototype,"readLegacyfeatureCollectionJSON",null),o([a({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],l.prototype,"featureCollectionType",void 0),o([a({readOnly:!0})],l.prototype,"fullExtent",null),o([a({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],l.prototype,"legendEnabled",void 0),o([a({type:["show","hide","hide-children"]})],l.prototype,"listMode",void 0),o([a({type:Number,nonNullable:!0,json:{write:!1}})],l.prototype,"minScale",void 0),o([m(["web-map","portal-item"],"minScale",["layers"])],l.prototype,"readMinScale",null),o([a({type:Number,nonNullable:!0,json:{write:!1}})],l.prototype,"maxScale",void 0),o([m(["web-map","portal-item"],"maxScale",["layers"])],l.prototype,"readMaxScale",null),o([a({readOnly:!0})],l.prototype,"multipointLayer",null),o([a({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],l.prototype,"operationalLayerType",void 0),o([a({readOnly:!0})],l.prototype,"pointLayer",null),o([a({readOnly:!0})],l.prototype,"polygonLayer",null),o([a({readOnly:!0})],l.prototype,"polylineLayer",null),o([a({type:g})],l.prototype,"spatialReference",void 0),o([m(["web-map","portal-item"],"spatialReference",["layers"])],l.prototype,"readSpatialReference",null),o([a({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],l.prototype,"sublayers",void 0),o([m("web-map","sublayers",["layers"])],l.prototype,"readSublayers",null),o([$("web-map","sublayers")],l.prototype,"writeSublayers",null),o([a({readOnly:!0})],l.prototype,"textLayer",null),o([a()],l.prototype,"title",void 0),o([a({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),l=o([v("esri.layers.MapNotesLayer")],l);const se=l;export{se as default};
