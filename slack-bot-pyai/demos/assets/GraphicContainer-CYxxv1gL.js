import { E, R, a as a$1 } from './Container-CsB863Zr.js';
import { i } from './AGraphicContainer-GTSvIDCz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class t extends i{renderChildren(i){for(const e of this.children)e.setTransform(i.state);if(super.renderChildren(i),this.attributeView.update(),this.children.some((e=>e.hasData))){switch(i.drawPhase){case E.MAP:this._renderChildren(i,R.All);break;case E.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(i);}this._boundsRenderer&&this._boundsRenderer.doRender(i);}}_renderHighlight(e){a$1(e,!1,(e=>{this._renderChildren(e,R.Highlight);}));}}

export { t };
