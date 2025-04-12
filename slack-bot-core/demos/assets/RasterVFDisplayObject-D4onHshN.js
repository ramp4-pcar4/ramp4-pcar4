import { cS as u$3, J as s$3, fk as e$2, H as s$4, hw as h$5, m6 as l$4, h6 as f$7, fe as M, fg as h$6, aW as e$3, aX as y$1, aY as c$3, dY as S$1, af as b$1, F as x$1, aH as M$1, m7 as g$1, b2 as d$6, a4 as c$4, m8 as U, m9 as _$2, fd as o$3, ff as t$5, fh as b$2, fi as i$3 } from './main-B92PJIAd.js';
import { h as h$4 } from './Program-DvFotrMU.js';
import { C, R, E, F, G, D as D$1, O, I } from './enums-CgzwTbC2.js';
import { e as e$1, m as m$2 } from './Texture-ykeXEf6b.js';
import { o as o$2 } from './ProgramTemplate-D65jHmBl.js';
import { t as t$3 } from './VertexElementDescriptor-BrMxIhbJ.js';
import { t as t$4, n as n$2 } from './WGLContainer-D3NJkh_7.js';
import { E as E$1, i as i$2 } from './Container-CsvGoIhv.js';
import { b } from './LabelMetric-DLN4bkU3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function n$1(n){const i=t$2(s$2(n)),o=i,a=!0,l=Math.max(i/2,5),r=Math.round(u$3(n.maxPathLength)/l)+1,u=10,{density:c}=n;return {smoothing:u$3(n.smoothing),interpolate:!0,velocityScale:"flow-from"===n.flowRepresentation?1:-1,verticesPerLine:r,minSpeedThreshold:.001,segmentLength:l,maxTurnAngle:1,collisions:a,lineCollisionWidth:o,lineSpacing:u,density:c}}function t$2(e){return "constant"===e.kind?e.value[0]:e.values[e.values.length-1]}function i$1(e){const n=e.toRgba();return [n[0]/255,n[1]/255,n[2]/255,n[3]]}function o$1(e){return {kind:"constant",value:[.1,.1,.1,1]}}function s$2(n){if(!n.hasVisualVariables("size"))return {kind:"constant",value:[u$3(n.trailWidth)]};const t=n.getVisualVariablesForType("size")[0],i=[],o=[];let s;if(t.stops){for(const n of t.stops)i.push(n.value),o.push(u$3(n.size));s=t.stops.length;}else i.push(t.minDataValue,t.maxDataValue),o.push(u$3(t.minSize),u$3(t.maxSize)),s=2;return {kind:"ramp",stops:i,values:o,count:s}}function a(e){if(!e.hasVisualVariables("color"))return {kind:"constant",value:i$1(e.color)};const n=e.getVisualVariablesForType("color")[0],t=[],o=[];for(const s of n.stops)t.push(s.value),Array.prototype.push.apply(o,i$1(s.color));return {kind:"ramp",stops:t,values:o,count:n.stops.length}}function l$3(e){if(!e.hasVisualVariables("opacity"))return {kind:"constant",value:[1]};const n=e.getVisualVariablesForType("opacity")[0],t=[],i=[];for(const o of n.stops)t.push(o.value),i.push(o.opacity);return {kind:"ramp",stops:t,values:i,count:n.stops.length}}function r(e,n,t,i){switch(n){case"int":e.setUniform1iv(t,i);break;case"float":e.setUniform1fv(t,i);break;case"vec2":e.setUniform2fv(t,i);break;case"vec3":e.setUniform3fv(t,i);break;case"vec4":e.setUniform4fv(t,i);}}function u$2(e,n,t,i){"constant"===i.kind?r(e,t,`u_${n}`,i.value):(r(e,"float",`u_${n}_stops`,i.stops),r(e,t,`u_${n}_values`,i.values),e.setUniform1i(`u_${n}_count`,i.count));}function c$2(e,n){let t=!0;return t=t&&e.collisions===n.collisions,t=t&&e.density===n.density,t=t&&e.interpolate===n.interpolate,t=t&&e.lineCollisionWidth===n.lineCollisionWidth,t=t&&e.lineSpacing===n.lineSpacing,t=t&&e.maxTurnAngle===n.maxTurnAngle,t=t&&e.minSpeedThreshold===n.minSpeedThreshold,t=t&&e.segmentLength===n.segmentLength,t=t&&e.smoothing===n.smoothing,t=t&&e.velocityScale===n.velocityScale,t=t&&e.verticesPerLine===n.verticesPerLine,t}function p$1(e,n){return e===n||null!=e&&null!=n&&e.equals(n)}function f$6(e,n){if(!c$2(e.simulationSettings,n.simulationSettings))return !1;if(!p$1(e.timeExtent,n.timeExtent))return !1;let t=!0;return t=t&&e.loadImagery===n.loadImagery,t=t&&e.createFlowMesh===n.createFlowMesh,t=t&&e.color.kind===n.color.kind,t=t&&e.opacity.kind===n.opacity.kind,t=t&&e.size.kind===n.size.kind,t}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let f$5 = class f{constructor(t){this._params=t,this.animated=!1;}isCompatible(t){if(!(t instanceof f))return !1;if(!p$1(this._params.timeExtent,t._params.timeExtent))return !1;let r=!0;return r=r&&this._params.loadImagery===t._params.loadImagery,r=r&&this._params.color.kind===t._params.color.kind,r=r&&this._params.opacity.kind===t._params.opacity.kind,r}async load(a,r){const{extent:e,size:s}=a;s$3(r);const o=await this._params.loadImagery(e,s[0],s[1],this._params.timeExtent,r);return new x(o,{color:this._params.color,opacity:this._params.opacity})}render(t,a,e){const{context:s}=t,{program:n}=e;s.setFaceCullingEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(R.ONE,R.ONE_MINUS_SRC_ALPHA),s.useProgram(n),n.setUniformMatrix3fv("u_dvsMat3",a.dvsMat3),s.bindTexture(e.texture,0),n.setUniform1i("u_texture",0),n.setUniform1f("u_Min",e.min),n.setUniform1f("u_Max",e.max),u$2(n,"color","vec4",this._params.color),u$2(n,"opacity","float",this._params.opacity),s.bindVAO(e.vertexArray),s.drawArrays(E.TRIANGLE_STRIP,0,4);}};const d$5=new Map;d$5.set("a_position",0),d$5.set("a_texcoord",1);const u$1={geometry:[new t$3("a_position",2,C.UNSIGNED_SHORT,0,8),new t$3("a_texcoord",2,C.UNSIGNED_SHORT,4,8)]},w={vsPath:"raster/flow/imagery",fsPath:"raster/flow/imagery",attributes:d$5};class x{constructor(t,a){this._flowData=t,this._values=a;}attach(t){const{context:a}=t,{width:r,height:s}=this._flowData,o=h$4.createVertex(a,F.STATIC_DRAW,new Uint16Array([0,0,0,1,r,0,1,1,0,s,0,0,r,s,1,0])),i=new o$2(a,d$5,u$1,{geometry:o}),_=[];"ramp"===this._values.color.kind&&_.push("vvColor"),"ramp"===this._values.opacity.kind&&_.push("vvOpacity");const f=t.painter.materialManager.getProgram(w,_);let x=1e6,g=-1e6;for(let e=0;e<s;e++)for(let t=0;t<r;t++)if(0!==this._flowData.mask[e*r+t]){const a=this._flowData.data[2*(e*r+t)],s=this._flowData.data[2*(e*r+t)+1],o=Math.sqrt(a*a+s*s);x=Math.min(x,o),g=Math.max(g,o);}const y=new Uint8Array(4*r*s);for(let e=0;e<s;e++)for(let t=0;t<r;t++)if(0!==this._flowData.mask[e*r+t]){const a=this._flowData.data[2*(e*r+t)],s=this._flowData.data[2*(e*r+t)+1],o=(Math.sqrt(a*a+s*s)-x)/(g-x);y[4*(e*r+t)]=255*o,y[4*(e*r+t)+1]=0,y[4*(e*r+t)+2]=0,y[4*(e*r+t)+3]=255;}else y[4*(e*r+t)]=0,y[4*(e*r+t)+1]=0,y[4*(e*r+t)+2]=0,y[4*(e*r+t)+3]=0;const A=new e$1;A.internalFormat=G.RGBA,A.wrapMode=D$1.CLAMP_TO_EDGE,A.flipped=!0,A.width=r,A.height=s;const b=new m$2(a,A,y);this.vertexArray=i,this.program=f,this.texture=b,this.min=x,this.max=g,this._flowData=null;}detach(){this.vertexArray.dispose(),this.texture.dispose();}get ready(){return this.program.compiled}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let _$1 = class _{constructor(t){this._params=t;}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof _&&f$6(this._params,t._params)}async load(e,a){const{extent:s,size:r}=e;s$3(a);const i=await this._params.loadImagery(s,r[0],r[1],this._params.timeExtent,a),{vertexData:o,indexData:n}=await this._params.createFlowMesh("Particles",this._params.simulationSettings,i,a);return new c$1(o,n,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(t,e,s){const{context:n}=t,{program:m}=s;n.setFaceCullingEnabled(!1),n.setBlendingEnabled(!0),n.setBlendFunction(R.ONE,R.ONE_MINUS_SRC_ALPHA),n.useProgram(m),m.setUniform1f("u_time",e.time),m.setUniform1f("u_trailLength",this._params.trailLength),m.setUniform1f("u_flowSpeed",this._params.flowSpeed),m.setUniform1f("u_featheringSize",this._params.featheringSize),m.setUniform1f("u_featheringOffset",this._params.featheringOffset),m.setUniform1f("u_introFade",this._params.introFade?1:0),m.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),m.setUniform1f("u_decayRate",this._params.decayRate),m.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),m.setUniformMatrix3fv("u_displayViewMat3",e.displayViewMat3),u$2(m,"color","vec4",this._params.color),u$2(m,"opacity","float",this._params.opacity),u$2(m,"size","float",this._params.size),n.bindVAO(s.vertexArray),n.drawElements(E.TRIANGLES,s.indexCount,C.UNSIGNED_INT,0);}};const l$2=new Map;l$2.set("a_xyts0",0),l$2.set("a_xyts1",1),l$2.set("a_typeIdDurationSeed",2),l$2.set("a_extrudeInfo",3);const h$3={geometry:[new t$3("a_xyts0",4,C.FLOAT,0,64),new t$3("a_xyts1",4,C.FLOAT,16,64),new t$3("a_typeIdDurationSeed",4,C.FLOAT,32,64),new t$3("a_extrudeInfo",4,C.FLOAT,48,64)]},f$4={vsPath:"raster/flow/particles",fsPath:"raster/flow/particles",attributes:l$2};let c$1 = class c{constructor(t,e,a){this._vertexData=t,this._indexData=e,this._values=a;}attach(t){const{context:e}=t,a=h$4.createVertex(e,F.STATIC_DRAW,this._vertexData),r=h$4.createIndex(e,F.STATIC_DRAW,this._indexData),i=new o$2(e,l$2,h$3,{geometry:a},r),o=[];"ramp"===this._values.color.kind&&o.push("vvColor"),"ramp"===this._values.opacity.kind&&o.push("vvOpacity"),"ramp"===this._values.size.kind&&o.push("vvSize");const p=t.painter.materialManager.getProgram(f$4,o);this.vertexArray=i,this.program=p,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null;}detach(){this.vertexArray.dispose();}get ready(){return this.program.compiled}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t$1 = class t{constructor(t){this._styles=t;}get animated(){return this._styles.reduce(((t,s)=>t||s.animated),!1)}isCompatible(s){if(!(s instanceof t))return !1;if(this._styles.length!==s._styles.length)return !1;const e=this._styles.length;for(let t=0;t<e;t++)if(!this._styles[t].isCompatible(s._styles[t]))return !1;return !0}async load(t,e){const r=await Promise.all(this._styles.map((s=>s.load(t,e))));return new s$1(r)}render(t,s,e){for(let r=0;r<this._styles.length;r++)this._styles[r].render(t,s,e.resources[r]);}};let s$1 = class s{constructor(t){this.resources=t;}attach(t){for(const s of this.resources)s.attach(t);}detach(){for(const t of this.resources)t.detach();}get ready(){return this.resources.reduce(((t,s)=>t&&s.ready),!0)}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class _{constructor(e){this._params=e;}get animated(){return this._params.flowSpeed>0}isCompatible(e){return e instanceof _&&f$6(this._params,e._params)}async load(t,a){const{extent:s,size:r}=t;s$3(a);const i=await this._params.loadImagery(s,r[0],r[1],this._params.timeExtent,a),{vertexData:o,indexData:n}=await this._params.createFlowMesh("Streamlines",this._params.simulationSettings,i,a);return new d$4(o,n,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(e,t,s){const{context:n}=e,{program:m}=s;n.setFaceCullingEnabled(!1),n.setBlendingEnabled(!0),n.setBlendFunction(R.ONE,R.ONE_MINUS_SRC_ALPHA),n.useProgram(m),m.setUniform1f("u_time",t.time),m.setUniform1f("u_trailLength",this._params.trailLength),m.setUniform1f("u_flowSpeed",this._params.flowSpeed),m.setUniform1f("u_featheringSize",this._params.featheringSize),m.setUniform1f("u_featheringOffset",this._params.featheringOffset),m.setUniform1f("u_introFade",this._params.introFade?1:0),m.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),m.setUniform1f("u_decayRate",this._params.decayRate),m.setUniformMatrix3fv("u_dvsMat3",t.dvsMat3),m.setUniformMatrix3fv("u_displayViewMat3",t.displayViewMat3),u$2(m,"color","vec4",this._params.color),u$2(m,"opacity","float",this._params.opacity),u$2(m,"size","float",this._params.size),n.bindVAO(s.vertexArray),n.drawElements(E.TRIANGLES,s.indexCount,C.UNSIGNED_INT,0);}}const l$1=new Map;l$1.set("a_positionAndSide",0),l$1.set("a_timeInfo",1),l$1.set("a_extrude",2),l$1.set("a_speed",3);const h$2={geometry:[new t$3("a_positionAndSide",3,C.FLOAT,0,36),new t$3("a_timeInfo",3,C.FLOAT,12,36),new t$3("a_extrude",2,C.FLOAT,24,36),new t$3("a_speed",1,C.FLOAT,32,36)]},f$3={vsPath:"raster/flow/streamlines",fsPath:"raster/flow/streamlines",attributes:l$1};let d$4 = class d{constructor(e,t,a){this._vertexData=e,this._indexData=t,this._values=a;}attach(e){const{context:t}=e,a=h$4.createVertex(t,F.STATIC_DRAW,this._vertexData),r=h$4.createIndex(t,F.STATIC_DRAW,this._indexData),i=new o$2(t,l$1,h$2,{geometry:a},r),o=[];"ramp"===this._values.color.kind&&o.push("vvColor"),"ramp"===this._values.opacity.kind&&o.push("vvOpacity"),"ramp"===this._values.size.kind&&o.push("vvSize");const p=e.painter.materialManager.getProgram(f$3,o);this.vertexArray=i,this.program=p,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null;}detach(){this.vertexArray.dispose();}get ready(){return this.program.compiled}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const m$1=4,u=1,f$2=.5,p=!0,d$3=!0,y=2.3;function g(g,w){const{flowSpeed:h,trailLength:v}=g,S=n$1(g);let j=null;const k={opacity:l$3(g),size:s$2(g)};let x=a(g);if("none"===g.background)k.color=x;else {"constant"===x.kind&&(x={kind:"ramp",stops:[0,1],values:[0,0,0,1,x.value[0],x.value[1],x.value[2],x.value[3]],count:2});const e={loadImagery:w.loadImagery,timeExtent:w.timeExtent,color:x,opacity:{kind:"constant",value:[1]}};j=new f$5(e),k.color=o$1();}const I={loadImagery:w.loadImagery,createFlowMesh:w.createFlowMesh,simulationSettings:S,timeExtent:w.timeExtent,trailLength:v,flowSpeed:h,featheringSize:u,featheringOffset:f$2,introFade:p,fadeToZero:d$3,decayRate:y,color:k.color,opacity:k.opacity,size:k.size},z="butt"===g.trailCap||t$2(s$2(g))<=m$1?new _(I):new _$1(I);return null!=j?new t$1([j,z]):z}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class s extends t$4{constructor(){super(...arguments),this._visualState={time:0,dvsMat3:e$2(),displayViewMat3:e$2()};}dispose(){}prepareState(t){const{context:e}=t;e.setColorMask(!0,!0,!0,!0),e.setStencilFunction(O.EQUAL,0,255);}draw(t,e){const{requestRender:a,allowDelayedRender:s}=t,{displayData:i}=e;if(null==i)return;if("loaded"===i.state.name&&i.attach(t),"attached"!==i.state.name)return;const r=i.state.resources;!s||r.ready||null==a?(this._visualState.time=t.time/1e3,this._visualState.dvsMat3=e.transforms.displayViewScreenMat3,this._visualState.displayViewMat3=t.state.displayViewMat3,i.flowStyle.render(t,this._visualState,r),i.flowStyle.animated&&null!=a&&a()):a();}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class t extends n$2{constructor(){super(...arguments),this.flowStyle=null;}doRender(e){super.doRender(e);}prepareRenderPasses(s$1){const t=s$1.registerRenderPass({name:"flow",brushes:[s],target:()=>this.children,drawPhase:E$1.MAP});return [...super.prepareRenderPasses(s$1),t]}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class e{constructor(t,e,s,a){this.state={name:"created"},this.flowStyle=t,this.extent=e,this.size=s,this.pixelRatio=a;}async load(){const t=new AbortController;this.state={name:"loading",abortController:t};const e={extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},s=await this.flowStyle.load(e,t.signal);this.state={name:"loaded",resources:s};}attach(e){if("loaded"!==this.state.name)return void s$4.getLogger("esri.views.2d.engine.flow.FlowDisplayData").error("Only loaded resources can be attached.");const s=this.state.resources;s.attach(e),this.state={name:"attached",resources:s};}detach(){if("loading"===this.state.name)return this.state.abortController.abort(),void(this.state={name:"detached"});"attached"===this.state.name&&(this.state.resources.detach(),this.state={name:"detached"});}update(t){if(!this.flowStyle.isCompatible(t.flowStyle))return !1;return !(!this.extent.equals(t.extent)||this.size[0]!==t.size[0]||this.size[1]!==t.size[1]||this.pixelRatio!==t.pixelRatio)&&(this.flowStyle=t.flowStyle,!0)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class o extends i$2{constructor(){super(...arguments),this._displayData=null;}get displayData(){return this._displayData}set displayData(t){this._displayData=t,this.requestRender();}clear(){null!=this._displayData&&(this._displayData.detach(),this._displayData=null,this.requestRender());}setTransform(r){const{displayData:l}=this;if(null==l)return;const o=l.extent.xmin,n=l.extent.ymax,p=[0,0];r.toScreen(p,[o,n]);const m=(l.extent.xmax-l.extent.xmin)/l.size[0]/r.resolution,c=h$5(r.rotation),{displayViewScreenMat3:x}=this.transforms;l$4(x,[-1,1,0]),f$7(x,x,[2/(r.size[0]*r.pixelRatio),-2/(r.size[1]*r.pixelRatio),1]),M(x,x,[p[0],p[1],0]),h$6(x,x,c),f$7(x,x,[m*r.pixelRatio,m*r.pixelRatio,1]);}_createTransforms(){return {displayViewScreenMat3:e$2()}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const m=1.15;let d$2=class d extends S$1{constructor(t){super(t),this._flowDisplayObject=new o,this._loading=null;}initialize(){this.flowContainer.addChild(this._flowDisplayObject);}destroy(){this._clear(),this.flowContainer.removeAllChildren();}get updating(){return null!=this._loading}update(t){const{flowStyle:o}=this.flowContainer;if(null==o)return void this._clear();const{extent:e$1,rotation:a,resolution:r,pixelRatio:l}=t.state,p=f$1(e$1,a);p.expand(m);const c=[Math.round((p.xmax-p.xmin)/r),Math.round((p.ymax-p.ymin)/r)],d=new e(o,p,c,l);if(null!=this._loading){if(this._loading.update(d))return;this._loading.detach(),this._loading=null;}null!=this._flowDisplayObject.displayData&&this._flowDisplayObject.displayData.update(d)||(d.load().then((()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null;}),(t=>{b$1(t)||(s$4.getLogger(this).error("A resource failed to load.",t),this._loading=null);})),this._loading=d);}_clear(){this._flowDisplayObject.clear(),null!=this._loading&&(this._loading.detach(),this._loading=null);}};e$3([y$1()],d$2.prototype,"_loading",void 0),e$3([y$1()],d$2.prototype,"flowContainer",void 0),e$3([y$1()],d$2.prototype,"updating",null),d$2=e$3([c$3("esri.views.2d.engine.flow.FlowStrategy")],d$2);const h$1=d$2;function f$1(t,o){const i=new x$1({x:(t.xmax+t.xmin)/2,y:(t.ymax+t.ymin)/2,spatialReference:t.spatialReference}),s=t.xmax-t.xmin,a=t.ymax-t.ymin,r=Math.abs(Math.cos(h$5(o))),n=Math.abs(Math.sin(h$5(o))),p=r*s+n*a,m=n*s+r*a,d=new M$1({xmin:i.x-p/2,ymin:i.y-m/2,xmax:i.x+p/2,ymax:i.y+m/2,spatialReference:t.spatialReference});return d.centerAt(i),d}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let h=class extends S$1{constructor(){super(...arguments),this._loadImagery=(t,e,i,o,r)=>g$1(this.layer,t,e,i,o,r),this._createFlowMesh=(t,e,i,o)=>this.layer.createFlowMesh({meshType:t,flowData:i,simulationSettings:e},{signal:o}),this.attached=!1,this.type="flow",this.timeExtent=null,this.redrawOrRefetch=async()=>{this._updateVisualization();};}get updating(){return !this.attached||this._strategy.updating}attach(){const{layer:t$1}=this,e=()=>{this._loadImagery=(e,i,o,r,s)=>g$1(t$1,e,i,o,r,s),this._updateVisualization();};"multidimensionalDefinition"in t$1?this.addHandles(d$6((()=>t$1.multidimensionalDefinition),e)):this.addHandles([d$6((()=>t$1.mosaicRule),e),d$6((()=>t$1.rasterFunction),e),d$6((()=>t$1.definitionExpression),e)]),this.container=new t,this._strategy=new h$1({flowContainer:this.container}),this._updateVisualization();}detach(){this._strategy.destroy(),this.container?.removeAllChildren(),this.container=null,this.removeHandles();}update(t){t.stationary?this._strategy.update(t):this.layerView.requestUpdate();}hitTest(t){return new c$4({attributes:{},geometry:t.clone(),layer:this.layer})}moveEnd(){}async doRefresh(){}_updateVisualization(){const t=this.layer.renderer;if(null==t||"flow"!==t.type)return;const e=g(t,{loadImagery:this._loadImagery,createFlowMesh:this._createFlowMesh,timeExtent:this.timeExtent});this.container.flowStyle=e,this.layerView.requestUpdate();}};e$3([y$1()],h.prototype,"_strategy",void 0),e$3([y$1()],h.prototype,"attached",void 0),e$3([y$1()],h.prototype,"container",void 0),e$3([y$1()],h.prototype,"layer",void 0),e$3([y$1()],h.prototype,"layerView",void 0),e$3([y$1()],h.prototype,"type",void 0),e$3([y$1()],h.prototype,"updating",null),e$3([y$1()],h.prototype,"timeExtent",void 0),h=e$3([c$3("esri.views.2d.engine.flow.FlowView2D")],h);const d$1=h;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const n=new Float32Array([.27058823529411763,.4588235294117647,.7098039215686275,1,.396078431372549,.5372549019607843,.7215686274509804,1,.5176470588235295,.6196078431372549,.7294117647058823,1,.6352941176470588,.7058823529411765,.7411764705882353,1,.7529411764705882,.8,.7450980392156863,1,.8705882352941177,.8901960784313725,.7490196078431373,1,1,1,.7490196078431373,1,1,.8627450980392157,.6313725490196078,1,.9803921568627451,.7254901960784313,.5176470588235295,1,.9607843137254902,.596078431372549,.4117647058823529,1,.9294117647058824,.4588235294117647,.3176470588235294,1,.9098039215686274,.08235294117647059,.08235294117647059,1]),i=new Float32Array([0,92/255,230/255,1]),l={beaufort_ft:n,beaufort_m:n,beaufort_km:n,beaufort_mi:n,beaufort_kn:new Float32Array([.1568627450980392,.5725490196078431,.7803921568627451,1,.34901960784313724,.6352941176470588,.7294117647058823,1,.5058823529411764,.7019607843137254,.6705882352941176,1,.6274509803921569,.7607843137254902,.6078431372549019,1,.7490196078431373,.8313725490196079,.5411764705882353,1,.8549019607843137,.9019607843137255,.4666666666666667,1,.9803921568627451,.9803921568627451,.39215686274509803,1,.9882352941176471,.8352941176470589,.3254901960784314,1,.9882352941176471,.7019607843137254,.4,1,.9803921568627451,.5529411764705883,.20392156862745098,1,.9686274509803922,.43137254901960786,.16470588235294117,1,.9411764705882353,.2784313725490196,.11372549019607843,1]),classified_arrow:new Float32Array([.2196078431372549,.6588235294117647,0,1,.5450980392156862,1.2117647058823529,0,1,1,1,0,1,1,.5019607843137255,0,1,1,0,0,1]),ocean_current_m:new Float32Array([.3058823529411765,.10196078431372549,.6,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),ocean_current_kn:new Float32Array([0,0,0,1,0,.1450980392156863,.39215686274509803,1,.3058823529411765,.10196078431372549,.6,1,.592156862745098,0,.39215686274509803,1,.7019607843137254,.10588235294117647,.10196078431372549,1,.6941176470588235,.3058823529411765,.10196078431372549,1,.792156862745098,.5019607843137255,.10196078431372549,1,.6941176470588235,.7019607843137254,.20392156862745098,1,.6941176470588235,.6941176470588235,.6941176470588235,1]),simple_scalar:i,single_arrow:i,wind_speed:new Float32Array([0,0,0,1])},c=[0,20];class d extends t$4{constructor(){super(...arguments),this._desc={magdir:{vsPath:"raster/magdir",fsPath:"raster/magdir",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])},scalar:{vsPath:"raster/scalar",fsPath:"raster/scalar",attributes:new Map([["a_pos",0],["a_offset",1],["a_vv",2]])}};}dispose(){}prepareState({context:e}){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(R.ONE,R.ONE_MINUS_SRC_ALPHA,R.ONE,R.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),e.setStencilWriteMask(0),e.setStencilTestEnabled(!0),e.setStencilOp(I.KEEP,I.KEEP,I.REPLACE);}draw(e,a){if(null==a.source||0===a.source.validPixelCount)return;const{context:t,timeline:s}=e;if(s.begin(this.name),t.setStencilFunction(O.EQUAL,a.stencilRef,255),a.updateVectorFieldVAO(e),"scalar"===e.renderPass){const t=a.vaoData.scalar;t&&this._drawScalars(e,a,t.vao,t.elementCount);}else {const t=a.vaoData.magdir;t&&this._drawTriangles(e,a,t.vao,t.elementCount);}s.end(this.name);}_drawTriangles(e,a,t,r){const{context:n,painter:i,requestRender:d,allowDelayedRender:m}=e,{symbolizerParameters:u}=a,f=u.dataRange?["dataRange"]:[];"geographic"===u.rotationType&&f.push("rotationGeographic");const _=i.materialManager.getProgram(this._desc.magdir,f);if(m&&null!=d&&!_.compiled)return void d();n.useProgram(_);const{coordScale:g,opacity:p,transforms:y}=a;_.setUniform2fv("u_coordScale",g),_.setUniform1f("u_opacity",p),_.setUniformMatrix3fv("u_dvsMat3",y.displayViewScreenMat3);const{style:S,dataRange:b,rotation:h,symbolPercentRange:v}=u;_.setUniform4fv("u_colors",l[S]),_.setUniform2fv("u_dataRange",b||c),_.setUniform1f("u_rotation",h),_.setUniform2fv("u_symbolPercentRange",v);const w=this._getSymbolSize(e,a);_.setUniform2fv("u_symbolSize",w),n.bindVAO(t),n.drawElements(E.TRIANGLES,r,C.UNSIGNED_INT,0);}_drawScalars(e,a,t,r){const{context:n,painter:i,requestRender:l,allowDelayedRender:d}=e,{symbolizerParameters:m}=a,u=[];"wind_speed"===m.style?u.push("innerCircle"):m.dataRange&&u.push("dataRange"),"geographic"===m.rotationType&&u.push("rotationGeographic");const f=i.materialManager.getProgram(this._desc.scalar,u);if(d&&null!=l&&!f.compiled)return void l();n.useProgram(f);const{coordScale:_,opacity:g,transforms:p}=a;f.setUniform2fv("u_coordScale",_),f.setUniform1f("u_opacity",g),f.setUniformMatrix3fv("u_dvsMat3",p.displayViewScreenMat3);const{dataRange:y,symbolPercentRange:S}=m;f.setUniform2fv("u_dataRange",y||c),f.setUniform2fv("u_symbolPercentRange",S);const b=this._getSymbolSize(e,a);f.setUniform2fv("u_symbolSize",b),n.bindVAO(t),n.drawElements(E.TRIANGLES,r,C.UNSIGNED_INT,0);}_getSymbolSize(e,a){const t=a.key?2**(e.displayLevel-a.key.level):a.resolution/e.state.resolution,{symbolTileSize:r}=a.symbolizerParameters;return [r/(Math.round((a.width-a.offset[0])/r)*r)/t,r/(Math.round((a.height-a.offset[1])/r)*r)/t]}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class f extends i$2{constructor(t=null){super(),this._source=null,this._symbolizerParameters=null,this._vaoInvalidated=!0,this.coordScale=[1,1],this.height=null,this.key=null,this.offset=null,this.stencilRef=0,this.resolution=null,this.pixelRatio=1,this.x=0,this.y=0,this.rotation=0,this.rawPixelData=null,this.vaoData=null,this.width=null,this.source=t;}destroy(){null!=this.vaoData&&(this.vaoData.magdir?.vao.dispose(),this.vaoData.scalar?.vao.dispose(),this.vaoData=null);}get symbolizerParameters(){return this._symbolizerParameters}set symbolizerParameters(t){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(t)&&(this._symbolizerParameters=t,this.invalidateVAO());}get source(){return this._source}set source(t){this._source=t,this.invalidateVAO();}invalidateVAO(){this._vaoInvalidated||null==this.vaoData||(this.vaoData.magdir?.vao.dispose(),this.vaoData.scalar?.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender());}updateVectorFieldVAO(t){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,null!=this.source&&null==this.vaoData){const{style:e}=this.symbolizerParameters;switch(e){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":{const e=U(this.source,this.symbolizerParameters),a=this._createVectorFieldVAO(t.context,e);this.vaoData={magdir:a};}break;case"simple_scalar":{const e=_$2(this.source,this.symbolizerParameters),a=this._createVectorFieldVAO(t.context,e);this.vaoData={scalar:a};}break;case"wind_speed":{const e=U(this.source,this.symbolizerParameters),a=this._createVectorFieldVAO(t.context,e),s=_$2(this.source,this.symbolizerParameters),i=this._createVectorFieldVAO(t.context,s);this.vaoData={magdir:a,scalar:i};}}}this.ready(),this.requestRender();}}_createTransforms(){return {displayViewScreenMat3:e$2()}}setTransform(r){const l=o$3(this.transforms.displayViewScreenMat3),[n,c]=r.toScreenNoRotation([0,0],[this.x,this.y]),h=this.resolution/this.pixelRatio/r.resolution,m=h*this.width,u=h*this.height,d=Math.PI*this.rotation/180;M(l,l,t$5(n,c)),M(l,l,t$5(m/2,u/2)),h$6(l,l,-d),M(l,l,t$5(-m/2,-u/2)),b$2(l,l,t$5(m,u)),i$3(this.transforms.displayViewScreenMat3,r.displayViewMat3,l);}onAttach(){this.invalidateVAO();}onDetach(){this.invalidateVAO();}_createVectorFieldVAO(t,e){const{vertexData:a,indexData:s}=e,i=h$4.createVertex(t,F.STATIC_DRAW,new Float32Array(a)),r=h$4.createIndex(t,F.STATIC_DRAW,new Uint32Array(s)),o=b("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:C.FLOAT,normalized:!1},{location:1,name:"a_offset",count:2,type:C.FLOAT,normalized:!1},{location:2,name:"a_vv",count:2,type:C.FLOAT,normalized:!1}]});return {vao:new o$2(t,o.attributes,o.bufferLayouts,{geometry:i},r),elementCount:s.length}}}

export { d$1 as a, d, f };
