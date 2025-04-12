import{fl as d,fm as b,fn as A,fo as g,n as E,fp as R}from"./main-C3PVbFgd.js";import{u as o,E as B}from"./Texture-BO1NtlVo.js";import{A as r,F as c,V as f,C as a}from"./enums-DBi1-Mm2.js";import{y}from"./memoryEstimations-Dht9odqM.js";const x=()=>E.getLogger("esri.views.webgl.BufferObject");class u{static createIndex(t,e,i){return new u(t,r.ELEMENT_ARRAY_BUFFER,e,i)}static createVertex(t,e,i){return new u(t,r.ARRAY_BUFFER,e,i)}static createUniform(t,e,i){return new u(t,r.UNIFORM_BUFFER,e,i)}static createPixelPack(t,e=c.STREAM_READ,i){const s=new u(t,r.PIXEL_PACK_BUFFER,e);return i&&s.setSize(i),s}static createPixelUnpack(t,e=c.STREAM_DRAW,i){return new u(t,r.PIXEL_UNPACK_BUFFER,e,i)}static createTransformFeedback(t,e=c.STATIC_DRAW,i){const s=new u(t,r.TRANSFORM_FEEDBACK_BUFFER,e);return s.setSize(i),s}constructor(t,e,i,s){this._context=t,this.bufferType=e,this.usage=i,this._glName=null,this._size=-1,this._indexType=void 0,t.instanceCounter.increment(f.BufferObject,this),this._glName=this._context.gl.createBuffer(),o(this._context.gl),s&&this.setData(s)}get glName(){return this._glName}get size(){return this._size}get indexType(){return this._indexType}get usedMemory(){if(this.bufferType===r.ELEMENT_ARRAY_BUFFER){if(this._indexType===a.UNSIGNED_INT)return 4*this._size;if(this._indexType===a.UNSIGNED_SHORT)return 2*this._size}return this._size}get _isVAOAware(){return this.bufferType===r.ELEMENT_ARRAY_BUFFER||this.bufferType===r.ARRAY_BUFFER}dispose(){this._context?.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(f.BufferObject,this),this._context=null):this._glName&&x().warn("Leaked WebGL buffer object")}setSize(t,e=null){if(this.bufferType===r.ELEMENT_ARRAY_BUFFER&&e!=null)switch(this._indexType=e,e){case a.UNSIGNED_SHORT:t*=2;break;case a.UNSIGNED_INT:t*=4}this._setBufferData(t)}setData(t){if(!t)return;let e=t.byteLength;this.bufferType===r.ELEMENT_ARRAY_BUFFER&&(d(t)?this._indexType=a.UNSIGNED_BYTE:b(t)?(e/=2,this._indexType=a.UNSIGNED_SHORT):A(t)&&(e/=4,this._indexType=a.UNSIGNED_INT)),this._setBufferData(e,t)}_setBufferData(t,e=null){this._size=t;const i=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const s=this._context.gl;e!=null?s.bufferData(this.bufferType,e,this.usage):s.bufferData(this.bufferType,t,this.usage),o(s),this._isVAOAware&&this._context.bindVAO(i)}setSubData(t,e,i,s){if(!t)return;const h=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);const{gl:_}=this._context;_.bufferSubData(this.bufferType,e*t.BYTES_PER_ELEMENT,t,i,s-i),o(_),this._isVAOAware&&this._context.bindVAO(h)}getSubData(t,e=0,i,s){if(i<0||s<0)return;const h=F(t)?t.BYTES_PER_ELEMENT:1;if(h*((i??0)+(s??0))>t.byteLength)return;e+h*(s??0)>this.usedMemory&&x().warn("Potential problem getting subdata: requested data exceeds buffer size!");const _=this._context.gl;this.bufferType===r.TRANSFORM_FEEDBACK_BUFFER?(this._context.bindBuffer(this,r.TRANSFORM_FEEDBACK_BUFFER),_.getBufferSubData(r.TRANSFORM_FEEDBACK_BUFFER,e,t,i,s),this._context.unbindBuffer(r.TRANSFORM_FEEDBACK_BUFFER)):(this._context.bindBuffer(this,r.COPY_READ_BUFFER),_.getBufferSubData(r.COPY_READ_BUFFER,e,t,i,s),this._context.unbindBuffer(r.COPY_READ_BUFFER))}async getSubDataAsync(t,e=0,i,s){await this._context.clientWaitAsync(),this.getSubData(t,e,i,s)}}function F(n){return g(n)}const l=()=>E.getLogger("esri.views.webgl.VertexArrayObject");let N=class{constructor(n,t,e,i,s=null){this._context=n,this._locations=t,this._layout=e,this._buffers=i,this._indexBuffer=s,this._glName=null,this._initialized=!1}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get byteSize(){return Array.from(this._buffers.values()).reduce((n,t)=>n+t.usedMemory,this._indexBuffer!=null?this._indexBuffer.usedMemory:0)}get layout(){return this._layout}get locations(){return this._locations}get usedMemory(){return this.byteSize+(this._buffers.size+(this._indexBuffer?1:0))*y}get cachedMemory(){return this.usedMemory}dispose(){this._context?(this._context.getBoundVAO()===this&&this._context.bindVAO(null),this._buffers.forEach(n=>n.dispose()),this._buffers.clear(),this._indexBuffer=R(this._indexBuffer),this.disposeVAOOnly()):(this._glName||this._buffers.size>0)&&l().warn("Leaked WebGL VAO")}disposeVAOOnly(){this._glName&&(this._context.gl.deleteVertexArray(this._glName),this._glName=null,this._context.instanceCounter.decrement(f.VertexArrayObject,this)),this._context=null}initialize(){if(this._initialized)return;const{gl:n}=this._context,t=n.createVertexArray();n.bindVertexArray(t),this._bindLayout(),n.bindVertexArray(null),this._glName=t,this._context.instanceCounter.increment(f.VertexArrayObject,this),this._initialized=!0}bind(){this.initialize(),this._context.gl.bindVertexArray(this.glName)}_bindLayout(){const{_buffers:n,_layout:t,_indexBuffer:e}=this;n||l().error("Vertex buffer dictionary is empty!");const i=this._context.gl;this._buffers.forEach((s,h)=>{const _=t.get(h);_?B(this._context,this._locations,s,_):l().error("Vertex element descriptor is empty!")}),e!=null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.glName)}unbind(){this.initialize(),this._context.gl.bindVertexArray(null)}};export{u as E,N as o};
