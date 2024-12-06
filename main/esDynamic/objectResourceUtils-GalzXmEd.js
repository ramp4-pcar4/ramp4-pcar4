import{a as ti}from"./devEnvironmentUtils-Dc_oIuhN.js";import{c6 as Zr,rd as ri,re as oi,bJ as Kr,c7 as ai,kF as ii,bQ as Qr,aJ as De,dg as Ct,je as sr,aI as C,jd as ni,hO as eo,di as Se,hZ as ue,aF as lr,fo as U,dl as he,dk as me,rf as si,e0 as ye,f3 as li,D as cr,s as dt,cP as ci,ed as to,mb as di,gk as ut,n6 as ht,dm as ro,rg as ui,jT as hi,my as mi,fh as Ot,mA as fi,hN as mt,iz as Fe,eC as pi,oC as vi,aP as oo,rh as gi,bz as xi,e3 as ke,ri as _i,rj as Ti,dh as Rt,aH as It,h_ as $e,hY as Pt,rk as ao,rl as io,a8 as bi,cf as Nt,n2 as dr,O as m,ca as no,au as ae,hK as ur,j8 as hr,P as V,Q as mr,dH as so,rm as lo,S as co,T as Ei,fk as Be,fg as Lt,j9 as Si,b2 as Dt,hA as fr,aE as yi,cd as wi,ac as Ai,rn as Mi,iC as uo,a2 as Ci,a1 as ho,n4 as mo,ro as fo,jE as Ft,cb as po,cc as Oi,cl as Ri,oE as vo}from"./main-C0SGMMlt.js";import{t as pr,e as ft,o as Ye}from"./mat3f64-Dh9_zhFu.js";import{o as Bt,r as Ii,e as zt}from"./mat4f64-Dn1WEGBx.js";import{x as Gt,c as vr,y as Pi,u as Ni,q as Li,i as Vt,L as Di,O as Fi,E as Bi}from"./BufferView-BKII2hrY.js";import{e as zi,f as Gi,l as go,o as xo}from"./vec3-B4jdKDGI.js";import{n as Vi,s as _o}from"./vec4-CGRm2ptF.js";import{l as Ui,n as Hi,g as Xe,o as ji,h as Wi,t as qi,i as ki}from"./DefaultMaterial_COLOR_GAMMA-CYkSPNW0.js";import{r as gr}from"./resourceUtils--gCvInxk.js";import{t as $i}from"./NestedMap-CJlcHrNH.js";import{t as Yi,l as To}from"./Indices-BVG7H1gn.js";import{t as bo}from"./requestImageUtils-Bk_Ty09X.js";import{I as Xi,L as Ji,t as Je}from"./orientedBoundingBox-CR1urTEY.js";import{t as Zi,u as pt,a as xr,i as Ki,N as we,s as Y,O as Eo,e as Ae,n as vt}from"./basicInterfaces-Dnf5pTeQ.js";import{s as j}from"./Util-B2cjbS-S.js";import{s as So,_ as yo,V as Me}from"./sphere-DineCd-_.js";import{v as Qi}from"./lineSegment-CavEuvoJ.js";import"./plane-Cjp902tJ.js";import{e as f}from"./VertexAttribute-CAkzp1tV.js";import{c as ge,G as ze,L as Ze,D as Ge,R as Ce,O as fe,X as wo,E as en,I as ie,t as tn,_ as rn,f as on}from"./enums-DDkmfb-t.js";import{c as Ke,a as an,e as Ao,d as nn}from"./Texture-CAXTLpVt.js";import{H as sn}from"./InterleavedLayout-DzuDvVqS.js";import{n as xe,a as Z,t as Ut,o as z,b as _r,r as Tr}from"./NormalAttribute.glsl-B2w5d1Br.js";import{o as s,n as gt}from"./interfaces-Aq8q9x0N.js";import{l as Mo,S as br,_ as Er,h as ln,o as cn}from"./renderState-DjM_esgh.js";import{a as B}from"./BindType-9iOk18Ed.js";import{o as dn,r as un}from"./doublePrecisionUtils-BJbYwoii.js";function Ht(e,t=!1){return e<=Zr?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}function hn(e){e.vertex.code.add(s`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${s.int(xe.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${s.int(xe.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${s.int(xe.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${s.int(xe.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}let Q=class{constructor(e,t,r,o,a=null){if(this.name=e,this.type=t,this.arraySize=a,this.bind={[B.Pass]:null,[B.Draw]:null},o)switch(r){case B.Pass:this.bind[B.Pass]=o;break;case B.Draw:this.bind[B.Draw]=o}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},xt=class extends Q{constructor(e,t){super(e,"sampler2D",B.Draw,(r,o,a)=>r.bindTexture(e,t(o,a)))}};function Co({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(s`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):e.add(s`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}let ce=class extends Q{constructor(e,t){super(e,"vec3",B.Draw,(r,o,a,i)=>r.setUniform3fv(e,t(o,a,i)))}},X=class extends Q{constructor(e,t){super(e,"vec3",B.Pass,(r,o,a)=>r.setUniform3fv(e,t(o,a)))}},ne=class extends Q{constructor(e,t){super(e,"float",B.Pass,(r,o,a)=>r.setUniform1f(e,t(o,a)))}},Oo=class extends Q{constructor(e,t){super(e,"mat3",B.Draw,(r,o,a)=>r.setUniformMatrix3fv(e,t(o,a)))}},pe=class extends Q{constructor(e,t){super(e,"mat3",B.Pass,(r,o,a)=>r.setUniformMatrix3fv(e,t(o,a)))}},Qe=class extends Q{constructor(e,t){super(e,"mat4",B.Pass,(r,o,a)=>r.setUniformMatrix4fv(e,t(o,a)))}};function _t(e){if(e==null)return null;const t=e.offset!=null?e.offset:ri,r=e.rotation!=null?e.rotation:0,o=e.scale!=null?e.scale:oi,a=pr(1,0,0,0,1,0,t[0],t[1],1),i=pr(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),n=pr(o[0],0,0,0,o[1],0,0,0,1),c=ft();return Kr(c,i,n),Kr(c,a,c),c}let mn=class{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}},fn=class{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new mn,this.numberOfVertices=0}};function pn(e){if(e.length<Zr)return Array.from(e);if(ai(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return ii(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}let vn=class Ja{constructor(t,r,o){this.primitiveIndices=t,this._numIndexPerPrimitive=r,this.position=o,this._children=void 0,j(t.length>=1),j(o.size===3||o.size===4);const{data:a,size:i,indices:n}=o;j(n.length%this._numIndexPerPrimitive==0),j(n.length>=t.length*this._numIndexPerPrimitive);const c=t.length;let l=i*n[this._numIndexPerPrimitive*t[0]];Ve.clear(),Ve.push(l);const u=De(a[l],a[l+1],a[l+2]),d=Ct(u);for(let p=0;p<c;++p){const g=this._numIndexPerPrimitive*t[p];for(let E=0;E<this._numIndexPerPrimitive;++E){l=i*n[g+E],Ve.push(l);let _=a[l];u[0]=Math.min(_,u[0]),d[0]=Math.max(_,d[0]),_=a[l+1],u[1]=Math.min(_,u[1]),d[1]=Math.max(_,d[1]),_=a[l+2],u[2]=Math.min(_,u[2]),d[2]=Math.max(_,d[2])}}this.bbMin=u,this.bbMax=d;const h=sr(C(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(d[0]-u[0],d[1]-u[1]),d[2]-u[2]);let v=this.radius*this.radius;for(let p=0;p<Ve.length;++p){l=Ve.at(p);const g=a[l]-h[0],E=a[l+1]-h[1],_=a[l+2]-h[2],P=g*g+E*E+_*_;if(P<=v)continue;const M=Math.sqrt(P),R=.5*(M-this.radius);this.radius=this.radius+R,v=this.radius*this.radius;const F=R/M;h[0]+=g*F,h[1]+=E*F,h[2]+=_*F}this.center=h,Ve.clear()}getChildren(){if(this._children||ni(this.bbMin,this.bbMax)<=1)return this._children;const t=sr(C(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,o=new Uint8Array(r),a=new Array(8);for(let d=0;d<8;++d)a[d]=0;const{data:i,size:n,indices:c}=this.position;for(let d=0;d<r;++d){let h=0;const v=this._numIndexPerPrimitive*this.primitiveIndices[d];let p=n*c[v],g=i[p],E=i[p+1],_=i[p+2];for(let P=1;P<this._numIndexPerPrimitive;++P){p=n*c[v+P];const M=i[p],R=i[p+1],F=i[p+2];M<g&&(g=M),R<E&&(E=R),F<_&&(_=F)}g<t[0]&&(h|=1),E<t[1]&&(h|=2),_<t[2]&&(h|=4),o[d]=h,++a[h]}let l=0;for(let d=0;d<8;++d)a[d]>0&&++l;if(l<2)return;const u=new Array(8);for(let d=0;d<8;++d)u[d]=a[d]>0?new Uint32Array(a[d]):void 0;for(let d=0;d<8;++d)a[d]=0;for(let d=0;d<r;++d){const h=o[d];u[h][a[h]++]=this.primitiveIndices[d]}this._children=new Array;for(let d=0;d<8;++d)u[d]!==void 0&&this._children.push(new Ja(u[d],this._numIndexPerPrimitive,this.position));return this._children}static prune(){Ve.prune()}};const Ve=new Qr({deallocator:null});let Sr=class{constructor(){this.id=eo()}};var _e;(function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"})(_e||(_e={}));function gn(e){return e?{p0:Ct(e.p0),p1:Ct(e.p1),p2:Ct(e.p2)}:{p0:C(),p1:C(),p2:C()}}function xn(e,t,r){return Se(yr,t,e),Se(Ro,r,e),.5*ue(lr(yr,yr,Ro))}new So(Qi),new So(()=>gn());const yr=C(),Ro=C();function _n(e,t){if(!e)return!1;const{size:r,data:o,indices:a}=e;U(t,0,0,0),U(se,0,0,0);let i=0,n=0;for(let c=0;c<a.length-2;c+=3){const l=a[c]*r,u=a[c+1]*r,d=a[c+2]*r;U(J,o[l],o[l+1],o[l+2]),U(Te,o[u],o[u+1],o[u+2]),U(jt,o[d],o[d+1],o[d+2]);const h=xn(J,Te,jt);h?(he(J,J,Te),he(J,J,jt),me(J,J,1/3*h),he(t,t,J),i+=h):(he(se,se,J),he(se,se,Te),he(se,se,jt),n+=3)}return(n!==0||i!==0)&&(i!==0?(me(t,t,1/i),!0):n!==0&&(me(t,se,1/n),!0))}function Tn(e,t){if(!e)return!1;const{size:r,data:o,indices:a}=e;U(t,0,0,0);let i=-1,n=0;for(let c=0;c<a.length;c++){const l=a[c]*r;i!==l&&(t[0]+=o[l],t[1]+=o[l+1],t[2]+=o[l+2],n++),i=l}return n>1&&me(t,t,1/n),n>0}function bn(e,t,r){if(!e)return!1;U(r,0,0,0),U(se,0,0,0);let o=0,a=0;const{size:i,data:n,indices:c}=e,l=c.length-1,u=l+(t?2:0);for(let d=0;d<u;d+=2){const h=d<l?d+1:0,v=c[d<l?d:l]*i,p=c[h]*i;J[0]=n[v],J[1]=n[v+1],J[2]=n[v+2],Te[0]=n[p],Te[1]=n[p+1],Te[2]=n[p+2],me(J,he(J,J,Te),.5);const g=si(J,Te);g>0?(he(r,r,me(J,J,g)),o+=g):o===0&&(he(se,se,J),a++)}return o!==0?(me(r,r,1/o),!0):a!==0&&(me(r,se,1/a),!0)}const J=C(),Te=C(),jt=C(),se=C();let En=class{constructor(e){this.channel=e,this.id=eo()}};function Sn(e,t){return e==null&&(e=[]),e.push(t),e}function yn(e,t){if(e==null)return null;const r=e.filter(o=>o!==t);return r.length===0?null:r}let Io=class Za extends Sr{constructor(t,r,o=null,a=_e.Mesh,i=null,n=-1){super(),this.material=t,this.mapPositions=o,this.type=a,this.objectAndLayerIdColor=i,this.edgeIndicesLength=n,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[c,l]of r)this._attributes.set(c,{...l,indices:Yi(l.indices)}),c===f.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(c).indices.length:this.edgeIndicesLength)}instantiate(t={}){const r=new Za(t.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach((o,a)=>{o.exclusive=!1,r._attributes.set(a,o)}),r._boundingInfo=this._boundingInfo,r.transformation=t.transformation||this.transformation,r}get attributes(){return this._attributes}getMutableAttribute(t){let r=this._attributes.get(t);return r&&!r.exclusive&&(r={...r,exclusive:!0,data:pn(r.data)},this._attributes.set(t,r)),r}setAttributeData(t,r){const o=this._attributes.get(t);o&&this._attributes.set(t,{...o,exclusive:!0,data:r})}get indexCount(){return this._attributes.values().next().value.indices?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return this._boundingInfo==null&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return!!(this.type===_e.Mesh?this._computeAttachmentOriginTriangles(t):this.type===_e.Line?this._computeAttachmentOriginLines(t):this._computeAttachmentOriginPoints(t))&&(this._transformation!=null&&ye(t,t,this._transformation),!0)}_computeAttachmentOriginTriangles(t){const r=this.attributes.get(f.POSITION);return _n(r,t)}_computeAttachmentOriginLines(t){const r=this.attributes.get(f.POSITION);return bn(r,wn(this.material.parameters,r),t)}_computeAttachmentOriginPoints(t){const r=this.attributes.get(f.POSITION);return Tn(r,t)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const t=this.attributes.get(f.POSITION);if(!t||t.indices.length===0)return null;const r=this.type===_e.Mesh?3:1;j(t.indices.length%r==0,"Indexing error: "+t.indices.length+" not divisible by "+r);const o=To(t.indices.length/r);return new vn(o,r,t)}get transformation(){return this._transformation??Bt}set transformation(t){this._transformation=t&&t!==Bt?Ii(t):null}addHighlight(){const t=new En(Zi.Highlight);return this.highlights=Sn(this.highlights,t),t}removeHighlight(t){this.highlights=yn(this.highlights,t)}};function wn(e,t){return!(!("isClosed"in e)||!e.isClosed)&&t.indices.length>2}function An(){return Po??=(async()=>{const e=await import("./basis_transcoder-BQKD9Nty.js"),t=await e.default({locateFile:r=>li(`esri/libs/basisu/${r}`)});return t.initializeBasis(),t})(),Po}let Po;var Ue;(function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"})(Ue||(Ue={}));let de=null,Wt=null;async function No(){return Wt==null&&(Wt=An(),de=await Wt),Wt}function Mn(e,t){if(de==null)return e.byteLength;const r=new de.BasisFile(new Uint8Array(e)),o=Do(r)?Lo(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),o}function Cn(e,t){if(de==null)return e.byteLength;const r=new de.KTX2File(new Uint8Array(e)),o=Fo(r)?Lo(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),o}function Lo(e,t,r,o,a){const i=an(t?ge.COMPRESSED_RGBA8_ETC2_EAC:ge.COMPRESSED_RGB8_ETC2),n=a&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*o*i*n)}function Do(e){return e.getNumImages()>=1&&!e.isUASTC()}function Fo(e){return e.getFaces()>=1&&e.isETC1S()}async function On(e,t,r){de==null&&(de=await No());const o=new de.BasisFile(new Uint8Array(r));if(!Do(o))return null;o.startTranscoding();const a=Bo(e,t,o.getNumLevels(0),o.getHasAlpha(),o.getImageWidth(0,0),o.getImageHeight(0,0),(i,n)=>o.getImageTranscodedSizeInBytes(0,i,n),(i,n,c)=>o.transcodeImage(c,0,i,n,0,0));return o.close(),o.delete(),a}async function Rn(e,t,r){de==null&&(de=await No());const o=new de.KTX2File(new Uint8Array(r));if(!Fo(o))return null;o.startTranscoding();const a=Bo(e,t,o.getLevels(),o.getHasAlpha(),o.getWidth(),o.getHeight(),(i,n)=>o.getImageTranscodedSizeInBytes(i,0,0,n),(i,n,c)=>o.transcodeImage(c,i,0,0,n,0,-1,-1));return o.close(),o.delete(),a}function Bo(e,t,r,o,a,i,n,c){const{compressedTextureETC:l,compressedTextureS3TC:u}=e.capabilities,[d,h]=l?o?[Ue.ETC2_RGBA,ge.COMPRESSED_RGBA8_ETC2_EAC]:[Ue.ETC1_RGB,ge.COMPRESSED_RGB8_ETC2]:u?o?[Ue.BC3_RGBA,ge.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Ue.BC1_RGB,ge.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Ue.RGBA32,ze.RGBA],v=t.hasMipmap?r:Math.min(1,r),p=[];for(let g=0;g<v;g++)p.push(new Uint8Array(n(g,d))),c(g,d,p[g]);return t.internalFormat=h,t.hasMipmap=p.length>1,t.samplingMode=t.hasMipmap?Ze.LINEAR_MIPMAP_LINEAR:Ze.LINEAR,t.width=a,t.height=i,new Ke(e,t,{type:"compressed",levels:p})}const qt=()=>cr.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),In=542327876,Pn=131072,Nn=4;function wr(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function Ln(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const Dn=wr("DXT1"),Fn=wr("DXT3"),Bn=wr("DXT5"),zn=31,Gn=0,Vn=1,Un=2,Hn=3,jn=4,Wn=7,qn=20,kn=21;function $n(e,t,r){const o=Yn(r,t.hasMipmap??!1);if(o==null)throw new Error("DDS texture data is null");const{textureData:a,internalFormat:i,width:n,height:c}=o;return t.samplingMode=a.levels.length>1?Ze.LINEAR_MIPMAP_LINEAR:Ze.LINEAR,t.hasMipmap=a.levels.length>1,t.internalFormat=i,t.width=n,t.height=c,new Ke(e,t,a)}function Yn(e,t){const r=new Int32Array(e,0,zn);if(r[Gn]!==In)return qt().error("Invalid magic number in DDS header"),null;if(!(r[qn]&Nn))return qt().error("Unsupported format, must contain a FourCC code"),null;const o=r[kn];let a,i;switch(o){case Dn:a=8,i=ge.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Fn:a=16,i=ge.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Bn:a=16,i=ge.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return qt().error("Unsupported FourCC code:",Ln(o)),null}let n=1,c=r[jn],l=r[Hn];(3&c||3&l)&&(qt().warn("Rounding up compressed texture size to nearest multiple of 4."),c=c+3&-4,l=l+3&-4);const u=c,d=l;let h,v;r[Un]&Pn&&t!==!1&&(n=Math.max(1,r[Wn]));let p=r[Vn]+4;const g=[];for(let E=0;E<n;++E)v=(c+3>>2)*(l+3>>2)*a,h=new Uint8Array(e,p,v),g.push(h),p+=v,c=Math.max(1,c>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:g},internalFormat:i,width:u,height:d}}function Xn(e,t){let r=e.width*e.height;if(r<4096)return e instanceof ImageData?zo(e):e;let o=e.width,a=e.height;do o=Math.ceil(o/2),a=Math.ceil(a/2),r=o*a;while(r>1048576||t!=null&&(o>t||a>t));return Ar(e,o,a)}function Jn(e,t){const r=Math.max(e.width,e.height);if(r<=t)return e;const o=t/r;return Ar(e,Math.round(e.width*o),Math.round(e.height*o))}function Ar(e,t,r){if(e instanceof ImageData)return Ar(zo(e),t,r);const o=document.createElement("canvas");return o.width=t,o.height=r,o.getContext("2d").drawImage(e,0,0,o.width,o.height),o}function zo(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");if(r==null)throw new dt("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}let Go=class extends Sr{get parameters(){return this._parameters}constructor(e,t){super(),this._data=e,this.type=_e.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new ci,this._parameters={...Kn,...t},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){e!=null&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(to(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const r=()=>{e.removeEventListener("canplay",r),e.play()};e.addEventListener("canplay",r)}}}_startPreloadImageElement(e){di(e.src)||to(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const t=new Ao;return t.wrapMode=this._parameters.wrap??Ge.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?Ze.LINEAR_MIPMAP_LINEAR:Ze.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.usedMemory||Zn(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return t==null?(this._glTexture=new Ke(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),typeof t=="string"?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):(ut(t)||ht(t))&&this._parameters.encoding===pt.DDS_ENCODING?this._loadFromDDSData(e,t):(ut(t)||ht(t))&&this._parameters.encoding===pt.KTX2_ENCODING?this._loadFromKTX2(e,t):(ut(t)||ht(t))&&this._parameters.encoding===pt.BASIS_ENCODING?this._loadFromBasis(e,t):ht(t)?this._loadFromPixelData(e,t):ut(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return this._glTexture==null||e.readyState<Tt.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=$n(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync(()=>Rn(e,this._createDescriptor(e),t).then(r=>(this._glTexture=r,r)))}_loadFromBasis(e,t){return this._loadAsync(()=>On(e,this._createDescriptor(e),t).then(r=>(this._glTexture=r,r)))}_loadFromPixelData(e,t){j(this._parameters.width>0&&this._parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=this._parameters.components===1?ze.LUMINANCE:this._parameters.components===3?ze.RGB:ze.RGBA,r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new Ke(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync(async r=>{const o=await bo(t,{signal:r});return ro(r),this._loadFromImage(e,o)})}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync(async r=>{const o=await ui(t,t.src,!1,r);return ro(r),this._loadFromImage(e,o)})}_loadFromVideoElement(e,t){return t.readyState>=Tt.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync(r=>new Promise((o,a)=>{const i=()=>{t.removeEventListener("loadeddata",n),t.removeEventListener("error",c),fi(l)},n=()=>{t.readyState>=Tt.HAVE_CURRENT_DATA&&(i(),o(this._loadFromImage(e,t)))},c=u=>{i(),a(u||new dt("Failed to load video"))};t.addEventListener("loadeddata",n),t.addEventListener("error",c);const l=hi(r,()=>c(mi()))}))}_loadFromImage(e,t){let r=t;if(!(r instanceof HTMLVideoElement)){const{maxTextureSize:i}=e.parameters;r=this._parameters.downsampleUncompressed?Xn(r,i):Jn(r,i)}const o=Vo(r);this._parameters.width=o.width,this._parameters.height=o.height;const a=this._createDescriptor(e);return a.pixelFormat=this._parameters.components===3?ze.RGB:ze.RGBA,a.width=o.width,a.height=o.height,this._glTexture=new Ke(e,a,r),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const o=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(o,o),r}unload(){if(this._glTexture=Ot(this._glTexture),this._loadingController!=null){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}};function Zn(e,t){if(e==null)return 0;if(ut(e)||ht(e))return t.encoding===pt.KTX2_ENCODING?Cn(e,!!t.mipmap):t.encoding===pt.BASIS_ENCODING?Mn(e,!!t.mipmap):e.byteLength;const{width:r,height:o}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Vo(e):t;return(t.mipmap?4/3:1)*r*o*(t.components||4)||0}function Vo(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}var Tt;(function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(Tt||(Tt={}));const Kn={wrap:{s:Ge.REPEAT,t:Ge.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};function Qn(e,t){const r=e.fragment;switch(r.code.add(s`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case te.None:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case te.View:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case te.WindingOrder:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:mt(t.doubleSidedMode);case te.COUNT:}}var te;(function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"})(te||(te={}));var $;function He(e,t){switch(t.textureCoordinateType){case $.Default:return e.attributes.add(f.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case $.Compressed:return e.attributes.add(f.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(s`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case $.Atlas:return e.attributes.add(f.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(f.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:mt(t.textureCoordinateType);case $.None:return void e.vertex.code.add(s`void forwardTextureCoordinates() {}`);case $.COUNT:return}}(function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"})($||($={}));function es(e){e.fragment.code.add(s`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function Uo(e,t){switch(e.include(He,t),t.textureCoordinateType){case $.Default:case $.Compressed:return void e.fragment.code.add(s`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case $.Atlas:return e.include(es),void e.fragment.code.add(s`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:mt(t.textureCoordinateType);case $.None:case $.COUNT:return}}let ee=class extends Q{constructor(e,t){super(e,"sampler2D",B.Pass,(r,o,a)=>r.bindTexture(e,t(o,a)))}},ts=class{constructor(e){this._material=e.material,this._techniques=e.techniques,this._output=e.output}dispose(){this._techniques.release(this._technique)}get technique(){return this._technique}get _stippleTextures(){return this._techniques.constructionContext.stippleTextures}get _markerTextures(){return this._techniques.constructionContext.markerTextures}ensureTechnique(e,t){return this._technique=this._techniques.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(e){return xr.LOADED}},rs=class extends ts{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this._textureId=e.textureId,this._acquire(e.textureId,t=>this._texture=t),this._acquire(e.normalTextureId,t=>this._textureNormal=t),this._acquire(e.emissiveTextureId,t=>this._textureEmissive=t),this._acquire(e.occlusionTextureId,t=>this._textureOcclusion=t),this._acquire(e.metallicRoughnessTextureId,t=>this._textureMetallicRoughness=t)}dispose(){this._texture=Fe(this._texture),this._textureNormal=Fe(this._textureNormal),this._textureEmissive=Fe(this._textureEmissive),this._textureOcclusion=Fe(this._textureOcclusion),this._textureMetallicRoughness=Fe(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?xr.LOADED:xr.LOADING}get textureBindParameters(){return new os(this._texture!=null?this._texture.glTexture:null,this._textureNormal!=null?this._textureNormal.glTexture:null,this._textureEmissive!=null?this._textureEmissive.glTexture:null,this._textureOcclusion!=null?this._textureOcclusion.glTexture:null,this._textureMetallicRoughness!=null?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){this._texture!=null&&e===this._texture.id||(this._texture=Fe(this._texture),this._textureId=e,this._acquire(this._textureId,t=>this._texture=t))}_acquire(e,t){if(e==null)return void t(null);const r=this._textures.acquire(e);if(pi(r))return++this._numLoading,void r.then(o=>{if(this._disposed)return Fe(o),void t(null);t(o)}).finally(()=>--this._numLoading);t(r)}},os=class extends gt{constructor(e=null,t=null,r=null,o=null,a=null,i,n){super(),this.texture=e,this.textureNormal=t,this.textureEmissive=r,this.textureOcclusion=o,this.textureMetallicRoughness=a,this.scale=i,this.normalTextureTransformMatrix=n}};var I;(function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"})(I||(I={}));function Ho(e,t){const r=e.fragment,o=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===I.Normal&&o&&e.include(Uo,t),t.pbrMode!==I.Schematic)if(t.pbrMode!==I.Disabled){if(t.pbrMode===I.Normal){r.code.add(s`vec3 mrr;
vec3 emission;
float occlusion;`);const a=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(a===B.Pass?new ee("texMetallicRoughness",i=>i.textureMetallicRoughness):new xt("texMetallicRoughness",i=>i.textureMetallicRoughness)),r.code.add(s`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(a===B.Pass?new ee("texEmission",i=>i.textureEmissive):new xt("texEmission",i=>i.textureEmissive)),r.code.add(s`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(a===B.Pass?new ee("texOcclusion",i=>i.textureOcclusion):new xt("texOcclusion",i=>i.textureOcclusion)),r.code.add(s`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(s`float getBakedOcclusion() { return 1.0; }`),a===B.Pass?r.uniforms.add(new X("emissionFactor",i=>i.emissiveFactor),new X("mrrFactors",i=>i.mrrFactors)):r.uniforms.add(new ce("emissionFactor",i=>i.emissiveFactor),new ce("mrrFactors",i=>i.mrrFactors)),r.code.add(s`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?s`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?s`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?s`applyEmission(${t.hasEmissiveTextureTransform?s`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?s`applyOcclusion(${t.hasOcclusionTextureTransform?s`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(s`float getBakedOcclusion() { return 1.0; }`);else r.code.add(s`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}const kt=new Map([[f.POSITION,0],[f.NORMAL,1],[f.NORMALCOMPRESSED,1],[f.UV0,2],[f.COLOR,3],[f.COLORFEATUREATTRIBUTE,3],[f.SIZE,4],[f.TANGENT,4],[f.CENTEROFFSETANDDISTANCE,5],[f.SYMBOLCOLOR,5],[f.FEATUREATTRIBUTE,6],[f.INSTANCEFEATUREATTRIBUTE,6],[f.INSTANCECOLOR,7],[f.OBJECTANDLAYERIDCOLOR,7],[f.INSTANCEOBJECTANDLAYERIDCOLOR,7],[f.INSTANCEMODEL,8],[f.INSTANCEMODELNORMAL,12],[f.INSTANCEMODELORIGINHI,11],[f.INSTANCEMODELORIGINLO,15]]);function as(e){return Math.abs(e*e*e)}function is(e,t,r){const o=r.parameters;return Mr.scale=Math.min(o.divisor/(t-o.offset),1),Mr.factor=as(e),Mr}function ns(e,t){return vi(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}function ss(e,t,r,o){return ns(e,is(t,r,o))}const Mr={scale:0,factor:0,minScaleFactor:0};function ls(e,t,r,o,a){let i=(r.screenLength||0)*e.pixelRatio;a!=null&&(i=ss(i,o,t,a));const n=i*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return oo(n*t,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function jo(e,t){const r=t?jo(t):{};for(const o in e){let a=e[o];a?.forEach&&(a=ds(a)),a==null&&o in r||(r[o]=a)}return r}function cs(e,t){let r=!1;for(const o in t){const a=t[o];a!==void 0&&(Array.isArray(a)?e[o]===null?(e[o]=a.slice(),r=!0):gi(e[o],a)&&(r=!0):e[o]!==a&&(r=!0,e[o]=a))}return r}function ds(e){const t=[];return e.forEach(r=>t.push(r)),t}const us={multiply:1,ignore:2,replace:3,tint:4};let hs=class extends Sr{constructor(e,t){super(),this.type=_e.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=kt,this._pp0=De(0,0,1),this._pp1=De(0,0,0),this._parameters=jo(e,t),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){cs(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bindParameters.decorations===Ki.ON)&&!!(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(e){return this.isVisible()&&this.parameters.renderOccluded===e}intersectDraped(e,t,r,o,a,i){return this._pp0[0]=this._pp1[0]=o[0],this._pp0[1]=this._pp1[1]=o[1],this.intersect(e,t,r,this._pp0,this._pp1,a)}};var Cr;(function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"})(Cr||(Cr={}));var re;(function(e){e[e.ColorAlpha=0]="ColorAlpha",e[e.FrontFace=1]="FrontFace",e[e.NONE=2]="NONE",e[e.COUNT=3]="COUNT"})(re||(re={}));const ms=Mo(Ce.SRC_ALPHA,Ce.ONE,Ce.ONE_MINUS_SRC_ALPHA,Ce.ONE_MINUS_SRC_ALPHA),fs=Mo(Ce.ONE,Ce.ZERO,Ce.ONE,Ce.ONE_MINUS_SRC_ALPHA);function ps(e){return e===re.FrontFace?null:fs}const vs=5e5,gs={factor:-1,units:-2};function xs(e){return e?gs:null}function _s(e,t=fe.LESS){return e===re.NONE||e===re.FrontFace?t:fe.LEQUAL}function Ts(e){return e===re.ColorAlpha?{buffers:[wo.COLOR_ATTACHMENT0,wo.COLOR_ATTACHMENT1]}:null}let bs=class{constructor(e=!1,t=!0){this.isVerticalRay=e,this.normalRequired=t}};const $t=xi();function Es(e,t,r,o,a,i){if(!e.visible)return;const n=ke(Fs,o,r),c=(u,d,h)=>{i(u,h,d,!1)},l=new bs(!1,t.options.normalRequired);if(e.boundingInfo){j(e.type===_e.Mesh);const u=t.tolerance;Wo(e.boundingInfo,r,n,u,a,l,c)}else{const u=e.attributes.get(f.POSITION),d=u.indices;ws(r,n,0,d.length/3,d,u.data,u.stride,a,l,c)}}const Ss=C();function Wo(e,t,r,o,a,i,n){if(e==null)return;const c=Is(r,Ss);if(_i($t,e.bbMin),Ti($t,e.bbMax),a?.applyToAabb($t),Ps($t,t,c,o)){const{primitiveIndices:l,position:u}=e,d=l?l.length:u.indices.length/3;if(d>Ls){const h=e.getChildren();if(h!==void 0){for(const v of h)Wo(v,t,r,o,a,i,n);return}}ys(t,r,0,d,u.indices,u.data,u.stride,l,a,i,n)}}const bt=C();function ys(e,t,r,o,a,i,n,c,l,u,d){const h=e[0],v=e[1],p=e[2],g=t[0],E=t[1],_=t[2],{normalRequired:P}=u;for(let M=r;M<o;++M){const R=c[M],F=3*R,H=n*a[F];let D=i[H],S=i[H+1],A=i[H+2];const O=n*a[F+1];let w=i[O],x=i[O+1],N=i[O+2];const T=n*a[F+2];let L=i[T],G=i[T+1],k=i[T+2];l!=null&&([D,S,A]=l.applyToVertex(D,S,A,M),[w,x,N]=l.applyToVertex(w,x,N,M),[L,G,k]=l.applyToVertex(L,G,k,M));const K=w-D,Oe=x-S,Re=N-A,Ie=L-D,Pe=G-S,ve=k-A,Ne=E*ve-Pe*_,Le=_*Ie-ve*g,je=g*Pe-Ie*E,le=K*Ne+Oe*Le+Re*je;if(Math.abs(le)<=Ds)continue;const We=h-D,ir=v-S,nr=p-A,qe=We*Ne+ir*Le+nr*je;if(le>0){if(qe<0||qe>le)continue}else if(qe>0||qe<le)continue;const $r=ir*Re-Oe*nr,Yr=nr*K-Re*We,Xr=We*Oe-K*ir,Mt=g*$r+E*Yr+_*Xr;if(le>0){if(Mt<0||qe+Mt>le)continue}else if(Mt>0||qe+Mt<le)continue;const Jr=(Ie*$r+Pe*Yr+ve*Xr)/le;Jr>=0&&d(Jr,R,P?Os(K,Oe,Re,Ie,Pe,ve,bt):null)}}function ws(e,t,r,o,a,i,n,c,l,u){const d=t,h=Bs,v=Math.abs(d[0]),p=Math.abs(d[1]),g=Math.abs(d[2]),E=v>=p?v>=g?0:2:p>=g?1:2,_=E,P=d[_]<0?2:1,M=(E+P)%3,R=(E+(3-P))%3,F=d[M]/d[_],H=d[R]/d[_],D=1/d[_],S=As,A=Ms,O=Cs,{normalRequired:w}=l;for(let x=r;x<o;++x){const N=3*x,T=n*a[N];U(h[0],i[T+0],i[T+1],i[T+2]);const L=n*a[N+1];U(h[1],i[L+0],i[L+1],i[L+2]);const G=n*a[N+2];U(h[2],i[G+0],i[G+1],i[G+2]),c&&(Rt(h[0],c.applyToVertex(h[0][0],h[0][1],h[0][2],x)),Rt(h[1],c.applyToVertex(h[1][0],h[1][1],h[1][2],x)),Rt(h[2],c.applyToVertex(h[2][0],h[2][1],h[2][2],x))),ke(S,h[0],e),ke(A,h[1],e),ke(O,h[2],e);const k=S[M]-F*S[_],K=S[R]-H*S[_],Oe=A[M]-F*A[_],Re=A[R]-H*A[_],Ie=O[M]-F*O[_],Pe=O[R]-H*O[_],ve=Ie*Re-Pe*Oe,Ne=k*Pe-K*Ie,Le=Oe*K-Re*k;if((ve<0||Ne<0||Le<0)&&(ve>0||Ne>0||Le>0))continue;const je=ve+Ne+Le;if(je===0)continue;const le=ve*(D*S[_])+Ne*(D*A[_])+Le*(D*O[_]);if(le*Math.sign(je)<0)continue;const We=le/je;We>=0&&u(We,x,w?Rs(h):null)}}const As=C(),Ms=C(),Cs=C();function Os(e,t,r,o,a,i,n){return U(Yt,e,t,r),U(Xt,o,a,i),lr(n,Yt,Xt),It(n,n),n}function Rs(e){return ke(Yt,e[1],e[0]),ke(Xt,e[2],e[0]),lr(bt,Yt,Xt),It(bt,bt),bt}const Yt=C(),Xt=C();function Is(e,t){return U(t,1/e[0],1/e[1],1/e[2])}function Ps(e,t,r,o){return Ns(e,t,r,o,1/0)}function Ns(e,t,r,o,a){const i=(e[0]-o-t[0])*r[0],n=(e[3]+o-t[0])*r[0];let c=Math.min(i,n),l=Math.max(i,n);const u=(e[1]-o-t[1])*r[1],d=(e[4]+o-t[1])*r[1];if(l=Math.min(l,Math.max(u,d)),l<0||(c=Math.max(c,Math.min(u,d)),c>l))return!1;const h=(e[2]-o-t[2])*r[2],v=(e[5]+o-t[2])*r[2];return l=Math.min(l,Math.max(h,v)),!(l<0)&&(c=Math.max(c,Math.min(h,v)),!(c>l)&&c<a)}const Ls=1e3,Ds=1e-7,Fs=C(),Bs=[C(),C(),C()];var Et;(function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_NO_SSAO_DEPTH=3]="OPAQUE_NO_SSAO_DEPTH",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_NO_SSAO_DEPTH=5]="TRANSPARENT_NO_SSAO_DEPTH",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.OPAQUE_ENVIRONMENT=12]="OPAQUE_ENVIRONMENT",e[e.TRANSPARENT_ENVIRONMENT=13]="TRANSPARENT_ENVIRONMENT",e[e.LASERLINES=14]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=15]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=16]="HUD_MATERIAL",e[e.LABEL_MATERIAL=17]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=18]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=19]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=20]="DRAPED_MATERIAL",e[e.DRAPED_WATER=21]="DRAPED_WATER",e[e.VIEWSHED=22]="VIEWSHED",e[e.VOXEL=23]="VOXEL",e[e.MAX_SLOTS=24]="MAX_SLOTS"})(Et||(Et={}));let zs=class{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=C(),this._tmpMbs=yo(),this._tmpObb=new Xi,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=ue(e)}applyToVertex(e,t,r){const o=U(ko,e,t,r),a=U(Us,e,t,r+this.componentLocalOriginLength),i=this._totalOffset/ue(a);return $e(this._tmpVertex,o,a,i),this._tmpVertex}applyToAabb(e){const t=this.componentLocalOriginLength,r=e[0],o=e[1],a=e[2]+t,i=e[3],n=e[4],c=e[5]+t,l=Math.abs(r),u=Math.abs(o),d=Math.abs(a),h=Math.abs(i),v=Math.abs(n),p=Math.abs(c),g=.5*(1+Math.sign(r*i))*Math.min(l,h),E=.5*(1+Math.sign(o*n))*Math.min(u,v),_=.5*(1+Math.sign(a*c))*Math.min(d,p),P=Math.max(l,h),M=Math.max(u,v),R=Math.max(d,p),F=Math.sqrt(g*g+E*E+_*_),H=Math.sign(l+r),D=Math.sign(u+o),S=Math.sign(d+a),A=Math.sign(h+i),O=Math.sign(v+n),w=Math.sign(p+c),x=this._totalOffset;if(F<x)return e[0]-=(1-H)*x,e[1]-=(1-D)*x,e[2]-=(1-S)*x,e[3]+=A*x,e[4]+=O*x,e[5]+=w*x,e;const N=x/Math.sqrt(P*P+M*M+R*R),T=x/F,L=T-N,G=-L;return e[0]+=r*(H*G+T),e[1]+=o*(D*G+T),e[2]+=a*(S*G+T),e[3]+=i*(A*L+N),e[4]+=n*(O*L+N),e[5]+=c*(w*L+N),e}applyToMbs(e){const t=ue(Me(e)),r=this._totalOffset/t;return $e(Me(this._tmpMbs),Me(e),Me(e),r),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/t,this._tmpMbs}applyToObb(e){return Ji(e,this._totalOffset,this._totalOffset,Pt.Global,this._tmpObb),this._tmpObb}},Gs=class{constructor(e=0){this.offset=e,this.sphere=yo(),this.tmpVertex=C()}applyToVertex(e,t,r){const o=this.objectTransform.transform,a=U(ko,e,t,r),i=ye(a,a,o),n=this.offset/ue(i);$e(i,i,i,n);const c=this.objectTransform.inverse;return ye(this.tmpVertex,i,c),this.tmpVertex}applyToMinMax(e,t){const r=this.offset/ue(e);$e(e,e,e,r);const o=this.offset/ue(t);$e(t,t,t,o)}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=ue(Me(e)),r=this.offset/t;return $e(Me(this.sphere),Me(e),Me(e),r),this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};const qo=new Gs;function Vs(e){return e!=null?(qo.offset=e,qo):null}new zs;const ko=C(),Us=C();function $o(e,t,r){const{data:o,indices:a}=e,i=t.typedBuffer,n=t.typedBufferStride,c=a.length;r*=n;for(let l=0;l<c;++l){const u=2*a[l];i[r]=o[u],i[r+1]=o[u+1],r+=n}}function Yo(e,t,r,o){const{data:a,indices:i}=e,n=t.typedBuffer,c=t.typedBufferStride,l=i.length;if(r*=c,o==null||o===1)for(let u=0;u<l;++u){const d=3*i[u];n[r]=a[d],n[r+1]=a[d+1],n[r+2]=a[d+2],r+=c}else for(let u=0;u<l;++u){const d=3*i[u];for(let h=0;h<o;++h)n[r]=a[d],n[r+1]=a[d+1],n[r+2]=a[d+2],r+=c}}function Xo(e,t,r,o=1){const{data:a,indices:i}=e,n=t.typedBuffer,c=t.typedBufferStride,l=i.length;if(r*=c,o===1)for(let u=0;u<l;++u){const d=4*i[u];n[r]=a[d],n[r+1]=a[d+1],n[r+2]=a[d+2],n[r+3]=a[d+3],r+=c}else for(let u=0;u<l;++u){const d=4*i[u];for(let h=0;h<o;++h)n[r]=a[d],n[r+1]=a[d+1],n[r+2]=a[d+2],n[r+3]=a[d+3],r+=c}}function Hs(e,t,r,o,a=1){if(!t)return void Yo(e,r,o,a);const{data:i,indices:n}=e,c=r.typedBuffer,l=r.typedBufferStride,u=n.length,d=t[0],h=t[1],v=t[2],p=t[4],g=t[5],E=t[6],_=t[8],P=t[9],M=t[10],R=t[12],F=t[13],H=t[14];o*=l;let D=0,S=0,A=0;const O=ao(t)?w=>{D=i[w]+R,S=i[w+1]+F,A=i[w+2]+H}:w=>{const x=i[w],N=i[w+1],T=i[w+2];D=d*x+p*N+_*T+R,S=h*x+g*N+P*T+F,A=v*x+E*N+M*T+H};if(a===1)for(let w=0;w<u;++w)O(3*n[w]),c[o]=D,c[o+1]=S,c[o+2]=A,o+=l;else for(let w=0;w<u;++w){O(3*n[w]);for(let x=0;x<a;++x)c[o]=D,c[o+1]=S,c[o+2]=A,o+=l}}function js(e,t,r,o,a=1){if(!t)return void Yo(e,r,o,a);const{data:i,indices:n}=e,c=t,l=r.typedBuffer,u=r.typedBufferStride,d=n.length,h=c[0],v=c[1],p=c[2],g=c[4],E=c[5],_=c[6],P=c[8],M=c[9],R=c[10],F=!io(c),H=1e-6,D=1-H;o*=u;let S=0,A=0,O=0;const w=ao(c)?x=>{S=i[x],A=i[x+1],O=i[x+2]}:x=>{const N=i[x],T=i[x+1],L=i[x+2];S=h*N+g*T+P*L,A=v*N+E*T+M*L,O=p*N+_*T+R*L};if(a===1)if(F)for(let x=0;x<d;++x){w(3*n[x]);const N=S*S+A*A+O*O;if(N<D&&N>H){const T=1/Math.sqrt(N);l[o]=S*T,l[o+1]=A*T,l[o+2]=O*T}else l[o]=S,l[o+1]=A,l[o+2]=O;o+=u}else for(let x=0;x<d;++x)w(3*n[x]),l[o]=S,l[o+1]=A,l[o+2]=O,o+=u;else for(let x=0;x<d;++x){if(w(3*n[x]),F){const N=S*S+A*A+O*O;if(N<D&&N>H){const T=1/Math.sqrt(N);S*=T,A*=T,O*=T}}for(let N=0;N<a;++N)l[o]=S,l[o+1]=A,l[o+2]=O,o+=u}}function Ws(e,t,r,o,a=1){if(!t)return void Xo(e,r,o,a);const{data:i,indices:n}=e,c=t,l=r.typedBuffer,u=r.typedBufferStride,d=n.length,h=c[0],v=c[1],p=c[2],g=c[4],E=c[5],_=c[6],P=c[8],M=c[9],R=c[10],F=!io(c),H=1e-6,D=1-H;if(o*=u,a===1)for(let S=0;S<d;++S){const A=4*n[S],O=i[A],w=i[A+1],x=i[A+2],N=i[A+3];let T=h*O+g*w+P*x,L=v*O+E*w+M*x,G=p*O+_*w+R*x;if(F){const k=T*T+L*L+G*G;if(k<D&&k>H){const K=1/Math.sqrt(k);T*=K,L*=K,G*=K}}l[o]=T,l[o+1]=L,l[o+2]=G,l[o+3]=N,o+=u}else for(let S=0;S<d;++S){const A=4*n[S],O=i[A],w=i[A+1],x=i[A+2],N=i[A+3];let T=h*O+g*w+P*x,L=v*O+E*w+M*x,G=p*O+_*w+R*x;if(F){const k=T*T+L*L+G*G;if(k<D&&k>H){const K=1/Math.sqrt(k);T*=K,L*=K,G*=K}}for(let k=0;k<a;++k)l[o]=T,l[o+1]=L,l[o+2]=G,l[o+3]=N,o+=u}}function qs(e,t,r,o,a=1){const{data:i,indices:n}=e,c=r.typedBuffer,l=r.typedBufferStride,u=n.length;if(o*=l,t!==i.length||t!==4)if(a!==1)if(t!==4)for(let d=0;d<u;++d){const h=3*n[d];for(let v=0;v<a;++v)c[o]=i[h],c[o+1]=i[h+1],c[o+2]=i[h+2],c[o+3]=255,o+=l}else for(let d=0;d<u;++d){const h=4*n[d];for(let v=0;v<a;++v)c[o]=i[h],c[o+1]=i[h+1],c[o+2]=i[h+2],c[o+3]=i[h+3],o+=l}else{if(t===4){for(let d=0;d<u;++d){const h=4*n[d];c[o]=i[h],c[o+1]=i[h+1],c[o+2]=i[h+2],c[o+3]=i[h+3],o+=l}return}for(let d=0;d<u;++d){const h=3*n[d];c[o]=i[h],c[o+1]=i[h+1],c[o+2]=i[h+2],c[o+3]=255,o+=l}}else{c[o]=i[0],c[o+1]=i[1],c[o+2]=i[2],c[o+3]=i[3];const d=new Uint32Array(r.typedBuffer.buffer,r.start),h=l/4,v=d[o/=4];o+=h;const p=u*a;for(let g=1;g<p;++g)d[o]=v,o+=h}}function ks(e,t,r){const{data:o,indices:a}=e,i=t.typedBuffer,n=t.typedBufferStride,c=a.length,l=o[0];r*=n;for(let u=0;u<c;++u)i[r]=l,r+=n}function $s(e,t,r,o,a=1){const i=t.typedBuffer,n=t.typedBufferStride;if(o*=n,a===1)for(let c=0;c<r;++c)i[o]=e[0],i[o+1]=e[1],i[o+2]=e[2],i[o+3]=e[3],o+=n;else for(let c=0;c<r;++c)for(let l=0;l<a;++l)i[o]=e[0],i[o+1]=e[1],i[o+2]=e[2],i[o+3]=e[3],o+=n}function Ys(e,t,r,o,a,i){for(const n of t.fields.keys()){const c=e.attributes.get(n),l=c?.indices;if(c&&l)Xs(n,c,r,o,a,i);else if(n===f.OBJECTANDLAYERIDCOLOR&&e.objectAndLayerIdColor!=null){const u=e.attributes.get(f.POSITION)?.indices;if(u){const d=u.length,h=a.getField(n,Gt);$s(e.objectAndLayerIdColor,h,d,i)}}}}function Xs(e,t,r,o,a,i){switch(e){case f.POSITION:{j(t.size===3);const n=a.getField(e,Vt);j(!!n,`No buffer view for ${e}`),n&&Hs(t,r,n,i);break}case f.NORMAL:{j(t.size===3);const n=a.getField(e,Vt);j(!!n,`No buffer view for ${e}`),n&&js(t,o,n,i);break}case f.NORMALCOMPRESSED:{j(t.size===2);const n=a.getField(e,Li);j(!!n,`No buffer view for ${e}`),n&&$o(t,n,i);break}case f.UV0:{j(t.size===2);const n=a.getField(e,Ni);j(!!n,`No buffer view for ${e}`),n&&$o(t,n,i);break}case f.COLOR:case f.SYMBOLCOLOR:{const n=a.getField(e,Gt);j(!!n,`No buffer view for ${e}`),j(t.size===3||t.size===4),!n||t.size!==3&&t.size!==4||qs(t,t.size,n,i);break}case f.COLORFEATUREATTRIBUTE:{const n=a.getField(e,Pi);j(!!n,`No buffer view for ${e}`),j(t.size===1),n&&t.size===1&&ks(t,n,i);break}case f.TANGENT:{j(t.size===4);const n=a.getField(e,vr);j(!!n,`No buffer view for ${e}`),n&&Ws(t,r,n,i);break}case f.PROFILERIGHT:case f.PROFILEUP:case f.PROFILEVERTEXANDNORMAL:case f.FEATUREVALUE:{j(t.size===4);const n=a.getField(e,vr);j(!!n,`No buffer view for ${e}`),n&&Xo(t,n,i)}}}let Js=class{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.attributes.get(f.POSITION).indices.length}write(e,t,r,o,a){Ys(r,this.vertexBufferLayout,e,t,o,a)}};function Or(e){e.attributes.add(f.POSITION,"vec3"),e.vertex.code.add(s`vec3 positionModel() { return position; }`)}function Jo(e,t){e.include(Or);const r=e.vertex;r.include(Co,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new X("transformWorldFromViewTH",o=>o.transformWorldFromViewTH),new X("transformWorldFromViewTL",o=>o.transformWorldFromViewTL),new pe("transformViewFromCameraRelativeRS",o=>o.transformViewFromCameraRelativeRS),new Qe("transformProjFromView",o=>o.transformProjFromView),new Oo("transformWorldFromModelRS",o=>o.transformWorldFromModelRS),new ce("transformWorldFromModelTH",o=>o.transformWorldFromModelTH),new ce("transformWorldFromModelTL",o=>o.transformWorldFromModelTL)),r.code.add(s`vec3 positionWorldCameraRelative() {
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
        vPositionWorldCameraRelative += fOffset * ${t.spherical?s`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:s`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new X("transformWorldFromViewTL",o=>o.transformWorldFromViewTL)),r.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class Zs extends gt{constructor(){super(...arguments),this.transformWorldFromViewTH=C(),this.transformWorldFromViewTL=C(),this.transformViewFromCameraRelativeRS=ft(),this.transformProjFromView=zt()}}function Zo(e,t){switch(t.normalType){case Z.Attribute:case Z.Compressed:e.include(Ut,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new Oo("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new pe("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)),e.vertex.code.add(s`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case Z.Ground:e.include(Jo,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(s`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?s`normalize(vPositionWorldCameraRelative);`:s`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case Z.ScreenDerivative:e.vertex.code.add(s`void forwardNormal() {}`);break;default:mt(t.normalType);case Z.COUNT:}}let Ks=class extends Zs{constructor(){super(...arguments),this.transformNormalViewFromGlobal=ft()}};const Qs=.1,Rr=.001;let Jt=class{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}},Ir=class{constructor(e,t,r){this.release=r,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}destroy(){this._program=Ot(this._program),this._pipeline=this._configuration=null}reload(e){Ot(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return en.TRIANGLES}getPipeline(e,t,r){return this._pipeline}initializeConfiguration(e,t){}},Pr=class{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new Qr({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBindPass(this),this.bindDraw=t.generateBindDraw(this),this._fragmentUniforms=nn()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(t?.glName==null){const o=this._textures.get(e);return o&&(this._context.bindTexture(null,o.unit),this._freeTextureUnit(o),this._textures.delete(e)),null}let r=this._textures.get(e);return r==null?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)}),this._fragmentUniforms?.forEach(e=>{e.type!=="sampler2D"&&e.type!=="samplerCube"||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}};fe.LESS,fe.ALWAYS;const el={mask:255},tl={function:{func:fe.ALWAYS,ref:we.OutlineVisualElementMask,mask:we.OutlineVisualElementMask},operation:{fail:ie.KEEP,zFail:ie.KEEP,zPass:ie.ZERO}},rl={function:{func:fe.ALWAYS,ref:we.OutlineVisualElementMask,mask:we.OutlineVisualElementMask},operation:{fail:ie.KEEP,zFail:ie.KEEP,zPass:ie.REPLACE}};fe.EQUAL,we.OutlineVisualElementMask,we.OutlineVisualElementMask,ie.KEEP,ie.KEEP,ie.KEEP,fe.NOTEQUAL,we.OutlineVisualElementMask,we.OutlineVisualElementMask,ie.KEEP,ie.KEEP,ie.KEEP;function ol({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:o,emissiveTexture:a,emissiveFactor:i,occlusionTexture:n}){return e==null&&t==null&&a==null&&(i==null||bi(i,Nt))&&n==null&&(o==null||o===1)&&(r==null||r===1)}const Ko=[1,1,.5],al=[0,.6,.2],il=[0,1,.2];let et=class extends Q{constructor(e,t){super(e,"vec2",B.Pass,(r,o,a)=>r.setUniform2fv(e,t(o,a)))}};function Qo(e){e.varyings.add("linearDepth","float")}function ea(e){e.vertex.uniforms.add(new et("nearFar",(t,r)=>r.camera.nearFar))}function ta(e){e.vertex.code.add(s`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function ra(e,t){const{vertex:r}=e;switch(t.output){case z.Color:if(t.receiveShadows)return Qo(e),void r.code.add(s`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case z.Shadow:case z.ShadowHighlight:case z.ShadowExcludeHighlight:case z.ViewshedShadow:return e.include(Jo,t),Qo(e),ea(e),ta(e),void r.code.add(s`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(s`void forwardLinearDepth() {}`)}function oa(e){e.vertex.code.add(s`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function tt(e,t){nl(e,t,new ce("slicePlaneOrigin",(r,o)=>sl(t,r,o)),new ce("slicePlaneBasis1",(r,o)=>sa(t,r,o,o.slicePlane?.basis1)),new ce("slicePlaneBasis2",(r,o)=>sa(t,r,o,o.slicePlane?.basis2)))}function nl(e,t,...r){if(!t.hasSlicePlane){const n=s`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(n),void e.fragment.code.add(n)}t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r),e.fragment.uniforms.add(...r);const o=s`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,a=s`vec4 applySliceHighlight(vec4 color, vec3 pos) {
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
}`,i=t.hasSliceHighlight?s`
        ${a}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:s`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(o),e.fragment.code.add(o),e.fragment.code.add(i)}function aa(e,t,r){return e.instancedDoublePrecision?U(ll,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function ia(e,t){return e!=null?Se(Zt,t.origin,e):t.origin}function na(e,t,r){return e.hasSliceTranslatedView?t!=null?dr(cl,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function sl(e,t,r){if(r.slicePlane==null)return Nt;const o=aa(e,t,r),a=ia(o,r.slicePlane),i=na(e,o,r);return i!=null?ye(Zt,a,i):a}function sa(e,t,r,o){if(o==null||r.slicePlane==null)return Nt;const a=aa(e,t,r),i=ia(a,r.slicePlane),n=na(e,a,r);return n!=null?(he(St,o,i),ye(Zt,i,n),ye(St,St,n),Se(St,St,Zt)):o}const ll=C(),Zt=C(),St=C(),cl=zt();function rt(e){ta(e),e.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(s`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}let dl=class extends Q{constructor(e,t){super(e,"mat4",B.Draw,(r,o,a)=>r.setUniformMatrix4fv(e,t(o,a)))}};function yt(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",Nt):e.uniforms.add(new ce("cameraPosition",(r,o)=>U(ca,o.camera.viewInverseTransposeMatrix[3]-r.origin[0],o.camera.viewInverseTransposeMatrix[7]-r.origin[1],o.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function ot(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new Qe("proj",(o,a)=>a.camera.projectionMatrix),new dl("view",(o,a)=>dr(la,a.camera.viewMatrix,o.origin)),new ce("localOrigin",o=>o.origin));const r=o=>U(ca,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new Qe("proj",(o,a)=>a.camera.projectionMatrix),new Qe("view",(o,a)=>dr(la,a.camera.viewMatrix,r(a))),new X("localOrigin",(o,a)=>r(a)))}const la=zt(),ca=C();function ul(e){e.uniforms.add(new Qe("viewNormal",(t,r)=>r.camera.viewInverseTransposeMatrix))}let hl=class extends gt{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}};function b(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),e.constValue!=null)Object.defineProperty(t,r,{get:()=>e.constValue});else{const o=t._parameterNames.length-1,a=e.count||2,i=Math.ceil(Math.log2(a)),n=t._parameterBits??[0];let c=0;for(;n[c]+i>16;)c++,c>=n.length&&n.push(0);t._parameterBits=n;const l=n[c],u=(1<<i)-1<<l;n[c]+=i,Object.defineProperty(t,r,{get(){return this[o]},set(d){if(this[o]!==d&&(this[o]=d,this._keyDirty=!0,this._parameterBits[c]=this._parameterBits[c]&~u|+d<<l&u,typeof d!="number"&&typeof d!="boolean"))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof d)}})}}}let Nr=class extends hl{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}};m([b()],Nr.prototype,"instancedDoublePrecision",void 0),m([b()],Nr.prototype,"hasModelTransformation",void 0);const da=ft();function ua(e,t){const r=t.hasModelTransformation,o=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new Qe("model",i=>i.modelTransformation??Bt)),e.vertex.uniforms.add(new pe("normalLocalOriginFromModel",i=>(no(da,i.modelTransformation??Bt),da)))),t.instanced&&o&&(e.attributes.add(f.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(f.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(f.INSTANCEMODEL,"mat3"),e.attributes.add(f.INSTANCEMODELNORMAL,"mat3"));const a=e.vertex;o&&(a.include(Co,t),a.uniforms.add(new ce("viewOriginHi",(i,n)=>dn(U(Kt,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),Kt)),new ce("viewOriginLo",(i,n)=>un(U(Kt,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),Kt)))),a.code.add(s`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?o?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":o?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${o?s`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),a.code.add(s`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?o?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":o?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===z.Normal&&(ul(a),a.code.add(s`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?o?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":o?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&a.code.add(s`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?o?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":o?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const Kt=C();let ha=class extends Q{constructor(e,t){super(e,"int",B.Pass,(r,o,a)=>r.setUniform1i(e,t(o,a)))}};function ma(e,t){t.hasSymbolColors?(e.include(hn),e.attributes.add(f.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(s`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new ha("colorMixMode",r=>us[r.colorMixMode])),e.vertex.code.add(s`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function fa(e,t){t.hasVertexColors?(e.attributes.add(f.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(s`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(s`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(s`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function ml(e){e.vertex.code.add(s`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(s`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(s`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(s`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(s`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(s`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function fl(e){e.uniforms.add(new X("screenSizePerspectiveAlignment",t=>pl(t.screenSizePerspectiveAlignment||t.screenSizePerspective)))}function pl(e){return U(vl,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}const vl=C();let oe=class extends Q{constructor(e,t){super(e,"vec4",B.Pass,(r,o,a)=>r.setUniform4fv(e,t(o,a)))}};function pa(e,t){const r=e.vertex;t.hasVerticalOffset?(xl(r),t.hasScreenSizePerspective&&(e.include(ml),fl(r),yt(e.vertex,t)),r.code.add(s`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?s`vec3 worldNormal = normalize(worldPos + localOrigin);`:s`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?s`
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
    `)):r.code.add(s`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const gl=ur();function xl(e){e.uniforms.add(new oe("verticalOffset",(t,r)=>{const{minWorldLength:o,maxWorldLength:a,screenLength:i}=t.verticalOffset,n=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),c=r.camera.pixelRatio||1;return ae(gl,i*c,n,o,a)}))}function _l(e,t){const r=t.output===z.ObjectAndLayerIdColor,o=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),o?e.attributes.add(f.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(f.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(s`
     void forwardObjectAndLayerIdColor() {
      ${r?o?s`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:s`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:s``} }`),e.fragment.code.add(s`
      void outputObjectAndLayerIdColor() {
        ${r?s`fragColor = objectAndLayerIdColorVarying;`:s``} }`)}function va(e){e.code.add(s`const float MAX_RGBA4_FLOAT =
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
}`)}function Tl(e,t){switch(t.output){case z.Shadow:case z.ShadowHighlight:case z.ShadowExcludeHighlight:case z.ViewshedShadow:e.fragment.include(va),e.fragment.code.add(s`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}const bl=hr(1,1,0,1),El=hr(1,0,1,1);function Sl(e){e.fragment.uniforms.add(new ee("depthTexture",(t,r)=>r.mainDepth)),e.fragment.constants.add("occludedHighlightFlag","vec4",bl).add("unoccludedHighlightFlag","vec4",El),e.fragment.code.add(s`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}let yl=class extends Q{constructor(e,t,r){super(e,"vec4",B.Pass,(o,a,i)=>o.setUniform4fv(e,t(a,i)),r)}},wl=class extends Q{constructor(e,t,r){super(e,"float",B.Pass,(o,a,i)=>o.setUniform1fv(e,t(a,i)),r)}},W=class extends so{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};m([V()],W.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),m([V()],W.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),m([V()],W.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),m([V()],W.prototype,"DECONFLICTOR_SHOW_GRID",void 0),m([V()],W.prototype,"LABELS_SHOW_BORDER",void 0),m([V()],W.prototype,"TEXT_SHOW_BASELINE",void 0),m([V()],W.prototype,"TEXT_SHOW_BORDER",void 0),m([V()],W.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),m([V()],W.prototype,"OVERLAY_SHOW_CENTER",void 0),m([V()],W.prototype,"SHOW_POI",void 0),m([V()],W.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),m([V()],W.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),m([V()],W.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),m([V()],W.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),m([V()],W.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),m([V()],W.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),m([V()],W.prototype,"I3S_TREE_SHOW_TILES",void 0),m([V()],W.prototype,"I3S_SHOW_MODIFICATIONS",void 0),m([V()],W.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),m([V()],W.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),m([V()],W.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),m([V()],W.prototype,"LINE_WIREFRAMES",void 0),W=m([mr("esri.views.3d.support.debugFlags")],W),new W;var ga,xa;(function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"})(ga||(ga={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(xa||(xa={}));const Lr=8;function wt(e,t){const{vertex:r,attributes:o}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&o.add(f.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new X("vvSizeMinSize",a=>a.vvSize.minSize)),r.uniforms.add(new X("vvSizeMaxSize",a=>a.vvSize.maxSize)),r.uniforms.add(new X("vvSizeOffset",a=>a.vvSize.offset)),r.uniforms.add(new X("vvSizeFactor",a=>a.vvSize.factor)),r.uniforms.add(new pe("vvSymbolRotationMatrix",a=>a.vvSymbolRotationMatrix)),r.uniforms.add(new X("vvSymbolAnchor",a=>a.vvSymbolAnchor)),r.code.add(s`vec3 vvScale(vec4 _featureAttribute) {
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

      ${t.hasVvInstancing?s`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(s`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",Lr),r.uniforms.add(new wl("vvColorValues",a=>a.vvColor.values,Lr),new yl("vvColorColors",a=>a.vvColor.colors,Lr)),r.code.add(s`
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

      ${t.hasVvInstancing?s`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(s`vec4 vvColor() { return vec4(1.0); }`)}function Al(e){e.fragment.code.add(s`
    #define discardOrAdjustAlpha(color) { if (color.a < ${s.float(Rr)}) { discard; } }
  `)}function at(e,t){Ml(e,t,new ne("textureAlphaCutoff",r=>r.textureAlphaCutoff))}function Ml(e,t,r){const o=e.fragment;switch(t.alphaDiscardMode!==Y.Mask&&t.alphaDiscardMode!==Y.MaskBlend||o.uniforms.add(r),t.alphaDiscardMode){case Y.Blend:return e.include(Al);case Y.Opaque:o.code.add(s`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case Y.Mask:o.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case Y.MaskBlend:e.fragment.code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function _a(e,t){const{vertex:r,fragment:o}=e,a=t.hasColorTexture&&t.alphaDiscardMode!==Y.Opaque;switch(t.output){case z.Depth:ot(r,t),e.include(rt,t),e.include(tt,t),e.include(He,t),a&&o.uniforms.add(new ee("tex",i=>i.texture)),r.code.add(s`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(at,t),o.code.add(s`
          void main(void) {
            discardBySlice(vpos);
            ${a?s`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
          }
        `);break;case z.Shadow:case z.ShadowHighlight:case z.ShadowExcludeHighlight:case z.ViewshedShadow:case z.ObjectAndLayerIdColor:ot(r,t),e.include(rt,t),e.include(He,t),e.include(wt,t),e.include(Tl,t),e.include(tt,t),e.include(_l,t),ea(e),e.varyings.add("depth","float"),a&&o.uniforms.add(new ee("tex",i=>i.texture)),r.code.add(s`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),e.include(at,t),o.code.add(s`
          void main(void) {
            discardBySlice(vpos);
            ${a?s`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===z.ObjectAndLayerIdColor?s`outputObjectAndLayerIdColor();`:s`outputDepth(depth);`}
          }
        `);break;case z.Normal:{ot(r,t),e.include(rt,t),e.include(Ut,t),e.include(Zo,t),e.include(He,t),e.include(wt,t),a&&o.uniforms.add(new ee("tex",n=>n.texture)),t.normalType===Z.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const i=t.normalType===Z.Attribute||t.normalType===Z.Compressed;r.code.add(s`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${i?s`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:s`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(tt,t),e.include(at,t),o.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${a?s`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===Z.ScreenDerivative?s`vec3 normal = screenDerivativeNormal(vPositionView);`:s`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case z.Highlight:ot(r,t),e.include(rt,t),e.include(He,t),e.include(wt,t),a&&o.uniforms.add(new ee("tex",i=>i.texture)),r.code.add(s`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(tt,t),e.include(at,t),e.include(Sl,t),o.code.add(s`
          void main() {
            discardBySlice(vpos);
            ${a?s`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function Cl(e,t){const r=e.fragment;t.hasVertexTangents?(e.attributes.add(f.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===te.WindingOrder?r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(s`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),t.textureCoordinateType!==$.None&&(e.include(Uo,t),r.uniforms.add(t.pbrTextureBindType===B.Pass?new ee("normalTexture",o=>o.textureNormal):new xt("normalTexture",o=>o.textureNormal)),t.hasNormalTextureTransform&&(r.uniforms.add(new et("scale",o=>o.scale??lo)),r.uniforms.add(new pe("normalTextureTransformMatrix",o=>o.normalTextureTransformMatrix??Ye))),r.code.add(s`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&r.code.add(s`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(s`return tangentSpace * rawNormal;
}`))}var it,Ta;(function(e){e[e.RED=0]="RED",e[e.RG=1]="RG",e[e.RGBA4=2]="RGBA4",e[e.RGBA=3]="RGBA",e[e.RGBA_MIPMAP=4]="RGBA_MIPMAP",e[e.R16F=5]="R16F",e[e.RGBA16F=6]="RGBA16F"})(it||(it={})),function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(Ta||(Ta={}));let nt=class extends so{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces="composite-color",this._context=null,this._dirty=!0}initialize(){this.addHandles([co(()=>this.view.ready,e=>{e&&this.view._stage?.renderer.addRenderNode(this)},Ei)])}destroy(){this.view._stage?.renderer?.removeRenderNode(this)}render(){throw new dt("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){const e=this._frameBuffer?.getTexture()?.descriptor,t=this.view._stage.renderer.fboCache.acquire(e?.width??640,e?.height??480,this.produces);return t.fbo?.initializeAndBind(),t}bindRenderTarget(){return this._frameBuffer?.fbo?.initializeAndBind(),this._frameBuffer}requestRender(e){e===Eo.UPDATE&&this.view._stage?.renderView.requestRender(e),this._dirty=!0}resetWebGLState(){this.renderingContext.resetState(),this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this._context.bindParameters}get renderingContext(){return this.view._stage.renderView.renderingContext}updateAnimation(){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e,t){this._context=t,this._frameBuffer=e.find(({name:r})=>r===this.produces);try{return this.render(e)}finally{this._frameBuffer=null}}};m([V({constructOnly:!0})],nt.prototype,"view",void 0),m([V({constructOnly:!0})],nt.prototype,"consumes",void 0),m([V()],nt.prototype,"produces",void 0),nt=m([mr("esri.views.3d.webgl.RenderNode")],nt);const Ol=nt,Rl=3e5,ba=5e5;function Ea(e,t=!0){e.attributes.add(f.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(s`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?s`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}function Dr(e){e.uniforms.add(new et("zProjectionMap",(t,r)=>Il(r.camera))),e.code.add(s`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),e.code.add(s`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),e.code.add(s`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function Il(e){const t=e.projectionMatrix;return Be(Pl,t[14],t[10])}const Pl=Lt();let Nl=class extends Q{constructor(e,t){super(e,"vec2",B.Draw,(r,o,a,i)=>r.setUniform2fv(e,t(o,a,i)))}};const Ll=()=>cr.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let Sa=class{constructor(){this._includedModules=new Map}include(e,t){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,t),e(this.builder,t))}},Qt=class extends Sa{constructor(){super(...arguments),this.vertex=new ya,this.fragment=new ya,this.attributes=new Bl,this.varyings=new zl,this.extensions=new ct,this.constants=new wa,this.outputs=new Fr}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),o=this.varyings.generateSource(e),a=e==="vertex"?this.vertex:this.fragment,i=a.uniforms.generateSource(),n=a.code.generateSource(),c=e==="vertex"?Vl:Gl,l=this.constants.generateSource().concat(a.constants.generateSource()),u=this.outputs.generateSource(e);return`#version 300 es
${t.join(`
`)}

${c}

${l.join(`
`)}

${i.join(`
`)}

${r.join(`
`)}

${o.join(`
`)}

${u.join(`
`)}

${n.join(`
`)}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach(a=>{const i=a.bind[B.Pass];i&&t.set(a.name,i)}),this.fragment.uniforms.entries.forEach(a=>{const i=a.bind[B.Pass];i&&t.set(a.name,i)});const r=Array.from(t.values()),o=r.length;return(a,i)=>{for(let n=0;n<o;++n)r[n](e,a,i)}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach(a=>{const i=a.bind[B.Draw];i&&t.set(a.name,i)}),this.fragment.uniforms.entries.forEach(a=>{const i=a.bind[B.Draw];i&&t.set(a.name,i)});const r=Array.from(t.values()),o=r.length;return(a,i,n)=>{for(let c=0;c<o;++c)r[c](e,a,i,n)}}},Dl=class{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(const t of e)this._add(t);return this._stage}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new dt(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else Ll().error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(e=>e.arraySize!=null?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}},Fl=class{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}},ya=class extends Sa{constructor(){super(...arguments),this.uniforms=new Dl(this),this.code=new Fl(this),this.constants=new wa}get builder(){return this}},Bl=class{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return e==="fragment"?[]:this._entries.map(t=>`in ${t[1]} ${t[0]};`)}},zl=class{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&j(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach((r,o)=>t.push(e==="vertex"?`out ${r} ${o};`:`in ${r} ${o};`)),t}};class ct{constructor(){this._entries=new Set}add(t){this._entries.add(t)}generateSource(t){const r=t==="vertex"?ct.ALLOWLIST_VERTEX:ct.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(o=>r.includes(o)).map(o=>`#extension ${o} : enable`)}}ct.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],ct.ALLOWLIST_VERTEX=[];let Fr=class kr{constructor(){this._entries=new Map}add(t,r,o=0){const a=this._entries.get(o);a?j(a.name===t&&a.type===r,`Fragment shader output location ${o} occupied`):this._entries.set(o,{name:t,type:r})}generateSource(t){if(t==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:kr.DEFAULT_NAME,type:kr.DEFAULT_TYPE});const r=new Array;return this._entries.forEach((o,a)=>r.push(`layout(location = ${a}) out ${o.type} ${o.name};`)),r}};Fr.DEFAULT_TYPE="vec4",Fr.DEFAULT_NAME="fragColor";let wa=class q{constructor(){this._entries=new Set}add(t,r,o){let a="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":a=q._numberToFloatStr(o);break;case"int":a=q._numberToIntStr(o);break;case"bool":a=o.toString();break;case"vec2":a=`vec2(${q._numberToFloatStr(o[0])},                            ${q._numberToFloatStr(o[1])})`;break;case"vec3":a=`vec3(${q._numberToFloatStr(o[0])},                            ${q._numberToFloatStr(o[1])},                            ${q._numberToFloatStr(o[2])})`;break;case"vec4":a=`vec4(${q._numberToFloatStr(o[0])},                            ${q._numberToFloatStr(o[1])},                            ${q._numberToFloatStr(o[2])},                            ${q._numberToFloatStr(o[3])})`;break;case"ivec2":a=`ivec2(${q._numberToIntStr(o[0])},                             ${q._numberToIntStr(o[1])})`;break;case"ivec3":a=`ivec3(${q._numberToIntStr(o[0])},                             ${q._numberToIntStr(o[1])},                             ${q._numberToIntStr(o[2])})`;break;case"ivec4":a=`ivec4(${q._numberToIntStr(o[0])},                             ${q._numberToIntStr(o[1])},                             ${q._numberToIntStr(o[2])},                             ${q._numberToIntStr(o[3])})`;break;case"mat2":case"mat3":case"mat4":a=`${r}(${Array.prototype.map.call(o,i=>q._numberToFloatStr(i)).join(", ")})`}return this._entries.add(`const ${r} ${t} = ${a};`),this}static _numberToIntStr(t){return t.toFixed(0)}static _numberToFloatStr(t){return Number.isInteger(t)?t.toFixed(1):t.toString()}generateSource(){return Array.from(this._entries)}};const Gl=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,Vl=`precision highp float;
precision highp sampler2D;`,Br=4;function Aa(){const e=new Qt,t=e.fragment;e.include(Ea);const r=(Br+1)/2,o=1/(2*r*r);return t.include(Dr),t.uniforms.add(new ee("depthMap",a=>a.depthTexture),new xt("tex",a=>a.colorTexture),new Nl("blurSize",a=>a.blurSize),new ne("projScale",(a,i)=>{const n=Si(i.camera.eye,i.camera.center);return n>5e4?Math.max(0,a.projScale-(n-5e4)):a.projScale})),t.code.add(s`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.float(o)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.code.add(s`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${s.int(Br)}; r <= ${s.int(Br)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),e}const Ul=Object.freeze(Object.defineProperty({__proto__:null,build:Aa},Symbol.toStringTag,{value:"Module"}));let Ma=class Ka extends Ir{initializeProgram(t){return new Pr(t.rctx,Ka.shader.get().build(),kt)}initializePipeline(){return br({colorWrite:Er})}};Ma.shader=new Jt(Ul,()=>Promise.resolve().then(()=>Bc));const Hl="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let jl=class extends gt{constructor(){super(...arguments),this.projScale=1}},Wl=class extends jl{constructor(){super(...arguments),this.intensity=1}},ql=class extends gt{},kl=class extends ql{constructor(){super(...arguments),this.blurSize=Lt()}};function $l(e){e.fragment.uniforms.add(new oe("projInfo",(t,r)=>Yl(r.camera))),e.fragment.uniforms.add(new et("zScale",(t,r)=>Xl(r.camera))),e.fragment.code.add(s`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function Yl(e){const t=e.projectionMatrix;return t[11]===0?ae(Ca,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):ae(Ca,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}const Ca=ur();function Xl(e){return e.projectionMatrix[11]===0?Be(Oa,0,1):Be(Oa,1,0)}const Oa=Lt(),Ra=16;function Ia(){const e=new Qt,t=e.fragment;return e.include(Ea),e.include($l),t.include(Dr),t.uniforms.add(new ne("radius",(r,o)=>er(o.camera))).code.add(s`vec3 sphere[16] = vec3[16](
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
}`),t.code.add(s`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new ee("normalMap",r=>r.normalTexture),new ee("depthMap",r=>r.depthTexture),new ne("projScale",r=>r.projScale),new ee("rnm",r=>r.noiseTexture),new et("rnmScale",(r,o)=>Be(Pa,o.camera.fullWidth/r.noiseTexture.descriptor.width,o.camera.fullHeight/r.noiseTexture.descriptor.height)),new ne("intensity",r=>r.intensity),new et("screenSize",(r,o)=>Be(Pa,o.camera.fullWidth,o.camera.fullHeight))),e.outputs.add("fragOcclusion","float"),t.code.add(s`
    void main(void) {
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
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

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${s.int(Ra)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${s.int(Ra)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),e}function er(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const Pa=Lt(),Jl=Object.freeze(Object.defineProperty({__proto__:null,build:Ia,getRadius:er},Symbol.toStringTag,{value:"Module"}));let Na=class Qa extends Ir{initializeProgram(t){return new Pr(t.rctx,Qa.shader.get().build(),kt)}initializePipeline(){return br({colorWrite:Er})}};Na.shader=new Jt(Jl,()=>Promise.resolve().then(()=>zc));const At=2;let st=class extends Ol{constructor(e){super(e),this.consumes={required:["normals"]},this.produces="ssao",this.isEnabled=()=>!1,this._enableTime=Dt(0),this._passParameters=new Wl,this._drawParameters=new kl}initialize(){const e=Uint8Array.from(atob(Hl),r=>r.charCodeAt(0)),t=new Ao;t.wrapMode=Ge.CLAMP_TO_EDGE,t.pixelFormat=ze.RGB,t.wrapMode=Ge.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new Ke(this.renderingContext,t,e),this._ssaoTechnique=this.techniques.acquire(Na),this._blurTechnique=this.techniques.acquire(Ma),this.addHandles(co(()=>this.isEnabled(),()=>this._enableTime=Dt(0)))}destroy(){this._passParameters.noiseTexture=Ot(this._passParameters.noiseTexture),this._blurTechnique.release(),this._ssaoTechnique.release()}render(e){const t=this.bindParameters,r=e.find(({name:F})=>F==="normals"),o=r?.getTexture(),a=r?.getTexture(tn),i=this.fboCache,n=t.camera,c=n.fullViewport[2],l=n.fullViewport[3],u=Math.round(c/At),d=Math.round(l/At);if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=Dt(performance.now()),this.requestRender(),i.acquire(u,d,"ssao",it.RED);this._enableTime===0&&(this._enableTime=Dt(performance.now()));const h=this.renderingContext,v=this.view.qualitySettings.fadeDuration,p=n.relativeElevation,g=oo((ba-p)/(ba-Rl),0,1),E=v>0?Math.min(v,performance.now()-this._enableTime)/v:1,_=E*g;this._passParameters.normalTexture=o,this._passParameters.depthTexture=a,this._passParameters.projScale=1/n.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Zl/er(n)**6*_;const P=i.acquire(c,l,"ssao input",it.RG);h.unbindTexture(P.fbo.colorTexture),h.bindFramebuffer(P.fbo),h.setViewport(0,0,c,l),h.bindTechnique(this._ssaoTechnique,t,this._passParameters,this._drawParameters),h.screen.draw();const M=i.acquire(u,d,"ssao blur",it.RED);h.unbindTexture(M.fbo.colorTexture),h.bindFramebuffer(M.fbo),this._drawParameters.colorTexture=P.getTexture(),Be(this._drawParameters.blurSize,0,At/l),h.bindTechnique(this._blurTechnique,t,this._passParameters,this._drawParameters),h.setViewport(0,0,u,d),h.screen.draw(),P.release();const R=i.acquire(u,d,"ssao",it.RED);return h.unbindTexture(R.fbo.colorTexture),h.bindFramebuffer(R.fbo),h.setViewport(0,0,c,l),h.setClearColor(1,1,1,0),h.clear(rn.COLOR_BUFFER_BIT),this._drawParameters.colorTexture=M.getTexture(),Be(this._drawParameters.blurSize,At/c,0),h.bindTechnique(this._blurTechnique,t,this._passParameters,this._drawParameters),h.setViewport(0,0,u,d),h.screen.draw(),h.setViewport4fv(n.fullViewport),M.release(),E<1&&this.requestRender(Eo.UPDATE),R}};m([V()],st.prototype,"consumes",void 0),m([V()],st.prototype,"produces",void 0),m([V({constructOnly:!0})],st.prototype,"techniques",void 0),m([V({constructOnly:!0})],st.prototype,"isEnabled",void 0),st=m([mr("esri.views.3d.webgl-engine.effects.ssao.SSAO")],st);const Zl=.5;function zr(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new ee("ssaoTex",(o,a)=>a.ssao?.getTexture())),r.constants.add("blurSizePixelsInverse","float",1/At),r.code.add(s`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(s`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Kl(e,t){const r=e.fragment,o=t.lightingSphericalHarmonicsOrder!==void 0?t.lightingSphericalHarmonicsOrder:2;o===0?(r.uniforms.add(new X("lightingAmbientSH0",(a,i)=>U(La,i.lighting.sh.r[0],i.lighting.sh.g[0],i.lighting.sh.b[0]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===1?(r.uniforms.add(new oe("lightingAmbientSH_R",(a,i)=>ae(be,i.lighting.sh.r[0],i.lighting.sh.r[1],i.lighting.sh.r[2],i.lighting.sh.r[3])),new oe("lightingAmbientSH_G",(a,i)=>ae(be,i.lighting.sh.g[0],i.lighting.sh.g[1],i.lighting.sh.g[2],i.lighting.sh.g[3])),new oe("lightingAmbientSH_B",(a,i)=>ae(be,i.lighting.sh.b[0],i.lighting.sh.b[1],i.lighting.sh.b[2],i.lighting.sh.b[3]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):o===2&&(r.uniforms.add(new X("lightingAmbientSH0",(a,i)=>U(La,i.lighting.sh.r[0],i.lighting.sh.g[0],i.lighting.sh.b[0])),new oe("lightingAmbientSH_R1",(a,i)=>ae(be,i.lighting.sh.r[1],i.lighting.sh.r[2],i.lighting.sh.r[3],i.lighting.sh.r[4])),new oe("lightingAmbientSH_G1",(a,i)=>ae(be,i.lighting.sh.g[1],i.lighting.sh.g[2],i.lighting.sh.g[3],i.lighting.sh.g[4])),new oe("lightingAmbientSH_B1",(a,i)=>ae(be,i.lighting.sh.b[1],i.lighting.sh.b[2],i.lighting.sh.b[3],i.lighting.sh.b[4])),new oe("lightingAmbientSH_R2",(a,i)=>ae(be,i.lighting.sh.r[5],i.lighting.sh.r[6],i.lighting.sh.r[7],i.lighting.sh.r[8])),new oe("lightingAmbientSH_G2",(a,i)=>ae(be,i.lighting.sh.g[5],i.lighting.sh.g[6],i.lighting.sh.g[7],i.lighting.sh.g[8])),new oe("lightingAmbientSH_B2",(a,i)=>ae(be,i.lighting.sh.b[5],i.lighting.sh.b[6],i.lighting.sh.b[7],i.lighting.sh.b[8]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),t.pbrMode!==I.Normal&&t.pbrMode!==I.Schematic||r.code.add(s`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const La=C(),be=ur();function Gr(e){e.uniforms.add(new X("mainLightDirection",(t,r)=>r.lighting.mainLight.direction))}function tr(e){e.uniforms.add(new X("mainLightIntensity",(t,r)=>r.lighting.mainLight.intensity))}function Da(e){Gr(e.fragment),tr(e.fragment),e.fragment.code.add(s`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function Ql(e){const t=e.fragment.code;t.add(s`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(s`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(s`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Fa(e){e.vertex.code.add(s`const float PI = 3.141592653589793;`),e.fragment.code.add(s`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function Vr(e,t){const r=e.fragment.code;e.include(Fa),t.pbrMode!==I.Normal&&t.pbrMode!==I.Schematic&&t.pbrMode!==I.Simplified&&t.pbrMode!==I.TerrainWithWater||(r.add(s`float normalDistribution(float NdotH, float roughness)
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
}`)),t.pbrMode!==I.Normal&&t.pbrMode!==I.Schematic||(e.include(Ql),r.add(s`struct PBRShadingInfo
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
}`))}let ec=class extends Q{constructor(e,t){super(e,"bool",B.Pass,(r,o,a)=>r.setUniform1b(e,t(o,a)))}};const tc=.4;function Ur(e){e.constants.add("ambientBoostFactor","float",tc)}function Hr(e){e.uniforms.add(new ne("lightingGlobalFactor",(t,r)=>r.lighting.globalFactor))}function Ba(e,t){const r=e.fragment;switch(e.include(zr,t),t.pbrMode!==I.Disabled&&e.include(Vr,t),e.include(Kl,t),e.include(Fa),r.code.add(s`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===I.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Ur(r),Hr(r),Gr(r),r.code.add(s`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?s`normalize(vPosWorld)`:s`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),tr(r),r.code.add(s`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case I.Disabled:case I.WaterOnIntegratedMesh:case I.Water:e.include(Da),r.code.add(s`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case I.Normal:case I.Schematic:r.code.add(s`const float fillLightIntensity = 0.25;
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
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new ec("hasFillLights",(o,a)=>a.enableFillLights)):r.constants.add("hasFillLights","bool",!1),r.code.add(s`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new ne("lightingSpecularStrength",(o,a)=>a.lighting.mainLight.specularStrength),new ne("lightingEnvironmentStrength",(o,a)=>a.lighting.mainLight.environmentStrength)),r.code.add(s`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(s`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==I.Schematic||t.hasColorTexture?s`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:s`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case I.Simplified:case I.TerrainWithWater:e.include(Da),r.code.add(s`const float roughnessTerrain = 0.5;
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
}`);break;default:mt(t.pbrMode);case I.COUNT:}}function za(e,t){if(!t.multipassEnabled)return;e.fragment.include(Dr),e.fragment.uniforms.add(new ee("terrainDepthTexture",(o,a)=>a.multipassTerrain.depth?.attachment));const r=t.occlusionPass;e.fragment.code.add(s`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${r?s`return fragmentDepth < linearDepth && depth < 1.0;`:s`
          if(fragmentDepth ${t.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}class rc extends Q{constructor(t,r,o){super(t,"mat4",B.Draw,(a,i,n,c)=>a.setUniformMatrix4fv(t,r(i,n,c)),o)}}let oc=class extends Q{constructor(e,t,r){super(e,"mat4",B.Pass,(o,a,i)=>o.setUniformMatrix4fv(e,t(a,i)),r)}};function Ga(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new oc("shadowMapMatrix",(r,o)=>o.shadowMap.getShadowMapMatrices(r.origin),4)),Ua(e))}function Va(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new rc("shadowMapMatrix",(r,o)=>o.shadowMap.getShadowMapMatrices(r.origin),4)),Ua(e))}function Ua(e){const t=e.fragment;t.include(va),t.uniforms.add(new ee("shadowMap",(r,o)=>o.shadowMap.depthTexture),new ha("numCascades",(r,o)=>o.shadowMap.numCascades),new oe("cascadeDistances",(r,o)=>o.shadowMap.cascadeDistances)),t.code.add(s`int chooseCascade(float depth, out mat4 mat) {
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
}`)}function ac(e,t){t.hasColorTextureTransform?(e.vertex.uniforms.add(new pe("colorTextureTransformMatrix",r=>r.colorTextureTransformMatrix??Ye)),e.varyings.add("colorUV","vec2"),e.vertex.code.add(s`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(s`void forwardColorUV(){}`)}function ic(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==$.None?(e.vertex.uniforms.add(new pe("normalTextureTransformMatrix",r=>r.normalTextureTransformMatrix??Ye)),e.varyings.add("normalUV","vec2"),e.vertex.code.add(s`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(s`void forwardNormalUV(){}`)}function nc(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==$.None?(e.vertex.uniforms.add(new pe("emissiveTextureTransformMatrix",r=>r.emissiveTextureTransformMatrix??Ye)),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(s`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(s`void forwardEmissiveUV(){}`)}function sc(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==$.None?(e.vertex.uniforms.add(new pe("occlusionTextureTransformMatrix",r=>r.occlusionTextureTransformMatrix??Ye)),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(s`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(s`void forwardOcclusionUV(){}`)}function lc(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==$.None?(e.vertex.uniforms.add(new pe("metallicRoughnessTextureTransformMatrix",r=>r.metallicRoughnessTextureTransformMatrix??Ye)),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(s`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(s`void forwardMetallicRoughnessUV(){}`)}function cc(e){e.code.add(s`vec4 premultiplyAlpha(vec4 v) {
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
}`)}function Ha(e){e.include(cc),e.code.add(s`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${s.int(xe.Multiply)}) {
        return allMixed;
      }
      if (mode == ${s.int(xe.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(xe.Replace)}) {
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

      if (mode == ${s.int(xe.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(xe.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function ja(e){const t=new Qt,{vertex:r,fragment:o,varyings:a}=t;if(ot(r,e),t.include(Or),a.add("vpos","vec3"),t.include(wt,e),t.include(ua,e),t.include(pa,e),t.include(ac,e),e.output===z.Color){t.include(ic,e),t.include(nc,e),t.include(sc,e),t.include(lc,e),yt(r,e),t.include(Ut,e),t.include(rt,e);const i=e.normalType===Z.Attribute||e.normalType===Z.Compressed;i&&e.offsetBackfaces&&t.include(oa),t.include(Cl,e),t.include(Zo,e),e.instancedColor&&t.attributes.add(f.INSTANCECOLOR,"vec4"),a.add("vPositionLocal","vec3"),t.include(He,e),t.include(ra,e),t.include(ma,e),t.include(fa,e),r.uniforms.add(new oe("externalColor",n=>n.externalColor)),a.add("vcolorExt","vec4"),e.multipassEnabled&&a.add("depth","float"),r.code.add(s`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${s.float(Rr)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${i?s`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${i&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `),t.include(tt,e),t.include(Ba,e),t.include(zr,e),t.include(at,e),t.include(e.instancedDoublePrecision?Ga:Va,e),t.include(za,e),yt(o,e),o.uniforms.add(r.uniforms.get("localOrigin"),new X("ambient",n=>n.ambient),new X("diffuse",n=>n.diffuse),new ne("opacity",n=>n.opacity),new ne("layerOpacity",n=>n.layerOpacity)),e.hasColorTexture&&o.uniforms.add(new ee("tex",n=>n.texture)),t.include(Ho,e),t.include(Vr,e),o.include(Ha),t.include(Qn,e),Ur(o),Hr(o),tr(o),e.transparencyPassType===re.ColorAlpha&&(t.outputs.add("fragColor","vec4",0),t.outputs.add("fragAlpha","float",1)),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?s`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===Z.ScreenDerivative?s`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:s`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===I.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?s`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?s`normalUV`:"vuv0"});`:s`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?s`normalize(posWorld);`:s`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?s`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===I.Normal||e.pbrMode===I.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?s`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===re.ColorAlpha?s`
                  fragColor = premultiplyAlpha(fragColor);
                  fragAlpha = fragColor.a;`:""}
      }
    `)}return t.include(_a,e),t}const dc=Object.freeze(Object.defineProperty({__proto__:null,build:ja},Symbol.toStringTag,{value:"Module"}));let uc=class extends Ks{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=fr(Ko),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=Ae.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=De(0,0,0),this.instancedDoublePrecision=!1,this.normalType=Z.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=De(.2,.2,.2),this.diffuse=De(.8,.8,.8),this.externalColor=hr(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=C(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=vt.Less,this.textureAlphaMode=Y.Blend,this.textureAlphaCutoff=Qs,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Cr.Occlude,this.isDecoration=!1}},jr=class ei extends Ir{initializeConfiguration(t,r){r.spherical=t.viewingMode===Pt.Global,r.doublePrecisionRequiresObfuscation=t.rctx.driverTest.doublePrecisionRequiresObfuscation.result,r.textureCoordinateType=r.hasColorTexture||r.hasMetallicRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture?$.Default:$.None,r.objectAndLayerIdColorInstanced=r.instanced}initializeProgram(t){return this._initializeProgram(t,ei.shader)}_initializeProgram(t,r){return new Pr(t.rctx,r.get().build(this.configuration),kt)}_makePipeline(t,r){const o=this.configuration,a=t===re.NONE,i=t===re.FrontFace;return br({blending:o.output===z.Color&&o.transparent?a?ms:ps(t):null,culling:mc(o)?ln(o.cullFace):null,depthTest:{func:_s(t,hc(o.customDepthTest))},depthWrite:(a||i)&&o.writeDepth?cn:null,drawBuffers:o.output===z.Depth?{buffers:[on.NONE]}:Ts(t),colorWrite:Er,stencilWrite:o.hasOccludees?el:null,stencilTest:o.hasOccludees?r?rl:tl:null,polygonOffset:a||i?null:xs(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(t){return t?this._occludeePipelineState:super.getPipeline()}};function hc(e){return e===vt.Lequal?fe.LEQUAL:fe.LESS}function mc(e){return e.cullFace!==Ae.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}jr.shader=new Jt(dc,()=>Promise.resolve().then(()=>Gc));let rr=class extends Nr{};m([b({constValue:!0})],rr.prototype,"hasSliceHighlight",void 0),m([b({constValue:!1})],rr.prototype,"hasSliceInVertexProgram",void 0),m([b({constValue:B.Pass})],rr.prototype,"pbrTextureBindType",void 0);class y extends rr{constructor(){super(...arguments),this.output=z.Color,this.alphaDiscardMode=Y.Opaque,this.doubleSidedMode=te.None,this.pbrMode=I.Disabled,this.cullFace=Ae.None,this.transparencyPassType=re.NONE,this.normalType=Z.Attribute,this.textureCoordinateType=$.None,this.customDepthTest=vt.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}m([b({count:z.COUNT})],y.prototype,"output",void 0),m([b({count:Y.COUNT})],y.prototype,"alphaDiscardMode",void 0),m([b({count:te.COUNT})],y.prototype,"doubleSidedMode",void 0),m([b({count:I.COUNT})],y.prototype,"pbrMode",void 0),m([b({count:Ae.COUNT})],y.prototype,"cullFace",void 0),m([b({count:re.COUNT})],y.prototype,"transparencyPassType",void 0),m([b({count:Z.COUNT})],y.prototype,"normalType",void 0),m([b({count:$.COUNT})],y.prototype,"textureCoordinateType",void 0),m([b({count:vt.COUNT})],y.prototype,"customDepthTest",void 0),m([b()],y.prototype,"spherical",void 0),m([b()],y.prototype,"hasVertexColors",void 0),m([b()],y.prototype,"hasSymbolColors",void 0),m([b()],y.prototype,"hasVerticalOffset",void 0),m([b()],y.prototype,"hasSlicePlane",void 0),m([b()],y.prototype,"hasSliceHighlight",void 0),m([b()],y.prototype,"hasColorTexture",void 0),m([b()],y.prototype,"hasMetallicRoughnessTexture",void 0),m([b()],y.prototype,"hasEmissionTexture",void 0),m([b()],y.prototype,"hasOcclusionTexture",void 0),m([b()],y.prototype,"hasNormalTexture",void 0),m([b()],y.prototype,"hasScreenSizePerspective",void 0),m([b()],y.prototype,"hasVertexTangents",void 0),m([b()],y.prototype,"hasOccludees",void 0),m([b()],y.prototype,"multipassEnabled",void 0),m([b()],y.prototype,"hasModelTransformation",void 0),m([b()],y.prototype,"offsetBackfaces",void 0),m([b()],y.prototype,"vvSize",void 0),m([b()],y.prototype,"vvColor",void 0),m([b()],y.prototype,"receiveShadows",void 0),m([b()],y.prototype,"receiveAmbientOcclusion",void 0),m([b()],y.prototype,"textureAlphaPremultiplied",void 0),m([b()],y.prototype,"instanced",void 0),m([b()],y.prototype,"instancedColor",void 0),m([b()],y.prototype,"objectAndLayerIdColorInstanced",void 0),m([b()],y.prototype,"instancedDoublePrecision",void 0),m([b()],y.prototype,"doublePrecisionRequiresObfuscation",void 0),m([b()],y.prototype,"writeDepth",void 0),m([b()],y.prototype,"transparent",void 0),m([b()],y.prototype,"enableOffset",void 0),m([b()],y.prototype,"cullAboveGround",void 0),m([b()],y.prototype,"snowCover",void 0),m([b()],y.prototype,"hasColorTextureTransform",void 0),m([b()],y.prototype,"hasEmissionTextureTransform",void 0),m([b()],y.prototype,"hasNormalTextureTransform",void 0),m([b()],y.prototype,"hasOcclusionTextureTransform",void 0),m([b()],y.prototype,"hasMetallicRoughnessTextureTransform",void 0),m([b({constValue:!1})],y.prototype,"occlusionPass",void 0),m([b({constValue:!0})],y.prototype,"hasVvInstancing",void 0),m([b({constValue:!1})],y.prototype,"useCustomDTRExponentForWater",void 0),m([b({constValue:!1})],y.prototype,"supportsTextureAtlas",void 0),m([b({constValue:!0})],y.prototype,"useFillLights",void 0);function Wa(e){const t=new Qt,{vertex:r,fragment:o,varyings:a}=t;return ot(r,e),t.include(Or),a.add("vpos","vec3"),t.include(wt,e),t.include(ua,e),t.include(pa,e),e.output===z.Color&&(yt(t.vertex,e),t.include(Ut,e),t.include(rt,e),e.offsetBackfaces&&t.include(oa),e.instancedColor&&t.attributes.add(f.INSTANCECOLOR,"vec4"),a.add("vNormalWorld","vec3"),a.add("localvpos","vec3"),e.multipassEnabled&&a.add("depth","float"),t.include(He,e),t.include(ra,e),t.include(ma,e),t.include(fa,e),r.uniforms.add(new oe("externalColor",i=>i.externalColor)),a.add("vcolorExt","vec4"),r.code.add(s`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${s.float(Rr)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassEnabled?s`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===z.Color&&(t.include(tt,e),t.include(Ba,e),t.include(zr,e),t.include(at,e),t.include(e.instancedDoublePrecision?Ga:Va,e),t.include(za,e),yt(t.fragment,e),Gr(o),Ur(o),Hr(o),o.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new X("ambient",i=>i.ambient),new X("diffuse",i=>i.diffuse),new ne("opacity",i=>i.opacity),new ne("layerOpacity",i=>i.layerOpacity)),e.hasColorTexture&&o.uniforms.add(new ee("tex",i=>i.texture)),t.include(Ho,e),t.include(Vr,e),o.include(Ha),e.transparencyPassType===re.ColorAlpha&&(t.outputs.add("fragColor","vec4",0),t.outputs.add("fragAlpha","float",1)),tr(o),o.code.add(s`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?s`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?s`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?s`colorUV`:s`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===I.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?s`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?s`albedo = mix(albedo, vec3(1), 0.9);`:s``}
        ${s`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===I.Normal||e.pbrMode===I.Schematic?e.spherical?s`vec3 normalGround = normalize(vpos + localOrigin);`:s`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:s``}
        ${e.pbrMode===I.Normal||e.pbrMode===I.Schematic?s`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?s`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===re.ColorAlpha?s`
                fragColor = premultiplyAlpha(fragColor);
                fragAlpha = fragColor.a;`:""}
      }
    `)),t.include(_a,e),t}const fc=Object.freeze(Object.defineProperty({__proto__:null,build:Wa},Symbol.toStringTag,{value:"Module"}));class ar extends jr{initializeConfiguration(t,r){super.initializeConfiguration(t,r),r.hasMetallicRoughnessTexture=!1,r.hasEmissionTexture=!1,r.hasOcclusionTexture=!1,r.hasNormalTexture=!1,r.hasModelTransformation=!1,r.normalType=Z.Attribute,r.doubleSidedMode=te.WindingOrder,r.hasVertexTangents=!1}initializeProgram(t){return this._initializeProgram(t,ar.shader)}}ar.shader=new Jt(fc,()=>Promise.resolve().then(()=>Vc));let or=class extends hs{constructor(e){super(e,gc),this.supportsEdges=!0,this.produces=new Map([[Et.OPAQUE_MATERIAL,t=>(_r(t)||Tr(t))&&!this.parameters.transparent],[Et.TRANSPARENT_MATERIAL,t=>(_r(t)||Tr(t))&&this.parameters.transparent&&this.parameters.writeDepth],[Et.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,t=>(_r(t)||Tr(t))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new y,this._vertexBufferLayout=xc(this.parameters)}isVisibleForOutput(e){return e!==z.Shadow&&e!==z.ShadowExcludeHighlight&&e!==z.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:o,vvColor:a}=e,i=e.colorMixMode==="replace",n=e.opacity>0,c=e.externalColor&&e.externalColor[3]>0,l=t||a||o;return r&&l?i||n:r?i?c:n:l?i||n:i?c:n}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=this.parameters.verticalOffset!=null,this._configuration.hasScreenSizePerspective=this.parameters.screenSizePerspective!=null,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this.parameters.customDepthTest!=null&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?Ae.None:this.parameters.cullFace,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=this.parameters.modelTransformation!=null,e===z.Color&&(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=te.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?te.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?te.WindingOrder:te.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=this.parameters.receiveAmbientOcclusion&&t.ssao!=null,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?I.Schematic:I.Normal:I.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<vs,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return e.weather!=null&&e.weatherVisible&&e.weather.type==="snowy"&&e.weather.snowCover==="enabled"}intersect(e,t,r,o,a,i){if(this.parameters.verticalOffset!=null){const n=r.camera;U(qr,t[12],t[13],t[14]);let c=null;switch(r.viewingMode){case Pt.Global:c=It(qa,qr);break;case Pt.Local:c=Rt(qa,bc)}let l=0;const u=Se(Ec,qr,n.eye),d=ue(u),h=me(u,u,1/d);let v=null;this.parameters.screenSizePerspective&&(v=yi(c,h)),l+=ls(n,d,this.parameters.verticalOffset,v??0,this.parameters.screenSizePerspective),me(c,c,l),wi(Wr,c,r.transform.inverseRotation),o=Se(_c,o,Wr),a=Se(Tc,a,Wr)}Es(e,r,o,a,Vs(r.verticalOffset),i)}createGLMaterial(e){return new pc(e)}createBufferWriter(){return new Js(this._vertexBufferLayout)}},pc=class extends rs{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output===z.Color&&(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return U(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?ar:jr,e)}};class vc extends uc{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const gc=new vc;function xc(e){const t=sn().vec3f(f.POSITION);return e.normalType===Z.Compressed?t.vec2i16(f.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(f.NORMAL),e.hasVertexTangents&&t.vec4f(f.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(f.UV0),e.hasVertexColors&&t.vec4u8(f.COLOR),e.hasSymbolColors&&t.vec4u8(f.SYMBOLCOLOR),Ai("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(f.OBJECTANDLAYERIDCOLOR),t}const _c=C(),Tc=C(),bc=De(0,0,1),qa=C(),Wr=C(),qr=C(),Ec=C(),Ee=()=>cr.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Sc(e,t){const r=await yc(e,t),o=await Oc(r.textureDefinitions??{},t);let a=0;for(const i in o)if(o.hasOwnProperty(i)){const n=o[i];a+=n?.image?n.image.width*n.image.height*4:0}return{resource:r,textures:o,size:a+Mi(r)}}async function yc(e,t){const r=t?.streamDataRequester;if(r)return wc(e,r,t);const o=await uo(Ci(e,t));if(o.ok===!0)return o.value.data;ho(o.error),ka(o.error)}async function wc(e,t,r){const o=await uo(t.request(e,"json",r));if(o.ok===!0)return o.value;ho(o.error),ka(o.error.details.url)}function ka(e){throw new dt("",`Request for object resource failed: ${e}`)}function Ac(e){const t=e.params,r=t.topology;let o=!0;switch(t.vertexAttributes||(Ee().warn("Geometry must specify vertex attributes"),o=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const i=t.faces;if(i){if(t.vertexAttributes)for(const n in t.vertexAttributes){const c=i[n];c?.values?(c.valueType!=null&&c.valueType!=="UInt32"&&(Ee().warn(`Unsupported indexed geometry indices type '${c.valueType}', only UInt32 is currently supported`),o=!1),c.valuesPerElement!=null&&c.valuesPerElement!==1&&(Ee().warn(`Unsupported indexed geometry values per element '${c.valuesPerElement}', only 1 is currently supported`),o=!1)):(Ee().warn(`Indexed geometry does not specify face indices for '${n}' attribute`),o=!1)}}else Ee().warn("Indexed geometries must specify faces"),o=!1;break}default:Ee().warn(`Unsupported topology '${r}'`),o=!1}e.params.material||(Ee().warn("Geometry requires material"),o=!1);const a=e.params.vertexAttributes;for(const i in a)a[i].values||(Ee().warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function Mc(e,t){const r=new Array,o=new Array,a=new Array,i=new $i,n=e.resource,c=mo.parse(n.version||"1.0","wosr");Ic.validate(c);const l=n.model.name,u=n.model.geometries,d=n.materialDefinitions??{},h=e.textures;let v=0;const p=new Map;for(let g=0;g<u.length;g++){const E=u[g];if(!Ac(E))continue;const _=Rc(E),P=E.params.vertexAttributes,M=[],R=T=>{if(E.params.topology==="PerAttributeArray")return null;const L=E.params.faces;for(const G in L)if(G===T)return L[G].values;return null},F=P[f.POSITION],H=F.values.length/F.valuesPerElement;for(const T in P){const L=P[T],G=L.values,k=R(T)??To(H);M.push([T,new Je(G,k,L.valuesPerElement,!0)])}const D=_.texture,S=h&&h[D];if(S&&!p.has(D)){const{image:T,parameters:L}=S,G=new Go(T,L);o.push(G),p.set(D,G)}const A=p.get(D),O=A?A.id:void 0,w=_.material;let x=i.get(w,D);if(x==null){const T=d[w.substring(w.lastIndexOf("/")+1)].params;T.transparency===1&&(T.transparency=0);const L=S&&S.alphaChannelUsage,G=T.transparency>0||L==="transparency"||L==="maskAndTransparency",k=S?$a(S.alphaChannelUsage):void 0,K={ambient:fr(T.diffuse),diffuse:fr(T.diffuse),opacity:1-(T.transparency||0),transparent:G,textureAlphaMode:k,textureAlphaCutoff:.33,textureId:O,initTextureTransparent:!0,doubleSided:!0,cullFace:Ae.None,colorMixMode:T.externalColorMixMode||"tint",textureAlphaPremultiplied:S?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(K,t.materialParameters),x=new or(K),i.set(w,D,x)}a.push(x);const N=new Io(x,M);v+=M.find(T=>T[0]===f.POSITION)?.[1]?.indices.length??0,r.push(N)}return{engineResources:[{name:l,stageResources:{textures:o,materials:a,geometries:r},pivotOffset:n.model.pivotOffset,numberOfVertices:v,lodThreshold:null}],referenceBoundingBox:Cc(r)}}function Cc(e){const t=fo();return e.forEach(r=>{const o=r.boundingInfo;o!=null&&(Ft(t,o.bbMin),Ft(t,o.bbMax))}),t}async function Oc(e,t){const r=new Array;for(const i in e){const n=e[i],c=n.images[0].data;if(!c){Ee().warn("Externally referenced texture data is not yet supported");continue}const l=n.encoding+";base64,"+c,u="/textureDefinitions/"+i,d=n.channels==="rgba"?n.alphaChannelUsage||"transparency":"none",h={noUnpackFlip:!0,wrap:{s:Ge.REPEAT,t:Ge.REPEAT},preMultiplyAlpha:$a(d)!==Y.Opaque},v=t?.disableTextures?Promise.resolve(null):bo(l,t);r.push(v.then(p=>({refId:u,image:p,parameters:h,alphaChannelUsage:d})))}const o=await Promise.all(r),a={};for(const i of o)a[i.refId]=i;return a}function $a(e){switch(e){case"mask":return Y.Mask;case"maskAndTransparency":return Y.MaskBlend;case"none":return Y.Opaque;default:return Y.Blend}}function Rc(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Ic=new mo(1,2,"wosr");async function Pc(e,t){const r=Ya(ti(e));if(r.fileType==="wosr"){const h=await(t.cache?t.cache.loadWOSR(r.url,t):Sc(r.url,t)),{engineResources:v,referenceBoundingBox:p}=Mc(h,t);return{lods:v,referenceBoundingBox:p,isEsriSymbolResource:!1,isWosr:!0}}const o=await(t.cache?t.cache.loadGLTF(r.url,t,!!t.usePBR):Ui(new Hi(t.streamDataRequester),r.url,t,t.usePBR)),a=o.model.meta?.ESRI_proxyEllipsoid,i=o.meta.isEsriSymbolResource&&a!=null&&o.meta.ESRI_webstyle==="EsriRealisticTreesStyle";i&&!o.customMeta.esriTreeRendering&&(o.customMeta.esriTreeRendering=!0,Fc(o,a));const n=!!t.usePBR,c=o.meta.isEsriSymbolResource?{usePBR:n,isSchematic:!1,treeRendering:i,mrrFactors:[...il]}:{usePBR:n,isSchematic:!1,treeRendering:!1,mrrFactors:[...Ko]},l={...t.materialParameters,treeRendering:i},{engineResources:u,referenceBoundingBox:d}=Xa(o,c,l,t.skipHighLods&&r.specifiedLodIndex==null?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:u,referenceBoundingBox:d,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1}}function Ya(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:t[4]!=null?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Xa(e,t,r,o){const a=e.model,i=new Array,n=new Map,c=new Map,l=a.lods.length,u=fo();return a.lods.forEach((d,h)=>{const v=o.skipHighLods===!0&&(l>1&&h===0||l>3&&h===1)||o.skipHighLods===!1&&o.singleLodIndex!=null&&h!==o.singleLodIndex;if(v&&h!==0)return;const p=new fn(d.name,d.lodThreshold,[0,0,0]);d.parts.forEach(g=>{const E=v?new or({}):Nc(a,g,p,t,r,n,c),{geometry:_,vertexCount:P}=Lc(g,E??new or({})),M=_.boundingInfo;M!=null&&h===0&&(Ft(u,M.bbMin),Ft(u,M.bbMax)),E!=null&&(p.stageResources.geometries.push(_),p.numberOfVertices+=P)}),v||i.push(p)}),{engineResources:i,referenceBoundingBox:u}}function Nc(e,t,r,o,a,i,n){const c=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),l=e.materials.get(t.material),u=t.attributes.texCoord0!=null,d=t.attributes.normal!=null;if(l==null)return null;const h=Dc(l.alphaMode);if(!i.has(c)){if(u){const D=(S,A=!1)=>{if(S!=null&&!n.has(S)){const O=e.textures.get(S);if(O!=null){const w=O.data;n.set(S,new Go(gr(w)?w.data:w,{...O.parameters,preMultiplyAlpha:!gr(w)&&A,encoding:gr(w)&&w.encoding!=null?w.encoding:void 0}))}}};D(l.textureColor,h!==Y.Opaque),D(l.textureNormal),D(l.textureOcclusion),D(l.textureEmissive),D(l.textureMetallicRoughness)}const p=l.color[0]**(1/Xe),g=l.color[1]**(1/Xe),E=l.color[2]**(1/Xe),_=l.emissiveFactor[0]**(1/Xe),P=l.emissiveFactor[1]**(1/Xe),M=l.emissiveFactor[2]**(1/Xe),R=l.textureColor!=null&&u?n.get(l.textureColor):null,F=ol({normalTexture:l.textureNormal,metallicRoughnessTexture:l.textureMetallicRoughness,metallicFactor:l.metallicFactor,roughnessFactor:l.roughnessFactor,emissiveTexture:l.textureEmissive,emissiveFactor:l.emissiveFactor,occlusionTexture:l.textureOcclusion}),H=l.normalTextureTransform?.scale!=null?l.normalTextureTransform?.scale:lo;i.set(c,new or({...o,transparent:h===Y.Blend,customDepthTest:vt.Lequal,textureAlphaMode:h,textureAlphaCutoff:l.alphaCutoff,diffuse:[p,g,E],ambient:[p,g,E],opacity:l.opacity,doubleSided:l.doubleSided,doubleSidedType:"winding-order",cullFace:l.doubleSided?Ae.None:Ae.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:d?Z.Attribute:Z.ScreenDerivative,castShadows:!0,receiveShadows:l.receiveShadows,receiveAmbientOcclusion:l.receiveAmbientOcclustion,textureId:R?.id,colorMixMode:l.colorMixMode,normalTextureId:l.textureNormal!=null&&u?n.get(l.textureNormal).id:void 0,textureAlphaPremultiplied:R!=null&&!!R.parameters.preMultiplyAlpha,occlusionTextureId:l.textureOcclusion!=null&&u?n.get(l.textureOcclusion).id:void 0,emissiveTextureId:l.textureEmissive!=null&&u?n.get(l.textureEmissive).id:void 0,metallicRoughnessTextureId:l.textureMetallicRoughness!=null&&u?n.get(l.textureMetallicRoughness).id:void 0,emissiveFactor:[_,P,M],mrrFactors:F?[...al]:[l.metallicFactor,l.roughnessFactor,o.mrrFactors[2]],isSchematic:F,colorTextureTransformMatrix:_t(l.colorTextureTransform),normalTextureTransformMatrix:_t(l.normalTextureTransform),scale:[H[0],H[1]],occlusionTextureTransformMatrix:_t(l.occlusionTextureTransform),emissiveTextureTransformMatrix:_t(l.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:_t(l.metallicRoughnessTextureTransform),...a}))}const v=i.get(c);if(r.stageResources.materials.push(v),u){const p=g=>{g!=null&&r.stageResources.textures.push(n.get(g))};p(l.textureColor),p(l.textureNormal),p(l.textureOcclusion),p(l.textureEmissive),p(l.textureMetallicRoughness)}return v}function Lc(e,t){const r=e.attributes.position.count,o=ji(e.indices||r,e.primitiveType),a=Ht(3*r),{typedBuffer:i,typedBufferStride:n}=e.attributes.position;zi(a,i,e.transform,3,n);const c=[[f.POSITION,new Je(a,o,3,!0)]];if(e.attributes.normal!=null){const u=Ht(3*r),{typedBuffer:d,typedBufferStride:h}=e.attributes.normal;no(lt,e.transform),Gi(u,d,lt,3,h),po(lt)&&go(u,u),c.push([f.NORMAL,new Je(u,o,3,!0)])}if(e.attributes.tangent!=null){const u=Ht(4*r),{typedBuffer:d,typedBufferStride:h}=e.attributes.tangent;Oi(lt,e.transform),Vi(u,d,lt,4,h),po(lt)&&go(u,u,4),c.push([f.TANGENT,new Je(u,o,4,!0)])}if(e.attributes.texCoord0!=null){const u=Ht(2*r),{typedBuffer:d,typedBufferStride:h}=e.attributes.texCoord0;Wi(u,d,2,h),c.push([f.UV0,new Je(u,o,2,!0)])}const l=e.attributes.color;if(l!=null){const u=new Uint8Array(4*r);l.elementCount===4?l instanceof vr?_o(u,l,255):l instanceof Gt?qi(u,l):l instanceof Di&&_o(u,l,1/256):(u.fill(255),l instanceof Vt?xo(u,l.typedBuffer,255,4,l.typedBufferStride):e.attributes.color instanceof Fi?ki(u,l.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof Bi&&xo(u,l.typedBuffer,1/256,4,l.typedBufferStride)),c.push([f.COLOR,new Je(u,o,4,!0)])}return{geometry:new Io(t,c),vertexCount:r}}const lt=ft();function Dc(e){switch(e){case"BLEND":return Y.Blend;case"MASK":return Y.Mask;case"OPAQUE":case null:case void 0:return Y.Opaque}}function Fc(e,t){for(let r=0;r<e.model.lods.length;++r){const o=e.model.lods[r];for(const a of o.parts){const i=a.attributes.normal;if(i==null)return;const n=a.attributes.position,c=n.count,l=C(),u=C(),d=C(),h=new Uint8Array(4*c),v=new Float64Array(3*c),p=Ri(zt(),a.transform);let g=0,E=0;for(let _=0;_<c;_++){n.getVec(_,u),i.getVec(_,l),ye(u,u,a.transform),Se(d,u,t.center),vo(d,d,t.radius);const P=d[2],M=ue(d),R=Math.min(.45+.55*M*M,1);vo(d,d,t.radius),p!==null&&ye(d,d,p),It(d,d),r+1!==e.model.lods.length&&e.model.lods.length>1&&sr(d,d,l,P>-1?.2:Math.min(-4*P-3.8,1)),v[g]=d[0],v[g+1]=d[1],v[g+2]=d[2],g+=3,h[E]=255*R,h[E+1]=255*R,h[E+2]=255*R,h[E+3]=255,E+=4}a.attributes.normal=new Vt(v),a.attributes.color=new Gt(h)}}}const Bc=Object.freeze(Object.defineProperty({__proto__:null,build:Aa},Symbol.toStringTag,{value:"Module"})),zc=Object.freeze(Object.defineProperty({__proto__:null,build:Ia,getRadius:er},Symbol.toStringTag,{value:"Module"})),Gc=Object.freeze(Object.defineProperty({__proto__:null,build:ja},Symbol.toStringTag,{value:"Module"})),Vc=Object.freeze(Object.defineProperty({__proto__:null,build:Wa},Symbol.toStringTag,{value:"Module"}));export{Pc as fetch,Xa as gltfToEngineResources,Ya as parseUrl};
