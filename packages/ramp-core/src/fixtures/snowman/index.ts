import Vue from 'vue';

import { Fixture } from '@/store/modules/fixture';

import SnowmanV from './snowman.vue'; // import on-map component
import { InstanceAPI } from '@/api/instance';
const svInstance = new (Vue.extend(SnowmanV))(); // instantiate it

class Snowman extends Fixture {
    added(): void {
        console.log(`[fixture] ${this.id} added`);

        // adds the snowman on-map component to the main map instance
        // TODO: this should be done in the `initialized` life hook
        svInstance.$mount();
        this.iApi.vApp.$el.appendChild(svInstance.$el);

        setTimeout(() => {
            console.log(`[fixture] ${this.id} self-terminates`);
            this.iApi.vApp.$store.set('fixture/removeFixture!', { value: this });

            // removes the snowman from DOM and destroys the instance
            // TODO: this should be called in the `terminated` life hook
            this.iApi.vApp.$el.removeChild(svInstance.$el);
            svInstance.$destroy();
        }, 6000);
    }

    removed(): void {
        console.log(`[fixture] ${this.id} removed`);
    }
}

export default new Snowman('snowman');
