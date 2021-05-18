export class BasemapState {
    tileSchemas: Array<TileSchema>;
    basemaps: Array<Basemap>;
    selectedBasemap: Basemap;
    constructor() {
        // TODO: replace hardcoded basemap data (stored in config?)
        this.tileSchemas = [
            {
                id: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                name: 'Lambert Maps',
                extentSetId: 'EXT_NRCAN_Lambert_3978',
                lodSetId: 'LOD_NRCAN_Lambert_3978',
                hasNorthPole: true
            },
            {
                id: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                name: 'Web Mercator Maps',
                extentSetId: 'EXT_ESRI_World_AuxMerc_3857',
                lodSetId: 'LOD_ESRI_World_AuxMerc_3857'
            }
        ];
        this.basemaps = [
            {
                id: 'baseNrCan',
                name: 'Canada Base Map - Transportation (CBMT)',
                description:
                    'The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.',
                altText:
                    'altText - The Canada Base Map - Transportation (CBMT)',
                layers: [
                    {
                        id: 'CBMT',
                        layerType: 'esriFeature',
                        url:
                            'http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT3978/MapServer'
                    }
                ],
                tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                wkid: 3978
            },
            {
                id: 'baseSimple',
                name: 'Canada Base Map - Simple',
                description: 'Canada Base Map - Simple',
                altText: 'altText - Canada base map - Simple',
                layers: [
                    {
                        id: 'SMR',
                        layerType: 'esriFeature',
                        url:
                            'http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/Simple/MapServer'
                    }
                ],
                tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                wkid: 3978
            },
            {
                id: 'baseCBME_CBCE_HS_RO_3978',
                name: 'Canada Base Map - Elevation (CBME)',
                description:
                    'The Canada Base Map - Elevation (CBME) web mapping services of the Earth Sciences Sector at Natural Resources Canada, is intended primarily for online mapping application users and developers.',
                altText: 'altText - Canada Base Map - Elevation (CBME)',
                layers: [
                    {
                        id: 'CBME_CBCE_HS_RO_3978',
                        layerType: 'esriFeature',
                        url:
                            'http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer'
                    }
                ],
                tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                wkid: 3978
            },
            {
                id: 'baseCBMT_CBCT_GEOM_3978',
                name: 'Canada Base Map - Transportation (CBMT)',
                description:
                    ' The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.',
                altText: 'altText - Canada Base Map - Transportation (CBMT)',
                layers: [
                    {
                        id: 'CBMT_CBCT_GEOM_3978',
                        layerType: 'esriFeature',
                        url:
                            'http://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer'
                    }
                ],
                tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                wkid: 3978
            },
            {
                id: 'baseEsriWorld',
                name: 'World Imagery',
                description:
                    'World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.',
                altText: 'altText - World Imagery',
                layers: [
                    {
                        id: 'World_Imagery',
                        layerType: 'esriFeature',
                        url:
                            'http://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                    }
                ],
                tileSchemaId:
                    'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                wkid: 102100
            },
            {
                id: 'baseEsriPhysical',
                name: 'World Physical Map',
                description:
                    'This map presents the Natural Earth physical map at 1.24km per pixel for the world and 500m for the coterminous United States.',
                altText: 'altText - World Physical Map',
                layers: [
                    {
                        id: 'World_Physical_Map',
                        layerType: 'esriFeature',
                        url:
                            'http://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer'
                    }
                ],
                tileSchemaId:
                    'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                wkid: 102100
            },
            {
                id: 'baseEsriRelief',
                name: 'World Shaded Relief',
                description:
                    'This map portrays surface elevation as shaded relief. This map is used as a basemap layer to add shaded relief to other GIS maps, such as the ArcGIS Online World Street Map.',
                altText: 'altText - World Shaded Relief',
                layers: [
                    {
                        id: 'World_Shaded_Relief',
                        layerType: 'esriFeature',
                        url:
                            'http://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer'
                    }
                ],
                tileSchemaId:
                    'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                wkid: 102100
            },
            {
                id: 'baseEsriStreet',
                name: 'World Street Map',
                description:
                    'This worldwide street map presents highway-level data for the world.',
                altText: 'altText - ESWorld Street Map',
                layers: [
                    {
                        id: 'World_Street_Map',
                        layerType: 'esriFeature',
                        url:
                            'http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer'
                    }
                ],
                tileSchemaId:
                    'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                wkid: 102100
            },
            {
                id: 'baseEsriTerrain',
                name: 'World Terrain Base',
                description:
                    'This map is designed to be used as a base map by GIS professionals to overlay other thematic layers such as demographics or land cover.',
                altText: 'altText - World Terrain Base',
                layers: [
                    {
                        id: 'World_Terrain_Base',
                        layerType: 'esriFeature',
                        url:
                            'http://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer'
                    }
                ],
                tileSchemaId:
                    'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                wkid: 102100
            },
            {
                id: 'baseEsriTopo',
                name: 'World Topographic Map',
                description:
                    'This map is designed to be used as a basemap by GIS professionals and as a reference map by anyone.',
                altText: 'altText - World Topographic Map',
                layers: [
                    {
                        id: 'World_Topo_Map',
                        layerType: 'esriFeature',
                        url:
                            'http://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer'
                    }
                ],
                tileSchemaId:
                    'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                wkid: 102100
            }
        ];
        this.selectedBasemap = this.basemaps[4];
    }
}

interface TileSchema {
    id: string;
    name: string;
    extentSetId: string;
    lodSetId: string;
    hasNorthPole?: boolean;
}

interface Basemap {
    id: string;
    name: string;
    description: string;
    altText: string;
    layers: Array<Layer>;
    tileSchemaId: string;
    wkid: number;
    thumbnailUrl?: string;
    isSelected?: boolean;
}

interface Layer {
    id: string;
    layerType: string;
    url: string;
}
