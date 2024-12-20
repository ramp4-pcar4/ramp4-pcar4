import{gB as x,gc as n,h0 as M,hq as Te,gJ as we,hr as xe,hs as De,ht as je,g9 as s,gf as f,gj as R,ge as h,hu as $e,go as K,gp as ce,gm as g,gA as ke,g6 as q,g7 as H,gh as pe,gY as Be,gd as Fe,gk as fe,gl as he,hv as qe,gg as He,gi as Se,gr as z,gb as T,h3 as Ge,hw as We,gF as _e,h6 as k,gv as Ye,g8 as U,ga as O,gy as Ee}from"./main.efb50b2c.js";function L(e,t,a){return Math.max(t,Math.min(e,a))}function S(e,t=2){return e.toFixed(t).replace(/0+$/,"").replace(/\.$/,"")}function Ie(e){return e.endsWith(".")?NaN:(parseFloat(e)%360+360)%360/360}function ze(e){return S(360*e)}function P(e){if(!e.endsWith("%"))return NaN;const t=e.substring(0,e.length-1);if(t.endsWith("."))return NaN;const a=parseFloat(t);return Number.isNaN(a)?NaN:L(a,0,100)/100}function W(e){return S(100*e)+"%"}function te(e){if(e.endsWith("%"))return P(e);if(e.endsWith("."))return NaN;const t=parseFloat(e);return Number.isNaN(t)?NaN:L(t,0,255)/255}function ae(e){return S(255*e)}function ne(e){return e.endsWith("%")?P(e):L(parseFloat(e),0,1)}function re(e){return String(e)}const de={hsl:{h:{to:ze,from:Ie},s:{to:W,from:P},l:{to:W,from:P},a:{to:re,from:ne}},hwb:{h:{to:ze,from:Ie},w:{to:W,from:P},b:{to:W,from:P},a:{to:re,from:ne}},rgb:{r:{to:ae,from:te},g:{to:ae,from:te},b:{to:ae,from:te},a:{to:re,from:ne}}};function _(e){const t=e.replace(/^#/,""),a=[],l=t.length>4?2:1;for(let $=0;$<t.length;$+=l){const o=t.slice($,$+l);a.push(o.repeat(l%2+1))}a.length===3&&a.push("ff");const p=a.map($=>parseInt($,16)/255);return{r:p[0],g:p[1],b:p[2],a:p[3]}}function oe(e){const t=e.l<.5?e.l*(1+e.s):e.l+e.s-e.l*e.s,a=2*e.l-t;return{r:ie(a,t,e.h+1/3),g:ie(a,t,e.h),b:ie(a,t,e.h-1/3),a:e.a}}function ie(e,t,a){return a<0?a+=1:a>1&&(a-=1),a<1/6?e+6*(t-e)*a:a<.5?t:a<2/3?e+(t-e)*(2/3-a)*6:e}function j(e){return{r:le(5,e),g:le(3,e),b:le(1,e),a:e.a}}function le(e,t){const a=(e+6*t.h)%6;return t.v-t.v*t.s*Math.max(0,Math.min(a,4-a,1))}function N(e){return{h:e.h,s:e.b===1?0:1-e.w/(1-e.b),v:1-e.b,a:e.a}}function V(e){const t=Math.min(e.r,e.g,e.b),a=Math.max(e.r,e.g,e.b);let l;return l=a===t?0:a===e.r?(0+(e.g-e.b)/(a-t))/6:a===e.g?(2+(e.b-e.r)/(a-t))/6:(4+(e.r-e.g)/(a-t))/6,l<0&&(l+=1),{h:l,w:t,b:1-a,a:e.a}}function se(e){const t=V(e),a=t.w,l=1-t.b,p=(l+a)/2;let $;return $=l===0||a===1?0:(l-p)/Math.min(p,1-p),{h:t.h,s:$,l:p,a:e.a}}function Y(e){return"#"+Object.values(e).map(t=>{const a=255*t,l=Math.round(a).toString(16);return l.length===1?"0"+l:l}).join("")}const Ke={hex:[["hsl",e=>C(e,[_,se])],["hsv",e=>C(e,[_,V,N])],["hwb",e=>C(e,[_,V])],["rgb",_]],hsl:[["hex",e=>C(e,[oe,Y])],["hsv",function(e){const t=e.l+e.s*Math.min(e.l,1-e.l),a=t===0?0:2-2*e.l/t;return{h:e.h,s:a,v:t,a:e.a}}],["hwb",e=>C(e,[oe,V])],["rgb",oe]],hsv:[["hex",e=>C(e,[j,Y])],["hsl",function(e){const t=e.v-e.v*e.s/2,a=Math.min(t,1-t),l=a===0?0:(e.v-t)/a;return{h:e.h,s:l,l:t,a:e.a}}],["hwb",function(e){return{h:e.h,w:(1-e.s)*e.v,b:1-e.v,a:e.a}}],["rgb",j]],hwb:[["hex",e=>C(e,[N,j,Y])],["hsl",e=>C(e,[N,j,se])],["hsv",N],["rgb",e=>C(e,[N,j])]],rgb:[["hex",Y],["hsl",se],["hsv",e=>C(e,[V,N])],["hwb",V]]};function C(e,t){return t.reduce((a,l)=>l(a),e)}function B(e){const t={};for(const a in e)t[a]=e[a];return t}const Je={hex:(e,t)=>t&&[5,9].includes(e.length)?e.substring(0,e.length-(e.length-1)/4):e,hsl:(e,t)=>`hsl(${S(360*e.h)} ${S(100*e.s)}% ${S(100*e.l)}%`+(t?")":` / ${S(e.a)})`),hwb:(e,t)=>`hwb(${S(360*e.h)} ${S(100*e.w)}% ${S(100*e.b)}%`+(t?")":` / ${S(e.a)})`),rgb:(e,t)=>`rgb(${S(255*e.r)} ${S(255*e.g)} ${S(255*e.b)}`+(t?")":` / ${S(e.a)})`)};function Ce(e,t,a){return Je[t](e,a)}function Oe(e){return!!e.startsWith("#")&&!![3,4,6,8].includes(e.length-1)&&/^#[0-9A-Fa-f]+$/.test(e)}function Xe(e){if(typeof e!="string")return{format:function(u){return Object.prototype.hasOwnProperty.call(u,"r")?"rgb":Object.prototype.hasOwnProperty.call(u,"w")?"hwb":Object.prototype.hasOwnProperty.call(u,"v")?"hsv":"hsl"}(e),color:e};if(Oe(e))return{format:"hex",color:e};if(!e.includes("(")){const v=document.createElement("canvas").getContext("2d");v.fillStyle=e;const u=v.fillStyle;return u==="#000000"&&e!=="black"?null:{format:"hex",color:u}}const[t,a]=e.split("("),l=t.substring(0,3),p=a.replace(/[,/)]/g," ").replace(/\s+/g," ").trim().split(" ");p.length===3&&p.push("1");const $=l.split("").concat("a"),o=Object.fromEntries($.map((v,u)=>[v,de[l][v].from(p[u])]));return{format:l,color:o}}const ue=["hex","hsl","hwb","rgb"],Ze=["show","hide"],Qe={class:"vacp-range-input-group"},et=["for"],tt={class:"vacp-range-input-label-text vacp-range-input-label-text--hue"},at=x("Hue"),nt=["id","value"],rt=["for"],ot={class:"vacp-range-input-label-text vacp-range-input-label-text--alpha"},it=x("Alpha"),lt=["id","value"],st=x(" Copy color "),ut={class:"vacp-color-inputs"},ct={class:"vacp-color-input-group"},pt=["for"],dt=n("span",{class:"vacp-color-input-label-text"}," Hex ",-1),ft=["id","value"],ht=["id","for","onInput"],vt={class:"vacp-color-input-label-text"},gt=["id","value","onInput"],mt=x(" Switch format ");var bt={name:"ColorPicker",props:{color:{type:[String,Object],required:!1,default:null},id:{type:String,required:!1,default:"color-picker"},visibleFormats:{type:Array,required:!1,default:()=>ue,validator:e=>e.length>0&&e.every(t=>ue.includes(t))},defaultFormat:{type:String,required:!1,default:"hsl",validator:e=>ue.includes(e)},alphaChannel:{type:String,required:!1,default:"show",validator:e=>Ze.includes(e)}},emits:["color-change"],setup(e,{emit:t}){const a=e,l=M(null),p=M(null),$=M(null),o=M(!1),v=M(a.defaultFormat),u=Te({hex:"#ffffffff",hsl:{h:0,s:0,l:1,a:1},hsv:{h:0,s:0,v:1,a:1},hwb:{h:0,w:1,b:0,a:1},rgb:{r:1,g:1,b:1,a:1}}),J=we(()=>{const r=Object.keys(u[v.value]);return v.value!=="hex"&&a.alphaChannel==="hide"?r.slice(0,3):r}),X=we(()=>a.alphaChannel==="hide"&&[5,9].includes(u.hex.length)?u.hex.substring(0,u.hex.length-(u.hex.length-1)/4):u.hex);function Z(){const r=a.visibleFormats.findIndex(c=>c===v.value),i=r===a.visibleFormats.length-1?0:r+1;v.value=a.visibleFormats[i]}function m(r){o.value=!0,Q(r)}function Ae(r){o.value=!0,ee(r)}function G(){o.value=!1}function Q(r){r.buttons===1&&o.value!==!1&&p.value instanceof HTMLElement&&ge(p.value,r.clientX,r.clientY)}function ee(r){if(o.value===!1||!(p.value instanceof HTMLElement))return;r.preventDefault();const i=r.touches[0];ge(p.value,i.clientX,i.clientY)}function ge(r,i,c){const d=function(w,F,D){const I=w.getBoundingClientRect(),Re=F-I.left,Pe=D-I.top;return{x:L(Re/I.width,0,1),y:L(1-Pe/I.height,0,1)}}(r,i,c),b=B(u.hsv);b.s=d.x,b.v=d.y,A("hsv",b)}function Me(r){if(!["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"].includes(r.key))return;r.preventDefault();const i=["ArrowLeft","ArrowDown"].includes(r.key)?-1:1,c=["ArrowLeft","ArrowRight"].includes(r.key)?"s":"v",d=r.shiftKey?10:1,b=u.hsv[c]+i*d*.01,w=B(u.hsv);w[c]=L(b,0,1),A("hsv",w)}function me(r){if(r===null)return;const i=Xe(r);i!==null&&A(i.format,i.color)}function Le(r){const i=r.currentTarget,c=B(u.hsv);c.h=parseInt(i.value)/360,A("hsv",c)}function Ue(r){const i=r.currentTarget,c=B(u.hsv);c.a=parseInt(i.value)/100,A("hsv",c)}function be(r,i,c){const d=r.target,b=B(u[i]),w=de[i][c].from(d.value);Number.isNaN(w)||w===void 0||(b[c]=w,A(i,b))}function A(r,i){let c=i;if(a.alphaChannel==="hide")if(typeof i!="string")i.a=1,c=i;else if([5,9].includes(i.length)){const d=(i.length-1)/4;c=i.substring(0,i.length-d)+"f".repeat(d)}else[4,7].includes(i.length)&&(c=i+"f".repeat((i.length-1)/3));if(!function(d,b){if(typeof d=="string"||typeof b=="string")return d===b;for(const w in d)if(d[w]!==b[w])return!1;return!0}(u[r],c)){u[r]=c;const d=function(b){for(const[w,F]of Ke[b])u[w]=F(u[b]);return l.value instanceof HTMLElement&&p.value instanceof HTMLElement&&$.value instanceof HTMLElement&&function(w,F,D,I){w.style.setProperty("--vacp-hsl-h",String(I.hsl.h)),w.style.setProperty("--vacp-hsl-s",String(I.hsl.s)),w.style.setProperty("--vacp-hsl-l",String(I.hsl.l)),w.style.setProperty("--vacp-hsl-a",String(I.hsl.a)),F.setAttribute("style",`
    position: relative;
    background-color: hsl(calc(var(--vacp-hsl-h) * 360) 100% 50%); /* 1. */
    background-image:
      linear-gradient(to top, #000, transparent),  /* 2. */
      linear-gradient(to right, #fff, transparent) /* 2. */
    ;
  `),D.setAttribute("style",`
    box-sizing: border-box;
    position: absolute;
    left: ${100*I.hsv.s}%;   /* 3. */
    bottom: ${100*I.hsv.v}%; /* 3. */
  `)}(l.value,p.value,$.value,u),function(w,F){const D=a.alphaChannel==="hide";return{colors:w,cssColor:Ce(w[F],F,D)}}(u,v.value)}(r);t("color-change",d)}}function Ne(){const r=u[v.value],i=a.alphaChannel==="hide";(function(c){if(typeof document.queryCommandSupported!="function"||!document.queryCommandSupported("copy"))return!1;const d=document.createElement("textarea");let b;d.textContent=c,d.style.position="fixed",document.body.appendChild(d),d.select();try{b=document.execCommand("copy")}catch{b=!1}finally{document.body.removeChild(d)}})(Ce(r,v.value,i))}function Ve(r,i){return de[r][i].to(u[r][i])}function ye(r){if(!["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"].includes(r.key)||!r.shiftKey)return;const i=r.currentTarget,c=parseFloat(i.step),d=["ArrowLeft","ArrowDown"].includes(r.key)?-1:1,b=L(parseFloat(i.value)+d*c*10,parseInt(i.min),parseInt(i.max));i.value=String(b-d*c)}return xe(()=>a.color,r=>{me(r)}),De(()=>{document.addEventListener("mousemove",Q,{passive:!1}),document.addEventListener("touchmove",ee,{passive:!1}),document.addEventListener("mouseup",G),document.addEventListener("touchend",G),me(a.color)}),je(()=>{document.removeEventListener("mousemove",Q),document.removeEventListener("touchmove",ee),document.removeEventListener("mouseup",G),document.removeEventListener("touchend",G)}),(r,i)=>(s(),f("div",{ref_key:"colorPicker",ref:l,class:"vacp-color-picker"},[n("div",{ref_key:"colorSpace",ref:p,class:"vacp-color-space",onMousedown:m,onTouchstart:Ae},[n("div",{ref_key:"thumb",ref:$,class:"vacp-color-space-thumb",tabindex:"0","aria-label":"Color space thumb",onKeydown:Me},null,544)],544),n("div",Qe,[n("label",{class:"vacp-range-input-label vacp-range-input-label--hue",for:`${e.id}-hue-slider`},[n("span",tt,[R(r.$slots,"hue-range-input-label",{},()=>[at])]),n("input",{id:`${e.id}-hue-slider`,class:"vacp-range-input vacp-range-input--hue",value:360*u.hsv.h,type:"range",min:"0",max:"360",step:"1",onKeydownPassive:ye,onInput:Le},null,40,nt)],8,et),e.alphaChannel==="show"?(s(),f("label",{key:0,class:"vacp-range-input-label vacp-range-input-label--alpha",for:`${e.id}-alpha-slider`},[n("span",ot,[R(r.$slots,"alpha-range-input-label",{},()=>[it])]),n("input",{id:`${e.id}-alpha-slider`,class:"vacp-range-input vacp-range-input--alpha",value:100*u.hsv.a,type:"range",min:"0",max:"100",step:"1",onKeydownPassive:ye,onInput:Ue},null,40,lt)],8,rt)):h("",!0)]),n("button",{class:"vacp-copy-button",type:"button",onClick:Ne},[R(r.$slots,"copy-button",{},()=>[st])]),n("div",ut,[n("div",ct,[v.value==="hex"?(s(),f("label",{key:0,class:"vacp-color-input-label",for:`${e.id}-color-hex`},[dt,n("input",{id:`${e.id}-color-hex`,class:"vacp-color-input",type:"text",value:$e(X),onInput:i[0]||(i[0]=c=>function(d){const b=d.target;Oe(b.value)&&A("hex",b.value)}(c))},null,40,ft)],8,pt)):(s(!0),f(K,{key:1},ce($e(J),c=>(s(),f("label",{id:`${e.id}-color-${v.value}-${c}`,key:`${e.id}-color-${v.value}-${c}`,class:"vacp-color-input-label",for:`${e.id}-color-${v.value}`,onInput:d=>be(d,v.value,c)},[n("span",vt,g(c.toUpperCase()),1),n("input",{id:`${e.id}-color-${v.value}`,class:"vacp-color-input",type:"text",value:Ve(v.value,c),onInput:d=>be(d,v.value,c)},null,40,gt)],40,ht))),128))]),e.visibleFormats.length>1?(s(),f("button",{key:0,class:"vacp-format-switch-button",type:"button",onClick:Z},[R(r.$slots,"format-switch-button",{},()=>[mt])])):h("",!0)])],512))}};(function(e,t){t===void 0&&(t={});var a=t.insertAt;if(e&&typeof document<"u"){var l=document.head||document.getElementsByTagName("head")[0],p=document.createElement("style");p.type="text/css",a==="top"&&l.firstChild?l.insertBefore(p,l.firstChild):l.appendChild(p),p.styleSheet?p.styleSheet.cssText=e:p.appendChild(document.createTextNode(e))}})(`
/*
This style block is unscoped intentionally.

This is done to have a lower specificity for its selectors which in turn makes it easier to override their styles.

The specificity for \`.vacp-color-space[data-v-76c97bd2]\` is 20 while the specificity for \`.vacp-color-space\` is 10.
*/
.vacp-color-picker {
  --vacp-color: hsl(
    calc(var(--vacp-hsl-h) * 360)
    calc(var(--vacp-hsl-s) * 100%)
    calc(var(--vacp-hsl-l) * 100%)
    / var(--vacp-hsl-a)
  );
  --vacp-focus-color: dodgerblue;
  --vacp-color-space-width: 300px;
  --vacp-spacing: 6px;
  --vacp-tiled-background-image: linear-gradient(
      45deg,
      #eee 25%,
      transparent 25%,
      transparent 75%,
      #eee 75%,
      #eee
    ),
    linear-gradient(
      45deg,
      #eee 25%,
      transparent 25%,
      transparent 75%,
      #eee 75%,
      #eee
    )
  ;

  max-width: var(--vacp-color-space-width);
  padding: var(--vacp-spacing);
  display: grid;
  grid-gap: var(--vacp-spacing);
  grid-template-columns: 1fr min-content;
  grid-template-areas:
    "color-space  color-space"
    "range-inputs copy-button"
    "color-inputs color-inputs"
  ;
  font-size: 0.8em;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  background-color: #fff;
}
.vacp-color-picker *,
.vacp-color-picker *::before,
.vacp-color-picker *::after {
  box-sizing: border-box;
}
.vacp-color-picker button::-moz-focus-inner {
  border: none;
  padding: 0;
}
.vacp-color-picker :focus {
  outline: 2px solid var(--vacp-focus-color);
}
.vacp-color-space {
  grid-area: color-space;

  overflow: hidden;
  height: calc(var(--vacp-color-space-width) * 0.6);
}
.vacp-color-space-thumb {
  --vacp-thumb-size: calc(var(--vacp-spacing) * 4);

  width: var(--vacp-thumb-size);
  height: var(--vacp-thumb-size);
  margin-left: calc(-1 * var(--vacp-thumb-size) / 2);
  margin-bottom: calc(-1 * var(--vacp-thumb-size) / 2);
  border: 3px solid #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #000;
}

/*
1. Don\u2019t fully remove a focus outline or border. This is important to maintain a focus style in Windows\u2019 high contrast mode.
*/
.vacp-color-space-thumb:focus {
  outline-color: transparent; /* 1. */
  box-shadow: 0 0 0 1px #000, 0 0 0 3px var(--vacp-focus-color);
}
.vacp-range-input-label {
  --vacp-slider-track-width: 100%;
  --vacp-slider-track-height: calc(var(--vacp-spacing) * 3);
  --vacp-slider-thumb-size: calc(var(--vacp-slider-track-height) + var(--vacp-spacing));

  display: block;
}
.vacp-range-input-group {
  grid-area: range-inputs;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.vacp-range-input-group > :not(:first-child) {
  margin-top: var(--vacp-spacing);
}
.vacp-range-input,
.vacp-range-input::-webkit-slider-thumb {
  -webkit-appearance: none;
}
.vacp-range-input {
  display: block;
  width: var(--vacp-slider-track-width);
  height: var(--vacp-slider-track-height);
  margin-right: 0;
  margin-left: 0;
  margin-top: calc(var(--vacp-spacing) / 2);
  margin-bottom: calc(var(--vacp-spacing) / 2);
  padding: 0;
  border: none;
  background: none;
}
.vacp-range-input:focus {
  outline: none;
}

/* Resets one of these annoying custom focus styles in Firefox. */
.vacp-range-input::-moz-focus-outer {
  border: none;
}
.vacp-range-input--alpha {
  background-color: #fff;
  background-image: var(--vacp-tiled-background-image);
  background-size: calc(var(--vacp-spacing) * 2) calc(var(--vacp-spacing) * 2);
  background-position: 0 0, var(--vacp-spacing) var(--vacp-spacing);
}

/*
Range input: Tracks
*/
.vacp-range-input::-moz-range-track {
  display: block;
  box-sizing: border-box;
  height: var(--vacp-slider-track-height);
  border: none;
}
.vacp-range-input::-webkit-slider-runnable-track {
  width: var(--vacp-slider-track-width);
  height: var(--vacp-slider-track-height);
  border: none;
}
.vacp-range-input::-ms-track {
  width: var(--vacp-slider-track-width);
  height: var(--vacp-slider-track-height);
  border: none;
}
.vacp-range-input:focus::-moz-range-track {
  border: 1px solid var(--vacp-focus-color);
  outline: 2px solid var(--vacp-focus-color);
}
.vacp-range-input:focus::-webkit-slider-runnable-track {
  border: 1px solid var(--vacp-focus-color);
  outline: 2px solid var(--vacp-focus-color);
}
.vacp-range-input:focus::-ms-track {
  border: 1px solid var(--vacp-focus-color);
  outline: 2px solid var(--vacp-focus-color);
}
.vacp-range-input--alpha::-moz-range-track {
  background-image: linear-gradient(to right, transparent, var(--vacp-color));
}
.vacp-range-input--alpha::-webkit-slider-runnable-track {
  background-image: linear-gradient(to right, transparent, var(--vacp-color));
}
.vacp-range-input--alpha::-ms-track {
  background-image: linear-gradient(to right, transparent, var(--vacp-color));
}
.vacp-range-input--hue::-moz-range-track {
  background-image: linear-gradient(
    to right,
    /*   0\xB0 */ #f00 calc(100% *   0/360),
    /*  60\xB0 */ #ff0 calc(100% *  60/360),
    /* 120\xB0 */ #0f0 calc(100% * 120/360),
    /* 180\xB0 */ #0ff calc(100% * 180/360),
    /* 240\xB0 */ #00f calc(100% * 240/360),
    /* 300\xB0 */ #f0f calc(100% * 300/360),
    /* 360\xB0 */ #f00 calc(100% * 360/360)
  );
}
.vacp-range-input--hue::-webkit-slider-runnable-track {
  background-image: linear-gradient(
    to right,
    /*   0\xB0 */ #f00 calc(100% *   0/360),
    /*  60\xB0 */ #ff0 calc(100% *  60/360),
    /* 120\xB0 */ #0f0 calc(100% * 120/360),
    /* 180\xB0 */ #0ff calc(100% * 180/360),
    /* 240\xB0 */ #00f calc(100% * 240/360),
    /* 300\xB0 */ #f0f calc(100% * 300/360),
    /* 360\xB0 */ #f00 calc(100% * 360/360)
  );
}
.vacp-range-input--hue::-ms-track {
  background-image: linear-gradient(
    to right,
    /*   0\xB0 */ #f00 calc(100% *   0/360),
    /*  60\xB0 */ #ff0 calc(100% *  60/360),
    /* 120\xB0 */ #0f0 calc(100% * 120/360),
    /* 180\xB0 */ #0ff calc(100% * 180/360),
    /* 240\xB0 */ #00f calc(100% * 240/360),
    /* 300\xB0 */ #f0f calc(100% * 300/360),
    /* 360\xB0 */ #f00 calc(100% * 360/360)
  );
}

/*
Range input: thumbs
*/
.vacp-range-input::-moz-range-thumb {
  box-sizing: border-box;
  width: var(--vacp-slider-thumb-size);
  height: var(--vacp-slider-thumb-size);
  border: 3px solid #fff;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: 0 0 0 1px #000;
  transform: rotate(0);
}
.vacp-range-input::-webkit-slider-thumb {
  width: var(--vacp-slider-thumb-size);
  height: var(--vacp-slider-thumb-size);
  margin-top: calc((var(--vacp-slider-track-height) - var(--vacp-slider-thumb-size)) / 2);
  border: 3px solid #fff;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: 0 0 0 1px #000;
  transform: rotate(0);
}
.vacp-range-input::-ms-thumb {
  width: var(--vacp-slider-thumb-size);
  height: var(--vacp-slider-thumb-size);
  margin-top: 0;
  border: 3px solid #fff;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: 0 0 0 1px #000;
  transform: rotate(0);
}
.vacp-copy-button {
  grid-area: copy-button;
  justify-self: center;
  align-self: center;

  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(var(--vacp-spacing) * 6);
  height: calc(var(--vacp-spacing) * 6);
  border: 1px solid transparent;
  border-radius: 50%;
  color: #fff;

  /* Tiled background */
  background-color: #fff;
  background-image:
    linear-gradient(var(--vacp-color), var(--vacp-color)),
    var(--vacp-tiled-background-image)
  ;
  background-size: calc(var(--vacp-spacing) * 2) calc(var(--vacp-spacing) * 2);
  background-position: 0 0, var(--vacp-spacing) var(--vacp-spacing);
}
.vacp-copy-button:enabled:not(:hover) svg {
  display: none;
}

/*
1. Justification for removing the outline: The focus styles are maintained using a solid border style. This maintains a focus style in Windows\u2019 high contrast mode which would be lost with a combination of \`outline: none\` and a box shadow because box shadows are removed in high contrast mode.
*/
.vacp-copy-button:enabled:focus {
  outline: none; /* 1. */
  box-shadow: 0 0 0 2px var(--vacp-focus-color);
  border-color: var(--vacp-focus-color);
}
.vacp-copy-button:enabled:hover {
  background-color: var(--vacp-color);
  background-image: linear-gradient(rgb(0 0 0 / 0.25), rgb(0 0 0 / 0.25));
}
.vacp-color-inputs {
  grid-area: color-inputs;
  display: flex;
  align-items: center;
}
.vacp-color-inputs > :not(:first-child) {
  margin-left: var(--vacp-spacing);
}
.vacp-color-input-group {
  flex-grow: 1;
  display: flex;
}
.vacp-color-input-label {
  flex-grow: 1;
  text-align: center;
}
.vacp-color-input-label:not(:first-child) {
  margin-left: var(--vacp-spacing);
}
.vacp-color-input {
  width: 100%;
  margin: 0;
  margin-top: calc(var(--vacp-spacing) / 2);
  padding: var(--vacp-spacing);
  border: 1px solid #ccc;
  font: inherit;
  text-align: center;
  color: inherit;
  background-color: #fff;
}
.vacp-color-input:enabled:focus {
  border-color: var(--vacp-focus-color);
}
.vacp-format-switch-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: var(--vacp-spacing);
  border: 1px solid transparent;
  font: inherit;
  color: inherit;
  background-color: #fff;
}
.vacp-format-switch-button:enabled:focus {
  border-color: var(--vacp-focus-color);
}
.vacp-format-switch-button:enabled:hover {
  background-color: #eee;
}
`);class yt{layerSource=null;url="";fileData=null;typeSelection="";layerInfo={config:null,configOptions:[]};step=y.UPLOAD}var y=(e=>(e[e.UPLOAD=0]="UPLOAD",e[e.FORMAT=1]="FORMAT",e[e.CONFIGURE=2]="CONFIGURE",e))(y||{});const wt={},$t={goToStep:(e,t)=>{switch(e.state.step){case y.UPLOAD:t===y.UPLOAD?e.commit("SET_URL",""):t===y.FORMAT&&e.commit("SET_STEP",y.FORMAT);break;case y.FORMAT:t===y.UPLOAD?(e.state.fileData&&(e.commit("SET_URL",""),e.commit("SET_FILE_DATA",null)),e.commit("SET_TYPE_SELECTION",""),e.commit("SET_STEP",y.UPLOAD)):t===y.CONFIGURE&&e.commit("SET_STEP",y.CONFIGURE);break;case y.CONFIGURE:t===y.UPLOAD?(e.commit("SET_URL",""),e.commit("SET_TYPE_SELECTION",""),e.commit("SET_FILE_DATA",null),e.commit("SET_LAYER_INFO",{config:null,configOptions:[]}),e.commit("SET_STEP",y.UPLOAD)):t===y.FORMAT&&(e.commit("SET_LAYER_INFO",{config:null,configOptions:[]}),e.commit("SET_STEP",y.FORMAT));break}}},kt={};var E=(e=>(e.layerSource="wizard/layerSource",e.url="wizard/url",e.typeSelection="wizard/typeSelection",e.fileData="wizard/fileData",e.layerInfo="wizard/layerInfo",e.step="wizard/step",e.goToStep="wizard/goToStep",e))(E||{});function Na(){const e=new yt;return{namespaced:!0,state:e,getters:{...wt},actions:{...$t,...ke.actions(e)},mutations:{...kt,...ke.mutations(e)}}}const St=q({name:"WizardFormFooterV",props:{disabled:{type:Boolean,default:!0}}}),Et={class:"flex justify-end mb-20"},It=["disabled"];function zt(e,t,a,l,p,$){return s(),f("div",Et,[n("button",{class:"hover:bg-gray-200 text-gray-600 font-bold py-8 px-16 m-2",type:"button",onClick:t[0]||(t[0]=o=>e.$emit("cancel"))},g(e.$t("wizard.step.cancel")),1),n("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2 disabled:bg-gray-200 disabled:cursor-default disabled:text-gray-400",type:"button",disabled:e.disabled,onClick:t[1]||(t[1]=o=>e.$emit("submit"))},g(e.$t("wizard.step.continue")),9,It)])}var Ct=H(St,[["render",zt],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/wizard/form-footer.vue"]]);const Tt=q({name:"WizardInputV",props:{defaultOption:{type:Boolean,default:!1},formatError:{type:Boolean,default:!1},failureError:{type:Boolean,default:!1},help:{type:[String,Boolean],default:!1},label:{type:[String,Boolean],default:!1},modelValue:{type:[String,Array],default:""},name:{type:[String,Boolean],default:!1},options:{type:Array,default:[]},size:{type:[Number,Boolean],default:!1},multiple:{type:Boolean,default:!1},type:{type:String,default:"text"},url:{type:[String,Boolean],default:!1},validation:{type:Boolean,default:!1},validationMessages:{type:Object}},created(){if(this.defaultOption&&this.modelValue===""&&this.options.length){let e=this.options[0].value;if(this.name==="latField"){const t=new RegExp(/^(y|lat.*)$/i);e=this.options.find(l=>t.test(l.label))?.value||e}else if(this.name==="longField"){const t=new RegExp(/^(x|long.*)$/i);e=this.options.find(l=>t.test(l.label))?.value||e}this.$emit("update:modelValue",e)}},data(){return{valid:!1,urlError:!1,sublayersError:!1,selected:[]}},methods:{validUrl(e){let t;try{t=new URL(e)}catch{return this.valid=!1,!1}t.protocol==="http:"||t.protocol==="https:"?this.valid=!0:this.valid=!1},checkMultiSelectError(e){e&&e.length>0?this.sublayersError=!1:this.sublayersError=!0}}}),Ft=e=>(fe("data-v-123e95fc"),e=e(),he(),e),Ot={class:"input-wrapper mb-12"},At={key:0},Mt={class:"text-base font-bold"},Lt={class:"relative py-8 mb-0.5 h-75","data-type":"file"},Ut=Ft(()=>n("div",{class:"upload-mask absolute inset-0 flex border-dashed border-2 border-gray-400 pointer-events-none justify-center"},[n("svg",{class:"w-30 h-30 m-auto",fill:"#a8a8a8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 58 58"},[n("path",{d:"M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z"}),n("polygon",{points:"27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22"})])],-1)),Nt={class:"text-gray-400 text-xs mb-1"},Vt={key:1},Rt={class:"text-base font-bold"},Pt={class:"mb-0.5","data-type":"url"},xt=["value"],Dt={key:0,class:"text-red-900 text-xs"},jt={key:2},Bt={class:"text-base font-bold"},qt={class:"relative mb-0.5","data-type":"select"},Ht={key:0},Gt=["value"],Wt=["value"],_t={class:"text-gray-400 text-xs mb-1"},Yt={key:0,class:"text-red-900 text-xs"},Kt={key:1},Jt=["size","value"],Xt=["value"],Zt={key:0,class:"text-red-900 text-xs"},Qt={key:1,class:"text-red-900 text-xs"},ea={key:3},ta={class:"text-base font-bold"},aa={class:"relative mb-0.5"},na=["value"],ra={key:0,class:"text-red-900 text-xs"};function oa(e,t,a,l,p,$){return s(),f("div",Ot,[e.type==="file"?(s(),f("div",At,[n("label",Mt,g(e.label),1),n("div",Lt,[n("input",{class:"absolute w-full opacity-0 inset-0 cursor-pointer",type:"file",name:"file",accept:".geojson,.json,.csv,.zip",onInput:t[0]||(t[0]=o=>{e.$emit("upload",o.target.files[0]),o.target.value=null})},null,32),Ut]),n("div",Nt,g(e.help),1)])):e.type==="url"?(s(),f("div",Vt,[n("label",Rt,g(e.label),1),n("div",Pt,[n("input",{class:"text-sm w-full border-solid border-gray-300 mb-5 leading-5 focus:border-green-500",type:"url",name:"url",value:e.modelValue,onChange:t[1]||(t[1]=o=>e.valid?e.urlError=!1:e.urlError=!0),onInput:t[2]||(t[2]=o=>{e.validUrl(o.target.value),e.$emit("link",o.target.value,e.valid),e.urlError=!1})},null,40,xt)]),e.urlError?(s(),f("div",Dt,g(e.modelValue?e.validationMessages.invalid:e.validationMessages.required),1)):h("v-if",!0)])):e.type==="select"?(s(),f("div",jt,[n("label",Bt,g(e.label),1),n("div",qt,[e.multiple?(s(),f("div",Ht,[pe(n("select",{class:"block border-solid border-gray-300 w-full p-3 overflow-y-auto",multiple:"",value:e.modelValue,"onUpdate:modelValue":t[3]||(t[3]=o=>e.selected=o),onChange:t[4]||(t[4]=o=>{e.$emit("select",e.selected),e.checkMultiSelectError(e.selected)})},[(s(!0),f(K,null,ce(e.options,o=>(s(),f("option",{class:"p-6",key:o,value:o.value},g(o.label),9,Wt))),128))],40,Gt),[[Be,e.selected]]),n("div",_t,g(e.help),1),e.validation&&e.sublayersError?(s(),f("div",Yt,g(e.validationMessages.required),1)):h("v-if",!0)])):(s(),f("div",Kt,[n("select",{class:Fe(["block border-solid border-gray-300 w-full p-3 overflow-y-auto",e.size&&"configure-select"]),size:e.size?e.size:null,value:e.modelValue,onInput:t[5]||(t[5]=o=>e.size?e.$emit("select",o.target.value):e.$emit("update:modelValue",o.target.value))},[(s(!0),f(K,null,ce(e.options,o=>(s(),f("option",{class:"p-6",key:o,value:o.value},g(o.label),9,Xt))),128))],42,Jt),e.validation&&e.formatError?(s(),f("div",Zt,g(e.validationMessages.invalid),1)):h("v-if",!0),e.validation&&e.failureError?(s(),f("div",Qt,g(e.validationMessages.failure),1)):h("v-if",!0)]))])])):(s(),f("div",ea,[n("label",ta,g(e.label),1),n("div",aa,[n("input",{class:"border-solid border-gray-300 p-3 w-full",type:"text",value:e.modelValue,onChange:t[6]||(t[6]=o=>e.$emit("text",o.target.value))},null,40,na)]),e.validation&&!e.modelValue?(s(),f("div",ra,g(e.validationMessages.required),1)):h("v-if",!0)]))])}var ia=H(Tt,[["render",oa],["__scopeId","data-v-123e95fc"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/wizard/form-input.vue"]]);const la=q({name:"WizardStepperItemV",props:{title:{type:String,required:!0},summary:{type:String}},data(){return{index:-1}},setup(){return{stepper:qe("stepper")}},mounted(){this.index=this.stepper.numSteps++},methods:{done(){return this.stepper.activeIndex>this.index},active(){return this.stepper.activeIndex===this.index}}}),sa=e=>(fe("data-v-37be0d4a"),e=e(),he(),e),ua={class:"step relative flex flex-col px-12 overflow-y-hidden"},ca={class:"stepper-header flex pb-24"},pa=sa(()=>n("div",{class:"flex-none stepper-check w-24 h-24 text-gray-400"},[n("svg",{xmlns:"http://www.w3.org/2000/svg",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",focusable:"false"},[n("g",{id:"check_circle"},[n("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})])])],-1)),da={class:"flex flex-col overflow-hidden"},fa={class:"pl-12 flex items-center text-md"},ha={class:"pl-12 text-xs transition-opacity duration-1000 ease-out"},va={class:"pl-36"};function ga(e,t,a,l,p,$){const o=He("truncate");return s(),f("div",ua,[n("div",ca,[h(" step number "),e.done()?(s(),f(K,{key:1},[h(" show checkmark if done "),pa],2112)):(s(),f("div",{key:0,class:Fe(["w-24 h-24 bg-gray-400 rounded-full flex justify-center items-center text-white text-xs font-semibold",{"bg-blue-500":e.active}])},g(e.index+1),3)),n("div",da,[h(" step title "),n("div",fa,g(e.title),1),h(" step summary "),pe((s(),f("div",ha,[x(g(e.summary),1)])),[[Se,!e.active()],[o]])])]),z(Ge,{name:"step",mode:"out-in"},{default:T(()=>[pe(n("div",va,[h(" step content "),R(e.$slots,"default",{},void 0,!0)],512),[[Se,e.active()]])]),_:3})])}var ma=H(la,[["render",ga],["__scopeId","data-v-37be0d4a"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/wizard/stepper-item.vue"]]);const ba=q({name:"WizardStepperV",props:{activeStep:{type:Number,default:0}},data(){return{watchers:[]}},setup(e){const t=Te({activeIndex:e.activeStep,numSteps:0});return We("stepper",t),{stepper:t}},created(){this.watchers.push(this.$watch("activeStep",()=>{this.stepper.activeIndex=this.activeStep}))},beforeUnmount(){this.watchers.forEach(e=>e())}}),ya={class:"py-12"};function wa(e,t,a,l,p,$){return s(),f("div",ya,[R(e.$slots,"default")])}var $a=H(ba,[["render",wa],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/wizard/stepper.vue"]]);const ka=q({name:"WizardScreenV",props:{panel:_e},components:{"wizard-form-footer":Ct,"wizard-input":ia,"stepper-item":ma,stepper:$a,ColorPicker:bt},data(){return{layerSource:this.get(E.layerSource),step:this.get(E.step),colour:M(),colourPickerId:M(),goToStep:this.call(E.goToStep),formulateFile:{},formatError:!1,failureError:!1,goNext:!1,finishStep:!1,serviceTypeOptions:[{value:k.FEATURE,label:this.$t("wizard.layerType.esriFeature")},{value:k.MAPIMAGE,label:this.$t("wizard.layerType.esriMapImage")},{value:k.TILE,label:this.$t("wizard.layerType.esriTile")},{value:k.IMAGERY,label:this.$t("wizard.layerType.esriImagery")},{value:k.WMS,label:this.$t("wizard.layerType.ogcWms")},{value:k.WFS,label:this.$t("wizard.layerType.ogcWfs")}],fileTypeOptions:[{value:k.GEOJSON,label:this.$t("wizard.fileType.geojson")},{value:k.SHAPEFILE,label:this.$t("wizard.fileType.shapefile")},{value:k.CSV,label:this.$t("wizard.fileType.csv")}]}},computed:{url:{get(){return this.$store.get(E.url)},set(e){this.$store.set(E.url,e)}},fileData:{get(){return this.$store.get(E.fileData)},set(e){this.$store.set(E.fileData,e)}},typeSelection:{get(){return this.$store.get(E.typeSelection)},set(e){this.$store.set(E.typeSelection,e)}},layerInfo:{get(){return this.$store.get(E.layerInfo)},set(e){this.$store.set(E.layerInfo,e)}},IsCorsRequired(){let e=this.$iApi.geo.proxy!=="";switch(this.typeSelection){case k.FEATURE:case k.MAPIMAGE:case k.TILE:case k.IMAGERY:return!e;case k.WFS:return!0;case k.WMS:return!e;case k.GEOJSON:case k.SHAPEFILE:case k.CSV:return!!(this.isFileLayer()&&!this.fileData);default:return!1}}},errorCaptured(e,t,a){return(this.step===y.FORMAT||this.step===y.CONFIGURE)&&(this.formatError=!0,this.goToStep(y.FORMAT)),!1},mounted(){this.step===y.CONFIGURE&&(this.layerInfo.configOptions.includes("colour")&&this.generateColour(),this.finishStep=!this.layerInfo.configOptions.includes("sublayers")&&this.layerInfo.config.name)},methods:{async uploadFile(e,t){const a=new FileReader;a.onerror=()=>{this.formulateFile={}},a.onload=l=>{this.fileData=a.result,this.url=e.name,this.onUploadContinue(l)},a.readAsArrayBuffer(e)},onUploadContinue(e){e?.preventDefault(),this.fileData&&setTimeout(()=>{this.formulateFile={}},500),this.typeSelection=this.layerSource.guessFormatFromURL(this.url),this.goToStep(y.FORMAT)},async onSelectContinue(){this.failureError=!1;try{this.layerInfo=this.isFileLayer()?await this.layerSource.fetchFileInfo(this.url,this.typeSelection,this.fileData):await this.layerSource.fetchServiceInfo(this.url,this.typeSelection)}catch{this.failureError=!0;return}const e=this.typeSelection===k.FEATURE&&!(this.layerInfo&&this.layerInfo.fields);if(!this.layerInfo||e){this.formatError=!0,this.layerInfo={config:null,configOptions:[]};return}this.generateColour(),this.goToStep(y.CONFIGURE),this.layerInfo.configOptions.includes("sublayers")?this.finishStep=!1:this.finishStep=!0},async onConfigureContinue(e){const t=Object.assign(this.layerInfo.config,e),a=this.$iApi.geo.layer.createLayer(t);this.$iApi.geo.map.addLayer(a),a.userAdded=!0,this.$iApi.event.emit(Ye.USER_LAYER_ADDED,a),this.goNext=!1,this.goToStep(y.UPLOAD)},fieldOptions(){return this.layerInfo.fields.map(e=>({value:e.name,label:e.alias||e.name}))},latLonOptions(e){},sublayerOptions(){return this.layerInfo.layers.map((e,t)=>({label:`${e.indent}${e.name}`,value:this.typeSelection===k.MAPIMAGE?{index:e.id,state:{opacity:1,visibility:!0}}:{id:e.id},id:`${e.indent}${e.name}-${t}`}))},isFileLayer(){return this.fileData||this.url.match(/\.(zip|csv|json|geojson)$/)},setError(e,t,a){this.$formulate.handle({inputErrors:{[t]:[a]},formErrors:[]},e)},updateFile(e){this.formulateFile=e,this.uploadFile(e),this.url=""},updateUrl(e,t){this.url=e.trim(),t?this.goNext=!0:this.goNext=!1},updateTypeSelection(e){this.typeSelection=e,this.formatError=!1},updateLayerName(e){this.layerInfo.config.name=e;const t=this.layerInfo.config.sublayers;(t?e&&t.length>0:e)?this.finishStep=!0:this.finishStep=!1},updateSublayers(e){this.layerInfo.config.sublayers=e,e.length>0&&this.layerInfo.config.name?this.finishStep=!0:this.finishStep=!1},generateColour(){this.colour=this.layerInfo.config.colour??"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0");do this.colourPickerId=Math.random().toString(36).substring(2,9);while(document.getElementById(this.colourPickerId+"-hue-slider")!==null)},updateColour(e){this.layerInfo.config.colour=e.colors.hex.substring(0,7),this.$el.querySelector(".vacp-copy-button").style.backgroundColor=this.layerInfo.config.colour}}}),ve=e=>(fe("data-v-c9548632"),e=e(),he(),e),Sa=ve(()=>n("span",{class:"block text-center mb-10"},"or",-1)),Ea={key:0,class:"inline-flex items-center mb-10"},Ia=ve(()=>n("svg",{class:"inline-block fill-current w-16 h-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[n("path",{d:"M0 0h24v24H0z",fill:"none"}),n("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})],-1)),za={class:"px-5 text-xs"},Ca=["for"],Ta={key:6,class:"text-base font-bold"},Fa={class:"sr-only"},Oa={class:"sr-only"},Aa=ve(()=>n("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 15 15"},[n("path",{d:"M5 0v2H1v13h12v-3h-1v2H2V5h10v3h1V2H9V0zm1 1h2v2h3v1H3V3h3z",fill:"currentColor"}),n("path",{d:"M10 7v2h5v2h-5v2l-3-3zM3 6h5v1H3zm0 2h3v1H3zm0 2h3v1H3zm0 2h5v1H3z",fill:"currentColor"})],-1));function Ma(e,t,a,l,p,$){const o=U("wizard-input"),v=U("wizard-form-footer"),u=U("stepper-item"),J=U("ColorPicker"),X=U("stepper"),Z=U("panel-screen");return s(),O(Z,{panel:e.panel},{header:T(()=>[x(g(e.$t("wizard.title")),1)]),content:T(()=>[z(X,{activeStep:e.step},{default:T(()=>[h(" Upload data wizard step "),z(u,{title:e.$t("wizard.upload.title"),summary:e.url},{default:T(()=>[n("form",{name:"upload",onSubmit:t[2]||(t[2]=(...m)=>e.onUploadContinue&&e.onUploadContinue(...m))},[h(" Upload a file "),z(o,{type:"file",name:"file",label:e.$t("wizard.upload.file.label"),help:e.$t("wizard.upload.file.help"),onUpload:e.updateFile},null,8,["label","help","onUpload"]),Sa,h(" Provide layer URL "),z(o,{type:"url",name:"url",modelValue:e.url,"onUpdate:modelValue":t[0]||(t[0]=m=>e.url=m),label:e.$t("wizard.upload.url.label"),onLink:e.updateUrl,validation:!0,"validation-messages":{required:e.$t("wizard.upload.url.error.required"),invalid:e.$t("wizard.upload.url.error.url")}},null,8,["modelValue","label","onLink","validation-messages"]),z(v,{onSubmit:e.onUploadContinue,onCancel:t[1]||(t[1]=()=>{e.goNext=!1,e.goToStep(0)}),disabled:!e.goNext},null,8,["onSubmit","disabled"])],32)]),_:1},8,["title","summary"]),h(" Select format wizard step "),z(u,{title:e.$t("wizard.format.title"),summary:e.typeSelection},{default:T(()=>[n("form",{name:"format",onSubmit:t[6]||(t[6]=(...m)=>e.onSelectContinue&&e.onSelectContinue(...m))},[h(" List of file/service types based on layer "),h(" Display CORS required warning if needed for this configuration "),e.IsCorsRequired?(s(),f("div",Ea,[Ia,n("span",za,g(e.$t("wizard.format.info.cors")),1)])):h("v-if",!0),z(o,{type:"select",name:"type",modelValue:e.typeSelection,"onUpdate:modelValue":t[3]||(t[3]=m=>e.typeSelection=m),onSelect:e.updateTypeSelection,size:e.isFileLayer()?e.fileTypeOptions.length:e.serviceTypeOptions.length,label:e.isFileLayer()?e.$t("wizard.format.type.file"):e.$t("wizard.format.type.service"),options:e.isFileLayer()?e.fileTypeOptions:e.serviceTypeOptions,formatError:e.formatError,failureError:e.failureError,validation:!0,"validation-messages":{required:e.$t("wizard.format.type.error.required"),invalid:e.$t("wizard.format.type.error.invalid"),failure:`${e.$t("wizard.format.type.error.failure")}.${e.IsCorsRequired?" "+e.$t("wizard.format.warn.cors")+".":""}`},onKeydown:t[4]||(t[4]=Ee(()=>{},["stop"]))},null,8,["modelValue","onSelect","size","label","options","formatError","failureError","validation-messages"]),z(v,{onSubmit:e.onSelectContinue,onCancel:t[5]||(t[5]=()=>{e.formatError=!1,e.failureError=!1,e.url?e.goNext=!0:e.goNext=!1,e.goToStep(0)}),disabled:!1},null,8,["onSubmit"])],32)]),_:1},8,["title","summary"]),h(" Configure layer wizard step "),z(u,{title:e.$t("wizard.configure.title")},{default:T(()=>[n("form",{name:"configure",onSubmit:t[15]||(t[15]=(...m)=>e.onConfigureContinue&&e.onConfigureContinue(...m))},[e.layerInfo.configOptions.includes("name")?(s(),O(o,{key:0,type:"text",name:"name",modelValue:e.layerInfo.config.name,"onUpdate:modelValue":t[7]||(t[7]=m=>e.layerInfo.config.name=m),onText:e.updateLayerName,label:e.$t("wizard.configure.name.label"),validation:!0,"validation-messages":{required:e.$t("wizard.configure.name.error.required")}},null,8,["modelValue","onText","label","validation-messages"])):h("v-if",!0),e.layerInfo.configOptions.includes("nameField")?(s(),O(o,{key:1,type:"select",name:"nameField",modelValue:e.layerInfo.config.nameField,"onUpdate:modelValue":t[8]||(t[8]=m=>e.layerInfo.config.nameField=m),label:e.$t("wizard.configure.nameField.label"),defaultOption:!0,options:e.fieldOptions()},null,8,["modelValue","label","options"])):h("v-if",!0),e.layerInfo.configOptions.includes("tooltipField")?(s(),O(o,{key:2,type:"select",name:"tooltipField",modelValue:e.layerInfo.config.tooltipField,"onUpdate:modelValue":t[9]||(t[9]=m=>e.layerInfo.config.tooltipField=m),label:e.$t("wizard.configure.tooltipField.label"),options:e.fieldOptions()},null,8,["modelValue","label","options"])):h("v-if",!0),e.layerInfo.configOptions.includes("latField")?(s(),O(o,{key:3,type:"select",name:"latField",modelValue:e.layerInfo.config.latField,"onUpdate:modelValue":t[10]||(t[10]=m=>e.layerInfo.config.latField=m),defaultOption:!0,label:e.$t("wizard.configure.latField.label"),options:e.fieldOptions()},null,8,["modelValue","label","options"])):h("v-if",!0),e.layerInfo.configOptions.includes("longField")?(s(),O(o,{key:4,type:"select",name:"longField",modelValue:e.layerInfo.config.longField,"onUpdate:modelValue":t[11]||(t[11]=m=>e.layerInfo.config.longField=m),defaultOption:!0,label:e.$t("wizard.configure.longField.label"),options:e.fieldOptions()},null,8,["modelValue","label","options"])):h("v-if",!0),h(" For map image layers "),e.layerInfo.configOptions.includes("sublayers")?(s(),O(o,{key:5,type:"select",name:"sublayers",modelValue:e.layerInfo.config.sublayers,"onUpdate:modelValue":t[12]||(t[12]=m=>e.layerInfo.config.sublayers=m),onSelect:e.updateSublayers,label:e.$t("wizard.configure.sublayers.label"),help:e.$t("wizard.configure.sublayers.help"),options:e.sublayerOptions(),multiple:!0,validation:!0,"validation-messages":{required:e.$t("wizard.configure.sublayers.error.required")},onKeydown:t[13]||(t[13]=Ee(()=>{},["stop"]))},null,8,["modelValue","onSelect","label","help","options","validation-messages"])):h("v-if",!0),n("label",{class:"sr-only",for:`${e.colourPickerId}-color-hex`},g(e.$t("wizard.configure.colour.hex")),9,Ca),e.layerInfo.configOptions.includes("colour")?(s(),f("label",Ta,g(e.$t("wizard.configure.colour.label")),1)):h("v-if",!0),e.layerInfo.configOptions.includes("colour")?(s(),O(J,{key:7,"alpha-channel":"hide","visible-formats":["hex"],"default-format":"hex",id:e.colourPickerId,color:e.colour,onColorChange:e.updateColour},{"hue-range-input-label":T(()=>[n("span",Fa,g(e.$t("wizard.configure.colour.hue")),1)]),"copy-button":T(()=>[n("span",Oa,g(e.$t("wizard.configure.colour.copy")),1),Aa]),_:1},8,["id","color","onColorChange"])):h("v-if",!0),z(v,{onSubmit:e.onConfigureContinue,onCancel:t[14]||(t[14]=m=>e.goToStep(1)),disabled:!e.finishStep},null,8,["onSubmit","disabled"])],32)]),_:1},8,["title"])]),_:1},8,["activeStep"])]),_:1},8,["panel"])}var La=H(ka,[["render",Ma],["__scopeId","data-v-c9548632"],["__file","/home/runner/work/ramp4-pcar4/ramp4-pcar4/src/fixtures/wizard/screen.vue"]]),Va=Object.freeze(Object.defineProperty({__proto__:null,default:La},Symbol.toStringTag,{value:"Module"}));export{La as W,Va as s,Na as w};
