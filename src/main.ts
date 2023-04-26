// this file wrangles up and exports the things that are needed outside of
// or independent from a RAMP instance.
// Traditionally, this is what we would see hanging off the `window.RAMP` global.
// With Vite, things become a bit more complex.

// To access this stuff WITHIN the application source, use a line like
// import { version, geo } from '@/main';
// Using the universal `RAMP.` method of the past will fail, since RAMP is not defined in dev build mode

// To access this stuff outside the application, such as a web page that has just added
// the compiled RAMP lib as a script tag (the IIFE build, according to our buddy Miles),
// then we use the universal `RAMP.` variable. E.g.
// var newConfig = RAMP.configUpgrade(oldConfig);

// How this universal RAMP gets created is rather magical, will handwave the process here.
// 1. In file vite.config.ts , the production build configuration specifies 'RAMP' in property build.lib.name
// 2. In the 3rd party library Rollup ( rollupjs.org ), there is code that generates a global var based on the
//    library name, and contains the "export" of the library (which is what this file does).
//    A code snippet from rollup's source code that is likely doing this.
//
//  if (hasExports) {
//    if (name && !(extend && namedExportsMode)) {
//      wrapperIntro = (useVariableAssignment ? `${cnst} ${name}` : `this${keypath(name, getPropertyAccess)}`) + `${_}=${_}${wrapperIntro}`;
//    }

import { GeoCommonAPI } from '@/geo/api/geo-common';
import { configUpgrade2to4, layerUpgrader, InstanceAPI } from '@/api/internal';
import type { RampOptions } from '@/api/instance';
import type { RampConfigs } from './types';
import type { RampLayerConfig } from './geo/api';

console.log(
    `RAMP v${__RAMP_VERSION__.major}.${__RAMP_VERSION__.minor}.${
        __RAMP_VERSION__.patch
    } [${__RAMP_VERSION__.hash.slice(0, 9)}] (Built on ${new Date(
        __RAMP_VERSION__.timestamp.toString()
    ).toLocaleString()})`
);

export const version = __RAMP_VERSION__;
export function configUpgrade(ramp2Config: any | Array<any>): any {
    return configUpgrade2to4(ramp2Config);
}

export function layerConfigUpgrade(ramp2LayerConfig: any): RampLayerConfig {
    return layerUpgrader(ramp2LayerConfig);
}

export const createInstance = (
    el: HTMLElement,
    config?: RampConfigs | undefined,
    opts?: RampOptions
) => {
    return new InstanceAPI(el, config, opts);
};

// the global (as in, RAMP library, not RAMP instance) instantiation
// of the Geo stuff not bound to instances
export const geo: GeoCommonAPI = new GeoCommonAPI();
