import { RampBasemapConfig } from '../../geo/api';
import { RampConfig } from '../../types';
export declare const useConfigStore: import('pinia').StoreDefinition<"config", import('pinia')._UnwrapAll<Pick<{
    config: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        map: {
            lodSets: {
                id: string;
                lods: {
                    level: number;
                    resolution: number;
                    scale: number;
                }[];
            }[];
            extentSets: {
                id: string;
                default: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number;
                        latestWkid?: number;
                        wkt?: string;
                    };
                };
                full?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number;
                        latestWkid?: number;
                        wkt?: string;
                    };
                } | undefined;
                maximum?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number;
                        latestWkid?: number;
                        wkt?: string;
                    };
                } | undefined;
            }[];
            basemaps: {
                id: string;
                name: string;
                description: string;
                altText: string;
                hideThumbnail?: boolean;
                thumbnailUrl?: string;
                tileSchemaId: string;
                layers: {
                    id: string;
                    layerType: import('../../geo/api').LayerType;
                    url: string;
                    opacity?: number;
                }[];
                attribution?: {
                    text?: {
                        disabled?: boolean;
                        value?: string;
                    } | undefined;
                    logo?: {
                        disabled?: boolean;
                        altText?: string;
                        value?: string;
                        link?: string;
                    } | undefined;
                } | undefined;
                backgroundColour?: string;
            }[];
            tileSchemas: {
                id: string;
                name: string;
                extentSetId: string;
                lodSetId: string;
                thumbnailTileUrls: Array<string>;
                hasNorthPole?: boolean;
                recoveryBasemap?: {
                    basemapId: string;
                    timeout?: number;
                } | undefined;
            }[];
            initialBasemapId: string;
            caption?: {
                mapCoords?: {
                    disabled?: boolean;
                    formatter?: string;
                } | undefined;
                scaleBar?: {
                    disabled?: boolean;
                    imperialScale?: boolean;
                } | undefined;
                langToggle?: {
                    disabled?: boolean;
                } | undefined;
            } | undefined;
            pointZoomScale?: number;
            mapMouseThrottle?: number;
            labelsDefault?: {
                visible?: boolean;
            } | undefined;
            layerTimeDefault?: {
                expectedDrawTime?: number;
                expectedLoadTime?: number;
                maxLoadTime?: number;
            } | undefined;
        };
        layers: {
            id: string;
            layerType: import('../../geo/api').LayerType;
            url: string;
            name?: string;
            state?: {
                visibility?: boolean;
                opacity?: number;
                identify?: boolean;
                hovertips?: boolean;
            } | undefined;
            customRenderer?: any;
            expectedDrawTime?: number;
            expectedLoadTime?: number;
            fieldMetadata?: {
                fieldInfo?: {
                    name: string;
                    alias?: string;
                    trim?: boolean;
                }[] | undefined;
                exclusiveFields?: boolean;
                enforceOrder?: boolean;
            } | undefined;
            nameField?: string;
            tooltipField?: string;
            featureInfoMimeType?: string;
            controls?: Array<import('../../geo/api').LayerControl>;
            disabledControls?: Array<import('../../geo/api').LayerControl>;
            sublayers?: {
                index: number;
                name?: string;
                nameField?: string;
                state?: {
                    visibility?: boolean;
                    opacity?: number;
                    identify?: boolean;
                    hovertips?: boolean;
                } | undefined;
                extent?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number;
                        latestWkid?: number;
                        wkt?: string;
                    };
                } | undefined;
                controls?: Array<import('../../geo/api').LayerControl>;
                disabledControls?: Array<import('../../geo/api').LayerControl>;
                cosmetic?: boolean;
                fieldMetadata?: {
                    fieldInfo?: {
                        name: string;
                        alias?: string;
                        trim?: boolean;
                    }[] | undefined;
                    exclusiveFields?: boolean;
                    enforceOrder?: boolean;
                } | undefined;
                initialFilteredQuery?: string;
                permanentFilteredQuery?: string;
                customRenderer?: any;
                labels?: {
                    visible?: boolean;
                } | undefined;
                fixtures?: any;
                id: string;
                layerType: import('../../geo/api').LayerType;
            }[] | {
                id: string;
                name?: string;
                state?: {
                    visibility?: boolean;
                    opacity?: number;
                    identify?: boolean;
                    hovertips?: boolean;
                } | undefined;
                controls?: Array<import('../../geo/api').LayerControl>;
                disabledControls?: Array<import('../../geo/api').LayerControl>;
                currentStyle?: string;
                styleLegends?: {
                    name: string;
                    url: string;
                }[] | undefined;
                fixtures?: any;
            }[] | undefined;
            extent?: {
                xmin: number;
                xmax: number;
                ymin: number;
                ymax: number;
                spatialReference: {
                    wkid?: number;
                    latestWkid?: number;
                    wkt?: string;
                };
            } | undefined;
            latField?: string;
            longField?: string;
            mouseTolerance?: number;
            touchTolerance?: number;
            metadata?: {
                url: string;
                name?: string;
            } | undefined;
            catalogueUrl?: string;
            fixtures?: any;
            cosmetic?: boolean;
            colour?: string;
            imageFormat?: string;
            initialFilteredQuery?: string;
            permanentFilteredQuery?: string;
            drawOrder?: {
                field?: string;
                arcade?: string;
                ascending: boolean;
            }[] | undefined;
            identifyMode?: import('../../geo/api').LayerIdentifyMode;
            caching?: boolean;
            rawData?: any;
            maxLoadTime?: number;
            labels?: {
                visible?: boolean;
            } | undefined;
        }[];
        fixtures: {
            [key: string]: any;
        };
        panels?: {
            open?: {
                id: string;
                screen?: string;
                pin?: boolean;
            }[] | undefined;
            reorderable?: boolean;
        } | undefined;
        system?: {
            proxyUrl?: string;
            animate?: boolean;
            exposeOid?: boolean;
            exposeMeasurements?: boolean;
            zoomIcon?: string;
            scrollToInstance?: boolean;
            suppressNumberLocalization?: boolean;
        } | undefined;
    }, RampConfig | {
        map: {
            lodSets: {
                id: string;
                lods: {
                    level: number;
                    resolution: number;
                    scale: number;
                }[];
            }[];
            extentSets: {
                id: string;
                default: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number;
                        latestWkid?: number;
                        wkt?: string;
                    };
                };
                full?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number;
                        latestWkid?: number;
                        wkt?: string;
                    };
                } | undefined;
                maximum?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number;
                        latestWkid?: number;
                        wkt?: string;
                    };
                } | undefined;
            }[];
            basemaps: {
                id: string;
                name: string;
                description: string;
                altText: string;
                hideThumbnail?: boolean;
                thumbnailUrl?: string;
                tileSchemaId: string;
                layers: {
                    id: string;
                    layerType: import('../../geo/api').LayerType;
                    url: string;
                    opacity?: number;
                }[];
                attribution?: {
                    text?: {
                        disabled?: boolean;
                        value?: string;
                    } | undefined;
                    logo?: {
                        disabled?: boolean;
                        altText?: string;
                        value?: string;
                        link?: string;
                    } | undefined;
                } | undefined;
                backgroundColour?: string;
            }[];
            tileSchemas: {
                id: string;
                name: string;
                extentSetId: string;
                lodSetId: string;
                thumbnailTileUrls: Array<string>;
                hasNorthPole?: boolean;
                recoveryBasemap?: {
                    basemapId: string;
                    timeout?: number;
                } | undefined;
            }[];
            initialBasemapId: string;
            caption?: {
                mapCoords?: {
                    disabled?: boolean;
                    formatter?: string;
                } | undefined;
                scaleBar?: {
                    disabled?: boolean;
                    imperialScale?: boolean;
                } | undefined;
                langToggle?: {
                    disabled?: boolean;
                } | undefined;
            } | undefined;
            pointZoomScale?: number;
            mapMouseThrottle?: number;
            labelsDefault?: {
                visible?: boolean;
            } | undefined;
            layerTimeDefault?: {
                expectedDrawTime?: number;
                expectedLoadTime?: number;
                maxLoadTime?: number;
            } | undefined;
        };
        layers: {
            id: string;
            layerType: import('../../geo/api').LayerType;
            url: string;
            name?: string;
            state?: {
                visibility?: boolean;
                opacity?: number;
                identify?: boolean;
                hovertips?: boolean;
            } | undefined;
            customRenderer?: any;
            expectedDrawTime?: number;
            expectedLoadTime?: number;
            fieldMetadata?: {
                fieldInfo?: {
                    name: string;
                    alias?: string;
                    trim?: boolean;
                }[] | undefined;
                exclusiveFields?: boolean;
                enforceOrder?: boolean;
            } | undefined;
            nameField?: string;
            tooltipField?: string;
            featureInfoMimeType?: string;
            controls?: Array<import('../../geo/api').LayerControl>;
            disabledControls?: Array<import('../../geo/api').LayerControl>;
            sublayers?: {
                index: number;
                name?: string;
                nameField?: string;
                state?: {
                    visibility?: boolean;
                    opacity?: number;
                    identify?: boolean;
                    hovertips?: boolean;
                } | undefined;
                extent?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number;
                        latestWkid?: number;
                        wkt?: string;
                    };
                } | undefined;
                controls?: Array<import('../../geo/api').LayerControl>;
                disabledControls?: Array<import('../../geo/api').LayerControl>;
                cosmetic?: boolean;
                fieldMetadata?: {
                    fieldInfo?: {
                        name: string;
                        alias?: string;
                        trim?: boolean;
                    }[] | undefined;
                    exclusiveFields?: boolean;
                    enforceOrder?: boolean;
                } | undefined;
                initialFilteredQuery?: string;
                permanentFilteredQuery?: string;
                customRenderer?: any;
                labels?: {
                    visible?: boolean;
                } | undefined;
                fixtures?: any;
                id: string;
                layerType: import('../../geo/api').LayerType;
            }[] | {
                id: string;
                name?: string;
                state?: {
                    visibility?: boolean;
                    opacity?: number;
                    identify?: boolean;
                    hovertips?: boolean;
                } | undefined;
                controls?: Array<import('../../geo/api').LayerControl>;
                disabledControls?: Array<import('../../geo/api').LayerControl>;
                currentStyle?: string;
                styleLegends?: {
                    name: string;
                    url: string;
                }[] | undefined;
                fixtures?: any;
            }[] | undefined;
            extent?: {
                xmin: number;
                xmax: number;
                ymin: number;
                ymax: number;
                spatialReference: {
                    wkid?: number;
                    latestWkid?: number;
                    wkt?: string;
                };
            } | undefined;
            latField?: string;
            longField?: string;
            mouseTolerance?: number;
            touchTolerance?: number;
            metadata?: {
                url: string;
                name?: string;
            } | undefined;
            catalogueUrl?: string;
            fixtures?: any;
            cosmetic?: boolean;
            colour?: string;
            imageFormat?: string;
            initialFilteredQuery?: string;
            permanentFilteredQuery?: string;
            drawOrder?: {
                field?: string;
                arcade?: string;
                ascending: boolean;
            }[] | undefined;
            identifyMode?: import('../../geo/api').LayerIdentifyMode;
            caching?: boolean;
            rawData?: any;
            maxLoadTime?: number;
            labels?: {
                visible?: boolean;
            } | undefined;
        }[];
        fixtures: {
            [key: string]: any;
        };
        panels?: {
            open?: {
                id: string;
                screen?: string;
                pin?: boolean;
            }[] | undefined;
            reorderable?: boolean;
        } | undefined;
        system?: {
            proxyUrl?: string;
            animate?: boolean;
            exposeOid?: boolean;
            exposeMeasurements?: boolean;
            zoomIcon?: string;
            scrollToInstance?: boolean;
            suppressNumberLocalization?: boolean;
        } | undefined;
    }>;
    startingFixtures: import('../../../vue/dist/vue.esm-bundler.js').Ref<string[], string[]>;
    activeBasemapConfig: import('../../../vue/dist/vue.esm-bundler.js').Ref<RampBasemapConfig | undefined, RampBasemapConfig | undefined>;
    registeredConfigs: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        [key: string]: RampConfig;
    }, {
        [key: string]: RampConfig;
    }>;
    registeredLangs: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        [key: string]: string;
    }, {
        [key: string]: string;
    }>;
    getActiveConfig: (lang: string) => RampConfig;
    newConfig: (newConfig: RampConfig) => void;
    registerConfig: (configInfo: any) => void;
}, "config" | "startingFixtures" | "activeBasemapConfig" | "registeredConfigs" | "registeredLangs">>, Pick<{
    config: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        map: {
            lodSets: {
                id: string;
                lods: {
                    level: number;
                    resolution: number;
                    scale: number;
                }[];
            }[];
            extentSets: {
                id: string;
                default: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number;
                        latestWkid?: number;
                        wkt?: string;
                    };
                };
                full?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number;
                        latestWkid?: number;
                        wkt?: string;
                    };
                } | undefined;
                maximum?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number;
                        latestWkid?: number;
                        wkt?: string;
                    };
                } | undefined;
            }[];
            basemaps: {
                id: string;
                name: string;
                description: string;
                altText: string;
                hideThumbnail?: boolean;
                thumbnailUrl?: string;
                tileSchemaId: string;
                layers: {
                    id: string;
                    layerType: import('../../geo/api').LayerType;
                    url: string;
                    opacity?: number;
                }[];
                attribution?: {
                    text?: {
                        disabled?: boolean;
                        value?: string;
                    } | undefined;
                    logo?: {
                        disabled?: boolean;
                        altText?: string;
                        value?: string;
                        link?: string;
                    } | undefined;
                } | undefined;
                backgroundColour?: string;
            }[];
            tileSchemas: {
                id: string;
                name: string;
                extentSetId: string;
                lodSetId: string;
                thumbnailTileUrls: Array<string>;
                hasNorthPole?: boolean;
                recoveryBasemap?: {
                    basemapId: string;
                    timeout?: number;
                } | undefined;
            }[];
            initialBasemapId: string;
            caption?: {
                mapCoords?: {
                    disabled?: boolean;
                    formatter?: string;
                } | undefined;
                scaleBar?: {
                    disabled?: boolean;
                    imperialScale?: boolean;
                } | undefined;
                langToggle?: {
                    disabled?: boolean;
                } | undefined;
            } | undefined;
            pointZoomScale?: number;
            mapMouseThrottle?: number;
            labelsDefault?: {
                visible?: boolean;
            } | undefined;
            layerTimeDefault?: {
                expectedDrawTime?: number;
                expectedLoadTime?: number;
                maxLoadTime?: number;
            } | undefined;
        };
        layers: {
            id: string;
            layerType: import('../../geo/api').LayerType;
            url: string;
            name?: string;
            state?: {
                visibility?: boolean;
                opacity?: number;
                identify?: boolean;
                hovertips?: boolean;
            } | undefined;
            customRenderer?: any;
            expectedDrawTime?: number;
            expectedLoadTime?: number;
            fieldMetadata?: {
                fieldInfo?: {
                    name: string;
                    alias?: string;
                    trim?: boolean;
                }[] | undefined;
                exclusiveFields?: boolean;
                enforceOrder?: boolean;
            } | undefined;
            nameField?: string;
            tooltipField?: string;
            featureInfoMimeType?: string;
            controls?: Array<import('../../geo/api').LayerControl>;
            disabledControls?: Array<import('../../geo/api').LayerControl>;
            sublayers?: {
                index: number;
                name?: string;
                nameField?: string;
                state?: {
                    visibility?: boolean;
                    opacity?: number;
                    identify?: boolean;
                    hovertips?: boolean;
                } | undefined;
                extent?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number;
                        latestWkid?: number;
                        wkt?: string;
                    };
                } | undefined;
                controls?: Array<import('../../geo/api').LayerControl>;
                disabledControls?: Array<import('../../geo/api').LayerControl>;
                cosmetic?: boolean;
                fieldMetadata?: {
                    fieldInfo?: {
                        name: string;
                        alias?: string;
                        trim?: boolean;
                    }[] | undefined;
                    exclusiveFields?: boolean;
                    enforceOrder?: boolean;
                } | undefined;
                initialFilteredQuery?: string;
                permanentFilteredQuery?: string;
                customRenderer?: any;
                labels?: {
                    visible?: boolean;
                } | undefined;
                fixtures?: any;
                id: string;
                layerType: import('../../geo/api').LayerType;
            }[] | {
                id: string;
                name?: string;
                state?: {
                    visibility?: boolean;
                    opacity?: number;
                    identify?: boolean;
                    hovertips?: boolean;
                } | undefined;
                controls?: Array<import('../../geo/api').LayerControl>;
                disabledControls?: Array<import('../../geo/api').LayerControl>;
                currentStyle?: string;
                styleLegends?: {
                    name: string;
                    url: string;
                }[] | undefined;
                fixtures?: any;
            }[] | undefined;
            extent?: {
                xmin: number;
                xmax: number;
                ymin: number;
                ymax: number;
                spatialReference: {
                    wkid?: number;
                    latestWkid?: number;
                    wkt?: string;
                };
            } | undefined;
            latField?: string;
            longField?: string;
            mouseTolerance?: number;
            touchTolerance?: number;
            metadata?: {
                url: string;
                name?: string;
            } | undefined;
            catalogueUrl?: string;
            fixtures?: any;
            cosmetic?: boolean;
            colour?: string;
            imageFormat?: string;
            initialFilteredQuery?: string;
            permanentFilteredQuery?: string;
            drawOrder?: {
                field?: string;
                arcade?: string;
                ascending: boolean;
            }[] | undefined;
            identifyMode?: import('../../geo/api').LayerIdentifyMode;
            caching?: boolean;
            rawData?: any;
            maxLoadTime?: number;
            labels?: {
                visible?: boolean;
            } | undefined;
        }[];
        fixtures: {
            [key: string]: any;
        };
        panels?: {
            open?: {
                id: string;
                screen?: string;
                pin?: boolean;
            }[] | undefined;
            reorderable?: boolean;
        } | undefined;
        system?: {
            proxyUrl?: string;
            animate?: boolean;
            exposeOid?: boolean;
            exposeMeasurements?: boolean;
            zoomIcon?: string;
            scrollToInstance?: boolean;
            suppressNumberLocalization?: boolean;
        } | undefined;
    }, RampConfig | {
        map: {
            lodSets: {
                id: string;
                lods: {
                    level: number;
                    resolution: number;
                    scale: number;
                }[];
            }[];
            extentSets: {
                id: string;
                default: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number;
                        latestWkid?: number;
                        wkt?: string;
                    };
                };
                full?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number;
                        latestWkid?: number;
                        wkt?: string;
                    };
                } | undefined;
                maximum?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number;
                        latestWkid?: number;
                        wkt?: string;
                    };
                } | undefined;
            }[];
            basemaps: {
                id: string;
                name: string;
                description: string;
                altText: string;
                hideThumbnail?: boolean;
                thumbnailUrl?: string;
                tileSchemaId: string;
                layers: {
                    id: string;
                    layerType: import('../../geo/api').LayerType;
                    url: string;
                    opacity?: number;
                }[];
                attribution?: {
                    text?: {
                        disabled?: boolean;
                        value?: string;
                    } | undefined;
                    logo?: {
                        disabled?: boolean;
                        altText?: string;
                        value?: string;
                        link?: string;
                    } | undefined;
                } | undefined;
                backgroundColour?: string;
            }[];
            tileSchemas: {
                id: string;
                name: string;
                extentSetId: string;
                lodSetId: string;
                thumbnailTileUrls: Array<string>;
                hasNorthPole?: boolean;
                recoveryBasemap?: {
                    basemapId: string;
                    timeout?: number;
                } | undefined;
            }[];
            initialBasemapId: string;
            caption?: {
                mapCoords?: {
                    disabled?: boolean;
                    formatter?: string;
                } | undefined;
                scaleBar?: {
                    disabled?: boolean;
                    imperialScale?: boolean;
                } | undefined;
                langToggle?: {
                    disabled?: boolean;
                } | undefined;
            } | undefined;
            pointZoomScale?: number;
            mapMouseThrottle?: number;
            labelsDefault?: {
                visible?: boolean;
            } | undefined;
            layerTimeDefault?: {
                expectedDrawTime?: number;
                expectedLoadTime?: number;
                maxLoadTime?: number;
            } | undefined;
        };
        layers: {
            id: string;
            layerType: import('../../geo/api').LayerType;
            url: string;
            name?: string;
            state?: {
                visibility?: boolean;
                opacity?: number;
                identify?: boolean;
                hovertips?: boolean;
            } | undefined;
            customRenderer?: any;
            expectedDrawTime?: number;
            expectedLoadTime?: number;
            fieldMetadata?: {
                fieldInfo?: {
                    name: string;
                    alias?: string;
                    trim?: boolean;
                }[] | undefined;
                exclusiveFields?: boolean;
                enforceOrder?: boolean;
            } | undefined;
            nameField?: string;
            tooltipField?: string;
            featureInfoMimeType?: string;
            controls?: Array<import('../../geo/api').LayerControl>;
            disabledControls?: Array<import('../../geo/api').LayerControl>;
            sublayers?: {
                index: number;
                name?: string;
                nameField?: string;
                state?: {
                    visibility?: boolean;
                    opacity?: number;
                    identify?: boolean;
                    hovertips?: boolean;
                } | undefined;
                extent?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number;
                        latestWkid?: number;
                        wkt?: string;
                    };
                } | undefined;
                controls?: Array<import('../../geo/api').LayerControl>;
                disabledControls?: Array<import('../../geo/api').LayerControl>;
                cosmetic?: boolean;
                fieldMetadata?: {
                    fieldInfo?: {
                        name: string;
                        alias?: string;
                        trim?: boolean;
                    }[] | undefined;
                    exclusiveFields?: boolean;
                    enforceOrder?: boolean;
                } | undefined;
                initialFilteredQuery?: string;
                permanentFilteredQuery?: string;
                customRenderer?: any;
                labels?: {
                    visible?: boolean;
                } | undefined;
                fixtures?: any;
                id: string;
                layerType: import('../../geo/api').LayerType;
            }[] | {
                id: string;
                name?: string;
                state?: {
                    visibility?: boolean;
                    opacity?: number;
                    identify?: boolean;
                    hovertips?: boolean;
                } | undefined;
                controls?: Array<import('../../geo/api').LayerControl>;
                disabledControls?: Array<import('../../geo/api').LayerControl>;
                currentStyle?: string;
                styleLegends?: {
                    name: string;
                    url: string;
                }[] | undefined;
                fixtures?: any;
            }[] | undefined;
            extent?: {
                xmin: number;
                xmax: number;
                ymin: number;
                ymax: number;
                spatialReference: {
                    wkid?: number;
                    latestWkid?: number;
                    wkt?: string;
                };
            } | undefined;
            latField?: string;
            longField?: string;
            mouseTolerance?: number;
            touchTolerance?: number;
            metadata?: {
                url: string;
                name?: string;
            } | undefined;
            catalogueUrl?: string;
            fixtures?: any;
            cosmetic?: boolean;
            colour?: string;
            imageFormat?: string;
            initialFilteredQuery?: string;
            permanentFilteredQuery?: string;
            drawOrder?: {
                field?: string;
                arcade?: string;
                ascending: boolean;
            }[] | undefined;
            identifyMode?: import('../../geo/api').LayerIdentifyMode;
            caching?: boolean;
            rawData?: any;
            maxLoadTime?: number;
            labels?: {
                visible?: boolean;
            } | undefined;
        }[];
        fixtures: {
            [key: string]: any;
        };
        panels?: {
            open?: {
                id: string;
                screen?: string;
                pin?: boolean;
            }[] | undefined;
            reorderable?: boolean;
        } | undefined;
        system?: {
            proxyUrl?: string;
            animate?: boolean;
            exposeOid?: boolean;
            exposeMeasurements?: boolean;
            zoomIcon?: string;
            scrollToInstance?: boolean;
            suppressNumberLocalization?: boolean;
        } | undefined;
    }>;
    startingFixtures: import('../../../vue/dist/vue.esm-bundler.js').Ref<string[], string[]>;
    activeBasemapConfig: import('../../../vue/dist/vue.esm-bundler.js').Ref<RampBasemapConfig | undefined, RampBasemapConfig | undefined>;
    registeredConfigs: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        [key: string]: RampConfig;
    }, {
        [key: string]: RampConfig;
    }>;
    registeredLangs: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        [key: string]: string;
    }, {
        [key: string]: string;
    }>;
    getActiveConfig: (lang: string) => RampConfig;
    newConfig: (newConfig: RampConfig) => void;
    registerConfig: (configInfo: any) => void;
}, never>, Pick<{
    config: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        map: {
            lodSets: {
                id: string;
                lods: {
                    level: number;
                    resolution: number;
                    scale: number;
                }[];
            }[];
            extentSets: {
                id: string;
                default: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number;
                        latestWkid?: number;
                        wkt?: string;
                    };
                };
                full?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number;
                        latestWkid?: number;
                        wkt?: string;
                    };
                } | undefined;
                maximum?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number;
                        latestWkid?: number;
                        wkt?: string;
                    };
                } | undefined;
            }[];
            basemaps: {
                id: string;
                name: string;
                description: string;
                altText: string;
                hideThumbnail?: boolean;
                thumbnailUrl?: string;
                tileSchemaId: string;
                layers: {
                    id: string;
                    layerType: import('../../geo/api').LayerType;
                    url: string;
                    opacity?: number;
                }[];
                attribution?: {
                    text?: {
                        disabled?: boolean;
                        value?: string;
                    } | undefined;
                    logo?: {
                        disabled?: boolean;
                        altText?: string;
                        value?: string;
                        link?: string;
                    } | undefined;
                } | undefined;
                backgroundColour?: string;
            }[];
            tileSchemas: {
                id: string;
                name: string;
                extentSetId: string;
                lodSetId: string;
                thumbnailTileUrls: Array<string>;
                hasNorthPole?: boolean;
                recoveryBasemap?: {
                    basemapId: string;
                    timeout?: number;
                } | undefined;
            }[];
            initialBasemapId: string;
            caption?: {
                mapCoords?: {
                    disabled?: boolean;
                    formatter?: string;
                } | undefined;
                scaleBar?: {
                    disabled?: boolean;
                    imperialScale?: boolean;
                } | undefined;
                langToggle?: {
                    disabled?: boolean;
                } | undefined;
            } | undefined;
            pointZoomScale?: number;
            mapMouseThrottle?: number;
            labelsDefault?: {
                visible?: boolean;
            } | undefined;
            layerTimeDefault?: {
                expectedDrawTime?: number;
                expectedLoadTime?: number;
                maxLoadTime?: number;
            } | undefined;
        };
        layers: {
            id: string;
            layerType: import('../../geo/api').LayerType;
            url: string;
            name?: string;
            state?: {
                visibility?: boolean;
                opacity?: number;
                identify?: boolean;
                hovertips?: boolean;
            } | undefined;
            customRenderer?: any;
            expectedDrawTime?: number;
            expectedLoadTime?: number;
            fieldMetadata?: {
                fieldInfo?: {
                    name: string;
                    alias?: string;
                    trim?: boolean;
                }[] | undefined;
                exclusiveFields?: boolean;
                enforceOrder?: boolean;
            } | undefined;
            nameField?: string;
            tooltipField?: string;
            featureInfoMimeType?: string;
            controls?: Array<import('../../geo/api').LayerControl>;
            disabledControls?: Array<import('../../geo/api').LayerControl>;
            sublayers?: {
                index: number;
                name?: string;
                nameField?: string;
                state?: {
                    visibility?: boolean;
                    opacity?: number;
                    identify?: boolean;
                    hovertips?: boolean;
                } | undefined;
                extent?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number;
                        latestWkid?: number;
                        wkt?: string;
                    };
                } | undefined;
                controls?: Array<import('../../geo/api').LayerControl>;
                disabledControls?: Array<import('../../geo/api').LayerControl>;
                cosmetic?: boolean;
                fieldMetadata?: {
                    fieldInfo?: {
                        name: string;
                        alias?: string;
                        trim?: boolean;
                    }[] | undefined;
                    exclusiveFields?: boolean;
                    enforceOrder?: boolean;
                } | undefined;
                initialFilteredQuery?: string;
                permanentFilteredQuery?: string;
                customRenderer?: any;
                labels?: {
                    visible?: boolean;
                } | undefined;
                fixtures?: any;
                id: string;
                layerType: import('../../geo/api').LayerType;
            }[] | {
                id: string;
                name?: string;
                state?: {
                    visibility?: boolean;
                    opacity?: number;
                    identify?: boolean;
                    hovertips?: boolean;
                } | undefined;
                controls?: Array<import('../../geo/api').LayerControl>;
                disabledControls?: Array<import('../../geo/api').LayerControl>;
                currentStyle?: string;
                styleLegends?: {
                    name: string;
                    url: string;
                }[] | undefined;
                fixtures?: any;
            }[] | undefined;
            extent?: {
                xmin: number;
                xmax: number;
                ymin: number;
                ymax: number;
                spatialReference: {
                    wkid?: number;
                    latestWkid?: number;
                    wkt?: string;
                };
            } | undefined;
            latField?: string;
            longField?: string;
            mouseTolerance?: number;
            touchTolerance?: number;
            metadata?: {
                url: string;
                name?: string;
            } | undefined;
            catalogueUrl?: string;
            fixtures?: any;
            cosmetic?: boolean;
            colour?: string;
            imageFormat?: string;
            initialFilteredQuery?: string;
            permanentFilteredQuery?: string;
            drawOrder?: {
                field?: string;
                arcade?: string;
                ascending: boolean;
            }[] | undefined;
            identifyMode?: import('../../geo/api').LayerIdentifyMode;
            caching?: boolean;
            rawData?: any;
            maxLoadTime?: number;
            labels?: {
                visible?: boolean;
            } | undefined;
        }[];
        fixtures: {
            [key: string]: any;
        };
        panels?: {
            open?: {
                id: string;
                screen?: string;
                pin?: boolean;
            }[] | undefined;
            reorderable?: boolean;
        } | undefined;
        system?: {
            proxyUrl?: string;
            animate?: boolean;
            exposeOid?: boolean;
            exposeMeasurements?: boolean;
            zoomIcon?: string;
            scrollToInstance?: boolean;
            suppressNumberLocalization?: boolean;
        } | undefined;
    }, RampConfig | {
        map: {
            lodSets: {
                id: string;
                lods: {
                    level: number;
                    resolution: number;
                    scale: number;
                }[];
            }[];
            extentSets: {
                id: string;
                default: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number;
                        latestWkid?: number;
                        wkt?: string;
                    };
                };
                full?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number;
                        latestWkid?: number;
                        wkt?: string;
                    };
                } | undefined;
                maximum?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number;
                        latestWkid?: number;
                        wkt?: string;
                    };
                } | undefined;
            }[];
            basemaps: {
                id: string;
                name: string;
                description: string;
                altText: string;
                hideThumbnail?: boolean;
                thumbnailUrl?: string;
                tileSchemaId: string;
                layers: {
                    id: string;
                    layerType: import('../../geo/api').LayerType;
                    url: string;
                    opacity?: number;
                }[];
                attribution?: {
                    text?: {
                        disabled?: boolean;
                        value?: string;
                    } | undefined;
                    logo?: {
                        disabled?: boolean;
                        altText?: string;
                        value?: string;
                        link?: string;
                    } | undefined;
                } | undefined;
                backgroundColour?: string;
            }[];
            tileSchemas: {
                id: string;
                name: string;
                extentSetId: string;
                lodSetId: string;
                thumbnailTileUrls: Array<string>;
                hasNorthPole?: boolean;
                recoveryBasemap?: {
                    basemapId: string;
                    timeout?: number;
                } | undefined;
            }[];
            initialBasemapId: string;
            caption?: {
                mapCoords?: {
                    disabled?: boolean;
                    formatter?: string;
                } | undefined;
                scaleBar?: {
                    disabled?: boolean;
                    imperialScale?: boolean;
                } | undefined;
                langToggle?: {
                    disabled?: boolean;
                } | undefined;
            } | undefined;
            pointZoomScale?: number;
            mapMouseThrottle?: number;
            labelsDefault?: {
                visible?: boolean;
            } | undefined;
            layerTimeDefault?: {
                expectedDrawTime?: number;
                expectedLoadTime?: number;
                maxLoadTime?: number;
            } | undefined;
        };
        layers: {
            id: string;
            layerType: import('../../geo/api').LayerType;
            url: string;
            name?: string;
            state?: {
                visibility?: boolean;
                opacity?: number;
                identify?: boolean;
                hovertips?: boolean;
            } | undefined;
            customRenderer?: any;
            expectedDrawTime?: number;
            expectedLoadTime?: number;
            fieldMetadata?: {
                fieldInfo?: {
                    name: string;
                    alias?: string;
                    trim?: boolean;
                }[] | undefined;
                exclusiveFields?: boolean;
                enforceOrder?: boolean;
            } | undefined;
            nameField?: string;
            tooltipField?: string;
            featureInfoMimeType?: string;
            controls?: Array<import('../../geo/api').LayerControl>;
            disabledControls?: Array<import('../../geo/api').LayerControl>;
            sublayers?: {
                index: number;
                name?: string;
                nameField?: string;
                state?: {
                    visibility?: boolean;
                    opacity?: number;
                    identify?: boolean;
                    hovertips?: boolean;
                } | undefined;
                extent?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number;
                        latestWkid?: number;
                        wkt?: string;
                    };
                } | undefined;
                controls?: Array<import('../../geo/api').LayerControl>;
                disabledControls?: Array<import('../../geo/api').LayerControl>;
                cosmetic?: boolean;
                fieldMetadata?: {
                    fieldInfo?: {
                        name: string;
                        alias?: string;
                        trim?: boolean;
                    }[] | undefined;
                    exclusiveFields?: boolean;
                    enforceOrder?: boolean;
                } | undefined;
                initialFilteredQuery?: string;
                permanentFilteredQuery?: string;
                customRenderer?: any;
                labels?: {
                    visible?: boolean;
                } | undefined;
                fixtures?: any;
                id: string;
                layerType: import('../../geo/api').LayerType;
            }[] | {
                id: string;
                name?: string;
                state?: {
                    visibility?: boolean;
                    opacity?: number;
                    identify?: boolean;
                    hovertips?: boolean;
                } | undefined;
                controls?: Array<import('../../geo/api').LayerControl>;
                disabledControls?: Array<import('../../geo/api').LayerControl>;
                currentStyle?: string;
                styleLegends?: {
                    name: string;
                    url: string;
                }[] | undefined;
                fixtures?: any;
            }[] | undefined;
            extent?: {
                xmin: number;
                xmax: number;
                ymin: number;
                ymax: number;
                spatialReference: {
                    wkid?: number;
                    latestWkid?: number;
                    wkt?: string;
                };
            } | undefined;
            latField?: string;
            longField?: string;
            mouseTolerance?: number;
            touchTolerance?: number;
            metadata?: {
                url: string;
                name?: string;
            } | undefined;
            catalogueUrl?: string;
            fixtures?: any;
            cosmetic?: boolean;
            colour?: string;
            imageFormat?: string;
            initialFilteredQuery?: string;
            permanentFilteredQuery?: string;
            drawOrder?: {
                field?: string;
                arcade?: string;
                ascending: boolean;
            }[] | undefined;
            identifyMode?: import('../../geo/api').LayerIdentifyMode;
            caching?: boolean;
            rawData?: any;
            maxLoadTime?: number;
            labels?: {
                visible?: boolean;
            } | undefined;
        }[];
        fixtures: {
            [key: string]: any;
        };
        panels?: {
            open?: {
                id: string;
                screen?: string;
                pin?: boolean;
            }[] | undefined;
            reorderable?: boolean;
        } | undefined;
        system?: {
            proxyUrl?: string;
            animate?: boolean;
            exposeOid?: boolean;
            exposeMeasurements?: boolean;
            zoomIcon?: string;
            scrollToInstance?: boolean;
            suppressNumberLocalization?: boolean;
        } | undefined;
    }>;
    startingFixtures: import('../../../vue/dist/vue.esm-bundler.js').Ref<string[], string[]>;
    activeBasemapConfig: import('../../../vue/dist/vue.esm-bundler.js').Ref<RampBasemapConfig | undefined, RampBasemapConfig | undefined>;
    registeredConfigs: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        [key: string]: RampConfig;
    }, {
        [key: string]: RampConfig;
    }>;
    registeredLangs: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        [key: string]: string;
    }, {
        [key: string]: string;
    }>;
    getActiveConfig: (lang: string) => RampConfig;
    newConfig: (newConfig: RampConfig) => void;
    registerConfig: (configInfo: any) => void;
}, "getActiveConfig" | "newConfig" | "registerConfig">>;
