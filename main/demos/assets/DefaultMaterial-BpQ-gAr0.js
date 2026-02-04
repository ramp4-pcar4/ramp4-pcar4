const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./RealisticTree.glsl-CrZmYkw-.js","./main-CtmwM019.js","./preload-helper-DMGCcr4D.js","./main-DZFs8ecF.css","./HUDMaterial.glsl-FQFXrUP4.js","./mat4-Ba1tXzxc.js","./vec42-DZ0sp4MX.js","./vec4f64-DPb6J-GU.js","./projectionUtils-DKBF6_Ma.js","./projectBuffer-C2_ZDxbj.js","./zscale-kI9JnN2z.js","./meshVertexSpaceUtils-CeN7ZS2W.js","./vec32-gK3TWme0.js","./MeshLocalVertexSpace-CeosWTXF.js","./projectVectorToVector-PMDI3BQJ.js","./projectPointToVector-BeWU3FqC.js","./hydratedFeatures-BBluDIY8.js","./vec3f32-WCVSSNPR.js","./OutputColorHighlightOID.glsl-DcUKTccw.js","./enums-DQOO6RKE.js","./Texture-QG2FbAaW.js","./Cyclical-BjYazOTz.js","./Indices-X2rQqBWt.js","./BufferView-CESi4vtr.js","./vec2f64-Cgb6qxNH.js","./triangle-InVEiR1q.js","./sphere-DCy-S0e6.js","./vectorStacks-Du2BB1wg.js","./quatf64-aQ5IuZRd.js","./lineSegment-CeFx4PPK.js","./renderState-CKc66y4x.js","./glsl-B5bJgrnA.js","./lengthUtils-CPuXsfCi.js","./frustum-DgTrRaDo.js","./plane-Dey3oqKO.js","./orientedBoundingBox-inghVrgq.js","./quat-CZ1LQodR.js","./spatialReferenceEllipsoidUtils-DFw-wu05.js","./computeTranslationToOriginAndRotation-DyRw8uQA.js","./normalizeUtils-dN75LHyP.js","./normalizeUtilsCommon-oR7kIHq_.js","./utils-PyBYdGi0.js","./utils-CjyZX5Fj.js","./VertexAttributeLocations-BfZbt_DV.js","./VertexElementDescriptor-BLyltQyJ.js","./InterleavedLayout-JnvvHTvL.js","./types-BKo2foNY.js","./ShaderBuilder-DMCNkLu1.js","./memoryEstimations-R8dTJqWI.js"])))=>i.map(i=>d[i]);
import{o as L,H as et,s as At,A as Dt,c as be,r as Gt,g as Ge,P as jt,N as Bt}from"./vec32-gK3TWme0.js";import{g4 as ze,aB as x,cV as k,c$ as $e,V as Ht,dk as Wt,gs as kt,lq as Ut,hY as Yt,oa as tt,_ as c,Y as H,Z as at,ob as qt,oc as Zt,hQ as Q,hP as Fe,gy as je,gq as Xt,od as U,hX as ne,fa as re,aw as Jt,eE as Kt,aK as Qt,d$ as ea,cU as ta}from"./main-CtmwM019.js";import{a6 as E,i as he,d as me,a7 as I,a as ot,a8 as pe,a9 as rt,aa as it,ab as aa,ac as W,ad as oa,ae as ra,af as ia,f as na,ag as J,r as O,a2 as ae,D as A,E as D,ah as G,G as K,b as y,I as j,ai as sa,H as la,aj as ca,ak as nt,q as se,al as st,o as lt,am as ct,g as da,j as Ne,k as fe,s as dt,an as ua,ao as ha,u as ma,v as Be,ap as pa,aq as _,ar as Oe,as as fa,at as va,c as ee,au as ga,X as oe,av as xa,M as ba,aw as ut,ax as le,F as ht,L as mt,K as pt,ay as ft,J as vt,N as wa,T as ya,O as Ma,P as Ta,Q as _a,R as Sa,U as Ca,V as za,W as $a,Y as Fa,x as m,A as Na,az as we,aA as ye,a1 as Oa,aB as Ia,B as Va,aC as La,a3 as Ea,aD as Ra}from"./OutputColorHighlightOID.glsl-DcUKTccw.js";import{_ as ve}from"./preload-helper-DMGCcr4D.js";import{n as gt,r as Pa}from"./vec4f64-DPb6J-GU.js";import{t as Ce,Q as Ie}from"./InterleavedLayout-JnvvHTvL.js";import{t as i,n as p}from"./glsl-B5bJgrnA.js";import{s as S,T as xt,g as ce,I as He}from"./BufferView-CESi4vtr.js";import{r as Aa}from"./VertexBuffer-D3Ex4_V0.js";import{c as Da}from"./mat4-Ba1tXzxc.js";import{g as Ga}from"./plane-Dey3oqKO.js";import{a as ja,n as bt}from"./vec2f64-Cgb6qxNH.js";import{s as ge}from"./ShaderBuilder-DMCNkLu1.js";import{T as Ve,d as Le,_ as Ba}from"./renderState-CKc66y4x.js";import{n as Ha}from"./enums-DQOO6RKE.js";import{h as Wa,A as ka}from"./Texture-QG2FbAaW.js";import{s as z}from"./vec42-DZ0sp4MX.js";import{t as Ua}from"./VertexAttributeLocations-BfZbt_DV.js";function xe(a,e){switch(a.fragment.code.add(i`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`),e.normalType){case 1:a.attributes.add("normalCompressed","vec2"),a.vertex.code.add(i`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case 0:a.attributes.add("normal","vec3"),a.vertex.code.add(i`vec3 normalModel() {
return normal;
}`);break;default:ze(e.normalType);case 2:case 3:}}function Ya({code:a,uniforms:e},t){e.add(new E("dpDummy",()=>1)),a.add(i`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 hiD = hiA + hiB;
vec3 loD = loA + loB;
return  dpDummy * hiD + loD;
}`)}let qa=class extends he{constructor(e,t,o){super(e,"mat3",2,(r,s,d)=>r.setUniformMatrix3fv(e,t(s,d),o))}},Za=class extends me{constructor(){super(...arguments),this.transformWorldFromViewTH=x(),this.transformWorldFromViewTL=x(),this.transformViewFromCameraRelativeRS=k(),this.transformProjFromView=$e()}},Xa=class extends me{constructor(){super(...arguments),this.transformWorldFromModelRS=k(),this.transformWorldFromModelTH=x(),this.transformWorldFromModelTL=x()}};function wt(a,e){switch(e.normalType){case 0:case 1:a.include(xe,e),a.varyings.add("vNormalWorld","vec3"),a.varyings.add("vNormalView","vec3"),a.vertex.uniforms.add(new qa("transformNormalGlobalFromModel",t=>t.transformNormalGlobalFromModel),new I("transformNormalViewFromGlobal",t=>t.transformNormalViewFromGlobal)).code.add(i`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case 2:a.vertex.code.add(i`void forwardNormal() {}`);break;default:ze(e.normalType);case 3:}}let Ja=class extends Za{constructor(){super(...arguments),this.transformNormalViewFromGlobal=k()}},Ka=class extends Xa{constructor(){super(...arguments),this.transformNormalGlobalFromModel=k(),this.toMapSpace=gt()}},Qa=class{constructor(e,t,o){this.elementSize=t.stride,this._buffer=new Aa(e,Ce(t,1)),this.resize(o)}destroy(){this._buffer.dispose()}get capacity(){return this._capacity}get array(){return this._array}get buffer(){return this._buffer}get usedMemory(){return this._array.byteLength+this._buffer.usedMemory}copyRange(e,t,o,r=0){const s=new Uint8Array(this.array,e*this.elementSize,(t-e)*this.elementSize);new Uint8Array(o.array,r*this.elementSize).set(s)}transferAll(){this._buffer.setData(this._array)}transferRange(e,t){const o=e*this.elementSize,r=t*this.elementSize;this._buffer.setSubData(new Uint8Array(this._array),o,o,r)}resize(e){const t=e*this.elementSize,o=new ArrayBuffer(t);this._array&&(e>=this._capacity?new Uint8Array(o).set(new Uint8Array(this._array)):new Uint8Array(o).set(new Uint8Array(this._array).subarray(0,e*this.elementSize))),this._array=o,this._buffer.setSize(t),this._capacity=e}};class We{constructor(e){this.localTransform=e.localTransform,this.globalTransform=e.globalTransform,this.modelOrigin=e.modelOrigin,this.model=e.instanceModel,this.modelNormal=e.instanceModelNormal,this.modelScaleFactors=e.modelScaleFactors,this.boundingSphere=e.boundingSphere,this.featureAttribute=e.getField("instanceFeatureAttribute",xt),this.color=e.getField("instanceColor",ce),this.olidColor=e.getField("instanceOlidColor",ce),this.state=e.getField("state",He),this.lodLevel=e.getField("lodLevel",He)}}let q=class extends Ht{constructor(e,t){super(e),this.events=new Wt,this._capacity=0,this._size=0,this._next=0,this._highlightOptionsMap=new Map,this._highlightOptionsMapPrev=new Map,this._layout=ao(t),this._capacity=de,this._buffer=this._layout.createBuffer(this._capacity),this._view=new We(this._buffer)}get capacity(){return this._capacity}get size(){return this._size}get view(){return this._view}addInstance(){this._size+1>this._capacity&&this._grow();const e=this._findSlot();return this._view.state.set(e,1),this._size++,this.events.emit("instances-changed"),e}removeInstance(e){const t=this._view.state;S(e>=0&&e<this._capacity&&!!(1&t.get(e)),"invalid instance handle"),this._getStateFlag(e,18)?this._setStateFlags(e,32):this.freeInstance(e),this.events.emit("instances-changed")}freeInstance(e){const t=this._view.state;S(e>=0&&e<this._capacity&&!!(1&t.get(e)),"invalid instance handle"),t.set(e,0),this._size--}setLocalTransform(e,t,o=!0){this._view.localTransform.setMat(e,t),o&&this.updateModelTransform(e)}getLocalTransform(e,t){this._view.localTransform.getMat(e,t)}setGlobalTransform(e,t,o=!0){this._view.globalTransform.setMat(e,t),o&&this.updateModelTransform(e)}getGlobalTransform(e,t){this._view.globalTransform.getMat(e,t)}updateModelTransform(e){const t=this._view,o=w,r=T;t.localTransform.getMat(e,ke),t.globalTransform.getMat(e,Me);const s=Da(Me,Me,ke);L(o,s[12],s[13],s[14]),t.modelOrigin.setVec(e,o),kt(r,s),t.model.setMat(e,r);const d=Ga(w,s);d.sort(),t.modelScaleFactors.set(e,0,d[1]),t.modelScaleFactors.set(e,1,d[2]),Ut(r,r),Yt(r,r),t.modelNormal.setMat(e,r),this._setStateFlags(e,64),this.events.emit("instance-transform-changed",{index:e})}getModelTransform(e,t){const o=this._view;o.model.getMat(e,T),o.modelOrigin.getVec(e,w),t[0]=T[0],t[1]=T[1],t[2]=T[2],t[3]=0,t[4]=T[3],t[5]=T[4],t[6]=T[5],t[7]=0,t[8]=T[6],t[9]=T[7],t[10]=T[8],t[11]=0,t[12]=w[0],t[13]=w[1],t[14]=w[2],t[15]=1}applyShaderTransformation(e,t){this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,t)}getCombinedModelTransform(e,t){return this.getModelTransform(e,t),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,t),t}getCombinedLocalTransform(e,t){this._view.localTransform.getMat(e,t),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,t)}getCombinedMaxScaleFactor(e){let t=this._view.modelScaleFactors.get(e,1);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(w,this,e),t*=Math.max(w[0],w[1],w[2])),t}getCombinedMedianScaleFactor(e){let t=this._view.modelScaleFactors.get(e,0);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(w,this,e),t*=eo(w[0],w[1],w[2])),t}getModel(e,t){this._view.model.getMat(e,t)}setFeatureAttribute(e,t){this._view.featureAttribute?.setVec(e,t)}getFeatureAttribute(e,t){this._view.featureAttribute?.getVec(e,t)}setColor(e,t){this._view.color?.setVec(e,t)}setObjectAndLayerIdColor(e,t){this._view.olidColor?.setVec(e,t)}setVisible(e,t){t!==this.getVisible(e)&&(this._setStateFlag(e,4,t),this.events.emit("instance-visibility-changed",{index:e}))}getVisible(e){return this._getStateFlag(e,4)}setHighlight(e,t){const{_highlightOptionsMap:o}=this,r=o.get(e);t?t!==r&&(o.set(e,t),this._setStateFlag(e,8,!0),this.events.emit("instance-highlight-changed")):r&&(o.delete(e),this._setStateFlag(e,8,!1),this.events.emit("instance-highlight-changed"))}get highlightOptionsMap(){return this._highlightOptionsMap}getHighlightStateFlag(e){return this._getStateFlag(e,8)}geHighlightOptionsPrev(e){const t=this._highlightOptionsMapPrev.get(e)??null;return this._highlightOptionsMapPrev.delete(e),t}getHighlightName(e){const t=this.highlightOptionsMap.get(e)??null;return t?this._highlightOptionsMapPrev.set(e,t):this._highlightOptionsMapPrev.delete(e),t}getState(e){return this._view.state.get(e)}getLodLevel(e){return this._view.lodLevel.get(e)}countFlags(e){let t=0;for(let o=0;o<this._capacity;++o)this.getState(o)&e&&++t;return t}_setStateFlags(e,t){const o=this._view.state;t=o.get(e)|t,o.set(e,t)}_clearStateFlags(e,t){const o=this._view.state;t=o.get(e)&~t,o.set(e,t)}_setStateFlag(e,t,o){o?this._setStateFlags(e,t):this._clearStateFlags(e,t)}_getStateFlag(e,t){return!!(this._view.state.get(e)&t)}_grow(){this._capacity=Math.max(de,Math.floor(this._capacity*tt)),this._buffer=this._layout.createBuffer(this._capacity).copyFrom(this._buffer),this._view=new We(this._buffer)}_findSlot(){const e=this._view.state;let t=this._next;for(;1&e.get(t);)t=t+1===this._capacity?0:t+1;return this._next=t+1===this._capacity?0:t+1,t}};function eo(a,e,t){return Math.max(Math.min(a,e),Math.min(Math.max(a,e),t))}c([H({constructOnly:!0})],q.prototype,"shaderTransformation",void 0),c([H()],q.prototype,"_size",void 0),c([H({readOnly:!0})],q.prototype,"size",null),q=c([at("esri.views.3d.webgl-engine.lib.lodRendering.InstanceData")],q);const to=Ie().mat4f64("localTransform").mat4f64("globalTransform").vec4f64("boundingSphere").vec3f64("modelOrigin").mat3f("instanceModel").mat3f("instanceModelNormal").vec2f("modelScaleFactors");function ao(a){return yt(to.clone(),a).u8("state").u8("lodLevel")}function yt(a,e){return e.instancedFeatureAttribute&&a.vec4f("instanceFeatureAttribute"),e.instancedColor&&a.vec4u8("instanceColor"),ot()&&a.vec4u8("instanceOlidColor"),a}const w=x(),T=k(),ke=$e(),Me=$e(),de=64;let oo=class{constructor(e){this.model=e.instanceModel,this.modelNormal=e.instanceModelNormal,this.modelOriginHi=e.instanceModelOriginHi,this.modelOriginLo=e.instanceModelOriginLo,this.featureAttribute=e.getField("instanceFeatureAttribute",xt),this.color=e.getField("instanceColor",ce),this.olidColor=e.getField("instanceOlidColor",ce)}},Nr=class{constructor(e,t){this._rctx=e,this._layout=t,this._headIndex=0,this._tailIndex=0,this._firstIndex=null,this._captureFirstIndex=!0,this._updating=!1,this._prevHeadIndex=0,this._resized=!1,this._capacity=1}destroy(){this._buffer&&this._buffer.destroy()}get buffer(){return this._buffer.buffer}get view(){return this._view}get capacity(){return this._capacity}get size(){const e=this._headIndex,t=this._tailIndex;return e>=t?e-t:e+this._capacity-t}get isEmpty(){return this._headIndex===this._tailIndex}get isFull(){return this._tailIndex===(this._headIndex+1)%this._capacity}get headIndex(){return this._headIndex}get tailIndex(){return this._tailIndex}get firstIndex(){return this._firstIndex}get usedMemory(){return this._buffer?.usedMemory??0}reset(){this._headIndex=0,this._tailIndex=0,this._firstIndex=null}startUpdateCycle(){this._captureFirstIndex=!0}beginUpdate(){S(!this._updating,"already updating"),this._updating=!0,this._prevHeadIndex=this._headIndex}endUpdate(){S(this._updating,"not updating"),this.size<qt*this.capacity&&this._shrink(),this._resized?(this._buffer.transferAll(),this._resized=!1):this._transferRange(this._prevHeadIndex,this._headIndex),this._updating=!1}allocateHead(){S(this._updating,"not updating"),this.isFull&&this._grow();const e=this.headIndex;return this._captureFirstIndex&&(this._firstIndex=e,this._captureFirstIndex=!1),this._incrementHead(),S(this._headIndex!==this._tailIndex,"invalid pointers"),e}freeTail(){S(this._updating,"not updating"),S(this.size>0,"invalid size");const e=this._tailIndex===this._firstIndex;this._incrementTail(),e&&(this._firstIndex=this._tailIndex)}_grow(){const e=Math.max(de,Math.floor(this._capacity*tt));this._resize(e)}_shrink(){const e=Math.max(de,Math.floor(this._capacity*Zt));this._resize(e)}_resize(e){if(S(this._updating,"not updating"),e===this._capacity)return;const t=new Qa(this._rctx,this._layout,e);if(this._buffer){this._firstIndex&&(this._firstIndex=(this._firstIndex+this._capacity-this._tailIndex)%this._capacity);const o=this.size,r=this._compactInstances(t);S(r===o,"invalid compaction"),this._buffer.destroy(),this._tailIndex=0,this._headIndex=r,this._prevHeadIndex=0}this._resized=!0,this._capacity=e,this._buffer=t,this._view=new oo(this._layout.createView(this._buffer.array))}_compactInstances(e){const t=this._headIndex,o=this._tailIndex;return o<t?(this._buffer.copyRange(o,t,e),t-o):o>t?(this._buffer.copyRange(o,this._capacity,e),t>0&&this._buffer.copyRange(0,t,e,this._capacity-o),t+(this._capacity-o)):0}_incrementHead(e=1){this._headIndex=(this._headIndex+e)%this._capacity}_incrementTail(e=1){this._tailIndex=(this._tailIndex+e)%this._capacity}_transferRange(e,t){e<t?this._buffer.transferRange(e,t):e>t&&(t>0&&this._buffer.transferRange(0,t),this._buffer.transferRange(e,this._capacity))}};const ro=Ie().vec3f("instanceModelOriginHi").vec3f("instanceModelOriginLo").mat3f("instanceModel").mat3f("instanceModelNormal");function io(a){return yt(ro.clone(),a)}function Ir({normalTexture:a,metallicRoughnessTexture:e,metallicFactor:t,roughnessFactor:o,emissiveTexture:r,emissiveFactor:s,occlusionTexture:d}){return a==null&&e==null&&r==null&&(s==null||et(s,Fe))&&d==null&&(o==null||o===1)&&(t==null||t===1)}const no=Q(1,1,.5),Vr=Q(0,.6,.2),Lr=Q(0,1,.2);function Mt(a){a.vertex.code.add(i`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function so(a){a.varyings.add("linearDepth","float",{invariant:!0})}function lo(a,e){so(a),a.vertex.code.add(i`
    void forwardLinearDepth(float _linearDepth) { ${p(e,"linearDepth = _linearDepth;")} }
  `)}function Tt(a,e){e.instancedColor?(a.attributes.add("instanceColor","vec4"),a.vertex.include(pe),a.vertex.include(rt),a.vertex.include(it),a.vertex.code.add(i`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${"instanceColor"}));
      }
    `)):a.vertex.code.add(i`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}const Ue=k();function _t(a,e){const{hasModelTransformation:t,instancedDoublePrecision:o,instanced:r,output:s,hasVertexTangents:d}=e;t&&(a.vertex.uniforms.add(new aa("model",l=>l.modelTransformation??je)),a.vertex.uniforms.add(new I("normalLocalOriginFromModel",l=>(Xt(Ue,l.modelTransformation??je),Ue)))),r&&o&&(a.attributes.add("instanceModelOriginHi","vec3"),a.attributes.add("instanceModelOriginLo","vec3"),a.attributes.add("instanceModel","mat3"),a.attributes.add("instanceModelNormal","mat3"));const n=a.vertex;o&&(n.include(Ya,e),n.uniforms.add(new W("viewOriginHi",l=>oa(L(ie,l.camera.viewInverseTransposeMatrix[3],l.camera.viewInverseTransposeMatrix[7],l.camera.viewInverseTransposeMatrix[11]),ie)),new W("viewOriginLo",l=>ra(L(ie,l.camera.viewInverseTransposeMatrix[3],l.camera.viewInverseTransposeMatrix[7],l.camera.viewInverseTransposeMatrix[11]),ie)))),n.code.add(i`
    vec3 getVertexInLocalOriginSpace() {
      return ${t?o?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":o?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${o?i`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),n.code.add(i`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${t?o?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":o?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),s===3&&(ia(n),n.code.add(i`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${t?o?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":o?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),d&&n.code.add(i`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t?o?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":o?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const ie=x();function St(a,e){a.varyings.add("colorMixMode","int"),a.varyings.add("opacityMixMode","int"),a.vertex.uniforms.add(new na("symbolColorMixMode",t=>J[t.colorMixMode])),e.hasSymbolColors?(a.vertex.include(pe),a.vertex.include(rt),a.vertex.include(it),a.attributes.add("symbolColor","vec4"),a.vertex.code.add(i`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${"symbolColor"}));
    }
  `)):a.vertex.code.add(i`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),a.vertex.code.add(i`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = mask.r ? ${i.int(J.ignore)} : symbolColorMixMode;
      opacityMixMode = mask.a ? ${i.int(J.ignore)} : symbolColorMixMode;
    }
  `)}function co(a,e){switch(e.output){case 4:case 5:case 6:case 7:a.fragment.code.add(i`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`);break;case 8:a.fragment.code.add(i`void outputDepth(float _linearDepth){
gl_FragDepth = _linearDepth;
}`)}}function B(a,e){uo(a,e,new O("textureAlphaCutoff",t=>t.textureAlphaCutoff))}function uo(a,e,t){const o=a.fragment,r=e.alphaDiscardMode,s=r===0;r!==2&&r!==3||o.uniforms.add(t),o.code.add(i`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${r===1?"color.a = 1.0;":`if (color.a < ${s?i.float(ae):"textureAlphaCutoff"}) {
              discard;
             } ${p(r===2,"else { color.a = 1.0; }")}`}
    }
  `)}function Ct(a,e){const{vertex:t,fragment:o,varyings:r}=a,{hasColorTexture:s,alphaDiscardMode:d}=e,n=s&&d!==1,{output:l,normalType:u,hasColorTextureTransform:f}=e;switch(l){case 2:A(t,e),a.include(D),o.include(j,e),a.include(G,e),n&&o.uniforms.add(new y("tex",v=>v.texture)),t.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),a.include(B,e),o.main.add(i`
        discardBySlice(vpos);
        ${p(n,i`vec4 texColor = texture(tex, ${f?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case 4:case 5:case 6:case 7:case 10:A(t,e),a.include(D),a.include(G,e),a.include(K,e),a.include(co,e),o.include(j,e),a.include(la,e),ca(a),r.add("depth","float",{invariant:!0}),n&&o.uniforms.add(new y("tex",v=>v.texture)),t.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),a.include(B,e),o.main.add(i`
        discardBySlice(vpos);
        ${p(n,i`vec4 texColor = texture(tex, ${f?"colorUV":"vuv0"});
               discardOrAdjustAlpha(texColor);`)}
        ${l===10?i`outputObjectAndLayerIdColor();`:i`outputDepth(depth);`}`);break;case 3:{A(t,e),a.include(D),a.include(xe,e),a.include(wt,e),a.include(G,e),a.include(K,e),n&&o.uniforms.add(new y("tex",M=>M.texture)),u===2&&r.add("vPositionView","vec3",{invariant:!0});const v=u===0||u===1;t.main.add(i`
        vpos = getVertexInLocalOriginSpace();
        ${v?i`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:i`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),o.include(j,e),a.include(B,e),o.main.add(i`
        discardBySlice(vpos);
        ${p(n,i`vec4 texColor = texture(tex, ${f?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${u===2?i`vec3 normal = screenDerivativeNormal(vPositionView);`:i`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case 9:A(t,e),a.include(D),a.include(G,e),a.include(K,e),n&&o.uniforms.add(new y("tex",v=>v.texture)),t.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),o.include(j,e),a.include(B,e),a.include(sa,e),o.main.add(i`
        discardBySlice(vpos);
        ${p(n,i`vec4 texColor = texture(tex, ${f?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function ho(a,e){const t=a.fragment,{hasVertexTangents:o,doubleSidedMode:r,hasNormalTexture:s,textureCoordinateType:d,bindType:n,hasNormalTextureTransform:l}=e;o?(a.attributes.add("tangent","vec4"),a.varyings.add("vTangent","vec4"),r===2?t.code.add(i`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):t.code.add(i`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):t.code.add(i`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),s&&d!==0&&(a.include(nt,e),t.uniforms.add(n===1?new y("normalTexture",u=>u.textureNormal):new se("normalTexture",u=>u.textureNormal)),l&&(t.uniforms.add(new st("scale",u=>u.scale??ja)),t.uniforms.add(new I("normalTextureTransformMatrix",u=>u.normalTextureTransformMatrix??U))),t.code.add(i`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),l&&t.code.add(i`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),t.code.add(i`return tangentSpace * rawNormal;
}`))}const mo=3e5,Ye=5e5,Te=4;function po(){const a=new ge,e=a.fragment;a.include(lt);const t=(Te+1)/2,o=1/(2*t*t);return e.include(ct),e.uniforms.add(new y("depthMap",r=>r.depthTexture),new se("tex",r=>r.colorTexture),new da("blurSize",r=>r.blurSize),new O("projScale",(r,s)=>{const d=s.camera.distance;return d>5e4?Math.max(0,r.projScale-(d-5e4)):r.projScale})),e.code.add(i`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${i.float(o)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),a.outputs.add("fragBlur","float"),e.main.add(i`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${i.int(Te)}; r <= ${i.int(Te)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),a}const fo=Object.freeze(Object.defineProperty({__proto__:null,build:po},Symbol.toStringTag,{value:"Module"}));let qe=class extends Ne{constructor(e,t){super(e,t,new fe(fo,()=>ve(()=>import("./RealisticTree.glsl-CrZmYkw-.js").then(o=>o.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]),import.meta.url)),dt)}initializePipeline(){return Ve({colorWrite:Le})}};const vo="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let go=class extends me{constructor(){super(...arguments),this.projScale=1}},xo=class extends go{constructor(){super(...arguments),this.intensity=1}},bo=class extends me{},wo=class extends bo{constructor(){super(...arguments),this.blurSize=bt()}};const Ze=16;function yo(){const a=new ge,e=a.fragment;return a.include(lt),a.include(ua),e.include(ct),e.uniforms.add(new E("radius",t=>Ee(t.camera))).code.add(i`vec3 sphere[16] = vec3[16](
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
}`),e.code.add(i`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),a.outputs.add("fragOcclusion","float"),e.uniforms.add(new y("normalMap",t=>t.normalTexture),new y("depthMap",t=>t.depthTexture),new O("projScale",t=>t.projScale),new y("rnm",t=>t.noiseTexture),new st("rnmScale",(t,o)=>ne(Xe,o.camera.fullWidth/t.noiseTexture.descriptor.width,o.camera.fullHeight/t.noiseTexture.descriptor.height)),new O("intensity",t=>t.intensity),new ha("screenSize",t=>ne(Xe,t.camera.fullWidth,t.camera.fullHeight))).main.add(i`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragOcclusion = 1.0;
      return;
    }

    // get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 norm4 = texelFetch(normalMap, iuv, 0);
    if(norm4.a != 1.0) {
      fragOcclusion = 1.0;
      return;
    }
    vec3 norm = normalize(norm4.xyz * 2.0 - 1.0);

    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

    float sum = 0.0;
    vec3 tapPixelPos;

    vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

    // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
    // bug or deviation from CE somewhere else?
    float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

    for(int i = 0; i < ${i.int(Ze)}; ++i) {
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
    float A = max(1.0 - sum * intensity / float(${i.int(Ze)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

    fragOcclusion = A;
  `),a}function Ee(a){return Math.max(10,20*a.computeScreenPixelSizeAtDist(Math.abs(4*a.relativeElevation)))}const Xe=bt(),Mo=Object.freeze(Object.defineProperty({__proto__:null,build:yo,getRadius:Ee},Symbol.toStringTag,{value:"Module"}));let Je=class extends Ne{constructor(e,t){super(e,t,new fe(Mo,()=>ve(()=>import("./RealisticTree.glsl-CrZmYkw-.js").then(o=>o.d),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]),import.meta.url)),dt)}initializePipeline(){return Ve({colorWrite:Le})}};const X=2;let Z=class extends ma{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=Be.SSAO,this.isEnabled=()=>!1,this._enableTime=re(0),this._passParameters=new xo,this._drawParameters=new wo}initialize(){const e=Uint8Array.from(atob(vo),o=>o.charCodeAt(0)),t=new Wa(32);t.wrapMode=33071,t.pixelFormat=6407,t.wrapMode=10497,t.hasMipmap=!0,this._passParameters.noiseTexture=new ka(this.renderingContext,t,e),this.techniques.precompile(Je),this.techniques.precompile(qe),this.addHandles(Jt(()=>this.isEnabled(),()=>this._enableTime=re(0)))}destroy(){this._passParameters.noiseTexture=Kt(this._passParameters.noiseTexture)}render(e){const t=e.find(({name:Pt})=>Pt==="normals"),o=t?.getTexture(),r=t?.getTexture(Ha);if(!o||!r)return;const s=this.techniques.get(Je),d=this.techniques.get(qe);if(!s.compiled||!d.compiled)return this._enableTime=re(performance.now()),void this.requestRender(1);this._enableTime===0&&(this._enableTime=re(performance.now()));const n=this.renderingContext,l=this.view.qualitySettings.fadeDuration,u=this.bindParameters,f=u.camera,v=f.relativeElevation,M=Qt((Ye-v)/(Ye-mo),0,1),C=l>0?Math.min(l,performance.now()-this._enableTime)/l:1,g=C*M;this._passParameters.normalTexture=o,this._passParameters.depthTexture=r,this._passParameters.projScale=1/f.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*To/Ee(f)**6*g;const F=f.fullViewport[2],N=f.fullViewport[3],Y=this.fboCache.acquire(F,N,"ssao input",2);n.bindFramebuffer(Y.fbo),n.setViewport(0,0,F,N),n.bindTechnique(s,u,this._passParameters,this._drawParameters),n.screen.draw();const R=Math.round(F/X),P=Math.round(N/X),V=this.fboCache.acquire(R,P,"ssao blur",0);n.bindFramebuffer(V.fbo),this._drawParameters.colorTexture=Y.getTexture(),ne(this._drawParameters.blurSize,0,X/N),n.bindTechnique(d,u,this._passParameters,this._drawParameters),n.setViewport(0,0,R,P),n.screen.draw(),Y.release();const b=this.fboCache.acquire(R,P,Be.SSAO,0);return n.bindFramebuffer(b.fbo),n.setViewport(0,0,F,N),n.setClearColor(1,1,1,0),n.clear(16384),this._drawParameters.colorTexture=V.getTexture(),ne(this._drawParameters.blurSize,X/F,0),n.bindTechnique(d,u,this._passParameters,this._drawParameters),n.setViewport(0,0,R,P),n.screen.draw(),n.setViewport4fv(f.fullViewport),V.release(),C<1&&this.requestRender(2),b}};c([H()],Z.prototype,"consumes",void 0),c([H()],Z.prototype,"produces",void 0),c([H({constructOnly:!0})],Z.prototype,"isEnabled",void 0),Z=c([at("esri.views.3d.webgl-engine.effects.ssao.SSAO")],Z);const To=.5;function Re(a,e){e.receiveAmbientOcclusion?(a.uniforms.add(new pa("ssaoTex",t=>t.ssao?.getTexture())),a.constants.add("blurSizePixelsInverse","float",1/X),a.code.add(i`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):a.code.add(i`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function _o(a,e){const t=a.fragment,o=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;o===0?(t.uniforms.add(new W("lightingAmbientSH0",({lighting:r})=>L(Ke,r.sh.r[0],r.sh.g[0],r.sh.b[0]))),t.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===1?(t.uniforms.add(new _("lightingAmbientSH_R",({lighting:r})=>z($,r.sh.r[0],r.sh.r[1],r.sh.r[2],r.sh.r[3])),new _("lightingAmbientSH_G",({lighting:r})=>z($,r.sh.g[0],r.sh.g[1],r.sh.g[2],r.sh.g[3])),new _("lightingAmbientSH_B",({lighting:r})=>z($,r.sh.b[0],r.sh.b[1],r.sh.b[2],r.sh.b[3]))),t.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):o===2&&(t.uniforms.add(new W("lightingAmbientSH0",({lighting:r})=>L(Ke,r.sh.r[0],r.sh.g[0],r.sh.b[0])),new _("lightingAmbientSH_R1",({lighting:r})=>z($,r.sh.r[1],r.sh.r[2],r.sh.r[3],r.sh.r[4])),new _("lightingAmbientSH_G1",({lighting:r})=>z($,r.sh.g[1],r.sh.g[2],r.sh.g[3],r.sh.g[4])),new _("lightingAmbientSH_B1",({lighting:r})=>z($,r.sh.b[1],r.sh.b[2],r.sh.b[3],r.sh.b[4])),new _("lightingAmbientSH_R2",({lighting:r})=>z($,r.sh.r[5],r.sh.r[6],r.sh.r[7],r.sh.r[8])),new _("lightingAmbientSH_G2",({lighting:r})=>z($,r.sh.g[5],r.sh.g[6],r.sh.g[7],r.sh.g[8])),new _("lightingAmbientSH_B2",({lighting:r})=>z($,r.sh.b[5],r.sh.b[6],r.sh.b[7],r.sh.b[8]))),t.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),e.pbrMode!==1&&e.pbrMode!==2||t.code.add(i`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Ke=x(),$=gt();function ue(a){a.uniforms.add(new W("mainLightDirection",e=>e.lighting.mainLight.direction))}function te(a){a.uniforms.add(new W("mainLightIntensity",e=>e.lighting.mainLight.intensity))}function So(a){ue(a.fragment),te(a.fragment),a.fragment.code.add(i`vec3 applyShading(vec3 shadingNormal, float shadow) {
float dotVal = clamp(dot(shadingNormal, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function Co(a){a.code.add(i`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG) {
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),a.code.add(i`float integratedRadiance(float cosTheta2, float roughness) {
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),a.code.add(i`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness) {
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Pe(a,e){a.include(Oe),e.pbrMode!==1&&e.pbrMode!==2&&e.pbrMode!==5&&e.pbrMode!==6||(a.code.add(i`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),a.code.add(i`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==1&&e.pbrMode!==2||(a.include(Co),a.code.add(i`struct PBRShadingInfo
{
float NdotV;
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
};`),a.code.add(i`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`))}function Br(a,e){a.include(Oe),a.code.add(i`
  struct PBRShadingWater {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),a.code.add(i`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),a.code.add(i`float normalDistributionWater(float NdotH, float roughness) {
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),a.code.add(i`float geometricOcclusionKelemen(float LoH) {
return 0.25 / (LoH * LoH);
}`),a.code.add(i`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max) {
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}function zo(a){a.code.add(i`float mapChannel(float x, vec2 p) {
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),a.code.add(i`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}function $o(a){a.code.add(i`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`)}function Ae(a){a.constants.add("ambientBoostFactor","float",va)}function De(a){a.uniforms.add(new E("lightingGlobalFactor",e=>e.lighting.globalFactor))}function zt(a,e){const t=a.fragment,{pbrMode:o,spherical:r,hasColorTexture:s}=e;t.include(Re,e),o!==0&&t.include(Pe,e),a.include(_o,e),t.include(Oe),t.include($o,e);const d=!(o===2&&!s);switch(d&&t.include(zo),t.code.add(i`
    const float GAMMA_SRGB = ${i.float(ea)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${p(o!==0,"const float GROUND_REFLECTANCE = 0.2;")}
  `),Ae(t),De(t),ue(t),t.code.add(i`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${r?i`normalize(vPosWorld)`:i`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),te(t),t.code.add(i`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),o){case 0:case 4:case 3:a.include(So),t.code.add(i`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case 1:case 2:t.code.add(i`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
vec3 viewDir, vec3 groundNormal, vec3 mrr, float additionalAmbientIrradiance) {
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, groundNormal), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, groundNormal), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),t.code.add(i`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?t.uniforms.add(new fa("hasFillLights",n=>n.enableFillLights)):t.constants.add("hasFillLights","bool",!1),t.code.add(i`vec3 ambientDir = vec3(5.0 * groundNormal[1] - groundNormal[0] * groundNormal[2], - 5.0 * groundNormal[0] - groundNormal[2] * groundNormal[1], groundNormal[1] * groundNormal[1] + groundNormal[0] * groundNormal[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),t.uniforms.add(new E("lightingSpecularStrength",n=>n.lighting.mainLight.specularStrength),new E("lightingEnvironmentStrength",n=>n.lighting.mainLight.environmentStrength)).code.add(i`vec3 horizonRingDir = inputs.RdotNG * groundNormal - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE);`),t.code.add(i`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent;
        ${d?i`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:i`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case 5:case 6:ue(t),te(t),t.code.add(i`const float roughnessTerrain = 0.5;
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
}`)}}function Fo(a,e){const t=a.fragment;switch(t.code.add(i`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case 0:t.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case 1:t.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case 2:t.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:ze(e.doubleSidedMode);case 3:}}function $t(a,e){const t=e.pbrMode,o=a.fragment;if(t!==2&&t!==0&&t!==1)return void o.code.add(i`void applyPBRFactors() {}`);if(t===0)return void o.code.add(i`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(t===2)return void o.code.add(i`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:r,hasMetallicRoughnessTextureTransform:s,hasOcclusionTexture:d,hasOcclusionTextureTransform:n,bindType:l}=e;(r||d)&&a.include(nt,e),o.code.add(i`vec3 mrr;
float occlusion;`),r&&o.uniforms.add(l===1?new y("texMetallicRoughness",u=>u.textureMetallicRoughness):new se("texMetallicRoughness",u=>u.textureMetallicRoughness)),d&&o.uniforms.add(l===1?new y("texOcclusion",u=>u.textureOcclusion):new se("texOcclusion",u=>u.textureOcclusion)),o.uniforms.add(l===1?new ee("mrrFactors",u=>u.mrrFactors):new ga("mrrFactors",u=>u.mrrFactors)),o.code.add(i`
    ${p(r,i`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${p(d,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${d?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${p(r,`applyMetallicRoughness(${s?"metallicRoughnessUV":"vuv0"});`)}
      ${p(d,`applyOcclusion(${n?"occlusionUV":"vuv0"});`)}
    }
  `)}function No(a,e){const t=oe(e.output)&&e.receiveShadows;t&&lo(a,!0),a.vertex.code.add(i`
    void forwardLinearDepthToReadShadowMap() { ${p(t,"forwardLinearDepth(gl_Position.w);")} }
  `)}let Oo=class extends he{constructor(e,t,o,r){super(e,"mat4",2,(s,d,n,l)=>s.setUniformMatrices4fv(e,t(d,n,l),r),o)}},Io=class extends he{constructor(e,t,o,r){super(e,"mat4",1,(s,d,n)=>s.setUniformMatrices4fv(e,t(d,n),r),o)}};function Vo(a){a.fragment.uniforms.add(new Io("shadowMapMatrix",(e,t)=>t.shadowMap.getShadowMapMatrices(e.origin),4)),Ft(a)}function Lo(a){a.fragment.uniforms.add(new Oo("shadowMapMatrix",(e,t)=>t.shadowMap.getShadowMapMatrices(e.origin),4)),Ft(a)}function Ft(a){const{fragment:e}=a;e.uniforms.add(new _("cascadeDistances",t=>t.shadowMap.cascadeDistances),new xa("numCascades",t=>t.shadowMap.numCascades)),e.code.add(i`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
vec3 calculateUVZShadow(in vec3 _worldPos, in float _linearDepth, in ivec2 shadowMapSize) {
int i = _linearDepth < cascadeDistances[1] ? 0 : _linearDepth < cascadeDistances[2] ? 1 : _linearDepth < cascadeDistances[3] ? 2 : 3;
if (i >= numCascades) {
return invalidShadowmapUVZ;
}
mat4 shadowMatrix = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
vec3 lvpos = lightSpacePosition(_worldPos, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
return invalidShadowmapUVZ;
}
vec2 uvShadow = cascadeCoordinates(i, shadowMapSize, lvpos);
return vec3(uvShadow, lvpos.z);
}`)}function Eo(a){a.fragment.code.add(i`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}let Ro=class extends he{constructor(e,t){super(e,"sampler2DShadow",0,(o,r)=>o.bindTexture(e,t(r)))}};function Nt(a,e){e.receiveShadows&&a.include(Vo),It(a,e)}function Ot(a,e){e.receiveShadows&&a.include(Lo),It(a,e)}function It(a,e){a.fragment.uniforms.add(new E("lightingGlobalFactor",r=>r.lighting.globalFactor));const{receiveShadows:t,spherical:o}=e;a.include(No,e),t&&Po(a),a.fragment.code.add(i`
    float readShadow(float additionalAmbientScale, vec3 vpos) {
      return ${t?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":p(o,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};
    }
  `)}function Po(a){a.include(Eo),a.fragment.uniforms.add(new Ro("shadowMap",({shadowMap:e})=>e.depthTexture)).code.add(i`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap,0));
if (uvzShadow.z < 0.0) {
return 0.0;
}
return readShadowMapUVZ(uvzShadow, shadowMap);
}`)}function Ao(a,e){e.hasColorTextureTransform?(a.varyings.add("colorUV","vec2"),a.vertex.uniforms.add(new I("colorTextureTransformMatrix",t=>t.colorTextureTransformMatrix??U)).code.add(i`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):a.vertex.code.add(i`void forwardColorUV(){}`)}function Do(a,e){e.hasNormalTextureTransform&&e.textureCoordinateType!==0?(a.varyings.add("normalUV","vec2"),a.vertex.uniforms.add(new I("normalTextureTransformMatrix",t=>t.normalTextureTransformMatrix??U)).code.add(i`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):a.vertex.code.add(i`void forwardNormalUV(){}`)}function Go(a,e){e.hasEmissionTextureTransform&&e.textureCoordinateType!==0?(a.varyings.add("emissiveUV","vec2"),a.vertex.uniforms.add(new I("emissiveTextureTransformMatrix",t=>t.emissiveTextureTransformMatrix??U)).code.add(i`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):a.vertex.code.add(i`void forwardEmissiveUV(){}`)}function jo(a,e){e.hasOcclusionTextureTransform&&e.textureCoordinateType!==0?(a.varyings.add("occlusionUV","vec2"),a.vertex.uniforms.add(new I("occlusionTextureTransformMatrix",t=>t.occlusionTextureTransformMatrix??U)).code.add(i`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):a.vertex.code.add(i`void forwardOcclusionUV(){}`)}function Bo(a,e){e.hasMetallicRoughnessTextureTransform&&e.textureCoordinateType!==0?(a.varyings.add("metallicRoughnessUV","vec2"),a.vertex.uniforms.add(new I("metallicRoughnessTextureTransformMatrix",t=>t.metallicRoughnessTextureTransformMatrix??U)).code.add(i`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):a.vertex.code.add(i`void forwardMetallicRoughnessUV(){}`)}function Vt(a){a.include(ba),a.code.add(i`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.int(1)}) {
        return allMixed;
      }
      if (mode == ${i.int(2)}) {
        return internalMixed;
      }
      if (mode == ${i.int(3)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.int(2)}) {
        return internalMixed;
      }
      if (mode == ${i.int(3)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function Lt(a,e){e.snowCover&&(a.uniforms.add(new E("snowCover",t=>t.snowCover)).code.add(i`float getSnow(vec3 normal, vec3 groundNormal) {
return smoothstep(0.5, 0.55, dot(normal, groundNormal)) * snowCover;
}
float getRealisticTreeSnow(vec3 faceNormal, vec3 shadingNormal, vec3 groundNormal) {
float snow = min(1.0, smoothstep(0.5, 0.55, dot(faceNormal, groundNormal)) +
smoothstep(0.5, 0.55, dot(-faceNormal, groundNormal)) +
smoothstep(0.0, 0.1, dot(shadingNormal, groundNormal)));
return snow * snowCover;
}`),a.code.add(i`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}`))}function Ho(a){const e=new ge,{attributes:t,vertex:o,fragment:r,varyings:s}=e,{output:d,normalType:n,offsetBackfaces:l,spherical:u,snowCover:f,pbrMode:v,textureAlphaPremultiplied:M,instancedDoublePrecision:C,hasVertexColors:g,hasVertexTangents:F,hasColorTexture:N,hasNormalTexture:Y,hasNormalTextureTransform:R,hasColorTextureTransform:P}=a;if(A(o,a),t.add("position","vec3"),s.add("vpos","vec3",{invariant:!0}),e.include(K,a),e.include(_t,a),e.include(ut,a),e.include(Ao,a),!oe(d))return e.include(Ct,a),e;e.include(Do,a),e.include(Go,a),e.include(jo,a),e.include(Bo,a),le(o,a),e.include(xe,a),e.include(D);const V=n===0||n===1;return V&&l&&e.include(Mt),e.include(ho,a),e.include(wt,a),e.include(Tt,a),s.add("vPositionLocal","vec3"),e.include(G,a),e.include(St,a),e.include(ht,a),o.uniforms.add(new mt("externalColor",b=>b.externalColor,{supportsNaN:!0})),s.add("vcolorExt","vec4"),e.include(pt,a),o.include(pe),o.include(ft),e.include(C?Nt:Ot,a),o.main.add(i`
    forwardNormalizedVertexColor();

    MaskedColor maskedColor =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColor.color;
    forwardColorMixMode(maskedColor.mask);

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${p(V,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${p(F,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${p(V&&l,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (opacityMixMode != ${i.int(J.ignore)} && vcolorExt.a < ${i.float(ae)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadowMap();
  `),e.include(zt,a),r.include(Re,a),e.include(B,a),r.include(j,a),e.include(vt,a),le(r,a),r.uniforms.add(o.uniforms.get("localOrigin"),new ee("ambient",b=>b.ambient),new ee("diffuse",b=>b.diffuse),new O("opacity",b=>b.opacity),new O("layerOpacity",b=>b.layerOpacity)),N&&r.uniforms.add(new y("tex",b=>b.texture)),e.include($t,a),r.include(Pe,a),r.include(Vt),e.include(Fo,a),r.include(Lt,a),Ae(r),De(r),te(r),r.main.add(i`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${N?i`
            vec4 texColor = texture(tex, ${P?"colorUV":"vuv0"});
            ${p(M,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:i`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${n===2?i`vec3 normal = screenDerivativeNormal(vPositionLocal);`:i`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${p(g,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
    float opacity_ = layerOpacity * mixExternalOpacity(${p(g,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, opacityMixMode);

    ${Y?`mat3 tangentSpace = computeTangentSpace(${F?"normal":"normal, vpos, vuv0"});
            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${R?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${u?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${p(f,i`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${v===1||v===2?i`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${p(f,"mrr = applySnowToMRR(mrr, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOID(finalColor, vpos, albedo ${p(f,", snow")});
  `),e}const Wo=Object.freeze(Object.defineProperty({__proto__:null,build:Ho},Symbol.toStringTag,{value:"Module"}));class ko extends Ja{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=no,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=2,this.instanced=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.instanceColorEncodesAlphaIgnore=!1,this.emissiveStrength=0,this.emissiveSource=1,this.emissiveBaseColor=Fe,this.instancedDoublePrecision=!1,this.normalType=0,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=Q(.2,.2,.2),this.diffuse=Q(.8,.8,.8),this.externalColor=Pa(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=x(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.drivenOpacity=!1,this.writeDepth=!0,this.customDepthTest=0,this.textureAlphaMode=0,this.textureAlphaCutoff=ae,this.textureAlphaPremultiplied=!1,this.renderOccluded=1,this.isDecoration=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}let Ur=class extends Ka{constructor(){super(...arguments),this.origin=x(),this.slicePlaneLocalOrigin=this.origin}};class Et extends Ne{constructor(e,t,o=new fe(Wo,()=>ve(()=>import("./RealisticTree.glsl-CrZmYkw-.js").then(r=>r.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]),import.meta.url))){const r=[Ce(Rt(t))];t.instanced&&t.instancedDoublePrecision&&r.push(Ce(io(t))),super(e,t,o,Ua(r))}_makePipeline(e,t){const{oitPass:o,output:r,transparent:s,cullFace:d,customDepthTest:n,hasOccludees:l}=e;return Ve({blending:oe(r)&&s?za(o):null,culling:Yo(e)?Ba(d):null,depthTest:{func:Ca(o,Uo(n))},depthWrite:ya(e),drawBuffers:Sa(r,$a(o,r)),colorWrite:Le,stencilWrite:l?_a:null,stencilTest:l?t?Ma:Ta:null,polygonOffset:wa(e)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function Uo(a){switch(a){case 1:return 515;case 0:case 3:return 513;case 2:return 516}}function Yo(a){return a.cullFace!==0||!a.hasSlicePlane&&!a.transparent&&!a.doubleSidedMode}function Rt(a){const e=Ie().vec3f("position");return a.normalType===1?e.vec2i16("normalCompressed",{glNormalized:!0}):e.vec3f("normal"),a.hasVertexTangents&&e.vec4f("tangent"),a.hasTextures&&e.vec2f16("uv0"),a.hasVertexColors&&e.vec4u8("color"),a.hasSymbolColors&&e.vec4u8("symbolColor"),!a.instanced&&ot()&&e.vec4u8("olidColor"),e}class h extends Fa{constructor(e){super(),this.spherical=e,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.pbrMode=0,this.cullFace=0,this.normalType=0,this.customDepthTest=0,this.emissionSource=0,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.instanced=!1,this.instancedDoublePrecision=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0,this.draped=!1}get textureCoordinateType(){return this.hasTextures?1:0}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||this.emissionSource===3||this.hasOcclusionTexture}get hasVVInstancing(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}c([m({count:4})],h.prototype,"alphaDiscardMode",void 0),c([m({count:3})],h.prototype,"doubleSidedMode",void 0),c([m({count:7})],h.prototype,"pbrMode",void 0),c([m({count:3})],h.prototype,"cullFace",void 0),c([m({count:3})],h.prototype,"normalType",void 0),c([m({count:3})],h.prototype,"customDepthTest",void 0),c([m({count:8})],h.prototype,"emissionSource",void 0),c([m()],h.prototype,"hasVertexColors",void 0),c([m()],h.prototype,"hasSymbolColors",void 0),c([m()],h.prototype,"hasVerticalOffset",void 0),c([m()],h.prototype,"hasColorTexture",void 0),c([m()],h.prototype,"hasMetallicRoughnessTexture",void 0),c([m()],h.prototype,"hasOcclusionTexture",void 0),c([m()],h.prototype,"hasNormalTexture",void 0),c([m()],h.prototype,"hasScreenSizePerspective",void 0),c([m()],h.prototype,"hasVertexTangents",void 0),c([m()],h.prototype,"hasOccludees",void 0),c([m()],h.prototype,"instanced",void 0),c([m()],h.prototype,"instancedDoublePrecision",void 0),c([m()],h.prototype,"hasModelTransformation",void 0),c([m()],h.prototype,"offsetBackfaces",void 0),c([m()],h.prototype,"hasVVSize",void 0),c([m()],h.prototype,"hasVVColor",void 0),c([m()],h.prototype,"receiveShadows",void 0),c([m()],h.prototype,"receiveAmbientOcclusion",void 0),c([m()],h.prototype,"textureAlphaPremultiplied",void 0),c([m()],h.prototype,"instancedFeatureAttribute",void 0),c([m()],h.prototype,"instancedColor",void 0),c([m()],h.prototype,"writeDepth",void 0),c([m()],h.prototype,"transparent",void 0),c([m()],h.prototype,"enableOffset",void 0),c([m()],h.prototype,"terrainDepthTest",void 0),c([m()],h.prototype,"cullAboveTerrain",void 0),c([m()],h.prototype,"snowCover",void 0),c([m()],h.prototype,"hasColorTextureTransform",void 0),c([m()],h.prototype,"hasEmissionTextureTransform",void 0),c([m()],h.prototype,"hasNormalTextureTransform",void 0),c([m()],h.prototype,"hasOcclusionTextureTransform",void 0),c([m()],h.prototype,"hasMetallicRoughnessTextureTransform",void 0);function qo(a){const e=new ge,{attributes:t,vertex:o,fragment:r,varyings:s}=e,{output:d,offsetBackfaces:n,pbrMode:l,snowCover:u,spherical:f}=a,v=l===1||l===2;if(A(o,a),t.add("position","vec3"),s.add("vpos","vec3",{invariant:!0}),e.include(K,a),e.include(_t,a),e.include(ut,a),e.include(pt,a),!oe(d))return e.include(Ct,a),e;le(e.vertex,a),e.include(xe,a),e.include(D),n&&e.include(Mt),s.add("vNormalWorld","vec3"),s.add("localvpos","vec3",{invariant:!0}),e.include(G,a),e.include(St,a),e.include(Tt,a),e.include(ht,a),o.include(pe),o.include(ft),o.uniforms.add(new mt("externalColor",g=>g.externalColor,{supportsNaN:!0})),s.add("vcolorExt","vec4"),e.include(a.instancedDoublePrecision?Nt:Ot,a),o.main.add(i`
    forwardNormalizedVertexColor();

    MaskedColor maskedColorExt =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColorExt.color;
    forwardColorMixMode(maskedColorExt.mask);

    bool alphaCut = opacityMixMode != ${i.int(J.ignore)} && vcolorExt.a < ${i.float(ae)};
    vpos = getVertexInLocalOriginSpace();

    localvpos = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
    vpos = addVerticalOffset(vpos, localOrigin);
    vec4 basePosition = transformPosition(proj, view, vpos);

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardTextureCoordinates();
    forwardLinearDepthToReadShadowMap();
    gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
    ${p(n,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
  `);const{hasColorTexture:M,hasColorTextureTransform:C}=a;return e.include(zt,a),r.include(Re,a),e.include(B,a),r.include(j,a),e.include(vt,a),le(r,a),ue(r),Ae(r),De(r),r.uniforms.add(o.uniforms.get("localOrigin"),o.uniforms.get("view"),new ee("ambient",g=>g.ambient),new ee("diffuse",g=>g.diffuse),new O("opacity",g=>g.opacity),new O("layerOpacity",g=>g.layerOpacity)),M&&r.uniforms.add(new y("tex",g=>g.texture)),e.include($t,a),r.include(Pe,a),r.include(Vt),r.include(Lt,a),te(r),r.main.add(i`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${M?`texture(tex, ${C?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${p(M,`${p(a.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = readShadow(additionalAmbientScale, vpos);
      vec3 matColor = max(ambient, diffuse);
      ${a.hasVertexColors?i`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, opacityMixMode);`:i`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, opacityMixMode);`}

      vec3 shadingNormal = normalize(vNormalWorld);
      vec3 groundNormal = ${f?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};

      ${p(u,`vec3 faceNormal = screenDerivativeNormal(vpos);
         float snow = getRealisticTreeSnow(faceNormal, shadingNormal, groundNormal);
         albedo = mix(albedo, vec3(1), snow);`)}

      ${i`albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}

      ${v?i`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${p(u,"mrr = applySnowToMRR(mrr, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, groundNormal, mrr, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos, albedo ${p(u,", 1.0")});`),e}const Zo=Object.freeze(Object.defineProperty({__proto__:null,build:qo},Symbol.toStringTag,{value:"Module"}));class Xo extends Et{constructor(e,t){super(e,t,new fe(Zo,()=>ve(()=>import("./RealisticTree.glsl-CrZmYkw-.js").then(o=>o.R),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]),import.meta.url)))}}class qr extends Na{constructor(e,t){super(e,Ko),this.materialType="default",this.supportsEdges=!0,this.intersectDraped=void 0,this.produces=new Map([[2,o=>(we(o)||ye(o))&&!this.transparent],[4,o=>(we(o)||ye(o))&&this.transparent&&this.parameters.writeDepth],[8,o=>(we(o)||ye(o))&&this.transparent&&!this.parameters.writeDepth]]),this._layout=Rt(this.parameters),this._configuration=new h(t.spherical)}isVisibleForOutput(e){return e!==4&&e!==6&&e!==5||this.parameters.castShadows}get visible(){const{layerOpacity:e,colorMixMode:t,opacity:o,externalColor:r}=this.parameters;return e*(t==="replace"?1:o)*(t==="ignore"||isNaN(r[3])?1:r[3])>=ae}get _hasEmissiveBase(){return!!this.parameters.emissiveTextureId||!et(this.parameters.emissiveBaseColor,Fe)}get hasEmissions(){return this.parameters.emissiveStrength>0&&(this.parameters.emissiveSource===0&&this._hasEmissiveBase||this.parameters.emissiveSource===1)}getConfiguration(e,t){const{parameters:o,_configuration:r}=this,{treeRendering:s,doubleSided:d,doubleSidedType:n}=o;return super.getConfiguration(e,t,this._configuration),r.hasNormalTexture=o.hasNormalTexture,r.hasColorTexture=o.hasColorTexture,r.hasMetallicRoughnessTexture=o.hasMetallicRoughnessTexture,r.hasOcclusionTexture=o.hasOcclusionTexture,r.hasVertexTangents=!s&&o.hasVertexTangents,r.instanced=o.instanced,r.instancedDoublePrecision=o.instancedDoublePrecision,r.hasVVColor=!!o.vvColor,r.hasVVSize=!!o.vvSize,r.hasVerticalOffset=o.verticalOffset!=null,r.hasScreenSizePerspective=o.screenSizePerspective!=null,r.hasSlicePlane=o.hasSlicePlane,r.alphaDiscardMode=o.textureAlphaMode,r.normalType=s?0:o.normalType,r.transparent=this.transparent,r.writeDepth=o.writeDepth,r.customDepthTest=o.customDepthTest??0,r.hasOccludees=t.hasOccludees,r.cullFace=o.hasSlicePlane?0:o.cullFace,r.cullAboveTerrain=t.cullAboveTerrain,r.hasModelTransformation=!s&&o.modelTransformation!=null,r.hasVertexColors=o.hasVertexColors,r.hasSymbolColors=o.hasSymbolColors,r.doubleSidedMode=s?2:d&&n==="normal"?1:d&&n==="winding-order"?2:0,r.instancedFeatureAttribute=o.instancedFeatureAttribute,r.instancedColor=o.instancedColor,oe(e)?(r.terrainDepthTest=t.terrainDepthTest,r.receiveShadows=o.receiveShadows,r.receiveAmbientOcclusion=o.receiveAmbientOcclusion&&t.ssao!=null):(r.terrainDepthTest=!1,r.receiveShadows=r.receiveAmbientOcclusion=!1),r.textureAlphaPremultiplied=!!o.textureAlphaPremultiplied,r.pbrMode=o.usePBR?o.isSchematic?2:1:0,r.emissionSource=o.emissionSource,r.offsetBackfaces=!(!this.transparent||!o.offsetTransparentBackfaces),r.oitPass=t.oitPass,r.enableOffset=t.camera.relativeElevation<Oa,r.snowCover=t.snowCover>0,r.hasColorTextureTransform=!!o.colorTextureTransformMatrix,r.hasNormalTextureTransform=!!o.normalTextureTransformMatrix,r.hasEmissionTextureTransform=!!o.emissiveTextureTransformMatrix,r.hasOcclusionTextureTransform=!!o.occlusionTextureTransformMatrix,r.hasMetallicRoughnessTextureTransform=!!o.metallicRoughnessTextureTransformMatrix,r}intersect(e,t,o,r,s,d){if(this.parameters.verticalOffset!=null){const n=o.camera;L(Se,t[12],t[13],t[14]);let l=null;switch(o.viewingMode){case 1:l=Dt(Qe,Se);break;case 2:l=At(Qe,ar)}let u=0;const f=be(or,Se,n.eye),v=Gt(f),M=Ge(f,f,1/v);let C=null;this.parameters.screenSizePerspective&&(C=jt(l,M)),u+=Ia(n,v,this.parameters.verticalOffset,C??0,this.parameters.screenSizePerspective,null),Ge(l,l,u),Bt(_e,l,o.transform.inverseRotation),r=be(er,r,_e),s=be(tr,s,_e)}Va(e,o,r,s,La(o.verticalOffset),d)}createGLMaterial(e){return new Jo(e)}createBufferWriter(){return new Ea(this._layout)}get transparent(){return Qo(this.parameters)}}class Jo extends Ra{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const t=this._material.parameters;this.updateTexture(t.textureId);const o=e.camera.viewInverseTransposeMatrix;return L(t.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(t.treeRendering?Xo:Et,e)}}class Ko extends ko{constructor(){super(...arguments),this.treeRendering=!1,this.hasVertexTangents=!1}get hasNormalTexture(){return!this.treeRendering&&!!this.normalTextureId}get hasColorTexture(){return!!this.textureId}get hasMetallicRoughnessTexture(){return!this.treeRendering&&!!this.metallicRoughnessTextureId}get hasOcclusionTexture(){return!this.treeRendering&&!!this.occlusionTextureId}get emissionSource(){return this.treeRendering?0:this.emissiveTextureId!=null&&this.emissiveSource===0?3:this.usePBR?this.emissiveSource===0?2:1:0}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||this.emissionSource===3||this.hasOcclusionTexture}}function Qo(a){const{drivenOpacity:e,opacity:t,externalColor:o,layerOpacity:r,texture:s,textureId:d,textureAlphaMode:n,colorMixMode:l}=a,u=o[3];return e||t<1&&l!=="replace"||u<1&&l!=="ignore"||r<1||(s!=null||d!=null)&&n!==1&&n!==2&&l!=="replace"}const er=x(),tr=x(),ar=ta(0,0,1),Qe=x(),_e=x(),Se=x(),or=x();export{Qo as A,_o as B,q as F,Ho as J,qr as P,qo as _,Nr as a,Ur as b,co as c,$t as d,zt as e,Ot as f,Re as g,Fo as h,po as i,Ko as j,De as k,Lt as l,yo as m,Ir as n,Vr as o,Ae as p,te as q,ue as r,Lr as s,no as t,io as u,Ee as v,Br as w,$o as x,mo as y,Ye as z};
