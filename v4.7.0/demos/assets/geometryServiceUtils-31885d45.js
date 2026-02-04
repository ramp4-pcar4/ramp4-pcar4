import { F as s$1, s, Q } from './main-b03b5063.js';
import { p, n as n$1 } from './project-3d2e331c.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function n(o=null,i){if(s$1.geometryServiceUrl)return s$1.geometryServiceUrl;if(!o)throw new s("internal:geometry-service-url-not-configured");let n;n="portal"in o?o.portal||Q.getDefault():o,await n.load({signal:i});const a=n.helperServices?.geometry?.url;if(!a)throw new s("internal:geometry-service-url-not-configured");return a}async function a(r,t,a=null,l){const c=await n(a,l),s$1=new p;s$1.geometries=[r],s$1.outSpatialReference=t;const m=await n$1(c,s$1,{signal:l});if(m&&Array.isArray(m)&&1===m.length)return m[0];throw new s("internal:geometry-service-projection-failed")}

export { n as getGeometryServiceURL, a as projectGeometry };
