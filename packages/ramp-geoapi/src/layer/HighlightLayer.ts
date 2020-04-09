// TODO add nice comments

import esri = __esri;
import { InfoBundle } from '../gapiTypes';
import BaseBase from '../BaseBase';
import defaultSymbols from './defaulthighlightSymbols.json';

/**
 * Generate a graphic layer to handle feature highlighting.
 * @param {Object} options optional settings for the highlight layer
 *                         layerId - id to use for the highlight layer. defaults to rv_highlight
 *                         markerSymbol - esri symbol in server json format to symbolize the click marker. defaults to a red pin
 */
export class HighlightLayer extends BaseBase {

    _innerLayer: esri.GraphicsLayer;
    protected markerSymbol: esri.PictureMarkerSymbol;

    // TODO make types for options
    constructor (infoBundle: InfoBundle, options: any) {
        super(infoBundle);

        let id: string = 'rv_highlight';
        let markerSymbol: esri.PictureMarkerSymbol = this.esriBundle.PictureMarkerSymbol.fromJSON(defaultSymbols.markerSymbol);

        if (options) {
            if (options.layerId) {
                id = options.layerId;
            }
            if (options.markerSymbol) {
                // TODO might need to make this stronger. would fail if our marker was not a picture marker type.
                // might need to use general baseclass as declaration; see if there is a 'fromJSON' that parses any type.
                // else we might need to inspect the payload and determine the marker type, call appropriate constructor.
                // OR we banhammer all markers except picture markers (supporting SimpleMarker could be useful)
                markerSymbol = this.esriBundle.PictureMarkerSymbol.fromJSON(options.markerSymbol);
            }

        }

        // need to make type 'any' to allow for the adding of custom functions below
        this._innerLayer = new this.esriBundle.GraphicsLayer({ id, visible: true });
        this.markerSymbol = markerSymbol;
    }

    /**
     * Add a graphic to indicate where user clicked.
     * @method addPin
     * @param {Point} point          an ESRI point object to use as the graphic location
     * @param {Boolean} clearLayer   indicates any previous graphics in the highlight layer should be removed. defaults to false
     */
    addMarker (point: esri.Point, clearLayer: boolean = false): void {
        if (clearLayer) {
            this._innerLayer.removeAll();
        }

        const marker = new this.esriBundle.Graphic({ geometry: point, symbol: this.markerSymbol });
        this._innerLayer.add(marker);
    }

    // TODO looking at RAMP2 code there is a lot of the following:
    //  client code wrangles up parameters, calls fetchGraphic on GeoAPI Layer
    //  then takes result, and passes it to this function.
    //  is there a way we can streamline this? like a one-call "fetch and highlight"?
    //  bit tricky since the layers are not intrinsically connected.  maybe
    //  its a utility on the client? anything to avoid that block of code that's repeated all
    //  over the client and is mostly doing geoapi-ish stuff.
    /**
     * Add a graphic or array of graphics to the highlight layer. Remove any previous graphics.
     * @method addhighlight
     * @param {Graphic|Array} graphic  an ESRI graphic, or array of ESRI graphics. Should be in map spatialReference, and not bound to a layer
     * @param {Boolean} clearLayer   indicates any previous graphics in the highlight layer should be removed. defaults to false
     */
    addHighlight (graphic: esri.Graphic | Array<esri.Graphic>, clearLayer: boolean = false): void {
        if (clearLayer) {
            this._innerLayer.removeAll();
        }

        const graphics = Array.isArray(graphic) ? graphic : [graphic];

        // add new highlight graphics
       this._innerLayer.addMany(graphics);
    }

    /**
     * Remove highlight from map
     * @method clearhighlight
     */
    clearHighlight(): void {
        this._innerLayer.removeAll();
    }

}

export default HighlightLayer;