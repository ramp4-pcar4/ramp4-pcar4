import { aX as e, aZ as c, b3 as d$1, b5 as P$1, X as has } from './main-85b30676.js';
import { X } from './FeatureLayerView2D-28f9ff28.js';
import './preload-helper-a4975f27.js';
import './Container-e72826d9.js';
import './highlightReasons-f97996ea.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-ea9fdac2.js';
import './LayerView-1797f0e3.js';
import './TechniqueInstance-280c7a3b.js';
import './UpdateTracking2D-c94279f2.js';
import './TurboLine-207ea227.js';
import './enums-d24bcbbf.js';
import './earcut-06df3cd5.js';
import './GeometryUtils-7756492b.js';
import './Rect-09e0f861.js';
import './LabelMetric-10e7b37a.js';
import './Program-c750810b.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-02f0865e.js';
import './constants-412c3a33.js';
import './TileContainer-26f40735.js';
import './WGLContainer-29571554.js';
import './ProgramTemplate-31e58fa5.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-68c24f4f.js';
import './floatRGBA-895e3275.js';
import './FeatureCommandQueue-77ddfe76.js';
import './HighlightCounter-78c124b9.js';
import './popupUtils-60ea156d.js';
import './RefreshableLayerView-f72f03b3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
