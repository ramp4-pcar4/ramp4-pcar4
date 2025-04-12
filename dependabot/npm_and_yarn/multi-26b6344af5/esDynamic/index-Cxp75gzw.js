import"./index-ChVhwdk2.js";import{i as a,L as o,s as c,g as l,x as t,S as r}from"./themeUtils-DunS4jaw.js";import{T as e}from"./dom-BoCTcYFU.js";const s={valid:"check-circle",invalid:"exclamation-mark-triangle",idle:"information"},d=a`:host{box-sizing:border-box;display:flex;block-size:auto;inline-size:100%;align-items:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);opacity:1;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;--calcite-input-message-spacing-value: .25rem;margin-block-start:var(--calcite-input-message-spacing-value)}.calcite-input-message-icon{pointer-events:none;display:inline-flex;flex-shrink:0;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;margin-inline-end:.5rem}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-color-status-danger)}:host([status=warning]) .calcite-input-message-icon{color:var(--calcite-color-status-warning)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-color-status-success)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-color-brand)}:host([scale=s]){font-size:var(--calcite-font-size--3);line-height:.75rem}:host([scale=m]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=l]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([hidden]){display:none}[hidden]{display:none}`;class n extends o{constructor(){super(...arguments),this.iconFlipRtl=!1,this.scale="m",this.status="idle"}static{this.properties={icon:[3,{converter:c}],iconFlipRtl:7,scale:3,status:3}}static{this.styles=d}connectedCallback(){super.connectedCallback(),this.requestedIcon=e(s,this.icon,this.status)}willUpdate(i){(i.has("status")&&(this.hasUpdated||this.status!=="idle")||i.has("icon"))&&(this.requestedIcon=e(s,this.icon,this.status))}render(){const i=this.el.hidden;return l(this.el,"calcite-hydrated-hidden",i),t`${this.renderIcon(this.requestedIcon)}<slot></slot>`}renderIcon(i){if(i)return t`<calcite-icon class="calcite-input-message-icon" .flipRtl=${this.iconFlipRtl} .icon=${i} scale=s></calcite-icon>`}}r("calcite-input-message",n);export{n as InputMessage};
