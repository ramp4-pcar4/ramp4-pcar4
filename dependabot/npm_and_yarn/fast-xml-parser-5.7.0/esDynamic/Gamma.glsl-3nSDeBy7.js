import{d as e}from"./colorUtils-DDC8SjYu.js";import{n as t}from"./glsl-EDZkDhgF.js";function n(n){n.constants.add(`GAMMA`,`float`,e).constants.add(`INV_GAMMA`,`float`,1/e).code.add(t`vec3 delinearizeGamma(vec3 color) {
return pow(color, vec3(INV_GAMMA));
}
vec4 delinearizeGamma(vec4 color) {
return vec4(delinearizeGamma(color.rgb), color.a);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`)}export{n as t};