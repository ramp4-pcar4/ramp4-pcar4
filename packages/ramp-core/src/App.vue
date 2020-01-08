<template>
  <div id="app">
    <div id="mapDiv"></div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GapiLoader, { Map, GeoApi, RampMapConfig } from 'ramp-geoapi';

@Component({})
export default class App extends Vue {
    created(): void {
        console.log(GapiLoader);
        const gapiPromise: Promise<GeoApi> = GapiLoader('https://js.arcgis.com/4.14', window);

        gapiPromise.then((gapi: GeoApi) => {
            console.log('GeoAPI Loaded', gapi);

            const esriMapConfig: RampMapConfig = {

                extent: {
                    xmax: -5007771.626060756,
                    xmin: -16632697.354854,
                    ymax: 10015875.184845109,
                    ymin: 5022907.964742964,

                    spatialReference: {
                        wkid: 102100,
                        latestWkid: 3857
                  }
                },
                lods: gapi.maps.defaultLODs(gapi.maps.defaultTileSchemas()[1]), // idx 1 = mercator
                basemaps: [{
                    id: 'esriImagery',
                    tileSchemaId: 'DEFAULT_ESRI_World_AuxMerc_3857',
                    layers: [{
                        layerType: 'esriTile',
                        url: 'http://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                  }]
                }],
                initialBasemapId: 'esriImagery'
            };

            const map: Map = gapi.maps.createMap(esriMapConfig, 'mapDiv');
        });
    }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#mapDiv {
    padding: 20px;
    margin: 20px;
    height: 400px;
    width: 400px;
}
</style>
