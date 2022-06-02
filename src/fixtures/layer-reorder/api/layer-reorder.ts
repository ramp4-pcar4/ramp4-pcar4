import { FixtureInstance } from '@/api';

export class LayerReorderAPI extends FixtureInstance {
    /**
     * Opens the layer reorder fixture panel
     *
     * @memberof LayerReorderAPI
     */
    openLayerReorder(): void {
        const panel = this.$iApi.panel.get('layer-reorder');
        if (!panel.isOpen) {
            this.$iApi.panel.open('layer-reorder');
        }
    }
}
