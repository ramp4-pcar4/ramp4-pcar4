import { h1 as p, h2 as r$1, G as s$1 } from './main-8822140d.js';
import { V } from './enums-af0bf3a9.js';
import { E } from './Texture-bb85fd56.js';
import { r } from './Program-c5762f5e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let e$1 = class e{constructor(e){this._readFile=e;}resolveIncludes(e){return this._resolve(e)}_resolve(e,t=new Map){if(t.has(e))return t.get(e);const r=this._read(e);if(!r)throw new Error(`cannot find shader file ${e}`);const s=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let n=s.exec(r);const l=[];for(;null!=n;)l.push({path:n[1],start:n.index,length:n[0].length}),n=s.exec(r);let a=0,h="";return l.forEach((e=>{h+=r.slice(a,e.start),h+=t.has(e.path)?"":this._resolve(e.path,t),a=e.start+e.length;})),h+=r.slice(a),t.set(e,h),h}_read(e){return this._readFile(e)}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const n=()=>s$1.getLogger("esri.views.webgl.VertexArrayObject");let o=class{constructor(e,t,i,r,s=null){this._context=e,this._locations=t,this._layout=i,this._buffers=r,this._indexBuffer=s,this._glName=null,this._initialized=!1;}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get byteSize(){return Object.keys(this._buffers).reduce(((e,t)=>e+this._buffers[t].usedMemory),null!=this._indexBuffer?this._indexBuffer.usedMemory:0)}get layout(){return this._layout}get locations(){return this._locations}get usedMemory(){return this.byteSize+(Object.keys(this._buffers).length+(this._indexBuffer?1:0))*p}dispose(){if(this._context){this._context.getBoundVAO()===this&&this._context.bindVAO(null);for(const e in this._buffers)this._buffers[e]?.dispose(),delete this._buffers[e];this._indexBuffer=r$1(this._indexBuffer),this.disposeVAOOnly();}else (this._glName||Object.getOwnPropertyNames(this._buffers).length>0)&&n().warn("Leaked WebGL VAO");}disposeVAOOnly(){this._glName&&(this._context.gl.deleteVertexArray(this._glName),this._glName=null,this._context.instanceCounter.decrement(V.VertexArrayObject,this)),this._context=null;}initialize(){if(this._initialized)return;const{gl:e}=this._context,t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t,this._context.instanceCounter.increment(V.VertexArrayObject,this),this._initialized=!0;}bind(){this.initialize(),this._context.gl.bindVertexArray(this.glName);}_bindLayout(){const{_buffers:e,_layout:t,_indexBuffer:i}=this;e||n().error("Vertex buffer dictionary is empty!");const r=this._context.gl;for(const o in e){const i=e[o];i||n().error("Vertex buffer is uninitialized!");const r=t[o];r||n().error("Vertex element descriptor is empty!"),E(this._context,this._locations,i,r);}null!=i&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i.glName);}unbind(){this.initialize(),this._context.gl.bindVertexArray(null);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e(e,t,a=""){return new r(e,a+t.shaders.vertexShader,a+t.shaders.fragmentShader,t.attributes)}

export { e as a, e$1 as e, o };
