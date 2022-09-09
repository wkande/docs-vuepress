import {
  _ as d,
  o as c,
  c as u,
  d as t,
  w as h,
  a as e,
  b as a,
  t as s,
  r,
} from "./app.b352a92c.js";
const $ = JSON.parse(
    '{"title":"Ethereum providers","description":"","frontmatter":{"title":"Ethereum providers","docSetName":"Airnode v0.7","folder":"API Providers","basePath":"/airnode/v0.7","tags":null},"headers":[],"relativePath":"reference/airnode/latest/intro/ethereum-providers.md"}'
  ),
  p = { name: "reference/airnode/latest/intro/ethereum-providers.md" },
  m = { id: "frontmatter-title", tabindex: "-1" },
  f = e(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  v = e(
    "p",
    null,
    "An oracle node requires access to a blockchain (e.g., Ethereum) node to listen for request events and send transactions to fulfill requests. The Airnode model aims to minimize the node operation effort using managed services wherever possible. Accordingly, it is assumed that the typical user will be using an Ethereum provider such as Infura, Alchemy, etc. These services will only increase in variety, so designing a solution depending on these is not expected to cause a problem in the future. In addition, among these Ethereum providers, Infura provides 100,000 calls per day for free. An oracle that doesn't get any requests makes less than 3,000 calls per day (2 calls per minute), which allows the user to keep an oracle online for free, and upgrade to a paid plan once it gains traction.",
    -1
  ),
  g = e(
    "p",
    null,
    "Although it is assumed that the user will be using an Ethereum provider, there is no reason for providers to not be able to use a private Ethereum node. Furthermore, Airnode is designed to allow the usage of multiple Ethereum providers simultaneously. This is achieved by treating all integrated providers individually. As a result, the operations of an Airnode cannot be disrupted reliably unless all of its providers are malicious. Therefore, using multiple Ethereum providers is a better strategy to achieve the best availability than using a private Ethereum node.",
    -1
  );
function _(o, b, y, A, E, w) {
  const n = r("TitleSpan"),
    i = r("VersionWarning"),
    l = r("TOC");
  return (
    c(),
    u("div", null, [
      t(n, null, { default: h(() => [a(s(o.$frontmatter.folder), 1)]), _: 1 }),
      e("h1", m, [a(s(o.$frontmatter.title) + " ", 1), f]),
      t(i),
      t(l, { class: "table-of-contents", "include-level": [2, 3] }),
      v,
      g,
    ])
  );
}
const k = d(p, [["render", _]]);
export { $ as __pageData, k as default };
