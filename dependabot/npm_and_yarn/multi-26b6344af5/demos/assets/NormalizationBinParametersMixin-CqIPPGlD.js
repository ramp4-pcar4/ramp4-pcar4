import{z as s,H as o,J as n,bk as p,N as u,n as z}from"./main-Cv8ITM2j.js";const y=s()({naturalLog:"natural-log",squareRoot:"square-root",percentOfTotal:"percent-of-total",log:"log",field:"field"}),r="percent-of-total",l="field",T=m=>{let a=class extends m{constructor(){super(...arguments),this.normalizationField=null,this.normalizationMaxValue=null,this.normalizationMinValue=null,this.normalizationTotal=null}get normalizationType(){let t=this._get("normalizationType");const e=!!this.normalizationField,i=this.normalizationTotal!=null;return e||i?(t=e&&l||i&&r||null,e&&i&&z.getLogger(this).warn("warning: both normalizationField and normalizationTotal are set!")):t!==l&&t!==r||(t=null),t}set normalizationType(t){this._set("normalizationType",t)}};return o([n({type:String,json:{name:"parameters.normalizationField",write:!0}})],a.prototype,"normalizationField",void 0),o([n({type:Number,json:{name:"parameters.normalizationMaxValue",write:!0}})],a.prototype,"normalizationMaxValue",void 0),o([n({type:Number,json:{name:"parameters.normalizationMinValue",write:!0}})],a.prototype,"normalizationMinValue",void 0),o([n({type:Number,json:{name:"parameters.normalizationTotal",write:!0}})],a.prototype,"normalizationTotal",void 0),o([p(y,{name:"parameters.normalizationType"})],a.prototype,"normalizationType",null),a=o([u("esri.rest.support.NormalizationBinParametersMixin")],a),a};export{T as m,y as n};
