import{aZ as c,J as u,B as t,D as i,N as n,V as w,G as S,aX as F}from"./main-Bd_03BNf.js";import{a as f}from"./layerContainerType-C5CzMsLd.js";import{p as x}from"./scaleUtils-CqCO3s8f.js";import{n as j}from"./uuid-Cl5lrJ4c.js";import{i as $}from"./displayFilterUtils-BGbU5U7W.js";const m={write:{overridePolicy:(e,r,o)=>({enabled:!o||o.filterMode==="scale"})}};let s=class extends c.ClonableMixin(u){constructor(e){super(e),this.id=j(),this.maxScale=0,this.minScale=0,this.title="",this.where=null}};t([i({type:String,json:{write:!0}})],s.prototype,"id",void 0),t([i({type:Number,json:m})],s.prototype,"maxScale",void 0),t([i({type:Number,json:m})],s.prototype,"minScale",void 0),t([i({type:String,json:{write:!0}})],s.prototype,"title",void 0),t([i({type:String,json:{write:!0}})],s.prototype,"where",void 0),s=t([n("esri.layers.support.DisplayFilter")],s);const b=s;let l=class extends c.ClonableMixin(u){constructor(e){super(e),this.activeFilterId=null,this.filters=new(w.ofType(b)),this.mode="manual"}writeFilters(e,r,o,h){const p=e.toArray();this.mode==="scale"&&p.sort((a,y)=>{const d=x(y.minScale,a.minScale),v=a.maxScale-y.maxScale;return d===0?v:d}),r[o]=p.map(a=>a.toJSON(h))}write(e,r){return super.write(e,$(this,r))}};t([i({type:String,json:{write:{overridePolicy:(e,r,o)=>({enabled:o.filterMode==="manual",isRequired:!0})}}})],l.prototype,"activeFilterId",void 0),t([i({type:w.ofType(b),nonNullable:!0,json:{write:!0}})],l.prototype,"filters",void 0),t([S("filters")],l.prototype,"writeFilters",null),t([i({type:["manual","scale"],nonNullable:!0,json:{name:"filterMode",write:!0}})],l.prototype,"mode",void 0),l=t([n("esri.layers.support.DisplayFilterInfo")],l);const g=l,E=e=>{let r=class extends e{constructor(){super(...arguments),this.displayFilterEnabled=!0,this.displayFilterInfo=null}};return t([i(D)],r.prototype,"displayFilterEnabled",void 0),t([i(N)],r.prototype,"displayFilterInfo",void 0),r=t([n("esri.layers.mixins.DisplayFilteredLayer")],r),r},D={type:Boolean,json:{name:"layerDefinition.disableDisplayFilter",read:{reader:e=>!e},write:{layerContainerTypes:f,writer(e,r,o){F(o,!e,r)}},origins:{"web-scene":{write:!1,read:!1}}}},N={type:g,json:{name:"layerDefinition.displayFilterInfo",write:{enabled:!0,allowNull:!0,layerContainerTypes:f},origins:{"web-scene":{write:!1,read:!1}}}};export{E as a,N as l,D as p};
