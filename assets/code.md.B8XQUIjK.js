import{_ as a,c as t,a1 as o,o as n}from"./chunks/framework.nlCHK0Xf.js";const u=JSON.parse('{"title":"Code","description":"","frontmatter":{},"headers":[],"relativePath":"code.md","filePath":"code.md"}'),i={name:"code.md"};function r(s,e,d,l,h,c){return n(),t("div",null,e[0]||(e[0]=[o('<h1 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h1><p>This page gives an overview about how the application and it&#39;s code are structured.</p><h2 id="frontend" tabindex="-1">Frontend <a class="header-anchor" href="#frontend" aria-label="Permalink to &quot;Frontend&quot;">​</a></h2><p>In the frontend, the code is encapsulated in loosely coupled components, to remove complexity and make it easily readable.</p><p>The components are using services, to get their data or dispatch actions.</p><p>The services are using api calls, that are defined in a separate folder.</p><p>The framework is handeling the updating of the view, when state is changing.</p><p>A router is handeling the routing by means of the url, and vice versa.</p><p>A language service is handeling the translations for the currently selected language. Any number of languages can be added to be available for selection by the user.</p><p>The styling is done with UnoCss and the preset of Tailwind. A &quot;dark:&quot; modifier allows to define separate styles for when the &quot;dark mode&quot; is activated by the user.</p><p>All Code is written in Typescript, so that we have very good autocompletion for functions or properties of a class or object.</p><p>Authentication is handled automatically by Supabase. In the background it is sending an authentication token that is sent along to the database with every request.</p><h2 id="api-routes" tabindex="-1">Api Routes <a class="header-anchor" href="#api-routes" aria-label="Permalink to &quot;Api Routes&quot;">​</a></h2><h2 id="next" tabindex="-1">Next <a class="header-anchor" href="#next" aria-label="Permalink to &quot;Next&quot;">​</a></h2><p>Read the next chapter, to learn about automatic deployment.</p>',15)]))}const f=a(i,[["render",r]]);export{u as __pageData,f as default};