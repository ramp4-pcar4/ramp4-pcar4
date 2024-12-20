import { N as has } from './main-YSH8Qvd0.js';
import { h } from './PooledRBush-7dGxHkaF.js';
import { i as i$1 } from './MeshLocalVertexSpace-CfZyzxtt.js';
import { M } from './vertexSpaceConversion-wpOs4rjM.js';
import './preload-helper-dJJaZANz.js';
import './mat3f64-BNcPSU_3.js';
import './mat4f64-UGgSIQpQ.js';
import './spatialReferenceEllipsoidUtils-2MXwy-q2.js';
import './computeTranslationToOriginAndRotation-BzHnTzMb.js';
import './meshVertexSpaceUtils-BWw2ChPZ.js';
import './vec3-ClSyidte.js';
import './projection-dfTHVS_y.js';
import './DoubleArray-CgRM5UWL.js';
import './BufferView-Lo8NNSAL.js';
import './vec4-BZ4xuOzG.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
class r{async createIndex(t,n){const r=new Array;if(!t.vertexAttributes?.position)return new h;const o=a(t),s=null!=n?await n.invoke("createIndexThread",o,{transferList:r}):this.createIndexThread(o).result;return i().fromJSON(s)}createIndexThread(e){const t=i();if(!e)return {result:t.toJSON()};const n=new Float64Array(e.position);return e.components?s(t,n,e.components.map((e=>new Uint32Array(e)))):o(t,n)}}function o(e,t){const n=new Array(t.length/9);let r=0;for(let o=0;o<t.length;o+=9)n[r++]=c(t,o,o+3,o+6);return e.load(n),{result:e.toJSON()}}function s(e,t,n){let r=0;for(const a of n)r+=a.length/3;const o=new Array(r);let s=0;for(const a of n)for(let e=0;e<a.length;e+=3)o[s++]=c(t,3*a[e],3*a[e+1],3*a[e+2]);return e.load(o),{result:e.toJSON()}}function a(e){const{vertexAttributes:{position:r},vertexSpace:o,spatialReference:s,transform:a}=e,i=M({vertexAttributes:{position:r},vertexSpace:o,spatialReference:s,transform:a},new i$1,{allowBufferReuse:!0})?.position;return i?!e.components||e.components.some((e=>!e.faces))?{position:i.buffer}:{position:i.buffer,components:e.components.map((e=>e.faces))}:null}function i(){return new h(9,has("esri-csp-restrictions")?e=>e:[".minX",".minY",".maxX",".maxY"])}function c(e,t,n,r){return {minX:Math.min(e[t],e[n],e[r]),maxX:Math.max(e[t],e[n],e[r]),minY:Math.min(e[t+1],e[n+1],e[r+1]),maxY:Math.max(e[t+1],e[n+1],e[r+1]),p0:[e[t],e[t+1],e[t+2]],p1:[e[n],e[n+1],e[n+2]],p2:[e[r],e[r+1],e[r+2]]}}

export { r as default };
