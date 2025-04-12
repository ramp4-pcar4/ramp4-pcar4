import{g as a,c as r}from"./main.efb50b2c.js";import"./preload-helper.387dac8f.js";window.debugInstance=null;let t={configs:{en:{map:{extentSets:[{id:"EXT_ESRI_World_AuxMerc_3857",default:{xmax:-5007771626060756e-9,xmin:-16632697354854e-6,ymax:10015875184845109e-9,ymin:5022907964742964e-9,spatialReference:{wkid:102100,latestWkid:3857}}}],caption:{mapCoords:{formatter:"WEB_MERCATOR"},scaleBar:{imperialScale:!0}},mapMouseThrottle:200,lodSets:[{id:"LOD_ESRI_World_AuxMerc_3857",lods:a.defaultLODs(a.defaultTileSchemas()[1])}],tileSchemas:[{id:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857",name:"Web Mercator Maps",extentSetId:"EXT_ESRI_World_AuxMerc_3857",lodSetId:"LOD_ESRI_World_AuxMerc_3857",thumbnailTileUrls:["/tile/8/91/74","/tile/8/91/75"]}],basemaps:[{id:"baseEsriWorld",name:"World Imagery",description:"World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.",altText:"World Imagery",layers:[{id:"World_Imagery",layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"}],tileSchemaId:"EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857",attribution:{text:{disabled:!0},logo:{disabled:!0}}}],initialBasemapId:"baseEsriWorld"},layers:[{id:"ecogeo-nature",name:"Nature",layerType:"esri-feature",url:"https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/EcoAction/MapServer/6"},{id:"ecogeo-climate-change",name:"Climate Change",layerType:"esri-feature",url:"https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/EcoAction/MapServer/7"},{id:"ecogeo-clean-water",name:"Water",layerType:"esri-feature",url:"https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/EcoAction/MapServer/8"},{id:"ecogeo-clean-air",name:"Air",layerType:"esri-feature",url:"https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/EcoAction/MapServer/9"},{id:"e1",name:"Carbon monoxide emissions",layerType:"esri-feature",url:"https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer/9"},{id:"e2",name:"Greenhouse gas emissions",layerType:"esri-feature",url:"https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer/10"}],fixtures:{legend:{root:{children:[{name:"Regular section",children:[{layerId:"ecogeo-nature"}]},{name:"Exclusive section",exclusive:!0,children:[{layerId:"ecogeo-climate-change"},{layerId:"ecogeo-clean-water"}]},{name:"Collapsed section",expanded:!1,children:[{layerId:"ecogeo-clean-air"}]},{name:"No controls section",controls:[],children:[{layerId:"e1"}]},{name:"Hidden section",hidden:!0,children:[]},{name:"Info section",infoType:"title",content:"Info section",children:[{layerId:"e2"}]}]}},details:{panelWidth:{default:350,"details-items":400}}},panels:{open:[{id:"legend"}]},system:{animate:!0}}}},i={loadDefaultFixtures:!0,loadDefaultEvents:!0,startRequired:!1};const e=r(document.getElementById("app"),t,i);e.$element.component("WFSLayer-Custom",{props:["identifyData"],template:`
        <div>
            <span>This is an example template that contains an image.</span>
            <img src="https://i.imgur.com/WtY0tdC.gif" />
        </div>
    `});e.start();window.debugInstance=e;
