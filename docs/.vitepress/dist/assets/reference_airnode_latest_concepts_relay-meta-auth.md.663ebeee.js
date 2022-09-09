import {
  _ as n,
  o as d,
  c as l,
  a as s,
  b as c,
  t as h,
  d as e,
  e as p,
  r,
} from "./app.b352a92c.js";
const u = "/assets/relay-meta-flow.272d113d.png",
  w = JSON.parse(
    '{"title":"Relayed Meta Data Authentication","description":"","frontmatter":{"title":"Relayed Meta Data Authentication","docSetName":"Airnode v0.7","folder":"Concepts and Definitions","basePath":"/airnode/v0.7"},"headers":[{"level":2,"title":"Simple Example","slug":"simple-example","link":"#simple-example","children":[{"level":3,"title":"1: Deploy Airnode","slug":"_1-deploy-airnode","link":"#_1-deploy-airnode","children":[]},{"level":3,"title":"2: Register Sponsors","slug":"_2-register-sponsors","link":"#_2-register-sponsors","children":[]},{"level":3,"title":"3: Making Requests","slug":"_3-making-requests","link":"#_3-making-requests","children":[]}]},{"level":2,"title":"Security Schemes","slug":"security-schemes","link":"#security-schemes","children":[]}],"relativePath":"reference/airnode/latest/concepts/relay-meta-auth.md"}'
  ),
  m = { name: "reference/airnode/latest/concepts/relay-meta-auth.md" },
  y = { id: "frontmatter-title", tabindex: "-1" },
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
  g = p(
    '<p>There are two methods by which the API provider can manage access to their API by on-chain smart contracts known as requesters.</p><ul><li><a href="./../grp-providers/guides/build-an-airnode/apply-auth.html">Authorizers</a> (on-chain)</li><li><a href="./../grp-providers/guides/build-an-airnode/api-security.html">Relayed Meta Data Security Schemes</a> (off-chain)</li></ul><p>Relayed meta data is known information about the requester (smart contract) passed along to the API endpoint by Airnode.</p><p>Using the relayed meta data security schemes does not require blockchain-specific knowledge or blockchain interaction by an API provider and there are no blockchain transaction (gas) fees. Just apply the desired security scheme fields in the Airnode <code>config.json</code> file during deployment of an Airnode, see <a href="./../grp-providers/guides/build-an-airnode/">Building an Airnode</a>. Then have your API operations check for any security scheme values you configured (typically the <code>sponsorAddress</code>) against your customer database.</p><h2 id="simple-example" tabindex="-1">Simple Example <a class="header-anchor" href="#simple-example" aria-hidden="true">#</a></h2><p>The illustration below is one way to make use of relayed meta data for security purposes. Here a sponsor (a.k.a. developer or customer) submits their <code>sponsorAddress</code> to be stored by an API provider. The <code>sponsorAddress</code> can be used to authenticate requests by a sponsor&#39;s smart contracts.</p><blockquote><img src="' +
      u +
      '" width="400px"></blockquote><p>The following sections relate to the numbers shown in the diagram above.</p><h3 id="_1-deploy-airnode" tabindex="-1">1: Deploy Airnode <a class="header-anchor" href="#_1-deploy-airnode" aria-hidden="true">#</a></h3><p>An Airnode is deployed with the <code>sponsorAddress</code> security scheme instructing Airnode to pass along the <code>sponsorAddress</code> with all requests.</p><h3 id="_2-register-sponsors" tabindex="-1">2: Register Sponsors <a class="header-anchor" href="#_2-register-sponsors" aria-hidden="true">#</a></h3><p>A sponsor is the developer of an on-chain smart contract that wishes to request off-chain data from an API provider. A sponsor has a know <code>sponsorAddress</code>. The API provider can request the <code>sponsorAddress</code> from the sponsor using a webform as part of a paid subscription setup.</p><h3 id="_3-making-requests" tabindex="-1">3: Making Requests <a class="header-anchor" href="#_3-making-requests" aria-hidden="true">#</a></h3><p>When a smart contract (requester) makes a request of any API operation, the <code>sponsorAddress</code> will be part of the request. A sponsor can have more than one requester.</p><ul><li>3a: The requester makes a request to Airnode.</li><li>3b: Airnode adds the <code>sponsorAddress</code> to the request before passing the request to the API operation. The API operation performs a lookup on the <code>sponsorAddress</code> to verify it has a subscription. If verified the API operation returns the response to Airnode.</li><li>3c: Airnode returns the response to the requester.</li></ul><h2 id="security-schemes" tabindex="-1">Security Schemes <a class="header-anchor" href="#security-schemes" aria-hidden="true">#</a></h2><p>Including the <code>sponsorAddress</code> used in the <a href="./relay-meta-auth.html#simple-example">Simple Example</a> above, there are five <em>relayed meta data security schemes</em> that can be incorporated into any Airnode.</p><ul><li><a href="./../grp-providers/guides/build-an-airnode/api-security.html#relaychainid">relayChainId</a> - The chain ID the request came from.</li><li><a href="./../grp-providers/guides/build-an-airnode/api-security.html#relaychaintype">relayChainType</a> - The chain type the request came from.</li><li><a href="./../grp-providers/guides/build-an-airnode/api-security.html#relaysponsoraddress">relaySponsorAddress</a> - The sponsor&#39;s wallet address. The sponsor owns and operates one or more requesters.</li><li><a href="./../grp-providers/guides/build-an-airnode/api-security.html#relaysponsorwalletaddress">relaySponsorWalletAddress</a> - Other wallet addresses associated with each requester. These are owned and funded by a sponsor to pay on-chain gas costs.</li><li><a href="./../grp-providers/guides/build-an-airnode/api-security.html#relayrequesteraddress">relayRequesterAddress</a> - The on-chain address of the requester (smart contract).</li></ul>',
    18
  );
function A(a, _, b, v, q, k) {
  const t = r("VersionWarning"),
    o = r("TocHeader"),
    i = r("TOC");
  return (
    d(),
    l("div", null, [
      s("h1", y, [c(h(a.$frontmatter.title) + " ", 1), f]),
      e(t),
      e(o),
      e(i, { class: "table-of-contents", "include-level": [2, 3] }),
      g,
    ])
  );
}
const S = n(m, [["render", A]]);
export { w as __pageData, S as default };
