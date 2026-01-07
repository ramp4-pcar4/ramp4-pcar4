import { InstanceAPI, MapLayer, NotificationType } from '@/api/internal';
import { DataFormat, DrawState, LayerState } from '@/geo/api';
import type { RampLayerConfig } from '@/geo/api';

/**
 * A common layer class which is inherited by layer classes that implement tile layers (layers locked in a tile schema).
 */
export class CommonTileLayer extends MapLayer {
    /**
     * Determines if we run a "matching projection" check when the layer loads.
     * Appears that imagery tile layers will reproject, so this allows them to skip it
     * @private
     */
    schemaLocked: boolean = true;

    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.supportsIdentify = false;
        this.dataFormat = DataFormat.ESRI_TILE;
    }

    protected onLoadActions(): Array<Promise<void>> {
        const loadPromises: Array<Promise<void>> = super.onLoadActions();

        this.layerTree.name = this.name;

        if (this.schemaLocked) {
            loadPromises.push(this.checkProj());
        }

        // TODO once decided, might want to set a value on layer count that indicates nothing to count

        return loadPromises;
    }

    /**
     * Check if the layer's projection matches the current basemap's.
     * If they do not match the layer will enter the error state and the user will receive a warning notification
     * If the layers do match and the layer was previously in the error state, it will reload.
     */
    async checkProj(): Promise<void> {
        // note this can get called by MAP_BASEMAP_CHECKS_TILE_PROJ when schema changes

        const layerSR = this.getSR();
        const mapSR = this.$iApi.geo.map.getSR();
        const isEqual = mapSR.isEqual(layerSR);

        const grouse = () =>
            this.$iApi.notify.show(
                NotificationType.WARNING,
                this.$iApi.$i18n.t('layer.mismatch', {
                    name: this.name || this.id
                })
            );

        if (this.layerState === LayerState.LOADED && !isEqual) {
            // the layer is loaded and the projections do not match. enter the error state

            grouse();
            this.onError();

            // typically happens after projection change. The layer-views get regenerated but the layers
            // themselves do not reload. The new view flips the layer into drawing state.
            // The onError doesn't mess with drawing state, so turn it off here.
            this.updateDrawState(DrawState.NOT_LOADED);
        } else if (this.layerState === LayerState.ERROR && isEqual) {
            // the layer has errored and the projections now match, reload the layer
            this.reload();
        } else if (this.layerState !== LayerState.ERROR && !isEqual) {
            // Reject the promise if the layer has not errored and the projections do not match
            grouse();
            return Promise.reject();
        }
    }
}
