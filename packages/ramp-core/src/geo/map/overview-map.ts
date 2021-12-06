import { markRaw } from 'vue';
import { Basemap, CommonMapAPI, InstanceAPI } from '@/api/internal';
import {
    Extent,
    ExtentSet,
    RampBasemapConfig,
    RampExtentSetConfig,
    RampLodSetConfig,
    RampMapConfig,
    RampTileSchemaConfig
} from '@/geo/api';
import { EsriLOD, EsriMapView, EsriGraphic } from '@/geo/esri';
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
     * Can optionally provide the basemap or basemap id to be used when creating the map view
     *
     * @param {string | Basemap | undefined} basemap the id of the basemap that should be used when creating the map view
     * @private
     */
    protected createMapView(basemap?: string | Basemap): void {
        // get the config from the store
        const config: RampMapConfig | undefined = this.$iApi.$vApp.$store.get(
            OverviewmapStore.mapConfig
        );
        if (!config) {
            throw new Error(
                'Attempted to create overview map view without a map config'
            );
        }

        const bm: Basemap =
            (typeof basemap === 'string'
                ? this.findBasemap(basemap)
                : basemap) || this.findBasemap(config.initialBasemapId);
        this.applyBasemap(bm);

        // get the current tile schema we are in
        let mainMapConfig: RampMapConfig | undefined =
            this.$iApi.$vApp.$store.get(ConfigStore.getMapConfig);
        const tileSchemaConfig: RampTileSchemaConfig | undefined =
            mainMapConfig?.tileSchemas.find(
                ts => ts.id === bm.config.tileSchemaId
            );

        if (!tileSchemaConfig) {
            throw new Error(
                `Could not find tile schema for the given basemap id: ${bm.config.id}`
            );
        }

        const extentSetConfig: RampExtentSetConfig | undefined =
            config.extentSets.find(
                es => es.id === tileSchemaConfig.extentSetId
            );

        if (!extentSetConfig) {
            throw new Error(
                `Could not find extent set with the given id: ${tileSchemaConfig.extentSetId}`
            );
        }

        this._rampExtentSet = ExtentSet.fromConfig(extentSetConfig);
        this._rampSR = this._rampExtentSet.sr.clone();

        const lodSetConfig: RampLodSetConfig | undefined = config.lodSets.find(
            ls => ls.id === tileSchemaConfig.lodSetId
        );

        if (!lodSetConfig) {
            throw new Error(
                `Could not find lod set with the given id: ${tileSchemaConfig.lodSetId}`
            );
        }

        // create esri view with config
        this.esriView = markRaw(
            new EsriMapView({
                map: this.esriMap,
                container: this._targetDiv,
                constraints: {
                    lods: <Array<EsriLOD>>lodSetConfig.lods,
                    rotationEnabled: false
                },
                spatialReference: this._rampSR.toESRI(),
                extent: this._rampExtentSet.defaultExtent.toESRI(),
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

        this.handlers.push(
            this.esriView.on('mouse-wheel', esriMouseWheel => {
                esriMouseWheel.stopPropagation();
            })
        );

        this.handlers.push(
            this.esriView.on('double-click', esriDoubleClick => {
                esriDoubleClick.stopPropagation();
            })
        );

        this.handlers.push(
            this.esriView.on('key-down', esriKeyDown => {
                esriKeyDown.stopPropagation();
            })
        );

        this.handlers.push(
            this.esriView.on('key-up', esriKeyUp => {
                esriKeyUp.stopPropagation();
            })
        );

        this.handlers.push(
            this.esriView.on('drag', esriDrag => {
                esriDrag.stopPropagation();
                this.mapDrag(esriDrag);
            })
        );

        this.esriView.container.addEventListener('touchmove', e => {
            // need this for panning and zooming to work on mobile devices / touchscreens
            // touchmove stops the drag event (what the MapView reacts to) from firing properly
            e.preventDefault();
        });

        this._viewPromise.resolveMe();
        this.created = true;
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
            bms => bms.config.id === id
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
     * Sets the overview map's basemap to the basemap with the given id and then refreshes it.
     *
     * Should only be called by the overview map component
     *
     * @param {string} basemapId the basemap id
     * @returns {boolean} indicates if the schema has changed
     */
    setBasemap(basemapId: string): boolean {
        // refresh the map with the new basemap
        const bm: Basemap = this.findBasemap(basemapId);
        this.refreshMap(bm);

        // check for tile schema disrespect
        const mainMapBasemap: RampBasemapConfig = this.$iApi.$vApp.$store.get(
            ConfigStore.getActiveBasemapConfig
        )! as RampBasemapConfig;
        const differentSchema: boolean =
            mainMapBasemap.tileSchemaId !== bm.config.tileSchemaId;

        if (differentSchema) {
            // nod of disapproval
            console.warn(
                "The Overview Map's basemap has a tile schema that is different from the main map's basemap. This can cause unexpected behavior."
            );
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
        const hRatio =
            this.$iApi.geo.map.getPixelHeight() / this.getPixelHeight();
        const wRatio =
            this.$iApi.geo.map.getPixelWidth() / this.getPixelWidth();
        const overviewScale =
            this.$iApi.geo.map.getScale() * 1.5 * Math.max(hRatio, wRatio);
        this.zoomMapTo(newExtent.center(), overviewScale, false);

        // this draws the outline of the main map extent
        this.esriView!.graphics.getItemAt(0).geometry =
            this.$iApi.geo.map.esriView!.extent;
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
