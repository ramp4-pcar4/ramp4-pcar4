import OverviewmapV from './overviewmap.vue';

import { FixtureInstance } from '@/api';

class OverviewmapFixture extends FixtureInstance {
    added(): void {
        console.log(`[fixture] ${this.id} added`);

        const innerShell = this.$vApp.$el.getElementsByClassName('inner-shell')[0];
        const overviewInstance = this.extend(OverviewmapV, { store: this.$vApp.$store });
        innerShell.append(overviewInstance.$el)
    }

    removed(): void {
        console.log(`[fixture] ${this.id} removed`);
    }
}

export default OverviewmapFixture;
