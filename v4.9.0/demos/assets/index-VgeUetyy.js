import { bA as FixtureInstance, fN as useExtentguardStore, fO as GlobalEvents, fP as Extent } from './main-DbwmOBz5.js';
import './preload-helper-dJJaZANz.js';

class ExtentguardAPI extends FixtureInstance {
  /**
   * Parses the extentguard config JSON snippet from the config file and save to the fixture store.
   *
   * @param {extentguardConfig} [ExtentguardConfig]
   * @memberof ExtentguardAPI
   */
  _parseConfig(extentguardConfig) {
    if (extentguardConfig) {
      const store = useExtentguardStore(this.$vApp.$pinia);
      if (extentguardConfig.alwaysOn) {
        store.setAlwaysOn(true);
      }
      const esi = extentguardConfig.extentSetIds;
      if (esi && Array.isArray(esi) && esi.length > 0) {
        store.setExtentSetIds(esi);
      }
    }
  }
  get config() {
    return super.config;
  }
}

function clipCoords(testMax, testMin, boundingMax, boundingMin) {
  const testLength = testMax - testMin;
  const middle = testMin + testLength / 2;
  const safeLength = Math.min(testLength, boundingMax - boundingMin);
  if (middle > boundingMax) {
    return {
      min: boundingMax - safeLength,
      max: boundingMax,
      changed: true
    };
  } else if (middle < boundingMin) {
    return {
      min: boundingMin,
      max: boundingMin + safeLength,
      changed: true
    };
  } else {
    return {
      min: testMin,
      max: testMax,
      changed: false
    };
  }
}
class ExtentguardFixture extends ExtentguardAPI {
  /**
   * Schema change event handler name
   */
  schemaEH = "";
  /**
   * Extent change event handler name
   */
  extentEH = "";
  added() {
    this._parseConfig(this.config);
    const unwatch = this.$vApp.$watch(
      () => this.config,
      (value) => this._parseConfig(value)
    );
    this.removed = () => {
      unwatch();
      const store = useExtentguardStore(this.$vApp.$pinia);
      store.$reset();
      this.evtOff("schemaEH");
      this.evtOff("extentEH");
    };
    this.schemaEH = this.$iApi.event.on(GlobalEvents.MAP_BASEMAPCHANGE, (payload) => {
      if (payload.schemaChanged) {
        this.checkActive();
      }
    });
    if (this.$iApi.geo.map.created) {
      this.checkActive();
    } else {
      this.$iApi.event.once(GlobalEvents.MAP_CREATED, () => {
        this.checkActive();
      });
    }
  }
  /**
   * Examines current state of the instance and activates or deactivates appropriately
   */
  checkActive() {
    const store = useExtentguardStore(this.$vApp.$pinia);
    if (store.alwaysOn || store.extentSetIds.includes(this.$iApi.geo.map.getExtentSet().id)) {
      if (!store.active) {
        store.setActive(true);
        this.extentEH = this.$iApi.event.on(GlobalEvents.MAP_EXTENTCHANGE, (extent) => {
          if (!store.enforcing) {
            this.enforceBoundary(extent, false);
          }
        });
      }
    } else if (store.active) {
      store.setActive(false);
      this.evtOff("extentEH");
    }
  }
  /**
   * Wraps the act of checking if an event handler exists, and if so, removing it.
   * Just a reapeated code saver
   * @param eventPropName property name of this class that can hold an event handler name
   * @private
   */
  evtOff(eventPropName) {
    if (this[eventPropName]) {
      this.$iApi.event.off(this[eventPropName]);
      this[eventPropName] = "";
    }
  }
  /**
   * Checks if the center of the given extent is outside of the maps maximum extent. If it is,
   * will pan the map back to something appropriate
   *
   * @function enforceBoundary
   * @param {Extent} extent an extent to adjudicate
   * @param {boolean} safetyCheck indicates if this enforcement is a check against an original enforcement
   */
  enforceBoundary(extent, safetyCheck) {
    const maxExtent = this.$iApi.geo.map.getExtentSet().maximumExtent;
    const xTest = clipCoords(extent.xmax, extent.xmin, maxExtent.xmax, maxExtent.xmin);
    const yTest = clipCoords(extent.ymax, extent.ymin, maxExtent.ymax, maxExtent.ymin);
    if (yTest.changed || xTest.changed) {
      if (safetyCheck) {
        this.$iApi.geo.map.esriView.extent = maxExtent.toESRI();
      }
      const respectfulExtent = Extent.fromParams(
        "extguard",
        xTest.min,
        yTest.min,
        xTest.max,
        yTest.max,
        extent.sr
      );
      const store = useExtentguardStore(this.$vApp.$pinia);
      store.setEnforcing(true);
      setTimeout(() => {
        this.$iApi.geo.map.zoomMapTo(respectfulExtent, void 0, true, 400, "ease-in-out").then(() => {
          store.setEnforcing(false);
          this.enforceBoundary(this.$iApi.geo.map.getExtent(), true);
        });
      }, 150);
    }
  }
}

export { ExtentguardFixture as default };
