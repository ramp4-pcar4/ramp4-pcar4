import{f as r}from"./fabric-0b3762e6.js";import{bZ as f,b_ as s}from"./main-8eb577c9.js";import"./preload-helper-388ac9d5.js";class l extends f{get config(){return this.$iApi.fixture.get("export").config?.footnote}make(t){const o=this.config,e={text:"RAMP-PCAR",fontFamily:"Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",fill:"#000",fontSize:20,top:0};o&&(e.text=o.value);const i=s(e,t||{}),n=new r.fabric.Textbox(i.text,i);return Promise.resolve(n)}}export{l as default};
