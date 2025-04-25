import type { RampBasemapConfig } from '@/geo/api';
import type { RampConfig, RampConfigs } from '@/types';
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

    /**
     * Maps a language to the config defined for that language.
     */
    const registeredConfigs = ref<{ [key: string]: RampConfig }>({});

    /**
     * Maps an actual language to the language of the config bound to it.
     * E.g. Separate config: {en:'en', fr:'fr'} ; Mono config keyed to en: {en:'en', fr:'en'}
     */
    const registeredLangs = ref<{ [key: string]: string }>({});

    function getActiveConfig(lang: string): RampConfig {
        if (registeredConfigs.value[registeredLangs.value[lang]] === undefined) {
            throw new Error('Unsupported language or no registered config exists for requested language');
        }
        return registeredConfigs.value[registeredLangs.value[lang]];
    }

    function newConfig(newConfig: RampConfig): void {
        const updatedConfig = { ...config.value, ...newConfig };
        config.value = updatedConfig;
        // TODO: Verify this does not cause multi ramp problems.
        if (Array.isArray(config.value.layers)) {
            const layerStore = useLayerStore();
            layerStore.layerConfigs = [...(layerStore.layerConfigs as any), config.value.layers as any];
        }
    }

    /**
     * Will register a language-specific config to a language code
     *
     * @param {RampConfig} config a config object tailored for a language
     * @param {string} lang the language key to register this config under
     */
    function registerConfig(config: RampConfig, lang: string): void {
        registeredConfigs.value[lang] = config;
        // add correspondence between language and config
        registeredLangs.value[lang] = lang;
    }

    /**
     * Will register a full set of configs, and ensure every supported language is mapped to a config
     *
     * @param {RampConfigs} allConfigs full configuration object containing all language-specific configs for the instance
     * @param {Array<string>} allLangs every language code the instance can support
     */
    function registerAllConfigs(allConfigs: RampConfigs, allLangs: Array<string>): void {
        const providedConfigs = allConfigs.configs;
        const providedLangs = Object.keys(providedConfigs);

        if (providedLangs.length) {
            // This defaulting is fine for classic en/fr ramp. Either all langs have definitions, or only one def exists.
            // If we ever get into > 2 langs, the defaulting will be a bit random.
            // E.g. support en/fr/es , provide configs for fr & es. en will get defaulted to whatever key shows up
            //      first in Object.keys. Which maybe changes every run, or is some arbitrary order (alpha? first insertion?).
            // Worry about it if we start supporting huge tracts of langs.
            const defaultLang = providedLangs[0];

            // make sure every supported language has a config assigned to it
            allLangs.forEach(realLang => {
                // link to real config if one exists for this lang. Otherwise link to the default lang
                const linkedLang = providedLangs.includes(realLang) ? realLang : defaultLang;

                registeredConfigs.value[realLang] = providedConfigs[linkedLang];
                // add correspondence between language and config
                registeredLangs.value[realLang] = linkedLang;
            });
        } else {
            console.error('Nothingburger config set was registered', allConfigs);
        }
    }

    return {
        activeBasemapConfig,
        config,
        registeredConfigs,
        registeredLangs,
        startingFixtures,
        getActiveConfig,
        newConfig,
        registerAllConfigs,
        registerConfig
    };
});
