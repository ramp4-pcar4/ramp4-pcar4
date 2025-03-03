import"./main-BvP2mMJi.js";import{n as s}from"./compilerUtils-DxE-Nek9.js";import{o as i}from"./interfaces-DDtDqZYj.js";import{e as a}from"./VertexAttribute-BdZWZuT1.js";var n;(function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"})(n||(n={}));var r;function b(e){return e===r.Shadow||e===r.ShadowHighlight||e===r.ShadowExcludeHighlight||e===r.ViewshedShadow}function N(e){return f(e)||e===r.Normal}function O(e){return g(e)||e===r.Normal}function d(e){return e===r.Highlight||e===r.ObjectAndLayerIdColor}function l(e){return e===r.Color}function u(e){return l(e)||p(e)}function h(e){return l(e)||d(e)}function m(e){return u(e)||d(e)}function f(e){return h(e)||c(e)}function g(e){return m(e)||c(e)}function c(e){return e===r.Depth}function p(e){return e===r.ColorEmission}(function(e){e[e.Color=0]="Color",e[e.ColorEmission=1]="ColorEmission",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal",e[e.Shadow=4]="Shadow",e[e.ShadowHighlight=5]="ShadowHighlight",e[e.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",e[e.ViewshedShadow=7]="ViewshedShadow",e[e.Highlight=8]="Highlight",e[e.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",e[e.COUNT=10]="COUNT"})(r||(r={}));function y(e,t){switch(t.normalType){case o.Compressed:e.attributes.add(a.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(i`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case o.Attribute:e.attributes.add(a.NORMAL,"vec3"),e.vertex.code.add(i`vec3 normalModel() {
return normal;
}`);break;case o.ScreenDerivative:e.fragment.code.add(i`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:s(t.normalType);case o.COUNT:}}var o;(function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.ScreenDerivative=2]="ScreenDerivative",e[e.COUNT=3]="COUNT"})(o||(o={}));export{p as S,o as a,r as b,O as c,h as d,n,b as o,N as r,y as t,u};
