import { fabric } from 'fabric';

import { FixtureInstance } from '@/api/internal';
import type { ExportAPI, ExportSubFixture } from '@/fixtures/export/api/export';
import type { ExportConfig } from '../export/store';

class ExportScalebarFixture
    extends FixtureInstance
    implements ExportSubFixture
{
    get config(): any {
        const fixtureConfig: ExportConfig | undefined =
            this.$iApi.fixture.get<ExportAPI>('export').config;
        return fixtureConfig?.mapElements;
    }

    make(options?: any): Promise<fabric.Object> {
        const sInfo = this.$iApi.geo.map.caption.scaleHelper();
        const fbObjs = [];

        for (let i = 0; i < 2; i++) {
            // create the fabric objects and group them
            // scalebar layout (follows R2 layout):
            //
            //  <metric scale> km/m
            //  ======================== (scale bar metric)
            //  ============================== (scale bar imperial)
            //  <imperial scale> mi/ft

            const fbScaleText = new fabric.Text(
                this.$iApi.$i18n.t('export.scaleBar.approx', [
                    `${this.$iApi.$i18n.n(sInfo[i].distance, 'number')}${
                        sInfo[i].units
                    }`
                ]),
                {
                    fontFamily:
                        'Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif',
                    fill: '#000',
                    fontSize: 16,
                    top: i * 50,
                    left: 0,
                    originX: 'left',
                    originY: 'top'
                }
            );
            const fbScaleLine = new fabric.Line(
                [0, i === 0 ? 30 : 40, sInfo[i].pixels, i === 0 ? 30 : 40],
                {
                    stroke: 'black',
                    strokeWidth: 3
                }
            );

            fbObjs.push(new fabric.Group([fbScaleLine, fbScaleText]));
        }
        return Promise.resolve(new fabric.Group(fbObjs, options));
    }
}

export default ExportScalebarFixture;
