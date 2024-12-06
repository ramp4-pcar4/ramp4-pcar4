/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function n(n){return n&&"function"==typeof n.highlight}function t(n,e,t){return null==n||n>=t&&(0===e||n<=e)}function c$1(n,e){if(e&&n){const{minScale:c,maxScale:i}=n;if(u(c,i))return t(e,c,i)}return !0}function u(n,e){return null!=n&&n>0||null!=e&&e>0}function i(n){return !n?.minScale||!n.maxScale||n.minScale>=n.maxScale}

export { c$1 as c, i, n };
