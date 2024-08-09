import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-4bdcafaa.js';
import { X } from './FeatureLayerView2D-2f00e060.js';
import './preload-helper-a4975f27.js';
import './Container-8810aec1.js';
import './highlightReasons-5eca2b1e.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-1aa1fbb0.js';
import './LayerView-15ecd060.js';
import './TechniqueInstance-a73b21be.js';
import './UpdateTracking2D-8582ed82.js';
import './TurboLine-93e48e20.js';
import './enums-d24bcbbf.js';
import './earcut-99d9d909.js';
import './GeometryUtils-04b99039.js';
import './Rect-09e0f861.js';
import './LabelMetric-9a0d51f3.js';
import './Program-857e5b03.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-5efc89de.js';
import './constants-412c3a33.js';
import './TileContainer-e9d79cd6.js';
import './WGLContainer-71b55688.js';
import './ProgramTemplate-5c8b77d1.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-5b602ac9.js';
import './floatRGBA-53bedb7c.js';
import './FeatureCommandQueue-66bca5ed.js';
import './HighlightCounter-e0e339d8.js';
import './popupUtils-778ac65d.js';
import './RefreshableLayerView-8dd24a3f.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
