import{aR as i,eX as m}from"./main-asQ7SttR.js";import{n as s}from"./glsl-BH37Aalp.js";import{e as d}from"./VertexAttribute-Cq4MnHjR.js";var r;function T(e){switch(e){case"multiply":default:return r.Multiply;case"ignore":return r.Ignore;case"replace":return r.Replace;case"tint":return r.Tint}}function y(e,o,n){if(e==null||o===r.Ignore)return n[0]=255,n[1]=255,n[2]=255,void(n[3]=255);const l=i(Math.round(e[3]*c),0,c),u=l===0||o===r.Tint?0:o===r.Replace?p:v;n[0]=i(Math.round(e[0]*t),0,t),n[1]=i(Math.round(e[1]*t),0,t),n[2]=i(Math.round(e[2]*t),0,t),n[3]=l+u}(function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"})(r||(r={}));const t=255,c=85,p=c,v=2*c;function C(e,o){switch(o.normalType){case a.Compressed:e.attributes.add(d.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(s`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case a.Attribute:e.attributes.add(d.NORMAL,"vec3"),e.vertex.code.add(s`vec3 normalModel() {
return normal;
}`);break;case a.ScreenDerivative:e.fragment.code.add(s`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:m(o.normalType);case a.COUNT:}}var a;(function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.ScreenDerivative=2]="ScreenDerivative",e[e.COUNT=3]="COUNT"})(a||(a={}));export{a,T as e,r as n,y as r,C as t};
