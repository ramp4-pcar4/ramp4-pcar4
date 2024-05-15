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
        let shapefileData: any; // data type is actually an ArrayBuffer
        const startTime = Date.now();

        if (
            this.origRampConfig.rawData &&
            this.origRampConfig.rawData instanceof ArrayBuffer
        ) {
            // shapefile data has been passed in as static data.
            // since shapefile is binary, you cannot drop this in a layer config file.
            // The wizard does not use this route. It converts the zip to GeoJson ahead of time and
            // writes the layer config as `file-geojson`.
            // Only way this would be used is some other code (custom fixture or outside the instance)
            // has the zipped shape as an array buffer and tacks it onto the layer config it creates
            // during runtime.

            shapefileData = this.origRampConfig.rawData;
        } else if (this.origRampConfig.url) {
            shapefileData = await this.$iApi.geo.layer.files.fetchFileData(
                this.origRampConfig.url,
                this.layerType
            );
        } else {
            throw new Error(
                'shapefile config contains no url or no/invalid raw data'
            );
        }

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
