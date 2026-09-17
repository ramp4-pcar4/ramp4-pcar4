import { RampBasemapConfig } from '../../geo/api';
import { RampConfig, RampConfigs } from '../../types';
import { Ref, ShallowRef } from '../../../vue/dist/vue.esm-bundler.js';
type ConfigStoreDefinition = {
    activeBasemapConfig: Ref<RampBasemapConfig | undefined>;
    config: ShallowRef<RampConfig>;
    registeredConfigs: Ref<Record<string, RampConfig>>;
    registeredLangs: Ref<Record<string, string>>;
    startingFixtures: Ref<Array<string>>;
    getActiveConfig: (lang: string) => RampConfig;
    newConfig: (newConfig: RampConfig) => void;
    registerAllConfigs: (allConfigs: RampConfigs, allLangs: Array<string>) => void;
    registerConfig: (config: RampConfig, lang: string) => void;
};
export declare const useConfigStore: import('pinia').StoreDefinition<"config", Pick<ConfigStoreDefinition, "config" | "activeBasemapConfig" | "registeredConfigs" | "registeredLangs" | "startingFixtures">, Pick<ConfigStoreDefinition, never>, Pick<ConfigStoreDefinition, "getActiveConfig" | "newConfig" | "registerAllConfigs" | "registerConfig">>;
export {};
