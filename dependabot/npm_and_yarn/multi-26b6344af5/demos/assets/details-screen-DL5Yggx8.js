import{ek as G,eC as x,eH as ne,ev as a,er as t,ey as _,eK as H,ex as J,ew as Q,h4 as ve,eA as R,eB as z,gx as ie,gO as W,eo as I,ez as q,ep as A,gS as pe,eP as le,el as Z,j7 as oe,eF as X,eG as U,eJ as ee,et as w,eq as V,eI as te,jB as fe,iy as we,gZ as $e,jC as Te,eN as Y,eL as ae,eu as ce,es as Me}from"./main-Cv8ITM2j.js";import{T as Ie}from"./toggle-switch-control-BFDUMfCc.js";import"./preload-helper-ExcqyqRp.js";const Ee={key:0,class:"relative"},Ce={key:0,class:"relative"},je=["innerHTML"],ze=["src"],He={key:1,class:"w-32 h-32"},Se={class:"symbologyIcon"},De=["innerHTML"],Be=["src"],Oe={class:"badge z-50 rounded-full text-white absolute h-10 w-10 p-8 inline-flex items-center justify-center"},Ne={key:0,class:"px-5"},Ae={key:1,class:"inline-flex justify-center items-center relative"},qe=G({__name:"symbology-stack",props:{layer:{type:Object,required:!0},result:{type:Object,required:!0}},setup(d){const b=d,n=x([]);return ne(()=>{n.value=b.layer.legend}),(c,v)=>d.result.loaded?(t(),a("div",Ee,[_("div",{class:R(d.result.items.length===0?"opacity-50":"")},[n.value.length>1?(t(),a("div",Ce,[(t(!0),a(J,null,Q(n.value.slice(0,3).reverse(),($,y)=>(t(),a("div",{class:R(["absolute",[y==0?"symbol-0":y==1?"left-3":"left-6"]]),style:ve({"z-index":3-y}),key:y},[n.value[y].svgcode?(t(),a("span",{key:0,class:"symbologyIcon w-28 h-28",innerHTML:n.value[y].svgcode},null,8,je)):n.value[y].imgUrl?(t(),a("img",{key:1,class:"symbologyIcon w-28 h-28",src:n.value[y].imgUrl},null,8,ze)):H("",!0)],6))),128))])):n.value.length>0?(t(),a("div",He,[_("div",Se,[n.value[0].svgcode?(t(),a("span",{key:0,innerHTML:n.value[0].svgcode},null,8,De)):n.value[0].imgUrl?(t(),a("img",{key:1,class:"symbologyIcon w-full h-full",src:n.value[0].imgUrl},null,8,Be)):H("",!0)])])):H("",!0)],2),_("div",Oe,[d.result.loaded?(t(),a("div",Ne,z(d.result.items.length),1)):H("",!0)])])):(t(),a("div",Ae,v[0]||(v[0]=[_("div",{class:"symbologyIcon h-32 w-32"},[_("div",{class:"relative animate-spin spinner h-24 w-24"})],-1)])))}}),Fe=ie(qe,[["__scopeId","data-v-e0b0309a"]]),Ge=["content"],Pe={class:"symbologyLayerName truncate"},Ue=G({__name:"symbology-item",props:{layer:{type:Object,required:!0},result:{type:Object,required:!0},selected:{type:Boolean,required:!0}},setup(d){const b=W(),n=I(()=>b.properties),c=d,v=()=>{const $=c.layer;return $&&n.value[$.id]&&n.value[$.id].name?n.value[$.id].name:$?.name??""};return($,y)=>{const k=q("tippy");return A((t(),a("button",{class:R(["flex flex-grow justify-start items-center px-7 py-10 default-focus-style symbologyStackButton truncate",d.selected?"detailsButtonSelected":"px-11"]),onClick:y[0]||(y[0]=pe(()=>{},["stop"])),content:v()},[le(Fe,{class:"symbStack w-32 h-32 mr-10",layer:d.layer,result:d.result},null,8,["layer","result"]),_("div",Pe,z(v()),1)],10,Ge)),[[k,{placement:"right",sticky:!0}]])}}}),Re=["content"],Ve=G({__name:"symbology-list",props:{results:{type:Object,required:!0},selected:{type:String,required:!0}},emits:["selection-changed"],setup(d,{emit:b}){const{t:n}=Z(),c=oe(),v=x(),$=()=>{v.value._tippy.hide()},y=g=>{g.key==="Tab"&&v.value?.matches(":focus")&&v.value._tippy.show()},k=b,f=d,l=x(""),m=x([]),o=x(!1),e=x(!1),r=g=>c.getLayerByUid(g),T=g=>{l.value=g,k("selection-changed",g),o.value=!1},D=()=>{e.value||setTimeout(()=>{o.value=e.value},500),e.value=!0},C=()=>{o.value=e.value=!1},p=()=>{e.value||(o.value=!0),e.value=!0},E=()=>{o.value=e.value=!1};return X(()=>{m.value.push(U(f,()=>{l.value=f.selected}))}),ne(()=>{v.value?.addEventListener("blur",$),v.value?.addEventListener("keyup",y)}),ee(()=>{m.value.forEach(g=>g()),v.value?.removeEventListener("blur",$),v.value?.removeEventListener("keyup",y)}),(g,O)=>{const N=q("focus-item"),F=q("focus-list"),M=q("tippy");return A((t(),a("div",{class:R(["symbology-list absolute overflow-hidden z-50 p-0 w-48 bg-white text-sm inline-flex flex-col",{"symbology-list-expanded":o.value}]),onMouseover:D,onMouseleave:C,onFocus:p,onBlur:pe(E,["self"]),content:w(n)("details.layers.results.list.tooltip"),ref_key:"el",ref:v},[(t(!0),a(J,null,Q(f.results,(S,i)=>(t(),a("div",{class:"flex justify-start relative",key:i},[A((t(),V(Ue,{key:S.uid,layer:r(S.uid),result:S,selected:S.uid===l.value,onClick:u=>T(S.uid)},null,8,["layer","result","selected","onClick"])),[[N]])]))),128))],42,Re)),[[F],[M,{trigger:"manual",placement:"top-start",touch:!1}]])}}}),Ze={class:"inline font-bold"},Je=["innerHTML"],Ke=G({__name:"esri-default",props:{fixtureFields:{type:Object,required:!1},fields:{type:Object,required:!0},identifyData:{type:Object,required:!0}},setup(d){const{t:b}=Z(),n=te("iApi"),c=d,v=(l,m,o,e)=>{const r=l.find(T=>T[m].toLowerCase()===o.toLowerCase());r&&delete e[r.name]},$=()=>{const l=Object.assign({},c.identifyData.data);v(c.fields,"type","geometry",l),n?.ui.exposeOids||v(c.fields,"type","oid",l),n?.ui.exposeMeasurements||(v(c.fields,"name","shape_length",l),v(c.fields,"name","shape_area",l));const m={};c.fields.forEach(e=>{const r=c.fixtureFields?.find(T=>e.name===T.field);m[e.name]={name:r?.alias||e.alias||e.name,type:e.type,visible:r?.visible??!0}});const o={};Object.keys(l).forEach(e=>{const r=m[e];if(r&&r.visible){const T=l[e];o[e]={value:typeof T=="number"?n?.ui.formatNumber(T):T,alias:r.name,type:r.type}}});for(const[e]of Object.entries(o))n.ui.isPlainText(o[e].value)&&(o[e].value=n.ui.escapeHtml(o[e].value));return o},y=(l,m,o)=>{switch(o){case"date":return f(l);default:return k(l,m)}},k=(l,m)=>{if(!l)return l;if(l.trim().match(/\.(jpeg|jpg|gif|png)$/)||l.trim().match(/^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i))return`<img src="${l}" alt="${b("details.item.alert.defaultAltText",{alias:m})}" />`;const o="underline text-blue-700 break-all",e=document.createElement("div");return e.innerHTML=l.trim(),e.firstElementChild?.tagName=="A"?(e.firstElementChild.className=o,e.innerHTML):fe(l,{className:o,target:"_blank",validate:{url:T=>/^https?:\/\//.test(T)}})},f=l=>{const m=parseInt(l);return isNaN(m)?l:new Date(m).toISOString().split("T")[0]};return(l,m)=>(t(),a("div",null,[(t(!0),a(J,null,Q($(),(o,e,r)=>(t(),a("div",{class:"p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",key:r},[_("span",Ze,z(o.alias),1),m[0]||(m[0]=_("span",{class:"flex-auto"},null,-1)),_("span",{class:"inline",innerHTML:y(o.value,o.alias,o.type)},null,8,Je)]))),128))]))}}),Ye=["innerHTML"],Qe={key:1},We=G({__name:"html-default",props:{identifyData:{type:Object,required:!0}},setup(d){const{t:b}=Z();return(n,c)=>d.identifyData?(t(),a("div",{key:0,class:"whitespace-pre-wrap break-words h-full overflow-auto",innerHTML:d.identifyData.data.data??d.identifyData.data},null,8,Ye)):(t(),a("div",Qe,z(w(b)("details.layers.results.empty")),1))}}),Xe={class:"relative flex flex-grow truncate"},et={key:0,class:"flex flex-grow items-center truncate"},tt={class:"flex p-8 items-center"},st=["innerHTML"],lt={key:1,class:"symbologyIcon p-6"},at=["content","innerHTML","tabindex"],nt={key:1,class:"flex p-6 flex-grow"},it={key:2,class:"zoomButton text-center p-3"},ot=["content","aria-label"],rt={key:0,class:"m-auto animate-spin spinner h-20 w-20"},ut={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"green",class:"m-auto w-20 h-20"},ct={key:2,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"red",class:"m-auto w-20 h-20"},dt=["innerHTML"],de=G({__name:"result-item",props:{uid:{type:String,required:!0},data:{type:Object,required:!0},open:{type:Boolean,required:!1},inList:{type:Boolean,required:!1}},setup(d){const b=oe(),n=d,c=te("iApi"),v=x([]),$=W(),{t:y}=Z(),k=x(!1),f=x(""),l=x("none"),m=x(),o=()=>b.getLayerByUid(n.uid),e=I(()=>$.properties),r=I(()=>$.defaultTemplates),T=I(()=>o()?.supportsFeatures??!1),D=I(()=>o()?.mapLayer??!1),C=I(()=>{const i=o();let u=i&&n.data.loaded?i.nameValue(n.data.data):c.$i18n.t("details.items.title");return c.ui.isPlainText(u)&&(u=c.ui.escapeHtml(u)),u}),p=i=>{if(typeof i=="string"){const u="underline text-blue-700 break-all",h=document.createElement("div");return h.innerHTML=i.trim(),h.firstElementChild?.tagName=="A"?(h.firstElementChild.className=u,h.innerHTML):fe(i,{className:u,target:"_blank",validate:{url:B=>/^https?:\/\//.test(B)}})}return i},E=()=>{M("none"),n.data.loaded?g():n.data.load().then(()=>{g()})},g=()=>{if(f.value="",!(n.data&&n.data.loaded))return;const i=o();if(i===void 0){console.warn(`could not find layer for uid ${n.uid} during icon lookup`);return}if(i.supportsFeatures){const u=i.oidField;i.getIcon(n.data.data[u]).then(h=>{f.value=h})}},O=I(()=>{const i=o();return i&&e.value[i.id]&&e.value[i.id].template?e.value[i.id].template:r.value&&r.value[n.data.format]?r.value[n.data.format]:T.value?Ke:We}),N=I(()=>T.value?o()?.fields||[]:[]),F=I(()=>{const i=o();if(i&&e.value[i.id]&&e.value[i.id].fields)return e.value[i.id].fields}),M=i=>{i==="zoomed"||i==="error"?setTimeout(()=>{l.value=i,m.value?._tippy.show(),setTimeout(()=>{m.value?._tippy.hide(),l.value="none"},3e3)},300):l.value=i},S=()=>{if(l.value!=="none")return;M("zooming");const i=o();if(i===void 0||!i.isLoaded){console.warn(`Could not find layer for uid ${n.uid} during zoom geometry lookup`),M("error");return}if(!n.data.loaded){console.warn("Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs."),M("error");return}const u=n.data.data[i.oidField],h=()=>{const j={getGeom:!0};i.getGraphic(u,j).then(B=>{B.geometry.invalid()?(console.error(`Could not find graphic for objectid ${u}`),M("error")):(c.geo.map.zoomMapTo(B.geometry),M("zoomed"),c.updateAlert(c.$i18n.t("details.item.alert.zoom")))}).catch(()=>{M("error")})};i.layerType===$e.FEATURE&&i.geomType!==Te.POINT?i.getGraphicExtent(u).then(j=>{c.geo.map.zoomMapTo(j),M("zoomed"),c.updateAlert(c.$i18n.t("details.item.alert.zoom"))}).catch(()=>{h()}):h()};return X(()=>{v.value.push(U(n,()=>{E()},{deep:!1,immediate:!0}))}),ee(()=>{v.value.forEach(i=>i())}),(i,u)=>{const h=q("truncate"),j=q("tippy");return t(),a(J,null,[_("div",Xe,[T.value?(t(),a("div",et,[_("div",tt,[d.data.loaded&&f.value?(t(),a("span",{key:0,class:"flex-none symbologyIcon",innerHTML:f.value},null,8,st)):(t(),a("div",lt,u[3]||(u[3]=[_("div",{class:"animate-spin spinner h-20 w-20"},null,-1)])))]),d.data.loaded?A((t(),a("span",{key:0,class:"pl-3 text-left flex-grow itemName",content:C.value,innerHTML:p(C.value),onTouchstart:u[0]||(u[0]=B=>k.value=!0),onTouchend:u[1]||(u[1]=B=>k.value=!1),tabindex:d.inList?-1:0},null,40,at)),[[h,{options:{placement:"top-start",offset:()=>k.value?[0,25]:[0,0]}}]]):(t(),a("div",nt,z(w(y)("details.loading")),1)),d.data.loaded?(t(),a("span",it,[D.value?A((t(),a("button",{key:0,type:"button",content:w(y)(`details.item.zoom${l.value==="none"?"":`.${l.value}`}`),"aria-label":w(y)(`grid.cells.zoom${l.value==="none"?"":`.${l.value}`}`),ref_key:"zoomButton",ref:m,onClick:u[2]||(u[2]=B=>{B.stopPropagation(),S()}),class:"text-gray-600 w-24 h-24 p-2 flex justify-center items-center"},[l.value==="zooming"?(t(),a("div",rt)):l.value==="zoomed"?(t(),a("svg",ut,u[4]||(u[4]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"},null,-1)]))):l.value==="error"?(t(),a("svg",ct,u[5]||(u[5]=[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1)]))):(t(),a("span",{key:3,innerHTML:w(c).ui.getZoomIcon()},null,8,dt))],8,ot)),[[j,{placement:"bottom"}]]):H("",!0)])):H("",!0)])):H("",!0)]),d.open?(t(),V(we(O.value),{key:0,identifyData:d.data,fields:N.value,fixtureFields:F.value,class:"p-8"},null,8,["identifyData","fields","fixtureFields"])):H("",!0)],64)}}}),vt={key:0,class:"layerName w-full flex-grow p-5 pb-8 font-bold truncate",tabIndex:"0"},pt={key:1,class:"p-8 mb-8 bg-gray-100 flex justify-between"},ft={for:"toggle"},mt={key:2,class:"flex flex-col justify-between p-8 mb-8 bg-gray-100"},yt={class:"flex"},gt=["aria-label"],ht=["content","aria-label","disabled"],_t={class:"px-3 text-center flex-grow"},bt=["content","aria-label","disabled"],kt={key:3},xt={key:0},Lt=["content"],wt=["onClick"],$t={key:1,class:"text-center"},Tt={key:4,class:"p-5"},Mt=G({__name:"result-list",props:{uid:{type:String,required:!0},results:{type:Object,required:!0}},setup(d){const b=x(),n=()=>{b.value._tippy.hide()},c=s=>{s.key==="Tab"&&b.value?.matches(":focus")&&b.value._tippy.show()},v=te("iApi"),$=W(),y=oe(),k=d,{t:f}=Z(),l=x(!1),m=x(v.fixture.get("details")),o=x(!0),e=x(!1),r=x(0),T=x(20),D=x([]),C=x([]),p=I(()=>$.activeGreedy),E=I(()=>$.properties),g=I(()=>r.value+T.value),O=()=>y.getLayerByUid(k.uid),N=()=>k.results.find(s=>s.uid===k.uid),F=I(()=>N()?.loaded??!1),M=I(()=>N()?.requestTime),S=I(()=>l.value&&(!e.value&&h().length>1||e.value&&h().length>T.value)),i=I(()=>{const s=O();return s&&E.value[s.id]&&E.value[s.id].name?E.value[s.id].name:s?.name??""}),u=I(()=>k.uid),h=()=>{const s=N();return s?s.items:[]},j=I(()=>h()[r.value]),B=I(()=>{if(m.value.hasHilighter()){const s=O();if(s)return s.mapLayer&&s.supportsFeatures}return!1}),me=s=>{o.value=s,$.hilightToggle=s,P()},ye=()=>{const s=O();r.value=r.value??0,o.value=$.hilightToggle??o.value,e.value=!1,l.value=!!s,P()},re=s=>{e.value?(r.value+=s*T.value,P()):r.value+=s},P=()=>{const s=h();if(o.value&&F.value&&s.length>0&&B.value)if(e.value)m.value.hilightDetailsItems(s.slice(r.value,g.value),k.uid);else{const L=s[r.value];L&&m.value.hilightDetailsItems([L],k.uid)}else m.value.removeDetailsHilight()},ge=()=>{e.value=!0,r.value=Math.floor(r.value/T.value)*T.value,P()},he=()=>{m.value.removeDetailsHilight(),C.value.forEach(s=>s()),D.value.forEach(s=>v.event.off(s))},_e=()=>{m.value.removeDetailsHilight()},be=s=>{const L=r.value;r.value=s,e.value=!1,L===s&&P()};return ne(()=>{D.value.push(v.event.on(Y.LAYER_REMOVE,s=>{const L=v.panel.get("details");k.uid===s.uid&&L&&L.close()})),D.value.push(v.event.on(Y.PANEL_CLOSED,s=>{s.id==="details"&&he()})),D.value.push(v.event.on(Y.PANEL_MINIMIZED,s=>{s.id==="details"&&_e()})),D.value.push(v.event.on(Y.MAP_BASEMAPCHANGE,s=>{o.value&&s.schemaChanged&&P()})),b.value?.addEventListener("blur",n),b.value?.addEventListener("keyup",c)}),X(()=>{C.value.push(U(j,()=>{e.value||(ye(),j.value===void 0&&m.value.removeDetailsHilight())},{deep:!1,immediate:!0})),C.value.push(U(u,()=>{const s=k.uid;if(e.value&&s){const L=N();L&&L.loading.then(()=>{k.uid===s&&e.value&&P()})}},{deep:!1,immediate:!0})),C.value.push(U(M,()=>{r.value=0})),C.value.push(U(()=>k.uid,()=>{r.value=0}))}),ee(()=>{b.value?.removeEventListener("blur",n),b.value?.removeEventListener("keyup",c)}),(s,L)=>{const ke=q("truncate"),se=q("tippy"),xe=q("focus-item"),Le=q("focus-list");return F.value&&p.value===0?(t(),a("div",{key:0,class:"detailsContent relative flex flex-col flex-grow pl-5",style:ve(d.results.length>1?{"margin-left":"42px"}:"")},[l.value?A((t(),a("h1",vt,[ae(z(i.value),1)])),[[ke,{options:{placement:"top-start"}}]]):H("",!0),B.value?(t(),a("div",pt,[_("label",ft,z(w(f)("details.togglehilight.title")),1),le(Ie,{config:{value:o.value,disabled:!1},onToggled:me},null,8,["config"])])):H("",!0),S.value?(t(),a("div",mt,[_("div",yt,[e.value?H("",!0):(t(),a("button",{key:0,type:"button",class:"px-8 font-bold hover:bg-gray-200 focus:bg-gray-200","aria-label":w(f)("details.item.see.list"),onClick:L[0]||(L[0]=K=>ge())},z(w(f)("details.item.see.list")),9,gt)),_("div",{class:R(["flex ml-auto bg-gray-200 py-8 items-center",{"w-full":e.value}])},[A((t(),a("button",{type:"button",content:w(f)(e.value?"details.items.previous":"details.item.previous.item"),onClick:L[1]||(L[1]=K=>re(-1)),class:"mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default","aria-label":w(f)(e.value?"details.items.previous":"details.item.previous.item"),disabled:r.value===0},L[3]||(L[3]=[_("svg",{height:"24",width:"24",viewBox:"0 0 23 23"},[_("g",null,[_("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})])],-1)]),8,ht)),[[se,{placement:"top"}]]),_("span",_t,z(e.value?w(f)("details.items.range",[r.value+1,Math.min(g.value,h().length),h().length]):w(f)("details.item.count",[r.value+1,h().length])),1),A((t(),a("button",{type:"button",content:w(f)(e.value?"details.items.next":"details.item.next.item"),onClick:L[2]||(L[2]=K=>re(1)),class:"mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default","aria-label":w(f)(e.value?"details.items.next":"details.item.next.item"),disabled:!e.value&&r.value===h().length-1||e.value&&g.value>=h().length},L[4]||(L[4]=[_("svg",{height:"24",width:"24",viewBox:"0 0 23 23"},[_("g",null,[_("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})])],-1)]),8,bt)),[[se,{placement:"top"}]])],2)])])):H("",!0),l.value?(t(),a("div",kt,[h().length>0?(t(),a("div",xt,[e.value?A((t(),a("div",{key:0,class:"flex flex-col",content:w(f)("details.layers.results.list.tooltip"),ref_key:"el",ref:b},[(t(!0),a(J,null,Q(h().slice(r.value,g.value),(K,ue)=>A((t(),a("button",{class:"flex flex-grow truncate default-focus-style hover:bg-gray-200",key:ue,onClick:zt=>be(r.value+ue)},[le(de,{data:K,uid:d.uid,open:!1,"in-list":!0},null,8,["data","uid"])],8,wt)),[[xe,"show-truncate"]])),128))],8,Lt)),[[Le],[se,{trigger:"manual",placement:"top-start",touch:!1}]]):(t(),V(de,{key:1,data:j.value,uid:d.uid,open:!0,"in-list":!1},null,8,["data","uid"]))])):(t(),a("div",$t,z(w(f)("details.layers.results.empty.currentLayer")),1))])):(t(),a("div",Tt,z(w(f)("details.item.no.data")),1))],4)):(t(),a("div",{key:1,class:R(["flex justify-center py-10 items-center",d.results.length>1?"ml-42":""])},[L[5]||(L[5]=_("span",{class:"animate-spin spinner h-20 w-20 px-5 mr-8"},null,-1)),ae(" "+z(w(f)("details.item.loading")),1)],2))}}}),It=ie(Mt,[["__scopeId","data-v-3128330a"]]),Et={class:"relative h-full"},Ct={class:"detailsContentSection overflow-y-auto h-full"},jt=G({__name:"details-screen",props:{panel:{type:Object}},setup(d){const{t:b}=Z(),n=te("iApi"),c=W(),v=x([]),$=x([]),y=x([]),k=x(!1),f=x(""),l=I(()=>c.activeGreedy),m=I(()=>c.payload),o=I(()=>c.properties),e=p=>{f.value=p},r=p=>y.value.find(E=>E.uid===p),T=p=>{p!==void 0&&(c.activeGreedy=p.length===0?0:p[0].requestTime,y.value=p,D(p))},D=p=>{if(f.value){const E=r(f.value);E?E.loading.then(()=>{E.requestTime===l.value&&(E.items.length>0?(c.activeGreedy=0,k.value=!1):C(p))}):C(p)}else C(p)},C=(p,E)=>{let g;if(E)g=E;else{const M=c.properties,S=p.map(u=>[M[u.layerId]?.priority??50,u.layerId]),i=new Set(S.map(u=>u[0]));g=[],i.forEach(u=>{const h=S.filter(j=>j[0]===u).map(j=>j[1]);g.push([u,h])}),g.sort((u,h)=>h[0]-u[0])}if(g.length===0){c.activeGreedy=0,k.value=!0;return}const O=g[g.length-1][1],N=p.filter(M=>O.includes(M.layerId)).map(M=>M.loading.then(()=>M.items.length>0?Promise.resolve(M):Promise.reject())),F=p.length===0?0:p[0].requestTime;Promise.any(N).then(M=>{M.requestTime===l.value&&(c.activeGreedy=0,f.value=M.uid,k.value=!1)}).catch(()=>{F===l.value&&(g.pop(),C(p,g))})};return X(()=>{$.value.push(U(m,p=>{T(p)},{deep:!1,immediate:!0}))}),ee(()=>{v.value.forEach(p=>n.event.off(p)),$.value.forEach(p=>p())}),(p,E)=>{const g=Me("panel-screen");return t(),V(g,{panel:d.panel},{header:ce(()=>[ae(z(w(c).origin==="toggleEvent"?w(b)("details.layers.title.gridOrigin"):w(b)("details.layers.title.identifyOrigin")),1)]),content:ce(()=>[_("div",Et,[y.value.length>1?(t(),V(Ve,{key:0,results:y.value,detailsProperties:o.value,selected:f.value,onSelectionChanged:e},null,8,["results","detailsProperties","selected"])):H("",!0),_("div",Ct,[k.value?(t(),a("div",{key:1,class:R(["text-center",{"ml-42":y.value.length>1}])},z(y.value.length>=1?w(b)("details.layers.results.empty"):w(b)("details.layers.results.empty.noLayers")),3)):(t(),V(It,{key:0,uid:f.value,results:y.value},null,8,["uid","results"]))])])]),_:1},8,["panel"])}}}),Bt=ie(jt,[["__scopeId","data-v-8dee3fda"]]);export{Bt as default};
