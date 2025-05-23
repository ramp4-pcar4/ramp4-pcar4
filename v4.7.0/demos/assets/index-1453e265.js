import { f as fabric } from './fabric-f831ac20.js';
import { bB as FixtureInstance, bC as merge } from './main-b03b5063.js';
import './preload-helper-a4975f27.js';

class ExportTitleFixture extends FixtureInstance {
  get config() {
    const fixtureConfig = this.$iApi.fixture.get("export").config;
    return fixtureConfig?.title;
  }
  make(options) {
    const titleFixtureConfig = this.config;
    const fabricTextConfig = {
      text: "RAMP-Map / PCAR-Carte",
      // default name
      fontFamily: "Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
      fill: "#000",
      fontSize: 30,
      top: 0,
      left: 0,
      originX: "center",
      originY: "top"
    };
    if (titleFixtureConfig?.value !== void 0) {
      fabricTextConfig.text = titleFixtureConfig.value;
    }
    const config = merge(fabricTextConfig, options || {});
    const fbTitle = new fabric.fabric.Textbox(config.text, config);
    return Promise.resolve(fbTitle);
  }
}

export { ExportTitleFixture as default };
