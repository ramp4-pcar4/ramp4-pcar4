// convenience file. applies our custom class naming (so we know we have Esri classes, avoids collisions with similarly named Ramp classes)
// and saves us from having to type out the esri library path in every file

// as a general rule, only files in the api/geo subfolder should import from this module. If anything outside needs ESRI classes directly,
// we should consider an alternate approach (some exceptions might arise).

// sorted by library path
import EsriBasemap from '@arcgis/core/Basemap';
import EsriColour from '@arcgis/core/Color';
import EsriConfig from '@arcgis/core/config';
import EsriExtent from '@arcgis/core/geometry/Extent';
import EsriGeometry from '@arcgis/core/geometry/Geometry';
import EsriMultipoint from '@arcgis/core/geometry/Multipoint';
import EsriPoint from '@arcgis/core/geometry/Point';
import EsriPolygon from '@arcgis/core/geometry/Polygon';
import EsriPolyline from '@arcgis/core/geometry/Polyline';
import EsriSpatialReference from '@arcgis/core/geometry/SpatialReference';
import { fromJSON as EsriGeometryFromJson } from '@arcgis/core/geometry/support/jsonUtils';
import EsriGraphic from '@arcgis/core/Graphic';
import EsriFeatureLayer from '@arcgis/core/layers/FeatureLayer';
import EsriGraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import EsriImageryLayer from '@arcgis/core/layers/ImageryLayer';
import EsriMapImageLayer from '@arcgis/core/layers/MapImageLayer';
import EsriOpenStreetMapLayer from '@arcgis/core/layers/OpenStreetMapLayer';
import EsriTileLayer from '@arcgis/core/layers/TileLayer';
import EsriWMSLayer from '@arcgis/core/layers/WMSLayer';
import EsriField from '@arcgis/core/layers/support/Field';
import EsriLOD from '@arcgis/core/layers/support/LOD';
import EsriSublayer from '@arcgis/core/layers/support/Sublayer';
import EsriWMSSublayer from '@arcgis/core/layers/support/WMSSublayer';
import EsriMap from '@arcgis/core/Map';
import EsriClassBreaksRenderer from '@arcgis/core/renderers/ClassBreaksRenderer';
import EsriRenderer from '@arcgis/core/renderers/Renderer';
import EsriSimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import EsriUniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import EsriClassBreakInfo from '@arcgis/core/renderers/support/ClassBreakInfo';
import { fromJSON as EsriRendererFromJson } from '@arcgis/core/renderers/support/jsonUtils';
import EsriUniqueValueInfo from '@arcgis/core/renderers/support/UniqueValueInfo';
import EsriRequest from '@arcgis/core/request';
import { executeForIds as EsriQueryByIds } from '@arcgis/core/rest/query';
import EsriQuery from '@arcgis/core/rest/support/Query';
import EsriPictureMarkerSymbol from '@arcgis/core/symbols/PictureMarkerSymbol';
import EsriSimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import EsriSimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol';
import EsriSimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import EsriSymbol from '@arcgis/core/symbols/Symbol';
import { fromJSON as EsriSymbolFromJson } from '@arcgis/core/symbols/support/jsonUtils';
import EsriFeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import EsriMapView from '@arcgis/core/views/MapView';
import EsriBasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import EsriScaleBar from '@arcgis/core/widgets/ScaleBar';

// sorted by name
export {
    EsriBasemap,
    EsriBasemapGallery,
    EsriClassBreakInfo,
    EsriClassBreaksRenderer,
    EsriColour,
    EsriConfig,
    EsriExtent,
    EsriFeatureFilter,
    EsriFeatureLayer,
    EsriField,
    EsriGeometry,
    EsriGeometryFromJson,
    EsriGraphic,
    EsriGraphicsLayer,
    EsriImageryLayer,
    EsriLOD,
    EsriMap,
    EsriMapImageLayer,
    EsriMapView,
    EsriMultipoint,
    EsriOpenStreetMapLayer,
    EsriPictureMarkerSymbol,
    EsriPoint,
    EsriPolygon,
    EsriPolyline,
    EsriQuery,
    EsriQueryByIds,
    EsriRenderer,
    EsriRendererFromJson,
    EsriRequest,
    EsriScaleBar,
    EsriSimpleFillSymbol,
    EsriSimpleLineSymbol,
    EsriSimpleMarkerSymbol,
    EsriSimpleRenderer,
    EsriSpatialReference,
    EsriSymbol,
    EsriSublayer,
    EsriSymbolFromJson,
    EsriTileLayer,
    EsriUniqueValueInfo,
    EsriUniqueValueRenderer,
    EsriWMSLayer,
    EsriWMSSublayer
};
