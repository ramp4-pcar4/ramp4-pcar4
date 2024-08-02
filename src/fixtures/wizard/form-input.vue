<template>
    <div class="input-wrapper mb-12" ref="el">
        <div v-if="type === 'file'">
            <label class="text-base font-bold">{{ label }}</label>
            <div class="relative py-8 mb-0.5 h-75" data-type="file">
                <input
                    class="absolute w-full opacity-0 inset-0 cursor-pointer"
                    type="file"
                    name="file"
                    accept=".geojson,.json,.csv,.zip"
                    :aria-label="props.ariaLabel"
                    @input="
                        event => {
                            handleUpload(event);
                        }
                    "
                />
                <div
                    class="upload-mask absolute inset-0 flex border-dashed border-2 border-gray-400 pointer-events-none justify-center"
                >
                    <svg
                        class="w-30 h-30 m-auto"
                        fill="#a8a8a8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 58 58"
                    >
                        <path
                            d="M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z"
                        />
                        <polygon
                            points="27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22"
                        />
                    </svg>
                </div>
            </div>
            <div class="text-gray-500 text-xs mb-1">{{ help }}</div>
        </div>
        <div v-else-if="type === 'url'">
            <label class="text-base font-bold">{{ label }}</label>
            <div class="mb-0.5" data-type="url">
                <input
                    class="text-sm w-full border-solid border-gray-300 mb-5 focus:border-green-500"
                    type="url"
                    name="url"
                    :value="modelValue"
                    :aria-label="props.ariaLabel"
                    @change="valid ? (urlError = false) : (urlError = true)"
                    @input="
                        event => {
                            handleUrlInput(event);
                        }
                    "
                />
            </div>
            <div v-if="urlError" class="text-red-900 text-xs">
                {{
                    modelValue
                        ? validationMessages?.invalid
                        : validationMessages?.required
                }}
            </div>
        </div>
        <div v-else-if="type === 'select'">
            <label class="text-base font-bold">{{ label }}</label>
            <div class="relative mb-0.5" data-type="select">
                <div v-if="multiple">
                    <div ref="treeWrapper">
                        <treeselect
                            v-model="selected"
                            :multiple="true"
                            :options="options"
                            :default-expand-level="1"
                            :always-open="true"
                            :open-direction="'bottom'"
                            :max-height="300"
                            :limit="4"
                            :disableFuzzyMatching="true"
                            :searchable="searchable"
                            :childrenIgnoreDisabled="true"
                            :placeholder="
                                t('wizard.configure.sublayers.select')
                            "
                            :noResultsText="
                                t('wizard.configure.sublayers.results')
                            "
                            :clearAllText="
                                t('wizard.configure.sublayers.clearAll')
                            "
                            @select="
                                $nextTick(() => {
                                    handleSelection();
                                })
                            "
                            @deselect="
                                $nextTick(() => {
                                    handleSelection();
                                })
                            "
                            @open="
                                $nextTick(() => {
                                    observeHeight();
                                })
                            "
                        >
                            <template v-slot:[valueLabel]="{ node }">
                                <label>
                                    {{ truncateVal(node.label) }}
                                </label>
                            </template>

                            <template
                                v-slot:[optionLabel]="{ node, labelClassName }"
                            >
                                <label
                                    :class="labelClassName"
                                    v-truncate="{
                                        options: {
                                            placement: 'top',
                                            hideOnClick: false,
                                            theme: 'ramp4',
                                            animation: 'scale'
                                        }
                                    }"
                                >
                                    {{ node.label }}
                                </label>
                            </template>
                        </treeselect>
                    </div>
                    <div
                        v-if="validation && sublayersError"
                        class="text-red-900 text-xs"
                    >
                        {{ validationMessages?.required }}
                    </div>
                </div>
                <div v-else>
                    <select
                        class="block border-solid border-gray-300 w-full p-3 overflow-y-auto"
                        v-bind:class="size && 'configure-select'"
                        :size="size"
                        :value="modelValue"
                        @input="handleServiceSelection(size, $event)"
                        :aria-label="props.ariaLabel"
                    >
                        <option
                            class="p-6"
                            v-for="option in options"
                            :key="option.label"
                            :value="option.value"
                        >
                            {{ option.label }}
                        </option>
                    </select>
                    <div
                        v-if="validation && formatError"
                        class="text-red-900 text-xs"
                    >
                        {{ validationMessages?.invalid }}
                    </div>
                    <div
                        v-if="validation && failureError"
                        class="text-red-900 text-xs"
                    >
                        {{ validationMessages?.failure }}
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="type === 'checkbox'">
            <input
                class="text-sm border-solid border-gray-300 mb-5 focus:border-green-500 mr-10"
                type="checkbox"
                name="nested"
                :checked="true"
                :aria-label="props.ariaLabel"
                @change="
                    event => {
                        handleNestedChecked(event);
                    }
                "
            />
            <label class="text-base font-bold">{{ label }}</label>
        </div>
        <div v-else>
            <label class="text-base font-bold">{{ label }}</label>
            <div class="relative mb-0.5">
                <input
                    class="border-solid border-gray-300 p-3 w-full"
                    :class="{ 'error-border': !valid && !modelValue }"
                    type="text"
                    :value="modelValue"
                    :aria-label="props.ariaLabel"
                    @change="valid ? (nameError = false) : (nameError = true)"
                    @input="
                        event => {
                            handleNameInput(event);
                        }
                    "
                />
            </div>
            <div v-if="validation && !modelValue" class="text-red-900 text-xs">
                {{ validationMessages?.required }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { InstanceAPI } from '@/api';
import { inject, onBeforeUnmount, reactive, ref, watch } from 'vue';
import type { PropType } from 'vue';
import { useI18n } from 'vue-i18n';
import Treeselect from '@ramp4-pcar4/vue3-treeselect';
import '@ramp4-pcar4/vue3-treeselect/dist/vue3-treeselect.css';

interface ValidationMsgs {
    required?: string;
    invalid?: string;
    failure?: string;
}

const iApi = inject<InstanceAPI>('iApi');
const { t } = useI18n();

const emit = defineEmits([
    'update:modelValue',
    'link',
    'select',
    'upload',
    'text',
    'nested'
]);

const props = defineProps({
    defaultOption: {
        type: Boolean,
        default: false
    },
    formatError: {
        type: Boolean,
        default: false
    },
    failureError: {
        type: Boolean,
        default: false
    },
    help: {
        type: [String, Boolean],
        default: false
    },
    label: {
        type: [String, Boolean],
        default: false
    },
    modelValue: {
        type: [String, Array],
        default: ''
    },
    name: {
        type: [String, Boolean],
        default: false
    },
    options: {
        type: Array as PropType<Array<any>>,
        default() {
            return [];
        }
    },
    selectedValues: {
        type: Array as PropType<(string | number)[]>,
        default: () => []
    },
    size: {
        type: [Number, String],
        default: 0
    },
    sublayerOptions: {
        type: Function,
        default() {
            return [];
        }
    },
    multiple: {
        type: Boolean,
        default: false
    },
    searchable: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'text'
    },
    url: {
        type: [String, Boolean],
        default: false
    },
    validation: {
        type: Boolean,
        default: false
    },
    validationMessages: {
        type: Object as PropType<ValidationMsgs>
    },
    ariaLabel: {
        type: String,
        default: false
    }
});

const el = ref();
const valid = ref(false);
const urlError = ref(false);
const nameError = ref(false);
const sublayersError = ref(false);
const selected = ref([...props.selectedValues]);
const valueLabel = ref('value-label');
const optionLabel = ref('option-label');
const resizeObserver = ref<ResizeObserver | undefined>(undefined);
const treeWrapper = ref<HTMLElement | null>(null);
const watchers = reactive<Array<Function>>([]);

if (props.defaultOption && props.modelValue === '' && props.options.length) {
    // regex to guess closest default value for lat/long fields
    // eslint has beef with the following line for unknown reasons.
    // eslint-disable-next-line
    let defaultValue = props.options[0].value;
    if (props.name === 'latField') {
        const latNames = new RegExp(/^(y|lat.*)$/i);
        const latCandidate = props.options.find(option =>
            latNames.test(option.label)
        );
        defaultValue = latCandidate?.value || defaultValue;
    } else if (props.name === 'longField') {
        const longNames = new RegExp(/^(x|long.*)$/i);
        const longCandidate = props.options.find(option =>
            longNames.test(option.label)
        );
        defaultValue = longCandidate?.value || defaultValue;
    }
    emit('update:modelValue', defaultValue);
}

const validName = (name: string) => {
    if (name.trim() !== '') valid.value = true;
    else {
        valid.value = false;
        iApi!.updateAlert(t('wizard.configure.name.error.required'));
    }
};

const validUrl = (url: string) => {
    let newUrl;
    try {
        newUrl = new URL(url);
    } catch (_) {
        valid.value = false;
        return false;
    }

    const link = newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
    link ? (valid.value = true) : (valid.value = false);
};

const handleUpload = (event: Event) => {
    emit('upload', (event.target as HTMLInputElement).files![0]);
    (event.target as HTMLInputElement).value = '';
};

const handleUrlInput = (event: Event) => {
    validUrl((event.target as HTMLInputElement).value);
    emit('link', (event.target as HTMLInputElement).value, valid);
    urlError.value = false;
};

const handleServiceSelection = (size: string | number, event: Event) => {
    size
        ? emit('select', (event.target as HTMLInputElement).value)
        : emit('update:modelValue', (event.target as HTMLInputElement).value);
};

const handleNestedChecked = (event: Event) => {
    emit('nested', (event.target as HTMLInputElement).checked);
};

const handleNameInput = (event: Event) => {
    validName((event.target as HTMLInputElement).value);
    emit('link', (event.target as HTMLInputElement).value, valid);
    nameError.value = false;
};

const handleSelection = () => {
    // small delay so the selected model can update
    emit('select', props.sublayerOptions(selected.value));
    selected.value && selected.value.length > 0
        ? (sublayersError.value = false)
        : (sublayersError.value = true);
};

const truncateVal = (selected: string) => {
    if (selected.length > 5) {
        return `${selected.slice(0, 5)}...`;
    }
    return selected;
};

function observeHeight() {
    resizeObserver.value = new ResizeObserver(function () {
        setHeight();
    });

    resizeObserver.value.observe(
        iApi!.$vApp.$el.querySelector('.vue-treeselect__control')
    );
    resizeObserver.value.observe(
        iApi!.$vApp.$el.querySelector('.vue-treeselect__menu')
    );
}

const setHeight = () => {
    // calculates height of tree selector
    const menuHeight = iApi!.$vApp.$el.querySelector(
        '.vue-treeselect__menu'
    )?.clientHeight!;

    const selectHeight = iApi!.$vApp.$el.querySelector(
        '.vue-treeselect__control'
    )?.clientHeight!;

    el.value.style.height = `${menuHeight + selectHeight + 30}px`;
};

watchers.push(
    watch(
        () => treeWrapper.value,
        newValue => {
            if (newValue) {
                addAriaLabel();
            }
        }
    )
);

const addAriaLabel = () => {
    if (treeWrapper.value) {
        const input = treeWrapper.value.querySelector('input[type="text"]');
        if (input) {
            input.setAttribute(
                'aria-label',
                t('wizard.configure.sublayers.select')
            );
        }
    }
};

onBeforeUnmount(() => {
    // remove the resize observer
    resizeObserver.value!.disconnect();

    watchers.forEach(unwatch => unwatch());
});
</script>

<style lang="scss" scoped>
.upload-mask:focus {
    outline: none;
    border: 1px solid #41b883;
}

.configure-select {
    background-image: none;
    padding: 0px;
}

:deep(.vue-treeselect__input:focus) {
    @apply ring-transparent pl-0 #{!important};
}

:deep(.vue-treeselect__multi-value) {
    display: flex;
    flex-wrap: wrap;
}

:deep(.vue-treeselect__input-container) {
    flex: 1;
    display: flex;
    min-width: 50%;
}

:deep(.vue-treeselect__input) {
    padding-left: 0px;
    flex: 1;
}

:deep(.vue-treeselect__sizer) {
    flex: 1;
}

:deep(.vue-treeselect__x-container) {
    padding-left: 10px;
}

:deep(.vue-treeselect__multi-value-item-container) {
    padding-right: 5px;
}

:deep(.vue-treeselect__placeholder) {
    color: black;
}

.error-border {
    border: 3px solid red;
}
</style>
