# R4MP

## Dev setup

### Node.js

Install a version of Node.js that is compatible with Rush. Recommended versions are `v10.13+`, `v12.13+`, `v13.0+`. At this time, use `v11` and `v14` at your peril. This list of versions may change with future updates to Rush.

If running `v10`, you may encounter "out of heap" errors when building the app. This can be mitigated by updating to `v12`, or by running the following command

```
$ export NODE_OPTIONS=--max_old_space_size=4096
```

### Rush

Install Rush if you don't already have it:

```
$ npm install -g @microsoft/rush
```

## Installing dependencies

Use Rush to install dependencies:

```
$ rush update
```

To completely clear and reinstall all dependencies, run `rush update -p --full`:

-   `-p` for purge, to remove all the installed packages
-   `--full` just because it looks important

## Running a development build

```
$ rush serve
```

Fun test page will be found at `http://localhost:8080/`

### Idiosyncrasies of the serve build

Rush is running the `serve` command in all the packages in parallel and ignoring dependency trees. The packages in turn run `webpack --watch` in one form or another to watch and recompile them as files change since Rush itself [cannot run watch tasks in the background right now](https://github.com/microsoft/rushstack/issues/1151). Due to the way Rush is implemented, the `serve` command is executed in packages in the alphabetic order and only the output from the first package's watch.

The alphabetic order makes sense because the `serve` command explicitly ignores dependencies and runs in parallel. Otherwise, it wouldn't have been possible to run `watch` tasks simultaneously--`rush serve` would just be stuck waiting for the first `watch` to return something before proceeding to the next. The only way to control the execution order is by package names (at least this seems to be the case right now).

Due to this technicality, `ramp-core` package should remain the first package on the list as its output is the main indication of the `serve` task progress (`geoapi` and `sample-fixtures` compile very quickly compared to `core`). When adding a new package to the monorepo, its name should not alphabetically precede `ramp-core`.

## Testing

`rush test:e2e` will run a UI-less (headless) version of cypress that will provide output saying which tests passed/failed.

If you want to have a UI or have the tests react to changes in either the code or testing files, you should run `rush test:e2e-ui`.

## Building a prod library

```
$ rush build
```

To serve a production build, run `rush host`, and open `http://localhost:3001/host/`

### Idiosyncrasies of the prod build

Since we are using dynamic imports in the code, webpack generates a chunk file for every source file. This is happening because webpack doesn't know which files/components will be loaded exactly. This creates extra files in the `dist` folder but it doesn't mean all these extra files will be loaded. See this issue for more details: https://github.com/webpack/webpack/issues/4807

In the `dist` folder you might see three `snowman` files because there are three snowman source files:

```
RAMP.umd.snowman.js
RAMP.umd.snowman-appbar-button.js
RAMP.umd.snowman-snowman.js
```

If you host a production build, only `RAMP.umd.snowman.js` is loaded, as it should be because the `snowman` fixture doesn't use any dynamic imports. Contents of `RAMP.umd.snowman-appbar-button.js` and `RAMP.umd.snowman-snowman.js` are included in `RAMP.umd.snowman.js` that's why it's enough to just load this one. The other two files are generated because it's impossible for the build tool to tell that they are not dynamically imported as well.

This issue is annoying, but not harmful (apart from consuming extra storage space with unused files). Maybe it's possible to use tree-shaking to manually specify for which files chunks should not be created to reduce the number of files. See here: https://webpack.js.org/guides/tree-shaking/
