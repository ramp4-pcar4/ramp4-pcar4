import{o as S}from"./_commonjsHelpers-BITg13Vk.js";import{T as V,d5 as q}from"./main-C3PVbFgd.js";var R,T={exports:{}};function B(){return R||(R=1,F=function(){return function(b){var o={};function s(a){if(o[a])return o[a].exports;var l=o[a]={exports:{},id:a,loaded:!1};return b[a].call(l.exports,l,l.exports,s),l.loaded=!0,l.exports}return s.m=b,s.c=o,s.p="",s(0)}([function(b,o,s){Object.defineProperty(o,"__esModule",{value:!0}),o.isNotPNG=n,o.isNotAPNG=r,o.default=i;var a=v(s(1)),l=s(2);function v(h){return h&&h.__esModule?h:{default:h}}var f=new Error("Not a PNG"),e=new Error("Not an animated PNG");function n(h){return h===f}function r(h){return h===e}var t=new Uint8Array([137,80,78,71,13,10,26,10]);function i(h){var g=new Uint8Array(h);if(Array.prototype.some.call(t,function(L,w){return L!==g[w]}))return f;var y=!1;if(u(g,function(L){return!(y=L==="acTL")}),!y)return e;var d=[],x=[],O=null,c=null,D=0,P=new l.APNG;if(u(g,function(L,w,m,A){var E=new DataView(w.buffer);switch(L){case"IHDR":O=w.subarray(m+8,m+8+A),P.width=E.getUint32(m+8),P.height=E.getUint32(m+12);break;case"acTL":P.numPlays=E.getUint32(m+8+4);break;case"fcTL":c&&(P.frames.push(c),D++),(c=new l.Frame).width=E.getUint32(m+8+4),c.height=E.getUint32(m+8+8),c.left=E.getUint32(m+8+12),c.top=E.getUint32(m+8+16);var G=E.getUint16(m+8+20),N=E.getUint16(m+8+22);N===0&&(N=100),c.delay=1e3*G/N,c.delay<=10&&(c.delay=100),P.playTime+=c.delay,c.disposeOp=E.getUint8(m+8+24),c.blendOp=E.getUint8(m+8+25),c.dataParts=[],D===0&&c.disposeOp===2&&(c.disposeOp=1);break;case"fdAT":c&&c.dataParts.push(w.subarray(m+8+4,m+8+A));break;case"IDAT":c&&c.dataParts.push(w.subarray(m+8,m+8+A));break;case"IEND":x.push(I(w,m,12+A));break;default:d.push(I(w,m,12+A))}}),c&&P.frames.push(c),P.frames.length==0)return e;var C=new Blob(d),M=new Blob(x);return P.frames.forEach(function(L){var w=[];w.push(t),O.set(U(L.width),0),O.set(U(L.height),4),w.push(k("IHDR",O)),w.push(C),L.dataParts.forEach(function(m){return w.push(k("IDAT",m))}),w.push(M),L.imageData=new Blob(w,{type:"image/png"}),delete L.dataParts,w=null}),P}function u(h,g){var y=new DataView(h.buffer),d=8,x=void 0,O=void 0,c=void 0;do O=y.getUint32(d),c=g(x=_(h,d+4,4),h,d,O),d+=12+O;while(c!==!1&&x!="IEND"&&d<h.length)}function _(h,g,y){var d=Array.prototype.slice.call(h.subarray(g,g+y));return String.fromCharCode.apply(String,d)}function p(h){for(var g=new Uint8Array(h.length),y=0;y<h.length;y++)g[y]=h.charCodeAt(y);return g}function I(h,g,y){var d=new Uint8Array(y);return d.set(h.subarray(g,g+y)),d}var k=function(h,g){var y=h.length+g.length,d=new Uint8Array(y+8),x=new DataView(d.buffer);x.setUint32(0,g.length),d.set(p(h),4),d.set(g,8);var O=(0,a.default)(d,4,y);return x.setUint32(y+4,O),d},U=function(h){return new Uint8Array([h>>>24&255,h>>>16&255,h>>>8&255,255&h])}},function(b,o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(f){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=-1,r=e,t=e+(arguments.length>2&&arguments[2]!==void 0?arguments[2]:f.length-e);r<t;r++)n=n>>>8^s[255&(n^f[r])];return~n};for(var s=new Uint32Array(256),a=0;a<256;a++){for(var l=a,v=0;v<8;v++)l=1&l?3988292384^l>>>1:l>>>1;s[a]=l}},function(b,o,s){Object.defineProperty(o,"__esModule",{value:!0}),o.Frame=o.APNG=void 0;var a=function(){function e(n,r){for(var t=0;t<r.length;t++){var i=r[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}(),l=v(s(3));function v(e){return e&&e.__esModule?e:{default:e}}function f(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}o.APNG=function(){function e(){f(this,e),this.width=0,this.height=0,this.numPlays=0,this.playTime=0,this.frames=[]}return a(e,[{key:"createImages",value:function(){return Promise.all(this.frames.map(function(n){return n.createImage()}))}},{key:"getPlayer",value:function(n){var r=this,t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];return this.createImages().then(function(){return new l.default(r,n,t)})}}]),e}(),o.Frame=function(){function e(){f(this,e),this.left=0,this.top=0,this.width=0,this.height=0,this.delay=0,this.disposeOp=0,this.blendOp=0,this.imageData=null,this.imageElement=null}return a(e,[{key:"createImage",value:function(){var n=this;return this.imageElement?Promise.resolve():new Promise(function(r,t){var i=URL.createObjectURL(n.imageData);n.imageElement=document.createElement("img"),n.imageElement.onload=function(){URL.revokeObjectURL(i),r()},n.imageElement.onerror=function(){URL.revokeObjectURL(i),n.imageElement=null,t(new Error("Image creation error"))},n.imageElement.src=i})}}]),e}()},function(b,o,s){Object.defineProperty(o,"__esModule",{value:!0});var a=function(){function r(t,i){for(var u=0;u<i.length;u++){var _=i[u];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(t,_.key,_)}}return function(t,i,u){return i&&r(t.prototype,i),u&&r(t,u),t}}();function l(r){return r&&r.__esModule?r:{default:r}}function v(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function f(r,t){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||typeof t!="object"&&typeof t!="function"?r:t}function e(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(r,t):r.__proto__=t)}var n=function(r){function t(i,u,_){v(this,t);var p=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return p.playbackRate=1,p._currentFrameNumber=0,p._ended=!1,p._paused=!0,p._numPlays=0,p._rafId=null,p._apng=i,p.context=u,p.stop(),_&&p.play(),p}return e(t,r),a(t,[{key:"renderNextFrame",value:function(){this._currentFrameNumber=(this._currentFrameNumber+1)%this._apng.frames.length,this._currentFrameNumber===this._apng.frames.length-1&&(this._numPlays++,this._apng.numPlays!==0&&this._numPlays>=this._apng.numPlays&&(this._ended=!0,this._paused=!0)),this._prevFrame&&this._prevFrame.disposeOp==1?this.context.clearRect(this._prevFrame.left,this._prevFrame.top,this._prevFrame.width,this._prevFrame.height):this._prevFrame&&this._prevFrame.disposeOp==2&&this.context.putImageData(this._prevFrameData,this._prevFrame.left,this._prevFrame.top);var i=this.currentFrame;this._prevFrame=i,this._prevFrameData=null,i.disposeOp==2&&(this._prevFrameData=this.context.getImageData(i.left,i.top,i.width,i.height)),i.blendOp==0&&this.context.clearRect(i.left,i.top,i.width,i.height),this.context.drawImage(i.imageElement,i.left,i.top),this.emit("frame",this._currentFrameNumber),this._ended&&this.emit("end")}},{key:"play",value:function(){var i=this;this._rafId&&cancelAnimationFrame(this._rafId),this.emit("play"),this._ended&&this.stop(),this._paused=!1;var u=performance.now()+this.currentFrame.delay/this.playbackRate,_=function p(I){if(!i._ended&&!i._paused){if(I>=u){for(;I-u>=i._apng.playTime/i.playbackRate;)u+=i._apng.playTime/i.playbackRate,i._numPlays++;do i.renderNextFrame(),u+=i.currentFrame.delay/i.playbackRate;while(!i._ended&&!i._paused&&I>u)}i._rafId=requestAnimationFrame(p)}};this._rafId=requestAnimationFrame(_)}},{key:"pause",value:function(){this._paused||(this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=null),this.emit("pause"),this._paused=!0)}},{key:"stop",value:function(){this._rafId&&(cancelAnimationFrame(this._rafId),this._rafId=null),this.emit("stop"),this._numPlays=0,this._ended=!1,this._paused=!0,this._currentFrameNumber=-1,this.context.clearRect(0,0,this._apng.width,this._apng.height),this.renderNextFrame()}},{key:"currentFrameNumber",get:function(){return this._currentFrameNumber}},{key:"currentFrame",get:function(){return this._apng.frames[this._currentFrameNumber]}},{key:"paused",get:function(){return this._paused}},{key:"ended",get:function(){return this._ended}}]),t}(l(s(4)).default);o.default=n},function(b,o){function s(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function a(e){return typeof e=="function"}function l(e){return typeof e=="number"}function v(e){return typeof e=="object"&&e!==null}function f(e){return e===void 0}b.exports=s,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._maxListeners=void 0,s.defaultMaxListeners=10,s.prototype.setMaxListeners=function(e){if(!l(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},s.prototype.emit=function(e){var n,r,t,i,u,_;if(this._events||(this._events={}),e==="error"&&(!this._events.error||v(this._events.error)&&!this._events.error.length)){if((n=arguments[1])instanceof Error)throw n;var p=new Error('Uncaught, unspecified "error" event. ('+n+")");throw p.context=n,p}if(f(r=this._events[e]))return!1;if(a(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:i=Array.prototype.slice.call(arguments,1),r.apply(this,i)}else if(v(r))for(i=Array.prototype.slice.call(arguments,1),t=(_=r.slice()).length,u=0;u<t;u++)_[u].apply(this,i);return!0},s.prototype.addListener=function(e,n){var r;if(!a(n))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,a(n.listener)?n.listener:n),this._events[e]?v(this._events[e])?this._events[e].push(n):this._events[e]=[this._events[e],n]:this._events[e]=n,v(this._events[e])&&!this._events[e].warned&&(r=f(this._maxListeners)?s.defaultMaxListeners:this._maxListeners)&&r>0&&this._events[e].length>r&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),typeof console.trace=="function"&&console.trace()),this},s.prototype.on=s.prototype.addListener,s.prototype.once=function(e,n){if(!a(n))throw TypeError("listener must be a function");var r=!1;function t(){this.removeListener(e,t),r||(r=!0,n.apply(this,arguments))}return t.listener=n,this.on(e,t),this},s.prototype.removeListener=function(e,n){var r,t,i,u;if(!a(n))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(i=(r=this._events[e]).length,t=-1,r===n||a(r.listener)&&r.listener===n)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,n);else if(v(r)){for(u=i;u-- >0;)if(r[u]===n||r[u].listener&&r[u].listener===n){t=u;break}if(t<0)return this;r.length===1?(r.length=0,delete this._events[e]):r.splice(t,1),this._events.removeListener&&this.emit("removeListener",e,n)}return this},s.prototype.removeAllListeners=function(e){var n,r;if(!this._events)return this;if(!this._events.removeListener)return arguments.length===0?this._events={}:this._events[e]&&delete this._events[e],this;if(arguments.length===0){for(n in this._events)n!=="removeListener"&&this.removeAllListeners(n);return this.removeAllListeners("removeListener"),this._events={},this}if(a(r=this._events[e]))this.removeListener(e,r);else if(r)for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},s.prototype.listeners=function(e){return this._events&&this._events[e]?a(this._events[e])?[this._events[e]]:this._events[e].slice():[]},s.prototype.listenerCount=function(e){if(this._events){var n=this._events[e];if(a(n))return 1;if(n)return n.length}return 0},s.listenerCount=function(e,n){return e.listenerCount(n)}}])},T.exports=F()),T.exports;var F}const H=S(B());async function K(F,b){const o=H(F);if(o instanceof Error)throw o;await o.createImages(),V(b);const{frames:s,width:a,height:l}=o,v=document.createElement("canvas");v.width=a,v.height=l;const f=v.getContext("2d",{willReadFrequently:!0}),e=[],n=[];let r=0;for(const t of s){const i=q(t.delay||100);n.push(i),r+=i;const u=t.imageElement;t.blendOp===0?f.globalCompositeOperation="copy":f.globalCompositeOperation="source-over";const _=t.disposeOp===2?f.getImageData(t.left,t.top,t.width,t.height):void 0;f.drawImage(u,t.left,t.top);const p=f.getImageData(0,0,a,l);e.push(p),t.disposeOp===0||(t.disposeOp===1?f.clearRect(t.left,t.top,t.width,t.height):t.disposeOp===2&&f.putImageData(_,t.left,t.top))}return{frameCount:s.length,duration:r,frameDurations:n,getFrame:t=>e[t],width:a,height:l}}const Q=[137,80,78,71,13,10,26,10];function j(F){const b=new Uint8Array(F);return!Q.some((o,s)=>o!==b[s])}function $(F){if(!j(F))return!1;const b=new DataView(F),o=new Uint8Array(F);let s,a=8;do{const l=b.getUint32(a);if(s=String.fromCharCode.apply(String,Array.prototype.slice.call(o.subarray(a+4,a+8))),s==="acTL")return!0;a+=12+l}while(s!=="IEND"&&a<o.length);return!1}export{$ as isAnimatedPNG,j as isPNG,K as parseApng};
