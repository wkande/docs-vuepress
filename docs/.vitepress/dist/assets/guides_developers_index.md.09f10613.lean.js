import {
  _ as e,
  o as n,
  c as l,
  a as s,
  b as t,
  t as o,
  e as p,
} from "./app.b352a92c.js";
const b = JSON.parse(
    '{"title":"Calling a dAPI","description":null,"frontmatter":{"lang":"en-US","title":"Calling a dAPI","sidebarHeader":"Guides","sidebarSubHeader":"\u2192 dAPP Developers","description":null,"folder":"Guides","head":[["meta",{"name":"foo","content":"bar"}],["link",{"rel":"canonical","href":"foobar"}]]},"headers":[],"relativePath":"guides/developers/index.md"}'
  ),
  r = { name: "guides/developers/index.md" },
  i = { id: "frontmatter-title", tabindex: "-1" },
  c = s(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  d = p("", 2);
function D(a, u, _, y, F, m) {
  return (
    n(),
    l("div", null, [s("h1", i, [t(o(a.$frontmatter.title) + " ", 1), c]), d])
  );
}
const C = e(r, [["render", D]]);
export { b as __pageData, C as default };
