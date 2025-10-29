import { z as geo, A as createInstance } from './main-CjrSZKDN.js';
import './preload-helper-dJJaZANz.js';

window.debugInstance = null;

let config = {
    configs: {
        en: {
            map: {
                extentSets: [
                    {
                        id: 'EXT_ESRI_World_AuxMerc_3857',
                        default: {
                            xmax: -5007771.626060756,
                            xmin: -16632697.354854,
                            ymax: 10015875.184845109,
                            ymin: 5022907.964742964,
                            spatialReference: {
                                wkid: 102100,
                                latestWkid: 3857
                            }
                        }
                    }
                ],
                lodSets: [
                    {
                        id: 'LOD_ESRI_World_AuxMerc_3857',
                        lods: geo.defaultLODs(geo.defaultTileSchemas()[1])
                    }
                ],
                tileSchemas: [
                    {
                        id: 'DEFAULT_ESRI_World_AuxMerc_3857',
                        name: 'Web Mercator Maps',
                        extentSetId: 'EXT_ESRI_World_AuxMerc_3857',
                        lodSetId: 'LOD_ESRI_World_AuxMerc_3857',
                        thumbnailTileUrls: ['/tile/8/91/74', '/tile/8/91/75']
                    }
                ],
                basemaps: [
                    {
                        id: 'esriImagery',
                        tileSchemaId: 'DEFAULT_ESRI_World_AuxMerc_3857',
                        layers: [
                            {
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                            }
                        ]
                    }
                ],
                initialBasemapId: 'esriImagery'
            },
            layers: [
                {
                    id: 'WFSLayer',
                    layerType: 'ogc-wfs',
                    url: 'https://api.weather.gc.ca/collections/hydrometric-stations/items?offset=6000',
                    xyInAttribs: true,
                    colour: '#FF5555',
                    customRenderer: {},
                    fixtures: {
                        grid: {
                            title: 'Datatable for WFS features',
                            columns: [
                                {
                                    field: 'links',
                                    title: 'Links',
                                    width: 600,
                                    template: 'links-template'
                                },
                                {
                                    field: 'STATION_NAME',
                                    title: 'Station Name',
                                    template: 'station-name-template'
                                }
                            ]
                        }
                    }
                }
            ],
            fixtures: {
                legend: {
                    root: {
                        children: [
                            {
                                layerId: 'WFSLayer',
                                name: 'WFSLayer'
                            },
                            {
                                infoType: 'text',
                                content:
                                    "The above layer's grid has custom templating for the links and station name columns."
                            }
                        ]
                    }
                },
                appbar: {
                    items: ['legend']
                },
                mapnav: { items: ['fullscreen', 'legend', 'home', 'basemap'] }
            },
            system: {
                exposeOid: true
            }
        }
    }
};

let options = {
    loadDefaultFixtures: false,
    loadDefaultEvents: true
};

const rInstance = createInstance(document.getElementById('app'), config, options);
rInstance.fixture.addDefaultFixtures(['mapnav', 'legend', 'appbar', 'grid', 'details', 'wizard']).then(() => {
    rInstance.panel.open('legend');
});

rInstance.$element.component('links-template', {
    props: ['params'],
    mounted() {},
    template: `<div class="my-4" v-focus-list >
        <p v-for="(val, idx) in JSON.parse(params.value)" :key="idx" class="whitespace-pre-wrap leading-none mb-8">
            <a v-focus-item target="_blank" :href="val.href">{{ val.title }}</a>
        </p>
    </div>`
});

rInstance.$element.component('station-name-template', {
    props: ['params'],
    template: `
        <div class="mb-8">
            <span>Surprise!</span>
            <img src="https://i.imgur.com/WtY0tdC.gif" />
        </div>
    `
});

window.debugInstance = rInstance;
