import {
  _ as r,
  o as t,
  c,
  a,
  b as D,
  t as F,
  d as s,
  e as y,
  r as n,
} from "./app.b352a92c.js";
const B = JSON.parse(
    '{"title":"Chain Providers","description":"","frontmatter":{"title":"Chain Providers","docSetName":"Airnode v0.7","folder":"Concepts and Definitions","basePath":"/airnode/v0.7","tags":null},"headers":[{"level":2,"title":"One Chain: One Provider","slug":"one-chain-one-provider","link":"#one-chain-one-provider","children":[]},{"level":2,"title":"One Chain: Multiple Providers","slug":"one-chain-multiple-providers","link":"#one-chain-multiple-providers","children":[]},{"level":2,"title":"Multiple Chains: Multiple Providers","slug":"multiple-chains-multiple-providers","link":"#multiple-chains-multiple-providers","children":[]}],"relativePath":"reference/airnode/latest/concepts/chain-providers.md"}'
  ),
  C = { name: "reference/airnode/latest/concepts/chain-providers.md" },
  i = { id: "frontmatter-title", tabindex: "-1" },
  A = a(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  u = y("", 11);
function b(l, q, m, d, h, E) {
  const p = n("VersionWarning"),
    o = n("TocHeader"),
    e = n("TOC");
  return (
    t(),
    c("div", null, [
      a("h1", i, [D(F(l.$frontmatter.title) + " ", 1), A]),
      s(p),
      s(o),
      s(e, { class: "table-of-contents", "include-level": [2, 3] }),
      u,
    ])
  );
}
const _ = r(C, [["render", b]]);
export { B as __pageData, _ as default };
