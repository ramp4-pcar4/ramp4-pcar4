import{Q as f,O as d}from"./projection-q5gROb6j.js";import{a6 as p,M as A}from"./main-C3PVbFgd.js";async function S(e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return p(e);const r=A.WGS84;return await f(t,r),d(e,r)}function c(e,t){if(!o(e,t)){const r=e.typeKeywords;r?r.push(t):e.typeKeywords=[t]}}function o(e,t){return!!e.typeKeywords?.includes(t)}function y(e){return o(e,l.HOSTED_SERVICE)}function E(e,t){const r=e.typeKeywords;if(r){const n=r.indexOf(t);n>-1&&r.splice(n,1)}}function I(e,t,r){r?c(e,t):E(e,t)}async function L(e){const t=e.clone().normalize();let r;if(t.length>1)for(const n of t)r?n.width>r.width&&(r=n):r=n;else r=t[0];return S(r)}const l={DEVELOPER_BASEMAP:"DeveloperBasemap",GROUP_LAYER_MAP:"Map",HOSTED_SERVICE:"Hosted Service",JSAPI:"ArcGIS API for JavaScript",LOCAL_SCENE:"ViewingMode-Local",METADATA:"Metadata",MULTI_LAYER:"Multilayer",ORIENTED_IMAGERY_LAYER:"OrientedImageryLayer",SINGLE_LAYER:"Singlelayer",SUBTYPE_GROUP_LAYER:"SubtypeGroupLayer",SUBTYPE_GROUP_TABLE:"SubtypeGroupTable",TABLE:"Table",TILED_IMAGERY:"Tiled Imagery"};function R(e){const{portal:t,isOrgItem:r,itemControl:n}=e,s=t.user?.privileges;let a=!s||s.includes("features:user:edit"),i=!!r&&!!s?.includes("features:user:fullEdit");const u=n==="update"||n==="admin";return u?i=a=!0:i&&(a=!0),{features:{edit:a,fullEdit:i},content:{updateItem:u}}}export{l as E,E as a,y as c,R as f,c as i,L as l,o as s,I as u};
