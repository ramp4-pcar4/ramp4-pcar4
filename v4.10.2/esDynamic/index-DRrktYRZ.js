import{dM as p,F as r,e3 as i,e8 as l,dY as m,dX as d,dU as u,e2 as c,dR as h,dV as f,dW as b}from"./main-kpG51UWM.js";const g=["src"],v=p({__name:"snowman",props:{fixture:{type:r,required:!0},message:String},setup(t){const e=t,s=i(),n=i("https://i.imgur.com/p13yknD.png");return l(()=>{setTimeout(()=>{s.value.parentNode.removeChild(s.value),e.fixture.remove()},6e3)}),(a,o)=>(u(),m("div",{class:"absolute top-0 right-0",ref_key:"el",ref:s},[d("img",{style:{width:"250px"},src:n.value,alt:"Snowman",srcset:""},null,8,g)],512))}}),x=p({__name:"appbar-button",setup(t){const e=c("iApi"),s=()=>{e.fixture.add("snowman")};return(n,a)=>{const o=h("appbar-button",!0);return u(),f(o,{onClickFunction:s,tooltip:"\u26C4"},{default:b(()=>a[0]||(a[0]=[d("span",{class:"block h-24"},"\u26C4",-1)])),_:1})}}});class w extends r{added(){this.$iApi.component("snowman-appbar-button",x);const{el:e}=this.mount(v,{app:this.$element,props:{message:"This is a snowman prop.",fixture:this}});this.$vApp.$el.appendChild(e.childNodes[0])}removed(){}}export{w as default};
