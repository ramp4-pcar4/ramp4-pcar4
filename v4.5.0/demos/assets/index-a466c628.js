import { f as fabric } from './fabric-480225fb.js';
import { bZ as FixtureInstance, b_ as merge } from './main-5658cd6e.js';
import './preload-helper-a4975f27.js';

class ExportTimestampFixture extends FixtureInstance {
  get config() {
    const fixtureConfig = this.$iApi.fixture.get("export").config;
    return fixtureConfig?.timestamp;
  }
  make(options) {
    const timestampFixtureConfig = this.config;
    const fabricTextConfig = {
      text: (/* @__PURE__ */ new Date()).toLocaleString("en-CA"),
      fontFamily: "Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
      fill: "#000",
      fontSize: 20,
      top: 0,
      left: 0,
      originX: "left"
    };
    if (timestampFixtureConfig) {
      fabricTextConfig.text = timestampFixtureConfig.value;
    }
    const config = merge(fabricTextConfig, options || {});
    const fbTimestamp = new fabric.fabric.Textbox(config.text, config);
    return Promise.resolve(fbTimestamp);
  }
}

export { ExportTimestampFixture as default };
