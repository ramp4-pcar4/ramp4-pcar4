import { a as fabric } from './fabric-DEP74o3W.js';
import { bA as FixtureInstance, bB as merge } from './main-BpBTVFw9.js';
import './preload-helper-dJJaZANz.js';

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
