import{c as _,t as $,e as A,E as d}from"./themeUtils-DunS4jaw.js";const l=t=>t.strings===void 0,f={},u=(t,s=f)=>t._$AH=s,h=(t,s)=>{const i=t._$AN;if(i===void 0)return!1;for(const e of i)e._$AO?.(s,!1),h(e,s);return!0},o=t=>{let s,i;do{if((s=t._$AM)===void 0)break;i=s._$AN,i.delete(t),t=s}while(i?.size===0)},a=t=>{for(let s;s=t._$AM;t=s){let i=s._$AN;if(i===void 0)s._$AN=i=new Set;else if(i.has(t))break;i.add(t),p(s)}};function v(t){this._$AN!==void 0?(o(this),this._$AM=t,a(this)):this._$AM=t}function Y(t,s=!1,i=0){const e=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(s)if(Array.isArray(e))for(let n=i;n<e.length;n++)h(e[n],!1),o(e[n]);else e!=null&&(h(e,!1),o(e));else h(this,t)}const p=t=>{t.type==$.CHILD&&(t._$AP??=Y,t._$AQ??=v)};class g extends _{constructor(){super(...arguments),this._$AN=void 0}_$AT(s,i,e){super._$AT(s,i,e),a(this),this.isConnected=s._$AU}_$AO(s,i=!0){s!==this.isConnected&&(this.isConnected=s,s?this.reconnected?.():this.disconnected?.()),i&&(h(this,s),o(this))}setValue(s){if(l(this._$Ct))this._$Ct._$AI(s,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=s,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}const C=()=>new N;class N{}const c=new WeakMap,M=A(class extends g{render(t){return d}update(t,[s]){const i=s!==this.Y;return i&&this.Y!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=s,this.ht=t.options?.host,this.rt(this.ct=t.element)),d}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const s=this.ht??globalThis;let i=c.get(s);i===void 0&&(i=new WeakMap,c.set(s,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return typeof this.Y=="function"?c.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});export{C as e,l as f,u as m,M as n};
