import{a9 as dt,v as z,ah as $,af as pt,cD as ft,d5 as ht,dz as gt}from"./main-BFDurRCu.js";import{o as mt}from"./floatRGBA-DRFmbkvz.js";import{e as me,a as vt,r as St,u as Re,n as ne}from"./vec4f64-DD-nkcCV.js";import{a7 as xt,L as bt,ae as Ot,aP as Ct,s as Tt,H as Pt,M as At,a9 as zt,o as yt,R as Fe,ad as ve,c as we,I as Ie,w as Et,aQ as Rt,i as Ft,D as V,k as wt,e as It,K as Dt,aH as te,V as _t,W as Mt,al as Lt,aR as jt,as as Nt,O as Ut,at as Bt,au as y,av as $t,aw as X,t as Vt,aS as De,aT as _e,aU as qt,ai as Ht,aV as Gt,ay as Wt,aC as Xt,aW as Qt,aX as kt,aY as Zt,aZ as Yt,a_ as Me,a$ as Le,b0 as Kt,aD as Jt,b1 as je}from"./OutputColorHighlightOID.glsl-BdXTjs7_.js";import{P as Ne,R as Ue,C as eo}from"./enums-wEDHPbCF.js";import{n as Be}from"./mat3-DOnW3DjW.js";import{e as $e}from"./mat3f64-BnNZDR5l.js";import{h as Ve}from"./mat4-OOmHNWi7.js";import{e as to}from"./mat4f64-xsZDPPj0.js";import{r as oo,o as Se,I as io}from"./vec2-BnynUbeJ.js";import{n as xe,r as qe}from"./vec2f64-CkowXrDb.js";import{o as le,E as Q,A as be,c as He,g as q,s as G,r as oe,p as Ge,u as Oe,R as so,N as ao,P as ro}from"./vec32-Cj8pVsU0.js";import{s as no,g as lo,o as We,f as co,y as uo,T as Xe}from"./BufferView-wDxx79o3.js";import{O as po}from"./InterleavedLayout-C2YUDwKf.js";import{n as B,u as Qe,w as Ce}from"./ShaderOutput-CUn9tpiG.js";import{l as ke,u as fo,n as ho,b as go,d as mo}from"./dehydratedFeatureUtils-OR1UjA48.js";import{e as d}from"./VertexAttribute-hUz6pozM.js";import{B as vo,o as So,g as xo,p as bo}from"./renderState-BM-MCKUz.js";import{n as p,t as R}from"./glsl-Z5uYj8ka.js";import{a as Oo}from"./BindType-CKbZk6AG.js";import"./vec42-D8CJyqHG.js";import{i as Co}from"./ShaderBuilder-CU5v4tk1.js";let To=class extends xt{constructor(e,t){super(e,"vec4",Oo.Draw,(o,i,s)=>o.setUniform4fv(e,t(i,s)))}};const ce=128,H=.5,Po=me(H/2,H/2,1-H/2,1-H/2);function Ao(e){return e==="cross"||e==="x"}function zo(e,t=ce,o=t*H,i=0){const{data:s,parameters:r}=Ze(e,t,o,i);return new bt(s,r)}function Ze(e,t=ce,o=t*H,i=0){return{data:yo(e,t,o,i),parameters:{mipmap:!1,wrap:{s:Ne.CLAMP_TO_EDGE,t:Ne.CLAMP_TO_EDGE},width:t,height:t,components:4,noUnpackFlip:!0,reloadable:!0}}}function yo(e,t=ce,o=t*H,i=0){switch(e){case"circle":default:return Eo(t,o);case"square":return Ro(t,o);case"cross":return wo(t,o,i);case"x":return Io(t,o,i);case"kite":return Fo(t,o);case"triangle":return Do(t,o);case"arrow":return _o(t,o)}}function Eo(e,t){const o=e/2-.5;return ie(e,Je(o,o,t/2))}function Ro(e,t){return Ye(e,t,!1)}function Fo(e,t){return Ye(e,t,!0)}function wo(e,t,o=0){return Ke(e,t,!1,o)}function Io(e,t,o=0){return Ke(e,t,!0,o)}function Do(e,t){return ie(e,et(e/2,t,t/2))}function _o(e,t){const o=t,i=t/2,s=e/2,r=.8*o,a=Je(s,(e-t)/2-r,Math.sqrt(r*r+i*i)),c=et(s,o,i);return ie(e,(l,n)=>Math.max(c(l,n),-a(l,n)))}function Ye(e,t,o){return o&&(t/=Math.SQRT2),ie(e,(i,s)=>{let r=i-.5*e+.25,a=.5*e-s-.75;if(o){const c=(r+a)/Math.SQRT2;a=(a-r)/Math.SQRT2,r=c}return Math.max(Math.abs(r),Math.abs(a))-.5*t})}function Ke(e,t,o,i=0){t-=i,o&&(t*=Math.SQRT2);const s=.5*t;return ie(e,(r,a)=>{let c,l=r-.5*e,n=.5*e-a-1;if(o){const f=(l+n)/Math.SQRT2;n=(n-l)/Math.SQRT2,l=f}return l=Math.abs(l),n=Math.abs(n),c=l>n?l>s?Math.sqrt((l-s)*(l-s)+n*n):n:n>s?Math.sqrt(l*l+(n-s)*(n-s)):l,c-=i/2,c})}function Je(e,t,o){return(i,s)=>{const r=i-e,a=s-t;return Math.sqrt(r*r+a*a)-o}}function et(e,t,o){const i=Math.sqrt(t*t+o*o);return(s,r)=>{const a=Math.abs(s-e)-o,c=r-e+t/2+.75,l=(t*a+o*c)/i,n=-c;return Math.max(l,n)}}function ie(e,t){const o=new Uint8Array(4*e*e);for(let i=0;i<e;i++)for(let s=0;s<e;s++){const r=s+e*i;let a=t(s,i);a=a/e+.5,mt(a,o,4*r)}return o}function Mo(e){return e instanceof Float32Array&&e.length>=16}function Lo(e){return Array.isArray(e)&&e.length>=16}function jo(e){return Mo(e)||Lo(e)}class No{constructor(){this.factor=new tt,this.factorAlignment=new tt}}class tt{constructor(){this.scale=0,this.factor=0,this.minScaleFactor=0}}function Uo(e,t){const{vertex:o,fragment:i}=e;e.include(Ot,t),o.include(ke),o.main.add(p`vec4 posProjCenter;
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
}`)}function ot(e){const t=new Co,{signedDistanceFieldEnabled:o,occlusionTestEnabled:i,horizonCullingEnabled:s,pixelSnappingEnabled:r,hasScreenSizePerspective:a,debugDrawLabelBorder:c,vvSize:l,vvColor:n,hasRotation:f,occludedFragmentFade:v,sampleSignedDistanceFieldTexelCenter:g}=e;t.include(fo,e),t.vertex.include(Ct,e);const{occlusionPass:P,output:w,oitPass:A}=e;if(P)return t.include(Uo,e),t;const{vertex:x,fragment:O}=t;t.include(Tt),t.include(Pt,e),t.include(At,e),i&&t.include(ho),O.include(go),O.include(zt),t.varyings.add("vcolor","vec4"),t.varyings.add("vtc","vec2"),t.varyings.add("vsize","vec2");const C=w===B.Highlight,I=C&&i;I&&t.varyings.add("voccluded","float"),x.uniforms.add(new yt("viewport",u=>u.camera.fullViewport),new Fe("screenOffset",(u,L)=>Se(ue,2*u.screenOffset[0]*L.camera.pixelRatio,2*u.screenOffset[1]*L.camera.pixelRatio)),new Fe("anchorPosition",u=>k(u)),new ve("materialColor",u=>u.color),new we("materialRotation",u=>u.rotation),new Ie("tex",u=>u.texture)),Et(x),o&&(x.uniforms.add(new ve("outlineColor",u=>u.outlineColor)),O.uniforms.add(new ve("outlineColor",u=>it(u)?u.outlineColor:vt),new we("outlineSize",u=>it(u)?u.outlineSize:0))),s&&x.uniforms.add(new To("pointDistanceSphere",(u,L)=>{const M=L.camera.eye,_=u.origin;return St(_[0]-M[0],_[1]-M[1],_[2]-M[2],dt.radius)})),r&&x.include(ke),a&&(Rt(x),Ft(x)),c&&t.varyings.add("debugBorderCoords","vec4"),t.attributes.add(d.UVI,"vec2"),t.attributes.add(d.COLOR,"vec4"),t.attributes.add(d.SIZE,"vec2"),t.attributes.add(d.ROTATION,"float"),(l||n)&&t.attributes.add(d.FEATUREATTRIBUTE,"vec4"),x.code.add(s?p`bool behindHorizon(vec3 posModel) {
vec3 camToEarthCenter = pointDistanceSphere.xyz - localOrigin;
vec3 camToPos = pointDistanceSphere.xyz + posModel;
float earthRadius = pointDistanceSphere.w;
float a = dot(camToPos, camToPos);
float b = dot(camToPos, camToEarthCenter);
float c = dot(camToEarthCenter, camToEarthCenter) - earthRadius * earthRadius;
return b > 0.0 && b < a && b * b  > a * c;
}`:p`bool behindHorizon(vec3 posModel) { return false; }`),x.main.add(p`
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
    ${R(a,p`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,p`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${R(l,p`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${R(i,p`
    bool visible = testHUDVisibility(posProj);
    if (!visible) {
      vtc = vec2(0.0);
      ${R(c,"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);")}
      return;
    }`)}
    ${R(I,p`voccluded = visible ? 0.0 : 1.0;`)}
  `);const F=p`
      vec2 uvi1 = vec2(uvi.x < 0.0 ? 1.0 : 0.0, uvi.y < 0.0 ? 1.0 : 0.0);
      vec2 uv = abs(uvi + uvi1);
      vec2 texSize = vec2(textureSize(tex, 0));
      uv.x = uv.x >= ${st} ? 1.0 : uv.x / texSize.x;
      uv.y = uv.y >= ${st} ? 1.0 : uv.y / texSize.y;
      quadOffset.xy = (uvi1 - anchorPosition) * 2.0 * combinedSize;

      ${R(f,p`
          float angle = radians(materialRotation + rotation);
          float cosAngle = cos(angle);
          float sinAngle = sin(angle);
          mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

          quadOffset.xy = rotate * quadOffset.xy;
        `)}

      quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,S=r?o?p`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:p`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:p`posProj += quadOffset;`;x.main.add(p`
    ${F}
    ${n?"vcolor = interpolateVVColor(featureAttribute.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${R(w===B.ObjectAndLayerIdColor,p`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${p.float(V)};
    ${R(o,`alphaDiscard = alphaDiscard && outlineColor.a < ${p.float(V)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${S}
      gl_Position = posProj;
    }

    vtc = uv;

    ${R(c,p`debugBorderCoords = vec4(uv01, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),O.uniforms.add(new Ie("tex",u=>u.texture)),v&&!C&&O.uniforms.add(new wt("depthMap",u=>u.mainDepth),new It("occludedOpacity",u=>u.hudOccludedFragmentOpacity));const N=c?p`(isBorder > 0.0 ? 0.0 : ${p.float(V)})`:p.float(V),D=p`
    ${R(c,p`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${R(g,p`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${o?p`
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
          outlineAlphaFactor + fillAlphaFactor < ${N} ||
          fillPixelColor.a + outlinePixelColor.a < ${p.float(V)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${R(!C,p`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${N}) {
          discard;
        }

        ${R(!C,p`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:p`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${N}) {
            discard;
          }
          ${R(!C,p`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${R(v&&!C,p`
        float zSample = texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x;
        if (zSample < gl_FragCoord.z) {
          fragColor *= occludedOpacity;
        }
        `)}

    ${R(!C&&c,p`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}
  `;switch(w){case B.Color:case B.ColorEmission:t.outputs.add("fragColor","vec4",0),w===B.ColorEmission&&t.outputs.add("fragEmission","vec4",1),A===te.ColorAlpha&&t.outputs.add("fragAlpha","float",w===B.ColorEmission?2:1),O.main.add(p`
        ${D}
        ${R(A===te.FrontFace,p`fragColor.rgb /= fragColor.a;`)}
        ${R(w===B.ColorEmission,p`fragEmission = vec4(0.0);`)}
        ${R(A===te.ColorAlpha,p`fragAlpha = fragColor.a;`)}`);break;case B.ObjectAndLayerIdColor:O.main.add(p`
        ${D}
        outputObjectAndLayerIdColor();`);break;case B.Highlight:t.include(Dt,e),O.main.add(p`
        ${D}
        outputHighlight(${R(I,p`voccluded == 1.0`,p`false`)});`)}return t}function it(e){return e.outlineColor[3]>0&&e.outlineSize>0}function k(e){return e.textureIsSignedDistanceField?Bo(e.anchorPosition,e.distanceFieldBoundingBox,ue):oo(ue,e.anchorPosition),ue}function Bo(e,t,o){Se(o,e[0]*(t[2]-t[0])+t[0],e[1]*(t[3]-t[1])+t[1])}const ue=xe(),se=32e3,st=p.float(se),$o=Object.freeze(Object.defineProperty({__proto__:null,build:ot,calculateAnchorPosition:k,fullUV:se},Symbol.toStringTag,{value:"Module"}));class Vo extends _t{constructor(t,o){super(t,o,new Mt($o,()=>Promise.resolve().then(()=>ei))),this.primitiveType=o.occlusionPass?Ue.POINTS:Ue.TRIANGLES}initializePipeline(t){const{oitPass:o,hasPolygonOffset:i,draped:s,output:r,depthTestEnabled:a,occlusionPass:c}=t,l=o===te.NONE,n=o===te.ColorAlpha,f=r===B.Highlight,v=a&&!s&&!n&&!c&&!f;return vo({blending:Qe(r)?l?So:jt(o):null,depthTest:a&&!s?{func:eo.LEQUAL}:null,depthWrite:v?bo:null,drawBuffers:Lt(o,r),colorWrite:xo,polygonOffset:i?qo:null})}}const qo={factor:0,units:-4};class T extends Nt{constructor(t){super(),this.spherical=t,this.screenCenterOffsetUnitsEnabled=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.hasRotation=!1,this.debugDrawLabelBorder=!1,this.hasPolygonOffset=!1,this.depthTestEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.occlusionPass=!1,this.occludedFragmentFade=!1,this.objectAndLayerIdColorInstanced=!1,this.horizonCullingEnabled=!0,this.isFocused=!0,this.textureCoordinateType=Ut.None,this.emissionSource=Bt.None,this.discardInvisibleFragments=!0,this.hasVvInstancing=!1,this.snowCover=!1}}z([y()],T.prototype,"screenCenterOffsetUnitsEnabled",void 0),z([y()],T.prototype,"occlusionTestEnabled",void 0),z([y()],T.prototype,"signedDistanceFieldEnabled",void 0),z([y()],T.prototype,"sampleSignedDistanceFieldTexelCenter",void 0),z([y()],T.prototype,"vvSize",void 0),z([y()],T.prototype,"vvColor",void 0),z([y()],T.prototype,"hasVerticalOffset",void 0),z([y()],T.prototype,"hasScreenSizePerspective",void 0),z([y()],T.prototype,"hasRotation",void 0),z([y()],T.prototype,"debugDrawLabelBorder",void 0),z([y()],T.prototype,"hasPolygonOffset",void 0),z([y()],T.prototype,"depthTestEnabled",void 0),z([y()],T.prototype,"pixelSnappingEnabled",void 0),z([y()],T.prototype,"draped",void 0),z([y()],T.prototype,"terrainDepthTest",void 0),z([y()],T.prototype,"cullAboveTerrain",void 0),z([y()],T.prototype,"occlusionPass",void 0),z([y()],T.prototype,"occludedFragmentFade",void 0),z([y()],T.prototype,"objectAndLayerIdColorInstanced",void 0),z([y()],T.prototype,"horizonCullingEnabled",void 0),z([y()],T.prototype,"isFocused",void 0);let Ho=class extends $t{constructor(e,t){super(e,Yo),this.produces=new Map([[X.HUD_MATERIAL,o=>Ce(o)&&!this.parameters.drawAsLabel],[X.LABEL_MATERIAL,o=>Ce(o)&&this.parameters.drawAsLabel],[X.OCCLUSION_PIXELS,()=>this.parameters.occlusionTest],[X.DRAPED_MATERIAL,o=>this.parameters.draped&&Ce(o)]]),this._visible=!0,this._configuration=new T(t)}getConfiguration(e,t){const o=this.parameters.draped;return super.getConfiguration(e,t,this._configuration),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen",this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=o,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.sampleSignedDistanceFieldTexelCenter=this.parameters.sampleSignedDistanceFieldTexelCenter,this._configuration.hasRotation=this.parameters.hasRotation,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=t.slot===X.OCCLUSION_PIXELS,this._configuration.occludedFragmentFade=!o&&this.parameters.occludedFragmentFade,this._configuration.horizonCullingEnabled=this.parameters.horizonCullingEnabled,this._configuration.isFocused=this.parameters.isFocused,this._configuration.depthTestEnabled=this.parameters.depthEnabled||t.slot===X.OCCLUSION_PIXELS,Qe(e)&&(this._configuration.debugDrawLabelBorder=!!Vt.LABELS_SHOW_BORDER),this._configuration.oitPass=t.oitPass,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration}intersect(e,t,o,i,s,r){const{options:{selectionMode:a,hud:c,excludeLabels:l},point:n,camera:f}=o,{parameters:v}=this;if(!a||!c||l&&v.isLabel||!e.visible||!n||!f)return;const g=e.attributes.get(d.FEATUREATTRIBUTE),P=g==null?null:Re(g.data,ze),{scaleX:w,scaleY:A}=ye(P,v,f.pixelRatio);Be(pe,t),e.attributes.has(d.FEATUREATTRIBUTE)&&Xo(pe);const x=e.attributes.get(d.POSITION),O=e.attributes.get(d.SIZE),C=e.attributes.get(d.NORMAL),I=e.attributes.get(d.ROTATION),F=e.attributes.get(d.CENTEROFFSETANDDISTANCE);no(x.size>=3);const S=k(v),N=this.parameters.centerOffsetUnits==="screen";for(let D=0;D<x.data.length/x.size;D++){const u=D*x.size;le(h,x.data[u],x.data[u+1],x.data[u+2]),Q(h,h,t),Q(h,h,f.viewMatrix);const L=D*F.size;if(le(b,F.data[L],F.data[L+1],F.data[L+2]),!N&&(h[0]+=b[0],h[1]+=b[1],b[2]!==0)){const _=b[2];be(b,h),He(h,h,q(b,b,_))}const M=D*C.size;if(le(W,C.data[M],C.data[M+1],C.data[M+2]),Te(W,pe,f,re),Ee(this.parameters,h,re,f,Z),f.applyProjection(h,m),m[0]>-1){N&&(b[0]||b[1])&&(m[0]+=b[0]*f.pixelRatio,b[1]!==0&&(m[1]+=De(b[1],Z.factorAlignment)*f.pixelRatio),f.unapplyProjection(m,h)),m[0]+=this.parameters.screenOffset[0]*f.pixelRatio,m[1]+=this.parameters.screenOffset[1]*f.pixelRatio,m[0]=Math.floor(m[0]),m[1]=Math.floor(m[1]);const _=D*O.size;E[0]=O.data[_],E[1]=O.data[_+1],_e(E,Z.factor,E);const Y=lt*f.pixelRatio;let K=0;v.textureIsSignedDistanceField&&(K=Math.min(v.outlineSize,.5*E[0])*f.pixelRatio/2),E[0]*=w,E[1]*=A;const he=D*I.size,ge=v.rotation+I.data[he];if(Pe(n,m[0],m[1],E,Y,K,ge,v,S)){const J=o.ray;if(Q(de,h,Ve(nt,f.viewMatrix)),m[0]=n[0],m[1]=n[1],f.unprojectFromRenderScreen(m,h)){const U=$();G(U,J.direction);const ee=1/oe(U);q(U,U,ee),r(Ge(J.origin,h)*ee,U,-1,de)}}}}}intersectDraped(e,t,o,i,s){const r=e.attributes.get(d.POSITION),a=e.attributes.get(d.SIZE),c=e.attributes.get(d.ROTATION),l=this.parameters,n=k(l),f=e.attributes.get(d.FEATUREATTRIBUTE),v=f==null?null:Re(f.data,ze),{scaleX:g,scaleY:P}=ye(v,l,e.screenToWorldRatio),w=ko*e.screenToWorldRatio;for(let A=0;A<r.data.length/r.size;A++){const x=A*r.size,O=r.data[x],C=r.data[x+1],I=A*a.size;E[0]=a.data[I],E[1]=a.data[I+1];let F=0;l.textureIsSignedDistanceField&&(F=Math.min(l.outlineSize,.5*E[0])*e.screenToWorldRatio/2),E[0]*=g,E[1]*=P;const S=A*c.size,N=l.rotation+c.data[S];Pe(o,O,C,E,w,F,N,l,n)&&i(s.distance,s.normal,-1)}}createBufferWriter(){return new Jo}applyShaderOffsetsView(e,t,o,i,s,r,a){const c=Te(t,o,s,re);return this._applyVerticalGroundOffsetView(e,c,s,a),Ee(this.parameters,a,c,s,r),this._applyPolygonOffsetView(a,c,i[3],s,a),this._applyCenterOffsetView(a,i,a),a}applyShaderOffsetsNDC(e,t,o,i,s){return this._applyCenterOffsetNDC(e,t,o,i),s!=null&&G(s,i),this._applyPolygonOffsetNDC(i,t,o,i),i}_applyPolygonOffsetView(e,t,o,i,s){const r=i.aboveGround?1:-1;let a=Math.sign(o);a===0&&(a=r);const c=r*a;if(this.parameters.shaderPolygonOffset<=0)return G(s,e);const l=pt(Math.abs(t.cosAngle),.01,1),n=1-Math.sqrt(1-l*l)/l/i.viewport[2];return q(s,e,c>0?n:1/n),s}_applyVerticalGroundOffsetView(e,t,o,i){const s=oe(e),r=o.aboveGround?1:-1,a=o.computeRenderPixelSizeAtDist(s)*mo,c=q(h,t.normal,r*a);return Oe(i,e,c),i}_applyCenterOffsetView(e,t,o){const i=this.parameters.centerOffsetUnits!=="screen";return o!==e&&G(o,e),i&&(o[0]+=t[0],o[1]+=t[1],t[2]&&(be(W,o),so(o,o,q(W,W,t[2])))),o}_applyCenterOffsetNDC(e,t,o,i){const s=this.parameters.centerOffsetUnits!=="screen";return i!==e&&G(i,e),s||(i[0]+=t[0]/o.fullWidth*2,i[1]+=t[1]/o.fullHeight*2),i}_applyPolygonOffsetNDC(e,t,o,i){const s=this.parameters.shaderPolygonOffset;if(e!==i&&G(i,e),s){const r=o.aboveGround?1:-1,a=r*Math.sign(t[3]);i[2]-=(a||r)*s}return i}set visible(e){this._visible=e}get visible(){const{color:e,outlineSize:t,outlineColor:o}=this.parameters,i=e[3]>=V||t>=V&&o[3]>=V;return this._visible&&i}createGLMaterial(e){return new Go(e)}calculateRelativeScreenBounds(e,t,o=ft()){return Wo(this.parameters,e,t,o),o[2]=o[0]+e[0],o[3]=o[1]+e[1],o}};class Go extends Jt{constructor(t){super({...t,...t.material.parameters})}beginSlot(t){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.getTechnique(Vo,t)}}function Wo(e,t,o,i){i[0]=e.anchorPosition[0]*-t[0]+e.screenOffset[0]*o,i[1]=e.anchorPosition[1]*-t[1]+e.screenOffset[1]*o}function Te(e,t,o,i){return jo(t)&&(t=Be(Qo,t)),ao(i.normal,e,t),Q(i.normal,i.normal,o.viewInverseTransposeMatrix),i.cosAngle=ro(at,Zo),i}function Xo(e){const t=e[0],o=e[1],i=e[2],s=e[3],r=e[4],a=e[5],c=e[6],l=e[7],n=e[8],f=1/Math.sqrt(t*t+o*o+i*i),v=1/Math.sqrt(s*s+r*r+a*a),g=1/Math.sqrt(c*c+l*l+n*n);return e[0]=t*f,e[1]=o*f,e[2]=i*f,e[3]=s*v,e[4]=r*v,e[5]=a*v,e[6]=c*g,e[7]=l*g,e[8]=n*g,e}function Pe(e,t,o,i,s,r,a,c,l){let n=t-s-i[0]*l[0],f=n+i[0]+2*s,v=o-s-i[1]*l[1],g=v+i[1]+2*s;const P=c.distanceFieldBoundingBox;return c.textureIsSignedDistanceField&&P!=null&&(n+=i[0]*P[0],v+=i[1]*P[1],f-=i[0]*(1-P[2]),g-=i[1]*(1-P[3]),n-=r,f+=r,v-=r,g+=r),Se(rt,t,o),io(ae,e,rt,gt(a)),ae[0]>n&&ae[0]<f&&ae[1]>v&&ae[1]<g}const Z=new No,h=$(),W=$(),m=ne(),at=$(),de=$(),ae=xe(),rt=xe(),pe=$e(),Qo=$e(),nt=to(),fe=ne(),b=$(),Ae=$(),ze=ne(),re={normal:at,cosAngle:0},lt=1,ko=2,E=qe(0,0),j=6,Zo=ht(0,0,1);class Yo extends qt{constructor(){super(...arguments),this.renderOccluded=Ht.Occlude,this.isDecoration=!1,this.color=me(1,1,1,1),this.polygonOffset=!1,this.anchorPosition=qe(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.sampleSignedDistanceFieldTexelCenter=!1,this.outlineColor=me(1,1,1,1),this.outlineSize=0,this.distanceFieldBoundingBox=ne(),this.rotation=0,this.hasRotation=!1,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.occludedFragmentFade=!1,this.horizonCullingEnabled=!1,this.centerOffsetUnits="world",this.drawAsLabel=!1,this.depthEnabled=!0,this.isFocused=!0,this.focusStyle="bright",this.draped=!1,this.isLabel=!1}}const ct=po().vec3f(d.POSITION).vec3f(d.NORMAL).vec2i16(d.UVI).vec4u8(d.COLOR).vec2f(d.SIZE).f32(d.ROTATION).vec4f(d.CENTEROFFSETANDDISTANCE).vec4f(d.FEATUREATTRIBUTE),Ko=ct.clone().vec4u8(d.OLIDCOLOR);class Jo{constructor(){this.vertexBufferLayout=Xt()?Ko:ct}elementCount(t){return t.get(d.POSITION).indices.length*j}write(t,o,i,s,r,a){const{position:c,normal:l,uvi:n,color:f,size:v,rotation:g,centerOffsetAndDistance:P,featureAttribute:w}=r;Qt(i.get(d.POSITION),t,c,a,j),kt(i.get(d.NORMAL),o,l,a,j);const A=i.get(d.UVI)?.data;let x=0,O=0,C=-1-se,I=-1-se;A&&A.length>=4&&(x=A[0],O=A[1],C=-1-A[2],I=-1-A[3]);let F=i.get(d.POSITION).indices.length,S=a;for(let u=0;u<F;++u)n.set(S,0,x),n.set(S,1,O),S++,n.set(S,0,C),n.set(S,1,O),S++,n.set(S,0,C),n.set(S,1,I),S++,n.set(S,0,C),n.set(S,1,I),S++,n.set(S,0,x),n.set(S,1,I),S++,n.set(S,0,x),n.set(S,1,O),S++;Zt(i.get(d.COLOR),4,f,a,j);const{data:N,indices:D}=i.get(d.SIZE);F=D.length,S=a;for(let u=0;u<F;++u){const L=N[2*D[u]],M=N[2*D[u]+1];for(let _=0;_<j;++_)v.set(S,0,L),v.set(S,1,M),S++}if(Yt(i.get(d.ROTATION),g,a,j),i.get(d.CENTEROFFSETANDDISTANCE)?Me(i.get(d.CENTEROFFSETANDDISTANCE),P,a,j):Le(P,a,F*j),i.get(d.FEATUREATTRIBUTE)?Me(i.get(d.FEATUREATTRIBUTE),w,a,j):Le(w,a,F*j),s!=null){const u=i.get(d.POSITION)?.indices;if(u){const L=u.length,M=r.getField(d.OLIDCOLOR,lo);Kt(s,M,L,a,j)}}return{numVerticesPerItem:j,numItems:F}}intersect(t,o,i,s,r,a,c){const{options:{selectionMode:l,hud:n,excludeLabels:f},point:v,camera:g}=s;if(!l||!n||f&&o.isLabel||!v)return;const P=this.vertexBufferLayout.createView(t),w=P.getField(d.POSITION,We),A=P.getField(d.NORMAL,We),x=P.getField(d.ROTATION,co),O=P.getField(d.SIZE,uo),C=P.getField(d.FEATUREATTRIBUTE,Xe),I=P.getField(d.CENTEROFFSETANDDISTANCE,Xe),F=o.centerOffsetUnits==="screen",S=k(o);if(w==null||A==null||x==null||O==null||I==null||g==null)return;const N=C==null?null:C.getVec(0,ze),{scaleX:D,scaleY:u}=ye(N,o,g.pixelRatio),L=w.count/j;for(let M=0;M<L;M++){const _=M*j;if(w.getVec(_,h),i!=null&&Oe(h,h,i),Q(h,h,g.viewMatrix),I.getVec(_,fe),le(b,fe[0],fe[1],fe[2]),!F&&(h[0]+=b[0],h[1]+=b[1],b[2]!==0)){const Y=b[2];be(b,h),He(h,h,q(b,b,Y))}if(A.getVec(_,W),Te(W,pe,g,re),Ee(o,h,re,g,Z),g.applyProjection(h,m),m[0]>-1){F&&(b[0]||b[1])&&(m[0]+=b[0]*g.pixelRatio,b[1]!==0&&(m[1]+=De(b[1],Z.factorAlignment)*g.pixelRatio),g.unapplyProjection(m,h)),m[0]+=o.screenOffset[0]*g.pixelRatio,m[1]+=o.screenOffset[1]*g.pixelRatio,m[0]=Math.floor(m[0]),m[1]=Math.floor(m[1]),O.getVec(_,E),_e(E,Z.factor,E);const Y=lt*g.pixelRatio;let K=0;o.textureIsSignedDistanceField&&(K=Math.min(o.outlineSize,.5*E[0])*g.pixelRatio/2),E[0]*=D,E[1]*=u;const he=x.get(_),ge=o.rotation+he;if(Pe(v,m[0],m[1],E,Y,K,ge,o,S)){const J=s.ray;if(Q(de,h,Ve(nt,g.viewMatrix)),m[0]=v[0],m[1]=v[1],g.unprojectFromRenderScreen(m,h)){const U=$();G(U,J.direction);const ee=1/oe(U);q(U,U,ee),c(Ge(J.origin,h)*ee,U,M,de)}}}}}}function ye(e,t,o){return e==null||t.vvSize==null?{scaleX:o,scaleY:o}:(Gt(Ae,t,e),{scaleX:Ae[0]*o,scaleY:Ae[1]*o})}function Ee(e,t,o,i,s){if(!e.verticalOffset?.screenLength)return e.screenSizePerspective||e.screenSizePerspectiveAlignment?ut(e,s,oe(t),o.cosAngle):(s.factor.scale=1,s.factorAlignment.scale=1),t;const r=oe(t),a=e.screenSizePerspectiveAlignment??e.screenSizePerspective,c=Wt(i,r,e.verticalOffset,o.cosAngle,a);return ut(e,s,r,o.cosAngle),q(o.normal,o.normal,c),Oe(t,t,o.normal)}function ut(e,t,o,i){e.screenSizePerspective!=null?je(i,o,e.screenSizePerspective,t.factor):(t.factor.scale=1,t.factor.factor=0,t.factor.minScaleFactor=0),e.screenSizePerspectiveAlignment!=null?je(i,o,e.screenSizePerspectiveAlignment,t.factorAlignment):(t.factorAlignment.factor=t.factor.factor,t.factorAlignment.scale=t.factor.scale,t.factorAlignment.minScaleFactor=t.factor.minScaleFactor)}const ei=Object.freeze(Object.defineProperty({__proto__:null,build:ot,calculateAnchorPosition:k,fullUV:se},Symbol.toStringTag,{value:"Module"}));export{zo as a,ce as b,Ao as c,Ze as i,H as o,Po as s,Ho as u};
