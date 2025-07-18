import { s } from './main-DbwmOBz5.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function r(e){const r=[];for(const o of e.allLayers)if("beforeSave"in o&&"function"==typeof o.beforeSave){const e=o.beforeSave();e&&r.push(e);}await Promise.allSettled(r);}const o=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function t(r,t,n){let s$1=(r.messages??[]).filter((({type:e})=>"error"===e)).map((({name:r,message:o,details:t})=>new s(r,o,t)));if(r.blockedRelativeUrls&&(s$1=s$1.concat(r.blockedRelativeUrls.map((r=>new s("url:unsupported",`Relative url '${r}' is not supported`))))),n){const{ignoreUnsupported:e,supplementalUnsupportedErrors:r=[],requiredPropertyChecksDisabled:t}=n;e&&(s$1=s$1.filter((({name:e})=>!(o.has(e)||r.includes(e))))),t&&(s$1=s$1.filter((e=>"web-document-write:property-required"!==e.name)));}if(s$1.length>0)throw new s(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:s$1})}

export { r, t };
