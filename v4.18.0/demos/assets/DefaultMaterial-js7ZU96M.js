const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./LineCallout.glsl-DvxhBYhf.js","./main-BGlWJBv6.js","./preload-helper-DMGCcr4D.js","./main-1q3AKiAC.css","./attributionUtils-Ca7-dONr.js","./HeightModelInfo-CoRH8iXj.js","./multiOriginJSONSupportUtils-C0wm8_Yw.js","./HUDMaterial-DjGvREDS.js","./orientedBoundingBox-CirGFKwh.js","./quat-CTpnzqSy.js","./computeTranslationToOriginAndRotation-90uAO8Zv.js","./VertexColor.glsl-DlgNzMqx.js","./glsl-CX8y9w8U.js","./Texture-CO_ozpoi.js","./Cyclical-BcJ8weaf.js","./enums-DQOO6RKE.js","./frustum-Dwc8xi-w.js","./normalizeUtils-QeK3NIO5.js","./normalizeUtilsCommon-Cu3J9F0t.js","./utils-D-9D8rBi.js","./utils-CUJ1llju.js","./VertexAttributeLocations-CeCSksA9.js","./VertexElementDescriptor-CVzmm3VW.js","./renderState-B3BF0-MF.js","./Indices-BvpND9Py.js","./BufferView-Cpa_ikJW.js","./Octree-C3G3342x.js","./ShaderBuilder-BV6atuiR.js","./InterleavedLayout-CTY1eRo9.js","./types-BKo2foNY.js","./vec3f32-WCVSSNPR.js","./hydratedFeatures-BDFHuo25.js","./diffUtils-B4DS8yD6.js","./visualVariableUtils-CB1rtMjd.js","./MemCache-CmH0ukMP.js","./dehydratedFeatures-CTZV3QzN.js","./memoryEstimations-DcoDOzUZ.js","./densificationConstants-CvWAB5Qc.js","./UniqueValueRenderer-BtxU7M4G.js","./commonProperties-CkUF6Pze.js","./colorRamps-CI5Nkanx.js","./ColorStop-CLwdwnRy.js","./RendererLegendOptions-spGFnAaF.js","./styleUtils-C1hYC13a.js","./rendererConversion-3iTjYbzW.js","./primitives-Bxh8jMf3.js","./edgeUtils-Dc-dqpjn.js","./layerUtils-Du_LjqS-.js","./Scheduler-B9RXtNMP.js","./debugFlags-CsvveuHG.js","./featureConversionUtils-DboKqavn.js","./OptimizedGeometry-DOKW4UqR.js","./optimizedFeatureQueryEngineAdapter-DcAhE-3a.js","./HUDMaterial.glsl-BYndqZ61.js","./meshVertexSpaceUtils-LdErA5Iq.js","./MeshLocalVertexSpace-DeAn7RcG.js","./vec2f32-CaVKkSa6.js","./PooledRBush-8Y9urrsK.js","./quickselect-QQC62dOK.js","./popupUtils-DT42EGOM.js","./GraphicsLayerView-Ml5r0gA7.js","./LayerView-BdBh9K8C.js","./highlightOptionsUtils-CUB-zkHq.js"])))=>i.map(i=>d[i]);
import{aN as x,co as W,fZ as at,bQ as At,gO as Gt,be as ot,je as jt,a$ as I,kl as Ht,tU as Bt,qM as kt,lW as Wt,tV as rt,a6 as l,a7 as B,aa as U,tW as Ut,tX as Yt,ll as ee,br as it,lk as Ie,kv as Be,kj as Zt,nw as ke,tY as Y,j3 as se,aL as nt,i2 as ie,e2 as qt,dA as Xt,cQ as Jt,cd as C,aW as Kt,b8 as Qt,aZ as ea,bB as ta,b4 as Te,b3 as aa,bi as We,b9 as oa,km as ra}from"./main-BGlWJBv6.js";import{h as L,aD as ve,j as ge,aU as N,U as st,aV as xe,aW as lt,aX as ct,u as ia,g as k,aY as na,aZ as sa,aj as la,aE as ca,a_ as K,r as F,S as oe,N as D,aP as A,a$ as G,H as Q,d as M,P as j,an as da,L as ua,b0 as ha,b1 as dt,aI as le,i as ut,aF as ht,o as mt,c as ma,a as pt,b2 as ft,k as pa,l as Le,t as be,w as fa,x as Ue,b as va,O as S,K as Ve,al as ga,b3 as xa,e as te,b4 as ba,a1 as re,b5 as wa,b6 as vt,E as ce,aQ as gt,f as xt,M as bt,b7 as wt,Q as yt,J as Mt,aR as ya,X as Ma,Y as Ta,Z as Sa,_ as _a,V as Ca,$ as za,a0 as $a,p as Fa,a7 as Na,s as m,a8 as Oa,b8 as Se,b9 as _e,at as Ia,aN as La,ba as Va,aT as Ea,aC as Ra}from"./VertexColor.glsl-DlgNzMqx.js";import{_ as we}from"./preload-helper-DMGCcr4D.js";import{t as Ne,Q as Ee}from"./InterleavedLayout-CTY1eRo9.js";import{n as p,t as i}from"./glsl-CX8y9w8U.js";import{i as _,F as Tt,z as de,S as Ye}from"./BufferView-Cpa_ikJW.js";import{r as Pa}from"./VertexBuffer-5ShEUoa7.js";import{s as ye}from"./ShaderBuilder-BV6atuiR.js";import{w as Re,u as Pe,c as Da}from"./renderState-B3BF0-MF.js";import{n as Aa}from"./enums-DQOO6RKE.js";import{h as Ga,E as ja}from"./Texture-CO_ozpoi.js";function Ha(t){t.varyings.add("linearDepth","float",{invariant:!0})}function Ba(t,e){Ha(t),t.vertex.code.add(i`
    void forwardLinearDepth(float _linearDepth) { ${p(e,"linearDepth = _linearDepth;")} }
  `)}function ka({code:t,uniforms:e},a){e.add(new L("dpDummy",()=>1)),t.add(i`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 hiD = hiA + hiB;
vec3 loD = loA + loB;
return  dpDummy * hiD + loD;
}`)}let Wa=class extends ve{constructor(e,a,o){super(e,"mat3",2,(r,s,n)=>r.setUniformMatrix3fv(e,a(s,n),o))}},Ua=class extends ge{constructor(){super(...arguments),this.transformWorldFromViewTH=x(),this.transformWorldFromViewTL=x(),this.transformViewFromCameraRelativeRS=W()}};class Ya extends ge{constructor(){super(...arguments),this.transformWorldFromModelRS=W(),this.transformWorldFromModelTH=x(),this.transformWorldFromModelTL=x()}}function Me(t,e){switch(t.fragment.code.add(i`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`),e.normalType){case 1:t.attributes.add("normalCompressed","vec2"),t.vertex.code.add(i`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case 0:t.attributes.add("normal","vec3"),t.vertex.code.add(i`vec3 normalModel() {
return normal;
}`);break;default:e.normalType;case 2:case 3:}}function St(t,e){const{vertex:a,varyings:o}=t;switch(e.normalType){case 0:case 1:{t.include(Me,e),o.add("vNormalWorld","vec3"),o.add("vNormalView","vec3"),a.uniforms.add(new N("transformNormalViewFromGlobal",s=>s.transformNormalViewFromGlobal));const{hasModelRotationScale:r}=e;r&&a.uniforms.add(new Wa("transformNormalGlobalFromModel",s=>s.transformNormalGlobalFromModel)),a.code.add(i`
        void forwardNormal() {
          vNormalWorld = ${p(r,i`transformNormalGlobalFromModel * `)} normalModel();
          vNormalView = transformNormalViewFromGlobal * vNormalWorld;
        }
      `);break}case 2:t.vertex.code.add(i`void forwardNormal() {}`);break;default:e.normalType;case 3:}}let Za=class extends Ua{constructor(){super(...arguments),this.transformNormalViewFromGlobal=W()}},qa=class extends Ya{constructor(){super(...arguments),this.transformNormalGlobalFromModel=W(),this.toMapSpace=at()}},Xa=class{constructor(e,a,o){this.elementSize=a.stride,this._buffer=new Pa(e,Ne(a,1)),this.resize(o)}destroy(){this._buffer.dispose()}get capacity(){return this._capacity}get array(){return this._array}get buffer(){return this._buffer}get usedMemory(){return this._array.byteLength+this._buffer.usedMemory}copyRange(e,a,o,r=0){const s=new Uint8Array(this.array,e*this.elementSize,(a-e)*this.elementSize);new Uint8Array(o.array,r*this.elementSize).set(s)}transferAll(){this._buffer.setData(this._array)}transferRange(e,a){const o=e*this.elementSize,r=a*this.elementSize;this._buffer.setSubData(new Uint8Array(this._array),o,o,r)}resize(e){const a=e*this.elementSize,o=new ArrayBuffer(a);this._array&&(e>=this._capacity?new Uint8Array(o).set(new Uint8Array(this._array)):new Uint8Array(o).set(new Uint8Array(this._array).subarray(0,e*this.elementSize))),this._array=o,this._buffer.setSize(a),this._capacity=e}};class Ze{constructor(e){this.localTransform=e.localTransform,this.globalTransform=e.globalTransform,this.modelOrigin=e.modelOrigin,this.model=e.instanceModel,this.modelNormal=e.instanceModelNormal,this.modelScaleFactors=e.modelScaleFactors,this.boundingSphere=e.boundingSphere,this.featureAttribute=e.getField("instanceFeatureAttribute",Tt),this.color=e.getField("instanceColor",de),this.olidColor=e.getField("instanceOlidColor",de),this.state=e.getField("state",Ye),this.lodLevel=e.getField("lodLevel",Ye)}}let q=class extends At{constructor(e,a){super(e),this.events=new Gt,this._capacity=0,this._size=0,this._next=0,this._highlightOptionsMap=new Map,this._highlightOptionsMapPrev=new Map,this._layout=Qa(a),this._capacity=ue,this._buffer=this._layout.createBuffer(this._capacity),this._view=new Ze(this._buffer)}get capacity(){return this._capacity}get size(){return this._size}get view(){return this._view}addInstance(){this._size+1>this._capacity&&this._grow();const e=this._findSlot();return this._view.state.set(e,1),this._size++,this.events.emit("instances-changed"),e}removeInstance(e){const a=this._view.state;_(e>=0&&e<this._capacity&&!!(1&a.get(e)),"invalid instance handle"),this._getStateFlag(e,18)?this._setStateFlags(e,32):this.freeInstance(e),this.events.emit("instances-changed")}freeInstance(e){const a=this._view.state;_(e>=0&&e<this._capacity&&!!(1&a.get(e)),"invalid instance handle"),a.set(e,0),this._size--}setLocalTransform(e,a,o=!0){this._view.localTransform.setMat(e,a),o&&this.updateModelTransform(e)}getLocalTransform(e,a){this._view.localTransform.getMat(e,a)}setGlobalTransform(e,a,o=!0){this._view.globalTransform.setMat(e,a),o&&this.updateModelTransform(e)}getGlobalTransform(e,a){this._view.globalTransform.getMat(e,a)}updateModelTransform(e){const a=this._view,o=b,r=T;a.localTransform.getMat(e,qe),a.globalTransform.getMat(e,Ce);const s=jt(Ce,Ce,qe);I(o,s[12],s[13],s[14]),a.modelOrigin.setVec(e,o),Ht(r,s),a.model.setMat(e,r);const n=Bt(b,s);n.sort(),a.modelScaleFactors.set(e,0,n[1]),a.modelScaleFactors.set(e,1,n[2]),kt(r,r),Wt(r,r),a.modelNormal.setMat(e,r),this._setStateFlags(e,64),this.events.emit("instance-transform-changed",{index:e})}getModelTransform(e,a){const o=this._view;o.model.getMat(e,T),o.modelOrigin.getVec(e,b),a[0]=T[0],a[1]=T[1],a[2]=T[2],a[3]=0,a[4]=T[3],a[5]=T[4],a[6]=T[5],a[7]=0,a[8]=T[6],a[9]=T[7],a[10]=T[8],a[11]=0,a[12]=b[0],a[13]=b[1],a[14]=b[2],a[15]=1}applyShaderTransformation(e,a){this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,a)}getCombinedModelTransform(e,a){return this.getModelTransform(e,a),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,a),a}getCombinedLocalTransform(e,a){this._view.localTransform.getMat(e,a),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,a)}getCombinedMaxScaleFactor(e){let a=this._view.modelScaleFactors.get(e,1);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(b,this,e),a*=Math.max(b[0],b[1],b[2])),a}getCombinedMedianScaleFactor(e){let a=this._view.modelScaleFactors.get(e,0);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(b,this,e),a*=Ja(b[0],b[1],b[2])),a}getModel(e,a){this._view.model.getMat(e,a)}setFeatureAttribute(e,a){this._view.featureAttribute?.setVec(e,a)}getFeatureAttribute(e,a){this._view.featureAttribute?.getVec(e,a)}setColor(e,a){this._view.color?.setVec(e,a)}setObjectAndLayerIdColor(e,a){this._view.olidColor?.setVec(e,a)}setVisible(e,a){a!==this.getVisible(e)&&(this._setStateFlag(e,4,a),this.events.emit("instance-visibility-changed",{index:e}))}getVisible(e){return this._getStateFlag(e,4)}setHighlight(e,a){const{_highlightOptionsMap:o}=this,r=o.get(e);a?a!==r&&(o.set(e,a),this._setStateFlag(e,8,!0),this.events.emit("instance-highlight-changed")):r&&(o.delete(e),this._setStateFlag(e,8,!1),this.events.emit("instance-highlight-changed"))}get highlightOptionsMap(){return this._highlightOptionsMap}getHighlightStateFlag(e){return this._getStateFlag(e,8)}geHighlightOptionsPrev(e){const a=this._highlightOptionsMapPrev.get(e)??null;return this._highlightOptionsMapPrev.delete(e),a}getHighlightName(e){const a=this.highlightOptionsMap.get(e)??null;return a?this._highlightOptionsMapPrev.set(e,a):this._highlightOptionsMapPrev.delete(e),a}getState(e){return this._view.state.get(e)}getLodLevel(e){return this._view.lodLevel.get(e)}countFlags(e){let a=0;for(let o=0;o<this._capacity;++o)this.getState(o)&e&&++a;return a}_setStateFlags(e,a){const o=this._view.state;a=o.get(e)|a,o.set(e,a)}_clearStateFlags(e,a){const o=this._view.state;a=o.get(e)&~a,o.set(e,a)}_setStateFlag(e,a,o){o?this._setStateFlags(e,a):this._clearStateFlags(e,a)}_getStateFlag(e,a){return!!(this._view.state.get(e)&a)}_grow(){this._capacity=Math.max(ue,Math.floor(this._capacity*rt)),this._buffer=this._layout.createBuffer(this._capacity).copyFrom(this._buffer),this._view=new Ze(this._buffer)}_findSlot(){const e=this._view.state;let a=this._next;for(;1&e.get(a);)a=a+1===this._capacity?0:a+1;return this._next=a+1===this._capacity?0:a+1,a}};function Ja(t,e,a){return Math.max(Math.min(t,e),Math.min(Math.max(t,e),a))}l([B({constructOnly:!0})],q.prototype,"shaderTransformation",void 0),l([B()],q.prototype,"_size",void 0),l([B({readOnly:!0})],q.prototype,"size",null),q=l([U("esri.views.3d.webgl-engine.lib.lodRendering.InstanceData")],q);const Ka=Ee().mat4f64("localTransform").mat4f64("globalTransform").vec4f64("boundingSphere").vec3f64("modelOrigin").mat3f("instanceModel").mat3f("instanceModelNormal").vec2f("modelScaleFactors");function Qa(t){return _t(Ka.clone(),t).u8("state").u8("lodLevel")}function _t(t,e){return e.instancedFeatureAttribute&&t.vec4f("instanceFeatureAttribute"),e.instancedColor&&t.vec4u8("instanceColor"),st()&&t.vec4u8("instanceOlidColor"),t}const b=x(),T=W(),qe=ot(),Ce=ot(),ue=64;let eo=class{constructor(e){this.model=e.instanceModel,this.modelNormal=e.instanceModelNormal,this.modelOriginHi=e.instanceModelOriginHi,this.modelOriginLo=e.instanceModelOriginLo,this.featureAttribute=e.getField("instanceFeatureAttribute",Tt),this.color=e.getField("instanceColor",de),this.olidColor=e.getField("instanceOlidColor",de)}},gr=class{constructor(e,a){this._rctx=e,this._layout=a,this._headIndex=0,this._tailIndex=0,this._firstIndex=null,this._captureFirstIndex=!0,this._updating=!1,this._prevHeadIndex=0,this._resized=!1,this._capacity=1}destroy(){this._buffer&&this._buffer.destroy()}get buffer(){return this._buffer.buffer}get view(){return this._view}get capacity(){return this._capacity}get size(){const e=this._headIndex,a=this._tailIndex;return e>=a?e-a:e+this._capacity-a}get isEmpty(){return this._headIndex===this._tailIndex}get isFull(){return this._tailIndex===(this._headIndex+1)%this._capacity}get headIndex(){return this._headIndex}get tailIndex(){return this._tailIndex}get firstIndex(){return this._firstIndex}get usedMemory(){return this._buffer?.usedMemory??0}reset(){this._headIndex=0,this._tailIndex=0,this._firstIndex=null}startUpdateCycle(){this._captureFirstIndex=!0}beginUpdate(){_(!this._updating,"already updating"),this._updating=!0,this._prevHeadIndex=this._headIndex}endUpdate(){_(this._updating,"not updating"),this.size<Ut*this.capacity&&this._shrink(),this._resized?(this._buffer.transferAll(),this._resized=!1):this._transferRange(this._prevHeadIndex,this._headIndex),this._updating=!1}allocateHead(){_(this._updating,"not updating"),this.isFull&&this._grow();const e=this.headIndex;return this._captureFirstIndex&&(this._firstIndex=e,this._captureFirstIndex=!1),this._incrementHead(),_(this._headIndex!==this._tailIndex,"invalid pointers"),e}freeTail(){_(this._updating,"not updating"),_(this.size>0,"invalid size");const e=this._tailIndex===this._firstIndex;this._incrementTail(),e&&(this._firstIndex=this._tailIndex)}_grow(){const e=Math.max(ue,Math.floor(this._capacity*rt));this._resize(e)}_shrink(){const e=Math.max(ue,Math.floor(this._capacity*Yt));this._resize(e)}_resize(e){if(_(this._updating,"not updating"),e===this._capacity)return;const a=new Xa(this._rctx,this._layout,e);if(this._buffer){this._firstIndex&&(this._firstIndex=(this._firstIndex+this._capacity-this._tailIndex)%this._capacity);const o=this.size,r=this._compactInstances(a);_(r===o,"invalid compaction"),this._buffer.destroy(),this._tailIndex=0,this._headIndex=r,this._prevHeadIndex=0}this._resized=!0,this._capacity=e,this._buffer=a,this._view=new eo(this._layout.createView(this._buffer.array))}_compactInstances(e){const a=this._headIndex,o=this._tailIndex;return o<a?(this._buffer.copyRange(o,a,e),a-o):o>a?(this._buffer.copyRange(o,this._capacity,e),a>0&&this._buffer.copyRange(0,a,e,this._capacity-o),a+(this._capacity-o)):0}_incrementHead(e=1){this._headIndex=(this._headIndex+e)%this._capacity}_incrementTail(e=1){this._tailIndex=(this._tailIndex+e)%this._capacity}_transferRange(e,a){e<a?this._buffer.transferRange(e,a):e>a&&(a>0&&this._buffer.transferRange(0,a),this._buffer.transferRange(e,this._capacity))}};const to=Ee().vec3f("instanceModelOriginHi").vec3f("instanceModelOriginLo").mat3f("instanceModel").mat3f("instanceModelNormal");function ao(t){return _t(to.clone(),t)}function br({normalTexture:t,metallicRoughnessTexture:e,metallicFactor:a,roughnessFactor:o,emissiveTexture:r,emissiveFactor:s,occlusionTexture:n}){return t==null&&e==null&&r==null&&(s==null||it(s,Ie))&&n==null&&(o==null||o===1)&&(a==null||a===1)}const oo=ee(1,1,.5),wr=ee(0,.6,.2),yr=ee(0,1,.2);function Ct(t){t.vertex.code.add(i`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function zt(t,e){e.instancedColor?(t.attributes.add("instanceColor","vec4"),t.vertex.include(xe),t.vertex.include(lt),t.vertex.include(ct),t.vertex.code.add(i`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${"instanceColor"}));
      }
    `)):t.vertex.code.add(i`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}const Xe=W();function $t(t,e){const{hasModelTransformation:a,instancedDoublePrecision:o,instanced:r,output:s,hasVertexTangents:n}=e;a&&(t.vertex.uniforms.add(new ia("model",u=>u.modelTransformation??Be)),t.vertex.uniforms.add(new N("normalLocalOriginFromModel",u=>(Zt(Xe,u.modelTransformation??Be),Xe)))),r&&o&&(t.attributes.add("instanceModelOriginHi","vec3"),t.attributes.add("instanceModelOriginLo","vec3"),t.attributes.add("instanceModel","mat3"),t.attributes.add("instanceModelNormal","mat3"));const d=t.vertex;o&&(d.include(ka,e),d.uniforms.add(new k("viewOriginHi",u=>na(I(ne,u.camera.viewInverseTransposeMatrix[3],u.camera.viewInverseTransposeMatrix[7],u.camera.viewInverseTransposeMatrix[11]),ne)),new k("viewOriginLo",u=>sa(I(ne,u.camera.viewInverseTransposeMatrix[3],u.camera.viewInverseTransposeMatrix[7],u.camera.viewInverseTransposeMatrix[11]),ne)))),d.code.add(i`
    vec3 getVertexInLocalOriginSpace() {
      return ${a?o?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":o?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${o?i`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),d.code.add(i`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${a?o?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":o?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),s===2&&(la(d),d.code.add(i`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${a?o?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":o?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),n&&d.code.add(i`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${a?o?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":o?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const ne=x();function Ft(t,e){t.varyings.add("colorMixMode","int"),t.varyings.add("opacityMixMode","int"),t.vertex.uniforms.add(new ca("symbolColorMixMode",a=>K[a.colorMixMode])),e.hasSymbolColors?(t.vertex.include(xe),t.vertex.include(lt),t.vertex.include(ct),t.attributes.add("symbolColor","vec4"),t.vertex.code.add(i`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${"symbolColor"}));
    }
  `)):t.vertex.code.add(i`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),t.vertex.code.add(i`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = mask.r ? ${i.int(K.ignore)} : symbolColorMixMode;
      opacityMixMode = mask.a ? ${i.int(K.ignore)} : symbolColorMixMode;
    }
  `)}function ro(t,e){switch(e.output){case 3:case 4:case 5:case 6:t.fragment.code.add(i`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`);break;case 7:t.fragment.code.add(i`void outputDepth(float _linearDepth){
gl_FragDepth = _linearDepth;
}`)}}function H(t,e){io(t,e,new F("textureAlphaCutoff",a=>a.textureAlphaCutoff))}function io(t,e,a){const o=t.fragment,r=e.alphaDiscardMode,s=r===0;r!==2&&r!==3||o.uniforms.add(a),o.code.add(i`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${r===1?"color.a = 1.0;":`if (color.a < ${s?i.float(oe):"textureAlphaCutoff"}) {
              discard;
             } ${p(r===2,"else { color.a = 1.0; }")}`}
    }
  `)}function Nt(t,e){const{vertex:a,fragment:o,varyings:r}=t,{hasColorTexture:s,alphaDiscardMode:n}=e,d=s&&n!==1,{output:u,normalType:c,hasColorTextureTransform:g}=e;switch(u){case 1:D(a,e),t.include(A),o.include(j,e),t.include(G,e),d&&o.uniforms.add(new M("tex",v=>v.texture)),a.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),t.include(H,e),o.main.add(i`
        discardBySlice(vpos);
        ${p(d,i`vec4 texColor = texture(tex, ${g?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case 3:case 4:case 5:case 6:case 9:D(a,e),t.include(A),t.include(G,e),t.include(Q,e),t.include(ro,e),o.include(j,e),t.include(ua,e),ha(t),r.add("depth","float",{invariant:!0}),d&&o.uniforms.add(new M("tex",v=>v.texture)),a.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),t.include(H,e),o.main.add(i`
        discardBySlice(vpos);
        ${p(d,i`vec4 texColor = texture(tex, ${g?"colorUV":"vuv0"});
               discardOrAdjustAlpha(texColor);`)}
        ${u===9?i`outputObjectAndLayerIdColor();`:i`outputDepth(depth);`}`);break;case 2:{D(a,e),t.include(A),t.include(Me,e),t.include(St,e),t.include(G,e),t.include(Q,e),d&&o.uniforms.add(new M("tex",w=>w.texture)),c===2&&r.add("vPositionView","vec3",{invariant:!0});const v=c===0||c===1;a.main.add(i`
        vpos = getVertexInLocalOriginSpace();
        ${v?i`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:i`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),o.include(j,e),t.include(H,e),o.main.add(i`
        discardBySlice(vpos);
        ${p(d,i`vec4 texColor = texture(tex, ${g?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${c===2?i`vec3 normal = screenDerivativeNormal(vPositionView);`:i`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case 8:D(a,e),t.include(A),t.include(G,e),t.include(Q,e),d&&o.uniforms.add(new M("tex",v=>v.texture)),a.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),o.include(j,e),t.include(H,e),t.include(da,e),o.main.add(i`
        discardBySlice(vpos);
        ${p(d,i`vec4 texColor = texture(tex, ${g?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function no(t,e){return so(t,e)}function so(t,e){const a=t.fragment,{hasVertexTangents:o,doubleSidedMode:r,hasNormalTexture:s,textureCoordinateType:n,bindType:d,hasNormalTextureTransform:u}=e;o?(t.attributes.add("tangent","vec4"),t.varyings.add("vTangent","vec4"),r===2?a.code.add(i`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):a.code.add(i`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):a.code.add(i`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),s&&n!==0&&(t.include(dt,e),a.uniforms.add(d===1?new M("normalTexture",c=>c.textureNormal):new le("normalTexture",c=>c.textureNormal)),u&&(a.uniforms.add(d===1?new ut("scale",c=>c.scale??ke):new ht("scale",c=>c.scale??ke)),a.uniforms.add(new N("normalTextureTransformMatrix",c=>c.normalTextureTransformMatrix??Y))),a.code.add(i`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),u&&a.code.add(i`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),a.code.add(i`return tangentSpace * rawNormal;
}`))}const lo=3e5,Je=5e5,Ke=16;function co(){const t=new ye,e=t.fragment;return t.include(mt),t.include(ma),e.include(pt),e.include(ft),e.uniforms.add(new L("radius",a=>De(a.camera))).code.add(i`vec3 sphere[16] = vec3[16](
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
}`),t.outputs.add("fragOcclusion","float"),e.uniforms.add(new M("normalMap",a=>a.normalTexture),new M("depthMap",a=>a.depthTexture),new F("projScale",a=>a.projScale),new M("rnm",a=>a.noiseTexture),new ut("rnmScale",(a,o)=>se(Qe,o.camera.fullWidth/a.noiseTexture.descriptor.width,o.camera.fullHeight/a.noiseTexture.descriptor.height)),new F("intensity",a=>a.intensity),new pa("screenSize",a=>se(Qe,a.camera.fullWidth,a.camera.fullHeight))).main.add(i`
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

    for(int i = 0; i < ${i.int(Ke)}; ++i) {
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
    float A = max(1.0 - sum * intensity / float(${i.int(Ke)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * pow(A, 4.0)) * INV_GAMMA;

    fragOcclusion = A;
  `),t}function De(t){return Math.max(10,20*t.computeScreenPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}const Qe=nt(),uo=Object.freeze(Object.defineProperty({__proto__:null,build:co,getRadius:De},Symbol.toStringTag,{value:"Module"})),ze=4;function ho(){const t=new ye,e=t.fragment;t.include(mt);const a=(ze+1)/2,o=1/(2*a*a);return e.include(pt),e.uniforms.add(new M("depthMap",r=>r.depthTexture),new le("tex",r=>r.colorTexture),new ht("blurSize",r=>r.blurSize),new F("projScale",(r,s)=>{const n=s.camera.distance;return n>5e4?Math.max(0,r.projScale-(n-5e4)):r.projScale})),e.code.add(i`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${i.float(o)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.outputs.add("fragBlur","float"),e.main.add(i`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${i.int(ze)}; r <= ${i.int(ze)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),t}const mo=Object.freeze(Object.defineProperty({__proto__:null,build:ho},Symbol.toStringTag,{value:"Module"}));let he=class extends Le{constructor(){super(...arguments),this.shader=new be(mo,()=>we(()=>import("./LineCallout.glsl-DvxhBYhf.js").then(e=>e.C),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62]),import.meta.url))}initializePipeline(){return Re({colorWrite:Pe})}};he=l([U("esri.views.3d.webgl-engine.effects.ssao.SSAOBlurTechnique")],he);const po="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let fo=class extends ge{constructor(){super(...arguments),this.projScale=1}},vo=class extends fo{constructor(){super(...arguments),this.intensity=1}},go=class extends ge{},xo=class extends go{constructor(){super(...arguments),this.blurSize=nt()}},me=class extends Le{constructor(){super(...arguments),this.shader=new be(uo,()=>we(()=>import("./LineCallout.glsl-DvxhBYhf.js").then(e=>e.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62]),import.meta.url))}initializePipeline(){return Re({colorWrite:Pe})}};me=l([U("esri.views.3d.webgl-engine.effects.ssao.SSAOTechnique")],me);const J=2;let X=class extends fa{constructor(t){super(t),this.consumes={required:["normals"]},this.produces=Ue.SSAO,this.isEnabled=()=>!1,this._enableTime=ie(0),this._passParameters=new vo,this._drawParameters=new xo}initialize(){const t=Uint8Array.from(atob(po),a=>a.charCodeAt(0)),e=new Ga(32);e.wrapMode=33071,e.pixelFormat=6407,e.wrapMode=10497,e.hasMipmap=!0,this._passParameters.noiseTexture=new ja(this.renderingContext,e,t),this.techniques.precompile(me),this.techniques.precompile(he),this.addHandles(qt(()=>this.isEnabled(),()=>this._enableTime=ie(0)))}destroy(){this._passParameters.noiseTexture=Xt(this._passParameters.noiseTexture)}render(t){const e=t.find(({name:y})=>y==="normals"),a=e?.getTexture(),o=e?.getTexture(Aa);if(!a||!o)return;const r=this.techniques.get(me),s=this.techniques.get(he);if(!r.compiled||!s.compiled)return this._enableTime=ie(performance.now()),void this.requestRender(1);this._enableTime===0&&(this._enableTime=ie(performance.now()));const n=this.renderingContext,d=this.view.qualitySettings.fadeDuration,u=this.bindParameters,c=u.camera,g=c.relativeElevation,v=Jt((Je-g)/(Je-lo),0,1),w=d>0?Math.min(d,performance.now()-this._enableTime)/d:1,O=w*v;this._passParameters.normalTexture=a,this._passParameters.depthTexture=o,this._passParameters.projScale=1/c.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*bo/De(c)**6*O;const f=c.fullViewport[2],$=c.fullViewport[3],V=this.fboCache.acquire(f,$,"ssao input",2);n.bindFramebuffer(V.fbo),n.setViewport(0,0,f,$),n.bindTechnique(r,u,this._passParameters,this._drawParameters),n.screen.draw();const E=Math.round(f/J),R=Math.round($/J),Z=this.fboCache.acquire(E,R,"ssao blur",0);n.bindFramebuffer(Z.fbo),this._drawParameters.colorTexture=V.getTexture(),se(this._drawParameters.blurSize,0,J/$),n.bindTechnique(s,u,this._passParameters,this._drawParameters),n.setViewport(0,0,E,R),n.screen.draw(),V.release();const P=this.fboCache.acquire(E,R,Ue.SSAO,0);return n.bindFramebuffer(P.fbo),n.setViewport(0,0,f,$),n.setClearColor(1,1,1,0),n.clear(16384),this._drawParameters.colorTexture=Z.getTexture(),se(this._drawParameters.blurSize,J/f,0),n.bindTechnique(s,u,this._passParameters,this._drawParameters),n.setViewport(0,0,E,R),n.screen.draw(),n.setViewport4fv(c.fullViewport),Z.release(),w<1&&this.requestRender(2),P}};l([B()],X.prototype,"consumes",void 0),l([B()],X.prototype,"produces",void 0),l([B({constructOnly:!0})],X.prototype,"isEnabled",void 0),X=l([U("esri.views.3d.webgl-engine.effects.ssao.SSAO")],X);const bo=.5;function Ae(t,e){e.receiveAmbientOcclusion?(t.uniforms.add(new va("ssaoTex",a=>a.ssao?.getTexture())),t.constants.add("blurSizePixelsInverse","float",1/J),t.code.add(i`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):t.code.add(i`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function wo(t,e){const a=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;a===0?(t.uniforms.add(new k("lightingAmbientSH0",({lighting:o})=>I(et,o.sh.r[0],o.sh.g[0],o.sh.b[0]))),t.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):a===1?(t.uniforms.add(new S("lightingAmbientSH_R",({lighting:o})=>C(z,o.sh.r[0],o.sh.r[1],o.sh.r[2],o.sh.r[3])),new S("lightingAmbientSH_G",({lighting:o})=>C(z,o.sh.g[0],o.sh.g[1],o.sh.g[2],o.sh.g[3])),new S("lightingAmbientSH_B",({lighting:o})=>C(z,o.sh.b[0],o.sh.b[1],o.sh.b[2],o.sh.b[3]))),t.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):a===2&&(t.uniforms.add(new k("lightingAmbientSH0",({lighting:o})=>I(et,o.sh.r[0],o.sh.g[0],o.sh.b[0])),new S("lightingAmbientSH_R1",({lighting:o})=>C(z,o.sh.r[1],o.sh.r[2],o.sh.r[3],o.sh.r[4])),new S("lightingAmbientSH_G1",({lighting:o})=>C(z,o.sh.g[1],o.sh.g[2],o.sh.g[3],o.sh.g[4])),new S("lightingAmbientSH_B1",({lighting:o})=>C(z,o.sh.b[1],o.sh.b[2],o.sh.b[3],o.sh.b[4])),new S("lightingAmbientSH_R2",({lighting:o})=>C(z,o.sh.r[5],o.sh.r[6],o.sh.r[7],o.sh.r[8])),new S("lightingAmbientSH_G2",({lighting:o})=>C(z,o.sh.g[5],o.sh.g[6],o.sh.g[7],o.sh.g[8])),new S("lightingAmbientSH_B2",({lighting:o})=>C(z,o.sh.b[5],o.sh.b[6],o.sh.b[7],o.sh.b[8]))),t.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`))}const et=x(),z=at();function pe(t){t.uniforms.add(new k("mainLightDirection",e=>e.lighting.mainLight.direction))}function ae(t){t.uniforms.add(new k("mainLightIntensity",e=>e.lighting.mainLight.intensity))}function yo(t){pe(t),ae(t),t.code.add(i`vec3 applyShading(vec3 shadingNormal, float shadow) {
float dotVal = clamp(dot(shadingNormal, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function Mo(t){t.code.add(i`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG) {
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.code.add(i`float integratedRadiance(float cosTheta2, float roughness) {
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.code.add(i`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness) {
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Ge(t,e){t.include(Ve),e.pbrMode!==1&&e.pbrMode!==2&&e.pbrMode!==5&&e.pbrMode!==6||(t.code.add(i`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),t.code.add(i`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==1&&e.pbrMode!==2||(t.include(Mo),t.code.add(i`struct PBRShadingInfo
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
};`),t.code.add(i`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`))}function $r(t,e){t.include(Ve),t.code.add(i`
    struct PBRShadingWater {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),t.code.add(i`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),t.code.add(i`float normalDistributionWater(float NdotH, float roughness) {
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),t.code.add(i`float geometricOcclusionKelemen(float LoH) {
return 0.25 / (LoH * LoH);
}`),t.code.add(i`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max) {
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}function To(t){t.code.add(i`float mapChannel(float x, vec2 p) {
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),t.code.add(i`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}function So(t){t.code.add(i`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`),t.code.add(i`vec3 tonemapKhronosNeutral(vec3 color, float exposure) {
const float startCompression = 0.76;
const float desaturation = 0.15;
color *= exposure;
float x = min( color.r, min( color.g, color.b ) );
float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
color -= offset;
float peak = max( color.r, max( color.g, color.b ) );
if ( peak < startCompression ) {
return color;
}
float d = 1.0 - startCompression;
float newPeak = 1.0 - d * d / ( peak + d - startCompression );
color *= newPeak / peak;
float g = 1.0 - 1.0 / ( desaturation * ( peak - newPeak ) + 1.0 );
return mix( color, vec3( newPeak ), g );
}`)}function je(t){t.constants.add("ambientBoostFactor","float",xa)}function He(t){t.uniforms.add(new L("lightingGlobalFactor",e=>e.lighting.globalFactor))}function Ot(t,e){const{pbrMode:a,spherical:o,hasColorTexture:r}=e;t.include(Ae,e),a!==0&&t.include(Ge,e),t.include(wo,e),t.include(Ve),t.include(So,e),t.include(ft);const s=!(a===2&&!r);switch(s&&t.include(To),t.code.add(i`
    ${p(a!==0,"const float GROUND_REFLECTANCE = 0.2;")}
  `),je(t),He(t),pe(t),t.code.add(i`
    float additionalDirectedAmbientLight(float lightAlignment) {
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }

    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float lightAlignment = dot(${o?i`normalize(vPosWorld)`:i`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }
  `),ae(t),t.code.add(i`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),a){case 0:case 4:case 3:t.include(yo),t.code.add(i`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = linearizeGamma(albedo);
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return delinearizeGamma(outColor);
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
inputs.albedoLinear = linearizeGamma(albedo);
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),t.code.add(i`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?t.uniforms.add(new ga("hasFillLights",n=>n.enableFillLights)):t.constants.add("hasFillLights","bool",!1),t.code.add(i`vec3 ambientDir = vec3(5.0 * groundNormal[1] - groundNormal[0] * groundNormal[2], - 5.0 * groundNormal[0] - groundNormal[2] * groundNormal[1], groundNormal[1] * groundNormal[1] + groundNormal[0] * groundNormal[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),t.uniforms.add(new L("lightingSpecularStrength",n=>n.lighting.mainLight.specularStrength),new L("lightingEnvironmentStrength",n=>n.lighting.mainLight.environmentStrength)).code.add(i`vec3 horizonRingDir = inputs.RdotNG * groundNormal - reflectedView;
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
        ${s?i`vec3 outColor = blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance);`:i`vec3 outColor = max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance);`}
        return delinearizeGamma(outColor);
      }
    `);break;case 5:case 6:pe(t),ae(t),t.code.add(i`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = linearizeGamma(c);
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
vec3 outColor = delinearizeGamma(outColorLinear);
return outColor;
}`)}}function _o(t,e){const a=t.fragment;switch(a.code.add(i`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case 0:a.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case 1:a.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case 2:a.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:e.doubleSidedMode;case 3:}}function It(t,e){const a=e.pbrMode,o=t.fragment;if(a!==2&&a!==0&&a!==1)return void o.code.add(i`void applyPBRFactors() {}`);if(a===0)return void o.code.add(i`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(a===2)return void o.code.add(i`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:r,hasMetallicRoughnessTextureTransform:s,hasOcclusionTexture:n,hasOcclusionTextureTransform:d,bindType:u}=e;(r||n)&&t.include(dt,e),o.code.add(i`vec3 mrr;
float occlusion;`),r&&o.uniforms.add(u===1?new M("texMetallicRoughness",c=>c.textureMetallicRoughness):new le("texMetallicRoughness",c=>c.textureMetallicRoughness)),n&&o.uniforms.add(u===1?new M("texOcclusion",c=>c.textureOcclusion):new le("texOcclusion",c=>c.textureOcclusion)),o.uniforms.add(u===1?new te("mrrFactors",c=>c.mrrFactors):new ba("mrrFactors",c=>c.mrrFactors)),o.code.add(i`
    ${p(r,i`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${p(n,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${n?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${p(r,`applyMetallicRoughness(${s?"metallicRoughnessUV":"vuv0"});`)}
      ${p(n,`applyOcclusion(${d?"occlusionUV":"vuv0"});`)}
    }
  `)}function Co(t,e){const a=re(e.output)&&e.receiveShadows;a&&Ba(t,!0),t.vertex.code.add(i`
    void forwardLinearDepthToReadShadowMap() { ${p(a,"forwardLinearDepth(gl_Position.w);")} }
  `)}let zo=class extends ve{constructor(e,a,o,r){super(e,"mat4",2,(s,n,d,u)=>s.setUniformMatrices4fv(e,a(n,d,u),r),o)}},$o=class extends ve{constructor(e,a,o,r){super(e,"mat4",1,(s,n,d)=>s.setUniformMatrices4fv(e,a(n,d),r),o)}};function Fo(t){t.fragment.uniforms.add(new $o("shadowMapMatrix",(e,a)=>a.shadowMap.getShadowMapMatrices(e.origin),4)),Lt(t)}function No(t){t.fragment.uniforms.add(new zo("shadowMapMatrix",(e,a)=>a.shadowMap.getShadowMapMatrices(e.origin),4)),Lt(t)}function Lt(t){const{fragment:e}=t;e.uniforms.add(new S("cascadeDistances",a=>a.shadowMap.cascadeDistances),new wa("numCascades",a=>a.shadowMap.numCascades)),e.code.add(i`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
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
}`)}function Oo(t){t.fragment.code.add(i`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}let Io=class extends ve{constructor(e,a){super(e,"sampler2DShadow",0,(o,r)=>o.bindTexture(e,a(r)))}};function Vt(t,e){e.receiveShadows&&t.include(Fo),Rt(t,e)}function Et(t,e){e.receiveShadows&&t.include(No),Rt(t,e)}function Rt(t,e){t.fragment.uniforms.add(new L("lightingGlobalFactor",r=>r.lighting.globalFactor));const{receiveShadows:a,spherical:o}=e;t.include(Co,e),a&&Lo(t),t.fragment.code.add(i`
    float readShadow(float additionalAmbientScale, vec3 vpos) {
      return ${a?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":p(o,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};
    }
  `)}function Lo(t){t.include(Oo),t.fragment.uniforms.add(new Io("shadowMap",({shadowMap:e})=>e.depthTexture)).code.add(i`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap,0));
if (uvzShadow.z < 0.0) {
return 0.0;
}
return readShadowMapUVZ(uvzShadow, shadowMap);
}`)}function Vo(t,e){e.hasColorTextureTransform?(t.varyings.add("colorUV","vec2"),t.vertex.uniforms.add(new N("colorTextureTransformMatrix",a=>a.colorTextureTransformMatrix??Y)).code.add(i`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(i`void forwardColorUV(){}`)}function Eo(t,e){e.hasNormalTextureTransform&&e.textureCoordinateType!==0?(t.varyings.add("normalUV","vec2"),t.vertex.uniforms.add(new N("normalTextureTransformMatrix",a=>a.normalTextureTransformMatrix??Y)).code.add(i`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(i`void forwardNormalUV(){}`)}function Ro(t,e){e.hasEmissionTextureTransform&&e.textureCoordinateType!==0?(t.varyings.add("emissiveUV","vec2"),t.vertex.uniforms.add(new N("emissiveTextureTransformMatrix",a=>a.emissiveTextureTransformMatrix??Y)).code.add(i`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(i`void forwardEmissiveUV(){}`)}function Po(t,e){e.hasOcclusionTextureTransform&&e.textureCoordinateType!==0?(t.varyings.add("occlusionUV","vec2"),t.vertex.uniforms.add(new N("occlusionTextureTransformMatrix",a=>a.occlusionTextureTransformMatrix??Y)).code.add(i`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(i`void forwardOcclusionUV(){}`)}function Do(t,e){e.hasMetallicRoughnessTextureTransform&&e.textureCoordinateType!==0?(t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.uniforms.add(new N("metallicRoughnessTextureTransformMatrix",a=>a.metallicRoughnessTextureTransformMatrix??Y)).code.add(i`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(i`void forwardMetallicRoughnessUV(){}`)}function Pt(t,e){e.snowCover&&(t.uniforms.add(new L("snowCover",a=>a.snowCover)).code.add(i`float getSnow(vec3 normal, vec3 groundNormal) {
return smoothstep(0.5, 0.55, dot(normal, groundNormal)) * snowCover;
}
float getRealisticTreeSnow(vec3 faceNormal, vec3 shadingNormal, vec3 groundNormal) {
float snow = min(1.0, smoothstep(0.5, 0.55, dot(faceNormal, groundNormal)) +
smoothstep(0.5, 0.55, dot(-faceNormal, groundNormal)) +
smoothstep(0.0, 0.1, dot(shadingNormal, groundNormal)));
return snow * snowCover;
}`),t.code.add(i`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}`))}function Ao(t){const e=new ye,{attributes:a,vertex:o,fragment:r,varyings:s}=e,{output:n,normalType:d,offsetBackfaces:u,spherical:c,snowCover:g,pbrMode:v,textureAlphaPremultiplied:w,instancedDoublePrecision:O,hasVertexColors:f,hasVertexTangents:$,hasColorTexture:V,hasNormalTexture:E,hasNormalTextureTransform:R,hasColorTextureTransform:Z}=t;if(D(o,t),a.add("position","vec3"),s.add("vpos","vec3",{invariant:!0}),e.include(Q,t),e.include($t,t),e.include(vt,t),e.include(Vo,t),!re(n))return e.include(Nt,t),e;e.include(Eo,t),e.include(Ro,t),e.include(Po,t),e.include(Do,t),ce(o,t),e.include(Me,t),e.include(A);const P=d===0||d===1;return P&&u&&e.include(Ct),e.include(no,t),e.include(St,t),e.include(zt,t),s.add("vPositionLocal","vec3"),e.include(G,t),e.include(Ft,t),e.include(gt,t),o.uniforms.add(new xt("externalColor",y=>y.externalColor,{supportsNaN:!0})),s.add("vcolorExt","vec4"),e.include(bt,t),o.include(xe),o.include(wt),e.include(O?Vt:Et,t),o.main.add(i`
    forwardVertexColor();

    MaskedColor maskedColor =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColor.color;
    forwardColorMixMode(maskedColor.mask);

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${p(P,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${p($,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${p(P&&u,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (opacityMixMode != ${i.int(K.ignore)} && vcolorExt.a < ${i.float(oe)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadowMap();
  `),r.include(Ot,t),r.include(Ae,t),e.include(H,t),r.include(j,t),e.include(yt,t),ce(r,t),r.uniforms.add(o.uniforms.get("localOrigin"),new te("ambient",y=>y.ambient),new te("diffuse",y=>y.diffuse),new F("opacity",y=>y.opacity),new F("layerOpacity",y=>y.layerOpacity)),V&&r.uniforms.add(new M("tex",y=>y.texture)),e.include(It,t),r.include(Ge,t),r.include(Mt),e.include(_o,t),r.include(Pt,t),je(r),He(r),ae(r),r.main.add(i`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${V?i`
            vec4 texColor = texture(tex, ${Z?"colorUV":"vuv0"});
            ${p(w,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:i`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${d===2?i`vec3 normal = screenDerivativeNormal(vPositionLocal);`:i`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${p(f,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
    float opacity_ = layerOpacity * mixExternalOpacity(${p(f,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, opacityMixMode);

    ${E?`mat3 tangentSpace = computeTangentSpace(${$?"normal":"normal, vpos, vuv0"});
            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${R?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${c?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${p(g,i`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${v===1||v===2?i`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${p(g,"mrr = applySnowToMRR(mrr, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${p(g,", snow")});
  `),e}const Go=Object.freeze(Object.defineProperty({__proto__:null,build:Ao},Symbol.toStringTag,{value:"Module"}));let jo=class extends Za{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=oo,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=2,this.instanced=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.instanceColorEncodesAlphaIgnore=!1,this.emissiveStrengthFromSymbol=0,this.emissiveStrengthKHR=1,this.emissiveSource=1,this.emissiveBaseColor=Ie,this.instancedDoublePrecision=!1,this.normalType=0,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=ee(.2,.2,.2),this.diffuse=ee(.8,.8,.8),this.externalColor=Kt(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=x(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.drivenOpacity=!1,this.writeDepth=!0,this.customDepthTest=0,this.textureAlphaMode=0,this.textureAlphaCutoff=oe,this.textureAlphaPremultiplied=!1,this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}};class Lr extends qa{constructor(){super(...arguments),this.origin=x(),this.slicePlaneLocalOrigin=this.origin}}let fe=class extends Le{constructor(e,a){let o=Ne(Dt(a));a.instanced&&a.instancedDoublePrecision&&(o=o.concat(Ne(ao(a)))),super(e,a,o),this.shader=new be(Go,()=>we(()=>import("./LineCallout.glsl-DvxhBYhf.js").then(r=>r.E),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62]),import.meta.url))}_makePipeline(e,a){const{oitPass:o,output:r,hasEmission:s,transparent:n,cullFace:d,customDepthTest:u,hasOccludees:c}=e;return Re({blending:re(r)&&n?$a(o):null,culling:Bo(e)?Da(d):null,depthTest:za(o,Ho(u)),depthWrite:Ca(e),drawBuffers:_a(r,Fa(o,s)),colorWrite:Pe,stencilWrite:c?Sa:null,stencilTest:c?a?Ma:Ta:null,polygonOffset:ya(e)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e,a){return a?this._occludeePipelineState:super.getPipeline(e)}};function Ho(t){switch(t){case 1:return 515;case 0:case 3:return 513;case 2:return 516}}function Bo(t){return t.cullFace!==0||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}function Dt(t){const e=Ee().vec3f("position");return t.normalType===1?e.vec2i16("normalCompressed",{glNormalized:!0}):e.vec3f("normal"),t.hasVertexTangents&&e.vec4f("tangent"),t.hasTextures&&e.vec2f16("uv0"),t.hasVertexColors&&e.vec4u8("color",{glNormalized:!0}),t.hasSymbolColors&&e.vec4u8("symbolColor"),!t.instanced&&st()&&e.vec4u8("olidColor"),e}fe=l([U("esri.views.3d.webgl-engine.shaders.DefaultMaterialTechnique")],fe);class h extends Na{constructor(e){super(),this.spherical=e,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.pbrMode=0,this.cullFace=0,this.normalType=0,this.customDepthTest=0,this.emissionSource=0,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.instanced=!1,this.instancedDoublePrecision=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0,this.draped=!1}get textureCoordinateType(){return this.hasTextures?1:0}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||this.emissionSource===3||this.hasOcclusionTexture}get hasVVInstancing(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}l([m({count:4})],h.prototype,"alphaDiscardMode",void 0),l([m({count:3})],h.prototype,"doubleSidedMode",void 0),l([m({count:7})],h.prototype,"pbrMode",void 0),l([m({count:3})],h.prototype,"cullFace",void 0),l([m({count:3})],h.prototype,"normalType",void 0),l([m({count:3})],h.prototype,"customDepthTest",void 0),l([m({count:8})],h.prototype,"emissionSource",void 0),l([m()],h.prototype,"hasVertexColors",void 0),l([m()],h.prototype,"hasSymbolColors",void 0),l([m()],h.prototype,"hasVerticalOffset",void 0),l([m()],h.prototype,"hasColorTexture",void 0),l([m()],h.prototype,"hasMetallicRoughnessTexture",void 0),l([m()],h.prototype,"hasOcclusionTexture",void 0),l([m()],h.prototype,"hasNormalTexture",void 0),l([m()],h.prototype,"hasScreenSizePerspective",void 0),l([m()],h.prototype,"hasVertexTangents",void 0),l([m()],h.prototype,"hasOccludees",void 0),l([m()],h.prototype,"instanced",void 0),l([m()],h.prototype,"instancedDoublePrecision",void 0),l([m()],h.prototype,"hasModelTransformation",void 0),l([m()],h.prototype,"offsetBackfaces",void 0),l([m()],h.prototype,"hasVVSize",void 0),l([m()],h.prototype,"hasVVColor",void 0),l([m()],h.prototype,"receiveShadows",void 0),l([m()],h.prototype,"receiveAmbientOcclusion",void 0),l([m()],h.prototype,"textureAlphaPremultiplied",void 0),l([m()],h.prototype,"instancedFeatureAttribute",void 0),l([m()],h.prototype,"instancedColor",void 0),l([m()],h.prototype,"writeDepth",void 0),l([m()],h.prototype,"transparent",void 0),l([m()],h.prototype,"enableOffset",void 0),l([m()],h.prototype,"terrainDepthTest",void 0),l([m()],h.prototype,"cullAboveTerrain",void 0),l([m()],h.prototype,"snowCover",void 0),l([m()],h.prototype,"hasColorTextureTransform",void 0),l([m()],h.prototype,"hasEmissionTextureTransform",void 0),l([m()],h.prototype,"hasNormalTextureTransform",void 0),l([m()],h.prototype,"hasOcclusionTextureTransform",void 0),l([m()],h.prototype,"hasMetallicRoughnessTextureTransform",void 0);function ko(t){const e=new ye,{attributes:a,vertex:o,fragment:r,varyings:s}=e,{output:n,offsetBackfaces:d,pbrMode:u,snowCover:c,spherical:g}=t,v=u===1||u===2;if(D(o,t),a.add("position","vec3"),s.add("vpos","vec3",{invariant:!0}),e.include(Q,t),e.include($t,t),e.include(vt,t),e.include(bt,t),!re(n))return e.include(Nt,t),e;ce(e.vertex,t),e.include(Me,t),e.include(A),d&&e.include(Ct),s.add("vNormalWorld","vec3"),s.add("localvpos","vec3",{invariant:!0}),e.include(G,t),e.include(Ft,t),e.include(zt,t),e.include(gt,t),o.include(xe),o.include(wt),o.uniforms.add(new xt("externalColor",f=>f.externalColor,{supportsNaN:!0})),s.add("vcolorExt","vec4"),e.include(t.instancedDoublePrecision?Vt:Et,t),o.main.add(i`
    forwardVertexColor();

    MaskedColor maskedColorExt =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColorExt.color;
    forwardColorMixMode(maskedColorExt.mask);

    bool alphaCut = opacityMixMode != ${i.int(K.ignore)} && vcolorExt.a < ${i.float(oe)};
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
    ${p(d,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
  `);const{hasColorTexture:w,hasColorTextureTransform:O}=t;return r.include(Ot,t),r.include(Ae,t),e.include(H,t),r.include(j,t),e.include(yt,t),ce(r,t),pe(r),je(r),He(r),r.uniforms.add(o.uniforms.get("localOrigin"),o.uniforms.get("view"),new te("ambient",f=>f.ambient),new te("diffuse",f=>f.diffuse),new F("opacity",f=>f.opacity),new F("layerOpacity",f=>f.layerOpacity)),w&&r.uniforms.add(new M("tex",f=>f.texture)),e.include(It,t),r.include(Ge,t),r.include(Mt),r.include(Pt,t),ae(r),r.main.add(i`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${w?`texture(tex, ${O?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${p(w,`${p(t.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = readShadow(additionalAmbientScale, vpos);
      vec3 matColor = max(ambient, diffuse);
      ${t.hasVertexColors?i`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, opacityMixMode);`:i`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, opacityMixMode);`}

      vec3 shadingNormal = normalize(vNormalWorld);
      vec3 groundNormal = ${g?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};

      ${p(c,`vec3 faceNormal = screenDerivativeNormal(vpos);
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
            ${p(c,"mrr = applySnowToMRR(mrr, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, groundNormal, mrr, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${p(c,", 1.0")});`),e}const Wo=Object.freeze(Object.defineProperty({__proto__:null,build:ko},Symbol.toStringTag,{value:"Module"}));let Oe=class extends fe{constructor(){super(...arguments),this.shader=new be(Wo,()=>we(()=>import("./LineCallout.glsl-DvxhBYhf.js").then(t=>t.R),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62]),import.meta.url))}};Oe=l([U("esri.views.3d.webgl-engine.shaders.RealisticTreeTechnique")],Oe);class Er extends Oa{constructor(e,a){super(e,Yo),this.materialType="default",this.supportsEdges=!0,this.intersectDraped=void 0,this.produces=new Map([[2,o=>(Se(o)||_e(o))&&!this.transparent],[4,o=>(Se(o)||_e(o))&&this.transparent&&this.parameters.writeDepth],[9,o=>(Se(o)||_e(o))&&this.transparent&&!this.parameters.writeDepth]]),this._layout=Dt(this.parameters),this._configuration=new h(a.spherical)}isVisibleForOutput(e){return e!==3&&e!==5&&e!==4||this.parameters.castShadows}get visible(){const{layerOpacity:e,colorMixMode:a,opacity:o,externalColor:r}=this.parameters;return e*(a==="replace"?1:o)*(a==="ignore"||isNaN(r[3])?1:r[3])>=oe}get _hasEmissiveBase(){return!!this.parameters.emissiveTextureId||!it(this.parameters.emissiveBaseColor,Ie)}get hasEmissions(){return this.parameters.emissiveStrength>0&&(this.parameters.emissiveSource===0&&this._hasEmissiveBase||this.parameters.emissiveSource===1)}getConfiguration(e,a){const{parameters:o,_configuration:r}=this,{treeRendering:s,doubleSided:n,doubleSidedType:d}=o;return super.getConfiguration(e,a,this._configuration),r.hasNormalTexture=o.hasNormalTexture,r.hasColorTexture=o.hasColorTexture,r.hasMetallicRoughnessTexture=o.hasMetallicRoughnessTexture,r.hasOcclusionTexture=o.hasOcclusionTexture,r.hasVertexTangents=!s&&o.hasVertexTangents,r.instanced=o.instanced,r.instancedDoublePrecision=o.instancedDoublePrecision,r.hasVVColor=!!o.vvColor,r.hasVVSize=!!o.vvSize,r.hasVerticalOffset=o.verticalOffset!=null,r.hasScreenSizePerspective=o.screenSizePerspective!=null,r.hasSlicePlane=o.hasSlicePlane,r.alphaDiscardMode=o.textureAlphaMode,r.normalType=s?0:o.normalType,r.transparent=this.transparent,r.writeDepth=o.writeDepth,r.customDepthTest=o.customDepthTest??0,r.hasOccludees=a.hasOccludees,r.cullFace=o.hasSlicePlane?0:o.cullFace,r.cullAboveTerrain=a.cullAboveTerrain,r.hasModelTransformation=!s&&o.modelTransformation!=null,r.hasVertexColors=o.hasVertexColors,r.hasSymbolColors=o.hasSymbolColors,r.doubleSidedMode=s?2:n&&d==="normal"?1:n&&d==="winding-order"?2:0,r.instancedFeatureAttribute=o.instancedFeatureAttribute,r.instancedColor=o.instancedColor,re(e)?(r.terrainDepthTest=a.terrainDepthTest,r.receiveShadows=o.receiveShadows,r.receiveAmbientOcclusion=o.receiveAmbientOcclusion&&a.ssao!=null):(r.terrainDepthTest=!1,r.receiveShadows=r.receiveAmbientOcclusion=!1),r.textureAlphaPremultiplied=!!o.textureAlphaPremultiplied,r.pbrMode=o.usePBR?o.isSchematic?2:1:0,r.emissionSource=o.emissionSource,r.offsetBackfaces=!(!this.transparent||!o.offsetTransparentBackfaces),r.enableOffset=a.enableOffset,r.snowCover=a.snowCover>0,r.hasColorTextureTransform=!!o.colorTextureTransformMatrix,r.hasNormalTextureTransform=!!o.normalTextureTransformMatrix,r.hasEmissionTextureTransform=!!o.emissiveTextureTransformMatrix,r.hasOcclusionTextureTransform=!!o.occlusionTextureTransformMatrix,r.hasMetallicRoughnessTextureTransform=!!o.metallicRoughnessTextureTransformMatrix,r}intersect(e,a,o,r,s,n){if(this.parameters.verticalOffset!=null){const d=o.camera;I(Fe,a[12],a[13],a[14]);let u=null;switch(o.viewingMode){case 1:u=ta(tt,Fe);break;case 2:u=Qt(tt,Jo)}const c=Te(Ko,Fe,d.eye),g=aa(c),v=We(c,c,1/g);let w=null;this.parameters.screenSizePerspective&&(w=oa(u,v));const O=Ia(d,g,this.parameters.verticalOffset,w??0,this.parameters.screenSizePerspective,null);We(u,u,O),ra($e,u,o.transform.inverseRotation),r=Te(qo,r,$e),s=Te(Xo,s,$e)}La(e,o,r,s,Va(o.verticalOffset),n)}createGLMaterial(e){return new Uo(e)}createBufferWriter(){return new Ea(this._layout)}get transparent(){return Zo(this.parameters)}}class Uo extends Ra{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const a=this._material.parameters;this.updateTexture(a.textureId);const o=e.camera.viewInverseTransposeMatrix;return I(a.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(a.treeRendering?Oe:fe,e)}}class Yo extends jo{constructor(){super(...arguments),this.treeRendering=!1,this.hasVertexTangents=!1}get hasNormalTexture(){return!this.treeRendering&&!!this.normalTextureId}get hasColorTexture(){return!!this.textureId}get hasMetallicRoughnessTexture(){return!this.treeRendering&&!!this.metallicRoughnessTextureId}get hasOcclusionTexture(){return!this.treeRendering&&!!this.occlusionTextureId}get emissiveStrength(){return this.emissiveStrengthFromSymbol*this.emissiveStrengthKHR}get emissionSource(){return this.treeRendering?0:this.emissiveTextureId!=null&&this.emissiveSource===0?3:this.emissiveSource===0?2:1}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||this.emissionSource===3||this.hasOcclusionTexture}}function Zo(t){const{drivenOpacity:e,opacity:a,externalColor:o,layerOpacity:r,texture:s,textureId:n,textureAlphaMode:d,colorMixMode:u}=t,c=o[3];return e||a<1&&u!=="replace"||c<1&&u!=="ignore"||r<1||(s!=null||n!=null)&&d!==1&&d!==2&&u!=="replace"}const qo=x(),Xo=x(),Jo=ea(0,0,1),tt=x(),$e=x(),Fe=x(),Ko=x();export{q as F,Ao as J,Lr as M,Er as R,ko as _,ho as a,ao as b,gr as c,ro as d,Ot as e,Et as f,Ae as g,je as h,yr as i,He as j,Pt as k,ae as l,pe as m,It as n,oo as o,De as p,$r as q,_o as r,So as s,br as t,wr as u,co as v,lo as w,Je as x,wo as y};
