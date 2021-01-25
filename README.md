# R4MP

## Developing with Docker

<p align="center">
    <img src="https://i.imgur.com/SZc8JnH.png" alt="docker" />
</p>

You can run a full developer environment using Docker containers on Windows, macOS, and Linux distributions.

### Requirements

- [Docker](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
- [Git](https://git-scm.com/downloads)
- [VS Code](https://code.visualstudio.com/Download)

*These dependencies are free to use.*


### Installation

#### Install tools

Follow the instructions to download and install Docker for Windows: https://hub.docker.com/editions/community/docker-ce-desktop-windows.

Add the following extensions to VS Code:
- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- [Visual Studio Code Remote - Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

#### Start container and connect

Run `docker-compose up` to start the container. Navigate to the [Visual Studio Code Remote - Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) you installed in VS Code and right-click the `app` folder selecting the `Open Container` option.

### Workflows

#### Stopping a container

Run `docker-compose down` to shutdown the container.

#### Keeping the image up-to-date

Run `docker-compose pull` whenever you pull updates from the upstream base branch like `develop`. This ensures you have an up-to-date image of the latest develop environment.

#### Changing the default image

By default the latest image from `ghcr.io/ramp4-pcar4/r4mp` tagged `develop` is used. You can define optional parameters `owner` and `branch` before `docker-compose` to change which image is used, like `owner=my_repo branch=my-branch docker-compose up`.

The `branch` parameter can also be the short form SHA8 of the commit your branch is based on. This is useful if you're working off an older version of a base branch like `develop`.

#### Working inside vs outside a container

- All files modified in the container are locally modified and vice-versa. Feel free to modify code inside or outside the container, it's your preference.
- You need to run node/npm/rush commands inside the container.
- Use git locally when committing or pushing/pulling. While Git is available inside the container, it doesn't have your git credentials. Any credentials added inside the image won't persist between containers.
- Some folders like `node_modules` are only available inside the container. If you're developing outside the container VS Code will complain/show inline errors that npm dependencies cannot be found. Developing inside the container avoids this issue.

## Developing locally

### Node.js

Install Node.js `v14.15.4`.

### Rush

Install Rush if you don't already have it:

```
$ npm install -g @microsoft/rush
```

### Installing dependencies

Use Rush to install dependencies:

```
$ rush update
```

To completely clear and reinstall all dependencies, run `rush update -p --full`:

-   `-p` for purge, to remove all the installed packages
-   `--full` just because it looks important

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
