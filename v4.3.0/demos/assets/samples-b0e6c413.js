import{_ as t}from"./preload-helper-388ac9d5.js";const p=(e,i)=>{const r=e[i];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((l,m)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(m.bind(null,new Error("Unknown variable dynamic import: "+i)))})};var s="sample",_=new URL(window.location.href);document.getElementById("selectConfig").addEventListener("change",a);u();async function o(e){await p(Object.assign({"./starter-scripts/alternate.js":()=>t(()=>import("./alternate-3e40b1f3.js"),[],import.meta.url),"./starter-scripts/basemap-only.js":()=>t(()=>import("./basemap-only-5f04eea7.js"),["./basemap-only-5f04eea7.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/basemaps.js":()=>t(()=>import("./basemaps-65f79b69.js"),["./basemaps-65f79b69.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/cam.js":()=>t(()=>import("./cam-ce0cf614.js"),["./cam-ce0cf614.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/cccs.js":()=>t(()=>import("./cccs-9591c26d.js"),["./cccs-9591c26d.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/cesi.js":()=>t(()=>import("./cesi-5e788002.js"),["./cesi-5e788002.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/cumulative-effects.js":()=>t(()=>import("./cumulative-effects-58534de6.js"),["./cumulative-effects-58534de6.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/custom-appbar-button.js":()=>t(()=>import("./custom-appbar-button-d991e95e.js"),["./custom-appbar-button-d991e95e.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/custom-arrow.js":()=>t(()=>import("./custom-arrow-b8df7a5d.js"),["./custom-arrow-b8df7a5d.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/custom-grid-buttons.js":()=>t(()=>import("./custom-grid-buttons-9ab01a81.js"),["./custom-grid-buttons-9ab01a81.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/custom-overviewmap.js":()=>t(()=>import("./custom-overviewmap-f8b61637.js"),["./custom-overviewmap-f8b61637.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/custom-renderer.js":()=>t(()=>import("./custom-renderer-e4419e5f.js"),["./custom-renderer-e4419e5f.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/custom-store.js":()=>t(()=>import("./custom-store-360179f8.js"),["./custom-store-360179f8.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css","./custom-store-a90dcc2b.css"],import.meta.url),"./starter-scripts/custom-symbology.js":()=>t(()=>import("./custom-symbology-6116e87c.js"),["./custom-symbology-6116e87c.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/delayed-start.js":()=>t(()=>import("./delayed-start-993be6b5.js"),["./delayed-start-993be6b5.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/disabled-options.js":()=>t(()=>import("./disabled-options-d202c03a.js"),["./disabled-options-d202c03a.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/error-layers.js":()=>t(()=>import("./error-layers-81495799.js"),["./error-layers-81495799.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/exclusive-fields.js":()=>t(()=>import("./exclusive-fields-14294689.js"),["./exclusive-fields-14294689.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/fog-hilight.js":()=>t(()=>import("./fog-hilight-6d500dbd.js"),["./fog-hilight-6d500dbd.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/form.js":()=>t(()=>import("./form-cfe1eaf7.js"),["./form-cfe1eaf7.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/geosearch-filtered.js":()=>t(()=>import("./geosearch-filtered-cd83c2ca.js"),["./geosearch-filtered-cd83c2ca.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/geosearch.js":()=>t(()=>import("./geosearch-00488f3e.js"),["./geosearch-00488f3e.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/grid-config.js":()=>t(()=>import("./grid-config-7f87fcf9.js"),["./grid-config-7f87fcf9.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/grid-custom-template.js":()=>t(()=>import("./grid-custom-template-a3895eee.js"),["./grid-custom-template-a3895eee.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/grid.js":()=>t(()=>import("./grid-30f9003e.js"),["./grid-30f9003e.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/help.js":()=>t(()=>import("./help-6189342e.js"),["./help-6189342e.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/info-section.js":()=>t(()=>import("./info-section-4d473dd0.js"),["./info-section-4d473dd0.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/lambert.js":()=>t(()=>import("./lambert-e2f68963.js"),["./lambert-e2f68963.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/layer-metadata.js":()=>t(()=>import("./layer-metadata-dd3d704c.js"),["./layer-metadata-dd3d704c.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/legend.js":()=>t(()=>import("./legend-b7db576a.js"),["./legend-b7db576a.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/main.js":()=>t(()=>import("./main-4ca6f653.js"),["./main-4ca6f653.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/map-image-layer.js":()=>t(()=>import("./map-image-layer-e069ed69.js"),["./map-image-layer-e069ed69.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/mapnav.js":()=>t(()=>import("./mapnav-373e5c60.js"),["./mapnav-373e5c60.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/merge-grid.js":()=>t(()=>import("./merge-grid-be19b8fd.js"),["./merge-grid-be19b8fd.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/multi-ramp.js":()=>t(()=>import("./multi-ramp-c6d4d5f1.js"),["./multi-ramp-c6d4d5f1.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/offscale-layer.js":()=>t(()=>import("./offscale-layer-ac9c2709.js"),["./offscale-layer-ac9c2709.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/old-main.js":()=>t(()=>import("./old-main-4351497d.js"),["./old-main-4351497d.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/panel-party.js":()=>t(()=>import("./panel-party-62d5109a.js"),["./panel-party-62d5109a.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/perm-filter.js":()=>t(()=>import("./perm-filter-95846d2e.js"),["./perm-filter-95846d2e.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/r2-config-upgraded.js":()=>t(()=>import("./r2-config-upgraded-1a8130ad.js"),["./r2-config-upgraded-1a8130ad.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/ramp-basic.js":()=>t(()=>import("./ramp-basic-ca479328.js"),["./ramp-basic-ca479328.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/section-item.js":()=>t(()=>import("./section-item-b0644773.js"),["./section-item-b0644773.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/simple-data.js":()=>t(()=>import("./simple-data-29f4987d.js"),["./simple-data-29f4987d.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/simple-feature.js":()=>t(()=>import("./simple-feature-f442b3fe.js"),["./simple-feature-f442b3fe.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/simple-file.js":()=>t(()=>import("./simple-file-2f51489a.js"),["./simple-file-2f51489a.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/simple-mil.js":()=>t(()=>import("./simple-mil-6b386750.js"),["./simple-mil-6b386750.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/teleport-wet.js":()=>t(()=>import("./teleport-wet-e058a445.js"),["./teleport-wet-e058a445.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/teleport.js":()=>t(()=>import("./teleport-e6e30113.js"),["./teleport-e6e30113.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/tree-grow.js":()=>t(()=>import("./tree-grow-7c825880.js"),["./tree-grow-7c825880.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/wet.js":()=>t(()=>import("./wet-9adeb4cc.js"),["./wet-9adeb4cc.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url),"./starter-scripts/wms-layer.js":()=>t(()=>import("./wms-layer-d716cb51.js"),["./wms-layer-d716cb51.js","./main-46bfe858.js","./preload-helper-388ac9d5.js","./main-7b5970fe.css"],import.meta.url)}),`./starter-scripts/${e}.js`)}function a(e){_.searchParams.set(s,document.getElementById("selectConfig").selectedIndex+1),window.location.href=_}function u(){var e=new URLSearchParams(_.search),i=e.get(s)-1,r=document.getElementById("selectConfig");e.has(s)&&i>=1&&r.item(i)?(r.options[i].selected="selected",o(r.options[i].value)):o(r.options[0].value)}
