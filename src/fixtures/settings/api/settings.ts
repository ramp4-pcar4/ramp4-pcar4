import { FixtureInstance, LayerInstance } from '@/api';
export class SettingsAPI extends FixtureInstance {
    /**
     * Opens the settings panel. Passes the provided LayerInstance object to the panel.
     *
     * @param {LayerInstance} layer controlled layer
     * @param {boolean} open force panel open or closed
     */
    toggleSettings(layer: LayerInstance, open?: boolean): void {
        const panel = this.$iApi.panel.get('settings');

        // open if closed and not forced to close
        if (!panel.isOpen && open !== false) {
            this.$iApi.panel.open({
                id: 'settings',
                props: { layer: layer }
            });
        } else {
            const currentUid = (panel.route.props! as any).layer.uid;
            // close if open and not forced to open
            if (open !== true) panel.close();
            if (currentUid !== layer.uid) {
                // close and reopen settings panel to indicate settings for a different layer
                setTimeout(() => {
                    this.$iApi.panel.open({
                        id: 'settings',
                        props: { layer: layer }
                    });
                }, 100);
            }
        }
    }
}
