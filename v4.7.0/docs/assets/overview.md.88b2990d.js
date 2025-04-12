import{_ as e,o as a,c as i,V as r}from"./chunks/framework.8f1e6531.js";const g=JSON.parse('{"title":"Overview","description":"","frontmatter":{},"headers":[],"relativePath":"overview.md","filePath":"overview.md"}'),t={name:"overview.md"},o=r('<h1 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h1><p>An official and professional documentation site is still in the works. This page will serve to help quickly find existing content and view using github&#39;s built-in markdown renderer.</p><p>Some texts are still incomplete or outdated. We appreciate your patience, things will shape up in time. Missing or incorrect items may be <a href="https://github.com/ramp4-pcar4/ramp4-pcar4/issues/new" target="_blank" rel="noreferrer">logged as issues</a>, we will do our best to prioritize.</p><h2 id="basic-implementation" tabindex="-1">Basic Implementation <a class="header-anchor" href="#basic-implementation" aria-label="Permalink to &quot;Basic Implementation&quot;">​</a></h2><p>The <a href="./introduction/instantiation.html">Instantiation</a> page provides examples of how to instantiate a RAMP instance, and basic HTML templates to reference.</p><h2 id="migration-from-ramp-2-ramp-3" tabindex="-1">Migration from RAMP 2 / RAMP 3 <a class="header-anchor" href="#migration-from-ramp-2-ramp-3" aria-label="Permalink to &quot;Migration from RAMP 2 / RAMP 3&quot;">​</a></h2><ul><li>The <a href="https://github.com/ramp4-pcar4/ramp4-pcar4/releases/tag/v4.0.0" target="_blank" rel="noreferrer">v4.0.0 Release Notes</a> will highlight breaking changes and features not yet implemented.</li><li>This <a href="https://github.com/ramp4-pcar4/ramp4-pcar4/blob/main/demos/starter-scripts/r2-config-upgraded.js" target="_blank" rel="noreferrer">Config Upgrade Sample Page</a> shows how one can utilize the provided upgrade functions in an attempt to migrate a RAMP2 configuration to the RAMP4 schema. Note the functions <code>configUpgrade()</code> and <code>layerConfigUpgrade()</code> are available on the <code>RAMP.</code> global if using the standard build, or can be imported if using the <code>esm</code> build.</li><li>The <a href="./using-ramp4/incompatibility.html">Config Incompatibilty</a> page provides a list of RAMP2 config properties that are currently not supported.</li><li>The <a href="./resources/migration/api-migration.html">API Migration</a> page is horribly incomplete but provides some detail on API differences.</li><li>The <a href="https://github.com/ramp4-pcar4/ramp4-pcar4/blob/main/schema.json" target="_blank" rel="noreferrer">Config Schema</a> provides a technical specification of the new RAMP4 configuration structure.</li></ul><h2 id="app-configuration" tabindex="-1">App Configuration <a class="header-anchor" href="#app-configuration" aria-label="Permalink to &quot;App Configuration&quot;">​</a></h2><ul><li>Configuring across <a href="./using-ramp4/config-language.html">different languages</a>. Be aware the text residing in the RAMP core is compiled, so those items are currently available only in English and French. New languages can be added but requires a re-build of the library.</li><li>The <a href="./using-ramp4/layer-config.html">Layers Configuration</a> page is fairly complete.</li><li>Configuration for various fixtures <ul><li><a href="./using-ramp4/fixtures/appbar.html#configuration">Appbar</a></li><li><a href="./using-ramp4/fixtures/details.html#creating-a-custom-template">Details Custom Templating</a></li><li><a href="./using-ramp4/fixtures/geosearch.html#configuration">Geosearch</a></li><li><a href="./using-ramp4/fixtures/grid.html#configuration">Grid</a></li><li><a href="./using-ramp4/fixtures/layer-settings.html#configuration">Layer Settings</a></li><li><a href="./using-ramp4/fixtures/legend.html#configuration">Legend</a> (configuration snippets are embedded in functional descriptions)</li></ul></li><li>The <a href="https://github.com/ramp4-pcar4/ramp4-pcar4/tree/main/demos/starter-scripts" target="_blank" rel="noreferrer">collection of sample configs</a> on the repo may also be of use to see working examples.</li></ul><h2 id="api-documentation" tabindex="-1">API Documentation <a class="header-anchor" href="#api-documentation" aria-label="Permalink to &quot;API Documentation&quot;">​</a></h2><p>APIs exposed by the library:</p><ul><li><a href="./api-guides/instance.html">Instance API</a></li><li><a href="./api-guides/events.html">Events API</a></li><li><a href="./api-guides/geometry.html">Geometry API</a></li><li><a href="./api-guides/layers.html">Layers API</a></li><li><a href="./api-guides/legend.html">Legend Fixture API</a></li><li><a href="./api-guides/notifications.html">Notification API</a></li><li><a href="./api-guides/panels.html#the-panel-api">Panels API</a> (doc is incomplete)</li></ul><p>Information on more involved modifications via the API:</p><ul><li>Information on <a href="./using-ramp4/default-setup.html">Default Behaviors</a></li><li>Creating <a href="./using-ramp4/fixtures/custom-fixtures.html">Custom Fixtures</a></li></ul><h2 id="developer-resources" tabindex="-1">Developer Resources <a class="header-anchor" href="#developer-resources" aria-label="Permalink to &quot;Developer Resources&quot;">​</a></h2><ul><li><a href="./resources/core-classes.html">Core Classes Overview</a></li><li>How <a href="./resources/focus-list.html">Focus Lists</a> behave</li><li>The <a href="./api-guides/panels.html">Panels</a> system</li><li>A very brief blurb about <a href="./resources/tooltips.html">tooltips</a></li><li>How <a href="./resources/store.html">Pinia Stores</a> are used internally</li><li>Information about various fixtures <ul><li><a href="./using-ramp4/fixtures/appbar.html">Appbar</a> (outdated)</li><li><a href="./using-ramp4/fixtures/details.html">Details</a> (outdated)</li><li><a href="./using-ramp4/fixtures/geosearch.html">Geo Search</a></li><li><a href="./using-ramp4/fixtures/grid.html">Grid</a></li><li><a href="./using-ramp4/fixtures/layer-settings.html">Layer Settings</a></li><li><a href="./using-ramp4/fixtures/legend.html">Legend</a></li></ul></li></ul>',16),l=[o];function n(s,h,p,u,m,c){return a(),i("div",null,l)}const d=e(t,[["render",n]]);export{g as __pageData,d as default};
