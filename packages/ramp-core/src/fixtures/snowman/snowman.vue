<template>
    <div class="absolute top-0 right-0">
        <img width="250px" :src="url" alt="Snowman" srcset="" />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { Fixture } from '@/store/modules/fixture';

// this is an example of a on-map component (doesn't use panels)

@Component({})
export default class SnowmanV extends Vue {
    @Prop() fixture!: Fixture; // this prop is passed to this component by its fixture main class

    url: string = 'https://i.ya-webdesign.com/images/evil-snowman-png-1.png';

    mounted(): void {
        // this is the proper way of accessing the API instance of the R4MP map the fixture is running in,
        // and accessing the parent fixture as well
        this.$iApi;
        this.fixture;

        setTimeout(() => {
            console.log(`[fixture] ${this.fixture.id} self-terminates`);

            // NOTE: 📢 it's possible to call the store directly from a fixture component, but DON'T DO THIS! 🛑
            // always use the API, that's what it's for, let it call the store directly
            // this.$iApi.vApp.$store.set('fixture/REMOVE_FIXTURE!', { value: this });

            // this is the correct way 👇
            this.$iApi.fixture.remove(this.fixture.id);

            // removes the snowman from DOM and destroys the instance
            // TODO: this should be called in the `terminated` life hook
            this.$iApi.vApp.$el.removeChild(this.$el);
            this.$destroy();
        }, 6000);
    }
}
</script>

<style lang="scss" scoped></style>
