import { g as geo, c as createInstance } from './main-ba570a3b.js';
import './preload-helper-a4975f27.js';

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
            fixtures: {
                appbar: {
                    items: [
                        {
                            id: 'random-number',
                            componentId: 'random-number-button'
                        }
                    ]
                }
            }
        }
    },
    startingFixtures: ['appbar']
};

let options = {
    loadDefaultFixtures: false,
    loadDefaultEvents: true,
    startRequired: false
};

const rInstance = createInstance(
    document.getElementById('app'),
    config,
    options
);

window.debugInstance = rInstance;

// create custom appbar button
rInstance.$element.component('random-number-button', {
    props: [`options`],
    template: `<appbar-button :onClickFunction="onClick" tooltip="Click for random number!">
                    <span :style="{ color: color }">{{ number }}</span>
                </appbar-button>`,
    data() {
        return {
            number: this.options?.initial ?? 1,
            color: '#BDBDBD'
        };
    },
    methods: {
        onClick() {
            this.number = Math.floor(Math.random() * 100000) + 1;
            this.color =
                '#' +
                Math.floor(Math.random() * 16777215)
                    .toString(16)
                    .padStart(6, '0');
        }
    }
});
