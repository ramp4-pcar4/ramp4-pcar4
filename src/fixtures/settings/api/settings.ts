import { FixtureInstance, LayerInstance } from '@/api';
import { LegendStore } from '@/fixtures/legend/store';

export class SettingsAPI extends FixtureInstance {
    /**
     * Opens the settings panel. Passes the provided LayerInstance object to the panel.
     * @param layer
     */
    toggleSettings(layer: LayerInstance): void {
        const panel = this.$iApi.panel.get('settings');
        const legendItem = this.$iApi.$vApp.$store.get(
            LegendStore.getChildById,
            layer?.id
        );
        if (!panel.isOpen) {
            this.$iApi.panel.open({
                id: 'settings',
                props: { layer: layer, legendItem: legendItem }
            });
        } else {
            const currentUid = (panel.route.props! as any).layer.uid;
            if (currentUid !== layer.uid) {
                panel.show({
                    screen: 'settings-screen-content',
                    props: {
                        layer: layer,
                        legendItem: legendItem
                    }
                });
            } else {
                panel.close();
            }
        }
    }
}
