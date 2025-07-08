import SwipeV from './swipe.vue'; // import on-map component
import { FixtureInstance } from '@/api';

class SwipeFixture extends FixtureInstance {
    async added(): Promise<void> {
        const { el, destroy } = this.mount(SwipeV, {
            app: this.$element,
            props: { fixture: this }
        });

        if (el.childNodes[0]) this.$vApp.$el.appendChild(el.childNodes[0]);

        this.removed = (): void => {
            destroy();
        };
    }
}

export default SwipeFixture;
