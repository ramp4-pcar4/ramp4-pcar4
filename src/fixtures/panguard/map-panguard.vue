<template>
    <div class="pg" ref="panGuard">
        <p class="pg-label">{{ $t('panguard.instructions') }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { GlobalEvents } from '@/api';

export default defineComponent({
    name: 'MapPanguardV',
    data() {
        return {
            timeoutID: -1,
            esriHandlers: [] as Array<any>,
            rampHanders: [] as Array<string>
        };
    },

    mounted() {
        this.setup();
        // setup again when the map reloads
        this.rampHanders.push(
            this.$iApi.event.on(GlobalEvents.MAP_CREATED, () => {
                this.setup();
            })
        );
        this.rampHanders.push(
            this.$iApi.event.on(GlobalEvents.MAP_DESTROYED, () => {
                this.esriHandlers.forEach(h => h.remove());
            })
        );
        this.rampHanders.push(
            this.$iApi.event.on(GlobalEvents.MAP_REFRESH_START, () => {
                this.esriHandlers.forEach(h => h.remove());
            })
        );
        this.rampHanders.push(
            this.$iApi.event.on(GlobalEvents.MAP_REFRESH_END, () => {
                this.setup();
            })
        );
    },

    beforeUnmount() {
        this.rampHanders.forEach(h => this.$iApi.event.off(h));
        this.esriHandlers.forEach(h => h.remove());
    },

    methods: {
        setup() {
            // keep track of how many concurrent pointers are on the screen and their initial positions. This is a javascript map, not a map-map
            const pointers = new Map();

            // prevent possible issues with esri event registration if this fixture runs before the map has built itself
            this.$iApi.geo.map.viewPromise.then(() => {
                this.esriHandlers.push(
                    this.$iApi.geo.map.esriView!.on('pointer-down', e => {
                        if (e.pointerType !== 'touch') return;
                        pointers.set(e.pointerId, { x: e.x, y: e.y });
                    })
                );

                this.esriHandlers.push(
                    this.$iApi.geo.map.esriView!.on(
                        ['pointer-up', 'pointer-leave'],
                        e => {
                            if (e.pointerType !== 'touch') return;
                            // small delay as to not offend panguard when lifting more than one finger
                            window.setTimeout(() => {
                                pointers.delete(e.pointerId);
                            }, 200);
                        }
                    )
                );

                this.esriHandlers.push(
                    this.$iApi.geo.map.esriView!.on('pointer-move', e => {
                        const { pointerId, pointerType, x, y } = e;
                        const pointer = pointers.get(pointerId);

                        if (
                            !pointer ||
                            pointerType !== 'touch' ||
                            pointers.size !== 1
                        ) {
                            this.$el.classList.remove('pg-active');
                            return;
                        }

                        // ignore very small movements to avoid scrolling when someone is tapping the screen
                        const distance = Math.sqrt(
                            Math.pow(x - pointer.x, 2) +
                                Math.pow(y - pointer.y, 2)
                        );
                        if (distance < 20) return;

                        // show the text on screen and remove after 2 seconds of no movement
                        this.$el.classList.add('pg-active');

                        if (this.timeoutID !== -1) {
                            clearTimeout(this.timeoutID);
                        }

                        this.timeoutID = window.setTimeout(() => {
                            this.$el.classList.remove('pg-active');
                        }, 2000);

                        // manually scroll the page since scrolling doesn't work when moving over the map
                        window.scrollBy(pointer.x - x, pointer.y - y);
                    })
                );
            });
        }
    }
});
</script>

<style lang="scss" scoped>
.pg {
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
    pointer-events: none !important;
    z-index: 100;

    &.pg-active {
        opacity: 1;
        transition-duration: 0.3s;
    }

    .pg-label {
        font-size: 1em * 1.5;
        color: white;
        position: relative;
        margin: 0;
        top: 50% !important;
        transform: translateY(-50%);
    }
}
</style>
