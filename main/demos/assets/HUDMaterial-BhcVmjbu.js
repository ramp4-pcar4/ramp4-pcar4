const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./RibbonLine.glsl-D0ewSVOV.js","./VertexColor.glsl-CGCZmPas.js","./store-TEwW3sPL.js","./preload-helper-BTGlBio-.js","./store-9vAoC8ak.css","./Texture-DfG05azB.js","./Clonable-BjDfsS0D.js","./Accessor-ckm1DFE8.js","./decorators-D2aC5xmm.js","./scheduling-BXSyHQTn.js","./Cyclical-CYO9PsvH.js","./JSONSupport-MKjveNE3.js","./Point-CZpR6CJC.js","./SpatialReference-CnXM4sDw.js","./enums-CsvnPRfA.js","./Evented-DmRRrx43.js","./sphere-WIJ4tg4K.js","./plane-DXDqgqh2.js","./reactiveUtils-BH6f49GZ.js","./Extent-uhoOLo58.js","./Polygon-DqgtXNxQ.js","./Polyline-khG_8Q_2.js","./aaBoundingRect-DsxD-oAt.js","./curveExtent-BDOuvPI0.js","./computeTranslationToOriginAndRotation-Dcx4cqnH.js","./projectPointToVector-Bm1Gy7Kb.js","./projectionUtils-Cexz8g53.js","./Multipoint-brB9_7JI.js","./GeographicTransformation-O3AXtk_L.js","./spatialReferenceEllipsoidUtils-C3Ryan6s.js","./projectVectorToVector-qpTaf6iY.js","./Indices-Dfi6S0bC.js","./aaBoundingBox-BKSdisoG.js","./BufferView-D9s1lKs5.js","./frustum-4ViPvfv-.js","./normalizeUtils-BCd96750.js","./jsonUtils-ByWKU8r-.js","./normalizeUtilsCommon-YKqEUf84.js","./utils-DhP2bl9F2.js","./utils-C0Q3z-vt.js","./videoUtils-DnncL-Kz.js","./image-D2PwBrJr.js","./orientedBoundingBox-DbQJXwsE.js","./quat-BnBBT9ug.js","./Emissions.glsl-DOGoT6RN.js","./glsl-D85RBwKC.js","./Uniform-FnPH-ujw.js","./AlphaCutoff-Dm0bYlmh.js","./HighlightReadBitmap.glsl-gSqhLTwZ.js","./Texture2DBindUniform-4_yYNByJ.js","./NoParameters-ZDc3QXO4.js","./HUDIntersectorResult-DYAyXmlU.js","./VertexAttributeLocations-Cv8LOkho.js","./VertexElementDescriptor-DVcI4qMB.js","./renderState-DnqNRJEw.js","./PositionOutsideClipSpace-CLdt_M-O.js","./ShaderBuilder-B4XLodJj.js","./HUDMaterial.glsl-DsQasftL.js","./HUDVisibility.glsl-CRz_W6lO.js"])))=>i.map(i=>d[i]);
import{$v as e,Aa as t,Bo as n,C_ as r,Co as i,Ei as a,Fu as o,Go as s,Gu as c,Hg as l,If as u,Ji as d,Ko as f,Li as p,Ma as m,Nu as h,Oi as g,Ou as _,Oy as v,Pa as y,Qv as b,Sa as x,Si as S,So as C,Ti as w,Uu as T,V_ as E,Vg as D,Xi as O,Xo as ee,Zd as k,an as te,ar as A,ba as j,bf as ne,ca as re,df as ie,ia as M,id as N,ir as ae,is as oe,jo as se,ka as P,kp as ce,la as le,ls as ue,ly as de,na as fe,qu as pe,ra as me,ri as he,sa as ge,sr as _e,u_ as ve,ua as ye,ui as be,ur as xe,va as F,wa as Se,wg as I,wi as Ce,xf as we,xi as Te,ya as Ee,zf as De}from"./store-TEwW3sPL.js";import{t as Oe}from"./preload-helper-BTGlBio-.js";import{M as ke,n as Ae}from"./decorators-D2aC5xmm.js";import{a as je}from"./Accessor-ckm1DFE8.js";import{t as Me}from"./Evented-DmRRrx43.js";import{G as Ne}from"./fieldUtils-CGbGj3Q-.js";import{C as Pe}from"./aaBoundingRect-DsxD-oAt.js";import{a as Fe,g as Ie,m as Le,w as Re,x as ze,y as Be}from"./plane-DXDqgqh2.js";import{n as Ve}from"./sphere-WIJ4tg4K.js";import{i as He,n as Ue}from"./Indices-Dfi6S0bC.js";import{t as We}from"./computeTranslationToOriginAndRotation-Dcx4cqnH.js";import{G as Ge,H as Ke,K as qe,Z as Je}from"./BufferView-D9s1lKs5.js";import{h as Ye,i as Xe,s as Ze}from"./enums-CsvnPRfA.js";import{i as L}from"./orientedBoundingBox-DbQJXwsE.js";import{a as Qe,h as $e,i as et,m as tt,n as nt,p as rt,u as it,v as at,y as ot}from"./Emissions.glsl-DOGoT6RN.js";import{n as R,t as z}from"./glsl-D85RBwKC.js";import"./Texture-DfG05azB.js";import{i as st}from"./hydratedFeatures-DkF1Mfkk.js";import{t as ct}from"./ShaderBuilder-B4XLodJj.js";import{n as B,r as lt,t as ut}from"./vec3f32-CQLLad-g.js";import{a as dt,l as ft,r as pt,u as mt}from"./renderState-DnqNRJEw.js";import{A as ht,At as gt,B as _t,D as vt,Dt as yt,E as bt,Et as xt,F as St,Ft as Ct,G as wt,Gt as Tt,H as Et,Ht as Dt,K as Ot,Kt as kt,M as At,Mt as jt,N as Mt,O as Nt,P as Pt,R as Ft,Rt as It,St as Lt,T as Rt,Tt as zt,U as Bt,Vt,W as Ht,Wt as Ut,Y as Wt,Yt as Gt,_ as Kt,an as qt,at as Jt,cn as Yt,ct as Xt,ft as Zt,g as Qt,hn as $t,it as en,j as tn,jt as nn,k as rn,ln as an,mn as on,mt as sn,nn as cn,ot as ln,pn as un,pt as dn,q as fn,qt as pn,rn as mn,rt as hn,st as gn,tt as _n,un as vn,ut as yn,w as bn,wt as xn,xt as Sn,z as Cn,zt as wn}from"./VertexColor.glsl-CGCZmPas.js";import{t as Tn}from"./Octree-6W34xxaP.js";import{t as En}from"./Texture2DBindUniform-4_yYNByJ.js";import{a as Dn,i as On,l as V,n as kn,s as An,t as jn}from"./AlphaCutoff-Dm0bYlmh.js";import{a as Mn,n as Nn,r as Pn,s as Fn}from"./FloatArray-Z7rI42Jt.js";import{t as In}from"./PositionOutsideClipSpace-CLdt_M-O.js";import{i as Ln,n as Rn,r as zn,t as Bn}from"./HUDVisibility.glsl-CRz_W6lO.js";function Vn(e){return e===`position`}function Hn(e,t){return e??=[],e.push(t),e}function Un(e,t){if(e==null)return null;let n=e.filter(e=>e!==t);return n.length===0?null:n}function Wn(e,t,n,r,i){Gn[0]=e.get(t,0),Gn[1]=e.get(t,1),Gn[2]=e.get(t,2),un(Gn,Kn,3),n.set(i,0,Kn[0]),r.set(i,0,Kn[1]),n.set(i,1,Kn[2]),r.set(i,1,Kn[3]),n.set(i,2,Kn[4]),r.set(i,2,Kn[5])}var Gn=T(),Kn=new Float32Array(6),qn=class{constructor(e={}){this.id=ke(),this._highlightIds=new Set,this._shaderTransformation=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerViewUid=e.layerViewUid,e.isElevationSource&&(this.lastValidElevationBB=new Jn),this._geometries=e.geometries?Array.from(e.geometries):[]}dispose(){this._geometries.length=0}get layer(){return this._layer}set layer(e){Ge(this._layer==null||e==null,`Object3D can only be added to a single Layer`),this._layer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e);for(let t of this._highlightIds)e.addHighlight(t);this._emit(`geometryAdded`,{object:this,geometry:e}),this._highlightIds.size&&this._emit(`highlightChanged`,this),this._invalidateBoundingVolume()}removeGeometry(e){let t=this._geometries.splice(e,1)[0];if(t){for(let e of this._highlightIds)t.removeHighlight(e);this._emit(`geometryRemoved`,{object:this,geometry:t}),this._highlightIds.size&&this._emit(`highlightChanged`,this),this._invalidateBoundingVolume()}}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,t,n=!1){this._emit(`attributesChanged`,{object:this,geometry:e,attribute:t,sync:n}),Vn(t)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(let e of this._geometries)e.visible=this._visible;this._emit(`visibilityChanged`,this)}}maskOccludee(){let e=new $t;for(let t of this._geometries)t.occludees=Hn(t.occludees,e);return this._emit(`occlusionChanged`,this),e}removeOcclude(e){for(let t of this._geometries)t.occludees=Un(t.occludees,e);this._emit(`occlusionChanged`,this)}highlight(e){let t=new on(e);for(let e of this._geometries)e.addHighlight(t);return this._emit(`highlightChanged`,this),this._highlightIds.add(t),t}removeHighlight(e){this._highlightIds.delete(e);for(let t of this._geometries)t.removeHighlight(e);this._emit(`highlightChanged`,this)}removeStateID(e){e.channel===0?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,t){return n(t,this.transformation,e.transformation)}getCombinedShaderTransformation(e,t=h()){return n(t,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=new Yn,this._validateBoundingVolume(this._bvWorldSpace,0)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=new Yn,this._validateBoundingVolume(this._bvObjectSpace,1)),this._bvObjectSpace}_validateBoundingVolume(e,n){let r=n===1;for(let t of this._geometries){let n=t.boundingInfo;n&&Xn(n,e,r?t.transformation:this.getCombinedShaderTransformation(t))}re(e.bounds.center,e.min,e.max,.5);for(let n of this._geometries){let i=n.boundingInfo;if(i==null)continue;let a=r?n.transformation:this.getCombinedShaderTransformation(n),o=be(a);M(er,i.center,a);let s=t(er,e.bounds.center),c=i.radius*o;e.bounds.radius=Math.max(e.bounds.radius,s+c)}}_invalidateBoundingVolume(){let e=this._bvWorldSpace?.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this.layer&&e&&this.layer.notifyObjectBBChanged(this,e)}_emit(e,t){this.layer?.events.emit(e,t)}get geometries(){return this._geometries}get transformation(){return this._transformation??o}set transformation(e){this._transformation=ee(this._transformation??h(),e),this._invalidateBoundingVolume(),this._emit(`transformationChanged`,this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?ee(this._shaderTransformation??h(),e):null,this._invalidateBoundingVolume(),this._emit(`shaderTransformationChanged`,this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}get test(){}},Jn=class{constructor(){this._data=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE]}get min(){return c(this._data[0],this._data[1],this._data[2])}get max(){return c(this._data[3],this._data[4],this._data[5])}minWith(e){let{_data:t}=this;t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.min(t[2],e[2])}maxWith(e){let{_data:t}=this;t[3]=Math.max(t[3],e[0]),t[4]=Math.max(t[4],e[1]),t[5]=Math.max(t[5],e[2])}assignMinMax(e,t){for(let n=0;n<3;++n)this._data[0+n]=e[n],this._data[3+n]=t[n]}isEmpty(){return this._data[3]<this._data[0]&&this._data[4]<this._data[1]&&this._data[5]<this._data[2]}},Yn=class extends Jn{constructor(){super(...arguments),this.bounds=new Ve}};function Xn(e,t,n){let r=e.bbMin,i=e.bbMax;if(se(n)){let e=m(Zn,n[12],n[13],n[14]);j(Qn,r,e),j($n,i,e),t.minWith(Qn),t.maxWith($n);return}if(M(Qn,r,n),me(r,i))return t.minWith(Qn),void t.maxWith(Qn);M($n,i,n),t.minWith(Qn),t.minWith($n),t.maxWith(Qn),t.maxWith($n);for(let e=0;e<3;++e)P(Qn,r),P($n,i),Qn[e]=i[e],$n[e]=r[e],M(Qn,Qn,n),M($n,$n,n),t.minWith(Qn),t.minWith($n),t.maxWith(Qn),t.maxWith($n)}var Zn=T(),Qn=T(),$n=T(),er=T(),tr=[`layerObjectAdded`,`layerObjectRemoved`,`layerObjectsAdded`,`layerObjectsRemoved`,`transformationChanged`,`shaderTransformationChanged`,`visibilityChanged`,`occlusionChanged`,`highlightChanged`,`geometryAdded`,`geometryRemoved`,`attributesChanged`],nr=class{constructor(e,t,n=``){this.stage=e,this.apiLayerViewUid=n,this.id=ke(),this.events=new Me,this.visible=!0,this.sliceable=!1,this._objectsAdded=[],this._handles=new je,this._objects=new Map,this._pickable=!0,this.visible=t?.visible??!0,this._pickable=t?.pickable??!0,this.updatePolicy=t?.updatePolicy??0,e.addLayer(this);for(let t of tr)this._handles.add(this.events.on(t,n=>e.handleEvent(t,n)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.removeLayer(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}getObject(e){return v(this._objects.get(e))}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.set(e.id,e),e.layer=this,this.events.emit(`layerObjectAdded`,e),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.delete(e.id)&&(this.events.emit(`layerObjectRemoved`,e),e.layer=null,this._octree!=null&&(de(this._objectsAdded,e)||this._octree.remove([e])))}addMany(e){for(let t of e)this._objects.set(t.id,t),t.layer=this;this.events.emit(`layerObjectsAdded`,e),this._octree!=null&&this._objectsAdded.push(...e)}removeMany(e){let t=[];for(let n of e)this._objects.delete(n.id)&&t.push(n);if(t.length!==0&&(this.events.emit(`layerObjectsRemoved`,t),t.forEach(e=>e.layer=null),this._octree!=null)){for(let e=0;e<t.length;)de(this._objectsAdded,t[e])?(t[e]=t[t.length-1],--t.length):++e;this._octree.remove(t)}}commit(){this.stage.commitLayer(this)}sync(){this.updatePolicy!==1&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){this._octree==null||this._objectsAdded.includes(e)||this._octree.update(e,t)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.size>50?(this._octree=new Tn(e=>e.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.values())):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded),this._objectsAdded.length=0),this._octree}invalidateSpatialQueryAccelerator(){this._octree=r(this._octree),this._objectsAdded.length=0}get test(){}},rr=class{constructor(e,t){this.vec3=e,this.id=t}};function ir(e,t,n,r){return new rr(c(e,t,n),r)}var ar={stableRendering:!1},or={rootOrigin:null},H={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},sr={dash:H.dash,"dash-dot":[...H.dash,...H.dot],dot:H.dot,"long-dash":H[`long-dash`],"long-dash-dot":[...H[`long-dash`],...H.dot],"long-dash-dot-dot":[...H[`long-dash`],...H.dot,...H.dot],none:null,"short-dash":H[`short-dash`],"short-dash-dot":[...H[`short-dash`],...H[`short-dot`]],"short-dash-dot-dot":[...H[`short-dash`],...H[`short-dot`],...H[`short-dot`]],"short-dot":H[`short-dot`],solid:null},cr=8,lr=class{constructor(e,t,n){this.image=e,this.width=t,this.length=n,this.uuid=te()}};function ur(e){return e!=null&&`image`in e}function dr(e,t){return e==null?e:{pattern:e.slice(),pixelRatio:t}}function fr(e){return{pattern:[e,e],pixelRatio:2}}function pr(e){switch(e?.type){case`style`:return mr(e.style);case`image`:return new lr(e.image,e.width,e.length);case void 0:case null:return null}return null}function mr(e){return e==null?null:dr(sr[e],cr)}var hr=8;function gr(e,t){let{vertex:n,attributes:r}=e;n.uniforms.add(new et(`intrinsicWidth`,e=>e.width));let{hasScreenSizePerspective:i,spherical:a}=t;i?(e.include(wt,t),Ot(n),Cn(n,t),n.uniforms.add(new Bt(`inverseViewMatrix`,(e,t)=>s(_r,f(_r,t.camera.viewMatrix,e.origin)))),n.code.add(R`
      float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
        vec3 worldPos = (inverseViewMatrix * vec4(pos, 1)).xyz;
        vec3 groundUp = ${a?R`normalize(worldPos + localOrigin)`:R`vec3(0.0, 0.0, 1.0)`};
        float absCosAngle = abs(dot(groundUp, normalize(worldPos - cameraPosition)));

        return screenSizePerspectiveScaleFloat(size, absCosAngle, length(pos), screenSizePerspective);
      }
    `)):n.code.add(R`float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
return size;
}`),t.hasVVSize?(r.add(`sizeFeatureAttribute`,`float`),n.uniforms.add(new Qe(`vvSizeMinSize`,e=>e.vvSize.minSize),new Qe(`vvSizeMaxSize`,e=>e.vvSize.maxSize),new Qe(`vvSizeOffset`,e=>e.vvSize.offset),new Qe(`vvSizeFactor`,e=>e.vvSize.factor),new Qe(`vvSizeFallback`,e=>e.vvSize.fallback)),n.code.add(R`
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
    `)),t.hasVVOpacity?(r.add(`opacityFeatureAttribute`,`float`),n.constants.add(`vvOpacityNumber`,`int`,8),n.uniforms.add(new Wt(`vvOpacityValues`,hr,e=>e.vvOpacity.values),new Wt(`vvOpacityOpacities`,hr,e=>e.vvOpacity.opacityValues),new et(`vvOpacityFallback`,e=>e.vvOpacity.fallback,{supportsNaN:!0})),n.code.add(R`
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
}`),t.hasVVColor?(e.include(fn,t),r.add(`colorFeatureAttribute`,`float`),n.code.add(R`vec4 getColor() {
vec4 color = interpolateVVColor(colorFeatureAttribute);
if (isnan(color.r)) {
return vec4(0);
}
return applyOpacity(color);
}`)):(r.add(`color`,`vec4`),n.code.add(R`vec4 getColor() {
return applyOpacity(color);
}`))}var _r=h();function vr(e){e.vertex.code.add(`#define noPerspectiveWrite(x, w) (x * w)`)}function yr(e){e.fragment.code.add(`#define noPerspectiveRead(x) (x * gl_FragCoord.w)`)}function br(e){return e.pattern.map(t=>Math.round(t*e.pixelRatio))}function xr(e){if(e==null)return 1;let t=br(e);return Math.floor(t.reduce((e,t)=>e+t))}function Sr(e){return e==null?Te:e.length===4?e:p(Cr,e[0],e[1],e[2],1)}var Cr=Ce();function wr(e,t){if(!t.stippleEnabled)return void e.fragment.code.add(R`float getStippleAlpha(float lineWidth) { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);let n=!(t.draped&&t.stipplePreferContinuous),{vertex:r,fragment:i}=e;t.draped||(Cn(r,t),r.uniforms.add(new cn(`worldToScreenPerDistanceRatio`,({camera:e})=>1/e.perScreenPixelRatio)).code.add(R`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add(`vStippleDistance`,`float`),e.varyings.add(`vStippleDistanceLimits`,`vec2`),e.varyings.add(`vStipplePatternStretch`,`float`),r.code.add(R`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${R.float(Er)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),Et(r),r.code.add(R`
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
  `),i.uniforms.add(new nt(`stipplePatternTexture`,e=>e.stippleTexture),new et(`stipplePatternPixelSizeInv`,e=>1/Tr(e))),t.stippleOffColorEnabled&&i.uniforms.add(new mn(`stippleOffColor`,e=>Sr(e.stippleOffColor))),e.include(yr),t.worldSizedImagePattern?(e.varyings.add(`vStippleV`,`float`),e.fragment.include(Ft),i.code.add(R`vec4 getStippleColor(out bool isClamped) {
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
  `)}function Tr(e){let t=e.stipplePattern;return ur(t)?t.length:t?xr(t)/t.pixelRatio:1}var Er=.4,Dr=.5,Or=S(Dr/2,Dr/2,1-Dr/2,1-Dr/2);function kr(e){return e===`cross`||e===`x`}function Ar(e,t=128,n=t*Dr,r=0){let{data:i,parameters:a}=jr(e,t,n,r);return new St(i,a)}function jr(e,t=128,n=t*Dr,r=0){return{data:Mr(e,t,n,r),parameters:{mipmap:!1,wrap:{s:33071,t:33071},width:t,height:t,noUnpackFlip:!0,dataType:Ze.FLOAT,pixelFormat:6403,internalFormat:Xe.R16F,reloadable:!0}}}function Mr(e,t=128,n=t*Dr,r=0){switch(e){case`circle`:default:return Nr(t,n);case`square`:return Pr(t,n);case`cross`:return Ir(t,n,r);case`x`:return Lr(t,n,r);case`kite`:return Fr(t,n);case`triangle`:return Rr(t,n);case`arrow`:return zr(t,n)}}function Nr(e,t){let n=e/2-.5;return Wr(e,Hr(n,n,t/2))}function Pr(e,t){return Br(e,t,!1)}function Fr(e,t){return Br(e,t,!0)}function Ir(e,t,n=0){return Vr(e,t,!1,n)}function Lr(e,t,n=0){return Vr(e,t,!0,n)}function Rr(e,t){return Wr(e,Ur(e/2,t,t/2))}function zr(e,t){let n=t,r=t/2,i=e/2,a=.8*n,o=Hr(i,(e-t)/2-a,Math.sqrt(a*a+r*r)),s=Ur(i,n,r);return Wr(e,(e,t)=>Math.max(s(e,t),-o(e,t)))}function Br(e,t,n){return n&&(t/=Math.SQRT2),Wr(e,(r,i)=>{let a=r-.5*e+.25,o=.5*e-i-.75;if(n){let e=(a+o)/Math.SQRT2;o=(o-a)/Math.SQRT2,a=e}return Math.max(Math.abs(a),Math.abs(o))-.5*t})}function Vr(e,t,n,r=0){t-=r,n&&(t*=Math.SQRT2);let i=.5*t;return Wr(e,(t,a)=>{let o,s=t-.5*e,c=.5*e-a-1;if(n){let e=(s+c)/Math.SQRT2;c=(c-s)/Math.SQRT2,s=e}return s=Math.abs(s),c=Math.abs(c),o=s>c?s>i?Math.sqrt((s-i)*(s-i)+c*c):c:c>i?Math.sqrt(s*s+(c-i)*(c-i)):s,o-=r/2,o})}function Hr(e,t,n){return(r,i)=>{let a=r-e,o=i-t;return Math.sqrt(a*a+o*o)-n}}function Ur(e,t,n){let r=Math.sqrt(t*t+n*n);return(i,a)=>{let o=Math.abs(i-e)-n,s=a-e+t/2+.75,c=(t*o+n*s)/r,l=-s;return Math.max(c,l)}}function Wr(e,t){let n=new Float32Array(e*e);for(let r=0;r<e;r++)for(let i=0;i<e;i++)n[i+e*r]=t(i,r)/e;return n}var Gr=.25;function Kr(e,t){let n=e.vertex,r=t.hasScreenSizePerspective;Et(n),n.uniforms.get(`markerScale`)??n.constants.add(`markerScale`,`float`,1),n.constants.add(`markerSizePerLineWidth`,`float`,10).code.add(R`
  float getLineWidth(${z(r,`vec3 pos`)}) {
     return max(getSize(${z(r,`pos`)}), 1.0) * pixelRatio;
  }

  float getScreenMarkerSize(float lineWidth) {
    return markerScale * markerSizePerLineWidth * lineWidth;
  }
  `),t.space===2&&(n.constants.add(`maxSegmentLengthFraction`,`float`,.45),n.uniforms.add(new cn(`perRenderPixelRatio`,e=>e.camera.perRenderPixelRatio)),n.code.add(R`
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
  `))}var qr=D(1),Jr=D(1);function Yr(e,t){let{hasAnimation:n,animation:r}=t;if(!n)return;let{attributes:i,varyings:a,vertex:o,fragment:s}=e;i.add(`timeStamps`,`vec4`),a.add(`vTimeStamp`,`float`),a.add(`vFirstTime`,`float`),a.add(`vLastTime`,`float`),a.add(`vTransitionType`,`float`),o.main.add(R`vTimeStamp = timeStamps.x;
vFirstTime = timeStamps.y;
vLastTime = timeStamps.z;
vTransitionType = timeStamps.w;`),r===3&&s.constants.add(`decayRate`,`float`,2.3),s.code.add(R`
    float getTrailOpacity(float x) {
      if (x < 0.0) {
        return 0.0;
      }

      ${Xr(r)}
    }`),s.uniforms.add(new et(`timeElapsed`,e=>e.timeElapsed),new et(`trailLength`,e=>e.trailLength),new et(`speed`,e=>e.animationSpeed),new qt(`startEndTime`,e=>u(Zr,e.startTime,e.endTime))),s.constants.add(`fadeInTime`,`float`,Jr),s.constants.add(`fadeOutTime`,`float`,qr),s.constants.add(`incomingTransition`,`int`,0),s.constants.add(`outgoingTransition`,`int`,2),s.code.add(R`float fadeIn(float x) {
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
}`)}function Xr(e){switch(e){case 2:return`return x >= 0.0 && x <= 1.0 ? 1.0 : 0.0;`;case 3:return`float cutOff = exp(-decayRate);
        return (exp(-decayRate * x) - cutOff) / (1.0 - cutOff);`;default:return`return 1.0;`}}var Zr=d(),Qr=1;function $r(e){let t=new ct,{attributes:n,varyings:r,vertex:i,fragment:a}=t,{applyMarkerOffset:o,draped:s,output:c,capType:l,stippleEnabled:u,falloffEnabled:d,roundJoins:f,wireframe:p,innerColorEnabled:m,hasAnimation:h,hasScreenSizePerspective:g,worldSizedImagePattern:_}=e;a.include(Pt),t.include(gr,e),t.include(wr,e),t.include(_n,e),t.include(Mt,e),t.include(Yr,e);let v=o&&!s;v&&(i.uniforms.add(new et(`markerScale`,e=>e.markerScale)),t.include(Kr,{space:2,hasScreenSizePerspective:g})),_t(i,e),i.uniforms.add(new It(`inverseProjectionMatrix`,e=>e.camera.inverseProjectionMatrix),new vn(`nearFar`,e=>e.camera.nearFar),new et(`miterLimit`,e=>e.join===`miter`?e.miterLimit:0),new Yt(`viewport`,e=>e.camera.fullViewport)),i.constants.add(`LARGE_HALF_FLOAT`,`float`,65500),n.add(`position`,`vec3`),n.add(`previousDelta`,`vec4`),n.add(`nextDelta`,`vec4`),n.add(`lineParameters`,`vec2`),n.add(`u0`,`float`),r.add(`vColor`,`vec4`),r.add(`vpos`,`vec3`,{invariant:!0}),r.add(`vLineDistance`,`float`),r.add(`vLineWidth`,`float`);let y=u;y&&r.add(`vLineSizeInv`,`float`);let b=l===2,x=u&&b,S=d||x;S&&r.add(`vLineDistanceNorm`,`float`),b&&(r.add(`vSegmentSDF`,`float`),r.add(`vReverseSegmentSDF`,`float`)),i.code.add(R`vec2 perpendicular(vec2 v) {
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
}`),Et(i),i.constants.add(`aaWidth`,`float`,+!u).main.add(R`
    // unpack values from vertex type
    bool isStartVertex = abs(abs(lineParameters.y) - 3.0) == 1.0;
    vec3 prevPosition = position + previousDelta.xyz * previousDelta.w;
    vec3 nextPosition = position + nextDelta.xyz * nextDelta.w;

    float coverage = 1.0;

    // Check for special value of lineParameters.y which is used by the Renderer when graphics are removed before the
    // VBO is recompacted. If this is the case, then we just project outside of clip space.
    if (lineParameters.y == 0.0) {
      gl_Position = ${In};
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
}`),t.include(vr),i.main.add(R`
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
vReverseSegmentSDF = noPerspectiveWrite((isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir)), pos.w);`),u&&(s?i.uniforms.add(new cn(`worldToScreenRatio`,e=>1/e.screenToPCSRatio)):i.main.add(R`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),i.main.add(R`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),s?i.main.add(R`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = u0 * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):i.main.add(R`float startPseudoScreen = mix(u0, u0 - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),i.uniforms.add(new et(`stipplePatternPixelSize`,e=>Tr(e))),i.main.add(R`
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
    }`),t.fragment.include(Dn,e),t.include(At,e),a.include(On),a.main.add(R`discardBySlice(vpos);
discardByTerrainDepth();`),t.include(yr),a.main.add(R`
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
      float stippleAlpha = step(${R.float(jn)}, stippleCoverage);
      `):a.main.add(R`float stippleAlpha = getStippleAlpha(lineWidth);`),c!==9&&a.main.add(R`discardByStippleAlpha(stippleAlpha, ${R.float(.003913894324853229)});`),t.include(yr),a.uniforms.add(new mn(`intrinsicColor`,e=>e.color)).main.add(R`vec4 color = intrinsicColor * vColor;
color.a = noPerspectiveRead(color.a);`),m&&a.uniforms.add(new mn(`innerColor`,e=>e.innerColor??e.color),new et(`innerWidth`,(e,t)=>e.innerWidth*t.camera.pixelRatio)).main.add(R`float distToInner = abs(lineDistance) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`),a.main.add(R`vec4 finalColor = blendStipple(color, stippleAlpha);`),d&&(a.uniforms.add(new et(`falloff`,e=>e.falloff)),a.main.add(R`finalColor.a *= pow(max(0.0, 1.0 - abs(lineDistanceNorm)), falloff);`)),u||a.main.add(R`float featherStartDistance = max(lineWidth - 2.0, 0.0);
float value = abs(lineDistance);
float feather = (value - featherStartDistance) / (lineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`),h&&a.main.add(R`
        finalColor = animate(finalColor);

        ${z(c!==9,R`
            if (finalColor.a <= ${R.float(.003913894324853229)}) {
              discard;
            }`)}
      `)),a.main.add(R`outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),t}var ei=Object.freeze(Object.defineProperty({__proto__:null,build:$r,ribbonlineNumRoundJoinSubdivisions:1},Symbol.toStringTag,{value:`Module`})),ti=class extends pn{constructor(e,t){super(e,t,Fn(ri(t))),this.shader=new Gt(ei,()=>Oe(()=>import(`./RibbonLine.glsl-D0ewSVOV.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56]),import.meta.url)),this.primitiveType=t.wireframe?Ye.LINES:Ye.TRIANGLE_STRIP}_makePipelineState(e,t){let{oitPass:n,output:r,hasEmission:i,hasOccludees:a,hasPolygonOffset:o}=e,s=n===0,c=n===2;return mt({blending:tt(r)?Vt(n):null,depthTest:Tt(n),depthWrite:Ut(e),drawBuffers:kt(r,Dt(n,i)),colorWrite:ft,stencilWrite:a?vt:null,stencilTest:a?t?ht:Rt:null,polygonOffset:s||c?o?ni:null:wn})}initializePipeline(e){if(e.occluder){let t=e.hasPolygonOffset?ni:null,{output:n,hasOccludees:r}=e;this._occluderPipelineTransparent=mt({blending:pt,polygonOffset:t,depthTest:rn,depthWrite:null,colorWrite:ft,stencilWrite:null,stencilTest:r?bt:null,drawBuffers:kt(n)}),this._occluderPipelineOpaque=mt({blending:pt,polygonOffset:t,depthTest:r?rn:bn,depthWrite:null,colorWrite:ft,stencilWrite:r?Nt:null,stencilTest:r?tn:null,drawBuffers:kt(n)}),this._occluderPipelineMaskWrite=mt({blending:null,polygonOffset:t,depthTest:bn,depthWrite:null,colorWrite:null,stencilWrite:r?vt:null,stencilTest:r?ht:null,drawBuffers:kt(n)})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){if(t)return this._occludeePipeline;switch(e.occluder){case 12:return this._occluderPipelineTransparent??super.getPipeline(e);case 11:return this._occluderPipelineOpaque??super.getPipeline(e);default:e.occluder;case void 0:case null:return this._occluderPipelineMaskWrite??super.getPipeline(e)}}};ti=I([Ae(`esri.views.3d.webgl-engine.shaders.RibbonLineTechnique`)],ti);var ni={factor:0,units:-4};function ri(e){let t=Mn().vec3f(`position`).vec4f16(`previousDelta`).vec4f16(`nextDelta`).f32(`u0`).vec2f16(`lineParameters`);return e.hasVVColor?t.f32(`colorFeatureAttribute`):t.vec4u8(`color`,{glNormalized:!0}),e.hasVVSize?t.f32(`sizeFeatureAttribute`):t.f32(`size`),e.hasVVOpacity&&t.f32(`opacityFeatureAttribute`),gt()&&t.vec4u8(`olidColor`),e.hasAnimation&&t.vec4f16(`timeStamps`),t}var U=class extends xn{constructor(e){super(),this.spherical=e,this.capType=0,this.emissionSource=0,this.animation=2,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVVOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.hasScreenSizePerspective=!1,this.worldSizedImagePattern=!1,this.textureCoordinateType=0,this.occlusionPass=!1,this.hasVVInstancing=!1,this.hasSliceTranslatedView=!0,this.overlayEnabled=!1,this.snowCover=!1}get hasAnimation(){return this.animation!==0}};I([V({count:3})],U.prototype,`capType`,void 0),I([V({count:8})],U.prototype,`emissionSource`,void 0),I([V({count:4})],U.prototype,`animation`,void 0),I([V()],U.prototype,`hasPolygonOffset`,void 0),I([V()],U.prototype,`writeDepth`,void 0),I([V()],U.prototype,`draped`,void 0),I([V()],U.prototype,`stippleEnabled`,void 0),I([V()],U.prototype,`stippleOffColorEnabled`,void 0),I([V()],U.prototype,`stipplePreferContinuous`,void 0),I([V()],U.prototype,`roundJoins`,void 0),I([V()],U.prototype,`applyMarkerOffset`,void 0),I([V()],U.prototype,`hasVVSize`,void 0),I([V()],U.prototype,`hasVVColor`,void 0),I([V()],U.prototype,`hasVVOpacity`,void 0),I([V()],U.prototype,`falloffEnabled`,void 0),I([V()],U.prototype,`innerColorEnabled`,void 0),I([V()],U.prototype,`hasOccludees`,void 0),I([V()],U.prototype,`occluder`,void 0),I([V()],U.prototype,`terrainDepthTest`,void 0),I([V()],U.prototype,`cullAboveTerrain`,void 0),I([V()],U.prototype,`wireframe`,void 0),I([V()],U.prototype,`discardInvisibleFragments`,void 0),I([V()],U.prototype,`hasScreenSizePerspective`,void 0),I([V()],U.prototype,`worldSizedImagePattern`,void 0);var ii=class extends Lt{constructor(e,t){super(e,oi),this.produces=new Map([[2,e=>at(e)||tt(e)&&this.parameters.renderOccluded===8],[3,e=>it(e)],[11,e=>ot(e)&&this.parameters.renderOccluded===8],[12,e=>ot(e)&&this.parameters.renderOccluded===8],[4,e=>tt(e)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[9,e=>tt(e)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[20,e=>rt(e)]]),this._configuration=new U(t)}getConfiguration(e,t){super.getConfiguration(e,t,this._configuration);let n=t.slot===20,r=this.parameters.stipplePattern!=null&&this.parameters.stippleTexture!=null&&e!==8,i=r&&n&&this.parameters.isImagePattern();return this._configuration.draped=n,this._configuration.stippleEnabled=r,this._configuration.stippleOffColorEnabled=r&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=r&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join===`round`,this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&ui(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasVVSize=this.parameters.hasVVSize,this._configuration.hasVVColor=this.parameters.hasVVColor,this._configuration.hasVVOpacity=this.parameters.hasVVOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=t.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===8,this._configuration.terrainDepthTest=t.terrainDepthTest&&tt(e),this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration.animation=this.parameters.animation,this._configuration.emissionSource=+!!this.hasEmissions,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective&&!i,this._configuration.worldSizedImagePattern=i,this._configuration}get visible(){return this.parameters.color[3]>=.003913894324853229||this.parameters.stipplePattern!=null&&(this.parameters.stippleOffColor?.[3]??0)>.003913894324853229}setParameters(e,t){e.animation=this.parameters.animation,super.setParameters(e,t)}intersectDraped({attributes:e,screenToWorldRatio:t},n,r,i,a){if(!n.options.selectionMode)return;let o=e.get(`size`),s=this.parameters.width;if(this.parameters.vvSize){let t=e.get(`sizeFeatureAttribute`).data[0];Number.isNaN(t)?s*=this.parameters.vvSize.fallback[0]:s*=b(this.parameters.vvSize.offset[0]+t*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else o&&(s*=o.data[0]);let c=r[0],l=r[1],u=(s/2+4)*t,d=Number.MAX_VALUE,f=0,p=e.get(`position`).data,m=li(this.parameters,e)?p.length-2:p.length-5;for(let e=0;e<m;e+=3){let t=p[e],n=p[e+1],r=(e+3)%p.length,i=c-t,a=l-n,o=p[r]-t,s=p[r+1]-n,u=b((o*i+s*a)/(o*o+s*s),0,1),m=o*u-i,h=s*u-a,g=m*m+h*h;g<d&&(d=g,f=e/3)}d<u*u&&i(a.distance,a.normal,f)}intersect(e,n,r,i,a,o){let{options:s,camera:c,rayBegin:l,rayEnd:u}=r;if(!s.selectionMode||!e.visible||!c)return;if(!qe(n))return void E.getLogger(`esri.views.3d.webgl-engine.materials.RibbonLineMaterial`).error(`intersection assumes a translation-only matrix`);let d=e.attributes,f=d.get(`position`).data,p=this.parameters.width;if(this.parameters.vvSize){let e=d.get(`sizeFeatureAttribute`).data[0];Number.isNaN(e)||(p*=b(this.parameters.vvSize.offset[0]+e*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0]))}else d.has(`size`)&&(p*=d.get(`size`).data[0]);let h=pi;De(h,r.point);let g=p*c.pixelRatio/2+4*c.pixelRatio;m(bi[0],h[0]-g,h[1]+g,0),m(bi[1],h[0]+g,h[1]+g,0),m(bi[2],h[0]+g,h[1]-g,0),m(bi[3],h[0]-g,h[1]-g,0);for(let e=0;e<4;e++)if(!c.unprojectFromRenderScreen(bi[e],xi[e]))return;Be(c.eye,xi[0],xi[1],Si),Be(c.eye,xi[1],xi[2],Ci),Be(c.eye,xi[2],xi[3],wi),Be(c.eye,xi[3],xi[0],Ti);let _=Number.MAX_VALUE,v=0,S=li(this.parameters,d)?f.length-2:f.length-5;for(let e=0;e<S;e+=3){W[0]=f[e]+n[12],W[1]=f[e+1]+n[13],W[2]=f[e+2]+n[14];let t=(e+3)%f.length;if(G[0]=f[t]+n[12],G[1]=f[t+1]+n[13],G[2]=f[t+2]+n[14],Ie(Si,W)<0&&Ie(Si,G)<0||Ie(Ci,W)<0&&Ie(Ci,G)<0||Ie(wi,W)<0&&Ie(wi,G)<0||Ie(Ti,W)<0&&Ie(Ti,G)<0)continue;let r=c.projectToRenderScreen(W,mi),i=c.projectToRenderScreen(G,hi);if(r==null||i==null)continue;if(r[2]<0&&i[2]>0){x(di,W,G);let e=c.frustum;if(y(di,di,-Ie(e[4],W)/fe(di,Re(e[4]))),j(W,W,di),!c.projectToRenderScreen(W,r))continue}else if(r[2]>0&&i[2]<0){x(di,G,W);let e=c.frustum;if(y(di,di,-Ie(e[4],G)/fe(di,Re(e[4]))),j(G,G,di),!c.projectToRenderScreen(G,i))continue}else if(r[2]<0&&i[2]<0)continue;r[2]=0,i[2]=0;let a=_e(A(r,i,vi),h);a<_&&(_=a,P(gi,W),P(_i,G),v=e/3)}if(_<g*g){let e=Number.MAX_VALUE;if(ae(A(gi,_i,vi),A(l,u,yi),fi)){x(fi,fi,l);let n=Ee(fi);y(fi,fi,1/n),e=n/t(l,u)}o(e,fi,v)}}get hasEmissions(){return this.parameters.emissiveStrength>0}createBufferWriter(){return new si(ri(this.parameters),this.parameters)}createGLMaterial(e){return new ai(e)}validateParameters(e){e.join!==`miter`&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}update(e){return!!this.parameters.hasAnimation&&(this.setParameters({timeElapsed:l(e.time)},!1),e.dt!==0)}},ai=class extends zt{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures?.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){let{stipplePattern:t}=this._material.parameters;return this._stipplePattern!==t&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(t,this._stipplePattern)}),this._stipplePattern=t),this.getTechnique(ti,e)}},oi=class extends sn{constructor(){super(...arguments),this._width=0,this.color=a,this.join=`miter`,this.cap=0,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1,this.timeElapsed=D(0),this.animation=0,this.animationSpeed=1,this.trailLength=1,this.startTime=D(0),this.endTime=D(1/0),this.emissiveStrength=0}get width(){return this.isImagePattern()?this.stipplePattern.width:this._width}set width(e){this._width=e}get transparent(){return this.color[3]<1||this.hasAnimation||this.stipplePattern!=null&&(this.stippleOffColor?.[3]??0)<1}get hasAnimation(){return this.animation!==0}isImagePattern(){return ur(this.stipplePattern)&&this.stippleTexture!=null}},si=class{constructor(e,t){this.layout=e,this._parameters=t;let n=+!!t.stipplePattern;switch(this._parameters.join){case`miter`:case`bevel`:this.numJoinSubdivisions=n;break;case`round`:this.numJoinSubdivisions=1+n}}_isClosed(e){return li(this._parameters,e)}allocate(e){return this.layout.createBuffer(e)}elementCount(e){let t=e.get(`position`).indices.length/2+1,n=this._isClosed(e),r=n?2:4;return r+=((n?t:t-1)-+!n)*(2*this.numJoinSubdivisions+4),r+=2,this._parameters.wireframe&&(r=2+4*(r-2)),r}write(e,n,r,i,a,o){let s=this.layout,c=r.get(`position`),l=c.indices,u=c.data.length/3,d=r.get(`distanceToStart`)?.data;l&&l.length!==2*(u-1)&&console.warn(`RibbonLineMaterial does not support indices`);let f=s.fields.has(`sizeFeatureAttribute`),h=1,g=null;if(f){let e=r.get(`sizeFeatureAttribute`);e.data.length===1?h=e.data[0]:g=e.data}else h=r.get(`size`)?.data[0]??1;let _=[1,1,1,1],v=0,y=null,b=s.fields.has(`colorFeatureAttribute`);if(b){let e=r.get(`colorFeatureAttribute`);e.data.length===1?v=e.data[0]:y=e.data}else _=r.get(`color`)?.data??_;let x=r.get(`timeStamps`)?.data,S=x&&s.fields.has(`timeStamps`),C=s.fields.has(`opacityFeatureAttribute`),w=0,T=null;if(C){let e=r.get(`opacityFeatureAttribute`);e.data.length===1?w=e.data[0]:T=e.data}let E=new Float32Array(a.buffer),D=Je(a.buffer),O=new Uint8Array(a.buffer),ee=s.stride/4,k=o*ee,te=k,A=0,j=d?(e,t,n)=>A=d[n]:(e,n,r)=>A+=t(e,n),ne=E.BYTES_PER_ELEMENT/D.BYTES_PER_ELEMENT,re=4/ne,ie=gt(),N=(e,t,n,r,a,o,s,c)=>{E[k++]=t[0],E[k++]=t[1],E[k++]=t[2],Zt(e,t,D,k*ne),k+=re,Zt(n,t,D,k*ne),k+=re,E[k++]=c;let l=k*ne;if(D[l++]=a,D[l++]=o,k=Math.ceil(l/ne),b)E[k]=y?.[s]??v;else{let e=Math.min(4*s,_.length-4),t=4*k;O[t]=255*_[e],O[t+1]=255*_[e+1],O[t+2]=255*_[e+2],O[t+3]=255*_[e+3]}if(k++,E[k++]=g?.[s]??h,C&&(E[k++]=T?.[s]??w),ie){let e=4*k;i?(O[e++]=i[0],O[e++]=i[1],O[e++]=i[2],O[e++]=i[3]):(O[e++]=0,O[e++]=0,O[e++]=0,O[e++]=0),k=Math.ceil(.25*e)}S&&(l=k*ne,D[l++]=r[0],D[l++]=r[1],D[l++]=r[2],D[l++]=r[3],k=Math.ceil(l/ne))};k+=ee,m(q,c.data[0],c.data[1],c.data[2]),S&&p(Y,x[0],x[1],x[2],x[3]),e&&M(q,q,e);let ae=this._isClosed(r);if(ae){let t=c.data.length-3;m(K,c.data[t],c.data[t+1],c.data[t+2]),e&&M(K,K,e)}else m(J,c.data[3],c.data[4],c.data[5]),e&&M(J,J,e),N(q,q,J,Y,1,-4,0,0),N(q,q,J,Y,1,4,0,0),P(K,q),P(q,J),S&&p(Y,x[4],x[5],x[6],x[7]);let oe=+!ae,se=ae?u:u-1;for(let t=oe;t<se;t++){let n=(t+1)%u*3;m(J,c.data[n],c.data[n+1],c.data[n+2]),e&&M(J,J,e),j(K,q,t),N(K,q,J,Y,0,-1,t,A),N(K,q,J,Y,0,1,t,A);let r=this.numJoinSubdivisions;for(let e=0;e<r;++e){let n=(e+1)/(r+1);N(K,q,J,Y,n,-1,t,A),N(K,q,J,Y,n,1,t,A)}if(N(K,q,J,Y,1,-2,t,A),N(K,q,J,Y,1,2,t,A),P(K,q),P(q,J),S){let e=(t+1)%u*4;p(Y,x[e],x[e+1],x[e+2],x[e+3])}}return ae?(m(J,c.data[3],c.data[4],c.data[5]),e&&M(J,J,e),A=j(K,q,se),N(K,q,J,Y,0,-1,oe,A),N(K,q,J,Y,0,1,oe,A)):(A=j(K,q,se),N(K,q,q,Y,0,-5,se,A),N(K,q,q,Y,0,5,se,A)),ci(E,te+ee,E,te,ee),k=ci(E,k-ee,E,k,ee),this._parameters.wireframe&&this._addWireframeVertices(a,te,k,ee),null}_addWireframeVertices(e,t,n,r){let i=new Float32Array(e.buffer,n*Float32Array.BYTES_PER_ELEMENT),a=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,n-t),o=0,s=e=>o=ci(a,e,i,o,r);for(let e=0;e<a.length-1;e+=2*r)s(e),s(e+2*r),s(e+1*r),s(e+2*r),s(e+1*r),s(e+3*r)}};function ci(e,t,n,r,i){for(let a=0;a<i;a++)n[r++]=e[t++];return r}function li(e,t){return e.isClosed?t.get(`position`).indices.length>2:!1}function ui(e){return e.anchor===1&&e.hideOnShortSegments&&e.placement===`begin-end`&&e.worldSpace}var W=T(),G=T(),di=T(),fi=T(),pi=T(),mi=N(),hi=N(),gi=T(),_i=T(),vi=xe(),yi=xe(),K=T(),q=T(),J=T(),Y=Ce(),bi=[N(),N(),N(),N()],xi=[T(),T(),T(),T()],Si=ze(),Ci=ze(),wi=ze(),Ti=ze(),Ei=class{constructor(e){this._originSR=e,this._rootOriginId=`root/`+ke(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5,this._baselineDistance=.5*this._gridSize;let t=this._baselineDistance*Di;this._baselineObjectSize=t/Oi}getOrigin(e){let t=this._origins.get(this._rootOriginId);if(t==null){let t=or.rootOrigin;if(t!=null)return this._origins.set(this._rootOriginId,ir(t[0],t[1],t[2],this._rootOriginId)),this.getOrigin(e);let n=ir(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,n),n}let n=this._gridSize,r=Math.round(e[0]/n),i=Math.round(e[1]/n),a=Math.round(e[2]/n),o=`${r}/${i}/${a}`,s=this._origins.get(o),c=.5*n;if(x(X,e,t.vec3),X[0]=Math.abs(X[0]),X[1]=Math.abs(X[1]),X[2]=Math.abs(X[2]),X[0]<c&&X[1]<c&&X[2]<c){if(s){let t=Math.max(...X);if(x(X,e,s.vec3),X[0]=Math.abs(X[0]),X[1]=Math.abs(X[1]),X[2]=Math.abs(X[2]),Math.max(...X)<t)return s}return t}return s||(s=ir(r*n,i*n,a*n,o),this._origins.set(o,s)),s}needsOriginUpdate(e,n,r){let i=t(e.vec3,n),a=Math.max(1,r/this._baselineObjectSize);return i>this._baselineDistance*a}_drawOriginBox(e,t=w(1,1,0,1)){let n=window.view,r=n.stage,i=t.toString();if(!this._objects.has(i)){this._material=new ii({width:2,color:t},!1);let e=new nr(r,{pickable:!1}),n=new qn({castShadow:!1});e.add(n),this._objects.set(i,n)}let a=this._objects.get(i),o=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],s=o.length,c=Array(3*s),l=[],u=.5*this._gridSize;for(let t=0;t<s;t++)c[3*t]=e[0]+(1&o[t]?u:-u),c[3*t+1]=e[1]+(2&o[t]?u:-u),c[3*t+2]=e[2]+(4&o[t]?u:-u),t>0&&l.push(t-1,t);oe(c,this._originSR,0,c,n.renderSpatialReference,0,s);let d=new xt(this._material,[[`position`,new L(c,l,3,!0)]],null,2);a.addGeometry(d)}get test(){}},X=T(),Di=2**-23,Oi=.05;function ki(e,t=!1){return e<=1024?t?Array(e).fill(0):Array(e):Je(e)}function Ai(e,t,n=null){let r=[],i=t.mapPositions,a=ji(t,r),o=a.data,s=a.indices.length,c=Ue(s);return Mi(t,r,c),Fi(t,r,c),Ni(t,r,c),Pi(t,r,a.indices,c),Ii(t,r,a.indices,c),Li(t,r),Ri(t,r,a.indices,c),zi(t,r,o),new xt(e,r,i,2,n)}function ji(e,t){let{attributeData:{position:n},removeDuplicateStartEnd:r}=e,i=Bi(n)&&r,a=n.length/3-!!i,o=Array(2*(a-1)),s=i?n.slice(0,-3):n,c=0;for(let e=0;e<a-1;e++)o[c++]=e,o[c++]=e+1;let l=new L(s,o,3,i);return t.push([`position`,l]),l}function Mi(e,t,n){if(e.attributeData.colorFeature!=null)return;let r=e.attributeData.color;t.push([`color`,new L(r??a,n,4)])}function Ni(e,t,n){e.attributeData.normal&&t.push([`normal`,new L(e.attributeData.normal,n,3)])}function Pi(e,t,n,r){let i=e.attributeData.colorFeature;i!=null&&(typeof i==`number`?t.push([`colorFeatureAttribute`,new L([i],r,1,!0)]):t.push([`colorFeatureAttribute`,new L(i,n,1,!0)]))}function Fi(e,t,n){e.attributeData.sizeFeature??t.push([`size`,new L([e.attributeData.size??1],n,1,!0)])}function Ii(e,t,n,r){let i=e.attributeData.sizeFeature;i!=null&&(typeof i==`number`?t.push([`sizeFeatureAttribute`,new L([i],r,1,!0)]):t.push([`sizeFeatureAttribute`,new L(i,n,1,!0)]))}function Li(e,t){let{attributeData:{position:n,timeStamps:r}}=e;if(!r)return;let i=n.length/3,a=Array(2*(i-1)),o=0;for(let e=0;e<i-1;e++)a[o++]=e,a[o++]=e+1;t.push([`timeStamps`,new L(r,a,4,!0)])}function Ri(e,t,n,r){let i=e.attributeData.opacityFeature;i!=null&&(typeof i==`number`?t.push([`opacityFeatureAttribute`,new L([i],r,1,!0)]):t.push([`opacityFeatureAttribute`,new L(i,n,1,!0)]))}function zi(e,t,n){if(e.overlayInfo==null||e.overlayInfo.renderCoordsHelper.viewingMode!==1||!e.overlayInfo.spatialReference.isGeographic)return;let r=_(n.length),i=ce(e.overlayInfo.spatialReference);for(let e=0;e<r.length;e+=3)ue(n,e,r,e,i);let a=n.length/3,o=Pn(a+1),s=Vi,c=Hi,l=0,d=0;u(s,r[d++],r[d++]),d++,o[0]=0;for(let e=1;e<a+1;++e)e===a&&(d=0),u(c,r[d++],r[d++]),d++,l+=ne(s,c),o[e]=l,[s,c]=[c,s];t.push([`distanceToStart`,new L(o,t[0][1].indices,1,!0)])}function Bi(e){let t=e.length;return e[0]===e[t-3]&&e[1]===e[t-2]&&e[2]===e[t-1]}var Vi=d(),Hi=d();function Ui(e,t){let n=ki(e.length*4),r=e[0],i=e[e.length-1];for(let a=0;a<e.length;a++)n[a*4]=e[a],n[a*4+1]=r,n[a*4+2]=i,n[a*4+3]=t+.5;return n}function Wi(e,t){let n=e[t],r=e[t+1],i=e[t+2];return Math.sqrt(n*n+r*r+i*i)}function Gi(e,t){let n=e[t],r=e[t+1],i=e[t+2],a=1/Math.sqrt(n*n+r*r+i*i);e[t]*=a,e[t+1]*=a,e[t+2]*=a}function Ki(e,t,n){e[t]*=n,e[t+1]*=n,e[t+2]*=n}function qi(e,t,n,r,i,a=t){(i||=e)[a]=e[t]+n[r],i[a+1]=e[t+1]+n[r+1],i[a+2]=e[t+2]+n[r+2]}function Ji(){return Xi??=Yi(),Xi}function Yi(){return new yt([[`uv0`,new L([0,0,0,255,255,0,255,255],[0,1,2,3],2,!0)]])}var Xi=null,Zi=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],Qi=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],$i=[0,0,1,0,1,1,0,1],ea=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],ta=Array(36);for(let e=0;e<6;e++)for(let t=0;t<6;t++)ta[6*e+t]=e;var na=Array(36);for(let e=0;e<6;e++)na[6*e]=0,na[6*e+1]=1,na[6*e+2]=2,na[6*e+3]=2,na[6*e+4]=3,na[6*e+5]=0;function ra(e,t){Array.isArray(t)||(t=[t,t,t]);let n=Array(24);for(let e=0;e<8;e++)n[3*e]=Zi[e][0]*t[0],n[3*e+1]=Zi[e][1]*t[1],n[3*e+2]=Zi[e][2]*t[2];return new xt(e,[[`position`,new L(n,ea,3,!0)],[`normal`,new L(Qi,ta,3)],[`uv0`,new L($i,na,2)]])}var ia=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],aa=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],oa=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],sa=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function ca(e,t){Array.isArray(t)||(t=[t,t,t]);let n=Array(18);for(let e=0;e<6;e++)n[3*e]=ia[e][0]*t[0],n[3*e+1]=ia[e][1]*t[1],n[3*e+2]=ia[e][2]*t[2];return new xt(e,[[`position`,new L(n,oa,3,!0)],[`normal`,new L(aa,sa,3)]])}var la=B(-.5,0,-.5),ua=B(.5,0,-.5),da=B(0,0,.5),fa=B(0,.5,0),pa=ut(),ma=ut(),ha=ut(),ga=ut(),_a=ut();x(pa,la,fa),x(ma,la,ua),ye(ha,pa,ma),F(ha,ha),x(pa,ua,fa),x(ma,ua,da),ye(ga,pa,ma),F(ga,ga),x(pa,da,fa),x(ma,da,la),ye(_a,pa,ma),F(_a,_a);var va=[la,ua,da,fa],ya=[0,-1,0,ha[0],ha[1],ha[2],ga[0],ga[1],ga[2],_a[0],_a[1],_a[2]],ba=[0,1,2,3,1,0,3,2,1,3,0,2],xa=[0,0,0,1,1,1,2,2,2,3,3,3];function Sa(e,t){Array.isArray(t)||(t=[t,t,t]);let n=Array(12);for(let e=0;e<4;e++)n[3*e]=va[e][0]*t[0],n[3*e+1]=va[e][1]*t[1],n[3*e+2]=va[e][2]*t[2];return new xt(e,[[`position`,new L(n,ba,3,!0)],[`normal`,new L(ya,xa,3)]])}function Ca(e,t,n,r,i={uv:!0}){let a=-Math.PI,o=2*Math.PI,s=-Math.PI/2,c=Math.PI,l=Math.max(3,Math.floor(n)),u=Math.max(2,Math.floor(r)),d=(l+1)*(u+1),f=Pn(3*d),p=Pn(3*d),m=Pn(2*d),h=[],g=0;for(let e=0;e<=u;e++){let n=[],r=e/u,i=s+r*c,d=Math.cos(i);for(let e=0;e<=l;e++){let s=e/l,c=a+s*o,u=Math.cos(c)*d,h=Math.sin(i),_=-Math.sin(c)*d;f[3*g]=u*t,f[3*g+1]=h*t,f[3*g+2]=_*t,p[3*g]=u,p[3*g+1]=h,p[3*g+2]=_,m[2*g]=s,m[2*g+1]=r,n.push(g),++g}h.push(n)}let _=[];for(let e=0;e<u;e++)for(let t=0;t<l;t++){let n=h[e][t],r=h[e][t+1],i=h[e+1][t+1],a=h[e+1][t];e===0?(_.push(n),_.push(i),_.push(a)):e===u-1?(_.push(n),_.push(r),_.push(i)):(_.push(n),_.push(r),_.push(i),_.push(i),_.push(a),_.push(n))}let v=[[`position`,new L(f,_,3,!0)],[`normal`,new L(p,_,3,!0)]];return i.uv&&v.push([`uv0`,new L(m,_,2,!0)]),i.offset&&(v[0][0]=`offset`,v.push([`position`,new L(Float64Array.from(i.offset),Ue(_.length),3,!0)])),new xt(e,v)}function wa(e,t,n,r){return new xt(e,Ta(t,n,r))}function Ta(e,t,n){let r=e,i,a;if(n)i=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],a=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];else{let e=r*(1+Math.sqrt(5))/2;i=[-r,e,0,r,e,0,-r,-e,0,r,-e,0,0,-r,e,0,r,e,0,-r,-e,0,r,-e,e,0,-r,e,0,r,-e,0,-r,-e,0,r],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]}for(let t=0;t<i.length;t+=3)Ki(i,t,e/Wi(i,t));let o={};function s(t,n){t>n&&([t,n]=[n,t]);let r=t.toString()+`.`+n.toString();if(o[r])return o[r];let a=i.length;return i.length+=3,qi(i,3*t,i,3*n,i,a),Ki(i,a,e/Wi(i,a)),a/=3,o[r]=a,a}for(let e=0;e<t;e++){let e=a.length,t=Array(4*e);for(let n=0;n<e;n+=3){let e=a[n],r=a[n+1],i=a[n+2],o=s(e,r),c=s(r,i),l=s(i,e),u=4*n;t[u]=e,t[u+1]=o,t[u+2]=l,t[u+3]=r,t[u+4]=c,t[u+5]=o,t[u+6]=i,t[u+7]=l,t[u+8]=c,t[u+9]=o,t[u+10]=c,t[u+11]=l}a=t,o={}}let c=Nn(i);for(let e=0;e<c.length;e+=3)Gi(c,e);return[[`position`,new L(Nn(i),a,3,!0)],[`normal`,new L(c,a,3,!0)]]}function Ea(e,{normal:t,position:n,color:r,rotation:i,size:a,centerOffsetAndDistance:o,uvi:s,featureAttribute:l,olidColor:u=null}={}){let d=n?pe(n):T(),f=t?pe(t):c(0,0,1),p=r?[r[0],r[1],r[2],r.length>3?r[3]:255]:[255,255,255,255],m=a!=null&&a.length===2?a:[1,1],h=i==null?[0]:[i],g=Ue(1),_=[[`position`,new L(d,g,3,!0)],[`normal`,new L(f,g,3,!0)],[`color`,new L(p,g,4,!0)],[`size`,new L(m,g,2)],[`rotation`,new L(h,g,1,!0)]];if(s&&_.push([`uvi`,new L(s,g,s.length)]),o!=null){let e=[o[0],o[1],o[2],o[3]];_.push([`centerOffsetAndDistance`,new L(e,g,4)])}if(l){let e=[l[0],l[1],l[2],l[3]];_.push([`featureAttribute`,new L(e,g,4)])}return new xt(e,_,null,1,u,void 0,Ji())}function Da(e,t,n,r,i=!0,a=!0){let o=0,s=t,c=e,l=B(0,o,0),u=B(0,o+c,0),d=B(0,-1,0),f=B(0,1,0);r&&(o=c,u=B(0,0,0),l=B(0,o,0),d=B(0,1,0),f=B(0,-1,0));let p=[u,l],m=[d,f],h=n+2,g=Math.sqrt(c*c+s*s);if(r)for(let e=n-1;e>=0;e--){let t=e*(2*Math.PI/n),r=B(Math.cos(t)*s,o,Math.sin(t)*s);p.push(r);let i=B(c*Math.cos(t)/g,-s/g,c*Math.sin(t)/g);m.push(i)}else for(let e=0;e<n;e++){let t=e*(2*Math.PI/n),r=B(Math.cos(t)*s,o,Math.sin(t)*s);p.push(r);let i=B(c*Math.cos(t)/g,s/g,c*Math.sin(t)/g);m.push(i)}let _=[],v=[];if(i){for(let e=3;e<p.length;e++)_.push(1),_.push(e-1),_.push(e),v.push(0),v.push(0),v.push(0);_.push(p.length-1),_.push(2),_.push(1),v.push(0),v.push(0),v.push(0)}if(a){for(let e=3;e<p.length;e++)_.push(e),_.push(e-1),_.push(0),v.push(e),v.push(e-1),v.push(1);_.push(0),_.push(2),_.push(p.length-1),v.push(1),v.push(2),v.push(m.length-1)}let y=Pn(3*h);for(let e=0;e<h;e++)y[3*e]=p[e][0],y[3*e+1]=p[e][1],y[3*e+2]=p[e][2];let b=Pn(3*h);for(let e=0;e<h;e++)b[3*e]=m[e][0],b[3*e+1]=m[e][1],b[3*e+2]=m[e][2];return[[`position`,new L(y,_,3,!0)],[`normal`,new L(b,v,3,!0)]]}function Oa(e,t,n,r,i,a=!0,o=!0){return new xt(e,Da(t,n,r,i,a,o))}function ka(e,t,n,r,i,a,o){let s=i?lt(i):B(1,0,0),c=a?lt(a):B(0,0,0);o??=!0;let l=ut();F(l,s);let u=ut();y(u,l,Math.abs(t));let d=ut();y(d,u,-.5),j(d,d,c);let f=B(0,1,0);Math.abs(1-fe(l,f))<.2&&m(f,0,0,1);let p=ut();ye(p,l,f),F(p,p),ye(f,p,l);let h=2*r+(o?2:0),g=r+(o?2:0),_=Pn(3*h),v=Pn(3*g),b=Pn(2*h),x=Array(3*r*(o?4:2)),S=Array(3*r*(o?4:2));o&&(_[3*(h-2)]=d[0],_[3*(h-2)+1]=d[1],_[3*(h-2)+2]=d[2],b[2*(h-2)]=0,b[2*(h-2)+1]=0,_[3*(h-1)]=_[3*(h-2)]+u[0],_[3*(h-1)+1]=_[3*(h-2)+1]+u[1],_[3*(h-1)+2]=_[3*(h-2)+2]+u[2],b[2*(h-1)]=1,b[2*(h-1)+1]=1,v[3*(g-2)]=-l[0],v[3*(g-2)+1]=-l[1],v[3*(g-2)+2]=-l[2],v[3*(g-1)]=l[0],v[3*(g-1)+1]=l[1],v[3*(g-1)+2]=l[2]);let C=(e,t,n)=>{x[e]=t,S[e]=n},w=0,T=ut(),E=ut();for(let e=0;e<r;e++){let t=e*(2*Math.PI/r);y(T,f,Math.sin(t)),y(E,p,Math.cos(t)),j(T,T,E),v[3*e]=T[0],v[3*e+1]=T[1],v[3*e+2]=T[2],y(T,T,n),j(T,T,d),_[3*e]=T[0],_[3*e+1]=T[1],_[3*e+2]=T[2],b[2*e]=e/r,b[2*e+1]=0,_[3*(e+r)]=_[3*e]+u[0],_[3*(e+r)+1]=_[3*e+1]+u[1],_[3*(e+r)+2]=_[3*e+2]+u[2],b[2*(e+r)]=e/r,b[2*e+1]=1;let i=(e+1)%r;C(w++,e,e),C(w++,e+r,e),C(w++,i,i),C(w++,i,i),C(w++,e+r,e),C(w++,i+r,i)}if(o){for(let e=0;e<r;e++){let t=(e+1)%r;C(w++,h-2,g-2),C(w++,e,g-2),C(w++,t,g-2)}for(let e=0;e<r;e++){let t=(e+1)%r;C(w++,e+r,g-1),C(w++,h-1,g-1),C(w++,t+r,g-1)}}return new xt(e,[[`position`,new L(_,x,3,!0)],[`normal`,new L(v,S,3,!0)],[`uv0`,new L(b,x,2,!0)]])}function Aa(e,t,n,r,i,a){r||=10,i=i==null||i,Ge(t.length>1);let o=[[0,0,0]],s=[],c=[];for(let e=0;e<r;e++){s.push([0,-e-1,-(e+1)%r-1]);let t=e/r*2*Math.PI;c.push([Math.cos(t)*n,Math.sin(t)*n])}return ja(e,c,t,o,s,i,a)}function ja(e,t,n,r,i,a,o=B(0,0,0)){let s=t.length,c=Pn(n.length*s*3+(6*r.length||0)),l=Pn(n.length*s*3+(r?6:0)),u=[],d=[],f=0,p=0,h=T(),g=T(),_=T(),v=T(),b=T(),S=T(),C=T(),w=T(),E=T(),D=T(),O=T(),ee=T(),k=T(),te=ze();m(E,0,1,0),x(g,n[1],n[0]),F(g,g),a?(j(w,n[0],o),F(_,w)):m(_,0,0,1),La(g,_,E,E,b,_,Ra),P(v,_),P(ee,b);for(let e=0;e<r.length;e++)y(S,b,r[e][0]),y(w,_,r[e][2]),j(S,S,w),j(S,S,n[0]),c[f++]=S[0],c[f++]=S[1],c[f++]=S[2];l[p++]=-g[0],l[p++]=-g[1],l[p++]=-g[2];for(let e=0;e<i.length;e++)u.push(i[e][0]>0?i[e][0]:-i[e][0]-1+r.length),u.push(i[e][1]>0?i[e][1]:-i[e][1]-1+r.length),u.push(i[e][2]>0?i[e][2]:-i[e][2]-1+r.length),d.push(0),d.push(0),d.push(0);let A=r.length,ne=r.length-1;for(let e=0;e<n.length;e++){let r=!1;e>0&&(P(h,g),e<n.length-1?(x(g,n[e+1],n[e]),F(g,g)):r=!0,j(D,h,g),F(D,D),j(O,n[e-1],v),Le(n[e],D,te),Fe(te,he(O,h),w)?(x(w,w,n[e]),F(_,w),ye(b,D,_),F(b,b)):La(D,v,ee,E,b,_,Ra),P(v,_),P(ee,b)),a&&(j(w,n[e],o),F(k,w));for(let i=0;i<s;i++)if(y(S,b,t[i][0]),y(w,_,t[i][1]),j(S,S,w),F(C,S),l[p++]=C[0],l[p++]=C[1],l[p++]=C[2],j(S,S,n[e]),c[f++]=S[0],c[f++]=S[1],c[f++]=S[2],!r){let e=(i+1)%s;u.push(A+i),u.push(A+s+i),u.push(A+e),u.push(A+e),u.push(A+s+i),u.push(A+s+e);for(let e=0;e<6;e++){let t=u.length-6;d.push(u[t+e]-ne)}}A+=s}let re=n[n.length-1];for(let e=0;e<r.length;e++)y(S,b,r[e][0]),y(w,_,r[e][1]),j(S,S,w),j(S,S,re),c[f++]=S[0],c[f++]=S[1],c[f++]=S[2];let ie=p/3;l[p++]=g[0],l[p++]=g[1],l[p++]=g[2];let M=A-s;for(let e=0;e<i.length;e++)u.push(i[e][0]>=0?A+i[e][0]:-i[e][0]-1+M),u.push(i[e][2]>=0?A+i[e][2]:-i[e][2]-1+M),u.push(i[e][1]>=0?A+i[e][1]:-i[e][1]-1+M),d.push(ie),d.push(ie),d.push(ie);return new xt(e,[[`position`,new L(c,u,3,!0)],[`normal`,new L(l,d,3,!0)]])}function Ma(e,t,n,r,i){let a=_(3*t.length),o=Array(2*(t.length-1)),s=0,c=0;for(let e=0;e<t.length;e++){for(let n=0;n<3;n++)a[s++]=t[e][n];e>0&&(o[c++]=e-1,o[c++]=e)}let l=[[`position`,new L(a,o,3,!0)]];if(n?.length===t.length&&n[0].length===3){let e=Pn(3*n.length),r=0;for(let i=0;i<t.length;i++)for(let t=0;t<3;t++)e[r++]=n[i][t];l.push([`normal`,new L(e,o,3,!0)])}if(r&&l.push([`color`,new L(r,He(r.length/4),4)]),i?.length===t.length){let e=Ui(i,1);l.push([`timeStamps`,new L(e,o,4,!0)])}return new xt(e,l,null,2)}function Na(e,t,n,r,i,a=0){let o=Array(18),s=[[-n,a,i/2],[r,a,i/2],[0,t+a,i/2],[-n,a,-i/2],[r,a,-i/2],[0,t+a,-i/2]],c=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let e=0;e<6;e++)o[3*e]=s[e][0],o[3*e+1]=s[e][1],o[3*e+2]=s[e][2];return new xt(e,[[`position`,new L(o,c,3,!0)]])}function Pa(e,t){let n=e.getMutableAttribute(`position`).data;for(let e=0;e<n.length;e+=3){let r=n[e],i=n[e+1],a=n[e+2];m(za,r,i,a),M(za,za,t),n[e]=za[0],n[e+1]=za[1],n[e+2]=za[2]}}function Fa(e,t=e){let n=e.attributes,r=n.get(`position`).data,i=n.get(`normal`).data;if(i){let e=t.getMutableAttribute(`normal`).data;for(let t=0;t<i.length;t+=3){let n=i[t+1];e[t+1]=-i[t+2],e[t+2]=n}}if(r){let e=t.getMutableAttribute(`position`).data;for(let t=0;t<r.length;t+=3){let n=r[t+1];e[t+1]=-r[t+2],e[t+2]=n}}}function Ia(e,t,n,r,i){return!(Math.abs(fe(t,e))>i)&&(ye(n,e,t),F(n,n),ye(r,n,e),F(r,r),!0)}function La(e,t,n,r,i,a,o){return Ia(e,t,i,a,o)||Ia(e,n,i,a,o)||Ia(e,r,i,a,o)}var Ra=.99619469809,za=T();function Ba(e){return e.type===`point`}var Va=class{constructor(e,t=null,n=0){this.array=e,this.spatialReference=t,this.offset=n}};function Ha(e){return`array`in e}function Ua(e,t,n=`ground`){if(Ba(t))return e.getElevation(t.x,t.y,t.z||0,t.spatialReference,n);if(Ha(t)){let r=t.offset;return e.getElevation(t.array[r++],t.array[r++],t.array[r]||0,t.spatialReference??e.spatialReference,n)}return e.getElevation(t[0],t[1],t[2]||0,e.spatialReference,n)}function Wa(e,t,n,r,i,a,o,s,c,l,u){let d=io[u.mode],f,p,m=0;if(oe(e,t,n,r,c.spatialReference,i,s))return d?.requiresAlignment(u)?(m=d.applyElevationAlignmentBuffer(r,i,a,o,s,c,l,u),f=a,p=o):(f=r,p=i),oe(f,c.spatialReference,p,a,l.spatialReference,o,s)?m:void 0}function Ga(e,t,n,r,i){let a=(Ba(e)?e.z:Ha(e)?e.array[e.offset+2]:e[2])||0;switch(n.mode){case`on-the-ground`:{let n=Ua(t,e,`ground`)??0;i.verticalDistanceToGround=0,i.sampledElevation=n,i.z=n;return}case`relative-to-ground`:{let o=Ua(t,e,`ground`)??0,s=n.geometryZWithOffset(a,r);i.verticalDistanceToGround=s,i.sampledElevation=o,i.z=s+o;return}case`relative-to-scene`:{let o=Ua(t,e,`scene`)??0,s=n.geometryZWithOffset(a,r);i.verticalDistanceToGround=s,i.sampledElevation=o,i.z=s+o;return}case`absolute-height`:{let o=n.geometryZWithOffset(a,r),s=Ua(t,e,`ground`)??0;i.verticalDistanceToGround=o-s,i.sampledElevation=s,i.z=o;return}default:i.z=0;return}}function Ka(e,t,n,r){return Ga(e,t,n,r,oo),oo.z}function qa(e,t,n){return t===`on-the-ground`&&n===`on-the-ground`?e.staysOnTheGround:t===n||t!==`on-the-ground`&&n!==`on-the-ground`?t==null||n==null?e.definedChanged:1:e.onTheGroundChanged}function Ja(e){return e===`relative-to-ground`||e===`relative-to-scene`}function Ya(e){return e!==`absolute-height`}function Xa(e,t,n,r,i){Ga(t,n,i,r,oo),Za(e,oo.verticalDistanceToGround);let a=oo.sampledElevation,o=ee(ao,e.transformation);return so[0]=t.x,so[1]=t.y,so[2]=oo.z,We(t.spatialReference,so,o,r.spatialReference)?e.transformation=o:console.warn(`Could not locate symbol object properly, it might be misplaced`),a}function Za(e,t){for(let n=0;n<e.geometries.length;++n){let r=e.geometries[n].getMutableAttribute(`centerOffsetAndDistance`);r&&r.data[3]!==t&&(r.data[3]=t,e.geometryVertexAttributeUpdated(e.geometries[n],`centerOffsetAndDistance`))}}function Qa(e,t,n,r,i,a){let o=0,s=a.spatialReference;t*=3,r*=3;for(let c=0;c<i;++c){let i=e[t],c=e[t+1],l=e[t+2],u=a.getElevation(i,c,l,s,`ground`)??0;o+=u,n[r]=i,n[r+1]=c,n[r+2]=u,t+=3,r+=3}return o/i}function $a(e,t,n,r,i,a,o,s){let c=0,l=s.calculateOffsetRenderUnits(o),u=s.featureExpressionInfoContext,d=a.spatialReference;t*=3,r*=3;for(let o=0;o<i;++o){let i=e[t],o=e[t+1],s=e[t+2],f=a.getElevation(i,o,s,d,`ground`)??0;c+=f,n[r]=i,n[r+1]=o,n[r+2]=u==null?s+f+l:f+l,t+=3,r+=3}return c/i}function eo(e,t,n,r,i,a,o,s){let c=0,l=s.calculateOffsetRenderUnits(o),u=s.featureExpressionInfoContext,d=a.spatialReference;t*=3,r*=3;for(let o=0;o<i;++o){let i=e[t],o=e[t+1],s=e[t+2],f=a.getElevation(i,o,s,d,`scene`)??0;c+=f,n[r]=i,n[r+1]=o,n[r+2]=u==null?s+f+l:f+l,t+=3,r+=3}return c/i}function to(e){let t=e.meterUnitOffset,n=e.featureExpressionInfoContext;return t!==0||n!=null}function no(e,t,n,r,i,a,o,s){let c=s.calculateOffsetRenderUnits(o),l=s.featureExpressionInfoContext;t*=3,r*=3;for(let a=0;a<i;++a){let i=e[t],a=e[t+1],o=e[t+2];n[r]=i,n[r+1]=a,n[r+2]=l==null?o+c:c,t+=3,r+=3}return 0}var ro=class{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}},io={"absolute-height":{applyElevationAlignmentBuffer:no,requiresAlignment:to},"on-the-ground":{applyElevationAlignmentBuffer:Qa,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:$a,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:eo,requiresAlignment:()=>!0}},ao=h(),oo=new ro,so=T(),co=()=>E.getLogger(`esri.views.3d.layers.graphics.featureExpressionInfoUtils`);function lo(e){return{cachedResult:e.cachedResult,arcade:e.arcade?{func:e.arcade.func,context:e.arcade.modules.arcadeUtils.createExecContext(null,{sr:e.arcade.context.spatialReference}),modules:e.arcade.modules}:null}}async function uo(e,t,n,r){let i=e?.expression;if(typeof i!=`string`)return null;let a=vo(i);if(a!=null)return{cachedResult:a};let o=await Ne();ve(n);let s=o.arcadeUtils,c=s.createSyntaxTree(i);return s.dependsOnView(c)?(r?.error(`Expressions containing '$view' are not supported on ElevationInfo`),{cachedResult:0}):{arcade:{func:s.createFunction(c),context:s.createExecContext(null,{sr:t}),modules:o}}}function fo(e,t,n){return e.arcadeUtils.createFeature(t.attributes,t.geometry,n)}function po(e,t){if(e!=null&&!_o(e)){if(!t||!e.arcade)return void co().errorOncePerTick(`Arcade support required but not provided`);let n=t;n._geometry&&=st(n._geometry),e.arcade.modules.arcadeUtils.updateExecContext(e.arcade.context,t)}}function mo(e){if(e!=null){if(_o(e))return e.cachedResult;let t=e.arcade,n=t?.modules.arcadeUtils.executeFunction(t.func,t.context);return typeof n!=`number`&&(e.cachedResult=0,n=0),n}return 0}function ho(e,t=!1){let n=e?.featureExpressionInfo,r=n?.expression;return t||r===`0`||(n=null),n??null}var go={cachedResult:0};function _o(e){return e.cachedResult!=null}function vo(e){return e===`0`?0:null}var yo=class e{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit=`meters`,this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.mode=null,this.centerInElevationSR=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=i(e)}get requiresSampledElevationInfo(){return this.mode!==`absolute-height`}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit=`meters`}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,t){let n=this.calculateOffsetRenderUnits(t);return this.featureExpressionInfoContext==null?e+n:n}calculateOffsetRenderUnits(e){let t=this._meterUnitOffset,n=this.featureExpressionInfoContext;return n!=null&&(t+=mo(n)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=C(e.unit)?e.unit:`meters`,this.offsetElevationInfoUnits=e.offset??0}setFeatureExpressionInfoContext(e){this._featureExpressionInfoContext=e}updateFeatureExpressionInfoContextForGraphic(e,t,n){e.arcade?(this._featureExpressionInfoContext=lo(e),this.updateFeatureExpressionFeature(t,n)):this._featureExpressionInfoContext=e}updateFeatureExpressionFeature(e,t){let n=this.featureExpressionInfoContext;n?.arcade&&(n.cachedResult=void 0,po(this._featureExpressionInfoContext,e.geometry?fo(n.arcade.modules,e,t):null))}static fromElevationInfo(t){let n=new e;return t!=null&&n.setFromElevationInfo(t),n}};function bo(e,t){let{vertex:n,fragment:r}=e;e.include(Mt,t),n.include(Rn),n.main.add(R`vec4 posProjCenter;
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
}`)}function xo(e){let t=new ct;if(t.include(zn,e),t.vertex.include(An,e),e.occlusionPass)return t.include(bo,e),t;let{output:n,oitPass:r,hasOcclusionTexture:i,signedDistanceFieldEnabled:a,useVisibilityPixel:o,pixelSnappingEnabled:s,hasEmission:c,hasScreenSizePerspective:l,debugDrawLabelBorder:d,hasVVSize:f,hasVVColor:p,hasRotation:m,occludedFragmentFade:h,sampleSignedDistanceFieldTexelCenter:g}=e;t.include(wt),t.include(fn,e),t.include(_n,e),o&&t.include(Bn);let{vertex:_,fragment:v}=t;v.include(On),t.varyings.add(`vcolor`,`vec4`),t.varyings.add(`vtc`,`vec2`),t.varyings.add(`vsize`,`vec2`);let y=n===8,b=y&&o;b&&t.varyings.add(`voccluded`,`float`),_.uniforms.add(new Yt(`viewport`,e=>e.camera.fullViewport),new qt(`screenOffset`,(e,t)=>u(wo,2*e.screenOffset[0]*t.camera.pixelRatio,2*e.screenOffset[1]*t.camera.pixelRatio)),new qt(`anchorPosition`,e=>Co(e)),new mn(`materialColor`,({color:e})=>e),new et(`materialRotation`,e=>e.rotation),new nt(`tex`,e=>e.texture)),Et(_),a&&(_.uniforms.add(new mn(`outlineColor`,e=>e.outlineColor)),v.uniforms.add(new mn(`outlineColor`,e=>So(e)?e.outlineColor:Te),new et(`outlineSize`,e=>So(e)?e.outlineSize:0))),s&&_.include(Rn),l&&(Ot(_),Ht(_)),d&&t.varyings.add(`debugBorderCoords`,`vec4`),t.attributes.add(`uv0`,`vec2`),t.attributes.add(`uvi`,`vec4`),t.attributes.add(`color`,`vec4`),t.attributes.add(`size`,`vec2`),t.attributes.add(`rotation`,`float`),(f||p)&&t.attributes.add(`featureAttribute`,`vec4`),_.main.add(R`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${In};
      return;
    }

    vec2 inputSize;
    ${z(l,R`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,R`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${z(f,R`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${z(o,R`
        bool visible = testHUDVisibility(posProj);
        if (!visible) {
          vtc = vec2(0.0);
          ${z(d,`debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);`)}
          return;
        }
      `)}
    ${z(b,R`voccluded = visible ? 0.0 : 1.0;`)}
  `);let x=R`
    vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0));
    vec2 texSize = vec2(textureSize(tex, 0));
    uv = mix(vec2(1.0), uv / texSize, lessThan(uv, vec2(${Oo})));
    quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

    ${z(m,R`
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
}`:R`posProj += quadOffset;`;_.main.add(R`
    ${x}
    ${p?`vcolor = interpolateVVColor(featureAttribute.y) * materialColor;`:`vcolor = color * materialColor;`}

    ${z(n===9,R`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${R.float(jn)};
    ${z(a,`alphaDiscard = alphaDiscard && outlineColor.a < ${R.float(jn)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${S}
      gl_Position = posProj;
    }

    vtc = uv;

    ${z(d,R`debugBorderCoords = vec4(uv0, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),v.uniforms.add(new nt(`tex`,e=>e.texture)),h&&!y&&(v.include(an),v.uniforms.add(new En(`depthMap`,e=>e.mainDepth),new et(`occludedOpacity`,e=>e.occludedFragmentOpacity?.value??1))),i&&v.uniforms.add(new En(`texOcclusion`,e=>e.hudOcclusion?.attachment));let C=d?R`(isBorder > 0.0 ? 0.0 : ${R.float(jn)})`:R.float(jn),w=R`
    ${z(d,R`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${z(g,R`
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
          fillPixelColor.a + outlinePixelColor.a < ${R.float(jn)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
                              vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${z(!y,R`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${C}) {
          discard;
        }

        ${z(!y,R`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:R`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${C}) {
            discard;
          }
          ${z(!y,R`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${z(h&&!y,R`
        float zSample = -linearizeDepth(texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x);
        float zFragment = -linearizeDepth(gl_FragCoord.z);
        if (zSample < ${R.float(1-Eo)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `)}
    ${z(i,R`fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;`)}

    ${z(!y&&d,R`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}

    ${z(r===2,R`
    if (fragColor.a < ${R.float(jn)}) {
      discard;
    }`)}
  `;switch(n){case 0:t.outputs.add(`fragColor`,`vec4`,0),c&&t.outputs.add(`fragEmission`,`vec4`,1),r===1&&t.outputs.add(`fragAlpha`,`float`,c?2:1),v.main.add(R`
        ${w}
        // Unlike other materials, the fragment shader outputs premultiplied colors.
        // Disable this for front face rendering for correct OIT compositing.
        ${z(r===2,R`fragColor.rgb /= fragColor.a;`)}
        ${z(c,R`fragEmission = vec4(0.0);`)}
        ${z(r===1,R`fragAlpha = fragColor.a;`)}`);break;case 9:v.main.add(R`
        ${w}
        outputObjectAndLayerIdColor();`);break;case 8:t.include(kn,e),v.main.add(R`
        ${w}
        outputHighlight(${z(b,R`voccluded == 1.0`,R`false`)});`)}return t}function So(e){return e.outlineColor[3]>0&&e.outlineSize>0}function Co(e){return e.textureIsSignedDistanceField?To(e.anchorPosition,e.distanceFieldBoundingBox,wo):De(wo,e.anchorPosition),wo}var wo=d();function To(e,t,n){u(n,e[0]*(t[2]-t[0])+t[0],e[1]*(t[3]-t[1])+t[1])}var Eo=.08,Do=32e3,Oo=R.float(Do),ko=Object.freeze(Object.defineProperty({__proto__:null,build:xo,calculateAnchorPosition:Co,fullUV:Do},Symbol.toStringTag,{value:`Module`})),Ao=class extends pn{constructor(e,t){super(e,t,Fn(Mo).concat(Fn(Fo()))),this.shader=new Gt(ko,()=>Oe(()=>import(`./HUDMaterial.glsl-DsQasftL.js`),__vite__mapDeps([57,2,3,4,1,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,58,55,56]),import.meta.url)),this.primitiveType=t.occlusionPass?Ye.POINTS:Ye.TRIANGLE_STRIP}initializePipeline(e){let{oitPass:t,hasEmission:n,hasPolygonOffset:r,draped:i,output:a,depthTestEnabled:o,occlusionPass:s}=e,c=o&&!i&&t!==1&&!s&&a!==8;return mt({blending:tt(a)?Vt(t,!0):null,depthTest:o&&!i?{func:515}:null,depthWrite:c?dt:null,drawBuffers:Dt(t,n),colorWrite:ft,polygonOffset:r?jo:null})}};Ao=I([Ae(`esri.views.3d.webgl-engine.shaders.HUDMaterialTechnique`)],Ao);var jo={factor:0,units:-4},Mo=Mn().vec2u8(`uv0`,{glNormalized:!0}),No=Mn().vec3f(`position`).vec3f(`normal`).vec4i16(`uvi`).vec4u8(`color`,{glNormalized:!0}).vec2f(`size`).f32(`rotation`).vec4f(`centerOffsetAndDistance`).vec4f(`featureAttribute`),Po=No.clone().vec4u8(`olidColor`);function Fo(){return gt()?Po:No}var Z=class extends xn{constructor(e,t){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.useVisibilityPixel=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.hasOcclusionTexture=!1,this.isFocused=!0,this.olidColorInstanced=!1,this.textureCoordinateType=0,this.emissionSource=0,this.discardInvisibleFragments=!0,this.hasVVInstancing=!1,this.snowCover=!1,this.transparentOccluded=t}};I([V()],Z.prototype,`transparentOccluded`,void 0),I([V()],Z.prototype,`screenCenterOffsetUnitsEnabled`,void 0),I([V()],Z.prototype,`useVisibilityPixel`,void 0),I([V()],Z.prototype,`signedDistanceFieldEnabled`,void 0),I([V()],Z.prototype,`sampleSignedDistanceFieldTexelCenter`,void 0),I([V()],Z.prototype,`hasVVSize`,void 0),I([V()],Z.prototype,`hasVVColor`,void 0),I([V()],Z.prototype,`hasVerticalOffset`,void 0),I([V()],Z.prototype,`hasScreenSizePerspective`,void 0),I([V()],Z.prototype,`hasRotation`,void 0),I([V()],Z.prototype,`debugDrawLabelBorder`,void 0),I([V()],Z.prototype,`hasPolygonOffset`,void 0),I([V()],Z.prototype,`depthTestEnabled`,void 0),I([V()],Z.prototype,`pixelSnappingEnabled`,void 0),I([V()],Z.prototype,`draped`,void 0),I([V()],Z.prototype,`terrainDepthTest`,void 0),I([V()],Z.prototype,`cullAboveTerrain`,void 0),I([V()],Z.prototype,`occlusionPass`,void 0),I([V()],Z.prototype,`occludedFragmentFade`,void 0),I([V()],Z.prototype,`hasOcclusionTexture`,void 0),I([V()],Z.prototype,`isFocused`,void 0);var Io=class extends Lt{constructor(e,t,n=!1){super(e,rs),this.produces=new Map([[14,e=>$e(e)&&!this.parameters.drawAsLabel&&!this._configuration.transparentOccluded],[15,e=>$e(e)&&!this.parameters.drawAsLabel&&this._configuration.transparentOccluded],[16,e=>$e(e)&&this.parameters.drawAsLabel],[13,()=>this.parameters.useVisibilityPixel],[20,e=>this.parameters.draped&&$e(e)]]),this._visible=!0,this._configuration=new Z(t,n)}getConfiguration(e,t){let n=this.parameters.draped;return super.getConfiguration(e,t,this._configuration),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits===`screen`,this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=n,this._configuration.useVisibilityPixel=this.parameters.useVisibilityPixel,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.hasVVSize=!!this.parameters.vvSize,this._configuration.hasVVColor=!!this.parameters.vvColor,this._configuration.occlusionPass=t.slot===13,this._configuration.occludedFragmentFade=!n&&!!this.parameters.occludedFragmentOpacity,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||t.slot===13,tt(e)&&(this._configuration.debugDrawLabelBorder=!!nn.LABELS_SHOW_BORDER),this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.hasOcclusionTexture=this._configuration.transparentOccluded&&t.oitPass!==0,this._configuration}intersect(e,n,r,i,a,o){let{options:{selectionMode:c,hud:l,excludeLabels:u},point:d,camera:f}=r,{parameters:p}=this;if(!c||!l||u&&p.isLabel||!e.visible||!d||!f)return;let h=e.attributes.get(`featureAttribute`),{scaleX:_,scaleY:v}=as(h==null?null:g(h.data,Zo),p,f.pixelRatio),b=e.attributes.get(`position`),S=e.attributes.get(`size`),C=e.attributes.get(`normal`),w=e.attributes.get(`rotation`),E=e.attributes.get(`centerOffsetAndDistance`);Ge(b.size>=3);let D=Co(p),O=this.parameters.centerOffsetUnits===`screen`;for(let e=0;e<b.data.length/b.size;e++){let i=e*b.size;m(Q,b.data[i],b.data[i+1],b.data[i+2]),M(Q,Q,n),M(Q,Q,f.viewMatrix);let a=e*E.size;if(m(Yo,E.data[a],E.data[a+1],E.data[a+2]),!O&&(Q[0]+=Yo[0],Q[1]+=Yo[1],Yo[2]!==0)){let e=Yo[2];F(Yo,Q),x(Q,Q,y(Yo,Yo,e))}let c=e*C.size;m(Ho,C.data[c],C.data[c+1],C.data[c+2]),le(Ho,Ho,ie(qo,n));let{normal:l,cosAngle:u}=zo(Ho,f,Qo);if(Se(Q,Q,l,ss(this.parameters,Q,u,f,Vo)),f.applyProjection(Q,$),$[0]>-1){O&&(Yo[0]||Yo[1])&&($[0]+=Yo[0]*f.pixelRatio,Yo[1]!==0&&($[1]+=Vo.alignmentEvaluator.apply(Yo[1])*f.pixelRatio),f.unapplyProjection($,Q)),$[0]+=this.parameters.screenOffset[0]*f.pixelRatio,$[1]+=this.parameters.screenOffset[1]*f.pixelRatio,$[0]=Math.floor($[0]),$[1]=Math.floor($[1]);let n=e*S.size;ts[0]=S.data[n],ts[1]=S.data[n+1],Vo.evaluator.applyVec2(ts,ts);let i=$o*f.pixelRatio,a=0;p.textureIsSignedDistanceField&&(a=Math.min(p.outlineSize,.5*ts[0])*f.pixelRatio/2),ts[0]*=_,ts[1]*=v;let c=e*w.size,l=p.rotation+w.data[c];if(Bo(d,$[0],$[1],ts,i,a,l,p,D)){let e=r.ray;if(M(Wo,Q,s(Jo,f.viewMatrix)),$[0]=d[0],$[1]=d[1],f.unprojectFromRenderScreen($,Q)){let n=T();P(n,e.direction);let r=1/Ee(n);y(n,n,r),o(t(e.origin,Q)*r,n,-1,Wo)}}}}}intersectDraped(e,t,n,r,i){let a=e.attributes.get(`position`),o=e.attributes.get(`size`),s=e.attributes.get(`rotation`),c=this.parameters,l=Co(c),u=e.attributes.get(`featureAttribute`),{scaleX:d,scaleY:f}=as(u==null?null:g(u.data,Zo),c,e.screenToWorldRatio),p=es*e.screenToWorldRatio;for(let t=0;t<a.data.length/a.size;t++){let u=t*a.size,m=a.data[u],h=a.data[u+1],g=t*o.size;ts[0]=o.data[g],ts[1]=o.data[g+1];let _=0;c.textureIsSignedDistanceField&&(_=Math.min(c.outlineSize,.5*ts[0])*e.screenToWorldRatio/2),ts[0]*=d,ts[1]*=f;let v=t*s.size,y=c.rotation+s.data[v];Bo(n,m,h,ts,p,_,y,c,l)&&r(i.distance,i.normal,-1)}}createBufferWriter(){return new is}applyShaderOffsets(e,t,n,r,i,a,o){le(Uo,n,ie(qo,r));let s=zo(Uo,a,Qo),c=os(Ee(t),a),l=ss(this.parameters,t,s.cosAngle,a,o);Se(t,t,s.normal,l+c),Se(e,e,Uo,l+c);let u=i[3]+l;this._applyPolygonOffsetView(t,s,u,a,t),this._applyCenterOffsetView(t,i,t)}applyShaderOffsetsNDC(e,t,n,r,i){return this._applyCenterOffsetNDC(e,t,n,r),i!=null&&P(i,r),this._applyPolygonOffsetNDC(r,t,n,r),r}_applyPolygonOffsetView(e,t,n,r,i){let a=r.aboveGround?1:-1,o=Math.sign(n);o===0&&(o=a);let s=a*o;if(this.parameters.shaderPolygonOffset<=0)return P(i,e);let c=b(Math.abs(t.cosAngle),.01,1),l=1-Math.sqrt(1-c*c)/c/r.viewport[2];return y(i,e,s>0?l:1/l),i}_applyCenterOffsetView(e,t,n){let r=this.parameters.centerOffsetUnits!==`screen`;return n!==e&&P(n,e),r&&(n[0]+=t[0],n[1]+=t[1],t[2]&&(F(Ho,n),ge(n,n,y(Ho,Ho,t[2])))),n}_applyCenterOffsetNDC(e,t,n,r){let i=this.parameters.centerOffsetUnits!==`screen`;return r!==e&&P(r,e),i||(r[0]+=t[0]/n.fullWidth*2,r[1]+=t[1]/n.fullHeight*2),r}_applyPolygonOffsetNDC(e,t,n,r){let i=this.parameters.shaderPolygonOffset;if(e!==r&&P(r,e),i){let e=n.aboveGround?1:-1,a=e*Math.sign(t[3]);r[2]-=(a||e)*i}return r}set visible(e){this._visible=e}get visible(){let{color:e,outlineSize:t,outlineColor:n}=this.parameters,r=e[3]>=.003913894324853229||t>=.003913894324853229&&n[3]>=.003913894324853229;return this._visible&&r}createGLMaterial(e){return new Lo(e)}calculateRelativeScreenBounds(e,t,n=Pe()){return Ro(this.parameters,e,t,n),n[2]=n[0]+e[0],n[3]=n[1]+e[1],n}},Lo=class extends Kt{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(Ao,e)}};function Ro(e,t,n,r){r[0]=e.anchorPosition[0]*-t[0]+e.screenOffset[0]*n,r[1]=e.anchorPosition[1]*-t[1]+e.screenOffset[1]*n}function zo(e,t,n){return M(n.normal,e,t.viewInverseTransposeMatrix),n.cosAngle=fe(n.normal,ns),n}function Bo(t,n,r,i,a,o,s,c,l){let d=n-a-i[0]*l[0],f=d+i[0]+2*a,p=r-a-i[1]*l[1],m=p+i[1]+2*a,h=c.distanceFieldBoundingBox;return c.textureIsSignedDistanceField&&h!=null&&(d+=i[0]*h[0],p+=i[1]*h[1],f-=i[0]*(1-h[2]),m-=i[1]*(1-h[3]),d-=o,f+=o,p-=o,m+=o),u(Ko,n,r),we(Go,t,Ko,e(s)),Go[0]>d&&Go[0]<f&&Go[1]>p&&Go[1]<m}var Vo=new Ct,Q=T(),Ho=T(),$=Ce(),Uo=T(),Wo=T(),Go=d(),Ko=d(),qo=k(),Jo=h(),Yo=T(),Xo=T(),Zo=Ce(),Qo={normal:T(),cosAngle:0},$o=1,es=2,ts=O(0,0),ns=c(0,0,1),rs=class extends Qt{constructor(){super(...arguments),this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=!1,this.color=S(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=O(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=S(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=Ce(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.useVisibilityPixel=!0,this.occludedVisibilityMode=`hidden`,this.centerOffsetUnits=`world`,this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.draped=!1,this.isLabel=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}},is=class{constructor(){this.layout=Fo(),this.baseInstanceLayout=Mo}elementCount(e){return e.get(`position`).indices.length}elementCountBaseInstance(e){return e.get(`uv0`).indices.length}write(e,t,n,r,i,a){let{position:o,normal:s,color:c,size:l,rotation:u,centerOffsetAndDistance:d,featureAttribute:f,uvi:p}=i;dn(n.get(`position`),e,o,a),ln(n.get(`normal`),t,s,a);let m=n.get(`position`).indices.length,h=0,g=0,_=Do,v=Do,y=n.get(`uvi`)?.data;y&&y.length>=4&&(h=y[0],g=y[1],_=y[2],v=y[3]);for(let e=0;e<m;++e){let t=a+e;p.setValues(t,h,g,_,v)}if(Jt(n.get(`color`),4,c,a),gn(n.get(`size`),l,a),yn(n.get(`rotation`),u,a),n.get(`centerOffsetAndDistance`)?Xt(n.get(`centerOffsetAndDistance`),d,a):hn(d,a,m),n.get(`featureAttribute`)?Xt(n.get(`featureAttribute`),f,a):hn(f,a,m),r!=null){let e=n.get(`position`)?.indices;if(e){let t=e.length;en(r,i.getField(`olidColor`,Ke),t,a)}}return{numVerticesPerItem:1,numItems:m}}writeBaseInstance(e,t){let{uv0:n}=t;gn(e.get(`uv0`),n,0)}};function as(e,t,n){return e==null||t.vvSize==null?{scaleX:n,scaleY:n}:(Sn(Xo,t,e),{scaleX:Xo[0]*n,scaleY:Xo[1]*n})}function os(e,t){let n=t.computeRenderPixelSizeAtDist(e)*Ln;return(t.aboveGround?1:-1)*n}function ss(e,t,n,r,i){if(!e.verticalOffset?.screenLength){let r=Ee(t);return i.update(n,r,e.screenSizePerspective,e.screenSizePerspectiveMinPixelReferenceSize,e.screenSizePerspectiveAlignment,null),0}let a=Ee(t),o=e.screenSizePerspectiveAlignment??e.screenSizePerspective,s=jt(r,a,e.verticalOffset,n,o,e.screenSizePerspectiveMinPixelReferenceSize);return i.update(n,a,e.screenSizePerspective,e.screenSizePerspectiveMinPixelReferenceSize,e.screenSizePerspectiveAlignment,null),s}export{ir as $,Ca as A,$r as B,ca as C,Oa as D,La as E,Ai as F,Ar as G,Gr as H,ki as I,vr as J,Or as K,Ei as L,Sa as M,ka as N,Aa as O,Pa as P,ar as Q,ii as R,Ma as S,Fa as T,kr as U,Kr as V,Dr as W,pr as X,gr as Y,fr as Z,ro as _,yo as a,Na as b,go as c,qa as d,nr as et,Xa as f,Ka as g,Za as h,Do as i,ja as j,wa as k,Ga as l,Ya as m,Co as n,Wn as nt,uo as o,Wa as p,yr as q,xo as r,Vn as rt,ho as s,Io as t,qn as tt,Ja as u,Ua as v,Ea as w,ra as x,Va as y,Qr as z};