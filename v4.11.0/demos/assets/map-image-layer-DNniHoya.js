import{g as l,d as t}from"./main-7nqzKo04.js";import"./preload-helper-ExcqyqRp.js";window.debugInstance=null;let r={configs:{en:{map:{extentSets:[{id:"EXT_ESRI_World_AuxMerc_3857",default:{xmax:-5007771626060756e-9,xmin:-16632697354854e-6,ymax:10015875184845109e-9,ymin:5022907964742964e-9,spatialReference:{wkid:102100,latestWkid:3857}}}],lodSets:[{id:"LOD_ESRI_World_AuxMerc_3857",lods:l.defaultLODs(l.defaultTileSchemas()[1])}],tileSchemas:[{id:"DEFAULT_ESRI_World_AuxMerc_3857",name:"Web Mercator Maps",extentSetId:"EXT_ESRI_World_AuxMerc_3857",lodSetId:"LOD_ESRI_World_AuxMerc_3857",thumbnailTileUrls:["/tile/8/91/74","/tile/8/91/75"]}],basemaps:[{id:"esriImagery",tileSchemaId:"DEFAULT_ESRI_World_AuxMerc_3857",layers:[{layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"}]}],initialBasemapId:"esriImagery"},layers:[{id:"AirEmissions",layerType:"esri-map-image",url:"https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer",sublayers:[{index:9,state:{opacity:1,visibility:!0},fixtures:{legend:{toggleSymbology:!1}}},{index:18,state:{opacity:1,visibility:!0},fixtures:{legend:{toggleSymbology:!1}}}],state:{opacity:1,visibility:!0},customRenderer:{}},{id:"MarineWaterQuality",layerType:"esri-map-image",url:"https://maps-cartes.ec.gc.ca/arcgis/rest/services/Shellfish_Sites_Samples_Mollusques_Echantillons/MapServer/",sublayers:[{index:3},{index:4},{index:5}],state:{opacity:1,visibility:!1},customRenderer:{}},{id:"userOSM",layerType:"osm-tile"}],fixtures:{legend:{root:{children:[{name:"Air emissions",children:[{layerId:"AirEmissions",name:"Carbon monoxide emissions by facility",sublayerIndex:9},{layerId:"AirEmissions",name:"Sulphur oxide emissions by facility",sublayerIndex:18}]},{name:"Marine water quality (invisible)",children:[{layerId:"MarineWaterQuality",name:"Samples in British Columbia",sublayerIndex:3},{layerId:"MarineWaterQuality",name:"Samples in New Brunswick",sublayerIndex:4},{layerId:"MarineWaterQuality",name:"Samples in Newfoundland and Labrador",sublayerIndex:5}]},{layerId:"userOSM",name:"Open Street Map"}]}},appbar:{items:["legend"]},mapnav:{items:["fullscreen","legend","home","basemap"]},details:{templates:{esri:"Details-Default-Template-Esri"}}}}}},n={loadDefaultFixtures:!1,loadDefaultEvents:!0};const i=t(document.getElementById("app"),r,n);i.fixture.addDefaultFixtures(["mapnav","legend","appbar","grid","details"]).then(()=>{i.panel.open("legend")});i.$element.component("Details-Default-Template-Esri",{props:["identifyData","fields"],template:`
        <div>
            <div
                class="p-5 pl-3 flex justify-end flex-wrap even:bg-green-100 border-2 border-black"
                v-for="(val, name, itemIdx) in itemData()"
                :key="itemIdx"
            >
                <span class="inline font-bold">{{ val.alias }}</span>
                <span class="flex-auto"></span>
                <span class="inline" v-html="val.value"></span>
            </div>
        </div>
    `,methods:{itemData(){const a={};Object.assign(a,this.identifyData.data),a.Symbol!==void 0&&delete a.Symbol;let s={};return this.fields.forEach(e=>{s[e.name]=e.alias||e.name}),Object.keys(a).map(e=>{a[e]={value:typeof a[e]=="number"?this.$iApi.$i18n.n(a[e],"number"):a[e],alias:s[e]||e}}),a}}});window.debugInstance=i;
