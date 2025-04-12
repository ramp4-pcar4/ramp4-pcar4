import{k as v,A as y,aA as u,D as L,cv as h}from"./main-kpG51UWM.js";import{q as l,p as m,u as g}from"./vec32-D9GsKZ1t.js";import{v as x,b as P,j as S}from"./lineSegment-CcqvCARM.js";import{E as j,U as _,i as b}from"./sphere-BenPORjV.js";import{Y as C}from"./Octree-CJNwbhg4.js";import{m as I}from"./edgeProcessing-CALv8P-b.js";const V=1e3;function T(t,e,o){const s=j(),n=_(s);return l(n,n,t,.5),l(n,n,e,.5),s[3]=m(n,t),g(n,n,o),s}let f=class{constructor(){this._idToComponent=new Map,this._components=new C(t=>t.bounds),this._edges=new C(t=>t.bounds),this._tmpLineSegment=x(),this._tmpP1=u(),this._tmpP2=u(),this._tmpP3=u(),this.remoteClient=null}async fetchCandidates(t,e){await Promise.resolve(),L(e),await this._ensureEdgeLocations(t,e);const o=[];return this._edges.forEachNeighbor(s=>(this._addCandidates(t,s,o),o.length<V),t.bounds),{result:{candidates:o}}}async _ensureEdgeLocations(t,e){const o=[];if(this._components.forEachNeighbor(i=>{if(i.info==null){const{id:r,uid:d}=i;o.push({id:r,uid:d})}return!0},t.bounds),!o.length)return;const s={components:o},n=await this.remoteClient.invoke("fetchAllEdgeLocations",s,e??{});for(const i of n.components)this._setFetchEdgeLocations(i)}async add(t){const e=new p(t.id,t.bounds);return this._idToComponent.set(e.id,e),this._components.add([e]),{result:{}}}async remove(t){const e=this._idToComponent.get(t.id);if(e){const o=[];this._edges.forEachNeighbor(s=>(s.component===e&&o.push(s),!0),e.bounds),this._edges.remove(o),this._components.remove([e]),this._idToComponent.delete(e.id)}return{result:{}}}_setFetchEdgeLocations(t){const e=this._idToComponent.get(t.id);if(e==null||t.uid!==e.uid)return;const o=I.createView(t.locations),s=new Array(o.count),n=u(),i=u();for(let c=0;c<o.count;c++){o.position0.getVec(c,n),o.position1.getVec(c,i);const a=T(n,i,t.origin),w=new k(e,c,a);s[c]=w}this._edges.add(s);const{objectIds:r,origin:d}=t;e.info={locations:o,objectIds:r,origin:d}}_addCandidates(t,e,o){const{info:s}=e.component,{origin:n,objectIds:i}=s,r=s.locations,d=r.position0.getVec(e.index,this._tmpP1),c=r.position1.getVec(e.index,this._tmpP2);g(d,d,n),g(c,c,n);const a=i[r.componentIndex.get(e.index)];this._addEdgeCandidate(t,a,d,c,o),E(t,a,d,o),E(t,a,c,o)}_addEdgeCandidate(t,e,o,s,n){if(!t.returnEdge)return;const i=_(t.bounds),r=P(o,s,this._tmpLineSegment),d=S(r,i,this._tmpP3);b(t.bounds,d)&&n.push({type:"edge",objectId:e,target:h(d),distance:m(i,d),start:h(o),end:h(s)})}};f=v([y("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],f);const A=f;function E(t,e,o,s){if(!t.returnVertex||!b(t.bounds,o))return;const n=_(t.bounds);s.push({type:"vertex",objectId:e,target:h(o),distance:m(n,o)})}class p{constructor(e,o){this.id=e,this.bounds=o,this.info=null,this.uid=++p.uid}}p.uid=0;class k{constructor(e,o,s){this.component=e,this.index=o,this.bounds=s}}export{A as default};
