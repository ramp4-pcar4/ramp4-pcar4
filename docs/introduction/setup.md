# Demo Setup for Forked Repos

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

# Local development

## Project Setup

Download [Node v23.3.0](https://nodejs.org/en/blog/release/v23.3.0).

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

The `demos` folder **is** processed by vite and can therefore reference any source file in the repo. This is the starting point for local development. For example, the `demos/starter-scripts/main.js` file imports `{ createInstance, geo } from '@/main';` whereas `public/starter-scripts/index.js` doesn't since RAMP is globally defined by the `index.html` file when it loads `<script src="./ramp.browser.iife.js"></script>`.

Run `npm run dev` then open `http://localhost:3000/demos/index.html` in your browser.

During build, the `public` folder contents are placed into the `dist` folder.

## Demo Builds

The demos of the most recent build are available at https://ramp4-pcar4.github.io/ramp4-pcar4/main/demos/enhanced-all.html.

Demo builds are automatically generated for pull requests if you are a member of the [ramp4-pcar4 organization](https://github.com/orgs/ramp4-pcar4/people) and have your visibility set to public.
