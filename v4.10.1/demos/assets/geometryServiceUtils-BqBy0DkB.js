import{K as a,s as o,b as c}from"./main-DVcB5zI_.js";import{p as m,n as g}from"./project-Dfu_B5i_.js";import"./preload-helper-ExcqyqRp.js";import"./utils-DrUkmw0x.js";import"./utils-BRf9xhkT.js";async function u(e=null,i){if(a.geometryServiceUrl)return a.geometryServiceUrl;if(!e)throw new o("internal:geometry-service-url-not-configured");let r;r="portal"in e?e.portal||c.getDefault():e,await r.load({signal:i});const t=r.helperServices?.geometry?.url;if(!t)throw new o("internal:geometry-service-url-not-configured");return t}async function h(e,i,r=null,t){const l=await u(r,t),s=new m({geometries:[e],outSpatialReference:i}),n=await g(l,s,{signal:t});if(n&&Array.isArray(n)&&n.length===1)return n[0];throw new o("internal:geometry-service-projection-failed")}export{u as getGeometryServiceURL,h as projectGeometry};
