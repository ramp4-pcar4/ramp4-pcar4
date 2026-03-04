import { RampMapConfig } from '../../../geo/api';
export declare const useOverviewmapStore: import('pinia').StoreDefinition<"overviewmap", Pick<{
    mapConfig: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
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
                layerType: import('../../../geo/api').LayerType;
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
    }, RampMapConfig | {
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
                layerType: import('../../../geo/api').LayerType;
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
    }>;
    basemaps: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{}, {}>;
    startMinimized: import('../../../../vue/dist/vue.esm-bundler.js').Ref<boolean, boolean>;
    expandFactor: import('../../../../vue/dist/vue.esm-bundler.js').Ref<number, number>;
    borderColour: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    borderWidth: import('../../../../vue/dist/vue.esm-bundler.js').Ref<number, number>;
    areaColour: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    areaOpacity: import('../../../../vue/dist/vue.esm-bundler.js').Ref<number, number>;
    updateInitialBasemap: (basemapId: string) => void;
}, "borderWidth" | "basemaps" | "mapConfig" | "startMinimized" | "expandFactor" | "borderColour" | "areaColour" | "areaOpacity">, Pick<{
    mapConfig: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
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
                layerType: import('../../../geo/api').LayerType;
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
    }, RampMapConfig | {
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
                layerType: import('../../../geo/api').LayerType;
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
    }>;
    basemaps: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{}, {}>;
    startMinimized: import('../../../../vue/dist/vue.esm-bundler.js').Ref<boolean, boolean>;
    expandFactor: import('../../../../vue/dist/vue.esm-bundler.js').Ref<number, number>;
    borderColour: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    borderWidth: import('../../../../vue/dist/vue.esm-bundler.js').Ref<number, number>;
    areaColour: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    areaOpacity: import('../../../../vue/dist/vue.esm-bundler.js').Ref<number, number>;
    updateInitialBasemap: (basemapId: string) => void;
}, never>, Pick<{
    mapConfig: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
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
                layerType: import('../../../geo/api').LayerType;
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
    }, RampMapConfig | {
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
                layerType: import('../../../geo/api').LayerType;
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
    }>;
    basemaps: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{}, {}>;
    startMinimized: import('../../../../vue/dist/vue.esm-bundler.js').Ref<boolean, boolean>;
    expandFactor: import('../../../../vue/dist/vue.esm-bundler.js').Ref<number, number>;
    borderColour: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    borderWidth: import('../../../../vue/dist/vue.esm-bundler.js').Ref<number, number>;
    areaColour: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    areaOpacity: import('../../../../vue/dist/vue.esm-bundler.js').Ref<number, number>;
    updateInitialBasemap: (basemapId: string) => void;
}, "updateInitialBasemap">>;
