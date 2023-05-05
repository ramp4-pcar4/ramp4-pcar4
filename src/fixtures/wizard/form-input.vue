<template>
    <div class="input-wrapper mb-12">
        <div v-if="type === 'file'">
            <label class="text-base font-bold">{{ label }}</label>
            <div class="relative py-8 mb-0.5 h-75" data-type="file">
                <input
                    class="absolute w-full opacity-0 inset-0 cursor-pointer"
                    type="file"
                    name="file"
                    accept=".geojson,.json,.csv,.zip"
                    @input="
                        event => {
                            emit('upload', (event.target as HTMLInputElement).files![0]);
                            (event.target as HTMLInputElement).value = '';
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
            <div class="text-gray-400 text-xs mb-1">{{ help }}</div>
        </div>
        <div v-else-if="type === 'url'">
            <label class="text-base font-bold">{{ label }}</label>
            <div class="mb-0.5" data-type="url">
                <input
                    class="text-sm w-full border-solid border-gray-300 mb-5 leading-5 focus:border-green-500"
                    type="url"
                    name="url"
                    :value="modelValue"
                    @change="valid ? (urlError = false) : (urlError = true)"
                    @input="
                        event => {
                            validUrl((event.target as HTMLInputElement).value);
                            emit('link', (event.target as HTMLInputElement).value, valid);
                            urlError = false;
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
            <div
                v-if="searchable && options.length > 4"
                class="flex items-center pb-4 min-w-0"
            >
                <!-- layer filter -->
                <input
                    @keypress.enter.prevent
                    enterkeyhint="done"
                    v-model="filter"
                    class="rv-global-search rv-input w-full min-w-0"
                    aria-invalid="false"
                    :aria-label="t('wizard.configure.sublayers.search')"
                    :placeholder="t('wizard.configure.sublayers.search')"
                />
                <div class="-ml-30">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fit=""
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                        focusable="false"
                        class="fill-current w-24 h-24 flex-shrink-0"
                    >
                        <g id="search_cache224">
                            <path
                                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                            ></path>
                        </g>
                    </svg>
                </div>
            </div>
            <div class="relative mb-0.5" data-type="select">
                <div v-if="multiple">
                    <select
                        class="block border-solid border-gray-300 w-full p-3 overflow-y-auto"
                        multiple
                        v-model="selected"
                        @change="
                            () => {
                                emit('select', selected);
                                checkMultiSelectError(selected);
                            }
                        "
                    >
                        <option
                            class="p-6"
                            v-for="option in options.filter(o =>
                                o.label
                                    .toLowerCase()
                                    .includes(filter.toLowerCase().trim())
                            )"
                            v-bind:key="option.label"
                            :value="option.value"
                        >
                            {{ option.label }}
                        </option>
                    </select>
                    <div class="text-gray-400 text-xs mb-1">{{ help }}</div>
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
                        @input="
                            size
                                ? emit(
                                      'select',
                                      ($event.target as HTMLInputElement).value
                                  )
                                : emit(
                                      'update:modelValue',
                                      ($event.target as HTMLInputElement).value
                                  )
                        "
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
        <div v-else>
            <label class="text-base font-bold">{{ label }}</label>
            <div class="relative mb-0.5">
                <input
                    class="border-solid border-gray-300 p-3 w-full"
                    type="text"
                    :value="modelValue"
                    @change="
                        emit('text', ($event.target as HTMLInputElement).value)
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
import { ref } from 'vue';
import type { PropType } from 'vue';
import { useI18n } from 'vue-i18n';

interface ValidationMsgs {
    required?: string;
    invalid?: string;
    failure?: string;
}

interface SelectionOption {
    value: any;
    label: string;
}

const { t } = useI18n();

const emit = defineEmits([
    'update:modelValue',
    'link',
    'select',
    'upload',
    'text'
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
        type: Array as PropType<Array<SelectionOption>>,
        default() {
            return [];
        }
    },
    size: {
        type: [Number, String],
        default: 0
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
    }
});

const valid = ref(false);
const urlError = ref(false);
const sublayersError = ref(false);
const selected = ref([]);
const filter = ref('');

if (props.defaultOption && props.modelValue === '' && props.options.length) {
    // regex to guess closest default value for lat/long fields
    // eslint has beef with the following line for unknown reasons
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

const checkMultiSelectError = (selected: Array<any>) => {
    selected && selected.length > 0
        ? (sublayersError.value = false)
        : (sublayersError.value = true);
};
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
</style>
