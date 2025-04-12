import{q as e,u as o,C as p,A as S,b0 as P,hS as Pe,bA as Se,z as l,v as a,jh as tt,h as L,fr as it,il as Ee,hk as qe,ji as Fe,jj as Te,jk as ot,bq as se,jl as nt,jm as rt,aw as st,V as Oe,D as Me,n as pt}from"./main-DVcB5zI_.js";import{n as lt,i as ze}from"./Field-BdhLPXiD.js";import{c as at,a as ut,v as dt,j as yt,y as ct}from"./commonProperties-CH-xlvIp.js";import{v as mt}from"./HeightModelInfo-Dd2gdcVw.js";import{S as ht,C as vt}from"./arcgisLayerUrl-euAJ5jxV.js";import{g as ft,B as xt,X,V as wt,D as gt,G as bt}from"./featureLayerUtils-lAty8YQv.js";import{p as jt}from"./LayerFloorInfo-CIcOpdXF.js";import{p as $t}from"./Relationship-Dzcs2kUm.js";import{i as St}from"./serviceCapabilitiesUtils-BAC3VZ8C.js";var pe;let F=pe=class extends S{constructor(t){super(t),this.expression=null,this.name=null,this.returnType="boolean",this.title=null}clone(){return new pe({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};e([o({type:String,json:{write:!0}})],F.prototype,"expression",void 0),e([o({type:String,json:{write:!0}})],F.prototype,"name",void 0),e([o({type:["boolean","date","number","string"],json:{write:!0}})],F.prototype,"returnType",void 0),e([o({type:String,json:{write:!0}})],F.prototype,"title",void 0),F=pe=e([p("esri.form.ExpressionInfo")],F);const It=F;let T=class extends S{constructor(i){super(i),this.description=null,this.label=null,this.type=null,this.visibilityExpression=null}};e([o({type:String,json:{write:!0}})],T.prototype,"description",void 0),e([o({type:String,json:{write:!0}})],T.prototype,"label",void 0),e([o()],T.prototype,"type",void 0),e([o({type:String,json:{write:!0}})],T.prototype,"visibilityExpression",void 0),T=e([p("esri.form.elements.Element")],T);const O=T;let q=class extends P(S){constructor(i){super(i),this.type=null}};e([o()],q.prototype,"type",void 0),q=e([p("esri.form.elements.inputs.attachments.Input")],q);const E=q,K=["any","capture","upload"];let R=class extends E{constructor(i){super(i),this.type="audio",this.inputMethod="any",this.maxDuration=null}};e([o({type:["audio"],readOnly:!0,json:{write:!0}})],R.prototype,"type",void 0),e([o({type:K,json:{write:!0}})],R.prototype,"inputMethod",void 0),e([o({type:Number,json:{write:!0}})],R.prototype,"maxDuration",void 0),R=e([p("esri.form.elements.inputs.attachments.AudioInput")],R);const Re=R;let C=class extends E{constructor(i){super(i),this.type="document",this.maxFileSize=null}};e([o({type:["document"],readOnly:!0,json:{write:!0}})],C.prototype,"type",void 0),e([o({type:Number,json:{write:!0}})],C.prototype,"maxFileSize",void 0),C=e([p("esri.form.elements.inputs.attachments.DocumentInput")],C);const De=C;let D=class extends E{constructor(i){super(i),this.type="image",this.inputMethod="any",this.maxImageSize=null}};e([o({type:["image"],readOnly:!0,json:{write:!0}})],D.prototype,"type",void 0),e([o({type:K,json:{write:!0}})],D.prototype,"inputMethod",void 0),e([o({type:Number,json:{write:!0}})],D.prototype,"maxImageSize",void 0),D=e([p("esri.form.elements.inputs.attachments.ImageInput")],D);const Ve=D;let G=class extends E{constructor(i){super(i),this.type="signature",this.inputMethod="any"}};e([o({type:["signature"],readOnly:!0,json:{write:!0}})],G.prototype,"type",void 0),e([o({type:K,json:{write:!0}})],G.prototype,"inputMethod",void 0),G=e([p("esri.form.elements.inputs.attachments.SignatureInput")],G);const Ne=G;let V=class extends E{constructor(i){super(i),this.type="video",this.inputMethod="any",this.maxDuration=null}};e([o({type:["video"],readOnly:!0,json:{write:!0}})],V.prototype,"type",void 0),e([o({type:K,json:{write:!0}})],V.prototype,"inputMethod",void 0),e([o({type:Number,json:{write:!0}})],V.prototype,"maxDuration",void 0),V=e([p("esri.form.elements.inputs.attachments.VideoInput")],V);const Be=V;function Ze(t){return{nestableTypes:{base:E,key:"type",typeMap:{audio:Re,document:De,image:Ve,signature:Ne,video:Be}},allTypes:{base:E,key:"type",typeMap:{attachment:t,audio:Re,document:De,image:Ve,signature:Ne,video:Be}}}}function Et(t,i,r){return t?t.map(n=>Pe(i.nestableTypes,n)):null}function Ft(t,i,r){if(!t)return null;const n=i.nestableTypes.typeMap;return t.filter(s=>n[s.type]).map(s=>n[s.type].fromJSON(s))}function Tt(t,i,r){if(!t)return null;const n=i.nestableTypes.typeMap;return t.filter(s=>n[s.type]).map(s=>s.toJSON())}let x=class extends E{constructor(i){super(i),this.type="attachment",this.attachmentAssociationType="exact",this.inputTypes=null}castInputs(i){return Et(i,Y)}readInputs(i,r){return Ft(r.inputTypes,Y)}writeInputs(i,r){r.inputTypes=Tt(i,Y)}};e([o({type:["attachment"],readOnly:!0,json:{write:!0}})],x.prototype,"type",void 0),e([o({type:["any","exact","exactOrNone"],json:{write:!0}})],x.prototype,"attachmentAssociationType",void 0),e([o({json:{write:{isRequired:!0}}})],x.prototype,"inputTypes",void 0),e([Se("inputTypes")],x.prototype,"castInputs",null),e([l("inputTypes")],x.prototype,"readInputs",null),e([a("inputTypes")],x.prototype,"writeInputs",null),x=e([p("esri.form.elements.inputs.attachments.AttachmentInput")],x);const Y=Ze(x),Ot=x;var le;const Mt=Ze(Ot);let d=le=class extends O{constructor(t){super(t),this.allowUserRename=!0,this.attachmentKeyword=null,this.displayFilename=!1,this.editableExpression=null,this.filenameExpression="{attachmentKeyword}_{now}",this.input=null,this.maxAttachmentCount=null,this.minAttachmentCount=null,this.type="attachment",this.useOriginalFilename=!0}clone(){return new le({allowUserRename:this.allowUserRename,attachmentKeyword:this.attachmentKeyword,description:this.description,displayFilename:this.displayFilename,editableExpression:this.editableExpression,filenameExpression:this.filenameExpression,input:this.input?.clone(),label:this.label,maxAttachmentCount:this.maxAttachmentCount,minAttachmentCount:this.minAttachmentCount,useOriginalFilename:this.useOriginalFilename,visibilityExpression:this.visibilityExpression})}};e([o({type:Boolean,json:{write:!0}})],d.prototype,"allowUserRename",void 0),e([o({type:String,json:{write:{isRequired:!0}}})],d.prototype,"attachmentKeyword",void 0),e([o({type:Boolean,json:{write:!0}})],d.prototype,"displayFilename",void 0),e([o({type:String,json:{write:!0}})],d.prototype,"editableExpression",void 0),e([o({type:String,json:{write:!0}})],d.prototype,"filenameExpression",void 0),e([o({types:Mt.allTypes,json:{read:{source:"inputType"},write:{target:"inputType",isRequired:!0}}})],d.prototype,"input",void 0),e([o({type:Number,json:{write:!0}})],d.prototype,"maxAttachmentCount",void 0),e([o({type:Number,json:{write:!0}})],d.prototype,"minAttachmentCount",void 0),e([o({type:["attachment"],readOnly:!0,json:{read:!1,write:!0}})],d.prototype,"type",void 0),e([o({type:Boolean,json:{write:!0}})],d.prototype,"useOriginalFilename",void 0),d=le=e([p("esri.form.elements.AttachmentElement")],d);const ke=d;let z=class extends S{constructor(i){super(i),this.type=null}};e([o()],z.prototype,"type",void 0),z=e([p("esri.form.elements.inputs.Input")],z);const I=z;let Q=class extends I{constructor(i){super(i),this.maxLength=null,this.minLength=0}};e([o({type:Number,json:{write:!0}})],Q.prototype,"maxLength",void 0),e([o({type:Number,json:{write:!0}})],Q.prototype,"minLength",void 0),Q=e([p("esri.form.elements.inputs.TextInput")],Q);const Ie=Q;var ae;let Z=ae=class extends Ie{constructor(t){super(t),this.type="barcode-scanner"}clone(){return new ae({maxLength:this.maxLength,minLength:this.minLength})}};e([o({type:["barcode-scanner"],json:{read:!1,write:!0}})],Z.prototype,"type",void 0),Z=ae=e([p("esri.form.elements.inputs.BarcodeScannerInput")],Z);const Rt=Z;var ue;let N=ue=class extends I{constructor(t){super(t),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="combo-box"}clone(){return new ue({showNoValueOption:this.showNoValueOption,noValueOptionLabel:this.noValueOptionLabel})}};e([o({type:String,json:{write:!0}})],N.prototype,"noValueOptionLabel",void 0),e([o({type:Boolean,json:{write:!0}})],N.prototype,"showNoValueOption",void 0),e([o({type:["combo-box"],json:{read:!1,write:!0}})],N.prototype,"type",void 0),N=ue=e([p("esri.form.elements.inputs.ComboBoxInput")],N);const Dt=N;var de;function Ae(t){return t??null}function Ue(t){return t??null}let f=de=class extends I{constructor(t){super(t),this.max=null,this.min=null,this.type="date-picker"}readMax(t,i){return Ae(i.max)}writeMax(t,i){i.max=Ue(t)}readMin(t,i){return Ae(i.min)}writeMin(t,i){i.min=Ue(t)}clone(){return new de({max:this.max,min:this.min})}};e([o({type:String,json:{type:String,write:!0}})],f.prototype,"max",void 0),e([l("max")],f.prototype,"readMax",null),e([a("max")],f.prototype,"writeMax",null),e([o({type:String,json:{type:String,write:!0}})],f.prototype,"min",void 0),e([l("min")],f.prototype,"readMin",null),e([a("min")],f.prototype,"writeMin",null),e([o({type:["date-picker"],json:{read:!1,write:!0}})],f.prototype,"type",void 0),f=de=e([p("esri.form.elements.inputs.DatePickerInput")],f);const Vt=f;var ye;function ee(t){return t??null}function te(t){return t??null}let u=ye=class extends I{constructor(t){super(t),this.includeTimeOffset=!0,this.max=null,this.min=null,this.timeResolution="minutes",this.type="datetimeoffset-picker"}readMax(t,i){return ee(i.max)}writeMax(t,i){i.max=te(t)}readMin(t,i){return ee(i.min)}writeMin(t,i){i.min=te(t)}readTimeResolution(t,i){return ee(i.timeResolution)}writeTimeResolution(t,i){i.timeResolution=te(t)}clone(){return new ye({includeTimeOffset:this.includeTimeOffset,max:this.max,min:this.min,timeResolution:this.timeResolution})}};e([o({type:Boolean,json:{write:!0}})],u.prototype,"includeTimeOffset",void 0),e([o({type:String,json:{type:String,write:!0}})],u.prototype,"max",void 0),e([l("max")],u.prototype,"readMax",null),e([a("max")],u.prototype,"writeMax",null),e([o({type:String,json:{type:String,write:!0}})],u.prototype,"min",void 0),e([l("min")],u.prototype,"readMin",null),e([a("min")],u.prototype,"writeMin",null),e([o({type:String,json:{type:String,write:!0}})],u.prototype,"timeResolution",void 0),e([l("timeResolution")],u.prototype,"readTimeResolution",null),e([a("timeResolution")],u.prototype,"writeTimeResolution",null),e([o({type:["datetimeoffset-picker"],json:{read:!1,write:!0}})],u.prototype,"type",void 0),u=ye=e([p("esri.form.elements.inputs.DateTimeOffsetPickerInput")],u);const Nt=u;var ce;function Le(t){return t!=null?new Date(t):null}function Ce(t){return t?t.getTime():null}let h=ce=class extends I{constructor(t){super(t),this.includeTime=!1,this.max=null,this.min=null,this.type="datetime-picker"}readMax(t,i){return Le(i.max)}writeMax(t,i){i.max=Ce(t)}readMin(t,i){return Le(i.min)}writeMin(t,i){i.min=Ce(t)}clone(){return new ce({includeTime:this.includeTime,max:this.max,min:this.min})}};e([o({type:Boolean,json:{write:!0}})],h.prototype,"includeTime",void 0),e([o({type:Date,json:{type:Number,write:!0}})],h.prototype,"max",void 0),e([l("max")],h.prototype,"readMax",null),e([a("max")],h.prototype,"writeMax",null),e([o({type:Date,json:{type:Number,write:!0}})],h.prototype,"min",void 0),e([l("min")],h.prototype,"readMin",null),e([a("min")],h.prototype,"writeMin",null),e([o({type:["datetime-picker"],json:{read:!1,write:!0}})],h.prototype,"type",void 0),h=ce=e([p("esri.form.elements.inputs.DateTimePickerInput")],h);const Bt=h;var me;let B=me=class extends I{constructor(t){super(t),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="radio-buttons"}clone(){return new me({noValueOptionLabel:this.noValueOptionLabel,showNoValueOption:this.showNoValueOption})}};e([o({type:String,json:{write:!0}})],B.prototype,"noValueOptionLabel",void 0),e([o({type:Boolean,json:{write:!0}})],B.prototype,"showNoValueOption",void 0),e([o({type:["radio-buttons"],json:{read:!1,write:!0}})],B.prototype,"type",void 0),B=me=e([p("esri.form.elements.inputs.RadioButtonsInput")],B);const kt=B;var he;let k=he=class extends I{constructor(t){super(t),this.offValue=null,this.onValue=null,this.type="switch"}clone(){return new he({offValue:this.offValue,onValue:this.onValue})}};e([o({type:[String,Number],json:{write:!0}})],k.prototype,"offValue",void 0),e([o({type:[String,Number],json:{write:!0}})],k.prototype,"onValue",void 0),e([o({type:["switch"],json:{read:!1,write:!0}})],k.prototype,"type",void 0),k=he=e([p("esri.form.elements.inputs.SwitchInput")],k);const At=k;var ve;let H=ve=class extends Ie{constructor(t){super(t),this.type="text-area"}clone(){return new ve({maxLength:this.maxLength,minLength:this.minLength})}};e([o({type:["text-area"],json:{read:!1,write:!0}})],H.prototype,"type",void 0),H=ve=e([p("esri.form.elements.inputs.TextAreaInput")],H);const Ut=H;var fe;let J=fe=class extends Ie{constructor(t){super(t),this.type="text-box"}clone(){return new fe({maxLength:this.maxLength,minLength:this.minLength})}};e([o({type:["text-box"],json:{read:!1,write:!0}})],J.prototype,"type",void 0),J=fe=e([p("esri.form.elements.inputs.TextBoxInput")],J);const Lt=J;var xe;function ie(t){return t??null}function oe(t){return t??null}let y=xe=class extends I{constructor(t){super(t),this.max=null,this.min=null,this.timeResolution="minutes",this.type="time-picker"}readMax(t,i){return ie(i.max)}writeMax(t,i){i.max=oe(t)}readMin(t,i){return ie(i.min)}writeMin(t,i){i.min=oe(t)}readTimeResolution(t,i){return ie(i.timeResolution)}writeTimeResolution(t,i){i.timeResolution=oe(t)}clone(){return new xe({max:this.max,min:this.min,timeResolution:this.timeResolution})}};e([o({type:String,json:{type:String,write:!0}})],y.prototype,"max",void 0),e([l("max")],y.prototype,"readMax",null),e([a("max")],y.prototype,"writeMax",null),e([o({type:String,json:{type:String,write:!0}})],y.prototype,"min",void 0),e([l("min")],y.prototype,"readMin",null),e([a("min")],y.prototype,"writeMin",null),e([o({type:String,json:{type:String,write:!0}})],y.prototype,"timeResolution",void 0),e([l("timeResolution")],y.prototype,"readTimeResolution",null),e([a("timeResolution")],y.prototype,"writeTimeResolution",null),e([o({type:["time-picker"],json:{read:!1,write:!0}})],y.prototype,"type",void 0),y=xe=e([p("esri.form.elements.inputs.TimePickerInput")],y);const Ct=y,Gt={base:I,key:"type",typeMap:{"barcode-scanner":Rt,"combo-box":Dt,"date-picker":Vt,"datetime-picker":Bt,"datetimeoffset-picker":Nt,"radio-buttons":kt,switch:At,"text-area":Ut,"text-box":Lt,"time-picker":Ct}};var we;let m=we=class extends O{constructor(t){super(t),this.domain=null,this.editable=null,this.editableExpression=null,this.fieldName=null,this.hint=null,this.input=null,this.requiredExpression=null,this.type="field",this.valueExpression=null}clone(){return new we({description:this.description,domain:this.domain,editable:this.editable,editableExpression:this.editableExpression,fieldName:this.fieldName,hint:this.hint,input:this.input,label:this.label,requiredExpression:this.requiredExpression,valueExpression:this.valueExpression,visibilityExpression:this.visibilityExpression})}};e([o({types:lt,json:{read:{reader:ze},write:!0}})],m.prototype,"domain",void 0),e([o({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),e([o({type:String,json:{write:!0}})],m.prototype,"editableExpression",void 0),e([o({type:String,json:{write:!0}})],m.prototype,"fieldName",void 0),e([o({type:String,json:{write:!0}})],m.prototype,"hint",void 0),e([o({types:Gt,json:{read:{source:"inputType"},write:{target:"inputType"}}})],m.prototype,"input",void 0),e([o({type:String,json:{write:!0}})],m.prototype,"requiredExpression",void 0),e([o({type:String,json:{read:!1,write:!0}})],m.prototype,"type",void 0),e([o({type:String,json:{write:!0}})],m.prototype,"valueExpression",void 0),m=we=e([p("esri.form.elements.FieldElement")],m);const Ge=m;var ge;let b=ge=class extends O{constructor(t){super(t),this.displayCount=null,this.displayType="list",this.editableExpression=null,this.orderByFields=null,this.relationshipId=null,this.type="relationship"}clone(){return new ge({description:this.description,displayCount:this.displayCount,displayType:this.displayType,editableExpression:this.editableExpression,label:this.label,orderByFields:L(this.orderByFields),relationshipId:this.relationshipId,visibilityExpression:this.visibilityExpression})}};e([o({type:Number,json:{write:!0}})],b.prototype,"displayCount",void 0),e([o({type:["list"],json:{write:!0}})],b.prototype,"displayType",void 0),e([o({type:String,json:{write:!0}})],b.prototype,"editableExpression",void 0),e([o({type:[tt],json:{write:!0}})],b.prototype,"orderByFields",void 0),e([o({type:Number,json:{write:!0}})],b.prototype,"relationshipId",void 0),e([o({type:["relationship"],json:{read:!1,write:!0}})],b.prototype,"type",void 0),b=ge=e([p("esri.form.elements.RelationshipElement")],b);const Qe=b;var be;let A=be=class extends O{constructor(t){super(t),this.text=null,this.textFormat="plain-text",this.type="text"}clone(){return new be({text:this.text,textFormat:this.textFormat,visibilityExpression:this.visibilityExpression})}};e([o({type:String,json:{write:!0}})],A.prototype,"text",void 0),e([o({type:String,json:{write:!0}})],A.prototype,"textFormat",void 0),e([o({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],A.prototype,"type",void 0),A=be=e([p("esri.form.elements.TextElement")],A);const We=A;function He(t){return{typesWithGroup:{base:O,key:"type",typeMap:{attachment:ke,field:Ge,group:t,relationship:Qe,text:We}},typesWithoutGroup:{base:O,key:"type",typeMap:{attachment:ke,field:Ge,relationship:Qe,text:We}}}}function Je(t,i,r=!0){if(!t)return null;const n=r?i.typesWithGroup.typeMap:i.typesWithoutGroup.typeMap;return t.filter(s=>n[s.type]).map(s=>n[s.type].fromJSON(s))}function Ke(t,i,r=!0){if(!t)return null;const n=r?i.typesWithGroup.typeMap:i.typesWithoutGroup.typeMap;return t.filter(s=>n[s.type]).map(s=>s.toJSON())}function _e(t,i,r=!0){return t?t.map(n=>Pe(r?i.typesWithGroup:i.typesWithoutGroup,n)):null}var je;let w=je=class extends O{constructor(t){super(t),this.elements=null,this.initialState="expanded",this.type="group"}castElements(t){return _e(t,ne,!1)}readElements(t,i){return Je(i.formElements,ne,!1)}writeElements(t,i){i.formElements=Ke(t,ne,!1)}clone(){return new je({description:this.description,elements:L(this.elements),initialState:this.initialState,label:this.label,visibilityExpression:this.visibilityExpression})}};e([o({json:{write:!0}})],w.prototype,"elements",void 0),e([Se("elements")],w.prototype,"castElements",null),e([l("elements",["formElements"])],w.prototype,"readElements",null),e([a("elements")],w.prototype,"writeElements",null),e([o({type:["collapsed","expanded"],json:{write:!0}})],w.prototype,"initialState",void 0),e([o({type:String,json:{read:!1,write:!0}})],w.prototype,"type",void 0),w=je=e([p("esri.form.elements.GroupElement")],w);const ne=He(w),Qt=w,Wt=t=>t.type==="field",Pt=t=>t.type==="group",qt=t=>t.type==="text";var $e;const re=He(Qt);let v=$e=class extends S{constructor(t){super(t),this.description=null,this.elements=null,this.expressionInfos=null,this.preserveFieldValuesWhenHidden=!1,this.title=null}castElements(t){return _e(t,re)}readElements(t,i){return Je(i.formElements,re)}writeElements(t,i){i.formElements=Ke(t,re)}clone(){return new $e({description:this.description,expressionInfos:L(this.expressionInfos),elements:L(this.elements),title:this.title,preserveFieldValuesWhenHidden:this.preserveFieldValuesWhenHidden})}async getFieldsUsed(t,i){const r=new Set,{description:n,elements:s,expressionInfos:c,title:M}=this;if(W(r,t,n),W(r,t,M),!s)return[];const et=zt(s,c).map(_=>it(r,t,_));await Promise.all(et);for(const _ of s)Xe(r,{fieldsIndex:t,relationships:i},_);return Array.from(r).sort()}};function Xe(t,i,r){const{fieldsIndex:n}=i;if(!n||n.fields.length!==t.size)switch(W(t,n,r.label),W(t,n,r.description),r.type){case"field":Ee(t,n,r.fieldName);break;case"group":r.elements.forEach(s=>Xe(t,i,s));break;case"relationship":if(i.relationships){const s=i.relationships.find(c=>c.id===r.relationshipId);s&&Ee(t,n,s.keyField)}qe(t,n,r.orderByFields?.map(s=>s.field));break;case"text":W(t,n,r.text)}}function zt(t,i){if(!i||i.length===0)return[];const r=Ye(t),n=[];for(const s of i)r.has(s.name)&&n.push(s.expression);return n}function Ye(t){const i=new Set;for(const r of t)if(Fe(i,r.visibilityExpression),!qt(r)){if(Pt(r))Te(i,Ye(r.elements));else if(Fe(i,r.editableExpression),Wt(r)){const{requiredExpression:n,valueExpression:s}=r;Te(i,[n,s])}}return i}function W(t,i,r){qe(t,i,ot(r))}e([o({type:String,json:{write:!0}})],v.prototype,"description",void 0),e([o({json:{write:!0}})],v.prototype,"elements",void 0),e([Se("elements")],v.prototype,"castElements",null),e([l("elements",["formElements"])],v.prototype,"readElements",null),e([a("elements")],v.prototype,"writeElements",null),e([o({type:[It],json:{write:!0}})],v.prototype,"expressionInfos",void 0),e([o({type:Boolean,json:{default:!1,write:!0}})],v.prototype,"preserveFieldValuesWhenHidden",void 0),e([o({type:String,json:{write:!0}})],v.prototype,"title",void 0),v=$e=e([p("esri.form.FormTemplate")],v);const hi=v;let j=class extends P(S){constructor(t){super(t),this.creatorField=null,this.creationDateField=null,this.editorField=null,this.editDateField=null,this.realm=null,this.timeZone=null}};e([o()],j.prototype,"creatorField",void 0),e([o()],j.prototype,"creationDateField",void 0),e([o()],j.prototype,"editorField",void 0),e([o()],j.prototype,"editDateField",void 0),e([o()],j.prototype,"realm",void 0),e([o(se("dateFieldsTimeReference",!0))],j.prototype,"timeZone",void 0),j=e([p("esri.layers.support.EditFieldsInfo")],j);const Zt=j;let g=class extends P(S){constructor(t){super(t)}};e([o({constructOnly:!0,json:{write:!0}})],g.prototype,"name",void 0),e([o({constructOnly:!0,json:{write:!0}})],g.prototype,"fields",void 0),e([o({constructOnly:!0,json:{write:!0}})],g.prototype,"isAscending",void 0),e([o({constructOnly:!0,json:{write:!0}})],g.prototype,"indexType",void 0),e([o({constructOnly:!0,json:{write:!0}})],g.prototype,"isUnique",void 0),e([o({constructOnly:!0,json:{write:!0}})],g.prototype,"description",void 0),g=e([p("esri.layers.support.FeatureIndex")],g);let U=class extends P(S){constructor(t){super(t),this.shapeAreaField=null,this.shapeLengthField=null,this.units=null}};e([o({type:String,json:{read:{source:"shapeAreaFieldName"}}})],U.prototype,"shapeAreaField",void 0),e([o({type:String,json:{read:{source:"shapeLengthFieldName"}}})],U.prototype,"shapeLengthField",void 0),e([o({type:String,json:{read:t=>nt.read(t)||rt.read(t)}})],U.prototype,"units",void 0),U=e([p("esri.layers.support.GeometryFieldsInfo")],U);const Ht=U;let $=class extends P(S){constructor(t){super(t),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(t){if(!t)return null;const i={};for(const r of Object.keys(t))i[r]=ze(t[r]);return i}writeDomains(t,i){if(!t)return;const r={};for(const n of Object.keys(t))t[n]&&(r[n]=t[n]?.toJSON());i.domains=r}};e([o({type:Number,json:{write:!0}})],$.prototype,"code",void 0),e([o({type:Object,json:{write:!0}})],$.prototype,"defaultValues",void 0),e([o({json:{write:!0}})],$.prototype,"domains",void 0),e([l("domains")],$.prototype,"readDomains",null),e([a("domains")],$.prototype,"writeDomains",null),e([o({type:String,json:{write:!0}})],$.prototype,"name",void 0),$=e([p("esri.layers.support.Subtype")],$);const Jt=$,vi=t=>{let i=class extends t{constructor(){super(...arguments),this.copyright=null,this.capabilities=null,this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.definitionExpression=null,this.displayField=null,this.editFieldsInfo=null,this.editingInfo=null,this.elevationInfo=null,this.floorInfo=null,this.fullExtent=null,this.gdbVersion=null,this.geometryFieldsInfo=null,this.geometryType=null,this.globalIdField=null,this.hasM=void 0,this.hasZ=void 0,this.heightModelInfo=null,this.historicMoment=null,this.indexes=new(Oe.ofType(g)),this.isTable=!1,this.layerId=void 0,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.preferredTimeZone=null,this.relationships=null,this.returnM=void 0,this.returnZ=void 0,this.serviceDefinitionExpression=null,this.serviceItemId=null,this.sourceJSON=null,this.spatialReference=Me.WGS84,this.subtypeField=null,this.subtypes=null,this.trackIdField=null,this.version=void 0}get authenticationTriggerEvent(){if(!this.url)return null;const{capabilities:r}=this;if(r){const{query:s,operations:c,editing:M}=r;if(!s.supportsQueryByOthers||!s.supportsQueryByAnonymous||c.supportsEditing&&!(M.supportsUpdateByOthers&&M.supportsUpdateByAnonymous&&M.supportsDeleteByOthers&&M.supportsDeleteByAnonymous))return"load"}if(this.serviceDefinitionExpression?.toLowerCase().includes("current_user"))return"load";if(this.userHasUpdateItemPrivileges){if(xt(this))return"load";if(this.hasUpdateItemRestrictions)return r.operations.supportsQuery?"editing":"load"}if(this.userHasFullEditingPrivileges&&this.hasFullEditingRestrictions)return"editing";const n=this.editFieldsInfo;return(n?.creatorField||n?.editorField)&&r?.operations.supportsEditing?"editing":null}readCapabilitiesFromService(r,n){return St(n,this.url)}readEditingInfo(r,n){const{editingInfo:s}=n;return s?{lastEditDate:s.lastEditDate!=null?new Date(s.lastEditDate):null}:null}get effectiveCapabilities(){const r=this.capabilities;if(!r)return null;const n=L(r),{operations:s,editing:c}=n;return X(this)?(this.userHasUpdateItemPrivileges&&(s.supportsQuery=!0),n):this.userHasUpdateItemPrivileges?(s.supportsAdd=s.supportsDelete=s.supportsEditing=s.supportsQuery=s.supportsUpdate=c.supportsDeleteByOthers=c.supportsGeometryUpdate=c.supportsUpdateByOthers=!0,n):(this.userHasFullEditingPrivileges&&s.supportsEditing&&(s.supportsAdd=s.supportsDelete=s.supportsUpdate=c.supportsGeometryUpdate=!0),n)}readGlobalIdFieldFromService(r,n){return wt(n)}get hasFullEditingRestrictions(){const r=this.capabilities;if(!r||X(this))return!1;const{operations:n,editing:s}=r;return n.supportsEditing&&!(n.supportsAdd&&n.supportsDelete&&n.supportsUpdate&&s.supportsGeometryUpdate)}get hasUpdateItemRestrictions(){const r=this.capabilities;if(!r)return!1;const{operations:n,editing:s}=r;return X(this)?!n.supportsQuery:!(n.supportsAdd&&n.supportsDelete&&n.supportsEditing&&n.supportsQuery&&n.supportsUpdate&&s.supportsDeleteByOthers&&s.supportsGeometryUpdate&&s.supportsUpdateByOthers)}readIsTableFromService(r,n){return n.type==="Table"}readMaxScale(r,n){return n.effectiveMaxScale||r||0}readMinScale(r,n){return n.effectiveMinScale||r||0}readObjectIdFieldFromService(r,n){return gt(n)}readServiceDefinitionExpression(r,n){return n.definitionQuery||n.definitionExpression}set url(r){if(r==null)return void this._set("url",r);const n=ht({layer:this,url:r,nonStandardUrlAllowed:!0,logger:pt.getLogger(this)});this._set("url",n.url),n.layerId!=null&&this._set("layerId",n.layerId)}writeUrl(r,n,s,c){vt(this,r,null,n,c)}readVersion(r,n){return bt(n)}};return e([o({readOnly:!0})],i.prototype,"authenticationTriggerEvent",null),e([o({type:String,json:{origins:{service:{read:{source:"copyrightText"}}}}})],i.prototype,"copyright",void 0),e([o({readOnly:!0,json:{read:!1,origins:{service:{read:{source:["advancedQueryCapabilities","allowGeometryUpdates","allowUpdateWithoutMValues","archivingInfo","capabilities","datesInUnknownTimezone","hasAttachments","hasM","hasZ","isDataBranchVersioned","isDataVersioned","maxRecordCount","maxRecordCountFactor","ownershipBasedAccessControlForFeatures","standardMaxRecordCount","supportedQueryFormats","supportsAdvancedQueries","supportsApplyEditsWithGlobalIds","supportsAttachmentsByUploadId","supportsAttachmentsResizing","supportsCalculate","supportsCoordinatesQuantization","supportsExceedsLimitStatistics","supportsFieldDescriptionProperty","supportsQuantizationEditMode","supportsRollbackOnFailureParameter","supportsStatistics","supportsTruncate","supportsValidateSql","tileMaxRecordCount","useStandardizedQueries"]}}}}})],i.prototype,"capabilities",void 0),e([l("service","capabilities")],i.prototype,"readCapabilitiesFromService",null),e([o(se("dateFieldsTimeReference"))],i.prototype,"dateFieldsTimeZone",void 0),e([o({type:Boolean})],i.prototype,"datesInUnknownTimezone",void 0),e([o({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),e([o({type:String,json:{origins:{service:{read:{source:"displayField"}}}}})],i.prototype,"displayField",void 0),e([o({readOnly:!0,type:Zt})],i.prototype,"editFieldsInfo",void 0),e([o({readOnly:!0})],i.prototype,"editingInfo",void 0),e([l("editingInfo")],i.prototype,"readEditingInfo",null),e([o({readOnly:!0})],i.prototype,"effectiveCapabilities",null),e([o((()=>{const r=L(at),n=r.json.origins;return n["web-map"]={read:!1,write:!1},n["portal-item"]={read:!1,write:!1},r})())],i.prototype,"elevationInfo",void 0),e([o({type:jt,json:{name:"layerDefinition.floorInfo",write:!0,origins:{"web-scene":{name:"layerDefinition.floorInfo",write:{enabled:!0,layerContainerTypes:ut}}}}})],i.prototype,"floorInfo",void 0),e([o({type:st,json:{origins:{service:{read:{source:"extent"}}}}})],i.prototype,"fullExtent",void 0),e([o()],i.prototype,"gdbVersion",void 0),e([o({readOnly:!0,type:Ht,json:{read:{source:"geometryProperties"}}})],i.prototype,"geometryFieldsInfo",void 0),e([o({type:["point","polygon","polyline","multipoint","multipatch","mesh"],json:{origins:{service:{read:ft.read}}}})],i.prototype,"geometryType",void 0),e([o({type:String})],i.prototype,"globalIdField",void 0),e([l("service","globalIdField",["globalIdField","fields"])],i.prototype,"readGlobalIdFieldFromService",null),e([o({readOnly:!0})],i.prototype,"hasFullEditingRestrictions",null),e([o({type:Boolean,json:{origins:{service:{read:!0}}}})],i.prototype,"hasM",void 0),e([o({readOnly:!0})],i.prototype,"hasUpdateItemRestrictions",null),e([o({type:Boolean,json:{origins:{service:{read:!0}}}})],i.prototype,"hasZ",void 0),e([o({readOnly:!0,type:mt})],i.prototype,"heightModelInfo",void 0),e([o({type:Date})],i.prototype,"historicMoment",void 0),e([o({type:Oe.ofType(g),readOnly:!0})],i.prototype,"indexes",void 0),e([o({readOnly:!0})],i.prototype,"isTable",void 0),e([l("service","isTable",["type"])],i.prototype,"readIsTableFromService",null),e([o({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{read:!1,write:{target:"id"}}},read:!1}})],i.prototype,"layerId",void 0),e([o(dt)],i.prototype,"maxScale",void 0),e([l("service","maxScale",["maxScale","effectiveMaxScale"])],i.prototype,"readMaxScale",null),e([o(yt)],i.prototype,"minScale",void 0),e([l("service","minScale",["minScale","effectiveMinScale"])],i.prototype,"readMinScale",null),e([o({type:String})],i.prototype,"objectIdField",void 0),e([l("service","objectIdField",["objectIdField","fields"])],i.prototype,"readObjectIdFieldFromService",null),e([o(se("preferredTimeReference"))],i.prototype,"preferredTimeZone",void 0),e([o({type:[$t],readOnly:!0})],i.prototype,"relationships",void 0),e([o({type:Boolean})],i.prototype,"returnM",void 0),e([o({type:Boolean})],i.prototype,"returnZ",void 0),e([o({readOnly:!0,json:{write:!1}})],i.prototype,"serverGens",void 0),e([o({readOnly:!0})],i.prototype,"serviceDefinitionExpression",void 0),e([l("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],i.prototype,"readServiceDefinitionExpression",null),e([o({type:String,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"serviceItemId",void 0),e([o()],i.prototype,"sourceJSON",void 0),e([o({type:Me,json:{origins:{service:{read:{source:"extent.spatialReference"}}}}})],i.prototype,"spatialReference",void 0),e([o({type:String,readOnly:!0,json:{origins:{service:{read:!0}}}})],i.prototype,"subtypeField",void 0),e([o({type:[Jt],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"subtypes",void 0),e([o({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],i.prototype,"trackIdField",void 0),e([o(ct)],i.prototype,"url",null),e([a("url")],i.prototype,"writeUrl",null),e([o({json:{origins:{service:{read:!0}},read:!1}})],i.prototype,"version",void 0),e([l("service","version",["currentVersion","capabilities","drawingInfo","hasAttachments","htmlPopupType","relationships","timeInfo","typeIdField","types"])],i.prototype,"readVersion",null),i=e([p("esri.layers.mixins.FeatureLayerBase")],i),i};export{vi as B,hi as V};
