import { e, k as a, bp as l$1, bu as h$1, h as has, r as r$1, bY as y } from './main-5658cd6e.js';
import D from './FeatureLayerView2D-f528f40a.js';
import './preload-helper-a4975f27.js';
import './Container-1d8ffe9c.js';
import './definitions-281daf3f.js';
import './enums-1f7f0b0a.js';
import './Texture-aefe232f.js';
import './LayerView-cbc55a02.js';
import './schemaUtils-b103f304.js';
import './color-6132b2c2.js';
import './enums-9c1aeae9.js';
import './VertexElementDescriptor-a439aa9a.js';
import './utils-6a1fc53c.js';
import './MaterialKey-99ff6359.js';
import './visualVariablesUtils-1950eea1.js';
import './ExpandedCIM-78770fa3.js';
import './BidiEngine-7b4fd637.js';
import './GeometryUtils-69e79e12.js';
import './Rect-e55bfbac.js';
import './quantizationUtils-ec270d9a.js';
import './floatRGBA-0f682c7a.js';
import './util-0ab7a9cb.js';
import './popupUtils-678d5012.js';
import './RefreshableLayerView-bc0c3310.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function l(e,r){return !e.visible||0!==e.minScale&&r>e.minScale||0!==e.maxScale&&r<e.maxScale}let o=class extends D{initialize(){this.addHandles([l$1((()=>this.view.scale),(()=>this._update()),h$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._proxy||!this._proxy.isReady,t=this._pipelineIsUpdating,a=null==this.tileRenderer||this.tileRenderer?.updating,n=e&&(r||s||i||t||a);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${n}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n  -> updatingTileRenderer ${a}\n`),n}_injectOverrides(e){let s=super._injectOverrides(e);const i=this.view.scale,t=this.layer.sublayers.filter((e=>l(e,i))).map((e=>e.subtypeCode));if(!t.length)return s;s=r$1(s)?s:(new y).toJSON();const n=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return s.where=s.where?`(${s.where}) AND (${n})`:n,s}_setLayersForFeature(e){const r=this.layer.fieldsIndex.get(this.layer.subtypeField),s=e.attributes[r.name],i=this.layer.sublayers.find((e=>e.subtypeCode===s));e.layer=e.sourceLayer=i;}_createSchemaConfig(){const e={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map((e=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:e.labelingInfo,labelsVisible:e.labelsVisible,renderer:e.renderer,subtypeCode:e.subtypeCode,orderBy:null})))},r=this.layer.sublayers.map((e=>e.subtypeCode)).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${r})`:"1=2";let i=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return i+=s,{...super._createSchemaConfig(),...e,definitionExpression:i}}};o=e([a("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const u=o;

export { u as default };
