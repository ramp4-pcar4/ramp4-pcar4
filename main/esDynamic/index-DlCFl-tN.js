import{ek as n,el as o,eC as m,ep as r,et as c,eu as b,eA as v,es as h,ev as e,F as d,fR as u,fS as f,fT as g}from"./main-C3PVbFgd.js";const w=n({__name:"nav-button",setup(t){const{t:s}=o(),p=m("iApi"),i=()=>p?.panel.toggle("basemap");return($,a)=>{const l=r("mapnav-button");return h(),c(l,{onClickFunction:i,tooltip:v(s)("basemap.title")},{default:b(()=>a[0]||(a[0]=[e("svg",{class:"fill-current w-32 h-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("path",{d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"})],-1)])),_:1},8,["tooltip"])}}}),x={en:{"basemap.select":"Select basemap","basemap.title":"Basemap"},fr:{"basemap.select":"S\xE9lectionner la carte de base","basemap.title":"Carte de base"}};class A extends d{added(){this.$iApi.component("basemap-nav-button",w),this.$iApi.panel.register({id:"basemap",config:{screens:{"basemap-component":()=>u(import("./screen-BoG_sUY8.js"))},button:{tooltip:"basemap.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/><path d="M0 0h24v24H0z" fill="none" /></svg>'},alertName:"basemap.title"}},{i18n:{messages:x}}),this.handlePanelTeleports(["basemap"])}removed(){this.$iApi.fixture.exists("appbar")&&f(this.$vApp.$pinia).removeButton("basemap"),this.$iApi.fixture.exists("mapnav")&&g(this.$vApp.$pinia).removeItem("basemap"),this.$iApi.panel.remove("basemap")}}export{A as default};
