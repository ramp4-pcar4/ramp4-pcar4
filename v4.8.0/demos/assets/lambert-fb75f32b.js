import { g as geo, c as createInstance } from './main-ba570a3b.js';
import './preload-helper-a4975f27.js';

window.debugInstance = null;

let config = {
    configs: {
        en: {
            map: {
                extentSets: [
                    {
                        id: 'EXT_NRCAN_Lambert_3978',
                        default: {
                            xmax: 3549492,
                            xmin: -2681457,
                            ymax: 3482193,
                            ymin: -883440,
                            spatialReference: {
                                wkid: 3978
                            }
                        }
                    }
                ],
                lodSets: [
                    {
                        id: 'LOD_NRCAN_Lambert_3978',
                        lods: geo.defaultLODs(geo.defaultTileSchemas()[0])
                    }
                ],
                tileSchemas: [
                    {
                        id: 'DEFAULT_NRCAN_Lambert_3978',
                        name: 'Lambert Maps',
                        extentSetId: 'EXT_NRCAN_Lambert_3978',
                        lodSetId: 'LOD_NRCAN_Lambert_3978',
                        thumbnailTileUrls: [
                            '/tile/8/285/268',
                            '/tile/8/285/269'
                        ],
                        hasNorthPole: true
                    }
                ],
                basemaps: [
                    {
                        id: 'CBCT',
                        tileSchemaId: 'DEFAULT_NRCAN_Lambert_3978',
                        layers: [
                            {
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBCT3978/MapServer'
                            }
                        ]
                    }
                ],
                initialBasemapId: 'CBCT'
            },
            fixtures: {
                overviewmap: {
                    basemaps: {
                        DEFAULT_NRCAN_Lambert_3978: {
                            id: 'CBCT',
                            tileSchemaId: 'DEFAULT_NRCAN_Lambert_3978',
                            layers: [
                                {
                                    layerType: 'esri-tile',
                                    url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBCT3978/MapServer'
                                }
                            ]
                        }
                    },
                    startMinimized: true
                }
            }
        }
    }
};

let options = {
    loadDefaultFixtures: false,
    loadDefaultEvents: true
};

const rInstance = createInstance(
    document.getElementById('app'),
    config,
    options
);
rInstance.fixture.addDefaultFixtures(['northarrow', 'appbar', 'overviewmap']);

window.debugInstance = rInstance;
