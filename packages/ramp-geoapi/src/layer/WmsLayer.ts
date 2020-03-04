// TODO add proper comments


import esri = __esri;
import { InfoBundle, AttributeSet, RampLayerConfig } from '../gapiTypes';
import BaseLayer from './BaseLayer';
// import WmsFC from './WmsFC';

export class WmsLayer extends BaseLayer {

    constructor (infoBundle: InfoBundle, config: RampLayerConfig) {
        super(infoBundle, config);
        this.supportsIdentify = true;
    }

    // TODO add all the identify goodness
}

export default WmsLayer;