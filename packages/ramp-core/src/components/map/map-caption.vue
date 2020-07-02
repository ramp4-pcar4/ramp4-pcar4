<template>
    <div class="absolute bottom-0 flex justify-center pointer-events-none text-white bg-black-75 left-64 right-0 py-2">
        <span class="relative ml-10 truncate top-1">Attribution goes here</span>

        <span class="flex-grow w-15"></span>

        <!-- TODO: find out if any ARIA attributes are needed for the map scale -->

        <!-- TODO: coords -->
        <!--span class="flex-shrink-0 relative top-1" v-if="cursorPoint.y !== 0 || cursorPoint.x !== 0">
                {{ cursorPointDMS.y }} {{ $t(`${tPath}.${cursorPoint.y > 0 ? 'north' : 'south'}`) }} | {{ cursorPointDMS.x }}
                {{ $t(`${tPath}.${0 > cursorPoint.x ? 'west' : 'east'}`) }}
            </span-->

        <button
            class="flex-shrink-0 mx-10 pointer-events-auto h-20 cursor-pointer border-none"
            @click="onScaleClick"
            :aria-pressed="isImperialScale"
            :aria-label="$t('map.toggleScaleUnits')"
        >
            <span class="border-solid border-2 border-white border-t-0 h-5 mr-2 inline-block" :style="{ width: scale.width }"></span>
            {{ scale.label }}
        </button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop, Inject } from 'vue-property-decorator';
import { debounce } from 'debounce';

import { GlobalEvents } from '@/api';

@Component
export default class MapCaptionV extends Vue {
    // TODO: use proper type for map instance
    //@Prop() cursorPoint: MapPoint;

    isImperialScale: boolean = false;

    scale: { label: string; width: string } = { label: '0km', width: '0px' };

    /**
     * Convert lat/long in decimal degree to degree, minute, second.
     * Uses the 'formatLatLong' utils function
     */
    get cursorPointDMS(): { x: string; y: string } {
        const { y: lat, x: long } = { y: 0, x: 0 }; // TODO: get cursor location from map
        return this.formatLatLong(long, lat);
    }

    mounted() {
        // When map is created update scale
        this.$iApi.on(GlobalEvents.MAP_CREATED, () => {
            this.updateScale();
            // Listen for scale changes, debounce so that zoom animations don't rapidly call update
            this.$iApi.map.scaleChanged.listen(
                debounce(() => {
                    this.updateScale();
                }, 300)
            );
        });
    }

    onScaleClick() {
        this.isImperialScale = !this.isImperialScale;
        this.updateScale();
    }

    /**
     * Calculates a scale bar for the current resolution.
     */
    updateScale(): void {
        // the starting length of the scale line in pixels
        // reduce the length of the bar on extra small layouts
        const factor = window.innerWidth > 600 ? 70 : 35;

        // distance in meters
        const meters = this.$iApi.map._innerView.resolution * factor;
        console.log(this.$iApi.map._innerView.resolution, 'resolution');
        console.log(this.$iApi.map.getScale(), 'scale');
        const metersInAMile = 1609.34;

        // get the distance in units, either miles or kilometers
        const units = (this.$iApi.map._innerView.resolution * factor) / (this.isImperialScale ? metersInAMile : 1000);
        const unit = this.isImperialScale ? 'mi' : 'km';

        // length of the distance number
        const len = Math.round(units).toString().length;
        const div = Math.pow(10, len - 1);

        // we want to round the distance to the ceiling of the highest position and display a nice number
        // 45.637km => 50.00km; 4.368km => 5.00km
        // 28.357mi => 30.00mi; 2.714mi => 3.00mi
        const distance = Math.ceil(units / div) * div;

        // calcualte length of the scale line in pixels based on the round distance
        const pixels = (distance * (this.isImperialScale ? metersInAMile : 1000)) / this.$iApi.map._innerView.resolution;

        this.scale = {
            width: `${pixels}px`,
            label: `${distance}${unit}`
        };
    }

    /**
     * Formats a latlong into degrees minutes seconds
     *
     * Taken from RAMP source
     *
     * @param long longitude coordinate
     * @param lat latitude coordinate
     */
    formatLatLong(long: number, lat: number): { x: string; y: string } {
        const degreeSymbol = String.fromCharCode(176);

        const dy = Math.floor(Math.abs(lat)) * (lat < 0 ? -1 : 1);
        const my = Math.floor(Math.abs((lat - dy) * 60));
        const sy = Math.round((Math.abs(lat) - Math.abs(dy) - my / 60) * 3600);

        const dx = Math.floor(Math.abs(long)) * (long < 0 ? -1 : 1);
        const mx = Math.floor(Math.abs((long - dx) * 60));
        const sx = Math.round((Math.abs(long) - Math.abs(dx) - mx / 60) * 3600);

        const newY = `${Math.abs(dy)}${degreeSymbol} ${padZero(my)}' ${padZero(sy)}"`;
        const newX = `${Math.abs(dx)}${degreeSymbol} ${padZero(mx)}' ${padZero(sx)}"`;

        return { x: newX, y: newY };

        /**
         * Pad value with leading 0 to make sure there is always 2 digits if number is below 10.
         *
         * @function padZero
         * @private
         * @param {Number} val value to pad with 0
         * @return {String} string with always 2 characters
         */
        function padZero(val: number) {
            return val >= 10 ? `${val}` : `0${val}`;
        }
    }
}
</script>

<style lang="scss" scoped></style>
