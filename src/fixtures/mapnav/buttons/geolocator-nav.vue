<template>
    <mapnav-button
        :onClickFunction="geolocate"
        :tooltip="$t('mapnav.geolocator')"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="fill-current w-32 h-20"
        >
            <path
                d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
            ></path>
        </svg>
    </mapnav-button>
</template>

<script lang="ts">
import { NotificationType } from '@/api';
import { Point, SpatialReference } from '@/geo/api';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'GeolocatorNavV',
    data() {
        return {
            geolocation: [] as Array<number>
        };
    },
    methods: {
        async geolocate() {
            // use cached location
            if (!this.geolocation.length) {
                // request current location from browser
                const position = await this.browserLocate({
                    maximumAge: Infinity,
                    timeout: 5000
                }).catch((error: GeolocationPositionError) => {
                    // send an error message if user accepts location access but something goes wrong with the navigator
                    if (error.code > 1) {
                        this.$iApi.notify.show(
                            NotificationType.ERROR,
                            this.$iApi.$vApp.$t('mapnav.geolocator.error')
                        );
                    }
                });
                if (position) {
                    // store geolocation as array for speedy zoomIn
                    this.geolocation = [
                        position.coords.longitude,
                        position.coords.latitude
                    ];
                    this.zoomIn(this.geolocation);
                }
            } else {
                this.zoomIn(this.geolocation);
            }
        },
        // zoom to point
        zoomIn(coords: Array<number>): void {
            let zoomTarget = new Point(
                'geolocation',
                coords,
                SpatialReference.latLongSR(),
                true
            );
            this.$iApi.geo.map.zoomMapTo(zoomTarget);
        },
        // prompt user to geolocate via browser
        browserLocate(options: PositionOptions): Promise<GeolocationPosition> {
            return new Promise((resolve, reject) =>
                navigator.geolocation.getCurrentPosition(
                    resolve,
                    reject,
                    options
                )
            );
        }
    }
});
</script>

<style lang="scss" scoped></style>
