import { NortharrowAPI } from './api/northarrow';
import { type NortharrowConfig, useNortharrowStore } from './store/index';
import NortharrowV from './northarrow.vue';

export const POLE_MARKER_LAYER_ID: string = 'RampPoleMarker';

class NortharrowFixture extends NortharrowAPI {
    async added() {
        // console.log(`[fixture] ${this.id} added`);

        this._parseConfig(this.config);
        const unwatch = this.$vApp.$watch(
            () => this.config,
            (value: NortharrowConfig | undefined) => this._parseConfig(value)
        );

        const { destroy, el } = this.mount(NortharrowV, {
            app: this.$element
        });
        const innerShell =
            this.$vApp.$el.getElementsByClassName('inner-shell')[0];
        innerShell.appendChild(el.childNodes[0]);

        // override the removed method here to get access to scope
        this.removed = () => {
            // console.log(`[fixture] ${this.id} removed`);

            unwatch();

            // remove the pole marker layer if it exists
            if (this.$iApi.geo.layer.getLayer(POLE_MARKER_LAYER_ID)) {
                this.$iApi.geo.map.removeLayer(POLE_MARKER_LAYER_ID);
            }

            const northarrowStore = useNortharrowStore(this.$vApp.$pinia);
            northarrowStore.$reset();

            destroy();
        };
    }
}

export default NortharrowFixture;
