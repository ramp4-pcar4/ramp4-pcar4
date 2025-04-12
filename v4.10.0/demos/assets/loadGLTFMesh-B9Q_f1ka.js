import{s as L,U as P,bC as O,h5 as B,gf as z,gg as C,gh as D,cz as h,iY as G,aq as U,ew as q}from"./main-CzbArNue.js";import{e as S}from"./mat3f64-q3fE-ZOt.js";import{w as N,m as K,f as Q,c as V}from"./Mesh-Bv-2K1Wq.js";import{p as Y}from"./MeshVertexAttributes-GcBoQb_L.js";import{s as E}from"./meshVertexSpaceUtils-BIs9wX6x.js";import{c as F,x as I,L as k,O as R,i as j,E as H,T as J,u as W}from"./BufferView-xDE7i1_l.js";import{t as X,r as Z,u as ee,n as A}from"./vec3-BeV4q9m0.js";import{f as te,o as re,u as M}from"./vec4-CEpE2bgG.js";import{e as oe}from"./types-D0PSWh4d.js";import{loadGLTF as ne}from"./loader-gJDqD6n5.js";import{n as se,o as ae,f as ie,a as w,b as le,l as ue,e as ce,c as fe,d as me}from"./DefaultMaterial_COLOR_GAMMA-oE5Zcphc.js";import{B as pe}from"./vertexSpaceConversion-CHUFrMuI.js";import{r as de}from"./resourceUtils-BNmGu8km.js";import"./preload-helper-ExcqyqRp.js";import"./MeshTransform-BLMEpOmz.js";import"./mat4f64-CSKppSlJ.js";import"./quat-DOwnX5ja.js";import"./quatf64-aQ5IuZRd.js";import"./MeshLocalVertexSpace-Ccm9OD-k.js";import"./earcut-Lltz9D9k.js";import"./Indices-DNpzAUBy.js";import"./plane-D5IY0WGh.js";import"./deduplicate-CPSOb3vl.js";import"./projectPointToVector-CNVT78_D.js";import"./spatialReferenceEllipsoidUtils-COR8TJia.js";import"./computeTranslationToOriginAndRotation-CqzkfP_a.js";import"./External-B8rgyr5I.js";import"./basicInterfaces-CZwQPxTp.js";function ge(e,t,r){const l=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,c=t.typedBufferStride,i=r?r.count:t.count;let s=(r?.dstIndex??0)*n,m=(r?.srcIndex??0)*c;for(let u=0;u<i;++u){for(let o=0;o<9;++o)l[s+o]=a[m+o];s+=n,m+=c}}Object.freeze(Object.defineProperty({__proto__:null,copy:ge},Symbol.toStringTag,{value:"Module"}));function xe(e,t,r){const l=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,c=t.typedBufferStride,i=r?r.count:t.count;let s=(r?.dstIndex??0)*n,m=(r?.srcIndex??0)*c;for(let u=0;u<i;++u){for(let o=0;o<16;++o)l[s+o]=a[m+o];s+=n,m+=c}}Object.freeze(Object.defineProperty({__proto__:null,copy:xe},Symbol.toStringTag,{value:"Module"}));function $(e,t){return new e(new ArrayBuffer(t*e.ElementCount*oe(e.ElementType)))}async function rt(e,t,r){const l=new se($e(r)),n=(await ne(l,t,r,!0)).model,a=n.lods.shift(),c=new Map,i=new Map;n.textures.forEach((x,T)=>c.set(T,he(x))),n.materials.forEach((x,T)=>i.set(T,we(x,c)));const s=Te(a);for(const x of s.parts)be(s,x,i);const{position:m,normal:u,tangent:o,color:f,texCoord0:p}=s.vertexAttributes,d=E(e,r),b=e.spatialReference.isGeographic?E(e):d,v=pe({vertexAttributes:{position:m.typedBuffer,normal:u?.typedBuffer,tangent:o?.typedBuffer},vertexSpace:b,spatialReference:e.spatialReference},d,{allowBufferReuse:!0,sourceUnit:r?.unitConversionDisabled?void 0:"meters"});if(!v)throw new L("load-gltf-mesh:vertex-space-projection",`Failed to load mesh from glTF because we could not convert the vertex space from ${b.type} to ${d.type}`);return{transform:null,vertexSpace:d,components:s.components,spatialReference:e.spatialReference,vertexAttributes:new Y({...v,color:f?.typedBuffer,uv:p?.typedBuffer})}}function $e(e){const t=e?.resolveFile;return t?{busy:!1,request:async(r,l,n)=>{const a=t?.(r)??r;return(await P(a,{responseType:l==="image"?"image":l==="binary"||l==="image+type"?"array-buffer":"json",signal:n?.signal,timeout:0})).data}}:null}function y(e,t){if(e==null)return"-";const r=e.typedBuffer;return`${O(t,r.buffer,()=>t.size)}/${r.byteOffset}/${r.byteLength}`}function ye(e){return e!=null?e.toString():"-"}function Te(e){let t=0;const r={color:!1,tangent:!1,normal:!1,texCoord0:!1},l=new Map,n=new Map,a=[];for(const c of e.parts){const{attributes:{position:i,normal:s,color:m,tangent:u,texCoord0:o}}=c,f=`
      ${y(i,l)}/
      ${y(s,l)}/
      ${y(m,l)}/
      ${y(u,l)}/
      ${y(o,l)}/
      ${ye(c.transform)}
    `;let p=!1;const d=O(n,f,()=>(p=!0,{start:t,length:i.count}));p&&(t+=i.count),s&&(r.normal=!0),m&&(r.color=!0),u&&(r.tangent=!0),o&&(r.texCoord0=!0),a.push({gltf:c,writeVertices:p,region:d})}return{vertexAttributes:{position:$(J,t),normal:r.normal?$(j,t):null,tangent:r.tangent?$(F,t):null,color:r.color?$(I,t):null,texCoord0:r.texCoord0?$(W,t):null},parts:a,components:[]}}function he(e){return new N({data:(de(e.data),e.data),wrap:Ce(e.parameters.wrap)})}function we(e,t){const r=new B(Se(e.color,e.opacity)),l=e.emissiveFactor?new B(Ee(e.emissiveFactor)):null,n=a=>a?new V({scale:a.scale?[a.scale[0],a.scale[1]]:[1,1],rotation:q(a.rotation??0),offset:a.offset?[a.offset[0],a.offset[1]]:[0,0]}):null;return new K({color:r,colorTexture:t.get(e.textureColor),normalTexture:t.get(e.textureNormal),emissiveColor:l,emissiveTexture:t.get(e.textureEmissive),occlusionTexture:t.get(e.textureOcclusion),alphaMode:Be(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:t.get(e.textureMetallicRoughness),colorTextureTransform:n(e.colorTextureTransform),normalTextureTransform:n(e.normalTextureTransform),occlusionTextureTransform:n(e.occlusionTextureTransform),emissiveTextureTransform:n(e.emissiveTextureTransform),metallicRoughnessTextureTransform:n(e.metallicRoughnessTextureTransform)})}function be(e,t,r){t.writeVertices&&ve(e,t);const{indices:l,attributes:n,primitiveType:a,material:c}=t.gltf;let i=ae(l||n.position.count,a);const s=t.region.start;if(s){const m=new Uint32Array(i);for(let u=0;u<i.length;u++)m[u]+=s;i=m}e.components.push(new Q({name:t.gltf.name,faces:i,material:r.get(c),shading:n.normal?"source":"flat",trustSourceNormals:!0}))}function ve(e,t){const{position:r,normal:l,tangent:n,color:a,texCoord0:c}=e.vertexAttributes,i=t.region.start,{attributes:s,transform:m}=t.gltf,u=s.position.count;if(X(r.slice(i,u),s.position,m),s.normal!=null&&l!=null){const o=z(S(),m),f=l.slice(i,u);Z(f,s.normal,o),C(o)&&ee(f,f)}else l!=null&&ie(l,0,0,1,{dstIndex:i,count:u});if(s.tangent!=null&&n!=null){const o=D(S(),m),f=n.slice(i,u);te(f,s.tangent,o),C(o)&&re(f,f)}else n!=null&&w(n,0,0,1,1,{dstIndex:i,count:u});if(s.texCoord0!=null&&c!=null?le(c.slice(i,u),s.texCoord0):c!=null&&ue(c,0,0,{dstIndex:i,count:u}),s.color!=null&&a!=null){const o=s.color,f=a.slice(i,u);if(o.elementCount===4)o instanceof F?M(f,o,255):o instanceof I?ce(f,o):o instanceof k&&M(f,o,1/256);else{w(f,255,255,255,255);const p=R.fromTypedArray(f.typedBuffer,f.typedBufferStride);o instanceof j?A(p,o,255):o instanceof R?fe(p,o):o instanceof H&&A(p,o,1/256)}}else a!=null&&w(a.slice(i,u),255,255,255,255)}function Be(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Ce(e){return{horizontal:_(e.s),vertical:_(e.t)}}function _(e){switch(e){case h.CLAMP_TO_EDGE:return"clamp";case h.MIRRORED_REPEAT:return"mirror";case h.REPEAT:return"repeat"}}function g(e){return e**(1/me)*255}function Se(e,t){return G(g(e[0]),g(e[1]),g(e[2]),t)}function Ee(e){return U(g(e[0]),g(e[1]),g(e[2]))}export{rt as loadGLTFMesh};
