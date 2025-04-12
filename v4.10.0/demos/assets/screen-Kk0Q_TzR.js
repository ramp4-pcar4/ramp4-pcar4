import{fL as M,fM as E,fR as H,fT as u,fX as x,fW as s,fS as _,f$ as i,f_ as $,fZ as I,h7 as N,fV as b,jQ as z,kQ as A,ga as T,jR as D,g1 as Q,kh as U,fP as q,g2 as v,g5 as K,g6 as F,g8 as P,fQ as W,fU as L,g9 as X,kR as Y,kS as Z,kd as G,kc as J,fY as ee,g0 as te,kv as ne}from"./main-CzbArNue.js";import{m as y}from"./marked.esm-DmSrlTiT.js";import"./preload-helper-ExcqyqRp.js";const oe={key:0},ae=["content"],se={class:"text-lg text-left flex-grow"},le=["innerHTML"],re=M({__name:"section",props:{helpSection:{type:Object,required:!0}},setup(r){const{t:w}=E();return(k,l)=>{const f=H("tippy");return r.helpSection.drawn?(u(),x("div",oe,[s("div",null,[_((u(),x("button",{type:"button",class:"help-section-header flex items-center py-15 px-25 hover:bg-gray-200 cursor-pointer select-none w-full",onClick:l[0]||(l[0]=p=>k.$emit("expand")),content:i(w)(r.helpSection.expanded?"help.section.collapse":"help.section.expand")},[s("span",se,$(r.helpSection.header),1),s("div",{class:I(["dropdown-icon",{"transform -rotate-180":r.helpSection.expanded}])},l[1]||(l[1]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[s("path",{d:"M0 0h24v24H0V0z",fill:"none"}),s("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})],-1)]),2)],8,ae)),[[f,{placement:"top-end",hideOnClick:!1}]]),N(A,{name:"help-item",mode:"out-in"},{default:b(()=>[_(s("div",{innerHTML:r.helpSection.info,class:"ramp-markdown section-body px-20 pt-5 ml-10 overflow-hidden"},null,8,le),[[z,r.helpSection.expanded]])]),_:1})])])):T("",!0)}}}),ie=D(re,[["__scopeId","data-v-ef03eec9"]]),pe={class:"h-26 mb-8 mx-8"},de=["placeholder","aria-label"],ce={key:0},me=M({__name:"screen",props:{panel:{type:Object,required:!0}},setup(r){const w=Q("iApi"),k=U(),{t:l}=E(),f=q(()=>k.location),p=v([]),S=v([]),C=v([]),R=v(!1);let h,m;function j(e,o){const t=o.info.split(/(<[^>]*>)/);for(const[n,a]of t.entries())if(n%2===0&&a.toLowerCase().indexOf(e.toLowerCase())>-1)return!0;return!1}function B(e,o){const n=S.value[o].split(/(<[^>]*>)/);let a="";for(const[g,d]of n.entries())g%2===0?a+=d.replace(new RegExp(e,"gi"),c=>`<mark>${c}</mark>`):a+=d;p.value[o].info=a}function V(e,o){h=0,o.forEach((t,n)=>{t.info=S.value[n],t.drawn=j(e,t)||t.header.toLowerCase().indexOf(e.toLowerCase())>-1,h=t.drawn?h+1:h,t.expanded=t.drawn&&e.length>2,t.drawn&&e.length>2&&B(e,n)}),R.value=h===0}function O(e){e.expanded=!e.expanded}return K(()=>{C.value.push(F(()=>w.language,(e,o)=>{if(e===o)return;const t=new y.Renderer,n=f.value.slice(-1)==="/"?f.value:`${f.value}/`;t.image=(a,g,d)=>(a.indexOf("http")===-1&&(a=`${n}images/`+a),`<img src="${a}" alt="${d}">`),ne.get(`${n}${e}.md`).then(a=>{const g=/^#\s(.*)\n{2}(?:.+|\n(?!\n{2,}))*/gm;let d=a.data.replace(new RegExp("\r","g"),"");p.value=[];let c;for(;c=g.exec(d);)p.value.push({header:c[1],info:y(c[0].split(`
`).splice(2).join(`
`),{renderer:t}),drawn:!0,expanded:!1}),S.value.push(y(c[0].split(`
`).splice(2).join(`
`),{renderer:t}))})},{immediate:!0}))}),P(()=>{C.value.forEach(e=>e())}),(e,o)=>{const t=W("panel-screen");return u(),L(t,{panel:r.panel},{header:b(()=>[X($(i(l)("help.title")),1)]),content:b(()=>[s("div",pe,[_(s("input",{type:"search",class:"rv-help-search-bar border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0",placeholder:i(l)("help.search"),"onUpdate:modelValue":o[0]||(o[0]=n=>Z(m)?m.value=n:m=n),"aria-label":i(l)("help.search"),onInput:o[1]||(o[1]=n=>V(i(m),p.value)),onKeypress:o[2]||(o[2]=G(J(()=>{},["prevent"]),["enter"])),enterkeyhint:"done"},null,40,de),[[Y,i(m)]])]),R.value?(u(),x("div",ce,[s("p",null,$(i(l)("help.noResults")),1)])):T("",!0),(u(!0),x(te,null,ee(p.value,(n,a)=>(u(),L(ie,{helpSection:n,key:a,onExpand:g=>O(n)},null,8,["helpSection","onExpand"]))),128))]),_:1},8,["panel"])}}});export{me as default};
