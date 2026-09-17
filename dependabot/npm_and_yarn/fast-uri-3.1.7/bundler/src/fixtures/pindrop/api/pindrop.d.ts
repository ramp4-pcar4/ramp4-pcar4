import { CommonGraphicLayer, FixtureInstance } from '../../../api/internal';
import { Point, PointStyleOptions } from '../../../geo/api';
interface PinDropConfig {
    pinSymbol?: PointStyleOptions;
    linkIdentify?: boolean;
    linkDetails?: boolean;
}
/**
 * Exposes methods to manage a pin drop on the map
 */
export declare class PinDropAPI extends FixtureInstance {
    /**
     * Tracks pin point symbol
     */
    private _pinSymbol;
    /**
     * Tracks link to identify state
     */
    private _linkIdentify;
    /**
     * Tracks link to details panel state
     */
    private _linkDetails;
    /**
     * Tracks where current pin is located. Used for hide/show when bound to details panel
     */
    private _pinPoint;
    /**
     * Tracks if we have a pin visible (i.e. false + point = hiding)
     */
    private _pinVisible;
    /**
     * Tracks the active flag state
     */
    private _active;
    /**
     * How to symbolize the pin point
     */
    get pinSymbol(): PointStyleOptions;
    set pinSymbol(newSymbol: PointStyleOptions);
    /**
     * Toggleable flag to enable/disable the pin drop.
     */
    get active(): boolean;
    set active(newValue: boolean);
    /**
     * Makes the pin automatically drop when a map identify occurs
     */
    get linkIdentify(): boolean;
    set linkIdentify(newValue: boolean);
    /**
     * Makes the pin show and hide when the details panel is active.
     */
    get linkDetails(): boolean;
    set linkDetails(newValue: boolean);
    initialized(): void;
    /**
     * Cleans up fixture when its done.
     */
    cleanup(): void;
    _parseConfig(pindropConfig?: PinDropConfig): void;
    /**
     * Initialize the pin layer.
     *
     * @returns {Promise} resolves when layer is added to the map
     */
    initPinLayer(): Promise<void>;
    /**
     * Place a pin at the given point on the map
     *
     * @param {Point} dropPoint map location for the new pin
     */
    dropPin(dropPoint: Point): void;
    /**
     * Remove the pin from the map for good.
     */
    removePin(): void;
    /**
     * Hide the pin but retain the position for a future restorePin() call
     */
    hidePin(): void;
    /**
     * If a pin was hidden, show it again.
     */
    restorePin(): void;
    /**
     * Return the Pindrop Layer
     */
    getPindropLayer(): CommonGraphicLayer | undefined;
    /**
     * Return the Pindrop Layer name
     */
    get pindropLayerName(): string;
    /**
     * Worker to actually insert the pin into the layer. Assumes point and style are set
     */
    private _insertPin;
    /**
     * Worker to actually remove the pin from the layer
     */
    private _erasePin;
    /**
     * Worker to remove events that connect to identify
     */
    private _cleanIdentify;
    /**
     * Worker to remove events that connect to details
     */
    private _cleanDetails;
}
export {};
