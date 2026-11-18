import{i as e}from"./vec2f64-U48vS7hy.js";import{n as t}from"./glsl-BlSepfbN.js";import{t as n}from"./Texture2DDrawUniform-BpnKBSX5.js";import{t as r}from"./ShaderBuilder-CAOj4ema.js";import{t as i}from"./NoParameters-CkJgCJZ9.js";import{t as a}from"./HighlightCellGridScreenSpacePass.glsl-D6U5_D3g.js";import{t as o}from"./Float2DrawUniform-DUy8ontx.js";var s=class extends i{constructor(){super(...arguments),this.blurSize=e()}};function c(){let e=new r;return e.include(a),e.outputs.add(`fragHighlight`,`vec2`,0),e.fragment.uniforms.add(new o(`blurSize`,e=>e.blurSize),new n(`blurInput`,e=>e.blurInput)).main.add(t`vec2 highlightTextureSize = vec2(textureSize(blurInput,0));
vec2 center = texture(blurInput, sUV).rg;
if (vOutlinePossible == 0.0) {
fragHighlight = center;
} else {
vec2 sum = center * 0.204164;
sum += texture(blurInput, sUV + blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, sUV - blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, sUV + blurSize * 3.294215).rg * 0.093913;
sum += texture(blurInput, sUV - blurSize * 3.294215).rg * 0.093913;
fragHighlight = sum;
}`),e}var l=Object.freeze(Object.defineProperty({__proto__:null,HighlightBlurDrawParameters:s,build:c},Symbol.toStringTag,{value:`Module`}));export{c as n,s as r,l as t};