import{fI as j,fJ as C,fO as T,fQ as c,fU as g,fT as s,fP as y,fY as p,fX as S,fW as V,h4 as q,fS as O,jN as z,kN as P,g7 as E,jO as U,f_ as A,ke as B,fM as J,f$ as w,g2 as K,g3 as Q,g5 as W,fN as X,fR as M,g6 as Y,kO as Z,kP as D,kc as F,kb as G,fV as ee,fZ as ne,ks as ae}from"./main-DCIX61zy.js";import{m as _}from"./marked.esm-DgqJBp_S.js";const te={key:0},le=["content"],se={class:"text-lg text-left flex-grow"},oe=["innerHTML"],re=j({__name:"section",props:{helpSection:{type:Object,required:!0}},setup(r){const{t:x}=C();return(k,o)=>{const u=T("tippy");return r.helpSection.drawn?(c(),g("div",te,[s("div",null,[y((c(),g("button",{type:"button",class:"help-section-header flex items-center py-15 px-25 hover:bg-gray-200 cursor-pointer select-none w-full",onClick:o[0]||(o[0]=i=>k.$emit("expand")),content:p(x)(r.helpSection.expanded?"help.section.collapse":"help.section.expand")},[s("span",se,S(r.helpSection.header),1),s("div",{class:V(["dropdown-icon",{"transform -rotate-180":r.helpSection.expanded}])},o[1]||(o[1]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},[s("path",{d:"M0 0h24v24H0V0z",fill:"none"}),s("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})],-1)]),2)],8,le)),[[u,{placement:"top-end",hideOnClick:!1}]]),q(P,{name:"help-item",mode:"out-in"},{default:O(()=>[y(s("div",{innerHTML:r.helpSection.info,class:"ramp-markdown section-body px-20 pt-5 ml-10 overflow-hidden"},null,8,oe),[[z,r.helpSection.expanded]])]),_:1})])])):E("",!0)}}}),pe=U(re,[["__scopeId","data-v-7dc61532"]]),ie={class:"h-26 mb-8 mx-8"},de=["placeholder","aria-label"],ce={key:0},ue=j({__name:"screen",props:{panel:{type:Object,required:!0}},setup(r){const x=A("iApi"),k=B(),{t:o}=C(),u=J(()=>k.location),i=w([]),b=w([]),$=w([]),L=w(!1);let f,h;function R(e,t){const n=t.info.split(/(<[^>]*>)/);for(const[a,l]of n.entries())if(a%2===0&&l.toLowerCase().indexOf(e.toLowerCase())>-1)return!0;return!1}function H(e,t){const n=b.value[t].split(/(<[^>]*>)/);let a="";for(const[l,d]of n.entries())l%2===0?a+=d.replace(new RegExp(e,"gi"),m=>`<mark>${m}</mark>`):a+=d;i.value[t].info=a}function I(e,t){f=0,t.forEach((n,a)=>{n.info=b.value[a],n.drawn=R(e,n)||n.header.toLowerCase().indexOf(e.toLowerCase())>-1,f=n.drawn?f+1:f,n.expanded=n.drawn&&e.length>2,n.drawn&&e.length>2&&H(e,a)}),L.value=f===0}function N(e){e.expanded=!e.expanded}return K(()=>{$.value.push(Q(()=>x.language,(e,t)=>{if(e===t)return;const n=new _.Renderer,a=u.value.slice(-1)==="/"?u.value:`${u.value}/`;n.image=(l,d,m)=>(l.indexOf("http")===-1&&(l=`${a}images/`+l),`<img src="${l}" alt="${m}">`),ae.get(`${a}${e}.md`).then(l=>{const d=/^#\s(.*)\n{2}(?:.+|\n(?!\n{2,}))*/gm;let m=l.data.replace(new RegExp("\r","g"),"");i.value=[];let v;for(;v=d.exec(m);)i.value.push({header:v[1],info:_(v[0].split(`
`).splice(2).join(`
`),{renderer:n}),drawn:!0,expanded:!1}),b.value.push(_(v[0].split(`
`).splice(2).join(`
`),{renderer:n}))})},{immediate:!0}))}),W(()=>{$.value.forEach(e=>e())}),(e,t)=>{const n=X("panel-screen");return c(),M(n,{panel:r.panel},{header:O(()=>[Y(S(p(o)("help.title")),1)]),content:O(()=>[s("div",ie,[y(s("input",{type:"search",class:"rv-help-search-bar border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0",placeholder:p(o)("help.search"),"onUpdate:modelValue":t[0]||(t[0]=a=>D(h)?h.value=a:h=a),"aria-label":p(o)("help.search"),onInput:t[1]||(t[1]=a=>I(p(h),i.value)),onKeypress:t[2]||(t[2]=F(G(()=>{},["prevent"]),["enter"])),enterkeyhint:"done"},null,40,de),[[Z,p(h)]])]),L.value?(c(),g("div",ce,[s("p",null,S(p(o)("help.noResults")),1)])):E("",!0),(c(!0),g(ne,null,ee(i.value,(a,l)=>(c(),M(pe,{helpSection:a,key:l,onExpand:d=>N(a)},null,8,["helpSection","onExpand"]))),128))]),_:1},8,["panel"])}}});export{ue as default};
