import{J as b,aZ as w,aN as _,g7 as y,B as e,D as i,bE as O,N as h,V as c,dp as T,aO as S,dq as R,dn as $,hr as M,hs as P,ht as C}from"./main-Bd_03BNf.js";import{c as J}from"./Analysis-DrUxSOw8.js";import{c as L,b as j}from"./featureReferenceUtils-DNA9OhaK.js";import{v as m}from"./persistable-xSXaU9WR.js";import{h as E}from"./ElevationInfo-DnuPtDzp.js";import{X as F}from"./projection-B5J11HCw.js";import{i as H}from"./elevationInfoUtils-Cq8opaYp.js";import{S as B}from"./MultiOriginJSONSupport-DOEjhxQE.js";import{f as D}from"./Layer-B_8fSKRa.js";import{b as V}from"./OperationalLayer-B2LTVkje.js";import"./preload-helper-ExcqyqRp.js";import"./vec32-DZGiaTNj.js";import"./common-DQOJ18NT.js";import"./sphere-CBQcPuns.js";import"./mat4-BPDfjts0.js";import"./vec42-CKs01hkn.js";import"./vec4f64-o2zAXfmz.js";import"./mat3-CruJiiUv.js";import"./mat3f64-q3fE-ZOt.js";import"./plane-DECcbKS5.js";import"./mat4f64-Dk4dwAN8.js";import"./quatf64-aQ5IuZRd.js";import"./vec2f64-DohEyf3f.js";import"./IntersectorInterfaces-BgX4KEwK.js";import"./boundedPlane-C6h6cLaU.js";import"./lineSegment-DpV_y-GE.js";import"./MD5-C9MwAd2G.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./uuid-Cl5lrJ4c.js";import"./resourceExtension-B1A8aHpG.js";import"./lengthUtils-Cym5f2xe.js";import"./projectBuffer-0UYQHA4x.js";import"./TimeExtent-BP_n2IvP.js";import"./layerContainerType-C5CzMsLd.js";import"./commonProperties-CEs0Ky5d.js";let a=class extends b.JSONSupportMixin(w.ClonableMixin(_)){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return y(this.position,t.position)&&y(this.elevationInfo,t.elevationInfo)&&L(this.feature,t.feature)}};e([i({type:O,json:{write:{isRequired:!0}}})],a.prototype,"position",void 0),e([i({type:E}),m()],a.prototype,"elevationInfo",void 0),e([i(j)],a.prototype,"feature",void 0),a=e([h("esri.analysis.LineOfSightAnalysisObserver")],a);const q=a;let l=class extends b.JSONSupportMixin(w){constructor(s){super(s),this.position=null,this.elevationInfo=null,this.feature=null}equals(s){return y(this.position,s.position)&&y(this.elevationInfo,s.elevationInfo)&&L(this.feature,s.feature)}};e([i({type:O,json:{write:!0,origins:{"web-scene":{write:{isRequired:!0}}}}}),m()],l.prototype,"position",void 0),e([i({type:E}),m()],l.prototype,"elevationInfo",void 0),e([i(j)],l.prototype,"feature",void 0),l=e([h("esri.analysis.LineOfSightAnalysisTarget")],l);const I=l,f=c.ofType(I);let o=class extends J{constructor(t){super(t),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(S(()=>this._computeExtent(),t=>{t?.pending==null&&this._set("extent",t!=null?t.extent:null)},R))}get targets(){return this._get("targets")||new f}set targets(t){this._set("targets",$(t,this.targets,f))}get spatialReference(){return this.observer?.position!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[this.observer?.position]}async waitComputeExtent(){const t=this._computeExtent();return t!=null?t.pending:Promise.resolve()}_computeExtent(){const t=this.spatialReference;if(this.observer?.position==null||t==null)return null;const v=p=>H(p.position,p.elevationInfo)==="absolute-height",n=this.observer.position,x=M(n.x,n.y,n.z,n.x,n.y,n.z);for(const p of this.targets)if(p.position!=null){const u=F(p.position,t);if(u.pending!=null)return{pending:u.pending,extent:null};if(u.geometry!=null){const{x:z,y:A,z:N}=u.geometry;P(x,[z,A,N])}}const d=C(x,t);return v(this.observer)&&this.targets.every(v)||(d.zmin=void 0,d.zmax=void 0),{pending:null,extent:d}}clear(){this.observer=null,this.targets.removeAll()}};e([i({type:["line-of-sight"]})],o.prototype,"type",void 0),e([i({type:q,json:{read:!0,write:!0}})],o.prototype,"observer",void 0),e([i({cast:T,type:f,nonNullable:!0,json:{read:!0,write:!0}})],o.prototype,"targets",null),e([i({value:null,readOnly:!0})],o.prototype,"extent",void 0),e([i({readOnly:!0})],o.prototype,"spatialReference",null),e([i({readOnly:!0})],o.prototype,"requiredPropertiesForEditing",null),o=e([h("esri.analysis.LineOfSightAnalysis")],o);const g=o,X=c.ofType(I);let r=class extends V(B(D)){constructor(s){super(s),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new g,this.opacity=1}initialize(){this.addHandles(S(()=>this.analysis,(s,t)=>{t!=null&&t.parent===this&&(t.parent=null),s!=null&&(s.parent=this)},R))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return this.analysis?.observer}set observer(s){const{analysis:t}=this;t&&(t.observer=s)}get targets(){return this.analysis!=null?this.analysis.targets:new c}set targets(s){$(s,this.analysis?.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(s){this.analysis===s&&(this.analysis=new g)}};e([i({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),e([i({type:["LineOfSightLayer"]})],r.prototype,"operationalLayerType",void 0),e([i({type:q,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],r.prototype,"observer",null),e([i({type:X,json:{read:!0,write:{ignoreOrigin:!0,isRequired:!0}}})],r.prototype,"targets",null),e([i({type:g,nonNullable:!0,json:{read:!1,write:!1}})],r.prototype,"analysis",void 0),e([i({readOnly:!0})],r.prototype,"fullExtent",null),e([i({readOnly:!0})],r.prototype,"spatialReference",null),e([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],r.prototype,"opacity",void 0),e([i({type:["show","hide"]})],r.prototype,"listMode",void 0),r=e([h("esri.layers.LineOfSightLayer")],r);const qt=r;export{qt as default};
