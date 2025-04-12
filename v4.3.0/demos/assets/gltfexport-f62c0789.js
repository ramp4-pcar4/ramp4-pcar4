import{E as v,t as j,ff as B,dk as Y,aT as te,aV as se,r as g,bh as U,aW as S,p as ie,iH as H,lv as re,di as $,lw as X,er as ne,ep as ae,hz as oe,lx as he}from"./main-46bfe858.js";import{K as ce,k as fe}from"./quat-74ae2d39.js";import{o as ue,r as le,e as de}from"./quatf64-3363c48e.js";import{c as _e}from"./meshFeatureSet-68760423.js";import{L as pe,M as me}from"./georeference-11295ad7.js";import{C as p,D as T}from"./enums-64ab819c.js";import{o as Z,i as ge,g as we,s as Ae}from"./imageutils-6d1086a3.js";import{t as D}from"./resourceUtils-a8ed8f9e.js";import"./preload-helper-388ac9d5.js";import"./mat3f64-221ce671.js";import"./imageUtils-c2d0d1ae.js";import"./earcut-61f7b102.js";import"./deduplicate-cf954b63.js";import"./Indices-957ffa2d.js";import"./mat4f64-1413b4a7.js";import"./spatialReferenceEllipsoidUtils-e4c14d4a.js";import"./BufferView-cea33757.js";import"./vec33-65137966.js";import"./basicInterfaces-b7051eb1.js";var I;(function(i){i[i.JSON=1313821514]="JSON",i[i.BIN=5130562]="BIN"})(I||(I={}));class A{constructor(e,t){if(!e)throw new Error("GLB requires a JSON gltf chunk");this._length=A.HEADER_SIZE,this._length+=A.CHUNK_HEADER_SIZE;const s=this._textToArrayBuffer(e);if(this._length+=this._alignTo(s.byteLength,4),t&&(this._length+=A.CHUNK_HEADER_SIZE,this._length+=t.byteLength,t.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this._length),this._outView=new DataView(this.buffer),this._writeHeader();const r=this._writeChunk(s,12,I.JSON,32);t&&this._writeChunk(t,r,I.BIN)}_writeHeader(){this._outView.setUint32(0,A.MAGIC,!0),this._outView.setUint32(4,A.VERSION,!0),this._outView.setUint32(8,this._length,!0)}_writeChunk(e,t,s,r=0){const n=this._alignTo(e.byteLength,4);for(this._outView.setUint32(t,n,!0),this._outView.setUint32(t+=4,s,!0),this._writeArrayBuffer(this._outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)r&&this._outView.setUint8(t,r),t++;return t}_writeArrayBuffer(e,t,s,r,n){new Uint8Array(e,s,n).set(new Uint8Array(t,r,n),0)}_textToArrayBuffer(e){return new TextEncoder().encode(e).buffer}_alignTo(e,t){return t*Math.ceil(e/t)}}A.HEADER_SIZE=12,A.CHUNK_HEADER_SIZE=8,A.MAGIC=1179937895,A.VERSION=2;var E,b,y,m,W,C,J;(function(i){i[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB"})(E||(E={})),function(i){i[i.External=0]="External",i[i.DataURI=1]="DataURI",i[i.GLB=2]="GLB"}(b||(b={})),function(i){i[i.ARRAY_BUFFER=34962]="ARRAY_BUFFER",i[i.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(y||(y={})),function(i){i.SCALAR="SCALAR",i.VEC2="VEC2",i.VEC3="VEC3",i.VEC4="VEC4",i.MAT2="MAT2",i.MAT3="MAT3",i.MAT4="MAT4"}(m||(m={})),function(i){i[i.POINTS=0]="POINTS",i[i.LINES=1]="LINES",i[i.LINE_LOOP=2]="LINE_LOOP",i[i.LINE_STRIP=3]="LINE_STRIP",i[i.TRIANGLES=4]="TRIANGLES",i[i.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",i[i.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(W||(W={})),function(i){i.OPAQUE="OPAQUE",i.MASK="MASK",i.BLEND="BLEND"}(C||(C={})),function(i){i[i.NoColor=0]="NoColor",i[i.FaceColor=1]="FaceColor",i[i.VertexColor=2]="VertexColor"}(J||(J={}));let Te=class{constructor(e,t,s,r,n){this._buffer=e,this._componentType=s,this._dataType=r,this._data=[],this._isFinalized=!1,this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,t.bufferViews||(t.bufferViews=[]),this.index=t.bufferViews.length,this._bufferView={buffer:e.index,byteLength:-1,target:n};const a=this._getElementSize();a>=4&&n!==y.ELEMENT_ARRAY_BUFFER&&(this._bufferView.byteStride=a),t.bufferViews.push(this._bufferView),this._numComponentsForDataType=this._calculateNumComponentsForDataType()}push(e){const t=this._data.length;if(this._data.push(e),this._accessorIndex>=0){const s=t%this._numComponentsForDataType,r=this._accessorMin[s];this._accessorMin[s]=typeof r!="number"?e:Math.min(r,e);const n=this._accessorMax[s];this._accessorMax[s]=typeof n!="number"?e:Math.max(n,e)}}get dataSize(){return this._data.length*this._sizeComponentType()}get byteSize(){function e(t,s){return s*Math.ceil(t/s)}return e(this.dataSize,4)}getByteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}get byteOffset(){if(!this._isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this._buffer.getByteOffset(this)}_createTypedArray(e,t){switch(this._componentType){case p.BYTE:return new Int8Array(e,t);case p.FLOAT:return new Float32Array(e,t);case p.SHORT:return new Int16Array(e,t);case p.UNSIGNED_BYTE:return new Uint8Array(e,t);case p.UNSIGNED_INT:return new Uint32Array(e,t);case p.UNSIGNED_SHORT:return new Uint16Array(e,t)}}writeOutToBuffer(e,t){this._createTypedArray(e,t).set(this._data)}writeAsync(e){if(this._asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this._asyncWritePromise=e.then(t=>{const s=new Uint8Array(t);for(let r=0;r<s.length;++r)this._data.push(s[r]);delete this._asyncWritePromise}),this._asyncWritePromise}startAccessor(e){if(this._accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this._accessorIndex=this._data.length,this._accessorAttribute=e;const t=this._numComponentsForDataType;this._accessorMin=new Array(t),this._accessorMax=new Array(t)}endAccessor(){if(this._accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this._getElementSize(),t=this._numComponentsForDataType,s=(this._data.length-this._accessorIndex)/t;if(s%1)throw new Error("An accessor was ended with missing component values");for(let n=0;n<this._accessorMin.length;++n)typeof this._accessorMin[n]!="number"&&(this._accessorMin[n]=0),typeof this._accessorMax[n]!="number"&&(this._accessorMax[n]=0);const r={byteOffset:e*(this._accessorIndex/t),componentType:this._componentType,count:s,type:this._dataType,min:this._accessorMin,max:this._accessorMax,name:this._accessorAttribute};switch(this._accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this._componentType){case p.UNSIGNED_BYTE:case p.UNSIGNED_SHORT:r.normalized=!0}}return this._accessorIndex=-1,this._accessorAttribute=null,this._accessorMin=null,this._accessorMax=null,r}get finalized(){return this._finalizedPromise?this._finalizedPromise:this._isFinalized?this._finalizedPromise=Promise.resolve():this._finalizedPromise=new Promise(e=>this._finalizedPromiseResolve=e)}finalize(){const e=this._bufferView;return new Promise(t=>{const s=this._buffer.getViewFinalizePromises(this);this._asyncWritePromise&&s.push(this._asyncWritePromise),t(v(s))}).then(()=>{this._isFinalized=!0,e.byteOffset=this.getByteOffset(),e.byteLength=this.dataSize,this._finalizedPromiseResolve&&this._finalizedPromiseResolve()})}_getElementSize(){return this._sizeComponentType()*this._numComponentsForDataType}_sizeComponentType(){switch(this._componentType){case p.BYTE:case p.UNSIGNED_BYTE:return 1;case p.SHORT:case p.UNSIGNED_SHORT:return 2;case p.UNSIGNED_INT:case p.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this._dataType){case m.SCALAR:return 1;case m.VEC2:return 2;case m.VEC3:return 3;case m.VEC4:case m.MAT2:return 4;case m.MAT3:return 9;case m.MAT4:return 16}}};class K{constructor(e){this._gltf=e,this._bufferViews=[],this._isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const t={byteLength:-1};e.buffers.push(t),this._buffer=t}addBufferView(e,t,s){if(this._finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const r=new Te(this,this._gltf,e,t,s);return this._bufferViews.push(r),r}getByteOffset(e){let t=0;for(const s of this._bufferViews){if(s===e)return t;t+=s.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const t=[];for(const s of this._bufferViews){if(e&&s===e)return t;t.push(s.finalized)}return t}getArrayBuffer(){if(!this._isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this._getTotalSize(),t=new ArrayBuffer(e);let s=0;for(const r of this._bufferViews)r.writeOutToBuffer(t,s),s+=r.byteSize;return t}finalize(){if(this._finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this._finalizePromise=new Promise(e=>{e(v(this.getViewFinalizePromises()))}).then(()=>{this._isFinalized=!0;const e=this.getArrayBuffer();this._buffer.byteLength=e.byteLength,this._buffer.uri=e}),this._gltf.extras?.promises.push(this._finalizePromise),this._finalizePromise}_getTotalSize(){let e=0;for(const t of this._bufferViews)e+=t.byteSize;return e}}function be(i,e){if(i.components)for(const t of i.components)t.faces&&t.shading==="smooth"&&ye(t,e)}function ye(i,e){j(e.normal)&&(e.normal=new Float32Array(e.position.length));const t=i.faces,{position:s,normal:r}=e,n=t.length/3;for(let a=0;a<n;++a){const o=3*t[3*a+0],h=3*t[3*a+1],c=3*t[3*a+2],l=B(xe,s[o+0],s[o+1],s[o+2]),u=B(Re,s[h+0],s[h+1],s[h+2]),d=B(Ne,s[c+0],s[c+1],s[c+2]),x=Y(u,u,l),R=Y(d,d,l),_=te(x,x,R);r[o+0]+=_[0],r[o+1]+=_[1],r[o+2]+=_[2],r[h+0]+=_[0],r[h+1]+=_[1],r[h+2]+=_[2],r[c+0]+=_[0],r[c+1]+=_[1],r[c+2]+=_[2]}for(let a=0;a<r.length;a+=3)B(N,r[a],r[a+1],r[a+2]),se(N,N),r[a+0]=N[0],r[a+1]=N[1],r[a+2]=N[2]}function Ee(i){if(g(i.transform))return i.transform.getOriginPoint(i.spatialReference);const e=i.extent.xmax-i.extent.width/2,t=i.extent.ymax-i.extent.height/2,s=i.extent.zmin;return new U({x:e,y:t,z:s,spatialReference:i.extent.spatialReference})}const xe=S(),Re=S(),Ne=S(),N=S(),G=ie.getLogger("gltf");class Oe{constructor(e,t,s){this.params={},this._materialMap=new Array,this._imageMap=new Map,this._textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{options:t,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this._addScenes(e)}_addScenes(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras,s=t.options.bufferOutputType===E.GLB||t.options.imageOutputType===b.GLB;s&&(t.binChunkBuffer=new K(this.gltf)),e.forEachScene(r=>{this._addScene(r)}),s&&t.binChunkBuffer.finalize()}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode(s=>{t.nodes||(t.nodes=[]);const r=this._addNode(s);t.nodes.push(r)}),this.gltf.scenes.push(t)}_addNode(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;H(s,re)||(t.translation=$(s));const r=e.rotation;ce(r,ue)||(t.rotation=le(r));const n=e.scale;H(n,X)||(t.scale=$(n)),e.mesh&&e.mesh.vertexAttributes.position?t.mesh=this._addMesh(e.mesh):e.forEachNode(o=>{t.children||(t.children=[]);const h=this._addNode(o);t.children.push(h)});const a=this.gltf.nodes.length;return this.gltf.nodes.push(t),a}_addMesh(e){this.gltf.meshes||(this.gltf.meshes=[]);const t={primitives:[]},s=this.gltf.extras,r=s.options.bufferOutputType===E.GLB;let n;n=r?s.binChunkBuffer:new K(this.gltf),this.params.origin||(this.params.origin=Ee(e));const a=this.params.ignoreLocalTransform?ne(e.transform,f=>new pe({origin:[f.origin[0],f.origin[1],f.origin[2]],geographic:!1})):e.transform,o=me(e.vertexAttributes,a,this.params.origin,{geographic:this.params.geographic,unit:"meters"});be(e,o),this._flipYZAxis(o);const h=n.addBufferView(p.FLOAT,m.VEC3,y.ARRAY_BUFFER);let c,l,u,d;o.normal&&(c=n.addBufferView(p.FLOAT,m.VEC3,y.ARRAY_BUFFER)),e.vertexAttributes.uv&&(l=n.addBufferView(p.FLOAT,m.VEC2,y.ARRAY_BUFFER)),o.tangent&&(u=n.addBufferView(p.FLOAT,m.VEC4,y.ARRAY_BUFFER)),e.vertexAttributes.color&&(d=n.addBufferView(p.UNSIGNED_BYTE,m.VEC4,y.ARRAY_BUFFER)),h.startAccessor("POSITION"),c&&c.startAccessor("NORMAL"),l&&l.startAccessor("TEXCOORD_0"),u&&u.startAccessor("TANGENT"),d&&d.startAccessor("COLOR_0");const x=o.position.length/3,{position:R,normal:_,tangent:w}=o,{color:O,uv:L}=e.vertexAttributes;for(let f=0;f<x;++f)h.push(R[3*f+0]),h.push(R[3*f+1]),h.push(R[3*f+2]),c&&g(_)&&(c.push(_[3*f+0]),c.push(_[3*f+1]),c.push(_[3*f+2])),l&&g(L)&&(l.push(L[2*f+0]),l.push(L[2*f+1])),u&&g(w)&&(u.push(w[4*f+0]),u.push(w[4*f+1]),u.push(w[4*f+2]),u.push(w[4*f+3])),d&&g(O)&&(d.push(O[4*f+0]),d.push(O[4*f+1]),d.push(O[4*f+2]),d.push(O[4*f+3]));const q=h.endAccessor(),k=this._addAccessor(h.index,q);let z,F,V,P,M;if(c){const f=c.endAccessor();z=this._addAccessor(c.index,f)}if(l){const f=l.endAccessor();F=this._addAccessor(l.index,f)}if(u){const f=u.endAccessor();V=this._addAccessor(u.index,f)}if(d){const f=d.endAccessor();P=this._addAccessor(d.index,f)}e.components&&e.components.length>0&&e.components[0].faces?(M=n.addBufferView(p.UNSIGNED_INT,m.SCALAR,y.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(M,e.components,t,k,z,F,V,P)):this._addMeshVertexNonIndexed(e.components,t,k,z,F,V,P),h.finalize(),c&&c.finalize(),l&&l.finalize(),u&&u.finalize(),M&&M.finalize(),d&&d.finalize(),r||n.finalize();const ee=this.gltf.meshes.length;return this.gltf.meshes.push(t),ee}_flipYZAxis({position:e,normal:t,tangent:s}){this._flipYZBuffer(e,3),this._flipYZBuffer(t,3),this._flipYZBuffer(s,4)}_flipYZBuffer(e,t){if(!j(e))for(let s=1,r=2;s<e.length;s+=t,r+=t){const n=e[s],a=e[r];e[s]=a,e[r]=-n}}_addMaterial(e){if(e===null)return;const t=this._materialMap.indexOf(e);if(t!==-1)return t;this.gltf.materials||(this.gltf.materials=[]);const s={};switch(e.alphaMode){case"mask":s.alphaMode=C.MASK;break;case"auto":case"blend":s.alphaMode=C.BLEND}e.alphaCutoff!==.5&&(s.alphaCutoff=e.alphaCutoff),e.doubleSided&&(s.doubleSided=e.doubleSided),s.pbrMetallicRoughness={};const r=o=>o**2.1,n=o=>{const h=o.toRgba();return h[0]=r(h[0]/255),h[1]=r(h[1]/255),h[2]=r(h[2]/255),h};if(g(e.color)&&(s.pbrMetallicRoughness.baseColorFactor=n(e.color)),g(e.colorTexture)&&(s.pbrMetallicRoughness.baseColorTexture={index:this._addTexture(e.colorTexture)}),g(e.normalTexture)&&(s.normalTexture={index:this._addTexture(e.normalTexture)}),e instanceof _e){if(g(e.emissiveTexture)&&(s.emissiveTexture={index:this._addTexture(e.emissiveTexture)}),g(e.emissiveColor)){const o=n(e.emissiveColor);s.emissiveFactor=[o[0],o[1],o[2]]}g(e.occlusionTexture)&&(s.occlusionTexture={index:this._addTexture(e.occlusionTexture)}),g(e.metallicRoughnessTexture)&&(s.pbrMetallicRoughness.metallicRoughnessTexture={index:this._addTexture(e.metallicRoughnessTexture)}),s.pbrMetallicRoughness.metallicFactor=e.metallic,s.pbrMetallicRoughness.roughnessFactor=e.roughness}else s.pbrMetallicRoughness.metallicFactor=1,s.pbrMetallicRoughness.roughnessFactor=1,G.warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");const a=this.gltf.materials.length;return this.gltf.materials.push(s),this._materialMap.push(e),a}_addTexture(e){const t=this.gltf.textures??[];return this.gltf.textures=t,ae(this._textureMap,e,()=>{const s={sampler:this._addSampler(e),source:this._addImage(e)},r=t.length;return t.push(s),r})}_addImage(e){const t=this._imageMap.get(e);if(t!=null)return t;this.gltf.images||(this.gltf.images=[]);const s={};if(e.url)s.uri=e.url;else{const n=e.data;s.extras=n;for(let o=0;o<this.gltf.images.length;++o)if(n===this.gltf.images[o].extras)return o;const a=this.gltf.extras;switch(a.options.imageOutputType){case b.GLB:{const o=a.binChunkBuffer.addBufferView(p.UNSIGNED_BYTE,m.SCALAR);if(D(n))g(n.data)&&o.writeOutToBuffer(n.data,0);else{const h=Z(n).then(({data:c,type:l})=>(s.mimeType=l,c));o.writeAsync(h).then(()=>{o.finalize()})}s.bufferView=o.index;break}case b.DataURI:if(D(n)){G.warnOnce("Image export for basis compressed textures not available.");break}s.uri=ge(n);break;default:if(D(n)){G.warnOnce("Image export for basis compressed textures not available.");break}a.promises.push(Z(n).then(({data:o,type:h})=>{s.uri=o,s.mimeType=h}))}}const r=this.gltf.images.length;return this.gltf.images.push(s),this._imageMap.set(e,r),r}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=T.REPEAT,s=T.REPEAT;if(typeof e.wrap=="string")switch(e.wrap){case"clamp":t=T.CLAMP_TO_EDGE,s=T.CLAMP_TO_EDGE;break;case"mirror":t=T.MIRRORED_REPEAT,s=T.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":s=T.CLAMP_TO_EDGE;break;case"mirror":s=T.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":t=T.CLAMP_TO_EDGE;break;case"mirror":t=T.MIRRORED_REPEAT}}const r={wrapS:t,wrapT:s};for(let a=0;a<this.gltf.samplers.length;++a)if(JSON.stringify(r)===JSON.stringify(this.gltf.samplers[a]))return a;const n=this.gltf.samplers.length;return this.gltf.samplers.push(r),n}_addAccessor(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const r=this.gltf.accessors.length;return this.gltf.accessors.push(s),r}_addMeshVertexIndexed(e,t,s,r,n,a,o,h){for(const c of t){e.startAccessor("INDICES");for(let d=0;d<c.faces.length;++d)e.push(c.faces[d]);const l=e.endAccessor(),u={attributes:{POSITION:r},indices:this._addAccessor(e.index,l),material:this._addMaterial(c.material)};n&&c.shading!=="flat"&&(u.attributes.NORMAL=n),a&&(u.attributes.TEXCOORD_0=a),o&&c.shading!=="flat"&&(u.attributes.TANGENT=o),h&&(u.attributes.COLOR_0=h),s.primitives.push(u)}}_addMeshVertexNonIndexed(e,t,s,r,n,a,o){const h={attributes:{POSITION:s}};r&&(h.attributes.NORMAL=r),n&&(h.attributes.TEXCOORD_0=n),a&&(h.attributes.TANGENT=a),o&&(h.attributes.COLOR_0=o),e&&(h.material=this._addMaterial(e[0].material)),t.primitives.push(h)}}let Se=class{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){oe(this._scenes,e)}forEachScene(e){this._scenes.forEach(e)}};class Me{constructor(){this.name="",this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}}class Be{constructor(e){this.mesh=e,this.name="",this.translation=S(),this.rotation=de(),this.scale=$(X),this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}set rotationAngles(e){fe(this.rotation,e[0],e[1],e[2])}}const Ie="model.gltf",Q="model.glb";function Ce(i,e,t){const s=new Oe(i,e=e||{},t);let r=s.params;r?r.origin||(r.origin=new U({x:-1,y:-1,z:-1})):r={origin:new U({x:-1,y:-1,z:-1})};const n=r.origin,a=s.gltf,o=a.extras?.promises??[];let h=1,c=1,l=null;return v(o).then(()=>{const u={origin:n};delete a.extras;const d=typeof e.jsonSpacing=="number"?e.jsonSpacing:4,x=JSON.stringify(a,(R,_)=>{if(R!=="extras"){if(_ instanceof ArrayBuffer){if(we(_))switch(e.imageOutputType){case b.DataURI:case b.GLB:break;case b.External:default:{const w=`img${c}.png`;return c++,u[w]=_,w}}switch(e.bufferOutputType){case E.DataURI:return Ae(_);case E.GLB:if(l)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(l=_);case E.External:default:{const w=`data${h}.bin`;return h++,u[w]=_,w}}}return _}},d);return e.bufferOutputType===E.GLB||e.imageOutputType===b.GLB?u[Q]=new A(x,l).buffer:u[Ie]=x,u})}function Le(i,e){return Ce(i,{bufferOutputType:E.GLB,imageOutputType:b.GLB,jsonSpacing:0},e)}class ze{constructor(e,t){this._file={type:"model/gltf-binary",data:e},this.origin=t}buffer(){return Promise.resolve(this._file)}download(e){he(new Blob([this._file.data],{type:this._file.type}),e)}}function st(i,e){const t=new Se,s=new Me;return t.addScene(s),s.addNode(new Be(i)),Le(t,e).then(r=>new ze(r[Q],r.origin))}export{st as toBinaryGLTF};
