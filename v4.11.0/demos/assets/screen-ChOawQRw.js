import{dM as T,dN as E,g9 as R,dO as K,dQ as w,e5 as q,dS as C,dU as s,dY as o,dX as a,d_ as D,e0 as i,g8 as P,g7 as G,dT as x,ea as k,eb as L,e2 as N,e3 as M,e6 as H,e7 as Z,e9 as I,d$ as m,e1 as A,dZ as B,e8 as F,ed as O,fQ as Q,gs as U,dR as X,dV as j,dW as z,ef as V,hu as W,hv as Y}from"./main-7nqzKo04.js";import"./preload-helper-ExcqyqRp.js";const J={class:"rv-geosearch-bar relative h-26 mx-8 mb-8"},ee=["placeholder","value","aria-label"],te={class:"absolute inset-y-0 right-8 grid w-10 place-content-center"},se=["aria-label","content"],oe=T({__name:"search-bar",setup(S){const{t:n}=E(),d=R(),r=K(),_=w(()=>d.searchVal),u=w(()=>['"',"$","!","*","+","?","^","{","}","(",")","|","[","]"].filter(v=>d.searchVal.includes(v)).join("")),g=v=>{d.setSearchTerm(v),d.setSearchRegex(v)},p=q(500,v=>{g(v)});return(v,t)=>{const e=C("tippy");return s(),o("div",J,[a("input",{type:"text",class:D(["border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0",{"border-yellow-500":u.value}]),placeholder:i(n)("geosearch.searchText"),value:_.value,onInput:t[0]||(t[0]=h=>i(p)(h.target.value)),onKeyup:t[1]||(t[1]=P(h=>{i(r).mobileView&&h.target.blur()},["enter"])),"aria-label":i(n)("geosearch.searchText"),onKeypress:t[2]||(t[2]=P(G(()=>{},["prevent"]),["enter"])),enterkeyhint:"done"},null,42,ee),a("span",te,[u.value?x((s(),o("button",{key:0,class:"cursor-default","aria-label":i(n)("geosearch.badChars",{chars:u.value}),content:i(n)("geosearch.badChars",{chars:u.value})},t[3]||(t[3]=[k(" ⚠ ")]),8,se)),[[e]]):L("",!0)])])}}}),ae={class:"rv-geosearch-top-filters sm:flex items-center w-full ml-8 mb-14"},ne={class:"w-fit inline-block sm:w-1/2 h-26 mb-8 sm:mb-0 pr-16 sm:pr-0"},re=["value","aria-label"],le={value:"",disabled:"",hidden:""},ce={class:"sm:w-1/2 h-26 sm:mx-16 flex"},ie=["value","aria-label"],de={value:"",disabled:"",hidden:""},ue=["disabled","content","aria-label"],pe=T({__name:"top-filters",setup(S){const{t:n}=E(),d=N("iApi"),r=R(),_=M([]),u=M([]),g=M([]),p=w(()=>r.queryParams),v=w(()=>d.language),t=b=>r.setProvince(b),e=b=>r.setType(b),h=()=>{t({}),e({})},$=()=>{r.initService(d.language,d.fixture.get("geosearch").config);const b=_.value.find(c=>p.value.province===c.name)?.code,y=u.value.find(c=>p.value.type===c.name)?.code;r.getProvinces.then(c=>{_.value=c,t({province:c.find(l=>l.code===b)?.name,forceReRun:!0})}),r.getTypes.then(c=>{u.value=c,e({type:c.find(l=>l.code===y)?.name,forceReRun:!0})})};return H(()=>{$(),g.value.push(Z(v,$))}),I(()=>{g.value.forEach(b=>b())}),(b,y)=>{const c=C("truncate"),l=C("tippy");return s(),o("div",ae,[a("div",ne,[x((s(),o("select",{class:"border-b border-b-gray-600 w-full h-full py-0 cursor-pointer",value:p.value.province,"aria-label":i(n)("geosearch.filters.province"),onChange:y[0]||(y[0]=f=>t({province:f.target.value}))},[x((s(),o("option",le,[k(m(i(n)("geosearch.filters.province")),1)])),[[c]]),(s(!0),o(A,null,B(_.value,f=>x((s(),o("option",{key:f.code},[k(m(f.name),1)])),[[c]])),128))],40,re)),[[c]])]),a("div",ce,[x((s(),o("select",{class:"border-b border-b-gray-600 w-full h-full py-0 cursor-pointer max-w-150",value:p.value.type,"aria-label":i(n)("geosearch.filters.type"),onChange:y[1]||(y[1]=f=>e({type:f.target.value}))},[a("option",de,m(i(n)("geosearch.filters.type")),1),(s(!0),o(A,null,B(u.value,f=>(s(),o("option",{key:f.code},m(f.name),1))),128))],40,ie)),[[c]]),x((s(),o("button",{type:"button",class:"text-gray-500 w-1/8 h-24 pl-8 pr-16 sm:pr-8 hover:text-black disabled:cursor-default disabled:text-gray-400",disabled:!p.value.type&&!p.value.province,onClick:h,content:i(n)("geosearch.filters.clear"),"aria-label":i(n)("geosearch.filters.clear")},y[2]||(y[2]=[a("div",{class:"rv-geosearch-icon"},[a("svg",{class:"fill-current w-18 h-18",viewBox:"0 0 23 21"},[a("path",{d:"M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z "})])],-1)]),8,ue)),[[l,{placement:"bottom"}]])])])}}}),he={class:"rv-geosearch-bottom-filters"},ve={class:"bg-white"},be={class:"ml-8 cursor-pointer font-normal"},_e=["checked"],ge=T({__name:"bottom-filters",setup(S){const{t:n}=E(),d=N("iApi"),r=R(),_=w(()=>r.resultsVisible),u=q(300,t=>{p(t).then(e=>{g({extent:e,visible:_.value})})}),g=t=>{r.setMapExtent(t)},p=async t=>t.sr.wkid===4326?t:await d.geo.proj.projectGeometry(4326,t),v=t=>{p(d.geo.map.getExtent()).then(e=>{g({extent:e,visible:t})})};return F(()=>{d.event.on(O.MAP_EXTENTCHANGE,u,"geosearch_map_extent")}),I(()=>{d.event.off("geosearch_map_extent")}),(t,e)=>(s(),o("div",he,[a("div",ve,[a("label",be,[a("input",{type:"checkbox",class:"border-2 mx-8 border-gray-600 cursor-pointer",checked:_.value,onChange:e[0]||(e[0]=h=>v(h.target.checked)),onKeypress:e[1]||(e[1]=P(G(()=>{},["prevent"]),["enter"]))},null,40,_e),k(m(i(n)("geosearch.visible")),1)])])]))}}),fe={},me={class:"w-full h-6 relative overflow-hidden rounded-full indeterminate mb-14"},ye={class:"h-full progressbar bg-blue-800 rounded-full top-0","aria-valuemin":"0","aria-valuemax":"100"},xe={class:"flex items-center h-full"};function we(S,n){return s(),o("div",me,[a("div",ye,[a("span",xe,[U(S.$slots,"default",{},void 0,!0)])])])}const Le=Q(fe,[["render",we],["__scopeId","data-v-64b4e253"]]),$e={class:"flex flex-col h-full"},ke={key:1,class:"text-red-900 text-xs px-8 mb-10"},Se={key:2,class:"px-8 mb-10 py-8 flex-grow text-wrap border-y border-gray-600 overflow-y-auto"},Ce={class:"relative h-48"},Te={class:"font-bold text-blue-600"},Ee={key:3,class:"rv-results-list flex-grow mb-5 border-t border-b border-gray-600 overflow-y-auto"},Re=["onClick"],Me={class:"rv-result-description px-8"},Ve={class:"flex-1 text-left truncate font-bold leading-tight"},Pe=["innerHTML"],Ae={key:0,class:"text-gray-600 text-sm"},Be={key:1,class:"hidden"},Ne={key:2,class:"text-sm font-normal"},Ge=T({__name:"screen",props:{panel:{type:Object}},setup(S){const{t:n}=E(),d=N("iApi"),r=R(),_=w(()=>r.searchVal.replace(/["!*$+?^{}()|[\]\\]/g,"").trim()),u=w(()=>r.searchResults),g=w(()=>r.loadingResults),p=w(()=>r.failedServices),v=e=>{const h=new W("zoomies",[[[e.bbox[0],e.bbox[1]],[e.bbox[0],e.bbox[3]],[e.bbox[2],e.bbox[3]],[e.bbox[2],e.bbox[1]],[e.bbox[0],e.bbox[1]]]],Y.latLongSR(),!0);d.geo.map.zoomMapTo(h)},t=(e,h)=>{const $=e.replace(new RegExp(`${r.searchRegex}`,"gi"),b=>'<span class="font-bold text-blue-600">'+b+"</span>");return h?$+",":$};return(e,h)=>{const $=X("panel-screen"),b=C("truncate"),y=C("focus-item"),c=C("focus-list");return s(),j($,{panel:S.panel},{header:z(()=>[k(m(i(n)("geosearch.title")),1)]),content:z(()=>[a("div",$e,[V(oe),V(pe),g.value?(s(),j(Le,{key:0,class:"flex-none"})):L("",!0),p.value.length>0&&!g.value?(s(),o("div",ke,m(i(n)("geosearch.serviceError",{services:p.value.join(", ")})),1)):L("",!0),_.value&&u.value.length===0&&!g.value?(s(),o("div",Se,[a("span",Ce,[k(m(i(n)("geosearch.noResults")),1),a("span",Te,'"'+m(_.value)+'"',1)])])):L("",!0),u.value.length>0?x((s(),o("ul",Ee,[(s(!0),o(A,null,B(u.value,(l,f)=>(s(),o("li",{class:"relative h-56",key:f},[x((s(),o("button",{type:"button",class:"absolute inset-0 h-full w-full hover:bg-gray-300 default-focus-style",onClick:je=>v(l),style:{"border-bottom":"1px solid lightgray"},"truncate-trigger":""},[a("div",Me,[x((s(),o("div",Ve,[a("span",{innerHTML:t(l.name,l.location.province)},null,8,Pe),l.location.province?(s(),o("span",Ae,m(l.location.city?" "+l.location.city+", "+l.location.province.abbr:" "+l.location.province.abbr),1)):L("",!0),l.type?(s(),o("span",Be,"; ")):L("",!0),l.type?(s(),o("span",Ne,[h[0]||(h[0]=a("br",null,null,-1)),k(m(l.type),1)])):L("",!0)])),[[b,{externalTrigger:!0,options:{placement:"top-start"}}]])])],8,Re)),[[y,"show-truncate"]])]))),128))])),[[c]]):L("",!0),V(ge,{class:"mt-auto"})])]),_:1},8,["panel"])}}});export{Ge as default};
