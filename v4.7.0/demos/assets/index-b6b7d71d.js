import { kn as CommonMapAPI, iG as LayerType, ko as useOverviewmapStore, he as markRaw, kp as X, iK as Graphic, kq as PolygonStyle, ir as useConfigStore, kr as Basemap, bB as FixtureInstance, bG as defineComponent, bH as useI18n, bI as inject, fF as ref, bJ as computed, iv as reactive, fJ as onMounted, fO as GlobalEvents, fG as debounce, fK as onBeforeUnmount, bL as resolveDirective, bM as openBlock, bU as createElementBlock, fE as createBaseVNode, fD as normalizeClass, bT as withDirectives, bR as unref, iM as normalizeStyle, i8 as pushScopeId, i9 as popScopeId, ia as _export_sfc } from './main-b03b5063.js';
import './preload-helper-a4975f27.js';

class OverviewMapAPI extends CommonMapAPI {
  overviewGraphicLayer;
  overviewmapStore;
  /**
   * @constructor
   * @param {InstanceAPI} iApi the RAMP instance
   */
  constructor(iApi) {
    super(iApi);
    this.overviewGraphicLayer = this.$iApi.geo.layer.createLayer({
      id: "RampOverviewGraphic",
      layerType: LayerType.GRAPHIC,
      url: "",
      cosmetic: true
    });
    this.overviewmapStore = useOverviewmapStore(this.$vApp.$pinia);
  }
  /**
   * Will generate a ESRI map view and add it to the page
   * Must provide the basemap or basemap id to be used when creating the map view
   *
   * @param {string | Basemap} basemap the id of the basemap that should be used when creating the map view
   * @protected
   */
  createMapView(basemap) {
    if (!basemap) {
      throw new Error(
        "Attempted to create overview map view without a basemap"
      );
    }
    const bm = typeof basemap === "string" ? this.findBasemap(basemap) : basemap;
    this.applyBasemap(bm);
    this._rampExtentSet = this.$iApi.geo.map.getExtentSet().clone();
    this._rampSR = this._rampExtentSet.sr.clone();
    const expandFactor = this.overviewmapStore.expandFactor;
    this.esriView = markRaw(
      new X({
        map: this.esriMap,
        container: this._targetDiv,
        constraints: {
          rotationEnabled: false
        },
        spatialReference: this._rampSR.toESRI(),
        extent: this.$iApi.geo.map.getExtent().toESRI().expand(expandFactor)
        // use the expanded main map extent
      })
    );
    this.esriView.ui.components = [];
    this.handlers.push({
      type: "mouse-wheel",
      handler: this.esriView.on("mouse-wheel", (esriMouseWheel) => {
        esriMouseWheel.stopPropagation();
      })
    });
    this.handlers.push({
      type: "double-click",
      handler: this.esriView.on("double-click", (esriDoubleClick) => {
        esriDoubleClick.stopPropagation();
      })
    });
    this.handlers.push({
      type: "key-down",
      handler: this.esriView.on("key-down", (esriKeyDown) => {
        esriKeyDown.stopPropagation();
      })
    });
    this.handlers.push({
      type: "key-up",
      handler: this.esriView.on("key-up", (esriKeyUp) => {
        esriKeyUp.stopPropagation();
      })
    });
    this.handlers.push({
      type: "drag",
      handler: this.esriView.on("drag", (esriDrag) => {
        esriDrag.stopPropagation();
        this.mapDrag(esriDrag);
      })
    });
    this.esriView.container.addEventListener("touchmove", (e) => {
      e.preventDefault();
    });
    this.esriView.watch("fatalError", () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.esriView?.tryFatalErrorRecovery();
            observer.disconnect();
          }
        });
      });
      observer.observe(this.esriView.container);
    });
    this.esriView.when(() => {
      this._viewPromise.resolveMe();
      this.created = true;
    });
  }
  async addMapGraphicLayer() {
    if (!this.esriMap) {
      this.noMapErr();
      return;
    }
    const overviewGraphic = new Graphic(
      this.$iApi.geo.map.getExtent(),
      "overview-graphic"
    );
    const borderColour = this.overviewmapStore.borderColour ?? "#FF0000";
    const borderWidth = this.overviewmapStore.borderWidth ?? 1;
    const areaColour = this.overviewmapStore.areaColour ?? "#000000";
    const areaOpacity = this.overviewmapStore.areaOpacity ?? 0.25;
    const areaFill = `${areaColour}${Math.round(areaOpacity * 255).toString(
      16
    )}`;
    overviewGraphic.style = new PolygonStyle({
      fill: { colour: areaFill },
      outline: {
        colour: borderColour,
        width: borderWidth
      }
    });
    await this.overviewGraphicLayer.initiate();
    await this.overviewGraphicLayer.addGraphic(overviewGraphic);
    this.esriMap?.add(this.overviewGraphicLayer.esriLayer);
  }
  async removeMapGraphicLayer() {
    if (!this.esriMap) {
      this.noMapErr();
      return;
    }
    if (!this.overviewGraphicLayer.esriLayer) {
      throw new Error(
        "Attempted to remove layer from the map without an esri layer. Likely layer.initiate() was not called or had not finished."
      );
    }
    this.overviewGraphicLayer.removeGraphic();
    await this.overviewGraphicLayer.terminate();
    this.esriMap.remove(this.overviewGraphicLayer.esriLayer);
  }
  /**
   * Destroys the ESRI map view
   *
   * @protected
   */
  destroyMapView() {
    this.esriView?.container.removeEventListener("touchmove", (e) => {
      e.preventDefault();
    });
    super.destroyMapView();
  }
  /**
   * Searches the local basemap list and main map basemaps for a basemap with the given id
   * Throws error if basemap could not be found
   *
   * @param {string} id basemap id
   * @returns {Basemap} the found basemap
   * @protected
   */
  findBasemap(id) {
    const bm = this._basemapStore.find(
      (bms) => bms.id === id
    );
    if (bm) {
      return bm;
    } else {
      const configStore = useConfigStore(this.$vApp.$pinia);
      const mainMapConfig = configStore.config.map;
      if (mainMapConfig) {
        const bmConfig = mainMapConfig.basemaps.find(
          (bm2) => bm2.id === id
        );
        if (bmConfig) {
          return new Basemap(bmConfig);
        }
      }
    }
    throw new Error(`Invalid basemap id requested: ${id}`);
  }
  /**
   * Sets the overview map's basemap to the basemap with the given id.
   * Will refresh the map view if set basemap uses different tile schema.
   *
   * Should only be called by the overview map component
   *
   * @param {string} basemapId the basemap id
   * @returns {boolean} indicates if the schema has changed
   */
  setBasemap(basemapId) {
    if (!this.esriView || !this.esriMap) {
      this.noMapErr();
      return false;
    }
    const bm = this.findBasemap(basemapId);
    const currBm = this.getCurrentBasemapId() ? this.findBasemap(this.getCurrentBasemapId()) : void 0;
    const differentSchema = currBm?.tileSchemaId !== bm.tileSchemaId;
    if (differentSchema) {
      this.destroyMapView();
      this.createMapView(bm);
    } else {
      this.applyBasemap(bm);
    }
    return differentSchema;
  }
  /**
   * Initial esri extent of graphic during drag
   *
   * @private
   */
  startExtent = null;
  /**
   * Moves graphic and zooms main map if extent graphic is dragged
   *
   * @param {__esri.ViewDragEvent} esriDrag
   * @private
   */
  async mapDrag(esriDrag) {
    if (esriDrag.native.pointerType === "mouse") {
      if (esriDrag.action === "start") {
        if (await this.cursorHitTest(esriDrag)) {
          this.startExtent = markRaw(
            this.overviewGraphicLayer.getEsriGraphic(
              "overview-graphic"
            ).geometry
          );
        }
      } else if (this.startExtent) {
        const origin = this.esriView.toMap(esriDrag.origin);
        const pos = this.esriView.toMap({
          x: esriDrag.x,
          y: esriDrag.y
        });
        const newExtent = this.startExtent.clone().offset(pos.x - origin.x, pos.y - origin.y, 0);
        this.overviewGraphicLayer.getEsriGraphic(
          "overview-graphic"
        ).geometry = newExtent;
        if (esriDrag.action === "end") {
          this.$iApi.geo.map.zoomMapTo(
            this.$iApi.geo.geom.geomEsriToRamp(newExtent),
            void 0,
            false
          );
          this.startExtent = null;
        }
      }
    }
  }
  /**
   * Updates overviewmap extent and graphic based on main map extent
   *
   * @param {Extent} newExtent new main map extent
   * @returns {Promise<void>} A promise that resolves when the overviewmap has finished updating
   */
  updateOverview(newExtent) {
    const expandFactor = this.overviewmapStore.expandFactor;
    const zoomPromise = this.zoomMapTo(
      newExtent.expand(expandFactor),
      void 0,
      false
    );
    const graphic = this.overviewGraphicLayer.getLocalGraphic("overview-graphic");
    this.overviewGraphicLayer.removeGraphic(graphic);
    graphic.geometry = newExtent;
    this.overviewGraphicLayer.addGraphic(graphic);
    return zoomPromise;
  }
  /**
   * Checks if mouse event intersects with extent graphic
   *
   * @param {MouseEvent} e
   * @returns {Promise<boolean>}
   */
  async cursorHitTest(e) {
    const hitTestResult = await this.esriView.hitTest(e);
    return hitTestResult.results.length > 0;
  }
}

class OverviewmapAPI extends FixtureInstance {
  /**
   * Parses the overview map config JSON snippet from the config file and save to the fixture store.
   *
   * @param {OverviewmapConfig} [OverviewmapConfig]
   * @memberof OverviewmapAPI
   */
  _parseConfig(overviewmapConfig) {
    const overviewmapStore = useOverviewmapStore(this.$vApp.$pinia);
    overviewmapStore.basemaps = overviewmapConfig?.basemaps || {};
    overviewmapStore.mapConfig.basemaps = overviewmapConfig ? Object.values(overviewmapConfig.basemaps) : [];
    overviewmapStore.startMinimized = overviewmapConfig?.startMinimized ?? true;
    overviewmapStore.expandFactor = overviewmapConfig?.expandFactor ?? 1.5;
    overviewmapStore.borderColour = overviewmapConfig?.borderColour ?? "#FF0000";
    overviewmapStore.borderWidth = overviewmapConfig?.borderWidth ?? 1;
    overviewmapStore.areaColour = overviewmapConfig?.areaColour ?? "#000000";
    overviewmapStore.areaOpacity = overviewmapConfig?.areaOpacity ?? 0.25;
  }
  get config() {
    return super.config;
  }
}

const _withScopeId = (n) => (pushScopeId("data-v-fd73e82c"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "relative h-full w-full overflow-hidden" };
const _hoisted_2 = { class: "absolute h-30 w-30 top-0 right-0" };
const _hoisted_3 = ["content", "aria-label"];
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("g", { id: "apple-keyboard-control" }, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M 19.7782,11.7782L 18.364,13.1924L 12,6.82843L 5.63604,13.1924L 4.22183,11.7782L 12,4L 19.7782,11.7782 Z " })
], -1));
const _hoisted_5 = [
  _hoisted_4
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "overviewmap",
  setup(__props) {
    const overviewmapStore = useOverviewmapStore();
    const { t } = useI18n();
    const iApi = inject("iApi");
    const configStore = useConfigStore();
    const el = ref();
    const activeBasemap = computed(
      () => configStore.activeBasemapConfig
    );
    const mapConfig = computed(() => overviewmapStore.mapConfig);
    const basemaps = computed(
      () => overviewmapStore.basemaps
    );
    const startMinimized = computed(() => overviewmapStore.startMinimized);
    let overviewMap = reactive(new OverviewMapAPI(iApi));
    const minimized = ref(true);
    const hoverOnExtent = ref(false);
    const handlers = reactive([]);
    onMounted(() => {
      iApi.geo.map.viewPromise.then(async () => {
        _adaptBasemap();
        overviewMap.createMap(
          mapConfig.value,
          el.value.querySelector(".overviewmap")
        );
        await overviewMap.viewPromise;
        await overviewMap.addMapGraphicLayer();
        minimized.value = startMinimized.value;
        let updatePromise = overviewMap.updateOverview(
          iApi.geo.map.getExtent()
        );
        handlers.push(
          iApi.event.on(
            GlobalEvents.MAP_EXTENTCHANGE,
            debounce(100, (newExtent) => {
              updatePromise.then(() => {
                overviewMap.updateOverview(newExtent);
              });
            })
          )
        );
        handlers.push(
          iApi.event.on(GlobalEvents.MAP_CREATED, () => {
            _adaptBasemap();
          })
        );
        handlers.push(
          iApi.event.on(GlobalEvents.MAP_REFRESH_END, () => {
            _adaptBasemap();
          })
        );
        handlers.push(
          iApi.event.on(
            GlobalEvents.MAP_BASEMAPCHANGE,
            async (payload) => {
              if (!payload.schemaChanged && overviewMap.created) {
                if (activeBasemap.value && basemaps.value[activeBasemap.value.tileSchemaId] === void 0) {
                  await overviewMap.removeMapGraphicLayer();
                  overviewMap.setBasemap(payload.basemapId);
                  await overviewMap.addMapGraphicLayer();
                }
              }
            }
          )
        );
      });
    });
    onBeforeUnmount(() => {
      handlers.forEach((handler) => iApi.event.off(handler));
      overviewMap.destroyMap();
    });
    const cursorHitTest = async (e) => {
      hoverOnExtent.value = !minimized.value && await overviewMap.cursorHitTest(e);
    };
    const mapStyle = () => {
      return {
        height: `${minimized.value ? 48 : 200}px`,
        width: `${minimized.value ? 48 : 200}px`
      };
    };
    const toggleStyle = () => {
      return {
        top: `${minimized.value ? -6 : -3}px`,
        right: `${minimized.value ? -6 : -3}px`,
        transform: `rotate(${minimized.value ? 225 : 45}deg)`
      };
    };
    const _adaptBasemap = () => {
      if (!activeBasemap.value) {
        console.error(
          "Overview Map could not obtain the basemap config used by the main map"
        );
        return;
      }
      try {
        const tileSchemaId = activeBasemap.value?.tileSchemaId;
        if (!tileSchemaId) {
          throw new Error(
            "Overview Map could not obtain the tile schema of the main map"
          );
        }
        const basemap = basemaps.value[tileSchemaId];
        if (!basemap) {
          throw new Error(
            "Overview Map could not find a suitable basemap that matches the tile schema of the main map"
          );
        }
        if (!overviewMap.created) {
          overviewmapStore.updateInitialBasemap(basemap.id);
        }
        if (overviewMap.created) {
          overviewMap.viewPromise.then(
            () => overviewMap.setBasemap(basemap.id)
          );
        }
      } catch (err) {
        if (!overviewMap.created) {
          overviewmapStore.updateInitialBasemap(activeBasemap.value.id);
        }
        overviewMap.viewPromise.then(
          () => overviewMap.setBasemap(activeBasemap.value.id)
        );
      }
    };
    return (_ctx, _cache) => {
      const _directive_tippy = resolveDirective("tippy");
      return openBlock(), createElementBlock("div", {
        class: "relative",
        ref_key: "el",
        ref: el
      }, [
        createBaseVNode("div", {
          style: normalizeStyle(mapStyle()),
          class: "pointer-events-auto absolute top-0 right-0 mt-12 mr-12 shadow-tm border-4 border-solid border-white bg-white transition-all duration-300 ease-out"
        }, [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", {
              class: normalizeClass(["overviewmap absolute top-0 right-0 h-192 w-192", { "cursor-move": hoverOnExtent.value }]),
              onMousemove: cursorHitTest
            }, null, 34)
          ]),
          createBaseVNode("div", _hoisted_2, [
            withDirectives((openBlock(), createElementBlock("button", {
              type: "button",
              tabindex: "0",
              class: "cursor-pointer absolute h-full w-full",
              onClick: _cache[0] || (_cache[0] = ($event) => minimized.value = !minimized.value),
              content: unref(t)(
                minimized.value ? "overviewmap.expand" : "overviewmap.minimize"
              ),
              "aria-label": unref(t)(
                minimized.value ? "overviewmap.expand" : "overviewmap.minimize"
              )
            }, [
              (openBlock(), createElementBlock("svg", {
                class: "absolute fill-current text-gray-500 transition-all duration-300 ease-out",
                style: normalizeStyle(toggleStyle()),
                xmlns: "http://www.w3.org/2000/svg",
                fit: "",
                height: "100%",
                width: "100%",
                preserveAspectRatio: "xMidYMid meet",
                viewBox: "0 0 24 24",
                focusable: "false"
              }, _hoisted_5, 4))
            ], 8, _hoisted_3)), [
              [_directive_tippy, { placement: "left", hideOnClick: false }]
            ])
          ])
        ], 4)
      ], 512);
    };
  }
});

const overviewmap_vue_vue_type_style_index_0_scoped_fd73e82c_lang = '';

const OverviewmapV = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fd73e82c"]]);

const messages = {"en":{"overviewmap.expand":"Expand Overview","overviewmap.minimize":"Minimize Overview"},"fr":{"overviewmap.expand":"Développer l'aperçu","overviewmap.minimize":"Réduire l'aperçu"}};

class OverviewmapFixture extends OverviewmapAPI {
  added() {
    Object.entries(messages).forEach(
      (value) => this.$iApi.$i18n.mergeLocaleMessage(...value)
    );
    this._parseConfig(this.config);
    const unwatch = this.$vApp.$watch(
      () => this.config,
      (value) => this._parseConfig(value)
    );
    const { destroy, el } = this.mount(OverviewmapV, {
      app: this.$element
    });
    const innerShell = this.$vApp.$el.getElementsByClassName("inner-shell")[0];
    innerShell.appendChild(el.childNodes[0]);
    this.removed = () => {
      unwatch();
      destroy();
      const overviewmapStore = useOverviewmapStore(this.$vApp.$pinia);
      overviewmapStore.$reset();
    };
  }
}

export { OverviewmapFixture as default };
