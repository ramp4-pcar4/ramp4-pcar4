// layers api and other public, general layer things.

import {
    APIScope,
    CsvLayer,
    FileUtils,
    FeatureLayer,
    GeoJsonLayer,
    GraphicLayer,
    InstanceAPI,
    LayerInstance,
    MapImageLayer,
    OgcUtils,
    OsmTileLayer,
    ShapefileLayer,
    TileLayer,
    WfsLayer,
    WmsLayer
} from '@/api/internal';
import { LayerControl, LayerType, type RampLayerConfig } from '@/geo/api';
import { useLayerStore } from '@/stores/layer';

// this class represents the functions that exist on rampApi.geo.layer
export class LayerAPI extends APIScope {
    files: FileUtils;
    ogc: OgcUtils;

    constructor(iApi: InstanceAPI) {
        super(iApi);
        this.files = new FileUtils(iApi);
        this.ogc = new OgcUtils(iApi);
    }

    /**
     * Will generate a RAMP Layer based on the supplied config object.
     *
     * @param {Object} config a valid layer configuration object
     * @returns {LayerInstance} Layer in uninitialized load state
     */
    createLayer(config: RampLayerConfig): LayerInstance {
        let closs: new (config: any, iApi: InstanceAPI) => LayerInstance;

        // for mad speed gains, order the switch in most common to most obscure
        switch (config.layerType) {
            case LayerType.FEATURE:
                closs = FeatureLayer;
                break;
            case LayerType.MAPIMAGE:
                closs = MapImageLayer;
                break;
            case LayerType.GRAPHIC:
                closs = GraphicLayer;
                break;
            case LayerType.TILE:
                closs = TileLayer;
                break;
            case LayerType.WFS:
                closs = WfsLayer;
                break;
            case LayerType.WMS:
                closs = WmsLayer;
                break;
            case LayerType.GEOJSON:
                closs = GeoJsonLayer;
                break;
            case LayerType.CSV:
                closs = CsvLayer;
                break;
            case LayerType.SHAPEFILE:
                closs = ShapefileLayer;
                break;
            case LayerType.OSM:
                closs = OsmTileLayer;
                break;
            default:
                throw new Error('Unsupported Layer Type ' + config.layerType);
        }

        return new closs(config, this.$iApi);
    }

    /**
     * Access an instantiated layer object.
     *
     * @param {string} layerId layer id or uid of the layer
     * @returns {LayerInstance | undefined} The layer instance with the given id. Returns undefined is layer is not found.
     */
    getLayer(layerId: string): LayerInstance | undefined {
        // since this would be a fairly common thing to want to do via the instance API,
        // this function acts as a nice / obvious endpoint and saves caller
        // from figuring out how to use the store.

        let layer: LayerInstance | undefined;

        // test if param is layer id
        const layerStore = useLayerStore(this.$vApp.$pinia);
        layer = layerStore.getLayerById(layerId);
        if (!layer) {
            // test if layer is a string uid
            layer = layerStore.getLayerByUid(layerId);
        }

        return layer;
    }

    /**
     * Return all registered layers.
     * @returns {Array<LayerInstance>} all registered layers
     */
    allLayers(): Array<LayerInstance> {
        return (
            (useLayerStore(this.$vApp.$pinia)
                .layers as unknown as Array<LayerInstance>) || []
        );
    }

    /**
     * Return all error layers.
     * @returns {Array<LayerInstance>} all error layers
     */
    allErrorLayers(): Array<LayerInstance> {
        return (
            (useLayerStore(this.$vApp.$pinia)
                .penaltyBox as unknown as Array<LayerInstance>) || []
        );
    }

    /**
     * Get controls and disabled controls configuration of the layer with the given id.
     *
     * @param {string} layerId layer id or uid of the layer
     * @returns {Object | undefined} The layer's controls and disabled controls configuration. Returns undefined if layer is not found.
     */
    getLayerControls(layerId: string):
        | {
              controls: Array<LayerControl>;
              disabledControls: Array<LayerControl>;
          }
        | undefined {
        // fetch the layer first since given layerId can be layer id or uid
        const layer: LayerInstance | undefined =
            this.getLayer(layerId) ??
            this.allErrorLayers().find(
                layer => layer.id === layerId || layer.uid === layerId
            );
        if (!layer) {
            return;
        }

        // get controls config from layer.config since we do not expect this to change mid-session
        const controls: Array<LayerControl> =
            layer.config.controls?.slice() ?? [
                LayerControl.BoundaryZoom,
                LayerControl.Datatable,
                LayerControl.Identify,
                LayerControl.Metadata,
                LayerControl.Opacity,
                LayerControl.Refresh,
                LayerControl.Reload,
                LayerControl.Remove,
                LayerControl.Settings,
                LayerControl.Symbology,
                LayerControl.Visibility
            ];

        // remove controls if layer doesn't support them
        const controlsToRemove: Array<LayerControl> = [];
        if (!layer.supportsFeatures) {
            controlsToRemove.push(LayerControl.Datatable);
        }
        if (layer.extent === undefined) {
            controlsToRemove.push(LayerControl.BoundaryZoom);
        }
        const metaConfig =
            layer.config?.metadata ||
            (layer.isSublayer ? layer.parentLayer?.config?.metadata : {}) ||
            {};
        if (!metaConfig.url) {
            controlsToRemove.push(LayerControl.Metadata);
        }

        controlsToRemove.forEach(control => {
            const idx: number = controls?.indexOf(control) ?? -1;
            if (idx !== -1) {
                controls?.splice(idx, 1);
            }
        });

        // return default controls if controls is undefined
        return {
            controls: controls,
            disabledControls: layer.config.disabledControls ?? []
        };
    }
}
