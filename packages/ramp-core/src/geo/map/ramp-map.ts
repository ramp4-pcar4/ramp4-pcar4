// wraps and represents a 2D esri map
// TODO add proper comments

import {
    CommonMapAPI,
    GlobalEvents,
    InstanceAPI,
    LayerInstance
} from '@/api/internal';
import {
    BaseGeometry,
    CoreFilterKey,
    DefPromise,
    Extent,
    GeometryType,
    IdentifyMode,
    IdentifyParameters,
    IdentifyResult,
    IdentifyResultSet,
    MapClick,
    MapMove,
    Point,
    RampMapConfig,
    ScreenPoint,
    ScaleSet,
    SpatialReference
} from '@/geo/api';
import { EsriLOD, EsriMapView } from '@/geo/esri';
import { LayerStore } from '@/store/modules/layer';

// TODO bring in the map actions code

export class MapAPI extends CommonMapAPI {
    // NOTE unlike ESRI3, the map view doesnt have a custom event, it uses property watches.
    //      so if we want to detect scale change we'll need to have another event, it won't be
    //      a big bundle of properties like ESRI3 provided

    // NOTE while having this var be protected makes sense, there are also cases where other parts of the geoapi need to access this.
    //      being public will also to allow hacking, which can be useful in a pinch. use underscore to make it clear this in not for playtimes.
    /**
     * The internal esri map view. Avoid referencing outside of geoapi.
     * @private
     */
    esriView: __esri.MapView | undefined;
    viewPromise: DefPromise; // a promise that resolves when a layer view has been created on the map. helps bridge the view handler with the layer load handler

    /**
     * The map spatial reference in RAMP API Spatial Reference format.
     * Saves us from converting from ESRI format every time it is needed
     * @private
     */
    private _rampSR: SpatialReference | undefined;

    /**
     * @constructor
     * @param {InstanceAPI} iApi the RAMP instance
     */
    constructor(iApi: InstanceAPI) {
        super(iApi);

        this.viewPromise = new DefPromise();
    }

    /**
     * Will generate the actual Map control objects and construct it on the page
     * @param {RampMapConfig} config configuration data for the map
     * @param {string | HTMLDivElement} targetDiv the page div or the div id that the map should be created in
     */
    createMap(config: RampMapConfig, targetDiv: string | HTMLDivElement): void {
        super.createMap(config, targetDiv);

        // TODO if .esriMap or .esriView exists, do we want to do any cleanup on it? E.g. remove event handlers?

        this._rampSR = SpatialReference.fromConfig(
            config.extent.spatialReference
        );

        const esriViewConfig: __esri.MapViewProperties = {
            map: this.esriMap,
            container: targetDiv,
            constraints: {
                lods: <Array<EsriLOD>>config.lods,
                rotationEnabled: false // TODO make rotation a config option?
            },
            spatialReference: this.$iApi.geo.utils.geom._convSrToEsri(
                this._rampSR
            ), // internal, so we will sneak an internal call
            extent: config.extent
        };

        // TODO extract more from config and set appropriate view properties (e.g. intial extent, initial projection, LODs)
        this.esriView = new EsriMapView(esriViewConfig);

        this.esriView.watch('extent', (newval: __esri.Extent) => {
            // NOTE: yes, double events. rationale is a block of code dealing with filters will not
            //       want to have two event handlers (one on filter, one on extent change) and synch
            //       between them. They can subscribe to the filter event and get all the info they need.

            const newExtent = <Extent>(
                this.$iApi.geo.utils.geom.geomEsriToRamp(
                    newval,
                    'map_extent_event'
                )
            );
            this.$iApi.event.emit(GlobalEvents.MAP_EXTENTCHANGE, newExtent);
            this.$iApi.event.emit(GlobalEvents.FILTER_CHANGE, {
                extent: newExtent,
                filterKey: CoreFilterKey.EXTENT
            });
        });

        this.esriView.watch('scale', (newval: number) => {
            this.$iApi.event.emit(GlobalEvents.MAP_SCALECHANGE, newval);
        });

        this.esriView.on('click', esriClick => {
            this.$iApi.event.emit(
                GlobalEvents.MAP_CLICK,
                this.$iApi.geo.utils.geom.esriMapClickToRamp(
                    esriClick,
                    'map_click_point'
                )
            );
        });

        this.esriView.on('double-click', esriClick => {
            this.$iApi.event.emit(
                GlobalEvents.MAP_DOUBLECLICK,
                this.$iApi.geo.utils.geom.esriMapClickToRamp(
                    esriClick,
                    'map_doubleclick_point'
                )
            );
        });

        this.esriView.on('pointer-move', esriMouseMove => {
            // TODO debounce here? the map event fires pretty much every change in pixel value.
            this.$iApi.event.emit(
                GlobalEvents.MAP_MOUSEMOVE,
                this.$iApi.geo.utils.geom.esriMapMouseToRamp(esriMouseMove)
            );
        });

        this.esriView.on('pointer-down', esriMouseDown => {
            // .native is a DOM pointer event
            this.$iApi.event.emit(
                GlobalEvents.MAP_MOUSEDOWN,
                esriMouseDown.native
            );
        });

        this.esriView.on('key-down', esriKeyDown => {
            // .native is a DOM keyboard event
            this.$iApi.event.emit(GlobalEvents.MAP_KEYDOWN, esriKeyDown.native);
            esriKeyDown.stopPropagation();
        });

        this.esriView.on('key-up', esriKeyUp => {
            // .native is a DOM keyboard event
            this.$iApi.event.emit(GlobalEvents.MAP_KEYUP, esriKeyUp.native);
            esriKeyUp.stopPropagation();
        });

        this.esriView.on('blur', esriBlur => {
            // .native is a DOM keyboard event
            this.$iApi.event.emit(GlobalEvents.MAP_BLUR, esriBlur.native);
        });

        this.esriView.container.addEventListener('touchmove', e => {
            // need this for panning and zooming to work on mobile devices / touchscreens
            // touchmove stops the drag event (what the MapView reacts to) from firing properly
            e.preventDefault();
        });

        this.viewPromise.resolveMe();
    }

    /**
     * Projects a geometry to the map's spatial reference
     *
     * @private
     * @param {BaseGeometry} geom the RAMP API geometry to project
     * @returns {Promise<BaseGeometry>} the geometry projected to the map's projection, in RAMP API Geometry format
     */
    private geomToMapSR(geom: BaseGeometry): Promise<BaseGeometry> {
        if (!this._rampSR) {
            throw new Error(
                'call to map.geomToMapSR before the map spatial ref was created'
            );
        }
        if (this._rampSR.isEqual(geom.sr)) {
            return Promise.resolve(geom);
        } else {
            return this.$iApi.geo.utils.proj.projectGeometry(
                this._rampSR,
                geom
            );
        }
    }

    /**
     * Adds a layer to the map
     *
     * @param {LayerInstance} layer the Ramp layer to add
     * @returns {Promise<void>} a promise that resolves when the layer has been added to the map
     */
    addLayer(layer: LayerInstance): void {
        if (!this.esriMap) {
            this.noMapErr();
            return;
        }
        // await layer.isReadyForMap();
        if (layer.esriLayer) {
            this.esriMap.add(layer.esriLayer);
        } else {
            // TODO maybe we should call layer.initiate() and block? Could be a nice shortcut. But also might have unintended effects.
            console.error(
                'Layer added to map without an esri layer. Likely layer.initiate() was not called or had not finished.'
            );
        }
    }

    /**
     * Adds a highlight layer to the map
     *
     * @param {HighlightLayer} highlightLayer the highlight
     */
    // TODO make a decision to re-add or remove after we figure out what highlight layers are dong
    /*
    addHighlightLayer (highlightLayer: HighlightLayer): void {
        this.esriMap.add(highlightLayer.esriLayer);
    }
    */

    // TODO passthrough functions, either by aly magic or make them hardcoded

    /**
     * Zooms the map to a given geometry.
     *
     * @param {BaseGeometry} geom A RAMP API geometry to zoom the map to
     * @param {number} [scale] An optional scale value of the map. Is ignored for non-Point geometries
     * @param {boolean} [animate] An optional animation setting. On by default
     * @returns {Promise<void>} A promise that resolves when the map has finished zooming
     */
    async zoomMapTo(
        geom: BaseGeometry,
        scale?: number,
        animate: boolean = true
    ): Promise<void> {
        // TODO technically this can accept any geometry. should we open up the suggested signatures to allow various things?
        if (this.esriView) {
            const g = await this.geomToMapSR(geom);
            // TODO investigate the `snapTo` parameter if we have an extent / poly coming in
            //      see how it compares to the old "fit to view" parameter of ESRI3
            const zoomP: any = {
                target: this.$iApi.geo.utils.geom.geomRampToEsri(g)
            };
            if (g.type === GeometryType.POINT) {
                zoomP.scale = scale || 50000;
            }
            const opts: any = { animate: animate };
            if (this.esriView) {
                return this.esriView.goTo(zoomP, opts);
            }
        } else {
            this.noMapErr();
        }
    }

    /**
     * Zooms the map to a given zoom level. The center point will not change.
     * In the rare case where there is no basemap, this will likely do nothing
     *
     * @param {number} zoomLevel An integer matching the level of detail / zoom level the map should adjust to
     * @returns {Promise<void>} A promise that resolves when the map has finished zooming
     */
    async zoomToLevel(zoomLevel: number): Promise<void> {
        if (this.esriView) {
            return this.esriView.goTo({ zoom: zoomLevel });
        } else {
            this.noMapErr();
        }
    }

    /**
     * Zooms the map to the next zoom level in towards the earth. The center point will not change.
     * In the rare case where there is no basemap, this will likely do nothing
     *
     * @returns {Promise<void>} A promise that resolves when the map has finished zooming
     */
    async zoomIn(): Promise<void> {
        // TODO fancy it up and add some bounds checking
        if (this.esriView) {
            return this.zoomToLevel(this.esriView.zoom + 1);
        } else {
            this.noMapErr();
        }
    }

    /**
     * Zooms the map to the next zoom level out away from the earth. The center point will not change.
     * In the rare case where there is no basemap, this will likely do nothing
     *
     * @returns {Promise<void>} A promise that resolves when the map has finished zooming
     */
    async zoomOut(): Promise<void> {
        // TODO fancy it up and add some bounds checking
        if (this.esriView) {
            return this.zoomToLevel(this.esriView.zoom - 1);
        } else {
            this.noMapErr();
        }
    }

    /**
     * Zooms the map to the closest zoom level that will be visible for a given scale set.
     * Does nothing if scale set is already visible for the map.
     *
     * @returns {Promise<void>} A promise that resolves when the map has finished zooming
     */
    async zoomToVisibleScale(scaleSet: ScaleSet): Promise<void> {
        if (!this.esriView) {
            this.noMapErr();
            return;
        }

        const offStatus = scaleSet.isOffScale(this.getScale());

        if (!offStatus.offScale) {
            return;
        }

        const lods = this.esriView.constraints.lods;

        if (!lods) {
            // handle case with no tiles / lods
            return this.zoomMapTo(
                this.getExtent().center(),
                offStatus.zoomIn ? scaleSet.minScale : scaleSet.minScale
            );
        }

        // the lods array is ordered largest scale to smallest scale.  e.g. world view to city view
        // if zoomOut is false, we reverse the array so we search it in the other direction.
        const modLods = offStatus.zoomIn ? lods : [...lods].reverse();

        // scan for appropriate LOD that will make scale set visible, or pick last LOD if no boundary was found
        const scaleLod =
            modLods.find(currentLod =>
                offStatus.zoomIn
                    ? currentLod.scale < scaleSet.minScale
                    : currentLod.scale > scaleSet.maxScale
            ) || modLods[modLods.length - 1];

        return this.zoomToLevel(scaleLod.level);
    }

    /**
     * Provides the scale of the map (the scale denominator as integer)
     *
     * @returns {number} the map scale
     */
    getScale(): number {
        if (this.esriView) {
            return this.esriView.scale;
        } else {
            this.noMapErr();
            return 1; // avoid returning zero, could cause divide-by-zero error in caller.
        }
    }

    /**
     * Provides the resolution of the map. This means the number of map units that is covered by one pixel.
     *
     * @returns {number} the map resolution
     */
    getResolution(): number {
        if (this.esriView) {
            return this.esriView.resolution;
        } else {
            this.noMapErr();
            return 1; // avoid returning zero, could cause divide-by-zero error in caller.
        }
    }

    /**
     * Provides the extent of the map
     *
     * @returns {Extent} the map extent in RAMP API Extent format
     */
    getExtent(): Extent {
        if (this.esriView) {
            return this.$iApi.geo.utils.geom._convEsriExtentToRamp(
                this.esriView.extent
            );
        } else {
            this.noMapErr();
            return Extent.fromParams('i_am_error', 0, 1, 0, 1); // default fake value. avoids us having undefined checks everywhere.
        }
    }

    /**
     * Provides the spatial reference of the map
     *
     * @returns {SpatialReference} the map spatial reference in RAMP API format
     */
    getSR(): SpatialReference {
        if (this._rampSR) {
            return this._rampSR.clone();
        } else {
            this.noMapErr();
            return SpatialReference.latLongSR(); // default fake value. avoids us having undefined checks everywhere.
        }
    }

    /**
     * Get the height of the map on the screen in pixels
     *
     * @returns {Number} pixel height
     */
    getPixelHeight(): number {
        if (this.esriView) {
            return this.esriView.height;
        } else {
            this.noMapErr();
            return 1; // avoid returning zero, could cause divide-by-zero error in caller.
        }
    }

    /**
     * Get the width of the map on the screen in pixels
     *
     * @returns {Number} pixel width
     */
    getPixelWidth(): number {
        if (this.esriView) {
            return this.esriView.width;
        } else {
            this.noMapErr();
            return 1; // avoid returning zero, could cause divide-by-zero error in caller.
        }
    }

    /**
     * Get a point in map co-ordinates corresponding to a pixel in screen co-ordinates.
     *
     * @param {Number} screenX pixel co-ord of the point on the map, x-axis.
     * @param {Number} screenY pixel co-ord of the point on the map, y-axis.
     * @returns {Point} the map point analagous to the screen point
     */
    screenPointToMapPoint(screenX: number, screenY: number): Point {
        if (this.esriView) {
            return this.$iApi.geo.utils.geom._convEsriPointToRamp(
                this.esriView.toMap({ x: screenX, y: screenY }),
                'mappoint'
            );
        } else {
            this.noMapErr();
            return new Point('i_am_error', [0, 0], undefined, true); //  default fake value. avoids us having undefined checks everywhere.
        }
    }

    /**
     * Get a pixel in screen co-ordinates corresponding to a point in map co-ordinates.
     *
     * @param {Point} mapPoint point on the map
     * @returns {ScreenPoint} the screen point analagous to the map point
     */
    mapPointToScreenPoint(mapPoint: Point): ScreenPoint {
        if (this.esriView) {
            const esriPoint = this.esriView.toScreen(
                this.$iApi.geo.utils.geom._convPointToEsri(mapPoint)
            );
            return { screenX: esriPoint.x, screenY: esriPoint.y };
        } else {
            this.noMapErr();
            return { screenX: 1, screenY: 1 }; //  default fake value. avoids us having undefined checks everywhere.
        }
    }

    // TODO function to allow a second Map to be shot out, that shares this map but has a different scene

    // TODO basemap generation stuff (might need to be delayed due to lack of dojo dijit)

    _identifyMode: IdentifyMode[] = [
        IdentifyMode.Query,
        IdentifyMode.Marker,
        IdentifyMode.Highlight,
        IdentifyMode.Haze,
        IdentifyMode.Details
    ];

    // a note about modes and events.
    // depending if we choose to implement the old modes are come up with a new scheme,
    // there are two event handlers that are running stuff (see events.ts).
    // there is a map click event that then triggers the identify routine below
    // and there is the identify event, raised by the routine below, that then opens the details panel.
    // so the solution may need to either do some on/off'ing of the event handlers,
    // or we introduce some global flag variables that get referenced
    // (e.g. dont run identify could be a first line in the function below: if api.noIdentify then return )
    // global flags MIGHT be safer, as it doesn't have to assume the default handlers are in play.
    // i.e. if someone did some event modding for custom results, and we have core code then swapping
    //      default event handlers, would be a mess.

    /**
     * Performs an identify request on all layers that support identify, and combines the results into an object that is readable by the details panel.
     *
     * @param {*} payload
     * @memberof DetailsFixture
     */

    identify(payload: MapClick | Point) {
        let layers: LayerInstance[] | undefined = this.$vApp.$store.get(
            LayerStore.layers
        );

        // Don't perform an identify request if the layers array hasn't been established yet.
        if (layers === undefined) return;

        let p: IdentifyParameters = {
            geometry: payload instanceof Point ? payload : payload.mapPoint
        };

        // Perform an identify request on each layer. Does not perform the request on layers that do not have an identify function (layers that do not support identify).
        const identifyInstances: IdentifyResultSet[] = layers
            .filter(layer => layer.supportsIdentify)
            .map(layer => {
                return layer.identify(p);
            });

        // Merge all results received by the identify into one array.
        const identifyResults: IdentifyResult[] = ([] as IdentifyResult[]).concat(
            ...identifyInstances.map(({ results }) => results)
        );

        let mapClick: MapClick;
        if (payload instanceof Point) {
            // construct MapClick if only point is given
            const screenPoint = this.mapPointToScreenPoint(payload);
            mapClick = {
                mapPoint: payload,
                screenX: screenPoint.screenX,
                screenY: screenPoint.screenY,
                button: 0,
                clickTime: Date.now()
            };
        } else {
            mapClick = payload;
        }

        // TODO make the event payload an interface? should there be a public area with all event payload interfaces?
        this.$iApi.event.emit(GlobalEvents.MAP_IDENTIFY, {
            results: identifyResults,
            click: mapClick
        });
    }

    // list of keys that are currently pressed
    private _activeKeys: string[] = [];

    // ID of pan interval
    private _panInterval: any;

    /**
     * Processes keydown event on map and initiates panning/zooming
     *
     * @param {KeyboardEvent} payload
     * @memberof MapAPI
     */
    mapKeyDown(payload: KeyboardEvent) {
        const zoomKeys = ['=', '-'];
        const panKeys = [
            'Shift',
            'ArrowDown',
            'ArrowLeft',
            'ArrowRight',
            'ArrowUp'
        ];

        if (
            panKeys.includes(payload.key) &&
            !this._activeKeys.includes(payload.key)
        ) {
            this._activeKeys.push(payload.key);
            // don't pan in middle of zoom animation
            if (!this._activeKeys.some(k => zoomKeys.includes(k))) {
                this.keyPan();
            }
        } else if (
            zoomKeys.includes(payload.key) &&
            !this._activeKeys.includes(payload.key)
        ) {
            this._activeKeys.push(payload.key);
            this.keyZoom(payload);
        } else if (payload.key === 'Enter') {
            this.identify(this.getExtent().center());
        }
    }

    /**
     * Processes keyup event on map and deactivates key
     *
     * @param {KeyboardEvent} payload
     * @memberof MapAPI
     */
    mapKeyUp(payload: KeyboardEvent) {
        const zoomKeys = ['=', '-'];

        // ignore zoom keys, manually deactivate them when zoom finishes so keyup won't interrupt zoom animation
        if (
            this._activeKeys.includes(payload.key) &&
            !zoomKeys.includes(payload.key)
        ) {
            this._activeKeys.splice(this._activeKeys.indexOf(payload.key), 1);
            // don't pan in middle of zoom animation
            if (!this._activeKeys.some(k => zoomKeys.includes(k))) {
                this.keyPan();
            }
        }
    }

    /**
     * Stops panning and deactivates all keys
     *
     * @memberof MapAPI
     */
    stopKeyPan() {
        this._activeKeys = [];
        clearInterval(this._panInterval);
    }

    /**
     * Returns if keys are active on map
     *
     * @memberof MapAPI
     * @returns {boolean} - true if any pan/zoom keys are active
     */
    get keysActive(): boolean {
        return this._activeKeys.length !== 0;
    }

    /**
     * Pauses pan interval to process zoom from keyboard
     *
     * @param {KeyboardEvent} payload
     * @memberof MapAPI
     * @private
     */
    private async keyZoom(payload: KeyboardEvent) {
        clearInterval(this._panInterval);
        if (payload.key === '=') {
            await this.zoomIn();
        } else if (payload.key === '-') {
            await this.zoomOut();
        }
        this._activeKeys.splice(this._activeKeys.indexOf(payload.key), 1);
        this.keyPan();
    }

    /**
     * Starts/restarts panning with active keys
     *
     * @memberof MapAPI
     * @private
     */
    private keyPan() {
        clearInterval(this._panInterval);
        if (this._activeKeys.length === 0) {
            return;
        }

        const center = this.getExtent().center();

        // calculate pan velocity based on constant pixel value that won't change based on zoom
        const screenCenter = this.mapPointToScreenPoint(center);
        const p = this.screenPointToMapPoint(
            screenCenter.screenX + 5,
            screenCenter.screenY + 5
        );
        const xDiff = Math.abs(p.x - center.x);
        const yDiff = Math.abs(p.y - center.y);

        let dx = 0;
        let dy = 0;
        let multiplier = 1;

        for (let i = 0; i < this._activeKeys.length; ++i) {
            switch (this._activeKeys[i]) {
                case 'ArrowLeft':
                    dx -= xDiff;
                    break;
                case 'ArrowRight':
                    dx += xDiff;
                    break;
                case 'ArrowUp':
                    dy += yDiff;
                    break;
                case 'ArrowDown':
                    dy -= yDiff;
                    break;
                case 'Shift':
                    multiplier = 2;
                    break;
            }
        }

        const scale = this.getScale();

        this._panInterval = setInterval(() => {
            center.x += multiplier * dx;
            center.y += multiplier * dy;
            this.zoomMapTo(center, scale, false);
        }, 25);
    }
}
