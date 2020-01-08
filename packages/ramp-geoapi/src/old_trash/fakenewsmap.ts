// TODO delete file once development is stable and this sample is no longer needed

import esri = __esri;
import { EsriBundle } from '../gapiTypes';

export class FakeNewsMap {

    // TODO consider private?
    innerMap: esri.Map;
    innerView: esri.MapView;
    esriBundle: EsriBundle;

    constructor (esriBundle: EsriBundle, targetDiv: string) {
        this.esriBundle = esriBundle;
        this.innerMap = new esriBundle.Map({
            basemap: 'topo'
          });

          this.innerView = new esriBundle.MapView({
            map: this.innerMap,
            container: targetDiv,
            center: [-76.772, 44.423],
            zoom: 10
          });
    }

    addLayer (): void {
        // testing GeoJSONLayer. seems to only accept a url, no raw data
        const happy: string = '{"type": "FeatureCollection","features": [{"type": "Feature","properties": {"name": "Right Eye"},"geometry": {"type": "Polygon","coordinates": [[[-90.3515625,53.73571574532637],[-92.13134765625,53.199451902831555],[-91.29638671875,51.93071827931289],[-88.9453125,51.83577752045248],[-87.71484375,52.96187505907603],[-88.59374999999999,53.68369534495075],[-90.3515625,53.73571574532637]]]}},{"type": "Feature","properties": {"name": "Left Eye"},"geometry": {"type": "Polygon","coordinates": [[[-84.57275390625,53.44880683542759],[-86.0009765625,53.04121304075649],[-85.4296875,51.80861475198521],[-83.408203125,51.41291212935532],[-82.15576171875,52.308478623663355],[-82.90283203125,53.409531853086435],[-84.57275390625,53.44880683542759]]]}},{"type": "Feature","properties": {"name": "Happy Mouth"},"geometry": {"type": "Polygon","coordinates": [[[-92.8125,51.67255514839676],[-91.82373046875,50.499452103967734],[-88.9892578125,50.317408112618686],[-84.44091796875,50.190967765585604],[-82.33154296875,51.04139389812637],[-82.02392578125,49.96535590991311],[-83.60595703125,48.748945343432936],[-85.869140625,48.3416461723746],[-89.296875,48.66194284607008],[-92.021484375,49.05227025601607],[-93.2080078125,49.76707407366792],[-92.8125,51.67255514839676]]]}}]}';
        // const geoJson: esri.GeoJSONLayer = new this.esriBundle.GeoJSONLayer({url: happy}); // this class is dumb
        // this.innerMap.add(geoJson);
    }
}

export class FakeNewsMapModule {
    esriBundle: EsriBundle;

    constructor (esriBundle: EsriBundle) {
        this.esriBundle = esriBundle;
    }

    makeMap(targetDiv: string): FakeNewsMap {
        const map: FakeNewsMap = new FakeNewsMap(this.esriBundle, targetDiv);
        return map;
    }
}