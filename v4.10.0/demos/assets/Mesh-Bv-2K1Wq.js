const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./loadGLTFMesh-B9Q_f1ka.js","./main-CzbArNue.js","./preload-helper-ExcqyqRp.js","./main-wZMPJMua.css","./mat3f64-q3fE-ZOt.js","./MeshVertexAttributes-GcBoQb_L.js","./meshVertexSpaceUtils-BIs9wX6x.js","./MeshLocalVertexSpace-Ccm9OD-k.js","./BufferView-xDE7i1_l.js","./vec3-BeV4q9m0.js","./vec4-CEpE2bgG.js","./types-D0PSWh4d.js","./loader-gJDqD6n5.js","./mat4f64-CSKppSlJ.js","./quat-DOwnX5ja.js","./quatf64-aQ5IuZRd.js","./resourceUtils-BNmGu8km.js","./basicInterfaces-CZwQPxTp.js","./DefaultMaterial_COLOR_GAMMA-oE5Zcphc.js","./Indices-DNpzAUBy.js","./vertexSpaceConversion-CHUFrMuI.js","./spatialReferenceEllipsoidUtils-COR8TJia.js","./computeTranslationToOriginAndRotation-CqzkfP_a.js","./projectPointToVector-CNVT78_D.js","./MeshTransform-BLMEpOmz.js","./earcut-Lltz9D9k.js","./plane-D5IY0WGh.js","./deduplicate-CPSOb3vl.js","./External-B8rgyr5I.js","./gltfexport-xxJxolYv.js"])))=>i.map(i=>d[i]);
import{_ as Se}from"./preload-helper-ExcqyqRp.js";import{bw as u,bx as f,hi as Wt,eR as Nt,ej as Pt,by as z,bz as ve,eE as Ne,a_ as Re,pP as zt,cS as Ht,h5 as ot,ge as Pe,G as ie,T as Te,s as ne,fD as Bt,d$ as _,co as kt,mL as Gt,dS as pe,pQ as Vt,pR as Zt,pS as Ee,lX as le,E as qt,dD as Xt,dG as Yt,ap as S,aq as Me,pT as Jt,kI as ze,pU as _e,bG as Kt,bq as Qt,bH as er,jA as st,J as we,D as j,R as tr,pV as rr,ne as nr,ld as or,pr as sr,jN as ir,a1 as ar,cc as lr,gi as De,ao as cr,pW as it,oy as ur,iw as $e,gp as at,pX as lt,gq as ct,pY as ut,pZ as pt,gh as pr,d_ as hr,dZ as fr,dE as mr,fl as dr,mk as gr,cf as yr,cG as xr,p_ as vr,b0 as wr,p$ as $r,f3 as br}from"./main-CzbArNue.js";import{j as ht,N as oe,z as ft,w as he,k as mt,d as Tr}from"./MeshTransform-BLMEpOmz.js";import{r as Ar,n as Sr,p as fe}from"./MeshVertexAttributes-GcBoQb_L.js";import{a as Le,b as me}from"./MeshLocalVertexSpace-Ccm9OD-k.js";import{a as ae,s as de,g as dt,u as Rr}from"./meshVertexSpaceUtils-BIs9wX6x.js";import{e as Mr}from"./earcut-Lltz9D9k.js";import{t as gt}from"./Indices-DNpzAUBy.js";import{M as _r,O as Dr,v as Lr}from"./plane-D5IY0WGh.js";import{e as He}from"./deduplicate-CPSOb3vl.js";import{c as I}from"./projectPointToVector-CNVT78_D.js";import{F as $,B as Ce,O as W,n as Cr,k as yt,g as xt,E as vt,w as wt,h as $t,R as bt,G as Tt}from"./vertexSpaceConversion-CHUFrMuI.js";import{e as be}from"./mat4f64-CSKppSlJ.js";import{a as Ie}from"./spatialReferenceEllipsoidUtils-COR8TJia.js";import{C as At}from"./computeTranslationToOriginAndRotation-CqzkfP_a.js";import{e as Be,i as Or}from"./vec3-BeV4q9m0.js";import{o as ke,h as Fr,m as jr}from"./External-B8rgyr5I.js";import{e as St}from"./mat3f64-q3fE-ZOt.js";import{b as Er}from"./quat-DOwnX5ja.js";import{e as Ir,r as Ur}from"./quatf64-aQ5IuZRd.js";var V;const Ae=new WeakMap;let Wr=0,O=V=class extends ve{constructor(e){super(e),this.wrap="repeat"}get url(){return this._get("url")||null}set url(e){this._set("url",e),e&&this._set("data",null)}get data(){return this._get("data")||null}set data(e){this._set("data",e),e&&this._set("url",null)}writeData(e,t,r,n){if(e instanceof HTMLImageElement){const o={type:"image-element",src:Ne(e.src,n),crossOrigin:e.crossOrigin};t[r]=o}else if(e instanceof HTMLCanvasElement){const o={type:"canvas-element",imageData:Ge(e.getContext("2d").getImageData(0,0,e.width,e.height))};t[r]=o}else if(e instanceof HTMLVideoElement){const o={type:"video-element",src:Ne(e.src,n),autoplay:e.autoplay,loop:e.loop,muted:e.muted,crossOrigin:e.crossOrigin,preload:e.preload};t[r]=o}else if(e instanceof ImageData){const o={type:"image-data",imageData:Ge(e)};t[r]=o}}readData(e){switch(e.type){case"image-element":{const t=new Image;return t.src=e.src,t.crossOrigin=e.crossOrigin,t}case"canvas-element":{const t=Ve(e.imageData),r=document.createElement("canvas");return r.width=t.width,r.height=t.height,r.getContext("2d").putImageData(t,0,0),r}case"image-data":return Ve(e.imageData);case"video-element":{const t=document.createElement("video");return t.src=e.src,t.crossOrigin=e.crossOrigin,t.autoplay=e.autoplay,t.loop=e.loop,t.muted=e.muted,t.preload=e.preload,t}default:return}}get transparent(){const{data:e,url:t}=this;return e instanceof HTMLCanvasElement?Ze(e.getContext("2d").getImageData(0,0,e.width,e.height)):e instanceof ImageData?Ze(e):!(!t?.toLowerCase().endsWith(".png")&&!t?.toLocaleLowerCase().startsWith("data:image/png;"))}set transparent(e){this._overrideIfSome("transparent",e)}get contentHash(){const e=typeof this.wrap=="string"?this.wrap:typeof this.wrap=="object"?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",t=(r="")=>`d:${r},t:${this.transparent},w:${e}`;return this.url!=null?t(this.url):this.data!=null?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?t(this.data.src):(Ae.has(this.data)||Ae.set(this.data,++Wr),t(Ae.get(this.data))):t()}get memoryUsage(){let e=0;if(e+=this.url!=null?this.url.length:0,this.data!=null){const t=this.data;"data"in t?e+=t.data.byteLength:t instanceof HTMLImageElement?e+=t.naturalWidth*t.naturalHeight*3:t instanceof HTMLCanvasElement&&(e+=t.width*t.height*3)}return e}clone(){const e={url:this.url,data:this.data,wrap:this._cloneWrap()};return new V(e)}cloneWithDeduplication(e){const t=e.get(this);if(t)return t;const r=this.clone();return e.set(this,r),r}_cloneWrap(){return typeof this.wrap=="string"?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}static from(e){return typeof e=="string"?new V({url:e}):e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageData||e instanceof HTMLVideoElement?new V({data:e}):Re(V,e)}};function Ge(e){let t="";for(let r=0;r<e.data.length;r++)t+=String.fromCharCode(e.data[r]);return{data:btoa(t),width:e.width,height:e.height}}function Ve(e){const t=atob(e.data),r=new Uint8ClampedArray(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return zt(r,e.width,e.height)}function Ze(e){for(let t=3;t<e.data.length;t+=4)if(e.data[t]!==255)return!0;return!1}u([f({type:String,json:{write:Wt}})],O.prototype,"url",null),u([f({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),f()],O.prototype,"data",null),u([Nt("data")],O.prototype,"writeData",null),u([Pt("data")],O.prototype,"readData",null),u([f({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],O.prototype,"transparent",null),u([f({json:{write:!0}})],O.prototype,"wrap",void 0),u([f({readOnly:!0})],O.prototype,"contentHash",null),O=V=u([z("esri.geometry.support.MeshTexture")],O);const te=O;let Z=class extends Ht(ve){constructor(t){super(t),this.offset=[0,0],this.rotation=0,this.scale=[1,1]}};u([f({type:[Number],nonNullable:!0,json:{write:!0}})],Z.prototype,"offset",void 0),u([f({type:Number,nonNullable:!0,json:{write:!0}})],Z.prototype,"rotation",void 0),u([f({type:[Number],nonNullable:!0,json:{write:!0}})],Z.prototype,"scale",void 0),Z=u([z("esri.geometry.support.MeshTextureTransform")],Z);const re=Z;var Oe;let D=Oe=class extends ve{constructor(e){super(e),this.color=null,this.colorTexture=null,this.colorTextureTransform=null,this.normalTexture=void 0,this.normalTextureTransform=void 0,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const r=e!=null?e.get(this):null;if(r)return r;const n=new Oe(this.clonePropertiesWithDeduplication(t));return e?.set(this,n),n}clonePropertiesWithDeduplication(e){return{color:this.color!=null?this.color.clone():null,colorTexture:this.colorTexture?.cloneWithDeduplication(e),normalTexture:this.normalTexture?.cloneWithDeduplication(e),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:this.colorTextureTransform?.clone(),normalTextureTransform:this.normalTextureTransform?.clone()}}get memoryUsage(){return this.getMemoryUsage()}getMemoryUsage(){let e=0;return e+=this.color!=null?16:0,this.colorTexture!=null&&(e+=this.colorTexture.memoryUsage),e+=this.colorTextureTransform!=null?20:0,this.normalTexture!=null&&(e+=this.normalTexture.memoryUsage),e+=this.normalTextureTransform!=null?20:0,e}};u([f({type:ot,json:{write:!0}})],D.prototype,"color",void 0),u([f({type:te,json:{write:!0}})],D.prototype,"colorTexture",void 0),u([f({type:re,json:{write:!0}})],D.prototype,"colorTextureTransform",void 0),u([f({type:te,json:{write:!0}})],D.prototype,"normalTexture",void 0),u([f({type:re,json:{write:!0}})],D.prototype,"normalTextureTransform",void 0),u([f({nonNullable:!0,json:{write:!0}})],D.prototype,"alphaMode",void 0),u([f({nonNullable:!0,json:{write:!0}})],D.prototype,"alphaCutoff",void 0),u([f({nonNullable:!0,json:{write:!0}})],D.prototype,"doubleSided",void 0),D=Oe=u([z("esri.geometry.support.MeshMaterial")],D);const Ue=D;var Fe;let R=Fe=class extends Ue{constructor(e){super(e),this.emissiveColor=null,this.emissiveTexture=null,this.emissiveTextureTransform=void 0,this.occlusionTexture=null,this.occlusionTextureTransform=void 0,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null,this.metallicRoughnessTextureTransform=void 0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const r=e!=null?e.get(this):null;if(r)return r;const n=new Fe(this.clonePropertiesWithDeduplication(t));return e?.set(this,n),n}getMemoryUsage(){let e=super.getMemoryUsage();return e+=this.emissiveColor!=null?16:0,this.emissiveTexture!=null&&(e+=this.emissiveTexture.memoryUsage),e+=this.emissiveTextureTransform!=null?20:0,this.occlusionTexture!=null&&(e+=this.occlusionTexture.memoryUsage),e+=this.occlusionTextureTransform!=null?20:0,this.metallicRoughnessTexture!=null&&(e+=this.metallicRoughnessTexture.memoryUsage),e+=this.metallicRoughnessTextureTransform!=null?20:0,e}clonePropertiesWithDeduplication(e){return{...super.clonePropertiesWithDeduplication(e),emissiveColor:this.emissiveColor?.clone(),emissiveTexture:this.emissiveTexture?.cloneWithDeduplication(e),emissiveTextureTransform:this.emissiveTextureTransform?.clone(),occlusionTexture:this.occlusionTexture?.cloneWithDeduplication(e),occlusionTextureTransform:this.occlusionTextureTransform?.clone(),metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:this.metallicRoughnessTexture?.cloneWithDeduplication(e),metallicRoughnessTextureTransform:this.metallicRoughnessTextureTransform?.clone()}}};u([f({type:ot,json:{write:!0}})],R.prototype,"emissiveColor",void 0),u([f({type:te,json:{write:!0}})],R.prototype,"emissiveTexture",void 0),u([f({type:re,json:{write:!0}})],R.prototype,"emissiveTextureTransform",void 0),u([f({type:te,json:{write:!0}})],R.prototype,"occlusionTexture",void 0),u([f({type:re,json:{write:!0}})],R.prototype,"occlusionTextureTransform",void 0),u([f({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],R.prototype,"metallic",void 0),u([f({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],R.prototype,"roughness",void 0),u([f({type:te,json:{write:!0}})],R.prototype,"metallicRoughnessTexture",void 0),u([f({type:re,json:{write:!0}})],R.prototype,"metallicRoughnessTextureTransform",void 0),R=Fe=u([z("esri.geometry.support.MeshMaterialMetallicRoughness")],R);const Nr=R;var Q;let F=Q=class extends ve{static from(e){return Re(Q,e)}constructor(e){super(e),this.faces=null,this.material=null,this.name=void 0,this.shading="source",this.trustSourceNormals=!1}castFaces(e){return Sr(e,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},ie.getLogger(this))}castMaterial(e){return Re(e&&typeof e=="object"&&("metallic"in e||"roughness"in e||"metallicRoughnessTexture"in e)?Nr:Ue,e)}clone(){return new Q({faces:Te(this.faces),shading:this.shading,material:Te(this.material),trustSourceNormals:this.trustSourceNormals,name:this.name})}cloneWithDeduplication(e,t){const r={faces:Te(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(e,t):null,trustSourceNormals:this.trustSourceNormals,name:this.name};return new Q(r)}get memoryUsage(){let e=0;return this.faces!=null&&(e+=this.faces.byteLength),this.material!=null&&(e+=this.material.memoryUsage),e}};u([f({json:{write:Ar}})],F.prototype,"faces",void 0),u([Pe("faces")],F.prototype,"castFaces",null),u([f({type:Ue,json:{write:!0}})],F.prototype,"material",void 0),u([Pe("material")],F.prototype,"castMaterial",null),u([f({json:{write:!0}})],F.prototype,"name",void 0),u([f({type:String,json:{write:!0}})],F.prototype,"shading",void 0),u([f({type:Boolean})],F.prototype,"trustSourceNormals",void 0),F=Q=u([z("esri.geometry.support.MeshComponent")],F);const J=F,Pr="Mesh must be loaded before applying operations",zr="Provided component is not part of the list of components",Hr="Expected polygon to be a Polygon instance",ee="Expected location to be a Point instance";class qe extends ne{constructor(){super("invalid-input:location",ee)}}function Br(e,t,r){const n=kr(Xe,e,t,r)?Dr(Xe):[0,0,1];return Math.abs(n[2])>Math.cos(Bt(80))?_.Z:Math.abs(n[1])>Math.abs(n[0])?_.Y:_.X}function kr(e,t,r,n){const o=(a=>!Array.isArray(a[0]))(t)?(a,i)=>t[3*a+i]:(a,i)=>t[a][i],s=n?kt(n)/Gt(n):1;return Lr(e,(a,i)=>pe(a,o(i,0)*s,o(i,1)*s,o(i,2)),r)}const Xe=_r();function Gr(e){const t=Zr(e.rings,e.hasZ,ge.CCW_IS_HOLE,e.spatialReference),r=new Array;let n=0,o=0;for(const i of t.polygons){const c=i.count,l=i.index,h=Vt(t.position,3*l,3*c),d=i.holeIndices.map(p=>p-l),m=gt(Mr(h,d,3));r.push({position:h,faces:m}),n+=h.length,o+=m.length}const s=Vr(r,n,o),a=Array.isArray(s.position)?He(s.position,3,{originalIndices:s.faces}):He(s.position.buffer,6,{originalIndices:s.faces});return s.position=Zt(new Float64Array(a.buffer)),s.faces=a.indices,s}function Vr(e,t,r){if(e.length===1)return e[0];const n=Ee(t),o=new Array(r);let s=0,a=0,i=0;for(const c of e){for(let l=0;l<c.position.length;l++)n[s++]=c.position[l];for(const l of c.faces)o[a++]=l+i;i=s/3}return{position:n,faces:gt(o)}}function Zr(e,t,r,n){const o=e.length,s=new Array(o),a=new Array(o),i=new Array(o);let c=0;for(let g=0;g<o;++g)c+=e[g].length;let l=0,h=0,d=0;const m=Ee(3*c);let p=0;for(let g=o-1;g>=0;g--){const y=e[g],b=r===ge.CCW_IS_HOLE&&qr(y,t,n);if(b&&o!==1)s[l++]=y;else{let L=y.length;for(let x=0;x<l;++x)L+=s[x].length;const w={index:p,pathLengths:new Array(l+1),count:L,holeIndices:new Array(l)};w.pathLengths[0]=y.length,y.length>0&&(i[d++]={index:p,count:y.length}),p=b?ce(y,y.length-1,-1,m,p,y.length,t):ce(y,0,1,m,p,y.length,t);for(let x=0;x<l;++x){const A=s[x];w.holeIndices[x]=p,w.pathLengths[x+1]=A.length,A.length>0&&(i[d++]={index:p,count:A.length}),p=ce(A,0,1,m,p,A.length,t)}l=0,w.count>0&&(a[h++]=w)}}for(let g=0;g<l;++g){const y=s[g];y.length>0&&(i[d++]={index:p,count:y.length}),p=ce(y,0,1,m,p,y.length,t)}return a.length=h,i.length=d,{position:m,polygons:a,outlines:i}}function ce(e,t,r,n,o,s,a){o*=3;for(let i=0;i<s;++i){const c=e[t];n[o++]=c[0],n[o++]=c[1],n[o++]=a&&c[2]?c[2]:0,t+=r}return o/3}function qr(e,t,r){if(!t)return!le(e);const n=e.length-1;switch(Br(e,n,r)){case _.X:return!le(e,_.Y,_.Z);case _.Y:return!le(e,_.X,_.Z);case _.Z:return!le(e,_.X,_.Y)}}var ge;(function(e){e[e.NONE=0]="NONE",e[e.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(ge||(ge={}));function We(e,t,r,n){if(n!==void 0){qt(e(),"option: geographic",{replacement:"Use mesh `vertexSpace` and spatial reference to control how operations are performed instead.",version:"4.30",warnOnce:!0});const o=t.type==="local";if(!ae(t)||n===o)return r.isGeographic||r.isWebMercator&&n;e().warnOnce(`Specifying the 'geographic' parameter (${n}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}switch(t.type){case"georeferenced":return r.isGeographic;case"local":return r.isGeographic||r.isWebMercator}}const se=()=>ie.getLogger("esri.geometry.support.meshUtils.centerAt");function Xr(e,t,r){if(!e.vertexAttributes?.position)return;const{vertexSpace:n}=e,o=r?.origin??e.origin,s=We(se,n,o.spatialReference,r?.geographic);ae(n)?Yr(e,t,o):s?Jr(e,t,o):Kr(e,t,o)}function Yr(e,t,r){const{vertexSpace:n}=e;if(!ae(n))return;const o=Mt,s=Rt;if(!I(t,s,e.spatialReference))return void $(se(),t.spatialReference,e.spatialReference,W);if(!I(r,o,e.spatialReference)){const i=e.origin;return o[0]=i.x,o[1]=i.y,o[2]=i.z,void $(se(),r.spatialReference,e.spatialReference,W)}const a=Xt(en,s,o);n.origin=Yt(S(),n.origin,a)}function Jr(e,t,r){const n=Me(r.x,r.y,r.z??0),o=Ce(e,new Le({origin:n}));if(!o)return;const s=Me(t.x,t.y,t.z??0),a=Ce({vertexAttributes:o,spatialReference:e.spatialReference,vertexSpace:new Le({origin:s})},me.absolute);if(!a)return;const{position:i,normal:c,tangent:l}=a;e.vertexAttributes.position=i,e.vertexAttributes.normal=c,e.vertexAttributes.tangent=l,e.vertexAttributesChanged()}function Kr(e,t,r){const n=Mt,o=Rt;if(I(t,o,e.spatialReference)){if(!I(r,n,e.spatialReference)){const s=e.origin;return n[0]=s.x,n[1]=s.y,n[2]=s.z,void $(se(),r.spatialReference,e.spatialReference,W)}Qr(e.vertexAttributes.position,o,n),e.vertexAttributesChanged()}else $(se(),t.spatialReference,e.spatialReference,W)}function Qr(e,t,r){if(e)for(let n=0;n<e.length;n+=3)for(let o=0;o<3;o++)e[n+o]+=t[o]-r[o]}const Rt=S(),Mt=S(),en=S();function tn(e){const{spatialReference:t,vertexSpace:r,untransformedBounds:n}=e,o=Jt(n,rn);if(ae(r)&&e.transform&&Be(o,o,e.transform.localMatrix),r.type==="georeferenced"){const i=r.origin;return i&&Or(o,o,i),ze(_e(o),t)}const s=Ie(t),a=r.origin;if(!Kt(s,t)){const[i,c,l]=a;return new Qt({xmin:i,ymin:c,zmin:l,xmax:i,ymax:c,zmax:l,spatialReference:t})}return At(t,a,Ye,s),Be(o,o,Ye),er(o,s,0,o,t,0),ze(_e(o),t)}const Ye=be(),rn=Ee(24);async function nn(e,t,r){const{source:n}=t,{loadGLTFMesh:o}=await st(Se(()=>import("./loadGLTFMesh-B9Q_f1ka.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]),import.meta.url),r),s=await sn(n,r);we(r);const a=o(new j({x:0,y:0,z:0,spatialReference:e.spatialReference}),s.url,{resolveFile:on(s),signal:r?.signal,expectedType:s.type,unitConversionDisabled:t.unitConversionDisabled});a.then(()=>s.dispose(),()=>s.dispose());const{vertexAttributes:i,components:c}=await a;e.vertexAttributes=i,e.components=c}function on(e){const t=tr(e.url);return r=>{const n=rr(r,t,t),o=n?n.replace(/^ *\.\//,""):null;return(o?e.files.get(o):null)??r}}async function sn(e,t){if(Array.isArray(e)){if(!e.length)throw new ne("mesh-load-external:missing-assets","There must be at least one file to load");return e[0]instanceof File?ln(e):cn(e,t)}return _t(e)}async function an(e,t){const{parts:r,assetMimeType:n,assetName:o}=e;if(r.length===1)return new ye(r[0].partUrl);const s=await e.toBlob(t);return we(t),ye.fromBlob(s,Ft(o,n))}function _t(e){return ye.fromBlob(e,Ft(e.name,e.type))}function ln(e){return Ct(e.map(t=>({name:t.name,mimeType:t.type,source:_t(t)})))}async function cn(e,t){const r=await nr(e.map(async n=>{const o=await an(n);return we(t),{name:n.assetName,mimeType:n.assetMimeType,source:o}}));if(or(t))throw r.forEach(n=>n.source.dispose()),sr();return Ct(r)}const Dt=/^model\/gltf\+json$/,Lt=/^model\/gltf-binary$/,je=/\.gltf$/i,un=/\.glb$/i;function Je({mimeType:e,source:t,name:r}){return Dt.test(e)||je.test(r)?{url:t.url,type:"gltf"}:Lt.test(e)||un.test(r)?{url:t.url,type:"glb"}:null}function Ct(e){const t=new Map;let r=null,n=null;for(const s of e){const{source:a,name:i}=s;r??=Je(s),i==="ESRI3DO_NORM.glb"&&(n=Je(s)),t.set(i,a.url),a.files.forEach((c,l)=>t.set(l,c))}const o=n??r;if(o==null)throw new ne("mesh-load-external:missing-files","Missing files to load external mesh source");return new ye(o.url,()=>e.forEach(({source:s})=>s.dispose()),t,o.type)}let ye=class Ot{constructor(t,r=()=>{},n=new Map,o){this.url=t,this.dispose=r,this.files=n,this.type=o}static fromBlob(t,r){const n=URL.createObjectURL(t);return new Ot(n,()=>URL.revokeObjectURL(n),void 0,r)}};function Ft(e,t){return Dt.test(t)||je.test(e)?"gltf":Lt.test(t)||je.test(e)?"glb":void 0}let E=class extends ir{constructor(e){super(e),this.externalSources=new ar,this._explicitDisplaySource=null,this.georeferenced=!1,this.addHandles(lr(()=>this.externalSources,"after-remove",({item:t})=>{t===this._explicitDisplaySource&&(this._explicitDisplaySource=null)},{sync:!0,onListenerRemove:()=>this._explicitDisplaySource=null}))}get displaySource(){return this._explicitDisplaySource??this._implicitDisplaySource}set displaySource(e){if(e!=null&&!ke(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every(t=>!Fr(t,e))&&this.externalSources.add(e)}clearSources(){this.externalSources.removeAll()}getExternalSourcesOnService(e){return this.externalSources.items.filter(t=>jr(t,e))}get _implicitDisplaySource(){return this.externalSources.find(ke)}};u([f()],E.prototype,"externalSources",void 0),u([f()],E.prototype,"displaySource",null),u([f()],E.prototype,"_implicitDisplaySource",null),u([f()],E.prototype,"_explicitDisplaySource",void 0),u([f()],E.prototype,"georeferenced",void 0),E=u([z("esri.geometry.support.meshUtils.Metadata")],E);function pn(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:r}=wn,n=4*e.length,o=new Float64Array(3*n),s=new Float32Array(3*n),a=new Float32Array(2*n),i=new Uint32Array(2*e.length*3);let c=0,l=0,h=0,d=0;for(let m=0;m<e.length;m++){const p=e[m],g=c/3;for(const b of t)i[d++]=g+b;const y=p.corners;for(let b=0;b<4;b++){const L=y[b];let w=0;a[h++]=.25*r[b][0]+p.uvOrigin[0],a[h++]=p.uvOrigin[1]-.25*r[b][1];for(let x=0;x<3;x++)p.axis[x]!==0?(o[c++]=.5*p.axis[x],s[l++]=p.axis[x]):(o[c++]=.5*L[w++],s[l++]=0)}}return{position:o,normal:s,uv:a,faces:i}}function hn(e,t){const r=e.components[0],n=r.faces,o=$n[t],s=6*o,a=new Array(6),i=new Array(n.length-6);let c=0,l=0;for(let h=0;h<n.length;h++)h>=s&&h<s+6?a[c++]=n[h]:i[l++]=n[h];if(e.vertexAttributes.uv!=null){const h=new Float32Array(e.vertexAttributes.uv),d=4*o*2,m=[0,1,1,1,1,0,0,0];for(let p=0;p<m.length;p++)h[d+p]=m[p];e.vertexAttributes.uv=h}return e.components=[new J({faces:a,material:r.material}),new J({faces:i})],e}function fn(e=0){const t=Math.round(8*2**e),r=2*t,n=(t-1)*(r+1)+2*r,o=new Float64Array(3*n),s=new Float32Array(3*n),a=new Float32Array(2*n),i=new Uint32Array(3*((t-1)*r*2));let c=0,l=0,h=0,d=0;for(let m=0;m<=t;m++){const p=m/t*Math.PI+.5*Math.PI,g=Math.cos(p),y=Math.sin(p);v[2]=y;const b=m===0||m===t,L=b?r-1:r;for(let w=0;w<=L;w++){const x=w/L*2*Math.PI;v[0]=-Math.sin(x)*g,v[1]=Math.cos(x)*g;for(let A=0;A<3;A++)o[c]=.5*v[A],s[c]=v[A],++c;a[l++]=(w+(b?.5:0))/r,a[l++]=m/t,m!==0&&w!==r&&(m!==t&&(i[h++]=d,i[h++]=d+1,i[h++]=d-r),m!==1&&(i[h++]=d,i[h++]=d-r,i[h++]=d-r-1)),d++}}return{position:o,normal:s,uv:a,faces:i}}function mn(e=0){const r=Math.round(16*2**e),n=4*(r+1)+2*r,o=new Float64Array(3*n),s=new Float32Array(3*n),a=new Float32Array(2*n),i=new Uint32Array(3*(4*r));let c=0,l=0,h=0,d=0,m=0;for(let p=0;p<=5;p++){const g=p===0||p===5,y=p<=1||p>=4,b=p===2||p===4,L=g?r-1:r;for(let w=0;w<=L;w++){const x=w/L*2*Math.PI,A=g?0:.5;v[0]=A*Math.sin(x),v[1]=A*-Math.cos(x),v[2]=p<=2?.5:-.5;for(let H=0;H<3;H++)o[c++]=v[H],s[l++]=y?H===2?p<=1?1:-1:0:H===2?0:v[H]/A;a[h++]=(w+(g?.5:0))/r,a[h++]=p<=1?1*p/3:p<=3?1*(p-2)/3+1/3:1*(p-4)/3+2/3,b||p===0||w===r||(p!==5&&(i[d++]=m,i[d++]=m+1,i[d++]=m-r),p!==1&&(i[d++]=m,i[d++]=m-r,i[d++]=m-r-1)),m++}}return{position:o,normal:s,uv:a,faces:i}}function dn(e,t){const r=typeof t=="number"?t:t!=null?t.width:1,n=typeof t=="number"?t:t!=null?t.height:1;switch(e){case"up":case"down":return{width:r,depth:n};case"north":case"south":return{width:r,height:n};case"east":case"west":return{depth:r,height:n}}}function gn(e){const t=K.facingAxisOrderSwap[e],r=K.position,n=K.normal,o=new Float64Array(r.length),s=new Float32Array(n.length);let a=0;for(let i=0;i<4;i++){const c=a;for(let l=0;l<3;l++){const h=t[l],d=Math.abs(h)-1,m=h>=0?1:-1;o[a]=r[c+d]*m,s[a]=n[c+d]*m,a++}}return{position:o,normal:s,uv:new Float32Array(K.uv),faces:new Uint32Array(K.faces),isPlane:!0}}const B=1,k=2,G=3,K={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[G,B,k],west:[-G,-B,k],north:[-B,G,k],south:[B,-G,k],up:[B,k,G],down:[B,-k,-G]}};function ue(e,t,r){e.isPlane||yn(e),vn(e,xn(r?.size,r?.unit,t.spatialReference));const n=de(t,r),o=t.spatialReference.isGeographic?de(t):n,s=Ce({vertexAttributes:e,vertexSpace:o,spatialReference:t.spatialReference},n,{allowBufferReuse:!0});return{vertexAttributes:new fe({...s,uv:e.uv}),vertexSpace:n,components:[new J({faces:e.faces,material:r?.material||null})],spatialReference:t.spatialReference}}function yn(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}function xn(e,t,r){const n=Cr(t,r);if(e==null&&n===1)return null;if(e==null)return[n,n,n];if(typeof e=="number"){const o=e*n;return[o,o,o]}return[e.width!=null?e.width*n:n,e.depth!=null?e.depth*n:n,e.height!=null?e.height*n:n]}function vn(e,t){if(t!=null){U[0]=t[0],U[4]=t[1],U[8]=t[2];for(let r=0;r<e.position.length;r+=3){for(let n=0;n<3;n++)v[n]=e.position[r+n];De(v,v,U);for(let n=0;n<3;n++)e.position[r+n]=v[n]}if(t[0]!==t[1]||t[1]!==t[2]){U[0]=1/t[0],U[4]=1/t[1],U[8]=1/t[2];for(let r=0;r<e.normal.length;r+=3){for(let n=0;n<3;n++)v[n]=e.normal[r+n];De(v,v,U),cr(v,v);for(let n=0;n<3;n++)e.normal[r+n]=v[n]}}}}const wn={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},$n={south:0,east:1,north:2,west:3,up:4,down:5},v=S(),U=St(),N=()=>ie.getLogger("esri.geometry.support.meshUtils.rotate");function bn(e,t,r){if(!e.vertexAttributes?.position||t[3]===0)return;const{spatialReference:n,vertexSpace:o}=e,s=r?.origin??e.origin,a=r?.geographic,i=We(N,o,n,a);dt(e)?Tn(e,t,s):i?An(e,t,s):Sn(e,t,s)}function Tn(e,t,r){e.transform??=new oe;const{vertexSpace:n,transform:o,spatialReference:s}=e,[a,i,c]=n.origin,l=new j({x:a,y:i,z:c,spatialReference:s}),h=q;if(l.equals(r))pe(h,0,0,0);else if(!yt(h,r,e))return void $(N(),r.spatialReference,s,W);Er(tt,he(t),ft(t));const d=it(Ke,tt,$e,ur,h),{localMatrix:m}=o,p=at(Ke,d,m);o.scale=lt(S(),p),ct(p,p,ut(q,o.scale));const g=o.rotationAxis;o.rotation=mt(p),o.rotationAngle===0&&(o.rotationAxis=g),o.translation=pt(S(),p)}function An(e,t,r){const n=e.spatialReference,o=Ie(n),s=jt;if(!I(r,s,o)&&($(N(),r.spatialReference,o,"Falling back to mesh origin"),!I(e.origin,s,o)))return void $(N(),e.origin.spatialReference,o);const a=e.vertexAttributes.position,i=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,l=new Float64Array(a.length),h=i!=null?new Float32Array(i.length):null,d=c!=null?new Float32Array(c.length):null;At(o,s,xe,o),pr(et,xe);const m=Qe;De(he(Qe),he(t),et),m[3]=t[3],xt(a,n,l,o)&&(i==null||h==null||vt(i,a,n,l,o,h))&&(c==null||d==null||wt(c,a,n,l,o,d))?(Y(l,m,3,s),$t(l,o,a,n)&&(i==null||h==null||(Y(h,m,3),bt(h,a,n,l,o,i)))&&(c==null||d==null||(Y(d,m,4),Tt(d,a,n,l,o,c)))?e.vertexAttributesChanged():$(N(),o,n)):$(N(),n,o)}function Sn(e,t,r){const n=jt;if(!I(r,n,e.spatialReference)){const o=e.origin;return n[0]=o.x,n[1]=o.y,n[2]=o.z,void $(N(),r.spatialReference,e.spatialReference,W)}Y(e.vertexAttributes.position,t,3,n),Y(e.vertexAttributes.normal,t,3),Y(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}function Y(e,t,r,n=$e){if(e!=null){hr(xe,ft(t),he(t));for(let o=0;o<e.length;o+=r){for(let s=0;s<3;s++)q[s]=e[o+s]-n[s];fr(q,q,xe);for(let s=0;s<3;s++)e[o+s]=q[s]+n[s]}}}const q=S(),Ke=be(),Qe=ht(),xe=be(),et=St(),jt=S(),tt=Ir(),P=()=>ie.getLogger("esri.geometry.support.meshUtils.scale");function Rn(e,t,r){if(!e.vertexAttributes?.position)return;const{vertexSpace:n,spatialReference:o}=e,s=r?.origin??e.origin,a=r?.geographic,i=We(P,n,o,a);dt(e)?Mn(e,t,s):i?_n(e,t,s):Dn(e,t,s)}function Mn(e,t,r){e.transform??=new oe;const{vertexSpace:n,transform:o,spatialReference:s}=e,[a,i,c]=n.origin,l=new j({x:a,y:i,z:c,spatialReference:s}),h=X;if(l.equals(r))pe(h,0,0,0);else if(!yt(h,r,e))return void $(P(),r.spatialReference,s,W);const d=pe(Ln,t,t,t),m=it(rt,Ur,$e,d,h),{localMatrix:p}=o,g=at(rt,m,p);o.scale=lt(S(),g),ct(g,g,ut(X,o.scale));const y=o.rotationAxis;o.rotation=mt(g),o.rotationAngle===0&&(o.rotationAxis=y),o.translation=pt(S(),g)}function _n(e,t,r){const n=e.spatialReference,o=Ie(n),s=It;if(!I(r,s,o)&&($(P(),r.spatialReference,o,"Falling back to mesh origin"),!I(e.origin,s,o)))return void $(P(),e.origin.spatialReference,o);const a=e.vertexAttributes.position,i=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,l=new Float64Array(a.length),h=i!=null?new Float32Array(i.length):null,d=c!=null?new Float32Array(c.length):null;xt(a,n,l,o)&&(i==null||h==null||vt(i,a,n,l,o,h))&&(c==null||d==null||wt(c,a,n,l,o,d))?(Et(l,t,s),$t(l,o,a,n)&&(i==null||h==null||bt(h,a,n,l,o,i))&&(c==null||d==null||Tt(d,a,n,l,o,c))?e.vertexAttributesChanged():$(P(),o,n)):$(P(),n,o)}function Dn(e,t,r){const n=It;if(!I(r,n,e.spatialReference)){const o=e.origin;return n[0]=o.x,n[1]=o.y,n[2]=o.z,void $(P(),r.spatialReference,e.spatialReference,W)}Et(e.vertexAttributes.position,t,n),e.vertexAttributesChanged()}function Et(e,t,r=$e){if(e)for(let n=0;n<e.length;n+=3){for(let o=0;o<3;o++)X[o]=e[n+o]-r[o];mr(X,X,t);for(let o=0;o<3;o++)e[n+o]=X[o]+r[o]}}const X=S(),Ln=S(),rt=be(),It=S();var M;const Ut="esri.geometry.Mesh";function C(){return ie.getLogger(Ut)}const Cn={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:me,local:Le}};let T=M=class extends dr.LoadableMixin(gr(br)){constructor(e){super(e),this.components=null,this.vertexSpace=new me,this.transform=null,this.metadata=new E,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new fe,this.type="mesh"}initialize(){(this.metadata.externalSources.length===0||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.addHandles(yr(()=>({vertexAttributes:this.vertexAttributes,components:this.components?.map(e=>e.clone())}),()=>this._clearSources(),{once:!0,sync:!0}))})}get hasExtent(){return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):this.metadata.displaySource?.extent!=null}get _transformedExtent(){const{spatialReference:e,vertexSpace:t}=this,r=this;return tn({get transform(){return r.transform},vertexSpace:t,spatialReference:e,untransformedBounds:this._untransformedBounds})}get _untransformedBounds(){const{vertexAttributes:{position:e},components:t}=this;return e.length===0||t?.length===0?xr(vr):_e(e)}get origin(){const e=Rr(this.vertexSpace,this.spatialReference);if(e!=null)return e;const{center:t,zmin:r}=this._transformedExtent;return new j({x:t.x,y:t.y,z:r,spatialReference:this.spatialReference})}get extent(){return this.loaded||this.metadata?.displaySource?.extent==null?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){this._checkIfLoaded("addComponent()")&&(this.components||(this.components=[]),this.components.push(J.from(e)),this.notifyChange("components"))}removeComponent(e){if(this._checkIfLoaded("removeComponent()")){if(this.components){const t=this.components.indexOf(e);if(t!==-1)return this.components.splice(t,1),void this.notifyChange("components")}C().error("removeComponent()",zr)}}rotate(e,t,r,n){return Tr(e,t,r,nt),bn(this,nt,n),this}offset(e,t,r){if(!this._checkIfLoaded("offset()"))return this;const{vertexSpace:n,vertexAttributes:o}=this,s=o?.position;if(!s)return this;if(ae(n)){const[a,i,c]=n.origin;n.origin=Me(a+e,i+t,c+r)}else{for(let a=0;a<s.length;a+=3)s[a]+=e,s[a+1]+=t,s[a+2]+=r;this.vertexAttributesChanged()}return this}scale(e,t){return this._checkIfLoaded("scale()")?(Rn(this,e,t),this):this}centerAt(e,t){return this._checkIfLoaded("centerAt()")?(Xr(this,e,t),this):this}load(e){const{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise(nn(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneAndModifyVertexAttributes(this.vertexAttributes.clone(),this.vertexSpace.clone(),{preserveMetadata:!0})}cloneAndModifyVertexAttributes(e,t,r){let n=null;if(this.components){const s=new Map,a=new Map;n=this.components.map(i=>i.cloneWithDeduplication(s,a))}const o={components:n,spatialReference:this.spatialReference,vertexAttributes:e,vertexSpace:t,transform:this.transform?.clone()??null,metadata:r?.preserveMetadata?this.metadata.clone():new E};return new M(o)}cloneShallow(){return new M({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const[{toBinaryGLTF:t}]=await Promise.all([Se(()=>import("./gltfexport-xxJxolYv.js"),__vite__mapDeps([29,1,2,3,14,4,15,20,13,21,22,23,6,7,9,8,10,16,17,24,5,25,19,26,27,28]),import.meta.url),this.load(e)]);return we(e),await t(this,e)}get memoryUsage(){let e=0;if(e+=this.vertexAttributes.memoryUsage,this.components!=null)for(const t of this.components)e+=t.memoryUsage;return e}_clearSources(){this.metadata.clearSources()}_checkIfLoaded(e){return!!this.loaded||(C().error(e,Pr),!1)}static createBox(e,t){if(!(e instanceof j))return C().error(".createBox()",ee),null;const r=new M(ue(pn(),e,t));return t?.imageFace&&t.imageFace!=="all"?hn(r,t.imageFace):r}static createSphere(e,t){return e instanceof j?new M(ue(fn(t?.densificationFactor||0),e,t)):(C().error(".createSphere()",ee),null)}static createCylinder(e,t){return e instanceof j?new M(ue(mn(t?.densificationFactor||0),e,t)):(C().error(".createCylinder()",ee),null)}static createPlane(e,t){if(!(e instanceof j))return C().error(".createPlane()",ee),null;const r=t?.facing??"up",n=dn(r,t?.size);return new M(ue(gn(r),e,{...t,size:n}))}static createFromPolygon(e,t){if(!(e instanceof wr))return C().error(".createFromPolygon()",Hr),null;const r=Gr(e);return new M({vertexAttributes:new fe({position:r.position}),components:[new J({faces:r.faces,shading:"flat",material:t?.material??null})],spatialReference:e.spatialReference,vertexSpace:new me})}static async createFromGLTF(e,t,r){if(!(e instanceof j)){const o=new qe;throw C().error(".createfromGLTF()",o.message),o}const{loadGLTFMesh:n}=await st(Se(()=>import("./loadGLTFMesh-B9Q_f1ka.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]),import.meta.url),r);return new M(await n(e,t,r))}static async createFromFiles(e,t,r){$r(C(),"`Mesh.createFromFiles` is deprecated in favor of 'SceneLayer.convertMesh'",{replacement:"SceneLayer.convertMesh",version:"4.29"});const n=o=>C().error(".createFromFiles()",o.message);if(!(e instanceof j)){const o=new qe;throw n(o),o}if(!r?.layer)throw new ne("invalid:no-layer","SceneLayer required for file to mesh conversion.");return r.layer.convertMesh(t,{location:e,...r})}static createWithExternalSource(e,t,r){const n=r?.extent??null,{spatialReference:o}=e,s=r?.transform?.clone()??new oe,a=de(e,r),i=r?.unitConversionDisabled,c={source:t,extent:n,unitConversionDisabled:i},l=new E;return l.externalSources.push(c),new M({metadata:l,transform:s,vertexSpace:a,spatialReference:o})}static createIncomplete(e,t){const{spatialReference:r}=e,n=t?.transform?.clone()??new oe,o=de(e,t),s=new M({transform:n,vertexSpace:o,spatialReference:r});return s.addResolvingPromise(Promise.reject(new ne("mesh-incomplete","Mesh resources are not complete"))),s}};u([f({type:[J],json:{write:!0}})],T.prototype,"components",void 0),u([f({nonNullable:!0,types:Cn,constructOnly:!0,json:{write:!0}})],T.prototype,"vertexSpace",void 0),u([f({type:oe,json:{write:!0}})],T.prototype,"transform",void 0),u([f({constructOnly:!0})],T.prototype,"metadata",void 0),u([f()],T.prototype,"hasExtent",null),u([f()],T.prototype,"_transformedExtent",null),u([f()],T.prototype,"_untransformedBounds",null),u([f()],T.prototype,"origin",null),u([f({readOnly:!0,json:{read:!1}})],T.prototype,"extent",null),u([f({readOnly:!0,json:{read:!1,write:!0,default:!0}})],T.prototype,"hasZ",void 0),u([f({readOnly:!0,json:{read:!1,write:!0,default:!1}})],T.prototype,"hasM",void 0),u([f({type:fe,nonNullable:!0,json:{write:!0}})],T.prototype,"vertexAttributes",void 0),T=M=u([z(Ut)],T);const nt=ht(),Qn=T;export{Qn as $,re as c,J as f,Nr as m,te as w};
