import { eM as e, eN as h, eO as U, eP as r, ax as i, eQ as M$1, eR as t, eS as f$1, eT as h$1, bz as a$1 } from './main-5658cd6e.js';
import { o } from './FeatureContainer-eea18812.js';
import { r as r$2 } from './vec3f32-b6e01a26.js';
import { r as r$1 } from './Container-1d8ffe9c.js';
import { e as ee } from './color-6132b2c2.js';
import { E as E$1, f as f$2 } from './VertexArrayObject-2ba4bad7.js';
import { R, E, C as C$1, F, I as I$1 } from './enums-1f7f0b0a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const v=Math.PI/180,x=4;class b extends r$1{constructor(t){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=e(),this._localOrigin={x:0,y:0},this._getBounds=t;}destroy(){this._vao&&(this._vao.dispose(!0),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=h(this._program);}doRender(t){const{context:e}=t,r=this._getBounds();if(r.length<1)return;this._createShaderProgram(e),this._updateMatricesAndLocalOrigin(t),this._updateBufferData(e,r),e.setBlendingEnabled(!0),e.setDepthTestEnabled(!1),e.setStencilWriteMask(0),e.setStencilTestEnabled(!1),e.setBlendFunction(R.ONE,R.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0);const s=this._program;e.bindVAO(this._vao),e.useProgram(s),s.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),e.gl.lineWidth(1),e.drawElements(E.LINES,8*r.length,C$1.UNSIGNED_INT,0),e.bindVAO();}_createTransforms(){return {dvs:e()}}_createShaderProgram(t){if(this._program)return;const e="precision highp float;\n        uniform mat3 u_dvsMat3;\n\n        attribute vec2 a_position;\n\n        void main() {\n          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);\n          gl_Position = vec4(pos.xy, 0.0, 1.0);\n        }",r="precision mediump float;\n      void main() {\n        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);\n      }";this._program=t.programCache.acquire(e,r,y().attributes);}_updateMatricesAndLocalOrigin(t$1){const{state:a}=t$1,{displayMat3:u,size:_,resolution:c,pixelRatio:h,rotation:m,viewpoint:d}=a,p=v*m,{x:g,y:x}=d.targetGeometry,b=U(g,a.spatialReference);this._localOrigin.x=b,this._localOrigin.y=x;const y=h*_[0],B=h*_[1],M=c*y,j=c*B,A=r(this._dvsMat3);i(A,A,u),M$1(A,A,t(y/2,B/2)),f$1(A,A,r$2(_[0]/M,-B/j,1)),h$1(A,A,-p);}_updateBufferData(t,e){const{x:r,y:s}=this._localOrigin,i=2*x*e.length,o=new Float32Array(i),a=new Uint32Array(8*e.length);let n=0,f=0;for(const l of e)l&&(o[2*n+0]=l[0]-r,o[2*n+1]=l[1]-s,o[2*n+2]=l[0]-r,o[2*n+3]=l[3]-s,o[2*n+4]=l[2]-r,o[2*n+5]=l[3]-s,o[2*n+6]=l[2]-r,o[2*n+7]=l[1]-s,a[f+0]=n+0,a[f+1]=n+3,a[f+2]=n+3,a[f+3]=n+2,a[f+4]=n+2,a[f+5]=n+1,a[f+6]=n+1,a[f+7]=n+0,n+=4,f+=8);if(this._vertexBuffer?this._vertexBuffer.setData(o.buffer):this._vertexBuffer=E$1.createVertex(t,F.DYNAMIC_DRAW,o.buffer),this._indexBuffer?this._indexBuffer.setData(a):this._indexBuffer=E$1.createIndex(t,F.DYNAMIC_DRAW,a),!this._vao){const e=y();this._vao=new f$2(t,e.attributes,e.bufferLayouts,{geometry:this._vertexBuffer},this._indexBuffer);}}}const y=()=>ee("bounds",{geometry:[{location:0,name:"a_position",count:2,type:C$1.FLOAT}]});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let n=class extends o{constructor(e){super(e),this.hasHighlight=()=>!0;}destroy(){super.destroy(),this._boundsRenderer=a$1(this._boundsRenderer);}enableRenderingBounds(e){this._boundsRenderer=new b(e),this.requestRender();}get hasLabels(){return !1}onTileData(e,t){e.patch(t),this.contains(e)||this.addChild(e),this.requestRender();}onTileError(e){e.clear(),this.contains(e)||this.addChild(e);}_renderChildren(e,t){for(const r of this.children)r.isReady&&r.hasData&&(r.commit(e),e.context.setStencilFunction(I$1.EQUAL,r.stencilRef,255),r.getDisplayList().replay(e,r,t));}};

export { n };
