import{D as e,q as t}from"./typedArrayUtil-xhTyVct8.js";import{b as n,y as r}from"./mathUtils-CK5hnLZf.js";import{n as i}from"./Error-Cn9vOwr6.js";import{M as a,n as o}from"./decorators-CYnpsqxn.js";import{M as s,b as c}from"./promiseUtils-Src651V9.js";import{a as l}from"./Accessor-BbNALsBt.js";import{i as u,r as d}from"./time-Cd0nBi0n.js";import{r as f}from"./tslib.es6-CVTII-xV.js";import{t as p}from"./Evented-ms1RjD9s.js";import{G as m}from"./fieldUtils-BcsiDNVz.js";import{L as h}from"./units-FLUQmY_F.js";import{C as g}from"./aaBoundingRect-9owrqGyU.js";import{S as _,i as v,r as y,y as b}from"./vec2-Ct_ybxJk.js";import{f as x}from"./mat3-Cq_9WtPN.js";import{t as S}from"./mat3f64-Dy80iIif.js";import{d as C}from"./screenUtils-DJilAsyr.js";import{d as w,l as T,s as E}from"./vec3f64-AlvO6xQn.js";import{r as D,t as ee}from"./mat4f64-CfZSfBjp.js";import{t as O}from"./DoubleArray-CiQoG3ac.js";import{o as te,t as ne}from"./projectBuffer-B3LqamLa.js";import{T as re,b as ie,h as k,o as ae,x as oe}from"./mat4-DSO-PSgk.js";import{n as se,t as ce}from"./unitConversionUtils-jFyNs7Rd.js";import{C as le,N as A,O as j,_ as M,c as ue,j as N,k as de,l as fe,n as pe,o as me,r as P,s as he,t as ge,v as _e,x as F,y as I}from"./vec3-BvdLhmU_.js";import{i as ve,o as ye}from"./vec2f64-BxrAN9V8.js";import{l as be}from"./vec4-B53Z0Xys.js";import{a as xe,c as Se,i as Ce,n as we,o as Te,t as Ee}from"./vec4f64-BgMl3sDy.js";import{a as De,g as Oe,m as ke,w as Ae,x as je,y as Me}from"./plane-C0H2rSug.js";import{r as Ne}from"./mathUtils-CsqktqZQ.js";import{n as Pe}from"./sphere-u09nfSdq.js";import{a as Fe}from"./ray-C_6THnx0.js";import{a as Ie,c as Le,d as Re,o as ze}from"./lineSegment-BOvZ9ZdA.js";import{n as Be}from"./uuid-BWVyMADA.js";import{i as Ve,n as He}from"./Indices-CBZyWBXS.js";import{t as Ue}from"./computeTranslationToOriginAndRotation-Ry7fVsWM.js";import{G as We,H as Ge,K as Ke,Z as qe}from"./BufferView-C2897Cpl.js";import{h as Je,i as Ye,s as Xe}from"./enums-DbMIex2k.js";import{i as L}from"./orientedBoundingBox-D3Lx2Y0B.js";import{a as Ze,h as Qe,i as $e,m as et,n as tt,p as nt,u as rt,v as it,y as at}from"./Emissions.glsl-DHYGZCki.js";import{n as R,t as z}from"./glsl-C3kp6zqV.js";import"./Texture-BybbdX_u.js";import{i as ot}from"./hydratedFeatures-UyEzbUuw.js";import{t as st}from"./ShaderBuilder-BteJty_U.js";import{n as B,r as ct,t as lt}from"./vec3f32-Dr_a07j-.js";import{a as ut,l as dt,r as ft,u as pt}from"./renderState-PwAWo9ML.js";import{A as mt,At as ht,B as gt,D as _t,Dt as vt,E as yt,Et as bt,F as xt,Ft as St,G as Ct,Gt as wt,H as Tt,Ht as Et,K as Dt,Kt as Ot,M as kt,Mt as At,N as jt,O as Mt,P as Nt,R as Pt,Rt as Ft,St as It,T as Lt,Tt as Rt,U as zt,Vt as Bt,W as Vt,Wt as Ht,Y as Ut,Yt as Wt,_ as Gt,an as Kt,at as qt,cn as Jt,ct as Yt,ft as Xt,g as Zt,hn as Qt,it as $t,j as en,jt as tn,k as nn,ln as rn,mn as an,mt as on,nn as sn,ot as cn,pn as ln,pt as un,q as dn,qt as fn,rn as pn,rt as mn,st as hn,tt as gn,un as _n,ut as vn,w as yn,wt as bn,xt as xn,z as Sn,zt as Cn}from"./VertexColor.glsl-B6NvE-zG.js";import{t as wn}from"./Octree-Ct__vJXT.js";import{t as Tn}from"./Texture2DBindUniform-CV4og1sD.js";import{a as En,i as Dn,l as V,n as On,s as kn,t as An}from"./AlphaCutoff-Bp9xYXyU.js";import{a as jn,n as Mn,r as Nn,s as Pn}from"./FloatArray-mQgxOGXs.js";import{t as Fn}from"./PositionOutsideClipSpace-CXsIAEIw.js";import{i as In,n as Ln,r as Rn,t as zn}from"./HUDVisibility.glsl-BHOk0AXw.js";function Bn(e){return e===`position`}function Vn(e,t){return e??=[],e.push(t),e}function Hn(e,t){if(e==null)return null;let n=e.filter(e=>e!==t);return n.length===0?null:n}function Un(e,t,n,r,i){Wn[0]=e.get(t,0),Wn[1]=e.get(t,1),Wn[2]=e.get(t,2),ln(Wn,Gn,3),n.set(i,0,Gn[0]),r.set(i,0,Gn[1]),n.set(i,1,Gn[2]),r.set(i,1,Gn[3]),n.set(i,2,Gn[4]),r.set(i,2,Gn[5])}var Wn=E(),Gn=new Float32Array(6),Kn=class{constructor(e={}){this.id=a(),this._highlightIds=new Set,this._shaderTransformation=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerViewUid=e.layerViewUid,e.isElevationSource&&(this.lastValidElevationBB=new qn),this._geometries=e.geometries?Array.from(e.geometries):[]}dispose(){this._geometries.length=0}get layer(){return this._layer}set layer(e){We(this._layer==null||e==null,`Object3D can only be added to a single Layer`),this._layer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e);for(let t of this._highlightIds)e.addHighlight(t);this._emit(`geometryAdded`,{object:this,geometry:e}),this._highlightIds.size&&this._emit(`highlightChanged`,this),this._invalidateBoundingVolume()}removeGeometry(e){let t=this._geometries.splice(e,1)[0];if(t){for(let e of this._highlightIds)t.removeHighlight(e);this._emit(`geometryRemoved`,{object:this,geometry:t}),this._highlightIds.size&&this._emit(`highlightChanged`,this),this._invalidateBoundingVolume()}}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,t,n=!1){this._emit(`attributesChanged`,{object:this,geometry:e,attribute:t,sync:n}),Bn(t)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(let e of this._geometries)e.visible=this._visible;this._emit(`visibilityChanged`,this)}}maskOccludee(){let e=new Qt;for(let t of this._geometries)t.occludees=Vn(t.occludees,e);return this._emit(`occlusionChanged`,this),e}removeOcclude(e){for(let t of this._geometries)t.occludees=Hn(t.occludees,e);this._emit(`occlusionChanged`,this)}highlight(e){let t=new an(e);for(let e of this._geometries)e.addHighlight(t);return this._emit(`highlightChanged`,this),this._highlightIds.add(t),t}removeHighlight(e){this._highlightIds.delete(e);for(let t of this._geometries)t.removeHighlight(e);this._emit(`highlightChanged`,this)}removeStateID(e){e.channel===0?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,t){return k(t,this.transformation,e.transformation)}getCombinedShaderTransformation(e,t=ee()){return k(t,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=new Jn,this._validateBoundingVolume(this._bvWorldSpace,0)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=new Jn,this._validateBoundingVolume(this._bvObjectSpace,1)),this._bvObjectSpace}_validateBoundingVolume(e,t){let n=t===1;for(let t of this._geometries){let r=t.boundingInfo;r&&Yn(r,e,n?t.transformation:this.getCombinedShaderTransformation(t))}he(e.bounds.center,e.min,e.max,.5);for(let t of this._geometries){let r=t.boundingInfo;if(r==null)continue;let i=n?t.transformation:this.getCombinedShaderTransformation(t),a=Ne(i);P($n,r.center,i);let o=de($n,e.bounds.center),s=r.radius*a;e.bounds.radius=Math.max(e.bounds.radius,o+s)}}_invalidateBoundingVolume(){let e=this._bvWorldSpace?.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this.layer&&e&&this.layer.notifyObjectBBChanged(this,e)}_emit(e,t){this.layer?.events.emit(e,t)}get geometries(){return this._geometries}get transformation(){return this._transformation??D}set transformation(e){this._transformation=re(this._transformation??ee(),e),this._invalidateBoundingVolume(),this._emit(`transformationChanged`,this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?re(this._shaderTransformation??ee(),e):null,this._invalidateBoundingVolume(),this._emit(`shaderTransformationChanged`,this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}get test(){}},qn=class{constructor(){this._data=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE]}get min(){return T(this._data[0],this._data[1],this._data[2])}get max(){return T(this._data[3],this._data[4],this._data[5])}minWith(e){let{_data:t}=this;t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.min(t[2],e[2])}maxWith(e){let{_data:t}=this;t[3]=Math.max(t[3],e[0]),t[4]=Math.max(t[4],e[1]),t[5]=Math.max(t[5],e[2])}assignMinMax(e,t){for(let n=0;n<3;++n)this._data[0+n]=e[n],this._data[3+n]=t[n]}isEmpty(){return this._data[3]<this._data[0]&&this._data[4]<this._data[1]&&this._data[5]<this._data[2]}},Jn=class extends qn{constructor(){super(...arguments),this.bounds=new Pe}};function Yn(e,t,n){let r=e.bbMin,i=e.bbMax;if(ae(n)){let e=N(Xn,n[12],n[13],n[14]);I(Zn,r,e),I(Qn,i,e),t.minWith(Zn),t.maxWith(Qn);return}if(P(Zn,r,n),pe(r,i))return t.minWith(Zn),void t.maxWith(Zn);P(Qn,i,n),t.minWith(Zn),t.minWith(Qn),t.maxWith(Zn),t.maxWith(Qn);for(let e=0;e<3;++e)j(Zn,r),j(Qn,i),Zn[e]=i[e],Qn[e]=r[e],P(Zn,Zn,n),P(Qn,Qn,n),t.minWith(Zn),t.minWith(Qn),t.maxWith(Zn),t.maxWith(Qn)}var Xn=E(),Zn=E(),Qn=E(),$n=E(),er=[`layerObjectAdded`,`layerObjectRemoved`,`layerObjectsAdded`,`layerObjectsRemoved`,`transformationChanged`,`shaderTransformationChanged`,`visibilityChanged`,`occlusionChanged`,`highlightChanged`,`geometryAdded`,`geometryRemoved`,`attributesChanged`],tr=class{constructor(e,t,n=``){this.stage=e,this.apiLayerViewUid=n,this.id=a(),this.events=new p,this.visible=!0,this.sliceable=!1,this._objectsAdded=[],this._handles=new l,this._objects=new Map,this._pickable=!0,this.visible=t?.visible??!0,this._pickable=t?.pickable??!0,this.updatePolicy=t?.updatePolicy??0,e.addLayer(this);for(let t of er)this._handles.add(this.events.on(t,n=>e.handleEvent(t,n)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.removeLayer(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}getObject(e){return t(this._objects.get(e))}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.set(e.id,e),e.layer=this,this.events.emit(`layerObjectAdded`,e),this._octree!=null&&this._objectsAdded.push(e)}remove(t){this._objects.delete(t.id)&&(this.events.emit(`layerObjectRemoved`,t),t.layer=null,this._octree!=null&&(e(this._objectsAdded,t)||this._octree.remove([t])))}addMany(e){for(let t of e)this._objects.set(t.id,t),t.layer=this;this.events.emit(`layerObjectsAdded`,e),this._octree!=null&&this._objectsAdded.push(...e)}removeMany(t){let n=[];for(let e of t)this._objects.delete(e.id)&&n.push(e);if(n.length!==0&&(this.events.emit(`layerObjectsRemoved`,n),n.forEach(e=>e.layer=null),this._octree!=null)){for(let t=0;t<n.length;)e(this._objectsAdded,n[t])?(n[t]=n[n.length-1],--n.length):++t;this._octree.remove(n)}}commit(){this.stage.commitLayer(this)}sync(){this.updatePolicy!==1&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){this._octree==null||this._objectsAdded.includes(e)||this._octree.update(e,t)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.size>50?(this._octree=new wn(e=>e.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.values())):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded),this._objectsAdded.length=0),this._octree}invalidateSpatialQueryAccelerator(){this._octree=s(this._octree),this._objectsAdded.length=0}get test(){}},nr=class{constructor(e,t){this.vec3=e,this.id=t}};function rr(e,t,n,r){return new nr(T(e,t,n),r)}var ir={stableRendering:!1},ar={rootOrigin:null},H={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},or={dash:H.dash,"dash-dot":[...H.dash,...H.dot],dot:H.dot,"long-dash":H[`long-dash`],"long-dash-dot":[...H[`long-dash`],...H.dot],"long-dash-dot-dot":[...H[`long-dash`],...H.dot,...H.dot],none:null,"short-dash":H[`short-dash`],"short-dash-dot":[...H[`short-dash`],...H[`short-dot`]],"short-dash-dot-dot":[...H[`short-dash`],...H[`short-dot`],...H[`short-dot`]],"short-dot":H[`short-dot`],solid:null},sr=8,cr=class{constructor(e,t,n){this.image=e,this.width=t,this.length=n,this.uuid=Be()}};function lr(e){return e!=null&&`image`in e}function ur(e,t){return e==null?e:{pattern:e.slice(),pixelRatio:t}}function dr(e){return{pattern:[e,e],pixelRatio:2}}function fr(e){switch(e?.type){case`style`:return pr(e.style);case`image`:return new cr(e.image,e.width,e.length);case void 0:case null:return null}return null}function pr(e){return e==null?null:ur(or[e],sr)}var mr=8;function hr(e,t){let{vertex:n,attributes:r}=e;n.uniforms.add(new $e(`intrinsicWidth`,e=>e.width));let{hasScreenSizePerspective:i,spherical:a}=t;i?(e.include(Ct,t),Dt(n),Sn(n,t),n.uniforms.add(new zt(`inverseViewMatrix`,(e,t)=>ie(gr,oe(gr,t.camera.viewMatrix,e.origin)))),n.code.add(R`
      float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
        vec3 worldPos = (inverseViewMatrix * vec4(pos, 1)).xyz;
        vec3 groundUp = ${a?R`normalize(worldPos + localOrigin)`:R`vec3(0.0, 0.0, 1.0)`};
        float absCosAngle = abs(dot(groundUp, normalize(worldPos - cameraPosition)));

        return screenSizePerspectiveScaleFloat(size, absCosAngle, length(pos), screenSizePerspective);
      }
    `)):n.code.add(R`float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
return size;
}`),t.hasVVSize?(r.add(`sizeFeatureAttribute`,`float`),n.uniforms.add(new Ze(`vvSizeMinSize`,e=>e.vvSize.minSize),new Ze(`vvSizeMaxSize`,e=>e.vvSize.maxSize),new Ze(`vvSizeOffset`,e=>e.vvSize.offset),new Ze(`vvSizeFactor`,e=>e.vvSize.factor),new Ze(`vvSizeFallback`,e=>e.vvSize.fallback)),n.code.add(R`
    float getSize(${z(i,`vec3 pos`)}) {
      float size = isnan(sizeFeatureAttribute)
        ? vvSizeFallback.x
        : intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;

      return ${z(i,`applyLineSizeScreenSizePerspective(size, pos)`,`size`)};
    }
    `)):(r.add(`size`,`float`),n.code.add(R`
    float getSize(${z(i,`vec3 pos`)}) {
      float fullSize = intrinsicWidth * size;
      return ${z(i,`applyLineSizeScreenSizePerspective(fullSize, pos)`,`fullSize`)};
    }
    `)),t.hasVVOpacity?(r.add(`opacityFeatureAttribute`,`float`),n.constants.add(`vvOpacityNumber`,`int`,8),n.uniforms.add(new Ut(`vvOpacityValues`,mr,e=>e.vvOpacity.values),new Ut(`vvOpacityOpacities`,mr,e=>e.vvOpacity.opacityValues),new $e(`vvOpacityFallback`,e=>e.vvOpacity.fallback,{supportsNaN:!0})),n.code.add(R`
    float interpolateOpacity(float value) {
      if (value <= vvOpacityValues[0]) {
        return vvOpacityOpacities[0];
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
        }
      }

      return vvOpacityOpacities[vvOpacityNumber - 1];
    }

    vec4 applyOpacity(vec4 color) {
      if (isnan(opacityFeatureAttribute)) {
        // If there is a color vv then it will already have taken care of applying the fallback
        return ${z(t.hasVVColor,`color`,`vec4(color.rgb, vvOpacityFallback)`)};
      }

      return vec4(color.rgb, interpolateOpacity(opacityFeatureAttribute));
    }
    `)):n.code.add(R`vec4 applyOpacity(vec4 color) {
return color;
}`),t.hasVVColor?(e.include(dn,t),r.add(`colorFeatureAttribute`,`float`),n.code.add(R`vec4 getColor() {
vec4 color = interpolateVVColor(colorFeatureAttribute);
if (isnan(color.r)) {
return vec4(0);
}
return applyOpacity(color);
}`)):(r.add(`color`,`vec4`),n.code.add(R`vec4 getColor() {
return applyOpacity(color);
}`))}var gr=ee();function _r(e){e.vertex.code.add(`#define noPerspectiveWrite(x, w) (x * w)`)}function vr(e){e.fragment.code.add(`#define noPerspectiveRead(x) (x * gl_FragCoord.w)`)}function yr(e){return e.pattern.map(t=>Math.round(t*e.pixelRatio))}function br(e){if(e==null)return 1;let t=yr(e);return Math.floor(t.reduce((e,t)=>e+t))}function xr(e){return e==null?Ee:e.length===4?e:be(Sr,e[0],e[1],e[2],1)}var Sr=Ce();function Cr(e,t){if(!t.stippleEnabled)return void e.fragment.code.add(R`float getStippleAlpha(float lineWidth) { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);let n=!(t.draped&&t.stipplePreferContinuous),{vertex:r,fragment:i}=e;t.draped||(Sn(r,t),r.uniforms.add(new sn(`worldToScreenPerDistanceRatio`,({camera:e})=>1/e.perScreenPixelRatio)).code.add(R`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add(`vStippleDistance`,`float`),e.varyings.add(`vStippleDistanceLimits`,`vec2`),e.varyings.add(`vStipplePatternStretch`,`float`),r.code.add(R`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${R.float(Tr)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),Tt(r),r.code.add(R`
    vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {

      // First check if the segment is long enough to support fully screen space patterns.
      // Force sparse mode for segments that are very large in screen space even if it is not allowed,
      // to avoid imprecision from calculating with large floats.
      if (segmentLengthPseudoScreen >= ${n?`patternLength`:`1e4`}) {
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        float stretch = repetitions / flooredRepetitions;

        // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
        // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
        vStipplePatternStretch = max(0.75, stretch);

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `),i.uniforms.add(new tt(`stipplePatternTexture`,e=>e.stippleTexture),new $e(`stipplePatternPixelSizeInv`,e=>1/wr(e))),t.stippleOffColorEnabled&&i.uniforms.add(new pn(`stippleOffColor`,e=>xr(e.stippleOffColor))),e.include(vr),t.worldSizedImagePattern?(e.varyings.add(`vStippleV`,`float`),e.fragment.include(Pt),i.code.add(R`vec4 getStippleColor(out bool isClamped) {
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = vStippleDistance * stipplePatternPixelSizeInv;
float v = vStippleV == -1.0 ? 0.5 : vStippleV;
return texture(stipplePatternTexture, vec2(u, v));
}
vec4 getStippleColor() {
bool ignored;
return getStippleColor(ignored);
}
float getStippleSDF() {
vec4 color = getStippleColor();
return color.a == 0.0 ? -0.5 : 0.5;
}
float getStippleAlpha(float lineWidth) {
return getStippleColor().a;
}
vec4 blendStipple(vec4 color, float stippleAlpha) {
vec4 stippleColor = getStippleColor();
int mixMode  = 1;
vec3 col = mixExternalColor(color.rgb, vec3(1.0), stippleColor.rgb, mixMode);
float opacity = mixExternalOpacity(color.a, 1.0, stippleColor.a, mixMode);
return vec4(col, opacity);
}`)):i.code.add(R`
    float getStippleSDF(out bool isClamped) {
      float stippleDistanceClamped = noPerspectiveRead(clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y));
      float lineSizeInv = noPerspectiveRead(vLineSizeInv);

      vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
      isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;

      float u = stippleDistanceClamped * stipplePatternPixelSizeInv * lineSizeInv;
      u = fract(u);

      float sdf = texture(stipplePatternTexture, vec2(u, 0.5)).r;

      return (sdf - 0.5) * vStipplePatternStretch + 0.5;
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha(float lineWidth) {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);
      float antiAliasedResult = clamp(stippleSDF * lineWidth + 0.5, 0.0, 1.0);
      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${t.stippleOffColorEnabled?`mix(color, stippleOffColor, stippleAlpha)`:`vec4(color.rgb, color.a * stippleAlpha)`};
    }
  `),i.code.add(R`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${z(!t.stippleOffColorEnabled,`if (stippleAlpha < threshold) { discard; }`)}
    }
  `)}function wr(e){let t=e.stipplePattern;return lr(t)?t.length:t?br(t)/t.pixelRatio:1}var Tr=.4,Er=.5,Dr=we(Er/2,Er/2,1-Er/2,1-Er/2);function Or(e){return e===`cross`||e===`x`}function kr(e,t=128,n=t*Er,r=0){let{data:i,parameters:a}=Ar(e,t,n,r);return new xt(i,a)}function Ar(e,t=128,n=t*Er,r=0){return{data:jr(e,t,n,r),parameters:{mipmap:!1,wrap:{s:33071,t:33071},width:t,height:t,noUnpackFlip:!0,dataType:Xe.FLOAT,pixelFormat:6403,internalFormat:Ye.R16F,reloadable:!0}}}function jr(e,t=128,n=t*Er,r=0){switch(e){case`circle`:default:return Mr(t,n);case`square`:return Nr(t,n);case`cross`:return Fr(t,n,r);case`x`:return Ir(t,n,r);case`kite`:return Pr(t,n);case`triangle`:return Lr(t,n);case`arrow`:return Rr(t,n)}}function Mr(e,t){let n=e/2-.5;return Ur(e,Vr(n,n,t/2))}function Nr(e,t){return zr(e,t,!1)}function Pr(e,t){return zr(e,t,!0)}function Fr(e,t,n=0){return Br(e,t,!1,n)}function Ir(e,t,n=0){return Br(e,t,!0,n)}function Lr(e,t){return Ur(e,Hr(e/2,t,t/2))}function Rr(e,t){let n=t,r=t/2,i=e/2,a=.8*n,o=Vr(i,(e-t)/2-a,Math.sqrt(a*a+r*r)),s=Hr(i,n,r);return Ur(e,(e,t)=>Math.max(s(e,t),-o(e,t)))}function zr(e,t,n){return n&&(t/=Math.SQRT2),Ur(e,(r,i)=>{let a=r-.5*e+.25,o=.5*e-i-.75;if(n){let e=(a+o)/Math.SQRT2;o=(o-a)/Math.SQRT2,a=e}return Math.max(Math.abs(a),Math.abs(o))-.5*t})}function Br(e,t,n,r=0){t-=r,n&&(t*=Math.SQRT2);let i=.5*t;return Ur(e,(t,a)=>{let o,s=t-.5*e,c=.5*e-a-1;if(n){let e=(s+c)/Math.SQRT2;c=(c-s)/Math.SQRT2,s=e}return s=Math.abs(s),c=Math.abs(c),o=s>c?s>i?Math.sqrt((s-i)*(s-i)+c*c):c:c>i?Math.sqrt(s*s+(c-i)*(c-i)):s,o-=r/2,o})}function Vr(e,t,n){return(r,i)=>{let a=r-e,o=i-t;return Math.sqrt(a*a+o*o)-n}}function Hr(e,t,n){let r=Math.sqrt(t*t+n*n);return(i,a)=>{let o=Math.abs(i-e)-n,s=a-e+t/2+.75,c=(t*o+n*s)/r,l=-s;return Math.max(c,l)}}function Ur(e,t){let n=new Float32Array(e*e);for(let r=0;r<e;r++)for(let i=0;i<e;i++)n[i+e*r]=t(i,r)/e;return n}var Wr=.25;function Gr(e,t){let n=e.vertex,r=t.hasScreenSizePerspective;Tt(n),n.uniforms.get(`markerScale`)??n.constants.add(`markerScale`,`float`,1),n.constants.add(`markerSizePerLineWidth`,`float`,10).code.add(R`
  float getLineWidth(${z(r,`vec3 pos`)}) {
     return max(getSize(${z(r,`pos`)}), 1.0) * pixelRatio;
  }

  float getScreenMarkerSize(float lineWidth) {
    return markerScale * markerSizePerLineWidth * lineWidth;
  }
  `),t.space===2&&(n.constants.add(`maxSegmentLengthFraction`,`float`,.45),n.uniforms.add(new sn(`perRenderPixelRatio`,e=>e.camera.perRenderPixelRatio)),n.code.add(R`
  bool areWorldMarkersHidden(vec3 pos, vec3 other) {
    vec3 midPoint = mix(pos, other, 0.5);
    float distanceToCamera = length(midPoint);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    float worldMarkerSize = getScreenMarkerSize(getLineWidth(${z(r,`pos`)})) * screenToWorldRatio;
    float segmentLen = length(pos - other);
    return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
  }

  float getWorldMarkerSize(vec3 pos) {
    float distanceToCamera = length(pos);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    return getScreenMarkerSize(getLineWidth(${z(r,`pos`)})) * screenToWorldRatio;
  }
  `))}var Kr=d(1),qr=d(1);function Jr(e,t){let{hasAnimation:n,animation:r}=t;if(!n)return;let{attributes:i,varyings:a,vertex:o,fragment:s}=e;i.add(`timeStamps`,`vec4`),a.add(`vTimeStamp`,`float`),a.add(`vFirstTime`,`float`),a.add(`vLastTime`,`float`),a.add(`vTransitionType`,`float`),o.main.add(R`vTimeStamp = timeStamps.x;
vFirstTime = timeStamps.y;
vLastTime = timeStamps.z;
vTransitionType = timeStamps.w;`),r===3&&s.constants.add(`decayRate`,`float`,2.3),s.code.add(R`
    float getTrailOpacity(float x) {
      if (x < 0.0) {
        return 0.0;
      }

      ${Yr(r)}
    }`),s.uniforms.add(new $e(`timeElapsed`,e=>e.timeElapsed),new $e(`trailLength`,e=>e.trailLength),new $e(`speed`,e=>e.animationSpeed),new Kt(`startEndTime`,e=>b(Xr,e.startTime,e.endTime))),s.constants.add(`fadeInTime`,`float`,qr),s.constants.add(`fadeOutTime`,`float`,Kr),s.constants.add(`incomingTransition`,`int`,0),s.constants.add(`outgoingTransition`,`int`,2),s.code.add(R`float fadeIn(float x) {
return smoothstep(0.0, fadeInTime, x);
}
float fadeOut(float x) {
return isinf(fadeOutTime) ? 1.0 : smoothstep(fadeOutTime, 0.0, x);
}
void updateAlphaIf(inout float alpha, bool condition, float newAlpha) {
alpha = condition ? min(alpha, newAlpha) : alpha;
}
vec4 animate(vec4 color) {
float startTime = startEndTime[0];
float endTime = startEndTime[1];
float totalTime = vLastTime - vFirstTime;
float actualFadeOutTime = min(fadeOutTime * speed, trailLength);
float longStreamlineThreshold = (fadeInTime + 1.0) * speed + actualFadeOutTime;
bool longStreamline = totalTime > longStreamlineThreshold;
float totalTimeWithFadeOut = longStreamline && actualFadeOutTime != trailLength ? totalTime : totalTime + actualFadeOutTime;
float fadeOutStartTime = longStreamline ? totalTime - actualFadeOutTime : totalTime;
float originTime =  -vFirstTime;
float actualEndTime = int(vTransitionType) == outgoingTransition ? min(endTime, startTime + vLastTime / speed) : endTime;
vec4 animatedColor = color;
if (speed == 0.0) {
float alpha = getTrailOpacity((totalTimeWithFadeOut - (vTimeStamp - vFirstTime)) / trailLength);
updateAlphaIf(alpha, !isinf(actualEndTime), fadeOut(timeElapsed - actualEndTime));
updateAlphaIf(alpha, true, fadeIn(timeElapsed - startTime));
animatedColor.a *= alpha;
return animatedColor;
}
float relativeStartTime = mod(startTime, totalTimeWithFadeOut);
float shiftedTimeElapsed = timeElapsed - relativeStartTime + originTime;
float headRelativeToFirst = mod(shiftedTimeElapsed * speed, totalTimeWithFadeOut);
float vRelativeToHead = headRelativeToFirst - originTime - vTimeStamp;
float vAbsoluteTime = timeElapsed - vRelativeToHead / speed;
if (startTime > timeElapsed) {
return vec4(0.0);
}
float alpha = getTrailOpacity(vRelativeToHead / trailLength);
updateAlphaIf(alpha, true, fadeIn(timeElapsed - startTime));
updateAlphaIf(alpha, !isinf(actualEndTime), fadeOut(timeElapsed - actualEndTime));
updateAlphaIf(alpha, int(vTransitionType) != incomingTransition, step(startTime, vAbsoluteTime));
updateAlphaIf(alpha, headRelativeToFirst > fadeOutStartTime, fadeOut((headRelativeToFirst - fadeOutStartTime) / speed));
alpha *= fadeIn(vTimeStamp - vFirstTime);
animatedColor.a *= alpha;
return animatedColor;
}`)}function Yr(e){switch(e){case 2:return`return x >= 0.0 && x <= 1.0 ? 1.0 : 0.0;`;case 3:return`float cutOff = exp(-decayRate);
        return (exp(-decayRate * x) - cutOff) / (1.0 - cutOff);`;default:return`return 1.0;`}}var Xr=ve(),Zr=1;function Qr(e){let t=new st,{attributes:n,varyings:r,vertex:i,fragment:a}=t,{applyMarkerOffset:o,draped:s,output:c,capType:l,stippleEnabled:u,falloffEnabled:d,roundJoins:f,wireframe:p,innerColorEnabled:m,hasAnimation:h,hasScreenSizePerspective:g,worldSizedImagePattern:_}=e;a.include(Nt),t.include(hr,e),t.include(Cr,e),t.include(gn,e),t.include(jt,e),t.include(Jr,e);let v=o&&!s;v&&(i.uniforms.add(new $e(`markerScale`,e=>e.markerScale)),t.include(Gr,{space:2,hasScreenSizePerspective:g})),gt(i,e),i.uniforms.add(new Ft(`inverseProjectionMatrix`,e=>e.camera.inverseProjectionMatrix),new _n(`nearFar`,e=>e.camera.nearFar),new $e(`miterLimit`,e=>e.join===`miter`?e.miterLimit:0),new Jt(`viewport`,e=>e.camera.fullViewport)),i.constants.add(`LARGE_HALF_FLOAT`,`float`,65500),n.add(`position`,`vec3`),n.add(`previousDelta`,`vec4`),n.add(`nextDelta`,`vec4`),n.add(`lineParameters`,`vec2`),n.add(`u0`,`float`),r.add(`vColor`,`vec4`),r.add(`vpos`,`vec3`,{invariant:!0}),r.add(`vLineDistance`,`float`),r.add(`vLineWidth`,`float`);let y=u;y&&r.add(`vLineSizeInv`,`float`);let b=l===2,x=u&&b,S=d||x;S&&r.add(`vLineDistanceNorm`,`float`),b&&(r.add(`vSegmentSDF`,`float`),r.add(`vReverseSegmentSDF`,`float`)),i.code.add(R`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),i.code.add(R`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),i.code.add(R`void clip(
inout vec4 pos,
inout vec4 prev,
inout vec4 next,
bool isStartVertex
) {
float vnp = nearFar[0] * 0.99;
if (pos.z > -nearFar[0]) {
if (!isStartVertex) {
if (prev.z < -nearFar[0]) {
pos = mix(prev, pos, interp(vnp, prev, pos));
next = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
} else {
if (next.z < -nearFar[0]) {
pos = mix(pos, next, interp(vnp, pos, next));
prev = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
}
} else {
if (prev.z > -nearFar[0]) {
prev = mix(pos, prev, interp(vnp, pos, prev));
}
if (next.z > -nearFar[0]) {
next = mix(next, pos, interp(vnp, next, pos));
}
}
}`),Tt(i),i.constants.add(`aaWidth`,`float`,+!u).main.add(R`
    // unpack values from vertex type
    bool isStartVertex = abs(abs(lineParameters.y) - 3.0) == 1.0;
    vec3 prevPosition = position + previousDelta.xyz * previousDelta.w;
    vec3 nextPosition = position + nextDelta.xyz * nextDelta.w;

    float coverage = 1.0;

    // Check for special value of lineParameters.y which is used by the Renderer when graphics are removed before the
    // VBO is recompacted. If this is the case, then we just project outside of clip space.
    if (lineParameters.y == 0.0) {
      gl_Position = ${Fn};
    }
    else {
      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);

      bool isJoin = abs(lineParameters.y) < 3.0;
  `),v&&i.main.add(R`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos.xyz, other.xyz);
if (!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos.xyz) * 0.5;
}`),t.include(_r),i.main.add(R`
      clip(pos, prev, next, isStartVertex);

      vec3 clippedPos = pos.xyz;
      vec3 clippedCenter = mix(pos.xyz, isStartVertex ? next.xyz : prev.xyz, 0.5);

      forwardViewPosDepth(pos.xyz);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);

      vec2 left = (pos.xy - prev.xy);
      vec2 right = (next.xy - pos.xy);

      float leftLen = length(left);
      float rightLen = length(right);

      float lineSize = getSize(${z(g,`clippedPos`)});
      ${z(u&&g,`float patternLineSize = getSize(clippedCenter);`)}
      ${z(u&&!g,`float patternLineSize = lineSize;`)}

      ${z(_,R`
          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio * worldToScreenRatio;
          if (lineWidth < 1.0) {
            coverage = lineWidth;
            lineWidth = 1.0;
          }
        `,R`
          if (lineSize < 1.0) {
            coverage = lineSize; // convert sub-pixel coverage to alpha
            lineSize = 1.0;
          }

          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio;
        `)}

      vLineWidth = noPerspectiveWrite(lineWidth, pos.w);
      ${y?R`vLineSizeInv = noPerspectiveWrite(1.0 / lineSize, pos.w);`:``}
  `),(u||b)&&i.main.add(R`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${b?R`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:``}
    `),i.main.add(R`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * lineParameters.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = perpendicular(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
float subdivisionFactor = lineParameters.x;
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),f?i.main.add(R`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = perpendicular(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${u?R`min(1.0, subdivisionFactor * ${R.float(3/2)})`:R`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(lineParameters.y) * factor * rotationAngle);
      `):i.main.add(R`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = perpendicular(joinDisplacementDir);`);let C=l!==0;return i.main.add(R`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${C?R`capDisplacementDir = isStartVertex ? -right : left;`:``}
    }
  `),i.main.add(R`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(lineParameters.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = noPerspectiveWrite(sign(lineParameters.y), pos.w);

    vLineDistance = lineWidth * lineDistNorm;
    ${S?R`vLineDistanceNorm = lineDistNorm;`:``}

    pos.xy += dpos;
  `),b&&i.main.add(R`vec2 segmentDir = normalize(segment);
vSegmentSDF = noPerspectiveWrite((isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir)), pos.w);
vReverseSegmentSDF = noPerspectiveWrite((isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir)), pos.w);`),u&&(s?i.uniforms.add(new sn(`worldToScreenRatio`,e=>1/e.screenToPCSRatio)):i.main.add(R`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),i.main.add(R`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),s?i.main.add(R`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = u0 * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):i.main.add(R`float startPseudoScreen = mix(u0, u0 - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),i.uniforms.add(new $e(`stipplePatternPixelSize`,e=>wr(e))),i.main.add(R`
      float patternLength = patternLineSize * stipplePatternPixelSize;

      ${z(_,R`
          float uu = mix(u0, u0 - segmentLengthRender, isEndVertex);
          vStippleDistanceLimits = vec2(uu, uu + segmentLengthRender);
          vStipplePatternStretch = 1.0;

          // The v-coordinate used in case of an image pattern.
          bool isLeft = sign(lineParameters.y) < 0.0;
          vStippleV = isLeft ? 0.0 : 1.0;
        `,R`
          // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the
          // fragment shader
          vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
        `)}

      vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of
      // joins)
      if (segmentLengthScreenDouble >= 0.001) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1]
        // at the original vertex positions, and slightly outside of that range at the displaced positions
        vec2 stippleDisplacement = pos.xy - segmentOrigin;
        float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
      }

      // Cancel out perspective correct interpolation because we want this length the really represent the screen
      // distance
      vStippleDistanceLimits = noPerspectiveWrite(vStippleDistanceLimits, pos.w);
      vStippleDistance = noPerspectiveWrite(vStippleDistance, pos.w);

      // Disable stipple distance limits on caps
      vStippleDistanceLimits = isJoin ?
                                 vStippleDistanceLimits :
                                 isStartVertex ?
                                  vec2(-1e34, vStippleDistanceLimits.y) :
                                  vec2(vStippleDistanceLimits.x, 1e34);
    `)),i.main.add(R`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a = noPerspectiveWrite(vColor.a * coverage, pos.w);

      ${p&&!s?`pos.z -= 0.001 * pos.w;`:``}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),t.fragment.include(En,e),t.include(kt,e),a.include(Dn),a.main.add(R`discardBySlice(vpos);
discardByTerrainDepth();`),t.include(vr),a.main.add(R`
    float lineWidth = noPerspectiveRead(vLineWidth);
    float lineDistance = noPerspectiveRead(vLineDistance);
    ${z(S,R`float lineDistanceNorm = noPerspectiveRead(vLineDistanceNorm);`)}
  `),p?a.main.add(R`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(b&&a.main.add(R`
        float sdf = noPerspectiveRead(min(vSegmentSDF, vReverseSegmentSDF));
        vec2 fragmentPosition = vec2(min(sdf, 0.0), lineDistance);

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - lineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${R.float(.003913894324853229)}) {
          discard;
        }
      `),x?a.main.add(R`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        lineDistanceNorm
      );
      float stippleRadius = length(stipplePosition * lineWidth);
      float stippleCapSDF = (stippleRadius - lineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${R.float(An)}, stippleCoverage);
      `):a.main.add(R`float stippleAlpha = getStippleAlpha(lineWidth);`),c!==9&&a.main.add(R`discardByStippleAlpha(stippleAlpha, ${R.float(.003913894324853229)});`),t.include(vr),a.uniforms.add(new pn(`intrinsicColor`,e=>e.color)).main.add(R`vec4 color = intrinsicColor * vColor;
color.a = noPerspectiveRead(color.a);`),m&&a.uniforms.add(new pn(`innerColor`,e=>e.innerColor??e.color),new $e(`innerWidth`,(e,t)=>e.innerWidth*t.camera.pixelRatio)).main.add(R`float distToInner = abs(lineDistance) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`),a.main.add(R`vec4 finalColor = blendStipple(color, stippleAlpha);`),d&&(a.uniforms.add(new $e(`falloff`,e=>e.falloff)),a.main.add(R`finalColor.a *= pow(max(0.0, 1.0 - abs(lineDistanceNorm)), falloff);`)),u||a.main.add(R`float featherStartDistance = max(lineWidth - 2.0, 0.0);
float value = abs(lineDistance);
float feather = (value - featherStartDistance) / (lineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`),h&&a.main.add(R`
        finalColor = animate(finalColor);

        ${z(c!==9,R`
            if (finalColor.a <= ${R.float(.003913894324853229)}) {
              discard;
            }`)}
      `)),a.main.add(R`outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),t}var $r=Object.freeze(Object.defineProperty({__proto__:null,build:Qr,ribbonlineNumRoundJoinSubdivisions:1},Symbol.toStringTag,{value:`Module`})),ei=class extends fn{constructor(e,t){super(e,t,Pn(ni(t))),this.shader=new Wt($r,()=>import(`./RibbonLine.glsl-BOKTRGWG.js`)),this.primitiveType=t.wireframe?Je.LINES:Je.TRIANGLE_STRIP}_makePipelineState(e,t){let{oitPass:n,output:r,hasEmission:i,hasOccludees:a,hasPolygonOffset:o}=e,s=n===0,c=n===2;return pt({blending:et(r)?Bt(n):null,depthTest:wt(n),depthWrite:Ht(e),drawBuffers:Ot(r,Et(n,i)),colorWrite:dt,stencilWrite:a?_t:null,stencilTest:a?t?mt:Lt:null,polygonOffset:s||c?o?ti:null:Cn})}initializePipeline(e){if(e.occluder){let t=e.hasPolygonOffset?ti:null,{output:n,hasOccludees:r}=e;this._occluderPipelineTransparent=pt({blending:ft,polygonOffset:t,depthTest:nn,depthWrite:null,colorWrite:dt,stencilWrite:null,stencilTest:r?yt:null,drawBuffers:Ot(n)}),this._occluderPipelineOpaque=pt({blending:ft,polygonOffset:t,depthTest:r?nn:yn,depthWrite:null,colorWrite:dt,stencilWrite:r?Mt:null,stencilTest:r?en:null,drawBuffers:Ot(n)}),this._occluderPipelineMaskWrite=pt({blending:null,polygonOffset:t,depthTest:yn,depthWrite:null,colorWrite:null,stencilWrite:r?_t:null,stencilTest:r?mt:null,drawBuffers:Ot(n)})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){if(t)return this._occludeePipeline;switch(e.occluder){case 12:return this._occluderPipelineTransparent??super.getPipeline(e);case 11:return this._occluderPipelineOpaque??super.getPipeline(e);default:e.occluder;case void 0:case null:return this._occluderPipelineMaskWrite??super.getPipeline(e)}}};ei=f([o(`esri.views.3d.webgl-engine.shaders.RibbonLineTechnique`)],ei);var ti={factor:0,units:-4};function ni(e){let t=jn().vec3f(`position`).vec4f16(`previousDelta`).vec4f16(`nextDelta`).f32(`u0`).vec2f16(`lineParameters`);return e.hasVVColor?t.f32(`colorFeatureAttribute`):t.vec4u8(`color`,{glNormalized:!0}),e.hasVVSize?t.f32(`sizeFeatureAttribute`):t.f32(`size`),e.hasVVOpacity&&t.f32(`opacityFeatureAttribute`),ht()&&t.vec4u8(`olidColor`),e.hasAnimation&&t.vec4f16(`timeStamps`),t}var U=class extends bn{constructor(e){super(),this.spherical=e,this.capType=0,this.emissionSource=0,this.animation=2,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVVOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.hasScreenSizePerspective=!1,this.worldSizedImagePattern=!1,this.textureCoordinateType=0,this.occlusionPass=!1,this.hasVVInstancing=!1,this.hasSliceTranslatedView=!0,this.overlayEnabled=!1,this.snowCover=!1}get hasAnimation(){return this.animation!==0}};f([V({count:3})],U.prototype,`capType`,void 0),f([V({count:8})],U.prototype,`emissionSource`,void 0),f([V({count:4})],U.prototype,`animation`,void 0),f([V()],U.prototype,`hasPolygonOffset`,void 0),f([V()],U.prototype,`writeDepth`,void 0),f([V()],U.prototype,`draped`,void 0),f([V()],U.prototype,`stippleEnabled`,void 0),f([V()],U.prototype,`stippleOffColorEnabled`,void 0),f([V()],U.prototype,`stipplePreferContinuous`,void 0),f([V()],U.prototype,`roundJoins`,void 0),f([V()],U.prototype,`applyMarkerOffset`,void 0),f([V()],U.prototype,`hasVVSize`,void 0),f([V()],U.prototype,`hasVVColor`,void 0),f([V()],U.prototype,`hasVVOpacity`,void 0),f([V()],U.prototype,`falloffEnabled`,void 0),f([V()],U.prototype,`innerColorEnabled`,void 0),f([V()],U.prototype,`hasOccludees`,void 0),f([V()],U.prototype,`occluder`,void 0),f([V()],U.prototype,`terrainDepthTest`,void 0),f([V()],U.prototype,`cullAboveTerrain`,void 0),f([V()],U.prototype,`wireframe`,void 0),f([V()],U.prototype,`discardInvisibleFragments`,void 0),f([V()],U.prototype,`hasScreenSizePerspective`,void 0),f([V()],U.prototype,`worldSizedImagePattern`,void 0);var ri=class extends It{constructor(e,t){super(e,ai),this.produces=new Map([[2,e=>it(e)||et(e)&&this.parameters.renderOccluded===8],[3,e=>rt(e)],[11,e=>at(e)&&this.parameters.renderOccluded===8],[12,e=>at(e)&&this.parameters.renderOccluded===8],[4,e=>et(e)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[9,e=>et(e)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[20,e=>nt(e)]]),this._configuration=new U(t)}getConfiguration(e,t){super.getConfiguration(e,t,this._configuration);let n=t.slot===20,r=this.parameters.stipplePattern!=null&&this.parameters.stippleTexture!=null&&e!==8,i=r&&n&&this.parameters.isImagePattern();return this._configuration.draped=n,this._configuration.stippleEnabled=r,this._configuration.stippleOffColorEnabled=r&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=r&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join===`round`,this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&li(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasVVSize=this.parameters.hasVVSize,this._configuration.hasVVColor=this.parameters.hasVVColor,this._configuration.hasVVOpacity=this.parameters.hasVVOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=t.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===8,this._configuration.terrainDepthTest=t.terrainDepthTest&&et(e),this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration.animation=this.parameters.animation,this._configuration.emissionSource=+!!this.hasEmissions,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective&&!i,this._configuration.worldSizedImagePattern=i,this._configuration}get visible(){return this.parameters.color[3]>=.003913894324853229||this.parameters.stipplePattern!=null&&(this.parameters.stippleOffColor?.[3]??0)>.003913894324853229}setParameters(e,t){e.animation=this.parameters.animation,super.setParameters(e,t)}intersectDraped({attributes:e,screenToWorldRatio:t},n,i,a,o){if(!n.options.selectionMode)return;let s=e.get(`size`),c=this.parameters.width;if(this.parameters.vvSize){let t=e.get(`sizeFeatureAttribute`).data[0];Number.isNaN(t)?c*=this.parameters.vvSize.fallback[0]:c*=r(this.parameters.vvSize.offset[0]+t*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else s&&(c*=s.data[0]);let l=i[0],u=i[1],d=(c/2+4)*t,f=Number.MAX_VALUE,p=0,m=e.get(`position`).data,h=ci(this.parameters,e)?m.length-2:m.length-5;for(let e=0;e<h;e+=3){let t=m[e],n=m[e+1],i=(e+3)%m.length,a=l-t,o=u-n,s=m[i]-t,c=m[i+1]-n,d=r((s*a+c*o)/(s*s+c*c),0,1),h=s*d-a,g=c*d-o,_=h*h+g*g;_<f&&(f=_,p=e/3)}f<d*d&&a(o.distance,o.normal,p)}intersect(e,t,n,a,o,s){let{options:c,camera:l,rayBegin:u,rayEnd:d}=n;if(!c.selectionMode||!e.visible||!l)return;if(!Ke(t))return void i.getLogger(`esri.views.3d.webgl-engine.materials.RibbonLineMaterial`).error(`intersection assumes a translation-only matrix`);let f=e.attributes,p=f.get(`position`).data,m=this.parameters.width;if(this.parameters.vvSize){let e=f.get(`sizeFeatureAttribute`).data[0];Number.isNaN(e)||(m*=r(this.parameters.vvSize.offset[0]+e*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0]))}else f.has(`size`)&&(m*=f.get(`size`).data[0]);let h=fi;_(h,n.point);let g=m*l.pixelRatio/2+4*l.pixelRatio;N(yi[0],h[0]-g,h[1]+g,0),N(yi[1],h[0]+g,h[1]+g,0),N(yi[2],h[0]+g,h[1]-g,0),N(yi[3],h[0]-g,h[1]-g,0);for(let e=0;e<4;e++)if(!l.unprojectFromRenderScreen(yi[e],bi[e]))return;Me(l.eye,bi[0],bi[1],xi),Me(l.eye,bi[1],bi[2],Si),Me(l.eye,bi[2],bi[3],Ci),Me(l.eye,bi[3],bi[0],wi);let v=Number.MAX_VALUE,y=0,b=ci(this.parameters,f)?p.length-2:p.length-5;for(let e=0;e<b;e+=3){W[0]=p[e]+t[12],W[1]=p[e+1]+t[13],W[2]=p[e+2]+t[14];let n=(e+3)%p.length;if(G[0]=p[n]+t[12],G[1]=p[n+1]+t[13],G[2]=p[n+2]+t[14],Oe(xi,W)<0&&Oe(xi,G)<0||Oe(Si,W)<0&&Oe(Si,G)<0||Oe(Ci,W)<0&&Oe(Ci,G)<0||Oe(wi,W)<0&&Oe(wi,G)<0)continue;let r=l.projectToRenderScreen(W,pi),i=l.projectToRenderScreen(G,mi);if(r==null||i==null)continue;if(r[2]<0&&i[2]>0){F(ui,W,G);let e=l.frustum;if(A(ui,ui,-Oe(e[4],W)/ge(ui,Ae(e[4]))),I(W,W,ui),!l.projectToRenderScreen(W,r))continue}else if(r[2]>0&&i[2]<0){F(ui,G,W);let e=l.frustum;if(A(ui,ui,-Oe(e[4],G)/ge(ui,Ae(e[4]))),I(G,G,ui),!l.projectToRenderScreen(G,i))continue}else if(r[2]<0&&i[2]<0)continue;r[2]=0,i[2]=0;let a=Le(ze(r,i,_i),h);a<v&&(v=a,j(hi,W),j(gi,G),y=e/3)}if(v<g*g){let e=Number.MAX_VALUE;if(Ie(ze(hi,gi,_i),ze(u,d,vi),di)){F(di,di,u);let t=_e(di);A(di,di,1/t),e=t/de(u,d)}s(e,di,y)}}get hasEmissions(){return this.parameters.emissiveStrength>0}createBufferWriter(){return new oi(ni(this.parameters),this.parameters)}createGLMaterial(e){return new ii(e)}validateParameters(e){e.join!==`miter`&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}update(e){return!!this.parameters.hasAnimation&&(this.setParameters({timeElapsed:u(e.time)},!1),e.dt!==0)}},ii=class extends Rt{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures?.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){let{stipplePattern:t}=this._material.parameters;return this._stipplePattern!==t&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(t,this._stipplePattern)}),this._stipplePattern=t),this.getTechnique(ei,e)}},ai=class extends on{constructor(){super(...arguments),this._width=0,this.color=Te,this.join=`miter`,this.cap=0,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1,this.timeElapsed=d(0),this.animation=0,this.animationSpeed=1,this.trailLength=1,this.startTime=d(0),this.endTime=d(1/0),this.emissiveStrength=0}get width(){return this.isImagePattern()?this.stipplePattern.width:this._width}set width(e){this._width=e}get transparent(){return this.color[3]<1||this.hasAnimation||this.stipplePattern!=null&&(this.stippleOffColor?.[3]??0)<1}get hasAnimation(){return this.animation!==0}isImagePattern(){return lr(this.stipplePattern)&&this.stippleTexture!=null}},oi=class{constructor(e,t){this.layout=e,this._parameters=t;let n=+!!t.stipplePattern;switch(this._parameters.join){case`miter`:case`bevel`:this.numJoinSubdivisions=n;break;case`round`:this.numJoinSubdivisions=1+n}}_isClosed(e){return ci(this._parameters,e)}allocate(e){return this.layout.createBuffer(e)}elementCount(e){let t=e.get(`position`).indices.length/2+1,n=this._isClosed(e),r=n?2:4;return r+=((n?t:t-1)-+!n)*(2*this.numJoinSubdivisions+4),r+=2,this._parameters.wireframe&&(r=2+4*(r-2)),r}write(e,t,n,r,i,a){let o=this.layout,s=n.get(`position`),c=s.indices,l=s.data.length/3,u=n.get(`distanceToStart`)?.data;c&&c.length!==2*(l-1)&&console.warn(`RibbonLineMaterial does not support indices`);let d=o.fields.has(`sizeFeatureAttribute`),f=1,p=null;if(d){let e=n.get(`sizeFeatureAttribute`);e.data.length===1?f=e.data[0]:p=e.data}else f=n.get(`size`)?.data[0]??1;let m=[1,1,1,1],h=0,g=null,_=o.fields.has(`colorFeatureAttribute`);if(_){let e=n.get(`colorFeatureAttribute`);e.data.length===1?h=e.data[0]:g=e.data}else m=n.get(`color`)?.data??m;let v=n.get(`timeStamps`)?.data,y=v&&o.fields.has(`timeStamps`),b=o.fields.has(`opacityFeatureAttribute`),x=0,S=null;if(b){let e=n.get(`opacityFeatureAttribute`);e.data.length===1?x=e.data[0]:S=e.data}let C=new Float32Array(i.buffer),w=qe(i.buffer),T=new Uint8Array(i.buffer),E=o.stride/4,D=a*E,ee=D,O=0,te=u?(e,t,n)=>O=u[n]:(e,t,n)=>O+=de(e,t),ne=C.BYTES_PER_ELEMENT/w.BYTES_PER_ELEMENT,re=4/ne,ie=ht(),k=(e,t,n,i,a,o,s,c)=>{C[D++]=t[0],C[D++]=t[1],C[D++]=t[2],Xt(e,t,w,D*ne),D+=re,Xt(n,t,w,D*ne),D+=re,C[D++]=c;let l=D*ne;if(w[l++]=a,w[l++]=o,D=Math.ceil(l/ne),_)C[D]=g?.[s]??h;else{let e=Math.min(4*s,m.length-4),t=4*D;T[t]=255*m[e],T[t+1]=255*m[e+1],T[t+2]=255*m[e+2],T[t+3]=255*m[e+3]}if(D++,C[D++]=p?.[s]??f,b&&(C[D++]=S?.[s]??x),ie){let e=4*D;r?(T[e++]=r[0],T[e++]=r[1],T[e++]=r[2],T[e++]=r[3]):(T[e++]=0,T[e++]=0,T[e++]=0,T[e++]=0),D=Math.ceil(.25*e)}y&&(l=D*ne,w[l++]=i[0],w[l++]=i[1],w[l++]=i[2],w[l++]=i[3],D=Math.ceil(l/ne))};D+=E,N(q,s.data[0],s.data[1],s.data[2]),y&&be(Y,v[0],v[1],v[2],v[3]),e&&P(q,q,e);let ae=this._isClosed(n);if(ae){let t=s.data.length-3;N(K,s.data[t],s.data[t+1],s.data[t+2]),e&&P(K,K,e)}else N(J,s.data[3],s.data[4],s.data[5]),e&&P(J,J,e),k(q,q,J,Y,1,-4,0,0),k(q,q,J,Y,1,4,0,0),j(K,q),j(q,J),y&&be(Y,v[4],v[5],v[6],v[7]);let oe=+!ae,se=ae?l:l-1;for(let t=oe;t<se;t++){let n=(t+1)%l*3;N(J,s.data[n],s.data[n+1],s.data[n+2]),e&&P(J,J,e),te(K,q,t),k(K,q,J,Y,0,-1,t,O),k(K,q,J,Y,0,1,t,O);let r=this.numJoinSubdivisions;for(let e=0;e<r;++e){let n=(e+1)/(r+1);k(K,q,J,Y,n,-1,t,O),k(K,q,J,Y,n,1,t,O)}if(k(K,q,J,Y,1,-2,t,O),k(K,q,J,Y,1,2,t,O),j(K,q),j(q,J),y){let e=(t+1)%l*4;be(Y,v[e],v[e+1],v[e+2],v[e+3])}}return ae?(N(J,s.data[3],s.data[4],s.data[5]),e&&P(J,J,e),O=te(K,q,se),k(K,q,J,Y,0,-1,oe,O),k(K,q,J,Y,0,1,oe,O)):(O=te(K,q,se),k(K,q,q,Y,0,-5,se,O),k(K,q,q,Y,0,5,se,O)),si(C,ee+E,C,ee,E),D=si(C,D-E,C,D,E),this._parameters.wireframe&&this._addWireframeVertices(i,ee,D,E),null}_addWireframeVertices(e,t,n,r){let i=new Float32Array(e.buffer,n*Float32Array.BYTES_PER_ELEMENT),a=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,n-t),o=0,s=e=>o=si(a,e,i,o,r);for(let e=0;e<a.length-1;e+=2*r)s(e),s(e+2*r),s(e+1*r),s(e+2*r),s(e+1*r),s(e+3*r)}};function si(e,t,n,r,i){for(let a=0;a<i;a++)n[r++]=e[t++];return r}function ci(e,t){return e.isClosed?t.get(`position`).indices.length>2:!1}function li(e){return e.anchor===1&&e.hideOnShortSegments&&e.placement===`begin-end`&&e.worldSpace}var W=E(),G=E(),ui=E(),di=E(),fi=E(),pi=C(),mi=C(),hi=E(),gi=E(),_i=Re(),vi=Re(),K=E(),q=E(),J=E(),Y=Ce(),yi=[C(),C(),C(),C()],bi=[E(),E(),E(),E()],xi=je(),Si=je(),Ci=je(),wi=je(),Ti=class{constructor(e){this._originSR=e,this._rootOriginId=`root/`+a(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5,this._baselineDistance=.5*this._gridSize;let t=this._baselineDistance*Ei;this._baselineObjectSize=t/Di}getOrigin(e){let t=this._origins.get(this._rootOriginId);if(t==null){let t=ar.rootOrigin;if(t!=null)return this._origins.set(this._rootOriginId,rr(t[0],t[1],t[2],this._rootOriginId)),this.getOrigin(e);let n=rr(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,n),n}let n=this._gridSize,r=Math.round(e[0]/n),i=Math.round(e[1]/n),a=Math.round(e[2]/n),o=`${r}/${i}/${a}`,s=this._origins.get(o),c=.5*n;if(F(X,e,t.vec3),X[0]=Math.abs(X[0]),X[1]=Math.abs(X[1]),X[2]=Math.abs(X[2]),X[0]<c&&X[1]<c&&X[2]<c){if(s){let t=Math.max(...X);if(F(X,e,s.vec3),X[0]=Math.abs(X[0]),X[1]=Math.abs(X[1]),X[2]=Math.abs(X[2]),Math.max(...X)<t)return s}return t}return s||(s=rr(r*n,i*n,a*n,o),this._origins.set(o,s)),s}needsOriginUpdate(e,t,n){let r=de(e.vec3,t),i=Math.max(1,n/this._baselineObjectSize);return r>this._baselineDistance*i}_drawOriginBox(e,t=xe(1,1,0,1)){let n=window.view,r=n.stage,i=t.toString();if(!this._objects.has(i)){this._material=new ri({width:2,color:t},!1);let e=new tr(r,{pickable:!1}),n=new Kn({castShadow:!1});e.add(n),this._objects.set(i,n)}let a=this._objects.get(i),o=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],s=o.length,c=Array(3*s),l=[],u=.5*this._gridSize;for(let t=0;t<s;t++)c[3*t]=e[0]+(1&o[t]?u:-u),c[3*t+1]=e[1]+(2&o[t]?u:-u),c[3*t+2]=e[2]+(4&o[t]?u:-u),t>0&&l.push(t-1,t);ne(c,this._originSR,0,c,n.renderSpatialReference,0,s);let d=new bt(this._material,[[`position`,new L(c,l,3,!0)]],null,2);a.addGeometry(d)}get test(){}},X=E(),Ei=2**-23,Di=.05;function Oi(e,t=!1){return e<=1024?t?Array(e).fill(0):Array(e):qe(e)}function ki(e,t,n=null){let r=[],i=t.mapPositions,a=Ai(t,r),o=a.data,s=a.indices.length,c=He(s);return ji(t,r,c),Pi(t,r,c),Mi(t,r,c),Ni(t,r,a.indices,c),Fi(t,r,a.indices,c),Ii(t,r),Li(t,r,a.indices,c),Ri(t,r,o),new bt(e,r,i,2,n)}function Ai(e,t){let{attributeData:{position:n},removeDuplicateStartEnd:r}=e,i=zi(n)&&r,a=n.length/3-!!i,o=Array(2*(a-1)),s=i?n.slice(0,-3):n,c=0;for(let e=0;e<a-1;e++)o[c++]=e,o[c++]=e+1;let l=new L(s,o,3,i);return t.push([`position`,l]),l}function ji(e,t,n){if(e.attributeData.colorFeature!=null)return;let r=e.attributeData.color;t.push([`color`,new L(r??Te,n,4)])}function Mi(e,t,n){e.attributeData.normal&&t.push([`normal`,new L(e.attributeData.normal,n,3)])}function Ni(e,t,n,r){let i=e.attributeData.colorFeature;i!=null&&(typeof i==`number`?t.push([`colorFeatureAttribute`,new L([i],r,1,!0)]):t.push([`colorFeatureAttribute`,new L(i,n,1,!0)]))}function Pi(e,t,n){e.attributeData.sizeFeature??t.push([`size`,new L([e.attributeData.size??1],n,1,!0)])}function Fi(e,t,n,r){let i=e.attributeData.sizeFeature;i!=null&&(typeof i==`number`?t.push([`sizeFeatureAttribute`,new L([i],r,1,!0)]):t.push([`sizeFeatureAttribute`,new L(i,n,1,!0)]))}function Ii(e,t){let{attributeData:{position:n,timeStamps:r}}=e;if(!r)return;let i=n.length/3,a=Array(2*(i-1)),o=0;for(let e=0;e<i-1;e++)a[o++]=e,a[o++]=e+1;t.push([`timeStamps`,new L(r,a,4,!0)])}function Li(e,t,n,r){let i=e.attributeData.opacityFeature;i!=null&&(typeof i==`number`?t.push([`opacityFeatureAttribute`,new L([i],r,1,!0)]):t.push([`opacityFeatureAttribute`,new L(i,n,1,!0)]))}function Ri(e,t,n){if(e.overlayInfo==null||e.overlayInfo.renderCoordsHelper.viewingMode!==1||!e.overlayInfo.spatialReference.isGeographic)return;let r=O(n.length),i=h(e.overlayInfo.spatialReference);for(let e=0;e<r.length;e+=3)te(n,e,r,e,i);let a=n.length/3,o=Nn(a+1),s=Bi,c=Vi,l=0,u=0;b(s,r[u++],r[u++]),u++,o[0]=0;for(let e=1;e<a+1;++e)e===a&&(u=0),b(c,r[u++],r[u++]),u++,l+=y(s,c),o[e]=l,[s,c]=[c,s];t.push([`distanceToStart`,new L(o,t[0][1].indices,1,!0)])}function zi(e){let t=e.length;return e[0]===e[t-3]&&e[1]===e[t-2]&&e[2]===e[t-1]}var Bi=ve(),Vi=ve();function Hi(e,t){let n=Oi(e.length*4),r=e[0],i=e[e.length-1];for(let a=0;a<e.length;a++)n[a*4]=e[a],n[a*4+1]=r,n[a*4+2]=i,n[a*4+3]=t+.5;return n}function Ui(e,t){let n=e[t],r=e[t+1],i=e[t+2];return Math.sqrt(n*n+r*r+i*i)}function Wi(e,t){let n=e[t],r=e[t+1],i=e[t+2],a=1/Math.sqrt(n*n+r*r+i*i);e[t]*=a,e[t+1]*=a,e[t+2]*=a}function Gi(e,t,n){e[t]*=n,e[t+1]*=n,e[t+2]*=n}function Ki(e,t,n,r,i,a=t){(i||=e)[a]=e[t]+n[r],i[a+1]=e[t+1]+n[r+1],i[a+2]=e[t+2]+n[r+2]}function qi(){return Yi??=Ji(),Yi}function Ji(){return new vt([[`uv0`,new L([0,0,0,255,255,0,255,255],[0,1,2,3],2,!0)]])}var Yi=null,Xi=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],Zi=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],Qi=[0,0,1,0,1,1,0,1],$i=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],ea=Array(36);for(let e=0;e<6;e++)for(let t=0;t<6;t++)ea[6*e+t]=e;var ta=Array(36);for(let e=0;e<6;e++)ta[6*e]=0,ta[6*e+1]=1,ta[6*e+2]=2,ta[6*e+3]=2,ta[6*e+4]=3,ta[6*e+5]=0;function na(e,t){Array.isArray(t)||(t=[t,t,t]);let n=Array(24);for(let e=0;e<8;e++)n[3*e]=Xi[e][0]*t[0],n[3*e+1]=Xi[e][1]*t[1],n[3*e+2]=Xi[e][2]*t[2];return new bt(e,[[`position`,new L(n,$i,3,!0)],[`normal`,new L(Zi,ea,3)],[`uv0`,new L(Qi,ta,2)]])}var ra=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],ia=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],aa=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],oa=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function sa(e,t){Array.isArray(t)||(t=[t,t,t]);let n=Array(18);for(let e=0;e<6;e++)n[3*e]=ra[e][0]*t[0],n[3*e+1]=ra[e][1]*t[1],n[3*e+2]=ra[e][2]*t[2];return new bt(e,[[`position`,new L(n,aa,3,!0)],[`normal`,new L(ia,oa,3)]])}var ca=B(-.5,0,-.5),la=B(.5,0,-.5),ua=B(0,0,.5),da=B(0,.5,0),fa=lt(),pa=lt(),ma=lt(),ha=lt(),ga=lt();F(fa,ca,da),F(pa,ca,la),fe(ma,fa,pa),M(ma,ma),F(fa,la,da),F(pa,la,ua),fe(ha,fa,pa),M(ha,ha),F(fa,ua,da),F(pa,ua,ca),fe(ga,fa,pa),M(ga,ga);var _a=[ca,la,ua,da],va=[0,-1,0,ma[0],ma[1],ma[2],ha[0],ha[1],ha[2],ga[0],ga[1],ga[2]],ya=[0,1,2,3,1,0,3,2,1,3,0,2],ba=[0,0,0,1,1,1,2,2,2,3,3,3];function xa(e,t){Array.isArray(t)||(t=[t,t,t]);let n=Array(12);for(let e=0;e<4;e++)n[3*e]=_a[e][0]*t[0],n[3*e+1]=_a[e][1]*t[1],n[3*e+2]=_a[e][2]*t[2];return new bt(e,[[`position`,new L(n,ya,3,!0)],[`normal`,new L(va,ba,3)]])}function Sa(e,t,n,r,i={uv:!0}){let a=-Math.PI,o=2*Math.PI,s=-Math.PI/2,c=Math.PI,l=Math.max(3,Math.floor(n)),u=Math.max(2,Math.floor(r)),d=(l+1)*(u+1),f=Nn(3*d),p=Nn(3*d),m=Nn(2*d),h=[],g=0;for(let e=0;e<=u;e++){let n=[],r=e/u,i=s+r*c,d=Math.cos(i);for(let e=0;e<=l;e++){let s=e/l,c=a+s*o,u=Math.cos(c)*d,h=Math.sin(i),_=-Math.sin(c)*d;f[3*g]=u*t,f[3*g+1]=h*t,f[3*g+2]=_*t,p[3*g]=u,p[3*g+1]=h,p[3*g+2]=_,m[2*g]=s,m[2*g+1]=r,n.push(g),++g}h.push(n)}let _=[];for(let e=0;e<u;e++)for(let t=0;t<l;t++){let n=h[e][t],r=h[e][t+1],i=h[e+1][t+1],a=h[e+1][t];e===0?(_.push(n),_.push(i),_.push(a)):e===u-1?(_.push(n),_.push(r),_.push(i)):(_.push(n),_.push(r),_.push(i),_.push(i),_.push(a),_.push(n))}let v=[[`position`,new L(f,_,3,!0)],[`normal`,new L(p,_,3,!0)]];return i.uv&&v.push([`uv0`,new L(m,_,2,!0)]),i.offset&&(v[0][0]=`offset`,v.push([`position`,new L(Float64Array.from(i.offset),He(_.length),3,!0)])),new bt(e,v)}function Ca(e,t,n,r){return new bt(e,wa(t,n,r))}function wa(e,t,n){let r=e,i,a;if(n)i=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],a=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];else{let e=r*(1+Math.sqrt(5))/2;i=[-r,e,0,r,e,0,-r,-e,0,r,-e,0,0,-r,e,0,r,e,0,-r,-e,0,r,-e,e,0,-r,e,0,r,-e,0,-r,-e,0,r],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]}for(let t=0;t<i.length;t+=3)Gi(i,t,e/Ui(i,t));let o={};function s(t,n){t>n&&([t,n]=[n,t]);let r=t.toString()+`.`+n.toString();if(o[r])return o[r];let a=i.length;return i.length+=3,Ki(i,3*t,i,3*n,i,a),Gi(i,a,e/Ui(i,a)),a/=3,o[r]=a,a}for(let e=0;e<t;e++){let e=a.length,t=Array(4*e);for(let n=0;n<e;n+=3){let e=a[n],r=a[n+1],i=a[n+2],o=s(e,r),c=s(r,i),l=s(i,e),u=4*n;t[u]=e,t[u+1]=o,t[u+2]=l,t[u+3]=r,t[u+4]=c,t[u+5]=o,t[u+6]=i,t[u+7]=l,t[u+8]=c,t[u+9]=o,t[u+10]=c,t[u+11]=l}a=t,o={}}let c=Mn(i);for(let e=0;e<c.length;e+=3)Wi(c,e);return[[`position`,new L(Mn(i),a,3,!0)],[`normal`,new L(c,a,3,!0)]]}function Ta(e,{normal:t,position:n,color:r,rotation:i,size:a,centerOffsetAndDistance:o,uvi:s,featureAttribute:c,olidColor:l=null}={}){let u=n?w(n):E(),d=t?w(t):T(0,0,1),f=r?[r[0],r[1],r[2],r.length>3?r[3]:255]:[255,255,255,255],p=a!=null&&a.length===2?a:[1,1],m=i==null?[0]:[i],h=He(1),g=[[`position`,new L(u,h,3,!0)],[`normal`,new L(d,h,3,!0)],[`color`,new L(f,h,4,!0)],[`size`,new L(p,h,2)],[`rotation`,new L(m,h,1,!0)]];if(s&&g.push([`uvi`,new L(s,h,s.length)]),o!=null){let e=[o[0],o[1],o[2],o[3]];g.push([`centerOffsetAndDistance`,new L(e,h,4)])}if(c){let e=[c[0],c[1],c[2],c[3]];g.push([`featureAttribute`,new L(e,h,4)])}return new bt(e,g,null,1,l,void 0,qi())}function Ea(e,t,n,r,i=!0,a=!0){let o=0,s=t,c=e,l=B(0,o,0),u=B(0,o+c,0),d=B(0,-1,0),f=B(0,1,0);r&&(o=c,u=B(0,0,0),l=B(0,o,0),d=B(0,1,0),f=B(0,-1,0));let p=[u,l],m=[d,f],h=n+2,g=Math.sqrt(c*c+s*s);if(r)for(let e=n-1;e>=0;e--){let t=e*(2*Math.PI/n),r=B(Math.cos(t)*s,o,Math.sin(t)*s);p.push(r);let i=B(c*Math.cos(t)/g,-s/g,c*Math.sin(t)/g);m.push(i)}else for(let e=0;e<n;e++){let t=e*(2*Math.PI/n),r=B(Math.cos(t)*s,o,Math.sin(t)*s);p.push(r);let i=B(c*Math.cos(t)/g,s/g,c*Math.sin(t)/g);m.push(i)}let _=[],v=[];if(i){for(let e=3;e<p.length;e++)_.push(1),_.push(e-1),_.push(e),v.push(0),v.push(0),v.push(0);_.push(p.length-1),_.push(2),_.push(1),v.push(0),v.push(0),v.push(0)}if(a){for(let e=3;e<p.length;e++)_.push(e),_.push(e-1),_.push(0),v.push(e),v.push(e-1),v.push(1);_.push(0),_.push(2),_.push(p.length-1),v.push(1),v.push(2),v.push(m.length-1)}let y=Nn(3*h);for(let e=0;e<h;e++)y[3*e]=p[e][0],y[3*e+1]=p[e][1],y[3*e+2]=p[e][2];let b=Nn(3*h);for(let e=0;e<h;e++)b[3*e]=m[e][0],b[3*e+1]=m[e][1],b[3*e+2]=m[e][2];return[[`position`,new L(y,_,3,!0)],[`normal`,new L(b,v,3,!0)]]}function Da(e,t,n,r,i,a=!0,o=!0){return new bt(e,Ea(t,n,r,i,a,o))}function Oa(e,t,n,r,i,a,o){let s=i?ct(i):B(1,0,0),c=a?ct(a):B(0,0,0);o??=!0;let l=lt();M(l,s);let u=lt();A(u,l,Math.abs(t));let d=lt();A(d,u,-.5),I(d,d,c);let f=B(0,1,0);Math.abs(1-ge(l,f))<.2&&N(f,0,0,1);let p=lt();fe(p,l,f),M(p,p),fe(f,p,l);let m=2*r+(o?2:0),h=r+(o?2:0),g=Nn(3*m),_=Nn(3*h),v=Nn(2*m),y=Array(3*r*(o?4:2)),b=Array(3*r*(o?4:2));o&&(g[3*(m-2)]=d[0],g[3*(m-2)+1]=d[1],g[3*(m-2)+2]=d[2],v[2*(m-2)]=0,v[2*(m-2)+1]=0,g[3*(m-1)]=g[3*(m-2)]+u[0],g[3*(m-1)+1]=g[3*(m-2)+1]+u[1],g[3*(m-1)+2]=g[3*(m-2)+2]+u[2],v[2*(m-1)]=1,v[2*(m-1)+1]=1,_[3*(h-2)]=-l[0],_[3*(h-2)+1]=-l[1],_[3*(h-2)+2]=-l[2],_[3*(h-1)]=l[0],_[3*(h-1)+1]=l[1],_[3*(h-1)+2]=l[2]);let x=(e,t,n)=>{y[e]=t,b[e]=n},S=0,C=lt(),w=lt();for(let e=0;e<r;e++){let t=e*(2*Math.PI/r);A(C,f,Math.sin(t)),A(w,p,Math.cos(t)),I(C,C,w),_[3*e]=C[0],_[3*e+1]=C[1],_[3*e+2]=C[2],A(C,C,n),I(C,C,d),g[3*e]=C[0],g[3*e+1]=C[1],g[3*e+2]=C[2],v[2*e]=e/r,v[2*e+1]=0,g[3*(e+r)]=g[3*e]+u[0],g[3*(e+r)+1]=g[3*e+1]+u[1],g[3*(e+r)+2]=g[3*e+2]+u[2],v[2*(e+r)]=e/r,v[2*e+1]=1;let i=(e+1)%r;x(S++,e,e),x(S++,e+r,e),x(S++,i,i),x(S++,i,i),x(S++,e+r,e),x(S++,i+r,i)}if(o){for(let e=0;e<r;e++){let t=(e+1)%r;x(S++,m-2,h-2),x(S++,e,h-2),x(S++,t,h-2)}for(let e=0;e<r;e++){let t=(e+1)%r;x(S++,e+r,h-1),x(S++,m-1,h-1),x(S++,t+r,h-1)}}return new bt(e,[[`position`,new L(g,y,3,!0)],[`normal`,new L(_,b,3,!0)],[`uv0`,new L(v,y,2,!0)]])}function ka(e,t,n,r,i,a){r||=10,i=i==null||i,We(t.length>1);let o=[[0,0,0]],s=[],c=[];for(let e=0;e<r;e++){s.push([0,-e-1,-(e+1)%r-1]);let t=e/r*2*Math.PI;c.push([Math.cos(t)*n,Math.sin(t)*n])}return Aa(e,c,t,o,s,i,a)}function Aa(e,t,n,r,i,a,o=B(0,0,0)){let s=t.length,c=Nn(n.length*s*3+(6*r.length||0)),l=Nn(n.length*s*3+(r?6:0)),u=[],d=[],f=0,p=0,m=E(),h=E(),g=E(),_=E(),v=E(),y=E(),b=E(),x=E(),S=E(),C=E(),w=E(),T=E(),D=E(),ee=je();N(S,0,1,0),F(h,n[1],n[0]),M(h,h),a?(I(x,n[0],o),M(g,x)):N(g,0,0,1),Ia(h,g,S,S,v,g,La),j(_,g),j(T,v);for(let e=0;e<r.length;e++)A(y,v,r[e][0]),A(x,g,r[e][2]),I(y,y,x),I(y,y,n[0]),c[f++]=y[0],c[f++]=y[1],c[f++]=y[2];l[p++]=-h[0],l[p++]=-h[1],l[p++]=-h[2];for(let e=0;e<i.length;e++)u.push(i[e][0]>0?i[e][0]:-i[e][0]-1+r.length),u.push(i[e][1]>0?i[e][1]:-i[e][1]-1+r.length),u.push(i[e][2]>0?i[e][2]:-i[e][2]-1+r.length),d.push(0),d.push(0),d.push(0);let O=r.length,te=r.length-1;for(let e=0;e<n.length;e++){let r=!1;e>0&&(j(m,h),e<n.length-1?(F(h,n[e+1],n[e]),M(h,h)):r=!0,I(C,m,h),M(C,C),I(w,n[e-1],_),ke(n[e],C,ee),De(ee,Fe(w,m),x)?(F(x,x,n[e]),M(g,x),fe(v,C,g),M(v,v)):Ia(C,_,T,S,v,g,La),j(_,g),j(T,v)),a&&(I(x,n[e],o),M(D,x));for(let i=0;i<s;i++)if(A(y,v,t[i][0]),A(x,g,t[i][1]),I(y,y,x),M(b,y),l[p++]=b[0],l[p++]=b[1],l[p++]=b[2],I(y,y,n[e]),c[f++]=y[0],c[f++]=y[1],c[f++]=y[2],!r){let e=(i+1)%s;u.push(O+i),u.push(O+s+i),u.push(O+e),u.push(O+e),u.push(O+s+i),u.push(O+s+e);for(let e=0;e<6;e++){let t=u.length-6;d.push(u[t+e]-te)}}O+=s}let ne=n[n.length-1];for(let e=0;e<r.length;e++)A(y,v,r[e][0]),A(x,g,r[e][1]),I(y,y,x),I(y,y,ne),c[f++]=y[0],c[f++]=y[1],c[f++]=y[2];let re=p/3;l[p++]=h[0],l[p++]=h[1],l[p++]=h[2];let ie=O-s;for(let e=0;e<i.length;e++)u.push(i[e][0]>=0?O+i[e][0]:-i[e][0]-1+ie),u.push(i[e][2]>=0?O+i[e][2]:-i[e][2]-1+ie),u.push(i[e][1]>=0?O+i[e][1]:-i[e][1]-1+ie),d.push(re),d.push(re),d.push(re);return new bt(e,[[`position`,new L(c,u,3,!0)],[`normal`,new L(l,d,3,!0)]])}function ja(e,t,n,r,i){let a=O(3*t.length),o=Array(2*(t.length-1)),s=0,c=0;for(let e=0;e<t.length;e++){for(let n=0;n<3;n++)a[s++]=t[e][n];e>0&&(o[c++]=e-1,o[c++]=e)}let l=[[`position`,new L(a,o,3,!0)]];if(n?.length===t.length&&n[0].length===3){let e=Nn(3*n.length),r=0;for(let i=0;i<t.length;i++)for(let t=0;t<3;t++)e[r++]=n[i][t];l.push([`normal`,new L(e,o,3,!0)])}if(r&&l.push([`color`,new L(r,Ve(r.length/4),4)]),i?.length===t.length){let e=Hi(i,1);l.push([`timeStamps`,new L(e,o,4,!0)])}return new bt(e,l,null,2)}function Ma(e,t,n,r,i,a=0){let o=Array(18),s=[[-n,a,i/2],[r,a,i/2],[0,t+a,i/2],[-n,a,-i/2],[r,a,-i/2],[0,t+a,-i/2]],c=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let e=0;e<6;e++)o[3*e]=s[e][0],o[3*e+1]=s[e][1],o[3*e+2]=s[e][2];return new bt(e,[[`position`,new L(o,c,3,!0)]])}function Na(e,t){let n=e.getMutableAttribute(`position`).data;for(let e=0;e<n.length;e+=3){let r=n[e],i=n[e+1],a=n[e+2];N(Ra,r,i,a),P(Ra,Ra,t),n[e]=Ra[0],n[e+1]=Ra[1],n[e+2]=Ra[2]}}function Pa(e,t=e){let n=e.attributes,r=n.get(`position`).data,i=n.get(`normal`).data;if(i){let e=t.getMutableAttribute(`normal`).data;for(let t=0;t<i.length;t+=3){let n=i[t+1];e[t+1]=-i[t+2],e[t+2]=n}}if(r){let e=t.getMutableAttribute(`position`).data;for(let t=0;t<r.length;t+=3){let n=r[t+1];e[t+1]=-r[t+2],e[t+2]=n}}}function Fa(e,t,n,r,i){return!(Math.abs(ge(t,e))>i)&&(fe(n,e,t),M(n,n),fe(r,n,e),M(r,r),!0)}function Ia(e,t,n,r,i,a,o){return Fa(e,t,i,a,o)||Fa(e,n,i,a,o)||Fa(e,r,i,a,o)}var La=.99619469809,Ra=E();function za(e){return e.type===`point`}var Ba=class{constructor(e,t=null,n=0){this.array=e,this.spatialReference=t,this.offset=n}};function Va(e){return`array`in e}function Ha(e,t,n=`ground`){if(za(t))return e.getElevation(t.x,t.y,t.z||0,t.spatialReference,n);if(Va(t)){let r=t.offset;return e.getElevation(t.array[r++],t.array[r++],t.array[r]||0,t.spatialReference??e.spatialReference,n)}return e.getElevation(t[0],t[1],t[2]||0,e.spatialReference,n)}function Ua(e,t,n,r,i,a,o,s,c,l,u){let d=ro[u.mode],f,p,m=0;if(ne(e,t,n,r,c.spatialReference,i,s))return d?.requiresAlignment(u)?(m=d.applyElevationAlignmentBuffer(r,i,a,o,s,c,l,u),f=a,p=o):(f=r,p=i),ne(f,c.spatialReference,p,a,l.spatialReference,o,s)?m:void 0}function Wa(e,t,n,r,i){let a=(za(e)?e.z:Va(e)?e.array[e.offset+2]:e[2])||0;switch(n.mode){case`on-the-ground`:{let n=Ha(t,e,`ground`)??0;i.verticalDistanceToGround=0,i.sampledElevation=n,i.z=n;return}case`relative-to-ground`:{let o=Ha(t,e,`ground`)??0,s=n.geometryZWithOffset(a,r);i.verticalDistanceToGround=s,i.sampledElevation=o,i.z=s+o;return}case`relative-to-scene`:{let o=Ha(t,e,`scene`)??0,s=n.geometryZWithOffset(a,r);i.verticalDistanceToGround=s,i.sampledElevation=o,i.z=s+o;return}case`absolute-height`:{let o=n.geometryZWithOffset(a,r),s=Ha(t,e,`ground`)??0;i.verticalDistanceToGround=o-s,i.sampledElevation=s,i.z=o;return}default:i.z=0;return}}function Ga(e,t,n,r){return Wa(e,t,n,r,ao),ao.z}function Ka(e,t,n){return t===`on-the-ground`&&n===`on-the-ground`?e.staysOnTheGround:t===n||t!==`on-the-ground`&&n!==`on-the-ground`?t==null||n==null?e.definedChanged:1:e.onTheGroundChanged}function qa(e){return e===`relative-to-ground`||e===`relative-to-scene`}function Ja(e){return e!==`absolute-height`}function Ya(e,t,n,r,i){Wa(t,n,i,r,ao),Xa(e,ao.verticalDistanceToGround);let a=ao.sampledElevation,o=re(io,e.transformation);return oo[0]=t.x,oo[1]=t.y,oo[2]=ao.z,Ue(t.spatialReference,oo,o,r.spatialReference)?e.transformation=o:console.warn(`Could not locate symbol object properly, it might be misplaced`),a}function Xa(e,t){for(let n=0;n<e.geometries.length;++n){let r=e.geometries[n].getMutableAttribute(`centerOffsetAndDistance`);r&&r.data[3]!==t&&(r.data[3]=t,e.geometryVertexAttributeUpdated(e.geometries[n],`centerOffsetAndDistance`))}}function Za(e,t,n,r,i,a){let o=0,s=a.spatialReference;t*=3,r*=3;for(let c=0;c<i;++c){let i=e[t],c=e[t+1],l=e[t+2],u=a.getElevation(i,c,l,s,`ground`)??0;o+=u,n[r]=i,n[r+1]=c,n[r+2]=u,t+=3,r+=3}return o/i}function Qa(e,t,n,r,i,a,o,s){let c=0,l=s.calculateOffsetRenderUnits(o),u=s.featureExpressionInfoContext,d=a.spatialReference;t*=3,r*=3;for(let o=0;o<i;++o){let i=e[t],o=e[t+1],s=e[t+2],f=a.getElevation(i,o,s,d,`ground`)??0;c+=f,n[r]=i,n[r+1]=o,n[r+2]=u==null?s+f+l:f+l,t+=3,r+=3}return c/i}function $a(e,t,n,r,i,a,o,s){let c=0,l=s.calculateOffsetRenderUnits(o),u=s.featureExpressionInfoContext,d=a.spatialReference;t*=3,r*=3;for(let o=0;o<i;++o){let i=e[t],o=e[t+1],s=e[t+2],f=a.getElevation(i,o,s,d,`scene`)??0;c+=f,n[r]=i,n[r+1]=o,n[r+2]=u==null?s+f+l:f+l,t+=3,r+=3}return c/i}function eo(e){let t=e.meterUnitOffset,n=e.featureExpressionInfoContext;return t!==0||n!=null}function to(e,t,n,r,i,a,o,s){let c=s.calculateOffsetRenderUnits(o),l=s.featureExpressionInfoContext;t*=3,r*=3;for(let a=0;a<i;++a){let i=e[t],a=e[t+1],o=e[t+2];n[r]=i,n[r+1]=a,n[r+2]=l==null?o+c:c,t+=3,r+=3}return 0}var no=class{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}},ro={"absolute-height":{applyElevationAlignmentBuffer:to,requiresAlignment:eo},"on-the-ground":{applyElevationAlignmentBuffer:Za,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:Qa,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:$a,requiresAlignment:()=>!0}},io=ee(),ao=new no,oo=E(),so=()=>i.getLogger(`esri.views.3d.layers.graphics.featureExpressionInfoUtils`);function co(e){return{cachedResult:e.cachedResult,arcade:e.arcade?{func:e.arcade.func,context:e.arcade.modules.arcadeUtils.createExecContext(null,{sr:e.arcade.context.spatialReference}),modules:e.arcade.modules}:null}}async function lo(e,t,n,r){let i=e?.expression;if(typeof i!=`string`)return null;let a=_o(i);if(a!=null)return{cachedResult:a};let o=await m();c(n);let s=o.arcadeUtils,l=s.createSyntaxTree(i);return s.dependsOnView(l)?(r?.error(`Expressions containing '$view' are not supported on ElevationInfo`),{cachedResult:0}):{arcade:{func:s.createFunction(l),context:s.createExecContext(null,{sr:t}),modules:o}}}function uo(e,t,n){return e.arcadeUtils.createFeature(t.attributes,t.geometry,n)}function fo(e,t){if(e!=null&&!go(e)){if(!t||!e.arcade)return void so().errorOncePerTick(`Arcade support required but not provided`);let n=t;n._geometry&&=ot(n._geometry),e.arcade.modules.arcadeUtils.updateExecContext(e.arcade.context,t)}}function po(e){if(e!=null){if(go(e))return e.cachedResult;let t=e.arcade,n=t?.modules.arcadeUtils.executeFunction(t.func,t.context);return typeof n!=`number`&&(e.cachedResult=0,n=0),n}return 0}function mo(e,t=!1){let n=e?.featureExpressionInfo,r=n?.expression;return t||r===`0`||(n=null),n??null}var ho={cachedResult:0};function go(e){return e.cachedResult!=null}function _o(e){return e===`0`?0:null}var vo=class e{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit=`meters`,this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.mode=null,this.centerInElevationSR=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=se(e)}get requiresSampledElevationInfo(){return this.mode!==`absolute-height`}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit=`meters`}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,t){let n=this.calculateOffsetRenderUnits(t);return this.featureExpressionInfoContext==null?e+n:n}calculateOffsetRenderUnits(e){let t=this._meterUnitOffset,n=this.featureExpressionInfoContext;return n!=null&&(t+=po(n)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=ce(e.unit)?e.unit:`meters`,this.offsetElevationInfoUnits=e.offset??0}setFeatureExpressionInfoContext(e){this._featureExpressionInfoContext=e}updateFeatureExpressionInfoContextForGraphic(e,t,n){e.arcade?(this._featureExpressionInfoContext=co(e),this.updateFeatureExpressionFeature(t,n)):this._featureExpressionInfoContext=e}updateFeatureExpressionFeature(e,t){let n=this.featureExpressionInfoContext;n?.arcade&&(n.cachedResult=void 0,fo(this._featureExpressionInfoContext,e.geometry?uo(n.arcade.modules,e,t):null))}static fromElevationInfo(t){let n=new e;return t!=null&&n.setFromElevationInfo(t),n}};function yo(e,t){let{vertex:n,fragment:r}=e;e.include(jt,t),n.include(Ln),n.main.add(R`vec4 posProjCenter;
if (dot(position, position) > 0.0) {
ProjectHUDAux projectAux;
vec4 posProj = projectPositionHUD(projectAux);
posProjCenter = alignToPixelCenter(posProj, viewport.zw);
forwardViewPosDepth(projectAux.posView);
vec3 vpos = projectAux.posModel;
if (rejectBySlice(vpos)) {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
} else {
posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
}
gl_Position = posProjCenter;
gl_PointSize = 1.0;`),r.main.add(R`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}function bo(e){let t=new st;if(t.include(Rn,e),t.vertex.include(kn,e),e.occlusionPass)return t.include(yo,e),t;let{output:n,oitPass:r,hasOcclusionTexture:i,signedDistanceFieldEnabled:a,useVisibilityPixel:o,pixelSnappingEnabled:s,hasEmission:c,hasScreenSizePerspective:l,debugDrawLabelBorder:u,hasVVSize:d,hasVVColor:f,hasRotation:p,occludedFragmentFade:m,sampleSignedDistanceFieldTexelCenter:h}=e;t.include(Ct),t.include(dn,e),t.include(gn,e),o&&t.include(zn);let{vertex:g,fragment:_}=t;_.include(Dn),t.varyings.add(`vcolor`,`vec4`),t.varyings.add(`vtc`,`vec2`),t.varyings.add(`vsize`,`vec2`);let v=n===8,y=v&&o;y&&t.varyings.add(`voccluded`,`float`),g.uniforms.add(new Jt(`viewport`,e=>e.camera.fullViewport),new Kt(`screenOffset`,(e,t)=>b(Co,2*e.screenOffset[0]*t.camera.pixelRatio,2*e.screenOffset[1]*t.camera.pixelRatio)),new Kt(`anchorPosition`,e=>So(e)),new pn(`materialColor`,({color:e})=>e),new $e(`materialRotation`,e=>e.rotation),new tt(`tex`,e=>e.texture)),Tt(g),a&&(g.uniforms.add(new pn(`outlineColor`,e=>e.outlineColor)),_.uniforms.add(new pn(`outlineColor`,e=>xo(e)?e.outlineColor:Ee),new $e(`outlineSize`,e=>xo(e)?e.outlineSize:0))),s&&g.include(Ln),l&&(Dt(g),Vt(g)),u&&t.varyings.add(`debugBorderCoords`,`vec4`),t.attributes.add(`uv0`,`vec2`),t.attributes.add(`uvi`,`vec4`),t.attributes.add(`color`,`vec4`),t.attributes.add(`size`,`vec2`),t.attributes.add(`rotation`,`float`),(d||f)&&t.attributes.add(`featureAttribute`,`vec4`),g.main.add(R`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${Fn};
      return;
    }

    vec2 inputSize;
    ${z(l,R`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,R`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${z(d,R`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${z(o,R`
        bool visible = testHUDVisibility(posProj);
        if (!visible) {
          vtc = vec2(0.0);
          ${z(u,`debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);`)}
          return;
        }
      `)}
    ${z(y,R`voccluded = visible ? 0.0 : 1.0;`)}
  `);let x=R`
    vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0));
    vec2 texSize = vec2(textureSize(tex, 0));
    uv = mix(vec2(1.0), uv / texSize, lessThan(uv, vec2(${Do})));
    quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

    ${z(p,R`
        float angle = radians(materialRotation + rotation);
        float cosAngle = cos(angle);
        float sinAngle = sin(angle);
        mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

        quadOffset.xy = rotate * quadOffset.xy;
      `)}

    quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,S=s?a?R`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:R`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:R`posProj += quadOffset;`;g.main.add(R`
    ${x}
    ${f?`vcolor = interpolateVVColor(featureAttribute.y) * materialColor;`:`vcolor = color * materialColor;`}

    ${z(n===9,R`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${R.float(An)};
    ${z(a,`alphaDiscard = alphaDiscard && outlineColor.a < ${R.float(An)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${S}
      gl_Position = posProj;
    }

    vtc = uv;

    ${z(u,R`debugBorderCoords = vec4(uv0, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),_.uniforms.add(new tt(`tex`,e=>e.texture)),m&&!v&&(_.include(rn),_.uniforms.add(new Tn(`depthMap`,e=>e.mainDepth),new $e(`occludedOpacity`,e=>e.occludedFragmentOpacity?.value??1))),i&&_.uniforms.add(new Tn(`texOcclusion`,e=>e.hudOcclusion?.attachment));let C=u?R`(isBorder > 0.0 ? 0.0 : ${R.float(An)})`:R.float(An),w=R`
    ${z(u,R`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${z(h,R`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${a?R`
      vec4 fillPixelColor = vcolor;

      // Get distance in output units (i.e. pixels)

      float sdf = texture(tex, samplePos).r;
      float pixelDistance = sdf * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - pixelDistance, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(pixelDistance) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${C} ||
          fillPixelColor.a + outlinePixelColor.a < ${R.float(An)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
                              vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${z(!v,R`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${C}) {
          discard;
        }

        ${z(!v,R`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:R`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${C}) {
            discard;
          }
          ${z(!v,R`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${z(m&&!v,R`
        float zSample = -linearizeDepth(texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x);
        float zFragment = -linearizeDepth(gl_FragCoord.z);
        if (zSample < ${R.float(1-To)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `)}
    ${z(i,R`fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;`)}

    ${z(!v&&u,R`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}

    ${z(r===2,R`
    if (fragColor.a < ${R.float(An)}) {
      discard;
    }`)}
  `;switch(n){case 0:t.outputs.add(`fragColor`,`vec4`,0),c&&t.outputs.add(`fragEmission`,`vec4`,1),r===1&&t.outputs.add(`fragAlpha`,`float`,c?2:1),_.main.add(R`
        ${w}
        // Unlike other materials, the fragment shader outputs premultiplied colors.
        // Disable this for front face rendering for correct OIT compositing.
        ${z(r===2,R`fragColor.rgb /= fragColor.a;`)}
        ${z(c,R`fragEmission = vec4(0.0);`)}
        ${z(r===1,R`fragAlpha = fragColor.a;`)}`);break;case 9:_.main.add(R`
        ${w}
        outputObjectAndLayerIdColor();`);break;case 8:t.include(On,e),_.main.add(R`
        ${w}
        outputHighlight(${z(y,R`voccluded == 1.0`,R`false`)});`)}return t}function xo(e){return e.outlineColor[3]>0&&e.outlineSize>0}function So(e){return e.textureIsSignedDistanceField?wo(e.anchorPosition,e.distanceFieldBoundingBox,Co):_(Co,e.anchorPosition),Co}var Co=ve();function wo(e,t,n){b(n,e[0]*(t[2]-t[0])+t[0],e[1]*(t[3]-t[1])+t[1])}var To=.08,Eo=32e3,Do=R.float(Eo),Oo=Object.freeze(Object.defineProperty({__proto__:null,build:bo,calculateAnchorPosition:So,fullUV:Eo},Symbol.toStringTag,{value:`Module`})),ko=class extends fn{constructor(e,t){super(e,t,Pn(jo).concat(Pn(Po()))),this.shader=new Wt(Oo,()=>import(`./HUDMaterial.glsl-DnhMtsvt.js`)),this.primitiveType=t.occlusionPass?Je.POINTS:Je.TRIANGLE_STRIP}initializePipeline(e){let{oitPass:t,hasEmission:n,hasPolygonOffset:r,draped:i,output:a,depthTestEnabled:o,occlusionPass:s}=e,c=o&&!i&&t!==1&&!s&&a!==8;return pt({blending:et(a)?Bt(t,!0):null,depthTest:o&&!i?{func:515}:null,depthWrite:c?ut:null,drawBuffers:Et(t,n),colorWrite:dt,polygonOffset:r?Ao:null})}};ko=f([o(`esri.views.3d.webgl-engine.shaders.HUDMaterialTechnique`)],ko);var Ao={factor:0,units:-4},jo=jn().vec2u8(`uv0`,{glNormalized:!0}),Mo=jn().vec3f(`position`).vec3f(`normal`).vec4i16(`uvi`).vec4u8(`color`,{glNormalized:!0}).vec2f(`size`).f32(`rotation`).vec4f(`centerOffsetAndDistance`).vec4f(`featureAttribute`),No=Mo.clone().vec4u8(`olidColor`);function Po(){return ht()?No:Mo}var Z=class extends bn{constructor(e,t){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.useVisibilityPixel=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.hasOcclusionTexture=!1,this.isFocused=!0,this.olidColorInstanced=!1,this.textureCoordinateType=0,this.emissionSource=0,this.discardInvisibleFragments=!0,this.hasVVInstancing=!1,this.snowCover=!1,this.transparentOccluded=t}};f([V()],Z.prototype,`transparentOccluded`,void 0),f([V()],Z.prototype,`screenCenterOffsetUnitsEnabled`,void 0),f([V()],Z.prototype,`useVisibilityPixel`,void 0),f([V()],Z.prototype,`signedDistanceFieldEnabled`,void 0),f([V()],Z.prototype,`sampleSignedDistanceFieldTexelCenter`,void 0),f([V()],Z.prototype,`hasVVSize`,void 0),f([V()],Z.prototype,`hasVVColor`,void 0),f([V()],Z.prototype,`hasVerticalOffset`,void 0),f([V()],Z.prototype,`hasScreenSizePerspective`,void 0),f([V()],Z.prototype,`hasRotation`,void 0),f([V()],Z.prototype,`debugDrawLabelBorder`,void 0),f([V()],Z.prototype,`hasPolygonOffset`,void 0),f([V()],Z.prototype,`depthTestEnabled`,void 0),f([V()],Z.prototype,`pixelSnappingEnabled`,void 0),f([V()],Z.prototype,`draped`,void 0),f([V()],Z.prototype,`terrainDepthTest`,void 0),f([V()],Z.prototype,`cullAboveTerrain`,void 0),f([V()],Z.prototype,`occlusionPass`,void 0),f([V()],Z.prototype,`occludedFragmentFade`,void 0),f([V()],Z.prototype,`hasOcclusionTexture`,void 0),f([V()],Z.prototype,`isFocused`,void 0);var Fo=class extends It{constructor(e,t,n=!1){super(e,ns),this.produces=new Map([[14,e=>Qe(e)&&!this.parameters.drawAsLabel&&!this._configuration.transparentOccluded],[15,e=>Qe(e)&&!this.parameters.drawAsLabel&&this._configuration.transparentOccluded],[16,e=>Qe(e)&&this.parameters.drawAsLabel],[13,()=>this.parameters.useVisibilityPixel],[20,e=>this.parameters.draped&&Qe(e)]]),this._visible=!0,this._configuration=new Z(t,n)}getConfiguration(e,t){let n=this.parameters.draped;return super.getConfiguration(e,t,this._configuration),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits===`screen`,this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=n,this._configuration.useVisibilityPixel=this.parameters.useVisibilityPixel,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.hasVVSize=!!this.parameters.vvSize,this._configuration.hasVVColor=!!this.parameters.vvColor,this._configuration.occlusionPass=t.slot===13,this._configuration.occludedFragmentFade=!n&&!!this.parameters.occludedFragmentOpacity,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||t.slot===13,et(e)&&(this._configuration.debugDrawLabelBorder=!!tn.LABELS_SHOW_BORDER),this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.hasOcclusionTexture=this._configuration.transparentOccluded&&t.oitPass!==0,this._configuration}intersect(e,t,n,r,i,a){let{options:{selectionMode:o,hud:s,excludeLabels:c},point:l,camera:u}=n,{parameters:d}=this;if(!o||!s||c&&d.isLabel||!e.visible||!l||!u)return;let f=e.attributes.get(`featureAttribute`),{scaleX:p,scaleY:m}=is(f==null?null:Se(f.data,Xo),d,u.pixelRatio),h=e.attributes.get(`position`),g=e.attributes.get(`size`),_=e.attributes.get(`normal`),v=e.attributes.get(`rotation`),y=e.attributes.get(`centerOffsetAndDistance`);We(h.size>=3);let b=So(d),S=this.parameters.centerOffsetUnits===`screen`;for(let e=0;e<h.data.length/h.size;e++){let r=e*h.size;N(Q,h.data[r],h.data[r+1],h.data[r+2]),P(Q,Q,t),P(Q,Q,u.viewMatrix);let i=e*y.size;if(N(Jo,y.data[i],y.data[i+1],y.data[i+2]),!S&&(Q[0]+=Jo[0],Q[1]+=Jo[1],Jo[2]!==0)){let e=Jo[2];M(Jo,Q),F(Q,Q,A(Jo,Jo,e))}let o=e*_.size;N(Vo,_.data[o],_.data[o+1],_.data[o+2]),ue(Vo,Vo,x(Ko,t));let{normal:s,cosAngle:c}=Ro(Vo,u,Zo);if(le(Q,Q,s,os(this.parameters,Q,c,u,Bo)),u.applyProjection(Q,$),$[0]>-1){S&&(Jo[0]||Jo[1])&&($[0]+=Jo[0]*u.pixelRatio,Jo[1]!==0&&($[1]+=Bo.alignmentEvaluator.apply(Jo[1])*u.pixelRatio),u.unapplyProjection($,Q)),$[0]+=this.parameters.screenOffset[0]*u.pixelRatio,$[1]+=this.parameters.screenOffset[1]*u.pixelRatio,$[0]=Math.floor($[0]),$[1]=Math.floor($[1]);let t=e*g.size;es[0]=g.data[t],es[1]=g.data[t+1],Bo.evaluator.applyVec2(es,es);let r=Qo*u.pixelRatio,i=0;d.textureIsSignedDistanceField&&(i=Math.min(d.outlineSize,.5*es[0])*u.pixelRatio/2),es[0]*=p,es[1]*=m;let o=e*v.size,s=d.rotation+v.data[o];if(zo(l,$[0],$[1],es,r,i,s,d,b)){let e=n.ray;if(P(Uo,Q,ie(qo,u.viewMatrix)),$[0]=l[0],$[1]=l[1],u.unprojectFromRenderScreen($,Q)){let t=E();j(t,e.direction);let n=1/_e(t);A(t,t,n),a(de(e.origin,Q)*n,t,-1,Uo)}}}}}intersectDraped(e,t,n,r,i){let a=e.attributes.get(`position`),o=e.attributes.get(`size`),s=e.attributes.get(`rotation`),c=this.parameters,l=So(c),u=e.attributes.get(`featureAttribute`),{scaleX:d,scaleY:f}=is(u==null?null:Se(u.data,Xo),c,e.screenToWorldRatio),p=$o*e.screenToWorldRatio;for(let t=0;t<a.data.length/a.size;t++){let u=t*a.size,m=a.data[u],h=a.data[u+1],g=t*o.size;es[0]=o.data[g],es[1]=o.data[g+1];let _=0;c.textureIsSignedDistanceField&&(_=Math.min(c.outlineSize,.5*es[0])*e.screenToWorldRatio/2),es[0]*=d,es[1]*=f;let v=t*s.size,y=c.rotation+s.data[v];zo(n,m,h,es,p,_,y,c,l)&&r(i.distance,i.normal,-1)}}createBufferWriter(){return new rs}applyShaderOffsets(e,t,n,r,i,a,o){ue(Ho,n,x(Ko,r));let s=Ro(Ho,a,Zo),c=as(_e(t),a),l=os(this.parameters,t,s.cosAngle,a,o);le(t,t,s.normal,l+c),le(e,e,Ho,l+c);let u=i[3]+l;this._applyPolygonOffsetView(t,s,u,a,t),this._applyCenterOffsetView(t,i,t)}applyShaderOffsetsNDC(e,t,n,r,i){return this._applyCenterOffsetNDC(e,t,n,r),i!=null&&j(i,r),this._applyPolygonOffsetNDC(r,t,n,r),r}_applyPolygonOffsetView(e,t,n,i,a){let o=i.aboveGround?1:-1,s=Math.sign(n);s===0&&(s=o);let c=o*s;if(this.parameters.shaderPolygonOffset<=0)return j(a,e);let l=r(Math.abs(t.cosAngle),.01,1),u=1-Math.sqrt(1-l*l)/l/i.viewport[2];return A(a,e,c>0?u:1/u),a}_applyCenterOffsetView(e,t,n){let r=this.parameters.centerOffsetUnits!==`screen`;return n!==e&&j(n,e),r&&(n[0]+=t[0],n[1]+=t[1],t[2]&&(M(Vo,n),me(n,n,A(Vo,Vo,t[2])))),n}_applyCenterOffsetNDC(e,t,n,r){let i=this.parameters.centerOffsetUnits!==`screen`;return r!==e&&j(r,e),i||(r[0]+=t[0]/n.fullWidth*2,r[1]+=t[1]/n.fullHeight*2),r}_applyPolygonOffsetNDC(e,t,n,r){let i=this.parameters.shaderPolygonOffset;if(e!==r&&j(r,e),i){let e=n.aboveGround?1:-1,a=e*Math.sign(t[3]);r[2]-=(a||e)*i}return r}set visible(e){this._visible=e}get visible(){let{color:e,outlineSize:t,outlineColor:n}=this.parameters,r=e[3]>=.003913894324853229||t>=.003913894324853229&&n[3]>=.003913894324853229;return this._visible&&r}createGLMaterial(e){return new Io(e)}calculateRelativeScreenBounds(e,t,n=g()){return Lo(this.parameters,e,t,n),n[2]=n[0]+e[0],n[3]=n[1]+e[1],n}},Io=class extends Gt{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(ko,e)}};function Lo(e,t,n,r){r[0]=e.anchorPosition[0]*-t[0]+e.screenOffset[0]*n,r[1]=e.anchorPosition[1]*-t[1]+e.screenOffset[1]*n}function Ro(e,t,n){return P(n.normal,e,t.viewInverseTransposeMatrix),n.cosAngle=ge(n.normal,ts),n}function zo(e,t,r,i,a,o,s,c,l){let u=t-a-i[0]*l[0],d=u+i[0]+2*a,f=r-a-i[1]*l[1],p=f+i[1]+2*a,m=c.distanceFieldBoundingBox;return c.textureIsSignedDistanceField&&m!=null&&(u+=i[0]*m[0],f+=i[1]*m[1],d-=i[0]*(1-m[2]),p-=i[1]*(1-m[3]),u-=o,d+=o,f-=o,p+=o),b(Go,t,r),v(Wo,e,Go,n(s)),Wo[0]>u&&Wo[0]<d&&Wo[1]>f&&Wo[1]<p}var Bo=new St,Q=E(),Vo=E(),$=Ce(),Ho=E(),Uo=E(),Wo=ve(),Go=ve(),Ko=S(),qo=ee(),Jo=E(),Yo=E(),Xo=Ce(),Zo={normal:E(),cosAngle:0},Qo=1,$o=2,es=ye(0,0),ts=T(0,0,1),ns=class extends Zt{constructor(){super(...arguments),this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=!1,this.color=we(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=ye(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=we(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=Ce(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.useVisibilityPixel=!0,this.occludedVisibilityMode=`hidden`,this.centerOffsetUnits=`world`,this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.draped=!1,this.isLabel=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}},rs=class{constructor(){this.layout=Po(),this.baseInstanceLayout=jo}elementCount(e){return e.get(`position`).indices.length}elementCountBaseInstance(e){return e.get(`uv0`).indices.length}write(e,t,n,r,i,a){let{position:o,normal:s,color:c,size:l,rotation:u,centerOffsetAndDistance:d,featureAttribute:f,uvi:p}=i;un(n.get(`position`),e,o,a),cn(n.get(`normal`),t,s,a);let m=n.get(`position`).indices.length,h=0,g=0,_=Eo,v=Eo,y=n.get(`uvi`)?.data;y&&y.length>=4&&(h=y[0],g=y[1],_=y[2],v=y[3]);for(let e=0;e<m;++e){let t=a+e;p.setValues(t,h,g,_,v)}if(qt(n.get(`color`),4,c,a),hn(n.get(`size`),l,a),vn(n.get(`rotation`),u,a),n.get(`centerOffsetAndDistance`)?Yt(n.get(`centerOffsetAndDistance`),d,a):mn(d,a,m),n.get(`featureAttribute`)?Yt(n.get(`featureAttribute`),f,a):mn(f,a,m),r!=null){let e=n.get(`position`)?.indices;if(e){let t=e.length;$t(r,i.getField(`olidColor`,Ge),t,a)}}return{numVerticesPerItem:1,numItems:m}}writeBaseInstance(e,t){let{uv0:n}=t;hn(e.get(`uv0`),n,0)}};function is(e,t,n){return e==null||t.vvSize==null?{scaleX:n,scaleY:n}:(xn(Yo,t,e),{scaleX:Yo[0]*n,scaleY:Yo[1]*n})}function as(e,t){let n=t.computeRenderPixelSizeAtDist(e)*In;return(t.aboveGround?1:-1)*n}function os(e,t,n,r,i){if(!e.verticalOffset?.screenLength){let r=_e(t);return i.update(n,r,e.screenSizePerspective,e.screenSizePerspectiveMinPixelReferenceSize,e.screenSizePerspectiveAlignment,null),0}let a=_e(t),o=e.screenSizePerspectiveAlignment??e.screenSizePerspective,s=At(r,a,e.verticalOffset,n,o,e.screenSizePerspectiveMinPixelReferenceSize);return i.update(n,a,e.screenSizePerspective,e.screenSizePerspectiveMinPixelReferenceSize,e.screenSizePerspectiveAlignment,null),s}export{rr as $,Sa as A,Qr as B,sa as C,Da as D,Ia as E,ki as F,kr as G,Wr as H,Oi as I,_r as J,Dr as K,Ti as L,xa as M,Oa as N,ka as O,Na as P,ir as Q,ri as R,ja as S,Pa as T,Or as U,Gr as V,Er as W,fr as X,hr as Y,dr as Z,no as _,vo as a,Ma as b,ho as c,Ka as d,tr as et,Ya as f,Ga as g,Xa as h,Eo as i,Aa as j,Ca as k,Wa as l,Ja as m,So as n,Un as nt,lo as o,Ua as p,vr as q,bo as r,Bn as rt,mo as s,Fo as t,Kn as tt,qa as u,Ha as v,Ta as w,na as x,Ba as y,Zr as z};