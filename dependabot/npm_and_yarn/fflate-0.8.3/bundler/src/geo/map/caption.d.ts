import { APIScope, InstanceAPI } from '../../api/internal';
import { Attribution, MapCaptionConfig, Point, ScaleHelper } from '../api';
export declare class MapCaptionAPI extends APIScope {
    DEFAULT_POINT_FORMATTERS: any;
    protected pointFormatter: (p: Point) => Promise<string>;
    /**
     * @constructor
     * @param {InstanceAPI} iApi the RAMP instance
     */
    constructor(iApi: InstanceAPI);
    /**
     * Configure the map caption using the given config
     *
     * @param captionConfig The map caption config
     */
    createCaption(captionConfig: MapCaptionConfig | undefined): void;
    /**
     * Updates the attribution on the map-caption bar
     * Applies default ESRI attribution if incoming attribution is disabled or has undefined elements
     *
     * Updates map-caption store to notify map-caption component observer
     *
     * @function updateAttribution
     * @param {Attribution} newAttribution incoming new attribution
     */
    updateAttribution(newAttribution: Attribution | undefined): void;
    /**
     * Calculates a scale bar for the current resolution
     * Updates map-caption store to notify map-caption component observer
     *
     * @function updateScale
     */
    updateScale(): void;
    /**
     * Formats the map point using the selected formatting function
     * Returns empty string if point is undefined
     *
     * @param { Point | undefined } p the cursor map point
     * @returns { Promise<string> } the formatted string of the map point
     */
    formatPoint(p: Point | undefined): Promise<string>;
    /**
     * Sets the current point formatter
     * Will accept the string id of a default formatter, or a new formatter with the correct formatter signature
     *
     * If given string id is not valid, then the point formatter is not changed
     *
     * @function setPointFormatter
     * @param {string | ((p: Point) => Promise<string>)} value
     */
    setPointFormatter(value: string | ((p: Point) => Promise<string>)): void;
    /**
     * Generates helpful information to be used when constructing scale bars.
     * @returns { Array<ScaleHelper> } two objects with information for metric and imperial
     */
    scaleHelper(): Array<ScaleHelper>;
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
    wrapValue(val: number, min: number, max: number): number;
    /**
     * Formats a lat/long DMS string using mouse map point coordinates
     *
     * @function formatLatLongDMSString
     * @param {Point | undefined} p the cursor map point
     * @returns {Promise<string>} the formatted string using given cursor map coordinates
     */
    formatLatLongDMS(p: Point): Promise<string>;
    /**
     * Formats a lat/long DDM string using mouse map point coordinates
     *
     * @function formatLatLongDDM
     * @param {Point | undefined} p the cursor map point
     * @returns {Promise<string>} the formatted string using given cursor map coordinates
     */
    formatLatLongDDM(p: Point): Promise<string>;
    /**
     * Formats a lat/long DD string using mouse map point coordinates
     *
     * @function formatLatLongDD
     * @param {Point | undefined} p the cursor map point
     * @returns {Promise<string>} the formatted string using given cursor map coordinates
     */
    formatLatLongDD(p: Point): Promise<string>;
    /**
     * Formats a mercator point string using mouse map point coordinates
     *
     * @function formatMercator
     * @param {Point | undefined} p the cursor map point
     * @returns {Promise<string>} the formatted string using given cursor map coordinates
     */
    formatMercator(p: Point): Promise<string>;
    /**
     * Formats a lambert point string using mouse map point coordinates
     *
     * @function formatLambert
     * @param {Point | undefined} p the cursor map point
     * @returns {Promise<string>} the formatted string using given cursor map coordinates
     */
    formatLambert(p: Point): Promise<string>;
    /**
     * Formats a UTM string using mouse map point coordinates
     *
     * @function formatUTM
     * @param {Point | undefined} p the cursor map point
     * @returns {Promise<string>} the formatted string using given cursor map coordinates
     */
    formatUTM(p: Point): Promise<string>;
    /**
     * Formats a string based on the current basemap projection using mouse map point coordinates
     *
     * @function formatBasemap
     * @param {Point | undefined} p the cursor map point
     * @returns {Promise<string>} the formatted string using given cursor map coordinates
     */
    formatBasemap(p: Point): Promise<string>;
}
