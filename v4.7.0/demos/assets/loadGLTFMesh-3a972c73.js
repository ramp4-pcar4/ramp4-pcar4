import { U as U$1, c2 as r$1, ak as u, iS as j, iT as _, hW as r$4, ck as r$5, dg as M } from './main-b03b5063.js';
import { e as e$4 } from './mat3f64-3fe11525.js';
import { l as l$1, m, a as m$1, h, c as c$1 } from './Mesh-74ae7adf.js';
import { c, x, L, O, i, E, T, u as u$1 } from './BufferView-99e31fa6.js';
import { e as e$3, f, a, o as o$3 } from './vec3-a994d566.js';
import { n, l, o, f as f$1, r as r$3, a as n$1, b as f$2, c as o$1, d as l$2, e as o$2, g as e$5, h as e$6, i as o$4 } from './DefaultMaterial_COLOR_GAMMA-94af35ce.js';
import { e as e$2 } from './types-e38a67d0.js';
import { V } from './georeference-3dc61e59.js';
import { r as r$2 } from './resourceUtils-fad88ca7.js';
import { D as D$1 } from './enums-af0bf3a9.js';
import './preload-helper-a4975f27.js';
import './imageUtils-ddf9963a.js';
import './MeshLocalVertexSpace-df44ef59.js';
import './meshVertexSpaceUtils-d75e7082.js';
import './earcut-00b34c4e.js';
import './DoubleArray-01e16ffc.js';
import './Indices-99f60f1d.js';
import './deduplicate-a1e343c4.js';
import './plane-81052b30.js';
import './mat4f64-b32e2490.js';
import './quatf64-137a8dbb.js';
import './triangle-1ef8bd36.js';
import './Util-bd1e8edc.js';
import './ObjectStack-8c6766b8.js';
import './lineSegment-8dccccad.js';
import './basicInterfaces-f85cdac5.js';
import './VertexAttribute-66b2103c.js';
import './External-4a835797.js';
import './quat-d80a03d0.js';
import './computeTranslationToOriginAndRotation-0e3e2e42.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e$1(e,t,o){const r=e.typedBuffer,f=e.typedBufferStride,d=t.typedBuffer,n=t.typedBufferStride,c=o?o.count:t.count;let u=(o?.dstIndex??0)*f,l=(o?.srcIndex??0)*n;for(let p=0;p<c;++p){for(let e=0;e<9;++e)r[u+e]=d[l+e];u+=f,l+=n;}}Object.freeze(Object.defineProperty({__proto__:null,copy:e$1},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e(e,t,o){const r=e.typedBuffer,f=e.typedBufferStride,d=t.typedBuffer,n=t.typedBufferStride,c=o?o.count:t.count;let u=(o?.dstIndex??0)*f,l=(o?.srcIndex??0)*n;for(let p=0;p<c;++p){for(let e=0;e<16;++e)r[u+e]=d[l+e];u+=f,l+=n;}}Object.freeze(Object.defineProperty({__proto__:null,copy:e},Symbol.toStringTag,{value:"Module"}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function r(s,r){return new s(new ArrayBuffer(r*s.ElementCount*e$2(s.ElementType)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function N(e,t,r){const o=new n(z(r)),n$1=(await l(o,t,r,!0)).model,s=n$1.lods.shift(),l$2=new Map,a=new Map;n$1.textures.forEach(((e,t)=>l$2.set(t,H(e)))),n$1.materials.forEach(((e,t)=>a.set(t,J(e,l$2))));const i=Q(s);for(const p of i.parts)W(i,p,a);const{position:u,normal:c,tangent:f,color:m,texCoord0:g}=i.vertexAttributes,x={position:u.typedBuffer,normal:null!=c?c.typedBuffer:null,tangent:null!=f?f.typedBuffer:null,uv:null!=g?g.typedBuffer:null,color:null!=m?m.typedBuffer:null},d=V(x,e,r);return {transform:d.transform,vertexSpace:d.vertexSpace,components:i.components,spatialReference:e.spatialReference,vertexAttributes:new l$1({position:d.vertexAttributes.position,normal:d.vertexAttributes.normal,tangent:d.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function z(e){const r=e?.resolveFile;return r?{busy:!1,request:async(e,o,n)=>{const s=r?.(e)??e,l="image"===o?"image":"binary"===o?"array-buffer":"json";return (await U$1(s,{responseType:l,signal:null!=n?n.signal:null})).data}}:null}function G(e,t){if(null==e)return "-";const o=e.typedBuffer;return `${r$1(t,o.buffer,(()=>t.size))}/${o.byteOffset}/${o.byteLength}`}function K(e){return null!=e?e.toString():"-"}function Q(e){let t=0;const has={color:!1,tangent:!1,normal:!1,texCoord0:!1},o=new Map,n=new Map,s=[];for(const l of e.parts){const{attributes:{position:e,normal:a,color:i,tangent:u,texCoord0:c}}=l,f=`\n      ${G(e,o)}/\n      ${G(a,o)}/\n      ${G(i,o)}/\n      ${G(u,o)}/\n      ${G(c,o)}/\n      ${K(l.transform)}\n    `;let m=!1;const p=r$1(n,f,(()=>(m=!0,{start:t,length:e.count})));m&&(t+=e.count),a&&(has.normal=!0),i&&(has.color=!0),u&&(has.tangent=!0),c&&(has.texCoord0=!0),s.push({gltf:l,writeVertices:m,region:p});}return {vertexAttributes:{position:r(T,t),normal:has.normal?r(i,t):null,tangent:has.tangent?r(c,t):null,color:has.color?r(x,t):null,texCoord0:has.texCoord0?r(u$1,t):null},parts:s,components:[]}}function H(e){return new m({data:(r$2(e.data),e.data),wrap:Z(e.parameters.wrap)})}function J(t,r){const o=new u(re(t.color,t.opacity)),s=t.emissiveFactor?new u(oe(t.emissiveFactor)):null,l=e=>e?new c$1({scale:e.scale?[e.scale[0],e.scale[1]]:[1,1],rotation:M(e.rotation??0),offset:e.offset?[e.offset[0],e.offset[1]]:[0,0]}):null;return new m$1({color:o,colorTexture:r.get(t.textureColor),normalTexture:r.get(t.textureNormal),emissiveColor:s,emissiveTexture:r.get(t.textureEmissive),occlusionTexture:r.get(t.textureOcclusion),alphaMode:Y(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:r.get(t.textureMetallicRoughness),colorTextureTransform:l(t.colorTextureTransform),normalTextureTransform:l(t.normalTextureTransform),occlusionTextureTransform:l(t.occlusionTextureTransform),emissiveTextureTransform:l(t.emissiveTextureTransform),metallicRoughnessTextureTransform:l(t.metallicRoughnessTextureTransform)})}function W(e,t,r){t.writeVertices&&X(e,t);const{indices:o$1,attributes:n,primitiveType:s,material:l}=t.gltf;let a=o(o$1||n.position.count,s);const i=t.region.start;if(i){const e=new Uint32Array(a);for(let t=0;t<a.length;t++)e[t]+=i;a=e;}e.components.push(new h({name:t.gltf.name,faces:a,material:r.get(l),shading:n.normal?"source":"flat",trustSourceNormals:!0}));}function X(e,t){const{position:r,normal:n,tangent:a$1,color:i$1,texCoord0:u}=e.vertexAttributes,c$1=t.region.start,{attributes:f$3,transform:m}=t.gltf,p=f$3.position.count;if(e$3(r.slice(c$1,p),f$3.position,m),null!=f$3.normal&&null!=n){const e=j(e$4(),m),t=n.slice(c$1,p);f(t,f$3.normal,e),_(e)&&a(t,t);}else null!=n&&f$1(n,0,0,1,{dstIndex:c$1,count:p});if(null!=f$3.tangent&&null!=a$1){const e=j(e$4(),m),t=a$1.slice(c$1,p);r$3(t,f$3.tangent,e),_(e)&&n$1(t,t);}else null!=a$1&&f$2(a$1,0,0,1,1,{dstIndex:c$1,count:p});if(null!=f$3.texCoord0&&null!=u?o$1(u.slice(c$1,p),f$3.texCoord0):null!=u&&l$2(u,0,0,{dstIndex:c$1,count:p}),null!=f$3.color&&null!=i$1){const e=f$3.color,t=i$1.slice(c$1,p);if(4===e.elementCount)e instanceof c?o$2(t,e,255):e instanceof x?e$5(t,e):e instanceof L&&o$2(t,e,1/256);else {f$2(t,255,255,255,255);const r=O.fromTypedArray(t.typedBuffer,t.typedBufferStride);e instanceof i?o$3(r,e,255):e instanceof O?e$6(r,e):e instanceof E&&o$3(r,e,1/256);}}else null!=i$1&&f$2(i$1.slice(c$1,p),255,255,255,255);}function Y(e){switch(e){case"OPAQUE":return "opaque";case"MASK":return "mask";case"BLEND":return "blend"}}function Z(e){return {horizontal:ee(e.s),vertical:ee(e.t)}}function ee(e){switch(e){case D$1.CLAMP_TO_EDGE:return "clamp";case D$1.MIRRORED_REPEAT:return "mirror";case D$1.REPEAT:return "repeat"}}function te(e){return e**(1/o$4)*255}function re(e,t){return r$4(te(e[0]),te(e[1]),te(e[2]),t)}function oe(e){return r$5(te(e[0]),te(e[1]),te(e[2]))}

export { N as loadGLTFMesh };
