import{D as t,G as s,K as a}from"./main-0iYVBzEC.js";import{c as i,l as p}from"./GraphicsCollection-t49Dto8P.js";import{f as h}from"./Layer-CT6QkP5X.js";import{p as n}from"./BlendLayer-Cnud9ma7.js";import{t as d}from"./ScaleRangeLayer-BqwzcAb5.js";import{h as c}from"./ElevationInfo-BV5uPdCD.js";let r=class extends n(d(h)){constructor(e){super(e),this.elevationInfo=null,this.graphics=new i,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,o){return super.on(e,o)}graphicChanged(e){this.emit("graphic-update",e)}};t([s({type:c})],r.prototype,"elevationInfo",void 0),t([s(p(i,"graphics"))],r.prototype,"graphics",void 0),t([s({type:["show","hide"]})],r.prototype,"listMode",void 0),t([s()],r.prototype,"screenSizePerspectiveEnabled",void 0),t([s({readOnly:!0})],r.prototype,"type",void 0),t([s({constructOnly:!0})],r.prototype,"internal",void 0),r=t([a("esri.layers.GraphicsLayer")],r);const l=r;export{l as default};
