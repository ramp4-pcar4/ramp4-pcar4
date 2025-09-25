import { bA as FixtureInstance, iG as useNortharrowStore, bF as defineComponent, ip as useConfigStore, bH as inject, bI as ref, bL as computed, it as reactive, bJ as onMounted, fO as GlobalEvents, fJ as debounce, bK as onBeforeUnmount, bC as Point, iH as PointStyleType, iF as LayerType, iI as Graphic, iJ as PointStyle, bW as createElementBlock, fG as createBaseVNode, iK as normalizeStyle, bQ as openBlock } from './main-DbwmOBz5.js';
import './preload-helper-dJJaZANz.js';

class NortharrowAPI extends FixtureInstance {
  /**
   * Parses the north arrow config JSON snippet from the config file and save to the fixture store.
   *
   * @param {NortharrowConfig} [northarrowConfig]
   * @memberof NortharrowAPI
   */
  _parseConfig(northarrowConfig) {
    const northarrowStore = useNortharrowStore(this.$vApp.$pinia);
    if (!northarrowConfig) return;
    northarrowStore.arrowIcon = northarrowConfig.arrowIcon;
    northarrowStore.poleIcon = northarrowConfig.poleIcon;
  }
  get config() {
    return super.config;
  }
}

const style = "path";
const size = 12;
const path = "M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z";
const colour = "#ff0000ff";
const xOffset = 5;
const yOffset = 6;
const flag = {
	style: style,
	size: size,
	path: path,
	colour: colour,
	xOffset: xOffset,
	yOffset: yOffset
};

const _hoisted_1 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "northarrow",
  setup(__props) {
    const configStore = useConfigStore();
    const northarrowStore = useNortharrowStore();
    const iApi = inject("iApi");
    const el = ref();
    const arrowIcon = computed(() => northarrowStore.arrowIcon);
    const poleIcon = computed(() => northarrowStore.poleIcon);
    const angle = ref(0);
    const arrowLeft = ref(0);
    const displayArrow = ref(false);
    const arrow = ref(`<svg xmlns="http://www.w3.org/2000/svg" fit=""  width="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" focusable="false">
                <g id="northarrow" transform="translate(-285.24 -142.234)">
                    <path id="path3770-7" d="M305.91 156.648a8.652 8.652 0 0 1-8.654 8.653 8.652 8.652 0 0 1-8.653-8.653 8.653 8.653 0 0 1 8.653-8.653 8.653 8.653 0 0 1 8.653 8.653z" fill="#fff" stroke="#fff" stroke-width=".895"/>
                    <path id="path3770" d="M304.982 156.648a7.725 7.725 0 0 1-7.726 7.726 7.725 7.725 0 0 1-7.726-7.726 7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726z" fill="none" stroke="#6d6d6d" stroke-width=".799"/>
                    <path id="path3774" d="M297.256 156.648v-8.525" fill="none" stroke="#000" stroke-width=".067"/>
                    <path d="M297.258 143.48l8.793 22.432-8.811-8.812-8.812 8.812z" id="path3778" fill="#fff" stroke="#fff" stroke-width=".912"/>
                    <path d="M297.256 144.805l7.726 19.568-7.726-7.726-7.726 7.726z" id="path3780" fill="#d6d6d6" stroke="#000" stroke-width=".266" stroke-linecap="square"/>
                    <path id="path6038" d="M297.256 144.666l-7.726 19.568 7.726-7.726" fill="#6d6d6d" stroke-width=".296" stroke-linecap="square"/>
                </g>
            </svg>`);
    const poleMarkerAdded = ref(false);
    const handlers = reactive([]);
    const tileSchemas = ref([]);
    let basemap;
    onMounted(() => {
      const mapConfig = configStore.config.map;
      tileSchemas.value = mapConfig.tileSchemas;
      if (arrowIcon?.value) {
        arrow.value = `<img width='25' src='${arrowIcon.value}'>`;
      }
      if (iApi.geo.map.esriView?.ready) {
        updateNortharrow(iApi.geo.map.getExtent());
      }
      handlers.push(iApi.event.on(GlobalEvents.MAP_EXTENTCHANGE, debounce(300, updateNortharrow)));
    });
    onBeforeUnmount(() => {
      handlers.forEach((h) => iApi.event.off(h));
    });
    const updateNortharrow = async (newExtent) => {
      basemap = configStore.activeBasemapConfig;
      let hasNorthPole;
      for (const tile of tileSchemas.value) {
        if (basemap?.tileSchemaId === tile.id) {
          hasNorthPole = tile?.hasNorthPole;
          break;
        }
      }
      const innerShell = document.querySelector(".inner-shell");
      const arrowWidth = el.value.querySelector(".northarrow").getBoundingClientRect().width;
      const appbarWidth = document.querySelector(".appbar")?.clientWidth || 0;
      const sr = newExtent.sr;
      if (hasNorthPole || typeof hasNorthPole === "undefined" && !sr.isWebMercator()) {
        const pole = new Point("pole", { x: -96, y: 90 });
        const projPole = await iApi.geo.proj.projectGeometry(sr, pole);
        const poleScreenPos = iApi.geo.map.mapPointToScreenPoint(projPole);
        if (poleScreenPos.screenY < 0) {
          displayArrow.value = true;
          const bcScreenPos = {
            screenX: innerShell.clientWidth / 2,
            screenY: innerShell.clientHeight
          };
          angle.value = Math.atan(
            (poleScreenPos.screenX - bcScreenPos.screenX) / (bcScreenPos.screenY - poleScreenPos.screenY)
          ) * 180 / Math.PI;
          arrowLeft.value = innerShell.clientWidth / 2 + innerShell.clientHeight * Math.tan(angle.value * Math.PI / 180) - arrowWidth / 2;
          arrowLeft.value = Math.max(
            appbarWidth - arrowWidth / 2,
            Math.min(iApi.geo.map.getPixelWidth() - arrowWidth / 2, arrowLeft.value)
          );
        } else {
          displayArrow.value = false;
          if (!poleMarkerAdded.value) {
            poleMarkerAdded.value = true;
            let poleStyleParams;
            if (poleIcon.value) {
              poleStyleParams = {
                style: PointStyleType.ICON,
                icon: poleIcon.value,
                height: 16.5,
                width: 16.5
              };
            } else {
              poleStyleParams = flag;
            }
            const poleLayer = iApi.geo.layer.createLayer({
              id: POLE_MARKER_LAYER_ID,
              layerType: LayerType.GRAPHIC,
              url: "",
              cosmetic: true
              // mark this layer as a cosmetic layer
            });
            iApi.geo.map.addLayer(poleLayer);
            poleLayer.loadPromise().then(() => {
              const poleGraphic = new Graphic(projPole, "northpole");
              const poleStyle = new PointStyle(
                poleStyleParams
              );
              poleGraphic.style = poleStyle;
              poleLayer.addGraphic(poleGraphic);
            });
          }
        }
      } else {
        displayArrow.value = true;
        angle.value = 0;
        arrowLeft.value = appbarWidth + (innerShell.clientWidth - appbarWidth - arrowWidth) / 2;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "absolute transition-all duration-300 ease-out",
        style: normalizeStyle({
          "transform-origin": `top center`,
          transform: `rotate(${angle.value}deg)`,
          left: `${arrowLeft.value}px`,
          visibility: displayArrow.value ? `visible` : `hidden`
        }),
        ref_key: "el",
        ref: el
      }, [
        createBaseVNode("span", {
          class: "northarrow",
          innerHTML: arrow.value
        }, null, 8, _hoisted_1)
      ], 4);
    };
  }
});

const POLE_MARKER_LAYER_ID = "RampPoleMarker";
class NortharrowFixture extends NortharrowAPI {
  async added() {
    this._parseConfig(this.config);
    const unwatch = this.$vApp.$watch(
      () => this.config,
      (value) => this._parseConfig(value)
    );
    const { destroy, el } = this.mount(_sfc_main, {
      app: this.$element
    });
    const innerShell = this.$vApp.$el.getElementsByClassName("inner-shell")[0];
    innerShell.appendChild(el.childNodes[0]);
    this.removed = () => {
      unwatch();
      if (this.$iApi.geo.layer.getLayer(POLE_MARKER_LAYER_ID)) {
        this.$iApi.geo.map.removeLayer(POLE_MARKER_LAYER_ID);
      }
      const northarrowStore = useNortharrowStore(this.$vApp.$pinia);
      northarrowStore.$reset();
      destroy();
    };
  }
}

export { POLE_MARKER_LAYER_ID, NortharrowFixture as default };
