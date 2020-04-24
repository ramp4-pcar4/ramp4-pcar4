// wraps and represents a 2D esri map
// TODO add proper comments

import esri = __esri;
import { InfoBundle, RampMapConfig, MapClick } from '../gapiTypes';
import MapBase from './MapBase';
import LayerBase from '../layer/BaseLayer';
import HighlightLayer from '../layer/HighlightLayer';
import Extent from '../api/geometry/Extent';
import Point from '../api/geometry/Point';
import SpatialReference from '../api/geometry/SpatialReference';
import BaseGeometry from '../api/geometry/BaseGeometry';
import { GeometryType } from '../api/apiDefs';
import { TypedEvent } from '../Event';

// NOTE naming this RampMap, to avoid collisions with javascript object `Map`
export class RampMap extends MapBase {

    // NOTE unlike ESRI3, the map view doesnt have a custom event, it uses property watches.
    //      so if we want to detect scale change we'll need to have another event, it won't be
    //      a big bundle of properties like ESRI3 provided

    /**
     * Event that fires when the map extent changes. Event parameter is the extent in RAMP API Extent format.
     */
    extentChanged: TypedEvent<Extent>;

    /**
     * Event that fires when the map scale changes. Event parameter is the scale denominator integer.
     */
    scaleChanged: TypedEvent<number>;

    mapClicked: TypedEvent<MapClick>;

    mapDoubleClicked: TypedEvent<MapClick>;

    // NOTE having this var be protected makes sense, there are also cases where other parts of the geoapi need to access this.
    //      being public will also to allow hacking, which can be useful in a pinch. use underscore to make it clear this in not for playtimes.
    /**
     * The internal esri map view. Avoid referencing outside of geoapi.
     * @private
     */
    _innerView: esri.MapView;

    /**
     * The map spatial reference in RAMP API Spatial Reference format.
     * Saves us from converting from ESRI format every time it is needed
     * @private
     */
    private rampSR: SpatialReference;

    /**
     * @constructor
     * @param {InfoBundle} infoBundle provides the common shared linkages to geoapi
     * @param {RampMapConfig} config configuration data for the map
     * @param {string | HTMLDivElement} targetDiv the page div or the div id that the map should be created in
     */
    constructor (infoBundle: InfoBundle, config: RampMapConfig, targetDiv: string | HTMLDivElement) {

        super(infoBundle, config);

        this.rampSR = SpatialReference.fromConfig(config.extent.spatialReference);
        this.extentChanged = new TypedEvent<Extent>();
        this.scaleChanged = new TypedEvent<number>();
        this.mapClicked = new TypedEvent<MapClick>();
        this.mapDoubleClicked = new TypedEvent<MapClick>();

        const esriViewConfig: esri.MapViewProperties = {
            map: this._innerMap,
            container: targetDiv,
            constraints: {
                lods: <Array<esri.LOD>>config.lods
            },
            spatialReference: this.gapi.utils.geom.convSrToEsri(this.rampSR),
            extent: config.extent,

            // TODO remove these once starting extent is working
            // center: [-76.772, 44.423],
            // zoom: 10
        };

        // TODO extract more from config and set appropriate view properties (e.g. intial extent, initial projection, LODs)
        this._innerView = new this.esriBundle.MapView(esriViewConfig);

        this._innerView.watch('extent', (newval: esri.Extent) => {
            this.extentChanged.fireEvent(<Extent>this.gapi.utils.geom.geomEsriToRamp(newval, 'map_extent_event'));
        });

        this._innerView.watch('scale', (newval: number) => {
            this.scaleChanged.fireEvent(newval);
        });

        this._innerView.on('click', esriClick => {
            this.mapClicked.fireEvent(this.gapi.utils.geom.esriMapClickToRamp(esriClick, 'map_click_point'));
        });

        this._innerView.on('double-click', esriClick => {
            this.mapDoubleClicked.fireEvent(this.gapi.utils.geom.esriMapClickToRamp(esriClick, 'map_doubleclick_point'));
        });
    }

    /**
     * Projects a geometry to the map's spatial reference
     *
     * @private
     * @param {BaseGeometry} geom the RAMP API geometry to project
     * @returns {Promise<BaseGeometry>} the geometry projected to the map's projection, in RAMP API Geometry format
     */
    private geomToMapSR(geom: BaseGeometry): Promise<BaseGeometry> {
        if (this.rampSR.isEqual(geom.sr)) {
            return Promise.resolve(geom);
        } else {
            return this.gapi.utils.proj.projectGeometry(this.rampSR, geom);
        }
    }

    /**
     * Adds a layer to the map
     *
     * @param {LayerBase} layer the GeoAPI layer to add
     * @returns {Promise<void>} a promise that resolves when the layer has been added to the map
     */
    async addLayer (layer: LayerBase): Promise<void> {
        await layer.isReadyForMap();
        this._innerMap.add(layer._innerLayer);
    }

    /**
     * Adds a highlight layer to the map
     *
     * @param {HighlightLayer} highlightLayer the highlight
     */
    addHighlightLayer (highlightLayer: HighlightLayer): void {
        this._innerMap.add(highlightLayer._innerLayer);
    }

    // TODO passthrough functions, either by aly magic or make them hardcoded

    /**
     * Zooms the map to a given extent.
     *
     * @param {Extent} extent A RAMP API Extent to zoom the map to
     * @returns {Promise<void>} A promise that resolves when the map has finished zooming
     */
    zoomMapTo(extent: Extent): Promise<void>;
    /**
     * Zooms the map to a given center point, at a given scale.
     *
     * @param {Point} extent A RAMP API Point to center the map at
     * @param {number} mapScale An integer defining the scale the map should be at
     * @returns {Promise<void>} A promise that resolves when the map has finished zooming
     */
    zoomMapTo(centerPoint: Point, mapScale: number): Promise<void>;
    zoomMapTo(geom: BaseGeometry, scale?: number): Promise<void> {
        // TODO technically this can accept any geometry. should we open up the suggested signatures to allow various things?
        return this.geomToMapSR(geom).then(g => {
            // TODO investigate the `snapTo` parameter if we have an extent / poly coming in
            //      see how it compares to the old "fit to view" parameter of ESRI3
            const zoomP: any = {
                target: this.gapi.utils.geom.geomRampToEsri(g)
            };

            if (g.type === GeometryType.POINT) {
                zoomP.scale = scale;
            }

            return this._innerView.goTo(zoomP);
        });

    }

    /**
     * Provides the scale of the map (the scale denominator as integer)
     *
     * @returns {number} the map scale
     */
    getScale(): number {
        return this._innerView.scale;
    }

    /**
     * Provides the extent of the map
     *
     * @returns {Extent} the map extent in RAMP API Extent format
     */
    getExtent(): Extent {
        return this.gapi.utils.geom.convEsriExtentToRamp(this._innerView.extent);
    }

    /**
     * Provides the spatial reference of the map
     *
     * @returns {SpatialReference} the map spatial reference in RAMP API format
     */
    getSR(): SpatialReference {
        return this.rampSR.clone();
    }

    // TODO function to allow a second Map to be shot out, that shares this map but has a different scene

    // TODO basemap generation stuff (might need to be delayed due to lack of dojo dijit)

}

export default RampMap;