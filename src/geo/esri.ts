// convenience file. applies our custom class naming (so we know we have Esri classes, avoids collisions with similarly named Ramp classes)
// and saves us from having to type out the esri library path in every file

// as a general rule, only files in the api/geo subfolder should import from this module. If anything outside needs ESRI classes directly,
// we should consider an alternate approach (some exceptions might arise).

// sorted by library path / general grouping

import type EsriBasemap from '@arcgis/core/Basemap';
import type { BasemapProperties as EsriBasemapProperties } from '@arcgis/core/Basemap';
import EsriColour from '@arcgis/core/Color';
import EsriConfig from '@arcgis/core/config';

import type { ArcadeExecutor as EsriArcadeExecutor, Profile as EsriProfile } from '@arcgis/core/arcade';

import type EsriCollection from '@arcgis/core/core/Collection';
import type { ResourceHandle as EsriResourceHandle } from '@arcgis/core/core/Handles';
import { watch as EsriWatch } from '@arcgis/core/core/reactiveUtils';
import type { ScreenPoint as EsriScreenPoint } from '@arcgis/core/core/types';

import type { GeometryUnion as EsriGeometry } from '@arcgis/core/geometry/types';
import EsriGraphic from '@arcgis/core/Graphic';
import EsriExtent from '@arcgis/core/geometry/Extent';
import EsriMultipoint from '@arcgis/core/geometry/Multipoint';
import EsriPoint from '@arcgis/core/geometry/Point';
import EsriPolygon from '@arcgis/core/geometry/Polygon';
import EsriPolyline from '@arcgis/core/geometry/Polyline';
import EsriSpatialReference from '@arcgis/core/geometry/SpatialReference';
import { execute as EsriAreaOperator } from '@arcgis/core/geometry/operators/areaOperator';
import { execute as EsriCentroidOperator } from '@arcgis/core/geometry/operators/centroidOperator';
import {
    execute as EsriGeodeticAreaOperator,
    isLoaded as EsriGeodeticAreaOperatorIsLoaded,
    load as EsriGeodeticAreaOperatorLoad
} from '@arcgis/core/geometry/operators/geodeticAreaOperator';
import {
    execute as EsriGeodeticLengthOperator,
    isLoaded as EsriGeodeticLengthOperatorIsLoaded,
    load as EsriGeodeticLengthOperatorLoad
} from '@arcgis/core/geometry/operators/geodeticLengthOperator';
import * as EsriIntersectsOperator from '@arcgis/core/geometry/operators/intersectsOperator';
import { execute as EsriLengthOperator } from '@arcgis/core/geometry/operators/lengthOperator';
import { fromJSON as EsriGeometryFromJson } from '@arcgis/core/geometry/support/jsonUtils';

import type EsriFeatureLayer from '@arcgis/core/layers/FeatureLayer';
import type { FeatureLayerProperties as EsriFeatureLayerProperties } from '@arcgis/core/layers/FeatureLayer';
import type EsriGraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import type { GraphicsLayerProperties as EsriGraphicsLayerProperties } from '@arcgis/core/layers/GraphicsLayer';
import type EsriImageryLayer from '@arcgis/core/layers/ImageryLayer';
import type { ImageryLayerProperties as EsriImageryLayerProperties } from '@arcgis/core/layers/ImageryLayer';
import type EsriImageryTileLayer from '@arcgis/core/layers/ImageryTileLayer';
import type { ImageryTileLayerProperties as EsriImageryTileLayerProperties } from '@arcgis/core/layers/ImageryTileLayer';
import type EsriLayer from '@arcgis/core/layers/Layer';
import type { LayerLayerviewCreateEvent as EsriLayerLayerviewCreateEvent } from '@arcgis/core/layers/Layer';
import type EsriMapImageLayer from '@arcgis/core/layers/MapImageLayer';
import type { MapImageLayerProperties as EsriMapImageLayerProperties } from '@arcgis/core/layers/MapImageLayer';
import type EsriOpenStreetMapLayer from '@arcgis/core/layers/OpenStreetMapLayer';
import type { OpenStreetMapLayerProperties as EsriOpenStreetMapLayerProperties } from '@arcgis/core/layers/OpenStreetMapLayer';
import type EsriTileLayer from '@arcgis/core/layers/TileLayer';
import type { TileLayerProperties as EsriTileLayerProperties } from '@arcgis/core/layers/TileLayer';
import type EsriWMSLayer from '@arcgis/core/layers/WMSLayer';
import type { WMSLayerProperties as EsriWMSLayerProperties } from '@arcgis/core/layers/WMSLayer';
import type EsriVectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import type { VectorTileLayerProperties as EsriVectorTileLayerProperties } from '@arcgis/core/layers/VectorTileLayer';
import type EsriFeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import type { FeatureFilterProperties as EsriFeatureFilterProperties } from '@arcgis/core/layers/support/FeatureFilter';
import type EsriFeatureReductionCluster from '@arcgis/core/layers/support/FeatureReductionCluster';
import type EsriField from '@arcgis/core/layers/support/Field';
import type { FieldProperties as EsriFieldProperties } from '@arcgis/core/layers/support/Field';
import type EsriLOD from '@arcgis/core/layers/support/LOD';
import type EsriSublayer from '@arcgis/core/layers/support/Sublayer';
import type EsriWMSSublayer from '@arcgis/core/layers/support/WMSSublayer';

import type EsriMap from '@arcgis/core/Map';
import type { MapProperties as EsriMapProperties } from '@arcgis/core/Map';
import type EsriClassBreaksRenderer from '@arcgis/core/renderers/ClassBreaksRenderer';
import type EsriSimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import type EsriUniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import type EsriClassBreakInfo from '@arcgis/core/renderers/support/ClassBreakInfo';
import type EsriUniqueValueInfo from '@arcgis/core/renderers/support/UniqueValueInfo';

import EsriRequest from '@arcgis/core/request';
import type {
    RequestOptions as EsriRequestOptions,
    RequestResponse as EsriRequestResponse
} from '@arcgis/core/request/types';
import type { RendererUnion as EsriRenderer } from '@arcgis/core/renderers/types';
import type EsriQuery from '@arcgis/core/rest/support/Query';

import EsriPictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol';
import EsriSimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import EsriSimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol';
import EsriSimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import EsriTextSymbol from '@arcgis/core/symbols/TextSymbol';
import type { Symbol2DUnion as EsriSymbol } from '@arcgis/core/symbols/types';
import { fromJSON as EsriSymbolFromJson } from '@arcgis/core/symbols/support/jsonUtils';

import type EsriFeatureLayerView from '@arcgis/core/views/layers/FeatureLayerView';
import type EsriGraphicsLayerView from '@arcgis/core/views/layers/GraphicsLayerView';
import type EsriLayerView from '@arcgis/core/views/layers/LayerView';
import type EsriMapView from '@arcgis/core/views/MapView';
import type { MapViewProperties as EsriMapViewProperties } from '@arcgis/core/views/MapView';
import type {
    GoToOptions2D as EsriGoToOptions2D,
    GraphicHit as EsriGraphicHit,
    UserSettings as EsriUserSettings
} from '@arcgis/core/views/types';
import type {
    ClickEvent as EsriViewClickEvent,
    DoubleClickEvent as EsriViewDoubleClickEvent,
    DragEvent as EsriViewDragEvent,
    PointerEventCommon as EsriViewPointerEventCommon,
    PointerMoveEvent as EsriViewPointerMoveEvent
} from '@arcgis/core/views/input/types';

import type EsriColorBackground from '@arcgis/core/webmap/background/ColorBackground';
import type { ColorBackgroundProperties as EsriColorBackgroundProperties } from '@arcgis/core/webmap/background/ColorBackground';

import type {
    CreateEvent as EsriSketchCreateEvent,
    UpdateEvent as EsriSketchUpdateEvent
} from '@arcgis/core/widgets/Sketch/types';

import '@arcgis/map-components/components/arcgis-sketch';
import '@arcgis/map-components/components/arcgis-swipe';

// NOTE we need to have explicit strings in the `await import()` calls, as that's
//      how Vite knows how to optimize the chunks.
//      So lots of boilerplate here instead of nice `genericLoad(libPath: string)` gettup.

class EsriAPI {
    // --- Maps ---

    static async Basemap(prams: EsriBasemapProperties): Promise<EsriBasemap> {
        const lib = await import('@arcgis/core/Basemap');
        return Reflect.construct(lib.default, [prams]);
    }

    static async Map(prams: EsriMapProperties): Promise<EsriMap> {
        const lib = await import('@arcgis/core/Map');
        return Reflect.construct(lib.default, [prams]);
    }

    static async MapView(prams: EsriMapViewProperties): Promise<EsriMapView> {
        const lib = await import('@arcgis/core/views/MapView');
        return Reflect.construct(lib.default, [prams]);
    }

    // --- Layers ---

    static async FeatureLayer(prams: EsriFeatureLayerProperties): Promise<EsriFeatureLayer> {
        const lib = await import('@arcgis/core/layers/FeatureLayer');
        return Reflect.construct(lib.default, [prams]);
    }

    static async GraphicsLayer(prams: EsriGraphicsLayerProperties): Promise<EsriGraphicsLayer> {
        // NOTE: the ESRI Sketch map component has a hard-import to GraphicLayer.
        //       so we are not gaining a chunk by await-importing this.
        //       will leave as is for now, in case we can figure out a way to await-import the sketch component
        //       (which might be difficult since it needs to register as a component)
        const lib = await import('@arcgis/core/layers/GraphicsLayer');
        return Reflect.construct(lib.default, [prams]);
    }

    static async ImageryLayer(prams: EsriImageryLayerProperties): Promise<EsriImageryLayer> {
        const lib = await import('@arcgis/core/layers/ImageryLayer');
        return Reflect.construct(lib.default, [prams]);
    }

    static async ImageryTileLayer(prams: EsriImageryTileLayerProperties): Promise<EsriImageryTileLayer> {
        const lib = await import('@arcgis/core/layers/ImageryTileLayer');
        return Reflect.construct(lib.default, [prams]);
    }

    static async MapImageLayer(prams: EsriMapImageLayerProperties): Promise<EsriMapImageLayer> {
        const lib = await import('@arcgis/core/layers/MapImageLayer');
        return Reflect.construct(lib.default, [prams]);
    }

    static async OpenStreetMapLayer(prams: EsriOpenStreetMapLayerProperties): Promise<EsriOpenStreetMapLayer> {
        const lib = await import('@arcgis/core/layers/OpenStreetMapLayer');
        return Reflect.construct(lib.default, [prams]);
    }

    static async TileLayer(prams: EsriTileLayerProperties): Promise<EsriTileLayer> {
        const lib = await import('@arcgis/core/layers/TileLayer');
        return Reflect.construct(lib.default, [prams]);
    }

    static async VectorTileLayer(prams: EsriVectorTileLayerProperties): Promise<EsriVectorTileLayer> {
        const lib = await import('@arcgis/core/layers/VectorTileLayer');
        return Reflect.construct(lib.default, [prams]);
    }

    static async WMSLayer(prams: EsriWMSLayerProperties): Promise<EsriWMSLayer> {
        const lib = await import('@arcgis/core/layers/WMSLayer');
        return Reflect.construct(lib.default, [prams]);
    }

    // --- Utils ---

    static async ArcadeExecutor(script: string, profile: EsriProfile): Promise<EsriArcadeExecutor> {
        const { createArcadeExecutor } = await import('@arcgis/core/arcade');
        return await createArcadeExecutor(script, profile);
    }

    /*
    // This returns pre-canned esri profiles. I don't think we actually want that.
    static async ArcadeProfile(esriKey: string): Promise<EsriProfile> {
        const { createArcadeProfile } = await import('@arcgis/core/arcade');
        return  createArcadeProfile(esriKey);
    }
    */

    static async ColorBackground(prams: EsriColorBackgroundProperties): Promise<EsriColorBackground> {
        const lib = await import('@arcgis/core/webmap/background/ColorBackground');
        return Reflect.construct(lib.default, [prams]);
    }

    static async FeatureFilter(prams: EsriFeatureFilterProperties): Promise<EsriFeatureFilter> {
        const lib = await import('@arcgis/core/layers/support/FeatureFilter');
        return Reflect.construct(lib.default, [prams]);
    }

    static async FieldFromJson(json: any): Promise<EsriField> {
        const lib = await import('@arcgis/core/layers/support/Field');
        return lib.default.fromJSON(json);
    }

    static async Query(): Promise<EsriQuery> {
        const lib = await import('@arcgis/core/rest/support/Query');
        return Reflect.construct(lib.default, []);
    }

    static async QueryByIds(url: string, query: EsriQuery, options?: EsriRequestOptions): Promise<Array<number>> {
        const { executeForIds } = await import('@arcgis/core/rest/query');

        // @ts-expect-error esri changed to allow strings as ids. afaik map services are always numbers for oid. if we start encountering strings, can refactor
        return executeForIds(url, query, options);
    }

    static async RendererFromJson(json: any): Promise<EsriRenderer> {
        const { fromJSON } = await import('@arcgis/core/renderers/support/jsonUtils');
        return fromJSON(json)!;
    }
}

// sorted by name
export {
    EsriAPI,
    type EsriArcadeExecutor,
    EsriAreaOperator,
    type EsriBasemap,
    EsriCentroidOperator,
    type EsriClassBreakInfo,
    type EsriClassBreaksRenderer,
    type EsriCollection,
    EsriColour,
    type EsriColorBackground,
    EsriConfig,
    EsriExtent,
    type EsriFeatureFilter,
    type EsriFeatureLayer,
    type EsriFeatureLayerProperties,
    type EsriFeatureLayerView,
    type EsriFeatureReductionCluster,
    type EsriField,
    type EsriFieldProperties,
    EsriGeodeticAreaOperator,
    EsriGeodeticAreaOperatorIsLoaded,
    EsriGeodeticAreaOperatorLoad,
    EsriGeodeticLengthOperator,
    EsriGeodeticLengthOperatorIsLoaded,
    EsriGeodeticLengthOperatorLoad,
    type EsriGeometry,
    EsriGeometryFromJson,
    type EsriGoToOptions2D,
    EsriGraphic,
    type EsriGraphicHit,
    type EsriGraphicsLayer,
    type EsriGraphicsLayerProperties,
    type EsriGraphicsLayerView,
    type EsriImageryLayer,
    type EsriImageryLayerProperties,
    type EsriImageryTileLayer,
    type EsriImageryTileLayerProperties,
    EsriIntersectsOperator,
    type EsriLayer,
    type EsriLayerLayerviewCreateEvent,
    type EsriLayerView,
    EsriLengthOperator,
    type EsriLOD,
    type EsriMap,
    type EsriMapImageLayer,
    type EsriMapImageLayerProperties,
    type EsriMapProperties,
    type EsriMapView,
    EsriMultipoint,
    type EsriOpenStreetMapLayer,
    type EsriOpenStreetMapLayerProperties,
    EsriPictureMarkerSymbol,
    EsriPoint,
    EsriPolygon,
    EsriPolyline,
    type EsriProfile,
    type EsriQuery,
    type EsriRenderer,
    EsriRequest,
    type EsriRequestOptions,
    type EsriRequestResponse,
    type EsriResourceHandle,
    type EsriScreenPoint,
    EsriSimpleFillSymbol,
    EsriSimpleLineSymbol,
    EsriSimpleMarkerSymbol,
    type EsriSimpleRenderer,
    type EsriSketchCreateEvent,
    type EsriSketchUpdateEvent,
    EsriSpatialReference,
    type EsriSublayer,
    type EsriSymbol,
    EsriSymbolFromJson,
    EsriTextSymbol,
    type EsriTileLayer,
    type EsriTileLayerProperties,
    type EsriUniqueValueInfo,
    type EsriUniqueValueRenderer,
    type EsriUserSettings,
    type EsriVectorTileLayer,
    type EsriVectorTileLayerProperties,
    type EsriViewClickEvent,
    type EsriViewDoubleClickEvent,
    type EsriViewDragEvent,
    type EsriViewPointerEventCommon,
    type EsriViewPointerMoveEvent,
    EsriWatch,
    type EsriWMSLayer,
    type EsriWMSLayerProperties,
    type EsriWMSSublayer
};
