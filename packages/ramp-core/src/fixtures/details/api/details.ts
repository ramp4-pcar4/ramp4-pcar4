import { FixtureInstance } from '@/api';
import { IdentifyResult } from '@/geo/api';
import {
    DetailsConfig,
    DetailsItemSet,
    DetailsItemInstance,
    DetailsStore
} from '../store';

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

        // Open the details panel.
        let layersPanel = this.$iApi.panel.get('details-layers-panel');
        if (!layersPanel.isOpen) {
            this.$iApi.panel.open({
                id: 'details-layers-panel'
            });
        }

        // Close the items panel.
        let itemsPanel = this.$iApi.panel.get('details-items-panel');
        if (itemsPanel.isOpen) {
            itemsPanel.close();
        }
    }

    /**
     * Provided with the data for a single feature, open the details panel directly to the feature screen.
     *
     * @param {{data: any, uid: string}} featureData
     * @memberof DetailsAPI
     */
    openFeature(featureData: { data: any; uid: string }) {
        // Clear the payload in the store
        this.$vApp.$store.set(DetailsStore.payload, []);

        // Close the identified layers panel.
        const panel = this.$iApi.panel.get('details-layers-panel');
        if (panel.isOpen) {
            this.$iApi.panel.close(panel);
        }

        // Open or update the items panel
        let itemsPanel = this.$iApi.panel.get('details-items-panel');
        let props: any = {
            result: {
                items: [{ data: featureData.data }],
                uid: featureData.uid,
                loadPromise: Promise.resolve()
            }
        };
        if (!itemsPanel.isOpen) {
            // open the items panel
            this.$iApi.panel!.open({
                id: 'details-items-panel',
                screen: 'item-screen',
                props: props
            });
        } else {
            // update the items screen
            itemsPanel!.show({
                screen: 'item-screen',
                props: props
            });
        }
    }

    /**
     * Read the details section of the configuration file and save any custom template bindings in the store.
     *
     * @param {DetailsConfig} [config]
     * @memberof DetailsAPI
     */
    _parseConfig(config?: DetailsConfig) {
        if (!config) return;

        const detailsItems = config.items.map(
            (item: any) => new DetailsItemInstance(item)
        );

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
            this.$vApp.$store.get<DetailsItemInstance[]>(
                DetailsStore.templates
            )!
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
