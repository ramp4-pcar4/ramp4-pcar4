import{_ as a,o as e,c as n,S as l}from"./chunks/framework.77ab29a0.js";const u=JSON.parse('{"title":"Fixtures","description":"","frontmatter":{},"headers":[],"relativePath":"using-ramp4/fixtures/custom-fixtures.md","filePath":"using-ramp4/fixtures/custom-fixtures.md"}'),o={name:"using-ramp4/fixtures/custom-fixtures.md"};function p(t,s,r,c,i,d){return e(),n("div",null,s[0]||(s[0]=[l(`<h1 id="fixtures" tabindex="-1">Fixtures <a class="header-anchor" href="#fixtures" aria-label="Permalink to &quot;Fixtures&quot;">​</a></h1><p>This covers various ways to create fixtures.</p><h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;">​</a></h2><p>The fixture interface has one optional property: <code>persist</code>. This indicates whether the fixture should remain in the instance upon language change. Defaults to <code>true</code>. Note that if only one config is provided for all languages, the fixture will remain in the instance on language change, regardless of the value of the flag. Here is a code snippet that shows how to use this property:</p><div class="language-JS line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">JS</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fixture</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isLoaded</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">basemap</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">bm</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">bm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">persist</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setLanguage</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fr</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// basemap fixture will be removed</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>The fixture interface has three methods, all optional. They take no parameters and return no value. If a custom fixture implements them, the RAMP instance will run them at the appropriate time.</p><ul><li><code>added()</code> is run when the fixture has been added to the RAMP instance</li><li><code>initialized()</code> is run when the fixture is <code>added</code> and the instance Map has finished initializing</li><li><code>removed()</code> is run after fixture is removed from the RAMP instance</li></ul><h2 id="pre-made-fixtures" tabindex="-1">Pre-Made Fixtures <a class="header-anchor" href="#pre-made-fixtures" aria-label="Permalink to &quot;Pre-Made Fixtures&quot;">​</a></h2><p>RAMP includes some pre-made fixtures that are not considered &quot;default&quot;, meaning they must be added. Given the implementation exists in the library, only the fixture name needs to be provided to the instance.</p><p>This can be accomplished via the <code>startingFixtures</code> array in the instance configuration, or via an API call (<code>instance.fixture.add(&#39;fixturename&#39;)</code>).</p><p>The current list of available fixture names are</p><ul><li><code>areas-of-interest</code></li><li><code>export</code></li><li><code>extentguard</code></li><li><code>metadata</code></li></ul><h2 id="creation" tabindex="-1">Creation <a class="header-anchor" href="#creation" aria-label="Permalink to &quot;Creation&quot;">​</a></h2><h3 id="internal" tabindex="-1">Internal <a class="header-anchor" href="#internal" aria-label="Permalink to &quot;Internal&quot;">​</a></h3><p>This approach involves forking the R4MP code-base, adding new fixtures, and re-building the project. While this can be rather intensive, the result means the new fixtures are now a part of the R4MP library you are hosting and can be used like other provided fixtures.</p><p>Fixture code should be placed in a directory within <code>src/fixtures</code>. The directory name should be the fixture name. The existing source code can be used as a guide or template to begin a fixture, if desired.</p><p>The remaining creation examples deal with fixtures that are defined outside of the R4MP source, and are more appropriate for a site that is just using the compiled R4MP library (and not wanting to fork &amp; rebuild).</p><h3 id="headless" tabindex="-1">Headless <a class="header-anchor" href="#headless" aria-label="Permalink to &quot;Headless&quot;">​</a></h3><p>For a non-visual (i.e. no need for Vue UI rendering) fixture, a class that respect the fixture interface can be loaded.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HeadlessFixture</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">initialized</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// do stuff</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$iApi</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">geo</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">zoomToLevel</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">8</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fixture</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">headless</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> HeadlessFixture)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>Note the <code>.add()</code> method will upgrade the class prototype so it has the standard fixture stuff, like the <code>.$iApi</code> property in the example.</p><h3 id="plain-javascript" tabindex="-1">Plain Javascript <a class="header-anchor" href="#plain-javascript" aria-label="Permalink to &quot;Plain Javascript&quot;">​</a></h3><p>This type of fixture is written in plain JS, and requires no compilation step since it doesn&#39;t use Vue components or Vue templates or imports any other third-party code. Vue templates in this type of fixture are written as render functions, hence already compiled in the format Vue runtime can understand.</p><p>This is the most simple and fast way to create fixtures as no build step is required. It is also the most compact way to create fixtures as no external code (like Vue component decorators or other helper functions) is included in the fixture bundle.</p><p>A sample of this type of fixture can be found <a href="https://github.com/ramp4-pcar4/ramp4-pcar4/blob/main/demos/starter-scripts/sample-fixtures/diligord/diligord-fixture.js" target="_blank" rel="noreferrer">here</a>.</p><h3 id="typescript-vue-decorators" tabindex="-1">Typescript, Vue Decorators <a class="header-anchor" href="#typescript-vue-decorators" aria-label="Permalink to &quot;Typescript, Vue Decorators&quot;">​</a></h3><p>This type of fixture is written in Typescript and contains a <code>.vue</code> single-file component in which code is written with the help of Vue decorators (<code>Component</code> and <code>Prop</code>). Since this fixture contains a Vue template, a build step is necessary to compile HTML template to the render function Vue runtime understands, as well as converting the Typescript to Javascript.</p><p>This is the most comfortable way to create fixtures since it&#39;s possible to use nice things like decorators and other syntactic sugar, RAMP type definitions, and intellisense.</p><p>The resulting bundle includes more of external code as Vue decorators will be incorporated into the end file.</p><p>A sample of this type of fixture can be found <a href="https://github.com/ramp4-pcar4/ramp4-pcar4/tree/main/demos/starter-scripts/sample-fixtures/iklob" target="_blank" rel="noreferrer">here</a>.</p><p>For more information about how to use <code>Vue</code>, click <a href="https://vuejs.org/guide/introduction.html" target="_blank" rel="noreferrer">here</a></p><blockquote><p><strong>Note:</strong></p><p>Since these fixtures use <code>Vue</code> and <code>Vue</code> runtime is not bundled in, the fixture expects <code>Vue</code> to be available on the global scope.</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- load Vue since RAMP doesn&#39;t bundle it --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- load RAMP after loading Vue --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./ramp.browser.iife.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- load script that creates RAMP instance--&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./starter-scripts/index.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- load fixtures that require Vue --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../dist/sample-fixtures/diligord-fixture.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></blockquote><h3 id="typescript-no-vue-decorators" tabindex="-1">Typescript, No Vue Decorators <a class="header-anchor" href="#typescript-no-vue-decorators" aria-label="Permalink to &quot;Typescript, No Vue Decorators&quot;">​</a></h3><p>This type of fixture is written in Typescript and contains a <code>.vue</code> single-file component. The code of the component, however, is written in plain Typescript, without use of Vue decorators. This fixture also requires a build step.</p><p>The resulting bundle includes a small amount of external code needed to normalize Vue components, plus a UMD wrapper around it.</p><p>Compared to the Vue Decorator technique, this approach offers a smaller package size and avoids having to care about library loading order while still providing the convenience of Typescript and Vue templates. The lack of decorators will likely be the deciding factor.</p><p>A sample of this type of fixture can be found <a href="https://github.com/ramp4-pcar4/ramp4-pcar4/tree/main/packages/ramp-sample-fixtures/src/mouruge" target="_blank" rel="noreferrer">here</a>.</p><h2 id="loading-external-fixtures" tabindex="-1">Loading External Fixtures <a class="header-anchor" href="#loading-external-fixtures" aria-label="Permalink to &quot;Loading External Fixtures&quot;">​</a></h2><h3 id="the-preferred-way" tabindex="-1">The Preferred Way <a class="header-anchor" href="#the-preferred-way" aria-label="Permalink to &quot;The Preferred Way&quot;">​</a></h3><p>The preferred way of loading fixtures involves either importing the fixture class or adding it to the global scope (<code>window.hostedFixtures</code> or any other suitable place) and then letting the host page add it to a specific RAMP instance.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// my-fixture.js</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">hostFixtures </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">hostFixtures </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{};</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">hostFixtures[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">myfixture</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> MyFixture</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// index.html</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- load fixture --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../path/my-fixture.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- load Vue and RAMP --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://unpkg.com/vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./ramp.browser.iife.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> rInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> RAMP</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createInstance</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fixture</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">myfixture</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">hostFixtures</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">myfixture)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="the-other-rare-way" tabindex="-1">The Other (Rare) Way <a class="header-anchor" href="#the-other-rare-way" aria-label="Permalink to &quot;The Other (Rare) Way&quot;">​</a></h3><p>Sometimes, the preferred way doesn&#39;t work. Specifically, it won&#39;t work when it&#39;s not possible to load a fixture that relies on global <code>Vue</code> before <code>RAMP</code> is loaded, and therefore it&#39;s not guaranteed that <code>RAMP</code> won&#39;t be instantiated earlier (before the fixture can add itself to the global scope).</p><p>The following method is more cumbersome since it requires watching a global variable. In such cases, the host page can save the RAMP instance to a global variable and let the fixture add itself to it after the instance is instantiated. This will look something like this:</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// my-fixture.js</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> handle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setInterval</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">rInstance</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// wait for \`rInstance\` to be defined and add \`myfixture\` to it</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fixture</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">myfixture</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">MyFixture</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">clearInterval</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">handle</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// index.html</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- load RAMP + Vue --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ramp+vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- load fixtures that require Vue --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">../path/my-fixture.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> rInstance</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    rInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> RAMP</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createInstance</span><span style="color:#A6ACCD;">(document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="lazy-loading" tabindex="-1">Lazy-Loading <a class="header-anchor" href="#lazy-loading" aria-label="Permalink to &quot;Lazy-Loading&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">NOTE</p><p>The current version of RAMP does not include code splitting in production builds. These methods will still work, however the build will not see the benefit of lazy loading. We plan to re-introduce some version of tree-shaking/lazy-loading/code-splitting in the future.</p></div><p>It&#39;s possible to lazy-load fixture code for screen panels. This will split code for individual panel screens into separate file and will be loaded on demand. Otherwise, all fixture code is loaded right away and it defeats parts of the idea to make R4MP as flexible as possible. See <code>gazebo</code> fixture for examples.</p><p>Two methods of lazy loading:</p><h3 id="insider" tabindex="-1">Insider <a class="header-anchor" href="#insider" aria-label="Permalink to &quot;Insider&quot;">​</a></h3><p>When registering panels, provide a relative path to the screen component to lazy load:</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">screens</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">p-2-screen-2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">gazebo/p2-screen-2.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>The path should be relative to the fixtures home folder, and the <code>panel.ts</code> will try to load a component from <code>src/fixtures/\${screen}</code>.</p><p>This is the simplest way and it&#39;s recommended if you are coding fixtures.</p><h3 id="macho" tabindex="-1">Macho <a class="header-anchor" href="#macho" aria-label="Permalink to &quot;Macho&quot;">​</a></h3><p>Provide a function that returns a promise resolving with a Vue component:</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">screens</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">p-2-screen-1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">import</span><span style="color:#F07178;">(</span><span style="color:#676E95;font-style:italic;">/* webpackChunkName: &quot;p-2-screen-1&quot; */</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">./p2-screen-1.vue</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Here, <code>import</code> will be picked up by webpack and used for code splitting, so it will only work for internal fixtures. For external fixtures, there are no rules for how you load external files; just return a promise with your component code and it should work.</p><p>Read <a href="https://vuejs.org/guide/components/async.html" target="_blank" rel="noreferrer">Async Components</a> in Vue docs if you want more details.</p>`,61)]))}const F=a(o,[["render",p]]);export{u as __pageData,F as default};
