import{aq as N,ar as S,as as y,at as g,au as O,av as F,aw as u,n as z,s as B,ax as $,ay as b,az as q,aA as x,aB as I,x as D,aC as L}from"./main-Cv8ITM2j.js";import{f as h}from"./timeZoneUtils-DBnpKbsS.js";function R(s){return"timeZone"in s}function A(s){return"timeZone"in s}function J(s){return"dateFieldsTimeZone"in s}const v=new Map;class m{static fromJSON(e){return new m(e.fields,e.timeZoneByFieldName)}static fromLayer(e){return new m(e.fields??[],T(e))}static fromLayerJSON(e){return new m(e.fields??[],T(e))}constructor(e=[],t){this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this._requiredFields=null,this.dateFields=[],this.numericFields=[],this.fields=e||[],this._timeZoneByFieldName=t?new Map(t):null;const n=[];for(const i of this.fields){const a=i?.name,o=_(a);if(a&&o){const l=r(a);this._fieldsMap.set(a,i),this._fieldsMap.set(l,i),this._normalizedFieldsMap.set(o,i),n.push(`${l}:${i.type}:${this._timeZoneByFieldName?.get(a)}`),N(i)?(this.dateFields.push(i),this._dateFieldsSet.add(i)):S(i)&&(this._numericFieldsSet.add(i),this.numericFields.push(i)),y(i)||g(i)||(i.editable=i.editable==null||!!i.editable,i.nullable=i.nullable==null||!!i.nullable)}}n.sort(),this.uid=n.join()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)y(e)||g(e)||e.nullable||O(e)!==void 0||this._requiredFields.push(e)}return this._requiredFields}equals(e){return this.uid===e?.uid}has(e){return this.get(e)!=null}get(e){if(!e)return;let t=this._fieldsMap.get(e);return t||(t=this._fieldsMap.get(r(e))??this._normalizedFieldsMap.get(_(e)),t&&this._fieldsMap.set(e,t),t)}getTimeZone(e){const t=this.get(e&&typeof e!="string"?e.name:e);return t?this._timeZoneByFieldName?this._timeZoneByFieldName.get(t.name):t.type==="date"||t.type==="esriFieldTypeDate"?(z.getLogger("esri.layers.support.FieldsIndex").errorOnce(new B("getTimeZone:no-timezone-information",`no time zone information for field '${t.name}'`)),F):w.has(t.type)?u:null:null}getLuxonTimeZone(e){const t=this.getTimeZone(e);return t?t===u?$.instance:t===F?b.utcInstance:q(v,t,()=>x.create(t)):null}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isTimeOnlyField(e){return I(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){return this.get(e)?.name??void 0}toJSON(){return{fields:this.fields.map(e=>D.isSerializable(e)?e.toJSON():e),timeZoneByFieldName:this._timeZoneByFieldName?Array.from(this._timeZoneByFieldName.entries()):null}}}function r(s){return s.trim().toLowerCase()}function _(s){return L(s)?.toLowerCase()??""}const w=new Set(["time-only","date-only","timestamp-offset","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]);function T(s){const e=new Map;if(!s.fields)return e;const t=s.datesInUnknownTimezone===!0,{timeInfo:n,editFieldsInfo:i}=s,a=(n?"startField"in n?n.startField:n.startTimeField:"")??"",o=(n?"endField"in n?n.endField:n.endTimeField:"")??"",l=J(s)?s.dateFieldsTimeZone??null:s.dateFieldsTimeReference?h(s.dateFieldsTimeReference):null,c=i?R(i)?i.timeZone??l:i.dateFieldsTimeReference?h(i.dateFieldsTimeReference):l??F:null,p=n?A(n)?n.timeZone??l:n.timeReference?h(n.timeReference):l:null,Z=new Map([[r(i?.creationDateField??""),c],[r(i?.editDateField??""),c],[r(a),p],[r(o),p]]);for(const{name:d,type:f}of s.fields)if(w.has(f))e.set(d,u);else if(f!=="date"&&f!=="esriFieldTypeDate")e.set(d,null);else if(t)e.set(d,u);else{const M=Z.get(r(d??""))??l;e.set(d,M)}return e}export{m as Z};
