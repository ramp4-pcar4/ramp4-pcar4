import { fabric } from 'fabric';

import { FixtureInstance } from '@/api/internal';
import type { ExportAPI, ExportSubFixture } from '@/fixtures/export/api/export';
import type { ExportConfig } from '../export/store';

class ExportScalebarFixture
    extends FixtureInstance
    implements ExportSubFixture
{
    get config(): any {
        let fixtureConfig: ExportConfig | undefined =
            this.$iApi.fixture.get<ExportAPI>('export').config;
        return fixtureConfig?.mapElements;
    }

    make(options?: any): Promise<fabric.Object> {
        // the starting length of the scale line in pixels
        // reduce the length of the bar on extra small layouts
        const factor = window.innerWidth > 600 ? 70 : 35;
        const mapResolution = this.$iApi.geo.map.getResolution();

        // distance in meters
        const meters = mapResolution * factor;
        const metersInAMile = 1609.34;
        const metersInAFoot = 3.28084;

        // use arrays to store both imperial and metric calulcations
        let pixels: Array<number> = [0, 0];
        let distances: Array<number> = [0, 0];
        let measureUnits: Array<string> =
            meters > 1000 ? ['km', 'mi'] : ['m', 'ft'];
        let fbObjs = [];

        for (let i = 0; i < 2; i++) {
            // below width calculation code duplicated from $iApi.geo.map.caption.updateScale()

            let isImperialScale = i === 1;

            // If meters < 1Km, then use different scaling
            if (meters > 1000) {
                // get the distance in units, either miles or kilometers
                const units =
                    (mapResolution * factor) /
                    (isImperialScale ? metersInAMile : 1000);

                // length of the distance number
                const len = Math.round(units).toString().length;
                const div = Math.pow(10, len - 1);

                // we want to round the distance to the ceiling of the highest position and display a nice number
                // 45.637km => 50.00km; 4.368km => 5.00km
                // 28.357mi => 30.00mi; 2.714mi => 3.00mi
                distances[i] = Math.ceil(units / div) * div;

                // calcualte length of the scale line in pixels based on the round distance
                pixels[i] =
                    (distances[i] * (isImperialScale ? metersInAMile : 1000)) /
                    mapResolution;
            } else {
                // Round the meters up
                distances[i] = Math.ceil(
                    isImperialScale ? meters * metersInAFoot : meters
                );
                pixels[i] = meters / mapResolution;
            }

            // create the fabric objects and group them
            // scalebar layout (follows R2 layout):
            //
            //  <metric scale> km/m
            //  ======================== (scale bar metric)
            //  ============================== (scale bar imperial)
            //  <imperial scale> mi/ft

            let fbScaleText = new fabric.Text(
                this.$iApi.$vApp.$t('export.scaleBar.approx', [
                    `${this.$iApi.$vApp.$n(distances[i], 'number')}${
                        measureUnits[i]
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
            let fbScaleLine = new fabric.Line(
                [0, i === 0 ? 30 : 40, pixels[i], i === 0 ? 30 : 40],
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
