// defines an interface common to all layers.
// we can allow some things that don't always apply; e.g. a getFeatureCount function,
// which wouldn't apply to a raster layer, but the raster implementation will just
// have a stub that puts an error on the console (see class LayerInstance, which will have stubs).
// doing this allows us to have common "layer" typed variables and we don't have to keep re-casting
// them to get additional methods or props.

// this exists as an interface to allow things outside of ramp to implement it.
// they probably won't have access to "class" LayerInstance when using compiled RAMP (raw javascript).
// this pattern is stolen from the fixture class model.

import {
    AttributeSet,
    Extent,
    FieldDefinition,
    GetGraphicParams,
    GetGraphicResult,
    IdentifyParameters,
    IdentifyResultSet,
    LayerState,
    LegendSymbology,
    ScaleSet,
    TabularAttributeSet,
    TreeNode
} from '@/geo/api';

// TODO consider making a number of these things optional with ? markup.
// TODO add all the stuff from layer instance
export interface LayerBase {
    id: string;
    uid: string;
    layerType: string;

    esriLayer: __esri.Layer | undefined;
    esriView: __esri.LayerView | undefined;

    initialized: boolean;
    initiate(): Promise<void>;
    terminate(): Promise<void>;
    reload(): Promise<void>;

    supportsIdentify: boolean;
    state: LayerState;
    isFile: boolean;
    isLayerLoaded(): Promise<void>;
    isValidState(): boolean;
    supportsFeatures(layerIdx: number | string | undefined): boolean;

    getLayerTree(): TreeNode;
    getName(layerIdx: number | string | undefined): string;
    getVisibility(layerIdx: number | string | undefined): boolean;
    setVisibility(value: boolean, layerIdx: number | string | undefined): void;
    getOpacity(layerIdx: number | string | undefined): number;
    setOpacity(value: number, layerIdx: number | string | undefined): void;
    zoomToVisibleScale(layerIdx: number | string | undefined): Promise<void>;
    getScaleSet(layerIdx: number | string | undefined): ScaleSet;
    isOffscale(
        layerIdx: number | string | undefined,
        testScale: number | undefined
    ): boolean;

    getLegend(layerIdx: number | string | undefined): Array<LegendSymbology>;
    identify(options: IdentifyParameters): IdentifyResultSet;

    // attribute layer props. layers that do not support attributes can just return dummy values
    getFeatureCount?(layerIdx: number | string | undefined): number;
    getGraphic?(
        objectId: number,
        options: GetGraphicParams,
        layerIdx: number | string | undefined
    ): Promise<GetGraphicResult>;
    getIcon?(
        objectId: number,
        layerIdx: number | string | undefined
    ): Promise<string>;

    getOidField?(layerIdx: number | string | undefined): string;
    getNameField?(layerIdx: number | string | undefined): string;
    getGeomType?(layerIdx: number | string | undefined): string;
    getFields?(layerIdx: number | string | undefined): Array<FieldDefinition>;

    getAttributes?(
        layerIdx: number | string | undefined
    ): Promise<AttributeSet>;
    getTabularAttributes?(
        layerIdx: number | string | undefined
    ): Promise<TabularAttributeSet>;
    abortAttributeLoad?(layerIdx: number | string | undefined): void;
    destroyAttributes?(layerIdx: number | string | undefined): void;

    applySqlFilter?(
        exclusions: Array<string>,
        layerIdx: number | string | undefined
    ): void;
    getFilterOIDs?(
        exclusions: Array<string>,
        extent: Extent | undefined,
        layerIdx: number | string | undefined
    ): Promise<Array<number> | undefined>;
    getSqlFilter?(
        filterKey: string,
        layerIdx: number | string | undefined
    ): string;
    setSqlFilter?(
        filterKey: string,
        whereClause: string,
        layerIdx: number | string | undefined
    ): void;
}
