import { fabric } from 'fabric';
import merge from 'deepmerge';

import { FixtureInstance } from '@/api/internal';
import { ExportBasicSubFixture } from '@/fixtures/export-basic/api';

interface ExportBasicTitleConfig {
    text: string;
    fontFamily: string;
    fill: string;
    fontSize: number;
    top: 0;
    left: 0;
    originX: string;
    originY: string;
}

class ExportBasicTitleFixture
    extends FixtureInstance
    implements ExportBasicSubFixture
{
    get config(): any {
        // get the main export config
        let fixtureConfig: any = (
            this.$iApi.fixture.get('export-basic') as FixtureInstance
        )?.config;

        const textConfig: ExportBasicTitleConfig = {
            text: '',
            fontFamily:
                'Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif',
            fill: '#000',
            fontSize: 30,
            top: 0,
            left: 0,
            originX: 'center',
            originY: 'top'
        };

        if (
            fixtureConfig &&
            fixtureConfig.title &&
            !fixtureConfig.title.disabled
        ) {
            textConfig.text = fixtureConfig.title.value;
        }

        return textConfig;
    }

    make(options?: ExportBasicTitleConfig): Promise<fabric.Object> {
        const config = merge<ExportBasicTitleConfig>(
            this.config,
            options || {}
        );

        const fbTitle = new fabric.Text(config.text, config);

        return Promise.resolve(fbTitle);
    }
}

export default ExportBasicTitleFixture;
