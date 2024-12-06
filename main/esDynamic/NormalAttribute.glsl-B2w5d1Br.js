import{hN as d}from"./main-C0SGMMlt.js";import{o as a}from"./interfaces-Aq8q9x0N.js";import{e}from"./VertexAttribute-CAkzp1tV.js";var n;(function(r){r[r.Multiply=1]="Multiply",r[r.Ignore=2]="Ignore",r[r.Replace=3]="Replace",r[r.Tint=4]="Tint"})(n||(n={}));var o;function l(r){return r===o.Shadow||r===o.ShadowHighlight||r===o.ShadowExcludeHighlight||r===o.ViewshedShadow}function c(r){return m(r)||r===o.Normal}function s(r){return r===o.Highlight||r===o.ObjectAndLayerIdColor}function h(r){return r===o.Color}function u(r){return h(r)||s(r)}function m(r){return u(r)||v(r)}function v(r){return r===o.Depth}(function(r){r[r.Color=0]="Color",r[r.Depth=1]="Depth",r[r.Normal=2]="Normal",r[r.Shadow=3]="Shadow",r[r.ShadowHighlight=4]="ShadowHighlight",r[r.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",r[r.ViewshedShadow=6]="ViewshedShadow",r[r.Highlight=7]="Highlight",r[r.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",r[r.COUNT=9]="COUNT"})(o||(o={}));function g(r,i){switch(i.normalType){case t.Compressed:r.attributes.add(e.NORMALCOMPRESSED,"vec2"),r.vertex.code.add(a`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case t.Attribute:r.attributes.add(e.NORMAL,"vec3"),r.vertex.code.add(a`vec3 normalModel() {
return normal;
}`);break;case t.ScreenDerivative:r.fragment.code.add(a`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:d(i.normalType);case t.COUNT:case t.Ground:}}var t;(function(r){r[r.Attribute=0]="Attribute",r[r.Compressed=1]="Compressed",r[r.Ground=2]="Ground",r[r.ScreenDerivative=3]="ScreenDerivative",r[r.COUNT=4]="COUNT"})(t||(t={}));export{t as a,c as b,n,o,l as r,g as t};
