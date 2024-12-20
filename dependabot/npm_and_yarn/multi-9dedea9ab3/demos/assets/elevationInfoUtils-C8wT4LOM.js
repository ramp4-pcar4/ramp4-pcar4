import './main-YSH8Qvd0.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function o(e){return e?j:z}function r(e,n){return n?.mode?n.mode:o(e).mode}function i(e,n){return r(null!=e&&e.hasZ,n)}function Z(e,n,t){return t&&t.mode!==n?`${e} only support ${n} elevation mode`:null}function P(e,n,t){return t?.mode===n?`${e} do not support ${n} elevation mode`:null}function w(e,n){return null!=n?.featureExpressionInfo&&"0"!==n.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function $(e,n){n&&e.warn(".elevationInfo=",n);}const j={mode:"absolute-height",offset:0},z={mode:"on-the-ground",offset:null};

export { $, P, Z, i, w };
