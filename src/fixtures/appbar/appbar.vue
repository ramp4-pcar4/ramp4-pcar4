<template>
    <div
        class="absolute top-0 left-0 bottom-28 flex flex-col w-40 pointer-events-auto appbar z-50 sm:z-20 bg-black-75 sm:w-64 sm:bottom-38"
        v-focus-list
        ref="el"
    >
        <template v-for="(subArray, index) in items">
            <template v-for="(item, index2) in subArray">
                <default-button
                    v-if="
                        typeof item === 'string' &&
                        overflowFlags[`${item}-${index2}`] !== true
                    "
                    :key="`${item}-${index2}-default`"
                    :panelId="item"
                    class="appbar-item h-48"
                    :class="`identifier-${item}-${index2}`"
                ></default-button>
                <component
                    v-else-if="overflowFlags[`${item}-${index2}`] !== true"
                    :is="item.componentId"
                    :key="`${item}-${index2}-custom`"
                    :options="item.options"
                    class="appbar-item h-48"
                    :id="item.id"
                    :class="`identifier-${item}-${index2}`"
                ></component>
            </template>
            <divider
                class="appbar-item"
                :class="`identifier-divider-${index}`"
                v-if="overflowFlags[`divider-${index}`] !== true"
                :key="`${subArray}-${index}-default`"
            />
        </template>

        <default-button
            v-for="item in temporaryItems?.filter(
                t => overflowFlags[`${t}-temp`] !== true
            )"
            :panelId="item"
            :minimize="true"
            :key="`${item}-temp`"
            :class="`identifier-${item}-temp`"
            class="appbar-item h-48"
        ></default-button>

        <more-button id="more" v-show="overflow">
            <template v-slot:default>
                <template v-for="(subArray, index) in items" :key="index">
                    <template v-for="(item, index2) in subArray">
                        <default-button
                            v-if="
                                typeof item === 'string' &&
                                overflowFlags[`${item}-${index2}`]
                            "
                            :key="`${item}-${index2}-default`"
                            :panelId="item"
                            class="text-black hover:bg-gray my-4 h-36"
                            :class="`identifier-${item}-${index2}`"
                            overflow
                        ></default-button>
                        <component
                            v-else-if="overflowFlags[`${item}-${index2}`]"
                            :is="item!.componentId"
                            :key="`${item}-${index2}-custom`"
                            :options="item.options"
                            :id="item.id"
                            class="appbar-item h-48"
                            :class="`identifier-${item}-${index2}`"
                        ></component>
                    </template>
                    <divider
                        class="border-black my-4"
                        :class="`identifier-divider-${index}`"
                        v-if="overflowFlags[`divider-${index}`]"
                    ></divider>
                </template>

                <default-button
                    v-for="item in temporaryItems?.filter(
                        t => overflowFlags[`${t}-temp`]
                    )"
                    :panelId="item"
                    :minimize="true"
                    :key="`${item}-temp`"
                    :class="`identifier-${item}-temp`"
                    class="text-black hover:bg-gray my-4 h-36"
                    overflow
                ></default-button>
            </template>
        </more-button>
        <notifications-appbar-button
            class="appbar-item bottom-48 h-48 sm:display-none"
        ></notifications-appbar-button>

        <!-- TODO: disabled this button for now, revist this when we need it in the future -->
        <!-- <nav-button id="nav"></nav-button> -->
        <about-ramp-dropdown
            class="absolute bottom-0 h-40 sm:display-none w-full text-center"
            position="right-start"
        ></about-ramp-dropdown>
    </div>
</template>

<script setup lang="ts">
import {
    computed,
    getCurrentInstance,
    nextTick,
    onBeforeMount,
    onBeforeUnmount,
    onUpdated,
    ref
} from 'vue';
import DefaultButton from './default-button.vue';
import Divider from './divider.vue';
import MoreButton from './more-button.vue';
//import NavAppbarButtonV from './nav-button.vue';
import NotificationsAppbarButton from '@/components/notification-center/appbar-button.vue';
import AboutRampDropdown from '@/components/about-ramp/about-ramp-dropdown.vue';
import { usePanelStore } from '@/stores/panel';
import { useAppbarStore } from './store';

const panelStore = usePanelStore();
const appbarStore = useAppbarStore();

const items = computed<any>(() => appbarStore.visible);
const temporaryItems = computed<string[] | undefined>(
    () => appbarStore.temporary
);

const overflow = ref(false);
const overflowFlags = ref<{
    [key: string]: boolean;
}>({});

const el = ref<Element>();

onBeforeMount(() => {
    const instance = getCurrentInstance();
    window.addEventListener('resize', () => instance?.proxy?.$forceUpdate());
});

onBeforeUnmount(() => {
    const instance = getCurrentInstance();
    window.removeEventListener('resize', () => instance?.proxy?.$forceUpdate());
});

onUpdated(() => {
    nextTick(() => {
        const element: Element = el.value!;
        let key: string | undefined = undefined;
        let children: Element[] = [...element.children];
        let bound: number | undefined =
            children[children.length - 2].getBoundingClientRect().top;
        if (!panelStore.mobileView) {
            bound = element.getBoundingClientRect().bottom - 38;
        }
        let dropdown: Element | null = element.querySelector('#dropdown');
        // check positions of appbar buttons
        for (let i = children.length - 4; i >= 0; i--) {
            let bottom: number = children[i].getBoundingClientRect().bottom;
            if (
                bound &&
                dropdown &&
                (bottom > bound || (overflow.value && bottom + 56 > bound))
            ) {
                children[i].classList.forEach(cl => {
                    if (cl.includes('identifier')) {
                        key = cl.slice(11);
                    }
                });
                if (key) overflowFlags.value[key] = true;
                if (!overflow.value) overflow.value = true;
            } else if (bottom !== 0) {
                break;
            }
        }
        // check position of more button
        let more: Element | null = element.querySelector('#more');
        let moreBottom = more!.getBoundingClientRect().bottom;
        key = undefined;
        if (
            overflow.value &&
            bound &&
            more &&
            dropdown &&
            moreBottom !== 0 &&
            (moreBottom <= bound - 56 ||
                (dropdown.childElementCount == 1 && moreBottom <= bound))
        ) {
            // dropdown.classList.add(`max-h-${moreBottom - 8}`);
            let buttonsRemaining: number = dropdown.childElementCount;
            let index: number = 0;
            while (moreBottom <= bound - 56 || buttonsRemaining == 1) {
                let item: Element | null = dropdown.children[index];
                if (item) {
                    item.classList.forEach(cl => {
                        if (cl.includes('identifier')) {
                            key = cl.slice(11);
                        }
                    });
                    if (key) overflowFlags.value[key] = false;
                    moreBottom += 48;
                    buttonsRemaining -= 1;
                    index += 1;
                }
                if (buttonsRemaining === 0) {
                    overflow.value = false;
                    break;
                }
            }
        }
        // clean up flags for items that were removed.
        Object.keys(overflowFlags.value).forEach((key: string) => {
            if (!element.querySelector(`.identifier-${key}`))
                delete overflowFlags.value[key];
        });
    });
});
</script>

<style lang="scss">
.appbar {
    backdrop-filter: blur(5px);

    .appbar-item {
        @apply my-4 text-gray-400 first:mt-8 hover:text-white;
    }
}
</style>
