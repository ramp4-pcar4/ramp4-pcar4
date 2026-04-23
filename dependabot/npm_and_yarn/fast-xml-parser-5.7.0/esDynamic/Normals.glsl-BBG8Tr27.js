import{n as e}from"./glsl-EDZkDhgF.js";function t(t,n){let r=t.fragment;switch(r.code.add(e`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),n.doubleSidedMode){case 0:r.code.add(e`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case 1:r.code.add(e`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case 2:r.code.add(e`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:n.doubleSidedMode;case 3:}}export{t};