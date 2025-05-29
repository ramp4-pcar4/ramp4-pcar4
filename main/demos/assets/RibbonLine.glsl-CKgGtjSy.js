import{cF as Me,aK as x,c1 as Mt,ab as qe,fy as Wt,U as Vt,B as S,aR as Ie,n as bt,ju as ae,fh as Bt,b1 as kt,X as Ht}from"./main-asQ7SttR.js";import{I as Jt,E as k,p as Ge,o as H,u as xe,H as Gt,s as X,c as he,P as Qe,g as Pe,r as Zt}from"./vec32-BzCy6cr7.js";import{s as Yt,n as Xt,N as qt,r as Qt}from"./vec4f64-o2zAXfmz.js";import{o as We}from"./projectBuffer-Cx7kBt8y.js";import{t as Kt}from"./orientedBoundingBox-BH0jY8bO.js";import{b2 as Ot,l as Ze,b3 as ei,b4 as ti,I as _,J as yt,K as Et,L as At,e as Y,aH as _e,b5 as Ke,u as ii,c as ri,g as Ye,w as Xe,C as ni,z as Ve,aw as ai,v as si,r as oi,a as li,aT as ci,ar as di,o as pi,ai as hi,aG as ui,x as fi,B as ue,F as mi,G as vi,E as et,aJ as gi,aK as Si,aL as _i,H as Ti,aM as tt,aN as it,aO as bi,b6 as Oi,b7 as rt,b8 as yi,b9 as Ei,ba as Ai,bb as Ri,O as B,M as xi,Y as ne,Z as Be,b0 as Ci,b1 as Di,f as Li}from"./Geometry-BYkWVgnK.js";import{n as ke,c as nt,H as Ii}from"./mat4-BjwS19gr.js";import{o as Pi,e as Re}from"./mat4f64-Dk4dwAN8.js";import{U as at,E as $i}from"./sphere-DET7VZHS.js";import{m as wi,M as De,p as Te,V as W,O as st}from"./plane-RIh6ulrU.js";import{t as Ni}from"./basicInterfaces-CZwQPxTp.js";import{s as Ui,m as zi,H as Fi}from"./InterleavedLayout-CkdA0S5-.js";import{E as ji,e as h}from"./VertexAttribute-Cq4MnHjR.js";import{e as Mi,r as Wi,t as Vi,a as Rt}from"./dehydratedFeatureUtils-lt-r3GBb.js";import{b as Bi,j as be}from"./Octree-DqQOkamU.js";import{r as ki}from"./vec2-maR1OrZI.js";import{v as xt,M as Hi,b as $e,B as Ji}from"./lineSegment-BNFfqofa.js";import{n as se,u as pe,i as Gi,S as Zi,C as ot,e as Yi}from"./ShaderOutput-DnYY5J1_.js";import{_ as Xi}from"./preload-helper-ExcqyqRp.js";import{E as lt,f as Oe}from"./enums-Dk3osxpS.js";import{B as ye,g as we,c as ct}from"./renderState-z3Gwc6C8.js";import{m as qi}from"./computeTranslationToOriginAndRotation-njxIHGyK.js";import{n as Qi,e as Ki}from"./ElevationInfo-C-a3Y-El.js";import{u as er}from"./hydratedFeatures-Biiv0j5A.js";import{n as p,t as tr}from"./glsl-BH37Aalp.js";import"./BindType-BBwFZqyN.js";import"./floatRGBA-Dmu5dBAP.js";import"./Texture-DGW9aO8e.js";import{s as ir}from"./vec42-CKs01hkn.js";import"./vec2f64-DohEyf3f.js";import{i as rr}from"./ShaderBuilder-DGYV3P6E.js";var dt,pt,ht;(function(t){t[t.RasterImage=0]="RasterImage",t[t.Features=1]="Features"})(dt||(dt={})),function(t){t[t.MapLayer=0]="MapLayer",t[t.ViewLayer=1]="ViewLayer",t[t.Outline=2]="Outline",t[t.SnappingHint=3]="SnappingHint"}(pt||(pt={})),function(t){t[t.WithRasterImage=0]="WithRasterImage",t[t.WithoutRasterImage=1]="WithoutRasterImage"}(ht||(ht={}));var Ce;(function(t){t[t.ASYNC=0]="ASYNC",t[t.SYNC=1]="SYNC"})(Ce||(Ce={}));let nr=class extends Ot{get geometries(){return this._geometries}get transformation(){return this._transformation??Pi}set transformation(e){this._transformation=ke(this._transformation??Re(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?ke(this._shaderTransformation??Re(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}constructor(e={}){super(),this.type=Ze.Object,this._shaderTransformation=null,this._parentLayer=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerUid=e.layerUid,e.isElevationSource&&(this.lastValidElevationBB=new Ct),this._geometries=e.geometries?Array.from(e.geometries):new Array}dispose(){this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(e){Ui(this._parentLayer==null||e==null,"Object3D can only be added to a single Layer"),this._parentLayer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e),this._emit("geometryAdded",{object:this,geometry:e}),this._invalidateBoundingVolume()}removeGeometry(e){const i=this._geometries.splice(e,1)[0];i&&(this._emit("geometryRemoved",{object:this,geometry:i}),this._invalidateBoundingVolume())}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,i,r=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:i,sync:r}),ji(i)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const i of this._geometries)i.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new ei;for(const i of this._geometries)i.occludees=Mi(i.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const i of this._geometries)i.occludees=Wi(i.occludees,e);this._emit("occlusionChanged",this)}highlight(e){const i=new ti(e);for(const r of this._geometries)r.addHighlight(i);return this._emit("highlightChanged",this),i}removeHighlight(e){for(const i of this._geometries)i.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===Ni.Highlight?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,i){return nt(i,this.transformation,e.transformation)}getCombinedShaderTransformation(e,i=Re()){return nt(i,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new ut,this._validateBoundingVolume(this._bvWorldSpace,fe.WorldSpace)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new ut,this._validateBoundingVolume(this._bvObjectSpace,fe.ObjectSpace)),this._bvObjectSpace}_validateBoundingVolume(e,i){const r=i===fe.ObjectSpace;for(const n of this._geometries){const a=n.boundingInfo;a&&ar(a,e,r?n.transformation:this.getCombinedShaderTransformation(n))}Jt(at(e.bounds),e.min,e.max,.5);for(const n of this._geometries){const a=n.boundingInfo;if(a==null)continue;const l=r?n.transformation:this.getCombinedShaderTransformation(n),o=wi(l);k(ft,a.center,l);const s=Ge(ft,at(e.bounds)),c=a.radius*o;e.bounds[3]=Math.max(e.bounds[3],s+c)}}_invalidateBoundingVolume(){const e=this._bvWorldSpace?.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this._parentLayer&&e&&this._parentLayer.notifyObjectBBChanged(this,e)}_emit(e,i){this._parentLayer&&this._parentLayer.events.emit(e,i)}get test(){}};class Ct{constructor(){this.min=Me(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=Me(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class ut extends Ct{constructor(){super(...arguments),this.bounds=$i()}}function ar(t,e,i){const r=t.bbMin,n=t.bbMax;if(Ii(i)){const a=H(sr,i[12],i[13],i[14]);xe(z,r,a),xe(j,n,a);for(let l=0;l<3;++l)e.min[l]=Math.min(e.min[l],z[l]),e.max[l]=Math.max(e.max[l],j[l])}else if(k(z,r,i),Gt(r,n))for(let a=0;a<3;++a)e.min[a]=Math.min(e.min[a],z[a]),e.max[a]=Math.max(e.max[a],z[a]);else{k(j,n,i);for(let a=0;a<3;++a)e.min[a]=Math.min(e.min[a],z[a],j[a]),e.max[a]=Math.max(e.max[a],z[a],j[a]);for(let a=0;a<3;++a){X(z,r),X(j,n),z[a]=n[a],j[a]=r[a],k(z,z,i),k(j,j,i);for(let l=0;l<3;++l)e.min[l]=Math.min(e.min[l],z[l],j[l]),e.max[l]=Math.max(e.max[l],z[l],j[l])}}}const sr=x(),z=x(),j=x(),ft=x();var fe;(function(t){t[t.WorldSpace=0]="WorldSpace",t[t.ObjectSpace=1]="ObjectSpace"})(fe||(fe={}));const or=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];let lr=class extends Ot{constructor(e,i,r=""){super(),this.stage=e,this.apiLayerUid=r,this.type=Ze.Layer,this.events=new Mt,this.visible=!0,this.sliceable=!1,this._objectsAdded=new qe,this._handles=new Wt,this._objects=new qe,this._pickable=!0,this.visible=i?.visible??!0,this._pickable=i?.pickable??!0,this.updatePolicy=i?.updatePolicy??Ce.ASYNC,this._disableOctree=i?.disableOctree??!1,e.add(this);for(const n of or)this._handles.add(this.events.on(n,a=>e.handleEvent(n,a)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.remove(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.push(e),e.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:e}),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.removeUnordered(e)&&(e.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:e}),this._octree!=null&&(this._objectsAdded.removeUnordered(e)||this._octree.remove([e])))}addMany(e){this._objects.pushArray(e);for(const i of e)i.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:e}),this._octree!=null&&this._objectsAdded.pushArray(e)}removeMany(e){const i=new Array;if(this._objects.removeUnorderedMany(e,e.length,i),i.length!==0){for(const r of i)r.parentLayer=null;if(this.events.emit("layerObjectsRemoved",{layer:this,objects:i}),this._octree!=null){for(let r=0;r<i.length;)this._objectsAdded.removeUnordered(i[r])?(i[r]=i[i.length-1],i.length-=1):++r;this._octree.remove(i)}}}sync(){this.updatePolicy!==Ce.SYNC&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,i){this._octree==null||this._objectsAdded.includes(e)||this._octree.update(e,i)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.length>50&&!this._disableOctree?(this._octree=new Bi(e=>e.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.data,this._objects.length)):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded.data,this._objectsAdded.length),this._objectsAdded.clear()),this._octree}invalidateSpatialQueryAccelerator(){this._octree=Vt(this._octree),this._objectsAdded.clear()}},cr=class{constructor(e,i){this.vec3=e,this.id=i}};function mt(t,e,i,r){return new cr(Me(t,e,i),r)}var te,me;(function(t){t[t.Draped=0]="Draped",t[t.Screen=1]="Screen",t[t.World=2]="World",t[t.COUNT=3]="COUNT"})(te||(te={})),function(t){t[t.Center=0]="Center",t[t.Tip=1]="Tip",t[t.COUNT=2]="COUNT"}(me||(me={}));let F=class extends yt{constructor(){super(...arguments),this.space=te.Screen,this.anchor=me.Center,this.occluder=!1,this.writeDepth=!1,this.hideOnShortSegments=!1,this.hasCap=!1,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.textureCoordinateType=Et.None,this.emissionSource=At.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0,this.objectAndLayerIdColorInstanced=!1}get draped(){return this.space===te.Draped}};S([_({count:te.COUNT})],F.prototype,"space",void 0),S([_({count:me.COUNT})],F.prototype,"anchor",void 0),S([_()],F.prototype,"occluder",void 0),S([_()],F.prototype,"writeDepth",void 0),S([_()],F.prototype,"hideOnShortSegments",void 0),S([_()],F.prototype,"hasCap",void 0),S([_()],F.prototype,"hasTip",void 0),S([_()],F.prototype,"vvSize",void 0),S([_()],F.prototype,"vvColor",void 0),S([_()],F.prototype,"vvOpacity",void 0),S([_()],F.prototype,"hasOccludees",void 0),S([_()],F.prototype,"terrainDepthTest",void 0),S([_()],F.prototype,"cullAboveTerrain",void 0);const vt=8;function dr(t,e){const i=t.vertex;i.uniforms.add(new Y("intrinsicWidth",r=>r.width)),e.vvSize?(t.attributes.add(h.SIZEFEATUREATTRIBUTE,"float"),i.uniforms.add(new _e("vvSizeMinSize",r=>r.vvSize.minSize),new _e("vvSizeMaxSize",r=>r.vvSize.maxSize),new _e("vvSizeOffset",r=>r.vvSize.offset),new _e("vvSizeFactor",r=>r.vvSize.factor)),i.code.add(p`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(t.attributes.add(h.SIZE,"float"),i.code.add(p`float getSize(){
return intrinsicWidth * size;
}`)),e.vvOpacity?(t.attributes.add(h.OPACITYFEATUREATTRIBUTE,"float"),i.constants.add("vvOpacityNumber","int",8),i.uniforms.add(new Ke("vvOpacityValues",r=>r.vvOpacity.values,vt),new Ke("vvOpacityOpacities",r=>r.vvOpacity.opacityValues,vt)),i.code.add(p`float interpolateOpacity( float value ){
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
}`),e.vvColor?(t.include(ii,e),t.attributes.add(h.COLORFEATUREATTRIBUTE,"float"),i.code.add(p`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(t.attributes.add(h.COLOR,"vec4"),i.code.add(p`vec4 getColor(){
return applyOpacity(color);
}`))}function Dt(t){return t.pattern.map(e=>Math.round(e*t.pixelRatio))}function pr(t){if(t==null)return 1;const e=Dt(t);return Math.floor(e.reduce((i,r)=>i+r))}function hr(t){return Dt(t).reduce((e,i)=>Math.max(e,i))}function ur(t){return t==null?Yt:t.length===4?t:ir(fr,t[0],t[1],t[2],1)}const fr=Xt();function mr(t,e){if(!e.stippleEnabled)return void t.fragment.code.add(p`float getStippleAlpha() { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);const i=!(e.draped&&e.stipplePreferContinuous),{vertex:r,fragment:n}=t;n.include(Vi),e.draped||(ri(r,e),r.uniforms.add(new Ye("worldToScreenPerDistanceRatio",({camera:a})=>1/a.perScreenPixelRatio)).code.add(p`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),t.varyings.add("vStippleDistance","float"),t.varyings.add("vStippleDistanceLimits","vec2"),t.varyings.add("vStipplePatternStretch","float"),r.code.add(p`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${p.float(gr)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),r.code.add(p`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),r.code.add(p`
    if (segmentLengthPseudoScreen >= ${i?"patternLength":"1e4"}) {
  `),Xe(r),r.code.add(p`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),n.uniforms.add(new ni("stipplePatternTexture",a=>a.stippleTexture),new Y("stipplePatternSDFNormalizer",a=>vr(a.stipplePattern)),new Y("stipplePatternPixelSizeInv",a=>1/Lt(a))),e.stippleOffColorEnabled&&n.uniforms.add(new Ve("stippleOffColor",a=>ur(a.stippleOffColor))),n.code.add(p`float getStippleSDF(out bool isClamped) {
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
     ${tr(!e.stippleOffColorEnabled,"if (stippleAlpha < threshold) { discard; }")}
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${e.stippleOffColorEnabled?"mix(color, stippleOffColor, stippleAlpha)":"vec4(color.rgb, color.a * stippleAlpha)"};
    }
  `)}function vr(t){return t?(Math.floor(.5*(hr(t)-1))+.5)/t.pixelRatio:1}function Lt(t){const e=t.stipplePattern;return e?pr(t.stipplePattern)/e.pixelRatio:1}const gr=.4,It=64,Sr=It/2,_r=Sr/5,Tr=It/_r,Pn=.25;function br(t,e){const i=t.vertex;Xe(i),i.uniforms.get("markerScale")==null&&i.constants.add("markerScale","float",1),i.constants.add("markerSizePerLineWidth","float",Tr).code.add(p`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),e.space===te.World&&(i.constants.add("maxSegmentLengthFraction","float",.45),i.uniforms.add(new Ye("perRenderPixelRatio",r=>r.camera.perRenderPixelRatio)),i.code.add(p`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
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
}`))}var ie;(function(t){t[t.BUTT=0]="BUTT",t[t.SQUARE=1]="SQUARE",t[t.ROUND=2]="ROUND",t[t.COUNT=3]="COUNT"})(ie||(ie={}));let E=class extends yt{constructor(){super(...arguments),this.capType=ie.BUTT,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.objectAndLayerIdColorInstanced=!1,this.textureCoordinateType=Et.None,this.emissionSource=At.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0}};S([_({count:ie.COUNT})],E.prototype,"capType",void 0),S([_()],E.prototype,"hasPolygonOffset",void 0),S([_()],E.prototype,"writeDepth",void 0),S([_()],E.prototype,"draped",void 0),S([_()],E.prototype,"stippleEnabled",void 0),S([_()],E.prototype,"stippleOffColorEnabled",void 0),S([_()],E.prototype,"stipplePreferContinuous",void 0),S([_()],E.prototype,"roundJoins",void 0),S([_()],E.prototype,"applyMarkerOffset",void 0),S([_()],E.prototype,"vvSize",void 0),S([_()],E.prototype,"vvColor",void 0),S([_()],E.prototype,"vvOpacity",void 0),S([_()],E.prototype,"falloffEnabled",void 0),S([_()],E.prototype,"innerColorEnabled",void 0),S([_()],E.prototype,"hasOccludees",void 0),S([_()],E.prototype,"occluder",void 0),S([_()],E.prototype,"terrainDepthTest",void 0),S([_()],E.prototype,"cullAboveTerrain",void 0),S([_()],E.prototype,"wireframe",void 0),S([_()],E.prototype,"discardInvisibleFragments",void 0),S([_()],E.prototype,"objectAndLayerIdColorInstanced",void 0);const ve=1;function Pt(t){const e=new rr,{attributes:i,varyings:r,vertex:n,fragment:a}=e,{applyMarkerOffset:l,draped:o,output:s,capType:c,stippleEnabled:d,falloffEnabled:v,roundJoins:f,wireframe:u,innerColorEnabled:y}=t;e.include(ai),e.include(dr,t),e.include(mr,t),e.include(si,t),e.include(oi,t);const O=l&&!o;O&&(n.uniforms.add(new Y("markerScale",m=>m.markerScale)),e.include(br,{space:te.World})),li(n,t),n.uniforms.add(new ci("inverseProjectionMatrix",m=>m.camera.inverseProjectionMatrix),new di("nearFar",m=>m.camera.nearFar),new Y("miterLimit",m=>m.join!=="miter"?0:m.miterLimit),new pi("viewport",m=>m.camera.fullViewport)),n.constants.add("LARGE_HALF_FLOAT","float",65500),i.add(h.POSITION,"vec3"),i.add(h.PREVPOSITION,"vec3"),i.add(h.NEXTPOSITION,"vec3"),i.add(h.SUBDIVISIONFACTOR,"float"),i.add(h.UV0,"vec2"),r.add("vColor","vec4"),r.add("vpos","vec3"),r.add("vLineDistance","float"),r.add("vLineWidth","float");const C=d;C&&r.add("vLineSizeInv","float");const A=c===ie.ROUND,b=d&&A,N=v||b;N&&r.add("vLineDistanceNorm","float"),A&&(r.add("vSegmentSDF","float"),r.add("vReverseSegmentSDF","float")),n.code.add(p`vec2 perpendicular(vec2 v) {
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
}`),Xe(n),n.constants.add("aaWidth","float",d?0:1).main.add(p`
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

        float factor = ${d?p`min(1.0, subdivisionFactor * ${p.float((ve+2)/(ve+1))})`:p`subdivisionFactor`};

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
joinDisplacementDir = perpendicular(joinDisplacementDir);`);const T=c!==ie.BUTT;return n.main.add(p`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${T?p`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),n.main.add(p`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(uv0.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${N?p`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),A&&n.main.add(p`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),d&&(o?n.uniforms.add(new Ye("worldToScreenRatio",m=>1/m.screenToPCSRatio)):n.main.add(p`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),n.main.add(p`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),o?n.main.add(p`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):n.main.add(p`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),n.uniforms.add(new Y("stipplePatternPixelSize",m=>Lt(m))),n.main.add(p`float patternLength = lineSize * stipplePatternPixelSize;
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
    }`),e.fragment.include(hi,t),e.include(ui,t),a.include(fi),a.main.add(p`discardBySlice(vpos);
discardByTerrainDepth();`),u?a.main.add(p`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(A&&a.main.add(p`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${p.float(ue)}) {
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
      float stippleAlpha = step(${p.float(ue)}, stippleCoverage);
      `):a.main.add(p`float stippleAlpha = getStippleAlpha();`),s!==se.ObjectAndLayerIdColor&&a.main.add(p`discardByStippleAlpha(stippleAlpha, ${p.float(ue)});`),a.uniforms.add(new Ve("intrinsicColor",m=>m.color)),a.main.add(p`vec4 color = intrinsicColor * vColor;`),y&&(a.uniforms.add(new Ve("innerColor",m=>m.innerColor??m.color),new Y("innerWidth",(m,I)=>m.innerWidth*I.camera.pixelRatio)),a.main.add(p`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),a.main.add(p`vec4 finalColor = blendStipple(color, stippleAlpha);`),v&&(a.uniforms.add(new Y("falloff",m=>m.falloff)),a.main.add(p`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),d||a.main.add(p`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`)),a.main.add(p`outputColorHighlightOID(finalColor, vpos);`),e}const Or=Object.freeze(Object.defineProperty({__proto__:null,build:Pt,ribbonlineNumRoundJoinSubdivisions:ve},Symbol.toStringTag,{value:"Module"}));let yr=class extends mi{constructor(e,i){super(e,i,new vi(Or,()=>Xi(()=>Promise.resolve().then(()=>Yr),void 0,import.meta.url)),$t),this.primitiveType=i.wireframe?lt.LINES:lt.TRIANGLE_STRIP}_makePipelineState(e,i){const{oitPass:r,output:n,hasOccludees:a,hasPolygonOffset:l}=e,o=r===et.NONE,s=r===et.FrontFace;return ye({blending:pe(n)?gi(r):null,depthTest:{func:Si(r)},depthWrite:_i(e),drawBuffers:n===se.Depth?{buffers:[Oe.NONE]}:Ti(r,n),colorWrite:we,stencilWrite:a?tt:null,stencilTest:a?i?it:bi:null,polygonOffset:o||s?l?gt:null:Oi})}initializePipeline(e){if(e.occluder){const i=e.hasPolygonOffset?gt:null;this._occluderPipelineTransparent=ye({blending:ct,polygonOffset:i,depthTest:rt,depthWrite:null,colorWrite:we,stencilWrite:null,stencilTest:yi,drawBuffers:e.output===se.Depth?{buffers:[Oe.NONE]}:null}),this._occluderPipelineOpaque=ye({blending:ct,polygonOffset:i,depthTest:rt,depthWrite:null,colorWrite:we,stencilWrite:Ei,stencilTest:Ai,drawBuffers:e.output===se.Depth?{buffers:[Oe.NONE]}:null}),this._occluderPipelineMaskWrite=ye({blending:null,polygonOffset:i,depthTest:Ri,depthWrite:null,colorWrite:null,stencilWrite:tt,stencilTest:it,drawBuffers:e.output===se.Depth?{buffers:[Oe.NONE]}:null})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,i){if(e)return this._occludeePipeline;switch(i){case B.TRANSPARENT_OCCLUDER_MATERIAL:return this._occluderPipelineTransparent??super.getPipeline();case B.OCCLUDER_MATERIAL:return this._occluderPipelineOpaque??super.getPipeline();default:return this._occluderPipelineMaskWrite??super.getPipeline()}}};const gt={factor:0,units:-4},$t=new Map([[h.POSITION,0],[h.PREVPOSITION,1],[h.NEXTPOSITION,2],[h.SUBDIVISIONFACTOR,3],[h.UV0,4],[h.COLOR,5],[h.COLORFEATUREATTRIBUTE,5],[h.SIZE,6],[h.SIZEFEATUREATTRIBUTE,6],[h.OPACITYFEATUREATTRIBUTE,7],[h.OBJECTANDLAYERIDCOLOR,8]]);var U;(function(t){t[t.LEFT_JOIN_START=-2]="LEFT_JOIN_START",t[t.LEFT_JOIN_END=-1]="LEFT_JOIN_END",t[t.LEFT_CAP_START=-4]="LEFT_CAP_START",t[t.LEFT_CAP_END=-5]="LEFT_CAP_END",t[t.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",t[t.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",t[t.RIGHT_CAP_START=4]="RIGHT_CAP_START",t[t.RIGHT_CAP_END=5]="RIGHT_CAP_END"})(U||(U={}));class Er extends xi{constructor(e){super(e,Rr),this._configuration=new E,this.vertexAttributeLocations=$t,this.produces=new Map([[B.OPAQUE_MATERIAL,i=>Gi(i)||pe(i)&&this.parameters.renderOccluded===ne.OccludeAndTransparentStencil],[B.OPAQUE_MATERIAL_WITHOUT_NORMALS,i=>Zi(i)],[B.OCCLUDER_MATERIAL,i=>ot(i)&&this.parameters.renderOccluded===ne.OccludeAndTransparentStencil],[B.TRANSPARENT_OCCLUDER_MATERIAL,i=>ot(i)&&this.parameters.renderOccluded===ne.OccludeAndTransparentStencil],[B.TRANSPARENT_MATERIAL,i=>pe(i)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==ne.OccludeAndTransparentStencil],[B.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,i=>pe(i)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==ne.OccludeAndTransparentStencil],[B.DRAPED_MATERIAL,i=>Yi(i)]])}getConfiguration(e,i){this._configuration.output=e,this._configuration.oitPass=i.oitPass,this._configuration.draped=i.slot===B.DRAPED_MATERIAL;const r=this.parameters.stipplePattern!=null&&e!==se.Highlight;return this._configuration.stippleEnabled=r,this._configuration.stippleOffColorEnabled=r&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=r&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&Cr(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=i.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===ne.OccludeAndTransparentStencil,this._configuration.terrainDepthTest=i.terrainDepthTest&&pe(e),this._configuration.cullAboveTerrain=i.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration}get visible(){return this.parameters.color[3]>=ue||this.parameters.stipplePattern!=null&&(this.parameters.stippleOffColor?.[3]??0)>ue}intersectDraped({attributes:e,screenToWorldRatio:i},r,n,a,l,o){if(!n.options.selectionMode)return;const s=e.get(h.SIZE);let c=this.parameters.width;if(this.parameters.vvSize){const A=e.get(h.SIZEFEATUREATTRIBUTE).data[0];c*=Ie(this.parameters.vvSize.offset[0]+A*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else s&&(c*=s.data[0]);const d=a[0],v=a[1],f=(c/2+4)*i;let u=Number.MAX_VALUE,y=0;const O=e.get(h.POSITION).data,C=He(this.parameters,e)?O.length-2:O.length-5;for(let A=0;A<C;A+=3){const b=O[A],N=O[A+1],T=(A+3)%O.length,m=d-b,I=v-N,g=O[T]-b,Z=O[T+1]-N,L=Ie((g*m+Z*I)/(g*g+Z*Z),0,1),re=g*L-m,P=Z*L-I,q=re*re+P*P;q<u&&(u=q,y=A/3)}u<f*f&&l(o.dist,o.normal,y,!1)}intersect(e,i,r,n,a,l){if(!r.options.selectionMode||!e.visible)return;if(!zi(i))return void bt.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const o=e.attributes,s=o.get(h.POSITION).data;let c=this.parameters.width;if(this.parameters.vvSize){const b=o.get(h.SIZEFEATUREATTRIBUTE).data[0];c*=Ie(this.parameters.vvSize.offset[0]+b*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else o.has(h.SIZE)&&(c*=o.get(h.SIZE).data[0]);const d=r.camera,v=Dr;ki(v,r.point);const f=c*d.pixelRatio/2+4*d.pixelRatio;H(de[0],v[0]-f,v[1]+f,0),H(de[1],v[0]+f,v[1]+f,0),H(de[2],v[0]+f,v[1]-f,0),H(de[3],v[0]-f,v[1]-f,0);for(let b=0;b<4;b++)if(!d.unprojectFromRenderScreen(de[b],G[b]))return;Te(d.eye,G[0],G[1],Ue),Te(d.eye,G[1],G[2],ze),Te(d.eye,G[2],G[3],Fe),Te(d.eye,G[3],G[0],je);let u=Number.MAX_VALUE,y=0;const O=He(this.parameters,o)?s.length-2:s.length-5;for(let b=0;b<O;b+=3){$[0]=s[b]+i[12],$[1]=s[b+1]+i[13],$[2]=s[b+2]+i[14];const N=(b+3)%s.length;if(w[0]=s[N]+i[12],w[1]=s[N+1]+i[13],w[2]=s[N+2]+i[14],W(Ue,$)<0&&W(Ue,w)<0||W(ze,$)<0&&W(ze,w)<0||W(Fe,$)<0&&W(Fe,w)<0||W(je,$)<0&&W(je,w)<0)continue;if(d.projectToRenderScreen($,K),d.projectToRenderScreen(w,ee),K[2]<0&&ee[2]>0){he(V,$,w);const m=d.frustum,I=-W(m[be.NEAR],$)/Qe(V,st(m[be.NEAR]));Pe(V,V,I),xe($,$,V),d.projectToRenderScreen($,K)}else if(K[2]>0&&ee[2]<0){he(V,w,$);const m=d.frustum,I=-W(m[be.NEAR],w)/Qe(V,st(m[be.NEAR]));Pe(V,V,I),xe(w,w,V),d.projectToRenderScreen(w,ee)}else if(K[2]<0&&ee[2]<0)continue;K[2]=0,ee[2]=0;const T=Hi($e(K,ee,Tt),v);T<u&&(u=T,X(St,$),X(_t,w),y=b/3)}const C=r.rayBegin,A=r.rayEnd;if(u<f*f){let b=Number.MAX_VALUE;if(Ji($e(St,_t,Tt),$e(C,A,Lr),Q)){he(Q,Q,C);const N=Zt(Q);Pe(Q,Q,1/N),b=N/Ge(C,A)}l(b,Q,y,!1)}}get _layout(){const e=Fi().vec3f(h.POSITION).vec3f(h.PREVPOSITION).vec3f(h.NEXTPOSITION).f32(h.SUBDIVISIONFACTOR).vec2f(h.UV0);return this.parameters.vvSize?e.f32(h.SIZEFEATUREATTRIBUTE):e.f32(h.SIZE),this.parameters.vvColor?e.f32(h.COLORFEATUREATTRIBUTE):e.vec4f(h.COLOR),this.parameters.vvOpacity&&e.f32(h.OPACITYFEATUREATTRIBUTE),Be()&&e.vec4u8(h.OBJECTANDLAYERIDCOLOR),e}createBufferWriter(){return new xr(this._layout,this.parameters)}createGLMaterial(e){return new Ar(e)}validateParameters(e){e.join!=="miter"&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}}class Ar extends Ci{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){const i=this._material.parameters.stipplePattern;return this._stipplePattern!==i&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(i,this._stipplePattern)}),this._stipplePattern=i),this.getTechnique(yr,e)}}class Rr extends Di{constructor(){super(...arguments),this.width=0,this.color=qt,this.join="miter",this.cap=ie.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1}get transparent(){return this.color[3]<1||this.stipplePattern!=null&&(this.stippleOffColor?.[3]??0)<1}}class xr{constructor(e,i){this.vertexBufferLayout=e,this._parameters=i,this.numJoinSubdivisions=0;const r=i.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=r;break;case"round":this.numJoinSubdivisions=ve+r}}_isClosed(e){return He(this._parameters,e)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const r=e.get(h.POSITION).indices.length/2+1,n=this._isClosed(e);let a=n?2:2*2;return a+=((n?r:r-1)-(n?0:1))*(2*this.numJoinSubdivisions+4),a+=2,this._parameters.wireframe&&(a=2+4*(a-2)),a}write(e,i,r,n,a,l){const o=Ir,s=Pr,c=$r,d=r.get(h.POSITION),v=d.indices,f=d.data.length/3,u=r.get(h.DISTANCETOSTART)?.data;v&&v.length!==2*(f-1)&&console.warn("RibbonLineMaterial does not support indices");const y=r.get(h.SIZEFEATUREATTRIBUTE)?.data[0]??r.get(h.SIZE)?.data[0]??1;let O=[1,1,1,1],C=0;const A=this.vertexBufferLayout.fields.has(h.COLORFEATUREATTRIBUTE);A?C=r.get(h.COLORFEATUREATTRIBUTE).data[0]:r.has(h.COLOR)&&(O=r.get(h.COLOR).data);const b=this.vertexBufferLayout.fields.has(h.OPACITYFEATUREATTRIBUTE),N=b?r.get(h.OPACITYFEATUREATTRIBUTE).data[0]:0,T=new Float32Array(a.buffer),m=Be()?new Uint8Array(a.buffer):null,I=this.vertexBufferLayout.stride/4;let g=l*I;const Z=g;let L=0;const re=u?(R,M,J)=>L=u[J]:(R,M,J)=>L+=Ge(R,M),P=(R,M,J,ce,ge,Ft,jt)=>{if(T[g++]=M[0],T[g++]=M[1],T[g++]=M[2],T[g++]=R[0],T[g++]=R[1],T[g++]=R[2],T[g++]=J[0],T[g++]=J[1],T[g++]=J[2],T[g++]=ce,T[g++]=jt,T[g++]=ge,T[g++]=y,A)T[g++]=C;else{const Se=Math.min(4*Ft,O.length-4);T[g++]=O[Se],T[g++]=O[Se+1],T[g++]=O[Se+2],T[g++]=O[Se+3]}b&&(T[g++]=N),Be()&&(n&&(m[4*g]=n[0],m[4*g+1]=n[1],m[4*g+2]=n[2],m[4*g+3]=n[3]),g++)};g+=I,H(s,d.data[0],d.data[1],d.data[2]),e&&k(s,s,e);const q=this._isClosed(r);if(q){const R=d.data.length-3;H(o,d.data[R],d.data[R+1],d.data[R+2]),e&&k(o,o,e)}else H(c,d.data[3],d.data[4],d.data[5]),e&&k(c,c,e),P(s,s,c,1,U.LEFT_CAP_START,0,0),P(s,s,c,1,U.RIGHT_CAP_START,0,0),X(o,s),X(s,c);const Le=q?0:1,le=q?f:f-1;for(let R=Le;R<le;R++){const M=(R+1)%f*3;H(c,d.data[M],d.data[M+1],d.data[M+2]),e&&k(c,c,e),re(o,s,R),P(o,s,c,0,U.LEFT_JOIN_END,R,L),P(o,s,c,0,U.RIGHT_JOIN_END,R,L);const J=this.numJoinSubdivisions;for(let ce=0;ce<J;++ce){const ge=(ce+1)/(J+1);P(o,s,c,ge,U.LEFT_JOIN_END,R,L),P(o,s,c,ge,U.RIGHT_JOIN_END,R,L)}P(o,s,c,1,U.LEFT_JOIN_START,R,L),P(o,s,c,1,U.RIGHT_JOIN_START,R,L),X(o,s),X(s,c)}q?(H(c,d.data[3],d.data[4],d.data[5]),e&&k(c,c,e),L=re(o,s,le),P(o,s,c,0,U.LEFT_JOIN_END,Le,L),P(o,s,c,0,U.RIGHT_JOIN_END,Le,L)):(L=re(o,s,le),P(o,s,s,0,U.LEFT_CAP_END,le,L),P(o,s,s,0,U.RIGHT_CAP_END,le,L)),Ne(T,Z+I,T,Z,I),g=Ne(T,g-I,T,g,I),this._parameters.wireframe&&this._addWireframeVertices(a,Z,g,I)}_addWireframeVertices(e,i,r,n){const a=new Float32Array(e.buffer,r*Float32Array.BYTES_PER_ELEMENT),l=new Float32Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT,r-i);let o=0;const s=c=>o=Ne(l,c,a,o,n);for(let c=0;c<l.length-1;c+=2*n)s(c),s(c+2*n),s(c+1*n),s(c+2*n),s(c+1*n),s(c+3*n)}}function Ne(t,e,i,r,n){for(let a=0;a<n;a++)i[r++]=t[e++];return r}function He(t,e){return t.isClosed?e.get(h.POSITION).indices.length>2:!1}function Cr(t){return t.anchor===me.Tip&&t.hideOnShortSegments&&t.placement==="begin-end"&&t.worldSpace}const $=x(),w=x(),V=x(),Q=x(),Dr=x(),K=ae(),ee=ae(),St=x(),_t=x(),Tt=xt(),Lr=xt(),Ir=x(),Pr=x(),$r=x(),de=[ae(),ae(),ae(),ae()],G=[x(),x(),x(),x()],Ue=De(),ze=De(),Fe=De(),je=De();class Nn{constructor(e){this._originSR=e,this._rootOriginId="root/"+Bt(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5}getOrigin(e){const i=this._origins.get(this._rootOriginId);if(i==null){const d=mt(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,d),d}const r=this._gridSize,n=Math.round(e[0]/r),a=Math.round(e[1]/r),l=Math.round(e[2]/r),o=`${n}/${a}/${l}`;let s=this._origins.get(o);const c=.5*r;if(he(D,e,i.vec3),D[0]=Math.abs(D[0]),D[1]=Math.abs(D[1]),D[2]=Math.abs(D[2]),D[0]<c&&D[1]<c&&D[2]<c){if(s){const d=Math.max(...D);if(he(D,e,s.vec3),D[0]=Math.abs(D[0]),D[1]=Math.abs(D[1]),D[2]=Math.abs(D[2]),Math.max(...D)<d)return s}return i}return s||(s=mt(n*r,a*r,l*r,o),this._origins.set(o,s)),s}_drawOriginBox(e,i=Qt(1,1,0,1)){const r=window.view,n=r._stage,a=i.toString();if(!this._objects.has(a)){this._material=new Er({width:2,color:i}),n.add(this._material);const u=new lr(n,{pickable:!1}),y=new nr({castShadow:!1});n.add(y),u.add(y),this._objects.set(a,y)}const l=this._objects.get(a),o=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],s=o.length,c=new Array(3*s),d=new Array,v=.5*this._gridSize;for(let u=0;u<s;u++)c[3*u]=e[0]+(1&o[u]?v:-v),c[3*u+1]=e[1]+(2&o[u]?v:-v),c[3*u+2]=e[2]+(4&o[u]?v:-v),u>0&&d.push(u-1,u);We(c,this._originSR,0,c,r.renderSpatialReference,0,s);const f=new Li(this._material,[[h.POSITION,new Kt(c,d,3,!0)]],null,Ze.Line);n.add(f),l.addGeometry(f)}get test(){}}const D=x();class Un{constructor(e,i=null,r=0){this.array=e,this.spatialReference=i,this.offset=r}}function wt(t){return"array"in t}function Ee(t,e,i="ground"){if(Rt(e))return t.getElevation(e.x,e.y,e.z||0,e.spatialReference,i);if(wt(e)){let r=e.offset;return t.getElevation(e.array[r++],e.array[r++],e.array[r]||0,e.spatialReference??t.spatialReference,i)}return t.getElevation(e[0],e[1],e[2]||0,t.spatialReference,i)}function zn(t,e,i,r,n,a,l,o,s,c,d){const v=Wr[d.mode];let f,u,y=0;if(We(t,e,i,r,s.spatialReference,n,o))return v?.requiresAlignment(d)?(y=v.applyElevationAlignmentBuffer(r,n,a,l,o,s,c,d),f=a,u=l):(f=r,u=n),We(f,s.spatialReference,u,a,c.spatialReference,l,o)?y:void 0}function Nt(t,e,i,r,n){const a=(Rt(t)?t.z:wt(t)?t.array[t.offset+2]:t[2])||0;switch(i.mode){case"on-the-ground":{const l=Ee(e,t,"ground")??0;return n.verticalDistanceToGround=0,n.sampledElevation=l,void(n.z=l)}case"relative-to-ground":{const l=Ee(e,t,"ground")??0,o=i.geometryZWithOffset(a,r);return n.verticalDistanceToGround=o,n.sampledElevation=l,void(n.z=o+l)}case"relative-to-scene":{const l=Ee(e,t,"scene")??0,o=i.geometryZWithOffset(a,r);return n.verticalDistanceToGround=o,n.sampledElevation=l,void(n.z=o+l)}case"absolute-height":{const l=i.geometryZWithOffset(a,r),o=Ee(e,t,"ground")??0;return n.verticalDistanceToGround=l-o,n.sampledElevation=o,void(n.z=l)}default:return void(n.z=0)}}function Fn(t,e,i,r){return Nt(t,e,i,r,oe),oe.z}function jn(t,e,i){return e==="on-the-ground"&&i==="on-the-ground"?t.staysOnTheGround:e===i||e!=="on-the-ground"&&i!=="on-the-ground"?e==null||i==null?t.definedChanged:Je.UPDATE:t.onTheGroundChanged}function Mn(t){return t==="relative-to-ground"||t==="relative-to-scene"}function Wn(t){return t!=="absolute-height"}function Vn(t,e,i,r,n){Nt(e,i,n,r,oe),wr(t,oe.verticalDistanceToGround);const a=oe.sampledElevation,l=ke(Vr,t.transformation);return Ae[0]=e.x,Ae[1]=e.y,Ae[2]=oe.z,qi(e.spatialReference,Ae,l,r.spatialReference)?t.transformation=l:console.warn("Could not locate symbol object properly, it might be misplaced"),a}function wr(t,e){for(let i=0;i<t.geometries.length;++i){const r=t.geometries[i].getMutableAttribute(h.CENTEROFFSETANDDISTANCE);r&&r.data[3]!==e&&(r.data[3]=e,t.geometryVertexAttributeUpdated(t.geometries[i],h.CENTEROFFSETANDDISTANCE))}}function Nr(t,e,i,r,n,a){let l=0;const o=a.spatialReference;e*=3,r*=3;for(let s=0;s<n;++s){const c=t[e],d=t[e+1],v=t[e+2],f=a.getElevation(c,d,v,o,"ground")??0;l+=f,i[r]=c,i[r+1]=d,i[r+2]=f,e+=3,r+=3}return l/n}function Ur(t,e,i,r,n,a,l,o){let s=0;const c=o.calculateOffsetRenderUnits(l),d=o.featureExpressionInfoContext,v=a.spatialReference;e*=3,r*=3;for(let f=0;f<n;++f){const u=t[e],y=t[e+1],O=t[e+2],C=a.getElevation(u,y,O,v,"ground")??0;s+=C,i[r]=u,i[r+1]=y,i[r+2]=d==null?O+C+c:C+c,e+=3,r+=3}return s/n}function zr(t,e,i,r,n,a,l,o){let s=0;const c=o.calculateOffsetRenderUnits(l),d=o.featureExpressionInfoContext,v=a.spatialReference;e*=3,r*=3;for(let f=0;f<n;++f){const u=t[e],y=t[e+1],O=t[e+2],C=a.getElevation(u,y,O,v,"scene")??0;s+=C,i[r]=u,i[r+1]=y,i[r+2]=d==null?O+C+c:C+c,e+=3,r+=3}return s/n}function Fr(t){const e=t.meterUnitOffset,i=t.featureExpressionInfoContext;return e!==0||i!=null}function jr(t,e,i,r,n,a,l,o){const s=o.calculateOffsetRenderUnits(l),c=o.featureExpressionInfoContext;e*=3,r*=3;for(let d=0;d<n;++d){const v=t[e],f=t[e+1],u=t[e+2];i[r]=v,i[r+1]=f,i[r+2]=c==null?u+s:s,e+=3,r+=3}return 0}class Mr{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}var Je;(function(t){t[t.NONE=0]="NONE",t[t.UPDATE=1]="UPDATE",t[t.RECREATE=2]="RECREATE"})(Je||(Je={}));const Wr={"absolute-height":{applyElevationAlignmentBuffer:jr,requiresAlignment:Fr},"on-the-ground":{applyElevationAlignmentBuffer:Nr,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:Ur,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:zr,requiresAlignment:()=>!0}},Vr=Re(),oe=new Mr,Ae=x(),Br=()=>bt.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function kr(t){return{cachedResult:t.cachedResult,arcade:t.arcade?{func:t.arcade.func,context:t.arcade.modules.arcadeUtils.createExecContext(null,{sr:t.arcade.context.spatialReference}),modules:t.arcade.modules}:null}}async function Bn(t,e,i,r){const n=t?.expression;if(typeof n!="string")return null;const a=Zr(n);if(a!=null)return{cachedResult:a};const l=await kt();Ht(i);const o=l.arcadeUtils,s=o.createSyntaxTree(n);return o.dependsOnView(s)?(r?.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:o.createFunction(s),context:o.createExecContext(null,{sr:e}),modules:l}}}function Hr(t,e,i){return t.arcadeUtils.createFeature(e.attributes,e.geometry,i)}function Jr(t,e){if(t!=null&&!Ut(t)){if(!e||!t.arcade)return void Br().errorOncePerTick("Arcade support required but not provided");const i=e;i._geometry&&(i._geometry=er(i._geometry)),t.arcade.modules.arcadeUtils.updateExecContext(t.arcade.context,e)}}function Gr(t){if(t!=null){if(Ut(t))return t.cachedResult;const e=t.arcade;let i=e?.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof i!="number"&&(t.cachedResult=0,i=0),i}return 0}function kn(t,e=!1){let i=t?.featureExpressionInfo;const r=i?.expression;return e||r==="0"||(i=null),i??null}const Hn={cachedResult:0};function Ut(t){return t.cachedResult!=null}function Zr(t){return t==="0"?0:null}class zt{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=Qi(e)}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,i){const r=this.calculateOffsetRenderUnits(i);return this.featureExpressionInfoContext!=null?r:e+r}calculateOffsetRenderUnits(e){let i=this._meterUnitOffset;const r=this.featureExpressionInfoContext;return r!=null&&(i+=Gr(r)*this._metersPerElevationInfoUnit),i/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=Ki(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}updateFeatureExpressionInfoContext(e,i,r){if(e==null)return void(this._featureExpressionInfoContext=null);const n=e?.arcade;n&&i!=null&&r!=null?(this._featureExpressionInfoContext=kr(e),Jr(this._featureExpressionInfoContext,Hr(n.modules,i,r))):this._featureExpressionInfoContext=e}static fromElevationInfo(e){const i=new zt;return e!=null&&i.setFromElevationInfo(e),i}}const Yr=Object.freeze(Object.defineProperty({__proto__:null,build:Pt,ribbonlineNumRoundJoinSubdivisions:ve},Symbol.toStringTag,{value:"Module"}));export{nr as A,Pn as B,Ce as C,F as D,wr as E,Fn as F,Ee as G,Mr as R,Er as W,Nn as _,ht as a,pt as b,Bn as c,kn as d,dt as e,Nt as f,Hn as g,Je as h,Mn as i,lr as j,Wn as k,Jr as l,jn as m,ie as n,zt as o,Vn as p,te as q,Un as r,Hr as s,mt as t,zn as u,dr as v,br as w,me as x,It as y,Sr as z};
