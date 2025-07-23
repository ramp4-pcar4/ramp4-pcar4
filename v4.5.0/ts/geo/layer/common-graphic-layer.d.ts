import { InstanceAPI, MapLayer } from '@/api/internal';
import type { EsriGraphicsLayer, EsriGraphic } from '@/geo/esri';
import { Graphic } from '@/geo/api';
import type { RampLayerConfig } from '@/geo/api';
/**
 * A common layer class which is inherited by layer classes that implement graphic layers (vector graphics not bound to a schema).
 */
export declare class CommonGraphicLayer extends MapLayer {
    protected constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    protected _graphics: Array<Graphic>;
    esriLayer: EsriGraphicsLayer | undefined;
    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): any;
    /**
     * Get the number of graphics in the layer.
     *
     * @returns {Integer} number of graphics in the layer
     */
    getGraphicCount(): number;
    /**
     * Gets a graphic from the layer, if it exists.
     *
     * @param {string} graphicId id of the graphic to find
     * @returns {Graphic} the graphic, undefined if no matching id is found.
     */
    getLocalGraphic(graphicId: string): Graphic | undefined;
    getEsriGraphic(graphicId: string): EsriGraphic | undefined;
    protected notLoadedErr(): void;
    /** Returns a copy of the graphics in the layer. */
    get graphics(): Array<Graphic>;
    /**
     * Adds graphics to the layer. Once added, the Graphic is not tightly bound to the layer.
     * Updating the Graphic object will not automatically update what is on the layer.
     *
     * @param {Graphic | Array<Graphic>} graphics one or more RAMP Graphics to add to the layer
     * @returns {Promise} resolves when graphics have been added
     */
    addGraphic(graphics: Graphic | Array<Graphic>): Promise<void>;
    /**
     * If geometry specified, removes those items. Else removes all geometry.
     *
     * @param geometry any strings should reference a particular geometry instance with that ID. If undefined, all geometry is removed.
     */
    removeGraphic(graphics?: Array<string | Graphic> | string | Graphic): void;
}
