import SnowmanV from './snowman.vue'; // import on-map component
import SnowmanAppbarButtonV from './appbar-button.vue';

import { FixtureInstance } from '@/api';

class SnowmanFixture extends FixtureInstance {
    added(): void {
        // console.log(`[fixture] ${this.id} added`);

        // register snowman appbar button
        this.$iApi.component('snowman-appbar-button', SnowmanAppbarButtonV);

        const { el } = this.mount(SnowmanV, {
            app: this.$element,
            props: { message: 'This is a snowman prop.', fixture: this }
        });

        this.$vApp.$el.appendChild(el.childNodes[0]);

        // snowman self-terminates from its own component

        // NOTE: right now Snowman terminates from inside its own component, but it can be done here as well 👇
        // svInstance.$destroy(); // no longer supported in Vue 3
        // this.$vApp.$el.removeChild(snowman);
        // this.$iApi.fixture.remove(this);
    }

    removed(): void {
        // console.log(`[fixture] ${this.id} removed`);
    }
}

export default SnowmanFixture;
