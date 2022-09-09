import {
  _ as p,
  o as c,
  c as i,
  d as a,
  w as d,
  a as o,
  b as s,
  t as n,
  e as m,
  r as t,
} from "./app.b352a92c.js";
const I = JSON.parse(
    '{"title":"readDataFeedWithId()","description":"","frontmatter":{"title":"readDataFeedWithId()","folder":"dApp Developers"},"headers":[{"level":2,"title":"Example Code","slug":"example-code","link":"#example-code","children":[]},{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":2,"title":"Returns","slug":"returns","link":"#returns","children":[]}],"relativePath":"reference/dapis/developers/read-data-feed-with-id.md"}'
  ),
  h = { name: "reference/dapis/developers/read-data-feed-with-id.md" },
  D = { id: "frontmatter-title", tabindex: "-1" },
  u = o(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  y = m(
    `<div class="warning custom-block"><p class="custom-block-title">This function uses IDs.</p><p>Be sure to understand the difference between using a name or ID. See <a href="./#dapi-names">dAPI Names</a>.</p></div><p>This function reads a value and timestamp directly from a Beacon or Beacon set using its ID. In the code example below, <code>_datafeedId</code> is a Beacon or Beacon set ID. For on-chain smart contracts the <code>msg.sender</code> argument received by the function <a href="https://github.com/api3dao/airnode-protocol-v1/blob/v0.5.0/contracts/dapis/DapiServer.sol#L691-L703" target="_blank" rel="noreferrer">readDataFeedWithId()</a> must have <a href="./#coverage-policies">read access</a> for the dAPI requested.</p><p>Calling from off-chain code (<em>using a library such as <code>ether.js</code></em>) is not subject to coverage policies. Off-chain code is beyond the scope of this doc.</p><h2 id="example-code" tabindex="-1">Example Code <a class="header-anchor" href="#example-code" aria-hidden="true">#</a></h2><div class="language-solidity line-numbers-mode"><button class="copy"></button><span class="lang">solidity</span><pre><code><span class="line"><span style="color:#676E95;">// SPDX-License-Identifier: MIT</span></span>
<span class="line"><span style="color:#89DDFF;">pragma</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">solidity</span><span style="color:#A6ACCD;"> 0.8.9</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&quot;@api3/airnode-protocol-v1/contracts/dapis/interfaces/IDapiServer.sol&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">contract</span><span style="color:#FFCB6B;"> mySmartContract</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">myGetDataFeedValue</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">_dapiServerContractAddress</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">bytes32</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">_datafeedId</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">external</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">int224</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">uint32</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> timestamp</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">// Calling the DapiServer for a data feed value and timestamp.</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> timestamp</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">IDapiServer</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">_dapiServerContractAddress</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">readDataFeedWithId</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">_datafeedId</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>See another code example of <code>readDataFeedWithId()</code> in the <a href="https://github.com/api3dao/data-feed-reader-example/blob/main/contracts/DataFeedReaderExample.sol#L9" target="_blank" rel="noreferrer">data-feed-reader-example repo</a>.</p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h2><p><code>readDataFeedWithId(bytes32 _datafeedId)</code></p><ul><li><code>bytes32 datafeedId</code> - The ID of a Beacon or Beacon set to retrieve a value and timestamp for.</li></ul><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h2><ul><li><code>int224 value</code> - The value of the Beacon or Beacon set.</li><li><code>uint32 timestamp</code> - The timestamp associated with the value.</li></ul><div class="tip custom-block"><p class="custom-block-title">Please note:</p><p>The <code>DapiServer.sol</code> contract casts the reported data point to <code>int224</code>. If this is a problem (because the reported data may not fit into 224 bits or it is of a completely different type such as <code>bytes32</code>), do not use this contract and implement a customized version instead. The contract casts the timestamps to <code>uint32</code>, which means it will not work work past-2106 in the current form. If this is an issue, consider casting the timestamps to a larger type.</p></div><p>If the <code>timestamp</code> of a data feed is zero, this means that it was never written to. This may be the case for new data feeds. Therefore a zero value in the <code>value</code> field is not valid if the <code>timestamp</code> is zero.</p><p>In general, make sure to check if the timestamp of the data feed is fresh enough, and definitely disregard data feeds with a zero <code>timestamp</code>.</p>`,
    14
  );
function C(e, A, f, b, F, v) {
  const l = t("TitleSpan"),
    r = t("Toc");
  return (
    c(),
    i("div", null, [
      a(l, null, { default: d(() => [s(n(e.$frontmatter.folder), 1)]), _: 1 }),
      o("h1", D, [s(n(e.$frontmatter.title) + " ", 1), u]),
      a(r),
      y,
    ])
  );
}
const g = p(h, [["render", C]]);
export { I as __pageData, g as default };
