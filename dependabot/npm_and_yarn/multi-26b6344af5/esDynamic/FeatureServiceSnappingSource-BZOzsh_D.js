import{aI as Z,aL as H,aM as y,aH as V,D as n,G as a,K as S,df as b,dn as q,dK as K,b4 as R,aK as C,iE as A,iF as Q,V as X,iG as B,iH as Y,iI as ee,iJ as te,dX as ie,a7 as se,bP as ne,dZ as re,e4 as ae,gv as oe,b_ as L,cR as le,an as de,bC as ue,fQ as he,bA as pe,T as D,aO as ce,eP as g,e5 as U,dm as J,a_ as ye}from"./main-0iYVBzEC.js";import{t as ge}from"./memoize-DvEt8OkT.js";import{h as j}from"./UpdatingHandles-CcEY5W2Q.js";import{y as fe}from"./elevationInfoUtils-JG51BT1-.js";import{t as E}from"./TileKey-B_6qmYK-.js";import{o as we}from"./vec32-JpmRWeeI.js";import{g as _e,t as ve,W as me}from"./boundedPlane-Cg4UadYW.js";import{i as Se}from"./layerViewUtils-RXqw8zaM.js";import{h as be}from"./hitTestSelectUtils-BWWHjXOI.js";import{o as Ie,i as He}from"./queryEngineUtils-bcdLJiGO.js";import{h as Oe}from"./WorkerHandle-CYzUqAJo.js";import{e as ke}from"./projectVectorToVector-BfOGrT1m.js";import{z as Te,p as Fe}from"./TileInfo-Cc2cMyRt.js";import{E as Me}from"./Scheduler-CzEGPMEv.js";function M(e,t){return ve(t.extent,$),_e($,we(Pe,e.x,e.y,0))}const $=me(),Pe=Z();let f=class extends H{get tiles(){const e=this.tilesCoveringView,t=this.pointOfInterest!=null?this.pointOfInterest:this.view.center;return e.sort((i,o)=>M(t,i)-M(t,o)),e}_scaleEnabled(){return Se(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||this.tileInfo==null)return[];if(!this._scaleEnabled)return[];const{spans:e,lodInfo:t}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:i}=t,o=[];for(const{row:s,colFrom:r,colTo:l}of e)for(let u=r;u<=l;u++){const _=t.normalizeCol(u),p=new E(null,i,s,_);this.tileInfo.updateTileInfo(p),o.push(p)}return o}get tileInfo(){return this.view.featuresTilingScheme?.tileInfo??null}get tileSize(){return this.tileInfo!=null?this.tileInfo.size[0]:256}constructor(e){super(e),this.pointOfInterest=null}initialize(){this.addHandles(y(()=>this.view?.state?.viewpoint,()=>this.notifyChange("tilesCoveringView"),V))}};n([a({readOnly:!0})],f.prototype,"tiles",null),n([a({readOnly:!0})],f.prototype,"_scaleEnabled",null),n([a({readOnly:!0})],f.prototype,"tilesCoveringView",null),n([a({readOnly:!0})],f.prototype,"tileInfo",null),n([a({readOnly:!0})],f.prototype,"tileSize",null),n([a({constructOnly:!0})],f.prototype,"view",void 0),n([a({constructOnly:!0})],f.prototype,"layer",void 0),n([a()],f.prototype,"pointOfInterest",void 0),f=n([S("esri.views.2d.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],f);let w=class extends H{get _sortedTilesCoveringView(){const e=(this.view.featureTiles?.tiles?.toArray()??[]).map(Ce),t=this._effectivePointOfInterest;return t!=null&&e.sort((i,o)=>M(t,i)-M(t,o)),e}get tileInfo(){return this.view.featureTiles?.tilingScheme?.toTileInfo()??null}get tileSize(){return this.view.featureTiles?.tileSize??256}get _effectivePointOfInterest(){return this.pointOfInterest??this.view.pointsOfInterest?.focus.location}constructor(e){super(e),this.tiles=[],this.pointOfInterest=null}initialize(){this.addHandles([y(()=>this.view.featureTiles,e=>{this.removeHandles(W),e&&this.addHandles(e.addClient(),W)},b),y(()=>this._sortedTilesCoveringView,e=>this._set("tiles",e),{initial:!0,equals:(e,t)=>q(e,t,(i,o)=>i.id===o.id)})])}};function Ce({lij:[e,t,i],extent:o}){return new E(`${e}/${t}/${i}`,e,t,i,o)}n([a({readOnly:!0})],w.prototype,"tiles",void 0),n([a({readOnly:!0})],w.prototype,"_sortedTilesCoveringView",null),n([a({readOnly:!0})],w.prototype,"tileInfo",null),n([a({readOnly:!0})],w.prototype,"tileSize",null),n([a({constructOnly:!0})],w.prototype,"view",void 0),n([a()],w.prototype,"pointOfInterest",void 0),n([a()],w.prototype,"_effectivePointOfInterest",null),w=n([S("esri.views.3d.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],w);const W="feature-tiles",Ee=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let O=class extends H{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=Ee.map(e=>new K({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}})),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update())}update(){if(!this._enabled)return void this.clear();const e=r=>{if(r.label!=null)return r.label;let l=r.lij.toString();return r.loadPriority!=null&&(l+=` (${r.loadPriority})`),r.measures&&(l+=`[${r.measures.lodLevel}]`),l},t=this.getTiles(),i=new Array,o=new Set((this._labels.size,this._labels.keys()));t.forEach((r,l)=>{const u=r.lij.toString();o.delete(u);const _=r.measures?.lodLevel??r.level,p=r.geometry;if(this.enablePolygons&&!this._polygons.has(u)){const d=new R({geometry:p,symbol:this._symbols[_%this._symbols.length]});this._polygons.set(u,d),i.push(d)}if(this.enableLabels){const d=e(r),v=l/(t.length-1),I=A(0,200,v),k=A(20,6,v)/.75,z=r.loadPriority!=null&&r.loadPriority>=t.length,x=new C([I,z?0:I,z?0:I]),N=this.view.type==="3d"?()=>new Q({verticalOffset:new Y({screenLength:40/.75}),callout:new B({color:new C("white"),border:new te({color:new C("black")})}),symbolLayers:new X([new ee({text:d,halo:{color:"white",size:1/.75},material:{color:x},size:k})])}):()=>new ie({text:d,haloColor:"white",haloSize:1/.75,color:x,size:k}),F=this._labels.get(u);if(F){const T=N();F.symbol!=null&&JSON.stringify(T)===JSON.stringify(F.symbol)||(F.symbol=T)}else{const T=new R({geometry:p.extent.center,symbol:N()});this._labels.set(u,T),i.push(T)}}});const s=new Array;o.forEach(r=>{const l=this._polygons.get(r);l!=null&&(s.push(l),this._polygons.delete(r));const u=this._labels.get(r);u!=null&&(s.push(u),this._labels.delete(r))}),this.view.graphics.removeMany(s),this.view.graphics.addMany(i)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};n([a({constructOnly:!0})],O.prototype,"view",void 0),n([a({readOnly:!0})],O.prototype,"updating",void 0),n([a()],O.prototype,"enabled",null),O=n([S("esri.views.support.TileTreeDebugger")],O);let P=class extends O{constructor(e){super(e)}initialize(){const e=setInterval(()=>this._fetchDebugInfo(),2e3);this.addHandles(se(()=>clearInterval(e)))}getTiles(){if(!this._debugInfo)return[];const e=new Map,t=new Map;this._debugInfo.storedTiles.forEach(s=>{e.set(s.data.id,s.featureCount)}),this._debugInfo.pendingTiles.forEach(s=>{e.set(s.data.id,s.featureCount),t.set(s.data.id,s.state)});const i=s=>{const r=t.get(s),l=e.get(s)??"?";return r?`${r}:${l}
${s}`:`store:${l}
${s}`},o=new Map;return this._debugInfo.storedTiles.forEach(s=>{o.set(s.data.id,s.data)}),this._debugInfo.pendingTiles.forEach(s=>{o.set(s.data.id,s.data)}),Array.from(o.values()).map(s=>({lij:[s.level,s.row,s.col],level:s.level,geometry:ne.fromExtent(re(s.extent,this.view.spatialReference)),label:i(s.id)}))}_fetchDebugInfo(){this.handle.getDebugInfo(null).then(e=>{this._debugInfo=e,this.update()})}};n([a({constructOnly:!0})],P.prototype,"handle",void 0),P=n([S("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],P);let c=class extends H{get updating(){return this._updatingHandles.updating||this._workerHandleUpdating}constructor(e){super(e),this._updatingHandles=new j,this._suspendController=null,this.schedule=null,this.hasZ=!1,this.elevationAlignPointsInFeatures=async t=>{const i=[];for(const{points:o}of t.pointsInFeatures)for(const{z:s}of o)i.push(s);return{elevations:i,drapedObjectIds:new Set,failedObjectIds:new Set}},this.queryForSymbologySnapping=async()=>({candidates:[],sourceCandidateIndices:[]}),this.availability=0,this._workerHandleUpdating=!0,this.updateOutFields=ae(async(t,i)=>{await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateOutFields",[...t],i)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},i))})}destroy(){this._suspendController=oe(this._suspendController),this._workerHandle.destroy(),this._updatingHandles.destroy()}initialize(){this._workerHandle=new xe(this.schedule,{alignElevation:async(e,{signal:t})=>({result:await this.elevationAlignPointsInFeatures(e.query,t)}),getSymbologyCandidates:async(e,{signal:t})=>({result:await this.queryForSymbologySnapping(e,t)})}),this.addHandles([this._workerHandle.on("notify-updating",({updating:e})=>this._workerHandleUpdating=e),this._workerHandle.on("notify-availability",({availability:e})=>this._set("availability",e))])}async setup(e,t){const i=ze(e.layer);if(i==null)return;const o={configuration:G(e.configuration),serviceInfo:i,spatialReference:e.spatialReference.toJSON(),hasZ:this.hasZ,elevationInfo:e.layer.elevationInfo?.toJSON()};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("setup",o,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async configure(e,t){const i=G(e);await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("configure",i,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async refresh(e){await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("refresh",{},e)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},e))}async fetchCandidates(e,t){const{point:i,filter:o,coordinateHelper:s}=e,r={...e,point:ke(i[0],i[1],i[2],s.spatialReference.toJSON()),filter:o?.toJSON()};return this._workerHandle.invoke(r,t)}async updateTiles(e,t){const i={tiles:e.tiles,tileInfo:e.tileInfo!=null?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateTiles",i,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async handleEdits({historicMoment:e,addedFeatures:t,deletedFeatures:i,updatedFeatures:o},s){const r={historicMoment:e,addedFeatures:t?.map(({objectId:l})=>l).filter(L)??[],deletedFeatures:i?.map(({objectId:l,globalId:u})=>({objectId:l,globalId:u}))??[],updatedFeatures:o?.map(({objectId:l})=>l).filter(L)??[]};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("handleEdits",r,s)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},s))}async setHistoricMoment(e,t){await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("setHistoricMoment",{moment:e},t))}getDebugInfo(e){return this._workerHandle.invokeMethod("getDebugInfo",{},e)}async notifyElevationSourceChange(){await this._workerHandle.invokeMethod("notifyElevationSourceChange",{})}async notifySymbologyChange(){await this._workerHandle.invokeMethod("notifySymbologyChange",{})}async setSymbologySnappingSupported(e){await this._workerHandle.invokeMethod("setSymbologySnappingSupported",e)}async setSuspended(e){this._suspendController?.abort(),this._suspendController=new AbortController,await this._workerHandle.invokeMethod("setSuspended",e,this._suspendController.signal)}};function G(e){return{filter:e.filter!=null?e.filter.toJSON():null,customParameters:e.customParameters,viewType:e.viewType}}function ze(e){return e.geometryType==="multipatch"||e.geometryType==="mesh"?null:{url:e.parsedUrl?.path??"",fieldsIndex:e.fieldsIndex.toJSON(),geometryType:le.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:e.timeInfo?.toJSON()}}n([a({constructOnly:!0})],c.prototype,"schedule",void 0),n([a({constructOnly:!0})],c.prototype,"hasZ",void 0),n([a({constructOnly:!0})],c.prototype,"elevationAlignPointsInFeatures",void 0),n([a({constructOnly:!0})],c.prototype,"queryForSymbologySnapping",void 0),n([a({readOnly:!0})],c.prototype,"updating",null),n([a({readOnly:!0})],c.prototype,"availability",void 0),n([a()],c.prototype,"_workerHandleUpdating",void 0),c=n([S("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],c);class xe extends Oe{constructor(t,i){super("FeatureServiceSnappingSourceWorker","fetchCandidates",{},t,{strategy:"dedicated",client:i})}}let m=class extends H{get tiles(){return[new E("0/0/0",0,0,0,de(-1e8,-1e8,1e8,1e8))]}get tileInfo(){return new Te({origin:new ue({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new Fe({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}constructor(e){super(e),this.pointOfInterest=null}};n([a({readOnly:!0})],m.prototype,"tiles",null),n([a({readOnly:!0})],m.prototype,"tileInfo",null),n([a({readOnly:!0})],m.prototype,"tileSize",null),n([a({constructOnly:!0})],m.prototype,"layer",void 0),n([a()],m.prototype,"pointOfInterest",void 0),m=n([S("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],m);let h=class extends H{get _updateTilesParameters(){return{tiles:this._tilesOfInterest.tiles,tileInfo:this._tilesOfInterest.tileInfo,tileSize:this._tilesOfInterest.tileSize}}get _layerView(){return this.view?.allLayerViews.find(e=>e.layer===this._layer)}get _isSuspended(){return he(this._layer)&&!this.layerSource.sublayerSources.some(e=>e.enabled&&e.layer.visible)?!0:!!this.view&&(this._layerView?.suspended!==!1||!this.layerSource.enabled)}get updating(){return this._workerHandle?.updating||this._updatingHandles.updating}get _outFields(){const{view:e,_layerView:t,layerSource:i}=this,{layer:o}=i,{fieldsIndex:s,timeInfo:r,floorInfo:l,subtypeField:u}=o,_=t&&"filter"in t?t.filter:null,p=_?.where&&_.where!=="1=1"?this._getOrLoadWhereFields(_.where,s):[];if(_?.timeExtent&&r){const{startField:d,endField:v}=r,I=s.get(d)?.name??d,k=s.get(v)?.name??v;I&&p.push(I),k&&p.push(k)}if(e?.map&&be(e.map)&&e.map.utilityNetworks?.find(d=>d.isUtilityLayer(o))){const d=o.fieldsIndex.get("assetGroup")?.name,v=o.fieldsIndex.get("assetType")?.name;d&&v&&(p.push(d),p.push(v))}if(o&&l?.floorField&&e?.floors?.length){const d=s.get(l.floorField)?.name??l.floorField;d&&p.push(d)}if(u){const d=s.get(u)?.name??u;d&&p.push(d)}return new Set(p)}get configuration(){const{view:e}=this,{apiKey:t,customParameters:i}=this._layer,o=e!=null?e.type:"2d",s=this._layer.createQuery();return this._layerView&&"effectiveDisplayFilter"in this._layerView&&(s.where=pe(s.where,this._layerView.effectiveDisplayFilter?.where)),{filter:s,customParameters:t?{...i,token:t}:i,viewType:o}}get availability(){return this._workerHandle?.availability??0}get _layer(){return this.layerSource.layer}constructor(e){super(e),this._updatingHandles=new j,this._workerHandle=null,this._debug=null,this._memoizedMakeGetGroundElevation=ge(He)}initialize(){let e;const t=this.view;if(t==null||t.destroyed)this._tilesOfInterest=new m({layer:this._layer}),e=this._workerHandle=new c;else switch(t.type){case"2d":this._tilesOfInterest=new f({view:t,layer:this._layer}),e=this._workerHandle=new c;break;case"3d":{const{resourceController:i}=t,o=this._layer;this._tilesOfInterest=new w({view:t}),e=this._workerHandle=new c({schedule:s=>i.immediate.schedule(s),hasZ:this._layer.hasZ&&(this._layer.returnZ??!0),elevationAlignPointsInFeatures:async(s,r)=>{const l=await t.whenLayerView(o);return D(r),l.elevationAlignPointsInFeatures(s,r)},queryForSymbologySnapping:async(s,r)=>{const l=await t.whenLayerView(o);return D(r),l.queryForSymbologySnapping(s,r)}}),this.addHandles([t.elevationProvider.on("elevation-change",({context:s})=>{const{elevationInfo:r}=o;fe(s,r)&&g(e.notifyElevationSourceChange())}),y(()=>o.elevationInfo,()=>g(e.notifyElevationSourceChange()),b),y(()=>this._layerView?.layer?.renderer,()=>g(e.notifySymbologyChange()),b),y(()=>this._layerView?.symbologySnappingSupported??!1,s=>g(e.setSymbologySnappingSupported(s)),b),ce(()=>this._layerView?.layer,["edits","apply-edits","graphic-update"],()=>e.notifySymbologyChange())]);break}}this.addHandles([U(e)]),g(e.setup({layer:this._layer,spatialReference:this.spatialReference,configuration:this.configuration},null)),this._updatingHandles.add(()=>this._updateTilesParameters,()=>g(e.updateTiles(this._updateTilesParameters,null)),b),this.addHandles([y(()=>this.configuration,i=>g(e.configure(i,null)),V),y(()=>this._layer.historicMoment,i=>g(e.setHistoricMoment(i)),J),y(()=>this._outFields,i=>g(e.updateOutFields(i)),b),y(()=>this._isSuspended,i=>g(e.setSuspended(i)),J)]),t!=null&&this.addHandles(y(()=>Me.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES,i=>{i&&!this._debug?(this._debug=new P({view:t,handle:e}),this.addHandles(U(this._debug),"debug")):!i&&this._debug&&this.removeHandles("debug")},b)),this.addHandles([this.layerSource.layer.on("edits",i=>g(e.handleEdits(i,null))),this.layerSource.layer.on("apply-edits",i=>this._updatingHandles.addPromise(i.result))])}destroy(){this._updatingHandles.destroy(),this._tilesOfInterest.destroy()}refresh(){this._workerHandle?.refresh(null)}async fetchCandidates(e,t){const{coordinateHelper:i,point:o}=e;this._tilesOfInterest.pointOfInterest=i.arrayToPoint(o);const s=this._memoizedMakeGetGroundElevation(this.view,i.spatialReference);return(await this._workerHandle.fetchCandidates({...e},t)).candidates.map(r=>Ie(r,s))}getDebugInfo(e){return this._workerHandle.getDebugInfo(e)}_getOrLoadWhereFields(e,t){const{_whereModule:i}=this;if(!this._loadWhereModuleTask&&!i){const o=ye(async()=>{const s=await import("./WhereClause-CcYrBt_v.js").then(r=>r.W);return this._whereModule=s.default,this._whereModule});return this._loadWhereModuleTask=o,this._updatingHandles.addPromise(o.promise),[]}if(!i)return[];try{return i.create(e,{fieldsIndex:t}).fieldNames}catch{return[]}}};n([a({constructOnly:!0})],h.prototype,"spatialReference",void 0),n([a({constructOnly:!0})],h.prototype,"layerSource",void 0),n([a({constructOnly:!0})],h.prototype,"view",void 0),n([a()],h.prototype,"_tilesOfInterest",void 0),n([a({readOnly:!0})],h.prototype,"_updateTilesParameters",null),n([a()],h.prototype,"_layerView",null),n([a()],h.prototype,"_isSuspended",null),n([a({readOnly:!0})],h.prototype,"updating",null),n([a()],h.prototype,"_outFields",null),n([a({readOnly:!0})],h.prototype,"configuration",null),n([a({readOnly:!0})],h.prototype,"availability",null),n([a()],h.prototype,"_loadWhereModuleTask",void 0),n([a()],h.prototype,"_whereModule",void 0),h=n([S("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],h);export{h as FeatureServiceSnappingSource};
