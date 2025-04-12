import{_ as e,o as a,c as s,V as o}from"./chunks/framework.3e3ef19e.js";const b=JSON.parse('{"title":"Local development","description":"","frontmatter":{},"headers":[],"relativePath":"introduction/setup.md","filePath":"introduction/setup.md"}'),n={name:"introduction/setup.md"},t=o('<h1 id="local-development" tabindex="-1">Local development <a class="header-anchor" href="#local-development" aria-label="Permalink to &quot;Local development&quot;">​</a></h1><h2 id="project-setup" tabindex="-1">Project Setup <a class="header-anchor" href="#project-setup" aria-label="Permalink to &quot;Project Setup&quot;">​</a></h2><p>Download the latest <a href="https://nodejs.org/en/download/" target="_blank" rel="noreferrer">Node version</a>, currently <code>v18.3.0</code> or later.</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ci</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="compile-and-hot-reload-for-development" tabindex="-1">Compile and Hot-Reload for Development <a class="header-anchor" href="#compile-and-hot-reload-for-development" aria-label="Permalink to &quot;Compile and Hot-Reload for Development&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Open <code>https://localhost:5173/demos/index-samples.html</code> in your browser.</p><h3 id="serve-via-http" tabindex="-1">Serve via <code>http</code> <a class="header-anchor" href="#serve-via-http" aria-label="Permalink to &quot;Serve via `http`&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev-http</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="build-for-production" tabindex="-1">Build for production <a class="header-anchor" href="#build-for-production" aria-label="Permalink to &quot;Build for production&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>The production files will be placed in the <code>dist</code> folder.</p><h2 id="preview-production-build-after-running-build" tabindex="-1">Preview production build (after running build) <a class="header-anchor" href="#preview-production-build-after-running-build" aria-label="Permalink to &quot;Preview production build (after running build)&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">preview</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Open <code>http://localhost:5050</code> in your browser.</p><h2 id="recommended-ide-setup" tabindex="-1">Recommended IDE Setup <a class="header-anchor" href="#recommended-ide-setup" aria-label="Permalink to &quot;Recommended IDE Setup&quot;">​</a></h2><p><a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VSCode</a> with the recommended extensions (VSCode should bug you to install them).</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><ol><li>Install <a href="https://marketplace.visualstudio.com/items?itemName=vue.volar" target="_blank" rel="noreferrer">Volar</a>.</li><li>Disable/remove <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" rel="noreferrer">Vetur</a>.</li><li>Type <code>@builtin typescript</code> in the search box on the VSCode extensions tab and <strong>disable</strong> &quot;TypeScript and JavaScript Language Features&quot;. Volar has its own TS language server so we don&#39;t want to run two concurrently.</li></ol></div><h2 id="public-vs-demos-folders" tabindex="-1">public vs demos folders <a class="header-anchor" href="#public-vs-demos-folders" aria-label="Permalink to &quot;public vs demos folders&quot;">​</a></h2><p>The <code>public</code> folder is a <strong>static only</strong> folder. It contains the help md files and end-user demo assets and the compiled ramp library source code. Files in this folder are not processed by vite and therefore cannot reference outside files. This is useful for testing if things are broken between the develop and production build.</p><p>To test the files in the <code>public</code> folder locally:</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm run build</span></span>\n<span class="line"><span style="color:#A6ACCD;">npm run preview</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Then open <code>http://localhost:5050/index.html</code> in your browser.</p><p>The <code>demos</code> folder <strong>is</strong> processed by vite and can therefore reference any source file in the repo. This is the starting point for local development. For example, the <code>demos/starter-scripts/main.js</code> file imports <code>{ createInstance, geo } from &#39;@/main&#39;;</code> whereas <code>public/starter-scripts/index.js</code> doesn&#39;t since RAMP is globally defined by the <code>index.html</code> file when it loads <code>&lt;script src=&quot;./lib/ramp.js&quot;&gt;&lt;/script&gt;</code>.</p><p>Run <code>npm run dev</code> then open <code>http://localhost:3000/demos/index.html</code> in your browser.</p><p>During build, the <code>public</code> folder contents are placed into the <code>dist</code> folder.</p><h2 id="demo-builds" tabindex="-1">Demo Builds <a class="header-anchor" href="#demo-builds" aria-label="Permalink to &quot;Demo Builds&quot;">​</a></h2><p>The demos of the most recent build are available at <a href="https://ramp4-pcar4.github.io/ramp4-pcar4/main/demos/index-all.html" target="_blank" rel="noreferrer">https://ramp4-pcar4.github.io/ramp4-pcar4/main/demos/index-all.html</a>.</p><p>Demo builds are automatically generated for pull requests if you are a member of the <a href="https://github.com/orgs/ramp4-pcar4/people" target="_blank" rel="noreferrer">ramp4-pcar4 organization</a> and have your visibility set to public.</p>',29),r=[t];function l(i,p,d,c,u,h){return a(),s("div",null,r)}const v=e(n,[["render",l]]);export{b as __pageData,v as default};
