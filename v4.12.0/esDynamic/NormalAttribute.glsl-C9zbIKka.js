import{bp as i,eC as u}from"./main-DnzmeE4U.js";import{n as c}from"./glsl-o28TenZV.js";import{e as d}from"./VertexAttribute-DFC3a3eR.js";var e;function p(r){switch(r){case"multiply":default:return e.Multiply;case"ignore":return e.Ignore;case"replace":return e.Replace;case"tint":return e.Tint}}function v(r,o,t){if(r==null||o===e.Ignore)return t[0]=255,t[1]=255,t[2]=255,void(t[3]=255);const l=i(Math.round(r[3]*s),0,s),m=l===0||o===e.Tint?0:o===e.Replace?f:M;t[0]=i(Math.round(r[0]*n),0,n),t[1]=i(Math.round(r[1]*n),0,n),t[2]=i(Math.round(r[2]*n),0,n),t[3]=l+m}(function(r){r[r.Multiply=1]="Multiply",r[r.Ignore=2]="Ignore",r[r.Replace=3]="Replace",r[r.Tint=4]="Tint"})(e||(e={}));const n=255,s=85,f=s,M=2*s;function b(r,o){switch(o.normalType){case a.Compressed:r.attributes.add(d.NORMALCOMPRESSED,"vec2"),r.vertex.code.add(c`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case a.Attribute:r.attributes.add(d.NORMAL,"vec3"),r.vertex.code.add(c`vec3 normalModel() {
return normal;
}`);break;case a.ScreenDerivative:r.fragment.code.add(c`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:u(o.normalType);case a.COUNT:}}var a;(function(r){r[r.Attribute=0]="Attribute",r[r.Compressed=1]="Compressed",r[r.ScreenDerivative=2]="ScreenDerivative",r[r.COUNT=3]="COUNT"})(a||(a={}));export{a,p as e,e as n,v as r,b as t};
