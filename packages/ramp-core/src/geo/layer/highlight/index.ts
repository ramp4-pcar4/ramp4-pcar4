// TODO add nice comments

// TODO this needs full revist, especially with the new layer structures.
//      keep as it's been implemented, as a layer than inherits from base classes?
//      mod it to be a separate layer that implements the LayerInstace class or LayerBase inteface on its own?
//      separate it entirely and treat as a utility rather than a classic layer?
//      ^ would advise against as being able to add graphics layers in standard way could be useful.

//      its also fairly untested.

import defaultSymbols from './../defaulthighlightSymbols.json';
import { CommonFC, CommonLayer, InstanceAPI } from '@/api/internal';
import { LayerType, Point, RampLayerConfig, TreeNode } from '@/geo/api';
import { EsriGraphic, EsriGraphicsLayer, EsriPictureMarkerSymbol } from '@/geo/esri';
import { markRaw } from 'vue';

/**
 * Generate a graphic layer to handle feature highlighting.
 * @param {Object} options optional settings for the highlight layer
 *                         layerId - id to use for the highlight layer. defaults to rv_highlight
 *                         markerSymbol - esri symbol in server json format to symbolize the click marker. defaults to a red pin
 */
export default class HighlightLayer extends CommonLayer {
    esriLayer: EsriGraphicsLayer | undefined;
    protected markerSymbol: __esri.PictureMarkerSymbol;

    // TODO make types for options. might need to meld with ramp config type?
    constructor(options: any, $iApi: InstanceAPI) {
        super(
            {
                id: options?.layerId || 'rv_highlight',
                url: '',
                layerType: 'highlight'
            },
            $iApi
        );

        let markerSymbol = EsriPictureMarkerSymbol.fromJSON(defaultSymbols.markerSymbol);

        if (options) {
            if (options.markerSymbol) {
                // TODO might need to make this stronger. would fail if our marker was not a picture marker type.
                // might need to use general baseclass as declaration; see if there is a 'fromJSON' that parses any type.
                // else we might need to inspect the payload and determine the marker type, call appropriate constructor.
                // OR we banhammer all markers except picture markers (supporting SimpleMarker could be useful)
                markerSymbol = EsriPictureMarkerSymbol.fromJSON(options.markerSymbol);
            }
        }

        // need to make type 'any' to allow for the adding of custom functions below
        this.markerSymbol = markerSymbol;
    }

    async initiate(): Promise<void> {
        // TODO determine if we are setting a layer type for highlight layers.

        this.esriLayer = markRaw(
            new EsriGraphicsLayer({
                id: this.origRampConfig.id,
                visible: true
            })
        );
        await super.initiate();
    }

    /**
     * Add a graphic to indicate where user clicked.
     * @method addPin
     * @param {Point} point          an ESRI point object to use as the graphic location
     * @param {Boolean} clearLayer   indicates any previous graphics in the highlight layer should be removed. defaults to false
     */
    addMarker(point: Point, clearLayer: boolean = false): void {
        if (!this.esriLayer) {
            console.error('attempted to add marker to graphic layer before initiate');
            return;
        }
        if (clearLayer) {
            this.esriLayer.removeAll();
        }
        const esriPoint = this.$iApi.geo.utils.geom.geomRampToEsri(point) as __esri.Point;

        const marker = new EsriGraphic({
            geometry: esriPoint,
            symbol: this.markerSymbol
        });
        this.esriLayer.add(marker);
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
    addHighlight(
        graphic: __esri.Graphic | Array<__esri.Graphic>,
        clearLayer: boolean = false
    ): void {
        if (!this.esriLayer) {
            console.error('attempted to add marker to graphic layer before initiate');
            return;
        }
        if (clearLayer) {
            this.esriLayer.removeAll();
        }

        const graphics = Array.isArray(graphic) ? graphic : [graphic];

        // add new highlight graphics
        this.esriLayer.addMany(graphics);
    }

    /**
     * Remove highlight from map
     * @method clearhighlight
     */
    clearHighlight(): void {
        this.esriLayer?.removeAll();
    }
}
