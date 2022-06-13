<template>
    <panel-screen :panel="panel">
        <template #header>
            {{ $t('wizard.title') }}
        </template>

        <template #content>
            <stepper :activeStep="step">
                <!-- Upload data wizard step -->
                <stepper-item :title="$t('wizard.upload.title')" :summary="url">
                    <form name="upload" @submit="onUploadContinue">
                        <!-- Upload a file -->
                        <wizard-input
                            type="file"
                            name="file"
                            :label="$t('wizard.upload.file.label')"
                            :help="$t('wizard.upload.file.help')"
                            @upload="updateFile"
                        >
                        </wizard-input>
                        <span class="block text-center mb-10">or</span>

                        <!-- Provide layer URL -->
                        <wizard-input
                            type="url"
                            name="url"
                            v-model="url"
                            :label="$t('wizard.upload.url.label')"
                            @link="updateUrl"
                            :validation="true"
                            :validation-messages="{
                                required: $t(
                                    'wizard.upload.url.error.required'
                                ),
                                invalid: $t('wizard.upload.url.error.url')
                            }"
                        >
                        </wizard-input>
                        <wizard-form-footer
                            @submit="onUploadContinue"
                            @cancel="
                                () => {
                                    goNext = false;
                                    goToStep(0);
                                }
                            "
                            :disabled="!goNext"
                        ></wizard-form-footer>
                    </form>
                </stepper-item>

                <!-- Select format wizard step -->
                <stepper-item
                    :title="$t('wizard.format.title')"
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
                                {{ $t('wizard.format.info.cors') }}</span
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
                                    ? $t('wizard.format.type.file')
                                    : $t('wizard.format.type.service')
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
                                required: $t(
                                    'wizard.format.type.error.required'
                                ),
                                invalid: $t('wizard.format.type.error.invalid'),
                                failure: `${$t(
                                    'wizard.format.type.error.failure'
                                )}.${
                                    IsCorsRequired
                                        ? ' ' +
                                          $t('wizard.format.warn.cors') +
                                          '.'
                                        : ''
                                }`
                            }"
                            @keydown.stop
                        >
                        </wizard-input>
                        <wizard-form-footer
                            @submit="onSelectContinue"
                            @cancel="
                                () => {
                                    formatError = false;
                                    failureError = false;
                                    url ? (goNext = true) : (goNext = false);
                                    goToStep(0);
                                }
                            "
                            :disabled="false"
                        ></wizard-form-footer>
                    </form>
                </stepper-item>

                <!-- Configure layer wizard step -->
                <stepper-item :title="$t('wizard.configure.title')">
                    <form name="configure" @submit="onConfigureContinue">
                        <wizard-input
                            v-if="layerInfo.configOptions.includes(`name`)"
                            type="text"
                            name="name"
                            v-model="layerInfo.config.name"
                            @text="updateLayerName"
                            :label="$t('wizard.configure.name.label')"
                            :validation="true"
                            :validation-messages="{
                                required: $t(
                                    'wizard.configure.name.error.required'
                                )
                            }"
                        >
                        </wizard-input>
                        <wizard-input
                            v-if="layerInfo.configOptions.includes(`nameField`)"
                            type="select"
                            name="nameField"
                            v-model="layerInfo.config.nameField"
                            :label="$t('wizard.configure.nameField.label')"
                            :defaultOption="true"
                            :options="fieldOptions()"
                        >
                        </wizard-input>
                        <wizard-input
                            v-if="
                                layerInfo.configOptions.includes(`tooltipField`)
                            "
                            type="select"
                            name="tooltipField"
                            v-model="layerInfo.config.tooltipField"
                            :label="$t('wizard.configure.tooltipField.label')"
                            :options="fieldOptions()"
                        >
                        </wizard-input>
                        <wizard-input
                            v-if="layerInfo.configOptions.includes(`latField`)"
                            type="select"
                            name="latField"
                            v-model="layerInfo.config.latField"
                            :defaultOption="true"
                            :label="$t('wizard.configure.latField.label')"
                            :options="fieldOptions()"
                        >
                        </wizard-input>
                        <wizard-input
                            v-if="layerInfo.configOptions.includes(`longField`)"
                            type="select"
                            name="longField"
                            v-model="layerInfo.config.longField"
                            :defaultOption="true"
                            :label="$t('wizard.configure.longField.label')"
                            :options="fieldOptions()"
                        >
                        </wizard-input>
                        <!-- For map image layers -->
                        <wizard-input
                            v-if="
                                layerInfo.configOptions.includes(`layerEntries`)
                            "
                            type="select"
                            name="layerEntries"
                            v-model="layerInfo.config.layerEntries"
                            @select="updateLayerEntries"
                            :label="$t('wizard.configure.layerEntries.label')"
                            :help="$t('wizard.configure.layerEntries.help')"
                            :options="sublayerOptions()"
                            :multiple="true"
                            :validation="true"
                            :validation-messages="{
                                required: $t(
                                    'wizard.configure.layerEntries.error.required'
                                )
                            }"
                            @keydown.stop
                        >
                        </wizard-input>
                        <wizard-form-footer
                            @submit="onConfigureContinue"
                            @cancel="goToStep(1)"
                            :disabled="!finishStep"
                        ></wizard-form-footer>
                    </form>
                </stepper-item>
            </stepper>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { PanelInstance } from '@/api';
import { LayerType } from '@/geo/api';
import { GlobalEvents } from '@/api/internal';
import { WizardStore, WizardStep } from './store';

import WizardFormFooterV from './form-footer.vue';
import WizardInputV from './form-input.vue';
import StepperItemV from './stepper-item.vue';
import StepperV from './stepper.vue';

export default defineComponent({
    name: 'WizardScreenV',
    props: {
        panel: PanelInstance
    },

    components: {
        'wizard-form-footer': WizardFormFooterV,
        'wizard-input': WizardInputV,
        'stepper-item': StepperItemV,
        stepper: StepperV
    },

    data() {
        return {
            layerSource: this.get(WizardStore.layerSource),
            step: this.get(WizardStore.step),

            goToStep: this.call(WizardStore.goToStep),

            formulateFile: {},
            formatError: false,
            failureError: false,
            goNext: false,
            finishStep: false,

            // service layer formats
            serviceTypeOptions: [
                {
                    value: LayerType.FEATURE,
                    label: this.$t('wizard.layerType.esriFeature')
                },
                {
                    value: LayerType.MAPIMAGE,
                    label: this.$t('wizard.layerType.esriMapImage')
                },
                {
                    value: LayerType.TILE,
                    label: this.$t('wizard.layerType.esriTile')
                },
                {
                    value: LayerType.IMAGERY,
                    label: this.$t('wizard.layerType.esriImagery')
                },
                {
                    value: LayerType.WMS,
                    label: this.$t('wizard.layerType.ogcWms')
                },
                {
                    value: LayerType.WFS,
                    label: this.$t('wizard.layerType.ogcWfs')
                }
            ],

            // file layer formats
            fileTypeOptions: [
                {
                    value: LayerType.GEOJSON,
                    label: this.$t('wizard.fileType.geojson')
                },
                {
                    value: LayerType.SHAPEFILE,
                    label: this.$t('wizard.fileType.shapefile')
                },
                { value: LayerType.CSV, label: this.$t('wizard.fileType.csv') }
            ]
        };
    },

    computed: {
        url: {
            get() {
                return this.$store.get(WizardStore.url);
            },
            set(newValue) {
                this.$store.set(WizardStore.url, newValue);
            }
        },
        fileData: {
            get() {
                return this.$store.get(WizardStore.fileData);
            },
            set(newValue) {
                this.$store.set(WizardStore.fileData, newValue);
            }
        },
        typeSelection: {
            get() {
                return this.$store.get(WizardStore.typeSelection);
            },
            set(newValue) {
                this.$store.set(WizardStore.typeSelection, newValue);
            }
        },
        layerInfo: {
            get() {
                return this.$store.get(WizardStore.layerInfo);
            },
            set(newValue) {
                this.$store.set(WizardStore.layerInfo, newValue);
            }
        },
        IsCorsRequired() {
            // check if proxy is defined
            let hasProxy = this.$iApi.geo.proxy !== '';

            // handle cases for each type
            switch (this.typeSelection) {
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
                    if (this.isFileLayer() && !this.fileData) {
                        return true;
                    } else {
                        return false;
                    }
                default:
                    return false;
            }
        }
    },

    // lifecycle hook captures errors from child components
    errorCaptured(err, instance, info) {
        if (
            this.step === WizardStep.FORMAT ||
            this.step === WizardStep.CONFIGURE
        ) {
            this.formatError = true;
            this.goToStep(WizardStep.FORMAT);
        }

        // return value needs to be false to prevent bubbling up to parent component errorCaptured
        return false;
    },

    methods: {
        // reads uploaded file
        async uploadFile(file: File, progress?: Function) {
            const reader = new FileReader();

            reader.onerror = () => {
                this.formulateFile = {};
            };

            reader.onload = e => {
                this.fileData = reader.result as ArrayBuffer;
                this.url = file.name;
                this.onUploadContinue(e);
            };

            reader.readAsArrayBuffer(file);
        },

        onUploadContinue(event: any) {
            // Prevent the page from refreshing when pressing ENTER to submit the URL.
            event?.preventDefault();

            if (this.fileData) {
                setTimeout(() => {
                    // reset upload file
                    this.formulateFile = {};
                }, 500);
            }

            this.typeSelection = this.layerSource.guessFormatFromURL(this.url);
            this.goToStep(WizardStep.FORMAT);
        },

        async onSelectContinue() {
            this.failureError = false;

            try {
                this.layerInfo = this.isFileLayer()
                    ? await this.layerSource.fetchFileInfo(
                          this.url,
                          this.typeSelection,
                          this.fileData
                      )
                    : await this.layerSource.fetchServiceInfo(
                          this.url,
                          this.typeSelection
                      );
            } catch (_) {
                this.failureError = true;
                return;
            }

            // check for incorrect feature service type
            const featureError =
                this.typeSelection === LayerType.FEATURE &&
                !(this.layerInfo && this.layerInfo.fields);

            if (!this.layerInfo || featureError) {
                this.formatError = true;
                this.layerInfo = { config: null, configOptions: [] };
                return;
            }

            this.goToStep(WizardStep.CONFIGURE);
            this.layerInfo.configOptions.includes(`layerEntries`)
                ? (this.finishStep = false)
                : (this.finishStep = true);
        },

        async onConfigureContinue(data: object) {
            const config = Object.assign(this.layerInfo!.config, data);

            const layer = this.$iApi.geo.layer.createLayer(config);
            await layer.initiate();
            layer.userAdded = true;

            // notify the legend to prepare a legend item
            this.$iApi.event.emit(GlobalEvents.USER_LAYER_ADDED, layer);

            // add layer to map
            this.$iApi.geo.map.addLayer(layer);

            this.goNext = false;
            this.goToStep(WizardStep.UPLOAD);
        },

        // default options for fields selectors
        fieldOptions() {
            return this.layerInfo!.fields.map((field: any) => {
                return {
                    value: field.name,
                    label: field.alias || field.name
                };
            });
        },

        // options for lat/long field selectors
        latLonOptions(fieldName: string) {
            // TODO: if lat/long fields parsing is added when extracting CSV fields return that here
        },

        // options for sublayers selector
        sublayerOptions() {
            return this.layerInfo!.layers.map((layer: any, idx: number) => {
                return {
                    label: `${layer.indent}${layer.name}`,
                    value:
                        this.typeSelection === LayerType.MAPIMAGE
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
        },

        isFileLayer() {
            return this.fileData || this.url.match(/\.(zip|csv|json|geojson)$/);
        },

        // sets an error message on an input field
        setError(form: string, field: string, msg: string) {
            this.$formulate.handle(
                {
                    inputErrors: { [field]: [msg] },
                    formErrors: []
                },
                form
            );
        },

        updateFile(newFile: File) {
            this.formulateFile = newFile;
            this.uploadFile(newFile);

            // reset url since a file was uploaded instead
            this.url = '';
        },

        updateUrl(url: string, valid: boolean) {
            this.url = url.trim();
            valid ? (this.goNext = true) : (this.goNext = false);
        },

        updateTypeSelection(type: string) {
            this.typeSelection = type;
            this.formatError = false;
        },

        updateLayerName(name: string) {
            this.layerInfo.config.name = name;
            const le = this.layerInfo.config.layerEntries;
            const canFinish = le ? name && le.length > 0 : name;
            canFinish ? (this.finishStep = true) : (this.finishStep = false);
        },

        updateLayerEntries(le: Array<any>) {
            this.layerInfo.config.layerEntries = le;
            le.length > 0 && this.layerInfo.config.name
                ? (this.finishStep = true)
                : (this.finishStep = false);
        }
    }
});
</script>

<style lang="scss" scoped>
:deep(.formulate-input) {
    font-family: unset;

    &[data-classification] {
        input,
        .formulate-input-upload-area-mask,
        select {
            @apply rounded-none;
        }
    }

    &[data-classification='select'] {
        .formulate-input-element::before {
            @apply hidden; // hide second selector arrow
        }

        select {
            &[size] {
                @apply bg-none overflow-y-auto p-0;
                > option {
                    @apply p-10;
                }
            }
        }
    }
}
</style>
