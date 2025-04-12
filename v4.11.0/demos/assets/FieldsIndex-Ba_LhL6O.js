import{ai as N,aj as S,ak as y,al as g,am as O,n as b,s as q,an as h,ao as u,ap as B,aq as z,a8 as $,ar as D,as as I,at as L,au as F}from"./main-7nqzKo04.js";import{t as R}from"./UnknownTimeZone-BbXWTWnn.js";function x(s){return"timeZone"in s}function J(s){return"timeZone"in s}function A(s){return"dateFieldsTimeZone"in s}const j=new Map;class m{static fromJSON(e){return new m(e.fields,e.timeZoneByFieldName)}static fromLayer(e){return new m(e.fields??[],T(e))}static fromLayerJSON(e){return new m(e.fields??[],T(e))}constructor(e=[],t){this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this._requiredFields=null,this.dateFields=[],this.numericFields=[],this.fields=e||[],this._timeZoneByFieldName=t?new Map(t):null;const n=[];for(const i of this.fields){const a=i?.name,o=_(a);if(a&&o){const l=r(a);this._fieldsMap.set(a,i),this._fieldsMap.set(l,i),this._normalizedFieldsMap.set(o,i),n.push(`${l}:${i.type}:${this._timeZoneByFieldName?.get(a)}`),N(i)?(this.dateFields.push(i),this._dateFieldsSet.add(i)):S(i)&&(this._numericFieldsSet.add(i),this.numericFields.push(i)),y(i)||g(i)||(i.editable=i.editable==null||!!i.editable,i.nullable=i.nullable==null||!!i.nullable)}}n.sort(),this.uid=n.join()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)y(e)||g(e)||e.nullable||O(e)!==void 0||this._requiredFields.push(e)}return this._requiredFields}equals(e){return this.uid===e?.uid}has(e){return this.get(e)!=null}get(e){if(!e)return;let t=this._fieldsMap.get(e);return t||(t=this._fieldsMap.get(r(e))??this._normalizedFieldsMap.get(_(e)),t&&this._fieldsMap.set(e,t),t)}getTimeZone(e){const t=this.get(e&&typeof e!="string"?e.name:e);return t?this._timeZoneByFieldName?this._timeZoneByFieldName.get(t.name):t.type==="date"||t.type==="esriFieldTypeDate"?(b.getLogger("esri.layers.support.FieldsIndex").error(new q("getTimeZone:no-timezone-information",`no time zone information for field '${t.name}'`)),h):w.has(t.type)?u:null:null}getLuxonTimeZone(e){const t=this.getTimeZone(e);return t?t===u?R.instance:t===h?B.utcInstance:z(j,t,()=>$.create(t)):null}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isTimeOnlyField(e){return D(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){return this.get(e)?.name??void 0}toJSON(){return{fields:this.fields.map(e=>I(e)?e.toJSON():e),timeZoneByFieldName:this._timeZoneByFieldName?Array.from(this._timeZoneByFieldName.entries()):null}}}function r(s){return s.trim().toLowerCase()}function _(s){return L(s)?.toLowerCase()??""}const w=new Set(["time-only","date-only","timestamp-offset","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]);function T(s){const e=new Map;if(!s.fields)return e;const t=s.datesInUnknownTimezone===!0,{timeInfo:n,editFieldsInfo:i}=s,a=(n?"startField"in n?n.startField:n.startTimeField:"")??"",o=(n?"endField"in n?n.endField:n.endTimeField:"")??"",l=A(s)?s.dateFieldsTimeZone??null:s.dateFieldsTimeReference?F(s.dateFieldsTimeReference):null,c=i?x(i)?i.timeZone??l:i.dateFieldsTimeReference?F(i.dateFieldsTimeReference):l??h:null,p=n?J(n)?n.timeZone??l:n.timeReference?F(n.timeReference):l:null,Z=new Map([[r(i?.creationDateField??""),c],[r(i?.editDateField??""),c],[r(a),p],[r(o),p]]);for(const{name:d,type:f}of s.fields)if(w.has(f))e.set(d,u);else if(f!=="date"&&f!=="esriFieldTypeDate")e.set(d,null);else if(t)e.set(d,u);else{const M=Z.get(r(d??""))??l;e.set(d,M)}return e}export{m as Z};
