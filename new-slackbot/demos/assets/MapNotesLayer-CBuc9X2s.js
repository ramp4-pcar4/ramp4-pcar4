import { dK as y, aW as e, aX as y$1, aY as c, eb as S, e8 as d, ea as y$2, eq as m, dZ as n, e1 as t, d$ as u$1, e0 as j, e2 as m$1, bk as f$1, a3 as V, er as We, W as a, cX as D, es as m$2, et as K, eu as I, ev as c$1, a4 as c$2, s, ew as o, a7 as G, be as H$1, ba as E, bb as B$1, bc as U$1, a2 as R, dD as s$1, e3 as o$1, ex as r, aH as M, ey as h, ez as K$1, ec as b } from './main-CjrSZKDN.js';
import { n as n$1 } from './objectIdUtils-DVReE7pe.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function B(e){return "markup"===e.featureCollectionType||e.layers.some((e=>null!=e.layerDefinition.visibilityField||!k(e)))}function k({layerDefinition:e,featureSet:t}){const r=e.geometryType??t.geometryType;return $.find((t=>r===t.geometryTypeJSON&&e.drawingInfo?.renderer?.symbol?.type===t.identifyingSymbol.type))}function z(){return new M({xmin:-180,ymin:-90,xmax:180,ymax:90})}const U=new y({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),W=new y({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0,length:255});let A=class extends h{constructor(e){super(e),this.visibilityMode="inherited";}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer;})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null;}));}get fullExtent(){const e=this.layer?.spatialReference,t=this.fullBounds;return e?null==t?K(z(),e).geometry:c$1(t,e):null}get fullBounds(){const e=this.layer?.spatialReference;if(!e)return null;const t=D();return this.graphics.forEach((r=>{const o=null!=r.geometry?K(r.geometry,e).geometry:null;null!=o&&m$2(t,"point"===o.type?o:o.extent,t);})),I(t,K$1)?null:t}get sublayers(){return this.graphics}};e([y$1({readOnly:!0})],A.prototype,"fullExtent",null),e([y$1({readOnly:!0})],A.prototype,"fullBounds",null),e([y$1({readOnly:!0})],A.prototype,"sublayers",null),e([y$1()],A.prototype,"layer",void 0),e([y$1()],A.prototype,"layerId",void 0),e([y$1({readOnly:!0})],A.prototype,"visibilityMode",void 0),A=e([c("esri.layers.MapNotesLayer.MapNotesSublayer")],A);const $=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:(new S).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:(new d).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:(new y$2).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:(new y$2).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:(new m).toJSON()}];let q=class extends(n(t(u$1(j(m$1(b)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=f$1.WGS84,this.sublayers=new V($.map((e=>new A({id:e.id,layerId:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited";}readCapabilities(e,t,r){return {operations:{supportsMapNotesEditing:!B(t)&&"portal-item"!==r?.origin}}}readFeatureCollections(e,t,o){if(!B(t))return null;const i=t.layers.map((e=>{const t=new We;return t.read(e,o),t}));return new V({items:i})}readLegacyfeatureCollectionJSON(e,t){return B(t)?a(t.featureCollection):null}get fullExtent(){const e=this.spatialReference,t=D();if(null!=this.sublayers)this.sublayers.forEach((({fullBounds:e})=>null!=e?m$2(t,e,t):t),t);else if(this.featureCollectionJSON?.layers.some((e=>e.layerDefinition.extent))){this.featureCollectionJSON.layers.forEach((r=>{const o=K(r.layerDefinition.extent,e).geometry;null!=o&&m$2(t,o,t);}));}return I(t,K$1)?K(z(),e).geometry:c$1(t,e)}readMinScale(e,t){for(const r of t.layers)if(null!=r.layerDefinition.minScale)return r.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const r of t.layers)if(null!=r.layerDefinition.maxScale)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?f$1.fromJSON(t.layers[0].layerDefinition.spatialReference):f$1.WGS84}readSublayers(e,o,i){if(B(o))return null;const l=[];let a=o.layers.reduce(((e,t)=>Math.max(e,t.layerDefinition.id??-1)),-1)+1;for(const r of o.layers){const{layerDefinition:e,featureSet:o}=r,i=e.id??a++,n=k(r);if(null!=n){const r=new A({id:n.id,title:e.name,layerId:i,layer:this,graphics:o.features.map((({geometry:e,symbol:r,attributes:o,popupInfo:i})=>c$2.fromJSON({attributes:o,geometry:e,symbol:r,popupTemplate:i})))});l.push(r);}}return new V(l)}writeSublayers(e,t,r,i){const{minScale:l,maxScale:n}=this;if(null==e)return;const s$1=e.some((e=>e.graphics.length>0));if(!this.capabilities.operations.supportsMapNotesEditing)return void(s$1&&i?.messages?.push(new s("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer")));const p=[];let y=this.spatialReference.toJSON();e:for(const o of e)for(const e of o.graphics)if(null!=e.geometry){y=e.geometry.spatialReference.toJSON();break e}for(const o of $){const t=e.find((e=>o.id===e.id));this._writeMapNoteSublayer(p,t,o,l,n,y,i);}o("featureCollection.layers",p,t);}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=a(e),Object.assign(e,e.featureCollection)),super.read(e,t);}async beforeSave(){if(null==this.sublayers)return;let e=null;const t=[];for(const o of this.sublayers)for(const r of o.graphics)if(null!=r.geometry){const o=r.geometry;e?G(o.spatialReference,e)||(H$1(o.spatialReference,e)||E()||await B$1(),r.geometry=U$1(o,e)):e=o.spatialReference,t.push(r);}const r=await R(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=r[t]));}_findSublayer(e){return null==this.sublayers?null:this.sublayers?.find((t=>t.id===e))??null}_writeMapNoteSublayer(e,t,r,o,l,a$1,n){const s=[];if(null!=t){for(const e of t.graphics)this._writeMapNote(s,e,r.geometryType,n);this._normalizeObjectIds(s,U),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:a(r.identifyingSymbol)}},id:t.layerId,geometryType:r.geometryTypeJSON,minScale:o,maxScale:l,objectIdField:"OBJECTID",fields:[U.toJSON(),W.toJSON()],spatialReference:a$1},featureSet:{features:s,geometryType:r.geometryTypeJSON}});}}_writeMapNote(e,t,r,o){if(null==t)return;const{geometry:i,symbol:l,popupTemplate:a}=t;if(null==i)return;if(i.type!==r)return void o?.messages?.push(new s$1("map-notes-layer:invalid-geometry-type",`Geometry "${i.type}" cannot be saved in "${r}" layer`,{graphic:t}));if(null==l)return void o?.messages?.push(new s$1("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t}));const s={attributes:{...t.attributes},geometry:i.toJSON(),symbol:l.toJSON()};null!=a&&(s.popupInfo=a.toJSON()),e.push(s);}_normalizeObjectIds(e,t){const r=t.name;let o=n$1(r,e)+1;const i=new Set;for(const l of e){l.attributes||(l.attributes={});const{attributes:e}=l;(null==e[r]||i.has(e[r]))&&(e[r]=o++),i.add(e[r]);}}};e([y$1({readOnly:!0})],q.prototype,"capabilities",void 0),e([o$1(["portal-item","web-map"],"capabilities",["layers"])],q.prototype,"readCapabilities",null),e([y$1({readOnly:!0})],q.prototype,"featureCollections",void 0),e([o$1(["web-map","portal-item"],"featureCollections",["layers"])],q.prototype,"readFeatureCollections",null),e([y$1({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],q.prototype,"featureCollectionJSON",void 0),e([o$1(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],q.prototype,"readLegacyfeatureCollectionJSON",null),e([y$1({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],q.prototype,"featureCollectionType",void 0),e([y$1({readOnly:!0})],q.prototype,"fullExtent",null),e([y$1({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return {enabled:null!=this.featureCollectionJSON}}}}}}})],q.prototype,"legendEnabled",void 0),e([y$1({type:["show","hide","hide-children"]})],q.prototype,"listMode",void 0),e([y$1({type:Number,nonNullable:!0,json:{write:!1}})],q.prototype,"minScale",void 0),e([o$1(["web-map","portal-item"],"minScale",["layers"])],q.prototype,"readMinScale",null),e([y$1({type:Number,nonNullable:!0,json:{write:!1}})],q.prototype,"maxScale",void 0),e([o$1(["web-map","portal-item"],"maxScale",["layers"])],q.prototype,"readMaxScale",null),e([y$1({readOnly:!0})],q.prototype,"multipointLayer",null),e([y$1({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],q.prototype,"operationalLayerType",void 0),e([y$1({readOnly:!0})],q.prototype,"pointLayer",null),e([y$1({readOnly:!0})],q.prototype,"polygonLayer",null),e([y$1({readOnly:!0})],q.prototype,"polylineLayer",null),e([y$1({type:f$1})],q.prototype,"spatialReference",void 0),e([o$1(["web-map","portal-item"],"spatialReference",["layers"])],q.prototype,"readSpatialReference",null),e([y$1({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],q.prototype,"sublayers",void 0),e([o$1("web-map","sublayers",["layers"])],q.prototype,"readSublayers",null),e([r("web-map","sublayers")],q.prototype,"writeSublayers",null),e([y$1({readOnly:!0})],q.prototype,"textLayer",null),e([y$1()],q.prototype,"title",void 0),e([y$1({readOnly:!0,json:{read:!1}})],q.prototype,"type",void 0),q=e([c("esri.layers.MapNotesLayer")],q);const H=q;

export { H as default };
