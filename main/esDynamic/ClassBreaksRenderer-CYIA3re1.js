import{x as a,z as r,K as I,G as S,aF as z,bI as T,n as y,eQ as N,eR as _,o as h,a$ as B,eS as C,eT as V,D as M,B as j,bG as $,bi as O}from"./main-C3PVbFgd.js";import{m as L,v as R,n as q,y as A,p as G}from"./commonProperties-HhZ-bzYP.js";import{u as H}from"./RendererLegendOptions-BaeYqsgT.js";var v;let u=v=class extends S{constructor(e){super(e),this.description=null,this.label=null,this.minValue=null,this.maxValue=0,this.symbol=null}clone(){return new v({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,symbol:this.symbol?.clone()??null})}getMeshHash(){const e=JSON.stringify(this.symbol);return`${this.minValue}.${this.maxValue}.${e}`}};a([r({type:String,json:{write:!0}})],u.prototype,"description",void 0),a([r({type:String,json:{write:!0}})],u.prototype,"label",void 0),a([r({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],u.prototype,"minValue",void 0),a([r({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],u.prototype,"maxValue",void 0),a([r(L)],u.prototype,"symbol",void 0),u=v=a([I("esri.renderers.support.ClassBreakInfo")],u);const d=u;var k;const F="log",f="percent-of-total",g="field",b=new z({esriNormalizeByLog:F,esriNormalizeByPercentOfTotal:f,esriNormalizeByField:g}),P=T(d);let n=k=class extends R(G){constructor(e){super(e),this._compiledValueExpression={valueExpression:null,compiledFunction:null},this.backgroundFillSymbol=null,this.classBreakInfos=null,this.defaultLabel=null,this.defaultSymbol=null,this.field=null,this.isMaxInclusive=!0,this.legendOptions=null,this.normalizationField=null,this.normalizationTotal=null,this.type="class-breaks",this.valueExpression=null,this.valueExpressionTitle=null,this._set("classBreakInfos",[])}readClassBreakInfos(e,s,t){if(!Array.isArray(e))return;let i=s.minValue;return e.map(l=>{const o=new d;return o.read(l,t),o.minValue==null&&(o.minValue=i),o.maxValue==null&&(o.maxValue=o.minValue),i=o.maxValue,o})}writeClassBreakInfos(e,s,t,i){const l=e.map(o=>o.write({},i));this._areClassBreaksConsecutive()&&l.forEach(o=>delete o.classMinValue),s[t]=l}castField(e){return e==null?e:typeof e=="function"?(y.getLogger(this).error(".field: field must be a string value"),null):N(e)}get minValue(){return this.classBreakInfos&&this.classBreakInfos[0]&&this.classBreakInfos[0].minValue||0}get normalizationType(){let e=this._get("normalizationType");const s=!!this.normalizationField,t=this.normalizationTotal!=null;return s||t?(e=s&&g||t&&f||null,s&&t&&y.getLogger(this).warn("warning: both normalizationField and normalizationTotal are set!")):e!==g&&e!==f||(e=null),e}set normalizationType(e){this._set("normalizationType",e)}addClassBreakInfo(e,s,t){let i=null;i=typeof e=="number"?new d({minValue:e,maxValue:s,symbol:_(t)}):P(h(e)),this.classBreakInfos.push(i),this.classBreakInfos.length===1&&this.notifyChange("minValue")}removeClassBreakInfo(e,s){const t=this.classBreakInfos.length;for(let i=0;i<t;i++){const l=[this.classBreakInfos[i].minValue,this.classBreakInfos[i].maxValue];if(l[0]===e&&l[1]===s){this.classBreakInfos.splice(i,1);break}}}getBreakIndex(e,s){return this.valueExpression&&s?.arcade==null&&y.getLogger(this).warn(""),this.valueExpression?this._getBreakIndexForExpression(e,s):this._getBreakIndexForField(e)}async getClassBreakInfo(e,s){let t=s;this.valueExpression&&s?.arcade==null&&(t={...t,arcade:await B()});const i=this.getBreakIndex(e,t);return i!==-1?this.classBreakInfos[i]:null}getSymbol(e,s){if(this.valueExpression&&s?.arcade==null)return void y.getLogger(this).error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");const t=this.getBreakIndex(e,s);return t>-1?this.classBreakInfos[t].symbol:this.defaultSymbol}async getSymbolAsync(e,s){let t=s;if(this.valueExpression&&s?.arcade==null){const l=await B(),{arcadeUtils:o}=l;o.hasGeometryOperations(this.valueExpression)&&await o.enableGeometryOperations(),t={...t,arcade:l}}const i=this.getBreakIndex(e,t);return i>-1?this.classBreakInfos[i].symbol:this.defaultSymbol}get symbols(){const e=[];return this.classBreakInfos.forEach(s=>{s.symbol&&e.push(s.symbol)}),this.defaultSymbol&&e.push(this.defaultSymbol),e}getAttributeHash(){return this.visualVariables?.reduce((e,s)=>e+s.getAttributeHash(),"")??""}getMeshHash(){const e=JSON.stringify(this.backgroundFillSymbol),s=JSON.stringify(this.defaultSymbol),t=`${this.normalizationField}.${this.normalizationType}.${this.normalizationTotal}`;return`${e}.${s}.${this.classBreakInfos.reduce((i,l)=>i+l.getMeshHash(),"")}.${t}.${this.field}.${this.valueExpression}`}get arcadeRequired(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}clone(){return new k({field:this.field,backgroundFillSymbol:this.backgroundFillSymbol?.clone(),defaultLabel:this.defaultLabel,defaultSymbol:this.defaultSymbol?.clone(),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,classBreakInfos:h(this.classBreakInfos),isMaxInclusive:this.isMaxInclusive,normalizationField:this.normalizationField,normalizationTotal:this.normalizationTotal,normalizationType:this.normalizationType,visualVariables:h(this.visualVariables),legendOptions:h(this.legendOptions),authoringInfo:h(this.authoringInfo)})}async collectRequiredFields(e,s){const t=[this.collectVVRequiredFields(e,s),this.collectSymbolFields(e,s)];await Promise.all(t)}async collectSymbolFields(e,s){const t=[...this.symbols.map(i=>i.collectRequiredFields(e,s)),C(e,s,this.valueExpression)];V(e,s,this.field),V(e,s,this.normalizationField),await Promise.all(t)}_getBreakIndexForExpression(e,s){const{viewingMode:t,scale:i,spatialReference:l,arcade:o,timeZone:c}=s??{},{valueExpression:x}=this;let m=this._compiledValueExpression.valueExpression===x?this._compiledValueExpression.compiledFunction:null;const p=o.arcadeUtils;if(!m){const E=p.createSyntaxTree(x);m=p.createFunction(E),this._compiledValueExpression.compiledFunction=m}this._compiledValueExpression.valueExpression=x;const w=p.executeFunction(m,p.createExecContext(e,p.getViewInfo({viewingMode:t,scale:i,spatialReference:l}),c));return this._getBreakIndexfromInfos(w)}_getBreakIndexForField(e){const s=this.field,t=e.attributes,i=this.normalizationType;let l=parseFloat(t[s]);if(i){const o=this.normalizationTotal,c=parseFloat(this.normalizationField?t[this.normalizationField]:void 0);if(i===F)l=Math.log(l)*Math.LOG10E;else if(i!==f||o==null||isNaN(o)){if(i===g&&!isNaN(c)){if(isNaN(l)||isNaN(c))return-1;l/=c}}else l=l/o*100}return this._getBreakIndexfromInfos(l)}_getBreakIndexfromInfos(e){const s=this.isMaxInclusive;if(e!=null&&typeof e=="number"&&!isNaN(e))for(let t=0;t<this.classBreakInfos.length;t++){const i=[this.classBreakInfos[t].minValue,this.classBreakInfos[t].maxValue];if(i[0]<=e&&(s?e<=i[1]:e<i[1]))return t}return-1}_areClassBreaksConsecutive(){const e=this.classBreakInfos,s=e.length;for(let t=1;t<s;t++)if(e[t-1].maxValue!==e[t].minValue)return!1;return!0}};a([r(q)],n.prototype,"backgroundFillSymbol",void 0),a([r({type:[d],json:{write:{isRequired:!0}}})],n.prototype,"classBreakInfos",void 0),a([M("classBreakInfos")],n.prototype,"readClassBreakInfos",null),a([j("classBreakInfos")],n.prototype,"writeClassBreakInfos",null),a([r({type:String,json:{write:!0}})],n.prototype,"defaultLabel",void 0),a([r(A)],n.prototype,"defaultSymbol",void 0),a([r({type:String,json:{write:!0}})],n.prototype,"field",void 0),a([$("field")],n.prototype,"castField",null),a([r({type:Boolean})],n.prototype,"isMaxInclusive",void 0),a([r({type:H,json:{write:!0}})],n.prototype,"legendOptions",void 0),a([r({type:Number,readOnly:!0,value:null,json:{read:!1,write:{overridePolicy(){return this.classBreakInfos.length!==0&&this._areClassBreaksConsecutive()?{enabled:!0}:{enabled:!1}}}}})],n.prototype,"minValue",null),a([r({type:String,json:{write:!0}})],n.prototype,"normalizationField",void 0),a([r({type:Number,json:{write:!0}})],n.prototype,"normalizationTotal",void 0),a([r({type:b.apiValues,value:null,json:{type:b.jsonValues,read:b.read,write:b.write}})],n.prototype,"normalizationType",null),a([O({classBreaks:"class-breaks"})],n.prototype,"type",void 0),a([r({type:String,json:{write:!0}})],n.prototype,"valueExpression",void 0),a([r({type:String,json:{write:!0}})],n.prototype,"valueExpressionTitle",void 0),n=k=a([I("esri.renderers.ClassBreaksRenderer")],n);const J=n;export{d as a,J as w};
