import{a8 as dt,h as P,ah as pt,cH as ft,dF as ht,aj as G,d8 as gt}from"./main-CISBdIQH.js";import{o as mt}from"./floatRGBA-BnJnC9-F.js";import{e as Se,a as vt,r as St,u as Re,n as fe}from"./vec4f64-DPb6J-GU.js";import{a7 as xt,L as bt,ae as Ot,aP as Ct,s as $t,H as Tt,M as Pt,a9 as At,o as Et,R as Fe,ad as ge,c as Ie,I as we,w as yt,aQ as zt,i as Rt,D as q,k as Ft,e as It,K as wt,aH as ee,V as _t,W as Dt,aR as Mt,an as jt,as as A,au as Lt,O as Nt,at as Ut,av as Bt,aw as k,t as Vt,aS as We,aT as Xe,aC as qt,aU as Ht,ai as Gt,aD as Wt,aV as Xt,aW as Qt,aX as kt,aY as Zt,aZ as _e,a_ as De,a$ as Yt,b0 as Kt,ay as Jt,b1 as Me}from"./OutputColorHighlightOID.glsl-BtAbuSJt.js";import{P as je,R as Le,C as eo}from"./enums-UBzvFP7O.js";import{n as Qe}from"./mat3-CruJiiUv.js";import{e as ke}from"./mat3f64-B5o_lm6j.js";import{h as Ze}from"./mat4-BKyelCEs.js";import{e as to}from"./mat4f64-q_b6UJoq.js";import{o as Pe,r as oo,I as io}from"./vec2-maR1OrZI.js";import{n as Ae,r as Ye}from"./vec2f64-Cgb6qxNH.js";import{o as ce,E as Z,A as xe,c as Ke,g as H,s as W,r as oe,p as Je,u as Ee,R as ao,N as so,P as ro}from"./vec32-Coka7ZT9.js";import{s as no,g as lo,o as Ne,f as co,y as uo,T as Ue}from"./BufferView-Cs3iNMFz.js";import{O as po}from"./InterleavedLayout-DbfkZG2k.js";import{n as N,u as et,w as me}from"./ShaderOutput-Bdd80V3g.js";import{l as tt,u as fo,n as ho,b as go,d as mo}from"./dehydratedFeatureUtils-BLnlR8lO.js";import{e as d}from"./VertexAttribute-BfkzOMLV.js";import{_ as vo}from"./preload-helper-ExcqyqRp.js";import{B as So,o as xo,p as bo,g as Oo}from"./renderState-DAt0XJBU.js";import{n as p,t as y}from"./glsl-Cj7KC756.js";import{a as Co}from"./BindType-BBwFZqyN.js";import"./vec42-CKs01hkn.js";import{i as $o}from"./ShaderBuilder-CDMOqKjB.js";let To=class extends xt{constructor(e,t){super(e,"vec4",Co.Draw,(i,a,s)=>i.setUniform4fv(e,t(a,s)))}};const ye=128,Q=.5,$i=Se(Q/2,Q/2,1-Q/2,1-Q/2);function Ti(o){return o==="cross"||o==="x"}function Pi(o,e=ye,t=e*Q,i=0){const{data:a,parameters:s}=Po(o,e,t,i);return new bt(a,s)}function Po(o,e=ye,t=e*Q,i=0){return{data:Ao(o,e,t,i),parameters:{mipmap:!1,wrap:{s:je.CLAMP_TO_EDGE,t:je.CLAMP_TO_EDGE},width:e,height:e,components:4,noUnpackFlip:!0,reloadable:!0}}}function Ao(o,e=ye,t=e*Q,i=0){switch(o){case"circle":default:return Eo(e,t);case"square":return yo(e,t);case"cross":return Ro(e,t,i);case"x":return Fo(e,t,i);case"kite":return zo(e,t);case"triangle":return Io(e,t);case"arrow":return wo(e,t)}}function Eo(o,e){const t=o/2-.5;return ae(o,at(t,t,e/2))}function yo(o,e){return ot(o,e,!1)}function zo(o,e){return ot(o,e,!0)}function Ro(o,e,t=0){return it(o,e,!1,t)}function Fo(o,e,t=0){return it(o,e,!0,t)}function Io(o,e){return ae(o,st(o/2,e,e/2))}function wo(o,e){const t=e,i=e/2,a=o/2,s=.8*t,r=at(a,(o-e)/2-s,Math.sqrt(s*s+i*i)),l=st(a,t,i);return ae(o,(u,n)=>Math.max(l(u,n),-r(u,n)))}function ot(o,e,t){return t&&(e/=Math.SQRT2),ae(o,(i,a)=>{let s=i-.5*o+.25,r=.5*o-a-.75;if(t){const l=(s+r)/Math.SQRT2;r=(r-s)/Math.SQRT2,s=l}return Math.max(Math.abs(s),Math.abs(r))-.5*e})}function it(o,e,t,i=0){e-=i,t&&(e*=Math.SQRT2);const a=.5*e;return ae(o,(s,r)=>{let l,u=s-.5*o,n=.5*o-r-1;if(t){const S=(u+n)/Math.SQRT2;n=(n-u)/Math.SQRT2,u=S}return u=Math.abs(u),n=Math.abs(n),l=u>n?u>a?Math.sqrt((u-a)*(u-a)+n*n):n:n>a?Math.sqrt(u*u+(n-a)*(n-a)):u,l-=i/2,l})}function at(o,e,t){return(i,a)=>{const s=i-o,r=a-e;return Math.sqrt(s*s+r*r)-t}}function st(o,e,t){const i=Math.sqrt(e*e+t*t);return(a,s)=>{const r=Math.abs(a-o)-t,l=s-o+e/2+.75,u=(e*r+t*l)/i,n=-l;return Math.max(u,n)}}function ae(o,e){const t=new Uint8Array(4*o*o);for(let i=0;i<o;i++)for(let a=0;a<o;a++){const s=a+o*i;let r=e(a,i);r=r/o+.5,mt(r,t,4*s)}return t}function _o(o){return o instanceof Float32Array&&o.length>=16}function Do(o){return Array.isArray(o)&&o.length>=16}function Mo(o){return _o(o)||Do(o)}class jo{constructor(){this.factor=new Be,this.factorAlignment=new Be}}class Be{constructor(){this.scale=0,this.factor=0,this.minScaleFactor=0}}function Lo(o,e){const{vertex:t,fragment:i}=o;o.include(Ot,e),t.include(tt),t.main.add(p`vec4 posProjCenter;
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
}`)}function rt(o){const e=new $o,{signedDistanceFieldEnabled:t,occlusionTestEnabled:i,horizonCullingEnabled:a,pixelSnappingEnabled:s,hasScreenSizePerspective:r,debugDrawLabelBorder:l,vvSize:u,vvColor:n,hasRotation:S,occludedFragmentFade:f,sampleSignedDistanceFieldTexelCenter:h}=o;e.include(fo,o),e.vertex.include(Ct,o);const{occlusionPass:C,output:R,oitPass:F}=o;if(C)return e.include(Lo,o),e;const{vertex:b,fragment:x}=e;e.include($t),e.include(Tt,o),e.include(Pt,o),i&&e.include(ho),x.include(go),x.include(At),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2");const T=R===N.Highlight,z=T&&i;z&&e.varyings.add("voccluded","float"),b.uniforms.add(new Et("viewport",c=>c.camera.fullViewport),new Fe("screenOffset",(c,M)=>Pe(ue,2*c.screenOffset[0]*M.camera.pixelRatio,2*c.screenOffset[1]*M.camera.pixelRatio)),new Fe("anchorPosition",c=>K(c)),new ge("materialColor",c=>c.color),new Ie("materialRotation",c=>c.rotation),new we("tex",c=>c.texture)),yt(b),t&&(b.uniforms.add(new ge("outlineColor",c=>c.outlineColor)),x.uniforms.add(new ge("outlineColor",c=>Ve(c)?c.outlineColor:vt),new Ie("outlineSize",c=>Ve(c)?c.outlineSize:0))),a&&b.uniforms.add(new To("pointDistanceSphere",(c,M)=>{const w=M.camera.eye,_=c.origin;return St(_[0]-w[0],_[1]-w[1],_[2]-w[2],dt.radius)})),s&&b.include(tt),r&&(zt(b),Rt(b)),l&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add(d.UVI,"vec2"),e.attributes.add(d.COLOR,"vec4"),e.attributes.add(d.SIZE,"vec2"),e.attributes.add(d.ROTATION,"float"),(u||n)&&e.attributes.add(d.FEATUREATTRIBUTE,"vec4"),b.code.add(a?p`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return b > 0.0 && b < a && b * b  > a * c;
}`:p`bool behindHorizon(vec3 posModel) { return false; }`),b.main.add(p`
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
    ${y(r,p`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,p`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${y(u,p`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${y(i,p`
    bool visible = testHUDVisibility(posProj);
    if (!visible) {
      vtc = vec2(0.0);
      ${y(l,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
      return;
    }`)}
    ${y(z,p`voccluded = visible ? 0.0 : 1.0;`)}
  `);const I=p`
      vec2 uvi1 = vec2(uvi.x < 0.0 ? 1.0 : 0.0, uvi.y < 0.0 ? 1.0 : 0.0);
      vec2 uv = abs(uvi + uvi1);
      vec2 texSize = vec2(textureSize(tex, 0));
      uv.x = uv.x >= ${qe} ? 1.0 : uv.x / texSize.x;
      uv.y = uv.y >= ${qe} ? 1.0 : uv.y / texSize.y;
      quadOffset.xy = (uvi1 - anchorPosition) * 2.0 * combinedSize;

      ${y(S,p`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,g=s?t?p`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:p`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:p`posProj += quadOffset;`;b.main.add(p`
    ${I}
    ${n?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${y(R===N.ObjectAndLayerIdColor,p`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${p.float(q)};
    ${y(t,`alphaDiscard = alphaDiscard && outlineColor.a < ${p.float(q)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${g}
      gl_Position = posProj;
    }

    vtc = uv;

    ${y(l,p`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),x.uniforms.add(new we("tex",c=>c.texture)),f&&!T&&x.uniforms.add(new Ft("depthMap",c=>c.mainDepth),new It("occludedOpacity",c=>c.hudOccludedFragmentOpacity));const L=l?p`(isBorder > 0.0 ? 0.0 : ${p.float(q)})`:p.float(q),D=p`
    ${y(l,p`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${y(h,p`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${t?p`
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
          fillPixelColor.a + outlinePixelColor.a < ${p.float(q)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${y(!T,p`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${L}) {
          discard;
        }

        ${y(!T,p`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:p`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${L}) {
            discard;
          }
          ${y(!T,p`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${y(f&&!T,p`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= occludedOpacity;
        }
        `)}

    ${y(!T&&l,p`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(R){case N.Color:case N.ColorEmission:e.outputs.add("fragColor","vec4",0),R===N.ColorEmission&&e.outputs.add("fragEmission","vec4",1),F===ee.ColorAlpha&&e.outputs.add("fragAlpha","float",R===N.ColorEmission?2:1),x.main.add(p`
        ${D}
        ${y(F===ee.FrontFace,p`fragColor.rgb /= fragColor.a;`)}
        ${y(R===N.ColorEmission,p`fragEmission = vec4(0.0);`)}
        ${y(F===ee.ColorAlpha,p`fragAlpha = fragColor.a;`)}`);break;case N.ObjectAndLayerIdColor:x.main.add(p`
        ${D}
        outputObjectAndLayerIdColor();`);break;case N.Highlight:e.include(wt,o),x.main.add(p`
        ${D}
        outputHighlight(${y(z,p`voccluded == 1.0`,p`false`)});`)}return e}function Ve(o){return o.outlineColor[3]>0&&o.outlineSize>0}function K(o){return o.textureIsSignedDistanceField?No(o.anchorPosition,o.distanceFieldBoundingBox,ue):oo(ue,o.anchorPosition),ue}function No(o,e,t){Pe(t,o[0]*(e[2]-e[0])+e[0],o[1]*(e[3]-e[1])+e[1])}const ue=Ae(),ie=32e3,qe=p.float(ie),Uo=Object.freeze(Object.defineProperty({__proto__:null,build:rt,calculateAnchorPosition:K,fullUV:ie},Symbol.toStringTag,{value:"Module"}));class Bo extends _t{constructor(e,t){super(e,t,new Dt(Uo,()=>vo(()=>Promise.resolve().then(()=>Ko),void 0,import.meta.url))),this.primitiveType=t.occlusionPass?Le.POINTS:Le.TRIANGLES}initializePipeline(e){const{oitPass:t,hasPolygonOffset:i,draped:a,output:s,depthTestEnabled:r,occlusionPass:l}=e,u=t===ee.NONE,n=t===ee.ColorAlpha,S=s===N.Highlight,f=r&&!a&&!n&&!l&&!S;return So({blending:et(s)?u?xo:Mt(t):null,depthTest:r&&!a?{func:eo.LEQUAL}:null,depthWrite:f?bo:null,drawBuffers:jt(t,s),colorWrite:Oo,polygonOffset:i?Vo:null})}}const Vo={factor:0,units:-4};class $ extends Lt{constructor(e){super(),this.spherical=e,this.screenCenterOffsetUnitsEnabled=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.objectAndLayerIdColorInstanced=!1,this.horizonCullingEnabled=!0,this.isFocused=!0,this.textureCoordinateType=Nt.None,this.emissionSource=Ut.None,this.discardInvisibleFragments=!0,this.hasVvInstancing=!1,this.snowCover=!1}}P([A()],$.prototype,"screenCenterOffsetUnitsEnabled",void 0),P([A()],$.prototype,"occlusionTestEnabled",void 0),P([A()],$.prototype,"signedDistanceFieldEnabled",void 0),P([A()],$.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),P([A()],$.prototype,"vvSize",void 0),P([A()],$.prototype,"vvColor",void 0),P([A()],$.prototype,"hasVerticalOffset",void 0),P([A()],$.prototype,"hasScreenSizePerspective",void 0),P([A()],$.prototype,"hasRotation",void 0),P([A()],$.prototype,"debugDrawLabelBorder",void 0),P([A()],$.prototype,"hasPolygonOffset",void 0),P([A()],$.prototype,"depthTestEnabled",void 0),P([A()],$.prototype,"pixelSnappingEnabled",void 0),P([A()],$.prototype,"draped",void 0),P([A()],$.prototype,"terrainDepthTest",void 0),P([A()],$.prototype,"cullAboveTerrain",void 0),P([A()],$.prototype,"occlusionPass",void 0),P([A()],$.prototype,"occludedFragmentFade",void 0),P([A()],$.prototype,"objectAndLayerIdColorInstanced",void 0),P([A()],$.prototype,"horizonCullingEnabled",void 0),P([A()],$.prototype,"isFocused",void 0);let Ai=class extends Bt{constructor(e,t){super(e,ko),this.produces=new Map([[k.HUD_MATERIAL,i=>me(i)&&!this.parameters.drawAsLabel],[k.LABEL_MATERIAL,i=>me(i)&&this.parameters.drawAsLabel],[k.OCCLUSION_PIXELS,()=>this.parameters.occlusionTest],[k.DRAPED_MATERIAL,i=>this.parameters.draped&&me(i)]]),this._visible=!0,this._configuration=new $(t)}getConfiguration(e,t){const i=this.parameters.draped;return super.getConfiguration(e,t,this._configuration),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=i,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=t.slot===k.OCCLUSION_PIXELS,this._configuration.occludedFragmentFade=!i&&this.parameters.occludedFragmentFade,this._configuration.horizonCullingEnabled=this.parameters.horizonCullingEnabled,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||t.slot===k.OCCLUSION_PIXELS,et(e)&&(this._configuration.debugDrawLabelBorder=!!Vt.LABELS_SHOW_BORDER),this._configuration.oitPass=t.oitPass,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration}intersect(e,t,i,a,s,r){const{options:{selectionMode:l,hud:u,excludeLabels:n},point:S,camera:f}=i,{parameters:h}=this;if(!l||!u||n&&h.isLabel||!e.visible||!S||!f)return;const C=e.attributes.get(d.FEATUREATTRIBUTE),R=C==null?null:Re(C.data,Ce),{scaleX:F,scaleY:b}=$e(R,h,f.pixelRatio);Qe(de,t),e.attributes.has(d.FEATUREATTRIBUTE)&&Go(de);const x=e.attributes.get(d.POSITION),T=e.attributes.get(d.SIZE),z=e.attributes.get(d.NORMAL),I=e.attributes.get(d.ROTATION),g=e.attributes.get(d.CENTEROFFSETANDDISTANCE);no(x.size>=3);const L=K(h),D=this.parameters.centerOffsetUnits==="screen";for(let c=0;c<x.data.length/x.size;c++){const M=c*x.size;ce(m,x.data[M],x.data[M+1],x.data[M+2]),Z(m,m,t),Z(m,m,f.viewMatrix);const w=c*g.size;if(ce(O,g.data[w],g.data[w+1],g.data[w+2]),!D&&(m[0]+=O[0],m[1]+=O[1],O[2]!==0)){const U=O[2];xe(O,m),Ke(m,m,H(O,O,U))}const _=c*z.size;if(ce(X,z.data[_],z.data[_+1],z.data[_+2]),be(X,de,f,te),Te(this.parameters,m,te,f,Y),f.applyProjection(m,v),v[0]>-1){D&&(O[0]||O[1])&&(v[0]+=O[0]*f.pixelRatio,O[1]!==0&&(v[1]+=We(O[1],Y.factorAlignment)*f.pixelRatio),f.unapplyProjection(v,m)),v[0]+=this.parameters.screenOffset[0]*f.pixelRatio,v[1]+=this.parameters.screenOffset[1]*f.pixelRatio,v[0]=Math.floor(v[0]),v[1]=Math.floor(v[1]);const U=c*T.size;E[0]=T.data[U],E[1]=T.data[U+1],Xe(E,Y.factor,E);const se=ct*f.pixelRatio;let re=0;h.textureIsSignedDistanceField&&(re=Math.min(h.outlineSize,.5*E[0])*f.pixelRatio/2),E[0]*=F,E[1]*=b;const he=c*I.size,ne=h.rotation+I.data[he];if(Oe(S,v[0],v[1],E,se,re,ne,h,L)){const B=i.ray;if(Z(pe,m,Ze(lt,f.viewMatrix)),v[0]=S[0],v[1]=S[1],f.unprojectFromRenderScreen(v,m)){const V=G();W(V,B.direction);const ze=1/oe(V);H(V,V,ze),r(Je(B.origin,m)*ze,V,-1,pe)}}}}}intersectDraped(e,t,i,a,s){const r=e.attributes.get(d.POSITION),l=e.attributes.get(d.SIZE),u=e.attributes.get(d.ROTATION),n=this.parameters,S=K(n),f=e.attributes.get(d.FEATUREATTRIBUTE),h=f==null?null:Re(f.data,Ce),{scaleX:C,scaleY:R}=$e(h,n,e.screenToWorldRatio),F=Xo*e.screenToWorldRatio;for(let b=0;b<r.data.length/r.size;b++){const x=b*r.size,T=r.data[x],z=r.data[x+1],I=b*l.size;E[0]=l.data[I],E[1]=l.data[I+1];let g=0;n.textureIsSignedDistanceField&&(g=Math.min(n.outlineSize,.5*E[0])*e.screenToWorldRatio/2),E[0]*=C,E[1]*=R;const L=b*u.size,D=n.rotation+u.data[L];Oe(i,T,z,E,F,g,D,n,S)&&a(s.distance,s.normal,-1)}}createBufferWriter(){return new Yo}applyShaderOffsetsView(e,t,i,a,s,r,l){const u=be(t,i,s,te);return this._applyVerticalGroundOffsetView(e,u,s,l),Te(this.parameters,l,u,s,r),this._applyPolygonOffsetView(l,u,a[3],s,l),this._applyCenterOffsetView(l,a,l),l}applyShaderOffsetsNDC(e,t,i,a,s){return this._applyCenterOffsetNDC(e,t,i,a),s!=null&&W(s,a),this._applyPolygonOffsetNDC(a,t,i,a),a}_applyPolygonOffsetView(e,t,i,a,s){const r=a.aboveGround?1:-1;let l=Math.sign(i);l===0&&(l=r);const u=r*l;if(this.parameters.shaderPolygonOffset<=0)return W(s,e);const n=pt(Math.abs(t.cosAngle),.01,1),S=1-Math.sqrt(1-n*n)/n/a.viewport[2];return H(s,e,u>0?S:1/S),s}_applyVerticalGroundOffsetView(e,t,i,a){const s=oe(e),r=i.aboveGround?1:-1,l=i.computeRenderPixelSizeAtDist(s)*mo,u=H(m,t.normal,r*l);return Ee(a,e,u),a}_applyCenterOffsetView(e,t,i){const a=this.parameters.centerOffsetUnits!=="screen";return i!==e&&W(i,e),a&&(i[0]+=t[0],i[1]+=t[1],t[2]&&(xe(X,i),ao(i,i,H(X,X,t[2])))),i}_applyCenterOffsetNDC(e,t,i,a){const s=this.parameters.centerOffsetUnits!=="screen";return a!==e&&W(a,e),s||(a[0]+=t[0]/i.fullWidth*2,a[1]+=t[1]/i.fullHeight*2),a}_applyPolygonOffsetNDC(e,t,i,a){const s=this.parameters.shaderPolygonOffset;if(e!==a&&W(a,e),s){const r=i.aboveGround?1:-1,l=r*Math.sign(t[3]);a[2]-=(l||r)*s}return a}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:t,outlineColor:i}=this.parameters,a=e[3]>=q||t>=q&&i[3]>=q;return this._visible&&a}createGLMaterial(e){return new qo(e)}calculateRelativeScreenBounds(e,t,i=ft()){return Ho(this.parameters,e,t,i),i[2]=i[0]+e[0],i[3]=i[1]+e[1],i}};class qo extends qt{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(Bo,e)}}function Ho(o,e,t,i){i[0]=o.anchorPosition[0]*-e[0]+o.screenOffset[0]*t,i[1]=o.anchorPosition[1]*-e[1]+o.screenOffset[1]*t}function be(o,e,t,i){return Mo(e)&&(e=Qe(Wo,e)),so(i.normal,o,e),Z(i.normal,i.normal,t.viewInverseTransposeMatrix),i.cosAngle=ro(nt,Qo),i}function Go(o){const e=o[0],t=o[1],i=o[2],a=o[3],s=o[4],r=o[5],l=o[6],u=o[7],n=o[8],S=1/Math.sqrt(e*e+t*t+i*i),f=1/Math.sqrt(a*a+s*s+r*r),h=1/Math.sqrt(l*l+u*u+n*n);return o[0]=e*S,o[1]=t*S,o[2]=i*S,o[3]=a*f,o[4]=s*f,o[5]=r*f,o[6]=l*h,o[7]=u*h,o[8]=n*h,o}function Oe(o,e,t,i,a,s,r,l,u){let n=e-a-i[0]*u[0],S=n+i[0]+2*a,f=t-a-i[1]*u[1],h=f+i[1]+2*a;const C=l.distanceFieldBoundingBox;return l.textureIsSignedDistanceField&&C!=null&&(n+=i[0]*C[0],f+=i[1]*C[1],S-=i[0]*(1-C[2]),h-=i[1]*(1-C[3]),n-=s,S+=s,f-=s,h+=s),Pe(He,e,t),io(J,o,He,ht(r)),J[0]>n&&J[0]<S&&J[1]>f&&J[1]<h}const Y=new jo,m=G(),X=G(),v=fe(),nt=G(),pe=G(),J=Ae(),He=Ae(),de=ke(),Wo=ke(),lt=to(),le=fe(),O=G(),ve=G(),Ce=fe(),te={normal:nt,cosAngle:0},ct=1,Xo=2,E=Ye(0,0),j=6,Qo=gt(0,0,1);class ko extends Ht{constructor(){super(...arguments),this.renderOccluded=Gt.Occlude,this.isDecoration=!1,this.color=Se(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=Ye(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=Se(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=fe(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!1,this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.focusStyle="bright",this.draped=!1,this.isLabel=!1}}const ut=po().vec3f(d.POSITION).vec3f(d.NORMAL).vec2i16(d.UVI).vec4u8(d.COLOR).vec2f(d.SIZE).f32(d.ROTATION).vec4f(d.CENTEROFFSETANDDISTANCE).vec4f(d.FEATUREATTRIBUTE),Zo=ut.clone().vec4u8(d.OLIDCOLOR);class Yo{constructor(){this.vertexBufferLayout=Wt()?Zo:ut}elementCount(e){return e.get(d.POSITION).indices.length*j}write(e,t,i,a,s,r){const{position:l,normal:u,uvi:n,color:S,size:f,rotation:h,centerOffsetAndDistance:C,featureAttribute:R}=s;Xt(i.get(d.POSITION),e,l,r,j),Qt(i.get(d.NORMAL),t,u,r,j);const F=i.get(d.UVI)?.data;let b=0,x=0,T=-1-ie,z=-1-ie;F&&F.length>=4&&(b=F[0],x=F[1],T=-1-F[2],z=-1-F[3]);let I=i.get(d.POSITION).indices.length,g=r;for(let c=0;c<I;++c)n.set(g,0,b),n.set(g,1,x),g++,n.set(g,0,T),n.set(g,1,x),g++,n.set(g,0,T),n.set(g,1,z),g++,n.set(g,0,T),n.set(g,1,z),g++,n.set(g,0,b),n.set(g,1,z),g++,n.set(g,0,b),n.set(g,1,x),g++;kt(i.get(d.COLOR),4,S,r,j);const{data:L,indices:D}=i.get(d.SIZE);I=D.length,g=r;for(let c=0;c<I;++c){const M=L[2*D[c]],w=L[2*D[c]+1];for(let _=0;_<j;++_)f.set(g,0,M),f.set(g,1,w),g++}if(Zt(i.get(d.ROTATION),h,r,j),i.get(d.CENTEROFFSETANDDISTANCE)?_e(i.get(d.CENTEROFFSETANDDISTANCE),C,r,j):De(C,r,I*j),i.get(d.FEATUREATTRIBUTE)?_e(i.get(d.FEATUREATTRIBUTE),R,r,j):De(R,r,I*j),a!=null){const c=i.get(d.POSITION)?.indices;if(c){const M=c.length,w=s.getField(d.OLIDCOLOR,lo);Yt(a,w,M,r,j)}}return{numVerticesPerItem:j,numItems:I}}intersect(e,t,i,a,s,r,l){const{options:{selectionMode:u,hud:n,excludeLabels:S},point:f,camera:h}=a;if(!u||!n||S&&t.isLabel||!f)return;const C=this.vertexBufferLayout.createView(e),R=C.getField(d.POSITION,Ne),F=C.getField(d.NORMAL,Ne),b=C.getField(d.ROTATION,co),x=C.getField(d.SIZE,uo),T=C.getField(d.FEATUREATTRIBUTE,Ue),z=C.getField(d.CENTEROFFSETANDDISTANCE,Ue),I=t.centerOffsetUnits==="screen",g=K(t);if(R==null||F==null||b==null||x==null||z==null||h==null)return;const L=T==null?null:T.getVec(0,Ce),{scaleX:D,scaleY:c}=$e(L,t,h.pixelRatio),M=R.count/j;for(let w=0;w<M;w++){const _=w*j;if(R.getVec(_,m),i!=null&&Ee(m,m,i),Z(m,m,h.viewMatrix),z.getVec(_,le),ce(O,le[0],le[1],le[2]),!I&&(m[0]+=O[0],m[1]+=O[1],O[2]!==0)){const U=O[2];xe(O,m),Ke(m,m,H(O,O,U))}if(F.getVec(_,X),be(X,de,h,te),Te(t,m,te,h,Y),h.applyProjection(m,v),v[0]>-1){I&&(O[0]||O[1])&&(v[0]+=O[0]*h.pixelRatio,O[1]!==0&&(v[1]+=We(O[1],Y.factorAlignment)*h.pixelRatio),h.unapplyProjection(v,m)),v[0]+=t.screenOffset[0]*h.pixelRatio,v[1]+=t.screenOffset[1]*h.pixelRatio,v[0]=Math.floor(v[0]),v[1]=Math.floor(v[1]),x.getVec(_,E),Xe(E,Y.factor,E);const U=ct*h.pixelRatio;let se=0;t.textureIsSignedDistanceField&&(se=Math.min(t.outlineSize,.5*E[0])*h.pixelRatio/2),E[0]*=D,E[1]*=c;const re=b.get(_),he=t.rotation+re;if(Oe(f,v[0],v[1],E,U,se,he,t,g)){const ne=a.ray;if(Z(pe,m,Ze(lt,h.viewMatrix)),v[0]=f[0],v[1]=f[1],h.unprojectFromRenderScreen(v,m)){const B=G();W(B,ne.direction);const V=1/oe(B);H(B,B,V),l(Je(ne.origin,m)*V,B,w,pe)}}}}}}function $e(o,e,t){return o==null||e.vvSize==null?{scaleX:t,scaleY:t}:(Kt(ve,e,o),{scaleX:ve[0]*t,scaleY:ve[1]*t})}function Te(o,e,t,i,a){if(!o.verticalOffset?.screenLength)return o.screenSizePerspective||o.screenSizePerspectiveAlignment?Ge(o,a,oe(e),t.cosAngle):(a.factor.scale=1,a.factorAlignment.scale=1),e;const s=oe(e),r=o.screenSizePerspectiveAlignment??o.screenSizePerspective,l=Jt(i,s,o.verticalOffset,t.cosAngle,r);return Ge(o,a,s,t.cosAngle),H(t.normal,t.normal,l),Ee(e,e,t.normal)}function Ge(o,e,t,i){o.screenSizePerspective!=null?Me(i,t,o.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minScaleFactor=0),o.screenSizePerspectiveAlignment!=null?Me(i,t,o.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minScaleFactor=e.factor.minScaleFactor)}const Ko=Object.freeze(Object.defineProperty({__proto__:null,build:rt,calculateAnchorPosition:K,fullUV:ie},Symbol.toStringTag,{value:"Module"}));export{Pi as a,ye as b,Ti as c,Po as i,Q as o,$i as s,Ai as u};
