import { FileLayer, InstanceAPI } from '@/api/internal';
import { LayerType, type RampLayerConfig } from '@/geo/api';

/**
 * A layer class which implements an ESRI Feature Layer with data from a Shapefile zip.
 */
export class ShapefileLayer extends FileLayer {
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.layerType = LayerType.SHAPEFILE;
    }

    protected async onInitiate(): Promise<void> {
        const startTime = Date.now();

        const shapefileData = await this.$iApi.geo.layer.files.binaryInitHelper(
            this.origRampConfig
        );

        // convert shapefile to geojson, store in property for FileLayer to consume.
        if (startTime > this.lastCancel) {
            const gj =
                await this.$iApi.geo.layer.files.shapefileToGeoJson(
                    shapefileData
                );

            if (startTime > this.lastCancel) {
                this.sourceGeoJson = gj;

                await super.onInitiate();
            }
        }
    }
}
