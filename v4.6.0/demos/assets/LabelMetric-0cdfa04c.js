import { l2 as c$1, ff as t$2, l3 as n$3, s as s$1, G as s$2 } from './main-8822140d.js';
import { C, U } from './enums-af0bf3a9.js';
import './enums-d24bcbbf.js';
import { s as s$3, e as e$2, m as m$1 } from './Texture-bb85fd56.js';
import './Program-c5762f5e.js';
import { t as t$3 } from './VertexElementDescriptor-ec2771ab.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t$1 = class t{constructor(t,e,s,r,i,h,n){this.instanceId=t,this.textureKey=e,this.indexStart=s,this.indexCount=r,this.vertexStart=i,this.vertexCount=h,this.overlaps=n;}updateBaseOffsets(t){this.vertexStart+=t.vertexFrom,this.indexStart+=t.indexFrom;}clone(){return new t(this.instanceId,this.textureKey,this.indexStart,this.indexCount,this.vertexStart,this.vertexCount,this.overlaps)}static write(t,e,s,r,i,h,n,a){t.push(e),t.push(s),t.push(r),t.push(i),t.push(h),t.push(n),t.push(a);}serialize(t){return t.push(this.instanceId),t.push(this.textureKey),t.push(this.indexStart),t.push(this.indexCount),t.push(this.vertexStart),t.push(this.vertexCount),t.push(this.overlaps),t}static deserialize(e){const s=e.readInt32(),r=e.readInt32(),i=e.readInt32(),h=e.readInt32(),n=e.readInt32(),a=e.readInt32(),u=e.readInt32();return new t(s,r,i,h,n,a,u)}};t$1.byteSizeHint=7*Uint32Array.BYTES_PER_ELEMENT;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e$1(e,n){if(null!==n){e.push(n.length);for(const r of n)r.serialize(e);return e}e.push(0);}function n$2(e,n,r){const t=e.readInt32(),o=new Array(t);for(let i=0;i<o.length;i++)o[i]=n.deserialize(e,r);return o}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class s{constructor(t,r){this.id=t,this.sortKey=r,this.records=[];}serialize(t){return t.push(this.id),t.writeF32(this.sortKey),e$1(t,this.records),t}static deserialize(r){const e=r.readInt32(),o=r.readF32(),a=new s(e,o);return a.records=n$2(r,t$1)??[],a}}s.byteSizeHint=2*Uint32Array.BYTES_PER_ELEMENT+t$1.byteSizeHint;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function t(t){const o=t.map((({name:e,count:t,type:o})=>`${e}.${t}.${o}`)).join(",");return c$1(o)}function o(e,t,r,i,n,a,c){if(e.primitiveName===t)for(const o in e)if(o===r){let t=i?.readWithDefault(n,a,e[o]&&c);return "text"===e.type&&(t=t.toString()),void(e[o]=t)}if("type"in e&&null!=e.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.symbolLayers)for(const l of e.symbolLayers)o(l,t,r,i,n,a,c);break;case"CIMHatchFill":e.lineSymbol&&o(e.lineSymbol,t,r,i,n,a,c);break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if("CIMVectorMarker"===e.type&&e.markerGraphics)for(const l of e.markerGraphics)o(l,t,r,i,n,a,c),o(l.symbol,t,r,i,n,a,c);}}function r$1(e){const t=e.width;return null!=e.effects?256:Math.max(1.25*t,8)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class i{constructor(i,e,s,r){this.computedX=0,this.computedY=0,this.center=t$2(i,e),this.centerT=n$3(),this.halfWidth=s/2,this.halfHeight=r/2,this.width=s,this.height=r;}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(t){this.center[0]=t;}set y(t){this.center[1]=t;}clone(){return new i(this.x,this.y,this.width,this.height)}serialize(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t}findCollisionDelta(t,h=4){const i=Math.abs(t.centerT[0]-this.centerT[0]),e=Math.abs(t.centerT[1]-this.centerT[1]),s=(t.halfWidth+this.halfWidth+h)/i,r=(t.halfHeight+this.halfHeight+h)/e,n=Math.min(s,r);return Math.log2(n)}extend(t){const h=Math.min(this.xmin,t.xmin),i=Math.min(this.ymin,t.ymin),e=Math.max(this.xmax,t.xmax)-h,s=Math.max(this.ymax,t.ymax)-i,r=h+e/2,n=i+s/2;this.width=e,this.height=s,this.halfWidth=e/2,this.halfHeight=s/2,this.x=r,this.y=n;}static deserialize(t){const h=t.readF32(),e=t.readF32(),s=t.readInt32(),r=t.readInt32();return new i(h,e,s,r)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const n$1=new Float32Array(1);new Uint32Array(n$1.buffer);function w$1(n,r){return 65535&n|r<<16}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e(e,n,o,s){const f=o.packPrecisionFactor??1;switch(o.type){case C.BYTE:if(1===o.count)e.setInt8(s+o.offset,n*f);else for(let t=0;t<o.count;t++){const r=t*Int8Array.BYTES_PER_ELEMENT;e.setInt8(s+o.offset+r,n[t]*f);}break;case C.UNSIGNED_BYTE:if(1===o.count)e.setUint8(s+o.offset,n*f);else for(let t=0;t<o.count;t++){const r=t*Uint8Array.BYTES_PER_ELEMENT;e.setUint8(s+o.offset+r,n[t]*f);}break;case C.SHORT:if(1===o.count)e.setInt16(s+o.offset,n*f,!0);else for(let t=0;t<o.count;t++){const r=t*Int16Array.BYTES_PER_ELEMENT;e.setInt16(s+o.offset+r,n[t]*f,!0);}break;case C.UNSIGNED_SHORT:if(1===o.count)e.setUint16(s+o.offset,n*f,!0);else for(let t=0;t<o.count;t++){const r=t*Uint16Array.BYTES_PER_ELEMENT;e.setUint16(s+o.offset+r,n[t]*f,!0);}break;case C.INT:if(1===o.count)e.setInt32(s+o.offset,n*f,!0);else for(let t=0;t<o.count;t++){const r=t*Int32Array.BYTES_PER_ELEMENT;e.setInt32(s+o.offset+r,n[t]*f,!0);}break;case C.UNSIGNED_INT:if(1===o.count)e.setUint32(s+o.offset,n*f,!0);else for(let t=0;t<o.count;t++){const r=t*Uint32Array.BYTES_PER_ELEMENT;e.setUint32(s+o.offset+r,n[t]*f,!0);}break;case C.FLOAT:if(1===o.count)e.setFloat32(s+o.offset,n*f,!0);else for(let t=0;t<o.count;t++){const r=t*Float32Array.BYTES_PER_ELEMENT;e.setFloat32(s+o.offset+r,n[t]*f,!0);}}}function n(e,n,o){switch(n.type){case C.BYTE:{if(1===n.count)return e.getInt8(o+n.offset);const t=[];for(let s=0;s<n.count;s++){const f=s*Int8Array.BYTES_PER_ELEMENT;t.push(e.getInt8(o+n.offset+f));}return t}case C.UNSIGNED_BYTE:{if(1===n.count)return e.getUint8(o+n.offset);const t=[];for(let s=0;s<n.count;s++){const f=s*Uint8Array.BYTES_PER_ELEMENT;t.push(e.getUint8(o+n.offset+f));}return t}case C.SHORT:{if(1===n.count)return e.getInt16(o+n.offset,!0);const t=[];for(let s=0;s<n.count;s++){const f=s*Int16Array.BYTES_PER_ELEMENT;t.push(e.getInt16(o+n.offset+f,!0));}return t}case C.UNSIGNED_SHORT:{if(1===n.count)return e.getUint16(o+n.offset,!0);const t=[];for(let s=0;s<n.count;s++){const f=s*Uint16Array.BYTES_PER_ELEMENT;t.push(e.getUint16(o+n.offset+f,!0));}return t}case C.INT:{if(1===n.count)return e.getInt32(o+n.offset,!0);const t=[];for(let s=0;s<n.count;s++){const f=s*Int32Array.BYTES_PER_ELEMENT;t.push(e.getInt32(o+n.offset+f,!0));}return t}case C.UNSIGNED_INT:{if(1===n.count)return e.getUint32(o+n.offset,!0);const t=[];for(let s=0;s<n.count;s++){const f=s*Uint32Array.BYTES_PER_ELEMENT;t.push(e.getUint32(o+n.offset+f,!0));}return t}case C.FLOAT:{if(1===n.count)return e.getFloat32(o+n.offset,!0);const t=[];for(let s=0;s<n.count;s++){const f=s*Float32Array.BYTES_PER_ELEMENT;t.push(e.getFloat32(o+n.offset+f,!0));}return t}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const u=()=>s$2.getLogger("esri.views.2d.engine.webgl.Utils");function c(t){switch(t){case U.UNSIGNED_BYTE:return 1;case U.UNSIGNED_SHORT_4_4_4_4:return 2;case U.FLOAT:return 4;default:return void u().error(new s$1("webgl-utils",`Unable to handle type ${t}`))}}function d(t){switch(t){case U.UNSIGNED_BYTE:return Uint8Array;case U.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case U.FLOAT:return Float32Array;default:return void u().error(new s$1("webgl-utils",`Unable to handle type ${t}`))}}function f(e){const t={};for(const r in e){const n=e[r];let o=0;t[r]=n.map((e=>{const t=new t$3(e.name,e.count,e.type,o,0,e.normalized||!1);return o+=e.count*s$3(e.type),t})),t[r]?.forEach((e=>e.stride=o));}return t}const g=e=>{const t=new Map;for(const r in e)for(const n of e[r])t.set(n.name,n.location);return t},h=e=>{const t={};for(const r in e){const n=e[r];t[r]=n?.length?n[0].stride:0;}return t},w=new Map,b=(e,t)=>{if(!w.has(e)){const r=f(t),n={strides:h(r),bufferLayouts:r,attributes:g(t)};w.set(e,n);}return w.get(e)},y=e=>e.includes("data:image/svg+xml");function j(e){const t=[];for(let r=0;r<e.length;r++)t.push(e.charCodeAt(r));return t}function T(e,t,r){const n=new e$2(t.width,t.height);return n.dataType=t.dataType,t.depth&&(n.depth=t.depth),t.flipped&&(n.flipped=t.flipped),t.hasMipmap&&(n.hasMipmap=t.hasMipmap),n.internalFormat=t.internalFormat,t.isImmutable&&(n.isImmutable=t.isImmutable),t.isOpaque&&(n.isOpaque=t.isOpaque),t.maxAnisotropy&&(n.maxAnisotropy=t.maxAnisotropy),n.pixelFormat=t.pixelFormat,t.preMultiplyAlpha&&(n.preMultiplyAlpha=t.preMultiplyAlpha),t.samplingMode&&(n.samplingMode=t.samplingMode),t.target&&(n.target=t.target),n.uniform=t.uniform,t.unpackAlignment&&(n.unpackAlignment=t.unpackAlignment),t.wrapMode&&(n.wrapMode=t.wrapMode),new m$1(e,n,r)}function M(e){return "url"in e&&"urlHash"in e?{...e,url:""}:e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class r{constructor(e,i,t,r,s,n,o,a,h=[]){this.entityTexel=e,this.anchorX=i,this.anchorY=t,this.directionX=r,this.directionY=s,this.maxScale=n,this.minScale=o,this.referenceBounds=a,this.bounds=h;}serialize(e){e.push(this.entityTexel),e.writeF32(this.anchorX),e.writeF32(this.anchorY),e.writeF32(this.directionX),e.writeF32(this.directionY),e.writeF32(this.maxScale),e.writeF32(this.minScale),null===this.referenceBounds?(e.writeF32(0),e.writeF32(0),e.writeF32(0)):(e.writeF32(this.referenceBounds.size),e.writeF32(this.referenceBounds.offsetX),e.writeF32(this.referenceBounds.offsetY)),e$1(e,this.bounds);}static deserialize(i$1){const s=i$1.readInt32(),n=i$1.readF32(),o=i$1.readF32(),a=i$1.readF32(),h=i$1.readF32(),d=i$1.readF32(),c=i$1.readF32(),F=i$1.readF32(),f=i$1.readF32(),l=i$1.readF32(),u=n$2(i$1,i)??[];return new r(s,n,o,a,h,d,c,{size:F,offsetX:f,offsetY:l},u)}}

export { M, T, t as a, b, c, d, n$2 as e, e as f, r$1 as g, i, j, n, o, r, s, t$1 as t, w$1 as w, y };
