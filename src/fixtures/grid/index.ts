import { GridAPI } from './api/grid';
import { grid } from './store/index';
import { markRaw } from 'vue';

import GridScreenV from './screen.vue';
import GridAppbarButtonV from './appbar-button.vue';

import messages from './lang/lang.csv?raw';

class GridFixture extends GridAPI {
    async added() {
        this.$iApi.panel.register(
            {
                'grid-panel': {
                    screens: {
                        'grid-screen': markRaw(GridScreenV)
                    },
                    style: {
                        width: '450px'
                    },
                    expanded: true,
                    alertName: 'grid.alertName'
                }
            },
            { i18n: { messages } }
        );

        this.$iApi.component('grid-appbar-button', GridAppbarButtonV);
        this.$vApp.$store.registerModule('grid', grid());
    }

    removed() {
        // TODO: remove appbar button (blocked by #882)
        this.$iApi.panel.remove('grid-panel');
        this.$vApp.$store.unregisterModule('grid');
    }
}

export default GridFixture;
