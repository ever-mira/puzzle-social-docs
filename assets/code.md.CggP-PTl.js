import{_ as t,c as a,a1 as o,o as n}from"./chunks/framework.nlCHK0Xf.js";const p=JSON.parse('{"title":"Code","description":"","frontmatter":{},"headers":[],"relativePath":"code.md","filePath":"code.md"}'),r={name:"code.md"};function i(s,e,h,l,d,u){return n(),a("div",null,e[0]||(e[0]=[o('<h1 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h1><p>This page gives an overview about how the application and it&#39;s code are structured.</p><p>The framework we use is called &quot;Nuxt&quot;. Nuxt is a &quot;meta-framework&quot; based on Vue:</p><p><a href="https://vuejs.org/" target="_blank" rel="noreferrer">https://vuejs.org/</a></p><p>Vue is a framework, that allows to structure web frontend code in a way, that allows to create complex applications without being lost in complexity.</p><h2 id="frontend" tabindex="-1">Frontend <a class="header-anchor" href="#frontend" aria-label="Permalink to &quot;Frontend&quot;">​</a></h2><p>In the frontend, the code is encapsulated in loosely coupled components, to remove complexity and make it easily readable.</p><p>The components are using services (composables), to get their data or dispatch actions.</p><p>The framework is handeling the updating of the view, when state is changing.</p><p>A router is handeling the routing by means of the url, and vice versa.</p><p>A language service is handeling the translations for the currently selected language. Any number of languages can be added to be available for selection by the user.</p><p>The styling is done with UnoCss and the preset of Tailwind. A &quot;dark:&quot; modifier allows to define separate styles for when the &quot;dark mode&quot; is activated by the user.</p><p>All Code is written in Typescript, so that we have very good autocompletion for functions or properties of a class or object.</p><p>Authentication is handled automatically by Supabase. In the background it is sending an authentication token that is sent along to the database with every request.</p><h3 id="ssr" tabindex="-1">SSR <a class="header-anchor" href="#ssr" aria-label="Permalink to &quot;SSR&quot;">​</a></h3><p>To make &quot;universal&quot; api-requests, we take the built in function &quot;useFetch&quot; of the Framework. This function is based on the native browser fetch, but is SSR compatible. It will ensure that data, that was already fetched during SSR, will not be fetched again on the client. It will instead be &quot;inlined&quot; into the html, and loaded as state on the client during hydration. The client application will become reactive with the already fetched state from the server. Should the user then navigate between pages on the client, the same &quot;useFetch&quot; function will triggered to create a request to the api to get the data. This &quot;universal&quot; code ensures, that we have to write fetching logic only once, for SSR, and for the client, and it will behave like expected.</p><h2 id="api-routes" tabindex="-1">Api Routes <a class="header-anchor" href="#api-routes" aria-label="Permalink to &quot;Api Routes&quot;">​</a></h2><p>When the frontend is doing api-calls to the &quot;backend&quot; (in Nuxt called &quot;api-routes&quot;), then another part of the application is triggered, that is handeling these requests.</p><p>For this purpose, Nuxt is using a web-framework called h3:</p><p><a href="https://h3.unjs.io/" target="_blank" rel="noreferrer">https://h3.unjs.io/</a></p><p>With the help of this Http-Web-framework Nuxt automatically creates Api-Routes (REST-Endpoints) out of the structure of our files/folders (folder based routing), and in this way allows us to define our &quot;backend&quot; logic.</p><p>In these endpoints, we can receive the request parameters, the body data, query data from our database, create requests to other apis, and then answer the request.</p><p>This framework has a very clean and easy api.</p><h2 id="next" tabindex="-1">Next <a class="header-anchor" href="#next" aria-label="Permalink to &quot;Next&quot;">​</a></h2><p>Read the next chapter, to learn about automatic deployment.</p>',25)]))}const f=t(r,[["render",i]]);export{p as __pageData,f as default};
