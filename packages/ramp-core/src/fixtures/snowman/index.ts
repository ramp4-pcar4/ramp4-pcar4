import SnowmanV from './snowman.vue'; // import on-map component
import SnowmanAppbarButtonV from './appbar-button.vue';

import { FixtureInstance } from '@/api';

class SnowmanFixture extends FixtureInstance {
    added(): void {
        console.log(`[fixture] ${this.id} added`);

        // register snowman appbar button
        this.$iApi.component('snowman-appbar-button', SnowmanAppbarButtonV);

        // instantiate it a new instance of the Snowman component using a helper function which will add `$iApi` to the component automatically
        // the component will be auto-mounted as well unless you pass `false` to the `extend` function
        const snowman = this.extend(SnowmanV, {
            propsData: { message: "I'm snowman prop." }
        });

        this.$vApp.$el.appendChild(snowman.$el);

        // snowman self-terminates from its own component

        // NOTE: right now Snowman terminates from inside its own component, but it can be done here as well 👇
        // svInstance.$destroy();
        // this.$vApp.$el.removeChild(this.$el);
        // this.$iApi.fixture.remove(fixture);
    }

    removed(): void {
        console.log(`[fixture] ${this.id} removed`);
    }
}

export default SnowmanFixture;
