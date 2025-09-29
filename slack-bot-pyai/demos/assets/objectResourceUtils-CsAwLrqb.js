const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./basis_transcoder-DLkL1i5Z.js","./main-48Jy8Lgr.js","./preload-helper-dJJaZANz.js","./main-BjH693uE.css"])))=>i.map(i=>d[i]);
import { a as a$k } from './devEnvironmentUtils-CAuYLvCt.js';
import { co as U$1, cp as y$3, ku as i$b, hF as e$j, fv as o$r, cx as u$a, cw as g$5, qx as U$2, cl as n$8, eD as O$7, qy as i$c, qz as f$b, fi as i$d, h$ as n$9, H as s$f, s as s$g, cU as o$u, el as Z$1, lu as tt, fU as t$o, mu as u$c, J as s$h, qA as i$e, jK as m$b, lP as u$e, h4 as r$d, lR as l$f, hE as n$a, ib as t$q, eQ as S$3, nV as f$c, bo as i$f, qB as A$5, qC as G$2, ci as _$5, ck as z$3, aj as e$o, qD as g$6, cm as r$e, hB as s$i, hR as q$3, hQ as l$g, qE as H$3, qF as G$3, bw as l$h, hy as G$4, hH as l$i, cu as e$q, mq as i$i, aW as e$r, iQ as j$3, c7 as s$j, hx as n$d, hW as r$g, aX as y$5, aY as c$g, dY as S$4, qG as l$j, hX as x$4, h7 as n$e, fy as o$y, b2 as d$e, gs as A$6, ay as n$f, iX as e$s, ct as r$h, ch as P$3, fw as S$7, V as has, qH as e$u, ik as _$8, U as U$3, B as a$j, ms as r$i, qI as P$4, jm as h$d, iZ as h$e, nW as i$j, hz as A$8 } from './main-48Jy8Lgr.js';
import { t as t$n, e as e$m, o as o$x } from './mat3f64-DiVtVT5k.js';
import { o as o$t, r as r$c, e as e$p } from './mat4f64-D1udxz0O.js';
import { x as x$3, c as c$f, y as y$4, u as u$f, q as q$4, i as i$h, L as L$4, O as O$a, E as E$8 } from './BufferView-CQevY14v.js';
import { r as r$j, n as n$i, u as u$h } from './vec3-Bg3oIamZ.js';
import { l as l$l, n as n$h, i as o$B, o as o$C, j as f$d, k as n$j, u as u$g, t as t$u, m as t$v } from './DefaultMaterial_COLOR_GAMMA-auHep7GT.js';
import { r as r$k } from './resourceUtils-Ch7rmr34.js';
import { t as t$t } from './NestedMap-DnQjTF8c.js';
import { t as t$l, l as l$e } from './Indices-Bkmtp4j_.js';
import { t as t$p } from './requestImageUtils-dsnltOKs.js';
import { O as O$8, L as L$3, t as t$s } from './orientedBoundingBox-BdVMpowi.js';
import { t as t$m, u as u$d, a as a$g, i as i$g, N as N$6, s as s$k, e as e$t, n as n$g } from './basicInterfaces-WNnrzIVI.js';
import { d as d$d, e as e$l, o as o$s } from './triangle-DucQomTT.js';
import { s as s$e } from './Util-CcpJDLeq.js';
import { e as e$k } from './VertexAttribute-NSFkUlX8.js';
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { c as c$e, G as G$1, L as L$2, D as D$2, E as E$7, O as O$9, I as I$5, t as t$r, _ as _$7 } from './enums-CgzwTbC2.js';
import { m as m$a, a as u$b, e as e$n, c as a$h } from './Texture-CJSk3waQ.js';
import { H as H$4 } from './InterleavedLayout-B1VjdkiX.js';
import { o as o$v, n as n$b, S as S$5, _ as _$6, a as o$z, c as c$h, A as A$7, h as h$c, l as l$k, b as o$A, d as a$i, e as S$6 } from './OrderIndependentTransparency-NzZWznOo.js';
import { w as w$1, Z as Z$2 } from './sphere-Bajf_K2p.js';
import { a as a$f } from './BindType-KnpK3yZX.js';
import { n as n$c } from './symbolColorUtils-BpCVVc9u.js';
import { o as o$w, r as r$f } from './doublePrecisionUtils-D7kjth1C.js';
import './RenderState-Bf2oUuZv.js';
import './quat-3PTO0K8F.js';
import './quatf64-BVXz_O4E.js';
import './computeTranslationToOriginAndRotation--R1YdmD1.js';
import './plane-0glEmQci.js';
import './ObjectStack-Bz0I7slx.js';
import './lineSegment-BKHAcz2d.js';
import './types-iH5tHpma.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function t$k(n,t=!1){return n<=U$1?t?new Array(n).fill(0):new Array(n):new Float32Array(n)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function o$q(o){if(o.length<U$1)return Array.from(o);if(y$3(o))return Float64Array.from(o);if(!("BYTES_PER_ELEMENT"in o))return Array.from(o);switch(o.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(o);case 2:return i$b(o)?Uint16Array.from(o):Int16Array.from(o);case 4:return Float32Array.from(o);default:return Float64Array.from(o)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let r$b = class r{constructor(){this.id=e$j();}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function i$a(r,o){if(!r)return !1;const{size:i,data:c,indices:f}=r;o$r(o,0,0,0),o$r(m$9,0,0,0);let g=0,d=0;for(let p=0;p<f.length-2;p+=3){const r=f[p]*i,h=f[p+1]*i,j=f[p+2]*i;o$r(a$e,c[r],c[r+1],c[r+2]),o$r(l$d,c[h],c[h+1],c[h+2]),o$r(u$9,c[j],c[j+1],c[j+2]);const z=d$d(a$e,l$d,u$9);z?(u$a(a$e,a$e,l$d),u$a(a$e,a$e,u$9),g$5(a$e,a$e,1/3*z),u$a(o,o,a$e),g+=z):(u$a(m$9,m$9,a$e),u$a(m$9,m$9,l$d),u$a(m$9,m$9,u$9),d+=3);}return (0!==d||0!==g)&&(0!==g?(g$5(o,o,1/g),!0):0!==d&&(g$5(o,m$9,1/d),!0))}function c$d(e,r){if(!e)return !1;const{size:o,data:s,indices:i}=e;o$r(r,0,0,0);let c=-1,f=0;for(let t=0;t<i.length;t++){const e=i[t]*o;c!==e&&(r[0]+=s[e],r[1]+=s[e+1],r[2]+=s[e+2],f++),c=e;}return f>1&&g$5(r,r,1/f),f>0}function f$a(o,s,i){if(!o)return !1;o$r(i,0,0,0),o$r(m$9,0,0,0);let c=0,f=0;const{size:u,data:g,indices:d}=o,p=d.length-1,h=p+(s?2:0);for(let t=0;t<h;t+=2){const o=t<p?t+1:0,s=d[t<p?t:p]*u,h=d[o]*u;a$e[0]=g[s],a$e[1]=g[s+1],a$e[2]=g[s+2],l$d[0]=g[h],l$d[1]=g[h+1],l$d[2]=g[h+2],g$5(a$e,u$a(a$e,a$e,l$d),.5);const j=U$2(a$e,l$d);j>0?(u$a(i,i,g$5(a$e,a$e,j)),c+=j):0===c&&(u$a(m$9,m$9,a$e),f++);}return 0!==c?(g$5(i,i,1/c),!0):0!==f&&(g$5(i,m$9,1/f),!0)}const a$e=n$8(),l$d=n$8(),u$9=n$8(),m$9=n$8();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let r$a = class r{constructor(r){this.channel=r,this.id=e$j();}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function n$7(t,e){return null==t&&(t=[]),t.push(e),t}function r$9(t,e){if(null==t)return null;const n=t.filter((t=>t!==e));return 0===n.length?null:n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let I$4 = class I extends r$b{constructor(t,i,e=null,s=e$l.Mesh,r=null,o=-1){super(),this.material=t,this.mapPositions=e,this.type=s,this.objectAndLayerIdColor=r,this.edgeIndicesLength=o,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[h,a]of i)this._attributes.set(h,{...a,indices:t$l(a.indices)}),h===e$k.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(h).indices.length:this.edgeIndicesLength);}instantiate(t={}){const i=new I(t.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach(((t,e)=>{t.exclusive=!1,i._attributes.set(e,t);})),i._boundingInfo=this._boundingInfo,i.transformation=t.transformation||this.transformation,i}get attributes(){return this._attributes}getMutableAttribute(t){let i=this._attributes.get(t);return i&&!i.exclusive&&(i={...i,exclusive:!0,data:o$q(i.data)},this._attributes.set(t,i)),i}setAttributeData(t,i){const e=this._attributes.get(t);e&&this._attributes.set(t,{...e,exclusive:!0,data:i});}get indexCount(){const t=this._attributes.values().next().value.indices;return t?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return !!(this.type===e$l.Mesh?this._computeAttachmentOriginTriangles(t):this.type===e$l.Line?this._computeAttachmentOriginLines(t):this._computeAttachmentOriginPoints(t))&&(null!=this._transformation&&O$7(t,t,this._transformation),!0)}_computeAttachmentOriginTriangles(t){const i=this.attributes.get(e$k.POSITION);return i$a(i,t)}_computeAttachmentOriginLines(t){const i=this.attributes.get(e$k.POSITION);return f$a(i,_$4(this.material.parameters,i),t)}_computeAttachmentOriginPoints(t){const i=this.attributes.get(e$k.POSITION);return c$d(i,t)}invalidateBoundingInfo(){this._boundingInfo=null;}_calculateBoundingInfo(){const t=this.attributes.get(e$k.POSITION);if(!t||0===t.indices.length)return null;const i=this.type===e$l.Mesh?3:1;s$e(t.indices.length%i==0,"Indexing error: "+t.indices.length+" not divisible by "+i);const e=l$e(t.indices.length/i);return new o$s(e,i,t)}get transformation(){return this._transformation??o$t}set transformation(e){this._transformation=e&&e!==o$t?r$c(e):null;}addHighlight(){const t=new r$a(t$m.Highlight);return this.highlights=n$7(this.highlights,t),t}removeHighlight(t){this.highlights=r$9(this.highlights,t);}};function _$4(t,i){return !(!("isClosed"in t)||!t.isClosed)&&i.indices.length>2}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function s$d(s){if(null==s)return null;const a=null!=s.offset?s.offset:i$c,n=null!=s.rotation?s.rotation:0,e=null!=s.scale?s.scale:f$b,f=t$n(1,0,0,0,1,0,a[0],a[1],1),c=t$n(Math.cos(n),-Math.sin(n),0,Math.sin(n),Math.cos(n),0,0,0,1),m=t$n(e[0],0,0,0,e[1],0,0,0,1),u=e$m();return i$d(u,c,m),i$d(u,f,u),u}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let s$c = class s{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array;}};let t$j = class t{constructor(t,e,r){this.name=t,this.lodThreshold=e,this.pivotOffset=r,this.stageResources=new s$c,this.numberOfVertices=0;}};

function t$i(){if(null==s$b){const t=t=>n$9(`esri/libs/basisu/${t}`);s$b=__vitePreload(() => import('./basis_transcoder-DLkL1i5Z.js'),true?__vite__mapDeps([0,1,2,3]):void 0,import.meta.url).then((e=>e.b)).then((({default:e})=>e({locateFile:t}).then((e=>(e.initializeBasis(),delete e.then,e)))));}return s$b}let s$b;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var _$3;!function(_){_[_.ETC1_RGB=0]="ETC1_RGB",_[_.ETC2_RGBA=1]="ETC2_RGBA",_[_.BC1_RGB=2]="BC1_RGB",_[_.BC3_RGBA=3]="BC3_RGBA",_[_.BC4_R=4]="BC4_R",_[_.BC5_RG=5]="BC5_RG",_[_.BC7_M6_RGB=6]="BC7_M6_RGB",_[_.BC7_M5_RGBA=7]="BC7_M5_RGBA",_[_.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",_[_.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",_[_.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",_[_.ATC_RGB=11]="ATC_RGB",_[_.ATC_RGBA=12]="ATC_RGBA",_[_.FXT1_RGB=17]="FXT1_RGB",_[_.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",_[_.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",_[_.ETC2_EAC_R11=20]="ETC2_EAC_R11",_[_.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",_[_.RGBA32=13]="RGBA32",_[_.RGB565=14]="RGB565",_[_.BGR565=15]="BGR565",_[_.RGBA4444=16]="RGBA4444";}(_$3||(_$3={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let l$c=null,o$p=null;async function g$4(){return null==o$p&&(o$p=t$i(),l$c=await o$p),o$p}function u$8(e,t){if(null==l$c)return e.byteLength;const n=new l$c.BasisFile(new Uint8Array(e)),s=E$6(n)?m$8(n.getNumLevels(0),n.getHasAlpha(),n.getImageWidth(0,0),n.getImageHeight(0,0),t):0;return n.close(),n.delete(),s}function c$c(e,t){if(null==l$c)return e.byteLength;const n=new l$c.KTX2File(new Uint8Array(e)),s=T$6(n)?m$8(n.getLevels(),n.getHasAlpha(),n.getWidth(),n.getHeight(),t):0;return n.close(),n.delete(),s}function m$8(e,t,s,r,i){const l=u$b(t?c$e.COMPRESSED_RGBA8_ETC2_EAC:c$e.COMPRESSED_RGB8_ETC2),o=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(s*r*l*o)}function E$6(e){return e.getNumImages()>=1&&!e.isUASTC()}function T$6(e){return e.getFaces()>=1&&e.isETC1S()}async function h$b(e,t,n){null==l$c&&(l$c=await g$4());const s=new l$c.BasisFile(new Uint8Array(n));if(!E$6(s))return null;s.startTranscoding();const r=p$6(e,t,s.getNumLevels(0),s.getHasAlpha(),s.getImageWidth(0,0),s.getImageHeight(0,0),((e,t)=>s.getImageTranscodedSizeInBytes(0,e,t)),((e,t,n)=>s.transcodeImage(n,0,e,t,0,0)));return s.close(),s.delete(),r}async function _$2(e,t,n){null==l$c&&(l$c=await g$4());const s=new l$c.KTX2File(new Uint8Array(n));if(!T$6(s))return null;s.startTranscoding();const r=p$6(e,t,s.getLevels(),s.getHasAlpha(),s.getWidth(),s.getHeight(),((e,t)=>s.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,n)=>s.transcodeImage(n,e,0,0,t,0,-1,-1)));return s.close(),s.delete(),r}function p$6(e,a,l,o,g,u,c,m){const{compressedTextureETC:E,compressedTextureS3TC:T}=e.capabilities,[h,_]=E?o?[_$3.ETC2_RGBA,c$e.COMPRESSED_RGBA8_ETC2_EAC]:[_$3.ETC1_RGB,c$e.COMPRESSED_RGB8_ETC2]:T?o?[_$3.BC3_RGBA,c$e.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[_$3.BC1_RGB,c$e.COMPRESSED_RGB_S3TC_DXT1_EXT]:[_$3.RGBA32,G$1.RGBA],p=a.hasMipmap?l:Math.min(1,l),A=[];for(let t=0;t<p;t++)A.push(new Uint8Array(c(t,h))),m(t,h,A[t]);return a.internalFormat=_,a.hasMipmap=A.length>1,a.samplingMode=a.hasMipmap?L$2.LINEAR_MIPMAP_LINEAR:L$2.LINEAR,a.width=g,a.height=u,new m$a(e,a,{type:"compressed",levels:A})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const o$o=()=>s$f.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),a$d=542327876,i$9=131072,l$b=4;function s$a(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function u$7(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const c$b=s$a("DXT1"),h$a=s$a("DXT3"),m$7=s$a("DXT5"),d$c=31,p$5=0,g$3=1,D$1=2,C$2=3,f$9=4,w=7,T$5=20,_$1=21;function E$5(e,r,o){const a=S$2(o,r.hasMipmap??!1);if(null==a)throw new Error("DDS texture data is null");const{textureData:i,internalFormat:l,width:s,height:u}=a;return r.samplingMode=i.levels.length>1?L$2.LINEAR_MIPMAP_LINEAR:L$2.LINEAR,r.hasMipmap=i.levels.length>1,r.internalFormat=l,r.width=s,r.height=u,new m$a(e,r,i)}function S$2(e,t){const n=new Int32Array(e,0,d$c);if(n[p$5]!==a$d)return o$o().error("Invalid magic number in DDS header"),null;if(!(n[T$5]&l$b))return o$o().error("Unsupported format, must contain a FourCC code"),null;const s=n[_$1];let E,S;switch(s){case c$b:E=8,S=c$e.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case h$a:E=16,S=c$e.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case m$7:E=16,S=c$e.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return o$o().error("Unsupported FourCC code:",u$7(s)),null}let A=1,M=n[f$9],x=n[C$2];0==(3&M)&&0==(3&x)||(o$o().warn("Rounding up compressed texture size to nearest multiple of 4."),M=M+3&-4,x=x+3&-4);const R=M,X=x;let b,I;n[D$1]&i$9&&!1!==t&&(A=Math.max(1,n[w]));let v=n[g$3]+4;const F=[];for(let r=0;r<A;++r)I=(M+3>>2)*(x+3>>2)*E,b=new Uint8Array(e,v,I),F.push(b),v+=I,M=Math.max(1,M>>1),x=Math.max(1,x>>1);return {textureData:{type:"compressed",levels:F},internalFormat:S,width:R,height:X}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function r$8(t,e){const n=1048576,i=4096,r=2;let h=t.width*t.height;if(h<i)return t instanceof ImageData?a$c(t):t;let c=t.width,u=t.height;do{c=Math.ceil(c/r),u=Math.ceil(u/r),h=c*u;}while(h>n||null!=e&&(c>e||u>e));return o$n(t,c,u)}function h$9(t,e){const n=Math.max(t.width,t.height);if(n<=e)return t;const i=e/n;return o$n(t,Math.round(t.width*i),Math.round(t.height*i))}function o$n(t,e,n){if(t instanceof ImageData)return o$n(a$c(t),e,n);const i=document.createElement("canvas");i.width=e,i.height=n;return i.getContext("2d").drawImage(t,0,0,i.width,i.height),i}function a$c(e){const n=document.createElement("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");if(null==i)throw new s$g("Failed to create 2d context from HTMLCanvasElement");return i.putImageData(e,0,0),n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let N$5 = class N extends r$b{get parameters(){return this._parameters}constructor(e,r){super(),this._data=e,this.type=e$l.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new o$u,this._parameters={...M$2,...r},this._startPreload(e);}dispose(){this.unload(),this._data=this.frameUpdate=void 0;}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e));}_startPreloadVideoElement(e){if(!(Z$1(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play();};e.addEventListener("canplay",t);}}}_startPreloadImageElement(e){tt(e.src)||Z$1(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src);}_createDescriptor(e){const t=new e$n;return t.wrapMode=this._parameters.wrap??D$2.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?L$2.LINEAR_MIPMAP_LINEAR:L$2.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.usedMemory||C$1(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new m$a(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):(t$o(t)||u$c(t))&&this._parameters.encoding===u$d.DDS_ENCODING?this._loadFromDDSData(e,t):(t$o(t)||u$c(t))&&this._parameters.encoding===u$d.KTX2_ENCODING?this._loadFromKTX2(e,t):(t$o(t)||u$c(t))&&this._parameters.encoding===u$d.BASIS_ENCODING?this._loadFromBasis(e,t):u$c(t)?this._loadFromPixelData(e,t):t$o(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return null==this._glTexture||e.readyState<V$2.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=E$5(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>_$2(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>h$b(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){s$e(this._parameters.width>0&&this._parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this._parameters.components?G$1.LUMINANCE:3===this._parameters.components?G$1.RGB:G$1.RGBA,r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new m$a(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const s=await t$p(t,{signal:r});return s$h(r),this._loadFromImage(e,s)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const s=await i$e(t,t.src,!1,r);return s$h(r),this._loadFromImage(e,s)}))}_loadFromVideoElement(e,t){return t.readyState>=V$2.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(t,r){return this._loadAsync((a=>new Promise(((n,l)=>{const m=()=>{r.removeEventListener("loadeddata",h),r.removeEventListener("error",_),l$f(p);},h=()=>{r.readyState>=V$2.HAVE_CURRENT_DATA&&(m(),n(this._loadFromImage(t,r)));},_=t=>{m(),l(t||new s$g("Failed to load video"));};r.addEventListener("loadeddata",h),r.addEventListener("error",_);const p=m$b(a,(()=>_(u$e())));}))))}_loadFromImage(e,t){let r=t;if(!(r instanceof HTMLVideoElement)){const{maxTextureSize:t}=e.parameters;r=this._parameters.downsampleUncompressed?r$8(r,t):h$9(r,t);}const s=R$3(r);this._parameters.width=s.width,this._parameters.height=s.height;const a=this._createDescriptor(e);return a.pixelFormat=3===this._parameters.components?G$1.RGB:G$1.RGBA,a.width=s.width,a.height=s.height,this._glTexture=new m$a(e,a,r),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const s=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null);};return r.then(s,s),r}unload(){if(this._glTexture=r$d(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort();}this.events.emit("unloaded");}};function C$1(e,t){if(null==e)return 0;if(t$o(e)||u$c(e))return t.encoding===u$d.KTX2_ENCODING?c$c(e,!!t.mipmap):t.encoding===u$d.BASIS_ENCODING?u$8(e,!!t.mipmap):e.byteLength;const{width:r,height:s}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?R$3(e):t;return (t.mipmap?4/3:1)*r*s*(t.components||4)||0}function R$3(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}var V$2;!function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA";}(V$2||(V$2={}));const M$2={wrap:{s:D$2.REPEAT,t:D$2.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var o$m;function t$h(r){return r===o$m.Shadow||r===o$m.ShadowHighlight||r===o$m.ShadowExcludeHighlight}function n$6(r){return c$a(r)||r===o$m.Normal}function e$i(r){return r===o$m.Highlight||r===o$m.ObjectAndLayerIdColor}function i$8(r){return r===o$m.Color||r===o$m.Alpha}function d$b(o){return i$8(o)||e$i(o)}function c$a(r){return d$b(r)||r===o$m.LinearDepth}!function(o){o[o.Color=0]="Color",o[o.LinearDepth=1]="LinearDepth",o[o.Depth=2]="Depth",o[o.Normal=3]="Normal",o[o.Shadow=4]="Shadow",o[o.ShadowHighlight=5]="ShadowHighlight",o[o.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",o[o.Highlight=7]="Highlight",o[o.Alpha=8]="Alpha",o[o.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",o[o.CompositeColor=10]="CompositeColor",o[o.COUNT=11]="COUNT";}(o$m||(o$m={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function t$g(t,i){switch(i.normalType){case a$b.Compressed:t.attributes.add(e$k.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(o$v`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case a$b.Attribute:t.attributes.add(e$k.NORMAL,"vec3"),t.vertex.code.add(o$v`vec3 normalModel() {
return normal;
}`);break;case a$b.ScreenDerivative:t.fragment.code.add(o$v`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:n$a(i.normalType);case a$b.COUNT:case a$b.Ground:}}var a$b;!function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT";}(a$b||(a$b={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e$h(e,o){const n=e.fragment;switch(n.code.add(o$v`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),o.doubleSidedMode){case i$7.None:n.code.add(o$v`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i$7.View:n.code.add(o$v`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i$7.WindingOrder:n.code.add(o$v`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:n$a(o.doubleSidedMode);case i$7.COUNT:}}var i$7;!function(a){a[a.None=0]="None",a[a.View=1]="View",a[a.WindingOrder=2]="WindingOrder",a[a.COUNT=3]="COUNT";}(i$7||(i$7={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var d$a;function o$l(o,v){switch(v.textureCoordinateType){case d$a.Default:return o.attributes.add(e$k.UV0,"vec2"),o.varyings.add("vuv0","vec2"),void o.vertex.code.add(o$v`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case d$a.Compressed:return o.attributes.add(e$k.UV0,"vec2"),o.varyings.add("vuv0","vec2"),void o.vertex.code.add(o$v`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case d$a.Atlas:return o.attributes.add(e$k.UV0,"vec2"),o.varyings.add("vuv0","vec2"),o.attributes.add(e$k.UVREGION,"vec4"),o.varyings.add("vuvRegion","vec4"),void o.vertex.code.add(o$v`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:n$a(v.textureCoordinateType);case d$a.None:return void o.vertex.code.add(o$v`void forwardTextureCoordinates() {}`);case d$a.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT";}(d$a||(d$a={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e$g(e){e.fragment.code.add(o$v`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function s$9(s,a){switch(s.include(o$l,a),a.textureCoordinateType){case d$a.Default:case d$a.Compressed:return void s.fragment.code.add(o$v`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case d$a.Atlas:return s.include(e$g),void s.fragment.code.add(o$v`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:n$a(a.textureCoordinateType);case d$a.None:case d$a.COUNT:return}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let a$a = class a{constructor(a,i,e,r,t=null){if(this.name=a,this.type=i,this.arraySize=t,this.bind={[a$f.Pass]:null,[a$f.Draw]:null},r)switch(e){case a$f.Pass:this.bind[a$f.Pass]=r;break;case a$f.Draw:this.bind[a$f.Draw]=r;}}equals(s){return this.type===s.type&&this.name===s.name&&this.arraySize===s.arraySize}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o$k = class o extends a$a{constructor(r,o){super(r,"vec3",a$f.Draw,((e,s,t,i)=>e.setUniform3fv(r,o(s,t,i))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let e$f = class e extends a$a{constructor(r,e){super(r,"vec3",a$f.Pass,((s,o,t)=>s.setUniform3fv(r,e(o,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let s$8 = class s extends a$a{constructor(r,s){super(r,"sampler2D",a$f.Draw,((e,o,t)=>e.bindTexture(r,s(o,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let s$7 = class s extends a$a{constructor(r,s){super(r,"sampler2D",a$f.Pass,((e,o,t)=>e.bindTexture(r,s(o,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t$f = class t{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output;}dispose(){this._techniqueRepository.release(this._technique);}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(e,t){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(t){return a$g.LOADED}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let u$6 = class u extends t$f{constructor(t){super(t),this._numLoading=0,this._disposed=!1,this._textureRepository=t.textureRepository,this._textureId=t.textureId,this._acquire(t.textureId,(t=>this._texture=t)),this._acquire(t.normalTextureId,(t=>this._textureNormal=t)),this._acquire(t.emissiveTextureId,(t=>this._textureEmissive=t)),this._acquire(t.occlusionTextureId,(t=>this._textureOcclusion=t)),this._acquire(t.metallicRoughnessTextureId,(t=>this._textureMetallicRoughness=t));}dispose(){this._texture=t$q(this._texture),this._textureNormal=t$q(this._textureNormal),this._textureEmissive=t$q(this._textureEmissive),this._textureOcclusion=t$q(this._textureOcclusion),this._textureMetallicRoughness=t$q(this._textureMetallicRoughness),this._disposed=!0;}ensureResources(t){return 0===this._numLoading?a$g.LOADED:a$g.LOADING}get textureBindParameters(){return new l$a(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=t$q(this._texture),this._textureId=e,this._acquire(this._textureId,(t=>this._texture=t)));}_acquire(s,i){if(null==s)return void i(null);const r=this._textureRepository.acquire(s);if(S$3(r))return ++this._numLoading,void r.then((e=>{if(this._disposed)return t$q(e),void i(null);i(e);})).finally((()=>--this._numLoading));i(r);}};let l$a = class l extends n$b{constructor(t=null,e=null,s=null,i=null,r=null,u,l){super(),this.texture=t,this.textureNormal=e,this.textureEmissive=s,this.textureOcclusion=i,this.textureMetallicRoughness=r,this.scale=u,this.normalTextureTransformMatrix=l;}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var c$9;!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT";}(c$9||(c$9={}));function l$9(n,u){const l=n.fragment,m=u.hasMetallicRoughnessTexture||u.hasEmissionTexture||u.hasOcclusionTexture;if(u.pbrMode===c$9.Normal&&m&&n.include(s$9,u),u.pbrMode!==c$9.Schematic)if(u.pbrMode!==c$9.Disabled){if(u.pbrMode===c$9.Normal){l.code.add(o$v`vec3 mrr;
vec3 emission;
float occlusion;`);const e=u.pbrTextureBindType;u.hasMetallicRoughnessTexture&&(l.uniforms.add(e===a$f.Pass?new s$7("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new s$8("texMetallicRoughness",(e=>e.textureMetallicRoughness))),l.code.add(o$v`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),u.hasEmissionTexture&&(l.uniforms.add(e===a$f.Pass?new s$7("texEmission",(e=>e.textureEmissive)):new s$8("texEmission",(e=>e.textureEmissive))),l.code.add(o$v`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),u.hasOcclusionTexture?(l.uniforms.add(e===a$f.Pass?new s$7("texOcclusion",(e=>e.textureOcclusion)):new s$8("texOcclusion",(e=>e.textureOcclusion))),l.code.add(o$v`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):l.code.add(o$v`float getBakedOcclusion() { return 1.0; }`),e===a$f.Pass?l.uniforms.add(new e$f("emissionFactor",(e=>e.emissiveFactor)),new e$f("mrrFactors",(e=>e.mrrFactors))):l.uniforms.add(new o$k("emissionFactor",(e=>e.emissiveFactor)),new o$k("mrrFactors",(e=>e.mrrFactors))),l.code.add(o$v`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${u.hasMetallicRoughnessTexture?o$v`applyMetallnessAndRoughness(${u.hasMetallicRoughnessTextureTransform?o$v`metallicRoughnessUV`:"vuv0"});`:""}

      ${u.hasEmissionTexture?o$v`applyEmission(${u.hasEmissiveTextureTransform?o$v`emissiveUV`:"vuv0"});`:""}

      ${u.hasOcclusionTexture?o$v`applyOcclusion(${u.hasOcclusionTextureTransform?o$v`occlusionUV`:"vuv0"});`:""}
    }
  `);}}else l.code.add(o$v`float getBakedOcclusion() { return 1.0; }`);else l.code.add(o$v`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const O$6=new Map([[e$k.POSITION,0],[e$k.NORMAL,1],[e$k.NORMALCOMPRESSED,1],[e$k.UV0,2],[e$k.COLOR,3],[e$k.COLORFEATUREATTRIBUTE,3],[e$k.SIZE,4],[e$k.TANGENT,4],[e$k.CENTEROFFSETANDDISTANCE,5],[e$k.SYMBOLCOLOR,5],[e$k.FEATUREATTRIBUTE,6],[e$k.INSTANCEFEATUREATTRIBUTE,6],[e$k.INSTANCECOLOR,7],[e$k.OBJECTANDLAYERIDCOLOR,7],[e$k.INSTANCEOBJECTANDLAYERIDCOLOR,7],[e$k.INSTANCEMODEL,8],[e$k.INSTANCEMODELNORMAL,12],[e$k.INSTANCEMODELORIGINHI,11],[e$k.INSTANCEMODELORIGINLO,15]]);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function c$8(e){return Math.abs(e*e*e)}function l$8(e,t,a){const r=a.parameters;return F$1.scale=Math.min(r.divisor/(t-r.offset),1),F$1.factor=c$8(e),F$1}function s$6(t,a){return f$c(t*Math.max(a.scale,a.minScaleFactor),t,a.factor)}function m$6(e,t,a,r){return s$6(e,l$8(t,a,r))}const F$1={scale:0,factor:0,minScaleFactor:0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const p$4=i$f();function h$8(t,n,e,i,o,r){if(t.visible)if(t.boundingInfo){s$e(t.type===e$l.Mesh);const s=n.tolerance;x$2(t.boundingInfo,e,i,s,o,r);}else {const n=t.attributes.get(e$k.POSITION),s=n.indices;g$2(e,i,0,s.length/3,s,n,void 0,o,r);}}const b$2=n$8();function x$2(t,n,e,i,o,r){if(null==t)return;const s=T$4(n,e,b$2);if(A$5(p$4,t.bbMin),G$2(p$4,t.bbMax),null!=o&&o.applyToAabb(p$4),I$3(p$4,n,s,i)){const{primitiveIndices:s,position:c}=t,l=s?s.length:c.indices.length/3;if(l>P$2){const s=t.getChildren();if(void 0!==s){for(const t of s)x$2(t,n,e,i,o,r);return}}g$2(n,e,0,l,c.indices,c,s,o,r);}}const d$9=n$8();function g$2(t,n,e,i,o,r,s,c,l){if(s)return M$1(t,n,e,i,o,r,s,c,l);const{data:f,stride:a}=r,u=t[0],m=t[1],p=t[2],h=n[0]-u,b=n[1]-m,x=n[2]-p;for(let g=e,M=3*e;g<i;++g){let t=a*o[M++],n=f[t++],e=f[t++],i=f[t];t=a*o[M++];let r=f[t++],s=f[t++],y=f[t];t=a*o[M++];let j=f[t++],T=f[t++],I=f[t];null!=c&&([n,e,i]=c.applyToVertex(n,e,i,g),[r,s,y]=c.applyToVertex(r,s,y,g),[j,T,I]=c.applyToVertex(j,T,I,g));const V=r-n,L=s-e,N=y-i,O=j-n,A=T-e,E=I-i,P=b*E-A*x,S=x*O-E*h,U=h*A-O*b,W=V*P+L*S+N*U;if(Math.abs(W)<=Number.EPSILON)continue;const B=u-n,C=m-e,k=p-i,z=B*P+C*S+k*U;if(W>0){if(z<0||z>W)continue}else if(z>0||z<W)continue;const H=C*N-L*k,R=k*V-N*B,Y=B*L-V*C,q=h*H+b*R+x*Y;if(W>0){if(q<0||z+q>W)continue}else if(q>0||z+q<W)continue;const w=(O*H+A*R+E*Y)/W;if(w>=0){l(w,v$5(V,L,N,O,A,E,d$9),g,!1);}}}function M$1(t,n,e,i,o,r,s,c,l){const{data:f,stride:a}=r,u=t[0],m=t[1],p=t[2],h=n[0]-u,b=n[1]-m,x=n[2]-p;for(let g=e;g<i;++g){const t=s[g];let n=3*t,e=a*o[n++],i=f[e++],r=f[e++],M=f[e];e=a*o[n++];let y=f[e++],j=f[e++],T=f[e];e=a*o[n];let I=f[e++],V=f[e++],L=f[e];null!=c&&([i,r,M]=c.applyToVertex(i,r,M,g),[y,j,T]=c.applyToVertex(y,j,T,g),[I,V,L]=c.applyToVertex(I,V,L,g));const N=y-i,O=j-r,A=T-M,E=I-i,P=V-r,S=L-M,U=b*S-P*x,W=x*E-S*h,B=h*P-E*b,C=N*U+O*W+A*B;if(Math.abs(C)<=Number.EPSILON)continue;const k=u-i,z=m-r,H=p-M,R=k*U+z*W+H*B;if(C>0){if(R<0||R>C)continue}else if(R>0||R<C)continue;const Y=z*A-O*H,q=H*N-A*k,w=k*O-N*z,D=h*Y+b*q+x*w;if(C>0){if(D<0||R+D>C)continue}else if(D>0||R+D<C)continue;const F=(E*Y+P*q+S*w)/C;if(F>=0){l(F,v$5(N,O,A,E,P,S,d$9),t,!1);}}}const y$2=n$8(),j$2=n$8();function v$5(t,n,r,s,c,l,f){return o$r(y$2,t,n,r),o$r(j$2,s,c,l),_$5(f,y$2,j$2),z$3(f,f),f}function T$4(t,n,i){return o$r(i,1/(n[0]-t[0]),1/(n[1]-t[1]),1/(n[2]-t[2]))}function I$3(t,n,e,i){return V$1(t,n,e,i,1/0)}function V$1(t,n,e,i,o){const r=(t[0]-i-n[0])*e[0],s=(t[3]+i-n[0])*e[0];let c=Math.min(r,s),l=Math.max(r,s);const f=(t[1]-i-n[1])*e[1],a=(t[4]+i-n[1])*e[1];if(l=Math.min(l,Math.max(f,a)),l<0)return !1;if(c=Math.max(c,Math.min(f,a)),c>l)return !1;const u=(t[2]-i-n[2])*e[2],m=(t[5]+i-n[2])*e[2];return l=Math.min(l,Math.max(u,m)),!(l<0)&&(c=Math.max(c,Math.min(u,m)),!(c>l)&&c<o)}function L$1(t,e,i,o,r){let s=(i.screenLength||0)*t.pixelRatio;null!=r&&(s=m$6(s,o,e,r));const c=s*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return e$o(c*e,i.minWorldLength||0,null!=i.maxWorldLength?i.maxWorldLength:1/0)}function N$4(t,n){const e=n?N$4(n):{};for(const i in t){let n=t[i];n?.forEach&&(n=A$4(n)),null==n&&i in e||(e[i]=n);}return e}function O$5(n,e){let i=!1;for(const o in e){const r=e[o];void 0!==r&&(Array.isArray(r)?null===n[o]?(n[o]=r.slice(),i=!0):g$6(n[o],r)&&(i=!0):n[o]!==r&&(i=!0,n[o]=r));}return i}function A$4(t){const n=[];return t.forEach((t=>n.push(t))),n}const E$4={multiply:1,ignore:2,replace:3,tint:4},P$2=1e3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let c$7 = class c extends r$b{constructor(t,r){super(),this.type=e$l.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=O$6,this._pp0=r$e(0,0,1),this._pp1=r$e(0,0,0),this._parameters=N$4(t,r),this.validateParameters(this._parameters);}get parameters(){return this._parameters}update(e){return !1}setParameters(e,t=!0){O$5(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged());}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged());}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bindParameters.decorations===i$g.ON)&&0!=(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return !0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged());}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository?.materialChanged(this);}queryRenderOccludedState(e){return this.isVisible()&&this.parameters.renderOccluded===e}intersectDraped(e,t,r,s,i,a){return this._pp0[0]=this._pp1[0]=s[0],this._pp0[1]=this._pp1[1]=s[1],this.intersect(e,t,r,this._pp0,this._pp1,i)}};var h$7;!function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque";}(h$7||(h$7={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var A$3;!function(A){A[A.INTEGRATED_MESH=0]="INTEGRATED_MESH",A[A.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",A[A.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",A[A.OPAQUE_NO_SSAO_DEPTH=3]="OPAQUE_NO_SSAO_DEPTH",A[A.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",A[A.TRANSPARENT_NO_SSAO_DEPTH=5]="TRANSPARENT_NO_SSAO_DEPTH",A[A.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",A[A.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",A[A.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",A[A.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",A[A.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",A[A.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",A[A.ANTIALIASING=12]="ANTIALIASING",A[A.COMPOSITE=13]="COMPOSITE",A[A.BLIT=14]="BLIT",A[A.SSAO=15]="SSAO",A[A.HIGHLIGHT=16]="HIGHLIGHT",A[A.SHADOW_HIGHLIGHT=17]="SHADOW_HIGHLIGHT",A[A.ENVIRONMENT_OPAQUE=18]="ENVIRONMENT_OPAQUE",A[A.ENVIRONMENT_TRANSPARENT=19]="ENVIRONMENT_TRANSPARENT",A[A.LASERLINES=20]="LASERLINES",A[A.LASERLINES_CONTRAST_CONTROL=21]="LASERLINES_CONTRAST_CONTROL",A[A.HUD_MATERIAL=22]="HUD_MATERIAL",A[A.LABEL_MATERIAL=23]="LABEL_MATERIAL",A[A.LINE_CALLOUTS=24]="LINE_CALLOUTS",A[A.LINE_CALLOUTS_HUD_DEPTH=25]="LINE_CALLOUTS_HUD_DEPTH",A[A.DRAPED_MATERIAL=26]="DRAPED_MATERIAL",A[A.DRAPED_WATER=27]="DRAPED_WATER",A[A.VOXEL=28]="VOXEL",A[A.MAX_SLOTS=29]="MAX_SLOTS";}(A$3||(A$3={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let x$1 = class x{constructor(t=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=n$8(),this._tmpMbs=w$1(),this._tmpObb=new O$8,this._resetOffset(t);}_resetOffset(t){this._offset=t,this._totalOffset=t;}set offset(t){this._resetOffset(t);}get offset(){return this._offset}set componentOffset(t){this._totalOffset=this._offset+t;}set localOrigin(t){this.componentLocalOriginLength=s$i(t);}applyToVertex(t,s,r){const e=o$r(q$2,t,s,r),i=o$r(z$2,t,s,r+this.componentLocalOriginLength),o=this._totalOffset/s$i(i);return q$3(this._tmpVertex,e,i,o),this._tmpVertex}applyToAabb(t){const s=this.componentLocalOriginLength,r=t[0],e=t[1],i=t[2]+s,o=t[3],a=t[4],n=t[5]+s,h=Math.abs(r),f=Math.abs(e),l=Math.abs(i),m=Math.abs(o),p=Math.abs(a),c=Math.abs(n),_=.5*(1+Math.sign(r*o))*Math.min(h,m),u=.5*(1+Math.sign(e*a))*Math.min(f,p),g=.5*(1+Math.sign(i*n))*Math.min(l,c),M=Math.max(h,m),v=Math.max(f,p),b=Math.max(l,c),T=Math.sqrt(_*_+u*u+g*g),x=Math.sign(h+r),O=Math.sign(f+e),y=Math.sign(l+i),d=Math.sign(m+o),V=Math.sign(p+a),L=Math.sign(c+n),j=this._totalOffset;if(T<j)return t[0]-=(1-x)*j,t[1]-=(1-O)*j,t[2]-=(1-y)*j,t[3]+=d*j,t[4]+=V*j,t[5]+=L*j,t;const I=j/Math.sqrt(M*M+v*v+b*b),w=j/T,q=w-I,z=-q;return t[0]+=r*(x*z+w),t[1]+=e*(O*z+w),t[2]+=i*(y*z+w),t[3]+=o*(d*q+I),t[4]+=a*(V*q+I),t[5]+=n*(L*q+I),t}applyToMbs(t){const s=s$i(Z$2(t)),r=this._totalOffset/s;return q$3(Z$2(this._tmpMbs),Z$2(t),Z$2(t),r),this._tmpMbs[3]=t[3]+t[3]*this._totalOffset/s,this._tmpMbs}applyToObb(t){return L$3(t,this._totalOffset,this._totalOffset,l$g.Global,this._tmpObb),this._tmpObb}};let O$4 = class O{constructor(t=0){this.offset=t,this.sphere=w$1(),this.tmpVertex=n$8();}applyToVertex(t,s,r){const e=this.objectTransform.transform,i=o$r(q$2,t,s,r),o=O$7(i,i,e),a=this.offset/s$i(o);q$3(o,o,o,a);const h=this.objectTransform.inverse;return O$7(this.tmpVertex,o,h),this.tmpVertex}applyToMinMax(t,s){const r=this.offset/s$i(t);q$3(t,t,t,r);const e=this.offset/s$i(s);q$3(s,s,s,e);}applyToAabb(t){const s=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*s,t[1]+=t[1]*s,t[2]+=t[2]*s;const r=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*r,t[4]+=t[4]*r,t[5]+=t[5]*r,t}applyToBoundingSphere(t){const s=s$i(Z$2(t)),r=this.offset/s;return q$3(Z$2(this.sphere),Z$2(t),Z$2(t),r),this.sphere[3]=t[3]+t[3]*this.offset/s,this.sphere}};const y$1=new O$4;function d$8(t){return null!=t?(y$1.offset=t,y$1):null}new x$1;const q$2=n$8(),z$2=n$8();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function u$5(e,t,f){const{data:o,indices:r}=e,i=t.typedBuffer,s=t.typedBufferStride,n=r.length;f*=s;for(let c=0;c<n;++c){const e=2*r[c];i[f]=o[e],i[f+1]=o[e+1],f+=s;}}function a$9(e,t,f,o){const{data:r,indices:i}=e,s=t.typedBuffer,n=t.typedBufferStride,c=i.length;if(f*=n,null==o||1===o)for(let l=0;l<c;++l){const e=3*i[l];s[f]=r[e],s[f+1]=r[e+1],s[f+2]=r[e+2],f+=n;}else for(let l=0;l<c;++l){const e=3*i[l];for(let t=0;t<o;++t)s[f]=r[e],s[f+1]=r[e+1],s[f+2]=r[e+2],f+=n;}}function p$3(e,t,f,o=1){const{data:r,indices:i}=e,s=t.typedBuffer,n=t.typedBufferStride,c=i.length;if(f*=n,1===o)for(let l=0;l<c;++l){const e=4*i[l];s[f]=r[e],s[f+1]=r[e+1],s[f+2]=r[e+2],s[f+3]=r[e+3],f+=n;}else for(let l=0;l<c;++l){const e=4*i[l];for(let t=0;t<o;++t)s[f]=r[e],s[f+1]=r[e+1],s[f+2]=r[e+2],s[f+3]=r[e+3],f+=n;}}function b$1(t,f,o,r,i=1){if(!f)return void a$9(t,o,r,i);const{data:s,indices:n}=t,c=o.typedBuffer,l=o.typedBufferStride,d=n.length,u=f[0],p=f[1],y=f[2],B=f[4],g=f[5],b=f[6],O=f[8],h=f[9],S=f[10],N=f[12],R=f[13],E=f[14];r*=l;let A=0,L=0,F=0;const z=H$3(f)?e=>{A=s[e]+N,L=s[e+1]+R,F=s[e+2]+E;}:e=>{const t=s[e],f=s[e+1],o=s[e+2];A=u*t+B*f+O*o+N,L=p*t+g*f+h*o+R,F=y*t+b*f+S*o+E;};if(1===i)for(let e=0;e<d;++e)z(3*n[e]),c[r]=A,c[r+1]=L,c[r+2]=F,r+=l;else for(let e=0;e<d;++e){z(3*n[e]);for(let e=0;e<i;++e)c[r]=A,c[r+1]=L,c[r+2]=F,r+=l;}}function O$3(f,o,r,i,s=1){if(!o)return void a$9(f,r,i,s);const{data:n,indices:c}=f,l=o,d=r.typedBuffer,u=r.typedBufferStride,p=c.length,y=l[0],B=l[1],g=l[2],b=l[4],O=l[5],h=l[6],S=l[8],N=l[9],R=l[10],E=!G$3(l),A=1e-6,L=1-A;i*=u;let F=0,z=0,m=0;const I=H$3(l)?e=>{F=n[e],z=n[e+1],m=n[e+2];}:e=>{const t=n[e],f=n[e+1],o=n[e+2];F=y*t+b*f+S*o,z=B*t+O*f+N*o,m=g*t+h*f+R*o;};if(1===s)if(E)for(let e=0;e<p;++e){I(3*c[e]);const t=F*F+z*z+m*m;if(t<L&&t>A){const e=1/Math.sqrt(t);d[i]=F*e,d[i+1]=z*e,d[i+2]=m*e;}else d[i]=F,d[i+1]=z,d[i+2]=m;i+=u;}else for(let e=0;e<p;++e)I(3*c[e]),d[i]=F,d[i+1]=z,d[i+2]=m,i+=u;else for(let e=0;e<p;++e){if(I(3*c[e]),E){const e=F*F+z*z+m*m;if(e<L&&e>A){const t=1/Math.sqrt(e);F*=t,z*=t,m*=t;}}for(let e=0;e<s;++e)d[i]=F,d[i+1]=z,d[i+2]=m,i+=u;}}function h$6(e,f,o,r,i=1){if(!f)return void p$3(e,o,r,i);const{data:s,indices:n}=e,c=f,l=o.typedBuffer,d=o.typedBufferStride,u=n.length,a=c[0],y=c[1],B=c[2],g=c[4],b=c[5],O=c[6],h=c[8],S=c[9],N=c[10],R=!G$3(c),E=1e-6,A=1-E;if(r*=d,1===i)for(let t=0;t<u;++t){const e=4*n[t],f=s[e],o=s[e+1],i=s[e+2],c=s[e+3];let u=a*f+g*o+h*i,p=y*f+b*o+S*i,L=B*f+O*o+N*i;if(R){const e=u*u+p*p+L*L;if(e<A&&e>E){const t=1/Math.sqrt(e);u*=t,p*=t,L*=t;}}l[r]=u,l[r+1]=p,l[r+2]=L,l[r+3]=c,r+=d;}else for(let t=0;t<u;++t){const e=4*n[t],f=s[e],o=s[e+1],c=s[e+2],u=s[e+3];let p=a*f+g*o+h*c,L=y*f+b*o+S*c,F=B*f+O*o+N*c;if(R){const e=p*p+L*L+F*F;if(e<A&&e>E){const t=1/Math.sqrt(e);p*=t,L*=t,F*=t;}}for(let t=0;t<i;++t)l[r]=p,l[r+1]=L,l[r+2]=F,l[r+3]=u,r+=d;}}function S$1(e,t,f,o,r=1){const{data:i,indices:s}=e,n=f.typedBuffer,c=f.typedBufferStride,l=s.length;if(o*=c,t!==i.length||4!==t)if(1!==r)if(4!==t)for(let d=0;d<l;++d){const e=3*s[d];for(let t=0;t<r;++t)n[o]=i[e],n[o+1]=i[e+1],n[o+2]=i[e+2],n[o+3]=255,o+=c;}else for(let d=0;d<l;++d){const e=4*s[d];for(let t=0;t<r;++t)n[o]=i[e],n[o+1]=i[e+1],n[o+2]=i[e+2],n[o+3]=i[e+3],o+=c;}else {if(4===t){for(let e=0;e<l;++e){const t=4*s[e];n[o]=i[t],n[o+1]=i[t+1],n[o+2]=i[t+2],n[o+3]=i[t+3],o+=c;}return}for(let e=0;e<l;++e){const t=3*s[e];n[o]=i[t],n[o+1]=i[t+1],n[o+2]=i[t+2],n[o+3]=255,o+=c;}}else {n[o]=i[0],n[o+1]=i[1],n[o+2]=i[2],n[o+3]=i[3];const e=new Uint32Array(f.typedBuffer.buffer,f.start),t=c/4,s=e[o/=4];o+=t;const d=l*r;for(let f=1;f<d;++f)e[o]=s,o+=t;}}function N$3(e,t,f){const{data:o,indices:r}=e,i=t.typedBuffer,s=t.typedBufferStride,n=r.length,c=o[0];f*=s;for(let l=0;l<n;++l)i[f]=c,f+=s;}function R$2(e,t,f,o,r=1){const i=t.typedBuffer,s=t.typedBufferStride;if(o*=s,1===r)for(let n=0;n<f;++n)i[o]=e[0],i[o+1]=e[1],i[o+2]=e[2],i[o+3]=e[3],o+=s;else for(let n=0;n<f;++n)for(let t=0;t<r;++t)i[o]=e[0],i[o+1]=e[1],i[o+2]=e[2],i[o+3]=e[3],o+=s;}function E$3(e,t,o,r,i,s){for(const n of t.fields.keys()){const t=e.attributes.get(n),c=t?.indices;if(t&&c)A$2(n,t,o,r,i,s);else if(n===e$k.OBJECTANDLAYERIDCOLOR&&null!=e.objectAndLayerIdColor){const t=e.attributes.get(e$k.POSITION)?.indices;if(t){const o=t.length,r=i.getField(n,x$3);R$2(e.objectAndLayerIdColor,r,o,s);}}}}function A$2(e,t,d,a,y,B){switch(e){case e$k.POSITION:{s$e(3===t.size);const f=y.getField(e,i$h);s$e(!!f,`No buffer view for ${e}`),f&&b$1(t,d,f,B);break}case e$k.NORMAL:{s$e(3===t.size);const f=y.getField(e,i$h);s$e(!!f,`No buffer view for ${e}`),f&&O$3(t,a,f,B);break}case e$k.NORMALCOMPRESSED:{s$e(2===t.size);const f=y.getField(e,q$4);s$e(!!f,`No buffer view for ${e}`),f&&u$5(t,f,B);break}case e$k.UV0:{s$e(2===t.size);const f=y.getField(e,u$f);s$e(!!f,`No buffer view for ${e}`),f&&u$5(t,f,B);break}case e$k.COLOR:case e$k.SYMBOLCOLOR:{const o=y.getField(e,x$3);s$e(!!o,`No buffer view for ${e}`),s$e(3===t.size||4===t.size),!o||3!==t.size&&4!==t.size||S$1(t,t.size,o,B);break}case e$k.COLORFEATUREATTRIBUTE:{const f=y.getField(e,y$4);s$e(!!f,`No buffer view for ${e}`),s$e(1===t.size),f&&1===t.size&&N$3(t,f,B);break}case e$k.TANGENT:{s$e(4===t.size);const f=y.getField(e,c$f);s$e(!!f,`No buffer view for ${e}`),f&&h$6(t,a,f,B);break}case e$k.PROFILERIGHT:case e$k.PROFILEUP:case e$k.PROFILEVERTEXANDNORMAL:case e$k.FEATUREVALUE:{s$e(4===t.size);const f=y.getField(e,c$f);s$e(!!f,`No buffer view for ${e}`),f&&p$3(t,f,B);}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let r$7 = class r{constructor(t){this.vertexBufferLayout=t;}elementCount(e){return e.attributes.get(e$k.POSITION).indices.length}write(t,r,i,o,s){E$3(i,this.vertexBufferLayout,t,r,o,s);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function o$j(o){o.attributes.add(e$k.POSITION,"vec3"),o.vertex.code.add(o$v`vec3 positionModel() { return position; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function c$6({code:c},i){i.doublePrecisionRequiresObfuscation?c.add(o$v`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):c.add(o$v`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o$i = class o extends a$a{constructor(r,o){super(r,"mat3",a$f.Draw,((e,s,t)=>e.setUniformMatrix3fv(r,o(s,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let e$e = class e extends a$a{constructor(r,e){super(r,"mat3",a$f.Pass,((s,o,t)=>s.setUniformMatrix3fv(r,e(o,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let e$d = class e extends a$a{constructor(r,e){super(r,"mat4",a$f.Pass,((s,o,t)=>s.setUniformMatrix4fv(r,e(o,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function v$4(r,o){r.include(o$j);const e=r.vertex;e.include(c$6,o),r.varyings.add("vPositionWorldCameraRelative","vec3"),r.varyings.add("vPosition_view","vec3"),e.uniforms.add(new e$f("transformWorldFromViewTH",(r=>r.transformWorldFromViewTH)),new e$f("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL)),new e$e("transformViewFromCameraRelativeRS",(r=>r.transformViewFromCameraRelativeRS)),new e$d("transformProjFromView",(r=>r.transformProjFromView)),new o$i("transformWorldFromModelRS",(r=>r.transformWorldFromModelRS)),new o$k("transformWorldFromModelTH",(r=>r.transformWorldFromModelTH)),new o$k("transformWorldFromModelTL",(r=>r.transformWorldFromModelTL))),e.code.add(o$v`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),e.code.add(o$v`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${o.spherical?o$v`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:o$v`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),r.fragment.uniforms.add(new e$f("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL))),e.code.add(o$v`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),r.fragment.code.add(o$v`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`);}class F extends n$b{constructor(){super(...arguments),this.transformWorldFromViewTH=n$8(),this.transformWorldFromViewTL=n$8(),this.transformViewFromCameraRelativeRS=e$m(),this.transformProjFromView=e$p();}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function n$5(o,a){switch(a.normalType){case a$b.Attribute:case a$b.Compressed:o.include(t$g,a),o.varyings.add("vNormalWorld","vec3"),o.varyings.add("vNormalView","vec3"),o.vertex.uniforms.add(new o$i("transformNormalGlobalFromModel",(r=>r.transformNormalGlobalFromModel)),new e$e("transformNormalViewFromGlobal",(r=>r.transformNormalViewFromGlobal))),o.vertex.code.add(o$v`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case a$b.Ground:o.include(v$4,a),o.varyings.add("vNormalWorld","vec3"),o.vertex.code.add(o$v`
        void forwardNormal() {
          vNormalWorld = ${a.spherical?o$v`normalize(vPositionWorldCameraRelative);`:o$v`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case a$b.ScreenDerivative:o.vertex.code.add(o$v`void forwardNormal() {}`);break;default:n$a(a.normalType);case a$b.COUNT:}}let f$8 = class f extends F{constructor(){super(...arguments),this.transformNormalViewFromGlobal=e$m();}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const o$h=.1,t$e=.001;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t$d = class t{constructor(t,o){this._module=t,this._loadModule=o;}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let r$6 = class r{constructor(i,t,r){this.release=r,this.initializeConfiguration(i,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(i),this._pipeline=this.initializePipeline(i);}destroy(){this._program=r$d(this._program),this._pipeline=this._configuration=null;}reload(t){r$d(this._program),this._program=this.initializeProgram(t),this._pipeline=this.initializePipeline(t);}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(i){this.program.assertCompatibleVertexAttributeLocations(i);}get primitiveType(){return E$7.TRIANGLES}getPipeline(i,t,r){return this._pipeline}initializeConfiguration(i,t){}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let r$5 = class r{constructor(r,i,s){this._context=r,this._locations=s,this._textures=new Map,this._freeTextureUnits=new l$h({deallocator:null}),this._glProgram=r.programCache.acquire(i.generate("vertex"),i.generate("fragment"),s),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=i.generateBindPass(this),this.bindDraw=i.generateBindDraw(this),this._fragmentUniforms=a$h()?i.fragmentUniforms:null;}dispose(){this._glProgram.dispose();}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(t,e){this._glProgram.setUniform1i(t,e?1:0);}setUniform1i(t,e){this._glProgram.setUniform1i(t,e);}setUniform1f(t,e){this._glProgram.setUniform1f(t,e);}setUniform2fv(t,e){this._glProgram.setUniform2fv(t,e);}setUniform3fv(t,e){this._glProgram.setUniform3fv(t,e);}setUniform4fv(t,e){this._glProgram.setUniform4fv(t,e);}setUniformMatrix3fv(t,e){this._glProgram.setUniformMatrix3fv(t,e);}setUniformMatrix4fv(t,e){this._glProgram.setUniformMatrix4fv(t,e);}setUniform1fv(t,e){this._glProgram.setUniform1fv(t,e);}setUniform1iv(t,e){this._glProgram.setUniform1iv(t,e);}setUniform2iv(t,e){this._glProgram.setUniform3iv(t,e);}setUniform3iv(t,e){this._glProgram.setUniform3iv(t,e);}setUniform4iv(t,e){this._glProgram.setUniform4iv(t,e);}assertCompatibleVertexAttributeLocations(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible");}stop(){this._textures.clear(),this._freeTextureUnits.clear();}bindTexture(t,e){if(null==e?.glName){const e=this._textures.get(t);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(t)),null}let r=this._textures.get(t);return null==r?(r=this._allocTextureUnit(e),this._textures.set(t,r)):r.texture=e,this._context.useProgram(this),this.setUniform1i(t,r.unit),this._context.bindTexture(e,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((t,e)=>{this._context.bindTexture(t.texture,t.unit),this.setUniform1i(e,t.unit);})),this._fragmentUniforms?.forEach((t=>{"sampler2D"!==t.type&&"samplerCube"!==t.type||this._textures.has(t.name)||console.error(`Texture sampler ${t.name} has no bound texture`);}));}_allocTextureUnit(t){return {texture:t,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(t){this._freeTextureUnits.push(t.unit);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
({func:O$9.LESS});({func:O$9.ALWAYS});const e$c={mask:255},f$7={function:{func:O$9.ALWAYS,ref:N$6.OutlineVisualElementMask,mask:N$6.OutlineVisualElementMask},operation:{fail:I$5.KEEP,zFail:I$5.KEEP,zPass:I$5.ZERO}},o$g={function:{func:O$9.ALWAYS,ref:N$6.OutlineVisualElementMask,mask:N$6.OutlineVisualElementMask},operation:{fail:I$5.KEEP,zFail:I$5.KEEP,zPass:I$5.REPLACE}};({function:{func:O$9.EQUAL,ref:N$6.OutlineVisualElementMask,mask:N$6.OutlineVisualElementMask},operation:{fail:I$5.KEEP,zFail:I$5.KEEP,zPass:I$5.KEEP}});({function:{func:O$9.NOTEQUAL,ref:N$6.OutlineVisualElementMask,mask:N$6.OutlineVisualElementMask},operation:{fail:I$5.KEEP,zFail:I$5.KEEP,zPass:I$5.KEEP}});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function u$4({normalTexture:u,metallicRoughnessTexture:n,metallicFactor:r,roughnessFactor:t,emissiveTexture:o,emissiveFactor:s,occlusionTexture:c}){return null==u&&null==n&&null==o&&(null==s||G$4(s,l$i))&&null==c&&(null==t||1===t)&&(null==r||1===r)}const r$4=[1,1,.5],t$c=[0,.6,.2],o$f=[0,1,.2];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let e$b = class e extends a$a{constructor(r,e){super(r,"vec2",a$f.Pass,((s,o,t)=>s.setUniform2fv(r,e(o,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function t$b(e){e.varyings.add("linearDepth","float");}function i$6(e){e.vertex.uniforms.add(new e$b("nearFar",((e,r)=>r.camera.nearFar)));}function n$4(e){e.vertex.code.add(o$v`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`);}function d$7(a,d){const{vertex:s}=a;switch(d.output){case o$m.Color:if(d.receiveShadows)return t$b(a),void s.code.add(o$v`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case o$m.LinearDepth:case o$m.Shadow:case o$m.ShadowHighlight:case o$m.ShadowExcludeHighlight:return a.include(v$4,d),t$b(a),i$6(a),n$4(a),void s.code.add(o$v`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}s.code.add(o$v`void forwardLinearDepth() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e$a(e){e.vertex.code.add(o$v`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function P$1(e,s){m$5(e,s,new o$k("slicePlaneOrigin",((e,i)=>H$2(s,e,i))),new o$k("slicePlaneBasis1",((e,i)=>I$2(s,e,i,i.slicePlane?.basis1))),new o$k("slicePlaneBasis2",((e,i)=>I$2(s,e,i,i.slicePlane?.basis2))));}function m$5(e,s,...i){if(!s.hasSlicePlane){const i=o$v`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return s.hasSliceInVertexProgram&&e.vertex.code.add(i),void e.fragment.code.add(i)}s.hasSliceInVertexProgram&&e.vertex.uniforms.add(...i),e.fragment.uniforms.add(...i);const a=o$v`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,l=o$v`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=s.hasSliceHighlight?o$v`
        ${l}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:o$v`#define highlightSlice(_color_, _pos_) (_color_)`;s.hasSliceInVertexProgram&&e.vertex.code.add(a),e.fragment.code.add(a),e.fragment.code.add(o);}function h$5(e,s,i){return e.instancedDoublePrecision?o$r(b,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]):s.slicePlaneLocalOrigin}function p$2(e,s){return null!=e?e$q(v$3,s.origin,e):s.origin}function g$1(s,i,a){return s.hasSliceTranslatedView?null!=i?i$i(S,a.camera.viewMatrix,i):a.camera.viewMatrix:null}function H$2(e,s,a){if(null==a.slicePlane)return l$i;const l=h$5(e,s,a),o=p$2(l,a.slicePlane),r=g$1(e,l,a);return null!=r?O$7(v$3,o,r):o}function I$2(e,s,o,r){if(null==r||null==o.slicePlane)return l$i;const t=h$5(e,s,o),n=p$2(t,o.slicePlane),f=g$1(e,t,o);return null!=f?(u$a(B$1,r,n),O$7(v$3,n,f),O$7(B$1,B$1,f),e$q(B$1,B$1,v$3)):r}const b=n$8(),v$3=n$8(),B$1=n$8(),S=e$p();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function o$e(o){n$4(o),o.vertex.code.add(o$v`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),o.vertex.code.add(o$v`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o$d = class o extends a$a{constructor(r,o){super(r,"float",a$f.Pass,((s,e,t)=>s.setUniform1f(r,o(e,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o$c = class o extends a$a{constructor(r,o){super(r,"mat4",a$f.Draw,((e,s,t)=>e.setUniformMatrix4fv(r,o(s,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function f$6(r,e){e.instancedDoublePrecision?r.constants.add("cameraPosition","vec3",l$i):r.uniforms.add(new o$k("cameraPosition",((r,e)=>o$r(v$2,e.camera.viewInverseTransposeMatrix[3]-r.origin[0],e.camera.viewInverseTransposeMatrix[7]-r.origin[1],e.camera.viewInverseTransposeMatrix[11]-r.origin[2]))));}function d$6(e,a){if(!a.instancedDoublePrecision)return void e.uniforms.add(new e$d("proj",((r,e)=>e.camera.projectionMatrix)),new o$c("view",((e,i)=>i$i(l$7,i.camera.viewMatrix,e.origin))),new o$k("localOrigin",(r=>r.origin)));const o=r=>o$r(v$2,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new e$d("proj",((r,e)=>e.camera.projectionMatrix)),new e$d("view",((e,i)=>i$i(l$7,i.camera.viewMatrix,o(i)))),new e$f("localOrigin",((r,e)=>o(e))));}const l$7=e$p(),v$2=n$8();function p$1(r){r.uniforms.add(new e$d("viewNormal",((r,e)=>e.camera.viewInverseTransposeMatrix)));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t$a = class t extends n$b{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[]);}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}};function r$3(e={}){return (t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else {const s=t._parameterNames.length-1,a=e.count||2,i=Math.ceil(Math.log2(a)),o=t._parameterBits??[0];let h=0;for(;o[h]+i>16;)h++,h>=o.length&&o.push(0);t._parameterBits=o;const n=o[h],m=(1<<i)-1<<n;o[h]+=i,Object.defineProperty(t,r,{get(){return this[s]},set(e){if(this[s]!==e&&(this[s]=e,this._keyDirty=!0,this._parameterBits[h]=this._parameterBits[h]&~m|+e<<n&m,"number"!=typeof e&&"boolean"!=typeof e))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof e)}});}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let O$2 = class O extends t$a{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1;}};e$r([r$3()],O$2.prototype,"instancedDoublePrecision",void 0),e$r([r$3()],O$2.prototype,"hasModelTransformation",void 0);const h$4=e$m();function N$2(e,o){const i=o.hasModelTransformation,c=o.instancedDoublePrecision;i&&(e.vertex.uniforms.add(new e$d("model",(e=>e.modelTransformation??o$t))),e.vertex.uniforms.add(new e$e("normalLocalOriginFromModel",(e=>(j$3(h$4,e.modelTransformation??o$t),h$4))))),o.instanced&&c&&(e.attributes.add(e$k.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(e$k.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(e$k.INSTANCEMODEL,"mat3"),e.attributes.add(e$k.INSTANCEMODELNORMAL,"mat3"));const v=e.vertex;c&&(v.include(c$6,o),v.uniforms.add(new o$k("viewOriginHi",((e,r)=>o$w(o$r(T$3,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]),T$3))),new o$k("viewOriginLo",((e,r)=>r$f(o$r(T$3,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]),T$3))))),v.code.add(o$v`
    vec3 getVertexInLocalOriginSpace() {
      return ${i?c?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":c?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${c?o$v`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),v.code.add(o$v`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${i?c?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":c?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),o.output===o$m.Normal&&(p$1(v),v.code.add(o$v`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${i?c?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":c?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),o.hasVertexTangents&&v.code.add(o$v`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${i?c?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":c?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`);}const T$3=n$8();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e$9(e){e.vertex.code.add(o$v`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${o$v.int(n$c.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${o$v.int(n$c.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${o$v.int(n$c.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${o$v.int(n$c.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let e$8 = class e extends a$a{constructor(r,e){super(r,"int",a$f.Pass,((s,o,i)=>s.setUniform1i(r,e(o,i))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function i$5(i,t){t.hasSymbolColors?(i.include(e$9),i.attributes.add(e$k.SYMBOLCOLOR,"vec4"),i.varyings.add("colorMixMode","mediump float"),i.vertex.code.add(o$v`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(i.fragment.uniforms.add(new e$8("colorMixMode",(o=>E$4[o.colorMixMode]))),i.vertex.code.add(o$v`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e$7(e,d){d.hasVertexColors?(e.attributes.add(e$k.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(o$v`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(o$v`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(o$v`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function s$5(e){e.vertex.code.add(o$v`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(o$v`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(o$v`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(o$v`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(o$v`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(o$v`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`);}function o$b(e){e.uniforms.add(new e$f("screenSizePerspectiveAlignment",(e=>i$4(e.screenSizePerspectiveAlignment||e.screenSizePerspective))));}function i$4(a){return o$r(n$3,a.parameters.divisor,a.parameters.offset,a.minScaleFactor)}const n$3=n$8();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let e$6 = class e extends a$a{constructor(r,e){super(r,"vec4",a$f.Pass,((s,o,t)=>s.setUniform4fv(r,e(o,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function a$8(e,r){const c=e.vertex;r.hasVerticalOffset?(f$5(c),r.hasScreenSizePerspective&&(e.include(s$5),o$b(c),f$6(e.vertex,r)),c.code.add(o$v`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${r.spherical?o$v`vec3 worldNormal = normalize(worldPos + localOrigin);`:o$v`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${r.hasScreenSizePerspective?o$v`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:o$v`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):c.code.add(o$v`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`);}const s$4=n$d();function f$5(r){r.uniforms.add(new e$6("verticalOffset",((r,t)=>{const{minWorldLength:l,maxWorldLength:o,screenLength:c}=r.verticalOffset,i=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),a=t.camera.pixelRatio||1;return s$j(s$4,c*a,i,l,o)})));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function d$5(d,t){const a=t.output===o$m.ObjectAndLayerIdColor,n=t.objectAndLayerIdColorInstanced;a&&(d.varyings.add("objectAndLayerIdColorVarying","vec4"),n?d.attributes.add(e$k.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):d.attributes.add(e$k.OBJECTANDLAYERIDCOLOR,"vec4")),d.vertex.code.add(o$v`
     void forwardObjectAndLayerIdColor() {
      ${a?n?o$v`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:o$v`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:o$v``} }`),d.fragment.code.add(o$v`
      void outputObjectAndLayerIdColor() {
        ${a?o$v`fragColor = objectAndLayerIdColorVarying;`:o$v``} }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function a$7(a){a.code.add(o$v`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function a$6(a){a.code.add(o$v`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function l$6(l,r){switch(r.output){case o$m.Shadow:case o$m.ShadowHighlight:case o$m.ShadowExcludeHighlight:l.fragment.include(a$7),l.fragment.code.add(o$v`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);break;case o$m.LinearDepth:l.fragment.include(a$6),l.fragment.code.add(o$v`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const r$2=r$g(1,1,0,1),d$4=r$g(1,0,1,1);function a$5(e){e.fragment.uniforms.add(new s$7("depthTexture",((e,o)=>o.mainDepth))),e.fragment.constants.add("occludedHighlightFlag","vec4",r$2).add("unoccludedHighlightFlag","vec4",d$4),e.fragment.code.add(o$v`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let e$5 = class e extends a$a{constructor(r,e,o){super(r,"vec4",a$f.Pass,((s,o,t)=>s.setUniform4fv(r,e(o,t))),o);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o$a = class o extends a$a{constructor(r,o,e){super(r,"float",a$f.Pass,((s,e,t)=>s.setUniform1fv(r,o(e,t))),e);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let T$2=class T extends S$4{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1;}};e$r([y$5()],T$2.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),e$r([y$5()],T$2.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),e$r([y$5()],T$2.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),e$r([y$5()],T$2.prototype,"DECONFLICTOR_SHOW_GRID",void 0),e$r([y$5()],T$2.prototype,"LABELS_SHOW_BORDER",void 0),e$r([y$5()],T$2.prototype,"TEXT_SHOW_BASELINE",void 0),e$r([y$5()],T$2.prototype,"TEXT_SHOW_BORDER",void 0),e$r([y$5()],T$2.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),e$r([y$5()],T$2.prototype,"OVERLAY_SHOW_CENTER",void 0),e$r([y$5()],T$2.prototype,"SHOW_POI",void 0),e$r([y$5()],T$2.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),e$r([y$5()],T$2.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),e$r([y$5()],T$2.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),e$r([y$5()],T$2.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),e$r([y$5()],T$2.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),e$r([y$5()],T$2.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),e$r([y$5()],T$2.prototype,"I3S_TREE_SHOW_TILES",void 0),e$r([y$5()],T$2.prototype,"I3S_SHOW_MODIFICATIONS",void 0),e$r([y$5()],T$2.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),e$r([y$5()],T$2.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),e$r([y$5()],T$2.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),e$r([y$5()],T$2.prototype,"LINE_WIREFRAMES",void 0),T$2=e$r([c$g("esri.views.3d.support.DebugFlags")],T$2);new T$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var h$3,y;!function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale";}(h$3||(h$3={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle";}(y||(y={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const e$4=8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function l$5(l,n){const{vertex:s,attributes:u}=l;n.hasVvInstancing&&(n.vvSize||n.vvColor)&&u.add(e$k.INSTANCEFEATUREATTRIBUTE,"vec4"),n.vvSize?(s.uniforms.add(new e$f("vvSizeMinSize",(e=>e.vvSize.minSize))),s.uniforms.add(new e$f("vvSizeMaxSize",(e=>e.vvSize.maxSize))),s.uniforms.add(new e$f("vvSizeOffset",(e=>e.vvSize.offset))),s.uniforms.add(new e$f("vvSizeFactor",(e=>e.vvSize.factor))),s.uniforms.add(new e$e("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),s.uniforms.add(new e$f("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),s.code.add(o$v`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),s.code.add(o$v`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${n.hasVvInstancing?o$v`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):s.code.add(o$v`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),n.vvColor?(s.constants.add("vvColorNumber","int",e$4),s.uniforms.add(new o$a("vvColorValues",(e=>e.vvColor.values),e$4),new e$5("vvColorColors",(e=>e.vvColor.colors),e$4)),s.code.add(o$v`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${n.hasVvInstancing?o$v`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):s.code.add(o$v`vec4 vvColor() { return vec4(1.0); }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function d$3(d){d.fragment.code.add(o$v`
    #define discardOrAdjustAlpha(color) { if (color.a < ${o$v.float(t$e)}) { discard; } }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function s$3(a,e){l$4(a,e,new o$d("textureAlphaCutoff",(a=>a.textureAlphaCutoff)));}function l$4(e,r,s){const t=e.fragment;switch(r.alphaDiscardMode!==s$k.Mask&&r.alphaDiscardMode!==s$k.MaskBlend||t.uniforms.add(s),r.alphaDiscardMode){case s$k.Blend:return e.include(d$3);case s$k.Opaque:t.code.add(o$v`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case s$k.Mask:t.code.add(o$v`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case s$k.MaskBlend:e.fragment.code.add(o$v`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function h$2(h,x){const{vertex:j,fragment:O}=h,w=x.hasColorTexture&&x.alphaDiscardMode!==s$k.Opaque;switch(x.output){case o$m.LinearDepth:case o$m.Shadow:case o$m.ShadowHighlight:case o$m.ShadowExcludeHighlight:case o$m.ObjectAndLayerIdColor:d$6(j,x),h.include(o$e,x),h.include(o$l,x),h.include(l$5,x),h.include(l$6,x),h.include(P$1,x),h.include(d$5,x),i$6(h),h.varyings.add("depth","float"),w&&O.uniforms.add(new s$7("tex",(o=>o.texture))),j.code.add(o$v`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),h.include(s$3,x),O.code.add(o$v`
          void main(void) {
            discardBySlice(vpos);
            ${w?o$v`
                    vec4 texColor = texture(tex, ${x.hasColorTextureTransform?o$v`colorUV`:o$v`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${x.output===o$m.ObjectAndLayerIdColor?o$v`outputObjectAndLayerIdColor();`:o$v`outputDepth(depth);`}
          }
        `);break;case o$m.Normal:{d$6(j,x),h.include(o$e,x),h.include(t$g,x),h.include(n$5,x),h.include(o$l,x),h.include(l$5,x),w&&O.uniforms.add(new s$7("tex",(o=>o.texture))),x.normalType===a$b.ScreenDerivative&&h.varyings.add("vPositionView","vec3");const o=x.normalType===a$b.Attribute||x.normalType===a$b.Compressed;j.code.add(o$v`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${o?o$v`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:o$v`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),h.include(P$1,x),h.include(s$3,x),O.code.add(o$v`
          void main() {
            discardBySlice(vpos);
            ${w?o$v`
                    vec4 texColor = texture(tex, ${x.hasColorTextureTransform?o$v`colorUV`:o$v`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${x.normalType===a$b.ScreenDerivative?o$v`vec3 normal = screenDerivativeNormal(vPositionView);`:o$v`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case o$m.Highlight:d$6(j,x),h.include(o$e,x),h.include(o$l,x),h.include(l$5,x),w&&O.uniforms.add(new s$7("tex",(o=>o.texture))),j.code.add(o$v`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),h.include(P$1,x),h.include(s$3,x),h.include(a$5,x),O.code.add(o$v`
          void main() {
            discardBySlice(vpos);
            ${w?o$v`
                    vec4 texColor = texture(tex, ${x.hasColorTextureTransform?o$v`colorUV`:o$v`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function T$1(T,u){const x=T.fragment;u.hasVertexTangents?(T.attributes.add(e$k.TANGENT,"vec4"),T.varyings.add("vTangent","vec4"),u.doubleSidedMode===i$7.WindingOrder?x.code.add(o$v`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):x.code.add(o$v`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):x.code.add(o$v`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),u.textureCoordinateType!==d$a.None&&(T.include(s$9,u),x.uniforms.add(u.pbrTextureBindType===a$f.Pass?new s$7("normalTexture",(e=>e.textureNormal)):new s$8("normalTexture",(e=>e.textureNormal))),u.hasNormalTextureTransform&&(x.uniforms.add(new e$b("scale",(e=>e.scale??l$j))),x.uniforms.add(new e$e("normalTextureTransformMatrix",(t=>t.normalTextureTransformMatrix??o$x)))),x.code.add(o$v`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),u.hasNormalTextureTransform&&x.code.add(o$v`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),x.code.add(o$v`return tangentSpace * rawNormal;
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var R$1,E$2;!function(R){R[R.RED=0]="RED",R[R.RG=1]="RG",R[R.RGBA4=2]="RGBA4",R[R.RGBA=3]="RGBA",R[R.RGBA_MIPMAP=4]="RGBA_MIPMAP",R[R.R16F=5]="R16F",R[R.RGBA16F=6]="RGBA16F";}(R$1||(R$1={})),function(R){R[R.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",R[R.DEPTH16_BUFFER=1]="DEPTH16_BUFFER";}(E$2||(E$2={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const e$3=3e5,o$9=5e5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const t$9={required:[]};({required:[o$m.LinearDepth]});({required:[o$m.CompositeColor]});({required:[o$m.Highlight]});const i$3={required:[o$m.Depth,o$m.Normal]};let o$8 = class o extends S$4{consumes(){return t$9}get usedMemory(){return 0}get isDecoration(){return !1}get running(){return !1}get materialReference(){return null}modify(e){}get numGeometries(){return 0}get hasOccludees(){return !1}queryRenderOccludedState(e){return !1}};let c$5 = class c extends o$8{};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function o$7(o,t=!0){o.attributes.add(e$k.POSITION,"vec2"),t&&o.varyings.add("uv","vec2"),o.vertex.code.add(o$v`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?o$v`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function t$8(t){t.include(a$6),t.code.add(o$v`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromRGBA(vec4 depth, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(depth), nearFar);
}
float linearDepthFromTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
return linearDepthFromRGBA(texelFetch(depthTexture, iuv, 0), nearFar);
}`);}function a$4(e){e.code.add(o$v`float linearizeDepth(float depth, vec2 nearFar) {
float depthNdc = depth * 2.0 - 1.0;
return (2.0 * nearFar[0] * nearFar[1]) / (depthNdc * (nearFar[1] - nearFar[0]) - (nearFar[1] + nearFar[0]));
}
float linearDepthFromTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return linearizeDepth(depth, nearFar);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o$6 = class o extends a$a{constructor(r,o){super(r,"vec2",a$f.Draw,((e,s,t,i)=>e.setUniform2fv(r,o(s,t,i))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const s$2=()=>s$f.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let i$2 = class i{constructor(){this._includedModules=new Map;}include(e,t){if(this._includedModules.has(e)){const r=this._includedModules.get(e);if(r!==t){s$2().error("Shader module included multiple times with different configuration.");const t=new Set;for(const n of Object.keys(r))r[n]!==e[n]&&t.add(n);for(const n of Object.keys(e))r[n]!==e[n]&&t.add(n);t.forEach((t=>console.error(`  ${t}: current ${r[t]} new ${e[t]}`)));}}else this._includedModules.set(e,t),e(this.builder,t);}};let o$5 = class o extends i$2{constructor(){super(...arguments),this.vertex=new u$3,this.fragment=new u$3,this.attributes=new h$1,this.varyings=new m$4,this.extensions=new l$3,this.constants=new _,this.outputs=new d$2;}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),n=this.varyings.generateSource(e),s="vertex"===e?this.vertex:this.fragment,i=s.uniforms.generateSource(),o=s.code.generateSource(),a="vertex"===e?g:f$4,c=this.constants.generateSource().concat(s.constants.generateSource()),u=this.outputs.generateSource(e);return `#version 300 es\n${t.join("\n")}\n\n${a}\n\n${c.join("\n")}\n\n${i.join("\n")}\n\n${r.join("\n")}\n\n${n.join("\n")}\n\n${u.join("\n")}\n\n${o.join("\n")}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const n=e.bind[a$f.Pass];n&&t.set(e.name,n);})),this.fragment.uniforms.entries.forEach((e=>{const n=e.bind[a$f.Pass];n&&t.set(e.name,n);}));const n=Array.from(t.values()),s=n.length;return (t,r)=>{for(let i=0;i<s;++i)n[i](e,t,r);}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const n=e.bind[a$f.Draw];n&&t.set(e.name,n);})),this.fragment.uniforms.entries.forEach((e=>{const n=e.bind[a$f.Draw];n&&t.set(e.name,n);}));const n=Array.from(t.values()),s=n.length;return (t,r,i)=>{for(let o=0;o<s;++o)n[o](e,t,r,i);}}};let a$3 = class a{constructor(){this._entries=new Map;}add(...e){for(const t of e)this._add(t);}get(e){return this._entries.get(e)}_add(t){if(null!=t){if(this._entries.has(t.name)&&!this._entries.get(t.name).equals(t))throw new s$g(`Duplicate uniform name ${t.name} for different uniform type`);this._entries.set(t.name,t);}else s$2().error(`Trying to add null Uniform from ${(new Error).stack}.`);}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}};let c$4 = class c{constructor(){this._entries=new Array;}add(e){this._entries.push(e);}generateSource(){return this._entries}};let u$3 = class u extends i$2{constructor(){super(...arguments),this.uniforms=new a$3,this.code=new c$4,this.constants=new _;}get builder(){return this}};let h$1 = class h{constructor(){this._entries=new Array;}add(e,t){this._entries.push([e,t]);}generateSource(e){return "fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}};let m$4 = class m{constructor(){this._entries=new Map;}add(e,t){this._entries.has(e)&&s$e(this._entries.get(e)===t),this._entries.set(e,t);}generateSource(e){const t=new Array;return this._entries.forEach(((r,n)=>t.push("vertex"===e?`out ${r} ${n};`:`in ${r} ${n};`))),t}};let l$3 = class l{constructor(){this._entries=new Set;}add(e){this._entries.add(e);}generateSource(e){const t="vertex"===e?l.ALLOWLIST_VERTEX:l.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}};l$3.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],l$3.ALLOWLIST_VERTEX=[];let d$2 = class d{constructor(){this._entries=new Map;}add(e,t,r=0){const s=this._entries.get(r);s?s$e(s.name===e&&s.type===t,`Fragment shader output location ${r} occupied`):this._entries.set(r,{name:e,type:t});}generateSource(e){if("vertex"===e)return [];0===this._entries.size&&this._entries.set(0,{name:d.DEFAULT_NAME,type:d.DEFAULT_TYPE});const t=new Array;return this._entries.forEach(((e,r)=>t.push(`layout(location = ${r}) out ${e.type} ${e.name};`))),t}};d$2.DEFAULT_TYPE="vec4",d$2.DEFAULT_NAME="fragColor";class _{constructor(){this._entries=new Set;}add(e,t,r){let n="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":n=_._numberToFloatStr(r);break;case"int":n=_._numberToIntStr(r);break;case"bool":n=r.toString();break;case"vec2":n=`vec2(${_._numberToFloatStr(r[0])},                            ${_._numberToFloatStr(r[1])})`;break;case"vec3":n=`vec3(${_._numberToFloatStr(r[0])},                            ${_._numberToFloatStr(r[1])},                            ${_._numberToFloatStr(r[2])})`;break;case"vec4":n=`vec4(${_._numberToFloatStr(r[0])},                            ${_._numberToFloatStr(r[1])},                            ${_._numberToFloatStr(r[2])},                            ${_._numberToFloatStr(r[3])})`;break;case"ivec2":n=`ivec2(${_._numberToIntStr(r[0])},                             ${_._numberToIntStr(r[1])})`;break;case"ivec3":n=`ivec3(${_._numberToIntStr(r[0])},                             ${_._numberToIntStr(r[1])},                             ${_._numberToIntStr(r[2])})`;break;case"ivec4":n=`ivec4(${_._numberToIntStr(r[0])},                             ${_._numberToIntStr(r[1])},                             ${_._numberToIntStr(r[2])},                             ${_._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":n=`${t}(${Array.prototype.map.call(r,(e=>_._numberToFloatStr(e))).join(", ")})`;}return this._entries.add(`const ${t} ${e} = ${n};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const f$4="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",g="precision highp float;\nprecision highp sampler2D;";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const f$3=4;function u$2(){const u=new o$5,c=u.fragment;u.include(o$7);const m=(f$3+1)/2,p=1/(2*m*m);return c.include(a$4),c.uniforms.add(new s$7("depthMap",(e=>e.depthTexture)),new s$8("tex",(e=>e.colorTexture)),new o$6("blurSize",(e=>e.blurSize)),new o$d("projScale",((r,o)=>{const t=x$4(o.camera.eye,o.camera.center);return t>5e4?Math.max(0,r.projScale-(t-5e4)):r.projScale})),new e$b("nearFar",((e,r)=>r.camera.nearFar))),c.code.add(o$v`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${o$v.float(p)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),u.outputs.add("fragBlur","float"),c.code.add(o$v`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${o$v.int(f$3)}; r <= ${o$v.int(f$3)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),u}const c$3=Object.freeze(Object.defineProperty({__proto__:null,build:u$2},Symbol.toStringTag,{value:"Module"}));

let a$2 = class a extends r$6{initializeProgram(r){return new r$5(r.rctx,a.shader.get().build(),O$6)}initializePipeline(){return S$5({colorWrite:_$6})}};a$2.shader=new t$d(c$3,(()=>__vitePreload(() => Promise.resolve().then(() => SSAOBlur_glsl),true?void 0:void 0,import.meta.url)));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const e$2="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let r$1 = class r extends n$b{constructor(){super(...arguments),this.projScale=1;}};let t$7 = class t extends r$1{constructor(){super(...arguments),this.intensity=1;}};let c$2 = class c extends n$b{};let o$4 = class o extends c$2{constructor(){super(...arguments),this.blurSize=n$e();}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function f$2(r){r.fragment.uniforms.add(new e$6("projInfo",((r,o)=>c$1(o.camera)))),r.fragment.uniforms.add(new e$b("zScale",((r,o)=>m$3(o.camera)))),r.fragment.code.add(o$v`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`);}function c$1(r){const o=r.projectionMatrix;return 0===o[11]?s$j(n$2,2/(r.fullWidth*o[0]),2/(r.fullHeight*o[5]),(1+o[12])/o[0],(1+o[13])/o[5]):s$j(n$2,-2/(r.fullWidth*o[0]),-2/(r.fullHeight*o[5]),(1-o[8])/o[0],(1-o[9])/o[5])}const n$2=n$d();function m$3(o){return 0===o.projectionMatrix[11]?o$y(l$2,0,1):o$y(l$2,1,0)}const l$2=n$e();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const u$1=16;function f$1(){const r=new o$5,f=r.fragment;return r.include(o$7),r.include(f$2),f.include(a$4),f.uniforms.add(new o$d("radius",((e,r)=>d$1(r.camera)))),f.code.add(o$v`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),f.code.add(o$v`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),f.uniforms.add(new e$b("nearFar",((e,r)=>r.camera.nearFar)),new s$7("normalMap",(e=>e.normalTexture)),new s$7("depthMap",(e=>e.depthTexture)),new o$d("projScale",(e=>e.projScale)),new s$7("rnm",(e=>e.noiseTexture)),new e$b("rnmScale",((r,t)=>o$y(m$2,t.camera.fullWidth/r.noiseTexture.descriptor.width,t.camera.fullHeight/r.noiseTexture.descriptor.height))),new o$d("intensity",(e=>e.intensity)),new e$b("screenSize",((r,t)=>o$y(m$2,t.camera.fullWidth,t.camera.fullHeight)))),r.outputs.add("fragOcclusion","float"),f.code.add(o$v`
    void main(void) {
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${o$v.int(u$1)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${o$v.int(u$1)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),r}function d$1(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const m$2=n$e(),v$1=Object.freeze(Object.defineProperty({__proto__:null,build:f$1,getRadius:d$1},Symbol.toStringTag,{value:"Module"}));

let l$1 = class l extends r$6{initializeProgram(e){return new r$5(e.rctx,l.shader.get().build(),O$6)}initializePipeline(){return S$5({colorWrite:_$6})}};l$1.shader=new t$d(v$1,(()=>__vitePreload(() => Promise.resolve().then(() => SSAO_glsl),true?void 0:void 0,import.meta.url)));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var o$3;!function(e){e[e.Antialiasing=0]="Antialiasing",e[e.HighQualityTransparency=1]="HighQualityTransparency",e[e.HighResolutionVoxel=2]="HighResolutionVoxel",e[e.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",e[e.SSAO=4]="SSAO",e[e.WaterReflection=5]="WaterReflection",e[e.HighResolutionShadows=6]="HighResolutionShadows",e[e.PhysicalPixelRendering=7]="PhysicalPixelRendering";}(o$3||(o$3={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const A$1=2;let C=class extends c$5{constructor(e){super(e),this._context=null,this._passParameters=new t$7,this._drawParameters=new o$4,this.produces=new Map([[A$3.SSAO,()=>this._produces()]]);}_getCameraElevation(){return this._context?.renderContext.bindParameters.camera.relativeElevation??1/0}_produces(){return null!=this._enableTime&&null!=this._context&&this._getCameraElevation()<o$9}consumes(){return this._produces()?i$3:t$9}initializeRenderContext(e){this._context=e,this.addHandles([d$e((()=>this.view.qualitySettings.ambientOcclusion||this._context?.isFeatureEnabled(o$3.SSAO)),(e=>e?this._enable():this._disable()),A$6)]);}uninitializeRenderContext(){this._disable(),this._context=null;}_disable(){this._passParameters.noiseTexture=r$d(this._passParameters.noiseTexture),this._enableTime=null;}destroy(){this._disable();}_enable(){if(null!=this._enableTime||!this._context)return;const e=Uint8Array.from(atob(e$2),(e=>e.charCodeAt(0))),t=new e$n;t.wrapMode=D$2.CLAMP_TO_EDGE,t.pixelFormat=G$1.RGB,t.wrapMode=D$2.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new m$a(this._context.renderContext.rctx,t,e),null==this._ssaoTechnique&&(this._ssaoTechnique=this._context.techniqueRepository.acquire(l$1)),null==this._blurTechnique&&(this._blurTechnique=this._context.techniqueRepository.acquire(a$2)),this._enableTime=n$f(0),this._context?.requestRender();}renderNode(e,r,s){const i=e.bindParameters,o=s?.get("normals"),a=o?.getTexture(),n=o?.getTexture(t$r);if(null==this._enableTime||null==this._context||!a||!n)return;if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=e.time,void this._context.requestRender();0===this._enableTime&&(this._enableTime=e.time);const h=e.rctx,p=i.camera,_=this.view.qualitySettings.fadeDuration,d=p.relativeElevation,b=e$o((o$9-d)/(o$9-e$3),0,1),x=_>0?Math.min(_,e.time-this._enableTime)/_:1,f=x*b;this._passParameters.normalTexture=a,this._passParameters.depthTexture=n,this._passParameters.projScale=1/p.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*O$1/d$1(p)**6*f;const T=p.fullViewport[2],w=p.fullViewport[3],S=Math.round(T/A$1),P=Math.round(w/A$1),j=this._context.fbos,v=j.acquire(T,w,"ssao input",R$1.RG);h.unbindTexture(v.fbo.colorTexture),h.bindFramebuffer(v.fbo),h.setViewport(0,0,T,w),h.bindTechnique(this._ssaoTechnique,i,this._passParameters,this._drawParameters),h.screen.draw();const y=j.acquire(S,P,"ssao blur",R$1.RED);h.unbindTexture(y.fbo.colorTexture),h.bindFramebuffer(y.fbo),this._drawParameters.colorTexture=v.getTexture(),o$y(this._drawParameters.blurSize,0,A$1/w),h.bindTechnique(this._blurTechnique,i,this._passParameters,this._drawParameters),h.setViewport(0,0,S,P),h.screen.draw(),v.release();const C=j.acquire(S,P,"ssao",R$1.RED);return h.unbindTexture(C.fbo.colorTexture),h.bindFramebuffer(C.fbo),h.setViewport(0,0,T,w),h.setClearColor(1,1,1,0),h.clear(_$7.COLOR_BUFFER_BIT),this._drawParameters.colorTexture=y.getTexture(),o$y(this._drawParameters.blurSize,A$1/T,0),h.bindTechnique(this._blurTechnique,i,this._passParameters,this._drawParameters),h.setViewport(0,0,S,P),h.screen.draw(),h.setViewport4fv(p.fullViewport),y.release(),x<1&&this._context.requestRender(),C}};e$r([y$5({constructOnly:!0})],C.prototype,"view",void 0),e$r([y$5()],C.prototype,"_context",void 0),C=e$r([c$g("esri.views.3d.webgl-engine.effects.ssao.SSAO")],C);const O$1=.5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function t$6(t,o){const a=t.fragment;o.receiveAmbientOcclusion?(a.uniforms.add(new s$7("ssaoTex",((e,s)=>s.ssao?.getTexture()))),a.constants.add("blurSizePixelsInverse","float",1/A$1),a.code.add(o$v`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):a.code.add(o$v`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function r(n,g){const r=n.fragment,o=void 0!==g.lightingSphericalHarmonicsOrder?g.lightingSphericalHarmonicsOrder:2;0===o?(r.uniforms.add(new e$f("lightingAmbientSH0",((n,t)=>o$r(a$1,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(o$v`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===o?(r.uniforms.add(new e$6("lightingAmbientSH_R",((i,n)=>s$j(m$1,n.lighting.sh.r[0],n.lighting.sh.r[1],n.lighting.sh.r[2],n.lighting.sh.r[3]))),new e$6("lightingAmbientSH_G",((i,n)=>s$j(m$1,n.lighting.sh.g[0],n.lighting.sh.g[1],n.lighting.sh.g[2],n.lighting.sh.g[3]))),new e$6("lightingAmbientSH_B",((i,n)=>s$j(m$1,n.lighting.sh.b[0],n.lighting.sh.b[1],n.lighting.sh.b[2],n.lighting.sh.b[3])))),r.code.add(o$v`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===o&&(r.uniforms.add(new e$f("lightingAmbientSH0",((n,t)=>o$r(a$1,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new e$6("lightingAmbientSH_R1",((i,n)=>s$j(m$1,n.lighting.sh.r[1],n.lighting.sh.r[2],n.lighting.sh.r[3],n.lighting.sh.r[4]))),new e$6("lightingAmbientSH_G1",((i,n)=>s$j(m$1,n.lighting.sh.g[1],n.lighting.sh.g[2],n.lighting.sh.g[3],n.lighting.sh.g[4]))),new e$6("lightingAmbientSH_B1",((i,n)=>s$j(m$1,n.lighting.sh.b[1],n.lighting.sh.b[2],n.lighting.sh.b[3],n.lighting.sh.b[4]))),new e$6("lightingAmbientSH_R2",((i,n)=>s$j(m$1,n.lighting.sh.r[5],n.lighting.sh.r[6],n.lighting.sh.r[7],n.lighting.sh.r[8]))),new e$6("lightingAmbientSH_G2",((i,n)=>s$j(m$1,n.lighting.sh.g[5],n.lighting.sh.g[6],n.lighting.sh.g[7],n.lighting.sh.g[8]))),new e$6("lightingAmbientSH_B2",((i,n)=>s$j(m$1,n.lighting.sh.b[5],n.lighting.sh.b[6],n.lighting.sh.b[7],n.lighting.sh.b[8])))),r.code.add(o$v`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),g.pbrMode!==c$9.Normal&&g.pbrMode!==c$9.Schematic||r.code.add(o$v`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`));}const a$1=n$8(),m$1=n$d();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function t$5(n){n.uniforms.add(new e$f("mainLightDirection",((i,n)=>n.lighting.mainLight.direction)));}function a(n){n.uniforms.add(new e$f("mainLightIntensity",((i,n)=>n.lighting.mainLight.intensity)));}function o$2(i){t$5(i.fragment),a(i.fragment),i.fragment.code.add(o$v`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function t$4(t){const a=t.fragment.code;a.add(o$v`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),a.add(o$v`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),a.add(o$v`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function t$3(t){t.vertex.code.add(o$v`const float PI = 3.141592653589793;`),t.fragment.code.add(o$v`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function n$1(n,r){const l=n.fragment.code;n.include(t$3),r.pbrMode!==c$9.Normal&&r.pbrMode!==c$9.Schematic&&r.pbrMode!==c$9.Simplified&&r.pbrMode!==c$9.TerrainWithWater||(l.add(o$v`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),l.add(o$v`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),r.pbrMode!==c$9.Normal&&r.pbrMode!==c$9.Schematic||(n.include(t$4),l.add(o$v`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),l.add(o$v`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),l.add(o$v`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),l.add(o$v`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let s$1 = class s extends a$a{constructor(o,s){super(o,"bool",a$f.Pass,((r,e,t)=>r.setUniform1b(o,s(e,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const l=.4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function u(i){i.constants.add("ambientBoostFactor","float",l);}function h(i){i.uniforms.add(new o$d("lightingGlobalFactor",((i,n)=>n.lighting.globalFactor)));}function p(g,p){const v=g.fragment;switch(g.include(t$6,p),p.pbrMode!==c$9.Disabled&&g.include(n$1,p),g.include(r,p),g.include(t$3),v.code.add(o$v`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${p.pbrMode===c$9.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),u(v),h(v),t$5(v),v.code.add(o$v`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${p.spherical?o$v`normalize(vPosWorld)`:o$v`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),a(v),v.code.add(o$v`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),p.pbrMode){case c$9.Disabled:case c$9.WaterOnIntegratedMesh:case c$9.Water:g.include(o$2),v.code.add(o$v`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case c$9.Normal:case c$9.Schematic:v.code.add(o$v`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),v.code.add(o$v`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),p.useFillLights?v.uniforms.add(new s$1("hasFillLights",((i,n)=>n.enableFillLights))):v.constants.add("hasFillLights","bool",!1),v.code.add(o$v`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),v.uniforms.add(new o$d("lightingSpecularStrength",((i,n)=>n.lighting.mainLight.specularStrength)),new o$d("lightingEnvironmentStrength",((i,n)=>n.lighting.mainLight.environmentStrength))),v.code.add(o$v`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),v.code.add(o$v`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${p.pbrMode!==c$9.Schematic||p.hasColorTexture?o$v`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:o$v`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case c$9.Simplified:case c$9.TerrainWithWater:g.include(o$2),v.code.add(o$v`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:n$a(p.pbrMode);case c$9.COUNT:}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function o$1(o,n){if(!n.multipassEnabled)return;o.fragment.include(t$8),o.fragment.uniforms.add(new s$7("terrainDepthTexture",((e,r)=>r.multipassTerrain.linearDepth?.getTexture())),new e$b("nearFar",((e,r)=>r.camera.nearFar)));const s=n.occlusionPass;o.fragment.code.add(o$v`
   ${s?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      vec4 data = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);
      float linearDepth = linearDepthFromRGBA(data, nearFar);
      ${s?o$v`return fragmentDepth < linearDepth && data != vec4(0.0, 0.0, 0.0, 1.0);`:o$v`
          if(fragmentDepth ${n.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class o extends a$a{constructor(r,o,s){super(r,"mat4",a$f.Draw,((e,s,t,i)=>e.setUniformMatrix4fv(r,o(s,t,i))),s);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let e$1 = class e extends a$a{constructor(r,e,o){super(r,"mat4",a$f.Pass,((s,o,t)=>s.setUniformMatrix4fv(r,e(o,t))),o);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function m(e,s){s.receiveShadows&&(e.fragment.uniforms.add(new e$1("shadowMapMatrix",((e,s)=>s.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e));}function x(e,s){s.receiveShadows&&(e.fragment.uniforms.add(new o("shadowMapMatrix",((e,s)=>s.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e));}function f(e){const s=e.fragment;s.include(a$7),s.uniforms.add(new s$7("shadowMap",((e,s)=>s.shadowMap.depthTexture)),new e$8("numCascades",((e,s)=>s.shadowMap.numCascades)),new e$6("cascadeDistances",((e,s)=>s.shadowMap.cascadeDistances))),s.code.add(o$v`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function t$2(e,t){t.hasColorTextureTransform?(e.vertex.uniforms.add(new e$e("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??o$x))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(o$v`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o$v`void forwardColorUV(){}`);}function s(t,s){s.hasNormalTextureTransform&&s.textureCoordinateType!==d$a.None?(t.vertex.uniforms.add(new e$e("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??o$x))),t.varyings.add("normalUV","vec2"),t.vertex.code.add(o$v`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(o$v`void forwardNormalUV(){}`);}function i$1(t,s){s.hasEmissionTextureTransform&&s.textureCoordinateType!==d$a.None?(t.vertex.uniforms.add(new e$e("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??o$x))),t.varyings.add("emissiveUV","vec2"),t.vertex.code.add(o$v`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(o$v`void forwardEmissiveUV(){}`);}function d(t,s){s.hasOcclusionTextureTransform&&s.textureCoordinateType!==d$a.None?(t.vertex.uniforms.add(new e$e("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??o$x))),t.varyings.add("occlusionUV","vec2"),t.vertex.code.add(o$v`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(o$v`void forwardOcclusionUV(){}`);}function n(t,s){s.hasMetallicRoughnessTextureTransform&&s.textureCoordinateType!==d$a.None?(t.vertex.uniforms.add(new e$e("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??o$x))),t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.code.add(o$v`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(o$v`void forwardMetallicRoughnessUV(){}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e(e){e.code.add(o$v`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function i(i){i.include(e),i.code.add(o$v`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${o$v.int(n$c.Multiply)}) {
        return allMixed;
      }
      if (mode == ${o$v.int(n$c.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o$v.int(n$c.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${o$v.int(n$c.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o$v.int(n$c.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function H$1(H){const J=new o$5,{vertex:K,fragment:Q,varyings:X}=J;if(d$6(K,H),J.include(o$j),X.add("vpos","vec3"),J.include(l$5,H),J.include(N$2,H),J.include(a$8,H),J.include(t$2,H),H.output===o$m.Color||H.output===o$m.Alpha){J.include(s,H),J.include(i$1,H),J.include(d,H),J.include(n,H),f$6(K,H),J.include(t$g,H),J.include(o$e,H);const o=H.normalType===a$b.Attribute||H.normalType===a$b.Compressed;o&&H.offsetBackfaces&&J.include(e$a),J.include(T$1,H),J.include(n$5,H),H.instancedColor&&J.attributes.add(e$k.INSTANCECOLOR,"vec4"),X.add("vPositionLocal","vec3"),J.include(o$l,H),J.include(d$7,H),J.include(i$5,H),J.include(e$7,H),K.uniforms.add(new e$6("externalColor",(e=>e.externalColor))),X.add("vcolorExt","vec4"),H.multipassEnabled&&X.add("depth","float"),K.code.add(o$v`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${H.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${o$v.float(t$e)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${o?o$v`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${H.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${o&&H.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${H.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `);}switch(H.output){case o$m.Alpha:J.include(P$1,H),J.include(s$3,H),J.include(o$1,H),Q.uniforms.add(new o$d("opacity",(e=>e.opacity)),new o$d("layerOpacity",(e=>e.layerOpacity))),H.hasColorTexture&&Q.uniforms.add(new s$7("tex",(e=>e.texture))),Q.include(i),Q.code.add(o$v`
      void main() {
        discardBySlice(vpos);
        ${H.multipassEnabled?"terrainDepthTest(depth);":""}
        ${H.hasColorTexture?o$v`
                vec4 texColor = texture(tex, ${H.hasColorTextureTransform?o$v`colorUV`:o$v`vuv0`});
                ${H.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:o$v`vec4 texColor = vec4(1.0);`}
        ${H.hasVertexColors?o$v`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o$v`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case o$m.Color:J.include(P$1,H),J.include(p,H),J.include(t$6,H),J.include(s$3,H),J.include(H.instancedDoublePrecision?m:x,H),J.include(o$1,H),f$6(Q,H),Q.uniforms.add(K.uniforms.get("localOrigin"),new e$f("ambient",(e=>e.ambient)),new e$f("diffuse",(e=>e.diffuse)),new o$d("opacity",(e=>e.opacity)),new o$d("layerOpacity",(e=>e.layerOpacity))),H.hasColorTexture&&Q.uniforms.add(new s$7("tex",(e=>e.texture))),J.include(l$9,H),J.include(n$1,H),Q.include(i),J.include(e$h,H),u(Q),h(Q),a(Q),Q.code.add(o$v`
      void main() {
        discardBySlice(vpos);
        ${H.multipassEnabled?"terrainDepthTest(depth);":""}
        ${H.hasColorTexture?o$v`
                vec4 texColor = texture(tex, ${H.hasColorTextureTransform?o$v`colorUV`:o$v`vuv0`});
                ${H.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:o$v`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${H.normalType===a$b.ScreenDerivative?o$v`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:o$v`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${H.pbrMode===c$9.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${H.receiveShadows?"readShadowMap(vpos, linearDepth)":H.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${H.hasVertexColors?o$v`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o$v`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${H.hasNormalTexture?o$v`
                mat3 tangentSpace = ${H.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${H.hasNormalTextureTransform?o$v`normalUV`:"vuv0"});`:o$v`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${H.spherical?o$v`normalize(posWorld);`:o$v`vec3(0.0, 0.0, 1.0);`}

        ${H.snowCover?o$v`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${H.pbrMode===c$9.Normal||H.pbrMode===c$9.Schematic?o$v`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${H.snowCover?o$v`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:o$v`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${H.transparencyPassType===o$z.Color?o$v`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `);}return J.include(h$2,H),J}const J=Object.freeze(Object.defineProperty({__proto__:null,build:H$1},Symbol.toStringTag,{value:"Module"}));

let N$1 = class N extends f$8{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=e$s(r$4),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=e$t.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=r$e(0,0,0),this.instancedDoublePrecision=!1,this.normalType=a$b.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=r$e(.2,.2,.2),this.diffuse=r$e(.8,.8,.8),this.externalColor=r$g(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=n$8(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=n$g.Less,this.textureAlphaMode=s$k.Blend,this.textureAlphaCutoff=o$h,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=h$7.Occlude,this.isDecoration=!1;}};let q$1 = class q extends r$6{initializeConfiguration(e,t){t.spherical=e.viewingMode===l$g.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?d$a.Default:d$a.None,t.objectAndLayerIdColorInstanced=t.instanced;}initializeProgram(e){return this._initializeProgram(e,q.shader)}_initializeProgram(e,t){return new r$5(e.rctx,t.get().build(this.configuration),O$6)}_convertDepthTestFunction(e){return e===n$g.Lequal?O$9.LEQUAL:O$9.LESS}_makePipeline(e,t){const i=this.configuration,r=e===o$z.NONE,s=e===o$z.FrontFace;return S$5({blending:i.output!==o$m.Color&&i.output!==o$m.Alpha||!i.transparent?null:r?c$h:A$7(e),culling:z$1(i)?h$c(i.cullFace):null,depthTest:{func:l$k(e,this._convertDepthTestFunction(i.customDepthTest))},depthWrite:(r||s)&&i.writeDepth?o$A:null,colorWrite:_$6,stencilWrite:i.hasOccludees?e$c:null,stencilTest:i.hasOccludees?t?o$g:f$7:null,polygonOffset:r||s?null:a$i(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};function z$1(e){return e.cullFace!==e$t.None||!e.hasSlicePlane&&(!e.transparent&&!e.doubleSidedMode)}q$1.shader=new t$d(J,(()=>__vitePreload(() => Promise.resolve().then(() => DefaultMaterial_glsl),true?void 0:void 0,import.meta.url)));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t$1 = class t extends O$2{};e$r([r$3({constValue:!0})],t$1.prototype,"hasSliceHighlight",void 0),e$r([r$3({constValue:!1})],t$1.prototype,"hasSliceInVertexProgram",void 0),e$r([r$3({constValue:a$f.Pass})],t$1.prototype,"pbrTextureBindType",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class c extends t$1{constructor(){super(...arguments),this.output=o$m.Color,this.alphaDiscardMode=s$k.Opaque,this.doubleSidedMode=i$7.None,this.pbrMode=c$9.Disabled,this.cullFace=e$t.None,this.transparencyPassType=o$z.NONE,this.normalType=a$b.Attribute,this.textureCoordinateType=d$a.None,this.customDepthTest=n$g.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1;}}e$r([r$3({count:o$m.COUNT})],c.prototype,"output",void 0),e$r([r$3({count:s$k.COUNT})],c.prototype,"alphaDiscardMode",void 0),e$r([r$3({count:i$7.COUNT})],c.prototype,"doubleSidedMode",void 0),e$r([r$3({count:c$9.COUNT})],c.prototype,"pbrMode",void 0),e$r([r$3({count:e$t.COUNT})],c.prototype,"cullFace",void 0),e$r([r$3({count:o$z.COUNT})],c.prototype,"transparencyPassType",void 0),e$r([r$3({count:a$b.COUNT})],c.prototype,"normalType",void 0),e$r([r$3({count:d$a.COUNT})],c.prototype,"textureCoordinateType",void 0),e$r([r$3({count:n$g.COUNT})],c.prototype,"customDepthTest",void 0),e$r([r$3()],c.prototype,"spherical",void 0),e$r([r$3()],c.prototype,"hasVertexColors",void 0),e$r([r$3()],c.prototype,"hasSymbolColors",void 0),e$r([r$3()],c.prototype,"hasVerticalOffset",void 0),e$r([r$3()],c.prototype,"hasSlicePlane",void 0),e$r([r$3()],c.prototype,"hasSliceHighlight",void 0),e$r([r$3()],c.prototype,"hasColorTexture",void 0),e$r([r$3()],c.prototype,"hasMetallicRoughnessTexture",void 0),e$r([r$3()],c.prototype,"hasEmissionTexture",void 0),e$r([r$3()],c.prototype,"hasOcclusionTexture",void 0),e$r([r$3()],c.prototype,"hasNormalTexture",void 0),e$r([r$3()],c.prototype,"hasScreenSizePerspective",void 0),e$r([r$3()],c.prototype,"hasVertexTangents",void 0),e$r([r$3()],c.prototype,"hasOccludees",void 0),e$r([r$3()],c.prototype,"multipassEnabled",void 0),e$r([r$3()],c.prototype,"hasModelTransformation",void 0),e$r([r$3()],c.prototype,"offsetBackfaces",void 0),e$r([r$3()],c.prototype,"vvSize",void 0),e$r([r$3()],c.prototype,"vvColor",void 0),e$r([r$3()],c.prototype,"receiveShadows",void 0),e$r([r$3()],c.prototype,"receiveAmbientOcclusion",void 0),e$r([r$3()],c.prototype,"textureAlphaPremultiplied",void 0),e$r([r$3()],c.prototype,"instanced",void 0),e$r([r$3()],c.prototype,"instancedColor",void 0),e$r([r$3()],c.prototype,"objectAndLayerIdColorInstanced",void 0),e$r([r$3()],c.prototype,"instancedDoublePrecision",void 0),e$r([r$3()],c.prototype,"doublePrecisionRequiresObfuscation",void 0),e$r([r$3()],c.prototype,"writeDepth",void 0),e$r([r$3()],c.prototype,"transparent",void 0),e$r([r$3()],c.prototype,"enableOffset",void 0),e$r([r$3()],c.prototype,"cullAboveGround",void 0),e$r([r$3()],c.prototype,"snowCover",void 0),e$r([r$3()],c.prototype,"hasColorTextureTransform",void 0),e$r([r$3()],c.prototype,"hasEmissionTextureTransform",void 0),e$r([r$3()],c.prototype,"hasNormalTextureTransform",void 0),e$r([r$3()],c.prototype,"hasOcclusionTextureTransform",void 0),e$r([r$3()],c.prototype,"hasMetallicRoughnessTextureTransform",void 0),e$r([r$3({constValue:!1})],c.prototype,"occlusionPass",void 0),e$r([r$3({constValue:!0})],c.prototype,"hasVvInstancing",void 0),e$r([r$3({constValue:!1})],c.prototype,"useCustomDTRExponentForWater",void 0),e$r([r$3({constValue:!1})],c.prototype,"supportsTextureAtlas",void 0),e$r([r$3({constValue:!0})],c.prototype,"useFillLights",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function I$1(I){const R=new o$5,{vertex:z,fragment:k,varyings:U}=R;return d$6(z,I),R.include(o$j),U.add("vpos","vec3"),R.include(l$5,I),R.include(N$2,I),R.include(a$8,I),I.output!==o$m.Color&&I.output!==o$m.Alpha||(f$6(R.vertex,I),R.include(t$g,I),R.include(o$e,I),I.offsetBackfaces&&R.include(e$a),I.instancedColor&&R.attributes.add(e$k.INSTANCECOLOR,"vec4"),U.add("vNormalWorld","vec3"),U.add("localvpos","vec3"),I.multipassEnabled&&U.add("depth","float"),R.include(o$l,I),R.include(d$7,I),R.include(i$5,I),R.include(e$7,I),z.uniforms.add(new e$6("externalColor",(e=>e.externalColor))),U.add("vcolorExt","vec4"),z.code.add(o$v`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${I.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${o$v.float(t$e)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${I.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${I.multipassEnabled?o$v`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),I.output===o$m.Alpha&&(R.include(P$1,I),R.include(s$3,I),R.include(o$1,I),k.uniforms.add(new o$d("opacity",(e=>e.opacity)),new o$d("layerOpacity",(e=>e.layerOpacity))),I.hasColorTexture&&k.uniforms.add(new s$7("tex",(e=>e.texture))),k.include(i),k.code.add(o$v`
      void main() {
        discardBySlice(vpos);
        ${I.multipassEnabled?o$v`terrainDepthTest(depth);`:""}
        ${I.hasColorTexture?o$v`
                vec4 texColor = texture(tex, ${I.hasColorTextureTransform?o$v`colorUV`:o$v`vuv0`});
                ${I.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:o$v`vec4 texColor = vec4(1.0);`}
        ${I.hasVertexColors?o$v`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o$v`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),I.output===o$m.Color&&(R.include(P$1,I),R.include(p,I),R.include(t$6,I),R.include(s$3,I),R.include(I.instancedDoublePrecision?m:x,I),R.include(o$1,I),f$6(R.fragment,I),t$5(k),u(k),h(k),k.uniforms.add(z.uniforms.get("localOrigin"),z.uniforms.get("view"),new e$f("ambient",(e=>e.ambient)),new e$f("diffuse",(e=>e.diffuse)),new o$d("opacity",(e=>e.opacity)),new o$d("layerOpacity",(e=>e.layerOpacity))),I.hasColorTexture&&k.uniforms.add(new s$7("tex",(e=>e.texture))),R.include(l$9,I),R.include(n$1,I),k.include(i),a(k),k.code.add(o$v`
      void main() {
        discardBySlice(vpos);
        ${I.multipassEnabled?o$v`terrainDepthTest(depth);`:""}
        ${I.hasColorTexture?o$v`
                vec4 texColor = texture(tex, ${I.hasColorTextureTransform?o$v`colorUV`:o$v`vuv0`});
                ${I.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:o$v`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${I.pbrMode===c$9.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${I.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":I.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${I.hasVertexColors?o$v`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o$v`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${I.snowCover?o$v`albedo = mix(albedo, vec3(1), 0.9);`:o$v``}
        ${o$v`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${I.pbrMode===c$9.Normal||I.pbrMode===c$9.Schematic?I.spherical?o$v`vec3 normalGround = normalize(vpos + localOrigin);`:o$v`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:o$v``}
        ${I.pbrMode===c$9.Normal||I.pbrMode===c$9.Schematic?o$v`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${I.snowCover?o$v`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:o$v`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${I.transparencyPassType===o$z.Color?o$v`fragColor = premultiplyAlpha(fragColor);`:o$v``}
      }
    `)),R.include(h$2,I),R}const R=Object.freeze(Object.defineProperty({__proto__:null,build:I$1},Symbol.toStringTag,{value:"Module"}));

class t extends q$1{initializeConfiguration(i,a){super.initializeConfiguration(i,a),a.hasMetallicRoughnessTexture=!1,a.hasEmissionTexture=!1,a.hasOcclusionTexture=!1,a.hasNormalTexture=!1,a.hasModelTransformation=!1,a.normalType=a$b.Attribute,a.doubleSidedMode=i$7.WindingOrder,a.hasVertexTangents=!1;}initializeProgram(e){return this._initializeProgram(e,t.shader)}}t.shader=new t$d(R,(()=>__vitePreload(() => Promise.resolve().then(() => RealisticTree_glsl),true?void 0:void 0,import.meta.url)));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let E$1 = class E extends c$7{constructor(e){super(e,D),this.supportsEdges=!0,this.produces=new Map([[A$3.OPAQUE_MATERIAL,e=>(n$6(e)||t$h(e))&&!this.parameters.transparent],[A$3.TRANSPARENT_MATERIAL,e=>(n$6(e)||t$h(e))&&this.parameters.transparent&&this.parameters.writeDepth],[A$3.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>(n$6(e)||t$h(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new c,this._vertexBufferLayout=N(this.parameters);}isVisibleForOutput(e){return e!==o$m.Shadow&&e!==o$m.ShadowExcludeHighlight&&e!==o$m.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return !1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:s,vvColor:a}=e,i="replace"===e.colorMixMode,o=e.opacity>0,n=e.externalColor&&e.externalColor[3]>0,h=t||a||s;return r&&h?i||o:r?i?n:o:h?i||o:i?n:o}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?e$t.None:this.parameters.cullFace,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e!==o$m.Color&&e!==o$m.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=i$7.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?i$7.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?i$7.WindingOrder:i$7.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=this.parameters.receiveAmbientOcclusion&&null!=t.ssao,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?c$9.Schematic:c$9.Normal:c$9.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<S$6,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(h,l,u,m,p,f){if(null!=this.parameters.verticalOffset){const h=u.camera;o$r(H,l[12],l[13],l[14]);let f=null;switch(u.viewingMode){case l$g.Global:f=z$3(G,H);break;case l$g.Local:f=r$h(G,z);}let d=0;const g=e$q(W,H,h.eye),T=s$i(g),_=g$5(g,g,1/T);let x=null;this.parameters.screenSizePerspective&&(x=P$3(f,_)),d+=L$1(h,T,this.parameters.verticalOffset,x??0,this.parameters.screenSizePerspective),g$5(f,f,d),S$7(k$1,f,u.transform.inverseRotation),m=e$q(V,m,k$1),p=e$q(B,p,k$1);}h$8(h,u,m,p,d$8(u.verticalOffset),f);}createGLMaterial(e){return new j$1(e)}createBufferWriter(){return new r$7(this._vertexBufferLayout)}};let j$1 = class j extends u$6{constructor(e){super({...e,...e.material.parameters});}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled});}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees});}beginSlot(t$1){this._output!==o$m.Color&&this._output!==o$m.Alpha||(this._updateShadowState(t$1),this._updateOccludeeState(t$1));const r=this._material.parameters;this.updateTexture(r.textureId);const s=t$1.camera.viewInverseTransposeMatrix;return o$r(r.origin,s[3],s[7],s[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(r.treeRendering?t:q$1,t$1)}};class L extends N$1{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1;}}const D=new L;function N(e){const t=H$4().vec3f(e$k.POSITION);e.normalType===a$b.Compressed?t.vec2i16(e$k.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(e$k.NORMAL),e.hasVertexTangents&&t.vec4f(e$k.TANGENT);return (e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(e$k.UV0),e.hasVertexColors&&t.vec4u8(e$k.COLOR),e.hasSymbolColors&&t.vec4u8(e$k.SYMBOLCOLOR),has("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(e$k.OBJECTANDLAYERIDCOLOR),t}const V=n$8(),B=n$8(),z=r$e(0,0,1),G=n$8(),k$1=n$8(),H=n$8(),W=n$8();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const v=()=>s$f.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function A(e,t){const n=await j(e,t),s=await E(n.textureDefinitions??{},t);let a=0;for(const r in s)if(s.hasOwnProperty(r)){const e=s[r];a+=e?.image?e.image.width*e.image.height*4:0;}return {resource:n,textures:s,size:a+e$u(n)}}async function j(r,n){const s=n?.streamDataRequester;if(s)return I(r,s,n);const a=await _$8(U$3(r,n));if(!0===a.ok)return a.value.data;a$j(a.error),P(a.error);}async function I(e,r,n){const s=await _$8(r.request(e,"json",n));if(!0===s.ok)return s.value;a$j(s.error),P(s.error.details.url);}function P(e){throw new s$g("",`Request for object resource failed: ${e}`)}function M(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(v().warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(v().warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(v().warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(v().warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1);}}else v().warn("Indexed geometries must specify faces"),n=!1;break}default:v().warn(`Unsupported topology '${r}'`),n=!1;}e.params.material||(v().warn("Geometry requires material"),n=!1);const s=e.params.vertexAttributes;for(const a in s){s[a].values||(v().warn("Geometries with externally defined attributes are not yet supported"),n=!1);}return n}function T(e,t){const r=new Array,n=new Array,s=new Array,o=new t$t,u=e.resource,c=r$i.parse(u.version||"1.0","wosr");q.validate(c);const p=u.model.name,g=u.model.geometries,h=u.materialDefinitions??{},v=e.textures;let A=0;const j=new Map;for(let a=0;a<g.length;a++){const e=g[a];if(!M(e))continue;const i=k(e),u=e.params.vertexAttributes,c=[],p=t=>{if("PerAttributeArray"===e.params.topology)return null;const r=e.params.faces;for(const e in r)if(e===t)return r[e].values;return null},I=u[e$k.POSITION],P=I.values.length/I.valuesPerElement;for(const t in u){const e=u[t],r=e.values,n=p(t)??l$e(P);c.push([t,new t$s(r,n,e.valuesPerElement,!0)]);}const T=i.texture,U=v&&v[T];if(U&&!j.has(T)){const{image:e,parameters:t}=U,r=new N$5(e,t);n.push(r),j.set(T,r);}const E=j.get(T),q=E?E.id:void 0,R=i.material;let B=o.get(R,T);if(null==B){const e=h[R.substring(R.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=U&&U.alphaChannelUsage,n=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,s=U?O(U.alphaChannelUsage):void 0,a={ambient:e$s(e.diffuse),diffuse:e$s(e.diffuse),opacity:1-(e.transparency||0),transparent:n,textureAlphaMode:s,textureAlphaCutoff:.33,textureId:q,initTextureTransparent:!0,doubleSided:!0,cullFace:e$t.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:U?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(a,t.materialParameters),B=new E$1(a),o.set(R,T,B);}s.push(B);const C=new I$4(B,c);A+=c.find((e=>e[0]===e$k.POSITION))?.[1]?.indices.length??0,r.push(C);}return {engineResources:[{name:p,stageResources:{textures:n,materials:s,geometries:r},pivotOffset:u.model.pivotOffset,numberOfVertices:A,lodThreshold:null}],referenceBoundingBox:U(r)}}function U(e){const t=P$4();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&(h$d(t,r.bbMin),h$d(t,r.bbMax));})),t}async function E(e,t){const r=new Array;for(const a in e){const n=e[a],s=n.images[0].data;if(!s){v().warn("Externally referenced texture data is not yet supported");continue}const o=n.encoding+";base64,"+s,i="/textureDefinitions/"+a,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",u={noUnpackFlip:!0,wrap:{s:D$2.REPEAT,t:D$2.REPEAT},preMultiplyAlpha:O(l)!==s$k.Opaque},c=null!=t&&t.disableTextures?Promise.resolve(null):t$p(o,t);r.push(c.then((e=>({refId:i,image:e,parameters:u,alphaChannelUsage:l}))));}const n=await Promise.all(r),s={};for(const a of n)s[a.refId]=a;return s}function O(e){switch(e){case"mask":return s$k.Mask;case"maskAndTransparency":return s$k.MaskBlend;case"none":return s$k.Opaque;default:return s$k.Blend}}function k(e){const t=e.params;return {id:1,material:t.material,texture:t.texture,region:t.texture}}const q=new r$i(1,2,"wosr");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function Y(t,r){const o=Z(a$k(t));if("wosr"===o.fileType){const e=await(r.cache?r.cache.loadWOSR(o.url,r):A(o.url,r)),{engineResources:t,referenceBoundingBox:s}=T(e,r);return {lods:t,referenceBoundingBox:s,isEsriSymbolResource:!1,isWosr:!0}}const s=await(r.cache?r.cache.loadGLTF(o.url,r,!!r.usePBR):l$l(new n$h(r.streamDataRequester),o.url,r,r.usePBR)),i=s.model.meta?.ESRI_proxyEllipsoid,n=s.meta.isEsriSymbolResource&&null!=i&&"EsriRealisticTreesStyle"===s.meta.ESRI_webstyle;n&&!s.customMeta.esriTreeRendering&&(s.customMeta.esriTreeRendering=!0,ie(s,i));const l=!!r.usePBR,a=s.meta.isEsriSymbolResource?{usePBR:l,isSchematic:!1,treeRendering:n,mrrFactors:[...o$f]}:{usePBR:l,isSchematic:!1,treeRendering:!1,mrrFactors:[...r$4]},u={...r.materialParameters,treeRendering:n},{engineResources:c,referenceBoundingBox:m}=ee(s,a,u,r.skipHighLods&&null==o.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:o.specifiedLodIndex});return {lods:c,referenceBoundingBox:m,isEsriSymbolResource:s.meta.isEsriSymbolResource,isWosr:!1}}function Z(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);if(t)return {fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null};return e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function ee(e,t,r,o){const s=e.model,i=new Array,n=new Map,l=new Map,a=s.lods.length,u=P$4();return s.lods.forEach(((e,c)=>{const m=!0===o.skipHighLods&&(a>1&&0===c||a>3&&1===c)||!1===o.skipHighLods&&null!=o.singleLodIndex&&c!==o.singleLodIndex;if(m&&0!==c)return;const f=new t$j(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const o=m?new E$1({}):te(s,e,f,t,r,n,l),{geometry:i,vertexCount:a}=re(e,null!=o?o:new E$1({})),d=i.boundingInfo;null!=d&&0===c&&(h$d(u,d.bbMin),h$d(u,d.bbMax)),null!=o&&(f.stageResources.geometries.push(i),f.numberOfVertices+=a);})),m||i.push(f);})),{engineResources:i,referenceBoundingBox:u}}function te(e,t,r,o,s,n,l){const a=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),u=e.materials.get(t.material),c=null!=t.attributes.texCoord0,m=null!=t.attributes.normal;if(null==u)return null;const f=se(u.alphaMode);if(!n.has(a)){if(c){const t=(t,r=!1)=>{if(null!=t&&!l.has(t)){const o=e.textures.get(t);if(null!=o){const e=o.data;l.set(t,new N$5(r$k(e)?e.data:e,{...o.parameters,preMultiplyAlpha:!r$k(e)&&r,encoding:r$k(e)&&null!=e.encoding?e.encoding:void 0}));}}};t(u.textureColor,f!==s$k.Opaque),t(u.textureNormal),t(u.textureOcclusion),t(u.textureEmissive),t(u.textureMetallicRoughness);}const r=u.color[0]**(1/o$B),d=u.color[1]**(1/o$B),p=u.color[2]**(1/o$B),g=u.emissiveFactor[0]**(1/o$B),x=u.emissiveFactor[1]**(1/o$B),b=u.emissiveFactor[2]**(1/o$B),h=null!=u.textureColor&&c?l.get(u.textureColor):null,T=u$4({normalTexture:u.textureNormal,metallicRoughnessTexture:u.textureMetallicRoughness,metallicFactor:u.metallicFactor,roughnessFactor:u.roughnessFactor,emissiveTexture:u.textureEmissive,emissiveFactor:u.emissiveFactor,occlusionTexture:u.textureOcclusion}),w=null!=u.normalTextureTransform?.scale?u.normalTextureTransform?.scale:l$j;n.set(a,new E$1({...o,transparent:f===s$k.Blend,customDepthTest:n$g.Lequal,textureAlphaMode:f,textureAlphaCutoff:u.alphaCutoff,diffuse:[r,d,p],ambient:[r,d,p],opacity:u.opacity,doubleSided:u.doubleSided,doubleSidedType:"winding-order",cullFace:u.doubleSided?e$t.None:e$t.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:m?a$b.Attribute:a$b.ScreenDerivative,castShadows:!0,receiveShadows:u.receiveShadows,receiveAmbientOcclusion:u.receiveAmbientOcclustion,textureId:null!=h?h.id:void 0,colorMixMode:u.colorMixMode,normalTextureId:null!=u.textureNormal&&c?l.get(u.textureNormal).id:void 0,textureAlphaPremultiplied:null!=h&&!!h.parameters.preMultiplyAlpha,occlusionTextureId:null!=u.textureOcclusion&&c?l.get(u.textureOcclusion).id:void 0,emissiveTextureId:null!=u.textureEmissive&&c?l.get(u.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=u.textureMetallicRoughness&&c?l.get(u.textureMetallicRoughness).id:void 0,emissiveFactor:[g,x,b],mrrFactors:T?[...t$c]:[u.metallicFactor,u.roughnessFactor,o.mrrFactors[2]],isSchematic:T,colorTextureTransformMatrix:s$d(u.colorTextureTransform),normalTextureTransformMatrix:s$d(u.normalTextureTransform),scale:[w[0],w[1]],occlusionTextureTransformMatrix:s$d(u.occlusionTextureTransform),emissiveTextureTransformMatrix:s$d(u.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:s$d(u.metallicRoughnessTextureTransform),...s}));}const d=n.get(a);if(r.stageResources.materials.push(d),c){const e=e=>{null!=e&&r.stageResources.textures.push(l.get(e));};e(u.textureColor),e(u.textureNormal),e(u.textureOcclusion),e(u.textureEmissive),e(u.textureMetallicRoughness);}return d}function re(e,r){const o=e.attributes.position.count,s=o$C(e.indices||o,e.primitiveType),i=t$k(3*o),{typedBuffer:n,typedBufferStride:l}=e.attributes.position;r$j(i,n,e.transform,3,l);const a=[[e$k.POSITION,new t$s(i,s,3,!0)]];if(null!=e.attributes.normal){const r=t$k(3*o),{typedBuffer:i,typedBufferStride:n}=e.attributes.normal;j$3(oe,e.transform),n$i(r,i,oe,3,n),a.push([e$k.NORMAL,new t$s(r,s,3,!0)]);}if(null!=e.attributes.tangent){const r=t$k(4*o),{typedBuffer:i,typedBufferStride:n}=e.attributes.tangent;j$3(oe,e.transform),f$d(r,i,oe,4,n),a.push([e$k.TANGENT,new t$s(r,s,4,!0)]);}if(null!=e.attributes.texCoord0){const t=t$k(2*o),{typedBuffer:r,typedBufferStride:i}=e.attributes.texCoord0;n$j(t,r,2,i),a.push([e$k.UV0,new t$s(t,s,2,!0)]);}if(null!=e.attributes.color){const t=new Uint8Array(4*o);4===e.attributes.color.elementCount?e.attributes.color instanceof c$f?u$g(t,e.attributes.color,255):e.attributes.color instanceof x$3?t$u(t,e.attributes.color):e.attributes.color instanceof L$4&&u$g(t,e.attributes.color,1/256):(t.fill(255),e.attributes.color instanceof i$h?u$h(t,e.attributes.color,255,4):e.attributes.color instanceof O$a?t$v(t,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof E$8&&u$h(t,e.attributes.color,1/256,4)),a.push([e$k.COLOR,new t$s(t,s,4,!0)]);}return {geometry:new I$4(r,a),vertexCount:o}}const oe=e$m();function se(e){switch(e){case"BLEND":return s$k.Blend;case"MASK":return s$k.Mask;case"OPAQUE":case null:case void 0:return s$k.Opaque}}function ie(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];for(const d of i.parts){const i=d.attributes.normal;if(null==i)return;const p=d.attributes.position,g=p.count,x=n$8(),h=n$8(),w=n$8(),y=new Uint8Array(4*g),v=new Float64Array(3*g),R=h$e(e$p(),d.transform);let j=0,M=0;for(let o=0;o<g;o++){p.getVec(o,h),i.getVec(o,x),O$7(h,h,d.transform),e$q(w,h,t.center),i$j(w,w,t.radius);const s=w[2],f=s$i(w),g=Math.min(.45+.55*f*f,1);i$j(w,w,t.radius),null!==R&&O$7(w,w,R),z$3(w,w),r+1!==e.model.lods.length&&e.model.lods.length>1&&A$8(w,w,x,s>-1?.2:Math.min(-4*s-3.8,1)),v[j]=w[0],v[j+1]=w[1],v[j+2]=w[2],j+=3,y[M]=255*g,y[M+1]=255*g,y[M+2]=255*g,y[M+3]=255,M+=4;}d.attributes.normal=new i$h(v),d.attributes.color=new x$3(y);}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/

const SSAOBlur_glsl = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  build: u$2
}, Symbol.toStringTag, { value: 'Module' }));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/

const SSAO_glsl = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  build: f$1,
  getRadius: d$1
}, Symbol.toStringTag, { value: 'Module' }));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/

const DefaultMaterial_glsl = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  build: H$1
}, Symbol.toStringTag, { value: 'Module' }));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/

const RealisticTree_glsl = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  build: I$1
}, Symbol.toStringTag, { value: 'Module' }));

export { Y as fetch, ee as gltfToEngineResources, Z as parseUrl };
