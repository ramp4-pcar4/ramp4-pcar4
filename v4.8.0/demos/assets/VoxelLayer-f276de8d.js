import { cu as r, cl as z, fV as E$1, nU as c$4, lu as u$3, cm as n$1, cn as r$1, dX as i$1, jj as s$3, jk as a$4, aX as e, aY as y$2, ji as s$4, aZ as c$5, c2 as f$2, eg as p$b, gA as T, aj as u$4, a4 as V, bu as n$2, ak as e$2, nV as f$3, X as a$5, bl as f$4, J as s$5, a8 as G, cv as e$3, nW as i$2, G as x$2, iZ as e$4, hT as c$6, cy as u$5, eB as l$4, e0 as u$6, e1 as j$2, e2 as t$4, e3 as m$3, eC as e$5, eD as i$3, mG as y$3, C as a$6, s as s$6, aI as M, dL as y$4, g8 as p$c, e6 as c$7, e7 as d$4, e4 as o, b7 as P, ed as b$1 } from './main-ba570a3b.js';
import { L } from './SceneService-689cf0d2.js';
import { j as j$1 } from './persistable-dbb17de0.js';
import { I, x as x$1 } from './quat-6bee6f97.js';
import { e as e$1 } from './quatf64-137a8dbb.js';
import './preload-helper-a4975f27.js';
import './originUtils-f2cf510b.js';
import './multiOriginJSONSupportUtils-3d5af7a5.js';
import './jsonContext-7d73db75.js';
import './resourceUtils-a7476107.js';
import './resourceUtils-922a97a6.js';
import './saveAPIKeyUtils-d3b865dc.js';
import './saveUtils-9687676f.js';
import './resourceExtension-55c3d98a.js';
import './mat3f64-3fe11525.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const f$1=n$1(),l$3=e$1(),u$2=e$1(),p$a=e$1(),h=r$1(0,0,1),j=r$1(0,1,0),x=r$1(1,0,0);function b(r$1){r(f$1,r$1),z(f$1,f$1);const a=Math.atan2(f$1[1],f$1[0]),s=I(e$1(),h,-a);E$1(f$1,f$1,s);const c=-1*Math.atan2(f$1[2],f$1[0]);return [c$4(a)+270,c$4(c)+90]}function g$1(o,a){return I(u$2,h,u$3(o-270)),I(p$a,j,u$3(a-90)),x$1(l$3,u$2,p$a),r(f$1,x),E$1(f$1,f$1,l$3),z(f$1,f$1),[f$1[0],f$1[1],f$1[2]]}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let m$2=class m extends(i$1(f$2)){constructor(o){super(o),this.enabled=!0,this.label="",this.normal=null,this.point=null;}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[o,t]=b(this.normal);return s$3.normalize(a$4(o),0,!0)}set orientation(o){const t=g$1(o,this.tilt);this._set("normal",t),this._set("orientation",o);}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[o,t]=b(this.normal);return s$3.normalize(a$4(t),0,!0)}set tilt(o){const t=g$1(this.orientation,o);this._set("normal",t),this._set("tilt",o);}};e([y$2({type:Boolean,json:{write:!0}})],m$2.prototype,"enabled",void 0),e([y$2({type:String,json:{write:!0}})],m$2.prototype,"label",void 0),e([y$2({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),s$4((o=>s$3.normalize(a$4(o),0,!0)))],m$2.prototype,"orientation",null),e([y$2({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),s$4((o=>s$3.normalize(a$4(o),0,!0)))],m$2.prototype,"tilt",null),e([y$2({type:[Number],json:{write:!0}})],m$2.prototype,"normal",void 0),e([y$2({type:[Number],json:{write:!0}})],m$2.prototype,"point",void 0),m$2=e([c$5("esri.layers.voxel.VoxelSlice")],m$2);const c$3=m$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d$3=class d extends(i$1(f$2)){constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null;}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,r]=b(this.normal);return s$3.normalize(a$4(e),0,!0)}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,r]=b(this.normal);return s$3.normalize(a$4(r),0,!0)}};e([y$2({type:Boolean,json:{default:!0,write:!0}})],d$3.prototype,"enabled",void 0),e([y$2({type:String,json:{origins:{service:{read:p$b}},write:{enabled:!0,isRequired:!0}}}),j$1({origins:["web-scene"],type:"resource",prefix:"sections",compress:!0})],d$3.prototype,"href",void 0),e([y$2({type:T,json:{write:{enabled:!0,isRequired:!0}}})],d$3.prototype,"id",void 0),e([y$2({type:String,json:{write:!0}})],d$3.prototype,"label",void 0),e([y$2({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],d$3.prototype,"orientation",null),e([y$2({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],d$3.prototype,"tilt",null),e([y$2({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],d$3.prototype,"normal",void 0),e([y$2({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],d$3.prototype,"point",void 0),e([y$2({type:[T],json:{write:{enabled:!0,isRequired:!0}}})],d$3.prototype,"sizeInPixel",void 0),e([y$2({type:[c$3],json:{write:!0}})],d$3.prototype,"slices",void 0),e([y$2({type:T,json:{default:0,write:!0}})],d$3.prototype,"timeId",void 0),e([y$2({type:T,json:{write:{enabled:!0,isRequired:!0}}})],d$3.prototype,"variableId",void 0),d$3=e([c$5("esri.layers.voxel.VoxelSection")],d$3);const u$1=d$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t$3=class t extends f$2{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5;}};e([y$2({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],t$3.prototype,"diffuseFactor",void 0),e([y$2({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],t$3.prototype,"specularFactor",void 0),t$3=e([c$5("esri.layers.voxel.VoxelSimpleShading")],t$3);const p$9=t$3;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let s$2=class s extends f$2{constructor(){super(...arguments),this.continuity=null,this.hasNoData=!1,this.noData=0,this.offset=0,this.scale=1,this.type=null;}};e([y$2({type:["discrete","continuous"],json:{write:!0}})],s$2.prototype,"continuity",void 0),e([y$2({type:Boolean,json:{write:!0}})],s$2.prototype,"hasNoData",void 0),e([y$2({type:Number,json:{write:!0}})],s$2.prototype,"noData",void 0),e([y$2({type:Number,json:{write:!0}})],s$2.prototype,"offset",void 0),e([y$2({type:Number,json:{write:!0}})],s$2.prototype,"scale",void 0),e([y$2({type:String,json:{write:{enabled:!0,isRequired:!0}}})],s$2.prototype,"type",void 0),s$2=e([c$5("esri.layers.voxel.VoxelFormat")],s$2);const p$8=s$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let s$1=class s extends f$2{constructor(){super(...arguments),this.id=null,this.description="",this.name=null,this.originalFormat=null,this.renderingFormat=null,this.unit="",this.volumeId=0,this.type=null;}};e([y$2({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],s$1.prototype,"id",void 0),e([y$2({type:String,json:{write:!0}})],s$1.prototype,"description",void 0),e([y$2({type:String,json:{write:{enabled:!0,isRequired:!0}}})],s$1.prototype,"name",void 0),e([y$2({type:p$8,json:{write:!0}})],s$1.prototype,"originalFormat",void 0),e([y$2({type:p$8,json:{write:{enabled:!0,isRequired:!0}}})],s$1.prototype,"renderingFormat",void 0),e([y$2({type:String,json:{write:!0}})],s$1.prototype,"unit",void 0),e([y$2({type:Number,json:{write:!0}})],s$1.prototype,"volumeId",void 0),e([y$2({type:["stc-hot-spot-results","stc-cluster-outlier-results","stc-estimated-bin","generic-nearest-interpolated"],json:{write:!0}})],s$1.prototype,"type",void 0),s$1=e([c$5("esri.layers.voxel.VoxelVariable")],s$1);const p$7=s$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let l$2=class l extends(i$1(f$2)){constructor(){super(...arguments),this.color=u$4.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label="",this.colorLocked=!1;}};e([y$2({type:u$4,json:{type:[T],write:{enabled:!0,isRequired:!0}}})],l$2.prototype,"color",void 0),e([y$2({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],l$2.prototype,"value",void 0),e([y$2({type:Boolean,json:{default:!0,write:!0}})],l$2.prototype,"enabled",void 0),e([y$2({type:String,json:{write:!0}})],l$2.prototype,"label",void 0),e([y$2({type:Boolean,json:{default:!1,write:!0}})],l$2.prototype,"colorLocked",void 0),l$2=e([c$5("esri.layers.voxel.VoxelIsosurface")],l$2);const a$3=l$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let c$2=class c extends(i$1(f$2)){constructor(){super(...arguments),this.color=null,this.position=0;}};e([y$2({type:u$4,json:{type:[T],write:{enabled:!0,isRequired:!0}}})],c$2.prototype,"color",void 0),e([y$2({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],c$2.prototype,"position",void 0),c$2=e([c$5("esri.layers.voxel.VoxelColorStop")],c$2);const l$1=c$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let p$6=class p extends(i$1(f$2)){constructor(){super(...arguments),this.opacity=1,this.position=0;}};e([y$2({type:Number,json:{name:"alpha",write:{enabled:!0,isRequired:!0}}})],p$6.prototype,"opacity",void 0),e([y$2({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],p$6.prototype,"position",void 0),p$6=e([c$5("esri.layers.voxel.VoxelOpacityStop")],p$6);const i=p$6;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let p$5=class p extends(i$1(f$2)){constructor(){super(...arguments),this.enabled=!1,this.range=null;}};e([y$2({type:Boolean,json:{default:!1,write:!0}})],p$5.prototype,"enabled",void 0),e([y$2({type:[Number],json:{write:!0}})],p$5.prototype,"range",void 0),p$5=e([c$5("esri.layers.voxel.VoxelRangeFilter")],p$5);const a$2=p$5;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var u;!function(o){o[o.Color=1]="Color",o[o.Alpha=2]="Alpha",o[o.Both=3]="Both";}(u||(u={}));let y$1=class y extends(i$1(f$2)){constructor(o){super(o),this.interpolation=null,this.stretchRange=null,this.rangeFilter=null,this._colorMapSize=256,this.colorStops=new(V.ofType(l$1)),this.opacityStops=new(V.ofType(i));}set colorStops(o){this._set("colorStops",n$2(o,this._get("colorStops"),V.ofType(l$1)));}set opacityStops(o){this._set("opacityStops",n$2(o,this._get("opacityStops"),V.ofType(i)));}getPreviousNext(o,t,r){let e=o;for(;--e>0&&t[e].type!==r&&t[e].type!==u.Both;);let s=o;const i=t.length;for(;++s<i&&t[s].type!==r&&t[s].type!==u.Both;);return [e,s]}get rasterizedTransferFunction(){const o=[];if(this.colorStops.length<2)return o;const r=[],e=[],s=1e-5;for(const t of this.colorStops){if(!t.color)return o;e.push({color:{r:t.color.r,g:t.color.g,b:t.color.b,a:Math.round(255*(1-t.color.a))},position:t.position,type:u.Color});}if(0===this.opacityStops.length)for(const t of e)r.push({color:t.color,position:t.position});else {for(const t of this.opacityStops){const o=e$2(t.position,0,1),r=Math.round(255*e$2(1-t.opacity,0,1));let i=!1;for(const t of e)if(t.type===u.Color&&Math.abs(t.position-o)<s){t.color.a=r,t.type=u.Both,i=!0;break}i||e.push({color:{r:0,g:0,b:0,a:r},position:t.position,type:u.Alpha});}e.sort(((o,t)=>o.position<t.position?-1:1));const o=e.length;for(let t=0;t<o;++t){const r=e[t];if(r.type!==u.Both)if(r.type===u.Color){const[s,i]=this.getPreviousNext(t,e,u.Alpha);if(-1!==s&&i!==o){const o=(r.position-e[s].position)/(e[i].position-e[s].position);r.color.a=Math.round(f$3(e[s].color.a,e[i].color.a,o));}else r.color.a=-1!==s?e[s].color.a:e[i].color.a;}else {const[s,i]=this.getPreviousNext(t,e,u.Color);if(-1!==s&&i!==o){const o=(r.position-e[s].position)/(e[i].position-e[s].position),t=e[s].color,p=e[i].color;S.forEach((e=>{r.color[e]=Math.round(f$3(t[e],p[e],o));}));}else -1!==s?S.forEach((o=>{r.color[o]=e[s].color[o];})):S.forEach((o=>{r.color[o]=e[i].color[o];}));}}for(const t of e)r.push({color:t.color,position:t.position});}r[0].position=0,r[r.length-1].position=1;let i=0,l=1;for(let c=0;c<this._colorMapSize;++c){const e=c/this._colorMapSize;for(;e>r[l].position;)i=l++;const s=(e-r[i].position)/(r[l].position-r[i].position),a=r[i].color,h=r[l].color,f=new u$4;S.forEach((o=>{f[o]=Math.round(f$3(a[o],h[o],s));})),f.a=e$2(1-f$3(a.a,h.a,s)/255,0,1),o.push(f);}return o}getColorForContinuousDataValue(o,t){const r=this.rasterizedTransferFunction;if(this.colorStops.length<2||!Array.isArray(this.stretchRange)||this.stretchRange.length<2||r.length<256)return null;let e=this.stretchRange[0],s=this.stretchRange[1];if(e>s){const o=e;e=s,s=o;}o=e$2(o,e,s);const i=r[Math.round((o-e)/(s-e)*(this._colorMapSize-1))].clone();return t||(i.a=1),i}};e([y$2({type:["linear","nearest"],json:{write:!0}})],y$1.prototype,"interpolation",void 0),e([y$2({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],y$1.prototype,"stretchRange",void 0),e([y$2({type:V.ofType(l$1),json:{write:{enabled:!0,overridePolicy(){return {enabled:!!this.colorStops&&this.colorStops.length>0}}}}})],y$1.prototype,"colorStops",null),e([y$2({type:V.ofType(i),json:{read:{source:"alphaStops"},write:{enabled:!0,target:"alphaStops",overridePolicy(){return {enabled:!!this.opacityStops&&this.opacityStops.length>0}}}}})],y$1.prototype,"opacityStops",null),e([y$2({type:a$2,json:{write:!0}})],y$1.prototype,"rangeFilter",void 0),e([y$2({type:[u$4],clonable:!1,json:{read:!1}})],y$1.prototype,"rasterizedTransferFunction",null),y$1=e([c$5("esri.layers.voxel.VoxelTransferFunctionStyle")],y$1);const g=y$1,S=["r","g","b"];

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let a$1=class a extends(i$1(f$2)){constructor(){super(...arguments),this.color=u$4.fromArray([0,0,0,0]),this.value=0,this.enabled=!0,this.label="";}};e([y$2({type:u$4,json:{type:[T],write:{enabled:!0,isRequired:!0}}})],a$1.prototype,"color",void 0),e([y$2({type:T,json:{write:{enabled:!0,isRequired:!0}}})],a$1.prototype,"value",void 0),e([y$2({type:Boolean,json:{default:!0,write:!0}})],a$1.prototype,"enabled",void 0),e([y$2({type:String,json:{write:!0}})],a$1.prototype,"label",void 0),a$1=e([c$5("esri.layers.voxel.VoxelUniqueValue")],a$1);const l=a$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var p$4;let c$1=p$4=class extends f$2{constructor(e){super(e),this.variableId=0,this.label="",this.transferFunction=null,this.uniqueValues=null,this.isosurfaces=null,this.uniqueValues=new(V.ofType(l)),this.isosurfaces=new(V.ofType(a$3));}clone(){return new p$4({variableId:this.variableId,label:this.label,transferFunction:a$5(this.transferFunction),uniqueValues:a$5(this.uniqueValues),isosurfaces:a$5(this.isosurfaces)})}};e([y$2({type:T,json:{write:{enabled:!0,isRequired:!0}}})],c$1.prototype,"variableId",void 0),e([y$2({type:String,json:{write:!0}})],c$1.prototype,"label",void 0),e([y$2({type:g,json:{write:{enabled:!0,overridePolicy(){return {enabled:!this.uniqueValues||this.uniqueValues.length<1}}}}})],c$1.prototype,"transferFunction",void 0),e([y$2({type:V.ofType(l),json:{write:{enabled:!0,overridePolicy(){return {enabled:!!this.uniqueValues&&this.uniqueValues.length>0}}}}})],c$1.prototype,"uniqueValues",void 0),e([y$2({type:V.ofType(a$3),json:{write:{enabled:!0,overridePolicy(){const e=!this.uniqueValues||this.uniqueValues.length<1,s=!!this.isosurfaces&&this.isosurfaces.length>0;return {enabled:e&&s}}}}})],c$1.prototype,"isosurfaces",void 0),c$1=p$4=e([c$5("esri.layers.voxel.VoxelVariableStyle")],c$1);const f=c$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t$2=class t extends f$2{constructor(){super(...arguments),this.values=null;}};e([y$2({type:[Number],json:{write:!0}})],t$2.prototype,"values",void 0),t$2=e([c$5("esri.layers.voxel.VoxelIrregularSpacing")],t$2);const p$3=t$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let t$1=class t extends f$2{constructor(){super(...arguments),this.scale=1,this.offset=0;}};e([y$2({type:Number,json:{write:!0}})],t$1.prototype,"scale",void 0),e([y$2({type:Number,json:{write:!0}})],t$1.prototype,"offset",void 0),t$1=e([c$5("esri.layers.voxel.VoxelRegularSpacing")],t$1);const p$2=t$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let a=class extends f$2{constructor(){super(...arguments),this.irregularSpacing=null,this.isPositiveUp=!0,this.isWrappedDateLine=!1,this.label=null,this.name=null,this.quantity=null,this.regularSpacing=null,this.size=0,this.unit=null;}get isRegular(){return (null==this.irregularSpacing||void 0===this.irregularSpacing)&&null!==this.regularSpacing}getRange(){return this.isRegular?[this.regularSpacing.offset,this.regularSpacing.offset+this.regularSpacing.scale*(this.size-1)]:Array.isArray(this.irregularSpacing?.values)&&this.irregularSpacing.values.length>1?[this.irregularSpacing.values[0],this.irregularSpacing.values[this.irregularSpacing.values.length-1]]:[0,0]}};e([y$2({type:p$3,json:{write:!0}})],a.prototype,"irregularSpacing",void 0),e([y$2({type:Boolean,json:{write:!0}})],a.prototype,"isPositiveUp",void 0),e([y$2({type:Boolean,json:{write:!0}})],a.prototype,"isWrappedDateLine",void 0),e([y$2({type:String,json:{write:!0}})],a.prototype,"label",void 0),e([y$2({type:String,json:{write:!0}})],a.prototype,"name",void 0),e([y$2({type:String,json:{write:!0}})],a.prototype,"quantity",void 0),e([y$2({type:p$2,json:{write:!0}})],a.prototype,"regularSpacing",void 0),e([y$2({type:Number,json:{write:!0}})],a.prototype,"size",void 0),e([y$2({type:String,json:{write:!0}})],a.prototype,"unit",void 0),e([y$2({type:Boolean,json:{read:!1}})],a.prototype,"isRegular",null),a=e([c$5("esri.layers.voxel.VoxelDimension")],a);const p$1=a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let d$2=class d extends f$2{constructor(e){super(e),this.id=0,this.dimensions=null,this.spatialReference=f$4.WGS84;}get zDimension(){if(!this.dimensions)return -1;if(!Array.isArray(this.dimensions))return -1;if(4!==this.dimensions.length)return -1;for(let e=2;e<4;++e)if(this.dimensions[e].size>0)return e;return -1}get isValid(){return !!this.dimensions&&(!!Array.isArray(this.dimensions)&&(4===this.dimensions.length&&(!(this.dimensions[0].size<1||this.dimensions[1].size<1)&&!(-1===this.zDimension||this.dimensions[this.zDimension].size<1))))}get originInLayerSpace3D(){if(!this.isValid||"xyt"===this.volumeType)return [0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),s=this.dimensions[2],r=s.isRegular?s.getRange():[0,s.size];return [e[0],i[0],r[0]]}get voxelSizeInLayerSpaceSigned(){if(!this.isValid||"xyt"===this.volumeType)return [0,0,0];const e=this.dimensions[0].getRange(),i=this.dimensions[1].getRange(),s=this.dimensions[2],r=s.isRegular?s.getRange():[0,s.size],t=[this.sizeInVoxels[0],this.sizeInVoxels[1],this.sizeInVoxels[2]];for(let n=0;n<3;++n)t[n]<2?t[n]=1:t[n]-=1;return s.isRegular&&!s.isPositiveUp&&(t[2]*=-1),[(e[1]-e[0])/t[0],(i[1]-i[0])/t[1],(r[1]-r[0])/t[2]]}get volumeType(){if(this.isValid){const e=this.dimensions[2].size>0,i=this.dimensions[3].size>0;if(!e&&i)return "xyt";if(e&&i)return "xyzt"}return "xyz"}get sizeInVoxels(){if(!this.isValid)return [0,0,0];const e=this.zDimension;return [this.dimensions[0].size,this.dimensions[1].size,this.dimensions[e].size]}computeVoxelSpaceLocation(e){if(!this.isValid)return [0,0,0];if("xyt"===this.volumeType)return s$5.getLogger(this).error("computeVoxelSpacePosition cannot be used with XYT volumes."),[0,0,0];if(!G(this.spatialReference,e.spatialReference))return s$5.getLogger(this).error("pos argument should have the same spatial reference as the VoxelLayer."),[0,0,0];const i=r$1(e.x,e.y,e.z??0);e$3(i,i,this.originInLayerSpace3D),i$2(i,i,this.voxelSizeInLayerSpaceSigned);const r=this.dimensions[this.zDimension];if(!r.isRegular&&Array.isArray(r.irregularSpacing?.values)&&r.irregularSpacing.values.length>1){const s=e.z??0,t=r.irregularSpacing.values,n=r.isPositiveUp?1:-1,o=t.reduce(((e,i)=>Math.abs(n*i-s)<Math.abs(n*e-s)?i:e));for(let e=0;e<t.length;++e)if(t[e]===o){i[2]=e;break}}return [i[0],i[1],i[2]]}computeLayerSpaceLocation(e){if(!this.isValid)return new x$2({x:0,y:0,spatialReference:this.spatialReference});const i=e$4(e);if(c$6(i,i,this.voxelSizeInLayerSpaceSigned),u$5(i,i,this.originInLayerSpace3D),"xyt"===this.volumeType)return new x$2({x:i[0],y:i[1],spatialReference:this.spatialReference});const s=this.dimensions[this.zDimension];return s.isRegular||Array.isArray(s.irregularSpacing?.values)&&(e[2]<0?i[2]=s.irregularSpacing.values[0]:e[2]<s.irregularSpacing.values.length?i[2]=s.irregularSpacing.values[e[2]]:i[2]=s.irregularSpacing.values[s.irregularSpacing.values.length-1],s.isPositiveUp||(i[2]*=-1)),new x$2({x:i[0],y:i[1],z:i[2],spatialReference:this.spatialReference})}};e([y$2({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],d$2.prototype,"id",void 0),e([y$2({type:[p$1],json:{write:{enabled:!0,isRequired:!0}}})],d$2.prototype,"dimensions",void 0),e([y$2({type:f$4,json:{read:{enabled:!1}}})],d$2.prototype,"spatialReference",void 0),e([y$2({type:Number,json:{read:!1}})],d$2.prototype,"zDimension",null),e([y$2({type:[Boolean],json:{read:!1}})],d$2.prototype,"isValid",null),e([y$2({type:[Number],json:{read:!1}})],d$2.prototype,"originInLayerSpace3D",null),e([y$2({type:[Number],json:{read:!1}})],d$2.prototype,"voxelSizeInLayerSpaceSigned",null),e([y$2({type:["xyz","xyzt","xyt"],json:{read:{enabled:!1}}})],d$2.prototype,"volumeType",null),e([y$2({type:[Number],json:{read:!1}})],d$2.prototype,"sizeInVoxels",null),d$2=e([c$5("esri.layers.voxel.VoxelVolume")],d$2);const y=d$2;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var t;let s=t=class extends f$2{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4];}isValid(){const e=new t;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&(!!this.brickSize&&(!!this.nodeSize&&(!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&(3===this.brickSize.length&&3===this.nodeSize.length&&(32===this.brickSize[0]&&32===this.brickSize[1]&&32===this.brickSize[2]&&(4===this.nodeSize[0]&&4===this.nodeSize[1]&&4===this.nodeSize[2]))))))}};e([y$2({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"apronWidth",void 0),e([y$2({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"brickSize",void 0),e([y$2({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"maxLodLevel",void 0),e([y$2({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],s.prototype,"nodeSize",void 0),s=t=e([c$5("esri.layers.voxel.VoxelVolumeIndex")],s);const d$1=s;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let m$1=class m extends(i$1(f$2)){constructor(o){super(o),this.enabled=!0,this.label="",this.normal=null,this.point=null;}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[o,t]=b(this.normal);return s$3.normalize(a$4(o),0,!0)}set orientation(o){const t=g$1(o,this.tilt);this._set("normal",t),this._set("orientation",o);}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[o,t]=b(this.normal);return s$3.normalize(a$4(t),0,!0)}set tilt(o){const t=g$1(this.orientation,o);this._set("normal",t),this._set("tilt",o);}};e([y$2({type:Boolean,json:{default:!0,write:!0}})],m$1.prototype,"enabled",void 0),e([y$2({type:String,json:{write:!0}})],m$1.prototype,"label",void 0),e([y$2({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),s$4((o=>s$3.normalize(a$4(o),0,!0)))],m$1.prototype,"orientation",null),e([y$2({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),s$4((o=>s$3.normalize(a$4(o),0,!0)))],m$1.prototype,"tilt",null),e([y$2({type:[Number],json:{write:!0}})],m$1.prototype,"normal",void 0),e([y$2({type:[Number],json:{write:!0}})],m$1.prototype,"point",void 0),m$1=e([c$5("esri.layers.voxel.VoxelDynamicSection")],m$1);const c=m$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var p;let m=p=class extends f$2{constructor(e){super(e),this.volumeId=0,this.verticalExaggeration=1,this.exaggerationMode="scale-height",this.verticalOffset=0,this.slices=new(V.ofType(c$3)),this.dynamicSections=new(V.ofType(c));}set slices(e){this._set("slices",n$2(e,this._get("slices"),V.ofType(c$3)));}set dynamicSections(e){this._set("dynamicSections",n$2(e,this._get("dynamicSections"),V.ofType(c)));}clone(){return new p({volumeId:this.volumeId,verticalExaggeration:this.verticalExaggeration,exaggerationMode:this.exaggerationMode,verticalOffset:this.verticalOffset,slices:a$5(this.slices),dynamicSections:a$5(this.dynamicSections)})}};e([y$2({type:T,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"volumeId",void 0),e([y$2({type:Number,json:{default:1,write:!0}})],m.prototype,"verticalExaggeration",void 0),e([y$2({type:["scale-position","scale-height"],json:{default:"scale-height",write:!0}})],m.prototype,"exaggerationMode",void 0),e([y$2({type:Number,json:{default:0,write:!0}})],m.prototype,"verticalOffset",void 0),e([y$2({type:V.ofType(c$3),json:{write:{enabled:!0,overridePolicy(){return {enabled:!!this.slices&&this.slices.length>0}}}}})],m.prototype,"slices",null),e([y$2({type:V.ofType(c),json:{write:{enabled:!0,overridePolicy(){return {enabled:!!this.dynamicSections&&this.dynamicSections.length>0}}}}})],m.prototype,"dynamicSections",null),m=p=e([c$5("esri.layers.voxel.VoxelVolumeStyle")],m);const d=m;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let A=class extends(L(l$4(u$6(j$2(t$4(m$3(e$5(i$3(b$1))))))))){constructor(e){super(e),this.serviceRoot="",this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=null,this.currentVariableId=0,this.volumeStyles=null,this.renderMode="volume",this.variableStyles=null,this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new p$9,this.opacity=1,this.variables=new V,this.volumes=new V,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.fullExtent=null,this.popupEnabled=!1,this.test=null,this.volumeStyles=new(V.ofType(d)),this.variableStyles=new(V.ofType(f)),this.sections=new(V.ofType(u$1));}normalizeCtorArgs(e){return e?.constantUpscaling&&(this.test={constantUpscaling:!0},delete e.constantUpscaling),e}set url(e){this._set("url",y$3(e,s$5.getLogger(this)));}load(e){const t=null!=e?e.signal:null,i=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(a$6).then((()=>this._fetchService(t))).then((()=>this.serviceRoot=this.url));return this.addResolvingPromise(i),Promise.resolve(this)}read(e,t){super.read(e,t);for(const i of this.volumes)i.spatialReference=this.spatialReference;}readVersion(e,t){return super.parseVersionString(e)}validateLayer(e){if(e.layerType&&e.layerType!==this.operationalLayerType)throw new s$6("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new s$6("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new s$6("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}readFullExtent(e,t,i){if(null!=e&&"object"==typeof e){const o=M.fromJSON(e,i);if(0===o.zmin&&0===o.zmax&&Array.isArray(t.volumes)){const e=y.fromJSON(t.volumes[0]);if(e.isValid&&"xyt"!==e.volumeType){const t=e.dimensions[2];if(t.isRegular){let e=t.regularSpacing.offset,i=t.regularSpacing.offset+t.regularSpacing.scale*(t.size-1);if(e>i){const t=e;e=i,i=t;}o.zmin=e,o.zmax=i;}}}return o}return null}get voxelFields(){const e=[new y$4({name:"Voxel.ServiceValue",alias:"Value",domain:null,editable:!1,length:128,type:"string"}),new y$4({name:"Voxel.ServiceVariableLabel",alias:"Variable",domain:null,editable:!1,length:128,type:"string"}),new y$4({name:"Voxel.Position",alias:"Voxel Position",domain:null,editable:!1,length:128,type:"string"})],t=this.getVolume(null);if(null!=t){if("xyzt"===t.volumeType||"xyt"===t.volumeType){const t=new y$4({name:"Voxel.ServiceLocalTime",alias:"Local Time",domain:null,editable:!1,length:128,type:"string"});e.push(t);const i=new y$4({name:"Voxel.ServiceNativeTime",alias:"Native Time",domain:null,editable:!1,length:128,type:"string"});e.push(i);}if("xyt"!==t.volumeType){const t=new y$4({name:"Voxel.ServiceDepth",alias:"Depth",domain:null,editable:!1,length:128,type:"string"});e.push(t);}}return e}get popupTemplate(){return this.loaded?this.createPopupTemplate():null}get defaultPopupTemplate(){return this.createPopupTemplate()}createPopupTemplate(e){const t=this.voxelFields,i=this.title;return p$c({fields:t,title:i},e)}getConfiguration(){const e={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:this.index?.toJSON(),sections:this.getSections(),style:{volumeStyles:this.getVolumeStyles(),currentVariableId:this.currentVariableId,renderMode:this.renderMode,variableStyles:this.getVariableStyles(),enableSections:this.enableSections,enableDynamicSections:this.enableDynamicSections,enableIsosurfaces:this.enableIsosurfaces,enableSlices:this.enableSlices,shading:this.shading}};return e.index&&this.index?.isValid()?JSON.stringify(e):""}getVariableStyle(e){let t=-1;t=null!=e?e:this.currentVariableId;if(!this.variableStyles||-1===t)return null;const i=this.variableStyles.findIndex((e=>e.variableId===t));return i<0?null:this.variableStyles.at(i)}getVariable(e){let t=-1;if(t=null!=e?e:this.currentVariableId,!this.variables||-1===t)return null;const i=this.variables.findIndex((e=>e.id===t));return i<0?null:this.variables.at(i)}getVolume(e){const t=this.getVariable(e);return null!=t?this.volumes.find((({id:e})=>e===t.volumeId)):null}getVolumeStyle(e){const t=this.getVariable(e);return null!=t?this.volumeStyles.find((({volumeId:e})=>e===t.volumeId)):null}getColorForContinuousDataValue(e,t,i){const o=this.getVariable(e);if(null==o||"continuous"!==o.renderingFormat?.continuity)return null;if(!this.variableStyles)return null;const r=this.variableStyles.findIndex((t=>t.variableId===e));if(r<0)return null;const s=this.variableStyles.at(r);return s?.transferFunction?s.transferFunction.getColorForContinuousDataValue(t,i):null}getSections(){const e=[];for(const t of this.sections)e.push(new u$1({enabled:t.enabled,href:t.href,id:t.id,label:t.label,normal:t.normal,point:t.point,sizeInPixel:t.sizeInPixel,slices:t.slices,timeId:t.timeId,variableId:t.variableId}));return e}getVariableStyles(){const e=[];for(const t of this.variableStyles){const i=this._getVariable(t);if(null!=i){const o=t.clone();o.isosurfaces.length>4&&(o.isosurfaces=o.isosurfaces.slice(0,3),s$5.getLogger(this).error("A maximum of 4 isosurfaces are supported for Voxel Layers."));for(const e of o.isosurfaces)if(!e.colorLocked){const t=this.getColorForContinuousDataValue(o.variableId,e.value,!1);null===t||t.equals(e.color)||(e.color=t);}if("continuous"===i.renderingFormat.continuity)(null===o.transferFunction||o.transferFunction.colorStops.length<2)&&s$5.getLogger(this).error(`VoxelVariableStyle for variable ${i.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`),null!==o.transferFunction&&(Array.isArray(o.transferFunction.stretchRange)&&2===o.transferFunction.stretchRange.length||(s$5.getLogger(this).error(`VoxelVariableStyle for variable ${i.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`),o.transferFunction.stretchRange=[0,1],o.transferFunction.colorStops.removeAll()));else if("discrete"===i.renderingFormat.continuity)if(0===t.uniqueValues.length)s$5.getLogger(this).error(`VoxelVariableStyle for variable ${i.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);else for(const e of t.uniqueValues)null!==e.label&&void 0!==e.label||null===e.value||void 0===e.value||(e.label=e.value.toString());e.push(o);}else s$5.getLogger(this).error(`VoxelVariable ID=${t.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`);}return e}getVolumeStyles(){const e=[];for(const t of this.volumeStyles){const i=this._getVolumeFromVolumeId(t.volumeId);if(null!=i){const o=t.clone();for(const e of o.slices)this._isPlaneValid(e,[0,1,i.zDimension],i.dimensions)||(e.enabled=!1,e.label="invalid");for(const e of o.dynamicSections)this._isPlaneValid(e,[0,1,i.zDimension],i.dimensions)||(e.enabled=!1,e.label="invalid");e.push(o);}else s$5.getLogger(this).error(`VoxelVolume ID=${t.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`);}return e}_getVariable(e){const t=e.variableId;for(const i of this.variables)if(i.id===t)return i;return null}_getVolumeFromVolumeId(e){for(const t of this.volumes)if(t.id===e)return t;return null}_isPlaneValid(e,t,i){if(!e.point)return !1;if(!Array.isArray(e.point)||3!==e.point.length)return !1;if(!e.normal)return !1;if(!Array.isArray(e.normal)||3!==e.normal.length)return !1;const o=r$1(e.normal[0],e.normal[1],e.normal[2]);z(o,o);const r=1e-6;return !(Math.abs(o[0])+Math.abs(o[1])+Math.abs(o[2])<r)&&(e.normal[0]=o[0],e.normal[1]=o[1],e.normal[2]=o[2],!0)}};e([y$2({type:["Voxel"]})],A.prototype,"operationalLayerType",void 0),e([y$2(c$7)],A.prototype,"legendEnabled",void 0),e([y$2({json:{write:!0}})],A.prototype,"title",void 0),e([y$2(d$4)],A.prototype,"url",null),e([y$2({type:V.ofType(u$1),json:{origins:{"web-scene":{name:"layerDefinition.sections",write:!0}}}})],A.prototype,"sections",void 0),e([y$2({type:T,json:{origins:{"web-scene":{name:"layerDefinition.style.currentVariableId",write:{enabled:!0,isRequired:!0,ignoreOrigin:!0}},service:{name:"style.currentVariableId"}}}})],A.prototype,"currentVariableId",void 0),e([y$2({type:V.ofType(d),json:{origins:{"web-scene":{name:"layerDefinition.style.volumeStyles",write:!0},service:{name:"style.volumeStyles"}}}})],A.prototype,"volumeStyles",void 0),e([y$2({type:["volume","surfaces"],json:{origins:{"web-scene":{name:"layerDefinition.style.renderMode",write:!0},service:{name:"style.renderMode"}}}})],A.prototype,"renderMode",void 0),e([y$2({type:V.ofType(f),json:{origins:{"web-scene":{name:"layerDefinition.style.variableStyles",write:!0},service:{name:"style.variableStyles"}}}})],A.prototype,"variableStyles",void 0),e([y$2({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSlices",write:!0},service:{name:"style.enableSlices"}}}})],A.prototype,"enableSlices",void 0),e([y$2({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSections",write:!0},service:{name:"style.enableSections"}}}})],A.prototype,"enableSections",void 0),e([y$2({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableDynamicSections",write:!0},service:{name:"style.enableDynamicSections"}}}})],A.prototype,"enableDynamicSections",void 0),e([y$2({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableIsosurfaces",write:!0},service:{name:"style.enableIsosurfaces"}}}})],A.prototype,"enableIsosurfaces",void 0),e([y$2({type:p$9,json:{origins:{"web-scene":{name:"layerDefinition.style.shading",write:!0},service:{name:"style.shading"}}}})],A.prototype,"shading",void 0),e([y$2({type:["show","hide"]})],A.prototype,"listMode",void 0),e([y$2({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],A.prototype,"opacity",void 0),e([y$2({type:V.ofType(p$7)})],A.prototype,"variables",void 0),e([y$2({type:V.ofType(y)})],A.prototype,"volumes",void 0),e([y$2({type:d$1})],A.prototype,"index",void 0),e([y$2({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],A.prototype,"minScale",void 0),e([y$2({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],A.prototype,"maxScale",void 0),e([y$2({json:{read:!1},readOnly:!0})],A.prototype,"type",void 0),e([y$2({readOnly:!0,json:{name:"serviceVersion"}})],A.prototype,"version",void 0),e([o("service","version")],A.prototype,"readVersion",null),e([y$2({type:M})],A.prototype,"fullExtent",void 0),e([o("service","fullExtent",["fullExtent"])],A.prototype,"readFullExtent",null),e([y$2({readOnly:!0,clonable:!1,json:{read:!1}})],A.prototype,"voxelFields",null),e([y$2({type:Boolean,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,ignoreOrigin:!0,writer(e,t,i){t[i]=!e;}},origins:{"portal-item":{default:!0},"web-scene":{default:!0}}}})],A.prototype,"popupEnabled",void 0),e([y$2({type:P,json:{read:!1}})],A.prototype,"popupTemplate",null),e([y$2({readOnly:!0})],A.prototype,"defaultPopupTemplate",null),A=e([c$5("esri.layers.VoxelLayer")],A);const E=A;

export { E as default };
