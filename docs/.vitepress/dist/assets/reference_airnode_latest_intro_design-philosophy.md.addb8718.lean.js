import {
  _ as d,
  o as h,
  c as p,
  d as e,
  w as m,
  a as n,
  b as r,
  t as a,
  e as u,
  r as t,
} from "./app.b352a92c.js";
const f = "/assets/airnode.122793d6.png",
  S = JSON.parse(
    '{"title":"Design Philosophy","description":"","frontmatter":{"title":"Design Philosophy","docSetName":"Airnode v0.7","folder":"API Providers","basePath":"/airnode/v0.7","tags":null},"headers":[{"level":2,"title":"Scope","slug":"scope","link":"#scope","children":[]},{"level":2,"title":"Requirements","slug":"requirements","link":"#requirements","children":[]}],"relativePath":"reference/airnode/latest/intro/design-philosophy.md"}'
  ),
  _ = { name: "reference/airnode/latest/intro/design-philosophy.md" },
  y = { id: "frontmatter-title", tabindex: "-1" },
  g = n(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  b = u("", 10);
function T(o, v, A, P, w, I) {
  const s = t("TitleSpan"),
    i = t("VersionWarning"),
    l = t("TocHeader"),
    c = t("TOC");
  return (
    h(),
    p("div", null, [
      e(s, null, { default: m(() => [r(a(o.$frontmatter.folder), 1)]), _: 1 }),
      n("h1", y, [r(a(o.$frontmatter.title) + " ", 1), g]),
      e(i),
      e(l),
      e(c, { class: "table-of-contents", "include-level": [2, 3] }),
      b,
    ])
  );
}
const x = d(_, [["render", T]]);
export { S as __pageData, x as default };
