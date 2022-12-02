import CrosshairsV from './crosshairs.vue';

import { FixtureInstance } from '@/api';

class CrosshairsFixture extends FixtureInstance {
    added(): void {
        // console.log(`[fixture] ${this.id} added`);
        const { destroy, el } = this.mount(CrosshairsV, {
            app: this.$element
        });

        const innerShell =
            this.$vApp.$el.getElementsByClassName('inner-shell')[0];
        innerShell.appendChild(el.childNodes[0]);

        // override the removed method here to get access to scope
        this.removed = () => {
            // console.log(`[fixture] ${this.id} removed`);
            destroy();
        };
    }
}

export default CrosshairsFixture;
