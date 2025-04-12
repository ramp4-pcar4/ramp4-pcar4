import { r as r$1, eW as u, gm as u$1, ep as l$1, c as s$2 } from './main-5658cd6e.js';
import { a as e$1, E as E$1, S } from './color-6132b2c2.js';
import { U } from './MaterialKey-99ff6359.js';
import { r, s } from './definitions-281daf3f.js';
import { C as C$1 } from './enums-1f7f0b0a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
class e{static getStorageSpec(t){return null}static createOrUpdateRendererSchema(e,r){return r$1(e)&&"default"===e.type?e:{type:"default"}}static getVariation(t){return {}}static getVariationHash(t){return 0}}e.type="default",e.programSpec=null;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let n$1 = class n extends e{static getStorageSpec({attributes:e}){return {visualVariables:!1,attributes:e??null}}static _createRendererSchema(){return {type:"dot-density",colors:new Float32Array(32),dotValue:-1,dotSize:-1,dotScale:-1,dotBlending:!1,backgroundColor:new Float32Array(4),activeDots:new Float32Array(8),seed:-1}}static createOrUpdateRendererSchema(r$2,a){const{attributes:n,dotValue:i,referenceScale:d,dotSize:l,dotBlendingEnabled:s,seed:c,backgroundColor:u}=a,m=r$1(r$2)&&"dot-density"===r$2.type?r$2:this._createRendererSchema();m.dotValue=i,m.dotSize=l,m.dotScale=d,m.dotBlending=s,m.seed=c;const{colors:g,activeDots:p,backgroundColor:y}=m;for(let e=0;e<r;e++){const o=e>=n.length?null:n[e].color;e$1(g,o,4*e);}for(let e=0;e<8;e++)p[e]=e<a.attributes.length?1:0;return e$1(y,u),m}static getVariation(e){return {ddDotBlending:e.dotBlending}}static getVariationHash(e){return e.dotBlending?1:0}};n$1.type="dot-density",n$1.programSpec={shader:"materials/fill",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:C$1.SHORT},{location:1,name:"a_id",count:3,type:C$1.UNSIGNED_BYTE},{location:2,name:"a_bitset",count:1,type:C$1.UNSIGNED_BYTE},{location:3,name:"a_inverseArea",count:1,type:C$1.FLOAT}]}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
class n extends e{static getStorageSpec({field:e,valueExpression:t}){return {visualVariables:!1,attributes:e||t?[{field:e,valueExpression:t}]:null}}static _createRendererSchema(){return {type:"heatmap",radius:-1,referenceScale:-1,isFieldActive:0,minDensity:-1,densityRange:-1,kernel:null,gradient:null,gradientHash:"invalid"}}static createOrUpdateRendererSchema(a,i){const{radius:n,minDensity:s,maxDensity:o,referenceScale:c,field:l,valueExpression:m,colorStops:p}=i,d=o-s,u$2=l||m?1:0,y=p.map((({color:e,ratio:t})=>`${t}:${e.toString()}`)).join();let h,S=!0;return r$1(a)&&"heatmap"===a.type?(h=a,S=y!==a.gradientHash):h=this._createRendererSchema(),h.radius=u(n),h.minDensity=s,h.densityRange=d,h.referenceScale=c,h.isFieldActive=u$2,S&&(h.gradient=u$1(p),h.gradientHash=y),h}}n.type="heatmap",n.programSpec={shader:"materials/icon/heatmapAccumulate",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:C$1.SHORT},{location:1,name:"a_vertexOffset",count:2,type:C$1.SHORT},{location:4,name:"a_id",count:4,type:C$1.UNSIGNED_BYTE}]}};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
class l extends e{static getStorageSpec({attributes:e}){return {visualVariables:!0,attributes:e??null}}static _createRendererSchema(){return {type:"pie-chart",colors:new Float32Array(4*s),defaultColor:new Float32Array(4),othersColor:new Float32Array(4),outlineColor:new Float32Array(4),holePercentage:0,sectorThreshold:0,outlineWidth:1,numberOfFields:10}}static createOrUpdateRendererSchema(n,i){const{attributes:l,defaultColor:s$1,holePercentage:c,othersCategory:m,outline:u$1}=i,d=r$1(n)&&"pie-chart"===n.type?n:this._createRendererSchema();for(let t=0;t<s;t++){const o=t>=l.length?new l$1([0,0,0,0]):l[t].color;e$1(d.colors,o,4*t);}return e$1(d.defaultColor,s$1),e$1(d.othersColor,m?.color),e$1(d.outlineColor,u$1?.color),d.outlineWidth=u(u$1?.width||0),d.holePercentage=c,d.sectorThreshold=m?.threshold||0,d.numberOfFields=l.length,d}static getVariation(e){return {numberOfFields:e.numberOfFields}}static getVariationHash(e){return e.numberOfFields}}l.type="pie-chart",l.programSpec={shader:"materials/pie",vertexLayout:{geometry:[{location:0,name:"a_pos",count:2,type:C$1.SHORT},{location:1,name:"a_vertexOffset",count:2,type:C$1.SHORT},{location:2,name:"a_texCoords",count:2,type:C$1.UNSIGNED_SHORT},{location:3,name:"a_bitSetAndDistRatio",count:2,type:C$1.UNSIGNED_SHORT},{location:4,name:"a_id",count:4,type:C$1.UNSIGNED_BYTE},{location:5,name:"a_color",count:4,type:C$1.UNSIGNED_BYTE,normalized:!0},{location:6,name:"a_outlineColor",count:4,type:C$1.UNSIGNED_BYTE,normalized:!0},{location:7,name:"a_sizeAndOutlineWidth",count:4,type:C$1.UNSIGNED_BYTE},{location:8,name:"a_zoomRange",count:2,type:C$1.UNSIGNED_SHORT}]},hittestAttributes:["a_vertexOffset","a_texCoords"]};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function s$1(r,t){if(r.type!==t)throw new s$2("material-view-model:unexpected-renderer-schema",`expected to find renderer schema of type "${t}" but found type "${r.type}"`)}function c(e$1){switch(e$1?.type){case"dot-density":return n$1;case"heatmap":return n;case"pie-chart":return l;default:return e}}function p(e$1){const{geometryType:s,symbologyType:c}=U.load(e$1);switch(s){case E$1.FILL:if(c===S.DOT_DENSITY)return n$1;break;case E$1.MARKER:switch(c){case S.HEATMAP:return n;case S.PIE_CHART:return l}}return e}

export { c, e, p, s$1 as s };
