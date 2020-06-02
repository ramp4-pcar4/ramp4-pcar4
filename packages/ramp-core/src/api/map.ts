import { APIScope, GlobalEvents } from './internal';
import { IdentifyResult, IdentifyResultSet, IdentifyParameters, MapClick } from 'ramp-geoapi';
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
    identify(payload: MapClick) {
        let layers: BaseLayer[] | undefined = this.$vApp.$store.get(LayerStore.layers);

        // Don't perform an identify request if the layers array hasn't been established yet.
        if (layers === undefined) return;

        let p: IdentifyParameters = {
            geometry: payload.mapPoint
        };

        // Perform an identify request on each layer. Does not perform the request on layers that do not have an identify function (layers that do not support identify).
        const identifyInstances: IdentifyResultSet[] = layers
            .filter(layer => layer.supportsIdentify)
            .map(layer => {
                return layer.identify(p);
            });

        // Merge all results received by the identify into one array.
        const identifyResults: IdentifyResult[] = ([] as IdentifyResult[]).concat(...identifyInstances.map(({ results }) => results));

        // TODO make the event payload an interface? should there be a public area with all event payload interfaces?
        this.$iApi.event.emit(GlobalEvents.IDENTIFY, { results: identifyResults, click: payload });
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
