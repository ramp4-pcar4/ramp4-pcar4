import{am as Pe,a9 as x,d4 as qt,Y as nt,fG as Xt,d5 as Qt,x as S,bp as we,n as at,l_ as ne,eU as Kt,c3 as ei,X as ti}from"./main-DnzmeE4U.js";import{I as ii,E as V,p as Ne,o as B,u as be,H as ri,s as Y,c as pe,P as st,g as Ue,r as ni}from"./vec32-BuqRmYBM.js";import{s as ai,n as si,N as oi,r as li}from"./vec4f64-CjUMzAyX.js";import{o as ze}from"./projection-m8vi7Cxv.js";import{t as ci}from"./orientedBoundingBox-CTsjUkMw.js";import{b1 as ot,e as Fe,b2 as di,b3 as pi,at as T,av as lt,R as ct,au as dt,c as q,ah as Oe,b4 as pt,J as hi,d as ui,g as je,w as We,K as fi,ae as Me,r as mi,P as vi,af as gi,b as Si,aE as Ti,a0 as _i,o as bi,L as Oi,ag as yi,a9 as Ei,G as he,Y as Ai,Z as Ri,ak as ht,al as xi,am as Ci,an as Di,ao as Li,ap as ut,aq as ft,ar as Ii,b5 as Pi,b6 as mt,b7 as wi,b8 as Ni,b9 as Ui,ba as zi,A as k,aw as Fi,aj as ae,aD as Ve,aM as ji,aN as Wi,f as Mi}from"./VerticalOffset.glsl-BtVaDxLq.js";import{n as Be,c as vt,H as Vi}from"./mat4-BFStKTjU.js";import{o as Bi,e as ye}from"./mat4f64-BaJwL7tQ.js";import{U as gt,E as ki}from"./sphere-Cj20syUS.js";import{m as Gi,M as Ee,p as Ae,V as G,O as St}from"./plane-B_adY3_o.js";import{t as Hi,B as Re,g as ke,c as Tt}from"./renderState-DlSSrLcZ.js";import{s as Ji,m as Zi,H as $i}from"./InterleavedLayout-DcHoXu73.js";import{E as Yi,e as h}from"./VertexAttribute-DFC3a3eR.js";import{t as _t,f as qi,r as Xi,d as Qi}from"./HUDVisibility.glsl-Bl7zdrV0.js";import{b as Ki,j as xe}from"./Octree-Kk-G5P_T.js";import{r as er}from"./vec2-BnynUbeJ.js";import{v as bt,M as tr,b as Ge,B as ir}from"./lineSegment-BJNfNZM5.js";import{n as se,u as ue,i as rr,S as nr,C as Ot,e as ar}from"./ShaderOutput-C_OqLoo1.js";import{E as yt,f as Ce}from"./enums-DBi1-Mm2.js";import{m as sr}from"./computeTranslationToOriginAndRotation-DwwrTl3S.js";import{n as or,e as lr}from"./ElevationInfo-DkWlof50.js";import{u as cr}from"./hydratedFeatures-BDT5zTGB.js";import{n as p,t as dr}from"./glsl-o28TenZV.js";import"./BindType-CKbZk6AG.js";import"./floatRGBA-YJlz5IlR.js";import"./Texture-DXSFJsEu.js";import{s as pr}from"./vec42-D8CJyqHG.js";import"./vec2f64-CEUyUoff.js";import{i as hr}from"./ShaderBuilder-BkQM64Qp.js";class ur{constructor(t,i=null,r=0){this.array=t,this.spatialReference=i,this.offset=r}}function Et(e){return"array"in e}function fe(e,t,i="ground"){if(_t(t))return e.getElevation(t.x,t.y,t.z||0,t.spatialReference,i);if(Et(t)){let r=t.offset;return e.getElevation(t.array[r++],t.array[r++],t.array[r]||0,t.spatialReference??e.spatialReference,i)}return e.getElevation(t[0],t[1],t[2]||0,e.spatialReference,i)}let At=class extends ot{get geometries(){return this._geometries}get transformation(){return this._transformation??Bi}set transformation(e){this._transformation=Be(this._transformation??ye(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?Be(this._shaderTransformation??ye(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}constructor(e={}){super(),this.type=Fe.Object,this._shaderTransformation=null,this._parentLayer=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerUid=e.layerUid,e.isElevationSource&&(this.lastValidElevationBB=new Rt),this._geometries=e.geometries?Array.from(e.geometries):new Array}dispose(){this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(e){Ji(this._parentLayer==null||e==null,"Object3D can only be added to a single Layer"),this._parentLayer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e),this._emit("geometryAdded",{object:this,geometry:e}),this._invalidateBoundingVolume()}removeGeometry(e){const t=this._geometries.splice(e,1)[0];t&&(this._emit("geometryRemoved",{object:this,geometry:t}),this._invalidateBoundingVolume())}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,t,i=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:t,sync:i}),Yi(t)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const t of this._geometries)t.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new di;for(const t of this._geometries)t.occludees=qi(t.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const t of this._geometries)t.occludees=Xi(t.occludees,e);this._emit("occlusionChanged",this)}highlight(e){const t=new pi(e);for(const i of this._geometries)i.addHighlight(t);return this._emit("highlightChanged",this),t}removeHighlight(e){for(const t of this._geometries)t.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===Hi.Highlight?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,t){return vt(t,this.transformation,e.transformation)}getCombinedShaderTransformation(e,t=ye()){return vt(t,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new xt,this._validateBoundingVolume(this._bvWorldSpace,me.WorldSpace)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new xt,this._validateBoundingVolume(this._bvObjectSpace,me.ObjectSpace)),this._bvObjectSpace}_validateBoundingVolume(e,t){const i=t===me.ObjectSpace;for(const r of this._geometries){const n=r.boundingInfo;n&&fr(n,e,i?r.transformation:this.getCombinedShaderTransformation(r))}ii(gt(e.bounds),e.min,e.max,.5);for(const r of this._geometries){const n=r.boundingInfo;if(n==null)continue;const a=i?r.transformation:this.getCombinedShaderTransformation(r),l=Gi(a);V(Ct,n.center,a);const o=Ne(Ct,gt(e.bounds)),s=n.radius*l;e.bounds[3]=Math.max(e.bounds[3],o+s)}}_invalidateBoundingVolume(){const e=this._bvWorldSpace?.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this._parentLayer&&e&&this._parentLayer.notifyObjectBBChanged(this,e)}_emit(e,t){this._parentLayer&&this._parentLayer.events.emit(e,t)}get test(){}};class Rt{constructor(){this.min=Pe(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=Pe(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class xt extends Rt{constructor(){super(...arguments),this.bounds=ki()}}function fr(e,t,i){const r=e.bbMin,n=e.bbMax;if(Vi(i)){const a=B(mr,i[12],i[13],i[14]);be(j,r,a),be(W,n,a);for(let l=0;l<3;++l)t.min[l]=Math.min(t.min[l],j[l]),t.max[l]=Math.max(t.max[l],W[l])}else if(V(j,r,i),ri(r,n))for(let a=0;a<3;++a)t.min[a]=Math.min(t.min[a],j[a]),t.max[a]=Math.max(t.max[a],j[a]);else{V(W,n,i);for(let a=0;a<3;++a)t.min[a]=Math.min(t.min[a],j[a],W[a]),t.max[a]=Math.max(t.max[a],j[a],W[a]);for(let a=0;a<3;++a){Y(j,r),Y(W,n),j[a]=n[a],W[a]=r[a],V(j,j,i),V(W,W,i);for(let l=0;l<3;++l)t.min[l]=Math.min(t.min[l],j[l],W[l]),t.max[l]=Math.max(t.max[l],j[l],W[l])}}}const mr=x(),j=x(),W=x(),Ct=x();var me;(function(e){e[e.WorldSpace=0]="WorldSpace",e[e.ObjectSpace=1]="ObjectSpace"})(me||(me={}));var ve;(function(e){e[e.ASYNC=0]="ASYNC",e[e.SYNC=1]="SYNC"})(ve||(ve={}));const vr=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];let Dt=class extends ot{constructor(e,t,i=""){super(),this.stage=e,this.apiLayerUid=i,this.type=Fe.Layer,this.events=new qt,this.visible=!0,this.sliceable=!1,this._objectsAdded=new nt,this._handles=new Xt,this._objects=new nt,this._pickable=!0,this.visible=t?.visible??!0,this._pickable=t?.pickable??!0,this.updatePolicy=t?.updatePolicy??ve.ASYNC,this._disableOctree=t?.disableOctree??!1,e.add(this);for(const r of vr)this._handles.add(this.events.on(r,n=>e.handleEvent(r,n)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.remove(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.push(e),e.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:e}),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.removeUnordered(e)&&(e.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:e}),this._octree!=null&&(this._objectsAdded.removeUnordered(e)||this._octree.remove([e])))}addMany(e){this._objects.pushArray(e);for(const t of e)t.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:e}),this._octree!=null&&this._objectsAdded.pushArray(e)}removeMany(e){const t=new Array;if(this._objects.removeUnorderedMany(e,e.length,t),t.length!==0){for(const i of t)i.parentLayer=null;if(this.events.emit("layerObjectsRemoved",{layer:this,objects:t}),this._octree!=null){for(let i=0;i<t.length;)this._objectsAdded.removeUnordered(t[i])?(t[i]=t[t.length-1],t.length-=1):++i;this._octree.remove(t)}}}sync(){this.updatePolicy!==ve.SYNC&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,t){this._octree==null||this._objectsAdded.includes(e)||this._octree.update(e,t)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.length>50&&!this._disableOctree?(this._octree=new Ki(e=>e.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.data,this._objects.length)):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded.data,this._objectsAdded.length),this._objectsAdded.clear()),this._octree}invalidateSpatialQueryAccelerator(){this._octree=Qt(this._octree),this._objectsAdded.clear()}};var X,oe;(function(e){e[e.Draped=0]="Draped",e[e.Screen=1]="Screen",e[e.World=2]="World",e[e.COUNT=3]="COUNT"})(X||(X={})),function(e){e[e.Center=0]="Center",e[e.Tip=1]="Tip",e[e.COUNT=2]="COUNT"}(oe||(oe={}));let z=class extends lt{constructor(){super(...arguments),this.space=X.Screen,this.anchor=oe.Center,this.occluder=!1,this.writeDepth=!1,this.hideOnShortSegments=!1,this.hasCap=!1,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.textureCoordinateType=ct.None,this.emissionSource=dt.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0,this.objectAndLayerIdColorInstanced=!1}get draped(){return this.space===X.Draped}};S([T({count:X.COUNT})],z.prototype,"space",void 0),S([T({count:oe.COUNT})],z.prototype,"anchor",void 0),S([T()],z.prototype,"occluder",void 0),S([T()],z.prototype,"writeDepth",void 0),S([T()],z.prototype,"hideOnShortSegments",void 0),S([T()],z.prototype,"hasCap",void 0),S([T()],z.prototype,"hasTip",void 0),S([T()],z.prototype,"vvSize",void 0),S([T()],z.prototype,"vvColor",void 0),S([T()],z.prototype,"vvOpacity",void 0),S([T()],z.prototype,"hasOccludees",void 0),S([T()],z.prototype,"terrainDepthTest",void 0),S([T()],z.prototype,"cullAboveTerrain",void 0);const Lt=8;function It(e,t){const i=e.vertex;i.uniforms.add(new q("intrinsicWidth",r=>r.width)),t.vvSize?(e.attributes.add(h.SIZEFEATUREATTRIBUTE,"float"),i.uniforms.add(new Oe("vvSizeMinSize",r=>r.vvSize.minSize),new Oe("vvSizeMaxSize",r=>r.vvSize.maxSize),new Oe("vvSizeOffset",r=>r.vvSize.offset),new Oe("vvSizeFactor",r=>r.vvSize.factor)),i.code.add(p`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(e.attributes.add(h.SIZE,"float"),i.code.add(p`float getSize(){
return intrinsicWidth * size;
}`)),t.vvOpacity?(e.attributes.add(h.OPACITYFEATUREATTRIBUTE,"float"),i.constants.add("vvOpacityNumber","int",8),i.uniforms.add(new pt("vvOpacityValues",r=>r.vvOpacity.values,Lt),new pt("vvOpacityOpacities",r=>r.vvOpacity.opacityValues,Lt)),i.code.add(p`float interpolateOpacity( float value ){
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
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):i.code.add(p`vec4 applyOpacity( vec4 color ){
return color;
}`),t.vvColor?(e.include(hi,t),e.attributes.add(h.COLORFEATUREATTRIBUTE,"float"),i.code.add(p`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(e.attributes.add(h.COLOR,"vec4"),i.code.add(p`vec4 getColor(){
return applyOpacity(color);
}`))}function Pt(e){return e.pattern.map(t=>Math.round(t*e.pixelRatio))}function gr(e){if(e==null)return 1;const t=Pt(e);return Math.floor(t.reduce((i,r)=>i+r))}function Sr(e){return Pt(e).reduce((t,i)=>Math.max(t,i))}function Tr(e){return e==null?ai:e.length===4?e:pr(_r,e[0],e[1],e[2],1)}const _r=si();function br(e,t){if(!t.stippleEnabled)return void e.fragment.code.add(p`float getStippleAlpha() { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);const i=!(t.draped&&t.stipplePreferContinuous),{vertex:r,fragment:n}=e;n.include(Qi),t.draped||(ui(r,t),r.uniforms.add(new je("worldToScreenPerDistanceRatio",({camera:a})=>1/a.perScreenPixelRatio)).code.add(p`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add("vStippleDistance","float"),e.varyings.add("vStippleDistanceLimits","vec2"),e.varyings.add("vStipplePatternStretch","float"),r.code.add(p`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${p.float(yr)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),r.code.add(p`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),r.code.add(p`
    if (segmentLengthPseudoScreen >= ${i?"patternLength":"1e4"}) {
  `),We(r),r.code.add(p`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),n.uniforms.add(new fi("stipplePatternTexture",a=>a.stippleTexture),new q("stipplePatternSDFNormalizer",a=>Or(a.stipplePattern)),new q("stipplePatternPixelSizeInv",a=>1/wt(a))),t.stippleOffColorEnabled&&n.uniforms.add(new Me("stippleOffColor",a=>Tr(a.stippleOffColor))),n.code.add(p`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgbaTofloat(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`),n.code.add(p`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${dr(!t.stippleOffColorEnabled,"if (stippleAlpha < threshold) { discard; }")}
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${t.stippleOffColorEnabled?"mix(color, stippleOffColor, stippleAlpha)":"vec4(color.rgb, color.a * stippleAlpha)"};
    }
  `)}function Or(e){return e?(Math.floor(.5*(Sr(e)-1))+.5)/e.pixelRatio:1}function wt(e){const t=e.stipplePattern;return t?gr(e.stipplePattern)/t.pixelRatio:1}const yr=.4,He=64,Nt=He/2,Er=Nt/5,Ar=He/Er,Rr=.25;function Ut(e,t){const i=e.vertex;We(i),i.uniforms.get("markerScale")==null&&i.constants.add("markerScale","float",1),i.constants.add("markerSizePerLineWidth","float",Ar).code.add(p`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),t.space===X.World&&(i.constants.add("maxSegmentLengthFraction","float",.45),i.uniforms.add(new je("perRenderPixelRatio",r=>r.camera.perRenderPixelRatio)),i.code.add(p`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}var Q;(function(e){e[e.BUTT=0]="BUTT",e[e.SQUARE=1]="SQUARE",e[e.ROUND=2]="ROUND",e[e.COUNT=3]="COUNT"})(Q||(Q={}));let E=class extends lt{constructor(){super(...arguments),this.capType=Q.BUTT,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.objectAndLayerIdColorInstanced=!1,this.textureCoordinateType=ct.None,this.emissionSource=dt.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0}};S([T({count:Q.COUNT})],E.prototype,"capType",void 0),S([T()],E.prototype,"hasPolygonOffset",void 0),S([T()],E.prototype,"writeDepth",void 0),S([T()],E.prototype,"draped",void 0),S([T()],E.prototype,"stippleEnabled",void 0),S([T()],E.prototype,"stippleOffColorEnabled",void 0),S([T()],E.prototype,"stipplePreferContinuous",void 0),S([T()],E.prototype,"roundJoins",void 0),S([T()],E.prototype,"applyMarkerOffset",void 0),S([T()],E.prototype,"vvSize",void 0),S([T()],E.prototype,"vvColor",void 0),S([T()],E.prototype,"vvOpacity",void 0),S([T()],E.prototype,"falloffEnabled",void 0),S([T()],E.prototype,"innerColorEnabled",void 0),S([T()],E.prototype,"hasOccludees",void 0),S([T()],E.prototype,"occluder",void 0),S([T()],E.prototype,"terrainDepthTest",void 0),S([T()],E.prototype,"cullAboveTerrain",void 0),S([T()],E.prototype,"wireframe",void 0),S([T()],E.prototype,"discardInvisibleFragments",void 0),S([T()],E.prototype,"objectAndLayerIdColorInstanced",void 0);const ge=1;function zt(e){const t=new hr,{attributes:i,varyings:r,vertex:n,fragment:a}=t,{applyMarkerOffset:l,draped:o,output:s,capType:c,stippleEnabled:d,falloffEnabled:v,roundJoins:f,wireframe:u,innerColorEnabled:y}=e;t.include(mi),t.include(It,e),t.include(br,e),t.include(vi,e),t.include(gi,e);const O=l&&!o;O&&(n.uniforms.add(new q("markerScale",m=>m.markerScale)),t.include(Ut,{space:X.World})),Si(n,e),n.uniforms.add(new Ti("inverseProjectionMatrix",m=>m.camera.inverseProjectionMatrix),new _i("nearFar",m=>m.camera.nearFar),new q("miterLimit",m=>m.join!=="miter"?0:m.miterLimit),new bi("viewport",m=>m.camera.fullViewport)),n.constants.add("LARGE_HALF_FLOAT","float",65500),i.add(h.POSITION,"vec3"),i.add(h.PREVPOSITION,"vec3"),i.add(h.NEXTPOSITION,"vec3"),i.add(h.SUBDIVISIONFACTOR,"float"),i.add(h.UV0,"vec2"),r.add("vColor","vec4"),r.add("vpos","vec3"),r.add("vLineDistance","float"),r.add("vLineWidth","float");const C=d;C&&r.add("vLineSizeInv","float");const A=c===Q.ROUND,b=d&&A,U=v||b;U&&r.add("vLineDistanceNorm","float"),A&&(r.add("vSegmentSDF","float"),r.add("vReverseSegmentSDF","float")),n.code.add(p`vec2 perpendicular(vec2 v) {
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
}`),n.code.add(p`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),n.code.add(p`void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
float vnp = nearFar[0] * 0.99;
if(pos.z > -nearFar[0]) {
if (!isStartVertex) {
if(prev.z < -nearFar[0]) {
pos = mix(prev, pos, interp(vnp, prev, pos));
next = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
} else {
if(next.z < -nearFar[0]) {
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
forwardViewPosDepth(pos.xyz);
pos = projectAndScale(pos);
next = projectAndScale(next);
prev = projectAndScale(prev);
}`),We(n),n.constants.add("aaWidth","float",d?0:1).main.add(p`
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${C?p`vLineSizeInv = 1.0 / lineSize;`:""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `),O&&n.main.add(p`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),n.main.add(p`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(d||A)&&n.main.add(p`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${A?p`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),n.main.add(p`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = perpendicular(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),f?n.main.add(p`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = perpendicular(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${d?p`min(1.0, subdivisionFactor * ${p.float((ge+2)/(ge+1))})`:p`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):n.main.add(p`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = perpendicular(joinDisplacementDir);`);const _=c!==Q.BUTT;return n.main.add(p`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${_?p`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),n.main.add(p`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(uv0.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${U?p`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),A&&n.main.add(p`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),d&&(o?n.uniforms.add(new je("worldToScreenRatio",m=>1/m.screenToPCSRatio)):n.main.add(p`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),n.main.add(p`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),o?n.main.add(p`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):n.main.add(p`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),n.uniforms.add(new q("stipplePatternPixelSize",m=>wt(m))),n.main.add(p`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),n.main.add(p`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${u&&!o?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),t.fragment.include(Oi,e),t.include(yi,e),a.include(Ei),a.main.add(p`discardBySlice(vpos);
discardByTerrainDepth();`),u?a.main.add(p`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(A&&a.main.add(p`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${p.float(he)}) {
          discard;
        }
      `),b?a.main.add(p`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${p.float(he)}, stippleCoverage);
      `):a.main.add(p`float stippleAlpha = getStippleAlpha();`),s!==se.ObjectAndLayerIdColor&&a.main.add(p`discardByStippleAlpha(stippleAlpha, ${p.float(he)});`),a.uniforms.add(new Me("intrinsicColor",m=>m.color)),a.main.add(p`vec4 color = intrinsicColor * vColor;`),y&&(a.uniforms.add(new Me("innerColor",m=>m.innerColor??m.color),new q("innerWidth",(m,I)=>m.innerWidth*I.camera.pixelRatio)),a.main.add(p`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),a.main.add(p`vec4 finalColor = blendStipple(color, stippleAlpha);`),v&&(a.uniforms.add(new q("falloff",m=>m.falloff)),a.main.add(p`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),d||a.main.add(p`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`)),a.main.add(p`outputColorHighlightOID(finalColor, vpos);`),t}const xr=Object.freeze(Object.defineProperty({__proto__:null,build:zt,ribbonlineNumRoundJoinSubdivisions:ge},Symbol.toStringTag,{value:"Module"}));let Cr=class extends Ai{constructor(e,t){super(e,t,new Ri(xr,()=>Promise.resolve().then(()=>on)),jt),this.primitiveType=t.wireframe?yt.LINES:yt.TRIANGLE_STRIP}_makePipelineState(e,t){const{oitPass:i,output:r,hasOccludees:n,hasPolygonOffset:a}=e,l=i===ht.NONE,o=i===ht.FrontFace;return Re({blending:ue(r)?xi(i):null,depthTest:{func:Ci(i)},depthWrite:Di(e),drawBuffers:r===se.Depth?{buffers:[Ce.NONE]}:Li(i,r),colorWrite:ke,stencilWrite:n?ut:null,stencilTest:n?t?ft:Ii:null,polygonOffset:l||o?a?Ft:null:Pi})}initializePipeline(e){if(e.occluder){const t=e.hasPolygonOffset?Ft:null;this._occluderPipelineTransparent=Re({blending:Tt,polygonOffset:t,depthTest:mt,depthWrite:null,colorWrite:ke,stencilWrite:null,stencilTest:wi,drawBuffers:e.output===se.Depth?{buffers:[Ce.NONE]}:null}),this._occluderPipelineOpaque=Re({blending:Tt,polygonOffset:t,depthTest:mt,depthWrite:null,colorWrite:ke,stencilWrite:Ni,stencilTest:Ui,drawBuffers:e.output===se.Depth?{buffers:[Ce.NONE]}:null}),this._occluderPipelineMaskWrite=Re({blending:null,polygonOffset:t,depthTest:zi,depthWrite:null,colorWrite:null,stencilWrite:ut,stencilTest:ft,drawBuffers:e.output===se.Depth?{buffers:[Ce.NONE]}:null})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){if(e)return this._occludeePipeline;switch(t){case k.TRANSPARENT_OCCLUDER_MATERIAL:return this._occluderPipelineTransparent??super.getPipeline();case k.OCCLUDER_MATERIAL:return this._occluderPipelineOpaque??super.getPipeline();default:return this._occluderPipelineMaskWrite??super.getPipeline()}}};const Ft={factor:0,units:-4},jt=new Map([[h.POSITION,0],[h.PREVPOSITION,1],[h.NEXTPOSITION,2],[h.SUBDIVISIONFACTOR,3],[h.UV0,4],[h.COLOR,5],[h.COLORFEATUREATTRIBUTE,5],[h.SIZE,6],[h.SIZEFEATUREATTRIBUTE,6],[h.OPACITYFEATUREATTRIBUTE,7],[h.OBJECTANDLAYERIDCOLOR,8]]);var F;(function(e){e[e.LEFT_JOIN_START=-2]="LEFT_JOIN_START",e[e.LEFT_JOIN_END=-1]="LEFT_JOIN_END",e[e.LEFT_CAP_START=-4]="LEFT_CAP_START",e[e.LEFT_CAP_END=-5]="LEFT_CAP_END",e[e.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",e[e.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",e[e.RIGHT_CAP_START=4]="RIGHT_CAP_START",e[e.RIGHT_CAP_END=5]="RIGHT_CAP_END"})(F||(F={}));class Wt extends Fi{constructor(t){super(t,Lr),this._configuration=new E,this.vertexAttributeLocations=jt,this.produces=new Map([[k.OPAQUE_MATERIAL,i=>rr(i)||ue(i)&&this.parameters.renderOccluded===ae.OccludeAndTransparentStencil],[k.OPAQUE_MATERIAL_WITHOUT_NORMALS,i=>nr(i)],[k.OCCLUDER_MATERIAL,i=>Ot(i)&&this.parameters.renderOccluded===ae.OccludeAndTransparentStencil],[k.TRANSPARENT_OCCLUDER_MATERIAL,i=>Ot(i)&&this.parameters.renderOccluded===ae.OccludeAndTransparentStencil],[k.TRANSPARENT_MATERIAL,i=>ue(i)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==ae.OccludeAndTransparentStencil],[k.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,i=>ue(i)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==ae.OccludeAndTransparentStencil],[k.DRAPED_MATERIAL,i=>ar(i)]])}getConfiguration(t,i){this._configuration.output=t,this._configuration.oitPass=i.oitPass,this._configuration.draped=i.slot===k.DRAPED_MATERIAL;const r=this.parameters.stipplePattern!=null&&t!==se.Highlight;return this._configuration.stippleEnabled=r,this._configuration.stippleOffColorEnabled=r&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=r&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&Pr(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=i.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===ae.OccludeAndTransparentStencil,this._configuration.terrainDepthTest=i.terrainDepthTest&&ue(t),this._configuration.cullAboveTerrain=i.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration}get visible(){return this.parameters.color[3]>=he||this.parameters.stipplePattern!=null&&(this.parameters.stippleOffColor?.[3]??0)>he}intersectDraped({attributes:t,screenToWorldRatio:i},r,n,a,l,o){if(!n.options.selectionMode)return;const s=t.get(h.SIZE);let c=this.parameters.width;if(this.parameters.vvSize){const A=t.get(h.SIZEFEATUREATTRIBUTE).data[0];c*=we(this.parameters.vvSize.offset[0]+A*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else s&&(c*=s.data[0]);const d=a[0],v=a[1],f=(c/2+4)*i;let u=Number.MAX_VALUE,y=0;const O=t.get(h.POSITION).data,C=Ze(this.parameters,t)?O.length-2:O.length-5;for(let A=0;A<C;A+=3){const b=O[A],U=O[A+1],_=(A+3)%O.length,m=d-b,I=v-U,g=O[_]-b,$=O[_+1]-U,L=we((g*m+$*I)/(g*g+$*$),0,1),re=g*L-m,P=$*L-I,K=re*re+P*P;K<u&&(u=K,y=A/3)}u<f*f&&l(o.dist,o.normal,y,!1)}intersect(t,i,r,n,a,l){if(!r.options.selectionMode||!t.visible)return;if(!Zi(i))return void at.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const o=t.attributes,s=o.get(h.POSITION).data;let c=this.parameters.width;if(this.parameters.vvSize){const b=o.get(h.SIZEFEATUREATTRIBUTE).data[0];c*=we(this.parameters.vvSize.offset[0]+b*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else o.has(h.SIZE)&&(c*=o.get(h.SIZE).data[0]);const d=r.camera,v=wr;er(v,r.point);const f=c*d.pixelRatio/2+4*d.pixelRatio;B(Se[0],v[0]-f,v[1]+f,0),B(Se[1],v[0]+f,v[1]+f,0),B(Se[2],v[0]+f,v[1]-f,0),B(Se[3],v[0]-f,v[1]-f,0);for(let b=0;b<4;b++)if(!d.unprojectFromRenderScreen(Se[b],Z[b]))return;Ae(d.eye,Z[0],Z[1],$e),Ae(d.eye,Z[1],Z[2],Ye),Ae(d.eye,Z[2],Z[3],qe),Ae(d.eye,Z[3],Z[0],Xe);let u=Number.MAX_VALUE,y=0;const O=Ze(this.parameters,o)?s.length-2:s.length-5;for(let b=0;b<O;b+=3){w[0]=s[b]+i[12],w[1]=s[b+1]+i[13],w[2]=s[b+2]+i[14];const U=(b+3)%s.length;if(N[0]=s[U]+i[12],N[1]=s[U+1]+i[13],N[2]=s[U+2]+i[14],G($e,w)<0&&G($e,N)<0||G(Ye,w)<0&&G(Ye,N)<0||G(qe,w)<0&&G(qe,N)<0||G(Xe,w)<0&&G(Xe,N)<0)continue;if(d.projectToRenderScreen(w,te),d.projectToRenderScreen(N,ie),te[2]<0&&ie[2]>0){pe(H,w,N);const m=d.frustum,I=-G(m[xe.NEAR],w)/st(H,St(m[xe.NEAR]));Ue(H,H,I),be(w,w,H),d.projectToRenderScreen(w,te)}else if(te[2]>0&&ie[2]<0){pe(H,N,w);const m=d.frustum,I=-G(m[xe.NEAR],N)/st(H,St(m[xe.NEAR]));Ue(H,H,I),be(N,N,H),d.projectToRenderScreen(N,ie)}else if(te[2]<0&&ie[2]<0)continue;te[2]=0,ie[2]=0;const _=tr(Ge(te,ie,Bt),v);_<u&&(u=_,Y(Mt,w),Y(Vt,N),y=b/3)}const C=r.rayBegin,A=r.rayEnd;if(u<f*f){let b=Number.MAX_VALUE;if(ir(Ge(Mt,Vt,Bt),Ge(C,A,Nr),ee)){pe(ee,ee,C);const U=ni(ee);Ue(ee,ee,1/U),b=U/Ne(C,A)}l(b,ee,y,!1)}}get _layout(){const t=$i().vec3f(h.POSITION).vec3f(h.PREVPOSITION).vec3f(h.NEXTPOSITION).f32(h.SUBDIVISIONFACTOR).vec2f(h.UV0);return this.parameters.vvSize?t.f32(h.SIZEFEATUREATTRIBUTE):t.f32(h.SIZE),this.parameters.vvColor?t.f32(h.COLORFEATUREATTRIBUTE):t.vec4f(h.COLOR),this.parameters.vvOpacity&&t.f32(h.OPACITYFEATUREATTRIBUTE),Ve()&&t.vec4u8(h.OBJECTANDLAYERIDCOLOR),t}createBufferWriter(){return new Ir(this._layout,this.parameters)}createGLMaterial(t){return new Dr(t)}validateParameters(t){t.join!=="miter"&&(t.miterLimit=0),t.markerParameters!=null&&(t.markerScale=t.markerParameters.width/t.width)}}class Dr extends ji{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures.release(this._stipplePattern),this._stipplePattern=null}beginSlot(t){const i=this._material.parameters.stipplePattern;return this._stipplePattern!==i&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(i,this._stipplePattern)}),this._stipplePattern=i),this.getTechnique(Cr,t)}}class Lr extends Wi{constructor(){super(...arguments),this.width=0,this.color=oi,this.join="miter",this.cap=Q.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1}get transparent(){return this.color[3]<1||this.stipplePattern!=null&&(this.stippleOffColor?.[3]??0)<1}}class Ir{constructor(t,i){this.vertexBufferLayout=t,this._parameters=i,this.numJoinSubdivisions=0;const r=i.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=r;break;case"round":this.numJoinSubdivisions=ge+r}}_isClosed(t){return Ze(this._parameters,t)}allocate(t){return this.vertexBufferLayout.createBuffer(t)}elementCount(t){const i=t.get(h.POSITION).indices.length/2+1,r=this._isClosed(t);let n=r?2:2*2;return n+=((r?i:i-1)-(r?0:1))*(2*this.numJoinSubdivisions+4),n+=2,this._parameters.wireframe&&(n=2+4*(n-2)),n}write(t,i,r,n,a,l){const o=Ur,s=zr,c=Fr,d=r.get(h.POSITION),v=d.indices,f=d.data.length/3,u=r.get(h.DISTANCETOSTART)?.data;v&&v.length!==2*(f-1)&&console.warn("RibbonLineMaterial does not support indices");const y=r.get(h.SIZEFEATUREATTRIBUTE)?.data[0]??r.get(h.SIZE)?.data[0]??1;let O=[1,1,1,1],C=0;const A=this.vertexBufferLayout.fields.has(h.COLORFEATUREATTRIBUTE);A?C=r.get(h.COLORFEATUREATTRIBUTE).data[0]:r.has(h.COLOR)&&(O=r.get(h.COLOR).data);const b=this.vertexBufferLayout.fields.has(h.OPACITYFEATUREATTRIBUTE),U=b?r.get(h.OPACITYFEATUREATTRIBUTE).data[0]:0,_=new Float32Array(a.buffer),m=Ve()?new Uint8Array(a.buffer):null,I=this.vertexBufferLayout.stride/4;let g=l*I;const $=g;let L=0;const re=u?(R,M,J)=>L=u[J]:(R,M,J)=>L+=Ne(R,M),P=(R,M,J,de,Te,$t,Yt)=>{if(_[g++]=M[0],_[g++]=M[1],_[g++]=M[2],_[g++]=R[0],_[g++]=R[1],_[g++]=R[2],_[g++]=J[0],_[g++]=J[1],_[g++]=J[2],_[g++]=de,_[g++]=Yt,_[g++]=Te,_[g++]=y,A)_[g++]=C;else{const _e=Math.min(4*$t,O.length-4);_[g++]=O[_e],_[g++]=O[_e+1],_[g++]=O[_e+2],_[g++]=O[_e+3]}b&&(_[g++]=U),Ve()&&(n&&(m[4*g]=n[0],m[4*g+1]=n[1],m[4*g+2]=n[2],m[4*g+3]=n[3]),g++)};g+=I,B(s,d.data[0],d.data[1],d.data[2]),t&&V(s,s,t);const K=this._isClosed(r);if(K){const R=d.data.length-3;B(o,d.data[R],d.data[R+1],d.data[R+2]),t&&V(o,o,t)}else B(c,d.data[3],d.data[4],d.data[5]),t&&V(c,c,t),P(s,s,c,1,F.LEFT_CAP_START,0,0),P(s,s,c,1,F.RIGHT_CAP_START,0,0),Y(o,s),Y(s,c);const Ie=K?0:1,ce=K?f:f-1;for(let R=Ie;R<ce;R++){const M=(R+1)%f*3;B(c,d.data[M],d.data[M+1],d.data[M+2]),t&&V(c,c,t),re(o,s,R),P(o,s,c,0,F.LEFT_JOIN_END,R,L),P(o,s,c,0,F.RIGHT_JOIN_END,R,L);const J=this.numJoinSubdivisions;for(let de=0;de<J;++de){const Te=(de+1)/(J+1);P(o,s,c,Te,F.LEFT_JOIN_END,R,L),P(o,s,c,Te,F.RIGHT_JOIN_END,R,L)}P(o,s,c,1,F.LEFT_JOIN_START,R,L),P(o,s,c,1,F.RIGHT_JOIN_START,R,L),Y(o,s),Y(s,c)}K?(B(c,d.data[3],d.data[4],d.data[5]),t&&V(c,c,t),L=re(o,s,ce),P(o,s,c,0,F.LEFT_JOIN_END,Ie,L),P(o,s,c,0,F.RIGHT_JOIN_END,Ie,L)):(L=re(o,s,ce),P(o,s,s,0,F.LEFT_CAP_END,ce,L),P(o,s,s,0,F.RIGHT_CAP_END,ce,L)),Je(_,$+I,_,$,I),g=Je(_,g-I,_,g,I),this._parameters.wireframe&&this._addWireframeVertices(a,$,g,I)}_addWireframeVertices(t,i,r,n){const a=new Float32Array(t.buffer,r*Float32Array.BYTES_PER_ELEMENT),l=new Float32Array(t.buffer,i*Float32Array.BYTES_PER_ELEMENT,r-i);let o=0;const s=c=>o=Je(l,c,a,o,n);for(let c=0;c<l.length-1;c+=2*n)s(c),s(c+2*n),s(c+1*n),s(c+2*n),s(c+1*n),s(c+3*n)}}function Je(e,t,i,r,n){for(let a=0;a<n;a++)i[r++]=e[t++];return r}function Ze(e,t){return e.isClosed?t.get(h.POSITION).indices.length>2:!1}function Pr(e){return e.anchor===oe.Tip&&e.hideOnShortSegments&&e.placement==="begin-end"&&e.worldSpace}const w=x(),N=x(),H=x(),ee=x(),wr=x(),te=ne(),ie=ne(),Mt=x(),Vt=x(),Bt=bt(),Nr=bt(),Ur=x(),zr=x(),Fr=x(),Se=[ne(),ne(),ne(),ne()],Z=[x(),x(),x(),x()],$e=Ee(),Ye=Ee(),qe=Ee(),Xe=Ee();var Qe,Ke,et;(function(e){e[e.RasterImage=0]="RasterImage",e[e.Features=1]="Features"})(Qe||(Qe={})),function(e){e[e.MapLayer=0]="MapLayer",e[e.ViewLayer=1]="ViewLayer",e[e.Outline=2]="Outline",e[e.SnappingHint=3]="SnappingHint"}(Ke||(Ke={})),function(e){e[e.WithRasterImage=0]="WithRasterImage",e[e.WithoutRasterImage=1]="WithoutRasterImage"}(et||(et={}));let jr=class{constructor(e,t){this.vec3=e,this.id=t}};function tt(e,t,i,r){return new jr(Pe(e,t,i),r)}class Wr{constructor(t){this._originSR=t,this._rootOriginId="root/"+Kt(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5}getOrigin(t){const i=this._origins.get(this._rootOriginId);if(i==null){const d=tt(t[0]+Math.random()-.5,t[1]+Math.random()-.5,t[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,d),d}const r=this._gridSize,n=Math.round(t[0]/r),a=Math.round(t[1]/r),l=Math.round(t[2]/r),o=`${n}/${a}/${l}`;let s=this._origins.get(o);const c=.5*r;if(pe(D,t,i.vec3),D[0]=Math.abs(D[0]),D[1]=Math.abs(D[1]),D[2]=Math.abs(D[2]),D[0]<c&&D[1]<c&&D[2]<c){if(s){const d=Math.max(...D);if(pe(D,t,s.vec3),D[0]=Math.abs(D[0]),D[1]=Math.abs(D[1]),D[2]=Math.abs(D[2]),Math.max(...D)<d)return s}return i}return s||(s=tt(n*r,a*r,l*r,o),this._origins.set(o,s)),s}_drawOriginBox(t,i=li(1,1,0,1)){const r=window.view,n=r._stage,a=i.toString();if(!this._objects.has(a)){this._material=new Wt({width:2,color:i}),n.add(this._material);const u=new Dt(n,{pickable:!1}),y=new At({castShadow:!1});n.add(y),u.add(y),this._objects.set(a,y)}const l=this._objects.get(a),o=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],s=o.length,c=new Array(3*s),d=new Array,v=.5*this._gridSize;for(let u=0;u<s;u++)c[3*u]=t[0]+(1&o[u]?v:-v),c[3*u+1]=t[1]+(2&o[u]?v:-v),c[3*u+2]=t[2]+(4&o[u]?v:-v),u>0&&d.push(u-1,u);ze(c,this._originSR,0,c,r.renderSpatialReference,0,s);const f=new Mi(this._material,[[h.POSITION,new ci(c,d,3,!0)]],null,Fe.Line);n.add(f),l.addGeometry(f)}get test(){}}const D=x();function Mr(e,t,i,r,n,a,l,o,s,c,d){const v=Xr[d.mode];let f,u,y=0;if(ze(e,t,i,r,s.spatialReference,n,o))return v?.requiresAlignment(d)?(y=v.applyElevationAlignmentBuffer(r,n,a,l,o,s,c,d),f=a,u=l):(f=r,u=n),ze(f,s.spatialReference,u,a,c.spatialReference,l,o)?y:void 0}function it(e,t,i,r,n){const a=(_t(e)?e.z:Et(e)?e.array[e.offset+2]:e[2])||0;switch(i.mode){case"on-the-ground":{const l=fe(t,e,"ground")??0;return n.verticalDistanceToGround=0,n.sampledElevation=l,void(n.z=l)}case"relative-to-ground":{const l=fe(t,e,"ground")??0,o=i.geometryZWithOffset(a,r);return n.verticalDistanceToGround=o,n.sampledElevation=l,void(n.z=o+l)}case"relative-to-scene":{const l=fe(t,e,"scene")??0,o=i.geometryZWithOffset(a,r);return n.verticalDistanceToGround=o,n.sampledElevation=l,void(n.z=o+l)}case"absolute-height":{const l=i.geometryZWithOffset(a,r),o=fe(t,e,"ground")??0;return n.verticalDistanceToGround=l-o,n.sampledElevation=o,void(n.z=l)}default:return void(n.z=0)}}function Vr(e,t,i,r){return it(e,t,i,r,le),le.z}function Br(e,t,i){return t==="on-the-ground"&&i==="on-the-ground"?e.staysOnTheGround:t===i||t!=="on-the-ground"&&i!=="on-the-ground"?t==null||i==null?e.definedChanged:De.UPDATE:e.onTheGroundChanged}function kr(e){return e==="relative-to-ground"||e==="relative-to-scene"}function Gr(e){return e!=="absolute-height"}function Hr(e,t,i,r,n){it(t,i,n,r,le),kt(e,le.verticalDistanceToGround);const a=le.sampledElevation,l=Be(Qr,e.transformation);return Le[0]=t.x,Le[1]=t.y,Le[2]=le.z,sr(t.spatialReference,Le,l,r.spatialReference)?e.transformation=l:console.warn("Could not locate symbol object properly, it might be misplaced"),a}function kt(e,t){for(let i=0;i<e.geometries.length;++i){const r=e.geometries[i].getMutableAttribute(h.CENTEROFFSETANDDISTANCE);r&&r.data[3]!==t&&(r.data[3]=t,e.geometryVertexAttributeUpdated(e.geometries[i],h.CENTEROFFSETANDDISTANCE))}}function Jr(e,t,i,r,n,a){let l=0;const o=a.spatialReference;t*=3,r*=3;for(let s=0;s<n;++s){const c=e[t],d=e[t+1],v=e[t+2],f=a.getElevation(c,d,v,o,"ground")??0;l+=f,i[r]=c,i[r+1]=d,i[r+2]=f,t+=3,r+=3}return l/n}function Zr(e,t,i,r,n,a,l,o){let s=0;const c=o.calculateOffsetRenderUnits(l),d=o.featureExpressionInfoContext,v=a.spatialReference;t*=3,r*=3;for(let f=0;f<n;++f){const u=e[t],y=e[t+1],O=e[t+2],C=a.getElevation(u,y,O,v,"ground")??0;s+=C,i[r]=u,i[r+1]=y,i[r+2]=d==null?O+C+c:C+c,t+=3,r+=3}return s/n}function $r(e,t,i,r,n,a,l,o){let s=0;const c=o.calculateOffsetRenderUnits(l),d=o.featureExpressionInfoContext,v=a.spatialReference;t*=3,r*=3;for(let f=0;f<n;++f){const u=e[t],y=e[t+1],O=e[t+2],C=a.getElevation(u,y,O,v,"scene")??0;s+=C,i[r]=u,i[r+1]=y,i[r+2]=d==null?O+C+c:C+c,t+=3,r+=3}return s/n}function Yr(e){const t=e.meterUnitOffset,i=e.featureExpressionInfoContext;return t!==0||i!=null}function qr(e,t,i,r,n,a,l,o){const s=o.calculateOffsetRenderUnits(l),c=o.featureExpressionInfoContext;t*=3,r*=3;for(let d=0;d<n;++d){const v=e[t],f=e[t+1],u=e[t+2];i[r]=v,i[r+1]=f,i[r+2]=c==null?u+s:s,t+=3,r+=3}return 0}class Gt{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}var De;(function(e){e[e.NONE=0]="NONE",e[e.UPDATE=1]="UPDATE",e[e.RECREATE=2]="RECREATE"})(De||(De={}));const Xr={"absolute-height":{applyElevationAlignmentBuffer:qr,requiresAlignment:Yr},"on-the-ground":{applyElevationAlignmentBuffer:Jr,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:Zr,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:$r,requiresAlignment:()=>!0}},Qr=ye(),le=new Gt,Le=x(),Kr=()=>at.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function en(e){return{cachedResult:e.cachedResult,arcade:e.arcade?{func:e.arcade.func,context:e.arcade.modules.arcadeUtils.createExecContext(null,{sr:e.arcade.context.spatialReference}),modules:e.arcade.modules}:null}}async function tn(e,t,i,r){const n=e?.expression;if(typeof n!="string")return null;const a=sn(n);if(a!=null)return{cachedResult:a};const l=await ei();ti(i);const o=l.arcadeUtils,s=o.createSyntaxTree(n);return o.dependsOnView(s)?(r?.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:o.createFunction(s),context:o.createExecContext(null,{sr:t}),modules:l}}}function Ht(e,t,i){return e.arcadeUtils.createFeature(t.attributes,t.geometry,i)}function Jt(e,t){if(e!=null&&!Zt(e)){if(!t||!e.arcade)return void Kr().errorOncePerTick("Arcade support required but not provided");const i=t;i._geometry&&(i._geometry=cr(i._geometry)),e.arcade.modules.arcadeUtils.updateExecContext(e.arcade.context,t)}}function rn(e){if(e!=null){if(Zt(e))return e.cachedResult;const t=e.arcade;let i=t?.modules.arcadeUtils.executeFunction(t.func,t.context);return typeof i!="number"&&(e.cachedResult=0,i=0),i}return 0}function nn(e,t=!1){let i=e?.featureExpressionInfo;const r=i?.expression;return t||r==="0"||(i=null),i??null}const an={cachedResult:0};function Zt(e){return e.cachedResult!=null}function sn(e){return e==="0"?0:null}class rt{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(t){this._unit=t,this._metersPerElevationInfoUnit=or(t)}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(t){this._meterUnitOffset=t,this._renderUnitOffset=0}set offsetElevationInfoUnits(t){this._meterUnitOffset=t*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(t){this._renderUnitOffset+=t}geometryZWithOffset(t,i){const r=this.calculateOffsetRenderUnits(i);return this.featureExpressionInfoContext!=null?r:t+r}calculateOffsetRenderUnits(t){let i=this._meterUnitOffset;const r=this.featureExpressionInfoContext;return r!=null&&(i+=rn(r)*this._metersPerElevationInfoUnit),i/t.unitInMeters+this._renderUnitOffset}setFromElevationInfo(t){this.mode=t.mode,this.unit=lr(t.unit)?t.unit:"meters",this.offsetElevationInfoUnits=t.offset??0}updateFeatureExpressionInfoContext(t,i,r){if(t==null)return void(this._featureExpressionInfoContext=null);const n=t?.arcade;n&&i!=null&&r!=null?(this._featureExpressionInfoContext=en(t),Jt(this._featureExpressionInfoContext,Ht(n.modules,i,r))):this._featureExpressionInfoContext=t}static fromElevationInfo(t){const i=new rt;return t!=null&&i.setFromElevationInfo(t),i}}const on=Object.freeze(Object.defineProperty({__proto__:null,build:zt,ribbonlineNumRoundJoinSubdivisions:ge},Symbol.toStringTag,{value:"Module"}));export{At as A,z as B,ve as C,Q as D,kt as E,Vr as F,fe as G,Gt as R,Wt as W,Wr as _,Ke as a,et as b,it as c,De as d,Qe as e,an as f,kr as g,nn as h,tn as i,Dt as j,Gr as k,Jt as l,Br as m,X as n,rt as o,Hr as p,It as q,ur as r,Ht as s,tt as t,Mr as u,Ut as v,oe as w,He as x,Nt as y,Rr as z};
