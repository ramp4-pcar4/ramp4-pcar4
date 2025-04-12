import { aA as V$1, s, aB as Ht, U as U$1 } from './main-DbwmOBz5.js';
import './preload-helper-dJJaZANz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function o(e,t={},s){await e.load(s);const o=V$1(e.itemUrl,"resources"),{start:a=1,num:n=10,sortOrder:c="asc",sortField:l="resource"}=t,i={query:{start:a,num:n,sortOrder:c,sortField:l,token:e.apiKey},signal:s?.signal},u=await e.portal.request(o,i);return {total:u.total,nextStart:u.nextStart,resources:u.resources.map((({created:t,size:r,resource:s})=>({created:new Date(t),size:r,resource:e.resourceFromPath(s)})))}}async function a(e,s$1,o,a){const n=new Map;for(const{resource:r,content:i,compress:u,access:p}of s$1){if(!r.hasPath())throw new s(`portal-item-resource-${o}:invalid-path`,"Resource does not have a valid path");const[e,s$1]=l(r.path),a=`${e}/${u??""}/${p??""}`;n.has(a)||n.set(a,{prefix:e,compress:u,access:p,files:[]});n.get(a).files.push({fileName:s$1,content:i});}await e.load(a);const c=V$1(e.userItemUrl,"add"===o?"addResources":"updateResources");for(const{prefix:t,compress:r,access:l,files:i}of n.values()){const s=25;for(let o=0;o<i.length;o+=s){const n=i.slice(o,o+s),u=new FormData;t&&"."!==t&&u.append("resourcesPrefix",t),r&&u.append("compress","true"),l&&u.append("access",l);let p=0;for(const{fileName:e,content:t}of n)u.append("file"+ ++p,t,e);u.append("f","json"),await e.portal.request(c,{method:"post",body:u,signal:a?.signal});}}}async function n(e,s$1,o){if(!s$1.hasPath())throw new s("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(o);const a=V$1(e.userItemUrl,"removeResources");await e.portal.request(a,{method:"post",query:{resource:s$1.path},signal:o?.signal}),s$1.portalItem=null;}async function c(e,t){await e.load(t);const s=V$1(e.userItemUrl,"removeResources");return e.portal.request(s,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function l(e){const t=e.lastIndexOf("/");return -1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function i(e){const[t,r]=u(e),[s,o]=l(t);return [s,o,r]}function u(e){const t=Ht(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function p(t){if("blob"===t.type)return t.blob;if("json"===t.type)return new Blob([t.jsonString],{type:"application/json"});return (await U$1(t.url,{responseType:"blob"})).data}function f(e,t){if(!e.hasPath())return null;const[s,,o]=i(e.path);return e.portalItem.resourceFromPath(V$1(s,t+o))}function m(e,t){if(!e.hasPath())return null;const[s,,o]=i(e.path);return e.portalItem.resourceFromPath(V$1(s,t+o))}

export { a as addOrUpdateResources, p as contentToBlob, o as fetchResources, f as getSiblingOfSameType, m as getSiblingOfSameTypeI, c as removeAllResources, n as removeResource, i as splitPrefixFileNameAndExtension };
