import type { RampBasemapConfig } from '@/geo/api';
import type { RampConfig } from '@/types';
export declare const useConfigStore: import("pinia").StoreDefinition<"config", import("pinia")._UnwrapAll<Pick<{
    config: import("vue").Ref<{
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
                        wkid?: number | undefined;
                        latestWkid?: number | undefined;
                        wkt?: string | undefined;
                    };
                };
                full?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number | undefined;
                        latestWkid?: number | undefined;
                        wkt?: string | undefined;
                    };
                } | undefined;
                maximum?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number | undefined;
                        latestWkid?: number | undefined;
                        wkt?: string | undefined;
                    };
                } | undefined;
            }[];
            basemaps: {
                id: string;
                name: string;
                description: string;
                altText: string;
                hideThumbnail?: boolean | undefined;
                thumbnailUrl?: string | undefined;
                tileSchemaId: string;
                layers: {
                    id: string;
                    layerType: import("@/geo/api").LayerType;
                    url: string;
                    opacity?: number | undefined;
                }[];
                attribution?: {
                    text: {
                        disabled?: boolean | undefined;
                        value?: string | undefined;
                    };
                    logo: {
                        disabled?: boolean | undefined;
                        altText?: string | undefined;
                        value?: string | undefined;
                        link?: string | undefined;
                    };
                } | undefined;
                backgroundColour?: string | undefined;
            }[];
            tileSchemas: {
                id: string;
                name: string;
                extentSetId: string;
                lodSetId: string;
                thumbnailTileUrls: string[];
                hasNorthPole?: boolean | undefined;
                recoveryBasemap?: {
                    basemapId: string;
                    timeout?: number | undefined;
                } | undefined;
            }[];
            initialBasemapId: string;
            caption?: {
                mapCoords: {
                    disabled?: boolean | undefined;
                    formatter?: string | undefined;
                };
                scaleBar: {
                    disabled?: boolean | undefined;
                    imperialScale?: boolean | undefined;
                };
                langToggle: {
                    disabled?: boolean | undefined;
                };
            } | undefined;
            pointZoomScale?: number | undefined;
            mapMouseThrottle?: number | undefined;
        };
        layers: {
            id: string;
            layerType: import("@/geo/api").LayerType;
            url: string;
            name?: string | undefined;
            state?: {
                visibility?: boolean | undefined;
                opacity?: number | undefined;
                identify?: boolean | undefined;
                hovertips?: boolean | undefined;
            } | undefined;
            customRenderer?: any;
            expectedDrawTime?: number | undefined;
            expectedLoadTime?: number | undefined;
            fieldMetadata?: {
                fieldInfo?: {
                    name: string;
                    alias?: string | undefined;
                }[] | undefined;
                exclusiveFields?: boolean | undefined;
                enforceOrder?: boolean | undefined;
            } | undefined;
            nameField?: string | undefined;
            tooltipField?: string | undefined;
            featureInfoMimeType?: string | undefined;
            controls?: import("@/geo/api").LayerControl[] | undefined;
            disabledControls?: import("@/geo/api").LayerControl[] | undefined;
            sublayers?: {
                index: number;
                name?: string | undefined;
                nameField?: string | undefined;
                state?: {
                    visibility?: boolean | undefined;
                    opacity?: number | undefined;
                    identify?: boolean | undefined;
                    hovertips?: boolean | undefined;
                } | undefined;
                extent?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number | undefined;
                        latestWkid?: number | undefined;
                        wkt?: string | undefined;
                    };
                } | undefined;
                controls?: import("@/geo/api").LayerControl[] | undefined;
                disabledControls?: import("@/geo/api").LayerControl[] | undefined;
                cosmetic?: boolean | undefined;
                fieldMetadata?: {
                    fieldInfo?: {
                        name: string;
                        alias?: string | undefined;
                    }[] | undefined;
                    exclusiveFields?: boolean | undefined;
                    enforceOrder?: boolean | undefined;
                } | undefined;
                initialFilteredQuery?: string | undefined;
                permanentFilteredQuery?: string | undefined;
                customRenderer?: any;
                fixtures?: any;
            }[] | {
                id: string;
                name?: string | undefined;
                state?: {
                    visibility?: boolean | undefined;
                    opacity?: number | undefined;
                    identify?: boolean | undefined;
                    hovertips?: boolean | undefined;
                } | undefined;
                controls?: import("@/geo/api").LayerControl[] | undefined;
                disabledControls?: import("@/geo/api").LayerControl[] | undefined;
                currentStyle?: string | undefined;
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
                    wkid?: number | undefined;
                    latestWkid?: number | undefined;
                    wkt?: string | undefined;
                };
            } | undefined;
            latField?: string | undefined;
            longField?: string | undefined;
            mouseTolerance?: number | undefined;
            touchTolerance?: number | undefined;
            metadata?: {
                url: string;
                name?: string | undefined;
            } | undefined;
            catalogueUrl?: string | undefined;
            fixtures?: any;
            cosmetic?: boolean | undefined;
            colour?: string | undefined;
            imageFormat?: string | undefined;
            initialFilteredQuery?: string | undefined;
            permanentFilteredQuery?: string | undefined;
            drawOrder?: {
                field?: string | undefined;
                arcade?: string | undefined;
                ascending: boolean;
            }[] | undefined;
            identifyMode?: import("@/geo/api").LayerIdentifyMode | undefined;
            caching?: boolean | undefined;
            rawData?: any;
            maxLoadTime?: number | undefined;
        }[];
        fixtures: {
            [key: string]: any;
        };
        panels?: {
            open?: {
                id: string;
                screen?: string | undefined;
                pin?: boolean | undefined;
            }[] | undefined;
            reorderable?: boolean | undefined;
        } | undefined;
        system?: {
            proxyUrl?: string | undefined;
            animate?: boolean | undefined;
            exposeOid?: boolean | undefined;
            exposeMeasurements?: boolean | undefined;
            zoomIcon?: string | undefined;
            scrollToInstance?: boolean | undefined;
            suppressNumberLocalization?: boolean | undefined;
        } | undefined;
    }>;
    startingFixtures: import("vue").Ref<string[]>;
    activeBasemapConfig: import("vue").Ref<RampBasemapConfig | undefined>;
    registeredConfigs: import("vue").Ref<{
        [key: string]: RampConfig;
    }>;
    registeredLangs: import("vue").Ref<{
        [key: string]: string;
    }>;
    getActiveConfig: (lang: string) => RampConfig;
    newConfig: (newConfig: RampConfig) => void;
    registerConfig: (configInfo: any) => void;
}, "config" | "startingFixtures" | "activeBasemapConfig" | "registeredConfigs" | "registeredLangs">>, Pick<{
    config: import("vue").Ref<{
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
                        wkid?: number | undefined;
                        latestWkid?: number | undefined;
                        wkt?: string | undefined;
                    };
                };
                full?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number | undefined;
                        latestWkid?: number | undefined;
                        wkt?: string | undefined;
                    };
                } | undefined;
                maximum?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number | undefined;
                        latestWkid?: number | undefined;
                        wkt?: string | undefined;
                    };
                } | undefined;
            }[];
            basemaps: {
                id: string;
                name: string;
                description: string;
                altText: string;
                hideThumbnail?: boolean | undefined;
                thumbnailUrl?: string | undefined;
                tileSchemaId: string;
                layers: {
                    id: string;
                    layerType: import("@/geo/api").LayerType;
                    url: string;
                    opacity?: number | undefined;
                }[];
                attribution?: {
                    text: {
                        disabled?: boolean | undefined;
                        value?: string | undefined;
                    };
                    logo: {
                        disabled?: boolean | undefined;
                        altText?: string | undefined;
                        value?: string | undefined;
                        link?: string | undefined;
                    };
                } | undefined;
                backgroundColour?: string | undefined;
            }[];
            tileSchemas: {
                id: string;
                name: string;
                extentSetId: string;
                lodSetId: string;
                thumbnailTileUrls: string[];
                hasNorthPole?: boolean | undefined;
                recoveryBasemap?: {
                    basemapId: string;
                    timeout?: number | undefined;
                } | undefined;
            }[];
            initialBasemapId: string;
            caption?: {
                mapCoords: {
                    disabled?: boolean | undefined;
                    formatter?: string | undefined;
                };
                scaleBar: {
                    disabled?: boolean | undefined;
                    imperialScale?: boolean | undefined;
                };
                langToggle: {
                    disabled?: boolean | undefined;
                };
            } | undefined;
            pointZoomScale?: number | undefined;
            mapMouseThrottle?: number | undefined;
        };
        layers: {
            id: string;
            layerType: import("@/geo/api").LayerType;
            url: string;
            name?: string | undefined;
            state?: {
                visibility?: boolean | undefined;
                opacity?: number | undefined;
                identify?: boolean | undefined;
                hovertips?: boolean | undefined;
            } | undefined;
            customRenderer?: any;
            expectedDrawTime?: number | undefined;
            expectedLoadTime?: number | undefined;
            fieldMetadata?: {
                fieldInfo?: {
                    name: string;
                    alias?: string | undefined;
                }[] | undefined;
                exclusiveFields?: boolean | undefined;
                enforceOrder?: boolean | undefined;
            } | undefined;
            nameField?: string | undefined;
            tooltipField?: string | undefined;
            featureInfoMimeType?: string | undefined;
            controls?: import("@/geo/api").LayerControl[] | undefined;
            disabledControls?: import("@/geo/api").LayerControl[] | undefined;
            sublayers?: {
                index: number;
                name?: string | undefined;
                nameField?: string | undefined;
                state?: {
                    visibility?: boolean | undefined;
                    opacity?: number | undefined;
                    identify?: boolean | undefined;
                    hovertips?: boolean | undefined;
                } | undefined;
                extent?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number | undefined;
                        latestWkid?: number | undefined;
                        wkt?: string | undefined;
                    };
                } | undefined;
                controls?: import("@/geo/api").LayerControl[] | undefined;
                disabledControls?: import("@/geo/api").LayerControl[] | undefined;
                cosmetic?: boolean | undefined;
                fieldMetadata?: {
                    fieldInfo?: {
                        name: string;
                        alias?: string | undefined;
                    }[] | undefined;
                    exclusiveFields?: boolean | undefined;
                    enforceOrder?: boolean | undefined;
                } | undefined;
                initialFilteredQuery?: string | undefined;
                permanentFilteredQuery?: string | undefined;
                customRenderer?: any;
                fixtures?: any;
            }[] | {
                id: string;
                name?: string | undefined;
                state?: {
                    visibility?: boolean | undefined;
                    opacity?: number | undefined;
                    identify?: boolean | undefined;
                    hovertips?: boolean | undefined;
                } | undefined;
                controls?: import("@/geo/api").LayerControl[] | undefined;
                disabledControls?: import("@/geo/api").LayerControl[] | undefined;
                currentStyle?: string | undefined;
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
                    wkid?: number | undefined;
                    latestWkid?: number | undefined;
                    wkt?: string | undefined;
                };
            } | undefined;
            latField?: string | undefined;
            longField?: string | undefined;
            mouseTolerance?: number | undefined;
            touchTolerance?: number | undefined;
            metadata?: {
                url: string;
                name?: string | undefined;
            } | undefined;
            catalogueUrl?: string | undefined;
            fixtures?: any;
            cosmetic?: boolean | undefined;
            colour?: string | undefined;
            imageFormat?: string | undefined;
            initialFilteredQuery?: string | undefined;
            permanentFilteredQuery?: string | undefined;
            drawOrder?: {
                field?: string | undefined;
                arcade?: string | undefined;
                ascending: boolean;
            }[] | undefined;
            identifyMode?: import("@/geo/api").LayerIdentifyMode | undefined;
            caching?: boolean | undefined;
            rawData?: any;
            maxLoadTime?: number | undefined;
        }[];
        fixtures: {
            [key: string]: any;
        };
        panels?: {
            open?: {
                id: string;
                screen?: string | undefined;
                pin?: boolean | undefined;
            }[] | undefined;
            reorderable?: boolean | undefined;
        } | undefined;
        system?: {
            proxyUrl?: string | undefined;
            animate?: boolean | undefined;
            exposeOid?: boolean | undefined;
            exposeMeasurements?: boolean | undefined;
            zoomIcon?: string | undefined;
            scrollToInstance?: boolean | undefined;
            suppressNumberLocalization?: boolean | undefined;
        } | undefined;
    }>;
    startingFixtures: import("vue").Ref<string[]>;
    activeBasemapConfig: import("vue").Ref<RampBasemapConfig | undefined>;
    registeredConfigs: import("vue").Ref<{
        [key: string]: RampConfig;
    }>;
    registeredLangs: import("vue").Ref<{
        [key: string]: string;
    }>;
    getActiveConfig: (lang: string) => RampConfig;
    newConfig: (newConfig: RampConfig) => void;
    registerConfig: (configInfo: any) => void;
}, never>, Pick<{
    config: import("vue").Ref<{
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
                        wkid?: number | undefined;
                        latestWkid?: number | undefined;
                        wkt?: string | undefined;
                    };
                };
                full?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number | undefined;
                        latestWkid?: number | undefined;
                        wkt?: string | undefined;
                    };
                } | undefined;
                maximum?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number | undefined;
                        latestWkid?: number | undefined;
                        wkt?: string | undefined;
                    };
                } | undefined;
            }[];
            basemaps: {
                id: string;
                name: string;
                description: string;
                altText: string;
                hideThumbnail?: boolean | undefined;
                thumbnailUrl?: string | undefined;
                tileSchemaId: string;
                layers: {
                    id: string;
                    layerType: import("@/geo/api").LayerType;
                    url: string;
                    opacity?: number | undefined;
                }[];
                attribution?: {
                    text: {
                        disabled?: boolean | undefined;
                        value?: string | undefined;
                    };
                    logo: {
                        disabled?: boolean | undefined;
                        altText?: string | undefined;
                        value?: string | undefined;
                        link?: string | undefined;
                    };
                } | undefined;
                backgroundColour?: string | undefined;
            }[];
            tileSchemas: {
                id: string;
                name: string;
                extentSetId: string;
                lodSetId: string;
                thumbnailTileUrls: string[];
                hasNorthPole?: boolean | undefined;
                recoveryBasemap?: {
                    basemapId: string;
                    timeout?: number | undefined;
                } | undefined;
            }[];
            initialBasemapId: string;
            caption?: {
                mapCoords: {
                    disabled?: boolean | undefined;
                    formatter?: string | undefined;
                };
                scaleBar: {
                    disabled?: boolean | undefined;
                    imperialScale?: boolean | undefined;
                };
                langToggle: {
                    disabled?: boolean | undefined;
                };
            } | undefined;
            pointZoomScale?: number | undefined;
            mapMouseThrottle?: number | undefined;
        };
        layers: {
            id: string;
            layerType: import("@/geo/api").LayerType;
            url: string;
            name?: string | undefined;
            state?: {
                visibility?: boolean | undefined;
                opacity?: number | undefined;
                identify?: boolean | undefined;
                hovertips?: boolean | undefined;
            } | undefined;
            customRenderer?: any;
            expectedDrawTime?: number | undefined;
            expectedLoadTime?: number | undefined;
            fieldMetadata?: {
                fieldInfo?: {
                    name: string;
                    alias?: string | undefined;
                }[] | undefined;
                exclusiveFields?: boolean | undefined;
                enforceOrder?: boolean | undefined;
            } | undefined;
            nameField?: string | undefined;
            tooltipField?: string | undefined;
            featureInfoMimeType?: string | undefined;
            controls?: import("@/geo/api").LayerControl[] | undefined;
            disabledControls?: import("@/geo/api").LayerControl[] | undefined;
            sublayers?: {
                index: number;
                name?: string | undefined;
                nameField?: string | undefined;
                state?: {
                    visibility?: boolean | undefined;
                    opacity?: number | undefined;
                    identify?: boolean | undefined;
                    hovertips?: boolean | undefined;
                } | undefined;
                extent?: {
                    xmin: number;
                    xmax: number;
                    ymin: number;
                    ymax: number;
                    spatialReference: {
                        wkid?: number | undefined;
                        latestWkid?: number | undefined;
                        wkt?: string | undefined;
                    };
                } | undefined;
                controls?: import("@/geo/api").LayerControl[] | undefined;
                disabledControls?: import("@/geo/api").LayerControl[] | undefined;
                cosmetic?: boolean | undefined;
                fieldMetadata?: {
                    fieldInfo?: {
                        name: string;
                        alias?: string | undefined;
                    }[] | undefined;
                    exclusiveFields?: boolean | undefined;
                    enforceOrder?: boolean | undefined;
                } | undefined;
                initialFilteredQuery?: string | undefined;
                permanentFilteredQuery?: string | undefined;
                customRenderer?: any;
                fixtures?: any;
            }[] | {
                id: string;
                name?: string | undefined;
                state?: {
                    visibility?: boolean | undefined;
                    opacity?: number | undefined;
                    identify?: boolean | undefined;
                    hovertips?: boolean | undefined;
                } | undefined;
                controls?: import("@/geo/api").LayerControl[] | undefined;
                disabledControls?: import("@/geo/api").LayerControl[] | undefined;
                currentStyle?: string | undefined;
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
                    wkid?: number | undefined;
                    latestWkid?: number | undefined;
                    wkt?: string | undefined;
                };
            } | undefined;
            latField?: string | undefined;
            longField?: string | undefined;
            mouseTolerance?: number | undefined;
            touchTolerance?: number | undefined;
            metadata?: {
                url: string;
                name?: string | undefined;
            } | undefined;
            catalogueUrl?: string | undefined;
            fixtures?: any;
            cosmetic?: boolean | undefined;
            colour?: string | undefined;
            imageFormat?: string | undefined;
            initialFilteredQuery?: string | undefined;
            permanentFilteredQuery?: string | undefined;
            drawOrder?: {
                field?: string | undefined;
                arcade?: string | undefined;
                ascending: boolean;
            }[] | undefined;
            identifyMode?: import("@/geo/api").LayerIdentifyMode | undefined;
            caching?: boolean | undefined;
            rawData?: any;
            maxLoadTime?: number | undefined;
        }[];
        fixtures: {
            [key: string]: any;
        };
        panels?: {
            open?: {
                id: string;
                screen?: string | undefined;
                pin?: boolean | undefined;
            }[] | undefined;
            reorderable?: boolean | undefined;
        } | undefined;
        system?: {
            proxyUrl?: string | undefined;
            animate?: boolean | undefined;
            exposeOid?: boolean | undefined;
            exposeMeasurements?: boolean | undefined;
            zoomIcon?: string | undefined;
            scrollToInstance?: boolean | undefined;
            suppressNumberLocalization?: boolean | undefined;
        } | undefined;
    }>;
    startingFixtures: import("vue").Ref<string[]>;
    activeBasemapConfig: import("vue").Ref<RampBasemapConfig | undefined>;
    registeredConfigs: import("vue").Ref<{
        [key: string]: RampConfig;
    }>;
    registeredLangs: import("vue").Ref<{
        [key: string]: string;
    }>;
    getActiveConfig: (lang: string) => RampConfig;
    newConfig: (newConfig: RampConfig) => void;
    registerConfig: (configInfo: any) => void;
}, "getActiveConfig" | "newConfig" | "registerConfig">>;
