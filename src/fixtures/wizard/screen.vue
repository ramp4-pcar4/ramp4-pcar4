<template>
    <panel-screen :panel="panel">
        <template #header>
            {{ t('wizard.title') }}
        </template>

        <template #content>
            <stepper :activeStep="step">
                <!-- Upload data wizard step -->
                <stepper-item :title="t('wizard.upload.title')" :summary="url">
                    <form name="upload" @submit="onUploadContinue">
                        <!-- Upload a file -->
                        <wizard-input
                            type="file"
                            name="file"
                            :label="t('wizard.upload.file.label')"
                            :help="t('wizard.upload.file.help')"
                            @upload="updateFile"
                        />
                        <span class="block text-center mb-10">or</span>

                        <!-- Provide layer URL -->
                        <wizard-input
                            type="url"
                            name="url"
                            v-model="url"
                            :label="t('wizard.upload.url.label')"
                            @link="updateUrl"
                            :validation="true"
                            :validation-messages="{
                                required: t('wizard.upload.url.error.required'),
                                invalid: t('wizard.upload.url.error.url')
                            }"
                        />
                        <wizard-form-footer
                            @submit="onUploadContinue"
                            @cancel="
                                () => {
                                    goNext = false;
                                    wizardStore.goToStep(0);
                                }
                            "
                            :disabled="!goNext"
                        />
                    </form>
                </stepper-item>

                <!-- Select format wizard step -->
                <stepper-item
                    :title="t('wizard.format.title')"
                    :summary="typeSelection"
                >
                    <form name="format" @submit="onSelectContinue">
                        <!-- List of file/service types based on layer -->

                        <!-- Display CORS required warning if needed for this configuration -->
                        <div
                            v-if="IsCorsRequired"
                            class="inline-flex items-center mb-10"
                        >
                            <svg
                                class="inline-block fill-current w-16 h-16"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                                />
                            </svg>
                            <span class="px-5 text-xs">
                                {{ t('wizard.format.info.cors') }}</span
                            >
                        </div>

                        <wizard-input
                            type="select"
                            name="type"
                            v-model="typeSelection"
                            @select="updateTypeSelection"
                            :size="
                                isFileLayer()
                                    ? fileTypeOptions.length
                                    : serviceTypeOptions.length
                            "
                            :label="
                                isFileLayer()
                                    ? t('wizard.format.type.file')
                                    : t('wizard.format.type.service')
                            "
                            :options="
                                isFileLayer()
                                    ? fileTypeOptions
                                    : serviceTypeOptions
                            "
                            :formatError="formatError"
                            :failureError="failureError"
                            :validation="true"
                            :validation-messages="{
                                required: t(
                                    'wizard.format.type.error.required'
                                ),
                                invalid: t('wizard.format.type.error.invalid'),
                                failure: `${t(
                                    'wizard.format.type.error.failure'
                                )}.${
                                    IsCorsRequired
                                        ? ' ' +
                                          t('wizard.format.warn.cors') +
                                          '.'
                                        : ''
                                }`
                            }"
                            @keydown.stop
                        />
                        <wizard-form-footer
                            @submit="onSelectContinue"
                            @cancel="
                                () => {
                                    formatError = false;
                                    failureError = false;
                                    url ? (goNext = true) : (goNext = false);
                                    wizardStore.goToStep(0);
                                }
                            "
                            :disabled="false"
                        />
                    </form>
                </stepper-item>

                <!-- Configure layer wizard step -->
                <stepper-item :title="t('wizard.configure.title')">
                    <form
                        name="configure"
                        @submit="onConfigureContinue"
                        ref="formElement"
                    >
                        <wizard-input
                            v-if="layerInfo?.configOptions.includes(`name`)"
                            type="text"
                            name="name"
                            v-model="layerInfo.config.name"
                            @text="updateLayerName"
                            :label="t('wizard.configure.name.label')"
                            :validation="true"
                            :validation-messages="{
                                required: t(
                                    'wizard.configure.name.error.required'
                                )
                            }"
                        />
                        <wizard-input
                            v-if="
                                layerInfo?.configOptions.includes(`nameField`)
                            "
                            type="select"
                            name="nameField"
                            v-model="layerInfo.config.nameField"
                            :label="t('wizard.configure.nameField.label')"
                            :defaultOption="true"
                            :options="fieldOptions()"
                        />
                        <wizard-input
                            v-if="
                                layerInfo?.configOptions.includes(
                                    `tooltipField`
                                )
                            "
                            type="select"
                            name="tooltipField"
                            v-model="layerInfo.config.tooltipField"
                            :label="t('wizard.configure.tooltipField.label')"
                            :options="fieldOptions()"
                        />
                        <wizard-input
                            v-if="layerInfo?.configOptions.includes(`latField`)"
                            type="select"
                            name="latField"
                            v-model="layerInfo.config.latField"
                            :defaultOption="true"
                            :label="t('wizard.configure.latField.label')"
                            :options="latLonOptions('lat')"
                        />
                        <wizard-input
                            v-if="
                                layerInfo?.configOptions.includes(`longField`)
                            "
                            type="select"
                            name="longField"
                            v-model="layerInfo.config.longField"
                            :defaultOption="true"
                            :label="t('wizard.configure.longField.label')"
                            :options="latLonOptions('lon')"
                        />
                        <!-- For map image layers -->
                        <wizard-input
                            v-if="
                                layerInfo?.configOptions.includes(`sublayers`)
                            "
                            type="select"
                            name="sublayers"
                            v-model="layerInfo.config.sublayers"
                            @select="updateSublayers"
                            :label="t('wizard.configure.sublayers.label')"
                            :help="t('wizard.configure.sublayers.help')"
                            :options="sublayerOptions()"
                            :multiple="true"
                            :searchable="true"
                            :validation="true"
                            :validation-messages="{
                                required: t(
                                    'wizard.configure.sublayers.error.required'
                                )
                            }"
                            @keydown.stop
                        />
                        <label
                            class="sr-only"
                            :for="`${colourPickerId}-color-hex`"
                            >{{ t('wizard.configure.colour.hex') }}</label
                        >
                        <label
                            class="text-base font-bold"
                            v-if="layerInfo?.configOptions.includes('colour')"
                            >{{ t('wizard.configure.colour.label') }}</label
                        >
                        <ColorPicker
                            v-if="layerInfo?.configOptions.includes('colour')"
                            alpha-channel="hide"
                            :visible-formats="['hex']"
                            default-format="hex"
                            :id="colourPickerId"
                            :color="colour"
                            @color-change="updateColour"
                        >
                            <template #hue-range-input-label>
                                <span class="sr-only">{{
                                    t('wizard.configure.colour.hue')
                                }}</span>
                            </template>

                            <template #copy-button>
                                <span class="sr-only">{{
                                    t('wizard.configure.colour.copy')
                                }}</span>

                                <svg
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                >
                                    <path
                                        d="M5 0v2H1v13h12v-3h-1v2H2V5h10v3h1V2H9V0zm1 1h2v2h3v1H3V3h3z"
                                        fill="currentColor"
                                    />

                                    <path
                                        d="M10 7v2h5v2h-5v2l-3-3zM3 6h5v1H3zm0 2h3v1H3zm0 2h3v1H3zm0 2h5v1H3z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </template>
                        </ColorPicker>
                        <wizard-form-footer
                            @submit="onConfigureContinue"
                            @cancel="wizardStore.goToStep(1)"
                            :disabled="!finishStep"
                        />
                    </form>
                </stepper-item>
            </stepper>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
import {
    computed,
    inject,
    nextTick,
    onErrorCaptured,
    onMounted,
    reactive,
    ref,
    type PropType
} from 'vue';

import { ColorPicker } from 'vue-accessible-color-picker';

import type { InstanceAPI, PanelInstance } from '@/api';
import { LayerType } from '@/geo/api';
import type { RampLayerConfig } from '@/geo/api';
import { GlobalEvents } from '@/api/internal';
import { useWizardStore, WizardStep } from './store';

import WizardFormFooter from './form-footer.vue';
import WizardInput from './form-input.vue';
import StepperItem from './stepper-item.vue';
import Stepper from './stepper.vue';
import type { LayerInfo } from './store/layer-source';

import { useI18n } from 'vue-i18n';

const wizardStore = useWizardStore();
const { t } = useI18n();
const iApi = inject('iApi') as InstanceAPI;
const formElement = ref();

defineProps({
    panel: {
        type: Object as PropType<PanelInstance>,
        required: true
    }
});

const layerSource = computed(() => wizardStore.layerSource);
const step = computed(() => wizardStore.currStep);

const colour = ref();
const colourPickerId = ref();

const formatError = ref(false);
const failureError = ref(false);
const goNext = ref(false);
const finishStep = ref(false);

// service layer formats
const serviceTypeOptions = reactive([
    {
        value: LayerType.FEATURE,
        label: t('wizard.layerType.esriFeature')
    },
    {
        value: LayerType.MAPIMAGE,
        label: t('wizard.layerType.esriMapImage')
    },
    {
        value: LayerType.TILE,
        label: t('wizard.layerType.esriTile')
    },
    {
        value: LayerType.IMAGERY,
        label: t('wizard.layerType.esriImagery')
    },
    {
        value: LayerType.WMS,
        label: t('wizard.layerType.ogcWms')
    },
    {
        value: LayerType.WFS,
        label: t('wizard.layerType.ogcWfs')
    }
]);

// file layer formats
const fileTypeOptions = reactive([
    {
        value: LayerType.GEOJSON,
        label: t('wizard.fileType.geojson')
    },
    {
        value: LayerType.SHAPEFILE,
        label: t('wizard.fileType.shapefile')
    },
    { value: LayerType.CSV, label: t('wizard.fileType.csv') }
]);

const url = computed({
    get(): string {
        return wizardStore.url as string;
    },
    set(newValue: string) {
        wizardStore.url = newValue;
    }
});
const fileData = computed({
    get(): ArrayBuffer {
        return wizardStore.fileData as ArrayBuffer;
    },
    set(newValue: ArrayBuffer) {
        wizardStore.fileData = newValue;
    }
});
const typeSelection = computed({
    get(): LayerType {
        return wizardStore.typeSelection as LayerType;
    },
    set(newValue: LayerType) {
        wizardStore.typeSelection = newValue;
    }
});
const layerInfo = computed({
    get(): LayerInfo {
        return wizardStore.layerInfo as LayerInfo;
    },
    set(newValue: LayerInfo) {
        wizardStore.layerInfo = newValue;
    }
});
const IsCorsRequired = computed(() => {
    // check if proxy is defined
    let hasProxy = iApi.geo.proxy !== '';

    // handle cases for each type
    switch (typeSelection.value) {
        // ESRI ArcGIS Server
        // required only if no proxy is set
        case LayerType.FEATURE:
        case LayerType.MAPIMAGE:
        case LayerType.TILE:
        case LayerType.IMAGERY:
            return !hasProxy;

        // WFS Server
        // always required
        case LayerType.WFS:
            return true;

        // WMS Server
        // required only if proxy is set
        case LayerType.WMS:
            return !hasProxy;

        // Files
        // always required for files from hosted services
        case LayerType.GEOJSON:
        case LayerType.SHAPEFILE:
        case LayerType.CSV:
            // check if file is from web hosted
            if (isFileLayer() && !fileData.value) {
                return true;
            } else {
                return false;
            }
        default:
            return false;
    }
});

onErrorCaptured(() => {
    if (
        step.value === WizardStep.FORMAT ||
        step.value === WizardStep.CONFIGURE
    ) {
        formatError.value = true;
        wizardStore.goToStep(WizardStep.FORMAT);
    }
    // return value needs to be false to prevent bubbling up to parent component errorCaptured
    return false;
});

onMounted(() => {
    // runs when the wizard panel was closed on the 'configure' step and reopened
    if (step.value === WizardStep.CONFIGURE) {
        // generates a new colour for the colour picker
        if (layerInfo.value?.configOptions.includes('colour')) {
            generateColour();
        }
        // re-enables the confirmation button if the layer name is not empty and sublayer selection is not required
        finishStep.value =
            !layerInfo.value?.configOptions.includes(`sublayers`) &&
            !!layerInfo.value?.config.name;
    }
});

// reads uploaded file
const uploadFile = async (file: File) => {
    const reader = new FileReader();

    reader.onload = e => {
        fileData.value = reader.result as ArrayBuffer;
        url.value = file.name;
        onUploadContinue(e);
    };

    reader.readAsArrayBuffer(file);
};

const onUploadContinue = (event: any) => {
    // Prevent the page from refreshing when pressing ENTER to submit the URL.
    event?.preventDefault();

    typeSelection.value = layerSource.value!.guessFormatFromURL(
        url.value
    ) as LayerType;

    wizardStore.goToStep(WizardStep.FORMAT);
};

const onSelectContinue = async () => {
    failureError.value = false;

    try {
        layerInfo.value = isFileLayer()
            ? ((await layerSource.value!.fetchFileInfo(
                  url.value,
                  typeSelection.value,
                  fileData.value
              )!) as LayerInfo)
            : ((await layerSource.value!.fetchServiceInfo(
                  url.value,
                  typeSelection.value
              )) as LayerInfo);
        if (isFileLayer() && fileData.value) {
            layerInfo.value.config.url = '';
        }
    } catch (_) {
        failureError.value = true;
        return;
    }

    // check for incorrect feature service type
    const featureError =
        typeSelection.value === LayerType.FEATURE &&
        !(layerInfo.value && layerInfo.value.fields);

    if (!layerInfo.value || featureError) {
        formatError.value = true;
        layerInfo.value = {
            config: {
                id: 'Placeholder',
                layerType: LayerType.UNKNOWN,
                url: ''
            },
            configOptions: []
        };
        return;
    }

    generateColour();

    wizardStore.goToStep(WizardStep.CONFIGURE);

    layerInfo.value.configOptions.includes(`sublayers`)
        ? (finishStep.value = false)
        : (finishStep.value = true);
};

const onConfigureContinue = async (data: object) => {
    const config: RampLayerConfig = Object.assign(
        layerInfo.value!.config,
        data
    );
    // console.log('Config:', config);
    const layer = iApi.geo.layer.createLayer(config);
    iApi.geo.map.addLayer(layer);
    layer.userAdded = true;

    // notify the legend to prepare a legend item
    iApi.event.emit(GlobalEvents.USER_LAYER_ADDED, layer);
    goNext.value = false;
    wizardStore.goToStep(WizardStep.UPLOAD);
};

// default options for fields selectors
const fieldOptions = () => {
    return layerInfo.value?.fields!.map((field: any) => {
        return {
            value: field.name,
            label: field.alias || field.name
        };
    });
};

// options for lat/long field selectors
const latLonOptions = (fieldName: 'lat' | 'lon') => {
    return layerInfo.value?.latLonFields![fieldName].map((field: any) => {
        return {
            value: field,
            label: field
        };
    });
};

// options for sublayers selector
const sublayerOptions = () => {
    return layerInfo.value?.layers!.map((layer: any, idx: number) => {
        return {
            label: `${layer.indent}${layer.name}`,
            value:
                typeSelection.value === LayerType.MAPIMAGE
                    ? {
                          index: layer.id,
                          state: { opacity: 1, visibility: true }
                      }
                    : // wms
                      {
                          id: layer.id
                      },
            id: `${layer.indent}${layer.name}-${idx}`
        };
    });
};

const isFileLayer = () => {
    return fileData.value || url!.value.match(/\.(zip|csv|json|geojson)$/);
};

const updateFile = (newFile: File) => {
    uploadFile(newFile);

    // reset url since a file was uploaded instead
    url.value = '';
};

const updateUrl = (urlVal: string, valid: boolean) => {
    url.value = urlVal.trim();
    valid ? (goNext.value = true) : (goNext.value = false);
};

const updateTypeSelection = (type: string) => {
    typeSelection.value = type as LayerType;
    formatError.value = false;
};

const updateLayerName = (name: string) => {
    layerInfo.value!.config.name = name;
    const sublayers = layerInfo.value?.config.sublayers;
    const canFinish = sublayers ? name && sublayers.length > 0 : name;
    canFinish ? (finishStep.value = true) : (finishStep.value = false);
};

const updateSublayers = (sublayer: Array<any>) => {
    layerInfo.value!.config.sublayers = sublayer;
    sublayer.length > 0 && layerInfo.value?.config.name
        ? (finishStep.value = true)
        : (finishStep.value = false);
};

const generateColour = () => {
    // Generates a random 6 character hex string to use a random colour if one is not already selected. The 16777215 is (I think) the number of possible colours.
    colour.value =
        layerInfo.value?.config.colour ??
        '#' +
            Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, '0');
    // generate unique ID for colour picker to prevent multi-ramp collisions
    do {
        colourPickerId.value = Math.random().toString(36).substring(2, 9);
    } while (
        document.getElementById(colourPickerId.value + '-hue-slider') !== null
    );
};

const updateColour = (eventData: any) => {
    // trimming hex because it still has alpha attached even though its turned off
    layerInfo.value!.config.colour = eventData.colors.hex.substring(0, 7);
    // manually setting copy button colour because of reset styles on the page and it uses a css variable that I think will mess with multi-ramp
    nextTick(() => {
        formElement.value.querySelector(
            '.vacp-copy-button'
        )!.style.backgroundColor = layerInfo.value?.config.colour;
    });
};
</script>

<style lang="scss" scoped>
:deep(.vacp-color-input-label-text) {
    display: none;
}
</style>
