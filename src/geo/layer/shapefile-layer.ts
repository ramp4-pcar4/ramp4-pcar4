import { FileLayer, InstanceAPI } from '@/api/internal';
import { LayerType, type RampLayerConfig } from '@/geo/api';

export class ShapefileLayer extends FileLayer {
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.layerType = LayerType.SHAPEFILE;
    }

    protected async onInitiate(): Promise<void> {
        // TODO check if .sourceGeoJson is already populated?
        //      if this initiate is a reload, do we want to re-use it, or re-download? decide.

        // get shapefile from appropriate source
        // parse and convert to geojson
        // set geojson to special property.
        // then initiate the FileLayer

        let shapefileData: any; // i believe this needs to be an ArrayBuffer

        if (this.origRampConfig.rawData) {
            // shapefile data has been passed in as static data.
            // since shapefile is binary, you cannot drop this in a layer config file.
            // I think what can happen is a wizard could read the file (via file picker)
            // or some random api code could do pre-processing, and then drop it on the rawData
            // parameter which allows this routine to consume it.
            // TODO add check that errors if typeof is string?
            shapefileData = this.origRampConfig.rawData;
        } else if (this.origRampConfig.url) {
            shapefileData = await this.$iApi.geo.layer.files.fetchFileData(
                this.origRampConfig.url,
                this.layerType
            );
        } else {
            throw new Error(
                'shapefile file config contains no raw data or url'
            );
        }

        // convert shapefile to geojson, store in property for FileLayer to consume.
        this.sourceGeoJson =
            await this.$iApi.geo.layer.files.shapefileToGeoJson(shapefileData);

        await super.onInitiate();
    }
}
