import { fabric } from 'fabric';
import merge from 'deepmerge';

import { FixtureInstance } from '@/api/internal';
import type { ExportAPI, ExportSubFixture } from '@/fixtures/export/api/export';
import type { ExportConfig } from '../export/store';

class ExportTitleFixture extends FixtureInstance implements ExportSubFixture {
    get config(): any {
        const fixtureConfig: ExportConfig | undefined =
            this.$iApi.fixture.get<ExportAPI>('export').config;
        return fixtureConfig?.title;
    }

    make(options?: any): Promise<fabric.Object> {
        const titleFixtureConfig: any = this.config;

        const fabricTextConfig: any = {
            text: 'RAMP-Map / PCAR-Carte', // default name
            fontFamily:
                'Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif',
            fill: '#000',
            fontSize: 30,
            top: 0,
            left: 0,
            originX: 'center',
            originY: 'top'
        };

        if (titleFixtureConfig) {
            fabricTextConfig.text = titleFixtureConfig.value;
        }

        const config: any = merge(fabricTextConfig, options || {});
        const fbTitle = new fabric.Textbox(config.text, config);
        return Promise.resolve(fbTitle);
    }
}

export default ExportTitleFixture;
