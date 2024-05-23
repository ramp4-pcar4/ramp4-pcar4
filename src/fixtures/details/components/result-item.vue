<template>
    <!-- Header including icon, name, zoom button -->
    <div class="relative flex flex-grow truncate">
        <div
            class="flex flex-grow items-center truncate"
            v-if="data.loaded && supportsFeatures"
        >
            <!-- display symbol if it has loaded, otherwise display a loading spinner -->
            <div class="flex p-8 items-center">
                <span
                    v-if="icon"
                    class="flex-none symbologyIcon"
                    v-html="icon"
                ></span>
                <div class="symbologyIcon p-6" v-else>
                    <div class="animate-spin spinner h-20 w-20"></div>
                </div>
            </div>

            <!-- display name of the data point -->
            <span
                class="itemName pl-3 text-left flex-grow truncate"
                :content="itemName"
                v-tippy="{ placement: 'right' }"
                >{{ makeHtmlLink(itemName) }}</span
            >

            <!-- zoom icon -->
            <span class="zoomButton text-center p-3"
                ><button
                    type="button"
                    :content="
                        t(
                            `details.item.zoom${
                                zoomStatus === 'none' ? '' : `.${zoomStatus}`
                            }`
                        )
                    "
                    v-tippy="{ placement: 'bottom' }"
                    :aria-label="
                        t(
                            `grid.cells.zoom${
                                zoomStatus === 'none' ? '' : `.${zoomStatus}`
                            }`
                        )
                    "
                    ref="zoomButton"
                    @click="(e: MouseEvent) => { e.stopPropagation(); zoomToFeature() }"
                    class="text-gray-600 w-24 h-24 p-2 flex justify-center items-center"
                    v-if="isMapLayer"
                >
                    <div
                        v-if="zoomStatus === 'zooming'"
                        class="m-auto animate-spin spinner h-20 w-20"
                    ></div>
                    <svg
                        v-else-if="zoomStatus === 'zoomed'"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="green"
                        class="m-auto w-20 h-20"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                        />
                    </svg>
                    <svg
                        v-else-if="zoomStatus === 'error'"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="red"
                        class="m-auto w-20 h-20"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                    <span v-else v-html="iApi.ui.getZoomIcon()"></span></button
            ></span>
        </div>
    </div>

    <!-- Details Component -->
    <component
        v-if="!!open"
        :is="detailsTemplate"
        :identifyData="data"
        :fields="fieldsList"
        :fixtureFields="fixtureFields"
        class="p-8"
    ></component>
</template>

<script setup lang="ts">
// handles the rendering of a single result item.
// has support for the different supported formats, and applying vue templates

import { useLayerStore } from '@/stores/layer';
import { GeometryType, LayerType } from '@/geo/api';
import {
    DetailsItemInstance,
    useDetailsStore,
    type DetailsFieldItem
} from '../store';
import {
    computed,
    ref,
    inject,
    onBeforeMount,
    onBeforeUnmount,
    watch
} from 'vue';
import { useI18n } from 'vue-i18n';
import linkifyHtml from 'linkify-html';

import ESRIDefault from '../templates/esri-default.vue';
import HTMLDefault from '../templates/html-default.vue';

import type { FieldDefinition } from '@/geo/api';
import type { IdentifyItem, InstanceAPI, LayerInstance } from '@/api';
import type { PropType } from 'vue';

const layerStore = useLayerStore();
const props = defineProps({
    uid: { type: String, required: true },
    data: { type: Object as PropType<IdentifyItem>, required: true },
    open: { type: Boolean, required: false }
});

const iApi = inject<InstanceAPI>('iApi')!;
const watchers = ref<Array<Function>>([]);
const detailsStore = useDetailsStore();
const { t } = useI18n();

/**
 * Icon string to display for this item
 */
const icon = ref<string>('');
const zoomStatus = ref<'zooming' | 'zoomed' | 'error' | 'none'>('none');
const zoomButton = ref<HTMLElement>();

/**
 * Return the LayerInstance that cooresponds with the UID provided in props.
 */
const getLayerInfo = () => {
    let layer: LayerInstance | undefined = layerStore.getLayerByUid(props.uid);
    return layer;
};

const detailProperties = computed<{ [id: string]: DetailsItemInstance }>(
    () => detailsStore.properties
);

const defaultTemplates = computed<{ [type: string]: string }>(
    () => detailsStore.defaultTemplates
);

const supportsFeatures = computed<Boolean>(() => {
    return getLayerInfo()?.supportsFeatures ?? false;
});

const isMapLayer = computed<Boolean>(() => {
    return getLayerInfo()?.mapLayer ?? false;
});

/**
 * Determine the name of the data point.
 */
const itemName = computed<string>(() => {
    const nameField = getLayerInfo()?.nameField;
    return nameField && props.data.loaded
        ? props.data.data[nameField]
        : iApi.$i18n.t('details.items.title');
});

// make links look like links and work like links
const makeHtmlLink = (html: any): any => {
    if (typeof html === 'string') {
        const classes = 'underline text-blue-600 break-all';
        const div = document.createElement('div');
        div.innerHTML = html.trim();

        // check if the html string is just an <a> tag
        if (div.firstElementChild?.tagName == 'A') {
            div.firstElementChild.className = classes;
            return div.innerHTML;
        } else {
            // otherwise, look for any valid links
            const options = {
                className: classes,
                target: '_blank',
                validate: {
                    url: (value: string) => /^https?:\/\//.test(value) // only links that begin with a protocol will be hyperlinked
                }
            };
            return linkifyHtml(html, options);
        }
    }
    return html;
};

/**
 * Called whenever the displayed item changes
 */
const itemChanged = () => {
    updateZoomStatus('none');
    if (props.data.loaded) {
        fetchIcon();
    } else {
        // request any details download and wait.
        // innards of .load() are smart enough not to double-request.
        // TODO revist when we implement pagination on the result-list.vue list mode.
        //      if it only renders what is on current page, then only visible items should
        //      hit this and make load requests. But need to ensure -- hitting everything
        //      will cause issue #2156

        props.data.load().then(() => {
            fetchIcon();
        });

        // TODO do we need some type of updateAlert that says the screen is now
        //      in a loading state?
    }
};

/**
 * Get the icon of the identify result.
 */
const fetchIcon = () => {
    icon.value = '';
    if (!(props.data && props.data.loaded)) {
        return;
    }

    const layer: LayerInstance | undefined = getLayerInfo();

    if (layer === undefined) {
        console.warn(
            `could not find layer for uid ${props.uid} during icon lookup`
        );
        return;
    }

    if (layer.supportsFeatures) {
        const oidField = layer.oidField;

        layer.getIcon(props.data.data[oidField]).then((value: string) => {
            icon.value = value;
        });
    }
};

/**
 * Fetch the correct details template.
 */
const detailsTemplate = computed(() => {
    const layer: LayerInstance | undefined = getLayerInfo();

    // If there is a custom template binding for this layer in the store, then
    // return its name.
    if (
        layer &&
        detailProperties.value[layer.id] &&
        detailProperties.value[layer.id].template
    ) {
        return detailProperties.value[layer.id].template;
    }

    // If nothing is found, use a default template from config
    if (defaultTemplates.value && defaultTemplates.value[props.data.format]) {
        return defaultTemplates.value[props.data.format];
    }

    // If default template is not specified, use our default template
    if (!supportsFeatures.value) {
        return HTMLDefault;
    } else {
        return ESRIDefault;
    }
});

/**
 * Retrieve layer fields.
 */
const fieldsList = computed<Array<FieldDefinition>>(() => {
    // wms layers do not support fields
    if (!supportsFeatures.value) {
        return [];
    }
    const layer: LayerInstance | undefined = getLayerInfo();
    const fields = layer?.fields;
    return fields || [];
});

/**
 * Check for any field overrides.
 */
const fixtureFields = computed<DetailsFieldItem[] | undefined>(() => {
    const layer: LayerInstance | undefined = getLayerInfo();

    if (
        layer &&
        detailProperties.value[layer.id] &&
        detailProperties.value[layer.id].fields
    ) {
        return detailProperties.value[layer.id].fields;
    }
    return undefined;
});

const updateZoomStatus = (value: 'zooming' | 'zoomed' | 'error' | 'none') => {
    if (value === 'zoomed' || value === 'error') {
        setTimeout(() => {
            zoomStatus.value = value;
            (zoomButton.value as any)?._tippy.show();
            setTimeout(() => {
                (zoomButton.value as any)?._tippy.hide();
                zoomStatus.value = 'none';
            }, 3000);
        }, 300);
    } else {
        zoomStatus.value = value;
    }
};

/**
 * Zoom to feature on the map
 */
const zoomToFeature = () => {
    if (zoomStatus.value !== 'none') {
        return;
    }

    updateZoomStatus('zooming');
    const layer: LayerInstance | undefined = getLayerInfo();

    if (layer === undefined || !layer.isLoaded) {
        console.warn(
            `Could not find layer for uid ${props.uid} during zoom geometry lookup`
        );
        updateZoomStatus('error');
        return;
    }

    if (!props.data.loaded) {
        console.warn(
            'Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs.'
        );
        updateZoomStatus('error');
        return;
    }

    const oid = props.data.data[layer.oidField];
    const zoomUsingGraphic = () => {
        const opts = { getGeom: true };
        layer
            .getGraphic(oid, opts)
            .then(g => {
                if (g.geometry.invalid()) {
                    console.error(`Could not find graphic for objectid ${oid}`);
                    updateZoomStatus('error');
                } else {
                    iApi.geo.map.zoomMapTo(g.geometry);
                    updateZoomStatus('zoomed');
                    iApi.updateAlert(iApi.$i18n.t('details.item.alert.zoom'));
                }
            })
            .catch(() => {
                updateZoomStatus('error');
            });
    };

    if (
        layer.layerType === LayerType.FEATURE &&
        layer.geomType !== GeometryType.POINT
    ) {
        layer
            .getGraphicExtent(oid)
            .then(e => {
                iApi.geo.map.zoomMapTo(e);
                updateZoomStatus('zoomed');
                iApi.updateAlert(iApi.$i18n.t('details.item.alert.zoom'));
            })
            .catch(() => {
                zoomUsingGraphic();
            });
    } else {
        zoomUsingGraphic();
    }
};

onBeforeMount(() => {
    // keep track of this watcher because it needs to be removed when this component is unmounted
    watchers.value.push(
        watch(
            props,
            () => {
                // Something has changed, so re-fetch the icon.
                itemChanged();
            },
            {
                deep: false,
                immediate: true
            }
        )
    );
});

onBeforeUnmount(() => {
    watchers.value.forEach(unwatch => unwatch());
});
</script>

<style lang="scss" scoped></style>
