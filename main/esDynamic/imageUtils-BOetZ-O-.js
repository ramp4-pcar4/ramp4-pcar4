import{aR as m,aS as d,a2 as u,U as w,s as p}from"./main-C3PVbFgd.js";let r=null,o=!0;function y(a,e,t){if(!a||!e)throw new Error("Cannot construct image data without dimensions");if(o)try{return new ImageData(a,e)}catch{o=!1}return f(a,e,t)}function g(a,e,t,n){if(!e||!t)throw new Error("Cannot construct image data without dimensions");if(o)try{return new ImageData(a,e,t)}catch{o=!1}const i=f(e,t,n);return i.data.set(a,0),i}function h(){return r||(r=document.createElement("canvas"),r.width=1,r.height=1),r}function f(a,e,t){return t||(t=h()),t.getContext("2d").createImageData(a,e)}async function l(a,e){const t=window.URL.createObjectURL(a);try{const{data:n}=await u(t,{...e,responseType:"image"});return n}catch(n){throw w(n)?n:new p("invalid-image",`Could not fetch requested image at ${t}`)}finally{window.URL.revokeObjectURL(t)}}async function T(a,e){const{arrayBuffer:t,mediaType:n}=await B(a,e),i=n==="image/png";if(n==="image/gif"){const{isAnimatedGIF:s,parseGif:c}=await import("./gif-DtDkiwqC.js");if(s(t))return c(t,e)}if(i){const{isAnimatedPNG:s,parseApng:c}=await import("./apng--kOSlyJ0.js");if(s(t))return c(t,e)}return l(new Blob([t],{type:n}),e)}async function B(a,e){const t=m(a);if(t?.isBase64)return{arrayBuffer:d(t.data),mediaType:t.mediaType};const n=await u(a,{responseType:"array-buffer",...e});return{arrayBuffer:n.data,mediaType:n.getHeader?.("Content-Type")??""}}export{g as c,T as p,y as s};
