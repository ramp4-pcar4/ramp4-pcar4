import { PanelConfig } from '@/store/modules/panel';
import { IdentifyResult, IdentifyItem, IdentifyResultFormat, IdentifyResultSet } from 'ramp-geoapi';

export class DetailsState {
    /**
     * An object containing a features attributes.
     *
     * @type IdentifyResult[] | IdentifyItem
     * @memberof DetailsState
     */

    payload: IdentifyResult[] | IdentifyItem = [];
}
