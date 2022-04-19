// This exists for stuff that needs to be able to run without an instance.
// Mainly done to prevent circular reference errors. A bit sketchy as it
// splits files across folders that would normally be grouped together.
// Brave people can revist and attempt to make nicer without
// triggering circular refs (they appear in the build version,
// serve version is usually fine)

export * from './graphic/graphic';
export * from './graphic/hover';
export * from './graphic/geometry/spatial-reference';
export * from './graphic/geometry/base-geometry';
export * from './graphic/geometry/point';
export * from './graphic/geometry/point-set';
export * from './graphic/geometry/multi-point';
export * from './graphic/geometry/line-string';
export * from './graphic/geometry/multi-line-string';
export * from './graphic/geometry/linear-ring';
export * from './graphic/geometry/polygon';
export * from './graphic/geometry/multi-polygon';
export * from './graphic/geometry/extent';
export * from './graphic/style/style-options';
export * from './graphic/style/point-style-options';
export * from './graphic/style/line-style-options';
export * from './graphic/style/polygon-style-options';
export * from './graphic/geometry/geometry';
export * from './layer/tree-node';
export * from './layer/scale-set';
export * from './layer/filter';
export * from './map/extent-set';
export * from './utils/promise';
export * from './utils/shared-utils';
export * from './utils/projection';
export * from './geo-defs';

// CUSTOM-LAYER
// export * from './layer/layer-base';
