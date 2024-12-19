import { f as fabric } from './fabric-a2d5c3f5.js';
import { cj as FixtureInstance, ck as merge } from './main-8822140d.js';
import './preload-helper-a4975f27.js';

class ExportFootnoteFixture extends FixtureInstance {
  get config() {
    const fixtureConfig = this.$iApi.fixture.get("export").config;
    return fixtureConfig?.footnote;
  }
  make(options) {
    const footnoteFixtureConfig = this.config;
    const fabricTextConfig = {
      text: "RAMP-PCAR",
      fontFamily: "Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
      fill: "#000",
      fontSize: 20,
      top: 0
    };
    if (footnoteFixtureConfig?.value !== void 0) {
      fabricTextConfig.text = footnoteFixtureConfig.value;
    }
    const config = merge(fabricTextConfig, options || {});
    const fbFootnote = new fabric.fabric.Textbox(config.text, config);
    return Promise.resolve(fbFootnote);
  }
}

export { ExportFootnoteFixture as default };
