import{k as s,o,v as p,fq as c,A as f,eW as y,g as E,ax as v,u as I,q as w,fr as g}from"./main-Dv0FawL-.js";import{m as l}from"./lengthUtils-C-FMNsA9.js";var u;let n=u=class extends p{constructor(e){super(e)}async collectRequiredFields(e,t){return c(e,t,this.expression)}clone(){return new u({expression:this.expression,title:this.title})}equals(e){return this.expression===e.expression&&this.title===e.title}};s([o({type:String,json:{write:!0}})],n.prototype,"expression",void 0),s([o({type:String,json:{write:!0}})],n.prototype,"title",void 0),n=u=s([f("esri.symbols.support.FeatureExpressionInfo")],n);const d=n;function j(e){return 1/(l[e]||1)}function b(){const e=Object.keys(l);return y(e,"decimal-degrees"),e.sort(),e}const F=b();var a;const i=E()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),x=new v({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let r=a=class extends p{constructor(e){super(e),this.offset=null}readFeatureExpressionInfo(e,t){return e??(t.featureExpression&&t.featureExpression.value===0?{expression:"0"}:void 0)}writeFeatureExpressionInfo(e,t,h,m){t[h]=e.write({},m),e.expression==="0"&&(t.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:t}=this;return this._isOverridden("mode")?this._get("mode"):e!=null||t?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,t){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,t):null}clone(){return new a({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&g(this.featureExpressionInfo,e.featureExpressionInfo)}};s([o({type:d,json:{write:!0}})],r.prototype,"featureExpressionInfo",void 0),s([I("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],r.prototype,"readFeatureExpressionInfo",null),s([w("featureExpressionInfo",{featureExpressionInfo:{type:d},"featureExpression.value":{type:[0]}})],r.prototype,"writeFeatureExpressionInfo",null),s([o({type:i.apiValues,nonNullable:!0,json:{type:i.jsonValues,read:i.read,write:{writer:i.write,isRequired:!0}}})],r.prototype,"mode",null),s([o({type:Number,json:{write:!0}})],r.prototype,"offset",void 0),s([o({type:F,json:{type:String,read:x.read,write:x.write}})],r.prototype,"unit",null),r=a=s([f("esri.symbols.support.ElevationInfo")],r);const q=r;export{q as h,j as n};
