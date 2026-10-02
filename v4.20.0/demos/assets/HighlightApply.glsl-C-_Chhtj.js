import{n as e}from"./glsl-BlSepfbN.js";import{t}from"./FloatPassUniform-BPzXeigN.js";import{t as n}from"./Texture2DPassUniform-Mr-K9FL9.js";import{t as r}from"./ShaderBuilder-CAOj4ema.js";import{t as i}from"./HighlightCellGridScreenSpacePass.glsl-D6U5_D3g.js";import{t as a}from"./IntegerPassUniform-D5qRqlks.js";import{a as o,s}from"./HighlightDownsample.glsl-DFw1b59H.js";import{t as c}from"./HighlightReadBitmap.glsl-Btyr7FKi.js";import{t as l}from"./Float2DrawUniform-DUy8ontx.js";function u(){let u=new r;u.include(i);let{fragment:d}=u;return d.uniforms.add(new n(`blurInput`,e=>e.highlightBlurTexture),new l(`blurSize`,e=>e.blurSize),new s(`highlightTexture`,e=>e.highlightTexture),new n(`highlightOptionsTexture`,e=>e.highlightOptionsTexture),new a(`highlightLevel`,e=>e.highlightLevel),new t(`occludedIntensityFactor`,e=>e.occludedFactor)),d.constants.add(`inner`,`float`,1-(9-o)/9),u.include(c),d.main.add(e`vec2 highlightTextureSize = vec2(textureSize(highlightTexture,0));
vec2 uv = sUV;
vec2 center = texture(blurInput, uv).rg;
vec2 blurredHighlightValue = (vOutlinePossible == 0.0)
? center
: center * 0.204164
+ texture(blurInput, uv + blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv - blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv + blurSize * 3.294215).rg * 0.093913
+ texture(blurInput, uv - blurSize * 3.294215).rg * 0.093913;
float highlightIntensity = blurredHighlightValue.r;
float occlusionWeight = blurredHighlightValue.g;
if (highlightIntensity <= 0.01) {
discard;
}
vec4 fillColor    = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 0), 0);
vec4 outlineColor = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 1), 0);
uvec2 centerTexel = texelFetch(highlightTexture, ivec2(uv * highlightTextureSize), 0).rg;
uint centerBits = readLevelBits(centerTexel, highlightLevel);
bool centerFilled = (centerBits & 1u) == 1u;
bool centerOccluded = (centerBits & 3u) == 3u;
bool occluded = centerOccluded || (0.5 * highlightIntensity < occlusionWeight);
float occlusionFactor = occluded ? occludedIntensityFactor : 1.0;
float outlineFactor = centerFilled ? 1.0 : smoothstep(0.0, inner, highlightIntensity);
float fillFactor = centerFilled ? 1.0 : 0.0;
vec4 baseColor = mix(outlineColor, fillColor, fillFactor);
float intensity = baseColor.a * occlusionFactor * outlineFactor;
fragColor = vec4(baseColor.rgb, intensity);`),u}var d=Object.freeze(Object.defineProperty({__proto__:null,build:u},Symbol.toStringTag,{value:`Module`}));export{u as n,d as t};