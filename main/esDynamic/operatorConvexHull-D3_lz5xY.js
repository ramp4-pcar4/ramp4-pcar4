import{s as h,t as G}from"./SimpleGeometryCursor-DSF_YyIm.js";import{N as s,j as a,a as i,f as y,P as l}from"./Transformation2D-Dqu-RtOz.js";import{Y as f,X as d,q as M,e as m,N as p,n as X,a as _,s as Y,I as v}from"./ProjectionTransformation-9FKZWyWP.js";class q{getOperatorType(){return 10102}supportsCurves(){return!1}accelerateGeometry(r,u,n){return!1}canAccelerateGeometry(r){return!1}executeMany(r,u,n){return new w(u,r,n)}execute(r,u){return C(r)}isConvex(r,u){if(s(r),a(r),r.isEmpty())return!0;const n=r.getGeometryType();if(n===i.enumPoint)return!0;if(n===i.enumEnvelope){const o=r;return o.getXMin()!==o.getXMax()&&o.getYMin()!==o.getYMax()}if(y(n)){const o=r;return!o.getStartXY().equals(o.getEndXY())}if(n===i.enumMultiPoint)return r.getPointCount()===1;if(n===i.enumPolyline){const o=r;return o.getPathCount()===1&&o.getPointCount()===2&&!o.getXY(0).equals(o.getXY(1))}if(n===i.enumGeometryCollection){const o=r;return o.getGeometryCount()===1&&this.isConvex(o.getGeometry(0),u)}const t=r;return!(t.getPathCount()!==1||t.getPointCount()<3)&&f(t,0)}constructOrientedMinimumBoundingBox(r,u,n,t,o){d(r,u,n,t,o)}}class w extends G{constructor(r,u,n){super(),u||l(""),this.m_progressTracker=n,this.m_index=-1,this.m_bMerge=r,this.m_bDone=!1,this.m_inputGeometryCursor=u}getGeometryID(){return this.m_index}tock(){return!0}getRank(){return 1}next(){if(this.m_bMerge){if(!this.m_bDone){const r=x(this.m_inputGeometryCursor);return this.m_bDone=!0,r}return null}if(!this.m_bDone){const r=this.m_inputGeometryCursor.next();if(r!==null)return s(r),a(r),this.m_index=this.m_inputGeometryCursor.getGeometryID(),C(r);this.m_bDone=!0}return null}}function x(e,r){const u=new M;let n;for(;n=e.next();)s(n),a(n),u.addGeometry(n);return u.getBoundingGeometry()}function C(e,r){if(e||l(""),s(e),a(e),e.isEmpty())return e.createInstance();const u=e.getGeometryType();if(y(u)){const n=e;if(n.getStartXY().equals(n.getEndXY())){const t=new m;return n.queryStart(t),t}{const t=new m,o=new p({vd:e.getDescription()});return n.queryStart(t),o.startPathPoint(t),n.queryEnd(t),o.lineToPoint(t),o}}if(u===i.enumEnvelope){const n=e,t=new X;if(n.queryEnvelope(t),t.xmin===t.xmax&&t.ymin===t.ymax){const o=new m;return n.queryCornerByVal(0,o),o}if(t.xmin===t.xmax||t.ymin===t.ymax){const o=new m,g=new p({vd:e.getDescription()});return n.queryCornerByVal(0,o),g.startPathPoint(o),n.queryCornerByVal(1,o),g.lineToPoint(o),g}{const o=new _({vd:e.getDescription()});return o.addEnvelope(n,!1),o}}if(u===i.enumGeometryCollection)return x(Y(e,-1));if(P(e)){if(u===i.enumMultiPoint){const n=e,t=new m;return n.getPointByVal(0,t),t}return e}return v(e)}function P(e,r){if(s(e),a(e),e.isEmpty())return!0;const u=e.getGeometryType();if(u===i.enumPoint)return!0;if(u===i.enumEnvelope){const t=e;return t.getXMin()!==t.getXMax()&&t.getYMin()!==t.getYMax()}if(y(u)){const t=e;return!t.getStartXY().equals(t.getEndXY())}if(u===i.enumMultiPoint)return e.getPointCount()===1;if(u===i.enumPolyline){const t=e;return t.getPathCount()===1&&t.getPointCount()===2&&!t.getXY(0).equals(t.getXY(1))}if(u===i.enumGeometryCollection){const t=e;return t.getGeometryCount()===1&&P(t.getGeometry(0))}const n=e;return!(n.getPathCount()!==1||n.getPointCount()<3)&&f(n,0)}const c=new q;function E(e){return c.execute(e,null)}function D(e,r){const u=c.executeMany(new h(e),r,null);return Array.from(u)}function B(e){return c.isConvex(e,null)}function T(){return c.supportsCurves()}export{E as M,T as X,B as _,D as v};
