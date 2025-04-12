import{p as B,h as $,c as V,bL as M,r as T,t as b,eM as S,b as k}from"./main-46bfe858.js";import{M as g,L as E,D,t as L,G as y,P as R,U as w,u as z}from"./enums-64ab819c.js";const K=B.getLogger("esri.views.webgl.checkWebGLError");function H(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const O=!!$("enable-feature:webgl-debug");function Y(){return O}function ee(){return O}function A(e){if(Y()){const t=e.getError();if(t){const i=H(e,t),r=new Error().stack;K.error(new V("webgl-error","WebGL error occured",{message:i,stack:r}))}}}const U={target:g.TEXTURE_2D,samplingMode:E.LINEAR,wrapMode:D.REPEAT,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,isImmutable:!1},v=4;let _=class{constructor(e,t,i=null){this._context=e,this.type="texture",this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,e.instanceCounter.increment(L.Texture,this),this._descriptor={...U,...t};for(const r in U)this._descriptor[r]===void 0&&(this._descriptor[r]=U[r]);if(e.type!==M.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),x(this._descriptor.target)))throw new Error("3D and array textures are not supported in WebGL1");this._descriptor.target===g.TEXTURE_CUBE_MAP?this._setDataCubeMap(i):this.setData(i)}get glName(){return this._glName}get descriptor(){return this._descriptor}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._context.gl&&this._glName&&(this._context.unbindTexture(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(L.Texture,this))}release(){this.dispose()}resize(e,t){const i=this._descriptor;if(i.width!==e||i.height!==t){if(this._wasImmutablyAllocated)throw new Error("Immutable textures can't be resized!");i.width=e,i.height=t,this._descriptor.target===g.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let t=g.TEXTURE_CUBE_MAP_POSITIVE_X;t<=g.TEXTURE_CUBE_MAP_NEGATIVE_Z;t++)this._setData(e,t)}setData(e){this._setData(e)}_setData(e,t){if(!this._context||!this._context.gl)return;const i=this._context.gl;this._glName||(this._glName=i.createTexture()),e===void 0&&(e=null);const r=this._descriptor,s=t??r.target,a=x(s);e===null&&(r.width=r.width||v,r.height=r.height||v,a&&(r.depth=r.depth??1));const h=this._context.bindTexture(this,_.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(_.TEXTURE_UNIT_FOR_UPDATES),_._validateTexture(this._context,r),this._configurePixelStorage(),A(i);const n=r.pixelFormat;let o=r.internalFormat??this._deriveInternalFormat(n,r.dataType);if(N(e)){let l=e.width,p=e.height;const u=1;e instanceof HTMLVideoElement&&(l=e.videoWidth,p=e.videoHeight),r.width&&r.height,a&&r.depth,r.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(s,o,r.hasMipmap,l,p,u),this._texImage(s,0,o,l,p,u,e),A(i),r.hasMipmap&&this.generateMipmap(),r.width===void 0&&(r.width=l),r.height===void 0&&(r.height=p),a&&r.depth===void 0&&(r.depth=u)}else{const{width:l,height:p,depth:u}=r;if(l==null||p==null)throw new Error("Width and height must be specified!");if(a&&u==null)throw new Error("Depth must be specified!");if(r.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(s,o,r.hasMipmap,l,p,u),i.DEPTH24_STENCIL8&&o===i.DEPTH_STENCIL&&(o=i.DEPTH24_STENCIL8),P(e)){const d=e.levels,m=F(s,l,p,u),c=Math.min(m-1,d.length-1);T(this._context.gl2)?i.texParameteri(r.target,this._context.gl2.TEXTURE_MAX_LEVEL,c):r.hasMipmap=r.hasMipmap&&m===d.length;const f=o;if(!Z(f))throw new Error("Attempting to use compressed data with an umcompressed format!");this._forEachMipmapLevel((I,G,X,W)=>{const C=d[Math.min(I,d.length-1)];this._compressedTexImage(s,I,f,G,X,W,C)},c)}else T(e)?(this._texImage(s,0,o,l,p,u,e),A(i),r.hasMipmap&&this.generateMipmap()):this._forEachMipmapLevel((d,m,c,f)=>{this._texImage(s,d,o,m,c,f,null),A(i)})}_._applySamplingMode(i,this._descriptor),_._applyWrapMode(i,this._descriptor),_._applyAnisotropicFilteringParameters(this._context,this._descriptor),A(i),this._context.bindTexture(h,_.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,t,i,r,s,a,h=0){a||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const n=this._context.gl,o=this._descriptor,{pixelFormat:l,dataType:p,target:u,isImmutable:d}=o,m=o.internalFormat??this._deriveInternalFormat(l,p);if(d&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");const c=this._context.bindTexture(this,_.TEXTURE_UNIT_FOR_UPDATES,!0);if((t<0||i<0||r>o.width||s>o.height||t+r>o.width||i+s>o.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),h){if(b(this._context.gl2))return void console.error("Webgl2 must be enabled to use dataRowOffset!");n.pixelStorei(this._context.gl2.UNPACK_SKIP_ROWS,h)}if(N(a)?T(this._context.gl2)?this._context.gl2.texSubImage2D(u,e,t,i,r,s,l,p,a):n.texSubImage2D(u,e,t,i,l,p,a):P(a)?n.compressedTexSubImage2D(u,e,t,i,r,s,m,a.levels[e]):n.texSubImage2D(u,e,t,i,r,s,l,p,a),h){if(b(this._context.gl2))return void console.error("Webgl2 must be enabled to use dataRowOffset!");n.pixelStorei(this._context.gl2.UNPACK_SKIP_ROWS,0)}this._context.bindTexture(c,_.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(e,t,i,r,s,a,h,n){n||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const o=this._context.gl2;if(b(o))throw new Error("3D textures are not supported in WebGL1");const l=this._descriptor,{pixelFormat:p,dataType:u,isImmutable:d,target:m}=l,c=l.internalFormat??this._deriveInternalFormat(p,u);if(d&&!this._wasImmutablyAllocated)throw new Error("Cannot update immutable texture before allocation!");x(m)||console.warn("Attempting to set 3D texture data on a non-3D texture");const f=this._context.bindTexture(this,_.TEXTURE_UNIT_FOR_UPDATES);if(this._context.setActiveTexture(_.TEXTURE_UNIT_FOR_UPDATES),(t<0||i<0||r<0||s>l.width||a>l.height||h>l.depth||t+s>l.width||i+a>l.height||r+h>l.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),P(n))n=n.levels[e],o.compressedTexSubImage3D(m,e,t,i,r,s,a,h,c,n);else{const I=n;o.texSubImage3D(m,e,t,i,r,s,a,h,p,u,I)}this._context.bindTexture(f,_.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new Error("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,_._validateTexture(this._context,e)}e.samplingMode===E.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=E.LINEAR_MIPMAP_NEAREST):e.samplingMode===E.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=E.NEAREST_MIPMAP_NEAREST);const t=this._context.bindTexture(this,_.TEXTURE_UNIT_FOR_UPDATES);this._context.setActiveTexture(_.TEXTURE_UNIT_FOR_UPDATES),this._context.gl.generateMipmap(e.target),this._context.bindTexture(t,_.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,_._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._context.gl,t=this._descriptor;this._samplingModeDirty&&(_._applySamplingMode(e,t),this._samplingModeDirty=!1),this._wrapModeDirty&&(_._applyWrapMode(e,t),this._wrapModeDirty=!1)}_deriveInternalFormat(e,t){if(this._context.type===M.WEBGL1)return e;switch(t){case y.FLOAT:switch(e){case R.RGBA:return w.RGBA32F;case R.RGB:return w.RGB32F;default:throw new Error("Unable to derive format")}case y.UNSIGNED_BYTE:switch(e){case R.RGBA:return w.RGBA8;case R.RGB:return w.RGB8}default:return e}}_configurePixelStorage(){const e=this._context.gl,{unpackAlignment:t,flipped:i,preMultiplyAlpha:r}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r?1:0)}_texStorage(e,t,i,r,s,a){const h=this._context.gl2;if(b(h))throw new Error("Immutable textures are not supported in WebGL1");if(!q(t))throw new Error("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const n=i?F(e,r,s,a):1;if(x(e)){if(a==null)throw new Error("Missing depth dimension for 3D texture upload");h.texStorage3D(e,n,t,r,s,a)}else h.texStorage2D(e,n,t,r,s);this._wasImmutablyAllocated=!0}_texImage(e,t,i,r,s,a,h){const n=this._context.gl;let o=null;const l=this._context.type===M.WEBGL2,p=x(e),{isImmutable:u,pixelFormat:d,dataType:m}=this._descriptor;if(l&&(o=n),l||!N(h))if(u){if(T(h)){const c=h;if(p){if(a==null)throw new Error("Missing depth dimension for 3D texture upload");o.texSubImage3D(e,t,0,0,0,r,s,a,d,m,c)}else n.texSubImage2D(e,t,0,0,r,s,d,m,c)}}else{const c=k(h);if(p){if(a==null)throw new Error("Missing depth dimension for 3D texture upload");o.texImage3D(e,t,i,r,s,a,0,d,m,c)}else n.texImage2D(e,t,i,r,s,0,d,m,c)}else n.texImage2D(e,0,i,d,m,h)}_compressedTexImage(e,t,i,r,s,a,h){const n=this._context.gl;let o=null;const l=x(e),p=this._descriptor.isImmutable;if(l){if(this._context.type!==M.WEBGL2)throw new Error("3D textures are not supported in WebGL1");o=n}if(p){if(T(h))if(l){if(a==null)throw new Error("Missing depth dimension for 3D texture upload");o.compressedTexSubImage3D(e,t,0,0,0,r,s,a,i,h)}else n.compressedTexSubImage2D(e,t,0,0,r,s,i,h)}else if(l){if(a==null)throw new Error("Missing depth dimension for 3D texture upload");o.compressedTexImage3D(e,t,i,r,s,a,0,h)}else n.compressedTexImage2D(e,t,i,r,s,0,h)}_forEachMipmapLevel(e,t=1/0){let{width:i,height:r,depth:s,hasMipmap:a,target:h}=this._descriptor;const n=h===g.TEXTURE_3D;if(i==null||r==null||n&&s==null)throw new Error("Missing texture dimensions for mipmap calculation");for(let o=0;e(o,i,r,s),a&&(i!==1||r!==1||n&&s!==1)&&!(o>=t);++o)i=Math.max(1,i>>1),r=Math.max(1,r>>1),n&&(s=Math.max(1,s>>1))}static _validateTexture(e,t){(t.width!=null&&t.width<0||t.height!=null&&t.height<0||t.depth!=null&&t.depth<0)&&console.error("Negative dimension parameters are not allowed!");const i=e.type===M.WEBGL2,r=t.width!=null&&S(t.width)&&t.height!=null&&S(t.height);i||!t.isImmutable&&!x(t.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),i||r||(typeof t.wrapMode=="number"?t.wrapMode!==D.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):t.wrapMode.s===D.CLAMP_TO_EDGE&&t.wrapMode.t===D.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(e,t){let i=t.samplingMode,r=t.samplingMode;i===E.LINEAR_MIPMAP_NEAREST||i===E.LINEAR_MIPMAP_LINEAR?(i=E.LINEAR,t.hasMipmap||(r=E.LINEAR)):i!==E.NEAREST_MIPMAP_NEAREST&&i!==E.NEAREST_MIPMAP_LINEAR||(i=E.NEAREST,t.hasMipmap||(r=E.NEAREST)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,i),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,r)}static _applyWrapMode(e,t){typeof t.wrapMode=="number"?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}static _applyAnisotropicFilteringParameters(e,t){const i=e.capabilities.textureFilterAnisotropic;i&&e.gl.texParameterf(t.target,i.TEXTURE_MAX_ANISOTROPY,t.maxAnisotropy??1)}};function q(e){return e in w}function Z(e){return e in z}function P(e){return T(e)&&"type"in e&&e.type==="compressed"}function j(e){return T(e)&&"byteLength"in e}function N(e){return T(e)&&!P(e)&&!j(e)}function x(e){return e===g.TEXTURE_3D||e===g.TEXTURE_2D_ARRAY}function F(e,t,i,r=1){let s=Math.max(t,i);return e===g.TEXTURE_3D&&(s=Math.max(s,r)),Math.round(Math.log(s)/Math.LN2)+1}_.TEXTURE_UNIT_FOR_UPDATES=0;export{_ as E,Y as a,ee as c,A as u};
