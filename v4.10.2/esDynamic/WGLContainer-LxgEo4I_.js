import{a$ as j,af as de,C as Oe,n as _e,cO as Ee,s as me,aE as gt}from"./main-kpG51UWM.js";import{w as Ae,a as ne,f as ht,g as xt,h as yt,i as St,Z as N,_ as Ce,$ as Pe}from"./definitions-DJSdSb77.js";import{e as Tt,b as bt,h as De,f as R,n as se,s as ce,r as It}from"./LabelMetric-BeluzH3o.js";import{E as G}from"./BufferObject-BM_7mcDb.js";import{C as A,F as Z,E as C,L as w,R as F,O as B,I as Q,N as Ot,D as Et}from"./enums-DBi1-Mm2.js";import{o as K}from"./VertexArrayObject-M4iRGGoi.js";import{t as ee}from"./VertexElementDescriptor-BAy1DPb3.js";import{e as At,a as ue}from"./ProgramTemplate-DQOm6Omy.js";import{d as Ct,n as ve,e as Pt}from"./Tile-D75RMC64.js";import{r as Re,i as pe,s as Dt}from"./mat3-CC4Foazl.js";import{e as te,N as ge,S as Le,o as Rt,q as Lt,E as ie}from"./MapView-BGOJJ8ch.js";import{o as Mt,N as zt}from"./vec32-D9GsKZ1t.js";import{n as Vt}from"./vec3f32-BS0cezmI.js";import{e as Me,n as Nt}from"./Container-BcuL1ZEG.js";import{e as wt}from"./TileKey-C5IL-JBr.js";import{p as Ft,m as Bt}from"./Texture-BCt2hphT.js";import{r as J,l as Y,n as ze}from"./StyleDefinition-Ct4HIk9T.js";import{n as Ut,t as Gt}from"./vec2f32-CVhmN3Me.js";import{e as Ve}from"./config-nuMERBvb.js";import{e as Yt}from"./earcut-XDcq3zAf.js";import{o as kt}from"./vec2-tHZ6OaOy.js";import{n as Ne}from"./vec2f64-CeODonrJ.js";import{Q as Ht,K as Wt}from"./featureConversionUtils-D6hFQ4Af.js";import{s as we}from"./OptimizedFeature-EIithYlr.js";let Fe=class{constructor(i,e){this._rctx=i,this._attributes=[{name:"position",offset:0,type:A.SHORT,count:2}],this.layout={hash:Tt(this._attributes),attributes:this._attributes,stride:4},this._vertexBuffer=G.createVertex(i,Z.STATIC_DRAW,new Uint16Array(e)),this._vao=new K(i,new Map([["a_position",0]]),new Map([["geometry",[new ee("a_position",2,A.SHORT,0,4)]]]),new Map([["geometry",this._vertexBuffer]])),this._count=e.length/2}bind(){this._rctx.bindVAO(this._vao)}unbind(){this._rctx.bindVAO(null)}dispose(){this._vao.dispose()}draw(){this._rctx.bindVAO(this._vao),this._rctx.drawArrays(C.TRIANGLE_STRIP,0,this._count)}},k=class{constructor(){this.name=this.constructor.name||"UnnamedBrush",this.brushEffect=null}prepareState(i,e){}draw(i,e,t){}drawMany(i,e,t){for(const o of e)o.visible&&this.draw(i,o,t)}};const he={nearest:{defines:[],samplingMode:w.NEAREST,mips:!1},bilinear:{defines:[],samplingMode:w.LINEAR,mips:!1},bicubic:{defines:["bicubic"],samplingMode:w.LINEAR,mips:!1},trilinear:{defines:[],samplingMode:w.LINEAR_MIPMAP_LINEAR,mips:!0}},Zt=(i,e,t)=>{if(t.samplingMode==="dynamic"){const{state:o}=i,a=e.resolution/e.pixelRatio/o.resolution,r=Math.round(i.pixelRatio)!==i.pixelRatio,l=a>1.05||a<.95;return o.rotation||l||r||e.isSourceScaled||e.rotation?he.bilinear:he.nearest}return he[t.samplingMode]};let Kt=class extends k{constructor(){super(...arguments),this._desc={vsPath:"raster/bitmap",fsPath:"raster/bitmap",attributes:new Map([["a_pos",0]])}}dispose(){this._quad&&this._quad.dispose()}prepareState({context:i}){i.setBlendingEnabled(!0),i.setColorMask(!0,!0,!0,!0),i.setStencilWriteMask(0),i.setStencilTestEnabled(!0)}draw(i,e){const{context:t,renderingOptions:o,painter:a,requestRender:r,allowDelayedRender:l}=i;if(!e.source||!e.isReady)return;const n=Zt(i,e,o),s=a.materialManager.getProgram(this._desc,n.defines);if(l&&r!=null&&!s.compiled)return void r();i.timeline.begin(this.name),e.blendFunction==="additive"?t.setBlendFunctionSeparate(F.ONE,F.ONE,F.ONE,F.ONE):t.setBlendFunctionSeparate(F.ONE,F.ONE_MINUS_SRC_ALPHA,F.ONE,F.ONE_MINUS_SRC_ALPHA),t.setStencilFunction(B.EQUAL,e.stencilRef,255),this._quad||(this._quad=new Fe(t,[0,0,1,0,0,1,1,1]));const{coordScale:u,computedOpacity:c,transforms:f}=e;e.setSamplingProfile(n),e.bind(i.context,Ae),t.useProgram(s),s.setUniformMatrix3fv("u_dvsMat3",f.displayViewScreenMat3),s.setUniform1i("u_texture",Ae),s.setUniform2fv("u_coordScale",u),s.setUniform1f("u_opacity",c),this._quad.draw(),i.timeline.end(this.name)}};function Be(){return new Float32Array(4)}function qt(i){const e=new Float32Array(4);return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e}function H(i,e,t,o){const a=new Float32Array(4);return a[0]=i,a[1]=e,a[2]=t,a[3]=o,a}function jt(i,e){return new Float32Array(i,e,4)}function Ue(){return Be()}function Ge(){return H(1,1,1,1)}function Ye(){return H(1,0,0,0)}function ke(){return H(0,1,0,0)}function He(){return H(0,0,1,0)}function We(){return H(0,0,0,1)}const Xt=Ue(),$t=Ge(),Qt=Ye(),Jt=ke(),ei=He(),ti=We();Object.freeze(Object.defineProperty({__proto__:null,ONES:$t,UNIT_W:ti,UNIT_X:Qt,UNIT_Y:Jt,UNIT_Z:ei,ZEROS:Xt,clone:qt,create:Be,createView:jt,fromValues:H,ones:Ge,unitW:We,unitX:Ye,unitY:ke,unitZ:He,zeros:Ue},Symbol.toStringTag,{value:"Module"}));const ii={background:{"background.frag":`uniform lowp vec4 u_color;
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
}`}};function oi(i){return function(e){let t=i;return e.split("/").forEach(o=>{t&&(t=t[o])}),t}}const ai=new At(oi(ii));function oe(i){return ai.resolveIncludes(i)}const ae={shaders:{vertexShader:oe("background/background.vert"),fragmentShader:oe("background/background.frag")},attributes:new Map([["a_pos",0]])},ri=()=>bt("clip",{geometry:[{location:0,name:"a_pos",count:2,type:A.SHORT}]});let li=class extends k{constructor(){super(...arguments),this._color=H(0,1,0,1)}dispose(){this._program&&this._program.dispose()}prepareState({context:i}){i.setStencilTestEnabled(!0),i.setBlendingEnabled(!1),i.setFaceCullingEnabled(!1),i.setColorMask(!1,!1,!1,!1),i.setStencilOp(Q.KEEP,Q.KEEP,Q.REPLACE),i.setStencilWriteMask(255),i.setStencilFunction(B.ALWAYS,0,255)}draw(i,e){const{context:t,state:o,requestRender:a,allowDelayedRender:r}=i,l=ri(),n=e.getVAO(t,o,l.attributes,l.bufferLayouts);n.indexBuffer!=null&&(this._program||(this._program=ue(t,ae)),!r||a==null||this._program.compiled?(t.useProgram(this._program),this._program.setUniform2fv("u_coord_range",[1,1]),this._program.setUniform4fv("u_color",this._color),this._program.setUniformMatrix3fv("u_dvsMat3",o.displayMat3),t.bindVAO(n),t.drawElements(C.TRIANGLES,n.indexBuffer.size,A.UNSIGNED_INT,0),t.bindVAO()):a())}};const xe=new Map([["geometry",[new ee("a_pos",2,A.BYTE,0,2)]]]),ni=new Map([["geometry",[new ee("a_pos",2,A.BYTE,0,4),new ee("a_tex",2,A.BYTE,2,4)]]]),si=new Map([["geometry",[new ee("a_pos",2,A.UNSIGNED_SHORT,0,4)]]]);let Ze=class extends k{constructor(){super(...arguments),this._color=H(1,0,0,1),this._initialized=!1}dispose(){this._solidProgram&&(this._solidProgram.dispose(),this._solidProgram=null),this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null)}prepareState({context:i}){i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.setStencilTestEnabled(!0),i.setBlendingEnabled(!1),i.setColorMask(!1,!1,!1,!1),i.setStencilOp(Q.KEEP,Q.KEEP,Q.REPLACE),i.setStencilWriteMask(255)}draw(i,e){const{context:t,requestRender:o,allowDelayedRender:a}=i;this._initialized||this._initialize(t),!a||o==null||this._solidProgram.compiled?(t.setStencilFunctionSeparate(Ot.FRONT_AND_BACK,B.GREATER,e.stencilRef,255),t.bindVAO(this._solidVertexArrayObject),t.useProgram(this._solidProgram),this._solidProgram.setUniformMatrix3fv("u_dvsMat3",e.transforms.displayViewScreenMat3),this._solidProgram.setUniform2fv("u_coord_range",[e.rangeX,e.rangeY]),this._solidProgram.setUniform1f("u_depth",0),this._solidProgram.setUniform4fv("u_color",this._color),t.drawArrays(C.TRIANGLE_STRIP,0,4),t.bindVAO()):o()}_initialize(i){if(this._initialized)return!0;const e=ue(i,ae);if(!e)return!1;const t=new Int8Array([0,0,1,0,0,1,1,1]),o=G.createVertex(i,Z.STATIC_DRAW,t),a=new K(i,ae.attributes,xe,new Map([["geometry",o]]));return this._solidProgram=e,this._solidVertexArrayObject=a,this._initialized=!0,!0}},Ke=class extends Me{constructor(i,e,t,o,a,r,l=a,n=r){super(),this.tileDebugInfoTexture=null,this.debugInfo={display:{length:0,minOrderedLength:0,minUnorderedLength:0,triangleCount:0},memory:{bytesUsed:0,bytesReserved:0}},this._destroyed=!1,this.key=new wt(i),this.resolution=e,this.x=t,this.y=o,this.width=a,this.height=r,this.rangeX=l,this.rangeY=n}destroy(){this.tileDebugInfoTexture&&(this.tileDebugInfoTexture.dispose(),this.tileDebugInfoTexture=null),this._destroyed=!0}get debugSlot(){let i=this;for(;i.parent!==this._stage;){if(!i.parent)return 0;i=i.parent}return this._stage.children.indexOf(i)}setTransform(i){const e=this.resolution/(i.resolution*i.pixelRatio),t=this.transforms.tileMat3,[o,a]=i.toScreenNoRotation([0,0],[this.x,this.y]),r=this.width/this.rangeX*e,l=this.height/this.rangeY*e;Re(t,r,0,0,0,l,0,o,a,1),pe(this.transforms.displayViewScreenMat3,i.displayViewMat3,t)}get destroyed(){return this._destroyed}};const qe=te(),ye=Vt();let ci=class extends Ke{constructor(i,e,t,o){super(i,e,t,o,ne,ne)}destroy(){super.destroy()}setTransform(i){const e=this.resolution/i.resolution,t=this.transforms.tileMat3,[o,a]=i.toScreenNoRotation([0,0],[this.x,this.y]),r=this.width/this.rangeX*e,l=this.height/this.rangeY*e;Re(t,r,0,0,0,l,0,o,a,1),pe(this.transforms.displayViewScreenMat3,i.displayViewMat3,t);const n=Ct(ve(),r,0,0,l,o,a);Pt(this.transforms.labelMat2d,i.viewMat2d,n)}_createTransforms(){return{labelMat2d:ve(),tileMat3:te(),displayViewScreenMat3:te()}}containsScreenPoint(i,e,t){const o=pe(qe,i.viewMat3,this.transforms.tileMat3),a=Dt(qe,o);if(a==null)return!0;Mt(ye,...e,1);const r=zt(ye,ye,a),l=t*(this.resolution/i.resolution);return r[0]>=-l&&r[0]<this.width+l&&r[1]>=-l&&r[1]<this.height+l}},W=class ut{constructor(e){if(this.next=null,!Array.isArray(e))return void(this.data=e);this.data=e[0];let t=this;for(let o=1;o<e.length;o++)t.next=new ut([e[o]]),t=t.next}*values(){let e=this;for(;e;)yield e.data,e=e.next}forEach(e){let t=this;for(;t;)e(t.data),t=t.next}get last(){return this.next?this.next.last:this}},je=class{constructor(i){this._head=null,i!=null&&(this._head=new W(i))}get head(){return this._head}maxAvailableSpace(){if(this._head==null)return 0;let i=0;return this._head.forEach(e=>{const t=e.end-e.start;i=Math.max(i,t)}),i}firstFit(i){if(this._head==null)return null;let e=null,t=this._head;for(;t;){const o=t.data.end-t.data.start;if(o===i)return e?e.next=t.next:this._head=t.next,t.data.start;if(o>i){const a=t.data.start;return t.data.start+=i,a}e=t,t=t.next}return null}free(i,e){const t=i+e;if(this._head==null){const l=new W({start:i,end:t});return void(this._head=l)}if(t<=this._head.data.start){if(t===this._head.data.start)return void(this._head.data.start-=e);const l=new W({start:i,end:t});return l.next=this._head,void(this._head=l)}let o=this._head,a=o.next;for(;a;){if(a.data.start>=t){if(o.data.end===i){if(o.data.end+=e,o.data.end===a.data.start){const n=a.data.end-a.data.start;return o.data.end+=n,void(o.next=a.next)}return}if(a.data.start===t)return void(a.data.start-=e);const l=new W({start:i,end:t});return l.next=o.next,void(o.next=l)}o=a,a=a.next}if(i===o.data.end)return void(o.data.end+=e);const r=new W({start:i,end:t});o.next=r}clear(){this._head=null}};function ui(i,e){return i<<16|255&e}function fi(i){return 255&i}let re=class{constructor(i,e,t,o,a){this.instance=i,this.materialKey=e,this.target=t,this.start=o,this.count=a}get textureKey(){return fi(this.materialKey)}get indexEnd(){return this.start+this.count}extend(i){this.count+=i}render(i){this.instance.techniqueRef.render(i,this)}getStencilReference(){return this.target.stencilRef}getAttributePrecisionPackFactors(){const i=this.instance.instanceId;return this.target.getMesh(i).getAttributePrecisionPackFactors()}draw(i,e){Rt(i)?this.drawCompute(i.context,e):this.drawGeometry(i.context,e)}drawCompute(i,e){const t=this.instance.instanceId,o=this.target.getMesh(t).getComputeVAO(i,e),a=this.start*Uint32Array.BYTES_PER_ELEMENT/3;i.bindVAO(o),i.drawElements(C.POINTS,this.count/3,A.UNSIGNED_INT,a),i.bindVAO(null)}drawGeometry(i,e){const t=this.instance.instanceId,o=this.target.getMesh(t).getGeometryVAO(i,e),a=this.start*Uint32Array.BYTES_PER_ELEMENT;i.bindVAO(o),i.drawElements(C.TRIANGLES,this.count,A.UNSIGNED_INT,a),i.bindVAO(null)}},di=class ft{constructor(){this._length=0,this._minOrderedLength=0,this._materialKeys=new Set}static fromDisplayEntities(e,t,o,a){const r=new ft;for(const l of e.values())for(const n of l.records){const s=o.getInstance(n.instanceId),u=ui(s.instanceId,n.textureKey);r.addRecord(s,u,n.indexStart,n.indexCount,n.vertexStart,n.vertexCount,t,a)}return r}get length(){return this._length}get minOrderedLength(){return this._minOrderedLength}get minUnorderedLength(){return this._materialKeys.size}render(e,t){const{drawPhase:o}=e;for(const a of this.infos()){const r=a.instance.techniqueRef;r.drawPhase&o&&(t==null||r.type===t)&&a.render(e)}}addRecord(e,t,o,a,r,l,n,s){let u=o,c=a;if(c||(u=r,c=l),!c)return;if(this._head==null){const g=new re(e,t,n,u,c);return this._head=new W(g),this._tail=this._head,this._length++,void this._minOrderedLength++}if(s===ge.STRICT_ORDER)return this._insert(e,t,n,u,c,this._tail,null);let f=null,d=this._head;const _=e.instanceId,x=e.techniqueRef.symbologyPlane;if(s===ge.STRICT_MARKERS_AND_TEXT&&(x===Le.MARKER||x===Le.TEXT))return this._insert(e,t,n,u,c,this._tail,null);for(;d;){const g=d.data.instance,b=g.instanceId,E=g.techniqueRef.symbologyPlane,S=f?.data.instance.instanceId;if(x<E||_===S&&_!==b)return this._insert(e,t,n,u,c,f,d);f=d,d=d.next}this._insert(e,t,n,u,c,f,null)}*infos(){if(this._head!=null)for(const e of this._head.values())yield e}_insert(e,t,o,a,r,l,n){if(l==null&&n==null){const s=new re(e,t,o,a,r);return this._head=new W(s),this._tail=this._head,this._length++,void this._minOrderedLength++}return t!==this._tail.data.materialKey&&this._minOrderedLength++,this._materialKeys.add(t),l==null&&n!=null?this._insertAtHead(e,t,o,a,r,n):l!=null&&n==null?this._insertAtEnd(e,t,o,a,r,l):l!=null&&n!=null?this._insertAtMiddle(e,t,o,a,r,l,n):void 0}_insertAtHead(e,t,o,a,r,l){const n=a+r;if(t===l.data.materialKey&&o===l.data.target&&n===l.data.start)l.data.start=a,l.data.count+=r;else{const s=new re(e,t,o,a,r);this._head=new W(s),this._head.next=l,this._length++}}_insertAtEnd(e,t,o,a,r,l){if(l.data.materialKey===t&&l.data.indexEnd===a)l.data.count+=r;else{const n=new re(e,t,o,a,r);this._tail=new W(n),l.next=this._tail,this._length++}}_insertAtMiddle(e,t,o,a,r,l,n){const s=a+r;if(l.data.materialKey===t&&l.data.target===o&&l.data.indexEnd===a)l.data.count+=r,l.data.materialKey===n.data.materialKey&&l.data.target===n.data.target&&l.data.indexEnd===n.data.start&&(l.data.count+=n.data.count,l.next=n.next,this._length--);else if(t===n.data.materialKey&&o===n.data.target&&s===n.data.start)n.data.start=a,n.data.count+=r;else{const u=new re(e,t,o,a,r),c=new W(u);l.next=c,c.next=n,this._length++}}},_i=class{constructor(i){this._indexOnly=i,this.vertex={count:0,operations:[]},this.index={count:0,operations:[]}}copyRecord(i){let e=0;this._indexOnly||(e=this.vertex.count-i.vertexStart,this.vertex.operations.push({srcFrom:i.vertexStart,dstFrom:this.vertex.count,count:i.vertexCount,mutate:0}),i.vertexStart=this.vertex.count,this.vertex.count+=i.vertexCount);let t=!1;if(this._indexOnly&&this.index.operations.length>=1){const o=this.index.operations[this.index.operations.length-1];o.srcFrom+o.count===i.indexStart&&(o.count+=i.indexCount,t=!0)}t||this.index.operations.push({srcFrom:i.indexStart,dstFrom:this.index.count,count:i.indexCount,mutate:e}),i.indexStart=this.index.count,this.index.count+=i.indexCount}};const Xe=j("esri-2d-log-allocations");let $e=class dt{static create(e,t){const o=t.acquireUint32Array(e);return new dt(o,t)}constructor(e,t){this._array=e,this._pool=t}get array(){return this._array}get length(){return this._array.length}getUint32View(e,t){return new Uint32Array(this._array.buffer,e+this._array.byteOffset,t)}expand(e){if(e<=this._array.byteLength)return;const t=this._pool.acquireUint32Array(e);t.set(this._array),this._pool.releaseUint32Array(this._array),this._array=t}destroy(){this._pool.releaseUint32Array(this._array)}},Se=class _t{constructor(){this._data=new ArrayBuffer(_t.BYTE_LENGTH),this._freeList=new je({start:0,end:this._data.byteLength})}static get BYTE_LENGTH(){return 16e6}get buffer(){return this._data}acquireUint32Array(e){const t=this._freeList.firstFit(e);return t==null?null:new Uint32Array(this._data,t,e/Uint32Array.BYTES_PER_ELEMENT)}releaseUint32Array(e){this._freeList.free(e.byteOffset,e.byteLength)}};class mi{constructor(){this._pages=[],this._pagesByBuffer=new Map,this._bytesAllocated=0}destroy(){this._pages=[],this._pagesByBuffer=null}get _bytesTotal(){return this._pages.length*Se.BYTE_LENGTH}acquireUint32Array(e){if(this._bytesAllocated+=e,Xe&&console.log(`Allocating ${e}, (${this._bytesAllocated} / ${this._bytesTotal})`),e>=Se.BYTE_LENGTH)return new Uint32Array(e/Uint32Array.BYTES_PER_ELEMENT);for(const o of this._pages){const a=o.acquireUint32Array(e);if(a!=null)return a}const t=this._addPage().acquireUint32Array(e);return de(t,"Expected to allocate page"),t}releaseUint32Array(e){this._bytesAllocated-=e.byteLength,Xe&&console.log(`Freeing ${e.byteLength}, (${this._bytesAllocated} / ${this._bytesTotal})`);const t=this._pagesByBuffer.get(e.buffer);t&&t.releaseUint32Array(e)}_addPage(){const e=new Se;return this._pages.push(e),this._pagesByBuffer.set(e.buffer,e),e}}const vi=1.25,Qe=32767,pi=Qe<<16|Qe;let Je=class{constructor(i,e,t,o){this._pool=o;const a=$e.create(e*t*Uint32Array.BYTES_PER_ELEMENT,this._pool);this.size=e,this.strideInt=t,this.bufferType=i,this.dirty={start:1/0,end:0},this.memoryStats={bytesUsed:0,bytesReserved:e*t*Uint32Array.BYTES_PER_ELEMENT},this._gpu=null,this._cpu=a,this.clear()}get elementSize(){return this._cpu.length/this.strideInt}get intSize(){return this.fillPointer*this.strideInt}get byteSize(){return this.intSize*Uint32Array.BYTES_PER_ELEMENT}get invalidated(){return this.bufferSize>0&&!this._gpu}get invalidatedComputeBuffer(){return this.bufferSize>0&&!this._gpuComputeTriangles}invalidate(){this._invalidateTriangleBuffer(),this._gpu?.dispose(),this._gpu=null}_invalidateTriangleBuffer(){this._gpuComputeTriangles?.dispose(),this._gpuComputeTriangles=null}destroy(){this._gpu?.dispose(),this._gpuComputeTriangles?.dispose(),this._cpu?.destroy()}clear(){this.dirty.start=1/0,this.dirty.end=0,this.freeList=new je({start:0,end:this._cpu.length/this.strideInt}),this.fillPointer=0}ensure(i){if(!(this.maxAvailableSpace()>=i)&&i*this.strideInt>this._cpu.length-this.fillPointer){this.invalidate();const e=this._cpu.length/this.strideInt,t=Math.round((e+i)*vi),o=t*this.strideInt;this._cpu.expand(o*Uint32Array.BYTES_PER_ELEMENT),this.freeList.free(e,t-e),this.memoryStats.bytesReserved+=(t-e)*this.strideInt*Uint32Array.BYTES_PER_ELEMENT}}set(i,e){this._cpu.array[i]!==e&&(this._cpu.array[i]=e,this.dirty.start=Math.min(i,this.dirty.start),this.dirty.end=Math.max(i+1,this.dirty.end))}getGPUBuffer(i,e=!1){if(!this.bufferSize)return null;if(e){if(this.bufferType!=="index")throw new Error("Tired to get triangle buffer, but target is not an index buffer");return this._gpuComputeTriangles==null&&(this._gpuComputeTriangles=this._createComputeBuffer(i)),this._gpuComputeTriangles}return this._gpu==null&&(this._gpu=this._createBuffer(i)),this._gpu}getView(i,e){return this._cpu.getUint32View(i,e/Uint32Array.BYTES_PER_ELEMENT)}get bufferSize(){return this._cpu.length/this.strideInt}maxAvailableSpace(){return this.freeList.maxAvailableSpace()}insert(i,e,t,o){const a=t*this.strideInt;if(!a)return 0;const r=e*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,l=new Uint32Array(i,r,a),n=this.freeList.firstFit(t);de(n,"First fit region must be defined");const s=n*this.strideInt,u=a;if(this._cpu.array.set(l,s),o!==0)for(let c=0;c<l.length;c++)this._cpu.array[c+s]+=o;return this.dirty.start=Math.min(this.dirty.start,s),this.dirty.end=Math.max(this.dirty.end,s+u),this.fillPointer=Math.max(this.fillPointer,s+u),this.memoryStats.bytesUsed+=t*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,n}copyFrom(i,e,t,o,a){const r=t*this.strideInt;if(!r)return 0;const l=e*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,n=i._cpu.getUint32View(l,r),s=this.freeList.firstFit(t);de(s,"First fit region must be defined");const u=s*this.strideInt,c=r;if(this._cpu.array.set(n,u),o!==0)for(let f=0;f<r;f++)this._cpu.array[u+f*this.strideInt+a]+=o;return this.dirty.start=Math.min(this.dirty.start,u),this.dirty.end=Math.max(this.dirty.end,u+c),this.fillPointer=Math.max(this.fillPointer,u+c),this.memoryStats.bytesUsed+=t*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,s}free(i,e,t){const o=i*this.strideInt,a=(i+e)*this.strideInt;if(t===!0)for(let r=i;r!==i+e;r++)this._cpu.array[r*this.strideInt]=pi;this.dirty.start=Math.min(this.dirty.start,o),this.dirty.end=Math.max(this.dirty.end,a),this.freeList.free(i,e),this.memoryStats.bytesUsed-=e*this.strideInt*Uint32Array.BYTES_PER_ELEMENT}upload(){if(this.dirty.end){if(this._invalidateTriangleBuffer(),this._gpu==null)return this.dirty.start=1/0,void(this.dirty.end=0);this._gpu.setSubData(this._cpu.array,this.dirty.start,this.dirty.start,this.dirty.end),this.dirty.start=1/0,this.dirty.end=0}}reshuffle(i,e){if(e.length===0)return;const t=this.byteSize,o=i*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,a=t>o,r=this._cpu,l=$e.create(o,this._pool);a||l.array.set(this._cpu.getUint32View(0,this.intSize));for(const n of e)if(a||n.srcFrom!==n.dstFrom||n.mutate!==0){this.dirty.start=Math.min(this.dirty.start,n.dstFrom*this.strideInt),this.dirty.end=Math.max(this.dirty.end,(n.dstFrom+n.count)*this.strideInt);for(let s=0;s<n.count;s++){const u=(n.dstFrom+s)*this.strideInt,c=(n.srcFrom+s)*this.strideInt;for(let f=0;f<this.strideInt;f++)l.array[u+f]=r.array[c+f]+n.mutate}}this._cpu.destroy(),this._cpu=l,a&&this.invalidate(),this.freeList.clear(),this.memoryStats.bytesUsed=this.memoryStats.bytesReserved=o}_createBuffer(i){const e=Z.DYNAMIC_DRAW;return this.bufferType==="index"?G.createIndex(i,e,this._cpu.array):G.createVertex(i,e,this._cpu.array)}_createComputeBuffer(i){const e=Z.DYNAMIC_DRAW,t=new Uint32Array(this.fillPointer/3);for(let o=0;o<this.fillPointer;o+=3)t[o/3]=this._cpu.array[o];return G.createIndex(i,e,t)}};const et=1e3;function gi(i,e){const t=i.attributes.filter(o=>e.locations.has(o.name)).map(o=>({name:o.name,type:o.type,count:o.count,divisor:0,normalized:o.normalized??!1,offset:o.offset,stride:i.stride}));return new Map([["geometry",t]])}function hi(i,e){const t=[],o=i.attributes.filter(a=>e.locations.has(a.name));for(const a of o){t.push({name:a.name,type:a.type,count:a.count,divisor:0,normalized:a.normalized??!1,offset:a.offset,stride:i.stride});const r=e.computeAttributeMap[a.name];r!=null&&r.length===2&&(t.push({name:r[0],count:a.count,divisor:0,type:a.type,normalized:a.normalized??!1,offset:a.offset+i.stride,stride:i.stride}),t.push({name:r[1],count:a.count,divisor:0,type:a.type,normalized:a.normalized??!1,offset:a.offset+2*i.stride,stride:i.stride}))}return new Map([["geometry",t]])}let xi=class{constructor(i,e){if(this._bufferPool=i,this._layout=e,this._invalidatedGeometry=!1,this._invalidatedCompute=!1,this._position=this._layout.attributes.find(t=>t.name==="pos"||t.name==="position"),!this._position)throw new Error("InternalError: Unable to find position attribute")}destroy(){this._indexBuffer=Oe(this._indexBuffer),this._vertexBuffer=Oe(this._vertexBuffer),this._computeVAO?.disposeVAOOnly(),this._geometryVAO?.disposeVAOOnly()}get layout(){return this._layout}getDrawArgs(i,e,t,o){return o?{primitive:C.POINTS,count:e/3,offset:t/3}:{primitive:i,count:e,offset:t}}getAttributePrecisionPackFactors(){const i={};for(const e of this.layout.attributes)e.packPrecisionFactor&&(i[e.name]=e.packPrecisionFactor);return i}getDebugVertexInfo(i=!1,e){if(!this._vertexBuffer)return null;const t=this._layout,o=t.stride,a=this._vertexBuffer.getView(0,this._vertexBuffer.byteSize),r=[];if(i)if(e==null)console.log("must provide location info to see compute attributes");else for(const f of t.attributes){const d=e.computeAttributeMap[f.name];d!=null&&d.length===2&&(r.push({...f,name:d[0],offset:f.offset+o}),r.push({...f,name:d[1],offset:f.offset+2*o}))}const l=new DataView(a.slice().buffer);let n=a.byteLength/o;i&&(n=this._indexBuffer.fillPointer/3);const s=this._indexBuffer.getView(0,this._indexBuffer.byteSize);let u=0;const c=[];for(let f=0;f<n;f++){i&&(u=s[3*f]*o);const d={};for(const _ of[...t.attributes,...r]){let x=`${_.offset} ${_.name}`,g=De(l,_,u);if(_.packPrecisionFactor)if(x+=` (precision: ${_.packPrecisionFactor})`,typeof g=="number")g/=_.packPrecisionFactor;else for(let b=0;b<g.length;b++)g[b]/=_.packPrecisionFactor;d[x]=g}u+=o,c.push(d)}return{vertices:c,layout:t}}_ensure(i,e){if(this._vertexBuffer&&this._indexBuffer)this._indexBuffer.ensure(Math.max(i,1e3)),this._vertexBuffer.ensure(Math.max(e,1e3));else{const t=this._layout.stride/Uint32Array.BYTES_PER_ELEMENT;this._indexBuffer=new Je("index",Math.max(i,et),1,this._bufferPool),this._vertexBuffer=new Je("vertex",Math.max(e,et),t,this._bufferPool)}}append(i){const e=i.layout.stride,t=i.indices.byteLength/Uint32Array.BYTES_PER_ELEMENT,o=i.vertices.byteLength/e;this._ensure(t,o);const{vertices:a,indices:r}=i,l=this._vertexBuffer.insert(a,0,a.byteLength/e,0);return{vertexFrom:l,indexFrom:this._indexBuffer.insert(r,0,r.byteLength/4,l)}}copyRecordFrom(i,e,t,o){const{indexStart:a,indexCount:r,vertexStart:l,vertexCount:n}=e;this._ensure(r,n);const s=i._position,u=t*(s.packPrecisionFactor??1),c=o*(s.packPrecisionFactor??1),f=s.offset,d=R(u,c),_=this._vertexBuffer.copyFrom(i._vertexBuffer,l,n,d,f),x=this._indexBuffer.copyFrom(i._indexBuffer,a,r,_-l,0),g=e.clone();return g.vertexStart=_,g.indexStart=x,g.overlaps=0,g}remove(i,e,t,o){this._indexBuffer.free(i,e),this._vertexBuffer.free(t,o)}upload(){this._invalidatedGeometry=!0,this._invalidatedCompute=!0}getGeometryVAO(i,e){if(!this._vertexBuffer||!this._indexBuffer||!this._vertexBuffer.bufferSize)return null;if(this._invalidatedGeometry){(this._vertexBuffer.invalidated||this._indexBuffer.invalidated)&&(this._vertexBuffer.invalidate(),this._indexBuffer.invalidate(),this._geometryVAO?.disposeVAOOnly(),this._geometryVAO=null),this._vertexBuffer.upload(),this._indexBuffer.upload();const t=this._indexBuffer.getGPUBuffer(i,!1),o=this._vertexBuffer.getGPUBuffer(i);this._geometryVAO||(this._geometryVAO=new K(i,e.locations,gi(this.layout,e),new Map([["geometry",o]]),t)),this._invalidatedGeometry=!1}return this._geometryVAO}getComputeVAO(i,e){if(!this._vertexBuffer||!this._indexBuffer||!this._vertexBuffer.bufferSize)return null;if(this._invalidatedCompute){(this._vertexBuffer.invalidated||this._indexBuffer.invalidatedComputeBuffer)&&(this._vertexBuffer.invalidate(),this._indexBuffer.invalidate(),this._computeVAO?.disposeVAOOnly(),this._computeVAO=null),this._vertexBuffer.upload(),this._indexBuffer.upload();const t=this._indexBuffer.getGPUBuffer(i,!0),o=this._vertexBuffer.getGPUBuffer(i);this._computeVAO||(this._computeVAO=new K(i,e.locations,hi(this.layout,e),new Map([["geometry",o]]),t),this._invalidatedCompute=!1)}return this._computeVAO}get memoryStats(){return{bytesUsed:this._vertexBuffer.memoryStats.bytesUsed+this._indexBuffer.memoryStats.bytesUsed,bytesReserved:this._vertexBuffer.memoryStats.bytesReserved+this._indexBuffer.memoryStats.bytesReserved,vertex:this._vertexBuffer.memoryStats,index:this._indexBuffer.memoryStats}}reshuffle(i){this._vertexBuffer&&this._vertexBuffer.reshuffle(i.vertex.count,i.vertex.operations),this._indexBuffer&&this._indexBuffer.reshuffle(i.index.count,i.index.operations)}},fe=class{constructor(i){this._pos=0,this._buffer=i,this._i32View=new Int32Array(this._buffer),this._f32View=new Float32Array(this._buffer)}readInt32(){return this._i32View[this._pos++]}readF32(){return this._f32View[this._pos++]}};function tt(i){return i?{entities:se(new fe(i.entities),ce),vertexData:i.data.map(yi)}:null}function yi(i){const e=i.layout.stride,t=new DataView(i.vertices),o=[],a=i.vertices.byteLength/e;let r=0;for(let l=0;l<a;l++){const n={};for(const s of i.layout.attributes){let u=`${s.offset} ${s.name}`,c=De(t,s,r);if(s.packPrecisionFactor)if(u+=` (precision: ${s.packPrecisionFactor})`,typeof c=="number")c/=s.packPrecisionFactor;else for(let f=0;f<c.length;f++)c[f]/=s.packPrecisionFactor;n[u]=c}r+=e,o.push(n)}return{vertices:o,layout:i.layout}}const Si=()=>_e.getLogger("esri.views.2d.engine.webgl.FeatureTile");let Ti=0,it=class extends ci{constructor(i,e,t,o,a=!1){super(i,e,t,o),this._meshes=new Map,this._entities=[],this._invalidated=!1,this._nextUploadAllowed=!1,this.tileAge=Ti++,this._metrics=[],this._entityIds=new Set,this._entityIdsFromBuffer=new Set,this._attributeEpoch=0,this._encounteredEnd=!1,this._objectIdMap=null,this.visible=!0,this.transforms.labelMat2d=ve(),this.enableDeferredUploads=a}destroy(){super.destroy(),this.clear()}clear(){for(const i of this._meshes.values())i.destroy();this._meshes.clear(),this._entities=[],this._metrics=[],this._displayList=null,this._invalidated=!0,this._entityIds.clear(),this._nextUploadAllowed=!0}beforeRender(i){super.beforeRender(i),this._needsReshuffle&&i.reshuffleManager.schedule(this)}tryReady(i){const e=this._invalidated&&!this._uploadAllowed;return!(this.isReady||e||!this._encounteredEnd||!(i>=this._attributeEpoch))&&(j("esri-2d-update-debug")&&console.debug(`Tile[${this.key.id}] FeatureTile.ready [epoch=${i}]`),this.ready(),this.requestRender(),!0)}get labelMetrics(){return this._metrics}get hasData(){return!!this._meshes.size}get hasAnimations(){return!!this._objectIdMap}get needsUpload(){return this._invalidated}get _uploadAllowed(){return!this.enableDeferredUploads||this._nextUploadAllowed}upload(){this._nextUploadAllowed=!0}getDisplayList(i,e){if(this._uploadAllowed&&this._invalidated){this._entities.sort((t,o)=>{const a=o.sortKey,r=t.sortKey;return r===a?t.id-o.id:r-a}),e===ge.BATCHING&&this.reshuffle(!0),this._displayList=di.fromDisplayEntities(this._entities,this,i,e);for(const t of this._meshes.values())t.upload();this.debugInfo.display.length=this._displayList.length,this.debugInfo.display.minOrderedLength=this._displayList.minOrderedLength,this.debugInfo.display.minUnorderedLength=this._displayList.minUnorderedLength,this.requestRender(),this._invalidated=!1,this._nextUploadAllowed=!1}return this._displayList}getMesh(i){if(!this._meshes.has(i))throw new Error(`InternalError: Unable to find VAO for instance: ${i}`);return this._meshes.get(i)}getSortKeys(i){const e=new Map;for(const{id:t,sortKey:o}of this._entities)if(i.has(t)&&e.set(t,o),e.size===i.size)break;return e}onMessage(i){if(i.objectIdMap)for(const e in i.objectIdMap)this._objectIdMap||(this._objectIdMap={}),this._objectIdMap[e]=i.objectIdMap[e];switch(i.type){case"append":this._onAppendMessage(i);break;case"update":this._onUpdateMessage(i)}if(this._aggregateMemoryStats(),this.requestRender(),i.end){if(j("esri-2d-update-debug")&&console.debug(`Tile[${this.key.id}] FeatureTile.end [epoch=${i.attributeEpoch}]`),!i.attributeEpoch)throw new Error("InternalError: Attribute epoch not defined.");this._attributeEpoch=i.attributeEpoch,this._encounteredEnd=!0}}_onAppendMessage(i){if(j("esri-2d-update-debug")&&console.debug(`Tile[${this.key.id}] FeatureTile.append`,{append:tt(i?.append)}),i.clear&&this.clear(),!i.append)return;const e=se(new fe(i.append.entities),ce);this._insert(e,i.append.data,!1)}_onUpdateMessage(i){j("esri-2d-update-debug")&&console.debug(`Tile[${this.key.id}] FeatureTile.update`,{isPixelBuffer:i.isPixelBuffer,modify:tt(i.modify),remove:i.remove});const e=se(new fe(i.modify.entities),ce),t=e.map(r=>r.id),o=i.isPixelBuffer??!1,a=[...i.remove,...t];o?this._removeByIdsFromBuffer(a):this._removeByIds(a),this._insert(e,i.modify.data,o)}reshuffle(i=!1){if(this.destroyed)return;const e=new Map;for(const t of this._entities)for(const o of t.records){const a=this._meshes.get(o.instanceId);let r=e.get(a);r||(r=new _i(i),e.set(a,r)),r.copyRecord(o)}for(const[t,o]of e)t.reshuffle(o);this._invalidated=!0,this._aggregateMemoryStats(),j("esri-2d-update-debug")&&Si().info(`Tile ${this.key.id} was reshuffled.`)}copyPixelBufferedEntitesFrom(i,e,t,o){const a=t*ne,r=o*ne;for(const l of i._entities){let n=null;for(const s of l.records)if(s.overlaps&e){const u=i.getMesh(s.instanceId),c=this._ensureMesh(s.instanceId,u.layout).copyRecordFrom(u,s,a,r);n||(n=new ce(l.id,l.sortKey),this._entityIdsFromBuffer.add(l.id),this._entities.push(n)),n.records.push(c)}}this._invalidated=!0}_ensureMesh(i,e){return this._meshes.has(i)||this._meshes.set(i,new xi(this._stage.bufferPool,e)),this._meshes.get(i)}_insert(i,e,t){if(!i.length)return;this._removeDuplicatedBufferedEntites(i);const o=this._insertVertexData(e);for(const a of i){for(const r of a.records)r.updateBaseOffsets(o.get(r.instanceId));t?this._tryInsertBufferedEntity(a):this._insertEntity(a)}this._invalidated=!0}_insertVertexData(i){const e=new Map;for(const t of i){const{instanceId:o,layout:a}=t,r=this._ensureMesh(o,a).append(t);if(t.metrics){const l=se(new fe(t.metrics),It)??[];this._metrics.push(...l)}e.set(o,r)}return e}_insertEntity(i){j("esri-2d-update-debug")&&this._entityIds.has(i.id)&&console.error(`Tile ${this.key.id} insertEnitty: Already have entityId ${i.id}`),this._entityIds.add(i.id),this._entities.push(i)}_tryInsertBufferedEntity(i){this._entityIds.has(i.id)?this._removeRecordsFromMesh(i.records):(this._entityIdsFromBuffer.add(i.id),this._entities.push(i))}_removeDuplicatedBufferedEntites(i){if(!this._entityIdsFromBuffer.size)return;const e=[];for(const t of i)this._entityIdsFromBuffer.has(t.id)&&e.push(t.id);this._removeByIds(e)}_removeByIdsFromBuffer(i){this._removeByIds(i.filter(e=>this._entityIdsFromBuffer.has(e)))}_removeByIds(i){if(i.length===0)return;const e=new Set(i),t=[];for(const o of this._entities)e.has(o.id)?this._remove(o):t.push(o);this._entities=t,this._invalidated=!0}_remove(i){this._removeRecordsFromMesh(i.records),this._entityIds.delete(i.id),this._entityIdsFromBuffer.delete(i.id);for(let e=this._metrics.length-1;e>=0;e--)this._metrics[e].entityTexel===i.id&&this._metrics.splice(e,1)}_removeRecordsFromMesh(i){for(const e of i){const{instanceId:t,indexStart:o,indexCount:a,vertexStart:r,vertexCount:l}=e;this._meshes.get(t)?.remove(o,a,r,l)}}_aggregateMemoryStats(){this.debugInfo.memory.bytesUsed=0,this.debugInfo.memory.bytesReserved=0;for(const i of this._meshes.values())this.debugInfo.memory.bytesUsed+=i.memoryStats.bytesUsed,this.debugInfo.memory.bytesReserved+=i.memoryStats.bytesReserved}get _needsReshuffle(){if(this.destroyed)return!1;const{bytesUsed:i,bytesReserved:e}=this.debugInfo.memory,t=i/e,{minOrderedLength:o,length:a}=this.debugInfo.display;return e>ht&&t<xt||a>yt&&o/a<St}get entityIds(){return this._objectIdMap?this._entities.map(({id:i})=>({objectId:this._objectIdMap[i],displayId:i})):[]}};const ot={shaders:{vertexShader:oe("tileInfo/tileInfo.vert"),fragmentShader:oe("tileInfo/tileInfo.frag")},attributes:new Map([["a_pos",0]])},at=512,Te=512,X=16,M=8,bi=(Te-2*M)/5;let rt=class extends k{constructor(){super(...arguments),this._color=H(1,0,0,1)}dispose(){this._outlineProgram?.dispose(),this._outlineProgram=null,this._tileInfoProgram?.dispose(),this._tileInfoProgram=null,this._outlineVertexArrayObject?.dispose(),this._outlineVertexArrayObject=null,this._tileInfoVertexArrayObject?.dispose(),this._tileInfoVertexArrayObject=null,this._ctx=null}prepareState({context:i}){i.setBlendingEnabled(!0),i.setBlendFunctionSeparate(F.ONE,F.ONE_MINUS_SRC_ALPHA,F.ONE,F.ONE_MINUS_SRC_ALPHA),i.setColorMask(!0,!0,!0,!0),i.setStencilWriteMask(0),i.setStencilTestEnabled(!1)}draw(i,e){const{context:t,requestRender:o,allowDelayedRender:a}=i;if(!e.isReady&&e instanceof it&&e.hasData)return;if(this._loadWGLResources(t),a&&o!=null&&(!this._outlineProgram.compiled||!this._tileInfoProgram.compiled))return void o();t.bindVAO(this._outlineVertexArrayObject),t.useProgram(this._outlineProgram),this._outlineProgram.setUniformMatrix3fv("u_dvsMat3",e.transforms.displayViewScreenMat3),this._outlineProgram.setUniform2f("u_coord_range",e.rangeX,e.rangeY),this._outlineProgram.setUniform1f("u_depth",0),this._outlineProgram.setUniform4fv("u_color",this._color),t.drawArrays(C.LINE_STRIP,0,4);const r=this._getTexture(t,e);r&&(t.bindVAO(this._tileInfoVertexArrayObject),t.useProgram(this._tileInfoProgram),t.bindTexture(r,0),this._tileInfoProgram.setUniformMatrix3fv("u_dvsMat3",e.transforms.displayViewScreenMat3),this._tileInfoProgram.setUniform1f("u_depth",0),this._tileInfoProgram.setUniform2f("u_coord_ratio",e.rangeX/e.width,e.rangeY/e.height),this._tileInfoProgram.setUniform2f("u_delta",0,0),this._tileInfoProgram.setUniform2f("u_dimensions",r.descriptor.width,r.descriptor.height),t.drawArrays(C.TRIANGLE_STRIP,0,4)),t.bindVAO()}_loadWGLResources(i){if(this._outlineProgram&&this._tileInfoProgram)return;const e=ue(i,ae),t=ue(i,ot),o=new Int8Array([0,0,1,0,1,1,0,1]),a=G.createVertex(i,Z.STATIC_DRAW,o),r=new K(i,ae.attributes,xe,new Map([["geometry",a]])),l=new Int8Array([0,0,1,0,0,1,1,1]),n=G.createVertex(i,Z.STATIC_DRAW,l),s=new K(i,ot.attributes,xe,new Map([["geometry",n]]));this._outlineProgram=e,this._tileInfoProgram=t,this._outlineVertexArrayObject=r,this._tileInfoVertexArrayObject=s}_getTexture(i,e){if(!this._ctx){const n=document.createElement("canvas");n.width=at,n.height=Te,this._ctx=n.getContext("2d")}if(!e.tileDebugInfoTexture){const n=new Ft;n.wrapMode=Et.CLAMP_TO_EDGE,n.samplingMode=w.LINEAR,n.isImmutable=!0,n.width=at,n.height=Te,e.tileDebugInfoTexture=new Bt(i,n)}const t=this._ctx;t.clearRect(0,0,t.canvas.width,t.canvas.height),t.textAlign="left",t.textBaseline="top",t.font=X-2+"px sans-serif",t.lineWidth=2,t.fillStyle="white",t.strokeStyle="black";const{debugSlot:o}=e;let a=M+bi*o;const r=`${o}) ${e.key.id} (${e.constructor.name})`;t.strokeText(r,M,a),t.fillText(r,M,a),a+=X;const{debugInfo:l}=e;if(l){const{length:n,minOrderedLength:s,minUnorderedLength:u,triangleCount:c}=l.display;if(n>0){const _=`Length: ${n}`;t.strokeText(_,M,a),t.fillText(_,M,a),a+=X}if(s){const _=`Min ordered length: ${s}`;t.strokeText(_,M,a),t.fillText(_,M,a),a+=X}if(u){const _=`Min unordered length: ${u}`;t.strokeText(_,M,a),t.fillText(_,M,a),a+=X}if(c>0){c>1e5&&(t.fillStyle="red",t.strokeStyle="white");const _=`Triangle count: ${c}`;t.strokeText(_,M,a),t.fillText(_,M,a),a+=X}const{bytesUsed:f,bytesReserved:d}=l.memory;if(t.fillStyle="white",t.strokeStyle="black",f>0||d>0){const _=`Memory usage: ${f} of ${d} bytes`;t.strokeText(_,M,a),t.fillText(_,M,a),a+=X}}return e.tileDebugInfoTexture.setData(t.canvas),e.tileDebugInfoTexture}},Ii=class extends k{constructor(){super(...arguments),this._color=H(1,0,0,1),this._patternMatrix=te(),this._programOptions={id:!1,pattern:!1}}dispose(){this._vao&&(this._vao.dispose(),this._vao=null)}drawMany(i,e){const{context:t,painter:o,requestRender:a,allowDelayedRender:r}=i;this._loadWGLResources(i);const l=i.displayLevel,n=i.styleLayer,s=n.backgroundMaterial,u=o.vectorTilesMaterialManager,c=n.getPaintValue("background-color",l),f=n.getPaintValue("background-opacity",l),d=n.getPaintValue("background-pattern",l),_=d!==void 0,x=1|window.devicePixelRatio,g=i.spriteMosaic;let b,E;const S=x>Ce?2:1,T=this._programOptions;T.pattern=_;const v=u.getMaterialProgram(t,s,T);if(!r||a==null||v.compiled){if(t.bindVAO(this._vao),t.useProgram(v),_){const p=g.getMosaicItemPosition(d,!0);if(p!=null){const{tl:h,br:y,page:I}=p;b=y[0]-h[0],E=y[1]-h[1];const m=g.getPageSize(I);m!=null&&(g.bind(t,w.LINEAR,I,N),v.setUniform4f("u_tlbr",h[0],h[1],y[0],y[1]),v.setUniform2fv("u_mosaicSize",m),v.setUniform1i("u_texture",N))}v.setUniform1f("u_opacity",f)}else{const p=c[3]*f;this._color[0]=p*c[0],this._color[1]=p*c[1],this._color[2]=p*c[2],this._color[3]=p,v.setUniform4fv("u_color",this._color)}v.setUniform1f("u_depth",n.z||0);for(const p of e){if(v.setUniform1f("u_coord_range",p.rangeX),v.setUniformMatrix3fv("u_dvsMat3",p.transforms.displayViewScreenMat3),_){const h=Math.max(2**(Math.round(l)-p.key.level),1),y=S*p.width*h,I=y/Ee(b),m=y/Ee(E);this._patternMatrix[0]=I,this._patternMatrix[4]=m,v.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}t.setStencilFunction(B.EQUAL,0,255),t.drawArrays(C.TRIANGLE_STRIP,0,4)}}else a()}_loadWGLResources(i){if(this._vao)return;const{context:e,styleLayer:t}=i,o=t.backgroundMaterial,a=new Int8Array([0,0,1,0,0,1,1,1]),r=G.createVertex(e,Z.STATIC_DRAW,a),l=new K(e,o.getAttributeLocations(),o.getLayoutInfo(),new Map([["geometry",r]]));this._vao=l}},Oi=class extends k{constructor(){super(...arguments),this._programOptions={id:!1}}dispose(){}drawMany(i,e){const{context:t,displayLevel:o,requiredLevel:a,state:r,painter:l,spriteMosaic:n,styleLayerUID:s,requestRender:u,allowDelayedRender:c}=i;if(!e.some(v=>v.layerData.get(s)?.circleIndexCount??!1))return;const f=i.styleLayer,d=f.circleMaterial,_=l.vectorTilesMaterialManager,x=1.2,g=f.getPaintValue("circle-translate",o),b=f.getPaintValue("circle-translate-anchor",o),E=this._programOptions,S=_.getMaterialProgram(t,d,E);if(c&&u!=null&&!S.compiled)return void u();t.useProgram(S),S.setUniformMatrix3fv("u_displayMat3",b===J.VIEWPORT?r.displayMat3:r.displayViewMat3),S.setUniform2fv("u_circleTranslation",g),S.setUniform1f("u_depth",f.z),S.setUniform1f("u_antialiasingWidth",x);let T=-1;for(const v of e){if(!v.layerData.has(s))continue;v.key.level!==T&&(T=v.key.level,d.setDataUniforms(S,o,f,T,n));const p=v.layerData.get(s);if(!p.circleIndexCount)continue;p.prepareForRendering(t);const h=p.vao;h!=null&&(t.bindVAO(h),S.setUniformMatrix3fv("u_dvsMat3",v.transforms.displayViewScreenMat3),a!==v.key.level?t.setStencilFunction(B.EQUAL,v.stencilRef,255):t.setStencilFunction(B.GREATER,255,255),t.drawElements(C.TRIANGLES,p.circleIndexCount,A.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*p.circleIndexStart),v.triangleCount+=p.circleIndexCount/3)}}};const lt=1/65536;class Ei extends k{constructor(){super(...arguments),this._fillProgramOptions={id:!1,pattern:!1},this._outlineProgramOptions={id:!1}}dispose(){}drawMany(e,t){const{displayLevel:o,renderPass:a,spriteMosaic:r,styleLayerUID:l}=e;let n=!1;for(const T of t)if(T.layerData.has(l)){const v=T.layerData.get(l);if(v.fillIndexCount>0||v.outlineIndexCount>0){n=!0;break}}if(!n)return;const s=e.styleLayer,u=s.getPaintProperty("fill-pattern"),c=u!==void 0,f=c&&u.isDataDriven;let d;if(c&&!f){const T=u.getValue(o);d=r.getMosaicItemPosition(T,!0)}const _=!c&&s.getPaintValue("fill-antialias",o);let x=!0,g=1;if(!c){const T=s.getPaintProperty("fill-color"),v=s.getPaintProperty("fill-opacity");if(!T?.isDataDriven&&!v?.isDataDriven){const p=s.getPaintValue("fill-color",o);g=s.getPaintValue("fill-opacity",o)*p[3],g>=1&&(x=!1)}}if(x&&a==="opaque")return;const b=s.getPaintValue("fill-translate",o),E=s.getPaintValue("fill-translate-anchor",o);(x||a!=="translucent")&&this._drawFill(e,l,s,t,b,E,c,d,f);const S=!s.hasDataDrivenOutlineColor&&s.outlineUsesFillColor&&g<1;_&&a!=="opaque"&&!S&&this._drawOutline(e,l,s,t,b,E)}_drawFill(e,t,o,a,r,l,n,s,u){if(n&&!u&&s==null)return;const{context:c,displayLevel:f,state:d,painter:_,pixelRatio:x,spriteMosaic:g,requestRender:b,allowDelayedRender:E}=e,S=o.fillMaterial,T=_.vectorTilesMaterialManager,v=x>Ce?2:1,p=this._fillProgramOptions;p.pattern=n;const h=T.getMaterialProgram(c,S,p);if(E&&b!=null&&!h.compiled)return void b();if(c.useProgram(h),s!=null){const{page:I}=s,m=g.getPageSize(I);m!=null&&(g.bind(c,w.LINEAR,I,N),h.setUniform2fv("u_mosaicSize",m),h.setUniform1i("u_texture",N))}h.setUniformMatrix3fv("u_displayMat3",l===J.VIEWPORT?d.displayMat3:d.displayViewMat3),h.setUniform2fv("u_fillTranslation",r),h.setUniform1f("u_depth",o.z+lt);let y=-1;for(const I of a){if(!I.layerData.has(t))continue;I.key.level!==y&&(y=I.key.level,S.setDataUniforms(h,f,o,y,g));const m=I.layerData.get(t);if(!m.fillIndexCount)continue;m.prepareForRendering(c);const V=m.fillVAO;if(V!=null){if(c.bindVAO(V),h.setUniformMatrix3fv("u_dvsMat3",I.transforms.displayViewScreenMat3),c.setStencilFunction(B.EQUAL,I.stencilRef,255),n){const O=Math.max(2**(Math.round(f)-I.key.level),1),D=I.rangeX/(v*I.width*O);h.setUniform1f("u_patternFactor",D)}if(u){const O=m.patternMap;if(!O)continue;for(const[D,L]of O){const q=g.getPageSize(D);q!=null&&(g.bind(c,w.LINEAR,D,N),h.setUniform2fv("u_mosaicSize",q),h.setUniform1i("u_texture",N),c.drawElements(C.TRIANGLES,L[1],A.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*L[0]))}}else c.drawElements(C.TRIANGLES,m.fillIndexCount,A.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*m.fillIndexStart);I.triangleCount+=m.fillIndexCount/3}}}_drawOutline(e,t,o,a,r,l){const{context:n,displayLevel:s,state:u,painter:c,pixelRatio:f,spriteMosaic:d,requestRender:_,allowDelayedRender:x}=e,g=o.outlineMaterial,b=c.vectorTilesMaterialManager,E=.75/f,S=this._outlineProgramOptions,T=b.getMaterialProgram(n,g,S);if(x&&_!=null&&!T.compiled)return void _();n.useProgram(T),T.setUniformMatrix3fv("u_displayMat3",l===J.VIEWPORT?u.displayMat3:u.displayViewMat3),T.setUniform2fv("u_fillTranslation",r),T.setUniform1f("u_depth",o.z+lt),T.setUniform1f("u_outline_width",E);let v=-1;for(const p of a){if(!p.layerData.has(t))continue;p.key.level!==v&&(v=p.key.level,g.setDataUniforms(T,s,o,v,d));const h=p.layerData.get(t);if(h.prepareForRendering(n),!h.outlineIndexCount)continue;const y=h.outlineVAO;y!=null&&(n.bindVAO(y),T.setUniformMatrix3fv("u_dvsMat3",p.transforms.displayViewScreenMat3),n.setStencilFunction(B.EQUAL,p.stencilRef,255),n.drawElements(C.TRIANGLES,h.outlineIndexCount,A.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*h.outlineIndexStart),p.triangleCount+=h.outlineIndexCount/3)}}}class Ai extends k{constructor(){super(...arguments),this._programOptions={id:!1,pattern:!1,sdf:!1}}dispose(){}drawMany(e,t){const{context:o,displayLevel:a,state:r,painter:l,pixelRatio:n,spriteMosaic:s,styleLayerUID:u,requestRender:c,allowDelayedRender:f}=e;if(!t.some(O=>O.layerData.get(u)?.lineIndexCount??!1))return;const d=e.styleLayer,_=d.lineMaterial,x=l.vectorTilesMaterialManager,g=d.getPaintValue("line-translate",a),b=d.getPaintValue("line-translate-anchor",a),E=d.getPaintProperty("line-pattern"),S=E!==void 0,T=S&&E.isDataDriven;let v,p;if(S&&!T){const O=E.getValue(a);v=s.getMosaicItemPosition(O)}let h=!1;if(!S){const O=d.getPaintProperty("line-dasharray");if(p=O!==void 0,h=p&&O.isDataDriven,p&&!h){const D=O.getValue(a),L=d.getDashKey(D,d.getLayoutValue("line-cap",a));v=s.getMosaicItemPosition(L)}}const y=1/n,I=this._programOptions;I.pattern=S,I.sdf=p;const m=x.getMaterialProgram(o,_,I);if(f&&c!=null&&!m.compiled)return void c();if(o.useProgram(m),m.setUniformMatrix3fv("u_displayViewMat3",r.displayViewMat3),m.setUniformMatrix3fv("u_displayMat3",b===J.VIEWPORT?r.displayMat3:r.displayViewMat3),m.setUniform2fv("u_lineTranslation",g),m.setUniform1f("u_depth",d.z),m.setUniform1f("u_antialiasing",y),v&&v!=null){const{page:O}=v,D=s.getPageSize(O);D!=null&&(s.bind(o,w.LINEAR,O,N),m.setUniform2fv("u_mosaicSize",D),m.setUniform1i("u_texture",N))}let V=-1;for(const O of t){if(!O.layerData.has(u))continue;O.key.level!==V&&(V=O.key.level,_.setDataUniforms(m,a,d,V,s));const D=2**(a-V)/n;m.setUniform1f("u_zoomFactor",D);const L=O.layerData.get(u);if(!L.lineIndexCount)continue;L.prepareForRendering(o);const q=L.vao;if(q!=null){if(o.bindVAO(q),m.setUniformMatrix3fv("u_dvsMat3",O.transforms.displayViewScreenMat3),o.setStencilFunction(B.EQUAL,O.stencilRef,255),T||h){const le=L.patternMap;if(!le)continue;for(const[P,$]of le){const z=s.getPageSize(P);z!=null&&(s.bind(o,w.LINEAR,P,N),m.setUniform2fv("u_mosaicSize",z),m.setUniform1i("u_texture",N),o.drawElements(C.TRIANGLES,$[1],A.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*$[0]))}}else o.drawElements(C.TRIANGLES,L.lineIndexCount,A.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*L.lineIndexStart);O.triangleCount+=L.lineIndexCount/3}}}}const Ci=256/360,Pi=1/Math.LN2;function Di(i,e){return(i%=e)>=0?i:i+e}function nt(i){return Di(i*Ci,256)}function Ri(i){return Math.log(i)*Pi}const Li=1/65536;class Mi extends k{constructor(){super(...arguments),this._iconProgramOptions={id:!1,sdf:!1},this._sdfProgramOptions={id:!1},this._spritesTextureSize=Ut()}dispose(){}drawMany(e,t){const o=e.styleLayer;this._drawIcons(e,o,t),this._drawText(e,o,t)}_drawIcons(e,t,o){const{context:a,displayLevel:r,painter:l,spriteMosaic:n,state:s,styleLayerUID:u,requestRender:c,allowDelayedRender:f}=e,d=t.iconMaterial,_=l.vectorTilesMaterialManager;let x,g=!1;for(const m of o)if(m.layerData.has(u)&&(x=m.layerData.get(u),x.iconPerPageElementsMap.size>0)){g=!0;break}if(!g)return;const b=t.getPaintValue("icon-translate",r),E=t.getPaintValue("icon-translate-anchor",r);let S=t.getLayoutValue("icon-rotation-alignment",r);S===Y.AUTO&&(S=t.getLayoutValue("symbol-placement",r)===ze.POINT?Y.VIEWPORT:Y.MAP);const T=S===Y.MAP,v=t.getLayoutValue("icon-keep-upright",r)&&T,p=x.isIconSDF,h=this._iconProgramOptions;h.sdf=p;const y=_.getMaterialProgram(a,d,h);if(f&&c!=null&&!y.compiled)return void c();a.useProgram(y),y.setUniformMatrix3fv("u_displayViewMat3",S===Y.MAP?s.displayViewMat3:s.displayMat3),y.setUniformMatrix3fv("u_displayMat3",E===J.VIEWPORT?s.displayMat3:s.displayViewMat3),y.setUniform2fv("u_iconTranslation",b),y.setUniform1f("u_depth",t.z),y.setUniform1f("u_mapRotation",nt(s.rotation)),y.setUniform1f("u_keepUpright",v?1:0),y.setUniform1f("u_level",10*r),y.setUniform1i("u_texture",N),y.setUniform1f("u_fadeDuration",Ve/1e3);let I=-1;for(const m of o){if(!m.layerData.has(u)||(m.key.level!==I&&(I=m.key.level,d.setDataUniforms(y,r,t,I,n)),x=m.layerData.get(u),x.iconPerPageElementsMap.size===0))continue;x.prepareForRendering(a),x.updateOpacityInfo();const V=x.iconVAO;if(V!=null){a.bindVAO(V),y.setUniformMatrix3fv("u_dvsMat3",m.transforms.displayViewScreenMat3),y.setUniform1f("u_time",(performance.now()-x.lastOpacityUpdate)/1e3);for(const[O,D]of x.iconPerPageElementsMap)this._renderIconRange(e,y,D,O,m)}}}_renderIconRange(e,t,o,a,r){const{context:l,spriteMosaic:n}=e;this._spritesTextureSize[0]=n.getWidth(a)/4,this._spritesTextureSize[1]=n.getHeight(a)/4,t.setUniform2fv("u_mosaicSize",this._spritesTextureSize),n.bind(l,w.LINEAR,a,N),this._setStencilState(e,r),l.drawElements(C.TRIANGLES,o[1],A.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*o[0]),r.triangleCount+=o[1]/3}_drawText(e,t,o){const{context:a,displayLevel:r,glyphMosaic:l,painter:n,pixelRatio:s,spriteMosaic:u,state:c,styleLayerUID:f,requestRender:d,allowDelayedRender:_}=e,x=t.textMaterial,g=n.vectorTilesMaterialManager;let b,E=!1;for(const z of o)if(z.layerData.has(f)&&(b=z.layerData.get(f),b.glyphPerPageElementsMap.size>0)){E=!0;break}if(!E)return;const S=t.getPaintProperty("text-opacity");if(S&&!S.isDataDriven&&S.getValue(r)===0)return;const T=t.getPaintProperty("text-color"),v=!T||T.isDataDriven||T.getValue(r)[3]>0,p=t.getPaintProperty("text-halo-width"),h=t.getPaintProperty("text-halo-color"),y=(!p||p.isDataDriven||p.getValue(r)>0)&&(!h||h.isDataDriven||h.getValue(r)[3]>0);if(!v&&!y)return;const I=24/8;let m=t.getLayoutValue("text-rotation-alignment",r);m===Y.AUTO&&(m=t.getLayoutValue("symbol-placement",r)===ze.POINT?Y.VIEWPORT:Y.MAP);const V=m===Y.MAP,O=t.getLayoutValue("text-keep-upright",r)&&V,D=.8*I/s;this._glyphTextureSize||(this._glyphTextureSize=Gt(l.width/4,l.height/4));const L=t.getPaintValue("text-translate",r),q=t.getPaintValue("text-translate-anchor",r),le=this._sdfProgramOptions,P=g.getMaterialProgram(a,x,le);if(_&&d!=null&&!P.compiled)return void d();a.useProgram(P),P.setUniformMatrix3fv("u_displayViewMat3",m===Y.MAP?c.displayViewMat3:c.displayMat3),P.setUniformMatrix3fv("u_displayMat3",q===J.VIEWPORT?c.displayMat3:c.displayViewMat3),P.setUniform2fv("u_textTranslation",L),P.setUniform1f("u_depth",t.z+Li),P.setUniform2fv("u_mosaicSize",this._glyphTextureSize),P.setUniform1f("u_mapRotation",nt(c.rotation)),P.setUniform1f("u_keepUpright",O?1:0),P.setUniform1f("u_level",10*r),P.setUniform1i("u_texture",Pe),P.setUniform1f("u_antialiasingWidth",D),P.setUniform1f("u_fadeDuration",Ve/1e3);let $=-1;for(const z of o){if(!z.layerData.has(f)||(z.key.level!==$&&($=z.key.level,x.setDataUniforms(P,r,t,$,u)),b=z.layerData.get(f),b.glyphPerPageElementsMap.size===0))continue;b.prepareForRendering(a),b.updateOpacityInfo();const Ie=b.textVAO;if(Ie==null)continue;a.bindVAO(Ie),P.setUniformMatrix3fv("u_dvsMat3",z.transforms.displayViewScreenMat3),this._setStencilState(e,z);const mt=(performance.now()-b.lastOpacityUpdate)/1e3;P.setUniform1f("u_time",mt),b.glyphPerPageElementsMap.forEach((vt,pt)=>{this._renderGlyphRange(a,vt,pt,l,P,y,v,z)})}}_renderGlyphRange(e,t,o,a,r,l,n,s){a.bind(e,w.LINEAR,o,Pe),l&&(r.setUniform1f("u_halo",1),e.drawElements(C.TRIANGLES,t[1],A.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),s.triangleCount+=t[1]/3),n&&(r.setUniform1f("u_halo",0),e.drawElements(C.TRIANGLES,t[1],A.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),s.triangleCount+=t[1]/3)}_setStencilState(e,t){const{context:o,is3D:a,stencilSymbols:r}=e;if(o.setStencilTestEnabled(!0),r)return o.setStencilWriteMask(255),void o.setStencilFunction(B.ALWAYS,t.stencilRef,255);o.setStencilWriteMask(0),a?o.setStencilFunction(B.EQUAL,t.stencilRef,255):o.setStencilFunction(B.GREATER,255,255)}}const st={clip:li,stencil:Ze,bitmap:Kt,tileDebugInfo:rt,vtlBackground:Ii,vtlFill:Ei,vtlLine:Ai,vtlCircle:Oi,vtlSymbol:Mi},zi=i=>{switch(i.BYTES_PER_ELEMENT){case 1:return A.UNSIGNED_BYTE;case 2:return A.UNSIGNED_SHORT;case 4:return A.UNSIGNED_INT;default:throw new me("Cannot get DataType of array")}},Vi=(i,e,t,o)=>{let a=0;for(let r=1;r<t;r++){const l=i[2*(e+r-1)],n=i[2*(e+r-1)+1];a+=(i[2*(e+r)]-l)*(i[2*(e+r)+1]+n)}return o?a>0:a<0},ct=({coords:i,lengths:e},t)=>{const o=[];for(let a=0,r=0;a<e.length;r+=e[a],a+=1){const l=r,n=[];for(;a<e.length-1&&Vi(i,r+e[a],e[a+1],t);a+=1,r+=e[a])n.push(r+e[a]-l);const s=i.slice(2*l,2*(r+e[a])),u=Yt(s,n,2);for(const c of u)o.push(c+l)}return o};class U{constructor(e,t,o,a=!1){this._cache={},this.vertices=e,this.indices=t,this.primitiveType=o,this.isMapSpace=a}static fromPath(e){const t=Ht(new we,e.path,!1,!1),o=t.coords,a=new Uint32Array(ct(t,!0)),r=new Uint32Array(o.length/2);for(let l=0;l<r.length;l++)r[l]=R(Math.floor(o[2*l]),Math.floor(o[2*l+1]));return new U({geometry:r},a,C.TRIANGLES)}static fromGeometry(e,t){const o=t.geometry?.type;switch(o){case"polygon":return U.fromPolygon(e,t.geometry);case"extent":return U.fromMapExtent(e,t.geometry);default:return _e.getLogger("esri.views.2d.engine.webgl.Mesh2D").error(new me("mapview-bad-type",`Unable to create a mesh from type ${o}`,t)),U.fromScreenExtent({xmin:0,ymin:0,xmax:1,ymax:1})}}static fromPolygon(e,t){const o=Wt(new we,t,!1,!1),a=o.coords,r=new Uint32Array(ct(o,!1)),l=new Uint32Array(a.length/2),n=Ne(),s=Ne();for(let u=0;u<l.length;u++)kt(n,a[2*u],a[2*u+1]),e.toScreen(s,n),l[u]=R(Math.floor(s[0]),Math.floor(s[1]));return new U({geometry:l},r,C.TRIANGLES,!0)}static fromScreenExtent({xmin:e,xmax:t,ymin:o,ymax:a}){const r={geometry:new Uint32Array([R(e,o),R(t,o),R(e,a),R(e,a),R(t,o),R(t,a)])},l=new Uint32Array([0,1,2,3,4,5]);return new U(r,l,C.TRIANGLES)}static fromMapExtent(e,t){const[o,a]=e.toScreen([0,0],[t.xmin,t.ymin]),[r,l]=e.toScreen([0,0],[t.xmax,t.ymax]),n={geometry:new Uint32Array([R(o,a),R(r,a),R(o,l),R(o,l),R(r,a),R(r,l)])},s=new Uint32Array([0,1,2,3,4,5]);return new U(n,s,C.TRIANGLES)}destroy(){this._cache.indexBuffer!=null&&this._cache.indexBuffer.dispose(),this._cache.vertexBuffers?.forEach(e=>e?.dispose()),this._cache.indexBuffer=this._cache.vertexBuffers=null}get elementType(){return zi(this.indices)}getIndexBuffer(e,t=Z.STATIC_DRAW){return this._cache.indexBuffer??=G.createIndex(e,t,this.indices),this._cache.indexBuffer}getVertexBuffers(e,t=Z.STATIC_DRAW){return this._cache.vertexBuffers??=new Map(Object.keys(this.vertices).reduce((o,a)=>(o.push([a,G.createVertex(e,t,this.vertices[a])]),o),new Array)),this._cache.vertexBuffers}}class be extends Me{constructor(e,t){super(),this._clip=t,this._cache={},this.stage=e,this._handle=gt(()=>t.version,()=>this._invalidate()),this.ready()}static fromClipArea(e,t){return new be(e,t)}_destroyGL(){this._cache.mesh!=null&&(this._cache.mesh.destroy(),this._cache.mesh=null),this._cache.vao!=null&&(this._cache.vao.dispose(),this._cache.vao=null)}destroy(){this._destroyGL(),this._handle.remove()}getVAO(e,t,o,a){const[r,l]=t.size;if(this._clip.type!=="geometry"&&this._lastWidth===r&&this._lastHeight===l||(this._lastWidth=r,this._lastHeight=l,this._destroyGL()),this._cache.vao==null){const n=this._createMesh(t,this._clip),s=n.getIndexBuffer(e),u=n.getVertexBuffers(e);this._cache.mesh=n,this._cache.vao=new K(e,o,a,u,s)}return this._cache.vao}_createTransforms(){return{displayViewScreenMat3:te()}}_invalidate(){this._destroyGL(),this.requestRender()}_createMesh(e,t){switch(t.type){case"rect":return U.fromScreenExtent(Lt(t,e.size[0],e.size[1]));case"path":return U.fromPath(t);case"geometry":return U.fromGeometry(e,t);default:return _e.getLogger("esri.views.2d.engine.webgl.ClippingInfo").error(new me("mapview-bad-type","Unable to create ClippingInfo mesh from clip of type: ${clip.type}")),U.fromScreenExtent({xmin:0,ymin:0,xmax:1,ymax:1})}}}class Ni extends Nt{set clips(e){super.clips=e,this._updateClippingInfo(e)}renderChildren(e){e.painter.setPipelineState(null),this._renderPasses==null&&(this._renderPasses=this.prepareRenderPasses(e.painter));for(const t of this._renderPasses)try{t.render(e)}catch{}}prepareRenderPasses(e){return[e.registerRenderPass({name:"clip",brushes:[st.clip],target:()=>this._clippingInfos,drawPhase:ie.MAP|ie.LABEL|ie.LABEL_ALPHA|ie.DEBUG|ie.HIGHLIGHT})]}_updateClippingInfo(e){this._clippingInfos!=null&&(this._clippingInfos.forEach(t=>t.destroy()),this._clippingInfos=null),e!=null&&e.length&&(this._clippingInfos=e.items.map(t=>be.fromClipArea(this.stage,t))),this.requestRender()}}export{Ze as _,Fe as a,si as b,it as c,oe as d,k as e,ni as f,Ri as g,mi as i,Ni as n,Ke as r,st as t,rt as y};
