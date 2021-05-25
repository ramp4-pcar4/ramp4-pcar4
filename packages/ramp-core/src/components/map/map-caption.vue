<template>
    <div
        class="map-caption absolute bottom-0 flex justify-center pointer-events-none text-gray-400 bg-black-75 left-32 sm:left-64 right-0 py-2"
    >
        <span
            class="relative ml-10 truncate top-1"
            v-if="!attribution.logo.disabled"
        >
            <a
                class="pointer-events-auto cursor-pointer"
                :href="attribution.logo.link"
                target="_blank"
            >
                <img
                    class="object-contain h-24"
                    :src="attribution.logo.value"
                    :alt="attribution.logo.altText"
                />
            </a>
        </span>

        <span
            class="relative ml-10 truncate top-1"
            v-if="!attribution.text.disabled"
        >
            {{ attribution.text.value }}
        </span>

        <span class="flex-grow w-15"></span>

        <!-- TODO: find out if any ARIA attributes are needed for the map scale -->

        <span
            class="flex-shrink-0 relative top-1 pr-14"
            v-if="latLongCursor.lat !== 0 || latLongCursor.long !== 0"
        >
            {{ cursorPointDMS.y }}
            {{
                $t(
                    `map.coordinates.${
                        latLongCursor.lat > 0 ? 'north' : 'south'
                    }`
                )
            }}
            | {{ cursorPointDMS.x }}
            {{
                $t(
                    `map.coordinates.${
                        0 > latLongCursor.long ? 'west' : 'east'
                    }`
                )
            }}
        </span>

        <button
            class="flex-shrink-0 mx-10 px-4 pointer-events-auto h-20 cursor-pointer border-none"
            @click="onScaleClick"
            :aria-pressed="isImperialScale"
            :aria-label="$t('map.toggleScaleUnits')"
        >
            <span
                class="border-solid border-2 border-white border-t-0 h-5 mr-2 inline-block"
                :style="{ width: scale.width }"
            ></span>
            {{ scale.label }}
        </button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop, Inject } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { debounce } from 'debounce';
import { Attribution, MapMove, Point } from '@/geo/api';
import { GlobalEvents } from '@/api';
import { MapCaptionStore } from '@/store/modules/mapcaption';

@Component
export default class MapCaptionV extends Vue {
    isImperialScale: boolean = false;

    // TODO: Move into MapCaptionStore
    scale: { label: string; width: string } = { label: '0km', width: '0px' };

    // TODO: Move into MapCaptionStore
    // since calculation of latlong is asynch, we cannot directly calculate it
    // in cursorPointDMS property. we calculate and update this private property.
    private latLongCursor: { lat: number; long: number } = { lat: 0, long: 0 };

    // The current attribution
    @Get(MapCaptionStore.attribution) attribution!: Attribution;

    /**
     * Convert lat/long in decimal degree to degree, minute, second.
     * Uses the 'formatLatLong' utils function
     */
    get cursorPointDMS(): { x: string; y: string } {
        return this.formatLatLong(
            this.latLongCursor.long,
            this.latLongCursor.lat
        );
    }

    mounted() {
        // When map is created update scale

        // TODO consider giving this handler a specific name and put in the document.
        //      since it happens at map create, could be risky/tricky putting it in the "default" events
        //      as odds are if there is any delay, the handler will miss the MAP_CREATED event.
        //      But having a specific name means someone can remove it later at their lesiure.

        // TODO consider what happens when a map is re-created. We might need to check if common handlers pre-exist.
        //      or do some type of "one time only" boolean so we don't have double-handlers each time a projection changes.
        //      we also need to be careful of the scenario where someone removes these default handlers after the map loads;
        //      we would not want to re-add them back during a projection change -- want to respect the new custom handlers.

        this.$iApi.event.on(GlobalEvents.MAP_CREATED, () => {
            this.updateScale();
            // Listen for scale changes, debounce so that zoom animations don't rapidly call update
            this.$iApi.event.on(
                GlobalEvents.MAP_SCALECHANGE,
                () => {
                    debounce(() => {
                        this.updateScale();
                    }, 300);
                },
                'update_scale_display' // TODO document event handler name, possibly rename to align to standards
            );

            // for demonstration. will decide the best way to wire this up. i.e. where.
            // and possibly with a named event that is not part of the "defaults", but is documented so it can be removed/edited
            this.$iApi.event.on(
                GlobalEvents.MAP_MOUSEMOVE,
                (mmm: MapMove) => {
                    this.updateCursorPoint(mmm.screenX, mmm.screenY);
                },
                'a_name_to_be_decided_later'
            );
        });
    }

    onScaleClick() {
        this.isImperialScale = !this.isImperialScale;
        this.updateScale();
    }

    // TODO: Move to MapAPI
    /**
     * Calculates a scale bar for the current resolution.
     */
    updateScale(): void {
        // the starting length of the scale line in pixels
        // reduce the length of the bar on extra small layouts
        const factor = window.innerWidth > 600 ? 70 : 35;
        const mapResolution = this.$iApi.geo.map.getResolution();

        // distance in meters
        const meters = mapResolution * factor;
        console.log(mapResolution, 'resolution');
        console.log(this.$iApi.geo.map.getScale(), 'scale');
        const metersInAMile = 1609.34;

        // get the distance in units, either miles or kilometers
        const units =
            (mapResolution * factor) /
            (this.isImperialScale ? metersInAMile : 1000);
        const unit = this.isImperialScale ? 'mi' : 'km';

        // length of the distance number
        const len = Math.round(units).toString().length;
        const div = Math.pow(10, len - 1);

        // we want to round the distance to the ceiling of the highest position and display a nice number
        // 45.637km => 50.00km; 4.368km => 5.00km
        // 28.357mi => 30.00mi; 2.714mi => 3.00mi
        const distance = Math.ceil(units / div) * div;

        // calcualte length of the scale line in pixels based on the round distance
        const pixels =
            (distance * (this.isImperialScale ? metersInAMile : 1000)) /
            mapResolution;

        this.scale = {
            width: `${pixels}px`,
            label: `${distance}${unit}`
        };
    }

    // TODO: Move to MapAPI
    /**
     * Will convert a screen co-ord to lat long and update our property
     * after the coversion finishes (asynch)
     *
     * @private
     * @param screenX pixel position in x-axis
     * @param screenY pixel position in y-axis
     */
    private updateCursorPoint(screenX: number, screenY: number): void {
        // get map point from cursor location
        const mapCursorPoint = this.$iApi.geo.map.screenPointToMapPoint(
            screenX,
            screenY
        );

        // project from map co-ords to lat long.
        this.$iApi.geo.utils.proj
            .projectGeometry(4326, mapCursorPoint)
            .then((llPoint: any) => {
                // update our private property
                const castPoint: Point = llPoint;
                this.latLongCursor.lat = castPoint.y;
                this.latLongCursor.long = castPoint.x;
            });
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

        const newY = `${Math.abs(dy)}${degreeSymbol} ${padZero(my)}' ${padZero(
            sy
        )}"`;
        const newX = `${Math.abs(dx)}${degreeSymbol} ${padZero(mx)}' ${padZero(
            sx
        )}"`;

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

<style lang="scss" scoped>
.map-caption {
    backdrop-filter: blur(5px);
}
</style>
