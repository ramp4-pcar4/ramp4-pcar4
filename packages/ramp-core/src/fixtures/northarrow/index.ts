import { NortharrowAPI } from './api/northarrow';
import { northarrow } from './store/index';
import NortharrowV from './northarrow.vue';

class NortharrowFixture extends NortharrowAPI {
    async added() {
        console.log(`[fixture] ${this.id} added`);

        this.$vApp.$store.registerModule('northarrow', northarrow());

        this._parseConfig(this.config);
        this.$vApp.$watch(
            () => this.config,
            value => this._parseConfig(value)
        );

        const innerShell = this.$vApp.$el.getElementsByClassName(
            'inner-shell'
        )[0];
        const northarrowInstance = this.extend(NortharrowV, {
            store: this.$vApp.$store
        });
        innerShell.append(northarrowInstance.$el);
    }

    removed(): void {
        console.log(`[fixture] ${this.id} removed`);
        this.$vApp.$store.unregisterModule('northarrow');
    }
}

export default NortharrowFixture;
