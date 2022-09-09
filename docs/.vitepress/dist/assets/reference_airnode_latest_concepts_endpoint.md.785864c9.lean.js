import {
  _ as i,
  o as l,
  c as p,
  a as s,
  b as c,
  t as d,
  d as e,
  e as h,
  r as n,
} from "./app.b352a92c.js";
const v = JSON.parse(
    '{"title":"Endpoint","description":"","frontmatter":{"title":"Endpoint","docSetName":"Airnode v0.7","folder":"Concepts and Definitions","basePath":"/airnode/v0.7","tags":null},"headers":[{"level":2,"title":"endpointId","slug":"endpointid","link":"#endpointid","children":[]},{"level":2,"title":"Authorizers","slug":"authorizers","link":"#authorizers","children":[]}],"relativePath":"reference/airnode/latest/concepts/endpoint.md"}'
  ),
  u = { name: "reference/airnode/latest/concepts/endpoint.md" },
  A = { id: "frontmatter-title", tabindex: "-1" },
  f = s(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  m = h("", 9);
function D(a, C, y, _, F, g) {
  const o = n("VersionWarning"),
    t = n("TocHeader"),
    r = n("TOC");
  return (
    l(),
    p("div", null, [
      s("h1", A, [c(d(a.$frontmatter.title) + " ", 1), f]),
      e(o),
      e(t),
      e(r, { class: "table-of-contents", "include-level": [2, 3] }),
      m,
    ])
  );
}
const I = i(u, [["render", D]]);
export { v as __pageData, I as default };
