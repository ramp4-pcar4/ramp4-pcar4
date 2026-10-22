import { InstanceAPI } from '../../api/internal';
import { EsriGraphic } from '../../geo/esri';
import { DrawBufferSettings, DrawIdentifyBufferMode } from './settings';
import { useDrawStore } from './store';
import { DrawGraphicLike } from './types';
type DrawIdentifyOptions = {
    iApi: InstanceAPI;
    drawStore: ReturnType<typeof useDrawStore>;
    getDrawGraphicId: (graphic: DrawGraphicLike | undefined) => string | undefined;
    getGraphicDrawBufferSettings: (graphic: DrawGraphicLike) => DrawBufferSettings;
    getGraphicDrawIdentifyBufferMode: (graphic: DrawGraphicLike) => DrawIdentifyBufferMode;
    getSelectedFeatureCountGraphic: () => DrawGraphicLike | undefined;
};
export declare const useDrawIdentify: ({ iApi, drawStore, getDrawGraphicId, getGraphicDrawBufferSettings, getGraphicDrawIdentifyBufferMode, getSelectedFeatureCountGraphic }: DrawIdentifyOptions) => {
    refreshSelectedGraphicFeatureCounts: (graphic?: DrawGraphicLike | undefined) => Promise<void>;
    cancelPendingFeatureCountRefresh: () => void;
    cancelFeatureCountRunsForGraphic: (id: string | undefined) => void;
    scheduleFeatureCountRefresh: (graphic: EsriGraphic) => void;
    runIdentifyForSelectedGraphic: () => Promise<void>;
};
export {};
