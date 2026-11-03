import{n as e,t}from"./glsl-BlSepfbN.js";import{t as n}from"./Texture2DPassUniform-Mr-K9FL9.js";import{t as r}from"./ShaderBuilder-CAOj4ema.js";import{t as i}from"./Float2BindUniform-Bo0vFAII.js";import{t as a}from"./Float4BindUniform-53grEBNh.js";import{t as o}from"./Float4PassUniform-CGmatYpU.js";import{t as s}from"./FloatBindUniform-CQkkuCDc.js";import{a as c,i as l,n as u}from"./AlphaCutoff-C0WvOihj.js";import{t as d}from"./Matrix4BindUniform-D72fA6z_.js";import{i as f,n as p,r as m}from"./View.glsl-CC1Nd4YT.js";import{c as h,l as g,s as _,t as v}from"./MarkerSizing.glsl-DsZUbA45.js";import{t as y}from"./PositionOutsideClipSpace-B-xPTe0H.js";import{t as b}from"./TerrainDepthTest.glsl-OufBd8JI.js";import{t as x}from"./OutputColorHighlightOLID.glsl-DsZ9QL0T.js";function S(S){let C=new r,{space:w,anchor:T,hasTip:E,hasScreenSizePerspective:D}=S,O=w===2,k=w===1;C.include(g,S),C.include(v,S),C.include(b,S);let{vertex:A,fragment:j,varyings:M}=C;p(A,S),C.attributes.add(`position`,`vec3`),C.attributes.add(`previousDelta`,`vec4`),C.attributes.add(`uv0`,`vec2`),M.add(`vColor`,`vec4`),M.add(`vpos`,`vec3`,{invariant:!0}),M.add(`vUV`,`vec2`),M.add(`vSize`,`float`),E&&M.add(`vLineWidth`,`float`),A.uniforms.add(new i(`nearFar`,({camera:e})=>e.nearFar),new a(`viewport`,({camera:e})=>e.fullViewport)).code.add(e`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),A.code.add(e`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
float interpolation = (-vnp - pos.z) / (prev.z - pos.z);
prev = mix(pos, prev, interpolation);
}
}`),O?(C.attributes.add(`normal`,`vec3`),m(A),A.constants.add(`tiltThreshold`,`float`,.7),A.code.add(e`vec3 perpendicular(vec3 v) {
vec3 n = (viewNormal * vec4(normal.xyz, 1.0)).xyz;
vec3 n2 = cross(v, n);
vec3 forward = vec3(0.0, 0.0, 1.0);
float tiltDot = dot(forward, n);
return abs(tiltDot) < tiltThreshold ? n : n2;
}`)):A.code.add(e`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}`);let N=O?`vec3`:`vec2`;return A.code.add(e`
      ${N} normalizedSegment(${N} pos, ${N} prev) {
        ${N} segment = pos - prev;
        float segmentLen = length(segment);

        // normalize or zero if too short
        return (segmentLen > 0.001) ? segment / segmentLen : ${O?`vec3(0.0, 0.0, 0.0)`:`vec2(0.0, 0.0)`};
      }

      ${N} displace(${N} pos, ${N} prev, float displacementLen) {
        ${N} segment = normalizedSegment(pos, prev);

        ${N} displacementDirU = perpendicular(segment);
        ${N} displacementDirV = segment;

        ${T===1?`pos -= 0.5 * displacementLen * displacementDirV;`:``}

        return pos + displacementLen * (uv0.x * displacementDirU + uv0.y * displacementDirV);
      }
    `),k&&(A.uniforms.add(new d(`inverseProjectionMatrix`,({camera:e})=>e.inverseProjectionMatrix)),A.code.add(e`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`),A.code.add(e`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`),A.uniforms.add(new s(`perScreenPixelRatio`,({camera:e})=>e.perScreenPixelRatio)),A.code.add(e`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${t(S.hasCap,`if(prev.z > posLeft.z) {
                vec2 diff = posLeft.xy - posRight.xy;
                planeOrigin.xy += perpendicular(diff) / 2.0;
             }`)};

        // Move the plane towards the camera by a margin dependent on the line width (approximated in world space). This tolerance corrects for the
        // non-planarity in most cases, but sharp joins can place the prev vertices at arbitrary positions so markers can still clip.
        float offset = lineWidth * perScreenPixelRatio;
        planeOrigin *= (1.0 - offset);

        // Intersect camera ray with the plane and make sure it is within clip space
        vec3 rayDir = normalize(displacedPos);
        vec3 intersection;
        if (rayIntersectPlane(rayDir, planeOrigin, planeNormal, intersection) && intersection.z < -nearFar[0] && intersection.z > -nearFar[1]) {
          return vec4(intersection.xyz, 1.0);
        }

        // Fallback: use depth of pos or prev, whichever is closer to the camera
        float minDepth = planeOrigin.z > prev.z ? length(planeOrigin) : length(prev);
        displacedPos *= minDepth / length(displacedPos);
        return vec4(displacedPos.xyz, 1.0);
      }
  `)),f(A),C.include(h),A.main.add(e`
    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = ${y};
    }
    else {
      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(position + previousDelta.xyz * previousDelta.w, 1.0);

      float lineWidth = getLineWidth(${t(D,`pos.xyz`)});
      float screenMarkerSize = getScreenMarkerSize(lineWidth);

      clip(pos, prev);

      ${O?e`${t(S.hideOnShortSegments,e`
                if (areWorldMarkersHidden(pos.xyz, prev.xyz)) {
                  gl_Position = ${y};
                  return;
                }`)}
            pos.xyz = displace(pos.xyz, prev.xyz, getWorldMarkerSize(pos.xyz));
            vec4 displacedPosScreen = projectAndScale(pos);`:e`
            vec4 posScreen = projectAndScale(pos);
            vec4 prevScreen = projectAndScale(prev);
            vec4 displacedPosScreen = posScreen;

            displacedPosScreen.xy = displace(posScreen.xy, prevScreen.xy, screenMarkerSize);
            ${t(k,e`
                vec2 displacementDirU = perpendicular(normalizedSegment(posScreen.xy, prevScreen.xy));

                // We need three points of the ribbon line in camera space to calculate the plane it lies in
                // Note that we approximate the third point, since we have no information about the join around prev
                vec3 lineRight = inverseProject(posScreen + lineWidth * vec4(displacementDirU.xy, 0.0, 0.0));
                vec3 lineLeft = pos.xyz + (pos.xyz - lineRight);

                pos = toFront(displacedPosScreen, lineLeft, lineRight, prev.xyz, lineWidth);
                displacedPosScreen = projectAndScale(pos);`)}`}
      forwardViewPosDepth(pos.xyz);
      // Convert back into NDC
      displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

      // Convert texture coordinate into [0,1]
      vUV = (uv0 + 1.0) / 2.0;
      ${t(!O,`vUV = noPerspectiveWrite(vUV, displacedPosScreen.w);`)}
      ${t(E,`vLineWidth = noPerspectiveWrite(lineWidth, displacedPosScreen.w);`)}

      vSize = screenMarkerSize;
      vColor = getColor();

      // Use camera space for slicing
      vpos = pos.xyz;

      gl_Position = displacedPosScreen;
    }`),j.include(c,S),C.include(x,S),j.include(l),j.uniforms.add(new o(`intrinsicColor`,({color:e})=>e),new n(`tex`,({markerTexture:e})=>e)).constants.add(`texelSize`,`float`,1/64).code.add(e`float markerAlpha(vec2 samplePos) {
samplePos += vec2(0.5, -0.5) * texelSize;
float sdf = texture(tex, samplePos).r;
float pixelDistance = sdf * vSize;
pixelDistance -= 0.5;
return clamp(0.5 - pixelDistance, 0.0, 1.0);
}`),E&&(C.include(_),j.constants.add(`relativeMarkerSize`,`float`,32/64).constants.add(`relativeTipLineWidth`,`float`,.25).code.add(e`
    float tipAlpha(vec2 samplePos) {
      // Convert coordinates s.t. they are in pixels and relative to the tip of an arrow marker
      samplePos -= vec2(0.5, 0.5 + 0.5 * relativeMarkerSize);
      samplePos *= vSize;

      float halfMarkerSize = 0.5 * relativeMarkerSize * vSize;
      float halfTipLineWidth = 0.5 * max(1.0, relativeTipLineWidth * noPerspectiveRead(vLineWidth));

      ${t(O,`halfTipLineWidth *= fwidth(samplePos.y);`)}

      float distance = max(abs(samplePos.x) - halfMarkerSize, abs(samplePos.y) - halfTipLineWidth);
      return clamp(0.5 - distance, 0.0, 1.0);
    }
  `)),C.include(u,S),C.include(_),j.main.add(e`
    discardBySlice(vpos);
    discardByTerrainDepth();

    vec4 finalColor = intrinsicColor * vColor;

    // Cancel out perspective correct interpolation if in screen space or draped
    vec2 samplePos = ${t(!O,`noPerspectiveRead(vUV)`,`vUV`)};
    finalColor.a *= ${E?`max(markerAlpha(samplePos), tipAlpha(samplePos))`:`markerAlpha(samplePos)`};
    outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),C}var C=Object.freeze(Object.defineProperty({__proto__:null,build:S},Symbol.toStringTag,{value:`Module`}));export{S as n,C as t};