import{y as e}from"./vec2-BNGcJ5FZ.js";import{i as t}from"./vec2f64-D8dbcrKD.js";import{n}from"./glsl-EDZkDhgF.js";import{t as r}from"./Uniform-Dp2mgLmf.js";import{t as i}from"./IntegerPassUniform-EGe6J__S.js";import{s as a}from"./HighlightDownsample.glsl-SwhlLHGA.js";var o=class extends r{constructor(e,t){super(e,`ivec2`,1,(n,r,i)=>n.setUniform2iv(e,t(r,i)))}};function s(t){let{vertex:r}=t;r.uniforms.add(new a(`coverageTexture`,e=>e.coverageTexture),new o(`highlightRenderCellCount`,t=>e(c,t.horizontalCellCount,t.verticalCellCount)),new o(`highlightTextureResolution`,({highlightTexture:t})=>e(c,t.descriptor.width,t.descriptor.height)),new i(`highlightLevel`,e=>e.highlightLevel)).constants.add(`cellSize`,`int`,32),t.varyings.add(`sUV`,`vec2`),t.varyings.add(`vOutlinePossible`,`float`),r.code.add(n`const ivec2 cellVertices[4] = ivec2[4](ivec2(0,0), ivec2(1,0), ivec2(0,1), ivec2(1,1));`),r.main.add(n`int cellIndex = gl_InstanceID;
int cellX = cellIndex % highlightRenderCellCount[0];
int cellY = (cellIndex - cellX) / highlightRenderCellCount[0];
ivec2 cellPos = ivec2(cellX, cellY);
uvec2 covTexel = texelFetch(coverageTexture, cellPos, 0).rg;
int channelIndex = (highlightLevel >> 2) & 3;
uint channelValue = covTexel[channelIndex];
int highlightIndex = (highlightLevel & 3) << 1;
bool covered = ((channelValue >> highlightIndex) & 1u) == 1u;
if (!covered) {
gl_Position = vec4(0.0);
return;
}
vOutlinePossible = (((channelValue >> highlightIndex) & 2u) == 2u) ? 1.0 : 0.0;
ivec2 iPosInCell = cellVertices[gl_VertexID];
vec2 sPos = vec2(cellPos * cellSize + iPosInCell * (cellSize));
vec2 vPos = sPos / vec2(highlightTextureResolution);
sUV = vPos;
gl_Position = vec4(2.0 * vPos - vec2(1.0), 0.0, 1.0);`)}var c=t();export{s as t};