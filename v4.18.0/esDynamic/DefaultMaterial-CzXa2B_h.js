import{aL as x,cm as G,fX as qe,bO as Zt,gM as $t,bc as Je,jb as Xt,aZ as L,ki as Kt,tO as Qt,qG as ea,lR as ta,tP as Ze,a7 as l,a8 as A,ab as j,tQ as aa,tR as oa,lg as X,bp as $e,lf as Ce,ks as Xe,kg as ra,nq as Ke,tS as H,j0 as ne,aJ as Qe,h$ as se,e0 as ia,dy as na,cO as sa,cb as C,aU as la,b6 as ca,aX as da,bz as ha,b2 as ze,b1 as ua,bg as et,b7 as ma,kj as pa}from"./main-De_li5Sb.js";import{h as V,aD as le,j as ce,aU as N,U as tt,aV as de,aW as at,aX as ot,u as fa,g as B,aY as va,aZ as ga,aj as xa,aE as ba,a_ as K,r as O,S as Q,N as k,aP as W,a$ as U,H as ee,d as M,P as Y,an as wa,L as ya,b0 as Ma,b1 as rt,aI as he,i as it,aF as nt,o as st,c as Ta,a as lt,b2 as ct,k as Sa,l as Fe,t as ue,w as _a,x as dt,b as Ca,O as S,K as Ne,al as za,b3 as Fa,e as te,b4 as Na,a1 as ae,b5 as Oa,b6 as ht,E as me,aQ as ut,f as mt,M as pt,b7 as ft,Q as vt,J as gt,aR as Ia,X as La,Y as Va,Z as Ea,_ as Ra,V as Pa,$ as Da,a0 as Ga,p as Aa,a7 as ja,s as m,a8 as Ha,b8 as Oe,b9 as Ie,at as Ba,aN as ka,ba as Wa,aT as Ua,aC as Ya}from"./VertexColor.glsl-s7OuD6FK.js";import{t as Le,Q as Ve}from"./InterleavedLayout-BBVdyfby.js";import{n as p,t as r}from"./glsl-Bw9xHunC.js";import{i as _,F as xt,z as pe,S as bt}from"./BufferView-DrmEcg2f.js";import{r as qa}from"./VertexBuffer-BCD_64_6.js";import{s as fe}from"./ShaderBuilder-Dg4IEQ9g.js";import{w as Ee,u as Re,c as Ja}from"./renderState-CsF3hl87.js";import{n as Za}from"./enums-DDJfd4_p.js";import{h as $a,E as Xa}from"./Texture-Bpl9FRhA.js";function Ka(e){e.varyings.add("linearDepth","float",{invariant:!0})}function Qa(e,t){Ka(e),e.vertex.code.add(r`
    void forwardLinearDepth(float _linearDepth) { ${p(t,"linearDepth = _linearDepth;")} }
  `)}function eo({code:e,uniforms:t},o){t.add(new V("dpDummy",()=>1)),e.add(r`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 hiD = hiA + hiB;
vec3 loD = loA + loB;
return  dpDummy * hiD + loD;
}`)}let to=class extends le{constructor(e,t,o){super(e,"mat3",2,(a,i,n)=>a.setUniformMatrix3fv(e,t(i,n),o))}},ao=class extends ce{constructor(){super(...arguments),this.transformWorldFromViewTH=x(),this.transformWorldFromViewTL=x(),this.transformViewFromCameraRelativeRS=G()}};class oo extends ce{constructor(){super(...arguments),this.transformWorldFromModelRS=G(),this.transformWorldFromModelTH=x(),this.transformWorldFromModelTL=x()}}function ve(e,t){switch(e.fragment.code.add(r`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`),t.normalType){case 1:e.attributes.add("normalCompressed","vec2"),e.vertex.code.add(r`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case 0:e.attributes.add("normal","vec3"),e.vertex.code.add(r`vec3 normalModel() {
return normal;
}`);break;default:t.normalType;case 2:case 3:}}function wt(e,t){const{vertex:o,varyings:a}=e;switch(t.normalType){case 0:case 1:{e.include(ve,t),a.add("vNormalWorld","vec3"),a.add("vNormalView","vec3"),o.uniforms.add(new N("transformNormalViewFromGlobal",n=>n.transformNormalViewFromGlobal));const{hasModelRotationScale:i}=t;i&&o.uniforms.add(new to("transformNormalGlobalFromModel",n=>n.transformNormalGlobalFromModel)),o.code.add(r`
        void forwardNormal() {
          vNormalWorld = ${p(i,r`transformNormalGlobalFromModel * `)} normalModel();
          vNormalView = transformNormalViewFromGlobal * vNormalWorld;
        }
      `);break}case 2:e.vertex.code.add(r`void forwardNormal() {}`);break;default:t.normalType;case 3:}}let ro=class extends ao{constructor(){super(...arguments),this.transformNormalViewFromGlobal=G()}},io=class extends oo{constructor(){super(...arguments),this.transformNormalGlobalFromModel=G(),this.toMapSpace=qe()}},no=class{constructor(e,t,o){this.elementSize=t.stride,this._buffer=new qa(e,Le(t,1)),this.resize(o)}destroy(){this._buffer.dispose()}get capacity(){return this._capacity}get array(){return this._array}get buffer(){return this._buffer}get usedMemory(){return this._array.byteLength+this._buffer.usedMemory}copyRange(e,t,o,a=0){const i=new Uint8Array(this.array,e*this.elementSize,(t-e)*this.elementSize);new Uint8Array(o.array,a*this.elementSize).set(i)}transferAll(){this._buffer.setData(this._array)}transferRange(e,t){const o=e*this.elementSize,a=t*this.elementSize;this._buffer.setSubData(new Uint8Array(this._array),o,o,a)}resize(e){const t=e*this.elementSize,o=new ArrayBuffer(t);this._array&&(e>=this._capacity?new Uint8Array(o).set(new Uint8Array(this._array)):new Uint8Array(o).set(new Uint8Array(this._array).subarray(0,e*this.elementSize))),this._array=o,this._buffer.setSize(t),this._capacity=e}};class yt{constructor(t){this.localTransform=t.localTransform,this.globalTransform=t.globalTransform,this.modelOrigin=t.modelOrigin,this.model=t.instanceModel,this.modelNormal=t.instanceModelNormal,this.modelScaleFactors=t.modelScaleFactors,this.boundingSphere=t.boundingSphere,this.featureAttribute=t.getField("instanceFeatureAttribute",xt),this.color=t.getField("instanceColor",pe),this.olidColor=t.getField("instanceOlidColor",pe),this.state=t.getField("state",bt),this.lodLevel=t.getField("lodLevel",bt)}}let q=class extends Zt{constructor(e,t){super(e),this.events=new $t,this._capacity=0,this._size=0,this._next=0,this._highlightOptionsMap=new Map,this._highlightOptionsMapPrev=new Map,this._layout=co(t),this._capacity=ge,this._buffer=this._layout.createBuffer(this._capacity),this._view=new yt(this._buffer)}get capacity(){return this._capacity}get size(){return this._size}get view(){return this._view}addInstance(){this._size+1>this._capacity&&this._grow();const e=this._findSlot();return this._view.state.set(e,1),this._size++,this.events.emit("instances-changed"),e}removeInstance(e){const t=this._view.state;_(e>=0&&e<this._capacity&&!!(1&t.get(e)),"invalid instance handle"),this._getStateFlag(e,18)?this._setStateFlags(e,32):this.freeInstance(e),this.events.emit("instances-changed")}freeInstance(e){const t=this._view.state;_(e>=0&&e<this._capacity&&!!(1&t.get(e)),"invalid instance handle"),t.set(e,0),this._size--}setLocalTransform(e,t,o=!0){this._view.localTransform.setMat(e,t),o&&this.updateModelTransform(e)}getLocalTransform(e,t){this._view.localTransform.getMat(e,t)}setGlobalTransform(e,t,o=!0){this._view.globalTransform.setMat(e,t),o&&this.updateModelTransform(e)}getGlobalTransform(e,t){this._view.globalTransform.getMat(e,t)}updateModelTransform(e){const t=this._view,o=b,a=T;t.localTransform.getMat(e,Tt),t.globalTransform.getMat(e,Pe);const i=Xt(Pe,Pe,Tt);L(o,i[12],i[13],i[14]),t.modelOrigin.setVec(e,o),Kt(a,i),t.model.setMat(e,a);const n=Qt(b,i);n.sort(),t.modelScaleFactors.set(e,0,n[1]),t.modelScaleFactors.set(e,1,n[2]),ea(a,a),ta(a,a),t.modelNormal.setMat(e,a),this._setStateFlags(e,64),this.events.emit("instance-transform-changed",{index:e})}getModelTransform(e,t){const o=this._view;o.model.getMat(e,T),o.modelOrigin.getVec(e,b),t[0]=T[0],t[1]=T[1],t[2]=T[2],t[3]=0,t[4]=T[3],t[5]=T[4],t[6]=T[5],t[7]=0,t[8]=T[6],t[9]=T[7],t[10]=T[8],t[11]=0,t[12]=b[0],t[13]=b[1],t[14]=b[2],t[15]=1}applyShaderTransformation(e,t){this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,t)}getCombinedModelTransform(e,t){return this.getModelTransform(e,t),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,t),t}getCombinedLocalTransform(e,t){this._view.localTransform.getMat(e,t),this.shaderTransformation!=null&&this.shaderTransformation.applyTransform(this,e,t)}getCombinedMaxScaleFactor(e){let t=this._view.modelScaleFactors.get(e,1);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(b,this,e),t*=Math.max(b[0],b[1],b[2])),t}getCombinedMedianScaleFactor(e){let t=this._view.modelScaleFactors.get(e,0);return this.shaderTransformation!=null&&(this.shaderTransformation.scaleFactor(b,this,e),t*=so(b[0],b[1],b[2])),t}getModel(e,t){this._view.model.getMat(e,t)}setFeatureAttribute(e,t){this._view.featureAttribute?.setVec(e,t)}getFeatureAttribute(e,t){this._view.featureAttribute?.getVec(e,t)}setColor(e,t){this._view.color?.setVec(e,t)}setObjectAndLayerIdColor(e,t){this._view.olidColor?.setVec(e,t)}setVisible(e,t){t!==this.getVisible(e)&&(this._setStateFlag(e,4,t),this.events.emit("instance-visibility-changed",{index:e}))}getVisible(e){return this._getStateFlag(e,4)}setHighlight(e,t){const{_highlightOptionsMap:o}=this,a=o.get(e);t?t!==a&&(o.set(e,t),this._setStateFlag(e,8,!0),this.events.emit("instance-highlight-changed")):a&&(o.delete(e),this._setStateFlag(e,8,!1),this.events.emit("instance-highlight-changed"))}get highlightOptionsMap(){return this._highlightOptionsMap}getHighlightStateFlag(e){return this._getStateFlag(e,8)}geHighlightOptionsPrev(e){const t=this._highlightOptionsMapPrev.get(e)??null;return this._highlightOptionsMapPrev.delete(e),t}getHighlightName(e){const t=this.highlightOptionsMap.get(e)??null;return t?this._highlightOptionsMapPrev.set(e,t):this._highlightOptionsMapPrev.delete(e),t}getState(e){return this._view.state.get(e)}getLodLevel(e){return this._view.lodLevel.get(e)}countFlags(e){let t=0;for(let o=0;o<this._capacity;++o)this.getState(o)&e&&++t;return t}_setStateFlags(e,t){const o=this._view.state;t=o.get(e)|t,o.set(e,t)}_clearStateFlags(e,t){const o=this._view.state;t=o.get(e)&~t,o.set(e,t)}_setStateFlag(e,t,o){o?this._setStateFlags(e,t):this._clearStateFlags(e,t)}_getStateFlag(e,t){return!!(this._view.state.get(e)&t)}_grow(){this._capacity=Math.max(ge,Math.floor(this._capacity*Ze)),this._buffer=this._layout.createBuffer(this._capacity).copyFrom(this._buffer),this._view=new yt(this._buffer)}_findSlot(){const e=this._view.state;let t=this._next;for(;1&e.get(t);)t=t+1===this._capacity?0:t+1;return this._next=t+1===this._capacity?0:t+1,t}};function so(e,t,o){return Math.max(Math.min(e,t),Math.min(Math.max(e,t),o))}l([A({constructOnly:!0})],q.prototype,"shaderTransformation",void 0),l([A()],q.prototype,"_size",void 0),l([A({readOnly:!0})],q.prototype,"size",null),q=l([j("esri.views.3d.webgl-engine.lib.lodRendering.InstanceData")],q);const lo=Ve().mat4f64("localTransform").mat4f64("globalTransform").vec4f64("boundingSphere").vec3f64("modelOrigin").mat3f("instanceModel").mat3f("instanceModelNormal").vec2f("modelScaleFactors");function co(e){return Mt(lo.clone(),e).u8("state").u8("lodLevel")}function Mt(e,t){return t.instancedFeatureAttribute&&e.vec4f("instanceFeatureAttribute"),t.instancedColor&&e.vec4u8("instanceColor"),tt()&&e.vec4u8("instanceOlidColor"),e}const b=x(),T=G(),Tt=Je(),Pe=Je(),ge=64;let ho=class{constructor(e){this.model=e.instanceModel,this.modelNormal=e.instanceModelNormal,this.modelOriginHi=e.instanceModelOriginHi,this.modelOriginLo=e.instanceModelOriginLo,this.featureAttribute=e.getField("instanceFeatureAttribute",xt),this.color=e.getField("instanceColor",pe),this.olidColor=e.getField("instanceOlidColor",pe)}},uo=class{constructor(e,t){this._rctx=e,this._layout=t,this._headIndex=0,this._tailIndex=0,this._firstIndex=null,this._captureFirstIndex=!0,this._updating=!1,this._prevHeadIndex=0,this._resized=!1,this._capacity=1}destroy(){this._buffer&&this._buffer.destroy()}get buffer(){return this._buffer.buffer}get view(){return this._view}get capacity(){return this._capacity}get size(){const e=this._headIndex,t=this._tailIndex;return e>=t?e-t:e+this._capacity-t}get isEmpty(){return this._headIndex===this._tailIndex}get isFull(){return this._tailIndex===(this._headIndex+1)%this._capacity}get headIndex(){return this._headIndex}get tailIndex(){return this._tailIndex}get firstIndex(){return this._firstIndex}get usedMemory(){return this._buffer?.usedMemory??0}reset(){this._headIndex=0,this._tailIndex=0,this._firstIndex=null}startUpdateCycle(){this._captureFirstIndex=!0}beginUpdate(){_(!this._updating,"already updating"),this._updating=!0,this._prevHeadIndex=this._headIndex}endUpdate(){_(this._updating,"not updating"),this.size<aa*this.capacity&&this._shrink(),this._resized?(this._buffer.transferAll(),this._resized=!1):this._transferRange(this._prevHeadIndex,this._headIndex),this._updating=!1}allocateHead(){_(this._updating,"not updating"),this.isFull&&this._grow();const e=this.headIndex;return this._captureFirstIndex&&(this._firstIndex=e,this._captureFirstIndex=!1),this._incrementHead(),_(this._headIndex!==this._tailIndex,"invalid pointers"),e}freeTail(){_(this._updating,"not updating"),_(this.size>0,"invalid size");const e=this._tailIndex===this._firstIndex;this._incrementTail(),e&&(this._firstIndex=this._tailIndex)}_grow(){const e=Math.max(ge,Math.floor(this._capacity*Ze));this._resize(e)}_shrink(){const e=Math.max(ge,Math.floor(this._capacity*oa));this._resize(e)}_resize(e){if(_(this._updating,"not updating"),e===this._capacity)return;const t=new no(this._rctx,this._layout,e);if(this._buffer){this._firstIndex&&(this._firstIndex=(this._firstIndex+this._capacity-this._tailIndex)%this._capacity);const o=this.size,a=this._compactInstances(t);_(a===o,"invalid compaction"),this._buffer.destroy(),this._tailIndex=0,this._headIndex=a,this._prevHeadIndex=0}this._resized=!0,this._capacity=e,this._buffer=t,this._view=new ho(this._layout.createView(this._buffer.array))}_compactInstances(e){const t=this._headIndex,o=this._tailIndex;return o<t?(this._buffer.copyRange(o,t,e),t-o):o>t?(this._buffer.copyRange(o,this._capacity,e),t>0&&this._buffer.copyRange(0,t,e,this._capacity-o),t+(this._capacity-o)):0}_incrementHead(e=1){this._headIndex=(this._headIndex+e)%this._capacity}_incrementTail(e=1){this._tailIndex=(this._tailIndex+e)%this._capacity}_transferRange(e,t){e<t?this._buffer.transferRange(e,t):e>t&&(t>0&&this._buffer.transferRange(0,t),this._buffer.transferRange(e,this._capacity))}};const mo=Ve().vec3f("instanceModelOriginHi").vec3f("instanceModelOriginLo").mat3f("instanceModel").mat3f("instanceModelNormal");function St(e){return Mt(mo.clone(),e)}function po({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:o,roughnessFactor:a,emissiveTexture:i,emissiveFactor:n,occlusionTexture:s}){return e==null&&t==null&&i==null&&(n==null||$e(n,Ce))&&s==null&&(a==null||a===1)&&(o==null||o===1)}const _t=X(1,1,.5),fo=X(0,.6,.2),vo=X(0,1,.2);function Ct(e){e.vertex.code.add(r`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function zt(e,t){t.instancedColor?(e.attributes.add("instanceColor","vec4"),e.vertex.include(de),e.vertex.include(at),e.vertex.include(ot),e.vertex.code.add(r`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${"instanceColor"}));
      }
    `)):e.vertex.code.add(r`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}const Ft=G();function Nt(e,t){const{hasModelTransformation:o,instancedDoublePrecision:a,instanced:i,output:n,hasVertexTangents:s}=t;o&&(e.vertex.uniforms.add(new fa("model",c=>c.modelTransformation??Xe)),e.vertex.uniforms.add(new N("normalLocalOriginFromModel",c=>(ra(Ft,c.modelTransformation??Xe),Ft)))),i&&a&&(e.attributes.add("instanceModelOriginHi","vec3"),e.attributes.add("instanceModelOriginLo","vec3"),e.attributes.add("instanceModel","mat3"),e.attributes.add("instanceModelNormal","mat3"));const d=e.vertex;a&&(d.include(eo,t),d.uniforms.add(new B("viewOriginHi",c=>va(L(xe,c.camera.viewInverseTransposeMatrix[3],c.camera.viewInverseTransposeMatrix[7],c.camera.viewInverseTransposeMatrix[11]),xe)),new B("viewOriginLo",c=>ga(L(xe,c.camera.viewInverseTransposeMatrix[3],c.camera.viewInverseTransposeMatrix[7],c.camera.viewInverseTransposeMatrix[11]),xe)))),d.code.add(r`
    vec3 getVertexInLocalOriginSpace() {
      return ${o?a?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":a?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${a?r`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),d.code.add(r`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${o?a?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":a?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),n===2&&(xa(d),d.code.add(r`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${o?a?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":a?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),s&&d.code.add(r`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${o?a?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":a?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const xe=x();function Ot(e,t){e.varyings.add("colorMixMode","int"),e.varyings.add("opacityMixMode","int"),e.vertex.uniforms.add(new ba("symbolColorMixMode",o=>K[o.colorMixMode])),t.hasSymbolColors?(e.vertex.include(de),e.vertex.include(at),e.vertex.include(ot),e.attributes.add("symbolColor","vec4"),e.vertex.code.add(r`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${"symbolColor"}));
    }
  `)):e.vertex.code.add(r`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),e.vertex.code.add(r`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = mask.r ? ${r.int(K.ignore)} : symbolColorMixMode;
      opacityMixMode = mask.a ? ${r.int(K.ignore)} : symbolColorMixMode;
    }
  `)}function It(e,t){switch(t.output){case 3:case 4:case 5:case 6:e.fragment.code.add(r`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`);break;case 7:e.fragment.code.add(r`void outputDepth(float _linearDepth){
gl_FragDepth = _linearDepth;
}`)}}function J(e,t){go(e,t,new O("textureAlphaCutoff",o=>o.textureAlphaCutoff))}function go(e,t,o){const a=e.fragment,i=t.alphaDiscardMode,n=i===0;i!==2&&i!==3||a.uniforms.add(o),a.code.add(r`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${i===1?"color.a = 1.0;":`if (color.a < ${n?r.float(Q):"textureAlphaCutoff"}) {
              discard;
             } ${p(i===2,"else { color.a = 1.0; }")}`}
    }
  `)}function Lt(e,t){const{vertex:o,fragment:a,varyings:i}=e,{hasColorTexture:n,alphaDiscardMode:s}=t,d=n&&s!==1,{output:c,normalType:h,hasColorTextureTransform:g}=t;switch(c){case 1:k(o,t),e.include(W),a.include(Y,t),e.include(U,t),d&&a.uniforms.add(new M("tex",v=>v.texture)),o.main.add(r`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(J,t),a.main.add(r`
        discardBySlice(vpos);
        ${p(d,r`vec4 texColor = texture(tex, ${g?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case 3:case 4:case 5:case 6:case 9:k(o,t),e.include(W),e.include(U,t),e.include(ee,t),e.include(It,t),a.include(Y,t),e.include(ya,t),Ma(e),i.add("depth","float",{invariant:!0}),d&&a.uniforms.add(new M("tex",v=>v.texture)),o.main.add(r`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(J,t),a.main.add(r`
        discardBySlice(vpos);
        ${p(d,r`vec4 texColor = texture(tex, ${g?"colorUV":"vuv0"});
               discardOrAdjustAlpha(texColor);`)}
        ${c===9?r`outputObjectAndLayerIdColor();`:r`outputDepth(depth);`}`);break;case 2:{k(o,t),e.include(W),e.include(ve,t),e.include(wt,t),e.include(U,t),e.include(ee,t),d&&a.uniforms.add(new M("tex",w=>w.texture)),h===2&&i.add("vPositionView","vec3",{invariant:!0});const v=h===0||h===1;o.main.add(r`
        vpos = getVertexInLocalOriginSpace();
        ${v?r`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:r`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),a.include(Y,t),e.include(J,t),a.main.add(r`
        discardBySlice(vpos);
        ${p(d,r`vec4 texColor = texture(tex, ${g?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${h===2?r`vec3 normal = screenDerivativeNormal(vPositionView);`:r`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case 8:k(o,t),e.include(W),e.include(U,t),e.include(ee,t),d&&a.uniforms.add(new M("tex",v=>v.texture)),o.main.add(r`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),a.include(Y,t),e.include(J,t),e.include(wa,t),a.main.add(r`
        discardBySlice(vpos);
        ${p(d,r`vec4 texColor = texture(tex, ${g?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function xo(e,t){return bo(e,t)}function bo(e,t){const o=e.fragment,{hasVertexTangents:a,doubleSidedMode:i,hasNormalTexture:n,textureCoordinateType:s,bindType:d,hasNormalTextureTransform:c}=t;a?(e.attributes.add("tangent","vec4"),e.varyings.add("vTangent","vec4"),i===2?o.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):o.code.add(r`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),n&&s!==0&&(e.include(rt,t),o.uniforms.add(d===1?new M("normalTexture",h=>h.textureNormal):new he("normalTexture",h=>h.textureNormal)),c&&(o.uniforms.add(d===1?new it("scale",h=>h.scale??Ke):new nt("scale",h=>h.scale??Ke)),o.uniforms.add(new N("normalTextureTransformMatrix",h=>h.normalTextureTransformMatrix??H))),o.code.add(r`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),c&&o.code.add(r`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),o.code.add(r`return tangentSpace * rawNormal;
}`))}const Vt=3e5,De=5e5,Et=16;function Rt(){const e=new fe,t=e.fragment;return e.include(st),e.include(Ta),t.include(lt),t.include(ct),t.uniforms.add(new V("radius",o=>be(o.camera))).code.add(r`vec3 sphere[16] = vec3[16](
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
}`),t.code.add(r`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.outputs.add("fragOcclusion","float"),t.uniforms.add(new M("normalMap",o=>o.normalTexture),new M("depthMap",o=>o.depthTexture),new O("projScale",o=>o.projScale),new M("rnm",o=>o.noiseTexture),new it("rnmScale",(o,a)=>ne(Pt,a.camera.fullWidth/o.noiseTexture.descriptor.width,a.camera.fullHeight/o.noiseTexture.descriptor.height)),new O("intensity",o=>o.intensity),new Sa("screenSize",o=>ne(Pt,o.camera.fullWidth,o.camera.fullHeight))).main.add(r`
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

    for(int i = 0; i < ${r.int(Et)}; ++i) {
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
    float A = max(1.0 - sum * intensity / float(${r.int(Et)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * pow(A, 4.0)) * INV_GAMMA;

    fragOcclusion = A;
  `),e}function be(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const Pt=Qe(),wo=Object.freeze(Object.defineProperty({__proto__:null,build:Rt,getRadius:be},Symbol.toStringTag,{value:"Module"})),Ge=4;function Dt(){const e=new fe,t=e.fragment;e.include(st);const o=(Ge+1)/2,a=1/(2*o*o);return t.include(lt),t.uniforms.add(new M("depthMap",i=>i.depthTexture),new he("tex",i=>i.colorTexture),new nt("blurSize",i=>i.blurSize),new O("projScale",(i,n)=>{const s=n.camera.distance;return s>5e4?Math.max(0,i.projScale-(s-5e4)):i.projScale})),t.code.add(r`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${r.float(a)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.main.add(r`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${r.int(Ge)}; r <= ${r.int(Ge)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const yo=Object.freeze(Object.defineProperty({__proto__:null,build:Dt},Symbol.toStringTag,{value:"Module"}));let we=class extends Fe{constructor(){super(...arguments),this.shader=new ue(yo,()=>import("./LineCallout.glsl-ssVfH7Cy.js").then(e=>e.C))}initializePipeline(){return Ee({colorWrite:Re})}};we=l([j("esri.views.3d.webgl-engine.effects.ssao.SSAOBlurTechnique")],we);const Mo="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let To=class extends ce{constructor(){super(...arguments),this.projScale=1}},So=class extends To{constructor(){super(...arguments),this.intensity=1}},_o=class extends ce{},Co=class extends _o{constructor(){super(...arguments),this.blurSize=Qe()}},ye=class extends Fe{constructor(){super(...arguments),this.shader=new ue(wo,()=>import("./LineCallout.glsl-ssVfH7Cy.js").then(e=>e.D))}initializePipeline(){return Ee({colorWrite:Re})}};ye=l([j("esri.views.3d.webgl-engine.effects.ssao.SSAOTechnique")],ye);const oe=2;let re=class extends _a{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=dt.SSAO,this.isEnabled=()=>!1,this._enableTime=se(0),this._passParameters=new So,this._drawParameters=new Co}initialize(){const e=Uint8Array.from(atob(Mo),o=>o.charCodeAt(0)),t=new $a(32);t.wrapMode=33071,t.pixelFormat=6407,t.wrapMode=10497,t.hasMipmap=!0,this._passParameters.noiseTexture=new Xa(this.renderingContext,t,e),this.techniques.precompile(ye),this.techniques.precompile(we),this.addHandles(ia(()=>this.isEnabled(),()=>this._enableTime=se(0)))}destroy(){this._passParameters.noiseTexture=na(this._passParameters.noiseTexture)}render(e){const t=e.find(({name:y})=>y==="normals"),o=t?.getTexture(),a=t?.getTexture(Za);if(!o||!a)return;const i=this.techniques.get(ye),n=this.techniques.get(we);if(!i.compiled||!n.compiled)return this._enableTime=se(performance.now()),void this.requestRender(1);this._enableTime===0&&(this._enableTime=se(performance.now()));const s=this.renderingContext,d=this.view.qualitySettings.fadeDuration,c=this.bindParameters,h=c.camera,g=h.relativeElevation,v=sa((De-g)/(De-Vt),0,1),w=d>0?Math.min(d,performance.now()-this._enableTime)/d:1,I=w*v;this._passParameters.normalTexture=o,this._passParameters.depthTexture=a,this._passParameters.projScale=1/h.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*zo/be(h)**6*I;const f=h.fullViewport[2],F=h.fullViewport[3],E=this.fboCache.acquire(f,F,"ssao input",2);s.bindFramebuffer(E.fbo),s.setViewport(0,0,f,F),s.bindTechnique(i,c,this._passParameters,this._drawParameters),s.screen.draw();const R=Math.round(f/oe),P=Math.round(F/oe),$=this.fboCache.acquire(R,P,"ssao blur",0);s.bindFramebuffer($.fbo),this._drawParameters.colorTexture=E.getTexture(),ne(this._drawParameters.blurSize,0,oe/F),s.bindTechnique(n,c,this._passParameters,this._drawParameters),s.setViewport(0,0,R,P),s.screen.draw(),E.release();const D=this.fboCache.acquire(R,P,dt.SSAO,0);return s.bindFramebuffer(D.fbo),s.setViewport(0,0,f,F),s.setClearColor(1,1,1,0),s.clear(16384),this._drawParameters.colorTexture=$.getTexture(),ne(this._drawParameters.blurSize,oe/f,0),s.bindTechnique(n,c,this._passParameters,this._drawParameters),s.setViewport(0,0,R,P),s.screen.draw(),s.setViewport4fv(h.fullViewport),$.release(),w<1&&this.requestRender(2),D}};l([A()],re.prototype,"consumes",void 0),l([A()],re.prototype,"produces",void 0),l([A({constructOnly:!0})],re.prototype,"isEnabled",void 0),re=l([j("esri.views.3d.webgl-engine.effects.ssao.SSAO")],re);const zo=.5;function Me(e,t){t.receiveAmbientOcclusion?(e.uniforms.add(new Ca("ssaoTex",o=>o.ssao?.getTexture())),e.constants.add("blurSizePixelsInverse","float",1/oe),e.code.add(r`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):e.code.add(r`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Gt(e,t){const o=t.lightingSphericalHarmonicsOrder!==void 0?t.lightingSphericalHarmonicsOrder:2;o===0?(e.uniforms.add(new B("lightingAmbientSH0",({lighting:a})=>L(At,a.sh.r[0],a.sh.g[0],a.sh.b[0]))),e.code.add(r`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===1?(e.uniforms.add(new S("lightingAmbientSH_R",({lighting:a})=>C(z,a.sh.r[0],a.sh.r[1],a.sh.r[2],a.sh.r[3])),new S("lightingAmbientSH_G",({lighting:a})=>C(z,a.sh.g[0],a.sh.g[1],a.sh.g[2],a.sh.g[3])),new S("lightingAmbientSH_B",({lighting:a})=>C(z,a.sh.b[0],a.sh.b[1],a.sh.b[2],a.sh.b[3]))),e.code.add(r`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):o===2&&(e.uniforms.add(new B("lightingAmbientSH0",({lighting:a})=>L(At,a.sh.r[0],a.sh.g[0],a.sh.b[0])),new S("lightingAmbientSH_R1",({lighting:a})=>C(z,a.sh.r[1],a.sh.r[2],a.sh.r[3],a.sh.r[4])),new S("lightingAmbientSH_G1",({lighting:a})=>C(z,a.sh.g[1],a.sh.g[2],a.sh.g[3],a.sh.g[4])),new S("lightingAmbientSH_B1",({lighting:a})=>C(z,a.sh.b[1],a.sh.b[2],a.sh.b[3],a.sh.b[4])),new S("lightingAmbientSH_R2",({lighting:a})=>C(z,a.sh.r[5],a.sh.r[6],a.sh.r[7],a.sh.r[8])),new S("lightingAmbientSH_G2",({lighting:a})=>C(z,a.sh.g[5],a.sh.g[6],a.sh.g[7],a.sh.g[8])),new S("lightingAmbientSH_B2",({lighting:a})=>C(z,a.sh.b[5],a.sh.b[6],a.sh.b[7],a.sh.b[8]))),e.code.add(r`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),t.pbrMode!==1&&t.pbrMode!==2||e.code.add(r`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const At=x(),z=qe();function ie(e){e.uniforms.add(new B("mainLightDirection",t=>t.lighting.mainLight.direction))}function Z(e){e.uniforms.add(new B("mainLightIntensity",t=>t.lighting.mainLight.intensity))}function Fo(e){ie(e),Z(e),e.code.add(r`vec3 applyShading(vec3 shadingNormal, float shadow) {
float dotVal = clamp(dot(shadingNormal, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function No(e){e.code.add(r`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG) {
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.code.add(r`float integratedRadiance(float cosTheta2, float roughness) {
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.code.add(r`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness) {
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Ae(e,t){e.include(Ne),t.pbrMode!==1&&t.pbrMode!==2&&t.pbrMode!==5&&t.pbrMode!==6||(e.code.add(r`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),e.code.add(r`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==1&&t.pbrMode!==2||(e.include(No),e.code.add(r`struct PBRShadingInfo
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
};`),e.code.add(r`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`))}function Oo(e,t){e.include(Ne),e.code.add(r`
    struct PBRShadingWater {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),e.code.add(r`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),e.code.add(r`float normalDistributionWater(float NdotH, float roughness) {
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),e.code.add(r`float geometricOcclusionKelemen(float LoH) {
return 0.25 / (LoH * LoH);
}`),e.code.add(r`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max) {
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}function Io(e){e.code.add(r`float mapChannel(float x, vec2 p) {
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),e.code.add(r`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}function jt(e){e.code.add(r`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`),e.code.add(r`vec3 tonemapKhronosNeutral(vec3 color, float exposure) {
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
}`)}function Te(e){e.constants.add("ambientBoostFactor","float",Fa)}function Se(e){e.uniforms.add(new V("lightingGlobalFactor",t=>t.lighting.globalFactor))}function je(e,t){const{pbrMode:o,spherical:a,hasColorTexture:i}=t;e.include(Me,t),o!==0&&e.include(Ae,t),e.include(Gt,t),e.include(Ne),e.include(jt,t),e.include(ct);const n=!(o===2&&!i);switch(n&&e.include(Io),e.code.add(r`
    ${p(o!==0,"const float GROUND_REFLECTANCE = 0.2;")}
  `),Te(e),Se(e),ie(e),e.code.add(r`
    float additionalDirectedAmbientLight(float lightAlignment) {
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }

    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float lightAlignment = dot(${a?r`normalize(vPosWorld)`:r`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }
  `),Z(e),e.code.add(r`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),o){case 0:case 4:case 3:e.include(Fo),e.code.add(r`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = linearizeGamma(albedo);
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return delinearizeGamma(outColor);
}`);break;case 1:case 2:e.code.add(r`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),e.code.add(r`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?e.uniforms.add(new za("hasFillLights",s=>s.enableFillLights)):e.constants.add("hasFillLights","bool",!1),e.code.add(r`vec3 ambientDir = vec3(5.0 * groundNormal[1] - groundNormal[0] * groundNormal[2], - 5.0 * groundNormal[0] - groundNormal[2] * groundNormal[1], groundNormal[1] * groundNormal[1] + groundNormal[0] * groundNormal[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),e.uniforms.add(new V("lightingSpecularStrength",s=>s.lighting.mainLight.specularStrength),new V("lightingEnvironmentStrength",s=>s.lighting.mainLight.environmentStrength)).code.add(r`vec3 horizonRingDir = inputs.RdotNG * groundNormal - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE);`),e.code.add(r`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent;
        ${n?r`vec3 outColor = blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance);`:r`vec3 outColor = max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance);`}
        return delinearizeGamma(outColor);
      }
    `);break;case 5:case 6:ie(e),Z(e),e.code.add(r`const float roughnessTerrain = 0.5;
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
}`)}}function Ht(e,t){const o=e.fragment;switch(o.code.add(r`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case 0:o.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case 1:o.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case 2:o.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:t.doubleSidedMode;case 3:}}function He(e,t){const o=t.pbrMode,a=e.fragment;if(o!==2&&o!==0&&o!==1)return void a.code.add(r`void applyPBRFactors() {}`);if(o===0)return void a.code.add(r`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(o===2)return void a.code.add(r`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:i,hasMetallicRoughnessTextureTransform:n,hasOcclusionTexture:s,hasOcclusionTextureTransform:d,bindType:c}=t;(i||s)&&e.include(rt,t),a.code.add(r`vec3 mrr;
float occlusion;`),i&&a.uniforms.add(c===1?new M("texMetallicRoughness",h=>h.textureMetallicRoughness):new he("texMetallicRoughness",h=>h.textureMetallicRoughness)),s&&a.uniforms.add(c===1?new M("texOcclusion",h=>h.textureOcclusion):new he("texOcclusion",h=>h.textureOcclusion)),a.uniforms.add(c===1?new te("mrrFactors",h=>h.mrrFactors):new Na("mrrFactors",h=>h.mrrFactors)),a.code.add(r`
    ${p(i,r`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${p(s,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${s?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${p(i,`applyMetallicRoughness(${n?"metallicRoughnessUV":"vuv0"});`)}
      ${p(s,`applyOcclusion(${d?"occlusionUV":"vuv0"});`)}
    }
  `)}function Lo(e,t){const o=ae(t.output)&&t.receiveShadows;o&&Qa(e,!0),e.vertex.code.add(r`
    void forwardLinearDepthToReadShadowMap() { ${p(o,"forwardLinearDepth(gl_Position.w);")} }
  `)}let Vo=class extends le{constructor(e,t,o,a){super(e,"mat4",2,(i,n,s,d)=>i.setUniformMatrices4fv(e,t(n,s,d),a),o)}},Eo=class extends le{constructor(e,t,o,a){super(e,"mat4",1,(i,n,s)=>i.setUniformMatrices4fv(e,t(n,s),a),o)}};function Ro(e){e.fragment.uniforms.add(new Eo("shadowMapMatrix",(t,o)=>o.shadowMap.getShadowMapMatrices(t.origin),4)),Bt(e)}function Po(e){e.fragment.uniforms.add(new Vo("shadowMapMatrix",(t,o)=>o.shadowMap.getShadowMapMatrices(t.origin),4)),Bt(e)}function Bt(e){const{fragment:t}=e;t.uniforms.add(new S("cascadeDistances",o=>o.shadowMap.cascadeDistances),new Oa("numCascades",o=>o.shadowMap.numCascades)),t.code.add(r`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
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
}`)}function Do(e){e.fragment.code.add(r`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}let Go=class extends le{constructor(e,t){super(e,"sampler2DShadow",0,(o,a)=>o.bindTexture(e,t(a)))}};function kt(e,t){t.receiveShadows&&e.include(Ro),Wt(e,t)}function Be(e,t){t.receiveShadows&&e.include(Po),Wt(e,t)}function Wt(e,t){e.fragment.uniforms.add(new V("lightingGlobalFactor",i=>i.lighting.globalFactor));const{receiveShadows:o,spherical:a}=t;e.include(Lo,t),o&&Ao(e),e.fragment.code.add(r`
    float readShadow(float additionalAmbientScale, vec3 vpos) {
      return ${o?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":p(a,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};
    }
  `)}function Ao(e){e.include(Do),e.fragment.uniforms.add(new Go("shadowMap",({shadowMap:t})=>t.depthTexture)).code.add(r`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap,0));
if (uvzShadow.z < 0.0) {
return 0.0;
}
return readShadowMapUVZ(uvzShadow, shadowMap);
}`)}function jo(e,t){t.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new N("colorTextureTransformMatrix",o=>o.colorTextureTransformMatrix??H)).code.add(r`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r`void forwardColorUV(){}`)}function Ho(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==0?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new N("normalTextureTransformMatrix",o=>o.normalTextureTransformMatrix??H)).code.add(r`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r`void forwardNormalUV(){}`)}function Bo(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==0?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new N("emissiveTextureTransformMatrix",o=>o.emissiveTextureTransformMatrix??H)).code.add(r`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r`void forwardEmissiveUV(){}`)}function ko(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==0?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new N("occlusionTextureTransformMatrix",o=>o.occlusionTextureTransformMatrix??H)).code.add(r`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r`void forwardOcclusionUV(){}`)}function Wo(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==0?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new N("metallicRoughnessTextureTransformMatrix",o=>o.metallicRoughnessTextureTransformMatrix??H)).code.add(r`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r`void forwardMetallicRoughnessUV(){}`)}function ke(e,t){t.snowCover&&(e.uniforms.add(new V("snowCover",o=>o.snowCover)).code.add(r`float getSnow(vec3 normal, vec3 groundNormal) {
return smoothstep(0.5, 0.55, dot(normal, groundNormal)) * snowCover;
}
float getRealisticTreeSnow(vec3 faceNormal, vec3 shadingNormal, vec3 groundNormal) {
float snow = min(1.0, smoothstep(0.5, 0.55, dot(faceNormal, groundNormal)) +
smoothstep(0.5, 0.55, dot(-faceNormal, groundNormal)) +
smoothstep(0.0, 0.1, dot(shadingNormal, groundNormal)));
return snow * snowCover;
}`),e.code.add(r`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}`))}function Ut(e){const t=new fe,{attributes:o,vertex:a,fragment:i,varyings:n}=t,{output:s,normalType:d,offsetBackfaces:c,spherical:h,snowCover:g,pbrMode:v,textureAlphaPremultiplied:w,instancedDoublePrecision:I,hasVertexColors:f,hasVertexTangents:F,hasColorTexture:E,hasNormalTexture:R,hasNormalTextureTransform:P,hasColorTextureTransform:$}=e;if(k(a,e),o.add("position","vec3"),n.add("vpos","vec3",{invariant:!0}),t.include(ee,e),t.include(Nt,e),t.include(ht,e),t.include(jo,e),!ae(s))return t.include(Lt,e),t;t.include(Ho,e),t.include(Bo,e),t.include(ko,e),t.include(Wo,e),me(a,e),t.include(ve,e),t.include(W);const D=d===0||d===1;return D&&c&&t.include(Ct),t.include(xo,e),t.include(wt,e),t.include(zt,e),n.add("vPositionLocal","vec3"),t.include(U,e),t.include(Ot,e),t.include(ut,e),a.uniforms.add(new mt("externalColor",y=>y.externalColor,{supportsNaN:!0})),n.add("vcolorExt","vec4"),t.include(pt,e),a.include(de),a.include(ft),t.include(I?kt:Be,e),a.main.add(r`
    forwardVertexColor();

    MaskedColor maskedColor =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColor.color;
    forwardColorMixMode(maskedColor.mask);

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${p(D,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${p(F,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${p(D&&c,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (opacityMixMode != ${r.int(K.ignore)} && vcolorExt.a < ${r.float(Q)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadowMap();
  `),i.include(je,e),i.include(Me,e),t.include(J,e),i.include(Y,e),t.include(vt,e),me(i,e),i.uniforms.add(a.uniforms.get("localOrigin"),new te("ambient",y=>y.ambient),new te("diffuse",y=>y.diffuse),new O("opacity",y=>y.opacity),new O("layerOpacity",y=>y.layerOpacity)),E&&i.uniforms.add(new M("tex",y=>y.texture)),t.include(He,e),i.include(Ae,e),i.include(gt),t.include(Ht,e),i.include(ke,e),Te(i),Se(i),Z(i),i.main.add(r`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${E?r`
            vec4 texColor = texture(tex, ${$?"colorUV":"vuv0"});
            ${p(w,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${d===2?r`vec3 normal = screenDerivativeNormal(vPositionLocal);`:r`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${p(f,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
    float opacity_ = layerOpacity * mixExternalOpacity(${p(f,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, opacityMixMode);

    ${R?`mat3 tangentSpace = computeTangentSpace(${F?"normal":"normal, vpos, vuv0"});
            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${P?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${h?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${p(g,r`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${v===1||v===2?r`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${p(g,"mrr = applySnowToMRR(mrr, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:r`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${p(g,", snow")});
  `),t}const Uo=Object.freeze(Object.defineProperty({__proto__:null,build:Ut},Symbol.toStringTag,{value:"Module"}));let Yo=class extends ro{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=_t,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=2,this.instanced=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.instanceColorEncodesAlphaIgnore=!1,this.emissiveStrengthFromSymbol=0,this.emissiveStrengthKHR=1,this.emissiveSource=1,this.emissiveBaseColor=Ce,this.instancedDoublePrecision=!1,this.normalType=0,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=X(.2,.2,.2),this.diffuse=X(.8,.8,.8),this.externalColor=la(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=x(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.drivenOpacity=!1,this.writeDepth=!0,this.customDepthTest=0,this.textureAlphaMode=0,this.textureAlphaCutoff=Q,this.textureAlphaPremultiplied=!1,this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}};class qo extends io{constructor(){super(...arguments),this.origin=x(),this.slicePlaneLocalOrigin=this.origin}}let _e=class extends Fe{constructor(e,t){let o=Le(Yt(t));t.instanced&&t.instancedDoublePrecision&&(o=o.concat(Le(St(t)))),super(e,t,o),this.shader=new ue(Uo,()=>import("./LineCallout.glsl-ssVfH7Cy.js").then(a=>a.E))}_makePipeline(e,t){const{oitPass:o,output:a,hasEmission:i,transparent:n,cullFace:s,customDepthTest:d,hasOccludees:c}=e;return Ee({blending:ae(a)&&n?Ga(o):null,culling:Zo(e)?Ja(s):null,depthTest:Da(o,Jo(d)),depthWrite:Pa(e),drawBuffers:Ra(a,Aa(o,i)),colorWrite:Re,stencilWrite:c?Ea:null,stencilTest:c?t?La:Va:null,polygonOffset:Ia(e)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e,t){return t?this._occludeePipelineState:super.getPipeline(e)}};function Jo(e){switch(e){case 1:return 515;case 0:case 3:return 513;case 2:return 516}}function Zo(e){return e.cullFace!==0||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}function Yt(e){const t=Ve().vec3f("position");return e.normalType===1?t.vec2i16("normalCompressed",{glNormalized:!0}):t.vec3f("normal"),e.hasVertexTangents&&t.vec4f("tangent"),e.hasTextures&&t.vec2f16("uv0"),e.hasVertexColors&&t.vec4u8("color",{glNormalized:!0}),e.hasSymbolColors&&t.vec4u8("symbolColor"),!e.instanced&&tt()&&t.vec4u8("olidColor"),t}_e=l([j("esri.views.3d.webgl-engine.shaders.DefaultMaterialTechnique")],_e);class u extends ja{constructor(t){super(),this.spherical=t,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.pbrMode=0,this.cullFace=0,this.normalType=0,this.customDepthTest=0,this.emissionSource=0,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.instanced=!1,this.instancedDoublePrecision=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instancedFeatureAttribute=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0,this.draped=!1}get textureCoordinateType(){return this.hasTextures?1:0}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||this.emissionSource===3||this.hasOcclusionTexture}get hasVVInstancing(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}l([m({count:4})],u.prototype,"alphaDiscardMode",void 0),l([m({count:3})],u.prototype,"doubleSidedMode",void 0),l([m({count:7})],u.prototype,"pbrMode",void 0),l([m({count:3})],u.prototype,"cullFace",void 0),l([m({count:3})],u.prototype,"normalType",void 0),l([m({count:3})],u.prototype,"customDepthTest",void 0),l([m({count:8})],u.prototype,"emissionSource",void 0),l([m()],u.prototype,"hasVertexColors",void 0),l([m()],u.prototype,"hasSymbolColors",void 0),l([m()],u.prototype,"hasVerticalOffset",void 0),l([m()],u.prototype,"hasColorTexture",void 0),l([m()],u.prototype,"hasMetallicRoughnessTexture",void 0),l([m()],u.prototype,"hasOcclusionTexture",void 0),l([m()],u.prototype,"hasNormalTexture",void 0),l([m()],u.prototype,"hasScreenSizePerspective",void 0),l([m()],u.prototype,"hasVertexTangents",void 0),l([m()],u.prototype,"hasOccludees",void 0),l([m()],u.prototype,"instanced",void 0),l([m()],u.prototype,"instancedDoublePrecision",void 0),l([m()],u.prototype,"hasModelTransformation",void 0),l([m()],u.prototype,"offsetBackfaces",void 0),l([m()],u.prototype,"hasVVSize",void 0),l([m()],u.prototype,"hasVVColor",void 0),l([m()],u.prototype,"receiveShadows",void 0),l([m()],u.prototype,"receiveAmbientOcclusion",void 0),l([m()],u.prototype,"textureAlphaPremultiplied",void 0),l([m()],u.prototype,"instancedFeatureAttribute",void 0),l([m()],u.prototype,"instancedColor",void 0),l([m()],u.prototype,"writeDepth",void 0),l([m()],u.prototype,"transparent",void 0),l([m()],u.prototype,"enableOffset",void 0),l([m()],u.prototype,"terrainDepthTest",void 0),l([m()],u.prototype,"cullAboveTerrain",void 0),l([m()],u.prototype,"snowCover",void 0),l([m()],u.prototype,"hasColorTextureTransform",void 0),l([m()],u.prototype,"hasEmissionTextureTransform",void 0),l([m()],u.prototype,"hasNormalTextureTransform",void 0),l([m()],u.prototype,"hasOcclusionTextureTransform",void 0),l([m()],u.prototype,"hasMetallicRoughnessTextureTransform",void 0);function qt(e){const t=new fe,{attributes:o,vertex:a,fragment:i,varyings:n}=t,{output:s,offsetBackfaces:d,pbrMode:c,snowCover:h,spherical:g}=e,v=c===1||c===2;if(k(a,e),o.add("position","vec3"),n.add("vpos","vec3",{invariant:!0}),t.include(ee,e),t.include(Nt,e),t.include(ht,e),t.include(pt,e),!ae(s))return t.include(Lt,e),t;me(t.vertex,e),t.include(ve,e),t.include(W),d&&t.include(Ct),n.add("vNormalWorld","vec3"),n.add("localvpos","vec3",{invariant:!0}),t.include(U,e),t.include(Ot,e),t.include(zt,e),t.include(ut,e),a.include(de),a.include(ft),a.uniforms.add(new mt("externalColor",f=>f.externalColor,{supportsNaN:!0})),n.add("vcolorExt","vec4"),t.include(e.instancedDoublePrecision?kt:Be,e),a.main.add(r`
    forwardVertexColor();

    MaskedColor maskedColorExt =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColorExt.color;
    forwardColorMixMode(maskedColorExt.mask);

    bool alphaCut = opacityMixMode != ${r.int(K.ignore)} && vcolorExt.a < ${r.float(Q)};
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
  `);const{hasColorTexture:w,hasColorTextureTransform:I}=e;return i.include(je,e),i.include(Me,e),t.include(J,e),i.include(Y,e),t.include(vt,e),me(i,e),ie(i),Te(i),Se(i),i.uniforms.add(a.uniforms.get("localOrigin"),a.uniforms.get("view"),new te("ambient",f=>f.ambient),new te("diffuse",f=>f.diffuse),new O("opacity",f=>f.opacity),new O("layerOpacity",f=>f.layerOpacity)),w&&i.uniforms.add(new M("tex",f=>f.texture)),t.include(He,e),i.include(Ae,e),i.include(gt),i.include(ke,e),Z(i),i.main.add(r`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${w?`texture(tex, ${I?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${p(w,`${p(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = readShadow(additionalAmbientScale, vpos);
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?r`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, opacityMixMode);`:r`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, opacityMixMode);`}

      vec3 shadingNormal = normalize(vNormalWorld);
      vec3 groundNormal = ${g?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};

      ${p(h,`vec3 faceNormal = screenDerivativeNormal(vpos);
         float snow = getRealisticTreeSnow(faceNormal, shadingNormal, groundNormal);
         albedo = mix(albedo, vec3(1), snow);`)}

      ${r`albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}

      ${v?r`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${p(h,"mrr = applySnowToMRR(mrr, snow);")}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, groundNormal, mrr, additionalAmbientIrradiance);`:r`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${p(h,", 1.0")});`),t}const $o=Object.freeze(Object.defineProperty({__proto__:null,build:qt},Symbol.toStringTag,{value:"Module"}));let We=class extends _e{constructor(){super(...arguments),this.shader=new ue($o,()=>import("./LineCallout.glsl-ssVfH7Cy.js").then(e=>e.R))}};We=l([j("esri.views.3d.webgl-engine.shaders.RealisticTreeTechnique")],We);class Xo extends Ha{constructor(t,o){super(t,Qo),this.materialType="default",this.supportsEdges=!0,this.intersectDraped=void 0,this.produces=new Map([[2,a=>(Oe(a)||Ie(a))&&!this.transparent],[4,a=>(Oe(a)||Ie(a))&&this.transparent&&this.parameters.writeDepth],[9,a=>(Oe(a)||Ie(a))&&this.transparent&&!this.parameters.writeDepth]]),this._layout=Yt(this.parameters),this._configuration=new u(o.spherical)}isVisibleForOutput(t){return t!==3&&t!==5&&t!==4||this.parameters.castShadows}get visible(){const{layerOpacity:t,colorMixMode:o,opacity:a,externalColor:i}=this.parameters;return t*(o==="replace"?1:a)*(o==="ignore"||isNaN(i[3])?1:i[3])>=Q}get _hasEmissiveBase(){return!!this.parameters.emissiveTextureId||!$e(this.parameters.emissiveBaseColor,Ce)}get hasEmissions(){return this.parameters.emissiveStrength>0&&(this.parameters.emissiveSource===0&&this._hasEmissiveBase||this.parameters.emissiveSource===1)}getConfiguration(t,o){const{parameters:a,_configuration:i}=this,{treeRendering:n,doubleSided:s,doubleSidedType:d}=a;return super.getConfiguration(t,o,this._configuration),i.hasNormalTexture=a.hasNormalTexture,i.hasColorTexture=a.hasColorTexture,i.hasMetallicRoughnessTexture=a.hasMetallicRoughnessTexture,i.hasOcclusionTexture=a.hasOcclusionTexture,i.hasVertexTangents=!n&&a.hasVertexTangents,i.instanced=a.instanced,i.instancedDoublePrecision=a.instancedDoublePrecision,i.hasVVColor=!!a.vvColor,i.hasVVSize=!!a.vvSize,i.hasVerticalOffset=a.verticalOffset!=null,i.hasScreenSizePerspective=a.screenSizePerspective!=null,i.hasSlicePlane=a.hasSlicePlane,i.alphaDiscardMode=a.textureAlphaMode,i.normalType=n?0:a.normalType,i.transparent=this.transparent,i.writeDepth=a.writeDepth,i.customDepthTest=a.customDepthTest??0,i.hasOccludees=o.hasOccludees,i.cullFace=a.hasSlicePlane?0:a.cullFace,i.cullAboveTerrain=o.cullAboveTerrain,i.hasModelTransformation=!n&&a.modelTransformation!=null,i.hasVertexColors=a.hasVertexColors,i.hasSymbolColors=a.hasSymbolColors,i.doubleSidedMode=n?2:s&&d==="normal"?1:s&&d==="winding-order"?2:0,i.instancedFeatureAttribute=a.instancedFeatureAttribute,i.instancedColor=a.instancedColor,ae(t)?(i.terrainDepthTest=o.terrainDepthTest,i.receiveShadows=a.receiveShadows,i.receiveAmbientOcclusion=a.receiveAmbientOcclusion&&o.ssao!=null):(i.terrainDepthTest=!1,i.receiveShadows=i.receiveAmbientOcclusion=!1),i.textureAlphaPremultiplied=!!a.textureAlphaPremultiplied,i.pbrMode=a.usePBR?a.isSchematic?2:1:0,i.emissionSource=a.emissionSource,i.offsetBackfaces=!(!this.transparent||!a.offsetTransparentBackfaces),i.enableOffset=o.enableOffset,i.snowCover=o.snowCover>0,i.hasColorTextureTransform=!!a.colorTextureTransformMatrix,i.hasNormalTextureTransform=!!a.normalTextureTransformMatrix,i.hasEmissionTextureTransform=!!a.emissiveTextureTransformMatrix,i.hasOcclusionTextureTransform=!!a.occlusionTextureTransformMatrix,i.hasMetallicRoughnessTextureTransform=!!a.metallicRoughnessTextureTransformMatrix,i}intersect(t,o,a,i,n,s){if(this.parameters.verticalOffset!=null){const d=a.camera;L(Ye,o[12],o[13],o[14]);let c=null;switch(a.viewingMode){case 1:c=ha(Jt,Ye);break;case 2:c=ca(Jt,or)}const h=ze(rr,Ye,d.eye),g=ua(h),v=et(h,h,1/g);let w=null;this.parameters.screenSizePerspective&&(w=ma(c,v));const I=Ba(d,g,this.parameters.verticalOffset,w??0,this.parameters.screenSizePerspective,null);et(c,c,I),pa(Ue,c,a.transform.inverseRotation),i=ze(tr,i,Ue),n=ze(ar,n,Ue)}ka(t,a,i,n,Wa(a.verticalOffset),s)}createGLMaterial(t){return new Ko(t)}createBufferWriter(){return new Ua(this._layout)}get transparent(){return er(this.parameters)}}class Ko extends Ya{constructor(t){super({...t,...t.material.parameters})}beginSlot(t){this._material.setParameters({receiveShadows:t.shadowMap.enabled});const o=this._material.parameters;this.updateTexture(o.textureId);const a=t.camera.viewInverseTransposeMatrix;return L(o.origin,a[3],a[7],a[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(o.treeRendering?We:_e,t)}}class Qo extends Yo{constructor(){super(...arguments),this.treeRendering=!1,this.hasVertexTangents=!1}get hasNormalTexture(){return!this.treeRendering&&!!this.normalTextureId}get hasColorTexture(){return!!this.textureId}get hasMetallicRoughnessTexture(){return!this.treeRendering&&!!this.metallicRoughnessTextureId}get hasOcclusionTexture(){return!this.treeRendering&&!!this.occlusionTextureId}get emissiveStrength(){return this.emissiveStrengthFromSymbol*this.emissiveStrengthKHR}get emissionSource(){return this.treeRendering?0:this.emissiveTextureId!=null&&this.emissiveSource===0?3:this.emissiveSource===0?2:1}get hasTextures(){return this.hasColorTexture||this.hasNormalTexture||this.hasMetallicRoughnessTexture||this.emissionSource===3||this.hasOcclusionTexture}}function er(e){const{drivenOpacity:t,opacity:o,externalColor:a,layerOpacity:i,texture:n,textureId:s,textureAlphaMode:d,colorMixMode:c}=e,h=a[3];return t||o<1&&c!=="replace"||h<1&&c!=="ignore"||i<1||(n!=null||s!=null)&&d!==1&&d!==2&&c!=="replace"}const tr=x(),ar=x(),or=da(0,0,1),Jt=x(),Ue=x(),Ye=x(),rr=x();export{q as F,Ut as J,qo as M,Xo as R,qt as _,Dt as a,St as b,uo as c,It as d,je as e,Be as f,Me as g,Te as h,vo as i,Se as j,ke as k,Z as l,ie as m,He as n,_t as o,be as p,Oo as q,Ht as r,jt as s,po as t,fo as u,Rt as v,Vt as w,De as x,Gt as y};
