import { markRaw } from 'vue';
import { CommonMapAPI, InstanceAPI } from '@/api/internal';
import {
    BaseGeometry,
    DefPromise,
    Extent,
    GeometryType,
    RampMapConfig,
    SpatialReference
} from '@/geo/api';
import { EsriLOD, EsriMapView, EsriGraphic } from '@/geo/esri';

export class OverviewMapAPI extends CommonMapAPI {
    /**
     * The internal esri map view. Avoid referencing outside of geoapi.
     * @private
     */
    esriView: __esri.MapView | undefined;
    protected _viewPromise: DefPromise;

    // a promise that resolves when a layer view has been created on the map. helps bridge the view handler with the layer load handler
    get viewPromise(): Promise<void> {
        return this._viewPromise.getPromise();
    }

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

        this._viewPromise = new DefPromise();
    }

    /**
     * Will generate the actual Map control objects and construct it on the page
     * @param {RampMapConfig} config configuration data for the map
     * @param {string | HTMLDivElement} targetDiv the page div or the div id that the map should be created in
     */
    createMap(config: RampMapConfig, targetDiv: string | HTMLDivElement): void {
        super.createMap(config, targetDiv);

        this._rampSR = SpatialReference.fromConfig(config.extent.spatialReference);

        const esriViewConfig: __esri.MapViewProperties = {
            map: this.esriMap,
            container: targetDiv,
            constraints: {
                lods: <Array<EsriLOD>>config.lods,
                rotationEnabled: false
            },
            spatialReference: this.$iApi.geo.utils.geom._convSrToEsri(this._rampSR), // internal, so we will sneak an internal call
            extent: config.extent
        };

        this.esriView = markRaw(new EsriMapView(esriViewConfig));
        this.esriView.ui.components = [];

        // initialize extent rectangle graphic
        const graphic = {
            symbol: {
                type: 'simple-fill',
                color: [0, 0, 0, 0.25],
                outline: null
            },
            visible: true
        };
        this.esriView.graphics.add(new EsriGraphic(graphic));

        this.esriView.on('mouse-wheel', esriMouseWheel => {
            esriMouseWheel.stopPropagation();
        });

        this.esriView.on('double-click', esriDoubleClick => {
            esriDoubleClick.stopPropagation();
        });

        this.esriView.on('key-down', esriKeyDown => {
            esriKeyDown.stopPropagation();
        });

        this.esriView.on('key-up', esriKeyUp => {
            esriKeyUp.stopPropagation();
        });

        this.esriView.on('drag', esriDrag => {
            esriDrag.stopPropagation();
            this.mapDrag(esriDrag);
        });

        this.esriView.container.addEventListener('touchmove', e => {
            // need this for panning and zooming to work on mobile devices / touchscreens
            // touchmove stops the drag event (what the MapView reacts to) from firing properly
            e.preventDefault();
        });

        this._viewPromise.resolveMe();
    }

    /**
     * Initial esri extent of graphic during drag
     *
     * @private
     */
    private startExtent: __esri.Extent | null = null;

    /**
     * Moves graphic and zooms main map if extent graphic is dragged
     *
     * @param {__esri.MapViewDragEvent} esriDrag
     * @private
     */
    private async mapDrag(esriDrag: __esri.MapViewDragEvent) {
        if (esriDrag.action === 'start') {
            // check if drag hits graphic, if so set start extent
            if (await this.cursorHitTest(esriDrag)) {
                this.startExtent = markRaw(
                    this.esriView!.graphics.getItemAt(0).geometry
                ) as __esri.Extent;
            }
        } else if (this.startExtent) {
            // determine delta in map coords from drag origin to current drag point and update extent graphic
            const origin = this.esriView!.toMap(esriDrag.origin);
            const pos = this.esriView!.toMap({ x: esriDrag.x, y: esriDrag.y });
            const newExtent = this.startExtent
                .clone()
                .offset(pos.x - origin.x, pos.y - origin.y, 0);
            this.esriView!.graphics.getItemAt(0).geometry = newExtent;

            if (esriDrag.action === 'end') {
                // zoom main map once drag is done
                this.$iApi.geo.map.zoomMapTo(
                    this.$iApi.geo.utils.geom.geomEsriToRamp(newExtent),
                    undefined,
                    false
                );
                this.startExtent = null;
            }
        }
    }

    /**
     * Updates overviewmap extent and graphic based on main map extent
     *
     * @param {Extent} newExtent new main map extent
     */
    updateOverview(newExtent: Extent) {
        const hRatio = this.$iApi.geo.map.getPixelHeight() / this.getPixelHeight();
        const wRatio = this.$iApi.geo.map.getPixelWidth() / this.getPixelWidth();
        const overviewScale = this.$iApi.geo.map.getScale() * 1.5 * Math.max(hRatio, wRatio);
        this.zoomMapTo(newExtent.center(), overviewScale, false);

        // this draws the outline of the main map extent
        this.esriView!.graphics.getItemAt(0).geometry = this.$iApi.geo.map.esriView!.extent;
    }

    /**
     * Checks if mouse event intersects with extent graphic
     *
     * @param {MouseEvent} e
     * @returns {Promise<boolean>}
     */
    async cursorHitTest(e: MouseEvent | __esri.MapViewScreenPoint): Promise<boolean> {
        const hitTestResult = await this.esriView!.hitTest(e);
        return hitTestResult.results.length > 0;
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
            throw new Error('call to map.geomToMapSR before the map spatial ref was created');
        }
        if (this._rampSR.isEqual(geom.sr)) {
            return Promise.resolve(geom);
        } else {
            return this.$iApi.geo.utils.proj.projectGeometry(this._rampSR, geom);
        }
    }

    /**
     * Zooms the map to a given geometry.
     *
     * @param {BaseGeometry} geom A RAMP API geometry to zoom the map to
     * @param {number} [scale] An optional scale value of the map. Is ignored for non-Point geometries
     * @param {boolean} [animate] An optional animation setting. On by default
     * @returns {Promise<void>} A promise that resolves when the map has finished zooming
     */
    async zoomMapTo(geom: BaseGeometry, scale?: number, animate: boolean = true): Promise<void> {
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
            return this.$iApi.geo.utils.geom._convEsriExtentToRamp(this.esriView.extent);
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
}
