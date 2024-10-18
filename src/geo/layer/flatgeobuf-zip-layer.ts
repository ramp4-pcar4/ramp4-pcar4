import { FileLayer, InstanceAPI } from '@/api/internal';
import { LayerType, type RampLayerConfig } from '@/geo/api';

/**
 * A layer class which implements an ESRI Feature Layer with data from a zipped FlatGeobuf source.
 */
export class FlatGeobufZipLayer extends FileLayer {
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.layerType = LayerType.FLATGEOBUFZIPPED;
    }

    protected async onInitiate(): Promise<void> {
        // get fgb from appropriate source, unzip, convert to geojson and set to special property.
        // then initiate the FileLayer

        const startTime = Date.now();

        const zippedData = await this.$iApi.geo.layer.files.binaryInitHelper(this.origRampConfig);

        if (startTime > this.lastCancel) {
            const fgbData = await this.$iApi.geo.layer.files.unzipSingleFile(zippedData);

            // convert flatgeobuf to geojson, store in property for FileLayer to consume.
            if (startTime > this.lastCancel) {
                // + 1000 trickery.
                // this method doesn't know about the layer, but has a busywait loop. The fail number is to give a
                // safe threshold to stop that busywait. But method cannot cancel/error the layer. Adding a second
                // allows the initiate watcher to error the layer. Then this method safely exits a second later.
                // It is considered a cancel, so garbage value of gj is ignored.
                const gj = await this.$iApi.geo.layer.files.fgbToGeoJson(fgbData, this.expectedTime.fail + 1000);

                if (startTime > this.lastCancel) {
                    this.sourceGeoJson = gj;

                    await super.onInitiate();
                }
            }
        }
    }
}
