// mess of code to convert a RAMP2 config to a RAMP4 config

import { LayerType } from '@/geo/api';

import type { RampBasemapConfig, RampBasemapLayerConfig, RampExtentSetConfig, RampTileSchemaConfig } from '@/geo/api';

import type { RampConfigs } from '@/types';

// This will be exposed on the global RAMP interface. Make caller pre-upgrade the config, don't make internals figure it out.
// Reasons: RAMP2 has separate configs per language, caller would need to pre-bundle them to allow them into the instance.
//          Caller may want to do further adjustments to result to make up for gaps in what we are able to upgrade.

// NOTE we could be using the interfaces here (RampConfigs, RampConfig, RampLayerConfig, etc)
//      but since we are building things up, the type definitions grouse non-stop because
//      it wants the mandatory properties existing at definition. So we harness the power of 'any'
//      to make the building up of objects easier.

/**
 *
 * @param r2c a RAMP2 config or an array of RAMP2 configs (one per language)
 * @returns A RAMP4 config object set (language indexed), adapted as best as possible
 */
export function configUpgrade2to4(r2c: any): RampConfigs {
    const r4c: any = {};

    const r2cs: Array<any> = Array.isArray(r2c) ? r2c : [r2c];

    r2cs.forEach(c => {
        if (!c.language) {
            console.warn('RAMP2 config with no language supplied. Defaulting to English');
            c.language = 'en';
        }
        const nugget = individualConfigUpgrader(c);

        // index by language, ramp4 style
        r4c[c.language] = nugget;
    });

    // get all fixture enabled lists
    const allFixturesEnabled: string[][] = Object.entries(r4c).map((langConfigPair: [string, any]) => {
        const fixturesEnabled: string[] = langConfigPair[1].fixturesEnabled;
        delete langConfigPair[1].fixturesEnabled; // remove this list from the config nugget
        return fixturesEnabled;
    });

    // intersect all lists into single list (use a boolean to keep track of any mismatching lists)
    let mismatch: boolean = false;
    const startingFixtures: string[] = allFixturesEnabled.reduce((a, b) =>
        a.filter(c => {
            const includes: boolean = b.includes(c);
            mismatch = mismatch || !includes;
            return includes;
        })
    );
    if (mismatch) {
        // some lang config tried to load a different set of fixtures
        console.warn(
            'Configs attempted to load different sets of fixtures. Only common fixtures will be loaded (all configs must load the same fixtures).'
        );
    }

    // add core always-on fixtures
    startingFixtures.push('grid', 'crosshairs', 'scrollguard', 'panguard', 'wizard', 'layer-reorder', 'details');

    return {
        startingFixtures: startingFixtures,
        configs: r4c
    };
}

function individualConfigUpgrader(r2c: any): any {
    const r4c: any = {
        // TODO is there a current version variable anywhere? I can see us forgetting to update this.
        //      on the other hand, any updates to the target version will need to edit this file.
        version: '4.0',
        fixtures: {},
        layers: [],
        map: {},
        panels: { open: [] },
        system: { animate: true, exposeOid: false, exposeMeasurements: true },
        fixturesEnabled: [] // this will be removed in the final step of configUpgrade2to4
    };

    // ramp 2 top-level object has
    // .map
    // .services
    // .plugins
    // .ui
    // .language

    servicesUpgrader(r2c.services, r4c);
    mapUpgrader(r2c.map, r4c);
    uiUpgrader(r2c.ui, r4c);

    // note that r2 .plugins has no analogue at the moment.
    // areas of interest, back to cart, co-ord info, custom export, are not implemented
    // and would likely be out-of-core fixtures.

    // #1346 adds areas of interest fixture as optional core fixture, so we can support the plugin config upgrader
    if (r2c.plugins) pluginsUpgrader(r2c.plugins, r4c);

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
            r4c.layers.unshift(layerUpgrader(r2layer));
        });
    }

    if (r2Map.initialBasemapId) {
        r4c.map.initialBasemapId = r2Map.initialBasemapId;
    }

    if (r2Map.components) {
        // process components
        // handle fixture inclusion/exclusion flag in the component config. Append to fixturesEnabled if included

        if (r2Map.components.geoSearch) {
            if (r2Map.components.geoSearch.enabled) {
                r4c.fixturesEnabled.push('geosearch');
            }
            if (typeof r2Map.components.geoSearch.showGraphic !== 'undefined') {
                console.warn(
                    `showGraphic property provided in geoSearch map component cannot be mapped and will be skipped.`
                );
            }
            if (typeof r2Map.components.geoSearch.showInfo !== 'undefined') {
                console.warn(
                    `showInfo property provided in geoSearch map component cannot be mapped and will be skipped.`
                );
            }
        }
        if (r2Map.components.overviewMap && r2Map.components.overviewMap.enabled) {
            // process overview map
            // basemap entries will be added when processing the tile schemas

            // check if we don't already have an overview map config
            if (!r4c.fixtures.overviewmap) {
                // init the config
                r4c.fixtures.overviewmap = {
                    basemaps: {}
                };
                // add it here so it only adds once
                r4c.fixturesEnabled.push('overviewmap');
            }

            r4c.fixtures.overviewmap.startMinimized = !r2Map.components.overviewMap.initiallyExpanded;
            r4c.fixtures.overviewmap.expandFactor = r2Map.components.overviewMap.expandFactor ?? 1.5;
        }

        if (r2Map.components.northArrow && r2Map.components.northArrow.enabled) {
            // process north arrow

            const r4na: any = {};
            if (r2Map.components.northArrow.arrowIcon) {
                r4na.arrowIcon = r2Map.components.northArrow.arrowIcon;
            }
            if (r2Map.components.northArrow.poleIcon) {
                r4na.poleIcon = r2Map.components.northArrow.poleIcon;
            }

            // if we have at least on of the values defined, add this fixture config
            if (r4na) {
                r4c.fixtures.northarrow = r4na;
                r4c.fixturesEnabled.push('northarrow');
            }
        }
        if (r2Map.components.scaleBar && r2Map.components.scaleBar.enabled) {
            r4c.map.caption = {
                mapCoords: {
                    disabled: false
                },
                scaleBar: {
                    disabled: false,
                    // old ESRI docs have been removed from internet (rude!).
                    // 'english' was imperial. 'metric' was....metric. 'dual' would show both, which doesnt fly for us, so dual goes to metric
                    imperialScale: r2Map?.components?.scaleBar?.scalebarUnit === 'english'
                }
            };
            switch (r2Map.components?.mouseInfo?.spatialReference?.wkid) {
                case 4326:
                    r4c.map.caption.mapCoords.formatter = 'LAT_LONG_DMS';
                    break;
                case 3978:
                    r4c.map.caption.mapCoords.formatter = 'CANADA_ATLAS_LAMBERT';
                    break;
                case 102100:
                    r4c.map.caption.mapCoords.formatter = 'WEB_MERCATOR';
                    break;
                default:
                    r4c.map.caption.mapCoords.formatter = 'LAT_LONG_DMS';
                    break;
            }
            if (r2Map.components.scaleBar.attachTo) {
                console.warn(
                    `attachTo property provided in scaleBar map component cannot be mapped and will be skipped.`
                );
            }
        }
        if (r2Map.components.basemap && r2Map.components.basemap.enabled) {
            r4c.fixturesEnabled.push('basemap');
        }
    }

    if (r2Map.extentSets) {
        // process extent sets. Need to hoist the spatial reference that is sitting at set level
        //      into each extent for r4
        r4c.map.extentSets = [];
        r2Map.extentSets.forEach((r2es: any) => {
            const r4es: RampExtentSetConfig = {
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
            const r4ts: RampTileSchemaConfig = {
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
                    // add it here so it only adds once
                    r4c.fixturesEnabled.push('overviewmap');
                }

                // add new entry
                r4c.fixtures.overviewmap.basemaps[r2ts.id] = {
                    id: r2ts.overviewUrl.id || `overviewmap-basemap-${r2ts.id}`,
                    tileSchemaId: r2ts.id,
                    layers: [
                        {
                            id: r2ts.overviewUrl.id || `overviewmap-basemap-${r2ts.id}-0`,
                            layerType:
                                r2ts.overviewUrl.layerType === 'esriDynamic' ? LayerType.MAPIMAGE : LayerType.TILE,
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
            const r4bm: RampBasemapConfig = {
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
                    r4bm.attribution.text!.disabled = !r2bm.attribution.text.enabled;
                    r4bm.attribution.text!.value = r2bm.attribution.text.value;
                }
                if (r2bm.attribution.logo) {
                    r4bm.attribution.logo!.disabled = !r2bm.attribution.logo.enabled;
                    r4bm.attribution.logo!.altText = r2bm.attribution.logo.altText;
                    r4bm.attribution.logo!.value = r2bm.attribution.logo.value;
                    r4bm.attribution.logo!.link = r2bm.attribution.logo.link;
                }
            }

            // process the layers
            r2bm.layers.forEach((r2bml: any, idx: number) => {
                const r4bml: RampBasemapLayerConfig = {
                    id: r2bml.id || `${r2bm.id}-${idx}`,
                    layerType: r2bml.layerType === 'esriDynamic' ? LayerType.MAPIMAGE : LayerType.TILE,
                    url: r2bml.url,
                    opacity: r2bml.opacity ?? 1
                };
                r4bm.layers.push(r4bml);
            });

            r4c.map.basemaps.push(r4bm);
        });
    }

    if (r2Map.legend) {
        r4c.fixturesEnabled.push('legend');
        if (r2Map.legend.type === 'autopopulate') {
            // default legend - just add an entry for each layer. For map image and WMS layers, create an entry group and
            // add an entry for each layer entry.
            r4c.fixtures.legend = {
                root: {
                    name: "I'm root",
                    children: []
                }
            };
            // layers already mapped through layerUpgrader
            if (r4c.layers) {
                r4c.layers.toReversed().forEach((r4layer: any) => {
                    if (r4layer.type === 'esri-map-image' || r4layer.type === 'ogc-wms') {
                        const entryGroup: any = {
                            name: r4layer.name ?? `${r4layer.id} Group`,
                            children: []
                        };
                        r4layer.sublayers.forEach((r4Sublayer: any) => {
                            const entry: any = {
                                layerId: r4layer.id
                            };
                            if (r4Sublayer.name) {
                                entry.name = r4Sublayer.name;
                            }
                            if (r4Sublayer.controls) {
                                entry.controls = r4Sublayer.controls;
                            }
                            if (r4Sublayer.disabledControls) {
                                entry.disabledControls = r4Sublayer.disabledControls;
                            }
                            if (r4layer.type === 'esri-map-image') {
                                entry.sublayerIndex = r4Sublayer.index;
                            } else {
                                entry.sublayerId = r4Sublayer.id;
                                console.warn(
                                    `sublayerId property defined in legend entry ${entry.layerId} is currently not supported.`
                                );
                            }
                            entryGroup.children.push(entry);
                        });
                        r4c.fixtures.legend.root.children.push(entryGroup);
                    } else {
                        const entry: any = {
                            layerId: r4layer.id
                        };
                        if (r4layer.controls) {
                            entry.controls = r4layer.controls;
                        }
                        if (r4layer.disabledControls) {
                            entry.disabledControls = r4layer.disabledControls;
                        }
                        r4c.fixtures.legend.root.children.push(entry);
                    }
                });
            }
        } else {
            r4c.fixtures.legend = {
                root: legendGroupUpgrader(r2Map.legend.root)
            };
        }
    }
}

/**
 * Map a legend entry group from RAMP2 to RAMP4 config.
 * @param r2legendGroup legend entry group from RAMP2 config
 * @return legend entry group from RAMP4 config
 */
function legendGroupUpgrader(r2legendGroup: any) {
    const r4legendGroup: any = { name: r2legendGroup.name, children: [] };
    if (typeof r2legendGroup.hidden !== 'undefined') {
        r4legendGroup.hidden = r2legendGroup.hidden;
    }
    if (typeof r2legendGroup.expanded !== 'undefined') {
        r4legendGroup.expanded = r2legendGroup.expanded;
    }
    const allowedControls = ['identify', 'opacity', 'reload', 'remove', 'settings', 'symbology', 'visibility'];
    if (r2legendGroup.controls && r2legendGroup.controls.length > 0) {
        r4legendGroup.controls = controlsUpgrader(r2legendGroup.controls, allowedControls);
        if (r2legendGroup.controls.includes('visibility')) {
            r4legendGroup.controls.push('visibilityButton');
        }
        if (r2legendGroup.controls.length !== 1 || r2legendGroup.controls[0] !== 'visibility') {
            console.warn(
                `Legend entry groups currently support only the visibility control. All other controls are currently not supported.`
            );
        }
        r4legendGroup.controls.push('expandButton');
    }
    if (r2legendGroup.disabledControls && r2legendGroup.disabledControls.length > 0) {
        r4legendGroup.disabledControls = controlsUpgrader(r2legendGroup.disabledControls, allowedControls);
        if (r2legendGroup.disabledControls.includes('visibility')) {
            r4legendGroup.disabledControls.push('visibilityButton');
        }
        if (r2legendGroup.disabledControls.length !== 1 || r2legendGroup.disabledControls[0] !== 'visibility') {
            console.warn(
                `Legend entry groups currently support only the visibility control. All other controls are currently not supported.`
            );
        }
    }
    r2legendGroup.children.forEach((child: any) => {
        // child is a legend entry
        if (child.layerId) {
            r4legendGroup.children.push(legendEntryUpgrader(child));
        }
        // child is an info section
        else if (child.infoType) {
            if (child.infoType === 'unboundLayer') {
                console.warn(
                    `unboundLayer infoType in infoSection in children list of legend entry group ${r4legendGroup.name} cannot be mapped and will be skipped.`
                );
            } else {
                r4legendGroup.children.push({
                    infoType: child.infoType,
                    content: child.content
                });
                if (typeof child.export !== 'undefined') {
                    console.warn(
                        `export property in infoSection in children list of legend entry group ${r4legendGroup.name} cannot be mapped and will be skipped.`
                    );
                }
            }
        }
        // child is a visibility set
        else if (child.exclusiveVisibility) {
            const visibilitySet: any = {
                name: 'Visibility Set',
                children: [],
                exclusive: true
            };
            if (typeof child.collapse !== 'undefined') {
                console.warn(
                    `collapse property in visibilitySet in children list of legend entry group ${r4legendGroup.name} cannot be mapped and will be skipped.`
                );
            }
            child.exclusiveVisibility.forEach((item: any) => {
                // item is a layer entry
                if (item.layerId) {
                    visibilitySet.children.push(legendEntryUpgrader(item));
                }
                // item is a layer entry group
                else {
                    visibilitySet.children.push(legendGroupUpgrader(item));
                }
            });
            r4legendGroup.children.push(visibilitySet);
        }
        // child is a legend entry group
        else {
            r4legendGroup.children.push(legendGroupUpgrader(child));
        }
    });
    return r4legendGroup;
}

/**
 * Map legend entry from RAMP2 to RAMP4 config.
 * @param r2legendEntry legend entry from RAMP2 config
 * @return legend entry from RAMP4 config
 */
function legendEntryUpgrader(r2legendEntry: any) {
    const r4legendEntry: any = r2legendEntry; // mostly a 1:1 mapping
    const allowedControls = [
        'boundaryZoom',
        'datatable',
        'identify',
        'metadata',
        'opacity',
        'refresh',
        'reload',
        'remove',
        'settings',
        'symbology',
        'visibility'
    ];
    if (r2legendEntry.controls && r2legendEntry.controls.length > 0) {
        r4legendEntry.layerControls = controlsUpgrader(r2legendEntry.controls, allowedControls);
        r4legendEntry.layerControls.push('symbology');
    }
    if (r2legendEntry.disabledControls && r2legendEntry.disabledControls.length > 0) {
        r4legendEntry.disabledLayerControls = controlsUpgrader(r2legendEntry.disabledControls, allowedControls);
    }
    // Warning party
    // remove these warnings whenever we add support for one of these properties.
    if (r2legendEntry.controlledIds) {
        console.warn(
            `controlledIds property defined in legend entry ${r2legendEntry.layerId} cannot be mapped and will be skipped.`
        );
        delete r4legendEntry.controlledIds;
    }
    if (r2legendEntry.entryIndex) {
        r4legendEntry.sublayerIndex = r2legendEntry.entryIndex;
        delete r2legendEntry.entryIndex;
    }
    if (r2legendEntry.entryId) {
        console.warn(
            `entryId property defined in legend entry ${r2legendEntry.layerId} cannot be mapped and will be skipped.`
        );
    }
    return r4legendEntry;
}

/**
 * Map layer from RAMP2 to RAMP4 config.
 * @param r2layer layer from RAMP2 config
 * @return layer from RAMP4 config
 */
export function layerUpgrader(r2layer: any): any {
    const r4layer: any = layerCommonPropertiesUpgrader(r2layer);
    r4layer.id = r2layer.id;
    r4layer.url = r2layer.url;

    // fill in the properties that are common across many layer types to avoid duplicate code
    if (r2layer.refreshInterval) {
        r4layer.refreshInterval = r2layer.refreshInterval;
        console.warn('Property refreshInterval in layer is currently not supported.');
    }
    if (r2layer.expectedResponseTime) {
        r4layer.expectedLoadTime = r2layer.expectedResponseTime;
    }
    if (r2layer.metadataUrl) {
        r4layer.metadata = {
            url: r2layer.metadataUrl
        };
    }
    if (r2layer.catalogueUrl) {
        r4layer.catalogueUrl = r2layer.catalogueUrl;
    }

    if (typeof r2layer.enableStructuredDelete !== 'undefined') {
        console.warn(
            `enableStructuredDelete property provided in layer ${r2layer.id} cannot be mapped and will be skipped.`
        );
    }

    if (r2layer.tooltipField) {
        r4layer.maptipField = r2layer.tooltipField;
    }
    if (r2layer.tolerance) {
        r4layer.mouseTolerance = r2layer.tolerance;
        if (r2layer.layerType === 'esriDynamic') {
            r4layer.touchTolerance = r2layer.tolerance + 10;
        }
    }
    if (r2layer.customRenderer) {
        r4layer.customRenderer = r2layer.customRenderer;
    }

    switch (r2layer.layerType) {
        case 'esriDynamic':
            r4layer.layerType = 'esri-map-image';
            if (typeof r2layer.singleEntryCollapse !== 'undefined') {
                r4layer.singleEntryCollapse = r2layer.singleEntryCollapse;
            }
            if (r2layer.imageFormat) {
                r4layer.imageFormat = r2layer.imageFormat;
            }
            if (r2layer.layerEntries) {
                r4layer.sublayers = [];
                r2layer.layerEntries.forEach((r2LayerEntry: any) => {
                    const r4Sublayer: any = layerCommonPropertiesUpgrader(r2LayerEntry);
                    r4Sublayer.index = r2LayerEntry.index;

                    r4layer.sublayers.push(r4Sublayer);
                });
            }
            break;

        case 'esriFeature':
            r4layer.layerType = 'esri-feature';

            // Check if this feature layer is actually a file layer, and map file layer properties
            if (r2layer.fileType) {
                r4layer.layerType = r2layer.fileType === 'shapefile' ? 'file-shape' : `file-${r2layer.fileType}`;
                if (r2layer.colour) {
                    r4layer.colour = r2layer.colour;
                }
                if (r2layer.latField) {
                    r4layer.latField = r2layer.latField;
                }
                if (r2layer.longField) {
                    r4layer.longField = r2layer.longField;
                }
            }
            break;
        case 'ogcWfs':
            r4layer.layerType = 'ogc-wfs';
            if (r2layer.colour) {
                r4layer.colour = r2layer.colour;
            }
            if (typeof r2layer.xyInAttribs !== 'undefined') {
                r4layer.xyInAttribs = r2layer.xyInAttribs;
            }
            break;

        case 'ogcWms':
            r4layer.layerType = 'ogc-wms';
            if (r2layer.suppressGetCapabilities) {
                console.warn(
                    `suppressGetCapabilities property provided in layer ${r2layer.id} cannot be mapped and will be skipped.`
                );
            }
            if (r2layer.featureInfoMimeType) {
                if (r2layer.featureInfoMimeType === 'text/html;fgpv=summary') {
                    r4layer.featureInfoMimeType = 'text/html';
                } else {
                    r4layer.featureInfoMimeType = r2layer.featureInfoMimeType;
                }
            }
            if (r2layer.legendMimeType) {
                console.warn(
                    `legendMimeType property provided in layer ${r2layer.id} cannot be mapped and will be skipped.`
                );
            }
            if (r2layer.layerEntries) {
                r4layer.sublayers = [];
                r2layer.layerEntries.forEach((r2LayerEntry: any) => {
                    const r4Sublayer: any = layerCommonPropertiesUpgrader(r2LayerEntry);
                    r4Sublayer.id = r2LayerEntry.id;
                    if (r2LayerEntry.currentStyle) {
                        r4Sublayer.currentStyle = r2LayerEntry.currentStyle;
                        console.warn(
                            `currentStyle property provided in layer entry ${r2LayerEntry.id} of layer ${r2layer.id} is currently not supported.`
                        );
                    }
                    if (r2LayerEntry.allStyles) {
                        console.warn(
                            `allStyles property provided in layer entry ${r2LayerEntry.id} of layer ${r2layer.id} cannot be mapped and will be skipped.`
                        );
                    }
                    r4layer.sublayers.push(r4Sublayer);
                });
            }
            break;

        case 'esriImage':
            r4layer.layerType = 'esri-imagery';
            break;

        case 'esriTile':
            r4layer.layerType = 'esri-tile';
            break;

        default:
            console.warn(`Unhandled layer type in ramp 2 config ${r2layer.layerType}`);
    }

    if (r2layer.details) {
        console.warn(`Details config provided in layer ${r2layer.id} cannot be mapped and will be skipped.`);
    }

    return r4layer;
}

/**
 * Maps the common properties in layer and layer entry to avoid duplicate code.
 * @param r2layer layer or layer entry from ramp 2 config
 * @returns layer or layer entry from ramp 4 config with common properties mapped
 */

function layerCommonPropertiesUpgrader(r2layer: any) {
    const r4layer: any = {};
    if (r2layer.name) {
        r4layer.name = r2layer.name;
    }
    if (r2layer.nameField) {
        r4layer.nameField = r2layer.nameField;
    }
    if (r2layer.extent) {
        r4layer.extent = r2layer.extent;
    }
    const allowedControls: string[] = [
        'boundaryZoom',
        'datatable',
        'identify',
        'metadata',
        'opacity',
        'refresh',
        'reload',
        'remove',
        'settings',
        'symbology',
        'visibility'
    ];
    if (r2layer.controls && r2layer.controls.length > 0) {
        r4layer.controls = controlsUpgrader(r2layer.controls, allowedControls);
        r4layer.controls.push('symbology');
    }

    if (r2layer.disabledControls && r2layer.disabledControls.length > 0) {
        r4layer.disabledControls = controlsUpgrader(r2layer.disabledControls, allowedControls);
    }

    if (r2layer.state) {
        r4layer.state = {
            opacity: r2layer.state.opacity ?? 1,
            visibility: r2layer.state.visibility ?? true,
            identify: r2layer.state.query ?? true,
            maptips: r2layer.state.hovertips ?? true
        };
        if (typeof r2layer.state.snapshot !== 'undefined') {
            console.warn(
                `snapshot property provided in initialLayer settings in layer ${r2layer.id} cannot be mapped and will be skipped.`
            );
        }
        if (typeof r2layer.state.boundingBox !== 'undefined') {
            console.warn(
                `boundingBox property provided in initialLayer settings in layer ${r2layer.id} cannot be mapped and will be skipped.`
            );
        }
    }

    if (typeof r2layer.stateOnly !== 'undefined') {
        r4layer.cosmetic = r2layer.stateOnly;
    }

    if (r2layer.initialFilteredQuery) {
        r4layer.initialFilteredQuery = r2layer.initialFilteredQuery;
    }

    // deal with fields mayhem
    fieldsSausageGrinder(r2layer, r4layer);

    if (typeof r2layer.toggleSymbology !== 'undefined') {
        console.warn(`toggleSymbology property provided in layer ${r2layer.id} cannot be mapped and will be skipped.`);
    }

    if (r2layer.table) {
        r4layer.fixtures = {
            grid: {}
        };

        if (r2layer.table.title) {
            r4layer.fixtures.grid.title = r2layer.table.title;
        }
        if (r2layer.table.description) {
            console.warn(
                `description property provided in table property in layer ${r2layer.id} cannot be mapped and will be skipped.`
            );
        }
        if (typeof r2layer.table.maximize !== 'undefined') {
            console.warn(
                `maximize property provided in table property in layer ${r2layer.id} cannot be mapped and will be skipped.`
            );
        }
        if (r2layer.table.search) {
            if (r2layer.table.search.enabled) {
                r4layer.fixtures.grid.search = r2layer.table.search.enabled;
            }
            if (r2layer.table.search.value) {
                r4layer.fixtures.grid.searchFilter = r2layer.table.search.value;
            }
        }

        if (typeof r2layer.table.lazyFilter !== 'undefined') {
            console.warn(
                `lazyFilter property provided in table property in layer ${r2layer.id} cannot be mapped and will be skipped.`
            );
        }
        if (typeof r2layer.table.applyMap !== 'undefined') {
            r4layer.fixtures.grid.applyMap = r2layer.table.applyMap;
        }
        if (typeof r2layer.table.showFilter !== 'undefined') {
            r4layer.fixtures.grid.showFilter = r2layer.table.showFilter;
        }
        if (typeof r2layer.table.filterByExtent !== 'undefined') {
            r4layer.fixtures.grid.filterByExtent = r2layer.table.filterByExtent;
        }
        if (typeof r2layer.table.searchStrictMatch !== 'undefined') {
            console.warn(
                `searchStrictMatch property provided in table property in layer ${r2layer.id} cannot be mapped and will be skipped.`
            );
        }
        if (typeof r2layer.table.printEnabled !== 'undefined') {
            console.warn(
                `printEnabled property provided in table property in layer ${r2layer.id} cannot be mapped and will be skipped.`
            );
        }
        if (r2layer.table.columns) {
            r4layer.fixtures.grid.columns = [];
            r2layer.table.columns.forEach((r2tableColumn: any) => {
                const r4tableColumn: any = {
                    field: r2tableColumn.data
                };
                if (r2tableColumn.title) {
                    r4tableColumn.title = r2tableColumn.title;
                }
                if (r2tableColumn.description) {
                    console.warn(
                        `description property provided in column property in table property in layer ${r2layer.id} cannot be mapped and will be skipped.`
                    );
                }
                if (typeof r2tableColumn.visible !== 'undefined') {
                    r4tableColumn.visible = r2tableColumn.visible;
                }
                if (r2tableColumn.width) {
                    r4tableColumn.width = r2tableColumn.width;
                }
                if (r2tableColumn.sort) {
                    r4tableColumn.sort = r2tableColumn.sort;
                }
                if (typeof r2tableColumn.searchable !== 'undefined') {
                    r4tableColumn.searchable = r2tableColumn.searchable;
                }
                if (r2tableColumn.filter) {
                    r4tableColumn.filter = r2tableColumn.filter;
                }
                r4layer.fixtures.grid.columns.push(r4tableColumn);
            });
        }
    }
    return r4layer;
}

/**
 * Convert a RAMP2 controls array into a RAMP4 controls array - controls can be of any type (legendGroup, layer, etc.)
 * @param r2controls controls array from RAMP2 config
 * @param allowedControls controls supported by RAMP4 config
 */
function controlsUpgrader(r2controls: string[], allowedControls: string[]) {
    const r4controls: string[] = [];
    r2controls.forEach((control: any) => {
        if (allowedControls.includes('identify') && control === 'query') {
            r4controls.push('identify');
        } else if (allowedControls.includes('datatable') && control === 'data') {
            r4controls.push('datatable');
        } else if (allowedControls.includes(control)) {
            r4controls.push(control);
        } else {
            console.warn(`Ignored invalid control: ${control}`);
        }
    });
    return r4controls;
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
        r4c.fixtures.geosearch = {};

        // required in ramp2
        r4c.fixtures.geosearch.serviceUrls = {
            geoNames: r2Services.search.serviceUrls.geoNames,
            geoLocation: r2Services.search.serviceUrls.geoLocation,
            geoProvince: r2Services.search.serviceUrls.provinces,
            geoTypes: r2Services.search.serviceUrls.types
        };

        if (r2Services.search.serviceUrls.geoSuggest) {
            console.warn(
                `geoSuggest property provided in serviceUrls of search service cannot be mapped and will be skipped.`
            );
        }

        if (r2Services.search.settings) {
            r4c.fixtures.geosearch.settings = r2Services.search.settings;
        }

        if (r2Services.search.disabledSearches) {
            r4c.fixtures.geosearch.settings.disabledSearchTypes = r2Services.search.disabledSearches.filter(
                (s: string) => s !== 'SCALE'
            );
        }
    }

    if (r2Services.export) {
        // check if the export nugget already exists because the legend info section parser could have created it first
        if (!r4c.fixtures.export) {
            r4c.fixtures.export = {};
            r4c.fixturesEnabled.push('export');
        }

        // if-party to ensure properties are added only if they exists (no undefined props)
        if (r2Services.export.title) {
            r4c.fixtures.export.title = {
                selected: r2Services.export.title.isSelected ?? true,
                selectable: r2Services.export.title.isSelectable ?? true,
                value: r2Services.export.title.value ?? 'RAMP-Map / PCAR-Carte'
            };
        }
        if (r2Services.export.map) {
            r4c.fixtures.export.map = {
                selected: r2Services.export.map.isSelected ?? true,
                selectable: r2Services.export.map.isSelectable ?? true
            };
            if (r2Services.export.map.value) {
                console.warn(`value property provided in map export component cannot be mapped and will be skipped.`);
            }
        }
        if (r2Services.export.mapElements) {
            r4c.fixtures.export.mapElements = {
                selected: r2Services.export.mapElements.isSelected ?? true,
                selectable: r2Services.export.mapElements.isSelectable ?? true
            };
            if (r2Services.export.mapElements.value) {
                console.warn(
                    `value property provided in mapElements export component cannot be mapped and will be skipped.`
                );
            }
        }
        if (r2Services.export.legend) {
            r4c.fixtures.export.legend = {
                selected: r2Services.export.legend.isSelected ?? true,
                selectable: r2Services.export.legend.isSelectable ?? true
            };
            if (r2Services.export.legend.columnWidth) {
                r4c.fixtures.export.legend.columnWidth = r2Services.export.legend.columnWidth;
            }
            if (r2Services.export.legend.value) {
                console.warn(
                    `value property provided in legend export component cannot be mapped and will be skipped.`
                );
            }
            if (typeof r2Services.export.legend.showInfoSymbology !== 'undefined') {
                console.warn(
                    `showInfoSymbology property provided in legend export component cannot be mapped and will be skipped.`
                );
            }
            if (typeof r2Services.export.legend.showControlledSymbology !== 'undefined') {
                console.warn(
                    `showControlledSymbology property provided in legend export component cannot be mapped and will be skipped.`
                );
            }
        }
        if (r2Services.export.footnote) {
            r4c.fixtures.export.footnote = {
                selected: r2Services.export.footnote.isSelected ?? true,
                selectable: r2Services.export.footnote.isSelectable ?? true,
                value: r2Services.export.footnote.value ?? ''
            };
        }
        if (r2Services.export.timestamp) {
            r4c.fixtures.export.timestamp = {
                selected: r2Services.export.timestamp.isSelected ?? true,
                selectable: r2Services.export.timestamp.isSelectable ?? true
            };
            if (r2Services.export.timestamp.value) {
                console.warn(
                    `value property provided in timestamp export component cannot be mapped and will be skipped.`
                );
            }
        }
        if (r2Services.export.timeout) {
            console.warn(
                `timeout property provided in export property of services config cannot be mapped and will be skipped.`
            );
        }
        if (typeof r2Services.cleanCanvas !== 'undefined') {
            console.warn(
                `cleanCanvas property provided in export property of services config cannot be mapped and will be skipped.`
            );
        }
    }

    if (r2Services.proxyUrl) {
        r4c.system.proxyUrl = r2Services.proxyUrl;
    }

    // If any of these properties get implemented/used in the future, remove them from the warning list and map them appropriately.
    const unused: string[] = [
        'corsEverywhere',
        'exportMapUrl',
        'geometryUrl',
        'googleAPIKey',
        'esriLibUrl',
        'geolocation',
        'coordInfo',
        'print'
    ];
    unused.forEach((property: any) => {
        if (typeof r2Services[property] !== 'undefined') {
            console.warn(`${property} property provided in services config cannot be mapped and will be skipped.`);
        }
    });
}

/**
 *
 * @param r2ui ui nugget from ramp 2 config
 * @param r4c entire ramp4 config. param is modded in place, since ramp2 elements end up all over the new config
 */
function uiUpgrader(r2ui: any, r4c: any): void {
    // handle fixture inclusion/exclusion flag in the component config. Append to fixturesEnabled if included

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
                console.warn(`Ignored invalid mapnav item: ${item}`);
            } else {
                r4c.fixtures.mapnav.items.push(itemLower);
            }
        });
        r4c.fixturesEnabled.push('mapnav');
    }

    if (r2ui.help) {
        r4c.fixtures.help = {
            location:
                r2ui.help.folderName && r2ui.help.folderName !== 'default' ? `./${r2ui.help.folderName}` : './help',
            panelWidth: 350
        };
        r4c.fixturesEnabled.push('help');
    }

    if (r2ui.legend) {
        const headerControls: string[] = ['groupToggle', 'visibilityToggle'];
        if (r2ui.legend.reorderable) {
            headerControls.push('layerReorder');
        }

        if (r2ui.legend.allowImport) {
            headerControls.push('wizard');
        }
        // legend already mapped through mapUpgrader
        if (r4c.fixtures.legend) {
            r4c.fixtures.legend.headerControls = headerControls;
        } else {
            r4c.fixturesEnabled.push('legend');
            r4c.fixtures.legend = {
                headerControls: headerControls,
                root: {}
            };
        }
        if (r2ui.legend.isOpen && r2ui.legend.isOpen.large) {
            r4c.panels.open.push({ id: 'legend' });
        }
    }

    // Map appbar - take all the buttons in the R2 side menu and appBar and put them in R4 appbar if they're valid in R4
    r4c.fixtures.appbar = { items: [] };
    r4c.fixturesEnabled.push('appbar');
    const validItems = ['layers', 'basemap', 'export', 'help', 'geoSearch']; // Are there any more?
    if (r2ui.appBar) {
        if (r2ui.appBar.layers !== false) {
            r4c.fixtures.appbar.items.push('legend');
            if (!r4c.fixturesEnabled.includes('legend')) {
                r4c.fixturesEnabled.push('legend');
            }
        }
        if (r2ui.appBar.geoSearch !== false && r4c.fixturesEnabled.includes('geosearch')) {
            r4c.fixtures.appbar.items.push('geosearch');
        }
        if (r2ui.appBar.basemap !== false) {
            r4c.fixtures.appbar.items.push('basemap');
        }
    } else {
        r4c.fixtures.appbar.items.push('legend');
        if (!r4c.fixturesEnabled.includes('legend')) {
            r4c.fixturesEnabled.push('legend');
        }
        r4c.fixtures.appbar.items.push('geosearch');
        r4c.fixtures.appbar.items.push('basemap');
    }
    if (r2ui.sideMenu && r2ui.sideMenu.items && r2ui.sideMenu.items.length > 0) {
        r2ui.sideMenu.items.forEach((r2SideMenuButtons: any[]) => {
            r2SideMenuButtons.forEach((button: any) => {
                if (button === 'layers' && !r4c.fixtures.appbar.items.includes('legend')) {
                    r4c.fixtures.appbar.items.push('legend');
                    if (!r4c.fixturesEnabled.includes('legend')) {
                        r4c.fixturesEnabled.push('legend');
                    }
                } else if (
                    button !== 'layers' &&
                    validItems.includes(button) &&
                    !r4c.fixtures.appbar.items.includes(button.toLowerCase()) // toLowerCase needed to handle geoSearch vs geosearch
                ) {
                    r4c.fixtures.appbar.items.push(button.toLowerCase());
                    if (
                        button.toLowerCase() === 'help' ||
                        (button.toLowerCase() === 'export' && !r4c.fixturesEnabled.includes(button.toLowerCase()))
                    ) {
                        r4c.fixturesEnabled.push(button.toLowerCase());
                    }
                }
            });
        });
    }

    // map tableIsOpen - hunt down the appropriate layer/sublayer and set the table to be open
    // const allowedTypes = [
    //     'esri-map-image',
    //     'esri-feature',
    //     'ogc-wfs',
    //     'file-geojson',
    //     'file-csv',
    //     'file-shape'
    // ];
    if (
        r2ui.tableIsOpen &&
        // r2ui.tableIsOpen.id &&
        r2ui.tableIsOpen.large
        // r4c.layers &&
        // r4c.layers.length > 0
    ) {
        // TODO: revisit once layer usage is normalized and layer-bound panels can be opened on startup.
        // See https://github.com/ramp4-pcar4/ramp4-pcar4/discussions/1279 for details.
        /*
        r4c.panels.open.push({ id: 'grid' });
         for (let i = 0; i < r4c.layers.length; i++) {
            if (
                r4c.layers[i].id === r2ui.tableIsOpen.id &&
                allowedTypes.includes(r4c.layers[i].layerType)
            ) {
                if (
                    r2ui.tableIsOpen.dynamicIndex &&
                    r4c.layers[i].layerType === 'esri-map-image'
                ) {
                    for (let j = 0; j < r4c.layers[i].sublayers.length; j++) {
                        if (
                            r2ui.tableIsOpen.dynamicIndex ===
                            r4c.layers[i].sublayers[j].index
                        ) {
                            if (!r4c.layers[i].sublayers[j].fixtures) {
                                r4c.layers[i].sublayers[j].fixtures = {
                                    grid: {
                                        isOpen: true
                                    }
                                };
                            } else if (
                                !r4c.layers[i].sublayers[j].fixtures.grid
                            ) {
                                r4c.layers[i].sublayers[j].fixtures.grid = {
                                    isOpen: true
                                };
                            } else {
                                r4c.layers[i].sublayers[
                                    j
                                ].fixtures.grid.isOpen = true;
                            }
                        }
                    }
                } else {
                    if (!r4c.layers[i].fixtures) {
                        r4c.layers[i].fixtures = {
                            grid: {
                                isOpen: true
                            }
                        };
                    } else if (!r4c.layers[i].fixtures.grid) {
                        r4c.layers[i].fixtures.grid = {
                            isOpen: true
                        };
                    } else {
                        r4c.layers[i].fixtures.grid.isOpen = true;
                    }
                }
            }
        } */
    }

    // If any of these properties get implemented/used in the future, remove them from the warning list and map them appropriately.
    const unused: string[] = [
        'fullscreen',
        'theme',
        'logoUrl',
        'failureFeedback',
        'title',
        'restrictNavigation',
        'about'
    ];
    unused.forEach((property: any) => {
        if (typeof r2ui[property] !== 'undefined') {
            console.warn(`${property} property provided in services config cannot be mapped and will be skipped.`);
        }
    });
}

/**
 * @param r2plugins plugins nugget from ramp 2 config
 * @param r4c entire ramp4 config. param is modded in place, since ramp2 elements end up all over the new config
 */
function pluginsUpgrader(r2plugins: any, r4c: any): void {
    if (r2plugins.areasOfInterest.enable) {
        // add the areas of interest fixture
        if (!r4c.fixturesEnabled.includes('areas-of-interest')) {
            r4c.fixturesEnabled.push('areas-of-interest');
        }
        if (r2plugins.areasOfInterest.areas) {
            r4c.fixtures['areas-of-interest'] = {
                areas: r2plugins.areasOfInterest.areas.map((area: any) => {
                    return {
                        title: `${area['title-en-CA']} / ${area['title-fr-CA']}`,
                        thumbnail: area.thumbnailUrl,
                        altText: area.altText ?? '',
                        description: area.description ?? '',
                        extent: {
                            xmin: area.xmin,
                            xmax: area.xmax,
                            ymin: area.ymin,
                            ymax: area.ymax,
                            spatialReference: {
                                wkid: area.wkid
                            }
                        }
                    };
                })
            };
        }
    }
}

/**
 * Deals with the cross product scenarios of fieldMetadata and outfields.
 * @param r2Layer ramp2 layer fun
 * @param r4layer gets field metadata updated
 */
function fieldsSausageGrinder(r2layer: any, r4layer: any): void {
    const hasOutfields: boolean = r2layer.outfields && r2layer.outfields !== '*';
    if (!hasOutfields && !r2layer.fieldMetadata) {
        // no config items. do nothing. donethanks
        return;
    }

    const struct = {
        fieldInfo: [] as any[],
        exclusiveFields: false,
        enforceOrder: false
    };

    if (r2layer.fieldMetadata) {
        // we have a field list, probably for providing aliases

        struct.fieldInfo = r2layer.fieldMetadata.map((fmd: any) => {
            const newNugget: any = {
                name: fmd.data
            };
            if (fmd.alias) {
                newNugget.alias = fmd.alias;
            }
            return newNugget;
        });

        if (hasOutfields) {
            // We also have field restriction. ensure any fields not already in the alias list get included.
            // This logic is not perfect. If we have an aliasd field that is not in outfields, unsure how that should be handled
            // (i.e. which overrides). We take the lazy route and let alias override.
            const checkFields = r2layer.outfields.split(',').map((s: string) => s.trim());

            checkFields.forEach((cf: string) => {
                if (struct.fieldInfo.findIndex((fi: any) => fi.name === cf) === -1) {
                    // field did not exist. add it
                    struct.fieldInfo.push({ name: cf });
                }
            });

            struct.exclusiveFields = true;
        }
    } else if (hasOutfields) {
        // we only have outfields, no alias mapping.

        struct.fieldInfo = r2layer.outfields.split(',').map((s: string) => ({ name: s.trim() }));
        struct.exclusiveFields = true;
    }

    r4layer.fieldMetadata = struct;
}
