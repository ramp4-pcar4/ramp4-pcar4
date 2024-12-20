/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
class t{constructor(t=[]){this._elements=t;}length(){return this._elements.length}get(t){return this._elements[t]}toArray(){return this.slice()}slice(t=0,e=this.length()){const s=[];for(let r=t;r<e;r++)s.push(this.get(r));return s}}

export { t };
