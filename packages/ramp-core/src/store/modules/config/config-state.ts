import { RampConfig } from '@/types';

export class ConfigState {
    config: RampConfig;
    // change if decide need to support registering multiple configs per lang
    registeredConfigs: { [key: string]: RampConfig };

    constructor(config: any) {
        this.config = config;
        const lang = config.language;
        this.registeredConfigs = { [lang]: config };
    }
}
