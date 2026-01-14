import { s } from './main-DbwmOBz5.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function e(e,s$1){let a=s$1.responseType;a?"array-buffer"!==a&&"blob"!==a&&"json"!==a&&"native"!==a&&"native-request-init"!==a&&"text"!==a&&(a="text"):a="json",s$1.responseType=a;const r=s$1.signal;return delete s$1.signal,globalThis.invokeStaticMessage("request",{url:e,options:s$1},{signal:r}).then((async n=>{let o,i,l,u,c;if(n.data)if(n.data instanceof ArrayBuffer){if(!("json"!==a&&"text"!==a&&"blob"!==a||(o=new Blob([n.data]),"json"!==a&&"text"!==a||(u=await o.text(),"json"!==a)))){try{i=JSON.parse(u||null);}catch(p){const a={...p,url:e,requestOptions:s$1};throw new s("request:server",p.message,a)}if(i.error){const a={...i.error,url:e,requestOptions:s$1};throw new s("request:server",i.error.message,a)}}}else "native"===a&&(n.data.signal=r,l=await fetch(n.data.url,n.data),n.httpStatus=l.status);switch(a){case"blob":c=o;break;case"json":c=i;break;case"native":c=l;break;case"text":c=u;break;default:c=n.data;}return {data:c,httpStatus:n.httpStatus,requestOptions:s$1,ssl:n.ssl,url:e}}))}

export { e as execute };
