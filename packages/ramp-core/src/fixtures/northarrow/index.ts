import { createApp } from 'vue';
import { NortharrowAPI } from './api/northarrow';
import { northarrow, NortharrowConfig } from './store/index';
import NortharrowV from './northarrow.vue';

class NortharrowFixture extends NortharrowAPI {
    async added() {
        console.log(`[fixture] ${this.id} added`);

        this.$vApp.$store.registerModule('northarrow', northarrow());

        this._parseConfig(this.config);
        this.$vApp.$watch(
            () => this.config,
            (value: NortharrowConfig | undefined) => this._parseConfig(value)
        );

        this.$element.component('NortharrowV', NortharrowV);

        const wrapper = document.createElement('div');
        const northarrowInstance = this.extend(
            NortharrowV,
            this.$element._context.components,
            this.$element._context.directives,
            {
                iApi: this.$iApi,
                store: this.$vApp.$store,
                i18n: <any>this.$vApp.$i18n
            }
        );
        const innerShell = this.$vApp.$el.getElementsByClassName(
            'inner-shell'
        )[0];
        northarrowInstance.mount(wrapper);
        innerShell.appendChild(wrapper.childNodes[0]);
        console.log('adding north arrow to shell...', innerShell, wrapper);
    }

    removed(): void {
        console.log(`[fixture] ${this.id} removed`);
        this.$vApp.$store.unregisterModule('northarrow');
    }
}

export default NortharrowFixture;
