import{f as n}from"./fabric-aece336d.js";import{bZ as f,b_ as s}from"./main-46bfe858.js";import"./preload-helper-388ac9d5.js";class g extends f{get config(){return this.$iApi.fixture.get("export").config?.timestamp}make(t){const e=this.config,i={text:new Date().toLocaleString("en-CA"),fontFamily:"Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",fill:"#000",fontSize:20,top:0,left:0,originX:"left"};e&&(i.text=e.value);const o=s(i,t||{}),r=new n.fabric.Textbox(o.text,o);return Promise.resolve(r)}}export{g as default};
