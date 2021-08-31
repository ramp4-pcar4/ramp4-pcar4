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

        // const wrapper = document.createElement('div');
        // const northarrowInstance = this.extend(NortharrowV, {
        //     iApi: this.$iApi,
        //     store: this.$vApp.$store,
        //     i18n: <any>this.$vApp.$i18n
        // });
        // northarrowInstance.mount(wrapper);

        const { vNode, destroy, el } = this.mount(NortharrowV, { app: this.$element });
        const innerShell = this.$vApp.$el.getElementsByClassName('inner-shell')[0];
        innerShell.appendChild(el.childNodes[0]);
    }

    removed(): void {
        console.log(`[fixture] ${this.id} removed`);
        this.$vApp.$store.unregisterModule('northarrow');
    }
}

export default NortharrowFixture;
