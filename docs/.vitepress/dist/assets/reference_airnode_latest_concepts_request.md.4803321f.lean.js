import {
  _ as o,
  o as i,
  c as d,
  a as t,
  b as c,
  t as p,
  d as e,
  e as u,
  r as s,
} from "./app.b352a92c.js";
const h = "/assets/concepts-request.d01b95c2.png",
  f = "/assets/request-outcomes.146b30df.png",
  k = JSON.parse(
    '{"title":"Request","description":"","frontmatter":{"title":"Request","docSetName":"Airnode v0.7","folder":"Concepts and Definitions","basePath":"/airnode/v0.7","tags":null},"headers":[{"level":2,"title":"requestId","slug":"requestid","link":"#requestid","children":[]},{"level":2,"title":"Request Parameters","slug":"request-parameters","link":"#request-parameters","children":[]},{"level":2,"title":"Full Request","slug":"full-request","link":"#full-request","children":[]},{"level":2,"title":"Template Request","slug":"template-request","link":"#template-request","children":[]},{"level":2,"title":"Request Outcomes","slug":"request-outcomes","link":"#request-outcomes","children":[{"level":3,"title":"Fulfill","slug":"fulfill","link":"#fulfill","children":[]},{"level":3,"title":"Fail","slug":"fail","link":"#fail","children":[]}]},{"level":2,"title":"Check if request is awaiting fulfillment","slug":"check-if-request-is-awaiting-fulfillment","link":"#check-if-request-is-awaiting-fulfillment","children":[]}],"relativePath":"reference/airnode/latest/concepts/request.md"}'
  ),
  m = { name: "reference/airnode/latest/concepts/request.md" },
  y = { id: "frontmatter-title", tabindex: "-1" },
  A = t(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  b = u("", 34);
function C(a, q, g, F, D, v) {
  const l = s("VersionWarning"),
    n = s("TocHeader"),
    r = s("TOC");
  return (
    i(),
    d("div", null, [
      t("h1", y, [c(p(a.$frontmatter.title) + " ", 1), A]),
      e(l),
      e(n),
      e(r, { class: "table-of-contents", "include-level": [2, 3, 4] }),
      b,
    ])
  );
}
const I = o(m, [["render", C]]);
export { k as __pageData, I as default };
