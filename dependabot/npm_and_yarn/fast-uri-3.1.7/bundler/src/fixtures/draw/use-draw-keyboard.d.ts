import { Composer } from 'vue-i18n';
import { InstanceAPI } from '../../api/internal';
import { EsriGraphic, EsriGraphicsLayer } from '../../geo/esri';
import { useDrawStore } from './store';
import { DrawGraphicLike } from './types';
type DrawKeyboardOptions = {
    iApi: InstanceAPI;
    drawStore: ReturnType<typeof useDrawStore>;
    t: Composer['t'];
    translateTerm: (key?: string) => string;
    getSketch: () => HTMLArcgisSketchElement | null;
    getGraphicsLayer: () => EsriGraphicsLayer | null;
    getSelectedGraphic: () => EsriGraphic | null;
    getKeyboardEditGraphic: () => EsriGraphic | null;
    setSelectedGraphic: (graphic: EsriGraphic | null) => void;
    prepareDrawGraphic: (graphic: EsriGraphic, type: string | undefined) => string;
    applyDrawSymbol: (graphic: EsriGraphic) => void;
    syncBufferGraphic: (graphic: EsriGraphic) => void;
    syncGraphicStoreRecord: (graphic: EsriGraphic) => void;
    syncActiveSketchEditToSource: () => EsriGraphic | undefined;
    highlightSelectedGraphic: (graphic?: EsriGraphic | undefined) => void;
    deleteSelectedGraphic: () => boolean;
    startSketchUpdate: (graphic: EsriGraphic) => void;
    cancelPendingSketchUpdate: () => void;
    clearActiveSketchEdit: (options?: {
        restoreSource?: boolean;
    }) => void;
    refreshMeasurementGraphics: (activeGraphic?: EsriGraphic, activeTool?: string) => Promise<void>;
    scheduleMeasurementRefresh: (activeGraphic?: EsriGraphic, activeTool?: string) => void;
    cancelPendingFeatureCountRefresh: () => void;
    refreshSelectedGraphicFeatureCounts: (graphic?: DrawGraphicLike) => Promise<void>;
};
export declare const useDrawKeyboard: ({ iApi, drawStore, t, translateTerm, getSketch, getGraphicsLayer, getSelectedGraphic, getKeyboardEditGraphic, setSelectedGraphic, prepareDrawGraphic, applyDrawSymbol, syncBufferGraphic, syncGraphicStoreRecord, syncActiveSketchEditToSource, highlightSelectedGraphic, deleteSelectedGraphic, startSketchUpdate, cancelPendingSketchUpdate, clearActiveSketchEdit, refreshMeasurementGraphics, scheduleMeasurementRefresh, cancelPendingFeatureCountRefresh, refreshSelectedGraphicFeatureCounts }: DrawKeyboardOptions) => {
    handleNavigationKeyDown: (e: KeyboardEvent) => void;
    handleGraphicKeyboardEdit: (e: KeyboardEvent) => void;
    resetMultiPointState: () => void;
};
export {};
