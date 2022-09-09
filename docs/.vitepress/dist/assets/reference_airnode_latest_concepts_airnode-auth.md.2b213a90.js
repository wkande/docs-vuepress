import {
  _ as i,
  o as c,
  c as l,
  a,
  b as p,
  t as d,
  d as e,
  e as h,
  r as s,
} from "./app.b352a92c.js";
const u = "/assets/concepts-airnode-auth.9a9d6611.png",
  T = JSON.parse(
    '{"title":"Airnode Authentication","description":"","frontmatter":{"title":"Airnode Authentication","docSetName":"Airnode v0.7","folder":"Concepts and Definitions","basePath":"/airnode/v0.7","tags":null},"headers":[{"level":2,"title":"Basic","slug":"basic","link":"#basic","children":[]},{"level":2,"title":"Bearer","slug":"bearer","link":"#bearer","children":[]},{"level":2,"title":"API Key","slug":"api-key","link":"#api-key","children":[]}],"relativePath":"reference/airnode/latest/concepts/airnode-auth.md"}'
  ),
  A = { name: "reference/airnode/latest/concepts/airnode-auth.md" },
  y = { id: "frontmatter-title", tabindex: "-1" },
  b = a(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  m = h(
    '<p>API providers can instruct Airnode to authenticate requests to their endpoints. This is done by setting up a security scheme in the config.json file for their Airnode. Airnode supports three methods of authentication from the OpenAPI specification.</p><blockquote><img src="' +
      u +
      `" width="350px"></blockquote><p><a href="https://swagger.io/docs/specification/authentication/" target="_blank" rel="noreferrer">OAS OpenAPI Specification</a> uses the term <strong>security scheme</strong> for authentication and authorization schemes. Airnode only uses standard OAS defined authentication schemes to identify itself to API endpoints. Airnode supports two types of authentication, <code>http</code> and <code>apiKey</code>.</p><ul><li>HTTP authentication schemes (using the <code>Authorization</code> header) supported by Airnode: <ul><li><a href="https://swagger.io/docs/specification/authentication/basic-authentication/" target="_blank" rel="noreferrer">Basic</a></li><li><a href="https://swagger.io/docs/specification/authentication/bearer-authentication/" target="_blank" rel="noreferrer">Bearer</a></li></ul></li><li><a href="https://swagger.io/docs/specification/authentication/api-keys/" target="_blank" rel="noreferrer">API key</a> in the request header, cookie in header or query string</li></ul><p>How Airnode sends the authentication data is explained in the sections <strong>Basic, Bearer and API Key</strong> below.</p><h2 id="basic" tabindex="-1">Basic <a class="header-anchor" href="#basic" aria-hidden="true">#</a></h2><p>Basic authentication is a simple authentication scheme built into the HTTP protocol. The Authorization request header contains the Base64-encoded username and password, separated by a colon. When handling the request, the server decodes the login details and checks if the user can access the requested content.</p><p>The header field is in the form of <code>Authorization: Basic &lt;credentials&gt;</code> where <code>credentials</code> is the Base64 encoding of a username and password joined by a single colon (<code>airnode:airnode-password</code>).</p><p><code>Authorization: Basic &lt;credentials&gt;</code></p><div class="language-sh line-numbers-mode"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">curl -H </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Authorization: Basic YW5kZXJzb25AZ21haWwuY29tOjEyM215cGFzc3dvcmQ=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;"> -X GET https://mydao.com</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">token=API3</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="bearer" tabindex="-1">Bearer <a class="header-anchor" href="#bearer" aria-hidden="true">#</a></h2><p>Bearer authentication (also called token authentication) is an HTTP authentication scheme that involves security tokens called bearer tokens. The API provider supplies a token used by Airnode to authenticate itself to API endpoints.</p><p>The header field is in the form of <code>Authorization: Bearer &lt;token&gt;</code>.</p><div class="language-sh line-numbers-mode"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#A6ACCD;">curl -H </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Authorization: Bearer RZ8Y65TG</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -X GET https://mydao.com</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">token=API3</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="api-key" tabindex="-1">API Key <a class="header-anchor" href="#api-key" aria-hidden="true">#</a></h2><p>Some APIs use an <code>apiKey</code> for authentication. The API provider supplies an <code>apiKey</code> used by Airnode to authenticate itself to API endpoints. Airnode can send the <code>apiKey</code> three ways.</p><div class="language-sh line-numbers-mode"><button class="copy"></button><span class="lang">sh</span><pre><code><span class="line"><span style="color:#676E95;"># In the query string.</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -X GET https://mydao.com</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">api_key=abcdef12345</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">token=API3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># In the request header.</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -H </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">X-API-KEY: abcdef12345</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -X GET https://mydao.com</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">token=API3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># As a cookie in the request header.</span></span>
<span class="line"><span style="color:#A6ACCD;">curl -H </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Cookie: X-API-KEY:abcdef12345</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -X GET https://mydao.com</span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;">token=API3</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,
    17
  );
function f(n, D, C, g, _, k) {
  const t = s("VersionWarning"),
    o = s("TocHeader"),
    r = s("TOC");
  return (
    c(),
    l("div", null, [
      a("h1", y, [p(d(n.$frontmatter.title) + " ", 1), b]),
      e(t),
      e(o),
      e(r, { class: "table-of-contents", "include-level": [2, 3] }),
      m,
    ])
  );
}
const v = i(A, [["render", f]]);
export { T as __pageData, v as default };
