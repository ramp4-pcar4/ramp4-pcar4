<template>
    <div class="pan-guard" ref="panGuard">
        <p class="label">{{ $t('panguard.instructions') }}</p>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class MapPanguardV extends Vue {
    timeoutID: number | undefined = undefined;

    mounted(): void {
        // keep track of how many concurrent pointers are on the screen and their initial positions. This is a javascript map, not a map-map
        const pointers = new Map();

        // prevent possible issues with esri event registration if this fixture runs before the map has built itself
        this.$iApi.geo.map.viewPromise.then(() => {
            // TODO: when projection change is implemented check that the below events track any changes to
            // the esriView or update MapAPI to be raising pointer events on the EventAPI, and this will listen to for those events
            this.$iApi.geo.map.esriView!.on('pointer-down', e => {
                if (e.pointerType !== 'touch') return;
                pointers.set(e.pointerId, { x: e.x, y: e.y });
            });

            this.$iApi.geo.map.esriView!.on(
                ['pointer-up', 'pointer-leave'],
                e => {
                    if (e.pointerType !== 'touch') return;
                    pointers.delete(e.pointerId);
                }
            );

            this.$iApi.geo.map.esriView!.on('pointer-move', e => {
                const { pointerId, pointerType, x, y } = e;
                const pointer = pointers.get(pointerId);

                if (!pointer || pointerType !== 'touch' || pointers.size !== 1)
                    return;

                // ignore very small movements to avoid scrolling when someone is tapping the screen
                const distance = Math.sqrt(
                    Math.pow(x - pointer.x, 2) + Math.pow(y - pointer.y, 2)
                );
                if (distance < 20) return;

                // show the text on screen and remove after 2 seconds of no movement
                this.$el.classList.add('active');
                clearTimeout(this.timeoutID);
                this.timeoutID = window.setTimeout(() => {
                    this.$el.classList.remove('active');
                }, 2000);

                // manually scroll the page since scrolling doesn't work when moving over the map
                window.scrollBy(pointer.x - x, pointer.y - y);
            });
        });
    }
}
</script>

<style lang="scss" scoped>
.pan-guard {
    transition: opacity ease-in-out;
    background-color: rgba(0, 0, 0, 0.45);
    text-align: center;

    position: absolute;
    padding: 0px;
    margin: 0px;
    border-width: 0px;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;

    transition-duration: 0.8s;

    opacity: 0;
    z-index: 100;
    pointer-events: none !important;

    &.active {
        opacity: 1;
        transition-duration: 0.3s;
    }

    .label {
        font-size: 1em * 1.5;
        color: white;
        position: relative;
        margin: 0;
        top: 50% !important;
        transform: translateY(-50%);
    }
}
</style>
