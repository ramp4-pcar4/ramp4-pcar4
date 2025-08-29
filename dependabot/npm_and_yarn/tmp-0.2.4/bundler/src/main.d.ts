import { GeoCommonAPI } from './geo/api/geo-common';
import { InstanceAPI } from './api/internal';
import { RampOptions } from './api/instance';
import { RampConfigs } from './types';
import { RampLayerConfig } from './geo/api';
export declare const version: {
    major: string;
    minor: string;
    patch: string;
    timestamp: string;
    hash: string;
};
export declare function configUpgrade(ramp2Config: any | Array<any>): any;
export declare function layerConfigUpgrade(ramp2LayerConfig: any): RampLayerConfig;
export declare const createInstance: (el: HTMLElement, config?: RampConfigs | undefined, opts?: RampOptions) => InstanceAPI;
export declare const geo: GeoCommonAPI;
