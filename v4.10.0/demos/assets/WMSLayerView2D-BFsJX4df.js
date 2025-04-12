import{bw as a,bx as m,by as E,h6 as M,ck as F,s as w,J as S,ca as C,G as q,cf as R,bq as U}from"./main-CzbArNue.js";import{a as $}from"./BitmapContainer-DXcwmg6z.js";import{j as V,y as L}from"./LayerView-Ck3mR3vt.js";import{_ as W}from"./ExportStrategy-Bb4dR6V6.js";import{i as A}from"./RefreshableLayerView-BD7EM3Zi.js";import{i as H}from"./timeSupport-Bj-pNdJN.js";import"./preload-helper-ExcqyqRp.js";import"./WGLContainer-lo2WWuxf.js";import"./LabelMetric-hP-xV4kN.js";import"./Program-DtvrcJVH.js";import"./BufferObject-COmOSznC.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./VertexArrayObject-CH1EhbG6.js";import"./ProgramTemplate-D4pS209o.js";import"./vec3f32-nZdmKIgz.js";import"./Container-YB8BBMjE.js";import"./StyleDefinition-DxIfDb1I.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./layerViewUtils-CKW6QWO-.js";import"./Bitmap-h8EKm8jv.js";const _=e=>{let t=class extends e{initialize(){this.exportImageParameters=new M({layer:this.layer})}destroy(){this.exportImageParameters=F(this.exportImageParameters)}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){return H(this.layer,this.view?.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(i,s){const{layer:o}=this;if(!i)throw new w("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o});const{popupEnabled:c}=o;if(!c)throw new w("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:c});const r=this.createFetchPopupFeaturesQuery(i);if(!r)return[];const{extent:n,width:p,height:h,x:d,y}=r;if(!(n&&p&&h))throw new w("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:n,width:p,height:h});const g=await o.fetchFeatureInfo(n,p,h,d,y);return S(s),g}};return a([m()],t.prototype,"exportImageParameters",void 0),a([m({readOnly:!0})],t.prototype,"exportImageVersion",null),a([m()],t.prototype,"layer",void 0),a([m({readOnly:!0})],t.prototype,"timeExtent",null),t=a([E("esri.views.layers.WMSLayerView")],t),t};let u=class extends _(A(V(L))){constructor(){super(...arguments),this.bitmapContainer=new $}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch(t=>{C(t)||q.getLogger(this).error(t)})}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:i}=e;this.bitmapContainer=new $,this.container.addChild(this.bitmapContainer),this.strategy=new W({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(R(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=F(this.strategy),this.container.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:i}=this,{x:s,y:o}=e,{spatialReference:c}=t;let r,n=0,p=0;if(i.children.some(g=>{const{width:f,height:b,resolution:v,x:l,y:x}=g,I=l+v*f,P=x-v*b;return s>=l&&s<=I&&o<=x&&o>=P&&(r=new U({xmin:l,ymin:P,xmax:I,ymax:x,spatialReference:c}),n=f,p=b,!0)}),!r)return null;const h=r.width/n,d=Math.round((s-r.xmin)/h),y=Math.round((r.ymax-o)/h);return{extent:r,width:n,height:p,x:d,y}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,i,s){return this.layer.fetchImageBitmap(e,t,i,{timeExtent:this.timeExtent,...s})}};a([m()],u.prototype,"strategy",void 0),a([m()],u.prototype,"updating",void 0),u=a([E("esri.views.2d.layers.WMSLayerView2D")],u);const ot=u;export{ot as default};
