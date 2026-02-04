import { InstanceAPI, MapLayer } from '../../api/internal';
import { EsriGraphicsLayer, EsriGraphic } from '../esri';
import { Graphic, RampLayerConfig } from '../api';
/**
 * A common layer class which is inherited by layer classes that implement graphic layers (vector graphics not bound to a schema).
 */
export declare class CommonGraphicLayer extends MapLayer {
    protected constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI);
    protected _graphics: Array<Graphic>;
    esriLayer: EsriGraphicsLayer | undefined;
    esriView: __esri.GraphicsLayerView | undefined;
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
    /**
     * Gets the ESRI graphic from the layer, if it exists, that is rendering the Graphic with the
     * provided id.
     *
     * @param {string} graphicId id of the graphic to find
     * @returns {ESRIGraphic} the graphic, undefined if no matching id is found.
     */
    getEsriGraphic(graphicId: string): EsriGraphic | undefined;
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
     * If Graphics are specified, removes those graphics from the layer. Passing no parameter removes all Graphics.
     *
     * @param {Graphic | string | Array<Graphic | string>} graphics Valid formats: A Graphic object, a graphic ID in string form, or an array of Graphic objects and/or graphic ID strings
     */
    removeGraphic(graphics?: Array<string | Graphic> | string | Graphic): void;
}
