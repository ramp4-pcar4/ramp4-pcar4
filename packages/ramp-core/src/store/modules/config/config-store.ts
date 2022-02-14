import { ActionContext, Action } from 'vuex';
import { make } from 'vuex-pathify';
import merge from 'deepmerge';
import { RampBasemapConfig, RampMapConfig } from '@/geo/api';

import { ConfigState } from './config-state';
import { RootState } from '@/store';
import { LayerStore } from '../layer';
import { RampConfig } from '@/types';
import { i18n } from '@/lang';

// use for actions
type ConfigContext = ActionContext<ConfigState, RootState>;

const getters = {
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
        const newConfig = merge(context.state.config, config);
        context.commit('SET_CONFIG', newConfig);
        console.log('new config adding layers', newConfig.layers);
        this.set(LayerStore.addLayerConfigs, newConfig.layers);
    },
    registerConfig: function (
        this: any,
        context: ConfigContext,
        configInfo: any
    ): void {
        const langs = configInfo.langs;
        const config = configInfo.config;
        if (langs !== undefined && langs.length > 0) {
            // register config for specified languages
            langs.forEach(
                (lang: string) =>
                    (context.state.registeredConfigs[lang] = config)
            );
        } else {
            // register config for all available languages
            for (const lang in i18n.global.messages) {
                context.state.registeredConfigs[lang] = config;
            }
        }
    },
    overrideConfig: function (
        this: any,
        context: ConfigContext,
        newConfig: RampConfig
    ): void {
        this.set(LayerStore.addLayers, newConfig.layers);
        // save and override registered and main config
        context.dispatch('registerConfig', newConfig);
        context.commit('SET_CONFIG', newConfig);
        // TODO: trigger map reload?
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
     * `function overrideConfig(newConfig: RampConfig) => void`
     *
     * Overrides current active config
     *
     * `@remarks` Action - use `@Call`
     *
     * `@param` config - new RAMP config to override existing one entirely
     */
    overrideConfig = 'config/overrideConfig!',
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
