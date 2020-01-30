import { RampConfig } from '@/types';

export class ConfigState {
    config: RampConfig;

    constructor(config: any) {
        this.config = config;
    }
}
