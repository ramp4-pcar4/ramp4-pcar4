import{bZ as u,hq as o,hX as y,hY as i,hZ as m,h_ as f,h$ as p,c3 as v,c4 as L,c5 as b,c7 as I,c9 as _,ca as x,cb as A,ce as w,fo as c,gG as $,gH as S,gI as E}from"./main-8eb577c9.js";import{_ as T}from"./screen.vue_vue_type_script_setup_true_lang-040bf904.js";import"./preload-helper-388ac9d5.js";class C extends u{_parseConfig(e){const t=e?.headerControls?.slice()??["wizard","layerReorder","groupToggle","visibilityToggle"];if(o(this.$vApp.$pinia).headerControls=t,!e||!e.root.children)return;this.handlePanelWidths(["legend"]),this.handlePanelTeleports(["legend"]);const l=this.getLayerFixtureConfigs();e.root.children.forEach(n=>{n.layerLegendConfigs=l,this.addItem(n)}),this.$iApi.geo.layer.allLayers().forEach(n=>{this.updateLegend(n)}),this.$iApi.geo.layer.allErrorLayers().forEach(n=>{this.updateLegend(n)})}createItem(e,t){let l;e.layerId===void 0?l=new y(this.$iApi,e,t):(e.sublayerIndex!==void 0&&(e.layerId=`${e.layerId}-${e.sublayerIndex}`),l=new i(this.$iApi,e,t));const n=e.children;return n&&n.forEach(r=>{e.layerLegendConfigs!==void 0&&(r.layerLegendConfigs=e.layerLegendConfigs),l.children.push(this.createItem(r,l))}),l}addItem(e,t){const l=e instanceof m?e:this.createItem(e,t);return this._insertItem(l,t),l}async addLayerItem(e,t){const l=new i(this.$iApi,{layerId:e.id,sublayerIndex:e.layerIdx!==-1?e.layerIdx:void 0,name:e.name},t);return this._insertItem(l,t),this.updateLegend(e),l}get config(){return super.config}getLegend(){return o(this.$vApp.$pinia).children||[]}getLegendConfig(){return{root:{children:this.getLegend().map(e=>e.getConfig())}}}getItem(e){const t=this.getLegend();let l;return t.some(n=>(l=this._searchTree(n,r=>r.uid===e),l!==void 0)),l}getLayerItem(e){let t=typeof e=="string"?e:e.id;const l=this.getLegend();let n;return l.some(r=>(n=this._searchTree(r,a=>a instanceof i&&a.layerId===t),n!==void 0)),n===void 0&&(t=typeof e=="string"?e:e.uid,l.some(r=>(n=this._searchTree(r,a=>a instanceof i&&a.layerUid===t),n!==void 0))),n}getAllExpanded(e){const t=this.getLegend(),l=[],n=e??!0;return t.forEach(r=>{l.push(...this._searchTreeAll(r,a=>a.children.length>0&&a.expanded===n))}),l}getAllVisible(e){const t=this.getLegend(),l=[],n=e??!0;return t.forEach(r=>{l.push(...this._searchTreeAll(r,a=>a.visibility===n))}),l}updateLegend(e){const t=(l,n)=>{const r=this.getLayerItem(l);n?(r&&l instanceof p&&(r.layer=l),r?.error()):r?.load(l instanceof p?l:void 0)};e.loadPromise().then(()=>{let l=this.getLayerItem(e);if(l?.loadCancelled){t(e,!1);return}if(e.layerType===f.MAPIMAGE){const n=r=>{if(r.isLayerRoot&&!r.isLogicalLayer)l=this.getLayerItem(e),t(e,!1),l&&!l.treeGrown&&(r.children.map(a=>this._treeWalker(e,a)).map(a=>this.addItem(a,l)),l.treeGrown=!0),r.children.forEach(a=>n(a));else if(!r.isLayerRoot&&!r.isLogicalLayer){if(l=this.getLayerItem(`${e.id}-${r.layerIdx}`),l){const a=l.getConfig();delete a.layerId,delete a.sublayerIndex,delete a.children,a.name||delete a.name;const s={...this._treeWalker(e,r),...a},d=this.createItem(s);this._replaceItem(l,d)}r.children.forEach(a=>n(a))}else r.isLogicalLayer&&t(this._treeWalker(e,r).layer,!1)};n(e.getLayerTree())}else t(e,!1)}).catch(()=>{t(e,!0),e.supportsSublayers&&e.config.sublayers.forEach(l=>{t(`${e.id}-${l.index}`,!0)})})}expandItems(e,t){const l=this.getLegend(),n=t===void 0?l:t.children;t!==void 0&&this._toggleState(t,{expanded:e}),n.forEach(r=>{this._toggleState(r,{expanded:e})})}showItems(e,t){const l=this.getLegend(),n=t===void 0?l:t.children;t!==void 0&&this._toggleState(t,{visibility:e}),n.forEach(r=>{this._toggleState(r,{visibility:e})})}reloadLayerItem(e){const t=this.getLayerItem(e);return t?t instanceof i?(t._loadCancelled=!1,t.reload(),!0):(console.warn("reloading is not supported for non layer items"),!1):!1}removeItem(e){const t=typeof e=="string"?this.getItem(e):e;return t!==void 0?this._deleteItem(t):!1}removeLayerItem(e){const t=this.getLayerItem(e);return t!==void 0?this._deleteItem(t):!1}_searchTree(e,t){if(t(e))return e;{let l;return e.children.some(n=>(l=this._searchTree(n,t),l!==void 0)),l}}_searchTreeAll(e,t){const l=[],n=[e];for(;n.length>0;){const r=n.shift();r&&t(r)&&l.push(r),r&&n.push(...r.children)}return l}_toggleState(e,t){const l=t.visibility,n=t.expanded;l!==void 0&&e.toggleVisibility(l),n!==void 0&&e.children.length>0&&e.toggleExpanded(n),e.children&&e.children.length>0&&e.children.forEach(r=>{this._toggleState(r,t)})}_insertItem(e,t){o(this.$vApp.$pinia).addItem({item:e,parent:t})}_deleteItem(e){return e.children.length>0&&e.children.forEach(t=>{t.parent=e.parent,this._insertItem(t,e.parent)}),e instanceof i&&e.handlers.forEach(t=>this.$iApi.event.off(t)),o(this.$vApp.$pinia).removeItem(e),!0}_replaceItem(e,t){o(this.$vApp.$pinia).replaceItem({oldItem:e,newItem:t})}_treeWalker(e,t,l){const r=(s=>{const d=[e];for(;d.length>0;){const g=d.shift();if(g&&g.uid===s)return g;g&&d.push(...g.sublayers)}})(t.uid),a={};return t.isLayerRoot&&!t.isLogicalLayer?(a.layer=r,a.name=r.name,a.children=t.children.map(s=>this._treeWalker(e,s,l))):!t.isLayerRoot&&!t.isLogicalLayer?(a.name=t.name,a.children=t.children.map(s=>this._treeWalker(e,s,l))):t.isLogicalLayer&&(a.layer=r,a.name=r.name,a.layerId=r.id,a.sublayerIndex=e.layerIdx===-1?void 0:e.layerIdx),{...a,...l}}}const R=c("svg",{class:"fill-current w-32 h-20",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[c("path",{d:"M0 0h24v24H0z",fill:"none"}),c("path",{d:"M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"})],-1),M=v({__name:"nav-button",setup(h){const{t:e}=L(),t=b("iApi"),l=()=>{t.panel.toggle("legend")};return(n,r)=>{const a=I("mapnav-button");return _(),x(a,{onClickFunction:l,tooltip:w(e)("legend.title")},{default:A(()=>[R]),_:1},8,["tooltip"])}}}),G={en:{"legend.title":"Legend","legend.header.addlayer":"Add Layer","legend.header.reorderlayers":"Reorder Layers","legend.header.groups":"Toggle Groups","legend.header.groups.expand":"Expand All","legend.header.groups.collapse":"Collapse All","legend.header.visible":"Toggle Visibility","legend.header.visible.show":"Show All","legend.header.visible.hide":"Hide All","legend.group.expand":"Expand Group","legend.group.collapse":"Collapse Group","legend.visibility.showLayer":"Show layer","legend.visibility.hideLayer":"Hide layer","legend.visibility.showSymbol":"Show symbol","legend.visibility.hideSymbol":"Hide symbol","legend.visibility.showGroup":"Show group","legend.visibility.hideGroup":"Hide group","legend.symbology.expand":"Expand legend","legend.symbology.hide":"Hide legend","legend.symbology.loading":"Loading...","legend.layer.data":"Show more data","legend.layer.data.only":"Layer not on map","legend.layer.offscale":"Layer out of scale","legend.layer.zoomToVisible":"Zoom to visible scale","legend.layer.options":"More options","legend.layer.controls.metadata":"Metadata","legend.layer.controls.settings":"Settings","legend.layer.controls.datatable":"Datatable","legend.layer.controls.symbology":"Legend","legend.layer.controls.boundaryzoom":"Zoom to Layer Boundary","legend.layer.controls.cancel":"Cancel","legend.layer.controls.remove":"Remove","legend.layer.controls.reload":"Reload","legend.alert.symbologyExpanded":"Layer legend expanded","legend.alert.symbologyCollapsed":"Layer legend collapsed","legend.alert.groupExpanded":"Legend group expanded","legend.alert.groupCollapsed":"Legend group collapsed","legend.alert.layerAdded":"{name} layer added to legend","legend.alert.layerRemoved":"{name} layer removed from legend"},fr:{"legend.title":"Légende","legend.header.addlayer":"Ajouter une couche","legend.header.reorderlayers":"Réorganiser les couches","legend.header.groups":"Basculer les Groupes","legend.header.groups.expand":"Élargir les groupes","legend.header.groups.collapse":"Réduire les groupes","legend.header.visible":"Basculer la Visibilité","legend.header.visible.show":"Montrer tout","legend.header.visible.hide":"Cacher tout","legend.group.expand":"Développer un groupe","legend.group.collapse":"Réduire un groupe","legend.visibility.showLayer":"Afficher la couche","legend.visibility.hideLayer":"Masquer la couche","legend.visibility.showSymbol":"Afficher le symbole","legend.visibility.hideSymbol":"Masquer le symbole","legend.visibility.showGroup":"Afficher le groupe","legend.visibility.hideGroup":"Masquer le groupe","legend.symbology.expand":"Développer la légende","legend.symbology.hide":"Masquer la légende","legend.symbology.loading":"Chargement en cours...","legend.layer.data":"Afficher plus de données","legend.layer.data.only":"Couche pas sur la carte","legend.layer.offscale":"Couche hors de portée","legend.layer.zoomToVisible":"Zoom sur l'échelle visible","legend.layer.options":"Plus d'options","legend.layer.controls.metadata":"Métadonnées","legend.layer.controls.settings":"Paramètres","legend.layer.controls.datatable":"Tableau de données","legend.layer.controls.symbology":"Légende","legend.layer.controls.boundaryzoom":"Zoomer à la limite","legend.layer.controls.cancel":"Annuler","legend.layer.controls.remove":"Retirer","legend.layer.controls.reload":"Recharger","legend.alert.symbologyExpanded":"Légende de la couche développée","legend.alert.symbologyCollapsed":"Légende de la couche réduite","legend.alert.groupExpanded":"Groupe de légende développé","legend.alert.groupCollapsed":"Groupe de légende réduit","legend.alert.layerAdded":"{name} couche ajoutée à la légende","legend.alert.layerRemoved":"Couche {name} retiré de la légende"}};class P extends C{added(){this.$iApi.component("legend-nav-button",M),this.$iApi.panel.register({legend:{screens:{"legend-screen":$(T)},style:{width:"350px"},alertName:"legend.title",button:{tooltip:"legend.title",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" /></svg>'}}},{i18n:{messages:G}}),this._parseConfig(this.config!==void 0?JSON.parse(JSON.stringify(this.config)):void 0);const e=this.$vApp.$watch(()=>this.config,t=>this._parseConfig(t!==void 0?JSON.parse(JSON.stringify(t)):void 0));this.removed=()=>{e(),this.$iApi.fixture.get("appbar")&&S(this.$vApp.$pinia).removeButton("legend"),this.$iApi.fixture.get("mapnav")&&E(this.$vApp.$pinia).removeItem("legend"),o().$reset(),this.$iApi.panel.remove("legend")}}}export{P as default};
