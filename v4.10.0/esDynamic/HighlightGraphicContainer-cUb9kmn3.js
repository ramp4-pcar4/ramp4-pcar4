import{bt as e,bv as t,aK as i,aM as h,aL as n}from"./main-DCIX61zy.js";import{i as l}from"./AGraphicContainer-aPpZ1eAs.js";let a=class extends l{get hasHighlight(){return this.children.some(s=>s.hasData)}renderChildren(s){this.attributeView.update(),s.drawPhase===i.HIGHLIGHT&&this.children.some(r=>r.hasData)&&(super.renderChildren(s),s.context.setColorMask(!0,!0,!0,!0),h(s,!0,r=>{this._renderChildren(r,n.All)},0))}};a=e([t("esri.views.2d.layers.graphics.HighlightGraphicContainer")],a);const d=a;export{d as h};
