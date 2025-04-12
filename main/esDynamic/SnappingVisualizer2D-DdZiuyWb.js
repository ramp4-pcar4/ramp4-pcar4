import{bC as h,aQ as n,bq as o,M as l,b4 as d,a7 as M,e7 as s,br as c,dJ as g,dH as C,aI as f}from"./main-C3PVbFgd.js";import{e as b,y as P}from"./vec2-BnynUbeJ.js";import{n as S}from"./vec2f64-CEUyUoff.js";import{w as I,G as v}from"./enums-DxQQJdPW.js";import{s as i,p as y}from"./hitTestSelectUtils-BCTKHRNX.js";import{r as x}from"./SnappingContext-bnphLYjg.js";class w extends x{constructor(e){super(),this._graphicsLayer=e,this._symbolPairingsByType=new Map}visualizeIntersectionPoint(e,t){return this._visualizeSnappingIndicator(new h({x:e.intersectionPoint[0],y:e.intersectionPoint[1],spatialReference:t.spatialReference}),this._getOrCreateSymbol("intersectionPoint",t.view.effectiveTheme.accentColor))}visualizePoint(e,t){return this._visualizeSnappingIndicator(new h({x:e.point[0],y:e.point[1],spatialReference:t.spatialReference}),this._getOrCreateSymbol("point",t.view.effectiveTheme.accentColor))}visualizeLine(e,t){return this._visualizeSnappingIndicator(new n({paths:[[[...e.lineStart],[...e.lineEnd]]],spatialReference:o(l,t.spatialReference)}),this._getOrCreateSymbol("line",t.view.effectiveTheme.accentColor))}visualizeParallelSign(e,t){return this._visualizeSnappingIndicator(new n({paths:[[[...e.lineStart],[...e.lineEnd]]],spatialReference:o(l,t.spatialReference)}),this._getOrCreateSymbol("parallelSign",t.view.effectiveTheme.accentColor))}visualizeRightAngleQuad(e,t){const r=S(),m=S(),p=f();b(r,i(e.centerVertex),i(e.previousVertex)),b(m,i(e.nextVertex),i(e.previousVertex)),P(p,r,m);const u=`rightAngleQuad${p[2]<0?45:225}`;return this._visualizeSnappingIndicator(new n({paths:[[[...e.previousVertex],[...e.centerVertex],[...e.nextVertex]]],spatialReference:o(l,t.spatialReference)}),this._getOrCreateSymbol(u,t.view.effectiveTheme.accentColor))}_visualizeSnappingIndicator(e,t){const r=new d({geometry:e,symbol:t});return this._graphicsLayer.add(r),M(()=>{this._graphicsLayer.remove(r)})}_getOrCreateSymbol(e,t){const r=this._symbolPairingsByType;return r.get(e)?.color!==t&&r.set(e,{color:t,symbol:L(e,t)}),r.get(e).symbol}}function L(a,e){const t=[...e.toRgb(),255*e.a];switch(a){case"point":return new g({outline:{width:.5,color:[0,0,0,1]},size:10,color:e});case"intersectionPoint":return new g({outline:new C({width:1.5,color:e}),size:15,color:[0,0,0,0]});case"line":return new s({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:I.Butt,joinStyle:v.Round,miterLimit:10,width:c(y.lineHintWidthTarget),color:t}]}}});case"parallelSign":return new s({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,1.5],[7,1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:t}]}}],scaleSymbolsProportionally:!0,respectFrame:!0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,-1.5],[7,-1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:t}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}});case"rightAngleQuad45":case"rightAngleQuad225":{const r=a==="rightAngleQuad45"?45:225;return new s({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:.5,y:.5,z:0},anchorPointUnits:"Relative",size:c(y.rightAngleHintSize),rotation:r,markerPlacement:{type:"CIMMarkerPlacementOnVertices",placePerPart:!0,angleToLine:!0,placeOnEndPoints:!1},frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[5,-5],[-5,-5],[-5,5],[5,5],[5,-5]]]},symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:c(y.rightAngleHintOutlineSize),color:t},{type:"CIMSolidFill",enable:!0,color:[...e.toRgb(),255*e.a*.4]}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}})}}}export{w as d};
