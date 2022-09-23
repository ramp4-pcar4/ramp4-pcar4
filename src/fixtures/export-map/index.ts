import { fabric } from 'fabric';

import { FixtureInstance } from '@/api/internal';
import type { ExportAPI, ExportSubFixture } from '@/fixtures/export/api/export';
import type { ExportConfig } from '../export/store';

class ExportMapFixture extends FixtureInstance implements ExportSubFixture {
    get config(): any {
        const fixtureConfig: ExportConfig | undefined =
            this.$iApi.fixture.get<ExportAPI>('export').config;
        return fixtureConfig?.map;
    }

    async make(options: any): Promise<fabric.Image> {
        const screenshot = await this.$iApi.geo.map.takeScreenshot({
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

export default ExportMapFixture;
