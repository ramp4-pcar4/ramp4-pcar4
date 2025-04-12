import{e7 as ct,dJ as F,aM as A,df as Ot,a7 as M,bC as w,b4 as k,Q as V,bP as Lt,x as l,z as c,K as j,aK as Dt,cp as Ht,dx as Vt,d1 as Ut,fv as pt,aI as g,bR as It,bh as zt,bj as dt,bO as Nt,dK as Bt,aL as Ft}from"./main-C3PVbFgd.js";import{d as jt}from"./SnappingVisualizer2D-DdZiuyWb.js";import{I as Wt,F as Kt,M as Yt,h as Xt,p as et,E as it,n as _t,w as ut,V as mt,S as Zt}from"./editPlaneUtils-CV32e2ya.js";import{O as W,Q as gt}from"./projection-q5gROb6j.js";import yt from"./GraphicsLayer-BOpK6ryk.js";import{I as vt}from"./cimSymbolUtils-BO-Vy4ts.js";import{l as at}from"./ViewingMode-CyR_b1T8.js";import{s as qt,S as st}from"./GraphicManipulator-BoLT6RdS.js";import{a as P,E as ft,b as ot,p as Jt}from"./SnappingContext-bnphLYjg.js";import{f as Qt,n as $t}from"./MapView-D-pciNXi.js";import{E as St}from"./colorUtils-DEZ_bphm.js";import{o as te,v as bt,e as ee}from"./vec2-BnynUbeJ.js";import{n as wt,_ as ie}from"./vec2f64-CEUyUoff.js";import{s as U,q as K,c as O,r as I,P as Tt,g as rt,A as ae,u as L,I as Y}from"./vec32-vV1LFGew.js";import{W as X,Z}from"./boundedPlane-Ce8Chvzp.js";import{m as se}from"./drawUtils-6CQYgwm-.js";import{v as oe,w as T,x as re}from"./hitTestSelectUtils-BCTKHRNX.js";const ne=new ct({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[3.75,3.75],lineDashEnding:"HalfPattern",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:1.6,color:[255,255,255,255]},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:2,color:[0,0,0,255]}]}}}),le=new F({style:"circle",size:6,color:[127,127,127,1],outline:{color:[50,50,50],width:1}}),he=new F({style:"circle",size:6,color:[255,127,0,1],outline:{color:[50,50,50],width:1}});let D=class extends Wt{constructor(t){super(t),this._visualElementGraphics={regularVertices:null,activeVertex:null,activeEdge:null},this.activeFillSymbol=null,this.type="draw-2d",this._visualElementSymbols={outline:t.activeLineSymbol??ne,regularVertices:t.regularVerticesSymbol??le,activeVertex:t.activeVertexSymbol??he,fill:t.activeFillSymbol},t.activeVertexSymbol||this.addHandles(A(()=>this.view?.effectiveTheme?.accentColor,e=>{if(!e)return;const a=this._visualElementSymbols.activeVertex.clone().set({color:e});this._visualElementGraphics.activeVertex?.set("symbol",a),this._visualElementSymbols={...this._visualElementSymbols,activeVertex:a}},Ot))}normalizeCtorArgs(t){const e={...t};return delete e.activeFillSymbol,delete e.activeVertexSymbol,delete e.regularVerticesSymbol,delete e.activeLineSymbol,e}initializeGraphic(t){return this._visualElementSymbols.fill!=null&&(t.symbol=this._visualElementSymbols.fill),this.internalGraphicsLayer.graphics.sort(q),M()}makeDrawOperation(){const{defaultZ:t,hasZ:e,view:a}=this;return this._createOrUpdateGraphic(null),new Kt({view:a,manipulators:this.manipulators,geometryType:Yt(this.geometryType),drawingMode:this.mode,hasZ:e,defaultZ:t,snapToSceneEnabled:this.snapToScene,drawSurface:new Xt(a,e,t),hasM:!1,snappingManager:this.snappingManager,snappingVisualizer:new jt(this.internalGraphicsLayer),graphic:this.graphic,cursor:this.cursor,constraintsEnabled:!0})}onActiveVertexChanged(t){if(this.geometryType==="point")return M();const[e,a]=t,i=new w({x:e,y:a,spatialReference:this.view.spatialReference});return this._visualElementGraphics.activeVertex!=null?(this._visualElementGraphics.activeVertex.geometry=i,M()):(this._visualElementGraphics.activeVertex=new k({geometry:i,symbol:this._visualElementSymbols.activeVertex,attributes:{displayOrder:2}}),this.internalGraphicsLayer.add(this._visualElementGraphics.activeVertex),this.internalGraphicsLayer.graphics.sort(q),M(()=>{this._visualElementGraphics.activeVertex!=null&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.activeVertex),this._visualElementGraphics.activeVertex=V(this._visualElementGraphics.activeVertex))}))}onCursorEdgeChanged(t){return this._visualElementGraphics.activeEdge!=null?(this._visualElementGraphics.activeEdge.geometry=t,M()):(this._visualElementGraphics.activeEdge=new k({geometry:t,symbol:this._visualElementSymbols.outline,attributes:{displayOrder:0}}),this.internalGraphicsLayer.add(this._visualElementGraphics.activeEdge),this.internalGraphicsLayer.graphics.sort(q),M(()=>{this._visualElementGraphics.activeEdge!=null&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.activeEdge),this._visualElementGraphics.activeEdge=V(this._visualElementGraphics.activeEdge))}))}onRegularVerticesChanged(t){const e=new Lt({points:t,spatialReference:this.view.spatialReference});return this._visualElementGraphics.regularVertices!=null?(this._visualElementGraphics.regularVertices.geometry=e,M()):(this._visualElementGraphics.regularVertices=new k({geometry:e,symbol:this._visualElementSymbols.regularVertices,attributes:{displayOrder:1}}),this.internalGraphicsLayer.add(this._visualElementGraphics.regularVertices),this.internalGraphicsLayer.graphics.sort(q),M(()=>{this._visualElementGraphics.regularVertices!=null&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.regularVertices),this._visualElementGraphics.regularVertices=V(this._visualElementGraphics.regularVertices))}))}};function q(t,e){return(t.attributes?.displayOrder??-1/0)-(e.attributes?.displayOrder??-1/0)}l([c()],D.prototype,"activeFillSymbol",void 0),l([c({readOnly:!0})],D.prototype,"type",void 0),l([c({constructOnly:!0,nonNullable:!0})],D.prototype,"view",void 0),D=l([j("esri.views.2d.interactive.editingTools.draw.DrawGraphicTool2D")],D);let nt=class{get hovering(){return this.someManipulator(t=>t.hovering)}get grabbing(){return this.someManipulator(t=>t.grabbing)}get dragging(){return this.someManipulator(t=>t.dragging)}hasManipulator(t){return this.someManipulator(e=>e===t)}someManipulator(t){let e=!1;return this.forEachManipulator(a=>{!e&&t(a)&&(e=!0)}),e}};var z;(function(t){t[t.TRANSLATE_XY=0]="TRANSLATE_XY",t[t.SCALE=1]="SCALE",t[t.ROTATE=2]="ROTATE"})(z||(z={}));let Et=class extends nt{constructor(t){super(),this._view=t.view,this._tool=t.tool,this._graphic=t.graphic,this._manipulator=this._createManipulator(),this.forEachManipulator(e=>this._tool.manipulators.add(e))}destroy(){this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()}),this._tool=null,this._view=null,this._manipulator=null,this._graphic=null}forEachManipulator(t){t(this._manipulator,z.TRANSLATE_XY)}createDragPipeline(t,e){let a=null,i=null,s=0,r=0,n=0;const{offsetX:o,offsetY:d,size:h}=qt(this._graphic.symbol);return et(this._manipulator,(m,y)=>{y.next(_=>{if(_.action==="start"){const S=t();a=S.editGeometryOperations,i=S.constraints}return _}).next(it(this._view)).next(_=>{const{x:S,y:p,z:u}=_.mapEnd;if(i&&(S+o<i.xmin||p+d-h<i.ymin||S+o>i.xmax||p+d-h>i.ymax))return _;(_.action==="start"||s===0&&r===0&&n===0)&&(s=_.mapStart.x,r=_.mapStart.y,n=_.mapStart.z);const v=S-s,b=p-r,H=u-n;s=S,r=p,n=u;const x=_.action==="start"?P.NEW_STEP:P.ACCUMULATE_STEPS,Q=a.move(v,b,H,x);return e(_,Q),_})})}_createManipulator(){const t=this._view,e=this._graphic;return new st({view:t,graphic:e,selectable:!0,cursor:"move"})}};const G={up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",toggleOpacity:"t",shift:"Shift",primaryKey:Qt},ce=1,pe=10,Pt=new Dt("#009af2");let E=class extends _t{constructor(t){super(t),this._isOpacityToggled=!1,this._isModifierActive=!1,this._factor=1,this._initialControlPoints=null,this._graphicsLayer=new yt({internal:!0,listMode:"hide",visible:!1,effect:"drop-shadow(0px, 0px, 3px)"}),this._undoStack=[],this._redoStack=[],this._sharedUndoStack=[],this._sharedRedoStack=[],this._highlightHandle=null,this.activeHandle=0,this.type="reshape"}initialize(){this._initialize()}destroy(){const{map:t}=this.view;this._controlPointManipulations.forEach(e=>e.destroy()),this._controlPointEditGeometryOperations.forEach(e=>e.destroy()),t.removeMany([this._graphicsLayer]),this._graphicsLayer.removeAll(),this._graphicsLayer=V(this._graphicsLayer),this._georeference=null,this._controlPointGraphics=null,this._controlPointManipulations=null,this._graphicsLayer=null,this._controlPointEditGeometryOperations=null,this._undoStack=null,this._redoStack=null,this._initialControlPoints=null,this._sharedUndoStack=null,this._sharedRedoStack=null}get _hasValidSpatialReference(){return Ht(this.view.spatialReference)}onActivate(){this.visible=!0}onDeactivate(){this.visible=!1}onShow(){this._graphicsLayer.visible=!0}onHide(){this._graphicsLayer.visible=!1}canUndo(){const t=this._undoStack[this._undoStack.length-1];return t!=null&&this._controlPointEditGeometryOperations[t].canUndo}canRedo(){const t=this._redoStack[this._redoStack.length-1];return t!=null&&this._controlPointEditGeometryOperations[t].canRedo}undo(){if(this._undoStack.length>0){const t=this._undoStack.pop();this._controlPointEditGeometryOperations[t].undo(),this.updateGraphics(),this._redoStack.push(t)}}redo(){if(this._redoStack.length>0){const t=this._redoStack.pop();this._controlPointEditGeometryOperations[t].redo(),this.updateGraphics(),this._undoStack.push(t)}}refresh(){const{mediaElement:t}=this;if(t.georeference==null)return;const e=t.georeference;e.type==="control-points"&&e.coords!=null&&(this._georeference=e,this._georeference.controlPoints.forEach(({mapPoint:a},i)=>{const s=this._controlPointEditGeometryOperations[i],r=s.data.components[0].vertices[0];s.setVertexPosition(r,s.data.coordinateHelper.pointToVector(a))}),this.updateGraphics())}reset(){this._georeference.controlPoints=this._initialControlPoints,this.refresh(),this._sharedUndoStack.length=0,this._sharedRedoStack.length=0}updateGraphics(){const t=this._georeference,e=t.controlPoints,a=e[0].mapPoint.spatialReference,i=this._hasValidSpatialReference;this._georeference.controlPoints=this._controlPointEditGeometryOperations.map((s,r)=>{const n=s.data.geometry;return this._controlPointGraphics[r].geometry=n,{mapPoint:W(n,a),sourcePoint:i?e[r].sourcePoint:t.toSource(n)}})}updateActiveHandle(t){if(this.activeHandle===t)return;const e=this._controlPointGraphics[this.activeHandle].symbol.clone();vt(e,this.view.effectiveTheme.accentColor),this._controlPointGraphics[this.activeHandle].symbol=e;const a=this._controlPointGraphics[t].symbol.clone();vt(a,Pt),this._controlPointGraphics[t].symbol=a,this.activeHandle=t,this.view.surface===document.activeElement&&this.highlightActiveHandle()}async highlightActiveHandle(){this.removeHighlightActiveHandle();const t=await this.view.whenLayerView(this._graphicsLayer);this._highlightHandle=t.highlight(this._controlPointGraphics[this.activeHandle])}removeHighlightActiveHandle(){this._highlightHandle&&this._highlightHandle.remove()}setSharedUndoStack(t){this._sharedUndoStack=t}setSharedRedoStack(t){this._sharedRedoStack=t}async _initialize(){const{view:t,mediaElement:e}=this;if(e.georeference==null)return;const a=e.georeference;a.type==="control-points"&&a.coords!=null&&(this._georeference=a,this._initialControlPoints=this._georeference.controlPoints,t.map.addMany([this._graphicsLayer]),t.focus(),this.visible=!1,this.finishToolCreation(),await this._loadProjectionEngine(),this._controlPointEditGeometryOperations=this._georeference.controlPoints.map(({mapPoint:i})=>ft.fromGeometry(W(i,t.spatialReference),at.Local)),this._controlPointGraphics=this._controlPointEditGeometryOperations.map((i,s)=>new k({symbol:new ct({data:{type:"CIMSymbolReference",symbol:{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,colorLocked:!0,anchorPoint:{x:0,y:-15.75},anchorPointUnits:"Absolute",dominantSizeAxis3D:"Y",size:9,billboardMode3D:"FaceNearPlane",frame:{xmin:0,ymin:0,xmax:84.3,ymax:84.3},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[83.2,32.5],[84.3,40.7],[83.8,48.9],[81.7,56.9],[78.1,64.3],[73,70.9],[66.9,76.4],[59.7,80.5],[51.9,83.2],[43.7,84.3],[35.4,83.8],[27.4,81.7],[20,78],[13.4,73],[7.9,66.8],[3.8,59.7],[1.1,51.9],[0,43.7],[.5,35.4],[2.6,27.4],[6.3,20],[11.3,13.4],[17.5,7.9],[24.7,3.8],[32.5,1.1],[39.8,.1],[47.1,.3],[54.3,1.8],[61.1,4.5],[67.4,8.4],[72.9,13.3],[77.4,19.1],[80.9,25.5],[83.2,32.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:[255,255,255,255]}]}}],scaleSymbolsProportionally:!0,respectFrame:!0,clippingPath:{type:"CIMClippingPath",clippingType:"Intersect",path:{rings:[[[0,0],[84.3,0],[84.3,84.3],[0,84.3],[0,0]]]}},rotation:0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-11.25},anchorPointUnits:"Absolute",dominantSizeAxis3D:"Y",size:22.5,billboardMode3D:"FaceNearPlane",frame:{xmin:0,ymin:0,xmax:197.7,ymax:294.7},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[98.9,0],[119.4,23.2],[139.4,49.3],[156.8,75.2],[171.2,100.8],[182.4,125.3],[190.6,148.8],[195.7,171.4],[197.7,192.9],[197.7,195.8],[197.7,200.3],[197.6,202.5],[197.5,204.8],[197.3,207.1],[197,209.4],[196.7,211.7],[196.4,214.1],[196,216.4],[195.5,218.7],[195,221.1],[194.4,223.4],[193.7,225.8],[193,228.1],[192.2,230.5],[191.4,232.8],[190.5,235.1],[189.5,237.5],[188.5,239.7],[187.4,242],[186.2,244.3],[185,246.5],[183.7,248.7],[182.4,250.9],[181,253.1],[179.5,255.2],[178,257.3],[176.4,259.4],[174.7,261.4],[173.1,263.3],[171.3,265.3],[169.5,267.2],[167.7,269],[165.8,270.8],[163.9,272.5],[161.9,274.2],[159.9,275.8],[157.8,277.4],[155.7,278.9],[153.6,280.4],[151.4,281.7],[149.2,283.1],[147,284.4],[144.8,285.6],[142.5,286.7],[140.3,287.8],[138,288.8],[135.7,289.8],[133.4,290.7],[131,291.5],[128.7,292.3],[126.4,293],[124,293.6],[121.7,294.2],[119.4,294.7],[117,295.2],[114.7,295.6],[112.4,296],[110.1,296.3],[107.8,296.5],[105.5,296.7],[103.3,296.8],[101.1,296.9],[98.8,296.9],[83.1,295.7],[67.8,292],[53.3,285.9],[39.9,277.5],[28.1,267.2],[18,255.1],[10,241.5],[4.2,226.9],[.9,211.5],[0,195.8],[.1,192.9],[2.1,171.4],[7.2,148.8],[15.4,125.3],[26.6,100.8],[41,75.2],[58.4,49.3],[78.4,23.2],[98.9,0]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:s===this.activeHandle?Pt.toArray():this.view.effectiveTheme.accentColor.toArray()}]}}],scaleSymbolsProportionally:!0,respectFrame:!0,clippingPath:{type:"CIMClippingPath",clippingType:"Intersect",path:{rings:[[[0,0],[197.7,0],[197.7,294.7],[0,294.7],[0,0]]]}},rotation:0}],haloSize:1,scaleX:1,angleAlignment:"Display",angle:0}}}),geometry:i.data.geometry})),this._graphicsLayer.graphics.addMany([...this._controlPointGraphics]),this._controlPointManipulations=this._controlPointGraphics.map(i=>new Et({tool:this,view:t,graphic:i})),this.addHandles([...this._controlPointManipulations.map((i,s)=>i.createDragPipeline(this._getInfo.bind(this,s),(r,n)=>{r.action==="start"&&(this._undoStack.push(s),this._redoStack=[],this._sharedUndoStack.push({tool:this,operation:n}),this._sharedRedoStack.length=0),this.updateGraphics()})),A(()=>this.view.scale,()=>this.active?this.updateGraphics():null)]),this._controlPointManipulations.forEach((i,s)=>{const r=n=>{this.addHandles([n.events.on(["click","grab-changed"],o=>this.updateActiveHandle(s))])};i.forEachManipulator(r)}),this.addHandles([t.on("key-down",i=>{t.activeTool===this&&(i.key!==G.shift||i.repeat||(this._isModifierActive=!0,i.stopPropagation()),i.key!==G.toggleOpacity||i.repeat||(e.opacity*=this._isOpacityToggled?2:.5,this._isOpacityToggled=!this._isOpacityToggled,i.stopPropagation()),i.key!==G.primaryKey||i.repeat||(this._factor=pe,i.stopPropagation()),this._isModifierActive&&(i.key===G.up&&(this._move(0,this._factor),i.stopPropagation()),i.key===G.down&&(this._move(0,-this._factor),i.stopPropagation()),i.key===G.left&&(this._move(-this._factor,0),i.stopPropagation()),i.key===G.right&&(this._move(this._factor,0),i.stopPropagation())))}),t.on("key-up",i=>{t.activeTool===this&&(i.key===G.shift&&(this._isModifierActive=!1,i.stopPropagation()),i.key===G.primaryKey&&(this._factor=ce,i.stopPropagation()))})]))}async _loadProjectionEngine(){const t=this._georeference.controlPoints[0].mapPoint;return gt(t.spatialReference,this.view.spatialReference)}_getInfo(t){return{editGeometryOperations:this._controlPointEditGeometryOperations[t],constraints:this._hasValidSpatialReference?null:{xmin:0,ymin:0,xmax:this._georeference.width,ymax:this._georeference.height}}}_move(t,e){const a=this._controlPointEditGeometryOperations[this.activeHandle].move(t*this.view.resolution,e*this.view.resolution,0,P.NEW_STEP);this._sharedUndoStack.push({tool:this,operation:a}),this._sharedRedoStack.length=0,this.updateGraphics()}};l([c()],E.prototype,"_hasValidSpatialReference",null),l([c()],E.prototype,"activeHandle",void 0),l([c({constructOnly:!0,nonNullable:!0})],E.prototype,"mediaElement",void 0),l([c({readOnly:!0})],E.prototype,"type",void 0),l([c({constructOnly:!0})],E.prototype,"view",void 0),E=l([j("esri.views.2d.interactive.editingTools.ControlPointsTransformTool")],E);function Gt(t,e){t.action==="start"?e.cursor="grabbing":e.cursor="grab"}class de{constructor(){this._lastDragEvent=null,this.next=new ut,this._enabled=!1}get enabled(){return this._enabled}set enabled(e){if(this._enabled!==e&&this._lastDragEvent!=null){const a={...this._lastDragEvent,action:"update"};e&&this._adjustScaleFactors(a),this.next.execute(a)}this._enabled=e}createDragEventPipelineStep(){return this._lastDragEvent=null,e=>(this._lastDragEvent=e.action!=="end"?{...e}:null,this._enabled&&this._adjustScaleFactors(e),e)}_adjustScaleFactors(e){const a=e.direction[0]!==0&&e.direction[1]!==0?Math.max(Math.abs(e.factor1),Math.abs(e.factor2)):e.direction[0]===0?Math.abs(e.factor2):Math.abs(e.factor1);e.factor1=e.factor1<0?-a:a,e.factor2=e.factor2<0?-a:a}}class _e{constructor(){this._lastDragEvent=null,this.next=new ut,this._enabled=!1}get enabled(){return this._enabled}set enabled(e){if(this._enabled!==e&&this._lastDragEvent!=null){const a={...this._lastDragEvent,action:"update"};e&&this._adjustRotateAngle(a),this.next.execute(a)}this._enabled=e}createDragEventPipelineStep(){return this._lastDragEvent=null,e=>(this._lastDragEvent=e.action!=="end"?{...e}:null,this._enabled&&this._adjustRotateAngle(e),e)}_adjustRotateAngle(e){const a=Vt(e.rotateAngle);e.rotateAngle=Ut(5*Math.round(a/5))}}class ue extends nt{constructor(e){super(),this._handles=new pt,this._originCache=g(),this._view=e.view,this._tool=e.tool,this._graphic=e.graphic,this._snapRotation=e.snapRotation,this._manipulator=this._createManipulator(),this._handles.add([this._manipulator.events.on("grab-changed",a=>Gt(a,this._manipulator))]),this.forEachManipulator(a=>this._tool.manipulators.add(a))}destroy(){this._handles.destroy(),this.forEachManipulator(e=>{this._tool.manipulators.remove(e),e.destroy()}),this._tool=null,this._view=null,this._manipulator=null,this._snapRotation=null,this._graphic=null,this._handles=null,this._originCache=null}forEachManipulator(e){e(this._manipulator,z.ROTATE)}createDragPipeline(e,a){let i=null,s=null;return et(this._manipulator,(r,n)=>{n.next(o=>{if(o.action==="start"){r.cursor="grabbing";const d=e();i=d.plane,s=d.editGeometryOperations}return o}).next(it(this._view)).next(o=>({...o,rotateAngle:se(o.mapStart,o.mapEnd,{x:i.origin[0],y:i.origin[1]},!0)})).next(this._snapRotation.createDragEventPipelineStep(),this._snapRotation.next).next(o=>{const d=U(this._originCache,i.origin),h=o.action==="start"?P.NEW_STEP:P.ACCUMULATE_STEPS,m=s.rotate(d,o.rotateAngle,h,ot.REPLACE);return mt(m,i),a(o,m),o}).next(o=>(o.action==="end"&&(r.cursor="grab"),o))})}_createManipulator(){const e=this._view,a=this._graphic;return new st({view:e,graphic:a,selectable:!0,cursor:"grab"})}}const lt=10,Rt=1e-6,me=.3;function Mt(t){const e=I(t.basis1),a=I(t.basis2);return me*Math.min(e,a)}class ge extends nt{constructor(e){super(),this._handles=new pt,this._planeStart=X(),this._displayPlaneStart=X(),this._originCache=g(),this._axisCache=wt(),this._renderStartCache=g(),this._renderEndCache=g(),this._resizeOriginCache=g(),this._view=e.view,this._tool=e.tool,this._graphic=e.graphic,this._direction=e.direction,this._preserveAspectRatio=e.preserveAspectRatio,this._manipulator=this._createManipulator(),this._handles.add([this._manipulator.events.on("grab-changed",a=>Gt(a,this._manipulator))]),this.forEachManipulator(a=>this._tool.manipulators.add(a))}destroy(){this._handles.destroy(),this.forEachManipulator(e=>{this._tool.manipulators.remove(e),e.destroy()}),this._tool=null,this._view=null,this._graphic=null,this._manipulator=null,this._direction=null,this._handles=null,this._planeStart=null,this._displayPlaneStart=null,this._originCache=null,this._axisCache=null,this._renderStartCache=null,this._renderEndCache=null,this._resizeOriginCache=null,this._preserveAspectRatio=null}forEachManipulator(e){e(this._manipulator,z.SCALE)}createDragPipeline(e,a){let i=null,s=null,r=null,n=0,o=null,d=null;const h=this._planeStart,m=this._displayPlaneStart,y=this._direction;return et(this._manipulator,(_,S)=>{S.next(p=>{if(p.action==="start"){_.cursor="grabbing";const u=e();i=u.plane,s=u.displayPlane,r=u.editGeometryOperations,n=lt*this._view.resolution,Z(i,h),Z(s,m);const v=It(r.data.spatialReference);o=v?v.valid[1]-v.valid[0]-3*lt*this._view.resolution:null}return p}).next(it(this._view)).next(p=>{const u=U(this._renderStartCache,[p.mapStart.x,p.mapStart.y,0]),v=U(this._renderEndCache,[p.mapEnd.x,p.mapEnd.y,0]),b=U(this._resizeOriginCache,m.origin);K(b,b,m.basis1,-y[0]),K(b,b,m.basis2,-y[1]),O(v,v,b),O(u,u,b);const H=y[0]!==0&&y[1]!==0,x=Mt(m),Q=Mt(s)/x,ht=($,tt)=>{if($===0)return 1;let C=I(tt),N=.5*$*Tt(tt,v)/C;const B=N<0?-1:1;H&&(N+=(C-.5*$*Tt(tt,u)/C)*B*Q);const At=C<1.5*n?1:Rt;return C=Math.max(C-n,Rt),B>0&&(N-=lt*this._view.resolution),B*Math.max(B*(N/C),At)},xt=ht(y[0],m.basis1),Ct=ht(y[1],m.basis2);return{...p,direction:y,factor1:xt,factor2:Ct}}).next(this._preserveAspectRatio.createDragEventPipelineStep(),this._preserveAspectRatio.next).next(p=>{const u=U(this._originCache,h.origin);K(u,u,h.basis1,-y[0]),K(u,u,h.basis2,-y[1]);const v=te(this._axisCache,h.basis1[0],h.basis1[1]);bt(v,v);const b=r.data.allVertices,H=p.action==="start"?P.NEW_STEP:P.ACCUMULATE_STEPS,x=r.scaleVertices(b,u,v,p.factor1,p.factor2,H,ot.REPLACE);return o&&o<r.data.geometry.extent.width&&d?r.updateVertices(b,d):(Z(h,i),mt(x,i),d=x.operation,a(p,x)),p}).next(p=>(p.action==="end"&&(_.cursor="grab"),p))})}_createManipulator(){return new st({view:this._view,graphic:this._graphic,selectable:!0,cursor:"grab"})}}const ye=80,ve=10,fe=30,Se=[[1,1],[1,-1],[-1,-1],[-1,1],[1,0],[0,-1],[-1,0],[0,1]],kt=1,be=10;let f=class extends _t{constructor(t){super(t),this._initialControlPoints=null,this._initialGeometry=null,this._graphic=null,this._planeCache=X(),this._displayPlaneCache=X(),this._mainAxisCache=wt(),this._rotationHandleCache=g(),this._cornerA=g(),this._cornerB=g(),this._cornerC=g(),this._cornerD=g(),this._avgAB=g(),this._avgBC=g(),this._avgCD=g(),this._avgDA=g(),this._preserveAspectRatio=new de,this._snapRotation=new _e,this._graphicsLayer=new yt({internal:!0,listMode:"hide",visible:!1}),this._sharedUndoStack=[],this._sharedRedoStack=[],this._isOpacityToggled=!1,this._factor=kt,this.preserveAspectRatio=null,this.snapRotation=null,this.type="transform"}initialize(){this._initialize()}destroy(){const{map:t}=this.view;this._dragManipulation.destroy(),this._rotateManipulation.destroy(),this._scaleManipulations.forEach(e=>e.destroy()),this._editGeometryOperations.destroy(),t.removeMany([this._graphicsLayer]),this._graphicsLayer.removeAll(),this._graphicsLayer=V(this._graphicsLayer),this._initialControlPoints=null,this._initialGeometry=null,this._graphic=null,this._preserveAspectRatio=null,this._snapRotation=null,this._planeCache=null,this._displayPlaneCache=null,this._rotationHandleCache=null,this._mainAxisCache=null,this._cornerA=null,this._cornerB=null,this._cornerC=null,this._cornerD=null,this._avgAB=null,this._avgBC=null,this._avgCD=null,this._avgDA=null,this._sharedUndoStack=null,this._sharedRedoStack=null}get _plane(){const t=this._graphic.geometry;if(t==null)return null;const e=this._editGeometryOperations.data,a=e.components[0].edges[0],i=ee(this._mainAxisCache,a.leftVertex.pos,a.rightVertex.pos);bt(i,i);let s=ye*this.view.resolution;const r=this.view.spatialReference;return zt(r,t.spatialReference)&&(s*=dt(r)/dt(t.spatialReference)),Zt(i,e,s,this._planeCache)}get _displayPlane(){const t=this._plane;if(!t)return null;const e=this._displayPlaneCache;Z(t,e);const a=ve*this.view.resolution;return rt(e.basis1,e.basis1,1+a/I(e.basis1)),rt(e.basis2,e.basis2,1+a/I(e.basis2)),e}get _backgroundGraphicGeometry(){const t=this._displayPlane;if(!t)return null;const e=this.view.spatialReference;return this._updateDisplayPlaneConrers(t),new Nt({spatialReference:e,rings:[[this._cornerA,this._cornerB,this._cornerC,this._cornerD,this._cornerA]]})}get _rotateGraphicGeometry(){const t=this._plane;if(!t)return null;const e=this._rotationHandleCache;return ae(e,t.basis1),rt(e,e,fe*this.view.resolution),L(e,e,t.origin),L(e,e,t.basis1),new w({x:e[0],y:e[1],spatialReference:this.view.spatialReference})}get _scaleGraphicGeometries(){const t=this._displayPlane;if(!t)return[];const e=this.view.spatialReference;this._updateDisplayPlaneConrers(t);const{_cornerA:a,_cornerB:i,_cornerC:s,_cornerD:r}=this,n=Y(this._avgAB,a,i,.5),o=Y(this._avgBC,i,s,.5),d=Y(this._avgCD,s,r,.5),h=Y(this._avgDA,r,a,.5);return[new w({x:a[0],y:a[1],spatialReference:e}),new w({x:i[0],y:i[1],spatialReference:e}),new w({x:s[0],y:s[1],spatialReference:e}),new w({x:r[0],y:r[1],spatialReference:e}),new w({x:n[0],y:n[1],spatialReference:e}),new w({x:o[0],y:o[1],spatialReference:e}),new w({x:d[0],y:d[1],spatialReference:e}),new w({x:h[0],y:h[1],spatialReference:e})]}onActivate(){this.visible=!0}onDeactivate(){this.visible=!1}onShow(){this._graphicsLayer.visible=!0}onHide(){this._graphicsLayer.visible=!1}canUndo(){return this._editGeometryOperations.canUndo}canRedo(){return this._editGeometryOperations.canRedo}undo(){this._editGeometryOperations.undo(),this.updateGraphics()}redo(){this._editGeometryOperations.redo(),this.updateGraphics()}refresh(){const{view:t,target:e}=this,a="georeference"in e?e.georeference.coords:e.geometry,i=this._editGeometryOperations,s=i.data.components[0].vertices,r=Jt.fromGeometry(W(a,t.spatialReference),at.Local).components[0].vertices;s.forEach((n,o)=>{i.setVertexPosition(n,r[o].pos)}),this.updateGraphics()}reset(){const{target:t}=this;if("georeference"in t){const e=t.georeference;e.type==="control-points"&&(e.controlPoints=this._initialControlPoints)}else t.geometry=this._initialGeometry;this.refresh(),this._sharedUndoStack.length=0,this._sharedRedoStack.length=0}updateGraphics(){const t=this._editGeometryOperations.data.geometry;"georeference"in this.target&&(this.target.georeference.coords=t),this._graphic.geometry=t,this._backgroundGraphic.geometry=this._backgroundGraphicGeometry,this._rotateGraphic.geometry=this._rotateGraphicGeometry,this._scaleGraphicGeometries.forEach((e,a)=>{this._scaleGraphics[a].geometry=e})}setSharedUndoStack(t){this._sharedUndoStack=t}setSharedRedoStack(t){this._sharedRedoStack=t}async _initialize(){const{view:t,target:e}=this;if("georeference"in e){const s=e.georeference;this._graphic=new k({geometry:s.coords}),this._initialControlPoints=s.type==="control-points"?s.controlPoints:null}else this._graphic=e,this._initialGeometry=e.geometry;t.map.addMany([this._graphicsLayer]),t.focus(),this.visible=!1,this.finishToolCreation(),await this._loadProjectionEngine(),this._editGeometryOperations=ft.fromGeometry(W(this._graphic.geometry,t.spatialReference),at.Local),this._backgroundGraphic=new k({symbol:new Bt({color:"transparent",outline:{type:"simple-line",color:t.effectiveTheme.accentColor,width:2}}),geometry:this._backgroundGraphicGeometry}),this._rotateGraphic=new k({symbol:new F({color:St(t.effectiveTheme.accentColor),outline:{type:"simple-line",color:t.effectiveTheme.accentColor,width:1}}),geometry:this._rotateGraphicGeometry}),this._scaleGraphics=this._scaleGraphicGeometries.map(s=>new k({symbol:new F({size:6,style:"square",color:St(t.effectiveTheme.accentColor),outline:{type:"simple-line",color:t.effectiveTheme.accentColor,width:1}}),geometry:s})),this._graphicsLayer.graphics.addMany([this._backgroundGraphic,this._rotateGraphic,...this._scaleGraphics]),this._dragManipulation=new Et({tool:this,view:t,graphic:this._graphic}),this._rotateManipulation=new ue({tool:this,view:t,graphic:this._rotateGraphic,snapRotation:this._snapRotation}),this._scaleManipulations=this._scaleGraphics.map((s,r)=>new ge({tool:this,view:t,graphic:s,direction:Se[r],preserveAspectRatio:this._preserveAspectRatio})),this.addHandles([this._dragManipulation.createDragPipeline(this._getInfo.bind(this),this._updateGraphics.bind(this)),this._rotateManipulation.createDragPipeline(this._getInfo.bind(this),this._updateGraphics.bind(this)),...this._scaleManipulations.map(s=>s.createDragPipeline(this._getInfo.bind(this),this._updateGraphics.bind(this))),A(()=>this.view.scale,()=>this.active?this.updateGraphics():null),t.on("click",async s=>{if(t.activeTool!=null&&t.activeTool!==this)return;const r=$t(s),n=[];t.map.allLayers.forEach(h=>{h.type!=="vector-tile"&&h.type!=="imagery"||n.push(h)});const o=await this.view.hitTest(r,{exclude:n}),d=o.results;if(d.length===0)t.activeTool=null;else{const h=oe(o.results),m="georeference"in e,y=d.map(S=>S.type==="media"?S.element:null).filter(Boolean),_=new Set([...this._graphicsLayer.graphics,m?null:e].filter(Boolean));m&&y.includes(e)||h!=null&&_.has(h.graphic)?t.activeTool==null&&(t.activeTool=this):t.activeTool=null}})]);const a=s=>{this.addHandles(s.events.on("grab-changed",r=>{"georeference"in e&&(r.action==="start"?e.opacity*=.5:r.action==="end"&&(e.opacity*=2))}))};this._dragManipulation.forEachManipulator(a),this._rotateManipulation.forEachManipulator(a),this._scaleManipulations.forEach(s=>s.forEachManipulator(a));const i=new re;i.addToggle(T.preserveAspectRatio,()=>{this.preserveAspectRatio==null&&(this._preserveAspectRatio.enabled=!this._preserveAspectRatio.enabled)}),i.addToggle(T.rotateIncrements,()=>{this.snapRotation==null&&(this._snapRotation.enabled=!this._snapRotation.enabled)}),i.add(T.toggleOpacity,()=>{"georeference"in e&&(e.opacity*=this._isOpacityToggled?2:.5,this._isOpacityToggled=!this._isOpacityToggled)}),i.addToggle(T.factorModifier,s=>this._factor=s.type==="key-down"?be:kt),i.add(T.scaleUp,()=>this._scale(this._factor)),i.add(T.scaleDown,()=>this._scale(-this._factor)),i.add(T.moveUp,()=>this._move(0,this._factor)),i.add(T.moveDown,()=>this._move(0,-this._factor)),i.add(T.moveLeft,()=>this._move(-this._factor,0)),i.add(T.moveRight,()=>this._move(this._factor,0)),this.addHandles([t.on("key-down",s=>{t.activeTool===this&&i.dispatch(t.inputManager,s)}),t.on("key-up",s=>{t.activeTool===this&&i.dispatch(t.inputManager,s)})])}async _loadProjectionEngine(){const t=this._graphic.geometry;return gt(t.spatialReference,this.view.spatialReference)}_updateDisplayPlaneConrers(t){const{basis1:e,basis2:a,origin:i}=t,s=this._cornerA;L(s,i,e),L(s,s,a);const r=this._cornerB;L(r,i,e),O(r,r,a);const n=this._cornerC;O(n,i,e),O(n,n,a);const o=this._cornerD;O(o,i,e),L(o,o,a)}_getInfo(){return{editGeometryOperations:this._editGeometryOperations,plane:this._plane,displayPlane:this._displayPlane}}_updateGraphics(t,e){t.action==="start"&&(this._sharedUndoStack.push({tool:this,operation:e}),this._sharedRedoStack.length=0),this.updateGraphics()}_scale(t){const e=this._editGeometryOperations,a=e.data.geometry.extent?.width,i=(a+t*this.view.resolution)/a,s=e.scale(this._plane.origin,ie,i,i,P.NEW_STEP,ot.REPLACE);this._sharedUndoStack.push({tool:this,operation:s}),this._sharedRedoStack.length=0,this.updateGraphics()}_move(t,e){const a=this._editGeometryOperations.move(t*this.view.resolution,e*this.view.resolution,0,P.NEW_STEP);this._sharedUndoStack.push({tool:this,operation:a}),this._sharedRedoStack.length=0,this.updateGraphics()}};l([c()],f.prototype,"_plane",null),l([c()],f.prototype,"_backgroundGraphicGeometry",null),l([c()],f.prototype,"_rotateGraphicGeometry",null),l([c()],f.prototype,"_scaleGraphicGeometries",null),l([c()],f.prototype,"preserveAspectRatio",void 0),l([c()],f.prototype,"snapRotation",void 0),l([c({constructOnly:!0,nonNullable:!0})],f.prototype,"target",void 0),l([c({readOnly:!0})],f.prototype,"type",void 0),l([c({constructOnly:!0})],f.prototype,"view",void 0),f=l([j("esri.views.2d.interactive.editingTools.TransformTool")],f);const J={redo:"r",undo:"z"};let R=class extends Ft{constructor(t){super(t),this._transformTool=null,this._controlPointsTransformTool=null,this._advancedModeTransformTool=null,this._activeTool=null,this._sharedUndoStack=[],this._sharedRedoStack=[],this._originalOpacity=null,this.activeHandle=0}initialize(){const{view:t,mediaElement:e,preserveAspectRatio:a,snapRotation:i,advancedMode:s}=this;this._originalOpacity=e.opacity,this._transformTool=new f({target:e,view:t,preserveAspectRatio:a,snapRotation:i}),this._controlPointsTransformTool=new E({mediaElement:e,view:t}),this._advancedModeTransformTool=new E({mediaElement:s.mediaElement,view:s.view}),this._transformTool.setSharedUndoStack(this._sharedUndoStack),this._transformTool.setSharedRedoStack(this._sharedRedoStack),this._controlPointsTransformTool.setSharedUndoStack(this._sharedUndoStack),this._controlPointsTransformTool.setSharedRedoStack(this._sharedRedoStack),this._advancedModeTransformTool.setSharedUndoStack(this._sharedUndoStack),this._advancedModeTransformTool.setSharedRedoStack(this._sharedRedoStack);const r=e.georeference,n=s.mediaElement.georeference;s.view.tools.addMany([this._advancedModeTransformTool]),"controlPoints"in n&&"controlPoints"in r&&this.addHandles([s.view.on("key-down",o=>{o.key===J.undo&&this.canUndo()&&(this.undo(),o.stopPropagation()),o.key===J.redo&&this.canRedo()&&(this.redo(),o.stopPropagation())}),s.view.on("focus",async o=>{this._controlPointsTransformTool.removeHighlightActiveHandle(),this._advancedModeTransformTool.highlightActiveHandle()}),A(()=>n.controlPoints,o=>{r.controlPoints=o.map(({sourcePoint:d},h)=>({sourcePoint:d,mapPoint:r.controlPoints[h].mapPoint})),this._activeTool?.refresh()}),A(()=>this._controlPointsTransformTool.activeHandle,o=>{this._advancedModeTransformTool.updateActiveHandle(o),this.activeHandle=o}),A(()=>this._advancedModeTransformTool.activeHandle,o=>{this._controlPointsTransformTool.updateActiveHandle(o),this.activeHandle=o})]),this.addHandles([t.on("key-down",o=>{o.key===J.undo&&this.canUndo()&&(this.undo(),o.stopPropagation()),o.key===J.redo&&this.canRedo()&&(this.redo(),o.stopPropagation())}),t.on("focus",async o=>{this._advancedModeTransformTool.removeHighlightActiveHandle(),this._controlPointsTransformTool.highlightActiveHandle()})]),t.tools.addMany([this._transformTool,this._controlPointsTransformTool]),t.activeTool=this._transformTool,this._activeTool=this._transformTool,t.focus()}destroy(){this._transformTool?.destroy(),this._controlPointsTransformTool?.destroy(),this._transformTool=null,this._controlPointsTransformTool=null,this._advancedModeTransformTool=null,this._activeTool=null,this._sharedUndoStack=null,this._sharedRedoStack=null}canUndo(){return this._sharedUndoStack.length>0}canRedo(){return this._sharedRedoStack.length>0}undo(){if(this._sharedUndoStack.length>0){const{tool:t,operation:e}=this._sharedUndoStack.pop();t!==this._activeTool&&t.refresh(),e.undo(),t.updateGraphics(),this._sharedRedoStack.push({tool:t,operation:e}),this._activeTool!==t&&this._activeTool?.refresh()}}redo(){if(this._sharedRedoStack.length>0){const{tool:t,operation:e}=this._sharedRedoStack.pop();t!==this._activeTool&&t.refresh(),e.apply(),t.updateGraphics(),this._sharedUndoStack.push({tool:t,operation:e}),this._activeTool!==t&&this._activeTool?.refresh()}}refresh(){this._activeTool.refresh()}reset(){this._activeTool.reset(),this._advancedModeTransformTool.reset()}async enableAdvancedMode(){this.view.activeTool=this._controlPointsTransformTool,this._activeTool=this._controlPointsTransformTool,this._activeTool.refresh(),await this.advancedMode.view.when(),this.advancedMode.view.activeTool=this._advancedModeTransformTool,this._originalOpacity=this._controlPointsTransformTool.mediaElement.opacity,this._controlPointsTransformTool.mediaElement.opacity=.25*this._originalOpacity}disableAdvancedMode(){this.view.activeTool=this._transformTool,this._activeTool=this._transformTool,this._activeTool.refresh(),this.advancedMode.view.activeTool=null,this._controlPointsTransformTool.mediaElement.opacity=this._originalOpacity}};l([c()],R.prototype,"activeHandle",void 0),l([c({constructOnly:!0})],R.prototype,"advancedMode",void 0),l([c()],R.prototype,"preserveAspectRatio",void 0),l([c()],R.prototype,"snapRotation",void 0),l([c({constructOnly:!0,nonNullable:!0})],R.prototype,"mediaElement",void 0),l([c({constructOnly:!0})],R.prototype,"view",void 0),R=l([j("esri.views.2d.interactive.editingTools.MediaTransformToolsWrapper")],R);export{E as ControlPointsTransformTool,D as DrawGraphicTool2D,R as MediaTransformToolsWrapper,f as TransformTool};
