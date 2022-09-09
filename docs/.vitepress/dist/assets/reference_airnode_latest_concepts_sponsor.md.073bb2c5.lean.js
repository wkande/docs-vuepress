import {
  _ as d,
  o as p,
  c,
  a as o,
  b as h,
  t as u,
  d as e,
  e as t,
  r as s,
} from "./app.b352a92c.js";
const f = "/assets/concepts-sponsor-relationships.51586e55.png",
  k = JSON.parse(
    '{"title":"Sponsor","description":"","frontmatter":{"title":"Sponsor","docSetName":"Airnode v0.7","folder":"Concepts and Definitions","basePath":"/airnode/v0.7","tags":null},"headers":[{"level":2,"title":"sponsorAddress","slug":"sponsoraddress","link":"#sponsoraddress","children":[]},{"level":2,"title":"sponsorWallet","slug":"sponsorwallet","link":"#sponsorwallet","children":[{"level":3,"title":"Derivation Path","slug":"derivation-path","link":"#derivation-path","children":[]},{"level":3,"title":"Gas Costs","slug":"gas-costs","link":"#gas-costs","children":[]},{"level":3,"title":"Trusting the sponsorWallet","slug":"trusting-the-sponsorwallet","link":"#trusting-the-sponsorwallet","children":[]},{"level":3,"title":"Withdrawals","slug":"withdrawals","link":"#withdrawals","children":[]}]},{"level":2,"title":"Sponsoring a Requester","slug":"sponsoring-a-requester","link":"#sponsoring-a-requester","children":[]},{"level":2,"title":"Derive a Sponsor Wallet","slug":"derive-a-sponsor-wallet","link":"#derive-a-sponsor-wallet","children":[]}],"relativePath":"reference/airnode/latest/concepts/sponsor.md"}'
  ),
  m = { name: "reference/airnode/latest/concepts/sponsor.md" },
  g = { id: "frontmatter-title", tabindex: "-1" },
  w = o(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  b = t("", 26),
  v = t("", 13);
function A(r, q, y, _, F, T) {
  const a = s("VersionWarning"),
    n = s("TocHeader"),
    i = s("TOC"),
    l = s("airnode-SponsorWalletWarning");
  return (
    p(),
    c("div", null, [
      o("h1", g, [h(u(r.$frontmatter.title) + " ", 1), w]),
      e(a),
      e(n),
      e(i, { class: "table-of-contents", "include-level": [2, 3] }),
      b,
      e(l),
      v,
    ])
  );
}
const x = d(m, [["render", A]]);
export { k as __pageData, x as default };
