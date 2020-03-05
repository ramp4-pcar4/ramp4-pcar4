import Vue from 'vue';
import { FixtureConfigHelper } from '@/store/modules/fixture';
import { PanelConfig } from '@/store/modules/panel';
import { ConfigStore } from '@/store/modules/config';
import { LayerStore, layer } from '@/store/modules/layer';

import GridV from './grid.vue';

class GridFixture extends FixtureConfigHelper {
    async added() {
        const screens = [
            {
                id: 'grid-screen',
                component: GridV
            }
        ];

        const gridPanel = {
          id: 'grid-panel',
          width: 900,
          screens: screens,
          route: {
            id: 'grid-screen'
          }
        }

        const pApi3 = this.$iApi.panel.open(gridPanel);
    }
}

export default new GridFixture('grid');
