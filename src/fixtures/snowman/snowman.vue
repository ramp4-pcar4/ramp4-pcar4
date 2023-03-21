<template>
    <div class="absolute top-0 right-0" ref="el">
        <img style="width: 250px" :src="url" alt="Snowman" srcset="" />
    </div>
</template>

<script setup lang="ts">
import { FixtureInstance } from '@/api';
import { onMounted, ref } from 'vue';

const props = defineProps({
    fixture: {
        type: FixtureInstance,
        required: true
    },
    message: String
});

const el = ref();

const url = ref('https://i.ya-webdesign.com/images/evil-snowman-png-1.png');

onMounted(() => {
    // console.log(this.message);

    setTimeout(() => {
        // console.log(`[fixture] ${this.fixture.id} self-terminates`);

        // NOTE: only on-map components need this relatively complicated removal process; panels are closed much easier

        // removes the snowman from DOM and destroys the instance
        // TODO: this should be called in the `terminated` life hook; it's called in the timeout just for display
        // this.$destroy(); // destroy Vue component (no longer supported in Vue 3)
        el.value.parentNode!.removeChild(el.value); // remove DOM nodes
        // you can also do it like this 👉 this.$options.iApi.$vApp.$el.removeChild(this.$el.parentNode);

        // NOTE: 📢 it's possible to call the store directly from a fixture component, but DON'T DO THIS! 🛑
        // always use the API, that's what it's for, let it call the store directly
        // 👉 useFixtureStore(this.$iApi.$vApp.$pinia).removeFixture(this) ❌

        // 👇 this is the correct way ✔
        props.fixture.remove(); // or // this.$options.iApi.fixture.remove(this.fixture);
    }, 6000);
});
</script>

<style lang="scss" scoped></style>
