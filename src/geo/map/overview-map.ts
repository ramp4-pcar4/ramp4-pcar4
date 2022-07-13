import { markRaw } from 'vue';
import { Basemap, CommonMapAPI, InstanceAPI } from '@/api/internal';
import type { Extent, RampMapConfig } from '@/geo/api';
import { EsriMapView, EsriGraphic } from '@/geo/esri';
import { ConfigStore } from '@/store/modules/config';
import { OverviewmapStore } from '@/fixtures/overviewmap/store';

export class OverviewMapAPI extends CommonMapAPI {
    /**
     * @constructor
     * @param {InstanceAPI} iApi the RAMP instance
     */
    constructor(iApi: InstanceAPI) {
        super(iApi);
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

        const expandFactor: number = this.$iApi.$vApp.$store.get(
            OverviewmapStore.expandFactor
        ) as number;

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
                    .expand(expandFactor), // use the expanded main map extent
                navigation: {
                    browserTouchPanEnabled: false
                }
            })
        );

        // Remove all ui components
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

        this._viewPromise.resolveMe();
        this.created = true;
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
        this.esriView?.graphics.removeAll();
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
    protected findBasemap(id: string): Basemap {
        const bm: Basemap | undefined = this._basemapStore.find(
            bms => bms.id === id
        );
        if (bm) {
            return bm;
        } else {
            // search the basemaps in the main map config
            const mainMapConfig: RampMapConfig | undefined =
                this.$iApi.$vApp.$store.get(ConfigStore.getMapConfig);
            if (mainMapConfig) {
                let bmConfig = mainMapConfig.basemaps.find(bm => bm.id === id);
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
                    this.$iApi.geo.geom.geomEsriToRamp(newExtent),
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
     * @returns {Promise<void>} A promise that resolves when the overviewmap has finished updating
     */
    updateOverview(newExtent: Extent): Promise<void> {
        const expandFactor: number = this.$iApi.$vApp.$store.get(
            OverviewmapStore.expandFactor
        ) as number;

        let zoomPromise = this.zoomMapTo(
            newExtent.expand(expandFactor),
            undefined,
            false
        );

        // this draws the outline of the main map extent
        this.esriView!.graphics.getItemAt(0).geometry =
            this.$iApi.geo.map.esriView!.extent;

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
