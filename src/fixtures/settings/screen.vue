<template>
    <panel-screen :panel="panel">
        <template #header>
            {{
                layerExists
                    ? `${t('settings.title')}: ${layerName}`
                    : t('settings.title')
            }}
        </template>

        <template #content>
            <div v-if="layerExists">
                <div class="flex flex-col justify-center">
                    <span class="rv-subheader">{{
                        t('settings.label.display')
                    }}</span>

                    <div class="rv-settings-divider"></div>

                    <settings-component
                        class="rv-subsection"
                        type="toggle"
                        icon="visibility"
                        @toggled="updateVisibility"
                        :name="t('settings.label.visibility')"
                        :config="{
                            value: visibilityModel,
                            disabled: !controlAvailable(LayerControl.Visibility)
                        }"
                    />

                    <div class="rv-settings-divider"></div>

                    <settings-component
                        class="rv-subsection"
                        type="slider"
                        :name="t('settings.label.opacity')"
                        icon="opacity"
                        :config="{
                            onChange: updateOpacity,
                            value: opacityModel,
                            disabled: !controlAvailable(LayerControl.Opacity)
                        }"
                    ></settings-component>

                    <div class="rv-settings-divider"></div>

                    <!-- Revist this in #194 -->
                    <!-- <settings-component
                        class="rv-subsection"
                        type="toggle"
                        :name="t('settings.label.boundingBox')"
                        icon="box"
                        @toggled="() => {}"
                        :config="{
                            value: false,
                            disabled: !controlAvailable(
                                LayerControl.Boundingbox
                            )
                        }"
                    ></settings-component>
                    <div class="rv-settings-divider"></div> -->
                </div>

                <div class="flex flex-col justify-center">
                    <span class="rv-subheader">{{
                        t('settings.label.data')
                    }}</span>

                    <div class="rv-settings-divider"></div>

                    <settings-component
                        class="rv-subsection"
                        type="toggle"
                        :name="t('settings.label.identify')"
                        icon="location"
                        @toggled="updateIdentify"
                        :config="{
                            value: identifyModel,
                            disabled: !controlAvailable(LayerControl.Identify)
                        }"
                    ></settings-component>

                    <div class="rv-settings-divider"></div>
                </div>

                <!-- TODO: revisit issue #1019 after v1.0.0 -->
                <!-- <div class="flex flex-col justify-center">
                <span class="rv-subheader">{{
                    t('settings.label.interval')
                }}</span>

                <div class="rv-settings-divider"></div>

                <settings-component
                    class="rv-subsection"
                    type="input"
                    :name="t('settings.label.refreshHint')"
                    icon="location"
                    :config="{
                        onChange: () => {},
                        value: 0,
                        disabled: !controlAvailable('refresh')
                    }"
                ></settings-component>

                <div class="rv-settings-divider"></div>
            </div> -->
            </div>
            <div v-else class="p-5">
                <span>{{ t('settings.label.no.layer') }}</span>
            </div>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
import type { InstanceAPI, PanelInstance } from '@/api';
import { GlobalEvents, LayerInstance } from '@/api/internal';
import { LayerControl } from '@/geo/api';
import {
    inject,
    onBeforeUnmount,
    onMounted,
    reactive,
    ref,
    watch,
    type PropType
} from 'vue';
import { useI18n } from 'vue-i18n';
import type { SettingsAPI } from './api/settings';
import SettingsComponent from './component.vue';

// eslint recommends not mutating props directly, but in this case
// we aren't worried about messing with reactivity and the current
// implementation is simpler than an event-based solution
/* eslint-disable vue/no-mutating-props */

const { t } = useI18n();
const iApi = inject('iApi') as InstanceAPI;

const props = defineProps({
    panel: { type: Object as PropType<PanelInstance>, required: true },
    layer: { type: Object as PropType<LayerInstance>, required: true }
});

const layerName = ref('');
const uid = ref(props.layer.uid);
const visibilityModel = ref(props.layer.visibility);
const opacityModel = ref(props.layer.opacity * 100);
const identifyModel = ref(props.layer.identify);
const layerExists = ref(false); // tracks whether the layer still exists
const handlers = reactive<Array<string>>([]);
const watchers = reactive<Array<Function>>([]);

layerExists.value = props.layer !== undefined && !props.layer!.isRemoved;

watchers.push(
    watch(
        () => props.layer.uid,
        (newUid: string, oldUid: string) => {
            if (newUid !== oldUid) {
                loadLayerProperties();
            }
        }
    )
);

onMounted(() => {
    loadLayerProperties();

    handlers.push(
        iApi.event.on(
            GlobalEvents.LAYER_VISIBILITYCHANGE,
            (newVisibility: any) => {
                if (uid.value === newVisibility.layer.uid) {
                    visibilityModel.value = newVisibility.visibility;
                }
            }
        )
    );

    handlers.push(
        iApi.event.on(GlobalEvents.LAYER_OPACITYCHANGE, (newOpacity: any) => {
            if (uid.value === newOpacity.layer.uid) {
                opacityModel.value = Math.round(newOpacity.opacity * 100);
            }
        })
    );

    handlers.push(
        iApi.event.on(
            GlobalEvents.LAYER_RELOAD_END,
            (reloadedLayer: LayerInstance) => {
                reloadedLayer.loadPromise().then(() => {
                    if (uid.value === reloadedLayer.uid) {
                        loadLayerProperties();
                    }
                });
            }
        )
    );

    handlers.push(
        iApi.event.on(
            GlobalEvents.LAYER_REMOVE,
            (removedLayer: LayerInstance) => {
                if (uid.value === removedLayer.uid) {
                    props.panel.close();
                }
            }
        )
    );
});
onBeforeUnmount(() => {
    // Remove all event handlers and watchers for this component
    handlers.forEach(handler => iApi.event.off(handler));
    watchers.forEach(unwatch => unwatch());
});

const controlAvailable = (control: LayerControl): boolean => {
    const fixture = iApi.fixture.get('settings');
    if (!fixture || Object.keys(fixture).length === 0) {
        console.warn(
            'Settings panel cannot check for layer control because it could not find settings fixture api'
        );
        return false;
    }
    const settingsConfig: any = (fixture as SettingsAPI)?.getLayerFixtureConfig(
        props.layer.id
    );

    // check disabled controls, then controls
    return settingsConfig?.disabledControls?.includes(control)
        ? false
        : settingsConfig?.controls
        ? settingsConfig?.controls?.includes(control)
        : true;
};

/**
 * Update the layer visibility.
 */
const updateVisibility = (val: boolean) => {
    // update the visibility
    props.layer.visibility = val;
    visibilityModel.value = val;
};

/**
 * Update the layer opacity.
 */
const updateOpacity = (val: number) => {
    props.layer.opacity = val / 100;
    opacityModel.value = val;
};

/**
 * Update the layer's toggle identify.
 */
const updateIdentify = (val: boolean) => {
    props.layer.identify = val;
    identifyModel.value = val;
};

/**
 * Load property data from layer.
 */
const loadLayerProperties = () => {
    layerExists.value = props.layer !== undefined && !props.layer!.isRemoved;

    const oldUid = props.layer.uid;
    props.layer.loadPromise().then(() => {
        if (oldUid === props.layer.uid) {
            // ensure that it's still the same layer
            visibilityModel.value = props.layer.visibility;
            opacityModel.value = Math.round(props.layer.opacity * 100);
            identifyModel.value = props.layer.identify;
            layerName.value = props.layer.name;
        }
    });
};
</script>

<style lang="scss" scoped>
.rv-subsection {
    @apply p-8;
}
.rv-subheader {
    @apply p-8 pt-15 text-lg text-gray-600;
}
.rv-settings-divider {
    @apply block;
    border-bottom: 1px solid #eee;
    margin: 0 -8px;
}
</style>
