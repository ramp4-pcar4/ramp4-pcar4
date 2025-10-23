<template>
    <panel-screen :panel="panel" ref="thePanel">
        <template #header>
            {{ t('wizard.title') }}
        </template>

        <template #content>
            <stepper :activeStep="step">
                <!-- Upload data wizard step -->
                <stepper-item
                    :title="t('wizard.upload.title')"
                    :summary="url"
                    @focusPanel="refocusPanel"
                    @focusFirstElement="focusFirst"
                >
                    <form name="upload" @submit="onUploadContinue" @click="layerReady = false">
                        <!-- Upload a file -->
                        <wizard-input
                            type="file"
                            name="file"
                            :label="t('wizard.upload.file.label')"
                            :help="t('wizard.upload.file.help')"
                            @upload="updateFile"
                            :aria-label="t('wizard.upload.file.label')"
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
                            :aria-label="t('wizard.upload.url.label')"
                            ref="stepOneStart"
                        />
                        <wizard-form-footer
                            @submit="onUploadContinue"
                            @cancel="cancelServiceStep"
                            :disabled="!goNext"
                        />
                    </form>
                </stepper-item>

                <!-- Select format wizard step -->
                <stepper-item
                    :title="t('wizard.format.title')"
                    :summary="displayFormat"
                    @focusFirstElement="focusFirst"
                >
                    <form name="format" @submit="onSelectContinue">
                        <!-- List of file/service types based on layer -->

                        <!-- Display CORS required warning if needed for this configuration -->
                        <div v-if="IsCorsRequired" class="inline-flex items-center mb-10">
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
                            <span class="px-5 text-xs"> {{ t('wizard.format.info.cors') }}</span>
                        </div>

                        <wizard-input
                            type="select"
                            name="type"
                            v-model="typeSelection"
                            @select="updateTypeSelection"
                            :size="isFileLayer() ? fileTypeOptions.length : serviceTypeOptions.length"
                            :label="isFileLayer() ? t('wizard.format.type.file') : t('wizard.format.type.service')"
                            :options="isFileLayer() ? fileTypeOptions : serviceTypeOptions"
                            :formatError="formatError"
                            :failureError="failureError"
                            :validation="validation"
                            :validation-messages="{
                                required: t('wizard.format.type.error.required'),
                                invalid: t('wizard.format.type.error.invalid'),
                                failure: `${t('wizard.format.type.error.failure')}.${
                                    IsCorsRequired ? ' ' + t('wizard.format.warn.cors') + '.' : ''
                                }${' ' + t('wizard.format.warn.vpn') + '.'}`
                            }"
                            @keydown.stop
                            :aria-label="t('wizard.format.type.service')"
                            ref="stepTwoStart"
                        />
                        <wizard-form-footer
                            @submit="onSelectContinue"
                            @cancel="cancelFormatStep"
                            :animation="true"
                            :disabled="disabled"
                        />
                    </form>
                </stepper-item>

                <!-- Configure layer wizard step -->
                <stepper-item :title="t('wizard.configure.title')" @focusFirstElement="focusFirst">
                    <form name="configure" @submit="onConfigureContinue" ref="formElement">
                        <wizard-input
                            v-if="layerInfo?.configOptions.includes(`name`)"
                            type="text"
                            name="name"
                            v-model="layerInfo.config.name"
                            @link="updateLayerName"
                            :label="t('wizard.configure.name.label')"
                            :aria-label="t('wizard.configure.name.label')"
                            :validation="true"
                            :validation-messages="{
                                required: t('wizard.configure.name.error.required')
                            }"
                            ref="stepThreeStart"
                            @focusElement="focusFirst"
                            :activeStep="step"
                            :step="2"
                        />
                        <wizard-input
                            v-if="layerInfo?.configOptions.includes(`nameField`)"
                            type="select"
                            name="nameField"
                            v-model="layerInfo.config.nameField"
                            :label="t('wizard.configure.nameField.label')"
                            :aria-label="t('wizard.configure.nameField.label')"
                            :defaultOption="true"
                            :options="fieldOptions()"
                        />
                        <wizard-input
                            v-if="layerInfo?.configOptions.includes(`tooltipField`)"
                            type="select"
                            name="tooltipField"
                            v-model="layerInfo.config.tooltipField"
                            :label="t('wizard.configure.tooltipField.label')"
                            :aria-label="t('wizard.configure.tooltipField.label')"
                            :options="fieldOptions()"
                        />
                        <wizard-input
                            v-if="layerInfo?.configOptions.includes(`legendField`)"
                            type="select"
                            name="legendField"
                            v-model="layerInfo.config.legendField"
                            :label="t('wizard.configure.legendField.label')"
                            :aria-label="t('wizard.configure.legendField.label')"
                            :defaultOption="true"
                            :options="fieldOptions()"
                        />
                        <wizard-input
                            v-if="layerInfo?.configOptions.includes(`latField`)"
                            type="select"
                            name="latField"
                            v-model="layerInfo.config.latField"
                            :defaultOption="true"
                            :label="t('wizard.configure.latField.label')"
                            :aria-label="t('wizard.configure.latField.label')"
                            :options="latLonOptions('lat')"
                        />
                        <wizard-input
                            v-if="layerInfo?.configOptions.includes(`longField`)"
                            type="select"
                            name="longField"
                            v-model="layerInfo.config.longField"
                            :defaultOption="true"
                            :label="t('wizard.configure.longField.label')"
                            :aria-label="t('wizard.configure.longField.label')"
                            :options="latLonOptions('lon')"
                        />
                        <!-- For map image layers -->
                        <div v-if="layerInfo?.configOptions.includes(`sublayers`)">
                            <wizard-input
                                type="checkbox"
                                name="nested"
                                @nested="updateNested"
                                :label="t('wizard.configure.sublayers.nested')"
                                :aria-label="t('wizard.configure.sublayers.nested')"
                            />
                            <wizard-input
                                type="select"
                                :key="componentKey"
                                name="sublayers"
                                v-model="layerInfo.config.sublayers"
                                @select="updateSublayers"
                                :label="t('wizard.configure.sublayers.label')"
                                :aria-label="t('wizard.configure.sublayers.label')"
                                :options="layerInfo.layers!"
                                :selectedValues="selectedValues"
                                :sublayerOptions="sublayerOptions"
                                :multiple="true"
                                :searchable="true"
                                :validation="true"
                                :validation-messages="{
                                    required: t('wizard.configure.sublayers.error.required')
                                }"
                                @keydown.stop
                            />
                        </div>
                        <label class="sr-only" :for="`${randomId}-color-hex`">{{
                            t('wizard.configure.colour.hex')
                        }}</label>
                        <label class="text-base font-bold" v-if="layerInfo?.configOptions.includes('colour')">{{
                            t('wizard.configure.colour.label')
                        }}</label>
                        <ColorPicker
                            v-if="layerInfo?.configOptions.includes('colour')"
                            alpha-channel="hide"
                            :visible-formats="['hex']"
                            default-format="hex"
                            :id="randomId + '-hue-slider'"
                            :color="colour"
                            @color-change="updateColour"
                        >
                            <template #hue-range-input-label>
                                <span class="sr-only">{{ t('wizard.configure.colour.hue') }}</span>
                            </template>

                            <template #copy-button>
                                <span class="sr-only">{{ t('wizard.configure.colour.copy') }}</span>

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
                            @cancel="cancelNameStep"
                            :disabled="!finishStep"
                        />
                    </form>
                </stepper-item>
            </stepper>
            <div
                v-if="layerReady"
                class="p-3 border-solid border-2"
                :class="layerUploaded ? 'bg-green-100 !border-green-900' : 'bg-red-100 !border-red-900'"
            >
                {{ layerName }}
                {{ t(`wizard.upload.${layerUploaded ? 'success' : 'fail'}`) }}
            </div>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
import {
    computed,
    inject,
    nextTick,
    onBeforeUnmount,
    onErrorCaptured,
    onMounted,
    reactive,
    ref,
    type PropType,
    useTemplateRef,
    useId
} from 'vue';

import { ColorPicker } from 'vue-accessible-color-picker';

import type { InstanceAPI, PanelInstance } from '@/api';
import { LayerState, LayerType } from '@/geo/api';
import type { RampLayerConfig } from '@/geo/api';
import { GlobalEvents, LayerInstance } from '@/api/internal';
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
const randomId = useId();

const handlers = ref<Array<string>>([]);

defineProps({
    panel: {
        type: Object as PropType<PanelInstance>,
        required: true
    }
});

const layerSource = computed(() => wizardStore.layerSource);
const step = computed(() => wizardStore.currStep);

const colour = ref();
const componentKey = ref(0);
const disabled = ref(false);
const thePanel = ref();
const stepOneStart = useTemplateRef('stepOneStart');
const stepTwoStart = useTemplateRef('stepTwoStart');
const stepThreeStart = useTemplateRef('stepThreeStart');

const formatError = ref(false);
const failureError = ref(false);
const goNext = ref(false);
const finishStep = ref(false);
const validation = ref(false);

const layerReady = ref<boolean>(false);
const layerUploaded = ref<boolean>(true);
const layerName = ref<string>('');

const displayFormat = ref<string>('');

const selectedValues = ref<Array<string | number>>([]);

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
    const hasProxy = iApi.geo.proxy !== '';

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
    if (step.value === WizardStep.FORMAT || step.value === WizardStep.CONFIGURE) {
        formatError.value = true;
        wizardStore.goToStep(WizardStep.FORMAT);
    }
    // return value needs to be false to prevent bubbling up to parent component errorCaptured
    return false;
});

onMounted(() => {
    handlers.value.push(
        iApi.event.on(GlobalEvents.LAYER_LAYERSTATECHANGE, (payload: { state: string; layer: LayerInstance }) => {
            if (payload.layer.userAdded) {
                layerName.value = payload.layer.name;
                layerReady.value = payload.state !== LayerState.LOADING && payload.state !== LayerState.NEW;
                layerUploaded.value = layerReady.value && payload.state === LayerState.LOADED;
            }
        })
    );
    // runs when the wizard panel was closed on the 'configure' step and reopened
    if (step.value === WizardStep.CONFIGURE) {
        // generates a new colour for the colour picker
        if (layerInfo.value?.configOptions.includes('colour')) {
            generateColour();
        }
        // re-enables the confirmation button if the layer name is not empty and sublayer selection is not required
        finishStep.value = !layerInfo.value?.configOptions.includes(`sublayers`) && !!layerInfo.value?.config.name;
    }
});

onBeforeUnmount(() => {
    handlers.value.forEach(handler => iApi.event.off(handler));
});

// only needed for wizard step 1, when a file is uploaded (and thus the 'continue' button isn't pressed)
const refocusPanel = () => {
    const panelContainer = thePanel.value.el;
    panelContainer.dispatchEvent(new MouseEvent('click'));
};

// sets focus to the first input component of the currently active wizard step
const focusFirst = () => {
    switch (step.value) {
        case 0:
            focusOnStep(stepOneStart);
            break;
        case 1:
            focusOnStep(stepTwoStart);
            break;
        case 2:
            focusOnStep(stepThreeStart);
            break;
    }
};

function focusOnStep(step: typeof stepOneStart) {
    (step.value?.$el.querySelectorAll('input, select')[0] as HTMLElement)?.focus();
}

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

    typeSelection.value = layerSource.value!.guessFormatFromURL(url.value) as LayerType;

    wizardStore.goToStep(WizardStep.FORMAT);
};

const onSelectContinue = async (event: any) => {
    event?.preventDefault();

    disabled.value = true;
    failureError.value = false;
    validation.value = true;

    wizardStore.goToStep(WizardStep.CONFIGURE);

    displayFormat.value = isFileLayer()
        ? (fileTypeOptions.find(element => element.value === typeSelection.value)?.label as string)
        : (serviceTypeOptions.find(element => element.value === typeSelection.value)?.label as string);

    try {
        layerInfo.value = isFileLayer()
            ? ((await layerSource.value!.fetchFileInfo(url.value, typeSelection.value, fileData.value)!) as LayerInfo)
            : ((await layerSource.value!.fetchServiceInfo(
                  url.value,
                  typeSelection.value,
                  wizardStore.nested
              )) as LayerInfo);
        if (isFileLayer() && fileData.value) {
            layerInfo.value.config.url = '';
        }
    } catch {
        disabled.value = false;
        failureError.value = true;
        return;
    }

    // check for incorrect feature service type
    const featureError = typeSelection.value === LayerType.FEATURE && !(layerInfo.value && layerInfo.value.fields);

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
        disabled.value = false;
        return;
    }

    generateColour();

    finishStep.value = !(layerInfo.value.configOptions.includes('sublayers') || !layerInfo.value!.config.name);

    disabled.value = false;
    validation.value = false;
};

const onConfigureContinue = async (data: any) => {
    // Prevent the page from refreshing when pressing ENTER.
    data?.preventDefault();

    const config: RampLayerConfig = Object.assign(layerInfo.value!.config, data);

    selectedValues.value = [];
    displayFormat.value = '';

    const layer = iApi.geo.layer.createLayer(config);

    // just to silence console about unhandled rejections.
    iApi.geo.map.addLayer(layer).catch(() => {});
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
    goNext.value = valid;
};

const updateTypeSelection = (type: string) => {
    typeSelection.value = type as LayerType;
    formatError.value = false;
};

const updateLayerName = (name: string) => {
    layerInfo.value!.config.name = name.trim();
    const sublayers = layerInfo.value?.config.sublayers;
    const canFinish = sublayers ? name && sublayers.length > 0 : name.trim();
    finishStep.value = !!canFinish;
};

const updateSublayers = (sublayer: Array<any>) => {
    layerInfo.value!.config.sublayers = sublayer;
    finishStep.value = !!(sublayer.length > 0 && layerInfo.value?.config.name);
};

const updateNested = (isNested: boolean) => {
    wizardStore.nested = isNested;
    selectedValues.value = [];
    componentKey.value += 1;

    if (typeSelection.value === LayerType.MAPIMAGE) {
        layerInfo.value.layers = layerSource.value!.createLayerHierarchy(
            layerInfo.value.layersRaw as any,
            wizardStore.nested
        );

        const previouslySelected = new Set<number>(
            (layerInfo.value?.config?.sublayers ?? []).map((sl: any) => sl.index)
        );

        if (wizardStore.nested) populateNested(layerInfo, previouslySelected);
        else populateFlat(layerInfo, previouslySelected);
    } else if (typeSelection.value === LayerType.WMS) {
        layerInfo.value.layers = layerSource.value!.mapWmsLayerList(
            layerInfo.value.layersRaw as any,
            wizardStore.nested
        );

        const previouslySelected = new Set<string>((layerInfo.value?.config?.sublayers ?? []).map((sl: any) => sl.id));

        if (wizardStore.nested) populateNestedWMS(layerInfo, previouslySelected);
        else populateFlatWMS(layerInfo, previouslySelected);
    }

    updateSublayers(sublayerOptions(selectedValues.value));
};

const populateNested = (layerInfo: any, previouslySelected: Set<number>): void => {
    const parentChildMap = new Map<number, number[]>();

    for (const rawLayer of layerInfo.value.layersRaw) {
        if (rawLayer.parentLayerId !== -1) {
            const children = parentChildMap.get(rawLayer.parentLayerId) || [];
            children.push(rawLayer.id);
            parentChildMap.set(rawLayer.parentLayerId, children);
        }
    }

    const allChildrenSelected = (parentId: number): boolean => {
        const children = parentChildMap.get(parentId);
        if (!children) return false;

        return children.every(childId => {
            if (parentChildMap.has(childId)) return allChildrenSelected(childId);
            return previouslySelected.has(childId);
        });
    };

    const addSelectedValues = (parentId: number): void => {
        if (!allChildrenSelected(parentId)) {
            const children = parentChildMap.get(parentId);
            if (children) {
                for (const child of children) {
                    if (previouslySelected.has(child)) {
                        selectedValues.value.push(child);
                    }
                }
            }
        } else selectedValues.value.push(parentId);
    };

    for (const parentId of parentChildMap.keys()) addSelectedValues(parentId);

    for (const rawLayer of layerInfo.value.layersRaw) {
        if (rawLayer.parentLayerId === -1 && !parentChildMap.has(rawLayer.id) && previouslySelected.has(rawLayer.id)) {
            selectedValues.value.push(rawLayer.id);
        }
    }

    selectedValues.value = Array.from(new Set(selectedValues.value));
};

const populateNestedWMS = (layerInfo: any, previouslySelected: Set<string>): void => {
    const allDescendantsSelected = (layer: any): boolean => {
        if (!layer.layers || layer.layers.length === 0) return previouslySelected.has(layer.name);
        return layer.layers.every((child: any) => allDescendantsSelected(child));
    };

    const addSelectedLayerNames = (layer: any): void => {
        if (allDescendantsSelected(layer)) selectedValues.value.push(layer.name);
        else if (layer.layers) layer.layers.forEach(addSelectedLayerNames);
    };

    const topLayer = layerInfo.value.layersRaw[0];

    if (topLayer && topLayer.layers) {
        topLayer.layers.forEach((parentLayer: any) => addSelectedLayerNames(parentLayer));
    }

    selectedValues.value = Array.from(new Set(selectedValues.value));
};

const populateFlat = (layerInfo: any, previouslySelected: Set<number>): void => {
    const lowestChildren = (parentId: number) => {
        const children = layerInfo.value.layersRaw.filter((rl: any) => rl.parentLayerId === parentId);

        if (children.length > 0) {
            for (const child of children) {
                if (previouslySelected.has(child.id)) selectedValues.value.push(child.id);
                else lowestChildren(child.id);
            }
        } else selectedValues.value.push(parentId);
    };

    for (const rawLayer of layerInfo.value.layersRaw)
        if (previouslySelected.has(rawLayer.id)) lowestChildren(rawLayer.id);

    selectedValues.value = Array.from(new Set(selectedValues.value));
};

const populateFlatWMS = (layerInfo: any, previouslySelected: Set<string>): void => {
    const addLeafLayers = (layer: any): void => {
        if (layer.layers && layer.layers.length > 0) layer.layers.forEach(addLeafLayers);
        else selectedValues.value.push(layer.name);
    };

    const topLayer = layerInfo.value.layersRaw[0];

    for (const prev of previouslySelected) {
        const parentLayer = topLayer.layers.find((layer: any) => layer.name === prev);

        if (parentLayer && parentLayer.layers && parentLayer.layers.length > 0) addLeafLayers(parentLayer);
        else if (parentLayer) selectedValues.value.push(parentLayer.name);
    }

    selectedValues.value = Array.from(new Set(selectedValues.value));
};

const sublayerOptions = (layers: any[]) => {
    // set sublayer option properties based on whether its a map image or WMS layer
    return layers.map((layerIdx: any) => {
        switch (typeSelection.value) {
            case LayerType.MAPIMAGE:
                return {
                    index: layerIdx,
                    state: { opacity: 1, visibility: true }
                };
            case LayerType.WMS: {
                // Remove the unique tag added to the end of the ID.
                const removeHash = layerIdx.lastIndexOf('#');
                return { id: layerIdx.substring(0, removeHash) };
            }
            default:
                return {
                    id: layerIdx
                };
        }
    });
};

const generateColour = () => {
    // Generates a random 6 character hex string to use a random colour if one is not already selected. The 16777215 is (I think) the number of possible colours.
    colour.value =
        layerInfo.value?.config.colour ??
        '#' +
            Math.floor(Math.random() * 16777215)
                .toString(16)
                .padStart(6, '0');
};

const updateColour = (eventData: any) => {
    // trimming hex because it still has alpha attached even though its turned off
    layerInfo.value!.config.colour = eventData.colors.hex.substring(0, 7);
    // manually setting copy button colour because of reset styles on the page and it uses a css variable that I think will mess with multi-ramp
    nextTick(() => {
        formElement.value.querySelector('.vacp-copy-button')!.style.backgroundColor = layerInfo.value?.config.colour;
    });
};

const cancelServiceStep = () => {
    goNext.value = false;
    wizardStore.goToStep(0);
    focusOnStep(stepOneStart);
};

const cancelFormatStep = () => {
    disabled.value = false;
    formatError.value = false;
    failureError.value = false;
    goNext.value = !!url.value;
    validation.value = false;
    wizardStore.goToStep(0);
    displayFormat.value = '';
};

const cancelNameStep = () => {
    selectedValues.value = [];
    finishStep.value = false;
    wizardStore.goToStep(1);
};
</script>

<style lang="scss" scoped>
:deep(.vacp-color-input-label-text) {
    display: none;
}
</style>
