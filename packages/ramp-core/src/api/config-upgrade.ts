// mess of code to convert a RAMP2 config to a RAMP4 config

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
        fixtures: [],
        layers: [],
        map: {},
        system: {},
        animate: true
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
        // TODO process components. A lot of these translate to fixture inclusion/exclusion
    }

    if (r2Map.extentSets) {
        // TODO process extent sets. Need to hoist the spatial reference that is sitting at set level
        //      into each extent for r4
    }

    if (r2Map.lodSets) {
        // TODO process lod sets. I beleive they are 1-to-1
    }

    if (r2Map.tileSchemas) {
        // TODO process schemas. I beleive they are 1-to-1
    }

    if (r2Map.basemaps) {
        // TODO process basemap array
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
        layerType: r2layer.layerType,
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
}
