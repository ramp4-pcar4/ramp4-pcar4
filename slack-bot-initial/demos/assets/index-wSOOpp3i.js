import { iL as APIScope, jZ as CommonGraphicLayer, fO as GlobalEvents, ip as useConfigStore, iF as LayerType, j_ as TileLayer, j$ as GraphicLayer, bA as FixtureInstance } from './main-h0RsJOaN.js';
import { H as HilightMode, a as HILIGHT_LAYER_NAME, F as FOG_HILIGHT_LAYER_NAME, D as DEFAULT_CONFIG } from './hilight-defs-BwAFwTg8.js';
import './preload-helper-dJJaZANz.js';

class BaseHilightMode extends APIScope {
  config = {};
  mode = HilightMode.NONE;
  constructor(config, iApi) {
    super(iApi);
    this.config = config;
    this.mode = config.mode;
  }
  /**
   * Adds the given graphics to the hilighter.
   *
   * @param {Graphic | Array<Graphic>} graphics one or more RAMP Graphics to hilight
   * @returns {Promise} resolves when graphics have been added
   */
  async add(graphics) {
    this.notImplementedError("addGraphics");
  }
  /**
   * Removes the given graphics from the hilighter. No parmeter removes all graphics.
   *
   * @param {Graphic | Array<Graphic> | undefined} graphics one or more RAMP Graphics to remove
   * @returns {Promise} resolves when graphics have been added
   */
  async remove(graphics) {
    this.notImplementedError("removeGraphics");
  }
  /**
   * Reload the provided graphics that are currently highlighted.
   *
   * @param {Graphic | Array<Graphic>} graphics one or more RAMP Graphics to reload
   * @returns {Promise} resolves when graphics have been reloaded
   */
  async reloadHilight(graphics) {
    this.notImplementedError("reloadHilight");
  }
  /**
   * Returns the Hilight layer, if it exists.
   *
   * @returns {Promise<CommonGraphicLayer | undefined>}
   */
  async getHilightLayer() {
    const hilightLayer = await this.layerFetcher();
    if (hilightLayer) {
      if (hilightLayer.isLoaded && hilightLayer instanceof CommonGraphicLayer) {
        return hilightLayer;
      } else {
        console.warn("Hilight layer exists but is in bad form.");
        return void 0;
      }
    } else {
      console.warn("Hilight layer could not be fetched.");
      return void 0;
    }
  }
  notImplementedError(method) {
    console.warn(`Hilight mode method ${method} was not implemented by subclass.`);
  }
  /**
   * Provides a short grace period to avoid scenarios where the layer is still getting created.
   * Not overly long, as the highlight layer is a local graphics layer so no server lag involved.
   *
   * @returns Promise resolving in the LayerInstace, or undefined if we could not locate the layer.
   */
  layerFetcher() {
    const precheckLayer = this.$iApi.geo.layer.getLayer(HILIGHT_LAYER_NAME);
    if (precheckLayer) {
      return Promise.resolve(precheckLayer);
    } else {
      return new Promise((resolve) => {
        let timeElapsed = 0;
        const layerWatcher = setInterval(() => {
          const layer = this.$iApi.geo.layer.getLayer(HILIGHT_LAYER_NAME);
          if (layer) {
            clearInterval(layerWatcher);
            resolve(layer);
          } else {
            timeElapsed += 125;
            if (timeElapsed >= 1125) {
              clearInterval(layerWatcher);
              resolve(void 0);
              return;
            }
          }
        }, 125);
      });
    }
  }
}

class LiftHilightMode extends BaseHilightMode {
  async add(graphics) {
    const hilightLayer = await this.getHilightLayer();
    if (!hilightLayer) {
      return;
    }
    await hilightLayer.addGraphic(graphics);
  }
  async remove(graphics) {
    const hilightLayer = await this.getHilightLayer();
    if (!hilightLayer) {
      return;
    }
    hilightLayer.removeGraphic(graphics);
  }
  async reloadHilight(graphics) {
    await this.remove(graphics);
    await this.add(graphics);
  }
}

class FogHilightMode extends LiftHilightMode {
  handlers = [];
  // TODO: make these configurable later
  // See https://github.com/ramp4-pcar4/ramp4-pcar4/issues/1353
  onOpacity;
  offOpacity;
  lastAdd = 0;
  constructor(config, iApi) {
    super(config, iApi);
    this.onOpacity = config.options?.onOpacity ?? 0.75;
    this.offOpacity = config.options?.offOpacity > 0.02 ? config.options.offOpacity : 0.02;
    if (this.$iApi.geo.map.created) {
      this.hilightSetup();
    } else {
      this.handlers.push(
        this.$iApi.event.on(GlobalEvents.MAP_CREATED, () => {
          this.hilightSetup();
        })
      );
    }
    this.handlers.push(
      this.$iApi.event.on(GlobalEvents.MAP_BASEMAPCHANGE, () => {
        this.getHilightLayer().then((hilightLayer) => {
          if (hilightLayer && hilightLayer.graphics.length === 0) {
            this.updateFogLayer();
          }
        });
      })
    );
  }
  async hilightSetup() {
    const mapConfig = useConfigStore(this.$vApp.$pinia).activeBasemapConfig;
    try {
      const fogLayer = this.$iApi.geo.layer.createLayer({
        id: FOG_HILIGHT_LAYER_NAME,
        layerType: LayerType.TILE,
        cosmetic: true,
        // TODO: what if there's more than 1 URL provided?
        // See https://github.com/ramp4-pcar4/ramp4-pcar4/discussions/1352
        url: mapConfig.layers[0].url
      });
      await this.$iApi.geo.map.addLayer(fogLayer);
      fogLayer.opacity = this.offOpacity;
      await this.reorderFogLayer();
    } catch {
      console.error("Something went wrong while setting up the hilighter.");
    }
  }
  async updateFogLayer() {
    this.$iApi.geo.map.removeLayer(FOG_HILIGHT_LAYER_NAME);
    await this.hilightSetup();
  }
  async reorderFogLayer() {
    const fogLayer = this.getFogLayer();
    const hilightLayer = await this.getHilightLayer();
    if (!hilightLayer || !fogLayer) {
      return;
    }
    const layerOrder = this.$iApi.geo.layer.layerOrderIds();
    const fogIdx = layerOrder.indexOf(fogLayer.id);
    const hilightIdx = layerOrder.indexOf(hilightLayer.id);
    if (hilightIdx < fogIdx && hilightIdx > -1 && fogIdx > -1) {
      this.$iApi.geo.map.reorder(hilightLayer, fogIdx, false);
    }
  }
  async add(graphics) {
    this.lastAdd = Date.now();
    const fogLayer = this.getFogLayer();
    if (!fogLayer) {
      return;
    }
    fogLayer.opacity = this.onOpacity;
    await super.add(graphics);
  }
  async remove(graphics) {
    await super.remove(graphics);
    const fogLayer = this.getFogLayer();
    if (!fogLayer) {
      return;
    }
    const lastRemove = Date.now();
    const hilightLayer = await this.getHilightLayer();
    if (!hilightLayer) {
      return;
    }
    setTimeout(() => {
      if (this.lastAdd < lastRemove && !hilightLayer.getGraphicCount()) {
        fogLayer.opacity = this.offOpacity;
      }
    }, 300);
  }
  async reloadHilight(graphics) {
    await this.updateFogLayer();
    await super.reloadHilight(graphics);
  }
  /**
   * Returns the "fog" tile layer.
   */
  getFogLayer() {
    const hilightLayer = this.$iApi.geo.layer.getLayer(FOG_HILIGHT_LAYER_NAME);
    if (hilightLayer && hilightLayer instanceof TileLayer) {
      return hilightLayer;
    } else {
      console.warn("Hilight fog layer could not be fetched.");
      return void 0;
    }
  }
}

class GlowHilightMode extends LiftHilightMode {
  handlers = [];
  constructor(config, iApi) {
    super(config, iApi);
    this.hilightSetup(config);
    this.handlers.push(
      this.$iApi.event.on(GlobalEvents.MAP_CREATED, () => {
        this.hilightSetup(config);
      })
    );
  }
  hilightSetup(config) {
    this.$iApi.geo.map.viewPromise.then(() => {
      this.$iApi.geo.map.esriView.highlightOptions = config.options;
    });
  }
  async add(graphics) {
    await super.add(graphics);
    const hilightLayer = this.$iApi.geo.layer.getLayer(HILIGHT_LAYER_NAME);
    if (hilightLayer && hilightLayer.esriLayer && hilightLayer.isLoaded && hilightLayer instanceof GraphicLayer) {
      const gs = graphics instanceof Array ? graphics : [graphics];
      this.$iApi.geo.map.esriView?.whenLayerView(hilightLayer.esriLayer)?.then(function(layerView) {
        layerView.highlight(gs.map((g) => hilightLayer.getEsriGraphic(g.id)));
      });
    }
  }
  async remove(graphics) {
    await super.remove(graphics);
    return;
  }
}

class HilightAPI extends FixtureInstance {
  hilightMode = new BaseHilightMode({}, this.$iApi);
  initialized() {
    this.initHilightLayer();
  }
  _parseConfig(hilightConfig) {
    if (hilightConfig) {
      switch (hilightConfig.mode) {
        case HilightMode.NONE:
          this.hilightMode = new BaseHilightMode(hilightConfig, this.$iApi);
          break;
        case HilightMode.GLOW:
          this.hilightMode = new GlowHilightMode(hilightConfig, this.$iApi);
          break;
        case HilightMode.LIFT:
          this.hilightMode = new LiftHilightMode(hilightConfig, this.$iApi);
          break;
        case HilightMode.FOG:
          this.hilightMode = new FogHilightMode(hilightConfig, this.$iApi);
          break;
        default:
          console.error("Could not find hilight mode:", hilightConfig.mode);
          break;
      }
    } else {
      this.hilightMode = new GlowHilightMode(DEFAULT_CONFIG, this.$iApi);
    }
  }
  /**
   * Initialize the Hilight layer.
   *
   * @returns {Promise} resolves when layer is initialized
   */
  async initHilightLayer() {
    const hilightLayer = this.$iApi.geo.layer.createLayer({
      id: HILIGHT_LAYER_NAME,
      layerType: LayerType.GRAPHIC,
      cosmetic: true,
      url: ""
    });
    await this.$iApi.geo.map.addLayer(hilightLayer);
  }
  /**
   * Add the given Graphics to the Hilighter
   *
   * @param {Graphic | Array<Graphic>} graphics Graphics to add
   * @returns {Promise} resolves when graphics have been added
   */
  async addHilight(graphics) {
    const gs = graphics instanceof Array ? graphics : [graphics];
    await this.hilightMode.add(gs);
  }
  /**
   * Remove the given Graphics from the Hilighter. If no graphics are provided,
   * all highlighted items will be removed.
   *
   * @param {Graphic | Array<Graphic> | undefined} graphics Graphics to remove
   * @returns {Promise} resolves when graphics have been removed
   */
  async removeHilight(graphics) {
    const gs = graphics ? graphics instanceof Array ? graphics : [graphics] : void 0;
    await this.hilightMode.remove(gs);
  }
  /**
   * Reload the provided graphics that are currently highlighted.
   *
   * @param {Array<Graphic> | Graphic} graphics
   */
  async reloadHilight(graphics) {
    const gs = graphics instanceof Array ? graphics : [graphics];
    await this.hilightMode.reloadHilight(gs);
  }
  /**
   * Return all Graphics that match the given origin/uid/oid
   *
   * @param origin Graphic origin
   * @param uid Associated layer UID of the Graphic
   * @param oid Associated OID of the Graphic
   */
  async getGraphicsByKey(origin, uid, oid) {
    const hilightLayer = await this.getHilightLayer();
    if (!hilightLayer) {
      return [];
    }
    let keys = hilightLayer.graphics.map((g) => ({
      ...this.deconstructGraphicKey(g.id),
      og: g
    }));
    if (origin) {
      keys = keys.filter((k) => k.origin === origin);
    }
    if (uid) {
      keys = keys.filter((k) => k.uid === uid);
    }
    if (oid) {
      keys = keys.filter((k) => k.oid === oid);
    }
    return keys.map((k) => k.og);
  }
  /**
   * Return a well-formed graphic key
   */
  constructGraphicKey(origin, uid, oid) {
    return `${HILIGHT_LAYER_NAME}~${origin}~${uid}~${oid}`;
  }
  /**
   * Return a deconstructed graphic key.
   *
   * @param key The graphic key to deconstruct
   */
  deconstructGraphicKey(key) {
    const ids = key.split("~");
    if (ids.length !== 4) {
      console.warn("Malformed Hilight Graphic key provided:", key);
    }
    return { origin: ids[1], uid: ids[2], oid: parseInt(ids[3]) };
  }
  /**
   * Return the hilightLayer
   */
  async getHilightLayer() {
    if (this.hilightMode) {
      return await this.hilightMode.getHilightLayer();
    } else {
      console.warn("API get layer request before highlight mode object exists");
      return void 0;
    }
  }
}

class HilightFixture extends HilightAPI {
  async added() {
    this._parseConfig(this.config);
    const unwatch = this.$vApp.$watch(
      () => this.config,
      (value) => this._parseConfig(value)
    );
    this.removed = () => {
      unwatch();
    };
  }
}

export { HilightFixture as default };
