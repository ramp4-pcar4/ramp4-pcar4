import type { RampBasemapConfig } from '@/geo/api';
import type { RampConfig } from '@/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useLayerStore } from '../layer';

export const useConfigStore = defineStore('config', () => {
    const config = ref<RampConfig>({
        map: {
            lodSets: [],
            extentSets: [],
            tileSchemas: [],
            basemaps: [],
            initialBasemapId: ''
        },
        fixtures: {},
        layers: []
    });
    const startingFixtures = ref<string[]>([]);
    const activeBasemapConfig = ref<RampBasemapConfig>();
    const registeredConfigs = ref<{ [key: string]: RampConfig }>({});
    const registeredLangs = ref<{ [key: string]: string }>({});

    function getActiveConfig(lang: string): RampConfig {
        if (
            registeredConfigs.value[registeredLangs.value[lang]] === undefined
        ) {
            throw new Error(
                'Unsupported language or no registered config exists for requested language'
            );
        }
        return registeredConfigs.value[registeredLangs.value[lang]];
    }

    function newConfig(newConfig: RampConfig): void {
        const updatedConfig = { ...config.value, ...newConfig };
        config.value = updatedConfig;
        // TODO: Verify this does not cause multi ramp problems.
        if (Array.isArray(config.value.layers)) {
            const layerStore = useLayerStore();
            layerStore.layerConfigs = [
                ...(layerStore.layerConfigs as any),
                config.value.layers as any
            ];
        }
    }

    function registerConfig(configInfo: any): void {
        // configLangs are languages with a given config, whereas allLangs include languages without their own config
        const configLangs = configInfo.configLangs;
        const config = configInfo.config;
        const allLangs = configInfo.allLangs;
        if (configLangs !== undefined && configLangs.length > 0) {
            // register config for specified languages
            configLangs.forEach((lang: string) => {
                registeredConfigs.value[lang] = config;
                // add correspondence between language and config
                registeredLangs.value[lang] = lang;
            });
        }
        if (allLangs !== undefined && allLangs.length > 0) {
            // register config for all available languages
            allLangs.forEach((lang: string) => {
                // initially each language corresponds to first config by default
                registeredLangs.value[lang] = Object.keys(
                    registeredConfigs.value
                )[0];
            });
        }
    }

    return {
        config,
        startingFixtures,
        activeBasemapConfig,
        registeredConfigs,
        registeredLangs,
        getActiveConfig,
        newConfig,
        registerConfig
    };
});
