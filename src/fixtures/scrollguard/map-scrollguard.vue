<template>
    <div class="sg" ref="scrollGuard">
        <p class="sg-label">{{ t('scrollguard.instructions') }}</p>
    </div>
</template>

<script setup lang="ts">
import { GlobalEvents, InstanceAPI } from '@/api';
import { computed, inject, onBeforeUnmount, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useScrollguardStore } from './store';

const scrollguardStore = useScrollguardStore();
const { t } = useI18n();
const iApi = inject('iApi') as InstanceAPI;
const scrollGuard = ref<HTMLElement>();

const enabled = computed(() => scrollguardStore.enabled);

onMounted(() => {
    (
        iApi.$vApp.$el.querySelector(
            '.inner-shell + .esri-view'
        )! as HTMLElement
    )?.addEventListener('wheel', wheelHandler, {
        capture: true
    });
    iApi.event.on(GlobalEvents.MAP_CREATED, () => {
        (
            iApi.$vApp.$el.querySelector(
                '.inner-shell + .esri-view'
            )! as HTMLElement
        )?.addEventListener('wheel', wheelHandler, {
            capture: true
        });
    });
});

onBeforeUnmount(() => {
    (
        iApi.$vApp.$el.querySelector(
            '.inner-shell + .esri-view'
        )! as HTMLElement
    )?.removeEventListener('wheel', wheelHandler, {
        capture: true
    });
});

const wheelHandler = (event: WheelEvent) => {
    // If the scrollguard is disabled, do not block scrolling.
    if (!enabled.value) return;

    const scrollGuardClassList = scrollGuard.value!.classList;

    // prevent scroll unless ctrlKey is depressed
    if (!event.ctrlKey) {
        event.stopPropagation();
        scrollGuardClassList.remove('sg-scrolling');
        scrollGuardClassList.add('sg-active');

        // remove scroll guard notification after two seconds
        window.setTimeout(() => scrollGuardClassList.remove('sg-active'), 2000);
    } else {
        scrollGuardClassList.remove('sg-active');
        scrollGuardClassList.add('sg-scrolling');
    }
};
</script>

<style lang="scss" scoped>
.sg {
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

    &.sg-active {
        opacity: 1;
        transition-duration: 0.3s;
    }

    &.sg-scrolling {
        transition-duration: 0.3s;
    }

    .sg-label {
        font-size: 1em * 1.5;
        color: white;
        position: relative;
        margin: 0;
        top: 50% !important;
        transform: translateY(-50%);
    }
}
</style>
