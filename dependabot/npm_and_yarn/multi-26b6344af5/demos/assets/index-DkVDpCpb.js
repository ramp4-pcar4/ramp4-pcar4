import{a as r}from"./fabric-BYdWz3VE.js";import{F as f,m as s}from"./main-Cv8ITM2j.js";import"./preload-helper-ExcqyqRp.js";class l extends f{get config(){return this.$iApi.fixture.get("export").config?.footnote}make(t){const o=this.config,e={text:"RAMP-PCAR",fontFamily:"Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",fill:"#000",fontSize:20,top:0};o?.value!==void 0&&(e.text=o.value);const i=s(e,t||{}),n=new r.fabric.Textbox(i.text,i);return Promise.resolve(n)}}export{l as default};
