import {
  _ as t,
  o as n,
  c as o,
  d as r,
  a as e,
  b as s,
  t as c,
  e as d,
  r as h,
} from "./app.b352a92c.js";
const A = JSON.parse(
    '{"title":"Chain Idiosyncrasies","description":"","frontmatter":{"title":"Chain Idiosyncrasies","docSetName":"Airnode v0.7","folder":"Reference","basePath":"/airnode/v0.7","sidebarHeader":"Airnode v0.7","tags":null},"headers":[{"level":2,"title":"config.json - chains field","slug":"config-json-chains-field","link":"#config-json-chains-field","children":[{"level":3,"title":"Avalanche","slug":"avalanche","link":"#avalanche","children":[]},{"level":3,"title":"Arbitrum","slug":"arbitrum","link":"#arbitrum","children":[]},{"level":3,"title":"Metis","slug":"metis","link":"#metis","children":[]},{"level":3,"title":"Optimism","slug":"optimism","link":"#optimism","children":[]}]}],"relativePath":"reference/airnode/latest/intro/chain-idiosyncrasies.md"}'
  ),
  l = { name: "reference/airnode/latest/intro/chain-idiosyncrasies.md" },
  f = { id: "frontmatter-title", tabindex: "-1" },
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
  u = d(
    '<p>Differences in chain design inevitably lead to some unique chain-specific considerations. Below are idiosyncrasies we have identified, though it may not be comprehensive and we are interested in hearing if you encounter others.</p><h2 id="config-json-chains-field" tabindex="-1">config.json - chains field <a class="header-anchor" href="#config-json-chains-field" aria-hidden="true">#</a></h2><p>The idiosyncrasies below relate to the <code>chains</code> field of <code>config.json</code>. For the corresponding Airnode configuration guide section <a href="./../grp-providers/guides/build-an-airnode/configuring-airnode.html#chains">see here</a> and for the corresponding reference section <a href="./../reference/deployment-files/config-json.html#chains">see here</a>.</p><h3 id="avalanche" tabindex="-1">Avalanche <a class="header-anchor" href="#avalanche" aria-hidden="true">#</a></h3><p>Gas fees on Avalanche mainnet are often underestimated when using <code>legacy</code> as a <code>txType</code>. The error manifests as the max fee per gas being set to less than the block base fee, resulting in unfulfilled requests. A solution to this is to set <code>gasPriceMultiplier</code> to slightly greater than <code>1</code> e.g. <code>1.1</code>.</p><h3 id="arbitrum" tabindex="-1">Arbitrum <a class="header-anchor" href="#arbitrum" aria-hidden="true">#</a></h3><p>Execution costs on Arbitrum are calculated slightly differently than Ethereum, which impacts the gas required to fulfill requests. To account for this, we recommend a minimum value of <code>2000000</code> for <code>fulfillmentGasLimit</code> when using both Arbitrum mainnet and testnet. For more on ArbGas <a href="https://developer.offchainlabs.com/docs/arbgas" target="_blank" rel="noreferrer">see here</a>.</p><h3 id="metis" tabindex="-1">Metis <a class="header-anchor" href="#metis" aria-hidden="true">#</a></h3><p>On the Metis testnet Stardust, though not on the Metis mainnet Andromeda, we recommend a <code>fulfillmentGasLimit</code> of at least <code>2000000</code>.</p><h3 id="optimism" tabindex="-1">Optimism <a class="header-anchor" href="#optimism" aria-hidden="true">#</a></h3><p>Use <code>legacy</code> as the <code>txType</code> rather than <code>eip1559</code>.</p><p>As a L2 scaling solution, Optimism has an L1 data fee and an L2 execution fee, which are <a href="https://community.optimism.io/docs/developers/build/transaction-fees/#displaying-fees-to-users" target="_blank" rel="noreferrer">accounted for separately</a>. To cover the L1 data fee when a sponsor requests a <a href="./../concepts/sponsor.html#withdrawals">withdrawal</a>, an amount has to be subtracted from the funds returned to the sponsor. The <code>withdrawalRemainder</code> parameter has been introduced specifically for this reason, though the value required will differ between Optimism mainnet and testnet due to differences in L1 gas fees. For Optimism testnet, a <code>withdrawalRemainder</code> of <code>1 gwei</code> should suffice, while for Optimism mainnet, a value as high as <code>2.4 finney</code> (<code>2400000 gwei</code>) may be required in order to cover an L1 gas price of <code>300 gwei</code> and <code>8000</code> L1 gas used by the transaction.</p>',
    12
  );
function p(i, g, b, _, v, y) {
  const a = h("reference-VersionPicklist");
  return (
    n(),
    o("div", null, [
      r(a),
      e("h1", f, [s(c(i.$frontmatter.title) + " ", 1), m]),
      u,
    ])
  );
}
const x = t(l, [["render", p]]);
export { A as __pageData, x as default };
