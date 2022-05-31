// mess of code to convert a RAMP2 config to a RAMP4 config

import { LayerType } from '@/geo/api';

import type {
    RampBasemapConfig,
    RampBasemapLayerConfig,
    RampExtentSetConfig,
    RampTileSchemaConfig
} from '@/geo/api';

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
            console.warn(
                'RAMP2 config with no language supplied. Defaulting to English'
            );
            c.language = 'en';
        }
        const nugget = individualConfigUpgrader(c);

        // index by language, ramp4 style
        r4c[c.language] = nugget;
    });

    // get all fixture enabled lists
    let allFixturesEnabled: string[][] = Object.entries(r4c).map(
        (langConfigPair: [string, any]) => {
            let fixturesEnabled: string[] = langConfigPair[1].fixturesEnabled;
            delete langConfigPair[1].fixturesEnabled; // remove this list from the config nugget
            return fixturesEnabled;
        }
    );

    // intersect all lists into single list (use a boolean to keep track of any mismatching lists)
    let mismatch: boolean = false;
    let startingFixtures: string[] = allFixturesEnabled.reduce((a, b) =>
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
    startingFixtures.push(
        'crosshairs',
        'scrollguard',
        'panguard',
        'wizard',
        'layer-reorder'
    );

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
        ui: {},
        fixtures: {},
        layers: [],
        map: {},
        system: { animate: true },
        fixturesEnabled: [] // this will be removed in the final step of configUpgrade2to4
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
        // TODO: handle fixture inclusion/exclusion flag in the component config. Append to fixturesEnabled if included

        if (
            r2Map.components.overviewMap &&
            r2Map.components.overviewMap.enabled
        ) {
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
                r4c.fixturesEnabled.push('northarrow');
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
                    // add it here so it only adds once
                    r4c.fixturesEnabled.push('overviewmap');
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
        url: r2layer.url
    };

    // fill in the properties that are common across all layer types
    r4layer.name = r2layer.name ?? '';
    if (r2layer.refreshInterval) {
        r4layer.refreshInterval = r2layer.refreshInterval ?? 0; // Should we remove this since we're not supporting refreshInterval for now?
        console.warn(
            'Property expectedResponseTime in layer is currently not supported.'
        );
    }
    if (r2layer.expectedResponseTime) {
        r4layer.expectedResponseTime = r2layer.expectedResponseTime; //  Should we remove this since we're not supporting expectedResponseTime for now?
        console.warn(
            'Property expectedResponseTime in layer is currently not supported.'
        );
    }
    r4layer.metadataUrl = r2layer.metadataUrl ?? null;
    r4layer.catalogueUrl = r2layer.catalogueUrl ?? null;
    r4layer.extent = r2layer.extent ?? null; // seems to be 1 to 1 correspondence between RAMP2 and RAMP4 extent nodes.
    const allowedControls: string[] = [
        'boundaryZoom',
        'boundingBox',
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
    if (r2layer.controls) {
        r4layer.controls = [];
        r2layer.controls.forEach((control: string) => {
            if (control === 'query') {
                r4layer.controls.push('identify');
            } else if (allowedControls.includes(control)) {
                r4layer.controls.push(control);
            } else {
                console.warn(`Ignored invalid layer control: ${control}`);
            }
        });
    }
    // Should disabledControls be removed as well, seeing as it was handled in #884?
    if (r2layer.disabledControls) {
        r4layer.disabledControls = [];
        r2layer.disabledControls.forEach((control: string) => {
            if (control === 'query') {
                r4layer.disabledControls.push('identify');
            } else if (allowedControls.includes(control)) {
                r4layer.disabledControls.push(control);
            } else {
                console.warn(`Ignored invalid layer control: ${control}`);
            }
        });
    }

    if (r2layer.state) {
        r4layer.state = {
            opacity: r2layer.state.opacity ?? 1,
            visibility: r2layer.state.visibility ?? true,
            boundingBox: r2layer.state.boundingBox ?? false,
            identify: r2layer.state.query ?? true,
            hovertips: r2layer.state.hovertips ?? true
        };
        if (typeof r2layer.state.snapshot !== 'undefined') {
            console.warn(
                `snapshot property provided in initialLayer settings in layer ${r2layer.id} cannot be mapped and will be skipped.`
            );
        }
    }

    // TODO fill in the specifcs for each layer type
    //      will probably want sub-functions for common big structures like grid/table,
    //      fields, dynamic & wms sublayers

    switch (r2layer.layerType) {
        case 'esriDynamic':
            r4layer.layerType = 'esri-map-image';
            break;

        case 'esriFeature':
            r4layer.layerType = 'esri-feature';
            break;

        case 'ogcWfs':
            r4layer.layerType = 'ogc-wfs';
            break;

        case 'ogcWms':
            r4layer.layerType = 'ogc-wms';
            break;

        case 'esriImage':
            r4layer.layerType = 'esri-imagery';
            if (typeof r2layer.enableStructuredDelete !== 'undefined') {
                console.warn(
                    `enableStructuredDelete property provided in layer ${r2layer.id} cannot be mapped and will be skipped.`
                );
            }
            break;

        case 'esriTile':
            r4layer.layerType = 'esri-tile';
            if (typeof r2layer.enableStructuredDelete !== 'undefined') {
                console.warn(
                    `enableStructuredDelete property provided in layer ${r2layer.id} cannot be mapped and will be skipped.`
                );
            }
            break;

        default:
            console.warn(
                `Unhandled layer type in ramp 2 config ${r2layer.layerType}`
            );
    }

    if (r2layer.details) {
        console.warn(
            `Details config provided in layer ${r2layer.id} cannot be mapped and will be skipped.`
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
        // check if the export nugget already exists because the legend info section parser could have created it first
        if (!r4c.fixtures.export) {
            r4c.fixtures.export = {};
            r4c.fixturesEnabled.push('export');
        }

        // if-party to ensure properties are added only if they exists (no undefined props)
        if (r2Services.export.title) {
            r4c.fixtures.export.title = r2Services.export.title;
        }
        if (r2Services.export.map) {
            r4c.fixtures.export.map = r2Services.export.map;
        }
        if (r2Services.export.mapElements) {
            r4c.fixtures.export.mapElements = r2Services.export.mapElements;
        }
        if (r2Services.export.legend) {
            r4c.fixtures.export.legend = r2Services.export.legend;
        }
        if (r2Services.export.footnote) {
            r4c.fixtures.export.footnote = r2Services.export.footnote;
        }
        if (r2Services.export.timestamp) {
            r4c.fixtures.export.timestamp = r2Services.export.timestamp;
        }
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
    // TODO: handle fixture inclusion/exclusion flag in the component config. Append to fixturesEnabled if included

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
            folderName: r2ui.help.folderName || 'default',
            panelWidth: 350 // this property is not supported in the RAMP2 config - I'm guessing its ok to initialize to the default
        };
        r4c.fixturesEnabled.push('help');
    }
}
