import{az as O,gx as Fe,cY as he,gv as Yt,cS as je,dh as Qt,h4 as Zt,dm as Kt,a4 as st,a8 as ei,_ as w,aJ as Me,i as ot,j7 as ti,oi as le,mF as ii,bM as ai,a9 as ni}from"./main-pOgmbpmS.js";import{I as ri,E as Q,p as Ie,o as Z,u as Pe,H as si,s as ae,c as ue,P as lt,g as ke,r as oi}from"./vec32-DlcWpOx5.js";import{a as li,n as Ue,s as ci,r as di}from"./vec4f64-DD-nkcCV.js";import{o as Ne}from"./projectBuffer-u3Ls1KNn.js";import{t as pi}from"./orientedBoundingBox-BLuzKGdA.js";import{aY as hi,aZ as ui,a_ as mi,r as J,aG as fi,aL as vi,ax as ct,a$ as gi,c as me,b0 as dt,G as Si,a6 as $e,aI as Be,b as bi,L as we,ar as yi,H as _i,K as xi,D as Ti,b1 as Pi,ao as wi,aq as zi,I as Oi,J as Di,M as Ci,a2 as ce,a as pt,j as Ai,k as Li,b2 as Ri,O as ht,P as Ei,Q as ut,R as ze,T as Wi,U as Vi,V as Fi,W as ji,X as fe,b3 as Mi,b4 as mt,b5 as Ii,b6 as ki,b7 as ft,Y as Ui,x as z,A as Ni,b8 as $i,$ as Bi,b9 as vt,a0 as Gi,a4 as Hi,a5 as Ji,ba as gt,m as Xi}from"./OutputColorHighlightOID.glsl-CzaQ5Ix1.js";import{c as St,n as Ge,H as qi,h as Yi,i as Qi}from"./mat4-BBA0NsiW.js";import{N as Zi,I as Ki,P as ea}from"./sphere-BqGvU9xz.js";import{m as ta,w as Oe,j as De,X as K,k as bt}from"./plane-CO0g4Ro1.js";import{s as ia,n as aa,t as na}from"./BufferView-BSD7Eom9.js";import{S as ra}from"./Octree-B8-tLREm.js";import{s as ve}from"./vec42-CyE6Fzqy.js";import{M as sa,b as He,v as yt,B as oa}from"./lineSegment-DCZFBQOk.js";import{Q as la}from"./InterleavedLayout-CzRZSYNP.js";import{_ as _t}from"./enums-DDJfd4_p.js";import{T as Ce,d as Je,r as xt}from"./renderState-CsafAKLy.js";import{f as ca}from"./computeTranslationToOriginAndRotation-D8OhpY_i.js";import{t as Tt}from"./HUDMaterial.glsl-CLkLU-T0.js";import{n as da,e as pa}from"./ElevationInfo-CYCCxvNt.js";import{u as ha}from"./hydratedFeatures-C1TH0cya.js";import{t as c,n as F}from"./glsl-CfY1Aoj6.js";import"./lengthUtils-stH6eFuO.js";import"./Texture-DxZPAhdk.js";import"./vec2f64-CkowXrDb.js";import{s as ua}from"./ShaderBuilder-B9Qsz-VF.js";function Pt(t){return t==="position"}function ma(t,e){return t==null&&(t=[]),t.push(e),t}function fa(t,e){if(t==null)return null;const i=t.filter(a=>a!==e);return i.length===0?null:i}function va(t,e,i,a,n){Ae[0]=t.get(e,0),Ae[1]=t.get(e,1),Ae[2]=t.get(e,2),hi(Ae,se,3),i.set(n,0,se[0]),a.set(n,0,se[1]),i.set(n,1,se[2]),a.set(n,1,se[3]),i.set(n,2,se[4]),a.set(n,2,se[5])}const Ae=O(),se=new Float32Array(6);let wt=class{constructor(t={}){this.id=Fe(),this._highlightIds=new Set,this._shaderTransformation=null,this._visible=!0,this.castShadow=t.castShadow??!0,this.usesVerticalDistanceToGround=t.usesVerticalDistanceToGround??!1,this.graphicUid=t.graphicUid,this.layerViewUid=t.layerViewUid,t.isElevationSource&&(this.lastValidElevationBB=new zt),this._geometries=t.geometries?Array.from(t.geometries):new Array}dispose(){this._geometries.length=0}get layer(){return this._layer}set layer(t){ia(this._layer==null||t==null,"Object3D can only be added to a single Layer"),this._layer=t}addGeometry(t){t.visible=this._visible,this._geometries.push(t);for(const e of this._highlightIds)t.addHighlight(e);this._emit("geometryAdded",{object:this,geometry:t}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}removeGeometry(t){const e=this._geometries.splice(t,1)[0];if(e){for(const i of this._highlightIds)e.removeHighlight(i);this._emit("geometryRemoved",{object:this,geometry:e}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(t,e,i=!1){this._emit("attributesChanged",{object:this,geometry:t,attribute:e,sync:i}),Pt(e)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(t){if(this._visible!==t){this._visible=t;for(const e of this._geometries)e.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const t=new ui;for(const e of this._geometries)e.occludees=ma(e.occludees,t);return this._emit("occlusionChanged",this),t}removeOcclude(t){for(const e of this._geometries)e.occludees=fa(e.occludees,t);this._emit("occlusionChanged",this)}highlight(t){const e=new mi(t);for(const i of this._geometries)i.addHighlight(e);return this._emit("highlightChanged",this),this._highlightIds.add(e),e}removeHighlight(t){this._highlightIds.delete(t);for(const e of this._geometries)e.removeHighlight(t);this._emit("highlightChanged",this)}removeStateID(t){t.channel===0?this.removeHighlight(t):this.removeOcclude(t)}getCombinedStaticTransformation(t,e){return St(e,this.transformation,t.transformation)}getCombinedShaderTransformation(t,e=he()){return St(e,this.effectiveTransformation,t.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new Ot,this._validateBoundingVolume(this._bvWorldSpace,0)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new Ot,this._validateBoundingVolume(this._bvObjectSpace,1)),this._bvObjectSpace}_validateBoundingVolume(t,e){const i=e===1;for(const a of this._geometries){const n=a.boundingInfo;n&&ga(n,t,i?a.transformation:this.getCombinedShaderTransformation(a))}Zi(t.bounds,ri(Xe,t.min,t.max,.5));for(const a of this._geometries){const n=a.boundingInfo;if(n==null)continue;const r=i?a.transformation:this.getCombinedShaderTransformation(a),o=ta(r);Q(Xe,n.center,r);const l=Ie(Xe,Ki(t.bounds)),s=n.radius*o;t.bounds[3]=Math.max(t.bounds[3],l+s)}}_invalidateBoundingVolume(){const t=this._bvWorldSpace?.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this.layer&&t&&this.layer.notifyObjectBBChanged(this,t)}_emit(t,e){this.layer?.events.emit(t,e)}get geometries(){return this._geometries}get transformation(){return this._transformation??Yt}set transformation(t){this._transformation=Ge(this._transformation??he(),t),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(t){this._shaderTransformation=t?Ge(this._shaderTransformation??he(),t):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}get test(){}},zt=class{constructor(){this._data=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE]}get min(){return je(this._data[0],this._data[1],this._data[2])}get max(){return je(this._data[3],this._data[4],this._data[5])}minWith(t){const{_data:e}=this;e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2])}maxWith(t){const{_data:e}=this;e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}assignMinMax(t,e){for(let i=0;i<3;++i)this._data[0+i]=t[i],this._data[3+i]=e[i]}isEmpty(){return this._data[3]<this._data[0]&&this._data[4]<this._data[1]&&this._data[5]<this._data[2]}};class Ot extends zt{constructor(){super(...arguments),this.bounds=ea()}}function ga(t,e,i){const a=t.bbMin,n=t.bbMax;if(qi(i)){const r=Z(Sa,i[12],i[13],i[14]);return Pe($,a,r),Pe(X,n,r),e.minWith($),void e.maxWith(X)}if(Q($,a,i),si(a,n))return e.minWith($),void e.maxWith($);Q(X,n,i),e.minWith($),e.minWith(X),e.maxWith($),e.maxWith(X);for(let r=0;r<3;++r)ae($,a),ae(X,n),$[r]=n[r],X[r]=a[r],Q($,$,i),Q(X,X,i),e.minWith($),e.minWith(X),e.maxWith($),e.maxWith(X)}const Sa=O(),$=O(),X=O(),Xe=O(),ba=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];let Dt=class{constructor(t,e,i=""){this.stage=t,this.apiLayerViewUid=i,this.id=Fe(),this.events=new Qt,this.visible=!0,this.sliceable=!1,this._objectsAdded=new Array,this._handles=new Zt,this._objects=new Map,this._pickable=!0,this.visible=e?.visible??!0,this._pickable=e?.pickable??!0,this.updatePolicy=e?.updatePolicy??0,t.addLayer(this);for(const a of ba)this._handles.add(this.events.on(a,n=>t.handleEvent(a,n)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.removeLayer(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}getObject(t){return Kt(this._objects.get(t))}set pickable(t){this._pickable=t}get pickable(){return this._pickable&&this.visible}add(t){this._objects.set(t.id,t),t.layer=this,this.events.emit("layerObjectAdded",t),this._octree!=null&&this._objectsAdded.push(t)}remove(t){this._objects.delete(t.id)&&(this.events.emit("layerObjectRemoved",t),t.layer=null,this._octree!=null&&(st(this._objectsAdded,t)||this._octree.remove([t])))}addMany(t){for(const e of t)this._objects.set(e.id,e),e.layer=this;this.events.emit("layerObjectsAdded",t),this._octree!=null&&this._objectsAdded.push(...t)}removeMany(t){const e=new Array;for(const i of t)this._objects.delete(i.id)&&e.push(i);if(e.length!==0&&(this.events.emit("layerObjectsRemoved",e),e.forEach(i=>i.layer=null),this._octree!=null)){for(let i=0;i<e.length;)st(this._objectsAdded,e[i])?(e[i]=e[e.length-1],e.length-=1):++i;this._octree.remove(e)}}commit(){this.stage.commitLayer(this)}sync(){this.updatePolicy!==1&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(t,e){this._octree==null||this._objectsAdded.includes(t)||this._octree.update(t,e)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.size>50?(this._octree=new ra(t=>t.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.values())):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded),this._objectsAdded.length=0),this._octree}invalidateSpatialQueryAccelerator(){this._octree=ei(this._octree),this._objectsAdded.length=0}get test(){}},ya=class{constructor(t,e){this.vec3=t,this.id=e}};function qe(t,e,i,a){return new ya(je(t,e,i),a)}const Ct=8;function At(t,e){const{vertex:i,attributes:a}=t;i.uniforms.add(new J("intrinsicWidth",o=>o.width));const{hasScreenSizePerspective:n,spherical:r}=e;n?(t.include(fi,e),vi(i),ct(i,e),i.uniforms.add(new gi("inverseViewMatrix",(o,l)=>Yi(Lt,Qi(Lt,l.camera.viewMatrix,o.origin)))),i.code.add(c`
      float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
        vec3 worldPos = (inverseViewMatrix * vec4(pos, 1)).xyz;
        vec3 groundUp = ${r?c`normalize(worldPos + localOrigin)`:c`vec3(0.0, 0.0, 1.0)`};
        float absCosAngle = abs(dot(groundUp, normalize(worldPos - cameraPosition)));

        return screenSizePerspectiveScaleFloat(size, absCosAngle, length(pos), screenSizePerspective);
      }
    `)):i.code.add(c`float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
return size;
}`),e.hasVVSize?(a.add("sizeFeatureAttribute","float"),i.uniforms.add(new me("vvSizeMinSize",o=>o.vvSize.minSize),new me("vvSizeMaxSize",o=>o.vvSize.maxSize),new me("vvSizeOffset",o=>o.vvSize.offset),new me("vvSizeFactor",o=>o.vvSize.factor),new me("vvSizeFallback",o=>o.vvSize.fallback)),i.code.add(c`
    float getSize(${F(n,"vec3 pos")}) {
      float size = isnan(sizeFeatureAttribute)
        ? vvSizeFallback.x
        : intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;

      return ${F(n,"applyLineSizeScreenSizePerspective(size, pos)","size")};
    }
    `)):(a.add("size","float"),i.code.add(c`
    float getSize(${F(n,"vec3 pos")}) {
      float fullSize = intrinsicWidth * size;
      return ${F(n,"applyLineSizeScreenSizePerspective(fullSize, pos)","fullSize")};
    }
    `)),e.hasVVOpacity?(a.add("opacityFeatureAttribute","float"),i.constants.add("vvOpacityNumber","int",8),i.uniforms.add(new dt("vvOpacityValues",o=>o.vvOpacity.values,Ct),new dt("vvOpacityOpacities",o=>o.vvOpacity.opacityValues,Ct),new J("vvOpacityFallback",o=>o.vvOpacity.fallback,{supportsNaN:!0})),i.code.add(c`
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
        return ${F(e.hasVVColor,"color","vec4(color.rgb, vvOpacityFallback)")};
      }

      return vec4(color.rgb, interpolateOpacity(opacityFeatureAttribute));
    }
    `)):i.code.add(c`vec4 applyOpacity(vec4 color) {
return color;
}`),e.hasVVColor?(t.include(Si,e),a.add("colorFeatureAttribute","float"),i.code.add(c`vec4 getColor() {
vec4 color = interpolateVVColor(colorFeatureAttribute);
if (isnan(color.r)) {
return vec4(0);
}
return applyOpacity(color);
}`)):(a.add("color","vec4"),i.code.add(c`vec4 getColor() {
return applyOpacity(color);
}`))}const Lt=he();function Rt(t){t.vertex.code.add("#define noPerspectiveWrite(x, w) (x * w)")}function Le(t){t.fragment.code.add("#define noPerspectiveRead(x) (x * gl_FragCoord.w)")}function _a(t){return t.pattern.map(e=>Math.round(e*t.pixelRatio))}function xa(t){if(t==null)return 1;const e=_a(t);return Math.floor(e.reduce((i,a)=>i+a))}function Ta(t){return t==null?li:t.length===4?t:ve(Pa,t[0],t[1],t[2],1)}const Pa=Ue();function wa(t,e){if(!e.stippleEnabled)return void t.fragment.code.add(c`float getStippleAlpha(float lineWidth) { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);const i=!(e.draped&&e.stipplePreferContinuous),{vertex:a,fragment:n}=t;e.draped||(ct(a,e),a.uniforms.add(new $e("worldToScreenPerDistanceRatio",({camera:r})=>1/r.perScreenPixelRatio)).code.add(c`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),t.varyings.add("vStippleDistance","float"),t.varyings.add("vStippleDistanceLimits","vec2"),t.varyings.add("vStipplePatternStretch","float"),a.code.add(c`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${c.float(za)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),Be(a),a.code.add(c`
    vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {

      // First check if the segment is long enough to support fully screen space patterns.
      // Force sparse mode for segments that are very large in screen space even if it is not allowed,
      // to avoid imprecision from calculating with large floats.
      if (segmentLengthPseudoScreen >= ${i?"patternLength":"1e4"}) {
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
  `),n.uniforms.add(new bi("stipplePatternTexture",r=>r.stippleTexture),new J("stipplePatternPixelSizeInv",r=>1/Et(r))),e.stippleOffColorEnabled&&n.uniforms.add(new we("stippleOffColor",r=>Ta(r.stippleOffColor))),t.include(Le),n.code.add(c`float getStippleSDF(out bool isClamped) {
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
}`),n.code.add(c`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${F(!e.stippleOffColorEnabled,"if (stippleAlpha < threshold) { discard; }")}
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${e.stippleOffColorEnabled?"mix(color, stippleOffColor, stippleAlpha)":"vec4(color.rgb, color.a * stippleAlpha)"};
    }
  `)}function Et(t){const e=t.stipplePattern;return e?xa(t.stipplePattern)/e.pixelRatio:1}const za=.4,Ye=64,Wt=Ye/2,Oa=Wt/5,Da=Ye/Oa,Ca=.25;function Vt(t,e){const i=t.vertex,a=e.hasScreenSizePerspective;Be(i),i.uniforms.get("markerScale")==null&&i.constants.add("markerScale","float",1),i.constants.add("markerSizePerLineWidth","float",Da).code.add(c`
  float getLineWidth(${F(a,"vec3 pos")}) {
     return max(getSize(${F(a,"pos")}), 1.0) * pixelRatio;
  }

  float getScreenMarkerSize(float lineWidth) {
    return markerScale * markerSizePerLineWidth * lineWidth;
  }
  `),e.space===2&&(i.constants.add("maxSegmentLengthFraction","float",.45),i.uniforms.add(new $e("perRenderPixelRatio",n=>n.camera.perRenderPixelRatio)),i.code.add(c`
  bool areWorldMarkersHidden(vec3 pos, vec3 other) {
    vec3 midPoint = mix(pos, other, 0.5);
    float distanceToCamera = length(midPoint);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    float worldMarkerSize = getScreenMarkerSize(getLineWidth(${F(a,"pos")})) * screenToWorldRatio;
    float segmentLen = length(pos - other);
    return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
  }

  float getWorldMarkerSize(vec3 pos) {
    float distanceToCamera = length(pos);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    return getScreenMarkerSize(getLineWidth(${F(a,"pos")})) * screenToWorldRatio;
  }
  `))}function Aa(t,e){if(!e.hasAnimation)return;const{attributes:i,varyings:a,vertex:n,fragment:r}=t;i.add("timeStamps","vec4"),a.add("vTimeStamp","float"),a.add("vFirstTime","float"),a.add("vLastTime","float"),a.add("vTransitionType","float"),n.main.add(c`vTimeStamp = timeStamps.x;
vFirstTime = timeStamps.y;
vLastTime = timeStamps.z;
vTransitionType = timeStamps.w;`);const{animation:o}=e;o===3&&r.constants.add("decayRate","float",2.3),r.code.add(c`
    float getTrailOpacity(float x) {
      ${La(o)}
    }`),r.uniforms.add(new J("timeElapsed",l=>l.timeElapsed),new J("trailLength",l=>l.trailLength),new J("speed",l=>l.animationSpeed),new we("timingOptions",l=>ve(Ra,l.startTime,l.endTime,l.fadeInTime,l.fadeOutTime))),r.code.add(c`float fadeIn(float x) {
return smoothstep(0.0, timingOptions[2], x);
}
float fadeOut(float x) {
return isinf(timingOptions[3]) ? 1.0 : smoothstep(timingOptions[3], 0.0, x);
}`),r.code.add(c`vec4 animate(vec4 color) {
float startTime = timingOptions[0];
float endTime = timingOptions[1];
float totalTime = vLastTime - vFirstTime;
float actualEndTime = int(vTransitionType) == 2 ? min(endTime, startTime + vLastTime / speed) : endTime;
vec4 animatedColor = color;
if (speed == 0.0) {
animatedColor.a *= getTrailOpacity((totalTime - (vTimeStamp - vFirstTime)) / trailLength);
animatedColor.a *= isinf(actualEndTime) ? 1.0 : fadeOut(timeElapsed - actualEndTime);
animatedColor.a *= fadeIn(timeElapsed - startTime);
return animatedColor;
}
float relativeStartTime = mod(startTime, totalTime);
float vHeadRelativeToFirst = mod((timeElapsed - relativeStartTime) * speed - vFirstTime, totalTime);
float vRelativeToHead = vHeadRelativeToFirst + vFirstTime - vTimeStamp;
bool inPreviousCycle = vRelativeToHead < 0.0;
vRelativeToHead += inPreviousCycle ? totalTime : 0.0;
float vAbsoluteTime = timeElapsed - vRelativeToHead / speed;
if (vAbsoluteTime > actualEndTime) {
vRelativeToHead = (timeElapsed - relativeStartTime) * speed - vTimeStamp;
vAbsoluteTime = timeElapsed - vRelativeToHead / speed;
}
animatedColor *= step(startTime, vAbsoluteTime);
animatedColor *= step(vAbsoluteTime, actualEndTime);
animatedColor.a *= isinf(actualEndTime) ? 1.0 : fadeOut(timeElapsed - actualEndTime);
animatedColor.a *= inPreviousCycle ? fadeOut(vHeadRelativeToFirst / speed) : 1.0;
animatedColor.a *= getTrailOpacity(vRelativeToHead / trailLength);
animatedColor.a *= int(vTransitionType) == 0 ? fadeIn(vAbsoluteTime - startTime) : 1.0;
animatedColor.a *= fadeIn(vTimeStamp - vFirstTime);
return animatedColor;
}`)}function La(t){switch(t){case 2:return"return x >= 0.0 && x <= 1.0 ? 1.0 : 0.0;";case 3:return`float cutOff = exp(-decayRate);
        return (exp(-decayRate * x) - cutOff) / (1.0 - cutOff);`;default:return"return 1.0;"}}const Ra=Ue(),ge=1;function Ft(t){const e=new ua,{attributes:i,varyings:a,vertex:n,fragment:r}=e,{applyMarkerOffset:o,draped:l,output:s,capType:p,stippleEnabled:u,falloffEnabled:y,roundJoins:d,wireframe:S,innerColorEnabled:f,hasAnimation:b,hasScreenSizePerspective:g}=t;r.include(yi),e.include(At,t),e.include(wa,t),e.include(_i,t),e.include(xi,t),e.include(Aa,t);const H=o&&!l;H&&(n.uniforms.add(new J("markerScale",m=>m.markerScale)),e.include(Vt,{space:2,hasScreenSizePerspective:g})),Ti(n,t),n.uniforms.add(new Pi("inverseProjectionMatrix",m=>m.camera.inverseProjectionMatrix),new wi("nearFar",m=>m.camera.nearFar),new J("miterLimit",m=>m.join!=="miter"?0:m.miterLimit),new zi("viewport",m=>m.camera.fullViewport)),n.constants.add("LARGE_HALF_FLOAT","float",65500),i.add("position","vec3"),i.add("previousDelta","vec4"),i.add("nextDelta","vec4"),i.add("lineParameters","vec2"),i.add("u0","float"),a.add("vColor","vec4"),a.add("vpos","vec3",{invariant:!0}),a.add("vLineDistance","float"),a.add("vLineWidth","float");const q=u;q&&a.add("vLineSizeInv","float");const h=p===2,L=u&&h,R=y||L;R&&a.add("vLineDistanceNorm","float"),h&&(a.add("vSegmentSDF","float"),a.add("vReverseSegmentSDF","float")),n.code.add(c`vec2 perpendicular(vec2 v) {
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
}`),n.code.add(c`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),n.code.add(c`void clip(
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
}`),Be(n),n.constants.add("aaWidth","float",u?0:1).main.add(c`bool isStartVertex = abs(abs(lineParameters.y) - 3.0) == 1.0;
vec3 prevPosition = position + previousDelta.xyz * previousDelta.w;
vec3 nextPosition = position + nextDelta.xyz * nextDelta.w;
float coverage = 1.0;
if (lineParameters.y == 0.0) {
gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
}
else {
vec4 pos  = view * vec4(position, 1.0);
vec4 prev = view * vec4(prevPosition, 1.0);
vec4 next = view * vec4(nextPosition, 1.0);
bool isJoin = abs(lineParameters.y) < 3.0;`),H&&n.main.add(c`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos.xyz, other.xyz);
if (!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos.xyz) * 0.5;
}`),e.include(Rt),n.main.add(c`
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

      float lineSize = getSize(${F(g,"clippedPos")});
      ${F(u&&g,"float patternLineSize = getSize(clippedCenter);")}
      ${F(u&&!g,"float patternLineSize = lineSize;")}

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = noPerspectiveWrite(lineWidth, pos.w);
      ${q?c`vLineSizeInv = noPerspectiveWrite(1.0 / lineSize, pos.w);`:""}
  `),(u||h)&&n.main.add(c`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${h?c`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),n.main.add(c`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
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
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),d?n.main.add(c`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = perpendicular(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${u?c`min(1.0, subdivisionFactor * ${c.float((ge+2)/(ge+1))})`:c`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(lineParameters.y) * factor * rotationAngle);
      `):n.main.add(c`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = perpendicular(joinDisplacementDir);`);const E=p!==0;return n.main.add(c`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${E?c`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),n.main.add(c`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(lineParameters.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = noPerspectiveWrite(sign(lineParameters.y), pos.w);

    vLineDistance = lineWidth * lineDistNorm;
    ${R?c`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),h&&n.main.add(c`vec2 segmentDir = normalize(segment);
vSegmentSDF = noPerspectiveWrite((isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir)), pos.w);
vReverseSegmentSDF = noPerspectiveWrite((isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir)), pos.w);`),u&&(l?n.uniforms.add(new $e("worldToScreenRatio",m=>1/m.screenToPCSRatio)):n.main.add(c`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),n.main.add(c`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),l?n.main.add(c`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = u0 * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):n.main.add(c`float startPseudoScreen = mix(u0, u0 - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),n.uniforms.add(new J("stipplePatternPixelSize",m=>Et(m))),n.main.add(c`float patternLength = patternLineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits = noPerspectiveWrite(vStippleDistanceLimits, pos.w);
vStippleDistance = noPerspectiveWrite(vStippleDistance, pos.w);
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),n.main.add(c`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a = noPerspectiveWrite(vColor.a * coverage, pos.w);

      ${S&&!l?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),e.fragment.include(Oi,t),e.include(Di,t),r.include(Ci),r.main.add(c`discardBySlice(vpos);
discardByTerrainDepth();`),e.include(Le),r.main.add(c`
    float lineWidth = noPerspectiveRead(vLineWidth);
    float lineDistance = noPerspectiveRead(vLineDistance);
    ${F(R,c`float lineDistanceNorm = noPerspectiveRead(vLineDistanceNorm);`)}
  `),S?r.main.add(c`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(h&&r.main.add(c`
        float sdf = noPerspectiveRead(min(vSegmentSDF, vReverseSegmentSDF));
        vec2 fragmentPosition = vec2(min(sdf, 0.0), lineDistance);

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - lineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${c.float(ce)}) {
          discard;
        }
      `),L?r.main.add(c`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        lineDistanceNorm
      );
      float stippleRadius = length(stipplePosition * lineWidth);
      float stippleCapSDF = (stippleRadius - lineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${c.float(ce)}, stippleCoverage);
      `):r.main.add(c`float stippleAlpha = getStippleAlpha(lineWidth);`),s!==10&&r.main.add(c`discardByStippleAlpha(stippleAlpha, ${c.float(ce)});`),e.include(Le),r.uniforms.add(new we("intrinsicColor",m=>m.color)).main.add(c`vec4 color = intrinsicColor * vColor;
color.a = noPerspectiveRead(color.a);`),f&&r.uniforms.add(new we("innerColor",m=>m.innerColor??m.color),new J("innerWidth",(m,P)=>m.innerWidth*P.camera.pixelRatio)).main.add(c`float distToInner = abs(lineDistance) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`),r.main.add(c`vec4 finalColor = blendStipple(color, stippleAlpha);`),y&&(r.uniforms.add(new J("falloff",m=>m.falloff)),r.main.add(c`finalColor.a *= pow(max(0.0, 1.0 - abs(lineDistanceNorm)), falloff);`)),u||r.main.add(c`float featherStartDistance = max(lineWidth - 2.0, 0.0);
float value = abs(lineDistance);
float feather = (value - featherStartDistance) / (lineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`),b&&r.main.add(c`
        finalColor = animate(finalColor);

        ${F(s!==10,c`
            if (finalColor.a <= ${c.float(ce)}) {
              discard;
            }`)}
      `)),r.main.add(c`outputColorHighlightOID(finalColor, vpos, finalColor.rgb);`),e}const Ea=Object.freeze(Object.defineProperty({__proto__:null,build:Ft,ribbonlineNumRoundJoinSubdivisions:ge},Symbol.toStringTag,{value:"Module"}));class Wa extends Ai{constructor(e,i){super(e,i,new Li(Ea,()=>Promise.resolve().then(()=>mn)),Mt(i).locations),this.primitiveType=i.wireframe?_t.LINES:_t.TRIANGLE_STRIP}_makePipelineState(e,i){const{oitPass:a,output:n,hasOccludees:r,hasPolygonOffset:o}=e,l=a===0,s=a===2;return Ce({blending:fe(n)?Fi(a):null,depthTest:{func:Vi(a)},depthWrite:Wi(e),drawBuffers:ze(n,ji(a,n)),colorWrite:Je,stencilWrite:r?ut:null,stencilTest:r?i?ht:Ei:null,polygonOffset:l||s?o?jt:null:Ri})}initializePipeline(e){if(e.occluder){const i=e.hasPolygonOffset?jt:null,{output:a,hasOccludees:n}=e;this._occluderPipelineTransparent=Ce({blending:xt,polygonOffset:i,depthTest:mt,depthWrite:null,colorWrite:Je,stencilWrite:null,stencilTest:n?Mi:null,drawBuffers:ze(a)}),this._occluderPipelineOpaque=Ce({blending:xt,polygonOffset:i,depthTest:n?mt:ft,depthWrite:null,colorWrite:Je,stencilWrite:n?ki:null,stencilTest:n?Ii:null,drawBuffers:ze(a)}),this._occluderPipelineMaskWrite=Ce({blending:null,polygonOffset:i,depthTest:ft,depthWrite:null,colorWrite:null,stencilWrite:n?ut:null,stencilTest:n?ht:null,drawBuffers:ze(a)})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,i){if(e)return this._occludeePipeline;switch(i){case 11:return this._occluderPipelineTransparent??super.getPipeline();case 10:return this._occluderPipelineOpaque??super.getPipeline();default:return this._occluderPipelineMaskWrite??super.getPipeline()}}}const jt={factor:0,units:-4};function Mt(t){const e=la().vec3f("position").vec4f16("previousDelta").vec4f16("nextDelta").f32("u0").vec2f16("lineParameters");return t.hasVVColor?e.f32("colorFeatureAttribute"):e.vec4u8("color",{glNormalized:!0}),t.hasVVSize?e.f32("sizeFeatureAttribute"):e.f32("size"),t.hasVVOpacity&&e.f32("opacityFeatureAttribute"),pt()&&e.vec4u8("olidColor"),t.hasAnimation&&e.vec4f16("timeStamps"),e}let T=class extends Ui{constructor(t){super(),this.spherical=t,this.capType=0,this.emissionSource=0,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVVOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.animation=2,this.hasScreenSizePerspective=!1,this.textureCoordinateType=0,this.occlusionPass=!1,this.hasVVInstancing=!1,this.hasSliceTranslatedView=!0,this.overlayEnabled=!1,this.snowCover=!1}get hasAnimation(){return this.animation!==0}};w([z({count:3})],T.prototype,"capType",void 0),w([z({count:8})],T.prototype,"emissionSource",void 0),w([z()],T.prototype,"hasPolygonOffset",void 0),w([z()],T.prototype,"writeDepth",void 0),w([z()],T.prototype,"draped",void 0),w([z()],T.prototype,"stippleEnabled",void 0),w([z()],T.prototype,"stippleOffColorEnabled",void 0),w([z()],T.prototype,"stipplePreferContinuous",void 0),w([z()],T.prototype,"roundJoins",void 0),w([z()],T.prototype,"applyMarkerOffset",void 0),w([z()],T.prototype,"hasVVSize",void 0),w([z()],T.prototype,"hasVVColor",void 0),w([z()],T.prototype,"hasVVOpacity",void 0),w([z()],T.prototype,"falloffEnabled",void 0),w([z()],T.prototype,"innerColorEnabled",void 0),w([z()],T.prototype,"hasOccludees",void 0),w([z()],T.prototype,"occluder",void 0),w([z()],T.prototype,"terrainDepthTest",void 0),w([z()],T.prototype,"cullAboveTerrain",void 0),w([z()],T.prototype,"wireframe",void 0),w([z()],T.prototype,"discardInvisibleFragments",void 0),w([z({count:4})],T.prototype,"animation",void 0),w([z()],T.prototype,"hasScreenSizePerspective",void 0);class It extends Ni{constructor(e,i){super(e,Fa),this.produces=new Map([[2,a=>$i(a)||fe(a)&&this.parameters.renderOccluded===8],[3,a=>Bi(a)],[10,a=>vt(a)&&this.parameters.renderOccluded===8],[11,a=>vt(a)&&this.parameters.renderOccluded===8],[4,a=>fe(a)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[8,a=>fe(a)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[18,a=>Gi(a)]]),this._configuration=new T(i)}getConfiguration(e,i){super.getConfiguration(e,i,this._configuration),this._configuration.oitPass=i.oitPass,this._configuration.draped=i.slot===18;const a=this.parameters.stipplePattern!=null&&e!==9;return this._configuration.stippleEnabled=a,this._configuration.stippleOffColorEnabled=a&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=a&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&Ma(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasVVSize=this.parameters.hasVVSize,this._configuration.hasVVColor=this.parameters.hasVVColor,this._configuration.hasVVOpacity=this.parameters.hasVVOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=i.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===8,this._configuration.terrainDepthTest=i.terrainDepthTest&&fe(e),this._configuration.cullAboveTerrain=i.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration.animation=this.parameters.animation,this._configuration.emissionSource=this.hasEmissions?1:0,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration}get visible(){return this.parameters.color[3]>=ce||this.parameters.stipplePattern!=null&&(this.parameters.stippleOffColor?.[3]??0)>ce}setParameters(e,i){e.animation=this.parameters.animation,super.setParameters(e,i)}intersectDraped({attributes:e,screenToWorldRatio:i},a,n,r,o){if(!a.options.selectionMode)return;const l=e.get("size");let s=this.parameters.width;if(this.parameters.vvSize){const g=e.get("sizeFeatureAttribute").data[0];Number.isNaN(g)?s*=this.parameters.vvSize.fallback[0]:s*=Me(this.parameters.vvSize.offset[0]+g*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else l&&(s*=l.data[0]);const p=n[0],u=n[1],y=(s/2+4)*i;let d=Number.MAX_VALUE,S=0;const f=e.get("position").data,b=Ze(this.parameters,e)?f.length-2:f.length-5;for(let g=0;g<b;g+=3){const H=f[g],q=f[g+1],h=(g+3)%f.length,L=p-H,R=u-q,E=f[h]-H,m=f[h+1]-q,P=Me((E*L+m*R)/(E*E+m*m),0,1),W=E*P-L,V=m*P-R,Y=W*W+V*V;Y<d&&(d=Y,S=g/3)}d<y*y&&r(o.distance,o.normal,S)}intersect(e,i,a,n,r,o){const{options:l,camera:s,rayBegin:p,rayEnd:u}=a;if(!l.selectionMode||!e.visible||!s)return;if(!aa(i))return void ot.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const y=e.attributes,d=y.get("position").data;let S=this.parameters.width;if(this.parameters.vvSize){const h=y.get("sizeFeatureAttribute").data[0];Number.isNaN(h)||(S*=Me(this.parameters.vvSize.offset[0]+h*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0]))}else y.has("size")&&(S*=y.get("size").data[0]);const f=Ia;ti(f,a.point);const b=S*s.pixelRatio/2+4*s.pixelRatio;Z(Se[0],f[0]-b,f[1]+b,0),Z(Se[1],f[0]+b,f[1]+b,0),Z(Se[2],f[0]+b,f[1]-b,0),Z(Se[3],f[0]-b,f[1]-b,0);for(let h=0;h<4;h++)if(!s.unprojectFromRenderScreen(Se[h],ie[h]))return;Oe(s.eye,ie[0],ie[1],Ke),Oe(s.eye,ie[1],ie[2],et),Oe(s.eye,ie[2],ie[3],tt),Oe(s.eye,ie[3],ie[0],it);let g=Number.MAX_VALUE,H=0;const q=Ze(this.parameters,y)?d.length-2:d.length-5;for(let h=0;h<q;h+=3){j[0]=d[h]+i[12],j[1]=d[h+1]+i[13],j[2]=d[h+2]+i[14];const L=(h+3)%d.length;if(M[0]=d[L]+i[12],M[1]=d[L+1]+i[13],M[2]=d[L+2]+i[14],K(Ke,j)<0&&K(Ke,M)<0||K(et,j)<0&&K(et,M)<0||K(tt,j)<0&&K(tt,M)<0||K(it,j)<0&&K(it,M)<0)continue;const R=s.projectToRenderScreen(j,ka),E=s.projectToRenderScreen(M,Ua);if(R==null||E==null)continue;if(R[2]<0&&E[2]>0){ue(ee,j,M);const P=s.frustum,W=-K(P[4],j)/lt(ee,bt(P[4]));if(ke(ee,ee,W),Pe(j,j,ee),!s.projectToRenderScreen(j,R))continue}else if(R[2]>0&&E[2]<0){ue(ee,M,j);const P=s.frustum,W=-K(P[4],M)/lt(ee,bt(P[4]));if(ke(ee,ee,W),Pe(M,M,ee),!s.projectToRenderScreen(M,E))continue}else if(R[2]<0&&E[2]<0)continue;R[2]=0,E[2]=0;const m=sa(He(R,E,Nt),f);m<g&&(g=m,ae(kt,j),ae(Ut,M),H=h/3)}if(g<b*b){let h=Number.MAX_VALUE;if(oa(He(kt,Ut,Nt),He(p,u,Na),oe)){ue(oe,oe,p);const L=oi(oe);ke(oe,oe,1/L),h=L/Ie(p,u)}o(h,oe,H)}}get hasEmissions(){return this.parameters.emissiveStrength>0}createBufferWriter(){return new ja(Mt(this.parameters),this.parameters)}createGLMaterial(e){return new Va(e)}validateParameters(e){e.join!=="miter"&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}update(e){const{hasAnimation:i}=this.parameters;return!!i&&(this.setParameters({timeElapsed:ii(e.time)},!1),e.dt!==0)}}class Va extends Ji{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures?.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){const i=this._material.parameters.stipplePattern;return this._stipplePattern!==i&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(i,this._stipplePattern)}),this._stipplePattern=i),this.getTechnique(Wa,e)}}class Fa extends Hi{constructor(){super(...arguments),this.width=0,this.color=ci,this.join="miter",this.cap=0,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1,this.timeElapsed=0,this.animation=0,this.animationSpeed=1,this.trailLength=1,this.startTime=0,this.endTime=1/0,this.fadeInTime=0,this.fadeOutTime=1/0,this.emissiveStrength=0}get transparent(){return this.color[3]<1||this.hasAnimation||this.stipplePattern!=null&&(this.stippleOffColor?.[3]??0)<1}get hasAnimation(){return this.animation!==0}}class ja{constructor(e,i){this.layout=e,this._parameters=i;const a=i.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=a;break;case"round":this.numJoinSubdivisions=ge+a}}_isClosed(e){return Ze(this._parameters,e)}allocate(e){return this.layout.createBuffer(e)}elementCount(e){const i=e.get("position").indices.length/2+1,a=this._isClosed(e);let n=a?2:4;return n+=((a?i:i-1)-(a?0:1))*(2*this.numJoinSubdivisions+4),n+=2,this._parameters.wireframe&&(n=2+4*(n-2)),n}write(e,i,a,n,r,o){const l=this.layout,s=a.get("position"),p=s.indices,u=s.data.length/3,y=a.get("distanceToStart")?.data;p&&p.length!==2*(u-1)&&console.warn("RibbonLineMaterial does not support indices");const d=l.fields.has("sizeFeatureAttribute");let S=1,f=null;if(d){const v=a.get("sizeFeatureAttribute");v.data.length===1?S=v.data[0]:f=v.data}else S=a.get("size")?.data[0]??1;let b=[1,1,1,1],g=0,H=null;const q=l.fields.has("colorFeatureAttribute");if(q){const v=a.get("colorFeatureAttribute");v.data.length===1?g=v.data[0]:H=v.data}else b=a.get("color")?.data??b;const h=a.get("timeStamps")?.data,L=h&&l.fields.has("timeStamps"),R=l.fields.has("opacityFeatureAttribute");let E=0,m=null;if(R){const v=a.get("opacityFeatureAttribute");v.data.length===1?E=v.data[0]:m=v.data}const P=new Float32Array(r.buffer),W=na(r.buffer),V=new Uint8Array(r.buffer),Y=l.stride/4;let x=o*Y;const Ee=x;let k=0;const We=y?(v,G,re)=>k=y[re]:(v,G,re)=>k+=Ie(v,G),ne=P.BYTES_PER_ELEMENT/W.BYTES_PER_ELEMENT,rt=4/ne,Jt=pt(),B=(v,G,re,N,_e,Xt,xe,qt)=>{P[x++]=G[0],P[x++]=G[1],P[x++]=G[2],gt(v,G,W,x*ne),x+=rt,gt(re,G,W,x*ne),x+=rt,P[x++]=qt;let te=x*ne;if(W[te++]=_e,W[te++]=Xt,x=Math.ceil(te/ne),q)P[x]=H?.[xe]??g;else{const U=Math.min(4*xe,b.length-4),Te=4*x;V[Te]=255*b[U],V[Te+1]=255*b[U+1],V[Te+2]=255*b[U+2],V[Te+3]=255*b[U+3]}if(x++,P[x++]=f?.[xe]??S,R&&(P[x++]=m?.[xe]??E),Jt){let U=4*x;n?(V[U++]=n[0],V[U++]=n[1],V[U++]=n[2],V[U++]=n[3]):(V[U++]=0,V[U++]=0,V[U++]=0,V[U++]=0),x=Math.ceil(.25*U)}L&&(te=x*ne,W[te++]=N[0],W[te++]=N[1],W[te++]=N[2],W[te++]=N[3],x=Math.ceil(te/ne))};x+=Y,Z(_,s.data[0],s.data[1],s.data[2]),L&&ve(I,h[0],h[1],h[2],h[3]),e&&Q(_,_,e);const ye=this._isClosed(a);if(ye){const v=s.data.length-3;Z(A,s.data[v],s.data[v+1],s.data[v+2]),e&&Q(A,A,e)}else Z(D,s.data[3],s.data[4],s.data[5]),e&&Q(D,D,e),B(_,_,D,I,1,-4,0,0),B(_,_,D,I,1,4,0,0),ae(A,_),ae(_,D),L&&ve(I,h[4],h[5],h[6],h[7]);const Ve=ye?0:1,pe=ye?u:u-1;for(let v=Ve;v<pe;v++){const G=(v+1)%u*3;Z(D,s.data[G],s.data[G+1],s.data[G+2]),e&&Q(D,D,e),We(A,_,v),B(A,_,D,I,0,-1,v,k),B(A,_,D,I,0,1,v,k);const re=this.numJoinSubdivisions;for(let N=0;N<re;++N){const _e=(N+1)/(re+1);B(A,_,D,I,_e,-1,v,k),B(A,_,D,I,_e,1,v,k)}if(B(A,_,D,I,1,-2,v,k),B(A,_,D,I,1,2,v,k),ae(A,_),ae(_,D),L){const N=(v+1)%u*4;ve(I,h[N],h[N+1],h[N+2],h[N+3])}}return ye?(Z(D,s.data[3],s.data[4],s.data[5]),e&&Q(D,D,e),k=We(A,_,pe),B(A,_,D,I,0,-1,Ve,k),B(A,_,D,I,0,1,Ve,k)):(k=We(A,_,pe),B(A,_,_,I,0,-5,pe,k),B(A,_,_,I,0,5,pe,k)),Qe(P,Ee+Y,P,Ee,Y),x=Qe(P,x-Y,P,x,Y),this._parameters.wireframe&&this._addWireframeVertices(r,Ee,x,Y),null}_addWireframeVertices(e,i,a,n){const r=new Float32Array(e.buffer,a*Float32Array.BYTES_PER_ELEMENT),o=new Float32Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT,a-i);let l=0;const s=p=>l=Qe(o,p,r,l,n);for(let p=0;p<o.length-1;p+=2*n)s(p),s(p+2*n),s(p+1*n),s(p+2*n),s(p+1*n),s(p+3*n)}}function Qe(t,e,i,a,n){for(let r=0;r<n;r++)i[a++]=t[e++];return a}function Ze(t,e){return t.isClosed?e.get("position").indices.length>2:!1}function Ma(t){return t.anchor===1&&t.hideOnShortSegments&&t.placement==="begin-end"&&t.worldSpace}const j=O(),M=O(),ee=O(),oe=O(),Ia=O(),ka=le(),Ua=le(),kt=O(),Ut=O(),Nt=yt(),Na=yt(),A=O(),_=O(),D=O(),I=Ue(),Se=[le(),le(),le(),le()],ie=[O(),O(),O(),O()],Ke=De(),et=De(),tt=De(),it=De();let $a=class{constructor(t){this._originSR=t,this._rootOriginId="root/"+Fe(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5}getOrigin(t){const e=this._origins.get(this._rootOriginId);if(e==null){const p=qe(t[0]+Math.random()-.5,t[1]+Math.random()-.5,t[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,p),p}const i=this._gridSize,a=Math.round(t[0]/i),n=Math.round(t[1]/i),r=Math.round(t[2]/i),o=`${a}/${n}/${r}`;let l=this._origins.get(o);const s=.5*i;if(ue(C,t,e.vec3),C[0]=Math.abs(C[0]),C[1]=Math.abs(C[1]),C[2]=Math.abs(C[2]),C[0]<s&&C[1]<s&&C[2]<s){if(l){const p=Math.max(...C);if(ue(C,t,l.vec3),C[0]=Math.abs(C[0]),C[1]=Math.abs(C[1]),C[2]=Math.abs(C[2]),Math.max(...C)<p)return l}return e}return l||(l=qe(a*i,n*i,r*i,o),this._origins.set(o,l)),l}_drawOriginBox(t,e=di(1,1,0,1)){const i=window.view,a=i.stage,n=e.toString();if(!this._objects.has(n)){this._material=new It({width:2,color:e},!1);const d=new Dt(a,{pickable:!1}),S=new wt({castShadow:!1});d.add(S),this._objects.set(n,S)}const r=this._objects.get(n),o=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],l=o.length,s=new Array(3*l),p=new Array,u=.5*this._gridSize;for(let d=0;d<l;d++)s[3*d]=t[0]+(1&o[d]?u:-u),s[3*d+1]=t[1]+(2&o[d]?u:-u),s[3*d+2]=t[2]+(4&o[d]?u:-u),d>0&&p.push(d-1,d);Ne(s,this._originSR,0,s,i.renderSpatialReference,0,l);const y=new Xi(this._material,[["position",new pi(s,p,3,!0)]],null,2);r.addGeometry(y)}get test(){}};const C=O();class Ba{constructor(e,i=null,a=0){this.array=e,this.spatialReference=i,this.offset=a}}function $t(t){return"array"in t}function be(t,e,i="ground"){if(Tt(e))return t.getElevation(e.x,e.y,e.z||0,e.spatialReference,i);if($t(e)){let a=e.offset;return t.getElevation(e.array[a++],e.array[a++],e.array[a]||0,e.spatialReference??t.spatialReference,i)}return t.getElevation(e[0],e[1],e[2]||0,t.spatialReference,i)}function Ga(t,e,i,a,n,r,o,l,s,p,u){const y=an[u.mode];let d,S,f=0;if(Ne(t,e,i,a,s.spatialReference,n,l))return y?.requiresAlignment(u)?(f=y.applyElevationAlignmentBuffer(a,n,r,o,l,s,p,u),d=r,S=o):(d=a,S=n),Ne(d,s.spatialReference,S,r,p.spatialReference,o,l)?f:void 0}function at(t,e,i,a,n){const r=(Tt(t)?t.z:$t(t)?t.array[t.offset+2]:t[2])||0;switch(i.mode){case"on-the-ground":{const o=be(e,t,"ground")??0;return n.verticalDistanceToGround=0,n.sampledElevation=o,void(n.z=o)}case"relative-to-ground":{const o=be(e,t,"ground")??0,l=i.geometryZWithOffset(r,a);return n.verticalDistanceToGround=l,n.sampledElevation=o,void(n.z=l+o)}case"relative-to-scene":{const o=be(e,t,"scene")??0,l=i.geometryZWithOffset(r,a);return n.verticalDistanceToGround=l,n.sampledElevation=o,void(n.z=l+o)}case"absolute-height":{const o=i.geometryZWithOffset(r,a),l=be(e,t,"ground")??0;return n.verticalDistanceToGround=o-l,n.sampledElevation=l,void(n.z=o)}default:return void(n.z=0)}}function Ha(t,e,i,a){return at(t,e,i,a,de),de.z}function Ja(t,e,i){return e==="on-the-ground"&&i==="on-the-ground"?t.staysOnTheGround:e===i||e!=="on-the-ground"&&i!=="on-the-ground"?e==null||i==null?t.definedChanged:1:t.onTheGroundChanged}function Xa(t){return t==="relative-to-ground"||t==="relative-to-scene"}function qa(t){return t!=="absolute-height"}function Ya(t,e,i,a,n){at(e,i,n,a,de),Bt(t,de.verticalDistanceToGround);const r=de.sampledElevation,o=Ge(nn,t.transformation);return Re[0]=e.x,Re[1]=e.y,Re[2]=de.z,ca(e.spatialReference,Re,o,a.spatialReference)?t.transformation=o:console.warn("Could not locate symbol object properly, it might be misplaced"),r}function Bt(t,e){for(let i=0;i<t.geometries.length;++i){const a=t.geometries[i].getMutableAttribute("centerOffsetAndDistance");a&&a.data[3]!==e&&(a.data[3]=e,t.geometryVertexAttributeUpdated(t.geometries[i],"centerOffsetAndDistance"))}}function Qa(t,e,i,a,n,r){let o=0;const l=r.spatialReference;e*=3,a*=3;for(let s=0;s<n;++s){const p=t[e],u=t[e+1],y=t[e+2],d=r.getElevation(p,u,y,l,"ground")??0;o+=d,i[a]=p,i[a+1]=u,i[a+2]=d,e+=3,a+=3}return o/n}function Za(t,e,i,a,n,r,o,l){let s=0;const p=l.calculateOffsetRenderUnits(o),u=l.featureExpressionInfoContext,y=r.spatialReference;e*=3,a*=3;for(let d=0;d<n;++d){const S=t[e],f=t[e+1],b=t[e+2],g=r.getElevation(S,f,b,y,"ground")??0;s+=g,i[a]=S,i[a+1]=f,i[a+2]=u==null?b+g+p:g+p,e+=3,a+=3}return s/n}function Ka(t,e,i,a,n,r,o,l){let s=0;const p=l.calculateOffsetRenderUnits(o),u=l.featureExpressionInfoContext,y=r.spatialReference;e*=3,a*=3;for(let d=0;d<n;++d){const S=t[e],f=t[e+1],b=t[e+2],g=r.getElevation(S,f,b,y,"scene")??0;s+=g,i[a]=S,i[a+1]=f,i[a+2]=u==null?b+g+p:g+p,e+=3,a+=3}return s/n}function en(t){const e=t.meterUnitOffset,i=t.featureExpressionInfoContext;return e!==0||i!=null}function tn(t,e,i,a,n,r,o,l){const s=l.calculateOffsetRenderUnits(o),p=l.featureExpressionInfoContext;e*=3,a*=3;for(let u=0;u<n;++u){const y=t[e],d=t[e+1],S=t[e+2];i[a]=y,i[a+1]=d,i[a+2]=p==null?S+s:s,e+=3,a+=3}return 0}class Gt{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}const an={"absolute-height":{applyElevationAlignmentBuffer:tn,requiresAlignment:en},"on-the-ground":{applyElevationAlignmentBuffer:Qa,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:Za,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:Ka,requiresAlignment:()=>!0}},nn=he(),de=new Gt,Re=O(),rn=()=>ot.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function sn(t){return{cachedResult:t.cachedResult,arcade:t.arcade?{func:t.arcade.func,context:t.arcade.modules.arcadeUtils.createExecContext(null,{sr:t.arcade.context.spatialReference}),modules:t.arcade.modules}:null}}async function on(t,e,i,a){const n=t?.expression;if(typeof n!="string")return null;const r=un(n);if(r!=null)return{cachedResult:r};const o=await ai();ni(i);const l=o.arcadeUtils,s=l.createSyntaxTree(n);return l.dependsOnView(s)?(a?.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:l.createFunction(s),context:l.createExecContext(null,{sr:e}),modules:o}}}function ln(t,e,i){return t.arcadeUtils.createFeature(e.attributes,e.geometry,i)}function cn(t,e){if(t!=null&&!Ht(t)){if(!e||!t.arcade)return void rn().errorOncePerTick("Arcade support required but not provided");const i=e;i._geometry&&(i._geometry=ha(i._geometry)),t.arcade.modules.arcadeUtils.updateExecContext(t.arcade.context,e)}}function dn(t){if(t!=null){if(Ht(t))return t.cachedResult;const e=t.arcade;let i=e?.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof i!="number"&&(t.cachedResult=0,i=0),i}return 0}function pn(t,e=!1){let i=t?.featureExpressionInfo;const a=i?.expression;return e||a==="0"||(i=null),i??null}const hn={cachedResult:0};function Ht(t){return t.cachedResult!=null}function un(t){return t==="0"?0:null}class nt{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.mode=null,this.centerInElevationSR=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=da(e)}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,i){const a=this.calculateOffsetRenderUnits(i);return this.featureExpressionInfoContext!=null?a:e+a}calculateOffsetRenderUnits(e){let i=this._meterUnitOffset;const a=this.featureExpressionInfoContext;return a!=null&&(i+=dn(a)*this._metersPerElevationInfoUnit),i/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=pa(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}setFeatureExpressionInfoContext(e){this._featureExpressionInfoContext=e}updateFeatureExpressionInfoContextForGraphic(e,i,a){e.arcade?(this._featureExpressionInfoContext=sn(e),this.updateFeatureExpressionFeature(i,a)):this._featureExpressionInfoContext=e}updateFeatureExpressionFeature(e,i){const a=this.featureExpressionInfoContext;a?.arcade&&(a.cachedResult=void 0,cn(this._featureExpressionInfoContext,e.geometry?ln(a.arcade.modules,e,i):null))}static fromElevationInfo(e){const i=new nt;return e!=null&&i.setFromElevationInfo(e),i}}const mn=Object.freeze(Object.defineProperty({__proto__:null,build:Ft,ribbonlineNumRoundJoinSubdivisions:ge},Symbol.toStringTag,{value:"Module"}));export{be as A,It as J,wt as W,on as a,hn as b,at as c,pn as d,Ja as e,$a as f,Ya as g,Xa as h,Dt as i,At as j,Vt as k,Ga as l,qa as m,Pt as n,nt as o,Bt as p,Rt as q,Ba as r,Ye as s,qe as t,Le as u,Wt as v,Ca as w,Gt as x,va as y,Ha as z};
