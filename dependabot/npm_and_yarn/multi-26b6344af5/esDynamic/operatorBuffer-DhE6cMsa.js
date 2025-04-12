import{t as H,s as re}from"./SimpleGeometryCursor-DSF_YyIm.js";import{a as K,P as Q,g as Ce,z as De,i as ue,l as we,p as Te,E as ve,m as Ie,R as _e,e as _,f as Se,b as W,o as J,x as oe,j as fe,c as Me,L as Ve,$ as Ee}from"./Transformation2D-BXh3V3LZ.js";import{a7 as de,g as ge,a8 as ke,a as B,n as z,w as pe,N as j,e as U,d as te,f as se,Y as Re,r as me,F as Ae,T as ae,a9 as Z,aa as Be,_ as ye,ab as Xe}from"./ProjectionTransformation-b17qk3m4.js";import{d2 as Ye,d3 as Fe}from"./main-0iYVBzEC.js";import{i as Ge}from"./GeometryCleaner-BEJM7I4l-BZD7B6R6.js";import{P as ze}from"./OperatorGeneralize-z39iOFlL.js";class qe{getOperatorType(){return 10104}accelerateGeometry(e,t,s){return!1}canAccelerateGeometry(e){return!1}supportsCurves(){return!0}isSimple(e,t,s,n,i){return Be(e,t,s,n,i)===5}executeMany(e,t,s,n){return new Ne(e,t,s,n)}execute(e,t,s,n){const i=new re([e]),r=this.executeMany(i,t,s,n).next();return r||W("null output"),r}}class Ne extends H{constructor(e,t,s,n){super(),e||Q(""),this.m_progressTracker=n,this.m_bForceSimplify=s,this.m_index=-1,this.m_inputGeometryCursor=e,this.m_spatialReference=t}next(){const e=this.m_inputGeometryCursor.next();return e?(fe(e),this.m_index=this.m_inputGeometryCursor.getGeometryID(),this.simplify(e)):null}getGeometryID(){return this.m_index}tock(){return!1}getRank(){return 1}simplify(e){return e||Q(""),Xe(e,this.m_spatialReference,this.m_bForceSimplify,this.m_progressTracker)}}var x;function q(o,e,t,s,n,i){return{m_from:o.clone(),m_to:e.clone(),m_center:t.clone(),m_next:n,m_type:s}}function ie(o,e,t,s,n){return{m_from:o.clone(),m_to:e.clone(),m_next:t,m_type:4,m_center:new _}}(function(o){o[o.enumDummy=256]="enumDummy",o[o.enumLine=1]="enumLine",o[o.enumArc=2]="enumArc",o[o.enumMiter=8]="enumMiter",o[o.enumBevel=16]="enumBevel",o[o.enumJoinMask=26]="enumJoinMask",o[o.enumConnectionMask=27]="enumConnectionMask"})(x||(x={}));class Le extends H{constructor(e,t,s,n,i,r,m,h,l,a){super(),this.m_index=0,this.m_bufferedPolygon=null,this.m_x=0,this.m_y=0,this.m_progressTracker=a,this.m_parent=e,this.m_mp=t,this.m_distance=s,this.m_spatialReference=n,this.m_densifyDist=h,this.m_maxVertexInCompleteCircle=l,this.m_joins=i,this.m_caps=r,this.m_miterLimit=m}next(){const e=new U;for(;;){if(this.m_index===this.m_mp.getPointCount())return null;if(this.m_caps===1)return this.m_index=this.m_mp.getPointCount(),new B({vd:this.m_mp.getDescription()});if(this.m_mp.getPointByVal(this.m_index,e),this.m_index++,!e.isEmpty())break}let t,s=!1;if(this.m_bufferedPolygon===null&&(this.m_x=e.getX(),this.m_y=e.getY(),this.m_bufferedPolygon=this.m_parent.buffer(e,this.m_distance,this.m_spatialReference,this.m_joins,this.m_caps,this.m_miterLimit,this.m_densifyDist,this.m_maxVertexInCompleteCircle),s=!0),t=this.m_index<this.m_mp.getPointCount()?this.m_bufferedPolygon.clone():this.m_bufferedPolygon,!s){const n=new oe,i=e.getX()-this.m_x,r=e.getY()-this.m_y;n.setShiftCoords(i,r),t.applyTransformation(n)}return ye(t,0),t}getGeometryID(){return 0}getRank(){return 1}tock(){return!0}}class je extends H{constructor(e){super(),this.m_currentPathIndex=0,this.m_polyline=e}next(){if(!this.m_polyline)return null;const e=this.m_polyline.getImpl(),t=e.getPathCount();if(this.m_currentPathIndex<t){const s=this.m_currentPathIndex;if(this.m_currentPathIndex++,!e.isClosedPathInXYPlane(s)){let i=e.getXY(e.getPathEnd(s)-1);for(;this.m_currentPathIndex<e.getPathCount();){const r=e.getXY(e.getPathStart(this.m_currentPathIndex));if(e.isClosedPathInXYPlane(this.m_currentPathIndex)||!r.equals(i))break;i=e.getXY(e.getPathEnd(this.m_currentPathIndex)-1),this.m_currentPathIndex++}}if(s===0&&this.m_currentPathIndex===this.m_polyline.getPathCount()){const i=this.m_polyline;return this.m_polyline=null,i}const n=new j({vd:this.m_polyline.getDescription()});n.addPath(this.m_polyline,s,!0);for(let i=s+1;i<this.m_currentPathIndex;i++)n.addSegmentsFromPath(this.m_polyline,i,0,e.getSegmentCountPath(i),!1);return this.m_currentPathIndex===this.m_polyline.getPathCount()&&(this.m_polyline=null),n}return null}getGeometryID(){return 0}getRank(){return 1}tock(){return!0}}class Oe extends H{constructor(e,t,s){super(),this.m_geometry=null,this.m_index=0,this.m_bufferer=e,this.m_geoms=t,this.m_index=0,this.m_bFilter=s}next(){if(this.m_geometry===null&&(this.m_index=0,this.m_geometry=this.m_geoms.next(),!this.m_geometry))return null;const e=this.m_geometry.getImpl();if(this.m_index<e.getPathCount()){const t=this.m_index;return this.m_index++,this.m_bufferer.bufferPolylinePath(this.m_geometry,t,this.m_bFilter)}return this.m_geometry=null,this.next()}getGeometryID(){return 0}getRank(){return 1}tock(){return!0}}class Je extends H{constructor(e){super(),this.m_index=0,this.m_bufferer=e}next(){const e=this.m_bufferer.m_geometry;if(this.m_index<e.getPathCount()){const t=this.m_index,s=e.calculateRingArea2D(this.m_index);for(J(s>0),this.m_index++;this.m_index<e.getPathCount()&&!(e.calculateRingArea2D(this.m_index)>0);)this.m_index++;let n;return n=t===0&&this.m_index===e.getPathCount()?this.m_bufferer.bufferPolygonImpl(e,0,e.getPathCount()):this.m_bufferer.bufferPolygonImpl(e,t,this.m_index),n}return null}getGeometryID(){return 0}getRank(){return 1}tock(){return!0}}class Ue{constructor(e){this.m_geometry=null,this.m_bufferCommands=[],this.m_originalGeomType=K.enumUnknown,this.m_maxVertexInCompleteCircle=-1,this.m_circleTemplateSize=-1,this.m_oldCircleTemplateSize=0,this.m_spatialReference=null,this.m_tolerance=new de(0,0),this.m_smallTolerance=new de(0,0),this.m_filterTolerance=0,this.m_densifyDist=-1,this.m_distance=Number.NaN,this.m_absDistance=0,this.m_absDistanceReversed=0,this.m_dA=-1,this.m_miterLimit=4,this.m_joins=0,this.m_caps=0,this.m_bRoundBuffer=!0,this.m_bOutputLoops=!0,this.m_bFilter=!0,this.m_circleTemplate=[],this.m_leftStack=[],this.m_middleStack=[],this.m_helperLine1=new ge,this.m_helperLine2=new ge,this.m_helperArray=[],this.m_progressCounter=0,this.m_densificator=ke.constructDefault(e),this.m_progressTracker=e}buffer(e,t,s,n,i,r,m,h){if(e||Q("Geometry.Bufferer.Impl.Buffer"),m<0&&Q("Geometry.Bufferer.Impl.Buffer"),Ce(e.getGeometryType())&&De("Unsupported geometry type."),e.isEmpty())return new B({vd:e.getDescription()});if(this.m_joins=n,this.m_caps=i,this.m_bRoundBuffer=!1,this.m_miterLimit=r,this.m_originalGeomType=e.getGeometryType(),ue(this.m_originalGeomType)?this.m_bRoundBuffer=this.m_joins===0:we(this.m_originalGeomType)?this.m_bRoundBuffer=this.m_caps===0:Te(this.m_originalGeomType)&&(this.m_bRoundBuffer=this.m_joins===0&&this.m_caps===0),this.m_bFilter=this.m_bRoundBuffer,this.m_geometry=Ge(e),this.m_geometry.isEmpty())return new B({vd:e.getDescription()});const l=new z;this.m_geometry.queryLooseEnvelope(l),t>0&&l.inflateCoords(t,t),this.m_tolerance=pe(s,l,!0),this.m_smallTolerance=pe(null,l,!0),h<=0&&(h=96),this.m_spatialReference=s,this.m_distance=t,this.m_absDistance=Math.abs(this.m_distance),this.m_absDistanceReversed=this.m_absDistance!==0?1/this.m_absDistance:0,Number.isNaN(m)||m===0?m=1e-5*this.m_absDistance:m>.5*this.m_absDistance&&(m=.5*this.m_absDistance),h<12&&(h=12);const a=Math.abs(t)*(1-Math.cos(Math.PI/h));if(a>m)m=a;else if(t!==0){const u=Math.PI/Math.acos(1-m/Math.abs(t));u<h-1&&(h=Math.trunc(u))<12&&(h=12,m=Math.abs(t)*(1-Math.cos(Math.PI/h)))}this.m_densifyDist=m,this.m_maxVertexInCompleteCircle=h,this.m_filterTolerance=this.m_bRoundBuffer?Math.min(this.m_smallTolerance.total(),.25*this.m_densifyDist):0,this.m_circleTemplateSize=this.calcN(),this.m_circleTemplateSize!==this.m_oldCircleTemplateSize&&(this.m_circleTemplate.length=0,this.m_oldCircleTemplateSize=this.m_circleTemplateSize),this.m_densifyDist>0&&ve(this.m_geometry)&&(this.m_geometry=this.m_densificator.densifyEx(this.m_geometry,0,this.m_densifyDist,0,this.m_joins!==0,Ie()));const c=this.bufferImpl();return this.m_geometry=null,c}generateCircleTemplate(){if(this.m_circleTemplate.length)return;const e=this.m_circleTemplateSize,t=Math.trunc((e+3)/4),s=.5*Math.PI/t;this.m_dA=s,this.m_circleTemplate=_e(_,4*t);const n=Math.cos(s),i=Math.sin(s),r=_.construct(0,1);for(let m=0;m<t;m++)this.m_circleTemplate[m+0*t].setCoords(r.y,-r.x),this.m_circleTemplate[m+1*t].setCoords(-r.x,-r.y),this.m_circleTemplate[m+2*t].setCoords(-r.y,r.x),this.m_circleTemplate[m+3*t].setCoords(r.x,r.y),r.rotateReverse(n,i)}bufferImpl(){const e=this.m_geometry.getGeometryType();if(Se(e)){const t=new j({vd:this.m_geometry.getDescription()});return t.addSegment(this.m_geometry,!0),this.m_geometry=t,this.bufferImpl()}if(this.m_distance<=this.m_tolerance.total()){if(!ue(e))return new B({vd:this.m_geometry.getDescription()});if(this.m_distance<0){const t=new z;if(this.m_geometry.queryEnvelope(t),t.width()<=2*this.m_absDistance||t.height()<=2*this.m_absDistance)return new B({vd:this.m_geometry.getDescription()})}}switch(this.m_geometry.getGeometryType()){case K.enumPoint:return this.bufferPoint();case K.enumMultiPoint:return this.bufferMultiPoint();case K.enumPolyline:return this.bufferPolyline();case K.enumPolygon:return this.bufferPolygon();case K.enumEnvelope:return this.bufferEnvelope();default:W("")}}bufferPolyline(){if(this.isDegenerateGeometry(this.m_geometry)){const l=new U;this.m_geometry.getPointByVal(0,l);const a=new z;return this.m_geometry.queryEnvelope(a),l.setXY(a.getCenter()),this.bufferDegeneratePath(l,!0)}const e=this.m_geometry,t=this.m_geometry.getDescription();this.m_geometry=null;const s=new je(e);let n,i;n=this.m_joins===0?new ze().executeMany(s,.25*this.m_densifyDist,!1,this.m_progressTracker):s,i=this.m_bRoundBuffer?new qe().executeMany(n,null,!0,this.m_progressTracker):n;const r=new Oe(this,i,this.m_bFilter),m=new te().executeMany(r,this.m_spatialReference,this.m_progressTracker,2),h=new se().executeMany(m,this.m_spatialReference,!1,this.m_progressTracker).next();return h!==null?h:new B({vd:t})}bufferPolygon(){if(this.m_distance===0)return this.m_geometry;this.generateCircleTemplate();const e=new se().execute(this.m_geometry,null,!1,this.m_progressTracker);if(this.m_distance<0){if(this.m_geometry=e,this.m_geometry.isEmpty())return this.m_geometry;const t=this.m_geometry,s=this.bufferPolygonImpl(t,0,t.getPathCount());return new se().execute(s,this.m_spatialReference,!1,this.m_progressTracker)}{if(this.m_geometry=e,this.isDegenerateGeometry(this.m_geometry)){const i=new U;this.m_geometry.getPointByVal(0,i);const r=new z;return this.m_geometry.queryEnvelope(r),i.setXY(r.getCenter()),this.bufferDegeneratePath(i,!0)}const t=new Je(this),s=new te().executeMany(t,this.m_spatialReference,this.m_progressTracker,2),n=new se().executeMany(s,this.m_spatialReference,!1,this.m_progressTracker).next();return n!==null?n:new B({vd:this.m_geometry.getDescription()})}}bufferPolygonImpl(e,t,s){const n=e,i=n.getImpl();let r=new B({vd:e.getDescription()});for(let m=t;m<s;m++){if(i.getPathSize(m)<1)continue;const h=i.calculateRingArea2D(m),l=new z;if(i.queryPathEnvelope(m,l),this.m_distance>0)if(h>0)if(this.isDegeneratePath(i,m)){const a=new U;i.getPointByVal(i.getPathStart(m),a),a.setXY(l.getCenter()),r.add(this.bufferDegeneratePath(a,!0),!1)}else{const a=new j({vd:e.getDescription()}),c=a.getImpl();if(Re(this.m_geometry,m)){const u=this.bufferConvexPath(n,m);r.add(u,!1)}else{this.bufferClosedPath(this.m_geometry,m,c,this.m_bRoundBuffer,1);const u=this.bufferCleanup(a);r.add(u,!1)}}else{if(l.width()+this.m_tolerance.total()<=2*this.m_absDistance||l.height()+this.m_tolerance.total()<=2*this.m_absDistance)continue;const a=new j({vd:e.getDescription()}),c=a.getImpl();if(this.bufferClosedPath(this.m_geometry,m,c,this.m_bRoundBuffer,1),!a.isEmpty()){const u=l,f=Math.max(1,this.m_absDistance),g=u.clone();g.inflateCoords(f,f),c.addEnvelope(g,!1);const P=this.bufferCleanup(a);r.reserve(r.getPointCount()+P.getPointCount()-4),he(P,r,g,!0)}}else if(h>0){if(l.width()+this.m_tolerance.total()<=2*this.m_absDistance||l.height()+this.m_tolerance.total()<=2*this.m_absDistance)continue;const a=new j({vd:e.getDescription()}),c=a.getImpl();if(this.bufferClosedPath(this.m_geometry,m,c,this.m_bRoundBuffer,-1),!a.isEmpty()){const u=new z;c.queryLooseEnvelope(u);const f=Math.max(1,this.m_absDistance),g=u.clone();g.inflateCoords(f,f),c.addEnvelope(g,!1),he(this.bufferCleanup(a),r,g,!0)}}else{const a=new j({vd:e.getDescription()}),c=a.getImpl();this.bufferClosedPath(this.m_geometry,m,c,this.m_bRoundBuffer,-1);const u=this.bufferCleanup(a);for(let f=0,g=u.getPathCount();f<g;f++)r.addPath(u,f,!0)}}if(this.m_distance>0)return r.getPathCount()>1?this.bufferCleanup(r):ne(r);{const m=new z;if(r.queryLooseEnvelope(m),r.isEmpty())return ne(r);{const h=Math.max(1,this.m_absDistance),l=m.clone();l.inflateCoords(h,h),r.addEnvelope(l,!1);const a=this.bufferCleanup(r);r=new B;const c=new B({vd:a.getDescription()});return he(a,c,l,!1),ne(c)}}}bufferPoint(){return this.bufferPointImpl(this.m_geometry)}bufferPointImpl(e){const t=new B({vd:e.getDescription()});return this.m_caps===0?(this.addCircle(t.getImpl(),e),this.setStrongSimple(t)):this.m_caps===2?(this.addSquare(t.getImpl(),e),this.setStrongSimple(t)):t}bufferDegeneratePath(e,t){const s=new B({vd:e.getDescription()});return t&&this.m_joins===0||!t&&this.m_caps===0?(this.addCircle(s.getImpl(),e),this.setStrongSimple(s)):t||this.m_caps!==2?s:(this.addSquare(s.getImpl(),e),this.setStrongSimple(s))}bufferMultiPoint(){const e=new Le(this,this.m_geometry,this.m_distance,this.m_spatialReference,this.m_joins,this.m_caps,this.m_miterLimit,this.m_densifyDist,this.m_maxVertexInCompleteCircle,this.m_progressTracker);return new te().executeMany(e,this.m_spatialReference,this.m_progressTracker,2).next()}bufferEnvelope(){let e=new B({vd:this.m_geometry.getDescription()});if(this.m_distance<=0){if(this.m_distance===0)e.addEnvelope(this.m_geometry,!1),be(this.m_geometry,this.m_tolerance.total())&&(e=this.setStrongSimple(e));else{const s=new me;this.m_geometry.queryEnvelope(s),s.inflateCoords(this.m_distance,this.m_distance),e.addEnvelope(s,!1),be(s,this.m_tolerance.total())&&(e=this.setStrongSimple(e))}return e}if(this.m_joins===1){const s=new me({copy:this.m_geometry});return s.inflateCoords(this.m_absDistance,this.m_absDistance),e.addEnvelope(s,!1),e}const t=this.m_geometry.clone();if(t.width()===0||t.height()===0){if(t.width()===0&&t.height()===0){const i=new U({vd:this.m_geometry.getDescription()});return t.queryCornerByVal(0,i),this.m_geometry=i,this.bufferImpl()}const s=new j({vd:this.m_geometry.getDescription()}),n=new U;return t.queryCornerByVal(0,n),s.startPathPoint(n),t.queryCornerByVal(2,n),s.lineToPoint(n),this.m_geometry=s,this.bufferImpl()}return e.addEnvelope(this.m_geometry,!1),this.m_geometry=e,this.bufferConvexPath(e,0)}bufferConvexPath(e,t){this.generateCircleTemplate();const s=e.hasAttribute(10),n=new B({vd:e.getDescription()}),i=n.getImpl();n.reserve((this.m_circleTemplate.length/10+4)*e.getPathSize(t));const r=new _,m=new _,h=new _,l=new _(0,0),a=new _,c=new _,u=e.getImpl(),f=e.getPathSize(t),g=e.getPathStart(t);for(let P=0,b=e.getPathSize(t);P<b;P++){const d=u.getXY(g+P),C=u.getXY(g+(P+1)%f),v=u.getXY(g+(P+2)%f);a.setSub(C,d),a.length()===0&&W("");const D=s&&!!(1&u.getAttributeAsInt(10,(P+1)%f,0));a.normalize();const y=a.clone();a.leftPerpendicularThis(),a.scale(this.m_absDistance),r.setAdd(a,d),m.setAdd(a,C),P===0?i.startPath(r):i.lineTo(r),i.lineTo(m),c.setSub(v,C),c.length()===0&&W(""),c.normalize();const V=c.clone();c.leftPerpendicularThis(),c.scale(this.m_absDistance),h.setAdd(c,C);let E=x.enumArc;const X=D?0:this.m_joins;if(X===2)E=x.enumBevel;else if(X===1){const $=-y.crossProduct(V);l.setSub(y,V),l.scale(this.m_absDistance/$),l.length()<this.m_miterLimit*this.m_absDistance?(l.addThis(C),E=x.enumMiter):E=x.enumBevel}else l.assign(C);this.addJoin(E,i,l,m,h,!1,!1)}return ne(n)}bufferPolylinePath(e,t,s){this.generateCircleTemplate();const n=e,i=n.getImpl();if(i.getPathSize(t)<1)return null;let r;if(r=this.m_bRoundBuffer?i.isClosedPathInXYPlane(t):i.isClosedPath(t),this.isDegeneratePath(i,t)&&this.m_distance>0){const l=new U;i.getPointByVal(i.getPathStart(t),l);const a=new z;return i.queryPathEnvelope(t,a),l.setXY(a.getCenter()),this.bufferDegeneratePath(l,r)}const m=new j({vd:e.getDescription()});m.reserve((Math.trunc(this.m_circleTemplate.length/10)+4)*i.getPathSize(t));const h=m.getImpl();return r?this.bufferClosedPath(n,t,h,s,1)!==2&&this.bufferClosedPath(n,t,h,s,-1):this.bufferOpenPath(n,t,h,s),this.bufferCleanup(m)}progress_(){}bufferCleanup(e,t=!1){const s=t?this.m_tolerance:this.m_smallTolerance;return Ae(e,s,!0,!t,-1,this.m_progressTracker,0,!1)}calcN(){if(this.m_densifyDist===0)return this.m_maxVertexInCompleteCircle;const e=1-this.m_densifyDist*Math.abs(this.m_absDistanceReversed);let t=4;return t=e<-1?4:2*Math.PI/Math.acos(e)+.5,t<4?t=4:t>this.m_maxVertexInCompleteCircle&&(t=this.m_maxVertexInCompleteCircle),Math.trunc(t)}addJoin(e,t,s,n,i,r,m){if(this.generateCircleTemplate(),r&&(t.startPath(n),r=!1),e===x.enumBevel)return void(m&&t.lineTo(i));if(e===x.enumMiter){const d=s.clone();return t.lineTo(d),void(m&&t.lineTo(i))}const h=new _;h.setSub(n,s),h.scale(this.m_absDistanceReversed);const l=new _;l.setSub(i,s),l.scale(this.m_absDistanceReversed);let a=Math.atan2(h.y,h.x)/this.m_dA;a<0&&(a=this.m_circleTemplate.length+a),a=this.m_circleTemplate.length-a;let c=Math.atan2(l.y,l.x)/this.m_dA;c<0&&(c=this.m_circleTemplate.length+c),c=this.m_circleTemplate.length-c,c<a&&(c+=this.m_circleTemplate.length);let u=Math.trunc(c),f=Math.ceil(a),g=this.m_circleTemplate[f%this.m_circleTemplate.length].clone();g.scaleAddThis(this.m_absDistance,s);const P=10*this.m_tolerance.total();g.sub(n).length()<P&&(f+=1),g=this.m_circleTemplate[u%this.m_circleTemplate.length].clone(),g.scaleAddThis(this.m_absDistance,s),g.sub(i).length()<P&&(u-=1);let b=u-f;b++;for(let d=0,C=f%this.m_circleTemplate.length;d<b;d++,C=(C+1)%this.m_circleTemplate.length)g=this.m_circleTemplate[C].clone(),g.scaleAddThis(this.m_absDistance,s),t.lineTo(g),this.progress_();m&&t.lineTo(i)}bufferClosedPath(e,t,s,n,i){const r=new ae,m=r.addPathFromMultiPath(e,t,!0);return this.bufferClosedPathImpl(r,m,s,n,i)}bufferClosedPathImpl(e,t,s,n,i){const r=e.getFirstVertex(e.getFirstPath(t)),m=new U;if(e.queryPoint(r,m),e.filterClosePoints(this.m_filterTolerance,!1,!1,!1,-1),e.getPointCount(t)<2)return i<0?0:(this.m_bRoundBuffer&&this.addCircle(s,m),2);J(e.getFirstPath(t)!==Z),J(e.getFirstVertex(e.getFirstPath(t))!==Z);const h=e.getXY(e.getFirstVertex(e.getFirstPath(t))),l=new oe;if(l.setShift(h.negate()),e.applyTransformation(l),n){const T=Qe(e,t,i,!0,this.m_absDistance,this.m_filterTolerance,this.m_densifyDist);if(J(T===1),e.getPointCount(t)<2)return i<0?0:(this.addCircle(s,m),2)}const a=this.m_joins!==0&&e.getVertexDescription().hasAttribute(10);this.m_bufferCommands.length=0;const c=e.getFirstPath(t);let u=e.getFirstVertex(c),f=i===1?e.getPrevVertex(u):e.getNextVertex(u),g=i===1?e.getNextVertex(u):e.getPrevVertex(u),P=!0;const b=new _,d=new _,C=new _,v=new _,D=new _,y=new _,V=new _,E=new _,X=this.m_absDistance,$=e.getPathSize(c),F=new _(0,0);for(let T=0;T<$;T++){d.assign(e.getXY(g)),P&&(b.assign(e.getXY(u)),C.assign(e.getXY(f)),y.setSub(b,C),y.normalize(),E.leftPerpendicularOther(y),E.scale(X),v.setAdd(E,b));const p=a&&!!(1&e.getAttributeAsDbl(10,u,0));D.setSub(d,b),D.normalize(),V.leftPerpendicularOther(D),V.scale(X);const A=new _;A.setAdd(b,V);const N=y.crossProduct(D),w=y.dotProduct(D);if(N<0||w<0&&N<Math.abs(w)*Number.EPSILON*8){let Y=!1;const G=p?0:this.m_joins;if(G===1){const k=-N;F.setSub(y,D),F.scale(this.m_absDistance/k),F.length()<this.m_miterLimit*this.m_absDistance&&(F.addThis(b),Y=!0),this.m_bufferCommands.push(q(v,A,F,Y?x.enumMiter:x.enumBevel,this.m_bufferCommands.length+1))}else this.m_bufferCommands.push(q(v,A,b,G===0?x.enumArc:x.enumBevel,this.m_bufferCommands.length+1))}else v.equals(A)||(this.m_bufferCommands.push(ie(v,b,this.m_bufferCommands.length+1)),this.m_bufferCommands.push(ie(b,A,this.m_bufferCommands.length+1)));const M=new _;M.setAdd(d,V),this.m_bufferCommands.push(q(A,M,b,x.enumLine,this.m_bufferCommands.length+1)),v.setCoordsPoint2D(M),E.setCoordsPoint2D(V),C.setCoordsPoint2D(b),b.setCoordsPoint2D(d),y.setCoordsPoint2D(D),f=u,u=g,P=!1,g=i===1?e.getNextVertex(u):e.getPrevVertex(u)}return this.m_bufferCommands.at(-1).m_next=0,this.processBufferCommands(s),l.setShift(h),s.applyTransformationToPath(l,s.getPathCount()-1),1}bufferOpenPath(e,t,s,n){if(this.m_bRoundBuffer){const p=new j({vd:e.getDescription()});return p.addPath(e,t,!1),p.addSegmentsFromPath(e,t,0,e.getSegmentCountPath(t),!1),this.bufferClosedPath(p,0,s,n,1)}let i=0;const r=new j({vd:e.getDescription()}),m=new _(0,0);{const p=new ae,A=p.addPathFromMultiPath(e,t,!1),N=p.getFirstVertex(p.getFirstPath(A)),w=new U;if(p.queryPoint(N,w),m.assign(w.getXY()),p.filterClosePoints(0,!1,!1,!1,-1),p.getPointCount(A)<2)return this.m_bRoundBuffer&&this.addCircle(s,w),2;const M=p.getGeometry(p.getFirstGeometry());r.addPath(M,0,!1),i=r.getPointCount()-1,r.addSegmentsFromPath(M,0,0,M.getSegmentCountPath(0)-1,!1)}const h=new ae,l=h.addPathFromMultiPath(r,0,!0);J(h.getFirstPath(l)!==Z),J(h.getFirstVertex(h.getFirstPath(l))!==Z);const a=new oe;a.setShift(m.negate()),h.applyTransformation(a),this.m_bufferCommands.length=0;const c=h.getFirstPath(l),u=this.m_joins!==0&&h.getVertexDescription().hasAttribute(10);let f=h.getFirstVertex(c),g=h.getPrevVertex(f),P=h.getNextVertex(f),b=!0;const d=new _,C=new _,v=new _,D=new _,y=new _,V=new _,E=new _,X=new _,$=this.m_absDistance,F=h.getPathSize(c),T=new _(0,0);for(let p=0;p<F;p++){let A=!1;p!==0&&p!==i||(A=!0),C.assign(h.getXY(P)),b&&(d.assign(h.getXY(f)),v.assign(h.getXY(g)),V.setSub(d,v),V.normalize(),X.leftPerpendicularOther(V),X.scale($),D.setAdd(X,d));const N=u&&!!(1&h.getAttributeAsDbl(10,f,0));y.setSub(C,d),y.normalize(),E.leftPerpendicularOther(y),E.scale($);const w=new _;w.setAdd(d,E);const M=V.crossProduct(y),Y=V.dotProduct(y);if(M<0||Y<0&&M<Math.abs(Y)*Number.EPSILON*8)if(A)if(this.m_caps===0)this.m_bufferCommands.push(q(D,w,d,x.enumArc,this.m_bufferCommands.length+1));else if(this.m_caps===1)this.m_bufferCommands.push(q(D,w,d,x.enumLine,this.m_bufferCommands.length+1));else{const k=y.mul(this.m_absDistance).negate(),L=k.clone();k.addThis(D),L.addThis(w),this.m_bufferCommands.push(q(D,k,d,x.enumLine,this.m_bufferCommands.length+1)),this.m_bufferCommands.push(q(k,L,d,x.enumLine,this.m_bufferCommands.length+1)),this.m_bufferCommands.push(q(L,w,d,x.enumLine,this.m_bufferCommands.length+1))}else{let k=!1;const L=N?0:this.m_joins;if(L===1){const I=-M;T.setSub(V,y),T.scale(this.m_absDistance/I),T.length()<this.m_miterLimit*this.m_absDistance&&(T.addThis(d),k=!0),this.m_bufferCommands.push(q(D,w,T,k?x.enumMiter:x.enumBevel,this.m_bufferCommands.length+1))}else this.m_bufferCommands.push(q(D,w,d,L===0?x.enumArc:x.enumBevel,this.m_bufferCommands.length+1))}else D.equals(w)||(this.m_bufferCommands.push(ie(D,d,this.m_bufferCommands.length+1)),this.m_bufferCommands.push(ie(d,w,this.m_bufferCommands.length+1)));const G=new _;G.setAdd(C,E),this.m_bufferCommands.push(q(w,G,d,x.enumLine,this.m_bufferCommands.length+1)),D.setCoordsPoint2D(G),X.setCoordsPoint2D(E),v.setCoordsPoint2D(d),d.setCoordsPoint2D(C),V.setCoordsPoint2D(y),g=f,f=P,b=!1,P=h.getNextVertex(f)}return this.m_bufferCommands.at(-1).m_next=0,this.processBufferCommands(s),a.setShift(m),s.applyTransformationToPath(a,s.getPathCount()-1),1}processBufferCommands(e){const t=this.cleanupBufferCommands();let s=!0,n=t+1;for(let i=t;n!==t;i=n){const r=this.m_bufferCommands[i];n=r.m_next!==-1?r.m_next:(i+1)%this.m_bufferCommands.length,r.m_type&&(s&&(e.startPath(r.m_from),s=!1),r.m_type&x.enumJoinMask?this.addJoin(r.m_type,e,r.m_center,r.m_from,r.m_to,!1,!0):e.lineTo(r.m_to))}}cleanupBufferCommands(){this.m_helperArray=_e(_,9);let e=0;for(let s=0,n=this.m_bufferCommands.length;s<n;){const i=this.m_bufferCommands[s];if(i.m_type&x.enumConnectionMask){e=s;break}s=i.m_next}let t=e+1;for(let s=e;t!==e;s=t){const n=this.m_bufferCommands[s];t=n.m_next;let i=1,r=null;for(;t!==s&&(r=this.m_bufferCommands[t],!(r.m_type&x.enumConnectionMask));)t=r.m_next,i++;i!==1&&(n.m_type&r.m_type)===x.enumLine&&(this.m_helperLine1.setStartXY(n.m_from),this.m_helperLine1.setEndXY(n.m_to),this.m_helperLine2.setStartXY(r.m_from),this.m_helperLine2.setEndXY(r.m_to),this.m_helperLine1.intersect(this.m_helperLine2,this.m_helperArray,null,null,this.m_smallTolerance.total())===1&&(n.m_to.assign(this.m_helperArray[0]),r.m_from.assign(this.m_helperArray[0]),n.m_next=t))}return e}isDegeneratePath(e,t){if(e.getPathSize(t)===1)return!0;if(this.m_joins===0&&this.m_caps===0){const s=new z;if(e.queryPathEnvelope(t,s),Math.max(s.width(),s.height())<.5*this.m_densifyDist)return!0}return!1}isDegenerateGeometry(e){if(this.m_joins===0&&this.m_caps===0){const t=new z;if(e.queryEnvelope(t),Math.max(t.width(),t.height())<.5*this.m_densifyDist)return!0}return!1}addCircle(e,t){const s=t.getXY();if(this.m_circleTemplate.length!==0){let l=this.m_circleTemplate[0].clone();l.scaleAddThis(this.m_absDistance,s),e.startPath(l);for(let a=1,c=this.m_circleTemplate.length;a<c;a++)l=this.m_circleTemplate[a].clone(),l.scaleAddThis(this.m_absDistance,s),e.lineTo(l);return}const n=this.m_circleTemplateSize,i=Math.trunc((n+3)/4),r=.5*Math.PI/i;e.reserve(4*i);const m=Math.cos(r),h=Math.sin(r);for(let l=3;l>=0;l--){const a=_.construct(0,this.m_absDistance);switch(l){case 0:for(let c=0;c<i;c++)e.lineToCoords(a.x+s.x,a.y+s.y),a.rotateReverse(m,h);break;case 1:for(let c=0;c<i;c++)e.lineToCoords(-a.y+s.x,a.x+s.y),a.rotateReverse(m,h);break;case 2:for(let c=0;c<i;c++)e.lineToCoords(-a.x+s.x,-a.y+s.y),a.rotateReverse(m,h);break;default:e.startPathCoords(a.y+s.x,-a.x+s.y);for(let c=1;c<i;c++)a.rotateReverse(m,h),e.lineToCoords(a.y+s.x,-a.x+s.y)}this.progress_()}}addSquare(e,t){const s=new me({vd:t.getDescription()});s.setCoords(t.getX(),t.getY(),t.getX(),t.getY()),s.inflateCoords(this.m_absDistance,this.m_absDistance),e.addEnvelope(s,!1)}setStrongSimple(e){return e.getImpl().setIsSimple(4,this.m_tolerance.total()),e.getImpl().updateOGCFlagsProtected(),e}}function ne(o){return ye(o,0),o}function be(o,e){return!!o.isEmpty()||Math.min(o.width(),o.height())>e}function $e(o,e,t,s,n,i,r,m){const h=o.getXY(t),l=o.getXY(s);if(h.equals(l))return-1;const a=.25*r,c=.25*r,u=new _;u.setSub(l,h);const f=u.length(),g=f*f*.25,P=i*i-g;if(P<=g)return-1;const b=Math.sqrt(P);u.normalize();const d=u.clone();d.rightPerpendicularThis();const C=g/b,v=C<=c,D=_.lerp(l,h,.5),y=d.clone(),V=C-a;y.scaleAddThis(Math.max(0,V),D),d.negate().scaleAddThis(b,D);const E=3.61*Ee(i-c),X=y.sub(h),$=y.sub(l);let F=!1,T=0;const p=Ve(64,0);J(m===p.length);{for(let R=o.getPrevVertexEx(s,n);R!==t;){if(o.getUserIndex(R,e)===1)return-1;if(!o.getXY(R).equals(l))break;{const O=o.getPrevVertexEx(R,n);o.removeVertex(R,!1),R=O}}const I=new _,S=h.clone();p[T++]=1;for(let R=o.getNextVertexEx(t,n);R!==s;){if(o.getUserIndex(R,e)===1)return-1;const O=o.getXY(R);if(O.equals(S)){const Pe=o.getNextVertexEx(R,n);o.removeVertex(R,!1),R=Pe;continue}p[T++]=0;const ce=new _;if(ce.setSub(O,h),ce.dotProduct(d)<0)return 0;(_.sqrDistance(O,h)>E||_.sqrDistance(O,l)>E)&&(F=!0);let ee=0;if(O.sub(h).crossProduct(X)>=0&&(ee=1),O.sub(l).crossProduct($)<=0&&(ee|=2),ee===0)return 0;p[T-1]=ee,I.assign(S),S.assign(O),R=o.getNextVertexEx(R,n)}if(T===1)return 0;J(T<p.length),p[T++]=2}let A=!0;for(let I=1,S=0;I<T;I++)if(p[I]!==p[I-1]&&(S++,A=S<3&&(S===1&&p[I]===3||S===2&&p[I]===2),!A))return 0;if(T>2&&A&&(T===3||!F)){let I=0,S=o.getNextVertexEx(t,n);for(v||(o.setXY(S,y),S=o.getNextVertexEx(S,n));S!==s;){const R=o.getNextVertexEx(S,n);o.removeVertex(S,!1),S=R,++I}return I}if(J(T!==3),F&&T>3)return 0;const N=h.clone();let w=t;const M=h.clone();let Y=1,G=-1,k=w,L=0;for(T=1;k!==s;){k=o.getNextVertexEx(k,n);const I=p[T++];if(I===0){if(k===s)break;continue}const S=o.getXY(k);if(G!==-1){if(3&(G&Y&I)){o.removeVertex(w,!0),L++,w=k,M.setCoordsPoint2D(S),Y=I;continue}if(Y===3&&G!==0&&I!==0){if(M.setCoordsPoint2D(y),v||M.equals(N)){o.removeVertex(w,!0),L++,w=k,M.setCoordsPoint2D(S),Y=I;continue}o.setXY(w,M)}}G=Y,N.setCoordsPoint2D(M),w=k,Y=I,M.setCoordsPoint2D(S)}return L}function He(o,e,t,s){let n=-1;const i=new _,r=new _,m=new _;for(let h=0,l=o.getPathSize(s),a=o.getFirstVertex(s);h<l;++h){n===-1&&(o.queryXY(a,r),n=o.getPrevVertex(a),n!==-1&&(o.queryXY(n,i),m.setSub(r,i),m.normalize()));const c=o.getNextVertex(a);if(c===-1)break;const u=o.getXY(c),f=u.sub(r);f.normalize(),n!==-1&&f.dotProduct(m)<-.99&&Math.abs(f.crossProduct(m))<1e-7&&o.setUserIndex(a,e,1),n=a,a=c,i.assign(r),r.assign(u),m.assign(f)}}function Ke(o,e,t,s,n,i,r){const m={stack:[],error:void 0,hasError:!1};try{const h=o.getFirstPath(e),l=o.createUserIndex();Ye(m,Me(()=>{o.removeUserIndex(l)},!1),!1),He(o,l,e,h);for(let a=0;a<100;++a){if(o.getPathSize(h)===0)return 1;let c=o.getFirstVertex(h),u=o.getPathSize(h);if(u<3)return 1;o.isClosedPath(h)||(u-=1);const f=64;let g=0,P=!1;for(let b=0;b<u&&c!==Z;b++){let d=0,C=c;for(let v=1,D=Math.min(f,u-b);v<D;v++)if(C=o.getNextVertexEx(C,t),v>1){const y=$e(o,l,c,C,t,n,r,f);if(y===-1)break;d+=y,u-=y}if(g+=d,P=d>0,P){const v=o.getPrevVertexEx(c,t);if(v!==-1){c=v,u++;continue}}c=o.getNextVertexEx(c,t)}if(g===0)break}return o.filterClosePoints(i,!1,!1,!1,-1),1}catch(h){m.error=h,m.hasError=!0}finally{Fe(m)}}function Qe(o,e,t,s,n,i,r){return Ke(o,e,t,s,n,i,r)}function he(o,e,t,s){for(let n=0,i=o.getPathCount();n<i;n++){const r=o.getXY(o.getPathStart(n));r.x!==t.xmin&&r.x!==t.xmax&&e.addPath(o,n,s)}}class We{getOperatorType(){return 10004}supportsCurves(){return!0}accelerateGeometry(e,t,s){return!1}canAccelerateGeometry(e){return!1}executeMany(e,t,s,n,i){return this.executeManyEx(e,t,s,Number.NaN,96,n,i)}execute(e,t,s,n){Number.isFinite(s)||Q("Invalid distance for buffer operation");const i=new re([e]),r=[s],m=this.executeMany(i,t,r,!1,n).next();return m||W("null buffer output"),m}executeManyEx(e,t,s,n,i,r,m){if(s.find(h=>!Number.isFinite(h))!==void 0&&Q("Invalid distance for buffer operation"),r){const h=new xe(e,t,s,n,i,!1,m);return new te().executeMany(h,t,m,2)}return new xe(e,t,s,n,i,!1,m)}}class xe extends H{constructor(e,t,s,n,i,r,m){super(),this.m_currentUnionEnvelope2D=new z,this.m_index=-1,this.m_dindex=-1,this.m_progressTracker=m,this.m_bufferer=new Ue(m),this.m_inputGeoms=e,this.m_spatialReference=t,this.m_distances=s,this.m_maxDeviation=n,this.m_maxVerticesInFullCircle=i}tock(){return!0}getRank(){return 1}next(){{let e;for(;e=this.m_inputGeoms.next();)return fe(e),this.m_index=this.m_inputGeoms.getGeometryID(),this.m_dindex+1<this.m_distances.length&&this.m_dindex++,this.buffer(e,this.m_distances[this.m_dindex]);return null}}getGeometryID(){return this.m_index}buffer(e,t){return this.m_bufferer.buffer(e,t,this.m_spatialReference,0,0,4,this.m_maxDeviation,this.m_maxVerticesInFullCircle)}}const le=new We;function Ze(o,e,t){return le.execute(o,e,t,null)}function et(o,e,t,s,n,i){const r=le.executeManyEx(new re(o),e,t,s,n,i,null);return Array.from(r)}function tt(){return le.supportsCurves()}export{Ze as f,et as l,tt as x};
