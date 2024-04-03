import { fabric } from 'fabric';
import merge from 'deepmerge';

import { FixtureInstance } from '@/api/internal';
import type { ExportAPI, ExportSubFixture } from '@/fixtures/export/api/export';
import type { ExportConfig } from '../export/store';

class ExportFootnoteFixture
    extends FixtureInstance
    implements ExportSubFixture
{
    get config(): any {
        const fixtureConfig: ExportConfig | undefined =
            this.$iApi.fixture.get<ExportAPI>('export').config;
        return fixtureConfig?.footnote;
    }

    make(options?: any): Promise<fabric.Object> {
        const footnoteFixtureConfig: any = this.config;

        const fabricTextConfig: any = {
            text: 'RAMP-PCAR',
            fontFamily:
                'Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif',
            fill: '#000',
            fontSize: 20,
            top: 0
        };

        if (footnoteFixtureConfig?.value != undefined) {
            fabricTextConfig.text = footnoteFixtureConfig.value;
        }

        const config: any = merge(fabricTextConfig, options || {});
        const fbFootnote = new fabric.Textbox(config.text, config);
        return Promise.resolve(fbFootnote);
    }
}

export default ExportFootnoteFixture;
