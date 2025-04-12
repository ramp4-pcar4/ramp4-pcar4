import{dM as B,dN as N,e2 as R,dQ as q,dR as Z,dU as l,dV as x,dW as U,dX as C,d_ as I,e0 as O,eb as M,fN as j,dY as b,im as te,e3 as k,e7 as ae,e8 as G,e9 as J,dS as H,dT as T,fM as K,gp as ne,io as D,ip as ie,iq as oe,d$ as se,dO as le,f7 as W,e6 as re,ir as pe,e1 as _,dZ as L,ec as F,is as V,hx as Y,it as de,F as ue,dE as ce}from"./main-Dv0FawL-.js";class X{id;options;componentId;constructor(a){const r={options:{},...a};({id:this.id,options:this.options,componentId:this.componentId}=r)}}const me=["innerHTML"],P=B({__name:"default-button",props:{panelId:{type:String,required:!0},minimize:{type:Boolean,default:!1},overflow:{type:Boolean}},setup(f){const{t:a}=N(),r=R("iApi"),n=f,c=q(()=>r?.panel.get(n.panelId)?.button),s=()=>{n.minimize?r?.panel.toggleMinimize(n.panelId):r?.panel.toggle(n.panelId)};return(e,$)=>{const p=Z("appbar-button");return c.value?(l(),x(p,{key:0,onClickFunction:s,tooltip:O(a)(c.value.tooltip),id:f.panelId},{default:U(()=>[C("div",{class:I(["default fill-current w-24 h-24 ml-8 sm:ml-20",{"ml-20":f.overflow}]),innerHTML:c.value.icon},null,10,me)]),_:1},8,["tooltip","id"])):M("",!0)}}}),ve={},fe={class:"border-b p-0 self-center w-2/3"};function he(f,a){return l(),b("span",fe)}const ee=j(ve,[["render",he],["__scopeId","data-v-5d32b715"]]);var be={name:"maxSize",enabled:!0,phase:"main",requiresIfExists:["offset","preventOverflow","flip"],fn:function(f){var a=f.state,r=f.name,n=f.options,c=te(a,n),s=a.modifiersData.preventOverflow||{x:0,y:0},e=s.x,$=s.y,p=a.rects.popper,d=p.width,h=p.height,z=a.placement.split("-"),w=z[0],E=w==="left"?"left":"right",v=w==="top"?"top":"bottom";a.modifiersData[r]={width:d-c[E]-e,height:h-c[v]-$}}};const ge=["content","aria-label"],ye=B({__name:"more-button",props:{position:{type:String,default:"right-end"},popperOptions:{type:Object,default(){return{}}},numItems:{type:Number,default:1},renderWatch:{type:Number,default:0}},emits:["updateParent"],setup(f,{expose:a,emit:r}){const{t:n}=N(),c=R("iApi"),s=f,e=r;function $(){e("updateParent")}const p=k(!1),d=k(0),h=k(),z=k(),w=k();function E(){$(),D(()=>{v(),p.value=!p.value})}ae(()=>s.renderWatch,()=>{E()});const v=()=>{p.value=!p.value;const u=c.$vApp.$el.querySelector(".inner-shell"),g={name:"applyMaxSize",enabled:!0,phase:"beforeWrite",requires:["maxSize"],fn({state:m}){const{width:i}=m.modifiersData.maxSize;m.styles.popper={...m.styles.popper,maxWidth:`${i}px`,maxHeight:`${u.offsetHeight-45}px`};const y=Math.min(s.numItems<=0?0:55+44*(s.numItems-1),u.offsetHeight-45);m.styles.popper.height=`${y}px`,w?.value?.offsetHeight&&(w.value.style.height=`${y}px`),m.styles.popper.overflowY="auto",m.styles.popper.overflowX="hidden"}};z.value&&w.value&&(d.value++,ie(z.value,w.value,{placement:s.position||"right-end",modifiers:[{...be,options:{boundary:u}},g,{name:"offset",options:{offset:[0,5]}},{name:"preventOverflow",enabled:!0,options:{boundary:u}}],...s.popperOptions})),d.value===1&&E()};return G(()=>{window.addEventListener("click",u=>{u.target instanceof HTMLElement&&!h.value?.contains(u.target)&&(p.value=!1)},{capture:!0})}),J(()=>{window.removeEventListener("click",u=>{u.target instanceof HTMLElement&&!h.value?.contains(u.target)&&(p.value=!1)},{capture:!0})}),a({rerender:E}),(u,g)=>{const m=H("focus-item"),i=H("tippy");return l(),b("div",{class:"appbar-item relative inset-x-0 w-full text-center",ref_key:"el",ref:h},[T((l(),b("button",{type:"button",class:"text-gray-400 w-full h-48 focus:outline-none hover:text-white",onClick:g[0]||(g[0]=y=>v()),content:O(n)("appbar.more"),"aria-label":O(n)("appbar.more"),ref_key:"dropdownTrigger",ref:z},g[1]||(g[1]=[C("svg",{class:"fill-current w-24 h-24 m-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[C("path",{d:"M0 0h24v24H0z",fill:"none"}),C("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})],-1)]),8,ge)),[[m],[i,{placement:"right-end"}]]),T(C("div",{id:"dropdown",class:"dropdown shadow-md border border-gray:200 absolute w-64 flex flex-col bg-white rounded",ref_key:"dropdown",ref:w},[ne(u.$slots,"default",{},void 0,!0)],512),[[K,p.value]])],512)}}}),$e=j(ye,[["__scopeId","data-v-93661050"]]),we={key:0,class:"number absolute top-1 right-2 text-white w-18 rounded-full"},xe=B({__name:"appbar-button",setup(f){const a=oe(),{t:r}=N(),n=R("iApi"),c=q(()=>a.notificationNumber),s=()=>{n.panel.toggle("notifications")};return(e,$)=>{const p=Z("appbar-button",!0);return l(),x(p,{onClickFunction:s,tooltip:O(r)("notifications.title"),class:"notification-button",id:""},{default:U(()=>[$[0]||($[0]=C("svg",{class:"fill-current w-24 h-24 mx-8 sm:mx-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[C("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"})],-1)),c.value&&c.value>0?(l(),b("span",we,se(c.value),1)):M("",!0)]),_:1},8,["tooltip"])}}}),ke=j(xe,[["__scopeId","data-v-787da765"]]),_e=["content"],Ie=B({__name:"appbar",setup(f){const a=le(),r=W(),n=k(0),c=k(0),s=q(()=>r.visible),e=q(()=>r.temporary),{t:$}=N(),p=k(!1),d=k({}),h=k(),z=()=>{D(()=>{V()?.proxy?.$forceUpdate()})},w=()=>{h.value._tippy.hide()},E=v=>{v.key==="Tab"&&h.value?.matches(":focus")&&h.value._tippy.show()};return G(()=>{h.value?.addEventListener("blur",w),h.value?.addEventListener("keyup",E)}),re(()=>{const v=V();window.addEventListener("resize",()=>v?.proxy?.$forceUpdate())}),J(()=>{const v=V();window.removeEventListener("resize",()=>v?.proxy?.$forceUpdate()),h.value?.removeEventListener("blur",w),h.value?.removeEventListener("keyup",E)}),pe(()=>{D(()=>{const v=h.value;let u,g=[...v.children],m=g[g.length-2].getBoundingClientRect().top;a.mobileView||(m=v.getBoundingClientRect().bottom-38);let i=v.querySelector("#dropdown");for(let o=g.length-4;o>=0;o--){let A=g[o].getBoundingClientRect().bottom;if(m&&i&&(A>m||p.value&&A+56>m))g[o].classList.forEach(S=>{S.includes("identifier")&&(u=S.slice(11))}),u&&(d.value[u]=!0,u.includes("divider")||n.value++,c.value++),p.value||(p.value=!0);else if(A!==0)break}let y=v.querySelector("#more"),t=y.getBoundingClientRect().bottom;if(u=void 0,p.value&&m&&y&&i&&t!==0&&(t<=m-56||i.childElementCount==1&&t<=m)){let o=i.childElementCount,A=0;for(;t<=m-56||o==1;){let S=i.children[A];if(S&&(S.classList.forEach(Q=>{Q.includes("identifier")&&(u=Q.slice(11))}),u&&(d.value[u]=!1,u.includes("divider")||n.value--),t+=48,o-=1,A+=1),o===0){p.value=!1;break}}}Object.keys(d.value).forEach(o=>{v.querySelector(`.identifier-${o}`)||(delete d.value[o],o.includes("divider")||(n.value=Math.max(0,n.value-1)),c.value++)})})}),(v,u)=>{const g=H("focus-list"),m=H("tippy");return T((l(),b("div",{class:"absolute top-0 left-0 bottom-28 flex flex-col w-40 pointer-events-auto appbar z-50 sm:z-20 bg-black-75 sm:w-64 sm:bottom-38",content:O($)("panels.controls.items"),ref_key:"el",ref:h},[(l(!0),b(_,null,L(s.value,(i,y)=>(l(),b(_,null,[(l(!0),b(_,null,L(i,(t,o)=>(l(),b(_,null,[typeof t=="string"&&d.value[`${t}-${o}`]!==!0?(l(),x(P,{key:`${t}-${o}-default`,panelId:t,class:I(["appbar-item h-48",`identifier-${t}-${o}`])},null,8,["panelId","class"])):d.value[`${t}-${o}`]!==!0?(l(),x(Y(t.componentId),{key:`${t}-${o}-custom`,options:t.options,class:I(["appbar-item h-48",`identifier-${t}-${o}`]),id:t.id},null,8,["options","id","class"])):M("",!0)],64))),256)),d.value[`divider-${y}`]!==!0?(l(),x(ee,{class:I(["appbar-item",`identifier-divider-${y}`]),key:`${i}-${y}-default`},null,8,["class"])):M("",!0)],64))),256)),(l(!0),b(_,null,L(e.value?.filter(i=>d.value[`${i}-temp`]!==!0),i=>(l(),x(P,{panelId:i,minimize:!0,key:`${i}-temp`,class:I([`identifier-${i}-temp`,"appbar-item h-48"])},null,8,["panelId","class"]))),128)),T(F($e,{id:"more",numItems:n.value,renderWatch:c.value,onUpdateParent:z},{default:U(()=>[(l(!0),b(_,null,L(s.value,(i,y)=>(l(),b(_,{key:y},[(l(!0),b(_,null,L(i,(t,o)=>(l(),b(_,null,[typeof t=="string"&&d.value[`${t}-${o}`]?(l(),x(P,{key:`${t}-${o}-default`,panelId:t,class:I(["text-black hover:bg-gray my-4 h-36",`identifier-${t}-${o}`]),overflow:""},null,8,["panelId","class"])):d.value[`${t}-${o}`]?(l(),x(Y(t.componentId),{key:`${t}-${o}-custom`,options:t.options,id:t.id,class:I(["appbar-item h-48",`identifier-${t}-${o}`])},null,8,["options","id","class"])):M("",!0)],64))),256)),d.value[`divider-${y}`]?(l(),x(ee,{key:0,class:I(["border-black my-4",`identifier-divider-${y}`])},null,8,["class"])):M("",!0)],64))),128)),(l(!0),b(_,null,L(e.value?.filter(i=>d.value[`${i}-temp`]),i=>(l(),x(P,{panelId:i,minimize:!0,key:`${i}-temp`,class:I([`identifier-${i}-temp`,"text-black hover:bg-gray my-4 h-36"]),overflow:""},null,8,["panelId","class"]))),128))]),_:1},8,["numItems","renderWatch"]),[[K,p.value]]),F(ke,{class:"appbar-item bottom-48 h-48 sm:display-none"}),F(de,{class:"absolute bottom-0 h-40 sm:display-none w-full text-center",position:"right-start"})],8,_e)),[[g],[m,{trigger:"manual",touch:!1,placement:"top-end",popperOptions:{placement:"top",modifiers:[{name:"preventOverflow",options:{altAxis:!0}},{name:"flip",options:{fallbackPlacements:["top"]}}]}}]])}}});class Ee extends ue{get config(){return super.config}_parseConfig(a){if(!a)return;const r=W(this.$vApp.$pinia);let n;Array.isArray(a.items[0])?n=a.items:n=[a.items];const c=[];n.forEach(s=>{c.push(s.map(e=>typeof e=="string"?e:new X(e)))}),r.items=c.flat().reduce((s,e)=>(s[e instanceof X?e.id:e]=e,s),{}),r.order=c.map(s=>s.map(e=>e instanceof X?e.id:e)),this._validateItems()}_validateItems(){const a=W(this.$vApp.$pinia);a.order.flat().forEach(r=>{typeof a.items[r]!="string"&&[r].some(n=>{this.$iApi.fixture.exists(n)&&!a.items[r]&&(a.items[r].componentId=`${n}-appbar-button`)})})}}const ze={en:{"appbar.navigation":"Navigation","appbar.more":"More","navigation.export":"Export","navigation.map.export":"Export Map"},fr:{"appbar.navigation":"Navigation","appbar.more":"Plus","navigation.export":"Exporter","navigation.map.export":"Exporter la Carte"}};class Ce extends Ee{initialized(){}async added(){Object.entries(ze).forEach(e=>this.$iApi.$i18n.mergeLocaleMessage(...e));const{destroy:a,el:r}=this.mount(Ie,{app:this.$element}),n=this.$vApp.$el.getElementsByClassName("inner-shell")[0];n.insertBefore(r.childNodes[0],n.querySelector(".panel-stack")),this._parseConfig(this.config);const c=this.$vApp.$watch(()=>this.config,e=>this._parseConfig(e)),s=[];s.push(this.$iApi.event.on(ce.COMPONENT,()=>{this._parseConfig(this.config)})),this.removed=()=>{const e=W(this.$vApp.$pinia);c(),s.forEach(d=>this.$iApi.event.off(d));const $={...e.items},p=[...e.temporary];Object.keys($).forEach(d=>e.removeButton(d)),p.forEach(d=>e.removeButton(d)),a(),e.$reset()}}}export{Ce as default};
