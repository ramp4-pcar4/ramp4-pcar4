<template>
    <div class="absolute duration-150" :style="crosshairsStyle">
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

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { GlobalEvents } from '@/api';

@Component({})
export default class CrosshairsV extends Vue {
    top: number = 0;
    left: number = 0;
    visible: boolean = false;

    mounted() {
        this.$iApi.geo.map.viewPromise.then(() => {
            this.left =
                (this.$iApi.geo.map.getPixelWidth() -
                    this.$el.getBoundingClientRect().width) /
                2;
            this.top =
                (this.$iApi.geo.map.getPixelHeight() -
                    this.$el.getBoundingClientRect().height) /
                2;
        });

        this.$iApi.event.on(GlobalEvents.MAP_EXTENTCHANGE, () => {
            // display crosshairs if pan/zoom keys are active
            if (this.$iApi.geo.map.keysActive) {
                this.visible = true;
            }
        });

        this.$iApi.event.on(GlobalEvents.MAP_MOUSEDOWN, () => {
            this.visible = false;
        });

        this.$iApi.event.on(GlobalEvents.MAP_BLUR, () => {
            this.visible = false;
        });
    }

    get crosshairsStyle() {
        return {
            opacity: this.visible ? `1` : `0`,
            top: `${this.top}px`,
            left: `${this.left}px`,
            width: `230px`,
            height: `230px`
        };
    }
}
</script>

<style lang="scss" scoped></style>
