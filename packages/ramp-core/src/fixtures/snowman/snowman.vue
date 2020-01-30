<template>
    <div class="absolute top-0 left-0">
        <img :src="url" alt="Snowman" srcset="" />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

// this is an example of a on-map component (doesn't use panels)

@Component({})
export default class SnowmanV extends Vue {
    url: string = 'https://i.ya-webdesign.com/images/evil-snowman-png-1.png';
}
</script>

<style lang="scss" scoped></style>
