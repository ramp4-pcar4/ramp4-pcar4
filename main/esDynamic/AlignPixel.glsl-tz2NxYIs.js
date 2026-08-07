import{D as e,E as t,O as n,T as r,j as i}from"./TriangleTechniqueConfiguration-B0Mc-FdP.js";import{a,d as o,f as s}from"./SceneLighting-CPjMLrqt.js";import{f as c,l}from"./oitResolution.glsl-GKlYUQFU.js";import{a as u,t as d}from"./BooleanBindUniform-B-zeuGnC.js";var f=.5;function p(d,f){let p=d.vertex;d.include(s),d.attributes.add(`position`,`vec3`),d.vertex.inputs.add(`position`,()=>`position`),d.attributes.add(`normal`,`vec3`),f.hasVertexCenterOffset?d.attributes.add(`centerOffset`,`vec3`):p.constants.add(`centerOffset`,`vec3`,[0,0,0]),d.attributes.add(`groundDistance`,`float`),t(p,f),r(p,f),p.uniforms.add(new a(`viewport`,e=>e.camera.fullViewport),new l(`polygonOffset`,e=>e.shaderPolygonOffset),new i(`aboveGround`,e=>e.camera.aboveGround?1:-1)),f.hasVerticalOffset&&u(p),p.code.add(c`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),p.code.add(c`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = aboveGround;
}
float groundRelative = aboveGround * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`),f.draped&&!f.hasVerticalOffset||e(p),f.draped||(p.uniforms.add(new i(`perDistancePixelRatio`,e=>Math.tan(e.camera.fovY/2)/(e.camera.fullViewport[2]/2))),p.code.add(c`
      void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
        float distanceToCamera = length(posView);

        // Compute offset in world units for a half pixel shift
        float pixelOffset = distanceToCamera * perDistancePixelRatio * ${c.float(.5)};

        // Apply offset along normal in the direction away from the ground surface
        vec3 modelOffset = normalModel * aboveGround * pixelOffset;

        // Apply the same offset also on the view space position
        vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

        posModel += modelOffset;
        posView += viewOffset;
      }
    `)),f.screenCenterOffsetUnitsEnabled&&n(p),f.hasScreenSizePerspective&&o(p),p.code.add(c`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      float pointGroundDistance = groundDistance;
      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${f.draped?``:`applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);`}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${f.hasScreenSizePerspective&&(f.hasVerticalOffset||f.screenCenterOffsetUnitsEnabled)?`vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);`:``}

      ${f.hasVerticalOffset?f.hasScreenSizePerspective?`float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);`:`float verticalOffsetScreenHeight = verticalOffset.x;`:``}

      ${f.hasVerticalOffset?c`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:``}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${f.screenCenterOffsetUnitsEnabled?``:c`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${f.screenCenterOffsetUnitsEnabled?f.hasScreenSizePerspective?`float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);`:`float centerOffsetY = centerOffset.y;`:``}

      ${f.screenCenterOffsetUnitsEnabled?`posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;`:``}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}function m(e){e.uniforms.add(new d(`alignPixelEnabled`,e=>e.alignPixelEnabled)),e.code.add(c`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),e.code.add(c`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}export{p as n,f as r,m as t};