import { aW as e$1, aX as y, aY as c$4, c1 as f, eY as s$1, dR as o, lH as o$1, W as a$7, ai as u$2, gA as T, lJ as p$4, lK as a$8 } from './main-B92PJIAd.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var s;let i$2=s=class extends f{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255;}clone(){return new s({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};e$1([y({type:String,json:{write:!0}})],i$2.prototype,"field",void 0),e$1([y({type:Number,nonNullable:!0,json:{write:!0}})],i$2.prototype,"minValue",void 0),e$1([y({type:Number,nonNullable:!0,json:{write:!0}})],i$2.prototype,"maxValue",void 0),i$2=s=e$1([c$4("esri.renderers.support.pointCloud.ColorModulation")],i$2);const l$4=i$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const p$3=new s$1({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let i$1=class i extends f{};e$1([y({type:p$3.apiValues,readOnly:!0,nonNullable:!0,json:{type:p$3.jsonValues,read:!1,write:p$3.write}})],i$1.prototype,"type",void 0),i$1=e$1([c$4("esri.renderers.support.pointCloud.PointSizeAlgorithm")],i$1);const a$6=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var i;let p$2=i=class extends a$6{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null;}clone(){return new i({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};e$1([o({pointCloudFixedSizeAlgorithm:"fixed-size"})],p$2.prototype,"type",void 0),e$1([y({type:Number,nonNullable:!0,json:{write:!0}})],p$2.prototype,"size",void 0),e$1([y({type:Boolean,json:{write:!0}})],p$2.prototype,"useRealWorldSymbolSizes",void 0),p$2=i=e$1([c$4("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],p$2);const l$3=p$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var p$1;let c$3=p$1=class extends a$6{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1;}clone(){return new p$1({scaleFactor:this.scaleFactor})}};e$1([o({pointCloudSplatAlgorithm:"splat"})],c$3.prototype,"type",void 0),e$1([y({type:Number,value:1,nonNullable:!0,json:{write:!0}})],c$3.prototype,"scaleFactor",void 0),c$3=p$1=e$1([c$4("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],c$3);const a$5=c$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const e={key:"type",base:a$6,typeMap:{"fixed-size":l$3,splat:a$5}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const u$1=o$1()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let c$2=class c extends f{constructor(o){super(o),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10;}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return {pointSizeAlgorithm:a$7(this.pointSizeAlgorithm),colorModulation:a$7(this.colorModulation),pointsPerInch:a$7(this.pointsPerInch)}}};e$1([y({type:u$1.apiValues,readOnly:!0,nonNullable:!0,json:{type:u$1.jsonValues,read:!1,write:u$1.write}})],c$2.prototype,"type",void 0),e$1([y({types:e,json:{write:!0}})],c$2.prototype,"pointSizeAlgorithm",void 0),e$1([y({type:l$4,json:{write:!0}})],c$2.prototype,"colorModulation",void 0),e$1([y({json:{write:!0},nonNullable:!0,type:Number})],c$2.prototype,"pointsPerInch",void 0),c$2=e$1([c$4("esri.renderers.PointCloudRenderer")],c$2),function(o){o.fieldTransformTypeKebabDict=new s$1({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});}(c$2||(c$2={}));const a$4=c$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var a$3;let p=a$3=class extends f{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null;}clone(){return new a$3({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:a$7(this.color)})}};e$1([y({type:String,json:{write:!0}})],p.prototype,"description",void 0),e$1([y({type:String,json:{write:!0}})],p.prototype,"label",void 0),e$1([y({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],p.prototype,"minValue",void 0),e$1([y({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],p.prototype,"maxValue",void 0),e$1([y({type:u$2,json:{type:[T],write:!0}})],p.prototype,"color",void 0),p=a$3=e$1([c$4("esri.renderers.support.pointCloud.ColorClassBreakInfo")],p);const c$1=p;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var n$1;let a$2=n$1=class extends a$4{constructor(o){super(o),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null;}clone(){return new n$1({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:a$7(this.colorClassBreakInfos),legendOptions:a$7(this.legendOptions)})}};e$1([o({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],a$2.prototype,"type",void 0),e$1([y({json:{write:!0},type:String})],a$2.prototype,"field",void 0),e$1([y({type:p$4,json:{write:!0}})],a$2.prototype,"legendOptions",void 0),e$1([y({type:a$4.fieldTransformTypeKebabDict.apiValues,json:{type:a$4.fieldTransformTypeKebabDict.jsonValues,read:a$4.fieldTransformTypeKebabDict.read,write:a$4.fieldTransformTypeKebabDict.write}})],a$2.prototype,"fieldTransformType",void 0),e$1([y({type:[c$1],json:{write:!0}})],a$2.prototype,"colorClassBreakInfos",void 0),a$2=n$1=e$1([c$4("esri.renderers.PointCloudClassBreaksRenderer")],a$2);const d$1=a$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var l$2;let d=l$2=class extends a$4{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null;}clone(){return new l$2({...this.cloneProperties(),field:a$7(this.field),fieldTransformType:a$7(this.fieldTransformType),stops:a$7(this.stops),legendOptions:a$7(this.legendOptions)})}};e$1([o({pointCloudStretchRenderer:"point-cloud-stretch"})],d.prototype,"type",void 0),e$1([y({json:{write:!0},type:String})],d.prototype,"field",void 0),e$1([y({type:p$4,json:{write:!0}})],d.prototype,"legendOptions",void 0),e$1([y({type:a$4.fieldTransformTypeKebabDict.apiValues,json:{type:a$4.fieldTransformTypeKebabDict.jsonValues,read:a$4.fieldTransformTypeKebabDict.read,write:a$4.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),e$1([y({type:[a$8],json:{write:!0}})],d.prototype,"stops",void 0),d=l$2=e$1([c$4("esri.renderers.PointCloudStretchRenderer")],d);const a$1=d;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var l$1;let c=l$1=class extends f{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null;}clone(){return new l$1({description:this.description,label:this.label,values:a$7(this.values),color:a$7(this.color)})}};e$1([y({type:String,json:{write:!0}})],c.prototype,"description",void 0),e$1([y({type:String,json:{write:!0}})],c.prototype,"label",void 0),e$1([y({type:[String],json:{write:!0}})],c.prototype,"values",void 0),e$1([y({type:u$2,json:{type:[T],write:!0}})],c.prototype,"color",void 0),c=l$1=e$1([c$4("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],c);const n=c;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var l;let u=l=class extends a$4{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null;}clone(){return new l({...this.cloneProperties(),field:a$7(this.field),fieldTransformType:a$7(this.fieldTransformType),colorUniqueValueInfos:a$7(this.colorUniqueValueInfos),legendOptions:a$7(this.legendOptions)})}};e$1([o({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],u.prototype,"type",void 0),e$1([y({json:{write:!0},type:String})],u.prototype,"field",void 0),e$1([y({type:a$4.fieldTransformTypeKebabDict.apiValues,json:{type:a$4.fieldTransformTypeKebabDict.jsonValues,read:a$4.fieldTransformTypeKebabDict.read,write:a$4.fieldTransformTypeKebabDict.write}})],u.prototype,"fieldTransformType",void 0),e$1([y({type:[n],json:{write:!0}})],u.prototype,"colorUniqueValueInfos",void 0),e$1([y({type:p$4,json:{write:!0}})],u.prototype,"legendOptions",void 0),u=l=e$1([c$4("esri.renderers.PointCloudUniqueValueRenderer")],u);const a=u;

export { a, a$1 as b, a$4 as c, d$1 as d };
