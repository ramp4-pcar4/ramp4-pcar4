import{ek as E,el as M,gN as A,em as G,eo as w,eE as K,ez as T,ev as s,er as t,ey as l,h0 as $,et as i,eA as I,h1 as N,ep as L,eK as k,eL as C,eI as j,eC as S,eF as Z,eG as F,eJ as q,eB as x,ex as V,ew as P,eH as J,ec as O,gu as X,h7 as D,eq as z,eu as B,eM as H,es as Q,im as U,io as W}from"./main-0iYVBzEC.js";const Y={class:"rv-geosearch-bar relative h-26 mx-8 mb-8"},ee=["placeholder","value","aria-label"],ae={class:"absolute inset-y-0 right-8 grid w-10 place-content-center"},te=["aria-label","content"],se=E({__name:"search-bar",setup(R){const{t:r}=M(),u=A(),o=G(),g=w(()=>u.searchVal),p=w(()=>['"',"$","!","*","+","?","^","{","}","(",")","|","[","]"].filter(d=>u.searchVal.includes(d)).join("")),f=d=>{u.setSearchTerm(d),u.setSearchRegex(d)},b=K(500,d=>{f(d)});return(d,a)=>{const e=T("tippy");return t(),s("div",Y,[l("input",{type:"text",class:I(["border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0",{"border-yellow-500":p.value}]),placeholder:i(r)("geosearch.searchText"),value:g.value,onInput:a[0]||(a[0]=v=>i(b)(v.target.value)),onKeyup:a[1]||(a[1]=$(v=>{i(o).mobileView&&v.target.blur()},["enter"])),"aria-label":i(r)("geosearch.searchText"),onKeypress:a[2]||(a[2]=$(N(()=>{},["prevent"]),["enter"])),enterkeyhint:"done"},null,42,ee),l("span",ae,[p.value?L((t(),s("button",{key:0,class:"cursor-default","aria-label":i(r)("geosearch.badChars",{chars:p.value}),content:i(r)("geosearch.badChars",{chars:p.value})},a[3]||(a[3]=[C(" \u26A0 ")]),8,te)),[[e]]):k("",!0)])])}}}),le={class:"rv-geosearch-top-filters sm:flex items-center w-full ml-8 mb-14"},re={class:"w-fit inline-block sm:w-1/2 h-26 mb-8 sm:mb-0 pr-16 sm:pr-0"},oe=["value","aria-label"],ne={value:"",disabled:"",hidden:""},ce={class:"sm:w-1/2 h-26 sm:mx-16 flex"},ie=["value","aria-label"],ue={value:"",disabled:"",hidden:""},pe=["disabled","content","aria-label"],be=E({__name:"top-filters",setup(R){const{t:r}=M(),u=j("iApi"),o=A(),g=S([]),p=S([]),f=S([]),b=w(()=>o.queryParams),d=w(()=>u.language),a=h=>o.setProvince(h),e=h=>o.setType(h),v=()=>{a({}),e({})},_=()=>{o.initService(u.language,u.fixture.get("geosearch").config);const h=g.value.find(c=>b.value.province===c.name)?.code,y=p.value.find(c=>b.value.type===c.name)?.code;o.getProvinces.then(c=>{g.value=c,a({province:c.find(n=>n.code===h)?.name,forceReRun:!0})}),o.getTypes.then(c=>{p.value=c,e({type:c.find(n=>n.code===y)?.name,forceReRun:!0})})};return Z(()=>{_(),f.value.push(F(d,_))}),q(()=>{f.value.forEach(h=>h())}),(h,y)=>{const c=T("truncate"),n=T("tippy");return t(),s("div",le,[l("div",re,[L((t(),s("select",{class:"border-b border-b-gray-600 w-full h-full py-0 cursor-pointer",value:b.value.province,"aria-label":i(r)("geosearch.filters.province"),onChange:y[0]||(y[0]=m=>a({province:m.target.value}))},[L((t(),s("option",ne,[C(x(i(r)("geosearch.filters.province")),1)])),[[c]]),(t(!0),s(V,null,P(g.value,m=>L((t(),s("option",{key:m.code},[C(x(m.name),1)])),[[c]])),128))],40,oe)),[[c]])]),l("div",ce,[L((t(),s("select",{class:"border-b border-b-gray-600 w-full h-full py-0 cursor-pointer max-w-150",value:b.value.type,"aria-label":i(r)("geosearch.filters.type"),onChange:y[1]||(y[1]=m=>e({type:m.target.value}))},[l("option",ue,x(i(r)("geosearch.filters.type")),1),(t(!0),s(V,null,P(p.value,m=>(t(),s("option",{key:m.code},x(m.name),1))),128))],40,ie)),[[c]]),L((t(),s("button",{type:"button",class:"text-gray-500 w-1/8 h-24 pl-8 pr-16 sm:pr-8 hover:text-black disabled:cursor-default disabled:text-gray-400",disabled:!b.value.type&&!b.value.province,onClick:v,content:i(r)("geosearch.filters.clear"),"aria-label":i(r)("geosearch.filters.clear")},y[2]||(y[2]=[l("div",{class:"rv-geosearch-icon"},[l("svg",{class:"fill-current w-18 h-18",viewBox:"0 0 23 21"},[l("path",{d:"M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z "})])],-1)]),8,pe)),[[n,{placement:"bottom"}]])])])}}}),ve={class:"rv-geosearch-bottom-filters"},de={class:"bg-white"},he={class:"ml-8 cursor-pointer font-normal"},ge=["checked"],fe=E({__name:"bottom-filters",setup(R){const{t:r}=M(),u=j("iApi"),o=A(),g=w(()=>o.resultsVisible),p=K(300,a=>{b(a).then(e=>{f({extent:e,visible:g.value})})}),f=a=>{o.setMapExtent(a)},b=async a=>a.sr.wkid===4326?a:await u.geo.proj.projectGeometry(4326,a),d=a=>{b(u.geo.map.getExtent()).then(e=>{f({extent:e,visible:a})})};return J(()=>{u.event.on(O.MAP_EXTENTCHANGE,p,"geosearch_map_extent")}),q(()=>{u.event.off("geosearch_map_extent")}),(a,e)=>(t(),s("div",ve,[l("div",de,[l("label",he,[l("input",{type:"checkbox",class:"border-2 mx-8 border-gray-600 cursor-pointer",checked:g.value,onChange:e[0]||(e[0]=v=>d(v.target.checked)),onKeypress:e[1]||(e[1]=$(N(()=>{},["prevent"]),["enter"]))},null,40,ge),C(x(i(r)("geosearch.visible")),1)])])]))}}),me={},xe={class:"w-full h-6 relative overflow-hidden rounded-full indeterminate mb-14"},ye={class:"h-full progressbar bg-blue-800 rounded-full top-0","aria-valuemin":"0","aria-valuemax":"100"},we={class:"flex items-center h-full"};function Le(R,r){return t(),s("div",xe,[l("div",ye,[l("span",we,[D(R.$slots,"default",{},void 0,!0)])])])}const ke=X(me,[["render",Le],["__scopeId","data-v-0a8d1c36"]]),_e={class:"flex flex-col h-full"},Ce={key:1,class:"text-red-900 text-xs px-8 mb-10"},Re={key:2,class:"px-8 mb-10 py-8 flex-grow text-wrap border-y border-gray-600 overflow-y-auto"},Te={class:"relative h-48"},Ee={class:"font-bold text-blue-600"},Me={key:3,class:"rv-results-list flex-grow mb-5 border-t border-b border-gray-600 overflow-y-auto"},Ae=["onClick"],$e={class:"rv-result-description px-8"},je={class:"flex-1 text-left truncate font-bold leading-tight"},Se=["innerHTML"],Ve={key:0,class:"text-gray-600 text-sm"},Pe={key:1,class:"hidden"},He={key:2,class:"text-sm font-normal"},Ke=E({__name:"screen",props:{panel:{type:Object}},setup(R){const{t:r}=M(),u=j("iApi"),o=A(),g=w(()=>o.searchVal.replace(/["!*$+?^{}()|[\]\\]/g,"").trim()),p=w(()=>o.searchResults),f=w(()=>o.loadingResults),b=w(()=>o.failedServices),d=e=>{const v=new U("zoomies",[[[e.bbox[0],e.bbox[1]],[e.bbox[0],e.bbox[3]],[e.bbox[2],e.bbox[3]],[e.bbox[2],e.bbox[1]],[e.bbox[0],e.bbox[1]]]],W.latLongSR(),!0);u.geo.map.zoomMapTo(v)},a=(e,v)=>{const _=e.replace(new RegExp(`${o.searchRegex}`,"gi"),h=>'<span class="font-bold text-blue-600">'+h+"</span>");return v?_+",":_};return(e,v)=>{const _=Q("panel-screen"),h=T("truncate"),y=T("focus-item"),c=T("focus-list");return t(),z(_,{panel:R.panel},{header:B(()=>[C(x(i(r)("geosearch.title")),1)]),content:B(()=>[l("div",_e,[H(se),H(be),f.value?(t(),z(ke,{key:0,class:"flex-none"})):k("",!0),b.value.length>0&&!f.value?(t(),s("div",Ce,x(i(r)("geosearch.serviceError",{services:b.value.join(", ")})),1)):k("",!0),g.value&&p.value.length===0&&!f.value?(t(),s("div",Re,[l("span",Te,[C(x(i(r)("geosearch.noResults")),1),l("span",Ee,'"'+x(g.value)+'"',1)])])):k("",!0),p.value.length>0?L((t(),s("ul",Me,[(t(!0),s(V,null,P(p.value,(n,m)=>(t(),s("li",{class:"relative h-56",key:m},[L((t(),s("button",{type:"button",class:"absolute inset-0 h-full w-full hover:bg-gray-300 default-focus-style",onClick:Ne=>d(n),style:{"border-bottom":"1px solid lightgray"},"truncate-trigger":""},[l("div",$e,[L((t(),s("div",je,[l("span",{innerHTML:a(n.name,n.location.province)},null,8,Se),n.location.province?(t(),s("span",Ve,x(n.location.city?" "+n.location.city+", "+n.location.province.abbr:" "+n.location.province.abbr),1)):k("",!0),n.type?(t(),s("span",Pe,"; ")):k("",!0),n.type?(t(),s("span",He,[v[0]||(v[0]=l("br",null,null,-1)),C(x(n.type),1)])):k("",!0)])),[[h,{externalTrigger:!0,options:{placement:"top-start"}}]])])],8,Ae)),[[y,"show-truncate"]])]))),128))])),[[c]]):k("",!0),H(fe,{class:"mt-auto"})])]),_:1},8,["panel"])}}});export{Ke as default};
