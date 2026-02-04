import { r as r$1, h as has } from './main-5658cd6e.js';
import { h } from './PooledRBush-5e47a5ad.js';
import { k } from './georeference-3619fb58.js';
import './preload-helper-a4975f27.js';
import './mat3f64-f0e5b33e.js';
import './mat4f64-151d6b53.js';
import './spatialReferenceEllipsoidUtils-44af14ac.js';
import './quat-1e678ab0.js';
import './quatf64-3a66031a.js';
import './BufferView-280c2f14.js';
import './vec33-10cb0362.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
class n{async createIndex(r,n){const o=new Array;if(!r.vertexAttributes||!r.vertexAttributes.position)return new h;const s=this._createMeshData(r),a=r$1(n)?await n.invoke("createIndexThread",s,{transferList:o}):this.createIndexThread(s).result;return this._createPooledRBush().fromJSON(a)}createIndexThread(e){const t=new Float64Array(e.position),r=this._createPooledRBush();return e.components?this._createIndexComponentsThread(r,t,e.components.map((e=>new Uint32Array(e)))):this._createIndexAllThread(r,t)}_createIndexAllThread(e,t){const r=new Array(t.length/9);let n=0;for(let s=0;s<t.length;s+=9)r[n++]=o(t,s+0,s+3,s+6);return e.load(r),{result:e.toJSON()}}_createIndexComponentsThread(e,t,r){let n=0;for(const o of r)n+=o.length/3;const s=new Array(n);let a=0;for(const i of r)for(let e=0;e<i.length;e+=3)s[a++]=o(t,3*i[e+0],3*i[e+1],3*i[e+2]);return e.load(s),{result:e.toJSON()}}_createMeshData(e){const t=(e.transform?k({position:e.vertexAttributes.position,normal:null,tangent:null},e.transform,e.spatialReference).position:e.vertexAttributes.position).buffer;return !e.components||e.components.some((e=>!e.faces))?{position:t}:{position:t,components:e.components.map((e=>e.faces))}}_createPooledRBush(){return new h(9,has("esri-csp-restrictions")?e=>e:[".minX",".minY",".maxX",".maxY"])}}function o(e,t,r,n){return {minX:Math.min(e[t+0],e[r+0],e[n+0]),maxX:Math.max(e[t+0],e[r+0],e[n+0]),minY:Math.min(e[t+1],e[r+1],e[n+1]),maxY:Math.max(e[t+1],e[r+1],e[n+1]),p0:[e[t+0],e[t+1],e[t+2]],p1:[e[r+0],e[r+1],e[r+2]],p2:[e[n+0],e[n+1],e[n+2]]}}

export { n as default };
