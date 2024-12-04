# R4MP

<p align="center"><img src="./assets/logo.svg"></p>

RAMP - The Reusable Accessible Mapping Platform, is a Javascript based web mapping platform that provides a reusable, responsive and WCAG 2.1 AA compliant common viewer for the Government of Canada. The fourth incarnation embraces the following large-scale changes

-   Updating the UI framework from Angular 1 to Vue 3
-   Updating the ESRI Mapping API from v3 to v4
-   An application architecture and API that is more open and adjustable
-   UI re-design with mobile use in mind

The previous version (RAMP 2 / RAMP 3) can be found [here](https://github.com/fgpv-vpgf/fgpv-vpgf). Differences between the versions are summarized in the [v4.0.0 Release Notes](https://github.com/ramp4-pcar4/ramp4-pcar4/releases/tag/v4.0.0).

> This is an unsupported product. If you require a supported version please contact applicationsdecartographieweb-webmappingapplications@ec.gc.ca for a cost estimate. The software and code samples available on this website are provided "as is" without warranty of any kind, either express or implied. Use at your own risk. Access to this GitHub repository could become unavailable at any point in time.

![](https://byob.yarr.is/ramp4-pcar4/ramp4-pcar4/tsbadge) ![](https://byob.yarr.is/ramp4-pcar4/ramp4-pcar4/lintbadge)

## Documentation

Documentation Site with unpublished changes can be found [here](https://ramp4-pcar4.github.io/ramp4-pcar4/main/docs/).

Head to the [Releases](https://github.com/ramp4-pcar4/ramp4-pcar4/releases) page for version-specific official documentation sites.

## Browser Support

RAMP **supports** modern versions of Google Chrome, Microsoft Edge, and Firefox on desktop, and Google Chrome, Firefox, and Safari (iOS) on mobile devices. We suggest keeping your browser up-to-date to ensure full functionality.

Internet Explorer is **not supported**. Use at your own discretion. 

RAMP should still work on most other browsers, but we cannot promise support or fixes. However, if you notice any issues, please feel free to let us know.

## Local development

### Project Setup

Download [Node v22.5.1](https://nodejs.org/en/blog/release/v22.5.1).

```sh
npm ci
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
Current Samples: `https://localhost:5173/demos/enhanced-samples.html`.
Legacy Samples: `https://localhost:5173/demos/index-samples.html`.

#### Serve via `http`

```sh
npm run dev-http
```

### Building the application

```sh
npm run build
```

This command runs four parallel builds, each with a different target mode and use case. This is done because Vite and Rollup do not support multiple build configurations at the same time. The modes are:

- `npm run build:npm`: This build generates the `dist/bundler` folder which contains RAMP library split into ES modules. This is the content that would be used if RAMP is installed via npm. All `package.json` dependencies are excluded from these files, the consuming applications npm manager and build process will handle this.

- `npm run build:esDynamic`: This build generates the `dist/esDynamic` folder which contains the RAMP library split into ES modules. This is useful for web applications that want dynamic imports to reduce the size of the initial bundle.

- `npm run build:inline`: This build generates the `dist/ramp.browser.es.js` and `dist/ramp.browser.iife.js` files which contain the entire RAMP library as a single file. These files don't support dynamic imports and should only be used if the consuming environment doesn't support ES modules (use iife) and/or only one RAMP file can be hosted.

- `npm run build:demos`: This build generates the `dist/demos` folder which contains the demo files. These files are the closest representation of a local develop serve.

You can also run these commands separately if you only need to build one of the modes.

### Preview production build (after running build)

```sh
npm run preview
```

Open `http://localhost:5050` in your browser.

###  Preview Vitepress documentation

```sh
npx vitepress dev docs
```

###  Build Vitepress documentation

```sh
npm run vite-docs:generate
```

Static site generated in the `vite-docs` directory.


###  Preview/Build TypeDoc documentation

```sh
npm run ts-docs:generate
```

Static site generated in the `ts-docs` directory. Open `index.html` to preview.

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) with the recommended extensions (VSCode should bug you to install them).

#### Important:

1. Install [Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar).
2. Disable/remove [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur).
3. Type `@builtin typescript` in the search box on the VSCode extensions tab and **disable** "TypeScript and JavaScript Language Features". Volar has its own TS language server so we don't want to run two concurrently.

### public vs demos folders

The `public` folder is a **static only** folder. It contains the help md files and end-user demo assets and the compiled RAMP library source code. Files in this folder are not processed by vite and therefore cannot reference outside files. This is useful for testing if things are broken between the develop and production build.

To test the files in the `public` folder locally:

```js
npm run build
npm run preview
```

Then open `http://localhost:5050/index.html` in your browser.

The `demos` folder **is** processed by vite and can therefore reference any source file in the repo. This is the starting point for local development. For example, the `demos/starter-scripts/main.js` file imports `{ createInstance, geo } from '@/main';` whereas `public/starter-scripts/index.js` doesn't since RAMP is globally defined by the `index.html` file when it loads `<script src="./ramp.browser.iife.js"></script>`.

Run `npm run dev` then open `http://localhost:3000/demos/index.html` in your browser.

During build, the `public` folder contents are placed into the `dist` folder.

### Demo Builds

When you push changes to your forked repo, a demo preview is automatically generated. The demo preview will update each time you push changes. Note that demos are deleted daily whenever the source branch or tag is deleted from your forked repo.

### Accessing Your Demo Previews:
- **Branch or Tag Preview**: Visit `https://{{github-username}}.github.io/ramp4-pcar4/{{branch-or-tag-name}}` to see a live preview of the branch or tag you've pushed.
- **List of All Demos**: View all your demo previews by navigating to `https://github.com/{{github-username}}/ramp4-pcar4/tree/demo-page`.

### Enabling Demos for Your Forked Repo:
To enable demo previews on your forked repository, update the following settings:

1. **GitHub Pages**:
   - Go to `Settings -> Pages -> Build and deployment source` and select **GitHub Actions**.
   
2. **Deployment Branches and Tags**:
   - Navigate to `Settings -> Environments -> github-pages -> Deployment branches and tags` and choose **No restriction**.

3. **Actions Permissions**:
   - Under `Settings -> Actions -> General -> Actions permissions`, set it to **Allow all actions and reusable workflows**.

4. **Workflow Permissions**:
   - Go to `Settings -> Actions -> General -> Workflow permissions`, and select **Read and write permissions**.
