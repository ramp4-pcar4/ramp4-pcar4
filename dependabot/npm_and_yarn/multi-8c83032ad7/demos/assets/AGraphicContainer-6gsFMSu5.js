import { bL as e, fI as r$1, bM as L, bN as o$1, bO as i$2, bP as M, bQ as t, bR as f$1, bS as h$1, bp as u$1 } from './main-CaWYn_3L.js';
import { i as i$1, r, a as r$3 } from './TechniqueInstance-n5H-qSD3.js';
import { s, N } from './Container-CbEAunjn.js';
import { h } from './FeatureCommandQueue-5I1hZRGQ.js';
import { r as r$2 } from './vec3f32-CmlAce5k.js';
import { b as b$1 } from './LabelMetric-Z0h134P1.js';
import { c as c$1 } from './Program-DYU3Fazx.js';
import { R, E, C, F } from './enums-CwcDCDam.js';
import { o as o$2 } from './ProgramTemplate-Ds1ErDDd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let l=0;function n(i,n){return new i$1(r(l++),i,n)}const a={visualVariableColor:null,visualVariableOpacity:null,visualVariableSizeMinMaxValue:null,visualVariableSizeScaleStops:null,visualVariableSizeStops:null,visualVariableSizeUnitValue:null,visualVariableRotation:null,visualVariableSizeOutlineScaleStops:null};class o{constructor(){this.instances={fill:n(h.fill,{uniforms:a,optionalAttributes:{zoomRange:!0}}),marker:n(h.marker,{uniforms:a,optionalAttributes:{zoomRange:!0}}),line:n(h.line,{uniforms:a,optionalAttributes:{zoomRange:!0}}),text:n(h.text,{uniforms:a,optionalAttributes:{zoomRange:!0,referenceSymbol:!1,clipAngle:!1}}),complexFill:n(h.complexFill,{uniforms:a,optionalAttributes:{zoomRange:!0}}),texturedLine:n(h.texturedLine,{uniforms:a,optionalAttributes:{zoomRange:!0}})},this._instancesById=Object.values(this.instances).reduce(((e,i)=>(e.set(i.instanceId,i),e)),new Map);}getInstance(e){return this._instancesById.get(e)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
const v=Math.PI/180,x=4;class b extends s{constructor(t){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=e(),this._localOrigin={x:0,y:0},this._getBounds=t;}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=r$1(this._program);}doRender(t){const{context:e}=t,r=this._getBounds();if(r.length<1)return;this._createShaderProgram(e),this._updateMatricesAndLocalOrigin(t),this._updateBufferData(e,r),e.setBlendingEnabled(!0),e.setDepthTestEnabled(!1),e.setStencilWriteMask(0),e.setStencilTestEnabled(!1),e.setBlendFunction(R.ONE,R.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0);const i=this._program;e.bindVAO(this._vao),e.useProgram(i),i.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),e.gl.lineWidth(1),e.drawElements(E.LINES,8*r.length,C.UNSIGNED_INT,0),e.bindVAO();}_createTransforms(){return {displayViewScreenMat3:e()}}_createShaderProgram(t){if(this._program)return;const e="precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }",r="precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }";this._program=t.programCache.acquire(e,r,y().attributes);}_updateMatricesAndLocalOrigin(t$1){const{state:a}=t$1,{displayMat3:m,size:c,resolution:u,pixelRatio:_,rotation:h,viewpoint:d}=a,p=v*h,{x:g,y:x}=d.targetGeometry,b=L(g,a.spatialReference);this._localOrigin.x=b,this._localOrigin.y=x;const y=_*c[0],B=_*c[1],M$1=u*y,j=u*B,A=o$1(this._dvsMat3);i$2(A,A,m),M(A,A,t(y/2,B/2)),f$1(A,A,r$2(c[0]/M$1,-B/j,1)),h$1(A,A,-p);}_updateBufferData(t,e){const{x:r,y:i}=this._localOrigin,s=2*x*e.length,o=new Float32Array(s),a=new Uint32Array(8*e.length);let n=0,l=0;for(const f of e)f&&(o[2*n]=f[0]-r,o[2*n+1]=f[1]-i,o[2*n+2]=f[0]-r,o[2*n+3]=f[3]-i,o[2*n+4]=f[2]-r,o[2*n+5]=f[3]-i,o[2*n+6]=f[2]-r,o[2*n+7]=f[1]-i,a[l]=n+0,a[l+1]=n+3,a[l+2]=n+3,a[l+3]=n+2,a[l+4]=n+2,a[l+5]=n+1,a[l+6]=n+1,a[l+7]=n+0,n+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(o.buffer):this._vertexBuffer=c$1.createVertex(t,F.DYNAMIC_DRAW,o.buffer),this._indexBuffer?this._indexBuffer.setData(a):this._indexBuffer=c$1.createIndex(t,F.DYNAMIC_DRAW,a),!this._vao){const e=y();this._vao=new o$2(t,e.attributes,e.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer);}}}const y=()=>b$1("bounds",{geometry:[{location:0,name:"a_position",count:2,type:C.FLOAT}]});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
class i extends r$3{constructor(e){super(e),this._instanceStore=new o,this.checkHighlight=()=>!0;}destroy(){super.destroy(),this._boundsRenderer=u$1(this._boundsRenderer);}get instanceStore(){return this._instanceStore}enableRenderingBounds(e){this._boundsRenderer=new b(e),this.requestRender();}get hasHighlight(){return this.checkHighlight()}onTileData(e,t){e.onMessage(t),this.contains(e)||this.addChild(e),this.requestRender();}_renderChildren(e,t){e.selection=t;for(const r of this.children){if(!r.visible)continue;const t=r.getDisplayList(this._instanceStore,N.STRICT_ORDER);t?.render(e);}}}

export { i };
