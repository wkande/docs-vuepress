import {
  _ as o,
  o as r,
  c,
  d,
  w as i,
  a as n,
  b as a,
  t,
  e as l,
  r as h,
} from "./app.b352a92c.js";
const P = JSON.parse(
    '{"title":"Name and ID Schemes","description":"","frontmatter":{"title":"Name and ID Schemes","folder":"Reference"},"headers":[],"relativePath":"reference/dapis/reference/schemes.md"}'
  ),
  f = { name: "reference/dapis/reference/schemes.md" },
  m = { id: "frontmatter-title", tabindex: "-1" },
  p = n(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  u = l("", 5);
function _(e, I, B, A, b, g) {
  const s = h("TitleSpan");
  return (
    r(),
    c("div", null, [
      d(s, null, { default: i(() => [a(t(e.$frontmatter.folder), 1)]), _: 1 }),
      n("h1", m, [a(t(e.$frontmatter.title) + " ", 1), p]),
      u,
    ])
  );
}
const D = o(f, [["render", _]]);
export { P as __pageData, D as default };
