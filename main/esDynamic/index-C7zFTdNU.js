import{ek as p,F as r,eD as i,eI as m,ew as d,ev as u,es as l,eC as c,ep as h,et as f,eu as v}from"./main-C3PVbFgd.js";const b=["src"],w=p({__name:"snowman",props:{fixture:{type:r,required:!0},message:String},setup(t){const e=t,s=i(),n=i("https://i.imgur.com/p13yknD.png");return m(()=>{setTimeout(()=>{s.value.parentNode.removeChild(s.value),e.fixture.remove()},6e3)}),(a,o)=>(l(),d("div",{class:"absolute top-0 right-0",ref_key:"el",ref:s},[u("img",{style:{width:"250px"},src:n.value,alt:"Snowman",srcset:""},null,8,b)],512))}}),x=p({__name:"appbar-button",setup(t){const e=c("iApi"),s=()=>{e.fixture.add("snowman")};return(n,a)=>{const o=h("appbar-button",!0);return l(),f(o,{onClickFunction:s,tooltip:"\u26C4"},{default:v(()=>a[0]||(a[0]=[u("span",{class:"block h-24"},"\u26C4",-1)])),_:1})}}});class g extends r{added(){this.$iApi.component("snowman-appbar-button",x);const{el:e}=this.mount(w,{app:this.$element,props:{message:"This is a snowman prop.",fixture:this}});this.$vApp.$el.appendChild(e.childNodes[0])}removed(){}}export{g as default};
