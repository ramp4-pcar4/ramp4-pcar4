import { FixtureInstance } from '@/api';
import BaseLayer from 'ramp-geoapi/dist/layer/BaseLayer';

export class SettingsAPI extends FixtureInstance {
    /**
     * Opens the settings panel. Passes the provided BaseLayer object to the panel.
     * @param layer
     */
    open(layer: BaseLayer): void {
        this.$iApi.panel.open({ id: 'settings-panel', props: { layer: layer } });
    }
}
