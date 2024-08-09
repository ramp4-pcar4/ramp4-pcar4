import { aX as e, aZ as c, b3 as d$1, b5 as P$1, X as has } from './main-74a89b3f.js';
import { X } from './FeatureLayerView2D-49ae8478.js';
import './preload-helper-a4975f27.js';
import './Container-b54823be.js';
import './highlightReasons-5438f7f5.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-1ed855cd.js';
import './LayerView-f12d5581.js';
import './TechniqueInstance-50d5d70e.js';
import './UpdateTracking2D-ad92fbc7.js';
import './TurboLine-6fd43cd3.js';
import './enums-d24bcbbf.js';
import './earcut-c82e2be9.js';
import './GeometryUtils-56da119a.js';
import './Rect-09e0f861.js';
import './LabelMetric-5519185e.js';
import './Program-20de81ae.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-3ca2091a.js';
import './constants-412c3a33.js';
import './TileContainer-58b4c68b.js';
import './WGLContainer-44133452.js';
import './ProgramTemplate-03ba2362.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-e042a551.js';
import './floatRGBA-4f2c01fd.js';
import './FeatureCommandQueue-d90a4731.js';
import './HighlightCounter-813bb1ee.js';
import './popupUtils-e93a60d3.js';
import './RefreshableLayerView-4338278c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
