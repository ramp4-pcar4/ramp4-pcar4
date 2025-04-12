import{a as m,e as M}from"./Transformation2D-DZfKTQC6.js";import{r as V,C as w,e as h,M as P,U as Z}from"./ProjectionTransformation-Dr49wlOX.js";import{bB as v,bS as R,bE as p,bR as E,aS as d}from"./main-Bd_03BNf.js";import{fromGeometryToGXGeometry as g,toGeometry as y}from"./jsonConverter-V072NVoI.js";import"./SimpleGeometryCursor-B92kdZ15.js";import"./preload-helper-ExcqyqRp.js";const a="_gxVersion",C=2,x=1;function J(t){return Array.isArray(t)?t[0].spatialReference:t.spatialReference}function O(t){switch(t.type){case"point":return X(t);case"multipoint":return G(t);case"polyline":return Y(t);case"polygon":return S(t);case"extent":return z(t);default:throw new Error(`Unsupported geometry type: ${t.type}`)}}function z(t){if(!t.getCacheValue(a)){const e=new V;e.setCoords(t.xmin,t.ymin,t.xmax,t.ymax),t.hasM&&e.setInterval(C,0,t.mmin,t.mmax),t.hasZ&&e.setInterval(x,0,t.zmin,t.zmax),t.setCacheValue(a,e)}return t.getCacheValue(a)}function G(t){if(!t.getCacheValue(a)){const e=new w,n=new h,r=t.points,s=t.hasM,o=t.hasZ,i=o?3:2;for(let u=0,l=r.length;u<l;u++){const c=r[u];n.setXYCoords(c[0],c[1]),o&&n.setZ(c[2]??0),s&&n.setM(c[i]??NaN),e.add(n)}t.setCacheValue(a,e)}return t.getCacheValue(a)}function X(t){if(!t.getCacheValue(a)){const e=new h;e.setXYCoords(t.x,t.y),t.hasM&&e.setM(t.m),t.hasZ&&e.setZ(t.z),t.setCacheValue(a,e)}return t.getCacheValue(a)}function S(t){if(!t.getCacheValue(a)){const{curveRings:e,hasM:n,hasZ:r,rings:s}=t,o=g({curveRings:e,hasM:n,hasZ:r,rings:s});t.setCacheValue(a,o)}return t.getCacheValue(a)}function Y(t){if(!t.getCacheValue(a)){const{curvePaths:e,hasM:n,hasZ:r,paths:s}=t,o=g({curvePaths:e,hasM:n,hasZ:r,paths:s});t.setCacheValue(a,o)}return t.getCacheValue(a)}function T(t){if(t.wkid)return P(t.wkid);const e=t.wkt2||t.wkt;return e?Z(e):null}function _(t,e){if(t)switch(t.getGeometryType()){case m.enumPoint:return b(t,e);case m.enumEnvelope:return k(t,e);case m.enumMultiPoint:return $(t,e);case m.enumPolyline:return N(t,e);case m.enumPolygon:return I(t,e)}return null}function k(t,e){if(t.isEmpty())return null;const n=new v({xmin:t.getXMin(),ymin:t.getYMin(),xmax:t.getXMax(),ymax:t.getYMax(),spatialReference:e}),r=t.getDescription();if(r.hasM()){const s=t.queryInterval(C,0);n.mmin=s.vmin,n.mmax=s.vmax}if(r.hasZ()){const s=t.queryInterval(x,0);n.zmin=s.vmin,n.zmax=s.vmax}return n.setCacheValue(a,t),n}function $(t,e){if(t.isEmpty())return null;const n=t.getDescription(),r=n.hasM(),s=n.hasZ(),o=[],i=new h;for(let l=0,c=t.getPointCount();l<c;l++){t.getPointByVal(l,i);const f=[i.getX(),i.getY()];s&&f.push(i.getZ()),r&&f.push(i.getM()),o.push(f)}const u=new R({hasM:r,hasZ:s,points:o,spatialReference:e});return u.setCacheValue(a,t),u}function b(t,e){if(t instanceof M)return new p({x:t.x,y:t.y,spatialReference:e});if(t.isEmpty())return null;const n=new p({x:t.getX(),y:t.getY(),spatialReference:e}),r=t.getDescription();return r.hasM()&&(n.m=t.getM()),r.hasZ()&&(n.z=t.getZ()),n.setCacheValue(a,t),n}function I(t,e){if(t.isEmpty())return null;const n=E.fromJSON({spatialReference:e,...y(t,null)});return n.setCacheValue(a,t),n}function N(t,e){if(t.isEmpty())return null;const n=d.fromJSON({spatialReference:e,...y(t,null)});return n.setCacheValue(a,t),n}export{z as fromExtent,O as fromGeometry,G as fromMultipoint,X as fromPoint,S as fromPolygon,Y as fromPolyline,T as fromSpatialReference,J as getSpatialReference,k as toExtent,_ as toGeometry,$ as toMultipoint,b as toPoint,I as toPolygon,N as toPolyline};
