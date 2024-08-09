import { aX as e, aZ as c, b3 as d$1, b5 as P$1, X as has } from './main-47e700d3.js';
import { X } from './FeatureLayerView2D-333939f4.js';
import './preload-helper-a4975f27.js';
import './Container-89e438e7.js';
import './highlightReasons-5d9e6538.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-aa5874a6.js';
import './LayerView-1ac42d86.js';
import './TechniqueInstance-c87b7c1b.js';
import './UpdateTracking2D-6bb6d087.js';
import './TurboLine-c8353506.js';
import './enums-d24bcbbf.js';
import './earcut-43670e3a.js';
import './GeometryUtils-5838bd0a.js';
import './Rect-09e0f861.js';
import './LabelMetric-9a64c2c0.js';
import './Program-f491c053.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-7379b68e.js';
import './constants-412c3a33.js';
import './TileContainer-088dcbe5.js';
import './WGLContainer-f927868e.js';
import './ProgramTemplate-febd61d1.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-f32731f9.js';
import './floatRGBA-e12ed1ad.js';
import './FeatureCommandQueue-6d8764db.js';
import './HighlightCounter-0d0caf53.js';
import './popupUtils-b6c33142.js';
import './RefreshableLayerView-5ce0c88f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
