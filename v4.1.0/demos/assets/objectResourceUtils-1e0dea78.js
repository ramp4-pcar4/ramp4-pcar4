import{a as Bo}from"./devEnvironmentUtils-f2a1f21e.js";import{b as B,r as f,oq as Go,or as Uo,os as or,ay as nt,dW as jr,bl as Ho,j0 as Ai,ot as W,bG as $e,eu as Dt,ku as mr,ax as D,ks as ko,jw as Ci,bx as Ce,ca as br,eS as Mi,az as X,bs as ce,bB as ve,ou as Wo,bz as ot,cW as jo,u as Sr,f as wr,c2 as Pe,gi as Vt,ci as Xt,kC as Kt,e0 as qo,af as Xo,bY as Bt,S as Ko,mM as qr,e4 as Yo,jO as ut,o6 as ht,ar as Xr,ov as Zo,_ as Jo,c0 as Qo,av as Oi,jv as Ye,eZ as Kr,aL as ea,a$ as Be,fa as ta,nP as ra,gn as ia,ow as oa,ox as aa,bw as yr,aR as na,bX as sa,jP as Yr,oy as $i,oz as Pi,au as Zr,d as wt,bA as Ar,o3 as fr,oA as la,e as x,eH as oe,kB as Yt,j4 as ca,oB as pr,ek as da,eR as ua,bv as ha,h as ma,oC as fa,f6 as Li,U as pa,b0 as Ri,o5 as Ei,nR as Jr,oD as Ni,mS as Gt,eh as va,eA as Qr,eo as ga,nQ as ei}from"./main-e6c796d9.js";import{e as Zt}from"./mat3f64-221ce671.js";import{o as Ut,r as xa,e as Cr}from"./mat4f64-1413b4a7.js";import{c as Ht,x as yt,u as Ii,i as tt,L as Ta,O as ti,E as _a}from"./BufferView-2c604db3.js";import{t as ba,r as Sa,f as ri,e as wa}from"./vec33-7ab520af.js";import{m as ya,n as Aa,j as Ze,r as He,a as Ca,b as Ma,o as ii,e as Oa,t as $a,i as Pa,g as La,h as Ra}from"./DefaultMaterial_COLOR_GAMMA-0bbfe216.js";import{t as ar}from"./resourceUtils-a8ed8f9e.js";import{t as Ea}from"./NestedMap-7c434b47.js";import{t as Di}from"./requestImageUtils-53808439.js";import{t as Na,D as nr,c as mt,N as vr,a as Le,u as q,n as Re,e as Ct}from"./basicInterfaces-b7051eb1.js";import{s as Fi,R as zi}from"./sphere-9c45614f.js";import{v as Ia}from"./lineSegment-f970d962.js";import{o as oi,n as Da}from"./Indices-06406d60.js";import{O as h}from"./VertexAttribute-15d1866a.js";import{o as s,n as Jt,W as Mr,_ as Or,a as at,c as Fa,A as za,h as Va,l as Ba,b as Ga,d as Ua,S as Ha}from"./OrderIndependentTransparency-e1b3a745.js";import{_ as Mt}from"./preload-helper-388ac9d5.js";import{u as ye,P as Ue,L as We,C as ue,F as ka,D as Qe,M as ai,G as ni,Y as Wa,V as ja,E as xt,I as Ee,O as se}from"./enums-64ab819c.js";import{E as Oe,a as qa}from"./Texture-67b84735.js";import{_ as Xa,f as Ka,E as Ya,x as Za,n as Ja}from"./VertexArrayObject-3edd1b52.js";import{t as he}from"./VertexElementDescriptor-2925c6af.js";import{T as Qa}from"./InterleavedLayout-8ff1819c.js";import{r as en,n as tn}from"./vec3f32-ad1dc57f.js";import{S as rn}from"./quat-53c56f19.js";import{e as on}from"./quatf64-3363c48e.js";import{o as an,r as nn}from"./doublePrecisionUtils-e3c3d0d8.js";import{r as Se}from"./symbolColorUtils-e50eb005.js";let Je=class{constructor(e,r,i=!1,o=r){this.data=e,this.size=r,this.exclusive=i,this.stride=o}};function ft(t){if(B(t))return null;const e=f(t.offset)?t.offset:Go,r=f(t.rotation)?t.rotation:0,i=f(t.scale)?t.scale:Uo,o=or(1,0,0,0,1,0,e[0],e[1],1),a=or(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),n=or(i[0],0,0,0,i[1],0,0,0,1),l=nt();return jr(l,a,n),jr(l,o,l),l}let sn=class{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}},ln=class{constructor(e,r,i){this.name=e,this.lodThreshold=r,this.pivotOffset=i,this.stageResources=new sn,this.numberOfVertices=0}};function cn(t){if(t.length<Ho)return Array.from(t);if(Array.isArray(t))return Float64Array.from(t);switch(t.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(t);case 2:return Uint16Array.from(t);case 4:return Float32Array.from(t);default:return Float64Array.from(t)}}let dn=class Vi{constructor(e,r,i,o){this.primitiveIndices=e,this._numIndexPerPrimitive=r,this.indices=i,this.position=o,this._children=void 0,W(e.length>=1),W(i.length%this._numIndexPerPrimitive==0),W(i.length>=e.length*this._numIndexPerPrimitive),W(o.size===3||o.size===4);const{data:a,size:n}=o,l=e.length;let d=n*i[this._numIndexPerPrimitive*e[0]];Ge.clear(),Ge.push(d);const c=$e(a[d],a[d+1],a[d+2]),u=Dt(c);for(let p=0;p<l;++p){const g=this._numIndexPerPrimitive*e[p];for(let _=0;_<this._numIndexPerPrimitive;++_){d=n*i[g+_],Ge.push(d);let b=a[d];c[0]=Math.min(b,c[0]),u[0]=Math.max(b,u[0]),b=a[d+1],c[1]=Math.min(b,c[1]),u[1]=Math.max(b,u[1]),b=a[d+2],c[2]=Math.min(b,c[2]),u[2]=Math.max(b,u[2])}}this.bbMin=c,this.bbMax=u;const m=mr(D(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(u[0]-c[0],u[1]-c[1]),u[2]-c[2]);let v=this.radius*this.radius;for(let p=0;p<Ge.length;++p){d=Ge.getItemAt(p);const g=a[d]-m[0],_=a[d+1]-m[1],b=a[d+2]-m[2],w=g*g+_*_+b*b;if(w<=v)continue;const z=Math.sqrt(w),E=.5*(z-this.radius);this.radius=this.radius+E,v=this.radius*this.radius;const C=E/z;m[0]+=g*C,m[1]+=_*C,m[2]+=b*C}this.center=m,Ge.clear()}getChildren(){if(this._children||ko(this.bbMin,this.bbMax)<=1)return this._children;const e=mr(D(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,i=new Uint8Array(r),o=new Array(8);for(let c=0;c<8;++c)o[c]=0;const{data:a,size:n}=this.position;for(let c=0;c<r;++c){let u=0;const m=this._numIndexPerPrimitive*this.primitiveIndices[c];let v=n*this.indices[m],p=a[v],g=a[v+1],_=a[v+2];for(let b=1;b<this._numIndexPerPrimitive;++b){v=n*this.indices[m+b];const w=a[v],z=a[v+1],E=a[v+2];w<p&&(p=w),z<g&&(g=z),E<_&&(_=E)}p<e[0]&&(u|=1),g<e[1]&&(u|=2),_<e[2]&&(u|=4),i[c]=u,++o[u]}let l=0;for(let c=0;c<8;++c)o[c]>0&&++l;if(l<2)return;const d=new Array(8);for(let c=0;c<8;++c)d[c]=o[c]>0?new Uint32Array(o[c]):void 0;for(let c=0;c<8;++c)o[c]=0;for(let c=0;c<r;++c){const u=i[c];d[u][o[u]++]=this.primitiveIndices[c]}this._children=new Array;for(let c=0;c<8;++c)d[c]!==void 0&&this._children.push(new Vi(d[c],this._numIndexPerPrimitive,this.indices,this.position));return this._children}static prune(){Ge.prune()}};const Ge=new Ai({deallocator:null});let $r=class{constructor(){this.id=Ci()}unload(){}};var Ae;(function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Mesh=2]="Mesh",t[t.Line=3]="Line",t[t.Point=4]="Point",t[t.Material=5]="Material",t[t.Texture=6]="Texture",t[t.COUNT=7]="COUNT"})(Ae||(Ae={}));function un(t){return t?{p0:Dt(t.p0),p1:Dt(t.p1),p2:Dt(t.p2)}:{p0:D(),p1:D(),p2:D()}}function hn(t,e,r){return Ce(sr,e,t),Ce(si,r,t),br(Mi(sr,sr,si))/2}new Fi(Ia);new Fi(()=>un());const sr=D(),si=D();function mn(t,e,r){if(!t||!e)return!1;const{size:i,data:o}=t;X(r,0,0,0),X(ne,0,0,0);let a=0,n=0;for(let l=0;l<e.length-2;l+=3){const d=e[l+0]*i,c=e[l+1]*i,u=e[l+2]*i;X(j,o[d+0],o[d+1],o[d+2]),X(we,o[c+0],o[c+1],o[c+2]),X(Lt,o[u+0],o[u+1],o[u+2]);const m=hn(j,we,Lt);m?(ce(j,j,we),ce(j,j,Lt),ve(j,j,1/3*m),ce(r,r,j),a+=m):(ce(ne,ne,j),ce(ne,ne,we),ce(ne,ne,Lt),n+=3)}return(n!==0||a!==0)&&(a!==0?(ve(r,r,1/a),!0):n!==0&&(ve(r,ne,1/n),!0))}function fn(t,e,r){if(!t||!e)return!1;const{size:i,data:o}=t;X(r,0,0,0);let a=-1,n=0;for(let l=0;l<e.length;l++){const d=e[l]*i;a!==d&&(r[0]+=o[d+0],r[1]+=o[d+1],r[2]+=o[d+2],n++),a=d}return n>1&&ve(r,r,1/n),n>0}function pn(t,e,r,i){if(!t)return!1;X(i,0,0,0),X(ne,0,0,0);let o=0,a=0;const{size:n,data:l}=t,d=e?e.length-1:l.length/n-1,c=d+(r?2:0);for(let u=0;u<c;u+=2){const m=u<d?u:d,v=u<d?u+1:0,p=(e?e[m]:m)*n,g=(e?e[v]:v)*n;j[0]=l[p],j[1]=l[p+1],j[2]=l[p+2],we[0]=l[g],we[1]=l[g+1],we[2]=l[g+2],ve(j,ce(j,j,we),.5);const _=Wo(j,we);_>0?(ce(i,i,ve(j,j,_)),o+=_):o===0&&(ce(ne,ne,j),a++)}return o!==0?(ve(i,i,1/o),!0):a!==0&&(ve(i,ne,1/a),!0)}const j=D(),we=D(),Lt=D(),ne=D();let vn=class{constructor(e){this.channel=e,this.id=Ci()}};function gn(t,e){return B(t)&&(t=[]),t.push(e),t}function xn(t,e){if(B(t))return null;const r=t.filter(i=>i!==e);return r.length===0?null:r}let Bi=class Gi extends $r{constructor(e,r,i=[],o=null,a=Ae.Mesh,n=null,l=-1){super(),this.material=e,this.mapPositions=o,this.type=a,this.objectAndLayerIdColor=n,this.edgeIndicesLength=l,this.visible=!0,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[d,c]of r)c&&this._vertexAttributes.set(d,{...c});if(i==null||i.length===0){const d=Tn(this._vertexAttributes),c=oi(d);this.edgeIndicesLength=this.edgeIndicesLength<0?d:this.edgeIndicesLength;for(const u of this._vertexAttributes.keys())this._indices.set(u,c)}else for(const[d,c]of i)c&&(this._indices.set(d,Da(c)),d===h.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(d).length:this.edgeIndicesLength))}instantiate(e={}){const r=new Gi(e.material||this.material,[],void 0,this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._vertexAttributes.forEach((i,o)=>{i.exclusive=!1,r._vertexAttributes.set(o,i)}),this._indices.forEach((i,o)=>r._indices.set(o,i)),r._boundingInfo=this._boundingInfo,r.transformation=e.transformation||this.transformation,r}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){let r=this._vertexAttributes.get(e);return r&&!r.exclusive&&(r={...r,exclusive:!0,data:cn(r.data)},this._vertexAttributes.set(e,r)),r}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return B(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===Ae.Mesh?this._computeAttachmentOriginTriangles(e):this.type===Ae.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(f(this._transformation)&&ot(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const r=this.indices.get(h.POSITION),i=this.vertexAttributes.get(h.POSITION);return mn(i,r,e)}_computeAttachmentOriginLines(e){const r=this.vertexAttributes.get(h.POSITION),i=this.indices.get(h.POSITION);return pn(r,i,i&&_n(this.material.parameters,r,i),e)}_computeAttachmentOriginPoints(e){const r=this.indices.get(h.POSITION),i=this.vertexAttributes.get(h.POSITION);return fn(i,r,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(h.POSITION),r=this.vertexAttributes.get(h.POSITION);if(!e||e.length===0||!r)return null;const i=this.type===Ae.Mesh?3:1;W(e.length%i==0,"Indexing error: "+e.length+" not divisible by "+i);const o=oi(e.length/i);return new dn(o,i,e,r)}get transformation(){return jo(this._transformation,Ut)}set transformation(e){this._transformation=e&&e!==Ut?xa(e):null}get shaderTransformation(){return f(this._shaderTransformer)?this._shaderTransformer(this.transformation):this.transformation}get shaderTransformer(){return this._shaderTransformer}set shaderTransformer(e){this._shaderTransformer=e}get hasVolatileTransformation(){return f(this._shaderTransformer)}addHighlight(){const e=new vn(Na.Highlight);return this.highlights=gn(this.highlights,e),e}removeHighlight(e){this.highlights=xn(this.highlights,e)}};function Tn(t){const e=t.values().next().value;return e==null?0:e.data.length/e.size}function _n(t,e,r){return!(!("isClosed"in t)||!t.isClosed)&&(r?r.length>2:e.data.length>6)}function Pr(t,e=!0){t.attributes.add(h.POSITION,"vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.code.add(s`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?s`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}var F;(function(t){t[t.Pass=0]="Pass",t[t.Draw=1]="Draw"})(F||(F={}));let Z=class{constructor(e,r,i,o,a=null){this.name=e,this.type=r,this.arraySize=a,this.bind={[F.Pass]:null,[F.Draw]:null},f(i)&&f(o)&&(this.bind[i]=o)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},te=class extends Z{constructor(e,r){super(e,"vec4",F.Pass,(i,o,a)=>i.setUniform4fv(e,r(o,a)))}};const Ui=Sr.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let Hi=class{constructor(){this._includedModules=new Map}include(e,r){if(this._includedModules.has(e)){const i=this._includedModules.get(e);if(i!==r){Ui.error("Trying to include shader module multiple times with different sets of options.");const o=new Set;for(const a of Object.keys(i))i[a]!==e[a]&&o.add(a);for(const a of Object.keys(e))i[a]!==e[a]&&o.add(a);o.forEach(a=>console.error(`  ${a}: current ${i[a]} new ${e[a]}`))}}else this._includedModules.set(e,r),e(this.builder,r)}},Ot=class extends Hi{constructor(){super(...arguments),this.vertex=new li,this.fragment=new li,this.attributes=new wn,this.varyings=new yn,this.extensions=new gr,this.constants=new ki}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),i=this.attributes.generateSource(e),o=this.varyings.generateSource(),a=e==="vertex"?this.vertex:this.fragment,n=a.uniforms.generateSource(),l=a.code.generateSource(),d=e==="vertex"?Cn:An,c=this.constants.generateSource().concat(a.constants.generateSource());return`
${r.join(`
`)}

${d}

${c.join(`
`)}

${n.join(`
`)}

${i.join(`
`)}

${o.join(`
`)}

${l.join(`
`)}`}generateBind(e,r){const i=new Map;this.vertex.uniforms.entries.forEach(n=>{const l=n.bind[e];f(l)&&i.set(n.name,l)}),this.fragment.uniforms.entries.forEach(n=>{const l=n.bind[e];f(l)&&i.set(n.name,l)});const o=Array.from(i.values()),a=o.length;return(n,l,d)=>{for(let c=0;c<a;++c)o[c](r,n,l,d)}}},bn=class{constructor(){this._entries=new Map}add(e){if(!Array.isArray(e))return this._add(e);for(const r of e)this._add(r)}get(e){return this._entries.get(e)}_add(e){if(B(e))Ui.error(`Trying to add null Uniform from ${new Error().stack}.`);else{if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new wr(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}}generateSource(){return Array.from(this._entries.values()).map(e=>f(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}},Sn=class{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}},li=class extends Hi{constructor(){super(...arguments),this.uniforms=new bn,this.code=new Sn,this.constants=new ki}get builder(){return this}},wn=class{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`attribute ${r[1]} ${r[0]};`)}},yn=class{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(){return this._entries.map(e=>`varying ${e[1]} ${e[0]};`)}},gr=class xr{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?xr.ALLOWLIST_VERTEX:xr.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(i=>r.includes(i)).map(i=>`#extension ${i} : enable`)}};gr.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],gr.ALLOWLIST_VERTEX=[];let ki=class H{constructor(){this._entries=new Set}add(e,r,i){let o="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":o=H._numberToFloatStr(i);break;case"int":o=H._numberToIntStr(i);break;case"bool":o=i.toString();break;case"vec2":o=`vec2(${H._numberToFloatStr(i[0])},                            ${H._numberToFloatStr(i[1])})`;break;case"vec3":o=`vec3(${H._numberToFloatStr(i[0])},                            ${H._numberToFloatStr(i[1])},                            ${H._numberToFloatStr(i[2])})`;break;case"vec4":o=`vec4(${H._numberToFloatStr(i[0])},                            ${H._numberToFloatStr(i[1])},                            ${H._numberToFloatStr(i[2])},                            ${H._numberToFloatStr(i[3])})`;break;case"ivec2":o=`ivec2(${H._numberToIntStr(i[0])},                             ${H._numberToIntStr(i[1])})`;break;case"ivec3":o=`ivec3(${H._numberToIntStr(i[0])},                             ${H._numberToIntStr(i[1])},                             ${H._numberToIntStr(i[2])})`;break;case"ivec4":o=`ivec4(${H._numberToIntStr(i[0])},                             ${H._numberToIntStr(i[1])},                             ${H._numberToIntStr(i[2])},                             ${H._numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":o=`${r}(${Array.prototype.map.call(i,a=>H._numberToFloatStr(a)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${o};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}};const An=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,Cn=`precision highp float;
precision highp sampler2D;`,Lr="Size",Qt="InvSize";function rt(t,e,r=!1,i=0){if(t.hasWebGL2Context){const o=s`vec2(textureSize(${e}, ${s.int(i)}))`;return r?"(1.0 / "+o+")":o}return r?e+Qt:e+Lr}function Mn(t,e,r,i=null,o=0){if(t.hasWebGL2Context)return s`texelFetch(${e}, ivec2(${r}), ${s.int(o)})`;let a=s`texture2D(${e}, ${r} * `;return a+=i?s`(${i}))`:s`${e+Qt})`,a}let de=class extends Z{constructor(e,r){super(e,"vec2",F.Pass,(i,o,a)=>i.setUniform2fv(e,r(o,a)))}};var K;(function(t){t[t.None=0]="None",t[t.Size=1]="Size",t[t.InvSize=2]="InvSize"})(K||(K={}));let ie=class extends Z{constructor(e,r){super(e,"sampler2D",F.Pass,(i,o,a)=>i.bindTexture(e,r(o,a)))}};function je(t,e,r=K.None){const i=[new ie(t,e)];if(r&K.Size){const o=t+Lr;i.push(new de(o,(a,n)=>{const l=e(a,n);return f(l)?Pe(ci,l.descriptor.width,l.descriptor.height):Vt}))}if(r&K.InvSize){const o=t+Qt;i.push(new de(o,(a,n)=>{const l=e(a,n);return f(l)?Pe(ci,1/l.descriptor.width,1/l.descriptor.height):Vt}))}return i}const ci=Xt();let Wi=class extends Jt{constructor(){super(...arguments),this.color=Kt(1,1,1,1)}};function On(){const t=new Ot;return t.include(Pr),t.fragment.uniforms.add([new ie("tex",e=>e.texture),new te("uColor",e=>e.color)]),t.fragment.code.add(s`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),t}Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:Wi,build:On},Symbol.toStringTag,{value:"Module"}));function $n(){if(B(lr)){const t=e=>qo(`esri/libs/basisu/${e}`);lr=Mt(()=>import("./basis_transcoder-e0466ff6.js"),["./basis_transcoder-e0466ff6.js","./_commonjsHelpers-2f3e7994.js"],import.meta.url).then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(r=>(r.initializeBasis(),delete r.then,r)))}return lr}let lr;var ke;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(ke||(ke={}));let me=null,Rt=null;async function ji(){return B(Rt)&&(Rt=$n(),me=await Rt),Rt}function Pn(t,e){if(B(me))return t.byteLength;const r=new me.BasisFile(new Uint8Array(t)),i=Xi(r)?qi(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),i}function Ln(t,e){if(B(me))return t.byteLength;const r=new me.KTX2File(new Uint8Array(t)),i=Ki(r)?qi(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),i}function qi(t,e,r,i,o){const a=Xa(e?ye.COMPRESSED_RGBA8_ETC2_EAC:ye.COMPRESSED_RGB8_ETC2),n=o&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*i*a*n)}function Xi(t){return t.getNumImages()>=1&&!t.isUASTC()}function Ki(t){return t.getFaces()>=1&&t.isETC1S()}async function Rn(t,e,r){B(me)&&(me=await ji());const i=new me.BasisFile(new Uint8Array(r));if(!Xi(i))return null;i.startTranscoding();const o=Yi(t,e,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),(a,n)=>i.getImageTranscodedSizeInBytes(0,a,n),(a,n,l)=>i.transcodeImage(l,0,a,n,0,0));return i.close(),i.delete(),o}async function En(t,e,r){B(me)&&(me=await ji());const i=new me.KTX2File(new Uint8Array(r));if(!Ki(i))return null;i.startTranscoding();const o=Yi(t,e,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),(a,n)=>i.getImageTranscodedSizeInBytes(a,0,0,n),(a,n,l)=>i.transcodeImage(l,a,0,0,n,0,-1,-1));return i.close(),i.delete(),o}function Yi(t,e,r,i,o,a,n,l){const{compressedTextureETC:d,compressedTextureS3TC:c}=t.capabilities,[u,m]=d?i?[ke.ETC2_RGBA,ye.COMPRESSED_RGBA8_ETC2_EAC]:[ke.ETC1_RGB,ye.COMPRESSED_RGB8_ETC2]:c?i?[ke.BC3_RGBA,ye.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[ke.BC1_RGB,ye.COMPRESSED_RGB_S3TC_DXT1_EXT]:[ke.RGBA32,Ue.RGBA],v=e.hasMipmap?r:Math.min(1,r),p=[];for(let w=0;w<v;w++)p.push(new Uint8Array(n(w,u))),l(w,u,p[w]);const g=p.length>1,_=g?We.LINEAR_MIPMAP_LINEAR:We.LINEAR,b={...e,samplingMode:_,hasMipmap:g,internalFormat:m,width:o,height:a};return new Oe(t,b,{type:"compressed",levels:p})}const pt=Sr.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Nn=542327876,In=131072,Dn=4;function Rr(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function Fn(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const zn=Rr("DXT1"),Vn=Rr("DXT3"),Bn=Rr("DXT5"),Gn=31,Un=0,Hn=1,kn=2,Wn=3,jn=4,qn=7,Xn=20,Kn=21;function Yn(t,e,r){const{textureData:i,internalFormat:o,width:a,height:n}=Xo(Zn(r,e.hasMipmap??!1));return e.samplingMode=i.levels.length>1?We.LINEAR_MIPMAP_LINEAR:We.LINEAR,e.hasMipmap=i.levels.length>1,e.internalFormat=o,e.width=a,e.height=n,new Oe(t,e,i)}function Zn(t,e){const r=new Int32Array(t,0,Gn);if(r[Un]!==Nn)return pt.error("Invalid magic number in DDS header"),null;if(!(r[Xn]&Dn))return pt.error("Unsupported format, must contain a FourCC code"),null;const i=r[Kn];let o,a;switch(i){case zn:o=8,a=ye.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Vn:o=16,a=ye.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Bn:o=16,a=ye.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return pt.error("Unsupported FourCC code:",Fn(i)),null}let n=1,l=r[jn],d=r[Wn];!(3&l)&&!(3&d)||(pt.warn("Rounding up compressed texture size to nearest multiple of 4."),l=l+3&-4,d=d+3&-4);const c=l,u=d;let m,v;r[kn]&In&&e!==!1&&(n=Math.max(1,r[qn])),n===1||Bt(l)&&Bt(d)||(pt.warn("Ignoring mipmaps of non power of two sized compressed texture."),n=1);let p=r[Hn]+4;const g=[];for(let _=0;_<n;++_)v=(l+3>>2)*(d+3>>2)*o,m=new Uint8Array(t,p,v),g.push(m),p+=v,l=Math.max(1,l>>1),d=Math.max(1,d>>1);return{textureData:{type:"compressed",levels:g},internalFormat:a,width:c,height:u}}const $t=new Map([[h.POSITION,0],[h.NORMAL,1],[h.UV0,2],[h.COLOR,3],[h.SIZE,4],[h.TANGENT,4],[h.AUXPOS1,5],[h.SYMBOLCOLOR,5],[h.AUXPOS2,6],[h.FEATUREATTRIBUTE,6],[h.INSTANCEFEATUREATTRIBUTE,6],[h.INSTANCECOLOR,7],[h.OBJECTANDLAYERIDCOLOR,7],[h.OBJECTANDLAYERIDCOLOR_INSTANCED,7],[h.MODEL,8],[h.MODELNORMAL,12],[h.MODELORIGINHI,11],[h.MODELORIGINLO,15]]);new he(h.POSITION,3,ue.FLOAT,0,12);new he(h.POSITION,3,ue.FLOAT,0,20),new he(h.UV0,2,ue.FLOAT,12,20);new he(h.POSITION,3,ue.FLOAT,0,32),new he(h.NORMAL,3,ue.FLOAT,12,32),new he(h.UV0,2,ue.FLOAT,24,32);new he(h.POSITION,3,ue.FLOAT,0,16),new he(h.COLOR,4,ue.UNSIGNED_BYTE,12,16);const Jn=[new he(h.POSITION,2,ue.FLOAT,0,8)],Qn=[new he(h.POSITION,2,ue.FLOAT,0,16),new he(h.UV0,2,ue.FLOAT,8,16)];let es=class extends Ka{};function ts(t,e=Jn,r=$t,i=-1,o=1){let a=null;return e===Qn?a=new Float32Array([i,i,0,0,o,i,1,0,i,o,0,1,o,o,1,1]):a=new Float32Array([i,i,o,i,i,o,o,o]),new es(t,r,{geometry:e},{geometry:Ya.createVertex(t,ka.STATIC_DRAW,a)})}let Zi=class Ft extends $r{constructor(e,r){super(),this._data=e,this.type=Ae.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new Ko,this._passParameters=new Wi,this.params=r||{},this.params.mipmap=this.params.mipmap!==!1,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:Qe.REPEAT,t:Qe.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||nr.STRETCH,this.estimatedTexMemRequired=Ft._estimateTexMemRequired(this._data,this.params),this._startPreload()}_startPreload(){const e=this._data;B(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(qr(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const r=!e.paused;if(e.src=e.src,r&&e.autoplay){const i=()=>{e.removeEventListener("canplay",i),e.play()};e.addEventListener("canplay",i)}}}_startPreloadImageElement(e){Yo(e.src)||qr(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,r){if(B(e))return 0;if(ut(e)||ht(e))return r.encoding===mt.KTX2_ENCODING?Ln(e,!!r.mipmap):r.encoding===mt.BASIS_ENCODING?Pn(e,!!r.mipmap):e.byteLength;const{width:i,height:o}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Ft._getDataDimensions(e):r;return(r.mipmap?4/3:1)*i*o*(r.components||4)||0}dispose(){this._data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){return{target:ai.TEXTURE_2D,pixelFormat:Ue.RGBA,dataType:ni.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?We.LINEAR_MIPMAP_LINEAR:We.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.maxAnisotropy??(this.params.mipmap?e.parameters.maxMaxAnisotropy:1)}}get glTexture(){return this._glTexture}load(e,r){if(f(this._glTexture))return this._glTexture;if(f(this._loadingPromise))return this._loadingPromise;const i=this._data;return B(i)?(this._glTexture=new Oe(e,this._createDescriptor(e),null),this._glTexture):typeof i=="string"?this._loadFromURL(e,r,i):i instanceof Image?this._loadFromImageElement(e,r,i):i instanceof HTMLVideoElement?this._loadFromVideoElement(e,r,i):i instanceof ImageData||i instanceof HTMLCanvasElement?this._loadFromImage(e,i,r):(ut(i)||ht(i))&&this.params.encoding===mt.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,i)):(ut(i)||ht(i))&&this.params.encoding===mt.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,i)):(ut(i)||ht(i))&&this.params.encoding===mt.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,i)):ht(i)?this._loadFromPixelData(e,i):ut(i)?this._loadFromPixelData(e,new Uint8Array(i)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(e,r,i){if(!(this._data instanceof HTMLVideoElement)||B(this._glTexture)||this._data.readyState<Tt.HAVE_CURRENT_DATA||i===this._data.currentTime)return i;if(f(this._powerOfTwoStretchInfo)){const{framebuffer:o,vao:a,sourceTexture:n}=this._powerOfTwoStretchInfo;n.setData(this._data),this._drawStretchedTexture(e,r,o,a,n,this._glTexture)}else{const{videoWidth:o,videoHeight:a}=this._data,{width:n,height:l}=this._glTexture.descriptor;o!==n||a!==l?this._glTexture.updateData(0,0,0,Math.min(o,n),Math.min(a,l),this._data):this._glTexture.setData(this._data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this._data.currentTime}_loadFromDDSData(e,r){return this._glTexture=Yn(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync(()=>En(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromBasis(e,r){return this._loadAsync(()=>Rn(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromPixelData(e,r){W(this.params.width>0&&this.params.height>0);const i=this._createDescriptor(e);return i.pixelFormat=this.params.components===1?Ue.LUMINANCE:this.params.components===3?Ue.RGB:Ue.RGBA,i.width=this.params.width,i.height=this.params.height,this._glTexture=new Oe(e,i,r),this._glTexture}_loadFromURL(e,r,i){return this._loadAsync(async o=>{const a=await Di(i,{signal:o});return Xr(o),this._loadFromImage(e,a,r)})}_loadFromImageElement(e,r,i){return i.complete?this._loadFromImage(e,i,r):this._loadAsync(async o=>{const a=await Zo(i,i.src,!1,o);return Xr(o),this._loadFromImage(e,a,r)})}_loadFromVideoElement(e,r,i){return i.readyState>=Tt.HAVE_CURRENT_DATA?this._loadFromImage(e,i,r):this._loadFromVideoElementAsync(e,r,i)}_loadFromVideoElementAsync(e,r,i){return this._loadAsync(o=>new Promise((a,n)=>{const l=()=>{i.removeEventListener("loadeddata",d),i.removeEventListener("error",c),ea(u)},d=()=>{i.readyState>=Tt.HAVE_CURRENT_DATA&&(l(),a(this._loadFromImage(e,i,r)))},c=m=>{l(),n(m||new wr("Failed to load video"))};i.addEventListener("loadeddata",d),i.addEventListener("error",c);const u=Jo(o,()=>c(Qo()))}))}_loadFromImage(e,r,i){const o=Ft._getDataDimensions(r);this.params.width=o.width,this.params.height=o.height;const a=this._createDescriptor(e);return a.pixelFormat=this.params.components===3?Ue.RGB:Ue.RGBA,!this._requiresPowerOfTwo(e,a)||Bt(o.width)&&Bt(o.height)?(a.width=o.width,a.height=o.height,this._glTexture=new Oe(e,a,r),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,r,o,a,i),this._glTexture)}_loadAsync(e){const r=new AbortController;this._loadingController=r;const i=e(r.signal);this._loadingPromise=i;const o=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===i&&(this._loadingPromise=null)};return i.then(o,o),i}_requiresPowerOfTwo(e,r){const i=Qe.CLAMP_TO_EDGE,o=typeof r.wrapMode=="number"?r.wrapMode===i:r.wrapMode.s===i&&r.wrapMode.t===i;return e.type===Oi.WEBGL1&&(r.hasMipmap||!o)}_makePowerOfTwoTexture(e,r,i,o,a){const{width:n,height:l}=i,d=Kr(n),c=Kr(l);let u;switch(o.width=d,o.height=c,this.params.powerOfTwoResizeMode){case nr.PAD:o.textureCoordinateScaleFactor=[n/d,l/c],u=new Oe(e,o),u.updateData(0,0,0,n,l,r);break;case nr.STRETCH:case null:case void 0:u=this._stretchToPowerOfTwo(e,r,o,a());break;default:Ye(this.params.powerOfTwoResizeMode)}return o.hasMipmap&&u.generateMipmap(),u}_stretchToPowerOfTwo(e,r,i,o){const a=new Oe(e,i),n=new Za(e,{colorTarget:Wa.TEXTURE,depthStencilTarget:ja.NONE},a),l=new Oe(e,{target:ai.TEXTURE_2D,pixelFormat:i.pixelFormat,dataType:ni.UNSIGNED_BYTE,wrapMode:Qe.CLAMP_TO_EDGE,samplingMode:We.LINEAR,flipped:!!i.flipped,maxAnisotropy:8,preMultiplyAlpha:i.preMultiplyAlpha},r),d=ts(e),c=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,o,n,d,l,a),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:d,sourceTexture:l,framebuffer:n}:(d.dispose(!0),l.dispose(),n.detachColorTexture(),n.dispose()),e.bindFramebuffer(c),a}_drawStretchedTexture(e,r,i,o,a,n){this._passParameters.texture=a,e.bindFramebuffer(i);const l=e.getViewport();e.setViewport(0,0,n.descriptor.width,n.descriptor.height),e.bindTechnique(r,this._passParameters,null),e.bindVAO(o),e.drawArrays(xt.TRIANGLE_STRIP,0,Ja(o,"geometry")),e.bindFramebuffer(null),e.setViewport(l.x,l.y,l.width,l.height),this._passParameters.texture=null}unload(){if(f(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:r,sourceTexture:i}=this._powerOfTwoStretchInfo;r.dispose(!0),i.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if(f(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),f(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}};var Tt;(function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(Tt||(Tt={}));var y;(function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.ShadowHighlight=4]="ShadowHighlight",t[t.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",t[t.Highlight=6]="Highlight",t[t.Alpha=7]="Alpha",t[t.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",t[t.COUNT=9]="COUNT"})(y||(y={}));function rs(t,e){const r=t.fragment;switch(r.code.add(s`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case re.None:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case re.View:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case re.WindingOrder:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:Ye(e.doubleSidedMode);case re.COUNT:}}var re;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(re||(re={}));var Q;function it(t,e){switch(e.textureCoordinateType){case Q.Default:return t.attributes.add(h.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case Q.Compressed:return t.attributes.add(h.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(s`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case Q.Atlas:return t.attributes.add(h.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(h.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:Ye(e.textureCoordinateType);case Q.None:return void t.vertex.code.add(s`void forwardTextureCoordinates() {}`);case Q.COUNT:return}}(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.Compressed=3]="Compressed",t[t.COUNT=4]="COUNT"})(Q||(Q={}));function is(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(s`#ifndef GL_EXT_shader_texture_lod
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
}`)}function Ji(t,e){switch(t.include(it,e),t.fragment.code.add(s`
  struct TextureLookupParameter {
    vec2 uv;
    ${e.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),e.textureCoordinateType){case Q.Default:case Q.Compressed:return void t.fragment.code.add(s`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case Q.Atlas:return t.include(is),void t.fragment.code.add(s`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:Ye(e.textureCoordinateType);case Q.None:case Q.COUNT:return}}let fe=class extends Z{constructor(e,r){super(e,"vec3",F.Draw,(i,o,a,n)=>i.setUniform3fv(e,r(o,a,n)))}},Y=class extends Z{constructor(e,r){super(e,"vec3",F.Pass,(i,o,a)=>i.setUniform3fv(e,r(o,a)))}},Tr=class extends Z{constructor(e,r){super(e,"vec2",F.Draw,(i,o,a,n)=>i.setUniform2fv(e,r(o,a,n)))}},Qi=class extends Z{constructor(e,r){super(e,"sampler2D",F.Draw,(i,o,a)=>i.bindTexture(e,r(o,a)))}};function zt(t,e,r=K.None){const i=[new Qi(t,e)];if(r&K.Size){const o=t+Lr;i.push(new Tr(o,(a,n)=>{const l=e(a,n);return f(l)?Pe(di,l.descriptor.width,l.descriptor.height):Vt}))}if(r&K.InvSize){const o=t+Qt;i.push(new Tr(o,(a,n)=>{const l=e(a,n);return f(l)?Pe(di,1/l.descriptor.width,1/l.descriptor.height):Vt}))}return i}const di=Xt();let os=class{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}ensureTechnique(e,r){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,r),this._technique),this._technique}ensureResources(e){return vr.LOADED}},as=class extends os{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,r=>this._texture=r),this._acquire(e.normalTextureId,r=>this._textureNormal=r),this._acquire(e.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=Be(this._texture),this._textureNormal=Be(this._textureNormal),this._textureEmissive=Be(this._textureEmissive),this._textureOcclusion=Be(this._textureOcclusion),this._textureMetallicRoughness=Be(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?vr.LOADED:vr.LOADING}get textureBindParameters(){return new ns(f(this._texture)?this._texture.glTexture:null,f(this._textureNormal)?this._textureNormal.glTexture:null,f(this._textureEmissive)?this._textureEmissive.glTexture:null,f(this._textureOcclusion)?this._textureOcclusion.glTexture:null,f(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){(B(this._texture)||e!==this._texture.id)&&(this._texture=Be(this._texture),this._textureId=e,this._acquire(this._textureId,r=>this._texture=r))}_acquire(e,r){if(B(e))return void r(null);const i=this._textureRepository.acquire(e);if(ta(i))return++this._numLoading,void i.then(o=>{if(this._disposed)return Be(o),void r(null);r(o)}).finally(()=>--this._numLoading);r(i)}},ns=class extends Jt{constructor(e=null,r=null,i=null,o=null,a=null){super(),this.texture=e,this.textureNormal=r,this.textureEmissive=i,this.textureOcclusion=o,this.textureMetallicRoughness=a}};en(0,.6,.2);var N;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.Terrain=5]="Terrain",t[t.TerrainWithWater=6]="TerrainWithWater",t[t.COUNT=7]="COUNT"})(N||(N={}));function eo(t,e){const r=t.fragment,i=e.hasMetallicRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;if(e.pbrMode===N.Normal&&i&&t.include(Ji,e),e.pbrMode!==N.Schematic)if(e.pbrMode!==N.Disabled){if(e.pbrMode===N.Normal){r.code.add(s`vec3 mrr;
vec3 emission;
float occlusion;`);const o=e.supportsTextureAtlas?e.hasWebGL2Context?K.None:K.Size:K.None,a=e.pbrTextureBindType;e.hasMetallicRoughnessTexture&&(r.uniforms.add(a===F.Pass?je("texMetallicRoughness",n=>n.textureMetallicRoughness,o):zt("texMetallicRoughness",n=>n.textureMetallicRoughness,o)),r.code.add(s`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(r.uniforms.add(a===F.Pass?je("texEmission",n=>n.textureEmissive,o):zt("texEmission",n=>n.textureEmissive,o)),r.code.add(s`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),e.hasOcclusionTexture?(r.uniforms.add(a===F.Pass?je("texOcclusion",n=>n.textureOcclusion,o):zt("texOcclusion",n=>n.textureOcclusion,o)),r.code.add(s`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(s`float getBakedOcclusion() { return 1.0; }`),r.uniforms.add(a===F.Pass?[new Y("emissionFactor",n=>n.emissiveFactor),new Y("mrrFactors",n=>n.mrrFactors)]:[new fe("emissionFactor",n=>n.emissiveFactor),new fe("mrrFactors",n=>n.mrrFactors)]),r.code.add(s`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?s`vtc.uv = vuv0;`:""}
      ${e.hasMetallicRoughnessTextureTransform?s`vtc.uv = metallicRoughnessUV;`:""}
      ${e.hasMetallicRoughnessTexture?e.supportsTextureAtlas?s`
                vtc.size = ${rt(e,"texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);`:s`applyMetallnessAndRoughness(vtc);`:""}
      ${e.hasEmissiveTextureTransform?s`vtc.uv = emissiveUV;`:""}
      ${e.hasEmissionTexture?e.supportsTextureAtlas?s`
                vtc.size = ${rt(e,"texEmission")};
                applyEmission(vtc);`:s`applyEmission(vtc);`:""}
      ${e.hasOcclusionTextureTransform?s`vtc.uv = occlusionUV;`:""}
      ${e.hasOcclusionTexture?e.supportsTextureAtlas?s`
                vtc.size = ${rt(e,"texOcclusion")};
                applyOcclusion(vtc);`:s`applyOcclusion(vtc);`:""}
    }
  `)}}else r.code.add(s`float getBakedOcclusion() { return 1.0; }`);else r.code.add(s`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function ss(t){return Math.abs(t*t*t)}function ls(t,e,r){const i=r.parameters,o=r.paddingPixelsOverride;return vt.scale=Math.min(i.divisor/(e-i.offset),1),vt.factor=ss(t),vt.minPixelSize=i.minPixelSize,vt.paddingPixels=o,vt}function cs(t,e){return t===0?e.minPixelSize:e.minPixelSize*(1+2*e.paddingPixels/t)}function ds(t,e){return Math.max(ra(t*e.scale,t,e.factor),cs(t,e))}function us(t,e,r,i){return ds(t,ls(e,r,i))}const vt={scale:0,factor:0,minPixelSize:0,paddingPixels:0},Et=ia();function hs(t,e,r,i,o,a){if(t.visible)if(t.boundingInfo){W(t.type===Ae.Mesh);const n=e.tolerance;to(t.boundingInfo,r,i,n,o,a)}else{const n=t.indices.get(h.POSITION),l=t.vertexAttributes.get(h.POSITION);io(r,i,0,n.length/3,n,l,void 0,o,a)}}const ms=D();function to(t,e,r,i,o,a){if(B(t))return;const n=ps(e,r,ms);if(oa(Et,t.bbMin),aa(Et,t.bbMax),f(o)&&o.applyToAabb(Et),vs(Et,e,n,i)){const{primitiveIndices:l,indices:d,position:c}=t,u=l?l.length:d.length/3;if(u>Ss){const m=t.getChildren();if(m!==void 0){for(const v of m)to(v,e,r,i,o,a);return}}io(e,r,0,u,d,c,l,o,a)}}const ro=D();function io(t,e,r,i,o,a,n,l,d){if(n)return fs(t,e,r,i,o,a,n,l,d);const{data:c,stride:u}=a,m=t[0],v=t[1],p=t[2],g=e[0]-m,_=e[1]-v,b=e[2]-p;for(let w=r,z=3*r;w<i;++w){let E=u*o[z++],C=c[E++],I=c[E++],L=c[E];E=u*o[z++];let P=c[E++],$=c[E++],R=c[E];E=u*o[z++];let M=c[E++],A=c[E++],O=c[E];f(l)&&([C,I,L]=l.applyToVertex(C,I,L,w),[P,$,R]=l.applyToVertex(P,$,R,w),[M,A,O]=l.applyToVertex(M,A,O,w));const V=P-C,k=$-I,U=R-L,J=M-C,ge=A-I,xe=O-L,Ie=_*xe-ge*b,st=b*J-xe*g,lt=g*ge-J*_,le=V*Ie+k*st+U*lt;if(Math.abs(le)<=Number.EPSILON)continue;const ae=m-C,De=v-I,Fe=p-L,pe=ae*Ie+De*st+Fe*lt;if(le>0){if(pe<0||pe>le)continue}else if(pe>0||pe<le)continue;const Te=De*U-k*Fe,ct=Fe*V-U*ae,dt=ae*k-V*De,ze=g*Te+_*ct+b*dt;if(le>0){if(ze<0||pe+ze>le)continue}else if(ze>0||pe+ze<le)continue;const Ve=(J*Te+ge*ct+xe*dt)/le;Ve>=0&&d(Ve,oo(V,k,U,J,ge,xe,ro),w,!1)}}function fs(t,e,r,i,o,a,n,l,d){const{data:c,stride:u}=a,m=t[0],v=t[1],p=t[2],g=e[0]-m,_=e[1]-v,b=e[2]-p;for(let w=r;w<i;++w){const z=n[w];let E=3*z,C=u*o[E++],I=c[C++],L=c[C++],P=c[C];C=u*o[E++];let $=c[C++],R=c[C++],M=c[C];C=u*o[E];let A=c[C++],O=c[C++],V=c[C];f(l)&&([I,L,P]=l.applyToVertex(I,L,P,w),[$,R,M]=l.applyToVertex($,R,M,w),[A,O,V]=l.applyToVertex(A,O,V,w));const k=$-I,U=R-L,J=M-P,ge=A-I,xe=O-L,Ie=V-P,st=_*Ie-xe*b,lt=b*ge-Ie*g,le=g*xe-ge*_,ae=k*st+U*lt+J*le;if(Math.abs(ae)<=Number.EPSILON)continue;const De=m-I,Fe=v-L,pe=p-P,Te=De*st+Fe*lt+pe*le;if(ae>0){if(Te<0||Te>ae)continue}else if(Te>0||Te<ae)continue;const ct=Fe*J-U*pe,dt=pe*k-J*De,ze=De*U-k*Fe,Ve=g*ct+_*dt+b*ze;if(ae>0){if(Ve<0||Te+Ve>ae)continue}else if(Ve>0||Te+Ve<ae)continue;const Wr=(ge*ct+xe*dt+Ie*ze)/ae;Wr>=0&&d(Wr,oo(k,U,J,ge,xe,Ie,ro),z,!1)}}const ui=D(),hi=D();function oo(t,e,r,i,o,a,n){return X(ui,t,e,r),X(hi,i,o,a),Mi(n,ui,hi),yr(n,n),n}function ps(t,e,r){return X(r,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function vs(t,e,r,i){return gs(t,e,r,i,1/0)}function gs(t,e,r,i,o){const a=(t[0]-i-e[0])*r[0],n=(t[3]+i-e[0])*r[0];let l=Math.min(a,n),d=Math.max(a,n);const c=(t[1]-i-e[1])*r[1],u=(t[4]+i-e[1])*r[1];if(d=Math.min(d,Math.max(c,u)),d<0||(l=Math.max(l,Math.min(c,u)),l>d))return!1;const m=(t[2]-i-e[2])*r[2],v=(t[5]+i-e[2])*r[2];return d=Math.min(d,Math.max(m,v)),!(d<0)&&(l=Math.max(l,Math.min(m,v)),!(l>d)&&l<o)}function xs(t,e,r,i,o){let a=(r.screenLength||0)*t.pixelRatio;f(o)&&(a=us(a,i,e,o));const n=a*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return na(n*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function ao(t,e){const r=e?ao(e):{};for(const i in t){let o=t[i];o&&o.forEach&&(o=_s(o)),o==null&&i in r||(r[i]=o)}return r}function Ts(t,e){let r=!1;for(const i in e){const o=e[i];o!==void 0&&(Array.isArray(o)?t[i]===null?(t[i]=o.slice(),r=!0):sa(t[i],o)&&(r=!0):t[i]!==o&&(r=!0,t[i]=o))}return r}function _s(t){const e=[];return t.forEach(r=>e.push(r)),e}const bs={multiply:1,ignore:2,replace:3,tint:4},Ss=1e3;let ws=class extends $r{constructor(e,r){super(),this.type=Ae.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=$t,this._pp0=$e(0,0,1),this._pp1=$e(0,0,0),this._parameters=ao(e,r),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,r=!0){Ts(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(this.renderOccluded&e.renderOccludedMask)!=0}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){f(this.repository)&&this.repository.materialChanged(this)}intersectDraped(e,r,i,o,a,n){return this._pp0[0]=this._pp1[0]=o[0],this._pp0[1]=this._pp1[1]=o[1],this.intersect(e,r,i,this._pp0,this._pp1,a)}};var _r;(function(t){t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(_r||(_r={}));var et;(function(t){t[t.INTEGRATED_MESH=0]="INTEGRATED_MESH",t[t.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",t[t.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",t[t.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",t[t.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",t[t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",t[t.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",t[t.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",t[t.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",t[t.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",t[t.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",t[t.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",t[t.LASERLINES=12]="LASERLINES",t[t.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",t[t.HUD_MATERIAL=14]="HUD_MATERIAL",t[t.LABEL_MATERIAL=15]="LABEL_MATERIAL",t[t.LINE_CALLOUTS=16]="LINE_CALLOUTS",t[t.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",t[t.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",t[t.DRAPED_WATER=19]="DRAPED_WATER",t[t.VOXEL=20]="VOXEL",t[t.MAX_SLOTS=21]="MAX_SLOTS"})(et||(et={}));let ys=class{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=D(),this._mbs=zi(),this._obb={center:D(),halfSize:tn(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,r,i){const o=e,a=r,n=i+this.componentLocalOriginLength,l=this._totalOffset/Math.sqrt(o*o+a*a+n*n);return this._tmpVertex[0]=e+o*l,this._tmpVertex[1]=r+a*l,this._tmpVertex[2]=i+n*l,this._tmpVertex}applyToAabb(e){const r=e[0],i=e[1],o=e[2]+this.componentLocalOriginLength,a=e[3],n=e[4],l=e[5]+this.componentLocalOriginLength,d=r*a<0?0:Math.min(Math.abs(r),Math.abs(a)),c=i*n<0?0:Math.min(Math.abs(i),Math.abs(n)),u=o*l<0?0:Math.min(Math.abs(o),Math.abs(l)),m=Math.sqrt(d*d+c*c+u*u);if(m<this._totalOffset)return e[0]-=r<0?this._totalOffset:0,e[1]-=i<0?this._totalOffset:0,e[2]-=o<0?this._totalOffset:0,e[3]+=a>0?this._totalOffset:0,e[4]+=n>0?this._totalOffset:0,e[5]+=l>0?this._totalOffset:0,e;const v=Math.max(Math.abs(r),Math.abs(a)),p=Math.max(Math.abs(i),Math.abs(n)),g=Math.max(Math.abs(o),Math.abs(l)),_=Math.sqrt(v*v+p*p+g*g),b=this._totalOffset/_,w=this._totalOffset/m;return e[0]+=r*(r>0?b:w),e[1]+=i*(i>0?b:w),e[2]+=o*(o>0?b:w),e[3]+=a*(a<0?b:w),e[4]+=n*(n<0?b:w),e[5]+=l*(l<0?b:w),e}applyToMbs(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this._totalOffset/r;return this._mbs[0]=e[0]+e[0]*i,this._mbs[1]=e[1]+e[1]*i,this._mbs[2]=e[2]+e[2]*i,this._mbs[3]=e[3]+e[3]*this._totalOffset/r,this._mbs}applyToObb(e){const r=e.center,i=this._totalOffset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);this._obb.center[0]=r[0]+r[0]*i,this._obb.center[1]=r[1]+r[1]*i,this._obb.center[2]=r[2]+r[2]*i,Yr(this._obb.halfSize,e.halfSize,e.quaternion),ce(this._obb.halfSize,this._obb.halfSize,e.center);const o=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*o,this._obb.halfSize[1]+=this._obb.halfSize[1]*o,this._obb.halfSize[2]+=this._obb.halfSize[2]*o,Ce(this._obb.halfSize,this._obb.halfSize,e.center),rn(fi,e.quaternion),Yr(this._obb.halfSize,this._obb.halfSize,fi),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}},As=class{constructor(e=0){this.offset=e,this.sphere=zi(),this.tmpVertex=D()}applyToVertex(e,r,i){const o=this.objectTransform.transform;let a=o[0]*e+o[4]*r+o[8]*i+o[12],n=o[1]*e+o[5]*r+o[9]*i+o[13],l=o[2]*e+o[6]*r+o[10]*i+o[14];const d=this.offset/Math.sqrt(a*a+n*n+l*l);a+=a*d,n+=n*d,l+=l*d;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*a+c[4]*n+c[8]*l+c[12],this.tmpVertex[1]=c[1]*a+c[5]*n+c[9]*l+c[13],this.tmpVertex[2]=c[2]*a+c[6]*n+c[10]*l+c[14],this.tmpVertex}applyToMinMax(e,r){const i=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*i,e[1]+=e[1]*i,e[2]+=e[2]*i;const o=this.offset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);r[0]+=r[0]*o,r[1]+=r[1]*o,r[2]+=r[2]*o}applyToAabb(e){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*i,e[4]+=e[4]*i,e[5]+=e[5]*i,e}applyToBoundingSphere(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this.offset/r;return this.sphere[0]=e[0]+e[0]*i,this.sphere[1]=e[1]+e[1]*i,this.sphere[2]=e[2]+e[2]*i,this.sphere[3]=e[3]+e[3]*this.offset/r,this.sphere}};const mi=new As;function Cs(t){return f(t)?(mi.offset=t,mi):null}new ys;const fi=on();function Ms(t,e,r,i){const o=r.typedBuffer,a=r.typedBufferStride,n=t.length;i*=a;for(let l=0;l<n;++l){const d=2*t[l];o[i]=e[d],o[i+1]=e[d+1],i+=a}}function no(t,e,r,i,o){const a=r.typedBuffer,n=r.typedBufferStride,l=t.length;if(i*=n,o==null||o===1)for(let d=0;d<l;++d){const c=3*t[d];a[i]=e[c],a[i+1]=e[c+1],a[i+2]=e[c+2],i+=n}else for(let d=0;d<l;++d){const c=3*t[d];for(let u=0;u<o;++u)a[i]=e[c],a[i+1]=e[c+1],a[i+2]=e[c+2],i+=n}}function so(t,e,r,i,o=1){const a=r.typedBuffer,n=r.typedBufferStride,l=t.length;if(i*=n,o===1)for(let d=0;d<l;++d){const c=4*t[d];a[i]=e[c],a[i+1]=e[c+1],a[i+2]=e[c+2],a[i+3]=e[c+3],i+=n}else for(let d=0;d<l;++d){const c=4*t[d];for(let u=0;u<o;++u)a[i]=e[c],a[i+1]=e[c+1],a[i+2]=e[c+2],a[i+3]=e[c+3],i+=n}}function Os(t,e,r,i,o,a=1){if(!r)return void no(t,e,i,o,a);const n=i.typedBuffer,l=i.typedBufferStride,d=t.length,c=r[0],u=r[1],m=r[2],v=r[4],p=r[5],g=r[6],_=r[8],b=r[9],w=r[10],z=r[12],E=r[13],C=r[14];o*=l;let I=0,L=0,P=0;const $=$i(r)?R=>{I=e[R]+z,L=e[R+1]+E,P=e[R+2]+C}:R=>{const M=e[R],A=e[R+1],O=e[R+2];I=c*M+v*A+_*O+z,L=u*M+p*A+b*O+E,P=m*M+g*A+w*O+C};if(a===1)for(let R=0;R<d;++R)$(3*t[R]),n[o]=I,n[o+1]=L,n[o+2]=P,o+=l;else for(let R=0;R<d;++R){$(3*t[R]);for(let M=0;M<a;++M)n[o]=I,n[o+1]=L,n[o+2]=P,o+=l}}function $s(t,e,r,i,o,a=1){if(!r)return void no(t,e,i,o,a);const n=r,l=i.typedBuffer,d=i.typedBufferStride,c=t.length,u=n[0],m=n[1],v=n[2],p=n[4],g=n[5],_=n[6],b=n[8],w=n[9],z=n[10],E=!Pi(n),C=1e-6,I=1-C;o*=d;let L=0,P=0,$=0;const R=$i(n)?M=>{L=e[M],P=e[M+1],$=e[M+2]}:M=>{const A=e[M],O=e[M+1],V=e[M+2];L=u*A+p*O+b*V,P=m*A+g*O+w*V,$=v*A+_*O+z*V};if(a===1)if(E)for(let M=0;M<c;++M){R(3*t[M]);const A=L*L+P*P+$*$;if(A<I&&A>C){const O=1/Math.sqrt(A);l[o]=L*O,l[o+1]=P*O,l[o+2]=$*O}else l[o]=L,l[o+1]=P,l[o+2]=$;o+=d}else for(let M=0;M<c;++M)R(3*t[M]),l[o]=L,l[o+1]=P,l[o+2]=$,o+=d;else for(let M=0;M<c;++M){if(R(3*t[M]),E){const A=L*L+P*P+$*$;if(A<I&&A>C){const O=1/Math.sqrt(A);L*=O,P*=O,$*=O}}for(let A=0;A<a;++A)l[o]=L,l[o+1]=P,l[o+2]=$,o+=d}}function Ps(t,e,r,i,o,a=1){if(!r)return void so(t,e,i,o,a);const n=r,l=i.typedBuffer,d=i.typedBufferStride,c=t.length,u=n[0],m=n[1],v=n[2],p=n[4],g=n[5],_=n[6],b=n[8],w=n[9],z=n[10],E=!Pi(n),C=1e-6,I=1-C;if(o*=d,a===1)for(let L=0;L<c;++L){const P=4*t[L],$=e[P],R=e[P+1],M=e[P+2],A=e[P+3];let O=u*$+p*R+b*M,V=m*$+g*R+w*M,k=v*$+_*R+z*M;if(E){const U=O*O+V*V+k*k;if(U<I&&U>C){const J=1/Math.sqrt(U);O*=J,V*=J,k*=J}}l[o]=O,l[o+1]=V,l[o+2]=k,l[o+3]=A,o+=d}else for(let L=0;L<c;++L){const P=4*t[L],$=e[P],R=e[P+1],M=e[P+2],A=e[P+3];let O=u*$+p*R+b*M,V=m*$+g*R+w*M,k=v*$+_*R+z*M;if(E){const U=O*O+V*V+k*k;if(U<I&&U>C){const J=1/Math.sqrt(U);O*=J,V*=J,k*=J}}for(let U=0;U<a;++U)l[o]=O,l[o+1]=V,l[o+2]=k,l[o+3]=A,o+=d}}function Ls(t,e,r,i,o,a=1){const n=i.typedBuffer,l=i.typedBufferStride,d=t.length;if(o*=l,r!==e.length||r!==4)if(a!==1)if(r!==4)for(let c=0;c<d;++c){const u=3*t[c];for(let m=0;m<a;++m)n[o]=e[u],n[o+1]=e[u+1],n[o+2]=e[u+2],n[o+3]=255,o+=l}else for(let c=0;c<d;++c){const u=4*t[c];for(let m=0;m<a;++m)n[o]=e[u],n[o+1]=e[u+1],n[o+2]=e[u+2],n[o+3]=e[u+3],o+=l}else{if(r===4){for(let c=0;c<d;++c){const u=4*t[c];n[o]=e[u],n[o+1]=e[u+1],n[o+2]=e[u+2],n[o+3]=e[u+3],o+=l}return}for(let c=0;c<d;++c){const u=3*t[c];n[o]=e[u],n[o+1]=e[u+1],n[o+2]=e[u+2],n[o+3]=255,o+=l}}else{n[o]=e[0],n[o+1]=e[1],n[o+2]=e[2],n[o+3]=e[3];const c=new Uint32Array(i.typedBuffer.buffer,i.start),u=l/4,m=c[o/=4];o+=u;const v=d*a;for(let p=1;p<v;++p)c[o]=m,o+=u}}function Rs(t,e,r,i,o=1){const a=e.typedBuffer,n=e.typedBufferStride;if(i*=n,o===1)for(let l=0;l<r;++l)a[i]=t[0],a[i+1]=t[1],a[i+2]=t[2],a[i+3]=t[3],i+=n;else for(let l=0;l<r;++l)for(let d=0;d<o;++d)a[i]=t[0],a[i+1]=t[1],a[i+2]=t[2],a[i+3]=t[3],i+=n}function Es(t,e,r,i,o,a){for(const n of e.fieldNames){const l=t.vertexAttributes.get(n),d=t.indices.get(n);if(l&&d)switch(n){case h.POSITION:{W(l.size===3);const c=o.getField(n,tt);W(!!c,`No buffer view for ${n}`),c&&Os(d,l.data,r,c,a);break}case h.NORMAL:{W(l.size===3);const c=o.getField(n,tt);W(!!c,`No buffer view for ${n}`),c&&$s(d,l.data,i,c,a);break}case h.UV0:{W(l.size===2);const c=o.getField(n,Ii);W(!!c,`No buffer view for ${n}`),c&&Ms(d,l.data,c,a);break}case h.COLOR:case h.SYMBOLCOLOR:{W(l.size===3||l.size===4);const c=o.getField(n,yt);W(!!c,`No buffer view for ${n}`),c&&Ls(d,l.data,l.size,c,a);break}case h.TANGENT:{W(l.size===4);const c=o.getField(n,Ht);W(!!c,`No buffer view for ${n}`),c&&Ps(d,l.data,i,c,a);break}case h.PROFILERIGHT:case h.PROFILEUP:case h.PROFILEVERTEXANDNORMAL:case h.FEATUREVALUE:{W(l.size===4);const c=o.getField(n,Ht);W(!!c,`No buffer view for ${n}`),c&&so(d,l.data,c,a)}}else if(n===h.OBJECTANDLAYERIDCOLOR&&f(t.objectAndLayerIdColor)){const c=t.indices.get(h.POSITION);if(W(!!c,`No buffer view for ${n}`),c){const u=c.length,m=o.getField(n,yt);Rs(t.objectAndLayerIdColor,m,u,a)}}}}let Ns=class{constructor(e){this.vertexBufferLayout=e}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(h.POSITION).length}write(e,r,i,o,a){Es(i,this.vertexBufferLayout,e,r,o,a)}};function Is(t){const e=s`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;t.vertex.code.add(e)}function er(t,e){switch(e.normalType){case G.CompressedAttribute:t.include(Is),t.attributes.add(h.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(s`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`);break;case G.Attribute:t.attributes.add(h.NORMAL,"vec3"),t.vertex.code.add(s`vec3 normalModel() {
return normal;
}`);break;case G.ScreenDerivative:t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(s`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:Ye(e.normalType);case G.COUNT:case G.Ground:}}var G;(function(t){t[t.Attribute=0]="Attribute",t[t.CompressedAttribute=1]="CompressedAttribute",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"})(G||(G={}));function Er(t){t.attributes.add(h.POSITION,"vec3"),t.vertex.code.add(s`vec3 positionModel() { return position; }`)}function lo({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(s`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):t.add(s`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}let co=class extends Z{constructor(e,r){super(e,"mat3",F.Draw,(i,o,a)=>i.setUniformMatrix3fv(e,r(o,a)))}},Ne=class extends Z{constructor(e,r){super(e,"mat3",F.Pass,(i,o,a)=>i.setUniformMatrix3fv(e,r(o,a)))}},qe=class extends Z{constructor(e,r){super(e,"mat4",F.Pass,(i,o,a)=>i.setUniformMatrix4fv(e,r(o,a)))}};function uo(t,e){t.include(Er);const r=t.vertex;r.include(lo,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),r.uniforms.add([new Y("transformWorldFromViewTH",i=>i.transformWorldFromViewTH),new Y("transformWorldFromViewTL",i=>i.transformWorldFromViewTL),new Ne("transformViewFromCameraRelativeRS",i=>i.transformViewFromCameraRelativeRS),new qe("transformProjFromView",i=>i.transformProjFromView),new co("transformWorldFromModelRS",i=>i.transformWorldFromModelRS),new fe("transformWorldFromModelTH",i=>i.transformWorldFromModelTH),new fe("transformWorldFromModelTL",i=>i.transformWorldFromModelTL)]),r.code.add(s`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(s`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?s`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:s`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),t.fragment.uniforms.add(new Y("transformWorldFromViewTL",i=>i.transformWorldFromViewTL)),r.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}let Ds=class extends Jt{constructor(){super(...arguments),this.transformWorldFromViewTH=D(),this.transformWorldFromViewTL=D(),this.transformViewFromCameraRelativeRS=Zt(),this.transformProjFromView=Cr()}};function ho(t,e){switch(e.normalType){case G.Attribute:case G.CompressedAttribute:t.include(er,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add([new co("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new Ne("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)]),t.vertex.code.add(s`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case G.Ground:t.include(uo,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(s`
        void forwardNormal() {
          vNormalWorld = ${e.spherical?s`normalize(vPositionWorldCameraRelative);`:s`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case G.ScreenDerivative:t.vertex.code.add(s`void forwardNormal() {}`);break;default:Ye(e.normalType);case G.COUNT:}}let Fs=class extends Ds{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Zt()}};const zs=.1,Nr=.001;let tr=class{constructor(e,r){this._module=e,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}},Ir=class{constructor(e,r,i){this.release=i,this.initializeConfiguration(e,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=Zr(this._program),this._pipeline=this._configuration=null}reload(e){Zr(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,r=null,i){e.setPipelineState(this.getPipelineState(r,i))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return xt.TRIANGLES}getPipelineState(e,r){return this._pipeline}initializeConfiguration(e,r){}},Dr=class{constructor(e,r,i){this._context=e,this._locations=i,this._textures=new Map,this._freeTextureUnits=new Ai({deallocator:null}),this._glProgram=e.programCache.acquire(r.generate("vertex"),r.generate("fragment"),i),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBind(F.Pass,this),this.bindDraw=r.generateBind(F.Draw,this),this._fragmentUniforms=qa()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if(B(r)||r.glName==null){const o=this._textures.get(e);return o&&(this._context.bindTexture(null,o.unit),this._freeTextureUnit(o),this._textures.delete(e)),null}let i=this._textures.get(e);return i==null?(i=this._allocTextureUnit(r),this._textures.set(e,i)):i.texture=r,this._context.useProgram(this),this.setUniform1i(e,i.unit),this._context.bindTexture(r,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,r)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(r,e.unit)}),f(this._fragmentUniforms)&&this._fragmentUniforms.forEach(e=>{e.type!=="sampler2D"&&e.type!=="samplerCube"||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}};Ee.LESS;Ee.ALWAYS;const Vs={mask:255},Bs={function:{func:Ee.ALWAYS,ref:Le.OutlineVisualElementMask,mask:Le.OutlineVisualElementMask},operation:{fail:se.KEEP,zFail:se.KEEP,zPass:se.ZERO}},Gs={function:{func:Ee.ALWAYS,ref:Le.OutlineVisualElementMask,mask:Le.OutlineVisualElementMask},operation:{fail:se.KEEP,zFail:se.KEEP,zPass:se.REPLACE}};Ee.EQUAL,Le.OutlineVisualElementMask,Le.OutlineVisualElementMask,se.KEEP,se.KEEP,se.KEEP;Ee.NOTEQUAL,Le.OutlineVisualElementMask,Le.OutlineVisualElementMask,se.KEEP,se.KEEP,se.KEEP;function pi(t){t.varyings.add("linearDepth","float")}function mo(t){t.vertex.uniforms.add(new de("nearFar",(e,r)=>r.camera.nearFar))}function fo(t){t.vertex.code.add(s`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function po(t,e){const{vertex:r}=t;switch(e.output){case y.Color:if(e.receiveShadows)return pi(t),void r.code.add(s`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case y.Depth:case y.Shadow:case y.ShadowHighlight:case y.ShadowExcludeHighlight:return t.include(uo,e),pi(t),mo(t),fo(t),void r.code.add(s`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(s`void forwardLinearDepth() {}`)}function vo(t){t.vertex.code.add(s`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Xe(t,e){Us(t,e,[new fe("slicePlaneOrigin",(r,i)=>Hs(e,r,i)),new fe("slicePlaneBasis1",(r,i)=>vi(e,r,i,wt(i.slicePlane)?.basis1)),new fe("slicePlaneBasis2",(r,i)=>vi(e,r,i,wt(i.slicePlane)?.basis2))])}function Us(t,e,r){if(!e.hasSlicePlane){const n=s`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return e.hasSliceInVertexProgram&&t.vertex.code.add(n),void t.fragment.code.add(n)}t.extensions.add("GL_OES_standard_derivatives"),e.hasSliceInVertexProgram&&t.vertex.uniforms.add(r),t.fragment.uniforms.add(r);const i=s`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,o=s`vec4 applySliceHighlight(vec4 color, vec3 pos) {
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
}`,a=e.hasSliceHighlight?s`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:s`#define highlightSlice(_color_, _pos_) (_color_)`;e.hasSliceInVertexProgram&&t.vertex.code.add(i),t.fragment.code.add(i),t.fragment.code.add(a)}function go(t,e,r){return t.instancedDoublePrecision?X(ks,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function xo(t,e){return f(t)?Ce(kt,e.origin,t):e.origin}function To(t,e,r){return t.hasSliceTranslatedView?f(e)?fr(Ws,r.camera.viewMatrix,e):r.camera.viewMatrix:null}function Hs(t,e,r){if(B(r.slicePlane))return Ar;const i=go(t,e,r),o=xo(i,r.slicePlane),a=To(t,i,r);return f(a)?ot(kt,o,a):o}function vi(t,e,r,i){if(B(i)||B(r.slicePlane))return Ar;const o=go(t,e,r),a=xo(o,r.slicePlane),n=To(t,o,r);return f(n)?(ce(gt,i,a),ot(kt,a,n),ot(gt,gt,n),Ce(gt,gt,kt)):i}const ks=D(),kt=D(),gt=D(),Ws=Cr();function _t(t,e){if(fo(t),e.hasModelTransformation)return t.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = calculateLinearDepth(nearFar, eye.z);
return proj * eye;
}`),void t.vertex.code.add(s`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);t.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),t.vertex.code.add(s`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}let js=class extends Z{constructor(e,r){super(e,"mat4",F.Draw,(i,o,a)=>i.setUniformMatrix4fv(e,r(o,a)))}};function At(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",Ar):t.uniforms.add(new fe("cameraPosition",(r,i)=>X(_o,i.camera.viewInverseTransposeMatrix[3]-r.origin[0],i.camera.viewInverseTransposeMatrix[7]-r.origin[1],i.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function bt(t,e){if(!e.instancedDoublePrecision)return void t.uniforms.add([new qe("proj",(i,o)=>o.camera.projectionMatrix),new js("view",(i,o)=>fr(gi,o.camera.viewMatrix,i.origin)),new fe("localOrigin",i=>i.origin)]);const r=i=>X(_o,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]);t.uniforms.add([new qe("proj",(i,o)=>o.camera.projectionMatrix),new qe("view",(i,o)=>fr(gi,o.camera.viewMatrix,r(o))),new Y("localOrigin",(i,o)=>r(o))])}const gi=la(),_o=D();function qs(t){t.uniforms.add(new qe("viewNormal",(e,r)=>r.camera.viewInverseTransposeMatrix))}let bo=class extends Jt{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,r={key:this.key};for(const i of e)r[i]=this[i];return r}};function T(t={}){return(e,r)=>{if(e._parameterNames=e._parameterNames??[],e._parameterNames.push(r),t.constValue!=null)Object.defineProperty(e,r,{get:()=>t.constValue});else{const i=e._parameterNames.length-1,o=t.count||2,a=Math.ceil(Math.log2(o)),n=e._parameterBits??[0];let l=0;for(;n[l]+a>16;)l++,l>=n.length&&n.push(0);e._parameterBits=n;const d=n[l],c=(1<<a)-1<<d;n[l]+=a,Object.defineProperty(e,r,{get(){return this[i]},set(u){if(this[i]!==u&&(this[i]=u,this._keyDirty=!0,this._parameterBits[l]=this._parameterBits[l]&~c|+u<<d&c,typeof u!="number"&&typeof u!="boolean"))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof u)}})}}}let Xs=class extends bo{constructor(){super(...arguments),this.instancedDoublePrecision=!1}};function So(t,e){e.instanced&&e.instancedDoublePrecision&&(t.attributes.add(h.MODELORIGINHI,"vec3"),t.attributes.add(h.MODELORIGINLO,"vec3"),t.attributes.add(h.MODEL,"mat3"),t.attributes.add(h.MODELNORMAL,"mat3"));const r=t.vertex;e.instancedDoublePrecision&&(r.include(lo,e),r.uniforms.add(new fe("viewOriginHi",(i,o)=>an(X(Nt,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]),Nt))),r.uniforms.add(new fe("viewOriginLo",(i,o)=>nn(X(Nt,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]),Nt)))),r.code.add(s`
    vec3 calculateVPos() {
      ${e.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),r.code.add(s`
    vec3 subtractOrigin(vec3 _pos) {
      ${e.instancedDoublePrecision?s`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),r.code.add(s`
    vec3 dpNormal(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),e.output===y.Normal&&(qs(r),r.code.add(s`
    vec3 dpNormalView(vec4 _normal) {
      ${e.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),e.hasVertexTangents&&r.code.add(s`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${e.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}x([T()],Xs.prototype,"instancedDoublePrecision",void 0);const Nt=D();function Ks(t){t.vertex.code.add(s`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${s.int(Se.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${s.int(Se.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${s.int(Se.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${s.int(Se.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}let wo=class extends Z{constructor(e,r){super(e,"int",F.Pass,(i,o,a)=>i.setUniform1i(e,r(o,a)))}};function yo(t,e){e.hasSymbolColors?(t.include(Ks),t.attributes.add(h.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float"),t.vertex.code.add(s`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(t.fragment.uniforms.add(new wo("colorMixMode",r=>bs[r.colorMixMode])),t.vertex.code.add(s`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function Ao(t,e){e.hasVertexColors?(t.attributes.add(h.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(s`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(s`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(s`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function Ys(t){t.vertex.code.add(s`float screenSizePerspectiveMinSize(float size, vec4 factor) {
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
}`),t.vertex.code.add(s`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(s`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),t.vertex.code.add(s`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),t.vertex.code.add(s`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(s`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),t.vertex.code.add(s`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function Zs(t){t.uniforms.add(new te("screenSizePerspectiveAlignment",e=>Js(e.screenSizePerspectiveAlignment||e.screenSizePerspective)))}function Js(t){return oe(Qs,t.parameters.divisor,t.parameters.offset,t.parameters.minPixelSize,t.paddingPixelsOverride)}const Qs=Yt();function Co(t,e){const r=t.vertex;e.hasVerticalOffset?(tl(r),e.hasScreenSizePerspective&&(t.include(Ys),Zs(r),At(t.vertex,e)),r.code.add(s`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?s`vec3 worldNormal = normalize(worldPos + localOrigin);`:s`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?s`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:s`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(s`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const el=Yt();function tl(t){t.uniforms.add(new te("verticalOffset",(e,r)=>{const{minWorldLength:i,maxWorldLength:o,screenLength:a}=e.verticalOffset,n=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),l=r.camera.pixelRatio||1;return oe(el,a*l,n,i,o)}))}function rl(t,e){const r=e.output===y.ObjectAndLayerIdColor,i=e.objectAndLayerIdColorInstanced;r&&(t.varyings.add("objectAndLayerIdColorVarying","vec4"),i?t.attributes.add(h.OBJECTANDLAYERIDCOLOR_INSTANCED,"vec4"):t.attributes.add(h.OBJECTANDLAYERIDCOLOR,"vec4")),t.vertex.code.add(s`
     void forwardObjectAndLayerIdColor() {
      ${r?i?s`objectAndLayerIdColorVarying = objectAndLayerIdColor_instanced * 0.003921568627451;`:s`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:s``} }`),t.fragment.code.add(s`
      void outputObjectAndLayerIdColor() {
        ${r?s`gl_FragColor = objectAndLayerIdColorVarying;`:s``} }`)}function Fr(t){t.code.add(s`const float MAX_RGBA_FLOAT =
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
}`)}function il(t,e){switch(t.fragment.include(Fr),e.output){case y.Shadow:case y.ShadowHighlight:case y.ShadowExcludeHighlight:t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(s`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case y.Depth:t.fragment.code.add(s`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}}const ol=Kt(1,1,0,1),al=Kt(1,0,1,1);function nl(t,e){t.fragment.uniforms.add(je("depthTex",(r,i)=>i.highlightDepthTexture,e.hasWebGL2Context?K.None:K.InvSize)),t.fragment.constants.add("occludedHighlightFlag","vec4",ol).add("unoccludedHighlightFlag","vec4",al),t.fragment.code.add(s`
    void outputHighlight() {
      vec3 fragCoord = gl_FragCoord.xyz;

      float sceneDepth = ${Mn(e,"depthTex","fragCoord.xy")}.x;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}let sl=class extends Z{constructor(e,r,i){super(e,"vec4",F.Pass,(o,a,n)=>o.setUniform4fv(e,r(a,n)),i)}},ll=class extends Z{constructor(e,r,i){super(e,"float",F.Pass,(o,a,n)=>o.setUniform1fv(e,r(a,n)),i)}};const cr=8;function St(t,e){e.hasVvInstancing&&(e.vvSize||e.vvColor)&&t.attributes.add(h.INSTANCEFEATUREATTRIBUTE,"vec4");const r=t.vertex;e.vvSize?(r.uniforms.add(new Y("vvSizeMinSize",i=>i.vvSizeMinSize)),r.uniforms.add(new Y("vvSizeMaxSize",i=>i.vvSizeMaxSize)),r.uniforms.add(new Y("vvSizeOffset",i=>i.vvSizeOffset)),r.uniforms.add(new Y("vvSizeFactor",i=>i.vvSizeFactor)),r.uniforms.add(new Ne("vvSymbolRotationMatrix",i=>i.vvSymbolRotationMatrix)),r.uniforms.add(new Y("vvSymbolAnchor",i=>i.vvSymbolAnchor)),r.code.add(s`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(s`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing?s`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(s`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(r.constants.add("vvColorNumber","int",cr),e.hasVvInstancing&&r.uniforms.add([new ll("vvColorValues",i=>i.vvColorValues,cr),new sl("vvColorColors",i=>i.vvColorColors,cr)]),r.code.add(s`
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

      ${e.hasVvInstancing?s`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):r.code.add(s`vec4 vvColor() { return vec4(1.0); }`)}function cl(t){t.fragment.code.add(s`
    #define discardOrAdjustAlpha(color) { if (color.a < ${s.float(Nr)}) { discard; } }
  `)}let ee=class extends Z{constructor(e,r){super(e,"float",F.Pass,(i,o,a)=>i.setUniform1f(e,r(o,a)))}};function Ke(t,e){dl(t,e,new ee("textureAlphaCutoff",r=>r.textureAlphaCutoff))}function dl(t,e,r){const i=t.fragment;switch(e.alphaDiscardMode!==q.Mask&&e.alphaDiscardMode!==q.MaskBlend||i.uniforms.add(r),e.alphaDiscardMode){case q.Blend:return t.include(cl);case q.Opaque:i.code.add(s`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case q.Mask:i.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case q.MaskBlend:t.fragment.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function Mo(t,e){const{vertex:r,fragment:i}=t,o=e.hasModelTransformation;o&&r.uniforms.add(new qe("model",n=>f(n.modelTransformation)?n.modelTransformation:Ut));const a=e.hasColorTexture&&e.alphaDiscardMode!==q.Opaque;switch(e.output){case y.Depth:case y.Shadow:case y.ShadowHighlight:case y.ShadowExcludeHighlight:case y.ObjectAndLayerIdColor:bt(r,e),t.include(_t,e),t.include(it,e),t.include(St,e),t.include(il,e),t.include(Xe,e),t.include(rl,e),mo(t),t.varyings.add("depth","float"),a&&i.uniforms.add(new ie("tex",n=>n.texture)),r.code.add(s`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${o?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),t.include(Ke,e),i.code.add(s`
          void main(void) {
            discardBySlice(vpos);
            ${a?s`
                    vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${e.output===y.ObjectAndLayerIdColor?s`outputObjectAndLayerIdColor();`:s`outputDepth(depth);`}
          }
        `);break;case y.Normal:bt(r,e),t.include(_t,e),t.include(er,e),t.include(ho,e),t.include(it,e),t.include(St,e),a&&i.uniforms.add(new ie("tex",n=>n.texture)),t.varyings.add("vPositionView","vec3"),r.code.add(s`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${e.normalType===G.Attribute?s`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${o?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),t.include(Xe,e),t.include(Ke,e),i.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${a?s`
                    vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${e.normalType===G.ScreenDerivative?s`
                vec3 normal = screenDerivativeNormal(vPositionView);`:s`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case y.Highlight:bt(r,e),t.include(_t,e),t.include(it,e),t.include(St,e),a&&i.uniforms.add(new ie("tex",n=>n.texture)),r.code.add(s`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${o?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),t.include(Xe,e),t.include(Ke,e),t.include(nl,e),i.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${a?s`
                    vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function ul(t,e){const r=t.fragment;if(e.hasVertexTangents?(t.attributes.add(h.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===re.WindingOrder?r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(t.extensions.add("GL_OES_standard_derivatives"),r.code.add(s`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`)),e.textureCoordinateType!==Q.None){t.include(Ji,e);const i=e.supportsTextureAtlas?e.hasWebGL2Context?K.None:K.Size:K.None;r.uniforms.add(e.pbrTextureBindType===F.Pass?je("normalTexture",o=>o.textureNormal,i):zt("normalTexture",o=>o.textureNormal,i)),r.code.add(s`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${e.supportsTextureAtlas?s`vtc.size = ${rt(e,"normalTexture")};`:""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}function zr(t){t.include(Fr),t.code.add(s`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}const dr=4;function hl(){const t=new Ot,e=t.fragment;t.include(Pr);const r=(dr+1)/2,i=1/(2*r*r);return e.include(zr),e.uniforms.add([new ie("depthMap",o=>o.depthTexture),new Qi("tex",o=>o.colorTexture),new Tr("blurSize",o=>o.blurSize),new ee("projScale",(o,a)=>{const n=ca(a.camera.eye,a.camera.center);return n>5e4?Math.max(0,o.projScale-(n-5e4)):o.projScale}),new de("nearFar",(o,a)=>a.camera.nearFar)]),e.code.add(s`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture2D(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.float(i)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.code.add(s`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${s.int(dr)}; r <= ${s.int(dr)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      gl_FragColor = vec4(b / w_total);
    }
  `),t}const ml=Object.freeze(Object.defineProperty({__proto__:null,build:hl},Symbol.toStringTag,{value:"Module"}));let fl=class Oo extends Ir{initializeProgram(e){return new Dr(e.rctx,Oo.shader.get().build(),$t)}initializePipeline(){return Mr({colorWrite:Or})}};fl.shader=new tr(ml,()=>Mt(()=>import("./SSAOBlur.glsl-828f7473.js"),["./SSAOBlur.glsl-828f7473.js","./main-e6c796d9.js","./preload-helper-388ac9d5.js","./main-dcc594cc.css","./OrderIndependentTransparency-e1b3a745.js","./enums-64ab819c.js","./basicInterfaces-b7051eb1.js","./VertexAttribute-15d1866a.js","./devEnvironmentUtils-f2a1f21e.js","./mat3f64-221ce671.js","./mat4f64-1413b4a7.js","./BufferView-2c604db3.js","./vec33-7ab520af.js","./DefaultMaterial_COLOR_GAMMA-0bbfe216.js","./types-e1c0a5bf.js","./quat-53c56f19.js","./quatf64-3363c48e.js","./resourceUtils-a8ed8f9e.js","./Indices-06406d60.js","./NestedMap-7c434b47.js","./requestImageUtils-53808439.js","./sphere-9c45614f.js","./lineSegment-f970d962.js","./Texture-67b84735.js","./VertexArrayObject-3edd1b52.js","./VertexElementDescriptor-2925c6af.js","./InterleavedLayout-8ff1819c.js","./vec3f32-ad1dc57f.js","./doublePrecisionUtils-e3c3d0d8.js","./symbolColorUtils-e50eb005.js"],import.meta.url));function pl(t){t.fragment.uniforms.add(new te("projInfo",(e,r)=>vl(r))),t.fragment.uniforms.add(new de("zScale",(e,r)=>$o(r))),t.fragment.code.add(s`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function vl(t){const e=t.camera.projectionMatrix;return e[11]===0?oe(xi,2/(t.camera.fullWidth*e[0]),2/(t.camera.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):oe(xi,-2/(t.camera.fullWidth*e[0]),-2/(t.camera.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const xi=Yt();function $o(t){return t.camera.projectionMatrix[11]===0?Pe(Ti,0,1):Pe(Ti,1,0)}const Ti=Xt(),_i=16;function gl(){const t=new Ot,e=t.fragment;return t.include(Pr),e.include(zr),t.include(pl),e.uniforms.add(new ee("radius",(r,i)=>Po(i.camera))),e.code.add(s`vec3 sphere[16];
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
}`),e.code.add(s`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add([new de("nearFar",(r,i)=>i.camera.nearFar),new ie("normalMap",r=>r.normalTexture),new ie("depthMap",r=>r.depthTexture),new de("zScale",(r,i)=>$o(i)),new ee("projScale",r=>r.projScale),new ie("rnm",r=>r.noiseTexture),new de("rnmScale",(r,i)=>Pe(bi,i.camera.fullWidth/wt(r.noiseTexture).descriptor.width,i.camera.fullHeight/wt(r.noiseTexture).descriptor.height)),new ee("intensity",r=>r.intensity),new de("screenSize",(r,i)=>Pe(bi,i.camera.fullWidth,i.camera.fullHeight))]),e.code.add(s`
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

      for(int i = 0; i < ${s.int(_i)}; ++i) {
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
      float A = max(1.0 - sum * intensity / float(${s.int(_i)}),0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      gl_FragColor = vec4(A);
    }
  `),t}function Po(t){return Math.max(10,20*t.computeRenderPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}const bi=Xt(),xl=Object.freeze(Object.defineProperty({__proto__:null,build:gl,getRadius:Po},Symbol.toStringTag,{value:"Module"}));class Vr extends Ir{initializeProgram(e){return new Dr(e.rctx,Vr.shader.get().build(),$t)}initializePipeline(){return Mr({colorWrite:Or})}}Vr.shader=new tr(xl,()=>Mt(()=>import("./SSAO.glsl-ba5c9262.js"),["./SSAO.glsl-ba5c9262.js","./main-e6c796d9.js","./preload-helper-388ac9d5.js","./main-dcc594cc.css","./OrderIndependentTransparency-e1b3a745.js","./enums-64ab819c.js","./basicInterfaces-b7051eb1.js","./VertexAttribute-15d1866a.js","./devEnvironmentUtils-f2a1f21e.js","./mat3f64-221ce671.js","./mat4f64-1413b4a7.js","./BufferView-2c604db3.js","./vec33-7ab520af.js","./DefaultMaterial_COLOR_GAMMA-0bbfe216.js","./types-e1c0a5bf.js","./quat-53c56f19.js","./quatf64-3363c48e.js","./resourceUtils-a8ed8f9e.js","./Indices-06406d60.js","./NestedMap-7c434b47.js","./requestImageUtils-53808439.js","./sphere-9c45614f.js","./lineSegment-f970d962.js","./Texture-67b84735.js","./VertexArrayObject-3edd1b52.js","./VertexElementDescriptor-2925c6af.js","./InterleavedLayout-8ff1819c.js","./vec3f32-ad1dc57f.js","./doublePrecisionUtils-e3c3d0d8.js","./symbolColorUtils-e50eb005.js"],import.meta.url));const Tl=2;function Br(t,e){const r=t.fragment;e.receiveAmbientOcclusion?(r.uniforms.add(je("ssaoTex",(i,o)=>o.ssaoHelper.colorTexture,e.hasWebGL2Context?K.None:K.InvSize)),r.constants.add("blurSizePixelsInverse","float",1/Tl),r.code.add(s`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${rt(e,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):r.code.add(s`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function _l(t,e){const r=t.fragment,i=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;i===0?(r.uniforms.add(new Y("lightingAmbientSH0",(o,a)=>X(Si,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===1?(r.uniforms.add([new te("lightingAmbientSH_R",(o,a)=>oe(_e,a.lighting.sh.r[0],a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3])),new te("lightingAmbientSH_G",(o,a)=>oe(_e,a.lighting.sh.g[0],a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3])),new te("lightingAmbientSH_B",(o,a)=>oe(_e,a.lighting.sh.b[0],a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3]))]),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):i===2&&(r.uniforms.add([new Y("lightingAmbientSH0",(o,a)=>X(Si,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0])),new te("lightingAmbientSH_R1",(o,a)=>oe(_e,a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3],a.lighting.sh.r[4])),new te("lightingAmbientSH_G1",(o,a)=>oe(_e,a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3],a.lighting.sh.g[4])),new te("lightingAmbientSH_B1",(o,a)=>oe(_e,a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3],a.lighting.sh.b[4])),new te("lightingAmbientSH_R2",(o,a)=>oe(_e,a.lighting.sh.r[5],a.lighting.sh.r[6],a.lighting.sh.r[7],a.lighting.sh.r[8])),new te("lightingAmbientSH_G2",(o,a)=>oe(_e,a.lighting.sh.g[5],a.lighting.sh.g[6],a.lighting.sh.g[7],a.lighting.sh.g[8])),new te("lightingAmbientSH_B2",(o,a)=>oe(_e,a.lighting.sh.b[5],a.lighting.sh.b[6],a.lighting.sh.b[7],a.lighting.sh.b[8]))]),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),e.pbrMode!==N.Normal&&e.pbrMode!==N.Schematic||r.code.add(s`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Si=D(),_e=Yt();function Gr(t){t.uniforms.add(new Y("mainLightDirection",(e,r)=>r.lighting.mainLight.direction))}function rr(t){t.uniforms.add(new Y("mainLightIntensity",(e,r)=>r.lighting.mainLight.intensity))}function bl(t,e){e.useLegacyTerrainShading?t.uniforms.add(new ee("lightingFixedFactor",(r,i)=>i.lighting.noonFactor*(1-i.lighting.globalFactor))):t.constants.add("lightingFixedFactor","float",0)}function wi(t,e){const r=t.fragment;Gr(r),rr(r),bl(r,e),r.code.add(s`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function Sl(t){const e=t.fragment.code;e.add(s`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(s`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(s`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Lo(t){t.vertex.code.add(s`const float PI = 3.141592653589793;`),t.fragment.code.add(s`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function Ur(t,e){const r=t.fragment.code;t.include(Lo),e.pbrMode!==N.Normal&&e.pbrMode!==N.Schematic&&e.pbrMode!==N.Terrain&&e.pbrMode!==N.TerrainWithWater||(r.add(s`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(s`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==N.Normal&&e.pbrMode!==N.Schematic||(t.include(Sl),r.add(s`struct PBRShadingInfo
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
};`),r.add(s`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(s`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(s`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}let wl=class extends Z{constructor(e,r){super(e,"bool",F.Pass,(i,o,a)=>i.setUniform1b(e,r(o,a)))}};const yl=.4;function Hr(t){t.constants.add("ambientBoostFactor","float",yl)}function kr(t){t.uniforms.add(new ee("lightingGlobalFactor",(e,r)=>r.lighting.globalFactor))}function Ro(t,e){const r=t.fragment;switch(t.include(Br,e),e.pbrMode!==N.Disabled&&t.include(Ur,e),t.include(_l,e),t.include(Lo),r.code.add(s`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===N.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Hr(r),kr(r),Gr(r),r.code.add(s`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical?s`normalize(vPosWorld)`:s`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),rr(r),r.code.add(s`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),e.pbrMode){case N.Disabled:case N.WaterOnIntegratedMesh:case N.Water:t.include(wi,e),r.code.add(s`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case N.Normal:case N.Schematic:r.code.add(s`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(s`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?r.uniforms.add(new wl("hasFillLights",(i,o)=>o.enableFillLights)):r.constants.add("hasFillLights","bool",!1),r.code.add(s`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add([new ee("lightingSpecularStrength",(i,o)=>o.lighting.mainLight.specularStrength),new ee("lightingEnvironmentStrength",(i,o)=>o.lighting.mainLight.environmentStrength)]),r.code.add(s`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(s`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode===N.Schematic?s`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:s`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case N.Terrain:case N.TerrainWithWater:t.include(wi,e),r.code.add(s`const float roughnessTerrain = 0.5;
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
}`);break;default:Ye(e.pbrMode);case N.COUNT:}}function Wt(t,e){e.hasMultipassTerrain&&(t.fragment.include(zr),t.fragment.uniforms.add(new ie("terrainDepthTexture",(r,i)=>i.multipassTerrain.linearDepthTexture)),t.fragment.uniforms.add(new de("nearFar",(r,i)=>i.camera.nearFar)),t.fragment.uniforms.add(new de("inverseViewport",(r,i)=>i.inverseViewport)),t.fragment.code.add(s`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${e.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}class Al extends Z{constructor(e,r,i){super(e,"mat4",F.Draw,(o,a,n)=>o.setUniformMatrix4fv(e,r(a,n)),i)}}let Cl=class extends Z{constructor(e,r,i){super(e,"mat4",F.Pass,(o,a,n)=>o.setUniformMatrix4fv(e,r(a,n)),i)}};function Eo(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new Cl("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),Io(t,e))}function No(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new Al("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),Io(t,e))}function Io(t,e){const r=t.fragment;r.include(Fr),r.uniforms.add([...je("shadowMapTex",(i,o)=>o.shadowMap.depthTexture,e.hasWebGL2Context?K.None:K.Size),new wo("numCascades",(i,o)=>o.shadowMap.numCascades),new te("cascadeDistances",(i,o)=>o.shadowMap.cascadeDistances)]),r.code.add(s`
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

      vec2 textureSize = ${rt(e,"shadowMapTex")};

      return filterShadow(uv, lvpos, textureSize.x, shadowMapTex);
    }
  `)}function Ml(t){t.vertex.uniforms.add(new Ne("colorTextureTransformMatrix",e=>f(e.colorTextureTransformMatrix)?e.colorTextureTransformMatrix:nt())),t.varyings.add("colorUV","vec2"),t.vertex.code.add(s`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Ol(t){t.vertex.uniforms.add(new Ne("normalTextureTransformMatrix",e=>f(e.normalTextureTransformMatrix)?e.normalTextureTransformMatrix:nt())),t.varyings.add("normalUV","vec2"),t.vertex.code.add(s`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function $l(t){t.vertex.uniforms.add(new Ne("emissiveTextureTransformMatrix",e=>f(e.emissiveTextureTransformMatrix)?e.emissiveTextureTransformMatrix:nt())),t.varyings.add("emissiveUV","vec2"),t.vertex.code.add(s`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Pl(t){t.vertex.uniforms.add(new Ne("occlusionTextureTransformMatrix",e=>f(e.occlusionTextureTransformMatrix)?e.occlusionTextureTransformMatrix:nt())),t.varyings.add("occlusionUV","vec2"),t.vertex.code.add(s`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Ll(t){t.vertex.uniforms.add(new Ne("metallicRoughnessTextureTransformMatrix",e=>f(e.metallicRoughnessTextureTransformMatrix)?e.metallicRoughnessTextureTransformMatrix:nt())),t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.code.add(s`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function Rl(t){t.code.add(s`vec4 premultiplyAlpha(vec4 v) {
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
}`)}function jt(t){t.include(Rl),t.code.add(s`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${s.int(Se.Multiply)}) {
        return allMixed;
      }
      if (mode == ${s.int(Se.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(Se.Replace)}) {
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

      if (mode == ${s.int(Se.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(Se.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function El(t){const e=new Ot,{vertex:r,fragment:i,varyings:o}=e;return bt(r,t),e.include(Er),o.add("vpos","vec3"),e.include(St,t),e.include(So,t),e.include(Co,t),t.hasColorTextureTransform&&e.include(Ml),t.output!==y.Color&&t.output!==y.Alpha||(t.hasNormalTextureTransform&&e.include(Ol),t.hasEmissionTextureTransform&&e.include($l),t.hasOcclusionTextureTransform&&e.include(Pl),t.hasMetallicRoughnessTextureTransform&&e.include(Ll),At(r,t),e.include(er,t),e.include(_t,t),t.normalType===G.Attribute&&t.offsetBackfaces&&e.include(vo),e.include(ul,t),e.include(ho,t),t.instancedColor&&e.attributes.add(h.INSTANCECOLOR,"vec4"),o.add("localvpos","vec3"),e.include(it,t),e.include(po,t),e.include(yo,t),e.include(Ao,t),r.uniforms.add(new te("externalColor",a=>a.externalColor)),o.add("vcolorExt","vec4"),t.hasMultipassTerrain&&o.add("depth","float"),t.hasModelTransformation&&r.uniforms.add(new qe("model",a=>f(a.modelTransformation)?a.modelTransformation:Ut)),r.code.add(s`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${s.float(Nr)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${t.normalType===G.Attribute?s`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${t.hasModelTransformation?"model,":""} vpos);
          ${t.normalType===G.Attribute&&t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${t.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${t.hasColorTextureTransform?s`forwardColorUV();`:""}
        ${t.hasNormalTextureTransform?s`forwardNormalUV();`:""}
        ${t.hasEmissionTextureTransform?s`forwardEmissiveUV();`:""}
        ${t.hasOcclusionTextureTransform?s`forwardOcclusionUV();`:""}
        ${t.hasMetallicRoughnessTextureTransform?s`forwardMetallicRoughnessUV();`:""}
      }
    `)),t.output===y.Alpha&&(e.include(Xe,t),e.include(Ke,t),e.include(Wt,t),i.uniforms.add([new ee("opacity",a=>a.opacity),new ee("layerOpacity",a=>a.layerOpacity)]),t.hasColorTexture&&i.uniforms.add(new ie("tex",a=>a.texture)),i.include(jt),i.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?s`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===y.Color&&(e.include(Xe,t),e.include(Ro,t),e.include(Br,t),e.include(Ke,t),e.include(t.instancedDoublePrecision?Eo:No,t),e.include(Wt,t),At(i,t),i.uniforms.add([r.uniforms.get("localOrigin"),new Y("ambient",a=>a.ambient),new Y("diffuse",a=>a.diffuse),new ee("opacity",a=>a.opacity),new ee("layerOpacity",a=>a.layerOpacity)]),t.hasColorTexture&&i.uniforms.add(new ie("tex",a=>a.texture)),e.include(eo,t),e.include(Ur,t),i.include(jt),e.include(rs,t),Hr(i),kr(i),rr(i),i.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${t.normalType===G.ScreenDerivative?s`
                vec3 normal = screenDerivativeNormal(localvpos);`:s`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode===N.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${t.receiveShadows?"readShadowMap(vpos, linearDepth)":t.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.hasNormalTexture?s`
                mat3 tangentSpace = ${t.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:s`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${t.spherical?s`normalize(posWorld);`:s`vec3(0.0, 0.0, 1.0);`}

        ${t.snowCover?s`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${t.pbrMode===N.Normal||t.pbrMode===N.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?s`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===at.Color?s`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),e.include(Mo,t),e}const Nl=Object.freeze(Object.defineProperty({__proto__:null,build:El},Symbol.toStringTag,{value:"Module"}));let Il=class extends Fs{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=$e(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=Re.Back,this.emissiveFactor=$e(0,0,0),this.instancedDoublePrecision=!1,this.normalType=G.Attribute,this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=$e(.2,.2,.2),this.diffuse=$e(.8,.8,.8),this.externalColor=Kt(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=D(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=Zt(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=Ct.Less,this.textureAlphaMode=q.Blend,this.textureAlphaCutoff=zs,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=_r.Occlude}};class Pt extends Ir{initializeConfiguration(e,r){r.hasWebGL2Context=e.rctx.type===Oi.WEBGL2,r.spherical=e.viewingMode===pr.Global,r.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,r.textureCoordinateType=r.hasColorTexture||r.hasMetallicRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture?Q.Default:Q.None,r.objectAndLayerIdColorInstanced=r.instanced}initializeProgram(e){return this._initializeProgram(e,Pt.shader)}_initializeProgram(e,r){return new Dr(e.rctx,r.get().build(this.configuration),$t)}_convertDepthTestFunction(e){return e===Ct.Lequal?Ee.LEQUAL:Ee.LESS}_makePipeline(e,r){const i=this.configuration,o=e===at.NONE,a=e===at.FrontFace;return Mr({blending:i.output!==y.Color&&i.output!==y.Alpha||!i.transparent?null:o?Fa:za(e),culling:Dl(i)?Va(i.cullFace):null,depthTest:{func:Ba(e,this._convertDepthTestFunction(i.customDepthTest))},depthWrite:(o||a)&&i.writeDepth?Ga:null,colorWrite:Or,stencilWrite:i.hasOccludees?Vs:null,stencilTest:i.hasOccludees?r?Gs:Bs:null,polygonOffset:o||a?null:Ua(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,r){return r?this._occludeePipelineState:super.getPipelineState(e,r)}}function Dl(t){return t.cullFace!==Re.None||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}Pt.shader=new tr(Nl,()=>Mt(()=>import("./DefaultMaterial.glsl-71921d8b.js"),["./DefaultMaterial.glsl-71921d8b.js","./mat4f64-1413b4a7.js","./mat3f64-221ce671.js","./vec3f32-ad1dc57f.js","./main-e6c796d9.js","./preload-helper-388ac9d5.js","./main-dcc594cc.css","./OrderIndependentTransparency-e1b3a745.js","./enums-64ab819c.js","./basicInterfaces-b7051eb1.js","./VertexAttribute-15d1866a.js","./symbolColorUtils-e50eb005.js","./VertexArrayObject-3edd1b52.js","./Texture-67b84735.js","./devEnvironmentUtils-f2a1f21e.js","./BufferView-2c604db3.js","./vec33-7ab520af.js","./DefaultMaterial_COLOR_GAMMA-0bbfe216.js","./types-e1c0a5bf.js","./quat-53c56f19.js","./quatf64-3363c48e.js","./resourceUtils-a8ed8f9e.js","./Indices-06406d60.js","./NestedMap-7c434b47.js","./requestImageUtils-53808439.js","./sphere-9c45614f.js","./lineSegment-f970d962.js","./VertexElementDescriptor-2925c6af.js","./InterleavedLayout-8ff1819c.js","./doublePrecisionUtils-e3c3d0d8.js"],import.meta.url));class Me extends bo{constructor(){super(...arguments),this.hasWebGL2Context=!1}}x([T({constValue:!0})],Me.prototype,"hasSliceHighlight",void 0),x([T({constValue:!1})],Me.prototype,"hasSliceInVertexProgram",void 0),x([T({constValue:!1})],Me.prototype,"instancedDoublePrecision",void 0),x([T({constValue:!1})],Me.prototype,"useLegacyTerrainShading",void 0),x([T({constValue:!1})],Me.prototype,"hasModelTransformation",void 0),x([T({constValue:F.Pass})],Me.prototype,"pbrTextureBindType",void 0),x([T()],Me.prototype,"hasWebGL2Context",void 0);class S extends Me{constructor(){super(...arguments),this.output=y.Color,this.alphaDiscardMode=q.Opaque,this.doubleSidedMode=re.None,this.pbrMode=N.Disabled,this.cullFace=Re.None,this.transparencyPassType=at.NONE,this.normalType=G.Attribute,this.textureCoordinateType=Q.None,this.customDepthTest=Ct.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}x([T({count:y.COUNT})],S.prototype,"output",void 0),x([T({count:q.COUNT})],S.prototype,"alphaDiscardMode",void 0),x([T({count:re.COUNT})],S.prototype,"doubleSidedMode",void 0),x([T({count:N.COUNT})],S.prototype,"pbrMode",void 0),x([T({count:Re.COUNT})],S.prototype,"cullFace",void 0),x([T({count:at.COUNT})],S.prototype,"transparencyPassType",void 0),x([T({count:G.COUNT})],S.prototype,"normalType",void 0),x([T({count:Q.COUNT})],S.prototype,"textureCoordinateType",void 0),x([T({count:Ct.COUNT})],S.prototype,"customDepthTest",void 0),x([T()],S.prototype,"spherical",void 0),x([T()],S.prototype,"hasVertexColors",void 0),x([T()],S.prototype,"hasSymbolColors",void 0),x([T()],S.prototype,"hasVerticalOffset",void 0),x([T()],S.prototype,"hasSlicePlane",void 0),x([T()],S.prototype,"hasSliceHighlight",void 0),x([T()],S.prototype,"hasColorTexture",void 0),x([T()],S.prototype,"hasMetallicRoughnessTexture",void 0),x([T()],S.prototype,"hasEmissionTexture",void 0),x([T()],S.prototype,"hasOcclusionTexture",void 0),x([T()],S.prototype,"hasNormalTexture",void 0),x([T()],S.prototype,"hasScreenSizePerspective",void 0),x([T()],S.prototype,"hasVertexTangents",void 0),x([T()],S.prototype,"hasOccludees",void 0),x([T()],S.prototype,"hasMultipassTerrain",void 0),x([T()],S.prototype,"hasModelTransformation",void 0),x([T()],S.prototype,"offsetBackfaces",void 0),x([T()],S.prototype,"vvSize",void 0),x([T()],S.prototype,"vvColor",void 0),x([T()],S.prototype,"receiveShadows",void 0),x([T()],S.prototype,"receiveAmbientOcclusion",void 0),x([T()],S.prototype,"textureAlphaPremultiplied",void 0),x([T()],S.prototype,"instanced",void 0),x([T()],S.prototype,"instancedColor",void 0),x([T()],S.prototype,"objectAndLayerIdColorInstanced",void 0),x([T()],S.prototype,"instancedDoublePrecision",void 0),x([T()],S.prototype,"doublePrecisionRequiresObfuscation",void 0),x([T()],S.prototype,"writeDepth",void 0),x([T()],S.prototype,"transparent",void 0),x([T()],S.prototype,"enableOffset",void 0),x([T()],S.prototype,"cullAboveGround",void 0),x([T()],S.prototype,"snowCover",void 0),x([T()],S.prototype,"hasColorTextureTransform",void 0),x([T()],S.prototype,"hasEmissionTextureTransform",void 0),x([T()],S.prototype,"hasNormalTextureTransform",void 0),x([T()],S.prototype,"hasOcclusionTextureTransform",void 0),x([T()],S.prototype,"hasMetallicRoughnessTextureTransform",void 0),x([T({constValue:!0})],S.prototype,"hasVvInstancing",void 0),x([T({constValue:!1})],S.prototype,"useCustomDTRExponentForWater",void 0),x([T({constValue:!1})],S.prototype,"supportsTextureAtlas",void 0),x([T({constValue:!0})],S.prototype,"useFillLights",void 0);function Fl(t){const e=new Ot,{vertex:r,fragment:i,varyings:o}=e;return bt(r,t),e.include(Er),o.add("vpos","vec3"),e.include(St,t),e.include(So,t),e.include(Co,t),t.output!==y.Color&&t.output!==y.Alpha||(At(e.vertex,t),e.include(er,t),e.include(_t,t),t.offsetBackfaces&&e.include(vo),t.instancedColor&&e.attributes.add(h.INSTANCECOLOR,"vec4"),o.add("vNormalWorld","vec3"),o.add("localvpos","vec3"),t.hasMultipassTerrain&&o.add("depth","float"),e.include(it,t),e.include(po,t),e.include(yo,t),e.include(Ao,t),r.uniforms.add(new te("externalColor",a=>a.externalColor)),o.add("vcolorExt","vec4"),r.code.add(s`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${s.float(Nr)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${t.hasMultipassTerrain?s`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),t.output===y.Alpha&&(e.include(Xe,t),e.include(Ke,t),e.include(Wt,t),i.uniforms.add([new ee("opacity",a=>a.opacity),new ee("layerOpacity",a=>a.layerOpacity)]),t.hasColorTexture&&i.uniforms.add(new ie("tex",a=>a.texture)),i.include(jt),i.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?s`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        ${t.hasVertexColors?s`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),t.output===y.Color&&(e.include(Xe,t),e.include(Ro,t),e.include(Br,t),e.include(Ke,t),e.include(t.instancedDoublePrecision?Eo:No,t),e.include(Wt,t),At(e.fragment,t),Gr(i),Hr(i),kr(i),i.uniforms.add([r.uniforms.get("localOrigin"),r.uniforms.get("view"),new Y("ambient",a=>a.ambient),new Y("diffuse",a=>a.diffuse),new ee("opacity",a=>a.opacity),new ee("layerOpacity",a=>a.layerOpacity)]),t.hasColorTexture&&i.uniforms.add(new ie("tex",a=>a.texture)),e.include(eo,t),e.include(Ur,t),i.include(jt),e.extensions.add("GL_OES_standard_derivatives"),rr(i),i.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?s`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${t.hasColorTexture?s`
                vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${t.pbrMode===N.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.snowCover?s`albedo = mix(albedo, vec3(1), 0.9);`:s``}
        ${s`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${t.pbrMode===N.Normal||t.pbrMode===N.Schematic?t.spherical?s`vec3 normalGround = normalize(vpos + localOrigin);`:s`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:s``}
        ${t.pbrMode===N.Normal||t.pbrMode===N.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?s`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===at.Color?s`gl_FragColor = premultiplyAlpha(gl_FragColor);`:s``}
      }
    `)),e.include(Mo,t),e}const zl=Object.freeze(Object.defineProperty({__proto__:null,build:Fl},Symbol.toStringTag,{value:"Module"}));class ir extends Pt{initializeConfiguration(e,r){super.initializeConfiguration(e,r),r.hasMetallicRoughnessTexture=!1,r.hasEmissionTexture=!1,r.hasOcclusionTexture=!1,r.hasNormalTexture=!1,r.hasModelTransformation=!1,r.normalType=G.Attribute,r.doubleSidedMode=re.WindingOrder,r.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,ir.shader)}}ir.shader=new tr(zl,()=>Mt(()=>import("./RealisticTree.glsl-471b1ad3.js"),["./RealisticTree.glsl-471b1ad3.js","./mat3f64-221ce671.js","./mat4f64-1413b4a7.js","./vec3f32-ad1dc57f.js","./main-e6c796d9.js","./preload-helper-388ac9d5.js","./main-dcc594cc.css","./OrderIndependentTransparency-e1b3a745.js","./enums-64ab819c.js","./basicInterfaces-b7051eb1.js","./VertexAttribute-15d1866a.js","./symbolColorUtils-e50eb005.js","./VertexArrayObject-3edd1b52.js","./Texture-67b84735.js","./devEnvironmentUtils-f2a1f21e.js","./BufferView-2c604db3.js","./vec33-7ab520af.js","./DefaultMaterial_COLOR_GAMMA-0bbfe216.js","./types-e1c0a5bf.js","./quat-53c56f19.js","./quatf64-3363c48e.js","./resourceUtils-a8ed8f9e.js","./Indices-06406d60.js","./NestedMap-7c434b47.js","./requestImageUtils-53808439.js","./sphere-9c45614f.js","./lineSegment-f970d962.js","./VertexElementDescriptor-2925c6af.js","./InterleavedLayout-8ff1819c.js","./doublePrecisionUtils-e3c3d0d8.js"],import.meta.url));let qt=class extends ws{constructor(e){super(e,Gl),this.supportsEdges=!0,this._configuration=new S,this._vertexBufferLayout=Ul(this.parameters)}isVisibleForOutput(e){return e!==y.Shadow&&e!==y.ShadowExcludeHighlight&&e!==y.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const{instanced:r,hasVertexColors:i,hasSymbolColors:o,vvColorEnabled:a}=e,n=f(r)&&r.includes("color"),l=e.colorMixMode==="replace",d=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0;return i&&(n||a||o)?!!l||d:i?l?c:d:n||a||o?!!l||d:l?c:d}getConfiguration(e,r){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=f(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=f(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,f(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?Re.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=r.multipassTerrain.enabled,this._configuration.cullAboveGround=r.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=f(this.parameters.modelTransformation),e!==y.Color&&e!==y.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=re.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?re.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?re.WindingOrder:re.None,this._configuration.instancedColor=f(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!r.ssaoHelper.active&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?N.Schematic:N.Normal:N.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=r.transparencyPassType,this._configuration.enableOffset=r.camera.relativeElevation<Ha,this._configuration.snowCover=this.hasSnowCover(r),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return f(e.weather)&&e.weatherVisible&&e.weather.type==="snowy"&&e.weather.snowCover==="enabled"}intersect(e,r,i,o,a,n){if(f(this.parameters.verticalOffset)){const l=i.camera;X(hr,r[12],r[13],r[14]);let d=null;switch(i.viewingMode){case pr.Global:d=yr(yi,hr);break;case pr.Local:d=da(yi,Wl)}let c=0;const u=Ce(jl,hr,l.eye),m=br(u),v=ve(u,u,1/m);let p=null;this.parameters.screenSizePerspective&&(p=ua(d,v)),c+=xs(l,m,this.parameters.verticalOffset,p??0,this.parameters.screenSizePerspective),ve(d,d,c),ha(ur,d,i.transform.inverseRotation),o=Ce(Hl,o,ur),a=Ce(kl,a,ur)}hs(e,i,o,a,Cs(i.verticalOffset),n)}requiresSlot(e,r){return r===y.Color||r===y.Alpha||r===y.Depth||r===y.Normal||r===y.Shadow||r===y.ShadowHighlight||r===y.ShadowExcludeHighlight||r===y.Highlight||r===y.ObjectAndLayerIdColor?e===(this.parameters.transparent?this.parameters.writeDepth?et.TRANSPARENT_MATERIAL:et.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:et.OPAQUE_MATERIAL)||e===et.DRAPED_MATERIAL:!1}createGLMaterial(e){return new Vl(e)}createBufferWriter(){return new Ns(this._vertexBufferLayout)}},Vl=class extends as{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==y.Color&&this._output!==y.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const r=this._material.parameters;this.updateTexture(r.textureId);const i=e.camera.viewInverseTransposeMatrix;return X(r.origin,i[3],i[7],i[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(r.treeRendering?ir:Pt,e)}},Bl=class extends Il{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}};const Gl=new Bl;function Ul(t){const e=Qa().vec3f(h.POSITION).vec3f(h.NORMAL),r=t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId;return t.hasVertexTangents&&e.vec4f(h.TANGENT),r&&e.vec2f(h.UV0),t.hasVertexColors&&e.vec4u8(h.COLOR),t.hasSymbolColors&&e.vec4u8(h.SYMBOLCOLOR),ma("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(h.OBJECTANDLAYERIDCOLOR),e}const Hl=D(),kl=D(),Wl=$e(0,0,1),yi=D(),ur=D(),hr=D(),jl=D(),be=Sr.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function ql(t,e){const r=await Xl(t,e),i=await Ql(r.textureDefinitions??{},e);let o=0;for(const a in i)if(i.hasOwnProperty(a)){const n=i[a];o+=n?.image?n.image.width*n.image.height*4:0}return{resource:r,textures:i,size:o+fa(r)}}async function Xl(t,e){const r=f(e)&&e.streamDataRequester;if(r)return Kl(t,r,e);const i=await Li(pa(t,wt(e)));if(i.ok===!0)return i.value.data;Ri(i.error),Do(i.error)}async function Kl(t,e,r){const i=await Li(e.request(t,"json",r));if(i.ok===!0)return i.value;Ri(i.error),Do(i.error.details.url)}function Do(t){throw new wr("",`Request for object resource failed: ${t}`)}function Yl(t){const e=t.params,r=e.topology;let i=!0;switch(e.vertexAttributes||(be.warn("Geometry must specify vertex attributes"),i=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const a=e.faces;if(a){if(e.vertexAttributes)for(const n in e.vertexAttributes){const l=a[n];l&&l.values?(l.valueType!=null&&l.valueType!=="UInt32"&&(be.warn(`Unsupported indexed geometry indices type '${l.valueType}', only UInt32 is currently supported`),i=!1),l.valuesPerElement!=null&&l.valuesPerElement!==1&&(be.warn(`Unsupported indexed geometry values per element '${l.valuesPerElement}', only 1 is currently supported`),i=!1)):(be.warn(`Indexed geometry does not specify face indices for '${n}' attribute`),i=!1)}}else be.warn("Indexed geometries must specify faces"),i=!1;break}default:be.warn(`Unsupported topology '${r}'`),i=!1}t.params.material||(be.warn("Geometry requires material"),i=!1);const o=t.params.vertexAttributes;for(const a in o)o[a].values||(be.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function Zl(t,e){const r=new Array,i=new Array,o=new Array,a=new Ea,n=t.resource,l=Ei.parse(n.version||"1.0","wosr");tc.validate(l);const d=n.model.name,c=n.model.geometries,u=n.materialDefinitions??{},m=t.textures;let v=0;const p=new Map;for(let g=0;g<c.length;g++){const _=c[g];if(!Yl(_))continue;const b=ec(_),w=_.params.vertexAttributes,z=[];for(const A in w){const O=w[A],V=O.values;z.push([A,new Je(V,O.valuesPerElement,!0)])}const E=[];if(_.params.topology!=="PerAttributeArray"){const A=_.params.faces;for(const O in A)E.push([O,A[O].values])}const C=b.texture,I=m&&m[C];if(I&&!p.has(C)){const{image:A,params:O}=I,V=new Zi(A,O);i.push(V),p.set(C,V)}const L=p.get(C),P=L?L.id:void 0,$=b.material;let R=a.get($,C);if(B(R)){const A=u[$.substring($.lastIndexOf("/")+1)].params;A.transparency===1&&(A.transparency=0);const O=I&&I.alphaChannelUsage,V=A.transparency>0||O==="transparency"||O==="maskAndTransparency",k=I?Fo(I.alphaChannelUsage):void 0,U={ambient:Jr(A.diffuse),diffuse:Jr(A.diffuse),opacity:1-(A.transparency||0),transparent:V,textureAlphaMode:k,textureAlphaCutoff:.33,textureId:P,initTextureTransparent:!0,doubleSided:!0,cullFace:Re.None,colorMixMode:A.externalColorMixMode||"tint",textureAlphaPremultiplied:!!I&&!!I.params.preMultiplyAlpha};f(e)&&e.materialParamsMixin&&Object.assign(U,e.materialParamsMixin),R=new qt(U),a.set($,C,R)}o.push(R);const M=new Bi(R,z,E);v+=E.position?E.position.length:0,r.push(M)}return{engineResources:[{name:d,stageResources:{textures:i,materials:o,geometries:r},pivotOffset:n.model.pivotOffset,numberOfVertices:v,lodThreshold:null}],referenceBoundingBox:Jl(r)}}function Jl(t){const e=Ni();return t.forEach(r=>{const i=r.boundingInfo;f(i)&&(Gt(e,i.bbMin),Gt(e,i.bbMax))}),e}async function Ql(t,e){const r=[];for(const a in t){const n=t[a],l=n.images[0].data;if(!l){be.warn("Externally referenced texture data is not yet supported");continue}const d=n.encoding+";base64,"+l,c="/textureDefinitions/"+a,u=n.channels==="rgba"?n.alphaChannelUsage||"transparency":"none",m={noUnpackFlip:!0,wrap:{s:Qe.REPEAT,t:Qe.REPEAT},preMultiplyAlpha:Fo(u)!==q.Opaque},v=f(e)&&e.disableTextures?Promise.resolve(null):Di(d,e);r.push(v.then(p=>({refId:c,image:p,params:m,alphaChannelUsage:u})))}const i=await Promise.all(r),o={};for(const a of i)o[a.refId]=a;return o}function Fo(t){switch(t){case"mask":return q.Mask;case"maskAndTransparency":return q.MaskBlend;case"none":return q.Opaque;default:return q.Blend}}function ec(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const tc=new Ei(1,2,"wosr");async function rc(t,e){const r=zo(Bo(t));if(r.fileType==="wosr"){const m=await(e.cache?e.cache.loadWOSR(r.url,e):ql(r.url,e)),{engineResources:v,referenceBoundingBox:p}=Zl(m,e);return{lods:v,referenceBoundingBox:p,isEsriSymbolResource:!1,isWosr:!0}}const i=await(e.cache?e.cache.loadGLTF(r.url,e,!!e.usePBR):ya(new Aa(e.streamDataRequester),r.url,e,e.usePBR)),o=va(i.model.meta,"ESRI_proxyEllipsoid"),a=i.meta.isEsriSymbolResource&&f(o)&&i.meta.uri.includes("/RealisticTrees/");a&&!i.customMeta.esriTreeRendering&&(i.customMeta.esriTreeRendering=!0,sc(i,o));const n=!!e.usePBR,l=i.meta.isEsriSymbolResource?{usePBR:n,isSchematic:!1,treeRendering:a,mrrFactors:[0,1,.2]}:{usePBR:n,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},d={...e.materialParamsMixin,treeRendering:a},{engineResources:c,referenceBoundingBox:u}=Vo(i,l,d,e.skipHighLods&&r.specifiedLodIndex==null?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:c,referenceBoundingBox:u,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1}}function zo(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function Vo(t,e,r,i){const o=t.model,a=new Array,n=new Map,l=new Map,d=o.lods.length,c=Ni();return o.lods.forEach((u,m)=>{const v=i.skipHighLods===!0&&(d>1&&m===0||d>3&&m===1)||i.skipHighLods===!1&&i.singleLodIndex!=null&&m!==i.singleLodIndex;if(v&&m!==0)return;const p=new ln(u.name,u.lodThreshold,[0,0,0]);u.parts.forEach(g=>{const _=v?new qt({}):ic(o,g,p,e,r,n,l),{geometry:b,vertexCount:w}=oc(g,f(_)?_:new qt({})),z=b.boundingInfo;f(z)&&m===0&&(Gt(c,z.bbMin),Gt(c,z.bbMax)),f(_)&&(p.stageResources.geometries.push(b),p.numberOfVertices+=w)}),v||a.push(p)}),{engineResources:a,referenceBoundingBox:c}}function ic(t,e,r,i,o,a,n){const l=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),d=t.materials.get(e.material),c=f(e.attributes.texCoord0),u=f(e.attributes.normal);if(B(d))return null;const m=ac(d.alphaMode);if(!a.has(l)){if(c){const C=(I,L=!1)=>{if(f(I)&&!n.has(I)){const P=t.textures.get(I);if(f(P)){const $=P.data;n.set(I,new Zi(ar($)?$.data:$,{...P.parameters,preMultiplyAlpha:!ar($)&&L,encoding:ar($)&&f($.encoding)?$.encoding:void 0}))}}};C(d.textureColor,m!==q.Opaque),C(d.textureNormal),C(d.textureOcclusion),C(d.textureEmissive),C(d.textureMetallicRoughness)}const p=d.color[0]**(1/Ze),g=d.color[1]**(1/Ze),_=d.color[2]**(1/Ze),b=d.emissiveFactor[0]**(1/Ze),w=d.emissiveFactor[1]**(1/Ze),z=d.emissiveFactor[2]**(1/Ze),E=f(d.textureColor)&&c?n.get(d.textureColor):null;a.set(l,new qt({...i,transparent:m===q.Blend,customDepthTest:Ct.Lequal,textureAlphaMode:m,textureAlphaCutoff:d.alphaCutoff,diffuse:[p,g,_],ambient:[p,g,_],opacity:d.opacity,doubleSided:d.doubleSided,doubleSidedType:"winding-order",cullFace:d.doubleSided?Re.None:Re.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normalType:u?G.Attribute:G.ScreenDerivative,castShadows:!0,receiveSSAO:!0,textureId:f(E)?E.id:void 0,colorMixMode:d.colorMixMode,normalTextureId:f(d.textureNormal)&&c?n.get(d.textureNormal).id:void 0,textureAlphaPremultiplied:f(E)&&!!E.params.preMultiplyAlpha,occlusionTextureId:f(d.textureOcclusion)&&c?n.get(d.textureOcclusion).id:void 0,emissiveTextureId:f(d.textureEmissive)&&c?n.get(d.textureEmissive).id:void 0,metallicRoughnessTextureId:f(d.textureMetallicRoughness)&&c?n.get(d.textureMetallicRoughness).id:void 0,emissiveFactor:[b,w,z],mrrFactors:[d.metallicFactor,d.roughnessFactor,i.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:ft(d.colorTextureTransform),normalTextureTransformMatrix:ft(d.normalTextureTransform),occlusionTextureTransformMatrix:ft(d.occlusionTextureTransform),emissiveTextureTransformMatrix:ft(d.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:ft(d.metallicRoughnessTextureTransform),...o}))}const v=a.get(l);if(r.stageResources.materials.push(v),c){const p=g=>{f(g)&&r.stageResources.textures.push(n.get(g))};p(d.textureColor),p(d.textureNormal),p(d.textureOcclusion),p(d.textureEmissive),p(d.textureMetallicRoughness)}return v}function oc(t,e){const r=t.attributes.position.count,i=nc(t.indices||r,t.primitiveType),o=He(tt,r);ba(o,t.attributes.position,t.transform);const a=[[h.POSITION,new Je(o.typedBuffer,o.elementCount,!0)]],n=[[h.POSITION,i]];if(f(t.attributes.normal)){const l=He(tt,r);Qr(It,t.transform),Sa(l,t.attributes.normal,It),a.push([h.NORMAL,new Je(l.typedBuffer,l.elementCount,!0)]),n.push([h.NORMAL,i])}if(f(t.attributes.tangent)){const l=He(Ht,r);Qr(It,t.transform),Ca(l,t.attributes.tangent,It),a.push([h.TANGENT,new Je(l.typedBuffer,l.elementCount,!0)]),n.push([h.TANGENT,i])}if(f(t.attributes.texCoord0)){const l=He(Ii,r);Ma(l,t.attributes.texCoord0),a.push([h.UV0,new Je(l.typedBuffer,l.elementCount,!0)]),n.push([h.UV0,i])}if(f(t.attributes.color)){const l=He(yt,r);if(t.attributes.color.elementCount===4)t.attributes.color instanceof Ht?ii(l,t.attributes.color,255):t.attributes.color instanceof yt?Oa(l,t.attributes.color):t.attributes.color instanceof Ta&&ii(l,t.attributes.color,1/256);else{$a(l,255,255,255,255);const d=new ti(l.buffer,0,4);t.attributes.color instanceof tt?ri(d,t.attributes.color,255):t.attributes.color instanceof ti?wa(d,t.attributes.color):t.attributes.color instanceof _a&&ri(d,t.attributes.color,1/256)}a.push([h.COLOR,new Je(l.typedBuffer,l.elementCount,!0)]),n.push([h.COLOR,i])}return{geometry:new Bi(e,a,n),vertexCount:r}}const It=Zt();function ac(t){switch(t){case"BLEND":return q.Blend;case"MASK":return q.Mask;case"OPAQUE":case null:case void 0:return q.Opaque}}function nc(t,e){switch(e){case xt.TRIANGLES:return Ra(t);case xt.TRIANGLE_STRIP:return La(t);case xt.TRIANGLE_FAN:return Pa(t)}}function sc(t,e){for(let r=0;r<t.model.lods.length;++r){const i=t.model.lods[r];for(const o of i.parts){const a=o.attributes.normal;if(B(a))return;const n=o.attributes.position,l=n.count,d=D(),c=D(),u=D(),m=He(yt,l),v=He(tt,l),p=ga(Cr(),o.transform);for(let g=0;g<l;g++){n.getVec(g,c),a.getVec(g,d),ot(c,c,o.transform),Ce(u,c,e.center),ei(u,u,e.radius);const _=u[2],b=br(u),w=Math.min(.45+.55*b*b,1);ei(u,u,e.radius),p!==null&&ot(u,u,p),yr(u,u),r+1!==t.model.lods.length&&t.model.lods.length>1&&mr(u,u,d,_>-1?.2:Math.min(-4*_-3.8,1)),v.setVec(g,u),m.set(g,0,255*w),m.set(g,1,255*w),m.set(g,2,255*w),m.set(g,3,255)}o.attributes.normal=v,o.attributes.color=m}}}const Ld=Object.freeze(Object.defineProperty({__proto__:null,fetch:rc,gltfToEngineResources:Vo,parseUrl:zo},Symbol.toStringTag,{value:"Module"}));export{Fl as I,El as Q,hl as c,gl as d,Ld as o,Po as p};
