import { hT as n$2 } from './main-CaWYn_3L.js';
import { o as o$1 } from './interfaces-MbpZrcgP.js';
import { e } from './VertexAttribute-CwgXid27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
var n$1;!function(t){t[t.Multiply=1]="Multiply",t[t.Ignore=2]="Ignore",t[t.Replace=3]="Replace",t[t.Tint=4]="Tint";}(n$1||(n$1={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
var o;function r(t){return t===o.Shadow||t===o.ShadowHighlight||t===o.ShadowExcludeHighlight||t===o.ViewshedShadow}function n(t){return c(t)||t===o.Normal}function h(t){return t===o.Highlight||t===o.ObjectAndLayerIdColor}function i(t){return t===o.Color}function a$1(o){return i(o)||h(o)}function c(o){return a$1(o)||g(o)}function g(t){return t===o.Depth}!function(o){o[o.Color=0]="Color",o[o.Depth=1]="Depth",o[o.Normal=2]="Normal",o[o.Shadow=3]="Shadow",o[o.ShadowHighlight=4]="ShadowHighlight",o[o.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",o[o.ViewshedShadow=6]="ViewshedShadow",o[o.Highlight=7]="Highlight",o[o.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",o[o.COUNT=9]="COUNT";}(o||(o={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function t(t,i){switch(i.normalType){case a.Compressed:t.attributes.add(e.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(o$1`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case a.Attribute:t.attributes.add(e.NORMAL,"vec3"),t.vertex.code.add(o$1`vec3 normalModel() {
return normal;
}`);break;case a.ScreenDerivative:t.fragment.code.add(o$1`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:n$2(i.normalType);case a.COUNT:case a.Ground:}}var a;!function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT";}(a||(a={}));

export { a, n as b, n$1 as n, o, r, t };
