# R4MP

<p align="center"><img src="./assets/logo.svg"></p>

RAMP - The Reusable Accessible Mapping Platform, is a Javascript based web mapping platform that provides a reusable, responsive and WCAG 2.1 AA compliant common viewer for the Government of Canada. The fourth incarnation embraces the following large-scale changes

-   Updating the UI framework from Angular 1 to Vue 3
-   Updating the ESRI Mapping API from v3 to v4
-   An application architecture and API that is more open and adjustable
-   UI re-design with mobile use in mind

This project is currently in development. Incomplete features, bugs, and breaking changes to the API and configuration schema should be expected until the `v1.0.0` release. The previous version can be found [here](https://github.com/fgpv-vpgf/fgpv-vpgf).

> This is an unsupported product. If you require a supported version please contact applicationsdecartographieweb-webmappingapplications@ec.gc.ca for a cost estimate. The software and code samples available on this website are provided "as is" without warranty of any kind, either express or implied. Use at your own risk. Access to this GitHub repository could become unavailable at any point in time.

## Local development

### public vs demos folders

The `public` folder is a **static only** folder. It contains the help md files and a `samples` subfolder containing end-user demo assets and ramp library source code in various formats (es, umd, iife). Files in this folder are not processed by vite and therefore cannot reference outside files. This is useful for testing if things are broken between the develop and production build. Later on these files will be published to npm, unpkg and others.

To test the files in the `public/samples` folder locally:

```js
npm run build
npm run preview
```

Then open `http://localhost:5050/samples/index.html` in your browser.

The `demos` folder **is** processed by vite and can therefore reference any source file in the repo. This is the starting point for local development. For example, the `demos/starter-scripts/main.js` file imports `{ createInstance, geo } from '@/main';` whereas `public/samples/starter-scripts/main.js` doesn't since RAMP is globally defined by the `index.html` file when it loads `<script src="./lib/ramp.iife.js"></script>`.

Run `npm run dev` then open `http://localhost:3000/demos/index.html` in your browser.

During build, both `demos` and `public` folders are placed into `dist`.

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) with the recommended extensions (VSCode should bug you to install them).

#### Important:

1. Install [Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar).
2. Disable/remove [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur).
3. Type `@builtin typescript` in the search box on the VSCode extensions tab and **disable** "TypeScript and JavaScript Language Features". Volar has its own TS language server so we don't want to run two concurrently.

### Project Setup

Download the latest [Node LTS version](https://nodejs.org/en/download/), currently v16.14.x. Node current also works (v17.9.x).

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

Open `http://localhost:3000` in your browser.

### Build for production

```sh
npm run build
```

The production files will be placed in the `dist` folder.

### Preview production build (after running build)

```sh
npm run preview
```

Open `http://localhost:5050` in your browser.

### Demo Builds

Demo builds are available at: http://ramp4-app.azureedge.net/demo

Contact a project maintainer for credentials to have your pushed code automatically built and available at the above URL. You'll need to set the provided credentials as secrets in your forked repo (`AZ_LOGIN_NAME`, `AZ_PASSWORD`, `AZ_STORAGE_ACCOUNT`, and `AZ_TENANT`).

Random update