import { GridAPI } from './api/grid';
import { grid } from './store/index';

import GridV from './grid.vue';

import messages from './lang/lang.csv';

class GridFixture extends GridAPI {
    async added() {
        this.$iApi.panel.register(
            {
                'grid-panel': {
                    screens: {
                        'grid-screen': GridV
                    },
                    style: {
                        'flex-grow': '1',
                        'max-width': '900px'
                    }
                }
            },
            { i18n: { messages } }
        );

        this.$vApp.$store.registerModule('grid', grid());
    }

    removed() {
        this.$vApp.$store.unregisterModule('grid');
    }
}

export default GridFixture;
