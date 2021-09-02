import { FixtureInstance } from '@/api';
import { IdentifyItem, IdentifyResult } from '@/geo/api';
import { DetailsConfig, DetailsItemSet, DetailsItemInstance, DetailsStore } from '../store';

export class DetailsAPI extends FixtureInstance {
    get config(): DetailsConfig | undefined {
        return super.config;
    }

    /**
     * Updates the identify result in the store, and then opens the details panel.
     *
     * @param {IdentifyResult[]} payload
     * @memberof DetailsAPI
     */
    openDetails(payload: IdentifyResult[]): void {
        // Save the provided identify result in the store.
        this.$vApp.$store.set('details/setPayload!', payload);

        let panel = this.$iApi.panel.get('details-panel');

        // Open the details panel.
        if (!panel.isOpen) {
            this.$iApi.panel.open({
                id: 'details-panel',
                screen: 'details-screen-layers'
            });
        } else {
            panel.show('details-screen-layers');
        }
    }

    /**
     * Provided with the data for a single feature, open the details panel directly to the feature screen.
     *
     * @param {IdentifyItem} payload
     * @param {string} uid
     * @memberof DetailsAPI
     */
    openFeature(identifyItem: IdentifyItem, uid: string) {
        // make IdentifyResult[] for consitency
        const identifyResult: IdentifyResult = {
            items: [identifyItem],
            uid: uid,
            loadPromise: Promise.resolve()
        };

        // Save the provided identify result in the store.
        this.$vApp.$store.set(DetailsStore.payload, [identifyResult]);
        // Open the details panel.
        const panel = this.$iApi.panel.get('details-panel');
        if (panel.isOpen) {
            this.$iApi.panel.close(panel);
        }
        this.$iApi.panel.open({
            id: 'details-panel',
            screen: 'details-screen-item',
            props: { isFeature: true, resultIndex: 0, itemIndex: 0 }
        });
    }

    /**
     * Read the details section of the configuration file and save any custom template bindings in the store.
     *
     * @param {DetailsConfig} [config]
     * @memberof DetailsAPI
     */
    _parseConfig(config?: DetailsConfig) {
        if (!config) return;

        const detailsItems = config.items.map((item: any) => new DetailsItemInstance(item));

        // save the items in the store
        this.$vApp.$store.set(
            DetailsStore.templates,
            detailsItems.reduce<DetailsItemSet>((map, item) => {
                map[item.id] = item;
                return map;
            }, {})
        );

        this._validateItems();
    }

    /**
     * Check to see if the stored components are registered properly.
     *
     * @memberof DetailsAPI
     */
    _validateItems() {
        Object.values(
            this.$vApp.$store.get<DetailsItemInstance[]>(DetailsStore.templates)!
        ).forEach(item => {
            if (item.template in this.$vApp.$options.components!) {
                this.$vApp.$store.set(
                    `${DetailsStore.templates}@${item.id}.componentId`,
                    item.template
                );
            }
        });
    }
}
