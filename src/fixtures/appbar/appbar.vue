<template>
    <div
        class="absolute top-0 left-0 bottom-28 flex flex-col items-stretch w-40 pointer-events-auto appbar bg-black-75 z-50 sm:w-64 sm:z-0 sm:bottom-38"
        v-focus-list
        ref="el"
    >
        <template v-for="(subArray, index) in items">
            <template v-for="(item, index2) in subArray">
                <default-button
                    v-if="typeof item === 'string'"
                    :key="`${item}-${index2}`"
                    :panelId="item"
                    class="appbar-item h-48"
                ></default-button>
                <component
                    v-else
                    :is="item.componentId"
                    :key="`${item}-${index2}`"
                    :options="item.options"
                    :id="item.id"
                    class="appbar-item h-48"
                ></component>
            </template>
            <divider class="appbar-item"></divider>
        </template>

        <span v-show="false" id="appbar-divider"></span>

        <default-button
            v-for="item in temporaryItems"
            :panelId="item"
            :minimize="true"
            :key="`${item}-temp`"
            class="appbar-item h-48"
        ></default-button>

        <more-button id="more" v-show="overflow"></more-button>
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

<script lang="ts">
import { defineComponent } from 'vue';

import DefaultAppbarButtonV from './default-button.vue';
import AppbarDividerV from './divider.vue';
import MoreAppbarButtonV from './more-button.vue';
//import NavAppbarButtonV from './nav-button.vue';
import NotificationsAppbarButtonV from '@/components/notification-center/appbar-button.vue';
import AboutRampDropdownV from '@/components/about-ramp/about-ramp-dropdown.vue';

export default defineComponent({
    name: 'AppbarV',
    components: {
        'default-button': DefaultAppbarButtonV,
        divider: AppbarDividerV,
        'more-button': MoreAppbarButtonV,
        // 'nav-button': NavAppbarButtonV,
        'notifications-appbar-button': NotificationsAppbarButtonV,
        'about-ramp-dropdown': AboutRampDropdownV
    },

    data() {
        return {
            items: this.get('appbar/visible'),
            temporaryItems: this.get('appbar/temporary'),
            overflow: false
        };
    },
    updated() {
        this.$nextTick(() => {
            const element: any = this.$refs.el;
            let isTemp = true;
            let children: Element[] = [...element.children];

            let bound: number | undefined =
                children[children.length - 2].getBoundingClientRect().top;
            let dropdown: Element | null = element.querySelector('#dropdown');
            // check positions of appbar buttons
            for (let i = children.length - 4; i >= 0; i--) {
                if (children[i].id === 'appbar-divider') {
                    isTemp = false;
                    continue;
                }
                let bottom: number =
                    children[i].getBoundingClientRect().top +
                    children[i].getBoundingClientRect().height;
                if (
                    (bound &&
                        dropdown &&
                        (bottom >= bound ||
                            (this.overflow && bottom + 48 >= bound))) ||
                    (isTemp && this.overflow)
                ) {
                    console.log(`[${i}]`, children[i].getBoundingClientRect());

                    children[i].classList.remove('appbar-item', 'h-48');
                    children[i].classList.add(
                        'text-black',
                        'hover:bg-gray-100',
                        'my-4',
                        'h-36'
                    );
                    children[i]
                        .querySelector('.default')
                        ?.classList.replace('ml-8', 'ml-20');
                    if (children[i].classList.contains('border-b')) {
                        children[i].classList.add('border-black');
                    }
                    element.removeChild(children[i]);
                    if (isTemp) {
                        const moreDivider =
                            dropdown?.querySelector('#more-divider');
                        moreDivider?.parentNode?.insertBefore(
                            children[i],
                            moreDivider.nextSibling
                        );
                    } else {
                        dropdown?.insertBefore(
                            children[i],
                            dropdown?.firstChild
                        );
                    }
                    if (!this.overflow) this.overflow = true;
                } else if (bottom !== 0) {
                    break;
                }
            }

            // check position of more button
            let more: Element | null = document.getElementById('more');
            let moreBottom = more
                ? more.getBoundingClientRect().top +
                  more.getBoundingClientRect().height
                : Math.PI; // to get typescript to STOP ANNOYING ME
            if (
                this.overflow &&
                bound &&
                more &&
                dropdown &&
                moreBottom !== 0 &&
                (moreBottom <= bound - 48 || dropdown.childElementCount == 1)
            ) {
                isTemp = false;
                while (
                    moreBottom <= bound - 48 ||
                    dropdown.childElementCount == 2
                ) {
                    let item: Element | null = dropdown.children[0];
                    if (item.id === 'more-divider') {
                        item = dropdown.children[1];
                        isTemp = true;
                    }
                    if (item) {
                        item.classList.remove(
                            'text-black',
                            'hover:bg-gray-100',
                            'my-4',
                            'h-36'
                        );
                        item.classList.add('appbar-item', 'h-48');
                        item.querySelector('.default')?.classList.replace(
                            'ml-20',
                            'ml-8'
                        );
                        item.classList.remove('border-black');
                        dropdown.removeChild(item);
                        if (isTemp) {
                            element.insertBefore(item, more);
                        } else {
                            element.insertBefore(
                                item,
                                element.querySelector('#appbar-divider')
                            );
                        }
                        moreBottom =
                            more.getBoundingClientRect().top +
                            more.getBoundingClientRect().height;
                    }
                    if (dropdown.childElementCount == 1) {
                        this.overflow = false;
                        break;
                    }
                }
            }
        });
    }
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
