import{fL as k,fM as $,fN as O,fO as L,fP as g,fQ as z,fR as R,fS as V,fT as i,fU as C,fV as v,fW as e,fX as S,fY as j,fZ as y,f_ as h,f$ as n,g0 as q,g1 as N,g2 as b,g3 as P,g4 as D,g5 as T,g6 as A,g7 as F,g8 as U,g9 as W,ga as H}from"./main-CzbArNue.js";const I=["onClick","aria-label"],Q={class:"md-icon-small inline"},X=k({__name:"settings-button",props:{componentSelectedState:{type:Object,required:!0}},setup(f){const{t:m}=$(),a=O(),u=L(),_=g(()=>a.mobileView?"top-end":"left-end"),o=r=>{r.selectable&&u.toggleSelected({name:r.name})};return(r,l)=>{const x=z("dropdown-menu"),p=R("focus-item");return V((i(),C(x,{position:_.value,tooltip:n(m)("export.menu"),tooltipPlacement:"top"},{header:v(()=>l[0]||(l[0]=[e("div",{class:"flex items-center text-gray-400 w-full h-full hover:text-black p-4 sm:p-8"},[e("svg",{class:"fill-current w-24 h-24 m-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("g",null,[e("path",{d:"M0,0h24v24H0V0z",fill:"none"}),e("path",{d:"M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"})])])],-1)])),default:v(()=>[(i(!0),S(q,null,j(f.componentSelectedState,s=>(i(),S("a",{key:s.name,onClick:w=>o(s),href:"javascript:;",class:y(`text-left text-sm sm:text-base ${s.selectable?"cursor-pointer":"cursor-default"}`),"aria-label":s.name},[e("div",Q,[(i(),S("svg",{height:"20",width:"20",viewBox:"0 0 24 24",class:y(`inline mx-8 ${s.selected?"":"invisible"}`)},l[1]||(l[1]=[e("g",null,[e("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})],-1)]),2)),e("span",{class:y(`inline ${s.selectable?"":"text-gray-300"}
                    `)},h(n(m)(`export.menu.component.${s.name}`)),3)])],10,I))),128))]),_:1},8,["position","tooltip"])),[[p]])}}}),Y={class:"overflow-hidden border border-gray-200",ref:"componentEl"},Z={class:"flex"},G=["aria-label"],J=["aria-label"],ee=k({__name:"screen",props:{panel:{type:Object,required:!0}},setup(f){const m=f,{t:a}=$(),u=N("iApi"),_=L(),o=b(),r=b(void 0),l=b(void 0),x=b([]),p=P("componentEl"),s=g(()=>_.componentSelectedState),w=g(()=>{let c={};return o.value&&Object.keys(s.value).forEach(t=>{c[t]={name:t,selected:s.value[t]??!1,selectable:(o.value?.config)[t]?.selectable??!0}}),c}),E=g(()=>!!o.value?.customRendererFunc),d=D(300,()=>{if(!o.value||!p.value)return;const c=p.value.querySelector(".export-canvas");o.value.make(c,p.value.clientWidth)});return T(()=>{m.panel.exportMake=d,x.value.push(A(w,()=>{d()}))}),F(()=>{o.value=u.fixture.get("export"),r.value=new ResizeObserver(d),l.value=new ResizeObserver(d),r.value.observe(u.$rootEl),l.value.observe(u.$rootEl.querySelector('[data-cy="export"]'))}),U(()=>{r.value.disconnect(),l.value.disconnect(),x.value.forEach(c=>c())}),(c,t)=>{const B=z("panel-screen");return i(),C(B,{panel:f.panel,footer:!0},{header:v(()=>[W(h(n(a)("export.title")),1)]),content:v(()=>[e("div",Y,t[2]||(t[2]=[e("canvas",{class:"export-canvas !w-[100%]"},null,-1)]),512)]),footer:v(()=>[e("div",Z,[e("button",{type:"button",onClick:t[0]||(t[0]=M=>o.value?.export()),class:"bg-green-700 hover:bg-green-800 text-white font-bold py-8 px-4 sm:px-16 mr-8 sm:mr-16","aria-label":n(a)("export.download")},h(n(a)("export.download")),9,G),e("button",{type:"button",onClick:t[1]||(t[1]=M=>n(d)()),class:"py-8 px-4 sm:px-16","aria-label":n(a)("export.refresh")},h(n(a)("export.refresh")),9,J),E.value?H("",!0):(i(),C(X,{key:0,componentSelectedState:w.value,class:"ml-auto flex px-4 sm:px-8"},null,8,["componentSelectedState"]))])]),_:1},8,["panel"])}}});export{ee as _};
