import { DetailsAPI } from './api/details';
import { details } from './store';
import DetailsLayerV from './details-layers.vue';
import DetailsResultV from './details-result.vue';
import DetailsItemV from './details-item.vue';
import { LayerStore, layer } from '@/store/modules/layer';
import { IdentifyResult, IdentifyResultSet, IdentifyItem, IdentifyResultFormat, IdentifyParameters, MapClick } from 'ramp-geoapi';
import BaseLayer from 'ramp-geoapi/dist/layer/BaseLayer';

class DetailsFixture extends DetailsAPI {
    async added() {
        this.$iApi.panel.register({
            'details-panel': {
                screens: {
                    'details-screen-layers': DetailsLayerV,
                    'details-screen-result': DetailsResultV,
                    'details-screen-item': DetailsItemV
                },
                style: {
                    width: '350px'
                }
            }
        });

        this.$vApp.$store.registerModule('details', details());

        // Add map click handler for global map identify.
        // TODO: come back to this later, it will most likely be moved to the Event API (https://github.com/ramp4-pcar4/r4design/issues/14)
        // the plon: add a map click global event
        //           add a default event that listens for global event, calls this.identify
        //           be sure to have some "if mode is show identify" logic or at least comments
        this.$iApi.map.mapClicked.listen((payload: MapClick) => {
            return this.identify(payload);
        });
    }

    // TODO we probably want the identify logic living somehwere else. In the core. A fixture should receive the results.
    //      this way other things can get results off whatever event they ride on. Even if this fixture is removed.
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

        // Open the details panel.
        this.openDetails(identifyResults);
    }

    removed() {
        this.$vApp.$store.unregisterModule('details');
    }
}

export default DetailsFixture;
