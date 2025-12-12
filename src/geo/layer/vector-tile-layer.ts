import { CommonTileLayer, InstanceAPI, ReactiveIdentifyFactory } from '@/api/internal';
import type { IdentifyResult } from '@/api/internal';
import { DefPromise, IdentifyResultFormat, LayerFormat, LayerIdentifyMode, LayerType } from '@/geo/api';
import type { IdentifyParameters, Point, RampLayerConfig } from '@/geo/api';
import { EsriAPI } from '@/geo/esri';
import type { EsriVectorTileLayer } from '@/geo/esri';
import { markRaw, reactive } from 'vue';

/**
 * A layer class which implements an ESRI Vector Tile Layer.
 */
export class VectorTileLayer extends CommonTileLayer {
    declare esriLayer: EsriVectorTileLayer | undefined;

    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);

        this.layerType = LayerType.VECTORTILE;
        this.layerFormat = LayerFormat.VECTORTILE;
        this.supportsIdentify = true;
        this.identifyMode = LayerIdentifyMode.GEOMETRIC;
    }

    protected async onInitiate(): Promise<void> {
        this.esriLayer = markRaw(await EsriAPI.VectorTileLayer(this.makeEsriLayerConfig(this.origRampConfig)));
        await super.onInitiate();
    }

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): __esri.VectorTileLayerProperties {
        const esriConfig: __esri.TileLayerProperties = super.makeEsriLayerConfig(rampLayerConfig);

        return esriConfig;
    }

    // Note: the samples seen so far are hosted on tiles.arcgis.com, not a typical ArcGis Server. The endpoints
    //       don't appear to expose legends, so no legend grabbing in onLoadActions here

    runIdentify(options: IdentifyParameters): Array<IdentifyResult> {
        if (!this.canIdentify() || !this.esriView) {
            // not loaded
            return [];
        }

        const dProm = new DefPromise<void>();

        const result: IdentifyResult = reactive({
            items: [],
            loading: dProm.getPromise(),
            loaded: false,
            errored: false,
            uid: this.uid,
            layerId: this.id,
            requestTime: Date.now()
        });

        var point = options.geometry as Point;
        (this.esriView as any).hitTest({ x: point.x, y: point.y }).then((results: any) => {
            results.forEach((hit: any) => {
                result.items.push(ReactiveIdentifyFactory.makeRawItem(IdentifyResultFormat.TEXT, hit.graphic.attributes[this.nameField]));
            });

            result.loaded = true;
            dProm.resolveMe();
        })
        .catch(() => {
            result.errored = true;
            dProm.resolveMe(); // keeping it this way so that we don't need to make annoying changes
        });

        return [ result ];
    }
}
