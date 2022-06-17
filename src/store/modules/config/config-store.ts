import type { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';
import type { RampBasemapConfig, RampMapConfig } from '@/geo/api';

import { ConfigState } from './config-state';
import type { RootState } from '@/store';
import { LayerStore } from '../layer';
import type { RampConfig } from '@/types';

// use for actions
type ConfigContext = ActionContext<ConfigState, RootState>;

const getters = {
    getRegisteredConfigs: (
        state: ConfigState
    ): { [key: string]: RampConfig } => {
        return state.registeredConfigs;
    },

    getRegisteredLangs: (state: ConfigState): { [key: string]: string } => {
        return state.registeredLangs;
    },

    getActiveConfig:
        (state: ConfigState) =>
        (lang: string): RampConfig => {
            if (state.registeredConfigs[lang] === undefined) {
                throw new Error(
                    'Unsupported language or no registered config exists for requested language'
                );
            }
            return state.registeredConfigs[lang];
        },

    getMapConfig: (state: ConfigState): RampMapConfig => {
        return state.config.map as RampMapConfig;
    },

    getActiveBasemapConfig: (state: ConfigState): RampBasemapConfig => {
        return state.activeBasemapConfig!;
    },

    getStartingFixtures: (state: ConfigState): string[] => {
        return [...state.startingFixtures!];
    },

    getFixtureConfig:
        (state: ConfigState) =>
        (key: string): any => {
            return state.config.fixtures[key];
        }
};

const actions = {
    newConfig: function (
        this: any,
        context: ConfigContext,
        config: RampConfig
    ): void {
        // Don't merge the configs because it causes issues when reloading, instead set the config directly
        // const newConfig = merge(context.state.config, config);

        context.commit('SET_CONFIG', config);
        console.log('new config adding layers', config.layers);
        this.set(LayerStore.addLayerConfigs, config.layers);
    },
    registerConfig: function (
        this: any,
        context: ConfigContext,
        configInfo: any
    ): void {
        // configLangs are languages with a given config, whereas allLangs include languages without their own config
        const configLangs = configInfo.configLangs;
        const config = configInfo.config;
        const allLangs = configInfo.allLangs;

        if (allLangs !== undefined && allLangs.length > 0) {
            // register config for all available languages
            allLangs.forEach((lang: string) => {
                context.state.registeredConfigs[lang] = config;
                // initially each language corresponds to first config by default
                context.state.registeredLangs[lang] = Object.keys(
                    context.state.registeredConfigs
                )[0];
            });
        }

        if (configLangs !== undefined && configLangs.length > 0) {
            // register config for specified languages
            configLangs.forEach((lang: string) => {
                context.state.registeredConfigs[lang] = config;
                // add correspondence between language and config
                context.state.registeredLangs[lang] = lang;
            });
        }
    },
    updateConfig: function (
        this: any,
        context: ConfigContext,
        fixtureConfig: any
    ): void {
        // TODO: verify config snippet to be applied over config is valid
        // shallow merge to override any identical existing fixtures properties
        const newFixtureConfig = {
            fixtures: { ...context.state.config.fixtures, ...fixtureConfig }
        };

        // shallow merge to override fixtures section of config
        const newConfig = { ...context.state.config, ...newFixtureConfig };
        context.dispatch('registerConfig', newConfig);
        context.commit('SET_CONFIG', newConfig);
    },
    setActiveBasemap: function (
        this: any,
        context: ConfigContext,
        newBasemap: RampBasemapConfig
    ): void {
        // update the active basemap config
        context.state.activeBasemapConfig = newBasemap;
    },
    setStartingFixtures: function (
        this: any,
        context: ConfigContext,
        startingFixtures: string[]
    ): void {
        context.state.startingFixtures = [...startingFixtures];
    }
};

const mutations = {};

/**
 * All string paths for config store Getters, Actions and state
 *
 * @enum {string}
 */
export enum ConfigStore {
    /**
     * `function newConfig(config: RampConfig) => void`
     *
     * Sets the config to be the merge of config and the default
     *
     * `@remarks` Action - use `@Call`
     *
     * `@param` config - The new RAMP config
     */
    newConfig = 'config/newConfig!',
    /**
     * `function registerConfig(configInfo: any) => void`
     *
     * Register a config to specified languages, if no languages specified config will be registered to all available languages
     *
     * `@remarks` Action - use `@Call`
     *
     * `@param` config - new RAMP config to be registered
     */
    registerConfig = 'config/registerConfig!',
    /**
     * `function updateConfig(fixtureConfig: any) => void`
     *
     * Update config based on a modified fixture snippet
     *
     * `@remarks` Action - use `@Call`
     *
     * `@param` config - updated fixture config snippet
     */
    updateConfig = 'config/updateConfig!',
    /**
     * `function setActiveBasemap(newBasemap: RampBasemapConfig) => void`
     *
     * Sets the active basemap config
     *
     * `@remarks` Action - use `@Call`
     *
     * `@param` newBasemap - the new basemap config
     */
    setActiveBasemap = 'config/setActiveBasemap!',
    /**
     * `function setStartingFixtures(startingFixtures: string[]) => void`
     *
     * Sets the list of starting fixture to be loaded when RAMP loads
     * Used when RAMP reloads to change languages
     *
     * `@remarks` Action - use `@Call`
     *
     * `@param` startingFixtures - the starting fixture config
     */
    setStartingFixtures = 'config/setStartingFixtures!',
    /**
     * Get all registered configs for each language
     *
     * `@remarks` Getter - use `@Get`
     *
     * `@returns` <{ [key: string]: RampConfig }> RAMP config for each registered language
     */
    getRegisteredConfigs = 'config/getRegisteredConfigs',
    /**
     * Get correspondence from each language to config
     *
     * `@remarks` Getter - use `@Get`
     *
     * `@returns` <{ [key: string]: string }> RAMP config langauge for each registered language
     */
    getRegisteredLangs = 'config/getRegisteredLangs',
    /**
     * Get active config based on the current map language
     *
     * `@remarks` Getter - use `@Get`
     *
     * `@param` lang - language of config
     *
     * `@returns` <RampConfig> Active config associated with language
     */
    getActiveConfig = 'config/getActiveConfig',
    /**
     * getMapConfig
     *
     * `@remarks` Getter - use `@Get`
     *
     * `@returns` <RampMapConfig> The map portion of the current config
     */
    getMapConfig = 'config/getMapConfig',
    /**
     * getActiveBasemapConfig
     *
     * `@remarks` Getter - use `@Get`
     *
     * `@returns` <RampBasemapConfig> The config of the currently used basemap
     */
    getActiveBasemapConfig = 'config/getActiveBasemapConfig',
    /**
     * getStartingFixtures
     *
     * `@remarks` Getter - use `@Get`
     *
     * `@returns` <string[]> The starting fixtures that RAMP loads with
     */
    getStartingFixtures = 'config/getStartingFixtures',
    /**
     * getFixtureConfig
     *
     * `@remarks` Getter - use `@Get`
     *
     * `@returns` <any> A particular fixture config
     */
    getFixtureConfig = 'config/getFixtureConfig'
}

export function config() {
    const state = new ConfigState({
        config: {
            map: {
                lods: [],
                extent: {
                    xmin: 0,
                    xmax: 0,
                    ymin: 0,
                    ymax: 0,
                    spatialReference: {}
                },
                basemaps: [],
                initialBasemapId: ''
            },
            layers: []
        }
    });

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
