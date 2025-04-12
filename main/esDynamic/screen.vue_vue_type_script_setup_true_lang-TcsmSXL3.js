import{ek as C,el as _,em as O,en as z,eo as f,ep as E,eq as j,er as B,es as p,et as S,eu as d,ev as e,ew as k,ex as R,ey as L,ez as h,eA as s,eB as A,eC as F,eD as g,eE as H,eF as V,eG as D,eH as G,eI as I,eJ as J,eK as K,eL as P}from"./main-C3PVbFgd.js";const W=["onClick","aria-label"],N={class:"md-icon-small inline"},Q=C({__name:"settings-button",props:{componentSelectedState:{type:Object,required:!0}},setup(m){const{t:x}=_(),n=O(),u=z(),w=f(()=>n.mobileView?"top-end":"left-end"),t=r=>{r.selectable&&u.toggleSelected({name:r.name})};return(r,o)=>{const b=E("dropdown-menu"),i=j("focus-item");return B((p(),S(b,{position:w.value,tooltip:s(x)("export.menu"),tooltipPlacement:"top"},{header:d(()=>o[0]||(o[0]=[e("div",{class:"flex items-center text-gray-400 w-full h-full hover:text-black p-4 sm:p-8"},[e("svg",{class:"fill-current w-24 h-24 m-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("g",null,[e("path",{d:"M0,0h24v24H0V0z",fill:"none"}),e("path",{d:"M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"})])])],-1)])),default:d(()=>[(p(!0),k(A,null,R(m.componentSelectedState,l=>(p(),k("a",{key:l.name,onClick:y=>t(l),href:"javascript:;",class:L(`text-left text-sm sm:text-base ${l.selectable?"cursor-pointer":"cursor-default"}`),"aria-label":l.name},[e("div",N,[(p(),k("svg",{height:"20",width:"20",viewBox:"0 0 24 24",class:L(`inline mx-8 ${l.selected?"":"invisible"}`)},o[1]||(o[1]=[e("g",null,[e("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})],-1)]),2)),e("span",{class:L(`inline ${l.selectable?"":"text-gray-300"}
                    `)},h(s(x)(`export.menu.component.${l.name}`)),3)])],10,W))),128))]),_:1},8,["position","tooltip"])),[[i]])}}}),T={class:"overflow-hidden border border-gray-200",ref:"componentEl"},U={class:"flex"},X=["aria-label"],Y=["aria-label"],Z=C({__name:"screen",props:{panel:{type:Object,required:!0}},setup(m){const x=m,{t:n}=_(),u=F("iApi"),w=z(),t=g(),r=g(void 0),o=g(void 0),b=g([]),i=H("componentEl"),l=f(()=>w.componentSelectedState),y=f(()=>{const c={};return t.value&&Object.keys(l.value).forEach(a=>{c[a]={name:a,selected:l.value[a]??!1,selectable:(t.value?.config)[a]?.selectable??!0}}),c}),M=f(()=>!!t.value?.customRendererFunc),v=V(300,()=>{if(!t.value||!i.value)return;const c=i.value.querySelector(".export-canvas");t.value.make(c,i.value.clientWidth)});return D(()=>{x.panel.exportMake=v,b.value.push(G(y,()=>{v()}))}),I(()=>{t.value=u.fixture.get("export"),r.value=new ResizeObserver(v),o.value=new ResizeObserver(v),r.value.observe(u.$rootEl),o.value.observe(u.$rootEl.querySelector('[data-cy="export"]'))}),J(()=>{r.value.disconnect(),o.value.disconnect(),b.value.forEach(c=>c())}),(c,a)=>{const $=E("panel-screen");return p(),S($,{panel:m.panel,footer:!0},{header:d(()=>[K(h(s(n)("export.title")),1)]),content:d(()=>[e("div",T,a[2]||(a[2]=[e("canvas",{class:"export-canvas !w-[100%]"},null,-1)]),512)]),footer:d(()=>[e("div",U,[e("button",{type:"button",onClick:a[0]||(a[0]=q=>t.value?.export()),class:"bg-green-700 hover:bg-green-800 text-white font-bold py-8 px-4 sm:px-16 mr-8 sm:mr-16","aria-label":s(n)("export.download")},h(s(n)("export.download")),9,X),e("button",{type:"button",onClick:a[1]||(a[1]=q=>s(v)()),class:"py-8 px-4 sm:px-16","aria-label":s(n)("export.refresh")},h(s(n)("export.refresh")),9,Y),M.value?P("",!0):(p(),S(Q,{key:0,componentSelectedState:y.value,class:"ml-auto flex px-4 sm:px-8"},null,8,["componentSelectedState"]))])]),_:1},8,["panel"])}}});export{Z as _};
