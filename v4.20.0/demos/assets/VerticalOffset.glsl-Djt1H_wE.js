import{f as e}from"./screenUtils-CP6dF01I.js";import{l as t}from"./vec4-DVPrE3BA.js";import{i as n}from"./vec4f64-C5KC4udO.js";import{n as r}from"./glsl-BlSepfbN.js";import{t as i}from"./Float4PassUniform-CGmatYpU.js";import{n as a,t as o}from"./ScreenSizePerspective.glsl-DiQVIky4.js";import{t as s}from"./View.glsl-CC1Nd4YT.js";var c=class{constructor(t){this.screenLength=e(t.screenLength),this.minWorldLength=t.minWorldLength??0,this.maxWorldLength=t.maxWorldLength??1/0}};function l(e,t){let n=e.vertex;t.hasVerticalOffset?(d(n),t.hasScreenSizePerspective&&(e.include(a),o(n),s(e.vertex,t)),n.code.add(r`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?r`vec3 worldNormal = normalize(worldPos + localOrigin);`:r`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?r`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:r`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):n.code.add(r`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}var u=n();function d(e){e.uniforms.add(new i(`verticalOffset`,(e,n)=>{let{minWorldLength:r,maxWorldLength:i,screenLength:a}=e.verticalOffset,o=Math.tan(.5*n.camera.fovY)/(.5*n.camera.fullViewport[3]);return t(u,a*(n.camera.pixelRatio||1),o,r,i)}))}export{d as n,l as r,c as t};