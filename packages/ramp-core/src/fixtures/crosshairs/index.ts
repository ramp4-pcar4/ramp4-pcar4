import CrosshairsV from './crosshairs.vue';

import { FixtureInstance } from '@/api';

class CrosshairsFixture extends FixtureInstance {
    added(): void {
        console.log(`[fixture] ${this.id} added`);

        // const innerShell = this.$vApp.$el.getElementsByClassName(
        //     'inner-shell'
        // )[0];
        // const crosshairs = this.extend(CrosshairsV);
        // innerShell.append(crosshairs.$el);
        this.$element.component('CrosshairsV', CrosshairsV);
    }

    removed(): void {
        console.log(`[fixture] ${this.id} removed`);
    }
}

export default CrosshairsFixture;
