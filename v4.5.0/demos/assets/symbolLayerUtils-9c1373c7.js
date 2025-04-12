import { _ as __vitePreload } from './preload-helper-a4975f27.js';
import { ds as e, c as s, r as r$1, U as U$1, dt as F, du as t, K as c$1, bP as a$1, dv as c } from './main-5658cd6e.js';

let a=m();function m(){return new e(50)}function y(){a=m();}function f(e,o){if("icon"===e.type)return p(e,o);if("object"===e.type)return d(e,o);throw new s("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function l(e,o){if("icon"===e.type)return h(e,o);if("object"===e.type)return w(e,o);throw new s("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object")}async function p(e,o){if(e.resource?.href)return b(e.resource.href).then((e=>[e.width,e.height]));if(e.resource?.primitive)return r$1(o)?[o,o]:[256,256];throw new s("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function h(e,r){return p(e,r).then((r=>{if(null==e.size)return r;const o=r[0]/r[1];return o>1?[e.size,e.size/o]:[e.size*o,e.size]}))}function b(r){return U$1(r,{responseType:"image"}).then((e=>e.data))}function d(e,r){return j(e,r).then((e=>F(e)))}async function w(e,r){const o=await d(e,r);return t(o,e)}async function j(e,o){if(!e.isPrimitive){const r=c$1(e.resource?.href),o=a.get(r);if(void 0!==o)return o;const t=await __vitePreload(() => import('./objectResourceUtils-080954cc.js').then(n => n.o),true?["./objectResourceUtils-080954cc.js","./devEnvironmentUtils-d73295e7.js","./main-5658cd6e.js","./preload-helper-a4975f27.js","./main-2af48127.css","./mat3f64-f0e5b33e.js","./mat4f64-151d6b53.js","./BufferView-280c2f14.js","./vec33-10cb0362.js","./DefaultMaterial_COLOR_GAMMA-eb95e6eb.js","./types-814802c7.js","./enums-1f7f0b0a.js","./quat-1e678ab0.js","./quatf64-3a66031a.js","./resourceUtils-267be27b.js","./basicInterfaces-9de11baf.js","./Indices-ea523834.js","./NestedMap-5d3a039b.js","./requestImageUtils-b6c78b33.js","./sphere-de757ffd.js","./lineSegment-dd6132c1.js","./VertexAttribute-a23f2f69.js","./OrderIndependentTransparency-639df392.js","./Texture-aefe232f.js","./VertexArrayObject-2ba4bad7.js","./VertexElementDescriptor-a439aa9a.js","./InterleavedLayout-769e3a2b.js","./vec3f32-b6e01a26.js","./doublePrecisionUtils-fe2da5f2.js","./symbolColorUtils-800e4542.js"]:void 0,import.meta.url),i=await t.fetch(r,{disableTextures:!0});return a.put(r,i.referenceBoundingBox),i.referenceBoundingBox}let i=null;if(e.resource&&e.resource.primitive&&(i=a$1(c(e.resource.primitive)),r$1(o)))for(let r=0;r<i.length;r++)i[r]*=o;return i?Promise.resolve(i):Promise.reject(new s("symbol:invalid-resource","The symbol does not have a valid resource"))}

export { y as clearBoundingBoxCache, p as computeIconLayerResourceSize, f as computeLayerResourceSize, l as computeLayerSize, d as computeObjectLayerResourceSize };
