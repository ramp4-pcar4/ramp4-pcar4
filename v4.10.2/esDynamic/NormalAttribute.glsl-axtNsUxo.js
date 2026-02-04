import"./main-kpG51UWM.js";import{n as m}from"./compilerUtils-CV1QYWI8.js";import{o as n}from"./interfaces-DN2-jsJC.js";import{e}from"./VertexAttribute-DqD5S0a2.js";var i;(function(r){r[r.Multiply=1]="Multiply",r[r.Ignore=2]="Ignore",r[r.Replace=3]="Replace",r[r.Tint=4]="Tint"})(i||(i={}));var o;function p(r){return r===o.Shadow||r===o.ShadowHighlight||r===o.ShadowExcludeHighlight||r===o.ViewshedShadow}function f(r){return w(r)||r===o.Normal}function g(r){return C(r)||r===o.Normal}function d(r){return r===o.Highlight||r===o.ObjectAndLayerIdColor}function l(r){return r===o.Color}function c(r){return l(r)||h(r)}function s(r){return l(r)||d(r)}function v(r){return c(r)||d(r)}function w(r){return s(r)||u(r)}function C(r){return v(r)||u(r)}function u(r){return r===o.Depth}function h(r){return r===o.ColorEmission}(function(r){r[r.Color=0]="Color",r[r.ColorEmission=1]="ColorEmission",r[r.Depth=2]="Depth",r[r.Normal=3]="Normal",r[r.Shadow=4]="Shadow",r[r.ShadowHighlight=5]="ShadowHighlight",r[r.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",r[r.ViewshedShadow=7]="ViewshedShadow",r[r.Highlight=8]="Highlight",r[r.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",r[r.COUNT=10]="COUNT"})(o||(o={}));function S(r,a){switch(a.normalType){case t.Compressed:r.attributes.add(e.NORMALCOMPRESSED,"vec2"),r.vertex.code.add(n`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case t.Attribute:r.attributes.add(e.NORMAL,"vec3"),r.vertex.code.add(n`vec3 normalModel() {
return normal;
}`);break;case t.ScreenDerivative:r.fragment.code.add(n`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:m(a.normalType);case t.COUNT:}}var t;(function(r){r[r.Attribute=0]="Attribute",r[r.Compressed=1]="Compressed",r[r.ScreenDerivative=2]="ScreenDerivative",r[r.COUNT=3]="COUNT"})(t||(t={}));export{h as S,t as a,o as b,g as c,s as d,i as n,p as o,f as r,S as t,c as u};
