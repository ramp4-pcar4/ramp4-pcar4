import { a as a$n } from './devEnvironmentUtils-d73295e7.js';
import { t as t$e, r as r$9, ou as c$f, ov as i$h, ow as t$f, eM as e$i, ax as i$i, b4 as y$2, cL as l$9, ox as s$b, aX as r$a, dh as t$g, i$ as A$6, aW as n$9, iZ as p$5, gN as e$j, dj as e$k, jW as s$d, aT as _$6, fe as o$n, dm as u$a, dl as g$8, oy as U$2, iE as O$5, d2 as l$a, p as s$e, c as s$f, fh as r$c, bM as f$d, gx as n$b, et as r$d, eU as a$f, K as c$g, eL as c$h, fw as n$d, ea as Z, au as tt, fz as t$j, mK as o$r, cq as f$f, oz as c$j, kj as v$8, m6 as a$g, bL as r$e, gM as n$e, b3 as i$j, cp as p$6, hy as y$3, ex as C$2, n3 as h$a, bP as a$h, oA as G$4, oB as O$6, aV as z$1, az as a$i, j9 as c$k, fB as E$a, oC as H$2, oD as G$5, eN as h$b, b as e$o, lr as f$g, mH as i$l, oE as e$p, e as e$q, aI as r$i, jX as n$h, j1 as x$8, oF as l$b, di as r$j, aS as P$4, ff as S$7, h as has, oG as e$s, hC as b$5, U as U$3, dL as w$4, mJ as r$k, n5 as e$t, oH as S$8, jw as c$n, aE as x$9, er as g$9, iD as h$d, n4 as i$n } from './main-5658cd6e.js';
import { e as e$m } from './mat3f64-f0e5b33e.js';
import { o as o$p, r as r$b, e as e$n } from './mat4f64-151d6b53.js';
import { c as c$l, x as x$7, u as u$c, i as i$k, L as L$4, O as O$8, E as E$b } from './BufferView-280c2f14.js';
import { t as t$m, r as r$m, f as f$h, e as e$v } from './vec33-10cb0362.js';
import { m as m$7, n as n$j, j as o$u, r as r$l, a as r$n, b as n$k, o as o$v, e as e$u, t as t$n, i as i$m, g as f$i, h as o$w } from './DefaultMaterial_COLOR_GAMMA-eb95e6eb.js';
import { t as t$o } from './resourceUtils-267be27b.js';
import { t as t$l } from './NestedMap-5d3a039b.js';
import { t as t$k } from './requestImageUtils-b6c78b33.js';
import { t as t$h, D as D$3, c as c$i, N as N$4, a as a$k, u as u$d, n as n$i, e as e$r } from './basicInterfaces-9de11baf.js';
import { s as s$c, R as R$2 } from './sphere-de757ffd.js';
import { v as v$7 } from './lineSegment-dd6132c1.js';
import { o as o$o, n as n$a } from './Indices-ea523834.js';
import { O as O$4 } from './VertexAttribute-a23f2f69.js';
import { o as o$q, n as n$c, W, _ as _$8, a as o$t, c as c$m, A as A$7, h as h$c, l as l$c, b as a$l, d as a$m, S as S$6 } from './OrderIndependentTransparency-639df392.js';
import { _ as __vitePreload } from './preload-helper-a4975f27.js';
import { u as u$b, P as P$3, L as L$3, C as C$1, F as F$1, D as D$2, M as M$3, G as G$3, Y, V as V$3, E as E$9, I as I$6, O as O$7 } from './enums-1f7f0b0a.js';
import { E as E$7, a as a$j } from './Texture-aefe232f.js';
import { _ as _$7, f as f$e, E as E$8, x as x$6, n as n$f } from './VertexArrayObject-2ba4bad7.js';
import { t as t$i } from './VertexElementDescriptor-a439aa9a.js';
import { T as T$4 } from './InterleavedLayout-769e3a2b.js';
import { r as r$f, n as n$g } from './vec3f32-b6e01a26.js';
import { S as S$5 } from './quat-1e678ab0.js';
import { e as e$l } from './quatf64-3a66031a.js';
import { o as o$s, r as r$g } from './doublePrecisionUtils-fe2da5f2.js';
import { r as r$h } from './symbolColorUtils-800e4542.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let s$a = class s{constructor(s,t,i=!1,e=t){this.data=s,this.size=t,this.exclusive=i,this.stride=e;}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function c$e(c){if(t$e(c))return null;const m=r$9(c.offset)?c.offset:c$f,e=r$9(c.rotation)?c.rotation:0,i=r$9(c.scale)?c.scale:i$h,h=t$f(1,0,0,0,1,0,m[0],m[1],1),u=t$f(Math.cos(e),-Math.sin(e),0,Math.sin(e),Math.cos(e),0,0,0,1),p=t$f(i[0],0,0,0,i[1],0,0,0,1),j=e$i();return i$i(j,u,p),i$i(j,h,j),j}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let s$9 = class s{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array;}};let t$d = class t{constructor(t,e,r){this.name=t,this.lodThreshold=e,this.pivotOffset=r,this.stageResources=new s$9,this.numberOfVertices=0;}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function t$c(t){if(t.length<y$2)return Array.from(t);if(Array.isArray(t))return Float64Array.from(t);switch(t.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(t);case 2:return Uint16Array.from(t);case 4:return Float32Array.from(t);default:return Float64Array.from(t)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let o$m = class o{constructor(i,e,o,c){this.primitiveIndices=i,this._numIndexPerPrimitive=e,this.indices=o,this.position=c,this._children=void 0,s$b(i.length>=1),s$b(o.length%this._numIndexPerPrimitive==0),s$b(o.length>=i.length*this._numIndexPerPrimitive),s$b(3===c.size||4===c.size);const{data:d,size:l}=c,m=i.length;let u=l*o[this._numIndexPerPrimitive*i[0]];a$e.clear(),a$e.push(u);const f=r$a(d[u],d[u+1],d[u+2]),x=t$g(f);for(let t=0;t<m;++t){const e=this._numIndexPerPrimitive*i[t];for(let i=0;i<this._numIndexPerPrimitive;++i){u=l*o[e+i],a$e.push(u);let t=d[u];f[0]=Math.min(t,f[0]),x[0]=Math.max(t,x[0]),t=d[u+1],f[1]=Math.min(t,f[1]),x[1]=Math.max(t,x[1]),t=d[u+2],f[2]=Math.min(t,f[2]),x[2]=Math.max(t,x[2]);}}this.bbMin=f,this.bbMax=x;const P=A$6(n$9(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(x[0]-f[0],x[1]-f[1]),x[2]-f[2]);let v=this.radius*this.radius;for(let t=0;t<a$e.length;++t){u=a$e.getItemAt(t);const i=d[u]-P[0],e=d[u+1]-P[1],s=d[u+2]-P[2],n=i*i+e*e+s*s;if(n<=v)continue;const r=Math.sqrt(n),h=.5*(r-this.radius);this.radius=this.radius+h,v=this.radius*this.radius;const o=h/r;P[0]+=i*o,P[1]+=e*o,P[2]+=s*o;}this.center=P,a$e.clear();}getChildren(){if(this._children||p$5(this.bbMin,this.bbMax)<=1)return this._children;const i=A$6(n$9(),this.bbMin,this.bbMax,.5),s=this.primitiveIndices.length,n=new Uint8Array(s),h=new Array(8);for(let t=0;t<8;++t)h[t]=0;const{data:a,size:c}=this.position;for(let t=0;t<s;++t){let e=0;const s=this._numIndexPerPrimitive*this.primitiveIndices[t];let r=c*this.indices[s],o=a[r],d=a[r+1],l=a[r+2];for(let i=1;i<this._numIndexPerPrimitive;++i){r=c*this.indices[s+i];const t=a[r],e=a[r+1],n=a[r+2];t<o&&(o=t),e<d&&(d=e),n<l&&(l=n);}o<i[0]&&(e|=1),d<i[1]&&(e|=2),l<i[2]&&(e|=4),n[t]=e,++h[e];}let d=0;for(let t=0;t<8;++t)h[t]>0&&++d;if(d<2)return;const l=new Array(8);for(let t=0;t<8;++t)l[t]=h[t]>0?new Uint32Array(h[t]):void 0;for(let t=0;t<8;++t)h[t]=0;for(let t=0;t<s;++t){const i=n[t];l[i][h[i]++]=this.primitiveIndices[t];}this._children=new Array;for(let t=0;t<8;++t)void 0!==l[t]&&this._children.push(new o(l[t],this._numIndexPerPrimitive,this.indices,this.position));return this._children}static prune(){a$e.prune();}};const a$e=new l$9({deallocator:null});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let r$8 = class r{constructor(){this.id=e$j();}unload(){}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
var e$h;!function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT";}(e$h||(e$h={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function j$3(t){return t?{p0:t$g(t.p0),p1:t$g(t.p1),p2:t$g(t.p2)}:{p0:n$9(),p1:n$9(),p2:n$9()}}function w$3(t,n,o){return e$k(O$3,n,t),e$k(V$2,o,t),s$d(_$6(O$3,O$3,V$2))/2}new s$c(v$7);new s$c((()=>j$3()));const O$3=n$9(),V$2=n$9();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function c$d(r,o,c){if(!r||!o)return !1;const{size:a,data:f}=r;o$n(c,0,0,0),o$n(g$7,0,0,0);let m=0,h=0;for(let p=0;p<o.length-2;p+=3){const r=o[p+0]*a,j=o[p+1]*a,d=o[p+2]*a;o$n(i$g,f[r+0],f[r+1],f[r+2]),o$n(u$9,f[j+0],f[j+1],f[j+2]),o$n(l$8,f[d+0],f[d+1],f[d+2]);const z=w$3(i$g,u$9,l$8);z?(u$a(i$g,i$g,u$9),u$a(i$g,i$g,l$8),g$8(i$g,i$g,1/3*z),u$a(c,c,i$g),m+=z):(u$a(g$7,g$7,i$g),u$a(g$7,g$7,u$9),u$a(g$7,g$7,l$8),h+=3);}return (0!==h||0!==m)&&(0!==m?(g$8(c,c,1/m),!0):0!==h&&(g$8(c,g$7,1/h),!0))}function a$d(n,r,o){if(!n||!r)return !1;const{size:s,data:c}=n;o$n(o,0,0,0);let a=-1,f=0;for(let t=0;t<r.length;t++){const n=r[t]*s;a!==n&&(o[0]+=c[n+0],o[1]+=c[n+1],o[2]+=c[n+2],f++),a=n;}return f>1&&g$8(o,o,1/f),f>0}function f$c(o,s,c,a){if(!o)return !1;o$n(a,0,0,0),o$n(g$7,0,0,0);let f=0,l=0;const{size:m,data:h}=o,p=s?s.length-1:h.length/m-1,j=p+(c?2:0);for(let t=0;t<j;t+=2){const o=t<p?t:p,c=t<p?t+1:0,j=(s?s[o]:o)*m,d=(s?s[c]:c)*m;i$g[0]=h[j],i$g[1]=h[j+1],i$g[2]=h[j+2],u$9[0]=h[d],u$9[1]=h[d+1],u$9[2]=h[d+2],g$8(i$g,u$a(i$g,i$g,u$9),.5);const z=U$2(i$g,u$9);z>0?(u$a(a,a,g$8(i$g,i$g,z)),f+=z):0===f&&(u$a(g$7,g$7,i$g),l++);}return 0!==f?(g$8(a,a,1/f),!0):0!==l&&(g$8(a,g$7,1/l),!0)}const i$g=n$9(),u$9=n$9(),l$8=n$9(),g$7=n$9();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let r$7 = class r{constructor(r){this.channel=r,this.id=e$j();}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function n$8(e,r){return t$e(e)&&(e=[]),e.push(r),e}function o$l(e,r){if(t$e(e))return null;const n=e.filter((t=>t!==r));return 0===n.length?null:n}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let v$6 = class v extends r$8{constructor(t,e,i=[],s=null,n=e$h.Mesh,r=null,o=-1){super(),this.material=t,this.mapPositions=s,this.type=n,this.objectAndLayerIdColor=r,this.edgeIndicesLength=o,this.visible=!0,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[h,a]of e)a&&this._vertexAttributes.set(h,{...a});if(null==i||0===i.length){const t=A$5(this._vertexAttributes),e=o$o(t);this.edgeIndicesLength=this.edgeIndicesLength<0?t:this.edgeIndicesLength;for(const i of this._vertexAttributes.keys())this._indices.set(i,e);}else for(const[h,a]of i)a&&(this._indices.set(h,n$a(a)),h===O$4.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(h).length:this.edgeIndicesLength));}instantiate(t={}){const e=new v(t.material||this.material,[],void 0,this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._vertexAttributes.forEach(((t,i)=>{t.exclusive=!1,e._vertexAttributes.set(i,t);})),this._indices.forEach(((t,i)=>e._indices.set(i,t))),e._boundingInfo=this._boundingInfo,e.transformation=t.transformation||this.transformation,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(t){let e=this._vertexAttributes.get(t);return e&&!e.exclusive&&(e={...e,exclusive:!0,data:t$c(e.data)},this._vertexAttributes.set(t,e)),e}get indices(){return this._indices}get indexCount(){const t=this._indices.values().next().value;return t?t.length:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return t$e(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return !!(this.type===e$h.Mesh?this._computeAttachmentOriginTriangles(t):this.type===e$h.Line?this._computeAttachmentOriginLines(t):this._computeAttachmentOriginPoints(t))&&(r$9(this._transformation)&&O$5(t,t,this._transformation),!0)}_computeAttachmentOriginTriangles(t){const e=this.indices.get(O$4.POSITION),i=this.vertexAttributes.get(O$4.POSITION);return c$d(i,e,t)}_computeAttachmentOriginLines(t){const e=this.vertexAttributes.get(O$4.POSITION),i=this.indices.get(O$4.POSITION);return f$c(e,i,i&&x$5(this.material.parameters,e,i),t)}_computeAttachmentOriginPoints(t){const e=this.indices.get(O$4.POSITION),i=this.vertexAttributes.get(O$4.POSITION);return a$d(i,e,t)}invalidateBoundingInfo(){this._boundingInfo=null;}_calculateBoundingInfo(){const t=this.indices.get(O$4.POSITION),e=this.vertexAttributes.get(O$4.POSITION);if(!t||0===t.length||!e)return null;const i=this.type===e$h.Mesh?3:1;s$b(t.length%i==0,"Indexing error: "+t.length+" not divisible by "+i);const s=o$o(t.length/i);return new o$m(s,i,t,e)}get transformation(){return l$a(this._transformation,o$p)}set transformation(t){this._transformation=t&&t!==o$p?r$b(t):null;}get shaderTransformation(){return r$9(this._shaderTransformer)?this._shaderTransformer(this.transformation):this.transformation}get shaderTransformer(){return this._shaderTransformer}set shaderTransformer(t){this._shaderTransformer=t;}get hasVolatileTransformation(){return r$9(this._shaderTransformer)}addHighlight(){const t=new r$7(t$h.Highlight);return this.highlights=n$8(this.highlights,t),t}removeHighlight(t){this.highlights=o$l(this.highlights,t);}};function A$5(t){const e=t.values().next().value;return null==e?0:e.data.length/e.size}function x$5(t,e,i){return !(!("isClosed"in t)||!t.isClosed)&&(i?i.length>2:e.data.length>6)}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function o$k(o,t=!0){o.attributes.add(O$4.POSITION,"vec2"),t&&o.varyings.add("uv","vec2"),o.vertex.code.add(o$q`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?o$q`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
var a$c;!function(a){a[a.Pass=0]="Pass",a[a.Draw=1]="Draw";}(a$c||(a$c={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let i$f = class i{constructor(i,s,t,a,n=null){this.name=i,this.type=s,this.arraySize=n,this.bind={[a$c.Pass]:null,[a$c.Draw]:null},r$9(t)&&r$9(a)&&(this.bind[t]=a);}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let e$g = class e extends i$f{constructor(r,e){super(r,"vec4",a$c.Pass,((s,o,t)=>s.setUniform4fv(r,e(o,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const s$8=s$e.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let i$e = class i{constructor(){this._includedModules=new Map;}include(e,r){if(this._includedModules.has(e)){const t=this._includedModules.get(e);if(t!==r){s$8.error("Trying to include shader module multiple times with different sets of options.");const r=new Set;for(const n of Object.keys(t))t[n]!==e[n]&&r.add(n);for(const n of Object.keys(e))t[n]!==e[n]&&r.add(n);r.forEach((r=>console.error(`  ${r}: current ${t[r]} new ${e[r]}`)));}}else this._includedModules.set(e,r),e(this.builder,r);}};let o$j = class o extends i$e{constructor(){super(...arguments),this.vertex=new u$8,this.fragment=new u$8,this.attributes=new m$6,this.varyings=new h$9,this.extensions=new d$b,this.constants=new l$7;}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),t=this.attributes.generateSource(e),n=this.varyings.generateSource(),s="vertex"===e?this.vertex:this.fragment,i=s.uniforms.generateSource(),o=s.code.generateSource(),a="vertex"===e?f$b:_$5,c=this.constants.generateSource().concat(s.constants.generateSource());return `\n${r.join("\n")}\n\n${a}\n\n${c.join("\n")}\n\n${i.join("\n")}\n\n${t.join("\n")}\n\n${n.join("\n")}\n\n${o.join("\n")}`}generateBind(e,r){const n=new Map;this.vertex.uniforms.entries.forEach((r=>{const s=r.bind[e];r$9(s)&&n.set(r.name,s);})),this.fragment.uniforms.entries.forEach((r=>{const s=r.bind[e];r$9(s)&&n.set(r.name,s);}));const s=Array.from(n.values()),i=s.length;return (e,t,n)=>{for(let o=0;o<i;++o)s[o](r,e,t,n);}}};let a$b = class a{constructor(){this._entries=new Map;}add(e){if(!Array.isArray(e))return this._add(e);for(const r of e)this._add(r);}get(e){return this._entries.get(e)}_add(r){if(t$e(r))s$8.error(`Trying to add null Uniform from ${(new Error).stack}.`);else {if(this._entries.has(r.name)&&!this._entries.get(r.name).equals(r))throw new s$f(`Duplicate uniform name ${r.name} for different uniform type`);this._entries.set(r.name,r);}}generateSource(){return Array.from(this._entries.values()).map((e=>r$9(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}};let c$c = class c{constructor(){this._entries=new Array;}add(e){this._entries.push(e);}generateSource(){return this._entries}};let u$8 = class u extends i$e{constructor(){super(...arguments),this.uniforms=new a$b,this.code=new c$c,this.constants=new l$7;}get builder(){return this}};let m$6 = class m{constructor(){this._entries=new Array;}add(e,r){this._entries.push([e,r]);}generateSource(e){return "fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}};let h$9 = class h{constructor(){this._entries=new Array;}add(e,r){this._entries.push([e,r]);}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}};let d$b = class d{constructor(){this._entries=new Set;}add(e){this._entries.add(e);}generateSource(e){const r="vertex"===e?d.ALLOWLIST_VERTEX:d.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>r.includes(e))).map((e=>`#extension ${e} : enable`))}};d$b.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],d$b.ALLOWLIST_VERTEX=[];let l$7 = class l{constructor(){this._entries=new Set;}add(e,r,t){let n="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":n=l._numberToFloatStr(t);break;case"int":n=l._numberToIntStr(t);break;case"bool":n=t.toString();break;case"vec2":n=`vec2(${l._numberToFloatStr(t[0])},                            ${l._numberToFloatStr(t[1])})`;break;case"vec3":n=`vec3(${l._numberToFloatStr(t[0])},                            ${l._numberToFloatStr(t[1])},                            ${l._numberToFloatStr(t[2])})`;break;case"vec4":n=`vec4(${l._numberToFloatStr(t[0])},                            ${l._numberToFloatStr(t[1])},                            ${l._numberToFloatStr(t[2])},                            ${l._numberToFloatStr(t[3])})`;break;case"ivec2":n=`ivec2(${l._numberToIntStr(t[0])},                             ${l._numberToIntStr(t[1])})`;break;case"ivec3":n=`ivec3(${l._numberToIntStr(t[0])},                             ${l._numberToIntStr(t[1])},                             ${l._numberToIntStr(t[2])})`;break;case"ivec4":n=`ivec4(${l._numberToIntStr(t[0])},                             ${l._numberToIntStr(t[1])},                             ${l._numberToIntStr(t[2])},                             ${l._numberToIntStr(t[3])})`;break;case"mat2":case"mat3":case"mat4":n=`${r}(${Array.prototype.map.call(t,(e=>l._numberToFloatStr(e))).join(", ")})`;}return this._entries.add(`const ${r} ${e} = ${n};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}};const _$5="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",f$b="precision highp float;\nprecision highp sampler2D;";

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const t$b="Size",n$7="InvSize";function r$6(r,i,o=!1,u=0){if(r.hasWebGL2Context){const t=o$q`vec2(textureSize(${i}, ${o$q.int(u)}))`;return o?"(1.0 / "+t+")":t}return o?i+n$7:i+t$b}function i$d(t,r,i,o=null,u=0){if(t.hasWebGL2Context)return o$q`texelFetch(${r}, ivec2(${i}), ${o$q.int(u)})`;let $=o$q`texture2D(${r}, ${i} * `;return $+=o?o$q`(${o}))`:o$q`${r+n$7})`,$}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let e$f = class e extends i$f{constructor(r,e){super(r,"vec2",a$c.Pass,((s,o,t)=>s.setUniform2fv(r,e(o,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
var e$e;!function(e){e[e.None=0]="None",e[e.Size=1]="Size",e[e.InvSize=2]="InvSize";}(e$e||(e$e={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let f$a = class f extends i$f{constructor(r,s){super(r,"sampler2D",a$c.Pass,((e,o,t)=>e.bindTexture(r,s(o,t))));}};function u$7(o,c,p=e$e.None){const u=[new f$a(o,c)];if(p&e$e.Size){const i=o+t$b;u.push(new e$f(i,((o,t)=>{const i=c(o,t);return r$9(i)?r$c(a$a,i.descriptor.width,i.descriptor.height):f$d})));}if(p&e$e.InvSize){const t=o+n$7;u.push(new e$f(t,((o,t)=>{const i=c(o,t);return r$9(i)?r$c(a$a,1/i.descriptor.width,1/i.descriptor.height):f$d})));}return u}const a$a=n$b();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let i$c = class i extends n$c{constructor(){super(...arguments),this.color=r$d(1,1,1,1);}};function l$6(){const e=new o$j;return e.include(o$k),e.fragment.uniforms.add([new f$a("tex",(e=>e.texture)),new e$g("uColor",(e=>e.color))]),e.fragment.code.add(o$q`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),e}Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:i$c,build:l$6},Symbol.toStringTag,{value:"Module"}));

function s$7(){if(t$e(i$b)){const t=t=>a$f(`esri/libs/basisu/${t}`);i$b=__vitePreload(() => import('./basis_transcoder-3cad5e49.js'),true?["./basis_transcoder-3cad5e49.js","./_commonjsHelpers-1f64d0d1.js"]:void 0,import.meta.url).then((e=>e.b)).then((({default:e})=>e({locateFile:t}).then((e=>(e.initializeBasis(),delete e.then,e)))));}return i$b}let i$b;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
var _$4;!function(_){_[_.ETC1_RGB=0]="ETC1_RGB",_[_.ETC2_RGBA=1]="ETC2_RGBA",_[_.BC1_RGB=2]="BC1_RGB",_[_.BC3_RGBA=3]="BC3_RGBA",_[_.BC4_R=4]="BC4_R",_[_.BC5_RG=5]="BC5_RG",_[_.BC7_M6_RGB=6]="BC7_M6_RGB",_[_.BC7_M5_RGBA=7]="BC7_M5_RGBA",_[_.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",_[_.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",_[_.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",_[_.ATC_RGB=11]="ATC_RGB",_[_.ATC_RGBA=12]="ATC_RGBA",_[_.FXT1_RGB=17]="FXT1_RGB",_[_.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",_[_.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",_[_.ETC2_EAC_R11=20]="ETC2_EAC_R11",_[_.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",_[_.RGBA32=13]="RGBA32",_[_.RGB565=14]="RGB565",_[_.BGR565=15]="BGR565",_[_.RGBA4444=16]="RGBA4444";}(_$4||(_$4={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let g$6=null,l$5=null;async function c$b(){return t$e(l$5)&&(l$5=s$7(),g$6=await l$5),l$5}function u$6(t,n){if(t$e(g$6))return t.byteLength;const r=new g$6.BasisFile(new Uint8Array(t)),s=T$3(r)?E$6(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),n):0;return r.close(),r.delete(),s}function m$5(t,n){if(t$e(g$6))return t.byteLength;const r=new g$6.KTX2File(new Uint8Array(t)),s=_$3(r)?E$6(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),n):0;return r.close(),r.delete(),s}function E$6(e,t,n,s,i){const a=_$7(t?u$b.COMPRESSED_RGBA8_ETC2_EAC:u$b.COMPRESSED_RGB8_ETC2),g=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(n*s*a*g)}function T$3(e){return e.getNumImages()>=1&&!e.isUASTC()}function _$3(e){return e.getFaces()>=1&&e.isETC1S()}async function h$8(t,n,r){t$e(g$6)&&(g$6=await c$b());const s=new g$6.BasisFile(new Uint8Array(r));if(!T$3(s))return null;s.startTranscoding();const i=p$4(t,n,s.getNumLevels(0),s.getHasAlpha(),s.getImageWidth(0,0),s.getImageHeight(0,0),((e,t)=>s.getImageTranscodedSizeInBytes(0,e,t)),((e,t,n)=>s.transcodeImage(n,0,e,t,0,0)));return s.close(),s.delete(),i}async function A$4(t,n,r){t$e(g$6)&&(g$6=await c$b());const s=new g$6.KTX2File(new Uint8Array(r));if(!_$3(s))return null;s.startTranscoding();const i=p$4(t,n,s.getLevels(),s.getHasAlpha(),s.getWidth(),s.getHeight(),((e,t)=>s.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,n)=>s.transcodeImage(n,e,0,0,t,0,-1,-1)));return s.close(),s.delete(),i}function p$4(e,t,o,g,l,c,u,m){const{compressedTextureETC:E,compressedTextureS3TC:T}=e.capabilities,[_,h]=E?g?[_$4.ETC2_RGBA,u$b.COMPRESSED_RGBA8_ETC2_EAC]:[_$4.ETC1_RGB,u$b.COMPRESSED_RGB8_ETC2]:T?g?[_$4.BC3_RGBA,u$b.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[_$4.BC1_RGB,u$b.COMPRESSED_RGB_S3TC_DXT1_EXT]:[_$4.RGBA32,P$3.RGBA],A=t.hasMipmap?o:Math.min(1,o),p=[];for(let n=0;n<A;n++)p.push(new Uint8Array(u(n,_))),m(n,_,p[n]);const C=p.length>1,d=C?L$3.LINEAR_MIPMAP_LINEAR:L$3.LINEAR,R={...t,samplingMode:d,hasMipmap:C,internalFormat:h,width:l,height:c};return new E$7(e,R,{type:"compressed",levels:p})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const i$a=s$e.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),s$6=542327876,l$4=131072,m$4=4;function u$5(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function c$a(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const h$7=u$5("DXT1"),p$3=u$5("DXT3"),d$a=u$5("DXT5"),g$5=31,f$9=0,C=1,w$2=2,D$1=3,T$2=4,_$2=7,A$3=20,E$5=21;function S$4(e,r,n){const{textureData:i,internalFormat:s,width:l,height:m}=c$g(M$2(n,r.hasMipmap??!1));return r.samplingMode=i.levels.length>1?L$3.LINEAR_MIPMAP_LINEAR:L$3.LINEAR,r.hasMipmap=i.levels.length>1,r.internalFormat=s,r.width=l,r.height=m,new E$7(e,r,i)}function M$2(e,t){const o=new Int32Array(e,0,g$5);if(o[f$9]!==s$6)return i$a.error("Invalid magic number in DDS header"),null;if(!(o[A$3]&m$4))return i$a.error("Unsupported format, must contain a FourCC code"),null;const a=o[E$5];let u,S;switch(a){case h$7:u=8,S=u$b.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case p$3:u=16,S=u$b.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case d$a:u=16,S=u$b.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return i$a.error("Unsupported FourCC code:",c$a(a)),null}let M=1,x=o[T$2],R=o[D$1];0==(3&x)&&0==(3&R)||(i$a.warn("Rounding up compressed texture size to nearest multiple of 4."),x=x+3&-4,R=R+3&-4);const b=x,X=R;let I,j;o[w$2]&l$4&&!1!==t&&(M=Math.max(1,o[_$2])),1===M||c$h(x)&&c$h(R)||(i$a.warn("Ignoring mipmaps of non power of two sized compressed texture."),M=1);let v=o[C]+4;const F=[];for(let r=0;r<M;++r)j=(x+3>>2)*(R+3>>2)*u,I=new Uint8Array(e,v,j),F.push(I),v+=j,x=Math.max(1,x>>1),R=Math.max(1,R>>1);return {textureData:{type:"compressed",levels:F},internalFormat:S,width:b,height:X}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const E$4=new Map([[O$4.POSITION,0],[O$4.NORMAL,1],[O$4.UV0,2],[O$4.COLOR,3],[O$4.SIZE,4],[O$4.TANGENT,4],[O$4.AUXPOS1,5],[O$4.SYMBOLCOLOR,5],[O$4.AUXPOS2,6],[O$4.FEATUREATTRIBUTE,6],[O$4.INSTANCEFEATUREATTRIBUTE,6],[O$4.INSTANCECOLOR,7],[O$4.OBJECTANDLAYERIDCOLOR,7],[O$4.OBJECTANDLAYERIDCOLOR_INSTANCED,7],[O$4.MODEL,8],[O$4.MODELNORMAL,12],[O$4.MODELORIGINHI,11],[O$4.MODELORIGINLO,15]]);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
[new t$i(O$4.POSITION,3,C$1.FLOAT,0,12)];[new t$i(O$4.POSITION,3,C$1.FLOAT,0,20),new t$i(O$4.UV0,2,C$1.FLOAT,12,20)];[new t$i(O$4.POSITION,3,C$1.FLOAT,0,32),new t$i(O$4.NORMAL,3,C$1.FLOAT,12,32),new t$i(O$4.UV0,2,C$1.FLOAT,24,32)];[new t$i(O$4.POSITION,3,C$1.FLOAT,0,16),new t$i(O$4.COLOR,4,C$1.UNSIGNED_BYTE,12,16)];const t$a=[new t$i(O$4.POSITION,2,C$1.FLOAT,0,8)],A$2=[new t$i(O$4.POSITION,2,C$1.FLOAT,0,16),new t$i(O$4.UV0,2,C$1.FLOAT,8,16)];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let r$5 = class r extends f$e{};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function f$8(i,m=t$a,T=E$4,l=-1,u=1){let f=null;if(m===A$2)f=new Float32Array([l,l,0,0,u,l,1,0,l,u,0,1,u,u,1,1]);else f=new Float32Array([l,l,u,l,l,u,u,u]);return new r$5(i,T,{geometry:m},{geometry:E$8.createVertex(i,F$1.STATIC_DRAW,f)})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let G$2 = class G extends r$8{constructor(t,e){super(),this._data=t,this.type=e$h.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new n$d,this._passParameters=new i$c,this.params=e||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:D$2.REPEAT,t:D$2.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||D$3.STRETCH,this.estimatedTexMemRequired=G._estimateTexMemRequired(this._data,this.params),this._startPreload();}_startPreload(){const t=this._data;t$e(t)||(t instanceof HTMLVideoElement?this._startPreloadVideoElement(t):t instanceof HTMLImageElement&&this._startPreloadImageElement(t));}_startPreloadVideoElement(t){if(!(Z(t.src)||"auto"===t.preload&&t.crossOrigin)){t.preload="auto",t.crossOrigin="anonymous";const e=!t.paused;if(t.src=t.src,e&&t.autoplay){const e=()=>{t.removeEventListener("canplay",e),t.play();};t.addEventListener("canplay",e);}}}_startPreloadImageElement(t){tt(t.src)||Z(t.src)||t.crossOrigin||(t.crossOrigin="anonymous",t.src=t.src);}static _getDataDimensions(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}static _estimateTexMemRequired(t,e){if(t$e(t))return 0;if(t$j(t)||o$r(t))return e.encoding===c$i.KTX2_ENCODING?m$5(t,!!e.mipmap):e.encoding===c$i.BASIS_ENCODING?u$6(t,!!e.mipmap):t.byteLength;const{width:r,height:s}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?G._getDataDimensions(t):e;return (e.mipmap?4/3:1)*r*s*(e.components||4)||0}dispose(){this._data=void 0;}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(t){return {target:M$3.TEXTURE_2D,pixelFormat:P$3.RGBA,dataType:G$3.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?L$3.LINEAR_MIPMAP_LINEAR:L$3.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.maxAnisotropy??(this.params.mipmap?t.parameters.maxMaxAnisotropy:1)}}get glTexture(){return this._glTexture}load(t,e){if(r$9(this._glTexture))return this._glTexture;if(r$9(this._loadingPromise))return this._loadingPromise;const r=this._data;return t$e(r)?(this._glTexture=new E$7(t,this._createDescriptor(t),null),this._glTexture):"string"==typeof r?this._loadFromURL(t,e,r):r instanceof Image?this._loadFromImageElement(t,e,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(t,e,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(t,r,e):(t$j(r)||o$r(r))&&this.params.encoding===c$i.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(t,r)):(t$j(r)||o$r(r))&&this.params.encoding===c$i.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(t,r)):(t$j(r)||o$r(r))&&this.params.encoding===c$i.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(t,r)):o$r(r)?this._loadFromPixelData(t,r):t$j(r)?this._loadFromPixelData(t,new Uint8Array(r)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(t,e,r){if(!(this._data instanceof HTMLVideoElement)||t$e(this._glTexture))return r;if(this._data.readyState<B$2.HAVE_CURRENT_DATA||r===this._data.currentTime)return r;if(r$9(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:s,sourceTexture:i}=this._powerOfTwoStretchInfo;i.setData(this._data),this._drawStretchedTexture(t,e,r,s,i,this._glTexture);}else {const{videoWidth:t,videoHeight:e}=this._data,{width:r,height:s}=this._glTexture.descriptor;t!==r||e!==s?this._glTexture.updateData(0,0,0,Math.min(t,r),Math.min(e,s),this._data):this._glTexture.setData(this._data);}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this._data.currentTime}_loadFromDDSData(t,e){return this._glTexture=S$4(t,this._createDescriptor(t),e),this._glTexture}_loadFromKTX2(t,e){return this._loadAsync((()=>A$4(t,this._createDescriptor(t),e).then((t=>(this._glTexture=t,t)))))}_loadFromBasis(t,e){return this._loadAsync((()=>h$8(t,this._createDescriptor(t),e).then((t=>(this._glTexture=t,t)))))}_loadFromPixelData(t,e){s$b(this.params.width>0&&this.params.height>0);const r=this._createDescriptor(t);return r.pixelFormat=1===this.params.components?P$3.LUMINANCE:3===this.params.components?P$3.RGB:P$3.RGBA,r.width=this.params.width,r.height=this.params.height,this._glTexture=new E$7(t,r,e),this._glTexture}_loadFromURL(t,e,r){return this._loadAsync((async s=>{const i=await t$k(r,{signal:s});return f$f(s),this._loadFromImage(t,i,e)}))}_loadFromImageElement(t,e,r){return r.complete?this._loadFromImage(t,r,e):this._loadAsync((async s=>{const i=await c$j(r,r.src,!1,s);return f$f(s),this._loadFromImage(t,i,e)}))}_loadFromVideoElement(t,e,r){return r.readyState>=B$2.HAVE_CURRENT_DATA?this._loadFromImage(t,r,e):this._loadFromVideoElementAsync(t,e,r)}_loadFromVideoElementAsync(t,r,s){return this._loadAsync((i=>new Promise(((a,o)=>{const h=()=>{s.removeEventListener("loadeddata",p),s.removeEventListener("error",d),p$6(_);},p=()=>{s.readyState>=B$2.HAVE_CURRENT_DATA&&(h(),a(this._loadFromImage(t,s,r)));},d=t=>{h(),o(t||new s$f("Failed to load video"));};s.addEventListener("loadeddata",p),s.addEventListener("error",d);const _=v$8(i,(()=>d(a$g())));}))))}_loadFromImage(t,e,r){const i=G._getDataDimensions(e);this.params.width=i.width,this.params.height=i.height;const a=this._createDescriptor(t);return a.pixelFormat=3===this.params.components?P$3.RGB:P$3.RGBA,!this._requiresPowerOfTwo(t,a)||c$h(i.width)&&c$h(i.height)?(a.width=i.width,a.height=i.height,this._glTexture=new E$7(t,a,e),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(t,e,i,a,r),this._glTexture)}_loadAsync(t){const e=new AbortController;this._loadingController=e;const r=t(e.signal);this._loadingPromise=r;const s=()=>{this._loadingController===e&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null);};return r.then(s,s),r}_requiresPowerOfTwo(t,e){const r=D$2.CLAMP_TO_EDGE,s="number"==typeof e.wrapMode?e.wrapMode===r:e.wrapMode.s===r&&e.wrapMode.t===r;return t.type===r$e.WEBGL1&&(e.hasMipmap||!s)}_makePowerOfTwoTexture(e,r,s,a,o){const{width:n,height:h}=s,l=i$j(n),m=i$j(h);let p;switch(a.width=l,a.height=m,this.params.powerOfTwoResizeMode){case D$3.PAD:a.textureCoordinateScaleFactor=[n/l,h/m],p=new E$7(e,a),p.updateData(0,0,0,n,h,r);break;case D$3.STRETCH:case null:case void 0:p=this._stretchToPowerOfTwo(e,r,a,o());break;default:n$e(this.params.powerOfTwoResizeMode);}return a.hasMipmap&&p.generateMipmap(),p}_stretchToPowerOfTwo(t,e,r,s){const i=new E$7(t,r),a=new x$6(t,{colorTarget:Y.TEXTURE,depthStencilTarget:V$3.NONE},i),o=new E$7(t,{target:M$3.TEXTURE_2D,pixelFormat:r.pixelFormat,dataType:G$3.UNSIGNED_BYTE,wrapMode:D$2.CLAMP_TO_EDGE,samplingMode:L$3.LINEAR,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},e),n=f$8(t),h=t.getBoundFramebufferObject();return this._drawStretchedTexture(t,s,a,n,o,i),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:n,sourceTexture:o,framebuffer:a}:(n.dispose(!0),o.dispose(),a.detachColorTexture(),a.dispose()),t.bindFramebuffer(h),i}_drawStretchedTexture(t,e,r,s,i,a){this._passParameters.texture=i,t.bindFramebuffer(r);const o=t.getViewport();t.setViewport(0,0,a.descriptor.width,a.descriptor.height),t.bindTechnique(e,this._passParameters,null),t.bindVAO(s),t.drawArrays(E$9.TRIANGLE_STRIP,0,n$f(s,"geometry")),t.bindFramebuffer(null),t.setViewport(o.x,o.y,o.width,o.height),this._passParameters.texture=null;}unload(){if(r$9(this._powerOfTwoStretchInfo)){const{framebuffer:t,vao:e,sourceTexture:r}=this._powerOfTwoStretchInfo;e.dispose(!0),r.dispose(),t.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null;}if(r$9(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),r$9(this._loadingController)){const t=this._loadingController;this._loadingController=null,this._loadingPromise=null,t.abort();}this.events.emit("unloaded");}};var B$2;!function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA";}(B$2||(B$2={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
var h$6;!function(h){h[h.Color=0]="Color",h[h.Depth=1]="Depth",h[h.Normal=2]="Normal",h[h.Shadow=3]="Shadow",h[h.ShadowHighlight=4]="ShadowHighlight",h[h.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",h[h.Highlight=6]="Highlight",h[h.Alpha=7]="Alpha",h[h.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",h[h.COUNT=9]="COUNT";}(h$6||(h$6={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function e$d(e,o){const n=e.fragment;switch(n.code.add(o$q`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),o.doubleSidedMode){case i$9.None:n.code.add(o$q`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i$9.View:n.code.add(o$q`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i$9.WindingOrder:n.code.add(o$q`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:n$e(o.doubleSidedMode);case i$9.COUNT:}}var i$9;!function(a){a[a.None=0]="None",a[a.View=1]="View",a[a.WindingOrder=2]="WindingOrder",a[a.COUNT=3]="COUNT";}(i$9||(i$9={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
var d$9;function o$i(o,v){switch(v.textureCoordinateType){case d$9.Default:return o.attributes.add(O$4.UV0,"vec2"),o.varyings.add("vuv0","vec2"),void o.vertex.code.add(o$q`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case d$9.Compressed:return o.attributes.add(O$4.UV0,"vec2"),o.varyings.add("vuv0","vec2"),void o.vertex.code.add(o$q`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case d$9.Atlas:return o.attributes.add(O$4.UV0,"vec2"),o.varyings.add("vuv0","vec2"),o.attributes.add(O$4.UVREGION,"vec4"),o.varyings.add("vuvRegion","vec4"),void o.vertex.code.add(o$q`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:n$e(v.textureCoordinateType);case d$9.None:return void o.vertex.code.add(o$q`void forwardTextureCoordinates() {}`);case d$9.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT";}(d$9||(d$9={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function t$9(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(o$q`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function a$9(a,s){switch(a.include(o$i,s),a.fragment.code.add(o$q`
  struct TextureLookupParameter {
    vec2 uv;
    ${s.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),s.textureCoordinateType){case d$9.Default:case d$9.Compressed:return void a.fragment.code.add(o$q`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case d$9.Atlas:return a.include(t$9),void a.fragment.code.add(o$q`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:n$e(s.textureCoordinateType);case d$9.None:case d$9.COUNT:return}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let o$h = class o extends i$f{constructor(r,o){super(r,"vec3",a$c.Draw,((e,s,t,i)=>e.setUniform3fv(r,o(s,t,i))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let e$c = class e extends i$f{constructor(r,e){super(r,"vec3",a$c.Pass,((s,o,t)=>s.setUniform3fv(r,e(o,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let o$g = class o extends i$f{constructor(r,o){super(r,"vec2",a$c.Draw,((e,s,t,i)=>e.setUniform2fv(r,o(s,t,i))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let f$7 = class f extends i$f{constructor(r,e){super(r,"sampler2D",a$c.Draw,((o,s,t)=>o.bindTexture(r,e(s,t))));}};function u$4(s,c,p=e$e.None){const u=[new f$7(s,c)];if(p&e$e.Size){const i=s+t$b;u.push(new o$g(i,((s,t)=>{const i=c(s,t);return r$9(i)?r$c(a$8,i.descriptor.width,i.descriptor.height):f$d})));}if(p&e$e.InvSize){const t=s+n$7;u.push(new o$g(t,((s,t)=>{const i=c(s,t);return r$9(i)?r$c(a$8,1/i.descriptor.width,1/i.descriptor.height):f$d})));}return u}const a$8=n$b();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let t$8 = class t{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output;}dispose(){this._techniqueRepository.release(this._technique);}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}ensureTechnique(e,t){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(t){return N$4.LOADED}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let h$5 = class h extends t$8{constructor(t){super(t),this._numLoading=0,this._disposed=!1,this._textureRepository=t.textureRep,this._textureId=t.textureId,this._acquire(t.textureId,(t=>this._texture=t)),this._acquire(t.normalTextureId,(t=>this._textureNormal=t)),this._acquire(t.emissiveTextureId,(t=>this._textureEmissive=t)),this._acquire(t.occlusionTextureId,(t=>this._textureOcclusion=t)),this._acquire(t.metallicRoughnessTextureId,(t=>this._textureMetallicRoughness=t));}dispose(){this._texture=y$3(this._texture),this._textureNormal=y$3(this._textureNormal),this._textureEmissive=y$3(this._textureEmissive),this._textureOcclusion=y$3(this._textureOcclusion),this._textureMetallicRoughness=y$3(this._textureMetallicRoughness),this._disposed=!0;}ensureResources(t){return 0===this._numLoading?N$4.LOADED:N$4.LOADING}get textureBindParameters(){return new o$f(r$9(this._texture)?this._texture.glTexture:null,r$9(this._textureNormal)?this._textureNormal.glTexture:null,r$9(this._textureEmissive)?this._textureEmissive.glTexture:null,r$9(this._textureOcclusion)?this._textureOcclusion.glTexture:null,r$9(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){(t$e(this._texture)||e!==this._texture.id)&&(this._texture=y$3(this._texture),this._textureId=e,this._acquire(this._textureId,(t=>this._texture=t)));}_acquire(e,r){if(t$e(e))return void r(null);const u=this._textureRepository.acquire(e);if(C$2(u))return ++this._numLoading,void u.then((e=>{if(this._disposed)return y$3(e),void r(null);r(e);})).finally((()=>--this._numLoading));r(u);}};let o$f = class o extends n$c{constructor(t=null,e=null,s=null,i=null,r=null){super(),this.texture=t,this.textureNormal=e,this.textureEmissive=s,this.textureOcclusion=i,this.textureMetallicRoughness=r;}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
r$f(0,.6,.2);var d$8;!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Terrain=5]="Terrain",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT";}(d$8||(d$8={}));function x$4(e,l){const m=e.fragment,p=l.hasMetallicRoughnessTexture||l.hasEmissionTexture||l.hasOcclusionTexture;if(l.pbrMode===d$8.Normal&&p&&e.include(a$9,l),l.pbrMode!==d$8.Schematic)if(l.pbrMode!==d$8.Disabled){if(l.pbrMode===d$8.Normal){m.code.add(o$q`vec3 mrr;
vec3 emission;
float occlusion;`);const e=l.supportsTextureAtlas?l.hasWebGL2Context?e$e.None:e$e.Size:e$e.None,s=l.pbrTextureBindType;l.hasMetallicRoughnessTexture&&(m.uniforms.add(s===a$c.Pass?u$7("texMetallicRoughness",(e=>e.textureMetallicRoughness),e):u$4("texMetallicRoughness",(e=>e.textureMetallicRoughness),e)),m.code.add(o$q`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),l.hasEmissionTexture&&(m.uniforms.add(s===a$c.Pass?u$7("texEmission",(e=>e.textureEmissive),e):u$4("texEmission",(e=>e.textureEmissive),e)),m.code.add(o$q`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),l.hasOcclusionTexture?(m.uniforms.add(s===a$c.Pass?u$7("texOcclusion",(e=>e.textureOcclusion),e):u$4("texOcclusion",(e=>e.textureOcclusion),e)),m.code.add(o$q`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):m.code.add(o$q`float getBakedOcclusion() { return 1.0; }`),m.uniforms.add(s===a$c.Pass?[new e$c("emissionFactor",(e=>e.emissiveFactor)),new e$c("mrrFactors",(e=>e.mrrFactors))]:[new o$h("emissionFactor",(e=>e.emissiveFactor)),new o$h("mrrFactors",(e=>e.mrrFactors))]),m.code.add(o$q`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${p?o$q`vtc.uv = vuv0;`:""}
      ${l.hasMetallicRoughnessTextureTransform?o$q`vtc.uv = metallicRoughnessUV;`:""}
      ${l.hasMetallicRoughnessTexture?l.supportsTextureAtlas?o$q`
                vtc.size = ${r$6(l,"texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);`:o$q`applyMetallnessAndRoughness(vtc);`:""}
      ${l.hasEmissiveTextureTransform?o$q`vtc.uv = emissiveUV;`:""}
      ${l.hasEmissionTexture?l.supportsTextureAtlas?o$q`
                vtc.size = ${r$6(l,"texEmission")};
                applyEmission(vtc);`:o$q`applyEmission(vtc);`:""}
      ${l.hasOcclusionTextureTransform?o$q`vtc.uv = occlusionUV;`:""}
      ${l.hasOcclusionTexture?l.supportsTextureAtlas?o$q`
                vtc.size = ${r$6(l,"texOcclusion")};
                applyOcclusion(vtc);`:o$q`applyOcclusion(vtc);`:""}
    }
  `);}}else m.code.add(o$q`float getBakedOcclusion() { return 1.0; }`);else m.code.add(o$q`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function l$3(e){return Math.abs(e*e*e)}function s$5(e,t,a){const i=a.parameters,r=a.paddingPixelsOverride;return x$3.scale=Math.min(i.divisor/(t-i.offset),1),x$3.factor=l$3(e),x$3.minPixelSize=i.minPixelSize,x$3.paddingPixels=r,x$3}function c$9(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function o$e(t,a){return Math.max(h$a(t*a.scale,t,a.factor),c$9(t,a))}function m$3(e,t,a,i){return o$e(e,s$5(t,a,i))}const x$3={scale:0,factor:0,minPixelSize:0,paddingPixels:0};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const b$4=a$h();function x$2(t,n,e,o,i,r){if(t.visible)if(t.boundingInfo){s$b(t.type===e$h.Mesh);const s=n.tolerance;g$4(t.boundingInfo,e,o,s,i,r);}else {const n=t.indices.get(O$4.POSITION),s=t.vertexAttributes.get(O$4.POSITION);y$1(e,o,0,n.length/3,n,s,void 0,i,r);}}const d$7=n$9();function g$4(t,n,i,r,s,c){if(t$e(t))return;const f=O$2(n,i,d$7);if(G$4(b$4,t.bbMin),O$6(b$4,t.bbMax),r$9(s)&&s.applyToAabb(b$4),V$1(b$4,n,f,r)){const{primitiveIndices:e,indices:o,position:f}=t,l=e?e.length:o.length/3;if(l>U$1){const e=t.getChildren();if(void 0!==e){for(const t of e)g$4(t,n,i,r,s,c);return}}y$1(n,i,0,l,o,f,e,s,c);}}const M$1=n$9();function y$1(t,n,e,i,r,s,c,f,l){if(c)return j$2(t,n,e,i,r,s,c,f,l);const{data:a,stride:u}=s,m=t[0],p=t[1],h=t[2],b=n[0]-m,x=n[1]-p,d=n[2]-h;for(let g=e,y=3*e;g<i;++g){let t=u*r[y++],n=a[t++],e=a[t++],i=a[t];t=u*r[y++];let s=a[t++],c=a[t++],j=a[t];t=u*r[y++];let v=a[t++],T=a[t++],O=a[t];r$9(f)&&([n,e,i]=f.applyToVertex(n,e,i,g),[s,c,j]=f.applyToVertex(s,c,j,g),[v,T,O]=f.applyToVertex(v,T,O,g));const V=s-n,L=c-e,N=j-i,A=v-n,P=T-e,S=O-i,E=x*S-P*d,U=d*A-S*b,W=b*P-A*x,k=V*E+L*U+N*W;if(Math.abs(k)<=Number.EPSILON)continue;const B=m-n,C=p-e,z=h-i,H=B*E+C*U+z*W;if(k>0){if(H<0||H>k)continue}else if(H>0||H<k)continue;const R=C*N-L*z,Y=z*V-N*B,q=B*L-V*C,w=b*R+x*Y+d*q;if(k>0){if(w<0||H+w>k)continue}else if(w>0||H+w<k)continue;const D=(A*R+P*Y+S*q)/k;if(D>=0){l(D,I$5(V,L,N,A,P,S,M$1),g,!1);}}}function j$2(t,n,e,i,r,s,c,f,l){const{data:a,stride:u}=s,m=t[0],p=t[1],h=t[2],b=n[0]-m,x=n[1]-p,d=n[2]-h;for(let g=e;g<i;++g){const t=c[g];let n=3*t,e=u*r[n++],i=a[e++],s=a[e++],y=a[e];e=u*r[n++];let j=a[e++],v=a[e++],T=a[e];e=u*r[n];let O=a[e++],V=a[e++],L=a[e];r$9(f)&&([i,s,y]=f.applyToVertex(i,s,y,g),[j,v,T]=f.applyToVertex(j,v,T,g),[O,V,L]=f.applyToVertex(O,V,L,g));const N=j-i,A=v-s,P=T-y,S=O-i,E=V-s,U=L-y,W=x*U-E*d,k=d*S-U*b,B=b*E-S*x,C=N*W+A*k+P*B;if(Math.abs(C)<=Number.EPSILON)continue;const z=m-i,H=p-s,R=h-y,Y=z*W+H*k+R*B;if(C>0){if(Y<0||Y>C)continue}else if(Y>0||Y<C)continue;const q=H*P-A*R,w=R*N-P*z,D=z*A-N*H,F=b*q+x*w+d*D;if(C>0){if(F<0||Y+F>C)continue}else if(F>0||Y+F<C)continue;const G=(S*q+E*w+U*D)/C;if(G>=0){l(G,I$5(N,A,P,S,E,U,M$1),t,!1);}}}const v$5=n$9(),T$1=n$9();function I$5(t,n,e,o,c,f,l){return o$n(v$5,t,n,e),o$n(T$1,o,c,f),_$6(l,v$5,T$1),z$1(l,l),l}function O$2(t,n,e){return o$n(e,1/(n[0]-t[0]),1/(n[1]-t[1]),1/(n[2]-t[2]))}function V$1(t,n,e,o){return L$2(t,n,e,o,1/0)}function L$2(t,n,e,o,i){const r=(t[0]-o-n[0])*e[0],s=(t[3]+o-n[0])*e[0];let c=Math.min(r,s),f=Math.max(r,s);const l=(t[1]-o-n[1])*e[1],a=(t[4]+o-n[1])*e[1];if(f=Math.min(f,Math.max(l,a)),f<0)return !1;if(c=Math.max(c,Math.min(l,a)),c>f)return !1;const u=(t[2]-o-n[2])*e[2],m=(t[5]+o-n[2])*e[2];return f=Math.min(f,Math.max(u,m)),!(f<0)&&(c=Math.max(c,Math.min(u,m)),!(c>f)&&c<i)}function N$3(t,e,i,r,s){let c=(i.screenLength||0)*t.pixelRatio;r$9(s)&&(c=m$3(c,r,e,s));const f=c*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return a$i(f*e,i.minWorldLength||0,null!=i.maxWorldLength?i.maxWorldLength:1/0)}function A$1(t,n){const e=n?A$1(n):{};for(const o in t){let n=t[o];n&&n.forEach&&(n=S$3(n)),null==n&&o in e||(e[o]=n);}return e}function P$2(n,e){let o=!1;for(const i in e){const r=e[i];void 0!==r&&(Array.isArray(r)?null===n[i]?(n[i]=r.slice(),o=!0):c$k(n[i],r)&&(o=!0):n[i]!==r&&(o=!0,n[i]=r));}return o}function S$3(t){const n=[];return t.forEach((t=>n.push(t))),n}const E$3={multiply:1,ignore:2,replace:3,tint:4},U$1=1e3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let h$4 = class h extends r$8{constructor(e,t){super(),this.type=e$h.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=E$4,this._pp0=r$a(0,0,1),this._pp1=r$a(0,0,0),this._parameters=A$1(e,t),this.validateParameters(this._parameters);}dispose(){}get parameters(){return this._parameters}update(e){return !1}setParameters(e,r=!0){P$2(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this.parametersChanged());}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged());}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return !0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged());}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged());}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){r$9(this.repository)&&this.repository.materialChanged(this);}intersectDraped(e,r,t,s,i,a){return this._pp0[0]=this._pp1[0]=s[0],this._pp0[1]=this._pp1[1]=s[1],this.intersect(e,r,t,this._pp0,this._pp1,i)}};var c$8;!function(e){e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque";}(c$8||(c$8={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
var E$2;!function(E){E[E.INTEGRATED_MESH=0]="INTEGRATED_MESH",E[E.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",E[E.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",E[E.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",E[E.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",E[E.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",E[E.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",E[E.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",E[E.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",E[E.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",E[E.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",E[E.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",E[E.LASERLINES=12]="LASERLINES",E[E.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",E[E.HUD_MATERIAL=14]="HUD_MATERIAL",E[E.LABEL_MATERIAL=15]="LABEL_MATERIAL",E[E.LINE_CALLOUTS=16]="LINE_CALLOUTS",E[E.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",E[E.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",E[E.DRAPED_WATER=19]="DRAPED_WATER",E[E.VOXEL=20]="VOXEL",E[E.MAX_SLOTS=21]="MAX_SLOTS";}(E$2||(E$2={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let g$3 = class g{constructor(t=0){this.componentLocalOriginLength=0,this._tmpVertex=n$9(),this._mbs=R$2(),this._obb={center:n$9(),halfSize:n$g(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(t);}_resetOffset(t){this._offset=t,this._totalOffset=t;}set offset(t){this._resetOffset(t);}get offset(){return this._offset}set componentOffset(t){this._totalOffset=this._offset+t;}set localOrigin(t){this.componentLocalOriginLength=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);}applyToVertex(t,s,e){const i=t,r=s,a=e+this.componentLocalOriginLength,o=this._totalOffset/Math.sqrt(i*i+r*r+a*a);return this._tmpVertex[0]=t+i*o,this._tmpVertex[1]=s+r*o,this._tmpVertex[2]=e+a*o,this._tmpVertex}applyToAabb(t){const s=t[0],e=t[1],i=t[2]+this.componentLocalOriginLength,r=t[3],a=t[4],o=t[5]+this.componentLocalOriginLength,h=s*r<0?0:Math.min(Math.abs(s),Math.abs(r)),n=e*a<0?0:Math.min(Math.abs(e),Math.abs(a)),f=i*o<0?0:Math.min(Math.abs(i),Math.abs(o)),l=Math.sqrt(h*h+n*n+f*f);if(l<this._totalOffset)return t[0]-=s<0?this._totalOffset:0,t[1]-=e<0?this._totalOffset:0,t[2]-=i<0?this._totalOffset:0,t[3]+=r>0?this._totalOffset:0,t[4]+=a>0?this._totalOffset:0,t[5]+=o>0?this._totalOffset:0,t;const m=Math.max(Math.abs(s),Math.abs(r)),_=Math.max(Math.abs(e),Math.abs(a)),b=Math.max(Math.abs(i),Math.abs(o)),c=Math.sqrt(m*m+_*_+b*b),p=this._totalOffset/c,u=this._totalOffset/l;return t[0]+=s*(s>0?p:u),t[1]+=e*(e>0?p:u),t[2]+=i*(i>0?p:u),t[3]+=r*(r<0?p:u),t[4]+=a*(a<0?p:u),t[5]+=o*(o<0?p:u),t}applyToMbs(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),e=this._totalOffset/s;return this._mbs[0]=t[0]+t[0]*e,this._mbs[1]=t[1]+t[1]*e,this._mbs[2]=t[2]+t[2]*e,this._mbs[3]=t[3]+t[3]*this._totalOffset/s,this._mbs}applyToObb(t){const s=t.center,e=this._totalOffset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);this._obb.center[0]=s[0]+s[0]*e,this._obb.center[1]=s[1]+s[1]*e,this._obb.center[2]=s[2]+s[2]*e,E$a(this._obb.halfSize,t.halfSize,t.quaternion),u$a(this._obb.halfSize,this._obb.halfSize,t.center);const i=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*i,this._obb.halfSize[1]+=this._obb.halfSize[1]*i,this._obb.halfSize[2]+=this._obb.halfSize[2]*i,e$k(this._obb.halfSize,this._obb.halfSize,t.center),S$5(I$4,t.quaternion),E$a(this._obb.halfSize,this._obb.halfSize,I$4),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=t.quaternion,this._obb}};let x$1 = class x{constructor(t=0){this.offset=t,this.sphere=R$2(),this.tmpVertex=n$9();}applyToVertex(t,s,e){const i=this.objectTransform.transform;let r=i[0]*t+i[4]*s+i[8]*e+i[12],a=i[1]*t+i[5]*s+i[9]*e+i[13],o=i[2]*t+i[6]*s+i[10]*e+i[14];const h=this.offset/Math.sqrt(r*r+a*a+o*o);r+=r*h,a+=a*h,o+=o*h;const n=this.objectTransform.inverse;return this.tmpVertex[0]=n[0]*r+n[4]*a+n[8]*o+n[12],this.tmpVertex[1]=n[1]*r+n[5]*a+n[9]*o+n[13],this.tmpVertex[2]=n[2]*r+n[6]*a+n[10]*o+n[14],this.tmpVertex}applyToMinMax(t,s){const e=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*e,t[1]+=t[1]*e,t[2]+=t[2]*e;const i=this.offset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);s[0]+=s[0]*i,s[1]+=s[1]*i,s[2]+=s[2]*i;}applyToAabb(t){const s=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*s,t[1]+=t[1]*s,t[2]+=t[2]*s;const e=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*e,t[4]+=t[4]*e,t[5]+=t[5]*e,t}applyToBoundingSphere(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),e=this.offset/s;return this.sphere[0]=t[0]+t[0]*e,this.sphere[1]=t[1]+t[1]*e,this.sphere[2]=t[2]+t[2]*e,this.sphere[3]=t[3]+t[3]*this.offset/s,this.sphere}};const S$2=new x$1;function y(s){return r$9(s)?(S$2.offset=s,S$2):null}new g$3;const I$4=e$l();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function d$6(e,t,f,o){const r=f.typedBuffer,n=f.typedBufferStride,s=e.length;o*=n;for(let i=0;i<s;++i){const f=2*e[i];r[o]=t[f],r[o+1]=t[f+1],o+=n;}}function u$3(e,t,f,o,r){const n=f.typedBuffer,s=f.typedBufferStride,i=e.length;if(o*=s,null==r||1===r)for(let c=0;c<i;++c){const f=3*e[c];n[o]=t[f],n[o+1]=t[f+1],n[o+2]=t[f+2],o+=s;}else for(let c=0;c<i;++c){const f=3*e[c];for(let e=0;e<r;++e)n[o]=t[f],n[o+1]=t[f+1],n[o+2]=t[f+2],o+=s;}}function a$7(e,t,f,o,r=1){const n=f.typedBuffer,s=f.typedBufferStride,i=e.length;if(o*=s,1===r)for(let c=0;c<i;++c){const f=4*e[c];n[o]=t[f],n[o+1]=t[f+1],n[o+2]=t[f+2],n[o+3]=t[f+3],o+=s;}else for(let c=0;c<i;++c){const f=4*e[c];for(let e=0;e<r;++e)n[o]=t[f],n[o+1]=t[f+1],n[o+2]=t[f+2],n[o+3]=t[f+3],o+=s;}}function g$2(e,f,o,r,n,s=1){if(!o)return void u$3(e,f,r,n,s);const i=r.typedBuffer,c=r.typedBufferStride,l=e.length,d=o[0],a=o[1],p=o[2],y=o[4],B=o[5],g=o[6],b=o[8],h=o[9],O=o[10],N=o[12],S=o[13],m=o[14];n*=c;let A=0,L=0,R=0;const v=H$2(o)?e=>{A=f[e]+N,L=f[e+1]+S,R=f[e+2]+m;}:e=>{const t=f[e],o=f[e+1],r=f[e+2];A=d*t+y*o+b*r+N,L=a*t+B*o+h*r+S,R=p*t+g*o+O*r+m;};if(1===s)for(let t=0;t<l;++t)v(3*e[t]),i[n]=A,i[n+1]=L,i[n+2]=R,n+=c;else for(let t=0;t<l;++t){v(3*e[t]);for(let e=0;e<s;++e)i[n]=A,i[n+1]=L,i[n+2]=R,n+=c;}}function b$3(e,o,r,n,s,i=1){if(!r)return void u$3(e,o,n,s,i);const c=r,l=n.typedBuffer,d=n.typedBufferStride,a=e.length,p=c[0],y=c[1],B=c[2],g=c[4],b=c[5],h=c[6],O=c[8],N=c[9],S=c[10],m=!G$5(c),A=1e-6,L=1-A;s*=d;let R=0,v=0,E=0;const F=H$2(c)?e=>{R=o[e],v=o[e+1],E=o[e+2];}:e=>{const t=o[e],f=o[e+1],r=o[e+2];R=p*t+g*f+O*r,v=y*t+b*f+N*r,E=B*t+h*f+S*r;};if(1===i)if(m)for(let t=0;t<a;++t){F(3*e[t]);const f=R*R+v*v+E*E;if(f<L&&f>A){const e=1/Math.sqrt(f);l[s]=R*e,l[s+1]=v*e,l[s+2]=E*e;}else l[s]=R,l[s+1]=v,l[s+2]=E;s+=d;}else for(let t=0;t<a;++t)F(3*e[t]),l[s]=R,l[s+1]=v,l[s+2]=E,s+=d;else for(let t=0;t<a;++t){if(F(3*e[t]),m){const e=R*R+v*v+E*E;if(e<L&&e>A){const t=1/Math.sqrt(e);R*=t,v*=t,E*=t;}}for(let e=0;e<i;++e)l[s]=R,l[s+1]=v,l[s+2]=E,s+=d;}}function h$3(e,t,o,r,n,s=1){if(!o)return void a$7(e,t,r,n,s);const i=o,c=r.typedBuffer,l=r.typedBufferStride,d=e.length,u=i[0],p=i[1],y=i[2],B=i[4],g=i[5],b=i[6],h=i[8],O=i[9],N=i[10],S=!G$5(i),m=1e-6,A=1-m;if(n*=l,1===s)for(let f=0;f<d;++f){const o=4*e[f],r=t[o],s=t[o+1],i=t[o+2],d=t[o+3];let a=u*r+B*s+h*i,L=p*r+g*s+O*i,R=y*r+b*s+N*i;if(S){const e=a*a+L*L+R*R;if(e<A&&e>m){const t=1/Math.sqrt(e);a*=t,L*=t,R*=t;}}c[n]=a,c[n+1]=L,c[n+2]=R,c[n+3]=d,n+=l;}else for(let f=0;f<d;++f){const o=4*e[f],r=t[o],i=t[o+1],d=t[o+2],a=t[o+3];let L=u*r+B*i+h*d,R=p*r+g*i+O*d,v=y*r+b*i+N*d;if(S){const e=L*L+R*R+v*v;if(e<A&&e>m){const t=1/Math.sqrt(e);L*=t,R*=t,v*=t;}}for(let e=0;e<s;++e)c[n]=L,c[n+1]=R,c[n+2]=v,c[n+3]=a,n+=l;}}function O$1(e,t,f,o,r,n=1){const s=o.typedBuffer,i=o.typedBufferStride,c=e.length;if(r*=i,f!==t.length||4!==f)if(1!==n)if(4!==f)for(let l=0;l<c;++l){const f=3*e[l];for(let e=0;e<n;++e)s[r]=t[f],s[r+1]=t[f+1],s[r+2]=t[f+2],s[r+3]=255,r+=i;}else for(let l=0;l<c;++l){const f=4*e[l];for(let e=0;e<n;++e)s[r]=t[f],s[r+1]=t[f+1],s[r+2]=t[f+2],s[r+3]=t[f+3],r+=i;}else {if(4===f){for(let f=0;f<c;++f){const o=4*e[f];s[r]=t[o],s[r+1]=t[o+1],s[r+2]=t[o+2],s[r+3]=t[o+3],r+=i;}return}for(let f=0;f<c;++f){const o=3*e[f];s[r]=t[o],s[r+1]=t[o+1],s[r+2]=t[o+2],s[r+3]=255,r+=i;}}else {s[r]=t[0],s[r+1]=t[1],s[r+2]=t[2],s[r+3]=t[3];const e=new Uint32Array(o.typedBuffer.buffer,o.start),f=i/4,l=e[r/=4];r+=f;const d=c*n;for(let t=1;t<d;++t)e[r]=l,r+=f;}}function N$2(e,t,f,o,r=1){const n=t.typedBuffer,s=t.typedBufferStride;if(o*=s,1===r)for(let i=0;i<f;++i)n[o]=e[0],n[o+1]=e[1],n[o+2]=e[2],n[o+3]=e[3],o+=s;else for(let i=0;i<f;++i)for(let t=0;t<r;++t)n[o]=e[0],n[o+1]=e[1],n[o+2]=e[2],n[o+3]=e[3],o+=s;}function S$1(t,f,l,u,p,y){for(const B of f.fieldNames){const f=t.vertexAttributes.get(B),S=t.indices.get(B);if(f&&S)switch(B){case O$4.POSITION:{s$b(3===f.size);const e=p.getField(B,i$k);s$b(!!e,`No buffer view for ${B}`),e&&g$2(S,f.data,l,e,y);break}case O$4.NORMAL:{s$b(3===f.size);const e=p.getField(B,i$k);s$b(!!e,`No buffer view for ${B}`),e&&b$3(S,f.data,u,e,y);break}case O$4.UV0:{s$b(2===f.size);const e=p.getField(B,u$c);s$b(!!e,`No buffer view for ${B}`),e&&d$6(S,f.data,e,y);break}case O$4.COLOR:case O$4.SYMBOLCOLOR:{s$b(3===f.size||4===f.size);const e=p.getField(B,x$7);s$b(!!e,`No buffer view for ${B}`),e&&O$1(S,f.data,f.size,e,y);break}case O$4.TANGENT:{s$b(4===f.size);const e=p.getField(B,c$l);s$b(!!e,`No buffer view for ${B}`),e&&h$3(S,f.data,u,e,y);break}case O$4.PROFILERIGHT:case O$4.PROFILEUP:case O$4.PROFILEVERTEXANDNORMAL:case O$4.FEATUREVALUE:{s$b(4===f.size);const e=p.getField(B,c$l);s$b(!!e,`No buffer view for ${B}`),e&&a$7(S,f.data,e,y);}}else if(B===O$4.OBJECTANDLAYERIDCOLOR&&r$9(t.objectAndLayerIdColor)){const e=t.indices.get(O$4.POSITION);if(s$b(!!e,`No buffer view for ${B}`),e){const f=e.length,o=p.getField(B,x$7);N$2(t.objectAndLayerIdColor,o,f,y);}}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let r$4 = class r{constructor(t){this.vertexBufferLayout=t;}allocate(t){return this.vertexBufferLayout.createBuffer(t)}elementCount(e){return e.indices.get(O$4.POSITION).length}write(t,r,i,u,f){S$1(i,this.vertexBufferLayout,t,r,u,f);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function o$d(o){const f=o$q`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;o.vertex.code.add(f);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function i$8(i,d){switch(d.normalType){case a$6.CompressedAttribute:i.include(o$d),i.attributes.add(O$4.NORMALCOMPRESSED,"vec2"),i.vertex.code.add(o$q`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`);break;case a$6.Attribute:i.attributes.add(O$4.NORMAL,"vec3"),i.vertex.code.add(o$q`vec3 normalModel() {
return normal;
}`);break;case a$6.ScreenDerivative:i.extensions.add("GL_OES_standard_derivatives"),i.fragment.code.add(o$q`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:n$e(d.normalType);case a$6.COUNT:case a$6.Ground:}}var a$6;!function(e){e[e.Attribute=0]="Attribute",e[e.CompressedAttribute=1]="CompressedAttribute",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT";}(a$6||(a$6={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function o$c(o){o.attributes.add(O$4.POSITION,"vec3"),o.vertex.code.add(o$q`vec3 positionModel() { return position; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function c$7({code:c},i){i.doublePrecisionRequiresObfuscation?c.add(o$q`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):c.add(o$q`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let o$b = class o extends i$f{constructor(r,o){super(r,"mat3",a$c.Draw,((e,s,t)=>e.setUniformMatrix3fv(r,o(s,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let e$b = class e extends i$f{constructor(r,e){super(r,"mat3",a$c.Pass,((s,o,t)=>s.setUniformMatrix3fv(r,e(o,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let e$a = class e extends i$f{constructor(r,e){super(r,"mat4",a$c.Pass,((s,o,t)=>s.setUniformMatrix4fv(r,e(o,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function F(r,o){r.include(o$c);const e=r.vertex;e.include(c$7,o),r.varyings.add("vPositionWorldCameraRelative","vec3"),r.varyings.add("vPosition_view","vec3"),e.uniforms.add([new e$c("transformWorldFromViewTH",(r=>r.transformWorldFromViewTH)),new e$c("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL)),new e$b("transformViewFromCameraRelativeRS",(r=>r.transformViewFromCameraRelativeRS)),new e$a("transformProjFromView",(r=>r.transformProjFromView)),new o$b("transformWorldFromModelRS",(r=>r.transformWorldFromModelRS)),new o$h("transformWorldFromModelTH",(r=>r.transformWorldFromModelTH)),new o$h("transformWorldFromModelTL",(r=>r.transformWorldFromModelTL))]),e.code.add(o$q`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),e.code.add(o$q`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${o.spherical?o$q`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:o$q`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),r.fragment.uniforms.add(new e$c("transformWorldFromViewTL",(r=>r.transformWorldFromViewTL))),e.code.add(o$q`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),r.fragment.code.add(o$q`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`);}let c$6 = class c extends n$c{constructor(){super(...arguments),this.transformWorldFromViewTH=n$9(),this.transformWorldFromViewTL=n$9(),this.transformViewFromCameraRelativeRS=e$m(),this.transformProjFromView=e$n();}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function c$5(o,a){switch(a.normalType){case a$6.Attribute:case a$6.CompressedAttribute:o.include(i$8,a),o.varyings.add("vNormalWorld","vec3"),o.varyings.add("vNormalView","vec3"),o.vertex.uniforms.add([new o$b("transformNormalGlobalFromModel",(r=>r.transformNormalGlobalFromModel)),new e$b("transformNormalViewFromGlobal",(r=>r.transformNormalViewFromGlobal))]),o.vertex.code.add(o$q`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case a$6.Ground:o.include(F,a),o.varyings.add("vNormalWorld","vec3"),o.vertex.code.add(o$q`
        void forwardNormal() {
          vNormalWorld = ${a.spherical?o$q`normalize(vPositionWorldCameraRelative);`:o$q`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case a$6.ScreenDerivative:o.vertex.code.add(o$q`void forwardNormal() {}`);break;default:n$e(a.normalType);case a$6.COUNT:}}let f$6 = class f extends c$6{constructor(){super(...arguments),this.transformNormalViewFromGlobal=e$m();}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const o$a=.1,t$7=.001;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let t$6 = class t{constructor(t,o){this._module=t,this._loadModule=o;}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let e$9 = class e{constructor(i,t,e){this.release=e,this.initializeConfiguration(i,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(i),this._pipeline=this.initializePipeline(i.rctx.capabilities);}destroy(){this._program=h$b(this._program),this._pipeline=this._configuration=null;}reload(t){h$b(this._program),this._program=this.initializeProgram(t),this._pipeline=this.initializePipeline(t.rctx.capabilities);}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(i,t=null,e){i.setPipelineState(this.getPipelineState(t,e));}ensureAttributeLocations(i){this.program.assertCompatibleVertexAttributeLocations(i);}get primitiveType(){return E$9.TRIANGLES}getPipelineState(i,t){return this._pipeline}initializeConfiguration(i,t){}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let o$9 = class o{constructor(t,e,o){this._context=t,this._locations=o,this._textures=new Map,this._freeTextureUnits=new l$9({deallocator:null}),this._glProgram=t.programCache.acquire(e.generate("vertex"),e.generate("fragment"),o),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=e.generateBind(a$c.Pass,this),this.bindDraw=e.generateBind(a$c.Draw,this),this._fragmentUniforms=a$j()?e.fragmentUniforms:null;}dispose(){this._glProgram.dispose();}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(t,e){this._glProgram.setUniform1i(t,e?1:0);}setUniform1i(t,e){this._glProgram.setUniform1i(t,e);}setUniform1f(t,e){this._glProgram.setUniform1f(t,e);}setUniform2fv(t,e){this._glProgram.setUniform2fv(t,e);}setUniform3fv(t,e){this._glProgram.setUniform3fv(t,e);}setUniform4fv(t,e){this._glProgram.setUniform4fv(t,e);}setUniformMatrix3fv(t,e){this._glProgram.setUniformMatrix3fv(t,e);}setUniformMatrix4fv(t,e){this._glProgram.setUniformMatrix4fv(t,e);}setUniform1fv(t,e){this._glProgram.setUniform1fv(t,e);}setUniform1iv(t,e){this._glProgram.setUniform1iv(t,e);}setUniform2iv(t,e){this._glProgram.setUniform3iv(t,e);}setUniform3iv(t,e){this._glProgram.setUniform3iv(t,e);}setUniform4iv(t,e){this._glProgram.setUniform4iv(t,e);}assertCompatibleVertexAttributeLocations(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible");}stop(){this._textures.clear(),this._freeTextureUnits.clear();}bindTexture(e,r){if(t$e(r)||null==r.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let i=this._textures.get(e);return null==i?(i=this._allocTextureUnit(r),this._textures.set(e,i)):i.texture=r,this._context.useProgram(this),this.setUniform1i(e,i.unit),this._context.bindTexture(r,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((t,e)=>{this._context.bindTexture(t.texture,t.unit),this.setUniform1i(e,t.unit);})),r$9(this._fragmentUniforms)&&this._fragmentUniforms.forEach((t=>{"sampler2D"!==t.type&&"samplerCube"!==t.type||this._textures.has(t.name)||console.error(`Texture sampler ${t.name} has no bound texture`);}));}_allocTextureUnit(t){return {texture:t,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(t){this._freeTextureUnits.push(t.unit);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
({func:I$6.LESS});({func:I$6.ALWAYS});const e$8={mask:255},f$5={function:{func:I$6.ALWAYS,ref:a$k.OutlineVisualElementMask,mask:a$k.OutlineVisualElementMask},operation:{fail:O$7.KEEP,zFail:O$7.KEEP,zPass:O$7.ZERO}},o$8={function:{func:I$6.ALWAYS,ref:a$k.OutlineVisualElementMask,mask:a$k.OutlineVisualElementMask},operation:{fail:O$7.KEEP,zFail:O$7.KEEP,zPass:O$7.REPLACE}};({function:{func:I$6.EQUAL,ref:a$k.OutlineVisualElementMask,mask:a$k.OutlineVisualElementMask},operation:{fail:O$7.KEEP,zFail:O$7.KEEP,zPass:O$7.KEEP}});({function:{func:I$6.NOTEQUAL,ref:a$k.OutlineVisualElementMask,mask:a$k.OutlineVisualElementMask},operation:{fail:O$7.KEEP,zFail:O$7.KEEP,zPass:O$7.KEEP}});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function t$5(e){e.varyings.add("linearDepth","float");}function i$7(e){e.vertex.uniforms.add(new e$f("nearFar",((e,r)=>r.camera.nearFar)));}function n$6(e){e.vertex.code.add(o$q`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`);}function d$5(a,d){const{vertex:s}=a;switch(d.output){case h$6.Color:if(d.receiveShadows)return t$5(a),void s.code.add(o$q`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case h$6.Depth:case h$6.Shadow:case h$6.ShadowHighlight:case h$6.ShadowExcludeHighlight:return a.include(F,d),t$5(a),i$7(a),n$6(a),void s.code.add(o$q`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}s.code.add(o$q`void forwardLinearDepth() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function e$7(e){e.vertex.code.add(o$q`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function u$2(s,i){H$1(s,i,[new o$h("slicePlaneOrigin",((e,s)=>v$4(i,e,s))),new o$h("slicePlaneBasis1",((s,a)=>B$1(i,s,a,e$o(a.slicePlane)?.basis1))),new o$h("slicePlaneBasis2",((s,a)=>B$1(i,s,a,e$o(a.slicePlane)?.basis2)))]);}function H$1(e,s,i){if(!s.hasSlicePlane){const i=o$q`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return s.hasSliceInVertexProgram&&e.vertex.code.add(i),void e.fragment.code.add(i)}e.extensions.add("GL_OES_standard_derivatives"),s.hasSliceInVertexProgram&&e.vertex.uniforms.add(i),e.fragment.uniforms.add(i);const a=o$q`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,o=o$q`vec4 applySliceHighlight(vec4 color, vec3 pos) {
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
}`,c=s.hasSliceHighlight?o$q`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:o$q`#define highlightSlice(_color_, _pos_) (_color_)`;s.hasSliceInVertexProgram&&e.vertex.code.add(a),e.fragment.code.add(a),e.fragment.code.add(c);}function g$1(e,s,i){return e.instancedDoublePrecision?o$n(S,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]):s.slicePlaneLocalOrigin}function I$3(e,s){return r$9(e)?e$k(L$1,s.origin,e):s.origin}function b$2(e,s,o){return e.hasSliceTranslatedView?r$9(s)?i$l(G$1,o.camera.viewMatrix,s):o.camera.viewMatrix:null}function v$4(e,a,o){if(t$e(o.slicePlane))return f$g;const r=g$1(e,a,o),l=I$3(r,o.slicePlane),t=b$2(e,r,o);return r$9(t)?O$5(L$1,l,t):l}function B$1(e,a,o,t){if(t$e(t)||t$e(o.slicePlane))return f$g;const f=g$1(e,a,o),d=I$3(f,o.slicePlane),_=b$2(e,f,o);return r$9(_)?(u$a(w$1,t,d),O$5(L$1,d,_),O$5(w$1,w$1,_),e$k(w$1,w$1,L$1)):t}const S=n$9(),L$1=n$9(),w$1=n$9(),G$1=e$n();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function r$3(r,t){if(n$6(r),t.hasModelTransformation)return r.vertex.code.add(o$q`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = calculateLinearDepth(nearFar, eye.z);
return proj * eye;
}`),void r.vertex.code.add(o$q`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);r.vertex.code.add(o$q`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),r.vertex.code.add(o$q`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let o$7 = class o extends i$f{constructor(r,o){super(r,"mat4",a$c.Draw,((e,s,t)=>e.setUniformMatrix4fv(r,o(s,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function c$4(r,e){e.instancedDoublePrecision?r.constants.add("cameraPosition","vec3",f$g):r.uniforms.add(new o$h("cameraPosition",((r,e)=>o$n(f$4,e.camera.viewInverseTransposeMatrix[3]-r.origin[0],e.camera.viewInverseTransposeMatrix[7]-r.origin[1],e.camera.viewInverseTransposeMatrix[11]-r.origin[2]))));}function v$3(e,i){if(!i.instancedDoublePrecision)return void e.uniforms.add([new e$a("proj",((r,e)=>e.camera.projectionMatrix)),new o$7("view",((e,a)=>i$l(w,a.camera.viewMatrix,e.origin))),new o$h("localOrigin",(r=>r.origin))]);const o=r=>o$n(f$4,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]);e.uniforms.add([new e$a("proj",((r,e)=>e.camera.projectionMatrix)),new e$a("view",((e,a)=>i$l(w,a.camera.viewMatrix,o(a)))),new e$c("localOrigin",((r,e)=>o(e)))]);}const w=e$p(),f$4=n$9();function d$4(r){r.uniforms.add(new e$a("viewNormal",((r,e)=>e.camera.viewInverseTransposeMatrix)));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let t$4 = class t extends n$c{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[]);}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}};function r$2(e={}){return (t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else {const s=t._parameterNames.length-1,a=e.count||2,i=Math.ceil(Math.log2(a)),o=t._parameterBits??[0];let h=0;for(;o[h]+i>16;)h++,h>=o.length&&o.push(0);t._parameterBits=o;const n=o[h],m=(1<<i)-1<<n;o[h]+=i,Object.defineProperty(t,r,{get(){return this[s]},set(e){if(this[s]!==e&&(this[s]=e,this._keyDirty=!0,this._parameterBits[h]=this._parameterBits[h]&~m|+e<<n&m,"number"!=typeof e&&"boolean"!=typeof e))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof e)}});}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let v$2 = class v extends t$4{constructor(){super(...arguments),this.instancedDoublePrecision=!1;}};function p$2(e,i){i.instanced&&i.instancedDoublePrecision&&(e.attributes.add(O$4.MODELORIGINHI,"vec3"),e.attributes.add(O$4.MODELORIGINLO,"vec3"),e.attributes.add(O$4.MODEL,"mat3"),e.attributes.add(O$4.MODELNORMAL,"mat3"));const c=e.vertex;i.instancedDoublePrecision&&(c.include(c$7,i),c.uniforms.add(new o$h("viewOriginHi",((e,i)=>o$s(o$n(b$1,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),b$1)))),c.uniforms.add(new o$h("viewOriginLo",((e,i)=>r$g(o$n(b$1,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]),b$1))))),c.code.add(o$q`
    vec3 calculateVPos() {
      ${i.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),c.code.add(o$q`
    vec3 subtractOrigin(vec3 _pos) {
      ${i.instancedDoublePrecision?o$q`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),c.code.add(o$q`
    vec3 dpNormal(vec4 _normal) {
      ${i.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),i.output===h$6.Normal&&(d$4(c),c.code.add(o$q`
    vec3 dpNormalView(vec4 _normal) {
      ${i.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),i.hasVertexTangents&&c.code.add(o$q`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${i.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `);}e$q([r$2()],v$2.prototype,"instancedDoublePrecision",void 0);const b$1=n$9();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function e$6(e){e.vertex.code.add(o$q`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${o$q.int(r$h.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${o$q.int(r$h.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${o$q.int(r$h.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${o$q.int(r$h.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let e$5 = class e extends i$f{constructor(r,e){super(r,"int",a$c.Pass,((s,o,i)=>s.setUniform1i(r,e(o,i))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function i$6(i,t){t.hasSymbolColors?(i.include(e$6),i.attributes.add(O$4.SYMBOLCOLOR,"vec4"),i.varyings.add("colorMixMode","mediump float"),i.vertex.code.add(o$q`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(i.fragment.uniforms.add(new e$5("colorMixMode",(o=>E$3[o.colorMixMode]))),i.vertex.code.add(o$q`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function e$4(e,d){d.hasVertexColors?(e.attributes.add(O$4.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(o$q`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(o$q`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(o$q`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function c$3(e){e.vertex.code.add(o$q`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(o$q`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(o$q`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(o$q`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(o$q`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(o$q`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(o$q`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`);}function i$5(e){e.uniforms.add(new e$g("screenSizePerspectiveAlignment",(e=>o$6(e.screenSizePerspectiveAlignment||e.screenSizePerspective))));}function o$6(a){return r$i(n$5,a.parameters.divisor,a.parameters.offset,a.parameters.minPixelSize,a.paddingPixelsOverride)}const n$5=n$h();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function a$5(e,r){const c=e.vertex;r.hasVerticalOffset?(f$3(c),r.hasScreenSizePerspective&&(e.include(c$3),i$5(c),c$4(e.vertex,r)),c.code.add(o$q`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${r.spherical?o$q`vec3 worldNormal = normalize(worldPos + localOrigin);`:o$q`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${r.hasScreenSizePerspective?o$q`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:o$q`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):c.code.add(o$q`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`);}const i$4=n$h();function f$3(r){r.uniforms.add(new e$g("verticalOffset",((r,t)=>{const{minWorldLength:l,maxWorldLength:o,screenLength:c}=r.verticalOffset,s=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),a=t.camera.pixelRatio||1;return r$i(i$4,c*a,s,l,o)})));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function d$3(d,t){const a=t.output===h$6.ObjectAndLayerIdColor,n=t.objectAndLayerIdColorInstanced;a&&(d.varyings.add("objectAndLayerIdColorVarying","vec4"),n?d.attributes.add(O$4.OBJECTANDLAYERIDCOLOR_INSTANCED,"vec4"):d.attributes.add(O$4.OBJECTANDLAYERIDCOLOR,"vec4")),d.vertex.code.add(o$q`
     void forwardObjectAndLayerIdColor() {
      ${a?n?o$q`objectAndLayerIdColorVarying = objectAndLayerIdColor_instanced * 0.003921568627451;`:o$q`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:o$q``} }`),d.fragment.code.add(o$q`
      void outputObjectAndLayerIdColor() {
        ${a?o$q`gl_FragColor = objectAndLayerIdColorVarying;`:o$q``} }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function a$4(a){a.code.add(o$q`const float MAX_RGBA_FLOAT =
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
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function o$5(o,l){switch(o.fragment.include(a$4),l.output){case h$6.Shadow:case h$6.ShadowHighlight:case h$6.ShadowExcludeHighlight:o.extensions.add("GL_OES_standard_derivatives"),o.fragment.code.add(o$q`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case h$6.Depth:o.fragment.code.add(o$q`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const g=r$d(1,1,0,1),i$3=r$d(1,0,1,1);function a$3(e,a){e.fragment.uniforms.add(u$7("depthTex",((e,o)=>o.highlightDepthTexture),a.hasWebGL2Context?e$e.None:e$e.InvSize)),e.fragment.constants.add("occludedHighlightFlag","vec4",g).add("unoccludedHighlightFlag","vec4",i$3),e.fragment.code.add(o$q`
    void outputHighlight() {
      vec3 fragCoord = gl_FragCoord.xyz;

      float sceneDepth = ${i$d(a,"depthTex","fragCoord.xy")}.x;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let e$3 = class e extends i$f{constructor(r,e,o){super(r,"vec4",a$c.Pass,((s,o,t)=>s.setUniform4fv(r,e(o,t))),o);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let o$4 = class o extends i$f{constructor(r,o,e){super(r,"float",a$c.Pass,((s,e,t)=>s.setUniform1fv(r,o(e,t))),e);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const o$3=8;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function s$4(s,n){n.hasVvInstancing&&(n.vvSize||n.vvColor)&&s.attributes.add(O$4.INSTANCEFEATUREATTRIBUTE,"vec4");const l=s.vertex;n.vvSize?(l.uniforms.add(new e$c("vvSizeMinSize",(e=>e.vvSizeMinSize))),l.uniforms.add(new e$c("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),l.uniforms.add(new e$c("vvSizeOffset",(e=>e.vvSizeOffset))),l.uniforms.add(new e$c("vvSizeFactor",(e=>e.vvSizeFactor))),l.uniforms.add(new e$b("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),l.uniforms.add(new e$c("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),l.code.add(o$q`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),l.code.add(o$q`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${n.hasVvInstancing?o$q`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):l.code.add(o$q`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),n.vvColor?(l.constants.add("vvColorNumber","int",o$3),n.hasVvInstancing&&l.uniforms.add([new o$4("vvColorValues",(e=>e.vvColorValues),o$3),new e$3("vvColorColors",(e=>e.vvColorColors),o$3)]),l.code.add(o$q`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${n.hasVvInstancing?o$q`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):l.code.add(o$q`vec4 vvColor() { return vec4(1.0); }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function d$2(d){d.fragment.code.add(o$q`
    #define discardOrAdjustAlpha(color) { if (color.a < ${o$q.float(t$7)}) { discard; } }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let o$2 = class o extends i$f{constructor(r,o){super(r,"float",a$c.Pass,((s,e,t)=>s.setUniform1f(r,o(e,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function s$3(a,e){l$2(a,e,new o$2("textureAlphaCutoff",(a=>a.textureAlphaCutoff)));}function l$2(e,r,s){const t=e.fragment;switch(r.alphaDiscardMode!==u$d.Mask&&r.alphaDiscardMode!==u$d.MaskBlend||t.uniforms.add(s),r.alphaDiscardMode){case u$d.Blend:return e.include(d$2);case u$d.Opaque:t.code.add(o$q`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case u$d.Mask:t.code.add(o$q`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case u$d.MaskBlend:e.fragment.code.add(o$q`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function b(b,O){const{vertex:w,fragment:C}=b,T=O.hasModelTransformation;T&&w.uniforms.add(new e$a("model",(e=>r$9(e.modelTransformation)?e.modelTransformation:o$p)));const V=O.hasColorTexture&&O.alphaDiscardMode!==u$d.Opaque;switch(O.output){case h$6.Depth:case h$6.Shadow:case h$6.ShadowHighlight:case h$6.ShadowExcludeHighlight:case h$6.ObjectAndLayerIdColor:v$3(w,O),b.include(r$3,O),b.include(o$i,O),b.include(s$4,O),b.include(o$5,O),b.include(u$2,O),b.include(d$3,O),i$7(b),b.varyings.add("depth","float"),V&&C.uniforms.add(new f$a("tex",(o=>o.texture))),w.code.add(o$q`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${T?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),b.include(s$3,O),C.code.add(o$q`
          void main(void) {
            discardBySlice(vpos);
            ${V?o$q`
                    vec4 texColor = texture2D(tex, ${O.hasColorTextureTransform?o$q`colorUV`:o$q`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${O.output===h$6.ObjectAndLayerIdColor?o$q`outputObjectAndLayerIdColor();`:o$q`outputDepth(depth);`}
          }
        `);break;case h$6.Normal:v$3(w,O),b.include(r$3,O),b.include(i$8,O),b.include(c$5,O),b.include(o$i,O),b.include(s$4,O),V&&C.uniforms.add(new f$a("tex",(o=>o.texture))),b.varyings.add("vPositionView","vec3"),w.code.add(o$q`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${O.normalType===a$6.Attribute?o$q`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${T?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),b.include(u$2,O),b.include(s$3,O),C.code.add(o$q`
          void main() {
            discardBySlice(vpos);
            ${V?o$q`
                    vec4 texColor = texture2D(tex, ${O.hasColorTextureTransform?o$q`colorUV`:o$q`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${O.normalType===a$6.ScreenDerivative?o$q`
                vec3 normal = screenDerivativeNormal(vPositionView);`:o$q`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case h$6.Highlight:v$3(w,O),b.include(r$3,O),b.include(o$i,O),b.include(s$4,O),V&&C.uniforms.add(new f$a("tex",(o=>o.texture))),w.code.add(o$q`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${T?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),b.include(u$2,O),b.include(s$3,O),b.include(a$3,O),C.code.add(o$q`
          void main() {
            discardBySlice(vpos);
            ${V?o$q`
                    vec4 texColor = texture2D(tex, ${O.hasColorTextureTransform?o$q`colorUV`:o$q`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function c$2(c,u){const l=c.fragment;if(u.hasVertexTangents?(c.attributes.add(O$4.TANGENT,"vec4"),c.varyings.add("vTangent","vec4"),u.doubleSidedMode===i$9.WindingOrder?l.code.add(o$q`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):l.code.add(o$q`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(c.extensions.add("GL_OES_standard_derivatives"),l.code.add(o$q`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`)),u.textureCoordinateType!==d$9.None){c.include(a$9,u);const e=u.supportsTextureAtlas?u.hasWebGL2Context?e$e.None:e$e.Size:e$e.None;l.uniforms.add(u.pbrTextureBindType===a$c.Pass?u$7("normalTexture",(e=>e.textureNormal),e):u$4("normalTexture",(e=>e.textureNormal),e)),l.code.add(o$q`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${u.supportsTextureAtlas?o$q`vtc.size = ${r$6(u,"normalTexture")};`:""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function a$2(a){a.include(a$4),a.code.add(o$q`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const f$2=4;function c$1(){const c=new o$j,u=c.fragment;c.include(o$k);const m=(f$2+1)/2,p=1/(2*m*m);return u.include(a$2),u.uniforms.add([new f$a("depthMap",(e=>e.depthTexture)),new f$7("tex",(e=>e.colorTexture)),new o$g("blurSize",(e=>e.blurSize)),new o$2("projScale",((r,o)=>{const t=x$8(o.camera.eye,o.camera.center);return t>5e4?Math.max(0,r.projScale-(t-5e4)):r.projScale})),new e$f("nearFar",((e,r)=>r.camera.nearFar))]),u.code.add(o$q`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture2D(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${o$q.float(p)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),u.code.add(o$q`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${o$q.int(f$2)}; r <= ${o$q.int(f$2)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      gl_FragColor = vec4(b / w_total);
    }
  `),c}const u$1=Object.freeze(Object.defineProperty({__proto__:null,build:c$1},Symbol.toStringTag,{value:"Module"}));

let l$1 = class l extends e$9{initializeProgram(r){return new o$9(r.rctx,l.shader.get().build(),E$4)}initializePipeline(){return W({colorWrite:_$8})}};l$1.shader=new t$6(u$1,(()=>__vitePreload(() => import('./SSAOBlur.glsl-377043ac.js'),true?["./SSAOBlur.glsl-377043ac.js","./main-5658cd6e.js","./preload-helper-a4975f27.js","./main-2af48127.css","./OrderIndependentTransparency-639df392.js","./enums-1f7f0b0a.js","./basicInterfaces-9de11baf.js","./VertexAttribute-a23f2f69.js","./devEnvironmentUtils-d73295e7.js","./mat3f64-f0e5b33e.js","./mat4f64-151d6b53.js","./BufferView-280c2f14.js","./vec33-10cb0362.js","./DefaultMaterial_COLOR_GAMMA-eb95e6eb.js","./types-814802c7.js","./quat-1e678ab0.js","./quatf64-3a66031a.js","./resourceUtils-267be27b.js","./Indices-ea523834.js","./NestedMap-5d3a039b.js","./requestImageUtils-b6c78b33.js","./sphere-de757ffd.js","./lineSegment-dd6132c1.js","./Texture-aefe232f.js","./VertexArrayObject-2ba4bad7.js","./VertexElementDescriptor-a439aa9a.js","./InterleavedLayout-769e3a2b.js","./vec3f32-b6e01a26.js","./doublePrecisionUtils-fe2da5f2.js","./symbolColorUtils-800e4542.js"]:void 0,import.meta.url)));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function n$4(r){r.fragment.uniforms.add(new e$g("projInfo",((r,o)=>f$1(o)))),r.fragment.uniforms.add(new e$f("zScale",((r,o)=>i$2(o)))),r.fragment.code.add(o$q`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`);}function f$1(r){const o=r.camera.projectionMatrix;return 0===o[11]?r$i(m$2,2/(r.camera.fullWidth*o[0]),2/(r.camera.fullHeight*o[5]),(1+o[12])/o[0],(1+o[13])/o[5]):r$i(m$2,-2/(r.camera.fullWidth*o[0]),-2/(r.camera.fullHeight*o[5]),(1-o[8])/o[0],(1-o[9])/o[5])}const m$2=n$h();function i$2(o){return 0===o.camera.projectionMatrix[11]?r$c(d$1,0,1):r$c(d$1,1,0)}const d$1=n$b();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const m$1=16;function d(){const t=new o$j,d=t.fragment;return t.include(o$k),d.include(a$2),t.include(n$4),d.uniforms.add(new o$2("radius",((e,r)=>p$1(r.camera)))),d.code.add(o$q`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn-bias, 0.0);
}`),d.code.add(o$q`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),d.uniforms.add([new e$f("nearFar",((e,r)=>r.camera.nearFar)),new f$a("normalMap",(e=>e.normalTexture)),new f$a("depthMap",(e=>e.depthTexture)),new e$f("zScale",((e,r)=>i$2(r))),new o$2("projScale",(e=>e.projScale)),new f$a("rnm",(e=>e.noiseTexture)),new e$f("rnmScale",((t,o)=>r$c(v$1,o.camera.fullWidth/e$o(t.noiseTexture).descriptor.width,o.camera.fullHeight/e$o(t.noiseTexture).descriptor.height))),new o$2("intensity",(e=>e.intensity)),new e$f("screenSize",((e,t)=>r$c(v$1,t.camera.fullWidth,t.camera.fullHeight)))]),d.code.add(o$q`
    void main(void) {
      fillSphere();
      vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        gl_FragColor = vec4(0.0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture2D(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w<0.5;

      float sum = .0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${o$q.int(m$1)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
          if (isTerrainTap) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${o$q.int(m$1)}),0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      gl_FragColor = vec4(A);
    }
  `),t}function p$1(e){return Math.max(10,20*e.computeRenderPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const v$1=n$b(),h$2=Object.freeze(Object.defineProperty({__proto__:null,build:d,getRadius:p$1},Symbol.toStringTag,{value:"Module"}));

class l extends e$9{initializeProgram(e){return new o$9(e.rctx,l.shader.get().build(),E$4)}initializePipeline(){return W({colorWrite:_$8})}}l.shader=new t$6(h$2,(()=>__vitePreload(() => import('./SSAO.glsl-a96f0abc.js'),true?["./SSAO.glsl-a96f0abc.js","./main-5658cd6e.js","./preload-helper-a4975f27.js","./main-2af48127.css","./OrderIndependentTransparency-639df392.js","./enums-1f7f0b0a.js","./basicInterfaces-9de11baf.js","./VertexAttribute-a23f2f69.js","./devEnvironmentUtils-d73295e7.js","./mat3f64-f0e5b33e.js","./mat4f64-151d6b53.js","./BufferView-280c2f14.js","./vec33-10cb0362.js","./DefaultMaterial_COLOR_GAMMA-eb95e6eb.js","./types-814802c7.js","./quat-1e678ab0.js","./quatf64-3a66031a.js","./resourceUtils-267be27b.js","./Indices-ea523834.js","./NestedMap-5d3a039b.js","./requestImageUtils-b6c78b33.js","./sphere-de757ffd.js","./lineSegment-dd6132c1.js","./Texture-aefe232f.js","./VertexArrayObject-2ba4bad7.js","./VertexElementDescriptor-a439aa9a.js","./InterleavedLayout-769e3a2b.js","./vec3f32-b6e01a26.js","./doublePrecisionUtils-fe2da5f2.js","./symbolColorUtils-800e4542.js"]:void 0,import.meta.url)));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const q$1=2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function n$3(n,a){const i=n.fragment;a.receiveAmbientOcclusion?(i.uniforms.add(u$7("ssaoTex",((e,r)=>r.ssaoHelper.colorTexture),a.hasWebGL2Context?e$e.None:e$e.InvSize)),i.constants.add("blurSizePixelsInverse","float",1/q$1),i.code.add(o$q`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${r$6(a,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):i.code.add(o$q`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function m(n,g){const m=n.fragment,o=void 0!==g.lightingSphericalHarmonicsOrder?g.lightingSphericalHarmonicsOrder:2;0===o?(m.uniforms.add(new e$c("lightingAmbientSH0",((n,t)=>o$n(a$1,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),m.code.add(o$q`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===o?(m.uniforms.add([new e$g("lightingAmbientSH_R",((i,n)=>r$i(r$1,n.lighting.sh.r[0],n.lighting.sh.r[1],n.lighting.sh.r[2],n.lighting.sh.r[3]))),new e$g("lightingAmbientSH_G",((i,n)=>r$i(r$1,n.lighting.sh.g[0],n.lighting.sh.g[1],n.lighting.sh.g[2],n.lighting.sh.g[3]))),new e$g("lightingAmbientSH_B",((i,n)=>r$i(r$1,n.lighting.sh.b[0],n.lighting.sh.b[1],n.lighting.sh.b[2],n.lighting.sh.b[3])))]),m.code.add(o$q`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===o&&(m.uniforms.add([new e$c("lightingAmbientSH0",((n,t)=>o$n(a$1,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new e$g("lightingAmbientSH_R1",((i,n)=>r$i(r$1,n.lighting.sh.r[1],n.lighting.sh.r[2],n.lighting.sh.r[3],n.lighting.sh.r[4]))),new e$g("lightingAmbientSH_G1",((i,n)=>r$i(r$1,n.lighting.sh.g[1],n.lighting.sh.g[2],n.lighting.sh.g[3],n.lighting.sh.g[4]))),new e$g("lightingAmbientSH_B1",((i,n)=>r$i(r$1,n.lighting.sh.b[1],n.lighting.sh.b[2],n.lighting.sh.b[3],n.lighting.sh.b[4]))),new e$g("lightingAmbientSH_R2",((i,n)=>r$i(r$1,n.lighting.sh.r[5],n.lighting.sh.r[6],n.lighting.sh.r[7],n.lighting.sh.r[8]))),new e$g("lightingAmbientSH_G2",((i,n)=>r$i(r$1,n.lighting.sh.g[5],n.lighting.sh.g[6],n.lighting.sh.g[7],n.lighting.sh.g[8]))),new e$g("lightingAmbientSH_B2",((i,n)=>r$i(r$1,n.lighting.sh.b[5],n.lighting.sh.b[6],n.lighting.sh.b[7],n.lighting.sh.b[8])))]),m.code.add(o$q`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),g.pbrMode!==d$8.Normal&&g.pbrMode!==d$8.Schematic||m.code.add(o$q`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`));}const a$1=n$9(),r$1=n$h();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function o$1(n){n.uniforms.add(new e$c("mainLightDirection",((i,n)=>n.lighting.mainLight.direction)));}function a(n){n.uniforms.add(new e$c("mainLightIntensity",((i,n)=>n.lighting.mainLight.intensity)));}function e$2(i,t){t.useLegacyTerrainShading?i.uniforms.add(new o$2("lightingFixedFactor",((i,n)=>n.lighting.noonFactor*(1-n.lighting.globalFactor)))):i.constants.add("lightingFixedFactor","float",0);}function r(i,n){const r=i.fragment;o$1(r),a(r),e$2(r,n),r.code.add(o$q`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function t$3(t){const a=t.fragment.code;a.add(o$q`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),a.add(o$q`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),a.add(o$q`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function t$2(t){t.vertex.code.add(o$q`const float PI = 3.141592653589793;`),t.fragment.code.add(o$q`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function n$2(n,r){const l=n.fragment.code;n.include(t$2),r.pbrMode!==d$8.Normal&&r.pbrMode!==d$8.Schematic&&r.pbrMode!==d$8.Terrain&&r.pbrMode!==d$8.TerrainWithWater||(l.add(o$q`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),l.add(o$q`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),r.pbrMode!==d$8.Normal&&r.pbrMode!==d$8.Schematic||(n.include(t$3),l.add(o$q`struct PBRShadingInfo
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
};`),l.add(o$q`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),l.add(o$q`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),l.add(o$q`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let s$2 = class s extends i$f{constructor(o,s){super(o,"bool",a$c.Pass,((r,e,t)=>r.setUniform1b(o,s(e,t))));}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const _$1=.4;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function h$1(n){n.constants.add("ambientBoostFactor","float",_$1);}function u(n){n.uniforms.add(new o$2("lightingGlobalFactor",((n,i)=>i.lighting.globalFactor)));}function p(g,p){const v=g.fragment;switch(g.include(n$3,p),p.pbrMode!==d$8.Disabled&&g.include(n$2,p),g.include(m,p),g.include(t$2),v.code.add(o$q`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${p.pbrMode===d$8.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),h$1(v),u(v),o$1(v),v.code.add(o$q`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${p.spherical?o$q`normalize(vPosWorld)`:o$q`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),a(v),v.code.add(o$q`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),p.pbrMode){case d$8.Disabled:case d$8.WaterOnIntegratedMesh:case d$8.Water:g.include(r,p),v.code.add(o$q`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case d$8.Normal:case d$8.Schematic:v.code.add(o$q`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),v.code.add(o$q`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),p.useFillLights?v.uniforms.add(new s$2("hasFillLights",((n,i)=>i.enableFillLights))):v.constants.add("hasFillLights","bool",!1),v.code.add(o$q`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),v.uniforms.add([new o$2("lightingSpecularStrength",((n,i)=>i.lighting.mainLight.specularStrength)),new o$2("lightingEnvironmentStrength",((n,i)=>i.lighting.mainLight.environmentStrength))]),v.code.add(o$q`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),v.code.add(o$q`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${p.pbrMode===d$8.Schematic?o$q`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:o$q`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case d$8.Terrain:case d$8.TerrainWithWater:g.include(r,p),v.code.add(o$q`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
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
}`);break;default:n$e(p.pbrMode);case d$8.COUNT:}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function n$1(n,o){o.hasMultipassTerrain&&(n.fragment.include(a$2),n.fragment.uniforms.add(new f$a("terrainDepthTexture",((e,r)=>r.multipassTerrain.linearDepthTexture))),n.fragment.uniforms.add(new e$f("nearFar",((e,r)=>r.camera.nearFar))),n.fragment.uniforms.add(new e$f("inverseViewport",((e,r)=>r.inverseViewport))),n.fragment.code.add(o$q`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${o.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `));}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
class o extends i$f{constructor(r,o,s){super(r,"mat4",a$c.Draw,((e,s,t)=>e.setUniformMatrix4fv(r,o(s,t))),s);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let e$1 = class e extends i$f{constructor(r,e,o){super(r,"mat4",a$c.Pass,((s,o,t)=>s.setUniformMatrix4fv(r,e(o,t))),o);}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function h(e,a){a.receiveShadows&&(e.fragment.uniforms.add(new e$1("shadowMapMatrix",((e,a)=>a.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e,a));}function v(e,a){a.receiveShadows&&(e.fragment.uniforms.add(new o("shadowMapMatrix",((e,a)=>a.shadowMap.getShadowMapMatrices(e.origin)),4)),f(e,a));}function f(e,i){const d=e.fragment;d.include(a$4),d.uniforms.add([...u$7("shadowMapTex",((e,a)=>a.shadowMap.depthTexture),i.hasWebGL2Context?e$e.None:e$e.Size),new e$5("numCascades",((e,a)=>a.shadowMap.numCascades)),new e$g("cascadeDistances",((e,a)=>a.shadowMap.cascadeDistances))]),d.code.add(o$q`
    int chooseCascade(float depth, out mat4 mat) {
      vec4 distance = cascadeDistances;

      // choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float textureSize, sampler2D _depthTex) {
      float halfPixelSize = 0.5 / textureSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * textureSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= numCascades) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      vec2 textureSize = ${r$6(i,"shadowMapTex")};

      return filterShadow(uv, lvpos, textureSize.x, shadowMapTex);
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function s$1(s){s.vertex.uniforms.add(new e$b("colorTextureTransformMatrix",(o=>r$9(o.colorTextureTransformMatrix)?o.colorTextureTransformMatrix:e$i()))),s.varyings.add("colorUV","vec2"),s.vertex.code.add(o$q`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);}function i$1(s){s.vertex.uniforms.add(new e$b("normalTextureTransformMatrix",(o=>r$9(o.normalTextureTransformMatrix)?o.normalTextureTransformMatrix:e$i()))),s.varyings.add("normalUV","vec2"),s.vertex.code.add(o$q`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);}function t$1(s){s.vertex.uniforms.add(new e$b("emissiveTextureTransformMatrix",(o=>r$9(o.emissiveTextureTransformMatrix)?o.emissiveTextureTransformMatrix:e$i()))),s.varyings.add("emissiveUV","vec2"),s.vertex.code.add(o$q`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);}function n(s){s.vertex.uniforms.add(new e$b("occlusionTextureTransformMatrix",(o=>r$9(o.occlusionTextureTransformMatrix)?o.occlusionTextureTransformMatrix:e$i()))),s.varyings.add("occlusionUV","vec2"),s.vertex.code.add(o$q`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);}function x(s){s.vertex.uniforms.add(new e$b("metallicRoughnessTextureTransformMatrix",(o=>r$9(o.metallicRoughnessTextureTransformMatrix)?o.metallicRoughnessTextureTransformMatrix:e$i()))),s.varyings.add("metallicRoughnessUV","vec2"),s.vertex.code.add(o$q`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function e(e){e.code.add(o$q`vec4 premultiplyAlpha(vec4 v) {
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
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function i(i){i.include(e),i.code.add(o$q`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${o$q.int(r$h.Multiply)}) {
        return allMixed;
      }
      if (mode == ${o$q.int(r$h.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o$q.int(r$h.Replace)}) {
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

      if (mode == ${o$q.int(r$h.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${o$q.int(r$h.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `);}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function Q(Q){const X=new o$j,{vertex:Y,fragment:Z,varyings:ee}=X;return v$3(Y,Q),X.include(o$c),ee.add("vpos","vec3"),X.include(s$4,Q),X.include(p$2,Q),X.include(a$5,Q),Q.hasColorTextureTransform&&X.include(s$1),Q.output!==h$6.Color&&Q.output!==h$6.Alpha||(Q.hasNormalTextureTransform&&X.include(i$1),Q.hasEmissionTextureTransform&&X.include(t$1),Q.hasOcclusionTextureTransform&&X.include(n),Q.hasMetallicRoughnessTextureTransform&&X.include(x),c$4(Y,Q),X.include(i$8,Q),X.include(r$3,Q),Q.normalType===a$6.Attribute&&Q.offsetBackfaces&&X.include(e$7),X.include(c$2,Q),X.include(c$5,Q),Q.instancedColor&&X.attributes.add(O$4.INSTANCECOLOR,"vec4"),ee.add("localvpos","vec3"),X.include(o$i,Q),X.include(d$5,Q),X.include(i$6,Q),X.include(e$4,Q),Y.uniforms.add(new e$g("externalColor",(e=>e.externalColor))),ee.add("vcolorExt","vec4"),Q.hasMultipassTerrain&&ee.add("depth","float"),Q.hasModelTransformation&&Y.uniforms.add(new e$a("model",(o=>r$9(o.modelTransformation)?o.modelTransformation:o$p))),Y.code.add(o$q`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${Q.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${o$q.float(t$7)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${Q.normalType===a$6.Attribute?o$q`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${Q.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${Q.hasModelTransformation?"model,":""} vpos);
          ${Q.normalType===a$6.Attribute&&Q.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${Q.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${Q.hasColorTextureTransform?o$q`forwardColorUV();`:""}
        ${Q.hasNormalTextureTransform?o$q`forwardNormalUV();`:""}
        ${Q.hasEmissionTextureTransform?o$q`forwardEmissiveUV();`:""}
        ${Q.hasOcclusionTextureTransform?o$q`forwardOcclusionUV();`:""}
        ${Q.hasMetallicRoughnessTextureTransform?o$q`forwardMetallicRoughnessUV();`:""}
      }
    `)),Q.output===h$6.Alpha&&(X.include(u$2,Q),X.include(s$3,Q),X.include(n$1,Q),Z.uniforms.add([new o$2("opacity",(e=>e.opacity)),new o$2("layerOpacity",(e=>e.layerOpacity))]),Q.hasColorTexture&&Z.uniforms.add(new f$a("tex",(e=>e.texture))),Z.include(i),Z.code.add(o$q`
      void main() {
        discardBySlice(vpos);
        ${Q.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${Q.hasColorTexture?o$q`
                vec4 texColor = texture2D(tex, ${Q.hasColorTextureTransform?o$q`colorUV`:o$q`vuv0`});
                ${Q.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:o$q`vec4 texColor = vec4(1.0);`}
        ${Q.hasVertexColors?o$q`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o$q`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),Q.output===h$6.Color&&(X.include(u$2,Q),X.include(p,Q),X.include(n$3,Q),X.include(s$3,Q),X.include(Q.instancedDoublePrecision?h:v,Q),X.include(n$1,Q),c$4(Z,Q),Z.uniforms.add([Y.uniforms.get("localOrigin"),new e$c("ambient",(e=>e.ambient)),new e$c("diffuse",(e=>e.diffuse)),new o$2("opacity",(e=>e.opacity)),new o$2("layerOpacity",(e=>e.layerOpacity))]),Q.hasColorTexture&&Z.uniforms.add(new f$a("tex",(e=>e.texture))),X.include(x$4,Q),X.include(n$2,Q),Z.include(i),X.include(e$d,Q),h$1(Z),u(Z),a(Z),Z.code.add(o$q`
      void main() {
        discardBySlice(vpos);
        ${Q.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${Q.hasColorTexture?o$q`
                vec4 texColor = texture2D(tex, ${Q.hasColorTextureTransform?o$q`colorUV`:o$q`vuv0`});
                ${Q.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:o$q`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${Q.normalType===a$6.ScreenDerivative?o$q`
                vec3 normal = screenDerivativeNormal(localvpos);`:o$q`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${Q.pbrMode===d$8.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${Q.receiveShadows?"readShadowMap(vpos, linearDepth)":Q.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${Q.hasVertexColors?o$q`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o$q`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${Q.hasNormalTexture?o$q`
                mat3 tangentSpace = ${Q.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:o$q`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${Q.spherical?o$q`normalize(posWorld);`:o$q`vec3(0.0, 0.0, 1.0);`}

        ${Q.snowCover?o$q`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${Q.pbrMode===d$8.Normal||Q.pbrMode===d$8.Schematic?o$q`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${Q.snowCover?o$q`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:o$q`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${Q.transparencyPassType===o$t.Color?o$q`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),X.include(b,Q),X}const X=Object.freeze(Object.defineProperty({__proto__:null,build:Q},Symbol.toStringTag,{value:"Module"}));

let k$1 = class k extends f$6{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=r$a(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=n$i.Back,this.emissiveFactor=r$a(0,0,0),this.instancedDoublePrecision=!1,this.normalType=a$6.Attribute,this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=r$a(.2,.2,.2),this.diffuse=r$a(.8,.8,.8),this.externalColor=r$d(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=n$9(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=e$m(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=e$r.Less,this.textureAlphaMode=u$d.Blend,this.textureAlphaCutoff=o$a,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=c$8.Occlude;}};class _ extends e$9{initializeConfiguration(e,t){t.hasWebGL2Context=e.rctx.type===r$e.WEBGL2,t.spherical=e.viewingMode===l$b.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?d$9.Default:d$9.None,t.objectAndLayerIdColorInstanced=t.instanced;}initializeProgram(e){return this._initializeProgram(e,_.shader)}_initializeProgram(e,t){return new o$9(e.rctx,t.get().build(this.configuration),E$4)}_convertDepthTestFunction(e){return e===e$r.Lequal?I$6.LEQUAL:I$6.LESS}_makePipeline(e,t){const i=this.configuration,s=e===o$t.NONE,r=e===o$t.FrontFace;return W({blending:i.output!==h$6.Color&&i.output!==h$6.Alpha||!i.transparent?null:s?c$m:A$7(e),culling:N$1(i)?h$c(i.cullFace):null,depthTest:{func:l$c(e,this._convertDepthTestFunction(i.customDepthTest))},depthWrite:(s||r)&&i.writeDepth?a$l:null,colorWrite:_$8,stencilWrite:i.hasOccludees?e$8:null,stencilTest:i.hasOccludees?t?o$8:f$5:null,polygonOffset:s||r?null:a$m(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function N$1(e){return e.cullFace!==n$i.None||!e.hasSlicePlane&&(!e.transparent&&!e.doubleSidedMode)}_.shader=new t$6(X,(()=>__vitePreload(() => import('./DefaultMaterial.glsl-a62aaf05.js'),true?["./DefaultMaterial.glsl-a62aaf05.js","./mat4f64-151d6b53.js","./mat3f64-f0e5b33e.js","./vec3f32-b6e01a26.js","./main-5658cd6e.js","./preload-helper-a4975f27.js","./main-2af48127.css","./OrderIndependentTransparency-639df392.js","./enums-1f7f0b0a.js","./basicInterfaces-9de11baf.js","./VertexAttribute-a23f2f69.js","./symbolColorUtils-800e4542.js","./VertexArrayObject-2ba4bad7.js","./Texture-aefe232f.js","./devEnvironmentUtils-d73295e7.js","./BufferView-280c2f14.js","./vec33-10cb0362.js","./DefaultMaterial_COLOR_GAMMA-eb95e6eb.js","./types-814802c7.js","./quat-1e678ab0.js","./quatf64-3a66031a.js","./resourceUtils-267be27b.js","./Indices-ea523834.js","./NestedMap-5d3a039b.js","./requestImageUtils-b6c78b33.js","./sphere-de757ffd.js","./lineSegment-dd6132c1.js","./VertexElementDescriptor-a439aa9a.js","./InterleavedLayout-769e3a2b.js","./doublePrecisionUtils-fe2da5f2.js"]:void 0,import.meta.url)));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
class s extends t$4{constructor(){super(...arguments),this.hasWebGL2Context=!1;}}e$q([r$2({constValue:!0})],s.prototype,"hasSliceHighlight",void 0),e$q([r$2({constValue:!1})],s.prototype,"hasSliceInVertexProgram",void 0),e$q([r$2({constValue:!1})],s.prototype,"instancedDoublePrecision",void 0),e$q([r$2({constValue:!1})],s.prototype,"useLegacyTerrainShading",void 0),e$q([r$2({constValue:!1})],s.prototype,"hasModelTransformation",void 0),e$q([r$2({constValue:a$c.Pass})],s.prototype,"pbrTextureBindType",void 0),e$q([r$2()],s.prototype,"hasWebGL2Context",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
class c extends s{constructor(){super(...arguments),this.output=h$6.Color,this.alphaDiscardMode=u$d.Opaque,this.doubleSidedMode=i$9.None,this.pbrMode=d$8.Disabled,this.cullFace=n$i.None,this.transparencyPassType=o$t.NONE,this.normalType=a$6.Attribute,this.textureCoordinateType=d$9.None,this.customDepthTest=e$r.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1;}}e$q([r$2({count:h$6.COUNT})],c.prototype,"output",void 0),e$q([r$2({count:u$d.COUNT})],c.prototype,"alphaDiscardMode",void 0),e$q([r$2({count:i$9.COUNT})],c.prototype,"doubleSidedMode",void 0),e$q([r$2({count:d$8.COUNT})],c.prototype,"pbrMode",void 0),e$q([r$2({count:n$i.COUNT})],c.prototype,"cullFace",void 0),e$q([r$2({count:o$t.COUNT})],c.prototype,"transparencyPassType",void 0),e$q([r$2({count:a$6.COUNT})],c.prototype,"normalType",void 0),e$q([r$2({count:d$9.COUNT})],c.prototype,"textureCoordinateType",void 0),e$q([r$2({count:e$r.COUNT})],c.prototype,"customDepthTest",void 0),e$q([r$2()],c.prototype,"spherical",void 0),e$q([r$2()],c.prototype,"hasVertexColors",void 0),e$q([r$2()],c.prototype,"hasSymbolColors",void 0),e$q([r$2()],c.prototype,"hasVerticalOffset",void 0),e$q([r$2()],c.prototype,"hasSlicePlane",void 0),e$q([r$2()],c.prototype,"hasSliceHighlight",void 0),e$q([r$2()],c.prototype,"hasColorTexture",void 0),e$q([r$2()],c.prototype,"hasMetallicRoughnessTexture",void 0),e$q([r$2()],c.prototype,"hasEmissionTexture",void 0),e$q([r$2()],c.prototype,"hasOcclusionTexture",void 0),e$q([r$2()],c.prototype,"hasNormalTexture",void 0),e$q([r$2()],c.prototype,"hasScreenSizePerspective",void 0),e$q([r$2()],c.prototype,"hasVertexTangents",void 0),e$q([r$2()],c.prototype,"hasOccludees",void 0),e$q([r$2()],c.prototype,"hasMultipassTerrain",void 0),e$q([r$2()],c.prototype,"hasModelTransformation",void 0),e$q([r$2()],c.prototype,"offsetBackfaces",void 0),e$q([r$2()],c.prototype,"vvSize",void 0),e$q([r$2()],c.prototype,"vvColor",void 0),e$q([r$2()],c.prototype,"receiveShadows",void 0),e$q([r$2()],c.prototype,"receiveAmbientOcclusion",void 0),e$q([r$2()],c.prototype,"textureAlphaPremultiplied",void 0),e$q([r$2()],c.prototype,"instanced",void 0),e$q([r$2()],c.prototype,"instancedColor",void 0),e$q([r$2()],c.prototype,"objectAndLayerIdColorInstanced",void 0),e$q([r$2()],c.prototype,"instancedDoublePrecision",void 0),e$q([r$2()],c.prototype,"doublePrecisionRequiresObfuscation",void 0),e$q([r$2()],c.prototype,"writeDepth",void 0),e$q([r$2()],c.prototype,"transparent",void 0),e$q([r$2()],c.prototype,"enableOffset",void 0),e$q([r$2()],c.prototype,"cullAboveGround",void 0),e$q([r$2()],c.prototype,"snowCover",void 0),e$q([r$2()],c.prototype,"hasColorTextureTransform",void 0),e$q([r$2()],c.prototype,"hasEmissionTextureTransform",void 0),e$q([r$2()],c.prototype,"hasNormalTextureTransform",void 0),e$q([r$2()],c.prototype,"hasOcclusionTextureTransform",void 0),e$q([r$2()],c.prototype,"hasMetallicRoughnessTextureTransform",void 0),e$q([r$2({constValue:!0})],c.prototype,"hasVvInstancing",void 0),e$q([r$2({constValue:!1})],c.prototype,"useCustomDTRExponentForWater",void 0),e$q([r$2({constValue:!1})],c.prototype,"supportsTextureAtlas",void 0),e$q([r$2({constValue:!0})],c.prototype,"useFillLights",void 0);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function I$2(I){const R=new o$j,{vertex:z,fragment:k,varyings:G}=R;return v$3(z,I),R.include(o$c),G.add("vpos","vec3"),R.include(s$4,I),R.include(p$2,I),R.include(a$5,I),I.output!==h$6.Color&&I.output!==h$6.Alpha||(c$4(R.vertex,I),R.include(i$8,I),R.include(r$3,I),I.offsetBackfaces&&R.include(e$7),I.instancedColor&&R.attributes.add(O$4.INSTANCECOLOR,"vec4"),G.add("vNormalWorld","vec3"),G.add("localvpos","vec3"),I.hasMultipassTerrain&&G.add("depth","float"),R.include(o$i,I),R.include(d$5,I),R.include(i$6,I),R.include(e$4,I),z.uniforms.add(new e$g("externalColor",(e=>e.externalColor))),G.add("vcolorExt","vec4"),z.code.add(o$q`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${I.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${o$q.float(t$7)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${I.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${I.hasMultipassTerrain?o$q`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),I.output===h$6.Alpha&&(R.include(u$2,I),R.include(s$3,I),R.include(n$1,I),k.uniforms.add([new o$2("opacity",(e=>e.opacity)),new o$2("layerOpacity",(e=>e.layerOpacity))]),I.hasColorTexture&&k.uniforms.add(new f$a("tex",(e=>e.texture))),k.include(i),k.code.add(o$q`
      void main() {
        discardBySlice(vpos);
        ${I.hasMultipassTerrain?o$q`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${I.hasColorTexture?o$q`
                vec4 texColor = texture2D(tex, ${I.hasColorTextureTransform?o$q`colorUV`:o$q`vuv0`});
                ${I.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:o$q`vec4 texColor = vec4(1.0);`}
        ${I.hasVertexColors?o$q`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o$q`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),I.output===h$6.Color&&(R.include(u$2,I),R.include(p,I),R.include(n$3,I),R.include(s$3,I),R.include(I.instancedDoublePrecision?h:v,I),R.include(n$1,I),c$4(R.fragment,I),o$1(k),h$1(k),u(k),k.uniforms.add([z.uniforms.get("localOrigin"),z.uniforms.get("view"),new e$c("ambient",(e=>e.ambient)),new e$c("diffuse",(e=>e.diffuse)),new o$2("opacity",(e=>e.opacity)),new o$2("layerOpacity",(e=>e.layerOpacity))]),I.hasColorTexture&&k.uniforms.add(new f$a("tex",(e=>e.texture))),R.include(x$4,I),R.include(n$2,I),k.include(i),R.extensions.add("GL_OES_standard_derivatives"),a(k),k.code.add(o$q`
      void main() {
        discardBySlice(vpos);
        ${I.hasMultipassTerrain?o$q`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${I.hasColorTexture?o$q`
                vec4 texColor = texture2D(tex, ${I.hasColorTextureTransform?o$q`colorUV`:o$q`vuv0`});
                ${I.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:o$q`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${I.pbrMode===d$8.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${I.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":I.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${I.hasVertexColors?o$q`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o$q`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${I.snowCover?o$q`albedo = mix(albedo, vec3(1), 0.9);`:o$q``}
        ${o$q`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${I.pbrMode===d$8.Normal||I.pbrMode===d$8.Schematic?I.spherical?o$q`vec3 normalGround = normalize(vpos + localOrigin);`:o$q`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:o$q``}
        ${I.pbrMode===d$8.Normal||I.pbrMode===d$8.Schematic?o$q`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${I.snowCover?o$q`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:o$q`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${I.transparencyPassType===o$t.Color?o$q`gl_FragColor = premultiplyAlpha(gl_FragColor);`:o$q``}
      }
    `)),R.include(b,I),R}const R$1=Object.freeze(Object.defineProperty({__proto__:null,build:I$2},Symbol.toStringTag,{value:"Module"}));

class t extends _{initializeConfiguration(i,a){super.initializeConfiguration(i,a),a.hasMetallicRoughnessTexture=!1,a.hasEmissionTexture=!1,a.hasOcclusionTexture=!1,a.hasNormalTexture=!1,a.hasModelTransformation=!1,a.normalType=a$6.Attribute,a.doubleSidedMode=i$9.WindingOrder,a.hasVertexTangents=!1;}initializeProgram(e){return this._initializeProgram(e,t.shader)}}t.shader=new t$6(R$1,(()=>__vitePreload(() => import('./RealisticTree.glsl-35a39062.js'),true?["./RealisticTree.glsl-35a39062.js","./mat3f64-f0e5b33e.js","./mat4f64-151d6b53.js","./vec3f32-b6e01a26.js","./main-5658cd6e.js","./preload-helper-a4975f27.js","./main-2af48127.css","./OrderIndependentTransparency-639df392.js","./enums-1f7f0b0a.js","./basicInterfaces-9de11baf.js","./VertexAttribute-a23f2f69.js","./symbolColorUtils-800e4542.js","./VertexArrayObject-2ba4bad7.js","./Texture-aefe232f.js","./devEnvironmentUtils-d73295e7.js","./BufferView-280c2f14.js","./vec33-10cb0362.js","./DefaultMaterial_COLOR_GAMMA-eb95e6eb.js","./types-814802c7.js","./quat-1e678ab0.js","./quatf64-3a66031a.js","./resourceUtils-267be27b.js","./Indices-ea523834.js","./NestedMap-5d3a039b.js","./requestImageUtils-b6c78b33.js","./sphere-de757ffd.js","./lineSegment-dd6132c1.js","./VertexElementDescriptor-a439aa9a.js","./InterleavedLayout-769e3a2b.js","./doublePrecisionUtils-fe2da5f2.js"]:void 0,import.meta.url)));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let E$1 = class E extends h$4{constructor(e){super(e,j$1),this.supportsEdges=!0,this._configuration=new c,this._vertexBufferLayout=L(this.parameters);}isVisibleForOutput(e){return e!==h$6.Shadow&&e!==h$6.ShadowExcludeHighlight&&e!==h$6.ShadowHighlight||this.parameters.castShadows}isVisible(){const t=this.parameters;if(!super.isVisible()||0===t.layerOpacity)return !1;const{instanced:r,hasVertexColors:a,hasSymbolColors:s,vvColorEnabled:i}=t,o=r$9(r)&&r.includes("color"),n="replace"===t.colorMixMode,h=t.opacity>0,c=t.externalColor&&t.externalColor[3]>0;return a&&(o||i||s)?!!n||h:a?n?c:h:o||i||s?!!n||h:n?c:h}getConfiguration(t,r){return this._configuration.output=t,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=r$9(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=r$9(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,r$9(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?n$i.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=r.multipassTerrain.enabled,this._configuration.cullAboveGround=r.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=r$9(this.parameters.modelTransformation),t!==h$6.Color&&t!==h$6.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=i$9.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?i$9.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?i$9.WindingOrder:i$9.None,this._configuration.instancedColor=r$9(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!r.ssaoHelper.active&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?d$8.Schematic:d$8.Normal:d$8.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=r.transparencyPassType,this._configuration.enableOffset=r.camera.relativeElevation<S$6,this._configuration.snowCover=this.hasSnowCover(r),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(t){return r$9(t.weather)&&t.weatherVisible&&"snowy"===t.weather.type&&"enabled"===t.weather.snowCover}intersect(c,l,m,p,d,f){if(r$9(this.parameters.verticalOffset)){const e=m.camera;o$n(z,l[12],l[13],l[14]);let c=null;switch(m.viewingMode){case l$b.Global:c=z$1(B,z);break;case l$b.Local:c=r$j(B,N);}let f=0;const g=e$k(G,z,e.eye),T=s$d(g),_=g$8(g,g,1/T);let x=null;this.parameters.screenSizePerspective&&(x=P$4(c,_)),f+=N$3(e,T,this.parameters.verticalOffset,x??0,this.parameters.screenSizePerspective),g$8(c,c,f),S$7(H,c,m.transform.inverseRotation),p=e$k(D,p,H),d=e$k(V,d,H);}x$2(c,m,p,d,y(m.verticalOffset),f);}requiresSlot(e,t){if(t===h$6.Color||t===h$6.Alpha||t===h$6.Depth||t===h$6.Normal||t===h$6.Shadow||t===h$6.ShadowHighlight||t===h$6.ShadowExcludeHighlight||t===h$6.Highlight||t===h$6.ObjectAndLayerIdColor){return e===(this.parameters.transparent?this.parameters.writeDepth?E$2.TRANSPARENT_MATERIAL:E$2.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:E$2.OPAQUE_MATERIAL)||e===E$2.DRAPED_MATERIAL}return !1}createGLMaterial(e){return new I$1(e)}createBufferWriter(){return new r$4(this._vertexBufferLayout)}};let I$1 = class I extends h$5{constructor(e){super({...e,...e.material.parameters});}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled});}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees});}beginSlot(e){this._output!==h$6.Color&&this._output!==h$6.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const r=this._material.parameters;this.updateTexture(r.textureId);const a=e.camera.viewInverseTransposeMatrix;return o$n(r.origin,a[3],a[7],a[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(r.treeRendering?t:_,e)}};let P$1 = class P extends k$1{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1;}};const j$1=new P$1;function L(e){const t=T$4().vec3f(O$4.POSITION).vec3f(O$4.NORMAL),r=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId;return e.hasVertexTangents&&t.vec4f(O$4.TANGENT),r&&t.vec2f(O$4.UV0),e.hasVertexColors&&t.vec4u8(O$4.COLOR),e.hasSymbolColors&&t.vec4u8(O$4.SYMBOLCOLOR),has("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(O$4.OBJECTANDLAYERIDCOLOR),t}const D=n$9(),V=n$9(),N=r$a(0,0,1),B=n$9(),H=n$9(),z=n$9(),G=n$9();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const j=s$e.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function A(e,t){const n=await M(e,t),s=await k(n.textureDefinitions??{},t);let o=0;for(const r in s)if(s.hasOwnProperty(r)){const e=s[r];o+=e?.image?e.image.width*e.image.height*4:0;}return {resource:n,textures:s,size:o+e$s(n)}}async function M(r,n){const s=r$9(n)&&n.streamDataRequester;if(s)return P(r,s,n);const i=await b$5(U$3(r,e$o(n)));if(!0===i.ok)return i.value.data;w$4(i.error),U(i.error);}async function P(e,r,n){const s=await b$5(r.request(e,"json",n));if(!0===s.ok)return s.value;w$4(s.error),U(s.error.details.url);}function U(e){throw new s$f("",`Request for object resource failed: ${e}`)}function E(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(j.warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(j.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(j.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(j.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1);}}else j.warn("Indexed geometries must specify faces"),n=!1;break}default:j.warn(`Unsupported topology '${r}'`),n=!1;}e.params.material||(j.warn("Geometry requires material"),n=!1);const s=e.params.vertexAttributes;for(const o in s){s[o].values||(j.warn("Geometries with externally defined attributes are not yet supported"),n=!1);}return n}function I(e,t){const r=new Array,n=new Array,s=new Array,a=new t$l,l=e.resource,m=r$k.parse(l.version||"1.0","wosr");R.validate(m);const f=l.model.name,d=l.model.geometries,b=l.materialDefinitions??{},v=e.textures;let j=0;const A=new Map;for(let u=0;u<d.length;u++){const e=d[u];if(!E(e))continue;const l=O(e),c=e.params.vertexAttributes,m=[];for(const t in c){const e=c[t],r=e.values;m.push([t,new s$a(r,e.valuesPerElement,!0)]);}const f=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)f.push([e,t[e].values]);}const M=l.texture,P=v&&v[M];if(P&&!A.has(M)){const{image:e,params:t}=P,r=new G$2(e,t);n.push(r),A.set(M,r);}const U=A.get(M),I=U?U.id:void 0,T=l.material;let k=a.get(T,M);if(t$e(k)){const e=b[T.substring(T.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=P&&P.alphaChannelUsage,n=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,s=P?q(P.alphaChannelUsage):void 0,i={ambient:e$t(e.diffuse),diffuse:e$t(e.diffuse),opacity:1-(e.transparency||0),transparent:n,textureAlphaMode:s,textureAlphaCutoff:.33,textureId:I,initTextureTransparent:!0,doubleSided:!0,cullFace:n$i.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!P&&!!P.params.preMultiplyAlpha};r$9(t)&&t.materialParamsMixin&&Object.assign(i,t.materialParamsMixin),k=new E$1(i),a.set(T,M,k);}s.push(k);const R=new v$6(k,m,f);j+=f.position?f.position.length:0,r.push(R);}return {engineResources:[{name:f,stageResources:{textures:n,materials:s,geometries:r},pivotOffset:l.model.pivotOffset,numberOfVertices:j,lodThreshold:null}],referenceBoundingBox:T(r)}}function T(e){const t=S$8();return e.forEach((e=>{const r=e.boundingInfo;r$9(r)&&(c$n(t,r.bbMin),c$n(t,r.bbMax));})),t}async function k(e,t){const r=[];for(const a in e){const n=e[a],s=n.images[0].data;if(!s){j.warn("Externally referenced texture data is not yet supported");continue}const i=n.encoding+";base64,"+s,u="/textureDefinitions/"+a,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:D$2.REPEAT,t:D$2.REPEAT},preMultiplyAlpha:q(l)!==u$d.Opaque},p=r$9(t)&&t.disableTextures?Promise.resolve(null):t$k(i,t);r.push(p.then((e=>({refId:u,image:e,params:c,alphaChannelUsage:l}))));}const n=await Promise.all(r),s={};for(const o of n)s[o.refId]=o;return s}function q(e){switch(e){case"mask":return u$d.Mask;case"maskAndTransparency":return u$d.MaskBlend;case"none":return u$d.Opaque;default:return u$d.Blend}}function O(e){const t=e.params;return {id:1,material:t.material,texture:t.texture,region:t.texture}}const R=new r$k(1,2,"wosr");

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
async function te(o,s){const i=re(a$n(o));if("wosr"===i.fileType){const e=await(s.cache?s.cache.loadWOSR(i.url,s):A(i.url,s)),{engineResources:t,referenceBoundingBox:r}=I(e,s);return {lods:t,referenceBoundingBox:r,isEsriSymbolResource:!1,isWosr:!0}}const n=await(s.cache?s.cache.loadGLTF(i.url,s,!!s.usePBR):m$7(new n$j(s.streamDataRequester),i.url,s,s.usePBR)),a=x$9(n.model.meta,"ESRI_proxyEllipsoid"),u=n.meta.isEsriSymbolResource&&r$9(a)&&n.meta.uri.includes("/RealisticTrees/");u&&!n.customMeta.esriTreeRendering&&(n.customMeta.esriTreeRendering=!0,le(n,a));const l=!!s.usePBR,c=n.meta.isEsriSymbolResource?{usePBR:l,isSchematic:!1,treeRendering:u,mrrFactors:[0,1,.2]}:{usePBR:l,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},m={...s.materialParamsMixin,treeRendering:u},{engineResources:f,referenceBoundingBox:d}=oe(n,c,m,s.skipHighLods&&null==i.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:i.specifiedLodIndex});return {lods:f,referenceBoundingBox:d,isEsriSymbolResource:n.meta.isEsriSymbolResource,isWosr:!1}}function re(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);if(t)return {fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null};return e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function oe(e,t,o,s){const i=e.model,n=new Array,a=new Map,u=new Map,l=i.lods.length,c=S$8();return i.lods.forEach(((e,m)=>{const f=!0===s.skipHighLods&&(l>1&&0===m||l>3&&1===m)||!1===s.skipHighLods&&null!=s.singleLodIndex&&m!==s.singleLodIndex;if(f&&0!==m)return;const d=new t$d(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const s=f?new E$1({}):se(i,e,d,t,o,a,u),{geometry:n,vertexCount:l}=ie(e,r$9(s)?s:new E$1({})),p=n.boundingInfo;r$9(p)&&0===m&&(c$n(c,p.bbMin),c$n(c,p.bbMax)),r$9(s)&&(d.stageResources.geometries.push(n),d.numberOfVertices+=l);})),f||n.push(d);})),{engineResources:n,referenceBoundingBox:c}}function se(e,t,s,i,n,a,u){const l=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),c=e.materials.get(t.material),m=r$9(t.attributes.texCoord0),f=r$9(t.attributes.normal);if(t$e(c))return null;const d=ae(c.alphaMode);if(!a.has(l)){if(m){const t=(t,o=!1)=>{if(r$9(t)&&!u.has(t)){const s=e.textures.get(t);if(r$9(s)){const e=s.data;u.set(t,new G$2(t$o(e)?e.data:e,{...s.parameters,preMultiplyAlpha:!t$o(e)&&o,encoding:t$o(e)&&r$9(e.encoding)?e.encoding:void 0}));}}};t(c.textureColor,d!==u$d.Opaque),t(c.textureNormal),t(c.textureOcclusion),t(c.textureEmissive),t(c.textureMetallicRoughness);}const o=c.color[0]**(1/o$u),s=c.color[1]**(1/o$u),p=c.color[2]**(1/o$u),g=c.emissiveFactor[0]**(1/o$u),b=c.emissiveFactor[1]**(1/o$u),x=c.emissiveFactor[2]**(1/o$u),h=r$9(c.textureColor)&&m?u.get(c.textureColor):null;a.set(l,new E$1({...i,transparent:d===u$d.Blend,customDepthTest:e$r.Lequal,textureAlphaMode:d,textureAlphaCutoff:c.alphaCutoff,diffuse:[o,s,p],ambient:[o,s,p],opacity:c.opacity,doubleSided:c.doubleSided,doubleSidedType:"winding-order",cullFace:c.doubleSided?n$i.None:n$i.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:f?a$6.Attribute:a$6.ScreenDerivative,castShadows:!0,receiveSSAO:!0,textureId:r$9(h)?h.id:void 0,colorMixMode:c.colorMixMode,normalTextureId:r$9(c.textureNormal)&&m?u.get(c.textureNormal).id:void 0,textureAlphaPremultiplied:r$9(h)&&!!h.params.preMultiplyAlpha,occlusionTextureId:r$9(c.textureOcclusion)&&m?u.get(c.textureOcclusion).id:void 0,emissiveTextureId:r$9(c.textureEmissive)&&m?u.get(c.textureEmissive).id:void 0,metallicRoughnessTextureId:r$9(c.textureMetallicRoughness)&&m?u.get(c.textureMetallicRoughness).id:void 0,emissiveFactor:[g,b,x],mrrFactors:[c.metallicFactor,c.roughnessFactor,i.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:c$e(c.colorTextureTransform),normalTextureTransformMatrix:c$e(c.normalTextureTransform),occlusionTextureTransformMatrix:c$e(c.occlusionTextureTransform),emissiveTextureTransformMatrix:c$e(c.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:c$e(c.metallicRoughnessTextureTransform),...n}));}const p=a.get(l);if(s.stageResources.materials.push(p),m){const e=e=>{r$9(e)&&s.stageResources.textures.push(u.get(e));};e(c.textureColor),e(c.textureNormal),e(c.textureOcclusion),e(c.textureEmissive),e(c.textureMetallicRoughness);}return p}function ie(e,t){const o=e.attributes.position.count,i=ue(e.indices||o,e.primitiveType),n=r$l(i$k,o);t$m(n,e.attributes.position,e.transform);const a=[[O$4.POSITION,new s$a(n.typedBuffer,n.elementCount,!0)]],u=[[O$4.POSITION,i]];if(r$9(e.attributes.normal)){const t=r$l(i$k,o);g$9(ne,e.transform),r$m(t,e.attributes.normal,ne),a.push([O$4.NORMAL,new s$a(t.typedBuffer,t.elementCount,!0)]),u.push([O$4.NORMAL,i]);}if(r$9(e.attributes.tangent)){const t=r$l(c$l,o);g$9(ne,e.transform),r$n(t,e.attributes.tangent,ne),a.push([O$4.TANGENT,new s$a(t.typedBuffer,t.elementCount,!0)]),u.push([O$4.TANGENT,i]);}if(r$9(e.attributes.texCoord0)){const t=r$l(u$c,o);n$k(t,e.attributes.texCoord0),a.push([O$4.UV0,new s$a(t.typedBuffer,t.elementCount,!0)]),u.push([O$4.UV0,i]);}if(r$9(e.attributes.color)){const t=r$l(x$7,o);if(4===e.attributes.color.elementCount)e.attributes.color instanceof c$l?o$v(t,e.attributes.color,255):e.attributes.color instanceof x$7?e$u(t,e.attributes.color):e.attributes.color instanceof L$4&&o$v(t,e.attributes.color,1/256);else {t$n(t,255,255,255,255);const r=new O$8(t.buffer,0,4);e.attributes.color instanceof i$k?f$h(r,e.attributes.color,255):e.attributes.color instanceof O$8?e$v(r,e.attributes.color):e.attributes.color instanceof E$b&&f$h(r,e.attributes.color,1/256);}a.push([O$4.COLOR,new s$a(t.typedBuffer,t.elementCount,!0)]),u.push([O$4.COLOR,i]);}return {geometry:new v$6(t,a,u),vertexCount:o}}const ne=e$m();function ae(e){switch(e){case"BLEND":return u$d.Blend;case"MASK":return u$d.Mask;case"OPAQUE":case null:case void 0:return u$d.Opaque}}function ue(e,t){switch(t){case E$9.TRIANGLES:return o$w(e);case E$9.TRIANGLE_STRIP:return f$i(e);case E$9.TRIANGLE_FAN:return i$m(e)}}function le(e,t){for(let r=0;r<e.model.lods.length;++r){const s=e.model.lods[r];for(const i of s.parts){const s=i.attributes.normal;if(t$e(s))return;const g=i.attributes.position,b=g.count,h=n$9(),T=n$9(),w=n$9(),j=r$l(x$7,b),M=r$l(i$k,b),v=h$d(e$n(),i.transform);for(let o=0;o<b;o++){g.getVec(o,T),s.getVec(o,h),O$5(T,T,i.transform),e$k(w,T,t.center),i$n(w,w,t.radius);const n=w[2],a=s$d(w),p=Math.min(.45+.55*a*a,1);i$n(w,w,t.radius),null!==v&&O$5(w,w,v),z$1(w,w),r+1!==e.model.lods.length&&e.model.lods.length>1&&A$6(w,w,h,n>-1?.2:Math.min(-4*n-3.8,1)),M.setVec(o,w),j.set(o,0,255*p),j.set(o,1,255*p),j.set(o,2,255*p),j.set(o,3,255);}i.attributes.normal=M,i.attributes.color=j;}}}

const objectResourceUtils = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  fetch: te,
  gltfToEngineResources: oe,
  parseUrl: re
}, Symbol.toStringTag, { value: 'Module' }));

export { I$2 as I, Q, c$1 as c, d, objectResourceUtils as o, p$1 as p };
