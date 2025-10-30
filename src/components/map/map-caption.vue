<template>
    <div
        class="map-caption absolute bottom-0 h-29 sm:h-38 flex justify-end pointer-events-auto cursor-default select-none text-gray-200 bg-black-75 left-0 right-0 py-2 sm:py-6"
    >
        <about-ramp-dropdown class="sm:block display-none ml-8 mr-4" position="top-end" />

        <notifications-caption-button class="sm:block display-none" />

        <span class="relative top-2 sm:top-1 ml-4 sm:ml-0 shrink-0" v-if="showLogo()">
            <a
                class="pointer-events-auto cursor-pointer"
                :href="attribution?.logo!.link"
                target="_blank"
                :aria-label="attribution?.logo!.altText"
            >
                <img
                    class="object-contain h-18 sm:h-26"
                    :src="attribution?.logo!.value"
                    :alt="attribution?.logo!.altText"
                />
            </a>
        </span>

        <span
            v-if="chainDisplay"
            class="relative ml-10 top-2 text-sm sm:text-base font-mono flex items-center gap-2"
            aria-live="polite"
        >
            <span class="chain-content">
                <span class="chain-colon">:</span>
                <span class="chain-keys">{{ chainDisplay.keys }}</span>
                <span v-if="chainDisplay.cursor" class="chain-cursor">_</span>
                <span v-if="chainDisplay.options" class="chain-options">{{ chainDisplay.options }}</span>
            </span>
            <span v-if="chainDisplay.description">- {{ chainDisplay.description }}...</span>
        </span>
        <span
            class="relative ml-10 top-2 text-sm sm:text-base"
            v-else-if="!attribution?.text!.disabled"
            v-truncate="{
                options: {
                    placement: 'top',
                    hideOnClick: false,
                    theme: 'ramp4',
                    animation: 'scale'
                }
            }"
        >
            {{ attribution?.text!.value }}
        </span>

        <span class="flex-grow w-15"></span>

        <!-- TODO: find out if any ARIA attributes are needed for the map scale -->

        <div class="flex min-w-fit justify-end">
            <div
                v-if="!coords?.disabled"
                class="pl-8 px-14 sm:block display-none relative top-2"
                v-truncate="{
                    options: {
                        hideOnClick: false,
                        theme: 'ramp4',
                        animation: 'scale'
                    }
                }"
            >
                {{ coords?.formattedString }}
            </div>

            <button
                type="button"
                v-if="!scale?.disabled"
                class="flex-shrink-0 mx-2 sm:mx-10 px-4 pointer-events-auto cursor-pointer border-none"
                @click="onScaleClick"
                :aria-pressed="scale?.isImperialScale"
                :aria-label="`
                    ${scale?.label} - ${changeScaleMessage(scale?.isImperialScale)}
                `"
                v-tippy="{
                    delay: [300, 0],
                    placement: 'top',
                    hideOnClick: false,
                    theme: 'ramp4',
                    animation: 'scale',
                    touch: ['hold', 200]
                }"
                :content="changeScaleMessage(scale?.isImperialScale)"
            >
                <span
                    class="border-solid border-2 border-white border-t-0 h-5 mr-4 inline-block"
                    :style="{ width: scale?.width }"
                ></span>
                <span class="relative top-1 text-sm sm:text-base">
                    {{ scale?.label }}
                </span>
            </button>

            <dropdown-menu
                class="flex-shrink-0 pointer-events-auto focus:outline-none px-4 mr-4 relative top-2"
                position="top-end"
                v-if="!langtoggle?.disabled"
                :tooltip="t('map.changeLanguage')"
                :ariaLabel="`${t('map.language.short')} - ${t('map.changeLanguage')}`"
                tooltipPlacement="top-start"
                tooltipPlacementAlt="left-end"
            >
                <template #header>
                    <span class="text-gray-200 hover:text-white text-sm sm:text-base pb-5">
                        {{ t('map.language.short') }}
                    </span>
                </template>
                <a
                    v-for="(item, index) in lang"
                    :key="`${item}-${index}`"
                    class="flex-auto items-center text-sm sm:text-base cursor-pointer"
                    :class="{ 'font-bold': item === iApi.$i18n.locale.value }"
                    href="javascript:;"
                    @click="changeLang(item)"
                >
                    {{ t('map.language.' + item) }}
                    <span class="sr-only" v-if="item === iApi.$i18n.locale.value">
                        {{ t('map.language.curr') }}
                    </span>
                </a>
            </dropdown-menu>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, inject, nextTick, onBeforeUnmount, onUpdated, reactive, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useMapCaptionStore } from '@/stores/map-caption';
import NotificationsCaptionButton from '@/components/notification-center/caption-button.vue';
import AboutRampDropdown from '@/components/about-ramp/about-ramp-dropdown.vue';
import { useI18n } from 'vue-i18n';

import type { InstanceAPI } from '@/api';
import { useConfigStore } from '@/stores/config';
import { useKeyboardnavStore } from '@/fixtures/keyboardnav/store/keyboardnav-store';
import { HELP_NAMESPACE } from '@/fixtures/keyboardnav/constants';

const mapCaptionStore = useMapCaptionStore();
const keyboardnavStore = useKeyboardnavStore();
const configStore = useConfigStore();
const { t } = useI18n();
const iApi = inject('iApi') as InstanceAPI;

const scale = computed(() => mapCaptionStore.scale);
const attribution = computed(() => mapCaptionStore.attribution);
const coords = computed(() => mapCaptionStore.coords);
const langtoggle = computed(() => mapCaptionStore.langtoggle);
const mapConfig = computed(() => configStore.config.map);

const { keyChain, lastAction, chainState, namespaces, activeNamespace } = storeToRefs(keyboardnavStore);

const chainDisplay = computed(() => {
    if (!keyChain.value.length) return undefined;

    const keys = keyChain.value.join(' ');
    const cursor = chainState.value === 'awaitNamespace' || chainState.value === 'awaitAction';

    let description: string | undefined;
    const action = lastAction.value;
    if (action) {
        if (action.namespace === HELP_NAMESPACE) {
            description = t('keyboardnav.chain.help');
        } else {
            const translationKey = `keyboardnav.key.${action.namespace}.${action.key}`;
            const translated = t(translationKey);
            if (translated !== translationKey) {
                description = translated;
            }
        }
    }

    let options: string | undefined;
    if (chainState.value === 'awaitNamespace') {
        const helpOption = `H - ${t('keyboardnav.chain.help')}`;
        const namespaceOptions = Object.keys(namespaces.value).map(nsKey => {
            const labelKey = `keyboardnav.ns.${nsKey}`;
            const translated = t(labelKey);
            const label = translated === labelKey ? nsKey : translated;
            return `${nsKey} - ${label}`;
        });
        const optionLabels = [helpOption, ...namespaceOptions];
        options = `[${optionLabels.join(', ')}]`;
    } else if (chainState.value === 'awaitAction') {
        const nsKey = activeNamespace.value ?? keyChain.value[1];
        const namespace = nsKey ? namespaces.value[nsKey] : undefined;
        if (namespace && namespace.keys?.length) {
            const optionLabels = namespace.keys.map(item => {
                const labelKey = `keyboardnav.key.${nsKey}.${item.key}`;
                const translated = t(labelKey);
                const label = translated === labelKey ? item.key : translated;
                return `${item.key} - ${label}`;
            });
            options = `[${optionLabels.join(', ')}]`;
        }
    }

    return {
        keys,
        options,
        description,
        cursor: cursor && !!options
    };
});

const lang = ref<Array<string>>([]);
const watchers = reactive<Array<() => void>>([]);

watchers.push(
    watch(mapConfig, (newConfig: any) => {
        if (!newConfig) {
            return;
        }
        iApi.geo.map.caption.createCaption(mapConfig.value?.caption);
    })
);

onBeforeUnmount(() => {
    watchers.forEach(unwatch => unwatch());
});

onUpdated(() => {
    nextTick(() => {
        if (iApi.$i18n.locale.value && lang.value.length == 0) {
            lang.value = iApi.$i18n.availableLocales;
        }
    });
});

const showLogo = () =>
    attribution.value?.logo?.link && attribution.value?.logo?.value && !attribution.value?.logo?.disabled;

const changeLang = (lang: string) => {
    if (iApi.$i18n.locale.value != lang) {
        iApi.setLanguage(lang);
    }
};

/**
 * Toggle the scale units
 */
const onScaleClick = () => {
    // undefined argument will toggle the scale unit
    mapCaptionStore.toggleScale();
    iApi.geo.map.caption.updateScale();
};

/**
 * Show different scale messages based on the current scale
 */
const changeScaleMessage = (isImperialScale: boolean = false) => {
    return isImperialScale ? t('map.toggleScaleToMetric') : t('map.toggleScaleToImperial');
};
</script>

<style lang="scss">
.map-caption {
    backdrop-filter: blur(5px);

    button:focus {
        outline: 2px solid #1e3a8a !important;
    }
}

.chain-content {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
}

.chain-cursor {
    animation: chain-cursor-blink 1s steps(2, start) infinite;
}

.chain-options {
    white-space: nowrap;
}

@keyframes chain-cursor-blink {
    0%,
    100% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
}
</style>
