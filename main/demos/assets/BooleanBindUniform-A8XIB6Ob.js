import{Fi as e,Ji as t,Lf as n,Si as r,a_ as i,k_ as a}from"./store-5v4E3u6t.js";import{l as o}from"./screenUtils-CFOhT9Tk.js";import{C as s,Et as c,L as l,T as u}from"./TriangleTechniqueConfiguration-COBrPyyo.js";import{a as d,d as f,f as p}from"./SceneLighting-BG1CT_Zr.js";import{f as m,u as h}from"./oitResolution.glsl-BFyFSgo3.js";import{t as g}from"./NoParameters-ZDc3QXO4.js";function _(e){e.uniforms.add(new s(`zProjectionMap`,e=>v(e.camera))),e.code.add(m`float linearizeDepth(float depth, vec2 zProjectionConstants) {
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
}`)}function v(e){let t=e.projectionMatrix;return n(y,t[14],t[10])}var y=t();function b(e){e.fragment.uniforms.add(new d(`projInfo`,e=>x(e.camera))),e.fragment.uniforms.add(new s(`zScale`,e=>C(e.camera))),e.fragment.code.add(m`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function x(t){let n=t.projectionMatrix;return n[11]===0?e(S,2/(t.fullWidth*n[0]),2/(t.fullHeight*n[5]),(1+n[12])/n[0],(1+n[13])/n[5]):e(S,-2/(t.fullWidth*n[0]),-2/(t.fullHeight*n[5]),(1-n[8])/n[0],(1-n[9])/n[5])}var S=r();function C(e){return e.projectionMatrix[11]===0?n(w,0,1):n(w,1,0)}var w=t(),T=class extends h{constructor(e,t,n){super(e,`mat4`,1,(r,i,a)=>r.setUniformMatrix4fv(e,t(i,a),n))}},E=class{constructor(e){this.screenLength=o(e.screenLength),this.minWorldLength=e.minWorldLength??0,this.maxWorldLength=e.maxWorldLength??1/0}};function D(e,t){let n=e.vertex;t.hasVerticalOffset?(k(n),t.hasScreenSizePerspective&&(e.include(p),f(n),u(e.vertex,t)),n.code.add(m`
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
    `)):n.code.add(m`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}var O=r();function k(t){t.uniforms.add(new l(`verticalOffset`,(t,n)=>{let{minWorldLength:r,maxWorldLength:i,screenLength:a}=t.verticalOffset,o=Math.tan(.5*n.camera.fovY)/(.5*n.camera.fullViewport[3]);return e(O,a*(n.camera.pixelRatio||1),o,r,i)}))}var A=class extends c{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this.updateTexture(e.textureId),this._acquire(e.normalTextureId,e=>this._textureNormal=e),this._acquire(e.emissiveTextureId,e=>this._textureEmissive=e),this._acquire(e.occlusionTextureId,e=>this._textureOcclusion=e),this._acquire(e.metallicRoughnessTextureId,e=>this._textureMetallicRoughness=e)}dispose(){super.dispose(),this._texture=a(this._texture),this._textureNormal=a(this._textureNormal),this._textureEmissive=a(this._textureEmissive),this._textureOcclusion=a(this._textureOcclusion),this._textureMetallicRoughness=a(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?2:1}get textureBindParameters(){return new M(this._texture?.texture??null,this._textureNormal?.texture??null,this._textureEmissive?.texture??null,this._textureOcclusion?.texture??null,this._textureMetallicRoughness?.texture??null)}updateTexture(e){this._texture!=null&&e===this._texture.id||(this._texture=a(this._texture),this._acquire(e,e=>this._texture=e))}_acquire(e,t){if(e==null)return void t(null);let n=this._textures.acquire(e);if(i(n))return++this._numLoading,void n.then(e=>{if(this._disposed)return a(e),void t(null);t(e)}).finally(()=>--this._numLoading);t(n)}},j=class extends g{constructor(e=null){super(),this.textureEmissive=e}},M=class extends j{constructor(e,t,n,r,i,a,o){super(n),this.texture=e,this.textureNormal=t,this.textureOcclusion=r,this.textureMetallicRoughness=i,this.scale=a,this.normalTextureTransformMatrix=o}},N=class extends h{constructor(e,t){super(e,`bool`,0,(n,r)=>n.setUniform1b(e,t(r)))}};export{k as a,b as c,E as i,_ as l,M as n,D as o,A as r,T as s,N as t,v as u};