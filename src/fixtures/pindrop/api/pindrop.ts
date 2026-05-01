import { CommonGraphicLayer, FixtureInstance, GlobalEvents } from '@/api/internal';
import { Graphic, LayerType, Point, PointStyle } from '@/geo/api';
import type { PointIconStyleOptions, PointStyleOptions } from '@/geo/api';
import { PointStyleType } from '@/geo/api';

const IDENTIFY_EVENT_HANDLER = 'ramp-pin-identify';
const PANEL_OPEN_EVENT_HANDLER = 'ramp-pin-panel-open';
const PANEL_CLOSE_EVENT_HANDLER = 'ramp-pin-panel-close';
const PANEL_MINIMIZE_EVENT_HANDLER = 'ramp-pin-panel-min';

const PINDROP_LAYER_NAME = 'Ramp-Pin-Drop';

const DEFAULT_PIN: PointIconStyleOptions = {
    style: PointStyleType.ICON,
    width: 12,
    height: 16,
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAZCAYAAADTyxWqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCA1LjEuN4vW9zkAAAC2ZVhJZklJKgAIAAAABQAaAQUAAQAAAEoAAAAbAQUAAQAAAFIAAAAoAQMAAQAAAAIAAAAxAQIAEAAAAFoAAABphwQAAQAAAGoAAAAAAAAAYAAAAAEAAABgAAAAAQAAAFBhaW50Lk5FVCA1LjEuNwADAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAWgBAABAAAAlAAAAAAAAAACAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAAAAAAlR56NozS1xQAAAx1JREFUSEuVlV1Ik1EYx5+zuZnza26KWmp4odNUJLwQKUqxzFZgdRF0aRd9EBGGREnRRV3kVUl01U0gEVFQls4uuqgk0IwoY5VOan5O0U3TVlZup/95z7tXp1voDx7O/3nes/973vM1RhHIL7eXoDmC2IkoRKQgfIjPiBeIewM9DifaMMLM8sv3mlG6BnkUYVCKkfmDuM2JN7l6OudkaZkZjHKRtkGKUa2V90T8wEBP55BIFDMYWSBfQhaLfJ18wAgrMcJZvcisWfk30dQKHUK8ZWJ+gcb7psk7Okdej58Wk2IoMTZGdlgigxGzeMdc7QyTvRWFXoRiLBBG/cMzVF9XEayz7+KpVktgyuvVt3U819150s1sOSnEZdcQAUSZ3pqV1wixTSmBkFHLxfrgpfMNVFxUqM/JztIX2PJ0NdU7eFoC43fbu1lqcpz8gUSHmBdmVyE2KSUw7f9Nh6pKg5cvnCWTKU500jAYDKykaAt3u5zU555gJmPYJxtEZ5vUEt/gLO2rqeQmkynMKER8vEm3v7Yq6Bv8rlY0CsQPkqRWWQhQijlZzEFUlOcLi2qmkSTMZqRWsRhpZHRcLMaKOdbgynOrUU01ZoTZJ6kl2ZvN1PrQoZuYmIxo5kG99UGHLjsHhyUcp1iAdIhqmRMZY3T0btTL/JOjvKTIxs3JyeoTIvfQML/S3MIe9X5hmYkb1KrGLbHPMiH6EKlKCTDGqN/3g/ItCfxw7XaekZ4W9ExO6e47utjXWT/LsyQQ52EDn0SUqsfJfg5Ns9DL+RsI0jefHzsI5zrRSLmWeDLoIy5yA26RG4pZXrndANEFWS7ydfIKg6xyvXEEFTMBRleG5jUiVimsDQybKjCqjyLRziMOqgeLIe6p3bKyJhph9FTVS/dZCIzwGZo9Mvsvj2F0UNUKkWbzBGJKyqiMIU5JucQqM7zNjea0zKJyEv3GVa2hzdlyMH9OzN9GSLEoK7kOI3GZriLiplER99zKf6C32KpNql5FVDO8fR7NcUToeviFOObqcSzIdDURPzMEPncEn/sTUpzdM3hBu/IgIkT/AA0b/Z36q15CAAAAAElFTkSuQmCC',
    xOffset: 0,
    yOffset: 8
};

interface PinDropConfig {
    pinSymbol?: PointStyleOptions;
    linkIdentify?: boolean;
    linkDetails?: boolean;
}

/**
 * Exposes methods to manage a pin drop on the map
 */
export class PinDropAPI extends FixtureInstance {
    /**
     * Tracks pin point symbol
     */
    private _pinSymbol!: PointStyle;

    /**
     * Tracks link to identify state
     */
    private _linkIdentify: boolean = false;

    /**
     * Tracks link to details panel state
     */
    private _linkDetails: boolean = false;

    /**
     * Tracks where current pin is located. Used for hide/show when bound to details panel
     */
    private _pinPoint: Point | undefined;

    /**
     * Tracks if we have a pin visible (i.e. false + point = hiding)
     */
    private _pinVisible: boolean = false;

    /**
     * Tracks the active flag state
     */
    private _active: boolean = true;

    /**
     * How to symbolize the pin point
     */
    get pinSymbol(): PointStyleOptions {
        return this._pinSymbol.toOptions();
    }

    set pinSymbol(newSymbol: PointStyleOptions) {
        this._pinSymbol = new PointStyle(newSymbol);
    }

    /**
     * Toggleable flag to enable/disable the pin drop.
     */
    get active(): boolean {
        return this._active;
    }

    set active(newValue: boolean) {
        if (!newValue) {
            // we will use hide instead of remove.
            // this gives the option of the API user to call .restorePin() after reactivating,
            // but they can also just not and nobody will care.
            this.hidePin();
        }

        this._active = newValue;
    }

    /**
     * Makes the pin automatically drop when a map identify occurs
     */
    get linkIdentify(): boolean {
        return this._linkIdentify;
    }

    set linkIdentify(newValue: boolean) {
        if (newValue === this._linkIdentify) {
            return;
        }

        this._linkIdentify = newValue;

        if (newValue) {
            // set up handlers

            this.$iApi.event.on(
                'map/identify',
                async identResult => {
                    // add the pin where we identify-clicked
                    this.dropPin(identResult.click.mapPoint);
                },
                IDENTIFY_EVENT_HANDLER
            );
        } else {
            // wipe handlers
            this._cleanIdentify();
        }
    }

    /**
     * Makes the pin show and hide when the details panel is active.
     */
    get linkDetails(): boolean {
        return this._linkDetails;
    }

    set linkDetails(newValue: boolean) {
        if (newValue === this._linkDetails) {
            return;
        }

        this._linkDetails = newValue;

        if (newValue) {
            // set up handlers

            this.$iApi.event.on(
                GlobalEvents.PANEL_CLOSED,
                async panel => {
                    if (panel.id === 'details') {
                        // details closed. remove pin
                        this.removePin();
                    }
                },
                PANEL_CLOSE_EVENT_HANDLER
            );

            this.$iApi.event.on(
                GlobalEvents.PANEL_MINIMIZED,
                panel => {
                    if (panel.id === 'details') {
                        // details minimized. hide pin from map
                        this.hidePin();
                    }
                },
                PANEL_MINIMIZE_EVENT_HANDLER
            );

            this.$iApi.event.on(
                GlobalEvents.PANEL_OPENED,
                panel => {
                    if (panel.id === 'details' && !this._pinVisible && this._pinPoint) {
                        // details opened, pin isn't visible, but we have a point retained.
                        // equates to minimized/hidden details becoming visible again.
                        // restore the hidden pin
                        this.restorePin();
                    }
                },
                PANEL_OPEN_EVENT_HANDLER
            );
        } else {
            // wipe handlers
            this._cleanDetails();
        }
    }

    initialized(): void {
        // this fires when the map is created.

        // create the pin layer once the map is available
        this.initPinLayer();
    }

    /**
     * Cleans up fixture when its done.
     */
    cleanup(): void {
        if (this._linkDetails) {
            this._cleanDetails();
        }
        if (this._linkIdentify) {
            this._cleanIdentify();
        }
    }

    _parseConfig(pindropConfig?: PinDropConfig) {
        let defaultPin = true;

        if (pindropConfig) {
            if (pindropConfig.pinSymbol) {
                this.pinSymbol = pindropConfig.pinSymbol;
                defaultPin = false;
            }

            this.linkDetails = !!pindropConfig.linkDetails;
            this.linkIdentify = !!pindropConfig.linkIdentify;
        }

        if (defaultPin) {
            this.pinSymbol = DEFAULT_PIN;
        }
    }

    /**
     * Initialize the pin layer.
     *
     * @returns {Promise} resolves when layer is added to the map
     */
    async initPinLayer(): Promise<void> {
        const geoAPI = this.$iApi.geo;
        const pinLayer = geoAPI.layer.createLayer({
            id: PINDROP_LAYER_NAME,
            layerType: LayerType.GRAPHIC,
            cosmetic: true,
            system: true,
            url: ''
        });

        await geoAPI.map.addLayer(pinLayer);
    }

    /**
     * Place a pin at the given point on the map
     *
     * @param {Point} dropPoint map location for the new pin
     */
    dropPin(dropPoint: Point): void {
        if (this.active) {
            this._pinPoint = dropPoint;
            this._insertPin();
        }
    }

    /**
     * Remove the pin from the map for good.
     */
    removePin(): void {
        this._erasePin();
        this._pinPoint = undefined;
    }

    /**
     * Hide the pin but retain the position for a future restorePin() call
     */
    hidePin(): void {
        this._erasePin();
    }

    /**
     * If a pin was hidden, show it again.
     */
    restorePin(): void {
        if (this.active && this._pinPoint && !this._pinVisible) {
            this._insertPin();
        }
    }

    /**
     * Return the Pindrop Layer
     */
    getPindropLayer(): CommonGraphicLayer | undefined {
        // NOTE not doing an async waiting here (see BaseHilightMode.layerFetcher() for example of waiting technique).
        //      Expect the layer creation to be near-instant. Convert if we run into timing problems

        return this.$iApi.geo.layer.getLayer(PINDROP_LAYER_NAME) as CommonGraphicLayer | undefined;
    }

    /**
     * Return the Pindrop Layer name
     */
    get pindropLayerName(): string {
        return PINDROP_LAYER_NAME;
    }

    /**
     * Worker to actually insert the pin into the layer. Assumes point and style are set
     */
    private _insertPin(): void {
        const pinLayer = this.getPindropLayer();
        if (pinLayer && this._pinPoint) {
            this._erasePin(pinLayer);

            const pinGraphic = new Graphic(this._pinPoint, 'ramp-pin');
            pinGraphic.style = this._pinSymbol;

            pinLayer.addGraphic(pinGraphic);

            this._pinVisible = true;

            // ensure pin layer is top-most.
            // note that the actual esri glow highlight seems to overpower the pin regardless.
            // i'm assuming it lives above the map stack in magical glow land.

            const geoAPI = this.$iApi.geo;
            const layerOrder = geoAPI.layer.layerOrderIds();
            const top = layerOrder.length - 1;
            if (layerOrder[top] !== PINDROP_LAYER_NAME) {
                geoAPI.map.reorder(pinLayer, top, false);
            }
        }
    }

    /**
     * Worker to actually remove the pin from the layer
     */
    private _erasePin(alreadyGrabbedPinLayer?: CommonGraphicLayer): void {
        if (this._pinVisible) {
            const pinLayer = alreadyGrabbedPinLayer ?? this.getPindropLayer();
            if (pinLayer) {
                pinLayer.removeGraphic();
            }
            this._pinVisible = false;
        }
    }

    /**
     * Worker to remove events that connect to identify
     */
    private _cleanIdentify(): void {
        this.$iApi.event.off(IDENTIFY_EVENT_HANDLER);
    }

    /**
     * Worker to remove events that connect to details
     */
    private _cleanDetails(): void {
        const evt = this.$iApi.event;
        evt.off(PANEL_CLOSE_EVENT_HANDLER);
        evt.off(PANEL_OPEN_EVENT_HANDLER);
        evt.off(PANEL_MINIMIZE_EVENT_HANDLER);
    }

    /**
     * Determines if the detail panel is visible
     */
    /*
    private isDetailVisible(): boolean {
        const panel = this.$iApi.panel.get('details');
        return !!(panel && (panel.teleport || panel.isVisible));
    }
    */
}
