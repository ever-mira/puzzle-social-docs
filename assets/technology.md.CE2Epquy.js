import{_ as t,c as a,a1 as o,o as r}from"./chunks/framework.BDUIikly.js";const u=JSON.parse('{"title":"Technology","description":"","frontmatter":{},"headers":[],"relativePath":"technology.md","filePath":"technology.md"}'),n={name:"technology.md"};function i(s,e,h,d,l,c){return r(),a("div",null,e[0]||(e[0]=[o('<h1 id="technology" tabindex="-1">Technology <a class="header-anchor" href="#technology" aria-label="Permalink to &quot;Technology&quot;">​</a></h1><p>The project is built as &quot;serverless&quot; architecture with Nuxt 4.</p><p><a href="https://nuxt.com/" target="_blank" rel="noreferrer">https://nuxt.com/</a></p><p>It is hosted &quot;on the edge&quot;, with Cloudflare, and scaled automatically. In areas on the globe, with high access rates, new instances are created automatically.</p><p>The application runs in &quot;universal&quot; rendering mode, which means, the page is first loaded with SSR (server side rendering), and then, through hydration, the client code takes over, and the app continiues to run as SPA (single page application).</p><h2 id="api" tabindex="-1">Api <a class="header-anchor" href="#api" aria-label="Permalink to &quot;Api&quot;">​</a></h2><p>In a Nuxt-Project, the frontend and backend (api-routes) are defined in one and the same project.</p><p>This project is deployed to Cloudflare, where it is run in so called Cloudflare &quot;workers&quot;.</p><p>The project serves both the SSR requests (for initial loading), as well as the api calls, which the frontend will dispatch after hydration.</p><p>This is made possible by a Webserver-Architecture called &quot;Nitro&quot;, on which Nuxt ist based on.</p><p><a href="https://nitro.build/" target="_blank" rel="noreferrer">https://nitro.build/</a></p><p>The project uses folder based routing, for both the frontend, and for the creation of the api routes.</p><p>This architecture means, we don&#39;t need to develop and deploy a separate backend, and we can share code between the frontend and the api-routes. During SSR, the network-requests to the api-routes are not even triggered: instead, the functions are directly by the framework.</p><p>Cloudflare takes care of executing the code as near at the users as possible, for minimal latency and maximum performance.</p><h3 id="database" tabindex="-1">Database <a class="header-anchor" href="#database" aria-label="Permalink to &quot;Database&quot;">​</a></h3><p>The project is using Supabase, for authentication and storing the data.</p><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;Code&quot;">​</a></h2><p>Read the next chapter to learn about the structure of the code.</p>',18)]))}const f=t(n,[["render",i]]);export{u as __pageData,f as default};
