import CrosshairsV from './crosshairs.vue';

import { FixtureInstance } from '@/api';

class CrosshairsFixture extends FixtureInstance {
    added(): void {
        console.log(`[fixture] ${this.id} added`);

        this.$element.component('CrosshairsV', CrosshairsV);

        const innerShell = this.$vApp.$el.getElementsByClassName('inner-shell')[0];
        const crosshairsInstance = this.extend(
            CrosshairsV,
            this.$element._context.components,
            this.$element._context.directives,
            {
                iApi: this.$iApi
            }
        );
        const wrapper = document.createElement('div');
        crosshairsInstance.mount(wrapper);
        innerShell.appendChild(wrapper.childNodes[0]);
    }

    removed(): void {
        console.log(`[fixture] ${this.id} removed`);
    }
}

export default CrosshairsFixture;
