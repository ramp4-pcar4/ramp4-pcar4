import{b1 as q,ah as ve,E as Ee,n as Se,cR as Oe,s as Te,aG as ft}from"./main-BvP2mMJi.js";import{w as Ae,a as ue,f as dt,g as _t,h as mt,i as vt,Z as F,_ as $e,$ as Pe}from"./definitions-C0Jy3zs7.js";import{e as pt,b as gt,h as Ze,f as L,n as re,s as le,r as ht}from"./LabelMetric-Dewx0MlR.js";import{E as k}from"./BufferObject-CpXS0eB0.js";import{C as P,F as W,E as A,L as B,R as N,O as U,I as Q,N as xt,D as yt}from"./enums-Dk3osxpS.js";import{o as Z}from"./VertexArrayObject-DIyor97G.js";import{t as ne}from"./VertexElementDescriptor-BOD-G50G.js";import{e as St,a as ce}from"./ProgramTemplate-DycQ-vVD.js";import{d as Tt,n as pe,e as bt}from"./Tile-CZtp4G4_.js";import{r as Ke,i as ge,s as It}from"./mat3-XZDRtl20.js";import{e as ie,N as he,S as Ce,o as Et,q as Ot,E as ee}from"./MapView-DEd0Q1fe.js";import{o as At,N as Pt}from"./vec32-dwN7UxOE.js";import{n as Ct}from"./vec3f32-nZdmKIgz.js";import{e as je,n as Dt}from"./Container-CY5RtaM8.js";import{e as Rt}from"./TileKey-CEzXAy40.js";import{p as Lt,m as Mt}from"./Texture-BZKdBHEN.js";import{r as J,l as G,n as De}from"./StyleDefinition-BTt_i6C1.js";import{n as zt,t as Vt}from"./vec2f32-BbH2jxlN.js";import{e as Re}from"./config-MDUrh2eL.js";import{e as Nt}from"./earcut-Lltz9D9k.js";import{o as wt}from"./vec2-DGVIkCvT.js";import{n as Le}from"./vec2f64-B7N_6o8F.js";import{Q as Ft,K as Bt}from"./featureConversionUtils-DtD8mV_D.js";import{s as Me}from"./OptimizedFeature-CIptWNVu.js";let Ut=class{constructor(e,t){this._rctx=e,this._attributes=[{name:"position",offset:0,type:P.SHORT,count:2}],this.layout={hash:pt(this._attributes),attributes:this._attributes,stride:4},this._vertexBuffer=k.createVertex(e,W.STATIC_DRAW,new Uint16Array(t)),this._vao=new Z(e,new Map([["a_position",0]]),new Map([["geometry",[new ne("a_position",2,P.SHORT,0,4)]]]),new Map([["geometry",this._vertexBuffer]])),this._count=t.length/2}bind(){this._rctx.bindVAO(this._vao)}unbind(){this._rctx.bindVAO(null)}dispose(){this._vao.dispose()}draw(){this._rctx.bindVAO(this._vao),this._rctx.drawArrays(A.TRIANGLE_STRIP,0,this._count)}},$=class{constructor(){this.name=this.constructor.name||"UnnamedBrush",this.brushEffect=null}prepareState(e,t){}draw(e,t,n){}drawMany(e,t,n){for(const i of t)i.visible&&this.draw(e,i,n)}};const de={nearest:{defines:[],samplingMode:B.NEAREST,mips:!1},bilinear:{defines:[],samplingMode:B.LINEAR,mips:!1},bicubic:{defines:["bicubic"],samplingMode:B.LINEAR,mips:!1},trilinear:{defines:[],samplingMode:B.LINEAR_MIPMAP_LINEAR,mips:!0}},Gt=(u,e,t)=>{if(t.samplingMode==="dynamic"){const{state:n}=u,i=e.resolution/e.pixelRatio/n.resolution,o=Math.round(u.pixelRatio)!==u.pixelRatio,a=i>1.05||i<.95;return n.rotation||a||o||e.isSourceScaled||e.rotation?de.bilinear:de.nearest}return de[t.samplingMode]};let Yt=class extends ${constructor(){super(...arguments),this._desc={vsPath:"raster/bitmap",fsPath:"raster/bitmap",attributes:new Map([["a_pos",0]])}}dispose(){this._quad&&this._quad.dispose()}prepareState({context:e}){e.setBlendingEnabled(!0),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0)}draw(e,t){const{context:n,renderingOptions:i,painter:o,requestRender:a,allowDelayedRender:r}=e;if(!t.source||!t.isReady)return;const l=Gt(e,t,i),s=o.materialManager.getProgram(this._desc,l.defines);if(r&&a!=null&&!s.compiled)return void a();e.timeline.begin(this.name),t.blendFunction==="additive"?n.setBlendFunctionSeparate(N.ONE,N.ONE,N.ONE,N.ONE):n.setBlendFunctionSeparate(N.ONE,N.ONE_MINUS_SRC_ALPHA,N.ONE,N.ONE_MINUS_SRC_ALPHA),n.setStencilFunction(U.EQUAL,t.stencilRef,255),this._quad||(this._quad=new Ut(n,[0,0,1,0,0,1,1,1]));const{coordScale:c,computedOpacity:_,transforms:f}=t;t.setSamplingProfile(l),t.bind(e.context,Ae),n.useProgram(s),s.setUniformMatrix3fv("u_dvsMat3",f.displayViewScreenMat3),s.setUniform1i("u_texture",Ae),s.setUniform2fv("u_coordScale",c),s.setUniform1f("u_opacity",_),this._quad.draw(),e.timeline.end(this.name)}};function qe(){return new Float32Array(4)}function kt(u){const e=new Float32Array(4);return e[0]=u[0],e[1]=u[1],e[2]=u[2],e[3]=u[3],e}function H(u,e,t,n){const i=new Float32Array(4);return i[0]=u,i[1]=e,i[2]=t,i[3]=n,i}function Ht(u,e){return new Float32Array(u,e,4)}function Xe(){return qe()}function Qe(){return H(1,1,1,1)}function Je(){return H(1,0,0,0)}function et(){return H(0,1,0,0)}function tt(){return H(0,0,1,0)}function nt(){return H(0,0,0,1)}const Wt=Xe(),$t=Qe(),Zt=Je(),Kt=et(),jt=tt(),qt=nt();Object.freeze(Object.defineProperty({__proto__:null,ONES:$t,UNIT_W:qt,UNIT_X:Zt,UNIT_Y:Kt,UNIT_Z:jt,ZEROS:Wt,clone:kt,create:qe,createView:Ht,fromValues:H,ones:Qe,unitW:nt,unitX:Je,unitY:et,unitZ:tt,zeros:Xe},Symbol.toStringTag,{value:"Module"}));const Xt={background:{"background.frag":`uniform lowp vec4 u_color;
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
return getHighlightBit(filterFlags, index);
}
float checkHighlight(float filterFlags) {
float result = checkHighlightBit(filterFlags, 0);
for (int i = 1; i < maxHighlightReasons; i++) {
result = result + checkHighlightBit(filterFlags, i);
}
return step(0.1, result);
}
vec3 clip(inout vec4 color, inout vec3 pos, in float filterFlags, in vec2 minMaxZoom) {
pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 0));
#ifdef inside
pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 1));
#elif defined(outside)
pos.z += 2.0 * getFilterBit(filterFlags, 1);
#elif defined(highlight)
#if !defined(highlight_all)
pos.z += 2.0 * (1.0 - checkHighlight(filterFlags));
#endif
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
}`},"post-processing":{blit:{"blit.frag":`precision mediump float;
uniform sampler2D u_texture;
varying vec2 v_uv;
void main() {
gl_FragColor = texture2D(u_texture, v_uv);
}`},bloom:{composite:{"composite.frag":`precision mediump float;
varying vec2 v_uv;
uniform sampler2D u_blurTexture1;
uniform sampler2D u_blurTexture2;
uniform sampler2D u_blurTexture3;
uniform sampler2D u_blurTexture4;
uniform sampler2D u_blurTexture5;
uniform float u_bloomStrength;
uniform float u_bloomRadius;
uniform float u_bloomFactors[NUMMIPS];
uniform vec3 u_bloomTintColors[NUMMIPS];
float lerpBloomFactor(const in float factor) {
float mirrorFactor = 1.2 - factor;
return mix(factor, mirrorFactor, u_bloomRadius);
}
void main() {
vec4 color = u_bloomStrength * (
lerpBloomFactor(u_bloomFactors[0]) * vec4(u_bloomTintColors[0], 1.0) * texture2D(u_blurTexture1, v_uv) +
lerpBloomFactor(u_bloomFactors[1]) * vec4(u_bloomTintColors[1], 1.0) * texture2D(u_blurTexture2, v_uv) +
lerpBloomFactor(u_bloomFactors[2]) * vec4(u_bloomTintColors[2], 1.0) * texture2D(u_blurTexture3, v_uv) +
lerpBloomFactor(u_bloomFactors[3]) * vec4(u_bloomTintColors[3], 1.0) * texture2D(u_blurTexture4, v_uv) +
lerpBloomFactor(u_bloomFactors[4]) * vec4(u_bloomTintColors[4], 1.0) * texture2D(u_blurTexture5, v_uv)
);
gl_FragColor = clamp(color, 0.0, 1.0);
}`},gaussianBlur:{"gaussianBlur.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform vec2 u_texSize;
uniform vec2 u_direction;
varying vec2 v_uv;
#define KERNEL_RADIUS RADIUS
#define SIGMA RADIUS
float gaussianPdf(in float x, in float sigma) {
return 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;
}
void main() {
vec2 invSize = 1.0 / u_texSize;
float fSigma = float(SIGMA);
float weightSum = gaussianPdf(0.0, fSigma);
vec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;
for (int i = 1; i < KERNEL_RADIUS; i ++) {
float x = float(i);
float w = gaussianPdf(x, fSigma);
vec2 uvOffset = u_direction * invSize * x;
vec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);
vec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);
pixelColorSum += (sample1 + sample2) * w;
weightSum += 2.0 * w;
}
gl_FragColor = pixelColorSum /weightSum;
}`},luminosityHighPass:{"luminosityHighPass.frag":`precision mediump float;
uniform sampler2D u_texture;
uniform vec3 u_defaultColor;
uniform float u_defaultOpacity;
uniform float u_luminosityThreshold;
uniform float u_smoothWidth;
varying vec2 v_uv;
void main() {
vec4 texel = texture2D(u_texture, v_uv);
vec3 luma = vec3(0.299, 0.587, 0.114);
float v = dot(texel.xyz, luma);
vec4 outputColor = vec4(u_defaultColor.rgb, u_defaultOpacity);
float alpha = smoothstep(u_luminosityThreshold, u_luminosityThreshold + u_smoothWidth, v);
gl_FragColor = mix(outputColor, texel, alpha);
}`}},blur:{gaussianBlur:{"gaussianBlur.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform vec2 u_texSize;
uniform vec2 u_direction;
uniform float u_sigma;
varying vec2 v_uv;
#define KERNEL_RADIUS RADIUS
float gaussianPdf(in float x, in float sigma) {
return 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;
}
void main() {
vec2 invSize = 1.0 / u_texSize;
float fSigma = u_sigma;
float weightSum = gaussianPdf(0.0, fSigma);
vec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;
for (int i = 1; i < KERNEL_RADIUS; i ++) {
float x = float(i);
float w = gaussianPdf(x, fSigma);
vec2 uvOffset = u_direction * invSize * x;
vec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);
vec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);
pixelColorSum += (sample1 + sample2) * w;
weightSum += 2.0 * w;
}
gl_FragColor = pixelColorSum /weightSum;
}`},"radial-blur":{"radial-blur.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
varying vec2 v_uv;
const float sampleDist = 1.0;
const float sampleStrength = 2.2;
void main(void) {
float samples[10];
samples[0] = -0.08;
samples[1] = -0.05;
samples[2] = -0.03;
samples[3] = -0.02;
samples[4] = -0.01;
samples[5] =  0.01;
samples[6] =  0.02;
samples[7] =  0.03;
samples[8] =  0.05;
samples[9] =  0.08;
vec2 dir = 0.5 - v_uv;
float dist = sqrt(dir.x * dir.x + dir.y * dir.y);
dir = dir / dist;
vec4 color = texture2D(u_colorTexture,v_uv);
vec4 sum = color;
for (int i = 0; i < 10; i++) {
sum += texture2D(u_colorTexture, v_uv + dir * samples[i] * sampleDist);
}
sum *= 1.0 / 11.0;
float t = dist * sampleStrength;
t = clamp(t, 0.0, 1.0);
gl_FragColor = mix(color, sum, t);
}`}},dra:{"dra.frag":`precision mediump float;
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
}`}},"drop-shadow":{composite:{"composite.frag":`precision mediump float;
uniform sampler2D u_layerFBOTexture;
uniform sampler2D u_blurTexture;
uniform vec4 u_shadowColor;
uniform vec2 u_shadowOffset;
uniform highp mat3 u_displayViewMat3;
varying vec2 v_uv;
void main() {
vec3 offset = u_displayViewMat3 * vec3(u_shadowOffset, 0.0);
vec4 layerColor = texture2D(u_layerFBOTexture, v_uv);
vec4 blurColor = texture2D(u_blurTexture, v_uv - offset.xy / 2.0);
gl_FragColor = ((1.0 - layerColor.a) * blurColor.a * u_shadowColor + layerColor);
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
}`}},raster:{bitmap:{"bitmap.frag":`precision mediump float;
varying highp vec2 v_texcoord;
uniform sampler2D u_texture;
uniform highp vec2 u_coordScale;
uniform lowp float u_opacity;
#include <filtering/bicubic.glsl>
void main() {
#ifdef BICUBIC
vec4 color = sampleBicubicBSpline(u_texture, v_texcoord, u_coordScale);
#else
vec4 color = texture2D(u_texture, v_texcoord);
#endif
gl_FragColor = vec4(color.rgb * u_opacity, color.a * u_opacity);
}`,"bitmap.vert":`precision mediump float;
attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_pos;
gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);
}`},common:{"common.glsl":`uniform sampler2D u_image;
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
}`,"common.vert":`precision mediump float;
attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
uniform highp float u_scale;
uniform highp vec2 u_offset;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_pos * u_scale + u_offset;
gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);
}`,"contrastBrightness.glsl":`uniform float u_contrastOffset;
uniform float u_brightnessOffset;
vec4 adjustContrastBrightness(vec4 currentPixel, bool isFloat) {
vec4 pixelValue = isFloat ? currentPixel * 255.0 : currentPixel;
float maxI = 255.0;
float mid = 128.0;
float c = u_contrastOffset;
float b = u_brightnessOffset;
vec4 v;
if (c > 0.0 && c < 100.0) {
v = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) / (2.0 * (100.0 - c)) + mid;
} else if (c <= 0.0 && c > -100.0) {
v = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) * (100.0 + c) / 20000.0 + mid;
} else if (c == 100.0) {
v = (200.0 * pixelValue - 100.0 * maxI + (maxI + 1.0) * (100.0 - c) + 2.0 * maxI * b);
v = (sign(v) + 1.0) / 2.0;
} else if (c == -100.0) {
v = vec4(mid, mid, mid, currentPixel.a);
}
vec3 rgb = clamp(v.rgb / 255.0, 0.0, 1.0);
return vec4(rgb, currentPixel.a);
}`,"getSurfaceValues.glsl":`#include <raster/common/mirror.glsl>
void getSurfaceValues(sampler2D imageTexture, vec2 texCoord, vec2 srcImageSize, inout float values[10]) {
vec2 onePixel = 1.0 / srcImageSize;
vec4 va = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(-1.0, -1.0)));
vec4 vb = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(0.0, -1.0)));
vec4 vc = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(1.0, -1.0)));
vec4 vd = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(-1.0, 0.0)));
vec4 ve = texture2D(imageTexture, mirror(texCoord));
vec4 vf = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(1.0, 0.0)));
vec4 vg = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(-1.0, 1.0)));
vec4 vh = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(0.0, 1.0)));
vec4 vi = texture2D(imageTexture, mirror(texCoord + onePixel * vec2(1.0, 1.0)));
float alpha = va.a * vb.a * vc.a * vd.a * ve.a * vf.a * vg.a * vh.a * vi.a;
values[0] = va.r;
values[1] = vb.r;
values[2] = vc.r;
values[3] = vd.r;
values[4] = ve.r;
values[5] = vf.r;
values[6] = vg.r;
values[7] = vh.r;
values[8] = vi.r;
values[9] = alpha;
}`,"inverse.glsl":`float invertValue(float value) {
float s = sign(value);
return (s * s) / (value + abs(s) - 1.0);
}`,"mirror.glsl":`vec2 mirror(vec2 pos) {
vec2 pos1 = abs(pos);
return step(pos1, vec2(1.0, 1.0)) * pos1 + step(1.0, pos1) * (2.0 - pos1);
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
}`},hillshade:{"hillshade.frag":`precision mediump float;
varying highp vec2 v_texcoord;
#include <raster/common/common.glsl>
uniform int u_hillshadeType;
uniform float u_sinZcosAs[6];
uniform float u_sinZsinAs[6];
uniform float u_cosZs[6];
uniform float u_weights[6];
uniform vec2 u_factor;
uniform float u_minValue;
uniform float u_maxValue;
uniform float u_scaling;
#include <raster/lut/colorize.glsl>
#include <raster/common/getSurfaceValues.glsl>
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
vec4 overlay(float val, float minValue, float maxValue, float hillshade) {
val = clamp((val - minValue) / (maxValue - minValue), 0.0, 1.0);
vec4 rgb = colorize(vec4(val, val, val, 1.0), 255.0);
vec3 hsv = rgb2hsv(rgb.xyz);
hsv.z = hillshade;
return vec4(hsv2rgb(hsv) * u_scaling, 1.0) * rgb.a;
}
void main() {
vec2 pixelLocation = getPixelLocation(v_texcoord);
if (isOutside(pixelLocation)) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
vec4 currentPixel = getPixel(pixelLocation);
if (currentPixel.a == 0.0) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
float pv[10];
getSurfaceValues(u_image, pixelLocation, u_srcImageSize, pv);
float alpha = pv[9];
float dzx = (pv[2] + 2.0 * pv[5] + pv[8] - pv[0] - 2.0 * pv[3] - pv[6]) * u_factor.s;
float dzy = (pv[6] + 2.0 * pv[7] + pv[8] - pv[0] - 2.0 * pv[1] - pv[2]) * u_factor.t;
float dzd = sqrt(1.0 + dzx * dzx + dzy * dzy);
float hillshade = 0.0;
if (u_hillshadeType == 0){
float cosDelta = u_sinZsinAs[0] * dzy - u_sinZcosAs[0] * dzx;
float z = (u_cosZs[0] + cosDelta) / dzd;
if (z < 0.0)  z = 0.0;
hillshade = z;
} else {
for (int k = 0; k < 6; k++) {
float cosDelta = u_sinZsinAs[k] * dzy - u_sinZcosAs[k] * dzx;
float z = (u_cosZs[k] + cosDelta) / dzd;
if (z < 0.0) z = 0.0;
hillshade = hillshade + z * u_weights[k];
if (k == 5) break;
}
}
#ifdef APPLY_COLORMAP
vec4 result = overlay(pv[4], u_minValue, u_maxValue, hillshade) * alpha * u_opacity;
#else
hillshade *= u_scaling;
vec4 result = vec4(hillshade, hillshade, hillshade, 1.0) * alpha * u_opacity;
#endif
#ifdef ROUND_OUTPUT
result = vec4(floor(result.xyz + 0.5), result.a);
#endif
gl_FragColor = result;
}`},lut:{"colorize.glsl":`uniform sampler2D u_colormap;
uniform float u_colormapOffset;
uniform float u_colormapMaxIndex;
vec4 colorize(vec4 currentPixel, float scaleFactor) {
float clrIndex = clamp(currentPixel.r * scaleFactor - u_colormapOffset, 0.0, u_colormapMaxIndex);
vec2 clrPosition = vec2((clrIndex + 0.5) / (u_colormapMaxIndex + 1.0), 0.0);
vec4 color = texture2D(u_colormap, clrPosition);
vec4 result = vec4(color.rgb, color.a * currentPixel.a);
return result;
}
vec4 colorizeNoClamp(vec4 currentPixel, float scaleFactor) {
float value = currentPixel.r * scaleFactor - u_colormapOffset;
vec4 result = colorize(currentPixel, scaleFactor);
return result * step(0.0, value) * step(value, u_colormapMaxIndex);
}`,"lut.frag":`precision mediump float;
varying highp vec2 v_texcoord;
#include <raster/common/common.glsl>
#include <raster/lut/colorize.glsl>
void main() {
vec2 pixelLocation = getPixelLocation(v_texcoord);
if (isOutside(pixelLocation)) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
vec4 currentPixel = getPixel(pixelLocation);
vec4 result = colorizeNoClamp(currentPixel, 1.0);
gl_FragColor = vec4(result.xyz, 1.0) * result.a * u_opacity;
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
gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
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
}`},rfx:{aspect:{"aspect.frag":`precision mediump float;
uniform sampler2D u_image;
varying vec2 v_texcoord;
uniform vec2 u_cellSize;
uniform vec2 u_srcImageSize;
#include <raster/common/getSurfaceValues.glsl>
const float pi = 3.14159265359;
void main() {
float pv[10];
getSurfaceValues(u_image, v_texcoord, u_srcImageSize, pv);
float alpha = pv[9];
float dzx = (pv[2] + 2.0 * pv[5] + pv[8] - pv[0] - 2.0 * pv[3] - pv[6]) / (8.0 * u_cellSize[0]);
float dzy = -(pv[6] + 2.0 * pv[7] + pv[8] - pv[0] - 2.0 * pv[1] - pv[2]) / (8.0 * u_cellSize[1]);
alpha *= sign(abs(dzx) + abs(dzy));
float aspect_rad = (dzx == 0.0) ? (step(0.0, dzy) * 0.5 * pi + step(dzy, 0.0) * 1.5 * pi) : mod((2.5 * pi + atan(dzy, -dzx)), 2.0 * pi);
float aspect = aspect_rad * 180.0 / pi;
gl_FragColor = vec4(aspect, aspect, aspect, 1.0) * alpha;
}`},bandarithmetic:{"bandarithmetic.frag":`precision mediump float;
uniform sampler2D u_image;
varying vec2 v_texcoord;
uniform mediump mat3 u_bandIndexMat3;
uniform float u_adjustments[3];
#include <raster/common/inverse.glsl>
void main() {
vec4 pv = texture2D(u_image, v_texcoord);
vec3 pv2 = u_bandIndexMat3 * pv.rgb;
float nir = pv2.r;
float red = pv2.g;
float index;
#ifdef NDXI
index = (nir - red) * invertValue(nir + red);
#elif defined(SR)
index = nir * invertValue(red);
#elif defined(CI)
index = nir * invertValue(red) - 1.0;
#elif defined(SAVI)
index = (nir - red) * invertValue(nir + red + u_adjustments[0]) * (1.0 + u_adjustments[0]);
#elif defined(TSAVI)
float s = u_adjustments[0];
float a = u_adjustments[1];
float x = u_adjustments[2];
float y = -a * s + x * (1.0 + s * s);
index = (s * (nir - s * red - a)) * invertValue(a * nir + red + y);
#elif defined(MSAVI)
float nir2 = 2.0 * nir + 1.0;
index = 0.5 * (nir2 - sqrt(nir2 * nir2 - 8.0 * (nir - red)));
#elif defined(GEMI)
float eta = (2.0 * (nir * nir - red * red) + 1.5 * nir + 0.5 * red) * invertValue(nir + red + 0.5);
index = eta * (1.0 - 0.25 * eta) - (red - 0.125) * invertValue(1.0 - red);
#elif defined(PVI)
float a = u_adjustments[0];
float b = u_adjustments[1];
float y = sqrt(1.0 + a * a);
index = (nir - a * red - b) * invertValue(y);
#elif defined(VARI)
index = (pv2.g - pv2.r) * invertValue(pv2.g + pv2.r - pv2.b);
#elif defined(MTVI)
float green = pv2.b;
float v = sqrt(pow((2.0 * nir + 1.0), 2.0) - (6.0 * nir - 5.0 * sqrt(red)) - 0.5);
index = 1.5 * (1.2 * (nir - green) - 2.5 * (red - green)) * invertValue(v);
#elif defined(RTVICORE)
float green = pv2.b;
index = 100.0 * (nir - red) - 10.0 * (nir - green);
#elif defined(EVI)
float blue = pv2.b;
float denom = nir + 6.0 * red - 7.5 * blue + 1.0;
index =  (2.5 * (nir - red)) * invertValue(denom);
#elif defined(WNDWI)
float g = pv2.r;
float n = pv2.g;
float s = pv2.b;
float a = u_adjustments[0];
float denom = g + a * n + (1.0 - a) * s;
index = (g - a * n - (1.0 - a) * s) * invertValue(denom);
#elif defined(BAI)
index = invertValue(pow((0.1 - red), 2.0) + pow((0.06 - nir), 2.0));
#else
gl_FragColor = pv;
return;
#endif
#ifdef ROUND_OUTPUT
index = floor(index + 0.5);
#endif
gl_FragColor = vec4(index, index, index, pv.a);
}`},colormap2rgb:{"colormap2rgb.frag":`precision mediump float;
uniform sampler2D u_image;
varying vec2 v_texcoord;
#include <raster/lut/colorize.glsl>
void main() {
vec4 pv = texture2D(u_image, v_texcoord);
vec4 result = colorizeNoClamp(vec4(pv.r, pv.r, pv.r, 1.0), 1.0);
gl_FragColor = vec4(result.xyz * 255.0, 1.0) * result.a * pv.a;
}`},compositeband:{"compositeband.frag":`precision mediump float;
uniform sampler2D u_image;
uniform sampler2D u_image1;
uniform sampler2D u_image2;
#ifdef ONE_CONSTANT
uniform float u_image1Const;
#ifdef TWO_CONSTANT
uniform float u_image2Const;
#endif
uniform mat3 u_imageSwap;
#endif
varying vec2 v_texcoord;
void main() {
vec4 pv0 = texture2D(u_image, v_texcoord);
float a = pv0.r;
float alpha = pv0.a;
#ifdef TWO_CONSTANT
float b = u_image1Const;
float c = u_image2Const;
vec3 abc = u_imageSwap * vec3(a, b, c);
a = abc.s;
b = abc.t;
c = abc.p;
#elif defined(ONE_CONSTANT)
vec4 pv1 = texture2D(u_image1, v_texcoord);
float b = pv1.r;
float c = u_image1Const;
vec3 abc = u_imageSwap * vec3(a, b, c);
a = abc.s;
b = abc.t;
c = abc.p;
alpha *= pv1.a;
#else
vec4 pv1 = texture2D(u_image1, v_texcoord);
vec4 pv2 = texture2D(u_image2, v_texcoord);
float b = pv1.r;
float c = pv2.r;
alpha = alpha * pv1.a * pv2.a;
#endif
gl_FragColor = vec4(a, b, c, alpha);
}`},computechange:{"computechange.frag":`precision mediump float;
uniform sampler2D u_image;
uniform sampler2D u_image1;
#ifdef ONE_CONSTANT
uniform float u_image1Const;
uniform mat3 u_imageSwap;
#endif
varying vec2 v_texcoord;
uniform vec2 u_domainRange;
#include <raster/common/inverse.glsl>
void main() {
vec4 pv0 = texture2D(u_image, v_texcoord);
float a = pv0.r;
#ifdef ONE_CONSTANT
float b = u_image1Const;
vec3 abc = u_imageSwap * vec3(a, b, 0);
a = abc.s;
b = abc.t;
#else
vec4 pv1 = texture2D(u_image1, v_texcoord);
float b = pv1.r;
#endif
float result = a;
float alpha = pv0.a;
#ifdef DIFFERENCE
result = a - b;
#elif defined(RELATIVE)
result = (a - b) * invertValue(max(abs(a), abs(b)));
#endif
bool isInvalid = result < u_domainRange.s || result > u_domainRange.t;
result = isInvalid ? 0.0 : result;
alpha *= float(!isInvalid);
#ifdef ROUND_OUTPUT
result = floor(result + 0.5);
#endif
gl_FragColor = vec4(result, result, result, alpha);
}`},contrast:{"contrast.frag":`precision mediump float;
uniform sampler2D u_image;
varying vec2 v_texcoord;
#include <raster/common/contrastBrightness.glsl>
void main() {
vec4 pv = texture2D(u_image, v_texcoord);
vec4 result = adjustContrastBrightness(pv, false);
gl_FragColor = vec4(floor(result.rgb * 255.0 + 0.5), result.a);
}`},convolution:{"convolution.frag":`precision mediump float;
uniform sampler2D u_image;
varying vec2 v_texcoord;
uniform vec2 u_srcImageSize;
#define KERNEL_SIZE_ROWS ROWS
#define KERNEL_SIZE_COLS COLS
uniform vec2 u_clampRange;
uniform float u_kernel[25];
#include <raster/common/mirror.glsl>
void main() {
vec3 rgb = vec3(0.0, 0.0, 0.0);
vec2 resolution = 1.0 / u_srcImageSize;
float rowOffset = -float(floor(float(KERNEL_SIZE_ROWS) / 2.0));
float colOffset = -float(floor(float(KERNEL_SIZE_COLS) / 2.0));
float alpha = 1.0;
for (int row = 0; row < KERNEL_SIZE_ROWS; row++) {
float pos_row = rowOffset + float(row);
for (int col = 0; col < KERNEL_SIZE_COLS; col++) {
vec2 pos = v_texcoord + vec2(colOffset + float(col), pos_row) * resolution;
vec4 pv = texture2D(u_image, mirror(pos));
rgb += pv.rgb * u_kernel[row * KERNEL_SIZE_COLS + col];
alpha *= pv.a;
}
}
rgb = clamp(rgb, u_clampRange.s, u_clampRange.t);
gl_FragColor = vec4(rgb * alpha, alpha);
}`},curvature:{"curvature.frag":`precision mediump float;
uniform sampler2D u_image;
varying vec2 v_texcoord;
uniform float u_zlFactor;
uniform vec2 u_srcImageSize;
#include <raster/common/getSurfaceValues.glsl>
void main() {
float pv[10];
getSurfaceValues(u_image, v_texcoord, u_srcImageSize, pv);
float alpha = pv[9];
float d = ((pv[3] + pv[5]) * 0.5 - pv[4]);
float e = ((pv[1] + pv[7]) * 0.5 - pv[4]);
float curvature = 0.0;
#ifdef STANDARD
curvature = -u_zlFactor * (d + e);
gl_FragColor = vec4(curvature, curvature, curvature, alpha);
#else
float f = (-pv[0] + pv[2] + pv[6] - pv[8]) / 4.0;
float g = (-pv[3] + pv[5]) / 2.0;
float h = (pv[1] - pv[7]) / 2.0;
float g2 = g * g;
float h2 = h * h;
#ifdef PROFILE
curvature = (u_zlFactor * (d * g2 + e * h2 + f * g * h)) / (g2 + h2);
#else
curvature = (-u_zlFactor * (d * h2 + e * g2 - f * g * h)) / (g2 + h2);
#endif
#endif
gl_FragColor = vec4(curvature, curvature, curvature, alpha);
}`},extractband:{"extractband.frag":`precision mediump float;
uniform sampler2D u_image;
varying vec2 v_texcoord;
uniform mediump mat3 u_bandIndexMat3;
void main() {
vec4 pv = texture2D(u_image, v_texcoord);
vec3 pv2 = u_bandIndexMat3 * pv.rgb;
gl_FragColor = vec4(pv2, pv.a);
}`},focalstatistics:{"focalstatistics.frag":`precision mediump float;
uniform sampler2D u_image;
varying vec2 v_texcoord;
uniform vec2 u_srcImageSize;
#define KERNEL_SIZE_ROWS ROWS
#define KERNEL_SIZE_COLS COLS
uniform vec2 u_clampRange;
#include <raster/common/mirror.glsl>
#include <raster/common/inverse.glsl>
void main() {
vec2 resolution = 1.0 / u_srcImageSize;
float rowOffset = -float(floor(float(KERNEL_SIZE_ROWS) / 2.0));
float colOffset = -float(floor(float(KERNEL_SIZE_COLS) / 2.0));
float count = 0.0;
#ifdef STDDEV
vec3 sum = vec3(0.0, 0.0, 0.0);
vec3 sum2 = vec3(0.0, 0.0, 0.0);
#endif
vec4 currentPixel = texture2D(u_image, v_texcoord);
vec3 rgb = currentPixel.rgb;
for (int row = 0; row < KERNEL_SIZE_ROWS; row++) {
float pos_row = rowOffset + float(row);
for (int col = 0; col < KERNEL_SIZE_COLS; col++) {
vec2 pos = v_texcoord + vec2(colOffset + float(col), pos_row) * resolution;
vec4 pv = texture2D(u_image, mirror(pos));
count += pv.a;
#ifdef MIN
rgb = min(rgb, pv.rgb);
#elif defined(MAX)
rgb = max(rgb, pv.rgb);
#elif defined(MEAN)
rgb += pv.rgb;
#elif defined(STDDEV)
sum += pv.rgb;
sum2 += (pv.rgb * pv.rgb);
#endif
}
}
#ifdef MEAN
rgb *= invertValue(count);
#elif defined(STDDEV)
rgb = sqrt((sum2 - sum * sum * invertValue(count)) * invertValue(count));
#endif
float alpha = step(0.9999, count);
rgb = clamp(rgb, u_clampRange.s, u_clampRange.t);
#ifdef FILL
rgb = (1.0 - currentPixel.a) * rgb + currentPixel.a * currentPixel.rgb;
#endif
gl_FragColor = vec4(rgb * alpha, alpha);
}`},grayscale:{"grayscale.frag":`precision mediump float;
uniform sampler2D u_image;
varying vec2 v_texcoord;
uniform vec3 u_weights;
void main() {
vec4 pv = texture2D(u_image, v_texcoord);
float value = dot(u_weights, pv.rgb);
gl_FragColor = vec4(value, value, value, pv.a);
}`},local:{"local.frag":`precision highp float;
uniform sampler2D u_image;
uniform sampler2D u_image1;
#ifdef ONE_CONSTANT
uniform float u_image1Const;
#ifdef TWO_CONSTANT
uniform float u_image2Const;
#endif
uniform mat3 u_imageSwap;
#endif
varying vec2 v_texcoord;
uniform vec2 u_domainRange;
#include <raster/common/inverse.glsl>
void main() {
vec4 pv0 = texture2D(u_image, v_texcoord);
float a = pv0.r;
#ifdef TWO_IMAGES
#ifdef ONE_CONSTANT
float b = u_image1Const;
vec3 abc = u_imageSwap * vec3(a, b, 0);
a = abc.s;
b = abc.t;
#else
vec4 pv1 = texture2D(u_image1, v_texcoord);
float b = pv1.r;
#endif
#elif defined(CONDITIONAL)
#ifdef TWO_CONSTANT
float b = u_image1Const;
float c = u_image2Const;
vec3 abc = u_imageSwap * vec3(a, b, c);
a = abc.s;
b = abc.t;
c = abc.p;
#elif defined(ONE_CONSTANT)
vec4 pv1 = texture2D(u_image1, v_texcoord);
float b = pv1.r;
float c = u_image1Const;
vec3 abc = u_imageSwap * vec3(a, b, c);
a = abc.s;
b = abc.t;
c = abc.p;
#else
vec4 pv1 = texture2D(u_image1, v_texcoord);
vec4 pv2 = texture2D(u_image2, v_texcoord);
float b = pv1.r;
float c = pv2.r;
#endif
#endif
float result = a;
float alpha = pv0.a;
#ifdef PLUS
result = a + b;
#elif defined(MINUS)
result = a - b;
#elif defined(TIMES)
result = a * b;
#elif defined(DIVIDE)
result = a * invertValue(b);
alpha *= float(abs(sign(b)));
#elif defined(FLOATDIVIDE)
result = a * invertValue(b);
alpha *= float(abs(sign(b)));
#elif defined(FLOORDIVIDE)
result = floor(a * invertValue(b));
alpha *= float(abs(sign(b)));
#elif defined(SQUARE)
result = a * a;
#elif defined(SQRT)
result = sqrt(a);
#elif defined(POWER)
result = pow(a, b);
#elif defined(LN)
result = a <= 0.0 ? 0.0: log(a);
alpha *= float(a > 0.0);
#elif defined(LOG_1_0)
result = a <= 0.0 ? 0.0: log2(a) * invertValue(log2(10.0));
alpha *= float(a > 0.0);
#elif defined(LOG_2)
result = a <= 0.0 ? 0.0: log2(a);
alpha *= float(a > 0.0);
#elif defined(EXP)
result = exp(a);
#elif defined(EXP_1_0)
result = pow(10.0, a);
#elif defined(EXP_2)
result = pow(2.0, a);
#elif defined(ROUNDDOWN)
result = floor(a);
#elif defined(ROUNDUP)
result = ceil(a);
#elif defined(INT)
result = float(sign(a)) * floor(abs(a));
#elif defined(MOD)
result = mod(a, b);
#elif defined(NEGATE)
result = -a;
#elif defined(ABS)
result = abs(a);
#elif defined(ACOS)
result = abs(a) > 1.0 ? 0.0: acos(a);
alpha *= step(abs(a), 1.00001);
#elif defined(ACOSH)
result = acosh(a);
#elif defined(ASIN)
result = abs(a) > 1.0 ? 0.0: asin(a);
alpha *= step(abs(a), 1.00001);
#elif defined(ASINH)
result = asinh(a);
#elif defined(ATAN)
result = atan(a);
#elif defined(ATANH)
result = abs(a) > 1.0 ? 0.0: atanh(a);
alpha *= step(abs(a), 1.0);
#elif defined(ATAN_2)
result = atan(a, b);
#elif defined(COS)
result = cos(a);
#elif defined(COSH)
result = cosh(a);
#elif defined(SIN)
result = sin(a);
#elif defined(SINH)
result = sinh(a);
#elif defined(TAN)
result = tan(a);
#elif defined(TANH)
result = tanh(a);
#elif defined(BITWISEAND)
result = float(int(a) & int(b));
#elif defined(BITWISEOR)
result = float(int(a) | int(b));
#elif defined(BITWISELEFTSHIFT)
result = float(int(a) << int(b));
#elif defined(BITWISERIGHTSHIFT)
result = float(int(a) >> int(b));
#elif defined(BITWISENOT)
result = float(~(int(a)));
#elif defined(BITWISEXOR)
result = float(int(a) ^ int(b));
#elif defined(BOOLEANAND)
result = float((a != 0.0) && (b != 0.0));
#elif defined(BOOLEANNOT)
result = float(a == 0.0);
#elif defined(BOOLEANOR)
result = float((a != 0.0) || (b != 0.0));
#elif defined(BOOLEANXOR)
result = float((a != 0.0) ^^ (b != 0.0));
#elif defined(GREATERTHAN)
result = float(a > b);
#elif defined(GREATERTHANEQUAL)
result = float(a >= b);
#elif defined(LESSTHAN)
result = float(a < b);
#elif defined(LESSTHANEQUAL)
result = float(a <= b);
#elif defined(EQUALTO)
result = float(a == b);
#elif defined(NOTEQUAL)
result = float(a != b);
#elif defined(ISNULL)
result = float(alpha == 0.0);
alpha = 1.0;
#elif defined(SETNULL)
float maskValue = float(a == 0.0);
result = maskValue * b;
alpha *= maskValue;
#elif defined(CONDITIONAL)
float weight = float(abs(sign(a)));
result = weight * b + (1.0 - weight) * c;
#endif
float rangeFactor = step(u_domainRange.s, result) * step(result, u_domainRange.t);
result *= rangeFactor;
alpha *= rangeFactor;
#ifdef ROUND_OUTPUT
result = floor(result + 0.5);
#endif
gl_FragColor = vec4(result, result, result, alpha);
}`},mask:{"mask.frag":`precision mediump float;
uniform sampler2D u_image;
varying vec2 v_texcoord;
#define LEN_INCLUDED_RANGES 6
#define LEN_NODATA_VALUES 6
uniform highp float u_includedRanges[6];
uniform highp float u_noDataValues[6];
float maskFactor(float bandValue, float fromValue, float to) {
float factor = 1.0;
for (int i = 0; i < LEN_NODATA_VALUES; i++) {
factor *= float(u_noDataValues[i] != bandValue);
}
factor *= step(fromValue, bandValue) * step(bandValue, to);
return factor;
}
void main() {
vec4 pv = texture2D(u_image, v_texcoord);
float redFactor = maskFactor(pv.r, u_includedRanges[0], u_includedRanges[1]);
#ifdef MULTI_BAND
float greenFactor = maskFactor(pv.g, u_includedRanges[2], u_includedRanges[3]);
float blueFactor = maskFactor(pv.b, u_includedRanges[4], u_includedRanges[5]);
float maskFactor = redFactor * greenFactor * blueFactor;
gl_FragColor = pv * maskFactor;
#else
gl_FragColor = pv * redFactor;
#endif
}`},ndvi:{"ndvi.frag":`precision mediump float;
uniform sampler2D u_image;
varying vec2 v_texcoord;
uniform mediump mat3 u_bandIndexMat3;
#include <raster/common/inverse.glsl>
void main() {
vec4 pv = texture2D(u_image, v_texcoord);
vec3 pv2 = u_bandIndexMat3 * pv.rgb;
float nir = pv2.r;
float red = pv2.g;
float index = (nir - red) * invertValue(nir + red);
#ifdef SCALED
index = floor((index + 1.0) * 100.0 + 0.5);
#endif
gl_FragColor = vec4(index, index, index, pv.a);
}`},remap:{"remap.frag":`precision mediump float;
uniform sampler2D u_image;
varying vec2 v_texcoord;
#define LEN_REMAP_RANGES 18
#define LEN_NODATA_RANGES 12
uniform highp float u_rangeMaps[18];
uniform highp float u_noDataRanges[12];
uniform highp float u_unmatchMask;
uniform vec2 u_clampRange;
void main() {
vec4 pv = texture2D(u_image, v_texcoord);
float factor = 1.0;
float bandValue = pv.r;
for (int i = 0; i < LEN_NODATA_RANGES; i+=2) {
float inside = 1.0 - step(u_noDataRanges[i], bandValue) * step(bandValue, u_noDataRanges[i+1]);
factor *= inside;
}
float mapValue = 0.0;
float includeMask = 0.0;
for (int i = 0; i < LEN_REMAP_RANGES; i+=3) {
float stepMask = step(u_rangeMaps[i], bandValue) * step(bandValue, u_rangeMaps[i+1]);
includeMask = (1.0 - stepMask) * includeMask + stepMask;
mapValue = (1.0 - stepMask) * mapValue + stepMask * u_rangeMaps[i+2];
}
bandValue = factor * (mapValue + (1.0 - includeMask) * u_unmatchMask * pv.r);
float bandMask = factor * max(u_unmatchMask, includeMask);
bandValue = clamp(bandValue, u_clampRange.s, u_clampRange.t);
gl_FragColor = vec4(bandValue, bandValue, bandValue, bandMask * pv.a);
}`},slope:{"slope.frag":`precision mediump float;
uniform sampler2D u_image;
varying vec2 v_texcoord;
uniform vec2 u_cellSize;
uniform float u_zFactor;
uniform vec2 u_srcImageSize;
uniform float u_pixelSizePower;
uniform float u_pixelSizeFactor;
#include <raster/common/getSurfaceValues.glsl>
void main() {
float pv[10];
getSurfaceValues(u_image, v_texcoord, u_srcImageSize, pv);
float alpha = pv[9];
float xf = (u_zFactor + pow(u_cellSize[0], u_pixelSizePower) * u_pixelSizeFactor) / (8.0 * u_cellSize[0]);
float yf = (u_zFactor + pow(u_cellSize[1], u_pixelSizePower) * u_pixelSizeFactor) / (8.0 * u_cellSize[1]);
float dzx = (pv[2] + 2.0 * pv[5] + pv[8] - pv[0] - 2.0 * pv[3] - pv[6]) * xf;
float dzy = -(pv[6] + 2.0 * pv[7] + pv[8] - pv[0] - 2.0 * pv[1] - pv[2]) * yf;
float rise2run = sqrt(dzx * dzx + dzy * dzy);
#ifdef PERCENT_RISE
float result = rise2run * 100.0;
#else
float result = atan(rise2run) * 57.2957795;
#endif
#ifdef ROUND_OUTPUT
result = floor(result + 0.5);
#endif
gl_FragColor = vec4(result, result, result, alpha);
}`},stretch:{"stretch.frag":`precision mediump float;
uniform sampler2D u_image;
varying highp vec2 v_texcoord;
uniform float u_minCutOff[3];
uniform float u_maxCutOff[3];
uniform float u_minOutput;
uniform float u_maxOutput;
uniform float u_factor[3];
uniform float u_gamma[3];
uniform float u_gammaCorrection[3];
float stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, float gamma, float gammaCorrection) {
val = clamp(val, minCutOff, maxCutOff);
float stretchedVal;
#ifdef USE_GAMMA
float tempf = 1.0;
float outRange = maxOutput - minOutput;
float relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);
tempf -= step(1.0, gamma) * sign(gamma - 1.0) * pow(1.0 / outRange, relativeVal * gammaCorrection);
stretchedVal = tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput;
stretchedVal = clamp(stretchedVal, minOutput, maxOutput);
#else
stretchedVal = minOutput + (val - minCutOff) * factor;
#endif
#ifdef ROUND_OUTPUT
stretchedVal = floor(stretchedVal + 0.5);
#endif
return stretchedVal;
}
void main() {
vec4 currentPixel = texture2D(u_image, v_texcoord);
float redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_gamma[0], u_gammaCorrection[0]);
#ifdef MULTI_BAND
float greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_gamma[1], u_gammaCorrection[1]);
float blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_gamma[2], u_gammaCorrection[2]);
gl_FragColor = vec4(redVal, greenVal, blueVal, currentPixel.a);
#else
gl_FragColor = vec4(redVal, redVal, redVal, currentPixel.a);
#endif
}`},vs:{"vs.vert":`precision mediump float;
attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform highp vec2 u_coordScale;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_pos;
gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);
}`}},scalar:{"scalar.frag":`precision mediump float;
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
}`},stretch:{"stretch.frag":`precision mediump float;
varying highp vec2 v_texcoord;
#include <raster/common/common.glsl>
uniform float u_minCutOff[3];
uniform float u_maxCutOff[3];
uniform float u_minOutput;
uniform float u_maxOutput;
uniform float u_factor[3];
uniform bool u_useGamma;
uniform float u_gamma[3];
uniform float u_gammaCorrection[3];
#include <raster/lut/colorize.glsl>
float stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, bool useGamma, float gamma, float gammaCorrection) {
if (val >= maxCutOff) {
return maxOutput;
} else if (val <= minCutOff) {
return minOutput;
}
float stretchedVal;
if (useGamma) {
float tempf = 1.0;
float outRange = maxOutput - minOutput;
float relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);
if (gamma > 1.0) {
tempf -= pow(1.0 / outRange, relativeVal * gammaCorrection);
}
stretchedVal = (tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput) / 255.0;
} else {
stretchedVal = minOutput + (val - minCutOff) * factor;
}
#ifdef ROUND_OUTPUT
stretchedVal = floor(stretchedVal + 0.5);
#endif
return stretchedVal;
}
void main() {
vec2 pixelLocation = getPixelLocation(v_texcoord);
if (isOutside(pixelLocation)) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
vec4 currentPixel = getPixel(pixelLocation);
#ifdef NOOP
gl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;
return;
#endif
if (u_bandCount == 1) {
float grayVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);
#ifdef APPLY_COLORMAP
vec4 result = colorize(vec4(grayVal, grayVal, grayVal, 1.0), u_useGamma ? 255.0 : 1.0);
gl_FragColor = vec4(result.xyz, 1.0) * result.a * currentPixel.a * u_opacity;
#else
gl_FragColor = vec4(grayVal, grayVal, grayVal, 1.0) * currentPixel.a * u_opacity;
#endif
} else {
float redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);
float greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_useGamma, u_gamma[1], u_gammaCorrection[1]);
float blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_useGamma, u_gamma[2], u_gammaCorrection[2]);
gl_FragColor = vec4(redVal, greenVal, blueVal, 1.0) * currentPixel.a * u_opacity;
}
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
}`}};function Qt(u){return function(e){let t=u;return e.split("/").forEach(n=>{t&&(t=t[n])}),t}}const Jt=new St(Qt(Xt));function fe(u){return Jt.resolveIncludes(u)}const oe={shaders:{vertexShader:fe("background/background.vert"),fragmentShader:fe("background/background.frag")},attributes:new Map([["a_pos",0]])},en=()=>gt("clip",{geometry:[{location:0,name:"a_pos",count:2,type:P.SHORT}]});let tn=class extends ${constructor(){super(...arguments),this._color=H(0,1,0,1)}dispose(){this._program&&this._program.dispose()}prepareState({context:e}){e.setStencilTestEnabled(!0),e.setBlendingEnabled(!1),e.setFaceCullingEnabled(!1),e.setColorMask(!1,!1,!1,!1),e.setStencilOp(Q.KEEP,Q.KEEP,Q.REPLACE),e.setStencilWriteMask(255),e.setStencilFunction(U.ALWAYS,0,255)}draw(e,t){const{context:n,state:i,requestRender:o,allowDelayedRender:a}=e,r=en(),l=t.getVAO(n,i,r.attributes,r.bufferLayouts);l.indexBuffer!=null&&(this._program||(this._program=ce(n,oe)),!a||o==null||this._program.compiled?(n.useProgram(this._program),this._program.setUniform2fv("u_coord_range",[1,1]),this._program.setUniform4fv("u_color",this._color),this._program.setUniformMatrix3fv("u_dvsMat3",i.displayMat3),n.bindVAO(l),n.drawElements(A.TRIANGLES,l.indexBuffer.size,P.UNSIGNED_INT,0),n.bindVAO()):o())}};const xe=new Map([["geometry",[new ne("a_pos",2,P.BYTE,0,2)]]]),li=new Map([["geometry",[new ne("a_pos",2,P.BYTE,0,4),new ne("a_tex",2,P.BYTE,2,4)]]]),si=new Map([["geometry",[new ne("a_pos",2,P.UNSIGNED_SHORT,0,4)]]]);let nn=class extends ${constructor(){super(...arguments),this._color=H(1,0,0,1),this._initialized=!1}dispose(){this._solidProgram&&(this._solidProgram.dispose(),this._solidProgram=null),this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null)}prepareState({context:e}){e.setDepthWriteEnabled(!1),e.setDepthTestEnabled(!1),e.setStencilTestEnabled(!0),e.setBlendingEnabled(!1),e.setColorMask(!1,!1,!1,!1),e.setStencilOp(Q.KEEP,Q.KEEP,Q.REPLACE),e.setStencilWriteMask(255)}draw(e,t){const{context:n,requestRender:i,allowDelayedRender:o}=e;this._initialized||this._initialize(n),!o||i==null||this._solidProgram.compiled?(n.setStencilFunctionSeparate(xt.FRONT_AND_BACK,U.GREATER,t.stencilRef,255),n.bindVAO(this._solidVertexArrayObject),n.useProgram(this._solidProgram),this._solidProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.displayViewScreenMat3),this._solidProgram.setUniform2fv("u_coord_range",[t.rangeX,t.rangeY]),this._solidProgram.setUniform1f("u_depth",0),this._solidProgram.setUniform4fv("u_color",this._color),n.drawArrays(A.TRIANGLE_STRIP,0,4),n.bindVAO()):i()}_initialize(e){if(this._initialized)return!0;const t=ce(e,oe);if(!t)return!1;const n=new Int8Array([0,0,1,0,0,1,1,1]),i=k.createVertex(e,W.STATIC_DRAW,n),o=new Z(e,oe.attributes,xe,new Map([["geometry",i]]));return this._solidProgram=t,this._solidVertexArrayObject=o,this._initialized=!0,!0}},on=class extends je{constructor(e,t,n,i,o,a,r=o,l=a){super(),this.tileDebugInfoTexture=null,this.debugInfo={display:{length:0,minOrderedLength:0,minUnorderedLength:0,triangleCount:0},memory:{bytesUsed:0,bytesReserved:0}},this._destroyed=!1,this.key=new Rt(e),this.resolution=t,this.x=n,this.y=i,this.width=o,this.height=a,this.rangeX=r,this.rangeY=l}destroy(){this.tileDebugInfoTexture&&(this.tileDebugInfoTexture.dispose(),this.tileDebugInfoTexture=null),this._destroyed=!0}get debugSlot(){let e=this;for(;e.parent!==this._stage;){if(!e.parent)return 0;e=e.parent}return this._stage.children.indexOf(e)}setTransform(e){const t=this.resolution/(e.resolution*e.pixelRatio),n=this.transforms.tileMat3,[i,o]=e.toScreenNoRotation([0,0],[this.x,this.y]),a=this.width/this.rangeX*t,r=this.height/this.rangeY*t;Ke(n,a,0,0,0,r,0,i,o,1),ge(this.transforms.displayViewScreenMat3,e.displayViewMat3,n)}get destroyed(){return this._destroyed}};const ze=ie(),_e=Ct();let an=class extends on{constructor(e,t,n,i){super(e,t,n,i,ue,ue)}destroy(){super.destroy()}setTransform(e){const t=this.resolution/e.resolution,n=this.transforms.tileMat3,[i,o]=e.toScreenNoRotation([0,0],[this.x,this.y]),a=this.width/this.rangeX*t,r=this.height/this.rangeY*t;Ke(n,a,0,0,0,r,0,i,o,1),ge(this.transforms.displayViewScreenMat3,e.displayViewMat3,n);const l=Tt(pe(),a,0,0,r,i,o);bt(this.transforms.labelMat2d,e.viewMat2d,l)}_createTransforms(){return{labelMat2d:pe(),tileMat3:ie(),displayViewScreenMat3:ie()}}containsScreenPoint(e,t,n){const i=ge(ze,e.viewMat3,this.transforms.tileMat3),o=It(ze,i);if(o==null)return!0;At(_e,...t,1);const a=Pt(_e,_e,o),r=n*(this.resolution/e.resolution);return a[0]>=-r&&a[0]<this.width+r&&a[1]>=-r&&a[1]<this.height+r}},Y=class it{constructor(e){if(this.next=null,!Array.isArray(e))return void(this.data=e);this.data=e[0];let t=this;for(let n=1;n<e.length;n++)t.next=new it([e[n]]),t=t.next}*values(){let e=this;for(;e;)yield e.data,e=e.next}forEach(e){let t=this;for(;t;)e(t.data),t=t.next}get last(){return this.next?this.next.last:this}},ot=class{constructor(e){this._head=null,e!=null&&(this._head=new Y(e))}get head(){return this._head}maxAvailableSpace(){if(this._head==null)return 0;let e=0;return this._head.forEach(t=>{const n=t.end-t.start;e=Math.max(e,n)}),e}firstFit(e){if(this._head==null)return null;let t=null,n=this._head;for(;n;){const i=n.data.end-n.data.start;if(i===e)return t?t.next=n.next:this._head=n.next,n.data.start;if(i>e){const o=n.data.start;return n.data.start+=e,o}t=n,n=n.next}return null}free(e,t){const n=e+t;if(this._head==null){const r=new Y({start:e,end:n});return void(this._head=r)}if(n<=this._head.data.start){if(n===this._head.data.start)return void(this._head.data.start-=t);const r=new Y({start:e,end:n});return r.next=this._head,void(this._head=r)}let i=this._head,o=i.next;for(;o;){if(o.data.start>=n){if(i.data.end===e){if(i.data.end+=t,i.data.end===o.data.start){const l=o.data.end-o.data.start;return i.data.end+=l,void(i.next=o.next)}return}if(o.data.start===n)return void(o.data.start-=t);const r=new Y({start:e,end:n});return r.next=i.next,void(i.next=r)}i=o,o=o.next}if(e===i.data.end)return void(i.data.end+=t);const a=new Y({start:e,end:n});i.next=a}clear(){this._head=null}};function rn(u,e){return u<<16|255&e}function ln(u){return 255&u}let te=class{constructor(e,t,n,i,o){this.instance=e,this.materialKey=t,this.target=n,this.start=i,this.count=o}get textureKey(){return ln(this.materialKey)}get indexEnd(){return this.start+this.count}extend(e){this.count+=e}render(e){this.instance.techniqueRef.render(e,this)}getStencilReference(){return this.target.stencilRef}getAttributePrecisionPackFactors(){const e=this.instance.instanceId;return this.target.getMesh(e).getAttributePrecisionPackFactors()}draw(e,t){Et(e)?this.drawCompute(e.context,t):this.drawGeometry(e.context,t)}drawCompute(e,t){const n=this.instance.instanceId,i=this.target.getMesh(n).getComputeVAO(e,t),o=this.start*Uint32Array.BYTES_PER_ELEMENT/3;e.bindVAO(i),e.drawElements(A.POINTS,this.count/3,P.UNSIGNED_INT,o),e.bindVAO(null)}drawGeometry(e,t){const n=this.instance.instanceId,i=this.target.getMesh(n).getGeometryVAO(e,t),o=this.start*Uint32Array.BYTES_PER_ELEMENT;e.bindVAO(i),e.drawElements(A.TRIANGLES,this.count,P.UNSIGNED_INT,o),e.bindVAO(null)}},sn=class at{constructor(){this._length=0,this._minOrderedLength=0,this._materialKeys=new Set}static fromDisplayEntities(e,t,n,i){const o=new at;for(const a of e.values())for(const r of a.records){const l=n.getInstance(r.instanceId),s=rn(l.instanceId,r.textureKey);o.addRecord(l,s,r.indexStart,r.indexCount,r.vertexStart,r.vertexCount,t,i)}return o}get length(){return this._length}get minOrderedLength(){return this._minOrderedLength}get minUnorderedLength(){return this._materialKeys.size}render(e,t){const{drawPhase:n}=e;for(const i of this.infos()){const o=i.instance.techniqueRef;o.drawPhase&n&&(t==null||o.type===t)&&i.render(e)}}addRecord(e,t,n,i,o,a,r,l){let s=n,c=i;if(c||(s=o,c=a),!c)return;if(this._head==null){const S=new te(e,t,r,s,c);return this._head=new Y(S),this._tail=this._head,this._length++,void this._minOrderedLength++}if(l===he.STRICT_ORDER)return this._insert(e,t,r,s,c,this._tail,null);let _=null,f=this._head;const y=e.instanceId,d=e.techniqueRef.symbologyPlane;if(l===he.STRICT_MARKERS_AND_TEXT&&(d===Ce.MARKER||d===Ce.TEXT))return this._insert(e,t,r,s,c,this._tail,null);for(;f;){const S=f.data.instance,g=S.instanceId,O=S.techniqueRef.symbologyPlane,I=_?.data.instance.instanceId;if(d<O||y===I&&y!==g)return this._insert(e,t,r,s,c,_,f);_=f,f=f.next}this._insert(e,t,r,s,c,_,null)}*infos(){if(this._head!=null)for(const e of this._head.values())yield e}_insert(e,t,n,i,o,a,r){if(a==null&&r==null){const l=new te(e,t,n,i,o);return this._head=new Y(l),this._tail=this._head,this._length++,void this._minOrderedLength++}return t!==this._tail.data.materialKey&&this._minOrderedLength++,this._materialKeys.add(t),a==null&&r!=null?this._insertAtHead(e,t,n,i,o,r):a!=null&&r==null?this._insertAtEnd(e,t,n,i,o,a):a!=null&&r!=null?this._insertAtMiddle(e,t,n,i,o,a,r):void 0}_insertAtHead(e,t,n,i,o,a){const r=i+o;if(t===a.data.materialKey&&n===a.data.target&&r===a.data.start)a.data.start=i,a.data.count+=o;else{const l=new te(e,t,n,i,o);this._head=new Y(l),this._head.next=a,this._length++}}_insertAtEnd(e,t,n,i,o,a){if(a.data.materialKey===t&&a.data.indexEnd===i)a.data.count+=o;else{const r=new te(e,t,n,i,o);this._tail=new Y(r),a.next=this._tail,this._length++}}_insertAtMiddle(e,t,n,i,o,a,r){const l=i+o;if(a.data.materialKey===t&&a.data.target===n&&a.data.indexEnd===i)a.data.count+=o,a.data.materialKey===r.data.materialKey&&a.data.target===r.data.target&&a.data.indexEnd===r.data.start&&(a.data.count+=r.data.count,a.next=r.next,this._length--);else if(t===r.data.materialKey&&n===r.data.target&&l===r.data.start)r.data.start=i,r.data.count+=o;else{const s=new te(e,t,n,i,o),c=new Y(s);a.next=c,c.next=r,this._length++}}},un=class{constructor(e){this._indexOnly=e,this.vertex={count:0,operations:[]},this.index={count:0,operations:[]}}copyRecord(e){let t=0;this._indexOnly||(t=this.vertex.count-e.vertexStart,this.vertex.operations.push({srcFrom:e.vertexStart,dstFrom:this.vertex.count,count:e.vertexCount,mutate:0}),e.vertexStart=this.vertex.count,this.vertex.count+=e.vertexCount);let n=!1;if(this._indexOnly&&this.index.operations.length>=1){const i=this.index.operations[this.index.operations.length-1];i.srcFrom+i.count===e.indexStart&&(i.count+=e.indexCount,n=!0)}n||this.index.operations.push({srcFrom:e.indexStart,dstFrom:this.index.count,count:e.indexCount,mutate:t}),e.indexStart=this.index.count,this.index.count+=e.indexCount}};const Ve=q("esri-2d-log-allocations");let Ne=class rt{static create(e,t){const n=t.acquireUint32Array(e);return new rt(n,t)}constructor(e,t){this._array=e,this._pool=t}get array(){return this._array}get length(){return this._array.length}getUint32View(e,t){return new Uint32Array(this._array.buffer,e+this._array.byteOffset,t)}expand(e){if(e<=this._array.byteLength)return;const t=this._pool.acquireUint32Array(e);t.set(this._array),this._pool.releaseUint32Array(this._array),this._array=t}destroy(){this._pool.releaseUint32Array(this._array)}},me=class lt{constructor(){this._data=new ArrayBuffer(lt.BYTE_LENGTH),this._freeList=new ot({start:0,end:this._data.byteLength})}static get BYTE_LENGTH(){return 16e6}get buffer(){return this._data}acquireUint32Array(e){const t=this._freeList.firstFit(e);return t==null?null:new Uint32Array(this._data,t,e/Uint32Array.BYTES_PER_ELEMENT)}releaseUint32Array(e){this._freeList.free(e.byteOffset,e.byteLength)}};class vi{constructor(){this._pages=[],this._pagesByBuffer=new Map,this._bytesAllocated=0}destroy(){this._pages=[],this._pagesByBuffer=null}get _bytesTotal(){return this._pages.length*me.BYTE_LENGTH}acquireUint32Array(e){if(this._bytesAllocated+=e,Ve&&console.log(`Allocating ${e}, (${this._bytesAllocated} / ${this._bytesTotal})`),e>=me.BYTE_LENGTH)return new Uint32Array(e/Uint32Array.BYTES_PER_ELEMENT);for(const n of this._pages){const i=n.acquireUint32Array(e);if(i!=null)return i}const t=this._addPage().acquireUint32Array(e);return ve(t,"Expected to allocate page"),t}releaseUint32Array(e){this._bytesAllocated-=e.byteLength,Ve&&console.log(`Freeing ${e.byteLength}, (${this._bytesAllocated} / ${this._bytesTotal})`);const t=this._pagesByBuffer.get(e.buffer);t&&t.releaseUint32Array(e)}_addPage(){const e=new me;return this._pages.push(e),this._pagesByBuffer.set(e.buffer,e),e}}const cn=1.25,we=32767,fn=we<<16|we;let Fe=class{constructor(e,t,n,i){this._pool=i;const o=Ne.create(t*n*Uint32Array.BYTES_PER_ELEMENT,this._pool);this.size=t,this.strideInt=n,this.bufferType=e,this.dirty={start:1/0,end:0},this.memoryStats={bytesUsed:0,bytesReserved:t*n*Uint32Array.BYTES_PER_ELEMENT},this._gpu=null,this._cpu=o,this.clear()}get elementSize(){return this._cpu.length/this.strideInt}get intSize(){return this.fillPointer*this.strideInt}get byteSize(){return this.intSize*Uint32Array.BYTES_PER_ELEMENT}get invalidated(){return this.bufferSize>0&&!this._gpu}get invalidatedComputeBuffer(){return this.bufferSize>0&&!this._gpuComputeTriangles}invalidate(){this._invalidateTriangleBuffer(),this._gpu?.dispose(),this._gpu=null}_invalidateTriangleBuffer(){this._gpuComputeTriangles?.dispose(),this._gpuComputeTriangles=null}destroy(){this._gpu?.dispose(),this._gpuComputeTriangles?.dispose(),this._cpu?.destroy()}clear(){this.dirty.start=1/0,this.dirty.end=0,this.freeList=new ot({start:0,end:this._cpu.length/this.strideInt}),this.fillPointer=0}ensure(e){if(!(this.maxAvailableSpace()>=e)&&e*this.strideInt>this._cpu.length-this.fillPointer){this.invalidate();const t=this._cpu.length/this.strideInt,n=Math.round((t+e)*cn),i=n*this.strideInt;this._cpu.expand(i*Uint32Array.BYTES_PER_ELEMENT),this.freeList.free(t,n-t),this.memoryStats.bytesReserved+=(n-t)*this.strideInt*Uint32Array.BYTES_PER_ELEMENT}}set(e,t){this._cpu.array[e]!==t&&(this._cpu.array[e]=t,this.dirty.start=Math.min(e,this.dirty.start),this.dirty.end=Math.max(e+1,this.dirty.end))}getGPUBuffer(e,t=!1){if(!this.bufferSize)return null;if(t){if(this.bufferType!=="index")throw new Error("Tired to get triangle buffer, but target is not an index buffer");return this._gpuComputeTriangles==null&&(this._gpuComputeTriangles=this._createComputeBuffer(e)),this._gpuComputeTriangles}return this._gpu==null&&(this._gpu=this._createBuffer(e)),this._gpu}getView(e,t){return this._cpu.getUint32View(e,t/Uint32Array.BYTES_PER_ELEMENT)}get bufferSize(){return this._cpu.length/this.strideInt}maxAvailableSpace(){return this.freeList.maxAvailableSpace()}insert(e,t,n,i){const o=n*this.strideInt;if(!o)return 0;const a=t*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,r=new Uint32Array(e,a,o),l=this.freeList.firstFit(n);ve(l,"First fit region must be defined");const s=l*this.strideInt,c=o;if(this._cpu.array.set(r,s),i!==0)for(let _=0;_<r.length;_++)this._cpu.array[_+s]+=i;return this.dirty.start=Math.min(this.dirty.start,s),this.dirty.end=Math.max(this.dirty.end,s+c),this.fillPointer=Math.max(this.fillPointer,s+c),this.memoryStats.bytesUsed+=n*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,l}copyFrom(e,t,n,i,o){const a=n*this.strideInt;if(!a)return 0;const r=t*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,l=e._cpu.getUint32View(r,a),s=this.freeList.firstFit(n);ve(s,"First fit region must be defined");const c=s*this.strideInt,_=a;if(this._cpu.array.set(l,c),i!==0)for(let f=0;f<a;f++)this._cpu.array[c+f*this.strideInt+o]+=i;return this.dirty.start=Math.min(this.dirty.start,c),this.dirty.end=Math.max(this.dirty.end,c+_),this.fillPointer=Math.max(this.fillPointer,c+_),this.memoryStats.bytesUsed+=n*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,s}free(e,t,n){const i=e*this.strideInt,o=(e+t)*this.strideInt;if(n===!0)for(let a=e;a!==e+t;a++)this._cpu.array[a*this.strideInt]=fn;this.dirty.start=Math.min(this.dirty.start,i),this.dirty.end=Math.max(this.dirty.end,o),this.freeList.free(e,t),this.memoryStats.bytesUsed-=t*this.strideInt*Uint32Array.BYTES_PER_ELEMENT}upload(){if(this.dirty.end){if(this._invalidateTriangleBuffer(),this._gpu==null)return this.dirty.start=1/0,void(this.dirty.end=0);this._gpu.setSubData(this._cpu.array,this.dirty.start,this.dirty.start,this.dirty.end),this.dirty.start=1/0,this.dirty.end=0}}reshuffle(e,t){if(t.length===0)return;const n=this.byteSize,i=e*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,o=n>i,a=this._cpu,r=Ne.create(i,this._pool);o||r.array.set(this._cpu.getUint32View(0,this.intSize));for(const l of t)if(o||l.srcFrom!==l.dstFrom||l.mutate!==0){this.dirty.start=Math.min(this.dirty.start,l.dstFrom*this.strideInt),this.dirty.end=Math.max(this.dirty.end,(l.dstFrom+l.count)*this.strideInt);for(let s=0;s<l.count;s++){const c=(l.dstFrom+s)*this.strideInt,_=(l.srcFrom+s)*this.strideInt;for(let f=0;f<this.strideInt;f++)r.array[c+f]=a.array[_+f]+l.mutate}}this._cpu.destroy(),this._cpu=r,o&&this.invalidate(),this.freeList.clear(),this.memoryStats.bytesUsed=this.memoryStats.bytesReserved=i}_createBuffer(e){const t=W.DYNAMIC_DRAW;return this.bufferType==="index"?k.createIndex(e,t,this._cpu.array):k.createVertex(e,t,this._cpu.array)}_createComputeBuffer(e){const t=W.DYNAMIC_DRAW,n=new Uint32Array(this.fillPointer/3);for(let i=0;i<this.fillPointer;i+=3)n[i/3]=this._cpu.array[i];return k.createIndex(e,t,n)}};const Be=1e3;function dn(u,e){const t=u.attributes.filter(n=>e.locations.has(n.name)).map(n=>({name:n.name,type:n.type,count:n.count,divisor:0,normalized:n.normalized??!1,offset:n.offset,stride:u.stride}));return new Map([["geometry",t]])}function _n(u,e){const t=[],n=u.attributes.filter(i=>e.locations.has(i.name));for(const i of n){t.push({name:i.name,type:i.type,count:i.count,divisor:0,normalized:i.normalized??!1,offset:i.offset,stride:u.stride});const o=e.computeAttributeMap[i.name];o!=null&&o.length===2&&(t.push({name:o[0],count:i.count,divisor:0,type:i.type,normalized:i.normalized??!1,offset:i.offset+u.stride,stride:u.stride}),t.push({name:o[1],count:i.count,divisor:0,type:i.type,normalized:i.normalized??!1,offset:i.offset+2*u.stride,stride:u.stride}))}return new Map([["geometry",t]])}let mn=class{constructor(e,t){if(this._bufferPool=e,this._layout=t,this._invalidatedGeometry=!1,this._invalidatedCompute=!1,this._position=this._layout.attributes.find(n=>n.name==="pos"||n.name==="position"),!this._position)throw new Error("InternalError: Unable to find position attribute")}destroy(){this._indexBuffer=Ee(this._indexBuffer),this._vertexBuffer=Ee(this._vertexBuffer),this._computeVAO?.disposeVAOOnly(),this._geometryVAO?.disposeVAOOnly()}get layout(){return this._layout}getDrawArgs(e,t,n,i){return i?{primitive:A.POINTS,count:t/3,offset:n/3}:{primitive:e,count:t,offset:n}}getAttributePrecisionPackFactors(){const e={};for(const t of this.layout.attributes)t.packPrecisionFactor&&(e[t.name]=t.packPrecisionFactor);return e}getDebugVertexInfo(e=!1,t){if(!this._vertexBuffer)return null;const n=this._layout,i=n.stride,o=this._vertexBuffer.getView(0,this._vertexBuffer.byteSize),a=[];if(e)if(t==null)console.log("must provide location info to see compute attributes");else for(const f of n.attributes){const y=t.computeAttributeMap[f.name];y!=null&&y.length===2&&(a.push({...f,name:y[0],offset:f.offset+i}),a.push({...f,name:y[1],offset:f.offset+2*i}))}const r=new DataView(o.slice().buffer);let l=o.byteLength/i;e&&(l=this._indexBuffer.fillPointer/3);const s=this._indexBuffer.getView(0,this._indexBuffer.byteSize);let c=0;const _=[];for(let f=0;f<l;f++){e&&(c=s[3*f]*i);const y={};for(const d of[...n.attributes,...a]){let S=`${d.offset} ${d.name}`,g=Ze(r,d,c);if(d.packPrecisionFactor)if(S+=` (precision: ${d.packPrecisionFactor})`,typeof g=="number")g/=d.packPrecisionFactor;else for(let O=0;O<g.length;O++)g[O]/=d.packPrecisionFactor;y[S]=g}c+=i,_.push(y)}return{vertices:_,layout:n}}_ensure(e,t){if(this._vertexBuffer&&this._indexBuffer)this._indexBuffer.ensure(Math.max(e,1e3)),this._vertexBuffer.ensure(Math.max(t,1e3));else{const n=this._layout.stride/Uint32Array.BYTES_PER_ELEMENT;this._indexBuffer=new Fe("index",Math.max(e,Be),1,this._bufferPool),this._vertexBuffer=new Fe("vertex",Math.max(t,Be),n,this._bufferPool)}}append(e){const t=e.layout.stride,n=e.indices.byteLength/Uint32Array.BYTES_PER_ELEMENT,i=e.vertices.byteLength/t;this._ensure(n,i);const{vertices:o,indices:a}=e,r=this._vertexBuffer.insert(o,0,o.byteLength/t,0);return{vertexFrom:r,indexFrom:this._indexBuffer.insert(a,0,a.byteLength/4,r)}}copyRecordFrom(e,t,n,i){const{indexStart:o,indexCount:a,vertexStart:r,vertexCount:l}=t;this._ensure(a,l);const s=e._position,c=n*(s.packPrecisionFactor??1),_=i*(s.packPrecisionFactor??1),f=s.offset,y=L(c,_),d=this._vertexBuffer.copyFrom(e._vertexBuffer,r,l,y,f),S=this._indexBuffer.copyFrom(e._indexBuffer,o,a,d-r,0),g=t.clone();return g.vertexStart=d,g.indexStart=S,g.overlaps=0,g}remove(e,t,n,i){this._indexBuffer.free(e,t),this._vertexBuffer.free(n,i)}upload(){this._invalidatedGeometry=!0,this._invalidatedCompute=!0}getGeometryVAO(e,t){if(!this._vertexBuffer||!this._indexBuffer||!this._vertexBuffer.bufferSize)return null;if(this._invalidatedGeometry){(this._vertexBuffer.invalidated||this._indexBuffer.invalidated)&&(this._vertexBuffer.invalidate(),this._indexBuffer.invalidate(),this._geometryVAO?.disposeVAOOnly(),this._geometryVAO=null),this._vertexBuffer.upload(),this._indexBuffer.upload();const n=this._indexBuffer.getGPUBuffer(e,!1),i=this._vertexBuffer.getGPUBuffer(e);this._geometryVAO||(this._geometryVAO=new Z(e,t.locations,dn(this.layout,t),new Map([["geometry",i]]),n)),this._invalidatedGeometry=!1}return this._geometryVAO}getComputeVAO(e,t){if(!this._vertexBuffer||!this._indexBuffer||!this._vertexBuffer.bufferSize)return null;if(this._invalidatedCompute){(this._vertexBuffer.invalidated||this._indexBuffer.invalidatedComputeBuffer)&&(this._vertexBuffer.invalidate(),this._indexBuffer.invalidate(),this._computeVAO?.disposeVAOOnly(),this._computeVAO=null),this._vertexBuffer.upload(),this._indexBuffer.upload();const n=this._indexBuffer.getGPUBuffer(e,!0),i=this._vertexBuffer.getGPUBuffer(e);this._computeVAO||(this._computeVAO=new Z(e,t.locations,_n(this.layout,t),new Map([["geometry",i]]),n),this._invalidatedCompute=!1)}return this._computeVAO}get memoryStats(){return{bytesUsed:this._vertexBuffer.memoryStats.bytesUsed+this._indexBuffer.memoryStats.bytesUsed,bytesReserved:this._vertexBuffer.memoryStats.bytesReserved+this._indexBuffer.memoryStats.bytesReserved,vertex:this._vertexBuffer.memoryStats,index:this._indexBuffer.memoryStats}}reshuffle(e){this._vertexBuffer&&this._vertexBuffer.reshuffle(e.vertex.count,e.vertex.operations),this._indexBuffer&&this._indexBuffer.reshuffle(e.index.count,e.index.operations)}},se=class{constructor(e){this._pos=0,this._buffer=e,this._i32View=new Int32Array(this._buffer),this._f32View=new Float32Array(this._buffer)}readInt32(){return this._i32View[this._pos++]}readF32(){return this._f32View[this._pos++]}};function Ue(u){return u?{entities:re(new se(u.entities),le),vertexData:u.data.map(vn)}:null}function vn(u){const e=u.layout.stride,t=new DataView(u.vertices),n=[],i=u.vertices.byteLength/e;let o=0;for(let a=0;a<i;a++){const r={};for(const l of u.layout.attributes){let s=`${l.offset} ${l.name}`,c=Ze(t,l,o);if(l.packPrecisionFactor)if(s+=` (precision: ${l.packPrecisionFactor})`,typeof c=="number")c/=l.packPrecisionFactor;else for(let _=0;_<c.length;_++)c[_]/=l.packPrecisionFactor;r[s]=c}o+=e,n.push(r)}return{vertices:n,layout:u.layout}}const pn=()=>Se.getLogger("esri.views.2d.engine.webgl.FeatureTile");let gn=0,hn=class extends an{constructor(e,t,n,i,o=!1){super(e,t,n,i),this._meshes=new Map,this._entities=[],this._invalidated=!1,this._nextUploadAllowed=!1,this.tileAge=gn++,this._metrics=[],this._entityIds=new Set,this._entityIdsFromBuffer=new Set,this._attributeEpoch=0,this._encounteredEnd=!1,this._objectIdMap=null,this.visible=!0,this.transforms.labelMat2d=pe(),this.enableDeferredUploads=o}destroy(){super.destroy(),this.clear()}clear(){for(const e of this._meshes.values())e.destroy();this._meshes.clear(),this._entities=[],this._metrics=[],this._displayList=null,this._invalidated=!0,this._entityIds.clear(),this._nextUploadAllowed=!0}beforeRender(e){super.beforeRender(e),this._needsReshuffle&&e.reshuffleManager.schedule(this)}tryReady(e){const t=this._invalidated&&!this._uploadAllowed;return!(this.isReady||t||!this._encounteredEnd||!(e>=this._attributeEpoch))&&(q("esri-2d-update-debug")&&console.debug(`Tile[${this.key.id}] FeatureTile.ready [epoch=${e}]`),this.ready(),this.requestRender(),!0)}get labelMetrics(){return this._metrics}get hasData(){return!!this._meshes.size}get hasAnimations(){return!!this._objectIdMap}get needsUpload(){return this._invalidated}get _uploadAllowed(){return!this.enableDeferredUploads||this._nextUploadAllowed}upload(){this._nextUploadAllowed=!0}getDisplayList(e,t){if(this._uploadAllowed&&this._invalidated){this._entities.sort((n,i)=>{const o=i.sortKey,a=n.sortKey;return a===o?n.id-i.id:a-o}),t===he.BATCHING&&this.reshuffle(!0),this._displayList=sn.fromDisplayEntities(this._entities,this,e,t);for(const n of this._meshes.values())n.upload();this.debugInfo.display.length=this._displayList.length,this.debugInfo.display.minOrderedLength=this._displayList.minOrderedLength,this.debugInfo.display.minUnorderedLength=this._displayList.minUnorderedLength,this.requestRender(),this._invalidated=!1,this._nextUploadAllowed=!1}return this._displayList}getMesh(e){if(!this._meshes.has(e))throw new Error(`InternalError: Unable to find VAO for instance: ${e}`);return this._meshes.get(e)}getSortKeys(e){const t=new Map;for(const{id:n,sortKey:i}of this._entities)if(e.has(n)&&t.set(n,i),t.size===e.size)break;return t}onMessage(e){if(e.objectIdMap)for(const t in e.objectIdMap)this._objectIdMap||(this._objectIdMap={}),this._objectIdMap[t]=e.objectIdMap[t];switch(e.type){case"append":this._onAppendMessage(e);break;case"update":this._onUpdateMessage(e)}if(this._aggregateMemoryStats(),this.requestRender(),e.end){if(q("esri-2d-update-debug")&&console.debug(`Tile[${this.key.id}] FeatureTile.end [epoch=${e.attributeEpoch}]`),!e.attributeEpoch)throw new Error("InternalError: Attribute epoch not defined.");this._attributeEpoch=e.attributeEpoch,this._encounteredEnd=!0}}_onAppendMessage(e){if(q("esri-2d-update-debug")&&console.debug(`Tile[${this.key.id}] FeatureTile.append`,{append:Ue(e?.append)}),e.clear&&this.clear(),!e.append)return;const t=re(new se(e.append.entities),le);this._insert(t,e.append.data,!1)}_onUpdateMessage(e){q("esri-2d-update-debug")&&console.debug(`Tile[${this.key.id}] FeatureTile.update`,{isPixelBuffer:e.isPixelBuffer,modify:Ue(e.modify),remove:e.remove});const t=re(new se(e.modify.entities),le),n=t.map(a=>a.id),i=e.isPixelBuffer??!1,o=[...e.remove,...n];i?this._removeByIdsFromBuffer(o):this._removeByIds(o),this._insert(t,e.modify.data,i)}reshuffle(e=!1){if(this.destroyed)return;const t=new Map;for(const n of this._entities)for(const i of n.records){const o=this._meshes.get(i.instanceId);let a=t.get(o);a||(a=new un(e),t.set(o,a)),a.copyRecord(i)}for(const[n,i]of t)n.reshuffle(i);this._invalidated=!0,this._aggregateMemoryStats(),q("esri-2d-update-debug")&&pn().info(`Tile ${this.key.id} was reshuffled.`)}copyPixelBufferedEntitesFrom(e,t,n,i){const o=n*ue,a=i*ue;for(const r of e._entities){let l=null;for(const s of r.records)if(s.overlaps&t){const c=e.getMesh(s.instanceId),_=this._ensureMesh(s.instanceId,c.layout).copyRecordFrom(c,s,o,a);l||(l=new le(r.id,r.sortKey),this._entityIdsFromBuffer.add(r.id),this._entities.push(l)),l.records.push(_)}}this._invalidated=!0}_ensureMesh(e,t){return this._meshes.has(e)||this._meshes.set(e,new mn(this._stage.bufferPool,t)),this._meshes.get(e)}_insert(e,t,n){if(!e.length)return;this._removeDuplicatedBufferedEntites(e);const i=this._insertVertexData(t);for(const o of e){for(const a of o.records)a.updateBaseOffsets(i.get(a.instanceId));n?this._tryInsertBufferedEntity(o):this._insertEntity(o)}this._invalidated=!0}_insertVertexData(e){const t=new Map;for(const n of e){const{instanceId:i,layout:o}=n,a=this._ensureMesh(i,o).append(n);if(n.metrics){const r=re(new se(n.metrics),ht)??[];this._metrics.push(...r)}t.set(i,a)}return t}_insertEntity(e){q("esri-2d-update-debug")&&this._entityIds.has(e.id)&&console.error(`Tile ${this.key.id} insertEnitty: Already have entityId ${e.id}`),this._entityIds.add(e.id),this._entities.push(e)}_tryInsertBufferedEntity(e){this._entityIds.has(e.id)?this._removeRecordsFromMesh(e.records):(this._entityIdsFromBuffer.add(e.id),this._entities.push(e))}_removeDuplicatedBufferedEntites(e){if(!this._entityIdsFromBuffer.size)return;const t=[];for(const n of e)this._entityIdsFromBuffer.has(n.id)&&t.push(n.id);this._removeByIds(t)}_removeByIdsFromBuffer(e){this._removeByIds(e.filter(t=>this._entityIdsFromBuffer.has(t)))}_removeByIds(e){if(e.length===0)return;const t=new Set(e),n=[];for(const i of this._entities)t.has(i.id)?this._remove(i):n.push(i);this._entities=n,this._invalidated=!0}_remove(e){this._removeRecordsFromMesh(e.records),this._entityIds.delete(e.id),this._entityIdsFromBuffer.delete(e.id);for(let t=this._metrics.length-1;t>=0;t--)this._metrics[t].entityTexel===e.id&&this._metrics.splice(t,1)}_removeRecordsFromMesh(e){for(const t of e){const{instanceId:n,indexStart:i,indexCount:o,vertexStart:a,vertexCount:r}=t;this._meshes.get(n)?.remove(i,o,a,r)}}_aggregateMemoryStats(){this.debugInfo.memory.bytesUsed=0,this.debugInfo.memory.bytesReserved=0;for(const e of this._meshes.values())this.debugInfo.memory.bytesUsed+=e.memoryStats.bytesUsed,this.debugInfo.memory.bytesReserved+=e.memoryStats.bytesReserved}get _needsReshuffle(){if(this.destroyed)return!1;const{bytesUsed:e,bytesReserved:t}=this.debugInfo.memory,n=e/t,{minOrderedLength:i,length:o}=this.debugInfo.display;return t>dt&&n<_t||o>mt&&i/o<vt}get entityIds(){return this._objectIdMap?this._entities.map(({id:e})=>({objectId:this._objectIdMap[e],displayId:e})):[]}};const Ge={shaders:{vertexShader:fe("tileInfo/tileInfo.vert"),fragmentShader:fe("tileInfo/tileInfo.frag")},attributes:new Map([["a_pos",0]])},Ye=512,ye=512,j=16,z=8,xn=(ye-2*z)/5;let yn=class extends ${constructor(){super(...arguments),this._color=H(1,0,0,1)}dispose(){this._outlineProgram?.dispose(),this._outlineProgram=null,this._tileInfoProgram?.dispose(),this._tileInfoProgram=null,this._outlineVertexArrayObject?.dispose(),this._outlineVertexArrayObject=null,this._tileInfoVertexArrayObject?.dispose(),this._tileInfoVertexArrayObject=null,this._ctx=null}prepareState({context:e}){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(N.ONE,N.ONE_MINUS_SRC_ALPHA,N.ONE,N.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!1)}draw(e,t){const{context:n,requestRender:i,allowDelayedRender:o}=e;if(!t.isReady&&t instanceof hn&&t.hasData)return;if(this._loadWGLResources(n),o&&i!=null&&(!this._outlineProgram.compiled||!this._tileInfoProgram.compiled))return void i();n.bindVAO(this._outlineVertexArrayObject),n.useProgram(this._outlineProgram),this._outlineProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.displayViewScreenMat3),this._outlineProgram.setUniform2f("u_coord_range",t.rangeX,t.rangeY),this._outlineProgram.setUniform1f("u_depth",0),this._outlineProgram.setUniform4fv("u_color",this._color),n.drawArrays(A.LINE_STRIP,0,4);const a=this._getTexture(n,t);a&&(n.bindVAO(this._tileInfoVertexArrayObject),n.useProgram(this._tileInfoProgram),n.bindTexture(a,0),this._tileInfoProgram.setUniformMatrix3fv("u_dvsMat3",t.transforms.displayViewScreenMat3),this._tileInfoProgram.setUniform1f("u_depth",0),this._tileInfoProgram.setUniform2f("u_coord_ratio",t.rangeX/t.width,t.rangeY/t.height),this._tileInfoProgram.setUniform2f("u_delta",0,0),this._tileInfoProgram.setUniform2f("u_dimensions",a.descriptor.width,a.descriptor.height),n.drawArrays(A.TRIANGLE_STRIP,0,4)),n.bindVAO()}_loadWGLResources(e){if(this._outlineProgram&&this._tileInfoProgram)return;const t=ce(e,oe),n=ce(e,Ge),i=new Int8Array([0,0,1,0,1,1,0,1]),o=k.createVertex(e,W.STATIC_DRAW,i),a=new Z(e,oe.attributes,xe,new Map([["geometry",o]])),r=new Int8Array([0,0,1,0,0,1,1,1]),l=k.createVertex(e,W.STATIC_DRAW,r),s=new Z(e,Ge.attributes,xe,new Map([["geometry",l]]));this._outlineProgram=t,this._tileInfoProgram=n,this._outlineVertexArrayObject=a,this._tileInfoVertexArrayObject=s}_getTexture(e,t){if(!this._ctx){const l=document.createElement("canvas");l.width=Ye,l.height=ye,this._ctx=l.getContext("2d")}if(!t.tileDebugInfoTexture){const l=new Lt;l.wrapMode=yt.CLAMP_TO_EDGE,l.samplingMode=B.LINEAR,l.isImmutable=!0,l.width=Ye,l.height=ye,t.tileDebugInfoTexture=new Mt(e,l)}const n=this._ctx;n.clearRect(0,0,n.canvas.width,n.canvas.height),n.textAlign="left",n.textBaseline="top",n.font=j-2+"px sans-serif",n.lineWidth=2,n.fillStyle="white",n.strokeStyle="black";const{debugSlot:i}=t;let o=z+xn*i;const a=`${i}) ${t.key.id} (${t.constructor.name})`;n.strokeText(a,z,o),n.fillText(a,z,o),o+=j;const{debugInfo:r}=t;if(r){const{length:l,minOrderedLength:s,minUnorderedLength:c,triangleCount:_}=r.display;if(l>0){const d=`Length: ${l}`;n.strokeText(d,z,o),n.fillText(d,z,o),o+=j}if(s){const d=`Min ordered length: ${s}`;n.strokeText(d,z,o),n.fillText(d,z,o),o+=j}if(c){const d=`Min unordered length: ${c}`;n.strokeText(d,z,o),n.fillText(d,z,o),o+=j}if(_>0){_>1e5&&(n.fillStyle="red",n.strokeStyle="white");const d=`Triangle count: ${_}`;n.strokeText(d,z,o),n.fillText(d,z,o),o+=j}const{bytesUsed:f,bytesReserved:y}=r.memory;if(n.fillStyle="white",n.strokeStyle="black",f>0||y>0){const d=`Memory usage: ${f} of ${y} bytes`;n.strokeText(d,z,o),n.fillText(d,z,o),o+=j}}return t.tileDebugInfoTexture.setData(n.canvas),t.tileDebugInfoTexture}},Sn=class extends ${constructor(){super(...arguments),this._color=H(1,0,0,1),this._patternMatrix=ie(),this._programOptions={id:!1,pattern:!1}}dispose(){this._vao&&(this._vao.dispose(),this._vao=null)}drawMany(e,t){const{context:n,painter:i,requestRender:o,allowDelayedRender:a}=e;this._loadWGLResources(e);const r=e.displayLevel,l=e.styleLayer,s=l.backgroundMaterial,c=i.vectorTilesMaterialManager,_=l.getPaintValue("background-color",r),f=l.getPaintValue("background-opacity",r),y=l.getPaintValue("background-pattern",r),d=y!==void 0,S=1|window.devicePixelRatio,g=e.spriteMosaic;let O,I;const h=S>$e?2:1,b=this._programOptions;b.pattern=d;const v=c.getMaterialProgram(n,s,b);if(!a||o==null||v.compiled){if(n.bindVAO(this._vao),n.useProgram(v),d){const m=g.getMosaicItemPosition(y,!0);if(m!=null){const{tl:x,br:T,page:p}=m;O=T[0]-x[0],I=T[1]-x[1];const D=g.getPageSize(p);D!=null&&(g.bind(n,B.LINEAR,p,F),v.setUniform4f("u_tlbr",x[0],x[1],T[0],T[1]),v.setUniform2fv("u_mosaicSize",D),v.setUniform1i("u_texture",F))}v.setUniform1f("u_opacity",f)}else{const m=_[3]*f;this._color[0]=m*_[0],this._color[1]=m*_[1],this._color[2]=m*_[2],this._color[3]=m,v.setUniform4fv("u_color",this._color)}v.setUniform1f("u_depth",l.z||0);for(const m of t){if(v.setUniform1f("u_coord_range",m.rangeX),v.setUniformMatrix3fv("u_dvsMat3",m.transforms.displayViewScreenMat3),d){const x=Math.max(2**(Math.round(r)-m.key.level),1),T=h*m.width*x,p=T/Oe(O),D=T/Oe(I);this._patternMatrix[0]=p,this._patternMatrix[4]=D,v.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}n.setStencilFunction(U.EQUAL,0,255),n.drawArrays(A.TRIANGLE_STRIP,0,4)}}else o()}_loadWGLResources(e){if(this._vao)return;const{context:t,styleLayer:n}=e,i=n.backgroundMaterial,o=new Int8Array([0,0,1,0,0,1,1,1]),a=k.createVertex(t,W.STATIC_DRAW,o),r=new Z(t,i.getAttributeLocations(),i.getLayoutInfo(),new Map([["geometry",a]]));this._vao=r}},Tn=class extends ${constructor(){super(...arguments),this._programOptions={id:!1}}dispose(){}drawMany(e,t){const{context:n,displayLevel:i,requiredLevel:o,state:a,painter:r,spriteMosaic:l,styleLayerUID:s,requestRender:c,allowDelayedRender:_}=e;if(!t.some(v=>v.layerData.get(s)?.circleIndexCount??!1))return;const f=e.styleLayer,y=f.circleMaterial,d=r.vectorTilesMaterialManager,S=1.2,g=f.getPaintValue("circle-translate",i),O=f.getPaintValue("circle-translate-anchor",i),I=this._programOptions,h=d.getMaterialProgram(n,y,I);if(_&&c!=null&&!h.compiled)return void c();n.useProgram(h),h.setUniformMatrix3fv("u_displayMat3",O===J.VIEWPORT?a.displayMat3:a.displayViewMat3),h.setUniform2fv("u_circleTranslation",g),h.setUniform1f("u_depth",f.z),h.setUniform1f("u_antialiasingWidth",S);let b=-1;for(const v of t){if(!v.layerData.has(s))continue;v.key.level!==b&&(b=v.key.level,y.setDataUniforms(h,i,f,b,l));const m=v.layerData.get(s);if(!m.circleIndexCount)continue;m.prepareForRendering(n);const x=m.vao;x!=null&&(n.bindVAO(x),h.setUniformMatrix3fv("u_dvsMat3",v.transforms.displayViewScreenMat3),o!==v.key.level?n.setStencilFunction(U.EQUAL,v.stencilRef,255):n.setStencilFunction(U.GREATER,255,255),n.drawElements(A.TRIANGLES,m.circleIndexCount,P.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*m.circleIndexStart),v.triangleCount+=m.circleIndexCount/3)}}};const ke=1/65536;class bn extends ${constructor(){super(...arguments),this._fillProgramOptions={id:!1,pattern:!1},this._outlineProgramOptions={id:!1}}dispose(){}drawMany(e,t){const{displayLevel:n,renderPass:i,spriteMosaic:o,styleLayerUID:a}=e;let r=!1;for(const h of t)if(h.layerData.has(a)){const b=h.layerData.get(a);if(b.fillIndexCount>0||b.outlineIndexCount>0){r=!0;break}}if(!r)return;const l=e.styleLayer,s=l.getPaintProperty("fill-pattern"),c=s!==void 0,_=c&&s.isDataDriven;let f;if(c&&!_){const h=s.getValue(n);f=o.getMosaicItemPosition(h,!0)}const y=!c&&l.getPaintValue("fill-antialias",n);let d=!0,S=1;if(!c){const h=l.getPaintProperty("fill-color"),b=l.getPaintProperty("fill-opacity");if(!h?.isDataDriven&&!b?.isDataDriven){const v=l.getPaintValue("fill-color",n);S=l.getPaintValue("fill-opacity",n)*v[3],S>=1&&(d=!1)}}if(d&&i==="opaque")return;const g=l.getPaintValue("fill-translate",n),O=l.getPaintValue("fill-translate-anchor",n);(d||i!=="translucent")&&this._drawFill(e,a,l,t,g,O,c,f,_);const I=!l.hasDataDrivenOutlineColor&&l.outlineUsesFillColor&&S<1;y&&i!=="opaque"&&!I&&this._drawOutline(e,a,l,t,g,O)}_drawFill(e,t,n,i,o,a,r,l,s){if(r&&!s&&l==null)return;const{context:c,displayLevel:_,state:f,painter:y,pixelRatio:d,spriteMosaic:S,requestRender:g,allowDelayedRender:O}=e,I=n.fillMaterial,h=y.vectorTilesMaterialManager,b=d>$e?2:1,v=this._fillProgramOptions;v.pattern=r;const m=h.getMaterialProgram(c,I,v);if(O&&g!=null&&!m.compiled)return void g();if(c.useProgram(m),l!=null){const{page:T}=l,p=S.getPageSize(T);p!=null&&(S.bind(c,B.LINEAR,T,F),m.setUniform2fv("u_mosaicSize",p),m.setUniform1i("u_texture",F))}m.setUniformMatrix3fv("u_displayMat3",a===J.VIEWPORT?f.displayMat3:f.displayViewMat3),m.setUniform2fv("u_fillTranslation",o),m.setUniform1f("u_depth",n.z+ke);let x=-1;for(const T of i){if(!T.layerData.has(t))continue;T.key.level!==x&&(x=T.key.level,I.setDataUniforms(m,_,n,x,S));const p=T.layerData.get(t);if(!p.fillIndexCount)continue;p.prepareForRendering(c);const D=p.fillVAO;if(D!=null){if(c.bindVAO(D),m.setUniformMatrix3fv("u_dvsMat3",T.transforms.displayViewScreenMat3),c.setStencilFunction(U.EQUAL,T.stencilRef,255),r){const E=Math.max(2**(Math.round(_)-T.key.level),1),R=T.rangeX/(b*T.width*E);m.setUniform1f("u_patternFactor",R)}if(s){const E=p.patternMap;if(!E)continue;for(const[R,M]of E){const K=S.getPageSize(R);K!=null&&(S.bind(c,B.LINEAR,R,F),m.setUniform2fv("u_mosaicSize",K),m.setUniform1i("u_texture",F),c.drawElements(A.TRIANGLES,M[1],P.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*M[0]))}}else c.drawElements(A.TRIANGLES,p.fillIndexCount,P.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*p.fillIndexStart);T.triangleCount+=p.fillIndexCount/3}}}_drawOutline(e,t,n,i,o,a){const{context:r,displayLevel:l,state:s,painter:c,pixelRatio:_,spriteMosaic:f,requestRender:y,allowDelayedRender:d}=e,S=n.outlineMaterial,g=c.vectorTilesMaterialManager,O=.75/_,I=this._outlineProgramOptions,h=g.getMaterialProgram(r,S,I);if(d&&y!=null&&!h.compiled)return void y();r.useProgram(h),h.setUniformMatrix3fv("u_displayMat3",a===J.VIEWPORT?s.displayMat3:s.displayViewMat3),h.setUniform2fv("u_fillTranslation",o),h.setUniform1f("u_depth",n.z+ke),h.setUniform1f("u_outline_width",O);let b=-1;for(const v of i){if(!v.layerData.has(t))continue;v.key.level!==b&&(b=v.key.level,S.setDataUniforms(h,l,n,b,f));const m=v.layerData.get(t);if(m.prepareForRendering(r),!m.outlineIndexCount)continue;const x=m.outlineVAO;x!=null&&(r.bindVAO(x),h.setUniformMatrix3fv("u_dvsMat3",v.transforms.displayViewScreenMat3),r.setStencilFunction(U.EQUAL,v.stencilRef,255),r.drawElements(A.TRIANGLES,m.outlineIndexCount,P.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*m.outlineIndexStart),v.triangleCount+=m.outlineIndexCount/3)}}}class In extends ${constructor(){super(...arguments),this._programOptions={id:!1,pattern:!1,sdf:!1}}dispose(){}drawMany(e,t){const{context:n,displayLevel:i,state:o,painter:a,pixelRatio:r,spriteMosaic:l,styleLayerUID:s,requestRender:c,allowDelayedRender:_}=e;if(!t.some(E=>E.layerData.get(s)?.lineIndexCount??!1))return;const f=e.styleLayer,y=f.lineMaterial,d=a.vectorTilesMaterialManager,S=f.getPaintValue("line-translate",i),g=f.getPaintValue("line-translate-anchor",i),O=f.getPaintProperty("line-pattern"),I=O!==void 0,h=I&&O.isDataDriven;let b,v;if(I&&!h){const E=O.getValue(i);b=l.getMosaicItemPosition(E)}let m=!1;if(!I){const E=f.getPaintProperty("line-dasharray");if(v=E!==void 0,m=v&&E.isDataDriven,v&&!m){const R=E.getValue(i),M=f.getDashKey(R,f.getLayoutValue("line-cap",i));b=l.getMosaicItemPosition(M)}}const x=1/r,T=this._programOptions;T.pattern=I,T.sdf=v;const p=d.getMaterialProgram(n,y,T);if(_&&c!=null&&!p.compiled)return void c();if(n.useProgram(p),p.setUniformMatrix3fv("u_displayViewMat3",o.displayViewMat3),p.setUniformMatrix3fv("u_displayMat3",g===J.VIEWPORT?o.displayMat3:o.displayViewMat3),p.setUniform2fv("u_lineTranslation",S),p.setUniform1f("u_depth",f.z),p.setUniform1f("u_antialiasing",x),b&&b!=null){const{page:E}=b,R=l.getPageSize(E);R!=null&&(l.bind(n,B.LINEAR,E,F),p.setUniform2fv("u_mosaicSize",R),p.setUniform1i("u_texture",F))}let D=-1;for(const E of t){if(!E.layerData.has(s))continue;E.key.level!==D&&(D=E.key.level,y.setDataUniforms(p,i,f,D,l));const R=2**(i-D)/r;p.setUniform1f("u_zoomFactor",R);const M=E.layerData.get(s);if(!M.lineIndexCount)continue;M.prepareForRendering(n);const K=M.vao;if(K!=null){if(n.bindVAO(K),p.setUniformMatrix3fv("u_dvsMat3",E.transforms.displayViewScreenMat3),n.setStencilFunction(U.EQUAL,E.stencilRef,255),h||m){const ae=M.patternMap;if(!ae)continue;for(const[C,X]of ae){const V=l.getPageSize(C);V!=null&&(l.bind(n,B.LINEAR,C,F),p.setUniform2fv("u_mosaicSize",V),p.setUniform1i("u_texture",F),n.drawElements(A.TRIANGLES,X[1],P.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*X[0]))}}else n.drawElements(A.TRIANGLES,M.lineIndexCount,P.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*M.lineIndexStart);E.triangleCount+=M.lineIndexCount/3}}}}const En=256/360,On=1/Math.LN2;function An(u,e){return(u%=e)>=0?u:u+e}function He(u){return An(u*En,256)}function bi(u){return Math.log(u)*On}const Pn=1/65536;class Cn extends ${constructor(){super(...arguments),this._iconProgramOptions={id:!1,sdf:!1},this._sdfProgramOptions={id:!1},this._spritesTextureSize=zt()}dispose(){}drawMany(e,t){const n=e.styleLayer;this._drawIcons(e,n,t),this._drawText(e,n,t)}_drawIcons(e,t,n){const{context:i,displayLevel:o,painter:a,spriteMosaic:r,state:l,styleLayerUID:s,requestRender:c,allowDelayedRender:_}=e,f=t.iconMaterial,y=a.vectorTilesMaterialManager;let d,S=!1;for(const p of n)if(p.layerData.has(s)&&(d=p.layerData.get(s),d.iconPerPageElementsMap.size>0)){S=!0;break}if(!S)return;const g=t.getPaintValue("icon-translate",o),O=t.getPaintValue("icon-translate-anchor",o);let I=t.getLayoutValue("icon-rotation-alignment",o);I===G.AUTO&&(I=t.getLayoutValue("symbol-placement",o)===De.POINT?G.VIEWPORT:G.MAP);const h=I===G.MAP,b=t.getLayoutValue("icon-keep-upright",o)&&h,v=d.isIconSDF,m=this._iconProgramOptions;m.sdf=v;const x=y.getMaterialProgram(i,f,m);if(_&&c!=null&&!x.compiled)return void c();i.useProgram(x),x.setUniformMatrix3fv("u_displayViewMat3",I===G.MAP?l.displayViewMat3:l.displayMat3),x.setUniformMatrix3fv("u_displayMat3",O===J.VIEWPORT?l.displayMat3:l.displayViewMat3),x.setUniform2fv("u_iconTranslation",g),x.setUniform1f("u_depth",t.z),x.setUniform1f("u_mapRotation",He(l.rotation)),x.setUniform1f("u_keepUpright",b?1:0),x.setUniform1f("u_level",10*o),x.setUniform1i("u_texture",F),x.setUniform1f("u_fadeDuration",Re/1e3);let T=-1;for(const p of n){if(!p.layerData.has(s)||(p.key.level!==T&&(T=p.key.level,f.setDataUniforms(x,o,t,T,r)),d=p.layerData.get(s),d.iconPerPageElementsMap.size===0))continue;d.prepareForRendering(i),d.updateOpacityInfo();const D=d.iconVAO;if(D!=null){i.bindVAO(D),x.setUniformMatrix3fv("u_dvsMat3",p.transforms.displayViewScreenMat3),x.setUniform1f("u_time",(performance.now()-d.lastOpacityUpdate)/1e3);for(const[E,R]of d.iconPerPageElementsMap)this._renderIconRange(e,x,R,E,p)}}}_renderIconRange(e,t,n,i,o){const{context:a,spriteMosaic:r}=e;this._spritesTextureSize[0]=r.getWidth(i)/4,this._spritesTextureSize[1]=r.getHeight(i)/4,t.setUniform2fv("u_mosaicSize",this._spritesTextureSize),r.bind(a,B.LINEAR,i,F),this._setStencilState(e,o),a.drawElements(A.TRIANGLES,n[1],P.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*n[0]),o.triangleCount+=n[1]/3}_drawText(e,t,n){const{context:i,displayLevel:o,glyphMosaic:a,painter:r,pixelRatio:l,spriteMosaic:s,state:c,styleLayerUID:_,requestRender:f,allowDelayedRender:y}=e,d=t.textMaterial,S=r.vectorTilesMaterialManager;let g,O=!1;for(const V of n)if(V.layerData.has(_)&&(g=V.layerData.get(_),g.glyphPerPageElementsMap.size>0)){O=!0;break}if(!O)return;const I=t.getPaintProperty("text-opacity");if(I&&!I.isDataDriven&&I.getValue(o)===0)return;const h=t.getPaintProperty("text-color"),b=!h||h.isDataDriven||h.getValue(o)[3]>0,v=t.getPaintProperty("text-halo-width"),m=t.getPaintProperty("text-halo-color"),x=(!v||v.isDataDriven||v.getValue(o)>0)&&(!m||m.isDataDriven||m.getValue(o)[3]>0);if(!b&&!x)return;const T=24/8;let p=t.getLayoutValue("text-rotation-alignment",o);p===G.AUTO&&(p=t.getLayoutValue("symbol-placement",o)===De.POINT?G.VIEWPORT:G.MAP);const D=p===G.MAP,E=t.getLayoutValue("text-keep-upright",o)&&D,R=.8*T/l;this._glyphTextureSize||(this._glyphTextureSize=Vt(a.width/4,a.height/4));const M=t.getPaintValue("text-translate",o),K=t.getPaintValue("text-translate-anchor",o),ae=this._sdfProgramOptions,C=S.getMaterialProgram(i,d,ae);if(y&&f!=null&&!C.compiled)return void f();i.useProgram(C),C.setUniformMatrix3fv("u_displayViewMat3",p===G.MAP?c.displayViewMat3:c.displayMat3),C.setUniformMatrix3fv("u_displayMat3",K===J.VIEWPORT?c.displayMat3:c.displayViewMat3),C.setUniform2fv("u_textTranslation",M),C.setUniform1f("u_depth",t.z+Pn),C.setUniform2fv("u_mosaicSize",this._glyphTextureSize),C.setUniform1f("u_mapRotation",He(c.rotation)),C.setUniform1f("u_keepUpright",E?1:0),C.setUniform1f("u_level",10*o),C.setUniform1i("u_texture",Pe),C.setUniform1f("u_antialiasingWidth",R),C.setUniform1f("u_fadeDuration",Re/1e3);let X=-1;for(const V of n){if(!V.layerData.has(_)||(V.key.level!==X&&(X=V.key.level,d.setDataUniforms(C,o,t,X,s)),g=V.layerData.get(_),g.glyphPerPageElementsMap.size===0))continue;g.prepareForRendering(i),g.updateOpacityInfo();const Ie=g.textVAO;if(Ie==null)continue;i.bindVAO(Ie),C.setUniformMatrix3fv("u_dvsMat3",V.transforms.displayViewScreenMat3),this._setStencilState(e,V);const st=(performance.now()-g.lastOpacityUpdate)/1e3;C.setUniform1f("u_time",st),g.glyphPerPageElementsMap.forEach((ut,ct)=>{this._renderGlyphRange(i,ut,ct,a,C,x,b,V)})}}_renderGlyphRange(e,t,n,i,o,a,r,l){i.bind(e,B.LINEAR,n,Pe),a&&(o.setUniform1f("u_halo",1),e.drawElements(A.TRIANGLES,t[1],P.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),l.triangleCount+=t[1]/3),r&&(o.setUniform1f("u_halo",0),e.drawElements(A.TRIANGLES,t[1],P.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),l.triangleCount+=t[1]/3)}_setStencilState(e,t){const{context:n,is3D:i,stencilSymbols:o}=e;if(n.setStencilTestEnabled(!0),o)return n.setStencilWriteMask(255),void n.setStencilFunction(U.ALWAYS,t.stencilRef,255);n.setStencilWriteMask(0),i?n.setStencilFunction(U.EQUAL,t.stencilRef,255):n.setStencilFunction(U.GREATER,255,255)}}const Dn={clip:tn,stencil:nn,bitmap:Yt,tileDebugInfo:yn,vtlBackground:Sn,vtlFill:bn,vtlLine:In,vtlCircle:Tn,vtlSymbol:Cn},Rn=u=>{switch(u.BYTES_PER_ELEMENT){case 1:return P.UNSIGNED_BYTE;case 2:return P.UNSIGNED_SHORT;case 4:return P.UNSIGNED_INT;default:throw new Te("Cannot get DataType of array")}},Ln=(u,e,t,n)=>{let i=0;for(let o=1;o<t;o++){const a=u[2*(e+o-1)],r=u[2*(e+o-1)+1];i+=(u[2*(e+o)]-a)*(u[2*(e+o)+1]+r)}return n?i>0:i<0},We=({coords:u,lengths:e},t)=>{const n=[];for(let i=0,o=0;i<e.length;o+=e[i],i+=1){const a=o,r=[];for(;i<e.length-1&&Ln(u,o+e[i],e[i+1],t);i+=1,o+=e[i])r.push(o+e[i]-a);const l=u.slice(2*a,2*(o+e[i])),s=Nt(l,r,2);for(const c of s)n.push(c+a)}return n};class w{constructor(e,t,n,i=!1){this._cache={},this.vertices=e,this.indices=t,this.primitiveType=n,this.isMapSpace=i}static fromPath(e){const t=Ft(new Me,e.path,!1,!1),n=t.coords,i=new Uint32Array(We(t,!0)),o=new Uint32Array(n.length/2);for(let a=0;a<o.length;a++)o[a]=L(Math.floor(n[2*a]),Math.floor(n[2*a+1]));return new w({geometry:o},i,A.TRIANGLES)}static fromGeometry(e,t){const n=t.geometry?.type;switch(n){case"polygon":return w.fromPolygon(e,t.geometry);case"extent":return w.fromMapExtent(e,t.geometry);default:return Se.getLogger("esri.views.2d.engine.webgl.Mesh2D").error(new Te("mapview-bad-type",`Unable to create a mesh from type ${n}`,t)),w.fromScreenExtent({xmin:0,ymin:0,xmax:1,ymax:1})}}static fromPolygon(e,t){const n=Bt(new Me,t,!1,!1),i=n.coords,o=new Uint32Array(We(n,!1)),a=new Uint32Array(i.length/2),r=Le(),l=Le();for(let s=0;s<a.length;s++)wt(r,i[2*s],i[2*s+1]),e.toScreen(l,r),a[s]=L(Math.floor(l[0]),Math.floor(l[1]));return new w({geometry:a},o,A.TRIANGLES,!0)}static fromScreenExtent({xmin:e,xmax:t,ymin:n,ymax:i}){const o={geometry:new Uint32Array([L(e,n),L(t,n),L(e,i),L(e,i),L(t,n),L(t,i)])},a=new Uint32Array([0,1,2,3,4,5]);return new w(o,a,A.TRIANGLES)}static fromMapExtent(e,t){const[n,i]=e.toScreen([0,0],[t.xmin,t.ymin]),[o,a]=e.toScreen([0,0],[t.xmax,t.ymax]),r={geometry:new Uint32Array([L(n,i),L(o,i),L(n,a),L(n,a),L(o,i),L(o,a)])},l=new Uint32Array([0,1,2,3,4,5]);return new w(r,l,A.TRIANGLES)}destroy(){this._cache.indexBuffer!=null&&this._cache.indexBuffer.dispose(),this._cache.vertexBuffers?.forEach(e=>e?.dispose()),this._cache.indexBuffer=this._cache.vertexBuffers=null}get elementType(){return Rn(this.indices)}getIndexBuffer(e,t=W.STATIC_DRAW){return this._cache.indexBuffer??=k.createIndex(e,t,this.indices),this._cache.indexBuffer}getVertexBuffers(e,t=W.STATIC_DRAW){return this._cache.vertexBuffers??=new Map(Object.keys(this.vertices).reduce((n,i)=>(n.push([i,k.createVertex(e,t,this.vertices[i])]),n),new Array)),this._cache.vertexBuffers}}class be extends je{constructor(e,t){super(),this._clip=t,this._cache={},this.stage=e,this._handle=ft(()=>t.version,()=>this._invalidate()),this.ready()}static fromClipArea(e,t){return new be(e,t)}_destroyGL(){this._cache.mesh!=null&&(this._cache.mesh.destroy(),this._cache.mesh=null),this._cache.vao!=null&&(this._cache.vao.dispose(),this._cache.vao=null)}destroy(){this._destroyGL(),this._handle.remove()}getVAO(e,t,n,i){const[o,a]=t.size;if(this._clip.type!=="geometry"&&this._lastWidth===o&&this._lastHeight===a||(this._lastWidth=o,this._lastHeight=a,this._destroyGL()),this._cache.vao==null){const r=this._createMesh(t,this._clip),l=r.getIndexBuffer(e),s=r.getVertexBuffers(e);this._cache.mesh=r,this._cache.vao=new Z(e,n,i,s,l)}return this._cache.vao}_createTransforms(){return{displayViewScreenMat3:ie()}}_invalidate(){this._destroyGL(),this.requestRender()}_createMesh(e,t){switch(t.type){case"rect":return w.fromScreenExtent(Ot(t,e.size[0],e.size[1]));case"path":return w.fromPath(t);case"geometry":return w.fromGeometry(e,t);default:return Se.getLogger("esri.views.2d.engine.webgl.ClippingInfo").error(new Te("mapview-bad-type","Unable to create ClippingInfo mesh from clip of type: ${clip.type}")),w.fromScreenExtent({xmin:0,ymin:0,xmax:1,ymax:1})}}}class Ii extends Dt{set clips(e){super.clips=e,this._updateClippingInfo(e)}renderChildren(e){e.painter.setPipelineState(null),this._renderPasses==null&&(this._renderPasses=this.prepareRenderPasses(e.painter));for(const t of this._renderPasses)try{t.render(e)}catch{}}prepareRenderPasses(e){return[e.registerRenderPass({name:"clip",brushes:[Dn.clip],target:()=>this._clippingInfos,drawPhase:ee.MAP|ee.LABEL|ee.LABEL_ALPHA|ee.DEBUG|ee.HIGHLIGHT})]}_updateClippingInfo(e){this._clippingInfos!=null&&(this._clippingInfos.forEach(t=>t.destroy()),this._clippingInfos=null),e!=null&&e.length&&(this._clippingInfos=e.items.map(t=>be.fromClipArea(this.stage,t))),this.requestRender()}}export{nn as _,Ut as a,si as b,hn as c,fe as d,$ as e,li as f,bi as g,vi as i,Ii as n,on as r,Dn as t,yn as y};
