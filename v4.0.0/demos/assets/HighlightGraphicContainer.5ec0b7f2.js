import{K as s,O as o}from"./main.efb50b2c.js";import{I as d}from"./Utils.f67560a4.js";import{t as h}from"./BaseGraphicContainer.ab876b54.js";import{_ as a}from"./enums.de935fa5.js";let t=class extends h{doRender(r){r.drawPhase===d.HIGHLIGHT&&super.doRender(r)}renderChildren(r){if(this.attributeView.bindTextures(r.context),!this.children.some(n=>n.hasData))return;super.renderChildren(r);const{painter:i}=r,e=i.effects.highlight;e.bind(r),r.context.setColorMask(!0,!0,!0,!0),r.context.clear(a.COLOR_BUFFER_BIT),this._renderChildren(r,e.defines.concat(["highlightAll"])),e.draw(r),e.unbind()}};t=s([o("esri.views.2d.layers.support.HighlightGraphicContainer")],t);const f=t;export{f as n};
