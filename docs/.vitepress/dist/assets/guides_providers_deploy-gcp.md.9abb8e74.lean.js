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
  h = s("", 8),
  _ = s("", 1);
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
