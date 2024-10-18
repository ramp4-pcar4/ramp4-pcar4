import { b as e$1, c as s$1 } from './main-5658cd6e.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let s;function r(r,a){let n=a.responseType;n?"array-buffer"!==n&&"blob"!==n&&"json"!==n&&"native"!==n&&"native-request-init"!==n&&"text"!==n&&(n="text"):n="json",a.responseType=n;const o=e$1(a.signal);return delete a.signal,globalThis.invokeStaticMessage("request",{url:r,options:a},{signal:o}).then((async t=>{let i,l,u,c,p;if(t.data)if(t.data instanceof ArrayBuffer){if(!("json"!==n&&"text"!==n&&"blob"!==n||(i=new Blob([t.data]),"json"!==n&&"text"!==n||(s||(s=new FileReaderSync),c=s.readAsText(i),"json"!==n)))){try{l=JSON.parse(c||null);}catch(b){const t={...b,url:r,requestOptions:a};throw new s$1("request:server",b.message,t)}if(l.error){const t={...l.error,url:r,requestOptions:a};throw new s$1("request:server",l.error.message,t)}}}else "native"===n&&(t.data.signal=o,u=await fetch(t.data.url,t.data),t.httpStatus=u.status);switch(n){case"blob":p=i;break;case"json":p=l;break;case"native":p=u;break;case"text":p=c;break;default:p=t.data;}return {data:p,httpStatus:t.httpStatus,requestOptions:a,ssl:t.ssl,url:r}}))}

export { r as execute };
