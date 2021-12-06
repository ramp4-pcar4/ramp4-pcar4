import { RampBasemapConfig } from '@/geo/api';
import { RampConfig } from '@/types';

export class ConfigState {
    config: RampConfig;
    activeBasemapConfig: RampBasemapConfig | undefined;
    // change if decide need to support registering multiple configs per lang
    registeredConfigs: { [key: string]: RampConfig };

    constructor(config: any) {
        this.config = config;
        const lang = config.language;
        this.registeredConfigs = { [lang]: config };
    }
}
