import { s as s$3, G as n$2, bQ as t$4, lh as n$3, aC as l } from './main-C4Zge2Yj.js';
import './enums-CHdyfzUK.js';
import { s as s$4, e as e$1, c as c$1 } from './Texture-BghNYWXB.js';
import { U, C } from './enums-CwcDCDam.js';
import './Program-BvYEs7q3.js';
import { t as t$3 } from './VertexElementDescriptor-Bcj0303n.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let t$2 = class t{constructor(t,e,s,r,i,h,n){this.instanceId=t,this.textureKey=e,this.indexStart=s,this.indexCount=r,this.vertexStart=i,this.vertexCount=h,this.overlaps=n;}updateBaseOffsets(t){this.vertexStart+=t.vertexFrom,this.indexStart+=t.indexFrom;}clone(){return new t(this.instanceId,this.textureKey,this.indexStart,this.indexCount,this.vertexStart,this.vertexCount,this.overlaps)}static write(t,e,s,r,i,h,n,a){t.push(e),t.push(s),t.push(r),t.push(i),t.push(h),t.push(n),t.push(a);}serialize(t){return t.push(this.instanceId),t.push(this.textureKey),t.push(this.indexStart),t.push(this.indexCount),t.push(this.vertexStart),t.push(this.vertexCount),t.push(this.overlaps),t}static deserialize(e){const s=e.readInt32(),r=e.readInt32(),i=e.readInt32(),h=e.readInt32(),n=e.readInt32(),a=e.readInt32(),u=e.readInt32();return new t(s,r,i,h,n,a,u)}};t$2.byteSizeHint=7*Uint32Array.BYTES_PER_ELEMENT;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function e(e,n){if(null!==n){e.push(n.length);for(const r of n)r.serialize(e);return e}e.push(0);}function n$1(e,n,r){const t=e.readInt32(),o=new Array(t);for(let i=0;i<o.length;i++)o[i]=n.deserialize(e,r);return o}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let s$2 = class s{constructor(t,r){this.id=t,this.sortKey=r,this.records=[];}serialize(t){return t.push(this.id),t.writeF32(this.sortKey),e(t,this.records),t}static deserialize(r){const e=r.readInt32(),o=r.readF32(),a=new s(e,o);return a.records=n$1(r,t$2)??[],a}};s$2.byteSizeHint=2*Uint32Array.BYTES_PER_ELEMENT+t$2.byteSizeHint;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const u=()=>n$2.getLogger("esri.views.2d.engine.webgl.Utils");function c(t){switch(t){case U.UNSIGNED_BYTE:return 1;case U.UNSIGNED_SHORT_4_4_4_4:return 2;case U.FLOAT:return 4;default:return void u().error(new s$3("webgl-utils",`Unable to handle type ${t}`))}}function d(t){switch(t){case U.UNSIGNED_BYTE:return Uint8Array;case U.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case U.FLOAT:return Float32Array;default:return void u().error(new s$3("webgl-utils",`Unable to handle type ${t}`))}}function f(e){const t={};for(const r in e){const n=e[r];let o=0;t[r]=n.map((e=>{const t=new t$3(e.name,e.count,e.type,o,0,e.normalized||!1);return o+=e.count*s$4(e.type),t})),t[r]?.forEach((e=>e.stride=o));}return t}const g=e=>{const t=new Map;for(const r in e)for(const n of e[r])t.set(n.name,n.location);return t},h=e=>{const t={};for(const r in e){const n=e[r];t[r]=n?.length?n[0].stride:0;}return t},w=new Map,b$1=(e,t)=>{if(!w.has(e)){const r=f(t),n={strides:h(r),bufferLayouts:r,attributes:g(t)};w.set(e,n);}return w.get(e)},y$1=e=>e.includes("data:image/svg+xml");function j$1(e){const t=[];for(let r=0;r<e.length;r++)t.push(e.charCodeAt(r));return t}function T(e,t,r){const n=new e$1(t.width,t.height);return n.dataType=t.dataType,t.depth&&(n.depth=t.depth),t.flipped&&(n.flipped=t.flipped),t.hasMipmap&&(n.hasMipmap=t.hasMipmap),n.internalFormat=t.internalFormat,t.isImmutable&&(n.isImmutable=t.isImmutable),t.isOpaque&&(n.isOpaque=t.isOpaque),t.maxAnisotropy&&(n.maxAnisotropy=t.maxAnisotropy),n.pixelFormat=t.pixelFormat,t.preMultiplyAlpha&&(n.preMultiplyAlpha=t.preMultiplyAlpha),t.samplingMode&&(n.samplingMode=t.samplingMode),t.target&&(n.target=t.target),n.uniform=t.uniform,t.unpackAlignment&&(n.unpackAlignment=t.unpackAlignment),t.wrapMode&&(n.wrapMode=t.wrapMode),new c$1(e,n,r)}function M(e){return "url"in e&&"urlHash"in e?{...e,url:""}:e}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let i$1 = class i{constructor(i,e,s,r){this.computedX=0,this.computedY=0,this.center=t$4(i,e),this.centerT=n$3(),this.halfWidth=s/2,this.halfHeight=r/2,this.width=s,this.height=r;}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(t){this.center[0]=t;}set y(t){this.center[1]=t;}clone(){return new i(this.x,this.y,this.width,this.height)}serialize(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t}findCollisionDelta(t,h=4){const i=Math.abs(t.centerT[0]-this.centerT[0]),e=Math.abs(t.centerT[1]-this.centerT[1]),s=(t.halfWidth+this.halfWidth+h)/i,r=(t.halfHeight+this.halfHeight+h)/e,n=Math.min(s,r);return Math.log2(n)}extend(t){const h=Math.min(this.xmin,t.xmin),i=Math.min(this.ymin,t.ymin),e=Math.max(this.xmax,t.xmax)-h,s=Math.max(this.ymax,t.ymax)-i,r=h+e/2,n=i+s/2;this.width=e,this.height=s,this.halfWidth=e/2,this.halfHeight=s/2,this.x=r,this.y=n;}static deserialize(t){const h=t.readF32(),e=t.readF32(),s=t.readInt32(),r=t.readInt32();return new i(h,e,s,r)}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const n=new Float32Array(1),t$1=new Uint32Array(n.buffer);function a(r){return n[0]=r,t$1[0]}function s$1(n,t){return 65535&n|t<<16}function y(n){const t=a(n),r=t>>>31;let u=t>>>23&255,o=8388607&t;return u-=127,u>15?r<<15|31744:u<-25?0:(u<-14&&(o+=8388608,o/=2**(-14-u),u=-15),u+=15,o/=8192,o=A(o,1023),r<<15|u<<10|o)}function A(n,t){const r=Math.floor(n),u=n-r;return r<t&&(u>.5||.5===u&&r%2==1)?r+1:r}function b(n){let t=n>>>15,r=n>>10&31,u=1023&n;return t=t?-1:1,r-=15,u/=1024,r>-15?u+=1:r=-14,t*2**r*u}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function t(t){const o=t.map((({name:e,count:t,type:o})=>`${e}.${t}.${o}`)).join(",");return l(o)}function o$1(e,t,r,i,n,a,c){if(e.primitiveName===t)for(const o in e)if(o===r){let t=i?.readWithDefault(n,a,e[o]&&c);return "text"===e.type&&(t=t.toString()),void(e[o]=t)}if("type"in e&&null!=e.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.symbolLayers)for(const s of e.symbolLayers)o$1(s,t,r,i,n,a,c);break;case"CIMHatchFill":e.lineSymbol&&o$1(e.lineSymbol,t,r,i,n,a,c);break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if("CIMVectorMarker"===e.type&&e.markerGraphics)for(const s of e.markerGraphics)o$1(s,t,r,i,n,a,c),o$1(s.symbol,t,r,i,n,a,c);}}const r$1=400;function i(e){const t=e.width;return null!=e.effects?r$1:Math.max(1.25*t,8)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function o(e,o,s,f){const r=s.packPrecisionFactor??1;switch(s.type){case C.BYTE:if(1===s.count)e.setInt8(f+s.offset,o*r);else for(let t=0;t<s.count;t++){const n=t*Int8Array.BYTES_PER_ELEMENT;e.setInt8(f+s.offset+n,o[t]*r);}break;case C.UNSIGNED_BYTE:if(1===s.count)e.setUint8(f+s.offset,o*r);else for(let t=0;t<s.count;t++){const n=t*Uint8Array.BYTES_PER_ELEMENT;e.setUint8(f+s.offset+n,o[t]*r);}break;case C.SHORT:if(1===s.count)e.setInt16(f+s.offset,o*r,!0);else for(let t=0;t<s.count;t++){const n=t*Int16Array.BYTES_PER_ELEMENT;e.setInt16(f+s.offset+n,o[t]*r,!0);}break;case C.UNSIGNED_SHORT:if(1===s.count)e.setUint16(f+s.offset,o*r,!0);else for(let t=0;t<s.count;t++){const n=t*Uint16Array.BYTES_PER_ELEMENT;e.setUint16(f+s.offset+n,o[t]*r,!0);}break;case C.INT:if(1===s.count)e.setInt32(f+s.offset,o*r,!0);else for(let t=0;t<s.count;t++){const n=t*Int32Array.BYTES_PER_ELEMENT;e.setInt32(f+s.offset+n,o[t]*r,!0);}break;case C.UNSIGNED_INT:if(1===s.count)e.setUint32(f+s.offset,o*r,!0);else for(let t=0;t<s.count;t++){const n=t*Uint32Array.BYTES_PER_ELEMENT;e.setUint32(f+s.offset+n,o[t]*r,!0);}break;case C.FLOAT:if(1===s.count)e.setFloat32(f+s.offset,o*r,!0);else for(let t=0;t<s.count;t++){const n=t*Float32Array.BYTES_PER_ELEMENT;e.setFloat32(f+s.offset+n,o[t]*r,!0);}break;case C.HALF_FLOAT:if(1===s.count)e.setUint16(f+s.offset,y(o*r),!0);else for(let n=0;n<s.count;n++){const E=n*Uint16Array.BYTES_PER_ELEMENT;e.setUint16(f+s.offset+E,y(o[n]*r),!0);}}}function s(t,o,s){switch(o.type){case C.BYTE:{if(1===o.count)return t.getInt8(s+o.offset);const e=[];for(let n=0;n<o.count;n++){const f=n*Int8Array.BYTES_PER_ELEMENT;e.push(t.getInt8(s+o.offset+f));}return e}case C.UNSIGNED_BYTE:{if(1===o.count)return t.getUint8(s+o.offset);const e=[];for(let n=0;n<o.count;n++){const f=n*Uint8Array.BYTES_PER_ELEMENT;e.push(t.getUint8(s+o.offset+f));}return e}case C.SHORT:{if(1===o.count)return t.getInt16(s+o.offset,!0);const e=[];for(let n=0;n<o.count;n++){const f=n*Int16Array.BYTES_PER_ELEMENT;e.push(t.getInt16(s+o.offset+f,!0));}return e}case C.UNSIGNED_SHORT:{if(1===o.count)return t.getUint16(s+o.offset,!0);const e=[];for(let n=0;n<o.count;n++){const f=n*Uint16Array.BYTES_PER_ELEMENT;e.push(t.getUint16(s+o.offset+f,!0));}return e}case C.INT:{if(1===o.count)return t.getInt32(s+o.offset,!0);const e=[];for(let n=0;n<o.count;n++){const f=n*Int32Array.BYTES_PER_ELEMENT;e.push(t.getInt32(s+o.offset+f,!0));}return e}case C.UNSIGNED_INT:{if(1===o.count)return t.getUint32(s+o.offset,!0);const e=[];for(let n=0;n<o.count;n++){const f=n*Uint32Array.BYTES_PER_ELEMENT;e.push(t.getUint32(s+o.offset+f,!0));}return e}case C.FLOAT:{if(1===o.count)return t.getFloat32(s+o.offset,!0);const e=[];for(let n=0;n<o.count;n++){const f=n*Float32Array.BYTES_PER_ELEMENT;e.push(t.getFloat32(s+o.offset+f,!0));}return e}case C.HALF_FLOAT:{if(1===o.count)return b(t.getUint16(s+o.offset,!0));const n=[];for(let f=0;f<o.count;f++){const r=f*Uint16Array.BYTES_PER_ELEMENT;n.push(b(t.getUint16(s+o.offset+r,!0)));}return n}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
class r{constructor(e,i,t,r,s,n,o,a,h=[]){this.entityTexel=e,this.anchorX=i,this.anchorY=t,this.directionX=r,this.directionY=s,this.maxScale=n,this.minScale=o,this.referenceBounds=a,this.bounds=h;}serialize(e$1){e$1.push(this.entityTexel),e$1.writeF32(this.anchorX),e$1.writeF32(this.anchorY),e$1.writeF32(this.directionX),e$1.writeF32(this.directionY),e$1.writeF32(this.maxScale),e$1.writeF32(this.minScale),null===this.referenceBounds?(e$1.writeF32(0),e$1.writeF32(0),e$1.writeF32(0)):(e$1.writeF32(this.referenceBounds.size),e$1.writeF32(this.referenceBounds.offsetX),e$1.writeF32(this.referenceBounds.offsetY)),e(e$1,this.bounds);}static deserialize(i){const s=i.readInt32(),n=i.readF32(),o=i.readF32(),a=i.readF32(),h=i.readF32(),d=i.readF32(),c=i.readF32(),F=i.readF32(),f=i.readF32(),l=i.readF32(),u=n$1(i,i$1)??[];return new r(s,n,o,a,h,d,c,{size:F,offsetX:f,offsetY:l},u)}}

export { M, T, t as a, b$1 as b, c, d, o as e, s$1 as f, i as g, s as h, i$1 as i, j$1 as j, n$1 as n, o$1 as o, r, s$2 as s, t$2 as t, y$1 as y };
