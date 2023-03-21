import { FixtureInstance } from '@/api';
import { useScrollguardStore } from '../store';
import type { ScrollguardConfig } from '../store';

export class ScrollguardAPI extends FixtureInstance {
    /**
     * Enables the scrollguard on the map if set to true.
     *
     * @param {boolean} value
     * @memberof ScrollguardAPI
     */
    setEnabled(value: boolean) {
        useScrollguardStore(this.$vApp.$pinia).enabled = value;
    }

    /**
     * Parses the scrollguard config JSON snippet from the config file and save to the fixture store.
     *
     * @param {ScrollguardConfig} [ScrollguardConfig]
     * @memberof ScrollguardAPI
     */
    _parseConfig(scrollguardConfig?: ScrollguardConfig) {
        useScrollguardStore(this.$vApp.$pinia).enabled =
            scrollguardConfig?.enabled || false;
    }

    get config(): ScrollguardConfig | undefined {
        return super.config;
    }
}
