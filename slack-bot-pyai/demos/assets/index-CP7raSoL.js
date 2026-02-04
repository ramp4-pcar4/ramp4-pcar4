const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./fabric-DHxkKQiG.js","./main-48Jy8Lgr.js","./preload-helper-dJJaZANz.js","./main-BjH693uE.css","./index-Co1PZqNC.js","./index-BZyc2UE3.js","./index-Dmjw0yck.js","./index-fgi3UqHN.js","./index-CqdP2I3A.js","./index-Bg3kNHp9.js","./index-CHCfmLfK.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { iS as commonjsGlobal, iT as getDefaultExportFromCjs, bA as FixtureInstance, fF as useExportStore, he as markRaw, fO as GlobalEvents, hf as useAppbarStore } from './main-48Jy8Lgr.js';
import { _ as _sfc_main } from './screen.vue_vue_type_script_setup_true_lang-3H0NCJff.js';

var FileSaver_min = {exports: {}};

(function (module, exports) {
	(function(a,b){b();})(commonjsGlobal,function(){function b(a,b){return "undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c);},d.onerror=function(){console.error("could not download file");},d.send();}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send();}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"));}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b);}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof commonjsGlobal&&commonjsGlobal.global===commonjsGlobal?commonjsGlobal:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href);},4E4),setTimeout(function(){e(j);},0));}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else {var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i);});}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null;},k.readAsDataURL(b);}else {var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m);},4E4);}});f.saveAs=g.saveAs=g,(module.exports=g);});

	
} (FileSaver_min));

var FileSaver_minExports = FileSaver_min.exports;
const FileSaver = /*@__PURE__*/getDefaultExportFromCjs(FileSaver_minExports);

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
  // stores the custom render function if provided
  customRendererFunc = void 0;
  /**
   * Allows for a custom render callback function to be passed in to render the export canvas.
   * The function should accept the blank ramp canvas as its first parameter and use that canvas to draw on.
   * The width of the canvas is already set to the panel width, so the function only needs to set the height.
   *
   * Individual export elements like the map or the legend can be accessed from the `fabricObjects` object as the second parameter.
   * You can pick and chose which elements to add to the canvas, or modify them as needed. You can also add custom elements to the canvas.
   *
   * Finally, the `options` object is passed in as the third parameter. This object contains useful information such as the panel width, the default margins, the default canvas width, and the fabric object itself.
   *
   * Some canvas operations are asynchronous like fetching an image or cloning objects. In these cases you should return a promise so ramp waits for your operations to complete, otherwise returning nothing (void) is fine.
   *
   * ramp uses Fabric.js instead of the native canvas API. Read more about Fabric.js here: [Fabric.js](http://fabricjs.com/)
   *
   * @param {RenderCallback} renderCallback
   * @example myWatermarkingRenderer((canvas, fabricObjects, options) => {
   *   const watermark = new fabric.Text('Watermark', { ... });
   *   fabricObjects.map.addWithUpdate(watermark);
   *   canvas.add(fabricObjects.map);
   *   canvas.setHeight(1000);
   * });
   *
   * rInstance.fixture.isLoaded('export').then(() => {
   *   rInstance.fixture.get('export').customRenderer(myWatermarkingRenderer);
   * });
   * @memberof ExportAPI
   */
  customRenderer(renderCallback) {
    this.customRendererFunc = renderCallback;
  }
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
    if (!exportConfig) return;
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
    const { fabric } = await __vitePreload(async () => { const { fabric } = await import('./fabric-DHxkKQiG.js').then(n => n.f);return { fabric }},true?__vite__mapDeps([0,1,2,3]):void 0,import.meta.url);
    fabric.Object.prototype.objectCaching = false;
    const exportStore = useExportStore(this.$vApp.$pinia);
    const selectedFabricObjects = {};
    this.fcFabric = new fabric.StaticCanvas(canvas, {
      backgroundColor: "#fff"
    });
    this.fcFabricDownload = new fabric.StaticCanvas(null, {
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
      selectedFabricObjects.title = fbTitle;
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
      selectedFabricObjects.map = fbMap;
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
      selectedFabricObjects.scaleBar = fbScaleBar;
      if (exportNorthArrowFixture) {
        fbNorthArrow = await exportNorthArrowFixture.make({
          top: fbScaleBar.top,
          left: panelWidth / this.options.scale
        });
        fbNorthArrow.top += fbNorthArrow.height / 2 - 20;
        fbNorthArrow.left += -fbNorthArrow.width * 2;
        selectedFabricObjects.northArrow = fbNorthArrow;
      }
    }
    if (selectedState.legend && exportLegendFixture) {
      fbLegend = await exportLegendFixture.make({
        width: exportLegendFixture.config?.columnWidth ?? fbMap?.width ?? DEFAULT_WIDTH
      });
      fbLegend.top = this.options.runningHeight;
      this.options.runningHeight += fbLegend.height;
      selectedFabricObjects.legend = fbLegend;
    }
    if (selectedState.timestamp && exportTimestampFixture) {
      fbTimestamp = await exportTimestampFixture.make({
        top: this.options.runningHeight + 40,
        width: panelWidth
      });
      this.options.runningHeight += !selectedState.footnote || !exportFootnoteFixture ? fbTimestamp.height + 40 : fbTimestamp.height + 20;
      selectedFabricObjects.timestamp = fbTimestamp;
    }
    if (selectedState.footnote && exportFootnoteFixture) {
      fbFootnote = await exportFootnoteFixture.make({
        top: this.options.runningHeight - 2.5,
        // Magic number 2.5 prevents weird vertical offset between timestamp/footer
        left: panelWidth / this.options.scale + 40
      });
      const BUFFER = 30;
      if (selectedState.timestamp && exportTimestampFixture) {
        if (panelWidth - selectedFabricObjects.timestamp.getMinWidth() <= fbFootnote.getMinWidth() + BUFFER) {
          fbFootnote.top += 30;
          fbFootnote.left = 0;
          fbFootnote.originX = "left";
          this.options.runningHeight += 20;
        } else {
          fbFootnote.left += -fbFootnote.width * 2;
        }
      } else {
        fbFootnote.top += 20;
        fbFootnote.left += -fbFootnote.width * 2;
        this.options.runningHeight += 20;
      }
      this.options.runningHeight += fbFootnote.height;
      selectedFabricObjects.footnote = fbFootnote;
    }
    if (this.customRendererFunc) {
      this.fcFabric.setWidth(panelWidth);
      const options = {
        panelWidth,
        margin: GLOBAL_MARGIN,
        defaultWidth: DEFAULT_WIDTH,
        fabric
      };
      await this.customRendererFunc(this.fcFabric, selectedFabricObjects, options);
      this.fcFabric.renderAll();
      this.fcFabric.clone((clonedCanvas) => {
        this.fcFabricDownload = clonedCanvas;
        this.fcFabricDownload.setDimensions({
          width: this.fcFabric?.getWidth(),
          height: this.fcFabric.getHeight()
        });
        this.fcFabricDownload.renderAll();
      });
    } else {
      const fbGroup = new fabric.Group(Object.values(selectedFabricObjects), {
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
  }
  async needed() {
    const exportTitle = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./index-Co1PZqNC.js');return { default: __vite_default__ }},true?__vite__mapDeps([4,0,1,2,3]):void 0,import.meta.url)).default;
    const exportMap = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./index-BZyc2UE3.js');return { default: __vite_default__ }},true?__vite__mapDeps([5,0,1,2,3]):void 0,import.meta.url)).default;
    const exportLegend = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./index-Dmjw0yck.js');return { default: __vite_default__ }},true?__vite__mapDeps([6,1,2,3,0]):void 0,import.meta.url)).default;
    const exportNorthArrow = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./index-fgi3UqHN.js');return { default: __vite_default__ }},true?__vite__mapDeps([7,0,1,2,3]):void 0,import.meta.url)).default;
    const exportScalebar = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./index-CqdP2I3A.js');return { default: __vite_default__ }},true?__vite__mapDeps([8,0,1,2,3]):void 0,import.meta.url)).default;
    const exportTimestamp = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./index-Bg3kNHp9.js');return { default: __vite_default__ }},true?__vite__mapDeps([9,0,1,2,3]):void 0,import.meta.url)).default;
    const exportFootnote = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./index-CHCfmLfK.js');return { default: __vite_default__ }},true?__vite__mapDeps([10,0,1,2,3]):void 0,import.meta.url)).default;
    this.$iApi.fixture.add("export-title", exportTitle);
    this.$iApi.fixture.add("export-map", exportMap);
    this.$iApi.fixture.add("export-legend", exportLegend);
    this.$iApi.fixture.add("export-northarrow", exportNorthArrow);
    this.$iApi.fixture.add("export-scalebar", exportScalebar);
    this.$iApi.fixture.add("export-timestamp", exportTimestamp);
    this.$iApi.fixture.add("export-footnote", exportFootnote);
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
    const neededHandler = this.$iApi.event.on(GlobalEvents.PANEL_OPENED, async (panel) => {
      if (panel.id === "export") {
        this.$iApi.event.off(neededHandler);
        await this.needed();
        panel.exportMake();
      }
    });
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
      if (this.$iApi.fixture.exists("appbar")) {
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
