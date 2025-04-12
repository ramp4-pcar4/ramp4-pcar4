import{_ as s,o as a,c as n,S as t}from"./chunks/framework.7de468fa.js";const h=JSON.parse('{"title":"Core Class Structures","description":"","frontmatter":{},"headers":[],"relativePath":"resources/core-classes.md","filePath":"resources/core-classes.md"}'),o={name:"resources/core-classes.md"};function c(l,e,i,r,p,d){return a(),n("div",null,e[0]||(e[0]=[t(`<h1 id="core-class-structures" tabindex="-1">Core Class Structures <a class="header-anchor" href="#core-class-structures" aria-label="Permalink to &quot;Core Class Structures&quot;">​</a></h1><p>This section outlines the classes and interfaces found in the exposed parts of the RAMP instance. When adding new things, the classes and patterns should be observed for consistency.</p><h2 id="instanceapi" tabindex="-1">InstanceAPI <a class="header-anchor" href="#instanceapi" aria-label="Permalink to &quot;InstanceAPI&quot;">​</a></h2><p>This is the class that defines the public API of a running instance of RAMP.</p><h2 id="apiscope" tabindex="-1">APIScope <a class="header-anchor" href="#apiscope" aria-label="Permalink to &quot;APIScope&quot;">​</a></h2><p>This couples together the <code>InstanceAPI</code> and the <code>Vue</code> application and provides easy access to both.</p><h2 id="subcomponentapi" tabindex="-1">SubcomponentAPI <a class="header-anchor" href="#subcomponentapi" aria-label="Permalink to &quot;SubcomponentAPI&quot;">​</a></h2><p>These are the classes that define a subcomponent of the Instance API. E.g. <code>EventAPI</code>, <code>FixtureAPI</code>. These classes should extend <code>APIScope</code>.</p><p>Subcomponents are accessed in the following manner.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">iApi.event.emit(stuff);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>.event</code> is the subcomponent, <code>.emit</code> is a method exposed by the subcomponent API.</p><h2 id="subcomponentinstance" tabindex="-1">SubcomponentInstance <a class="header-anchor" href="#subcomponentinstance" aria-label="Permalink to &quot;SubcomponentInstance&quot;">​</a></h2><p>These are classes that define instances of API subcomponents that can be created by a caller. The two prime examples are <code>FixtureInstance</code> and <code>PanelInstance</code>. These classes should extend <code>APIScope</code>.</p><p>An example of Subcomponent Instances using Panel subcomponent:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">var myPanel = iApi.panel.get(&#39;panelId&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">myPanel.pin(true);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>myPanel</code> is an instance of the Subcomponent Instance. <code>.panel</code> is the SubcomponentAPI. <code>.pin</code> is a method exposed on Subcomponent Instance.</p><h2 id="isubcomponentinstance" tabindex="-1">ISubcomponentInstance <a class="header-anchor" href="#isubcomponentinstance" aria-label="Permalink to &quot;ISubcomponentInstance&quot;">​</a></h2><p>This denotes an interface for a constructor of an item that has a <code>SubcomponentInstance</code> class.</p><p>NOTE since this only appears to exist for <code>FixtureInstance</code> and not for Panels or the Ramp Instance, might be worth omitting or marking this as highly optional.</p><h2 id="fixtures" tabindex="-1">Fixtures <a class="header-anchor" href="#fixtures" aria-label="Permalink to &quot;Fixtures&quot;">​</a></h2><p>Similar to the <code>SubcomponentAPI</code> classes of the Instance API, Fixtures can implement specific API classes. The classname should be in the format <code>FixturenameAPI</code> and they should extend the class <code>FixtureInstance</code> from the main API.</p><p>The main fixture class should have the name <code>FixturenameFixture</code> and extend the previously created <code>FixturenameAPI</code>. If the fixture has no API class then <code>FixturenameFixture</code> can directly extend <code>FixtureInstance</code>.</p><p>An example using the Grid fixture.</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">class GridAPI extends FixtureInstance {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    // a method that the Grid fixture exposes as an API,</span></span>
<span class="line"><span style="color:#A6ACCD;">    // that is allowed to be invoked by outside callers.</span></span>
<span class="line"><span style="color:#A6ACCD;">    openGrid(id: string): void {</span></span>
<span class="line"><span style="color:#A6ACCD;">       // do stuff</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">class GridFixture extends GridAPI {</span></span>
<span class="line"><span style="color:#A6ACCD;">    async added() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // specific implementation for the Grid fixture</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// the code to create the Grid fixture would be something like</span></span>
<span class="line"><span style="color:#A6ACCD;">var gridFixtureInstance = new GridFixture(instanceApi);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="vue-classes" tabindex="-1">Vue classes <a class="header-anchor" href="#vue-classes" aria-label="Permalink to &quot;Vue classes&quot;">​</a></h2><p>Our component classes follow the naming convention: <code>ComponentnameV</code> (which extend <code>Vue</code> as normal). The <code>V</code> allows us to distinguish Vue components from store classes, api classes, etc.</p><p>Our store folders export a function rather than a class/object. These are just named as <code>module</code>. This function creates an instance of <code>ModuleState</code> which should be defined in the <code>module-state.ts</code> file. For more info look at the <a href="./store.html">store docs</a>.</p><h2 id="layerinstance" tabindex="-1">LayerInstance <a class="header-anchor" href="#layerinstance" aria-label="Permalink to &quot;LayerInstance&quot;">​</a></h2><p>This class acts as the base interface for map layers. While there can be many different implementations, this class should be used to type variables that can handle any layer. All layer implementations should inherit from this class.</p>`,29)]))}const m=s(o,[["render",c]]);export{h as __pageData,m as default};
