import"./index-DsBzYMd6.js";import{i as g,L as f,f as s,x as o,a as n,n as l,g as k,S as D}from"./themeUtils-DtlqXdR7.js";import{e as I,n as x}from"./ref-CB2lgz4s.js";import{w as y}from"./dom-Bh8n-8Ag.js";import{r as $}from"./loadable-DNcYbVcw.js";import{s as r}from"./component-CDHN7o_5.js";import{m as E,p as q}from"./interactive-FBw1OWt5.js";import{n as t}from"./resources6-Cs2_VmEC.js";import"./observers-D7XMED5i.js";import"./main-Bd_03BNf.js";import"./preload-helper-ExcqyqRp.js";import"./intl-BvarHTsY.js";import"./uuid-Cl5lrJ4c.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const C=g`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;flex-grow:1;align-items:center;outline-color:transparent}.container{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;text-align:start;outline-color:transparent}.container a{outline:none;position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none}.dropdown-item-content{flex:1 1 auto;padding-block:.125rem}.dropdown-item-icon{position:relative;opacity:0;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);transform:scale(.9)}:host([scale=s]) .container{padding-block:.25rem;padding-inline:.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .dropdown-item-icon,:host([scale=s]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-sm)}:host([scale=s]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-sm)}:host([scale=m]) .container{padding-block:.5rem;padding-inline:.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .dropdown-item-icon,:host([scale=m]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-md)}:host([scale=m]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-md)}:host([scale=l]) .container{padding-block:.625rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .dropdown-item-icon,:host([scale=l]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-lg)}:host([scale=l]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-lg)}:host(:focus) .container{color:var(--calcite-color-text-1);text-decoration-line:none;outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host(:hover:not([disabled])) .container,:host(:active:not([disabled])) .container{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1);text-decoration-line:none}:host(:hover:not([disabled])) .dropdown-link,:host(:active:not([disabled])) .dropdown-link{color:var(--calcite-color-text-1)}:host(:active:not([disabled])) .container{background-color:var(--calcite-color-foreground-3)}:host([selected]) .container:not(.container--none-selection),:host([selected]) .dropdown-link{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}:host([selected]) .container:not(.container--none-selection) calcite-icon,:host([selected]) .dropdown-link calcite-icon{color:var(--calcite-color-brand)}:host(:hover:not([disabled])) .dropdown-item-icon{color:var(--calcite-color-border-1);opacity:1}:host([selected]) .dropdown-item-icon{color:var(--calcite-color-brand);opacity:1}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`;class S extends f{constructor(){super(),this.childLink=I(),this.disabled=!1,this.scale="m",this.selected=!1,this.selectionMode="single",this.calciteDropdownItemSelect=s({cancelable:!1}),this.calciteInternalDropdownCloseRequest=s({cancelable:!1}),this.calciteInternalDropdownItemKeyEvent=s({cancelable:!1}),this.calciteInternalDropdownItemSelect=s({cancelable:!1}),this.listen("click",this.onClick),this.listen("keydown",this.keyDownHandler),this.listenOn(document.body,"calciteInternalDropdownItemChange",this.updateActiveItemOnChange)}static{this.properties={disabled:7,href:3,iconEnd:3,iconFlipRtl:3,iconStart:3,label:1,rel:3,scale:3,selected:7,selectionMode:1,target:3}}static{this.styles=C}async setFocus(){await $(this),this.el?.focus()}connectedCallback(){super.connectedCallback(),this.initialize()}load(){this.initialize()}updated(){E(this)}loaded(){}onClick(){this.emitRequestedItem()}keyDownHandler(e){switch(e.key){case" ":case"Enter":this.emitRequestedItem(),this.href&&this.childLink.value.click(),e.preventDefault();break;case"Escape":this.calciteInternalDropdownCloseRequest.emit(),e.preventDefault();break;case"Tab":this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:e});break;case"ArrowUp":case"ArrowDown":case"Home":case"End":e.preventDefault(),this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:e});break}}updateActiveItemOnChange(e){e.composedPath().includes(this.parentDropdownGroupEl)&&(this.requestedDropdownGroup=e.detail.requestedDropdownGroup,this.requestedDropdownItem=e.detail.requestedDropdownItem,this.determineActiveItem()),e.stopPropagation()}initialize(){this.parentDropdownGroupEl=this.el.closest("calcite-dropdown-group"),this.selectionMode==="none"&&(this.selected=!1)}determineActiveItem(){switch(this.selectionMode){case"multiple":this.el===this.requestedDropdownItem&&(this.selected=!this.selected);break;case"single":this.el===this.requestedDropdownItem?this.selected=!0:this.requestedDropdownGroup===this.parentDropdownGroupEl&&(this.selected=!1);break;case"none":this.selected=!1;break}}emitRequestedItem(){this.calciteDropdownItemSelect.emit(),this.calciteInternalDropdownItemSelect.emit({requestedDropdownItem:this.el,requestedDropdownGroup:this.parentDropdownGroupEl})}render(){const{href:e,selectionMode:i,label:d,iconFlipRtl:c}=this,p=o`<calcite-icon class=${n(t.iconStart)} .flipRtl=${c==="start"||c==="both"} .icon=${this.iconStart} .scale=${r(this.scale)}></calcite-icon>`,a=o`<span class=${n(t.itemContent)}><slot></slot></span>`,h=o`<calcite-icon class=${n(t.iconEnd)} .flipRtl=${c==="end"||c==="both"} .icon=${this.iconEnd} .scale=${r(this.scale)}></calcite-icon>`,m=this.iconStart&&this.iconEnd?[p,a,h]:this.iconStart?[p,a]:this.iconEnd?[a,h]:a,w=e?o`<a .ariaLabel=${d} class=${n(t.link)} href=${e??l} rel=${this.rel??l} tabindex=-1 target=${this.target??l} ${x(this.childLink)}>${m}</a>`:m,b=e?null:i==="single"?"menuitemradio":i==="multiple"?"menuitemcheckbox":"menuitem",v=i!=="none"?y(this.selected):null,{disabled:u}=this;return this.el.ariaChecked=v,this.el.ariaLabel=e?"":d,this.el.role=b,k(this.el,"tabIndex",u?-1:0),q({disabled:u,children:o`<div class=${n({[t.container]:!0,[t.containerNone]:i==="none"})}>${i!=="none"?o`<calcite-icon class=${n(t.icon)} .icon=${i==="multiple"?"check":"bullet-point"} .scale=${r(this.scale)}></calcite-icon>`:null}${w}</div>`})}}D("calcite-dropdown-item",S);export{S as DropdownItem};
