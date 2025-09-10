import { ja as commonjsGlobal, jb as getDefaultExportFromCjs, cj as FixtureInstance, fE as useExportStore, hv as markRaw, hw as useAppbarStore } from './main-8822140d.js';
import { f as fabric } from './fabric-a2d5c3f5.js';
import { _ as _sfc_main } from './screen.vue_vue_type_script_setup_true_lang-075a24c8.js';
import './preload-helper-a4975f27.js';

var FileSaver_min = {exports: {}};

(function (module, exports) {
	(function(a,b){b();})(commonjsGlobal,function(){function b(a,b){return "undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c);},d.onerror=function(){console.error("could not download file");},d.send();}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send();}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"));}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b);}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof commonjsGlobal&&commonjsGlobal.global===commonjsGlobal?commonjsGlobal:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href);},4E4),setTimeout(function(){e(j);},0));}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else {var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i);});}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null;},k.readAsDataURL(b);}else {var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m);},4E4);}});f.saveAs=g.saveAs=g,(module.exports=g);});

	
} (FileSaver_min));

var FileSaver_minExports = FileSaver_min.exports;
const FileSaver = /*@__PURE__*/getDefaultExportFromCjs(FileSaver_minExports);

fabric.fabric.Object.prototype.objectCaching = false;
const DEFAULT_WIDTH = 1200;
const GLOBAL_MARGIN = {
  TOP: 40,
  RIGHT: 40,
  BOTTOM: 40,
  LEFT: 40
};
class ExportAPI extends FixtureInstance {
  fcFabric;
  // download canvas will remain unscaled and only be used for download
  fcFabricDownload;
  options = {
    runningHeight: 0,
    scale: 1
  };
  /**
   * Returns `ExportConfig` section of the global config file.
   *
   * @readonly
   * @type {ExportConfig}
   * @memberof ExportAPI
   */
  get config() {
    return super.config;
  }
  /**
   * Parses the export config JSON snippet from the config file and save to the fixture store.
   *
   * @param {ExportConfig} [exportConfig]
   * @memberof ExportAPI
   */
  _parseConfig(exportConfig) {
    if (!exportConfig)
      return;
    const exportStore = useExportStore(this.$vApp.$pinia);
    exportStore.componentSelectedState = {
      title: exportConfig.title?.selected ?? true,
      map: exportConfig.map?.selected ?? true,
      mapElements: exportConfig.mapElements?.selected ?? true,
      legend: exportConfig.legend?.selected ?? true,
      footnote: exportConfig.footnote?.selected ?? true,
      timestamp: exportConfig.timestamp?.selected ?? true
    };
    exportStore.fileName = exportConfig.fileName || "";
    this.handlePanelWidths(["export"]);
    this.handlePanelTeleports(["export"]);
  }
  /**
   * Fetches an Export sub fixture
   *
   * @private
   * @param {string} name
   * @returns {ExportSubFixture | undefined}
   * @memberof ExportAPI
   */
  getSubFixture(name) {
    return this.$iApi.fixture.get(name);
  }
  /**
   * Creates an export canvas.
   *
   * @param {HTMLCanvasElement} canvas
   * @param {number} panelWidth
   * @returns {Promise<void>}
   * @memberof ExportAPI
   */
  async make(canvas, panelWidth) {
    const exportStore = useExportStore(this.$vApp.$pinia);
    this.fcFabric = new fabric.fabric.StaticCanvas(canvas, {
      backgroundColor: "#fff"
    });
    this.fcFabricDownload = new fabric.fabric.StaticCanvas(null, {
      backgroundColor: "#fff"
    });
    this.options.runningHeight = 0;
    const selectedState = exportStore.componentSelectedState;
    const exportTitleFixture = this.getSubFixture("export-title");
    const exportMapFixture = this.getSubFixture("export-map");
    const exportScaleBarFixture = this.getSubFixture("export-scalebar");
    const exportNorthArrowFixture = this.getSubFixture("export-northarrow");
    const exportLegendFixture = this.getSubFixture("export-legend");
    const exportFootnoteFixture = this.getSubFixture("export-footnote");
    const exportTimestampFixture = this.getSubFixture("export-timestamp");
    let fbTitle;
    let fbMap;
    let fbScaleBar;
    let fbNorthArrow;
    let fbLegend;
    let fbFootnote;
    let fbTimestamp;
    const selectedExportComponents = [];
    if (selectedState.title && exportTitleFixture) {
      fbTitle = await exportTitleFixture.make({
        /* text: '😸🤖🧙‍♂️🤦‍♀️🎶', */
        top: this.options.runningHeight,
        left: 0,
        originX: "left",
        width: panelWidth,
        textAlign: "center"
      });
      this.options.runningHeight += fbTitle.height + 40;
      selectedExportComponents.push(fbTitle);
    }
    if (selectedState.map && exportMapFixture) {
      fbMap = await exportMapFixture.make({
        top: this.options.runningHeight
      });
      if (fbTitle) {
        fbTitle.left = fbMap.width / 2;
        fbTitle.originX = "center";
      }
      this.options.runningHeight += fbMap.height + 40;
      selectedExportComponents.push(fbMap);
    }
    if (!fbMap && fbTitle) {
      fbTitle.width = DEFAULT_WIDTH;
    }
    this.options.scale = panelWidth / ((fbMap?.width ?? DEFAULT_WIDTH) + GLOBAL_MARGIN.LEFT + GLOBAL_MARGIN.RIGHT);
    if (selectedState.mapElements && exportScaleBarFixture) {
      fbScaleBar = await exportScaleBarFixture.make({
        top: this.options.runningHeight,
        left: 0
      });
      this.options.runningHeight += fbScaleBar.height + 40;
      selectedExportComponents.push(fbScaleBar);
      if (exportNorthArrowFixture) {
        fbNorthArrow = await exportNorthArrowFixture.make({
          top: fbScaleBar.top,
          left: panelWidth / this.options.scale
        });
        fbNorthArrow.top += fbNorthArrow.height / 2 - 20;
        fbNorthArrow.left += -fbNorthArrow.width * 2;
        selectedExportComponents.push(fbNorthArrow);
      }
    }
    if (selectedState.legend && exportLegendFixture) {
      fbLegend = await exportLegendFixture.make({
        width: exportLegendFixture.config?.columnWidth ?? fbMap?.width ?? DEFAULT_WIDTH
      });
      fbLegend.top = this.options.runningHeight;
      this.options.runningHeight += fbLegend.height;
      selectedExportComponents.push(fbLegend);
    }
    if (selectedState.timestamp && exportTimestampFixture) {
      fbTimestamp = await exportTimestampFixture.make({
        top: this.options.runningHeight + 20,
        width: panelWidth
      });
      this.options.runningHeight += fbTimestamp.height;
      selectedExportComponents.push(fbTimestamp);
    }
    if (selectedState.footnote && exportFootnoteFixture) {
      fbFootnote = await exportFootnoteFixture.make({
        top: this.options.runningHeight,
        left: panelWidth / this.options.scale + 40
      });
      fbFootnote.left += -fbFootnote.width * 2;
      this.options.runningHeight += fbFootnote.height + 20;
      selectedExportComponents.push(fbFootnote);
    }
    const fbGroup = new fabric.fabric.Group(selectedExportComponents, {
      top: GLOBAL_MARGIN.TOP * this.options.scale,
      left: GLOBAL_MARGIN.LEFT * this.options.scale
    });
    const fbGroupDownload = await new Promise((resolve) => {
      fbGroup.clone((g) => {
        resolve(g);
      });
    });
    fbGroupDownload.top = GLOBAL_MARGIN.TOP;
    fbGroupDownload.left = GLOBAL_MARGIN.LEFT;
    this.fcFabricDownload.add(fbGroupDownload);
    fbGroup.scale(this.options.scale);
    this.fcFabric.add(fbGroup);
    this.fcFabric.setDimensions({
      width: panelWidth,
      height: (this.options.runningHeight + GLOBAL_MARGIN.TOP + GLOBAL_MARGIN.BOTTOM) * this.options.scale
    });
    this.fcFabric.renderAll();
    this.fcFabricDownload.setDimensions({
      width: (fbMap?.width ?? DEFAULT_WIDTH) + GLOBAL_MARGIN.LEFT + GLOBAL_MARGIN.RIGHT,
      height: this.options.runningHeight + GLOBAL_MARGIN.TOP + GLOBAL_MARGIN.BOTTOM
    });
    this.fcFabricDownload.renderAll();
  }
  export() {
    if (!this.fcFabric) {
      return;
    }
    const now = /* @__PURE__ */ new Date();
    const fileName = this.config?.fileName || `map-carte - ${now.getFullYear()}-${now.getMonth()}-${now.getDay()}, ${now.getHours()}_${now.getMinutes()}`;
    FileSaver.saveAs(
      this.fcFabricDownload.toDataURL({
        format: "png",
        quality: 1
      }),
      `${fileName}.png`
    );
  }
}

const messages = {"en":{"export.title":"Export","export.alertName":"Export","export.download":"Download image","export.refresh":"Refresh","export.scaleBar.approx":"{0} approx.","export.menu":"Settings Menu","export.menu.component.title":"Title","export.menu.component.map":"Map","export.menu.component.mapElements":"North arrow and scalebar","export.menu.component.legend":"Legend","export.menu.component.footnote":"Footnote","export.menu.component.timestamp":"Timestamp"},"fr":{"export.title":"Exporter","export.alertName":"Exporter","export.download":"Télécharger l'image","export.refresh":"Rafraîchir","export.scaleBar.approx":"Environ {0}","export.menu":"Menu des paramètres","export.menu.component.title":"Titre","export.menu.component.map":"Carte","export.menu.component.mapElements":"Flèche du nord et échelle graphique","export.menu.component.legend":"Légende","export.menu.component.footnote":"Référence","export.menu.component.timestamp":"Horodatage"}};

class ExportFixture extends ExportAPI {
  initialized() {
    this.$iApi.fixture.add("export-title");
    this.$iApi.fixture.add("export-map");
    this.$iApi.fixture.add("export-legend");
    this.$iApi.fixture.add("export-northarrow");
    this.$iApi.fixture.add("export-scalebar");
    this.$iApi.fixture.add("export-timestamp");
    this.$iApi.fixture.add("export-footnote");
  }
  added() {
    this.$iApi.panel.register(
      {
        id: "export",
        config: {
          screens: {
            "export-screen": markRaw(_sfc_main)
          },
          style: {
            "flex-grow": "1",
            "max-width": "800px"
          },
          button: {
            tooltip: "export.title",
            // https://fonts.google.com/icons?selected=Material+Icons:layers&icon.query=export
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>'
          },
          alertName: "export.alertName"
        }
      },
      { i18n: { messages } }
    );
    this._parseConfig(this.config);
    const unwatch = this.$vApp.$watch(
      () => this.config,
      (value) => this._parseConfig(value)
    );
    this.removed = () => {
      unwatch();
      this.$iApi.fixture.get("export-title")?.remove();
      this.$iApi.fixture.get("export-map")?.remove();
      this.$iApi.fixture.get("export-legend")?.remove();
      this.$iApi.fixture.get("export-northarrow")?.remove();
      this.$iApi.fixture.get("export-scalebar")?.remove();
      this.$iApi.fixture.get("export-timestamp")?.remove();
      this.$iApi.fixture.get("export-footnote")?.remove();
      if (this.$iApi.fixture.get("appbar")) {
        const appbarStore = useAppbarStore(this.$vApp.$pinia);
        appbarStore.removeButton("export");
      }
      const exportStore = useExportStore(this.$vApp.$pinia);
      exportStore.$reset();
      this.$iApi.panel.remove("export");
    };
  }
}

export { ExportFixture as default };
