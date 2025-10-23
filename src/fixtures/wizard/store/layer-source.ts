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
    layers?: Array<SublayerInfo>; // a nested list of info for the parent layer, sublayer groups, and sublayers. Only defined for MIL/WMS
    layersRaw?: [];
}

export interface SublayerInfo {
    id: number | string;
    label: string;
    children: Array<number | string> | undefined;
}

export class LayerSource extends APIScope {
    layerCount = 0;
    sublayerCount = 0;

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
    async fetchFileInfo(url: string, fileType: LayerType, fileData?: ArrayBuffer): Promise<LayerInfo | undefined> {
        if (!fileData) {
            // if given a url, load data so we can get fields
            fileData = await this.$iApi.geo.layer.files.fetchFileData(url, fileType);
        }

        switch (fileType) {
            case LayerType.GEOJSON:
                return this.getGeojsonInfo(url, fileData!);
            case LayerType.SHAPEFILE:
                return this.getShapfileInfo(url, fileData!);
            case LayerType.CSV:
                return this.getCsvInfo(url, fileData!);
            default:
                console.error(`Unsupported file type passed to fetchFileInfo - '${fileType}'`);
        }
    }

    async getGeojsonInfo(url: string, fileData: ArrayBuffer | object): Promise<LayerInfo> {
        if (fileData instanceof ArrayBuffer) {
            fileData = JSON.parse(new TextDecoder('utf-8').decode(new Uint8Array(fileData)));
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

    async getCsvInfo(url: string, fileData: ArrayBuffer | string): Promise<LayerInfo> {
        if (fileData instanceof ArrayBuffer) {
            fileData = new TextDecoder('utf-8').decode(new Uint8Array(fileData));
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
            fields: [{ name: 'OBJECTID', type: 'oid' }].concat(this.$iApi.geo.layer.files.extractCsvFields(fileData)),
            latLonFields: this.$iApi.geo.layer.files.filterCsvLatLonFields(fileData),
            configOptions: ['name', 'nameField', 'tooltipField', 'latField', 'longField', 'colour']
        };
    }

    async getShapfileInfo(url: string, fileData: ArrayBuffer): Promise<LayerInfo> {
        const jsonData = await this.$iApi.geo.layer.files.shapefileToGeoJson(fileData);

        return this.getGeojsonInfo(url, jsonData);
    }

    /**
     * Get layer info from a service url
     *
     * @param {string} url a service url to load
     * @param {string} serviceType type of layer
     * @returns {Promise<LayerInfo | undefined>} LayerInfo object
     */
    async fetchServiceInfo(url: string, serviceType: string, nested: boolean): Promise<LayerInfo | undefined> {
        switch (serviceType) {
            case LayerType.FEATURE:
                return this.getFeatureInfo(url);
            case LayerType.MAPIMAGE:
                return this.getMapImageInfo(url, nested);
            case LayerType.TILE:
                return this.getTileInfo(url);
            case LayerType.IMAGERY:
                return this.getImageryInfo(url);
            case LayerType.WFS:
                return this.getWfsInfo(url);
            case LayerType.WMS:
                return this.getWmsInfo(url, nested);
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
            legendField: response.data.drawingInfo?.renderer?.field1 || response.data.typeIdField,
            state: { opacity: 1, visibility: true }
        };

        return {
            config,
            fields: response.data.fields,
            configOptions: ['name', 'nameField', 'tooltipField', 'legendField']
        };
    }

    /**
     * Gets MIL data from source, formats it as a tree, and returns a promise of the data with configuration
     *
     * @param {string} url
     * @returns {Promise<LayerInfo>} data configuration
     */
    async getMapImageInfo(url: string, nested: boolean): Promise<LayerInfo> {
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
            layers: this.createLayerHierarchy(response.data.layers, nested),
            configOptions: ['name', 'sublayers'],
            layersRaw: response.data.layers
        };
    }

    createLayerHierarchy(layers: any[], nested: boolean) {
        // avoid case of disordered layers from endpoint
        layers.sort((l1: any, l2: any) => l1.id - l2.id);

        // traverses the layer tree to insert child layers
        const findParent = (id: number, sublayers: Array<any>): any => {
            if (sublayers === undefined) {
                return false;
            }
            let parent;
            if (sublayers.find(sl => sl.id === id)) {
                return sublayers.find(sl => sl.id === id);
            } else {
                for (const sublayer of sublayers) {
                    parent = findParent(id, sublayer.children);
                    if (parent !== false) {
                        return parent;
                    }
                }
                return false;
            }
        };

        const opts: Array<SublayerInfo> = [];

        const parentIds = new Set(
            layers.filter(layer => layer.subLayerIds && layer.subLayerIds.length > 0).map(layer => layer.id)
        );

        for (const layer of layers) {
            if (nested && layer.parentLayerId === -1) {
                opts.push({
                    id: layer.id,
                    label: layer.name,
                    children: layer.subLayerIds ? [] : undefined
                });
            } else if (nested) {
                const parentLayer = findParent(layer.parentLayerId, opts);
                parentLayer.children = [
                    ...parentLayer.children,
                    {
                        id: layer.id,
                        label: layer.name,
                        children: layer.subLayerIds ? [] : undefined
                    }
                ];
            } else if (!parentIds.has(layer.id)) {
                opts.push({
                    id: layer.id,
                    label: layer.name,
                    children: undefined
                });
            }
        }

        return opts;
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
        const { offset, limit } = wrapper.queryMap;
        const wfsJson = await this.$iApi.geo.layer.ogc.loadWfsData(
            url,
            -1,
            parseInt(offset) || 0,
            parseInt(limit) || 1000
        );

        return this.getGeojsonInfo(url.match(/\/([^/]+)\/items/)?.[1] || 'Layer', wfsJson);
    }

    /**
     * Gets WMS data from source, formats it, and returns a promise of the data with configuration
     *
     * @param {string} url
     * @returns {Promise<LayerInfo>} data configuration
     */
    async getWmsInfo(url: string, nested: boolean): Promise<LayerInfo> {
        const capabilities = await this.$iApi.geo.layer.ogc.parseCapabilities(url);

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
            layers: this.mapWmsLayerList(capabilities.layers, nested),
            configOptions: ['name', 'sublayers'],
            layersRaw: capabilities.layers
        };
    }

    mapWmsLayerList(layers: any, nested: boolean) {
        // filter out items with non-existent id
        let modLayers: any = [];
        layers.forEach((layer: any) => {
            if (layer.name === null && layer.layers) {
                modLayers = [...modLayers, ...layer.layers];
            } else {
                modLayers.push(layer);
            }
        });

        if (nested) {
            return modLayers.flatMap((layer: any) => {
                return {
                    id: `${layer.name}#${++this.sublayerCount}`,
                    label: layer.title,
                    children: layer.layers.length > 0 ? this.mapWmsLayerList(layer.layers, nested) : undefined
                };
            });
        } else {
            return modLayers.flatMap((layer: any) =>
                layer.layers && layer.layers.length > 0
                    ? this.mapWmsLayerList(layer.layers, nested)
                    : {
                          id: `${layer.name}#${++this.sublayerCount}`,
                          label: layer.title
                      }
            );
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
