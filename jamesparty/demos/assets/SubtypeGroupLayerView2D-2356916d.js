import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-a5d6ba42.js';
import { X } from './FeatureLayerView2D-5ad94cc9.js';
import './preload-helper-a4975f27.js';
import './Container-25f20a81.js';
import './highlightReasons-b9c395c5.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-48cadd05.js';
import './LayerView-515a101a.js';
import './TechniqueInstance-ff6cc0f5.js';
import './UpdateTracking2D-61954630.js';
import './TurboLine-ca8ad412.js';
import './enums-d24bcbbf.js';
import './earcut-a49e31c6.js';
import './GeometryUtils-373fc28e.js';
import './Rect-09e0f861.js';
import './LabelMetric-d72a54bb.js';
import './Program-9df8661d.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-32e9aa94.js';
import './constants-412c3a33.js';
import './TileContainer-d5d58312.js';
import './WGLContainer-e390b61b.js';
import './ProgramTemplate-5fc32660.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-00b524f5.js';
import './floatRGBA-02520e27.js';
import './FeatureCommandQueue-27fd9f0d.js';
import './HighlightCounter-0240eb23.js';
import './popupUtils-9c08536a.js';
import './RefreshableLayerView-632524b3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
