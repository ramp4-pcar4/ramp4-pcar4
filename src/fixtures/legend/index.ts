import { markRaw } from 'vue';
import { LegendAPI } from './api/legend';
import LegendNavButtonV from './nav-button.vue';
import LegendScreenV from './screen.vue';

import messages from './lang/lang.csv?raw';
import { useAppbarStore } from '../appbar/store';
import { useMapnavStore } from '../mapnav/store';
import { useLegendStore } from './store';

class LegendFixture extends LegendAPI {
    added() {
        // console.log(`[fixture] ${this.id} added`);

        this.$iApi.component('legend-nav-button', LegendNavButtonV);

        this.$iApi.panel.register(
            {
                legend: {
                    screens: {
                        'legend-screen': markRaw(LegendScreenV)
                    },
                    style: {
                        width: '350px'
                    },
                    alertName: 'legend.title',
                    button: {
                        tooltip: 'legend.title',
                        // https://material.io/resources/icons/?icon=layers&style=baseline
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" /></svg>'
                    }
                }
            },
            {
                i18n: { messages }
            }
        );

        // parse legend section of config and store information in legend store
        // here we create a copy of the config because the config parser will mutate the layer ids in the config
        this._parseConfig(
            this.config !== undefined
                ? JSON.parse(JSON.stringify(this.config))
                : undefined
        );
        const unwatch = this.$vApp.$watch(
            () => this.config,
            (value: any) =>
                this._parseConfig(
                    value !== undefined
                        ? JSON.parse(JSON.stringify(value))
                        : undefined
                )
        );

        // override the removed method here to get access to scope
        this.removed = () => {
            // remove all le
            // console.log(`[fixture] ${this.id} removed`);
            unwatch();

            if (this.$iApi.fixture.get('appbar')) {
                const appbarStore = useAppbarStore(this.$vApp.$pinia);
                appbarStore.removeButton('legend');
            }

            if (this.$iApi.fixture.get('mapnav')) {
                const mapnavStore = useMapnavStore(this.$vApp.$pinia);
                mapnavStore.removeItem('legend');
            }

            const legendStore = useLegendStore();
            legendStore.$reset();

            this.$iApi.panel.remove('legend');
        };
    }
}

export default LegendFixture;
