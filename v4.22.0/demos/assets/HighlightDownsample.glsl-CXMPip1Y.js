import{h as e}from"./SceneLighting-BG1CT_Zr.js";import{f as t,u as n}from"./oitResolution.glsl-BFyFSgo3.js";import{t as r}from"./NoParameters-ZDc3QXO4.js";import{t as i}from"./ShaderBuilder-B5bKgQt6.js";var a=class extends n{constructor(e,t){super(e,`usampler2D`,1,(n,r,i)=>n.bindTexture(e,t(r,i)))}},o=class extends r{};function s(){let n=new i,{outputs:r,fragment:o}=n;return n.include(e),o.uniforms.add(new a(`highlightTexture`,e=>e.highlightTexture)),o.constants.add(`outlineWidth`,`int`,9),o.constants.add(`cellSize`,`int`,32),r.add(`fragGrid`,`uvec2`),o.main.add(t`ivec2 inputTextureSize = textureSize(highlightTexture, 0);
ivec2 cellBottomLeftCornerInput = ivec2(ivec2(floor(gl_FragCoord.xy) * vec2(cellSize)));
ivec2 coordMid =  cellBottomLeftCornerInput + ivec2(cellSize >> 1);
uvec2 centreTexel = texelFetch(highlightTexture, coordMid, 0).rg & uvec2(0x55u);
float marginSquare = float(outlineWidth*outlineWidth);
uvec2 outputValue = centreTexel & uvec2(0x55u);
for(int y = -outlineWidth; y <= cellSize + outlineWidth; y+=2) {
int dy = y < 0 ? -y : y > cellSize ? y-cellSize : 0;
int xMargin = dy > 0 ? int(ceil(sqrt(marginSquare - float(dy*dy)))) : outlineWidth;
for(int x = -xMargin; x <= cellSize + xMargin; x+=2) {
ivec2 coord = cellBottomLeftCornerInput + ivec2(x, y);
uvec2[4] texels = uvec2[4] (
texelFetch(highlightTexture,coord+ivec2(0,0),0).rg & uvec2(0x55u),
texelFetch(highlightTexture,coord+ivec2(1,0),0).rg & uvec2(0x55u),
texelFetch(highlightTexture,coord+ivec2(0,1),0).rg & uvec2(0x55u),
texelFetch(highlightTexture,coord+ivec2(1,1),0).rg & uvec2(0x55u)
);
if (texels[0] == texels[1] && texels[1] == texels[2] && texels[2] == texels[3] && texels[3] ==  centreTexel) {
continue;
}
for (int i=0; i<4; ++i){
outputValue |= ((texels[i] ^ centreTexel) << 1);
outputValue |= texels[i];
}
}
}
fragGrid = outputValue;`),n}var c=32,l=9,u=.4,d=Object.freeze(Object.defineProperty({__proto__:null,HighlightDownsampleDrawParameters:o,blurSize:u,build:s,gridCellPixelSize:32,outlineSize:9},Symbol.toStringTag,{value:`Module`}));export{u as a,o as i,s as n,c as o,l as r,a as s,d as t};