import { APIScope, InstanceAPI, LayerInstance } from '@/api/internal';
import { MaptipStore } from '@/store/modules/maptip';
import {
    Attributes,
    GraphicHitResult,
    MaptipProperties,
    Point,
    ScreenPoint
} from '@/geo/api';

export class MaptipAPI extends APIScope {
    /**
     * @constructor
     * @param {InstanceAPI} iApi the RAMP instance
     */
    constructor(iApi: InstanceAPI) {
        super(iApi);
    }

    // # makes variables private outside of typescript and lets us hide things on the API
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
    #lastHit: GraphicHitResult | undefined = undefined;
    #currentCheck: ScreenPoint | undefined = undefined;

    /**
     * Checks for a graphic at the given screen coordinates.
     * On a graphic hit the point is put in the maptip store and the `map/graphichit` event is fired.
     *
     * @param {ScreenPoint} screenPoint The screen coordinates for the hitTest
     * @returns {Promise<void>} resolves after the event is fired or no new graphic is hit.
     */
    async checkAtCoord(screenPoint: ScreenPoint): Promise<void> {
        this.#currentCheck = screenPoint;

        // Get the graphic object
        const graphicHit: GraphicHitResult | undefined =
            await this.$iApi.geo.map.getGraphicAtCoord(screenPoint);

        // cancel if new check came in while waiting for `getGraphicAtCoord`
        // If the same point is checked twice technically it can get out of sync but then we're checking the same point anyways
        if (this.#currentCheck !== screenPoint) {
            return;
        }

        if (!graphicHit) {
            this.#lastHit = undefined;
            this.clear();
            return;
        }

        // Check if the same maptip already exists
        if (
            this.#lastHit &&
            this.#lastHit.layerId === graphicHit.layerId &&
            this.#lastHit.oid === graphicHit.oid &&
            this.#lastHit.layerIdx === graphicHit.layerIdx
        ) {
            // Same maptip, no need for changes
            // This keeps the maptip in place and saves some trips to Vuex store
            return;
        }

        this.#lastHit = graphicHit;
        this.clear();

        // Get the layer
        const layerInstance: LayerInstance | undefined =
            this.$iApi.geo.layer.getLayer(graphicHit.layerId);
        if (!layerInstance) {
            // Something seriously wrong here because esri gave us a non-existent layerID
            console.error(
                `graphic hit test returned non-existent layer id: ${graphicHit.layerId}`
            );
            return;
        }

        // Get the icon svg string for the graphic
        const icon: string = await layerInstance.getIcon(graphicHit.oid);

        // get the attributes for the graphic
        const graphic = await layerInstance.getGraphic(graphicHit.oid, {
            getAttribs: true
        });

        this.setPoint(this.$iApi.geo.map.screenPointToMapPoint(screenPoint));

        this.$iApi.event.emit('map/graphichit', {
            layer: layerInstance,
            graphicHit,
            attributes: graphic.attributes,
            icon,
            screenPoint
        });
    }

    /**
     * Generates and sets the "default" maptip.
     *
     * @param info the tooltip info payload
     */
    generateDefaultMaptip(info: {
        layer: LayerInstance;
        graphicHit: GraphicHitResult;
        attributes: Attributes;
        icon: string;
        screenPoint: Point;
    }) {
        this.setContent(
            `<div class="flex items-center">${info.icon} ${
                info.attributes[
                    info.layer.config.tooltipField || info.layer.nameField
                ]
            }</div>`
        );
    }

    /**
     * Clears the maptip from the map
     */
    clear(): void {
        this.$iApi.$vApp.$store.set(MaptipStore.setMaptipPoint, undefined);
        this.$iApi.$vApp.$store.set(MaptipStore.setMaptipContent, '');
    }

    /**
     * Get the `tippy` maptip instance
     * Documentation: https://kabbouchi.github.io/tippyjs-v4-docs/tippy-instance/
     *
     * @returns {any} the `tippy` tooltip instance
     */
    getInstance(): any {
        return this.$iApi.$vApp.$store.get(MaptipStore.maptipInstance);
    }

    /**
     * Get the current point for the maptip
     *
     * @returns {Point} the current maptip map point
     */
    getPoint(): MaptipProperties | undefined {
        return this.$iApi.$vApp.$store.get(MaptipStore.maptipPoint);
    }

    /**
     * Set the current maptip point. Undefined = maptip wont be shown.
     *
     * @param {Point | undefined} maptipPoint
     */
    setPoint(maptipPoint: Point): void {
        this.$iApi.$vApp.$store.set(MaptipStore.setMaptipPoint, maptipPoint);
    }

    /**
     * Set the html string for the maptip
     * If empty string is provided, the maptip will use the default content
     *
     * @param {string} content the new maptip html content
     */
    setContent(content: string): void {
        this.$iApi.$vApp.$store.set(MaptipStore.setMaptipContent, content);
    }
}
