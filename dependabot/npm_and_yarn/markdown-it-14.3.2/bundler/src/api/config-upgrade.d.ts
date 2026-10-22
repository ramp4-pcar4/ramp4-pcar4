import { RampConfigs } from '../types';
/**
 *
 * @param r2c a RAMP2 config or an array of RAMP2 configs (one per language)
 * @returns A RAMP4 config object set (language indexed), adapted as best as possible
 */
export declare function configUpgrade2to4(r2c: any): RampConfigs;
/**
 * Map layer from RAMP2 to RAMP4 config.
 * @param r2layer layer from RAMP2 config
 * @return layer from RAMP4 config
 */
export declare function layerUpgrader(r2layer: any): any;
