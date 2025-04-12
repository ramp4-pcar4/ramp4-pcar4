import{ek as P,eD as w,eI as ae,es as t,ew as a,ev as b,eB as Z,ex as Y,ey as U,g_ as de,eL as H,ez as I,gq as se,gL as Q,eo as M,eq as A,er as B,eM as ie,h0 as ve,el as R,j2 as ne,eG as W,eH as K,eJ as X,et as V,eA as T,eC as ee,jw as ce,ir as _e,gT as Le,jx as Ee,ec as te,eK as ue,ep as Me,eu as pe}from"./main-C3PVbFgd.js";import{T as je}from"./toggle-switch-control-DH-hPO3l.js";const ze={key:0,class:"relative"},Ce={key:0,class:"relative"},qe=["innerHTML"],Ie=["src"],He={key:1,class:"w-32 h-32"},Oe={class:"symbologyIcon"},$e=["innerHTML"],De=["src"],Ae={class:"badge z-50 rounded-full text-white absolute h-10 w-10 p-8 inline-flex items-center justify-center"},Be={key:0,class:"px-5"},Se={key:1,class:"inline-flex justify-center items-center relative"},Ne=P({__name:"symbology-stack",props:{layer:{type:Object,required:!0},result:{type:Object,required:!0}},setup(v){const k=v,i=w([]);return ae(()=>{i.value=k.layer.legend}),(d,c)=>v.result.loaded?(t(),a("div",ze,[b("div",{class:U(v.result.items.length===0?"opacity-50":"")},[i.value.length>1?(t(),a("div",Ce,[(t(!0),a(Z,null,Y(i.value.slice(0,3).reverse(),(_,f)=>(t(),a("div",{class:U(["absolute",[f==0?"symbol-0":f==1?"left-3":"left-6"]]),style:de({"z-index":3-f}),key:f},[i.value[f].svgcode?(t(),a("span",{key:0,class:"symbologyIcon w-28 h-28",innerHTML:i.value[f].svgcode},null,8,qe)):i.value[f].imgUrl?(t(),a("img",{key:1,class:"symbologyIcon w-28 h-28",src:i.value[f].imgUrl},null,8,Ie)):H("",!0)],6))),128))])):i.value.length>0?(t(),a("div",He,[b("div",Oe,[i.value[0].svgcode?(t(),a("span",{key:0,innerHTML:i.value[0].svgcode},null,8,$e)):i.value[0].imgUrl?(t(),a("img",{key:1,class:"symbologyIcon w-full h-full",src:i.value[0].imgUrl},null,8,De)):H("",!0)])])):H("",!0)],2),b("div",Ae,[v.result.loaded?(t(),a("div",Be,I(v.result.items.length),1)):H("",!0)])])):(t(),a("div",Se,c[0]||(c[0]=[b("div",{class:"symbologyIcon h-32 w-32"},[b("div",{class:"relative animate-spin spinner h-24 w-24"})],-1)])))}}),Fe=se(Ne,[["__scopeId","data-v-496d788d"]]),Pe=["content"],Ge={class:"symbologyLayerName truncate"},Ue=P({__name:"symbology-item",props:{layer:{type:Object,required:!0},result:{type:Object,required:!0},selected:{type:Boolean,required:!0}},setup(v){const k=Q(),i=M(()=>k.properties),d=v,c=()=>{const _=d.layer;return _&&i.value[_.id]&&i.value[_.id].name?i.value[_.id].name:_?.name??""};return(_,f)=>{const x=A("tippy");return B((t(),a("button",{class:U(["flex flex-grow justify-start items-center px-7 py-10 default-focus-style symbologyStackButton truncate",v.selected?"detailsButtonSelected":"px-11"]),onClick:f[0]||(f[0]=ve(()=>{},["stop"])),content:c()},[ie(Fe,{class:"symbStack w-32 h-32 mr-10",layer:v.layer,result:v.result},null,8,["layer","result"]),b("div",Ge,I(c()),1)],10,Pe)),[[x,{placement:"right",sticky:!0}]])}}}),Ke=["content"],Re=P({__name:"symbology-list",props:{results:{type:Object,required:!0},selected:{type:String,required:!0}},emits:["selection-changed"],setup(v,{emit:k}){const{t:i}=R(),d=ne(),c=w(),_=()=>{c.value._tippy.hide()},f=g=>{g.key==="Tab"&&c.value?.matches(":focus")&&c.value._tippy.show()},x=k,m=v,l=w(""),y=w([]),u=w(!1),e=w(!1),r=g=>d.getLayerByUid(g),j=g=>{l.value=g,x("selection-changed",g),u.value=!1},$=()=>{e.value||setTimeout(()=>{u.value=e.value},500),e.value=!0},C=()=>{u.value=e.value=!1},p=()=>{e.value||(u.value=!0),e.value=!0},z=()=>{u.value=e.value=!1};return W(()=>{y.value.push(K(m,()=>{l.value=m.selected}))}),ae(()=>{c.value?.addEventListener("blur",_),c.value?.addEventListener("keyup",f)}),X(()=>{y.value.forEach(g=>g()),c.value?.removeEventListener("blur",_),c.value?.removeEventListener("keyup",f)}),(g,N)=>{const D=A("focus-item"),F=A("focus-list"),L=A("tippy");return B((t(),a("div",{class:U(["symbology-list absolute overflow-hidden z-50 p-0 w-48 bg-white text-sm inline-flex flex-col",{"symbology-list-expanded":u.value}]),onMouseover:$,onMouseleave:C,onFocus:p,onBlur:ve(z,["self"]),content:T(i)("details.layers.results.list.tooltip"),ref_key:"el",ref:c},[(t(!0),a(Z,null,Y(m.results,(O,n)=>(t(),a("div",{class:"flex justify-start relative",key:n},[B((t(),V(Ue,{key:O.uid,layer:r(O.uid),result:O,selected:O.uid===l.value,onClick:o=>j(O.uid)},null,8,["layer","result","selected","onClick"])),[[D]])]))),128))],42,Ke)),[[F],[L,{trigger:"manual",placement:"top-start",touch:!1}]])}}}),Ve={class:"inline font-bold"},Ze=["innerHTML"],Je=P({__name:"esri-default",props:{fixtureFields:{type:Object,required:!1},fields:{type:Object,required:!0},identifyData:{type:Object,required:!0}},setup(v){const{t:k}=R(),i=ee("iApi"),d=v,c=(l,y,u,e)=>{const r=l.find(j=>j[y].toLowerCase()===u.toLowerCase());r&&delete e[r.name]},_=()=>{const l=Object.assign({},d.identifyData.data);c(d.fields,"type","geometry",l),i?.ui.exposeOids||c(d.fields,"type","oid",l),i?.ui.exposeMeasurements||(c(d.fields,"name","shape_length",l),c(d.fields,"name","shape_area",l));const y={};d.fields.forEach(e=>{const r=d.fixtureFields?.find(j=>e.name===j.field);y[e.name]={name:r?.alias||e.alias||e.name,type:e.type,visible:r?.visible??!0}});const u={};Object.keys(l).forEach(e=>{const r=y[e];if(r&&r.visible){const j=l[e];u[e]={value:typeof j=="number"?i?.ui.formatNumber(j):j,alias:r.name,type:r.type}}});for(const[e]of Object.entries(u))i.ui.isPlainText(u[e].value)&&(u[e].value=i.ui.escapeHtml(u[e].value));return u},f=(l,y,u)=>{switch(u){case"date":return m(l);default:return x(l,y)}},x=(l,y)=>{if(!l)return l;if(l.trim().match(/\.(jpeg|jpg|gif|png)$/)||l.trim().match(/^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i))return`<img src="${l}" alt="${k("details.item.alert.defaultAltText",{alias:y})}" />`;const u="underline text-blue-700 break-all",e=document.createElement("div");return e.innerHTML=l.trim(),e.firstElementChild?.tagName=="A"?(e.firstElementChild.className=u,e.innerHTML):ce(l,{className:u,target:"_blank",validate:{url:r=>/^https?:\/\//.test(r)}})},m=l=>{const y=parseInt(l);return isNaN(y)?l:new Date(y).toISOString().split("T")[0]};return(l,y)=>(t(),a("div",null,[(t(!0),a(Z,null,Y(_(),(u,e,r)=>(t(),a("div",{class:"p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",key:r},[b("span",Ve,I(u.alias),1),y[0]||(y[0]=b("span",{class:"flex-auto"},null,-1)),b("span",{class:"inline",innerHTML:f(u.value,u.alias,u.type)},null,8,Ze)]))),128))]))}}),Ye=["innerHTML"],Qe={key:1},We=P({__name:"html-default",props:{identifyData:{type:Object,required:!0}},setup(v){const{t:k}=R();return(i,d)=>v.identifyData?(t(),a("div",{key:0,class:"whitespace-pre-wrap break-words h-full overflow-auto",innerHTML:v.identifyData.data.data??v.identifyData.data},null,8,Ye)):(t(),a("div",Qe,I(T(k)("details.layers.results.empty")),1))}}),Xe={class:"relative flex flex-grow truncate"},et={key:0,class:"flex flex-grow items-center truncate"},tt={class:"flex p-8 items-center"},lt=["innerHTML"],at={key:1,class:"symbologyIcon p-6"},st=["content","innerHTML","tabindex"],it={key:1,class:"flex p-6 flex-grow"},nt={key:2,class:"zoomButton text-center p-3"},ut=["content","aria-label"],rt={key:0,class:"m-auto animate-spin spinner h-20 w-20"},ot={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"green",class:"m-auto w-20 h-20"},dt={key:2,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"red",class:"m-auto w-20 h-20"},vt=["innerHTML"],me=P({__name:"result-item",props:{uid:{type:String,required:!0},data:{type:Object,required:!0},open:{type:Boolean,required:!1},inList:{type:Boolean,required:!1}},setup(v){const k=ne(),i=v,d=ee("iApi"),c=w([]),_=Q(),{t:f}=R(),x=w(!1),m=w(""),l=w("none"),y=w(),u=()=>k.getLayerByUid(i.uid),e=M(()=>_.properties),r=M(()=>_.defaultTemplates),j=M(()=>u()?.supportsFeatures??!1),$=M(()=>u()?.mapLayer??!1),C=M(()=>{const n=u();let o=n&&i.data.loaded?n.nameValue(i.data.data):d.$i18n.t("details.items.title");return d.ui.isPlainText(o)&&(o=d.ui.escapeHtml(o)),o}),p=n=>{if(typeof n=="string"){const o="underline text-blue-700 break-all",h=document.createElement("div");return h.innerHTML=n.trim(),h.firstElementChild?.tagName=="A"?(h.firstElementChild.className=o,h.innerHTML):ce(n,{className:o,target:"_blank",validate:{url:q=>/^https?:\/\//.test(q)}})}return n},z=()=>{L("none"),i.data.loaded?g():i.data.load().then(()=>{g()})},g=()=>{if(m.value="",!(i.data&&i.data.loaded))return;const n=u();if(n===void 0){console.warn(`could not find layer for uid ${i.uid} during icon lookup`);return}if(n.supportsFeatures){const o=n.oidField;n.getIcon(i.data.data[o]).then(h=>{m.value=h})}},N=M(()=>{const n=u();return n&&e.value[n.id]&&e.value[n.id].template?e.value[n.id].template:r.value&&r.value[i.data.format]?r.value[i.data.format]:j.value?Je:We}),D=M(()=>j.value?u()?.fields||[]:[]),F=M(()=>{const n=u();if(n&&e.value[n.id]&&e.value[n.id].fields)return e.value[n.id].fields}),L=n=>{n==="zoomed"||n==="error"?setTimeout(()=>{l.value=n,y.value?._tippy.show(),setTimeout(()=>{y.value?._tippy.hide(),l.value="none"},3e3)},300):l.value=n},O=()=>{if(l.value!=="none")return;L("zooming");const n=u();if(n===void 0||!n.isLoaded){console.warn(`Could not find layer for uid ${i.uid} during zoom geometry lookup`),L("error");return}if(!i.data.loaded){console.warn("Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs."),L("error");return}const o=i.data.data[n.oidField],h=()=>{const q={getGeom:!0};n.getGraphic(o,q).then(S=>{S.geometry.invalid()?(console.error(`Could not find graphic for objectid ${o}`),L("error")):(d.geo.map.zoomMapTo(S.geometry),L("zoomed"),d.updateAlert(d.$i18n.t("details.item.alert.zoom")))}).catch(()=>{L("error")})};n.layerType===Le.FEATURE&&n.geomType!==Ee.POINT?n.getGraphicExtent(o).then(q=>{d.geo.map.zoomMapTo(q),L("zoomed"),d.updateAlert(d.$i18n.t("details.item.alert.zoom"))}).catch(()=>{h()}):h()};return W(()=>{c.value.push(K(i,()=>{z()},{deep:!1,immediate:!0}))}),X(()=>{c.value.forEach(n=>n())}),(n,o)=>{const h=A("truncate"),q=A("tippy");return t(),a(Z,null,[b("div",Xe,[j.value?(t(),a("div",et,[b("div",tt,[v.data.loaded&&m.value?(t(),a("span",{key:0,class:"flex-none symbologyIcon",innerHTML:m.value},null,8,lt)):(t(),a("div",at,o[3]||(o[3]=[b("div",{class:"animate-spin spinner h-20 w-20"},null,-1)])))]),v.data.loaded?B((t(),a("span",{key:0,class:"pl-3 text-left flex-grow itemName",content:C.value,innerHTML:p(C.value),onTouchstart:o[0]||(o[0]=S=>x.value=!0),onTouchend:o[1]||(o[1]=S=>x.value=!1),tabindex:v.inList?-1:0},null,40,st)),[[h,{options:{placement:"top-start",offset:()=>x.value?[0,25]:[0,0]}}]]):(t(),a("div",it,I(T(f)("details.loading")),1)),v.data.loaded?(t(),a("span",nt,[$.value?B((t(),a("button",{key:0,type:"button",content:T(f)(`details.item.zoom${l.value==="none"?"":`.${l.value}`}`),"aria-label":T(f)(`grid.cells.zoom${l.value==="none"?"":`.${l.value}`}`),ref_key:"zoomButton",ref:y,onClick:o[2]||(o[2]=S=>{S.stopPropagation(),O()}),class:"text-gray-600 w-24 h-24 p-2 flex justify-center items-center"},[l.value==="zooming"?(t(),a("div",rt)):l.value==="zoomed"?(t(),a("svg",ot,o[4]||(o[4]=[b("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"},null,-1)]))):l.value==="error"?(t(),a("svg",dt,o[5]||(o[5]=[b("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1)]))):(t(),a("span",{key:3,innerHTML:T(d).ui.getZoomIcon()},null,8,vt))],8,ut)),[[q,{placement:"bottom"}]]):H("",!0)])):H("",!0)])):H("",!0)]),v.open?(t(),V(_e(N.value),{key:0,identifyData:v.data,fields:D.value,fixtureFields:F.value,class:"p-8"},null,8,["identifyData","fields","fixtureFields"])):H("",!0)],64)}}}),ct={key:0,class:"layerName w-full flex-grow p-5 pb-8 font-bold truncate",tabIndex:"0"},pt={key:1,class:"p-8 mb-8 bg-gray-100 flex justify-between"},mt={for:"toggle"},yt={key:2,class:"flex flex-col justify-between p-8 mb-8 bg-gray-100"},ft={class:"flex"},gt=["aria-label"],ht=["content","aria-label","disabled"],bt={class:"px-3 text-center flex-grow"},kt=["content","aria-label","disabled"],xt={key:3},wt={key:0},Tt=["content"],_t=["onClick"],Lt={key:1,class:"text-center"},Et={key:4,class:"p-5"},Mt=P({__name:"result-list",props:{uid:{type:String,required:!0},results:{type:Object,required:!0}},setup(v){const k=w(),i=()=>{k.value._tippy.hide()},d=s=>{s.key==="Tab"&&k.value?.matches(":focus")&&k.value._tippy.show()},c=ee("iApi"),_=Q(),f=ne(),x=v,{t:m}=R(),l=w(!1),y=w(c.fixture.get("details")),u=w(!0),e=w(!1),r=w(0),j=w(20),$=w([]),C=w([]),p=M(()=>_.activeGreedy),z=M(()=>_.properties),g=M(()=>r.value+j.value),N=()=>f.getLayerByUid(x.uid),D=()=>x.results.find(s=>s.uid===x.uid),F=M(()=>D()?.loaded??!1),L=M(()=>D()?.requestTime),O=M(()=>l.value&&(!e.value&&h().length>1||e.value&&h().length>j.value)),n=M(()=>{const s=N();return s&&z.value[s.id]&&z.value[s.id].name?z.value[s.id].name:s?.name??""}),o=M(()=>x.uid),h=()=>{const s=D();return s?s.items:[]},q=M(()=>h()[r.value]),S=M(()=>{if(y.value.hasHilighter()){const s=N();if(s)return s.mapLayer&&s.supportsFeatures}return!1}),ye=s=>{u.value=s,_.hilightToggle=s,G()},fe=()=>{const s=N();r.value=r.value??0,u.value=_.hilightToggle??u.value,e.value=!1,l.value=!!s,G()},re=s=>{e.value?(r.value+=s*j.value,G()):r.value+=s},G=()=>{const s=h();if(u.value&&F.value&&s.length>0&&S.value)if(e.value)y.value.hilightDetailsItems(s.slice(r.value,g.value),x.uid);else{const E=s[r.value];E&&y.value.hilightDetailsItems([E],x.uid)}else y.value.removeDetailsHilight()},ge=()=>{e.value=!0,r.value=Math.floor(r.value/j.value)*j.value,G()},he=()=>{y.value.removeDetailsHilight(),C.value.forEach(s=>s()),$.value.forEach(s=>c.event.off(s))},be=()=>{y.value.removeDetailsHilight()},ke=s=>{const E=r.value;r.value=s,e.value=!1,E===s&&G()};return ae(()=>{$.value.push(c.event.on(te.LAYER_REMOVE,s=>{const E=c.panel.get("details");x.uid===s.uid&&E&&E.close()})),$.value.push(c.event.on(te.PANEL_CLOSED,s=>{s.id==="details"&&he()})),$.value.push(c.event.on(te.PANEL_MINIMIZED,s=>{s.id==="details"&&be()})),$.value.push(c.event.on(te.MAP_BASEMAPCHANGE,s=>{u.value&&s.schemaChanged&&G()})),k.value?.addEventListener("blur",i),k.value?.addEventListener("keyup",d)}),W(()=>{C.value.push(K(q,()=>{e.value||(fe(),q.value===void 0&&y.value.removeDetailsHilight())},{deep:!1,immediate:!0})),C.value.push(K(o,()=>{const s=x.uid;if(e.value&&s){const E=D();E&&E.loading.then(()=>{x.uid===s&&e.value&&G()})}},{deep:!1,immediate:!0})),C.value.push(K(L,()=>{r.value=0})),C.value.push(K(()=>x.uid,()=>{r.value=0}))}),X(()=>{k.value?.removeEventListener("blur",i),k.value?.removeEventListener("keyup",d)}),(s,E)=>{const xe=A("truncate"),le=A("tippy"),we=A("focus-item"),Te=A("focus-list");return F.value&&p.value===0?(t(),a("div",{key:0,class:"detailsContent relative flex flex-col flex-grow pl-5",style:de(v.results.length>1?{"margin-left":"42px"}:"")},[l.value?B((t(),a("h1",ct,[ue(I(n.value),1)])),[[xe,{options:{placement:"top-start"}}]]):H("",!0),S.value?(t(),a("div",pt,[b("label",mt,I(T(m)("details.togglehilight.title")),1),ie(je,{config:{value:u.value,disabled:!1},onToggled:ye},null,8,["config"])])):H("",!0),O.value?(t(),a("div",yt,[b("div",ft,[e.value?H("",!0):(t(),a("button",{key:0,type:"button",class:"px-8 font-bold hover:bg-gray-200 focus:bg-gray-200","aria-label":T(m)("details.item.see.list"),onClick:E[0]||(E[0]=J=>ge())},I(T(m)("details.item.see.list")),9,gt)),b("div",{class:U(["flex ml-auto bg-gray-200 py-8 items-center",{"w-full":e.value}])},[B((t(),a("button",{type:"button",content:T(m)(e.value?"details.items.previous":"details.item.previous.item"),onClick:E[1]||(E[1]=J=>re(-1)),class:"mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default","aria-label":T(m)(e.value?"details.items.previous":"details.item.previous.item"),disabled:r.value===0},E[3]||(E[3]=[b("svg",{height:"24",width:"24",viewBox:"0 0 23 23"},[b("g",null,[b("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})])],-1)]),8,ht)),[[le,{placement:"top"}]]),b("span",bt,I(e.value?T(m)("details.items.range",[r.value+1,Math.min(g.value,h().length),h().length]):T(m)("details.item.count",[r.value+1,h().length])),1),B((t(),a("button",{type:"button",content:T(m)(e.value?"details.items.next":"details.item.next.item"),onClick:E[2]||(E[2]=J=>re(1)),class:"mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default","aria-label":T(m)(e.value?"details.items.next":"details.item.next.item"),disabled:!e.value&&r.value===h().length-1||e.value&&g.value>=h().length},E[4]||(E[4]=[b("svg",{height:"24",width:"24",viewBox:"0 0 23 23"},[b("g",null,[b("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"})])],-1)]),8,kt)),[[le,{placement:"top"}]])],2)])])):H("",!0),l.value?(t(),a("div",xt,[h().length>0?(t(),a("div",wt,[e.value?B((t(),a("div",{key:0,class:"flex flex-col",content:T(m)("details.layers.results.list.tooltip"),ref_key:"el",ref:k},[(t(!0),a(Z,null,Y(h().slice(r.value,g.value),(J,oe)=>B((t(),a("button",{class:"flex flex-grow truncate default-focus-style hover:bg-gray-200",key:oe,onClick:Ht=>ke(r.value+oe)},[ie(me,{data:J,uid:v.uid,open:!1,"in-list":!0},null,8,["data","uid"])],8,_t)),[[we,"show-truncate"]])),128))],8,Tt)),[[Te],[le,{trigger:"manual",placement:"top-start",touch:!1}]]):(t(),V(me,{key:1,data:q.value,uid:v.uid,open:!0,"in-list":!1},null,8,["data","uid"]))])):(t(),a("div",Lt,I(T(m)("details.layers.results.empty.currentLayer")),1))])):(t(),a("div",Et,I(T(m)("details.item.no.data")),1))],4)):(t(),a("div",{key:1,class:U(["flex justify-center py-10 items-center",v.results.length>1?"ml-42":""])},[E[5]||(E[5]=b("span",{class:"animate-spin spinner h-20 w-20 px-5 mr-8"},null,-1)),ue(" "+I(T(m)("details.item.loading")),1)],2))}}}),jt=se(Mt,[["__scopeId","data-v-3706255a"]]),zt={class:"relative h-full"},Ct={class:"detailsContentSection overflow-y-auto h-full"},qt=P({__name:"details-screen",props:{panel:{type:Object}},setup(v){const{t:k}=R(),i=ee("iApi"),d=Q(),c=w([]),_=w([]),f=w([]),x=w(!1),m=w(""),l=M(()=>d.activeGreedy),y=M(()=>d.payload),u=M(()=>d.properties),e=p=>{m.value=p},r=p=>f.value.find(z=>z.uid===p),j=p=>{p!==void 0&&(d.activeGreedy=p.length===0?0:p[0].requestTime,f.value=p,$(p))},$=p=>{if(m.value){const z=r(m.value);z?z.loading.then(()=>{z.requestTime===l.value&&(z.items.length>0?(d.activeGreedy=0,x.value=!1):C(p))}):C(p)}else C(p)},C=(p,z)=>{let g;if(z)g=z;else{const L=d.properties,O=p.map(o=>[L[o.layerId]?.priority??50,o.layerId]),n=new Set(O.map(o=>o[0]));g=[],n.forEach(o=>{const h=O.filter(q=>q[0]===o).map(q=>q[1]);g.push([o,h])}),g.sort((o,h)=>h[0]-o[0])}if(g.length===0){d.activeGreedy=0,x.value=!0;return}const N=g[g.length-1][1],D=p.filter(L=>N.includes(L.layerId)).map(L=>L.loading.then(()=>L.items.length>0?Promise.resolve(L):Promise.reject())),F=p.length===0?0:p[0].requestTime;Promise.any(D).then(L=>{L.requestTime===l.value&&(d.activeGreedy=0,m.value=L.uid,x.value=!1)}).catch(()=>{F===l.value&&(g.pop(),C(p,g))})};return W(()=>{_.value.push(K(y,p=>{j(p)},{deep:!1,immediate:!0}))}),X(()=>{c.value.forEach(p=>i.event.off(p)),_.value.forEach(p=>p())}),(p,z)=>{const g=Me("panel-screen");return t(),V(g,{panel:v.panel},{header:pe(()=>[ue(I(T(d).origin==="toggleEvent"?T(k)("details.layers.title.gridOrigin"):T(k)("details.layers.title.identifyOrigin")),1)]),content:pe(()=>[b("div",zt,[f.value.length>1?(t(),V(Re,{key:0,results:f.value,detailsProperties:u.value,selected:m.value,onSelectionChanged:e},null,8,["results","detailsProperties","selected"])):H("",!0),b("div",Ct,[x.value?(t(),a("div",{key:1,class:U(["text-center",{"ml-42":f.value.length>1}])},I(f.value.length>=1?T(k)("details.layers.results.empty"):T(k)("details.layers.results.empty.noLayers")),3)):(t(),V(jt,{key:0,uid:m.value,results:f.value},null,8,["uid","results"]))])])]),_:1},8,["panel"])}}}),It=se(qt,[["__scopeId","data-v-150a1d19"]]);export{It as default};
