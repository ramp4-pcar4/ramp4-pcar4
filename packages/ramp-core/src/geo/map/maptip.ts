import { APIScope, InstanceAPI, LayerInstance } from '@/api/internal';
import { MaptipStore } from '@/store/modules/maptip';
import { GraphicHitResult, MaptipProperties, ScreenPoint } from '@/geo/api';

export class MaptipAPI extends APIScope {
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
    async updateAtCoord(screenPoint: ScreenPoint): Promise<void> {
        // Get the graphic object
        const graphicHit: GraphicHitResult | undefined = await this.$iApi.geo.map.getGraphicAtCoord(
            screenPoint
        );

        if (!graphicHit) {
            this.clear();
            return;
        }

        // Check if the same maptip already exists
        const currentMaptip: MaptipProperties | undefined = this.getProperties();
        if (
            currentMaptip &&
            currentMaptip.graphicHit.layerId === graphicHit.layerId &&
            currentMaptip.graphicHit.oid === graphicHit.oid &&
            currentMaptip.graphicHit.layerIdx === graphicHit.layerIdx
        ) {
            // Same maptip, no need for changes
            // This keeps the maptip in place and saves some trips to Vuex store
            return;
        }

        // Get the layer
        const layerInstance: LayerInstance | undefined = this.$iApi.geo.layer.getLayer(
            graphicHit.layerId
        );
        if (!layerInstance) {
            // Something seriously wrong here because esri gave us a non-existent layerID
            console.error(`graphic hit test returned non-existent layer id: ${graphicHit.layerId}`);
            return;
        }

        // Get the graphic
        const graphicIconSVG: string = await layerInstance.getIcon(
            graphicHit.oid,
            layerInstance.uid
        );

        // Update the properties
        this.setProperties({
            screenPoint: screenPoint,
            mapPoint: this.$iApi.geo.map.screenPointToMapPoint(screenPoint),
            graphicHit: graphicHit
        });

        // Update the content
        // TODO: Update to custom templates when they are implemented
        this.setContent(
            `${graphicIconSVG}<br><b>${layerInstance.getName(
                graphicHit.layerIdx
            )}</b><br>ObjectID: ${graphicHit.oid}`
        );
    }

    /**
     * Set the current maptip properties
     * Removes the current maptip if the given properties are undefined
     *
     * @param {MaptipProperties} maptipProperties The maptip object
     */
    setProperties(maptipProperties: MaptipProperties): void {
        this.$iApi.$vApp.$store.set(MaptipStore.setMaptipProperties, maptipProperties);
    }

    /**
     * Clears the maptip from the map
     */
    clear(): void {
        this.$iApi.$vApp.$store.set(MaptipStore.setMaptipProperties, undefined);
    }

    /**
     * Get the current properties of the maptip
     *
     * @returns {MaptipProperties} the current maptip properties
     */
    getProperties(): MaptipProperties | undefined {
        return this.$iApi.$vApp.$store.get(MaptipStore.maptipProperties);
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
     * Set the html string for the maptip
     * If empty string is provided, the maptip will use the default content
     *
     * @param {string} content the new maptip html content
     */
    setContent(content: string): void {
        this.$iApi.$vApp.$store.set(MaptipStore.setMaptipContent, content);
    }

    /**
     * Set the default string for the maptip content
     *
     * @param {string} content the new default maptip html content
     */
    setDefaultContent(content: string): void {
        this.$iApi.$vApp.$store.set(MaptipStore.setMaptipDefaultContent, content);
    }
}
