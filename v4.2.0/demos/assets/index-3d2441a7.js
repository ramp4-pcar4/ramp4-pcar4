import{hx as g,c9 as s,ch as p,c3 as w,c4 as I,c5 as x,k6 as u,c7 as z,cf as v,cb as d,ce as m,fo as i,gI as h,c6 as C,c8 as S,cg as k,ci as _,cj as y,ca as f,k7 as A,hH as M,hv as O,hw as F,bZ as N,gM as V}from"./main-8009ebf4.js";import"./preload-helper-388ac9d5.js";const B={},E={class:"border-b p-0 self-center w-2/3"};function H(a,o){return s(),p("span",E)}const b=g(B,[["render",H]]),D=i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"fill-current w-32 h-20"},[i("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),i("path",{d:"M0 0h24v24H0z",fill:"none"})],-1),Z=i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"fill-current w-32 h-20"},[i("path",{d:"M19 13H5v-2h14v2z"}),i("path",{d:"M0 0h24v24H0z",fill:"none"})],-1),j=w({__name:"zoom-nav",setup(a){const{t:o}=I(),e=x("iApi"),t=u(400,!0,()=>e.geo.map.zoomIn()),c=u(400,!0,()=>e.geo.map.zoomOut());return(l,n)=>{const r=z("mapnav-button");return s(),p("div",null,[v(r,{onClickFunction:m(t),tooltip:m(o)("mapnav.zoomIn")},{default:d(()=>[D]),_:1},8,["onClickFunction","tooltip"]),v(b),v(r,{onClickFunction:m(c),tooltip:m(o)("mapnav.zoomOut")},{default:d(()=>[Z]),_:1},8,["onClickFunction","tooltip"])])}}}),P=a=>(O("data-v-70c3f04e"),a=a(),F(),a),L={class:"mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12"},T={class:"flex flex-col"},Y=P(()=>i("span",{class:"py-1"},null,-1)),q={class:"mapnav-section bg-white-75 hover:bg-white"},G=w({__name:"mapnav",setup(a){const o=h(),e=C(()=>o.order.map(t=>o.items[t]).filter(t=>t.componentId));return(t,c)=>{const l=S("focus-list");return s(),p("div",L,[k((s(),p("div",T,[v(j,{class:"mapnav-section bg-white-75 hover:bg-white"}),Y,i("div",q,[(s(!0),p(_,null,y(e.value,(n,r)=>(s(),p(_,{key:n.id+"button"},[(s(),f(A(n.id+"-nav-button"))),r!==e.value.length-1?(s(),f(b,{key:0,class:"mapnav-divider"})):M("",!0)],64))),128))])])),[[l]])])}}});const J=g(G,[["__scopeId","data-v-70c3f04e"]]);class K extends N{mapnavStore=h(this.$vApp.$pinia);get config(){return super.config}_parseConfig(o){if(!o)return;const e=o.items.map(t=>({id:t}));this.mapnavStore.items=e.reduce((t,c)=>(t[c.id]=c,t),{}),this.mapnavStore.order=e.map(t=>t.id),this._validateItems()}_validateItems(){const o=["geolocator","zoom","home","fullscreen"];this.mapnavStore.order.forEach(e=>{(this.$iApi.fixture.get(e)||o.includes(e))&&(this.mapnavStore.items[e].componentId=`${e}-nav-button`)})}}const Q={en:{"mapnav.zoomIn":"Zoom In","mapnav.zoomOut":"Zoom Out","mapnav.home":"Home","mapnav.fullscreen":"Full Screen","mapnav.geolocator":"Your Location","mapnav.geolocator.error.permission":"The location request was denied. Please check your browser permission settings.","mapnav.geolocator.error.internal":"Your location could not be found."},fr:{"mapnav.zoomIn":"Zoom avant","mapnav.zoomOut":"Zoom arrière","mapnav.home":"Accueil","mapnav.fullscreen":"Plein Écran","mapnav.geolocator":"Votre position","mapnav.geolocator.error.permission":"Demande de localisation refusée. Veuillez vérifier les paramètres d'autorisation de votre navigateur.","mapnav.geolocator.error.internal":"Votre emplacement n'a pu être trouvé."}};class W extends K{async added(){Object.entries(Q).forEach(n=>this.$iApi.$i18n.mergeLocaleMessage(...n));const{destroy:o,el:e}=this.mount(J,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(e.childNodes[0]),this._parseConfig(this.config);const c=this.$vApp.$watch(()=>this.config,n=>this._parseConfig(n)),l=this.$iApi.event.on(V.COMPONENT,()=>{this._parseConfig(this.config)});this.removed=()=>{c(),this.$iApi.event.off(l);const n=h(this.$vApp.$pinia),r={...n.items};Object.keys(r).forEach($=>n.removeItem($)),n.$reset(),o()}}}export{W as default};
