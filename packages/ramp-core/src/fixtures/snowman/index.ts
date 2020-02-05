import Vue from 'vue';

import { FixtureConfigHelper } from '@/store/modules/fixture';

import SnowmanV from './snowman.vue'; // import on-map component

class SnowmanFixture extends FixtureConfigHelper {
    added(): void {
        console.log(`[fixture] ${this.id} added`);

        // instantiate it a new instance of the Snowman component and pass iApi as an option and this fixture reference as a prop
        // since it's not a child of other R4MP Vue components, it will not have a `iApi` reference automatically
        // this way, the on-map component has access to these entities
        const fixture = this.$iApi.fixture.get(this.id)!;

        // NOTE: we are passing `FixtureItemAPI` to the component, not plain `FixtureConfig` object
        const svInstance = new (Vue.extend(SnowmanV))({ iApi: this.$iApi, propsData: { fixture } });

        // adds the snowman on-map component to the main map instance
        // TODO: this should be done in the `initialized` life hook
        svInstance.$mount();
        this.$iApi.$vApp.$el.appendChild(svInstance.$el);

        // snowman self-terminates from its own component

        // NOTE: right now Snowman terminates from inside its own component, but it can be done here as well 👇
        // svInstance.$destroy();
        // this.$iApi.vApp.$el.removeChild(this.$el);
        // this.$iApi.fixture.remove(fixture);
    }

    removed(): void {
        console.log(`[fixture] ${this.id} removed`);
    }
}

export default new SnowmanFixture('snowman');
