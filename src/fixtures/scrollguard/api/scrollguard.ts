import { FixtureInstance } from '@/api';
import { ScrollguardStore } from '../store';
import type { ScrollguardConfig } from '../store';

export class ScrollguardAPI extends FixtureInstance {
    /**
     * Enables the scrollguard on the map if set to true.
     *
     * @param {boolean} value
     * @memberof ScrollguardAPI
     */
    setEnabled(value: boolean) {
        this.$vApp.$store.set(ScrollguardStore.enabled, value);
    }

    /**
     * Parses the scrollguard config JSON snippet from the config file and save to the fixture store.
     *
     * @param {ScrollguardConfig} [ScrollguardConfig]
     * @memberof ScrollguardAPI
     */
    _parseConfig(scrollguardConfig?: ScrollguardConfig) {
        this.$vApp.$store.set(
            ScrollguardStore.enabled,
            scrollguardConfig?.enabled || false
        );
    }

    get config(): ScrollguardConfig | undefined {
        return super.config;
    }
}
