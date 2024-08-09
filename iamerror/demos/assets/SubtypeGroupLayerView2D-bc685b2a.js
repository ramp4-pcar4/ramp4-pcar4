import { aX as e, aZ as c, b3 as d$1, b5 as P$1, X as has } from './main-9e89a8e1.js';
import { X } from './FeatureLayerView2D-f6075c9b.js';
import './preload-helper-a4975f27.js';
import './Container-826f2649.js';
import './highlightReasons-fd22591c.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-7ed59734.js';
import './LayerView-0078c07e.js';
import './TechniqueInstance-b4852aa3.js';
import './UpdateTracking2D-a4644425.js';
import './TurboLine-9afb3fed.js';
import './enums-d24bcbbf.js';
import './earcut-f48473a7.js';
import './GeometryUtils-f7982c6b.js';
import './Rect-09e0f861.js';
import './LabelMetric-27b8456c.js';
import './Program-f839b0de.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-f4c33fa2.js';
import './constants-412c3a33.js';
import './TileContainer-cf478a09.js';
import './WGLContainer-8108d9e0.js';
import './ProgramTemplate-f326445f.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-3e8da1f8.js';
import './floatRGBA-341508ec.js';
import './FeatureCommandQueue-b5bb812d.js';
import './HighlightCounter-a130138d.js';
import './popupUtils-28b8b63e.js';
import './RefreshableLayerView-0c0be56b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
