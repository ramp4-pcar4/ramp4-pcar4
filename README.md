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

A proper docsite is in the works. For the time being, the docs [table of contents](https://github.com/ramp4-pcar4/ramp4-pcar4/blob/main/docs/toc.md) is the quickest way to find existing documentation.

## Local development

### Project Setup

Download the latest [Node version](https://nodejs.org/en/download/), currently `v18.3.0` or later.

```sh
npm ci
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

Open `https://localhost:5173/demos/index-samples.html` in your browser.

#### Serve via `http`

```sh
npm run dev-http
```

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

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) with the recommended extensions (VSCode should bug you to install them).

#### Important:

1. Install [Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar).
2. Disable/remove [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur).
3. Type `@builtin typescript` in the search box on the VSCode extensions tab and **disable** "TypeScript and JavaScript Language Features". Volar has its own TS language server so we don't want to run two concurrently.

### public vs demos folders

The `public` folder is a **static only** folder. It contains the help md files and end-user demo assets and the compiled ramp library source code. Files in this folder are not processed by vite and therefore cannot reference outside files. This is useful for testing if things are broken between the develop and production build.

To test the files in the `public` folder locally:

```js
npm run build
npm run preview
```

Then open `http://localhost:5050/index.html` in your browser.

The `demos` folder **is** processed by vite and can therefore reference any source file in the repo. This is the starting point for local development. For example, the `demos/starter-scripts/main.js` file imports `{ createInstance, geo } from '@/main';` whereas `public/starter-scripts/index.js` doesn't since RAMP is globally defined by the `index.html` file when it loads `<script src="./lib/ramp.js"></script>`.

Run `npm run dev` then open `http://localhost:3000/demos/index.html` in your browser.

During build, the `public` folder contents are placed into the `dist` folder.

### Demo Builds

The demos of the most recent build are available at https://ramp4-pcar4.github.io/ramp4-pcar4/main/demos/index-all.html.

Demo builds are automatically generated for pull requests if you are a member of the [ramp4-pcar4 organization](https://github.com/orgs/ramp4-pcar4/people) and have your visibility set to public.
