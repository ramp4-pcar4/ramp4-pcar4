import{S as e,m as t}from"./mathUtils-B8Pbjr-0.js";import{n}from"./Error-BLNxTZXW.js";import{n as r,t as i}from"./decorators-DjO8WY5-.js";import{b as a}from"./promiseUtils-DnJQjFxA.js";import{s as o}from"./reactiveUtils-DgZFsnE-.js";import{r as s}from"./tslib.es6-CVTII-xV.js";import{G as c}from"./fieldUtils-mUgUU5-4.js";import{T as l}from"./aaBoundingRect-BZO579S4.js";import{C as u,E as d,l as f}from"./vec2-CaA6hqP1.js";import{f as p}from"./mat3-Cq_9WtPN.js";import{t as m}from"./mat3f64-Dy80iIif.js";import{l as h,s as g}from"./vec3f64-AlvO6xQn.js";import{A as _,M as v,P as y,b,f as x,i as S,k as C,n as w,s as T,v as ee,w as E,y as D}from"./vec3-ClQKZZz-.js";import{t as O}from"./mat4f64-CfZSfBjp.js";import{b as te}from"./mat4-DSO-PSgk.js";import{n as k,t as A}from"./unitConversionUtils-CoxM-sw9.js";import{a as j,c as M,o as N}from"./vec2f64-BboENI_i.js";import{a as ne,l as re,n as ie,s as ae}from"./vec4f64-DXTW_O4m.js";import{h as oe,q as se}from"./BufferView-DulaDPJF.js";import{a as ce}from"./GridLocalOriginFactory-CJPXzGGZ.js";import{Bt as le,G as ue,H as de,It as fe,L as P,N as pe,O as me,Rt as he,U as ge,Vt as _e,Z as F,_t as ve,at as ye,bt as be,ct as xe,g as Se,h as Ce,it as we,n as Te,nt as Ee,ot as De,r as Oe,rt as ke,tt as Ae,v as je,w as Me,wt as Ne,x as Pe,y as Fe,yt as Ie}from"./TriangleTechniqueConfiguration-B0Mc-FdP.js";import{_ as Le,a as Re,d as ze,f as Be,g as Ve,i as He,p as Ue,v as I}from"./SceneLighting-CPjMLrqt.js";import{g as We,h as Ge}from"./enums-DbMIex2k.js";import{d as Ke,n as qe,o as Je}from"./renderState-DPK327gI.js";import{c as Ye,d as L,f as R,l as z,o as B}from"./oitResolution.glsl-GKlYUQFU.js";import{t as Xe}from"./ShaderBuilder-CSrAKPgp.js";import{f as Ze,m as V,o as H,s as Qe}from"./Emissions.glsl-CZ7LcZnm.js";import{i as $e,n as et}from"./InterleavedLayout-B84f2gUG.js";import{i as tt}from"./hydratedFeatures-WdY3XG6H.js";import{l as nt,n as rt,r as it}from"./BooleanBindUniform-B-zeuGnC.js";import{n as at,r as ot,t as st}from"./AlignPixel.glsl-tz2NxYIs.js";import{r as ct,t as lt}from"./FocusAreaColor.glsl-DWu6k2MJ.js";var ut=()=>n.getLogger(`esri.views.3d.layers.graphics.featureExpressionInfoUtils`);function dt(e){return{cachedResult:e.cachedResult,arcade:e.arcade?{func:e.arcade.func,context:e.arcade.modules.arcadeUtils.createExecContext(null,{sr:e.arcade.context.spatialReference}),modules:e.arcade.modules}:null}}async function ft(e,t,n,r){let i=e?.expression;if(typeof i!=`string`)return null;let o=yt(i);if(o!=null)return{cachedResult:o};let s=await c();a(n);let l=s.arcadeUtils,u=l.createSyntaxTree(i);if(!u)return null;if(l.dependsOnView(u))return r?.error(`Expressions containing '$view' are not supported on ElevationInfo`),{cachedResult:0};let d=l.createFunction(u);return d?{arcade:{modules:s,func:d,context:l.createExecContext(null,{sr:t})}}:null}function pt(e,t,n){return e.arcadeUtils.createFeature(t.attributes,t.geometry,n)}function mt(e,t){if(e!=null&&!vt(e)){if(!t||!e.arcade)return void ut().errorOncePerTick(`Arcade support required but not provided`);let n=t;n._geometry&&=tt(n._geometry),e.arcade.modules.arcadeUtils.updateExecContext(e.arcade.context,t)}}function ht(e){if(e!=null){if(vt(e))return e.cachedResult;let t=e.arcade,n=t?.modules.arcadeUtils.executeFunction(t.func,t.context);return typeof n!=`number`&&(e.cachedResult=0,n=0),n}return 0}function gt(e,t=!1){let n=e?.featureExpressionInfo,r=n?.expression;return t||r===`0`||(n=null),n??null}var _t={cachedResult:0};function vt(e){return e.cachedResult!=null}function yt(e){return e===`0`?0:null}var bt=class e{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit=`meters`,this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.mode=null,this.centerInElevationSR=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=k(e)}get requiresSampledElevationInfo(){return this.mode!==`absolute-height`}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit=`meters`}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,t){let n=this.calculateOffsetRenderUnits(t);return this.featureExpressionInfoContext==null?e+n:n}calculateOffsetRenderUnits(e){let t=this._meterUnitOffset,n=this.featureExpressionInfoContext;return n!=null&&(t+=ht(n)*this._metersPerElevationInfoUnit),t/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=A(e.unit)?e.unit:`meters`,this.offsetElevationInfoUnits=e.offset??0}setFeatureExpressionInfoContext(e){this._featureExpressionInfoContext=e}updateFeatureExpressionInfoContextForGraphic(e,t,n){e.arcade?(this._featureExpressionInfoContext=dt(e),this.updateFeatureExpressionFeature(t,n)):this._featureExpressionInfoContext=e}updateFeatureExpressionFeature(e,t){let n=this.featureExpressionInfoContext;n?.arcade&&(n.cachedResult=void 0,mt(this._featureExpressionInfoContext,e.geometry?pt(n.arcade.modules,e,t):null))}static fromElevationInfo(t){let n=new e;return t!=null&&n.setFromElevationInfo(t),n}},U=class extends fe{constructor(){super(...arguments),this.shader=new he(ct,()=>import(`./FocusAreaColor.glsl-CTfcyKHI.js`)),this.ignoreUnused=!0}initializePipeline(){return qe({colorWrite:Je})}};U=s([r(`esri.views.3d.webgl-engine.effects.focusArea.FocusAreaColorTechnique`)],U);var W=class extends Le{constructor(e){super({...e,view:e.focusAreasView.view}),this.consumes={required:[I.FOCUSAREA_COLOR,I.FOCUSAREA]},this.produces=I.FOCUSAREA_COLOR,this._fadeDirection=0,this._passParameters=new lt}fadeOut(e){this.removeAllHandles(),this._startTime=null,this._fadeDirection=1,this.addHandles(o(()=>this._passParameters.fadeFactor.value,t=>{t===0&&(this.removeAllHandles(),e())})),this.requestRender(2)}render(e){let t=e.find(({name:e})=>e===this.produces),n=this.techniques.getCompiled(U);if(!n)return this.requestRender(1),t;let r=this.focusAreasView.style,i=this.bindParameters,a=i.camera,o=a.fullViewport[2],s=a.fullViewport[3];this._startTime??=this.view.stage?.renderer.renderContext.time;let c=this.view.qualitySettings.fadeDuration,l=c>0?Math.min(c,this.view.stage?.renderer.renderContext.time-this._startTime)/c:1,u=e.find(({name:e})=>e===I.FOCUSAREA),d=this.fboCache.acquire(o,s,this.produces),f=this.renderingContext;return f.bindFramebuffer(d.fbo),this._passParameters.color=t.getTexture(),this._passParameters.focusArea=u.getTexture(),this._passParameters.effect=xt[r],this._passParameters.fadeFactor.value=this._fadeDirection===0?l:1-l,f.bindTechnique(n,i,this._passParameters),f.screen.draw(),d.attachDepth(t.getAttachment(We)),l<1&&this.requestRender(2),d}};s([i()],W.prototype,`consumes`,void 0),s([i()],W.prototype,`produces`,void 0),s([i({constructOnly:!0})],W.prototype,`focusAreasView`,void 0),W=s([r(`esri.views.3d.webgl-engine.effects.focusArea.FocusAreaColorNode`)],W);var xt={bright:0,dark:1},St=e=>e?xt[e]:0;function Ct(e){let t=new Xe;t.include(at,e),t.vertex.include(ge,e);let{output:n,hasOcclusionTexture:r,signedDistanceFieldEnabled:i,pixelSnappingEnabled:a,hasEmission:o,hasScreenSizePerspective:s,debugDrawLabelBorder:c,hasVVSize:l,hasVVColor:u,hasRotation:f,occludedFragmentFade:p,sampleSignedDistanceFieldTexelCenter:m,hasVertexColor:h,hasVertexSize:g,hasVertexRotation:_,hasVertexUVi:v}=e;t.include(Be),t.include(pe,e),t.include(de,e),t.include(Se,e);let{vertex:y,fragment:b}=t;b.include(Me),b.code.add(R`
    vec4 applyFocusAreaStyle(vec4 color, int style) {
      const float factor = 0.46;
      const float factorBright = 0.32;

      if (style == ${R.int(0)}) {
        float luma = (color.r + color.g + color.b) / 3.0;
        float bright = luma * (1.0 - 0.6 * factorBright) + 0.6 * factorBright * color.a;
        float brightScaled = bright * factorBright;
        return vec4(brightScaled, brightScaled, brightScaled, color.a * factorBright);
      }

      float darkScaled = factor * factor;
      return vec4(color.rgb * darkScaled, color.a * factor);
    }
  `),t.varyings.add(`vcolor`,`vec4`),t.varyings.add(`vtc`,`vec2`),t.varyings.add(`vsize`,`vec2`);let x=n===10;y.uniforms.add(new Re(`viewport`,e=>e.camera.fullViewport),new He(`screenOffset`,(e,t)=>d(K,2*e.screenOffset[0]*t.camera.pixelRatio,2*e.screenOffset[1]*t.camera.pixelRatio)),new He(`anchorPosition`,e=>G(e)),new P(`materialColor`,({color:e})=>e),new z(`materialRotation`,e=>e.rotation),new He(`materialSize`,e=>e.size),new Ye(`tex`,e=>e.texture)),me(y),i&&(y.uniforms.add(new P(`outlineColor`,e=>e.outlineColor)),b.uniforms.add(new P(`outlineColor`,e=>wt(e)?e.outlineColor:ie),new z(`outlineSize`,e=>wt(e)?e.outlineSize:0))),a&&y.include(st),s&&(Ue(y),ze(y)),c&&t.varyings.add(`debugBorderCoords`,`vec4`),t.attributes.add(`uv0`,`vec2`),v&&t.attributes.add(`uvi`,`vec4`),h&&t.attributes.add(`color`,`vec4`),g&&t.attributes.add(`size`,`vec2`),_&&t.attributes.add(`rotation`,`float`),(l||u)&&t.attributes.add(`featureAttribute`,`vec4`),y.main.add(R`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${ce};
      return;
    }

    vec2 vertexSize = materialSize${L(g,` * size`)};
    vec2 inputSize;
    ${L(s,R`
        inputSize = screenSizePerspectiveScaleVec2(vertexSize, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,R`
        inputSize = vertexSize;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${L(l,R`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);
  `);let S=R`
  ${L(v,R`
    vec2 texSize = vec2(textureSize(tex, 0));
    vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0)) / texSize;
    `,R`
    vec2 uv = mix(vec2(0.), vec2(1.), bvec2(uv0));
    `)}

    quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

    ${L(f,R`
        float angle = radians(materialRotation${L(_,` + rotation`)});
        float cosAngle = cos(angle);
        float sinAngle = sin(angle);
        mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

        quadOffset.xy = rotate * quadOffset.xy;
      `)}

    quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,C=a?i?R`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:R`posProj += quadOffset;
if (inputSize.x == vertexSize.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:R`posProj += quadOffset;`;y.include(Pe),y.main.add(R`
    ${S}
    ${u?`vcolor = interpolateVVColor(featureAttribute.y) * materialColor;`:h?`vcolor = color * materialColor;`:`vcolor = materialColor;`}

    ${L(n===11,R`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < alphaCutoff;
    ${L(i,`alphaDiscard = alphaDiscard && outlineColor.a < alphaCutoff;`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${C}
      gl_Position = posProj;
    }

    vtc = uv;

    ${L(c,R`debugBorderCoords = vec4(uv0, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `);let w=V(n)&&e.hasFocusAreaStyle&&!e.draped;switch(b.uniforms.add(new Ye(`tex`,e=>e.texture)),w&&b.uniforms.add(new Ve(`focusAreaStyle`,e=>St(e.focusAreaStyle))),p&&!x&&(b.include(nt),b.uniforms.add(new Fe(`depthMap`,e=>e.mainDepth),new z(`occludedOpacity`,e=>e.occludedFragmentOpacity?.value??1))),r&&b.uniforms.add(new Fe(`texOcclusion`,e=>e.hudOcclusion?.attachment)),c?b.main.add(`
        float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));
        // don't discard fragments on debug border
        float textureAlphaCutoff = isBorder > 0.0 ? 0.0 : alphaCutoff;
      `):b.main.add(`float textureAlphaCutoff = alphaCutoff;`),b.main.add(`vec2 samplePos = vtc;`),m&&b.main.add(R`float txSize = float(textureSize(tex, 0).x);
float texelSize = 1.0 / txSize;
vec2 scaleFactor = (vsize - txSize) * texelSize;
samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`),i?b.main.add(R`
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
          outlineAlphaFactor + fillAlphaFactor < textureAlphaCutoff ||
          fillPixelColor.a + outlinePixelColor.a < alphaCutoff
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
                              vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${L(!x,R`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < textureAlphaCutoff) {
          discard;
        }

        ${L(!x,R`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `):b.main.add(R`
        vec4 texColor = texture(tex, samplePos, -0.5);
        if (texColor.a < textureAlphaCutoff) {
          discard;
        }
        ${L(!x,R`fragColor = texColor * premultiplyAlpha(vcolor);`)}
      `),p&&!x&&b.main.add(R`
        float zSample = -linearizeDepth(texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x);
        float zFragment = -linearizeDepth(gl_FragCoord.z);
        if (zSample < ${R.float(1-Et)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `),r&&b.main.add(`fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;`),!x&&c&&b.main.add(`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`),n===2&&b.main.add(R`if (fragColor.a < alphaCutoff) {
discard;
}`),w&&b.main.add(R`fragColor = applyFocusAreaStyle(fragColor, focusAreaStyle);`),V(n)&&o&&b.main.add(`fragEmission = vec4(0.0);`),n){case 1:b.main.add(`
        fragColor = vec4(fragColor.rgb * floatBlendOutputScale, fragColor.a);
        fragAlpha = fragColor.a * floatBlendOutputScale;
      `);break;case 2:b.main.add(`fragColor.rgb /= fragColor.a;`);break;case 11:b.main.add(`outputObjectAndLayerIdColor();`);break;case 10:t.include(je,e),b.main.add(`outputHighlight(false);`)}return t}function wt(e){return e.outlineColor[3]>0&&e.outlineSize>0}function G(e){return e.textureIsSignedDistanceField?Tt(e.anchorPosition,e.distanceFieldBoundingBox,K):u(K,e.anchorPosition),K}var K=N();function Tt(e,t,n){d(n,e[0]*(t[2]-t[0])+t[0],e[1]*(t[3]-t[1])+t[1])}var Et=.08,Dt=Object.freeze(Object.defineProperty({__proto__:null,anchorPosition:G,build:Ct},Symbol.toStringTag,{value:`Module`})),Ot=class extends fe{constructor(e,t){super(e,t,$e(kt).concat($e(At(t)))),this.shader=new he(Dt,()=>import(`./HUDMaterial.glsl-C8ayPVNb.js`)),this.ignoreUnused=!0,this.primitiveType=Ge.TRIANGLE_STRIP}initializePipeline(e){let{draped:t,output:n,depthTestEnabled:r}=e,i=Qe(n),a=r&&!t&&!i&&n!==10;return qe({blending:Ce(n,!0),depthTest:r&&!t?{func:515}:null,depthWrite:a?Ke:null,colorWrite:Je,polygonOffset:Oe(e)})}};Ot=s([r(`esri.views.3d.webgl-engine.shaders.HUDMaterialTechnique`)],Ot);var kt=et().vec2u8(`uv0`,{glNormalized:!0});function At(e){let t=et().vec3f(`position`).vec3f(`normal`).f32(`groundDistance`);return e.hasVertexCenterOffset&&(t=t.vec3f(`centerOffset`)),e.hasVertexColor&&(t=t.vec4u8(`color`,{glNormalized:!0})),e.hasVertexSize&&(t=t.vec2f(`size`)),e.hasVertexRotation&&(t=t.f32(`rotation`)),(e.hasVVColor||e.hasVVSize)&&(t=t.vec4f(`featureAttribute`)),e.hasVertexUVi&&(t=t.vec4i16(`uvi`)),le()?t.vec4u8(`olidColor`):t}var q=class extends Te{constructor(e,t){super(),this.spherical=e,this.polygonOffset=0,this.enableOITOffset=!1,this.screenCenterOffsetUnitsEnabled=!1,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.occludedFragmentFade=!1,this.hasOcclusionTexture=!1,this.hasFocusAreaStyle=!1,this.hasVertexColor=!0,this.hasVertexSize=!0,this.hasVertexRotation=!0,this.hasVertexUVi=!0,this.hasVertexCenterOffset=!0,this.olidColorInstanced=!1,this.textureCoordinateType=0,this.emissionSource=0,this.discardInvisibleFragments=!0,this.hasVVInstancing=!1,this.snowCover=!1,this.transparentOccluded=t}};s([B()],q.prototype,`transparentOccluded`,void 0),s([B({count:5})],q.prototype,`polygonOffset`,void 0),s([B()],q.prototype,`enableOITOffset`,void 0),s([B()],q.prototype,`screenCenterOffsetUnitsEnabled`,void 0),s([B()],q.prototype,`signedDistanceFieldEnabled`,void 0),s([B()],q.prototype,`sampleSignedDistanceFieldTexelCenter`,void 0),s([B()],q.prototype,`hasVVSize`,void 0),s([B()],q.prototype,`hasVVColor`,void 0),s([B()],q.prototype,`hasVerticalOffset`,void 0),s([B()],q.prototype,`hasScreenSizePerspective`,void 0),s([B()],q.prototype,`hasRotation`,void 0),s([B()],q.prototype,`debugDrawLabelBorder`,void 0),s([B()],q.prototype,`depthTestEnabled`,void 0),s([B()],q.prototype,`pixelSnappingEnabled`,void 0),s([B()],q.prototype,`draped`,void 0),s([B()],q.prototype,`occludedFragmentFade`,void 0),s([B()],q.prototype,`hasOcclusionTexture`,void 0),s([B()],q.prototype,`hasFocusAreaStyle`,void 0),s([B()],q.prototype,`hasVertexColor`,void 0),s([B()],q.prototype,`hasVertexSize`,void 0),s([B()],q.prototype,`hasVertexRotation`,void 0),s([B()],q.prototype,`hasVertexUVi`,void 0),s([B()],q.prototype,`hasVertexCenterOffset`,void 0);var jt=class extends Ie{constructor(e,t,n=!1){super(e,Jt),this.produces=new Map([[12,e=>H(e)&&!this.parameters.drawAsLabel&&!this._configuration.transparentOccluded],[13,e=>H(e)&&!this.parameters.drawAsLabel&&this._configuration.transparentOccluded],[14,e=>H(e)&&this.parameters.drawAsLabel],[18,e=>this.parameters.draped&&H(e)]]),this._visible=!0,this._configuration=new q(t,n)}updateConfiguration(e){super.updateConfiguration(e);let{parameters:t,_configuration:n}=this,r=t.draped;n.enableOITOffset=e.enableOITOffset,n.hasSlicePlane=this.parameters.hasSlicePlane,n.hasVerticalOffset=!!this.parameters.verticalOffset,n.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,n.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits===`screen`,n.polygonOffset=this.parameters.polygonOffset,n.draped=r,n.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,n.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,n.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,n.hasRotation=this.parameters.hasRotation,n.hasVVSize=!!this.parameters.vvSize,n.hasVVColor=!!this.parameters.vvColor,n.occludedFragmentFade=!r&&!!this.parameters.occludedFragmentOpacity,n.hasFocusAreaStyle=this.parameters.focusAreaStyle!=null,n.depthTestEnabled=this.parameters.depthEnabled,n.hasVertexColor=this.parameters.hasVertexColor,n.hasVertexSize=this.parameters.hasVertexSize,n.hasVertexRotation=this.parameters.hasVertexRotation,n.hasVertexUVi=this.parameters.hasVertexUVi,n.hasVertexCenterOffset=this.parameters.hasVertexCenterOffset,V(e.output)&&(n.debugDrawLabelBorder=!!_e.LABELS_SHOW_BORDER),n.hasOcclusionTexture=!t.drawAsLabel&&n.transparentOccluded&&Ze(e.output)}intersect(e,t,n,r,i,a){let{options:{selectionMode:o,hud:s,excludeLabels:c},point:l,camera:u}=n,{parameters:d}=this;if(!o||!s||c&&d.isLabel||!e.visible||!l||!u)return;let f=e.attributes.get(`featureAttribute`),{scaleX:m,scaleY:h}=Xt(f==null?null:re(f.data,Ut),d,u.pixelRatio),w=e.attributes.get(`position`),T=e.attributes.get(`size`),O=e.attributes.get(`normal`),k=e.attributes.get(`rotation`),A=e.attributes.get(`centerOffset`),j=this.parameters.size;se(w.size>=3);let M=this.parameters.centerOffsetUnits===`screen`;for(let e=0;e<w.data.length/w.size;e++){let r=e*w.size;if(v(J,w.data[r],w.data[r+1],w.data[r+2]),x(J,J,t),x(J,J,u.viewMatrix),A){let t=e*A.size;v(Q,A.data[t],A.data[t+1],A.data[t+2])}else v(Q,0,0,0);if(!M&&(J[0]+=Q[0],J[1]+=Q[1],Q[2]!==0)){let e=Q[2];ee(Q,J),b(J,J,y(Q,Q,e))}let i=e*O.size;v(Y,O.data[i],O.data[i+1],O.data[i+2]),S(Y,Y,p(Bt,t));let{normal:o,cosAngle:s}=Pt(Y,u,Wt);if(E(J,J,o,Qt(this.parameters,J,s,u,It)),u.applyProjection(J,X),X[0]>-1){if(M&&(Q[0]||Q[1])&&(X[0]+=Q[0]*u.pixelRatio,Q[1]!==0&&(X[1]+=It.alignmentEvaluator.apply(Q[1])*u.pixelRatio),u.unapplyProjection(X,J)),X[0]+=this.parameters.screenOffset[0]*u.pixelRatio,X[1]+=this.parameters.screenOffset[1]*u.pixelRatio,X[0]=Math.floor(X[0]),X[1]=Math.floor(X[1]),$[0]=j[0],$[1]=j[1],T!=null){let t=e*T.size;$[0]*=T.data[t],$[1]*=T.data[t+1]}It.evaluator.applyVec2($,$);let t=Gt*u.pixelRatio,r=0;d.textureIsSignedDistanceField&&(r=Math.min(d.outlineSize,.5*$[0])*u.pixelRatio/2),$[0]*=m,$[1]*=h;let i=d.rotation+(k==null?0:k.data[e*k.size]),o=G(d);if(Ft(l,X[0],X[1],$,t,r,i,d,o)){let e=n.ray;if(x(Rt,J,te(Vt,u.viewMatrix)),X[0]=l[0],X[1]=l[1],u.unprojectFromRenderScreen(X,J)){let t=g();C(t,e.direction);let n=1/D(t);y(t,t,n),a(_(e.origin,J)*n,t,-1,Rt)}}}}}intersectDraped(e,t,n,r,i){let a=e.attributes.get(`position`),o=e.attributes.get(`size`),s=e.attributes.get(`rotation`),c=this.parameters,l=c.size,u=e.attributes.get(`featureAttribute`),{scaleX:d,scaleY:f}=Xt(u==null?null:re(u.data,Ut),c,e.screenToWorldRatio),p=Kt*e.screenToWorldRatio;for(let t=0;t<a.data.length/a.size;t++){let u=t*a.size,m=a.data[u],h=a.data[u+1];if($[0]=l[0],$[1]=l[1],o!=null){let e=t*o.size;$[0]*=o.data[e],$[1]*=o.data[e+1]}let g=0;c.textureIsSignedDistanceField&&(g=Math.min(c.outlineSize,.5*$[0])*e.screenToWorldRatio/2),$[0]*=d,$[1]*=f;let _=c.rotation+(s==null?0:s.data[t*s.size]),v=G(c);Ft(n,m,h,$,p,g,_,c,v)&&r(i.distance,i.normal,-1)}}createBufferWriter(){return new Yt(this.parameters)}applyShaderOffsets(e,t,n,r,i,a,o,s){S(Lt,n,p(Bt,r));let c=Pt(Lt,o,Wt),l=Zt(D(t),o),u=Qt(this.parameters,t,c.cosAngle,o,s);E(t,t,c.normal,u+l),E(e,e,Lt,u+l);let d=a+u;this._applyPolygonOffsetView(t,c,d,o,t),this._applyCenterOffsetView(t,i,t)}applyShaderOffsetsNDC(e,t,n,r,i,a){return this._applyCenterOffsetNDC(e,t,r,i),a!=null&&C(a,i),this._applyPolygonOffsetNDC(i,n,r,i),i}_applyPolygonOffsetView(t,n,r,i,a){let o=i.aboveGround?1:-1,s=Math.sign(r);s===0&&(s=o);let c=o*s;if(this.parameters.shaderPolygonOffset<=0)return C(a,t);let l=e(Math.abs(n.cosAngle),.01,1),u=1-Math.sqrt(1-l*l)/l/i.viewport[2];return y(a,t,c>0?u:1/u),a}_applyCenterOffsetView(e,t,n){let r=this.parameters.centerOffsetUnits!==`screen`;return n!==e&&C(n,e),r&&(n[0]+=t[0],n[1]+=t[1],t[2]&&(ee(Y,n),T(n,n,y(Y,Y,t[2])))),n}_applyCenterOffsetNDC(e,t,n,r){let i=this.parameters.centerOffsetUnits!==`screen`;return r!==e&&C(r,e),i||(r[0]+=t[0]/n.fullWidth*2,r[1]+=t[1]/n.fullHeight*2),r}_applyPolygonOffsetNDC(e,t,n,r){let i=this.parameters.shaderPolygonOffset;if(e!==r&&C(r,e),i){let e=n.aboveGround?1:-1,a=e*Math.sign(t);r[2]-=(a||e)*i}return r}set visible(e){this._visible=e}get visible(){let{color:e,outlineSize:t,outlineColor:n}=this.parameters,r=e[3]>=.003913894324853229||t>=.003913894324853229&&n[3]>=.003913894324853229;return this._visible&&r}createGLMaterial(e){return new Mt(e)}calculateRelativeScreenBounds(e,t,n=l()){return Nt(this.parameters,e,t,n),n[2]=n[0]+e[0],n[3]=n[1]+e[1],n}},Mt=class extends it{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(Ot,e)}};function Nt(e,t,n,r){r[0]=e.anchorPosition[0]*-t[0]+e.screenOffset[0]*n,r[1]=e.anchorPosition[1]*-t[1]+e.screenOffset[1]*n}function Pt(e,t,n){return x(n.normal,e,t.viewInverseTransposeMatrix),n.cosAngle=w(n.normal,qt),n}function Ft(e,n,r,i,a,o,s,c,l){let u=n-a-i[0]*l[0],p=u+i[0]+2*a,m=r-a-i[1]*l[1],h=m+i[1]+2*a,g=c.distanceFieldBoundingBox;return c.textureIsSignedDistanceField&&g!=null&&(u+=i[0]*g[0],m+=i[1]*g[1],p-=i[0]*(1-g[2]),h-=i[1]*(1-g[3]),u-=o,p+=o,m-=o,h+=o),d(zt,n,r),f(Z,e,zt,t(s)),Z[0]>u&&Z[0]<p&&Z[1]>m&&Z[1]<h}var It=new Ne,J=g(),Y=g(),X=ne(),Lt=g(),Rt=g(),Z=N(),zt=N(),Bt=m(),Vt=O(),Q=g(),Ht=g(),Ut=ne(),Wt={normal:g(),cosAngle:0},Gt=1,Kt=2,$=j(0,0),qt=h(0,0,1),Jt=class extends rt{constructor(){super(...arguments),this.renderOccluded=1,this.testsTransparentRenderOrder=0,this.isDecoration=!1,this.color=ae,this.size=M,this.polygonOffset=0,this.anchorPosition=j(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=ae,this.outlineSize=0,this.distanceFieldBoundingBox=ne(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.hasVertexColor=!1,this.hasVertexSize=!1,this.hasVertexRotation=!1,this.hasVertexUVi=!1,this.hasVertexCenterOffset=!1,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.centerOffsetUnits=`world`,this.drawAsLabel=!1,this.depthEnabled=!0,this.focusAreaStyle=null,this.draped=!1,this.isLabel=!1}get hasVVSize(){return!!this.vvSize}get hasVVColor(){return!!this.vvColor}get hasVVOpacity(){return!!this.vvOpacity}},Yt=class{constructor(e){this.baseInstanceLayout=kt,this.layout=At(e)}elementCount(e){return e.get(`position`).indices.length}elementCountBaseInstance(e){return e.get(`uv0`).indices.length}write(e,t,n,r,i){if(i==null)return;let{buffer:a,offset:o}=i,{position:s,normal:c,color:l,size:u,rotation:d,centerOffset:f,groundDistance:p,featureAttribute:m,uvi:h}=a;De(n.get(`position`),e,s,o),Ee(n.get(`normal`),t,c,o);let g=n.get(`position`).indices.length;if(h){let e=n.get(`uvi`)?.data;if(e&&e.length>=4){let[t,n,r,i]=e;for(let e=0;e<g;++e){let a=o+e;h.setValues(a,t,n,r,i)}}}if(l&&ue(n.get(`color`),4,l,o),u&&Ae(n.get(`size`),u,o),d&&xe(n.get(`rotation`),d,o),f&&(n.get(`centerOffset`)?ke(n.get(`centerOffset`),f,o):F(f,o,g)),n.get(`groundDistance`)?xe(n.get(`groundDistance`),p,o):F(p,o,g),m&&(n.get(`featureAttribute`)?ye(n.get(`featureAttribute`),m,o):F(m,o,g)),r!=null){let e=n.get(`position`)?.indices;if(e){let t=e.length;we(r,a.getField(`olidColor`,oe),t,o)}}}writeBaseInstance(e,t){let{uv0:n}=t;Ae(e.get(`uv0`),n,0)}};function Xt(e,t,n){return e==null||t.vvSize==null?{scaleX:n,scaleY:n}:(ve(Ht,t,e),{scaleX:Ht[0]*n,scaleY:Ht[1]*n})}function Zt(e,t){let n=t.computeRenderPixelSizeAtDist(e)*ot;return(t.aboveGround?1:-1)*n}function Qt(e,t,n,r,i){if(!e.verticalOffset?.screenLength){let r=D(t);return i.update(n,r,e.screenSizePerspective,e.screenSizePerspectiveMinPixelReferenceSize,e.screenSizePerspectiveAlignment,null),0}let a=D(t),o=e.screenSizePerspectiveAlignment??e.screenSizePerspective,s=be(r,a,e.verticalOffset,n,o,e.screenSizePerspectiveMinPixelReferenceSize);return i.update(n,a,e.screenSizePerspective,e.screenSizePerspectiveMinPixelReferenceSize,e.screenSizePerspectiveAlignment,null),s}export{gt as a,bt as i,Ct as n,_t as o,G as r,ft as s,jt as t};