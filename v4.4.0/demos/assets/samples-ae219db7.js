import{_ as t}from"./preload-helper-388ac9d5.js";const p=(e,i)=>{const r=e[i];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((l,m)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(m.bind(null,new Error("Unknown variable dynamic import: "+i)))})};var s="sample",_=new URL(window.location.href);document.getElementById("selectConfig").addEventListener("change",a);u();async function o(e){await p(Object.assign({"./starter-scripts/alternate.js":()=>t(()=>import("./alternate-3e40b1f3.js"),[],import.meta.url),"./starter-scripts/basemap-fail.js":()=>t(()=>import("./basemap-fail-422271eb.js"),["./basemap-fail-422271eb.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/basemap-only.js":()=>t(()=>import("./basemap-only-52bc93aa.js"),["./basemap-only-52bc93aa.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/basemaps.js":()=>t(()=>import("./basemaps-06993432.js"),["./basemaps-06993432.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/cam.js":()=>t(()=>import("./cam-96807073.js"),["./cam-96807073.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/cccs.js":()=>t(()=>import("./cccs-d87f37a1.js"),["./cccs-d87f37a1.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/cesi.js":()=>t(()=>import("./cesi-6c599285.js"),["./cesi-6c599285.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/cumulative-effects.js":()=>t(()=>import("./cumulative-effects-1e1f2dc6.js"),["./cumulative-effects-1e1f2dc6.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/custom-appbar-button.js":()=>t(()=>import("./custom-appbar-button-26b90213.js"),["./custom-appbar-button-26b90213.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/custom-arrow.js":()=>t(()=>import("./custom-arrow-7fe7ffb8.js"),["./custom-arrow-7fe7ffb8.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/custom-grid-buttons.js":()=>t(()=>import("./custom-grid-buttons-8443ceec.js"),["./custom-grid-buttons-8443ceec.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/custom-overviewmap.js":()=>t(()=>import("./custom-overviewmap-294ed853.js"),["./custom-overviewmap-294ed853.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/custom-renderer.js":()=>t(()=>import("./custom-renderer-a9d665d9.js"),["./custom-renderer-a9d665d9.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/custom-store.js":()=>t(()=>import("./custom-store-b0c8352e.js"),["./custom-store-b0c8352e.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css","./custom-store-a90dcc2b.css"],import.meta.url),"./starter-scripts/custom-symbology.js":()=>t(()=>import("./custom-symbology-593af3d4.js"),["./custom-symbology-593af3d4.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/delayed-start.js":()=>t(()=>import("./delayed-start-b4614974.js"),["./delayed-start-b4614974.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/disabled-options.js":()=>t(()=>import("./disabled-options-aa8429a4.js"),["./disabled-options-aa8429a4.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/error-layers.js":()=>t(()=>import("./error-layers-4aa44983.js"),["./error-layers-4aa44983.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/exclusive-fields.js":()=>t(()=>import("./exclusive-fields-63928e9b.js"),["./exclusive-fields-63928e9b.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/fog-hilight.js":()=>t(()=>import("./fog-hilight-6d0a3f27.js"),["./fog-hilight-6d0a3f27.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/form.js":()=>t(()=>import("./form-64559f2e.js"),["./form-64559f2e.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/geosearch-filtered.js":()=>t(()=>import("./geosearch-filtered-9083ecaf.js"),["./geosearch-filtered-9083ecaf.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/geosearch.js":()=>t(()=>import("./geosearch-6d056fbe.js"),["./geosearch-6d056fbe.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/grid-config.js":()=>t(()=>import("./grid-config-2a7dd6cb.js"),["./grid-config-2a7dd6cb.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/grid-custom-template.js":()=>t(()=>import("./grid-custom-template-1cf93f5e.js"),["./grid-custom-template-1cf93f5e.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/grid.js":()=>t(()=>import("./grid-d6d67347.js"),["./grid-d6d67347.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/help.js":()=>t(()=>import("./help-c2f4412f.js"),["./help-c2f4412f.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/info-section.js":()=>t(()=>import("./info-section-8c7f38e6.js"),["./info-section-8c7f38e6.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/lambert.js":()=>t(()=>import("./lambert-69bb1d97.js"),["./lambert-69bb1d97.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/layer-metadata.js":()=>t(()=>import("./layer-metadata-d29e6893.js"),["./layer-metadata-d29e6893.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/legend.js":()=>t(()=>import("./legend-e28cdbef.js"),["./legend-e28cdbef.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/main.js":()=>t(()=>import("./main-c4d66250.js"),["./main-c4d66250.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/map-image-layer.js":()=>t(()=>import("./map-image-layer-eeccab15.js"),["./map-image-layer-eeccab15.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/mapnav.js":()=>t(()=>import("./mapnav-67a1b03e.js"),["./mapnav-67a1b03e.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/merge-grid.js":()=>t(()=>import("./merge-grid-62ff425e.js"),["./merge-grid-62ff425e.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/multi-instances.js":()=>t(()=>import("./multi-instances-1e567e61.js"),["./multi-instances-1e567e61.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/multi-ramp.js":()=>t(()=>import("./multi-ramp-cb5a7ef9.js"),["./multi-ramp-cb5a7ef9.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/offscale-layer.js":()=>t(()=>import("./offscale-layer-26b1b799.js"),["./offscale-layer-26b1b799.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/old-main.js":()=>t(()=>import("./old-main-e14b5f5c.js"),["./old-main-e14b5f5c.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/panel-party.js":()=>t(()=>import("./panel-party-ea0e26f3.js"),["./panel-party-ea0e26f3.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/perm-filter.js":()=>t(()=>import("./perm-filter-e4b69ef5.js"),["./perm-filter-e4b69ef5.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/r2-config-upgraded.js":()=>t(()=>import("./r2-config-upgraded-b30fe2a3.js"),["./r2-config-upgraded-b30fe2a3.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/ramp-basic.js":()=>t(()=>import("./ramp-basic-6f469504.js"),["./ramp-basic-6f469504.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/section-item.js":()=>t(()=>import("./section-item-abfc9b47.js"),["./section-item-abfc9b47.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/simple-data.js":()=>t(()=>import("./simple-data-acf3716a.js"),["./simple-data-acf3716a.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/simple-feature.js":()=>t(()=>import("./simple-feature-67b51e8f.js"),["./simple-feature-67b51e8f.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/simple-file.js":()=>t(()=>import("./simple-file-d6a3fd03.js"),["./simple-file-d6a3fd03.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/simple-mil.js":()=>t(()=>import("./simple-mil-17b07e65.js"),["./simple-mil-17b07e65.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/teleport-wet.js":()=>t(()=>import("./teleport-wet-91a9f889.js"),["./teleport-wet-91a9f889.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/teleport.js":()=>t(()=>import("./teleport-c8e62f1f.js"),["./teleport-c8e62f1f.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/tree-grow.js":()=>t(()=>import("./tree-grow-6b7a768b.js"),["./tree-grow-6b7a768b.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/wet.js":()=>t(()=>import("./wet-ccde2e06.js"),["./wet-ccde2e06.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url),"./starter-scripts/wms-layer.js":()=>t(()=>import("./wms-layer-34e606d2.js"),["./wms-layer-34e606d2.js","./main-8eb577c9.js","./preload-helper-388ac9d5.js","./main-7e4e971a.css"],import.meta.url)}),`./starter-scripts/${e}.js`)}function a(e){_.searchParams.set(s,document.getElementById("selectConfig").selectedIndex+1),window.location.href=_}function u(){var e=new URLSearchParams(_.search),i=e.get(s)-1,r=document.getElementById("selectConfig");e.has(s)&&i>=1&&r.item(i)?(r.options[i].selected="selected",o(r.options[i].value)):o(r.options[0].value)}
