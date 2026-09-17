import { Ref } from '../../../vue/dist/vue.esm-bundler.js';
import { Composer } from 'vue-i18n';
import { InstanceAPI } from '../../api/internal';
import { EsriGraphic, EsriGraphicsLayer } from '../../geo/esri';
import { useDrawStore } from './store';
type DrawMeasurementsOptions = {
    iApi: InstanceAPI;
    drawStore: ReturnType<typeof useDrawStore>;
    locale: Ref<string>;
    t: Composer['t'];
    getGraphicsLayer: () => EsriGraphicsLayer | null;
    isShapeDetailsOpen: () => boolean;
    getShapeDetailsGraphic: () => EsriGraphic | undefined;
};
export declare const useDrawMeasurements: ({ iApi, drawStore, locale, t, getGraphicsLayer, isShapeDetailsOpen, getShapeDetailsGraphic }: DrawMeasurementsOptions) => {
    measurementSummary: Ref<string, string>;
    clearMeasurementGraphics: () => void;
    refreshMeasurementGraphics: (activeGraphic?: EsriGraphic, activeTool?: string) => Promise<void>;
    scheduleMeasurementRefresh: (activeGraphic?: EsriGraphic, activeTool?: string) => void;
};
export {};
