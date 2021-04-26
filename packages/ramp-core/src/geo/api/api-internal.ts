// This exists for stuff that needs to be able to run without an instance. /geo/internal is riddled with instance references.
// Anything in /geo/api should be importing from this internal instead of the normal one.

export * from './graphic/graphic';
export * from './graphic/hover';
export * from './graphic/geometry/spatial-reference';
export * from './graphic/geometry/base-geometry';
export * from './graphic/geometry/point';
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
export * from './api-defs';