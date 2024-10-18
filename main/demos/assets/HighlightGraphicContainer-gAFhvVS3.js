import { aW as e, aY as c } from './main-CdE0QN8n.js';
import { E, a as a$1, R } from './Container-DOlrJAF8.js';
import { i } from './AGraphicContainer-DF1OhrAb.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let a=class extends i{get hasHighlight(){return this.children.some((r=>r.hasData))}renderChildren(r){this.attributeView.update(),r.drawPhase===E.HIGHLIGHT&&this.children.some((r=>r.hasData))&&(super.renderChildren(r),r.context.setColorMask(!0,!0,!0,!0),a$1(r,!0,(r=>{this._renderChildren(r,R.All);})));}};a=e([c("esri.views.2d.layers.support.HighlightGraphicContainer")],a);const h=a;

export { h };
