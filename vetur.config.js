/** @type {import('vls').VeturConfig} */
module.exports = {
  settings: {
    "vetur.useWorkspaceDependencies": true,
    "vetur.experimental.templateInterpolationService": true,
  },
  projects: [
    "./packages/ramp-core",
    "./packages/ramp-locale-loader",
    "./packages/ramp-sample-fixtures",
  ],
};
