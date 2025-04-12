import{_ as s,o as a,c as n,S as l}from"./chunks/framework.4bc42c71.js";const D=JSON.parse('{"title":"Events API","description":"","frontmatter":{},"headers":[],"relativePath":"api-guides/events.md","filePath":"api-guides/events.md"}'),t={name:"api-guides/events.md"};function o(p,e,r,c,i,d){return a(),n("div",null,e[0]||(e[0]=[l(`<h1 id="events-api" tabindex="-1">Events API <a class="header-anchor" href="#events-api" aria-label="Permalink to &quot;Events API&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>The events API provides an interface to manage events and event handlers on the RAMP instance event bus. Classic event busses (busi?) normally deal with named events and handler functions reacting to those events. This approach means to target an event handler (for example, to remove it), one needs a pointer to the handler function.</p><p>Since RAMP provides a default setup, and that setup contains event handlers, this makes it difficult for a 3rd party to access those handlers. To get around this, the RAMP events API introduces event handler names. Interactions with the API use the handler name instead of the handler function, and default event handler names can be found in the <a href="./../using-ramp4/default-setup.html#default-events-handlers">defaults page</a> for anyone wishing to manipulate them.</p><p>For a list of events that are raised by the RAMP core, please see the <a href="./../using-ramp4/default-setup.html#core-events">core events list</a>.</p><h2 id="primary-event-methods" tabindex="-1">Primary Event Methods <a class="header-anchor" href="#primary-event-methods" aria-label="Permalink to &quot;Primary Event Methods&quot;">​</a></h2><h3 id="reacting-to-an-event" tabindex="-1">Reacting to an Event <a class="header-anchor" href="#reacting-to-an-event" aria-label="Permalink to &quot;Reacting to an Event&quot;">​</a></h3><p>To have a function run whenever an event fires, use the <code>on()</code> method. Supply the event name to listen for, the function to act as the event handler, and optionally a handler name. The method will return the handler name; this will be the name provided in the parameter, or if none was supplied it will be the system generated handler name.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> rInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> RAMP</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createInstance</span><span style="color:#A6ACCD;">(domElement</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> configs)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> myHandler </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">param</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">doStuff</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">param</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">map/click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> myHandler</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">my_custom_map_click_handler</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Similarly, the <code>once()</code> method can be used to set up a one-time event handler. After the handler is triggered by the event, it is unregistered automatically.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> rInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> RAMP</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createInstance</span><span style="color:#A6ACCD;">(domElement</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> configs)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> myOneTimeHandler </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">param</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">doStuff</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">param</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">once</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">map/click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> myOneTimeHandler</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">my_custom_onetime_map_click_handler</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="removing-an-event-handler" tabindex="-1">Removing an Event Handler <a class="header-anchor" href="#removing-an-event-handler" aria-label="Permalink to &quot;Removing an Event Handler&quot;">​</a></h3><p>To cause an active event handler to stop reacting to an event, use the <code>off()</code> method. The event handler name is required to locate the handler to remove.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// remove the handler set up in the .on() example</span></span>
<span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">off</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">my_custom_map_click_handler</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="manually-firing-an-event" tabindex="-1">Manually Firing an Event <a class="header-anchor" href="#manually-firing-an-event" aria-label="Permalink to &quot;Manually Firing an Event&quot;">​</a></h3><p>To trigger an event, use the <code>emit()</code> method. The event can be an existing event used by the RAMP core, or can be a new custom event. Any handlers listening for the event will be executed. If the handlers are expecting a set of parameters, they are supplied after the event name.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// manually trigger a map click event</span></span>
<span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">emit</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">map/click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> clickCoordinatesPayload)</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>While event names can be any string, it is suggested using the <code>domain/description</code> format. If the event is tied to a fixture, it is suggested the fixture name be used for the domain. E.g. <code>imagetool/image_enhanced</code>.</p><h2 id="secondary-event-methods" tabindex="-1">Secondary Event Methods <a class="header-anchor" href="#secondary-event-methods" aria-label="Permalink to &quot;Secondary Event Methods&quot;">​</a></h2><h3 id="list-of-registered-events" tabindex="-1">List of Registered Events <a class="header-anchor" href="#list-of-registered-events" aria-label="Permalink to &quot;List of Registered Events&quot;">​</a></h3><p>The <code>eventNames()</code> method will return an array of event names that have registered their name with the event API. This is mostly handy for debugging, checking the spelling of event names, etc. Note that this returns event names, not event handler names. Also note that it is possible to have active events that did not register, and thus are not in this array.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> enames </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">eventNames</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// enames -&gt; [&#39;map/click&#39;, &#39;map/extentchanged&#39;, ...]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="registering-an-event" tabindex="-1">Registering an Event <a class="header-anchor" href="#registering-an-event" aria-label="Permalink to &quot;Registering an Event&quot;">​</a></h3><p>To have an event name show up in the <code>eventNames()</code> result, it can be registerd using the <code>registerEventName()</code> method. An ideal place for this call would be in the startup code of a fixture that exposes some events. An array of names can also be provided. Duplicate registrations will be ignored.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerEventName</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">page/customevent</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerEventName</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">imagetool/image_enhanced</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">imagetool/image_saved</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="list-of-active-event-handlers" tabindex="-1">List of Active Event Handlers <a class="header-anchor" href="#list-of-active-event-handlers" aria-label="Permalink to &quot;List of Active Event Handlers&quot;">​</a></h3><p>The <code>activeHandlers()</code> method will return an array of event handler names that are active. This is handy for checking if a handler is already active, and for debugging. An optional parameter will filter the results to handlers for a specific event.</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> allnames </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">activeHandlers</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> extentnames </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> rInstance</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">activeHandlers</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">map/extentchanged</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// allnames -&gt; [&#39;handlername1&#39;, &#39;image_enhancer&#39;, ...]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// extentnames -&gt; [&#39;update_extent_filter&#39;, &#39;geosearch_extent_update&#39;]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,28)]))}const h=s(t,[["render",o]]);export{D as __pageData,h as default};
