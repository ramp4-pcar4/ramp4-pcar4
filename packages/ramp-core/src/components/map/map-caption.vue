<template>
    <div
        class="map-caption absolute bottom-0 flex justify-center pointer-events-none text-gray-400 bg-black-75 left-32 sm:left-64 right-0 py-2"
    >
        <span
            class="relative ml-10 truncate top-1"
            v-if="attributionLogo.value"
        >
            <a
                class="pointer-events-auto cursor-pointer"
                v-bind:href="attributionLogo.link"
                target="_blank"
            >
                <img
                    class="object-contain h-24"
                    v-bind:src="attributionLogo.value"
                    v-bind:alt="attributionLogo.altText"
                />
            </a>
        </span>

        <span class="relative ml-10 truncate top-1">
            {{ attributionText }}
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
import { debounce } from 'debounce';
import { MapMove, Point, RampBasemapConfig } from '@/geo/api';
import { GlobalEvents } from '@/api';
import { RampConfig } from '@/types';

@Component
export default class MapCaptionV extends Vue {
    isImperialScale: boolean = false;

    scale: { label: string; width: string } = { label: '0km', width: '0px' };

    // since calculation of latlong is asynch, we cannot directly calculate it
    // in cursorPointDMS property. we calculate and update this private property.
    private latLongCursor: { lat: number; long: number } = { lat: 0, long: 0 };

    // The current attribution
    attributionText: string = '';
    attributionLogo: { value: string; altText: string; link: string } = {
        value: '', // img src
        altText: '', // alt text
        link: '' // redirect link if clicked
    };

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

        // Change attribution on MAP_BASEMAPCHANGE events
        this.$iApi.event.on(
            GlobalEvents.MAP_BASEMAPCHANGE,
            (basemapId: string) => {
                this.updateBasemapAttribution(basemapId);
            },
            'attribution_handler'
        );

        // Change attribution on MAP_BASEMAPCHANGE events
        this.$iApi.event.on(
            GlobalEvents.CONFIG_CHANGE,
            (config: RampConfig) => {
                this.configUpdate(config);
            },
            'config_change_handler'
        );
    }

    configUpdate(config: RampConfig) {
        let currentBasemap = this.$iApi.geo.map.getCurrentBasemap();
        if (currentBasemap !== undefined) {
            this.updateBasemapAttribution(currentBasemap.id);
        }

        // TODO: Update anything else when the config changes ...
    }

    updateBasemapAttribution(basemapId: string) {
        // Reset attribution
        this.attributionText = 'Powered by Esri';
        this.attributionLogo = {
            value:
                'data:image/png;base64,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',
            altText: 'esri logo',
            link: 'http://www.esri.com/'
        };

        let currentBasemapConfig:
            | RampBasemapConfig
            | undefined = this.$iApi
            .getConfig()
            .map.basemaps.find(bms => bms.id === basemapId);
        if (currentBasemapConfig && currentBasemapConfig.attribution) {
            // Check if attribution text is enabled
            if (currentBasemapConfig.attribution.text.enabled) {
                this.attributionText =
                    currentBasemapConfig.attribution.text.value;
            }

            if (currentBasemapConfig.attribution.logo.enabled) {
                this.attributionLogo.value =
                    currentBasemapConfig.attribution.logo.value;
                this.attributionLogo.altText =
                    currentBasemapConfig.attribution.logo.altText;
                this.attributionLogo.link =
                    currentBasemapConfig.attribution.logo.link;
            }
        }
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
