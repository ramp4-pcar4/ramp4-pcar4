<template>
    <div class="absolute top-0 right-0">
        <img style="width: 250px" :src="url" alt="Snowman" srcset="" />
    </div>
</template>

<script lang="ts">
import { FixtureInstance } from '@/api';
import { defineComponent } from 'vue';

// this is an example of a on-map component (doesn't use panels)
export default defineComponent({
    name: 'SnowmanV',
    props: {
        fixture: {
            type: FixtureInstance,
            required: true
        },
        message: String
    },
    data() {
        return { url: 'https://i.ya-webdesign.com/images/evil-snowman-png-1.png' };
    },
    mounted() {
        // this is the proper way of accessing the API instance of the R4MP map the fixture is running in,
        // and accessing the parent fixture as well
        this.$options.iApi;
        this.fixture;

        console.log(this.message);

        setTimeout(() => {
            console.log(`[fixture] ${this.fixture.id} self-terminates`);

            // NOTE: only on-map components need this relatively complicated removal process; panels are closed much easier

            // removes the snowman from DOM and destroys the instance
            // TODO: this should be called in the `terminated` life hook; it's called in the timeout just for display
            // this.$destroy(); // destroy Vue component (no longer supported in Vue 3)
            this.$el.parentNode!.removeChild(this.$el); // remove DOM nodes
            // you can also do it like this 👉 this.$options.iApi.$vApp.$el.removeChild(this.$el.parentNode);

            // NOTE: 📢 it's possible to call the store directly from a fixture component, but DON'T DO THIS! 🛑
            // always use the API, that's what it's for, let it call the store directly
            // 👉 this.$iApi.$vApp.$store.set('fixture/REMOVE_FIXTURE!', { value: this }); ❌

            // 👇 this is the correct way ✔
            this.fixture.remove(); // or // this.$options.iApi.fixture.remove(this.fixture);
        }, 6000);
    }
});
</script>

<style lang="scss" scoped></style>
