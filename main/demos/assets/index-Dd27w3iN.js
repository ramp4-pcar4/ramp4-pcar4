const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./screen-IzK7HoUj.js","./main-Bd_03BNf.js","./preload-helper-ExcqyqRp.js","./main-gKmidBZg.css","./marked.esm-DmSrlTiT.js","./screen-DcX-wckC.css"])))=>i.map(i=>d[i]);
import{_ as a}from"./preload-helper-ExcqyqRp.js";import{F as r,gU as o,ek as h,eC as c,el as u,ep as m,et as v,eu as d,eA as f,eN as _,es as g,ev as s,fU as A,fW as x}from"./main-Bd_03BNf.js";class $ extends r{toggleHelp(t){const e=this.$iApi.panel.get("help");this.$iApi.panel.toggle(e,t)}get config(){return super.config}_parseConfig(t){const e=o(this.$vApp.$pinia);e.location=t?.location??"./help/",this.handlePanelWidths(["help"]),this.handlePanelTeleports(["help"])}}const w=h({__name:"nav-button",setup(n){const t=c("iApi"),{t:e}=u(),i=()=>t.event.emit(_.HELP_TOGGLE);return(H,p)=>{const l=m("mapnav-button");return g(),v(l,{onClickFunction:i,tooltip:f(e)("help.title")},{default:d(()=>p[0]||(p[0]=[s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",class:"fill-current w-32 h-20"},[s("path",{d:"M0 0h24v24H0z",fill:"none"}),s("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"})],-1)])),_:1},8,["tooltip"])}}}),C={en:{"help.title":"Help","help.search":"Search Help","help.section.expand":"Expand section","help.section.collapse":"Collapse section","help.noResults":"Nothing is found. Please try a different search."},fr:{"help.title":"Aide","help.search":"Aide à la recherche","help.section.expand":"Développer une section","help.section.collapse":"Réduire une section","help.noResults":"Aucun résultat. Veuillez essayer une autre recherche."}};class k extends ${added(){this.$iApi.component("help-nav-button",w),this.$iApi.panel.register({help:{screens:{"help-screen":()=>A(a(()=>import("./screen-IzK7HoUj.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url))},style:{"flex-grow":"1","max-width":"750px"},alertName:"help.title"}},{i18n:{messages:C}}),this._parseConfig(this.config);const t=this.$vApp.$watch(()=>this.config,e=>this._parseConfig(e));this.removed=()=>{t(),this.$iApi.fixture.exists("mapnav")&&x(this.$vApp.$pinia).removeItem("help"),o(this.$vApp.$pinia).$reset(),this.$iApi.panel.remove("help")}}}export{k as default};
