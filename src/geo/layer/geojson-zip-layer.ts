import { FileLayer, InstanceAPI } from '@/api/internal';
import { LayerType, type RampLayerConfig } from '@/geo/api';

/**
 * A layer class which implements an ESRI Feature Layer with data from a Zipped GeoJSON source.
 */
export class GeoJsonZipLayer extends FileLayer {
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.layerType = LayerType.GEOJSONZIPPED;
    }

    protected async onInitiate(): Promise<void> {
        // get geojson from appropriate source and set to special property.
        // then initiate the FileLayer

        const startTime = Date.now();

        const zippedData = await this.$iApi.geo.layer.files.binaryInitHelper(
            this.origRampConfig
        );

        // unzip to string, parse to geojson, store in property for FileLayer to consume.
        if (startTime > this.lastCancel) {
            const gjBinary =
                await this.$iApi.geo.layer.files.unzipSingleFile(zippedData);

            if (startTime > this.lastCancel) {
                this.sourceGeoJson = JSON.parse(
                    this.$iApi.geo.layer.files.arbToStr(gjBinary)
                );

                await super.onInitiate();
            }
        }
    }
}
