import{Ji as e,Lf as t}from"./store-5v4E3u6t.js";import{g as n}from"./SceneLighting-BG1CT_Zr.js";import{f as r,u as i}from"./oitResolution.glsl-BFyFSgo3.js";import{s as a}from"./HighlightDownsample.glsl-CXMPip1Y.js";var o=class extends i{constructor(e,t){super(e,`ivec2`,1,(n,r,i)=>n.setUniform2iv(e,t(r,i)))}};function s(e){let{vertex:i}=e;i.uniforms.add(new a(`coverageTexture`,e=>e.coverageTexture),new o(`highlightRenderCellCount`,e=>t(c,e.horizontalCellCount,e.verticalCellCount)),new o(`highlightTextureResolution`,({highlightTexture:e})=>t(c,e.descriptor.width,e.descriptor.height)),new n(`highlightLevel`,e=>e.highlightLevel)).constants.add(`cellSize`,`int`,32),e.varyings.add(`sUV`,`vec2`),e.varyings.add(`vOutlinePossible`,`float`),i.code.add(r`const ivec2 cellVertices[4] = ivec2[4](ivec2(0,0), ivec2(1,0), ivec2(0,1), ivec2(1,1));`),i.main.add(r`int cellIndex = gl_InstanceID;
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
gl_Position = vec4(2.0 * vPos - vec2(1.0), 0.0, 1.0);`)}var c=e();export{s as t};