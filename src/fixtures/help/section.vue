<template>
    <div>
        <div>
            <button
                type="button"
                class="help-section-header flex items-center py-15 px-25 hover:bg-gray-200 cursor-pointer select-none w-full"
                @click="toggleExpanded()"
                :content="
                    t(
                        expanded
                            ? 'help.section.collapse'
                            : 'help.section.expand'
                    )
                "
                v-tippy="{ placement: 'top-end', hideOnClick: false }"
            >
                <!-- name -->
                <span class="text-lg text-left flex-grow">{{
                    helpSection.header
                }}</span>

                <!-- dropdown icon -->
                <div
                    class="dropdown-icon"
                    :class="{ 'transform -rotate-180': expanded }"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                    >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                        />
                    </svg>
                </div>
            </button>
            <transition name="help-item" mode="out-in">
                <div
                    v-show="expanded"
                    v-html="helpSection.info"
                    class="ramp-markdown section-body px-20 pt-5 ml-10 overflow-hidden"
                ></div>
            </transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
    helpSection: {
        type: Object,
        required: true
    }
});

const expanded = ref<boolean>(false);
const toggleExpanded = () => {
    expanded.value = !expanded.value;
};
</script>

<style lang="scss" scoped>
.help-section-header .dropdown-icon {
    transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1);
}
.help-item-leave-active,
.help-item-enter-active {
    @apply max-h-500;
    transition: all 0.3s;
}
.help-item-enter-active {
    transition-delay: 0.1s;
}
.help-item-leave-to,
.help-item-enter {
    @apply max-h-0 opacity-0;
}
</style>
