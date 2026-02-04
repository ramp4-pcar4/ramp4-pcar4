import{a8 as dt,q as P,aj as G,ah as ft,cG as pt,d8 as ht,dC as gt}from"./main-6eEsl9OJ.js";import{o as mt}from"./floatRGBA-BJ3lztEL.js";import{e as Se,a as vt,r as St,u as Re,n as pe}from"./vec4f64-DPb6J-GU.js";import{a7 as xt,L as bt,ae as Ct,aP as Ot,s as $t,H as Tt,M as Pt,a9 as At,o as Et,R as Fe,ad as ge,c as Ie,I as we,w as yt,aQ as zt,i as Rt,D as q,k as Ft,e as It,K as wt,aH as ee,V as _t,W as Dt,al as Mt,aR as jt,as as Lt,O as Nt,at as Ut,au as A,av as Bt,aw as k,t as Vt,aS as We,aT as Xe,aU as qt,ai as Ht,aV as Gt,ay as Wt,aC as Xt,aW as Qt,aX as kt,aY as Zt,aZ as Yt,a_ as _e,a$ as De,b0 as Kt,aD as Jt,b1 as Me}from"./OutputColorHighlightOID.glsl-BRMxJ4Ru.js";import{P as je,R as Le,C as eo}from"./enums-UBzvFP7O.js";import{n as Qe}from"./mat3-CruJiiUv.js";import{e as ke}from"./mat3f64-B5o_lm6j.js";import{h as Ze}from"./mat4-DL3nuHcq.js";import{e as to}from"./mat4f64-q_b6UJoq.js";import{r as oo,o as Pe,I as ao}from"./vec2-ChnYg_BJ.js";import{n as Ae,r as Ye}from"./vec2f64-Cgb6qxNH.js";import{o as ce,E as Z,A as xe,c as Ke,g as H,s as W,r as oe,p as Je,u as Ee,R as io,N as so,P as ro}from"./vec32-BvrGiqaM.js";import{s as no,g as lo,o as Ne,f as co,y as uo,T as Ue}from"./BufferView-r56Foetm.js";import{O as fo}from"./InterleavedLayout-BZ1aEhNI.js";import{n as N,u as et,w as me}from"./ShaderOutput-Bdd80V3g.js";import{l as tt,u as po,n as ho,b as go,d as mo}from"./dehydratedFeatureUtils-DwO6J-ZF.js";import{e as d}from"./VertexAttribute-BfkzOMLV.js";import{_ as vo}from"./preload-helper-B76NpbEU.js";import{B as So,o as xo,g as bo,p as Co}from"./renderState-D2jq0MiL.js";import{n as f,t as y}from"./glsl-Cj7KC756.js";import{a as Oo}from"./BindType-BBwFZqyN.js";import"./vec42-CKs01hkn.js";import{i as $o}from"./ShaderBuilder-Bp451WLi.js";let To=class extends xt{constructor(e,t){super(e,"vec4",Oo.Draw,(a,i,s)=>a.setUniform4fv(e,t(i,s)))}};const ye=128,Q=.5,$a=Se(Q/2,Q/2,1-Q/2,1-Q/2);function Ta(o){return o==="cross"||o==="x"}function Pa(o,e=ye,t=e*Q,a=0){const{data:i,parameters:s}=Po(o,e,t,a);return new bt(i,s)}function Po(o,e=ye,t=e*Q,a=0){return{data:Ao(o,e,t,a),parameters:{mipmap:!1,wrap:{s:je.CLAMP_TO_EDGE,t:je.CLAMP_TO_EDGE},width:e,height:e,components:4,noUnpackFlip:!0,reloadable:!0}}}function Ao(o,e=ye,t=e*Q,a=0){switch(o){case"circle":default:return Eo(e,t);case"square":return yo(e,t);case"cross":return Ro(e,t,a);case"x":return Fo(e,t,a);case"kite":return zo(e,t);case"triangle":return Io(e,t);case"arrow":return wo(e,t)}}function Eo(o,e){const t=o/2-.5;return ie(o,it(t,t,e/2))}function yo(o,e){return ot(o,e,!1)}function zo(o,e){return ot(o,e,!0)}function Ro(o,e,t=0){return at(o,e,!1,t)}function Fo(o,e,t=0){return at(o,e,!0,t)}function Io(o,e){return ie(o,st(o/2,e,e/2))}function wo(o,e){const t=e,a=e/2,i=o/2,s=.8*t,r=it(i,(o-e)/2-s,Math.sqrt(s*s+a*a)),l=st(i,t,a);return ie(o,(u,n)=>Math.max(l(u,n),-r(u,n)))}function ot(o,e,t){return t&&(e/=Math.SQRT2),ie(o,(a,i)=>{let s=a-.5*o+.25,r=.5*o-i-.75;if(t){const l=(s+r)/Math.SQRT2;r=(r-s)/Math.SQRT2,s=l}return Math.max(Math.abs(s),Math.abs(r))-.5*e})}function at(o,e,t,a=0){e-=a,t&&(e*=Math.SQRT2);const i=.5*e;return ie(o,(s,r)=>{let l,u=s-.5*o,n=.5*o-r-1;if(t){const S=(u+n)/Math.SQRT2;n=(n-u)/Math.SQRT2,u=S}return u=Math.abs(u),n=Math.abs(n),l=u>n?u>i?Math.sqrt((u-i)*(u-i)+n*n):n:n>i?Math.sqrt(u*u+(n-i)*(n-i)):u,l-=a/2,l})}function it(o,e,t){return(a,i)=>{const s=a-o,r=i-e;return Math.sqrt(s*s+r*r)-t}}function st(o,e,t){const a=Math.sqrt(e*e+t*t);return(i,s)=>{const r=Math.abs(i-o)-t,l=s-o+e/2+.75,u=(e*r+t*l)/a,n=-l;return Math.max(u,n)}}function ie(o,e){const t=new Uint8Array(4*o*o);for(let a=0;a<o;a++)for(let i=0;i<o;i++){const s=i+o*a;let r=e(i,a);r=r/o+.5,mt(r,t,4*s)}return t}function _o(o){return o instanceof Float32Array&&o.length>=16}function Do(o){return Array.isArray(o)&&o.length>=16}function Mo(o){return _o(o)||Do(o)}class jo{constructor(){this.factor=new Be,this.factorAlignment=new Be}}class Be{constructor(){this.scale=0,this.factor=0,this.minScaleFactor=0}}function Lo(o,e){const{vertex:t,fragment:a}=o;o.include(Ct,e),t.include(tt),t.main.add(f`vec4 posProjCenter;
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
gl_PointSize = 1.0;`),a.main.add(f`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}function rt(o){const e=new $o,{signedDistanceFieldEnabled:t,occlusionTestEnabled:a,horizonCullingEnabled:i,pixelSnappingEnabled:s,hasScreenSizePerspective:r,debugDrawLabelBorder:l,vvSize:u,vvColor:n,hasRotation:S,occludedFragmentFade:p,sampleSignedDistanceFieldTexelCenter:h}=o;e.include(po,o),e.vertex.include(Ot,o);const{occlusionPass:O,output:R,oitPass:F}=o;if(O)return e.include(Lo,o),e;const{vertex:b,fragment:x}=e;e.include($t),e.include(Tt,o),e.include(Pt,o),a&&e.include(ho),x.include(go),x.include(At),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2");const T=R===N.Highlight,z=T&&a;z&&e.varyings.add("voccluded","float"),b.uniforms.add(new Et("viewport",c=>c.camera.fullViewport),new Fe("screenOffset",(c,M)=>Pe(ue,2*c.screenOffset[0]*M.camera.pixelRatio,2*c.screenOffset[1]*M.camera.pixelRatio)),new Fe("anchorPosition",c=>K(c)),new ge("materialColor",c=>c.color),new Ie("materialRotation",c=>c.rotation),new we("tex",c=>c.texture)),yt(b),t&&(b.uniforms.add(new ge("outlineColor",c=>c.outlineColor)),x.uniforms.add(new ge("outlineColor",c=>Ve(c)?c.outlineColor:vt),new Ie("outlineSize",c=>Ve(c)?c.outlineSize:0))),i&&b.uniforms.add(new To("pointDistanceSphere",(c,M)=>{const w=M.camera.eye,_=c.origin;return St(_[0]-w[0],_[1]-w[1],_[2]-w[2],dt.radius)})),s&&b.include(tt),r&&(zt(b),Rt(b)),l&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add(d.UVI,"vec2"),e.attributes.add(d.COLOR,"vec4"),e.attributes.add(d.SIZE,"vec2"),e.attributes.add(d.ROTATION,"float"),(u||n)&&e.attributes.add(d.FEATUREATTRIBUTE,"vec4"),b.code.add(i?f`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return b > 0.0 && b < a && b * b  > a * c;
}`:f`bool behindHorizon(vec3 posModel) { return false; }`),b.main.add(f`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    if (behindHorizon(projectAux.posModel)) {
      // Project outside of clip plane
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
      return;
    }

    vec2 inputSize;
    ${y(r,f`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,f`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${y(u,f`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${y(a,f`
    bool visible = testHUDVisibility(posProj);
    if (!visible) {
      vtc = vec2(0.0);
      ${y(l,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
      return;
    }`)}
    ${y(z,f`voccluded = visible ? 0.0 : 1.0;`)}
  `);const I=f`
      vec2 uvi1 = vec2(uvi.x < 0.0 ? 1.0 : 0.0, uvi.y < 0.0 ? 1.0 : 0.0);
      vec2 uv = abs(uvi + uvi1);
      vec2 texSize = vec2(textureSize(tex, 0));
      uv.x = uv.x >= ${qe} ? 1.0 : uv.x / texSize.x;
      uv.y = uv.y >= ${qe} ? 1.0 : uv.y / texSize.y;
      quadOffset.xy = (uvi1 - anchorPosition) * 2.0 * combinedSize;

      ${y(S,f`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,g=s?t?f`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:f`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:f`posProj += quadOffset;`;b.main.add(f`
    ${I}
    ${n?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${y(R===N.ObjectAndLayerIdColor,f`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${f.float(q)};
    ${y(t,`alphaDiscard = alphaDiscard && outlineColor.a < ${f.float(q)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${g}
      gl_Position = posProj;
    }

    vtc = uv;

    ${y(l,f`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),x.uniforms.add(new we("tex",c=>c.texture)),p&&!T&&x.uniforms.add(new Ft("depthMap",c=>c.mainDepth),new It("occludedOpacity",c=>c.hudOccludedFragmentOpacity));const L=l?f`(isBorder > 0.0 ? 0.0 : ${f.float(q)})`:f.float(q),D=f`
    ${y(l,f`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${y(h,f`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${t?f`
      vec4 fillPixelColor = vcolor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgbaTofloat(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${L} ||
          fillPixelColor.a + outlinePixelColor.a < ${f.float(q)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${y(!T,f`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${L}) {
          discard;
        }

        ${y(!T,f`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:f`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${L}) {
            discard;
          }
          ${y(!T,f`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${y(p&&!T,f`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= occludedOpacity;
        }
        `)}

    ${y(!T&&l,f`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(R){case N.Color:case N.ColorEmission:e.outputs.add("fragColor","vec4",0),R===N.ColorEmission&&e.outputs.add("fragEmission","vec4",1),F===ee.ColorAlpha&&e.outputs.add("fragAlpha","float",R===N.ColorEmission?2:1),x.main.add(f`
        ${D}
        ${y(F===ee.FrontFace,f`fragColor.rgb /= fragColor.a;`)}
        ${y(R===N.ColorEmission,f`fragEmission = vec4(0.0);`)}
        ${y(F===ee.ColorAlpha,f`fragAlpha = fragColor.a;`)}`);break;case N.ObjectAndLayerIdColor:x.main.add(f`
        ${D}
        outputObjectAndLayerIdColor();`);break;case N.Highlight:e.include(wt,o),x.main.add(f`
        ${D}
        outputHighlight(${y(z,f`voccluded == 1.0`,f`false`)});`)}return e}function Ve(o){return o.outlineColor[3]>0&&o.outlineSize>0}function K(o){return o.textureIsSignedDistanceField?No(o.anchorPosition,o.distanceFieldBoundingBox,ue):oo(ue,o.anchorPosition),ue}function No(o,e,t){Pe(t,o[0]*(e[2]-e[0])+e[0],o[1]*(e[3]-e[1])+e[1])}const ue=Ae(),ae=32e3,qe=f.float(ae),Uo=Object.freeze(Object.defineProperty({__proto__:null,build:rt,calculateAnchorPosition:K,fullUV:ae},Symbol.toStringTag,{value:"Module"}));class Bo extends _t{constructor(e,t){super(e,t,new Dt(Uo,()=>vo(()=>Promise.resolve().then(()=>Ko),void 0,import.meta.url))),this.primitiveType=t.occlusionPass?Le.POINTS:Le.TRIANGLES}initializePipeline(e){const{oitPass:t,hasPolygonOffset:a,draped:i,output:s,depthTestEnabled:r,occlusionPass:l}=e,u=t===ee.NONE,n=t===ee.ColorAlpha,S=s===N.Highlight,p=r&&!i&&!n&&!l&&!S;return So({blending:et(s)?u?xo:jt(t):null,depthTest:r&&!i?{func:eo.LEQUAL}:null,depthWrite:p?Co:null,drawBuffers:Mt(t,s),colorWrite:bo,polygonOffset:a?Vo:null})}}const Vo={factor:0,units:-4};class $ extends Lt{constructor(e){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.objectAndLayerIdColorInstanced=!1,this.horizonCullingEnabled=!0,this.isFocused=!0,this.textureCoordinateType=Nt.None,this.emissionSource=Ut.None,this.discardInvisibleFragments=!0,this.hasVvInstancing=!1,this.snowCover=!1}}P([A()],$.prototype,"screenCenterOffsetUnitsEnabled",void 0),P([A()],$.prototype,"occlusionTestEnabled",void 0),P([A()],$.prototype,"signedDistanceFieldEnabled",void 0),P([A()],$.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),P([A()],$.prototype,"vvSize",void 0),P([A()],$.prototype,"vvColor",void 0),P([A()],$.prototype,"hasVerticalOffset",void 0),P([A()],$.prototype,"hasScreenSizePerspective",void 0),P([A()],$.prototype,"hasRotation",void 0),P([A()],$.prototype,"debugDrawLabelBorder",void 0),P([A()],$.prototype,"hasPolygonOffset",void 0),P([A()],$.prototype,"depthTestEnabled",void 0),P([A()],$.prototype,"pixelSnappingEnabled",void 0),P([A()],$.prototype,"draped",void 0),P([A()],$.prototype,"terrainDepthTest",void 0),P([A()],$.prototype,"cullAboveTerrain",void 0),P([A()],$.prototype,"occlusionPass",void 0),P([A()],$.prototype,"occludedFragmentFade",void 0),P([A()],$.prototype,"objectAndLayerIdColorInstanced",void 0),P([A()],$.prototype,"horizonCullingEnabled",void 0),P([A()],$.prototype,"isFocused",void 0);let Aa=class extends Bt{constructor(e,t){super(e,ko),this.produces=new Map([[k.HUD_MATERIAL,a=>me(a)&&!this.parameters.drawAsLabel],[k.LABEL_MATERIAL,a=>me(a)&&this.parameters.drawAsLabel],[k.OCCLUSION_PIXELS,()=>this.parameters.occlusionTest],[k.DRAPED_MATERIAL,a=>this.parameters.draped&&me(a)]]),this._visible=!0,this._configuration=new $(t)}getConfiguration(e,t){const a=this.parameters.draped;return super.getConfiguration(e,t,this._configuration),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=a,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=t.slot===k.OCCLUSION_PIXELS,this._configuration.occludedFragmentFade=!a&&this.parameters.occludedFragmentFade,this._configuration.horizonCullingEnabled=this.parameters.horizonCullingEnabled,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||t.slot===k.OCCLUSION_PIXELS,et(e)&&(this._configuration.debugDrawLabelBorder=!!Vt.LABELS_SHOW_BORDER),this._configuration.oitPass=t.oitPass,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration}intersect(e,t,a,i,s,r){const{options:{selectionMode:l,hud:u,excludeLabels:n},point:S,camera:p}=a,{parameters:h}=this;if(!l||!u||n&&h.isLabel||!e.visible||!S||!p)return;const O=e.attributes.get(d.FEATUREATTRIBUTE),R=O==null?null:Re(O.data,Oe),{scaleX:F,scaleY:b}=$e(R,h,p.pixelRatio);Qe(de,t),e.attributes.has(d.FEATUREATTRIBUTE)&&Go(de);const x=e.attributes.get(d.POSITION),T=e.attributes.get(d.SIZE),z=e.attributes.get(d.NORMAL),I=e.attributes.get(d.ROTATION),g=e.attributes.get(d.CENTEROFFSETANDDISTANCE);no(x.size>=3);const L=K(h),D=this.parameters.centerOffsetUnits==="screen";for(let c=0;c<x.data.length/x.size;c++){const M=c*x.size;ce(m,x.data[M],x.data[M+1],x.data[M+2]),Z(m,m,t),Z(m,m,p.viewMatrix);const w=c*g.size;if(ce(C,g.data[w],g.data[w+1],g.data[w+2]),!D&&(m[0]+=C[0],m[1]+=C[1],C[2]!==0)){const U=C[2];xe(C,m),Ke(m,m,H(C,C,U))}const _=c*z.size;if(ce(X,z.data[_],z.data[_+1],z.data[_+2]),be(X,de,p,te),Te(this.parameters,m,te,p,Y),p.applyProjection(m,v),v[0]>-1){D&&(C[0]||C[1])&&(v[0]+=C[0]*p.pixelRatio,C[1]!==0&&(v[1]+=We(C[1],Y.factorAlignment)*p.pixelRatio),p.unapplyProjection(v,m)),v[0]+=this.parameters.screenOffset[0]*p.pixelRatio,v[1]+=this.parameters.screenOffset[1]*p.pixelRatio,v[0]=Math.floor(v[0]),v[1]=Math.floor(v[1]);const U=c*T.size;E[0]=T.data[U],E[1]=T.data[U+1],Xe(E,Y.factor,E);const se=ct*p.pixelRatio;let re=0;h.textureIsSignedDistanceField&&(re=Math.min(h.outlineSize,.5*E[0])*p.pixelRatio/2),E[0]*=F,E[1]*=b;const he=c*I.size,ne=h.rotation+I.data[he];if(Ce(S,v[0],v[1],E,se,re,ne,h,L)){const B=a.ray;if(Z(fe,m,Ze(lt,p.viewMatrix)),v[0]=S[0],v[1]=S[1],p.unprojectFromRenderScreen(v,m)){const V=G();W(V,B.direction);const ze=1/oe(V);H(V,V,ze),r(Je(B.origin,m)*ze,V,-1,fe)}}}}}intersectDraped(e,t,a,i,s){const r=e.attributes.get(d.POSITION),l=e.attributes.get(d.SIZE),u=e.attributes.get(d.ROTATION),n=this.parameters,S=K(n),p=e.attributes.get(d.FEATUREATTRIBUTE),h=p==null?null:Re(p.data,Oe),{scaleX:O,scaleY:R}=$e(h,n,e.screenToWorldRatio),F=Xo*e.screenToWorldRatio;for(let b=0;b<r.data.length/r.size;b++){const x=b*r.size,T=r.data[x],z=r.data[x+1],I=b*l.size;E[0]=l.data[I],E[1]=l.data[I+1];let g=0;n.textureIsSignedDistanceField&&(g=Math.min(n.outlineSize,.5*E[0])*e.screenToWorldRatio/2),E[0]*=O,E[1]*=R;const L=b*u.size,D=n.rotation+u.data[L];Ce(a,T,z,E,F,g,D,n,S)&&i(s.distance,s.normal,-1)}}createBufferWriter(){return new Yo}applyShaderOffsetsView(e,t,a,i,s,r,l){const u=be(t,a,s,te);return this._applyVerticalGroundOffsetView(e,u,s,l),Te(this.parameters,l,u,s,r),this._applyPolygonOffsetView(l,u,i[3],s,l),this._applyCenterOffsetView(l,i,l),l}applyShaderOffsetsNDC(e,t,a,i,s){return this._applyCenterOffsetNDC(e,t,a,i),s!=null&&W(s,i),this._applyPolygonOffsetNDC(i,t,a,i),i}_applyPolygonOffsetView(e,t,a,i,s){const r=i.aboveGround?1:-1;let l=Math.sign(a);l===0&&(l=r);const u=r*l;if(this.parameters.shaderPolygonOffset<=0)return W(s,e);const n=ft(Math.abs(t.cosAngle),.01,1),S=1-Math.sqrt(1-n*n)/n/i.viewport[2];return H(s,e,u>0?S:1/S),s}_applyVerticalGroundOffsetView(e,t,a,i){const s=oe(e),r=a.aboveGround?1:-1,l=a.computeRenderPixelSizeAtDist(s)*mo,u=H(m,t.normal,r*l);return Ee(i,e,u),i}_applyCenterOffsetView(e,t,a){const i=this.parameters.centerOffsetUnits!=="screen";return a!==e&&W(a,e),i&&(a[0]+=t[0],a[1]+=t[1],t[2]&&(xe(X,a),io(a,a,H(X,X,t[2])))),a}_applyCenterOffsetNDC(e,t,a,i){const s=this.parameters.centerOffsetUnits!=="screen";return i!==e&&W(i,e),s||(i[0]+=t[0]/a.fullWidth*2,i[1]+=t[1]/a.fullHeight*2),i}_applyPolygonOffsetNDC(e,t,a,i){const s=this.parameters.shaderPolygonOffset;if(e!==i&&W(i,e),s){const r=a.aboveGround?1:-1,l=r*Math.sign(t[3]);i[2]-=(l||r)*s}return i}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:t,outlineColor:a}=this.parameters,i=e[3]>=q||t>=q&&a[3]>=q;return this._visible&&i}createGLMaterial(e){return new qo(e)}calculateRelativeScreenBounds(e,t,a=pt()){return Ho(this.parameters,e,t,a),a[2]=a[0]+e[0],a[3]=a[1]+e[1],a}};class qo extends Jt{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(Bo,e)}}function Ho(o,e,t,a){a[0]=o.anchorPosition[0]*-e[0]+o.screenOffset[0]*t,a[1]=o.anchorPosition[1]*-e[1]+o.screenOffset[1]*t}function be(o,e,t,a){return Mo(e)&&(e=Qe(Wo,e)),so(a.normal,o,e),Z(a.normal,a.normal,t.viewInverseTransposeMatrix),a.cosAngle=ro(nt,Qo),a}function Go(o){const e=o[0],t=o[1],a=o[2],i=o[3],s=o[4],r=o[5],l=o[6],u=o[7],n=o[8],S=1/Math.sqrt(e*e+t*t+a*a),p=1/Math.sqrt(i*i+s*s+r*r),h=1/Math.sqrt(l*l+u*u+n*n);return o[0]=e*S,o[1]=t*S,o[2]=a*S,o[3]=i*p,o[4]=s*p,o[5]=r*p,o[6]=l*h,o[7]=u*h,o[8]=n*h,o}function Ce(o,e,t,a,i,s,r,l,u){let n=e-i-a[0]*u[0],S=n+a[0]+2*i,p=t-i-a[1]*u[1],h=p+a[1]+2*i;const O=l.distanceFieldBoundingBox;return l.textureIsSignedDistanceField&&O!=null&&(n+=a[0]*O[0],p+=a[1]*O[1],S-=a[0]*(1-O[2]),h-=a[1]*(1-O[3]),n-=s,S+=s,p-=s,h+=s),Pe(He,e,t),ao(J,o,He,gt(r)),J[0]>n&&J[0]<S&&J[1]>p&&J[1]<h}const Y=new jo,m=G(),X=G(),v=pe(),nt=G(),fe=G(),J=Ae(),He=Ae(),de=ke(),Wo=ke(),lt=to(),le=pe(),C=G(),ve=G(),Oe=pe(),te={normal:nt,cosAngle:0},ct=1,Xo=2,E=Ye(0,0),j=6,Qo=ht(0,0,1);class ko extends qt{constructor(){super(...arguments),this.renderOccluded=Ht.Occlude,this.isDecoration=!1,this.color=Se(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=Ye(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=Se(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=pe(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!1,this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.focusStyle="bright",this.draped=!1,this.isLabel=!1}}const ut=fo().vec3f(d.POSITION).vec3f(d.NORMAL).vec2i16(d.UVI).vec4u8(d.COLOR).vec2f(d.SIZE).f32(d.ROTATION).vec4f(d.CENTEROFFSETANDDISTANCE).vec4f(d.FEATUREATTRIBUTE),Zo=ut.clone().vec4u8(d.OLIDCOLOR);class Yo{constructor(){this.vertexBufferLayout=Xt()?Zo:ut}elementCount(e){return e.get(d.POSITION).indices.length*j}write(e,t,a,i,s,r){const{position:l,normal:u,uvi:n,color:S,size:p,rotation:h,centerOffsetAndDistance:O,featureAttribute:R}=s;Qt(a.get(d.POSITION),e,l,r,j),kt(a.get(d.NORMAL),t,u,r,j);const F=a.get(d.UVI)?.data;let b=0,x=0,T=-1-ae,z=-1-ae;F&&F.length>=4&&(b=F[0],x=F[1],T=-1-F[2],z=-1-F[3]);let I=a.get(d.POSITION).indices.length,g=r;for(let c=0;c<I;++c)n.set(g,0,b),n.set(g,1,x),g++,n.set(g,0,T),n.set(g,1,x),g++,n.set(g,0,T),n.set(g,1,z),g++,n.set(g,0,T),n.set(g,1,z),g++,n.set(g,0,b),n.set(g,1,z),g++,n.set(g,0,b),n.set(g,1,x),g++;Zt(a.get(d.COLOR),4,S,r,j);const{data:L,indices:D}=a.get(d.SIZE);I=D.length,g=r;for(let c=0;c<I;++c){const M=L[2*D[c]],w=L[2*D[c]+1];for(let _=0;_<j;++_)p.set(g,0,M),p.set(g,1,w),g++}if(Yt(a.get(d.ROTATION),h,r,j),a.get(d.CENTEROFFSETANDDISTANCE)?_e(a.get(d.CENTEROFFSETANDDISTANCE),O,r,j):De(O,r,I*j),a.get(d.FEATUREATTRIBUTE)?_e(a.get(d.FEATUREATTRIBUTE),R,r,j):De(R,r,I*j),i!=null){const c=a.get(d.POSITION)?.indices;if(c){const M=c.length,w=s.getField(d.OLIDCOLOR,lo);Kt(i,w,M,r,j)}}return{numVerticesPerItem:j,numItems:I}}intersect(e,t,a,i,s,r,l){const{options:{selectionMode:u,hud:n,excludeLabels:S},point:p,camera:h}=i;if(!u||!n||S&&t.isLabel||!p)return;const O=this.vertexBufferLayout.createView(e),R=O.getField(d.POSITION,Ne),F=O.getField(d.NORMAL,Ne),b=O.getField(d.ROTATION,co),x=O.getField(d.SIZE,uo),T=O.getField(d.FEATUREATTRIBUTE,Ue),z=O.getField(d.CENTEROFFSETANDDISTANCE,Ue),I=t.centerOffsetUnits==="screen",g=K(t);if(R==null||F==null||b==null||x==null||z==null||h==null)return;const L=T==null?null:T.getVec(0,Oe),{scaleX:D,scaleY:c}=$e(L,t,h.pixelRatio),M=R.count/j;for(let w=0;w<M;w++){const _=w*j;if(R.getVec(_,m),a!=null&&Ee(m,m,a),Z(m,m,h.viewMatrix),z.getVec(_,le),ce(C,le[0],le[1],le[2]),!I&&(m[0]+=C[0],m[1]+=C[1],C[2]!==0)){const U=C[2];xe(C,m),Ke(m,m,H(C,C,U))}if(F.getVec(_,X),be(X,de,h,te),Te(t,m,te,h,Y),h.applyProjection(m,v),v[0]>-1){I&&(C[0]||C[1])&&(v[0]+=C[0]*h.pixelRatio,C[1]!==0&&(v[1]+=We(C[1],Y.factorAlignment)*h.pixelRatio),h.unapplyProjection(v,m)),v[0]+=t.screenOffset[0]*h.pixelRatio,v[1]+=t.screenOffset[1]*h.pixelRatio,v[0]=Math.floor(v[0]),v[1]=Math.floor(v[1]),x.getVec(_,E),Xe(E,Y.factor,E);const U=ct*h.pixelRatio;let se=0;t.textureIsSignedDistanceField&&(se=Math.min(t.outlineSize,.5*E[0])*h.pixelRatio/2),E[0]*=D,E[1]*=c;const re=b.get(_),he=t.rotation+re;if(Ce(p,v[0],v[1],E,U,se,he,t,g)){const ne=i.ray;if(Z(fe,m,Ze(lt,h.viewMatrix)),v[0]=p[0],v[1]=p[1],h.unprojectFromRenderScreen(v,m)){const B=G();W(B,ne.direction);const V=1/oe(B);H(B,B,V),l(Je(ne.origin,m)*V,B,w,fe)}}}}}}function $e(o,e,t){return o==null||e.vvSize==null?{scaleX:t,scaleY:t}:(Gt(ve,e,o),{scaleX:ve[0]*t,scaleY:ve[1]*t})}function Te(o,e,t,a,i){if(!o.verticalOffset?.screenLength)return o.screenSizePerspective||o.screenSizePerspectiveAlignment?Ge(o,i,oe(e),t.cosAngle):(i.factor.scale=1,i.factorAlignment.scale=1),e;const s=oe(e),r=o.screenSizePerspectiveAlignment??o.screenSizePerspective,l=Wt(a,s,o.verticalOffset,t.cosAngle,r);return Ge(o,i,s,t.cosAngle),H(t.normal,t.normal,l),Ee(e,e,t.normal)}function Ge(o,e,t,a){o.screenSizePerspective!=null?Me(a,t,o.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minScaleFactor=0),o.screenSizePerspectiveAlignment!=null?Me(a,t,o.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minScaleFactor=e.factor.minScaleFactor)}const Ko=Object.freeze(Object.defineProperty({__proto__:null,build:rt,calculateAnchorPosition:K,fullUV:ae},Symbol.toStringTag,{value:"Module"}));export{Pa as a,ye as b,Ta as c,Po as i,Q as o,$a as s,Aa as u};
