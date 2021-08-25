# R4MP

<p align="center"><img src="./assets/logo.svg"></p>

## Local development

### Editor

[Visual Studio Code](https://code.visualstudio.com) is the recommended editor.

Install the [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension and set it as your default formatter with "Format on save" enabled.

You can also format your code manually by running the command `rush lint`.

### Install build tools

Download and install [Node.js v14.15.4](https://nodejs.org/dist/v14.15.4/node-v14.15.4-x64.msi).

Install [Rushjs](https://rushjs.io) globally with the command `npm install -g @microsoft/rush`.

### Installing dependencies

Use Rush to install dependencies:

```
$ rush install
```

For a list of optional arguments see the [help page](https://rushjs.io/pages/commands/rush_install/).

Avoid using `rush update` unless you need to update the shrinkwrap file (like when a dependency is added/modified in a `package.json` file).

Do not use `rush update --full` unless you are tasked with bumping up all dependencies to the latest SemVer-compatible version.

### Running a development build

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

### Building a prod library

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

## Contributing

### Demo Builds

Demo builds are available at: http://ramp4-app.azureedge.net/demo

Contact a project maintainer for credentials to have your pushed code automatically built and available at the above URL. You'll need to set the provided credentials as secrets in your forked repo (`AZ_LOGIN_NAME`, `AZ_PASSWORD`, `AZ_STORAGE_ACCOUNT`, and `AZ_TENANT`).
