import { GeoCommonAPI } from '@/geo/api/geo-common';
import { InstanceAPI } from '@/api/internal';
import type { RampOptions } from '@/api/instance';
import type { RampConfigs } from './types';
import type { RampLayerConfig } from './geo/api';
export declare const version: {
    major: string;
    minor: string;
    patch: string;
    timestamp: string;
    hash: string;
};
export declare function configUpgrade(ramp2Config: any | Array<any>): any;
export declare function layerConfigUpgrade(ramp2LayerConfig: any): RampLayerConfig;
export declare const createInstance: (el: HTMLElement, config?: RampConfigs | undefined, opts?: RampOptions | undefined) => InstanceAPI;
export declare const geo: GeoCommonAPI;
