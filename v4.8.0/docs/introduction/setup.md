# Local development

## Project Setup

Download the latest [Node version](https://nodejs.org/en/download/), currently `v18.3.0` or later.

```sh
npm ci
```

## Compile and Hot-Reload for Development

```sh
npm run dev
```

Current Samples: `https://localhost:5173/demos/enhanced-samples.html`.
Legacy Samples: `https://localhost:5173/demos/index-samples.html`.

### Serve via `http`

```sh
npm run dev-http
```

## Build for production

```sh
npm run build
```

The production files will be placed in the `dist` folder.

## Preview production build (after running build)

```sh
npm run preview
```

Open `http://localhost:5050` in your browser.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) with the recommended extensions (VSCode should bug you to install them).

::: tip
1. Install [Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar).
2. Disable/remove [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur).
3. Type `@builtin typescript` in the search box on the VSCode extensions tab and **disable** "TypeScript and JavaScript Language Features". Volar has its own TS language server so we don't want to run two concurrently.
:::

## public vs demos folders

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

## Demo Builds

The demos of the most recent build are available at https://ramp4-pcar4.github.io/ramp4-pcar4/main/demos/enhanced-all.html.

Demo builds are automatically generated for pull requests if you are a member of the [ramp4-pcar4 organization](https://github.com/orgs/ramp4-pcar4/people) and have your visibility set to public.
