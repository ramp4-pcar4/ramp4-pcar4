import{bk as J}from"./main-CzbArNue.js";import"./preload-helper-ExcqyqRp.js";var D,x={},G={},B={};function $(){if(D)return B;D=1,Object.defineProperty(B,"__esModule",{value:!0}),B.loop=B.conditional=B.parse=void 0;var g=function a(d,o){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:s;if(Array.isArray(o))o.forEach(function(m){return a(d,m,s,c)});else if(typeof o=="function")o(d,s,c,a);else{var l=Object.keys(o)[0];Array.isArray(o[l])?(c[l]={},a(d,o[l],s,c[l])):c[l]=o[l](d,s,c,a)}return s};B.parse=g;var u=function(a,d){return function(o,s,c,l){d(o,s,c)&&l(o,a,s,c)}};B.conditional=u;var t=function(a,d){return function(o,s,c,l){for(var m=[],e=o.pos;d(o,s,c);){var r={};if(l(o,a,s,r),o.pos===e)break;e=o.pos,m.push(r)}return m}};return B.loop=t,B}var O,T,h={};function H(){if(O)return h;O=1,Object.defineProperty(h,"__esModule",{value:!0}),h.readBits=h.readArray=h.readUnsigned=h.readString=h.peekBytes=h.readBytes=h.peekByte=h.readByte=h.buildStream=void 0;var g=function(e){return{data:e,pos:0}};h.buildStream=g;var u=function(){return function(e){return e.data[e.pos++]}};h.readByte=u;var t=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(r){return r.data[r.pos+e]}};h.peekByte=t;var a=function(e){return function(r){return r.data.subarray(r.pos,r.pos+=e)}};h.readBytes=a;var d=function(e){return function(r){return r.data.subarray(r.pos,r.pos+e)}};h.peekBytes=d;var o=function(e){return function(r){return Array.from(a(e)(r)).map(function(n){return String.fromCharCode(n)}).join("")}};h.readString=o;var s=function(e){return function(r){var n=a(2)(r);return e?(n[1]<<8)+n[0]:(n[0]<<8)+n[1]}};h.readUnsigned=s;var c=function(e,r){return function(n,i,f){for(var y=typeof r=="function"?r(n,i,f):r,p=a(e),v=new Array(y),w=0;w<y;w++)v[w]=p(n);return v}};h.readArray=c;var l=function(e,r,n){for(var i=0,f=0;f<n;f++)i+=e[r+f]&&Math.pow(2,n-f-1);return i},m=function(e){return function(r){for(var n=u()(r),i=new Array(8),f=0;f<8;f++)i[7-f]=!!(n&1<<f);return Object.keys(e).reduce(function(y,p){var v=e[p];return v.length?y[p]=l(i,v.index,v.length):y[p]=i[v.index],y},{})}};return h.readBits=m,h}function K(){return T||(T=1,function(g){Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var u=$(),t=H(),a={blocks:function(e){for(var r=0,n=[],i=e.data.length,f=0,y=(0,t.readByte)()(e);y!==r&&y;y=(0,t.readByte)()(e)){if(e.pos+y>=i){var p=i-e.pos;n.push((0,t.readBytes)(p)(e)),f+=p;break}n.push((0,t.readBytes)(y)(e)),f+=y}for(var v=new Uint8Array(f),w=0,b=0;b<n.length;b++)v.set(n[b],w),w+=n[b].length;return v}},d=(0,u.conditional)({gce:[{codes:(0,t.readBytes)(2)},{byteSize:(0,t.readByte)()},{extras:(0,t.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,t.readUnsigned)(!0)},{transparentColorIndex:(0,t.readByte)()},{terminator:(0,t.readByte)()}]},function(e){var r=(0,t.peekBytes)(2)(e);return r[0]===33&&r[1]===249}),o=(0,u.conditional)({image:[{code:(0,t.readByte)()},{descriptor:[{left:(0,t.readUnsigned)(!0)},{top:(0,t.readUnsigned)(!0)},{width:(0,t.readUnsigned)(!0)},{height:(0,t.readUnsigned)(!0)},{lct:(0,t.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,u.conditional)({lct:(0,t.readArray)(3,function(e,r,n){return Math.pow(2,n.descriptor.lct.size+1)})},function(e,r,n){return n.descriptor.lct.exists}),{data:[{minCodeSize:(0,t.readByte)()},a]}]},function(e){return(0,t.peekByte)()(e)===44}),s=(0,u.conditional)({text:[{codes:(0,t.readBytes)(2)},{blockSize:(0,t.readByte)()},{preData:function(e,r,n){return(0,t.readBytes)(n.text.blockSize)(e)}},a]},function(e){var r=(0,t.peekBytes)(2)(e);return r[0]===33&&r[1]===1}),c=(0,u.conditional)({application:[{codes:(0,t.readBytes)(2)},{blockSize:(0,t.readByte)()},{id:function(e,r,n){return(0,t.readString)(n.blockSize)(e)}},a]},function(e){var r=(0,t.peekBytes)(2)(e);return r[0]===33&&r[1]===255}),l=(0,u.conditional)({comment:[{codes:(0,t.readBytes)(2)},a]},function(e){var r=(0,t.peekBytes)(2)(e);return r[0]===33&&r[1]===254}),m=[{header:[{signature:(0,t.readString)(3)},{version:(0,t.readString)(3)}]},{lsd:[{width:(0,t.readUnsigned)(!0)},{height:(0,t.readUnsigned)(!0)},{gct:(0,t.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,t.readByte)()},{pixelAspectRatio:(0,t.readByte)()}]},(0,u.conditional)({gct:(0,t.readArray)(3,function(e,r){return Math.pow(2,r.lsd.gct.size+1)})},function(e,r){return r.lsd.gct.exists}),{frames:(0,u.loop)([d,c,l,o,s],function(e){var r=(0,t.peekByte)()(e);return r===33||r===44})}];g.default=m}(G)),G}var P,I={};function L(){if(P)return I;P=1,Object.defineProperty(I,"__esModule",{value:!0}),I.deinterlace=void 0;var g=function(u,t){for(var a=new Array(u.length),d=u.length/t,o=function(r,n){var i=u.slice(n*t,(n+1)*t);a.splice.apply(a,[r*t,t].concat(i))},s=[0,4,2,1],c=[8,8,4,2],l=0,m=0;m<4;m++)for(var e=s[m];e<d;e+=c[m])o(e,l),l++;return a};return I.deinterlace=g,I}var R,E,S={};function N(){if(R)return S;R=1,Object.defineProperty(S,"__esModule",{value:!0}),S.lzw=void 0;var g=function(u,t,a){var d,o,s,c,l,m,e,r,n,i,f,y,p,v,w,b,k=4096,C=-1,j=a,F=new Array(a),M=new Array(k),A=new Array(k),U=new Array(k+1);for(l=(o=1<<(i=u))+1,d=o+2,e=C,s=(1<<(c=i+1))-1,r=0;r<o;r++)M[r]=0,A[r]=r;for(f=y=p=v=w=b=0,n=0;n<j;){if(v===0){if(y<c){f+=t[b]<<y,y+=8,b++;continue}if(r=f&s,f>>=c,y-=c,r>d||r==l)break;if(r==o){s=(1<<(c=i+1))-1,d=o+2,e=C;continue}if(e==C){U[v++]=A[r],e=r,p=r;continue}for(m=r,r==d&&(U[v++]=p,r=e);r>o;)U[v++]=A[r],r=M[r];p=255&A[r],U[v++]=p,d<k&&(M[d]=e,A[d]=p,!(++d&s)&&d<k&&(c++,s+=d)),e=m}v--,F[w++]=U[v],n++}for(n=w;n<j;n++)F[n]=0;return F};return S.lzw=g,S}function Q(){if(E)return x;E=1,Object.defineProperty(x,"__esModule",{value:!0}),x.decompressFrames=x.decompressFrame=x.parseGIF=void 0;var g=o(K()),u=$(),t=H(),a=L(),d=N();function o(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var r=new Uint8Array(e);return(0,u.parse)((0,t.buildStream)(r),g.default)};x.parseGIF=s;var c=function(e){for(var r=e.pixels.length,n=new Uint8ClampedArray(4*r),i=0;i<r;i++){var f=4*i,y=e.pixels[i],p=e.colorTable[y]||[0,0,0];n[f]=p[0],n[f+1]=p[1],n[f+2]=p[2],n[f+3]=y!==e.transparentIndex?255:0}return n},l=function(e,r,n){if(e.image){var i=e.image,f=i.descriptor.width*i.descriptor.height,y=(0,d.lzw)(i.data.minCodeSize,i.data.blocks,f);i.descriptor.lct.interlaced&&(y=(0,a.deinterlace)(y,i.descriptor.width));var p={pixels:y,dims:{top:e.image.descriptor.top,left:e.image.descriptor.left,width:e.image.descriptor.width,height:e.image.descriptor.height}};return i.descriptor.lct&&i.descriptor.lct.exists?p.colorTable=i.lct:p.colorTable=r,e.gce&&(p.delay=10*(e.gce.delay||10),p.disposalType=e.gce.extras.disposal,e.gce.extras.transparentColorGiven&&(p.transparentIndex=e.gce.transparentColorIndex)),n&&(p.patch=c(p)),p}console.warn("gif frame does not have associated image.")};x.decompressFrame=l;var m=function(e,r){return e.frames.filter(function(n){return n.image}).map(function(n){return l(n,e.gct,r)})};return x.decompressFrames=m,x}var q=Q();let _,z,V;function W(g,u){return _??=document.createElement("canvas"),_.width=g,_.height=u,_.getContext("2d",{willReadFrequently:!0})}async function te(g,u){const t=q.parseGIF(g),a=q.decompressFrames(t,!0),{width:d,height:o}=t.lsd,s=W(d,o),c=[],l=[];let m=0;for(const e of a){const r=J(e.delay||100);l.push(r),m+=r;const n=X(new ImageData(e.patch,e.dims.width,e.dims.height)),i=e.disposalType===3?s.getImageData(e.dims.left,e.dims.top,e.dims.width,e.dims.height):void 0;s.drawImage(n,e.dims.left,e.dims.top);const f=s.getImageData(0,0,d,o);c.push(f),e.disposalType===1||(e.disposalType===2?s.clearRect(e.dims.left,e.dims.top,e.dims.width,e.dims.height):e.disposalType===3&&s.putImageData(i,e.dims.left,e.dims.top))}return{frameCount:a.length,duration:m,frameDurations:l,getFrame:e=>c[e],width:d,height:o}}function X(g){return z??=document.createElement("canvas"),V??=z.getContext("2d",{willReadFrequently:!0}),z.width=g.width,z.height=g.height,V.putImageData(g,0,0),z}const Y=[71,73,70];function Z(g){const u=new Uint8Array(g);return!Y.some((t,a)=>t!==u[a])}function ne(g){if(!Z(g))return!1;const u=new DataView(g),t=u.getUint8(10);let a=13+(128&t?3*2**(1+(7&t)):0),d=0,o=!1;for(;!o;){switch(u.getUint8(a++)){case 33:if(!s())return!1;break;case 44:c();break;case 59:o=!0;break;default:return!1}if(d>1)return!0}function s(){switch(u.getUint8(a++)){case 249:l();break;case 1:m();break;case 254:e();break;case 255:r();break;default:return!1}return!0}function c(){d++,a+=8;const i=u.getUint8(a++);a+=128&i?3*2**(1+(7&i)):0,a++,n()}function l(){a++,a+=4,n()}function m(){d++,a++,a+=12,n()}function e(){n()}function r(){a++,a+=8,a+=3,n()}function n(){let i;for(;i=u.getUint8(a++);)a+=i}return!1}export{ne as isAnimatedGIF,Z as isGIF,te as parseGif};
