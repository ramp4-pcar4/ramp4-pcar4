import{a as e,f as t,m as n,o as r,p as i}from"./GridLocalOriginFactory-CJPXzGGZ.js";import{A as a,C as o,D as s,E as c,L as l,O as u,W as d,g as f,j as p,v as m,w as h}from"./TriangleTechniqueConfiguration-B0Mc-FdP.js";import{a as g}from"./SceneLighting-CPjMLrqt.js";import{c as _,d as v,f as y}from"./oitResolution.glsl-GKlYUQFU.js";import{t as b}from"./ShaderBuilder-CSrAKPgp.js";function x(x){let S=new b,{space:C,anchor:w,hasTip:T,hasScreenSizePerspective:E}=x,D=C===2,O=C===1;S.attributes.add(`position`,`vec3`),S.vertex.inputs.add(`position`,()=>`position`),S.include(n,x),S.include(r,x);let{vertex:k,fragment:A,varyings:j}=S;c(k,x),S.attributes.add(`previousDelta`,`vec4`),S.attributes.add(`uv0`,`vec2`),j.add(`vColor`,`vec4`),j.add(`vpos`,`vec3`,{invariant:!0}),j.add(`vUV`,`vec2`),j.add(`vSize`,`float`),T&&j.add(`vLineWidth`,`float`),k.uniforms.add(new o(`nearFar`,({camera:e})=>e.nearFar),new g(`viewport`,({camera:e})=>e.fullViewport)).code.add(y`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),k.code.add(y`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
float interpolation = (-vnp - pos.z) / (prev.z - pos.z);
prev = mix(pos, prev, interpolation);
}
}`),D?(S.attributes.add(`normal`,`vec3`),s(k),k.constants.add(`tiltThreshold`,`float`,.7),k.code.add(y`vec3 perpendicular(vec3 v) {
vec3 n = (viewNormal * vec4(normal.xyz, 1.0)).xyz;
vec3 n2 = cross(v, n);
vec3 forward = vec3(0.0, 0.0, 1.0);
float tiltDot = dot(forward, n);
return abs(tiltDot) < tiltThreshold ? n : n2;
}`)):k.code.add(y`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}`);let M=D?`vec3`:`vec2`;return k.code.add(y`
      ${M} normalizedSegment(${M} pos, ${M} prev) {
        ${M} segment = pos - prev;
        float segmentLen = length(segment);

        // normalize or zero if too short
        return (segmentLen > 0.001) ? segment / segmentLen : ${D?`vec3(0.0, 0.0, 0.0)`:`vec2(0.0, 0.0)`};
      }

      ${M} displace(${M} pos, ${M} prev, float displacementLen) {
        ${M} segment = normalizedSegment(pos, prev);

        ${M} displacementDirU = perpendicular(segment);
        ${M} displacementDirV = segment;

        ${w===1?`pos -= 0.5 * displacementLen * displacementDirV;`:``}

        return pos + displacementLen * (uv0.x * displacementDirU + uv0.y * displacementDirV);
      }
    `),O&&(k.uniforms.add(new a(`inverseProjectionMatrix`,({camera:e})=>e.inverseProjectionMatrix)),k.code.add(y`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`),k.code.add(y`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`),k.uniforms.add(new p(`perScreenPixelRatio`,({camera:e})=>e.perScreenPixelRatio)),k.code.add(y`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${v(x.hasCap,`if(prev.z > posLeft.z) {
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
  `)),u(k),S.include(i),k.main.add(y`
    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = ${e};
    }
    else {
      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(position + previousDelta.xyz * previousDelta.w, 1.0);

      float lineWidth = getLineWidth(${v(E,`pos.xyz`)});
      float screenMarkerSize = getScreenMarkerSize(lineWidth);

      clip(pos, prev);

      ${D?y`${v(x.hideOnShortSegments,y`
                if (areWorldMarkersHidden(pos.xyz, prev.xyz)) {
                  gl_Position = ${e};
                  return;
                }`)}
            pos.xyz = displace(pos.xyz, prev.xyz, getWorldMarkerSize(pos.xyz));
            vec4 displacedPosScreen = projectAndScale(pos);`:y`
            vec4 posScreen = projectAndScale(pos);
            vec4 prevScreen = projectAndScale(prev);
            vec4 displacedPosScreen = posScreen;

            displacedPosScreen.xy = displace(posScreen.xy, prevScreen.xy, screenMarkerSize);
            ${v(O,y`
                vec2 displacementDirU = perpendicular(normalizedSegment(posScreen.xy, prevScreen.xy));

                // We need three points of the ribbon line in camera space to calculate the plane it lies in
                // Note that we approximate the third point, since we have no information about the join around prev
                vec3 lineRight = inverseProject(posScreen + lineWidth * vec4(displacementDirU.xy, 0.0, 0.0));
                vec3 lineLeft = pos.xyz + (pos.xyz - lineRight);

                pos = toFront(displacedPosScreen, lineLeft, lineRight, prev.xyz, lineWidth);
                displacedPosScreen = projectAndScale(pos);`)}`}
      // Convert back into NDC
      displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

      // Convert texture coordinate into [0,1]
      vUV = (uv0 + 1.0) / 2.0;
      ${v(!D,`vUV = noPerspectiveWrite(vUV, displacedPosScreen.w);`)}
      ${v(T,`vLineWidth = noPerspectiveWrite(lineWidth, displacedPosScreen.w);`)}

      vSize = screenMarkerSize;
      vColor = getColor();

      // Use camera space for slicing
      vpos = pos.xyz;

      gl_Position = displacedPosScreen;
    }`),A.include(d,x),S.include(f,x),A.include(h),A.uniforms.add(new l(`intrinsicColor`,({color:e})=>e),new _(`tex`,({markerTexture:e})=>e)).constants.add(`texelSize`,`float`,1/64).code.add(y`float markerAlpha(vec2 samplePos) {
samplePos += vec2(0.5, -0.5) * texelSize;
float sdf = texture(tex, samplePos).r;
float pixelDistance = sdf * vSize;
pixelDistance -= 0.5;
return clamp(0.5 - pixelDistance, 0.0, 1.0);
}`),T&&(S.include(t),A.constants.add(`relativeMarkerSize`,`float`,32/64).constants.add(`relativeTipLineWidth`,`float`,.25).code.add(y`
    float tipAlpha(vec2 samplePos) {
      // Convert coordinates s.t. they are in pixels and relative to the tip of an arrow marker
      samplePos -= vec2(0.5, 0.5 + 0.5 * relativeMarkerSize);
      samplePos *= vSize;

      float halfMarkerSize = 0.5 * relativeMarkerSize * vSize;
      float halfTipLineWidth = 0.5 * max(1.0, relativeTipLineWidth * noPerspectiveRead(vLineWidth));

      ${v(D,`halfTipLineWidth *= fwidth(samplePos.y);`)}

      float distance = max(abs(samplePos.x) - halfMarkerSize, abs(samplePos.y) - halfTipLineWidth);
      return clamp(0.5 - distance, 0.0, 1.0);
    }
  `)),S.include(m,x),S.include(t),A.main.add(y`
    discardBySlice(vpos);

    vec4 finalColor = intrinsicColor * vColor;

    // Cancel out perspective correct interpolation if in screen space or draped
    vec2 samplePos = ${v(!D,`noPerspectiveRead(vUV)`,`vUV`)};
    finalColor.a *= ${T?`max(markerAlpha(samplePos), tipAlpha(samplePos))`:`markerAlpha(samplePos)`};
    outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),S}var S=Object.freeze(Object.defineProperty({__proto__:null,build:x},Symbol.toStringTag,{value:`Module`}));export{x as n,S as t};