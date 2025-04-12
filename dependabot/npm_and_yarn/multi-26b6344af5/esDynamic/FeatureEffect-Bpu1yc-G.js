import{q as b,s as c,D as i,G as u,aV as f,K as y}from"./main-0iYVBzEC.js";import{a as o,n as d}from"./jsonUtils-I4nAq0Aq.js";import m from"./FeatureFilter-CscSQSYP.js";var n;const w={read:{reader:d},write:{writer:o,overridePolicy(){return{allowNull:this.excludedEffect!=null,isRequired:this.excludedEffect==null}}}},p={read:{reader:d},write:{writer:o,overridePolicy(){return{allowNull:this.includedEffect!=null,isRequired:this.includedEffect==null}}}},h={name:"showExcludedLabels",default:!0};let l=n=class extends b{constructor(r){super(r),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}write(r,e){const t=super.write(r,e);if(e?.origin){if(t.filter){const s=Object.keys(t.filter);if(s.length>1||s[0]!=="where")return e.messages?.push(new c("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:e.layer,effect:this})),null}if("showExcludedLabels"in t)return e.messages?.push(new c("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:e.layer,effect:this})),null}return t}clone(){return new n({filter:this.filter!=null?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};i([u({type:m,json:{write:{allowNull:!0,writer(r,e,t,s){const a=r?.write({},s);a&&Object.keys(a).length!==0?f(t,a,e):f(t,null,e)}}}})],l.prototype,"filter",void 0),i([u({json:{read:d,write:{writer:o,allowNull:!0},origins:{"web-map":w,"portal-item":w}}})],l.prototype,"includedEffect",void 0),i([u({json:{read:d,write:{writer:o,allowNull:!0},origins:{"web-map":p,"portal-item":p}}})],l.prototype,"excludedEffect",void 0),i([u({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":h,"portal-item":h}}})],l.prototype,"excludedLabelsVisible",void 0),l=n=i([y("esri.layers.support.FeatureEffect")],l);const x=l;export{x as w};
