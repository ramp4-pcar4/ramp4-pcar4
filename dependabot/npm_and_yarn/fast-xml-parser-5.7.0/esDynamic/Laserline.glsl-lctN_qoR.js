import{b as e}from"./mathUtils-DUZju9LU.js";import{y as t}from"./vec2-BNGcJ5FZ.js";import{s as n}from"./vec3f64-CG5ySZkG.js";import{O as r,_ as i,k as a,l as o,r as s,v as c,x as l,y as u}from"./vec3-D0JSMCWt.js";import{i as d}from"./vec2f64-D8dbcrKD.js";import{g as f}from"./vec4-DtLpLkJR.js";import{i as p}from"./vec4f64-DFGee9an.js";import{m,x as h}from"./plane-Bmb6IkzK.js";import{s as g}from"./lineSegment-7kalB-6z.js";import{n as _}from"./glsl-EDZkDhgF.js";import{t as v}from"./Float3PassUniform-BEhcqx4m.js";import{t as y}from"./FloatPassUniform-gHcGW-mi.js";import{t as b}from"./ShaderBuilder-aUMFb5cS.js";import{t as x}from"./Laserline.glsl-DJ6uX_Kq.js";import{t as S}from"./ScreenSpacePass.glsl-EDYRj6we.js";import{t as C}from"./Float2PassUniform-oNPLRE_S.js";import{t as w}from"./Float3BindUniform-Cmo9nXvW.js";import{t as T}from"./Float4PassUniform-R_rVPKlL.js";import{t as E}from"./FloatBindUniform-avAg5yxD.js";var D=e(6);function O(e){let t=new b;t.include(S),t.include(x,e);let n=t.fragment;if(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)if(n.uniforms.add(new y(`maxPixelDistance`,(t,n)=>e.heightManifoldEnabled?2*n.camera.computeScreenPixelSizeAt(t.heightManifoldTarget):2*n.camera.computeScreenPixelSizeAt(t.lineVerticalPlaneSegment.origin))),n.code.add(_`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.spherical){let e=(e,t,n)=>s(e,t.heightManifoldTarget,n.camera.viewMatrix),t=(e,t)=>s(e,[0,0,0],t.camera.viewMatrix);n.uniforms.add(new T(`heightManifoldOrigin`,(n,r)=>(e(I,n,r),t(z,r),l(z,z,I),i(L,z),L[3]=c(z),L)),new w(`globalOrigin`,e=>t(I,e)),new y(`cosSphericalAngleThreshold`,(e,t)=>1-Math.max(2,a(t.camera.eye,e.heightManifoldTarget)*t.camera.perRenderPixelRatio)/c(e.heightManifoldTarget))),n.code.add(_`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else n.code.add(_`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(e.pointDistanceEnabled&&(n.uniforms.add(new y(`maxPixelDistance`,(e,t)=>2*t.camera.computeScreenPixelSizeAt(e.pointDistanceTarget))),n.code.add(_`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),e.intersectsLineEnabled&&n.uniforms.add(new E(`perScreenPixelRatio`,e=>e.camera.perScreenPixelRatio)).code.add(_`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&n.code.add(_`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),n.main.add(_`vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
fragColor = vec4(0.0);
return;
}
vec4 color = vec4(0.0);`),e.heightManifoldEnabled){n.uniforms.add(new C(`angleCutoff`,e=>k(e)),new T(`heightPlane`,(e,t)=>P(e.heightManifoldTarget,e.renderCoordsHelper.worldUpAtPosition(e.heightManifoldTarget,I),t.camera.viewMatrix)));let t=e.spherical?_`normalize(globalOrigin - pos)`:_`heightPlane.xyz`;n.main.add(_`
      vec2 angleCutoffAdjusted = angleCutoff - angleCutoffAdjust;
      // Fade out laserlines on flat surfaces
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoffAdjusted.x, angleCutoffAdjusted.y, abs(dot(normal, ${t})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);`)}return e.pointDistanceEnabled&&(n.uniforms.add(new C(`angleCutoff`,e=>k(e)),new T(`pointDistanceSphere`,(e,t)=>A(e,t))),n.main.add(_`float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);`)),e.lineVerticalPlaneEnabled&&(n.uniforms.add(new C(`angleCutoff`,e=>k(e)),new T(`lineVerticalPlane`,(e,t)=>j(e,t)),new v(`lineVerticalStart`,(e,t)=>M(e,t)),new v(`lineVerticalEnd`,(e,t)=>N(e,t))),n.main.add(_`if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}`)),e.intersectsLineEnabled&&(n.uniforms.add(new C(`angleCutoff`,e=>k(e)),new v(`intersectsLineStart`,(e,t)=>s(I,e.lineStartWorld,t.camera.viewMatrix)),new v(`intersectsLineEnd`,(e,t)=>s(I,e.lineEndWorld,t.camera.viewMatrix)),new v(`intersectsLineDirection`,(e,t)=>(r(L,e.intersectsLineSegment.vector),L[3]=0,i(I,f(L,L,t.camera.viewMatrix)))),new y(`intersectsLineRadius`,e=>e.intersectsLineRadius)),n.main.add(_`if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}`)),n.main.add(_`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);`),t}function k(n){return t(F,Math.cos(n.angleCutoff),Math.cos(Math.max(0,n.angleCutoff-e(2))))}function A(e,t){return s(H,e.pointDistanceOrigin,t.camera.viewMatrix),H[3]=a(e.pointDistanceOrigin,e.pointDistanceTarget),H}function j(e,t){let n=g(e.lineVerticalPlaneSegment,.5,I),r=o(I,e.renderCoordsHelper.worldUpAtPosition(n,R),i(z,e.lineVerticalPlaneSegment.vector));return i(r,r),P(e.lineVerticalPlaneSegment.origin,r,t.camera.viewMatrix)}function M(e,t){let n=r(I,e.lineVerticalPlaneSegment.origin);return e.renderCoordsHelper.setAltitude(n,0),s(n,n,t.camera.viewMatrix)}function N(e,t){let n=u(I,e.lineVerticalPlaneSegment.origin,e.lineVerticalPlaneSegment.vector);return e.renderCoordsHelper.setAltitude(n,0),s(n,n,t.camera.viewMatrix)}function P(e,t,n){return s(B,e,n),r(L,t),L[3]=0,f(L,L,n),m(B,L,V)}var F=d(),I=n(),L=p(),R=n(),z=n(),B=n(),V=h(),H=p(),U=Object.freeze(Object.defineProperty({__proto__:null,build:O,defaultAngleCutoff:D},Symbol.toStringTag,{value:`Module`}));export{U as n,O as r,D as t};