import { APIScope, InstanceAPI } from '@/api/internal';
import { useMapCaptionStore } from '@/stores/map-caption';
import type {
    Attribution,
    MapCaptionConfig,
    Point,
    ScaleBar,
    ScaleHelper
} from '@/geo/api';

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

        // check if map coords has been disabled
        if (captionConfig.mapCoords.disabled) {
            mapCaptionStore.coords = { disabled: true };
        } else {
            // get formatter specified in the config
            const defaultFormatter: string | undefined =
                captionConfig.mapCoords.formatter;
            if (defaultFormatter !== undefined) {
                this.setPointFormatter(defaultFormatter);
            }
        }

        // check if the scalebar has been disabled
        if (captionConfig.scaleBar.disabled) {
            mapCaptionStore.scale = { disabled: true };
        } else {
            // get the scalebar unit specified in the config
            const useImperialUnits: boolean | undefined =
                captionConfig.scaleBar.imperialScale;
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
        // Default attribution
        const attribution: Attribution = {
            text: { value: 'Powered by ESRI' },
            logo: {
                altText: 'ESRI logo',
                link: 'https://www.esri.com/',
                value: 'data:image/png;base64,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'
            }
        };

        if (newAttribution) {
            // Check if attribution logo is enabled
            if (!newAttribution.logo.disabled) {
                // Need to add OR (||) incase newAttribution values are undefined/empty
                attribution.logo.altText =
                    newAttribution.logo.altText || attribution.logo.altText;
                attribution.logo.link =
                    newAttribution.logo.link || attribution.logo.link;
                attribution.logo.value =
                    newAttribution.logo.value || attribution.logo.value;
            }

            // Check if attribution text is enabled
            if (!newAttribution.text.disabled) {
                // Need to add OR (||) incase newAttribution value is undefined/empty
                attribution.text.value =
                    newAttribution.text.value || attribution.text.value;
            }

            // Update attribution
            const mapCaptionStore = useMapCaptionStore(this.$vApp.$pinia);
            mapCaptionStore.attribution = attribution;
        }

        // If the new attribution is undefined, or its text is disabled, pull text from copyright
        if (!newAttribution || newAttribution.text.disabled) {
            // Pull copyright text from basemap's baselayers

            if (!this.$iApi.geo.map.esriMap) {
                console.warn(
                    'Attempted to fetch map attribution with undefined map'
                );
                return;
            }

            let copyrightText: string = '';
            const loadTimeout: number = 5000;
            const intervalTimeout: number = 20;

            // Create load promises that resolve when the baseLayer loads or after a timeout
            const baseLayerLoadPromises: Array<Promise<__esri.Layer | null>> =
                this.$iApi.geo.map.esriMap.basemap.baseLayers
                    .map((bl: __esri.Layer) => {
                        return new Promise<__esri.Layer | null>(resolve => {
                            // Keep count of layer.load checks done so far
                            let elapsedIntervals: number = 0;
                            // The maximum number of layer.load checks we will do
                            const maxIntervals: number =
                                loadTimeout / intervalTimeout;

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

                attribution.text.value =
                    copyrightText || attribution.text.value;

                // Update attribution
                const mapCaptionStore = useMapCaptionStore(this.$vApp.$pinia);
                mapCaptionStore.attribution = attribution;
            });
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

        const isImperialScale: boolean =
            currentScaleBar?.isImperialScale || false;

        // the object after the ?? is just to chill out typescript. Array.find threatens undefined even though we will get a match.
        const scaleInfo = this.scaleHelper().find(
            h => h.isImperialScale === isImperialScale
        ) ?? {
            isImperialScale: false,
            units: 'error',
            pixels: 1,
            distance: 1
        };

        mapCaptionStore.scale = {
            width: `${scaleInfo.pixels}px`,
            label: `${this.$iApi.$i18n.n(scaleInfo.distance, 'number')}${
                scaleInfo.units
            }`,
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
                console.warn(
                    `Could not find point formatter with id: ${value}`
                );
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
        const measureUnits: Array<string> =
            meters > 1000 ? ['km', 'mi'] : ['m', 'ft'];

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
                const units =
                    (mapResolution * factor) /
                    (isImperialScale ? metersInAMile : 1000);

                // length of the distance number
                const len = Math.round(units).toString().length;
                const div = Math.pow(10, len - 1);

                // we want to round the distance to the ceiling of the highest position and display a nice number
                // 45.637km => 50.00km; 4.368km => 5.00km
                // 28.357mi => 30.00mi; 2.714mi => 3.00mi
                result[i].distance = Math.ceil(units / div) * div;

                // calcualte length of the scale line in pixels based on the round distance
                result[i].pixels =
                    (result[i].distance *
                        (isImperialScale ? metersInAMile : 1000)) /
                    mapResolution;
            } else {
                // Round the meters up
                result[i].distance = Math.ceil(
                    isImperialScale ? meters * metersInAFoot : meters
                );
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
        return (
            ((((val - min) % (max - min)) + (max - min)) % (max - min)) + min
        );
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
        const latLongPoint: any = await this.$iApi.geo.proj.projectGeometry(
            4326,
            p
        );

        const lat = this.wrapValue(latLongPoint.y, -90, 90);
        const lon = this.wrapValue(latLongPoint.x, -180, 180);

        const degreeSymbol = String.fromCharCode(176);

        const dy = Math.floor(Math.abs(lat)) * (lat < 0 ? -1 : 1);
        const my = Math.floor(Math.abs((lat - dy) * 60));
        const sy = Math.floor((Math.abs(lat) - Math.abs(dy) - my / 60) * 3600);

        const dx = Math.floor(Math.abs(lon)) * (lon < 0 ? -1 : 1);
        const mx = Math.floor(Math.abs((lon - dx) * 60));
        const sx = Math.floor((Math.abs(lon) - Math.abs(dx) - mx / 60) * 3600);

        return `${this.$iApi.$i18n.n(
            Math.abs(dy),
            'number'
        )}${degreeSymbol} ${this.$iApi.$i18n.n(my, 'number', {
            minimumIntegerDigits: 2
        } as any)}' ${this.$iApi.$i18n.n(sy, 'number', {
            minimumIntegerDigits: 2
        } as any)}" ${this.$iApi.$i18n.t(
            'map.coordinates.' + (lat > 0 ? 'north' : 'south')
        )} | ${this.$iApi.$i18n.n(
            Math.abs(dx),
            'number'
        )}${degreeSymbol} ${this.$iApi.$i18n.n(mx, 'number', {
            minimumIntegerDigits: 2
        } as any)}' ${this.$iApi.$i18n.n(sx, 'number', {
            minimumIntegerDigits: 2
        } as any)}" ${this.$iApi.$i18n.t(
            'map.coordinates.' + (0 > lon ? 'west' : 'east')
        )}`;
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
        const latLongPoint: any = await this.$iApi.geo.proj.projectGeometry(
            4326,
            p
        );

        const lat = this.wrapValue(latLongPoint.y, -90, 90);
        const lon = this.wrapValue(latLongPoint.x, -180, 180);

        const degreeSymbol = String.fromCharCode(176);

        const dy = Math.floor(Math.abs(lat)) * (lat < 0 ? -1 : 1);
        const my = Math.abs((lat - dy) * 60);

        const dx = Math.floor(Math.abs(lon)) * (lon < 0 ? -1 : 1);
        const mx = Math.abs((lon - dx) * 60);

        return `${this.$iApi.$i18n.n(
            Math.abs(dy),
            'number'
        )}${degreeSymbol} ${this.$iApi.$i18n.n(my, 'number', {
            minimumIntegerDigits: 2,
            minimumFractionDigits: 5,
            maximumFractionDigits: 5
        } as any)} ${this.$iApi.$i18n.t(
            'map.coordinates.' + (lat > 0 ? 'north' : 'south')
        )} | ${this.$iApi.$i18n.n(
            Math.abs(dx),
            'number'
        )}${degreeSymbol} ${this.$iApi.$i18n.n(mx, 'number', {
            minimumIntegerDigits: 2,
            minimumFractionDigits: 5,
            maximumFractionDigits: 5
        } as any)} ${this.$iApi.$i18n.t(
            'map.coordinates.' + (0 > lon ? 'west' : 'east')
        )}`;
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
        const latLongPoint: any = await this.$iApi.geo.proj.projectGeometry(
            4326,
            p
        );

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
        } as any)}${degreeSymbol} ${this.$iApi.$i18n.t(
            'map.coordinates.' + (0 > lon ? 'west' : 'east')
        )}`;
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
        const projectedPoint: any = await this.$iApi.geo.proj.projectGeometry(
            102100,
            p
        );

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
        const projectedPoint: any = await this.$iApi.geo.proj.projectGeometry(
            3978,
            p
        );

        return `${this.$iApi.$i18n.n(
            Math.abs(Math.floor(projectedPoint.x)),
            'number'
        )} m ${this.$iApi.$i18n.t(
            'map.coordinates.' + (0 > projectedPoint.x ? 'west' : 'east')
        )} | ${this.$iApi.$i18n.n(
            Math.abs(Math.floor(projectedPoint.y)),
            'number'
        )} m ${this.$iApi.$i18n.t(
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
        const latLongPoint: any = await this.$iApi.geo.proj.projectGeometry(
            4326,
            p
        );
        const lat = this.wrapValue(latLongPoint.y, -90, 90);
        const lon = this.wrapValue(latLongPoint.x, -180, 180);

        // find the utm zone (each zone is 6 degrees longitude apart)
        const zone = Math.ceil((lon + 180) / 6);

        // project the point using the zone's utm projection
        const projectedPoint: any = await this.$iApi.geo.proj.projectGeometry(
            parseInt('326' + zone),
            p
        );

        return `${this.$iApi.$i18n.n(zone, 'number', {
            minimumIntegerDigits: 2
        } as any)} ${this.$iApi.$i18n.t(
            'map.coordinates.' + (lat > 0 ? 'north' : 'south')
        )} ${this.$iApi.$i18n.n(
            Math.floor(projectedPoint.x),
            'number'
        )} m${this.$iApi.$i18n.t(
            'map.coordinates.east'
        )} | ${this.$iApi.$i18n.n(
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
        const projectedPoint: any = await this.$iApi.geo.proj.projectGeometry(
            this.$iApi.geo.map.getSR(),
            p
        );

        return `${this.$iApi.$i18n.n(
            projectedPoint.x,
            'number'
        )} | ${this.$iApi.$i18n.n(projectedPoint.y, 'number')}`;
    }
}
