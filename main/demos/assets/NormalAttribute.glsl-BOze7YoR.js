import{hR as d}from"./main-DEt-FFlZ.js";import{o as a}from"./interfaces-B8ge7Jg9.js";import{e as i}from"./VertexAttribute-BlT9lbVY.js";var t;(function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"})(t||(t={}));var r;function v(e){return e===r.Shadow||e===r.ShadowHighlight||e===r.ShadowExcludeHighlight||e===r.ViewshedShadow}function w(e){return s(e)||e===r.Normal}function l(e){return e===r.Highlight||e===r.ObjectAndLayerIdColor}function c(e){return e===r.Color}function h(e){return c(e)||l(e)}function s(e){return h(e)||u(e)}function u(e){return e===r.Depth}(function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.ShadowHighlight=4]="ShadowHighlight",e[e.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",e[e.ViewshedShadow=6]="ViewshedShadow",e[e.Highlight=7]="Highlight",e[e.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",e[e.COUNT=9]="COUNT"})(r||(r={}));function f(e,o){switch(o.normalType){case n.Compressed:e.attributes.add(i.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(a`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case n.Attribute:e.attributes.add(i.NORMAL,"vec3"),e.vertex.code.add(a`vec3 normalModel() {
return normal;
}`);break;case n.ScreenDerivative:e.fragment.code.add(a`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:d(o.normalType);case n.COUNT:case n.Ground:}}var n;(function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"})(n||(n={}));export{n as a,w as b,t as n,r as o,v as r,f as t};
