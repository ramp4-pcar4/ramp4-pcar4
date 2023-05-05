<template>
    <div class="pg" ref="panGuard">
        <p class="pg-label">{{ t('panguard.instructions') }}</p>
    </div>
</template>

<script setup lang="ts">
import { inject, onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import { GlobalEvents, InstanceAPI } from '@/api';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const iApi = inject('iApi') as InstanceAPI;
const panGuard = ref<HTMLElement>();

const timeoutID = ref(-1);
const esriHandlers = reactive<Array<any>>([]);
const rampHanders = reactive<Array<string>>([]);

onMounted(() => {
    setup();
    // setup again when the map reloads
    rampHanders.push(
        iApi.event.on(GlobalEvents.MAP_CREATED, () => {
            setup();
        })
    );
    rampHanders.push(
        iApi.event.on(GlobalEvents.MAP_DESTROYED, () => {
            esriHandlers.forEach(h => h.remove());
        })
    );
    rampHanders.push(
        iApi.event.on(GlobalEvents.MAP_REFRESH_START, () => {
            esriHandlers.forEach(h => h.remove());
        })
    );
    rampHanders.push(
        iApi.event.on(GlobalEvents.MAP_REFRESH_END, () => {
            setup();
        })
    );
});

onBeforeUnmount(() => {
    rampHanders.forEach(h => iApi.event.off(h));
    esriHandlers.forEach(h => h.remove());
});

const setup = () => {
    // keep track of how many concurrent pointers are on the screen and their initial positions. This is a javascript map, not a map-map
    const pointers = new Map();

    // prevent possible issues with esri event registration if this fixture runs before the map has built itself
    iApi.geo.map.viewPromise.then(() => {
        esriHandlers.push(
            iApi.geo.map.esriView!.on('pointer-down', e => {
                if (e.pointerType !== 'touch') return;
                pointers.set(e.pointerId, { x: e.x, y: e.y });
            })
        );

        esriHandlers.push(
            //@ts-ignore
            iApi.geo.map.esriView!.on(['pointer-up', 'pointer-leave'], e => {
                if (e.pointerType !== 'touch') return;
                // small delay as to not offend panguard when lifting more than one finger
                window.setTimeout(() => {
                    pointers.delete(e.pointerId);
                }, 200);
            })
        );

        esriHandlers.push(
            iApi.geo.map.esriView!.on('pointer-move', e => {
                const { pointerId, pointerType, x, y } = e;
                const pointer = pointers.get(pointerId);

                if (
                    !pointer ||
                    pointerType !== 'touch' ||
                    pointers.size !== 1
                ) {
                    panGuard.value!.classList.remove('pg-active');
                    return;
                }

                // ignore very small movements to avoid scrolling when someone is tapping the screen
                const distance = Math.sqrt(
                    Math.pow(x - pointer.x, 2) + Math.pow(y - pointer.y, 2)
                );
                if (distance < 20) return;

                // show the text on screen and remove after 2 seconds of no movement
                panGuard.value!.classList.add('pg-active');

                if (timeoutID.value !== -1) {
                    clearTimeout(timeoutID.value);
                }

                timeoutID.value = window.setTimeout(() => {
                    panGuard.value!.classList.remove('pg-active');
                }, 2000);

                // manually scroll the page since scrolling doesn't work when moving over the map
                window.scrollBy(pointer.x - x, pointer.y - y);
            })
        );
    });
};
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
