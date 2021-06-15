import { CommonMapAPI, InstanceAPI, LayerInstance } from '@/api/internal';
import { MaptipStore } from '@/store/modules/maptip';
import {
    GraphicHitResult,
    MaptipProperties,
    ScreenPoint
} from '../api/geo-defs';

export class MaptipAPI extends CommonMapAPI {
    /**
     * @constructor
     * @param {InstanceAPI} iApi the RAMP instance
     */
    constructor(iApi: InstanceAPI) {
        super(iApi);
    }

    /**
     * Displays a map tip at the given screen point if it is over a feature graphic.
     * Removes the map tip if there is no graphic.
     *
     * @param {ScreenPoint} screenPoint The screen coordinates for the hitTest
     * @returns {Promise<void>} a promise that resolves when the maptip has been updated/removed
     */
    async updateMaptipAtCoord(screenPoint: ScreenPoint): Promise<void> {
        // Get the graphic object
        const graphic:
            | GraphicHitResult
            | undefined = await this.$iApi.geo.map.getGraphicAtCoord(
            screenPoint
        );

        if (!graphic) {
            this.clearMaptip();
            return;
        }

        // Check if the same maptip already exists
        const currentMaptip: any = this.getMaptipProperties();
        if (
            currentMaptip &&
            currentMaptip.graphic.layerId === graphic.layerId &&
            currentMaptip.graphic.oid === graphic.oid &&
            currentMaptip.graphic.layerIdx === graphic.layerIdx
        ) {
            // Same maptip, no need for changes
            // This keeps the maptip in place and saves some trips to Vuex store
            return;
        }

        // Get the layer
        const layerInstance:
            | LayerInstance
            | undefined = this.$iApi.geo.layer.getLayer(graphic.layerId);
        if (!layerInstance) {
            // Something seriously wrong here because esri gave us a non-existent layerID
            return;
        }

        // Get the graphic
        const graphicIconSVG: string = await layerInstance.getIcon(
            graphic.oid,
            layerInstance.uid
        );

        // Update the properties
        this.setMaptipProperties({
            screenPoint: screenPoint,
            mapPoint: this.$iApi.geo.map.screenPointToMapPoint(screenPoint),
            graphic: graphic
        });

        // Update the content
        // Custom template
        this.setMaptipContent(
            `<b style="color: yellow">✨ ${layerInstance.getName(
                graphic.layerIdx
            )} ✨</b><br>${graphicIconSVG}<br><b>OID: ${
                graphic.oid
            }</b> | <b>LayerID: ${graphic.layerId}</b> | <b>LayerIdx: ${
                graphic.layerIdx
            }</b>`
        );
    }

    /**
     * Set the current maptip properties
     * Removes the current maptip if the given properties are undefined
     *
     * @param {MaptipProperties} maptipProperties The maptip object
     */
    setMaptipProperties(maptipProperties: MaptipProperties) {
        this.$iApi.$vApp.$store.set(
            MaptipStore.setMaptipProperties,
            maptipProperties
        );
    }

    /**
     * Clears the maptip from the map
     */
    clearMaptip() {
        this.$iApi.$vApp.$store.set(MaptipStore.setMaptipProperties, undefined);
    }

    /**
     * Get the current properties of the maptip
     *
     * @returns {MaptipProperties} the current maptip properties
     */
    getMaptipProperties(): MaptipProperties | undefined {
        return this.$iApi.$vApp.$store.get(MaptipStore.maptipProperties);
    }

    /**
     * Get the `tippy` maptip instance
     * Documentation: https://kabbouchi.github.io/tippyjs-v4-docs/tippy-instance/
     *
     * @returns {any} the `tippy` tooltip instance
     */
    getMaptipInstance(): any {
        return this.$iApi.$vApp.$store.get(MaptipStore.maptipInstance);
    }

    /**
     * Set the `tippy` maptip instance
     * Documentation: https://kabbouchi.github.io/tippyjs-v4-docs/tippy-instance/
     *
     * @param {any} instance the `tippy` instance
     * @param {any} defaultProperties? the default properties for`tippy` instance
     */
    setMaptipInstance(instance: any, defaultProperties?: any): void {
        if (defaultProperties) {
            instance.set(defaultProperties);
        }
        this.$iApi.$vApp.$store.set(MaptipStore.setMaptipInstance, instance);
    }

    /**
     * Set the html string for the maptip
     * If empty string is provided, the maptip will use the default content
     *
     * @param {string} content the new maptip html content
     */
    setMaptipContent(content: string): void {
        this.$iApi.$vApp.$store.set(MaptipStore.setMaptipContent, content);
    }

    /**
     * Set the default string for the maptip content
     *
     * @param {string} content the new default maptip html content
     */
    setMaptipDefaultContent(content: string): void {
        this.$iApi.$vApp.$store.set(
            MaptipStore.setMaptipDefaultContent,
            content
        );
    }
}
