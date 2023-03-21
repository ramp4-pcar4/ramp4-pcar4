<template>
    <panel-screen :panel="panel" ref="el">
        <template #header>
            {{ t('metadata.title') }}: {{ payload.layerName }}
        </template>

        <template #content>
            <div v-if="layerExists">
                <div class="flex justify-center">
                    <!-- Loading Screen -->
                    <div
                        v-if="status == 'loading'"
                        class="flex flex-col justify-center text-center"
                    >
                        {{ t('metadata.loading') }}
                    </div>

                    <!-- Found Screen, XML -->
                    <div
                        v-else-if="
                            payload.type === 'xml' && status == 'success'
                        "
                        class="flex flex-col justify-center"
                    ></div>

                    <!-- Found Screen, HTML -->
                    <div
                        v-else-if="
                            payload.type === 'html' && status == 'success'
                        "
                        v-html="response"
                        class="flex flex-col justify-center max-w-full"
                    ></div>

                    <!-- Error Screen -->
                    <div
                        v-else
                        class="flex flex-col justify-center text-center"
                    >
                        <img src="https://i.imgur.com/fA5EqV6.png" />

                        <span class="text-xl mt-20">
                            {{ t('metadata.error') }}
                        </span>
                    </div>
                </div>
            </div>
            <div v-else class="p-5">
                <span>{{ t('metadata.label.no.layer') }}</span>
            </div>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
import {
    computed,
    inject,
    onBeforeUnmount,
    onMounted,
    reactive,
    ref,
    watch,
    type PropType
} from 'vue';
import {
    GlobalEvents,
    InstanceAPI,
    LayerInstance,
    type PanelInstance
} from '@/api';
import type { MetadataCache, MetadataPayload, MetadataResult } from './store';
import { useMetadataStore } from './store';

import XSLT_en from './files/xstyle_default_en.xsl?raw';
import XSLT_fr from './files/xstyle_default_fr.xsl?raw';
import { useI18n } from 'vue-i18n';

const metadataStore = useMetadataStore();
const { t } = useI18n();
const iApi = inject('iApi') as InstanceAPI;
const el = ref();

const props = defineProps({
    panel: {
        type: Object as PropType<PanelInstance>,
        required: true
    },
    payload: {
        type: Object as PropType<MetadataPayload>,
        required: true
    }
});

const status = computed(() => metadataStore.status);
const response = computed(() => metadataStore.response);
const layerExists = ref(false); // tracks whether the layer still exists
const cache = reactive<MetadataCache>({});
const handlers = reactive<Array<string>>([]);
const watchers = reactive<Array<Function>>([]);

onMounted(() => {
    loadMetadata();

    // if layer is removed with its metadata open close this panel
    handlers.push(
        iApi.event.on(
            GlobalEvents.LAYER_REMOVE,
            (removedLayer: LayerInstance) => {
                if (props.payload.layer?.uid === removedLayer.uid) {
                    props.panel.close();
                }
            }
        )
    );

    // watch for when metadata is opened for a new layer
    watchers.push(
        watch(
            () => props.payload.layer!.uid,
            (newUid: string, oldUid: string) => {
                // update with new content
                if (newUid !== oldUid) {
                    loadMetadata();
                }
            }
        )
    );
});

onBeforeUnmount(() => {
    // remove all event handlers and watchers
    handlers.forEach(handler => iApi.event.off(handler));
    watchers.forEach(unwatch => unwatch());
});

const loadMetadata = () => {
    // check if layer has not been removed
    layerExists.value =
        props.payload.layer !== undefined && !props.payload.layer!.isRemoved;

    if (props.payload.type === 'xml') {
        loadFromURL(props.payload.url, []).then((r: any) => {
            metadataStore.status = 'success';

            // Append the content to the panel.
            if (r !== null) {
                el.value.childNodes[1].appendChild(r);
            }
        });
    } else if (props.payload.type === 'html') {
        requestContent(props.payload.url).then(r => {
            metadataStore.status = r.status;
            //@ts-ignore
            metadataStore.response = r.response;
        });
    }
};

/**
 * Applies an XSLT to XML, XML is provided but the XSLT is stored in a string constant.
 *
 * @method loadFromURL
 * @param {String} xmlUrl Location of the xml file
 * @param {Array} params an array which never seems to be set and is never used
 * @return {Promise} a promise resolving with an HTML fragment
 */
const loadFromURL = (xmlUrl: string, params: any[]) => {
    let XSLT = iApi.language === 'en' ? XSLT_en : XSLT_fr;

    // Translate headers.
    XSLT = XSLT.replace(/\{\{([\w.]+)\}\}/g, (_: string, tag: string) =>
        t(tag)
    );

    if (!cache[xmlUrl]) {
        return requestContent(xmlUrl).then(xmlData => {
            cache[xmlUrl] = xmlData.response;
            return applyXSLT(cache[xmlUrl], XSLT, params);
        });
    } else {
        return Promise.resolve(applyXSLT(cache[xmlUrl], XSLT, params));
    }
};

/**
 * Transform XML using XSLT
 * @function applyXSLT
 * @private
 * @param {string} xmlString text data of the XML document
 * @param {string} xslString text data of the XSL document
 * in IE)}
 * @param {Array} params a list of paramters to apply to the transform
 * @return {object} transformed document
 */
const applyXSLT = (xmlString: string, xslString: string, params: any[]) => {
    let output = null;

    if (window.XSLTProcessor) {
        const xsltProc = new window.XSLTProcessor();
        const parser = new DOMParser();

        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
        const xslDoc = parser.parseFromString(xslString, 'text/xml');
        xsltProc.importStylesheet(xslDoc);
        // [patched from ECDMP] Add parameters to xsl document (setParameter = Chrome/FF/Others)
        if (params) {
            params.forEach(p =>
                xsltProc.setParameter('', p.key, p.value || '')
            );
        }
        output = xsltProc.transformToFragment(xmlDoc, document);
    }
    // ('-')7 IE retirement (╯°□°）╯︵ ┻━┻

    return output;
};

/**
 * Sends a GET request to the provided URL. Returns a promise containing information received from the webpage.
 * */
const requestContent = (url: string): Promise<MetadataResult> => {
    return new Promise(resolve => {
        const xobj = new XMLHttpRequest();
        xobj.open('GET', url, true);
        xobj.responseType = 'text';
        xobj.onload = () => {
            if (xobj.status === 200) {
                resolve({ status: 'success', response: xobj.response });
            } else {
                resolve({
                    status: 'error',
                    response: 'Could not load results from remote service.'
                });
            }
        };
        xobj.onerror = () => {
            resolve({
                status: 'error',
                response: 'Could not load results from remote service.'
            });
        };
        xobj.send();
    });
};
</script>

<style lang="scss" scoped></style>
