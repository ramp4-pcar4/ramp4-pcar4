import { APIScope, InstanceAPI } from '@/api/internal';
import { useMapCaptionStore } from '@/stores/map-caption';
import type { Attribution, MapCaptionConfig, Point, ScaleBar, ScaleHelper } from '@/geo/api';
import type { EsriLayer } from '@/geo/esri';

export class MapCaptionAPI extends APIScope {
    // Default point formatters
    DEFAULT_POINT_FORMATTERS: any = {
        LAT_LONG_DMS: this.formatLatLongDMS,
        LAT_LONG_DD: this.formatLatLongDD,
        LAT_LONG_DDM: this.formatLatLongDDM,
        WEB_MERCATOR: this.formatMercator,
        CANADA_ATLAS_LAMBERT: this.formatLambert,
        UTM: this.formatUTM,
        BASEMAP: this.formatBasemap
    };

    // The currently selected point-formatting function
    protected pointFormatter: (p: Point) => Promise<string>;

    /**
     * @constructor
     * @param {InstanceAPI} iApi the RAMP instance
     */
    constructor(iApi: InstanceAPI) {
        super(iApi);

        // default formatter in case point formatter is not specified in the config
        this.pointFormatter = this.DEFAULT_POINT_FORMATTERS.LAT_LONG_DMS;
    }

    /**
     * Configure the map caption using the given config
     *
     * @param captionConfig The map caption config
     */
    createCaption(captionConfig: MapCaptionConfig | undefined) {
        if (!captionConfig) {
            return;
        }

        const mapCaptionStore = useMapCaptionStore(this.$vApp.$pinia);
        mapCaptionStore.coords.disabled = false; // default
        mapCaptionStore.scale.disabled = false; // default
        mapCaptionStore.scale.isImperialScale = false; // default

        // check if map coords exists, and has been disabled
        if (captionConfig.mapCoords) {
            if (captionConfig.mapCoords.disabled) {
                mapCaptionStore.coords.disabled = true;
            } else {
                // get formatter specified in the config
                const defaultFormatter: string | undefined = captionConfig.mapCoords.formatter;
                if (defaultFormatter !== undefined) {
                    this.setPointFormatter(defaultFormatter);
                }
            }
        }

        // check if the scalebar exists, and has not been disabled
        if (captionConfig.scaleBar) {
            if (captionConfig.scaleBar.disabled) {
                mapCaptionStore.scale.disabled = true;
            } else {
                // get the scalebar unit specified in the config
                const useImperialUnits: boolean | undefined = captionConfig.scaleBar.imperialScale;
                if (useImperialUnits !== undefined) {
                    // update the value in the store
                    mapCaptionStore.toggleScale(useImperialUnits);
                    // wait for the map to load since updateScale needs map view resolution
                    this.$iApi.geo.map.viewPromise.then(() => {
                        this.updateScale();
                    });
                }
            }
        }

        // check if the language toggle has been disabled
        mapCaptionStore.langtoggle = {
            disabled: captionConfig?.langToggle?.disabled ?? false
        };
    }

    /**
     * Updates the attribution on the map-caption bar
     * Applies default ESRI attribution if incoming attribution is disabled or has undefined elements
     *
     * Updates map-caption store to notify map-caption component observer
     *
     * @function updateAttribution
     * @param {Attribution} newAttribution incoming new attribution
     */
    updateAttribution(newAttribution: Attribution | undefined): void {
        const esriText = {
            disabled: false,
            value: this.$iApi.$i18n.t(`caption.attributionDefaultText`)
        };

        // Initial attribution (guaranteed to not be undefined)
        const attribution: Attribution = {
            text: {
                value: '',
                disabled: false
            }
        };

        if (newAttribution) {
            // Check if attribution text does not exists. If so, set to default esri text
            if (!newAttribution.text) {
                attribution.text!.value = esriText.value;
            } else if (!newAttribution.text.disabled) {
                // Need to add OR (||) incase newAttribution value is undefined/empty
                // In those cases, use default esri text
                attribution.text!.value = newAttribution.text.value || esriText.value;
            } else {
                attribution.text!.disabled = true; // text is disabled, so keep text empty (for now)
            }

            // Update attribution
            const mapCaptionStore = useMapCaptionStore(this.$vApp.$pinia);
            mapCaptionStore.setAttribution(attribution);
        } else {
            // set text to default esri if there is no new attribution provided
            attribution.text!.value = esriText.value;
        }

        // If the new attribution is undefined, or its text is disabled, or it has no text defined,
        // pull text from copyright
        if (!newAttribution || newAttribution.text?.disabled || !newAttribution.text) {
            // Pull copyright text from basemap's baselayers

            if (!this.$iApi.geo.map.esriMap) {
                console.warn('Attempted to fetch map attribution with undefined map');
                return;
            }

            let copyrightText: string = '';
            const loadTimeout: number = 5000;
            const intervalTimeout: number = 20;

            // Create load promises that resolve when the baseLayer loads or after a timeout
            const esriBMs = this.$iApi.geo.map.esriMap.basemap;
            if (esriBMs) {
                const baseLayerLoadPromises: Array<Promise<EsriLayer | null>> = esriBMs.baseLayers
                    .map((bl: EsriLayer) => {
                        return new Promise<EsriLayer | null>(resolve => {
                            // Keep count of layer.load checks done so far
                            let elapsedIntervals: number = 0;
                            // The maximum number of layer.load checks we will do
                            const maxIntervals: number = loadTimeout / intervalTimeout;

                            const wait = setInterval(function () {
                                if (bl.loaded && !bl.loadError) {
                                    clearInterval(wait);
                                    resolve(bl);
                                } else if (elapsedIntervals > maxIntervals) {
                                    clearInterval(wait);
                                    resolve(null);
                                }
                                elapsedIntervals++;
                            }, intervalTimeout);
                        });
                    })
                    .toArray();

                // Join all the copyright strings and update the attribution
                Promise.all(baseLayerLoadPromises).then(baseLayers => {
                    copyrightText = baseLayers
                        .filter((bl: any) => bl?.copyright)
                        .map((bl: any) => bl.copyright)
                        .join(' | ');

                    attribution.text!.value = copyrightText || attribution.text!.value || esriText.value;

                    // Update attribution
                    const mapCaptionStore = useMapCaptionStore(this.$vApp.$pinia);
                    mapCaptionStore.setAttribution(attribution);
                });
            }
        }
    }

    /**
     * Calculates a scale bar for the current resolution
     * Updates map-caption store to notify map-caption component observer
     *
     * @function updateScale
     */
    updateScale(): void {
        const mapCaptionStore = useMapCaptionStore(this.$vApp.$pinia);
        const currentScaleBar: ScaleBar | undefined = mapCaptionStore.scale;

        // if the current scale bar is disabled, then do not update it
        if (currentScaleBar?.disabled) {
            return;
        }

        const isImperialScale: boolean = currentScaleBar?.isImperialScale || false;

        // the object after the ?? is just to chill out typescript. Array.find threatens undefined even though we will get a match.
        const scaleInfo = this.scaleHelper().find(h => h.isImperialScale === isImperialScale) ?? {
            isImperialScale: false,
            units: 'error',
            pixels: 1,
            distance: 1
        };

        mapCaptionStore.scale = {
            width: `${scaleInfo.pixels}px`,
            label: `${this.$iApi.$i18n.n(scaleInfo.distance, 'number')}${scaleInfo.units}`,
            isImperialScale: isImperialScale
        };
    }

    /**
     * Formats the map point using the selected formatting function
     * Returns empty string if point is undefined
     *
     * @param { Point | undefined } p the cursor map point
     * @returns { Promise<string> } the formatted string of the map point
     */
    async formatPoint(p: Point | undefined): Promise<string> {
        if (!p) {
            return '';
        }
        return await this.pointFormatter(p);
    }

    /**
     * Sets the current point formatter
     * Will accept the string id of a default formatter, or a new formatter with the correct formatter signature
     *
     * If given string id is not valid, then the point formatter is not changed
     *
     * @function setPointFormatter
     * @param {string | ((p: Point) => Promise<string>)} value
     */
    setPointFormatter(value: string | ((p: Point) => Promise<string>)): void {
        if (typeof value === 'string') {
            // value is formatter id
            if (!(value in this.DEFAULT_POINT_FORMATTERS)) {
                console.warn(`Could not find point formatter with id: ${value}`);
                return;
            }
            this.pointFormatter = this.DEFAULT_POINT_FORMATTERS[value];
        } else {
            // value is a function
            this.pointFormatter = value;
        }
    }

    /**
     * Generates helpful information to be used when constructing scale bars.
     * @returns { Array<ScaleHelper> } two objects with information for metric and imperial
     */
    scaleHelper(): Array<ScaleHelper> {
        // the starting length of the scale line in pixels
        // reduce the length of the bar on extra small layouts
        const factor = window.innerWidth > 600 ? 70 : 35;
        const mapResolution = this.$iApi.geo.map.getResolution();
        const result: Array<ScaleHelper> = [];

        // distance in meters
        const meters = mapResolution * factor;
        const metersInAMile = 1609.34;
        const metersInAFoot = 3.28084;

        // use arrays to store both imperial and metric calulcations
        const measureUnits: Array<string> = meters > 1000 ? ['km', 'mi'] : ['m', 'ft'];

        for (let i = 0; i < 2; i++) {
            const isImperialScale = i === 1;

            result.push({
                isImperialScale: isImperialScale,
                units: measureUnits[i],
                pixels: 0,
                distance: 0
            });

            // If meters < 1Km, then use different scaling
            if (meters > 1000) {
                // get the distance in units, either miles or kilometers
                const units = (mapResolution * factor) / (isImperialScale ? metersInAMile : 1000);

                // length of the distance number
                const len = Math.round(units).toString().length;
                const div = Math.pow(10, len - 1);

                // we want to round the distance to the ceiling of the highest position and display a nice number
                // 45.637km => 50.00km; 4.368km => 5.00km
                // 28.357mi => 30.00mi; 2.714mi => 3.00mi
                result[i].distance = Math.ceil(units / div) * div;

                // calcualte length of the scale line in pixels based on the round distance
                result[i].pixels = (result[i].distance * (isImperialScale ? metersInAMile : 1000)) / mapResolution;
            } else {
                // Round the meters up
                result[i].distance = Math.ceil(isImperialScale ? meters * metersInAFoot : meters);
                result[i].pixels = meters / mapResolution;
            }
        }

        return result;
    }

    /**
     * Wraps value between the minimum and maximum value
     * If value is between bounds, it will be returned as it is
     *
     * @function wrapValue
     * @private
     * @param {Number} val value to be wrapped
     * @param {Number} min minimum value
     * @param {Number} max maximum value
     * @return {Number} the wrapped value
     */
    wrapValue(val: number, min: number, max: number): number {
        return ((((val - min) % (max - min)) + (max - min)) % (max - min)) + min;
    }

    /**
     * Formats a lat/long DMS string using mouse map point coordinates
     *
     * @function formatLatLongDMSString
     * @param {Point | undefined} p the cursor map point
     * @returns {Promise<string>} the formatted string using given cursor map coordinates
     */
    async formatLatLongDMS(p: Point): Promise<string> {
        // get the lat long projection
        const latLongPoint: any = await this.$iApi.geo.proj.projectGeometry(4326, p);

        const lat = this.wrapValue(latLongPoint.y, -90, 90);
        const lon = this.wrapValue(latLongPoint.x, -180, 180);

        const degreeSymbol = String.fromCharCode(176);

        const dy = Math.floor(Math.abs(lat)) * (lat < 0 ? -1 : 1);
        const my = Math.floor(Math.abs((lat - dy) * 60));
        const sy = Math.floor((Math.abs(lat) - Math.abs(dy) - my / 60) * 3600);

        const dx = Math.floor(Math.abs(lon)) * (lon < 0 ? -1 : 1);
        const mx = Math.floor(Math.abs((lon - dx) * 60));
        const sx = Math.floor((Math.abs(lon) - Math.abs(dx) - mx / 60) * 3600);

        return `${this.$iApi.$i18n.n(Math.abs(dy), 'number')}${degreeSymbol} ${this.$iApi.$i18n.n(my, 'number', {
            minimumIntegerDigits: 2
        } as any)}' ${this.$iApi.$i18n.n(sy, 'number', {
            minimumIntegerDigits: 2
        } as any)}" ${this.$iApi.$i18n.t('map.coordinates.' + (lat > 0 ? 'north' : 'south'))} | ${this.$iApi.$i18n.n(
            Math.abs(dx),
            'number'
        )}${degreeSymbol} ${this.$iApi.$i18n.n(mx, 'number', {
            minimumIntegerDigits: 2
        } as any)}' ${this.$iApi.$i18n.n(sx, 'number', {
            minimumIntegerDigits: 2
        } as any)}" ${this.$iApi.$i18n.t('map.coordinates.' + (0 > lon ? 'west' : 'east'))}`;
    }

    /**
     * Formats a lat/long DDM string using mouse map point coordinates
     *
     * @function formatLatLongDDM
     * @param {Point | undefined} p the cursor map point
     * @returns {Promise<string>} the formatted string using given cursor map coordinates
     */
    async formatLatLongDDM(p: Point): Promise<string> {
        // get the lat long projection
        const latLongPoint: any = await this.$iApi.geo.proj.projectGeometry(4326, p);

        const lat = this.wrapValue(latLongPoint.y, -90, 90);
        const lon = this.wrapValue(latLongPoint.x, -180, 180);

        const degreeSymbol = String.fromCharCode(176);

        const dy = Math.floor(Math.abs(lat)) * (lat < 0 ? -1 : 1);
        const my = Math.abs((lat - dy) * 60);

        const dx = Math.floor(Math.abs(lon)) * (lon < 0 ? -1 : 1);
        const mx = Math.abs((lon - dx) * 60);

        return `${this.$iApi.$i18n.n(Math.abs(dy), 'number')}${degreeSymbol} ${this.$iApi.$i18n.n(my, 'number', {
            minimumIntegerDigits: 2,
            minimumFractionDigits: 5,
            maximumFractionDigits: 5
        } as any)} ${this.$iApi.$i18n.t('map.coordinates.' + (lat > 0 ? 'north' : 'south'))} | ${this.$iApi.$i18n.n(
            Math.abs(dx),
            'number'
        )}${degreeSymbol} ${this.$iApi.$i18n.n(mx, 'number', {
            minimumIntegerDigits: 2,
            minimumFractionDigits: 5,
            maximumFractionDigits: 5
        } as any)} ${this.$iApi.$i18n.t('map.coordinates.' + (0 > lon ? 'west' : 'east'))}`;
    }

    /**
     * Formats a lat/long DD string using mouse map point coordinates
     *
     * @function formatLatLongDD
     * @param {Point | undefined} p the cursor map point
     * @returns {Promise<string>} the formatted string using given cursor map coordinates
     */
    async formatLatLongDD(p: Point): Promise<string> {
        // get the lat long projection
        const latLongPoint: any = await this.$iApi.geo.proj.projectGeometry(4326, p);

        const lat = this.wrapValue(latLongPoint.y, -90, 90);
        const lon = this.wrapValue(latLongPoint.x, -180, 180);

        const degreeSymbol = String.fromCharCode(176);

        const dy = Math.abs(lat);
        const dx = Math.abs(lon);

        return `${this.$iApi.$i18n.n(dy, 'number', {
            minimumIntegerDigits: 2,
            minimumFractionDigits: 5,
            maximumFractionDigits: 5
        } as any)}${degreeSymbol} ${this.$iApi.$i18n.t(
            'map.coordinates.' + (lat > 0 ? 'north' : 'south')
        )} | ${this.$iApi.$i18n.n(dx, 'number', {
            minimumIntegerDigits: 2,
            minimumFractionDigits: 5,
            maximumFractionDigits: 5
        } as any)}${degreeSymbol} ${this.$iApi.$i18n.t('map.coordinates.' + (0 > lon ? 'west' : 'east'))}`;
    }

    /**
     * Formats a mercator point string using mouse map point coordinates
     *
     * @function formatMercator
     * @param {Point | undefined} p the cursor map point
     * @returns {Promise<string>} the formatted string using given cursor map coordinates
     */
    async formatMercator(p: Point): Promise<string> {
        // project using Web-Mercator wkid
        const projectedPoint: any = await this.$iApi.geo.proj.projectGeometry(102100, p);

        return `${this.$iApi.$i18n.n(
            Math.floor(projectedPoint.x),
            'number'
        )} m | ${this.$iApi.$i18n.n(Math.floor(projectedPoint.y), 'number')} m`;
    }

    /**
     * Formats a lambert point string using mouse map point coordinates
     *
     * @function formatLambert
     * @param {Point | undefined} p the cursor map point
     * @returns {Promise<string>} the formatted string using given cursor map coordinates
     */
    async formatLambert(p: Point): Promise<string> {
        // project using Lambert wkid
        const projectedPoint: any = await this.$iApi.geo.proj.projectGeometry(3978, p);

        return `${this.$iApi.$i18n.n(Math.abs(Math.floor(projectedPoint.x)), 'number')} m ${this.$iApi.$i18n.t(
            'map.coordinates.' + (0 > projectedPoint.x ? 'west' : 'east')
        )} | ${this.$iApi.$i18n.n(Math.abs(Math.floor(projectedPoint.y)), 'number')} m ${this.$iApi.$i18n.t(
            'map.coordinates.' + (projectedPoint.y > 0 ? 'north' : 'south')
        )}`;
    }

    /**
     * Formats a UTM string using mouse map point coordinates
     *
     * @function formatUTM
     * @param {Point | undefined} p the cursor map point
     * @returns {Promise<string>} the formatted string using given cursor map coordinates
     */
    async formatUTM(p: Point): Promise<string> {
        // get the lat long point
        const latLongPoint: any = await this.$iApi.geo.proj.projectGeometry(4326, p);
        const lat = this.wrapValue(latLongPoint.y, -90, 90);
        const lon = this.wrapValue(latLongPoint.x, -180, 180);

        // find the utm zone (each zone is 6 degrees longitude apart)
        const zone = Math.ceil((lon + 180) / 6);

        // project the point using the zone's utm projection
        const projectedPoint: any = await this.$iApi.geo.proj.projectGeometry(parseInt('326' + zone), p);

        return `${this.$iApi.$i18n.n(zone, 'number', {
            minimumIntegerDigits: 2
        } as any)} ${this.$iApi.$i18n.t('map.coordinates.' + (lat > 0 ? 'north' : 'south'))} ${this.$iApi.$i18n.n(
            Math.floor(projectedPoint.x),
            'number'
        )} m${this.$iApi.$i18n.t('map.coordinates.east')} | ${this.$iApi.$i18n.n(
            Math.abs(Math.floor(projectedPoint.y)),
            'number'
        )} m${this.$iApi.$i18n.t('map.coordinates.north')}`;
    }

    /**
     * Formats a string based on the current basemap projection using mouse map point coordinates
     *
     * @function formatBasemap
     * @param {Point | undefined} p the cursor map point
     * @returns {Promise<string>} the formatted string using given cursor map coordinates
     */
    async formatBasemap(p: Point): Promise<string> {
        // project the point using the basemaps spatial reference
        const projectedPoint: any = await this.$iApi.geo.proj.projectGeometry(this.$iApi.geo.map.getSR(), p);

        return `${this.$iApi.$i18n.n(projectedPoint.x, 'number')} | ${this.$iApi.$i18n.n(projectedPoint.y, 'number')}`;
    }
}
