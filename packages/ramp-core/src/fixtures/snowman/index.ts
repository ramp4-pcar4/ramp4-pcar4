import Vue from 'vue';

import { Fixture } from '@/store/modules/fixture';

import SnowmanV from './snowman.vue'; // import on-map component

class Snowman extends Fixture {
    added(): void {
        console.log(`[fixture] ${this.id} added`);

        // instantiate it a new instance of the Snowman component and pass iApi as an option and this fixture reference as a prop
        // this way, the on-map component has access to these entities
        const svInstance = new (Vue.extend(SnowmanV))({ iApi: this.iApi, propsData: { fixture: this } });

        // adds the snowman on-map component to the main map instance
        // TODO: this should be done in the `initialized` life hook
        svInstance.$mount();
        this.iApi.vApp.$el.appendChild(svInstance.$el);

        // snowman self-terminates from its own component
    }

    removed(): void {
        console.log(`[fixture] ${this.id} removed`);
    }
}

export default new Snowman('snowman');
