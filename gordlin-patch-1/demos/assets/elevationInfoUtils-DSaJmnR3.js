import './main-BpBTVFw9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function o(e){return e?w:$}function r(e,n){return n?.mode?n.mode:o(e).mode}function i(e,n){return r(null!=e&&e.hasZ,n)}function x(e,n,t){return t&&t.mode!==n?`${e} only support ${n} elevation mode`:null}function y(e,n,t){return t?.mode===n?`${e} do not support ${n} elevation mode`:null}function Z(e,n){return null!=n?.featureExpressionInfo&&"0"!==n.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function I(e,n){n&&e.warn(".elevationInfo=",n);}const w={mode:"absolute-height",offset:0},$={mode:"on-the-ground",offset:null};

export { I, Z, i, x, y };
