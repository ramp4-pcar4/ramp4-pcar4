import { fabric } from 'fabric';

import { FixtureInstance } from '@/api/internal';
import { ExportV1SubFixture } from '@/fixtures/export-v1';

class ExportV1MapFixture extends FixtureInstance implements ExportV1SubFixture {
    async make(options: any): Promise<fabric.Image> {
        if (!this.$iApi.geo.map.esriView) {
            throw new Error('Export attempted without a map view available');
        }
        // TODO: expose the esri takeScreenshot on the MapAPI
        const screenshot = await this.$iApi.geo.map.esriView.takeScreenshot({
            quality: 1,
            format: 'png'
        });

        // screenshot function returns a raw image data and a dataUrl
        // load the dataUrl as an image and wrap it into the fabric.Image
        const img = new Image();
        img.src = screenshot.dataUrl;

        const esriImage = await new Promise<HTMLImageElement>(
            resolve => (img.onload = () => resolve(img))
        );

        return new fabric.Image(esriImage, options);
    }
}

export default ExportV1MapFixture;
