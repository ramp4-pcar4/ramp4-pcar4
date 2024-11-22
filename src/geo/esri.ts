// convenience file. applies our custom class naming (so we know we have Esri classes, avoids collisions with similarly named Ramp classes)
// and saves us from having to type out the esri library path in every file

// as a general rule, only files in the api/geo subfolder should import from this module. If anything outside needs ESRI classes directly,
// we should consider an alternate approach (some exceptions might arise).

// sorted by library path
import type EsriBasemap from '@arcgis/core/Basemap';
import EsriColour from '@arcgis/core/Color';
import EsriConfig from '@arcgis/core/config';
import type EsriCollection from '@arcgis/core/core/Collection';
import EsriExtent from '@arcgis/core/geometry/Extent';
import type EsriGeometry from '@arcgis/core/geometry/Geometry';
import EsriMultipoint from '@arcgis/core/geometry/Multipoint';
import EsriPoint from '@arcgis/core/geometry/Point';
import EsriPolygon from '@arcgis/core/geometry/Polygon';
import EsriPolyline from '@arcgis/core/geometry/Polyline';
import EsriSpatialReference from '@arcgis/core/geometry/SpatialReference';
import { fromJSON as EsriGeometryFromJson } from '@arcgis/core/geometry/support/jsonUtils';
import EsriGraphic from '@arcgis/core/Graphic';
import type EsriFeatureLayer from '@arcgis/core/layers/FeatureLayer';
import type EsriGraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import type EsriImageryLayer from '@arcgis/core/layers/ImageryLayer';
import type EsriMapImageLayer from '@arcgis/core/layers/MapImageLayer';
import type EsriOpenStreetMapLayer from '@arcgis/core/layers/OpenStreetMapLayer';
import type EsriTileLayer from '@arcgis/core/layers/TileLayer';
import type EsriWMSLayer from '@arcgis/core/layers/WMSLayer';
import type EsriField from '@arcgis/core/layers/support/Field';
import type EsriLOD from '@arcgis/core/layers/support/LOD';
import type EsriWMSSublayer from '@arcgis/core/layers/support/WMSSublayer';
import type EsriMap from '@arcgis/core/Map';
import type EsriClassBreaksRenderer from '@arcgis/core/renderers/ClassBreaksRenderer';
import type EsriRenderer from '@arcgis/core/renderers/Renderer';
import type EsriSimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import type EsriUniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import type EsriClassBreakInfo from '@arcgis/core/renderers/support/ClassBreakInfo';
import type EsriUniqueValueInfo from '@arcgis/core/renderers/support/UniqueValueInfo';
import EsriRequest from '@arcgis/core/request';
import type EsriQuery from '@arcgis/core/rest/support/Query';
import EsriPictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol';
import EsriSimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import EsriSimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol';
import EsriSimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import type EsriSymbol from '@arcgis/core/symbols/Symbol';
import { fromJSON as EsriSymbolFromJson } from '@arcgis/core/symbols/support/jsonUtils';
import type EsriFeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import type EsriMapView from '@arcgis/core/views/MapView';
import type EsriColorBackground from '@arcgis/core/webmap/background/ColorBackground';
import type EsriSwipe from '@arcgis/core/widgets/Swipe.js';

// NOTE we need to have explicit strings in the `await import()` calls, as that's
//      how Vite knows how to optimize the chunks.
//      So lots of boilerplate here instead of nice `genericLoad(libPath: string)` gettup.

class EsriAPI {
    // --- Maps ---

    static async Basemap(prams: __esri.BasemapProperties): Promise<EsriBasemap> {
        const lib = await import('@arcgis/core/Basemap');
        return Reflect.construct(lib.default, [prams]);
    }

    static async Map(prams: __esri.MapProperties): Promise<EsriMap> {
        const lib = await import('@arcgis/core/Map');
        return Reflect.construct(lib.default, [prams]);
    }

    static async MapView(prams: __esri.MapViewProperties): Promise<EsriMapView> {
        const lib = await import('@arcgis/core/views/MapView');
        return Reflect.construct(lib.default, [prams]);
    }

    // --- Layers ---

    static async FeatureLayer(prams: __esri.FeatureLayerProperties): Promise<EsriFeatureLayer> {
        const lib = await import('@arcgis/core/layers/FeatureLayer');
        return Reflect.construct(lib.default, [prams]);
    }

    static async GraphicsLayer(prams: __esri.GraphicsLayerProperties): Promise<EsriGraphicsLayer> {
        const lib = await import('@arcgis/core/layers/GraphicsLayer');
        return Reflect.construct(lib.default, [prams]);
    }

    static async ImageryLayer(prams: __esri.ImageryLayerProperties): Promise<EsriImageryLayer> {
        const lib = await import('@arcgis/core/layers/ImageryLayer');
        return Reflect.construct(lib.default, [prams]);
    }

    static async MapImageLayer(prams: __esri.MapImageLayerProperties): Promise<EsriMapImageLayer> {
        const lib = await import('@arcgis/core/layers/MapImageLayer');
        return Reflect.construct(lib.default, [prams]);
    }

    static async OpenStreetMapLayer(prams: __esri.OpenStreetMapLayerProperties): Promise<EsriOpenStreetMapLayer> {
        const lib = await import('@arcgis/core/layers/OpenStreetMapLayer');
        return Reflect.construct(lib.default, [prams]);
    }

    static async TileLayer(prams: __esri.TileLayerProperties): Promise<EsriTileLayer> {
        const lib = await import('@arcgis/core/layers/TileLayer');
        return Reflect.construct(lib.default, [prams]);
    }

    static async WMSLayer(prams: __esri.WMSLayerProperties): Promise<EsriWMSLayer> {
        const lib = await import('@arcgis/core/layers/WMSLayer');
        return Reflect.construct(lib.default, [prams]);
    }

    // --- Utils ---

    static async ColorBackground(prams: __esri.ColorBackgroundProperties): Promise<EsriColorBackground> {
        const lib = await import('@arcgis/core/webmap/background/ColorBackground');
        return Reflect.construct(lib.default, [prams]);
    }

    static async FeatureFilter(prams: __esri.FeatureFilterProperties): Promise<EsriFeatureFilter> {
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

    static async QueryByIds(url: string, query: EsriQuery, options?: __esri.RequestOptions): Promise<Array<number>> {
        const { executeForIds } = await import('@arcgis/core/rest/query');
        return executeForIds(url, query, options);
    }

    static async RendererFromJson(json: any): Promise<EsriRenderer> {
        const { fromJSON } = await import('@arcgis/core/renderers/support/jsonUtils');
        return fromJSON(json);
    }

    // --- Components ---

    static async Swipe(prams: __esri.SwipeProperties): Promise<EsriSwipe> {
        const lib = await import('@arcgis/core/widgets/Swipe.js');
        return Reflect.construct(lib.default, [prams]);
    }

    static async Collection(): Promise<EsriCollection> {
        const lib = await import('@arcgis/core/core/Collection');
        return Reflect.construct(lib.default, []);
    }
}

// sorted by name
export {
    EsriAPI,
    type EsriBasemap,
    type EsriClassBreakInfo,
    type EsriClassBreaksRenderer,
    type EsriCollection,
    EsriColour,
    type EsriColorBackground,
    EsriConfig,
    EsriExtent,
    type EsriFeatureFilter,
    type EsriFeatureLayer,
    type EsriField,
    type EsriGeometry,
    EsriGeometryFromJson,
    EsriGraphic,
    type EsriGraphicsLayer,
    type EsriImageryLayer,
    type EsriLOD,
    type EsriMap,
    type EsriMapImageLayer,
    type EsriMapView,
    EsriMultipoint,
    type EsriOpenStreetMapLayer,
    EsriPictureMarkerSymbol,
    EsriPoint,
    EsriPolygon,
    EsriPolyline,
    type EsriQuery,
    type EsriRenderer,
    EsriRequest,
    EsriSimpleFillSymbol,
    EsriSimpleLineSymbol,
    EsriSimpleMarkerSymbol,
    type EsriSimpleRenderer,
    EsriSpatialReference,
    type EsriSwipe,
    type EsriSymbol,
    EsriSymbolFromJson,
    type EsriTileLayer,
    type EsriUniqueValueInfo,
    type EsriUniqueValueRenderer,
    type EsriWMSLayer,
    type EsriWMSSublayer
};
