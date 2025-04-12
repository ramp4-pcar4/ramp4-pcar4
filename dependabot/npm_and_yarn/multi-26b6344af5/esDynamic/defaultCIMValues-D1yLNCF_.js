import{eV as x,V as M,aL as A}from"./main-0iYVBzEC.js";import{s as w,d as P,a as C}from"./enums-CUsFElte.js";const G=new Set(["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"]);function m(e){return e instanceof A}function h(e){return e instanceof M?Object.keys(e.items):m(e)?x(e).keys():e?Object.keys(e):[]}function p(e,t){return e instanceof M?e.items[t]:e[t]}function v(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}function c(e){return e?e.declaredClass:null}function I(e,t){const o=e.diff;if(o&&typeof o=="function")return o(e,t);const l=h(e),a=h(t);if(l.length===0&&a.length===0)return;if(!l.length||!a.length||v(e,t))return{type:"complete",oldValue:e,newValue:t};const u=a.filter(n=>!l.includes(n)),k=l.filter(n=>!a.includes(n)),y=l.filter(n=>a.includes(n)&&p(e,n)!==p(t,n)).concat(u,k).sort(),g=c(e);if(g&&G.has(g)&&y.length)return{type:"complete",oldValue:e,newValue:t};let d;const S=m(e)&&m(t);for(const n of y){const i=p(e,n),r=p(t,n);let f;if((S||typeof i!="function"&&typeof r!="function")&&i!==r&&(i!=null||r!=null)){if(o&&o[n]&&typeof o[n]=="function")f=o[n]?.(i,r);else if(i instanceof Date&&r instanceof Date){if(i.getTime()===r.getTime())continue;f={type:"complete",oldValue:i,newValue:r}}else f=typeof i=="object"&&typeof r=="object"&&c(i)===c(r)?I(i,r):{type:"complete",oldValue:i,newValue:r};f!=null&&(d!=null?d.diff[n]=f:d={type:"partial",diff:{[n]:f}})}}return d}function E(e,t){return b(e,t)}function b(e,t){if(e==null)return!1;const o=t.split(".");let l=e;for(const a of o){if(l.type==="complete")return!0;if(l.type!=="partial")return!1;{const u=l.diff[a];if(!u)return!1;l=u}}return!0}function z(e,t){if(!e)return!1;if(e.type==="partial"){const o=Object.keys(e.diff);return o.length===1&&o[0]===t}return!1}function D(e,t){if(typeof e!="function"&&typeof t!="function"&&(e!=null||t!=null))return e==null||t==null||typeof e=="object"&&typeof t=="object"&&c(e)!==c(t)?{type:"complete",oldValue:e,newValue:t}:I(e,t)}function s(e){if(e==null)return!0;switch(e.type){case"complete":return!1;case"collection":{const t=e;for(const o of t.added)if(!s(o))return!1;for(const o of t.removed)if(!s(o))return!1;for(const o of t.changed)if(!s(o))return!1;return!0}case"partial":for(const t in e.diff)if(!s(e.diff[t]))return!1;return!0}}const R={color:[128,128,128,1],outlinecolor:[0,0,0,1],backgroundcolor:[128,128,128,1],borderlinecolor:[0,0,0,1],tintcolor:[255,255,255,1]},V={CIMVectorMarker:{scalesymbolsproportionally:!1,respectframe:!0,anchorpointunits:"Relative",offsetx:0,offsety:0,rotateclockwise:!1,rotation:0,size:10,enable:!0,colorlocked:!1},CIMPictureMarker:{scalex:1,texturefilter:"Draft",anchorpointunits:"Relative",offsetx:0,offsety:0,rotateclockwise:!1,rotation:0,size:10,enable:!0,colorlocked:!1},CIMTextSymbol:{angle:0,anglex:0,angley:0,halosize:1,height:10,horizontalalignment:"Left",kerning:!0,letterspacing:0,letterwidth:100,ligatures:!0,linegap:0,offsetx:0,offsety:0,strikethrough:!1,textcase:"Normal",textstring:"",underline:!1,verticalalignment:"Bottom",enable:!0,colorlocked:!1},CIMSolidStroke:{capstyle:"Round",joinstyle:"Round",miterlimit:4,width:4,enable:!0,colorlocked:!1},CIMPictureStroke:{texturefilter:"Draft",capstyle:"Round",joinstyle:"Round",miterlimit:4,width:4,enable:!0,colorlocked:!1},CIMGradientStroke:{capstyle:"Round",joinstyle:"Round",miterlimit:4,width:4,enable:!0,colorlocked:!1,gradientMethod:"AcrossLine",gradientSize:75,gradientSizeUnits:C.Relative,gradientType:"Discrete",interval:5},CIMSolidFill:{enable:!0,colorlocked:!1},CIMPictureFill:{offsetx:0,offsety:0,rotation:0,scalex:1,height:10,texturefilter:"Draft",enable:!0,colorlocked:!1},CIMHatchFill:{offsetx:0,offsety:0,rotation:0,separation:4,enable:!0,colorlocked:!1},CIMGradientFill:{enable:!0,angle:90,gradientMethod:"Linear",gradientSize:75,gradientSizeUnits:C.Relative,gradientType:"Discrete",interval:5},CIMGeometricEffectAddControlPoints:{angletolerance:120},CIMGeometricEffectArrow:{arrowtype:"OpenEnded",width:5},CIMGeometricEffectBuffer:{size:1},CIMGeometricEffectCut:{begincut:1,endcut:1,middlecut:0,invert:!1},CIMGeometricEffectDashes:{customendingoffset:0,linedashending:"NoConstraint",offsetalongline:0},CIMGeometricEffectDonut:{method:"Mitered",option:"Accurate",width:2},CIMGeometricEffectJog:{angle:225,length:20,position:50},CIMGeometricEffectControlMeasureLine:{rule:"FullGeometry"},CIMGeometricEffectMove:{offsetx:1,offsety:-1},CIMGeometricEffectOffset:{method:"Square",offset:1,option:"Fast"},CIMGeometricEffectRotate:{angle:15},CIMGeometricEffectScale:{xscalefactor:1.15,yscalefactor:1.15},CIMGeometricEffectWave:{amplitude:2,period:3,seed:1,waveform:"Sinus"},CIMMarkerPlacementAlongLine:{customendingoffset:0,endings:"WithHalfGap",offsetalongline:0,placeperpart:!0,angletoline:!0,offset:0},CIMMarkerPlacementAtExtremities:{extremityplacement:"Both",offsetalongline:0,angletoline:!0,offset:0},CIMMarkerPlacementAtRatioPositions:{beginposition:0,endposition:0,flipfirst:!0,angletoline:!0,offset:0},CIMMarkerPlacementInsidePolygon:{gridangle:0,gridtype:"Fixed",offsetx:0,offsety:0,randomness:100,seed:0,shiftoddrows:!1,stepx:16,stepy:16,clipping:"ClipAtBoundary"},CIMMarkerPlacementOnLine:{relativeto:"LineMiddle",startpointoffset:0,angletoline:!0,offset:0},CIMMarkerPlacementOnVertices:{placeperpart:!0,placeoncontrolpoints:!0,placeonendpoints:!0,placeonregularvertices:!0,angletoline:!0,offset:0},CIMMarkerPlacementPolygonCenter:{method:"OnPolygon",offsetx:0,offsety:0,clipatboundary:!1},CIMAnimatedSymbolProperties:{playanimation:!1,reverseanimation:!1,randomizestarttime:!1,randomizestartseed:0,starttimeoffset:0,duration:3,endingduration:3,useendingduration:!1,repeattype:P.Loop,repeatdelay:0,easing:w.Linear},CIMSymbolAnimationSize:{tosize:10},CIMSymbolAnimationScale:{scalefactor:1},CIMSymbolAnimationColor:{tocolor:[255,255,255,1]},CIMSymbolAnimationTransparency:{totransparency:0},CIMSymbolAnimationRotation:{torotation:0,rotateclockwise:!1},CIMSymbolAnimationOffset:{offsetx:0,offsety:0}};export{z as a,s as d,R as i,V as n,b as p,E as s,D as y};
