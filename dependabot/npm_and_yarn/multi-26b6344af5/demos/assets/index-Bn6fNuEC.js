const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./p2-screen-1-DkXbakaw.js","./main-Cv8ITM2j.js","./preload-helper-ExcqyqRp.js","./main-gKmidBZg.css"])))=>i.map(i=>d[i]);
import{_ as v}from"./preload-helper-ExcqyqRp.js";import{ek as c,eq as u,er as m,eu as l,ey as e,h4 as w,es as b,eI as h,eL as i,el as z,eB as p,et as d,F as G,fY as g}from"./main-Cv8ITM2j.js";const A=c({__name:"appbar-button",props:{options:{type:Object}},setup(o){const s=h("iApi"),t=()=>{s.panel.toggle({id:"p2",screen:"p-2-screen-2"})};return(n,r)=>{const f=b("appbar-button",!0);return m(),u(f,{onClickFunction:t,tooltip:"Gazebo"},{default:l(()=>[e("span",{style:w({color:o.options?.colour??"#BDBDBD"})},"G ",4)]),_:1})}}}),$={class:"flex flex-col items-center"},S=c({__name:"p1-screen-1",props:{panel:{type:Object,required:!0}},setup(o){return(s,t)=>{const n=b("panel-screen");return m(),u(n,{panel:o.panel},{header:l(()=>t[1]||(t[1]=[i(" Gazebo/Panel 1/Screen A ")])),controls:l(()=>t[2]||(t[2]=[e("a",{href:"javascript:;"},"Option 1",-1),e("a",{href:"javascript:;"},"Option 2",-1),e("a",{href:"javascript:;"},"Option 3",-1)])),content:l(()=>[e("div",$,[e("button",{type:"button",onClick:t[0]||(t[0]=r=>o.panel.show({screen:"p-1-screen-2"})),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16"}," See Gazebo 2 "),t[3]||(t[3]=e("br",null,null,-1)),t[4]||(t[4]=e("img",{src:"https://c.tenor.com/RJ3ZG5beDhIAAAAC/napoleon-dynamite-napoleon.gif",alt:"Gazebo1"},null,-1))])]),_:1},8,["panel"])}}}),B={class:"flex flex-col items-center"},C=c({__name:"p1-screen-2",props:{panel:{type:Object,required:!0}},setup(o){return(s,t)=>{const n=b("panel-screen");return m(),u(n,{panel:o.panel},{header:l(()=>t[1]||(t[1]=[i(" Gazebo/Panel 1/Screen B ")])),content:l(()=>[e("div",B,[e("button",{type:"button",onClick:t[0]||(t[0]=r=>o.panel.show({screen:"p-1-screen-1"})),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16"}," See Gazebo 1 "),t[2]||(t[2]=e("br",null,null,-1)),t[3]||(t[3]=e("img",{src:"http://nesn.com/wp-content/uploads/2014/09/jeternephew.gif",alt:"Gazebo2"},null,-1))])]),_:1},8,["panel"])}}}),j={class:"flex flex-row justify-center items-center mt-16"},k={class:"mt-16"},O=c({__name:"p2-screen-2",props:{panel:{type:Object,required:!0},greeting:{type:String}},setup(o){const s=o,{t}=z(),n=h("iApi"),r=()=>{s.panel.show("p-2-screen-3"),n.event.emit("gazebo/beholdMyText","I am a cat")};return(f,a)=>{const y=b("panel-screen");return m(),u(y,{panel:o.panel},{header:l(()=>a[2]||(a[2]=[i(" Gazebo/Panel 2/Screen B ")])),content:l(()=>[i(p(d(t)("gz.hello2"))+" ",1),e("div",j,[e("button",{type:"button",onClick:a[0]||(a[0]=_=>o.panel.show({screen:"p-2-screen-1",props:{greeting:"Greeting from Screen B"}})),class:"bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16"}," Switch to Screen A "),e("button",{type:"button",onClick:a[1]||(a[1]=_=>r()),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2"}," See a cat ")]),e("p",k,p(o.greeting),1)]),_:1},8,["panel"])}}}),P={class:"flex flex-col items-center mt-16"},T={class:"ml-32 font-bold"},D={class:"ml-32 font-bold"},E={class:"ml-32 font-bold"},I=c({__name:"p2-screen-3",props:{panel:{type:Object,required:!0}},setup(o){const{t:s}=z({messages:{en:{lang_native:"En",who:"[me cat]"},fr:{lang_native:"Fr",who:"[moi chat]"}}});return(t,n)=>{const r=b("panel-screen");return m(),u(r,{panel:o.panel},{header:l(()=>n[1]||(n[1]=[i(" Gazebo/Panel 2/Screen C ")])),content:l(()=>[e("div",P,[e("button",{type:"button",onClick:n[0]||(n[0]=f=>o.panel.show({screen:"p-2-screen-1",props:{greeting:"Greeting from Screen C"}})),class:"bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16"}," Switch to Screen A "),n[5]||(n[5]=e("img",{class:"my-16",src:"https://media.giphy.com/media/iWkHDNtcHpB5e/giphy.gif",alt:"",srcset:""},null,-1)),n[6]||(n[6]=e("p",null,"Locale merging:",-1)),e("dl",null,[n[2]||(n[2]=e("dt",null,"global locale:",-1)),e("dd",T,p(d(s)("lang_native")),1),n[3]||(n[3]=e("dt",null,"fixture locale:",-1)),e("dd",D,p(d(s)("gz.hello")),1),n[4]||(n[4]=e("dt",null,"common panels locale:",-1)),e("dd",E,p(d(s)("who")),1)])])]),_:1},8,["panel"])}}}),x={en:{"gz.hello":"I'm a simple panel - but from a locale file","gz.hello2":"I'm a simple panel","gz.alert1":"Gazebo","gz.alert2":"Gazebo two"},fr:{"gz.hello":'Bonjour. Je suis un panel"',"gz.hello2":'Bonjour. Je suis un panel"',"gz.alert1":"Gazebo","gz.alert2":"Gazebo deux"}},N="gazebo/beholdMyText";class L extends G{added(){this.$iApi.event.registerEventName(N),this.$iApi.component("gazebo-appbar-button",A),this.$iApi.panel.register({id:"p1",config:{screens:{"p-1-screen-1":g(S),"p-1-screen-2":g(C)},style:{"flex-grow":"1","max-width":"500px"},alertName:"gz.alert1"}},{i18n:{messages:x}}),this.$iApi.panel.register({id:"p2",config:{screens:{"p-2-screen-1":()=>new Promise(s=>setTimeout(()=>v(()=>import("./p2-screen-1-DkXbakaw.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(t=>{s(t)}),2e3)),"p-2-screen-2":g(O),"p-2-screen-3":()=>new Promise(s=>s(g(I)))},style:{"flex-grow":"1","max-width":"500px"},alertName:"gz.alert2"}},{i18n:{messages:x}}),this.handlePanelTeleports(["p1","p2"])}}export{L as default};
