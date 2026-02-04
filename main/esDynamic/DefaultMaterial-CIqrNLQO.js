import{o as V,H as Ue,s as Zt,A as $t,c as Me,r as Xt,g as ke,P as Kt,N as Qt}from"./vec32-y2_p7lFt.js";import{g1 as Te,az as x,cR as G,cY as _e,_ as c,X as A,Y as Ye,N as ea,dh as ta,gp as aa,lm as oa,hV as ra,o6 as Je,o7 as ia,o8 as na,hN as $,hM as Se,gv as qe,gn as sa,o9 as j,hU as ie,f7 as ne,av as la,eB as ca,aJ as da,dY as ua,cS as ha}from"./main-6gYsRPh_.js";import{a6 as L,i as se,d as le,a7 as O,a as Ze,a8 as ce,a9 as $e,aa as Xe,ab as ma,ac as B,ad as pa,ae as fa,af as va,f as ga,ag as X,r as I,a2 as K,D as H,E as W,ah as U,G as Q,b as y,I as k,ai as xa,H as ba,aj as wa,ak as Ke,q as de,al as Qe,o as et,am as tt,g as ya,j as Ce,k as ue,s as at,an as Ma,ao as Ta,u as _a,v as ot,ap as Sa,aq as _,ar as ze,as as Ca,at as za,c as ee,au as Fa,X as te,av as Na,M as Oa,aw as rt,ax as he,F as it,L as nt,K as st,ay as lt,J as ct,N as Ia,T as Va,O as La,P as Ra,Q as Ea,R as Pa,U as Da,V as Ga,W as Aa,Y as ja,x as m,A as Ba,az as Fe,aA as Ne,a1 as Ha,aB as Wa,B as Ua,aC as ka,a3 as Ya,aD as Ja}from"./OutputColorHighlightOID.glsl-DFapDy4Y.js";import{n as dt,r as qa}from"./vec4f64-DD-nkcCV.js";import{t as Oe,Q as Ie}from"./InterleavedLayout-DLNH5t-m.js";import{t as i,n as p}from"./glsl-CfY1Aoj6.js";import{s as S,T as ut,g as me,I as ht}from"./BufferView-HzgIqv05.js";import{r as Za}from"./VertexBuffer-CO7g4WaF.js";import{c as $a}from"./mat4-BV6dbHOa.js";import{g as Xa}from"./plane-BYZ-oMEJ.js";import{a as Ka,n as mt}from"./vec2f64-CkowXrDb.js";import{s as pe}from"./ShaderBuilder-DauPte2P.js";import{T as Ve,d as Le,_ as Qa}from"./renderState-CsafAKLy.js";import{n as eo}from"./enums-DDJfd4_p.js";import{h as to,A as ao}from"./Texture-BmeYLtsX.js";import{s as C}from"./vec42-CDRvr0BM.js";import{t as oo}from"./VertexAttributeLocations-DBgVVQz-.js";function fe(e,t){switch(e.fragment.code.add(i`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`),t.normalType){case 1:e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(i`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case 0:e.attributes.add("normal","vec3"),e.vertex.code.add(i`vec3 normalModel() {
return normal;
}`);break;default:Te(t.normalType);case 2:case 3:}}function ro({code:e,uniforms:t},a){t.add(new L("dpDummy",()=>1)),e.add(i`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 hiD = hiA + hiB;
vec3 loD = loA + loB;
return  dpDummy * hiD + loD;
}`)}let io=class extends se{constructor(e,t,a){super(e,"mat3",2,(r,o,s)=>r.setUniformMatrix3fv(e,t(o,s),a))}},no=class extends le{constructor(){super(...arguments),this.transformWorldFromViewTH=x(),this.transformWorldFromViewTL=x(),this.transformViewFromCameraRelativeRS=G(),this.transformProjFromView=_e()}},so=class extends le{constructor(){super(...arguments),this.transformWorldFromModelRS=G(),this.transformWorldFromModelTH=x(),this.transformWorldFromModelTL=x()}};function pt(e,t){switch(t.normalType){case 0:case 1:e.include(fe,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new io("transformNormalGlobalFromModel",a=>a.transformNormalGlobalFromModel),new O("transformNormalViewFromGlobal",a=>a.transformNormalViewFromGlobal)).code.add(i`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case 2:e.vertex.code.add(i`void forwardNormal() {}`);break;default:Te(t.normalType);case 3:}}let lo=class extends no{constructor(){super(...arguments),this.transformNormalViewFromGlobal=G()}},co=class extends so{constructor(){super(...arguments),this.transformNormalGlobalFromModel=G(),this.toMapSpace=dt()}},uo=class{constructor(e,t,a){this.elementSize=t.stride,this._buffer=new Za(e,Oe(t,1)),this.resize(a)}destroy(){this._buffer.dispose()}get capacity(){return this._capacity}get array(){return this._array}get buffer(){return this._buffer}get usedMemory(){return this._array.byteLength+this._buffer.usedMemory}copyRange(e,t,a,r=0){const o=new Uint8Array(this.array,e*this.elementSize,(t-e)*this.elementSize);new Uint8Array(a.array,r*this.elementSize).set(o)}transferAll(){this._buffer.setData(this._array)}transferRange(e,t){const a=e*this.elementSize,r=t*this.elementSize;this._buffer.setSubData(new Uint8Array(this._array),a,a,r)}resize(e){const t=e*this.elementSize,a=new ArrayBuffer(t);this._array&&(e>=this._capacity?new Uint8Array(a).set(new Uint8Array(this._array)):new Uint8Array(a).set(new Uint8Array(this._array).subarray(0,e*this.elementSize))),this._array=a,this._buffer.setSize(t),this._capacity=e}};class ft{constructor(t){this.localTransform=t.localTransform,this.globalTransform=t.globalTransform,this.modelOrigin=t.modelOrigin,this.model=t.instanceModel,this.modelNormal=t.instanceModelNormal,this.modelScaleFactors=t.modelScaleFactors,this.boundingSphere=t.boundingSphere,this.featureAttribute=t.getField("instanceFeatureAttribute",ut),this.color=t.getField("instanceColor",me),this.olidColor=t.getField("instanceOlidColor",me),this.state=t.getField("state",ht),this.lodLevel=t.getField("lodLevel",ht)}}let Y=class extends ea{constructor(e,t){super(e),this.events=new ta,this._capacity=0,this._size=0,this._next=0,this._highlightOptionsMap=new Map,this._highlightOptionsMapPrev=new Map,this._layout=po(t),this._capacity=ve,this._buffer=this._layout.createBuffer(this._capacity),this._view=new ft(this._buffer)}get capacity(){return this._capacity}get size(){return this._size}get view(){return this._view}addInstance(){this._size+1>this._capacity&&this._grow();const e=this._findSlot();return this._view.state.set(e,1),this._size++,this.events.emit("instances-changed"),e}removeInstance(e){const t=this._view.state;S(e>=0&&e<this._capacity&&!!(1&t.get(e)),"invalid instance handle"),this._getStateFlag(e,18)?this._setStateFlags(e,32):this.freeInstance(e),this.events.emit("instances-changed")}freeInstance(e){const t=this._view.state;S(e>=0&&e<this._capacity&&!!(1&t.get(e)),"invalid instance handle"),t.set(e,0),this._size--}setLocalTransform(e,t,a=!0){this._view.localTransform.setMat(e,t),a&&this.updateModelTransform(e)}getLocalTransform(e,t){this._view.localTransform.getMat(e,t)}setGlobalTransform(e,t,a=!0){this._view.globalTransform.setMat(e,t),a&&this.updateModelTransform(e)}getGlobalTransform(e,t){this._view.globalTransform.getMat(e,t)}updateModelTransform(e){const t=this._view,a=b,r=T;t.localTransform.getMat(e,gt),t.globalTransform.getMat(e,Re);const o=$a(Re,Re,gt);V(a,o[12],o[13],o[14]),t.modelOrigin.setVec(e,a),aa(r,o),t.model.setMat(e,r);const s=Xa(b,o);s.sort(),t.modelScaleFactors.set(e,0,s[1]),t.modelScaleFactors.set(e,1,s[2]),oa(r,r),ra(r,r),t.modelNormal.setMat(e,r),this._setStateFlags(e,64),this.events.emit("instance-transform-changed",{index:e})}getModelTransform(e,t){const a=this._view;a.model.getMat(e,T),a.modelOrigin.getVec(e,b),t[0]=T[0],t[1]=T[1],t[2]=T[2],t[3]=0,t[4]=T[3],t[5]=T[4],t[6]=T[5],t[7]=0,t[8]=T[6],t[9]=T[7],t[10]=T[8],t[11]=0,t[12]=b[0],t[13]=b[1],t[14]=b[2],t[15]=1}applyShaderTransformation(e,t){this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,t)}getCombinedModelTransform(e,t){return this.getModelTransform(e,t),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,t),t}getCombinedLocalTransform(e,t){this._view.localTransform.getMat(e,t),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,t)}getCombinedMaxScaleFactor(e){let t=this._view.modelScaleFactors.get(e,1);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(b,this,e),t*=Math.max(b[0],b[1],b[2])),t}getCombinedMedianScaleFactor(e){let t=this._view.modelScaleFactors.get(e,0);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(b,this,e),t*=ho(b[0],b[1],b[2])),t}getModel(e,t){this._view.model.getMat(e,t)}setFeatureAttribute(e,t){this._view.featureAttribute?.setVec(e,t)}getFeatureAttribute(e,t){this._view.featureAttribute?.getVec(e,t)}setColor(e,t){this._view.color?.setVec(e,t)}setObjectAndLayerIdColor(e,t){this._view.olidColor?.setVec(e,t)}setVisible(e,t){t!==this.getVisible(e)&&(this._setStateFlag(e,4,t),this.events.emit("instance-visibility-changed",{index:e}))}getVisible(e){return this._getStateFlag(e,4)}setHighlight(e,t){const{_highlightOptionsMap:a}=this,r=a.get(e);t?t!==r&&(a.set(e,t),this._setStateFlag(e,8,!0),this.events.emit("instance-highlight-changed")):r&&(a.delete(e),this._setStateFlag(e,8,!1),this.events.emit("instance-highlight-changed"))}get highlightOptionsMap(){return this._highlightOptionsMap}getHighlightStateFlag(e){return this._getStateFlag(e,8)}geHighlightOptionsPrev(e){const t=this._highlightOptionsMapPrev.get(e)??null;return this._highlightOptionsMapPrev.delete(e),t}getHighlightName(e){const t=this.highlightOptionsMap.get(e)??null;return t?this._highlightOptionsMapPrev.set(e,t):this._highlightOptionsMapPrev.delete(e),t}getState(e){return this._view.state.get(e)}getLodLevel(e){return this._view.lodLevel.get(e)}countFlags(e){let t=0;for(let a=0;a<this._capacity;++a)this.getState(a)&e&&++t;return t}_setStateFlags(e,t){const a=this._view.state;t=a.get(e)|t,a.set(e,t)}_clearStateFlags(e,t){const a=this._view.state;t=a.get(e)&~t,a.set(e,t)}_setStateFlag(e,t,a){a?this._setStateFlags(e,t):this._clearStateFlags(e,t)}_getStateFlag(e,t){return!!(this._view.state.get(e)&t)}_grow(){this._capacity=Math.max(ve,Math.floor(this._capacity*Je)),this._buffer=this._layout.createBuffer(this._capacity).copyFrom(this._buffer),this._view=new ft(this._buffer)}_findSlot(){const e=this._view.state;let t=this._next;for(;1&e.get(t);)t=t+1===this._capacity?0:t+1;return this._next=t+1===this._capacity?0:t+1,t}};function ho(e,t,a){return Math.max(Math.min(e,t),Math.min(Math.max(e,t),a))}c([A({constructOnly:!0})],Y.prototype,"shaderTransformation",void 0),c([A()],Y.prototype,"_size",void 0),c([A({readOnly:!0})],Y.prototype,"size",null),Y=c([Ye("esri.views.3d.webgl-engine.lib.lodRendering.InstanceData")],Y);const mo=Ie().mat4f64("localTransform").mat4f64("globalTransform").vec4f64("boundingSphere").vec3f64("modelOrigin").mat3f("instanceModel").mat3f("instanceModelNormal").vec2f("modelScaleFactors");function po(e){return vt(mo.clone(),e).u8("state").u8("lodLevel")}function vt(e,t){return t.instancedFeatureAttribute&&e.vec4f("instanceFeatureAttribute"),t.instancedColor&&e.vec4u8("instanceColor"),Ze()&&e.vec4u8("instanceOlidColor"),e}const b=x(),T=G(),gt=_e(),Re=_e(),ve=64;let fo=class{constructor(e){this.model=e.instanceModel,this.modelNormal=e.instanceModelNormal,this.modelOriginHi=e.instanceModelOriginHi,this.modelOriginLo=e.instanceModelOriginLo,this.featureAttribute=e.getField("instanceFeatureAttribute",ut),this.color=e.getField("instanceColor",me),this.olidColor=e.getField("instanceOlidColor",me)}},vo=class{constructor(e,t){this._rctx=e,this._layout=t,this._headIndex=0,this._tailIndex=0,this._firstIndex=null,this._captureFirstIndex=!0,this._updating=!1,this._prevHeadIndex=0,this._resized=!1,this._capacity=1}destroy(){this._buffer&&this._buffer.destroy()}get buffer(){return this._buffer.buffer}get view(){return this._view}get capacity(){return this._capacity}get size(){const e=this._headIndex,t=this._tailIndex;return e>=t?e-t:e+this._capacity-t}get isEmpty(){return this._headIndex===this._tailIndex}get isFull(){return this._tailIndex===(this._headIndex+1)%this._capacity}get headIndex(){return this._headIndex}get tailIndex(){return this._tailIndex}get firstIndex(){return this._firstIndex}get usedMemory(){return this._buffer?.usedMemory??0}reset(){this._headIndex=0,this._tailIndex=0,this._firstIndex=null}startUpdateCycle(){this._captureFirstIndex=!0}beginUpdate(){S(!this._updating,"already updating"),this._updating=!0,this._prevHeadIndex=this._headIndex}endUpdate(){S(this._updating,"not updating"),this.size<ia*this.capacity&&this._shrink(),this._resized?(this._buffer.transferAll(),this._resized=!1):this._transferRange(this._prevHeadIndex,this._headIndex),this._updating=!1}allocateHead(){S(this._updating,"not updating"),this.isFull&&this._grow();const e=this.headIndex;return this._captureFirstIndex&&(this._firstIndex=e,this._captureFirstIndex=!1),this._incrementHead(),S(this._headIndex!==this._tailIndex,"invalid pointers"),e}freeTail(){S(this._updating,"not updating"),S(this.size>0,"invalid size");const e=this._tailIndex===this._firstIndex;this._incrementTail(),e&&(this._firstIndex=this._tailIndex)}_grow(){const e=Math.max(ve,Math.floor(this._capacity*Je));this._resize(e)}_shrink(){const e=Math.max(ve,Math.floor(this._capacity*na));this._resize(e)}_resize(e){if(S(this._updating,"not updating"),e===this._capacity)return;const t=new uo(this._rctx,this._layout,e);if(this._buffer){this._firstIndex&&(this._firstIndex=(this._firstIndex+this._capacity-this._tailIndex)%this._capacity);const a=this.size,r=this._compactInstances(t);S(r===a,"invalid compaction"),this._buffer.destroy(),this._tailIndex=0,this._headIndex=r,this._prevHeadIndex=0}this._resized=!0,this._capacity=e,this._buffer=t,this._view=new fo(this._layout.createView(this._buffer.array))}_compactInstances(e){const t=this._headIndex,a=this._tailIndex;return a<t?(this._buffer.copyRange(a,t,e),t-a):a>t?(this._buffer.copyRange(a,this._capacity,e),t>0&&this._buffer.copyRange(0,t,e,this._capacity-a),t+(this._capacity-a)):0}_incrementHead(e=1){this._headIndex=(this._headIndex+e)%this._capacity}_incrementTail(e=1){this._tailIndex=(this._tailIndex+e)%this._capacity}_transferRange(e,t){e<t?this._buffer.transferRange(e,t):e>t&&(t>0&&this._buffer.transferRange(0,t),this._buffer.transferRange(e,this._capacity))}};const go=Ie().vec3f("instanceModelOriginHi").vec3f("instanceModelOriginLo").mat3f("instanceModel").mat3f("instanceModelNormal");function xt(e){return vt(go.clone(),e)}function xo({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:a,roughnessFactor:r,emissiveTexture:o,emissiveFactor:s,occlusionTexture:n}){return e==null&&t==null&&o==null&&(s==null||Ue(s,Se))&&n==null&&(r==null||r===1)&&(a==null||a===1)}const bt=$(1,1,.5),bo=$(0,.6,.2),wo=$(0,1,.2);function wt(e){e.vertex.code.add(i`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function yo(e){e.varyings.add("linearDepth","float",{invariant:!0})}function Mo(e,t){yo(e),e.vertex.code.add(i`
    void forwardLinearDepth(float _linearDepth) { ${p(t,"linearDepth = _linearDepth;")} }
  `)}function yt(e,t){t.instancedColor?(e.attributes.add("instanceColor","vec4"),e.vertex.include(ce),e.vertex.include($e),e.vertex.include(Xe),e.vertex.code.add(i`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${"instanceColor"}));
      }
    `)):e.vertex.code.add(i`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}const Mt=G();function Tt(e,t){const{hasModelTransformation:a,instancedDoublePrecision:r,instanced:o,output:s,hasVertexTangents:n}=t;a&&(e.vertex.uniforms.add(new ma("model",d=>d.modelTransformation??qe)),e.vertex.uniforms.add(new O("normalLocalOriginFromModel",d=>(sa(Mt,d.modelTransformation??qe),Mt)))),o&&r&&(e.attributes.add("instanceModelOriginHi","vec3"),e.attributes.add("instanceModelOriginLo","vec3"),e.attributes.add("instanceModel","mat3"),e.attributes.add("instanceModelNormal","mat3"));const l=e.vertex;r&&(l.include(ro,t),l.uniforms.add(new B("viewOriginHi",d=>pa(V(ge,d.camera.viewInverseTransposeMatrix[3],d.camera.viewInverseTransposeMatrix[7],d.camera.viewInverseTransposeMatrix[11]),ge)),new B("viewOriginLo",d=>fa(V(ge,d.camera.viewInverseTransposeMatrix[3],d.camera.viewInverseTransposeMatrix[7],d.camera.viewInverseTransposeMatrix[11]),ge)))),l.code.add(i`
    vec3 getVertexInLocalOriginSpace() {
      return ${a?r?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":r?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${r?i`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),l.code.add(i`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${a?r?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":r?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),s===3&&(va(l),l.code.add(i`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${a?r?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":r?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),n&&l.code.add(i`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${a?r?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":r?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const ge=x();function _t(e,t){e.varyings.add("colorMixMode","int"),e.varyings.add("opacityMixMode","int"),e.vertex.uniforms.add(new ga("symbolColorMixMode",a=>X[a.colorMixMode])),t.hasSymbolColors?(e.vertex.include(ce),e.vertex.include($e),e.vertex.include(Xe),e.attributes.add("symbolColor","vec4"),e.vertex.code.add(i`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${"symbolColor"}));
    }
  `)):e.vertex.code.add(i`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),e.vertex.code.add(i`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = mask.r ? ${i.int(X.ignore)} : symbolColorMixMode;
      opacityMixMode = mask.a ? ${i.int(X.ignore)} : symbolColorMixMode;
    }
  `)}function St(e,t){switch(t.output){case 4:case 5:case 6:case 7:e.fragment.code.add(i`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`);break;case 8:e.fragment.code.add(i`void outputDepth(float _linearDepth){
gl_FragDepth = _linearDepth;
}`)}}function J(e,t){To(e,t,new I("textureAlphaCutoff",a=>a.textureAlphaCutoff))}function To(e,t,a){const r=e.fragment,o=t.alphaDiscardMode,s=o===0;o!==2&&o!==3||r.uniforms.add(a),r.code.add(i`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${o===1?"color.a = 1.0;":`if (color.a < ${s?i.float(K):"textureAlphaCutoff"}) {
              discard;
             } ${p(o===2,"else { color.a = 1.0; }")}`}
    }
  `)}function Ct(e,t){const{vertex:a,fragment:r,varyings:o}=e,{hasColorTexture:s,alphaDiscardMode:n}=t,l=s&&n!==1,{output:d,normalType:u,hasColorTextureTransform:g}=t;switch(d){case 2:H(a,t),e.include(W),r.include(k,t),e.include(U,t),l&&r.uniforms.add(new y("tex",v=>v.texture)),a.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(J,t),r.main.add(i`
        discardBySlice(vpos);
        ${p(l,i`vec4 texColor = texture(tex, ${g?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case 4:case 5:case 6:case 7:case 10:H(a,t),e.include(W),e.include(U,t),e.include(Q,t),e.include(St,t),r.include(k,t),e.include(ba,t),wa(e),o.add("depth","float",{invariant:!0}),l&&r.uniforms.add(new y("tex",v=>v.texture)),a.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(J,t),r.main.add(i`
        discardBySlice(vpos);
        ${p(l,i`vec4 texColor = texture(tex, ${g?"colorUV":"vuv0"});
               discardOrAdjustAlpha(texColor);`)}
        ${d===10?i`outputObjectAndLayerIdColor();`:i`outputDepth(depth);`}`);break;case 3:{H(a,t),e.include(W),e.include(fe,t),e.include(pt,t),e.include(U,t),e.include(Q,t),l&&r.uniforms.add(new y("tex",M=>M.texture)),u===2&&o.add("vPositionView","vec3",{invariant:!0});const v=u===0||u===1;a.main.add(i`
        vpos = getVertexInLocalOriginSpace();
        ${v?i`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:i`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),r.include(k,t),e.include(J,t),r.main.add(i`
        discardBySlice(vpos);
        ${p(l,i`vec4 texColor = texture(tex, ${g?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${u===2?i`vec3 normal = screenDerivativeNormal(vPositionView);`:i`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case 9:H(a,t),e.include(W),e.include(U,t),e.include(Q,t),l&&r.uniforms.add(new y("tex",v=>v.texture)),a.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),r.include(k,t),e.include(J,t),e.include(xa,t),r.main.add(i`
        discardBySlice(vpos);
        ${p(l,i`vec4 texColor = texture(tex, ${g?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function _o(e,t){const a=e.fragment,{hasVertexTangents:r,doubleSidedMode:o,hasNormalTexture:s,textureCoordinateType:n,bindType:l,hasNormalTextureTransform:d}=t;r?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),o===2?a.code.add(i`mat3 computeTangentSpace(vec3 normal) {
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
}`),s&&n!==0&&(e.include(Ke,t),a.uniforms.add(l===1?new y("normalTexture",u=>u.textureNormal):new de("normalTexture",u=>u.textureNormal)),d&&(a.uniforms.add(new Qe("scale",u=>u.scale??Ka)),a.uniforms.add(new O("normalTextureTransformMatrix",u=>u.normalTextureTransformMatrix??j))),a.code.add(i`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),d&&a.code.add(i`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),a.code.add(i`return tangentSpace * rawNormal;
}`))}const zt=3e5,Ee=5e5,Pe=4;function Ft(){const e=new pe,t=e.fragment;e.include(et);const a=(Pe+1)/2,r=1/(2*a*a);return t.include(tt),t.uniforms.add(new y("depthMap",o=>o.depthTexture),new de("tex",o=>o.colorTexture),new ya("blurSize",o=>o.blurSize),new I("projScale",(o,s)=>{const n=s.camera.distance;return n>5e4?Math.max(0,o.projScale-(n-5e4)):o.projScale})),t.code.add(i`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${i.float(r)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.main.add(i`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${i.int(Pe)}; r <= ${i.int(Pe)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const So=Object.freeze(Object.defineProperty({__proto__:null,build:Ft},Symbol.toStringTag,{value:"Module"}));let Nt=class extends Ce{constructor(e,t){super(e,t,new ue(So,()=>import("./RealisticTree.glsl-MkbIfioi.js").then(a=>a.b)),at)}initializePipeline(){return Ve({colorWrite:Le})}};const Co="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let zo=class extends le{constructor(){super(...arguments),this.projScale=1}},Fo=class extends zo{constructor(){super(...arguments),this.intensity=1}},No=class extends le{},Oo=class extends No{constructor(){super(...arguments),this.blurSize=mt()}};const Ot=16;function It(){const e=new pe,t=e.fragment;return e.include(et),e.include(Ma),t.include(tt),t.uniforms.add(new L("radius",a=>xe(a.camera))).code.add(i`vec3 sphere[16] = vec3[16](
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
}`),t.code.add(i`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.outputs.add("fragOcclusion","float"),t.uniforms.add(new y("normalMap",a=>a.normalTexture),new y("depthMap",a=>a.depthTexture),new I("projScale",a=>a.projScale),new y("rnm",a=>a.noiseTexture),new Qe("rnmScale",(a,r)=>ie(Vt,r.camera.fullWidth/a.noiseTexture.descriptor.width,r.camera.fullHeight/a.noiseTexture.descriptor.height)),new I("intensity",a=>a.intensity),new Ta("screenSize",a=>ie(Vt,a.camera.fullWidth,a.camera.fullHeight))).main.add(i`
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

    for(int i = 0; i < ${i.int(Ot)}; ++i) {
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
    float A = max(1.0 - sum * intensity / float(${i.int(Ot)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

    fragOcclusion = A;
  `),e}function xe(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const Vt=mt(),Io=Object.freeze(Object.defineProperty({__proto__:null,build:It,getRadius:xe},Symbol.toStringTag,{value:"Module"}));let Lt=class extends Ce{constructor(e,t){super(e,t,new ue(Io,()=>import("./RealisticTree.glsl-MkbIfioi.js").then(a=>a.d)),at)}initializePipeline(){return Ve({colorWrite:Le})}};const ae=2;let oe=class extends _a{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=ot.SSAO,this.isEnabled=()=>!1,this._enableTime=ne(0),this._passParameters=new Fo,this._drawParameters=new Oo}initialize(){const e=Uint8Array.from(atob(Co),a=>a.charCodeAt(0)),t=new to(32);t.wrapMode=33071,t.pixelFormat=6407,t.wrapMode=10497,t.hasMipmap=!0,this._passParameters.noiseTexture=new ao(this.renderingContext,t,e),this.techniques.precompile(Lt),this.techniques.precompile(Nt),this.addHandles(la(()=>this.isEnabled(),()=>this._enableTime=ne(0)))}destroy(){this._passParameters.noiseTexture=ca(this._passParameters.noiseTexture)}render(e){const t=e.find(({name:w})=>w==="normals"),a=t?.getTexture(),r=t?.getTexture(eo);if(!a||!r)return;const o=this.techniques.get(Lt),s=this.techniques.get(Nt);if(!o.compiled||!s.compiled)return this._enableTime=ne(performance.now()),void this.requestRender(1);this._enableTime===0&&(this._enableTime=ne(performance.now()));const n=this.renderingContext,l=this.view.qualitySettings.fadeDuration,d=this.bindParameters,u=d.camera,g=u.relativeElevation,v=da((Ee-g)/(Ee-zt),0,1),M=l>0?Math.min(l,performance.now()-this._enableTime)/l:1,F=M*v;this._passParameters.normalTexture=a,this._passParameters.depthTexture=r,this._passParameters.projScale=1/u.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Vo/xe(u)**6*F;const f=u.fullViewport[2],N=u.fullViewport[3],R=this.fboCache.acquire(f,N,"ssao input",2);n.bindFramebuffer(R.fbo),n.setViewport(0,0,f,N),n.bindTechnique(o,d,this._passParameters,this._drawParameters),n.screen.draw();const E=Math.round(f/ae),P=Math.round(N/ae),Z=this.fboCache.acquire(E,P,"ssao blur",0);n.bindFramebuffer(Z.fbo),this._drawParameters.colorTexture=R.getTexture(),ie(this._drawParameters.blurSize,0,ae/N),n.bindTechnique(s,d,this._passParameters,this._drawParameters),n.setViewport(0,0,E,P),n.screen.draw(),R.release();const D=this.fboCache.acquire(E,P,ot.SSAO,0);return n.bindFramebuffer(D.fbo),n.setViewport(0,0,f,N),n.setClearColor(1,1,1,0),n.clear(16384),this._drawParameters.colorTexture=Z.getTexture(),ie(this._drawParameters.blurSize,ae/f,0),n.bindTechnique(s,d,this._passParameters,this._drawParameters),n.setViewport(0,0,E,P),n.screen.draw(),n.setViewport4fv(u.fullViewport),Z.release(),M<1&&this.requestRender(2),D}};c([A()],oe.prototype,"consumes",void 0),c([A()],oe.prototype,"produces",void 0),c([A({constructOnly:!0})],oe.prototype,"isEnabled",void 0),oe=c([Ye("esri.views.3d.webgl-engine.effects.ssao.SSAO")],oe);const Vo=.5;function be(e,t){t.receiveAmbientOcclusion?(e.uniforms.add(new Sa("ssaoTex",a=>a.ssao?.getTexture())),e.constants.add("blurSizePixelsInverse","float",1/ae),e.code.add(i`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):e.code.add(i`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Rt(e,t){const a=e.fragment,r=t.lightingSphericalHarmonicsOrder!==void 0?t.lightingSphericalHarmonicsOrder:2;r===0?(a.uniforms.add(new B("lightingAmbientSH0",({lighting:o})=>V(Et,o.sh.r[0],o.sh.g[0],o.sh.b[0]))),a.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):r===1?(a.uniforms.add(new _("lightingAmbientSH_R",({lighting:o})=>C(z,o.sh.r[0],o.sh.r[1],o.sh.r[2],o.sh.r[3])),new _("lightingAmbientSH_G",({lighting:o})=>C(z,o.sh.g[0],o.sh.g[1],o.sh.g[2],o.sh.g[3])),new _("lightingAmbientSH_B",({lighting:o})=>C(z,o.sh.b[0],o.sh.b[1],o.sh.b[2],o.sh.b[3]))),a.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):r===2&&(a.uniforms.add(new B("lightingAmbientSH0",({lighting:o})=>V(Et,o.sh.r[0],o.sh.g[0],o.sh.b[0])),new _("lightingAmbientSH_R1",({lighting:o})=>C(z,o.sh.r[1],o.sh.r[2],o.sh.r[3],o.sh.r[4])),new _("lightingAmbientSH_G1",({lighting:o})=>C(z,o.sh.g[1],o.sh.g[2],o.sh.g[3],o.sh.g[4])),new _("lightingAmbientSH_B1",({lighting:o})=>C(z,o.sh.b[1],o.sh.b[2],o.sh.b[3],o.sh.b[4])),new _("lightingAmbientSH_R2",({lighting:o})=>C(z,o.sh.r[5],o.sh.r[6],o.sh.r[7],o.sh.r[8])),new _("lightingAmbientSH_G2",({lighting:o})=>C(z,o.sh.g[5],o.sh.g[6],o.sh.g[7],o.sh.g[8])),new _("lightingAmbientSH_B2",({lighting:o})=>C(z,o.sh.b[5],o.sh.b[6],o.sh.b[7],o.sh.b[8]))),a.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),t.pbrMode!==1&&t.pbrMode!==2||a.code.add(i`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Et=x(),z=dt();function re(e){e.uniforms.add(new B("mainLightDirection",t=>t.lighting.mainLight.direction))}function q(e){e.uniforms.add(new B("mainLightIntensity",t=>t.lighting.mainLight.intensity))}function Lo(e){re(e.fragment),q(e.fragment),e.fragment.code.add(i`vec3 applyShading(vec3 shadingNormal, float shadow) {
float dotVal = clamp(dot(shadingNormal, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function Ro(e){e.code.add(i`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG) {
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.code.add(i`float integratedRadiance(float cosTheta2, float roughness) {
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.code.add(i`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness) {
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function De(e,t){e.include(ze),t.pbrMode!==1&&t.pbrMode!==2&&t.pbrMode!==5&&t.pbrMode!==6||(e.code.add(i`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),e.code.add(i`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==1&&t.pbrMode!==2||(e.include(Ro),e.code.add(i`struct PBRShadingInfo
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
};`),e.code.add(i`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`))}function Eo(e,t){e.include(ze),e.code.add(i`
  struct PBRShadingWater {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),e.code.add(i`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),e.code.add(i`float normalDistributionWater(float NdotH, float roughness) {
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),e.code.add(i`float geometricOcclusionKelemen(float LoH) {
return 0.25 / (LoH * LoH);
}`),e.code.add(i`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max) {
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}function Po(e){e.code.add(i`float mapChannel(float x, vec2 p) {
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),e.code.add(i`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}function Pt(e){e.code.add(i`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`)}function we(e){e.constants.add("ambientBoostFactor","float",za)}function ye(e){e.uniforms.add(new L("lightingGlobalFactor",t=>t.lighting.globalFactor))}function Ge(e,t){const a=e.fragment,{pbrMode:r,spherical:o,hasColorTexture:s}=t;a.include(be,t),r!==0&&a.include(De,t),e.include(Rt,t),a.include(ze),a.include(Pt,t);const n=!(r===2&&!s);switch(n&&a.include(Po),a.code.add(i`
    const float GAMMA_SRGB = ${i.float(ua)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${p(r!==0,"const float GROUND_REFLECTANCE = 0.2;")}
  `),we(a),ye(a),re(a),a.code.add(i`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${o?i`normalize(vPosWorld)`:i`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),q(a),a.code.add(i`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),r){case 0:case 4:case 3:e.include(Lo),a.code.add(i`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case 1:case 2:a.code.add(i`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),a.code.add(i`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?a.uniforms.add(new Ca("hasFillLights",l=>l.enableFillLights)):a.constants.add("hasFillLights","bool",!1),a.code.add(i`vec3 ambientDir = vec3(5.0 * groundNormal[1] - groundNormal[0] * groundNormal[2], - 5.0 * groundNormal[0] - groundNormal[2] * groundNormal[1], groundNormal[1] * groundNormal[1] + groundNormal[0] * groundNormal[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),a.uniforms.add(new L("lightingSpecularStrength",l=>l.lighting.mainLight.specularStrength),new L("lightingEnvironmentStrength",l=>l.lighting.mainLight.environmentStrength)).code.add(i`vec3 horizonRingDir = inputs.RdotNG * groundNormal - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE);`),a.code.add(i`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent;
        ${n?i`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:i`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case 5:case 6:re(a),q(a),a.code.add(i`const float roughnessTerrain = 0.5;
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
}`)}}function Dt(e,t){const a=e.fragment;switch(a.code.add(i`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case 0:a.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case 1:a.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case 2:a.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:Te(t.doubleSidedMode);case 3:}}function Ae(e,t){const a=t.pbrMode,r=e.fragment;if(a!==2&&a!==0&&a!==1)return void r.code.add(i`void applyPBRFactors() {}`);if(a===0)return void r.code.add(i`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(a===2)return void r.code.add(i`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:o,hasMetallicRoughnessTextureTransform:s,hasOcclusionTexture:n,hasOcclusionTextureTransform:l,bindType:d}=t;(o||n)&&e.include(Ke,t),r.code.add(i`vec3 mrr;
float occlusion;`),o&&r.uniforms.add(d===1?new y("texMetallicRoughness",u=>u.textureMetallicRoughness):new de("texMetallicRoughness",u=>u.textureMetallicRoughness)),n&&r.uniforms.add(d===1?new y("texOcclusion",u=>u.textureOcclusion):new de("texOcclusion",u=>u.textureOcclusion)),r.uniforms.add(d===1?new ee("mrrFactors",u=>u.mrrFactors):new Fa("mrrFactors",u=>u.mrrFactors)),r.code.add(i`
    ${p(o,i`void applyMetallicRoughness(vec2 uv) {
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

      ${p(o,`applyMetallicRoughness(${s?"metallicRoughnessUV":"vuv0"});`)}
      ${p(n,`applyOcclusion(${l?"occlusionUV":"vuv0"});`)}
    }
  `)}function Do(e,t){const a=te(t.output)&&t.receiveShadows;a&&Mo(e,!0),e.vertex.code.add(i`
    void forwardLinearDepthToReadShadowMap() { ${p(a,"forwardLinearDepth(gl_Position.w);")} }
  `)}let Go=class extends se{constructor(e,t,a,r){super(e,"mat4",2,(o,s,n,l)=>o.setUniformMatrices4fv(e,t(s,n,l),r),a)}},Ao=class extends se{constructor(e,t,a,r){super(e,"mat4",1,(o,s,n)=>o.setUniformMatrices4fv(e,t(s,n),r),a)}};function jo(e){e.fragment.uniforms.add(new Ao("shadowMapMatrix",(t,a)=>a.shadowMap.getShadowMapMatrices(t.origin),4)),Gt(e)}function Bo(e){e.fragment.uniforms.add(new Go("shadowMapMatrix",(t,a)=>a.shadowMap.getShadowMapMatrices(t.origin),4)),Gt(e)}function Gt(e){const{fragment:t}=e;t.uniforms.add(new _("cascadeDistances",a=>a.shadowMap.cascadeDistances),new Na("numCascades",a=>a.shadowMap.numCascades)),t.code.add(i`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
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
}`)}function Ho(e){e.fragment.code.add(i`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}let Wo=class extends se{constructor(e,t){super(e,"sampler2DShadow",0,(a,r)=>a.bindTexture(e,t(r)))}};function At(e,t){t.receiveShadows&&e.include(jo),jt(e,t)}function je(e,t){t.receiveShadows&&e.include(Bo),jt(e,t)}function jt(e,t){e.fragment.uniforms.add(new L("lightingGlobalFactor",o=>o.lighting.globalFactor));const{receiveShadows:a,spherical:r}=t;e.include(Do,t),a&&Uo(e),e.fragment.code.add(i`
    float readShadow(float additionalAmbientScale, vec3 vpos) {
      return ${a?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":p(r,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};
    }
  `)}function Uo(e){e.include(Ho),e.fragment.uniforms.add(new Wo("shadowMap",({shadowMap:t})=>t.depthTexture)).code.add(i`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap,0));
if (uvzShadow.z < 0.0) {
return 0.0;
}
return readShadowMapUVZ(uvzShadow, shadowMap);
}`)}function ko(e,t){t.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new O("colorTextureTransformMatrix",a=>a.colorTextureTransformMatrix??j)).code.add(i`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardColorUV(){}`)}function Yo(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==0?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new O("normalTextureTransformMatrix",a=>a.normalTextureTransformMatrix??j)).code.add(i`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardNormalUV(){}`)}function Jo(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==0?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new O("emissiveTextureTransformMatrix",a=>a.emissiveTextureTransformMatrix??j)).code.add(i`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardEmissiveUV(){}`)}function qo(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==0?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new O("occlusionTextureTransformMatrix",a=>a.occlusionTextureTransformMatrix??j)).code.add(i`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardOcclusionUV(){}`)}function Zo(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==0?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new O("metallicRoughnessTextureTransformMatrix",a=>a.metallicRoughnessTextureTransformMatrix??j)).code.add(i`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardMetallicRoughnessUV(){}`)}function Bt(e){e.include(Oa),e.code.add(i`
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
  `)}function Be(e,t){t.snowCover&&(e.uniforms.add(new L("snowCover",a=>a.snowCover)).code.add(i`float getSnow(vec3 normal, vec3 groundNormal) {
return smoothstep(0.5, 0.55, dot(normal, groundNormal)) * snowCover;
}
float getRealisticTreeSnow(vec3 faceNormal, vec3 shadingNormal, vec3 groundNormal) {
float snow = min(1.0, smoothstep(0.5, 0.55, dot(faceNormal, groundNormal)) +
smoothstep(0.5, 0.55, dot(-faceNormal, groundNormal)) +
smoothstep(0.0, 0.1, dot(shadingNormal, groundNormal)));
return snow * snowCover;
}`),e.code.add(i`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}`))}function Ht(e){const t=new pe,{attributes:a,vertex:r,fragment:o,varyings:s}=t,{output:n,normalType:l,offsetBackfaces:d,spherical:u,snowCover:g,pbrMode:v,textureAlphaPremultiplied:M,instancedDoublePrecision:F,hasVertexColors:f,hasVertexTangents:N,hasColorTexture:R,hasNormalTexture:E,hasNormalTextureTransform:P,hasColorTextureTransform:Z}=e;if(H(r,e),a.add("position","vec3"),s.add("vpos","vec3",{invariant:!0}),t.include(Q,e),t.include(Tt,e),t.include(rt,e),t.include(ko,e),!te(n))return t.include(Ct,e),t;t.include(Yo,e),t.include(Jo,e),t.include(qo,e),t.include(Zo,e),he(r,e),t.include(fe,e),t.include(W);const D=l===0||l===1;return D&&d&&t.include(wt),t.include(_o,e),t.include(pt,e),t.include(yt,e),s.add("vPositionLocal","vec3"),t.include(U,e),t.include(_t,e),t.include(it,e),r.uniforms.add(new nt("externalColor",w=>w.externalColor,{supportsNaN:!0})),s.add("vcolorExt","vec4"),t.include(st,e),r.include(ce),r.include(lt),t.include(F?At:je,e),r.main.add(i`
    forwardNormalizedVertexColor();

    MaskedColor maskedColor =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColor.color;
    forwardColorMixMode(maskedColor.mask);

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${p(D,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${p(N,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${p(D&&d,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (opacityMixMode != ${i.int(X.ignore)} && vcolorExt.a < ${i.float(K)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadowMap();
  `),t.include(Ge,e),o.include(be,e),t.include(J,e),o.include(k,e),t.include(ct,e),he(o,e),o.uniforms.add(r.uniforms.get("localOrigin"),new ee("ambient",w=>w.ambient),new ee("diffuse",w=>w.diffuse),new I("opacity",w=>w.opacity),new I("layerOpacity",w=>w.layerOpacity)),R&&o.uniforms.add(new y("tex",w=>w.texture)),t.include(Ae,e),o.include(De,e),o.include(Bt),t.include(Dt,e),o.include(Be,e),we(o),ye(o),q(o),o.main.add(i`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${R?i`
            vec4 texColor = texture(tex, ${Z?"colorUV":"vuv0"});
            ${p(M,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:i`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${l===2?i`vec3 normal = screenDerivativeNormal(vPositionLocal);`:i`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${p(f,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
    float opacity_ = layerOpacity * mixExternalOpacity(${p(f,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, opacityMixMode);

    ${E?`mat3 tangentSpace = computeTangentSpace(${N?"normal":"normal, vpos, vuv0"});
            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${P?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${u?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

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
    outputColorHighlightOID(finalColor, vpos, albedo ${p(g,", snow")});
  `),t}const $o=Object.freeze(Object.defineProperty({__proto__:null,build:Ht},Symbol.toStringTag,{value:"Module"}));class Xo extends lo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=bt,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=2,this.instanced=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.instanceColorEncodesAlphaIgnore=!1,this.emissiveStrength=0,this.emissiveSource=1,this.emissiveBaseColor=Se,this.instancedDoublePrecision=!1,this.normalType=0,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=$(.2,.2,.2),this.diffuse=$(.8,.8,.8),this.externalColor=qa(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=x(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.drivenOpacity=!1,this.writeDepth=!0,this.customDepthTest=0,this.textureAlphaMode=0,this.textureAlphaCutoff=K,this.textureAlphaPremultiplied=!1,this.renderOccluded=1,this.isDecoration=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}let Ko=class extends co{constructor(){super(...arguments),this.origin=x(),this.slicePlaneLocalOrigin=this.origin}};class Wt extends Ce{constructor(t,a,r=new ue($o,()=>import("./RealisticTree.glsl-MkbIfioi.js").then(o=>o.D))){const o=[Oe(Ut(a))];a.instanced&&a.instancedDoublePrecision&&o.push(Oe(xt(a))),super(t,a,r,oo(o))}_makePipeline(t,a){const{oitPass:r,output:o,transparent:s,cullFace:n,customDepthTest:l,hasOccludees:d}=t;return Ve({blending:te(o)&&s?Ga(r):null,culling:er(t)?Qa(n):null,depthTest:{func:Da(r,Qo(l))},depthWrite:Va(t),drawBuffers:Pa(o,Aa(r,o)),colorWrite:Le,stencilWrite:d?Ea:null,stencilTest:d?a?La:Ra:null,polygonOffset:Ia(t)})}initializePipeline(t){return this._occludeePipelineState=this._makePipeline(t,!0),this._makePipeline(t,!1)}getPipeline(t){return t?this._occludeePipelineState:super.getPipeline()}}function Qo(e){switch(e){case 1:return 515;case 0:case 3:return 513;case 2:return 516}}function er(e){return e.cullFace!==0||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}function Ut(e){const t=Ie().vec3f("position");return e.normalType===1?t.vec2i16("normalCompressed",{glNormalized:!0}):t.vec3f("normal"),e.hasVertexTangents&&t.vec4f("tangent"),e.hasTextures&&t.vec2f16("uv0"),e.hasVertexColors&&t.vec4u8("color"),e.hasSymbolColors&&t.vec4u8("symbolColor"),!e.instanced&&Ze()&&t.vec4u8("olidColor"),t}class h extends ja{constructor(t){super(),this.spherical=t,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.pbrMode=0,this.cullFace=0,this.normalType=0,this.customDepthTest=0,this.emissionSource=0,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.instanced=!1,this.instancedDoublePrecision=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0,this.draped=!1}get textureCoordinateType(){return this.hasTextures?1:0}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||this.emissionSource===3||this.hasOcclusionTexture}get hasVVInstancing(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}c([m({count:4})],h.prototype,"alphaDiscardMode",void 0),c([m({count:3})],h.prototype,"doubleSidedMode",void 0),c([m({count:7})],h.prototype,"pbrMode",void 0),c([m({count:3})],h.prototype,"cullFace",void 0),c([m({count:3})],h.prototype,"normalType",void 0),c([m({count:3})],h.prototype,"customDepthTest",void 0),c([m({count:8})],h.prototype,"emissionSource",void 0),c([m()],h.prototype,"hasVertexColors",void 0),c([m()],h.prototype,"hasSymbolColors",void 0),c([m()],h.prototype,"hasVerticalOffset",void 0),c([m()],h.prototype,"hasColorTexture",void 0),c([m()],h.prototype,"hasMetallicRoughnessTexture",void 0),c([m()],h.prototype,"hasOcclusionTexture",void 0),c([m()],h.prototype,"hasNormalTexture",void 0),c([m()],h.prototype,"hasScreenSizePerspective",void 0),c([m()],h.prototype,"hasVertexTangents",void 0),c([m()],h.prototype,"hasOccludees",void 0),c([m()],h.prototype,"instanced",void 0),c([m()],h.prototype,"instancedDoublePrecision",void 0),c([m()],h.prototype,"hasModelTransformation",void 0),c([m()],h.prototype,"offsetBackfaces",void 0),c([m()],h.prototype,"hasVVSize",void 0),c([m()],h.prototype,"hasVVColor",void 0),c([m()],h.prototype,"receiveShadows",void 0),c([m()],h.prototype,"receiveAmbientOcclusion",void 0),c([m()],h.prototype,"textureAlphaPremultiplied",void 0),c([m()],h.prototype,"instancedFeatureAttribute",void 0),c([m()],h.prototype,"instancedColor",void 0),c([m()],h.prototype,"writeDepth",void 0),c([m()],h.prototype,"transparent",void 0),c([m()],h.prototype,"enableOffset",void 0),c([m()],h.prototype,"terrainDepthTest",void 0),c([m()],h.prototype,"cullAboveTerrain",void 0),c([m()],h.prototype,"snowCover",void 0),c([m()],h.prototype,"hasColorTextureTransform",void 0),c([m()],h.prototype,"hasEmissionTextureTransform",void 0),c([m()],h.prototype,"hasNormalTextureTransform",void 0),c([m()],h.prototype,"hasOcclusionTextureTransform",void 0),c([m()],h.prototype,"hasMetallicRoughnessTextureTransform",void 0);function kt(e){const t=new pe,{attributes:a,vertex:r,fragment:o,varyings:s}=t,{output:n,offsetBackfaces:l,pbrMode:d,snowCover:u,spherical:g}=e,v=d===1||d===2;if(H(r,e),a.add("position","vec3"),s.add("vpos","vec3",{invariant:!0}),t.include(Q,e),t.include(Tt,e),t.include(rt,e),t.include(st,e),!te(n))return t.include(Ct,e),t;he(t.vertex,e),t.include(fe,e),t.include(W),l&&t.include(wt),s.add("vNormalWorld","vec3"),s.add("localvpos","vec3",{invariant:!0}),t.include(U,e),t.include(_t,e),t.include(yt,e),t.include(it,e),r.include(ce),r.include(lt),r.uniforms.add(new nt("externalColor",f=>f.externalColor,{supportsNaN:!0})),s.add("vcolorExt","vec4"),t.include(e.instancedDoublePrecision?At:je,e),r.main.add(i`
    forwardNormalizedVertexColor();

    MaskedColor maskedColorExt =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColorExt.color;
    forwardColorMixMode(maskedColorExt.mask);

    bool alphaCut = opacityMixMode != ${i.int(X.ignore)} && vcolorExt.a < ${i.float(K)};
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
    ${p(l,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
  `);const{hasColorTexture:M,hasColorTextureTransform:F}=e;return t.include(Ge,e),o.include(be,e),t.include(J,e),o.include(k,e),t.include(ct,e),he(o,e),re(o),we(o),ye(o),o.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new ee("ambient",f=>f.ambient),new ee("diffuse",f=>f.diffuse),new I("opacity",f=>f.opacity),new I("layerOpacity",f=>f.layerOpacity)),M&&o.uniforms.add(new y("tex",f=>f.texture)),t.include(Ae,e),o.include(De,e),o.include(Bt),o.include(Be,e),q(o),o.main.add(i`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${M?`texture(tex, ${F?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${p(M,`${p(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = readShadow(additionalAmbientScale, vpos);
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?i`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, opacityMixMode);`:i`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, opacityMixMode);`}

      vec3 shadingNormal = normalize(vNormalWorld);
      vec3 groundNormal = ${g?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};

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
      outputColorHighlightOID(finalColor, vpos, albedo ${p(u,", 1.0")});`),t}const tr=Object.freeze(Object.defineProperty({__proto__:null,build:kt},Symbol.toStringTag,{value:"Module"}));class ar extends Wt{constructor(t,a){super(t,a,new ue(tr,()=>import("./RealisticTree.glsl-MkbIfioi.js").then(r=>r.R)))}}class or extends Ba{constructor(t,a){super(t,Yt),this.materialType="default",this.supportsEdges=!0,this.intersectDraped=void 0,this.produces=new Map([[2,r=>(Fe(r)||Ne(r))&&!this.transparent],[4,r=>(Fe(r)||Ne(r))&&this.transparent&&this.parameters.writeDepth],[8,r=>(Fe(r)||Ne(r))&&this.transparent&&!this.parameters.writeDepth]]),this._layout=Ut(this.parameters),this._configuration=new h(a.spherical)}isVisibleForOutput(t){return t!==4&&t!==6&&t!==5||this.parameters.castShadows}get visible(){const{layerOpacity:t,colorMixMode:a,opacity:r,externalColor:o}=this.parameters;return t*(a==="replace"?1:r)*(a==="ignore"||isNaN(o[3])?1:o[3])>=K}get _hasEmissiveBase(){return!!this.parameters.emissiveTextureId||!Ue(this.parameters.emissiveBaseColor,Se)}get hasEmissions(){return this.parameters.emissiveStrength>0&&(this.parameters.emissiveSource===0&&this._hasEmissiveBase||this.parameters.emissiveSource===1)}getConfiguration(t,a){const{parameters:r,_configuration:o}=this,{treeRendering:s,doubleSided:n,doubleSidedType:l}=r;return super.getConfiguration(t,a,this._configuration),o.hasNormalTexture=r.hasNormalTexture,o.hasColorTexture=r.hasColorTexture,o.hasMetallicRoughnessTexture=r.hasMetallicRoughnessTexture,o.hasOcclusionTexture=r.hasOcclusionTexture,o.hasVertexTangents=!s&&r.hasVertexTangents,o.instanced=r.instanced,o.instancedDoublePrecision=r.instancedDoublePrecision,o.hasVVColor=!!r.vvColor,o.hasVVSize=!!r.vvSize,o.hasVerticalOffset=r.verticalOffset!=null,o.hasScreenSizePerspective=r.screenSizePerspective!=null,o.hasSlicePlane=r.hasSlicePlane,o.alphaDiscardMode=r.textureAlphaMode,o.normalType=s?0:r.normalType,o.transparent=this.transparent,o.writeDepth=r.writeDepth,o.customDepthTest=r.customDepthTest??0,o.hasOccludees=a.hasOccludees,o.cullFace=r.hasSlicePlane?0:r.cullFace,o.cullAboveTerrain=a.cullAboveTerrain,o.hasModelTransformation=!s&&r.modelTransformation!=null,o.hasVertexColors=r.hasVertexColors,o.hasSymbolColors=r.hasSymbolColors,o.doubleSidedMode=s?2:n&&l==="normal"?1:n&&l==="winding-order"?2:0,o.instancedFeatureAttribute=r.instancedFeatureAttribute,o.instancedColor=r.instancedColor,te(t)?(o.terrainDepthTest=a.terrainDepthTest,o.receiveShadows=r.receiveShadows,o.receiveAmbientOcclusion=r.receiveAmbientOcclusion&&a.ssao!=null):(o.terrainDepthTest=!1,o.receiveShadows=o.receiveAmbientOcclusion=!1),o.textureAlphaPremultiplied=!!r.textureAlphaPremultiplied,o.pbrMode=r.usePBR?r.isSchematic?2:1:0,o.emissionSource=r.emissionSource,o.offsetBackfaces=!(!this.transparent||!r.offsetTransparentBackfaces),o.oitPass=a.oitPass,o.enableOffset=a.camera.relativeElevation<Ha,o.snowCover=a.snowCover>0,o.hasColorTextureTransform=!!r.colorTextureTransformMatrix,o.hasNormalTextureTransform=!!r.normalTextureTransformMatrix,o.hasEmissionTextureTransform=!!r.emissiveTextureTransformMatrix,o.hasOcclusionTextureTransform=!!r.occlusionTextureTransformMatrix,o.hasMetallicRoughnessTextureTransform=!!r.metallicRoughnessTextureTransformMatrix,o}intersect(t,a,r,o,s,n){if(this.parameters.verticalOffset!=null){const l=r.camera;V(We,a[12],a[13],a[14]);let d=null;switch(r.viewingMode){case 1:d=$t(qt,We);break;case 2:d=Zt(qt,sr)}let u=0;const g=Me(lr,We,l.eye),v=Xt(g),M=ke(g,g,1/v);let F=null;this.parameters.screenSizePerspective&&(F=Kt(d,M)),u+=Wa(l,v,this.parameters.verticalOffset,F??0,this.parameters.screenSizePerspective,null),ke(d,d,u),Qt(He,d,r.transform.inverseRotation),o=Me(ir,o,He),s=Me(nr,s,He)}Ua(t,r,o,s,ka(r.verticalOffset),n)}createGLMaterial(t){return new rr(t)}createBufferWriter(){return new Ya(this._layout)}get transparent(){return Jt(this.parameters)}}class rr extends Ja{constructor(t){super({...t,...t.material.parameters})}beginSlot(t){this._material.setParameters({receiveShadows:t.shadowMap.enabled});const a=this._material.parameters;this.updateTexture(a.textureId);const r=t.camera.viewInverseTransposeMatrix;return V(a.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(a.treeRendering?ar:Wt,t)}}class Yt extends Xo{constructor(){super(...arguments),this.treeRendering=!1,this.hasVertexTangents=!1}get hasNormalTexture(){return!this.treeRendering&&!!this.normalTextureId}get hasColorTexture(){return!!this.textureId}get hasMetallicRoughnessTexture(){return!this.treeRendering&&!!this.metallicRoughnessTextureId}get hasOcclusionTexture(){return!this.treeRendering&&!!this.occlusionTextureId}get emissionSource(){return this.treeRendering?0:this.emissiveTextureId!=null&&this.emissiveSource===0?3:this.usePBR?this.emissiveSource===0?2:1:0}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||this.emissionSource===3||this.hasOcclusionTexture}}function Jt(e){const{drivenOpacity:t,opacity:a,externalColor:r,layerOpacity:o,texture:s,textureId:n,textureAlphaMode:l,colorMixMode:d}=e,u=r[3];return t||a<1&&d!=="replace"||u<1&&d!=="ignore"||o<1||(s!=null||n!=null)&&l!==1&&l!==2&&d!=="replace"}const ir=x(),nr=x(),sr=ha(0,0,1),qt=x(),He=x(),We=x(),lr=x();export{Jt as A,Rt as B,Y as F,Ht as J,or as P,kt as _,vo as a,Ko as b,St as c,Ae as d,Ge as e,je as f,be as g,Dt as h,Ft as i,Yt as j,ye as k,Be as l,It as m,xo as n,bo as o,we as p,q,re as r,wo as s,bt as t,xt as u,xe as v,Eo as w,Pt as x,zt as y,Ee as z};
