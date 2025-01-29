import { bd as e, bf as a$1 } from './main-C4Zge2Yj.js';
import { E, a as a$2, R } from './Container-BRZw5EQp.js';
import { i } from './AGraphicContainer-nESw6VEI.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
let a=class extends i{get hasHighlight(){return this.children.some((r=>r.hasData))}renderChildren(r){this.attributeView.update(),r.drawPhase===E.HIGHLIGHT&&this.children.some((r=>r.hasData))&&(super.renderChildren(r),r.context.setColorMask(!0,!0,!0,!0),a$2(r,!0,(r=>{this._renderChildren(r,R.All);})));}};a=e([a$1("esri.views.2d.layers.graphics.HighlightGraphicContainer")],a);const h=a;

export { h };
