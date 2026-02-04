import{g as i,c as s}from"./main-CtmwM019.js";import"./preload-helper-DMGCcr4D.js";window.debugInstance=null;let d={configs:{en:{map:{extentSets:[{id:"EXT_ESRI_World_AuxMerc_3857",default:{xmax:-5007771626060756e-9,xmin:-16632697354854e-6,ymax:10015875184845109e-9,ymin:5022907964742964e-9,spatialReference:{wkid:102100,latestWkid:3857}}},{id:"EXT_NRCAN_Lambert_3978",default:{xmax:3549492,xmin:-2681457,ymax:3482193,ymin:-883440,spatialReference:{wkid:3978}}}],lodSets:[{id:"LOD_NRCAN_Lambert_3978",lods:i.defaultLODs(i.defaultTileSchemas()[0])},{id:"LOD_ESRI_World_AuxMerc_3857",lods:i.defaultLODs(i.defaultTileSchemas()[1])}],tileSchemas:[{id:"DEFAULT_NRCAN_Lambert_3978",name:"Lambert Maps",extentSetId:"EXT_NRCAN_Lambert_3978",lodSetId:"LOD_NRCAN_Lambert_3978",thumbnailTileUrls:["/tile/8/285/268","/tile/8/285/269"],hasNorthPole:!0},{id:"DEFAULT_ESRI_World_AuxMerc_3857",name:"Web Mercator Maps",extentSetId:"EXT_ESRI_World_AuxMerc_3857",lodSetId:"LOD_ESRI_World_AuxMerc_3857",thumbnailTileUrls:["/tile/8/91/74","/tile/8/91/75"]}],basemaps:[{id:"esriImagery",tileSchemaId:"DEFAULT_ESRI_World_AuxMerc_3857",layers:[{layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"}]},{id:"baseNrCan",name:"Canada Base Map - Transportation (CBMT)",description:"The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.",altText:"The Canada Base Map - Transportation (CBMT)",layers:[{id:"CBMT",layerType:"esri-tile",url:"https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT3978/MapServer"}],tileSchemaId:"DEFAULT_NRCAN_Lambert_3978"}],initialBasemapId:"esriImagery"},layers:[{id:"ahocevar",layerType:"ogc-wms",url:"https://ahocevar.com/geoserver/wms",state:{visibility:!0},sublayers:[{id:"ne:ne"}],featureInfoMimeType:"text/plain"},{id:"RailwayNetwork",layerType:"ogc-wms",url:"http://maps.geogratis.gc.ca/wms/railway_en",state:{visibility:!0},sublayers:[{id:"railway",name:"Railway"},{id:"railway.structure.line"},{id:"railway.structure.point"},{id:"railway.track"},{id:"railway.ferry"},{id:"railway.subdivision"},{id:"railway.station"},{id:"railway.marker_post"},{id:"railway.crossing"}],featureInfoMimeType:"text/html"},{id:"GeoMet",layerType:"ogc-wms",url:"http://geo.weather.gc.ca/geomet/?lang=E&service=WMS&request=GetCapabilities",state:{visibility:!0,opacity:.5},sublayers:[{id:"RDPA.24F_PR",currentStyle:"PRECIPMM"}],featureInfoMimeType:"text/plain",fixtures:{details:{template:"GeoMet-Template"}}}],fixtures:{legend:{root:{children:[{layerId:"RailwayNetwork",name:"Railways"},{layerId:"ahocevar",name:"ahocevar"},{layerId:"GeoMet",name:"Cloud Coverage"}]}},appbar:{items:["legend","layer-reorder","export"]},mapnav:{items:["fullscreen","legend","home","basemap"]},export:{title:{value:"WMS"}},details:{templates:{json:"Details-Default-Template-WMS"}}}},system:{animate:!1}}},n={loadDefaultFixtures:!1,loadDefaultEvents:!0};const t=s(document.getElementById("app"),d,n);t.$element.component("Details-Default-Template-WMS",{props:["identifyData"],template:'<div v-html="identifyData.data.data" />'});t.$element.component("GeoMet-Template",{props:["identifyData"],template:'<div v-html="createTemplate()" />',methods:{parseText(e){let r={},l=/(\w+) = '(?:"([^"]*)"|([^']*))/g;for(;l.exec(e)!==null;){let a=l.exec(e);if(a===null)break;a[2]?r[a[1]]=a[2]:r[a[1]]=a[3]}return r},createTemplate(){if(!this.identifyData)return;let e=this.parseText(this.identifyData.data.data);return`
            <div style="align-items: center; justify-content: center; font-size: .875rem; font-family: Arial, sans-serif;">
                <span style="display: flex; font-size: 1.25rem; background-color: #3182ce; color: white; padding: 4px; text-align: center;">
                    GDPS.ETA_NT - Cloud Coverage (%)
                </span>
                <div style="display: flex; flex-direction: column; font-size: .875rem; padding-top: 5px;">
                    <span style="color: #a0aec0; font-weight: bold;">
                        Coverage
                    </span>
                    <span>
                        ${e.value_0}
                    </span>
                </div>
                <div style="display: flex; flex-direction: row; color: #a0aec0; font-weight: bold; padding-top: 5px;">
                    <div style="flex: 1 1 0%; width: 100%;">
                        x
                    </div>
                    <div style="flex: 1 1 0%; width: 100%;">
                        y
                    </div>
                </div>
                <div style="display: flex; flex-direction: row;">
                    <div style="flex: 1 1 0%; width: 100%;">
                        ${e.x}
                    </div>
                    <div style="flex: 1 1 0%; width: 100%;">
                        ${e.y}
                    </div>
                </div>
            </div>
            `}}});t.fixture.addDefaultFixtures(["mapnav","legend","appbar","details","grid","wizard","export","basemap","layer-reorder"]).then(()=>{t.panel.open("legend")});window.debugInstance=t;
