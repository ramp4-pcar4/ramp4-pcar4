import{o as R}from"./floatRGBA-BbTJ4hen.js";import{n as $,fm as A}from"./main-Bd_03BNf.js";import{n as b}from"./defaultCIMValues--PXB5pEO.js";import{c as I}from"./definitions-CPtb4TQS.js";const z=15.5,x=4,U=64,W=1024,v=()=>$.getLogger("esri.symbols.cim.rasterizingUtils"),L=32,P=t=>t==="vertical"||t==="horizontal"||t==="cross"||t==="esriSFSCross"||t==="esriSFSVertical"||t==="esriSFSHorizontal";function j(t,i,a){const e=i.style,r=A(Math.ceil(a)),o=P(e)?8*r:16*r,n=2*r;t.width=o,t.height=o;const s=t.getContext("2d");s.strokeStyle="#ffffff",s.lineWidth=r,s.beginPath(),e!=="vertical"&&e!=="cross"&&e!=="esriSFSCross"&&e!=="esriSFSVertical"||(s.moveTo(o/2,-n),s.lineTo(o/2,o+n)),e!=="horizontal"&&e!=="cross"&&e!=="esriSFSCross"&&e!=="esriSFSHorizontal"||(s.moveTo(-n,o/2),s.lineTo(o+n,o/2)),e!=="backward-diagonal"&&e!=="diagonal-cross"&&e!=="esriSFSDiagonalCross"&&e!=="esriSFSBackwardDiagonal"||(s.moveTo(-n,-n),s.lineTo(o+n,o+n),s.moveTo(o-n,-n),s.lineTo(o+n,n),s.moveTo(-n,o-n),s.lineTo(n,o+n)),e!=="forward-diagonal"&&e!=="diagonal-cross"&&e!=="esriSFSForwardDiagonal"&&e!=="esriSFSDiagonalCross"||(s.moveTo(o+n,-n),s.lineTo(-n,o+n),s.moveTo(n,-n),s.lineTo(-n,n),s.moveTo(o+n,o-n),s.lineTo(o-n,o+n)),s.stroke();const h=s.getImageData(0,0,t.width,t.height),l=new Uint8Array(h.data);let f;for(let c=0;c<l.length;c+=4)f=l[c+3]/255,l[c]=l[c]*f,l[c+1]=l[c+1]*f,l[c+2]=l[c+2]*f;return[l,t.width,t.height,r]}function J(t){t.length%2==1&&(t=[...t,...t]);const i=t.reduce((c,u)=>c+u,0),a=Math.round(i*x),e=1,r=new Float32Array(a*e);let o=0,n=0,s=.5,h=!0;for(const c of t){for(o=n,n+=c*x;s<=n;){const u=s-.5,m=Math.min(Math.abs(s-o),Math.abs(s-n));r[u]=h?-m:m,s++}h=!h}const l=r.length,f=new Uint8Array(4*l);for(let c=0;c<l;++c){const u=r[c]/x;R(u/U*.5+.5,f,4*c)}return[f,a,e]}function K(t,i){t==null&&(t=[]);const a=i==="Butt",e=i==="Square",r=!a&&!e;t.length%2==1&&(t=[...t,...t]);const o=z,n=2*o;let s=0;for(const g of t)s+=g;const h=Math.round(s*o),l=new Float32Array(h*n),f=.5*o;let c=0,u=0,m=.5,M=!0;for(const g of t){for(c=u,u+=g*o;m<=u;){let p=.5;for(;p<n;){const D=(p-.5)*h+m-.5,d=r?(p-o)*(p-o):Math.abs(p-o);l[D]=M?a?Math.max(Math.max(c+f-m,d),Math.max(m-u+f,d)):d:r?Math.min((m-c)*(m-c)+d,(m-u)*(m-u)+d):e?Math.min(Math.max(m-c,d),Math.max(u-m,d)):Math.min(Math.max(m-c+f,d),Math.max(u+f-m,d)),p++}m++}M=!M}const F=l.length,T=new Uint8Array(4*F);for(let g=0;g<F;++g){const p=(r?Math.sqrt(l[g]):l[g])/o;R(p,T,4*g)}return[T,h,n]}function Q(t,i){const{colorRamp:a,gradientType:e}=i,r=a.type==="CIMFixedColorRamp",o=i.interval||b.CIMGradientFill.interval;let n=w(a);return r&&(n=N(n,o)),e==="Discrete"||r?E(t,n,o):q(t,n)}let y;function X(t,i){const{colorRamp:a,gradientType:e}=i,r=w(a),o=a.type==="CIMFixedColorRamp";if(e==="Continuous"&&!o)return C(t,r);const n=i.interval??b.CIMGradientFill.interval;if(o)return C(t,N(r,n));const s=[];y??=document.createElement("canvas"),S(y,r,n,1,0);const h=y.getContext("2d").getImageData(0,0,n,1).data;for(let l=0,f=0;l<n;l++,f=4*l){const c=[h[f+0],h[f+1],h[f+2],h[f+3]];s.push({offset:l/n,color:c}),s.push({offset:(l+1)/n,color:c})}return C(t,s)}function w(t){const i=[];switch(t.type){case"CIMPolarContinuousColorRamp":case"CIMLinearContinuousColorRamp":{t.type==="CIMPolarContinuousColorRamp"&&v().warnOnce("CIMPolarContinuousColorRamp is currently unsupported. Falling back to CIMLinearContinuousColorRamp.");const a=t;i.push({offset:0,color:[a.fromColor[0],a.fromColor[1],a.fromColor[2],a.fromColor[3]/255]}),i.push({offset:1,color:[a.toColor[0],a.toColor[1],a.toColor[2],a.toColor[3]/255]});break}case"CIMFixedColorRamp":{const a=t,e=1/(a.colors.length-1);let r=0;for(const o of a.colors)i.push({offset:r,color:[o[0],o[1],o[2],o[3]/255]}),r+=e;break}case"CIMMultipartColorRamp":{const a=t,e=a.weights.reduce((o,n)=>o+n,0);let r=0;for(let o=0;o<a.colorRamps.length;o++){const n=a.colorRamps[o],s=a.weights[o],h=w(n);for(const l of h)i.push({offset:(r+l.offset*s)/e,color:l.color});r+=s}break}default:v().error(`Color ramp "${t.type}" currently unsupported.`)}return i}function N(t,i){const a=[],e=(t.length-1)/(i-1);for(let r=0;r<i;r++){const o=t[Math.round(r*e)].color;a.push({offset:r/i,color:o}),a.push({offset:(r+1)/i,color:o})}return a}function q(t,i){return S(t,i,L,1,I),k(t)}function E(t,i,a){return S(t,i,a,1,I),k(t)}function C(t,i,a=0){for(const{offset:e,color:r}of i)t.addColorStop(Math.min(Math.max(e,a),1-a),`rgba(${r[0]}, ${r[1]}, ${r[2]}, ${r[3]})`)}function S(t,i,a,e,r){const o=a+2*r;t.width=o,t.height=e;const n=(r+1)/o,s=t.getContext("2d",{willReadFrequently:!0});if(i.length>0){const h=s.createLinearGradient(0,0,o,e);C(h,i,n),s.fillStyle=h}else s.fillStyle="rgba(128, 128, 128, 1)";s.fillRect(0,0,o,e)}function k(t){const{width:i,height:a}=t,e=t.getContext("2d").getImageData(0,0,i,a),r=new Uint8Array(e.data);for(let o=0;o<r.length;o+=4){const n=r[o+3]/255;r[o]*=n,r[o+1]*=n,r[o+2]*=n}return[r,i,a]}function G(t){const i=t[0]?.[0]?.[0]??0,a=t[0]?.[0]?.[1]??0,e={ymin:a,xmin:i,ymax:a,xmax:i,width:0,height:0};for(let r=0;r<t.length;r++){const o=t[r];for(let n=0;n<o.length;n++){const s=o[n][0],h=o[n][1];s<e.xmin&&(e.xmin=s),s>e.xmax&&(e.xmax=s),h<e.ymin&&(e.ymin=h),h>e.ymax&&(e.ymax=h)}}return e.width=Math.abs(e.xmax-e.xmin),e.height=Math.abs(e.ymax-e.ymin),e}function Y(t,i){const a=G(t),e=a.width===0?1:a.width,r=a.height===0?1:a.height,o=[];for(let n=0;n<t.length;n++){const s=t[n],h=[];for(let l=0;l<s.length;l++){let f=Math.round(s[l][0]-a.xmin),c=Math.round(s[l][1]-a.ymin);if(f=i.xmin+f*i.width/e,c=i.ymin+c*i.height/r,isNaN(f)||isNaN(c))throw new Error("Scaled shape has NaN values");h.push([f,c])}o.push(h)}return o}function Z(t,i,a){const e=[];for(let r=0;r<t.length;r++){const o=t[r],n=[];for(let s=0;s<o.length;s++){const h=o[s][0]+i,l=o[s][1]+a;if(isNaN(h)||isNaN(l))throw new Error("Scaled shape has NaN values");n.push([h,l])}e.push(n)}return e}export{Z as R,Y as T,U as c,W as e,j as f,Q as g,J as m,X as p,x as t,K as u};
