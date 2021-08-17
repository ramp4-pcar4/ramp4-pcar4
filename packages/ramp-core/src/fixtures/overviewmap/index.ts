import { OverviewmapAPI } from './api/overviewmap';
import { overviewmap, OverviewmapConfig } from './store/index';
import OverviewmapV from './overviewmap.vue';
import messages from './lang/lang.csv';

class OverviewmapFixture extends OverviewmapAPI {
    added() {
        console.log(`[fixture] ${this.id} added`);

        this.$vApp.$store.registerModule('overviewmap', overviewmap());

        Object.entries(messages).forEach(value =>
            (<any>this.$vApp.$i18n).mergeLocaleMessage(...value)
        );

        this._parseConfig(this.config);
        this.$vApp.$watch(
            () => this.config,
            (value: OverviewmapConfig | undefined) => this._parseConfig(value)
        );
    }

    removed() {
        console.log(`[fixture] ${this.id} removed`);
        this.$vApp.$store.unregisterModule('overviewmap');
    }

        this.$element.component('OverviewmapV', OverviewmapV);

        const innerShell = this.$vApp.$el.getElementsByClassName(
            'inner-shell'
        )[0];
        const overviewInstance = this.extend(
            OverviewmapV,
            this.$element._context.components,
            this.$element._context.directives,
            {
                iApi: this.$iApi,
                store: this.$vApp.$store,
                i18n: <any>this.$vApp.$i18n
            }
        );
        const wrapper = document.createElement('div');
        overviewInstance.mount(wrapper);
        innerShell.appendChild(wrapper.childNodes[0]);
        console.log('adding overview map to shell...', innerShell, wrapper);
    }
}

export default OverviewmapFixture;
