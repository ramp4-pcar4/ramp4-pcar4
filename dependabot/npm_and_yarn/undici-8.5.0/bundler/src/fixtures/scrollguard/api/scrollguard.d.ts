import { FixtureInstance } from '../../../api';
import { ScrollguardConfig } from '../store';
export declare class ScrollguardAPI extends FixtureInstance {
    /**
     * Enables the scrollguard on the map if set to true.
     *
     * @param {boolean} value
     * @memberof ScrollguardAPI
     */
    setEnabled(value: boolean): void;
    /**
     * Parses the scrollguard config JSON snippet from the config file and save to the fixture store.
     *
     * @param {ScrollguardConfig} [ScrollguardConfig]
     * @memberof ScrollguardAPI
     */
    _parseConfig(scrollguardConfig?: ScrollguardConfig): void;
    get config(): ScrollguardConfig | undefined;
}
