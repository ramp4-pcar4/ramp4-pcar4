<template>
    <panel-screen :panel="panel">
        <template #header>
            {{ $t('metadata.title') }}: {{ payload.layerName }}
        </template>

        <template #content>
            <div v-if="layerExists">
                <div class="flex justify-center">
                    <!-- Loading Screen -->
                    <div
                        v-if="status == 'loading'"
                        class="flex flex-col justify-center text-center"
                    >
                        {{ $t('metadata.loading') }}
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
                            {{ $t('metadata.error') }}
                        </span>
                    </div>
                </div>
            </div>
            <div v-else class="p-5">
                <span>{{ $t('metadata.label.no.layer') }}</span>
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { GlobalEvents, LayerInstance, type PanelInstance } from '@/api';
import {
    MetadataStore,
    type MetadataPayload,
    type MetadataResult,
    type MetadataCache
} from './store';

import XSLT_en from './files/xstyle_default_en.xsl?raw';
import XSLT_fr from './files/xstyle_default_fr.xsl?raw';

export default defineComponent({
    name: 'MetadataScreenV',
    props: {
        panel: {
            type: Object as PropType<PanelInstance>,
            required: true
        },
        payload: {
            type: Object as PropType<MetadataPayload>,
            required: true
        }
    },
    data() {
        return {
            status: this.get(MetadataStore.status),
            response: this.get(MetadataStore.response),
            layerExists: false, // tracks whether the layer still exists
            cache: {} as MetadataCache,
            handlers: [] as Array<string>,
            watchers: [] as Array<Function>
        };
    },
    mounted() {
        this.loadMetadata();

        // if layer is removed with its metadata open close this panel
        this.handlers.push(
            this.$iApi.event.on(
                GlobalEvents.LAYER_REMOVE,
                (removedLayer: LayerInstance) => {
                    if (this.payload.layer?.uid === removedLayer.uid) {
                        this.panel.close();
                    }
                }
            )
        );

        // watch for when metadata is opened for a new layer
        this.watchers.push(
            this.$watch(
                'payload.layer.uid',
                (newUid: string, oldUid: string) => {
                    // update with new content
                    if (newUid !== oldUid) {
                        this.loadMetadata();
                    }
                }
            )
        );
    },
    beforeUnmount() {
        // remove all event handlers and watchers
        this.handlers.forEach(handler => this.$iApi.event.off(handler));
        this.watchers.forEach(unwatch => unwatch());
    },
    methods: {
        /**
         * Load metadata content for new payload.
         */
        loadMetadata() {
            // check if layer has not been removed
            this.layerExists =
                this.payload.layer !== undefined &&
                !this.payload.layer!.isRemoved;

            if (this.payload.type === 'xml') {
                this.loadFromURL(this.payload.url, []).then(r => {
                    this.$iApi.$vApp.$store.set(
                        MetadataStore.status,
                        'success'
                    );

                    // Append the content to the panel.
                    if (r !== null) {
                        this.$el.childNodes[1].appendChild(r);
                    }
                });
            } else if (this.payload.type === 'html') {
                this.requestContent(this.payload.url).then(r => {
                    this.$iApi.$vApp.$store.set(MetadataStore.status, r.status);
                    this.$iApi.$vApp.$store.set(
                        MetadataStore.response,
                        r.response
                    );
                });
            }
        },

        /**
         * Applies an XSLT to XML, XML is provided but the XSLT is stored in a string constant.
         *
         * @method loadFromURL
         * @param {String} xmlUrl Location of the xml file
         * @param {Array} params an array which never seems to be set and is never used
         * @return {Promise} a promise resolving with an HTML fragment
         */
        loadFromURL(xmlUrl: string, params: any[]) {
            let XSLT = this.$iApi.language === 'en' ? XSLT_en : XSLT_fr;

            // Translate headers.
            XSLT = XSLT.replace(/\{\{([\w.]+)\}\}/g, (_: string, tag: string) =>
                this.$t(tag)
            );

            if (!this.cache[xmlUrl]) {
                return this.requestContent(xmlUrl).then(xmlData => {
                    this.cache[xmlUrl] = xmlData.response;
                    return this.applyXSLT(this.cache[xmlUrl], XSLT, params);
                });
            } else {
                return Promise.resolve(
                    this.applyXSLT(this.cache[xmlUrl], XSLT, params)
                );
            }
        },

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
        applyXSLT(xmlString: string, xslString: string, params: any[]) {
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
        },

        /**
         * Sends a GET request to the provided URL. Returns a promise containing information received from the webpage.
         * */
        requestContent(url: string): Promise<MetadataResult> {
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
                            response:
                                'Could not load results from remote service.'
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
        }
    }
});
</script>

<style lang="scss" scoped></style>
