import{f as i}from"./utils-U7OGhcP5.js";import{c}from"./query-Bubbuf-7.js";import{d as e}from"./FeatureSet-CkOfHtsW.js";import{b as p}from"./Query-LHTbNS2H.js";async function u(a,r,o){const t=await s(a,r,o);return e.fromJSON(t)}async function s(a,r,o){const t=i(a),f={...o},n=p.from(r),{data:m}=await c(t,n,n.sourceSpatialReference,f);return m}export{s as a,u as s};
