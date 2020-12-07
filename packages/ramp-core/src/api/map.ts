import { APIScope, GlobalEvents } from './internal';
import { IdentifyResult, IdentifyResultSet, IdentifyParameters, MapClick, ApiBundle } from 'ramp-geoapi';
import BaseLayer from 'ramp-geoapi/dist/layer/BaseLayer';
import { LayerStore } from '@/store/modules/layer';

export class MapAPI extends APIScope {
    _identifyMode: IdentifyMode[] = [
        IdentifyMode.Query,
        IdentifyMode.Marker,
        IdentifyMode.Highlight,
        IdentifyMode.Haze,
        IdentifyMode.Details
    ];

    // a note about modes and events.
    // depending if we choose to implement the old modes are come up with a new scheme,
    // there are two event handlers that are running stuff (see events.ts).
    // there is a map click event that then triggers the identify routine below
    // and there is the identify event, raised by the routine below, that then opens the details panel.
    // so the solution may need to either do some on/off'ing of the event handlers,
    // or we introduce some global flag variables that get referenced
    // (e.g. dont run identify could be a first line in the function below: if api.noIdentify then return )
    // global flags MIGHT be safer, as it doesn't have to assume the default handlers are in play.
    // i.e. if someone did some event modding for custom results, and we have core code then swapping
    //      default event handlers, would be a mess.

    /**
     * Performs an identify request on all layers that support identify, and combines the results into an object that is readable by the details panel.
     *
     * @param {*} payload
     * @memberof DetailsFixture
     */
    identify(payload: MapClick | ApiBundle.Point) {
        let layers: BaseLayer[] | undefined = this.$vApp.$store.get(LayerStore.layers);

        // Don't perform an identify request if the layers array hasn't been established yet.
        if (layers === undefined) return;

        let p: IdentifyParameters = {
            geometry: payload instanceof ApiBundle.Point ? payload : payload.mapPoint
        };

        // Perform an identify request on each layer. Does not perform the request on layers that do not have an identify function (layers that do not support identify).
        const identifyInstances: IdentifyResultSet[] = layers
            .filter(layer => layer.supportsIdentify)
            .map(layer => {
                return layer.identify(p);
            });

        // Merge all results received by the identify into one array.
        const identifyResults: IdentifyResult[] = ([] as IdentifyResult[]).concat(...identifyInstances.map(({ results }) => results));

        let mapClick: MapClick;
        if (payload instanceof ApiBundle.Point) {
            // construct MapClick if only point is given
            const screenPoint = this.$iApi.map.mapPointToScreenPoint(payload);
            mapClick = {
                mapPoint: payload,
                screenX: screenPoint.screenX,
                screenY: screenPoint.screenY,
                button: 0,
                clickTime: Date.now()
            };
        } else {
            mapClick = payload;
        }

        // TODO make the event payload an interface? should there be a public area with all event payload interfaces?
        this.$iApi.event.emit(GlobalEvents.MAP_IDENTIFY, { results: identifyResults, click: mapClick });
    }

    // list of keys that are currently pressed
    private _activeKeys: string[] = [];

    // ID of pan interval
    private _panInterval: any;

    /**
     * Processes keydown event on map and initiates panning/zooming
     *
     * @param {KeyboardEvent} payload
     * @memberof MapAPI
     */
    mapKeyDown(payload: KeyboardEvent) {
        let zoomKeys = ['=', '-'];
        let panKeys = ['Shift', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp'];

        if (panKeys.includes(payload.key) && !this._activeKeys.includes(payload.key)) {
            this._activeKeys.push(payload.key);
            this.pan();
        } else if (zoomKeys.includes(payload.key)) {
            this.zoom(payload);
        } else if (payload.key === 'Enter') {
            this.identify(this.$iApi.map.getExtent().center());
        }
    }

    /**
     * Processes keyup event on map and deactivates key
     *
     * @param {KeyboardEvent} payload
     * @memberof MapAPI
     */
    mapKeyUp(payload: KeyboardEvent) {
        if (this._activeKeys.includes(payload.key)) {
            this._activeKeys.splice(this._activeKeys.indexOf(payload.key), 1);
            this.pan();
        }
    }

    /**
     * Stops panning and deactivates all keys
     *
     * @memberof MapAPI
     */
    stopPan() {
        this._activeKeys = [];
        clearInterval(this._panInterval);
    }

    /**
     * Pauses pan interval to process zoom from keyboard
     *
     * @param {KeyboardEvent} payload
     * @memberof MapAPI
     * @private
     */
    private async zoom(payload: KeyboardEvent) {
        clearInterval(this._panInterval);
        if (payload.key === '=') {
            await this.$iApi.map.zoomIn();
        } else if (payload.key === '-') {
            await this.$iApi.map.zoomOut();
        }
        this.pan();
    }

    /**
     * Starts/restarts panning with active keys
     *
     * @memberof MapAPI
     * @private
     */
    private pan() {
        clearInterval(this._panInterval);
        if (this._activeKeys.length === 0) {
            return;
        }

        const center = this.$iApi.map.getExtent().center();

        // calculate pan velocity based on constant pixel value that won't change based on zoom
        const screenCenter = this.$iApi.map.mapPointToScreenPoint(center);
        const p = this.$iApi.map.screenPointToMapPoint(screenCenter.screenX + 5, screenCenter.screenY + 5);
        const xDiff = Math.abs(p.x - center.x);
        const yDiff = Math.abs(p.y - center.y);

        let dx = 0;
        let dy = 0;
        let multiplier = 1;

        for (let i = 0; i < this._activeKeys.length; ++i) {
            switch (this._activeKeys[i]) {
                case 'ArrowLeft':
                    dx -= xDiff;
                    break;
                case 'ArrowRight':
                    dx += xDiff;
                    break;
                case 'ArrowUp':
                    dy += yDiff;
                    break;
                case 'ArrowDown':
                    dy -= yDiff;
                    break;
                case 'Shift':
                    multiplier = 2;
                    break;
            };
        }

        const scale = this.$iApi.map.getScale();

        this._panInterval = setInterval(() => {
            center.x += multiplier * dx;
            center.y += multiplier * dy;
            this.$iApi.map.zoomMapTo(center, scale, false);
        }, 25)
    }
}


export enum IdentifyMode {

    /**
     * Runs the identify query and pipes the available results through the `identify` API endpoint.
     */
    Query = 'query',

    /**
     * Display the identify results in the details panel.
     * This option only works in conjunction with the `Query` option. Without `Query`, there will be no results to display in the details panel.
     */
    Details = 'details',

    /**
     * Highlight the identify results on the map. If the `Marker` mode is set, highlighted features will replace the marker.
     * Only works when `Query` is set.
     */
    Highlight = 'highlight',

    /**
     * Adds a graphic marker at the point of a mouse click. The marker will be set on the map even if the `Query` option is not set.
     */
    Marker = 'marker',

    /**
     * Dehighlights all other layers and features except the identify results (if `Highlight` is set) or the marker (if `Marker` is set`).
     * The haze will not be applied if neither `Marker` nor `Highlight` is set.
     */
    Haze = 'haze'
}
