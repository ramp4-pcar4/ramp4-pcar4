import{s as At,t as qt}from"./SimpleGeometryCursor-B92kdZ15.js";import{b as Et,z as Rt,P as ct,j as St,y as zt,a as T,E as Bt,f as Xt,l as Yt,h as j,v as Ot,L as Ft,R as Wt,x as W,e as w,G as k,U as A,Y as O}from"./Transformation2D-DZfKTQC6.js";import{d as U,n as M,a as N,o as Ut,k as Jt,l as ut,N as gt,P as J,w as nt,e as Dt,j as pt,m as H,p as jt,t as Ht,z as B,F as Q,u as Lt,v as Vt,x as Z,y as Pt,f as xt,D as ot,A as mt,E as $t,T as at,G as q,H as X,J as x,K as S,L as Kt,O as Qt,Q as Zt,R as te,S as it,W as tt,Z as et,_ as yt,$ as ee}from"./ProjectionTransformation-Dr49wlOX.js";import{d5 as v,d6 as E}from"./main-Bd_03BNf.js";import{i as se}from"./GeometryCleaner-BEJM7I4l-DUttS_B6.js";import"./preload-helper-ExcqyqRp.js";function ne(p,t,s,e,m,o){e<Number.MAX_VALUE&&e>-Number.MAX_VALUE||ct("Geodesic_bufferer.buffer - bad distance"),St(p);const i=se(p),r=i.getGeometryType();if(zt(r)){const n=i.getPointCount(),u=8e6;if(Math.abs(e)>u&&(n>50||r!==T.enumMultiPoint&&s===4&&n>2)){let a=i;const l=e>0?1:-1,h=7e6;let _=e,c=1;do c++,_=(Math.abs(_)-h)*l;while(Math.abs(_)>u);_=e;for(let f=0;f<c-1;f++)a=ht(a,t,s,h*l,m,c,o),_=(Math.abs(_)-h)*l;return a=ht(a,t,s,_,m,c,o),a}}return ht(i,t,s,e,m,1,o)}class ie{constructor(t){this.m_sr=null,this.m_gcs=null,this.m_transform=null,this.m_a=0,this.m_eSquared=0,this.m_rpu=0,this.m_radTolerance=0,this.m_q90=0,this.m_gcs90=0,this.m_gcs180=0,this.m_gcs360=0,this.m_gcs60=0,this.m_ellipticToGeodesicMaxRatio=0,this.m_curveType=0,this.m_bShapePreserving=!1,this.m_distance=0,this.m_absDistance=0,this.m_convergenceOffset=0,this.m_cornerStep=0,this.m_segmentStep=0,this.m_progressTracker=t}bufferPolygon(t){const s=new N,e=new Ct(this,t,s);return this.processGnomonicBufferPiecesCursor(!0,e)}bufferPolyline(t){const s=new Ct(this,t,null);return this.processGnomonicBufferPiecesCursor(!0,s)}bufferMultiPoint(t){const s=new me(this,t);return this.processGnomonicBufferPiecesCursor(!1,s)}bufferPoint(t){const s=t.getXY();s.scale(this.m_rpu);let e=new N;if(this.bufferPoint2D(s,!1,e)){const m=B(null,e,!0);e=Q(e,m,!0,!0,-1,this.m_progressTracker,0,!1)}return e=new H().foldInto360RangeGeodetic(e,this.m_gcs,2),e}processGnomonicBufferPiecesCursor(t,s){const e=s;let m=e.getGnomonic();const o=Lt(Vt());let i=new Z,r=new U().executeMany(i,o,this.m_progressTracker,2);const n=Ft(6,!1),u=Wt(M,6);this.initializeGrid(n,u);const a=[null,null,null,null,null,null],l=[null,null,null,null,null,null],h=[null,null,null,null,null,null];let _,c,f;for(;(_=e.next())!==null;){if(c=e.getGnomonic(),c!==m){if(m!==null){let d=r.next();if(i=null,r=null,d!=null){const C=B(o,d,!0),P=J(C);d=m.unproject(d,P,this.m_progressTracker),this.putInGridCursors(t,d,o,!0,n,u,a,l,h)}}c!==null&&(i=new Z,r=new U().executeMany(i,o,this.m_progressTracker,2)),m=c}if(e.isRunningInGnomonic()){if(c.project(_),e.needsSimplify()){const d=B(null,_,!0);_=Q(_,d,!0,!0,-1,this.m_progressTracker,0,!1)}i.tick(st(_)),r.tock()}else this.putInGridCursors(t,_,o,!0,n,u,a,l,h)}let g=!1;for(let d=0;d<6;d++)if(h[d]!=null){g=!0;break}if(g){let d=!1;const C=[null,null,null,null,null,null];if(t){const y=e.m_densified;if(e.m_densified=null,y!==null){const b=new W;b.scale(1/this.m_rpu,1/this.m_rpu),y.applyTransformation(b),this.m_distance>0?this.putInGridCursors(t,y,o,!1,n,u,a,l,h):(this.processInGrid(t,y,!1,n,u,a,C),d=!0)}}const P=new Z,D=new U().executeMany(P,this.m_gcs,this.m_progressTracker,2);if(r!==null){let y=r.next();i=null,r=null;const b=B(o,y,!0),G=J(b);y=m.unproject(y,G,this.m_progressTracker),this.putInGridCursors(t,y,o,!0,n,u,a,l,h)}for(let y=0;y<6;y++)if(h[y]!=null){let b=h[y].next();h[y]=null,l[y]=null,d&&C[y]!==null&&(b=new Pt().execute(C[y],b,o,this.m_progressTracker));const G=B(o,b,!0),I=J(G);b=a[y].unproject(b,I,this.m_progressTracker),b=new xt().execute(b,this.m_gcs,!0,this.m_progressTracker),P.tick(st(b)),D.tock()}f=D.next()}else{let d,C=!1;if(t){let b=e.m_densified;if(e.m_densified=null,b!==null){const G=new W;G.scale(1/this.m_rpu,1/this.m_rpu),b.applyTransformation(G),c.project(b);const I=B(null,b,!0);b=Q(b,I,!1,!0,-1,this.m_progressTracker,0,!1),this.m_distance>0?(i.tick(st(b)),r.tock()):(d=b,C=!0)}}let P=r.next();i=null,r=null,C&&(P=new Pt().execute(d,P,o,this.m_progressTracker));const D=B(o,P,!0),y=J(D);f=m.unproject(P,y,this.m_progressTracker),f=new xt().execute(f,this.m_gcs,!0,this.m_progressTracker)}return f=new H().foldInto360RangeGeodetic(f,this.m_gcs,2),f}putInGridCursors(t,s,e,m,o,i,r,n,u){const a=[null,null,null,null,null,null];this.processInGrid(t,s,m,o,i,r,a);for(let l=0;l<6;l++)a[l]!==null&&(n[l]===null&&(n[l]=new Z,u[l]=new U().executeMany(n[l],e,this.m_progressTracker,2)),n[l].tick(st(a[l])),u[l].tock())}processInGrid(t,s,e,m,o,i,r){const u=this.insertGeodeticPointsAlongGrid(s,o,.01);for(let a=0;a<6;a++){if(m[a])continue;const l=o[a].clone();l.inflateCoords(.01,.01);const h=ot(s,l),_=nt(null,h,!1).total();let c=mt(u,l,_,Number.NaN,this.m_progressTracker);if(c!==null&&!c.isEmpty()){if(c===u&&(c=c.clone()),i[a]===null){const g=new w;a<3?g.setCoords(0,1):g.setCoords(0,-1);const d=new w;d.setAdd(o[a].getCenter(),g),i[a]=V(this.m_gcs,d)}i[a].project(c);const f=B(null,c,!0);c=Q(c,f,e,!0,-1,this.m_progressTracker,0,!1),r[a]=c}}}insertGeodeticPointsAlongGrid(t,s,e){const m=M.construct(s[3].xmin,s[3].ymin,s[2].xmax,s[2].ymax),o=$t(this.m_gcs,m,t,!0,this.m_progressTracker),i=new at,r=i.addGeometry(o);return q(i,r,this.m_gcs,0,2,!0,s[0].xmax+e),q(i,r,this.m_gcs,0,2,!0,s[1].xmax+e),q(i,r,this.m_gcs,0,2,!1,s[1].ymin+e),e!==0&&(q(i,r,this.m_gcs,0,2,!0,s[0].xmax-e),q(i,r,this.m_gcs,0,2,!0,s[1].xmax-e),q(i,r,this.m_gcs,0,2,!1,s[1].ymin-e)),i.getGeometry(r)}initializeGrid(t,s){for(let e=0;e<6;e++)t[e]=!1;s[0].setCoords({xmin:-this.m_gcs180,ymin:0,xmax:-this.m_gcs60,ymax:this.m_gcs90}),s[1].setCoords({xmin:-this.m_gcs60,ymin:0,xmax:this.m_gcs60,ymax:this.m_gcs90}),s[2].setCoords({xmin:this.m_gcs60,ymin:0,xmax:this.m_gcs180,ymax:this.m_gcs90}),s[3].setCoords({xmin:-this.m_gcs180,ymin:-this.m_gcs90,xmax:-this.m_gcs60,ymax:0}),s[4].setCoords({xmin:-this.m_gcs60,ymin:-this.m_gcs90,xmax:this.m_gcs60,ymax:0}),s[5].setCoords({xmin:this.m_gcs60,ymin:-this.m_gcs90,xmax:this.m_gcs180,ymax:0})}checkAndPrepSegmentForCrossingAzimuthsOrPoleWrap(t,s,e,m,o,i){const r=t[0],n=t.at(-1),u=r.y<n.y?r.y:n.y,a=r.y>n.y?r.y:n.y,l=ut.q(this.m_a,this.m_eSquared,u),h=ut.q(this.m_a,this.m_eSquared,a);if(this.m_q90-(l+s+this.m_absDistance)>.001&&this.m_q90+(h-s-this.m_absDistance)>.001)return!1;const _=e-O,c=m+O,f=_-Math.PI,g=_+Math.PI,d=c+Math.PI,C=[Number.NaN],P=[Number.NaN],D=[Number.NaN],y=[Number.NaN];let b=!1;if(bt(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,r,_,f,n,c,C,P),bt(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,n,d,c,r,f,D,y),(c<C[0]&&C[0]<d||c<P[0]&&P[0]<d)&&(b=!0),b||(f<D[0]&&D[0]<_||f<y[0]&&y[0]<_)&&(b=!0),!b&&o)return!1;const G=[];for(let R=t.length-1;R>=0;R--)G.push(t[R]);i.setEmpty(),i.addPathPoint2D(null,0,!0);let I=0;I=lt(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,this.m_curveType,t,_,c,o,I,i),I=L(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,n,c,d,this.m_cornerStep,o,I,i,C[0],P[0]),I=lt(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,this.m_curveType,G,d,g,o,I,i),I=L(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,r,f,_,this.m_cornerStep,o,I,i,D[0],y[0]);let Y=!1;return o||(Y=this.checkAndPrepForPole(i)),b||Y}bufferPoint2D(t,s,e){e.setEmpty(),e.addPathPoint2D(null,0,!0),L(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,t,-this.m_cornerStep,2*Math.PI,this.m_cornerStep,s,0,e);let o=!1;return s||(o=this.checkAndPrepForPole(e)),o}checkAndPrepForPole(t){const s=this.checkAndPrepForPoleTouch(t),e=this.checkAndPrepForPoleWrap(t);return s||e}checkAndPrepForPoleTouch(t){const s=new M;return t.queryEnvelope(s),!(!X(s.ymax,this.m_gcs90)&&!X(s.ymin,-this.m_gcs90))&&(this.prepPoleTouch(t),!0)}checkAndPrepForPoleWrap(t){const s=t.getXY(0),e=t.getXY(t.getPointCount()-1);return Math.abs(s.x-e.x)>this.m_gcs180?(this.prepSinglePoleWrap(t),!0):this.checkAndPrepForDoublePoleWrap(t)}checkAndPrepForDoublePoleWrap(t){return t.calculateArea2D()<0&&(this.prepDoublePoleWrap(t),!0)}prepPoleTouch(t){const s=new N;s.insertPath2D(-1,null,0,0,!0);const e=t.getPathStart(0),m=t.getPathEnd(0),o=m-e;let i=-1;for(i=e;i<m;i++){const a=t.getXY(i),l=X(a.y,this.m_gcs90),h=X(a.y,-this.m_gcs90);if(!l&&!h)break}let r=i,n=!1,u=Number.NaN;do{const a=t.getXY(r),l=X(a.y,this.m_gcs90),h=X(a.y,-this.m_gcs90),_=e+(r+1-e)%o;if(l||h){let c=w.construct(u,a.y);s.insertPoint2D(0,-1,c);const f=t.getXY(_),g=X(f.y,this.m_gcs90),d=X(f.y,-this.m_gcs90);g||d||(c=w.construct(f.x,a.y),n?s.setXY(s.getPointCount()-1,c):s.insertPoint2D(0,-1,c)),n=!0}else s.insertPoint2D(0,-1,a),u=a.x,n=!1;r=_}while(r!==i);t.setEmpty(),t.add(s,!1)}prepSinglePoleWrap(t){const s=new N,e=new N,m=new W,o=t.getXY(t.getPathStart(0)),i=t.getXY(t.getPathEnd(0)-1),r=this.m_gcs360,n=this.m_gcs180,u=new M;u.setCoords({xmin:-this.m_gcs180,ymin:-this.m_gcs90,xmax:this.m_gcs180,ymax:this.m_gcs90});const a=new M;t.queryEnvelope(a);const l=Math.ceil(a.width()/r);let h,_;o.x>i.x?(h=-r,_=this.m_gcs90):(h=r,_=-this.m_gcs90),m.setShiftCoords(h,0),s.addPath(t,0,!0),e.add(s,!1);const c=new Dt;for(let z=0;z<l;z++)e.applyTransformation(m),e.getPointByVal(0,c),s.lineToPoint(c),s.addSegmentsFromPath(e,0,0,e.getSegmentCount()-1,!1);const f=s.getXY(0),g=s.getXY(s.getPointCount()-1);f.y=_,g.y=_,s.lineTo(g);const d=new w;for(d.setCoordsPoint2D(g),d.x-=.5*h;Math.abs(d.x-f.x)>n;)s.lineTo(d),d.x-=.5*h;s.lineTo(f);const C=u.getCenterX(),P=new M;s.queryEnvelope(P);let D=0;const y=P.getCenter().x;y-C>n?D=-Math.ceil((y-C-n)/r):C-y>n&&(D=Math.ceil((C-y-n)/r)),D!==0&&(m.setShiftCoords(D*r,0),s.applyTransformation(m));const b=new at,G=b.addGeometry(s);q(b,G,this.m_gcs,0,2,!0,u.xmin),q(b,G,this.m_gcs,0,2,!0,u.xmax);const I=b.getGeometry(G),Y=ot(I,u);Y.inflateCoords(0,1);const R=nt(null,Y,!0).total(),F=mt(I,u,R,Number.NaN,this.m_progressTracker);t.setEmpty(),t.add(F,!1)}prepDoublePoleWrap(t){const s=this.m_gcs360,e=this.m_gcs180,m=new M;m.setCoords({xmin:-this.m_gcs180,ymin:-this.m_gcs90,xmax:this.m_gcs180,ymax:this.m_gcs90});const o=m.getCenter().x,i=new M;t.queryPathEnvelope(0,i);let r,n=0,u=i.getCenter().x;if(u-o>e?n=-Math.ceil((u-o-e)/s):o-u>e&&(n=Math.ceil((o-u-e)/s)),n!==0){const _=new W;_.setShiftCoords(n*s,0),t.getImpl().applyTransformationToPath(_,0),t.queryPathEnvelope(0,i),u=i.getCenter().x}const a=new M;m.containsExclusiveEnvelope(i)?(r=!1,a.setCoords({env2D:m})):(r=!0,a.setCoords({env2D:m}),a.xmin-=s,a.xmax+=s);let l=t.createInstance();l.addPathPoint2D(null,0,!0);const h=new w;if(h.setCoords(a.xmin,a.ymin),l.insertPoint2D(0,-1,h),h.setCoords(a.xmin,a.ymax),l.insertPoint2D(0,-1,h),h.setCoords(.5*(a.xmin+a.xmax),a.ymax),l.insertPoint2D(0,-1,h),h.setCoords(a.xmax,a.ymax),l.insertPoint2D(0,-1,h),h.setCoords(a.xmax,a.ymin),l.insertPoint2D(0,-1,h),h.setCoords(.5*(a.xmin+a.xmax),a.ymin),l.insertPoint2D(0,-1,h),r){l.addPath(t,0,!0);const _=new W;u<o?_.setShiftCoords(s,0):_.setShiftCoords(-s,0),t.getImpl().applyTransformationToPath(_,0),l.addPath(t,0,!0);const c=new at,f=c.addGeometry(l);q(c,f,this.m_gcs,0,2,!0,m.xmin),q(c,f,this.m_gcs,0,2,!0,m.xmax),l=c.getGeometry(f);const g=ot(l,m);g.inflateCoords(0,1);const d=nt(null,g,!0).total();l=mt(l,m,d,Number.NaN,this.m_progressTracker)}else l.addPath(t,0,!0);t.setEmpty(),t.add(l,!1)}setMinCornerStep(){const t={stack:[],error:void 0,hasError:!1};try{let s=Math.min(Math.PI*this.m_a-this.m_absDistance,this.m_absDistance);s=Math.min(s,.125*this.m_a*Math.PI);const e=new w;e.setCoords(0,10*this.m_rpu);const m=0;let o=45*this.m_rpu;const i=v(t,new k(new x,new x),!1),r=v(t,new k(new x,new x),!1),n=v(t,new k(new x,new x),!1),u=v(t,new k(new x,new x),!1),a=new w,l=new w,h=new w,_=new w;for(S.geodesicCoordinate(this.m_a,this.m_eSquared,e.x,e.y,s,m,i.at(0),i.at(1)),a.setCoords(i.at(0).val,i.at(1).val),S.geodesicCoordinate(this.m_a,this.m_eSquared,e.x,e.y,s,o,r.at(0),r.at(1)),l.setCoords(r.at(0).val,r.at(1).val);;){const g={stack:[],error:void 0,hasError:!1};try{const d=.5*(m+o);S.geodesicCoordinate(this.m_a,this.m_eSquared,e.x,e.y,s,d,n.at(0),n.at(1)),h.setCoords(n.at(0).val,n.at(1).val);const C=v(g,new x,!1),P=v(g,new x,!1);S.geodeticDistance(this.m_a,this.m_eSquared,a.x,a.y,l.x,l.y,C,P,null,2),S.geodeticCoordinate(this.m_a,this.m_eSquared,a.x,a.y,.5*C.val,P.val,u.at(0),u.at(1),2),_.setCoords(u.at(0).val,u.at(1).val);const D=v(g,new x,!1);if(S.geodeticDistance(this.m_a,this.m_eSquared,h.x,h.y,_.x,_.y,D,null,null,2),D.val<=this.m_convergenceOffset)break;o*=.9,S.geodesicCoordinate(this.m_a,this.m_eSquared,e.x,e.y,s,o,r.at(0),r.at(1)),l.setCoords(r.at(0).val,r.at(1).val)}catch(d){g.error=d,g.hasError=!0}finally{E(g)}}const c=o-m,f=2*Math.PI/Math.ceil(2*Math.PI/c);this.m_cornerStep=f}catch(s){t.error=s,t.hasError=!0}finally{E(t)}}setMinSegmentStep(){const t={stack:[],error:void 0,hasError:!1};try{let s=Math.min(Math.PI*this.m_a-this.m_absDistance,this.m_absDistance);s=Math.min(s,.125*this.m_a*Math.PI);const e=new w,m=new w;e.setCoords(0,10*this.m_rpu),m.setCoords(10*this.m_rpu,10*this.m_rpu);const o=v(t,new x,!1),i=v(t,new x,!1),r=v(t,new x,!1);S.geodeticDistance(this.m_a,this.m_eSquared,e.x,e.y,m.x,m.y,r,o,i,this.m_curveType);const n=v(t,new k(new x,new x),!1),u=v(t,new k(new x,new x),!1),a=new w,l=v(t,new x,!1),h=v(t,new k(new x,new x),!1),_=v(t,new k(new x,new x),!1),c=v(t,new k(new x,new x),!1),f=v(t,new k(new x,new x),!1),g=new w,d=new w,C=new w,P=new w,D=0;let y=1;const b=o.val,G=i.val,I=b-.5*Math.PI,Y=G+.5*Math.PI,R=r.val;for(S.geodesicCoordinate(this.m_a,this.m_eSquared,e.x,e.y,s,I,h.at(0),h.at(1)),g.setCoords(h.at(0).val,h.at(1).val),S.geodesicCoordinate(this.m_a,this.m_eSquared,m.x,m.y,s,Y,_.at(0),_.at(1)),d.setCoords(_.at(0).val,_.at(1).val);;){const z={stack:[],error:void 0,hasError:!1};try{const rt=.5*(D+y);S.geodeticCoordinate(this.m_a,this.m_eSquared,e.x,e.y,rt*R,b,n.at(0),n.at(1),this.m_curveType),a.setCoords(n.at(0).val,n.at(1).val),S.geodeticDistance(this.m_a,this.m_eSquared,e.x,e.y,a.x,a.y,null,null,l,this.m_curveType);const Tt=l.val+.5*Math.PI;S.geodesicCoordinate(this.m_a,this.m_eSquared,a.x,a.y,s,Tt,c.at(0),c.at(1)),C.setCoords(c.at(0).val,c.at(1).val);const _t=v(z,new x,!1),ft=v(z,new x,!1);S.geodeticDistance(this.m_a,this.m_eSquared,g.x,g.y,d.x,d.y,_t,ft,null,2),S.geodeticCoordinate(this.m_a,this.m_eSquared,g.x,g.y,.5*_t.val,ft.val,f.at(0),f.at(1),2),P.setCoords(f.at(0).val,f.at(1).val);const dt=v(z,new x,!1);if(S.geodeticDistance(this.m_a,this.m_eSquared,C.x,C.y,P.x,P.y,dt,null,null,2),dt.val<=this.m_convergenceOffset)break;{const $={stack:[],error:void 0,hasError:!1};try{y*=.9,S.geodeticCoordinate(this.m_a,this.m_eSquared,e.x,e.y,y*R,b,u.at(0),u.at(1),this.m_curveType),m.setCoords(u.at(0).val,u.at(1).val);const K=v($,new x,!1);S.geodeticDistance(this.m_a,this.m_eSquared,e.x,e.y,m.x,m.y,null,null,K,this.m_curveType);const kt=K.val+.5*Math.PI;S.geodesicCoordinate(this.m_a,this.m_eSquared,m.x,m.y,s,kt,_.at(0),_.at(1)),d.setCoords(_.at(0).val,_.at(1).val)}catch(K){$.error=K,$.hasError=!0}finally{E($)}}}catch(rt){z.error=rt,z.hasError=!0}finally{E(z)}}let F=y*R;F>1e5&&(F=1e5),this.m_segmentStep=F}catch(s){t.error=s,t.hasError=!0}finally{E(t)}}setConvergenceOffset(){let t;t=this.m_absDistance>5e4?100:this.m_absDistance>1e4?10:1,this.m_absDistance/t<500&&(t=this.m_absDistance/500),t<.01&&(t=.01),this.m_convergenceOffset=t}}function ht(p,t,s,e,m,o,i){if(p.isEmpty())return new N({vd:p.getDescription()});let r=p;if(Bt(r)){const g=10*t.getTolerance(0);r=new Ut().execute(r,0,g,0,i,12e3)}const n=new ie(i);n.m_sr=t,n.m_gcs=t.getGCS(),n.m_transform=Jt(t,n.m_gcs,null);const u=Kt();n.m_gcs.querySpheroidData(u);const a=new M;r.queryEnvelope(a),n.m_a=u.majorSemiAxis,n.m_eSquared=u.e2,n.m_rpu=n.m_gcs.getUnit().getUnitToBaseFactor(),n.m_gcs90=.5*Math.PI/n.m_rpu,n.m_gcs180=Math.PI/n.m_rpu,n.m_gcs360=2*Math.PI/n.m_rpu,n.m_gcs60=n.m_gcs360/6,n.m_q90=ut.q90(n.m_a,n.m_eSquared),n.m_ellipticToGeodesicMaxRatio=.5*n.m_a*Math.PI/n.m_q90;const l=n.m_gcs.getTolerance(0);n.m_radTolerance=l*n.m_rpu,s===4?(n.m_curveType=2,n.m_bShapePreserving=!0):(n.m_curveType=s,n.m_bShapePreserving=!1),n.m_distance=e,n.m_absDistance=Math.abs(e),Number.isNaN(m)||m<=0?n.setConvergenceOffset():n.m_convergenceOffset=Math.max(m,.001),n.m_convergenceOffset/=o;let h,_=r.getGeometryType();if(Xt(_)){const g=new gt({vd:r.getDescription()});g.addSegment(r,!0),h=g,_=T.enumPolyline}else if(_===T.enumEnvelope){const g=r,d=new M;g.queryEnvelope(d);const C=J(nt(n.m_sr,a,!0));if(d.minDimension()<=C)if(d.maxDimension()===0){const P=new Dt({vd:r.getDescription()});g.getCenter(P),h=P,_=T.enumPoint}else{const P=new gt({vd:r.getDescription()});P.addEnvelope(g,!1),h=P,_=T.enumPolyline}else{const P=new N({vd:r.getDescription()});P.addEnvelope(g,!1),h=P,_=T.enumPolygon}}else h=r;if(n.setMinCornerStep(),Yt(_)||n.setMinSegmentStep(),n.m_absDistance<=.5*n.m_convergenceOffset)return _!==T.enumPolygon?new N({vd:h.getDescription()}):n.m_bShapePreserving?h:pt(h,n.m_sr,n.m_curveType,n.m_segmentStep,-1,i);if(n.m_distance<0&&_!==T.enumPolygon)return new N({vd:h.getDescription()});if(n.m_bShapePreserving&&j(_)){const g=pt(h,t,4,Number.NaN,n.m_convergenceOffset,i);h=new H().execute(g,n.m_transform,i)}else h=new H().execute(h,n.m_transform,i);if(h=jt(h,n.m_gcs),h.isEmpty())return new N({vd:h.getDescription()});!n.m_bShapePreserving&&j(_)&&(h=Ht(n.m_rpu,h)),h=re(h,n.m_gcs);let c=new N;switch(_){case T.enumPolygon:c=n.bufferPolygon(h);break;case T.enumPolyline:c=n.bufferPolyline(h);break;case T.enumMultiPoint:c=n.bufferMultiPoint(h);break;case T.enumPoint:c=n.bufferPoint(h);break;default:Ot("")}const f=new H().execute(c,n.m_transform.getInverse(),i);return f.mergeVertexDescription(h.getDescription()),f}function lt(p,t,s,e,m,o,i,r,n,u,a){const l={stack:[],error:void 0,hasError:!1};try{const h=new w;h.setNAN(),n||a.getPointCount()>0&&(h.setCoordsPoint2D(a.getXY(a.getPointCount()-1)),h.scale(s));const _=v(l,new x,!1),c=v(l,new k(new x,new x),!1),f=new w,g=new w,d=o.at(-1),C=1/s;for(let P=0;P<o.length;P++){const D=o[P];let y;P===0?y=i:P===o.length-1?y=r:(S.geodeticDistance(p,t,d.x,d.y,D.x,D.y,null,null,_,m),y=_.val-.5*Math.PI),S.geodesicCoordinate(p,t,D.x,D.y,e,y,c.at(0),c.at(1)),n?g.setCoords(c.at(0).val,c.at(1).val):(f.setCoords(c.at(0).val,c.at(1).val),u=It(D.x,f.x,h.x,u),g.setCoords(u+f.x,f.y),h.setCoordsPoint2D(g)),g.scale(C),a.insertPoint2D(0,-1,g)}return u}catch(h){l.error=h,l.hasError=!0}finally{E(l)}}function L(p,t,s,e,m,o,i,r,n,u,a,l=Number.NaN,h=Number.NaN){const _={stack:[],error:void 0,hasError:!1};try{if(i-o<r)return u;const c=v(_,new k(new x,new x),!1),f=new w,g=new w,d=new w;g.setNAN(),n||a.getPointCount()>0&&(g.setCoordsPoint2D(a.getXY(a.getPointCount()-1)),g.scale(s));let C=Math.ceil(o/r),P=C++*r;P===o&&(P=C++*r);let D=o;const y=1/s;for(;P<i+r&&(D<l&&l<P?(P=l,C--):D<h&&h<P&&(P=h,C--),!(P>=i));)S.geodesicCoordinate(p,t,m.x,m.y,e,P,c.at(0),c.at(1)),n?d.setCoords(c.at(0).val,c.at(1).val):(f.setCoords(c.at(0).val,c.at(1).val),u=It(m.x,f.x,g.x,u),d.setCoords(u+f.x,f.y),g.setCoordsPoint2D(d)),d.scale(y),a.insertPoint2D(0,-1,d),D=P,P=C++*r;return u}catch(c){_.error=c,_.hasError=!0}finally{E(_)}}function bt(p,t,s,e,m,o,i,r,n,u,a){const l={stack:[],error:void 0,hasError:!1};try{const h=new w,_=new w,c=v(l,new k(new x,new x),!1);S.geodesicCoordinate(p,t,m.x,m.y,e,o,c.at(0),c.at(1)),h.setCoords(c.at(0).val,c.at(1).val),S.geodesicCoordinate(p,t,m.x,m.y,e,i,c.at(0),c.at(1)),_.setCoords(c.at(0).val,c.at(1).val);const f=v(l,new x,!1);for(S.geodeticDistance(p,t,r.x,r.y,h.x,h.y,null,f,null,0),u[0]=f.val,S.geodeticDistance(p,t,r.x,r.y,_.x,_.y,null,f,null,0),a[0]=f.val;u[0]<=a[0];)u[0]+=A;for(;u[0]>a[0];)u[0]-=A;for(;u[0]>=n;)u[0]-=A,a[0]-=A;for(;u[0]<n;)u[0]+=A,a[0]+=A}catch(h){l.error=h,l.hasError=!0}finally{E(l)}}function It(p,t,s,e){if(Number.isNaN(s)){for(;e+t-p>Math.PI;)e-=A;for(;p-(e+t)>Math.PI;)e+=A;return e}return e+t-s>Math.PI?e-=A:s-(e+t)>Math.PI&&(e+=A),e}function re(p,t){const s=p.getGeometryType();let e;if(e=j(s)?p.getPathCount():s===T.enumMultiPoint?p.getPointCount():1,e===1)return p;const m=[],o=[];for(let r=0;r<e;r++){m.push(r);const n=new w;if(j(s)){const a=new M;p.queryPathEnvelope(r,a),n.assign(a.getCenter())}else n.assign(p.getXY(r));const u=t.toGeohash(n);o.push(u)}m.sort((r,n)=>o[r]<o[n]?-1:o[r]>o[n]?1:0);const i=p.createInstance();for(let r=0;r<e;r++){const n=m[r];j(s)?i.addPath(p,n,!0):i.addPoints(p,n,n+1)}return i}function Gt(p,t,s,e,m,o){const i={stack:[],error:void 0,hasError:!1};try{if(e>=o)return!1;const r=s[0],n=s.at(-1),u=v(i,new x,!1),a=v(i,new x,!1),l=v(i,new x,!1);S.greatEllipticDistance(p,t,m.x,m.y,r.x,r.y,u,null,null),S.greatEllipticDistance(p,t,m.x,m.y,n.x,n.y,a,null,null),S.greatEllipticDistance(p,t,r.x,r.y,n.x,n.y,l,null,null);let h=Math.min(u.val,a.val)+l.val,_=h+e;if(_<o)return!0;const c=v(i,new x,!1);h=Math.max(u.val,a.val);for(let f=1;f<s.length-1;f++){const g=s[f];S.greatEllipticDistance(p,t,m.x,m.y,g.x,g.y,c,null,null),c.val>h&&(h=c.val)}return _=h+e,_<o}catch(r){i.error=r,i.hasError=!0}finally{E(i)}}function wt(p,t,s,e,m,o,i,r){let n;if(e.length%2==0){const l=e.length>>1,h=e[l],_=e[l-1];n=w.lerp(h,_,.5)}else n=e[e.length-1>>1].clone();const u=n.clone(),a=it(p,t,u,75/180*Math.PI);return!!Gt(p,t,e,m,u,a)&&(o!==null&&(o.setCoordsPoint2D(n),o.scale(1/s)),i!==null&&i.setCoordsPoint2D(u),r!==null&&(r[0]=a),!0)}function Mt(p,t,s,e,m,o){const i={stack:[],error:void 0,hasError:!1};try{if(e>=o)return!1;const r=v(i,new x,!1);return S.greatEllipticDistance(p,t,m.x,m.y,s.x,s.y,r,null,null),r.val+e<o}catch(r){i.error=r,i.hasError=!0}finally{E(i)}}function oe(p,t,s,e,m,o,i,r){const n=it(p,t,e,.4166666666666667*Math.PI);return!!Mt(p,t,e,m,e,n)&&(o!==null&&(o.setCoordsPoint2D(e),o.scale(1/s)),i!==null&&i.setCoordsPoint2D(e),r!==null&&(r[0]=n),!0)}function V(p,t){return new Qt(p,t)}function st(p){return Zt(p,0)||te(p,0),p}class Nt{constructor(t){this.m_bRunningInGnomonic=!1,this.m_bNeedsSimplify=!1,this.m_gnomonic=null,this.m_gnomonicCenterRad=new w,this.m_minGnomonicRadius=Number.NaN,this.m_progressTracker=t}isRunningInGnomonic(){return this.m_bRunningInGnomonic}needsSimplify(){return this.m_bNeedsSimplify}getGnomonic(){return this.m_gnomonic}}class Ct extends Nt{constructor(t,s,e){super(t.m_progressTracker),this.m_segIter=null,this.m_bNextSegmentCannotJoin=!1,this.m_currentDensifiedDelta=[0],this.m_currentBufferedDelta=0,this.m_lastAzimuth=0,this.m_startAzimuth=[0],this.m_endAzimuth=[0],this.m_numWinds=0,this.m_debugCounter=0,this.m_bufferHelper=new N,this.m_densifiedPoints=[],this.m_bufferer=t,this.m_multiPath=s,this.m_densified=e,this.m_bNeedsSimplify=!0;const m=new M;this.m_multiPath.queryEnvelope(m);const o=m.getCenter(),i=o.clone();i.scale(this.m_bufferer.m_rpu),this.m_gnomonic=V(this.m_bufferer.m_gcs,o),this.m_gnomonicCenterRad=i.clone(),this.m_minGnomonicRadius=it(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,i,75/180*Math.PI)}next(){let t;if(this.m_bNextSegmentCannotJoin)return this.m_bNextSegmentCannotJoin=!1,this.m_segIter.nextSegment(),t=this.m_bufferHelper.clone(),t;if(this.m_segIter===null){if(this.m_segIter=this.m_multiPath.getImpl().querySegmentIterator(),!this.m_segIter.nextPath())return null;this.m_densified!==null&&this.m_densified.addPathPoint2D(null,0,!0)}if(!this.m_segIter.hasNextSegment()){if(!this.m_segIter.nextPath())return null;this.m_densified!=null&&this.m_densified.addPathPoint2D(null,0,!0)}let s=null;this.m_currentBufferedDelta=0,this.m_currentDensifiedDelta=[0],this.m_numWinds=0,this.m_lastAzimuth=Number.NaN,this.m_bNextSegmentCannotJoin=!1,this.m_densifiedPoints.length=0;const e=16;let m=0;const o=new w,i=new w;for(;this.m_segIter.hasNextSegment()&&this.m_numWinds<e;){const r=this.m_segIter.nextSegment();if(o.setCoordsPoint2D(r.getStartXY()),i.setCoordsPoint2D(r.getEndXY()),o.scale(this.m_bufferer.m_rpu),i.scale(this.m_bufferer.m_rpu),tt(o,i))o.x=i.x;else if(et(o,i))i.x=o.x;else{let u=-1,a=-1;const l=this.m_segIter.getPathIndex(),h=this.m_multiPath.getPathStart(l),_=this.m_multiPath.getPathEnd(l);if(u=this.m_segIter.getStartPointIndex()-1,a=this.m_segIter.getEndPointIndex()+1,u<h&&(u=this.m_multiPath.isClosedPath(l)?_-1:-1),a>_-1&&(a=this.m_multiPath.isClosedPath(l)?h:-1),u!==-1){const c=this.m_multiPath.getXY(u);c.scale(this.m_bufferer.m_rpu),et(c,o)&&(o.x=c.x)}if(a!==-1){const c=this.m_multiPath.getXY(a);c.scale(this.m_bufferer.m_rpu),tt(i,c)&&(i.x=c.x)}}this.m_densifiedPoints.length=0;const n=yt(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_curveType,o,i,this.m_bufferer.m_segmentStep,Number.NaN,this.m_bufferer.m_radTolerance,this.m_startAzimuth,this.m_endAzimuth,this.m_densifiedPoints,this.m_currentDensifiedDelta);if(m===0)this.m_bRunningInGnomonic=this.isSegmentBufferInCurrentGnomonic(this.m_densifiedPoints),this.m_bRunningInGnomonic||(this.m_bRunningInGnomonic=this.tryUpdateGnomonic(this.m_densifiedPoints));else if(this.m_bRunningInGnomonic){if(!this.isSegmentBufferInCurrentGnomonic(this.m_densifiedPoints)){this.m_segIter.previousSegment(),this.m_segIter.previousSegment(),this.m_segIter.nextSegment();break}}else if(wt(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_rpu,this.m_densifiedPoints,this.m_bufferer.m_absDistance*this.m_bufferer.m_ellipticToGeodesicMaxRatio,null,null,null)){this.m_segIter.previousSegment(),this.m_segIter.previousSegment(),this.m_segIter.nextSegment();break}if(n===0||ee(o,i)?(this.m_bufferHelper.setEmpty(),this.m_bufferer.bufferPoint2D(o,this.m_bRunningInGnomonic,this.m_bufferHelper),this.m_bNextSegmentCannotJoin=!0):(this.m_bufferHelper.setEmpty(),this.m_bNextSegmentCannotJoin=this.checkAndPrepSegmentForCrossingAzimuthsOrPoleWrap(n,this.m_bufferHelper)),this.m_bNextSegmentCannotJoin){this.m_segIter.previousSegment(),this.m_segIter.hasPreviousSegment()?(this.m_segIter.previousSegment(),this.m_segIter.nextSegment()):this.m_segIter.resetToFirstSegment(),this.m_densified!=null&&this.m_densified.insertPointsFromPoints(this.m_densified.getPathCount()-1,-1,this.m_densifiedPoints,0,this.m_densifiedPoints.length-1,!0);break}this.m_densified!=null&&this.m_densified.insertPointsFromPoints(this.m_densified.getPathCount()-1,-1,this.m_densifiedPoints,0,this.m_densifiedPoints.length-1,!0),s===null&&(s=new N,s.addPathPoint2D(null,0,!0)),this.addJoinAndBufferLeftSide(s),m++}if(this.m_currentDensifiedDelta=[0],m>0){const r=this.m_segIter.getStartPointIndex(),n=this.m_segIter.getPathIndex();for(;m>0;){if(this.m_segIter.previousSegment(),o.setCoordsPoint2D(this.m_multiPath.getXY(this.m_segIter.getStartPointIndex())),i.setCoordsPoint2D(this.m_multiPath.getXY(this.m_segIter.getEndPointIndex())),o.scale(this.m_bufferer.m_rpu),i.scale(this.m_bufferer.m_rpu),this.m_bRunningInGnomonic)if(tt(o,i))o.x=i.x;else if(et(o,i))i.x=o.x;else{let u=-1,a=-1;const l=this.m_segIter.getPathIndex(),h=this.m_multiPath.getPathStart(l),_=this.m_multiPath.getPathEnd(l);if(u=this.m_segIter.getStartPointIndex()-1,a=this.m_segIter.getEndPointIndex()+1,u<h&&(u=this.m_multiPath.isClosedPath(l)?_-1:-1),a>_-1&&(a=this.m_multiPath.isClosedPath(l)?h:-1),u!==-1){const c=this.m_multiPath.getXY(u);c.scale(this.m_bufferer.m_rpu),et(c,o)&&(o.x=c.x)}if(a!==-1){const c=this.m_multiPath.getXY(a);c.scale(this.m_bufferer.m_rpu),tt(i,c)&&(i.x=c.x)}}this.m_densifiedPoints.length=0,yt(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_curveType,i,o,this.m_bufferer.m_segmentStep,Number.NaN,this.m_bufferer.m_radTolerance,this.m_startAzimuth,this.m_endAzimuth,this.m_densifiedPoints,this.m_currentDensifiedDelta),this.addJoinAndBufferLeftSide(s),m--}return o.setCoordsPoint2D(this.m_multiPath.getXY(this.m_segIter.getStartPointIndex())),o.scale(this.m_bufferer.m_rpu),this.m_currentBufferedDelta=L(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_rpu,this.m_bufferer.m_absDistance,o,this.m_lastAzimuth+.5*Math.PI,this.m_lastAzimuth+1.5*Math.PI,this.m_bufferer.m_cornerStep,this.m_bRunningInGnomonic,this.m_currentBufferedDelta,s),this.m_segIter.resetToVertex(r,n),this.m_segIter.nextSegment(),s}return this.m_bNextSegmentCannotJoin=!1,this.m_segIter.nextSegment(),t=this.m_bufferHelper.clone(),t}isSegmentBufferInCurrentGnomonic(t){return this.m_gnomonic!==null&&Gt(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,t,this.m_bufferer.m_absDistance*this.m_bufferer.m_ellipticToGeodesicMaxRatio,this.m_gnomonicCenterRad,this.m_minGnomonicRadius)}tryUpdateGnomonic(t){const s=new w,e=new w,m=[0];return wt(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_rpu,t,this.m_bufferer.m_absDistance*this.m_bufferer.m_ellipticToGeodesicMaxRatio,s,e,m)?(this.m_gnomonicCenterRad.setCoordsPoint2D(e),this.m_minGnomonicRadius=m[0],this.m_gnomonic=V(this.m_bufferer.m_gcs,s),!0):(this.m_gnomonic=null,!1)}checkAndPrepSegmentForCrossingAzimuthsOrPoleWrap(t,s){return this.m_bufferer.checkAndPrepSegmentForCrossingAzimuthsOrPoleWrap(this.m_densifiedPoints,t,this.m_startAzimuth[0],this.m_endAzimuth[0],this.m_bRunningInGnomonic,s)}addJoinAndBufferLeftSide(t){const s=this.m_densifiedPoints[0];let e=Number.NaN,m=this.m_startAzimuth[0]-O;const o=this.m_endAzimuth[0]+O;let i=!1;if(!Number.isNaN(this.m_lastAzimuth)){this.m_lastAzimuth>=this.m_startAzimuth[0]?(e=this.m_lastAzimuth+O,m=e+Math.PI-(this.m_lastAzimuth-this.m_startAzimuth[0])):(e=this.m_lastAzimuth+O,m=e+Math.PI-(A-(this.m_startAzimuth[0]-this.m_lastAzimuth))),i=!(this.m_lastAzimuth>=this.m_startAzimuth[0]&&this.m_lastAzimuth-this.m_startAzimuth[0]<=Math.PI)&&!(this.m_lastAzimuth<this.m_startAzimuth[0]&&this.m_startAzimuth[0]-this.m_lastAzimuth>=Math.PI);let r=!1;if(Math.abs(m-e)<=.5*this.m_bufferer.m_cornerStep&&(i||(r=!0)),r){if(t.removePointFromPath(0,t.getPointCount()-1),!this.m_bRunningInGnomonic){const n=new w;n.setCoordsPoint2D(t.getXY(t.getPointCount()-1)),n.scale(this.m_bufferer.m_rpu),n.x-this.m_currentBufferedDelta<-Math.PI?this.m_currentBufferedDelta-=A:n.x-this.m_currentBufferedDelta>Math.PI&&(this.m_currentBufferedDelta+=A)}m=.5*(m+e)}else if(i){const n=new w;n.setCoordsPoint2D(s),n.scale(1/this.m_bufferer.m_rpu),t.insertPoint2D(0,-1,n)}else L(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_rpu,this.m_bufferer.m_absDistance,this.m_densifiedPoints[0],e,m,this.m_bufferer.m_cornerStep,this.m_bRunningInGnomonic,this.m_currentBufferedDelta,t)}this.m_startAzimuth[0]!==this.m_lastAzimuth&&this.m_numWinds++,lt(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_rpu,this.m_bufferer.m_absDistance,this.m_bufferer.m_curveType,this.m_densifiedPoints,m,o,this.m_bRunningInGnomonic,this.m_currentBufferedDelta,t),this.m_lastAzimuth=this.m_endAzimuth[0]}}class me extends Nt{constructor(t,s){super(t.m_progressTracker),this.m_pointIndex=-1,this.m_bufferer=t,this.m_multiPoint=s,this.m_bNeedsSimplify=!1;const e=new M;this.m_multiPoint.queryEnvelope(e);const m=e.getCenter(),o=m.clone();o.scale(this.m_bufferer.m_rpu),this.m_gnomonic=V(this.m_bufferer.m_gcs,m),this.m_gnomonicCenterRad=o.clone(),this.m_minGnomonicRadius=it(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,o,75/180*Math.PI)}next(){if(this.m_bNeedsSimplify=!1,++this.m_pointIndex===this.m_multiPoint.getPointCount())return null;const t=this.m_multiPoint.getXY(this.m_pointIndex);t.scale(this.m_bufferer.m_rpu),this.m_bRunningInGnomonic=this.isPointBufferInCurrentGnomonic(t),this.m_bRunningInGnomonic||(this.m_bRunningInGnomonic=this.tryUpdateGnomonic(t));const s=new N,e=this.m_bufferer.bufferPoint2D(t,this.m_bRunningInGnomonic,s);return this.m_bNeedsSimplify=e,s}isPointBufferInCurrentGnomonic(t){return this.m_gnomonic!==null&&Mt(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,t,this.m_bufferer.m_absDistance*this.m_bufferer.m_ellipticToGeodesicMaxRatio,this.m_gnomonicCenterRad,this.m_minGnomonicRadius)}tryUpdateGnomonic(t){const s=new w,e=new w,m=[0];return oe(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_rpu,t,this.m_bufferer.m_absDistance*this.m_bufferer.m_ellipticToGeodesicMaxRatio,s,e,m)?(this.m_gnomonicCenterRad.setCoordsPoint2D(e),this.m_minGnomonicRadius=m[0],this.m_gnomonic=V(this.m_bufferer.m_gcs,s),!0):(this.m_gnomonic=null,!1)}}class fe{getOperatorType(){return 10110}supportsCurves(){return!0}accelerateGeometry(t,s,e){return!1}canAccelerateGeometry(t){return!1}executeMany(t,s,e,m,o,i,r,n){if(r){const u=new vt(t,s,e,m,o,!1,i,n);return new U().executeMany(u,s,n)}return new vt(t,s,e,m,o,!1,i,n)}execute(t,s,e,m,o,i,r){const n=new At([t]),u=[m],a=this.executeMany(n,s,e,u,o,!1,i,r).next();return a||Et("geodesic buffer null output"),a}}class vt extends qt{constructor(t,s,e,m,o,i,r,n){super(),this.m_currentUnionEnvelope2D=new M,this.m_index=-1,this.m_dindex=-1,this.m_progressTracker=n,i&&Rt(""),s||ct(""),s.getCoordinateSystemType()===0&&ct(""),this.m_inputGeoms=t,this.m_spatialReference=s,this.m_curveType=e,this.m_distances=m,this.m_convergenceOffset=o,this.m_bOutlineOnly=i,this.m_bUnion=r}next(){let t;for(;t=this.m_inputGeoms.next();)return St(t),this.m_index=this.m_inputGeoms.getGeometryID(),this.m_dindex+1<this.m_distances.length&&this.m_dindex++,this.geodesicBuffer(t,this.m_distances[this.m_dindex]);return null}getGeometryID(){return this.m_index}tock(){return!0}getRank(){return 1}geodesicBuffer(t,s){return ne(t,this.m_spatialReference,this.m_curveType,s,this.m_convergenceOffset,this.m_progressTracker)}}export{fe as OperatorGeodesicBuffer};
