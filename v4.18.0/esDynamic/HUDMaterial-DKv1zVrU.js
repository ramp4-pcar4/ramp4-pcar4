import{aL as R,kA as Dt,jb as pi,bc as Le,dn as io,t7 as no,be as ie,bl as Je,ks as oo,kr as Vt,aX as Xe,dl as ao,t8 as so,aZ as J,bh as X,bp as ro,b6 as B,gM as lo,kQ as co,dw as po,a6 as ui,ae as uo,fj as ho,bb as hi,q9 as fo,qe as fi,cb as ht,fX as Ye,f_ as Qe,j0 as Me,aJ as je,a7 as A,ab as mi,cO as ft,ad as vi,rJ as gi,t9 as We,jf as mt,aY as Ze,bo as be,b2 as ne,b7 as Ke,b4 as Si,bg as H,bq as mo,lH as Rt,b9 as bi,ta as vo,b1 as et,sl as go,qc as xi,aU as So,hk as Et,dq as bo,jh as yi,iU as xo,tb as yo,tc as wo,bz as Y,rN as Po,bm as Oo,dk as _o,bK as _e,a$ as wi,fy as zo,af as Co,lz as Ao,td as To,dU as Pi,kj as Oi,ki as _i,cm as Do,ln as Ft,qH as zi,ho as Vo,aq as Ro,te as Ci,cD as Eo,cP as Fo}from"./main-De_li5Sb.js";import{t as T}from"./orientedBoundingBox--SwTDOeI.js";import{z as Lo,A as Mo,B as jo,r as oe,C as Lt,D as Ai,E as Mt,F as Wo,e as tt,G as Ti,H as Di,h as Ie,I as it,d as jt,f as $e,J as Io,i as Wt,K as $o,L as Vi,M as Ri,N as Ei,v as Uo,k as ko,O as vt,P as Bo,Q as No,R as Fi,S as ae,U as It,l as Li,t as Mi,V as Ho,W as Go,X as ji,Y as qo,Z as Wi,_ as gt,$ as Jo,a0 as Ii,p as $i,a1 as Ae,a2 as Xo,a3 as Ui,a4 as Yo,a5 as Qo,a6 as ki,a7 as Bi,s as D,a8 as Ni,a9 as Zo,aa as Ko,ab as Hi,ac as ea,ad as ta,ae as ia,af as Gi,m as he,n as ve,ag as na,ah as qi,ai as oa,aj as aa,ak as Ji,al as sa,b as $t,am as ra,a as la,an as ca,ao as St,ap as da,aq as pa,ar as ua,as as ha,at as fa,au as ma,av as va,aw as ga,ax as Xi,ay as Sa,az as Yi,aA as Qi,aB as ba,aC as xa}from"./VertexColor.glsl-s7OuD6FK.js";import{i as Ut,m as ya,h as Zi,z as wa}from"./BufferView-DrmEcg2f.js";import{l as Pa}from"./Octree-BXqAafP9.js";import{t as d,n as F}from"./glsl-Bw9xHunC.js";import"./Texture-Bpl9FRhA.js";import{s as Ki}from"./ShaderBuilder-Dg4IEQ9g.js";import{Q as kt,t as Bt}from"./InterleavedLayout-BBVdyfby.js";import{_ as bt}from"./enums-DDJfd4_p.js";import{w as nt,u as xt,a as en,d as Oa}from"./renderState-CsF3hl87.js";import{r as k,t as tn,n as ge}from"./vec3f32-GX_cKsFD.js";import{c as Nt,l as _a}from"./Indices-C_dhcm66.js";import{f as za}from"./computeTranslationToOriginAndRotation-BE31Y0yH.js";import{u as Ca}from"./hydratedFeatures-D5XuSgT1.js";function nn(t){return t==="position"}function Aa(t,e){return t==null&&(t=[]),t.push(e),t}function Ta(t,e){if(t==null)return null;const i=t.filter(n=>n!==e);return i.length===0?null:i}function Da(t,e,i,n,o){yt[0]=t.get(e,0),yt[1]=t.get(e,1),yt[2]=t.get(e,2),Lo(yt,Te,3),i.set(o,0,Te[0]),n.set(o,0,Te[1]),i.set(o,1,Te[2]),n.set(o,1,Te[3]),i.set(o,2,Te[4]),n.set(o,2,Te[5])}const yt=R(),Te=new Float32Array(6);let on=class{constructor(t={}){this.id=Dt(),this._highlightIds=new Set,this._shaderTransformation=null,this._visible=!0,this.castShadow=t.castShadow??!0,this.usesVerticalDistanceToGround=t.usesVerticalDistanceToGround??!1,this.graphicUid=t.graphicUid,this.layerViewUid=t.layerViewUid,t.isElevationSource&&(this.lastValidElevationBB=new an),this._geometries=t.geometries?Array.from(t.geometries):[]}dispose(){this._geometries.length=0}get layer(){return this._layer}set layer(t){Ut(this._layer==null||t==null,"Object3D can only be added to a single Layer"),this._layer=t}addGeometry(t){t.visible=this._visible,this._geometries.push(t);for(const e of this._highlightIds)t.addHighlight(e);this._emit("geometryAdded",{object:this,geometry:t}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}removeGeometry(t){const e=this._geometries.splice(t,1)[0];if(e){for(const i of this._highlightIds)e.removeHighlight(i);this._emit("geometryRemoved",{object:this,geometry:e}),this._highlightIds.size&&this._emit("highlightChanged",this),this._invalidateBoundingVolume()}}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(t,e,i=!1){this._emit("attributesChanged",{object:this,geometry:t,attribute:e,sync:i}),nn(e)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(t){if(this._visible!==t){this._visible=t;for(const e of this._geometries)e.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const t=new Mo;for(const e of this._geometries)e.occludees=Aa(e.occludees,t);return this._emit("occlusionChanged",this),t}removeOcclude(t){for(const e of this._geometries)e.occludees=Ta(e.occludees,t);this._emit("occlusionChanged",this)}highlight(t){const e=new jo(t);for(const i of this._geometries)i.addHighlight(e);return this._emit("highlightChanged",this),this._highlightIds.add(e),e}removeHighlight(t){this._highlightIds.delete(t);for(const e of this._geometries)e.removeHighlight(t);this._emit("highlightChanged",this)}removeStateID(t){t.channel===0?this.removeHighlight(t):this.removeOcclude(t)}getCombinedStaticTransformation(t,e){return pi(e,this.transformation,t.transformation)}getCombinedShaderTransformation(t,e=Le()){return pi(e,this.effectiveTransformation,t.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=new sn,this._validateBoundingVolume(this._bvWorldSpace,0)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=new sn,this._validateBoundingVolume(this._bvObjectSpace,1)),this._bvObjectSpace}_validateBoundingVolume(t,e){const i=e===1;for(const n of this._geometries){const o=n.boundingInfo;o&&Va(o,t,i?n.transformation:this.getCombinedShaderTransformation(n))}io(t.bounds.center,t.min,t.max,.5);for(const n of this._geometries){const o=n.boundingInfo;if(o==null)continue;const a=i?n.transformation:this.getCombinedShaderTransformation(n),s=no(a);ie(rn,o.center,a);const r=Je(rn,t.bounds.center),l=o.radius*s;t.bounds.radius=Math.max(t.bounds.radius,r+l)}}_invalidateBoundingVolume(){const t=this._bvWorldSpace?.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this.layer&&t&&this.layer.notifyObjectBBChanged(this,t)}_emit(t,e){this.layer?.events.emit(t,e)}get geometries(){return this._geometries}get transformation(){return this._transformation??oo}set transformation(t){this._transformation=Vt(this._transformation??Le(),t),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(t){this._shaderTransformation=t?Vt(this._shaderTransformation??Le(),t):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}get test(){}},an=class{constructor(){this._data=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE]}get min(){return Xe(this._data[0],this._data[1],this._data[2])}get max(){return Xe(this._data[3],this._data[4],this._data[5])}minWith(t){const{_data:e}=this;e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2])}maxWith(t){const{_data:e}=this;e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}assignMinMax(t,e){for(let i=0;i<3;++i)this._data[0+i]=t[i],this._data[3+i]=e[i]}isEmpty(){return this._data[3]<this._data[0]&&this._data[4]<this._data[1]&&this._data[5]<this._data[2]}},sn=class extends an{constructor(){super(...arguments),this.bounds=new ao}};function Va(t,e,i){const n=t.bbMin,o=t.bbMax;if(so(i)){const a=J(Ra,i[12],i[13],i[14]);return X(fe,n,a),X(Se,o,a),e.minWith(fe),void e.maxWith(Se)}if(ie(fe,n,i),ro(n,o))return e.minWith(fe),void e.maxWith(fe);ie(Se,o,i),e.minWith(fe),e.minWith(Se),e.maxWith(fe),e.maxWith(Se);for(let a=0;a<3;++a)B(fe,n),B(Se,o),fe[a]=o[a],Se[a]=n[a],ie(fe,fe,i),ie(Se,Se,i),e.minWith(fe),e.minWith(Se),e.maxWith(fe),e.maxWith(Se)}const Ra=R(),fe=R(),Se=R(),rn=R(),Ea=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];let ln=class{constructor(t,e,i=""){this.stage=t,this.apiLayerViewUid=i,this.id=Dt(),this.events=new lo,this.visible=!0,this.sliceable=!1,this._objectsAdded=new Array,this._handles=new co,this._objects=new Map,this._pickable=!0,this.visible=e?.visible??!0,this._pickable=e?.pickable??!0,this.updatePolicy=e?.updatePolicy??0,t.addLayer(this);for(const n of Ea)this._handles.add(this.events.on(n,o=>t.handleEvent(n,o)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.removeLayer(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}getObject(t){return po(this._objects.get(t))}set pickable(t){this._pickable=t}get pickable(){return this._pickable&&this.visible}add(t){this._objects.set(t.id,t),t.layer=this,this.events.emit("layerObjectAdded",t),this._octree!=null&&this._objectsAdded.push(t)}remove(t){this._objects.delete(t.id)&&(this.events.emit("layerObjectRemoved",t),t.layer=null,this._octree!=null&&(ui(this._objectsAdded,t)||this._octree.remove([t])))}addMany(t){for(const e of t)this._objects.set(e.id,e),e.layer=this;this.events.emit("layerObjectsAdded",t),this._octree!=null&&this._objectsAdded.push(...t)}removeMany(t){const e=new Array;for(const i of t)this._objects.delete(i.id)&&e.push(i);if(e.length!==0&&(this.events.emit("layerObjectsRemoved",e),e.forEach(i=>i.layer=null),this._octree!=null)){for(let i=0;i<e.length;)ui(this._objectsAdded,e[i])?(e[i]=e[e.length-1],e.length-=1):++i;this._octree.remove(e)}}commit(){this.stage.commitLayer(this)}sync(){this.updatePolicy!==1&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(t,e){this._octree==null||this._objectsAdded.includes(t)||this._octree.update(t,e)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.size>50?(this._octree=new Pa(t=>t.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.values())):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded),this._objectsAdded.length=0),this._octree}invalidateSpatialQueryAccelerator(){this._octree=uo(this._octree),this._objectsAdded.length=0}get test(){}},Fa=class{constructor(t,e){this.vec3=t,this.id=e}};function Ht(t,e,i,n){return new Fa(Xe(t,e,i),n)}const Q={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},La={dash:Q.dash,"dash-dot":[...Q.dash,...Q.dot],dot:Q.dot,"long-dash":Q["long-dash"],"long-dash-dot":[...Q["long-dash"],...Q.dot],"long-dash-dot-dot":[...Q["long-dash"],...Q.dot,...Q.dot],none:null,"short-dash":Q["short-dash"],"short-dash-dot":[...Q["short-dash"],...Q["short-dot"]],"short-dash-dot-dot":[...Q["short-dash"],...Q["short-dot"],...Q["short-dot"]],"short-dot":Q["short-dot"],solid:null},Ma=8;let ja=class{constructor(t,e,i){this.image=t,this.width=e,this.length=i,this.uuid=ho()}};function cn(t){return t!=null&&"image"in t}function Wa(t,e){return t==null?t:{pattern:t.slice(),pixelRatio:e}}function Ia(t){return{pattern:[t,t],pixelRatio:2}}function $a(t){switch(t?.type){case"style":return Ua(t.style);case"image":return new ja(t.image,t.width,t.length);case void 0:case null:return null}return null}function Ua(t){return t!=null?Wa(La[t],Ma):null}const dn=8;function pn(t,e){const{vertex:i,attributes:n}=t;i.uniforms.add(new oe("intrinsicWidth",s=>s.width));const{hasScreenSizePerspective:o,spherical:a}=e;o?(t.include(Lt,e),Ai(i),Mt(i,e),i.uniforms.add(new Wo("inverseViewMatrix",(s,r)=>hi(un,fo(un,r.camera.viewMatrix,s.origin)))),i.code.add(d`
      float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
        vec3 worldPos = (inverseViewMatrix * vec4(pos, 1)).xyz;
        vec3 groundUp = ${a?d`normalize(worldPos + localOrigin)`:d`vec3(0.0, 0.0, 1.0)`};
        float absCosAngle = abs(dot(groundUp, normalize(worldPos - cameraPosition)));

        return screenSizePerspectiveScaleFloat(size, absCosAngle, length(pos), screenSizePerspective);
      }
    `)):i.code.add(d`float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
return size;
}`),e.hasVVSize?(n.add("sizeFeatureAttribute","float"),i.uniforms.add(new tt("vvSizeMinSize",s=>s.vvSize.minSize),new tt("vvSizeMaxSize",s=>s.vvSize.maxSize),new tt("vvSizeOffset",s=>s.vvSize.offset),new tt("vvSizeFactor",s=>s.vvSize.factor),new tt("vvSizeFallback",s=>s.vvSize.fallback)),i.code.add(d`
    float getSize(${F(o,"vec3 pos")}) {
      float size = isnan(sizeFeatureAttribute)
        ? vvSizeFallback.x
        : intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;

      return ${F(o,"applyLineSizeScreenSizePerspective(size, pos)","size")};
    }
    `)):(n.add("size","float"),i.code.add(d`
    float getSize(${F(o,"vec3 pos")}) {
      float fullSize = intrinsicWidth * size;
      return ${F(o,"applyLineSizeScreenSizePerspective(fullSize, pos)","fullSize")};
    }
    `)),e.hasVVOpacity?(n.add("opacityFeatureAttribute","float"),i.constants.add("vvOpacityNumber","int",8),i.uniforms.add(new Ti("vvOpacityValues",dn,s=>s.vvOpacity.values),new Ti("vvOpacityOpacities",dn,s=>s.vvOpacity.opacityValues),new oe("vvOpacityFallback",s=>s.vvOpacity.fallback,{supportsNaN:!0})),i.code.add(d`
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
    `)):i.code.add(d`vec4 applyOpacity(vec4 color) {
return color;
}`),e.hasVVColor?(t.include(Di,e),n.add("colorFeatureAttribute","float"),i.code.add(d`vec4 getColor() {
vec4 color = interpolateVVColor(colorFeatureAttribute);
if (isnan(color.r)) {
return vec4(0);
}
return applyOpacity(color);
}`)):(n.add("color","vec4"),i.code.add(d`vec4 getColor() {
return applyOpacity(color);
}`))}const un=Le();function hn(t){t.vertex.code.add("#define noPerspectiveWrite(x, w) (x * w)")}function wt(t){t.fragment.code.add("#define noPerspectiveRead(x) (x * gl_FragCoord.w)")}function ka(t){return t.pattern.map(e=>Math.round(e*t.pixelRatio))}function Ba(t){if(t==null)return 1;const e=ka(t);return Math.floor(e.reduce((i,n)=>i+n))}function Na(t){return t==null?fi:t.length===4?t:ht(Ha,t[0],t[1],t[2],1)}const Ha=Ye();function Ga(t,e){if(!e.stippleEnabled)return void t.fragment.code.add(d`float getStippleAlpha(float lineWidth) { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);const i=!(e.draped&&e.stipplePreferContinuous),{vertex:n,fragment:o}=t;e.draped||(Mt(n,e),n.uniforms.add(new Ie("worldToScreenPerDistanceRatio",({camera:a})=>1/a.perScreenPixelRatio)).code.add(d`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),t.varyings.add("vStippleDistance","float"),t.varyings.add("vStippleDistanceLimits","vec2"),t.varyings.add("vStipplePatternStretch","float"),n.code.add(d`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${d.float(qa)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),it(n),n.code.add(d`
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
  `),o.uniforms.add(new jt("stipplePatternTexture",a=>a.stippleTexture),new oe("stipplePatternPixelSizeInv",a=>1/fn(a))),e.stippleOffColorEnabled&&o.uniforms.add(new $e("stippleOffColor",a=>Na(a.stippleOffColor))),t.include(wt),e.worldSizedImagePattern?(t.varyings.add("vStippleV","float"),t.fragment.include(Io),o.code.add(d`vec4 getStippleColor(out bool isClamped) {
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
}`)):o.code.add(d`
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
  `),o.code.add(d`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${F(!e.stippleOffColorEnabled,"if (stippleAlpha < threshold) { discard; }")}
    }
  `)}function fn(t){const e=t.stipplePattern;return cn(e)?e.length:e?Ba(e)/e.pixelRatio:1}const qa=.4,Gt=64,mn=Gt/2,Ja=mn/5,Xa=Gt/Ja,Ya=.25;function vn(t,e){const i=t.vertex,n=e.hasScreenSizePerspective;it(i),i.uniforms.get("markerScale")==null&&i.constants.add("markerScale","float",1),i.constants.add("markerSizePerLineWidth","float",Xa).code.add(d`
  float getLineWidth(${F(n,"vec3 pos")}) {
     return max(getSize(${F(n,"pos")}), 1.0) * pixelRatio;
  }

  float getScreenMarkerSize(float lineWidth) {
    return markerScale * markerSizePerLineWidth * lineWidth;
  }
  `),e.space===2&&(i.constants.add("maxSegmentLengthFraction","float",.45),i.uniforms.add(new Ie("perRenderPixelRatio",o=>o.camera.perRenderPixelRatio)),i.code.add(d`
  bool areWorldMarkersHidden(vec3 pos, vec3 other) {
    vec3 midPoint = mix(pos, other, 0.5);
    float distanceToCamera = length(midPoint);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    float worldMarkerSize = getScreenMarkerSize(getLineWidth(${F(n,"pos")})) * screenToWorldRatio;
    float segmentLen = length(pos - other);
    return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
  }

  float getWorldMarkerSize(vec3 pos) {
    float distanceToCamera = length(pos);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    return getScreenMarkerSize(getLineWidth(${F(n,"pos")})) * screenToWorldRatio;
  }
  `))}const qt=d`vec4(0.0, 0.0, 2.0, 1.0)`,Qa=Qe(1),Za=Qe(1);function Ka(t,e){const{hasAnimation:i,animation:n}=e;if(!i)return;const{attributes:o,varyings:a,vertex:s,fragment:r}=t;o.add("timeStamps","vec4"),a.add("vTimeStamp","float"),a.add("vFirstTime","float"),a.add("vLastTime","float"),a.add("vTransitionType","float"),s.main.add(d`vTimeStamp = timeStamps.x;
vFirstTime = timeStamps.y;
vLastTime = timeStamps.z;
vTransitionType = timeStamps.w;`),n===3&&r.constants.add("decayRate","float",2.3),r.code.add(d`
    float getTrailOpacity(float x) {
      if (x < 0.0) {
        return 0.0;
      }

      ${es(n)}
    }`),r.uniforms.add(new oe("timeElapsed",l=>l.timeElapsed),new oe("trailLength",l=>l.trailLength),new oe("speed",l=>l.animationSpeed),new Wt("startEndTime",l=>Me(ts,l.startTime,l.endTime))),r.constants.add("fadeInTime","float",Za),r.constants.add("fadeOutTime","float",Qa),r.constants.add("incomingTransition","int",0),r.constants.add("outgoingTransition","int",2),r.code.add(d`float fadeIn(float x) {
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
}`)}function es(t){switch(t){case 2:return"return x >= 0.0 && x <= 1.0 ? 1.0 : 0.0;";case 3:return`float cutOff = exp(-decayRate);
        return (exp(-decayRate * x) - cutOff) / (1.0 - cutOff);`;default:return"return 1.0;"}}const ts=je(),ot=1;function gn(t){const e=new Ki,{attributes:i,varyings:n,vertex:o,fragment:a}=e,{applyMarkerOffset:s,draped:r,output:l,capType:p,stippleEnabled:c,falloffEnabled:u,roundJoins:g,wireframe:v,innerColorEnabled:y,hasAnimation:b,hasScreenSizePerspective:m,worldSizedImagePattern:x}=t;a.include($o),e.include(pn,t),e.include(Ga,t),e.include(Vi,t),e.include(Ri,t),e.include(Ka,t);const f=s&&!r;f&&(o.uniforms.add(new oe("markerScale",S=>S.markerScale)),e.include(vn,{space:2,hasScreenSizePerspective:m})),Ei(o,t),o.uniforms.add(new Uo("inverseProjectionMatrix",S=>S.camera.inverseProjectionMatrix),new ko("nearFar",S=>S.camera.nearFar),new oe("miterLimit",S=>S.join!=="miter"?0:S.miterLimit),new vt("viewport",S=>S.camera.fullViewport)),o.constants.add("LARGE_HALF_FLOAT","float",65500),i.add("position","vec3"),i.add("previousDelta","vec4"),i.add("nextDelta","vec4"),i.add("lineParameters","vec2"),i.add("u0","float"),n.add("vColor","vec4"),n.add("vpos","vec3",{invariant:!0}),n.add("vLineDistance","float"),n.add("vLineWidth","float");const w=c;w&&n.add("vLineSizeInv","float");const C=p===2,h=c&&C,_=u||h;_&&n.add("vLineDistanceNorm","float"),C&&(n.add("vSegmentSDF","float"),n.add("vReverseSegmentSDF","float")),o.code.add(d`vec2 perpendicular(vec2 v) {
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
}`),o.code.add(d`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),o.code.add(d`void clip(
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
}`),it(o),o.constants.add("aaWidth","float",c?0:1).main.add(d`
    // unpack values from vertex type
    bool isStartVertex = abs(abs(lineParameters.y) - 3.0) == 1.0;
    vec3 prevPosition = position + previousDelta.xyz * previousDelta.w;
    vec3 nextPosition = position + nextDelta.xyz * nextDelta.w;

    float coverage = 1.0;

    // Check for special value of lineParameters.y which is used by the Renderer when graphics are removed before the
    // VBO is recompacted. If this is the case, then we just project outside of clip space.
    if (lineParameters.y == 0.0) {
      gl_Position = ${qt};
    }
    else {
      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);

      bool isJoin = abs(lineParameters.y) < 3.0;
  `),f&&o.main.add(d`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos.xyz, other.xyz);
if (!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos.xyz) * 0.5;
}`),e.include(hn),o.main.add(d`
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

      float lineSize = getSize(${F(m,"clippedPos")});
      ${F(c&&m,"float patternLineSize = getSize(clippedCenter);")}
      ${F(c&&!m,"float patternLineSize = lineSize;")}

      ${F(x,d`
          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio * worldToScreenRatio;
          if (lineWidth < 1.0) {
            coverage = lineWidth;
            lineWidth = 1.0;
          }
        `,d`
          if (lineSize < 1.0) {
            coverage = lineSize; // convert sub-pixel coverage to alpha
            lineSize = 1.0;
          }

          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio;
        `)}

      vLineWidth = noPerspectiveWrite(lineWidth, pos.w);
      ${w?d`vLineSizeInv = noPerspectiveWrite(1.0 / lineSize, pos.w);`:""}
  `),(c||C)&&o.main.add(d`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${C?d`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),o.main.add(d`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
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
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),g?o.main.add(d`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = perpendicular(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${c?d`min(1.0, subdivisionFactor * ${d.float((ot+2)/(ot+1))})`:d`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(lineParameters.y) * factor * rotationAngle);
      `):o.main.add(d`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = perpendicular(joinDisplacementDir);`);const P=p!==0;return o.main.add(d`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${P?d`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),o.main.add(d`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(lineParameters.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = noPerspectiveWrite(sign(lineParameters.y), pos.w);

    vLineDistance = lineWidth * lineDistNorm;
    ${_?d`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),C&&o.main.add(d`vec2 segmentDir = normalize(segment);
vSegmentSDF = noPerspectiveWrite((isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir)), pos.w);
vReverseSegmentSDF = noPerspectiveWrite((isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir)), pos.w);`),c&&(r?o.uniforms.add(new Ie("worldToScreenRatio",S=>1/S.screenToPCSRatio)):o.main.add(d`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),o.main.add(d`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),r?o.main.add(d`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = u0 * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):o.main.add(d`float startPseudoScreen = mix(u0, u0 - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),o.uniforms.add(new oe("stipplePatternPixelSize",S=>fn(S))),o.main.add(d`
      float patternLength = patternLineSize * stipplePatternPixelSize;

      ${F(x,d`
          float uu = mix(u0, u0 - segmentLengthRender, isEndVertex);
          vStippleDistanceLimits = vec2(uu, uu + segmentLengthRender);
          vStipplePatternStretch = 1.0;

          // The v-coordinate used in case of an image pattern.
          bool isLeft = sign(lineParameters.y) < 0.0;
          vStippleV = isLeft ? 0.0 : 1.0;
        `,d`
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
    `)),o.main.add(d`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a = noPerspectiveWrite(vColor.a * coverage, pos.w);

      ${v&&!r?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),e.fragment.include(Bo,t),e.include(No,t),a.include(Fi),a.main.add(d`discardBySlice(vpos);
discardByTerrainDepth();`),e.include(wt),a.main.add(d`
    float lineWidth = noPerspectiveRead(vLineWidth);
    float lineDistance = noPerspectiveRead(vLineDistance);
    ${F(_,d`float lineDistanceNorm = noPerspectiveRead(vLineDistanceNorm);`)}
  `),v?a.main.add(d`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(C&&a.main.add(d`
        float sdf = noPerspectiveRead(min(vSegmentSDF, vReverseSegmentSDF));
        vec2 fragmentPosition = vec2(min(sdf, 0.0), lineDistance);

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - lineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${d.float(ae)}) {
          discard;
        }
      `),h?a.main.add(d`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        lineDistanceNorm
      );
      float stippleRadius = length(stipplePosition * lineWidth);
      float stippleCapSDF = (stippleRadius - lineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${d.float(ae)}, stippleCoverage);
      `):a.main.add(d`float stippleAlpha = getStippleAlpha(lineWidth);`),l!==9&&a.main.add(d`discardByStippleAlpha(stippleAlpha, ${d.float(ae)});`),e.include(wt),a.uniforms.add(new $e("intrinsicColor",S=>S.color)).main.add(d`vec4 color = intrinsicColor * vColor;
color.a = noPerspectiveRead(color.a);`),y&&a.uniforms.add(new $e("innerColor",S=>S.innerColor??S.color),new oe("innerWidth",(S,L)=>S.innerWidth*L.camera.pixelRatio)).main.add(d`float distToInner = abs(lineDistance) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`),a.main.add(d`vec4 finalColor = blendStipple(color, stippleAlpha);`),u&&(a.uniforms.add(new oe("falloff",S=>S.falloff)),a.main.add(d`finalColor.a *= pow(max(0.0, 1.0 - abs(lineDistanceNorm)), falloff);`)),c||a.main.add(d`float featherStartDistance = max(lineWidth - 2.0, 0.0);
float value = abs(lineDistance);
float feather = (value - featherStartDistance) / (lineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`),b&&a.main.add(d`
        finalColor = animate(finalColor);

        ${F(l!==9,d`
            if (finalColor.a <= ${d.float(ae)}) {
              discard;
            }`)}
      `)),a.main.add(d`outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),e}const is=Object.freeze(Object.defineProperty({__proto__:null,build:gn,ribbonlineNumRoundJoinSubdivisions:ot},Symbol.toStringTag,{value:"Module"}));let Jt=class extends Li{constructor(t,e){super(t,e,Bt(bn(e))),this.shader=new Mi(is,()=>import("./HUDMaterial.glsl-iWcNcRzo.js").then(i=>i.R)),this.primitiveType=e.wireframe?bt.LINES:bt.TRIANGLE_STRIP}_makePipelineState(t,e){const{oitPass:i,output:n,hasEmission:o,hasOccludees:a,hasPolygonOffset:s}=t,r=i===0,l=i===2;return nt({blending:Ae(n)?Ii(i):null,depthTest:Jo(i),depthWrite:Ho(t),drawBuffers:gt(n,$i(i,o)),colorWrite:xt,stencilWrite:a?Wi:null,stencilTest:a?e?ji:qo:null,polygonOffset:r||l?s?Sn:null:Go})}initializePipeline(t){if(t.occluder){const e=t.hasPolygonOffset?Sn:null,{output:i,hasOccludees:n}=t;this._occluderPipelineTransparent=nt({blending:en,polygonOffset:e,depthTest:Ui,depthWrite:null,colorWrite:xt,stencilWrite:null,stencilTest:n?Xo:null,drawBuffers:gt(i)}),this._occluderPipelineOpaque=nt({blending:en,polygonOffset:e,depthTest:n?Ui:ki,depthWrite:null,colorWrite:xt,stencilWrite:n?Qo:null,stencilTest:n?Yo:null,drawBuffers:gt(i)}),this._occluderPipelineMaskWrite=nt({blending:null,polygonOffset:e,depthTest:ki,depthWrite:null,colorWrite:null,stencilWrite:n?Wi:null,stencilTest:n?ji:null,drawBuffers:gt(i)})}return this._occludeePipeline=this._makePipelineState(t,!0),this._makePipelineState(t,!1)}getPipeline(t,e){if(e)return this._occludeePipeline;switch(t.occluder){case 12:return this._occluderPipelineTransparent??super.getPipeline(t);case 11:return this._occluderPipelineOpaque??super.getPipeline(t);default:t.occluder;case void 0:case null:return this._occluderPipelineMaskWrite??super.getPipeline(t)}}};Jt=A([mi("esri.views.3d.webgl-engine.shaders.RibbonLineTechnique")],Jt);const Sn={factor:0,units:-4};function bn(t){const e=kt().vec3f("position").vec4f16("previousDelta").vec4f16("nextDelta").f32("u0").vec2f16("lineParameters");return t.hasVVColor?e.f32("colorFeatureAttribute"):e.vec4u8("color",{glNormalized:!0}),t.hasVVSize?e.f32("sizeFeatureAttribute"):e.f32("size"),t.hasVVOpacity&&e.f32("opacityFeatureAttribute"),It()&&e.vec4u8("olidColor"),t.hasAnimation&&e.vec4f16("timeStamps"),e}let W=class extends Bi{constructor(t){super(),this.spherical=t,this.capType=0,this.emissionSource=0,this.animation=2,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVVOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.hasScreenSizePerspective=!1,this.worldSizedImagePattern=!1,this.textureCoordinateType=0,this.occlusionPass=!1,this.hasVVInstancing=!1,this.hasSliceTranslatedView=!0,this.overlayEnabled=!1,this.snowCover=!1}get hasAnimation(){return this.animation!==0}};A([D({count:3})],W.prototype,"capType",void 0),A([D({count:8})],W.prototype,"emissionSource",void 0),A([D({count:4})],W.prototype,"animation",void 0),A([D()],W.prototype,"hasPolygonOffset",void 0),A([D()],W.prototype,"writeDepth",void 0),A([D()],W.prototype,"draped",void 0),A([D()],W.prototype,"stippleEnabled",void 0),A([D()],W.prototype,"stippleOffColorEnabled",void 0),A([D()],W.prototype,"stipplePreferContinuous",void 0),A([D()],W.prototype,"roundJoins",void 0),A([D()],W.prototype,"applyMarkerOffset",void 0),A([D()],W.prototype,"hasVVSize",void 0),A([D()],W.prototype,"hasVVColor",void 0),A([D()],W.prototype,"hasVVOpacity",void 0),A([D()],W.prototype,"falloffEnabled",void 0),A([D()],W.prototype,"innerColorEnabled",void 0),A([D()],W.prototype,"hasOccludees",void 0),A([D()],W.prototype,"occluder",void 0),A([D()],W.prototype,"terrainDepthTest",void 0),A([D()],W.prototype,"cullAboveTerrain",void 0),A([D()],W.prototype,"wireframe",void 0),A([D()],W.prototype,"discardInvisibleFragments",void 0),A([D()],W.prototype,"hasScreenSizePerspective",void 0),A([D()],W.prototype,"worldSizedImagePattern",void 0);let xn=class extends Ni{constructor(t,e){super(t,os),this.produces=new Map([[2,i=>Zo(i)||Ae(i)&&this.parameters.renderOccluded===8],[3,i=>Ko(i)],[11,i=>Hi(i)&&this.parameters.renderOccluded===8],[12,i=>Hi(i)&&this.parameters.renderOccluded===8],[4,i=>Ae(i)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[9,i=>Ae(i)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[20,i=>ea(i)]]),this._configuration=new W(e)}getConfiguration(t,e){super.getConfiguration(t,e,this._configuration);const i=e.slot===20,n=this.parameters.stipplePattern!=null&&this.parameters.stippleTexture!=null&&t!==8,o=n&&i&&this.parameters.isImagePattern();return this._configuration.draped=i,this._configuration.stippleEnabled=n,this._configuration.stippleOffColorEnabled=n&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=n&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&ss(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasVVSize=this.parameters.hasVVSize,this._configuration.hasVVColor=this.parameters.hasVVColor,this._configuration.hasVVOpacity=this.parameters.hasVVOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=e.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===8,this._configuration.terrainDepthTest=e.terrainDepthTest&&Ae(t),this._configuration.cullAboveTerrain=e.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration.animation=this.parameters.animation,this._configuration.emissionSource=this.hasEmissions?1:0,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective&&!o,this._configuration.worldSizedImagePattern=o,this._configuration}get visible(){return this.parameters.color[3]>=ae||this.parameters.stipplePattern!=null&&(this.parameters.stippleOffColor?.[3]??0)>ae}setParameters(t,e){t.animation=this.parameters.animation,super.setParameters(t,e)}intersectDraped({attributes:t,screenToWorldRatio:e},i,n,o,a){if(!i.options.selectionMode)return;const s=t.get("size");let r=this.parameters.width;if(this.parameters.vvSize){const b=t.get("sizeFeatureAttribute").data[0];Number.isNaN(b)?r*=this.parameters.vvSize.fallback[0]:r*=ft(this.parameters.vvSize.offset[0]+b*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else s&&(r*=s.data[0]);const l=n[0],p=n[1],c=(r/2+4)*e;let u=Number.MAX_VALUE,g=0;const v=t.get("position").data,y=Yt(this.parameters,t)?v.length-2:v.length-5;for(let b=0;b<y;b+=3){const m=v[b],x=v[b+1],f=(b+3)%v.length,w=l-m,C=p-x,h=v[f]-m,_=v[f+1]-x,P=ft((h*w+_*C)/(h*h+_*_),0,1),S=h*P-w,L=_*P-C,O=S*S+L*L;O<u&&(u=O,g=b/3)}u<c*c&&o(a.distance,a.normal,g)}intersect(t,e,i,n,o,a){const{options:s,camera:r,rayBegin:l,rayEnd:p}=i;if(!s.selectionMode||!t.visible||!r)return;if(!ya(e))return void vi.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const c=t.attributes,u=c.get("position").data;let g=this.parameters.width;if(this.parameters.vvSize){const f=c.get("sizeFeatureAttribute").data[0];Number.isNaN(f)||(g*=ft(this.parameters.vvSize.offset[0]+f*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0]))}else c.has("size")&&(g*=c.get("size").data[0]);const v=rs;gi(v,i.point);const y=g*r.pixelRatio/2+4*r.pixelRatio;J(at[0],v[0]-y,v[1]+y,0),J(at[1],v[0]+y,v[1]+y,0),J(at[2],v[0]+y,v[1]-y,0),J(at[3],v[0]-y,v[1]-y,0);for(let f=0;f<4;f++)if(!r.unprojectFromRenderScreen(at[f],Pe[f]))return;mt(r.eye,Pe[0],Pe[1],Qt),mt(r.eye,Pe[1],Pe[2],Zt),mt(r.eye,Pe[2],Pe[3],Kt),mt(r.eye,Pe[3],Pe[0],ei);let b=Number.MAX_VALUE,m=0;const x=Yt(this.parameters,c)?u.length-2:u.length-5;for(let f=0;f<x;f+=3){se[0]=u[f]+e[12],se[1]=u[f+1]+e[13],se[2]=u[f+2]+e[14];const w=(f+3)%u.length;if(re[0]=u[w]+e[12],re[1]=u[w+1]+e[13],re[2]=u[w+2]+e[14],be(Qt,se)<0&&be(Qt,re)<0||be(Zt,se)<0&&be(Zt,re)<0||be(Kt,se)<0&&be(Kt,re)<0||be(ei,se)<0&&be(ei,re)<0)continue;const C=r.projectToRenderScreen(se,ls),h=r.projectToRenderScreen(re,cs);if(C==null||h==null)continue;if(C[2]<0&&h[2]>0){ne(xe,se,re);const P=r.frustum,S=-be(P[4],se)/Ke(xe,Si(P[4]));if(H(xe,xe,S),X(se,se,xe),!r.projectToRenderScreen(se,C))continue}else if(C[2]>0&&h[2]<0){ne(xe,re,se);const P=r.frustum,S=-be(P[4],re)/Ke(xe,Si(P[4]));if(H(xe,xe,S),X(re,re,xe),!r.projectToRenderScreen(re,h))continue}else if(C[2]<0&&h[2]<0)continue;C[2]=0,h[2]=0;const _=mo(Rt(C,h,Pn),v);_<b&&(b=_,B(yn,se),B(wn,re),m=f/3)}if(b<y*y){let f=Number.MAX_VALUE;if(vo(Rt(yn,wn,Pn),Rt(l,p,ds),De)){ne(De,De,l);const w=et(De);H(De,De,1/w),f=w/Je(l,p)}a(f,De,m)}}get hasEmissions(){return this.parameters.emissiveStrength>0}createBufferWriter(){return new as(bn(this.parameters),this.parameters)}createGLMaterial(t){return new ns(t)}validateParameters(t){t.join!=="miter"&&(t.miterLimit=0),t.markerParameters!=null&&(t.markerScale=t.markerParameters.width/t.width)}update(t){return!!this.parameters.hasAnimation&&(this.setParameters({timeElapsed:go(t.time)},!1),t.dt!==0)}};class ns extends ia{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures?.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){const{stipplePattern:i}=this._material.parameters;return this._stipplePattern!==i&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(i,this._stipplePattern)}),this._stipplePattern=i),this.getTechnique(Jt,e)}}let os=class extends ta{constructor(){super(...arguments),this._width=0,this.color=xi,this.join="miter",this.cap=0,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1,this.timeElapsed=Qe(0),this.animation=0,this.animationSpeed=1,this.trailLength=1,this.startTime=Qe(0),this.endTime=Qe(1/0),this.emissiveStrength=0}get width(){return this.isImagePattern()?this.stipplePattern.width:this._width}set width(t){this._width=t}get transparent(){return this.color[3]<1||this.hasAnimation||this.stipplePattern!=null&&(this.stippleOffColor?.[3]??0)<1}get hasAnimation(){return this.animation!==0}isImagePattern(){return cn(this.stipplePattern)&&this.stippleTexture!=null}},as=class{constructor(t,e){this.layout=t,this._parameters=e;const i=e.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=i;break;case"round":this.numJoinSubdivisions=ot+i}}_isClosed(t){return Yt(this._parameters,t)}allocate(t){return this.layout.createBuffer(t)}elementCount(t){const e=t.get("position").indices.length/2+1,i=this._isClosed(t);let n=i?2:4;return n+=((i?e:e-1)-(i?0:1))*(2*this.numJoinSubdivisions+4),n+=2,this._parameters.wireframe&&(n=2+4*(n-2)),n}write(t,e,i,n,o,a){const s=this.layout,r=i.get("position"),l=r.indices,p=r.data.length/3,c=i.get("distanceToStart")?.data;l&&l.length!==2*(p-1)&&console.warn("RibbonLineMaterial does not support indices");const u=s.fields.has("sizeFeatureAttribute");let g=1,v=null;if(u){const E=i.get("sizeFeatureAttribute");E.data.length===1?g=E.data[0]:v=E.data}else g=i.get("size")?.data[0]??1;let y=[1,1,1,1],b=0,m=null;const x=s.fields.has("colorFeatureAttribute");if(x){const E=i.get("colorFeatureAttribute");E.data.length===1?b=E.data[0]:m=E.data}else y=i.get("color")?.data??y;const f=i.get("timeStamps")?.data,w=f&&s.fields.has("timeStamps"),C=s.fields.has("opacityFeatureAttribute");let h=0,_=null;if(C){const E=i.get("opacityFeatureAttribute");E.data.length===1?h=E.data[0]:_=E.data}const P=new Float32Array(o.buffer),S=Zi(o.buffer),L=new Uint8Array(o.buffer),O=s.stride/4;let V=a*O;const M=V;let $=0;const ze=c?(E,ce,Ce)=>$=c[Ce]:(E,ce,Ce)=>$+=Je(E,ce),Z=P.BYTES_PER_ELEMENT/S.BYTES_PER_ELEMENT,Oe=4/Z,Fe=It(),z=(E,ce,Ce,ue,dt,eo,pt,to)=>{P[V++]=ce[0],P[V++]=ce[1],P[V++]=ce[2],Gi(E,ce,S,V*Z),V+=Oe,Gi(Ce,ce,S,V*Z),V+=Oe,P[V++]=to;let we=V*Z;if(S[we++]=dt,S[we++]=eo,V=Math.ceil(we/Z),x)P[V]=m?.[pt]??b;else{const de=Math.min(4*pt,y.length-4),ut=4*V;L[ut]=255*y[de],L[ut+1]=255*y[de+1],L[ut+2]=255*y[de+2],L[ut+3]=255*y[de+3]}if(V++,P[V++]=v?.[pt]??g,C&&(P[V++]=_?.[pt]??h),Fe){let de=4*V;n?(L[de++]=n[0],L[de++]=n[1],L[de++]=n[2],L[de++]=n[3]):(L[de++]=0,L[de++]=0,L[de++]=0,L[de++]=0),V=Math.ceil(.25*de)}w&&(we=V*Z,S[we++]=ue[0],S[we++]=ue[1],S[we++]=ue[2],S[we++]=ue[3],V=Math.ceil(we/Z))};V+=O,J(j,r.data[0],r.data[1],r.data[2]),w&&ht(le,f[0],f[1],f[2],f[3]),t&&ie(j,j,t);const ye=this._isClosed(i);if(ye){const E=r.data.length-3;J(G,r.data[E],r.data[E+1],r.data[E+2]),t&&ie(G,G,t)}else J(U,r.data[3],r.data[4],r.data[5]),t&&ie(U,U,t),z(j,j,U,le,1,-4,0,0),z(j,j,U,le,1,4,0,0),B(G,j),B(j,U),w&&ht(le,f[4],f[5],f[6],f[7]);const ee=ye?0:1,te=ye?p:p-1;for(let E=ee;E<te;E++){const ce=(E+1)%p*3;J(U,r.data[ce],r.data[ce+1],r.data[ce+2]),t&&ie(U,U,t),ze(G,j,E),z(G,j,U,le,0,-1,E,$),z(G,j,U,le,0,1,E,$);const Ce=this.numJoinSubdivisions;for(let ue=0;ue<Ce;++ue){const dt=(ue+1)/(Ce+1);z(G,j,U,le,dt,-1,E,$),z(G,j,U,le,dt,1,E,$)}if(z(G,j,U,le,1,-2,E,$),z(G,j,U,le,1,2,E,$),B(G,j),B(j,U),w){const ue=(E+1)%p*4;ht(le,f[ue],f[ue+1],f[ue+2],f[ue+3])}}return ye?(J(U,r.data[3],r.data[4],r.data[5]),t&&ie(U,U,t),$=ze(G,j,te),z(G,j,U,le,0,-1,ee,$),z(G,j,U,le,0,1,ee,$)):($=ze(G,j,te),z(G,j,j,le,0,-5,te,$),z(G,j,j,le,0,5,te,$)),Xt(P,M+O,P,M,O),V=Xt(P,V-O,P,V,O),this._parameters.wireframe&&this._addWireframeVertices(o,M,V,O),null}_addWireframeVertices(t,e,i,n){const o=new Float32Array(t.buffer,i*Float32Array.BYTES_PER_ELEMENT),a=new Float32Array(t.buffer,e*Float32Array.BYTES_PER_ELEMENT,i-e);let s=0;const r=l=>s=Xt(a,l,o,s,n);for(let l=0;l<a.length-1;l+=2*n)r(l),r(l+2*n),r(l+1*n),r(l+2*n),r(l+1*n),r(l+3*n)}};function Xt(t,e,i,n,o){for(let a=0;a<o;a++)i[n++]=t[e++];return n}function Yt(t,e){return t.isClosed?e.get("position").indices.length>2:!1}function ss(t){return t.anchor===1&&t.hideOnShortSegments&&t.placement==="begin-end"&&t.worldSpace}const se=R(),re=R(),xe=R(),De=R(),rs=R(),ls=We(),cs=We(),yn=R(),wn=R(),Pn=bi(),ds=bi(),G=R(),j=R(),U=R(),le=Ye(),at=[We(),We(),We(),We()],Pe=[R(),R(),R(),R()],Qt=Ze(),Zt=Ze(),Kt=Ze(),ei=Ze();let ps=class{constructor(t){this._originSR=t,this._rootOriginId="root/"+Dt(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5,this._baselineDistance=.5*this._gridSize;const e=this._baselineDistance*us;this._baselineObjectSize=e/hs}getOrigin(t){const e=this._origins.get(this._rootOriginId);if(e==null){const p=Ht(t[0]+Math.random()-.5,t[1]+Math.random()-.5,t[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,p),p}const i=this._gridSize,n=Math.round(t[0]/i),o=Math.round(t[1]/i),a=Math.round(t[2]/i),s=`${n}/${o}/${a}`;let r=this._origins.get(s);const l=.5*i;if(ne(N,t,e.vec3),N[0]=Math.abs(N[0]),N[1]=Math.abs(N[1]),N[2]=Math.abs(N[2]),N[0]<l&&N[1]<l&&N[2]<l){if(r){const p=Math.max(...N);if(ne(N,t,r.vec3),N[0]=Math.abs(N[0]),N[1]=Math.abs(N[1]),N[2]=Math.abs(N[2]),Math.max(...N)<p)return r}return e}return r||(r=Ht(n*i,o*i,a*i,s),this._origins.set(s,r)),r}needsOriginUpdate(t,e,i){const n=Je(t.vec3,e),o=Math.max(1,i/this._baselineObjectSize);return n>this._baselineDistance*o}_drawOriginBox(t,e=So(1,1,0,1)){const i=window.view,n=i.stage,o=e.toString();if(!this._objects.has(o)){this._material=new xn({width:2,color:e},!1);const g=new ln(n,{pickable:!1}),v=new on({castShadow:!1});g.add(v),this._objects.set(o,v)}const a=this._objects.get(o),s=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],r=s.length,l=new Array(3*r),p=new Array,c=.5*this._gridSize;for(let g=0;g<r;g++)l[3*g]=t[0]+(1&s[g]?c:-c),l[3*g+1]=t[1]+(2&s[g]?c:-c),l[3*g+2]=t[2]+(4&s[g]?c:-c),g>0&&p.push(g-1,g);Et(l,this._originSR,0,l,i.renderSpatialReference,0,r);const u=new he(this._material,[["position",new T(l,p,3,!0)]],null,2);a.addGeometry(u)}get test(){}};const N=R(),us=2**-23,hs=.05;function On(t,e=!1){return t<=bo?e?new Array(t).fill(0):new Array(t):Zi(t)}function fs(t,e,i=null){const n=[],o=e.mapPositions,a=ms(e,n),s=a.data,r=a.indices.length,l=Nt(r);return vs(e,n,l),bs(e,n,l),gs(e,n,l),Ss(e,n,a.indices,l),xs(e,n,a.indices,l),ys(e,n),ws(e,n,a.indices,l),Ps(e,n,s),new he(t,n,o,2,i)}function ms(t,e){const{attributeData:{position:i},removeDuplicateStartEnd:n}=t,o=Os(i)&&n,a=i.length/3-(o?1:0),s=new Array(2*(a-1)),r=o?i.slice(0,-3):i;let l=0;for(let c=0;c<a-1;c++)s[l++]=c,s[l++]=c+1;const p=new T(r,s,3,o);return e.push(["position",p]),p}function vs(t,e,i){if(t.attributeData.colorFeature!=null)return;const n=t.attributeData.color;e.push(["color",new T(n??xi,i,4)])}function gs(t,e,i){t.attributeData.normal&&e.push(["normal",new T(t.attributeData.normal,i,3)])}function Ss(t,e,i,n){const o=t.attributeData.colorFeature;o!=null&&(typeof o=="number"?e.push(["colorFeatureAttribute",new T([o],n,1,!0)]):e.push(["colorFeatureAttribute",new T(o,i,1,!0)]))}function bs(t,e,i){t.attributeData.sizeFeature==null&&e.push(["size",new T([t.attributeData.size??1],i,1,!0)])}function xs(t,e,i,n){const o=t.attributeData.sizeFeature;o!=null&&(typeof o=="number"?e.push(["sizeFeatureAttribute",new T([o],n,1,!0)]):e.push(["sizeFeatureAttribute",new T(o,i,1,!0)]))}function ys(t,e){const{attributeData:{position:i,timeStamps:n}}=t;if(!n)return;const o=i.length/3,a=new Array(2*(o-1));let s=0;for(let r=0;r<o-1;r++)a[s++]=r,a[s++]=r+1;e.push(["timeStamps",new T(n,a,Ve,!0)])}function ws(t,e,i,n){const o=t.attributeData.opacityFeature;o!=null&&(typeof o=="number"?e.push(["opacityFeatureAttribute",new T([o],n,1,!0)]):e.push(["opacityFeatureAttribute",new T(o,i,1,!0)]))}function Ps(t,e,i){if(t.overlayInfo==null||t.overlayInfo.renderCoordsHelper.viewingMode!==1||!t.overlayInfo.spatialReference.isGeographic)return;const n=yi(i.length),o=xo(t.overlayInfo.spatialReference);for(let u=0;u<n.length;u+=3)yo(i,u,n,u,o);const a=i.length/3,s=ve(a+1);let r=_s,l=zs,p=0,c=0;Me(r,n[c++],n[c++]),c++,s[0]=0;for(let u=1;u<a+1;++u)u===a&&(c=0),Me(l,n[c++],n[c++]),c++,p+=wo(r,l),s[u]=p,[r,l]=[l,r];e.push(["distanceToStart",new T(s,e[0][1].indices,1,!0)])}function Os(t){const e=t.length;return t[0]===t[e-3]&&t[1]===t[e-2]&&t[2]===t[e-1]}const _s=je(),zs=je(),Ve=4;function Cs(t,e){const i=On(t.length*Ve),n=t[0],o=t[t.length-1];for(let a=0;a<t.length;a++)i[a*Ve]=t[a],i[a*Ve+1]=n,i[a*Ve+2]=o,i[a*Ve+3]=e+.5;return i}function _n(t,e){const i=t[e],n=t[e+1],o=t[e+2];return Math.sqrt(i*i+n*n+o*o)}function As(t,e){const i=t[e],n=t[e+1],o=t[e+2],a=1/Math.sqrt(i*i+n*n+o*o);t[e]*=a,t[e+1]*=a,t[e+2]*=a}function zn(t,e,i){t[e]*=i,t[e+1]*=i,t[e+2]*=i}function Ts(t,e,i,n,o,a=e){(o=o||t)[a]=t[e]+i[n],o[a+1]=t[e+1]+i[n+1],o[a+2]=t[e+2]+i[n+2]}function Ds(){return Cn??=Vs(),Cn}function Vs(){const t=new T([0,0,0,255,255,0,255,255],[0,1,2,3],2,!0);return new na([["uv0",t]])}let Cn=null;const ti=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],Rs=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],Es=[0,0,1,0,1,1,0,1],Fs=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],An=new Array(36);for(let t=0;t<6;t++)for(let e=0;e<6;e++)An[6*t+e]=t;const Re=new Array(36);for(let t=0;t<6;t++)Re[6*t]=0,Re[6*t+1]=1,Re[6*t+2]=2,Re[6*t+3]=2,Re[6*t+4]=3,Re[6*t+5]=0;function Ls(t,e){Array.isArray(e)||(e=[e,e,e]);const i=new Array(24);for(let n=0;n<8;n++)i[3*n]=ti[n][0]*e[0],i[3*n+1]=ti[n][1]*e[1],i[3*n+2]=ti[n][2]*e[2];return new he(t,[["position",new T(i,Fs,3,!0)],["normal",new T(Rs,An,3)],["uv0",new T(Es,Re,2)]])}const ii=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],Ms=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],js=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],Ws=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function Is(t,e){Array.isArray(e)||(e=[e,e,e]);const i=new Array(18);for(let n=0;n<6;n++)i[3*n]=ii[n][0]*e[0],i[3*n+1]=ii[n][1]*e[1],i[3*n+2]=ii[n][2]*e[2];return new he(t,[["position",new T(i,js,3,!0)],["normal",new T(Ms,Ws,3)]])}const Pt=k(-.5,0,-.5),Ot=k(.5,0,-.5),_t=k(0,0,.5),zt=k(0,.5,0),Ue=ge(),ke=ge(),Be=ge(),Ne=ge(),He=ge();ne(Ue,Pt,zt),ne(ke,Pt,Ot),_e(Be,Ue,ke),Y(Be,Be),ne(Ue,Ot,zt),ne(ke,Ot,_t),_e(Ne,Ue,ke),Y(Ne,Ne),ne(Ue,_t,zt),ne(ke,_t,Pt),_e(He,Ue,ke),Y(He,He);const ni=[Pt,Ot,_t,zt],$s=[0,-1,0,Be[0],Be[1],Be[2],Ne[0],Ne[1],Ne[2],He[0],He[1],He[2]],Us=[0,1,2,3,1,0,3,2,1,3,0,2],ks=[0,0,0,1,1,1,2,2,2,3,3,3];function Bs(t,e){Array.isArray(e)||(e=[e,e,e]);const i=new Array(12);for(let n=0;n<4;n++)i[3*n]=ni[n][0]*e[0],i[3*n+1]=ni[n][1]*e[1],i[3*n+2]=ni[n][2]*e[2];return new he(t,[["position",new T(i,Us,3,!0)],["normal",new T($s,ks,3)]])}function Ns(t,e,i,n,o={uv:!0}){const a=-Math.PI,s=2*Math.PI,r=-Math.PI/2,l=Math.PI,p=Math.max(3,Math.floor(i)),c=Math.max(2,Math.floor(n)),u=(p+1)*(c+1),g=ve(3*u),v=ve(3*u),y=ve(2*u),b=[];let m=0;for(let w=0;w<=c;w++){const C=[],h=w/c,_=r+h*l,P=Math.cos(_);for(let S=0;S<=p;S++){const L=S/p,O=a+L*s,V=Math.cos(O)*P,M=Math.sin(_),$=-Math.sin(O)*P;g[3*m]=V*e,g[3*m+1]=M*e,g[3*m+2]=$*e,v[3*m]=V,v[3*m+1]=M,v[3*m+2]=$,y[2*m]=L,y[2*m+1]=h,C.push(m),++m}b.push(C)}const x=new Array;for(let w=0;w<c;w++)for(let C=0;C<p;C++){const h=b[w][C],_=b[w][C+1],P=b[w+1][C+1],S=b[w+1][C];w===0?(x.push(h),x.push(P),x.push(S)):w===c-1?(x.push(h),x.push(_),x.push(P)):(x.push(h),x.push(_),x.push(P),x.push(P),x.push(S),x.push(h))}const f=[["position",new T(g,x,3,!0)],["normal",new T(v,x,3,!0)]];return o.uv&&f.push(["uv0",new T(y,x,2,!0)]),o.offset&&(f[0][0]="offset",f.push(["position",new T(Float64Array.from(o.offset),Nt(x.length),3,!0)])),new he(t,f)}function Hs(t,e,i,n){const o=Gs(e,i);return new he(t,o)}function Gs(t,e,i){let n,o;n=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],o=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let l=0;l<n.length;l+=3)zn(n,l,t/_n(n,l));let a={};function s(l,p){l>p&&([l,p]=[p,l]);const c=l.toString()+"."+p.toString();if(a[c])return a[c];let u=n.length;return n.length+=3,Ts(n,3*l,n,3*p,n,u),zn(n,u,t/_n(n,u)),u/=3,a[c]=u,u}for(let l=0;l<e;l++){const p=o.length,c=new Array(4*p);for(let u=0;u<p;u+=3){const g=o[u],v=o[u+1],y=o[u+2],b=s(g,v),m=s(v,y),x=s(y,g),f=4*u;c[f]=g,c[f+1]=b,c[f+2]=x,c[f+3]=v,c[f+4]=m,c[f+5]=b,c[f+6]=y,c[f+7]=x,c[f+8]=m,c[f+9]=b,c[f+10]=m,c[f+11]=x}o=c,a={}}const r=qi(n);for(let l=0;l<r.length;l+=3)As(r,l);return[["position",new T(qi(n),o,3,!0)],["normal",new T(r,o,3,!0)]]}function qs(t,{normal:e,position:i,color:n,rotation:o,size:a,centerOffsetAndDistance:s,uvi:r,featureAttribute:l,olidColor:p=null}={}){const c=i?wi(i):R(),u=e?wi(e):Xe(0,0,1),g=n?[n[0],n[1],n[2],n.length>3?n[3]:255]:[255,255,255,255],v=a!=null&&a.length===2?a:[1,1],y=o!=null?[o]:[0],b=Nt(1),m=[["position",new T(c,b,3,!0)],["normal",new T(u,b,3,!0)],["color",new T(g,b,4,!0)],["size",new T(v,b,2)],["rotation",new T(y,b,1,!0)]];if(r&&m.push(["uvi",new T(r,b,r.length)]),s!=null){const x=[s[0],s[1],s[2],s[3]];m.push(["centerOffsetAndDistance",new T(x,b,4)])}if(l){const x=[l[0],l[1],l[2],l[3]];m.push(["featureAttribute",new T(x,b,4)])}return new he(t,m,null,1,p,void 0,Ds())}function Js(t,e,i,n,o=!0,a=!0){let s=0;const r=e,l=t;let p=k(0,s,0),c=k(0,s+l,0),u=k(0,-1,0),g=k(0,1,0);n&&(s=l,c=k(0,0,0),p=k(0,s,0),u=k(0,1,0),g=k(0,-1,0));const v=[c,p],y=[u,g],b=i+2,m=Math.sqrt(l*l+r*r);if(n)for(let h=i-1;h>=0;h--){const _=h*(2*Math.PI/i),P=k(Math.cos(_)*r,s,Math.sin(_)*r);v.push(P);const S=k(l*Math.cos(_)/m,-r/m,l*Math.sin(_)/m);y.push(S)}else for(let h=0;h<i;h++){const _=h*(2*Math.PI/i),P=k(Math.cos(_)*r,s,Math.sin(_)*r);v.push(P);const S=k(l*Math.cos(_)/m,r/m,l*Math.sin(_)/m);y.push(S)}const x=new Array,f=new Array;if(o){for(let h=3;h<v.length;h++)x.push(1),x.push(h-1),x.push(h),f.push(0),f.push(0),f.push(0);x.push(v.length-1),x.push(2),x.push(1),f.push(0),f.push(0),f.push(0)}if(a){for(let h=3;h<v.length;h++)x.push(h),x.push(h-1),x.push(0),f.push(h),f.push(h-1),f.push(1);x.push(0),x.push(2),x.push(v.length-1),f.push(1),f.push(2),f.push(y.length-1)}const w=ve(3*b);for(let h=0;h<b;h++)w[3*h]=v[h][0],w[3*h+1]=v[h][1],w[3*h+2]=v[h][2];const C=ve(3*b);for(let h=0;h<b;h++)C[3*h]=y[h][0],C[3*h+1]=y[h][1],C[3*h+2]=y[h][2];return[["position",new T(w,x,3,!0)],["normal",new T(C,f,3,!0)]]}function Xs(t,e,i,n,o,a=!0,s=!0){return new he(t,Js(e,i,n,o,a,s))}function Ys(t,e,i,n,o,a,s){const r=o?tn(o):k(1,0,0),l=a?tn(a):k(0,0,0);s??=!0;const p=ge();Y(p,r);const c=ge();H(c,p,Math.abs(e));const u=ge();H(u,c,-.5),X(u,u,l);const g=k(0,1,0);Math.abs(1-Ke(p,g))<.2&&J(g,0,0,1);const v=ge();_e(v,p,g),Y(v,v),_e(g,v,p);const y=2*n+(s?2:0),b=n+(s?2:0),m=ve(3*y),x=ve(3*b),f=ve(2*y),w=new Array(3*n*(s?4:2)),C=new Array(3*n*(s?4:2));s&&(m[3*(y-2)]=u[0],m[3*(y-2)+1]=u[1],m[3*(y-2)+2]=u[2],f[2*(y-2)]=0,f[2*(y-2)+1]=0,m[3*(y-1)]=m[3*(y-2)]+c[0],m[3*(y-1)+1]=m[3*(y-2)+1]+c[1],m[3*(y-1)+2]=m[3*(y-2)+2]+c[2],f[2*(y-1)]=1,f[2*(y-1)+1]=1,x[3*(b-2)]=-p[0],x[3*(b-2)+1]=-p[1],x[3*(b-2)+2]=-p[2],x[3*(b-1)]=p[0],x[3*(b-1)+1]=p[1],x[3*(b-1)+2]=p[2]);const h=(O,V,M)=>{w[O]=V,C[O]=M};let _=0;const P=ge(),S=ge();for(let O=0;O<n;O++){const V=O*(2*Math.PI/n);H(P,g,Math.sin(V)),H(S,v,Math.cos(V)),X(P,P,S),x[3*O]=P[0],x[3*O+1]=P[1],x[3*O+2]=P[2],H(P,P,i),X(P,P,u),m[3*O]=P[0],m[3*O+1]=P[1],m[3*O+2]=P[2],f[2*O]=O/n,f[2*O+1]=0,m[3*(O+n)]=m[3*O]+c[0],m[3*(O+n)+1]=m[3*O+1]+c[1],m[3*(O+n)+2]=m[3*O+2]+c[2],f[2*(O+n)]=O/n,f[2*O+1]=1;const M=(O+1)%n;h(_++,O,O),h(_++,O+n,O),h(_++,M,M),h(_++,M,M),h(_++,O+n,O),h(_++,M+n,M)}if(s){for(let O=0;O<n;O++){const V=(O+1)%n;h(_++,y-2,b-2),h(_++,O,b-2),h(_++,V,b-2)}for(let O=0;O<n;O++){const V=(O+1)%n;h(_++,O+n,b-1),h(_++,y-1,b-1),h(_++,V+n,b-1)}}const L=[["position",new T(m,w,3,!0)],["normal",new T(x,C,3,!0)],["uv0",new T(f,w,2,!0)]];return new he(t,L)}function Qs(t,e,i,n,o,a){n=n||10,o=o==null||o,Ut(e.length>1);const s=[[0,0,0]],r=[],l=[];for(let p=0;p<n;p++){r.push([0,-p-1,-(p+1)%n-1]);const c=p/n*2*Math.PI;l.push([Math.cos(c)*i,Math.sin(c)*i])}return Tn(t,l,e,s,r,o,a)}function Tn(t,e,i,n,o,a,s=k(0,0,0)){const r=e.length,l=ve(i.length*r*3+(6*n.length||0)),p=ve(i.length*r*3+(n?6:0)),c=new Array,u=new Array;let g=0,v=0;const y=R(),b=R(),m=R(),x=R(),f=R(),w=R(),C=R(),h=R(),_=R(),P=R(),S=R(),L=R(),O=R(),V=Ze();J(_,0,1,0),ne(b,i[1],i[0]),Y(b,b),a?(X(h,i[0],s),Y(m,h)):J(m,0,0,1),ai(b,m,_,_,f,m,Dn),B(x,m),B(L,f);for(let z=0;z<n.length;z++)H(w,f,n[z][0]),H(h,m,n[z][2]),X(w,w,h),X(w,w,i[0]),l[g++]=w[0],l[g++]=w[1],l[g++]=w[2];p[v++]=-b[0],p[v++]=-b[1],p[v++]=-b[2];for(let z=0;z<o.length;z++)c.push(o[z][0]>0?o[z][0]:-o[z][0]-1+n.length),c.push(o[z][1]>0?o[z][1]:-o[z][1]-1+n.length),c.push(o[z][2]>0?o[z][2]:-o[z][2]-1+n.length),u.push(0),u.push(0),u.push(0);let M=n.length;const $=n.length-1;for(let z=0;z<i.length;z++){let ye=!1;z>0&&(B(y,b),z<i.length-1?(ne(b,i[z+1],i[z]),Y(b,b)):ye=!0,X(P,y,b),Y(P,P),X(S,i[z-1],x),Po(i[z],P,V),Oo(V,_o(S,y),h)?(ne(h,h,i[z]),Y(m,h),_e(f,P,m),Y(f,f)):ai(P,x,L,_,f,m,Dn),B(x,m),B(L,f)),a&&(X(h,i[z],s),Y(O,h));for(let ee=0;ee<r;ee++)if(H(w,f,e[ee][0]),H(h,m,e[ee][1]),X(w,w,h),Y(C,w),p[v++]=C[0],p[v++]=C[1],p[v++]=C[2],X(w,w,i[z]),l[g++]=w[0],l[g++]=w[1],l[g++]=w[2],!ye){const te=(ee+1)%r;c.push(M+ee),c.push(M+r+ee),c.push(M+te),c.push(M+te),c.push(M+r+ee),c.push(M+r+te);for(let E=0;E<6;E++){const ce=c.length-6;u.push(c[ce+E]-$)}}M+=r}const ze=i[i.length-1];for(let z=0;z<n.length;z++)H(w,f,n[z][0]),H(h,m,n[z][1]),X(w,w,h),X(w,w,ze),l[g++]=w[0],l[g++]=w[1],l[g++]=w[2];const Z=v/3;p[v++]=b[0],p[v++]=b[1],p[v++]=b[2];const Oe=M-r;for(let z=0;z<o.length;z++)c.push(o[z][0]>=0?M+o[z][0]:-o[z][0]-1+Oe),c.push(o[z][2]>=0?M+o[z][2]:-o[z][2]-1+Oe),c.push(o[z][1]>=0?M+o[z][1]:-o[z][1]-1+Oe),u.push(Z),u.push(Z),u.push(Z);const Fe=[["position",new T(l,c,3,!0)],["normal",new T(p,u,3,!0)]];return new he(t,Fe)}function Zs(t,e,i,n,o){const a=yi(3*e.length),s=new Array(2*(e.length-1));let r=0,l=0;for(let c=0;c<e.length;c++){for(let u=0;u<3;u++)a[r++]=e[c][u];c>0&&(s[l++]=c-1,s[l++]=c)}const p=[["position",new T(a,s,3,!0)]];if(i?.length===e.length&&i[0].length===3){const c=ve(3*i.length);let u=0;for(let g=0;g<e.length;g++)for(let v=0;v<3;v++)c[u++]=i[g][v];p.push(["normal",new T(c,s,3,!0)])}if(n&&p.push(["color",new T(n,_a(n.length/4),4)]),o?.length===e.length){const c=Cs(o,1);p.push(["timeStamps",new T(c,s,Ve,!0)])}return new he(t,p,null,2)}function Ks(t,e,i,n,o,a=0){const s=new Array(18),r=[[-i,a,o/2],[n,a,o/2],[0,e+a,o/2],[-i,a,-o/2],[n,a,-o/2],[0,e+a,-o/2]],l=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let p=0;p<6;p++)s[3*p]=r[p][0],s[3*p+1]=r[p][1],s[3*p+2]=r[p][2];return new he(t,[["position",new T(s,l,3,!0)]])}function er(t,e){const i=t.getMutableAttribute("position").data;for(let n=0;n<i.length;n+=3){const o=i[n],a=i[n+1],s=i[n+2];J(Ge,o,a,s),ie(Ge,Ge,e),i[n]=Ge[0],i[n+1]=Ge[1],i[n+2]=Ge[2]}}function tr(t,e=t){const i=t.attributes,n=i.get("position").data,o=i.get("normal").data;if(o){const a=e.getMutableAttribute("normal").data;for(let s=0;s<o.length;s+=3){const r=o[s+1];a[s+1]=-o[s+2],a[s+2]=r}}if(n){const a=e.getMutableAttribute("position").data;for(let s=0;s<n.length;s+=3){const r=n[s+1];a[s+1]=-n[s+2],a[s+2]=r}}}function oi(t,e,i,n,o){return!(Math.abs(Ke(e,t))>o)&&(_e(i,t,e),Y(i,i),_e(n,i,t),Y(n,n),!0)}function ai(t,e,i,n,o,a,s){return oi(t,e,o,a,s)||oi(t,i,o,a,s)||oi(t,n,o,a,s)}const Dn=.99619469809,Ge=R();function Vn(t){return t.type==="point"}class ir{constructor(e,i=null,n=0){this.array=e,this.spatialReference=i,this.offset=n}}function Rn(t){return"array"in t}function st(t,e,i="ground"){if(Vn(e))return t.getElevation(e.x,e.y,e.z||0,e.spatialReference,i);if(Rn(e)){let n=e.offset;return t.getElevation(e.array[n++],e.array[n++],e.array[n]||0,e.spatialReference??t.spatialReference,i)}return t.getElevation(e[0],e[1],e[2]||0,t.spatialReference,i)}function nr(t,e,i,n,o,a,s,r,l,p,c){const u=fr[c.mode];let g,v,y=0;if(Et(t,e,i,n,l.spatialReference,o,r))return u?.requiresAlignment(c)?(y=u.applyElevationAlignmentBuffer(n,o,a,s,r,l,p,c),g=a,v=s):(g=n,v=o),Et(g,l.spatialReference,v,a,p.spatialReference,s,r)?y:void 0}function si(t,e,i,n,o){const a=(Vn(t)?t.z:Rn(t)?t.array[t.offset+2]:t[2])||0;switch(i.mode){case"on-the-ground":{const s=st(e,t,"ground")??0;return o.verticalDistanceToGround=0,o.sampledElevation=s,void(o.z=s)}case"relative-to-ground":{const s=st(e,t,"ground")??0,r=i.geometryZWithOffset(a,n);return o.verticalDistanceToGround=r,o.sampledElevation=s,void(o.z=r+s)}case"relative-to-scene":{const s=st(e,t,"scene")??0,r=i.geometryZWithOffset(a,n);return o.verticalDistanceToGround=r,o.sampledElevation=s,void(o.z=r+s)}case"absolute-height":{const s=i.geometryZWithOffset(a,n),r=st(e,t,"ground")??0;return o.verticalDistanceToGround=s-r,o.sampledElevation=r,void(o.z=s)}default:return void(o.z=0)}}function or(t,e,i,n){return si(t,e,i,n,qe),qe.z}function ar(t,e,i){return e==="on-the-ground"&&i==="on-the-ground"?t.staysOnTheGround:e===i||e!=="on-the-ground"&&i!=="on-the-ground"?e==null||i==null?t.definedChanged:1:t.onTheGroundChanged}function sr(t){return t==="relative-to-ground"||t==="relative-to-scene"}function rr(t){return t!=="absolute-height"}function lr(t,e,i,n,o){si(e,i,o,n,qe),En(t,qe.verticalDistanceToGround);const a=qe.sampledElevation,s=Vt(mr,t.transformation);return Ct[0]=e.x,Ct[1]=e.y,Ct[2]=qe.z,za(e.spatialReference,Ct,s,n.spatialReference)?t.transformation=s:console.warn("Could not locate symbol object properly, it might be misplaced"),a}function En(t,e){for(let i=0;i<t.geometries.length;++i){const n=t.geometries[i].getMutableAttribute("centerOffsetAndDistance");n&&n.data[3]!==e&&(n.data[3]=e,t.geometryVertexAttributeUpdated(t.geometries[i],"centerOffsetAndDistance"))}}function cr(t,e,i,n,o,a){let s=0;const r=a.spatialReference;e*=3,n*=3;for(let l=0;l<o;++l){const p=t[e],c=t[e+1],u=t[e+2],g=a.getElevation(p,c,u,r,"ground")??0;s+=g,i[n]=p,i[n+1]=c,i[n+2]=g,e+=3,n+=3}return s/o}function dr(t,e,i,n,o,a,s,r){let l=0;const p=r.calculateOffsetRenderUnits(s),c=r.featureExpressionInfoContext,u=a.spatialReference;e*=3,n*=3;for(let g=0;g<o;++g){const v=t[e],y=t[e+1],b=t[e+2],m=a.getElevation(v,y,b,u,"ground")??0;l+=m,i[n]=v,i[n+1]=y,i[n+2]=c==null?b+m+p:m+p,e+=3,n+=3}return l/o}function pr(t,e,i,n,o,a,s,r){let l=0;const p=r.calculateOffsetRenderUnits(s),c=r.featureExpressionInfoContext,u=a.spatialReference;e*=3,n*=3;for(let g=0;g<o;++g){const v=t[e],y=t[e+1],b=t[e+2],m=a.getElevation(v,y,b,u,"scene")??0;l+=m,i[n]=v,i[n+1]=y,i[n+2]=c==null?b+m+p:m+p,e+=3,n+=3}return l/o}function ur(t){const e=t.meterUnitOffset,i=t.featureExpressionInfoContext;return e!==0||i!=null}function hr(t,e,i,n,o,a,s,r){const l=r.calculateOffsetRenderUnits(s),p=r.featureExpressionInfoContext;e*=3,n*=3;for(let c=0;c<o;++c){const u=t[e],g=t[e+1],v=t[e+2];i[n]=u,i[n+1]=g,i[n+2]=p==null?v+l:l,e+=3,n+=3}return 0}class Fn{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}const fr={"absolute-height":{applyElevationAlignmentBuffer:hr,requiresAlignment:ur},"on-the-ground":{applyElevationAlignmentBuffer:cr,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:dr,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:pr,requiresAlignment:()=>!0}},mr=Le(),qe=new Fn,Ct=R(),vr=()=>vi.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function gr(t){return{cachedResult:t.cachedResult,arcade:t.arcade?{func:t.arcade.func,context:t.arcade.modules.arcadeUtils.createExecContext(null,{sr:t.arcade.context.spatialReference}),modules:t.arcade.modules}:null}}async function Sr(t,e,i,n){const o=t?.expression;if(typeof o!="string")return null;const a=Or(o);if(a!=null)return{cachedResult:a};const s=await zo();Co(i);const r=s.arcadeUtils,l=r.createSyntaxTree(o);return r.dependsOnView(l)?(n?.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:r.createFunction(l),context:r.createExecContext(null,{sr:e}),modules:s}}}function br(t,e,i){return t.arcadeUtils.createFeature(e.attributes,e.geometry,i)}function xr(t,e){if(t!=null&&!Ln(t)){if(!e||!t.arcade)return void vr().errorOncePerTick("Arcade support required but not provided");const i=e;i._geometry&&(i._geometry=Ca(i._geometry)),t.arcade.modules.arcadeUtils.updateExecContext(t.arcade.context,e)}}function yr(t){if(t!=null){if(Ln(t))return t.cachedResult;const e=t.arcade;let i=e?.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof i!="number"&&(t.cachedResult=0,i=0),i}return 0}function wr(t,e=!1){let i=t?.featureExpressionInfo;const n=i?.expression;return e||n==="0"||(i=null),i??null}const Pr={cachedResult:0};function Ln(t){return t.cachedResult!=null}function Or(t){return t==="0"?0:null}let _r=class Kn{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.mode=null,this.centerInElevationSR=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=Ao(e)}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,i){const n=this.calculateOffsetRenderUnits(i);return this.featureExpressionInfoContext!=null?n:e+n}calculateOffsetRenderUnits(e){let i=this._meterUnitOffset;const n=this.featureExpressionInfoContext;return n!=null&&(i+=yr(n)*this._metersPerElevationInfoUnit),i/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=To(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}setFeatureExpressionInfoContext(e){this._featureExpressionInfoContext=e}updateFeatureExpressionInfoContextForGraphic(e,i,n){e.arcade?(this._featureExpressionInfoContext=gr(e),this.updateFeatureExpressionFeature(i,n)):this._featureExpressionInfoContext=e}updateFeatureExpressionFeature(e,i){const n=this.featureExpressionInfoContext;n?.arcade&&(n.cachedResult=void 0,xr(this._featureExpressionInfoContext,e.geometry?br(n.arcade.modules,e,i):null))}static fromElevationInfo(e){const i=new Kn;return e!=null&&i.setFromElevationInfo(e),i}};const Mn=.5;function jn(t,e){t.include(Lt),t.attributes.add("position","vec3"),t.attributes.add("normal","vec3"),t.attributes.add("centerOffsetAndDistance","vec4");const i=t.vertex;Ei(i,e),Mt(i,e),i.uniforms.add(new vt("viewport",n=>n.camera.fullViewport),new oe("polygonOffset",n=>n.shaderPolygonOffset),new Ie("aboveGround",n=>n.camera.aboveGround?1:-1)),e.hasVerticalOffset&&oa(i),i.code.add(d`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),i.code.add(d`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${e.terrainDepthTest?d.float(0):d`sign(pointGroundDistance)`};
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
  `),e.draped&&!e.hasVerticalOffset||aa(i),e.draped||(i.uniforms.add(new Ie("perDistancePixelRatio",n=>Math.tan(n.camera.fovY/2)/(n.camera.fullViewport[2]/2))),i.code.add(d`
      void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
        float distanceToCamera = length(posView);

        // Compute offset in world units for a half pixel shift
        float pixelOffset = distanceToCamera * perDistancePixelRatio * ${d.float(Mn)};

        // Apply offset along normal in the direction away from the ground surface
        vec3 modelOffset = normalModel * aboveGround * pixelOffset;

        // Apply the same offset also on the view space position
        vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

        posModel += modelOffset;
        posView += viewOffset;
      }
    `)),e.screenCenterOffsetUnitsEnabled&&it(i),e.hasScreenSizePerspective&&Ji(i),i.code.add(d`
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

      ${e.hasVerticalOffset?d`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled?"":d`
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
  `)}function At(t){t.uniforms.add(new sa("alignPixelEnabled",e=>e.alignPixelEnabled)),t.code.add(d`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),t.code.add(d`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}function zr(t,e){const{vertex:i,fragment:n}=t;t.include(Ri,e),i.include(At),i.main.add(d`vec4 posProjCenter;
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
gl_PointSize = 1.0;`),n.main.add(d`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}function Wn(t){t.vertex.uniforms.add(new Ie("renderTransparentlyOccludedHUD",e=>e.hudRenderStyle===0?1:e.hudRenderStyle===1?0:.75),new vt("viewport",e=>e.camera.fullViewport),new $t("hudVisibilityTexture",e=>e.hudVisibility?.getTexture())),t.vertex.include(At),t.vertex.code.add(d`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function In(t){const e=new Ki;if(e.include(jn,t),e.vertex.include(ra,t),t.occlusionPass)return e.include(zr,t),e;const{output:i,oitPass:n,hasOcclusionTexture:o,signedDistanceFieldEnabled:a,useVisibilityPixel:s,pixelSnappingEnabled:r,hasEmission:l,hasScreenSizePerspective:p,debugDrawLabelBorder:c,hasVVSize:u,hasVVColor:g,hasRotation:v,occludedFragmentFade:y,sampleSignedDistanceFieldTexelCenter:b}=t;e.include(Lt),e.include(Di,t),e.include(Vi,t),s&&e.include(Wn);const{vertex:m,fragment:x}=e;x.include(Fi),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2");const f=i===8,w=f&&s;w&&e.varyings.add("voccluded","float"),m.uniforms.add(new vt("viewport",S=>S.camera.fullViewport),new Wt("screenOffset",(S,L)=>Me(Tt,2*S.screenOffset[0]*L.camera.pixelRatio,2*S.screenOffset[1]*L.camera.pixelRatio)),new Wt("anchorPosition",S=>rt(S)),new $e("materialColor",({color:S})=>S),new oe("materialRotation",S=>S.rotation),new jt("tex",S=>S.texture)),it(m),a&&(m.uniforms.add(new $e("outlineColor",S=>S.outlineColor)),x.uniforms.add(new $e("outlineColor",S=>$n(S)?S.outlineColor:fi),new oe("outlineSize",S=>$n(S)?S.outlineSize:0))),r&&m.include(At),p&&(Ai(m),Ji(m)),c&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add("uv0","vec2"),e.attributes.add("uvi","vec4"),e.attributes.add("color","vec4"),e.attributes.add("size","vec2"),e.attributes.add("rotation","float"),(u||g)&&e.attributes.add("featureAttribute","vec4"),m.main.add(d`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${qt};
      return;
    }

    vec2 inputSize;
    ${F(p,d`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,d`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${F(u,d`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${F(s,d`
        bool visible = testHUDVisibility(posProj);
        if (!visible) {
          vtc = vec2(0.0);
          ${F(c,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
          return;
        }
      `)}
    ${F(w,d`voccluded = visible ? 0.0 : 1.0;`)}
  `);const C=d`
    vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0));
    vec2 texSize = vec2(textureSize(tex, 0));
    uv = mix(vec2(1.0), uv / texSize, lessThan(uv, vec2(${Tr})));
    quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

    ${F(v,d`
        float angle = radians(materialRotation + rotation);
        float cosAngle = cos(angle);
        float sinAngle = sin(angle);
        mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

        quadOffset.xy = rotate * quadOffset.xy;
      `)}

    quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,h=r?a?d`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:d`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:d`posProj += quadOffset;`;m.main.add(d`
    ${C}
    ${g?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color * materialColor;"}

    ${F(i===9,d`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${d.float(ae)};
    ${F(a,`alphaDiscard = alphaDiscard && outlineColor.a < ${d.float(ae)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${h}
      gl_Position = posProj;
    }

    vtc = uv;

    ${F(c,d`debugBorderCoords = vec4(uv0, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),x.uniforms.add(new jt("tex",S=>S.texture)),y&&!f&&(x.include(la),x.uniforms.add(new $t("depthMap",S=>S.mainDepth),new oe("occludedOpacity",S=>S.occludedFragmentOpacity?.value??1))),o&&x.uniforms.add(new $t("texOcclusion",S=>S.hudOcclusion?.attachment));const _=c?d`(isBorder > 0.0 ? 0.0 : ${d.float(ae)})`:d.float(ae),P=d`
    ${F(c,d`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${F(b,d`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${a?d`
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
          outlineAlphaFactor + fillAlphaFactor < ${_} ||
          fillPixelColor.a + outlinePixelColor.a < ${d.float(ae)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
                              vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${F(!f,d`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${_}) {
          discard;
        }

        ${F(!f,d`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:d`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${_}) {
            discard;
          }
          ${F(!f,d`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${F(y&&!f,d`
        float zSample = -linearizeDepth(texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x);
        float zFragment = -linearizeDepth(gl_FragCoord.z);
        if (zSample < ${d.float(1-Ar)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `)}
    ${F(o,d`fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;`)}

    ${F(!f&&c,d`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}

    ${F(n===2,d`
    if (fragColor.a < ${d.float(ae)}) {
      discard;
    }`)}
  `;switch(i){case 0:e.outputs.add("fragColor","vec4",0),l&&e.outputs.add("fragEmission","vec4",1),n===1&&e.outputs.add("fragAlpha","float",l?2:1),x.main.add(d`
        ${P}
        // Unlike other materials, the fragment shader outputs premultiplied colors.
        // Disable this for front face rendering for correct OIT compositing.
        ${F(n===2,d`fragColor.rgb /= fragColor.a;`)}
        ${F(l,d`fragEmission = vec4(0.0);`)}
        ${F(n===1,d`fragAlpha = fragColor.a;`)}`);break;case 9:x.main.add(d`
        ${P}
        outputObjectAndLayerIdColor();`);break;case 8:e.include(ca,t),x.main.add(d`
        ${P}
        outputHighlight(${F(w,d`voccluded == 1.0`,d`false`)});`)}return e}function $n(t){return t.outlineColor[3]>0&&t.outlineSize>0}function rt(t){return t.textureIsSignedDistanceField?Cr(t.anchorPosition,t.distanceFieldBoundingBox,Tt):gi(Tt,t.anchorPosition),Tt}const Tt=je();function Cr(t,e,i){Me(i,t[0]*(e[2]-e[0])+e[0],t[1]*(e[3]-e[1])+e[1])}const Ar=.08,lt=32e3,Tr=d.float(lt),Dr=Object.freeze(Object.defineProperty({__proto__:null,build:In,calculateAnchorPosition:rt,fullUV:lt},Symbol.toStringTag,{value:"Module"}));let ri=class extends Li{constructor(t,e){super(t,e,Bt(Un).concat(Bt(Bn()))),this.shader=new Mi(Dr,()=>import("./HUDMaterial.glsl-iWcNcRzo.js").then(i=>i.H)),this.primitiveType=e.occlusionPass?bt.POINTS:bt.TRIANGLE_STRIP}initializePipeline(t){const{oitPass:e,hasEmission:i,hasPolygonOffset:n,draped:o,output:a,depthTestEnabled:s,occlusionPass:r}=t,l=s&&!o&&e!==1&&!r&&a!==8;return nt({blending:Ae(a)?Ii(e,!0):null,depthTest:s&&!o?{func:515}:null,depthWrite:l?Oa:null,drawBuffers:$i(e,i),colorWrite:xt,polygonOffset:n?Vr:null})}};ri=A([mi("esri.views.3d.webgl-engine.shaders.HUDMaterialTechnique")],ri);const Vr={factor:0,units:-4},Un=kt().vec2u8("uv0",{glNormalized:!0}),kn=kt().vec3f("position").vec3f("normal").vec4i16("uvi").vec4u8("color",{glNormalized:!0}).vec2f("size").f32("rotation").vec4f("centerOffsetAndDistance").vec4f("featureAttribute"),Rr=kn.clone().vec4u8("olidColor");function Bn(){return It()?Rr:kn}class I extends Bi{constructor(e,i){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.useVisibilityPixel=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.hasOcclusionTexture=!1,this.isFocused=!0,this.olidColorInstanced=!1,this.textureCoordinateType=0,this.emissionSource=0,this.discardInvisibleFragments=!0,this.hasVVInstancing=!1,this.snowCover=!1,this.transparentOccluded=i}}A([D()],I.prototype,"transparentOccluded",void 0),A([D()],I.prototype,"screenCenterOffsetUnitsEnabled",void 0),A([D()],I.prototype,"useVisibilityPixel",void 0),A([D()],I.prototype,"signedDistanceFieldEnabled",void 0),A([D()],I.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),A([D()],I.prototype,"hasVVSize",void 0),A([D()],I.prototype,"hasVVColor",void 0),A([D()],I.prototype,"hasVerticalOffset",void 0),A([D()],I.prototype,"hasScreenSizePerspective",void 0),A([D()],I.prototype,"hasRotation",void 0),A([D()],I.prototype,"debugDrawLabelBorder",void 0),A([D()],I.prototype,"hasPolygonOffset",void 0),A([D()],I.prototype,"depthTestEnabled",void 0),A([D()],I.prototype,"pixelSnappingEnabled",void 0),A([D()],I.prototype,"draped",void 0),A([D()],I.prototype,"terrainDepthTest",void 0),A([D()],I.prototype,"cullAboveTerrain",void 0),A([D()],I.prototype,"occlusionPass",void 0),A([D()],I.prototype,"occludedFragmentFade",void 0),A([D()],I.prototype,"hasOcclusionTexture",void 0),A([D()],I.prototype,"isFocused",void 0);class Er extends Ni{constructor(e,i,n=!1){super(e,$r),this.produces=new Map([[14,o=>St(o)&&!this.parameters.drawAsLabel&&!this._configuration.transparentOccluded],[15,o=>St(o)&&!this.parameters.drawAsLabel&&this._configuration.transparentOccluded],[16,o=>St(o)&&this.parameters.drawAsLabel],[13,()=>this.parameters.useVisibilityPixel],[20,o=>this.parameters.draped&&St(o)]]),this._visible=!0,this._configuration=new I(i,n)}getConfiguration(e,i){const n=this.parameters.draped;return super.getConfiguration(e,i,this._configuration),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=n,this._configuration.useVisibilityPixel=this.parameters.useVisibilityPixel,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.hasVVSize=!!this.parameters.vvSize,this._configuration.hasVVColor=!!this.parameters.vvColor,this._configuration.occlusionPass=i.slot===13,this._configuration.occludedFragmentFade=!n&&!!this.parameters.occludedFragmentOpacity,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||i.slot===13,Ae(e)&&(this._configuration.debugDrawLabelBorder=!!da.LABELS_SHOW_BORDER),this._configuration.terrainDepthTest=i.terrainDepthTest,this._configuration.cullAboveTerrain=i.cullAboveTerrain,this._configuration.hasOcclusionTexture=this._configuration.transparentOccluded&&i.oitPass!==0,this._configuration}intersect(e,i,n,o,a,s){const{options:{selectionMode:r,hud:l,excludeLabels:p},point:c,camera:u}=n,{parameters:g}=this;if(!r||!l||p&&g.isLabel||!e.visible||!c||!u)return;const v=e.attributes.get("featureAttribute"),y=v==null?null:Pi(v.data,Xn),{scaleX:b,scaleY:m}=Qn(y,g,u.pixelRatio),x=e.attributes.get("position"),f=e.attributes.get("size"),w=e.attributes.get("normal"),C=e.attributes.get("rotation"),h=e.attributes.get("centerOffsetAndDistance");Ut(x.size>=3);const _=rt(g),P=this.parameters.centerOffsetUnits==="screen";for(let S=0;S<x.data.length/x.size;S++){const L=S*x.size;J(q,x.data[L],x.data[L+1],x.data[L+2]),ie(q,q,i),ie(q,q,u.viewMatrix);const O=S*h.size;if(J(me,h.data[O],h.data[O+1],h.data[O+2]),!P&&(q[0]+=me[0],q[1]+=me[1],me[2]!==0)){const Z=me[2];Y(me,q),ne(q,q,H(me,me,Z))}const V=S*w.size;J(Ee,w.data[V],w.data[V+1],w.data[V+2]),Oi(Ee,Ee,_i(Jn,i));const{normal:M,cosAngle:$}=Nn(Ee,u,Yn),ze=Zn(this.parameters,q,$,u,li);if(Ft(q,q,M,ze),u.applyProjection(q,K),K[0]>-1){P&&(me[0]||me[1])&&(K[0]+=me[0]*u.pixelRatio,me[1]!==0&&(K[1]+=li.alignmentEvaluator.apply(me[1])*u.pixelRatio),u.unapplyProjection(K,q)),K[0]+=this.parameters.screenOffset[0]*u.pixelRatio,K[1]+=this.parameters.screenOffset[1]*u.pixelRatio,K[0]=Math.floor(K[0]),K[1]=Math.floor(K[1]);const Z=S*f.size;pe[0]=f.data[Z],pe[1]=f.data[Z+1],li.evaluator.applyVec2(pe,pe);const Oe=jr*u.pixelRatio;let Fe=0;g.textureIsSignedDistanceField&&(Fe=Math.min(g.outlineSize,.5*pe[0])*u.pixelRatio/2),pe[0]*=b,pe[1]*=m;const z=S*C.size,ye=g.rotation+C.data[z];if(Hn(c,K[0],K[1],pe,Oe,Fe,ye,g,_)){const ee=n.ray;if(ie(Gn,q,hi(Mr,u.viewMatrix)),K[0]=c[0],K[1]=c[1],u.unprojectFromRenderScreen(K,q)){const te=R();B(te,ee.direction);const E=1/et(te);H(te,te,E),s(Je(ee.origin,q)*E,te,-1,Gn)}}}}}intersectDraped(e,i,n,o,a){const s=e.attributes.get("position"),r=e.attributes.get("size"),l=e.attributes.get("rotation"),p=this.parameters,c=rt(p),u=e.attributes.get("featureAttribute"),g=u==null?null:Pi(u.data,Xn),{scaleX:v,scaleY:y}=Qn(g,p,e.screenToWorldRatio),b=Wr*e.screenToWorldRatio;for(let m=0;m<s.data.length/s.size;m++){const x=m*s.size,f=s.data[x],w=s.data[x+1],C=m*r.size;pe[0]=r.data[C],pe[1]=r.data[C+1];let h=0;p.textureIsSignedDistanceField&&(h=Math.min(p.outlineSize,.5*pe[0])*e.screenToWorldRatio/2),pe[0]*=v,pe[1]*=y;const _=m*l.size,P=p.rotation+l.data[_];Hn(n,f,w,pe,b,h,P,p,c)&&o(a.distance,a.normal,-1)}}createBufferWriter(){return new Ur}applyShaderOffsets(e,i,n,o,a,s,r){Oi(ci,n,_i(Jn,o));const l=Nn(ci,s,Yn),p=kr(et(i),s),c=Zn(this.parameters,i,l.cosAngle,s,r);Ft(i,i,l.normal,c+p),Ft(e,e,ci,c+p);const u=a[3]+c;this._applyPolygonOffsetView(i,l,u,s,i),this._applyCenterOffsetView(i,a,i)}applyShaderOffsetsNDC(e,i,n,o,a){return this._applyCenterOffsetNDC(e,i,n,o),a!=null&&B(a,o),this._applyPolygonOffsetNDC(o,i,n,o),o}_applyPolygonOffsetView(e,i,n,o,a){const s=o.aboveGround?1:-1;let r=Math.sign(n);r===0&&(r=s);const l=s*r;if(this.parameters.shaderPolygonOffset<=0)return B(a,e);const p=ft(Math.abs(i.cosAngle),.01,1),c=1-Math.sqrt(1-p*p)/p/o.viewport[2];return H(a,e,l>0?c:1/c),a}_applyCenterOffsetView(e,i,n){const o=this.parameters.centerOffsetUnits!=="screen";return n!==e&&B(n,e),o&&(n[0]+=i[0],n[1]+=i[1],i[2]&&(Y(Ee,n),Vo(n,n,H(Ee,Ee,i[2])))),n}_applyCenterOffsetNDC(e,i,n,o){const a=this.parameters.centerOffsetUnits!=="screen";return o!==e&&B(o,e),a||(o[0]+=i[0]/n.fullWidth*2,o[1]+=i[1]/n.fullHeight*2),o}_applyPolygonOffsetNDC(e,i,n,o){const a=this.parameters.shaderPolygonOffset;if(e!==o&&B(o,e),a){const s=n.aboveGround?1:-1,r=s*Math.sign(i[3]);o[2]-=(r||s)*a}return o}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:i,outlineColor:n}=this.parameters,o=e[3]>=ae||i>=ae&&n[3]>=ae;return this._visible&&o}createGLMaterial(e){return new Fr(e)}calculateRelativeScreenBounds(e,i,n=Ro()){return Lr(this.parameters,e,i,n),n[2]=n[0]+e[0],n[3]=n[1]+e[1],n}}class Fr extends xa{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(ri,e)}}function Lr(t,e,i,n){n[0]=t.anchorPosition[0]*-e[0]+t.screenOffset[0]*i,n[1]=t.anchorPosition[1]*-e[1]+t.screenOffset[1]*i}function Nn(t,e,i){return ie(i.normal,t,e.viewInverseTransposeMatrix),i.cosAngle=Ke(i.normal,Ir),i}function Hn(t,e,i,n,o,a,s,r,l){let p=e-o-n[0]*l[0],c=p+n[0]+2*o,u=i-o-n[1]*l[1],g=u+n[1]+2*o;const v=r.distanceFieldBoundingBox;return r.textureIsSignedDistanceField&&v!=null&&(p+=n[0]*v[0],u+=n[1]*v[1],c-=n[0]*(1-v[2]),g-=n[1]*(1-v[3]),p-=a,c+=a,u-=a,g+=a),Me(qn,e,i),Eo(ct,t,qn,Fo(s)),ct[0]>p&&ct[0]<c&&ct[1]>u&&ct[1]<g}const li=new pa,q=R(),Ee=R(),K=Ye(),ci=R(),Gn=R(),ct=je(),qn=je(),Jn=Do(),Mr=Le(),me=R(),di=R(),Xn=Ye(),Yn={normal:R(),cosAngle:0},jr=1,Wr=2,pe=zi(0,0),Ir=Xe(0,0,1);class $r extends ua{constructor(){super(...arguments),this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=!1,this.color=Ci(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=zi(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=Ci(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=Ye(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.useVisibilityPixel=!0,this.occludedVisibilityMode="hidden",this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.draped=!1,this.isLabel=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}}class Ur{constructor(){this.layout=Bn(),this.baseInstanceLayout=Un}elementCount(e){return e.get("position").indices.length}elementCountBaseInstance(e){return e.get("uv0").indices.length}write(e,i,n,o,a,s){const{position:r,normal:l,color:p,size:c,rotation:u,centerOffsetAndDistance:g,featureAttribute:v,uvi:y}=a;ma(n.get("position"),e,r,s),va(n.get("normal"),i,l,s);const b=n.get("position").indices.length;let m=0,x=0,f=lt,w=lt;const C=n.get("uvi")?.data;C&&C.length>=4&&(m=C[0],x=C[1],f=C[2],w=C[3]);for(let h=0;h<b;++h){const _=s+h;y.setValues(_,m,x,f,w)}if(ga(n.get("color"),4,p,s),Xi(n.get("size"),c,s),Sa(n.get("rotation"),u,s),n.get("centerOffsetAndDistance")?Yi(n.get("centerOffsetAndDistance"),g,s):Qi(g,s,b),n.get("featureAttribute")?Yi(n.get("featureAttribute"),v,s):Qi(v,s,b),o!=null){const h=n.get("position")?.indices;if(h){const _=h.length,P=a.getField("olidColor",wa);ba(o,P,_,s)}}return{numVerticesPerItem:1,numItems:b}}writeBaseInstance(e,i){const{uv0:n}=i;Xi(e.get("uv0"),n,0)}}function Qn(t,e,i){return t==null||e.vvSize==null?{scaleX:i,scaleY:i}:(ha(di,e,t),{scaleX:di[0]*i,scaleY:di[1]*i})}function kr(t,e){const i=e.computeRenderPixelSizeAtDist(t)*Mn;return(e.aboveGround?1:-1)*i}function Zn(t,e,i,n,o){if(!t.verticalOffset?.screenLength){const l=et(e);return o.update(i,l,t.screenSizePerspective,t.screenSizePerspectiveMinPixelReferenceSize,t.screenSizePerspectiveAlignment,null),0}const a=et(e),s=t.screenSizePerspectiveAlignment??t.screenSizePerspective,r=fa(n,a,t.verticalOffset,i,s,t.screenSizePerspectiveMinPixelReferenceSize);return o.update(i,a,t.screenSizePerspective,t.screenSizePerspectiveMinPixelReferenceSize,t.screenSizePerspectiveAlignment,null),r}export{st as $,ar as A,sr as B,nn as C,rr as D,Ls as E,rt as F,pn as G,vn as H,hn as I,qt as J,Gt as K,wt as L,Zs as M,mn as N,In as O,Ya as P,Is as Q,$a as R,fs as S,Da as T,lt as U,On as V,ai as W,Ia as X,xn as Y,Ns as Z,ps as _,qs as a,Ks as a0,er as a1,Qs as a2,Tn as a3,Ht as b,wr as c,ln as d,Sr as e,si as f,Fn as g,tr as h,Xs as i,ot as j,Hs as k,nr as l,ir as m,Pr as n,_r as o,En as p,lr as q,Bs as r,At as s,Er as t,or as u,jn as v,Ys as w,on as x,Wn as y,gn as z};
