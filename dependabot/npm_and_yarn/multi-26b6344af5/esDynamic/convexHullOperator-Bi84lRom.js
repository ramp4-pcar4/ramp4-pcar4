import{M as n,v as f,_ as c}from"./operatorConvexHull-COHa8L6B.js";import{fromGeometry as i,toGeometry as o,fromGeometries as u,fromGeometryToGXGeometry as G}from"./jsonConverter-86Y-RaTq.js";function y(e){const t=i(e);return o(n(t.getGeometry()),t.getSpatialReference())}function p(e,t={}){const{merge:r=!1}=t,[m,a]=u(e);return f(m,r).map(s=>o(s,a))}function x(e){return c(G(e))}export{y as execute,p as executeMany,x as isConvex};
