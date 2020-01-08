
// TODO add proper comments


import esri = __esri;
import { InfoBundle, AttributeSet, RampLayerConfig } from '../gapiTypes';
import BaseLayer from './BaseLayer';
import AttribFC from './AttribFC';

export default class AttribLayer extends BaseLayer {

    innerView: esri.MapView;

    // TODO type the config?
    // TODO make this protected? is it possible to instatiate a raw AttribLayer?
    constructor (infoBundle: InfoBundle, config: RampLayerConfig) {

        super(infoBundle, config);

    }

    protected getFC(layerIdx: number): AttribFC {
        return (<AttribFC>super.getFC(layerIdx));
    }

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: any): any {
        // TODO flush out
        // NOTE: it would be nice to put esri.LayerProperties as the return type, but since we are cheating with refreshInterval it wont work
        //       we can make our own interface if it needs to happen (or can extent the esri one)
        const esriConfig: any = super.makeEsriLayerConfig(rampLayerConfig);

        // TODO add any extra properties for attrib-based layers here
        // TODO definitionExpression / filter default support here?

        return esriConfig;
    }

    getAttributes (layerIdx: number = undefined): Promise<AttributeSet> {
        return this.getFC(layerIdx).attLoader.getAttribs();
    }

    abortAttributeLoad (layerIdx: number = undefined): void {
        this.getFC(layerIdx).attLoader.abortAttribLoad();
    }

    destroyAttributes (layerIdx: number = undefined): void {
        this.getFC(layerIdx).attLoader.destroyAttribs();
    }

    // formerly known as getFormattedAttributes
    getTabularAttributes (layerIdx: number = undefined): Promise<AttributeSet> {
        return this.getFC(layerIdx).getTabularAttributes();
    }

    getFeatureCount (layerIdx: number = undefined): number {
        return this.getFC(layerIdx).featureCount;
    }

}