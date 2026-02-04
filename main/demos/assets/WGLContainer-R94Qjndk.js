import{h$ as Ne,hZ as le,ia as at,ib as rt,ic as st,hS as lt,lq as ct,am as H,a$ as ge,n1 as ft,a9 as oe,kv as Fe,i as ve,eE as ut,i1 as ye,s as Be,hX as dt,aw as _t}from"./main-CtmwM019.js";import{$ as vt,d as xe,f as ht,g as Ue,s as z,t as mt,n as q,e as X,h as Ye}from"./Utils-DsYp0Wpl.js";import{e as pt,a as ee}from"./ProgramTemplate-CpLijHZI.js";import{_ as A,R as M}from"./enums-DQOO6RKE.js";import{h as $}from"./VertexArrayObject-BIicG6PV.js";import{n as gt}from"./VertexAttributeLocations-BfZbt_DV.js";import{t as te}from"./VertexElementDescriptor-BLyltQyJ.js";import{r as j}from"./VertexBuffer-D3Ex4_V0.js";import{n as ce}from"./mat2df32-Dpt2CT5P.js";import{e as k,l as yt,o as xt}from"./MapView-oIvbu8y0.js";import{r as St,e as Tt}from"./mat2d-Bgm8yl9G.js";import{o as It,N as bt}from"./vec32-gK3TWme0.js";import{n as Et}from"./vec3f32-WCVSSNPR.js";import{o as ne,f as Ot,g as At,h as Pt,i as Mt,Y as N,$ as Ge,Z as Se}from"./definitions-Bxxl7NsE.js";import{e as He,n as Ct}from"./Container-BQf77fCy.js";import{e as Lt}from"./TileKey-CCdPKQiK.js";import{n as zt}from"./memoryEstimations-R8dTJqWI.js";import{o as fe}from"./BufferObject-DG9EMnfd.js";import{h as Dt,A as Rt}from"./Texture-QG2FbAaW.js";import{n as Vt,r as wt}from"./vec2f32-CaVKkSa6.js";import{e as Te}from"./config-BOD8--da.js";import{e as Nt}from"./earcut-D9gy186-.js";import{n as Ie}from"./vec2f64-Cgb6qxNH.js";import{t as Ft,X as Bt}from"./featureConversionUtils-CQ7EbBKb.js";import{e as be}from"./OptimizedGeometry-CYLi7ZPm.js";function ke(){return new Float32Array(4)}function Ut(f){const e=new Float32Array(4);return e[0]=f[0],e[1]=f[1],e[2]=f[2],e[3]=f[3],e}function B(f,e,t,n){const i=new Float32Array(4);return i[0]=f,i[1]=e,i[2]=t,i[3]=n,i}function $e(){return ke()}function We(){return B(1,1,1,1)}function Ze(){return B(1,0,0,0)}function je(){return B(0,1,0,0)}function Ke(){return B(0,0,1,0)}function Xe(){return B(0,0,0,1)}const Yt=$e(),Gt=We(),Ht=Ze(),kt=je(),$t=Ke(),Wt=Xe();Object.freeze(Object.defineProperty({__proto__:null,ONES:Gt,UNIT_W:Wt,UNIT_X:Ht,UNIT_Y:kt,UNIT_Z:$t,ZEROS:Yt,clone:Ut,create:ke,fromValues:B,ones:We,unitW:Xe,unitX:Ze,unitY:je,unitZ:Ke,zeros:$e},Symbol.toStringTag,{value:"Module"}));let U=class{constructor(){this.name=this.constructor.name||"UnnamedBrush",this.brushEffect=null}prepareState(e,t){}draw(e,t,n){}drawMany(e,t,n){for(const i of t)i.visible&&this.draw(e,i,n)}};const Zt={background:{"background.frag":`uniform lowp vec4 u_color;
void main() {
gl_FragColor = u_color;
}`,"background.vert":`attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform mediump vec2 u_coord_range;
uniform mediump float u_depth;
void main() {
vec3 v_pos = u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0);
gl_Position = vec4(v_pos.xy, 0.0, 1.0);
}`},bitBlit:{"bitBlit.frag":`uniform lowp sampler2D u_tex;
uniform lowp float u_opacity;
varying mediump vec2 v_uv;
void main() {
lowp vec4 color = texture2D(u_tex, v_uv);
gl_FragColor = color * u_opacity;
}`,"bitBlit.vert":`attribute vec2 a_pos;
attribute vec2 a_tex;
varying mediump vec2 v_uv;
void main(void) {
gl_Position = vec4(a_pos , 0.0, 1.0);
v_uv = a_tex;
}`},debug:{overlay:{"overlay.frag":`precision mediump float;
varying vec4 v_color;
void main(void) {
gl_FragColor = v_color;
}`,"overlay.vert":`attribute vec3 a_PositionAndFlags;
uniform mat3 u_dvsMat3;
uniform vec4 u_colors[4];
uniform float u_opacities[4];
varying vec4 v_color;
void main(void) {
vec2 position = a_PositionAndFlags.xy;
float flags = a_PositionAndFlags.z;
int colorIndex = int(mod(flags, 4.0));
vec4 color;
for (int i = 0; i < 4; i++) {
color = u_colors[i];
if (i == colorIndex) {
break;
}
}
int opacityIndex = int(mod(floor(flags / 4.0), 4.0));
float opacity;
for (int i = 0; i < 4; i++) {
opacity = u_opacities[i];
if (i == opacityIndex) {
break;
}
}
v_color = color * opacity;
gl_Position = vec4((u_dvsMat3 * vec3(position, 1.0)).xy, 0.0, 1.0);
}`}},dot:{dot:{"dot.frag":`precision mediump float;
varying vec4 v_color;
varying float v_dotRatio;
varying float v_invEdgeRatio;
uniform highp float u_tileZoomFactor;
void main()
{
float dist = length(gl_PointCoord - vec2(.5, .5)) * 2.;
float alpha = smoothstep(0., 1., v_invEdgeRatio * (dist - v_dotRatio) + 1.);
gl_FragColor = v_color * alpha;
}`,"dot.vert":`precision highp float;
attribute vec2 a_pos;
uniform sampler2D u_texture;
uniform highp mat3 u_dvsMat3;
uniform highp float u_tileZoomFactor;
uniform highp float u_dotSize;
uniform highp float u_pixelRatio;
varying vec2 v_pos;
varying vec4 v_color;
varying float v_dotRatio;
varying float v_invEdgeRatio;
const float EPSILON = 0.000001;
void main()
{
mat3 tileToTileTexture = mat3(  1., 0., 0.,
0., -1., 0.,
0., 1., 1.  );
vec3 texCoords = tileToTileTexture * vec3(a_pos.xy / 512., 1.);
v_color = texture2D(u_texture, texCoords.xy);
float smoothEdgeWidth = max(u_dotSize / 2., 1.) ;
float z = 0.;
z += 2.0 * step(v_color.a, EPSILON);
gl_PointSize = (smoothEdgeWidth + u_dotSize);
gl_Position = vec4((u_dvsMat3 * vec3(a_pos + .5, 1.)).xy, z, 1.);
v_dotRatio = u_dotSize / gl_PointSize;
v_invEdgeRatio = -1. / ( smoothEdgeWidth / gl_PointSize );
gl_PointSize  *= (u_pixelRatio * u_tileZoomFactor);
}`}},filtering:{"bicubic.glsl":`vec4 computeWeights(float v) {
float b = 1.0 / 6.0;
float v2 = v * v;
float v3 = v2 * v;
float w0 = b * (-v3 + 3.0 * v2 - 3.0 * v + 1.0);
float w1 = b * (3.0 * v3  - 6.0 * v2 + 4.0);
float w2 = b * (-3.0 * v3 + 3.0 * v2 + 3.0 * v + 1.0);
float w3 = b * v3;
return vec4(w0, w1, w2, w3);
}
vec4 bicubicOffsetsAndWeights(float v) {
vec4 w = computeWeights(v);
float g0 = w.x + w.y;
float g1 = w.z + w.w;
float h0 = 1.0 - (w.y / g0) + v;
float h1 = 1.0 + (w.w / g1) - v;
return vec4(h0, h1, g0, g1);
}
vec4 sampleBicubicBSpline(sampler2D sampler, vec2 coords, vec2 texSize) {
vec2 eX = vec2(1.0 / texSize.x, 0.0);
vec2 eY = vec2(0.0, 1.0 / texSize.y);
vec2 texel = coords * texSize - 0.5;
vec3 hgX = bicubicOffsetsAndWeights(fract(texel).x).xyz;
vec3 hgY = bicubicOffsetsAndWeights(fract(texel).y).xyz;
vec2 coords10 = coords + hgX.x * eX;
vec2 coords00 = coords - hgX.y * eX;
vec2 coords11 = coords10 + hgY.x * eY;
vec2 coords01 = coords00 + hgY.x * eY;
coords10 = coords10 - hgY.y * eY;
coords00 = coords00 - hgY.y * eY;
vec4 color00 = texture2D(sampler, coords00);
vec4 color10 = texture2D(sampler, coords10);
vec4 color01 = texture2D(sampler, coords01);
vec4 color11 = texture2D(sampler, coords11);
color00 = mix(color00, color01, hgY.z);
color10 = mix(color10, color11, hgY.z);
color00 = mix(color00, color10, hgX.z);
return color00;
}`,"bilinear.glsl":`vec4 sampleBilinear(sampler2D sampler, vec2 coords, vec2 texSize) {
vec2 texelStart = floor(coords * texSize);
vec2 coord0 = texelStart / texSize;
vec2 coord1 = (texelStart +  vec2(1.0, 0.0)) / texSize;
vec2 coord2 = (texelStart +  vec2(0.0, 1.0)) / texSize;
vec2 coord3 = (texelStart +  vec2(1.0, 1.0)) / texSize;
vec4 color0 = texture2D(sampler, coord0);
vec4 color1 = texture2D(sampler, coord1);
vec4 color2 = texture2D(sampler, coord2);
vec4 color3 = texture2D(sampler, coord3);
vec2 blend = fract(coords * texSize);
vec4 color01 = mix(color0, color1, blend.x);
vec4 color23 = mix(color2, color3, blend.x);
vec4 color = mix(color01, color23, blend.y);
#ifdef NNEDGE
float alpha = floor(color0.a * color1.a * color2.a * color3.a + 0.5);
color = color * alpha + (1.0 - alpha) * texture2D(sampler, coords);
#endif
return color;
}`,"epx.glsl":`vec4 sampleEPX(sampler2D sampler, float size, vec2 coords, vec2 texSize) {
vec2 invSize = 1.0 / texSize;
vec2 texel = coords * texSize;
vec2 texel_i = floor(texel);
vec2 texel_frac = fract(texel);
vec4 colorP = texture2D(sampler, texel_i * invSize);
vec4 colorP1 = vec4(colorP);
vec4 colorP2 = vec4(colorP);
vec4 colorP3 = vec4(colorP);
vec4 colorP4 = vec4(colorP);
vec4 colorA = texture2D(sampler, (texel_i - vec2(0.0, 1.0)) * invSize);
vec4 colorB = texture2D(sampler, (texel_i + vec2(1.0, 0.0)) * invSize);
vec4 colorC = texture2D(sampler, (texel_i - vec2(1.0, 0.0)) * invSize);
vec4 colorD = texture2D(sampler, (texel_i + vec2(0.0, 1.0)) * invSize);
if (colorC == colorA && colorC != colorD && colorA != colorB) {
colorP1 = colorA;
}
if (colorA == colorB && colorA != colorC && colorB != colorD) {
colorP2 = colorB;
}
if (colorD == colorC && colorD != colorB && colorC != colorA) {
colorP3 = colorC;
}
if (colorB == colorD && colorB != colorA && colorD != colorC) {
colorP4 = colorD;
}
vec4 colorP12 = mix(colorP1, colorP2, texel_frac.x);
vec4 colorP34 = mix(colorP1, colorP2, texel_frac.x);
return mix(colorP12, colorP34, texel_frac.y);
}`},heatmap:{heatmapResolve:{"heatmapResolve.frag":`precision highp float;
#ifdef HEATMAP_PRECISION_HALF_FLOAT
#define COMPRESSION_FACTOR 4.0
#else
#define COMPRESSION_FACTOR 1.0
#endif
uniform sampler2D u_texture;
uniform sampler2D u_gradient;
uniform vec2 u_densityMinAndInvRange;
uniform float u_densityNormalization;
varying vec2 v_uv;
void main() {
vec4 data = texture2D(u_texture, v_uv);
float density = data.r * COMPRESSION_FACTOR;
density *= u_densityNormalization;
density = (density - u_densityMinAndInvRange.x) * u_densityMinAndInvRange.y;
vec4 color = texture2D(u_gradient, vec2(density, 0.5));
gl_FragColor = vec4(color.rgb * color.a, color.a);
}`,"heatmapResolve.vert":`precision highp float;
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
v_uv = a_pos;
gl_Position = vec4(a_pos * 2.0 - 1.0, 1., 1.);
}`}},highlight:{"blur.frag":`varying mediump vec2 v_texcoord;
uniform mediump vec4 u_direction;
uniform mediump mat4 u_channelSelector;
uniform mediump float u_sigma;
uniform sampler2D u_texture;
mediump float gauss1(mediump vec2 dir) {
return exp(-dot(dir, dir) / (2.0 * u_sigma * u_sigma));
}
mediump vec4 selectChannel(mediump vec4 sample) {
return u_channelSelector * sample;
}
void accumGauss1(mediump float i, inout mediump float tot, inout mediump float weight) {
mediump float w = gauss1(i * u_direction.xy);
tot += selectChannel(texture2D(u_texture, v_texcoord + i * u_direction.zw))[3] * w;
weight += w;
}
void main(void) {
mediump float tot = 0.0;
mediump float weight = 0.0;
accumGauss1(-5.0, tot, weight);
accumGauss1(-4.0, tot, weight);
accumGauss1(-3.0, tot, weight);
accumGauss1(-2.0, tot, weight);
accumGauss1(-1.0, tot, weight);
accumGauss1(0.0, tot, weight);
accumGauss1(1.0, tot, weight);
accumGauss1(2.0, tot, weight);
accumGauss1(3.0, tot, weight);
accumGauss1(4.0, tot, weight);
accumGauss1(5.0, tot, weight);
gl_FragColor = vec4(0.0, 0.0, 0.0, tot / weight);
}`,"highlight.frag":`varying mediump vec2 v_texcoord;
uniform sampler2D u_texture;
uniform mediump float u_sigma;
uniform sampler2D u_shade;
uniform mediump vec2 u_minMaxDistance;
mediump float estimateDistance() {
mediump float y = texture2D(u_texture, v_texcoord)[3];
const mediump float y0 = 0.5;
mediump float m0 = 1.0 / (sqrt(2.0 * 3.1415) * u_sigma);
mediump float d = (y - y0) / m0;
return d;
}
mediump vec4 shade(mediump float d) {
mediump float mappedDistance = (d - u_minMaxDistance.x) / (u_minMaxDistance.y - u_minMaxDistance.x);
mappedDistance = clamp(mappedDistance, 0.0, 1.0);
return texture2D(u_shade, vec2(mappedDistance, 0.5));
}
void main(void) {
mediump float d = estimateDistance();
gl_FragColor = shade(d);
}`,"textured.vert":`attribute mediump vec2 a_position;
attribute mediump vec2 a_texcoord;
varying mediump vec2 v_texcoord;
void main(void) {
gl_Position = vec4(a_position, 0.0, 1.0);
v_texcoord = a_texcoord;
}`},materials:{"attributeData.glsl":`uniform highp sampler2D filterFlags;
uniform highp sampler2D animation;
uniform highp sampler2D gpgpu;
uniform highp sampler2D visualVariableData;
uniform highp sampler2D dataDriven0;
uniform highp sampler2D dataDriven1;
uniform highp sampler2D dataDriven2;
uniform float size;
highp vec2 getAttributeDataCoords(in highp vec3 id) {
highp vec3  texel = unpackDisplayIdTexel(id);
highp float u32 = float(int(texel.r) + int(texel.g) * 256 + int(texel.b) * 256 * 256);
highp float col = mod(u32, size);
highp float row = (u32 - col) / size;
highp float u = col / size;
highp float v = row / size;
return vec2(u, v);
}
highp vec2 getAttributeDataTextureCoords(in highp vec3 id) {
return (getAttributeDataCoords(id) * 2.0) - 1.0 + (.5 / vec2(size));
}
highp vec4 getFilterData(in highp vec3 id) {
vec2 coords = getAttributeDataCoords(id);
return texture2D(filterFlags, coords);
}
highp vec4 getAnimation(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(animation, coords);
}
highp vec4 getVisualVariableData(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(visualVariableData, coords);
}
highp vec4 getDataDriven0(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(dataDriven0, coords);
}
highp vec4 getDataDriven1(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(dataDriven1, coords);
}
highp vec4 getGPGPU(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(gpgpu, coords);
}
highp vec4 getDataDriven2(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(dataDriven2, coords);
}
float u88VVToFloat(in vec2 v) {
bool isMagic = v.x == 255.0 && v.y == 255.0;
if (isMagic) {
return NAN_MAGIC_NUMBER;
}
return (v.x + v.y * float(0x100)) - 32768.0;
}`,"barycentric.glsl":`float inTriangle(vec3 bary) {
vec3 absBary = abs(bary);
return step((absBary.x + absBary.y + absBary.z), 1.05);
}
vec3 xyToBarycentric(in vec2 pos, in vec2 v0,  in vec2 v1, in vec2 v2) {
mat3 xyToBarycentricMat3 = mat3(
v1.x * v2.y - v2.x * v1.y, v2.x * v0.y - v0.x * v2.y, v0.x * v1.y - v1.x * v0.y,
v1.y - v2.y, v2.y - v0.y, v0.y - v1.y,
v2.x - v1.x, v0.x - v2.x, v1.x - v0.x
);
float A2 = v0.x * (v1.y - v2.y) + v1.x * (v2.y - v0.y) + v2.x * (v0.y - v1.y);
return (1. / A2) * xyToBarycentricMat3 * vec3(1., pos);
}`,"constants.glsl":`const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_RAD_TO_DEG = 180.0 / 3.141592654;
const float POSITION_PRECISION = 1.0 / 8.0;
const float FILL_POSITION_PRECISION = 1.0 / 1.0;
const float SOFT_EDGE_RATIO = 1.0;
const float THIN_LINE_WIDTH_FACTOR = 1.1;
const float THIN_LINE_HALF_WIDTH = 1.0;
const float EXTRUDE_SCALE_PLACEMENT_PADDING = 1.0 / 4.0;
const float OFFSET_PRECISION = 1.0 / 8.0;
const float OUTLINE_SCALE = 1.0 / 5.0;
const float SDF_FONT_SIZE = 24.0;
const float MAX_SDF_DISTANCE = 8.0;
const float PLACEMENT_PADDING = 8.0;
const float EPSILON = 0.00001;
const float EPSILON_HITTEST = 0.05;
const int MAX_FILTER_COUNT = 2;
const int ATTR_VV_SIZE = 0;
const int ATTR_VV_COLOR = 1;
const int ATTR_VV_OPACITY = 2;
const int ATTR_VV_ROTATION = 3;
const highp float NAN_MAGIC_NUMBER = 1e-30;
const int BITSET_GENERIC_LOCK_COLOR = 1;
const int BITSET_GENERIC_CONSIDER_ALPHA_ONLY = 4;
const int BITSET_MARKER_ALIGNMENT_MAP = 0;
const int BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE = 2;
const int BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY = 3;
const int BITSET_TYPE_FILL_OUTLINE = 0;
const int BITSET_FILL_RANDOM_PATTERN_OFFSET = 2;
const int BITSET_FILL_HAS_UNRESOLVED_REPLACEMENT_COLOR = 3;
const int BITSET_FILL_HAS_PATTERN_HEIGHT_PRECISION_FACTOR = 5;
const int BITSET_FILL_HAS_PATTERN_WIDTH_PRECISION_FACTOR = 6;
const int BITSET_LINE_SCALE_DASH = 2;`,fill:{"common.glsl":`#include <materials/symbologyTypeUtils.glsl>
#ifdef PATTERN
uniform mediump vec2 u_mosaicSize;
varying mediump float v_sampleAlphaOnly;
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
uniform lowp vec4 u_isActive[ 2 ];
uniform highp float u_dotValue;
uniform highp float u_tileDotsOverArea;
uniform highp float u_dotTextureDotCount;
uniform mediump float u_tileZoomFactor;
#endif
varying highp vec3 v_id;
varying lowp vec4 v_color;
varying lowp float v_opacity;
varying mediump vec4 v_aux1;
#ifdef PATTERN
varying mediump vec2 v_tileTextureCoord;
#endif
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
varying lowp float v_isOutline;
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
varying highp vec2 v_dotTextureCoords;
varying highp vec4 v_dotThresholds[ 2 ];
#endif`,"fill.frag":`precision highp float;
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/fill/common.glsl>
#ifdef PATTERN
uniform lowp sampler2D u_texture;
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
uniform mediump mat4 u_dotColors[ 2 ];
uniform sampler2D u_dotTextures[ 2 ];
uniform vec4 u_dotBackgroundColor;
#endif
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.frag>
lowp vec4 drawLine() {
float v_lineWidth = v_aux1.x;
vec2  v_normal    = v_aux1.yz;
LineData inputs = LineData(
v_color,
v_normal,
v_lineWidth,
v_opacity,
v_id
);
return shadeLine(inputs);
}
#endif
lowp vec4 drawFill() {
lowp vec4 out_color = vec4(0.);
#ifdef HITTEST
out_color = v_color;
#elif defined(PATTERN)
mediump vec4 v_tlbr = v_aux1;
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
if (v_sampleAlphaOnly > 0.5) {
color.rgb = vec3(color.a);
}
out_color = v_opacity * v_color * color;
#elif SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY && !defined(HIGHLIGHT)
vec4 textureThresholds0 = texture2D(u_dotTextures[0], v_dotTextureCoords);
vec4 textureThresholds1 = texture2D(u_dotTextures[1], v_dotTextureCoords);
vec4 difference0 = v_dotThresholds[0] - textureThresholds0;
vec4 difference1 = v_dotThresholds[1] - textureThresholds1;
#ifdef DD_DOT_BLENDING
vec4 isPositive0 = step(0.0, difference0);
vec4 isPositive1 = step(0.0, difference1);
float weightSum = dot(isPositive0, difference0) + dot(isPositive1, difference1);
float lessThanEqZero = step(weightSum, 0.0);
float greaterThanZero = 1.0 - lessThanEqZero ;
float divisor = (weightSum + lessThanEqZero);
vec4 weights0 = difference0 * isPositive0 / divisor;
vec4 weights1 = difference1 * isPositive1 / divisor;
vec4 dotColor = u_dotColors[0] * weights0 + u_dotColors[1] * weights1;
vec4 preEffectColor = greaterThanZero * dotColor + lessThanEqZero * u_dotBackgroundColor;
#else
float diffMax = max(max4(difference0), max4(difference1));
float lessThanZero = step(diffMax, 0.0);
float greaterOrEqZero = 1.0 - lessThanZero;
vec4 isMax0 = step(diffMax, difference0);
vec4 isMax1 = step(diffMax, difference1);
vec4 dotColor = u_dotColors[0] * isMax0 + u_dotColors[1] * isMax1;
vec4 preEffectColor = greaterOrEqZero * dotColor + lessThanZero * u_dotBackgroundColor;
#endif
out_color = preEffectColor;
#else
out_color = v_opacity * v_color;
#endif
#ifdef HIGHLIGHT
out_color.a = 1.0;
#endif
return out_color;
}
void main() {
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
if (v_isOutline > 0.5) {
gl_FragColor = drawLine();
} else {
gl_FragColor = drawFill();
}
#else
gl_FragColor = drawFill();
#endif
}`,"fill.vert":`#include <materials/symbologyTypeUtils.glsl>
#define PACKED_LINE
precision highp float;
attribute float a_bitset;
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
attribute float a_inverseArea;
vec4 a_color = vec4(0.0, 0.0, 0.0, 1.0);
vec2 a_zoomRange = vec2(0.0, 10000.0);
#else
attribute vec4 a_color;
attribute vec4 a_aux2;
attribute vec4 a_aux3;
#ifndef SYMBOLOGY_TYPE_IS_SIMPLE_LIKE
attribute vec4 a_aux1;
attribute vec2 a_zoomRange;
#else
vec2 a_zoomRange = vec2(0.0, 10000.0);
#endif
#endif
uniform vec2 u_tileOffset;
uniform vec2 u_maxIntNumOfCrossing;
#include <util/encoding.glsl>
#include <materials/vcommon.glsl>
#include <materials/fill/common.glsl>
#include <materials/fill/hittest.glsl>
const float INV_SCALE_COMPRESSION_FACTOR = 1.0 / 128.0;
const float MAX_REPRESENTABLE_INT = 16777216.0;
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
vec4 dotThreshold(vec4 featureAttrOverFeatureArea, float dotValue, float tileDotsOverArea) {
return featureAttrOverFeatureArea * (1.0 / dotValue)  * (1.0 / tileDotsOverArea);
}
#endif
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.vert>
void drawLine(out lowp vec4 out_color, out highp vec3 out_pos) {
LineData outputs = buildLine(
out_pos,
a_id,
a_pos,
a_color,
(a_aux3.xy - 128.) / 16.,
(a_aux3.zw - 128.) / 16.,
0.,
a_aux2.z / 16.,
a_bitset,
vec4(0.),
vec2(0.),
a_aux2.w / 16.
);
v_id      = outputs.id;
v_opacity = outputs.opacity;
v_aux1    = vec4(outputs.lineHalfWidth, outputs.normal, 0.);
out_color = outputs.color;
}
#endif
void drawFill(out lowp vec4 out_color, out highp vec3 out_pos) {
float a_bitSet = a_bitset;
out_color = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);
v_opacity = getOpacity();
v_id      = norm(a_id);
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
mat3 tileToTileNormalized = mat3(  2. / 512.,  0.,  0.,
0., -2. / 512.,  0.,
-1.,  1.,  1.  );
out_pos   = tileToTileNormalized * vec3((a_pos * FILL_POSITION_PRECISION), 1.);
#else
out_pos   = u_dvsMat3 * vec3(a_pos * FILL_POSITION_PRECISION, 1.);
#endif
#ifdef PATTERN
vec4  a_tlbr   = a_aux1;
float a_width  = a_aux2.x;
float a_height = a_aux2.y;
vec2  a_offset = a_aux2.zw;
vec2  a_scale  = a_aux3.xy;
float a_angle  = a_aux3.z;
if (getBit(a_bitset, BITSET_FILL_HAS_PATTERN_WIDTH_PRECISION_FACTOR) > 0.5) {
a_width *= INV_SCALE_COMPRESSION_FACTOR;
}
if (getBit(a_bitset, BITSET_FILL_HAS_PATTERN_HEIGHT_PRECISION_FACTOR) > 0.5) {
a_height *= INV_SCALE_COMPRESSION_FACTOR;
}
vec2 scale = INV_SCALE_COMPRESSION_FACTOR * a_scale;
float width = u_zoomFactor * a_width * scale.x;
float height = u_zoomFactor * a_height * scale.y;
float angle = C_256_TO_RAD * a_angle;
float sinA = sin(angle);
float cosA = cos(angle);
float dx = 0.0;
float dy = 0.0;
if (getBit(a_bitset, BITSET_FILL_RANDOM_PATTERN_OFFSET) > 0.5) {
float id = rgba2float(vec4(a_id, 0.0));
dx = rand(vec2(id, 0.0));
dy = rand(vec2(0.0, id));
}
mat3 patternMatrix = mat3(cosA / width, sinA / height, 0,
-sinA / width, cosA / height, 0,
dx,            dy,           1);
vec2 patternSize = vec2(a_width, a_height);
vec2 numPatternsPerMaxInt = vec2(MAX_REPRESENTABLE_INT) / patternSize;
vec2 maxIntCrossingOffsetCorrection = patternSize * fract(u_maxIntNumOfCrossing * numPatternsPerMaxInt);
vec2 tileOffset = u_tileOffset + maxIntCrossingOffsetCorrection - 0.5 * patternSize;
tileOffset = vec2(tileOffset.x * cosA - tileOffset.y * sinA, tileOffset.x * sinA + tileOffset.y * cosA);
tileOffset = mod(tileOffset, patternSize);
vec2 symbolOffset = u_zoomFactor * scale * vec2(a_offset - tileOffset) / vec2(width, height);
v_tileTextureCoord = (patternMatrix * vec3(a_pos * FILL_POSITION_PRECISION, 1.0)).xy - symbolOffset;
v_aux1 = a_tlbr / u_mosaicSize.xyxy;
v_sampleAlphaOnly = getBit(a_bitset, BITSET_GENERIC_CONSIDER_ALPHA_ONLY);
if (getBit(a_bitSet, BITSET_FILL_HAS_UNRESOLVED_REPLACEMENT_COLOR) > 0.5) {
#ifdef VV_COLOR
v_sampleAlphaOnly *= (1.0 - float(isNan(VV_ADATA[ATTR_VV_COLOR]))) * (1.0 - getBit(a_bitSet, BITSET_GENERIC_LOCK_COLOR));
#else
v_sampleAlphaOnly = 0.0;
#endif
}
#elif SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
vec4 ddAttributeData0 = getAttributeData2(a_id) * u_isActive[0] * a_inverseArea;
vec4 ddAttributeData1 = getAttributeData3(a_id) * u_isActive[1] * a_inverseArea;
float size = u_tileZoomFactor * 512.0 * 1.0 / u_pixelRatio;
v_dotThresholds[0] = dotThreshold(ddAttributeData0, u_dotValue, u_tileDotsOverArea);
v_dotThresholds[1] = dotThreshold(ddAttributeData1, u_dotValue, u_tileDotsOverArea);
v_dotTextureCoords = (a_pos * FILL_POSITION_PRECISION + 0.5) / size;
#endif
}
#ifdef HITTEST
void draw(out lowp vec4 out_color, out highp vec3 out_pos) {
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
if (getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE) > 0.5) {
out_pos = vec3(0., 0., 2.);
return;
}
#endif
hittestFill(out_color, out_pos);
gl_PointSize = 1.0;
}
#elif defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)
void draw(out lowp vec4 out_color, out highp vec3 out_pos) {
v_isOutline = getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE);
if (v_isOutline > 0.5) {
drawLine(out_color, out_pos);
} else {
drawFill(out_color, out_pos);
}
}
#else
#define draw drawFill
#endif
void main()
{
INIT;
highp vec3 pos  = vec3(0.);
highp vec4 color  = vec4(0.);
draw(color, pos);
v_color = color;
gl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);
}`,"hittest.glsl":`#ifdef HITTEST
#include <materials/hittest/common.glsl>
attribute vec2 a_pos1;
attribute vec2 a_pos2;
void hittestFill(
out lowp vec4 out_color,
out highp vec3 out_pos
) {
vec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * FILL_POSITION_PRECISION, 1.);
vec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * FILL_POSITION_PRECISION, 1.);
vec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * FILL_POSITION_PRECISION, 1.);
float hittestDist = u_hittestDist;
float dist = distPointTriangle(u_hittestPos, pos.xy, pos1.xy, pos2.xy);
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
if (dist < 0. || dist >= hittestDist) {
out_pos.z += 2.0;
}
out_color = vec4(1. / 255., 0, 0, dist == 0. ? (1. / 255.) : 0.);
}
#endif`},hittest:{"common.glsl":`#ifdef HITTEST
uniform float hittestDist;
uniform highp vec2 hittestPos;
float projectScalar(vec2 a, vec2 b) {
return dot(a, normalize(b));
}
float distPointSegment(vec2 p0, vec2 p1, vec2 p2) {
vec2 L = p2 - p1;
vec2 A = p0 - p1;
float projAL = projectScalar(A, L);
float t = clamp(projAL / length(L), 0., 1.);
return distance(p0, p1 + t * (p2 - p1));
}
void hittestMarker(out lowp vec4 out_color, out highp vec3 out_pos, in highp vec3 pos, float size) {
float dist = distance(pos, vec3(hittestPos, 1.));
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
if ((dist - size) > hittestDist) {
out_pos.z += 2.0;
}
out_color = vec4(1. / 255., 0, 0, (dist - size) < 0. ? (1. / 255.) : 0.);
}
float intersectPointTriangleBary(vec2 p, vec2 a, vec2 b, vec2 c) {
return inTriangle(xyToBarycentric(p, a, b, c));
}
float distPointTriangle(vec2 p, vec2 a, vec2 b, vec2 c) {
vec2 ba = b - a;
vec2 ca = c - a;
float crossProduct = ba.x * ca.y - ca.x * ba.y;
bool isParallel = crossProduct < EPSILON_HITTEST && crossProduct > -EPSILON_HITTEST;
if (isParallel) {
return -1.;
}
if (intersectPointTriangleBary(p.xy, a, b, c) == 1.) {
return 0.;
}
float distAB = distPointSegment(p, a, b);
float distBC = distPointSegment(p, b, c);
float distCA = distPointSegment(p, c, a);
return min(min(distAB, distBC), distCA);
}
#endif`},icon:{"common.glsl":`#include <util/encoding.glsl>
uniform lowp vec2 u_mosaicSize;
varying lowp vec4 v_color;
varying highp vec3 v_id;
varying highp vec4 v_sizeTex;
varying mediump vec3 v_pos;
varying lowp float v_opacity;
uniform lowp sampler2D u_texture;
#ifdef SDF
varying lowp vec4 v_outlineColor;
varying mediump float v_outlineWidth;
varying mediump float v_distRatio;
varying mediump float v_overridingOutlineColor;
varying mediump float v_isThin;
#endif
#ifdef SDF
vec4 getColor(vec2 v_size, vec2 v_tex) {
#ifdef HITTEST
lowp vec4 fillPixelColor = vec4(1.0);
#else
lowp vec4 fillPixelColor = v_color;
#endif
float d = 0.5 - rgba2float(texture2D(u_texture, v_tex));
float size = max(v_size.x, v_size.y);
float dist = d * size * SOFT_EDGE_RATIO * v_distRatio;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
float outlineWidth = v_outlineWidth;
#ifdef HIGHLIGHT
outlineWidth = max(outlineWidth, 4.0 * v_isThin);
#endif
if (outlineWidth > 0.25) {
lowp vec4 outlinePixelColor = v_overridingOutlineColor * v_color + (1.0 - v_overridingOutlineColor) * v_outlineColor;
float clampedOutlineSize = min(outlineWidth, size);
outlinePixelColor *= clamp(0.5 - abs(dist) + clampedOutlineSize * 0.5, 0.0, 1.0);
return v_opacity * ((1.0 - outlinePixelColor.a) * fillPixelColor + outlinePixelColor);
}
return v_opacity * fillPixelColor;
}
#else
vec4 getColor(vec2 _v_size, vec2 v_tex) {
lowp vec4 texColor = texture2D(u_texture, v_tex);
return v_opacity * texColor * v_color;
}
#endif`,heatmapAccumulate:{"common.glsl":`varying lowp vec4 v_hittestResult;
varying mediump vec2 v_offsetFromCenter;
varying highp float v_fieldValue;`,"heatmapAccumulate.frag":`precision mediump float;
#include <materials/icon/heatmapAccumulate/common.glsl>
#ifdef HEATMAP_PRECISION_HALF_FLOAT
#define COMPRESSION_FACTOR 0.25
#else
#define COMPRESSION_FACTOR 1.0
#endif
uniform lowp sampler2D u_texture;
void main() {
#ifdef HITTEST
gl_FragColor = v_hittestResult;
#else
float radius = length(v_offsetFromCenter);
float shapeWeight = step(radius, 1.0);
float oneMinusRadiusSquared = 1.0 - radius * radius;
float kernelWeight = oneMinusRadiusSquared * oneMinusRadiusSquared;
gl_FragColor = vec4(shapeWeight * kernelWeight * v_fieldValue * COMPRESSION_FACTOR);
#endif
}`,"heatmapAccumulate.vert":`precision highp float;
attribute vec2 a_vertexOffset;
vec4 a_color = vec4(0.0);
vec2 a_zoomRange = vec2(0.0, 10000.0);
uniform float u_radius;
uniform float u_isFieldActive;
#include <materials/vcommon.glsl>
#include <materials/hittest/common.glsl>
#include <materials/icon/heatmapAccumulate/common.glsl>
void main() {
float filterFlags = getFilterFlags();
#ifdef HITTEST
highp vec4 out_hittestResult = vec4(0.);
highp vec3 out_pos = vec3(0.);
vec3 pos = u_viewMat3 * u_tileMat3 * vec3(a_pos * POSITION_PRECISION, 1.0);
hittestMarker(out_hittestResult, out_pos, pos, u_radius);
v_hittestResult = out_hittestResult;
gl_PointSize = 1.;
gl_Position = vec4(clip(a_color, out_pos, filterFlags, a_zoomRange), 1.0);
#else
v_offsetFromCenter = sign(a_vertexOffset);
v_fieldValue = getAttributeData2(a_id).x * u_isFieldActive + 1.0 - u_isFieldActive;
vec3 centerPos = u_dvsMat3 * vec3(a_pos * POSITION_PRECISION, 1.0);
vec3 vertexPos = centerPos + u_displayViewMat3 * vec3(v_offsetFromCenter, 0.0) * u_radius;
gl_Position = vec4(clip(a_color, vertexPos, filterFlags, a_zoomRange), 1.0);
#endif
}`},"hittest.glsl":`#ifdef HITTEST
#include <materials/hittest/common.glsl>
attribute vec2 a_vertexOffset1;
attribute vec2 a_vertexOffset2;
attribute vec2 a_texCoords1;
attribute vec2 a_texCoords2;
vec2 getTextureCoords(in vec3 bary, in vec2 texCoords0, in vec2 texCoords1, in vec2 texCoords2) {
return texCoords0 * bary.x + texCoords1 * bary.y + texCoords2 * bary.z;
}
void hittestIcon(
inout lowp vec4 out_color,
out highp vec3 out_pos,
in vec3 pos,
in vec3 offset,
in vec2 size,
in float scaleFactor,
in float isMapAligned
) {
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
vec3 posBase = u_viewMat3 * u_tileMat3  * pos;
vec3 offset1 = scaleFactor * vec3(a_vertexOffset1 / 16.0, 0.);
vec3 offset2 = scaleFactor * vec3(a_vertexOffset2 / 16.0, 0.);
vec2 pos0    = (posBase + getMatrixNoDisplay(isMapAligned) * offset).xy;
vec2 pos1    = (posBase + getMatrixNoDisplay(isMapAligned) * offset1).xy;
vec2 pos2    = (posBase + getMatrixNoDisplay(isMapAligned) * offset2).xy;
vec3 bary0 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, -u_hittestDist), pos0, pos1, pos2);
vec3 bary1 = xyToBarycentric(u_hittestPos + vec2(0., -u_hittestDist), pos0, pos1, pos2);
vec3 bary2 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, -u_hittestDist), pos0, pos1, pos2);
vec3 bary3 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, 0.), pos0, pos1, pos2);
vec3 bary4 = xyToBarycentric(u_hittestPos, pos0, pos1, pos2);
vec3 bary5 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, 0.), pos0, pos1, pos2);
vec3 bary6 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, u_hittestDist), pos0, pos1, pos2);
vec3 bary7 = xyToBarycentric(u_hittestPos + vec2(0., u_hittestDist), pos0, pos1, pos2);
vec3 bary8 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, u_hittestDist), pos0, pos1, pos2);
vec2 tex0 = a_texCoords  / u_mosaicSize;
vec2 tex1 = a_texCoords1 / u_mosaicSize;
vec2 tex2 = a_texCoords2 / u_mosaicSize;
float alphaSum = 0.;
alphaSum += inTriangle(bary0) * getColor(size, getTextureCoords(bary0, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary1) * getColor(size, getTextureCoords(bary1, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary2) * getColor(size, getTextureCoords(bary2, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary3) * getColor(size, getTextureCoords(bary3, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary4) * getColor(size, getTextureCoords(bary4, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary5) * getColor(size, getTextureCoords(bary5, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary6) * getColor(size, getTextureCoords(bary6, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary7) * getColor(size, getTextureCoords(bary7, tex0, tex1, tex2)).a;
out_pos.z += step(alphaSum, .05) * 2.0;
out_color = vec4(1. / 255., 0., 0., alphaSum / 255.);
}
#endif`,"icon.frag":`precision mediump float;
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/icon/common.glsl>
void main()
{
#ifdef HITTEST
vec4 color = v_color;
#else
vec4 color = getColor(v_sizeTex.xy, v_sizeTex.zw);
#endif
#ifdef HIGHLIGHT
color.a = step(1.0 / 255.0, color.a);
#endif
gl_FragColor = color;
}`,"icon.vert":`precision highp float;
attribute vec4 a_color;
attribute vec4 a_outlineColor;
attribute vec4 a_sizeAndOutlineWidth;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
attribute vec2 a_bitSetAndDistRatio;
attribute vec2 a_zoomRange;
#include <materials/vcommon.glsl>
#include <materials/icon/common.glsl>
#include <materials/icon/hittest.glsl>
float getMarkerScaleFactor(inout vec2 size, in float referenceSize) {
#ifdef VV_SIZE
float f = getSize(size.y) / size.y;
float sizeFactor = size.y / referenceSize;
return getSize(referenceSize) / referenceSize;
#else
return 1.;
#endif
}
void main()
{
INIT;
float a_bitSet = a_bitSetAndDistRatio.x;
vec3  pos           = vec3(a_pos * POSITION_PRECISION, 1.0);
vec2  size          = a_sizeAndOutlineWidth.xy * a_sizeAndOutlineWidth.xy / 128.0;
vec3  offset        = vec3(a_vertexOffset / 16.0, 0.);
float outlineSize   = a_sizeAndOutlineWidth.z * a_sizeAndOutlineWidth.z / 128.0;
float isMapAligned  = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);
float referenceSize = a_sizeAndOutlineWidth.w * a_sizeAndOutlineWidth.w / 128.0;
float scaleSymbolProportionally = getBit(a_bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);
float scaleFactor               = getMarkerScaleFactor(size, referenceSize);
size.xy     *= scaleFactor;
offset.xy   *= scaleFactor;
outlineSize *= scaleSymbolProportionally * (scaleFactor - 1.0) + 1.0;
vec2 v_tex   = a_texCoords / u_mosaicSize;
float filterFlags = getFilterFlags();
v_color    = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);
v_opacity  = getOpacity();
v_id       = norm(a_id);
v_pos      = u_dvsMat3 * pos + getMatrix(isMapAligned) * getRotation()  * offset;
v_sizeTex  = vec4(size.xy, v_tex.xy);
#ifdef SDF
v_isThin   = getBit(a_bitSet, BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE);
#ifdef VV_COLOR
v_overridingOutlineColor = v_isThin;
#else
v_overridingOutlineColor = 0.0;
#endif
v_outlineWidth = min(outlineSize, max(max(size.x, size.y) - 0.99, 0.0));
v_outlineColor = a_outlineColor;
v_distRatio = a_bitSetAndDistRatio.y / 128.0;
#endif
#ifdef HITTEST
highp vec4 out_color = vec4(0.);
highp vec3 out_pos   = vec3(0.);
hittestIcon(out_color, out_pos, pos, offset, size, scaleFactor, isMapAligned);
v_color = out_color;
gl_PointSize = 1.;
gl_Position = vec4(clip(v_color, out_pos, filterFlags, a_zoomRange), 1.0);
#else
gl_Position = vec4(clip(v_color, v_pos, filterFlags, a_zoomRange), 1.0);
#endif
}`},label:{"common.glsl":`uniform mediump float u_zoomLevel;
uniform mediump float u_mapRotation;
uniform mediump float u_mapAligned;
uniform mediump vec2 u_mosaicSize;
varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;
varying mediump vec2 v_tex;
varying mediump vec4 v_color;
varying lowp vec4 v_animation;`,"label.frag":"#include <materials/text/text.frag>","label.vert":`precision highp float;
#include <materials/vcommon.glsl>
#include <materials/text/common.glsl>
attribute vec4 a_color;
attribute vec4 a_haloColor;
attribute vec4 a_texAndSize;
attribute vec4 a_refSymbolAndPlacementOffset;
attribute vec4 a_glyphData;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
uniform float u_isHaloPass;
uniform float u_isBackgroundPass;
uniform float u_mapRotation;
uniform float u_mapAligned;
float getZ(in float minZoom, in float maxZoom, in float angle) {
float glyphAngle = angle * 360.0 / 254.0;
float mapAngle = u_mapRotation * 360.0 / 254.0;
float diffAngle = min(360.0 - abs(mapAngle - glyphAngle), abs(mapAngle - glyphAngle));
float z = 0.0;
z += u_mapAligned * (2.0 * (1.0 - step(minZoom, u_currentZoom)));
z += u_mapAligned * 2.0 * step(90.0, diffAngle);
z += 2.0 * (1.0 - step(u_currentZoom, maxZoom));
return z;
}
void main()
{
INIT;
float groupMinZoom    = getMinZoom();
float glyphMinZoom    = a_glyphData.x;
float glyphMaxZoom    = a_glyphData.y;
float glyphAngle      = a_glyphData.z;
float a_isBackground  = a_glyphData.w;
float a_minZoom          = max(groupMinZoom, glyphMinZoom);
float a_placementPadding = a_refSymbolAndPlacementOffset.x * EXTRUDE_SCALE_PLACEMENT_PADDING;
vec2  a_placementDir     = unpack_u8_nf32(a_refSymbolAndPlacementOffset.zw);
float a_refSymbolSize    = a_refSymbolAndPlacementOffset.y;
float fontSize           = a_texAndSize.z;
float haloSize           = a_texAndSize.w * OUTLINE_SCALE;
vec2  vertexOffset = a_vertexOffset * OFFSET_PRECISION;
vec3  pos          = vec3(a_pos * POSITION_PRECISION, 1.0);
float z            = getZ(a_minZoom, glyphMaxZoom, glyphAngle);
float fontScale    = fontSize / SDF_FONT_SIZE;
float halfSize     = getSize(a_refSymbolSize) / 2.0;
float animation    = pow(getAnimationState(), vec4(2.0)).r;
float isText = 1.0 - a_isBackground;
float isBackground = u_isBackgroundPass * a_isBackground;
vec4  nonHaloColor = (isBackground + isText) * a_color;
v_color     = animation * ((1.0 - u_isHaloPass) * nonHaloColor + (u_isHaloPass * a_haloColor));
v_opacity   = 1.0;
v_tex       = a_texCoords / u_mosaicSize;
v_edgeDistanceOffset = u_isHaloPass * haloSize / fontScale / MAX_SDF_DISTANCE;
v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;
vec2 placementOffset = a_placementDir * (halfSize + a_placementPadding);
vec3 glyphOffset     = u_displayMat3 * vec3(vertexOffset + placementOffset, 0.0);
vec3 v_pos           = vec3((u_dvsMat3 * pos + glyphOffset).xy, z);
float isHidden = u_isBackgroundPass * isText + (1.0 - u_isBackgroundPass) * a_isBackground;
v_pos.z += 2.0 * isHidden;
gl_Position = vec4(v_pos, 1.0);
#ifdef DEBUG
v_color = vec4(a_color.rgb, z == 0.0 ? 1.0 : 0.645);
#endif
}`},line:{"common.glsl":`varying lowp vec4 v_color;
varying highp vec3 v_id;
varying mediump vec2 v_normal;
varying mediump float v_lineHalfWidth;
varying lowp float v_opacity;
#ifdef PATTERN
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
#endif
#if defined(PATTERN) || defined(SDF)
varying highp float v_accumulatedDistance;
#endif
#ifdef SDF
varying mediump float v_lineWidthRatio;
#endif`,"hittest.glsl":`#include <materials/hittest/common.glsl>
#ifdef HITTEST
attribute vec2 a_pos1;
attribute vec2 a_pos2;
void hittestLine(out lowp vec4 out_color, out highp vec3 out_pos, float halfWidth) {
vec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * POSITION_PRECISION, 1.);
vec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * POSITION_PRECISION, 1.);
vec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * POSITION_PRECISION, 1.);
vec3 outTextureCoords = vec3(getAttributeDataTextureCoords(a_id), 0.0);
float dist = min(distPointSegment(u_hittestPos, pos.xy, pos1.xy),
distPointSegment(u_hittestPos, pos.xy, pos2.xy)) - halfWidth;
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
if (dist >= u_hittestDist) {
out_pos.z += 2.0;
}
out_color = vec4(1. / 255., 0, 0, dist <= 0. ? (1. / 255.) : 0.);
}
#endif`,"line.frag":`precision lowp float;
#include <util/encoding.glsl>
#include <materials/constants.glsl>
#include <materials/symbologyTypeUtils.glsl>
#include <materials/line/common.glsl>
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.frag>
#ifdef HITTEST
void main() {
gl_FragColor = v_color;
}
#else
void main() {
LineData inputs = LineData(
v_color,
v_normal,
v_lineHalfWidth,
v_opacity,
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
v_tlbr,
v_patternSize,
#endif
#ifdef SDF
v_lineWidthRatio,
#endif
#if defined(PATTERN) || defined(SDF)
v_accumulatedDistance,
#endif
#endif
v_id
);
gl_FragColor = shadeLine(inputs);
}
#endif`,"line.vert":`precision highp float;
attribute vec4 a_color;
attribute vec4 a_offsetAndNormal;
attribute vec2 a_accumulatedDistanceAndHalfWidth;
attribute vec4 a_tlbr;
attribute vec4 a_segmentDirection;
attribute vec2 a_aux;
attribute vec2 a_zoomRange;
#include <materials/vcommon.glsl>
#include <materials/symbologyTypeUtils.glsl>
#include <materials/line/common.glsl>
#include <materials/line/hittest.glsl>
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.vert>
#ifdef HITTEST
void draw() {
float aa        = 0.5 * u_antialiasing;
float a_halfWidth = a_accumulatedDistanceAndHalfWidth.y / 16.;
float a_cimHalfWidth = a_aux.x / 16. ;
vec2  a_offset = a_offsetAndNormal.xy / 16.;
float baseWidth = getBaseLineHalfWidth(a_halfWidth, a_cimHalfWidth);
float halfWidth = getLineHalfWidth(baseWidth, aa);
highp vec3 pos  = vec3(0.);
v_color = vec4(0.);
hittestLine(v_color, pos, halfWidth);
gl_PointSize = 1.;
gl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);
}
#else
void draw()
{
highp vec3 pos = vec3(0.);
LineData outputs = buildLine(
pos,
a_id,
a_pos,
a_color,
a_offsetAndNormal.xy / 16.,
a_offsetAndNormal.zw / 16.,
a_accumulatedDistanceAndHalfWidth.x,
a_accumulatedDistanceAndHalfWidth.y / 16.,
a_segmentDirection.w,
a_tlbr,
a_segmentDirection.xy / 16.,
a_aux.x / 16.
);
v_id              = outputs.id;
v_color           = outputs.color;
v_normal          = outputs.normal;
v_lineHalfWidth   = outputs.lineHalfWidth;
v_opacity         = outputs.opacity;
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
v_tlbr          = outputs.tlbr;
v_patternSize   = outputs.patternSize;
#endif
#ifdef SDF
v_lineWidthRatio = outputs.lineWidthRatio;
#endif
#if defined(PATTERN) || defined(SDF)
v_accumulatedDistance = outputs.accumulatedDistance;
#endif
#endif
gl_Position = vec4(clip(outputs.color, pos, getFilterFlags(), a_zoomRange), 1.0);
}
#endif
void main() {
INIT;
draw();
}`},pie:{"pie.common.glsl":`uniform float outlineWidth;
uniform mediump float sectorThreshold;
varying vec3  v_id;
varying vec3  v_pos;
varying vec2  v_offset;
varying vec4  v_color;
varying float v_size;
varying float v_numOfEntries;
varying float v_maxSectorAngle;
varying vec2  v_filteredSectorToColorId[numberOfFields];
varying vec2  v_texCoords;
varying float v_outlineWidth;
varying float v_opacity;
struct FilteredChartInfo {
float endSectorAngle;
int colorId;
};`,"pie.frag":`precision highp float;
#include <util/atan2.glsl>
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/pie/pie.common.glsl>
uniform lowp vec4 colors[numberOfFields];
uniform lowp vec4 defaultColor;
uniform lowp vec4 othersColor;
uniform lowp vec4 outlineColor;
uniform float donutRatio;
lowp vec4 getSectorColor(in int index, in vec2 filteredSectorToColorId[numberOfFields]) {
mediump int colorIndex = int(filteredSectorToColorId[index].y);
return colors[colorIndex];
}
const int OTHER_SECTOR_ID = 255;
#ifdef HITTEST
vec4 getColor() {
float distanceSize = length(v_offset) * v_size;
float donutSize = donutRatio * v_size;
float alpha = step(donutSize, distanceSize) * (1.0 - step(v_size, distanceSize));
return v_color;
}
#else
vec4 getColor() {
float angle = 90.0 - C_RAD_TO_DEG * atan2(v_offset.y, v_offset.x);
if (angle < 0.0) {
angle += 360.0;
} else if (angle > 360.0) {
angle = mod(angle, 360.0);
}
int numOfEntries = int(v_numOfEntries);
float maxSectorAngle = v_maxSectorAngle;
lowp vec4 fillColor = (maxSectorAngle > 0.0 || sectorThreshold > 0.0) ? othersColor : defaultColor;
lowp vec4 prevColor = vec4(0.0);
lowp vec4 nextColor = vec4(0.0);
float startSectorAngle = 0.0;
float endSectorAngle = 0.0;
if (angle < maxSectorAngle) {
for (int index = 0; index < numberOfFields; ++index) {
startSectorAngle = endSectorAngle;
endSectorAngle = v_filteredSectorToColorId[index].x;
if (endSectorAngle > angle) {
fillColor = getSectorColor(index, v_filteredSectorToColorId);
prevColor = sectorThreshold != 0.0 && index == 0 && abs(360.0 - maxSectorAngle) < EPSILON ? othersColor :
getSectorColor(index > 0 ? index - 1 : numOfEntries - 1, v_filteredSectorToColorId);
nextColor = sectorThreshold != 0.0 && abs(endSectorAngle - maxSectorAngle) < EPSILON ? othersColor :
getSectorColor(index < numOfEntries - 1 ? index + 1 : 0, v_filteredSectorToColorId);
break;
}
if (index == numOfEntries - 1) {
break;
}
}
} else {
prevColor = getSectorColor(numOfEntries - 1, v_filteredSectorToColorId);
nextColor = getSectorColor(0, v_filteredSectorToColorId);
startSectorAngle = maxSectorAngle;
endSectorAngle = 360.0;
}
lowp vec4 outlineColor = outlineColor;
float offset = length(v_offset);
float distanceSize = offset * v_size;
if (startSectorAngle != 0.0 || endSectorAngle != 360.0) {
float distanceToStartSector = (angle - startSectorAngle);
float distanceToEndSector = (endSectorAngle - angle);
float sectorThreshold = 0.6;
float beginSectorAlpha = smoothstep(0.0, sectorThreshold, distanceToStartSector * offset);
float endSectorAlpha = smoothstep(0.0, sectorThreshold, distanceToEndSector * offset);
if (endSectorAlpha > 0.0) {
fillColor = mix(nextColor, fillColor, endSectorAlpha);
} else if (beginSectorAlpha > 0.0) {
fillColor = mix(prevColor, fillColor, beginSectorAlpha);
}
}
float donutSize = donutRatio * (v_size - v_outlineWidth);
float endOfDonut = donutSize - v_outlineWidth;
float aaThreshold = 0.75;
float innerCircleAlpha = endOfDonut - aaThreshold > 0.0 ? smoothstep(endOfDonut - aaThreshold, endOfDonut + aaThreshold, distanceSize) : 1.0;
float outerCircleAlpha = 1.0 - smoothstep(v_size - aaThreshold, v_size + aaThreshold , distanceSize);
float circleAlpha = innerCircleAlpha * outerCircleAlpha;
float startOfOutline = v_size - v_outlineWidth;
if (startOfOutline > 0.0 && v_outlineWidth > 0.25) {
float outlineFactor = smoothstep(startOfOutline - aaThreshold, startOfOutline + aaThreshold, distanceSize);
float innerLineFactor = donutSize - aaThreshold > 0.0 ? 1.0 - smoothstep(donutSize - aaThreshold, donutSize + aaThreshold , distanceSize) : 0.0;
fillColor = mix(fillColor, outlineColor, innerLineFactor + outlineFactor);
}
return v_opacity * circleAlpha * fillColor;
}
#endif
void main()
{
vec4 color = getColor();
#ifdef highlight
color.a = step(1.0 / 255.0, color.a);
#endif
gl_FragColor = color;
}`,"pie.vert":`#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/barycentric.glsl>
#include <materials/vcommon.glsl>
#include <materials/vv.glsl>
#include <materials/attributeData.glsl>
#include <materials/pie/pie.common.glsl>
#include <materials/hittest/common.glsl>
attribute float a_bitSet;
attribute vec2  a_offset;
attribute vec2  a_texCoords;
attribute vec2  a_size;
attribute float a_referenceSize;
attribute vec2  a_zoomRange;
int filterValue(in float sectorAngle,
in int currentIndex,
inout FilteredChartInfo filteredInfo,
inout vec2 filteredSectorToColorId[numberOfFields]) {
if (sectorAngle > sectorThreshold * 360.0) {
filteredInfo.endSectorAngle += sectorAngle;
filteredSectorToColorId[filteredInfo.colorId] = vec2(filteredInfo.endSectorAngle, currentIndex);
++filteredInfo.colorId;
}
return 0;
}
int filterValues(inout vec2 filteredSectorToColorId[numberOfFields],
inout FilteredChartInfo filteredInfo,
in float sectorAngles[numberOfFields]) {
for (int index = 0; index < numberOfFields; ++index) {
float sectorValue = sectorAngles[index];
filterValue(sectorValue, index, filteredInfo, filteredSectorToColorId);
}
return filteredInfo.colorId;
}
vec2 getMarkerSize(inout vec2 offset, inout vec2 baseSize, inout float outlineSize, in float a_referenceSize, in float bitSet) {
vec2 outSize = baseSize;
#ifdef VV_SIZE
float r = getSize(a_referenceSize, currentScale) / a_referenceSize;
outSize.xy *= r;
offset.xy *= r;
float scaleSymbolProportionally = getBit(bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);
outlineSize *= scaleSymbolProportionally * (r - 1.0) + 1.0;
#endif
return outSize;
}
vec3 getOffset(in vec2 in_offset, float a_bitSet) {
float isMapAligned = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);
vec3  offset       = vec3(in_offset, 0.0);
return getMatrix(isMapAligned) * offset;
}
float filterNaNValues(in float value) {
return value != NAN_MAGIC_NUMBER && value > 0.0 ? value : 0.0;
}
void main()
{
INIT;
vec2  a_size   = a_size;
vec2  a_offset = a_offset / 16.0;
float outlineSize = outlineWidth;
float a_bitSet = a_bitSet;
float a_referenceSize = a_referenceSize;
vec2 a_texCoords = a_texCoords / 4.0;
vec2 markerSize = getMarkerSize(a_offset, a_size, outlineSize, a_referenceSize, a_bitSet);
float filterFlags = getFilterFlags();
vec3  pos         = vec3(a_pos / 10.0, 1.0);
v_opacity      = getOpacity();
v_id           = norm(a_id);
v_pos          = displayViewScreenMat3 * pos + getOffset(a_offset, a_bitSet);
v_offset       = sign(a_texCoords - 0.5);
v_size         = max(markerSize.x, markerSize.y);
v_outlineWidth = outlineSize;
float attributeData[10];
vec4 attributeData3 = getDataDriven0(a_id);
attributeData[0] = filterNaNValues(attributeData3.x);
attributeData[1] = filterNaNValues(attributeData3.y);
attributeData[2] = filterNaNValues(attributeData3.z);
attributeData[3] = filterNaNValues(attributeData3.w);
#if (numberOfFields > 4)
vec4 attributeData4 = getDataDriven1(a_id);
attributeData[4] = filterNaNValues(attributeData4.x);
attributeData[5] = filterNaNValues(attributeData4.y);
attributeData[6] = filterNaNValues(attributeData4.z);
attributeData[7] = filterNaNValues(attributeData4.w);
#endif
#if (numberOfFields > 8)
vec4 attributeData5 = getDataDriven2(a_id);
attributeData[8] = filterNaNValues(attributeData5.x);
attributeData[9] = filterNaNValues(attributeData5.y);
#endif
float sum = 0.0;
for (int i = 0; i < numberOfFields; ++i) {
sum += attributeData[i];
}
float sectorAngles[numberOfFields];
for (int i = 0; i < numberOfFields; ++i) {
sectorAngles[i] = 360.0 * attributeData[i] / sum;
}
vec2 filteredSectorToColorId[numberOfFields];
FilteredChartInfo filteredInfo = FilteredChartInfo(0.0, 0);
int numOfEntries = filterValues(filteredSectorToColorId, filteredInfo, sectorAngles);
v_numOfEntries = float(numOfEntries);
v_maxSectorAngle = filteredInfo.endSectorAngle;
v_filteredSectorToColorId = filteredSectorToColorId;
#ifdef HITTEST
highp vec3 out_pos = vec3(0.0);
v_color            = vec4(0.0);
hittestMarker(v_color, out_pos, viewMat3 * tileMat3 *  pos, v_size);
gl_PointSize = 1.0;
gl_Position = vec4(clip(v_color, out_pos, filterFlags, a_zoomRange), 1.0);
#else
gl_Position = vec4(clip(v_color, v_pos, filterFlags, a_zoomRange), 1.0);
#endif
}`},shared:{line:{"common.glsl":`#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && defined(PATTERN)
uniform mediump vec2 u_mosaicSize;
varying mediump float v_sampleAlphaOnly;
#endif
struct LineData {
lowp vec4 color;
mediump vec2 normal;
mediump float lineHalfWidth;
lowp float opacity;
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
mediump vec4 tlbr;
mediump vec2 patternSize;
#endif
#ifdef SDF
mediump float lineWidthRatio;
#endif
#if defined(PATTERN) || defined(SDF)
highp float accumulatedDistance;
#endif
#endif
highp vec3 id;
};`,"line.frag":`uniform lowp float u_blur;
#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && !defined(HIGHLIGHT)
#if defined(PATTERN) || defined(SDF)
uniform sampler2D u_texture;
uniform highp float u_pixelRatio;
#endif
#endif
#if defined(SDF) && !defined(HIGHLIGHT) && !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)
lowp vec4 getLineColor(LineData line) {
mediump float adjustedPatternWidth = line.patternSize.x * 2.0 * line.lineWidthRatio;
mediump float relativeTexX = fract(line.accumulatedDistance / adjustedPatternWidth);
mediump float relativeTexY = 0.5 + 0.25 * line.normal.y;
mediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * line.lineHalfWidth;
return line.opacity * clamp(0.5 - dist, 0.0, 1.0) * line.color;
}
#elif defined(PATTERN) && !defined(HIGHLIGHT) && !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)
lowp vec4 getLineColor(LineData line) {
mediump float lineHalfWidth = line.lineHalfWidth;
mediump float adjustedPatternHeight = line.patternSize.y * 2.0 * lineHalfWidth / line.patternSize.x;
mediump float relativeTexY = fract(line.accumulatedDistance / adjustedPatternHeight);
mediump float relativeTexX = 0.5 + 0.5 * line.normal.y;
mediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
#ifdef VV_COLOR
if (v_sampleAlphaOnly > 0.5) {
color.rgb = vec3(color.a);
}
#endif
return line.opacity * line.color * color;
}
#else
lowp vec4 getLineColor(LineData line) {
return line.opacity * line.color;
}
#endif
vec4 shadeLine(LineData line)
{
mediump float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(line.lineHalfWidth, THIN_LINE_HALF_WIDTH), 1.0);
mediump float fragDist = length(line.normal) * line.lineHalfWidth;
lowp float alpha = clamp(thinLineFactor * (line.lineHalfWidth - fragDist) / (u_blur + thinLineFactor - 1.0), 0.0, 1.0);
lowp vec4 out_color = getLineColor(line) * alpha;
#ifdef HIGHLIGHT
out_color.a = step(1.0 / 255.0, out_color.a);
#endif
#ifdef ID
if (out_color.a < 1.0 / 255.0) {
discard;
}
out_color = vec4(line.id, 0.0);
#endif
return out_color;
}`,"line.vert":`float getBaseLineHalfWidth(in float lineHalfWidth, in float referenceHalfWidth) {
#ifdef VV_SIZE
float refLineWidth = 2.0 * referenceHalfWidth;
return 0.5 * (lineHalfWidth / max(referenceHalfWidth, EPSILON)) * getSize(refLineWidth);
#else
return lineHalfWidth;
#endif
}
float getLineHalfWidth(in float baseWidth, in float aa) {
float halfWidth = max(baseWidth + aa, 0.45) + 0.1 * aa;
#ifdef HIGHLIGHT
halfWidth = max(halfWidth, 2.0);
#endif
return halfWidth;
}
vec2 getDist(in vec2 offset, in float halfWidth) {
float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(halfWidth, THIN_LINE_HALF_WIDTH), 1.0);
return thinLineFactor * halfWidth * offset;
}
LineData buildLine(
out vec3 out_pos,
in vec3 in_id,
in vec2 in_pos,
in vec4 in_color,
in vec2 in_offset,
in vec2 in_normal,
in float in_accumulatedDist,
in float in_lineHalfWidth,
in float in_bitSet,
in vec4 in_tlbr,
in vec2 in_segmentDirection,
in float in_referenceHalfWidth
)
{
float aa        = 0.5 * u_antialiasing;
float baseWidth = getBaseLineHalfWidth(in_lineHalfWidth, in_referenceHalfWidth);
float halfWidth = getLineHalfWidth(baseWidth, aa);
float z         = 2.0 * step(baseWidth, 0.0);
vec2  dist      = getDist(in_offset, halfWidth);
vec3  offset    = u_displayViewMat3 * vec3(dist, 0.0);
vec3  pos       = u_dvsMat3 * vec3(in_pos * POSITION_PRECISION, 1.0) + offset;
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
vec4  color     = in_color;
float opacity   = 1.0;
#else
vec4  color     = getColor(in_color, in_bitSet, BITSET_GENERIC_LOCK_COLOR);
float opacity   = getOpacity();
#ifdef SDF
const float SDF_PATTERN_HALF_WIDTH = 15.5;
float scaleDash = getBit(in_bitSet, BITSET_LINE_SCALE_DASH);
float lineWidthRatio = (scaleDash * max(halfWidth - 0.55 * u_antialiasing, 0.25) + (1.0 - scaleDash)) / SDF_PATTERN_HALF_WIDTH;
#endif
#endif
#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && defined(PATTERN)
v_sampleAlphaOnly = getBit(in_bitSet, BITSET_GENERIC_CONSIDER_ALPHA_ONLY);
#endif
out_pos = vec3(pos.xy, z);
return LineData(
color,
in_normal,
halfWidth,
opacity,
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
in_tlbr / u_mosaicSize.xyxy,
vec2(in_tlbr.z - in_tlbr.x, in_tlbr.w - in_tlbr.y),
#endif
#ifdef SDF
lineWidthRatio,
#endif
#if defined(PATTERN) || defined(SDF)
in_accumulatedDist * u_zoomFactor + dot(in_segmentDirection, dist),
#endif
#endif
norm(in_id)
);
}`}},"symbologyTypeUtils.glsl":`#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL || SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL_SIMPLE
#define SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_SIMPLE || SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL_SIMPLE
#define SYMBOLOGY_TYPE_IS_SIMPLE_LIKE
#endif`,text:{"common.glsl":`uniform highp vec2 u_mosaicSize;
varying highp vec3 v_id;
varying mediump vec3 v_pos;
varying lowp float v_opacity;
varying lowp vec4 v_color;
varying highp vec2 v_tex;
varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;
varying lowp float v_transparency;`,"hittest.glsl":"#include <materials/hittest/common.glsl>","text.frag":`precision mediump float;
#include <materials/text/common.glsl>
uniform lowp sampler2D u_texture;
#ifdef HITTEST
vec4 getColor() {
return v_color;
}
#else
vec4 getColor()
{
float SDF_CUTOFF = (2.0 / 8.0);
float SDF_BASE_EDGE_DIST = 1.0 - SDF_CUTOFF;
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float edge = SDF_BASE_EDGE_DIST - v_edgeDistanceOffset;
#ifdef HIGHLIGHT
edge /= 2.0;
#endif
lowp float aa = v_antialiasingWidth;
lowp float alpha = smoothstep(edge - aa, edge + aa, dist);
return alpha * v_color * v_opacity;
}
#endif
void main()
{
gl_FragColor = getColor();
}`,"text.vert":`precision highp float;
#include <materials/utils.glsl>
#include <materials/vcommon.glsl>
#include <materials/text/common.glsl>
#include <materials/text/hittest.glsl>
attribute vec4 a_color;
attribute vec4 a_haloColor;
attribute vec4 a_texFontSize;
attribute vec4 a_aux;
attribute vec2 a_zoomRange;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
uniform float u_isHaloPass;
uniform float u_isBackgroundPass;
float getTextSize(inout vec2 offset, inout float baseSize, in float referenceSize) {
#ifdef VV_SIZE
float r = getSize(referenceSize) / referenceSize;
baseSize *= r;
offset.xy *= r;
return baseSize;
#endif
return baseSize;
}
void main()
{
INIT;
float a_isBackground  = a_aux.y;
float a_referenceSize = a_aux.z * a_aux.z / 256.0;
float a_bitSet        = a_aux.w;
float a_fontSize      = a_texFontSize.z;
vec2  a_offset        = a_vertexOffset * OFFSET_PRECISION;
vec3  in_pos        = vec3(a_pos * POSITION_PRECISION, 1.0);
float fontSize      = getTextSize(a_offset, a_fontSize, a_referenceSize);
float fontScale     = fontSize / SDF_FONT_SIZE;
vec3  offset        = getRotation() * vec3(a_offset, 0.0);
mat3  extrudeMatrix = getBit(a_bitSet, 0) == 1.0 ? u_displayViewMat3 : u_displayMat3;
float isText = 1.0 - a_isBackground;
float isBackground = u_isBackgroundPass * a_isBackground;
vec4  nonHaloColor  = (isBackground * a_color) + (isText * getColor(a_color, a_bitSet, 1));
v_color   = u_isHaloPass * a_haloColor + (1.0 - u_isHaloPass) * nonHaloColor;
v_opacity = getOpacity();
v_id      = norm(a_id);
v_tex     = a_texCoords / u_mosaicSize;
v_pos     = u_dvsMat3 * in_pos + extrudeMatrix * offset;
float isHidden = u_isBackgroundPass * isText + (1.0 - u_isBackgroundPass) * a_isBackground;
v_pos.z += 2.0 * isHidden;
v_edgeDistanceOffset = u_isHaloPass * OUTLINE_SCALE * a_texFontSize.w / fontScale / MAX_SDF_DISTANCE;
v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;
#ifdef HITTEST
highp vec3 out_pos  = vec3(0.);
v_color = vec4(0.);
hittestMarker(v_color, out_pos, u_viewMat3 * u_tileMat3 *  vec3(a_pos * POSITION_PRECISION, 1.0)
+ u_tileMat3 * offset, fontSize / 2.);
gl_PointSize = 1.;
gl_Position = vec4(clip(v_color, out_pos, getFilterFlags(), a_zoomRange), 1.0);
#else
gl_Position =  vec4(clip(v_color, v_pos, getFilterFlags(), a_zoomRange), 1.0);
#endif
}`},"utils.glsl":`float rshift(in float u32, in int amount) {
return floor(u32 / pow(2.0, float(amount)));
}
float getBit(in float bitset, in int bitIndex) {
float offset = pow(2.0, float(bitIndex));
return mod(floor(bitset / offset), 2.0);
}
const int maxHighlightReasons = 6;
float getFilterBit(in float bitset, in int bitIndex) {
return getBit(bitset, bitIndex + maxHighlightReasons);
}
float getHighlightBit(in float bitset, in int bitIndex) {
return getBit(bitset, bitIndex);
}
highp vec3 unpackDisplayIdTexel(in highp vec3 bitset) {
float isAggregate = getBit(bitset.b, 7);
return (1.0 - isAggregate) * bitset + isAggregate * (vec3(bitset.rgb) - vec3(0.0, 0.0, float(0x80)));
}
vec4 unpack(in float u32) {
float r = mod(rshift(u32, 0), 255.0);
float g = mod(rshift(u32, 8), 255.0);
float b = mod(rshift(u32, 16), 255.0);
float a = mod(rshift(u32, 24), 255.0);
return vec4(r, g, b, a);
}
vec3 norm(in vec3 v) {
return v /= 255.0;
}
vec4 norm(in vec4 v) {
return v /= 255.0;
}
float max4(vec4 target) {
return max(max(max(target.x, target.y), target.z), target.w);
}
vec2 unpack_u8_nf32(vec2 bytes) {
return (bytes - 127.0) / 127.0;
}
highp float rand(in vec2 co) {
highp float a = 12.9898;
highp float b = 78.233;
highp float c = 43758.5453;
highp float dt = dot(co, vec2(a,b));
highp float sn = mod(dt, 3.14);
return fract(sin(sn) * c);
}`,"vcommon.glsl":`#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/attributeData.glsl>
#include <materials/vv.glsl>
#include <materials/barycentric.glsl>
attribute vec2 a_pos;
attribute highp vec3 a_id;
uniform highp mat3 displayViewScreenMat3;
uniform highp mat3 displayViewMat3;
uniform highp mat3 displayMat3;
uniform highp mat3 tileMat3;
uniform highp mat3 viewMat3;
uniform highp float pixelRatio;
uniform mediump float zoomFactor;
uniform mediump float antialiasing;
uniform mediump float currentScale;
uniform mediump float currentZoom;
uniform mediump float metersPerSRUnit;
uniform mediump float activeReasons;
uniform mediump float highlightAll;
vec4 VV_ADATA = vec4(0.0);
void loadVisualVariableData(inout vec4 target) {
target.rgba = getVisualVariableData(a_id);
}
#ifdef VV
#define INIT loadVisualVariableData(VV_ADATA)
#else
#define INIT
#endif
vec4 getColor(in vec4 a_color, in float a_bitSet, int index) {
#ifdef VV_COLOR
float isColorLocked   = getBit(a_bitSet, index);
return getVVColor(VV_ADATA[ATTR_VV_COLOR], a_color, isColorLocked);
#else
return a_color;
#endif
}
float getOpacity() {
#ifdef VV_OPACITY
return getVVOpacity(VV_ADATA[ATTR_VV_OPACITY]);
#else
return 1.0;
#endif
}
float getSize(in float in_size, in float currentScale) {
#ifdef VV_SIZE
return getVVSize(in_size, VV_ADATA[ATTR_VV_SIZE], currentScale);
#else
return in_size;
#endif
}
mat3 getRotation() {
#ifdef VV_ROTATION
return getVVRotationMat3(mod(VV_ADATA[ATTR_VV_ROTATION], 360.0));
#else
return mat3(1.0);
#endif
}
float getFilterFlags() {
#ifdef IGNORES_SAMPLER_PRECISION
return ceil(getFilterData(a_id).x * 255.0);
#else
return getFilterData(a_id).x * 255.0;
#endif
}
vec4 getAnimationState() {
return getAnimation(a_id);
}
float getMinZoom() {
vec4 data0 = getFilterData(a_id) * 255.0;
return data0.g;
}
mat3 getMatrixNoDisplay(float isMapAligned) {
return isMapAligned * viewMat3 * tileMat3 + (1.0 - isMapAligned) * tileMat3;
}
mat3 getMatrix(float isMapAligned) {
return isMapAligned * displayViewMat3 + (1.0 - isMapAligned) * displayMat3;
}
float checkHighlightBit(float filterFlags, int index) {
return getHighlightBit(filterFlags, index) * getBit(activeReasons, index);
}
float checkHighlight(float filterFlags) {
float result = checkHighlightBit(filterFlags, 0);
for (int i = 1; i < maxHighlightReasons; i++) {
result = result + checkHighlightBit(filterFlags, i);
}
return step(0.1, result + highlightAll);
}
vec3 clip(inout vec4 color, inout vec3 pos, in float filterFlags, in vec2 minMaxZoom) {
pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 0));
#ifdef inside
pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 1));
#elif defined(outside)
pos.z += 2.0 * getFilterBit(filterFlags, 1);
#elif defined(highlight)
pos.z += 2.0 * (1.0 - checkHighlight(filterFlags));
#endif
pos.z += 2.0 * (step(minMaxZoom.y, currentZoom) + (1.0 - step(minMaxZoom.x, currentZoom)));
return pos;
}`,"vv.glsl":`#if defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)
#define VV_SIZE
#endif
#if defined(VV_COLOR) || defined(VV_SIZE) || defined(VV_OPACITY) || defined(VV_ROTATION)
#define VV
#endif
#ifdef VV_COLOR
uniform highp float colorValues[8];
uniform vec4 colors[8];
#endif
#ifdef VV_SIZE_MIN_MAX_VALUE
uniform highp vec4 minMaxValueAndSize;
#endif
#ifdef VV_SIZE_SCALE_STOPS
uniform highp float values[8];
uniform float sizes[8];
#endif
#ifdef VV_SIZE_FIELD_STOPS
uniform highp float values[8];
uniform float sizes[8];
#endif
#ifdef VV_SIZE_UNIT_VALUE
uniform highp float unitMeterRatio;
#endif
#ifdef VV_OPACITY
uniform highp float opacityValues[8];
uniform float opacities[8];
#endif
#ifdef VV_ROTATION
uniform lowp float rotationType;
#endif
bool isNan(float val) {
return (val == NAN_MAGIC_NUMBER);
}
#ifdef VV_SIZE_MIN_MAX_VALUE
float getVVMinMaxSize(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
float interpolationRatio = (sizeValue  - minMaxValueAndSize.x) / (minMaxValueAndSize.y - minMaxValueAndSize.x);
interpolationRatio = clamp(interpolationRatio, 0.0, 1.0);
return minMaxValueAndSize.z + interpolationRatio * (minMaxValueAndSize.w - minMaxValueAndSize.z);
}
#endif
#ifdef VV_SIZE_SCALE_STOPS
float getVVScaleStopsSize(float currentScale) {
float outSize;
if (currentScale <= values[0]) {
outSize = sizes[0];
} else {
if (currentScale >= values[7]) {
outSize = sizes[7];
} else {
int index;
index = -1;
for (int i = 0; i < 8; i++) {
if (values[i] > currentScale) {
index = i;
break;
}
}
int prevIndex = index - 1;
float a = currentScale - values[prevIndex];
float b = values[index] - values[prevIndex];
outSize = mix(sizes[prevIndex], sizes[index], a / b);
}
}
return outSize;
}
#endif
#ifdef VV_SIZE_FIELD_STOPS
const int VV_SIZE_N = 8;
float getVVStopsSize(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
if (sizeValue <= values[0]) {
return sizes[0];
}
if (sizeValue >= values[VV_SIZE_N - 1]) {
return sizes[VV_SIZE_N - 1];
}
for (int i = 1; i < VV_SIZE_N; ++i) {
if (values[i] >= sizeValue) {
float f = (sizeValue - values[i-1]) / (values[i] - values[i-1]);
return mix(sizes[i-1], sizes[i], f);
}
}
return sizes[VV_SIZE_N - 1];
}
#endif
#ifdef VV_SIZE_UNIT_VALUE
float getVVUnitValue(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
return sizeValue * (metersPerSRUnit / unitMeterRatio);
}
#endif
#ifdef VV_OPACITY
const int VV_OPACITY_N = 8;
float getVVOpacity(float opacityValue) {
if (isNan(opacityValue)) {
return 1.0;
}
if (opacityValue <= opacityValues[0]) {
return opacities[0];
}
for (int i = 1; i < VV_OPACITY_N; ++i) {
if (opacityValues[i] >= opacityValue) {
float f = (opacityValue - opacityValues[i-1]) / (opacityValues[i] - opacityValues[i-1]);
return mix(opacities[i-1], opacities[i], f);
}
}
return opacities[VV_OPACITY_N - 1];
}
#endif
#ifdef VV_ROTATION
mat4 getVVRotation(float rotationValue) {
if (isNan(rotationValue)) {
return mat4(1, 0, 0, 0,
0, 1, 0, 0,
0, 0, 1, 0,
0, 0, 0, 1);
}
float rotation = rotationValue;
if (rotationType == 1.0) {
rotation = 90.0 - rotation;
}
float angle = C_DEG_TO_RAD * rotation;
float sinA = sin(angle);
float cosA = cos(angle);
return mat4(cosA, sinA, 0, 0,
-sinA,  cosA, 0, 0,
0,     0, 1, 0,
0,     0, 0, 1);
}
mat3 getVVRotationMat3(float rotationValue) {
if (isNan(rotationValue)) {
return mat3(1, 0, 0,
0, 1, 0,
0, 0, 1);
}
float rotation = rotationValue;
if (rotationType == 1.0) {
rotation = 90.0 - rotation;
}
float angle = C_DEG_TO_RAD * -rotation;
float sinA = sin(angle);
float cosA = cos(angle);
return mat3(cosA, -sinA, 0,
sinA, cosA, 0,
0,    0,    1);
}
#endif
#ifdef VV_COLOR
const int VV_COLOR_N = 8;
vec4 getVVColor(float colorValue, vec4 fallback, float isColorLocked) {
if (isNan(colorValue) || isColorLocked == 1.0) {
return fallback;
}
if (colorValue <= colorValues[0]) {
return colors[0];
}
for (int i = 1; i < VV_COLOR_N; ++i) {
if (colorValues[i] >= colorValue) {
float f = (colorValue - colorValues[i-1]) / (colorValues[i] - colorValues[i-1]);
return mix(colors[i-1], colors[i], f);
}
}
return colors[VV_COLOR_N - 1];
}
#endif
float getVVSize(in float size, in float vvSize, in float currentScale)  {
#ifdef VV_SIZE_MIN_MAX_VALUE
return getVVMinMaxSize(vvSize, size);
#elif defined(VV_SIZE_SCALE_STOPS)
float outSize = getVVScaleStopsSize(currentScale);
return isNan(outSize) ? size : outSize;
#elif defined(VV_SIZE_FIELD_STOPS)
float outSize = getVVStopsSize(vvSize, size);
return isNan(outSize) ? size : outSize;
#elif defined(VV_SIZE_UNIT_VALUE)
return getVVUnitValue(vvSize, size);
#else
return size;
#endif
}`},"post-processing":{dra:{"dra.frag":`precision mediump float;
uniform sampler2D u_minColor;
uniform sampler2D u_maxColor;
uniform sampler2D u_texture;
varying vec2 v_uv;
void main() {
vec4 minColor = texture2D(u_minColor, vec2(0.5));
vec4 maxColor = texture2D(u_maxColor, vec2(0.5));
vec4 color = texture2D(u_texture, v_uv);
vec3 minColorUnpremultiply = minColor.rgb / minColor.a;
vec3 maxColorUnpremultiply = maxColor.rgb / maxColor.a;
vec3 colorUnpremultiply = color.rgb / color.a;
vec3 range = maxColorUnpremultiply - minColorUnpremultiply;
gl_FragColor = vec4(color.a * (colorUnpremultiply - minColorUnpremultiply) / range, color.a);
}`,"min-max":{"min-max.frag":`#extension GL_EXT_draw_buffers : require
precision mediump float;
#define CELL_SIZE 2
uniform sampler2D u_minTexture;
uniform sampler2D u_maxTexture;
uniform vec2 u_srcResolution;
uniform vec2 u_dstResolution;
varying vec2 v_uv;
void main() {
vec2 srcPixel = floor(gl_FragCoord.xy) * float(CELL_SIZE);
vec2 onePixel = vec2(1.0) / u_srcResolution;
vec2 uv = (srcPixel + 0.5) / u_srcResolution;
vec4 minColor = vec4(1.0);
vec4 maxColor = vec4(0.0);
for (int y = 0; y < CELL_SIZE; ++y) {
for (int x = 0; x < CELL_SIZE; ++x) {
vec2 offset = uv + vec2(x, y) * onePixel;
minColor = min(minColor, texture2D(u_minTexture, offset));
maxColor = max(maxColor, texture2D(u_maxTexture, offset));
}
}
gl_FragData[0] = minColor;
gl_FragData[1] = maxColor;
}`}},"edge-detect":{"frei-chen":{"frei-chen.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform vec2 u_texSize;
varying vec2 v_uv;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[9];
const mat3 g0 = mat3( 0.3535533845424652, 0, -0.3535533845424652, 0.5, 0, -0.5, 0.3535533845424652, 0, -0.3535533845424652 );
const mat3 g1 = mat3( 0.3535533845424652, 0.5, 0.3535533845424652, 0, 0, 0, -0.3535533845424652, -0.5, -0.3535533845424652 );
const mat3 g2 = mat3( 0, 0.3535533845424652, -0.5, -0.3535533845424652, 0, 0.3535533845424652, 0.5, -0.3535533845424652, 0 );
const mat3 g3 = mat3( 0.5, -0.3535533845424652, 0, -0.3535533845424652, 0, 0.3535533845424652, 0, 0.3535533845424652, -0.5 );
const mat3 g4 = mat3( 0, -0.5, 0, 0.5, 0, 0.5, 0, -0.5, 0 );
const mat3 g5 = mat3( -0.5, 0, 0.5, 0, 0, 0, 0.5, 0, -0.5 );
const mat3 g6 = mat3( 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.6666666865348816, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204 );
const mat3 g7 = mat3( -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, 0.6666666865348816, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408 );
const mat3 g8 = mat3( 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408 );
void main() {
G[0] = g0,
G[1] = g1,
G[2] = g2,
G[3] = g3,
G[4] = g4,
G[5] = g5,
G[6] = g6,
G[7] = g7,
G[8] = g8;
mat3 I;
float cnv[9];
vec3 sample;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D(u_colorTexture, v_uv + texel * vec2(i - 1.0,j - 1.0)).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 9; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
float M = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]);
float S = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + (cnv[8] + M);
gl_FragColor = vec4(vec3(sqrt(M / S)), texture2D(u_colorTexture, v_uv).a);
}`},sobel:{"sobel.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
varying vec2 v_uv;
uniform vec2 u_texSize;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[2];
const mat3 g0 = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );
const mat3 g1 = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );
void main() {
mat3 I;
float cnv[2];
vec3 sample;
G[0] = g0;
G[1] = g1;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 2; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
gl_FragColor = vec4(vec3(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1])), texture2D(u_colorTexture, v_uv).a);
}`}},"edge-enhance":{"edge-enhance.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
varying vec2 v_uv;
uniform vec2 u_texSize;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[2];
const mat3 g0 = mat3( 1.0, 0.0, -1.0, 1.0, 0.0, -1.0, 1.0, 0.0, -1.0 );
const mat3 g1 = mat3( 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, -1.0, -1.0, -1.0 );
void main() {
mat3 I;
float cnv[2];
vec3 sample;
G[0] = g0;
G[1] = g1;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 2; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
vec4 color = texture2D(u_colorTexture, v_uv);
gl_FragColor = vec4(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1]) * color);
}`},filterEffect:{"filterEffect.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform mat4 u_coefficients;
varying vec2 v_uv;
void main() {
vec4 color = texture2D(u_colorTexture, v_uv);
vec4 rgbw = u_coefficients * vec4(color.a > 0.0 ? color.rgb / color.a : vec3(0.0), 1.0);
float a = color.a;
gl_FragColor = vec4(a * rgbw.rgb, a);
}`},pp:{"pp.vert":`precision mediump float;
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
gl_Position = vec4(a_position, 0.0, 1.0);
v_uv = (a_position + 1.0) / 2.0;
}`}},raster:{common:{"common.glsl":`uniform sampler2D u_image;
uniform int u_bandCount;
uniform bool u_flipY;
uniform float u_opacity;
uniform int u_resampling;
uniform vec2 u_srcImageSize;
#ifdef APPLY_PROJECTION
#include <raster/common/projection.glsl>
#endif
#ifdef BICUBIC
#include <filtering/bicubic.glsl>
#endif
#ifdef BILINEAR
#include <filtering/bilinear.glsl>
#endif
vec2 getPixelLocation(vec2 coords) {
vec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;
#ifdef APPLY_PROJECTION
targetLocation = projectPixelLocation(targetLocation);
#endif
return targetLocation;
}
bool isOutside(vec2 coords){
if (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {
return true;
} else {
return false;
}
}
vec4 getPixel(vec2 pixelLocation) {
#ifdef BICUBIC
vec4 color = sampleBicubicBSpline(u_image, pixelLocation, u_srcImageSize);
#elif defined(BILINEAR)
vec4 color = sampleBilinear(u_image, pixelLocation, u_srcImageSize);
#else
vec4 color = texture2D(u_image, pixelLocation);
#endif
return color;
}`,"projection.glsl":`uniform sampler2D u_transformGrid;
uniform vec2 u_transformSpacing;
uniform vec2 u_transformGridSize;
uniform vec2 u_targetImageSize;
vec2 projectPixelLocation(vec2 coords) {
#ifdef LOOKUP_PROJECTION
vec4 pv = texture2D(u_transformGrid, coords);
return vec2(pv.r, pv.g);
#endif
vec2 index_image = floor(coords * u_targetImageSize);
vec2 oneTransformPixel = vec2(0.25 / u_transformGridSize.s, 1.0 / u_transformGridSize.t);
vec2 index_transform = floor(index_image / u_transformSpacing) / u_transformGridSize;
vec2 pos = fract((index_image + vec2(0.5, 0.5)) / u_transformSpacing);
vec2 srcLocation;
vec2 transform_location = index_transform + oneTransformPixel * 0.5;
if (pos.s <= pos.t) {
vec4 ll_abc = texture2D(u_transformGrid, vec2(transform_location.s, transform_location.t));
vec4 ll_def = texture2D(u_transformGrid, vec2(transform_location.s + oneTransformPixel.s, transform_location.t));
srcLocation.s = dot(ll_abc.rgb, vec3(pos, 1.0));
srcLocation.t = dot(ll_def.rgb, vec3(pos, 1.0));
} else {
vec4 ur_abc = texture2D(u_transformGrid, vec2(transform_location.s + 2.0 * oneTransformPixel.s, transform_location.t));
vec4 ur_def = texture2D(u_transformGrid, vec2(transform_location.s + 3.0 * oneTransformPixel.s, transform_location.t));
srcLocation.s = dot(ur_abc.rgb, vec3(pos, 1.0));
srcLocation.t = dot(ur_def.rgb, vec3(pos, 1.0));
}
return srcLocation;
}`},flow:{"getFadeOpacity.glsl":`uniform float u_decayRate;
uniform float u_fadeToZero;
float getFadeOpacity(float x) {
float cutOff = mix(0.0, exp(-u_decayRate), u_fadeToZero);
return (exp(-u_decayRate * x) - cutOff) / (1.0 - cutOff);
}`,"getFragmentColor.glsl":`vec4 getFragmentColor(vec4 color, float dist, float size, float featheringSize) {
float featheringStart = clamp(0.5 - featheringSize / size, 0.0, 0.5);
if (dist > featheringStart) {
color *= 1.0 - (dist - featheringStart) / (0.5 - featheringStart);
}
return color;
}`,imagery:{"imagery.frag":`precision highp float;
varying vec2 v_texcoord;
uniform sampler2D u_texture;
uniform float u_Min;
uniform float u_Max;
uniform float u_featheringSize;
#include <raster/flow/vv.glsl>
float getIntensity(float v) {
return u_Min + v * (u_Max - u_Min);
}
void main(void) {
vec4 sampled = texture2D(u_texture, v_texcoord);
float intensity = getIntensity(sampled.r);
gl_FragColor = getColor(intensity);
gl_FragColor.a *= getOpacity(sampled.r);
gl_FragColor.a *= sampled.a;
gl_FragColor.rgb *= gl_FragColor.a;
}`,"imagery.vert":`attribute vec2 a_position;
attribute vec2 a_texcoord;
uniform mat3 u_dvsMat3;
varying vec2 v_texcoord;
void main(void) {
vec2 xy = (u_dvsMat3 * vec3(a_position, 1.0)).xy;
gl_Position = vec4(xy, 0.0, 1.0);
v_texcoord = a_texcoord;
}`},particles:{"particles.frag":`precision highp float;
varying vec4 v_color;
varying vec2 v_texcoord;
varying float v_size;
uniform float u_featheringSize;
#include <raster/flow/getFragmentColor.glsl>
void main(void) {
gl_FragColor = getFragmentColor(v_color, length(v_texcoord - 0.5), v_size, u_featheringSize);
}`,"particles.vert":`attribute vec4 a_xyts0;
attribute vec4 a_xyts1;
attribute vec4 a_typeIdDurationSeed;
attribute vec4 a_extrudeInfo;
uniform mat3 u_dvsMat3;
uniform mat3 u_displayViewMat3;
uniform float u_time;
uniform float u_trailLength;
uniform float u_flowSpeed;
varying vec4 v_color;
varying vec2 v_texcoord;
varying float v_size;
uniform float u_featheringSize;
uniform float u_introFade;
#include <raster/flow/vv.glsl>
#include <raster/flow/getFadeOpacity.glsl>
void main(void) {
vec2 position0 = a_xyts0.xy;
float t0 = a_xyts0.z;
float speed0 = a_xyts0.w;
vec2 position1 = a_xyts1.xy;
float t1 = a_xyts1.z;
float speed1 = a_xyts1.w;
float type = a_typeIdDurationSeed.x;
float id = a_typeIdDurationSeed.y;
float duration = a_typeIdDurationSeed.z;
float seed = a_typeIdDurationSeed.w;
vec2 e0 = a_extrudeInfo.xy;
vec2 e1 = a_extrudeInfo.zw;
float animationPeriod = duration + u_trailLength;
float scaledTime = u_time * u_flowSpeed;
float randomizedTime = scaledTime + seed * animationPeriod;
float t = mod(randomizedTime, animationPeriod);
float fUnclamped = (t - t0) / (t1 - t0);
float f = clamp(fUnclamped, 0.0, 1.0);
float clampedTime = mix(t0, t1, f);
float speed = mix(speed0, speed1, f);
vec2 extrude;
vec2 position;
float fadeOpacity;
float introOpacity;
if (type == 2.0) {
if (fUnclamped < 0.0 || (fUnclamped > 1.0 && t1 != duration)) {
gl_Position = vec4(0.0, 0.0, -2.0, 1.0);
return;
}
vec2 ortho = mix(e0, e1, f);
vec2 parallel;
parallel = normalize(position1 - position0) * 0.5;
if (id == 1.0) {
extrude = ortho;
v_texcoord = vec2(0.5, 0.0);
} else if (id == 2.0) {
extrude = -ortho;
v_texcoord = vec2(0.5, 1.0);
} else if (id == 3.0) {
extrude = ortho + parallel;
v_texcoord = vec2(1.0, 0.0);
} else if (id == 4.0) {
extrude = -ortho + parallel;
v_texcoord = vec2(1.0, 1.0);
}
fadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);
introOpacity = 1.0 - exp(-clampedTime);
v_size = getSize(speed);
v_color = getColor(speed);
v_color.a *= getOpacity(speed);
position = mix(position0, position1, f);
} else {
if (fUnclamped < 0.0) {
gl_Position = vec4(0.0, 0.0, -2.0, 1.0);
return;
}
if (id == 1.0) {
extrude = e0;
v_texcoord = vec2(0.5, 0.0);
fadeOpacity = getFadeOpacity((t - t0) / u_trailLength);
introOpacity = 1.0 - exp(-t0);
v_size = getSize(speed0);
v_color = getColor(speed0);
v_color.a *= getOpacity(speed0);
position = position0;
} else if (id == 2.0) {
extrude = -e0;
v_texcoord = vec2(0.5, 1.0);
fadeOpacity = getFadeOpacity((t - t0) / u_trailLength);
introOpacity = 1.0 - exp(-t0);
v_size = getSize(speed0);
v_color = getColor(speed0);
v_color.a *= getOpacity(speed0);
position = position0;
} else if (id == 3.0) {
extrude = mix(e0, e1, f);
v_texcoord = vec2(0.5, 0.0);
fadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);
introOpacity = 1.0 - exp(-clampedTime);
v_size = getSize(speed);
v_color = getColor(speed);
v_color.a *= getOpacity(speed);
position = mix(position0, position1, f);
} else if (id == 4.0) {
extrude = -mix(e0, e1, f);
v_texcoord = vec2(0.5, 1.0);
fadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);
introOpacity = 1.0 - exp(-clampedTime);
v_size = getSize(speed);
v_color = getColor(speed);
v_color.a *= getOpacity(speed);
position = mix(position0, position1, f);
}
}
vec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(extrude * v_size, 0.0)).xy;
gl_Position = vec4(xy, 0.0, 1.0);
v_color.a *= fadeOpacity;
v_color.a *= mix(1.0, introOpacity, u_introFade);
v_color.rgb *= v_color.a;
}`},streamlines:{"streamlines.frag":`precision highp float;
varying float v_side;
varying float v_time;
varying float v_totalTime;
varying float v_timeSeed;
varying vec4 v_color;
varying float v_size;
uniform float u_time;
uniform float u_trailLength;
uniform float u_flowSpeed;
uniform float u_featheringSize;
uniform float u_introFade;
#include <raster/flow/getFragmentColor.glsl>
#include <raster/flow/getFadeOpacity.glsl>
void main(void) {
float t = mod(v_timeSeed * (v_totalTime + u_trailLength) + u_time * u_flowSpeed, v_totalTime + u_trailLength) - v_time;
vec4 color = v_color * step(0.0, t) * getFadeOpacity(t / u_trailLength);
color *= mix(1.0, 1.0 - exp(-v_time), u_introFade);
gl_FragColor = getFragmentColor(color, length((v_side + 1.0) / 2.0 - 0.5), v_size, u_featheringSize);
}`,"streamlines.vert":`attribute vec3 a_positionAndSide;
attribute vec3 a_timeInfo;
attribute vec2 a_extrude;
attribute float a_speed;
uniform mat3 u_dvsMat3;
uniform mat3 u_displayViewMat3;
varying float v_time;
varying float v_totalTime;
varying float v_timeSeed;
varying vec4 v_color;
varying float v_side;
varying float v_size;
uniform float u_featheringSize;
#include <raster/flow/vv.glsl>
void main(void) {
vec4 lineColor = getColor(a_speed);
float lineOpacity = getOpacity(a_speed);
float lineSize = getSize(a_speed);
vec2 position = a_positionAndSide.xy;
v_side = a_positionAndSide.z;
vec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(a_extrude * lineSize, 0.0)).xy;
gl_Position = vec4(xy, 0.0, 1.0);
v_time = a_timeInfo.x;
v_totalTime = a_timeInfo.y;
v_timeSeed = a_timeInfo.z;
v_color = lineColor;
v_color.a *= lineOpacity;
v_color.rgb *= v_color.a;
v_size = lineSize;
}`},"vv.glsl":`#define MAX_STOPS 8
#ifdef VV_COLOR
uniform float u_color_stops[MAX_STOPS];
uniform vec4 u_color_values[MAX_STOPS];
uniform int u_color_count;
#else
uniform vec4 u_color;
#endif
#ifdef VV_OPACITY
uniform float u_opacity_stops[MAX_STOPS];
uniform float u_opacity_values[MAX_STOPS];
uniform int u_opacity_count;
#else
uniform float u_opacity;
#endif
#ifdef VV_SIZE
uniform float u_size_stops[MAX_STOPS];
uniform float u_size_values[MAX_STOPS];
uniform int u_size_count;
#else
uniform float u_size;
#endif
uniform float u_featheringOffset;
vec4 getColor(float x) {
#ifdef VV_COLOR
vec4 color = u_color_values[0];
{
for (int i = 1; i < MAX_STOPS; i++) {
if (i >= u_color_count) {
break;
}
float x1 = u_color_stops[i - 1];
if (x < x1) {
break;
}
float x2 = u_color_stops[i];
vec4 y2 = u_color_values[i];
if (x < x2) {
vec4 y1 = u_color_values[i - 1];
color = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
} else {
color = y2;
}
}
}
#else
vec4 color = u_color;
#endif
return color;
}
float getOpacity(float x) {
#ifdef VV_OPACITY
float opacity = u_opacity_values[0];
{
for (int i = 1; i < MAX_STOPS; i++) {
if (i >= u_opacity_count) {
break;
}
float x1 = u_opacity_stops[i - 1];
if (x < x1) {
break;
}
float x2 = u_opacity_stops[i];
float y2 = u_opacity_values[i];
if (x < x2) {
float y1 = u_opacity_values[i - 1];
opacity = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
} else {
opacity = y2;
}
}
}
#else
float opacity = u_opacity;
#endif
return opacity;
}
float getSize(float x) {
#ifdef VV_SIZE
float size = u_size_values[0];
{
for (int i = 1; i < MAX_STOPS; i++) {
if (i >= u_size_count) {
break;
}
float x1 = u_size_stops[i - 1];
if (x < x1) {
break;
}
float x2 = u_size_stops[i];
float y2 = u_size_values[i];
if (x < x2) {
float y1 = u_size_values[i - 1];
size = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
} else {
size = y2;
}
}
}
#else
float size = u_size;
#endif
return size + 2.0 * u_featheringSize * u_featheringOffset;
}`},magdir:{"magdir.frag":`precision mediump float;
varying vec4 v_color;
uniform lowp float u_opacity;
void main() {
gl_FragColor = v_color * u_opacity;
}`,"magdir.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_vv;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
uniform vec2 u_symbolSize;
uniform vec2 u_symbolPercentRange;
uniform vec2 u_dataRange;
uniform float u_rotation;
uniform vec4 u_colors[12];
varying vec4 v_color;
void main()
{
float angle = a_offset.y + u_rotation;
#ifndef ROTATION_GEOGRAPHIC
angle = 3.14159265359 * 2.0 - angle - 3.14159265359 / 2.0;
#endif
vec2 offset = vec2(cos(angle), sin(angle)) * a_offset.x;
#ifdef DATA_RANGE
float valuePercentage = clamp((a_vv.y - u_dataRange.x) / (u_dataRange.y - u_dataRange.x), 0.0, 1.0);
float sizeRatio = u_symbolPercentRange.x + valuePercentage * (u_symbolPercentRange.y - u_symbolPercentRange.x);
float sizePercentage = clamp(sizeRatio, u_symbolPercentRange.x, u_symbolPercentRange.y);
#else
float sizePercentage = (u_symbolPercentRange.x + u_symbolPercentRange.y) / 2.0;
#endif
vec2 pos = a_pos + offset * sizePercentage * u_symbolSize;
v_color = u_colors[int(a_vv.x)];
gl_Position = vec4(u_dvsMat3 * vec3(pos * u_coordScale, 1.0), 1.0);
}`},reproject:{"reproject.frag":`precision mediump float;
varying vec2 v_texcoord;
#include <raster/common/common.glsl>
void main() {
vec2 pixelLocation = getPixelLocation(v_texcoord);
if (isOutside(pixelLocation)) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
vec4 currentPixel = getPixel(pixelLocation);
gl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;
}`,"reproject.vert":`precision mediump float;
attribute vec2 a_position;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_position;
gl_Position = vec4(2.0 * (a_position - 0.5), 0.0, 1.0);
}`},scalar:{"scalar.frag":`precision mediump float;
uniform lowp float u_opacity;
varying vec2 v_pos;
const vec4 outlineColor = vec4(0.2, 0.2, 0.2, 1.0);
const float outlineSize = 0.02;
const float innerRadius = 0.25;
const float outerRadius = 0.42;
const float innerSquareLength = 0.15;
void main() {
mediump float dist = length(v_pos);
mediump float fillalpha1 = smoothstep(outerRadius, outerRadius + outlineSize, dist);
fillalpha1 *= (1.0-smoothstep(outerRadius + outlineSize, outerRadius + 0.1 + outlineSize, dist));
#ifdef INNER_CIRCLE
mediump float fillalpha2 = smoothstep(innerRadius, innerRadius + outlineSize, dist);
fillalpha2 *= (1.0-smoothstep(innerRadius + outlineSize, innerRadius + 0.1 + outlineSize, dist));
#else
mediump float fillalpha2 = (abs(v_pos.x) < innerSquareLength ? 1.0 : 0.0) * (abs(v_pos.y) < innerSquareLength ? 1.0 : 0.0);
#endif
gl_FragColor = (fillalpha2 + fillalpha1) * outlineColor * u_opacity;
}`,"scalar.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_vv;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
uniform vec2 u_symbolSize;
uniform vec2 u_symbolPercentRange;
uniform vec2 u_dataRange;
varying vec2 v_pos;
void main()
{
#ifdef DATA_RANGE
float valuePercentage = clamp((a_vv.y - u_dataRange.x) / (u_dataRange.y - u_dataRange.x), 0.0, 1.0);
float sizeRatio = u_symbolPercentRange.x + valuePercentage * (u_symbolPercentRange.y - u_symbolPercentRange.x);
float sizePercentage = clamp(sizeRatio, u_symbolPercentRange.x, u_symbolPercentRange.y);
#else
float sizePercentage = (u_symbolPercentRange.x + u_symbolPercentRange.y) / 2.0;
#endif
vec2 size = u_symbolSize * sizePercentage;
vec2 pos = a_pos + a_offset * size;
v_pos = a_offset;
gl_Position = vec4(u_dvsMat3 * vec3(pos * u_coordScale, 1.0), 1.0);
}`}},stencil:{"stencil.frag":`void main() {
gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}`,"stencil.vert":`attribute vec2 a_pos;
uniform mat3 u_worldExtent;
void main() {
gl_Position = vec4(u_worldExtent * vec3(a_pos, 1.0), 1.0);
}`},test:{"TestShader.common.glsl":`#ifndef RETURN_RED
varying    vec4      v_color;
#endif
varying    vec2      v_offset;`,"TestShader.frag":`precision highp float;
#include <test/TestShader.common.glsl>
void main() {
if (v_offset.x > -.5 && v_offset.y > -.5 && v_offset.x < .5 && v_offset.y < .5) {
discard;
}
#ifdef RETURN_RED
gl_FragColor = vec4(1., 0., 0., 1.);
#else
gl_FragColor = v_color;
#endif
}`,"TestShader.vert":`const float POS_PRECISION_FACTOR = 10.;
const float OFFSET_PRECISION_FACTOR = 10.;
const float SIZE_PRECISION_FACTOR = 10.;
attribute  vec2      a_pos_packed;
attribute  vec2      a_offset_packed;
attribute  float     a_size_packed;
#ifdef DATA_DRIVEN_COLOR
const float u_dataDrivenColor_validValues[4] = float[4](0., 0., 1., 0.);
uniform    vec4      u_dataDrivenColor_colorFallback;
uniform    vec4      u_dataDrivenColor_color;
#endif
uniform    float     u_view_zoomLevel;
#include <test/TestShader.common.glsl>
#ifdef DATA_DRIVEN_COLOR
vec4 getColor(float value) {
int index = -1;
for (int i = 0; i < 4; i++) {
if (u_dataDrivenColor_validValues[i] == value) {
index = i;
break;
}
}
if (index == -1) {
return u_dataDrivenColor_colorFallback;
}
return u_dataDrivenColor_color;
}
#endif
void main() {
vec2  a_pos = a_pos_packed / POS_PRECISION_FACTOR;
vec2  a_offset = a_offset_packed / OFFSET_PRECISION_FACTOR;
float a_size = a_size_packed / SIZE_PRECISION_FACTOR;
vec4 color = vec4(1., 0., 0., 1.);
#ifdef DATA_DRIVEN_COLOR
color = getColor(1.);
#endif
vec2 offsetScaled = a_offset * a_size;
vec4 pos = vec4(a_pos.xy + offsetScaled, 0., 1.);
gl_Position = pos;
#ifndef RETURN_RED
v_color = color;
#endif
v_offset = a_offset;
}`},tileInfo:{"tileInfo.frag":`uniform mediump sampler2D u_texture;
varying mediump vec2 v_tex;
void main(void) {
lowp vec4 color = texture2D(u_texture, v_tex);
color.rgb *= color.a;
gl_FragColor = color;
}`,"tileInfo.vert":`attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_coord_ratio;
uniform mediump vec2 u_delta;
uniform mediump vec2 u_dimensions;
varying mediump vec2 v_tex;
void main() {
mediump vec2 offset = u_coord_ratio * vec2(u_delta + a_pos * u_dimensions);
vec3 v_pos = u_dvsMat3 * vec3(offset, 1.0);
gl_Position = vec4(v_pos.xy, 0.0, 1.0);
v_tex = a_pos;
}`},util:{"atan2.glsl":`float atan2(in float y, in float x) {
float t0, t1, t2, t3, t4;
t3 = abs(x);
t1 = abs(y);
t0 = max(t3, t1);
t1 = min(t3, t1);
t3 = 1.0 / t0;
t3 = t1 * t3;
t4 = t3 * t3;
t0 =         - 0.013480470;
t0 = t0 * t4 + 0.057477314;
t0 = t0 * t4 - 0.121239071;
t0 = t0 * t4 + 0.195635925;
t0 = t0 * t4 - 0.332994597;
t0 = t0 * t4 + 0.999995630;
t3 = t0 * t3;
t3 = (abs(y) > abs(x)) ? 1.570796327 - t3 : t3;
t3 = x < 0.0 ?  3.141592654 - t3 : t3;
t3 = y < 0.0 ? -t3 : t3;
return t3;
}`,"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`}};function jt(f){return function(e){let t=f;return e.split("/").forEach(n=>{t&&(t=t[n])}),t}}const Kt=new pt(jt(Zt));function ie(f){return Kt.resolveIncludes(f)}const he={vertexShader:ie("background/background.vert"),fragmentShader:ie("background/background.frag")},Xt=()=>vt("clip",[{location:0,name:"a_pos",count:2,type:M.SHORT}]);let qt=class extends U{constructor(){super(...arguments),this._color=B(0,1,0,1)}dispose(){this._program&&this._program.dispose()}prepareState({context:e}){e.setStencilTestEnabled(!0),e.setBlendingEnabled(!1),e.setFaceCullingEnabled(!1),e.setColorMask(!1,!1,!1,!1),e.setStencilOp(7680,7680,7681),e.setStencilWriteMask(255),e.setStencilFunction(519,0,255)}draw(e,t){const{context:n,state:i,requestRender:o,allowDelayedRender:a}=e,r=Xt(),s=t.getVAO(n,i,r.bufferLayout);s.indexBuffer!=null&&(this._program??=ee(n,he,s.locations),!a||o==null||this._program.compiled?(n.useProgram(this._program),this._program.setUniform2fv("u_coord_range",[1,1]),this._program.setUniform4fv("u_color",this._color),this._program.setUniformMatrix3fv("u_dvsMat3",i.displayMat3),n.bindVAO(s),n.drawElements(A.TRIANGLES,s.indexBuffer.size,M.UNSIGNED_INT,0),n.bindVAO(null)):o())}};const Jt=[new te("position",2,M.UNSIGNED_SHORT,0,4)],ue=[new te("a_pos",2,M.BYTE,0,2)],ni=[new te("a_pos",2,M.BYTE,0,4),new te("a_tex",2,M.BYTE,2,4)],ii=gt(Jt);let Qt=class extends U{constructor(){super(...arguments),this._color=B(1,0,0,1),this._initialized=!1}dispose(){this._solidProgram&&(this._solidProgram.dispose(),this._solidProgram=null),this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null)}prepareState({context:e}){e.setDepthWriteEnabled(!1),e.setDepthTestEnabled(!1),e.setStencilTestEnabled(!0),e.setBlendingEnabled(!1),e.setColorMask(!1,!1,!1,!1),e.setStencilOp(7680,7680,7681),e.setStencilWriteMask(255)}draw(e,t){const{context:n,requestRender:i,allowDelayedRender:o}=e;this._initialized||this._initialize(n),!o||i==null||this._solidProgram.compiled?(n.setStencilFunctionSeparate(1032,516,t.stencilRef,255),n.bindVAO(this._solidVertexArrayObject),n.useProgram(this._solidProgram),this._solidProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.displayViewScreenMat3),this._solidProgram.setUniform2fv("u_coord_range",[t.rangeX,t.rangeY]),this._solidProgram.setUniform1f("u_depth",0),this._solidProgram.setUniform4fv("u_color",this._color),n.drawArrays(A.TRIANGLE_STRIP,0,4),n.bindVAO(null)):i()}_initialize(e){if(this._initialized)return!0;const t=new Int8Array([0,0,1,0,0,1,1,1]),n=new j(e,ue,t),i=new $(e,n);return this._solidProgram=ee(e,he,i.locations),this._solidVertexArrayObject=i,this._initialized=!0,!0}},en=class extends He{constructor(e,t,n,i,o,a,r=o,s=a){super(),this.tileDebugInfoTexture=null,this.debugInfo={display:{length:0,minOrderedLength:0,minUnorderedLength:0,triangleCount:0},memory:{bytesUsed:0,bytesReserved:0}},this._destroyed=!1,this.key=new Lt(e),this.resolution=t,this.x=n,this.y=i,this.width=o,this.height=a,this.rangeX=r,this.rangeY=s}destroy(){super.destroy(),this.tileDebugInfoTexture&&(this.tileDebugInfoTexture.dispose(),this.tileDebugInfoTexture=null),this._destroyed=!0}get debugSlot(){let e=this;for(;e.parent!==this._stage;){if(!e.parent)return 0;e=e.parent}return this._stage.children.indexOf(e)}setTransform(e){const t=this.resolution/(e.resolution*e.pixelRatio),n=this.transforms.tileMat3,[i,o]=e.toScreenNoRotation([0,0],[this.x,this.y]),a=this.width/this.rangeX*t,r=this.height/this.rangeY*t;Ne(n,a,0,0,0,r,0,i,o,1),le(this.transforms.displayViewScreenMat3,e.displayViewMat3,n)}get destroyed(){return this._destroyed}};const Ee=k(),ae=Et();class tn extends en{constructor(e,t,n,i){super(e,t,n,i,ne,ne)}destroy(){super.destroy()}setTransform(e){const t=this.resolution/e.resolution,n=this.transforms.tileMat3,[i,o]=e.toScreenNoRotation([0,0],[this.x,this.y]),a=this.width/this.rangeX*t,r=this.height/this.rangeY*t;Ne(n,a,0,0,0,r,0,i,o,1),le(this.transforms.displayViewScreenMat3,e.displayViewMat3,n);const s=St(ce(),a,0,0,r,i,o);Tt(this.transforms.labelMat2d,e.viewMat2d,s);const l=[0,0];e.toScreen(l,[this.x,this.y]);const c=this.transforms.tileUnitsToPixels;at(c),rt(c,c,l),st(c,c,Math.PI*e.rotation/180),lt(c,c,[a,r,1])}_createTransforms(){return{labelMat2d:ce(),tileMat3:k(),displayViewScreenMat3:k(),tileUnitsToPixels:k()}}containsScreenPoint(e,t,n){const i=le(Ee,e.viewMat3,this.transforms.tileMat3),o=ct(Ee,i);if(o==null)return!0;It(ae,...t,1);const a=bt(ae,ae,o),r=n*(this.resolution/e.resolution);return a[0]>=-r&&a[0]<this.width+r&&a[1]>=-r&&a[1]<this.height+r}}let F=class qe{constructor(e){if(this.next=null,!Array.isArray(e))return void(this.data=e);this.data=e[0];let t=this;for(let n=1;n<e.length;n++)t.next=new qe([e[n]]),t=t.next}*values(){let e=this;for(;e;)yield e.data,e=e.next}forEach(e){let t=this;for(;t;)e(t.data),t=t.next}get last(){return this.next?this.next.last:this}},Je=class{constructor(e){this._head=null,e!=null&&(this._head=new F(e))}get head(){return this._head}maxAvailableSpace(){if(this._head==null)return 0;let e=0;return this._head.forEach(t=>{const n=t.end-t.start;e=Math.max(e,n)}),e}firstFit(e){if(this._head==null)return null;let t=null,n=this._head;for(;n;){const i=n.data.end-n.data.start;if(i===e)return t?t.next=n.next:this._head=n.next,n.data.start;if(i>e){const o=n.data.start;return n.data.start+=e,o}t=n,n=n.next}return null}free(e,t){const n=e+t;if(this._head==null){const r=new F({start:e,end:n});return void(this._head=r)}if(n<=this._head.data.start){if(n===this._head.data.start)return void(this._head.data.start-=t);const r=new F({start:e,end:n});return r.next=this._head,void(this._head=r)}let i=this._head,o=i.next;for(;o;){if(o.data.start>=n){if(i.data.end===e){if(i.data.end+=t,i.data.end===o.data.start){const s=o.data.end-o.data.start;return i.data.end+=s,void(i.next=o.next)}return}if(o.data.start===n)return void(o.data.start-=t);const r=new F({start:e,end:n});return r.next=i.next,void(i.next=r)}i=o,o=o.next}if(e===i.data.end)return void(i.data.end+=t);const a=new F({start:e,end:n});i.next=a}clear(){this._head=null}};function nn(f,e){return f<<16|255&e}function on(f){return 255&f}let K=class{constructor(e,t,n,i,o){this.instance=e,this.materialKey=t,this.target=n,this.start=i,this.count=o}get textureKey(){return on(this.materialKey)}get indexEnd(){return this.start+this.count}extend(e){this.count+=e}render(e){this.instance.techniqueRef.render(e,this)}getStencilReference(){return this.target.stencilRef}getAttributePrecisionPackFactors(){const e=this.instance.instanceId;return this.target.getMesh(e).getAttributePrecisionPackFactors()}draw(e,t){yt(e)?this.drawCompute(e.context,t):this.drawGeometry(e.context,t)}drawCompute(e,t){const n=this.instance.instanceId,i=this.target.getMesh(n).getComputeVAO(e,t),o=this.start*Uint32Array.BYTES_PER_ELEMENT/3;e.bindVAO(i,t.locations),e.drawElements(A.POINTS,this.count/3,M.UNSIGNED_INT,o),e.bindVAO(null)}drawGeometry(e,t){const n=this.instance.instanceId,i=this.target.getMesh(n).getGeometryVAO(e,t),o=this.start*Uint32Array.BYTES_PER_ELEMENT;e.bindVAO(i,t.locations),e.drawElements(A.TRIANGLES,this.count,M.UNSIGNED_INT,o),e.bindVAO(null)}},an=class Qe{constructor(){this._length=0,this._minOrderedLength=0,this._materialKeys=new Set}static fromDisplayEntities(e,t,n,i){const o=new Qe;for(const a of e.values())for(const r of a.records){const s=n.getInstance(r.instanceId),l=nn(s.instanceId,r.textureKey);o.addRecord(s,l,r.indexStart,r.indexCount,r.vertexStart,r.vertexCount,t,i)}return o}get length(){return this._length}get minOrderedLength(){return this._minOrderedLength}get minUnorderedLength(){return this._materialKeys.size}get usedMemory(){return this._length?5*this._length*zt:0}render(e,t){const{drawPhase:n}=e;for(const i of this.infos()){const o=i.instance.techniqueRef;o.drawPhase&n&&(t==null||o.type===t)&&i.render(e)}}addRecord(e,t,n,i,o,a,r,s){let l=n,c=i;if(c||(l=o,c=a),!c)return;if(this._head==null){const S=new K(e,t,r,l,c);return this._head=new F(S),this._tail=this._head,this._length++,void this._minOrderedLength++}if(s===1)return this._insert(e,t,r,l,c,this._tail,null);let _=null,u=this._head;const x=e.instanceId,d=e.techniqueRef.symbologyPlane;if(s===2&&(d===2||d===3))return this._insert(e,t,r,l,c,this._tail,null);for(;u;){const S=u.data.instance,p=S.instanceId,O=S.techniqueRef.symbologyPlane,b=_?.data.instance.instanceId;if(d<O||x===b&&x!==p)return this._insert(e,t,r,l,c,_,u);_=u,u=u.next}this._insert(e,t,r,l,c,_,null)}*infos(){if(this._head!=null)for(const e of this._head.values())yield e}_insert(e,t,n,i,o,a,r){if(a==null&&r==null){const s=new K(e,t,n,i,o);return this._head=new F(s),this._tail=this._head,this._length++,void this._minOrderedLength++}return t!==this._tail.data.materialKey&&this._minOrderedLength++,this._materialKeys.add(t),a==null&&r!=null?this._insertAtHead(e,t,n,i,o,r):a!=null&&r==null?this._insertAtEnd(e,t,n,i,o,a):a!=null&&r!=null?this._insertAtMiddle(e,t,n,i,o,a,r):void 0}_insertAtHead(e,t,n,i,o,a){const r=i+o;if(t===a.data.materialKey&&n===a.data.target&&r===a.data.start)a.data.start=i,a.data.count+=o;else{const s=new K(e,t,n,i,o);this._head=new F(s),this._head.next=a,this._length++}}_insertAtEnd(e,t,n,i,o,a){if(a.data.materialKey===t&&a.data.indexEnd===i)a.data.count+=o;else{const r=new K(e,t,n,i,o);this._tail=new F(r),a.next=this._tail,this._length++}}_insertAtMiddle(e,t,n,i,o,a,r){const s=i+o;if(a.data.materialKey===t&&a.data.target===n&&a.data.indexEnd===i)a.data.count+=o,a.data.materialKey===r.data.materialKey&&a.data.target===r.data.target&&a.data.indexEnd===r.data.start&&(a.data.count+=r.data.count,a.next=r.next,this._length--);else if(t===r.data.materialKey&&n===r.data.target&&s===r.data.start)r.data.start=i,r.data.count+=o;else{const l=new K(e,t,n,i,o),c=new F(l);a.next=c,c.next=r,this._length++}}},rn=class{constructor(e){this._indexOnly=e,this.vertex={count:0,operations:[]},this.index={count:0,operations:[]}}copyRecord(e){let t=0;this._indexOnly||(t=this.vertex.count-e.vertexStart,this.vertex.operations.push({srcFrom:e.vertexStart,dstFrom:this.vertex.count,count:e.vertexCount,mutate:0}),e.vertexStart=this.vertex.count,this.vertex.count+=e.vertexCount);let n=!1;if(this._indexOnly&&this.index.operations.length>=1){const i=this.index.operations[this.index.operations.length-1];i.srcFrom+i.count===e.indexStart&&(i.count+=e.indexCount,n=!0)}n||this.index.operations.push({srcFrom:e.indexStart,dstFrom:this.index.count,count:e.indexCount,mutate:t}),e.indexStart=this.index.count,this.index.count+=e.indexCount}};const Oe=H("esri-2d-log-allocations");let Ae=class et{static create(e,t){const n=t.acquireUint32Array(e);return new et(n,t)}constructor(e,t){this._array=e,this._pool=t}get array(){return this._array}get length(){return this._array.length}getUint32View(e,t){return new Uint32Array(this._array.buffer,e+this._array.byteOffset,t)}expand(e){if(e<=this._array.byteLength)return;const t=this._pool.acquireUint32Array(e);t.set(this._array),this._pool.releaseUint32Array(this._array),this._array=t}destroy(){this._pool.releaseUint32Array(this._array)}},Pe=class tt{constructor(){this._data=new ArrayBuffer(tt.BYTE_LENGTH),this._freeList=new Je({start:0,end:this._data.byteLength})}static get BYTE_LENGTH(){return 16e6}get buffer(){return this._data}acquireUint32Array(e){const t=this._freeList.firstFit(e);return t==null?null:new Uint32Array(this._data,t,e/Uint32Array.BYTES_PER_ELEMENT)}releaseUint32Array(e){this._freeList.free(e.byteOffset,e.byteLength)}},ci=class{constructor(){this._pages=[],this._pagesByBuffer=new Map,this._bytesAllocated=0}destroy(){this._pages=[],this._pagesByBuffer=null}get _bytesTotal(){return this._pages.length*Pe.BYTE_LENGTH}acquireUint32Array(e){return this._bytesAllocated+=e,Oe&&console.log(`Allocating ${e}, (${this._bytesAllocated} / ${this._bytesTotal})`),new Uint32Array(e/Uint32Array.BYTES_PER_ELEMENT)}releaseUint32Array(e){this._bytesAllocated-=e.byteLength,Oe&&console.log(`Freeing ${e.byteLength}, (${this._bytesAllocated} / ${this._bytesTotal})`)}_addPage(){const e=new Pe;return this._pages.push(e),this._pagesByBuffer.set(e.buffer,e),e}};const sn=1.25,Me=32767,ln=Me<<16|Me;class re{constructor(e,t,n,i){this.bufferType=e,this.size=t,this.strideInt=n,this._pool=i,this._cpu=Ae.create(t*n*Uint32Array.BYTES_PER_ELEMENT,this._pool),this.dirty={start:1/0,end:0},this.memoryStats={bytesUsed:0,bytesReserved:t*n*Uint32Array.BYTES_PER_ELEMENT},this.clear()}get elementSize(){return this._cpu.length/this.strideInt}get intSize(){return this.fillPointer*this.strideInt}get byteSize(){return this.intSize*Uint32Array.BYTES_PER_ELEMENT}get invalidated(){return this.bufferSize>0&&!this._gpu}get invalidatedComputeBuffer(){return this.bufferSize>0&&!this._gpuComputeTriangles}get usedMemory(){return this._cpu.array.byteLength}invalidate(){this._invalidateTriangleBuffer(),this._gpu?.dispose(),this._gpu=null}_invalidateTriangleBuffer(){this._gpuComputeTriangles?.dispose(),this._gpuComputeTriangles=null}destroy(){this._gpu?.dispose(),this._gpuComputeTriangles?.dispose(),this._cpu?.destroy()}clear(){this.dirty.start=1/0,this.dirty.end=0,this.freeList=new Je({start:0,end:this._cpu.length/this.strideInt}),this.fillPointer=0}ensure(e){if(!(this.maxAvailableSpace()>=e)&&e*this.strideInt>this._cpu.length-this.fillPointer){this.invalidate();const t=this._cpu.length/this.strideInt,n=Math.round((t+e)*sn),i=n*this.strideInt;this._cpu.expand(i*Uint32Array.BYTES_PER_ELEMENT),this.freeList.free(t,n-t),this.memoryStats.bytesReserved+=(n-t)*this.strideInt*Uint32Array.BYTES_PER_ELEMENT}}setU32(e,t){this._cpu.array[e]!==t&&(this._cpu.array[e]=t,this.dirty.start=Math.min(e,this.dirty.start),this.dirty.end=Math.max(e+1,this.dirty.end))}setF32(e,t){this.setU32(e,xe(t))}setF32Range(e,t,n){const i=xe(n);this._cpu.array.fill(i,e,t),this.dirty.start=Math.min(e,this.dirty.start),this.dirty.end=Math.max(t,this.dirty.end)}getF32(e){return ht(this._cpu.array[e])}getVertexBuffer(e,t){return this.bufferType==="vertex"?this._getGPUBuffer(e,t):null}getIndexBuffer(e,t){return this.bufferType==="index"?this._getGPUBuffer(e,null,t):null}_getGPUBuffer(e,t,n=!1){if(this.bufferSize){if(n){if(this.bufferType!=="index")throw new Error("Tried to get triangle buffer, but target is not an index buffer");return this._gpuComputeTriangles==null&&(this._gpuComputeTriangles=this._createComputeBuffer(e)),this._gpuComputeTriangles}return this._gpu??=this.bufferType==="index"?fe.createIndex(e,35048,this._cpu.array):t&&new j(e,t,this._cpu.array,35048),this._gpu}}getView(e,t){return this._cpu.getUint32View(e,t/Uint32Array.BYTES_PER_ELEMENT)}get bufferSize(){return this._cpu.length/this.strideInt}maxAvailableSpace(){return this.freeList.maxAvailableSpace()}insert(e,t,n,i){const o=n*this.strideInt;if(!o)return 0;const a=t*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,r=new Uint32Array(ft(e),a,o),s=this.freeList.firstFit(n);ge(s,"First fit region must be defined");const l=s*this.strideInt,c=o;if(this._cpu.array.set(r,l),i!==0)for(let _=0;_<r.length;_++)this._cpu.array[_+l]+=i;return this.dirty.start=Math.min(this.dirty.start,l),this.dirty.end=Math.max(this.dirty.end,l+c),this.fillPointer=Math.max(this.fillPointer,l+c),this.memoryStats.bytesUsed+=n*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,s}copyFrom(e,t,n,i,o){const a=n*this.strideInt;if(!a)return 0;const r=t*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,s=e._cpu.getUint32View(r,a),l=this.freeList.firstFit(n);ge(l,"First fit region must be defined");const c=l*this.strideInt,_=a;if(this._cpu.array.set(s,c),i!==0)for(let u=0;u<a;u++)this._cpu.array[c+u*this.strideInt+o]+=i;return this.dirty.start=Math.min(this.dirty.start,c),this.dirty.end=Math.max(this.dirty.end,c+_),this.fillPointer=Math.max(this.fillPointer,c+_),this.memoryStats.bytesUsed+=n*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,l}free(e,t,n){const i=e*this.strideInt,o=(e+t)*this.strideInt;if(n===!0)for(let a=e;a!==e+t;a++)this._cpu.array[a*this.strideInt]=ln;this.dirty.start=Math.min(this.dirty.start,i),this.dirty.end=Math.max(this.dirty.end,o),this.freeList.free(e,t),this.memoryStats.bytesUsed-=t*this.strideInt*Uint32Array.BYTES_PER_ELEMENT}upload(){if(this.dirty.end){if(this._invalidateTriangleBuffer(),this._gpu==null)return this.dirty.start=1/0,void(this.dirty.end=0);this._gpu.setSubData(this._cpu.array,this.dirty.start,this.dirty.start,this.dirty.end),this.dirty.start=1/0,this.dirty.end=0}}reshuffle(e,t){if(t.length===0)return;const n=this.byteSize,i=e*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,o=n>i,a=this._cpu,r=Ae.create(i,this._pool);o||r.array.set(this._cpu.getUint32View(0,this.intSize));for(const s of t)if(o||s.srcFrom!==s.dstFrom||s.mutate!==0){this.dirty.start=Math.min(this.dirty.start,s.dstFrom*this.strideInt),this.dirty.end=Math.max(this.dirty.end,(s.dstFrom+s.count)*this.strideInt);for(let l=0;l<s.count;l++){const c=(s.dstFrom+l)*this.strideInt,_=(s.srcFrom+l)*this.strideInt;for(let u=0;u<this.strideInt;u++)r.array[c+u]=a.array[_+u]+s.mutate}}this._cpu.destroy(),this._cpu=r,o&&this.invalidate(),this.freeList.clear(),this.memoryStats.bytesUsed=this.memoryStats.bytesReserved=i}_createComputeBuffer(e){const n=new Uint32Array(this.fillPointer/3);for(let i=0;i<this.fillPointer;i+=3)n[i/3]=this._cpu.array[i];return fe.createIndex(e,35048,n)}}const Z=1e3,de=4,Ce=[{name:"visibility",offset:0,type:M.FLOAT,count:1}],Le={hash:mt(Ce),attributes:Ce,stride:de};function se(f,e){return Fe(f.attributes,(t,n)=>t.name===n.name).filter(t=>e.locations.has(t.name)).map(t=>({name:t.name,type:t.type,count:t.count,divisor:0,normalized:t.normalized??!1,offset:t.offset,stride:f.stride})).sort((t,n)=>e.locations.get(t.name)-e.locations.get(n.name))}function cn(f,e){const t=[],n=Fe(f.attributes,(i,o)=>i.name===o.name).filter(i=>e.locations.has(i.name));for(const i of n){t.push({name:i.name,type:i.type,count:i.count,divisor:0,normalized:i.normalized??!1,offset:i.offset,stride:f.stride});const o=e.computeAttributeMap[i.name];o!=null&&o.length===2&&(t.push({name:o[0],count:i.count,divisor:0,type:i.type,normalized:i.normalized??!1,offset:i.offset+f.stride,stride:f.stride}),t.push({name:o[1],count:i.count,divisor:0,type:i.type,normalized:i.normalized??!1,offset:i.offset+2*f.stride,stride:f.stride}))}return t.sort((i,o)=>e.locations.get(i.name)-e.locations.get(o.name))}class fn{constructor(e,t,n){if(this._bufferPool=e,this._layout=t,this.useVisibility=n,this._invalidatedGeometry=!1,this._invalidatedCompute=!1,this._position=this._layout.attributes.find(i=>i.name==="pos"||i.name==="position"),!this._position)throw new Error("InternalError: Unable to find position attribute")}destroy(){this._indexBuffer=oe(this._indexBuffer),this._vertexBuffer=oe(this._vertexBuffer),this._visibilityBuffer=oe(this._visibilityBuffer),this._computeVAO?.disposeVAOOnly(),this._geometryVAO?.disposeVAOOnly()}get layout(){return this._layout}get usedMemory(){let e=0;return e+=this._indexBuffer.usedMemory,e+=this._vertexBuffer.usedMemory,this._visibilityBuffer!=null&&(e+=this._visibilityBuffer.usedMemory),e}getDrawArgs(e,t,n,i){return i?{primitive:A.POINTS,count:t/3,offset:n/3}:{primitive:e,count:t,offset:n}}getAttributePrecisionPackFactors(){const e={};for(const t of this.layout.attributes)t.packPrecisionFactor&&(e[t.name]=t.packPrecisionFactor);return e}getDebugVertexInfo(e=!1,t){if(!this._vertexBuffer)return null;const n=this._layout,i=n.stride,o=this._vertexBuffer.getView(0,this._vertexBuffer.byteSize),a=[];if(e)if(t==null)console.log("must provide location info to see compute attributes");else for(const u of n.attributes){const x=t.computeAttributeMap[u.name];x!=null&&x.length===2&&(a.push({...u,name:x[0],offset:u.offset+i}),a.push({...u,name:x[1],offset:u.offset+2*i}))}const r=new DataView(o.slice().buffer);let s=o.byteLength/i;e&&(s=this._indexBuffer.fillPointer/3);const l=this._indexBuffer.getView(0,this._indexBuffer.byteSize);let c=0;const _=[];for(let u=0;u<s;u++){e&&(c=l[3*u]*i);const x={};for(const d of[...n.attributes,...a]){let S=`${d.offset} ${d.name}`,p=Ue(r,d,c);if(d.packPrecisionFactor)if(S+=` (precision: ${d.packPrecisionFactor})`,typeof p=="number")p/=d.packPrecisionFactor;else for(let O=0;O<p.length;O++)p[O]/=d.packPrecisionFactor;x[S]=p}c+=i,_.push(x)}return{vertices:_,layout:n}}_ensure(e,t){if(this._vertexBuffer&&this._indexBuffer)this._indexBuffer.ensure(Math.max(e,Z)),this._vertexBuffer.ensure(Math.max(t,Z)),this._visibilityBuffer&&this._visibilityBuffer.ensure(Math.max(t,Z));else{const n=this._layout.stride/Uint32Array.BYTES_PER_ELEMENT;this._indexBuffer=new re("index",Math.max(e,Z),1,this._bufferPool),this._vertexBuffer=new re("vertex",Math.max(t,Z),n,this._bufferPool),this.useVisibility&&(this._visibilityBuffer=new re("vertex",Math.max(t,Z),de/Uint32Array.BYTES_PER_ELEMENT,this._bufferPool))}}append(e){const t=e.layout.stride,n=e.indices.byteLength/Uint32Array.BYTES_PER_ELEMENT,i=e.vertices.byteLength/t;this._ensure(n,i);const{vertices:o,indices:a}=e,r=this._vertexBuffer.insert(o,0,o.byteLength/t,0),s=new Uint32Array(i);return new Float32Array(s.buffer).fill(255),this._visibilityBuffer&&this._visibilityBuffer.insert(s,0,s.byteLength/de,0),{vertexFrom:r,indexFrom:this._indexBuffer.insert(a,0,a.byteLength/4,r)}}setEntityRecordRangeVisibility(e,t,n,i){if(this._visibilityBuffer!=null&&!(t+n>e.length))for(let o=t;o<t+n;o++){const{vertexStart:a,vertexCount:r}=e[o];this._visibilityBuffer.setF32Range(a,a+r,i)}}getEntityRecordVisibility(e,t){if(this._visibilityBuffer==null)return 0;const n=e.records[t];return this._visibilityBuffer.getF32(n.vertexStart)}copyRecordFrom(e,t,n,i){const{indexStart:o,indexCount:a,vertexStart:r,vertexCount:s}=t;this._ensure(a,s);const l=e._position,c=n*(l.packPrecisionFactor??1),_=i*(l.packPrecisionFactor??1),u=l.offset,x=z(c,_),d=this._vertexBuffer.copyFrom(e._vertexBuffer,r,s,x,u);this._visibilityBuffer&&e._visibilityBuffer&&this._visibilityBuffer.copyFrom(e._visibilityBuffer,r,s,0,0);const S=this._indexBuffer.copyFrom(e._indexBuffer,o,a,d-r,0),p=t.clone();return p.vertexStart=d,p.indexStart=S,p.overlaps=0,p}remove(e,t,n,i){this._indexBuffer.free(e,t),this._vertexBuffer.free(n,i),this._visibilityBuffer&&this._visibilityBuffer.free(n,i)}upload(){this._invalidatedGeometry=!0,this._invalidatedCompute=!0}getGeometryVAO(e,t){if(!this._vertexBuffer||!this._indexBuffer||!this._vertexBuffer.bufferSize)return null;if(this._invalidatedGeometry){if((this._vertexBuffer.invalidated||this._indexBuffer.invalidated||this._visibilityBuffer?.invalidated)&&(this._vertexBuffer.invalidate(),this._indexBuffer.invalidate(),this._visibilityBuffer&&this._visibilityBuffer.invalidate(),this._geometryVAO?.disposeVAOOnly(),this._geometryVAO=null),this._vertexBuffer.upload(),this._indexBuffer.upload(),this._visibilityBuffer&&this._visibilityBuffer.upload(),!this._geometryVAO){const n=this._indexBuffer.getIndexBuffer(e,!1),i=new Map([["geometry",this._vertexBuffer.getVertexBuffer(e,se(this.layout,t))]]);this._visibilityBuffer&&i.set("visibility",this._visibilityBuffer.getVertexBuffer(e,se(Le,t))),this._geometryVAO=new $(e,i,n)}this._invalidatedGeometry=!1}return this._geometryVAO}getComputeVAO(e,t){if(!this._vertexBuffer||!this._indexBuffer||!this._vertexBuffer.bufferSize)return null;if(this._invalidatedCompute&&((this._vertexBuffer.invalidated||this._indexBuffer.invalidatedComputeBuffer)&&(this._vertexBuffer.invalidate(),this._indexBuffer.invalidate(),this._visibilityBuffer?.invalidate(),this._computeVAO?.disposeVAOOnly(),this._computeVAO=null),this._vertexBuffer.upload(),this._indexBuffer.upload(),this._visibilityBuffer?.upload(),!this._computeVAO)){const n=this._indexBuffer.getIndexBuffer(e,!0),i=new Map([["geometry",this._vertexBuffer.getVertexBuffer(e,cn(this.layout,t))]]);this._visibilityBuffer&&i.set("visibility",this._visibilityBuffer.getVertexBuffer(e,se(Le,t))),this._computeVAO=new $(e,i,n),this._invalidatedCompute=!1}return this._computeVAO}get memoryStats(){return{bytesUsed:this._vertexBuffer.memoryStats.bytesUsed+this._indexBuffer.memoryStats.bytesUsed,bytesReserved:this._vertexBuffer.memoryStats.bytesReserved+this._indexBuffer.memoryStats.bytesReserved,vertex:this._vertexBuffer.memoryStats,index:this._indexBuffer.memoryStats}}reshuffle(e){this._vertexBuffer&&this._vertexBuffer.reshuffle(e.vertex.count,e.vertex.operations),this._indexBuffer&&this._indexBuffer.reshuffle(e.index.count,e.index.operations),this._visibilityBuffer&&this._visibilityBuffer.reshuffle(e.vertex.count,e.vertex.operations)}}let J=class{constructor(e){this._pos=0,this._buffer=e,this._i32View=new Int32Array(this._buffer),this._f32View=new Float32Array(this._buffer)}readInt32(){return this._i32View[this._pos++]}readF32(){return this._f32View[this._pos++]}};function ze(f){return f?{entities:q(new J(f.entities),X),vertexData:f.data.map(un)}:null}function un(f){const e=f.layout.stride,t=new DataView(f.vertices),n=[],i=f.vertices.byteLength/e;let o=0;for(let r=0;r<i;r++){const s={};for(const l of f.layout.attributes){let c=`${l.offset} ${l.name}`,_=Ue(t,l,o);if(l.packPrecisionFactor)if(c+=` (precision: ${l.packPrecisionFactor})`,typeof _=="number")_/=l.packPrecisionFactor;else for(let u=0;u<_.length;u++)_[u]/=l.packPrecisionFactor;s[c]=_}o+=e,n.push(s)}const a=f.metrics?q(new J(f.metrics),Ye)??[]:[];return{vertices:n,layout:f.layout,metrics:a}}const dn=()=>ve.getLogger("esri.views.2d.engine.webgl.FeatureTile");let _n=0;class vn extends tn{constructor(e,t,n,i,o,a,r=!1){super(e,t,n,i),this._fader=o,this._labelInstanceId=a,this._meshes=new Map,this._entities=[],this._entityIndex=new Map,this._invalidated=!1,this._nextUploadAllowed=!1,this.tileAge=_n++,this._metrics=[],this._metricsVisibility=new Set,this._entityIds=new Set,this._entityIdsFromBuffer=new Set,this._attributeEpoch=0,this._encounteredEnd=!1,this._decluttered=!1,this._objectIdMap=null,this.isCoverage=!1,this.rendering=!1,this.visible=!0,this.transforms.labelMat2d=ce(),this.transforms.tileUnitsToPixels=k(),this.enableDeferredUploads=r}destroy(){super.destroy(),this.clear()}clear(){for(const e of this._meshes.values())e.destroy();this._meshes.clear(),this._entities=[],this._fader?.removeFeatureTileMetrics(this,this._metrics),this._metrics=[],this._displayList=null,this._invalidated=!0,this._entityIds.clear(),this._nextUploadAllowed=!0}beforeRender(e){super.beforeRender(e),this._needsReshuffle&&e.reshuffleManager.schedule(this)}tryReady(e){const t=this._invalidated&&!this._uploadAllowed;return!(this.isReady||t||!this._encounteredEnd||!(e>=this._attributeEpoch))&&(H("esri-2d-update-debug")&&console.debug(`Tile[${this.key.id}] FeatureTile.ready [epoch=${e}]`),this.ready(),this.requestRender(),this.decluttered=!1,!0)}get symbols(){const e=new Map;for(const t of this._metrics)e.get(t.labelClassId)||e.set(t.labelClassId,[]),e.get(t.labelClassId).push(t);return e}get decluttered(){return this._decluttered}set decluttered(e){this._decluttered=e,this.requestRender()}get id(){return this.key.id}get hasData(){return!!this._meshes.size}get hasAnimations(){return!!this._objectIdMap}get needsUpload(){return this._invalidated}get usedMemory(){let e=0;for(const t of this._meshes.values())e+=t.usedMemory;if(this._entities.length){let t=0;const n=Math.min(this._entities.length,10);for(let o=0;o<n;o++)t+=this._entities[0].records.length;const i=t/n;e+=X.estimateMemory(i)*this._entities.length,e+=4*this._entities.length}return e+=25*this._entityIndex.size,e+=18*this._entityIds.size,e+=25*this._entityIdsFromBuffer.size,this._displayList&&(e+=this._displayList.usedMemory),this._objectIdMap&&(e+=25*this._entities.length),e}get _uploadAllowed(){return!this.enableDeferredUploads||this._nextUploadAllowed}get _hasMetrics(){return this._metrics.length>0}upload(){this._nextUploadAllowed=!0}getDisplayList(e,t){if(this._uploadAllowed&&this._invalidated){this._entities.sort((n,i)=>{const o=i.sortKey,a=n.sortKey;return a===o?n.id-i.id:a-o}),t===0&&this.reshuffle(!0),this._displayList=an.fromDisplayEntities(this._entities,this,e,t);for(const n of this._meshes.values())n.upload();this.debugInfo.display.length=this._displayList.length,this.debugInfo.display.minOrderedLength=this._displayList.minOrderedLength,this.debugInfo.display.minUnorderedLength=this._displayList.minUnorderedLength,this.requestRender(),this._invalidated=!1,this._nextUploadAllowed=!1}return this._displayList}getMesh(e){if(!this._meshes.has(e))throw new Error(`InternalError: Unable to find VAO for instance: ${e}`);return this._meshes.get(e)}getSortKeys(e){const t=new Map;for(const{id:n,sortKey:i}of this._entities)if(e.has(n)&&t.set(n,i),t.size===e.size)break;return t}onMessage(e){if(e.objectIdMap)for(const t in e.objectIdMap)this._objectIdMap||(this._objectIdMap={}),this._objectIdMap[t]=e.objectIdMap[t];switch(e.type){case"append":this._onAppendMessage(e);break;case"update":this._onUpdateMessage(e)}if(this._aggregateMemoryStats(),this.requestRender(),e.end){if(H("esri-2d-update-debug")&&console.debug(`Tile[${this.key.id}] FeatureTile.end [epoch=${e.attributeEpoch}]`),!e.attributeEpoch)throw new Error("InternalError: Attribute epoch not defined.");this._attributeEpoch=e.attributeEpoch,this._encounteredEnd=!0}this._writeLabelVisibilityToMesh()}_onAppendMessage(e){if(H("esri-2d-update-debug")&&console.debug(`Tile[${this.key.id}] FeatureTile.append`,{append:ze(e?.append)}),e.clear&&this.clear(),!e.append)return;const t=q(new J(e.append.entities),X);this._insert(t,e.append.data,!1)}_onUpdateMessage(e){H("esri-2d-update-debug")&&console.debug(`Tile[${this.key.id}] FeatureTile.update`,{isPixelBuffer:e.isPixelBuffer,modify:ze(e.modify),remove:e.remove});const t=q(new J(e.modify.entities),X),n=t.map(a=>a.id),i=e.isPixelBuffer??!1,o=[...e.remove,...n];i?this._removeByIdsFromBuffer(o):this._removeByIds(o),this._insert(t,e.modify.data,i)}reshuffle(e=!1){if(this.destroyed)return;const t=new Map;for(const n of this._entities)for(const i of n.records){const o=this._meshes.get(i.instanceId);let a=t.get(o);a||(a=new rn(e),t.set(o,a)),a.copyRecord(i)}for(const[n,i]of t)n.reshuffle(i);this._invalidated=!0,this._aggregateMemoryStats(),H("esri-2d-update-debug")&&dn().info(`Tile ${this.key.id} was reshuffled.`)}copyPixelBufferedEntitesFrom(e,t,n,i){const o=n*ne,a=i*ne;for(const r of e._entities){let s=null;for(const l of r.records)if(l.overlaps&t){const c=e.getMesh(l.instanceId),_=this._ensureMesh(l.instanceId,c.layout,c.useVisibility).copyRecordFrom(c,l,o,a);s||(s=new X(r.id,r.sortKey),this._entityIdsFromBuffer.add(r.id),this._entityIndex.set(s.id,s),this._entities.push(s)),s.records.push(_)}}this._invalidated=!0}get metricsVisibility(){return this._metricsVisibility}copyMetricsVisibility(e){for(const t of e)this._metricsVisibility.add(t);this._writeLabelVisibilityToMesh()}updateLabelVisibility(){this._metricsVisibility.clear();for(const e of this._metrics)e.uniqueSymbol.show&&e.selectedForRendering&&this._metricsVisibility.add(e.hash);this._writeLabelVisibilityToMesh()}_writeLabelVisibilityToMesh(){const e=this._meshes.get(this._labelInstanceId);if(e&&this._hasMetrics){for(const t of this._metrics){const n=this._entityIndex.get(t.id);if(!n)continue;const i=this._metricsVisibility.has(t.hash);e.setEntityRecordRangeVisibility(n.records,t.recordStart,t.recordCount,i?0:255)}this._invalidated=!0}}_ensureMesh(e,t,n){return this._meshes.has(e)||this._meshes.set(e,new fn(this._stage.bufferPool,t,n)),this._meshes.get(e)}_insert(e,t,n){if(!e.length)return;this._removeDuplicatedBufferedEntites(e);const i=this._insertVertexData(t);for(const o of e){for(const a of o.records)a.updateBaseOffsets(i.get(a.instanceId));n?this._tryInsertBufferedEntity(o):this._insertEntity(o)}this._invalidated=!0}_insertMetrics(e){for(const t of e)t.tile=this;this._metrics.push(...e),this._fader?.insertFeatureTileMetrics(this,e)}_insertVertexData(e){const t=new Map;for(const n of e){const{instanceId:i,layout:o}=n,a=o.attributes.some(s=>s.name==="visibility"),r=this._ensureMesh(i,o,a).append(n);if(n.metrics){const s=q(new J(n.metrics),Ye)??[];this._insertMetrics(s)}t.set(i,r)}return t}_insertEntity(e){H("esri-2d-update-debug")&&this._entityIds.has(e.id)&&console.error(`Tile ${this.key.id} insertEntity: Already have entityId ${e.id}`),this._entityIds.add(e.id),this._entityIndex.set(e.id,e),this._entities.push(e)}_tryInsertBufferedEntity(e){this._entityIds.has(e.id)?this._removeRecordsFromMesh(e.records):(this._entityIdsFromBuffer.add(e.id),this._entityIndex.set(e.id,e),this._entities.push(e))}_removeDuplicatedBufferedEntites(e){if(!this._entityIdsFromBuffer.size)return;const t=[];for(const n of e)this._entityIdsFromBuffer.has(n.id)&&t.push(n.id);this._removeByIds(t)}_removeByIdsFromBuffer(e){this._removeByIds(e.filter(t=>this._entityIdsFromBuffer.has(t)))}_removeByIds(e){if(e.length===0)return;const t=new Set(e),n=[];for(const o of this._entities)t.has(o.id)?(this._remove(o),this._entityIndex.delete(o.id)):n.push(o);this._entities=n;const i=this._metrics.filter(o=>t.has(o.displayId));this._metrics=this._metrics.filter(o=>!t.has(o.displayId)),this._fader?.removeFeatureTileMetrics(this,i),this._invalidated=!0}_remove(e){this._removeRecordsFromMesh(e.records),this._entityIds.delete(e.id),this._entityIdsFromBuffer.delete(e.id)}_removeRecordsFromMesh(e){for(const t of e){const{instanceId:n,indexStart:i,indexCount:o,vertexStart:a,vertexCount:r}=t;this._meshes.get(n)?.remove(i,o,a,r)}}_aggregateMemoryStats(){this.debugInfo.memory.bytesUsed=0,this.debugInfo.memory.bytesReserved=0;for(const e of this._meshes.values())this.debugInfo.memory.bytesUsed+=e.memoryStats.bytesUsed,this.debugInfo.memory.bytesReserved+=e.memoryStats.bytesReserved}get _needsReshuffle(){if(this.destroyed)return!1;const{bytesUsed:e,bytesReserved:t}=this.debugInfo.memory,n=e/t,{minOrderedLength:i,length:o}=this.debugInfo.display;return t>Ot&&n<At||o>Pt&&i/o<Mt}get entityIds(){return this._objectIdMap?this._entities.map(({id:e})=>({objectId:this._objectIdMap[e],displayId:e})):[]}}const hn={vertexShader:ie("tileInfo/tileInfo.vert"),fragmentShader:ie("tileInfo/tileInfo.frag")},De=512,_e=512,G=16,R=8,mn=(_e-2*R)/5;let pn=class extends U{constructor(){super(...arguments),this._color=B(1,0,0,1)}dispose(){this._outlineProgram?.dispose(),this._outlineProgram=null,this._tileInfoProgram?.dispose(),this._tileInfoProgram=null,this._outlineVertexArrayObject?.dispose(),this._outlineVertexArrayObject=null,this._tileInfoVertexArrayObject?.dispose(),this._tileInfoVertexArrayObject=null,this._ctx=null}prepareState({context:e}){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(1,771,1,771),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!1)}draw(e,t){const{context:n,requestRender:i,allowDelayedRender:o}=e;if(!t.isReady&&t instanceof vn&&t.hasData)return;if(this._loadWGLResources(n),o&&i!=null&&(!this._outlineProgram.compiled||!this._tileInfoProgram.compiled))return void i();n.bindVAO(this._outlineVertexArrayObject),n.useProgram(this._outlineProgram),this._outlineProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.displayViewScreenMat3),this._outlineProgram.setUniform2f("u_coord_range",t.rangeX,t.rangeY),this._outlineProgram.setUniform1f("u_depth",0),this._outlineProgram.setUniform4fv("u_color",this._color),n.drawArrays(A.LINE_STRIP,0,4);const a=this._getTexture(n,t);a&&(n.bindVAO(this._tileInfoVertexArrayObject),n.useProgram(this._tileInfoProgram),n.bindTexture(a,0),this._tileInfoProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.displayViewScreenMat3),this._tileInfoProgram.setUniform1f("u_depth",0),this._tileInfoProgram.setUniform2f("u_coord_ratio",t.rangeX/t.width,t.rangeY/t.height),this._tileInfoProgram.setUniform2f("u_delta",0,0),this._tileInfoProgram.setUniform2f("u_dimensions",a.descriptor.width,a.descriptor.height),n.drawArrays(A.TRIANGLE_STRIP,0,4)),n.bindVAO(null)}_loadWGLResources(e){if(this._outlineProgram&&this._tileInfoProgram)return;const t=new Int8Array([0,0,1,0,1,1,0,1]),n=new j(e,ue,t);this._outlineVertexArrayObject=new $(e,n),this._outlineProgram=ee(e,he,this._outlineVertexArrayObject.locations);const i=new Int8Array([0,0,1,0,0,1,1,1]),o=new j(e,ue,i);this._tileInfoVertexArrayObject=new $(e,o),this._tileInfoProgram=ee(e,hn,this._tileInfoVertexArrayObject.locations)}_getTexture(e,t){if(!this._ctx){const s=document.createElement("canvas");s.width=De,s.height=_e,this._ctx=s.getContext("2d")}if(!t.tileDebugInfoTexture){const s=new Dt(De,_e);s.wrapMode=33071,s.samplingMode=9729,s.isImmutable=!0,t.tileDebugInfoTexture=new Rt(e,s)}const n=this._ctx;n.clearRect(0,0,n.canvas.width,n.canvas.height),n.textAlign="left",n.textBaseline="top",n.font=G-2+"px sans-serif",n.lineWidth=2,n.fillStyle="white",n.strokeStyle="black";const{debugSlot:i}=t;let o=R+mn*i;const a=`${i}) ${t.key.id} (${t.constructor.name})`;n.strokeText(a,R,o),n.fillText(a,R,o),o+=G;const{debugInfo:r}=t;if(r){const{length:s,minOrderedLength:l,minUnorderedLength:c,triangleCount:_}=r.display;if(s>0){const d=`Length: ${s}`;n.strokeText(d,R,o),n.fillText(d,R,o),o+=G}if(l){const d=`Min ordered length: ${l}`;n.strokeText(d,R,o),n.fillText(d,R,o),o+=G}if(c){const d=`Min unordered length: ${c}`;n.strokeText(d,R,o),n.fillText(d,R,o),o+=G}if(_>0){_>1e5&&(n.fillStyle="red",n.strokeStyle="white");const d=`Triangle count: ${_}`;n.strokeText(d,R,o),n.fillText(d,R,o),o+=G}const{bytesUsed:u,bytesReserved:x}=r.memory;if(n.fillStyle="white",n.strokeStyle="black",u>0||x>0){const d=`Memory usage: ${u} of ${x} bytes`;n.strokeText(d,R,o),n.fillText(d,R,o),o+=G}}return t.tileDebugInfoTexture.setData(n.canvas),t.tileDebugInfoTexture}},gn=class extends U{constructor(){super(...arguments),this._color=B(1,0,0,1),this._patternMatrix=k(),this._programOptions={id:!1,pattern:!1}}dispose(){this._vao=ut(this._vao)}drawMany(e,t){const{context:n,painter:i,requestRender:o,allowDelayedRender:a}=e;this._loadWGLResources(e);const r=e.displayLevel,s=e.styleLayer,l=s.backgroundMaterial,c=i.vectorTilesMaterialManager,_=s.getPaintValue("background-color",r),u=s.getPaintValue("background-opacity",r),x=s.getPaintValue("background-pattern",r),d=x!==void 0,S=1|window.devicePixelRatio,p=e.spriteMosaic;let O,b;const y=S>Ge?2:1,I=this._programOptions;I.pattern=d;const h=c.getMaterialProgram(n,l,I);if(!a||o==null||h.compiled){if(n.bindVAO(this._vao),n.useProgram(h),d){const v=p.getMosaicItemPosition(x,!0);if(v!=null){const{tl:g,br:T,page:m}=v;O=T[0]-g[0],b=T[1]-g[1];const C=p.getPageSize(m);C!=null&&(p.bind(n,9729,m,N),h.setUniform4f("u_tlbr",g[0],g[1],T[0],T[1]),h.setUniform2fv("u_mosaicSize",C),h.setUniform1i("u_texture",N))}h.setUniform1f("u_opacity",u)}else{const v=_[3]*u;this._color[0]=v*_[0],this._color[1]=v*_[1],this._color[2]=v*_[2],this._color[3]=v,h.setUniform4fv("u_color",this._color)}h.setUniform1f("u_depth",s.z||0);for(const v of t){if(h.setUniform1f("u_coord_range",v.rangeX),h.setUniformMatrix3fv("u_dvsMat3",v.transforms.displayViewScreenMat3),d){const g=Math.max(2**(Math.round(r)-v.key.level),1),T=y*v.width*g,m=T/ye(O),C=T/ye(b);this._patternMatrix[0]=m,this._patternMatrix[4]=C,h.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}n.setStencilFunction(514,0,255),n.drawArrays(A.TRIANGLE_STRIP,0,4)}}else o()}_loadWGLResources(e){if(this._vao)return;const{context:t,styleLayer:n}=e,i=n.backgroundMaterial,o=new Int8Array([0,0,1,0,0,1,1,1]),a=new j(t,i.geometryLayout,o);this._vao=new $(t,a)}},yn=class extends U{constructor(){super(...arguments),this._programOptions={id:!1}}dispose(){}drawMany(e,t){const{context:n,displayLevel:i,requiredLevel:o,state:a,painter:r,spriteMosaic:s,styleLayerUID:l,requestRender:c,allowDelayedRender:_}=e;if(!t.some(h=>h.layerData.get(l)?.circleIndexCount??!1))return;const u=e.styleLayer,x=u.circleMaterial,d=r.vectorTilesMaterialManager,S=1.2,p=u.getPaintValue("circle-translate",i),O=u.getPaintValue("circle-translate-anchor",i),b=this._programOptions,y=d.getMaterialProgram(n,x,b);if(_&&c!=null&&!y.compiled)return void c();n.useProgram(y),y.setUniformMatrix3fv("u_displayMat3",O===1?a.displayMat3:a.displayViewMat3),y.setUniform2fv("u_circleTranslation",p),y.setUniform1f("u_depth",u.z),y.setUniform1f("u_antialiasingWidth",S);let I=-1;for(const h of t){if(!h.layerData.has(l))continue;h.key.level!==I&&(I=h.key.level,x.setDataUniforms(y,i,u,I,s));const v=h.layerData.get(l);if(!v.circleIndexCount)continue;v.prepareForRendering(n);const g=v.vao;g!=null&&(n.bindVAO(g),y.setUniformMatrix3fv("u_dvsMat3",h.transforms.displayViewScreenMat3),o!==h.key.level?n.setStencilFunction(514,h.stencilRef,255):n.setStencilFunction(516,255,255),n.drawElements(A.TRIANGLES,v.circleIndexCount,M.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*v.circleIndexStart),h.triangleCount+=v.circleIndexCount/3)}}};const Re=1/65536;let xn=class extends U{constructor(){super(...arguments),this._fillProgramOptions={id:!1,pattern:!1},this._outlineProgramOptions={id:!1}}dispose(){}drawMany(e,t){const{displayLevel:n,renderPass:i,spriteMosaic:o,styleLayerUID:a}=e;let r=!1;for(const y of t)if(y.layerData.has(a)){const I=y.layerData.get(a);if(I.fillIndexCount>0||I.outlineIndexCount>0){r=!0;break}}if(!r)return;const s=e.styleLayer,l=s.getPaintProperty("fill-pattern"),c=l!==void 0,_=c&&l.isDataDriven;let u;if(c&&!_){const y=l.getValue(n);u=o.getMosaicItemPosition(y,!0)}const x=!c&&s.getPaintValue("fill-antialias",n);let d=!0,S=1;if(!c){const y=s.getPaintProperty("fill-color"),I=s.getPaintProperty("fill-opacity");if(!y?.isDataDriven&&!I?.isDataDriven){const h=s.getPaintValue("fill-color",n);S=s.getPaintValue("fill-opacity",n)*h[3],S>=1&&(d=!1)}}if(d&&i==="opaque")return;const p=s.getPaintValue("fill-translate",n),O=s.getPaintValue("fill-translate-anchor",n);(d||i!=="translucent")&&this._drawFill(e,a,s,t,p,O,c,u,_);const b=!s.hasDataDrivenOutlineColor&&s.outlineUsesFillColor&&S<1;x&&i!=="opaque"&&!b&&this._drawOutline(e,a,s,t,p,O)}_drawFill(e,t,n,i,o,a,r,s,l){if(r&&!l&&s==null)return;const{context:c,displayLevel:_,state:u,painter:x,pixelRatio:d,spriteMosaic:S,requestRender:p,allowDelayedRender:O}=e,b=n.fillMaterial,y=x.vectorTilesMaterialManager,I=d>Ge?2:1,h=this._fillProgramOptions;h.pattern=r;const v=y.getMaterialProgram(c,b,h);if(O&&p!=null&&!v.compiled)return void p();if(c.useProgram(v),s!=null){const{page:T}=s,m=S.getPageSize(T);m!=null&&(S.bind(c,9729,T,N),v.setUniform2fv("u_mosaicSize",m),v.setUniform1i("u_texture",N))}v.setUniformMatrix3fv("u_displayMat3",a===1?u.displayMat3:u.displayViewMat3),v.setUniform2fv("u_fillTranslation",o),v.setUniform1f("u_depth",n.z+Re);let g=-1;for(const T of i){if(!T.layerData.has(t))continue;T.key.level!==g&&(g=T.key.level,b.setDataUniforms(v,_,n,g,S));const m=T.layerData.get(t);if(!m.fillIndexCount)continue;m.prepareForRendering(c);const C=m.fillVAO;if(C!=null){if(c.bindVAO(C),v.setUniformMatrix3fv("u_dvsMat3",T.transforms.displayViewScreenMat3),c.setStencilFunction(514,T.stencilRef,255),r){const E=Math.max(2**(Math.round(_)-T.key.level),1),L=T.rangeX/(I*T.width*E);v.setUniform1f("u_patternFactor",L)}if(l){const E=m.patternMap;if(!E)continue;for(const[L,D]of E){const Y=S.getPageSize(L);Y!=null&&(S.bind(c,9729,L,N),v.setUniform2fv("u_mosaicSize",Y),v.setUniform1i("u_texture",N),c.drawElements(A.TRIANGLES,D[1],M.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*D[0]))}}else c.drawElements(A.TRIANGLES,m.fillIndexCount,M.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*m.fillIndexStart);T.triangleCount+=m.fillIndexCount/3}}}_drawOutline(e,t,n,i,o,a){const{context:r,displayLevel:s,state:l,painter:c,pixelRatio:_,spriteMosaic:u,requestRender:x,allowDelayedRender:d}=e,S=n.outlineMaterial,p=c.vectorTilesMaterialManager,O=.75/_,b=this._outlineProgramOptions,y=p.getMaterialProgram(r,S,b);if(d&&x!=null&&!y.compiled)return void x();r.useProgram(y),y.setUniformMatrix3fv("u_displayMat3",a===1?l.displayMat3:l.displayViewMat3),y.setUniform2fv("u_fillTranslation",o),y.setUniform1f("u_depth",n.z+Re),y.setUniform1f("u_outline_width",O);let I=-1;for(const h of i){if(!h.layerData.has(t))continue;h.key.level!==I&&(I=h.key.level,S.setDataUniforms(y,s,n,I,u));const v=h.layerData.get(t);if(v.prepareForRendering(r),!v.outlineIndexCount)continue;const g=v.outlineVAO;g!=null&&(r.bindVAO(g),y.setUniformMatrix3fv("u_dvsMat3",h.transforms.displayViewScreenMat3),r.setStencilFunction(514,h.stencilRef,255),r.drawElements(A.TRIANGLES,v.outlineIndexCount,M.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*v.outlineIndexStart),h.triangleCount+=v.outlineIndexCount/3)}}};class Sn extends U{constructor(){super(...arguments),this._programOptions={id:!1,pattern:!1,sdf:!1}}dispose(){}drawMany(e,t){const{context:n,displayLevel:i,state:o,painter:a,pixelRatio:r,spriteMosaic:s,styleLayerUID:l,requestRender:c,allowDelayedRender:_}=e;if(!t.some(E=>E.layerData.get(l)?.lineIndexCount??!1))return;const u=e.styleLayer,x=u.lineMaterial,d=a.vectorTilesMaterialManager,S=u.getPaintValue("line-translate",i),p=u.getPaintValue("line-translate-anchor",i),O=u.getPaintProperty("line-pattern"),b=O!==void 0,y=b&&O.isDataDriven;let I,h;if(b&&!y){const E=O.getValue(i);I=s.getMosaicItemPosition(E)}let v=!1;if(!b){const E=u.getPaintProperty("line-dasharray");if(h=E!==void 0,v=h&&E.isDataDriven,h&&!v){const L=E.getValue(i),D=u.getDashKey(L,u.getLayoutValue("line-cap",i));I=s.getMosaicItemPosition(D)}}const g=1/r,T=this._programOptions;T.pattern=b,T.sdf=h;const m=d.getMaterialProgram(n,x,T);if(_&&c!=null&&!m.compiled)return void c();if(n.useProgram(m),m.setUniformMatrix3fv("u_displayViewMat3",o.displayViewMat3),m.setUniformMatrix3fv("u_displayMat3",p===1?o.displayMat3:o.displayViewMat3),m.setUniform2fv("u_lineTranslation",S),m.setUniform1f("u_depth",u.z),m.setUniform1f("u_antialiasing",g),I&&I!=null){const{page:E}=I,L=s.getPageSize(E);L!=null&&(s.bind(n,9729,E,N),m.setUniform2fv("u_mosaicSize",L),m.setUniform1i("u_texture",N))}let C=-1;for(const E of t){if(!E.layerData.has(l))continue;E.key.level!==C&&(C=E.key.level,x.setDataUniforms(m,i,u,C,s));const L=2**(i-C)/r;m.setUniform1f("u_zoomFactor",L);const D=E.layerData.get(l);if(!D.lineIndexCount)continue;D.prepareForRendering(n);const Y=D.vao;if(Y!=null){if(n.bindVAO(Y),m.setUniformMatrix3fv("u_dvsMat3",E.transforms.displayViewScreenMat3),n.setStencilFunction(514,E.stencilRef,255),y||v){const Q=D.patternMap;if(!Q)continue;for(const[P,W]of Q){const V=s.getPageSize(P);V!=null&&(s.bind(n,9729,P,N),m.setUniform2fv("u_mosaicSize",V),m.setUniform1i("u_texture",N),n.drawElements(A.TRIANGLES,W[1],M.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*W[0]))}}else n.drawElements(A.TRIANGLES,D.lineIndexCount,M.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*D.lineIndexStart);E.triangleCount+=D.lineIndexCount/3}}}}const Tn=256/360,In=1/Math.LN2;function bn(f,e){return(f%=e)>=0?f:f+e}function Ve(f){return bn(f*Tn,256)}function mi(f){return Math.log(f)*In}const En=1/65536;let On=class extends U{constructor(){super(...arguments),this._iconProgramOptions={id:!1,sdf:!1},this._sdfProgramOptions={id:!1},this._spritesTextureSize=Vt()}dispose(){}drawMany(e,t){const n=e.styleLayer;this._drawIcons(e,n,t),this._drawText(e,n,t)}_drawIcons(e,t,n){const{context:i,displayLevel:o,painter:a,spriteMosaic:r,state:s,styleLayerUID:l,requestRender:c,allowDelayedRender:_}=e,u=t.iconMaterial,x=a.vectorTilesMaterialManager;let d,S=!1;for(const m of n)if(m.layerData.has(l)&&(d=m.layerData.get(l),d.iconPerPageElementsMap.size>0)){S=!0;break}if(!S)return;const p=t.getPaintValue("icon-translate",o),O=t.getPaintValue("icon-translate-anchor",o);let b=t.getLayoutValue("icon-rotation-alignment",o);b===2&&(b=t.getLayoutValue("symbol-placement",o)===0?1:0);const y=b===0,I=t.getLayoutValue("icon-keep-upright",o)&&y,h=d.isIconSDF,v=this._iconProgramOptions;v.sdf=h;const g=x.getMaterialProgram(i,u,v);if(_&&c!=null&&!g.compiled)return void c();i.useProgram(g),g.setUniformMatrix3fv("u_displayViewMat3",b===0?s.displayViewMat3:s.displayMat3),g.setUniformMatrix3fv("u_displayMat3",O===1?s.displayMat3:s.displayViewMat3),g.setUniform2fv("u_iconTranslation",p),g.setUniform1f("u_depth",t.z),g.setUniform1f("u_mapRotation",Ve(s.rotation)),g.setUniform1f("u_keepUpright",I?1:0),g.setUniform1f("u_level",10*o),g.setUniform1i("u_texture",N),g.setUniform1f("u_fadeDuration",Te/1e3),g.setUniform1i("u_isStencilPass",e.stencilSymbols?1:0);let T=-1;for(const m of n){if(!m.layerData.has(l)||(m.key.level!==T&&(T=m.key.level,u.setDataUniforms(g,o,t,T,r)),d=m.layerData.get(l),d.iconPerPageElementsMap.size===0))continue;d.prepareForRendering(i),d.updateOpacityInfo();const C=d.iconVAO;if(C!=null){i.bindVAO(C),g.setUniformMatrix3fv("u_dvsMat3",m.transforms.displayViewScreenMat3),g.setUniform1f("u_time",(performance.now()-d.lastOpacityUpdate)/1e3);for(const[E,L]of d.iconPerPageElementsMap)this._renderIconRange(e,g,L,E,m)}}}_renderIconRange(e,t,n,i,o){const{context:a,spriteMosaic:r}=e;this._spritesTextureSize[0]=r.getWidth(i)/4,this._spritesTextureSize[1]=r.getHeight(i)/4,t.setUniform2fv("u_mosaicSize",this._spritesTextureSize),r.bind(a,9729,i,N),this._setStencilState(e,o),a.drawElements(A.TRIANGLES,n[1],M.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*n[0]),o.triangleCount+=n[1]/3}_drawText(e,t,n){const{context:i,displayLevel:o,glyphMosaic:a,painter:r,pixelRatio:s,spriteMosaic:l,state:c,styleLayerUID:_,requestRender:u,allowDelayedRender:x}=e,d=t.textMaterial,S=r.vectorTilesMaterialManager;let p,O=!1;for(const V of n)if(V.layerData.has(_)&&(p=V.layerData.get(_),p.glyphPerPageElementsMap.size>0)){O=!0;break}if(!O)return;const b=t.getPaintProperty("text-opacity");if(b&&!b.isDataDriven&&b.getValue(o)===0)return;const y=t.getPaintProperty("text-color"),I=!y||y.isDataDriven||y.getValue(o)[3]>0,h=t.getPaintProperty("text-halo-width"),v=t.getPaintProperty("text-halo-color"),g=(!h||h.isDataDriven||h.getValue(o)>0)&&(!v||v.isDataDriven||v.getValue(o)[3]>0);if(!I&&!g)return;const T=24/8;let m=t.getLayoutValue("text-rotation-alignment",o);m===2&&(m=t.getLayoutValue("symbol-placement",o)===0?1:0);const C=m===0,E=t.getLayoutValue("text-keep-upright",o)&&C,L=.8*T/s;this._glyphTextureSize||(this._glyphTextureSize=wt(a.width/4,a.height/4));const D=t.getPaintValue("text-translate",o),Y=t.getPaintValue("text-translate-anchor",o),Q=this._sdfProgramOptions,P=S.getMaterialProgram(i,d,Q);if(x&&u!=null&&!P.compiled)return void u();i.useProgram(P),P.setUniformMatrix3fv("u_displayViewMat3",m===0?c.displayViewMat3:c.displayMat3),P.setUniformMatrix3fv("u_displayMat3",Y===1?c.displayMat3:c.displayViewMat3),P.setUniform2fv("u_textTranslation",D),P.setUniform1f("u_depth",t.z+En),P.setUniform2fv("u_mosaicSize",this._glyphTextureSize),P.setUniform1f("u_mapRotation",Ve(c.rotation)),P.setUniform1f("u_keepUpright",E?1:0),P.setUniform1f("u_level",10*o),P.setUniform1i("u_texture",Se),P.setUniform1f("u_antialiasingWidth",L),P.setUniform1f("u_fadeDuration",Te/1e3);let W=-1;for(const V of n){if(!V.layerData.has(_)||(V.key.level!==W&&(W=V.key.level,d.setDataUniforms(P,o,t,W,l)),p=V.layerData.get(_),p.glyphPerPageElementsMap.size===0))continue;p.prepareForRendering(i),p.updateOpacityInfo();const pe=p.textVAO;if(pe==null)continue;i.bindVAO(pe),P.setUniformMatrix3fv("u_dvsMat3",V.transforms.displayViewScreenMat3),this._setStencilState(e,V);const nt=(performance.now()-p.lastOpacityUpdate)/1e3;P.setUniform1f("u_time",nt),p.glyphPerPageElementsMap.forEach((it,ot)=>{this._renderGlyphRange(i,it,ot,a,P,g,I,V)})}}_renderGlyphRange(e,t,n,i,o,a,r,s){i.bind(e,9729,n,Se),a&&(o.setUniform1f("u_halo",1),e.drawElements(A.TRIANGLES,t[1],M.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),s.triangleCount+=t[1]/3),r&&(o.setUniform1f("u_halo",0),e.drawElements(A.TRIANGLES,t[1],M.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),s.triangleCount+=t[1]/3)}_setStencilState(e,t){const{context:n,is3D:i,stencilSymbols:o}=e;if(n.setStencilTestEnabled(!0),o)return n.setStencilWriteMask(255),void n.setStencilFunction(519,t.stencilRef,255);n.setStencilWriteMask(0),i?n.setStencilFunction(514,t.stencilRef,255):n.setStencilFunction(516,255,255)}};const An={clip:qt,stencil:Qt,tileDebugInfo:pn,vtlBackground:gn,vtlFill:xn,vtlLine:Sn,vtlCircle:yn,vtlSymbol:On},Pn=(f,e,t,n)=>{let i=0;for(let o=1;o<t;o++){const a=f[2*(e+o-1)],r=f[2*(e+o-1)+1];i+=(f[2*(e+o)]-a)*(f[2*(e+o)+1]+r)}return n?i>0:i<0},we=({coords:f,lengths:e},t)=>{const n=[];for(let i=0,o=0;i<e.length;o+=e[i],i+=1){const a=o,r=[];for(;i<e.length-1&&Pn(f,o+e[i],e[i+1],t);i+=1,o+=e[i])r.push(o+e[i]-a);const s=f.slice(2*a,2*(o+e[i])),l=Nt(s,r,2);for(const c of l)n.push(c+a)}return n};class w{constructor(e,t,n,i=!1){this.vertices=e,this.indices=t,this.primitiveType=n,this.isMapSpace=i,this._cache={}}static fromPath(e){const t=Ft(new be,e.path,!1,!1),n=t.coords,i=new Uint32Array(we(t,!0)),o=new Uint32Array(n.length/2);for(let a=0;a<o.length;a++)o[a]=z(Math.floor(n[2*a]),Math.floor(n[2*a+1]));return new w(o,i,A.TRIANGLES)}static fromGeometry(e,t){const n=t.geometry?.type;switch(n){case"polygon":return w.fromPolygon(e,t.geometry);case"extent":return w.fromMapExtent(e,t.geometry);default:return ve.getLogger("esri.views.2d.engine.webgl.Mesh2D").error(new Be("mapview-bad-type",`Unable to create a mesh from type ${n}`,t)),w.fromScreenExtent({xmin:0,ymin:0,xmax:1,ymax:1})}}static fromPolygon(e,t){const n=Bt(new be,t,!1,!1),i=n.coords,o=new Uint32Array(we(n,!1)),a=new Uint32Array(i.length/2),r=Ie(),s=Ie();for(let l=0;l<a.length;l++)dt(r,i[2*l],i[2*l+1]),e.toScreen(s,r),a[l]=z(Math.floor(s[0]),Math.floor(s[1]));return new w(a,o,A.TRIANGLES,!0)}static fromScreenExtent({xmin:e,xmax:t,ymin:n,ymax:i}){const o=new Uint32Array([z(e,n),z(t,n),z(e,i),z(e,i),z(t,n),z(t,i)]),a=new Uint32Array([0,1,2,3,4,5]);return new w(o,a,A.TRIANGLES)}static fromMapExtent(e,t){const[n,i]=e.toScreen([0,0],[t.xmin,t.ymin]),[o,a]=e.toScreen([0,0],[t.xmax,t.ymax]),r=new Uint32Array([z(n,i),z(o,i),z(n,a),z(n,a),z(o,i),z(o,a)]),s=new Uint32Array([0,1,2,3,4,5]);return new w(r,s,A.TRIANGLES)}destroy(){this._cache.indexBuffer!=null&&this._cache.indexBuffer.dispose(),this._cache.vertexBuffer?.dispose(),this._cache.indexBuffer=this._cache.vertexBuffer=null}getIndexBuffer(e,t=35044){return this._cache.indexBuffer??=fe.createIndex(e,t,this.indices),this._cache.indexBuffer}getVertexBuffers(e,t){return this._cache.vertexBuffer??=new j(e,t,this.vertices),this._cache.vertexBuffer}}class me extends He{constructor(e,t){super(),this._clip=t,this._cache={},this.stage=e,this._handle=_t(()=>t.version,()=>this._invalidate()),this.ready()}static fromClipArea(e,t){return new me(e,t)}_destroyGL(){this._cache.mesh!=null&&(this._cache.mesh.destroy(),this._cache.mesh=null),this._cache.vao!=null&&(this._cache.vao.dispose(),this._cache.vao=null)}destroy(){super.destroy(),this._destroyGL(),this._handle.remove()}getVAO(e,t,n){const[i,o]=t.size;if(this._clip.type!=="geometry"&&this._lastWidth===i&&this._lastHeight===o||(this._lastWidth=i,this._lastHeight=o,this._destroyGL()),this._cache.vao==null){const a=this._createMesh(t,this._clip),r=a.getIndexBuffer(e),s=a.getVertexBuffers(e,n);this._cache.mesh=a,this._cache.vao=new $(e,s,r)}return this._cache.vao}_createTransforms(){return{displayViewScreenMat3:k()}}_invalidate(){this._destroyGL(),this.requestRender()}_createMesh(e,t){switch(t.type){case"rect":return w.fromScreenExtent(xt(t,e.size[0],e.size[1]));case"path":return w.fromPath(t);case"geometry":return w.fromGeometry(e,t);default:return ve.getLogger("esri.views.2d.engine.webgl.ClippingInfo").error(new Be("mapview-bad-type","Unable to create ClippingInfo mesh from clip of type: ${clip.type}")),w.fromScreenExtent({xmin:0,ymin:0,xmax:1,ymax:1})}}}class gi extends Ct{set clips(e){super.clips=e,this._updateClippingInfo(e)}renderChildren(e){e.painter.setPipelineState(null),this._renderPasses==null&&(this._renderPasses=this.prepareRenderPasses(e.painter));for(const t of this._renderPasses)try{t.render(e)}catch{}}prepareRenderPasses(e){return[e.registerRenderPass({name:"clip",brushes:[An.clip],target:()=>this._clippingInfos,drawPhase:87})]}_updateClippingInfo(e){this._clippingInfos!=null&&(this._clippingInfos.forEach(t=>t.destroy()),this._clippingInfos=null),e!=null&&e.length&&(this._clippingInfos=e.items.map(t=>me.fromClipArea(this.stage,t))),this.requestRender()}}export{ii as a,en as b,vn as c,ie as d,ni as e,mi as f,ci as g,ke as h,gi as i,An as m,Qt as n,Jt as r,U as t,pn as x};
