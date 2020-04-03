import LegendAppbarButtonV from './appbar-button.vue';
import { FixtureInstance } from '@/api';

class LegendFixture extends FixtureInstance {
    added() {
        this.$iApi.component('legend-appbar-button', LegendAppbarButtonV);
    }
}

export default LegendFixture;
