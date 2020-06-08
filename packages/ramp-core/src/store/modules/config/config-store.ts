import { ActionContext, Action } from 'vuex';
import { make } from 'vuex-pathify';
import merge from 'deepmerge';
import { RampMapConfig } from 'ramp-geoapi';

import { ConfigState } from './config-state';
import { RootState } from '@/store';
import { LayerStore } from '../layer';
import { RampConfig } from '@/types';

// use for actions
type ConfigContext = ActionContext<ConfigState, RootState>;

const getters = {
    getActiveConfig: (state: ConfigState): RampConfig | {} => {
        if (state.registeredConfigs[(<any>globalThis).rInstance.language] === undefined) {
            throw new Error('Unsupported language or no registered config exists for requested language')
        }
        return state.registeredConfigs[(<any>globalThis).rInstance.language];
    },

    getMapConfig: (state: ConfigState): RampMapConfig => {
        return state.config.map as RampMapConfig;
    },

    getFixtureConfig: (state: ConfigState) => (key: string): any => {
        return state.config.fixtures[key];
    }
};

const actions = {
    newConfig: function(this: any, context: ConfigContext, config: RampConfig): void {
        const newConfig = merge(context.state.config, config);
        this.set(LayerStore.addLayers, newConfig.layers);

        context.commit('SET_CONFIG', newConfig);
    },
    registerConfig: function(this: any, context: ConfigContext, config: RampConfig): void {
        // register passed in config under appropriate language
        const lang = config.language;
        context.state.registeredConfigs[lang] = config;
    },
    registerOneConfig: function(this: any, context: ConfigContext, config: RampConfig): void {
        // register only one config for all languages
        for (const lang in context.state.registeredConfigs) {
            context.state.registeredConfigs[lang] = config;
        }
    },
    overrideConfig: function(this: any, context: ConfigContext, newConfig: RampConfig): void {
        this.set(LayerStore.addLayers, newConfig.layers);
        // save and override registered and main config
        context.dispatch('registerConfig', newConfig);
        context.commit('SET_CONFIG', newConfig);
        // TODO: trigger map reload?
    },
    updateConfig: function(this: any, context: ConfigContext, fixtureConfig: any): void {
        // TODO: verify config snippet to be applied over config is valid
        // shallow merge to override any identical existing fixtures properties
        const newFixtureConfig = {
            fixtures: { ...context.state.config.fixtures, ...fixtureConfig }
        };

        // shallow merge to override fixtures section of config
        const newConfig = { ...context.state.config, ...newFixtureConfig };
        context.dispatch('registerConfig', newConfig);
        context.commit('SET_CONFIG', newConfig);
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
     * `function registerConfig(newConfig: RampConfig) => void`
     *
     * Register or update a config linked to a specific language
     *
     * `@remarks` Action - use `@Call`
     *
     * `@param` config - new RAMP config to be registered
     */
    registerConfig = 'config/registerConfig!',
    /**
     * `function registerOneConfig(newConfig: RampConfig) => void`
     *
     * Register one config for all languages
     *
     * `@remarks` Action - use `@Call`
     *
     * `@param` config - new RAMP config to be registered
     */
    registerOneConfig = 'config/registerOneConfig!',
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
     * Get active config based on the current map language
     *
     * `@remarks` Getter - use `@Get`
     *
     * `@returns` <RampConfig> New active config
     */
    getActiveConfig = 'config/getActiveConfig',
    /**
     * getMapConfig
     *
     * `@remarks` Getter - use `@Get`
     *
     * `@returns` <RampMapConfig> The map portion of the current config
     */
    getMapConfig = 'config/getMapConfig'
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
