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
                layerType: import('../../../geo/api').LayerType;
                url: string;
                opacity?: number | undefined;
            }[];
            attribution?: {
                text?: {
                    disabled?: boolean | undefined;
                    value?: string | undefined;
                } | undefined;
            } | undefined;
            backgroundColour?: string | undefined;
        }[];
        tileSchemas: {
            id: string;
            name: string;
            extentSetId: string;
            lodSetId: string;
            thumbnailTileUrls: Array<string>;
            hasNorthPole?: boolean | undefined;
            recoveryBasemap?: {
                basemapId: string;
                timeout?: number | undefined;
            } | undefined;
        }[];
        initialBasemapId: string;
        caption?: {
            mapCoords?: {
                disabled?: boolean | undefined;
                formatter?: string | undefined;
            } | undefined;
            scaleBar?: {
                disabled?: boolean | undefined;
                imperialScale?: boolean | undefined;
            } | undefined;
            langToggle?: {
                disabled?: boolean | undefined;
            } | undefined;
        } | undefined;
        pointZoomScale?: number | undefined;
        mapMouseThrottle?: number | undefined;
        labelsDefault?: {
            visible?: boolean | undefined;
        } | undefined;
        layerTimeDefault?: {
            expectedDrawTime?: number | undefined;
            expectedLoadTime?: number | undefined;
            maxLoadTime?: number | undefined;
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
                layerType: import('../../../geo/api').LayerType;
                url: string;
                opacity?: number | undefined;
            }[];
            attribution?: {
                text?: {
                    disabled?: boolean | undefined;
                    value?: string | undefined;
                } | undefined;
            } | undefined;
            backgroundColour?: string | undefined;
        }[];
        tileSchemas: {
            id: string;
            name: string;
            extentSetId: string;
            lodSetId: string;
            thumbnailTileUrls: Array<string>;
            hasNorthPole?: boolean | undefined;
            recoveryBasemap?: {
                basemapId: string;
                timeout?: number | undefined;
            } | undefined;
        }[];
        initialBasemapId: string;
        caption?: {
            mapCoords?: {
                disabled?: boolean | undefined;
                formatter?: string | undefined;
            } | undefined;
            scaleBar?: {
                disabled?: boolean | undefined;
                imperialScale?: boolean | undefined;
            } | undefined;
            langToggle?: {
                disabled?: boolean | undefined;
            } | undefined;
        } | undefined;
        pointZoomScale?: number | undefined;
        mapMouseThrottle?: number | undefined;
        labelsDefault?: {
            visible?: boolean | undefined;
        } | undefined;
        layerTimeDefault?: {
            expectedDrawTime?: number | undefined;
            expectedLoadTime?: number | undefined;
            maxLoadTime?: number | undefined;
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
                layerType: import('../../../geo/api').LayerType;
                url: string;
                opacity?: number | undefined;
            }[];
            attribution?: {
                text?: {
                    disabled?: boolean | undefined;
                    value?: string | undefined;
                } | undefined;
            } | undefined;
            backgroundColour?: string | undefined;
        }[];
        tileSchemas: {
            id: string;
            name: string;
            extentSetId: string;
            lodSetId: string;
            thumbnailTileUrls: Array<string>;
            hasNorthPole?: boolean | undefined;
            recoveryBasemap?: {
                basemapId: string;
                timeout?: number | undefined;
            } | undefined;
        }[];
        initialBasemapId: string;
        caption?: {
            mapCoords?: {
                disabled?: boolean | undefined;
                formatter?: string | undefined;
            } | undefined;
            scaleBar?: {
                disabled?: boolean | undefined;
                imperialScale?: boolean | undefined;
            } | undefined;
            langToggle?: {
                disabled?: boolean | undefined;
            } | undefined;
        } | undefined;
        pointZoomScale?: number | undefined;
        mapMouseThrottle?: number | undefined;
        labelsDefault?: {
            visible?: boolean | undefined;
        } | undefined;
        layerTimeDefault?: {
            expectedDrawTime?: number | undefined;
            expectedLoadTime?: number | undefined;
            maxLoadTime?: number | undefined;
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
                layerType: import('../../../geo/api').LayerType;
                url: string;
                opacity?: number | undefined;
            }[];
            attribution?: {
                text?: {
                    disabled?: boolean | undefined;
                    value?: string | undefined;
                } | undefined;
            } | undefined;
            backgroundColour?: string | undefined;
        }[];
        tileSchemas: {
            id: string;
            name: string;
            extentSetId: string;
            lodSetId: string;
            thumbnailTileUrls: Array<string>;
            hasNorthPole?: boolean | undefined;
            recoveryBasemap?: {
                basemapId: string;
                timeout?: number | undefined;
            } | undefined;
        }[];
        initialBasemapId: string;
        caption?: {
            mapCoords?: {
                disabled?: boolean | undefined;
                formatter?: string | undefined;
            } | undefined;
            scaleBar?: {
                disabled?: boolean | undefined;
                imperialScale?: boolean | undefined;
            } | undefined;
            langToggle?: {
                disabled?: boolean | undefined;
            } | undefined;
        } | undefined;
        pointZoomScale?: number | undefined;
        mapMouseThrottle?: number | undefined;
        labelsDefault?: {
            visible?: boolean | undefined;
        } | undefined;
        layerTimeDefault?: {
            expectedDrawTime?: number | undefined;
            expectedLoadTime?: number | undefined;
            maxLoadTime?: number | undefined;
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
                layerType: import('../../../geo/api').LayerType;
                url: string;
                opacity?: number | undefined;
            }[];
            attribution?: {
                text?: {
                    disabled?: boolean | undefined;
                    value?: string | undefined;
                } | undefined;
            } | undefined;
            backgroundColour?: string | undefined;
        }[];
        tileSchemas: {
            id: string;
            name: string;
            extentSetId: string;
            lodSetId: string;
            thumbnailTileUrls: Array<string>;
            hasNorthPole?: boolean | undefined;
            recoveryBasemap?: {
                basemapId: string;
                timeout?: number | undefined;
            } | undefined;
        }[];
        initialBasemapId: string;
        caption?: {
            mapCoords?: {
                disabled?: boolean | undefined;
                formatter?: string | undefined;
            } | undefined;
            scaleBar?: {
                disabled?: boolean | undefined;
                imperialScale?: boolean | undefined;
            } | undefined;
            langToggle?: {
                disabled?: boolean | undefined;
            } | undefined;
        } | undefined;
        pointZoomScale?: number | undefined;
        mapMouseThrottle?: number | undefined;
        labelsDefault?: {
            visible?: boolean | undefined;
        } | undefined;
        layerTimeDefault?: {
            expectedDrawTime?: number | undefined;
            expectedLoadTime?: number | undefined;
            maxLoadTime?: number | undefined;
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
                layerType: import('../../../geo/api').LayerType;
                url: string;
                opacity?: number | undefined;
            }[];
            attribution?: {
                text?: {
                    disabled?: boolean | undefined;
                    value?: string | undefined;
                } | undefined;
            } | undefined;
            backgroundColour?: string | undefined;
        }[];
        tileSchemas: {
            id: string;
            name: string;
            extentSetId: string;
            lodSetId: string;
            thumbnailTileUrls: Array<string>;
            hasNorthPole?: boolean | undefined;
            recoveryBasemap?: {
                basemapId: string;
                timeout?: number | undefined;
            } | undefined;
        }[];
        initialBasemapId: string;
        caption?: {
            mapCoords?: {
                disabled?: boolean | undefined;
                formatter?: string | undefined;
            } | undefined;
            scaleBar?: {
                disabled?: boolean | undefined;
                imperialScale?: boolean | undefined;
            } | undefined;
            langToggle?: {
                disabled?: boolean | undefined;
            } | undefined;
        } | undefined;
        pointZoomScale?: number | undefined;
        mapMouseThrottle?: number | undefined;
        labelsDefault?: {
            visible?: boolean | undefined;
        } | undefined;
        layerTimeDefault?: {
            expectedDrawTime?: number | undefined;
            expectedLoadTime?: number | undefined;
            maxLoadTime?: number | undefined;
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
