import{Ff as e,Pi as t,e_ as n,qi as r,w_ as i,xi as a}from"./store-DBhOFu5Q.js";import{l as o}from"./screenUtils-kKMOzYCy.js";import{C as s,Et as c,L as l,T as u}from"./TriangleTechniqueConfiguration-BK6ZVheo.js";import{a as d,d as f,f as p}from"./SceneLighting-BWYgFevV.js";import{f as m,u as h}from"./oitResolution.glsl-CgUKd2RD.js";import{t as g}from"./NoParameters-ZDc3QXO4.js";function _(e){e.uniforms.add(new s(`zProjectionMap`,e=>v(e.camera))),e.code.add(m`float linearizeDepth(float depth, vec2 zProjectionConstants) {
float depthNdc = depth * 2.0 - 1.0;
return -(zProjectionConstants[0] / (depthNdc + zProjectionConstants[1] + 1e-7));
}
float linearizeDepth(float depth) {
return linearizeDepth(depth, zProjectionMap);
}`),e.code.add(m`float delinearizeDepth(float linearDepth) {
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
float depthNdc = (-c1/linearDepth) - c2 - 1e-7;
float depthNonlinear01 = (depthNdc + 1.0 ) / 2.0;
return depthNonlinear01;
}`),e.code.add(m`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
return texelFetch(depthTexture, iuv, 0).r;
}`),e.code.add(m`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function v(t){let n=t.projectionMatrix;return e(y,n[14],n[10])}var y=r();function b(e){e.fragment.uniforms.add(new d(`projInfo`,e=>x(e.camera))),e.fragment.uniforms.add(new s(`zScale`,e=>C(e.camera))),e.fragment.code.add(m`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function x(e){let n=e.projectionMatrix;return n[11]===0?t(S,2/(e.fullWidth*n[0]),2/(e.fullHeight*n[5]),(1+n[12])/n[0],(1+n[13])/n[5]):t(S,-2/(e.fullWidth*n[0]),-2/(e.fullHeight*n[5]),(1-n[8])/n[0],(1-n[9])/n[5])}var S=a();function C(t){return t.projectionMatrix[11]===0?e(w,0,1):e(w,1,0)}var w=r(),T=class extends h{constructor(e,t,n){super(e,`mat4`,1,(r,i,a)=>r.setUniformMatrix4fv(e,t(i,a),n))}},E=class{constructor(e){this.screenLength=o(e.screenLength),this.minWorldLength=e.minWorldLength??0,this.maxWorldLength=e.maxWorldLength??1/0}};function D(e,t){let n=e.vertex;t.hasVerticalOffset?(k(n),t.hasScreenSizePerspective&&(e.include(p),f(n),u(e.vertex,t)),n.code.add(m`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?m`vec3 worldNormal = normalize(worldPos + localOrigin);`:m`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?m`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:m`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):n.code.add(m`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}var O=a();function k(e){e.uniforms.add(new l(`verticalOffset`,(e,n)=>{let{minWorldLength:r,maxWorldLength:i,screenLength:a}=e.verticalOffset,o=Math.tan(.5*n.camera.fovY)/(.5*n.camera.fullViewport[3]),s=n.camera.pixelRatio||1;return t(O,a*s,o,r,i)}))}var A=class extends c{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this.updateTexture(e.textureId),this._acquire(e.normalTextureId,e=>this._textureNormal=e),this._acquire(e.emissiveTextureId,e=>this._textureEmissive=e),this._acquire(e.occlusionTextureId,e=>this._textureOcclusion=e),this._acquire(e.metallicRoughnessTextureId,e=>this._textureMetallicRoughness=e)}dispose(){super.dispose(),this._texture=i(this._texture),this._textureNormal=i(this._textureNormal),this._textureEmissive=i(this._textureEmissive),this._textureOcclusion=i(this._textureOcclusion),this._textureMetallicRoughness=i(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?2:1}get textureBindParameters(){return new M(this._texture?.texture??null,this._textureNormal?.texture??null,this._textureEmissive?.texture??null,this._textureOcclusion?.texture??null,this._textureMetallicRoughness?.texture??null)}updateTexture(e){this._texture!=null&&e===this._texture.id||(this._texture=i(this._texture),this._acquire(e,e=>this._texture=e))}_acquire(e,t){if(e==null)return void t(null);let r=this._textures.acquire(e);if(n(r))return++this._numLoading,void r.then(e=>{if(this._disposed)return i(e),void t(null);t(e)}).finally(()=>--this._numLoading);t(r)}},j=class extends g{constructor(e=null){super(),this.textureEmissive=e}},M=class extends j{constructor(e,t,n,r,i,a,o){super(n),this.texture=e,this.textureNormal=t,this.textureOcclusion=r,this.textureMetallicRoughness=i,this.scale=a,this.normalTextureTransformMatrix=o}},N=class extends h{constructor(e,t){super(e,`bool`,0,(n,r)=>n.setUniform1b(e,t(r)))}};export{k as a,b as c,E as i,_ as l,M as n,D as o,A as r,T as s,N as t,v as u};