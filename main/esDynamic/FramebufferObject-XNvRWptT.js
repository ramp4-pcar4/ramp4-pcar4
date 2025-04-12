import{fp as b,n as A}from"./main-C3PVbFgd.js";import{E as C}from"./VertexArrayObject-B_HW1C13.js";import{a as D,e as d,w as T,b as B}from"./Texture-BO1NtlVo.js";import{V as p,X as c,G as R,U as O,t as F,n as m,M as u,F as M,A as w,B as l}from"./enums-DBi1-Mm2.js";class P{constructor(t,e,i=e){this.internalFormat=t,this.width=e,this.height=i,this.multisampled=!1,this.samples=1}}function U(s){return s.width<=0||s.height<=0||s.internalFormat==null?0:s.width*s.height*D(s.internalFormat)}class S{constructor(t,e){this._context=t,this._descriptor=e,this.type=d.RenderBuffer,this._context.instanceCounter.increment(p.Renderbuffer,this);const i=this._context.gl;this.glName=i.createRenderbuffer(),this._context.bindRenderbuffer(this);const{width:r,height:n,internalFormat:o,multisampled:h}=e;h?i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,o,r,n):i.renderbufferStorage(i.RENDERBUFFER,o,r,n),this._context.bindRenderbuffer(null)}get descriptor(){return this._descriptor}get samples(){const t=this._descriptor.samples,e=this._context.parameters.maxSamples;return t?Math.min(t,e):e}get usedMemory(){return U(this._descriptor)}resize(t,e){const i=this._descriptor;if(i.width===t&&i.height===e)return;i.width=t,i.height=e;const r=this._context.gl;this._context.bindRenderbuffer(this),i.multisampled?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,i.internalFormat,i.width,i.height):r.renderbufferStorage(r.RENDERBUFFER,i.internalFormat,i.width,i.height),this._context.bindRenderbuffer(null)}dispose(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(p.Renderbuffer,this),this._context=null)}}const L=()=>A.getLogger("esri.views.webgl.FramebufferObject");class f{constructor(t,e,i=null){this._context=t,this._glName=null,this._colorAttachments=new Map,this._depthStencilBuffer=null,this._depthStencilTexture=null,this._initialized=!1,t.instanceCounter.increment(p.FramebufferObject,this);const r=x(e)?e:new T(this._context,e);if(this._colorAttachments.set(c.COLOR_ATTACHMENT0,r),this._validateTextureDescriptor(r.descriptor),this._validateColorAttachmentPoint(c.COLOR_ATTACHMENT0),i!=null)if(z(i))this._depthStencilTexture=x(i)?i:new T(this._context,i),this._validateTextureDescriptor(this._depthStencilTexture.descriptor);else{const n=H(i)?i:new S(this._context,i);this._depthStencilBuffer=n,this._validateRenderBufferDescriptor(n.descriptor)}}dispose(){if(this._colorAttachments.size===0&&!this._glName)return;const t=this._context.getBoundFramebufferObject();this._colorAttachments.forEach((e,i)=>this.detachColorTexture(i)?.dispose()),this.detachDepthStencilBuffer()?.dispose(),this.detachDepthStencilTexture()?.dispose(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(t),this._context.instanceCounter.decrement(p.FramebufferObject,this)}get glName(){return this._glName}get colorTexture(){return this._colorAttachments.get(c.COLOR_ATTACHMENT0)}get depthStencil(){return this._depthStencilTexture||this._depthStencilBuffer}get depthStencilTexture(){return this._depthStencilTexture}get width(){return this._colorAttachments.get(c.COLOR_ATTACHMENT0)?.descriptor?.width??0}get height(){return this._colorAttachments.get(c.COLOR_ATTACHMENT0)?.descriptor?.height??0}get usedMemory(){return[...this._colorAttachments].reduce((t,[e,i])=>t+i.usedMemory,this.depthStencil?.usedMemory??0)}getColorTexture(t){const e=this._colorAttachments.get(t);return e&&x(e)?e:null}get colorAttachments(){return[...this._colorAttachments.keys()]}attachColorTexture(t,e=c.COLOR_ATTACHMENT0){if(!t)return;this._validateColorAttachmentPoint(e);const i=t.descriptor;this._validateTextureDescriptor(i),this.detachColorTexture(e)?.dispose(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,e)),this._colorAttachments.set(e,t)}detachColorTexture(t=c.COLOR_ATTACHMENT0){const e=this._colorAttachments.get(t);if(e){if(this._initialized){const i=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t),this._context.bindFramebuffer(i)}return this._colorAttachments.delete(t),e}}setColorTextureTarget(t,e=c.COLOR_ATTACHMENT0){const i=this._colorAttachments.get(e);i&&this._framebufferTexture2D(i.glName,e,t)}attachDepthStencil(t){if(t)switch(t.type){case d.Texture:return this._attachDepthStencilTexture(t);case d.RenderBuffer:return this._attachDepthStencilBuffer(t)}}_attachDepthStencilTexture(t){if(t==null)return;const e=t.descriptor;e.pixelFormat!==R.DEPTH_STENCIL&&e.pixelFormat!==R.DEPTH24_STENCIL8&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),e.dataType!==O.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._validateTextureDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(t.glName,F)),this._depthStencilTexture?.dispose(),this._depthStencilTexture=t}detachDepthStencilTexture(){const t=this._depthStencilTexture;if(t&&this._initialized){const e=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),this._framebufferTexture2D(null,F),this._context.bindFramebuffer(e)}return this._depthStencilTexture=null,t}_attachDepthStencilBuffer(t){if(t==null)return;const e=t.descriptor;if(this._validateRenderBufferDescriptor(e),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);const i=this._context.gl,r=this._getGLAttachmentPoint(e);i.framebufferRenderbuffer(m.FRAMEBUFFER,r,i.RENDERBUFFER,t.glName)}this._depthStencilBuffer=t}detachDepthStencilBuffer(){const t=this._depthStencilBuffer;if(t&&this._initialized){const e=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this);const i=this._context.gl,r=this._getGLAttachmentPoint(t.descriptor);i.framebufferRenderbuffer(m.FRAMEBUFFER,r,i.RENDERBUFFER,null),this._context.bindFramebuffer(e)}return this._depthStencilBuffer=null,t}copyToTexture(t,e,i,r,n,o,h){(t<0||e<0||n<0||o<0)&&console.error("Offsets cannot be negative!"),(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!");const _=h.descriptor;h.descriptor.target!==u.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(_?.width==null||_?.height==null||t+i>this.width||e+r>this.height||n+i>_.width||o+r>_.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");const a=this._context,g=a.bindTexture(h,T.TEXTURE_UNIT_FOR_UPDATES);a.setActiveTexture(T.TEXTURE_UNIT_FOR_UPDATES),a.bindFramebuffer(this),a.gl.copyTexSubImage2D(u.TEXTURE_2D,0,n,o,t,e,i,r),a.bindTexture(g,T.TEXTURE_UNIT_FOR_UPDATES)}readPixels(t,e,i,r,n,o,h){(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!"),h||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(t,e,i,r,n,o,h)}async readPixelsAsync(t,e,i,r,n,o,h){const{gl:_}=this._context,a=C.createPixelPack(this._context,M.STREAM_READ,h.byteLength);this._context.bindBuffer(a);const g=this._context.getBoundFramebufferObject();this._context.bindFramebuffer(this),_.readPixels(t,e,i,r,n,o,0),this._context.unbindBuffer(w.PIXEL_PACK_BUFFER),this._context.bindFramebuffer(g),await a.getSubDataAsync(h),a.dispose()}resize(t,e){if(this.width===t&&this.height===e)return;const i={width:t,height:e};E(i,this._context.parameters.maxTextureSize),this._colorAttachments.forEach(r=>r.resize(i.width,i.height)),this._depthStencilTexture?.resize(i.width,i.height),this._initialized&&(E(i,this._context.parameters.maxRenderbufferSize),this._depthStencilBuffer?.resize(i.width,i.height),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1)}initializeAndBind(t=m.FRAMEBUFFER){const e=this._context.gl;if(this._initialized)return void e.bindFramebuffer(t,this.glName);this._glName&&e.deleteFramebuffer(this._glName);const i=e.createFramebuffer();if(e.bindFramebuffer(t,i),this._colorAttachments.forEach((r,n)=>this._framebufferTexture2D(r.glName,n,N(r),t)),this._depthStencilBuffer){const r=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);e.framebufferRenderbuffer(t,r,e.RENDERBUFFER,this._depthStencilBuffer.glName)}else this._depthStencilTexture&&this._framebufferTexture2D(this._depthStencilTexture.glName,e.DEPTH_STENCIL_ATTACHMENT,N(this._depthStencilTexture),t);B()&&e.checkFramebufferStatus(t)!==e.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=i,this._initialized=!0}_framebufferTexture2D(t,e=c.COLOR_ATTACHMENT0,i=u.TEXTURE_2D,r=m.FRAMEBUFFER,n=0){this._context.gl.framebufferTexture2D(r,e,i,t,n)}_disposeDepthStencilAttachments(){const t=this._context.gl;if(this._depthStencilBuffer){if(this._initialized){this._context.bindFramebuffer(this);const e=this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);t.framebufferRenderbuffer(m.FRAMEBUFFER,e,t.RENDERBUFFER,null)}this._depthStencilBuffer=b(this._depthStencilBuffer)}this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,t.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture=b(this._depthStencilTexture))}_validateTextureDescriptor(t){t.target!==u.TEXTURE_2D&&t.target!==u.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),E(t,this._context.parameters.maxTextureSize),this._validateBufferDimensions(t)}_validateRenderBufferDescriptor(t){E(t,this._context.parameters.maxRenderbufferSize),this._validateBufferDimensions(t)}_validateBufferDimensions(t){t.width<=0&&(t.width=this.width),t.height<=0&&(t.height=this.height),this.width>0&&this.height>0&&(this.width===t.width&&this.height===t.height||console.error("Attachment size must match framebuffer size!"))}_getGLAttachmentPoint(t){switch(t.internalFormat){case l.DEPTH_COMPONENT16:case l.DEPTH_COMPONENT24:case l.DEPTH_COMPONENT32F:return this._context.gl.DEPTH_ATTACHMENT;case l.DEPTH24_STENCIL8:case l.DEPTH32F_STENCIL8:case l.DEPTH_STENCIL:return this._context.gl.DEPTH_STENCIL_ATTACHMENT;case l.STENCIL_INDEX8:return this._context.gl.STENCIL_ATTACHMENT}}_validateColorAttachmentPoint(t){if(f._MAX_COLOR_ATTACHMENTS===-1){const{gl:i}=this._context;f._MAX_COLOR_ATTACHMENTS=i.getParameter(i.MAX_COLOR_ATTACHMENTS)}const e=t-c.COLOR_ATTACHMENT0;e+1>f._MAX_COLOR_ATTACHMENTS&&A.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject",`illegal attachment point for color attachment: ${e+1}. Implementation supports up to ${f._MAX_COLOR_ATTACHMENTS} color attachments`)}}function x(s){return s!=null&&"type"in s&&s.type===d.Texture}function H(s){return s!=null&&"type"in s&&s.type===d.RenderBuffer}function z(s){return x(s)||s!=null&&"pixelFormat"in s}function E(s,t){const e=Math.max(s.width,s.height);if(e>t){L().warn(`Resizing FBO attachment size ${s.width}x${s.height} to device limit ${t}`);const i=t/e;return s.width=Math.round(s.width*i),s.height=Math.round(s.height*i),!1}return!0}function N(s){return s.descriptor.target===u.TEXTURE_CUBE_MAP?u.TEXTURE_CUBE_MAP_POSITIVE_X:u.TEXTURE_2D}f._MAX_COLOR_ATTACHMENTS=-1;export{P as i,S as s,f as x};
