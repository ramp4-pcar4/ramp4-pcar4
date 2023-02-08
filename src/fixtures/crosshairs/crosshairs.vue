<template>
    <div
        class="crosshairs absolute duration-150 top-1/2 left-1/2 h-230 w-230"
        :class="{ 'opacity-0': !visible }"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fit=""
            height="100%"
            width="100%"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            focusable="false"
        >
            <g fill="#545353" stroke="#fff" id="crosshairs">
                <ellipse
                    ry=".254"
                    rx=".262"
                    id="path3808"
                    cx="12"
                    cy="12"
                    stroke-width=".076"
                ></ellipse>
                <path
                    d="M.045 12.047l6.093.051 4.264.068v-.332l-4.264.067-6.093.064v.039z"
                    id="rect4632-6"
                    stroke-width=".09"
                ></path>
                <path
                    d="M12.047 23.955l.051-6.093.068-4.264h-.332l.067 4.264.064 6.093h.039z"
                    id="rect4632-6-0"
                    stroke-width=".09"
                ></path>
                <path
                    d="M23.955 11.953l-6.093-.051-4.264-.068v.332l4.264-.067 6.093-.064v-.039z"
                    id="rect4632-6-4"
                    stroke-width=".09"
                ></path>
                <path
                    d="M11.953.045l-.051 6.093-.068 4.264h.332l-.067-4.264-.064-6.093h-.039z"
                    id="rect4632-6-9"
                    stroke-width=".09"
                ></path>
            </g>
        </svg>
    </div>
</template>

<script setup lang="ts">
import { inject, onBeforeUnmount, onMounted, ref } from 'vue';
import { GlobalEvents } from '@/api';
import type { InstanceAPI } from '@/api';

const iApi = inject<InstanceAPI>('iApi')!;

const visible = ref<Boolean>(false);
const handlers = ref<Array<string>>([]);

onMounted(() => {
    handlers.value.push(
        iApi.event.on(GlobalEvents.MAP_EXTENTCHANGE, () => {
            // display crosshairs if pan/zoom keys are active
            if (iApi.geo.map.keysActive) {
                visible.value = true;
            }
        })
    );

    handlers.value.push(
        iApi.event.on(GlobalEvents.MAP_FOCUS, () => {
            // display crosshairs only when focused with keyboard controls
            if (!iApi.geo.map.mouseFocus) {
                visible.value = true;
            }
        })
    );

    handlers.value.push(
        iApi.event.on(GlobalEvents.MAP_MOUSEDOWN, () => {
            visible.value = false;
        })
    );

    handlers.value.push(
        iApi.event.on(GlobalEvents.MAP_BLUR, () => {
            visible.value = false;
        })
    );
});

onBeforeUnmount(() => {
    handlers.value.forEach(h => iApi.event.off(h));
});
</script>

<style lang="scss" scoped>
.crosshairs {
    transform: translate(-50%, -50%);
}
</style>
