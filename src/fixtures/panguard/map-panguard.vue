<template>
    <div class="pg" ref="panGuard">
        <p class="pg-label">{{ t('panguard.instructions') }}</p>
    </div>
</template>

<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue';
import { GlobalEvents, InstanceAPI } from '@/api';
import { useI18n } from 'vue-i18n';
import type { EsriViewPointerEventCommon } from '@/geo/esri';
import { usePanguardStore } from './store';

const { t } = useI18n();
const iApi = inject('iApi') as InstanceAPI;
const panguardStore = usePanguardStore();
const panGuard = ref<HTMLElement>();

const enabled = computed(() => panguardStore.enabled);
const timeoutID = ref(-1);
const esriHandlers = reactive<Array<any>>([]);
const rampHanders = reactive<Array<string>>([]);
const pointers = new Map<number, { x: number; y: number }>();

const hidePanGuard = () => {
    panGuard.value?.classList.remove('pg-active');

    if (timeoutID.value !== -1) {
        clearTimeout(timeoutID.value);
        timeoutID.value = -1;
    }
};

const resetPanGuard = () => {
    pointers.clear();
    hidePanGuard();
};

const setSingleTouchPan = (enabled: boolean) => {
    const view = iApi.geo.map.esriView;

    if (view?.navigation) {
        view.navigation.browserTouchPanEnabled = enabled;
    }
};

const updateMapNavigation = () => {
    setSingleTouchPan(!enabled.value);
};

onMounted(() => {
    iApi.geo.map.loadPromise().then(() => {
        setup();
    });

    rampHanders.push(
        iApi.event.on(GlobalEvents.MAP_DESTROYED, () => {
            resetPanGuard();
            esriHandlers.forEach(h => h.remove());
        })
    );
    rampHanders.push(
        iApi.event.on(GlobalEvents.MAP_REFRESH_START, () => {
            resetPanGuard();
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
    setSingleTouchPan(true);
    rampHanders.forEach(h => iApi.event.off(h));
    esriHandlers.forEach(h => h.remove());
    resetPanGuard();
});

watch(enabled, value => {
    setSingleTouchPan(!value);

    if (!value) {
        resetPanGuard();
    }
});

const setup = () => {
    const touchOffHandler = (e: EsriViewPointerEventCommon): void => {
        if (e.pointerType === 'touch') {
            // small delay as to not offend panguard when more than one finger lifts or leaves the map
            window.setTimeout(() => {
                pointers.delete(e.pointerId);
            }, 200);
        }
    };

    // prevent possible issues with esri event registration if this fixture runs before the map has built itself
    iApi.geo.map.viewPromise.then(() => {
        updateMapNavigation();

        esriHandlers.push(
            iApi.geo.map.esriView!.on('pointer-down', e => {
                if (!enabled.value || e.pointerType !== 'touch') return;
                pointers.set(e.pointerId, { x: e.x, y: e.y });
            })
        );

        // Note: ESRI v5 shrieks if we try to double-listen using .on(['pointer-up', 'pointer-leave'], fn())
        esriHandlers.push(iApi.geo.map.esriView!.on('pointer-leave', touchOffHandler));
        esriHandlers.push(iApi.geo.map.esriView!.on('pointer-up', touchOffHandler));

        esriHandlers.push(
            iApi.geo.map.esriView!.on('pointer-move', e => {
                if (!enabled.value) {
                    resetPanGuard();
                    return;
                }

                const { pointerId, pointerType, x, y } = e;
                const pointer = pointers.get(pointerId);

                if (!pointer || pointerType !== 'touch' || pointers.size !== 1) {
                    hidePanGuard();
                    return;
                }

                // ignore very small movements to avoid scrolling when someone is tapping the screen
                const distance = Math.sqrt(Math.pow(x - pointer.x, 2) + Math.pow(y - pointer.y, 2));
                if (distance < 20) return;

                // show the text on screen and remove after 2 seconds of no movement
                panGuard.value?.classList.add('pg-active');

                if (timeoutID.value !== -1) {
                    clearTimeout(timeoutID.value);
                }

                timeoutID.value = window.setTimeout(() => {
                    panGuard.value?.classList.remove('pg-active');
                    timeoutID.value = -1;
                }, 2000);
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
        pointer-events: auto !important;
        touch-action: auto;
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
