import { B as b, n as r, U as U$1 } from './main-5658cd6e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function t(r,e){if(null===r)return e;return new b({url:r.field("url")})}async function s(n,t,s){const u=r?.findCredential(n.restUrl);if(!u)return null;if("loaded"===n.loadStatus&&""===t&&n.user&&n.user.sourceJSON&&!1===s)return n.user.sourceJSON;if(""===t){const r=await U$1(n.restUrl+"/community/self",{responseType:"json",query:{f:"json",...!1===s?{}:{returnUserLicenseTypeExtensions:!0}}});if(r.data){const e=r.data;if(e&&e.username)return e}return null}const o=await U$1(n.restUrl+"/community/users/"+t,{responseType:"json",query:{f:"json"}});if(o.data){const r=o.data;return r.error?null:r}return null}

export { s, t };
