import{P as e}from"./typedArrayUtil-DxTGOhzQ.js";import{t}from"./Error-B5zVEp1V.js";import{r as n}from"./tslib.es6-CQRs8sXx.js";import{r,s as i}from"./vec3f64-AstwQ_2i.js";import{t as a}from"./mat4f64-CR6tgU3J.js";import{x as o}from"./mat4-CL8gCWta.js";import{j as s,r as c,x as l,y as u}from"./vec3-wFzKlETV.js";import{n as d}from"./glsl-BlSepfbN.js";import{t as f}from"./Uniform-DlntK5q6.js";import{t as p}from"./Float3DrawUniform-azfqxqjE.js";import{t as m}from"./Texture2DBindUniform-y3Uo3EMP.js";import{t as h}from"./NoParameters-CkJgCJZ9.js";import{t as g}from"./HighlightReadBitmap.glsl-Btyr7FKi.js";var _=class{constructor(e){this._bits=[...e]}equals(t){return e(this._bits,t.bits)}get code(){return this._code??=String.fromCharCode(...this._bits),this._code}get bits(){return this._bits}},v=class extends h{constructor(){super(),this._parameterBits=this._parameterBits?.map(()=>0)??[],this._parameterNames??=[]}get key(){return this._key??=new _(this._parameterBits),this._key}decode(e=this.key){let t=this._parameterBits;this._parameterBits=[...e.bits];let n=this._parameterNames.map(e=>`    ${e}: ${this[e]}`).join(`
`);return this._parameterBits=t,n}};function y(e={}){return(n,r)=>{n.hasOwnProperty(`_parameterNames`)||Object.defineProperty(n,`_parameterNames`,{value:n._parameterNames?.slice()??[],configurable:!0,writable:!0}),n.hasOwnProperty(`_parameterBits`)||Object.defineProperty(n,`_parameterBits`,{value:n._parameterBits?.slice()??[0],configurable:!0,writable:!0}),n._parameterNames.push(r);let i=e.count||2,a=Math.ceil(Math.log2(i)),o=n._parameterBits,s=0;for(;o[s]+a>16;)s++,s>=o.length&&o.push(0);let c=o[s],l=(1<<a)-1<<c;o[s]+=a,e.count?Object.defineProperty(n,r,{get(){return(this._parameterBits[s]&l)>>c},set(n){let i=this._parameterBits[s];if((i&l)>>c!==n){if(this._key=null,this._parameterBits[s]=i&~l|+n<<c&l,typeof n!=`number`)throw new t(`internal:invalid-shader-configuration`,`Configuration value for ${r} must be a number, got ${typeof n}`);if(e.count==null)throw new t(`internal:invalid-shader-configuration`,`Configuration value for ${r} must provide a count option`)}}}):Object.defineProperty(n,r,{get(){return!!((this._parameterBits[s]&l)>>c)},set(e){let n=this._parameterBits[s];if(!!((n&l)>>c)!==e&&(this._key=null,this._parameterBits[s]=n&~l|+e<<c,typeof e!=`boolean`))throw new t(`internal:invalid-shader-configurationx`,`Configuration value for ${r} must be boolean, got ${typeof e}`)}})}}var b=class extends v{constructor(){super(...arguments),this.output=0,this.hasEmission=!1}};n([y({count:10})],b.prototype,`output`,void 0),n([y()],b.prototype,`hasEmission`,void 0);var x=class extends b{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}},S=class extends x{constructor(){super(...arguments),this.hasSlicePlane=!1,this.hasSliceTranslatedView=!1}};n([y()],S.prototype,`hasSlicePlane`,void 0);function C(e,t){D(e,t,new p(`slicePlaneOrigin`,(e,n)=>j(t,e,n)),new p(`slicePlaneBasis1`,(e,n)=>M(t,e,n,n.slicePlane?.basis1)),new p(`slicePlaneBasis2`,(e,n)=>M(t,e,n,n.slicePlane?.basis2)))}function w(e,t){E(e,t,new p(`slicePlaneOrigin`,(e,n)=>j(t,e,n)),new p(`slicePlaneBasis1`,(e,n)=>M(t,e,n,n.slicePlane?.basis1)),new p(`slicePlaneBasis2`,(e,n)=>M(t,e,n,n.slicePlane?.basis2)))}var T=d`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool rejectBySlice(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}`;function E(e,t,...n){t.hasSlicePlane?(e.uniforms.add(...n),e.code.add(T)):e.code.add(`bool rejectBySlice(vec3 pos) { return false; }`)}function D(e,t,...n){e.constants.add(`groundSliceOpacity`,`float`,.2),E(e,t,...n),t.hasSlicePlane?e.code.add(`
    void discardBySlice(vec3 pos) {
      if (rejectBySlice(pos)) {
        discard;
      }
    }

    vec4 applySliceOutline(vec4 color, vec3 pos) {
      SliceFactors factors = calculateSliceFactors(pos);

      factors.front /= 2.0 * fwidth(factors.front);
      factors.side0 /= 2.0 * fwidth(factors.side0);
      factors.side1 /= 2.0 * fwidth(factors.side1);
      factors.side2 /= 2.0 * fwidth(factors.side2);
      factors.side3 /= 2.0 * fwidth(factors.side3);

      // return after calling fwidth, to avoid aliasing caused by discontinuities in the input to fwidth
      if (sliceByFactors(factors)) {
        return color;
      }

      float outlineFactor = (1.0 - step(0.5, factors.front))
        * (1.0 - step(0.5, factors.side0))
        * (1.0 - step(0.5, factors.side1))
        * (1.0 - step(0.5, factors.side2))
        * (1.0 - step(0.5, factors.side3));

      return mix(color, vec4(vec3(0.0), color.a), outlineFactor * 0.3);
    }

    vec4 applySlice(vec4 color, vec3 pos) {
      return sliceEnabled() ? applySliceOutline(color, pos) : color;
    }
  `):e.code.add(d`void discardBySlice(vec3 pos) { }
vec4 applySlice(vec4 color, vec3 pos) { return color; }`)}function O(e,t,n){return e.instancedDoublePrecision?s(N,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function k(e,t){return e==null?t.origin:l(P,t.origin,e)}function A(e,t,n){return e.hasSliceTranslatedView?t==null?n.camera.viewMatrix:o(I,n.camera.viewMatrix,t):null}function j(e,t,n){if(n.slicePlane==null)return r;let i=O(e,t,n),a=k(i,n.slicePlane),o=A(e,i,n);return o==null?a:c(P,a,o)}function M(e,t,n,i){if(i==null||n.slicePlane==null)return r;let a=O(e,t,n),o=k(a,n.slicePlane),s=A(e,a,n);return s==null?i:(u(F,i,o),c(P,o,s),c(F,F,s),l(F,F,P))}var N=i(),P=i(),F=i(),I=a();function L(e){e.code.add(d`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}var R=class extends f{constructor(e,t){super(e,`ivec2`,0,(n,r)=>n.setUniform2iv(e,t(r)))}},z=class extends f{constructor(e,t){super(e,`int`,0,(n,r)=>n.setUniform1i(e,t(r)))}},B=class extends f{constructor(e,t){super(e,`usampler2D`,0,(n,r)=>n.bindTexture(e,t(r)))}};function V(e,t){let{fragment:n}=e,{output:r,draped:i,hasHighlightMixTexture:a}=t;r===8?(n.uniforms.add(new z(`highlightLevel`,e=>e.highlightLevel??0),new R(`highlightMixOrigin`,e=>e.highlightMixOrigin)),e.outputs.add(`fragHighlight`,`uvec2`,0),e.include(g),a?n.uniforms.add(new B(`highlightMixTexture`,e=>e.highlightMixTexture)).code.add(d`uvec2 getAccumulatedHighlight() {
return texelFetch(highlightMixTexture, ivec2(gl_FragCoord.xy) - highlightMixOrigin, 0).rg;
}
void outputHighlight(bool occluded) {
if (highlightLevel == 0) {
uint bits = occluded ? 3u : 1u;
fragHighlight = uvec2(bits, 0);
} else {
int ll = (highlightLevel & 3) << 1;
int li = (highlightLevel >> 2) & 3;
uint bits;
if (occluded) {
bits = 3u << ll;
} else {
bits = 1u << ll;
}
uvec2 combinedHighlight = getAccumulatedHighlight();
combinedHighlight[li] |= bits;
fragHighlight = combinedHighlight;
}
}`):n.code.add(d`void outputHighlight(bool occluded) {
uint bits = occluded ? 3u : 1u;
fragHighlight = uvec2(bits, 0);
}`),i?n.code.add(d`bool isHighlightOccluded() {
return false;
}`):n.uniforms.add(new m(`depthTexture`,e=>e.mainDepth)).code.add(d`bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}`),n.code.add(d`void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`)):n.code.add(d`void calculateOcclusionAndOutputHighlight() {}`)}var H=1/255.5;export{C as a,v as c,L as i,y as l,V as n,S as o,z as r,w as s,H as t};