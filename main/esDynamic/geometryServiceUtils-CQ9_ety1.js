import{Y as a,s as i,C as g}from"./main-C3PVbFgd.js";import{m as u,n as m}from"./project-CWy3BXfz.js";async function l(e=null,o){if(a.geometryServiceUrl)return a.geometryServiceUrl;if(!e)throw new i("internal:geometry-service-url-not-configured");let r;r="portal"in e?e.portal||g.getDefault():e,await r.load({signal:o});const t=r.helperServices?.geometry?.url;if(!t)throw new i("internal:geometry-service-url-not-configured");return t}async function f(e,o,r=null,t){const s=await l(r,t),c=new u({geometries:[e],outSpatialReference:o}),n=await m(s,c,{signal:t});if(n&&Array.isArray(n)&&n.length===1)return n[0];throw new i("internal:geometry-service-projection-failed")}export{l as getGeometryServiceURL,f as projectGeometry};
