export declare const useOverviewmapStore: import("pinia").StoreDefinition<"overviewmap", import("pinia")._UnwrapAll<Pick<{
    mapConfig: import("vue").Ref<{
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
    }>;
    basemaps: import("vue").Ref<{}>;
    startMinimized: import("vue").Ref<boolean>;
    expandFactor: import("vue").Ref<number>;
    borderColour: import("vue").Ref<string>;
    borderWidth: import("vue").Ref<number>;
    areaColour: import("vue").Ref<string>;
    areaOpacity: import("vue").Ref<number>;
    updateInitialBasemap: (basemapId: string) => void;
}, "basemaps" | "borderWidth" | "mapConfig" | "startMinimized" | "expandFactor" | "borderColour" | "areaColour" | "areaOpacity">>, Pick<{
    mapConfig: import("vue").Ref<{
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
    }>;
    basemaps: import("vue").Ref<{}>;
    startMinimized: import("vue").Ref<boolean>;
    expandFactor: import("vue").Ref<number>;
    borderColour: import("vue").Ref<string>;
    borderWidth: import("vue").Ref<number>;
    areaColour: import("vue").Ref<string>;
    areaOpacity: import("vue").Ref<number>;
    updateInitialBasemap: (basemapId: string) => void;
}, never>, Pick<{
    mapConfig: import("vue").Ref<{
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
    }>;
    basemaps: import("vue").Ref<{}>;
    startMinimized: import("vue").Ref<boolean>;
    expandFactor: import("vue").Ref<number>;
    borderColour: import("vue").Ref<string>;
    borderWidth: import("vue").Ref<number>;
    areaColour: import("vue").Ref<string>;
    areaOpacity: import("vue").Ref<number>;
    updateInitialBasemap: (basemapId: string) => void;
}, "updateInitialBasemap">>;
