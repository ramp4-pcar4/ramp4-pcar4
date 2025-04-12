const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./details-screen-ChfbiEbw.js","./main-Bd_03BNf.js","./preload-helper-ExcqyqRp.js","./main-gKmidBZg.css","./toggle-switch-control-CtbVWEnM.js","./toggle-switch-control-TJXJxWh9.css","./details-screen-ZBg8L_SG.css"])))=>i.map(i=>d[i]);
import{_ as m}from"./preload-helper-ExcqyqRp.js";import{F as g,gO as h,gP as p,fU as u,fV as c}from"./main-Bd_03BNf.js";import{H as f}from"./hilight-defs-CqXQYtIh.js";class y{id;name;template;priority;fields;componentId;constructor(e){const t={...typeof e=="string"?{id:e,template:"",name:"",priority:50}:e};({template:this.template,id:this.id,name:this.name,fields:this.fields,priority:this.priority}=t)}}const r="details";class v extends g{detailsStore=h(this.$vApp.$pinia);get config(){return super.config}openDetails(e){e.forEach(i=>{this._loadDetailsConfig(this.$iApi.geo.layer.getLayer(i.uid))}),this.detailsStore.payload=e;const t=this.$iApi.panel.get("details");this.detailsStore.origin="identify",t.button.tooltip="details.layers.title.identifyOrigin",this.$iApi.panel.get("details").isOpen||this.$iApi.panel.open({id:"details"})}toggleFeature(e,t){const s=this.$iApi.panel.get("details");if(t===!1){s.close(),this.detailsStore.currentFeatureId=void 0;return}const i=this.$iApi.geo.layer.getLayer(e.uid),a=`${e.uid}-${i?.supportsFeatures?e.data[i?.oidField??""]:JSON.stringify(e.data)}`;if(s.isOpen&&a===this.detailsStore.currentFeatureId&&t!==!0){s.close(),this.detailsStore.currentFeatureId=void 0;return}this.detailsStore.origin="toggleEvent",s.button.tooltip="details.layers.title.gridOrigin",this.detailsStore.currentFeatureId=a,this._loadDetailsConfig(i);const l={items:[p.makeRawItem(e.format,e.data)],uid:e.uid,layerId:e.layerId||i?.id||"error-not-found",loading:Promise.resolve(),loaded:!0,errored:!1,requestTime:Date.now()};this.detailsStore.payload=[l],s.isOpen||s.open()}_parseConfig(e){e&&e.templates&&(this.detailsStore.defaultTemplates=e.templates),this.handlePanelWidths(["details"]),this.handlePanelTeleports(["details"]);const t=this.getLayerFixtureConfigs(),s=[];Object.keys(t).forEach(a=>{s.push({id:a,name:t[a].name,template:t[a].template,fields:t[a].fields,priority:t[a].priority??50})});const i=s.map(a=>new y(a));this.detailsStore.properties=i.reduce((a,l)=>(a[l.id]=l,a),{}),this._validateItems()}_loadDetailsConfig(e){if(e&&this.detailsStore.properties[e.id]===void 0){const i=this.getLayerFixtureConfigs()[e.id];i&&this.detailsStore.addConfigProperty({id:e.id,name:i.name,template:i.template,fields:i.fields,priority:i.priority??50})}}_validateItems(){Object.values(this.detailsStore.properties).forEach(e=>{e.template in this.$vApp.$options.components&&(this.detailsStore.properties[e.id].componentId=e.template)})}async hilightDetailsItems(e,t){const s=e instanceof Array?e:[e],i=this.$iApi.fixture.get("hilight");if(i){const a=await i.getGraphicsByKey(r);await i.removeHilight(a);const l=Date.now();this.detailsStore.lastHilight=l;const o=await this.getHilightGraphics(s,t);this.detailsStore.lastHilight===l&&(await i.addHilight(o),this.detailsStore.lastHilight!==l&&i.removeHilight(o))}}async removeDetailsHilight(){const e=this.$iApi.fixture.get("hilight");if(e){this.detailsStore.lastHilight=Date.now();const t=await e.getGraphicsByKey(r);await e.removeHilight(t)}}async reloadDetailsHilight(e,t){const s=e instanceof Array?e:[e],i=this.$iApi.fixture.get("hilight");if(i){const a=await this.getHilightGraphics(s,t);i.reloadHilight(a)}}async getHilightGraphics(e,t){const s=this.$iApi.geo.layer.getLayer(t),i=this.$iApi.fixture.get("hilight"),a=[];return s&&await Promise.all(e.map(async l=>{await l.loading;const o=l.data[s.oidField],n=await s.getGraphic(o,{getGeom:!0,getAttribs:!0,getStyle:!0});n.id=i.constructGraphicKey(r,t,o),a.push(n)})),a}onHilightToggle(e,t,s){this.detailsStore.hilightToggle=e,e&&t&&s?this.hilightDetailsItems(t,s):e||this.removeDetailsHilight()}hasHilighter(){const e=this.$iApi.fixture.get("hilight");return e&&e.hilightMode.mode!==f.NONE}}const A={en:{"details.layers.title.identifyOrigin":"Identify Details","details.layers.title.gridOrigin":"Details","details.layers.found":"Found {numResults} results in {numLayers} layers","details.layers.loading":"The layer is loading...","details.layers.error":"Error","details.layers.results.empty":"No results found for any layer.","details.layers.results.empty.currentLayer":"No results found for the selected layer.","details.layers.results.empty.noLayers":"No layers for identification.","details.layers.results.list.tooltip":"Use the arrow keys to navigate the items","details.result.default.name":"Identify Item {0}","details.loading":"Loading...","details.items.title":"Details","details.items.range":"{0} - {1} of {2}","details.items.next":"Next page","details.items.previous":"Previous page","details.items.page":"Items per page","details.item.see.list":"See List","details.item.zoom":"Zoom to feature","details.item.zoom.zooming":"Zooming...","details.item.zoom.error":"Zoom failed","details.item.zoom.zoomed":"Zoomed","details.item.previous.item":"Previous item","details.item.next.item":"Next item","details.item.count":"{0} of {1}","details.item.loading":"Loading results...","details.item.no.data":"No data to show because the layer has been removed","details.item.alert.zoom":"Zoomed into feature","details.item.alert.show.item":"Showing result {itemName}","details.item.alert.show.list":"Showing all results for {layerName}","details.item.alert.defaultAltText":"Image associated with {alias} field","details.togglehilight.title":"Toggle Highlight","details.item.open":"Expand","details.item.collapse":"Collapse"},fr:{"details.layers.title.identifyOrigin":"Identifier les détails","details.layers.title.gridOrigin":"Détails","details.layers.found":"{numResults} résultats trouvés dans {numLayers} couches","details.layers.loading":"La couche est en cours de chargement...","details.layers.error":"Erreur","details.layers.results.empty":"Aucun résultat trouvé pour aucune couche.","details.layers.results.empty.currentLayer":"Aucun résultat trouvé pour la couche sélectionnée.","details.layers.results.empty.noLayers":"Pas de couches pour l'identification.","details.layers.results.list.tooltip":"Utilisez les touches fléchées pour naviguer entre les éléments","details.result.default.name":"Désigner l'élément {0}","details.loading":"Chargement en cours...","details.items.title":"Détails","details.items.range":"{0} - {1} de {2}","details.items.next":"Page suivante","details.items.previous":"Page précédente","details.items.page":"éléments par page","details.item.see.list":"Voir la liste","details.item.zoom":"Zoom à l'élément","details.item.zoom.zooming":"Zoom en cours...","details.item.zoom.error":"Échec du zoom","details.item.zoom.zoomed":"Zoom terminé","details.item.previous.item":"Élément précédent","details.item.next.item":"Élément suivant","details.item.count":"{0} de {1}","details.item.loading":"Chargement des résultats...","details.item.no.data":"Aucune donnée à afficher","details.item.alert.zoom":"Zoom sur la caractéristique","details.item.alert.show.item":"Affichage du résultat {itemName}","details.item.alert.show.list":"Affichage de tous les résultats pour {layerName}","details.item.alert.defaultAltText":"Image associée au champ {alias}","details.togglehilight.title":"Basculer vers l'élément principal","details.item.open":"Développer","details.item.collapse":"Réduire"}};class x extends v{async added(){this.$iApi.panel.register({details:{screens:{"details-screen":()=>u(m(()=>import("./details-screen-ChfbiEbw.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url))},style:{width:"425px"},button:{tooltip:"details.layers.title.identifyOrigin",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>'},alertName:"details.items.title"}},{i18n:{messages:A}}),this._parseConfig(this.config);const e=this.$vApp.$watch(()=>this.config,t=>this._parseConfig(t));this.removed=()=>{e(),this.$iApi.panel.remove("details"),this.$iApi.fixture.exists("appbar")&&c(this.$vApp.$pinia).removeButton("details"),h(this.$vApp.$pinia).$reset()}}}export{x as default};
