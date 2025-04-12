import{q as T,dO as j,bq as f,D as r,G as o,fI as H,H as S,J as E,K as g,aX as I,aK as b,n as R,o as x,bG as C}from"./main-0iYVBzEC.js";import{c as O}from"./imageUtils-AB54Hq_m.js";import{n as _,r as P}from"./meshProperties-DKeTwzXu.js";var h;const v=new WeakMap;let $=0,l=h=class extends T{constructor(t){super(t),this.wrap="repeat"}get url(){return this._get("url")||null}set url(t){this._set("url",t),t&&this._set("data",null)}get data(){return this._get("data")||null}set data(t){this._set("data",t),t&&this._set("url",null)}writeData(t,e,s,i){if(t instanceof HTMLImageElement){const c={type:"image-element",src:j(t.src,i),crossOrigin:t.crossOrigin};e[s]=c}else if(t instanceof HTMLCanvasElement){const c={type:"canvas-element",imageData:W(t.getContext("2d").getImageData(0,0,t.width,t.height))};e[s]=c}else if(t instanceof HTMLVideoElement){const c={type:"video-element",src:j(t.src,i),autoplay:t.autoplay,loop:t.loop,muted:t.muted,crossOrigin:t.crossOrigin,preload:t.preload};e[s]=c}else if(t instanceof ImageData){const c={type:"image-data",imageData:W(t)};e[s]=c}}readData(t){switch(t.type){case"image-element":{const e=new Image;return e.src=t.src,e.crossOrigin=t.crossOrigin,e}case"canvas-element":{const e=N(t.imageData),s=document.createElement("canvas");return s.width=e.width,s.height=e.height,s.getContext("2d").putImageData(e,0,0),s}case"image-data":return N(t.imageData);case"video-element":{const e=document.createElement("video");return e.src=t.src,e.crossOrigin=t.crossOrigin,e.autoplay=t.autoplay,e.loop=t.loop,e.muted=t.muted,e.preload=t.preload,e}default:return}}get transparent(){const{data:t,url:e}=this;return t instanceof HTMLCanvasElement?L(t.getContext("2d").getImageData(0,0,t.width,t.height)):t instanceof ImageData?L(t):!(!e?.toLowerCase().endsWith(".png")&&!e?.toLocaleLowerCase().startsWith("data:image/png;"))}set transparent(t){this._overrideIfSome("transparent",t)}get contentHash(){const t=typeof this.wrap=="string"?this.wrap:typeof this.wrap=="object"?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",e=(s="")=>`d:${s},t:${this.transparent},w:${t}`;return this.url!=null?e(this.url):this.data!=null?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?e(this.data.src):(v.has(this.data)||v.set(this.data,++$),e(v.get(this.data))):e()}get memoryUsage(){let t=0;if(t+=this.url!=null?this.url.length:0,this.data!=null){const e=this.data;"data"in e?t+=e.data.byteLength:e instanceof HTMLImageElement?t+=e.naturalWidth*e.naturalHeight*3:e instanceof HTMLCanvasElement&&(t+=e.width*e.height*3)}return t}clone(){const t={url:this.url,data:this.data,wrap:this._cloneWrap()};return new h(t)}cloneWithDeduplication(t){const e=t.get(this);if(e)return e;const s=this.clone();return t.set(this,s),s}_cloneWrap(){return typeof this.wrap=="string"?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}static from(t){return typeof t=="string"?new h({url:t}):t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof ImageData||t instanceof HTMLVideoElement?new h({data:t}):f(h,t)}};function W(t){let e="";for(let s=0;s<t.data.length;s++)e+=String.fromCharCode(t.data[s]);return{data:btoa(e),width:t.width,height:t.height}}function N(t){const e=atob(t.data),s=new Uint8ClampedArray(e.length);for(let i=0;i<e.length;i++)s[i]=e.charCodeAt(i);return O(s,t.width,t.height)}function L(t){for(let e=3;e<t.data.length;e+=4)if(t.data[e]!==255)return!0;return!1}r([o({type:String,json:{write:H}})],l.prototype,"url",null),r([o({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),o()],l.prototype,"data",null),r([S("data")],l.prototype,"writeData",null),r([E("data")],l.prototype,"readData",null),r([o({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],l.prototype,"transparent",null),r([o({json:{write:!0}})],l.prototype,"wrap",void 0),r([o({readOnly:!0})],l.prototype,"contentHash",null),l=h=r([g("esri.geometry.support.MeshTexture")],l);const p=l;let m=class extends I.ClonableMixin(T){constructor(t){super(t),this.offset=[0,0],this.rotation=0,this.scale=[1,1]}};r([o({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"offset",void 0),r([o({type:Number,nonNullable:!0,json:{write:!0}})],m.prototype,"rotation",void 0),r([o({type:[Number],nonNullable:!0,json:{write:!0}})],m.prototype,"scale",void 0),m=r([g("esri.geometry.support.MeshTextureTransform")],m);const d=m;var w;let n=w=class extends T{constructor(t){super(t),this.color=null,this.colorTexture=null,this.colorTextureTransform=null,this.normalTexture=void 0,this.normalTextureTransform=void 0,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(t,e){const s=t!=null?t.get(this):null;if(s)return s;const i=new w(this.clonePropertiesWithDeduplication(e));return t?.set(this,i),i}clonePropertiesWithDeduplication(t){return{color:this.color!=null?this.color.clone():null,colorTexture:this.colorTexture?.cloneWithDeduplication(t),normalTexture:this.normalTexture?.cloneWithDeduplication(t),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:this.colorTextureTransform?.clone(),normalTextureTransform:this.normalTextureTransform?.clone()}}get memoryUsage(){return this.getMemoryUsage()}getMemoryUsage(){let t=0;return t+=this.color!=null?16:0,this.colorTexture!=null&&(t+=this.colorTexture.memoryUsage),t+=this.colorTextureTransform!=null?20:0,this.normalTexture!=null&&(t+=this.normalTexture.memoryUsage),t+=this.normalTextureTransform!=null?20:0,t}};r([o({type:b,json:{write:!0}})],n.prototype,"color",void 0),r([o({type:p,json:{write:!0}})],n.prototype,"colorTexture",void 0),r([o({type:d,json:{write:!0}})],n.prototype,"colorTextureTransform",void 0),r([o({type:p,json:{write:!0}})],n.prototype,"normalTexture",void 0),r([o({type:d,json:{write:!0}})],n.prototype,"normalTextureTransform",void 0),r([o({nonNullable:!0,json:{write:!0}})],n.prototype,"alphaMode",void 0),r([o({nonNullable:!0,json:{write:!0}})],n.prototype,"alphaCutoff",void 0),r([o({nonNullable:!0,json:{write:!0}})],n.prototype,"doubleSided",void 0),n=w=r([g("esri.geometry.support.MeshMaterial")],n);const M=n;var D;let a=D=class extends M{constructor(t){super(t),this.emissiveColor=null,this.emissiveTexture=null,this.emissiveTextureTransform=void 0,this.occlusionTexture=null,this.occlusionTextureTransform=void 0,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null,this.metallicRoughnessTextureTransform=void 0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(t,e){const s=t!=null?t.get(this):null;if(s)return s;const i=new D(this.clonePropertiesWithDeduplication(e));return t?.set(this,i),i}getMemoryUsage(){let t=super.getMemoryUsage();return t+=this.emissiveColor!=null?16:0,this.emissiveTexture!=null&&(t+=this.emissiveTexture.memoryUsage),t+=this.emissiveTextureTransform!=null?20:0,this.occlusionTexture!=null&&(t+=this.occlusionTexture.memoryUsage),t+=this.occlusionTextureTransform!=null?20:0,this.metallicRoughnessTexture!=null&&(t+=this.metallicRoughnessTexture.memoryUsage),t+=this.metallicRoughnessTextureTransform!=null?20:0,t}clonePropertiesWithDeduplication(t){return{...super.clonePropertiesWithDeduplication(t),emissiveColor:this.emissiveColor?.clone(),emissiveTexture:this.emissiveTexture?.cloneWithDeduplication(t),emissiveTextureTransform:this.emissiveTextureTransform?.clone(),occlusionTexture:this.occlusionTexture?.cloneWithDeduplication(t),occlusionTextureTransform:this.occlusionTextureTransform?.clone(),metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:this.metallicRoughnessTexture?.cloneWithDeduplication(t),metallicRoughnessTextureTransform:this.metallicRoughnessTextureTransform?.clone()}}};r([o({type:b,json:{write:!0}})],a.prototype,"emissiveColor",void 0),r([o({type:p,json:{write:!0}})],a.prototype,"emissiveTexture",void 0),r([o({type:d,json:{write:!0}})],a.prototype,"emissiveTextureTransform",void 0),r([o({type:p,json:{write:!0}})],a.prototype,"occlusionTexture",void 0),r([o({type:d,json:{write:!0}})],a.prototype,"occlusionTextureTransform",void 0),r([o({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],a.prototype,"metallic",void 0),r([o({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],a.prototype,"roughness",void 0),r([o({type:p,json:{write:!0}})],a.prototype,"metallicRoughnessTexture",void 0),r([o({type:d,json:{write:!0}})],a.prototype,"metallicRoughnessTextureTransform",void 0),a=D=r([g("esri.geometry.support.MeshMaterialMetallicRoughness")],a);const U=a;var y;let u=y=class extends T{static from(t){return f(y,t)}constructor(t){super(t),this.faces=null,this.material=null,this.name=void 0,this.shading="source",this.trustSourceNormals=!1}castFaces(t){return _(t,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},R.getLogger(this))}castMaterial(t){return f(t&&typeof t=="object"&&("metallic"in t||"roughness"in t||"metallicRoughnessTexture"in t)?U:M,t)}clone(){return new y({faces:x(this.faces),shading:this.shading,material:x(this.material),trustSourceNormals:this.trustSourceNormals,name:this.name})}cloneWithDeduplication(t,e){const s={faces:x(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(t,e):null,trustSourceNormals:this.trustSourceNormals,name:this.name};return new y(s)}get memoryUsage(){let t=0;return this.faces!=null&&(t+=this.faces.byteLength),this.material!=null&&(t+=this.material.memoryUsage),t}};r([o({json:{write:P}})],u.prototype,"faces",void 0),r([C("faces")],u.prototype,"castFaces",null),r([o({type:M,json:{write:!0}})],u.prototype,"material",void 0),r([C("material")],u.prototype,"castMaterial",null),r([o({json:{write:!0}})],u.prototype,"name",void 0),r([o({type:String,json:{write:!0}})],u.prototype,"shading",void 0),r([o({type:Boolean})],u.prototype,"trustSourceNormals",void 0),u=y=r([g("esri.geometry.support.MeshComponent")],u);const A=u;export{A as f,d as i,U as m,p as w};
