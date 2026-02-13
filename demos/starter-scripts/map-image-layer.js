import { createInstance, geo } from '@/main';

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
                    id: 'AirEmissions',
                    layerType: 'esri-map-image',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
                    sublayers: [
                        {
                            index: 9,
                            state: {
                                opacity: 1,
                                visibility: true
                            }
                        },
                        {
                            index: 18,
                            state: {
                                opacity: 1,
                                visibility: true
                            }
                        }
                    ],
                    state: {
                        opacity: 1,
                        visibility: true
                    },
                    customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
                },
                {
                    id: 'MarineWaterQuality',
                    layerType: 'esri-map-image',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/Shellfish_Sites_Samples_Mollusques_Echantillons/MapServer/',
                    sublayers: [
                        {
                            index: 3
                        },
                        {
                            index: 4
                        },
                        {
                            index: 5
                        }
                    ],
                    state: {
                        opacity: 1,
                        visibility: false
                    },
                    customRenderer: {}
                },
                { id: 'userOSM', layerType: 'osm-tile' }
            ],
            fixtures: {
                legend: {
                    root: {
                        children: [
                            {
                                name: 'Air emissions',
                                children: [
                                    {
                                        layerId: 'AirEmissions',
                                        name: 'Carbon monoxide emissions by facility',
                                        sublayerIndex: 9
                                    },
                                    {
                                        layerId: 'AirEmissions',
                                        name: 'Sulphur oxide emissions by facility',
                                        sublayerIndex: 18
                                    }
                                ]
                            },
                            {
                                name: 'Marine water quality (invisible)',
                                children: [
                                    {
                                        layerId: 'MarineWaterQuality',
                                        name: 'Samples in British Columbia',
                                        sublayerIndex: 3
                                    },
                                    {
                                        layerId: 'MarineWaterQuality',
                                        name: 'Samples in New Brunswick',
                                        sublayerIndex: 4
                                    },
                                    {
                                        layerId: 'MarineWaterQuality',
                                        name: 'Samples in Newfoundland and Labrador',
                                        sublayerIndex: 5
                                    }
                                ]
                            },
                            { layerId: 'userOSM', name: 'Open Street Map' }
                        ]
                    }
                },
                appbar: {
                    items: ['legend']
                },
                mapnav: { items: ['fullscreen', 'legend', 'home', 'basemap'] },
                details: {
                    templates: {
                        esri: 'Details-Default-Template-Esri'
                    }
                }
            }
        }
    }
};

let options = {
    loadDefaultFixtures: false,
    loadDefaultEvents: true
};

const rInstance = createInstance(document.getElementById('app'), config, options);
rInstance.fixture.addDefaultFixtures(['mapnav', 'legend', 'appbar', 'grid', 'details']).then(() => {
    rInstance.panel.open('legend');
});

rInstance.$element.component('Details-Default-Template-Esri', {
    props: ['identifyData', 'fields'],
    template: `
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
    `,
    methods: {
        itemData() {
            const helper = {};
            Object.assign(helper, this.identifyData.data);
            if (helper.Symbol !== undefined) delete helper.Symbol;

            let aliases = {};
            this.fields.forEach(field => {
                aliases[field.name] = field.alias || field.name;
            });
            Object.keys(helper).map(key => {
                helper[key] = {
                    value: typeof helper[key] === 'number' ? this.$iApi.$i18n.n(helper[key], 'number') : helper[key],
                    alias: aliases[key] || key
                };
            });

            return helper;
        }
    }
});

window.debugInstance = rInstance;
