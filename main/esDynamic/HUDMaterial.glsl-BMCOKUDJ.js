import{S as e,y as t}from"./vec2-BNGcJ5FZ.js";import{i as n}from"./vec2f64-D8dbcrKD.js";import{t as r}from"./vec4f64-DFGee9an.js";import{n as i,t as a}from"./glsl-EDZkDhgF.js";import{t as o}from"./FloatPassUniform-gHcGW-mi.js";import{t as s}from"./Texture2DPassUniform-RVTT2Sjh.js";import{t as ee}from"./ShaderBuilder-aUMFb5cS.js";import{t as c}from"./ReadDepth.glsl-DNR_DJR2.js";import{t as l}from"./Float4BindUniform-BljimXR4.js";import{t as u}from"./Texture2DBindUniform-BjIiNL3v.js";import{t as d}from"./Float2PassUniform-oNPLRE_S.js";import{t as f}from"./Float4PassUniform-R_rVPKlL.js";import{i as p,n as m,s as h,t as g}from"./AlphaCutoff-lGKpUdxr.js";import{t as te}from"./ObjectAndLayerIdColor.glsl-C3sEfoJy.js";import{t as _}from"./VisualVariables.glsl-CLB2wooA.js";import{n as v,r as y,t as b}from"./ScreenSizePerspective.glsl-Dmu3eZ8-.js";import{i as x}from"./View.glsl-YsNDLcX0.js";import{t as S}from"./PositionOutsideClipSpace-I4C860lT.js";import{t as C}from"./TerrainDepthTest.glsl-DZ7tKbZj.js";import{n as w,r as T,t as E}from"./HUDVisibility.glsl-B389GRy7.js";function D(e,t){let{vertex:n,fragment:r}=e;e.include(C,t),n.include(w),n.main.add(i`vec4 posProjCenter;
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
gl_PointSize = 1.0;`),r.main.add(i`fragColor = vec4(1);
if(discardByTerrainDepth()) {
fragColor.g = 0.5;
}`)}function O(e){let n=new ee;if(n.include(T,e),n.vertex.include(h,e),e.occlusionPass)return n.include(D,e),n;let{output:C,oitPass:O,hasOcclusionTexture:M,signedDistanceFieldEnabled:P,useVisibilityPixel:I,pixelSnappingEnabled:L,hasEmission:R,hasScreenSizePerspective:z,debugDrawLabelBorder:B,hasVVSize:V,hasVVColor:H,hasRotation:U,occludedFragmentFade:W,sampleSignedDistanceFieldTexelCenter:G}=e;n.include(v),n.include(_,e),n.include(te,e),I&&n.include(E);let{vertex:K,fragment:q}=n;q.include(p),n.varyings.add(`vcolor`,`vec4`),n.varyings.add(`vtc`,`vec2`),n.varyings.add(`vsize`,`vec2`);let J=C===8,Y=J&&I;Y&&n.varyings.add(`voccluded`,`float`),K.uniforms.add(new l(`viewport`,e=>e.camera.fullViewport),new d(`screenOffset`,(e,n)=>t(j,2*e.screenOffset[0]*n.camera.pixelRatio,2*e.screenOffset[1]*n.camera.pixelRatio)),new d(`anchorPosition`,e=>A(e)),new f(`materialColor`,({color:e})=>e),new o(`materialRotation`,e=>e.rotation),new s(`tex`,e=>e.texture)),x(K),P&&(K.uniforms.add(new f(`outlineColor`,e=>e.outlineColor)),q.uniforms.add(new f(`outlineColor`,e=>k(e)?e.outlineColor:r),new o(`outlineSize`,e=>k(e)?e.outlineSize:0))),L&&K.include(w),z&&(y(K),b(K)),B&&n.varyings.add(`debugBorderCoords`,`vec4`),n.attributes.add(`uv0`,`vec2`),n.attributes.add(`uvi`,`vec4`),n.attributes.add(`color`,`vec4`),n.attributes.add(`size`,`vec2`),n.attributes.add(`rotation`,`float`),(V||H)&&n.attributes.add(`featureAttribute`,`vec4`),K.main.add(i`
    ProjectHUDAux projectAux;
    vec4 posProj = projectPositionHUD(projectAux);
    forwardObjectAndLayerIdColor();

    if (rejectBySlice(projectAux.posModel)) {
      gl_Position = ${S};
      return;
    }

    vec2 inputSize;
    ${a(z,i`
        inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
        vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);`,i`
        inputSize = size;
        vec2 screenOffsetScaled = screenOffset;`)}
    ${a(V,i`inputSize *= vvScale(featureAttribute).xx;`)}

    vec2 combinedSize = inputSize * pixelRatio;
    vec4 quadOffset = vec4(0.0);

    ${a(I,i`
        bool visible = testHUDVisibility(posProj);
        if (!visible) {
          vtc = vec2(0.0);
          ${a(B,`debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);`)}
          return;
        }
      `)}
    ${a(Y,i`voccluded = visible ? 0.0 : 1.0;`)}
  `);let X=i`
    vec2 uv = mix(uvi.xy, uvi.zw, bvec2(uv0));
    vec2 texSize = vec2(textureSize(tex, 0));
    uv = mix(vec2(1.0), uv / texSize, lessThan(uv, vec2(${F})));
    quadOffset.xy = (uv0 - anchorPosition) * 2.0 * combinedSize;

    ${a(U,i`
        float angle = radians(materialRotation + rotation);
        float cosAngle = cos(angle);
        float sinAngle = sin(angle);
        mat2 rotate = mat2(cosAngle, -sinAngle, sinAngle,  cosAngle);

        quadOffset.xy = rotate * quadOffset.xy;
      `)}

    quadOffset.xy = (quadOffset.xy + screenOffsetScaled) / viewport.zw * posProj.w;
  `,Z=L?P?i`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:i`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:i`posProj += quadOffset;`;K.main.add(i`
    ${X}
    ${H?`vcolor = interpolateVVColor(featureAttribute.y) * materialColor;`:`vcolor = color * materialColor;`}

    ${a(C===9,i`vcolor.a = 1.0;`)}

    bool alphaDiscard = vcolor.a < ${i.float(g)};
    ${a(P,`alphaDiscard = alphaDiscard && outlineColor.a < ${i.float(g)};`)}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${Z}
      gl_Position = posProj;
    }

    vtc = uv;

    ${a(B,i`debugBorderCoords = vec4(uv0, 1.5 / combinedSize);`)}
    vsize = inputSize;
  `),q.uniforms.add(new s(`tex`,e=>e.texture)),W&&!J&&(q.include(c),q.uniforms.add(new u(`depthMap`,e=>e.mainDepth),new o(`occludedOpacity`,e=>e.occludedFragmentOpacity?.value??1))),M&&q.uniforms.add(new u(`texOcclusion`,e=>e.hudOcclusion?.attachment));let Q=B?i`(isBorder > 0.0 ? 0.0 : ${i.float(g)})`:i.float(g),$=i`
    ${a(B,i`float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`)}

    vec2 samplePos = vtc;

    ${a(G,i`
      float txSize = float(textureSize(tex, 0).x);
      float texelSize = 1.0 / txSize;

      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      samplePos += (vec2(1.0, -1.0) * texelSize) * scaleFactor;`)}

    ${P?i`
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
          outlineAlphaFactor + fillAlphaFactor < ${Q} ||
          fillPixelColor.a + outlinePixelColor.a < ${i.float(g)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
                              vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        ${a(!J,i`fragColor = vec4(compositeColor, compositeAlpha);`)}
      } else {
        if (fillAlphaFactor < ${Q}) {
          discard;
        }

        ${a(!J,i`fragColor = premultiplyAlpha(fillPixelColor);`)}
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-pixelDistance/vsize.x*2.0, 0.0, 1.0), clamp(pixelDistance/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:i`
          vec4 texColor = texture(tex, samplePos, -0.5);
          if (texColor.a < ${Q}) {
            discard;
          }
          ${a(!J,i`fragColor = texColor * premultiplyAlpha(vcolor);`)}
          `}

    ${a(W&&!J,i`
        float zSample = -linearizeDepth(texelFetch(depthMap, ivec2(gl_FragCoord.xy), 0).x);
        float zFragment = -linearizeDepth(gl_FragCoord.z);
        if (zSample < ${i.float(1-N)} * zFragment) {
          fragColor *= occludedOpacity;
        }
      `)}
    ${a(M,i`fragColor *= texelFetch(texOcclusion, ivec2(gl_FragCoord.xy), 0).r;`)}

    ${a(!J&&B,i`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`)}

    ${a(O===2,i`
    if (fragColor.a < ${i.float(g)}) {
      discard;
    }`)}
  `;switch(C){case 0:n.outputs.add(`fragColor`,`vec4`,0),R&&n.outputs.add(`fragEmission`,`vec4`,1),O===1&&n.outputs.add(`fragAlpha`,`float`,R?2:1),q.main.add(i`
        ${$}
        // Unlike other materials, the fragment shader outputs premultiplied colors.
        // Disable this for front face rendering for correct OIT compositing.
        ${a(O===2,i`fragColor.rgb /= fragColor.a;`)}
        ${a(R,i`fragEmission = vec4(0.0);`)}
        ${a(O===1,i`fragAlpha = fragColor.a;`)}`);break;case 9:q.main.add(i`
        ${$}
        outputObjectAndLayerIdColor();`);break;case 8:n.include(m,e),q.main.add(i`
        ${$}
        outputHighlight(${a(Y,i`voccluded == 1.0`,i`false`)});`)}return n}function k(e){return e.outlineColor[3]>0&&e.outlineSize>0}function A(t){return t.textureIsSignedDistanceField?M(t.anchorPosition,t.distanceFieldBoundingBox,j):e(j,t.anchorPosition),j}var j=n();function M(e,n,r){t(r,e[0]*(n[2]-n[0])+n[0],e[1]*(n[3]-n[1])+n[1])}var N=.08,P=32e3,F=i.float(P),I=Object.freeze(Object.defineProperty({__proto__:null,build:O,calculateAnchorPosition:A,fullUV:P},Symbol.toStringTag,{value:`Module`}));export{P as i,I as n,O as r,A as t};