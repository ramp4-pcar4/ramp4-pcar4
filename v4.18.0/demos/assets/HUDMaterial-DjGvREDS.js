const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./HUDMaterial.glsl-BYndqZ61.js","./main-BGlWJBv6.js","./preload-helper-DMGCcr4D.js","./main-1q3AKiAC.css","./meshVertexSpaceUtils-LdErA5Iq.js","./MeshLocalVertexSpace-DeAn7RcG.js","./hydratedFeatures-BDFHuo25.js","./VertexColor.glsl-DlgNzMqx.js","./glsl-CX8y9w8U.js","./Texture-CO_ozpoi.js","./Cyclical-BcJ8weaf.js","./enums-DQOO6RKE.js","./frustum-Dwc8xi-w.js","./orientedBoundingBox-CirGFKwh.js","./quat-CTpnzqSy.js","./computeTranslationToOriginAndRotation-90uAO8Zv.js","./normalizeUtils-QeK3NIO5.js","./normalizeUtilsCommon-Cu3J9F0t.js","./utils-D-9D8rBi.js","./utils-CUJ1llju.js","./VertexAttributeLocations-CeCSksA9.js","./VertexElementDescriptor-CVzmm3VW.js","./renderState-B3BF0-MF.js","./Indices-BvpND9Py.js","./BufferView-Cpa_ikJW.js","./ShaderBuilder-BV6atuiR.js"])))=>i.map(i=>d[i]);
import{aN as V,kD as Kt,je as ri,be as Ue,dq as Ua,td as ka,bg as oe,bn as at,kv as Ba,ku as Bt,aZ as et,dn as Na,te as Ha,a$ as Z,bj as Y,br as Ga,b8 as B,gO as qa,kT as Ja,dy as Xa,a5 as li,ad as Ya,fk as Qa,bd as Zi,qf as Za,qk as Ki,cd as vt,fZ as st,g0 as Ke,j3 as Ge,aL as Je,a6 as A,aa as ea,cQ as gt,ac as ta,rP as ia,tf as We,ji as dt,a_ as nt,bq as $e,b4 as se,b9 as tt,b6 as ci,bi as q,bs as Ka,lM as At,bb as aa,tg as es,b3 as it,sr as ts,qi as sa,aW as is,hn as Nt,ds as as,jk as na,iX as ss,th as ns,ti as os,bB as Q,rT as rs,bo as ls,dm as cs,bM as ze,b1 as di,fA as ds,ae as ps,lE as us,tj as hs,dW as pi,km as ui,kl as hi,co as fs,ls as Tt,qN as oa,hr as ms,ap as vs,tk as fi,cF as gs,cR as Ss}from"./main-BGlWJBv6.js";import{t as T}from"./orientedBoundingBox-CirGFKwh.js";import{z as bs,A as xs,B as ys,r as re,C as ei,D as ra,E as ti,F as ws,e as Xe,G as mi,H as la,h as qe,I as ot,d as Ht,f as ke,J as $s,i as Gt,K as Ps,L as ca,M as da,N as pa,v as _s,k as Os,O as Ct,P as zs,Q as Cs,R as ua,S as ne,U as ii,l as ha,t as fa,V as As,W as Ts,X as vi,Y as Ds,Z as gi,_ as pt,$ as Vs,a0 as ma,p as va,a1 as Fe,a2 as Rs,a3 as Si,a4 as Es,a5 as Fs,a6 as bi,a7 as ga,s as D,a8 as Sa,a9 as Ls,aa as Ms,ab as xi,ac as js,ad as Ws,ae as Is,af as yi,m as me,n as be,ag as Us,ah as wi,ai as ks,aj as Bs,ak as ba,al as Ns,b as qt,am as Hs,a as Gs,an as qs,ao as ut,ap as Js,aq as Xs,ar as Ys,as as Qs,at as Zs,au as Ks,av as en,aw as tn,ax as $i,ay as an,az as Pi,aA as _i,aB as sn,aC as nn}from"./VertexColor.glsl-DlgNzMqx.js";import{i as ai,m as on,h as xa,z as rn}from"./BufferView-Cpa_ikJW.js";import{l as ln}from"./Octree-C3G3342x.js";import{t as p,n as R}from"./glsl-CX8y9w8U.js";import"./Texture-CO_ozpoi.js";import{s as ya}from"./ShaderBuilder-BV6atuiR.js";import{_ as wa}from"./preload-helper-DMGCcr4D.js";import{Q as si,t as Jt}from"./InterleavedLayout-CTY1eRo9.js";import{_ as Pt}from"./enums-DQOO6RKE.js";import{w as Ze,u as St,a as Oi,d as cn}from"./renderState-B3BF0-MF.js";import{r as U,t as zi,n as ye}from"./vec3f32-WCVSSNPR.js";import{c as ni,l as dn}from"./Indices-BvpND9Py.js";import{f as pn}from"./computeTranslationToOriginAndRotation-90uAO8Zv.js";import{u as un}from"./hydratedFeatures-BDFHuo25.js";function hn(a){return a==="position"}function fn(a,e){return a==null&&(a=[]),a.push(e),a}function mn(a,e){if(a==null)return null;const t=a.filter(i=>i!==e);return t.length===0?null:t}function Tr(a,e,t,i,s){ht[0]=a.get(e,0),ht[1]=a.get(e,1),ht[2]=a.get(e,2),bs(ht,Te,3),t.set(s,0,Te[0]),i.set(s,0,Te[1]),t.set(s,1,Te[2]),i.set(s,1,Te[3]),t.set(s,2,Te[4]),i.set(s,2,Te[5])}const ht=V(),Te=new Float32Array(6);let vn=class{constructor(e={}){this.id=Kt(),this._highlightIds=new Set,this._shaderTransformation=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerViewUid=e.layerViewUid,e.isElevationSource&&(this.lastValidElevationBB=new $a),this._geometries=e.geometries?Array.from(e.geometries):[]}dispose(){this._geometries.length=0}get layer(){return this._layer}set layer(e){ai(this._layer==null||e==null,"Object3D can only be added to a single Layer"),this._layer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e);for(const t of this._highlightIds)e.addHighlight(t);this._emit("geometryAdded",{object:this,geometry:e}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}removeGeometry(e){const t=this._geometries.splice(e,1)[0];if(t){for(const i of this._highlightIds)t.removeHighlight(i);this._emit("geometryRemoved",{object:this,geometry:t}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,t,i=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:t,sync:i}),hn(t)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const t of this._geometries)t.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new xs;for(const t of this._geometries)t.occludees=fn(t.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const t of this._geometries)t.occludees=mn(t.occludees,e);this._emit("occlusionChanged",this)}highlight(e){const t=new ys(e);for(const i of this._geometries)i.addHighlight(t);return this._emit("highlightChanged",this),this._highlightIds.add(t),t}removeHighlight(e){this._highlightIds.delete(e);for(const t of this._geometries)t.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===0?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,t){return ri(t,this.transformation,e.transformation)}getCombinedShaderTransformation(e,t=Ue()){return ri(t,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=new Ci,this._validateBoundingVolume(this._bvWorldSpace,0)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=new Ci,this._validateBoundingVolume(this._bvObjectSpace,1)),this._bvObjectSpace}_validateBoundingVolume(e,t){const i=t===1;for(const s of this._geometries){const n=s.boundingInfo;n&&gn(n,e,i?s.transformation:this.getCombinedShaderTransformation(s))}Ua(e.bounds.center,e.min,e.max,.5);for(const s of this._geometries){const n=s.boundingInfo;if(n==null)continue;const o=i?s.transformation:this.getCombinedShaderTransformation(s),l=ka(o);oe(Ai,n.center,o);const r=at(Ai,e.bounds.center),d=n.radius*l;e.bounds.radius=Math.max(e.bounds.radius,r+d)}}_invalidateBoundingVolume(){const e=this._bvWorldSpace?.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this.layer&&e&&this.layer.notifyObjectBBChanged(this,e)}_emit(e,t){this.layer?.events.emit(e,t)}get geometries(){return this._geometries}get transformation(){return this._transformation??Ba}set transformation(e){this._transformation=Bt(this._transformation??Ue(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?Bt(this._shaderTransformation??Ue(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}get test(){}},$a=class{constructor(){this._data=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE]}get min(){return et(this._data[0],this._data[1],this._data[2])}get max(){return et(this._data[3],this._data[4],this._data[5])}minWith(e){const{_data:t}=this;t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.min(t[2],e[2])}maxWith(e){const{_data:t}=this;t[3]=Math.max(t[3],e[0]),t[4]=Math.max(t[4],e[1]),t[5]=Math.max(t[5],e[2])}assignMinMax(e,t){for(let i=0;i<3;++i)this._data[0+i]=e[i],this._data[3+i]=t[i]}isEmpty(){return this._data[3]<this._data[0]&&this._data[4]<this._data[1]&&this._data[5]<this._data[2]}},Ci=class extends $a{constructor(){super(...arguments),this.bounds=new Na}};function gn(a,e,t){const i=a.bbMin,s=a.bbMax;if(Ha(t)){const n=Z(Sn,t[12],t[13],t[14]);return Y(he,i,n),Y(xe,s,n),e.minWith(he),void e.maxWith(xe)}if(oe(he,i,t),Ga(i,s))return e.minWith(he),void e.maxWith(he);oe(xe,s,t),e.minWith(he),e.minWith(xe),e.maxWith(he),e.maxWith(xe);for(let n=0;n<3;++n)B(he,i),B(xe,s),he[n]=s[n],xe[n]=i[n],oe(he,he,t),oe(xe,xe,t),e.minWith(he),e.minWith(xe),e.maxWith(he),e.maxWith(xe)}const Sn=V(),he=V(),xe=V(),Ai=V(),bn=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];let xn=class{constructor(e,t,i=""){this.stage=e,this.apiLayerViewUid=i,this.id=Kt(),this.events=new qa,this.visible=!0,this.sliceable=!1,this._objectsAdded=new Array,this._handles=new Ja,this._objects=new Map,this._pickable=!0,this.visible=t?.visible??!0,this._pickable=t?.pickable??!0,this.updatePolicy=t?.updatePolicy??0,e.addLayer(this);for(const s of bn)this._handles.add(this.events.on(s,n=>e.handleEvent(s,n)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.removeLayer(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}getObject(e){return Xa(this._objects.get(e))}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.set(e.id,e),e.layer=this,this.events.emit("layerObjectAdded",e),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.delete(e.id)&&(this.events.emit("layerObjectRemoved",e),e.layer=null,this._octree!=null&&(li(this._objectsAdded,e)||this._octree.remove([e])))}addMany(e){for(const t of e)this._objects.set(t.id,t),t.layer=this;this.events.emit("layerObjectsAdded",e),this._octree!=null&&this._objectsAdded.push(...e)}removeMany(e){const t=new Array;for(const i of e)this._objects.delete(i.id)&&t.push(i);if(t.length!==0&&(this.events.emit("layerObjectsRemoved",t),t.forEach(i=>i.layer=null),this._octree!=null)){for(let i=0;i<t.length;)li(this._objectsAdded,t[i])?(t[i]=t[t.length-1],t.length-=1):++i;this._octree.remove(t)}}commit(){this.stage.commitLayer(this)}sync(){this.updatePolicy!==1&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){this._octree==null||this._objectsAdded.includes(e)||this._octree.update(e,t)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.size>50?(this._octree=new ln(e=>e.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.values())):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded),this._objectsAdded.length=0),this._octree}invalidateSpatialQueryAccelerator(){this._octree=Ya(this._octree),this._objectsAdded.length=0}get test(){}},yn=class{constructor(e,t){this.vec3=e,this.id=t}};function Ti(a,e,t,i){return new yn(et(a,e,t),i)}const X={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},wn={dash:X.dash,"dash-dot":[...X.dash,...X.dot],dot:X.dot,"long-dash":X["long-dash"],"long-dash-dot":[...X["long-dash"],...X.dot],"long-dash-dot-dot":[...X["long-dash"],...X.dot,...X.dot],none:null,"short-dash":X["short-dash"],"short-dash-dot":[...X["short-dash"],...X["short-dot"]],"short-dash-dot-dot":[...X["short-dash"],...X["short-dot"],...X["short-dot"]],"short-dot":X["short-dot"],solid:null},$n=8;let Pn=class{constructor(e,t,i){this.image=e,this.width=t,this.length=i,this.uuid=Qa()}};function Pa(a){return a!=null&&"image"in a}function _n(a,e){return a==null?a:{pattern:a.slice(),pixelRatio:e}}function Mr(a){return{pattern:[a,a],pixelRatio:2}}function jr(a){switch(a?.type){case"style":return On(a.style);case"image":return new Pn(a.image,a.width,a.length);case void 0:case null:return null}return null}function On(a){return a!=null?_n(wn[a],$n):null}const Di=8;function zn(a,e){const{vertex:t,attributes:i}=a;t.uniforms.add(new re("intrinsicWidth",o=>o.width));const{hasScreenSizePerspective:s,spherical:n}=e;s?(a.include(ei,e),ra(t),ti(t,e),t.uniforms.add(new ws("inverseViewMatrix",(o,l)=>Zi(Vi,Za(Vi,l.camera.viewMatrix,o.origin)))),t.code.add(p`
      float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
        vec3 worldPos = (inverseViewMatrix * vec4(pos, 1)).xyz;
        vec3 groundUp = ${n?p`normalize(worldPos + localOrigin)`:p`vec3(0.0, 0.0, 1.0)`};
        float absCosAngle = abs(dot(groundUp, normalize(worldPos - cameraPosition)));

        return screenSizePerspectiveScaleFloat(size, absCosAngle, length(pos), screenSizePerspective);
      }
    `)):t.code.add(p`float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
return size;
}`),e.hasVVSize?(i.add("sizeFeatureAttribute","float"),t.uniforms.add(new Xe("vvSizeMinSize",o=>o.vvSize.minSize),new Xe("vvSizeMaxSize",o=>o.vvSize.maxSize),new Xe("vvSizeOffset",o=>o.vvSize.offset),new Xe("vvSizeFactor",o=>o.vvSize.factor),new Xe("vvSizeFallback",o=>o.vvSize.fallback)),t.code.add(p`
    float getSize(${R(s,"vec3 pos")}) {
      float size = isnan(sizeFeatureAttribute)
        ? vvSizeFallback.x
        : intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;

      return ${R(s,"applyLineSizeScreenSizePerspective(size, pos)","size")};
    }
    `)):(i.add("size","float"),t.code.add(p`
    float getSize(${R(s,"vec3 pos")}) {
      float fullSize = intrinsicWidth * size;
      return ${R(s,"applyLineSizeScreenSizePerspective(fullSize, pos)","fullSize")};
    }
    `)),e.hasVVOpacity?(i.add("opacityFeatureAttribute","float"),t.constants.add("vvOpacityNumber","int",8),t.uniforms.add(new mi("vvOpacityValues",Di,o=>o.vvOpacity.values),new mi("vvOpacityOpacities",Di,o=>o.vvOpacity.opacityValues),new re("vvOpacityFallback",o=>o.vvOpacity.fallback,{supportsNaN:!0})),t.code.add(p`
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
        return ${R(e.hasVVColor,"color","vec4(color.rgb, vvOpacityFallback)")};
      }

      return vec4(color.rgb, interpolateOpacity(opacityFeatureAttribute));
    }
    `)):t.code.add(p`vec4 applyOpacity(vec4 color) {
return color;
}`),e.hasVVColor?(a.include(la,e),i.add("colorFeatureAttribute","float"),t.code.add(p`vec4 getColor() {
vec4 color = interpolateVVColor(colorFeatureAttribute);
if (isnan(color.r)) {
return vec4(0);
}
return applyOpacity(color);
}`)):(i.add("color","vec4"),t.code.add(p`vec4 getColor() {
return applyOpacity(color);
}`))}const Vi=Ue();function Cn(a){a.vertex.code.add("#define noPerspectiveWrite(x, w) (x * w)")}function Xt(a){a.fragment.code.add("#define noPerspectiveRead(x) (x * gl_FragCoord.w)")}function An(a){return a.pattern.map(e=>Math.round(e*a.pixelRatio))}function Tn(a){if(a==null)return 1;const e=An(a);return Math.floor(e.reduce((t,i)=>t+i))}function Dn(a){return a==null?Ki:a.length===4?a:vt(Vn,a[0],a[1],a[2],1)}const Vn=st();function Rn(a,e){if(!e.stippleEnabled)return void a.fragment.code.add(p`float getStippleAlpha(float lineWidth) { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);const t=!(e.draped&&e.stipplePreferContinuous),{vertex:i,fragment:s}=a;e.draped||(ti(i,e),i.uniforms.add(new qe("worldToScreenPerDistanceRatio",({camera:n})=>1/n.perScreenPixelRatio)).code.add(p`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),a.varyings.add("vStippleDistance","float"),a.varyings.add("vStippleDistanceLimits","vec2"),a.varyings.add("vStipplePatternStretch","float"),i.code.add(p`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${p.float(En)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),ot(i),i.code.add(p`
    vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {

      // First check if the segment is long enough to support fully screen space patterns.
      // Force sparse mode for segments that are very large in screen space even if it is not allowed,
      // to avoid imprecision from calculating with large floats.
      if (segmentLengthPseudoScreen >= ${t?"patternLength":"1e4"}) {
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
  `),s.uniforms.add(new Ht("stipplePatternTexture",n=>n.stippleTexture),new re("stipplePatternPixelSizeInv",n=>1/_a(n))),e.stippleOffColorEnabled&&s.uniforms.add(new ke("stippleOffColor",n=>Dn(n.stippleOffColor))),a.include(Xt),e.worldSizedImagePattern?(a.varyings.add("vStippleV","float"),a.fragment.include($s),s.code.add(p`vec4 getStippleColor(out bool isClamped) {
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
}`)):s.code.add(p`
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
      return ${e.stippleOffColorEnabled?"mix(color, stippleOffColor, stippleAlpha)":"vec4(color.rgb, color.a * stippleAlpha)"};
    }
  `),s.code.add(p`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${R(!e.stippleOffColorEnabled,"if (stippleAlpha < threshold) { discard; }")}
    }
  `)}function _a(a){const e=a.stipplePattern;return Pa(e)?e.length:e?Tn(e)/e.pixelRatio:1}const En=.4,Oa=64,Fn=Oa/2,Ln=Fn/5,Mn=Oa/Ln,Wr=.25;function jn(a,e){const t=a.vertex,i=e.hasScreenSizePerspective;ot(t),t.uniforms.get("markerScale")==null&&t.constants.add("markerScale","float",1),t.constants.add("markerSizePerLineWidth","float",Mn).code.add(p`
  float getLineWidth(${R(i,"vec3 pos")}) {
     return max(getSize(${R(i,"pos")}), 1.0) * pixelRatio;
  }

  float getScreenMarkerSize(float lineWidth) {
    return markerScale * markerSizePerLineWidth * lineWidth;
  }
  `),e.space===2&&(t.constants.add("maxSegmentLengthFraction","float",.45),t.uniforms.add(new qe("perRenderPixelRatio",s=>s.camera.perRenderPixelRatio)),t.code.add(p`
  bool areWorldMarkersHidden(vec3 pos, vec3 other) {
    vec3 midPoint = mix(pos, other, 0.5);
    float distanceToCamera = length(midPoint);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    float worldMarkerSize = getScreenMarkerSize(getLineWidth(${R(i,"pos")})) * screenToWorldRatio;
    float segmentLen = length(pos - other);
    return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
  }

  float getWorldMarkerSize(vec3 pos) {
    float distanceToCamera = length(pos);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    return getScreenMarkerSize(getLineWidth(${R(i,"pos")})) * screenToWorldRatio;
  }
  `))}const za=p`vec4(0.0, 0.0, 2.0, 1.0)`,Wn=Ke(1),In=Ke(1);function Un(a,e){const{hasAnimation:t,animation:i}=e;if(!t)return;const{attributes:s,varyings:n,vertex:o,fragment:l}=a;s.add("timeStamps","vec4"),n.add("vTimeStamp","float"),n.add("vFirstTime","float"),n.add("vLastTime","float"),n.add("vTransitionType","float"),o.main.add(p`vTimeStamp = timeStamps.x;
vFirstTime = timeStamps.y;
vLastTime = timeStamps.z;
vTransitionType = timeStamps.w;`),i===3&&l.constants.add("decayRate","float",2.3),l.code.add(p`
    float getTrailOpacity(float x) {
      if (x < 0.0) {
        return 0.0;
      }

      ${kn(i)}
    }`),l.uniforms.add(new re("timeElapsed",r=>r.timeElapsed),new re("trailLength",r=>r.trailLength),new re("speed",r=>r.animationSpeed),new Gt("startEndTime",r=>Ge(Bn,r.startTime,r.endTime))),l.constants.add("fadeInTime","float",In),l.constants.add("fadeOutTime","float",Wn),l.constants.add("incomingTransition","int",0),l.constants.add("outgoingTransition","int",2),l.code.add(p`float fadeIn(float x) {
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
}`)}function kn(a){switch(a){case 2:return"return x >= 0.0 && x <= 1.0 ? 1.0 : 0.0;";case 3:return`float cutOff = exp(-decayRate);
        return (exp(-decayRate * x) - cutOff) / (1.0 - cutOff);`;default:return"return 1.0;"}}const Bn=Je(),_t=1;function Nn(a){const e=new ya,{attributes:t,varyings:i,vertex:s,fragment:n}=e,{applyMarkerOffset:o,draped:l,output:r,capType:d,stippleEnabled:c,falloffEnabled:u,roundJoins:x,wireframe:g,innerColorEnabled:y,hasAnimation:S,hasScreenSizePerspective:h,worldSizedImagePattern:b}=a;n.include(Ps),e.include(zn,a),e.include(Rn,a),e.include(ca,a),e.include(da,a),e.include(Un,a);const w=o&&!l;w&&(s.uniforms.add(new re("markerScale",v=>v.markerScale)),e.include(jn,{space:2,hasScreenSizePerspective:h})),pa(s,a),s.uniforms.add(new _s("inverseProjectionMatrix",v=>v.camera.inverseProjectionMatrix),new Os("nearFar",v=>v.camera.nearFar),new re("miterLimit",v=>v.join!=="miter"?0:v.miterLimit),new Ct("viewport",v=>v.camera.fullViewport)),s.constants.add("LARGE_HALF_FLOAT","float",65500),t.add("position","vec3"),t.add("previousDelta","vec4"),t.add("nextDelta","vec4"),t.add("lineParameters","vec2"),t.add("u0","float"),i.add("vColor","vec4"),i.add("vpos","vec3",{invariant:!0}),i.add("vLineDistance","float"),i.add("vLineWidth","float");const m=c;m&&i.add("vLineSizeInv","float");const _=d===2,f=c&&_,P=u||f;P&&i.add("vLineDistanceNorm","float"),_&&(i.add("vSegmentSDF","float"),i.add("vReverseSegmentSDF","float")),s.code.add(p`vec2 perpendicular(vec2 v) {
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
}`),s.code.add(p`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),s.code.add(p`void clip(
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
}`),ot(s),s.constants.add("aaWidth","float",c?0:1).main.add(p`
    // unpack values from vertex type
    bool isStartVertex = abs(abs(lineParameters.y) - 3.0) == 1.0;
    vec3 prevPosition = position + previousDelta.xyz * previousDelta.w;
    vec3 nextPosition = position + nextDelta.xyz * nextDelta.w;

    float coverage = 1.0;

    // Check for special value of lineParameters.y which is used by the Renderer when graphics are removed before the
    // VBO is recompacted. If this is the case, then we just project outside of clip space.
    if (lineParameters.y == 0.0) {
      gl_Position = ${za};
    }
    else {
      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);

      bool isJoin = abs(lineParameters.y) < 3.0;
  `),w&&s.main.add(p`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos.xyz, other.xyz);
if (!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos.xyz) * 0.5;
}`),e.include(Cn),s.main.add(p`
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

      float lineSize = getSize(${R(h,"clippedPos")});
      ${R(c&&h,"float patternLineSize = getSize(clippedCenter);")}
      ${R(c&&!h,"float patternLineSize = lineSize;")}

      ${R(b,p`
          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio * worldToScreenRatio;
          if (lineWidth < 1.0) {
            coverage = lineWidth;
            lineWidth = 1.0;
          }
        `,p`
          if (lineSize < 1.0) {
            coverage = lineSize; // convert sub-pixel coverage to alpha
            lineSize = 1.0;
          }

          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio;
        `)}

      vLineWidth = noPerspectiveWrite(lineWidth, pos.w);
      ${m?p`vLineSizeInv = noPerspectiveWrite(1.0 / lineSize, pos.w);`:""}
  `),(c||_)&&s.main.add(p`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${_?p`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),s.main.add(p`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
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
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),x?s.main.add(p`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = perpendicular(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${c?p`min(1.0, subdivisionFactor * ${p.float((_t+2)/(_t+1))})`:p`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(lineParameters.y) * factor * rotationAngle);
      `):s.main.add(p`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = perpendicular(joinDisplacementDir);`);const O=d!==0;return s.main.add(p`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${O?p`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),s.main.add(p`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(lineParameters.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = noPerspectiveWrite(sign(lineParameters.y), pos.w);

    vLineDistance = lineWidth * lineDistNorm;
    ${P?p`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),_&&s.main.add(p`vec2 segmentDir = normalize(segment);
vSegmentSDF = noPerspectiveWrite((isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir)), pos.w);
vReverseSegmentSDF = noPerspectiveWrite((isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir)), pos.w);`),c&&(l?s.uniforms.add(new qe("worldToScreenRatio",v=>1/v.screenToPCSRatio)):s.main.add(p`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),s.main.add(p`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),l?s.main.add(p`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = u0 * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):s.main.add(p`float startPseudoScreen = mix(u0, u0 - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),s.uniforms.add(new re("stipplePatternPixelSize",v=>_a(v))),s.main.add(p`
      float patternLength = patternLineSize * stipplePatternPixelSize;

      ${R(b,p`
          float uu = mix(u0, u0 - segmentLengthRender, isEndVertex);
          vStippleDistanceLimits = vec2(uu, uu + segmentLengthRender);
          vStipplePatternStretch = 1.0;

          // The v-coordinate used in case of an image pattern.
          bool isLeft = sign(lineParameters.y) < 0.0;
          vStippleV = isLeft ? 0.0 : 1.0;
        `,p`
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
    `)),s.main.add(p`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a = noPerspectiveWrite(vColor.a * coverage, pos.w);

      ${g&&!l?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),e.fragment.include(zs,a),e.include(Cs,a),n.include(ua),n.main.add(p`discardBySlice(vpos);
discardByTerrainDepth();`),e.include(Xt),n.main.add(p`
    float lineWidth = noPerspectiveRead(vLineWidth);
    float lineDistance = noPerspectiveRead(vLineDistance);
    ${R(P,p`float lineDistanceNorm = noPerspectiveRead(vLineDistanceNorm);`)}
  `),g?n.main.add(p`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(_&&n.main.add(p`
        float sdf = noPerspectiveRead(min(vSegmentSDF, vReverseSegmentSDF));
        vec2 fragmentPosition = vec2(min(sdf, 0.0), lineDistance);

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - lineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${p.float(ne)}) {
          discard;
        }
      `),f?n.main.add(p`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        lineDistanceNorm
      );
      float stippleRadius = length(stipplePosition * lineWidth);
      float stippleCapSDF = (stippleRadius - lineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${p.float(ne)}, stippleCoverage);
      `):n.main.add(p`float stippleAlpha = getStippleAlpha(lineWidth);`),r!==9&&n.main.add(p`discardByStippleAlpha(stippleAlpha, ${p.float(ne)});`),e.include(Xt),n.uniforms.add(new ke("intrinsicColor",v=>v.color)).main.add(p`vec4 color = intrinsicColor * vColor;
color.a = noPerspectiveRead(color.a);`),y&&n.uniforms.add(new ke("innerColor",v=>v.innerColor??v.color),new re("innerWidth",(v,E)=>v.innerWidth*E.camera.pixelRatio)).main.add(p`float distToInner = abs(lineDistance) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`),n.main.add(p`vec4 finalColor = blendStipple(color, stippleAlpha);`),u&&(n.uniforms.add(new re("falloff",v=>v.falloff)),n.main.add(p`finalColor.a *= pow(max(0.0, 1.0 - abs(lineDistanceNorm)), falloff);`)),c||n.main.add(p`float featherStartDistance = max(lineWidth - 2.0, 0.0);
float value = abs(lineDistance);
float feather = (value - featherStartDistance) / (lineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`),S&&n.main.add(p`
        finalColor = animate(finalColor);

        ${R(r!==9,p`
            if (finalColor.a <= ${p.float(ne)}) {
              discard;
            }`)}
      `)),n.main.add(p`outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),e}const Hn=Object.freeze(Object.defineProperty({__proto__:null,build:Nn,ribbonlineNumRoundJoinSubdivisions:_t},Symbol.toStringTag,{value:"Module"}));let Yt=class extends ha{constructor(e,t){super(e,t,Jt(Ca(t))),this.shader=new fa(Hn,()=>wa(()=>import("./HUDMaterial.glsl-BYndqZ61.js").then(i=>i.R),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]),import.meta.url)),this.primitiveType=t.wireframe?Pt.LINES:Pt.TRIANGLE_STRIP}_makePipelineState(e,t){const{oitPass:i,output:s,hasEmission:n,hasOccludees:o,hasPolygonOffset:l}=e,r=i===0,d=i===2;return Ze({blending:Fe(s)?ma(i):null,depthTest:Vs(i),depthWrite:As(e),drawBuffers:pt(s,va(i,n)),colorWrite:St,stencilWrite:o?gi:null,stencilTest:o?t?vi:Ds:null,polygonOffset:r||d?l?Ri:null:Ts})}initializePipeline(e){if(e.occluder){const t=e.hasPolygonOffset?Ri:null,{output:i,hasOccludees:s}=e;this._occluderPipelineTransparent=Ze({blending:Oi,polygonOffset:t,depthTest:Si,depthWrite:null,colorWrite:St,stencilWrite:null,stencilTest:s?Rs:null,drawBuffers:pt(i)}),this._occluderPipelineOpaque=Ze({blending:Oi,polygonOffset:t,depthTest:s?Si:bi,depthWrite:null,colorWrite:St,stencilWrite:s?Fs:null,stencilTest:s?Es:null,drawBuffers:pt(i)}),this._occluderPipelineMaskWrite=Ze({blending:null,polygonOffset:t,depthTest:bi,depthWrite:null,colorWrite:null,stencilWrite:s?gi:null,stencilTest:s?vi:null,drawBuffers:pt(i)})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){if(t)return this._occludeePipeline;switch(e.occluder){case 12:return this._occluderPipelineTransparent??super.getPipeline(e);case 11:return this._occluderPipelineOpaque??super.getPipeline(e);default:e.occluder;case void 0:case null:return this._occluderPipelineMaskWrite??super.getPipeline(e)}}};Yt=A([ea("esri.views.3d.webgl-engine.shaders.RibbonLineTechnique")],Yt);const Ri={factor:0,units:-4};function Ca(a){const e=si().vec3f("position").vec4f16("previousDelta").vec4f16("nextDelta").f32("u0").vec2f16("lineParameters");return a.hasVVColor?e.f32("colorFeatureAttribute"):e.vec4u8("color",{glNormalized:!0}),a.hasVVSize?e.f32("sizeFeatureAttribute"):e.f32("size"),a.hasVVOpacity&&e.f32("opacityFeatureAttribute"),ii()&&e.vec4u8("olidColor"),a.hasAnimation&&e.vec4f16("timeStamps"),e}let j=class extends ga{constructor(e){super(),this.spherical=e,this.capType=0,this.emissionSource=0,this.animation=2,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVVOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.hasScreenSizePerspective=!1,this.worldSizedImagePattern=!1,this.textureCoordinateType=0,this.occlusionPass=!1,this.hasVVInstancing=!1,this.hasSliceTranslatedView=!0,this.overlayEnabled=!1,this.snowCover=!1}get hasAnimation(){return this.animation!==0}};A([D({count:3})],j.prototype,"capType",void 0),A([D({count:8})],j.prototype,"emissionSource",void 0),A([D({count:4})],j.prototype,"animation",void 0),A([D()],j.prototype,"hasPolygonOffset",void 0),A([D()],j.prototype,"writeDepth",void 0),A([D()],j.prototype,"draped",void 0),A([D()],j.prototype,"stippleEnabled",void 0),A([D()],j.prototype,"stippleOffColorEnabled",void 0),A([D()],j.prototype,"stipplePreferContinuous",void 0),A([D()],j.prototype,"roundJoins",void 0),A([D()],j.prototype,"applyMarkerOffset",void 0),A([D()],j.prototype,"hasVVSize",void 0),A([D()],j.prototype,"hasVVColor",void 0),A([D()],j.prototype,"hasVVOpacity",void 0),A([D()],j.prototype,"falloffEnabled",void 0),A([D()],j.prototype,"innerColorEnabled",void 0),A([D()],j.prototype,"hasOccludees",void 0),A([D()],j.prototype,"occluder",void 0),A([D()],j.prototype,"terrainDepthTest",void 0),A([D()],j.prototype,"cullAboveTerrain",void 0),A([D()],j.prototype,"wireframe",void 0),A([D()],j.prototype,"discardInvisibleFragments",void 0),A([D()],j.prototype,"hasScreenSizePerspective",void 0),A([D()],j.prototype,"worldSizedImagePattern",void 0);let Gn=class extends Sa{constructor(e,t){super(e,Jn),this.produces=new Map([[2,i=>Ls(i)||Fe(i)&&this.parameters.renderOccluded===8],[3,i=>Ms(i)],[11,i=>xi(i)&&this.parameters.renderOccluded===8],[12,i=>xi(i)&&this.parameters.renderOccluded===8],[4,i=>Fe(i)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[9,i=>Fe(i)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[20,i=>js(i)]]),this._configuration=new j(t)}getConfiguration(e,t){super.getConfiguration(e,t,this._configuration);const i=t.slot===20,s=this.parameters.stipplePattern!=null&&this.parameters.stippleTexture!=null&&e!==8,n=s&&i&&this.parameters.isImagePattern();return this._configuration.draped=i,this._configuration.stippleEnabled=s,this._configuration.stippleOffColorEnabled=s&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=s&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&Yn(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasVVSize=this.parameters.hasVVSize,this._configuration.hasVVColor=this.parameters.hasVVColor,this._configuration.hasVVOpacity=this.parameters.hasVVOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=t.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===8,this._configuration.terrainDepthTest=t.terrainDepthTest&&Fe(e),this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration.animation=this.parameters.animation,this._configuration.emissionSource=this.hasEmissions?1:0,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective&&!n,this._configuration.worldSizedImagePattern=n,this._configuration}get visible(){return this.parameters.color[3]>=ne||this.parameters.stipplePattern!=null&&(this.parameters.stippleOffColor?.[3]??0)>ne}setParameters(e,t){e.animation=this.parameters.animation,super.setParameters(e,t)}intersectDraped({attributes:e,screenToWorldRatio:t},i,s,n,o){if(!i.options.selectionMode)return;const l=e.get("size");let r=this.parameters.width;if(this.parameters.vvSize){const h=e.get("sizeFeatureAttribute").data[0];Number.isNaN(h)?r*=this.parameters.vvSize.fallback[0]:r*=gt(this.parameters.vvSize.offset[0]+h*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else l&&(r*=l.data[0]);const d=s[0],c=s[1],u=(r/2+4)*t;let x=Number.MAX_VALUE,g=0;const y=e.get("position").data,S=Qt(this.parameters,e)?y.length-2:y.length-5;for(let h=0;h<S;h+=3){const b=y[h],w=y[h+1],m=(h+3)%y.length,_=d-b,f=c-w,P=y[m]-b,O=y[m+1]-w,v=gt((P*_+O*f)/(P*P+O*O),0,1),E=P*v-_,$=O*v-f,L=E*E+$*$;L<x&&(x=L,g=h/3)}x<u*u&&n(o.distance,o.normal,g)}intersect(e,t,i,s,n,o){const{options:l,camera:r,rayBegin:d,rayEnd:c}=i;if(!l.selectionMode||!e.visible||!r)return;if(!on(t))return void ta.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const u=e.attributes,x=u.get("position").data;let g=this.parameters.width;if(this.parameters.vvSize){const m=u.get("sizeFeatureAttribute").data[0];Number.isNaN(m)||(g*=gt(this.parameters.vvSize.offset[0]+m*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0]))}else u.has("size")&&(g*=u.get("size").data[0]);const y=Qn;ia(y,i.point);const S=g*r.pixelRatio/2+4*r.pixelRatio;Z(Ye[0],y[0]-S,y[1]+S,0),Z(Ye[1],y[0]+S,y[1]+S,0),Z(Ye[2],y[0]+S,y[1]-S,0),Z(Ye[3],y[0]-S,y[1]-S,0);for(let m=0;m<4;m++)if(!r.unprojectFromRenderScreen(Ye[m],Oe[m]))return;dt(r.eye,Oe[0],Oe[1],Vt),dt(r.eye,Oe[1],Oe[2],Rt),dt(r.eye,Oe[2],Oe[3],Et),dt(r.eye,Oe[3],Oe[0],Ft);let h=Number.MAX_VALUE,b=0;const w=Qt(this.parameters,u)?x.length-2:x.length-5;for(let m=0;m<w;m+=3){te[0]=x[m]+t[12],te[1]=x[m+1]+t[13],te[2]=x[m+2]+t[14];const _=(m+3)%x.length;if(ie[0]=x[_]+t[12],ie[1]=x[_+1]+t[13],ie[2]=x[_+2]+t[14],$e(Vt,te)<0&&$e(Vt,ie)<0||$e(Rt,te)<0&&$e(Rt,ie)<0||$e(Et,te)<0&&$e(Et,ie)<0||$e(Ft,te)<0&&$e(Ft,ie)<0)continue;const f=r.projectToRenderScreen(te,Zn),P=r.projectToRenderScreen(ie,Kn);if(f==null||P==null)continue;if(f[2]<0&&P[2]>0){se(Pe,te,ie);const v=r.frustum,E=-$e(v[4],te)/tt(Pe,ci(v[4]));if(q(Pe,Pe,E),Y(te,te,Pe),!r.projectToRenderScreen(te,f))continue}else if(f[2]>0&&P[2]<0){se(Pe,ie,te);const v=r.frustum,E=-$e(v[4],ie)/tt(Pe,ci(v[4]));if(q(Pe,Pe,E),Y(ie,ie,Pe),!r.projectToRenderScreen(ie,P))continue}else if(f[2]<0&&P[2]<0)continue;f[2]=0,P[2]=0;const O=Ka(At(f,P,Li),y);O<h&&(h=O,B(Ei,te),B(Fi,ie),b=m/3)}if(h<S*S){let m=Number.MAX_VALUE;if(es(At(Ei,Fi,Li),At(d,c,eo),De)){se(De,De,d);const _=it(De);q(De,De,1/_),m=_/at(d,c)}o(m,De,b)}}get hasEmissions(){return this.parameters.emissiveStrength>0}createBufferWriter(){return new Xn(Ca(this.parameters),this.parameters)}createGLMaterial(e){return new qn(e)}validateParameters(e){e.join!=="miter"&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}update(e){return!!this.parameters.hasAnimation&&(this.setParameters({timeElapsed:ts(e.time)},!1),e.dt!==0)}};class qn extends Is{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures?.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){const{stipplePattern:t}=this._material.parameters;return this._stipplePattern!==t&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(t,this._stipplePattern)}),this._stipplePattern=t),this.getTechnique(Yt,e)}}let Jn=class extends Ws{constructor(){super(...arguments),this._width=0,this.color=sa,this.join="miter",this.cap=0,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1,this.timeElapsed=Ke(0),this.animation=0,this.animationSpeed=1,this.trailLength=1,this.startTime=Ke(0),this.endTime=Ke(1/0),this.emissiveStrength=0}get width(){return this.isImagePattern()?this.stipplePattern.width:this._width}set width(e){this._width=e}get transparent(){return this.color[3]<1||this.hasAnimation||this.stipplePattern!=null&&(this.stippleOffColor?.[3]??0)<1}get hasAnimation(){return this.animation!==0}isImagePattern(){return Pa(this.stipplePattern)&&this.stippleTexture!=null}},Xn=class{constructor(e,t){this.layout=e,this._parameters=t;const i=t.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=i;break;case"round":this.numJoinSubdivisions=_t+i}}_isClosed(e){return Qt(this._parameters,e)}allocate(e){return this.layout.createBuffer(e)}elementCount(e){const i=e.get("position").indices.length/2+1,s=this._isClosed(e);let n=s?2:4;return n+=((s?i:i-1)-(s?0:1))*(2*this.numJoinSubdivisions+4),n+=2,this._parameters.wireframe&&(n=2+4*(n-2)),n}write(e,t,i,s,n,o){const l=this.layout,r=i.get("position"),d=r.indices,c=r.data.length/3,u=i.get("distanceToStart")?.data;d&&d.length!==2*(c-1)&&console.warn("RibbonLineMaterial does not support indices");const x=l.fields.has("sizeFeatureAttribute");let g=1,y=null;if(x){const F=i.get("sizeFeatureAttribute");F.data.length===1?g=F.data[0]:y=F.data}else g=i.get("size")?.data[0]??1;let S=[1,1,1,1],h=0,b=null;const w=l.fields.has("colorFeatureAttribute");if(w){const F=i.get("colorFeatureAttribute");F.data.length===1?h=F.data[0]:b=F.data}else S=i.get("color")?.data??S;const m=i.get("timeStamps")?.data,_=m&&l.fields.has("timeStamps"),f=l.fields.has("opacityFeatureAttribute");let P=0,O=null;if(f){const F=i.get("opacityFeatureAttribute");F.data.length===1?P=F.data[0]:O=F.data}const v=new Float32Array(n.buffer),E=xa(n.buffer),$=new Uint8Array(n.buffer),L=l.stride/4;let z=o*L;const we=z;let N=0;const ve=u?(F,Se,Ae)=>N=u[Ae]:(F,Se,Ae)=>N+=at(F,Se),de=v.BYTES_PER_ELEMENT/E.BYTES_PER_ELEMENT,Ce=4/de,C=ii(),J=(F,Se,Ae,ue,rt,Wa,lt,Ia)=>{v[z++]=Se[0],v[z++]=Se[1],v[z++]=Se[2],yi(F,Se,E,z*de),z+=Ce,yi(Ae,Se,E,z*de),z+=Ce,v[z++]=Ia;let _e=z*de;if(E[_e++]=rt,E[_e++]=Wa,z=Math.ceil(_e/de),w)v[z]=b?.[lt]??h;else{const le=Math.min(4*lt,S.length-4),ct=4*z;$[ct]=255*S[le],$[ct+1]=255*S[le+1],$[ct+2]=255*S[le+2],$[ct+3]=255*S[le+3]}if(z++,v[z++]=y?.[lt]??g,f&&(v[z++]=O?.[lt]??P),C){let le=4*z;s?($[le++]=s[0],$[le++]=s[1],$[le++]=s[2],$[le++]=s[3]):($[le++]=0,$[le++]=0,$[le++]=0,$[le++]=0),z=Math.ceil(.25*le)}_&&(_e=z*de,E[_e++]=ue[0],E[_e++]=ue[1],E[_e++]=ue[2],E[_e++]=ue[3],z=Math.ceil(_e/de))};z+=L,Z(M,r.data[0],r.data[1],r.data[2]),_&&vt(ae,m[0],m[1],m[2],m[3]),e&&oe(M,M,e);const K=this._isClosed(i);if(K){const F=r.data.length-3;Z(H,r.data[F],r.data[F+1],r.data[F+2]),e&&oe(H,H,e)}else Z(I,r.data[3],r.data[4],r.data[5]),e&&oe(I,I,e),J(M,M,I,ae,1,-4,0,0),J(M,M,I,ae,1,4,0,0),B(H,M),B(M,I),_&&vt(ae,m[4],m[5],m[6],m[7]);const pe=K?0:1,ge=K?c:c-1;for(let F=pe;F<ge;F++){const Se=(F+1)%c*3;Z(I,r.data[Se],r.data[Se+1],r.data[Se+2]),e&&oe(I,I,e),ve(H,M,F),J(H,M,I,ae,0,-1,F,N),J(H,M,I,ae,0,1,F,N);const Ae=this.numJoinSubdivisions;for(let ue=0;ue<Ae;++ue){const rt=(ue+1)/(Ae+1);J(H,M,I,ae,rt,-1,F,N),J(H,M,I,ae,rt,1,F,N)}if(J(H,M,I,ae,1,-2,F,N),J(H,M,I,ae,1,2,F,N),B(H,M),B(M,I),_){const ue=(F+1)%c*4;vt(ae,m[ue],m[ue+1],m[ue+2],m[ue+3])}}return K?(Z(I,r.data[3],r.data[4],r.data[5]),e&&oe(I,I,e),N=ve(H,M,ge),J(H,M,I,ae,0,-1,pe,N),J(H,M,I,ae,0,1,pe,N)):(N=ve(H,M,ge),J(H,M,M,ae,0,-5,ge,N),J(H,M,M,ae,0,5,ge,N)),Dt(v,we+L,v,we,L),z=Dt(v,z-L,v,z,L),this._parameters.wireframe&&this._addWireframeVertices(n,we,z,L),null}_addWireframeVertices(e,t,i,s){const n=new Float32Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT),o=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,i-t);let l=0;const r=d=>l=Dt(o,d,n,l,s);for(let d=0;d<o.length-1;d+=2*s)r(d),r(d+2*s),r(d+1*s),r(d+2*s),r(d+1*s),r(d+3*s)}};function Dt(a,e,t,i,s){for(let n=0;n<s;n++)t[i++]=a[e++];return i}function Qt(a,e){return a.isClosed?e.get("position").indices.length>2:!1}function Yn(a){return a.anchor===1&&a.hideOnShortSegments&&a.placement==="begin-end"&&a.worldSpace}const te=V(),ie=V(),Pe=V(),De=V(),Qn=V(),Zn=We(),Kn=We(),Ei=V(),Fi=V(),Li=aa(),eo=aa(),H=V(),M=V(),I=V(),ae=st(),Ye=[We(),We(),We(),We()],Oe=[V(),V(),V(),V()],Vt=nt(),Rt=nt(),Et=nt(),Ft=nt();let Hr=class{constructor(e){this._originSR=e,this._rootOriginId="root/"+Kt(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5,this._baselineDistance=.5*this._gridSize;const t=this._baselineDistance*to;this._baselineObjectSize=t/io}getOrigin(e){const t=this._origins.get(this._rootOriginId);if(t==null){const c=Ti(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,c),c}const i=this._gridSize,s=Math.round(e[0]/i),n=Math.round(e[1]/i),o=Math.round(e[2]/i),l=`${s}/${n}/${o}`;let r=this._origins.get(l);const d=.5*i;if(se(k,e,t.vec3),k[0]=Math.abs(k[0]),k[1]=Math.abs(k[1]),k[2]=Math.abs(k[2]),k[0]<d&&k[1]<d&&k[2]<d){if(r){const c=Math.max(...k);if(se(k,e,r.vec3),k[0]=Math.abs(k[0]),k[1]=Math.abs(k[1]),k[2]=Math.abs(k[2]),Math.max(...k)<c)return r}return t}return r||(r=Ti(s*i,n*i,o*i,l),this._origins.set(l,r)),r}needsOriginUpdate(e,t,i){const s=at(e.vec3,t),n=Math.max(1,i/this._baselineObjectSize);return s>this._baselineDistance*n}_drawOriginBox(e,t=is(1,1,0,1)){const i=window.view,s=i.stage,n=t.toString();if(!this._objects.has(n)){this._material=new Gn({width:2,color:t},!1);const g=new xn(s,{pickable:!1}),y=new vn({castShadow:!1});g.add(y),this._objects.set(n,y)}const o=this._objects.get(n),l=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],r=l.length,d=new Array(3*r),c=new Array,u=.5*this._gridSize;for(let g=0;g<r;g++)d[3*g]=e[0]+(1&l[g]?u:-u),d[3*g+1]=e[1]+(2&l[g]?u:-u),d[3*g+2]=e[2]+(4&l[g]?u:-u),g>0&&c.push(g-1,g);Nt(d,this._originSR,0,d,i.renderSpatialReference,0,r);const x=new me(this._material,[["position",new T(d,c,3,!0)]],null,2);o.addGeometry(x)}get test(){}};const k=V(),to=2**-23,io=.05;function ao(a,e=!1){return a<=as?e?new Array(a).fill(0):new Array(a):xa(a)}function qr(a,e,t=null){const i=[],s=e.mapPositions,n=so(e,i),o=n.data,l=n.indices.length,r=ni(l);return no(e,i,r),lo(e,i,r),oo(e,i,r),ro(e,i,n.indices,r),co(e,i,n.indices,r),po(e,i),uo(e,i,n.indices,r),ho(e,i,o),new me(a,i,s,2,t)}function so(a,e){const{attributeData:{position:t},removeDuplicateStartEnd:i}=a,s=fo(t)&&i,n=t.length/3-(s?1:0),o=new Array(2*(n-1)),l=s?t.slice(0,-3):t;let r=0;for(let c=0;c<n-1;c++)o[r++]=c,o[r++]=c+1;const d=new T(l,o,3,s);return e.push(["position",d]),d}function no(a,e,t){if(a.attributeData.colorFeature!=null)return;const i=a.attributeData.color;e.push(["color",new T(i??sa,t,4)])}function oo(a,e,t){a.attributeData.normal&&e.push(["normal",new T(a.attributeData.normal,t,3)])}function ro(a,e,t,i){const s=a.attributeData.colorFeature;s!=null&&(typeof s=="number"?e.push(["colorFeatureAttribute",new T([s],i,1,!0)]):e.push(["colorFeatureAttribute",new T(s,t,1,!0)]))}function lo(a,e,t){a.attributeData.sizeFeature==null&&e.push(["size",new T([a.attributeData.size??1],t,1,!0)])}function co(a,e,t,i){const s=a.attributeData.sizeFeature;s!=null&&(typeof s=="number"?e.push(["sizeFeatureAttribute",new T([s],i,1,!0)]):e.push(["sizeFeatureAttribute",new T(s,t,1,!0)]))}function po(a,e){const{attributeData:{position:t,timeStamps:i}}=a;if(!i)return;const s=t.length/3,n=new Array(2*(s-1));let o=0;for(let l=0;l<s-1;l++)n[o++]=l,n[o++]=l+1;e.push(["timeStamps",new T(i,n,Ee,!0)])}function uo(a,e,t,i){const s=a.attributeData.opacityFeature;s!=null&&(typeof s=="number"?e.push(["opacityFeatureAttribute",new T([s],i,1,!0)]):e.push(["opacityFeatureAttribute",new T(s,t,1,!0)]))}function ho(a,e,t){if(a.overlayInfo==null||a.overlayInfo.renderCoordsHelper.viewingMode!==1||!a.overlayInfo.spatialReference.isGeographic)return;const i=na(t.length),s=ss(a.overlayInfo.spatialReference);for(let u=0;u<i.length;u+=3)ns(t,u,i,u,s);const n=t.length/3,o=be(n+1);let l=mo,r=vo,d=0,c=0;Ge(l,i[c++],i[c++]),c++,o[0]=0;for(let u=1;u<n+1;++u)u===n&&(c=0),Ge(r,i[c++],i[c++]),c++,d+=os(l,r),o[u]=d,[l,r]=[r,l];e.push(["distanceToStart",new T(o,e[0][1].indices,1,!0)])}function fo(a){const e=a.length;return a[0]===a[e-3]&&a[1]===a[e-2]&&a[2]===a[e-1]}const mo=Je(),vo=Je(),Ee=4;function go(a,e){const t=ao(a.length*Ee),i=a[0],s=a[a.length-1];for(let n=0;n<a.length;n++)t[n*Ee]=a[n],t[n*Ee+1]=i,t[n*Ee+2]=s,t[n*Ee+3]=e+.5;return t}function Mi(a,e){const t=a[e],i=a[e+1],s=a[e+2];return Math.sqrt(t*t+i*i+s*s)}function So(a,e){const t=a[e],i=a[e+1],s=a[e+2],n=1/Math.sqrt(t*t+i*i+s*s);a[e]*=n,a[e+1]*=n,a[e+2]*=n}function ji(a,e,t){a[e]*=t,a[e+1]*=t,a[e+2]*=t}function bo(a,e,t,i,s,n=e){(s=s||a)[n]=a[e]+t[i],s[n+1]=a[e+1]+t[i+1],s[n+2]=a[e+2]+t[i+2]}function xo(){return Wi??=yo(),Wi}function yo(){const t=new T([0,0,0,255,255,0,255,255],[0,1,2,3],2,!0);return new Us([["uv0",t]])}let Wi=null;const Lt=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],wo=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],$o=[0,0,1,0,1,1,0,1],Po=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Aa=new Array(36);for(let a=0;a<6;a++)for(let e=0;e<6;e++)Aa[6*a+e]=a;const Re=new Array(36);for(let a=0;a<6;a++)Re[6*a]=0,Re[6*a+1]=1,Re[6*a+2]=2,Re[6*a+3]=2,Re[6*a+4]=3,Re[6*a+5]=0;function Jr(a,e){Array.isArray(e)||(e=[e,e,e]);const t=new Array(24);for(let i=0;i<8;i++)t[3*i]=Lt[i][0]*e[0],t[3*i+1]=Lt[i][1]*e[1],t[3*i+2]=Lt[i][2]*e[2];return new me(a,[["position",new T(t,Po,3,!0)],["normal",new T(wo,Aa,3)],["uv0",new T($o,Re,2)]])}const Mt=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],_o=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],Oo=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],zo=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function Xr(a,e){Array.isArray(e)||(e=[e,e,e]);const t=new Array(18);for(let i=0;i<6;i++)t[3*i]=Mt[i][0]*e[0],t[3*i+1]=Mt[i][1]*e[1],t[3*i+2]=Mt[i][2]*e[2];return new me(a,[["position",new T(t,Oo,3,!0)],["normal",new T(_o,zo,3)]])}const bt=U(-.5,0,-.5),xt=U(.5,0,-.5),yt=U(0,0,.5),wt=U(0,.5,0),Le=ye(),Me=ye(),Be=ye(),Ne=ye(),He=ye();se(Le,bt,wt),se(Me,bt,xt),ze(Be,Le,Me),Q(Be,Be),se(Le,xt,wt),se(Me,xt,yt),ze(Ne,Le,Me),Q(Ne,Ne),se(Le,yt,wt),se(Me,yt,bt),ze(He,Le,Me),Q(He,He);const jt=[bt,xt,yt,wt],Co=[0,-1,0,Be[0],Be[1],Be[2],Ne[0],Ne[1],Ne[2],He[0],He[1],He[2]],Ao=[0,1,2,3,1,0,3,2,1,3,0,2],To=[0,0,0,1,1,1,2,2,2,3,3,3];function Yr(a,e){Array.isArray(e)||(e=[e,e,e]);const t=new Array(12);for(let i=0;i<4;i++)t[3*i]=jt[i][0]*e[0],t[3*i+1]=jt[i][1]*e[1],t[3*i+2]=jt[i][2]*e[2];return new me(a,[["position",new T(t,Ao,3,!0)],["normal",new T(Co,To,3)]])}function Qr(a,e,t,i,s={uv:!0}){const n=-Math.PI,o=2*Math.PI,l=-Math.PI/2,r=Math.PI,d=Math.max(3,Math.floor(t)),c=Math.max(2,Math.floor(i)),u=(d+1)*(c+1),x=be(3*u),g=be(3*u),y=be(2*u),S=[];let h=0;for(let m=0;m<=c;m++){const _=[],f=m/c,P=l+f*r,O=Math.cos(P);for(let v=0;v<=d;v++){const E=v/d,$=n+E*o,L=Math.cos($)*O,z=Math.sin(P),we=-Math.sin($)*O;x[3*h]=L*e,x[3*h+1]=z*e,x[3*h+2]=we*e,g[3*h]=L,g[3*h+1]=z,g[3*h+2]=we,y[2*h]=E,y[2*h+1]=f,_.push(h),++h}S.push(_)}const b=new Array;for(let m=0;m<c;m++)for(let _=0;_<d;_++){const f=S[m][_],P=S[m][_+1],O=S[m+1][_+1],v=S[m+1][_];m===0?(b.push(f),b.push(O),b.push(v)):m===c-1?(b.push(f),b.push(P),b.push(O)):(b.push(f),b.push(P),b.push(O),b.push(O),b.push(v),b.push(f))}const w=[["position",new T(x,b,3,!0)],["normal",new T(g,b,3,!0)]];return s.uv&&w.push(["uv0",new T(y,b,2,!0)]),s.offset&&(w[0][0]="offset",w.push(["position",new T(Float64Array.from(s.offset),ni(b.length),3,!0)])),new me(a,w)}function Zr(a,e,t,i){const s=Do(e,t);return new me(a,s)}function Do(a,e,t){let i,s;i=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],s=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let r=0;r<i.length;r+=3)ji(i,r,a/Mi(i,r));let n={};function o(r,d){r>d&&([r,d]=[d,r]);const c=r.toString()+"."+d.toString();if(n[c])return n[c];let u=i.length;return i.length+=3,bo(i,3*r,i,3*d,i,u),ji(i,u,a/Mi(i,u)),u/=3,n[c]=u,u}for(let r=0;r<e;r++){const d=s.length,c=new Array(4*d);for(let u=0;u<d;u+=3){const x=s[u],g=s[u+1],y=s[u+2],S=o(x,g),h=o(g,y),b=o(y,x),w=4*u;c[w]=x,c[w+1]=S,c[w+2]=b,c[w+3]=g,c[w+4]=h,c[w+5]=S,c[w+6]=y,c[w+7]=b,c[w+8]=h,c[w+9]=S,c[w+10]=h,c[w+11]=b}s=c,n={}}const l=wi(i);for(let r=0;r<l.length;r+=3)So(l,r);return[["position",new T(wi(i),s,3,!0)],["normal",new T(l,s,3,!0)]]}function Kr(a,{normal:e,position:t,color:i,rotation:s,size:n,centerOffsetAndDistance:o,uvi:l,featureAttribute:r,olidColor:d=null}={}){const c=t?di(t):V(),u=e?di(e):et(0,0,1),x=i?[i[0],i[1],i[2],i.length>3?i[3]:255]:[255,255,255,255],g=n!=null&&n.length===2?n:[1,1],y=s!=null?[s]:[0],S=ni(1),h=[["position",new T(c,S,3,!0)],["normal",new T(u,S,3,!0)],["color",new T(x,S,4,!0)],["size",new T(g,S,2)],["rotation",new T(y,S,1,!0)]];if(l&&h.push(["uvi",new T(l,S,l.length)]),o!=null){const b=[o[0],o[1],o[2],o[3]];h.push(["centerOffsetAndDistance",new T(b,S,4)])}if(r){const b=[r[0],r[1],r[2],r[3]];h.push(["featureAttribute",new T(b,S,4)])}return new me(a,h,null,1,d,void 0,xo())}function Vo(a,e,t,i,s=!0,n=!0){let o=0;const l=e,r=a;let d=U(0,o,0),c=U(0,o+r,0),u=U(0,-1,0),x=U(0,1,0);i&&(o=r,c=U(0,0,0),d=U(0,o,0),u=U(0,1,0),x=U(0,-1,0));const g=[c,d],y=[u,x],S=t+2,h=Math.sqrt(r*r+l*l);if(i)for(let f=t-1;f>=0;f--){const P=f*(2*Math.PI/t),O=U(Math.cos(P)*l,o,Math.sin(P)*l);g.push(O);const v=U(r*Math.cos(P)/h,-l/h,r*Math.sin(P)/h);y.push(v)}else for(let f=0;f<t;f++){const P=f*(2*Math.PI/t),O=U(Math.cos(P)*l,o,Math.sin(P)*l);g.push(O);const v=U(r*Math.cos(P)/h,l/h,r*Math.sin(P)/h);y.push(v)}const b=new Array,w=new Array;if(s){for(let f=3;f<g.length;f++)b.push(1),b.push(f-1),b.push(f),w.push(0),w.push(0),w.push(0);b.push(g.length-1),b.push(2),b.push(1),w.push(0),w.push(0),w.push(0)}if(n){for(let f=3;f<g.length;f++)b.push(f),b.push(f-1),b.push(0),w.push(f),w.push(f-1),w.push(1);b.push(0),b.push(2),b.push(g.length-1),w.push(1),w.push(2),w.push(y.length-1)}const m=be(3*S);for(let f=0;f<S;f++)m[3*f]=g[f][0],m[3*f+1]=g[f][1],m[3*f+2]=g[f][2];const _=be(3*S);for(let f=0;f<S;f++)_[3*f]=y[f][0],_[3*f+1]=y[f][1],_[3*f+2]=y[f][2];return[["position",new T(m,b,3,!0)],["normal",new T(_,w,3,!0)]]}function el(a,e,t,i,s,n=!0,o=!0){return new me(a,Vo(e,t,i,s,n,o))}function tl(a,e,t,i,s,n,o){const l=s?zi(s):U(1,0,0),r=n?zi(n):U(0,0,0);o??=!0;const d=ye();Q(d,l);const c=ye();q(c,d,Math.abs(e));const u=ye();q(u,c,-.5),Y(u,u,r);const x=U(0,1,0);Math.abs(1-tt(d,x))<.2&&Z(x,0,0,1);const g=ye();ze(g,d,x),Q(g,g),ze(x,g,d);const y=2*i+(o?2:0),S=i+(o?2:0),h=be(3*y),b=be(3*S),w=be(2*y),m=new Array(3*i*(o?4:2)),_=new Array(3*i*(o?4:2));o&&(h[3*(y-2)]=u[0],h[3*(y-2)+1]=u[1],h[3*(y-2)+2]=u[2],w[2*(y-2)]=0,w[2*(y-2)+1]=0,h[3*(y-1)]=h[3*(y-2)]+c[0],h[3*(y-1)+1]=h[3*(y-2)+1]+c[1],h[3*(y-1)+2]=h[3*(y-2)+2]+c[2],w[2*(y-1)]=1,w[2*(y-1)+1]=1,b[3*(S-2)]=-d[0],b[3*(S-2)+1]=-d[1],b[3*(S-2)+2]=-d[2],b[3*(S-1)]=d[0],b[3*(S-1)+1]=d[1],b[3*(S-1)+2]=d[2]);const f=($,L,z)=>{m[$]=L,_[$]=z};let P=0;const O=ye(),v=ye();for(let $=0;$<i;$++){const L=$*(2*Math.PI/i);q(O,x,Math.sin(L)),q(v,g,Math.cos(L)),Y(O,O,v),b[3*$]=O[0],b[3*$+1]=O[1],b[3*$+2]=O[2],q(O,O,t),Y(O,O,u),h[3*$]=O[0],h[3*$+1]=O[1],h[3*$+2]=O[2],w[2*$]=$/i,w[2*$+1]=0,h[3*($+i)]=h[3*$]+c[0],h[3*($+i)+1]=h[3*$+1]+c[1],h[3*($+i)+2]=h[3*$+2]+c[2],w[2*($+i)]=$/i,w[2*$+1]=1;const z=($+1)%i;f(P++,$,$),f(P++,$+i,$),f(P++,z,z),f(P++,z,z),f(P++,$+i,$),f(P++,z+i,z)}if(o){for(let $=0;$<i;$++){const L=($+1)%i;f(P++,y-2,S-2),f(P++,$,S-2),f(P++,L,S-2)}for(let $=0;$<i;$++){const L=($+1)%i;f(P++,$+i,S-1),f(P++,y-1,S-1),f(P++,L+i,S-1)}}const E=[["position",new T(h,m,3,!0)],["normal",new T(b,_,3,!0)],["uv0",new T(w,m,2,!0)]];return new me(a,E)}function il(a,e,t,i,s,n){i=i||10,s=s==null||s,ai(e.length>1);const o=[[0,0,0]],l=[],r=[];for(let d=0;d<i;d++){l.push([0,-d-1,-(d+1)%i-1]);const c=d/i*2*Math.PI;r.push([Math.cos(c)*t,Math.sin(c)*t])}return Ro(a,r,e,o,l,s,n)}function Ro(a,e,t,i,s,n,o=U(0,0,0)){const l=e.length,r=be(t.length*l*3+(6*i.length||0)),d=be(t.length*l*3+(i?6:0)),c=new Array,u=new Array;let x=0,g=0;const y=V(),S=V(),h=V(),b=V(),w=V(),m=V(),_=V(),f=V(),P=V(),O=V(),v=V(),E=V(),$=V(),L=nt();Z(P,0,1,0),se(S,t[1],t[0]),Q(S,S),n?(Y(f,t[0],o),Q(h,f)):Z(h,0,0,1),Ii(S,h,P,P,w,h,Ui),B(b,h),B(E,w);for(let C=0;C<i.length;C++)q(m,w,i[C][0]),q(f,h,i[C][2]),Y(m,m,f),Y(m,m,t[0]),r[x++]=m[0],r[x++]=m[1],r[x++]=m[2];d[g++]=-S[0],d[g++]=-S[1],d[g++]=-S[2];for(let C=0;C<s.length;C++)c.push(s[C][0]>0?s[C][0]:-s[C][0]-1+i.length),c.push(s[C][1]>0?s[C][1]:-s[C][1]-1+i.length),c.push(s[C][2]>0?s[C][2]:-s[C][2]-1+i.length),u.push(0),u.push(0),u.push(0);let z=i.length;const we=i.length-1;for(let C=0;C<t.length;C++){let J=!1;C>0&&(B(y,S),C<t.length-1?(se(S,t[C+1],t[C]),Q(S,S)):J=!0,Y(O,y,S),Q(O,O),Y(v,t[C-1],b),rs(t[C],O,L),ls(L,cs(v,y),f)?(se(f,f,t[C]),Q(h,f),ze(w,O,h),Q(w,w)):Ii(O,b,E,P,w,h,Ui),B(b,h),B(E,w)),n&&(Y(f,t[C],o),Q($,f));for(let K=0;K<l;K++)if(q(m,w,e[K][0]),q(f,h,e[K][1]),Y(m,m,f),Q(_,m),d[g++]=_[0],d[g++]=_[1],d[g++]=_[2],Y(m,m,t[C]),r[x++]=m[0],r[x++]=m[1],r[x++]=m[2],!J){const pe=(K+1)%l;c.push(z+K),c.push(z+l+K),c.push(z+pe),c.push(z+pe),c.push(z+l+K),c.push(z+l+pe);for(let ge=0;ge<6;ge++){const F=c.length-6;u.push(c[F+ge]-we)}}z+=l}const N=t[t.length-1];for(let C=0;C<i.length;C++)q(m,w,i[C][0]),q(f,h,i[C][1]),Y(m,m,f),Y(m,m,N),r[x++]=m[0],r[x++]=m[1],r[x++]=m[2];const ve=g/3;d[g++]=S[0],d[g++]=S[1],d[g++]=S[2];const de=z-l;for(let C=0;C<s.length;C++)c.push(s[C][0]>=0?z+s[C][0]:-s[C][0]-1+de),c.push(s[C][2]>=0?z+s[C][2]:-s[C][2]-1+de),c.push(s[C][1]>=0?z+s[C][1]:-s[C][1]-1+de),u.push(ve),u.push(ve),u.push(ve);const Ce=[["position",new T(r,c,3,!0)],["normal",new T(d,u,3,!0)]];return new me(a,Ce)}function al(a,e,t,i,s){const n=na(3*e.length),o=new Array(2*(e.length-1));let l=0,r=0;for(let c=0;c<e.length;c++){for(let u=0;u<3;u++)n[l++]=e[c][u];c>0&&(o[r++]=c-1,o[r++]=c)}const d=[["position",new T(n,o,3,!0)]];if(t?.length===e.length&&t[0].length===3){const c=be(3*t.length);let u=0;for(let x=0;x<e.length;x++)for(let g=0;g<3;g++)c[u++]=t[x][g];d.push(["normal",new T(c,o,3,!0)])}if(i&&d.push(["color",new T(i,dn(i.length/4),4)]),s?.length===e.length){const c=go(s,1);d.push(["timeStamps",new T(c,o,Ee,!0)])}return new me(a,d,null,2)}function sl(a,e,t,i,s,n=0){const o=new Array(18),l=[[-t,n,s/2],[i,n,s/2],[0,e+n,s/2],[-t,n,-s/2],[i,n,-s/2],[0,e+n,-s/2]],r=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let d=0;d<6;d++)o[3*d]=l[d][0],o[3*d+1]=l[d][1],o[3*d+2]=l[d][2];return new me(a,[["position",new T(o,r,3,!0)]])}function nl(a,e){const t=a.getMutableAttribute("position").data;for(let i=0;i<t.length;i+=3){const s=t[i],n=t[i+1],o=t[i+2];Z(je,s,n,o),oe(je,je,e),t[i]=je[0],t[i+1]=je[1],t[i+2]=je[2]}}function ol(a,e=a){const t=a.attributes,i=t.get("position").data,s=t.get("normal").data;if(s){const n=e.getMutableAttribute("normal").data;for(let o=0;o<s.length;o+=3){const l=s[o+1];n[o+1]=-s[o+2],n[o+2]=l}}if(i){const n=e.getMutableAttribute("position").data;for(let o=0;o<i.length;o+=3){const l=i[o+1];n[o+1]=-i[o+2],n[o+2]=l}}}function Wt(a,e,t,i,s){return!(Math.abs(tt(e,a))>s)&&(ze(t,a,e),Q(t,t),ze(i,t,a),Q(i,i),!0)}function Ii(a,e,t,i,s,n,o){return Wt(a,e,s,n,o)||Wt(a,t,s,n,o)||Wt(a,i,s,n,o)}const Ui=.99619469809,je=V();function Ta(a){return a.type==="point"}class rl{constructor(e,t=null,i=0){this.array=e,this.spatialReference=t,this.offset=i}}function Da(a){return"array"in a}function ft(a,e,t="ground"){if(Ta(e))return a.getElevation(e.x,e.y,e.z||0,e.spatialReference,t);if(Da(e)){let i=e.offset;return a.getElevation(e.array[i++],e.array[i++],e.array[i]||0,e.spatialReference??a.spatialReference,t)}return a.getElevation(e[0],e[1],e[2]||0,a.spatialReference,t)}function ll(a,e,t,i,s,n,o,l,r,d,c){const u=Uo[c.mode];let x,g,y=0;if(Nt(a,e,t,i,r.spatialReference,s,l))return u?.requiresAlignment(c)?(y=u.applyElevationAlignmentBuffer(i,s,n,o,l,r,d,c),x=n,g=o):(x=i,g=s),Nt(x,r.spatialReference,g,n,d.spatialReference,o,l)?y:void 0}function Va(a,e,t,i,s){const n=(Ta(a)?a.z:Da(a)?a.array[a.offset+2]:a[2])||0;switch(t.mode){case"on-the-ground":{const o=ft(e,a,"ground")??0;return s.verticalDistanceToGround=0,s.sampledElevation=o,void(s.z=o)}case"relative-to-ground":{const o=ft(e,a,"ground")??0,l=t.geometryZWithOffset(n,i);return s.verticalDistanceToGround=l,s.sampledElevation=o,void(s.z=l+o)}case"relative-to-scene":{const o=ft(e,a,"scene")??0,l=t.geometryZWithOffset(n,i);return s.verticalDistanceToGround=l,s.sampledElevation=o,void(s.z=l+o)}case"absolute-height":{const o=t.geometryZWithOffset(n,i),l=ft(e,a,"ground")??0;return s.verticalDistanceToGround=o-l,s.sampledElevation=l,void(s.z=o)}default:return void(s.z=0)}}function cl(a,e,t,i){return Va(a,e,t,i,Ie),Ie.z}function dl(a,e,t){return e==="on-the-ground"&&t==="on-the-ground"?a.staysOnTheGround:e===t||e!=="on-the-ground"&&t!=="on-the-ground"?e==null||t==null?a.definedChanged:1:a.onTheGroundChanged}function pl(a){return a==="relative-to-ground"||a==="relative-to-scene"}function ul(a){return a!=="absolute-height"}function hl(a,e,t,i,s){Va(e,t,s,i,Ie),Eo(a,Ie.verticalDistanceToGround);const n=Ie.sampledElevation,o=Bt(ko,a.transformation);return mt[0]=e.x,mt[1]=e.y,mt[2]=Ie.z,pn(e.spatialReference,mt,o,i.spatialReference)?a.transformation=o:console.warn("Could not locate symbol object properly, it might be misplaced"),n}function Eo(a,e){for(let t=0;t<a.geometries.length;++t){const i=a.geometries[t].getMutableAttribute("centerOffsetAndDistance");i&&i.data[3]!==e&&(i.data[3]=e,a.geometryVertexAttributeUpdated(a.geometries[t],"centerOffsetAndDistance"))}}function Fo(a,e,t,i,s,n){let o=0;const l=n.spatialReference;e*=3,i*=3;for(let r=0;r<s;++r){const d=a[e],c=a[e+1],u=a[e+2],x=n.getElevation(d,c,u,l,"ground")??0;o+=x,t[i]=d,t[i+1]=c,t[i+2]=x,e+=3,i+=3}return o/s}function Lo(a,e,t,i,s,n,o,l){let r=0;const d=l.calculateOffsetRenderUnits(o),c=l.featureExpressionInfoContext,u=n.spatialReference;e*=3,i*=3;for(let x=0;x<s;++x){const g=a[e],y=a[e+1],S=a[e+2],h=n.getElevation(g,y,S,u,"ground")??0;r+=h,t[i]=g,t[i+1]=y,t[i+2]=c==null?S+h+d:h+d,e+=3,i+=3}return r/s}function Mo(a,e,t,i,s,n,o,l){let r=0;const d=l.calculateOffsetRenderUnits(o),c=l.featureExpressionInfoContext,u=n.spatialReference;e*=3,i*=3;for(let x=0;x<s;++x){const g=a[e],y=a[e+1],S=a[e+2],h=n.getElevation(g,y,S,u,"scene")??0;r+=h,t[i]=g,t[i+1]=y,t[i+2]=c==null?S+h+d:h+d,e+=3,i+=3}return r/s}function jo(a){const e=a.meterUnitOffset,t=a.featureExpressionInfoContext;return e!==0||t!=null}function Wo(a,e,t,i,s,n,o,l){const r=l.calculateOffsetRenderUnits(o),d=l.featureExpressionInfoContext;e*=3,i*=3;for(let c=0;c<s;++c){const u=a[e],x=a[e+1],g=a[e+2];t[i]=u,t[i+1]=x,t[i+2]=d==null?g+r:r,e+=3,i+=3}return 0}class Io{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}const Uo={"absolute-height":{applyElevationAlignmentBuffer:Wo,requiresAlignment:jo},"on-the-ground":{applyElevationAlignmentBuffer:Fo,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:Lo,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:Mo,requiresAlignment:()=>!0}},ko=Ue(),Ie=new Io,mt=V(),Bo=()=>ta.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function No(a){return{cachedResult:a.cachedResult,arcade:a.arcade?{func:a.arcade.func,context:a.arcade.modules.arcadeUtils.createExecContext(null,{sr:a.arcade.context.spatialReference}),modules:a.arcade.modules}:null}}async function fl(a,e,t,i){const s=a?.expression;if(typeof s!="string")return null;const n=Jo(s);if(n!=null)return{cachedResult:n};const o=await ds();ps(t);const l=o.arcadeUtils,r=l.createSyntaxTree(s);return l.dependsOnView(r)?(i?.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:l.createFunction(r),context:l.createExecContext(null,{sr:e}),modules:o}}}function Ho(a,e,t){return a.arcadeUtils.createFeature(e.attributes,e.geometry,t)}function Go(a,e){if(a!=null&&!Ra(a)){if(!e||!a.arcade)return void Bo().errorOncePerTick("Arcade support required but not provided");const t=e;t._geometry&&(t._geometry=un(t._geometry)),a.arcade.modules.arcadeUtils.updateExecContext(a.arcade.context,e)}}function qo(a){if(a!=null){if(Ra(a))return a.cachedResult;const e=a.arcade;let t=e?.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof t!="number"&&(a.cachedResult=0,t=0),t}return 0}function ml(a,e=!1){let t=a?.featureExpressionInfo;const i=t?.expression;return e||i==="0"||(t=null),t??null}const vl={cachedResult:0};function Ra(a){return a.cachedResult!=null}function Jo(a){return a==="0"?0:null}let gl=class Ea{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.mode=null,this.centerInElevationSR=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=us(e)}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,t){const i=this.calculateOffsetRenderUnits(t);return this.featureExpressionInfoContext!=null?i:e+i}calculateOffsetRenderUnits(e){let t=this._meterUnitOffset;const i=this.featureExpressionInfoContext;return i!=null&&(t+=qo(i)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=hs(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}setFeatureExpressionInfoContext(e){this._featureExpressionInfoContext=e}updateFeatureExpressionInfoContextForGraphic(e,t,i){e.arcade?(this._featureExpressionInfoContext=No(e),this.updateFeatureExpressionFeature(t,i)):this._featureExpressionInfoContext=e}updateFeatureExpressionFeature(e,t){const i=this.featureExpressionInfoContext;i?.arcade&&(i.cachedResult=void 0,Go(this._featureExpressionInfoContext,e.geometry?Ho(i.arcade.modules,e,t):null))}static fromElevationInfo(e){const t=new Ea;return e!=null&&t.setFromElevationInfo(e),t}};const Fa=.5;function Xo(a,e){a.include(ei),a.attributes.add("position","vec3"),a.attributes.add("normal","vec3"),a.attributes.add("centerOffsetAndDistance","vec4");const t=a.vertex;pa(t,e),ti(t,e),t.uniforms.add(new Ct("viewport",i=>i.camera.fullViewport),new re("polygonOffset",i=>i.shaderPolygonOffset),new qe("aboveGround",i=>i.camera.aboveGround?1:-1)),e.hasVerticalOffset&&ks(t),t.code.add(p`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),t.code.add(p`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${e.terrainDepthTest?p.float(0):p`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = aboveGround;
      }

      // aboveGround is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = aboveGround * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),e.draped&&!e.hasVerticalOffset||Bs(t),e.draped||(t.uniforms.add(new qe("perDistancePixelRatio",i=>Math.tan(i.camera.fovY/2)/(i.camera.fullViewport[2]/2))),t.code.add(p`
      void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
        float distanceToCamera = length(posView);

        // Compute offset in world units for a half pixel shift
        float pixelOffset = distanceToCamera * perDistancePixelRatio * ${p.float(Fa)};

        // Apply offset along normal in the direction away from the ground surface
        vec3 modelOffset = normalModel * aboveGround * pixelOffset;

        // Apply the same offset also on the view space position
        vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

        posModel += modelOffset;
        posView += viewOffset;
      }
    `)),e.screenCenterOffsetUnitsEnabled&&ot(t),e.hasScreenSizePerspective&&ba(t),t.code.add(p`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?p`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":p`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}function oi(a){a.uniforms.add(new Ns("alignPixelEnabled",e=>e.alignPixelEnabled)),a.code.add(p`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),a.code.add(p`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function Yo(a,e){const{vertex:t,fragment:i}=a;a.include(da,e),t.include(oi),t.main.add(p`vec4 posProjCenter;
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
gl_PointSize = 1.0;`),i.main.add(p`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}function Qo(a){a.vertex.uniforms.add(new qe("renderTransparentlyOccludedHUD",e=>e.hudRenderStyle===0?1:e.hudRenderStyle===1?0:.75),new Ct("viewport",e=>e.camera.fullViewport),new qt("hudVisibilityTexture",e=>e.hudVisibility?.getTexture())),a.vertex.include(oi),a.vertex.code.add(p`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function Zo(a){const e=new ya;if(e.include(Xo,a),e.vertex.include(Hs,a),a.occlusionPass)return e.include(Yo,a),e;const{output:t,oitPass:i,hasOcclusionTexture:s,signedDistanceFieldEnabled:n,useVisibilityPixel:o,pixelSnappingEnabled:l,hasEmission:r,hasScreenSizePerspective:d,debugDrawLabelBorder:c,hasVVSize:u,hasVVColor:x,hasRotation:g,occludedFragmentFade:y,sampleSignedDistanceFieldTexelCenter:S}=a;e.include(ei),e.include(la,a),e.include(ca,a),o&&e.include(Qo);const{vertex:h,fragment:b}=e;b.include(ua),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2");const w=t===8,m=w&&o;m&&e.varyings.add("voccluded","float"),h.uniforms.add(new Ct("viewport",v=>v.camera.fullViewport),new Gt("screenOffset",(v,E)=>Ge($t,2*v.screenOffset[0]*E.camera.pixelRatio,2*v.screenOffset[1]*E.camera.pixelRatio)),new Gt("anchorPosition",v=>Ot(v)),new ke("materialColor",({color:v})=>v),new re("materialRotation",v=>v.rotation),new Ht("tex",v=>v.texture)),ot(h),n&&(h.uniforms.add(new ke("outlineColor",v=>v.outlineColor)),b.uniforms.add(new ke("outlineColor",v=>ki(v)?v.outlineColor:Ki),new re("outlineSize",v=>ki(v)?v.outlineSize:0))),l&&h.include(oi),d&&(ra(h),ba(h)),c&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add("uv0","vec2"),e.attributes.add("uvi","vec4"),e.attributes.add("color","vec4"),e.attributes.add("size","vec2"),e.attributes.add("rotation","float"),(u||x)&&e.attributes.add("featureAttribute","vec4"),h.main.add(p`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${za};
      return;
    }

    vec2 inputSize;
    ${R(d,p`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,p`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${R(u,p`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${R(o,p`
        bool visible = testHUDVisibility(posProj);
        if (!visible) {
          vtc = vec2(0.0);
          ${R(c,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
          return;
        }
      `)}
    ${R(m,p`voccluded = visible ? 0.0 : 1.0;`)}
  `);const _=p`
    vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0));
    vec2 texSize = vec2(textureSize(tex, 0));
    uv = mix(vec2(1.0), uv / texSize, lessThan(uv, vec2(${tr})));
    quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

    ${R(g,p`
        float angle = radians(materialRotation + rotation);
        float cosAngle = cos(angle);
        float sinAngle = sin(angle);
        mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

        quadOffset.xy = rotate * quadOffset.xy;
      `)}

    quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,f=l?n?p`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:p`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:p`posProj += quadOffset;`;h.main.add(p`
    ${_}
    ${x?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color * materialColor;"}

    ${R(t===9,p`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${p.float(ne)};
    ${R(n,`alphaDiscard = alphaDiscard && outlineColor.a < ${p.float(ne)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${f}
      gl_Position = posProj;
    }

    vtc = uv;

    ${R(c,p`debugBorderCoords = vec4(uv0, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),b.uniforms.add(new Ht("tex",v=>v.texture)),y&&!w&&(b.include(Gs),b.uniforms.add(new qt("depthMap",v=>v.mainDepth),new re("occludedOpacity",v=>v.occludedFragmentOpacity?.value??1))),s&&b.uniforms.add(new qt("texOcclusion",v=>v.hudOcclusion?.attachment));const P=c?p`(isBorder > 0.0 ? 0.0 : ${p.float(ne)})`:p.float(ne),O=p`
    ${R(c,p`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${R(S,p`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${n?p`
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
          outlineAlphaFactor + fillAlphaFactor < ${P} ||
          fillPixelColor.a + outlinePixelColor.a < ${p.float(ne)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
                              vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${R(!w,p`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${P}) {
          discard;
        }

        ${R(!w,p`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:p`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${P}) {
            discard;
          }
          ${R(!w,p`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${R(y&&!w,p`
        float zSample = -linearizeDepth(texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x);
        float zFragment = -linearizeDepth(gl_FragCoord.z);
        if (zSample < ${p.float(1-er)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `)}
    ${R(s,p`fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;`)}

    ${R(!w&&c,p`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}

    ${R(i===2,p`
    if (fragColor.a < ${p.float(ne)}) {
      discard;
    }`)}
  `;switch(t){case 0:e.outputs.add("fragColor","vec4",0),r&&e.outputs.add("fragEmission","vec4",1),i===1&&e.outputs.add("fragAlpha","float",r?2:1),b.main.add(p`
        ${O}
        // Unlike other materials, the fragment shader outputs premultiplied colors.
        // Disable this for front face rendering for correct OIT compositing.
        ${R(i===2,p`fragColor.rgb /= fragColor.a;`)}
        ${R(r,p`fragEmission = vec4(0.0);`)}
        ${R(i===1,p`fragAlpha = fragColor.a;`)}`);break;case 9:b.main.add(p`
        ${O}
        outputObjectAndLayerIdColor();`);break;case 8:e.include(qs,a),b.main.add(p`
        ${O}
        outputHighlight(${R(m,p`voccluded == 1.0`,p`false`)});`)}return e}function ki(a){return a.outlineColor[3]>0&&a.outlineSize>0}function Ot(a){return a.textureIsSignedDistanceField?Ko(a.anchorPosition,a.distanceFieldBoundingBox,$t):ia($t,a.anchorPosition),$t}const $t=Je();function Ko(a,e,t){Ge(t,a[0]*(e[2]-e[0])+e[0],a[1]*(e[3]-e[1])+e[1])}const er=.08,zt=32e3,tr=p.float(zt),ir=Object.freeze(Object.defineProperty({__proto__:null,build:Zo,calculateAnchorPosition:Ot,fullUV:zt},Symbol.toStringTag,{value:"Module"}));let Zt=class extends ha{constructor(a,e){super(a,e,Jt(La).concat(Jt(ja()))),this.shader=new fa(ir,()=>wa(()=>import("./HUDMaterial.glsl-BYndqZ61.js").then(t=>t.H),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]),import.meta.url)),this.primitiveType=e.occlusionPass?Pt.POINTS:Pt.TRIANGLE_STRIP}initializePipeline(a){const{oitPass:e,hasEmission:t,hasPolygonOffset:i,draped:s,output:n,depthTestEnabled:o,occlusionPass:l}=a,r=o&&!s&&e!==1&&!l&&n!==8;return Ze({blending:Fe(n)?ma(e,!0):null,depthTest:o&&!s?{func:515}:null,depthWrite:r?cn:null,drawBuffers:va(e,t),colorWrite:St,polygonOffset:i?ar:null})}};Zt=A([ea("esri.views.3d.webgl-engine.shaders.HUDMaterialTechnique")],Zt);const ar={factor:0,units:-4},La=si().vec2u8("uv0",{glNormalized:!0}),Ma=si().vec3f("position").vec3f("normal").vec4i16("uvi").vec4u8("color",{glNormalized:!0}).vec2f("size").f32("rotation").vec4f("centerOffsetAndDistance").vec4f("featureAttribute"),sr=Ma.clone().vec4u8("olidColor");function ja(){return ii()?sr:Ma}class W extends ga{constructor(e,t){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.useVisibilityPixel=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.hasOcclusionTexture=!1,this.isFocused=!0,this.olidColorInstanced=!1,this.textureCoordinateType=0,this.emissionSource=0,this.discardInvisibleFragments=!0,this.hasVVInstancing=!1,this.snowCover=!1,this.transparentOccluded=t}}A([D()],W.prototype,"transparentOccluded",void 0),A([D()],W.prototype,"screenCenterOffsetUnitsEnabled",void 0),A([D()],W.prototype,"useVisibilityPixel",void 0),A([D()],W.prototype,"signedDistanceFieldEnabled",void 0),A([D()],W.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),A([D()],W.prototype,"hasVVSize",void 0),A([D()],W.prototype,"hasVVColor",void 0),A([D()],W.prototype,"hasVerticalOffset",void 0),A([D()],W.prototype,"hasScreenSizePerspective",void 0),A([D()],W.prototype,"hasRotation",void 0),A([D()],W.prototype,"debugDrawLabelBorder",void 0),A([D()],W.prototype,"hasPolygonOffset",void 0),A([D()],W.prototype,"depthTestEnabled",void 0),A([D()],W.prototype,"pixelSnappingEnabled",void 0),A([D()],W.prototype,"draped",void 0),A([D()],W.prototype,"terrainDepthTest",void 0),A([D()],W.prototype,"cullAboveTerrain",void 0),A([D()],W.prototype,"occlusionPass",void 0),A([D()],W.prototype,"occludedFragmentFade",void 0),A([D()],W.prototype,"hasOcclusionTexture",void 0),A([D()],W.prototype,"isFocused",void 0);class Sl extends Sa{constructor(e,t,i=!1){super(e,pr),this.produces=new Map([[14,s=>ut(s)&&!this.parameters.drawAsLabel&&!this._configuration.transparentOccluded],[15,s=>ut(s)&&!this.parameters.drawAsLabel&&this._configuration.transparentOccluded],[16,s=>ut(s)&&this.parameters.drawAsLabel],[13,()=>this.parameters.useVisibilityPixel],[20,s=>this.parameters.draped&&ut(s)]]),this._visible=!0,this._configuration=new W(t,i)}getConfiguration(e,t){const i=this.parameters.draped;return super.getConfiguration(e,t,this._configuration),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=i,this._configuration.useVisibilityPixel=this.parameters.useVisibilityPixel,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.hasVVSize=!!this.parameters.vvSize,this._configuration.hasVVColor=!!this.parameters.vvColor,this._configuration.occlusionPass=t.slot===13,this._configuration.occludedFragmentFade=!i&&!!this.parameters.occludedFragmentOpacity,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||t.slot===13,Fe(e)&&(this._configuration.debugDrawLabelBorder=!!Js.LABELS_SHOW_BORDER),this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.hasOcclusionTexture=this._configuration.transparentOccluded&&t.oitPass!==0,this._configuration}intersect(e,t,i,s,n,o){const{options:{selectionMode:l,hud:r,excludeLabels:d},point:c,camera:u}=i,{parameters:x}=this;if(!l||!r||d&&x.isLabel||!e.visible||!c||!u)return;const g=e.attributes.get("featureAttribute"),y=g==null?null:pi(g.data,Ji),{scaleX:S,scaleY:h}=Yi(y,x,u.pixelRatio),b=e.attributes.get("position"),w=e.attributes.get("size"),m=e.attributes.get("normal"),_=e.attributes.get("rotation"),f=e.attributes.get("centerOffsetAndDistance");ai(b.size>=3);const P=Ot(x),O=this.parameters.centerOffsetUnits==="screen";for(let v=0;v<b.data.length/b.size;v++){const E=v*b.size;Z(G,b.data[E],b.data[E+1],b.data[E+2]),oe(G,G,t),oe(G,G,u.viewMatrix);const $=v*f.size;if(Z(fe,f.data[$],f.data[$+1],f.data[$+2]),!O&&(G[0]+=fe[0],G[1]+=fe[1],fe[2]!==0)){const ve=fe[2];Q(fe,G),se(G,G,q(fe,fe,ve))}const L=v*m.size;Z(Ve,m.data[L],m.data[L+1],m.data[L+2]),ui(Ve,Ve,hi(qi,t));const{normal:z,cosAngle:we}=Bi(Ve,u,Xi),N=Qi(this.parameters,G,we,u,It);if(Tt(G,G,z,N),u.applyProjection(G,ee),ee[0]>-1){O&&(fe[0]||fe[1])&&(ee[0]+=fe[0]*u.pixelRatio,fe[1]!==0&&(ee[1]+=It.alignmentEvaluator.apply(fe[1])*u.pixelRatio),u.unapplyProjection(ee,G)),ee[0]+=this.parameters.screenOffset[0]*u.pixelRatio,ee[1]+=this.parameters.screenOffset[1]*u.pixelRatio,ee[0]=Math.floor(ee[0]),ee[1]=Math.floor(ee[1]);const ve=v*w.size;ce[0]=w.data[ve],ce[1]=w.data[ve+1],It.evaluator.applyVec2(ce,ce);const de=lr*u.pixelRatio;let Ce=0;x.textureIsSignedDistanceField&&(Ce=Math.min(x.outlineSize,.5*ce[0])*u.pixelRatio/2),ce[0]*=S,ce[1]*=h;const C=v*_.size,J=x.rotation+_.data[C];if(Ni(c,ee[0],ee[1],ce,de,Ce,J,x,P)){const K=i.ray;if(oe(Hi,G,Zi(rr,u.viewMatrix)),ee[0]=c[0],ee[1]=c[1],u.unprojectFromRenderScreen(ee,G)){const pe=V();B(pe,K.direction);const ge=1/it(pe);q(pe,pe,ge),o(at(K.origin,G)*ge,pe,-1,Hi)}}}}}intersectDraped(e,t,i,s,n){const o=e.attributes.get("position"),l=e.attributes.get("size"),r=e.attributes.get("rotation"),d=this.parameters,c=Ot(d),u=e.attributes.get("featureAttribute"),x=u==null?null:pi(u.data,Ji),{scaleX:g,scaleY:y}=Yi(x,d,e.screenToWorldRatio),S=cr*e.screenToWorldRatio;for(let h=0;h<o.data.length/o.size;h++){const b=h*o.size,w=o.data[b],m=o.data[b+1],_=h*l.size;ce[0]=l.data[_],ce[1]=l.data[_+1];let f=0;d.textureIsSignedDistanceField&&(f=Math.min(d.outlineSize,.5*ce[0])*e.screenToWorldRatio/2),ce[0]*=g,ce[1]*=y;const P=h*r.size,O=d.rotation+r.data[P];Ni(i,w,m,ce,S,f,O,d,c)&&s(n.distance,n.normal,-1)}}createBufferWriter(){return new ur}applyShaderOffsets(e,t,i,s,n,o,l){ui(Ut,i,hi(qi,s));const r=Bi(Ut,o,Xi),d=hr(it(t),o),c=Qi(this.parameters,t,r.cosAngle,o,l);Tt(t,t,r.normal,c+d),Tt(e,e,Ut,c+d);const u=n[3]+c;this._applyPolygonOffsetView(t,r,u,o,t),this._applyCenterOffsetView(t,n,t)}applyShaderOffsetsNDC(e,t,i,s,n){return this._applyCenterOffsetNDC(e,t,i,s),n!=null&&B(n,s),this._applyPolygonOffsetNDC(s,t,i,s),s}_applyPolygonOffsetView(e,t,i,s,n){const o=s.aboveGround?1:-1;let l=Math.sign(i);l===0&&(l=o);const r=o*l;if(this.parameters.shaderPolygonOffset<=0)return B(n,e);const d=gt(Math.abs(t.cosAngle),.01,1),c=1-Math.sqrt(1-d*d)/d/s.viewport[2];return q(n,e,r>0?c:1/c),n}_applyCenterOffsetView(e,t,i){const s=this.parameters.centerOffsetUnits!=="screen";return i!==e&&B(i,e),s&&(i[0]+=t[0],i[1]+=t[1],t[2]&&(Q(Ve,i),ms(i,i,q(Ve,Ve,t[2])))),i}_applyCenterOffsetNDC(e,t,i,s){const n=this.parameters.centerOffsetUnits!=="screen";return s!==e&&B(s,e),n||(s[0]+=t[0]/i.fullWidth*2,s[1]+=t[1]/i.fullHeight*2),s}_applyPolygonOffsetNDC(e,t,i,s){const n=this.parameters.shaderPolygonOffset;if(e!==s&&B(s,e),n){const o=i.aboveGround?1:-1,l=o*Math.sign(t[3]);s[2]-=(l||o)*n}return s}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:t,outlineColor:i}=this.parameters,s=e[3]>=ne||t>=ne&&i[3]>=ne;return this._visible&&s}createGLMaterial(e){return new nr(e)}calculateRelativeScreenBounds(e,t,i=vs()){return or(this.parameters,e,t,i),i[2]=i[0]+e[0],i[3]=i[1]+e[1],i}}class nr extends nn{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(Zt,e)}}function or(a,e,t,i){i[0]=a.anchorPosition[0]*-e[0]+a.screenOffset[0]*t,i[1]=a.anchorPosition[1]*-e[1]+a.screenOffset[1]*t}function Bi(a,e,t){return oe(t.normal,a,e.viewInverseTransposeMatrix),t.cosAngle=tt(t.normal,dr),t}function Ni(a,e,t,i,s,n,o,l,r){let d=e-s-i[0]*r[0],c=d+i[0]+2*s,u=t-s-i[1]*r[1],x=u+i[1]+2*s;const g=l.distanceFieldBoundingBox;return l.textureIsSignedDistanceField&&g!=null&&(d+=i[0]*g[0],u+=i[1]*g[1],c-=i[0]*(1-g[2]),x-=i[1]*(1-g[3]),d-=n,c+=n,u-=n,x+=n),Ge(Gi,e,t),gs(Qe,a,Gi,Ss(o)),Qe[0]>d&&Qe[0]<c&&Qe[1]>u&&Qe[1]<x}const It=new Xs,G=V(),Ve=V(),ee=st(),Ut=V(),Hi=V(),Qe=Je(),Gi=Je(),qi=fs(),rr=Ue(),fe=V(),kt=V(),Ji=st(),Xi={normal:V(),cosAngle:0},lr=1,cr=2,ce=oa(0,0),dr=et(0,0,1);class pr extends Ys{constructor(){super(...arguments),this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=!1,this.color=fi(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=oa(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=fi(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=st(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.useVisibilityPixel=!0,this.occludedVisibilityMode="hidden",this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.draped=!1,this.isLabel=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}class ur{constructor(){this.layout=ja(),this.baseInstanceLayout=La}elementCount(e){return e.get("position").indices.length}elementCountBaseInstance(e){return e.get("uv0").indices.length}write(e,t,i,s,n,o){const{position:l,normal:r,color:d,size:c,rotation:u,centerOffsetAndDistance:x,featureAttribute:g,uvi:y}=n;Ks(i.get("position"),e,l,o),en(i.get("normal"),t,r,o);const S=i.get("position").indices.length;let h=0,b=0,w=zt,m=zt;const _=i.get("uvi")?.data;_&&_.length>=4&&(h=_[0],b=_[1],w=_[2],m=_[3]);for(let f=0;f<S;++f){const P=o+f;y.setValues(P,h,b,w,m)}if(tn(i.get("color"),4,d,o),$i(i.get("size"),c,o),an(i.get("rotation"),u,o),i.get("centerOffsetAndDistance")?Pi(i.get("centerOffsetAndDistance"),x,o):_i(x,o,S),i.get("featureAttribute")?Pi(i.get("featureAttribute"),g,o):_i(g,o,S),s!=null){const f=i.get("position")?.indices;if(f){const P=f.length,O=n.getField("olidColor",rn);sn(s,O,P,o)}}return{numVerticesPerItem:1,numItems:S}}writeBaseInstance(e,t){const{uv0:i}=t;$i(e.get("uv0"),i,0)}}function Yi(a,e,t){return a==null||e.vvSize==null?{scaleX:t,scaleY:t}:(Qs(kt,e,a),{scaleX:kt[0]*t,scaleY:kt[1]*t})}function hr(a,e){const t=e.computeRenderPixelSizeAtDist(a)*Fa;return(e.aboveGround?1:-1)*t}function Qi(a,e,t,i,s){if(!a.verticalOffset?.screenLength){const r=it(e);return s.update(t,r,a.screenSizePerspective,a.screenSizePerspectiveMinPixelReferenceSize,a.screenSizePerspectiveAlignment,null),0}const n=it(e),o=a.screenSizePerspectiveAlignment??a.screenSizePerspective,l=Zs(i,n,a.verticalOffset,t,o,a.screenSizePerspectiveMinPixelReferenceSize);return s.update(t,n,a.screenSizePerspective,a.screenSizePerspectiveMinPixelReferenceSize,a.screenSizePerspectiveAlignment,null),l}export{ft as $,dl as A,pl as B,hn as C,ul as D,Jr as E,Ot as F,zn as G,jn as H,Cn as I,za as J,Oa as K,Xt as L,al as M,Fn as N,Zo as O,Wr as P,Xr as Q,jr as R,qr as S,Tr as T,zt as U,ao as V,Ii as W,Mr as X,Gn as Y,Qr as Z,Hr as _,Kr as a,sl as a0,nl as a1,il as a2,Ro as a3,Ti as b,ml as c,xn as d,fl as e,Va as f,Io as g,ol as h,el as i,_t as j,Zr as k,ll as l,rl as m,vl as n,gl as o,Eo as p,hl as q,Yr as r,oi as s,Sl as t,cl as u,Xo as v,tl as w,vn as x,Qo as y,Nn as z};
