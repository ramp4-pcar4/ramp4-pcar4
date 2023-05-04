<template>
    <mapnav-button
        :onClickFunction="geolocate"
        :tooltip="t('mapnav.geolocator')"
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

<script setup lang="ts">
import { InstanceAPI, NotificationType } from '@/api';
import { Point, SpatialReference } from '@/geo/api';
import { inject, reactive } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const iApi = inject('iApi') as InstanceAPI;

let geolocation = reactive<Array<number>>([]);

// These exist in all browsers but aren't predefined, so this tells eslint everything is a-ok
/* global GeolocationPosition, GeolocationPositionError, PositionOptions */

const geolocate = async () => {
    // use cached location
    if (!geolocation.length) {
        // request current location from browser
        const position = await browserLocate({
            maximumAge: Infinity,
            timeout: 5000
        }).catch((error: GeolocationPositionError) => {
            if (error.code === GeolocationPositionError.PERMISSION_DENIED) {
                // send an error message for a denied permission error
                iApi.notify.show(
                    NotificationType.ERROR,
                    t('mapnav.geolocator.error.permission')
                );
            } else {
                // send an error message for an internal/timeout error
                iApi.notify.show(
                    NotificationType.ERROR,
                    t('mapnav.geolocator.error.internal')
                );
            }
        });
        if (position) {
            // store geolocation as array for speedy zoomIn
            geolocation = [position.coords.longitude, position.coords.latitude];
            zoomIn(geolocation);
        }
    } else {
        zoomIn(geolocation);
    }
};

// zoom to point
const zoomIn = (coords: Array<number>): void => {
    let zoomTarget = new Point(
        'geolocation',
        coords,
        SpatialReference.latLongSR(),
        true
    );
    iApi.geo.map.zoomMapTo(zoomTarget);
};

// prompt user to geolocate via browser
const browserLocate = (
    options: PositionOptions
): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
    );
};
</script>

<style lang="scss" scoped></style>
