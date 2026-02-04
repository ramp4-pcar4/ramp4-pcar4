import { V as has } from './main-DbwmOBz5.js';
import { s } from './PooledRBush-CS9Iz1GQ.js';
import { g } from './meshVertexSpaceUtils-Wt8XE-BC.js';
import { P } from './georeference-D-aYzyhg.js';
import './preload-helper-dJJaZANz.js';
import './MeshLocalVertexSpace-D73D98qp.js';
import './vec3-COq5nDmL.js';
import './mat3f64-DiVtVT5k.js';
import './mat4f64-D1udxz0O.js';
import './computeTranslationToOriginAndRotation-_Kt4s7Cw.js';
import './DoubleArray-Sm1VdYFT.js';
import './quat-D0kjGsAx.js';
import './quatf64-BVXz_O4E.js';
import './BufferView-cIpPdY_p.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class n{async createIndex(t,r){const n=new Array;if(!t.vertexAttributes?.position)return new s;const o=this._createMeshData(t),s$1=null!=r?await r.invoke("createIndexThread",o,{transferList:n}):this.createIndexThread(o).result;return this._createPooledRBush().fromJSON(s$1)}createIndexThread(e){const t=new Float64Array(e.position),r=this._createPooledRBush();return e.components?this._createIndexComponentsThread(r,t,e.components.map((e=>new Uint32Array(e)))):this._createIndexAllThread(r,t)}_createIndexAllThread(e,t){const r=new Array(t.length/9);let n=0;for(let s=0;s<t.length;s+=9)r[n++]=o(t,s,s+3,s+6);return e.load(r),{result:e.toJSON()}}_createIndexComponentsThread(e,t,r){let n=0;for(const o of r)n+=o.length/3;const s=new Array(n);let a=0;for(const i of r)for(let e=0;e<i.length;e+=3)s[a++]=o(t,3*i[e],3*i[e+1],3*i[e+2]);return e.load(s),{result:e.toJSON()}}_createMeshData(e){const n=(g(e.vertexSpace)?P({position:e.vertexAttributes.position,normal:null,tangent:null},e.vertexSpace,e.transform,e.spatialReference).position:e.vertexAttributes.position).buffer;return !e.components||e.components.some((e=>!e.faces))?{position:n}:{position:n,components:e.components.map((e=>e.faces))}}_createPooledRBush(){return new s(9,has("esri-csp-restrictions")?e=>e:[".minX",".minY",".maxX",".maxY"])}}function o(e,t,r,n){return {minX:Math.min(e[t],e[r],e[n]),maxX:Math.max(e[t],e[r],e[n]),minY:Math.min(e[t+1],e[r+1],e[n+1]),maxY:Math.max(e[t+1],e[r+1],e[n+1]),p0:[e[t],e[t+1],e[t+2]],p1:[e[r],e[r+1],e[r+2]],p2:[e[n],e[n+1],e[n+2]]}}

export { n as default };
