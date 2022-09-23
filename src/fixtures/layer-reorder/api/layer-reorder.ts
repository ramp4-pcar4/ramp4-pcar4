import { FixtureInstance } from '@/api';

export class LayerReorderAPI extends FixtureInstance {
    /**
     * Opens or closes the layer reorder fixture panel
     *
     * @param {boolean} [open] force panel open or closed
     * @memberof LayerReorderAPI
     */
    toggleLayerReorder(open?: boolean): void {
        const panel = this.$iApi.panel.get('layer-reorder');
        if (open === undefined) {
            this.$iApi.panel.toggle(panel);
        } else if (open && !panel.isOpen) {
            this.$iApi.panel.open('layer-reorder');
        } else if (!open && panel.isOpen) {
            this.$iApi.panel.close(panel);
        }
    }
}
