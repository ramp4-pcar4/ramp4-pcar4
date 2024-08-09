/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let t=null,n=!0;function e(t,e,r){if(!t||!e)throw new Error("Cannot construct image data without dimensions");if(n)try{return new ImageData(t,e)}catch(a){n=!1;}return o(t,e,r)}function r(t,e,r,a){if(!e||!r)throw new Error("Cannot construct image data without dimensions");if(n)try{return new ImageData(t,e,r)}catch(c){n=!1;}const i=o(e,r,a);return i.data.set(t,0),i}function a(){return t||(t=document.createElement("canvas"),t.width=1,t.height=1),t}function o(t,n,e){return e||(e=a()),e.getContext("2d").createImageData(t,n)}

export { e, r };
