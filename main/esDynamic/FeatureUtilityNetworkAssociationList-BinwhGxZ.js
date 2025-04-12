import{x as s,z as r,K as b,aM as P,fH as F}from"./main-C3PVbFgd.js";import{l as k}from"./intl-CrhPUENC.js";import{c as _}from"./popupUtils-B_nUcaUc.js";import{_ as m,i as g}from"./Popup-CqRjI0mm.js";import{h as M,O as V,j as C,k as a,l as x}from"./themeUtils-C_g6ohGk.js";import{a as E}from"./MapView-D-pciNXi.js";import{s as O}from"./ReactiveMap-CNVgYLEA.js";import{s as I}from"./substitute-Bv7NQLvA.js";const v="esri-utility-network-association-list",y={featureObserver:`${v}__feature-observer`,filterContainer:`${v}__filter-container`,limitNoticeContainer:`${v}__limit-notice-container`,loadingContainer:`${v}__loading-container`};let l=class extends V{constructor(e,t){super(e,t),this._isFeatureCountNoticeOpen=!0,this._observer=new IntersectionObserver(([o])=>{o?.isIntersecting&&this._increaseFeaturePage()},{root:window.document}),this._observerNode=null,this.featuresPerPage=50,this.filterText="",this.headingLevel=5,this.maxFeatureCount=1e3,this.messagesFeature=null,this.messagesCommon=null,this.selectedLayer=null,this.tooltipReferenceMap=new O,this.viewModel=new m}initialize(){this.setUpObserver()}loadDependencies(){return C({icon:()=>import("./index-ByZscnIt.js"),input:()=>import("./index-CHKamR6r.js").then(e=>e.i),loader:()=>import("./index-CFggE3zD.js"),notice:()=>import("./index-R5ljY1W1.js")})}destroy(){this.tooltipReferenceMap.clear()}get associatedFeatureCount(){const e=this.viewModel.associationViewModels,t=this.selectedLayer?e.get(this.selectedLayer):null;return t?t.length:0}set currentFeaturePage(e){const{featuresPerPage:t,associatedFeatureCount:o}=this,i=Math.ceil(o/t)||1,n=Math.max(Math.min(e,i),1);this._set("currentFeaturePage",n)}get currentFeaturePage(){return this._get("currentFeaturePage")??1}get endIndex(){const{currentFeaturePage:e,featuresPerPage:t,maxFeatureCount:o}=this;return Math.min(e*t,o)}renderConnectivityIcon(e,t){const{tooltipReferenceMap:o}=this;let i;switch(e){case"junction-edge-from-connectivity":i="connection-end-left";break;case"junction-edge-to-connectivity":i="connection-end-right";break;case"junction-edge-midspan-connectivity":i="connection-middle";break;default:i="connection-to-connection"}return a("calcite-icon",{afterCreate:n=>o.set(t,n),afterRemoved:()=>o.delete(t),icon:i,scale:"s",slot:"content-start"})}renderFeatureCountWarning(){const{associatedFeatureCount:e,maxFeatureCount:t,messagesFeature:o}=this;return e>t?a("calcite-notice",{class:this._isFeatureCountNoticeOpen?y.limitNoticeContainer:void 0,closable:!0,icon:"information",kind:"info",open:!0,scale:"s",width:"full",onCalciteNoticeBeforeOpen:()=>this._isFeatureCountNoticeOpen=!0,onCalciteNoticeClose:()=>this._isFeatureCountNoticeOpen=!1},a("div",{slot:"title"},o.associationsLimitNoticeTitle),a("div",{slot:"message"},I(o.associationsLimitNoticeMessage,{number:t}))):null}renderFeatureObserver(){return a("div",{afterCreate:this._onObserverCreate,bind:this,class:y.featureObserver,key:"feature-observer"})}renderFilter(){return a("div",{class:y.filterContainer,key:"filter"},a("calcite-input",{icon:"search",placeholder:this.messagesFeature.associationFilterPlaceholder,type:"search",onCalciteInputInput:e=>{this.filterText=e.currentTarget.value.trim().toLowerCase(),this.currentFeaturePage=1}}))}renderLoading(){return a("div",{class:y.loadingContainer,key:"loading-container"},this.renderLoadingIcon())}renderLoadingIcon(){return a("calcite-loader",{inline:!0,label:this.messagesCommon.loading})}getConnectivityTooltip(e){const{messagesFeature:t}=this;switch(e){case"connectivity":case"junction-junction-connectivity":return t.associationsJunctionJunction;case"junction-edge-from-connectivity":return t.associationsJunctionEdgeFrom;case"junction-edge-midspan-connectivity":return t.associationsJunctionEdgeMidspan;case"junction-edge-to-connectivity":return t.associationsJunctionEdgeTo;default:return""}}setUpObserver(){this.addHandles(P(()=>this._observerNode,()=>this._onObserverChange()))}_increaseFeaturePage(){this.currentFeaturePage++}async _onObserverChange(){this._observerNode&&this._observer.unobserve(this._observerNode);const{state:e,showAllEnabled:t}=this.viewModel;this._observerNode&&e==="ready"&&t&&this._observer.observe(this._observerNode)}_onObserverCreate(e){this._observerNode=e}};s([r()],l.prototype,"_observer",void 0),s([r()],l.prototype,"_observerNode",void 0),s([r()],l.prototype,"associatedFeatureCount",null),s([r()],l.prototype,"currentFeaturePage",null),s([r()],l.prototype,"endIndex",null),s([r()],l.prototype,"featuresPerPage",void 0),s([r()],l.prototype,"filterText",void 0),s([r()],l.prototype,"headingLevel",void 0),s([r()],l.prototype,"maxFeatureCount",void 0),s([r(),M("esri/widgets/Feature/t9n/Feature")],l.prototype,"messagesFeature",void 0),s([r(),M("esri/t9n/common")],l.prototype,"messagesCommon",void 0),s([r()],l.prototype,"selectedLayer",void 0),s([r()],l.prototype,"tooltipReferenceMap",void 0),s([r({type:m})],l.prototype,"viewModel",void 0),l=s([b("esri.widgets.support.UtilityNetworkAssociations.UtilityNetworkAssociationList")],l);const j=l;function A(e){const{percentAlong:t}=e;return t==null?"":k(t,{style:"percent",maximumFractionDigits:2})}function L(e){const{associationType:t}=e;return t==="connectivity"||t==="junction-junction-connectivity"||t==="junction-edge-from-connectivity"||t==="junction-edge-midspan-connectivity"||t==="junction-edge-to-connectivity"}function R(e){return e.associationType==="junction-edge-midspan-connectivity"}var f;const N="esri-feature-utility-network-associations",T={base:N,listItemHidden:`${N}__list-item--hidden`},$="nested";let c=f=class extends j{constructor(e,t){super(e,t),this.description=null,this.flowItems=null,this.flowType="feature-utility-network-association-type",this.listType=null,this.parentFeatureViewModel=null,this.title=null,this.viewModel=new m,this.visibleElements=new g}initialize(){this.setUpObserver()}loadDependencies(){return C({chip:()=>import("./index-C-Mwp_Oj.js"),icon:()=>import("./index-ByZscnIt.js"),list:()=>import("./index-CWw780fq.js"),"list-item":()=>import("./index-B7Wv972M.js"),tooltip:()=>import("./index-DyYb5S24.js")})}destroy(){this.tooltipReferenceMap.clear()}render(){const e=this.viewModel.associationViewModels,{state:t,showAllEnabled:o}=this.viewModel,{state:i}=this.parentFeatureViewModel??{};return a("div",{class:this.classes(T.base,E.widget)},t==="loading"||t==="querying"||i==="loading"?this.renderLoading():a("calcite-list",{displayMode:$,label:this.selectedLayer?.title??this.messagesCommon.untitled},o&&this.selectedLayer?a(x,null,this.renderFilter(),this.renderFeatureCountWarning(),this._renderAssociatedFeatureListPage(),this.renderFeatureObserver()):Array.from(e.keys(),n=>this._renderTypeList(n,e.get(n)))))}_showAllAssociations(e){const{flowItems:t,viewModel:o,description:i}=this;if(!t||!e)return;o.showAllEnabled=!0;const n=new f({selectedLayer:e,title:e?.title,flowItems:t,parentFeatureViewModel:this.parentFeatureViewModel,featureVisibleElements:this.featureVisibleElements,description:i,visibleElements:new g({title:!1,description:!1}),viewModel:o});t.push(n)}_renderAssociatedFeatureListPage(){const e=this.viewModel.associationViewModels.get(this.selectedLayer).filter(t=>_(t.featureViewModel).toLowerCase().includes(this.filterText)).slice(0,this.endIndex);return[...this._renderTooltips(e),...this._renderAssociatedFeatureList(e)]}_renderItemTooltip(e){const{tooltipReferenceMap:t}=this;return L(e.association)?a("calcite-tooltip",{key:`tooltip-${e.featureViewModel.uid}`,overlayPositioning:"fixed",referenceElement:t.get(e.featureViewModel.uid)},this.getConnectivityTooltip(e.association.associationType)):null}_renderAssociatedFeature(e){const{featureViewModel:t}=e,o=_(t),i=t.state==="loading",n=this._findFlowItem(t),d=n<0&&this._isParentFeature(t),p=d||n>=0;return a("calcite-list-item",{class:i?T.listItemHidden:void 0,description:F(e.terminalName??""),key:`associated-feature-type-${t.uid}`,label:F(o),onCalciteListItemSelect:()=>this._handleFeatureClick(d,n,t)},L(e.association)?this.renderConnectivityIcon(e.association.associationType,e.featureViewModel.uid):null,R(e.association)?a("calcite-chip",{label:A(e.association),scale:"s",slot:"content-end"},A(e.association)):null,this._renderChevronIconNode(p))}async _selectAssociation(e){const{flowItems:t,featureVisibleElements:o}=this;if(!t)return;e.abilities={utilityNetworkAssociationsContent:!0};const{default:i}=await import("./Popup-CqRjI0mm.js").then(n=>n.F);t.push(new i({flowItems:t,flowType:"feature-association",viewModel:e,visibleElements:o}))}_handleFeatureClick(e,t,o){if(e)this.flowItems.drain(i=>{"showAllEnabled"in i.viewModel&&(i.viewModel.showAllEnabled=!1),i.viewModel=null,i.destroy()});else if(t<0||!this.flowItems)this._selectAssociation(o);else for(;this.flowItems.length>t+1;){const i=this.flowItems.pop();i&&("showAllEnabled"in i.viewModel&&(i.viewModel.showAllEnabled=!1),i.viewModel=null,i.destroy())}}_featureViewModelMatch(e,t){const o=e.graphic,i=o?.layer;let n=null;i?.type==="subtype-sublayer"&&i.parent?n=i.parent.globalIdField??null:i&&"globalIdField"in i&&(n=i.globalIdField);const d=n?o?.attributes[n]:null,p=t.graphic,u=p?.layer;let h=null;u?.type==="subtype-sublayer"&&u.parent?h=u.parent.globalIdField??null:u&&"globalIdField"in u&&(h=u.globalIdField);const w=h?p?.attributes[h]:null;return d&&w&&d===w}_isParentFeature(e){const t=this.flowItems?.getItemAt(0);if(!t)return!1;const o=t.parentFeatureViewModel;return this._featureViewModelMatch(o,e)}_findFlowItem(e){return this.flowItems?.findIndex(t=>{if(t.flowType!=="feature-association")return!1;const o=t.viewModel;return this._featureViewModelMatch(o,e)})??-1}_renderTooltips(e){return e.toArray().map(t=>this._renderItemTooltip(t))}_renderAssociatedFeatureList(e){return e.toArray().map(t=>this._renderAssociatedFeature(t))}_renderChevronIconNode(e){return a("calcite-icon",{flipRtl:!0,icon:e?"move-up":"chevron-right",scale:"s",slot:"content-end"})}_renderTypeList(e,t){const{messagesFeature:o}=this,{displayCount:i}=this.viewModel,n=t.slice(0,i),d=n.length<t.length;return a("calcite-list-item",{key:"show-all",label:e.title,open:!0,value:e.id},a("calcite-chip",{label:String(t.length),scale:"s",slot:"content-end"},t.length),a("calcite-list",{group:e.id,label:e.title??""},[this._renderTooltips(n),this._renderAssociatedFeatureList(n)],d?a("calcite-list-item",{description:I(o?.numberRecords,{number:t.length.toString()}),key:"show-all-item",label:o.showAll,onCalciteListItemSelect:()=>this._showAllAssociations(e)},a("calcite-icon",{icon:"list",scale:"s",slot:"content-end"})):null))}};s([r()],c.prototype,"description",void 0),s([r()],c.prototype,"featureVisibleElements",void 0),s([r()],c.prototype,"flowItems",void 0),s([r()],c.prototype,"flowType",void 0),s([r()],c.prototype,"listType",void 0),s([r()],c.prototype,"parentFeatureViewModel",void 0),s([r()],c.prototype,"title",void 0),s([r({type:m})],c.prototype,"viewModel",void 0),s([r({type:g,nonNullable:!0})],c.prototype,"visibleElements",void 0),c=f=s([b("esri.widgets.Feature.FeatureUtilityNetworkAssociationList")],c);const U=c;export{U as default};
