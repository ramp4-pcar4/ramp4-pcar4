import{aK as p,br as u}from"./main-0iYVBzEC.js";import{r as i,u as U}from"./vec4f64-CjUMzAyX.js";import"./floatRGBA-CVeviBEe.js";import"./NormalAttribute.glsl-CGwNL4oI.js";import"./glsl-o28TenZV.js";import"./ShaderOutput-C_OqLoo1.js";import"./BindType-CKbZk6AG.js";import"./VertexAttribute-DFC3a3eR.js";function T(e){return e.type==="fill"}function d(e){return e.type==="extrude"}var t;(function(e){e[e.TRANSPARENT=0]="TRANSPARENT",e[e.OPAQUE=1]="OPAQUE"})(t||(t={}));var a;(function(e){e[e.Uniform=0]="Uniform",e[e.Varying=1]="Varying",e[e.COUNT=2]="COUNT"})(a||(a={}));var r,l;(function(e){e[e.Solid=0]="Solid",e[e.Sketch=1]="Sketch",e[e.Mixed=2]="Mixed",e[e.COUNT=3]="COUNT"})(r||(r={})),function(e){e[e.REGULAR=0]="REGULAR",e[e.SILHOUETTE=1]="SILHOUETTE"}(l||(l={}));function h(e){return e&&e.enabled&&(d(e)||T(e))&&e.edges!=null}function m(e){return e&&e.enabled&&e.edges||null}function E(e,o){return S(m(e),o)}function S(e,o){if(e==null)return null;const n=e.color!=null?U(p.toUnitRGBA(e.color)):i(0,0,0,0),c=u(e.size),s=u(e.extensionLength);switch(e.type){case"solid":return f({color:n,size:c,extensionLength:s,...o});case"sketch":return y({color:n,size:c,extensionLength:s,...o});default:return}}function f(e){return{...A,...e,type:r.Solid}}function y(e){return{...g,...e,type:r.Sketch}}const A={color:i(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:t.OPAQUE,hasSlicePlane:!1},g={color:i(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:t.OPAQUE,hasSlicePlane:!1};export{t as A,E as a,h as c,f as g};
