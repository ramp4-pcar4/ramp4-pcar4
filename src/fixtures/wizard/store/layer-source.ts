import { LayerType } from '@/geo/api';
import type { FieldDefinition, RampLayerConfig } from '@/geo/api';
import { APIScope, InstanceAPI } from '@/api/internal';
import { UrlWrapper } from '@/geo/api';
import axios from 'redaxios';

export interface LayerInfo {
    config: RampLayerConfig; // the layer's config
    configOptions: Array<string>; // the layer's config options that will be taken from user input in the UI
    fields?: Array<FieldDefinition>; // the fields for the layer
    latLonFields?: { lat: Array<string>; lon: Array<string> }; // lat and lon are a list of field names that can be possible lat/lon fields
    layers?: Array<{
        id: number;
        name: string;
        parentLayerId: number;
        defaultVisibility: boolean;
        sublayerIds?: Array<number>;
    }>; // a flattened list of info for the parent layer, sublayer groups, and sublayers. Only defined for MIL
}

export class LayerSource extends APIScope {
    layerCount = 0;

    constructor($iApi: InstanceAPI) {
        super($iApi);
    }

    /**
     * Get layer info from a file url or data
     *
     * @param {string} url a service url to load, name of file if file data is provided
     * @param {string} fileType format of the file (layer type)
     * @param {ArrayBuffer} [fileData] raw file data buffer
     * @returns {Promise<LayerInfo | undefined>} LayerInfo object
     */
    async fetchFileInfo(
        url: string,
        fileType: LayerType,
        fileData?: ArrayBuffer
    ): Promise<LayerInfo | undefined> {
        if (!fileData) {
            // if given a url, load data so we can get fields
            fileData = await this.$iApi.geo.layer.files.fetchFileData(
                url,
                fileType
            );
        }

        switch (fileType) {
            case LayerType.GEOJSON:
                return this.getGeojsonInfo(url, fileData!);
            case LayerType.SHAPEFILE:
                return this.getShapfileInfo(url, fileData!);
            case LayerType.CSV:
                return this.getCsvInfo(url, fileData!);
            default:
                console.error(
                    `Unsupported file type passed to fetchFileInfo - '${fileType}'`
                );
        }
    }

    async getGeojsonInfo(
        url: string,
        fileData: ArrayBuffer | object
    ): Promise<LayerInfo> {
        if (fileData instanceof ArrayBuffer) {
            fileData = JSON.parse(
                new TextDecoder('utf-8').decode(new Uint8Array(fileData))
            );
        }

        const config = {
            id: `geojson#${++this.layerCount}`,
            layerType: LayerType.GEOJSON,
            url,
            name: url.substring(url.lastIndexOf('/') + 1),
            state: { opacity: 1, visibility: true },
            rawData: fileData
        };

        return {
            config,
            fields: [{ name: 'OBJECTID', type: 'oid' }].concat(
                this.$iApi.geo.layer.files.extractGeoJsonFields(fileData)
            ),
            configOptions: ['name', 'nameField', 'tooltipField', 'colour']
        };
    }

    async getCsvInfo(
        url: string,
        fileData: ArrayBuffer | string
    ): Promise<LayerInfo> {
        if (fileData instanceof ArrayBuffer) {
            fileData = new TextDecoder('utf-8').decode(
                new Uint8Array(fileData)
            );
        }
        const config = {
            id: `csv#${++this.layerCount}`,
            layerType: LayerType.CSV,
            url,
            name: url.substring(url.lastIndexOf('/') + 1),
            state: { opacity: 1, visibility: true },
            rawData: fileData
        };

        return {
            config,
            fields: [{ name: 'OBJECTID', type: 'oid' }].concat(
                this.$iApi.geo.layer.files.extractCsvFields(fileData)
            ),
            latLonFields:
                this.$iApi.geo.layer.files.filterCsvLatLonFields(fileData),
            configOptions: [
                'name',
                'nameField',
                'tooltipField',
                'latField',
                'longField',
                'colour'
            ]
        };
    }

    async getShapfileInfo(
        url: string,
        fileData: ArrayBuffer
    ): Promise<LayerInfo> {
        const jsonData = await this.$iApi.geo.layer.files.shapefileToGeoJson(
            fileData
        );

        return this.getGeojsonInfo(url, jsonData);
    }

    /**
     * Get layer info from a service url
     *
     * @param {string} url a service url to load
     * @param {string} serviceType type of layer
     * @returns {Promise<LayerInfo | undefined>} LayerInfo object
     */
    async fetchServiceInfo(
        url: string,
        serviceType: string
    ): Promise<LayerInfo | undefined> {
        switch (serviceType) {
            case LayerType.FEATURE:
                return this.getFeatureInfo(url);
            case LayerType.MAPIMAGE:
                return this.getMapImageInfo(url);
            case LayerType.TILE:
                return this.getTileInfo(url);
            case LayerType.IMAGERY:
                return this.getImageryInfo(url);
            case LayerType.WFS:
                return this.getWfsInfo(url);
            case LayerType.WMS:
                return this.getWmsInfo(url);
        }
    }

    async getFeatureInfo(url: string): Promise<LayerInfo> {
        const response = await axios.get(url, { params: { f: 'json' } });

        const config = {
            id: `${LayerType.FEATURE}#${++this.layerCount}`,
            url: url,
            layerType: LayerType.FEATURE,
            name: response.data.name,
            nameField: response.data.displayField,
            tooltipField: response.data.displayField,
            state: { opacity: 1, visibility: true }
        };

        return {
            config,
            fields: response.data.fields,
            configOptions: ['name', 'nameField', 'tooltipField']
        };
    }

    async getMapImageInfo(url: string): Promise<LayerInfo> {
        const response = await axios.get(url, { params: { f: 'json' } });
        const config = {
            id: `${LayerType.MAPIMAGE}#${++this.layerCount}`,
            url: url,
            layerType: LayerType.MAPIMAGE,
            name: response.data.mapName,
            sublayers: [],
            state: { opacity: 1, visibility: true }
        };

        return {
            config,
            layers: flattenMapImageLayerList(response.data.layers),
            configOptions: ['name', 'sublayers']
        };

        /**
         * Processes the layer's flattened layer tree to determine the level of each layer in the list.
         * @param layers the layer's flattened tree that was retrieved from the server.
         */
        function flattenMapImageLayerList(layers: any) {
            return layers.map((layer: any) => {
                const level = calculateLevel(layer, layers);

                layer.level = level;
                layer.indent = Array.from(Array(level)).fill('-').join('');
                layer.index = layer.id;

                return layer;
            });

            /**
             * Calculates the level of the layer in the layer tree i.e. how many parent layers you can go up before you reach the base MIL.
             * @param layer the layer for which the calculation is occurring.
             * @param layers a flattened array of the layer tree.
             */
            function calculateLevel(layer: any, layers: any): number {
                if (layer.parentLayerId === -1) {
                    return 0;
                } else {
                    return (
                        calculateLevel(
                            layers.find(
                                (l: any) => l.id === layer.parentLayerId
                            ),
                            layers
                        ) + 1
                    );
                }
            }
        }
    }

    async getTileInfo(url: string): Promise<LayerInfo> {
        const response = await axios.get(url, { params: { f: 'json' } });

        const config = {
            id: `${LayerType.TILE}#${++this.layerCount}`,
            url: url,
            layerType: LayerType.TILE,
            name: response.data.mapName,
            state: { opacity: 1, visibility: true }
        };

        return {
            config,
            configOptions: ['name']
        };
    }

    async getImageryInfo(url: string): Promise<LayerInfo> {
        const response = await axios.get(url, { params: { f: 'json' } });

        const config = {
            id: `${LayerType.IMAGERY}#${++this.layerCount}`,
            url: url,
            layerType: LayerType.IMAGERY,
            name: response.data.name,
            state: { opacity: 1, visibility: true }
        };

        return {
            config,
            configOptions: ['name']
        };
    }

    async getWfsInfo(url: string): Promise<LayerInfo> {
        // get wfs data here then load as geojson layer so we can get fields
        const wrapper = new UrlWrapper(url);
        const { startindex, limit } = wrapper.queryMap;
        const wfsJson = await this.$iApi.geo.layer.ogc.loadWfsData(
            url,
            -1,
            parseInt(startindex) || 0,
            parseInt(limit) || 1000
        );

        return this.getGeojsonInfo(
            url.match(/\/([^/]+)\/items/)?.[1] || 'Layer',
            wfsJson
        );
    }

    async getWmsInfo(url: string): Promise<LayerInfo> {
        const capabilities = await this.$iApi.geo.layer.ogc.parseCapabilities(
            url
        );

        const config = {
            id: `${LayerType.WMS}#${++this.layerCount}`,
            url: url,
            layerType: LayerType.WMS,
            name: url,
            featureInfoMimeType: capabilities.queryTypes[0],
            state: { opacity: 1, visibility: true }
        };

        return {
            config,
            layers: flattenWmsLayerList(capabilities.layers),
            configOptions: ['name', 'sublayers']
        };

        function flattenWmsLayerList(layers: any, level = 0) {
            const layerList = [
                [],
                layers.map((layer: any) => {
                    layer.level = level;
                    layer.indent = Array.from(Array(level)).fill('-').join('');
                    layer.id = layer.name;

                    if (layer.layers.length > 0) {
                        // ignore sublayers with no id
                        return layer.id
                            ? [].concat(
                                  layer,
                                  flattenWmsLayerList(layer.layers, level + 1)
                              )
                            : [].concat(
                                  [],
                                  flattenWmsLayerList(layer.layers, level)
                              );
                    } else {
                        return layer.id ? layer : [];
                    }
                })
            ];
            return [].concat(...layerList);
        }
    }

    /**
     * Guesses type of file or service given a URL
     *
     * @param {string} url
     * @returns {string} file or layer type
     */
    guessFormatFromURL(url: string): string {
        // check if file url
        switch (url.match(/\.(zip|csv|geojson|json)$/)?.[1]) {
            case 'zip':
                return LayerType.SHAPEFILE;
            case 'csv':
                return LayerType.CSV;
            case 'geojson':
            case 'json':
                return LayerType.GEOJSON;
        }

        // probably an image layer if ends with ImageServer
        if (url.match(/\/ImageServer\/?$/gi)) {
            return LayerType.IMAGERY;
        }

        // probably a wfs layer if contains /collections/
        if (url.match(/\/collections\//gi)) {
            return LayerType.WFS;
        }

        // probably esri layer if contains /arcgis/rest/services/
        if (url.match(/arcgis\/rest\/services\//gi)) {
            // probably a feature layer if ends with a number
            if (url.match(/\/\d+\/?$/g)) {
                return LayerType.FEATURE;
            }

            return LayerType.MAPIMAGE;
        }

        // probably wms layer if contains service= or verison= or /wms
        if (url.match(/service=|version=|\/wms/gi)) {
            return LayerType.WMS;
        }

        return '';
    }
}
