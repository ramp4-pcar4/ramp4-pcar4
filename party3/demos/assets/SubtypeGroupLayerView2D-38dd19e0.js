import { aX as e, aZ as c, b3 as d$1, b5 as P$1, X as has } from './main-8be6dd14.js';
import { X } from './FeatureLayerView2D-7487c82f.js';
import './preload-helper-a4975f27.js';
import './Container-91519481.js';
import './highlightReasons-50d585d5.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-36d78877.js';
import './LayerView-f51651aa.js';
import './TechniqueInstance-381c14b2.js';
import './UpdateTracking2D-fbec885e.js';
import './TurboLine-568f698b.js';
import './enums-d24bcbbf.js';
import './earcut-dec6dbac.js';
import './GeometryUtils-a19f6b8e.js';
import './Rect-09e0f861.js';
import './LabelMetric-41a59d20.js';
import './Program-bf1584a8.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-c9b32898.js';
import './constants-412c3a33.js';
import './TileContainer-5190037a.js';
import './WGLContainer-7630074c.js';
import './ProgramTemplate-b6568f10.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-4c3c0715.js';
import './floatRGBA-e4b4b323.js';
import './FeatureCommandQueue-5b5bc13a.js';
import './HighlightCounter-894a4672.js';
import './popupUtils-922cc606.js';
import './RefreshableLayerView-c2e9885b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
