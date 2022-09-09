import {
  _ as a,
  o as r,
  c as o,
  a as e,
  b as s,
  t as n,
} from "./app.b352a92c.js";
const x = JSON.parse(
    '{"title":"Jobs","description":"","frontmatter":{"title":"Jobs","sidebarHeader":"Explore"},"headers":[],"relativePath":"explore/jobs.md"}'
  ),
  i = { name: "explore/jobs.md" },
  c = { id: "frontmatter-title", tabindex: "-1" },
  d = e(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  );
function l(t, p, _, f, m, h) {
  return (
    r(), o("div", null, [e("h1", c, [s(n(t.$frontmatter.title) + " ", 1), d])])
  );
}
const u = a(i, [["render", l]]);
export { x as __pageData, u as default };
