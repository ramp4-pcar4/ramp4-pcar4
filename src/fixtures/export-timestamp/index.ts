import { fabric } from 'fabric';
import merge from 'deepmerge';

import { FixtureInstance } from '@/api/internal';
import type { ExportAPI, ExportSubFixture } from '@/fixtures/export/api/export';
import type { ExportConfig } from '../export/store';

class ExportTimestampFixture
    extends FixtureInstance
    implements ExportSubFixture
{
    get config(): any {
        const fixtureConfig: ExportConfig | undefined =
            this.$iApi.fixture.get<ExportAPI>('export').config;
        return fixtureConfig?.timestamp;
    }

    make(options?: any): Promise<fabric.Object> {
        const timestampFixtureConfig: any = this.config;

        const fabricTextConfig: any = {
            text: new Date().toLocaleString('en-CA'),
            fontFamily:
                'Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif',
            fill: '#000',
            fontSize: 30,
            top: 0,
            left: 0,
            originX: 'left'
        };

        if (timestampFixtureConfig) {
            fabricTextConfig.text = timestampFixtureConfig.value;
        }

        const config: any = merge(fabricTextConfig, options || {});
        const fbTimestamp = new fabric.Textbox(config.text, config);
        return Promise.resolve(fbTimestamp);
    }
}

export default ExportTimestampFixture;
