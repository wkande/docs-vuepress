import {
  _ as l,
  o as t,
  c as a,
  a as e,
  b as o,
  t as i,
  F as d,
  f as c,
  e as s,
} from "./app.b352a92c.js";
const D = JSON.parse(
    `{"title":"Deploy Airnode to GCP","description":"Description of this page","frontmatter":{"lang":"en-US","title":"Deploy Airnode to GCP","description":"Description of this page","sidebarHeader":"Guides","sidebarSubHeader":"\u2192 API Providers","home":false,"head":[["meta",{"name":"foo","content":"bar"}],["link",{"rel":"canonical","href":"foobar"}],["script",{},"console.log('hello from frontmatter');"]]},"headers":[{"level":2,"title":"Getting started","slug":"getting-started","link":"#getting-started","children":[{"level":3,"title":"A little more detail","slug":"a-little-more-detail","link":"#a-little-more-detail","children":[]}]},{"level":2,"title":"Next steps","slug":"next-steps","link":"#next-steps","children":[]}],"relativePath":"guides/providers/deploy-gcp.md"}`
  ),
  p = { name: "guides/providers/deploy-gcp.md" },
  u = { id: "frontmatter-title", tabindex: "-1" },
  m = e(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  h = s(
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><h2 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h2><p>There are two methods used to create the configuration file for an Airnode.</p><ul><li>ChainAPI</li><li>Manually</li></ul><h3 id="a-little-more-detail" tabindex="-1">A little more detail <a class="header-anchor" href="#a-little-more-detail" aria-hidden="true">#</a></h3><p>Just more content for level 3.</p><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-hidden="true">#</a></h2><p>One plus one equals: 2</p>',
    8
  ),
  _ = s(
    `<div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,
    1
  );
function g(n, f, b, A, v, x) {
  return (
    t(),
    a("div", null, [
      e("h1", u, [o(i(n.$frontmatter.title) + " ", 1), m]),
      h,
      e("p", null, [
        (t(),
        a(
          d,
          null,
          c(3, (r) => e("span", null, " span: " + i(r), 1)),
          64
        )),
      ]),
      _,
    ])
  );
}
const y = l(p, [["render", g]]);
export { D as __pageData, y as default };
