import{aX as m,G as c,x as t,z as i,K as n,V as u,B as x,aV as j}from"./main-C3PVbFgd.js";import{a as w}from"./layerContainerType-ChWdCT09.js";import{p as g}from"./scaleUtils-D7EuaSCT.js";import{n as D}from"./uuid-Dj9mdEVg.js";import{i as I}from"./displayFilterUtils-BtYME9JN.js";const f={write:{overridePolicy:(e,r,o)=>({enabled:!o||o.filterMode==="scale"})}};let s=class extends m.ClonableMixin(c){constructor(e){super(e),this.id=D(),this.maxScale=0,this.minScale=0,this.title="",this.where=null}};t([i({type:String,json:{write:!0}})],s.prototype,"id",void 0),t([i({type:Number,json:f})],s.prototype,"maxScale",void 0),t([i({type:Number,json:f})],s.prototype,"minScale",void 0),t([i({type:String,json:{write:!0}})],s.prototype,"title",void 0),t([i({type:String,json:{write:!0}})],s.prototype,"where",void 0),s=t([n("esri.layers.support.DisplayFilter")],s);const b=s;let l=class extends m.ClonableMixin(c){constructor(e){super(e),this.activeFilterId=null,this.filters=new(u.ofType(b)),this.mode="manual"}writeFilters(e,r,o,F){const p=e.toArray();this.mode==="scale"&&p.sort((a,y)=>{const d=g(y.minScale,a.minScale),S=a.maxScale-y.maxScale;return d===0?S:d}),r[o]=p.map(a=>a.toJSON(F))}write(e,r){return super.write(e,I(this,r))}};t([i({type:String,json:{write:{overridePolicy:(e,r,o)=>({enabled:o.filterMode==="manual",isRequired:!0})}}})],l.prototype,"activeFilterId",void 0),t([i({type:u.ofType(b),nonNullable:!0,json:{write:!0}})],l.prototype,"filters",void 0),t([x("filters")],l.prototype,"writeFilters",null),t([i({type:["manual","scale"],nonNullable:!0,json:{name:"filterMode",write:!0}})],l.prototype,"mode",void 0),l=t([n("esri.layers.support.DisplayFilterInfo")],l);const N=l,M=e=>{let r=class extends e{constructor(){super(...arguments),this.displayFilterEnabled=!0,this.displayFilterInfo=null}};return t([i(v)],r.prototype,"displayFilterEnabled",void 0),t([i(h)],r.prototype,"displayFilterInfo",void 0),r=t([n("esri.layers.mixins.DisplayFilteredLayer")],r),r},v={type:Boolean,json:{name:"layerDefinition.disableDisplayFilter",read:{reader:e=>!e},write:{layerContainerTypes:w,writer(e,r,o){j(o,!e,r)}},origins:{"web-scene":{write:!1,read:!1}}}},h={type:N,json:{name:"layerDefinition.displayFilterInfo",write:{enabled:!0,allowNull:!0,layerContainerTypes:w},origins:{"web-scene":{write:!1,read:!1}}}};export{M as a,h as l,v as p};
