import{f as i}from"./utils-BbO__rz0.js";import{c}from"./query-Bcx8pLyh.js";import{d as e}from"./FeatureSet-CsjpAwQO.js";import{b as p}from"./Query-BrrByS4p.js";async function u(a,r,o){const t=await s(a,r,o);return e.fromJSON(t)}async function s(a,r,o){const t=i(a),f={...o},n=p.from(r),{data:m}=await c(t,n,n.sourceSpatialReference,f);return m}export{s as a,u as s};
