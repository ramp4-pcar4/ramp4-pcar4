import{Ko as e,Ma as t,Nu as n,Sa as r,Uu as i,ba as a,gy as o,ia as s,m_ as c,wg as l,zu as u}from"./store-TEwW3sPL.js";import{o as d}from"./Emissions.glsl-DOGoT6RN.js";import{n as f}from"./glsl-D85RBwKC.js";import{t as p}from"./Uniform-FnPH-ujw.js";import{t as m}from"./Texture2DBindUniform-4_yYNByJ.js";import{t as h}from"./NoParameters-ZDc3QXO4.js";import{t as g}from"./HighlightReadBitmap.glsl-gSqhLTwZ.js";var _=class{constructor(e){this._bits=[...e]}equals(e){return o(this._bits,e.bits)}get code(){return this._code??=String.fromCharCode(...this._bits),this._code}get bits(){return this._bits}},v=class extends h{constructor(){super(),this._parameterBits=this._parameterBits?.map(()=>0)??[],this._parameterNames??=[]}get key(){return this._key??=new _(this._parameterBits),this._key}decode(e=this.key){let t=this._parameterBits;this._parameterBits=[...e.bits];let n=this._parameterNames.map(e=>`    ${e}: ${this[e]}`).join(`
`);return this._parameterBits=t,n}};function y(e={}){return(t,n)=>{t.hasOwnProperty(`_parameterNames`)||Object.defineProperty(t,"_parameterNames",{value:t._parameterNames?.slice()??[],configurable:!0,writable:!0}),t.hasOwnProperty(`_parameterBits`)||Object.defineProperty(t,"_parameterBits",{value:t._parameterBits?.slice()??[0],configurable:!0,writable:!0}),t._parameterNames.push(n);let r=e.count||2,i=Math.ceil(Math.log2(r)),a=t._parameterBits,o=0;for(;a[o]+i>16;)o++,o>=a.length&&a.push(0);let s=a[o],l=(1<<i)-1<<s;a[o]+=i,e.count?Object.defineProperty(t,n,{get(){return(this._parameterBits[o]&l)>>s},set(t){let r=this._parameterBits[o];if((r&l)>>s!==t){if(this._key=null,this._parameterBits[o]=r&~l|+t<<s&l,typeof t!=`number`)throw new c(`internal:invalid-shader-configuration`,`Configuration value for ${n} must be a number, got ${typeof t}`);if(e.count==null)throw new c(`internal:invalid-shader-configuration`,`Configuration value for ${n} must provide a count option`)}}}):Object.defineProperty(t,n,{get(){return!!((this._parameterBits[o]&l)>>s)},set(e){let t=this._parameterBits[o];if(!!((t&l)>>s)!==e&&(this._key=null,this._parameterBits[o]=t&~l|+e<<s,typeof e!=`boolean`))throw new c(`internal:invalid-shader-configurationx`,`Configuration value for ${n} must be boolean, got ${typeof e}`)}})}}var b=class extends v{constructor(){super(...arguments),this.output=0,this.hasEmission=!1}};l([y({count:10})],b.prototype,`output`,void 0),l([y()],b.prototype,`hasEmission`,void 0);var x=class extends b{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}},S=class extends x{constructor(){super(...arguments),this.hasSlicePlane=!1,this.hasSliceTranslatedView=!1}};l([y()],S.prototype,`hasSlicePlane`,void 0);function C(e,t){D(e,t,new d(`slicePlaneOrigin`,(e,n)=>j(t,e,n)),new d(`slicePlaneBasis1`,(e,n)=>M(t,e,n,n.slicePlane?.basis1)),new d(`slicePlaneBasis2`,(e,n)=>M(t,e,n,n.slicePlane?.basis2)))}function w(e,t){E(e,t,new d(`slicePlaneOrigin`,(e,n)=>j(t,e,n)),new d(`slicePlaneBasis1`,(e,n)=>M(t,e,n,n.slicePlane?.basis1)),new d(`slicePlaneBasis2`,(e,n)=>M(t,e,n,n.slicePlane?.basis2)))}var T=f`struct SliceFactors {
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
  `):e.code.add(f`void discardBySlice(vec3 pos) { }
vec4 applySlice(vec4 color, vec3 pos) { return color; }`)}function O(e,n,r){return e.instancedDoublePrecision?t(N,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):n.slicePlaneLocalOrigin}function k(e,t){return e==null?t.origin:r(P,t.origin,e)}function A(t,n,r){return t.hasSliceTranslatedView?n==null?r.camera.viewMatrix:e(I,r.camera.viewMatrix,n):null}function j(e,t,n){if(n.slicePlane==null)return u;let r=O(e,t,n),i=k(r,n.slicePlane),a=A(e,r,n);return a==null?i:s(P,i,a)}function M(e,t,n,i){if(i==null||n.slicePlane==null)return u;let o=O(e,t,n),c=k(o,n.slicePlane),l=A(e,o,n);return l==null?i:(a(F,i,c),s(P,c,l),s(F,F,l),r(F,F,P))}var N=i(),P=i(),F=i(),I=n();function L(e){e.code.add(f`vec4 premultiplyAlpha(vec4 v) {
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
}`)}var R=class extends p{constructor(e,t){super(e,`ivec2`,0,(n,r)=>n.setUniform2iv(e,t(r)))}},z=class extends p{constructor(e,t){super(e,`int`,0,(n,r)=>n.setUniform1i(e,t(r)))}},B=class extends p{constructor(e,t){super(e,`usampler2D`,0,(n,r)=>n.bindTexture(e,t(r)))}};function V(e,t){let{fragment:n}=e,{output:r,draped:i,hasHighlightMixTexture:a}=t;r===8?(n.uniforms.add(new z(`highlightLevel`,e=>e.highlightLevel??0),new R(`highlightMixOrigin`,e=>e.highlightMixOrigin)),e.outputs.add(`fragHighlight`,`uvec2`,0),e.include(g),a?n.uniforms.add(new B(`highlightMixTexture`,e=>e.highlightMixTexture)).code.add(f`uvec2 getAccumulatedHighlight() {
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
}`):n.code.add(f`void outputHighlight(bool occluded) {
uint bits = occluded ? 3u : 1u;
fragHighlight = uvec2(bits, 0);
}`),i?n.code.add(f`bool isHighlightOccluded() {
return false;
}`):n.uniforms.add(new m(`depthTexture`,e=>e.mainDepth)).code.add(f`bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}`),n.code.add(f`void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`)):n.code.add(f`void calculateOcclusionAndOutputHighlight() {}`)}var H=1/255.5;export{C as a,v as c,L as i,y as l,V as n,S as o,z as r,w as s,H as t};