// TODO add proper comments

import esri = __esri;
import { InfoBundle } from '../gapiTypes';
import BaseLayer from './BaseLayer';
import BaseFC from './BaseFC';
import WmsLayer from './WmsLayer';

export default class WmsFC extends BaseFC {

    protected parentLayer: WmsLayer;

    constructor (infoBundle: InfoBundle, parent: BaseLayer, layerIdx: number = 0) {
        super(infoBundle, parent, layerIdx);
    }

    // TODO if nothing goes here, then delete and have WmsLayer use BaseFC refs
}