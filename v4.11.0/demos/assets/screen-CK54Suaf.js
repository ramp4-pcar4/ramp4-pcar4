import{dM as $,dN as z,e2 as q,gh as M,e4 as V,e3 as T,dQ as A,e8 as N,e9 as j,dS as p,dU as a,dY as s,dT as h,e0 as L,dX as n,d_ as B,e1 as w,dZ as k,d$ as C,g7 as S,g8 as K,eb as D,fQ as Q,dR as R,dV as W,dW as I,ea as U,ef as F}from"./main-7nqzKo04.js";import"./preload-helper-ExcqyqRp.js";const H={class:"mb-10"},X=["aria-label"],Y={key:0,class:"w-full h-30 hidden"},Z=["alt","src"],G=["alt","src"],J=["alt"],P={class:"pl-5"},ee={class:"ml-auto pr-5"},te=["content"],ae={key:0,class:"rv-basemap-check absolute top-0 right-0"},se=$({__name:"item",props:{basemap:{type:Object,required:!0},tileSchema:{type:Object,required:!0}},setup(t){const{t:b}=z(),_=q("iApi"),i=M(),e=V("basemapInfo"),c=T(!1),m=A(()=>i.activeBasemapConfig),f=r=>{r.id!==m.value.id&&_?.geo.map.setBasemap(r.id)},y=r=>{r.key==="Tab"&&e.value?.matches(":focus")&&(c.value=!0,e.value._tippy.show())},o=()=>{c.value=!1,e.value._tippy.hide()},v=r=>{r.pointerType==="touch"&&(c.value=!c.value,c.value?e.value._tippy.show():e.value._tippy.hide())};return N(()=>{e.value?.addEventListener("mouseenter",()=>e.value._tippy.show()),e.value?.addEventListener("mouseleave",()=>e.value._tippy.hide()),e.value?.addEventListener("click",v),e.value?.addEventListener("keyup",y),e.value?.addEventListener("blur",o)}),j(()=>{e.value?.removeEventListener("mouseenter",()=>e.value._tippy.show()),e.value?.removeEventListener("mouseleave",()=>e.value._tippy.hide()),e.value?.removeEventListener("click",v),e.value?.removeEventListener("focus",()=>y),e.value?.removeEventListener("blur",()=>o)}),(r,l)=>{const x=p("truncate"),E=p("tippy"),d=p("focus-item");return a(),s("div",H,[h((a(),s("button",{class:"basemap-item-button bg-gray-300 w-full h-full",type:"button","aria-label":L(b)("basemap.select"),onClick:l[2]||(l[2]=u=>f(t.basemap))},[n("div",null,[n("div",{class:B(["flex hover:opacity-50 basemap-item-image basemap-item-container",t.basemap.hideThumbnail?"h-30":"h-180"])},[t.basemap.hideThumbnail?(a(),s("div",Y)):t.basemap.thumbnailUrl?(a(),s("img",{key:1,class:"w-full h-180",alt:t.basemap.altText,src:t.basemap.thumbnailUrl},null,8,Z)):t.tileSchema.thumbnailTileUrls&&t.tileSchema.thumbnailTileUrls.length>0&&t.basemap.layers.every(u=>u.layerType==="esri-tile")?(a(!0),s(w,{key:2},k(t.basemap.layers,u=>(a(),s("div",{key:u.id,class:"flex basemap-item-inner h-180"},[(a(!0),s(w,null,k(t.tileSchema.thumbnailTileUrls,(g,O)=>(a(),s("img",{class:"w-full",alt:t.basemap.altText,src:u.url+g,key:O},null,8,G))),128))]))),128)):(a(),s("img",{key:3,class:"w-full bg-white h-180",alt:t.basemap.altText,src:"https://openclipart.org/image/800px/275366"},null,8,J))],2)]),n("div",{class:B(["absolute flex w-full bg-black text-white h-30 bottom-6 items-center",t.basemap.hideThumbnail&&t.basemap.id===m.value.id?"opacity-85":"opacity-75"])},[h((a(),s("div",P,[n("span",null,C(t.basemap.name),1)])),[[x]]),n("div",ee,[h((a(),s("a",{onClick:l[0]||(l[0]=S(()=>{},["stop"])),onKeydown:l[1]||(l[1]=K(S(()=>{},["prevent"]),["enter","space"])),content:t.basemap.description,ref_key:"basemapInfo",ref:e},l[3]||(l[3]=[n("svg",{class:"fill-current w-16 h-16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[n("path",{d:"M0 0h24v24H0z",fill:"none"}),n("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})],-1)]),40,te)),[[E,{placement:"bottom",trigger:"manual"}]])])],2),t.basemap.id===m.value.id&&!t.basemap.hideThumbnail?(a(),s("div",ae,l[4]||(l[4]=[n("svg",{class:"fill-current w-25 h-25 relative",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[n("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"})],-1)]))):D("",!0)],8,X)),[[d]])])}}}),le=Q(se,[["__scopeId","data-v-17a77311"]]),ne=["content"],ie={class:"h-600 overflow-y-auto"},oe={class:"font-bold text-xl"},ce={key:0,class:"border-t border-b border-gray-600"},me=$({__name:"screen",props:{panel:{type:Object}},setup(t){const{t:b}=z(),_=M(),i=V("el"),e=T([]),c=T([]),m=o=>{o.key==="Tab"&&i.value?.matches(":focus")&&i.value._tippy.show()},f=()=>{i.value._tippy.hide()};N(()=>{const o=_.config.map;e.value=o.tileSchemas,c.value=o.basemaps,i.value?.addEventListener("blur",f),i.value?.addEventListener("keyup",m)}),j(()=>{i.value?.removeEventListener("blur",f),i.value?.removeEventListener("keyup",m)});const y=o=>c.value.filter(v=>v.tileSchemaId===o);return(o,v)=>{const r=R("panel-screen"),l=p("truncate"),x=p("focus-list"),E=p("tippy");return a(),W(r,{panel:t.panel},{header:I(()=>[U(C(L(b)("basemap.title")),1)]),content:I(()=>[h((a(),s("div",{content:L(b)("panels.controls.items"),ref_key:"el",ref:i},[n("div",ie,[(a(!0),s(w,null,k(e.value,(d,u)=>(a(),s("div",{class:"mx-5",key:d.id},[n("div",{class:B((u===0?"mt-5":"mt-36")+" flex mb-5")},[h((a(),s("h3",oe,[U(C(d.name),1)])),[[l]])],2),c.value.length>0?(a(),s("ul",ce,[(a(!0),s(w,null,k(y(d.id),g=>(a(),s("li",{key:g.id},[F(le,{basemap:g,tileSchema:d,class:"block relative overflow-hidden"},null,8,["basemap","tileSchema"])]))),128))])):D("",!0)]))),128))])],8,ne)),[[x],[E,{trigger:"manual",placement:"top-end",touch:!1,maxWidth:190}]])]),_:1},8,["panel"])}}});export{me as default};
