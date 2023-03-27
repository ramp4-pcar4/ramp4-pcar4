import { markRaw } from 'vue';
import {
    Basemap,
    CommonMapAPI,
    GraphicLayer,
    InstanceAPI
} from '@/api/internal';
import { Graphic, LayerType, PolygonStyle } from '@/geo/api';
import type { Extent, RampMapConfig } from '@/geo/api';
import { EsriMapView } from '@/geo/esri';
import { useConfigStore } from '@/stores/config';
import { useOverviewmapStore } from '@/fixtures/overviewmap/store';

export class OverviewMapAPI extends CommonMapAPI {
    protected overviewGraphicLayer: GraphicLayer;
    overviewmapStore: any;

    /**
     * @constructor
     * @param {InstanceAPI} iApi the RAMP instance
     */
    constructor(iApi: InstanceAPI) {
        super(iApi);
        this.overviewGraphicLayer = this.$iApi.geo.layer.createLayer({
            id: 'RampOverviewGraphic',
            layerType: LayerType.GRAPHIC,
            url: '',
            cosmetic: true
        }) as GraphicLayer;
        this.overviewmapStore = useOverviewmapStore(this.$vApp.$pinia);
    }

    /**
     * Will generate a ESRI map view and add it to the page
     * Must provide the basemap or basemap id to be used when creating the map view
     *
     * @param {string | Basemap} basemap the id of the basemap that should be used when creating the map view
     * @protected
     */
    protected createMapView(basemap: string | Basemap): void {
        if (!basemap) {
            throw new Error(
                'Attempted to create overview map view without a basemap'
            );
        }

        const bm: Basemap =
            typeof basemap === 'string' ? this.findBasemap(basemap) : basemap;

        this.applyBasemap(bm);

        // TODO: This assumes that the overview map will be synced with the main map's tile schema, so it just uses the extent/sr from the main map
        //       Revisit this when enhancing the overview map to be able to use a different tile schema than the main map
        this._rampExtentSet = this.$iApi.geo.map.getExtentSet().clone();
        this._rampSR = this._rampExtentSet.sr.clone();

        const expandFactor: number = this.overviewmapStore.expandFactor;

        // create esri view with config
        this.esriView = markRaw(
            new EsriMapView({
                map: this.esriMap,
                container: this._targetDiv,
                constraints: {
                    rotationEnabled: false
                },
                spatialReference: this._rampSR.toESRI(),
                extent: this.$iApi.geo.map
                    .getExtent()
                    .toESRI()
                    .expand(expandFactor) // use the expanded main map extent
            })
        );

        // Remove all ui components
        this.esriView.ui.components = [];

        this.handlers.push({
            type: 'mouse-wheel',
            handler: this.esriView.on('mouse-wheel', esriMouseWheel => {
                esriMouseWheel.stopPropagation();
            })
        });

        this.handlers.push({
            type: 'double-click',
            handler: this.esriView.on('double-click', esriDoubleClick => {
                esriDoubleClick.stopPropagation();
            })
        });

        this.handlers.push({
            type: 'key-down',
            handler: this.esriView.on('key-down', esriKeyDown => {
                esriKeyDown.stopPropagation();
            })
        });

        this.handlers.push({
            type: 'key-up',
            handler: this.esriView.on('key-up', esriKeyUp => {
                esriKeyUp.stopPropagation();
            })
        });

        this.handlers.push({
            type: 'drag',
            handler: this.esriView.on('drag', esriDrag => {
                esriDrag.stopPropagation();
                this.mapDrag(esriDrag);
            })
        });

        this.esriView.container.addEventListener('touchmove', e => {
            // need this for panning and zooming to work on mobile devices / touchscreens
            // touchmove stops the drag event (what the MapView reacts to) from firing properly
            e.preventDefault();
        });

        // as of ESRI v4.26, we need to marinate until .when() is done.
        // otherwise, something happens too fast and the initial calls to view.goTo() grouse quite a lot,
        // and ends up breaking the overview.
        this.esriView.when(() => {
            this._viewPromise.resolveMe();
            this.created = true;
        });
    }

    async addMapGraphicLayer() {
        if (!this.esriMap) {
            this.noMapErr();
            return;
        }

        const overviewGraphic = new Graphic(
            this.$iApi.geo.map.getExtent(),
            'overview-graphic'
        );

        const borderColour = this.overviewmapStore.borderColour ?? '#FF0000';
        const borderWidth = this.overviewmapStore.borderWidth ?? 1;
        const areaColour = this.overviewmapStore.areaColour ?? '#000000';
        const areaOpacity = this.overviewmapStore.areaOpacity ?? 0.25;

        // generate hex colour with alpha
        const areaFill = `${areaColour}${Math.round(areaOpacity * 255).toString(
            16
        )}`;

        overviewGraphic.style = new PolygonStyle({
            fill: { colour: areaFill },
            outline: {
                colour: borderColour,
                width: borderWidth
            }
        });

        await this.overviewGraphicLayer.initiate();
        await this.overviewGraphicLayer.addGraphic(overviewGraphic);
        this.esriMap?.add(this.overviewGraphicLayer.esriLayer!);
    }

    removeMapGraphicLayer() {
        if (!this.esriMap) {
            this.noMapErr();
            return;
        }

        if (!this.overviewGraphicLayer.esriLayer) {
            throw new Error(
                'Attempted to remove layer from the map without an esri layer. Likely layer.initiate() was not called or had not finished.'
            );
        }

        this.overviewGraphicLayer.removeGraphic();
        this.overviewGraphicLayer.terminate();
        this.esriMap.remove(this.overviewGraphicLayer.esriLayer);
    }

    /**
     * Destroys the ESRI map view
     *
     * @protected
     */
    protected destroyMapView(): void {
        // override the method to remove this listener
        this.esriView?.container.removeEventListener('touchmove', e => {
            e.preventDefault();
        });
        // remove the extent graphic
        this.removeMapGraphicLayer();
        super.destroyMapView();
    }

    /**
     * Searches the local basemap list and main map basemaps for a basemap with the given id
     * Throws error if basemap could not be found
     *
     * @param {string} id basemap id
     * @returns {Basemap} the found basemap
     * @protected
     */
    findBasemap(id: string): Basemap {
        const bm: Basemap | undefined = this._basemapStore.find(
            bms => bms.id === id
        );
        if (bm) {
            return bm;
        } else {
            // search the basemaps in the main map config
            const configStore = useConfigStore(this.$vApp.$pinia);
            const mainMapConfig: RampMapConfig = configStore.config.map;
            if (mainMapConfig) {
                const bmConfig = mainMapConfig.basemaps.find(
                    bm => bm.id === id
                );
                if (bmConfig) {
                    return new Basemap(bmConfig);
                }
            }
        }

        throw new Error(`Invalid basemap id requested: ${id}`);
    }

    /**
     * Sets the overview map's basemap to the basemap with the given id.
     * Will refresh the map view if set basemap uses different tile schema.
     *
     * Should only be called by the overview map component
     *
     * @param {string} basemapId the basemap id
     * @returns {boolean} indicates if the schema has changed
     */
    setBasemap(basemapId: string): boolean {
        if (!this.esriView || !this.esriMap) {
            this.noMapErr();
            return false;
        }

        const bm: Basemap = this.findBasemap(basemapId);

        // get the current basemap
        const currBm: Basemap | undefined = this.getCurrentBasemapId()
            ? this.findBasemap(this.getCurrentBasemapId()!)
            : undefined;

        const differentSchema: boolean =
            currBm?.tileSchemaId !== bm.tileSchemaId;

        if (differentSchema) {
            this.destroyMapView();
            this.createMapView(bm);
            this.addMapGraphicLayer();
        } else {
            this.applyBasemap(bm);
        }

        return differentSchema;
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
     * @param {__esri.ViewDragEvent} esriDrag
     * @private
     */
    private async mapDrag(esriDrag: __esri.ViewDragEvent) {
        if (esriDrag.native.pointerType === 'mouse') {
            if (esriDrag.action === 'start') {
                // check if drag hits graphic, if so set start extent
                if (await this.cursorHitTest(esriDrag)) {
                    this.startExtent = markRaw(
                        this.overviewGraphicLayer.getEsriGraphic(
                            'overview-graphic'
                        )!.geometry
                    ) as __esri.Extent;
                }
            } else if (this.startExtent) {
                // determine delta in map coords from drag origin to current drag point and update extent graphic
                const origin = this.esriView!.toMap(esriDrag.origin);
                const pos = this.esriView!.toMap({
                    x: esriDrag.x,
                    y: esriDrag.y
                });
                const newExtent = this.startExtent
                    .clone()
                    .offset(pos.x - origin.x, pos.y - origin.y, 0);
                this.overviewGraphicLayer.getEsriGraphic(
                    'overview-graphic'
                )!.geometry = newExtent;

                if (esriDrag.action === 'end') {
                    // zoom main map once drag is done
                    this.$iApi.geo.map.zoomMapTo(
                        this.$iApi.geo.geom.geomEsriToRamp(newExtent),
                        undefined,
                        false
                    );
                    this.startExtent = null;
                }
            }
        }
    }

    /**
     * Updates overviewmap extent and graphic based on main map extent
     *
     * @param {Extent} newExtent new main map extent
     * @returns {Promise<void>} A promise that resolves when the overviewmap has finished updating
     */
    updateOverview(newExtent: Extent): Promise<void> {
        const expandFactor: number = this.overviewmapStore.expandFactor;

        const zoomPromise = this.zoomMapTo(
            newExtent.expand(expandFactor),
            undefined,
            false
        );

        const graphic =
            this.overviewGraphicLayer.getLocalGraphic('overview-graphic');

        // Instead of directly changing graphic geometry, we need to remove graphic, change geometry, and re add graphic.
        // This is because of a glitch where changing the geometry directly sometimes causes multiple indicator rectangles
        // to appear in the overview map (https://github.com/ramp4-pcar4/ramp4-pcar4/issues/1493).
        // We suspect that this is an ESRI bug, and are implementing this hack as a workaround for now.
        this.overviewGraphicLayer.removeGraphic(graphic);
        graphic!.geometry = newExtent;
        this.overviewGraphicLayer.addGraphic(graphic!);

        return zoomPromise;
    }

    /**
     * Checks if mouse event intersects with extent graphic
     *
     * @param {MouseEvent} e
     * @returns {Promise<boolean>}
     */
    async cursorHitTest(
        e: MouseEvent | __esri.MapViewScreenPoint
    ): Promise<boolean> {
        const hitTestResult = await this.esriView!.hitTest(e);
        return hitTestResult.results.length > 0;
    }
}
