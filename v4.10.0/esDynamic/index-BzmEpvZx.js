import{fI as w,fJ as E,f_ as y,f$ as h,km as m,g4 as _,g9 as p,g5 as T,fU as A,fT as M,fX as x,fY as R,fQ as $,jO as I,F as P}from"./main-DCIX61zy.js";const D={en:{"panguard.instructions":"Use two fingers to pan the map"},fr:{"panguard.instructions":"Utilisez deux doigts pour faire un panoramique de la carte"}},S={class:"pg-label"},C=w({__name:"map-panguard",setup(v){const{t:r}=E(),a=y("iApi"),t=h(),u=h(-1),o=m([]),n=m([]);_(()=>{c(),n.push(a.event.on(p.MAP_CREATED,()=>{c()})),n.push(a.event.on(p.MAP_DESTROYED,()=>{o.forEach(e=>e.remove())})),n.push(a.event.on(p.MAP_REFRESH_START,()=>{o.forEach(e=>e.remove())})),n.push(a.event.on(p.MAP_REFRESH_END,()=>{c()}))}),T(()=>{n.forEach(e=>a.event.off(e)),o.forEach(e=>e.remove())});const c=()=>{const e=new Map;a.geo.map.viewPromise.then(()=>{o.push(a.geo.map.esriView.on("pointer-down",s=>{s.pointerType==="touch"&&e.set(s.pointerId,{x:s.x,y:s.y})})),o.push(a.geo.map.esriView.on(["pointer-up","pointer-leave"],s=>{s.pointerType==="touch"&&window.setTimeout(()=>{e.delete(s.pointerId)},200)})),o.push(a.geo.map.esriView.on("pointer-move",s=>{const{pointerId:f,pointerType:g,x:d,y:l}=s,i=e.get(f);if(!i||g!=="touch"||e.size!==1){t.value.classList.remove("pg-active");return}Math.sqrt(Math.pow(d-i.x,2)+Math.pow(l-i.y,2))<20||(t.value.classList.add("pg-active"),u.value!==-1&&clearTimeout(u.value),u.value=window.setTimeout(()=>{t.value.classList.remove("pg-active")},2e3),window.scrollBy(i.x-d,i.y-l))}))})};return(e,s)=>($(),A("div",{class:"pg",ref_key:"panGuard",ref:t},[M("p",S,x(R(r)("panguard.instructions")),1)],512))}}),F=I(C,[["__scopeId","data-v-e91f9000"]]);class L extends P{added(){Object.entries(D).forEach(t=>this.$iApi.$i18n.mergeLocaleMessage(...t));const{destroy:r,el:a}=this.mount(F,{app:this.$element});this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(a.childNodes[0]),this.removed=()=>{r()}}}export{L as default};
