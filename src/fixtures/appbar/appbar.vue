<template>
    <div
        class="absolute top-0 left-0 bottom-28 flex flex-col items-stretch w-40 pointer-events-auto appbar bg-black-75 z-50 sm:w-64 sm:z-0 sm:bottom-38"
        v-focus-list
        ref="el"
    >
        <template v-for="(item, index) in items">
            <default-button
                v-if="typeof item === 'string'"
                :key="`${item}-${index}`"
                :panelId="item"
                class="appbar-item h-48"
            ></default-button>
            <component
                v-else
                :is="addComponentIdSuffix(item.componentId)"
                :key="`${item}-${index}`"
                :options="item.options"
                :id="item.id"
                class="appbar-item h-48"
            ></component>
        </template>

        <divider class="appbar-item"></divider>

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
import { get } from '@/store/pathify-helper';

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
            items: get('appbar/visible'),
            temporaryItems: get('appbar/temporary'),
            overflow: false
        };
    },
    updated() {
        this.$nextTick(() => {
            const element: any = this.$refs.el;

            let children: Element[] = [...element.childNodes];

            let bound: number | undefined =
                children[children.length - 2].clientTop;
            let dropdown: Element | null = document.getElementById('dropdown');

            // check positions of appbar buttons
            for (let i = children.length - 3; i >= 0; i--) {
                let bottom: number =
                    children[i].clientTop + children[i].clientHeight;
                if (
                    bound &&
                    dropdown &&
                    (bottom >= bound || (this.overflow && bottom + 48 >= bound))
                ) {
                    console.log(`[${i}]`, children[i].getBoundingClientRect());

                    children[i].classList.remove(
                        'hover:text-white',
                        'text-gray-400'
                    );
                    children[i].classList.add(
                        'text-black',
                        'hover:bg-gray-100'
                    );

                    element.removeChild(children[i]);
                    dropdown.appendChild(children[i]);
                    if (!this.overflow) this.overflow = true;
                } else {
                    break;
                }
            }

            // check position of more button
            let more: Element | null = document.getElementById('more');
            let moreBottom = element.clientTop + element.clientHeight;
            if (
                this.overflow &&
                bound &&
                more &&
                dropdown &&
                moreBottom !== 0 &&
                (moreBottom <= bound - 48 || dropdown.childElementCount == 1)
            ) {
                while (
                    moreBottom <= bound - 48 ||
                    dropdown.childElementCount == 1
                ) {
                    let item: Element | null = dropdown.firstElementChild;
                    if (item) {
                        item.classList.remove(
                            'text-black',
                            'hover:bg-gray-100'
                        );
                        item.classList.add('text-gray-400', 'hover:text-white');
                        dropdown.removeChild(item);
                        element.insertBefore(item, more);
                    }
                }
                if (dropdown.childElementCount == 0) this.overflow = false;
            }
        });
    },
    methods: {
        /**
         * Checks if the component id has the "-appbar-button" suffix
         * Returns the component id with the suffix added
         */
        addComponentIdSuffix(componentId: string): string {
            if (componentId.includes('-appbar-button')) {
                return componentId;
            }
            return `${componentId}-appbar-button`;
        }
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
