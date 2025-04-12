import{dM as M,fL as k,dN as _,e2 as I,dQ as R,dR as j,dS as E,dU as v,dY as p,dX as e,dT as n,fM as d,e0 as t,ec as m,dW as o,d$ as c,dE as w,fN as T}from"./main-Dv0FawL-.js";const A={class:"relative legend-header flex align-middle"},B=["content","aria-label"],G=["content","aria-label"],H=M({__name:"header",setup(P){const x=k(),{t:l}=_(),s=I("iApi"),r=R(()=>s.fixture.get("legend")),b=()=>{s.event.emit(w.WIZARD_TOGGLE)},y=()=>{try{return s.fixture.exists("wizard")}catch{return!1}},z=()=>{s.event.emit(w.REORDER_TOGGLE)},C=()=>{try{return s.fixture.exists("layer-reorder")}catch{return!1}},i=u=>x.headerControls.includes(u);return(u,a)=>{const f=j("dropdown-menu"),g=E("tippy");return v(),p("div",A,[e("div",null,[n((v(),p("button",{type:"button",onClick:b,class:"relative mr-auto text-gray-500 hover:text-black",content:t(l)("legend.header.addlayer"),"aria-label":t(l)("legend.header.addlayer")},a[4]||(a[4]=[e("div",{class:"p-8"},[e("svg",{class:"fill-current w-18 h-18 flip",viewBox:"0 0 24 24"},[e("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})])],-1)]),8,B)),[[d,y()&&i("wizard")],[g,{placement:"right"}]])]),e("div",null,[n((v(),p("button",{type:"button",onClick:z,class:"relative mr-auto text-gray-500 hover:text-black flex justify-center items-center",content:t(l)("legend.header.reorderlayers"),"aria-label":t(l)("legend.header.reorderlayers")},a[5]||(a[5]=[e("div",{class:"p-8"},[e("svg",{class:"fill-current w-18 h-18 flip",viewBox:"0 0 24 24"},[e("path",{d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"})])],-1)]),8,G)),[[d,C()&&i("layerReorder")],[g,{placement:"right"}]])]),a[8]||(a[8]=e("span",{class:"flex-1"},null,-1)),n(m(f,{class:"relative",position:"left-start",tooltip:t(l)("legend.header.groups"),tooltipPlacement:"left-start",tooltipPlacementAlt:"bottom-end"},{header:o(()=>a[6]||(a[6]=[e("div",{class:"p-8"},[e("svg",{class:"fill-current w-18 h-18",viewBox:"0 0 24 24"},[e("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})])],-1)])),default:o(()=>[e("a",{href:"javascript:;",class:"flex leading-snug items-center overflow-hidden whitespace-nowrap",onClick:a[0]||(a[0]=h=>r.value.expandItems(!0))},c(t(l)("legend.header.groups.expand")),1),e("a",{href:"javascript:;",class:"flex leading-snug items-center overflow-hidden whitespace-nowrap",onClick:a[1]||(a[1]=h=>r.value.expandItems(!1))},c(t(l)("legend.header.groups.collapse")),1)]),_:1},8,["tooltip"]),[[d,i("groupToggle")]]),n(m(f,{class:"relative",position:"left-start",tooltip:t(l)("legend.header.visible"),tooltipPlacement:"left-start",tooltipPlacementAlt:"bottom-end"},{header:o(()=>a[7]||(a[7]=[e("div",{class:"flex p-8"},[e("svg",{class:"fill-current w-18 h-18",viewBox:"0 0 24 24"},[e("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"})])],-1)])),default:o(()=>[e("a",{href:"javascript:;",class:"flex leading-snug items-center overflow-hidden whitespace-nowrap",onClick:a[2]||(a[2]=h=>r.value.showItems(!0))},c(t(l)("legend.header.visible.show")),1),e("a",{href:"javascript:;",class:"flex leading-snug items-center overflow-hidden whitespace-nowrap",onClick:a[3]||(a[3]=h=>r.value.showItems(!1))},c(t(l)("legend.header.visible.hide")),1)]),_:1},8,["tooltip"]),[[d,i("visibilityToggle")]])])}}}),L=T(H,[["__scopeId","data-v-e8031c30"]]);export{L as default};
