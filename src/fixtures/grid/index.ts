import { GridAPI } from './api/grid';
import { markRaw } from 'vue';

import GridScreenV from './screen.vue';

import messages from './lang/lang.csv?raw';
import { useAppbarStore } from '../appbar/store';
import { useGridStore } from './store';

class GridFixture extends GridAPI {
    async added() {
        this.$iApi.panel.register(
            {
                grid: {
                    screens: {
                        'grid-screen': markRaw(GridScreenV)
                    },
                    style: {
                        width: '450px'
                    },
                    controls: {
                        expand: true
                    },
                    button: {
                        tooltip: 'grid.button.title',
                        // https://fonts.google.com/icons?selected=Material%20Icons%3Atable_chart
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /> <path d="M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z" /></svg>'
                    },
                    expanded: true,
                    alertName: 'grid.alertName'
                }
            },
            { i18n: { messages } }
        );

        // parse grid config for each layer
        this._parseConfig();
    }

    removed() {
        if (this.$iApi.fixture.get('appbar')) {
            const appbarStore = useAppbarStore(this.$vApp.$pinia);
            appbarStore.removeButton('grid');
        }

        const gridStore = useGridStore(this.$vApp.$pinia);
        gridStore.$reset();

        this.$iApi.panel.remove('grid');
    }
}

export default GridFixture;
