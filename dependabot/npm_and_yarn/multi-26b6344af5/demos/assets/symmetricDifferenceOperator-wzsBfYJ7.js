import{c1 as O}from"./main-Cv8ITM2j.js";import{b as R,j as P,a as p,e as q,L as k}from"./Transformation2D---fVTkp5.js";import{n as y,w as I,aM as $,P as v,C as A}from"./ProjectionTransformation-O8aN6-Ef.js";import"./jsonConverter-BUTq-DII.js";import{s as g,t as X}from"./SimpleGeometryCursor-B92kdZ15.js";import{fromGeometry as d,getSpatialReference as b,fromSpatialReference as C,toGeometry as M}from"./apiConverter-tk90BA9t.js";class Y{getOperatorType(){return 10003}supportsCurves(){return!0}accelerateGeometry(e,r,o){return!1}canAccelerateGeometry(e){return!1}executeMany(e,r,o,n){return new Z(e,r,o,n)}execute(e,r,o,n){const i=new g([e]),a=new g([r]),s=this.executeMany(i,a,o,n).next();return s||R("null output"),s}}function z(t,e,r,o){const n=t.getDimension(),i=e.getDimension();if(n!==i)return n>i?t:e;if(t.isEmpty())return e;if(e.isEmpty())return t;const a=new y,s=new y,u=new y;t.queryEnvelope(a),e.queryEnvelope(s),u.setCoords({env2D:a}),u.mergeEnvelope2D(s);const c=I(r,u,!0),f=t.getGeometryType(),l=e.getGeometryType();return f===p.enumPoint&&l===p.enumPoint?L(t,e,c):f===p.enumPoint&&l===p.enumMultiPoint?w(e,t,c):f===p.enumMultiPoint&&l===p.enumPoint?w(t,e,c):$(t,e,r,o)}function L(t,e,r,o){const n=v(r),i=n*n,a=t.getXY(),s=e.getXY(),u=new A({vd:t.getDescription()});return q.sqrDistance(a,s)>i&&(u.add(t),u.add(e)),u}function w(t,e,r,o){const n=t.getImpl().getAttributeStreamRef(0),i=t.getPointCount(),a=e.getXY(),s=t.createInstance(),u=v(r),c=new y;if(t.queryEnvelope(c),c.inflateCoords(u,u),c.contains(a)){const f=u*u;let l=!1;const h=k(i,!1);for(let m=0;m<i;m++){const T=n.read(2*m),j=n.read(2*m+1),x=T-a.x,G=j-a.y;x*x+G*G<=f&&(l=!0,h[m]=!0)}if(l)for(let m=0;m<i;m++)h[m]||s.addPoints(t,m,m+1);else s.addPoints(t,0,i),s.add(e)}else s.addPoints(t,0,i),s.add(e);return s}class Z extends X{constructor(e,r,o,n){super(),this.m_progressTracker=n,this.m_index=-1,this.m_inputGeoms=e,this.m_spatialReference=o,this.m_rightGeom=r.next(),this.m_bEmpty=!this.m_rightGeom,P(this.m_rightGeom)}tock(){return!0}getRank(){return 1}next(){if(this.m_bEmpty)return null;const e=this.m_inputGeoms.next();return e?(P(e),this.m_index=this.m_inputGeoms.getGeometryID(),z(e,this.m_rightGeom,this.m_spatialReference,this.m_progressTracker)):null}getGeometryID(){return this.m_index}}const _=new Y;function B(t,e,r){return _.execute(t,e,r,null)}function F(t,e,r){const o=_.executeMany(new g(t),new g([e]),r,null);return Array.from(o)}function H(){return _.supportsCurves()}function D(t,e){const r=b(t);return M(B(d(t),d(e),C(r)),r)}function E(t,e){const r=t.map(d),o=b(t);return F(r,d(e),C(o)).map(n=>M(n,o)).filter(O)}const S=H(),W=Object.freeze(Object.defineProperty({__proto__:null,execute:D,executeMany:E,supportsCurves:S},Symbol.toStringTag,{value:"Module"})),ee=Object.freeze(Object.defineProperty({__proto__:null,execute:D,executeMany:E,supportsCurves:S},Symbol.toStringTag,{value:"Module"}));export{W as i,ee as s};
