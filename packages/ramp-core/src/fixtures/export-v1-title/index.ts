import { fabric } from 'fabric';
import merge from 'deepmerge';

import { FixtureInstance } from '@/api/internal';
import { ExportV1SubFixture } from '@/fixtures/export-v1/api';

interface ExportV1TitleConfig {
    text: string;
    fontFamily: string;
    fill: string;
    fontSize: number;
    top: 0;
    left: 0;
    originX: string;
    originY: string;
}

const DEFAULT_CONFIG: ExportV1TitleConfig = {
    text: '',
    fontFamily: 'Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif',
    fill: '#000',
    fontSize: 30,
    top: 0,
    left: 0,
    originX: 'center',
    originY: 'top'
};

class ExportV1TitleFixture extends FixtureInstance implements ExportV1SubFixture {
    get config(): ExportV1TitleConfig | undefined {
        return merge(DEFAULT_CONFIG, super.config);
    }

    make(options?: ExportV1TitleConfig): Promise<fabric.Object> {
        const config = merge<ExportV1TitleConfig>(this.config || {}, options || {});

        const fbTitle = new fabric.Text(config.text, config);

        return Promise.resolve(fbTitle);
    }
}

export default ExportV1TitleFixture;
