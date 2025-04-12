import{bl as B,aK as F,aN as W,V as X,H as S,J as q,N as Y}from"./main-Cv8ITM2j.js";import{s as Z,r as D}from"./Cyclical-BxPjl8eb.js";import{f as G,o as b}from"./quantityUtils-BCfns9yq.js";import{j as f}from"./elevationInfoUtils-B5KhJwhK.js";import{p as P,N as g,u as _,s as l,o as $,b as C,n as z,q as R,M as A,J as ee,r as te,I as M,e as j,j as ie,t as re,i as se,E as oe}from"./hitTestSelectUtils-CmkBTuwe.js";import{m as J,b as K,e as Q,j as ne,p as ae,d as pe,_ as he}from"./vec2-ChnYg_BJ.js";import{s as u,r as de,g as le,p as L,d as ce,o as me,h as ge}from"./RouteLayerInteraction-BfLxFOqE.js";import{u as U}from"./geodesicLengthMeasurementUtils-B420jbLb.js";import{n as I}from"./vec2f64-DohEyf3f.js";import{q as fe,c as ue,o as xe}from"./vec32-BVUDM8s2.js";import"./preload-helper-ExcqyqRp.js";import"./ElevationInfo-CFzKWoUt.js";import"./lengthUtils-BjSb-BVP.js";import"./projectVectorToVector-CsFzTYwi.js";import"./projectBuffer-C3I4aBT7.js";import"./projectPointToVector-X6b2qKyo.js";import"./projection-DALJEM5z.js";import"./geodesicUtils-DhntU3w2.js";import"./TimeExtent-CmJt7e8T.js";import"./Query-CsgMbHO2.js";import"./Field-DCT5wy9q.js";import"./fieldType-DVp6Pqrh.js";import"./MapView-DJYiaNSN.js";import"./CollectionFlattener-C24Vb2Tx.js";import"./workers-BXKSmjkC.js";import"./Queue-CEzF52XX.js";import"./intl-Dh2ocpt9.js";import"./TileInfo-Cx0-ZIPC.js";import"./TileKey-DZd6gJy7.js";import"./themeUtils-0nC5BEdf.js";import"./uuid-Cl5lrJ4c.js";import"./UpdatingHandles-1YIVLwGt.js";import"./signal-B1irWiNX.js";import"./Map-Da4Ji3Et.js";import"./Basemap-dw02n_0u.js";import"./loadAll-JjfmhABF.js";import"./PortalItem-auRHFq7R.js";import"./writeUtils-CmJHem-D.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-B2F2AQse.js";import"./common-DQOJ18NT.js";import"./TablesMixin-AYgJ04X4.js";import"./Layer-CVn99KK7.js";import"./GraphicsCollection-Di4jznR1.js";import"./HeightModelInfo-BYKt_3WI.js";import"./timeZoneUtils-DBnpKbsS.js";import"./ReactiveMap-CZlL85xT.js";import"./HighlightDefaults-BXnes3NX.js";import"./ViewingMode-HRfKv6NR.js";import"./Tile-BB7XLQDh.js";import"./TileKey-MVyPksrw.js";import"./quickselect-QQC62dOK.js";import"./normalizeUtils-BN5Ve0-A.js";import"./normalizeUtilsCommon-CCm4qTP6.js";import"./utils-DI5eYgHm.js";import"./utils-dx-55XQh.js";import"./mat3-CruJiiUv.js";import"./vec2f32-BbH2jxlN.js";import"./Scheduler-BnfdNYCE.js";import"./unitBezier-B1N-tmtC.js";import"./definitions-CvpHWbfn.js";import"./enums-Dk3osxpS.js";import"./Texture-DzjEWJjb.js";import"./getDataTypeBytes-DflDeYgv.js";import"./imageUtils-pPSAwsFG.js";import"./capabilities-Du2wdNlQ.js";import"./Version-Dt037r9d.js";import"./ColorBackground-C5gq9qdr.js";import"./vec42-CKs01hkn.js";import"./vec4f64-o2zAXfmz.js";import"./plane-BsuS4rF2.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-aQ5IuZRd.js";import"./sphere-CdKyLmYN.js";import"./GraphicsLayer-Dg-ZcwMC.js";import"./BlendLayer-BlUOZnIK.js";import"./layerContainerType-C5CzMsLd.js";import"./jsonUtils-CX527-Zb.js";import"./parser-OujP_0wM.js";import"./ScaleRangeLayer-DD2_yhdp.js";import"./Stop-D6fZIbt7.js";import"./networkEnums-tZn9-z21.js";import"./geometryEngine-MGai0zRb.js";import"./geometryEngineBase-C-gsyNi-.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./hydrated-Dwvytl73.js";class k{constructor(i,e){this.view=i,this.options=e,this.squaredShortLineThreshold=P.shortLineThreshold*P.shortLineThreshold}snap(i,e){return e.vertexHandle!=null?e.vertexHandle.type!=="vertex"?[]:this.snapExistingVertex(i,e):this.snapNewVertex(i,e)}edgeExceedsShortLineThreshold(i,e){return this.exceedsShortLineThreshold(g(i.leftVertex.pos,this.view,e),g(i.rightVertex.pos,this.view,e),e)}exceedsShortLineThreshold(i,e,{spatialReference:t}){return this.squaredShortLineThreshold===0||_(u(e,t,f,this.view),u(i,t,f,this.view))>this.squaredShortLineThreshold}isVertical(i,e,{spatialReference:t}){const r=B(t);return J(l(i),l(e))*r<P.verticalLineThresholdMeters}squaredProximityThreshold(i){return i==="touch"?this._squaredTouchProximityThreshold:this._squaredMouseProximityThreshold}get _squaredMouseProximityThreshold(){return this.options.distance*this.options.distance}get _squaredTouchProximityThreshold(){const{distance:i,touchSensitivityMultiplier:e}=this.options,t=i*e;return t*t}}class ve extends k{snapNewVertex(i,e){const t=e.editGeometryOperations.data.components[0],r=t.edges.length,s=[];if(r<1)return s;const{spatialReference:o}=e,a=u(i,o,f,this.view),{view:n}=this,p=t.edges[r-1];let h=p;do{if(this.edgeExceedsShortLineThreshold(h,e)){const m=$(h,n,e);this._processCandidateProposal(m.left,m.right,i,a,e,s)}h=h.leftVertex.leftEdge}while(h&&h!==p);return s}snapExistingVertex(i,e){const t=[],r=e.vertexHandle,s=r.component;if(s.edges.length<2)return t;const{view:o}=this,{spatialReference:a}=e,n=u(i,a,f,o),p=r.leftEdge,h=r.rightEdge;p&&h&&this.edgeExceedsShortLineThreshold(p,e)&&this.edgeExceedsShortLineThreshold(h,e)&&this._processCandidateProposal(g(p.leftVertex.pos,o,e),g(h.rightVertex.pos,o,e),i,n,e,t);const m=s.edges[0];let c=m;do{if(c!==r.leftEdge&&c!==r.rightEdge&&this.edgeExceedsShortLineThreshold(c,e)){const x=$(c,o,e);this._processCandidateProposal(x.left,x.right,i,n,e,t)}c=c.rightVertex.rightEdge}while(c&&c!==m);return t}_processCandidateProposal(i,e,t,r,s,o){const{spatialReference:a,pointer:n}=s,p=F();Ee(p,i,e,t,s);const h=C(z(p));_(r,u(h,a,f,this.view))<this.squaredProximityThreshold(n)&&o.push(new de({lineStart:i,lineEnd:e,targetPoint:h,isDraped:s.elevationInfo?.mode==="on-the-ground"}))}}function Ee(d,i,e,t,r){we(d,i,e,t,r)||Ve(d,t,i,e)}function we(d,i,e,t,{spatialReference:r}){const s=R(i,e,r,r);if(s==null)return!1;const o=R(e,t,r,r);if(o==null)return!1;const a=U(e,t,r);if(a==null)return!1;const n=Math.abs(Z.shortestSignedDiff(s,o))>Math.PI/2?D.normalize(s+Math.PI):s;return A(d,e,r,G(a,"meters"),b(n,"radians","geographic"),"geodesic"),d[2]=t[2],!0}function Ve(d,i,e,t){ee(i,{start:e,end:t,type:te.LINE},d),d[2]=i[2]}let Pe=class extends k{snapNewVertex(i,e){const t=e.editGeometryOperations.data.components[0],r=t.edges.length,s=t.vertices.length,o=[];if(r<2)return o;const{view:a}=this,n=u(i,e.spatialReference,f,a),p=g(t.vertices[s-1].pos,a,e),h=g(t.vertices[0].pos,a,e),m=t.edges[r-1];let c=m;do{if(this.edgeExceedsShortLineThreshold(c,e)){const x=$(c,a,e);this._checkEdgeForParallelLines(x,p,i,n,e,o),this._checkEdgeForParallelLines(x,h,i,n,e,o)}c=c.leftVertex.leftEdge}while(c&&c!==m);return o}snapExistingVertex(i,e){const t=[],r=e.vertexHandle,s=r.component;if(s.edges.length<3)return t;const{view:o}=this,a=u(i,e.spatialReference,f,o),n=r.leftEdge,p=r.rightEdge,h=s.vertices[0],m=g(h.pos,o,e),c=s.vertices.length,x=s.vertices[c-1],w=g(x.pos,o,e),y=s.edges[0];let v=y;do{if(v!==n&&v!==p&&this.edgeExceedsShortLineThreshold(v,e)){const T=$(v,o,e);n&&this._checkEdgeForParallelLines(T,g(n.leftVertex.pos,o,e),i,a,e,t),p&&this._checkEdgeForParallelLines(T,g(p.rightVertex.pos,o,e),i,a,e,t),r===h?this._checkEdgeForParallelLines(T,w,i,a,e,t):r===x&&this._checkEdgeForParallelLines(T,m,i,a,e,t)}v=v.rightVertex.rightEdge}while(v&&v!==y);return t}_checkEdgeForParallelLines(i,e,t,r,s,o){const a=i.left,n=i.right;if(M(E,l(e),l(a),l(n)),K(E,l(e))<P.parallelLineThreshold)return;M(E,l(t),l(a),l(n),l(e));const{spatialReference:p,pointer:h}=s,m=C(j(E[0],E[1],t[2]));if(_(r,u(m,p,f,this.view))<this.squaredProximityThreshold(h)){if(this.isVertical(m,e,s)||this.isVertical(a,n,s)||_e(i,o))return;o.push(new le({referenceLine:i,lineStart:e,targetPoint:m,isDraped:s.elevationInfo?.mode==="on-the-ground"}))}}};function _e(d,i){const e=d.left,t=d.right;for(const r of i)if(M(E,l(t),l(r.constraint.start),l(r.constraint.end),l(e)),K(E,l(t))<P.parallelLineThreshold)return r.addReferenceLine(d),!0;return!1}const E=I();class ye extends k{snapNewVertex(i,e){const t=e.editGeometryOperations.data.components[0],r=[];if(t.vertices.length<2)return r;const{view:s}=this,o=u(i,e.spatialReference,f,s),a=t.vertices.at(-1);this._checkForSnappingCandidate(L.LastVertex,r,a.leftEdge,a,a.leftEdge.leftVertex,i,o,e);const n=t.vertices[0];return this._checkForSnappingCandidate(L.FirstVertex,r,n.rightEdge,n,n.rightEdge.rightVertex,i,o,e),r}snapExistingVertex(i,e){const t=[],r=e.vertexHandle;if(r.component.vertices.length<3)return t;const{view:s}=this,o=u(i,e.spatialReference,f,s),a=r.leftEdge,n=r.rightEdge;if(a?.leftVertex.leftEdge){const p=a.leftVertex.leftEdge;this._checkForSnappingCandidate(L.ExistingEdge,t,p,p.rightVertex,p.leftVertex,i,o,e)}if(n?.rightVertex.rightEdge){const p=n.rightVertex.rightEdge;this._checkForSnappingCandidate(L.ExistingEdge,t,p,p.leftVertex,p.rightVertex,i,o,e)}return t}_checkForSnappingCandidate(i,e,t,r,s,o,a,n){if(!this.edgeExceedsShortLineThreshold(t,n))return;const p=this.view,h=g(r.pos,p,n),m=g(s.pos,p,n);Te(O,m,h,o,n),this._checkForSnappingCandidateAlongProjectedRay(i,e,m,h,O,o,a,n)}_checkForSnappingCandidateAlongProjectedRay(i,e,t,r,s,o,a,n){const{spatialReference:p,pointer:h}=n,m=Q(N,l(o),l(r)),c=ne(s,m)/ae(s),x=pe(N,l(r),s,c),w=C(j(x[0],x[1],o[2]));if(_(a,u(w,p,f,this.view))>this.squaredProximityThreshold(h)||this.isVertical(w,r,n)||this.isVertical(r,t,n))return;const y=fe(F(),r,s,Math.sign(c));e.push(new ce({targetPoint:w,constraint:new ie(r,z(y)),previousVertex:t,otherVertex:r,otherVertexType:me.CENTER,selfSnappingType:i,isDraped:n.elevationInfo?.mode==="on-the-ground"}))}}function Te(d,i,e,t,r){Se(d,i,e,t,r)||Le(d,i,e)}function Se(d,i,e,t,{spatialReference:r}){const s=R(i,e,r,r);if(s==null)return!1;const o=R(e,t,r,r);if(o==null)return!1;const a=Math.sign(D.shortestSignedDiff(s,o))*Math.PI*.5,n=b(s+a,"radians","geographic"),p=F(),h=U(e,t,r);return h!=null&&(A(p,e,r,G(h,"meters"),n,"geodesic"),ue(d,p,e),!0)}function Le(d,i,e){const t=Q(N,l(e),l(i));xe(d,t[1],-t[0],0)}const N=I(),O=F();let $e=class extends k{snapNewVertex(i,e){const t=e.editGeometryOperations.data.components[0],r=[],s=t.vertices.length;if(e.editGeometryOperations.data.type!=="polygon"||s<2)return r;const{view:o}=this,a=t.vertices[0],n=t.vertices[s-1],p=g(a.pos,o,e),h=g(n.pos,o,e);return this._processCandidateProposal(p,h,i,e,r),r}snapExistingVertex(i,e){const t=[],r=e.vertexHandle,s=r.component;if(s.edges.length<2||e.editGeometryOperations.data.type==="polyline"&&(r.index===0||r.index===s.vertices.length-1))return t;const{view:o}=this,a=g(r.leftEdge.leftVertex.pos,o,e),n=g(r.rightEdge.rightVertex.pos,o,e);return this._processCandidateProposal(a,n,i,e,t),t}_processCandidateProposal(i,e,t,r,s){if(!this.exceedsShortLineThreshold(i,e,r))return;const o=he(H,l(i),l(e),.5),a=.5*J(l(i),l(e)),n=re(H,l(t),o,a),p=C(j(n[0],n[1],t[2])),{spatialReference:h,pointer:m}=r,c=u(t,h,f,this.view);if(_(c,u(p,h,f,this.view))<this.squaredProximityThreshold(m)){if(this.isVertical(i,p,r)||this.isVertical(p,e,r))return;s.push(new ge({targetPoint:p,point1:i,point2:e,isDraped:r.elevationInfo?.mode==="on-the-ground"}))}}};const H=I();let V=class extends W{constructor(d){super(d),this.updating=!1,this._snappers=new X,this._domain=se.SELF}initialize(){this._snappers.push(new Pe(this.view,this.options),new ve(this.view,this.options),new ye(this.view,this.options),new $e(this.view,this.options))}set options(d){this._set("options",d);for(const i of this._snappers)i.options=d}async fetchCandidates(d,i,e){if(!(i&this._domain&&this.options.effectiveSelfEnabled))return[];const t=[];for(const r of this._snappers.items)for(const s of r.snap(d,e))t.push(s);return oe(d,t),t}};S([q({readOnly:!0})],V.prototype,"updating",void 0),S([q({constructOnly:!0})],V.prototype,"view",void 0),S([q()],V.prototype,"options",null),V=S([Y("esri.views.interactive.snapping.SelfSnappingEngine")],V);export{V as SelfSnappingEngine};
