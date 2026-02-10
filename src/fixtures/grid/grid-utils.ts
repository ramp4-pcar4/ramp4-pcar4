import type { AttributeMapPair } from './store';
import type { LayerInstance } from '@/api/internal';

/**
 * Attempts to find an Attribute mapping pair for an attribute belonging to a layer
 * in a grid
 *
 * @param {Record<string, Array<AttributeMapPair>>} layerCols a lookup, keyed by layerId, containing attribute map pairs for each layer
 * @param {string} layerId the layer we are interested in
 * @param {string} attribName the attribute name we are interested. Will match on grid or layer definition.
 * @returns {AttributeMapPair | undefined} the matching pair object if found, undefined otherwise
 */
export function findAttributePair(
    layerCols: Record<string, Array<AttributeMapPair>>,
    layerId: string,
    attribName: string
): AttributeMapPair | undefined {
    return layerCols[layerId].find(
        layerMappingPair => (layerMappingPair.mappedAttr ?? layerMappingPair.origAttr) === attribName
    );
}

/**
 * Find the OID field for a layer, as it would exist in the grid's "rows" data store.
 *
 * @param {Record<string, Array<AttributeMapPair>>} layerCols a lookup, keyed by layerId, containing attribute map pairs for each layer
 * @param {LayerInstance} layer the layer we are interested in
 * @returns {string} the field in the grid row data containing the object id
 */
export function findMappedOidField(layerCols: Record<string, Array<AttributeMapPair>>, layer: LayerInstance): string {
    const oidPair = findAttributePair(layerCols, layer.id, layer.oidField);

    // return based on existence in this order:
    //   a mapped attribute (grid def)
    //   a mapped attribute (source def)
    //   the layer's oid field
    return oidPair ? (oidPair.mappedAttr ?? oidPair.origAttr) : layer.oidField;
}
