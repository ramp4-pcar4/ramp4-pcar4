import{V as $,bz as fe,s as Z,aM as Ie,aH as xe,n as E,bx as H,ax as j,T as V,U as he,u as Ee,bC as de,aQ as be,dW as _e,D as b,G as w,K as Se}from"./main-0iYVBzEC.js";import{S as K,E as Ae,D as Re,C as ze,o as Ge,g as Pe,a as Fe,b as Oe,c as Be,_ as Ue,P as je,A as Qe,v as We,d as R,e as $e,f as ee,u as Le,i as we}from"./KnowledgeGraphSublayer-DB0n8yOl.js";import{S as He}from"./MultiOriginJSONSupport-CT5Jylvr.js";import{f as Ve}from"./Layer-CT6QkP5X.js";import{s as q}from"./featureConversionUtils-DvLw7E36.js";import{_ as M,I as te,t as ae,S as T,o as Ke}from"./constants-5AlnYBiV.js";import{p as qe}from"./BlendLayer-Cnud9ma7.js";import{b as Ye}from"./OperationalLayer-DXBCVaTG.js";import{t as Je}from"./ScaleRangeLayer-BqwzcAb5.js";import{y as Xe}from"./commonProperties-D3-4w9vb.js";import{I as Ze}from"./knowledgeGraphService-mp2woiEQ.js";var Y;(function(e){e.MULTIPLIER="multiplier",e.ABSOLUTE="absolute-value"})(Y||(Y={}));let m=class extends Ye(qe(Je(He(Ve)))){constructor(e){if(super(e),this.url=null,this.dataPreloadedInLocalCache=!1,this.initializationLinkChartConfig=null,this.membershipModified=!0,this._currentLinkChartConfig={layoutMode:"organic-standard"},this._graphTypeLookup=new Map,this.dataManager=null,this.knowledgeGraph=null,this.layers=new($.ofType(K)),this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map,this.linkChartExtent=new fe({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7}),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.operationalLayerType="LinkChartLayer",this.sublayerIdsCache=new Map,this.tables=new($.ofType(K)),this.type="link-chart",this.chronologicalAuxiliaryGraphics=null,this._originalInclusionList=e?.initializationInclusionModeDefinition,e?.dataPreloadedInLocalCache&&!e?.initializationInclusionModeDefinition)throw new Z("knowledge-graph:linkchart-layer-constructor","If creating a link chart composite layer and configured that data is already loaded in the cache, you must specify an inclusion list so the Composite Layer knows what records belong to it");this.addHandles(Ie(()=>this.layers.concat(this.tables),(a,i)=>this._handleSublayersChange(a,i),xe))}normalizeCtorArgs(e){if(!e)return{};const{url:a,title:i,dataPreloadedInLocalCache:n,initializationLinkChartConfig:t}=e;return{url:a,title:i,dataPreloadedInLocalCache:n,initializationLinkChartConfig:t}}_initializeLayerProperties(e){if(!this.title&&this.url){const o=this.url.split("/");this.title=o[o.length-2]}const a=new Set;let i=[],n=[];if(e.inclusionModeDefinition&&(!e.inclusionModeDefinition.namedTypeDefinitions||e.inclusionModeDefinition.namedTypeDefinitions.size<1))throw new Z("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined");e.inclusionModeDefinition?.generateAllSublayers?(i=e.knowledgeGraph.dataModel.entityTypes??[],n=e.knowledgeGraph.dataModel.relationshipTypes??[]):e.inclusionModeDefinition?.namedTypeDefinitions&&e.inclusionModeDefinition?.namedTypeDefinitions.size>0?e.inclusionModeDefinition?.namedTypeDefinitions.forEach((o,r)=>{const y=this._graphTypeLookup.get(r);if(!y)return E.getLogger(this).warn(`A named type, ${r}, was in the inclusion list that wasn't in the data model and will be removed`),void e.inclusionModeDefinition?.namedTypeDefinitions.delete(r);y.type==="relationship"?a.has(r)||(a.add(r),n.push(y)):y.type==="entity"?a.has(r)||(a.add(r),i.push(y)):(E.getLogger(this).warn(`A named type, ${r}, was in the inclusion list that wasn't properly modeled and will be removed`),e.inclusionModeDefinition?.namedTypeDefinitions.delete(r))}):(i=e.knowledgeGraph.dataModel.entityTypes??[],n=e.knowledgeGraph.dataModel.relationshipTypes??[]);const t=new Ae({knowledgeGraph:e.knowledgeGraph,inclusionModeDefinition:e.inclusionModeDefinition});this.knowledgeGraph=e.knowledgeGraph,this.memberEntityTypes=i,this.memberRelationshipTypes=n,this.dataManager=t}load(e){const a=async()=>{const i=[],n=[];this.loadLayerAssumingLocalCache(),this._layersLoadedFromAuthoritativeItem()||await we(this),this.dataManager.inclusionModeDefinition&&(this.dataManager.inclusionModeDefinition.generateAllSublayers=!1),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach(t=>{t.useAllData=!1}),await this._initializeDiagram(),this.layers.forEach(t=>{n.push(t.refreshCachedQueryEngine()),i.push(new Promise(o=>{t.on("layerview-create",()=>{o(null)})}))}),this.tables.forEach(t=>{n.push(t.refreshCachedQueryEngine())}),await Promise.all(n)};return this.addResolvingPromise(new Promise(i=>{Ze(this.url).then(async n=>{n.dataModel.entityTypes?.forEach(o=>{o.name&&this._graphTypeLookup.set(o.name,o)}),n.dataModel.relationshipTypes?.forEach(o=>{o.name&&this._graphTypeLookup.set(o.name,o)});const t=this.linkChart?.linkChartProperties;if(t?.originIdOf("entitiesUrl")===H.LINK_CHART&&(this.membershipModified=!1,this._originalInclusionList=await Re.fetchAndConvertSerializedLinkChart({entitiesUrl:t?.entitiesUrl,relationshipsUrl:t?.relationshipsUrl}),this._alignLayersDataModelAndInclusionDefinition(n.dataModel),this.initializationLinkChartConfig={layoutSettings:t?.layoutSettings??void 0,layoutMode:ze(t.layoutType)}),this._initializeLayerProperties({knowledgeGraph:n,inclusionModeDefinition:this._originalInclusionList}),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.size||(this.dataManager.inclusionModeDefinition={generateAllSublayers:!1,namedTypeDefinitions:new Map},this.dataManager.knowledgeGraph.dataModel.entityTypes?.forEach(o=>{o.name&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(o.name,{useAllData:!0})}),this.dataManager.knowledgeGraph.dataModel.relationshipTypes?.forEach(o=>{o.name&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(o.name,{useAllData:!0})})),this.dataPreloadedInLocalCache){const o=Ge.getInstance();for(const[r,y]of this.dataManager.inclusionModeDefinition?.namedTypeDefinitions??[])for(const u of y.members?.values()??[]){const g=o.readFromStoreById(`${r}__${u.id}`);g&&j(this.dataManager.sublayerCaches,r,()=>new Map).set(u.id,g)}await a()}else{const o=this.initializationLinkChartConfig?.layoutMode==="geographic-organic-standard";this.addResolvingPromise(this.dataManager.refreshCacheContent(void 0,!1,o,!0).then(async()=>{V(e),await a()}))}i(null)})})),Promise.resolve(this)}set initializationInclusionModeDefinition(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("initializationInclusionModeDefinition",e):E.getLogger(this).error("#initializationInclusionModeDefinition","initializationInclusionModeDefinition cannot be changed after the layer is loaded.")}get linkChart(){return this.parent}async addRecords(e,a){let i=[];a?.cascadeAddRelationshipEndNodes&&this.dataManager.knowledgeGraph.dataModel&&(i=await Pe(e,this.dataManager.knowledgeGraph));const n=e.concat(i).filter(t=>!this.sublayerIdsCache.get(t.typeName)?.has(t.id));n.length>0&&(this.membershipModified=!0),await this._handleNewRecords(n,a)}async removeRecords(e,{cascadeRemoveRelationships:a=!0,recalculateLayout:i=!1,overrideMembershipCheck:n=!1}={cascadeRemoveRelationships:!0,recalculateLayout:!1,overrideMembershipCheck:!1}){let t=[];for(const r of e)(n||this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(r.typeName)?.useAllData===!1&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(r.typeName)?.members?.has(r.id))&&t.push(r);if(a){const r=new Set,y=[];for(const u of t)if(this.dataManager.nodeConnectionsLookup.has(u.id))for(const g of this.dataManager.nodeConnectionsLookup.get(u.id))r.add(g);for(const u of r)if(this.dataManager.memberIdTypeLookup.has(u))for(const g of this.dataManager.memberIdTypeLookup.get(u))this.dataManager.relationshipTypeNames.has(g)&&y.push({id:u,typeName:g});t=t.concat(y)}this.dataManager.removeFromLayer(t);for(const r of t)this.sublayerIdsCache.get(r.typeName)?.delete(r.id),this.dataManager.relationshipTypeNames.has(r.typeName)?this.relationshipLinkChartDiagramLookup.delete(r.id):this.entityLinkChartDiagramLookup.delete(r.id);i&&await this._calculateLayoutWithSublayerTimeInfo(this._currentLinkChartConfig.layoutMode,{layoutSettings:this._currentLinkChartConfig.layoutSettings}),t.length>0&&(this.membershipModified=!0);const o=[];return this.layers.forEach(r=>{o.push(r.refreshCachedQueryEngine())}),await Promise.all(o),this._refreshNamedTypes(),t}async expand(e,a){let i=[];try{const n=await this.dataManager.getConnectedRecordIds(e,a?.relationshipTypeNames,a);i=n.filter(t=>!this.sublayerIdsCache.get(t.typeName)?.has(t.id)),await this._handleNewRecords(n,a),n.length>0&&(this.membershipModified=!0),V(a?.signal)}catch(n){throw he(n)&&i.length>0&&this.removeRecords(i,{overrideMembershipCheck:!0}),n}return{records:i}}loadLayerAssumingLocalCache(){const e=[...this.memberRelationshipTypes,...this.memberEntityTypes];this.originIdOf("layers")===H.DEFAULTS?this._createSublayers(e,this.layers,a=>!!a.geometryType):this._updateSublayers(e,this.layers),this.originIdOf("tables")===H.DEFAULTS?this._createSublayers(e,this.tables,a=>!a.geometryType):this._updateSublayers(e,this.tables),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((a,i)=>{const n=j(this.sublayerIdsCache,i,()=>new Set);a.members?.forEach(({id:t,linkChartLocation:o})=>{if(n.add(t),o){const r="coords"in o&&"lengths"in o?o:q(o);this.dataManager.relationshipTypeNames.has(i)?this.relationshipLinkChartDiagramLookup.set(t,r):this.entityLinkChartDiagramLookup.set(t,r)}})})}async calculateLinkChartLayout(e="organic-standard",a){const i=[],n=[],t=[];this.dataManager.sublayerCaches.forEach((s,h)=>{this.dataManager.entityTypeNames.has(h)?s.forEach(l=>{i.push({typeName:h,feature:l})}):this.dataManager.relationshipTypeNames.has(h)&&s.forEach(l=>{n.push({typeName:h,feature:l})})}),this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map;const o=new Map,r=new Map,y=new Map,u=new Map,g=new Uint8Array(i.length),L=new Float64Array(i.length),f=new Float64Array(i.length),U=new Float64Array(i.length),S=new Float64Array(i.length),C=new Uint32Array(n.length),ie=new Uint32Array(n.length),ue=new Float64Array(n.length),ce=new Float64Array(n.length),p=[],Me="organic-standard",x=new fe({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7});let F,pe="organic-standard",c=0,D=0;const Ce=Fe.apply;switch(pe=e==="geographic-organic-standard"?Me:e,pe){case"organic-standard":F=We.apply;break;case"organic-community":F=Qe.apply;break;case"hierarchical-bottom-to-top":F=je.apply;break;case"radial-root-centric":F=Ue.apply;break;case"tree-left-to-right":F=Be.apply;break;default:F=Oe.apply}let ne=!1;i.forEach(({typeName:s,feature:h})=>{if(e!=="chronological-mono-timeline"&&e!=="chronological-multi-timeline"&&a?.lockedNodeLocations?.has(h.attributes[M])){e==="geographic-organic-standard"&&this.dataManager.geographicLookup.has(s)?g[c]=R.IsGeographic:g[c]=R.None;const l=a.lockedNodeLocations.get(h.attributes[M]);L[c]=l.x,f[c]=l.y}else if(e==="geographic-organic-standard"&&this.dataManager.geographicLookup.has(s)){g[c]=R.IsGeographic;let l=null;const N=h.attributes[this.dataManager.geographicLookup.get(s).name];switch(this.dataManager.geographicLookup.get(s)?.geometryType){case"esriGeometryPoint":L[c]=N?.x,f[c]=N?.y;break;case"esriGeometryPolygon":l=N?.centroid,l?.x!=null&&l?.y!=null?(L[c]=l.x,f[c]=l.y):g[c]=R.IsMovable;break;case"esriGeometryPolyline":case"esriGeometryMultipoint":l=N?.extent?.center,l?.x!=null&&l?.y!=null?(L[c]=l.x,f[c]=l.y):g[c]=R.IsMovable;break;default:g[c]=R.IsMovable}(L[c]==null||f[c]==null||Number.isNaN(L[c])||Number.isNaN(f[c]))&&(g[c]=R.IsMovable,L[c]=0,f[c]=0)}else if(e==="chronological-mono-timeline"||e==="chronological-multi-timeline"){!ne&&a?.lockedNodeLocations?.has(h.attributes[M])&&(ne=!0);const l=a?.timeInfoByTypeName?.get(s),N=l?.startField,z=N&&l?.startField?h.attributes[N]:null;U[c]=z?new Date(z).getTime():NaN;const k=l?.endField,I=k&&l?.endField?h.attributes[k]:null;S[c]=I?new Date(I).getTime():NaN,L[c]=0,f[c]=0,g[c]=R.IsMovable}else g[c]=R.IsMovable,L[c]=0,f[c]=0;u.set(h.attributes[M],c),p[c]={feature:h,typeName:s},c++}),ne&&E.getLogger(this).warn("Locked node locations are not supported for chronological layout at this time.  Requested node locations were ignored");let ye=!1;const oe=new Map;n.forEach(s=>{const h=s.feature.attributes[te],l=s.feature.attributes[ae],N=u.get(h),z=u.get(l),k=a?.timeInfoByTypeName?.get(s.typeName),I=a?.timeInfoByTypeName?k?.startField:null,A=I?s.feature.attributes[I]:null,X=k?.endField,O=X?s.feature.attributes[X]:null;if(N!==void 0&&z!==void 0){let G=h+"-"+l;e!=="chronological-mono-timeline"&&e!=="chronological-multi-timeline"||(G=G+"-"+A+"-"+O);const W=oe.get(G);W?.has(s.typeName)||(C[D]=N,ie[D]=z,e!=="chronological-mono-timeline"&&e!=="chronological-multi-timeline"||(ue[D]=A?new Date(A).getTime():NaN,ce[D]=O?new Date(O).getTime():NaN),W===void 0?oe.set(G,new Map([[s.typeName,D]])):W.set(s.typeName,D),D++),t.push(s)}else ye=!0,this.relationshipLinkChartDiagramLookup.set(h,null)}),ye&&E.getLogger(this).warn("A relationship is a member of this layer that has either origin or destination entity nodes that are not members. The diagram geometry will be set to null");const ke=this._validateOrganicLayoutSettings(e,a?.layoutSettings?.organicLayoutSettings),se=this._convertValidatedOrganicSettingsToCalculationSettings(ke);await $e();let Q=ee.Error,v=null;if(e==="chronological-mono-timeline"||e==="chronological-multi-timeline"){let s;({status:Q,links:v,graphics:s}=Ce(()=>a?.signal?.aborted??!1,g,L,f,U,S,C.subarray(0,D),ie.subarray(0,D),ue.subarray(0,D),ce.subarray(0,D),e==="chronological-multi-timeline",a?.layoutSettings?.chronologicalLayoutSettings)),Q===ee.Success&&(this.chronologicalAuxiliaryGraphics=s)}else({status:Q,links:v}=F(()=>a?.signal?.aborted??!1,g,L,f,C.subarray(0,D),ie.subarray(0,D),se.computationBudgetTime,se.idealEdgeLengthMultiplier,se.repulsionRadiusMultiplier));if(V(a?.signal),Q===ee.Error)throw new Z("knowledge-graph:layout-failed","Attempting to arrange the records in the specified layout failed");if(Q===ee.Canceled)throw Ee();for(let s=0;s<p.length;s++){if(f[s]>84.9999?f[s]=84.9999:f[s]<-84.9999&&(f[s]=-84.9999),L[s]>179.9999?L[s]=179.9999:L[s]<-179.9999&&(L[s]=-179.9999),p[s].feature.attributes[T]=new de(L[s],f[s]),o.has(p[s].typeName))o.get(p[s].typeName)?.set(p[s].feature.attributes[M],p[s].feature);else{const N=new Map;N.set(p[s].feature.attributes[M],p[s].feature),o.set(p[s].typeName,N)}y.set(p[s].feature.attributes[M],p[s].feature);const h=q(p[s].feature.attributes[T]);this.entityLinkChartDiagramLookup.set(p[s].feature.attributes[M],p[s].feature.attributes[T]?h:null);const l=j(this.dataManager.inclusionModeDefinition.namedTypeDefinitions,p[s].typeName,()=>({useAllData:!1,members:new Map}));j(l.members,p[s].feature.attributes[M],()=>({id:p[s].feature.attributes[M],linkChartLocation:void 0})).linkChartLocation=p[s].feature.attributes[T],p[s].feature.attributes[T].x<x.xmin&&(x.xmin=p[s].feature.attributes[T].x),p[s].feature.attributes[T].x>x.xmax&&(x.xmax=p[s].feature.attributes[T].x),p[s].feature.attributes[T].y<x.ymin&&(x.ymin=p[s].feature.attributes[T].y),p[s].feature.attributes[T].y>x.ymax&&(x.ymax=p[s].feature.attributes[T].y)}if(this.linkChartExtent.xmin=x.xmin,this.linkChartExtent.xmax=x.xmax,this.linkChartExtent.ymin=x.ymin,this.linkChartExtent.ymax=x.ymax,!v)throw new Z("knowledge-graph:layout-failed","Attempting to retrieve link geometry from diagram engine failed");const J=new Map,re=new Map,le=new Map,ge=new Set;for(let s=0;s<t.length;s++){const h=[],l=t[s],N=l.feature.attributes[te],z=l.feature.attributes[ae];let k=N+"-"+z;if(e==="chronological-mono-timeline"||e==="chronological-multi-timeline"){const d=a?.timeInfoByTypeName?.get(l.typeName),_=a?.timeInfoByTypeName?d?.startField:null,P=_?l.feature.attributes[_]:null,B=d?.endField;k+="-"+P+"-"+(B?l.feature.attributes[B]:null)}const I=oe.get(k).get(l.typeName),A=I===0?0:v?.vertexEndIndex[I-1];if(!ge.has(I)){if(ge.add(I),v.types[I]===Le.Recursive){const d=[v.vertices[2*A],v.vertices[2*A+1]],_=[v.vertices[2*(A+1)],v.vertices[2*(A+1)+1]],P=[.5*(d[0]+_[0]),.5*(d[1]+_[1])],B=[P[0]-d[0],P[1]-d[1]],De=[P[0]+B[1],P[1]-B[0]],ve=[P[0]-B[1],P[1]+B[0]];h.push(d),h.push(De),h.push(_),h.push(ve),h.push(d)}else{if(v.types[I]!==Le.Regular){E.getLogger(this).warn("A relationship generated an unsupported link geometry type.  It will not be rendered");continue}for(let d=A;d<v.vertexEndIndex[I];d++)h.push([v.vertices[2*d],v.vertices[2*d+1]])}if(e!=="chronological-mono-timeline"&&e!=="chronological-multi-timeline"){const d=p[u.get(N)]?.feature.attributes[T],_=p[u.get(z)]?.feature.attributes[T];h[0][0]===d.x&&h[0][1]===d.y||(h[0]=[d.x,d.y]),h[h.length-1][0]===_.x&&h[h.length-1][1]===_.y||(h[h.length-1]=[_.x,_.y])}for(let d=1;d<h.length-1;d++)h[d][1]>85.5?h[d][1]=85.5:h[d][1]<-85.5&&(h[d][1]=-85.5),h[d][0]>179.9999?h[d][0]=179.9999:h[d][0]<-179.9999&&(h[d][0]=-179.9999);J.has(k)?J.get(k).push(h):J.set(k,[h])}const X=J.get(k);re.has(k)||(re.set(k,new Map),le.set(k,new Map));const O=re.get(k),G=le.get(k);O.has(l.typeName)||(O.set(l.typeName,X.shift()),G.set(l.typeName,0));const W=O.get(l.typeName);G.set(l.typeName,G.get(l.typeName)+1);const Te=new be({paths:[W]});if(l.feature.attributes[T]=Te,r.has(l.typeName))r.get(l.typeName)?.set(l.feature.attributes[M],l.feature);else{const d=new Map;d.set(l.feature.attributes[M],l.feature),r.set(l.typeName,d)}y.set(l.feature.attributes[M],l.feature);const me=q(l.feature.attributes[T]);this.relationshipLinkChartDiagramLookup.set(l.feature.attributes[M],l.feature.attributes[T]?me:null);const Ne=j(this.dataManager.inclusionModeDefinition.namedTypeDefinitions,l.typeName,()=>({useAllData:!1,members:new Map}));j(Ne.members,l.feature.attributes[M],()=>({id:l.feature.attributes[M],linkChartLocation:void 0})).linkChartLocation=me}for(const s of t)s.feature.attributes[Ke]=le.get(s.feature.attributes[te]+"-"+s.feature.attributes[ae])?.get(s.typeName)??null;return this._currentLinkChartConfig={layoutMode:e,layoutSettings:a?.layoutSettings?.clone()},{nodes:o,links:r,idMap:y}}async applyNewLinkChartLayout(e="organic-standard",a){const i=[];await this._calculateLayoutWithSublayerTimeInfo(e,a),this.layers.forEach(n=>{i.push(n.refreshCachedQueryEngine())}),this.membershipModified=!0,await Promise.all(i),this._refreshNamedTypes()}getCurrentNodeLocations(){const e=new Map;for(const[a,i]of this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.entries()??[])this.dataManager.relationshipTypeNames.has(a)||i?.members?.forEach(n=>{const t=n.linkChartLocation;let o;const r=n.id;t&&(o="x"in t?{x:t.x,y:t.y}:{x:t.coords[0],y:t.coords[1]},e.set(r,new de({x:o.x,y:o.y})))});return e}async refreshLinkChartCache(e){await this.dataManager.refreshCacheContent(e);const a=[];this.layers.forEach(i=>{a.push(i.refreshCachedQueryEngine())}),await Promise.all(a),this._refreshNamedTypes()}async connectBetweenEntities(e,a){if(!e.length)return{records:[]};let i=[];try{let n=[];for(const t of this.dataManager.relationshipTypeNames){const o=this.sublayerIdsCache.get(t);o&&(n=n.concat(Array.from(o.keys())))}i=await this.dataManager.getRelationshipsBetweenNodes(e,n,a),await this._handleNewRecords(i,a),V(a)}catch(n){throw he(n)&&this.removeRecords(i),n}return{records:i}}async connectFromEntities(e,a){if(!e.length)return{records:[]};let i=[];try{let n=[];for(const o of this.dataManager.relationshipTypeNames){const r=this.sublayerIdsCache.get(o);r&&(n=n.concat(Array.from(r.keys())))}let t=[];for(const o of this.dataManager.entityTypeNames){const r=this.sublayerIdsCache.get(o);r&&(t=t.concat(Array.from(r)))}i=await this.dataManager.getRelationshipsFromNodes(e,t,n,a),await this._handleNewRecords(i,a),i.length>0&&(this.membershipModified=!0),V(a)}catch(n){throw he(n)&&this.removeRecords(i),n}return{records:i}}getCurrentLayout(){return this._currentLinkChartConfig.layoutMode}async _calculateLayoutWithSublayerTimeInfo(e="organic-standard",a){const i=new Map;this.layers.forEach(n=>{i.set(n.objectType.name,n.timeInfo)}),await this.calculateLinkChartLayout(e,{timeInfoByTypeName:i,...a}),this.linkChart?.handleChronologicalOverlay()}async _handleNewRecords(e,a){const i=[];this.dataManager.addToLayer(e);for(const t of e)this.sublayerIdsCache.has(t.typeName)||(this.sublayerIdsCache.set(t.typeName,new Set),i.push(t.typeName)),this.sublayerIdsCache.get(t.typeName).add(t.id);for(const t of i){const o=this._graphTypeLookup.get(t);if(o){const r=this._createSublayer(o);o.type==="entity"?this.dataManager.entityTypeNames.add(t):this.dataManager.relationshipTypeNames.add(t),r.geometryType?this.layers.push(r):this.tables.push(r),this.dataManager.sublayerCaches.set(t,new Map)}}await we(this,i,a),await this.dataManager.refreshCacheContent(e.map(t=>t.id),void 0,void 0,void 0,a);const n={layoutSettings:this._currentLinkChartConfig.layoutSettings,lockedNodeLocations:new Map};for(const[t,o]of this.entityLinkChartDiagramLookup.entries())o&&n.lockedNodeLocations.set(t,new de(o.coords[0],o.coords[1]));await this.applyNewLinkChartLayout(this._currentLinkChartConfig.layoutMode,n)}_createSublayers(e,a,i){e.forEach(n=>{const t=this._createSublayer(n);i(t)&&a.push(t),this._updateSublayerCaches(n)})}_updateSublayers(e,a){a.forEach(i=>{i.parentCompositeLayer=this;const n=e.find(t=>t.type===i.graphType&&t.name===i.graphTypeName);n&&(i.objectType=n,i.read({title:n.name},{origin:"service"}),this._updateSublayerCaches(n))})}_updateSublayerCaches(e){const a=this.dataManager.sublayerCaches;a.has(e.name)||a.set(e.name,new Map)}_layersLoadedFromAuthoritativeItem(){const e=this.originIdOf("layers");return e>=H.PORTAL_ITEM&&e<H.USER}async _initializeDiagram(){this.initializationLinkChartConfig?this.initializationLinkChartConfig.doNotRecalculateLayout?(this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((e,a)=>{e?.members?.forEach(i=>{const n=i.linkChartLocation;let t;const o=i.id;if(!n)return;t="x"in n?{x:n.x,y:n.y}:{x:n.coords[0],y:n.coords[1]};const r=q(t);this.dataManager.relationshipTypeNames.has(a)?this.relationshipLinkChartDiagramLookup.set(o,r):this.entityLinkChartDiagramLookup.set(o,r),this.linkChartExtent.xmin>t.x&&(this.linkChartExtent.xmin=t.x),this.linkChartExtent.xmax<t.x&&(this.linkChartExtent.xmax=t.x),this.linkChartExtent.ymin>t.y&&(this.linkChartExtent.ymin=t.y),this.linkChartExtent.ymax<t.y&&(this.linkChartExtent.ymax=t.y)})}),this.memberRelationshipTypes.forEach(e=>{e.name&&this.dataManager.sublayerCaches.get(e.name)?.forEach(a=>{const i=this.relationshipLinkChartDiagramLookup.get(a.attributes[te]),n=this.relationshipLinkChartDiagramLookup.get(a.attributes[ae]);if(i&&n){const t=q(new be({paths:[[[i.coords[0],i.coords[1]],[n.coords[0],n.coords[1]]]]}));this.relationshipLinkChartDiagramLookup.set(a.attributes[M],t)}else this.relationshipLinkChartDiagramLookup.set(a.attributes[M],null)})})):await this._calculateLayoutWithSublayerTimeInfo(this.initializationLinkChartConfig.layoutMode,{lockedNodeLocations:this.getCurrentNodeLocations(),...this.initializationLinkChartConfig||{}}):await this._calculateLayoutWithSublayerTimeInfo("organic-standard",{lockedNodeLocations:this.getCurrentNodeLocations()})}_refreshNamedTypes(){for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0})}_validateOrganicLayoutSettings(e,a){const i=C=>typeof C=="number"&&!isNaN(C),n=C=>i(C)&&C>=1,t=C=>i(C)&&C>=1,o=C=>Object.values(Y).includes(C),r=C=>i(C)&&C>=0,y={};if(!new Set(["organic-standard","organic-community","geographic-organic-standard","chronological-multi-timeline","chronological-mono-timeline"]).has(e)||!a)return y;const{computationBudgetTime:u,autoRepulsionRadius:g,repulsionRadiusMultiplier:L,absoluteIdealEdgeLength:f,multiplicativeIdealEdgeLength:U,idealEdgeLengthType:S}=a;return t(u)?y.computationBudgetTime=u:u&&E.getLogger(this).warn("Invalid layout computationBudgetTime setting, will revert to default setting"),y.autoRepulsionRadius=g,!g&&n(L)?y.repulsionRadiusMultiplier=L:g||(y.autoRepulsionRadius=!0,E.getLogger(this).warn("Invalid layout repulsionRadiusMultiplier setting, will revert to default setting")),e==="geographic-organic-standard"&&(o(S)?y.idealEdgeLengthType=S:S!==void 0&&E.getLogger(this).warn('Invalid layout idealEdgeLengthType setting, will revert to "multiplier" setting'),S==="absolute-value"&&r(f)?y.absoluteIdealEdgeLength=f:S==="absolute-value"&&f!==void 0?E.getLogger(this).warn("Invalid layout idealEdgeLength setting, will revert to default setting"):S==="multiplier"&&r(U)?y.multiplicativeIdealEdgeLength=U:S==="multiplier"&&U!==void 0&&E.getLogger(this).warn("Invalid layout idealEdgeLength setting, will revert to default setting")),y}_convertValidatedOrganicSettingsToCalculationSettings(e){let a=e.idealEdgeLengthType===Y.ABSOLUTE?e.absoluteIdealEdgeLength:e.multiplicativeIdealEdgeLength;return e.idealEdgeLengthType===Y.ABSOLUTE&&(a===void 0?a=-1:a*=-1),{computationBudgetTime:e.computationBudgetTime??void 0,repulsionRadiusMultiplier:e.repulsionRadiusMultiplier&&!e.autoRepulsionRadius?e.repulsionRadiusMultiplier:void 0,idealEdgeLengthMultiplier:a}}_createSublayer(e){return new K({objectType:e,parentCompositeLayer:this,graphType:e.type})}_handleSublayersChange(e,a){a&&(a.forEach(i=>{i.parent=null}),this.removeHandles("sublayers-owner")),e&&(e.forEach(i=>{i.parent=this}),this.addHandles([e.on("after-add",({item:i})=>{i.parent=this}),e.on("after-remove",({item:i})=>{i.parent=null})],"sublayers-owner"))}_alignLayersDataModelAndInclusionDefinition(e){const a=new Set((e.entityTypes??[]).map(t=>t.name).concat((e.relationshipTypes??[]).map(t=>t.name))),i=new Set((e.entityTypes??[]).map(t=>t.name)),n=new Set((e.relationshipTypes??[]).map(t=>t.name));if(this.layers){for(const o of this.layers)!o.graphType&&a.has(o.graphTypeName)&&(o.graphType=i.has(o.graphTypeName)?"entity":"relationship");const t=this.layers.filter(o=>a.has(o.graphTypeName)&&(o.graphType==="entity"?i.has(o.graphTypeName):n.has(o.graphTypeName)));this.setAtOrigin("layers",t,_e(this.originIdOf("layers")))}else this.layers=new $;if(this.layers&&this._originalInclusionList){const t=new Set(this._originalInclusionList.namedTypeDefinitions.keys()),o=this.tables?.map(u=>u.graphTypeName)??[],r=this.layers.map(u=>u.graphTypeName).concat(o);for(const u of r)t.has(u)||this._originalInclusionList.namedTypeDefinitions.set(u,{useAllData:!1,members:new Map});const y=[];for(const u of this._originalInclusionList.namedTypeDefinitions.keys())r.includes(u)||(E.getLogger(this).warn(`A named type, ${u}, was in the serialized feature collection but did not have a sublayer config in the item, so will be removed`),y.push(u));for(const u of y)this._originalInclusionList.namedTypeDefinitions.delete(u)}}};b([w(Xe)],m.prototype,"url",void 0),b([w()],m.prototype,"dataPreloadedInLocalCache",void 0),b([w()],m.prototype,"initializationLinkChartConfig",void 0),b([w()],m.prototype,"membershipModified",void 0),b([w()],m.prototype,"dataManager",void 0),b([w()],m.prototype,"initializationInclusionModeDefinition",null),b([w()],m.prototype,"knowledgeGraph",void 0),b([w({type:$.ofType(K),json:{write:{ignoreOrigin:!0}}})],m.prototype,"layers",void 0),b([w({readOnly:!0})],m.prototype,"linkChart",null),b([w()],m.prototype,"entityLinkChartDiagramLookup",void 0),b([w()],m.prototype,"relationshipLinkChartDiagramLookup",void 0),b([w()],m.prototype,"linkChartExtent",void 0),b([w()],m.prototype,"memberEntityTypes",void 0),b([w()],m.prototype,"memberRelationshipTypes",void 0),b([w({type:["LinkChartLayer"]})],m.prototype,"operationalLayerType",void 0),b([w()],m.prototype,"sublayerIdsCache",void 0),b([w({type:$.ofType(K),json:{write:{ignoreOrigin:!0}}})],m.prototype,"tables",void 0),b([w({json:{read:!1}})],m.prototype,"type",void 0),b([w({json:{read:!1}})],m.prototype,"chronologicalAuxiliaryGraphics",void 0),m=b([Se("esri.layers.LinkChartLayer")],m);const et=m;export{et as default};
