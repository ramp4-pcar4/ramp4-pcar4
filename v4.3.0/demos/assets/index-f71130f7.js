import{c3 as r,bZ as c,fp as a,fr as u,c9 as p,ch as m,fo as i,c5 as d,c7 as _,ca as h,cb as f}from"./main-46bfe858.js";import"./preload-helper-388ac9d5.js";const b=["src"],x=r({__name:"snowman",props:{fixture:{type:c,required:!0},message:String},setup(s){const e=s,t=a(),n=a("https://i.imgur.com/p13yknD.png");return u(()=>{setTimeout(()=>{t.value.parentNode.removeChild(t.value),e.fixture.remove()},6e3)}),(l,o)=>(p(),m("div",{class:"absolute top-0 right-0",ref_key:"el",ref:t},[i("img",{style:{width:"250px"},src:n.value,alt:"Snowman",srcset:""},null,8,b)],512))}}),g=i("span",{class:"block h-24"},"⛄",-1),v=r({__name:"appbar-button",setup(s){const e=d("iApi"),t=()=>{e.fixture.add("snowman")};return(n,l)=>{const o=_("appbar-button",!0);return p(),h(o,{onClickFunction:t,tooltip:"⛄"},{default:f(()=>[g]),_:1})}}});class C extends c{added(){this.$iApi.component("snowman-appbar-button",v);const{el:e}=this.mount(x,{app:this.$element,props:{message:"This is a snowman prop.",fixture:this}});this.$vApp.$el.appendChild(e.childNodes[0])}removed(){}}export{C as default};
