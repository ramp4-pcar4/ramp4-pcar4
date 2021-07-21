<template>
    <div class="sg" ref="scrollGuard">
        <p class="sg-label">{{ $t('scrollguard.instructions') }}</p>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class MapScrollguardV extends Vue {
    mounted(): void {
        (this.$iApi.$vApp.$el.querySelector(
            '.inner-shell + .esri-view'
        )! as HTMLElement).addEventListener('wheel', this.wheelHandler, {
            capture: true
        });
    }

    wheelHandler(event: WheelEvent): void {
        const scrollGuardClassList = this.$el.classList;

        // prevent scroll unless ctrlKey is depressed
        if (!event.ctrlKey) {
            event.stopPropagation();
            scrollGuardClassList.remove('sg-scrolling');
            scrollGuardClassList.add('sg-active');

            // remove scroll guard notification after two seconds
            window.setTimeout(
                () => scrollGuardClassList.remove('sg-active'),
                2000
            );
        } else {
            scrollGuardClassList.remove('sg-active');
            scrollGuardClassList.add('sg-scrolling');
        }
    }
}
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
