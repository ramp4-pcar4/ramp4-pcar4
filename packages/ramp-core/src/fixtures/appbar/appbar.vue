<template>
    <div
        class="absolute top-0 left-0 bottom-28 z-50 flex flex-col items-stretch w-40 pointer-events-auto appbar bg-black-75 sm:w-64"
        v-focus-list
    >
        <component
            v-for="(item, index) in items"
            :is="item.componentId"
            :key="`${item}-${index}`"
            class="appbar-item"
            :class="{ 'h-48': item.id !== 'divider' }"
            :options="item.options"
            :id="item.id"
        ></component>
        <divider class="appbar-item"></divider>
        <component
            v-for="item in temporaryItems"
            :is="item.componentId"
            :key="`${item.id}-temp`"
            class="appbar-item h-48"
            :options="item.options"
            :id="item.id"
        >
        </component>
        <more-button id="more" v-show="overflow"></more-button>
        <notifications-appbar-button
            class="appbar-item bottom-48 h-48 sm:display-none"
        ></notifications-appbar-button>
        <nav-button id="nav"></nav-button>
    </div>
</template>

<script lang="ts">
import { ComputedRef } from 'vue';
import { Vue, Options } from 'vue-property-decorator';
import { Get } from 'vuex-pathify';
import { get } from '@/store/pathify-helper';

import { AppbarItemInstance } from './store';

import AppbarButtonV from './button.vue';
import DividerV from './divider.vue';
import MoreAppbarButtonV from './more-button.vue';
import NavAppbarButtonV from './nav-button.vue';
import NotificationsAppbarButtonV from '@/components/notification-center/appbar-button.vue';

@Options({
    components: {
        'more-button': MoreAppbarButtonV,
        'nav-button': NavAppbarButtonV,
        'notifications-appbar-button': NotificationsAppbarButtonV,
        divider: DividerV,
        'appbar-button': AppbarButtonV
    }
})
export default class AppbarV extends Vue {
    items: ComputedRef<AppbarItemInstance[]> = get('appbar/visible');
    temporaryItems: ComputedRef<AppbarItemInstance[]> = get('appbar/temporary');
    // @Get('appbar/visible') items!: AppbarItemInstance[];
    // @Get('appbar/temporary') temporaryItems!: AppbarItemInstance[];
    overflow: boolean = false;

    updated() {
        let children: Element[] = [...this.$el.children];
        let bound: number | undefined = this.$el.lastElementChild?.getBoundingClientRect().top;
        let dropdown: Element | null = document.getElementById('dropdown');

        // check positions of appbar buttons
        for (let i = children.length - 3; i >= 0; i--) {
            if (
                bound &&
                dropdown &&
                (children[i].getBoundingClientRect().bottom >= bound ||
                    (this.overflow && children[i].getBoundingClientRect().bottom + 48 >= bound))
            ) {
                children[i].classList.remove('hover:text-white', 'text-gray-400');
                children[i].classList.add('text-black', 'hover:bg-gray-100');

                this.$el.removeChild(children[i]);
                dropdown.appendChild(children[i]);
                if (!this.overflow) this.overflow = true;
            } else {
                break;
            }
        }

        // check position of more button
        let more: Element | null = document.getElementById('more');
        if (
            this.overflow &&
            bound &&
            more &&
            dropdown &&
            more.getBoundingClientRect().bottom !== 0 &&
            (more.getBoundingClientRect().bottom <= bound - 48 || dropdown.childElementCount == 1)
        ) {
            while (
                more.getBoundingClientRect().bottom <= bound - 48 ||
                dropdown.childElementCount == 1
            ) {
                //@ts-ignore
                let item: Element = dropdown.firstElementChild;
                item.classList.remove('text-black', 'hover:bg-gray-100');
                item.classList.add('text-gray-400', 'hover:text-white');

                dropdown.removeChild(item);
                this.$el.insertBefore(item, more);
            }
            if (dropdown.childElementCount == 0) this.overflow = false;
        }
    }
}
</script>

<style lang="scss">
.appbar {
    backdrop-filter: blur(5px);

    .appbar-item {
        @apply my-4 text-gray-400 first:mt-8 hover:text-white;
    }
}
</style>
