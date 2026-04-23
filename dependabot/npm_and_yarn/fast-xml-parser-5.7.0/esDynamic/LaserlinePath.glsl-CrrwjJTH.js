import{y as e}from"./vec2-BNGcJ5FZ.js";import{t}from"./mat4f64-B3SVWMa-.js";import{x as n}from"./mat4-C2gx1S7R.js";import{i as r}from"./vec2f64-D8dbcrKD.js";import{n as i,t as a}from"./glsl-EDZkDhgF.js";import{t as o}from"./FloatPassUniform-gHcGW-mi.js";import{t as s}from"./ShaderBuilder-aUMFb5cS.js";import{t as c}from"./Float2BindUniform-DpaMSVXH.js";import{t as l}from"./Laserline.glsl-DJ6uX_Kq.js";import{t as u}from"./FloatBindUniform-avAg5yxD.js";import{t as d}from"./Matrix4BindUniform-gJm9vWnt.js";import{t as f}from"./Matrix4PassUniform-Cye5MaJy.js";function p(t){let r=new s;r.include(l,t);let{vertex:p,fragment:g}=r;p.uniforms.add(new f(`modelView`,(e,{camera:t})=>n(h,t.viewMatrix,e.origin)),new d(`proj`,({camera:e})=>e.projectionMatrix),new o(`glowWidth`,(e,{camera:t})=>e.glowWidth*t.pixelRatio),new c(`pixelToNDC`,({camera:t})=>e(m,2/t.fullViewport[2],2/t.fullViewport[3]))),r.attributes.add(`start`,`vec3`),r.attributes.add(`end`,`vec3`),t.spherical&&(r.attributes.add(`startUp`,`vec3`),r.attributes.add(`endUp`,`vec3`)),r.attributes.add(`extrude`,`vec2`),r.varyings.add(`uv`,`vec2`),r.varyings.add(`vViewStart`,`vec3`),r.varyings.add(`vViewEnd`,`vec3`),r.varyings.add(`vViewSegmentNormal`,`vec3`),r.varyings.add(`vViewStartNormal`,`vec3`),r.varyings.add(`vViewEndNormal`,`vec3`);let _=!t.spherical;return p.main.add(i`
    vec3 pos = mix(start, end, extrude.x);

    vec4 viewPos = modelView * vec4(pos, 1);
    vec4 projPos = proj * viewPos;
    vec2 ndcPos = projPos.xy / projPos.w;

    // in planar we hardcode the up vectors to be Z-up */
    ${a(_,i`vec3 startUp = vec3(0, 0, 1);`)}
    ${a(_,i`vec3 endUp = vec3(0, 0, 1);`)}

    // up vector corresponding to the location of the vertex, selecting either startUp or endUp */
    vec3 up = extrude.y * mix(startUp, endUp, extrude.x);
    vec3 viewUp = (modelView * vec4(up, 0)).xyz;

    vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
    vec2 projUp = normalize(projPosUp.xy / projPosUp.w - ndcPos);

    // extrude ndcPos along projUp to the edge of the screen
    vec2 lxy = abs(sign(projUp) - ndcPos);
    ndcPos += length(lxy) * projUp;

    vViewStart = (modelView * vec4(start, 1)).xyz;
    vViewEnd = (modelView * vec4(end, 1)).xyz;

    vec3 viewStartEndDir = vViewEnd - vViewStart;

    vec3 viewStartUp = (modelView * vec4(startUp, 0)).xyz;

    // the normal of the plane that aligns with the segment and the up vector
    vViewSegmentNormal = normalize(cross(viewStartUp, viewStartEndDir));

    // the normal orthogonal to the segment normal and the start up vector
    vViewStartNormal = -normalize(cross(vViewSegmentNormal, viewStartUp));

    // the normal orthogonal to the segment normal and the end up vector
    vec3 viewEndUp = (modelView * vec4(endUp, 0)).xyz;
    vViewEndNormal = normalize(cross(vViewSegmentNormal, viewEndUp));

    // Add enough padding in the X screen space direction for "glow"
    float xPaddingPixels = sign(dot(vViewSegmentNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
    ndcPos.x += xPaddingPixels * pixelToNDC.x;

    // uv is used to read back depth to reconstruct the position at the fragment
    uv = ndcPos * 0.5 + 0.5;

    gl_Position = vec4(ndcPos, 0, 1);
  `),g.uniforms.add(new u(`perScreenPixelRatio`,e=>e.camera.perScreenPixelRatio)),g.code.add(i`float planeDistance(vec3 planeNormal, vec3 planeOrigin, vec3 pos) {
return dot(planeNormal, pos - planeOrigin);
}
float segmentDistancePixels(vec3 segmentNormal, vec3 startNormal, vec3 endNormal, vec3 pos, vec3 start, vec3 end) {
float distSegmentPlane = planeDistance(segmentNormal, start, pos);
float distStartPlane = planeDistance(startNormal, start, pos);
float distEndPlane = planeDistance(endNormal, end, pos);
float dist = max(max(distStartPlane, distEndPlane), abs(distSegmentPlane));
float width = fwidth(distSegmentPlane);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}`),g.main.add(i`fragColor = vec4(0.0);
vec3 dEndStart = vViewEnd - vViewStart;
if (dot(dEndStart, dEndStart) < 1e-5) {
return;
}
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
return;
}
float distance = segmentDistancePixels(
vViewSegmentNormal,
vViewStartNormal,
vViewEndNormal,
pos,
vViewStart,
vViewEnd
);
vec4 color = laserlineProfile(distance);
float alpha = (1.0 - smoothstep(0.995 - angleCutoffAdjust, 0.999 - angleCutoffAdjust, abs(dot(normal, vViewSegmentNormal))));
fragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);`),r}var m=r(),h=t(),g=Object.freeze(Object.defineProperty({__proto__:null,build:p},Symbol.toStringTag,{value:`Module`}));export{p as n,g as t};