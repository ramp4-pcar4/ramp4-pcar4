import{t as e}from"./mat3f64-CHFEVEZ6.js";import{s as t}from"./vec3f64-AstwQ_2i.js";import{n,t as r}from"./glsl-BlSepfbN.js";import{t as i}from"./Uniform-DlntK5q6.js";import{t as a}from"./Float2BindUniform-Bo0vFAII.js";import{t as o}from"./FloatBindUniform-CQkkuCDc.js";import{t as s}from"./NoParameters-CkJgCJZ9.js";function c(e){e.varyings.add(`linearDepth`,`float`,{invariant:!0})}function l(e,t){t&&c(e),e.vertex.code.add(n`
    void forwardLinearDepth(float _linearDepth) { ${r(t,`linearDepth = _linearDepth;`)} }
  `)}function u({code:e,uniforms:t},r){t.add(new o(`dpDummy`,()=>1)),e.add(n`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 hiD = hiA + hiB;
vec3 loD = loA + loB;
return  dpDummy * hiD + loD;
}`)}var d=class extends i{constructor(e,t,n){super(e,`mat3`,2,(r,i,a)=>r.setUniformMatrix3fv(e,t(i,a),n))}},f=class extends s{constructor(){super(...arguments),this.transformWorldFromViewTH=t(),this.transformWorldFromViewTL=t(),this.transformViewFromCameraRelativeRS=e()}},p=class extends s{constructor(){super(...arguments),this.transformWorldFromModelRS=e(),this.transformWorldFromModelTH=t(),this.transformWorldFromModelTL=t()}};function m(e){e.vertex.uniforms.add(new a(`nearFar`,e=>e.camera.nearFar))}function h(e){e.vertex.code.add(n`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function g(e){h(e),e.vertex.code.add(n`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(n`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}export{d as a,f as i,m as n,u as o,p as r,l as s,g as t};