import { configUpgrade2to4, InstanceAPI } from '@/api/internal';
import type { RampOptions } from '@/api/instance';
import { GeoCommonAPI } from '@/geo/api/geo-common';
import type { RampConfigs } from './types';

export const geoApi = new GeoCommonAPI();
export const version = __VERSION__;
export function configUpgrade(ramp2Config: any | Array<any>): any {
    return configUpgrade2to4(ramp2Config);
}

export const useRamp = (
    el: HTMLElement,
    config?: RampConfigs | undefined,
    opts?: RampOptions
) => {
    return new InstanceAPI(el, config, opts);
};
