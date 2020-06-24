import { APIScope } from './internal';
import { IdentifyResult, IdentifyResultSet, IdentifyItem, IdentifyResultFormat, IdentifyParameters, MapClick } from 'ramp-geoapi';
import BaseLayer from 'ramp-geoapi/dist/layer/BaseLayer';
import { LayerStore, layer } from '@/store/modules/layer';
import { DetailsAPI } from '@/fixtures/details/api/details';

export class MapAPI extends APIScope {
    _identifyMode: IdentifyMode[] = [
        IdentifyMode.Query,
        IdentifyMode.Marker,
        IdentifyMode.Highlight,
        IdentifyMode.Haze,
        IdentifyMode.Details
    ];

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

        // Open the details panel if the details fixture is present and the `Details` mode is set.
        if(this.$iApi.fixture.get('details')) {
          this.$iApi.fixture.get<DetailsAPI>('details').openDetails(identifyResults);
        }
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
