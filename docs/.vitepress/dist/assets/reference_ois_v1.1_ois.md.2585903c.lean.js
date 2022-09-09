import {
  _ as c,
  o as i,
  c as D,
  d as n,
  a as s,
  b as e,
  t as y,
  e as a,
  r as l,
} from "./app.b352a92c.js";
const N = JSON.parse(
    '{"title":"Specification","description":"","frontmatter":{"title":"Specification","sidebarHeader":"Reference \u2192 OIS v1.1","basePath":"/reference/ois/v1.1","tags":null},"headers":[{"level":2,"title":"OIS Object Summary","slug":"ois-object-summary","link":"#ois-object-summary","children":[]},{"level":2,"title":"1. oisFormat","slug":"_1-oisformat","link":"#_1-oisformat","children":[]},{"level":2,"title":"2. title","slug":"_2-title","link":"#_2-title","children":[]},{"level":2,"title":"3. version","slug":"_3-version","link":"#_3-version","children":[]},{"level":2,"title":"4. apiSpecifications","slug":"_4-apispecifications","link":"#_4-apispecifications","children":[{"level":3,"title":"4.1. servers","slug":"_4-1-servers","link":"#_4-1-servers","children":[]},{"level":3,"title":"4.2. paths","slug":"_4-2-paths","link":"#_4-2-paths","children":[]},{"level":3,"title":"4.3. components","slug":"_4-3-components","link":"#_4-3-components","children":[]},{"level":3,"title":"4.4. security","slug":"_4-4-security","link":"#_4-4-security","children":[]}]},{"level":2,"title":"5. endpoints","slug":"_5-endpoints","link":"#_5-endpoints","children":[{"level":3,"title":"5.1. name","slug":"_5-1-name","link":"#_5-1-name","children":[]},{"level":3,"title":"5.2. operation","slug":"_5-2-operation","link":"#_5-2-operation","children":[]},{"level":3,"title":"5.3. fixedOperationParameters","slug":"_5-3-fixedoperationparameters","link":"#_5-3-fixedoperationparameters","children":[]},{"level":3,"title":"5.4. reservedParameters","slug":"_5-4-reservedparameters","link":"#_5-4-reservedparameters","children":[]},{"level":3,"title":"5.5. parameters","slug":"_5-5-parameters","link":"#_5-5-parameters","children":[]},{"level":3,"title":"5.6. summary *","slug":"_5-6-summary","link":"#_5-6-summary","children":[]},{"level":3,"title":"5.7. description *","slug":"_5-7-description","link":"#_5-7-description","children":[]},{"level":3,"title":"5.8. externalDocs *","slug":"_5-8-externaldocs","link":"#_5-8-externaldocs","children":[]},{"level":3,"title":"5.9. preProcessingSpecifications *","slug":"_5-9-preprocessingspecifications","link":"#_5-9-preprocessingspecifications","children":[]},{"level":3,"title":"5.10. postProcessingSpecifications *","slug":"_5-10-postprocessingspecifications","link":"#_5-10-postprocessingspecifications","children":[]}]}],"relativePath":"reference/ois/v1.1/ois.md"}'
  ),
  F = { name: "reference/ois/v1.1/ois.md" },
  d = { id: "frontmatter-title", tabindex: "-1" },
  u = s(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  h = a("", 11),
  C = a("", 21),
  A = {
    href: "/airnode/v0.7/grp-providers/guides/build-an-airnode/api-security.html",
  },
  m = e(" (Required) An object where security schemes can be found under "),
  b = s("code", null, "securitySchemes.{securitySchemeName}", -1),
  f = e(" with the following elements:"),
  q = a("", 37),
  _ = {
    href: "/airnode/v0.7/grp-providers/guides/build-an-airnode/api-integration.html#fixedoperationparameters",
  },
  v = e(
    " (Required) A list of objects specifying the fixed parameters for an API operation. While required, the fixedOperationParameters array can be left empty. Each object has the following elements:"
  ),
  g = a("", 11),
  E = {
    href: "/airnode/v0.7/grp-providers/guides/build-an-airnode/api-integration.html#reservedparameters",
  },
  x = a("", 10),
  S = {
    href: "/airnode/v0.7/grp-providers/guides/build-an-airnode/api-integration.html#parameters",
  },
  P = e(
    " (Optional) A list of objects that specify Airnode endpoint parameters that map to an particular API operation's parameters. Each object has the following elements:"
  ),
  I = a("", 34);
function w(p, T, B, O, j, k) {
  const t = l("reference-VersionPicklist"),
    r = l("ois-OisAirnodeVersions"),
    o = l("InfoBtnBlue");
  return (
    i(),
    D("div", null, [
      n(t),
      s("h1", d, [e(y(p.$frontmatter.title) + " ", 1), u]),
      h,
      n(r),
      C,
      s("p", null, [s("a", A, [n(o)]), m, b, f]),
      q,
      s("p", null, [s("a", _, [n(o)]), v]),
      g,
      s("p", null, [s("a", E, [n(o)])]),
      x,
      s("p", null, [s("a", S, [n(o)]), P]),
      I,
    ])
  );
}
const V = c(F, [["render", w]]);
export { N as __pageData, V as default };
