import{z as e,A as r}from"./main-CzbArNue.js";import"./preload-helper-ExcqyqRp.js";window.debugInstance=null;let a={configs:{en:{map:{extentSets:[{id:"EXT_ESRI_World_AuxMerc_3857",default:{xmax:-5007771626060756e-9,xmin:-16632697354854e-6,ymax:10015875184845109e-9,ymin:5022907964742964e-9,spatialReference:{wkid:102100,latestWkid:3857}}}],lodSets:[{id:"LOD_ESRI_World_AuxMerc_3857",lods:e.defaultLODs(e.defaultTileSchemas()[1])}],tileSchemas:[{id:"DEFAULT_ESRI_World_AuxMerc_3857",name:"Web Mercator Maps",extentSetId:"EXT_ESRI_World_AuxMerc_3857",lodSetId:"LOD_ESRI_World_AuxMerc_3857",thumbnailTileUrls:["/tile/8/91/74","/tile/8/91/75"]}],basemaps:[{id:"esriImagery",tileSchemaId:"DEFAULT_ESRI_World_AuxMerc_3857",layers:[{layerType:"esri-tile",url:"https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"}]}],initialBasemapId:"esriImagery"},fixtures:{appbar:{items:[{id:"random-number",componentId:"random-number-button"}]}}}},startingFixtures:["appbar"]},o={loadDefaultFixtures:!1,loadDefaultEvents:!0,startRequired:!1};const t=r(document.getElementById("app"),a,o);window.debugInstance=t;t.$element.component("random-number-button",{props:["options"],template:`<appbar-button :onClickFunction="onClick" tooltip="Click for random number!">
                    <span :style="{ color: color }">{{ number }}</span>
                </appbar-button>`,data(){return{number:this.options?.initial??1,color:"#BDBDBD"}},methods:{onClick(){this.number=Math.floor(Math.random()*1e5)+1,this.color="#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")}}});
