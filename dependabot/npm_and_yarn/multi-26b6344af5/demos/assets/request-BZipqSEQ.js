import{s as p}from"./main-Cv8ITM2j.js";import"./preload-helper-ExcqyqRp.js";function h(o,a){let t=a.responseType;t?t!=="array-buffer"&&t!=="blob"&&t!=="json"&&t!=="native"&&t!=="native-request-init"&&t!=="text"&&(t="text"):t="json",a.responseType=t;const c=a.signal;return delete a.signal,globalThis.invokeStaticMessage("request",{url:o,options:a},{signal:c}).then(async e=>{let n,s,l,u,r;if(e.data)if(e.data instanceof ArrayBuffer){if(!(t!=="json"&&t!=="text"&&t!=="blob"||(n=new Blob([e.data]),t!=="json"&&t!=="text"||(u=await n.text(),t!=="json")))){try{s=JSON.parse(u||null)}catch(i){const b={...i,url:o,requestOptions:a};throw new p("request:server",i.message,b)}if(s.error){const i={...s.error,url:o,requestOptions:a};throw new p("request:server",s.error.message,i)}}}else t==="native"&&(e.data.signal=c,l=await fetch(e.data.url,e.data),e.httpStatus=l.status);switch(t){case"blob":r=n;break;case"json":r=s;break;case"native":r=l;break;case"text":r=u;break;default:r=e.data}return{data:r,httpStatus:e.httpStatus,requestOptions:a,ssl:e.ssl,url:o}})}export{h as execute};
