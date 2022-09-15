import{_ as n,o as t,c as l,a as e,b as p,t as r,d as o,e as c,r as i}from"./app.24634852.js";const _=JSON.parse('{"title":"Template","description":"","frontmatter":{"title":"Template","docSetName":"Airnode v0.7","folder":"Concepts and Definitions","basePath":"/airnode/v0.7"},"headers":[{"level":3,"title":"templateId","slug":"templateid","link":"#templateid","children":[]}],"relativePath":"reference/airnode/latest/concepts/template.md"}'),d={name:"reference/airnode/latest/concepts/template.md"},m={id:"frontmatter-title",tabindex:"-1"},y=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=c(`<p>An oracle request has many parameters. It is very common for <a href="./requester.html">requesters</a> (e.g., a data feed) to make repeated requests with the exact same parameters. In such instances, it is wasteful to pass all of these parameters repeatedly.</p><p>Templates are on-chain records of request parameters that the requesters can refer to while making requests. Additional advantages are reducing boilerplate code required to make a request, improving UX and allowing large parameter payloads (e.g., off-chain computation specifications) at no additional gas cost.</p><div class="language-solidity line-numbers-mode"><button class="copy"></button><span class="lang">solidity</span><pre><code><span class="line"><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Template</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> airnode</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">bytes32</span><span style="color:#A6ACCD;"> endpointId</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">bytes</span><span style="color:#A6ACCD;"> parameters</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="templateid" tabindex="-1">templateId <a class="header-anchor" href="#templateid" aria-hidden="true">#</a></h3><p>Each template is identified by a <code>templateId</code>, which is the hash of its contents. This allows Airnode to fetch templates with a static call, and verify that the received parameters are not tampered with.</p><div class="language-solidity line-numbers-mode"><button class="copy"></button><span class="lang">solidity</span><pre><code><span class="line"><span style="color:#A6ACCD;">templateId </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">keccak256</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">abi</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">encodePacked</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  airnode</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  endpointId</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  parameters</span></span>
<span class="line"><span style="color:#89DDFF;">));</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,6);function u(s,D,A,b,C,F){const a=i("VersionWarning");return t(),l("div",null,[e("h1",m,[p(r(s.$frontmatter.title)+" ",1),y]),o(a),h])}const g=n(d,[["render",u]]);export{_ as __pageData,g as default};
