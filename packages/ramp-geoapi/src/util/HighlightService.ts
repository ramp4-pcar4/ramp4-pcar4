// TODO this is pretty sparse. If we find we have other similar functions lurking elsewhere (e.g. shared), consider moving it to here.
//      thought about combining with symbology, but that is a huge module and pretty specific

// TODO add proper comments
// TODO change all the 'any' in this file to more strict types if possible

// NOTE to old devs: the hilite layer is now in the layer folder in its own class

import esri = __esri;
import { InfoBundle } from '../gapiTypes';
import BaseBase from '../BaseBase';

export default class HighlightService extends BaseBase {

    constructor (infoBundle: InfoBundle) {
        super(infoBundle);
    }

    /**
     * Generating a graphic from server geometry.
     * @method geomToGraphic
     * @param {Object} geometry feature geometry conforming to ESRI Geometry standard
     * @param {Object} symbol esri symbol in server format
     * @return {Object} an ESRI GraphicsLayer
     */
    protected graphicBuilder(geometry: esri.Geometry, symbol: esri.Symbol): esri.Graphic {

        const graphic = new this.esriBundle.Graphic({
                geometry
            });
        graphic.symbol = this.esriBundle.symbolJsonUtils.fromJSON(symbol);
        return graphic;

    }

    /**
     * Generating a graphic from server geometry.
     * @method getUnboundGraphics
     * @param {Array} graphicBundles set of graphic bundles with properties .graphic, .layerFC
     * @param {Object} spatialReference the projection the unbound graphics should be in
     * @return {Array} a set of promises that resolve with an unbound graphic, one for each graphic bundle provided
     */
    getUnboundGraphics(graphicBundles: Array<any>, spatialReference: esri.SpatialReference): Array<any> {
        // TODO take another look at the types here
        //      in particular, think if we still want to pass FC classes around, or if we should provide a layer and an index (i.e. keep things consistent for outside callers).
        //      and consider a fancy type for the graphic result (i.e. use esri type? that might be needed to pass things to esri graphic array in a layer.
        //      if it gives us grief we can make a fake one)

        // generate detached graphics to give to the highlight layer.
        // promises because server layers renderer is inside a promise
        return graphicBundles.map(bundle => {
            let geom = bundle.graphic.geometry;

            // check projection
            // TODO uncomment after the require files are added
            // if (!geoApi.proj.isSpatialRefEqual(geom.spatialReference, spatialReference)) {
            //     geom = geoApi.proj.localProjectGeometry(spatialReference, geom);
            // }

            // // determine symbol for this server graphic
            // return bundle.layerFC.getLayerData().then((layerData: any) => {
            //     const symb = geoApi.symbology.getGraphicSymbol(bundle.graphic.attributes, layerData.renderer);
            //     return geoApi.highlight.geomToGraphic(geom, symb);
            // });
        });

    }

}