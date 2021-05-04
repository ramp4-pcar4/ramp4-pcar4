import axios from 'axios';
import { LayerType } from '@/geo/api';
import { APIScope, InstanceAPI } from '@/api/internal';
import { UrlWrapper } from '@/geo/api';

export interface LayerInfo {
    config: any,
    configOptions: Array<string>,
    fields?: any,
    layers?: any
}

export default class LayerSource extends APIScope {

    layerCount: number = 0;

    constructor($iApi: InstanceAPI) {
        super($iApi);
    }

    async fetchFileInfo(url: string, fileType: string, fileData?: ArrayBuffer) {
        const fileName = url.substr(url.lastIndexOf('/') + 1);
        if (!fileData) {
            // if given a url, preload data so we can get fields
            const response = await axios.get(url, { responseType: 'arraybuffer'});
            fileData = response.data;
        }

        switch (fileType) {
            case 'geojson':
                return this.fetchGeojsonInfo(url, fileName, fileData);
            case 'shapefile':
                return this.fetchShapfileInfo(url, fileName, fileData);
            case 'csv':
                return this.fetchCsvInfo(url, fileName, fileData);
        }
    }

    async fetchServiceInfo(url: string, serviceType: string): Promise<LayerInfo | undefined> {
        switch (serviceType) {
            case LayerType.FEATURE:
                return this.fetchFeatureInfo(url);
            case LayerType.MAPIMAGE:
                return this.fetchMapImageInfo(url);
            case LayerType.WFS:
                return this.fetchWfsInfo(url);
            case LayerType.TILE:
                return this.fetchTileInfo(url);
            case LayerType.IMAGERY:
                return this.fetchImageInfo(url);
        }
    }

    async fetchCsvInfo(url: string, name: string, fileData?: ArrayBuffer) {
        const formattedData = new TextDecoder('utf-8').decode(new Uint8Array(fileData!));

        const config = {
            id: `csv#${++this.layerCount}`,
            url: url,
            layerType: 'fileCsv',
            name,
            state: { opacity: 1, visibility: true },
            rawData: formattedData
        };

        return {
            config,
            fields: [{ name: 'OBJECTID', type: 'oid' }].concat(this.$iApi.geo.layer.files.extractCsvFields(formattedData)),
            configOptions: ['name', 'nameField', 'tooltipField', 'latField', 'longField']
        }
    }

    async fetchGeojsonInfo(url: string, name: string, fileData?: ArrayBuffer) {
        const formattedData = JSON.parse(new TextDecoder('utf-8').decode(new Uint8Array(fileData!)));

        const config = {
            id: `geojson#${++this.layerCount}`,
            url: url,
            layerType: 'fileGeoJson',
            name,
            state: { opacity: 1, visibility: true },
            rawData: formattedData
        };

        return {
            config,
            fields: [{ name: 'OBJECTID', type: 'oid' }].concat(this.$iApi.geo.layer.files.extractGeoJsonFields(formattedData)),
            configOptions: ['name', 'nameField', 'tooltipField']
        }
    }

    async fetchShapfileInfo(url: string, name: string, fileData?: ArrayBuffer) {
        const formattedData = await this.$iApi.geo.layer.files.shapefileToGeoJson(fileData!);

        const config = {
            id: `geojson#${++this.layerCount}`,
            url: url,
            layerType: 'fileGeoJson',
            name,
            state: { opacity: 1, visibility: true },
            rawData: formattedData
        };

        return {
            config,
            fields: [{ name: 'OBJECTID', type: 'oid' }].concat(this.$iApi.geo.layer.files.extractGeoJsonFields(formattedData)),
            configOptions: ['name', 'nameField', 'tooltipField']
        }
    }

    async fetchWfsInfo(url: string): Promise<LayerInfo> {
        // load wfs data here so we can get fields, then load as geojson layer
        const wrapper = new UrlWrapper(url);
        const { startindex, limit } = wrapper.queryMap;
        const wfsJson = await this.$iApi.geo.layer.ogc.loadWfsData(url, -1, parseInt(startindex) || 0, parseInt(limit) || 1000);

        const config = {
            id: `${LayerType.WFS}#${++this.layerCount}`,
            url: url,
            layerType: 'fileGeoJson',
            name: url.match(/\/([^/]+)\/items/)?.[1] || 'Layer',
            state: { opacity: 1, visibility: true },
            rawData: wfsJson
        };

        return {
            config,
            fields: [{ name: 'OBJECTID', type: 'oid' }].concat(this.$iApi.geo.layer.files.extractGeoJsonFields(wfsJson)),
            configOptions: ['name', 'nameField', 'tooltipField']
        }
    }

    async fetchFeatureInfo(url: string): Promise<LayerInfo> {
        const response = await axios.get(url, { params: { f: 'json' } });
        const config = {
            id: `${LayerType.FEATURE}#${++this.layerCount}`,
            url: url,
            layerType: LayerType.FEATURE,
            name: response.data.name,
            nameField: response.data.displayField,
            tooltipField: response.data.displayField,
            state: { opacity: 1, visibility: true }
        }

        return {
            config,
            fields: response.data.fields,
            configOptions: ['name', 'nameField', 'tooltipField']
        }
    }

    async fetchMapImageInfo(url: string): Promise<LayerInfo> {
        const response = await axios.get(url, { params: { f: 'json' } });
        const config = {
            id: `${LayerType.MAPIMAGE}#${++this.layerCount}`,
            url: url,
            layerType: LayerType.MAPIMAGE,
            name: response.data.mapName,
            layerEntries: [],
            state: { opacity: 1, visibility: true }
        };

        return {
            config,
            layers: response.data.layers,
            configOptions: ['name', 'layerEntries']
        }
    }

    async fetchWmsInfo(url: string): Promise<LayerInfo> {
        const response = await axios.get(url, { params: { f: 'json' } });
        const config = {
            id: `${LayerType.MAPIMAGE}#${++this.layerCount}`,
            url: url,
            layerType: LayerType.MAPIMAGE,
            name: response.data.mapName,
            state: { opacity: 1, visibility: true }
        };

        return {
            config,
            layers: response.data.layers,
            configOptions: ['name', 'layerEntries']
        }
    }

    async fetchTileInfo(url: string): Promise<LayerInfo> {
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
        }
    }

    async fetchImageInfo(url: string): Promise<LayerInfo> {
        let response = await axios.get(url, { params: { f: 'json' } });
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
        }
    }

    guessFileType(url: string): string {
        switch (url.match(/\.(zip|csv|json|geojson)$/)?.[1]) {
            case 'zip':
                return 'shapefile';
            case 'csv':
                return 'csv';
            default:
                return 'geojson';
        }
    }

    guessServiceType(url: string): string {
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

        return '';
    }
}