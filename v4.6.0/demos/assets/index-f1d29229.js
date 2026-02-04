import { f as fabric } from './fabric-a2d5c3f5.js';
import { cj as FixtureInstance } from './main-8822140d.js';
import './preload-helper-a4975f27.js';

class ExportScalebarFixture extends FixtureInstance {
  get config() {
    const fixtureConfig = this.$iApi.fixture.get("export").config;
    return fixtureConfig?.mapElements;
  }
  make(options) {
    const sInfo = this.$iApi.geo.map.caption.scaleHelper();
    const fbObjs = [];
    for (let i = 0; i < 2; i++) {
      const fbScaleText = new fabric.fabric.Text(
        this.$iApi.$i18n.t("export.scaleBar.approx", [
          `${this.$iApi.$i18n.n(sInfo[i].distance, "number")}${sInfo[i].units}`
        ]),
        {
          fontFamily: "Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
          fill: "#000",
          fontSize: 16,
          top: i * 50,
          left: 0,
          originX: "left",
          originY: "top"
        }
      );
      const fbScaleLine = new fabric.fabric.Line(
        [0, i === 0 ? 30 : 40, sInfo[i].pixels, i === 0 ? 30 : 40],
        {
          stroke: "black",
          strokeWidth: 3
        }
      );
      fbObjs.push(new fabric.fabric.Group([fbScaleLine, fbScaleText]));
    }
    return Promise.resolve(new fabric.fabric.Group(fbObjs, options));
  }
}

export { ExportScalebarFixture as default };
