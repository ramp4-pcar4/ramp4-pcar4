import SwipeV from './swipe.vue'; // import on-map component

import { FixtureInstance } from '@/api';

class SwipeFixture extends FixtureInstance {
    added(): void {
        // console.log(`[fixture] ${this.id} added`);

        const { el } = this.mount(SwipeV, {
            app: this.$element,
            props: { message: 'This is a swipe.', fixture: this }
        });

        this.$vApp.$el.appendChild(el.childNodes[0]);
    }

    removed(): void {
        // console.log(`[fixture] ${this.id} removed`);
    }
}

export default SwipeFixture;
