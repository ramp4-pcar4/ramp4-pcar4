import{n as e,t}from"./glsl-BlSepfbN.js";import{t as n}from"./FloatPassUniform-BPzXeigN.js";import{t as r}from"./Texture2DPassUniform-Mr-K9FL9.js";import{t as i}from"./ShaderBuilder-CAOj4ema.js";import{t as a}from"./Float2BindUniform-Bo0vFAII.js";import{t as o}from"./ReadDepth.glsl-DfCiJhmY.js";import{t as s}from"./ScreenSpacePass.glsl-8Q4IdFeF.js";import{t as c}from"./NoParameters-CkJgCJZ9.js";function l(t){t.code.add(e`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 floatToRgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),t.code.add(e`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaToFloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`)}var u=class extends c{constructor(){super(...arguments),this.opacity=1}};function d(c){let u=new i,{blendEmissive:d,blitMode:f,hasOpacityFactor:p}=c;u.include(s),u.fragment.uniforms.add(new r(`tex`,e=>e.texture)),p&&u.fragment.uniforms.add(new n(`opacity`,e=>e.opacity));let m=f===3;return m&&(u.fragment.uniforms.add(new a(`nearFar`,e=>e.camera.nearFar)),u.fragment.include(o),u.fragment.include(l)),d&&(u.outputs.add(`fragColor`,`vec4`,0),u.outputs.add(`fragEmission`,`vec4`,1)),u.fragment.main.add(e`
    ${m?e`
          float normalizedLinearDepth = (-linearDepthFromTexture(tex, uv) - nearFar[0]) / (nearFar[1] - nearFar[0]);
          fragColor = floatToRgba(normalizedLinearDepth);`:e`
          fragColor = texture(tex, uv) ${p?`* opacity`:``};`}
    ${t(d,`fragEmission = vec4(0.0, 0.0, 0.0, fragColor.a);`)}`),u}var f=Object.freeze(Object.defineProperty({__proto__:null,CompositingPassParameters:u,build:d},Symbol.toStringTag,{value:`Module`}));export{d as n,u as r,f as t};