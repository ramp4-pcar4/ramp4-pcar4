import { FixtureInstance } from '@/api';

export class LayerReorderAPI extends FixtureInstance {
    /**
     * Opens or closes the layer reorder fixture panel
     *
     * @memberof LayerReorderAPI
     */
    toggleLayerReorder(): void {
        const panel = this.$iApi.panel.get('layer-reorder');
        !panel.isOpen
            ? this.$iApi.panel.open('layer-reorder')
            : panel.isVisible
            ? this.$iApi.panel.close('layer-reorder')
            : this.$iApi.panel.toggleMinimize('layer-reorder');
    }
}
