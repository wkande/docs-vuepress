import {
  _ as a,
  o as s,
  c as o,
  a as e,
  b as t,
  t as i,
} from "./app.b352a92c.js";
const n = "/assets/market-website.c3d8a816.png",
  P = JSON.parse(
    '{"title":"API3 Market","description":"","frontmatter":{"title":"API3 Market","sidebarHeader":"Reference","sidebarSubHeader":"\u2192 dAPIs"},"headers":[],"relativePath":"reference/dapis/introduction/api3-market.md"}'
  ),
  d = { name: "reference/dapis/introduction/api3-market.md" },
  c = { id: "frontmatter-title", tabindex: "-1" },
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
  f = e(
    "p",
    null,
    [
      t("Smart contract developers now have access to dAPIs through the new "),
      e(
        "a",
        {
          href: "https://market.api3.org",
          target: "_blank",
          rel: "noreferrer",
        },
        "API3 Market"
      ),
      t(
        ", where data feeds are easily searched, monitored, and consumed. For a limited time, dAPIs are free to use. Projects can integrate now to maximize their access to high quality price data during this free trial period. Visit the "
      ),
      e(
        "a",
        {
          href: "https://forms.monday.com/forms/embed/f44d0ed9dfd0154885f48fdb3b87a489?r=use1",
          target: "_blank",
          rel: "noreferrer",
        },
        "Request Data"
      ),
      t(" form to get access."),
    ],
    -1
  ),
  l = e(
    "p",
    null,
    [
      e(
        "a",
        {
          href: "https://market.api3.org",
          target: "_blank",
          rel: "noreferrer",
        },
        [e("img", { src: n, alt: "API3 Market" })]
      ),
    ],
    -1
  );
function h(r, p, _, u, k, g) {
  return (
    s(),
    o("div", null, [e("h1", c, [t(i(r.$frontmatter.title) + " ", 1), m]), f, l])
  );
}
const A = a(d, [["render", h]]);
export { P as __pageData, A as default };
