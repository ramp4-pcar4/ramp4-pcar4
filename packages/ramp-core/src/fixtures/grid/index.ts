import { GridAPI } from './api/grid';
import { grid } from './store/index';

import GridV from './grid.vue';

import rows from './lang/lang.csv';

class GridFixture extends GridAPI {
    async added() {
        this.$iApi.panel.register(
            {
                'grid-panel': {
                    screens: {
                        'grid-screen': GridV
                    },
                    style: {
                        width: '900px'
                    }
                }
            },
            { i18n: rows }
        );

        this.$vApp.$store.registerModule('grid', grid());

        // temporarily throw the InstanceAPI in console for testing purposes.
        console.log(this.$iApi);
    }

    removed() {
        this.$vApp.$store.unregisterModule('grid');
    }
}

export default GridFixture;
