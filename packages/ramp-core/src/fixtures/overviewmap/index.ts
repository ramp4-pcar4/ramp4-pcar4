import { OverviewmapAPI } from './api/overviewmap';
import { overviewmap } from './store/index';
import OverviewmapV from './overviewmap.vue';
import messages from './lang/lang.csv';

class OverviewmapFixture extends OverviewmapAPI {
    added() {
        console.log(`[fixture] ${this.id} added`);

        this.$vApp.$store.registerModule('overviewmap', overviewmap());

        Object.entries(messages).forEach(value => this.$vApp.$i18n.mergeLocaleMessage(...value));

        this._parseConfig(this.config);
        this.$vApp.$watch(
            () => this.config,
            value => this._parseConfig(value)
        );

        const innerShell = this.$vApp.$el.getElementsByClassName('inner-shell')[0];
        const overviewInstance = this.extend(OverviewmapV, { store: this.$vApp.$store, i18n: this.$vApp.$i18n });
        innerShell.append(overviewInstance.$el)
    }

    removed() {
        console.log(`[fixture] ${this.id} removed`);
        this.$vApp.$store.unregisterModule('overviewmap');
    }
}

export default OverviewmapFixture;
