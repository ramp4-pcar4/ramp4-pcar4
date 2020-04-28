import { FixtureInstance } from '@/api';
import { IdentifyResult, IdentifyItem } from 'ramp-geoapi';

export class DetailsAPI extends FixtureInstance {
    /**
     * Updates the identify result in the store, and then opens the details panel.
     *
     * @param {IdentifyResult[]} payload
     * @memberof DetailsAPI
     */
    openDetails(payload: IdentifyResult[]): void {
        // Save the provided identify result in the store.
        this.$vApp.$store.set('details/setPayload!', payload);

        // Open the details panel.
        if (!this.$iApi.panel.get('details-panel').isOpen) {
            this.$iApi.panel.open({ id: 'details-panel', screen: 'details-screen-layers' });
        }
    }

    /**
     * Provided with the data for a single feature, open the details panel directly to the feature screen.
     *
     * @param {IdentifyItem} payload
     * @memberof DetailsAPI
     */
    openFeature(payload: IdentifyItem) {
        // Save the provided identify result in the store.
        this.$vApp.$store.set('details/setPayload!', payload);

        // Open the details panel.
        if (!this.$iApi.panel.get('details-panel').isOpen) {
            this.$iApi.panel.open({ id: 'details-panel', screen: 'details-screen-item', props: { isFeature: true } });
        }
    }
}

export interface DetailsAPI {
    openDetails(payload: IdentifyResult[]): void;
}
