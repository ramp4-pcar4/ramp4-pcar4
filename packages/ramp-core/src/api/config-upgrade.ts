// mess of code to convert a RAMP2 config to a RAMP4 config

import {
    LayerType,
    RampBasemapConfig,
    RampBasemapLayerConfig,
    RampExtentSetConfig,
    RampTileSchemaConfig
} from '@/geo/api';

// This will be exposed on the global RAMP interface. Make caller pre-upgrade the config, don't make internals figure it out.
// Reasons: RAMP2 has separate configs per language, caller would need to pre-bundle them to allow them into the instance.
//          Caller may want to do further adjustments to result to make up for gaps in what we are able to upgrade.

// NOTE we could be using the interfaces here (RampConfigs, RampConfig, RampLayerConfig, etc)
//      but since we are building things up, the type definitions grouse non-stop because
//      it wants the mandatory properties existing at definition. So we harness the power of 'any'
//      to make the building up of objects easier.

// Something we might not be able to support:
// R2 has flags to "turn off" certain things, like basemap selector, geosearch.
// in R4, this type of thing would be controlled from the instance constructor
// (e.g. turn off loadDefaultFixtures, then page adds the desired fixtures).
// we might be able to get an analog by targeting the appbar? E.g. fixture loads but
// no launcher button on the UI anywhere.

/**
 *
 * @param r2c a RAMP2 config or an array of RAMP2 configs (one per language)
 * @returns A RAMP4 config object set (language indexed), adapted as best as possible
 */
export function configUpgrade2to4(r2c: any): any {
    const r4c: any = {};

    const r2cs: Array<any> = Array.isArray(r2c) ? r2c : [r2c];

    r2cs.forEach(c => {
        if (!c.language) {
            console.warn(
                'RAMP2 config with no language supplied. Defaulting to English'
            );
            c.language = 'en';
        }
        const nugget = individualConfigUpgrader(c);

        // index by language, ramp4 style
        r4c[c.language] = nugget;
    });

    return r4c;
}

function individualConfigUpgrader(r2c: any): any {
    const r4c: any = {
        // TODO is there a current version variable anywhere? I can see us forgetting to update this.
        //      on the other hand, any updates to the target version will need to edit this file.
        version: '4.0',
        ui: {},
        fixtures: {},
        layers: [],
        map: {},
        system: { animate: true }
    };

    // ramp 2 top-level object has
    // .map
    // .services
    // .plugins
    // .ui
    // .language

    mapUpgrader(r2c.map, r4c);
    servicesUpgrader(r2c.services, r4c);
    uiUpgrader(r2c.ui, r4c);

    // note that r2 .plugins has no analogue at the moment.
    // areas of interest, back to cart, co-ord info, custom export, are not implemented
    // and would likely be out-of-core fixtures.

    return r4c;
}

/**
 *
 * @param r2Map map nugget from ramp 2 config
 * @param r4c entire ramp4 config. param is modded in place, since ramp2 map elements end up all over the new config
 */
function mapUpgrader(r2Map: any, r4c: any): void {
    if (r2Map.layers) {
        r2Map.layers.forEach((r2layer: any) => {
            r4c.layers.push(layerUpgrader(r2layer));
        });
    }

    if (r2Map.initialBasemapId) {
        r4c.map.initialBasemapId = r2Map.initialBasemapId;
    }

    if (r2Map.components) {
        // TODO process components
        // TODO: handle fixture inclusion/exclusion using the `enabled` flag in the component config

        if (
            r2Map.components.overviewMap &&
            r2Map.components.overviewMap.enabled // TODO: revisit this when handling fixture inclusion/exclusion
        ) {
            // process overview map
            // basemap entries will be added when processing the tile schemas

            // check if we don't already have an overview map config
            if (!r4c.fixtures.overviewmap) {
                // init the config
                r4c.fixtures.overviewmap = {
                    basemaps: {}
                };
            }
            r4c.fixtures.overviewmap.startMinimized =
                !r2Map.components.overviewMap.initiallyExpanded;
            r4c.fixtures.overviewmap.expandFactor =
                r2Map.components.overviewMap.expandFactor ?? 1.5;
        }

        if (
            r2Map.components.northArrow &&
            r2Map.components.northArrow.enabled
        ) {
            // process north arrow

            let r4na: any = {};
            if (r2Map.components.northArrow.arrowIcon) {
                r4na.arrowIcon = r2Map.components.northArrow.arrowIcon;
            }
            if (r2Map.components.northArrow.poleIcon) {
                r4na.poleIcon = r2Map.components.northArrow.arrowIcon;
            }

            // if we have at least on of the values defined, add this fixture config
            if (r4na) {
                r4c.fixtures.northarrow = r4na;
            }
        }
    }

    if (r2Map.extentSets) {
        // process extent sets. Need to hoist the spatial reference that is sitting at set level
        //      into each extent for r4
        r4c.map.extentSets = [];
        r2Map.extentSets.forEach((r2es: any) => {
            let r4es: RampExtentSetConfig = {
                id: r2es.id,
                default: {
                    xmin: r2es.default.xmin,
                    xmax: r2es.default.xmax,
                    ymin: r2es.default.ymin,
                    ymax: r2es.default.ymax,
                    spatialReference: r2es.spatialReference
                }
            };

            // check if full and maximum extents are provided
            if (r2es.full) {
                r4es.full = {
                    xmin: r2es.full.xmin,
                    xmax: r2es.full.xmax,
                    ymin: r2es.full.ymin,
                    ymax: r2es.full.ymax,
                    spatialReference: r2es.spatialReference
                };
            }
            if (r2es.maximum) {
                r4es.maximum = {
                    xmin: r2es.maximum.xmin,
                    xmax: r2es.maximum.xmax,
                    ymin: r2es.maximum.ymin,
                    ymax: r2es.maximum.ymax,
                    spatialReference: r2es.spatialReference
                };
            }

            r4c.map.extentSets.push(r4es);
        });
    }

    if (r2Map.lodSets) {
        // process lod sets, should be 1-to-1
        r4c.map.lodSets = r2Map.lodSets;
    }

    if (r2Map.tileSchemas) {
        // process schemas
        r4c.map.tileSchemas = [];
        r2Map.tileSchemas.forEach((r2ts: any) => {
            let r4ts: RampTileSchemaConfig = {
                id: r2ts.id,
                name: r2ts.name,
                extentSetId: r2ts.extentSetId,
                lodSetId: r2ts.lodSetId,
                thumbnailTileUrls: [], // TODO: use some defaulting here?
                hasNorthPole: r2ts.hasNorthPole || false
            };

            // process the overview map config
            if (r2ts.overviewUrl) {
                // check if we don't already have an overview map config
                if (!r4c.fixtures.overviewmap) {
                    // init the config
                    r4c.fixtures.overviewmap = {
                        basemaps: {}
                    };
                }

                // add new entry
                r4c.fixtures.overviewmap.basemaps[r2ts.id] = {
                    id: r2ts.overviewUrl.id || `overviewmap-basemap-${r2ts.id}`,
                    tileSchemaId: r2ts.id,
                    layers: [
                        {
                            id:
                                r2ts.overviewUrl.id ||
                                `overviewmap-basemap-${r2ts.id}-0`,
                            layerType:
                                r2ts.overviewUrl.layerType === 'esriDynamic'
                                    ? LayerType.MAPIMAGE
                                    : LayerType.TILE,
                            url: r2ts.overviewUrl.url,
                            opacity: r2ts.overviewUrl.opacity ?? 1
                        }
                    ]
                };
            }

            r4c.map.tileSchemas.push(r4ts);
        });
    }

    if (r2Map.baseMaps) {
        // process basemaps
        r4c.map.basemaps = [];
        r2Map.baseMaps.forEach((r2bm: any) => {
            let r4bm: RampBasemapConfig = {
                id: r2bm.id,
                tileSchemaId: r2bm.tileSchemaId,
                name: r2bm.name,
                description: r2bm.description,
                altText: r2bm.altText,
                thumbnailUrl: r2bm.thumbnailUrl,
                layers: [] // populated later
            };

            // process basemap attribution
            if (r2bm.attribution) {
                r4bm.attribution = {
                    text: {},
                    logo: {}
                };
                if (r2bm.attribution.text) {
                    r4bm.attribution.text.disabled =
                        !r2bm.attribution.text.enabled;
                    r4bm.attribution.text.value = r2bm.attribution.text.value;
                }
                if (r2bm.attribution.logo) {
                    r4bm.attribution.logo.disabled =
                        !r2bm.attribution.logo.enabled;
                    r4bm.attribution.logo.altText =
                        r2bm.attribution.logo.altText;
                    r4bm.attribution.logo.value = r2bm.attribution.logo.value;
                    r4bm.attribution.logo.link = r2bm.attribution.logo.link;
                }
            }

            // process the layers
            r2bm.layers.forEach((r2bml: any, idx: number) => {
                let r4bml: RampBasemapLayerConfig = {
                    id: r2bml.id || `${r2bm.id}-${idx}`,
                    layerType:
                        r2bml.layerType === 'esriDynamic'
                            ? LayerType.MAPIMAGE
                            : LayerType.TILE,
                    url: r2bml.url,
                    opacity: r2bml.opacity ?? 1
                };
                r4bm.layers.push(r4bml);
            });

            r4c.map.basemaps.push(r4bm);
        });
    }

    if (r2Map.legend) {
        // TODO ensure the legend fixture will be loaded and config for fixture exists.
        //      We could else to exclude the legend fixture, but since thats not a valid
        //      scenario in R2, i don't think we need to bother.
        if (r2Map.legend.type === 'autopopulate') {
            // TODO will need to add a basic "layer" legend block to the legend for every layer in the config, in order.
        } else {
            // TODO need to map R2 legend structures to R4 legend structures
        }
    }
}

function layerUpgrader(r2layer: any): any {
    const r4layer: any = {
        id: r2layer.id,
        layerType: r2layer.layerType, // TODO this will need to get mapped to the new kabab values in LayerType enum
        url: r2layer.url
    };

    // TODO fill in the specifcs for each layer type
    //      will probably want sub-functions for common big structures like grid/table,
    //      fields, dynamic & wms sublayers

    switch (r2layer.layerType) {
        case 'esriDynamic':
            break;

        case 'esriFeature':
            break;

        case 'ogcWfs':
            break;

        case 'ogcWms':
            break;

        case 'esriImage':
            break;

        case 'esriTile':
            break;

        default:
            console.warn(
                `Unhandled layer type in ramp 2 config ${r2layer.layerType}`
            );
    }

    return r4layer;
}

/**
 *
 * @param r2Services services nugget from ramp 2 config
 * @param r4c entire ramp4 config. param is modded in place, since ramp2 elements end up all over the new config
 */
function servicesUpgrader(r2Services: any, r4c: any): void {
    if (!r2Services) {
        return;
    }

    if (r2Services.search) {
        // TODO port data to geoserach fixture config
    }

    if (r2Services.export) {
        // TODO port data to our poorly named export fixure config
    }

    if (r2Services.proxyUrl) {
        r4c.system.proxyUrl = r2Services.proxyUrl;
    }
}

/**
 *
 * @param r2ui ui nugget from ramp 2 config
 * @param r4c entire ramp4 config. param is modded in place, since ramp2 elements end up all over the new config
 */
function uiUpgrader(r2ui: any, r4c: any): void {
    // TODO git r done

    if (r2ui.navBar) {
        // process nav bar
        r4c.fixtures.mapnav = {
            zoomOption: r2ui.navBar.zoom || 'buttons',
            items: []
        };
        const allowedItems: string[] = [
            'geolocator',
            'zoom',
            'home',
            'basemap',
            'help',
            'fullscreen',
            'geosearch',
            'legend'
        ];
        r2ui.navBar.extra.forEach((item: string) => {
            const itemLower = item.toLowerCase();
            if (!allowedItems.includes(itemLower)) {
                console.warn(`ignored invalid mapnav item: ${item}`);
            } else {
                r4c.fixtures.mapnav.items.push(itemLower);
            }
        });
    }
}
