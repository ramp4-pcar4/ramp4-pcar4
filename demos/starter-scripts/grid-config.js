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
                    id: 'WFSLayer',
                    layerType: 'ogc-wfs',
                    url: 'https://api.weather.gc.ca//collections/ahccd-trends/items?measurement_type__type_mesure=total_precip&period__periode=Ann&offset=0&limit=1000&province__province=on',
                    xyInAttribs: true,
                    colour: '#FF5555',
                    state: {
                        visibility: true
                    },
                    customRenderer: {},
                    fixtures: {
                        grid: {
                            title: 'Datatable for WFS features',
                            columnMetadata: {
                                exclusiveColumns: true
                            },
                            columns: [
                                {
                                    field: 'station_id__id_station',
                                    title: 'Station ID',
                                    width: 600,
                                    filter: {
                                        type: 'number',
                                        value: 6020384
                                    }
                                },
                                {
                                    field: 'OBJECTID',
                                    title: 'Object ID',
                                    filter: {
                                        type: 'number',
                                        min: 3,
                                        max: 20,
                                        static: true
                                    }
                                },
                                {
                                    field: 'identifier__identifiant',
                                    visible: false
                                }
                            ]
                        }
                    }
                },
                {
                    id: 'TimeParty',
                    layerType: 'esri-feature',
                    fixtures: {
                        grid: {
                            columns: [
                                {
                                    field: 'ItIsPartyTime',
                                    filter: {
                                        type: 'date',
                                        min: '2005-02-22'
                                    },
                                    sort: 'asc'
                                },
                                {
                                    field: 'MyName',
                                    filter: {
                                        type: 'selector'
                                    }
                                },
                                {
                                    field: 'OBJECTID',
                                    filter: {
                                        type: 'number',
                                        max: 2
                                    }
                                }
                            ]
                        }
                    },
                    url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/TimeParty/MapServer/0'
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
                                layerId: 'TimeParty',
                                name: 'TimeParty'
                            }
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
