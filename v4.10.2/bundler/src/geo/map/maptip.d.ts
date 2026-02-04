import { APIScope, InstanceAPI, LayerInstance } from '../../api/internal';
import { Attributes, GraphicHitResult, MaptipProperties, Point, ScreenPoint } from '../api';
export declare class MaptipAPI extends APIScope {
    #private;
    maptipStore: any;
    /**
     * @constructor
     * @param {InstanceAPI} iApi the RAMP instance
     */
    constructor(iApi: InstanceAPI);
    /**
     * Checks for a graphic at the given screen coordinates.
     * On a graphic hit the point is put in the maptip store and the `map/graphichit` event is fired.
     *
     * @param {ScreenPoint} screenPoint The screen coordinates for the hitTest
     * @returns {Promise<void>} resolves after the event is fired or no new graphic is hit.
     */
    checkAtCoord(screenPoint: ScreenPoint): Promise<void>;
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
    }): void;
    /**
     * Clears the maptip from the map
     */
    clear(): void;
    /**
     * Get the `tippy` maptip instance
     * Documentation: https://kabbouchi.github.io/tippyjs-v4-docs/tippy-instance/
     *
     * @returns {any} the `tippy` tooltip instance
     */
    getInstance(): any;
    /**
     * Get the current point for the maptip
     *
     * @returns {Point} the current maptip map point
     */
    getPoint(): MaptipProperties | undefined;
    /**
     * Set the current maptip point. Undefined = maptip wont be shown.
     *
     * @param {Point | undefined} maptipPoint
     */
    setPoint(maptipPoint: Point): void;
    /**
     * Set the html string for the maptip
     * If empty string is provided, the maptip will use the default content
     *
     * @param {string} content the new maptip html content
     */
    setContent(content: string): void;
}
