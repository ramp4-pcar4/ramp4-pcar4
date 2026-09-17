import { FixtureInstance, LayerInstance } from '../../../api';
export declare class SettingsAPI extends FixtureInstance {
    /**
     * Opens the settings panel. Passes the provided LayerInstance object to the panel.
     *
     * @param {LayerInstance} layer controlled layer
     * @param {boolean} open force panel open or closed
     */
    toggleSettings(layer: LayerInstance, open?: boolean): void;
}
