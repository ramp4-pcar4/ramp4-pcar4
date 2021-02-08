import { FixtureInstance } from '@/api';
import BaseLayer from 'ramp-geoapi/dist/layer/BaseLayer';

export class SettingsAPI extends FixtureInstance {
    /**
     * Opens the settings panel. Passes the provided BaseLayer object to the panel.
     * @param layer
     */
    toggleSettings(uid: string): void {
        const layer = this.$iApi.$vApp.$store.get('layer/getLayerByUid', uid);
        const panel = this.$iApi.panel.get('settings-panel');
        if (!panel.isOpen) {
            this.$iApi.panel.open({ id: 'settings-panel', props: { layer: layer , uid: uid} });
        } else {
            const currentUid = (panel.route.props! as any).uid;
            if (currentUid !== uid) {
                panel.show({screen: 'settings-screen-content', props: { layer: layer , uid: uid }});
            } else {
                panel.close();
            }
        }
    }
}
