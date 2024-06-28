import { a as a$1 } from './WGLContainer-ac280853.js';
import { L as L$1 } from './enums-1f7f0b0a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
class r extends a$1{constructor(){super(...arguments),this._prevFBO=void 0,this.requiresDedicatedFBO=!1;}dispose(){}doRender(e){const r=this.createRenderParams(e),{context:o,painter:s,profiler:n}=r;this._prevFBO=o.getBoundFramebufferObject(),n.recordContainerStart(this.name);const i=this._getFbo(r),a=s.getRenderTarget();o.bindFramebuffer(i),s.setRenderTarget(i),o.setDepthWriteEnabled(!0),o.setColorMask(!0,!0,!0,!0),o.setClearColor(0,0,0,0),o.setClearDepth(1),o.clear(o.gl.COLOR_BUFFER_BIT|o.gl.DEPTH_BUFFER_BIT),o.setDepthWriteEnabled(!1);for(const t of this.children)t.beforeRender(e);for(const t of this.children)t.processRender(r);for(const t of this.children)t.afterRender(e);s.setRenderTarget(a),s.releaseFbo(i),o.bindFramebuffer(this._prevFBO),s.beforeRenderLayer(r,this._clippingInfos?255:0,this.computedOpacity),i.colorTexture&&(o.setStencilTestEnabled(!1),o.setStencilWriteMask(0),s.blitTexture(o,i.colorTexture,L$1.NEAREST)),s.compositeLayer(r,this.computedOpacity),n.recordContainerEnd();}createRenderParams(e){return {...super.createRenderParams(e),blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1}}_getFbo(e){const{context:t,painter:r}=e,{width:o,height:s}=t.getViewport();return r.acquireFbo(o,s)}}

export { r };
