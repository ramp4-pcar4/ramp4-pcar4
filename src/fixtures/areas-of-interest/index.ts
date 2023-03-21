import { markRaw } from 'vue';
import AreasOfInterestScreenV from './screen.vue';
import messages from './lang/lang.csv?raw';
import { AreasOfInterestAPI } from './api/areas-of-interest';
import { useAppbarStore } from '../appbar/store';
import { useAreasOfInterestStore } from './store';

class AreasOfInterestFixture extends AreasOfInterestAPI {
    added() {
        // console.log(`[fixture] ${this.id} added`);

        this.$iApi.panel.register(
            {
                'areas-of-interest': {
                    screens: {
                        'areas-of-interest-screen': markRaw(
                            AreasOfInterestScreenV
                        )
                    },
                    style: {
                        width: '350px'
                    },
                    button: {
                        tooltip: 'areas-of-interest.title',
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"/></svg>'
                    },
                    alertName: 'areas-of-interest.title'
                }
            },
            {
                i18n: { messages }
            }
        );

        this._parseConfig(this.config);
        const unwatch = this.$vApp.$watch(
            () => this.config,
            (value: any) => this._parseConfig(value)
        );

        this.removed = () => {
            // console.log(`[fixture] ${this.id} removed`);
            unwatch();

            if (this.$iApi.fixture.get('appbar')) {
                const appbarStore = useAppbarStore(this.$vApp.$pinia);
                appbarStore.removeButton('areas-of-interest');
            }

            this.$iApi.panel.remove('areas-of-interest');

            const areasOfInterestStore = useAreasOfInterestStore(
                this.$vApp.$pinia
            );
            areasOfInterestStore.$reset();
        };
    }
}

export default AreasOfInterestFixture;
