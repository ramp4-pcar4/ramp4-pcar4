import { OverviewmapAPI } from './api/overviewmap';
import { type OverviewmapConfig, useOverviewmapStore } from './store/index';
import OverviewmapV from './overviewmap.vue';
import messages from './lang/lang.csv?raw';

class OverviewmapFixture extends OverviewmapAPI {
    added() {
        // console.log(`[fixture] ${this.id} added`);

        Object.entries(messages).forEach(value =>
            (<any>this.$iApi.$i18n).mergeLocaleMessage(...value)
        );

        this._parseConfig(this.config);
        const unwatch = this.$vApp.$watch(
            () => this.config,
            (value: OverviewmapConfig | undefined) => this._parseConfig(value)
        );

        const { destroy, el } = this.mount(OverviewmapV, {
            app: this.$element
        });
        const innerShell =
            this.$vApp.$el.getElementsByClassName('inner-shell')[0];
        innerShell.appendChild(el.childNodes[0]);

        // override the removed method here to get access to scope
        this.removed = () => {
            // console.log(`[fixture] ${this.id} removed`);
            unwatch();
            destroy();

            const overviewmapStore = useOverviewmapStore(this.$vApp.$pinia);
            overviewmapStore.$reset();
        };
    }
}

export default OverviewmapFixture;
