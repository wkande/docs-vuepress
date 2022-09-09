import {
  _ as s,
  o as l,
  c as n,
  d as e,
  a as r,
  b as c,
  t as d,
  e as h,
  r as t,
} from "./app.b352a92c.js";
const p = "/assets/RRP-protocol-contracts.7d8237c4.png",
  T = JSON.parse(
    '{"title":"Request-Response Protocol","description":"","frontmatter":{"title":"Request-Response Protocol","docSetName":"Airnode v0.7","folder":"Concepts and Definitions","basePath":"/airnode/v0.7","sidebarHeader":"Airnode v0.7","tags":null},"headers":[{"level":2,"title":"Contracts","slug":"contracts","link":"#contracts","children":[{"level":3,"title":"AirnodeRrpV0.sol","slug":"airnoderrpv0-sol","link":"#airnoderrpv0-sol","children":[]},{"level":3,"title":"IAirnodeRrpV0.sol","slug":"iairnoderrpv0-sol","link":"#iairnoderrpv0-sol","children":[]},{"level":3,"title":"AuthorizationUtilsV0.sol","slug":"authorizationutilsv0-sol","link":"#authorizationutilsv0-sol","children":[]},{"level":3,"title":"WithdrawalUtilsV0.sol","slug":"withdrawalutilsv0-sol","link":"#withdrawalutilsv0-sol","children":[]},{"level":3,"title":"TemplateUtilsV0.sol","slug":"templateutilsv0-sol","link":"#templateutilsv0-sol","children":[]}]}],"relativePath":"reference/airnode/latest/concepts/README.md"}'
  ),
  u = { name: "reference/airnode/latest/concepts/README.md" },
  f = { id: "frontmatter-title", tabindex: "-1" },
  m = r(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  b = h(
    '<p>The first protocol implemented for Airnode is request\u2013response. An Airnode serving the request\u2013response protocol listens for requests, makes the API call specified by the request, and finally makes the response transaction back on chain.</p><h2 id="contracts" tabindex="-1">Contracts <a class="header-anchor" href="#contracts" aria-hidden="true">#</a></h2><p>This sections briefly describes the structure of the request response protocol contracts. You can find more information in the <a href="https://github.com/api3dao/airnode/tree/v0.7/packages/airnode-protocol/contracts/rrp" target="_blank" rel="noreferrer">source files on github</a>.</p><p>The request\u2013response protocol is implemented as a single permissionless contract that all Airnodes interact with, which is named <code>AirnodeRrpV0.sol</code>. This base contract has the following inheritance tree that compartmentalizes the aspects of the protocol.</p><blockquote><img src="' +
      p +
      '" width="650px"></blockquote><h3 id="airnoderrpv0-sol" tabindex="-1">AirnodeRrpV0.sol <a class="header-anchor" href="#airnoderrpv0-sol" aria-hidden="true">#</a></h3><p>The <a href="https://github.com/api3dao/airnode/blob/v0.7/packages/airnode-protocol/contracts/rrp/AirnodeRrpV0.sol" target="_blank" rel="noreferrer">AirnodeRrpV0.sol</a> contract sits between a <a href="./requester.html">requester</a> and the <a href="./airnode.html">Airnode</a>. It inherits from four additional contracts as illustrated in the diagram above:</p><ul><li><a href="./README.html#iairnoderrp-sol">IAirnodeRrpV0.sol</a></li><li><a href="./README.html#authorizationutils-sol">AuthorizationUtilsV0.sol</a></li><li><a href="./README.html#withdrawalutils-sol">WithdrawalUtilsV0.sol</a></li><li><a href="./README.html#templateutilsv0-sol">TemplateUtilsV0.sol</a></li></ul><p>This contract has two key responsibilities:</p><ul><li>It is used by requesters to make requests.</li><li>It is used by Airnodes to fulfill requests.</li></ul><p>However, this contract is shared for all requesters and Airnodes on a particular chain. This means that neither Airnode operators nor requesters need to deploy this contract themselves. Instead, API3 will deploy this contract once per chain and you simply connect your Airnode or requester contract to that deployed contract. See the <a href="./airnode-addresses.html">Airnode Contract Addresses</a> for reference.</p><p>The <a href="./../reference/packages/admin-cli.html"><code>@api3/airnode-admin</code></a> package is a CLI tool used to interact with <code>AirnodeRrpV0.sol</code> and perform administrative actions.</p><h3 id="iairnoderrpv0-sol" tabindex="-1">IAirnodeRrpV0.sol <a class="header-anchor" href="#iairnoderrpv0-sol" aria-hidden="true">#</a></h3><p>The <a href="https://github.com/api3dao/airnode/blob/v0.7/packages/airnode-protocol/contracts/rrp/interfaces/IAirnodeRrpV0.sol" target="_blank" rel="noreferrer">IAirnodeRrpV0.sol</a> interface describes all functions and events of the <code>AirnodeRrpV0.sol</code> contract which implements this interface.</p><p>This interface inherits:</p><ul><li><a href="https://github.com/api3dao/airnode/blob/v0.7/packages/airnode-protocol/contracts/rrp/interfaces/IAuthorizationUtilsV0.sol" target="_blank" rel="noreferrer">IAuthorizationUtilsV0.sol</a></li><li><a href="https://github.com/api3dao/airnode/blob/v0.7/packages/airnode-protocol/contracts/rrp/interfaces/IWithdrawalUtilsV0.sol" target="_blank" rel="noreferrer">IWithdrawalUtilsV0.sol</a></li><li><a href="https://github.com/api3dao/airnode/blob/v0.7/packages/airnode-protocol/contracts/rrp/interfaces/ITemplateUtilsV0.sol" target="_blank" rel="noreferrer">ITemplateUtilsV0.sol</a></li></ul><h3 id="authorizationutilsv0-sol" tabindex="-1">AuthorizationUtilsV0.sol <a class="header-anchor" href="#authorizationutilsv0-sol" aria-hidden="true">#</a></h3><p>The <a href="https://github.com/api3dao/airnode/blob/v0.7/packages/airnode-protocol/contracts/rrp/AuthorizationUtilsV0.sol" target="_blank" rel="noreferrer">AuthorizationUtilsV0.sol</a> contract implements Airnode <a href="./authorization.html">Authorizer</a> checks.</p><h3 id="withdrawalutilsv0-sol" tabindex="-1">WithdrawalUtilsV0.sol <a class="header-anchor" href="#withdrawalutilsv0-sol" aria-hidden="true">#</a></h3><p>The <a href="https://github.com/api3dao/airnode/blob/v0.7/packages/airnode-protocol/contracts/rrp/WithdrawalUtilsV0.sol" target="_blank" rel="noreferrer">WithdrawalUtilsV0.sol</a> contract allows the <a href="./sponsor.html">sponsor</a> to trigger a withdrawal request which is later fulfilled by Airnode and all sponsor wallet funds are sent back to the sponsor.</p><h3 id="templateutilsv0-sol" tabindex="-1">TemplateUtilsV0.sol <a class="header-anchor" href="#templateutilsv0-sol" aria-hidden="true">#</a></h3><p>The <a href="https://github.com/api3dao/airnode/blob/v0.7/packages/airnode-protocol/contracts/rrp/TemplateUtilsV0.sol" target="_blank" rel="noreferrer">TemplateUtilsV0.sol</a> contract is used to create and store Airnode <a href="./template.html">templates</a> used to create a <a href="./request.html#template-request">template request</a>.</p>',
    22
  );
function v(a, A, g, _, V, k) {
  const o = t("reference-VersionPicklist"),
    i = t("Toc");
  return (
    l(),
    n("div", null, [
      e(o),
      r("h1", f, [c(d(a.$frontmatter.title) + " ", 1), m]),
      e(i),
      b,
    ])
  );
}
const R = s(u, [["render", v]]);
export { T as __pageData, R as default };
