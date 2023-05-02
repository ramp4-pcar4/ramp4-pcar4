<template>
    <dropdown-menu
        class="pointer-events-auto sm:flex"
        :position="position"
        :tooltip="t('ramp.about')"
        :tooltipPlacement="position"
        v-focus-item
    >
        <template #header>
            <div class="flex hover:text-white">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="fill-current w-20 h-20"
                    :aria-label="t('ramp.about.open')"
                >
                    <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                </svg>
            </div>
        </template>
        <template v-slot:default="scope">
            <div
                class="about-ramp-dropdown pointer-events-auto bg-white rounded w-256 h-50"
            >
                <div>
                    <h4 class="pb-8 border-b border-gray-600 mb-10">
                        {{ t('ramp.about') }}
                    </h4>
                    <div class="absolute right-5 top-5">
                        <close @click="scope.close"></close>
                    </div>

                    <div class="select-text">
                        <div>
                            <span class="font-bold cursor-text">
                                {{ versionString }}
                            </span>
                            <span class="text-sm cursor-text">
                                [{{ versionHash }}]
                            </span>
                        </div>
                        <div>
                            <span class="text-sm cursor-text">
                                {{ buildDate }}
                            </span>
                        </div>
                        <div class="mt-5">
                            <a
                                class="text-sm underline text-blue-600"
                                href="https://github.com/ramp4-pcar4/ramp4-pcar4"
                                target="_blank"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    class="inline-block fill-black w-16 h-16"
                                >
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                    />
                                </svg>
                                ramp4-pcar4
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </dropdown-menu>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { version } from '@/main';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
    position: {
        type: String,
        default: 'top-start'
    }
});

/**
 * Get RAMP's version string
 */
const versionString = computed<string>(() => {
    return `${version.major}.${version.minor}.${version.patch}`;
});

/**
 * Get RAMP build version hash
 */
const versionHash = computed<string>(() => {
    return version.hash.slice(0, 9);
});

/**
 * Get RAMP build date
 */
const buildDate = computed<string>(() => {
    let timestamp = new Date(version.timestamp);
    if (isNaN(timestamp as any)) {
        // this appears to be broken in dev serve mode (but not always).
        // likely the vite `git log -1 --format=%cd` command isnt working in that context
        return 'dev mode, no date';
    } else {
        const padZero = (num: number): string => {
            if (num < 10) {
                return '0' + num.toString();
            } else {
                return num.toString();
            }
        };
        return `${timestamp.getFullYear()}-${
            timestamp.getMonth() + 1
        }-${timestamp.getDate()} ${timestamp.getHours()}:${padZero(
            timestamp.getMinutes()
        )}:${padZero(timestamp.getSeconds())}`;
    }
});
</script>

<style lang="scss" scoped>
.about-ramp-dropdown {
    @apply p-0 #{!important};
    &:hover {
        @apply bg-white #{!important};
    }
}
</style>
