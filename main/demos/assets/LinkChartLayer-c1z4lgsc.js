import{V as q,bB as be,s as K,aO as Ie,aJ as xe,n as E,bz as W,az as U,X as H,Y as he,u as Ee,bE as pe,aS as Le,dZ as _e,B as b,D as w,N as Se}from"./main-Bd_03BNf.js";import{S as J,E as Ae,D as Re,C as ze,g as Ge,a as Pe,b as Fe,c as $e,_ as Be,P as Oe,A as Ue,v as je,d as z,e as Qe,o as ee,u as we,i as Me,f as We}from"./KnowledgeGraphSublayer-B1W3Phu4.js";import{S as He}from"./MultiOriginJSONSupport-DOEjhxQE.js";import{f as Ve}from"./Layer-B_8fSKRa.js";import{s as V}from"./featureConversionUtils-CD968gj1.js";import{_ as M,I as te,t as ie,S as N,o as qe}from"./constants-B4mRqufT.js";import{p as Je}from"./BlendLayer-DNBmjvVl.js";import{b as Xe}from"./OperationalLayer-B2LTVkje.js";import{t as Ye}from"./ScaleRangeLayer-DAbO2VId.js";import{y as Ze}from"./commonProperties-CEs0Ky5d.js";import{I as Ke}from"./knowledgeGraphService-C5L5y2pg.js";import"./preload-helper-ExcqyqRp.js";import"./OptimizedFeature-hEosLSoO.js";import"./memoryEstimations-C-4wPzbe.js";import"./projection-B5J11HCw.js";import"./projectBuffer-0UYQHA4x.js";import"./GraphicsLayer-D_R4KzLy.js";import"./GraphicsCollection-BXyIcfwO.js";import"./ElevationInfo-DnuPtDzp.js";import"./lengthUtils-Cym5f2xe.js";import"./TimeExtent-BP_n2IvP.js";import"./layerContainerType-C5CzMsLd.js";import"./jsonUtils-DLufH0sT.js";import"./parser-C-4pkZvD.js";import"./mat4f32-DcsiF_Rp.js";import"./mat4-BPDfjts0.js";import"./common-DQOJ18NT.js";import"./Relationship-CC9p9lrP.js";import"./Query-DSV16ZVi.js";import"./Field-B-OaXgog.js";import"./fieldType-C08bO76G.js";import"./workers-D0YzKp_C.js";import"./Queue-1pevTxSO.js";import"./intl-BvarHTsY.js";import"./FeatureStore-YfBTSqUm.js";import"./BoundsStore-DKjHQhp0.js";import"./PooledRBush-518IDl9k.js";import"./quickselect-QQC62dOK.js";import"./timeSupport--MtNXUZH.js";import"./queryUtils-Dq5MUrdF.js";import"./normalizeUtils-BrH2lV2K.js";import"./normalizeUtilsCommon-bxYUHDUv.js";import"./utils-D9KQFO7x.js";import"./utils-7GyXGrM0.js";import"./json-Wa8cmqdu.js";import"./optimizedFeatureQueryEngineAdapter-DvYBreNA.js";import"./QueryEngine-DdpTdsJk.js";import"./WhereClauseCache-B-HPDLmU.js";import"./LRUCache-k4-1Y9qe.js";import"./MemCache-Cs6lXDo9.js";import"./WhereClause-BGoJt-Bq.js";import"./TimeOnly-BPSYd2WO.js";import"./QueryEngineCapabilities-DZTubngj.js";import"./quantizationUtils-DTkllPZl.js";import"./utils--seWbJWC.js";import"./heatmapUtils-C7zJgPjG.js";import"./vec42-CKs01hkn.js";import"./vec4f64-o2zAXfmz.js";import"./utils-B_-0QJqE.js";import"./timeZoneUtils-uYx9Jdvq.js";import"./utils-BWPNLrlx.js";import"./ClassBreaksDefinition-BNfg6nGy.js";import"./SnappingCandidate-O5eRSE6e.js";import"./FixedIntervalBinParameters-BvASvp5W.js";import"./NormalizationBinParametersMixin-BqDXhOsQ.js";import"./FieldsIndex-BXXEK-VJ.js";import"./Scheduler-D6SnOD_1.js";import"./signal-jdSgAZN_.js";import"./clientSideDefaults-O7xS58Ds.js";import"./fieldProperties-aDT-silQ.js";import"./labelingInfo-GHjRB16i.js";import"./uuid-Cl5lrJ4c.js";import"./SimpleRenderer-BVRjLh5u.js";import"./commonProperties-CECHKmuC.js";import"./colorRamps-BpFFyVXK.js";import"./ColorStop-CN-R_Zb9.js";import"./visualVariableUtils-BVDpaSXh.js";import"./UniqueValueRenderer-Qisk8KVs.js";import"./defaultCIMValues--PXB5pEO.js";import"./enums-CD-fX3vU.js";import"./RendererLegendOptions-BuqY8-Xh.js";import"./styleUtils-DTK14api.js";import"./RelationshipQuery-CbxohgaV.js";import"./labelUtils-Csa7b8E6.js";import"./DisplayFilteredLayer-MjiLi9nk.js";import"./scaleUtils-CqCO3s8f.js";import"./displayFilterUtils-BGbU5U7W.js";import"./FeatureEffectLayer-BxIhj6V6.js";import"./FeatureEffect-C55G72iL.js";import"./FeatureFilter-CM9S8DkM.js";import"./FeatureReductionLayer-BnUrrLnh.js";import"./FeatureReductionSelection-C0oxqhiC.js";import"./jsonUtils-D32xXNDj.js";import"./typeUtils-iA9c0A8r.js";import"./ClassBreaksRenderer-CMiIT6h0.js";import"./Version-F4yB_eqJ.js";import"./utils-CpVI5HFh.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-BmfRfMMl.js";import"./OrderByInfo-UKY-U636.js";import"./RefreshableLayer-CBCa2vxd.js";import"./TemporalLayer-DskAELqV.js";import"./TimeInfo-yr9Unxbt.js";import"./FeatureSet-B1jt7t9c.js";import"./popupUtils-DxkBDtEv.js";import"./utils-Bcn2IH-3.js";import"./cimSymbolUtils-FRrCOAn8.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./networkEnums-D26fRKct.js";import"./GPMessage-C7LiMPS8.js";var X;(function(e){e.MULTIPLIER="multiplier",e.ABSOLUTE="absolute-value"})(X||(X={}));let g=class extends Xe(Je(Ye(He(Ve)))){constructor(e){if(super(e),this.url=null,this.dataPreloadedInLocalCache=!1,this.initializationLinkChartConfig=null,this.membershipModified=!0,this._currentLinkChartConfig={layoutMode:"organic-standard"},this._graphTypeLookup=new Map,this.dataManager=null,this.knowledgeGraph=null,this.layers=new(q.ofType(J)),this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map,this.linkChartExtent=new be({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7}),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.operationalLayerType="LinkChartLayer",this.sublayerIdsCache=new Map,this.tables=new(q.ofType(J)),this.type="link-chart",this.chronologicalAuxiliaryGraphics=null,this._originalInclusionList=e?.initializationInclusionModeDefinition,e?.dataPreloadedInLocalCache&&!e?.initializationInclusionModeDefinition)throw new K("knowledge-graph:linkchart-layer-constructor","If creating a link chart composite layer and configured that data is already loaded in the cache, you must specify an inclusion list so the Composite Layer knows what records belong to it");this.addHandles(Ie(()=>this.layers.concat(this.tables),(i,a)=>this._handleSublayersChange(i,a),xe))}normalizeCtorArgs(e){if(!e)return{};const{url:i,title:a,dataPreloadedInLocalCache:o,initializationLinkChartConfig:t}=e;return{url:i,title:a,dataPreloadedInLocalCache:o,initializationLinkChartConfig:t}}_initializeLayerProperties(e){if(!this.title&&this.url){const n=this.url.split("/");this.title=n[n.length-2]}const i=new Set;let a=[],o=[];if(e.inclusionModeDefinition&&(!e.inclusionModeDefinition.namedTypeDefinitions||e.inclusionModeDefinition.namedTypeDefinitions.size<1))throw new K("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined");e.inclusionModeDefinition?.generateAllSublayers?(a=e.knowledgeGraph.dataModel.entityTypes??[],o=e.knowledgeGraph.dataModel.relationshipTypes??[]):e.inclusionModeDefinition?.namedTypeDefinitions&&e.inclusionModeDefinition?.namedTypeDefinitions.size>0?e.inclusionModeDefinition?.namedTypeDefinitions.forEach((n,s)=>{const m=this._graphTypeLookup.get(s);if(!m)return E.getLogger(this).warn(`A named type, ${s}, was in the inclusion list that wasn't in the data model and will be removed`),void e.inclusionModeDefinition?.namedTypeDefinitions.delete(s);m.type==="relationship"?i.has(s)||(i.add(s),o.push(m)):m.type==="entity"?i.has(s)||(i.add(s),a.push(m)):(E.getLogger(this).warn(`A named type, ${s}, was in the inclusion list that wasn't properly modeled and will be removed`),e.inclusionModeDefinition?.namedTypeDefinitions.delete(s))}):(a=e.knowledgeGraph.dataModel.entityTypes??[],o=e.knowledgeGraph.dataModel.relationshipTypes??[]);const t=new Ae({knowledgeGraph:e.knowledgeGraph,inclusionModeDefinition:e.inclusionModeDefinition});this.knowledgeGraph=e.knowledgeGraph,this.memberEntityTypes=a,this.memberRelationshipTypes=o,this.dataManager=t}load(e){const i=async()=>{const a=[],o=[];this.loadLayerAssumingLocalCache(),this._layersLoadedFromAuthoritativeItem()||await Me(this),this.dataManager.inclusionModeDefinition&&(this.dataManager.inclusionModeDefinition.generateAllSublayers=!1),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach(t=>{t.useAllData=!1}),await this._initializeDiagram(),this.layers.forEach(t=>{o.push(t.refreshCachedQueryEngine()),a.push(new Promise(n=>{t.on("layerview-create",()=>{n(null)})}))}),this.tables.forEach(t=>{o.push(t.refreshCachedQueryEngine())}),await Promise.all(o)};return this.addResolvingPromise(new Promise(a=>{Ke(this.url).then(async o=>{o.dataModel.entityTypes?.forEach(n=>{n.name&&this._graphTypeLookup.set(n.name,n)}),o.dataModel.relationshipTypes?.forEach(n=>{n.name&&this._graphTypeLookup.set(n.name,n)});const t=this.linkChart?.linkChartProperties;if(t?.originIdOf("entitiesUrl")===W.LINK_CHART&&(this.membershipModified=!1,this._originalInclusionList=await Re.fetchAndConvertSerializedLinkChart({entitiesUrl:t?.entitiesUrl,relationshipsUrl:t?.relationshipsUrl}),this._alignLayersDataModelAndInclusionDefinition(o.dataModel),this.initializationLinkChartConfig={layoutSettings:t?.layoutSettings??void 0,layoutMode:ze(t.layoutType)}),this._initializeLayerProperties({knowledgeGraph:o,inclusionModeDefinition:this._originalInclusionList}),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.size||(this.dataManager.inclusionModeDefinition={generateAllSublayers:!1,namedTypeDefinitions:new Map},this.dataManager.knowledgeGraph.dataModel.entityTypes?.forEach(n=>{n.name&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(n.name,{useAllData:!0})}),this.dataManager.knowledgeGraph.dataModel.relationshipTypes?.forEach(n=>{n.name&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(n.name,{useAllData:!0})})),this.dataPreloadedInLocalCache){const n=We.getInstance();for(const[s,m]of this.dataManager.inclusionModeDefinition?.namedTypeDefinitions??[])for(const d of m.members?.values()??[]){const y=n.readFromStoreById(`${s}__${d.id}`);y&&U(this.dataManager.sublayerCaches,s,()=>new Map).set(d.id,y)}await i()}else{const n=this.initializationLinkChartConfig?.layoutMode==="geographic-organic-standard";this.addResolvingPromise(this.dataManager.refreshCacheContent(void 0,!1,n,!0).then(async()=>{H(e),await i()}))}a(null)})})),Promise.resolve(this)}set initializationInclusionModeDefinition(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("initializationInclusionModeDefinition",e):E.getLogger(this).error("#initializationInclusionModeDefinition","initializationInclusionModeDefinition cannot be changed after the layer is loaded.")}get linkChart(){return this.parent}async addRecords(e,i){let a=[];i?.cascadeAddRelationshipEndNodes&&this.dataManager.knowledgeGraph.dataModel&&(a=await Ge(e,this.dataManager.knowledgeGraph));const o=e.concat(a).filter(t=>!this.sublayerIdsCache.get(t.typeName)?.has(t.id));o.length>0&&(this.membershipModified=!0),await this._handleNewRecords(o,i)}async removeRecords(e,{cascadeRemoveRelationships:i=!0,recalculateLayout:a=!1,overrideMembershipCheck:o=!1}={cascadeRemoveRelationships:!0,recalculateLayout:!1,overrideMembershipCheck:!1}){let t=[];for(const s of e)(o||this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(s.typeName)?.useAllData===!1&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(s.typeName)?.members?.has(s.id))&&t.push(s);if(i){const s=new Set,m=[];for(const d of t)if(this.dataManager.nodeConnectionsLookup.has(d.id))for(const y of this.dataManager.nodeConnectionsLookup.get(d.id))s.add(y);for(const d of s)if(this.dataManager.memberIdTypeLookup.has(d))for(const y of this.dataManager.memberIdTypeLookup.get(d))this.dataManager.relationshipTypeNames.has(y)&&m.push({id:d,typeName:y});t=t.concat(m)}this.dataManager.removeFromLayer(t);for(const s of t)this.sublayerIdsCache.get(s.typeName)?.delete(s.id),this.dataManager.relationshipTypeNames.has(s.typeName)?this.relationshipLinkChartDiagramLookup.delete(s.id):this.entityLinkChartDiagramLookup.delete(s.id);a&&await this._calculateLayoutWithSublayerTimeInfo(this._currentLinkChartConfig.layoutMode,{layoutSettings:this._currentLinkChartConfig.layoutSettings}),t.length>0&&(this.membershipModified=!0);const n=[];return this.layers.forEach(s=>{n.push(s.refreshCachedQueryEngine())}),await Promise.all(n),this._refreshNamedTypes(),t}async expand(e,i){let a=[];try{const o=await this.dataManager.getConnectedRecordIds(e,i?.relationshipTypeNames,i);a=o.filter(t=>!this.sublayerIdsCache.get(t.typeName)?.has(t.id)),await this._handleNewRecords(o,i),o.length>0&&(this.membershipModified=!0),H(i?.signal)}catch(o){throw he(o)&&a.length>0&&this.removeRecords(a,{overrideMembershipCheck:!0}),o}return{records:a}}loadLayerAssumingLocalCache(){const e=[...this.memberRelationshipTypes,...this.memberEntityTypes];this.originIdOf("layers")===W.DEFAULTS?this._createSublayers(e,this.layers,i=>!!i.geometryType):this._updateSublayers(e,this.layers),this.originIdOf("tables")===W.DEFAULTS?this._createSublayers(e,this.tables,i=>!i.geometryType):this._updateSublayers(e,this.tables),this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((i,a)=>{const o=U(this.sublayerIdsCache,a,()=>new Set);i.members?.forEach(({id:t,linkChartLocation:n})=>{if(o.add(t),n){const s="coords"in n&&"lengths"in n?n:V(n);this.dataManager.relationshipTypeNames.has(a)?this.relationshipLinkChartDiagramLookup.set(t,s):this.entityLinkChartDiagramLookup.set(t,s)}})})}async calculateLinkChartLayout(e="organic-standard",i){const a=[],o=[],t=[];this.dataManager.sublayerCaches.forEach((r,h)=>{this.dataManager.entityTypeNames.has(h)?r.forEach(l=>{a.push({typeName:h,feature:l})}):this.dataManager.relationshipTypeNames.has(h)&&r.forEach(l=>{o.push({typeName:h,feature:l})})}),this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map;const n=new Map,s=new Map,m=new Map,d=new Map,y=new Uint8Array(a.length),L=new Float64Array(a.length),f=new Float64Array(a.length),O=new Float64Array(a.length),S=new Float64Array(a.length),k=new Uint32Array(o.length),ae=new Uint32Array(o.length),de=new Float64Array(o.length),ue=new Float64Array(o.length),c=[],ke="organic-standard",x=new be({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7});let F,ce="organic-standard",u=0,D=0;const Ce=Pe.apply;switch(ce=e==="geographic-organic-standard"?ke:e,ce){case"organic-standard":F=je.apply;break;case"organic-community":F=Ue.apply;break;case"hierarchical-bottom-to-top":F=Oe.apply;break;case"radial-root-centric":F=Be.apply;break;case"tree-left-to-right":F=$e.apply;break;default:F=Fe.apply}let oe=!1;a.forEach(({typeName:r,feature:h})=>{if(e!=="chronological-mono-timeline"&&e!=="chronological-multi-timeline"&&i?.lockedNodeLocations?.has(h.attributes[M])){e==="geographic-organic-standard"&&this.dataManager.geographicLookup.has(r)?y[u]=z.IsGeographic:y[u]=z.None;const l=i.lockedNodeLocations.get(h.attributes[M]);L[u]=l.x,f[u]=l.y}else if(e==="geographic-organic-standard"&&this.dataManager.geographicLookup.has(r)){y[u]=z.IsGeographic;let l=null;const C=h.attributes[this.dataManager.geographicLookup.get(r).name];switch(this.dataManager.geographicLookup.get(r)?.geometryType){case"esriGeometryPoint":L[u]=C?.x,f[u]=C?.y;break;case"esriGeometryPolygon":l=C?.centroid,l?.x!=null&&l?.y!=null?(L[u]=l.x,f[u]=l.y):y[u]=z.IsMovable;break;case"esriGeometryPolyline":case"esriGeometryMultipoint":l=C?.extent?.center,l?.x!=null&&l?.y!=null?(L[u]=l.x,f[u]=l.y):y[u]=z.IsMovable;break;default:y[u]=z.IsMovable}(L[u]==null||f[u]==null||Number.isNaN(L[u])||Number.isNaN(f[u]))&&(y[u]=z.IsMovable,L[u]=0,f[u]=0)}else if(e==="chronological-mono-timeline"||e==="chronological-multi-timeline"){!oe&&i?.lockedNodeLocations?.has(h.attributes[M])&&(oe=!0);const l=i?.timeInfoByTypeName?.get(r),C=l?.startField,A=C&&l?.startField?h.attributes[C]:null;O[u]=A?new Date(A).getTime():NaN;const T=l?.endField,I=T&&l?.endField?h.attributes[T]:null;S[u]=I?new Date(I).getTime():NaN,L[u]=0,f[u]=0,y[u]=z.IsMovable}else y[u]=z.IsMovable,L[u]=0,f[u]=0;d.set(h.attributes[M],u),c[u]={feature:h,typeName:r},u++}),oe&&E.getLogger(this).warn("Locked node locations are not supported for chronological layout at this time.  Requested node locations were ignored");let me=!1;const ne=new Map;o.forEach(r=>{const h=r.feature.attributes[te],l=r.feature.attributes[ie],C=d.get(h),A=d.get(l),T=i?.timeInfoByTypeName?.get(r.typeName),I=i?.timeInfoByTypeName?T?.startField:null,R=I?r.feature.attributes[I]:null,Z=T?.endField,$=Z?r.feature.attributes[Z]:null;if(C!==void 0&&A!==void 0){let G=h+"-"+l;e!=="chronological-mono-timeline"&&e!=="chronological-multi-timeline"||(G=G+"-"+R+"-"+$);const Q=ne.get(G);Q?.has(r.typeName)||(k[D]=C,ae[D]=A,e!=="chronological-mono-timeline"&&e!=="chronological-multi-timeline"||(de[D]=R?new Date(R).getTime():NaN,ue[D]=$?new Date($).getTime():NaN),Q===void 0?ne.set(G,new Map([[r.typeName,D]])):Q.set(r.typeName,D),D++),t.push(r)}else me=!0,this.relationshipLinkChartDiagramLookup.set(h,null)}),me&&E.getLogger(this).warn("A relationship is a member of this layer that has either origin or destination entity nodes that are not members. The diagram geometry will be set to null");const Te=this._validateOrganicLayoutSettings(e,i?.layoutSettings?.organicLayoutSettings),re=this._convertValidatedOrganicSettingsToCalculationSettings(Te);await Qe();let j=ee.Error,v=null;if(e==="chronological-mono-timeline"||e==="chronological-multi-timeline"){let r;({status:j,links:v,graphics:r}=Ce(()=>i?.signal?.aborted??!1,y,L,f,O,S,k.subarray(0,D),ae.subarray(0,D),de.subarray(0,D),ue.subarray(0,D),e==="chronological-multi-timeline",i?.layoutSettings?.chronologicalLayoutSettings)),j===ee.Success&&(this.chronologicalAuxiliaryGraphics=r)}else({status:j,links:v}=F(()=>i?.signal?.aborted??!1,y,L,f,k.subarray(0,D),ae.subarray(0,D),re.computationBudgetTime,re.idealEdgeLengthMultiplier,re.repulsionRadiusMultiplier));if(H(i?.signal),j===ee.Error)throw new K("knowledge-graph:layout-failed","Attempting to arrange the records in the specified layout failed");if(j===ee.Canceled)throw Ee();for(let r=0;r<c.length;r++){if(f[r]>84.9999?f[r]=84.9999:f[r]<-84.9999&&(f[r]=-84.9999),L[r]>179.9999?L[r]=179.9999:L[r]<-179.9999&&(L[r]=-179.9999),c[r].feature.attributes[N]=new pe(L[r],f[r]),n.has(c[r].typeName))n.get(c[r].typeName)?.set(c[r].feature.attributes[M],c[r].feature);else{const C=new Map;C.set(c[r].feature.attributes[M],c[r].feature),n.set(c[r].typeName,C)}m.set(c[r].feature.attributes[M],c[r].feature);const h=V(c[r].feature.attributes[N]);this.entityLinkChartDiagramLookup.set(c[r].feature.attributes[M],c[r].feature.attributes[N]?h:null);const l=U(this.dataManager.inclusionModeDefinition.namedTypeDefinitions,c[r].typeName,()=>({useAllData:!1,members:new Map}));U(l.members,c[r].feature.attributes[M],()=>({id:c[r].feature.attributes[M],linkChartLocation:void 0})).linkChartLocation=c[r].feature.attributes[N],c[r].feature.attributes[N].x<x.xmin&&(x.xmin=c[r].feature.attributes[N].x),c[r].feature.attributes[N].x>x.xmax&&(x.xmax=c[r].feature.attributes[N].x),c[r].feature.attributes[N].y<x.ymin&&(x.ymin=c[r].feature.attributes[N].y),c[r].feature.attributes[N].y>x.ymax&&(x.ymax=c[r].feature.attributes[N].y)}if(this.linkChartExtent.xmin=x.xmin,this.linkChartExtent.xmax=x.xmax,this.linkChartExtent.ymin=x.ymin,this.linkChartExtent.ymax=x.ymax,!v)throw new K("knowledge-graph:layout-failed","Attempting to retrieve link geometry from diagram engine failed");const Y=new Map,se=new Map,le=new Map,ye=new Set;for(let r=0;r<t.length;r++){const h=[],l=t[r],C=l.feature.attributes[te],A=l.feature.attributes[ie];let T=C+"-"+A;if(e==="chronological-mono-timeline"||e==="chronological-multi-timeline"){const p=i?.timeInfoByTypeName?.get(l.typeName),_=i?.timeInfoByTypeName?p?.startField:null,P=_?l.feature.attributes[_]:null,B=p?.endField;T+="-"+P+"-"+(B?l.feature.attributes[B]:null)}const I=ne.get(T).get(l.typeName),R=I===0?0:v?.vertexEndIndex[I-1];if(!ye.has(I)){if(ye.add(I),v.types[I]===we.Recursive){const p=[v.vertices[2*R],v.vertices[2*R+1]],_=[v.vertices[2*(R+1)],v.vertices[2*(R+1)+1]],P=[.5*(p[0]+_[0]),.5*(p[1]+_[1])],B=[P[0]-p[0],P[1]-p[1]],De=[P[0]+B[1],P[1]-B[0]],ve=[P[0]-B[1],P[1]+B[0]];h.push(p),h.push(De),h.push(_),h.push(ve),h.push(p)}else{if(v.types[I]!==we.Regular){E.getLogger(this).warn("A relationship generated an unsupported link geometry type.  It will not be rendered");continue}for(let p=R;p<v.vertexEndIndex[I];p++)h.push([v.vertices[2*p],v.vertices[2*p+1]])}if(e!=="chronological-mono-timeline"&&e!=="chronological-multi-timeline"){const p=c[d.get(C)]?.feature.attributes[N],_=c[d.get(A)]?.feature.attributes[N];h[0][0]===p.x&&h[0][1]===p.y||(h[0]=[p.x,p.y]),h[h.length-1][0]===_.x&&h[h.length-1][1]===_.y||(h[h.length-1]=[_.x,_.y])}for(let p=1;p<h.length-1;p++)h[p][1]>85.5?h[p][1]=85.5:h[p][1]<-85.5&&(h[p][1]=-85.5),h[p][0]>179.9999?h[p][0]=179.9999:h[p][0]<-179.9999&&(h[p][0]=-179.9999);Y.has(T)?Y.get(T).push(h):Y.set(T,[h])}const Z=Y.get(T);se.has(T)||(se.set(T,new Map),le.set(T,new Map));const $=se.get(T),G=le.get(T);$.has(l.typeName)||($.set(l.typeName,Z.shift()),G.set(l.typeName,0));const Q=$.get(l.typeName);G.set(l.typeName,G.get(l.typeName)+1);const ge=new Le({paths:[Q]});if(l.feature.attributes[N]=ge,s.has(l.typeName))s.get(l.typeName)?.set(l.feature.attributes[M],l.feature);else{const p=new Map;p.set(l.feature.attributes[M],l.feature),s.set(l.typeName,p)}m.set(l.feature.attributes[M],l.feature);const fe=V(l.feature.attributes[N]);this.relationshipLinkChartDiagramLookup.set(l.feature.attributes[M],l.feature.attributes[N]?fe:null);const Ne=U(this.dataManager.inclusionModeDefinition.namedTypeDefinitions,l.typeName,()=>({useAllData:!1,members:new Map}));U(Ne.members,l.feature.attributes[M],()=>({id:l.feature.attributes[M],linkChartLocation:void 0})).linkChartLocation=fe}for(const r of t)r.feature.attributes[qe]=le.get(r.feature.attributes[te]+"-"+r.feature.attributes[ie])?.get(r.typeName)??null;return this._currentLinkChartConfig={layoutMode:e,layoutSettings:i?.layoutSettings?.clone()},{nodes:n,links:s,idMap:m}}async applyNewLinkChartLayout(e="organic-standard",i){const a=[];await this._calculateLayoutWithSublayerTimeInfo(e,i),this.layers.forEach(o=>{a.push(o.refreshCachedQueryEngine())}),this.membershipModified=!0,await Promise.all(a),this._refreshNamedTypes()}getCurrentNodeLocations(){const e=new Map;for(const[i,a]of this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.entries()??[])this.dataManager.relationshipTypeNames.has(i)||a?.members?.forEach(o=>{const t=o.linkChartLocation;let n;const s=o.id;t&&(n="x"in t?{x:t.x,y:t.y}:{x:t.coords[0],y:t.coords[1]},e.set(s,new pe({x:n.x,y:n.y})))});return e}async refreshLinkChartCache(e){await this.dataManager.refreshCacheContent(e);const i=[];this.layers.forEach(a=>{i.push(a.refreshCachedQueryEngine())}),await Promise.all(i),this._refreshNamedTypes()}async connectBetweenEntities(e,i){if(!e.length)return{records:[]};let a=[];try{let o=[];for(const t of this.dataManager.relationshipTypeNames){const n=this.sublayerIdsCache.get(t);n&&(o=o.concat(Array.from(n.keys())))}a=await this.dataManager.getRelationshipsBetweenNodes(e,o,i),await this._handleNewRecords(a,i),H(i)}catch(o){throw he(o)&&this.removeRecords(a),o}return{records:a}}async connectFromEntities(e,i){if(!e.length)return{records:[]};let a=[];try{let o=[];for(const n of this.dataManager.relationshipTypeNames){const s=this.sublayerIdsCache.get(n);s&&(o=o.concat(Array.from(s.keys())))}let t=[];for(const n of this.dataManager.entityTypeNames){const s=this.sublayerIdsCache.get(n);s&&(t=t.concat(Array.from(s)))}a=await this.dataManager.getRelationshipsFromNodes(e,t,o,i),await this._handleNewRecords(a,i),a.length>0&&(this.membershipModified=!0),H(i)}catch(o){throw he(o)&&this.removeRecords(a),o}return{records:a}}getCurrentLayout(){return this._currentLinkChartConfig.layoutMode}async _calculateLayoutWithSublayerTimeInfo(e="organic-standard",i){const a=new Map;this.layers.forEach(o=>{a.set(o.objectType.name,o.timeInfo)}),await this.calculateLinkChartLayout(e,{timeInfoByTypeName:a,...i}),this.linkChart?.handleChronologicalOverlay()}async _handleNewRecords(e,i){const a=[];this.dataManager.addToLayer(e);for(const t of e)this.sublayerIdsCache.has(t.typeName)||(this.sublayerIdsCache.set(t.typeName,new Set),a.push(t.typeName)),this.sublayerIdsCache.get(t.typeName).add(t.id);for(const t of a){const n=this._graphTypeLookup.get(t);if(n){const s=this._createSublayer(n);n.type==="entity"?this.dataManager.entityTypeNames.add(t):this.dataManager.relationshipTypeNames.add(t),s.geometryType?this.layers.push(s):this.tables.push(s),this.dataManager.sublayerCaches.set(t,new Map)}}await Me(this,a,i),await this.dataManager.refreshCacheContent(e.map(t=>t.id),void 0,void 0,void 0,i);const o={layoutSettings:this._currentLinkChartConfig.layoutSettings,lockedNodeLocations:new Map};for(const[t,n]of this.entityLinkChartDiagramLookup.entries())n&&o.lockedNodeLocations.set(t,new pe(n.coords[0],n.coords[1]));await this.applyNewLinkChartLayout(this._currentLinkChartConfig.layoutMode,o)}_createSublayers(e,i,a){e.forEach(o=>{const t=this._createSublayer(o);a(t)&&i.push(t),this._updateSublayerCaches(o)})}_updateSublayers(e,i){i.forEach(a=>{a.parentCompositeLayer=this;const o=e.find(t=>t.type===a.graphType&&t.name===a.graphTypeName);o&&(a.objectType=o,a.read({title:o.name},{origin:"service"}),this._updateSublayerCaches(o))})}_updateSublayerCaches(e){const i=this.dataManager.sublayerCaches;i.has(e.name)||i.set(e.name,new Map)}_layersLoadedFromAuthoritativeItem(){const e=this.originIdOf("layers");return e>=W.PORTAL_ITEM&&e<W.USER}async _initializeDiagram(){this.initializationLinkChartConfig?this.initializationLinkChartConfig.doNotRecalculateLayout?(this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((e,i)=>{e?.members?.forEach(a=>{const o=a.linkChartLocation;let t;const n=a.id;if(!o)return;t="x"in o?{x:o.x,y:o.y}:{x:o.coords[0],y:o.coords[1]};const s=V(t);this.dataManager.relationshipTypeNames.has(i)?this.relationshipLinkChartDiagramLookup.set(n,s):this.entityLinkChartDiagramLookup.set(n,s),this.linkChartExtent.xmin>t.x&&(this.linkChartExtent.xmin=t.x),this.linkChartExtent.xmax<t.x&&(this.linkChartExtent.xmax=t.x),this.linkChartExtent.ymin>t.y&&(this.linkChartExtent.ymin=t.y),this.linkChartExtent.ymax<t.y&&(this.linkChartExtent.ymax=t.y)})}),this.memberRelationshipTypes.forEach(e=>{e.name&&this.dataManager.sublayerCaches.get(e.name)?.forEach(i=>{const a=this.relationshipLinkChartDiagramLookup.get(i.attributes[te]),o=this.relationshipLinkChartDiagramLookup.get(i.attributes[ie]);if(a&&o){const t=V(new Le({paths:[[[a.coords[0],a.coords[1]],[o.coords[0],o.coords[1]]]]}));this.relationshipLinkChartDiagramLookup.set(i.attributes[M],t)}else this.relationshipLinkChartDiagramLookup.set(i.attributes[M],null)})})):await this._calculateLayoutWithSublayerTimeInfo(this.initializationLinkChartConfig.layoutMode,{lockedNodeLocations:this.getCurrentNodeLocations(),...this.initializationLinkChartConfig||{}}):await this._calculateLayoutWithSublayerTimeInfo("organic-standard",{lockedNodeLocations:this.getCurrentNodeLocations()})}_refreshNamedTypes(){for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0})}_validateOrganicLayoutSettings(e,i){const a=k=>typeof k=="number"&&!isNaN(k),o=k=>a(k)&&k>=1,t=k=>a(k)&&k>=1,n=k=>Object.values(X).includes(k),s=k=>a(k)&&k>=0,m={};if(!new Set(["organic-standard","organic-community","geographic-organic-standard","chronological-multi-timeline","chronological-mono-timeline"]).has(e)||!i)return m;const{computationBudgetTime:d,autoRepulsionRadius:y,repulsionRadiusMultiplier:L,absoluteIdealEdgeLength:f,multiplicativeIdealEdgeLength:O,idealEdgeLengthType:S}=i;return t(d)?m.computationBudgetTime=d:d&&E.getLogger(this).warn("Invalid layout computationBudgetTime setting, will revert to default setting"),m.autoRepulsionRadius=y,!y&&o(L)?m.repulsionRadiusMultiplier=L:y||(m.autoRepulsionRadius=!0,E.getLogger(this).warn("Invalid layout repulsionRadiusMultiplier setting, will revert to default setting")),e==="geographic-organic-standard"&&(n(S)?m.idealEdgeLengthType=S:S!==void 0&&E.getLogger(this).warn('Invalid layout idealEdgeLengthType setting, will revert to "multiplier" setting'),S==="absolute-value"&&s(f)?m.absoluteIdealEdgeLength=f:S==="absolute-value"&&f!==void 0?E.getLogger(this).warn("Invalid layout idealEdgeLength setting, will revert to default setting"):S==="multiplier"&&s(O)?m.multiplicativeIdealEdgeLength=O:S==="multiplier"&&O!==void 0&&E.getLogger(this).warn("Invalid layout idealEdgeLength setting, will revert to default setting")),m}_convertValidatedOrganicSettingsToCalculationSettings(e){let i=e.idealEdgeLengthType===X.ABSOLUTE?e.absoluteIdealEdgeLength:e.multiplicativeIdealEdgeLength;return e.idealEdgeLengthType===X.ABSOLUTE&&(i===void 0?i=-1:i*=-1),{computationBudgetTime:e.computationBudgetTime??void 0,repulsionRadiusMultiplier:e.repulsionRadiusMultiplier&&!e.autoRepulsionRadius?e.repulsionRadiusMultiplier:void 0,idealEdgeLengthMultiplier:i}}_createSublayer(e){return new J({objectType:e,parentCompositeLayer:this,graphType:e.type})}_handleSublayersChange(e,i){i&&(i.forEach(a=>{a.parent=null}),this.removeHandles("sublayers-owner")),e&&(e.forEach(a=>{a.parent=this}),this.addHandles([e.on("after-add",({item:a})=>{a.parent=this}),e.on("after-remove",({item:a})=>{a.parent=null})],"sublayers-owner"))}_alignLayersDataModelAndInclusionDefinition(e){const i=new Set((e.entityTypes??[]).map(t=>t.name).concat((e.relationshipTypes??[]).map(t=>t.name))),a=new Set((e.entityTypes??[]).map(t=>t.name)),o=new Set((e.relationshipTypes??[]).map(t=>t.name));if(this.layers){for(const n of this.layers)!n.graphType&&i.has(n.graphTypeName)&&(n.graphType=a.has(n.graphTypeName)?"entity":"relationship");const t=this.layers.filter(n=>i.has(n.graphTypeName)&&(n.graphType==="entity"?a.has(n.graphTypeName):o.has(n.graphTypeName)));this.setAtOrigin("layers",t,_e(this.originIdOf("layers")))}else this.layers=new q;if(this.layers&&this._originalInclusionList){const t=new Set(this._originalInclusionList.namedTypeDefinitions.keys()),n=this.tables?.map(d=>d.graphTypeName)??[],s=this.layers.map(d=>d.graphTypeName).concat(n);for(const d of s)t.has(d)||this._originalInclusionList.namedTypeDefinitions.set(d,{useAllData:!1,members:new Map});const m=[];for(const d of this._originalInclusionList.namedTypeDefinitions.keys())s.includes(d)||(E.getLogger(this).warn(`A named type, ${d}, was in the serialized feature collection but did not have a sublayer config in the item, so will be removed`),m.push(d));for(const d of m)this._originalInclusionList.namedTypeDefinitions.delete(d)}}};b([w(Ze)],g.prototype,"url",void 0),b([w()],g.prototype,"dataPreloadedInLocalCache",void 0),b([w()],g.prototype,"initializationLinkChartConfig",void 0),b([w()],g.prototype,"membershipModified",void 0),b([w()],g.prototype,"dataManager",void 0),b([w()],g.prototype,"initializationInclusionModeDefinition",null),b([w()],g.prototype,"knowledgeGraph",void 0),b([w({type:q.ofType(J),json:{write:{ignoreOrigin:!0}}})],g.prototype,"layers",void 0),b([w({readOnly:!0})],g.prototype,"linkChart",null),b([w()],g.prototype,"entityLinkChartDiagramLookup",void 0),b([w()],g.prototype,"relationshipLinkChartDiagramLookup",void 0),b([w()],g.prototype,"linkChartExtent",void 0),b([w()],g.prototype,"memberEntityTypes",void 0),b([w()],g.prototype,"memberRelationshipTypes",void 0),b([w({type:["LinkChartLayer"]})],g.prototype,"operationalLayerType",void 0),b([w()],g.prototype,"sublayerIdsCache",void 0),b([w({type:q.ofType(J),json:{write:{ignoreOrigin:!0}}})],g.prototype,"tables",void 0),b([w({json:{read:!1}})],g.prototype,"type",void 0),b([w({json:{read:!1}})],g.prototype,"chronologicalAuxiliaryGraphics",void 0),g=b([Se("esri.layers.LinkChartLayer")],g);const ia=g;export{ia as default};
