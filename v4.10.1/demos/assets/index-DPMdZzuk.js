import{a as n}from"./fabric-q5PVa8U8.js";import{F as f,m as s}from"./main-DVcB5zI_.js";import"./preload-helper-ExcqyqRp.js";class g extends f{get config(){return this.$iApi.fixture.get("export").config?.title}make(t){const e=this.config,i={text:"RAMP-Map / PCAR-Carte",fontFamily:"Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",fill:"#000",fontSize:30,top:0,left:0,originX:"center",originY:"top"};e?.value!==void 0&&(i.text=e.value);const o=s(i,t||{}),r=new n.fabric.Textbox(o.text,o);return Promise.resolve(r)}}export{g as default};
