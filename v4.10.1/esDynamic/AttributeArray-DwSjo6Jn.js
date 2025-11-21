import{c0 as Br,a$ as Gi,k as m,o as z,A as Jt,aD as zr,aA as y,fH as Vi,iK as Hi,aP as Zt,cZ as Gr,bX as Vr,cF as At,cp as Ct,fI as He,fK as at,aE as Hr,cR as Ui,s as ve,n as Ur,cP as wt,g1 as Oe,aO as ji,eK as Wi,bP as $i,dp as jr,fd as qi,cj as nt,eL as st,D as Wr,jI as ki,aK as Yi,aN as Xi,aJ as Ji,bO as Zi,jJ as Ki,jK as Qi,cv as ea,b$ as ta,ck as ra}from"./main-Dv0FawL-.js";import{t as oa}from"./requestImageUtils-CFIAcNBp.js";import{s as ge,i as xe,a as Kt,O as Qt,e as lt,n as Mt,u as Ue}from"./basicInterfaces-Dsf65ICa.js";import{E as ia,R as Ot,O as de,X as ye,I as ie,D as ct,G as Re,t as aa,_ as na,f as sa,c as me,L as je}from"./enums-DBi1-Mm2.js";import{b as la,p as $r,m as We,a as ca}from"./Texture-Bga4WBjE.js";import{s as j}from"./Util-BjGjeg6f.js";import{r as _e,o as Y,q as $e,E as dt,H as qr,u as da,c as ut,R as qe,s as yt,_ as kr,A as er,g as Yr,P as ua,N as ha,I as Xr,v as ma}from"./vec32-BQh4ekea.js";import{l as tr}from"./ViewingMode-CyR_b1T8.js";import{H as fa}from"./InterleavedLayout-CScHn4Rg.js";import{n as fe,a as Q,t as Rt,S as Jr,b as F,u as ht,c as Zr,o as rr,r as pa}from"./NormalAttribute.glsl-B0_K7WX7.js";import{n as It}from"./compilerUtils-BPRaTdzq.js";import{o as s,t as ke,r as R}from"./interfaces-DN2-jsJC.js";import{e as p}from"./VertexAttribute-DqD5S0a2.js";import{a as I}from"./BindType-9iOk18Ed.js";import{o as Te}from"./AlphaCutoff-ZPx1GqOi.js";import"./boundedPlane-MEoUUTpl.js";import{E as Kr,U as be}from"./sphere-C7aIPEb1.js";import{B as Lt,o as va,g as Nt,r as ga,c as xa,p as _a,f as Ta}from"./renderState-Dap0WV9P.js";import{j as ba}from"./mat3-CC4Foazl.js";import{e as mt,o as Ye}from"./mat3f64-Dh9_zhFu.js";import{i as or,H as Qr,G as eo}from"./mat4-keCyYikV.js";import{e as ir,o as to}from"./mat4f64-Dn1WEGBx.js";import{I as Ea,L as Sa}from"./orientedBoundingBox-cniBrod5.js";import{x as ro,c as oo,y as Aa,u as Ca,q as wa,i as io}from"./BufferView-BZEiXQYu.js";import{n as Pt,r as Ma}from"./vec4f64-hf2nxvhQ.js";import{o as Oa,r as ya}from"./doublePrecisionUtils-BJbYwoii.js";import{s as ae}from"./vec42-D8CJyqHG.js";import"./lengthUtils-C-FMNsA9.js";import{l as Ra,n as Dt}from"./vec2f64-CeODonrJ.js";import{o as Ie}from"./vec2-tHZ6OaOy.js";import"./projectBuffer-keAXlkbN.js";function Ia(e,t=!1){return e<=Br?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}function La(e){e.vertex.code.add(s`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${s.int(fe.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${s.int(fe.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${s.int(fe.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${s.int(fe.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}let X=class{constructor(e,t,r,o,i=null){if(this.name=e,this.type=t,this.arraySize=i,this.bind={[I.Pass]:null,[I.Draw]:null},o)switch(r){case I.Pass:this.bind[I.Pass]=o;break;case I.Draw:this.bind[I.Draw]=o}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},ft=class extends X{constructor(e,t){super(e,"sampler2D",I.Draw,(r,o,i)=>r.bindTexture(e,t(o,i)))}};function ao(){return!!Gi("enable-feature:objectAndLayerId-rendering")}function no({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(s`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(s`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}let le=class extends X{constructor(e,t){super(e,"vec3",I.Draw,(r,o,i,a)=>r.setUniform3fv(e,t(o,i,a)))}},q=class extends X{constructor(e,t){super(e,"vec3",I.Pass,(r,o,i)=>r.setUniform3fv(e,t(o,i)))}},re=class extends X{constructor(e,t){super(e,"float",I.Pass,(r,o,i)=>r.setUniform1f(e,t(o,i)))}},so=class extends X{constructor(e,t){super(e,"mat3",I.Draw,(r,o,i)=>r.setUniformMatrix3fv(e,t(o,i)))}},ue=class extends X{constructor(e,t){super(e,"mat3",I.Pass,(r,o,i)=>r.setUniformMatrix3fv(e,t(o,i)))}},Xe=class extends X{constructor(e,t){super(e,"mat4",I.Pass,(r,o,i)=>r.setUniformMatrix4fv(e,t(o,i)))}},U=class extends zr{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};m([z()],U.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),m([z()],U.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),m([z()],U.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),m([z()],U.prototype,"DECONFLICTOR_SHOW_GRID",void 0),m([z()],U.prototype,"LABELS_SHOW_BORDER",void 0),m([z()],U.prototype,"TEXT_SHOW_BASELINE",void 0),m([z()],U.prototype,"TEXT_SHOW_BORDER",void 0),m([z()],U.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),m([z()],U.prototype,"OVERLAY_SHOW_CENTER",void 0),m([z()],U.prototype,"SHOW_POI",void 0),m([z()],U.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),m([z()],U.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),m([z()],U.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),m([z()],U.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),m([z()],U.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),m([z()],U.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),m([z()],U.prototype,"I3S_TREE_SHOW_TILES",void 0),m([z()],U.prototype,"I3S_SHOW_MODIFICATIONS",void 0),m([z()],U.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),m([z()],U.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),m([z()],U.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),m([z()],U.prototype,"LINE_WIREFRAMES",void 0),U=m([Jt("esri.views.3d.support.debugFlags")],U);const Na=new U;var Je;(function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_MATERIAL_WITHOUT_NORMALS=3]="OPAQUE_MATERIAL_WITHOUT_NORMALS",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_MATERIAL_WITHOUT_NORMALS=5]="TRANSPARENT_MATERIAL_WITHOUT_NORMALS",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_MATERIAL_WITHOUT_DEPTH=7]="TRANSPARENT_MATERIAL_WITHOUT_DEPTH",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.HUD_MATERIAL=12]="HUD_MATERIAL",e[e.LABEL_MATERIAL=13]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=14]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=15]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=16]="DRAPED_MATERIAL",e[e.DRAPED_WATER=17]="DRAPED_WATER",e[e.VOXEL=18]="VOXEL",e[e.MAX_SLOTS=19]="MAX_SLOTS"})(Je||(Je={}));function ar(e){e.attributes.add(p.POSITION,"vec3"),e.vertex.code.add(s`vec3 positionModel() { return position; }`)}function Pa(e,t){e.include(ar);const r=e.vertex;r.include(no,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new q("transformWorldFromViewTH",o=>o.transformWorldFromViewTH),new q("transformWorldFromViewTL",o=>o.transformWorldFromViewTL),new ue("transformViewFromCameraRelativeRS",o=>o.transformViewFromCameraRelativeRS),new Xe("transformProjFromView",o=>o.transformProjFromView),new so("transformWorldFromModelRS",o=>o.transformWorldFromModelRS),new le("transformWorldFromModelTH",o=>o.transformWorldFromModelTH),new le("transformWorldFromModelTL",o=>o.transformWorldFromModelTL)),r.code.add(s`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(s`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?s`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:s`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new q("transformWorldFromViewTL",o=>o.transformWorldFromViewTL)),r.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}let Da=class extends ke{constructor(){super(...arguments),this.transformWorldFromViewTH=y(),this.transformWorldFromViewTL=y(),this.transformViewFromCameraRelativeRS=mt(),this.transformProjFromView=ir()}},Fa=class extends ke{constructor(){super(...arguments),this.transformWorldFromModelRS=mt(),this.transformWorldFromModelTH=y(),this.transformWorldFromModelTL=y()}};function lo(e,t){switch(t.normalType){case Q.Attribute:case Q.Compressed:e.include(Rt,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new so("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new ue("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)),e.vertex.code.add(s`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case Q.ScreenDerivative:e.vertex.code.add(s`void forwardNormal() {}`);break;default:It(t.normalType);case Q.COUNT:}}let Ba=class extends Da{constructor(){super(...arguments),this.transformNormalViewFromGlobal=mt()}},co=class extends Fa{constructor(){super(...arguments),this.transformNormalGlobalFromModel=mt(),this.toMapSpace=Pt()}};const nr=new Map([[p.POSITION,0],[p.NORMAL,1],[p.NORMALCOMPRESSED,1],[p.UV0,2],[p.COLOR,3],[p.COLORFEATUREATTRIBUTE,3],[p.SIZE,4],[p.TANGENT,4],[p.CENTEROFFSETANDDISTANCE,5],[p.SYMBOLCOLOR,5],[p.FEATUREATTRIBUTE,6],[p.INSTANCEFEATUREATTRIBUTE,6],[p.INSTANCECOLOR,7],[p.OBJECTANDLAYERIDCOLOR,7],[p.INSTANCEOBJECTANDLAYERIDCOLOR,7],[p.ROTATION,8],[p.INSTANCEMODEL,8],[p.INSTANCEMODELNORMAL,12],[p.INSTANCEMODELORIGINHI,11],[p.INSTANCEMODELORIGINLO,15]]);let sr=class{constructor(){this.id=Vi()}},za=class{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=y(),this._tmpMbs=Kr(),this._tmpObb=new Ea,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=_e(e)}applyToVertex(e,t,r){const o=Y(ho,e,t,r),i=Y(Ha,e,t,r+this.componentLocalOriginLength),a=this._totalOffset/_e(i);return $e(this._tmpVertex,o,i,a),this._tmpVertex}applyToAabb(e){const t=this.componentLocalOriginLength,r=e[0],o=e[1],i=e[2]+t,a=e[3],n=e[4],l=e[5]+t,c=Math.abs(r),u=Math.abs(o),d=Math.abs(i),h=Math.abs(a),v=Math.abs(n),f=Math.abs(l),T=.5*(1+Math.sign(r*a))*Math.min(c,h),_=.5*(1+Math.sign(o*n))*Math.min(u,v),x=.5*(1+Math.sign(i*l))*Math.min(d,f),V=Math.max(c,h),D=Math.max(u,v),B=Math.max(d,f),P=Math.sqrt(T*T+_*_+x*x),G=Math.sign(c+r),w=Math.sign(u+o),S=Math.sign(d+i),E=Math.sign(h+a),M=Math.sign(v+n),O=Math.sign(f+l),g=this._totalOffset;if(P<g)return e[0]-=(1-G)*g,e[1]-=(1-w)*g,e[2]-=(1-S)*g,e[3]+=E*g,e[4]+=M*g,e[5]+=O*g,e;const L=g/Math.sqrt(V*V+D*D+B*B),C=g/P,H=C-L,$=-H;return e[0]+=r*(G*$+C),e[1]+=o*(w*$+C),e[2]+=i*(S*$+C),e[3]+=a*(E*H+L),e[4]+=n*(M*H+L),e[5]+=l*(O*H+L),e}applyToMbs(e){const t=_e(be(e)),r=this._totalOffset/t;return $e(be(this._tmpMbs),be(e),be(e),r),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/t,this._tmpMbs}applyToObb(e){return Sa(e,this._totalOffset,this._totalOffset,tr.Global,this._tmpObb),this._tmpObb}},Ga=class{constructor(e=0){this.offset=e,this.sphere=Kr(),this.tmpVertex=y()}applyToVertex(e,t,r){const o=this.objectTransform.transform,i=Y(ho,e,t,r),a=dt(i,i,o),n=this.offset/_e(a);$e(a,a,a,n);const l=this.objectTransform.inverse;return dt(this.tmpVertex,a,l),this.tmpVertex}applyToMinMax(e,t){const r=this.offset/_e(e);$e(e,e,e,r);const o=this.offset/_e(t);$e(t,t,t,o)}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=_e(be(e)),r=this.offset/t;return $e(be(this.sphere),be(e),be(e),r),this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};const uo=new Ga;function Va(e){return e!=null?(uo.offset=e,uo):null}new za;const ho=y(),Ha=y();function Ua(e){return Math.abs(e*e*e)}function mo(e,t,r){const o=r.parameters;return cr.scale=Math.min(o.divisor/(t-o.offset),1),cr.factor=Ua(e),cr}function lr(e,t){return Hi(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}function ja(e,t,r){const o=mo(e,t,r);return o.minScaleFactor=0,lr(1,o)}function Wa(e,t,r,o){o.scale=ja(e,t,r),o.factor=0,o.minScaleFactor=r.minScaleFactor}function $a(e,t,r=[0,0]){const o=Math.min(Math.max(t.scale,t.minScaleFactor),1);return r[0]=e[0]*o,r[1]=e[1]*o,r}function qa(e,t,r,o){return lr(e,mo(t,r,o))}const cr={scale:0,factor:0,minScaleFactor:0};function fo(e,t,r,o,i){let a=(r.screenLength||0)*e.pixelRatio;i!=null&&(a=qa(a,o,t,i));const n=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return Zt(n*t,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function po(e,t){let r=!1;for(const o in t){const i=t[o];i!==void 0&&(Array.isArray(i)?Array.isArray(e[o])&&Gr(i,e[o])||(e[o]=i.slice(),r=!0):e[o]!==i&&(r=!0,e[o]=i))}return r}const vo={multiply:1,ignore:2,replace:3,tint:4};let pt=class{constructor(e,t){this._module=e,this._load=t}get(){return this._module}async reload(){return this._module=await this._load(),this._module}},go=class{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new Vr({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBindPass(this),this.bindDraw=t.generateBindDraw(this),this._fragmentUniforms=la()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform2iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(t?.glName==null){const o=this._textures.get(e);return o&&(this._context.bindTexture(null,o.unit),this._freeTextureUnit(o),this._textures.delete(e)),null}let r=this._textures.get(e);return r==null?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)}),this._fragmentUniforms?.forEach(e=>{e.type!=="sampler2D"&&e.type!=="samplerCube"||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}},Ft=class{constructor(e,t,r,o,i=nr){this.release=o,this.locations=i,this.primitiveType=ia.TRIANGLES,this.key=t.key,this._program=new go(e.rctx,r.get().build(t),i),this._pipeline=this.initializePipeline(t),this.reload=async a=>{if(a&&await r.reload(),!this.key.equals(t.key))throw new Error("Configuration was changed after construction, cannot reload shader");At(this._program),this._program=new go(e.rctx,r.get().build(t),i),this._pipeline=this.initializePipeline(t)}}destroy(){this._program=At(this._program),this._pipeline=null}get program(){return this._program}get compiled(){return this.program.compiled}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}getPipeline(e,t){return this._pipeline}initializePipeline(e){return Lt({blending:va,colorWrite:Nt})}};var Ze;(function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"})(Ze||(Ze={}));let xo=class extends sr{constructor(e,t){super(),this.type=Ze.Material,this.supportsEdges=!1,this._renderPriority=0,this.vertexAttributeLocations=nr,this._pp0=Ct(0,0,1),this._pp1=Ct(0,0,0),this._parameters=new t,po(this._parameters,e),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){po(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this._parametersChanged())}validateParameters(e){}shouldRender(e){return this.visible&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bind.decorations)&&!!(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this._parametersChanged())}_parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(e){return this.visible&&this.parameters.renderOccluded===e}get hasEmissions(){return!1}intersectDraped(e,t,r,o,i,a){return this._pp0[0]=this._pp1[0]=o[0],this._pp0[1]=this._pp1[1]=o[1],this.intersect(e,t,r,this._pp0,this._pp1,i)}};var Bt;(function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"})(Bt||(Bt={}));var k;(function(e){e[e.NONE=0]="NONE",e[e.ColorAlpha=1]="ColorAlpha",e[e.FrontFace=2]="FrontFace",e[e.COUNT=3]="COUNT"})(k||(k={}));const _o=ga(Ot.ONE,Ot.ZERO,Ot.ONE,Ot.ONE_MINUS_SRC_ALPHA);function ka(e){return e===k.FrontFace?null:_o}function Ya(e){switch(e){case k.NONE:return xa;case k.ColorAlpha:return _o;case k.FrontFace:case k.COUNT:return null}}function Xa(e){if(e.draped)return null;switch(e.oitPass){case k.NONE:case k.FrontFace:return e.writeDepth?_a:null;case k.ColorAlpha:case k.COUNT:return null}}const Ja=5e5,Za={factor:-1,units:-2};function Ka(e){return e?Za:null}function Qa(e,t=de.LESS){return e===k.NONE||e===k.FrontFace?t:de.LEQUAL}function To(e,t){const r=Jr(t);return e===k.ColorAlpha?r?{buffers:[ye.COLOR_ATTACHMENT0,ye.COLOR_ATTACHMENT1,ye.COLOR_ATTACHMENT2]}:{buffers:[ye.COLOR_ATTACHMENT0,ye.COLOR_ATTACHMENT1]}:r?{buffers:[ye.COLOR_ATTACHMENT0,ye.COLOR_ATTACHMENT1]}:null}de.LESS,de.ALWAYS;const en={mask:255},tn={function:{func:de.ALWAYS,ref:ge.OutlineVisualElementMask,mask:ge.OutlineVisualElementMask},operation:{fail:ie.KEEP,zFail:ie.KEEP,zPass:ie.ZERO}},rn={function:{func:de.ALWAYS,ref:ge.OutlineVisualElementMask,mask:ge.OutlineVisualElementMask},operation:{fail:ie.KEEP,zFail:ie.KEEP,zPass:ie.REPLACE}};de.EQUAL,ge.OutlineVisualElementMask,ge.OutlineVisualElementMask,ie.KEEP,ie.KEEP,ie.KEEP,de.NOTEQUAL,ge.OutlineVisualElementMask,ge.OutlineVisualElementMask,ie.KEEP,ie.KEEP,ie.KEEP;function on({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:o,emissiveTexture:i,emissiveFactor:a,occlusionTexture:n}){return e==null&&t==null&&i==null&&(a==null||qr(a,He))&&n==null&&(o==null||o===1)&&(r==null||r===1)}const bo=at(1,1,.5),an=at(0,.6,.2),nn=at(0,1,.2);let Le=class extends X{constructor(e,t){super(e,"vec2",I.Pass,(r,o,i)=>r.setUniform2fv(e,t(o,i)))}};function Eo(e){e.varyings.add("linearDepth","float")}function So(e){e.vertex.uniforms.add(new Le("nearFar",(t,r)=>r.camera.nearFar))}function Ao(e){e.vertex.code.add(s`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function Co(e,t){const{vertex:r}=e;switch(t.output){case F.Color:case F.ColorEmission:if(t.receiveShadows)return Eo(e),void r.code.add(s`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case F.Shadow:case F.ShadowHighlight:case F.ShadowExcludeHighlight:case F.ViewshedShadow:return e.include(Pa,t),Eo(e),So(e),Ao(e),void r.code.add(s`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(s`void forwardLinearDepth() {}`)}function wo(e){e.vertex.code.add(s`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Ne(e,t){sn(e,t,new le("slicePlaneOrigin",(r,o)=>ln(t,r,o)),new le("slicePlaneBasis1",(r,o)=>Ro(t,r,o,o.slicePlane?.basis1)),new le("slicePlaneBasis2",(r,o)=>Ro(t,r,o,o.slicePlane?.basis2)))}function sn(e,t,...r){if(!t.hasSlicePlane){const n=s`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(n),void e.fragment.code.add(n)}const o=s`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=s`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,a=t.hasSliceHighlight?s`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:s`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r).code.add(o),e.fragment.uniforms.add(...r).code.add(o),e.fragment.code.add(a)}function Mo(e,t,r){return e.instancedDoublePrecision?Y(cn,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function Oo(e,t){return e!=null?ut(zt,t.origin,e):t.origin}function yo(e,t,r){return e.hasSliceTranslatedView?t!=null?or(dn,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function ln(e,t,r){if(r.slicePlane==null)return He;const o=Mo(e,t,r),i=Oo(o,r.slicePlane),a=yo(e,o,r);return a!=null?dt(zt,i,a):i}function Ro(e,t,r,o){if(o==null||r.slicePlane==null)return He;const i=Mo(e,t,r),a=Oo(i,r.slicePlane),n=yo(e,i,r);return n!=null?(da(vt,o,a),dt(zt,a,n),dt(vt,vt,n),ut(vt,vt,zt)):o}const cn=y(),zt=y(),vt=y(),dn=ir();function Ke(e){Ao(e),e.vertex.code.add(s`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(s`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}let un=class extends X{constructor(e,t){super(e,"mat4",I.Draw,(r,o,i)=>r.setUniformMatrix4fv(e,t(o,i)))}};function Qe(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",He):e.uniforms.add(new le("cameraPosition",(r,o)=>Y(Lo,o.camera.viewInverseTransposeMatrix[3]-r.origin[0],o.camera.viewInverseTransposeMatrix[7]-r.origin[1],o.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function Pe(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new Xe("proj",(o,i)=>i.camera.projectionMatrix),new un("view",(o,i)=>or(Io,i.camera.viewMatrix,o.origin)),new le("localOrigin",o=>o.origin));const r=o=>Y(Lo,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new Xe("proj",(o,i)=>i.camera.projectionMatrix),new Xe("view",(o,i)=>or(Io,i.camera.viewMatrix,r(i))),new q("localOrigin",(o,i)=>r(i)))}const Io=ir(),Lo=y();function No(e){e.uniforms.add(new Xe("viewNormal",(t,r)=>r.camera.viewInverseTransposeMatrix))}function hn(e){e.uniforms.add(new re("pixelRatio",(t,r)=>r.camera.pixelRatio/r.overlayStretch))}const Po=mt();function Do(e,t){const r=t.hasModelTransformation,o=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new Xe("model",a=>a.modelTransformation??to)),e.vertex.uniforms.add(new ue("normalLocalOriginFromModel",a=>(ba(Po,a.modelTransformation??to),Po)))),t.instanced&&o&&(e.attributes.add(p.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(p.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(p.INSTANCEMODEL,"mat3"),e.attributes.add(p.INSTANCEMODELNORMAL,"mat3"));const i=e.vertex;o&&(i.include(no,t),i.uniforms.add(new le("viewOriginHi",(a,n)=>Oa(Y(Gt,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),Gt)),new le("viewOriginLo",(a,n)=>ya(Y(Gt,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),Gt)))),i.code.add(s`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?o?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":o?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${o?s`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),i.code.add(s`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?o?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":o?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===F.Normal&&(No(i),i.code.add(s`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?o?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":o?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&i.code.add(s`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?o?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":o?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const Gt=y();let dr=class extends X{constructor(e,t){super(e,"int",I.Pass,(r,o,i)=>r.setUniform1i(e,t(o,i)))}};function Fo(e,t){t.hasSymbolColors?(e.include(La),e.attributes.add(p.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(s`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new dr("colorMixMode",r=>vo[r.colorMixMode])),e.vertex.code.add(s`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}var Z;function De(e,t){switch(t.textureCoordinateType){case Z.Default:return e.attributes.add(p.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case Z.Compressed:return e.attributes.add(p.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(s`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case Z.Atlas:return e.attributes.add(p.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(p.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:It(t.textureCoordinateType);case Z.None:return void e.vertex.code.add(s`void forwardTextureCoordinates() {}`);case Z.COUNT:return}}(function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"})(Z||(Z={}));function Bo(e,t){t.hasVertexColors?(e.attributes.add(p.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(s`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(s`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(s`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function zo(e){e.vertex.code.add(s`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(s`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(s`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(s`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(s`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(s`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function mn(e){e.uniforms.add(new q("screenSizePerspective",t=>Vo(t.screenSizePerspective)))}function Go(e){e.uniforms.add(new q("screenSizePerspectiveAlignment",t=>Vo(t.screenSizePerspectiveAlignment||t.screenSizePerspective)))}function Vo(e){return Y(fn,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}const fn=y();let te=class extends X{constructor(e,t){super(e,"vec4",I.Pass,(r,o,i)=>r.setUniform4fv(e,t(o,i)))}};function Ho(e,t){const r=e.vertex;t.hasVerticalOffset?(Uo(r),t.hasScreenSizePerspective&&(e.include(zo),Go(r),Qe(e.vertex,t)),r.code.add(s`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?s`vec3 worldNormal = normalize(worldPos + localOrigin);`:s`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?s`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:s`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(s`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const pn=Pt();function Uo(e){e.uniforms.add(new te("verticalOffset",(t,r)=>{const{minWorldLength:o,maxWorldLength:i,screenLength:a}=t.verticalOffset,n=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),l=r.camera.pixelRatio||1;return ae(pn,a*l,n,o,i)}))}function jo(e,t){if(t.output!==F.ObjectAndLayerIdColor)return e.vertex.code.add(s`void forwardObjectAndLayerIdColor() {}`),void e.fragment.code.add(s`void outputObjectAndLayerIdColor() {}`);const r=t.objectAndLayerIdColorInstanced;e.varyings.add("objectAndLayerIdColorVarying","vec4"),e.attributes.add(r?p.INSTANCEOBJECTANDLAYERIDCOLOR:p.OBJECTANDLAYERIDCOLOR,"vec4"),e.vertex.code.add(s`
    void forwardObjectAndLayerIdColor() {
      objectAndLayerIdColorVarying = ${r?"instanceObjectAndLayerIdColor":"objectAndLayerIdColor"} * 0.003921568627451;
    }`),e.fragment.code.add(s`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)}function Wo(e){e.code.add(s`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}function vn(e,t){switch(t.output){case F.Shadow:case F.ShadowHighlight:case F.ShadowExcludeHighlight:case F.ViewshedShadow:e.fragment.include(Wo),e.fragment.code.add(s`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}let gn=class extends X{constructor(e,t){super(e,"ivec2",I.Pass,(r,o,i)=>r.setUniform2iv(e,t(o,i)))}},J=class extends X{constructor(e,t){super(e,"sampler2D",I.Pass,(r,o,i)=>r.bindTexture(e,t(o,i)))}};function ur(e,t){const{fragment:r}=e;t.output===F.Highlight?(r.uniforms.add(new J("depthTexture",(o,i)=>i.mainDepth),new J("highlightTexture",(o,i)=>i.highlightMixTexture),new dr("highlightLevel",(o,i)=>i.highlightLevel),new gn("highlightMixOrigin",(o,i)=>i.highlightMixOrigin)),e.outputs.add("fragHighlight","vec2",0),r.code.add(s`vec2 getAccumulatedHighlight() {
return texelFetch(highlightTexture, ivec2(gl_FragCoord.xy) - highlightMixOrigin, 0).rg;
}
void outputHighlight(bool occluded) {
if (highlightLevel == 0) {
uint bits = occluded ? 3u : 1u;
fragHighlight = vec2(float(bits) / 255.0, 0.0);
} else {
int ll = (highlightLevel & 3) << 1;
int li = (highlightLevel >> 2) & 3;
uint bits;
if (occluded) {
bits = 3u << ll;
} else {
bits = 1u << ll;
}
vec2 combinedHighlight = getAccumulatedHighlight();
uint accumulatedI = uint(combinedHighlight[li] * 255.0);
combinedHighlight[li] = float(bits | accumulatedI) / 255.0;
fragHighlight = combinedHighlight;
}
}
bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}
void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`),t.canHaveOverlay&&(r.constants.add("occlusionAndMask","int",85),r.code.add(s`void outputAllHighlights(vec2 highlightToAdd) {
if (highlightToAdd == vec2(0.0)) { discard; }
int occludedOrMask = isHighlightOccluded() ? 0xaa : 0;
ivec2 added = ivec2(highlightToAdd * 255.0);
ivec2 masked = (added & ivec2(occlusionAndMask)) | (ivec2(occludedOrMask) & (added<<1));
fragHighlight = vec2(masked) / 255.0;
}`))):r.code.add(s`void calculateOcclusionAndOutputHighlight() {}`)}let xn=class extends X{constructor(e,t,r){super(e,"vec4",I.Pass,(o,i,a)=>o.setUniform4fv(e,t(i,a)),r)}},_n=class extends X{constructor(e,t,r){super(e,"float",I.Pass,(o,i,a)=>o.setUniform1fv(e,t(i,a)),r)}};var $o,qo;(function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"})($o||($o={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(qo||(qo={}));function Tn(e,t,r){if(!t.vvSize)return Y(e,1,1,1),e;for(let o=0;o<3;++o){const i=t.vvSize.offset[o]+r[0]*t.vvSize.factor[o];e[o]=Zt(i,t.vvSize.minSize[o],t.vvSize.maxSize[o])}return e}const hr=8;function et(e,t){const{vertex:r,attributes:o}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&o.add(p.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new q("vvSizeMinSize",i=>i.vvSize.minSize)),r.uniforms.add(new q("vvSizeMaxSize",i=>i.vvSize.maxSize)),r.uniforms.add(new q("vvSizeOffset",i=>i.vvSize.offset)),r.uniforms.add(new q("vvSizeFactor",i=>i.vvSize.factor)),r.uniforms.add(new ue("vvSymbolRotationMatrix",i=>i.vvSymbolRotationMatrix)),r.uniforms.add(new q("vvSymbolAnchor",i=>i.vvSymbolAnchor)),r.code.add(s`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(s`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?s`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(s`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",hr),r.uniforms.add(new _n("vvColorValues",i=>i.vvColor.values,hr),new xn("vvColorColors",i=>i.vvColor.colors,hr)),r.code.add(s`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?s`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(s`vec4 vvColor() { return vec4(1.0); }`)}function tt(e,t){bn(e,t,new re("textureAlphaCutoff",r=>r.textureAlphaCutoff))}function bn(e,t,r){const o=e.fragment;switch(t.alphaDiscardMode){case xe.Blend:e.fragment.code.add(s`
        #define discardOrAdjustAlpha(color) { if (color.a < ${s.float(Te)}) { discard; } }
      `);break;case xe.Opaque:o.code.add(s`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case xe.Mask:o.uniforms.add(r).code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case xe.MaskBlend:o.uniforms.add(r).code.add(s`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function ko(e,t){const{vertex:r,fragment:o}=e,i=t.hasColorTexture&&t.alphaDiscardMode!==xe.Opaque,{output:a,normalType:n,hasColorTextureTransform:l}=t;switch(a){case F.Depth:Pe(r,t),e.include(Ke,t),e.include(Ne,t),e.include(De,t),i&&o.uniforms.add(new J("tex",c=>c.texture)),r.main.add(s`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(tt,t),o.main.add(s`
          discardBySlice(vpos);
          ${R(i,s`vec4 texColor = texture(tex, ${l?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}`);break;case F.Shadow:case F.ShadowHighlight:case F.ShadowExcludeHighlight:case F.ViewshedShadow:case F.ObjectAndLayerIdColor:Pe(r,t),e.include(Ke,t),e.include(De,t),e.include(et,t),e.include(vn,t),e.include(Ne,t),e.include(jo,t),So(e),e.varyings.add("depth","float"),i&&o.uniforms.add(new J("tex",c=>c.texture)),r.main.add(s`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(tt,t),o.main.add(s`
          discardBySlice(vpos);
          ${R(i,s`vec4 texColor = texture(tex, ${l?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          ${a===F.ObjectAndLayerIdColor?s`outputObjectAndLayerIdColor();`:s`outputDepth(depth);`}`);break;case F.Normal:{Pe(r,t),e.include(Ke,t),e.include(Rt,t),e.include(lo,t),e.include(De,t),e.include(et,t),i&&o.uniforms.add(new J("tex",u=>u.texture)),n===Q.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const c=n===Q.Attribute||n===Q.Compressed;r.main.add(s`
          vpos = getVertexInLocalOriginSpace();
          ${c?s`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:s`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
          vpos = subtractOrigin(vpos);
          vpos = addVerticalOffset(vpos, localOrigin);
          gl_Position = transformPosition(proj, view, vpos);
          forwardTextureCoordinates();`),e.include(Ne,t),e.include(tt,t),o.main.add(s`
          discardBySlice(vpos);
          ${R(i,s`vec4 texColor = texture(tex, ${l?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}

          ${n===Q.ScreenDerivative?s`vec3 normal = screenDerivativeNormal(vPositionView);`:s`vec3 normal = normalize(vNormalWorld);
                     if (gl_FrontFacing == false){
                       normal = -normal;
                     }`}
          fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case F.Highlight:Pe(r,t),e.include(Ke,t),e.include(De,t),e.include(et,t),i&&o.uniforms.add(new J("tex",c=>c.texture)),r.main.add(s`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(Ne,t),e.include(tt,t),e.include(ur,t),o.main.add(s`
          discardBySlice(vpos);
          ${R(i,s`vec4 texColor = texture(tex, ${l?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          calculateOcclusionAndOutputHighlight();`)}}function En(e){e.fragment.code.add(s`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function mr(e,t){const{textureCoordinateType:r}=t;if(r===Z.None||r===Z.COUNT)return;e.include(De,t);const o=r===Z.Atlas;o&&e.include(En),e.fragment.code.add(s`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${o?"textureAtlasLookup(tex, uv, vuvRegion)":"texture(tex, uv)"};
    }
  `)}function Sn(e,t){const r=e.fragment;switch(r.code.add(s`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case oe.None:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case oe.View:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case oe.WindingOrder:r.code.add(s`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:It(t.doubleSidedMode);case oe.COUNT:}}var oe;(function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"})(oe||(oe={}));function An(e,t){const r=e.fragment;t.hasVertexTangents?(e.attributes.add(p.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===oe.WindingOrder?r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(s`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(s`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),t.textureCoordinateType!==Z.None&&(e.include(mr,t),r.uniforms.add(t.bindType===I.Pass?new J("normalTexture",o=>o.textureNormal):new ft("normalTexture",o=>o.textureNormal)),t.hasNormalTextureTransform&&(r.uniforms.add(new Le("scale",o=>o.scale??Ra)),r.uniforms.add(new ue("normalTextureTransformMatrix",o=>o.normalTextureTransformMatrix??Ye))),r.code.add(s`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&r.code.add(s`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(s`return tangentSpace * rawNormal;
}`))}var fr,gt;(function(e){e.OPAQUE="opaque-color",e.TRANSPARENT="transparent-color",e.COMPOSITE="composite-color",e.FINAL="final-color"})(fr||(fr={})),function(e){e.SSAO="ssao",e.LASERLINES="laserline-color",e.ANTIALIASING="aa-color",e.HIGHLIGHTS="highlight-color",e.MAGNIFIER="magnifier-color",e.OCCLUDED="occluded-color",e.VIEWSHED="viewshed-color",e.OPAQUE_ENVIRONMENT="opaque-environment-color",e.TRANSPARENT_ENVIRONMENT="transparent-environment-color"}(gt||(gt={}));var rt,Yo;(function(e){e[e.RED=0]="RED",e[e.RG=1]="RG",e[e.RGBA4=2]="RGBA4",e[e.RGBA=3]="RGBA",e[e.RGBA_MIPMAP=4]="RGBA_MIPMAP",e[e.R16F=5]="R16F",e[e.RGBA16F=6]="RGBA16F"})(rt||(rt={})),function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(Yo||(Yo={}));let ot=class extends zr{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces=fr.COMPOSITE,this.requireGeometryDepth=!1,this._dirty=!0}initialize(){this.addHandles([Hr(()=>this.view.ready,e=>{e&&this.view._stage?.renderer.addRenderNode(this)},Ui)])}destroy(){this.view._stage?.renderer?.removeRenderNode(this)}precompile(){}render(){throw new ve("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){const e=this._frameBuffer?.getTexture()?.descriptor,t=this.view._stage.renderer.fboCache.acquire(e?.width??640,e?.height??480,this.produces);return t.fbo?.initializeAndBind(),t}bindRenderTarget(){return this._frameBuffer?.fbo?.initializeAndBind(),this._frameBuffer}requestRender(e){e===Kt.UPDATE&&this.view._stage?.renderView.requestRender(e),this._dirty=!0}resetWebGLState(){this.renderingContext.resetState(),this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this.renderContext.bind}get renderingContext(){return this.view._stage.renderView.renderingContext}get renderContext(){return this.view._stage?.renderer.renderContext}updateAnimation(e){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e){this._frameBuffer=e.find(({name:t})=>t===this.produces);try{return this.render(e)}finally{this._frameBuffer=null}}};m([z({constructOnly:!0})],ot.prototype,"view",void 0),m([z({constructOnly:!0})],ot.prototype,"consumes",void 0),m([z()],ot.prototype,"produces",void 0),ot=m([Jt("esri.views.3d.webgl.RenderNode")],ot);const Cn=ot,wn=3e5,Xo=5e5;function Jo(e,t=!0){e.attributes.add(p.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.main.add(s`
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?s`uv = position * 0.5 + vec2(0.5);`:""}
  `)}function pr(e){e.uniforms.add(new Le("zProjectionMap",(t,r)=>Mn(r.camera))),e.code.add(s`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),e.code.add(s`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),e.code.add(s`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function Mn(e){const t=e.projectionMatrix;return Ie(On,t[14],t[10])}const On=Dt();let yn=class extends X{constructor(e,t){super(e,"vec2",I.Draw,(r,o,i,a)=>r.setUniform2fv(e,t(o,i,a)))}};const Rn=()=>Ur.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let Zo=class{constructor(){this._includedModules=new Map}include(e,t){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,t),e(this.builder,t))}},xt=class extends Zo{constructor(){super(...arguments),this.vertex=new Ko,this.fragment=new Ko,this.attributes=new Pn,this.varyings=new Dn,this.extensions=new vr,this.outputs=new gr}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),o=this.varyings.generateSource(e),i=e==="vertex"?this.vertex:this.fragment,a=i.uniforms.generateSource(),n=i.code.generateSource(),l=i.main.generateSource(),c=e==="vertex"?zn:Bn,u=i.constants.generateSource(),d=this.outputs.generateSource(e);return`#version 300 es
${t.join(`
`)}

${c}

${u.join(`
`)}

${a.join(`
`)}

${r.join(`
`)}

${o.join(`
`)}

${d.join(`
`)}

${n.join(`
`)}

${l.join(`
`)}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach(i=>{const a=i.bind[I.Pass];a&&t.set(i.name,a)}),this.fragment.uniforms.entries.forEach(i=>{const a=i.bind[I.Pass];a&&t.set(i.name,a)});const r=Array.from(t.values()),o=r.length;return(i,a)=>{for(let n=0;n<o;++n)r[n](e,i,a)}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach(i=>{const a=i.bind[I.Draw];a&&t.set(i.name,a)}),this.fragment.uniforms.entries.forEach(i=>{const a=i.bind[I.Draw];a&&t.set(i.name,a)});const r=Array.from(t.values()),o=r.length;return(i,a,n)=>{for(let l=0;l<o;++l)r[l](e,n,i,a)}}},In=class{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(const t of e)this._add(t);return this._stage}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new ve(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else Rn().error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(e=>e.arraySize!=null?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}},Ln=class{constructor(e){this._stage=e,this._bodies=new Array}add(e){return this._bodies.push(e),this._stage}generateSource(){if(this._bodies.length>0)return[`void main() {
 ${this._bodies.join(`
`)||""} 
}`];throw new ve("Shader does not contain main function body.")}},Nn=class{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}},Ko=class extends Zo{constructor(){super(...arguments),this.uniforms=new In(this),this.main=new Ln(this),this.code=new Nn(this),this.constants=new Fn(this)}get builder(){return this}},Pn=class{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return e==="fragment"?[]:this._entries.map(t=>`in ${t[1]} ${t[0]};`)}},Dn=class{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&j(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach((r,o)=>t.push(e==="vertex"?`out ${r} ${o};`:`in ${r} ${o};`)),t}},vr=class Ir{constructor(){this._entries=new Set}add(t){this._entries.add(t)}generateSource(t){const r=t==="vertex"?Ir.ALLOWLIST_VERTEX:Ir.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(o=>r.includes(o)).map(o=>`#extension ${o} : enable`)}};vr.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],vr.ALLOWLIST_VERTEX=[];let gr=class Lr{constructor(){this._entries=new Map}add(t,r,o=0){const i=this._entries.get(o);i?j(i.name===t&&i.type===r,`Fragment shader output location ${o} occupied`):this._entries.set(o,{name:t,type:r})}generateSource(t){if(t==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:Lr.DEFAULT_NAME,type:Lr.DEFAULT_TYPE});const r=new Array;return this._entries.forEach((o,i)=>r.push(`layout(location = ${i}) out ${o.type} ${o.name};`)),r}};gr.DEFAULT_TYPE="vec4",gr.DEFAULT_NAME="fragColor";let Fn=class W{constructor(t){this._stage=t,this._entries=new Set}add(t,r,o){let i="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":i=W._numberToFloatStr(o);break;case"int":i=W._numberToIntStr(o);break;case"bool":i=o.toString();break;case"vec2":i=`vec2(${W._numberToFloatStr(o[0])},                            ${W._numberToFloatStr(o[1])})`;break;case"vec3":i=`vec3(${W._numberToFloatStr(o[0])},                            ${W._numberToFloatStr(o[1])},                            ${W._numberToFloatStr(o[2])})`;break;case"vec4":i=`vec4(${W._numberToFloatStr(o[0])},                            ${W._numberToFloatStr(o[1])},                            ${W._numberToFloatStr(o[2])},                            ${W._numberToFloatStr(o[3])})`;break;case"ivec2":i=`ivec2(${W._numberToIntStr(o[0])},                             ${W._numberToIntStr(o[1])})`;break;case"ivec3":i=`ivec3(${W._numberToIntStr(o[0])},                             ${W._numberToIntStr(o[1])},                             ${W._numberToIntStr(o[2])})`;break;case"ivec4":i=`ivec4(${W._numberToIntStr(o[0])},                             ${W._numberToIntStr(o[1])},                             ${W._numberToIntStr(o[2])},                             ${W._numberToIntStr(o[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${r}(${Array.prototype.map.call(o,a=>W._numberToFloatStr(a)).join(", ")})`}return this._entries.add(`const ${r} ${t} = ${i};`),this._stage}static _numberToIntStr(t){return t.toFixed(0)}static _numberToFloatStr(t){return Number.isInteger(t)?t.toFixed(1):t.toString()}generateSource(){return Array.from(this._entries)}};const Bn=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,zn=`precision highp float;
precision highp sampler2D;`,xr=4;function Qo(){const e=new xt,t=e.fragment;e.include(Jo);const r=(xr+1)/2,o=1/(2*r*r);return t.include(pr),t.uniforms.add(new J("depthMap",i=>i.depthTexture),new ft("tex",i=>i.colorTexture),new yn("blurSize",i=>i.blurSize),new re("projScale",(i,a)=>{const n=a.camera.distance;return n>5e4?Math.max(0,i.projScale-(n-5e4)):i.projScale})),t.code.add(s`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${s.float(o)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.main.add(s`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${s.int(xr)}; r <= ${s.int(xr)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const Gn=Object.freeze(Object.defineProperty({__proto__:null,build:Qo},Symbol.toStringTag,{value:"Module"}));let ei=class extends Ft{constructor(e,t,r){super(e,t,new pt(Gn,()=>import("./HUDMaterial.glsl-CwwoCmqt.js").then(o=>o.S)),r)}initializePipeline(){return Lt({colorWrite:Nt})}};const Vn="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let Hn=class extends ke{constructor(){super(...arguments),this.projScale=1}},Un=class extends Hn{constructor(){super(...arguments),this.intensity=1}},jn=class extends ke{},Wn=class extends jn{constructor(){super(...arguments),this.blurSize=Dt()}};function $n(e){e.fragment.uniforms.add(new te("projInfo",(t,r)=>qn(r.camera))),e.fragment.uniforms.add(new Le("zScale",(t,r)=>kn(r.camera))),e.fragment.code.add(s`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function qn(e){const t=e.projectionMatrix;return t[11]===0?ae(ti,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):ae(ti,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}const ti=Pt();function kn(e){return e.projectionMatrix[11]===0?Ie(ri,0,1):Ie(ri,1,0)}const ri=Dt(),oi=16;function ii(){const e=new xt,t=e.fragment;return e.include(Jo),e.include($n),t.include(pr),t.uniforms.add(new re("radius",(r,o)=>Vt(o.camera))).code.add(s`vec3 sphere[16] = vec3[16](
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
}`),t.code.add(s`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new J("normalMap",r=>r.normalTexture),new J("depthMap",r=>r.depthTexture),new re("projScale",r=>r.projScale),new J("rnm",r=>r.noiseTexture),new Le("rnmScale",(r,o)=>Ie(ai,o.camera.fullWidth/r.noiseTexture.descriptor.width,o.camera.fullHeight/r.noiseTexture.descriptor.height)),new re("intensity",r=>r.intensity),new Le("screenSize",(r,o)=>Ie(ai,o.camera.fullWidth,o.camera.fullHeight))),e.outputs.add("fragOcclusion","float"),t.main.add(s`
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${s.int(oi)}; ++i) {
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
      float A = max(1.0 - sum * intensity / float(${s.int(oi)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),e}function Vt(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const ai=Dt(),Yn=Object.freeze(Object.defineProperty({__proto__:null,build:ii,getRadius:Vt},Symbol.toStringTag,{value:"Module"}));let ni=class extends Ft{constructor(e,t,r){super(e,t,new pt(Yn,()=>import("./HUDMaterial.glsl-CwwoCmqt.js").then(o=>o.a)),r)}initializePipeline(){return Lt({colorWrite:Nt})}};const _t=2;let it=class extends Cn{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=gt.SSAO,this.isEnabled=()=>!1,this._enableTime=wt(0),this._passParameters=new Un,this._drawParameters=new Wn}initialize(){const e=Uint8Array.from(atob(Vn),r=>r.charCodeAt(0)),t=new $r;t.wrapMode=ct.CLAMP_TO_EDGE,t.pixelFormat=Re.RGB,t.wrapMode=ct.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new We(this.renderingContext,t,e),this.techniques.precompile(ni),this.techniques.precompile(ei),this.addHandles(Hr(()=>this.isEnabled(),()=>this._enableTime=wt(0)))}destroy(){this._passParameters.noiseTexture=At(this._passParameters.noiseTexture)}render(e){const t=this.bindParameters,r=e.find(({name:w})=>w==="normals"),o=r?.getTexture(),i=r?.getTexture(aa),a=this.fboCache,n=t.camera,l=n.fullViewport[2],c=n.fullViewport[3],u=Math.round(l/_t),d=Math.round(c/_t),h=this.techniques.acquire(ni),v=this.techniques.acquire(ei);if(!h.compiled||!v.compiled)return this._enableTime=wt(performance.now()),this.requestRender(Kt.UPDATE),h.release(),v.release(),a.acquire(u,d,gt.SSAO,rt.RED);this._enableTime===0&&(this._enableTime=wt(performance.now()));const f=this.renderingContext,T=this.view.qualitySettings.fadeDuration,_=n.relativeElevation,x=Zt((Xo-_)/(Xo-wn),0,1),V=T>0?Math.min(T,performance.now()-this._enableTime)/T:1,D=V*x;this._passParameters.normalTexture=o,this._passParameters.depthTexture=i,this._passParameters.projScale=1/n.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Xn/Vt(n)**6*D;const B=a.acquire(l,c,"ssao input",rt.RG);f.bindFramebuffer(B.fbo),f.setViewport(0,0,l,c),f.bindTechnique(h,t,this._passParameters,this._drawParameters),f.screen.draw(),h.release();const P=a.acquire(u,d,"ssao blur",rt.RED);f.bindFramebuffer(P.fbo),this._drawParameters.colorTexture=B.getTexture(),Ie(this._drawParameters.blurSize,0,_t/c),f.bindTechnique(v,t,this._passParameters,this._drawParameters),f.setViewport(0,0,u,d),f.screen.draw(),B.release();const G=a.acquire(u,d,gt.SSAO,rt.RED);return f.bindFramebuffer(G.fbo),f.setViewport(0,0,l,c),f.setClearColor(1,1,1,0),f.clear(na.COLOR),this._drawParameters.colorTexture=P.getTexture(),Ie(this._drawParameters.blurSize,_t/l,0),f.bindTechnique(v,t,this._passParameters,this._drawParameters),f.setViewport(0,0,u,d),f.screen.draw(),v.release(),f.setViewport4fv(n.fullViewport),P.release(),V<1&&this.requestRender(Kt.UPDATE),G}};m([z()],it.prototype,"consumes",void 0),m([z()],it.prototype,"produces",void 0),m([z({constructOnly:!0})],it.prototype,"techniques",void 0),m([z({constructOnly:!0})],it.prototype,"isEnabled",void 0),it=m([Jt("esri.views.3d.webgl-engine.effects.ssao.SSAO")],it);const Xn=.5;function _r(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new J("ssaoTex",(o,i)=>i.ssao?.getTexture())),r.constants.add("blurSizePixelsInverse","float",1/_t),r.code.add(s`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(s`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}let Jn=class{constructor(e){this._material=e.material,this._techniques=e.techniques,this._output=e.output}dispose(){}get _stippleTextures(){return this._techniques.context.stippleTextures}get _markerTextures(){return this._techniques.context.markerTextures}acquireTechnique(e,t){return this._techniques.acquire(e,this._material.getConfiguration(this._output,t))}ensureResources(e){return Qt.LOADED}},si=class extends Jn{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this._textureId=e.textureId,this._acquire(e.textureId,t=>this._texture=t),this._acquire(e.normalTextureId,t=>this._textureNormal=t),this._acquire(e.emissiveTextureId,t=>this._textureEmissive=t),this._acquire(e.occlusionTextureId,t=>this._textureOcclusion=t),this._acquire(e.metallicRoughnessTextureId,t=>this._textureMetallicRoughness=t)}dispose(){super.dispose(),this._texture=Oe(this._texture),this._textureNormal=Oe(this._textureNormal),this._textureEmissive=Oe(this._textureEmissive),this._textureOcclusion=Oe(this._textureOcclusion),this._textureMetallicRoughness=Oe(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?Qt.LOADED:Qt.LOADING}get textureBindParameters(){return new li(this._texture!=null?this._texture.glTexture:null,this._textureNormal!=null?this._textureNormal.glTexture:null,this._textureEmissive!=null?this._textureEmissive.glTexture:null,this._textureOcclusion!=null?this._textureOcclusion.glTexture:null,this._textureMetallicRoughness!=null?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){this._texture!=null&&e===this._texture.id||(this._texture=Oe(this._texture),this._textureId=e,this._acquire(this._textureId,t=>this._texture=t))}_acquire(e,t){if(e==null)return void t(null);const r=this._textures.acquire(e);if(ji(r))return++this._numLoading,void r.then(o=>{if(this._disposed)return Oe(o),void t(null);t(o)}).finally(()=>--this._numLoading);t(r)}},Zn=class extends ke{constructor(e=null){super(),this.textureEmissive=e}},li=class extends Zn{constructor(e=null,t=null,r=null,o=null,i=null,a,n){super(r),this.texture=e,this.textureNormal=t,this.textureOcclusion=o,this.textureMetallicRoughness=i,this.scale=a,this.normalTextureTransformMatrix=n}};var N;(function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"})(N||(N={}));function ci(e,t){const r=t.pbrMode,o=e.fragment;if(r!==N.Schematic&&r!==N.Disabled&&r!==N.Normal)return void o.code.add(s`void applyPBRFactors() {}`);if(r===N.Disabled)return void o.code.add(s`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(r===N.Schematic)return void o.code.add(s`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:i,hasMetallicRoughnessTextureTransform:a,hasOcclusionTexture:n,hasOcclusionTextureTransform:l,bindType:c}=t;(i||n)&&e.include(mr,t),o.code.add(s`vec3 mrr;
float occlusion;`),i&&o.uniforms.add(c===I.Pass?new J("texMetallicRoughness",u=>u.textureMetallicRoughness):new ft("texMetallicRoughness",u=>u.textureMetallicRoughness)),n&&o.uniforms.add(c===I.Pass?new J("texOcclusion",u=>u.textureOcclusion):new ft("texOcclusion",u=>u.textureOcclusion)),o.uniforms.add(c===I.Pass?new q("mrrFactors",u=>u.mrrFactors):new le("mrrFactors",u=>u.mrrFactors)),o.code.add(s`
    ${R(i,s`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${R(n,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${n?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${R(i,`applyMetallicRoughness(${a?"metallicRoughnessUV":"vuv0"});`)}
      ${R(n,`applyOcclusion(${l?"occlusionUV":"vuv0"});`)}
    }
  `)}function Kn(e,t){const r=e.fragment,o=t.lightingSphericalHarmonicsOrder!==void 0?t.lightingSphericalHarmonicsOrder:2;o===0?(r.uniforms.add(new q("lightingAmbientSH0",(i,a)=>Y(di,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===1?(r.uniforms.add(new te("lightingAmbientSH_R",(i,a)=>ae(pe,a.lighting.sh.r[0],a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3])),new te("lightingAmbientSH_G",(i,a)=>ae(pe,a.lighting.sh.g[0],a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3])),new te("lightingAmbientSH_B",(i,a)=>ae(pe,a.lighting.sh.b[0],a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):o===2&&(r.uniforms.add(new q("lightingAmbientSH0",(i,a)=>Y(di,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0])),new te("lightingAmbientSH_R1",(i,a)=>ae(pe,a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3],a.lighting.sh.r[4])),new te("lightingAmbientSH_G1",(i,a)=>ae(pe,a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3],a.lighting.sh.g[4])),new te("lightingAmbientSH_B1",(i,a)=>ae(pe,a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3],a.lighting.sh.b[4])),new te("lightingAmbientSH_R2",(i,a)=>ae(pe,a.lighting.sh.r[5],a.lighting.sh.r[6],a.lighting.sh.r[7],a.lighting.sh.r[8])),new te("lightingAmbientSH_G2",(i,a)=>ae(pe,a.lighting.sh.g[5],a.lighting.sh.g[6],a.lighting.sh.g[7],a.lighting.sh.g[8])),new te("lightingAmbientSH_B2",(i,a)=>ae(pe,a.lighting.sh.b[5],a.lighting.sh.b[6],a.lighting.sh.b[7],a.lighting.sh.b[8]))),r.code.add(s`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),t.pbrMode!==N.Normal&&t.pbrMode!==N.Schematic||r.code.add(s`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const di=y(),pe=Pt();function Ht(e){e.uniforms.add(new q("mainLightDirection",(t,r)=>r.lighting.mainLight.direction))}function Tt(e){e.uniforms.add(new q("mainLightIntensity",(t,r)=>r.lighting.mainLight.intensity))}function Qn(e){Ht(e.fragment),Tt(e.fragment),e.fragment.code.add(s`vec3 applyShading(vec3 shadingNormalWorld, float shadow) {
float dotVal = clamp(dot(shadingNormalWorld, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function es(e){const t=e.fragment.code;t.add(s`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(s`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(s`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function ui(e){const t=3.141592653589793,r=.3183098861837907;e.vertex.constants.add("PI","float",t),e.fragment.constants.add("PI","float",t),e.fragment.constants.add("LIGHT_NORMALIZATION","float",r),e.fragment.constants.add("INV_PI","float",r),e.fragment.constants.add("HALF_PI","float",1.570796326794897),e.fragment.constants.add("TWO_PI","float",6.28318530717958)}function Tr(e,t){const r=e.fragment.code;e.include(ui),t.pbrMode!==N.Normal&&t.pbrMode!==N.Schematic&&t.pbrMode!==N.Simplified&&t.pbrMode!==N.TerrainWithWater||(r.add(s`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(s`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==N.Normal&&t.pbrMode!==N.Schematic||(e.include(es),r.add(s`struct PBRShadingInfo
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
};`),r.add(s`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(s`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(s`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}let hi=class extends X{constructor(e,t){super(e,"bool",I.Pass,(r,o,i)=>r.setUniform1b(e,t(o,i)))}};const ts=.4;function br(e){e.constants.add("ambientBoostFactor","float",ts)}function Er(e){e.uniforms.add(new re("lightingGlobalFactor",(t,r)=>r.lighting.globalFactor))}function mi(e,t){const r=e.fragment;switch(e.include(_r,t),t.pbrMode!==N.Disabled&&e.include(Tr,t),e.include(Kn,t),e.include(ui),r.code.add(s`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===N.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),br(r),Er(r),Ht(r),r.code.add(s`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?s`normalize(vPosWorld)`:s`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),Tt(r),r.code.add(s`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case N.Disabled:case N.WaterOnIntegratedMesh:case N.Water:e.include(Qn),r.code.add(s`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case N.Normal:case N.Schematic:r.code.add(s`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec4 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(s`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new hi("hasFillLights",(o,i)=>i.enableFillLights)):r.constants.add("hasFillLights","bool",!1),r.code.add(s`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new re("lightingSpecularStrength",(o,i)=>i.lighting.mainLight.specularStrength),new re("lightingEnvironmentStrength",(o,i)=>i.lighting.mainLight.environmentStrength)).code.add(s`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(s`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==N.Schematic||t.hasColorTexture?s`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:s`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case N.Simplified:case N.TerrainWithWater:Ht(r),Tt(r),r.code.add(s`const float roughnessTerrain = 0.5;
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
}`);break;default:It(t.pbrMode);case N.COUNT:}}let rs=class extends X{constructor(e,t,r){super(e,"mat4",I.Draw,(o,i,a,n)=>o.setUniformMatrix4fv(e,t(i,a,n)),r)}},os=class extends X{constructor(e,t,r){super(e,"mat4",I.Pass,(o,i,a)=>o.setUniformMatrix4fv(e,t(i,a)),r)}};function fi(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new os("shadowMapMatrix",(r,o)=>o.shadowMap.getShadowMapMatrices(r.origin),4)),vi(e))}function pi(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new rs("shadowMapMatrix",(r,o)=>o.shadowMap.getShadowMapMatrices(r.origin),4)),vi(e))}function vi(e){const t=e.fragment;t.include(Wo),t.uniforms.add(new J("shadowMap",(r,o)=>o.shadowMap.depthTexture),new dr("numCascades",(r,o)=>o.shadowMap.numCascades),new te("cascadeDistances",(r,o)=>o.shadowMap.cascadeDistances)).code.add(s`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}function Sr(e,{occlusionPass:t,terrainDepthTest:r,cullAboveTerrain:o}){r?(e.fragment.include(pr),e.fragment.uniforms.add(new J("terrainDepthTexture",(i,a)=>a.terrainDepth?.attachment)).code.add(s`
   ${t?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${t?s`return fragmentDepth < linearDepth && depth < 1.0;`:s`if(fragmentDepth ${o?">":"<="} linearDepth) discard;`}
    }`)):t?e.fragment.code.add(s`#define terrainDepthTest(fragmentDepth) false`):e.fragment.code.add(s`#define terrainDepthTest(fragmentDepth) {}`)}function is(e,t){t.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new ue("colorTextureTransformMatrix",r=>r.colorTextureTransformMatrix??Ye)).code.add(s`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(s`void forwardColorUV(){}`)}function as(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==Z.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new ue("normalTextureTransformMatrix",r=>r.normalTextureTransformMatrix??Ye)).code.add(s`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(s`void forwardNormalUV(){}`)}function ns(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==Z.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new ue("emissiveTextureTransformMatrix",r=>r.emissiveTextureTransformMatrix??Ye)).code.add(s`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(s`void forwardEmissiveUV(){}`)}function ss(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==Z.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new ue("occlusionTextureTransformMatrix",r=>r.occlusionTextureTransformMatrix??Ye)).code.add(s`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(s`void forwardOcclusionUV(){}`)}function ls(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==Z.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new ue("metallicRoughnessTextureTransformMatrix",r=>r.metallicRoughnessTextureTransformMatrix??Ye)).code.add(s`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(s`void forwardMetallicRoughnessUV(){}`)}function Ar(e){e.code.add(s`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function gi(e){e.include(Ar),e.code.add(s`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${s.int(fe.Multiply)}) {
        return allMixed;
      }
      if (mode == ${s.int(fe.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(fe.Replace)}) {
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

      if (mode == ${s.int(fe.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${s.int(fe.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}var ne;(function(e){e[e.None=0]="None",e[e.Value=1]="Value",e[e.Texture=2]="Texture",e[e.COUNT=3]="COUNT"})(ne||(ne={}));function cs(e,t){if(!ht(t.output))return;const{emissionSource:r,hasEmissiveTextureTransform:o,bindType:i}=t,a=r===ne.Texture;a&&(e.include(mr,t),e.fragment.uniforms.add(i===I.Pass?new J("texEmission",l=>l.textureEmissive):new ft("texEmission",l=>l.textureEmissive)));const n=r===ne.Value||a;n&&e.fragment.uniforms.add(i===I.Pass?new q("emissionFactor",l=>l.emissiveFactor):new le("emissionFactor",l=>l.emissiveFactor)),e.fragment.code.add(s`
    vec4 getEmissions() {
      vec4 emissions = ${n?"vec4(emissionFactor, 1.0)":"vec4(0.0)"};
      ${R(a,`emissions *= textureLookup(texEmission, ${o?"emissiveUV":"vuv0"});
         emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)};
      return emissions;
    }
  `)}function xi(e,t){e.include(ur,t),e.include(cs,t),e.fragment.include(Ar);const r=t.output===F.ObjectAndLayerIdColor,o=Jr(t.output),i=ht(t.output)&&t.oitPass===k.ColorAlpha,a=ht(t.output)&&t.oitPass!==k.ColorAlpha,n=t.discardInvisibleFragments;let l=0;(a||o||i)&&e.outputs.add("fragColor","vec4",l++),o&&e.outputs.add("fragEmission","vec4",l++),i&&e.outputs.add("fragAlpha","float",l++),e.fragment.code.add(s`
    void outputColorHighlightOID(vec4 finalColor, const in vec3 vWorldPosition) {
      ${R(r,s`finalColor.a = 1.0;`)}

      ${R(n,s`if (finalColor.a < ${s.float(Te)}){
              discard;
              return;
            }`)}

      finalColor = highlightSlice(finalColor, vWorldPosition);
      ${R(i,s`fragColor = premultiplyAlpha(finalColor);
             fragAlpha = finalColor.a;`)}
      ${R(a,"fragColor = finalColor;")}
      ${R(o,"fragEmission = getEmissions();")}
      calculateOcclusionAndOutputHighlight();
      ${R(r,"outputObjectAndLayerIdColor();")}
    }
  `)}function _i(e){const t=new xt,{vertex:r,fragment:o,varyings:i}=t,{output:a,normalType:n,offsetBackfaces:l,instancedColor:c,spherical:u,receiveShadows:d,snowCover:h,pbrMode:v,textureAlphaPremultiplied:f,instancedDoublePrecision:T,hasVertexColors:_,hasVertexTangents:x,hasColorTexture:V,hasNormalTexture:D,hasNormalTextureTransform:B,hasColorTextureTransform:P}=e;if(Pe(r,e),t.include(ar),i.add("vpos","vec3"),t.include(et,e),t.include(Do,e),t.include(Ho,e),t.include(is,e),!ht(a))return t.include(ko,e),t;t.include(as,e),t.include(ns,e),t.include(ss,e),t.include(ls,e),Qe(r,e),t.include(Rt,e),t.include(Ke,e);const G=n===Q.Attribute||n===Q.Compressed;return G&&l&&t.include(wo),t.include(An,e),t.include(lo,e),c&&t.attributes.add(p.INSTANCECOLOR,"vec4"),i.add("vPositionLocal","vec3"),t.include(De,e),t.include(Co,e),t.include(Fo,e),t.include(Bo,e),r.uniforms.add(new te("externalColor",w=>w.externalColor)),i.add("vcolorExt","vec4"),e.terrainDepthTest&&i.add("depth","float"),r.main.add(s`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${R(c,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    if (vcolorExt.a < ${s.float(Te)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    } else {
      vpos = getVertexInLocalOriginSpace();
      vPositionLocal = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      ${R(G,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
      vpos = addVerticalOffset(vpos, localOrigin);
      ${R(x,"vTangent = dpTransformVertexTangent(tangent);")}
      gl_Position = transformPosition(proj, view, vpos);
      ${R(G&&l,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
    }

    ${R(e.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();
  `),t.include(mi,e),t.include(_r,e),t.include(tt,e),t.include(T?fi:pi,e),t.include(Sr,e),t.include(Ne,e),t.include(xi,e),Qe(o,e),o.uniforms.add(r.uniforms.get("localOrigin"),new q("ambient",w=>w.ambient),new q("diffuse",w=>w.diffuse),new re("opacity",w=>w.opacity),new re("layerOpacity",w=>w.layerOpacity)),V&&o.uniforms.add(new J("tex",w=>w.texture)),t.include(ci,e),t.include(Tr,e),o.include(gi),t.include(Sn,e),br(o),Er(o),Tt(o),o.main.add(s`
      discardBySlice(vpos);
      ${R(e.terrainDepthTest,"terrainDepthTest(depth);")}
      ${V?s`
              vec4 texColor = texture(tex, ${P?"colorUV":"vuv0"});
              ${R(f,"texColor.rgb /= texColor.a;")}
              discardOrAdjustAlpha(texColor);`:s`vec4 texColor = vec4(1.0);`}
      shadingParams.viewDirection = normalize(vpos - cameraPosition);
      ${n===Q.ScreenDerivative?s`vec3 normal = screenDerivativeNormal(vPositionLocal);`:s`shadingParams.normalView = vNormalWorld;
                 vec3 normal = shadingNormal(shadingParams);`}
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

      vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${d?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":R(u,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

      vec3 matColor = max(ambient, diffuse);
      vec3 albedo = mixExternalColor(${R(_,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
      float opacity_ = layerOpacity * mixExternalOpacity(${R(_,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
      ${D?`mat3 tangentSpace = computeTangentSpace(${x?"normal":"normal, vpos, vuv0"});
             vec3 shadingNormal = computeTextureNormal(tangentSpace, ${B?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
      vec3 normalGround = ${u?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

      ${R(h,s`
            float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
            albedo = mix(albedo, vec3(1), snow);
            shadingNormal = mix(shadingNormal, normal, snow);
            ssao = mix(ssao, 1.0, snow);`)}

      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

      ${v===N.Normal||v===N.Schematic?s`
              float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
              ${R(h,s`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
              vec4 emission = ${h?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
              vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);
  `),t}const ds=Object.freeze(Object.defineProperty({__proto__:null,build:_i},Symbol.toStringTag,{value:"Module"}));let us=class extends Ba{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=bo,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=lt.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=He,this.instancedDoublePrecision=!1,this.normalType=Q.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=at(.2,.2,.2),this.diffuse=at(.8,.8,.8),this.externalColor=Ma(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=y(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=Mt.Less,this.textureAlphaMode=xe.Blend,this.textureAlphaCutoff=Te,this.textureAlphaPremultiplied=!1,this.renderOccluded=Bt.Occlude,this.isDecoration=!1}},hs=class extends co{constructor(){super(...arguments),this.origin=y(),this.slicePlaneLocalOrigin=this.origin}},Ti=class extends Ft{constructor(e,t,r,o=new pt(ds,()=>import("./HUDMaterial.glsl-CwwoCmqt.js").then(i=>i.D))){super(e,t,o,r),this.type="DefaultMaterialTechnique"}_makePipeline(e,t){const{oitPass:r,output:o,transparent:i,cullFace:a,customDepthTest:n,hasOccludees:l,enableOffset:c}=e,u=r===k.NONE,d=r===k.FrontFace;return Lt({blending:ht(o)&&i?Ya(r):null,culling:fs(e)?Ta(a):null,depthTest:{func:Qa(r,ms(n))},depthWrite:Xa(e),drawBuffers:o===F.Depth?{buffers:[sa.NONE]}:To(r,o),colorWrite:Nt,stencilWrite:l?en:null,stencilTest:l?t?rn:tn:null,polygonOffset:u||d?null:Ka(c)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};function ms(e){return e===Mt.Lequal?de.LEQUAL:de.LESS}function fs(e){return e.cullFace!==lt.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}function ps(){return bi??=(async()=>{const e=await import("./basis_transcoder-BQKD9Nty.js"),t=await e.default({locateFile:r=>Wi(`esri/libs/basisu/${r}`)});return t.initializeBasis(),t})(),bi}let bi;var Fe;(function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"})(Fe||(Fe={}));let ce=null,Ut=null;async function Ei(){return Ut==null&&(Ut=ps(),ce=await Ut),Ut}function vs(e,t){if(ce==null)return e.byteLength;const r=new ce.BasisFile(new Uint8Array(e)),o=Ai(r)?Si(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),o}function gs(e,t){if(ce==null)return e.byteLength;const r=new ce.KTX2File(new Uint8Array(e)),o=Ci(r)?Si(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),o}function Si(e,t,r,o,i){const a=ca(t?me.COMPRESSED_RGBA8_ETC2_EAC:me.COMPRESSED_RGB8_ETC2),n=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*o*a*n)}function Ai(e){return e.getNumImages()>=1&&!e.isUASTC()}function Ci(e){return e.getFaces()>=1&&e.isETC1S()}async function xs(e,t,r){ce==null&&(ce=await Ei());const o=new ce.BasisFile(new Uint8Array(r));if(!Ai(o))return null;o.startTranscoding();const i=wi(e,t,o.getNumLevels(0),o.getHasAlpha(),o.getImageWidth(0,0),o.getImageHeight(0,0),(a,n)=>o.getImageTranscodedSizeInBytes(0,a,n),(a,n,l)=>o.transcodeImage(l,0,a,n,0,0));return o.close(),o.delete(),i}async function _s(e,t,r){ce==null&&(ce=await Ei());const o=new ce.KTX2File(new Uint8Array(r));if(!Ci(o))return null;o.startTranscoding();const i=wi(e,t,o.getLevels(),o.getHasAlpha(),o.getWidth(),o.getHeight(),(a,n)=>o.getImageTranscodedSizeInBytes(a,0,0,n),(a,n,l)=>o.transcodeImage(l,a,0,0,n,0,-1,-1));return o.close(),o.delete(),i}function wi(e,t,r,o,i,a,n,l){const{compressedTextureETC:c,compressedTextureS3TC:u}=e.capabilities,[d,h]=c?o?[Fe.ETC2_RGBA,me.COMPRESSED_RGBA8_ETC2_EAC]:[Fe.ETC1_RGB,me.COMPRESSED_RGB8_ETC2]:u?o?[Fe.BC3_RGBA,me.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Fe.BC1_RGB,me.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Fe.RGBA32,Re.RGBA],v=t.hasMipmap?r:Math.min(1,r),f=[];for(let T=0;T<v;T++)f.push(new Uint8Array(n(T,d))),l(T,d,f[T]);return t.internalFormat=h,t.hasMipmap=f.length>1,t.samplingMode=t.hasMipmap?je.LINEAR_MIPMAP_LINEAR:je.LINEAR,t.width=i,t.height=a,new We(e,t,{type:"compressed",levels:f})}const jt=()=>Ur.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Ts=542327876,bs=131072,Es=4;function Cr(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function Ss(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const As=Cr("DXT1"),Cs=Cr("DXT3"),ws=Cr("DXT5"),Ms=31,Os=0,ys=1,Rs=2,Is=3,Ls=4,Ns=7,Ps=20,Ds=21;function Fs(e,t,r){const o=Bs(r,t.hasMipmap??!1);if(o==null)throw new Error("DDS texture data is null");const{textureData:i,internalFormat:a,width:n,height:l}=o;return t.samplingMode=i.levels.length>1?je.LINEAR_MIPMAP_LINEAR:je.LINEAR,t.hasMipmap=i.levels.length>1,t.internalFormat=a,t.width=n,t.height=l,new We(e,t,i)}function Bs(e,t){const r=new Int32Array(e.buffer,e.byteOffset,Ms);if(r[Os]!==Ts)return jt().error("Invalid magic number in DDS header"),null;if(!(r[Ps]&Es))return jt().error("Unsupported format, must contain a FourCC code"),null;const o=r[Ds];let i,a;switch(o){case As:i=8,a=me.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Cs:i=16,a=me.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case ws:i=16,a=me.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return jt().error("Unsupported FourCC code:",Ss(o)),null}let n=1,l=r[Ls],c=r[Is];(3&l||3&c)&&(jt().warn("Rounding up compressed texture size to nearest multiple of 4."),l=l+3&-4,c=c+3&-4);const u=l,d=c;let h,v;r[Rs]&bs&&t!==!1&&(n=Math.max(1,r[Ns]));let f=e.byteOffset+r[ys]+4;const T=[];for(let _=0;_<n;++_)v=(l+3>>2)*(c+3>>2)*i,h=new Uint8Array(e.buffer,f,v),T.push(h),f+=v,l=Math.max(1,l>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:T},internalFormat:a,width:u,height:d}}function zs(e,t){let r=e.width*e.height;if(r<4096)return e instanceof ImageData?Mi(e):e;let o=e.width,i=e.height;do o=Math.ceil(o/2),i=Math.ceil(i/2),r=o*i;while(r>1048576||t!=null&&(o>t||i>t));return wr(e,o,i)}function Gs(e,t){const r=Math.max(e.width,e.height);if(r<=t)return e;const o=t/r;return wr(e,Math.round(e.width*o),Math.round(e.height*o))}function wr(e,t,r){if(e instanceof ImageData)return wr(Mi(e),t,r);const o=document.createElement("canvas");return o.width=t,o.height=r,o.getContext("2d").drawImage(e,0,0,o.width,o.height),o}function Mi(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");if(r==null)throw new ve("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}let Vs=class extends sr{get parameters(){return this._parameters}constructor(e,t){super(),this._data=e,this.type=Ze.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new $i,this._parameters={...Us,...t},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){e!=null&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(jr(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const r=()=>{e.removeEventListener("canplay",r),e.play()};e.addEventListener("canplay",r)}}}_startPreloadImageElement(e){qi(e.src)||jr(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const t=new $r;return t.wrapMode=this._parameters.wrap??ct.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?je.LINEAR_MIPMAP_LINEAR:je.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.usedMemory||Hs(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return t==null?(this._glTexture=new We(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),typeof t=="string"?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):nt(t)&&this._parameters.encoding===Ue.DDS_ENCODING?this._loadFromDDSData(e,t):st(t)&&this._parameters.encoding===Ue.DDS_ENCODING?this._loadFromDDSData(e,new Uint8Array(t)):(st(t)||nt(t))&&this._parameters.encoding===Ue.KTX2_ENCODING?this._loadFromKTX2(e,t):(st(t)||nt(t))&&this._parameters.encoding===Ue.BASIS_ENCODING?this._loadFromBasis(e,t):nt(t)?this._loadFromPixelData(e,t):st(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return this._glTexture==null||e.readyState<bt.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=Fs(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync(()=>_s(e,this._createDescriptor(e),t).then(r=>(this._glTexture=r,r)))}_loadFromBasis(e,t){return this._loadAsync(()=>xs(e,this._createDescriptor(e),t).then(r=>(this._glTexture=r,r)))}_loadFromPixelData(e,t){j(this._parameters.width>0&&this._parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=this._parameters.components===1?Re.LUMINANCE:this._parameters.components===3?Re.RGB:Re.RGBA,r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new We(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync(async r=>{const o=await oa(t,{signal:r});return Wr(r),this._loadFromImage(e,o)})}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync(async r=>{const o=await ki(t,t.src,!1,r);return Wr(r),this._loadFromImage(e,o)})}_loadFromVideoElement(e,t){return t.readyState>=bt.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync(r=>new Promise((o,i)=>{const a=()=>{t.removeEventListener("loadeddata",n),t.removeEventListener("error",l),Ji(c)},n=()=>{t.readyState>=bt.HAVE_CURRENT_DATA&&(a(),o(this._loadFromImage(e,t)))},l=u=>{a(),i(u||new ve("Failed to load video"))};t.addEventListener("loadeddata",n),t.addEventListener("error",l);const c=Yi(r,()=>l(Xi()))}))}_loadFromImage(e,t){let r=t;if(!(r instanceof HTMLVideoElement)){const{maxTextureSize:a}=e.parameters;r=this._parameters.downsampleUncompressed?zs(r,a):Gs(r,a)}const o=Oi(r);this._parameters.width=o.width,this._parameters.height=o.height;const i=this._createDescriptor(e);return i.pixelFormat=this._parameters.components===3?Re.RGB:Re.RGBA,i.width=o.width,i.height=o.height,this._glTexture=new We(e,i,r),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const o=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(o,o),r}unload(){if(this._glTexture=At(this._glTexture),this._loadingController!=null){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}};function Hs(e,t){if(e==null)return 0;if(st(e)||nt(e))return t.encoding===Ue.KTX2_ENCODING?gs(e,!!t.mipmap):t.encoding===Ue.BASIS_ENCODING?vs(e,!!t.mipmap):e.byteLength;const{width:r,height:o}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Oi(e):t;return(t.mipmap?4/3:1)*r*o*(t.components||4)||0}function Oi(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}var bt;(function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(bt||(bt={}));const Us={wrap:{s:ct.REPEAT,t:ct.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};class js{constructor(t=!1,r=!0){this.isVerticalRay=t,this.normalRequired=r}}const Wt=Zi();function Ws(e,t,r,o,i,a){if(!e.visible)return;const n=qe(il,o,r),l=(u,d,h)=>{a(u,h,d,!1)},c=new js(!1,t.options.normalRequired);if(e.boundingInfo){j(e.type===Ze.Mesh);const u=t.tolerance;yi(e.boundingInfo,r,n,u,i,c,l)}else{const u=e.attributes.get(p.POSITION),d=u.indices;ks(r,n,0,d.length/3,d,u.data,u.stride,i,c,l)}}const $s=y();function yi(e,t,r,o,i,a,n){if(e==null)return;const l=Qs(r,$s);if(Ki(Wt,e.bbMin),Qi(Wt,e.bbMax),i?.applyToAabb(Wt),el(Wt,t,l,o)){const{primitiveIndices:c,position:u}=e,d=c?c.length:u.indices.length/3;if(d>rl){const h=e.getChildren();if(h!==void 0){for(const v of h)yi(v,t,r,o,i,a,n);return}}qs(t,r,0,d,u.indices,u.data,u.stride,c,i,a,n)}}const Et=y();function qs(e,t,r,o,i,a,n,l,c,u,d){const h=e[0],v=e[1],f=e[2],T=t[0],_=t[1],x=t[2],{normalRequired:V}=u;for(let D=r;D<o;++D){const B=l[D],P=3*B,G=n*i[P];let w=a[G],S=a[G+1],E=a[G+2];const M=n*i[P+1];let O=a[M],g=a[M+1],L=a[M+2];const C=n*i[P+2];let H=a[C],$=a[C+1],K=a[C+2];c!=null&&([w,S,E]=c.applyToVertex(w,S,E,D),[O,g,L]=c.applyToVertex(O,g,L,D),[H,$,K]=c.applyToVertex(H,$,K,D));const ee=O-w,Ee=g-S,Se=L-E,Ae=H-w,Ce=$-S,he=K-E,we=_*he-Ce*x,Me=x*Ae-he*T,ze=T*Ce-Ae*_,se=ee*we+Ee*Me+Se*ze;if(Math.abs(se)<=ol)continue;const Ge=h-w,Yt=v-S,Xt=f-E,Ve=Ge*we+Yt*Me+Xt*ze;if(se>0){if(Ve<0||Ve>se)continue}else if(Ve>0||Ve<se)continue;const Nr=Yt*Se-Ee*Xt,Pr=Xt*ee-Se*Ge,Dr=Ge*Ee-ee*Yt,St=T*Nr+_*Pr+x*Dr;if(se>0){if(St<0||Ve+St>se)continue}else if(St>0||Ve+St<se)continue;const Fr=(Ae*Nr+Ce*Pr+he*Dr)/se;Fr>=0&&d(Fr,B,V?Zs(ee,Ee,Se,Ae,Ce,he,Et):null)}}function ks(e,t,r,o,i,a,n,l,c,u){const d=t,h=al,v=Math.abs(d[0]),f=Math.abs(d[1]),T=Math.abs(d[2]),_=v>=f?v>=T?0:2:f>=T?1:2,x=_,V=d[x]<0?2:1,D=(_+V)%3,B=(_+(3-V))%3,P=d[D]/d[x],G=d[B]/d[x],w=1/d[x],S=Ys,E=Xs,M=Js,{normalRequired:O}=c;for(let g=r;g<o;++g){const L=3*g,C=n*i[L];Y(h[0],a[C+0],a[C+1],a[C+2]);const H=n*i[L+1];Y(h[1],a[H+0],a[H+1],a[H+2]);const $=n*i[L+2];Y(h[2],a[$+0],a[$+1],a[$+2]),l&&(yt(h[0],l.applyToVertex(h[0][0],h[0][1],h[0][2],g)),yt(h[1],l.applyToVertex(h[1][0],h[1][1],h[1][2],g)),yt(h[2],l.applyToVertex(h[2][0],h[2][1],h[2][2],g))),qe(S,h[0],e),qe(E,h[1],e),qe(M,h[2],e);const K=S[D]-P*S[x],ee=S[B]-G*S[x],Ee=E[D]-P*E[x],Se=E[B]-G*E[x],Ae=M[D]-P*M[x],Ce=M[B]-G*M[x],he=Ae*Se-Ce*Ee,we=K*Ce-ee*Ae,Me=Ee*ee-Se*K;if((he<0||we<0||Me<0)&&(he>0||we>0||Me>0))continue;const ze=he+we+Me;if(ze===0)continue;const se=he*(w*S[x])+we*(w*E[x])+Me*(w*M[x]);if(se*Math.sign(ze)<0)continue;const Ge=se/ze;Ge>=0&&u(Ge,g,O?Ks(h):null)}}const Ys=y(),Xs=y(),Js=y();function Zs(e,t,r,o,i,a,n){return Y($t,e,t,r),Y(qt,o,i,a),kr(n,$t,qt),er(n,n),n}function Ks(e){return qe($t,e[1],e[0]),qe(qt,e[2],e[0]),kr(Et,$t,qt),er(Et,Et),Et}const $t=y(),qt=y();function Qs(e,t){return Y(t,1/e[0],1/e[1],1/e[2])}function el(e,t,r,o){return tl(e,t,r,o,1/0)}function tl(e,t,r,o,i){const a=(e[0]-o-t[0])*r[0],n=(e[3]+o-t[0])*r[0];let l=Math.min(a,n),c=Math.max(a,n);const u=(e[1]-o-t[1])*r[1],d=(e[4]+o-t[1])*r[1];if(c=Math.min(c,Math.max(u,d)),c<0||(l=Math.max(l,Math.min(u,d)),l>c))return!1;const h=(e[2]-o-t[2])*r[2],v=(e[5]+o-t[2])*r[2];return c=Math.min(c,Math.max(h,v)),!(c<0)&&(l=Math.max(l,Math.min(h,v)),!(l>c)&&l<i)}const rl=1e3,ol=1e-7,il=y(),al=[y(),y(),y()];function nl(e,t,r,o=1){const{data:i,indices:a}=e,n=t.typedBuffer,l=t.typedBufferStride,c=a.length;if(r*=l,o===1)for(let u=0;u<c;++u)n[r]=i[a[u]],r+=l;else for(let u=0;u<c;++u){const d=i[a[u]];for(let h=0;h<o;h++)n[r]=d,r+=l}}function Ri(e,t,r){const{data:o,indices:i}=e,a=t.typedBuffer,n=t.typedBufferStride,l=i.length;r*=n;for(let c=0;c<l;++c){const u=2*i[c];a[r]=o[u],a[r+1]=o[u+1],r+=n}}function Ii(e,t,r,o){const{data:i,indices:a}=e,n=t.typedBuffer,l=t.typedBufferStride,c=a.length;if(r*=l,o==null||o===1)for(let u=0;u<c;++u){const d=3*a[u];n[r]=i[d],n[r+1]=i[d+1],n[r+2]=i[d+2],r+=l}else for(let u=0;u<c;++u){const d=3*a[u];for(let h=0;h<o;++h)n[r]=i[d],n[r+1]=i[d+1],n[r+2]=i[d+2],r+=l}}function Mr(e,t,r,o=1){const{data:i,indices:a}=e,n=t.typedBuffer,l=t.typedBufferStride,c=a.length;if(r*=l,o===1)for(let u=0;u<c;++u){const d=4*a[u];n[r]=i[d],n[r+1]=i[d+1],n[r+2]=i[d+2],n[r+3]=i[d+3],r+=l}else for(let u=0;u<c;++u){const d=4*a[u];for(let h=0;h<o;++h)n[r]=i[d],n[r+1]=i[d+1],n[r+2]=i[d+2],n[r+3]=i[d+3],r+=l}}function sl(e,t,r){const o=e.typedBuffer,i=e.typedBufferStride;t*=i;for(let a=0;a<r;++a)o[t]=0,o[t+1]=0,o[t+2]=0,o[t+3]=0,t+=i}function Li(e,t,r,o,i=1){if(!t)return void Ii(e,r,o,i);const{data:a,indices:n}=e,l=r.typedBuffer,c=r.typedBufferStride,u=n.length,d=t[0],h=t[1],v=t[2],f=t[4],T=t[5],_=t[6],x=t[8],V=t[9],D=t[10],B=t[12],P=t[13],G=t[14];o*=c;let w=0,S=0,E=0;const M=Qr(t)?O=>{w=a[O]+B,S=a[O+1]+P,E=a[O+2]+G}:O=>{const g=a[O],L=a[O+1],C=a[O+2];w=d*g+f*L+x*C+B,S=h*g+T*L+V*C+P,E=v*g+_*L+D*C+G};if(i===1)for(let O=0;O<u;++O)M(3*n[O]),l[o]=w,l[o+1]=S,l[o+2]=E,o+=c;else for(let O=0;O<u;++O){M(3*n[O]);for(let g=0;g<i;++g)l[o]=w,l[o+1]=S,l[o+2]=E,o+=c}}function Ni(e,t,r,o,i=1){if(!t)return void Ii(e,r,o,i);const{data:a,indices:n}=e,l=t,c=r.typedBuffer,u=r.typedBufferStride,d=n.length,h=l[0],v=l[1],f=l[2],T=l[4],_=l[5],x=l[6],V=l[8],D=l[9],B=l[10],P=!eo(l),G=1e-6,w=1-G;o*=u;let S=0,E=0,M=0;const O=Qr(l)?g=>{S=a[g],E=a[g+1],M=a[g+2]}:g=>{const L=a[g],C=a[g+1],H=a[g+2];S=h*L+T*C+V*H,E=v*L+_*C+D*H,M=f*L+x*C+B*H};if(i===1)if(P)for(let g=0;g<d;++g){O(3*n[g]);const L=S*S+E*E+M*M;if(L<w&&L>G){const C=1/Math.sqrt(L);c[o]=S*C,c[o+1]=E*C,c[o+2]=M*C}else c[o]=S,c[o+1]=E,c[o+2]=M;o+=u}else for(let g=0;g<d;++g)O(3*n[g]),c[o]=S,c[o+1]=E,c[o+2]=M,o+=u;else for(let g=0;g<d;++g){if(O(3*n[g]),P){const L=S*S+E*E+M*M;if(L<w&&L>G){const C=1/Math.sqrt(L);S*=C,E*=C,M*=C}}for(let L=0;L<i;++L)c[o]=S,c[o+1]=E,c[o+2]=M,o+=u}}function ll(e,t,r,o,i=1){if(!t)return void Mr(e,r,o,i);const{data:a,indices:n}=e,l=t,c=r.typedBuffer,u=r.typedBufferStride,d=n.length,h=l[0],v=l[1],f=l[2],T=l[4],_=l[5],x=l[6],V=l[8],D=l[9],B=l[10],P=!eo(l),G=1e-6,w=1-G;if(o*=u,i===1)for(let S=0;S<d;++S){const E=4*n[S],M=a[E],O=a[E+1],g=a[E+2],L=a[E+3];let C=h*M+T*O+V*g,H=v*M+_*O+D*g,$=f*M+x*O+B*g;if(P){const K=C*C+H*H+$*$;if(K<w&&K>G){const ee=1/Math.sqrt(K);C*=ee,H*=ee,$*=ee}}c[o]=C,c[o+1]=H,c[o+2]=$,c[o+3]=L,o+=u}else for(let S=0;S<d;++S){const E=4*n[S],M=a[E],O=a[E+1],g=a[E+2],L=a[E+3];let C=h*M+T*O+V*g,H=v*M+_*O+D*g,$=f*M+x*O+B*g;if(P){const K=C*C+H*H+$*$;if(K<w&&K>G){const ee=1/Math.sqrt(K);C*=ee,H*=ee,$*=ee}}for(let K=0;K<i;++K)c[o]=C,c[o+1]=H,c[o+2]=$,c[o+3]=L,o+=u}}function Pi(e,t,r,o,i=1){const{data:a,indices:n}=e,l=r.typedBuffer,c=r.typedBufferStride,u=n.length;if(o*=c,t!==a.length||t!==4)if(i!==1)if(t!==4)for(let d=0;d<u;++d){const h=3*n[d];for(let v=0;v<i;++v)l[o]=a[h],l[o+1]=a[h+1],l[o+2]=a[h+2],l[o+3]=255,o+=c}else for(let d=0;d<u;++d){const h=4*n[d];for(let v=0;v<i;++v)l[o]=a[h],l[o+1]=a[h+1],l[o+2]=a[h+2],l[o+3]=a[h+3],o+=c}else{if(t===4){for(let d=0;d<u;++d){const h=4*n[d];l[o]=a[h],l[o+1]=a[h+1],l[o+2]=a[h+2],l[o+3]=a[h+3],o+=c}return}for(let d=0;d<u;++d){const h=3*n[d];l[o]=a[h],l[o+1]=a[h+1],l[o+2]=a[h+2],l[o+3]=255,o+=c}}else{l[o]=a[0],l[o+1]=a[1],l[o+2]=a[2],l[o+3]=a[3];const d=new Uint32Array(r.typedBuffer.buffer,r.start),h=c/4,v=d[o/=4];o+=h;const f=u*i;for(let T=1;T<f;++T)d[o]=v,o+=h}}function cl(e,t,r){const{data:o,indices:i}=e,a=t.typedBuffer,n=t.typedBufferStride,l=i.length,c=o[0];r*=n;for(let u=0;u<l;++u)a[r]=c,r+=n}function Di(e,t,r,o,i=1){const a=t.typedBuffer,n=t.typedBufferStride;if(o*=n,i===1)for(let l=0;l<r;++l)a[o]=e[0],a[o+1]=e[1],a[o+2]=e[2],a[o+3]=e[3],o+=n;else for(let l=0;l<r;++l)for(let c=0;c<i;++c)a[o]=e[0],a[o+1]=e[1],a[o+2]=e[2],a[o+3]=e[3],o+=n}function dl(e,t,r,o,i,a,n){for(const l of r.fields.keys()){const c=e.get(l),u=c?.indices;if(c&&u)ul(l,c,o,i,a,n);else if(l===p.OBJECTANDLAYERIDCOLOR&&t!=null){const d=e.get(p.POSITION)?.indices;if(d){const h=d.length;Di(t,a.getField(l,ro),h,n)}}}}function ul(e,t,r,o,i,a){switch(e){case p.POSITION:{j(t.size===3);const n=i.getField(e,io);j(!!n,`No buffer view for ${e}`),n&&Li(t,r,n,a);break}case p.NORMAL:{j(t.size===3);const n=i.getField(e,io);j(!!n,`No buffer view for ${e}`),n&&Ni(t,o,n,a);break}case p.NORMALCOMPRESSED:{j(t.size===2);const n=i.getField(e,wa);j(!!n,`No buffer view for ${e}`),n&&Ri(t,n,a);break}case p.UV0:{j(t.size===2);const n=i.getField(e,Ca);j(!!n,`No buffer view for ${e}`),n&&Ri(t,n,a);break}case p.COLOR:case p.SYMBOLCOLOR:{const n=i.getField(e,ro);j(!!n,`No buffer view for ${e}`),j(t.size===3||t.size===4),!n||t.size!==3&&t.size!==4||Pi(t,t.size,n,a);break}case p.COLORFEATUREATTRIBUTE:{const n=i.getField(e,Aa);j(!!n,`No buffer view for ${e}`),j(t.size===1),n&&t.size===1&&cl(t,n,a);break}case p.TANGENT:{j(t.size===4);const n=i.getField(e,oo);j(!!n,`No buffer view for ${e}`),n&&ll(t,r,n,a);break}case p.PROFILERIGHT:case p.PROFILEUP:case p.PROFILEVERTEXANDNORMAL:case p.FEATUREVALUE:{j(t.size===4);const n=i.getField(e,oo);j(!!n,`No buffer view for ${e}`),n&&Mr(t,n,a)}}}class hl{constructor(t){this.vertexBufferLayout=t}elementCount(t){return t.get(p.POSITION).indices.length}write(t,r,o,i,a,n){dl(o,i,this.vertexBufferLayout,t,r,a,n)}}class ml{constructor(t){this._bits=[...t]}equals(t){return Gr(this._bits,t.bits)}get code(){return this._code??=String.fromCharCode(...this._bits),this._code}get bits(){return this._bits}}let fl=class extends ke{constructor(){super(),this._parameterBits=this._parameterBits?.map(()=>0)??[],this._parameterNames??=[]}get key(){return this._key??=new ml(this._parameterBits),this._key}decode(e=this.key){const t=this._parameterBits;this._parameterBits=[...e.bits];const r=this._parameterNames.map(o=>`    ${o}: ${this[o]}`).join(`
`);return this._parameterBits=t,r}};function b(e={}){return(t,r)=>{t.hasOwnProperty("_parameterNames")||Object.defineProperty(t,"_parameterNames",{value:t._parameterNames?.slice()??[],configurable:!0,writable:!0}),t.hasOwnProperty("_parameterBits")||Object.defineProperty(t,"_parameterBits",{value:t._parameterBits?.slice()??[0],configurable:!0,writable:!0}),t._parameterNames.push(r);const o=e.count||2,i=Math.ceil(Math.log2(o)),a=t._parameterBits;let n=0;for(;a[n]+i>16;)n++,n>=a.length&&a.push(0);const l=a[n],c=(1<<i)-1<<l;a[n]+=i,e.count?Object.defineProperty(t,r,{get(){return(this._parameterBits[n]&c)>>l},set(u){if(this[r]!==u){if(this._key=null,this._parameterBits[n]=this._parameterBits[n]&~c|+u<<l&c,typeof u!="number")throw new ve(`Configuration value for ${r} must be a number, got ${typeof u}`);if(e.count==null)throw new ve(`Configuration value for ${r} must provide a count option`)}}}):Object.defineProperty(t,r,{get(){return!!((this._parameterBits[n]&c)>>l)},set(u){if(this[r]!==u&&(this._key=null,this._parameterBits[n]=this._parameterBits[n]&~c|+u<<l&c,typeof u!="boolean"))throw new ve(`Configuration value for ${r} must be boolean, got ${typeof u}`)}})}}let Or=class extends fl{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}};m([b()],Or.prototype,"instancedDoublePrecision",void 0),m([b()],Or.prototype,"hasModelTransformation",void 0);let kt=class extends Or{constructor(){super(...arguments),this.output=F.Color,this.oitPass=k.NONE,this.hasSliceHighlight=!0,this.hasSliceInVertexProgram=!1,this.bindType=I.Pass,this.writeDepth=!0}};m([b({count:F.COUNT})],kt.prototype,"output",void 0),m([b({count:k.COUNT})],kt.prototype,"oitPass",void 0);class A extends kt{constructor(t,r){super(),this.spherical=t,this.doublePrecisionRequiresObfuscation=r,this.alphaDiscardMode=xe.Opaque,this.doubleSidedMode=oe.None,this.pbrMode=N.Disabled,this.cullFace=lt.None,this.normalType=Q.Attribute,this.customDepthTest=Mt.Less,this.emissionSource=ne.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===ne.Texture||this.hasOcclusionTexture||this.hasNormalTexture?Z.Default:Z.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}m([b({count:xe.COUNT})],A.prototype,"alphaDiscardMode",void 0),m([b({count:oe.COUNT})],A.prototype,"doubleSidedMode",void 0),m([b({count:N.COUNT})],A.prototype,"pbrMode",void 0),m([b({count:lt.COUNT})],A.prototype,"cullFace",void 0),m([b({count:Q.COUNT})],A.prototype,"normalType",void 0),m([b({count:Mt.COUNT})],A.prototype,"customDepthTest",void 0),m([b({count:ne.COUNT})],A.prototype,"emissionSource",void 0),m([b()],A.prototype,"hasVertexColors",void 0),m([b()],A.prototype,"hasSymbolColors",void 0),m([b()],A.prototype,"hasVerticalOffset",void 0),m([b()],A.prototype,"hasSlicePlane",void 0),m([b()],A.prototype,"hasSliceHighlight",void 0),m([b()],A.prototype,"hasColorTexture",void 0),m([b()],A.prototype,"hasMetallicRoughnessTexture",void 0),m([b()],A.prototype,"hasOcclusionTexture",void 0),m([b()],A.prototype,"hasNormalTexture",void 0),m([b()],A.prototype,"hasScreenSizePerspective",void 0),m([b()],A.prototype,"hasVertexTangents",void 0),m([b()],A.prototype,"hasOccludees",void 0),m([b()],A.prototype,"hasModelTransformation",void 0),m([b()],A.prototype,"offsetBackfaces",void 0),m([b()],A.prototype,"vvSize",void 0),m([b()],A.prototype,"vvColor",void 0),m([b()],A.prototype,"receiveShadows",void 0),m([b()],A.prototype,"receiveAmbientOcclusion",void 0),m([b()],A.prototype,"textureAlphaPremultiplied",void 0),m([b()],A.prototype,"instanced",void 0),m([b()],A.prototype,"instancedColor",void 0),m([b()],A.prototype,"writeDepth",void 0),m([b()],A.prototype,"transparent",void 0),m([b()],A.prototype,"enableOffset",void 0),m([b()],A.prototype,"terrainDepthTest",void 0),m([b()],A.prototype,"cullAboveTerrain",void 0),m([b()],A.prototype,"snowCover",void 0),m([b()],A.prototype,"hasColorTextureTransform",void 0),m([b()],A.prototype,"hasEmissionTextureTransform",void 0),m([b()],A.prototype,"hasNormalTextureTransform",void 0),m([b()],A.prototype,"hasOcclusionTextureTransform",void 0),m([b()],A.prototype,"hasMetallicRoughnessTextureTransform",void 0);function Fi(e){const t=new xt,{vertex:r,fragment:o,varyings:i}=t,{output:a,offsetBackfaces:n,instancedColor:l,pbrMode:c,snowCover:u,spherical:d}=e,h=c===N.Normal||c===N.Schematic;if(Pe(r,e),t.include(ar),i.add("vpos","vec3"),t.include(et,e),t.include(Do,e),t.include(Ho,e),a===F.Color&&(Qe(t.vertex,e),t.include(Rt,e),t.include(Ke,e),n&&t.include(wo),l&&t.attributes.add(p.INSTANCECOLOR,"vec4"),i.add("vNormalWorld","vec3"),i.add("localvpos","vec3"),e.terrainDepthTest&&i.add("depth","float"),t.include(De,e),t.include(Co,e),t.include(Fo,e),t.include(Bo,e),r.uniforms.add(new te("externalColor",v=>v.externalColor)),i.add("vcolorExt","vec4"),r.main.add(s`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${R(l,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      if (vcolorExt.a < ${s.float(Te)}) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      } else {
        vpos = getVertexInLocalOriginSpace();
        localvpos = vpos - view[3].xyz;
        vpos = subtractOrigin(vpos);
        vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        ${R(n,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
      }
      ${R(e.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
      forwardLinearDepth();
      forwardTextureCoordinates();`)),a===F.Color){const{hasColorTexture:v,hasColorTextureTransform:f,receiveShadows:T}=e;t.include(mi,e),t.include(_r,e),t.include(tt,e),t.include(e.instancedDoublePrecision?fi:pi,e),t.include(Sr,e),t.include(Ne,e),t.include(xi,e),Qe(t.fragment,e),Ht(o),br(o),Er(o),o.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new q("ambient",_=>_.ambient),new q("diffuse",_=>_.diffuse),new re("opacity",_=>_.opacity),new re("layerOpacity",_=>_.layerOpacity)),v&&o.uniforms.add(new J("tex",_=>_.texture)),t.include(ci,e),t.include(Tr,e),o.include(gi),Tt(o),o.main.add(s`
      discardBySlice(vpos);
      ${R(e.terrainDepthTest,"terrainDepthTest(depth);")}
      vec4 texColor = ${v?`texture(tex, ${f?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${R(v,`${R(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${T?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":d?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?s`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:s`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${R(u,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${s`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${R(h,`vec3 normalGround = ${d?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${h?s`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${R(u,s`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${u?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:s`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return t.include(ko,e),t}const pl=Object.freeze(Object.defineProperty({__proto__:null,build:Fi},Symbol.toStringTag,{value:"Module"}));class vl extends Ti{constructor(t,r,o){super(t,r,o,new pt(pl,()=>import("./HUDMaterial.glsl-CwwoCmqt.js").then(i=>i.R))),this.type="RealisticTreeTechnique"}}class gl extends xo{constructor(t,r){super(t,_l),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[Je.OPAQUE_MATERIAL,o=>(Zr(o)||rr(o))&&!this.parameters.transparent],[Je.TRANSPARENT_MATERIAL,o=>(Zr(o)||rr(o))&&this.parameters.transparent&&this.parameters.writeDepth],[Je.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,o=>(pa(o)||rr(o))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=bl(this.parameters),this._configuration=new A(r.spherical,r.doublePrecisionRequiresObfuscation)}isVisibleForOutput(t){return t!==F.Shadow&&t!==F.ShadowExcludeHighlight&&t!==F.ShadowHighlight||this.parameters.castShadows}get visible(){const t=this.parameters;if(t.layerOpacity<Te)return!1;const{hasInstancedColor:r,hasVertexColors:o,hasSymbolColors:i,vvColor:a}=t,n=r||a||i,l=t.colorMixMode==="replace",c=t.opacity>=Te;if(o&&n)return l||c;const u=t.externalColor&&t.externalColor[3]>=Te;return o?l?u:c:n?l||c:l?u:c}get hasEmissions(){return!!this.parameters.emissiveTextureId||!qr(this.parameters.emissiveFactor,He)}getConfiguration(t,r){const o=this.parameters,{treeRendering:i,doubleSided:a,doubleSidedType:n}=o;return this._configuration.output=t,this._configuration.hasNormalTexture=!i&&!!o.normalTextureId,this._configuration.hasColorTexture=!!o.textureId,this._configuration.hasVertexTangents=!i&&o.hasVertexTangents,this._configuration.instanced=o.isInstanced,this._configuration.instancedDoublePrecision=o.instancedDoublePrecision,this._configuration.vvSize=!!o.vvSize,this._configuration.hasVerticalOffset=o.verticalOffset!=null,this._configuration.hasScreenSizePerspective=o.screenSizePerspective!=null,this._configuration.hasSlicePlane=o.hasSlicePlane,this._configuration.hasSliceHighlight=o.hasSliceHighlight,this._configuration.alphaDiscardMode=o.textureAlphaMode,this._configuration.normalType=i?Q.Attribute:o.normalType,this._configuration.transparent=o.transparent,this._configuration.writeDepth=o.writeDepth,o.customDepthTest!=null&&(this._configuration.customDepthTest=o.customDepthTest),this._configuration.hasOccludees=r.hasOccludees,this._configuration.cullFace=o.hasSlicePlane?lt.None:o.cullFace,this._configuration.terrainDepthTest=r.terrainDepthTest,this._configuration.cullAboveTerrain=r.cullAboveTerrain,this._configuration.hasModelTransformation=!i&&o.modelTransformation!=null,this._configuration.hasVertexColors=o.hasVertexColors,this._configuration.hasSymbolColors=o.hasSymbolColors,this._configuration.doubleSidedMode=i?oe.WindingOrder:a&&n==="normal"?oe.View:a&&n==="winding-order"?oe.WindingOrder:oe.None,this._configuration.instancedColor=o.hasInstancedColor,this._configuration.receiveShadows=o.receiveShadows&&o.receiveShadows,this._configuration.receiveAmbientOcclusion=o.receiveAmbientOcclusion&&r.ssao!=null,this._configuration.vvColor=!!o.vvColor,this._configuration.textureAlphaPremultiplied=!!o.textureAlphaPremultiplied,this._configuration.pbrMode=o.usePBR?o.isSchematic?N.Schematic:N.Normal:N.Disabled,this._configuration.hasMetallicRoughnessTexture=!i&&!!o.metallicRoughnessTextureId,this._configuration.emissionSource=i?ne.None:o.emissiveTextureId!=null?ne.Texture:o.usePBR?ne.Value:ne.None,this._configuration.hasOcclusionTexture=!i&&!!o.occlusionTextureId,this._configuration.offsetBackfaces=!(!o.transparent||!o.offsetTransparentBackfaces),this._configuration.oitPass=r.oitPass,this._configuration.enableOffset=r.camera.relativeElevation<Ja,this._configuration.snowCover=Tl(r),this._configuration.hasColorTextureTransform=!!o.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!o.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!o.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!o.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!o.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(t,r,o,i,a,n){if(this.parameters.verticalOffset!=null){const l=o.camera;Y(Rr,r[12],r[13],r[14]);let c=null;switch(o.viewingMode){case tr.Global:c=er(Bi,Rr);break;case tr.Local:c=yt(Bi,Al)}let u=0;const d=ut(Cl,Rr,l.eye),h=_e(d),v=Yr(d,d,1/h);let f=null;this.parameters.screenSizePerspective&&(f=ua(c,v)),u+=fo(l,h,this.parameters.verticalOffset,f??0,this.parameters.screenSizePerspective),Yr(c,c,u),ha(yr,c,o.transform.inverseRotation),i=ut(El,i,yr),a=ut(Sl,a,yr)}Ws(t,o,i,a,Va(o.verticalOffset),n)}createGLMaterial(t){return new xl(t)}createBufferWriter(){return new hl(this._vertexBufferLayout)}}class xl extends si{constructor(t){super({...t,...t.material.parameters})}beginSlot(t){this._material.setParameters({receiveShadows:t.shadowMap.enabled});const r=this._material.parameters;this.updateTexture(r.textureId);const o=t.camera.viewInverseTransposeMatrix;return Y(r.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(r.treeRendering?vl:Ti,t)}}class _l extends us{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}function Tl(e){return e.weather!=null&&e.weatherVisible&&e.weather.type==="snowy"&&e.weather.snowCover==="enabled"}function bl(e){const t=fa().vec3f(p.POSITION);return e.normalType===Q.Compressed?t.vec2i16(p.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(p.NORMAL),e.hasVertexTangents&&t.vec4f(p.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(p.UV0),e.hasVertexColors&&t.vec4u8(p.COLOR),e.hasSymbolColors&&t.vec4u8(p.SYMBOLCOLOR),ao()&&t.vec4u8(p.OBJECTANDLAYERIDCOLOR),t}const El=y(),Sl=y(),Al=Ct(0,0,1),Bi=y(),yr=y(),Rr=y(),Cl=y();let wl=class zi{constructor(t,r,o){this.primitiveIndices=t,this._numIndexPerPrimitive=r,this.position=o,this._children=void 0,j(t.length>=1),j(o.size===3||o.size===4);const{data:i,size:a,indices:n}=o;j(n.length%this._numIndexPerPrimitive==0),j(n.length>=t.length*this._numIndexPerPrimitive);const l=t.length;let c=a*n[this._numIndexPerPrimitive*t[0]];Be.clear(),Be.push(c);const u=Ct(i[c],i[c+1],i[c+2]),d=ea(u);for(let f=0;f<l;++f){const T=this._numIndexPerPrimitive*t[f];for(let _=0;_<this._numIndexPerPrimitive;++_){c=a*n[T+_],Be.push(c);let x=i[c];u[0]=Math.min(x,u[0]),d[0]=Math.max(x,d[0]),x=i[c+1],u[1]=Math.min(x,u[1]),d[1]=Math.max(x,d[1]),x=i[c+2],u[2]=Math.min(x,u[2]),d[2]=Math.max(x,d[2])}}this.bbMin=u,this.bbMax=d;const h=Xr(y(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(d[0]-u[0],d[1]-u[1]),d[2]-u[2]);let v=this.radius*this.radius;for(let f=0;f<Be.length;++f){c=Be.at(f);const T=i[c]-h[0],_=i[c+1]-h[1],x=i[c+2]-h[2],V=T*T+_*_+x*x;if(V<=v)continue;const D=Math.sqrt(V),B=.5*(D-this.radius);this.radius=this.radius+B,v=this.radius*this.radius;const P=B/D;h[0]+=T*P,h[1]+=_*P,h[2]+=x*P}this.center=h,Be.clear()}getChildren(){if(this._children||ma(this.bbMin,this.bbMax)<=1)return this._children;const t=Xr(y(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,o=new Uint8Array(r),i=new Array(8);for(let d=0;d<8;++d)i[d]=0;const{data:a,size:n,indices:l}=this.position;for(let d=0;d<r;++d){let h=0;const v=this._numIndexPerPrimitive*this.primitiveIndices[d];let f=n*l[v],T=a[f],_=a[f+1],x=a[f+2];for(let V=1;V<this._numIndexPerPrimitive;++V){f=n*l[v+V];const D=a[f],B=a[f+1],P=a[f+2];D<T&&(T=D),B<_&&(_=B),P<x&&(x=P)}T<t[0]&&(h|=1),_<t[1]&&(h|=2),x<t[2]&&(h|=4),o[d]=h,++i[h]}let c=0;for(let d=0;d<8;++d)i[d]>0&&++c;if(c<2)return;const u=new Array(8);for(let d=0;d<8;++d)u[d]=i[d]>0?new Uint32Array(i[d]):void 0;for(let d=0;d<8;++d)i[d]=0;for(let d=0;d<r;++d){const h=o[d];u[h][i[h]++]=this.primitiveIndices[d]}this._children=new Array;for(let d=0;d<8;++d)u[d]!==void 0&&this._children.push(new zi(u[d],this._numIndexPerPrimitive,this.position));return this._children}static prune(){Be.prune()}};const Be=new Vr({deallocator:null});function Ml(e){if(e.length<Br)return Array.from(e);if(ta(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return ra(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}export{si as $,Je as A,gl as B,Vs as C,et as D,jo as E,Ar as F,Le as G,mn as H,ur as I,k as J,Ft as K,pt as L,To as M,hs as N,nr as O,Ne as P,b as Q,kt as R,Z as S,ka as T,ne as U,xo as V,lr as W,$a as X,Wa as Y,fo as Z,Tn as _,wl as a,li as a0,Bt as a1,ao as a2,Li as a3,Ni as a4,Pi as a5,nl as a6,Mr as a7,sl as a8,Di as a9,Qo as aa,ii as ab,Vt as ac,_i as ad,Fi as ae,an as b,Ia as c,X as d,Ze as e,co as f,Na as g,vo as h,zo as i,Pe as j,Qe as k,te as l,re as m,on as n,Ml as o,Uo as p,No as q,sr as r,nn as s,bo as t,Go as u,hi as v,hn as w,Sr as x,J as y,xt as z};
