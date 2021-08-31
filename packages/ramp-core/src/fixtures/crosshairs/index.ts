import CrosshairsV from './crosshairs.vue';

import { FixtureInstance } from '@/api';

class CrosshairsFixture extends FixtureInstance {
    added(): void {
        console.log(`[fixture] ${this.id} added`);

        this.$element.component('CrosshairsV', CrosshairsV);

        // const crosshairsInstance = this.extend(CrosshairsV, {
        //     iApi: this.$iApi
        // });
        // const wrapper = document.createElement('div');
        // crosshairsInstance.mount(wrapper);

        const { vNode, destroy, el } = this.mount(CrosshairsV, { app: this.$element });
        const innerShell = this.$vApp.$el.getElementsByClassName('inner-shell')[0];
        innerShell.appendChild(el.childNodes[0]);
    }

    removed(): void {
        console.log(`[fixture] ${this.id} removed`);
    }
}

export default CrosshairsFixture;
