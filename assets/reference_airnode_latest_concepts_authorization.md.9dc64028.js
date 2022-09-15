import{_ as o,o as l,c as p,a,b as c,t as d,d as e,e as h,r as s}from"./app.24634852.js";const u="/assets/concepts-authorizers.0ac9d02c.png",z=JSON.parse('{"title":"Authorizers","description":"","frontmatter":{"title":"Authorizers","docSetName":"Airnode v0.7","folder":"Concepts and Definitions","basePath":"/airnode/v0.7","tags":null},"headers":[{"level":3,"title":"Airnode Authorization Policies","slug":"airnode-authorization-policies","link":"#airnode-authorization-policies","children":[]},{"level":3,"title":"Custom Authorizers","slug":"custom-authorizers","link":"#custom-authorizers","children":[]},{"level":3,"title":"Authorizer List","slug":"authorizer-list","link":"#authorizer-list","children":[]},{"level":3,"title":"Authorizer Interface","slug":"authorizer-interface","link":"#authorizer-interface","children":[]},{"level":3,"title":"Why is an authorization scheme needed?","slug":"why-is-an-authorization-scheme-needed","link":"#why-is-an-authorization-scheme-needed","children":[]},{"level":3,"title":"Are authorizers required?","slug":"are-authorizers-required","link":"#are-authorizers-required","children":[]},{"level":3,"title":"How are authorizers implemented?","slug":"how-are-authorizers-implemented","link":"#how-are-authorizers-implemented","children":[]},{"level":3,"title":"Access (deny, allow, filter)","slug":"access-deny-allow-filter","link":"#access-deny-allow-filter","children":[]},{"level":3,"title":"RequesterAuthorizerWithAirnode","slug":"requesterauthorizerwithairnode","link":"#requesterauthorizerwithairnode","children":[]},{"level":3,"title":"RequesterAuthorizerWithManager","slug":"requesterauthorizerwithmanager","link":"#requesterauthorizerwithmanager","children":[]}],"relativePath":"reference/airnode/latest/concepts/authorization.md"}'),A={name:"reference/airnode/latest/concepts/authorization.md"},y={id:"frontmatter-title",tabindex:"-1"},b=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),C=h('<p>An Airnode can authorize requester contract access to its underlying API using authorizers. As an alternative, an API provider could also use <a href="./relay-meta-auth.html">Relayed Meta Data</a> to authenticate requests. Authorizers require blockchain knowledge by the API provider, relayed meta data does not.</p><p>Other docs related to authorizers and relayed meta data:</p><ul><li><a href="./../grp-providers/guides/build-an-airnode/apply-auth.html">Using Authorizers</a></li><li><a href="./../grp-providers/guides/build-an-airnode/api-security.html">API Security</a></li></ul><p>When an Airnode receives a request, it can use on-chain authorizer contracts to verify if a response is warranted. Authorizers allow Airnodes to implement a wide variety of policies. Below are some examples:</p><ul><li>Respond to requests from sponsors that have paid their monthly subscription fee in DAI.</li><li>Respond to individual requests for which a per-call fee has been paid in API3 tokens.</li><li>Respond to requests made by requesters that were whitelisted by the API3 DAO.</li><li>Respond to requests made by sponsors who have been whitelisted by the Airnode owner&#39;s backend (for example, based on PayPal payments).</li></ul><p>A common use case for an authorizer is the <a href="#requesterauthorizerwithairnode">RequesterAuthorizerWithAirnode</a> authorizer contract developed for Airnode operators to use right out-of-the-box. It allows the whitelisting of requester contracts (with or without expiration timestamps) on a per endpoint basis. This is the most common use case and may in fact satisfy the needs of many Airnodes.</p><p>The diagram below illustrates how Airnode utilizes authorizers.</p><blockquote><img src="'+u+`" width="650px"><ol><li><p class="diagram-line">When Airnode starts it reads its list of authorizer contracts declared in config.json.</p></li><li><p class="diagram-line">Airnode gathers requests from the event logs, during its run cycle.</p></li><li><p class="diagram-line">Airnode sends each request, along with the list of authorizer contracts, to <code>checkAuthorizationStatus()</code>.</p></li><li><p class="diagram-line"><code>checkAuthorizationStatus()</code> executes the <code>isAuthorized()</code> function in each authorizer contract. If any one authorizer contract returns true, then true is returned to the Airnode which in turn proceeds to fulfill the request.</p></li></ol></blockquote><h3 id="airnode-authorization-policies" tabindex="-1">Airnode Authorization Policies <a class="header-anchor" href="#airnode-authorization-policies" aria-hidden="true">#</a></h3><p>Airnode provides two authorizer contracts, one of which (RequesterAuthorizerWithAirnode) can be used by any API provider. The other (RequesterAuthorizerWithManager) is meant to be used by the API3 DAO. They are detailed within this doc in sections below.</p><ul><li><a href="#requesterauthorizerwithairnode"><code>RequesterAuthorizerWithAirnode</code></a></li><li><a href="#requesterauthorizerwithmanager"><code>RequesterAuthorizerWithManager</code></a></li></ul><p>Both these authorizer contracts inherit and extend the <code>RequesterAuthorizer</code> abstract contract which also extends the <code>Whitelist</code> contract. This means that both authorizer contracts will need to whitelist requester contracts prior to make them available to an Airnode (For <code>RequesterAuthorizerWithAirnode</code> this can be done using the <a href="./../reference/packages/admin-cli.html#requesterauthorizerwithairnode">admin-cli</a>).</p><p>The main difference between them is that <code>RequesterAuthorizerWithAirnode</code> allows the Airnode address to grant whitelisting roles for that specific Airnode. On the other hand, <code>RequesterAuthorizerWithManager</code> allows the manager address (read: the API3 DAO) to grant whitelisting roles for all Airnodes that use it.</p><p>Some common functions available are:</p><ul><li><code>requesterIsWhitelisted</code>: Called to check if a requester is whitelisted to use the Airnode\u2013endpoint pair.</li><li><code style="overflow-wrap:break-word;">airnodeToEndpointIdToRequesterToWhitelistStatus</code>: Called to get the detailed whitelist status of a requester for the Airnode\u2013endpoint pair.</li></ul><h3 id="custom-authorizers" tabindex="-1">Custom Authorizers <a class="header-anchor" href="#custom-authorizers" aria-hidden="true">#</a></h3><p>Custom authorizer contracts can implement any arbitrary authorization logic. An example might be where Airnode only responds to requests if the requester has made less than a specific number of requests to the Airnode in the last month, effectively implementing an on-chain call quota.</p><h3 id="authorizer-list" tabindex="-1">Authorizer List <a class="header-anchor" href="#authorizer-list" aria-hidden="true">#</a></h3><p>Airnode authorizers are listed in the config.json file at <a href="./../grp-providers/guides/build-an-airnode/configuring-airnode.html#chains"><code>chains[n].authorizers</code></a>. An authorizer typically checks for a single condition (has the requester made their monthly payment, is the <code>requester</code> whitelisted, etc.). Authorizers can be combined to enforce more complex policies. If any of the authorizers in the list gives access, the request will considered to be authorized. From a logical standpoint, the authorization outcomes get <code>OR</code>ed.</p><h3 id="authorizer-interface" tabindex="-1">Authorizer Interface <a class="header-anchor" href="#authorizer-interface" aria-hidden="true">#</a></h3><p>Authorizer contracts that inherit from <code>IAuthorizer</code> can be used to implement an arbitrary authorization policy based on its input parameters.</p><ul><li><code>requestId</code>: bytes32</li><li><code>airnode</code>: address</li><li><code>endpointId</code>: bytes32</li><li><code>sponsor</code>: address</li><li><code>requester</code>: address</li></ul><p>Note that the authorizer does not have to use all of the arguments, and can even decide on arbitrary on-chain criteria such as <code>block.number</code> (e.g., do not respond to anyone after block number N). An authorizer is a contract with the following interface:</p><div class="language-solidity line-numbers-mode"><button class="copy"></button><span class="lang">solidity</span><pre><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#FFCB6B;"> IAuthorizer</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isAuthorized</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">bytes32</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">requestId</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">airnode</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">bytes32</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">endpointId</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">sponsor</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">requester</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">external</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">view</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">returns</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">bool</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Below is an example of how to create the simplest form of an authorizer. This authorizer allows any requester contract to call the endpointId (0xf2ee...).</p><div class="language-solidity line-numbers-mode"><button class="copy"></button><span class="lang">solidity</span><pre><code><span class="line"><span style="color:#C792EA;">contract</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">myAuthorizer</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IAuthorizer</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isAuthorized</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">bytes32</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">requestId</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">airnode</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">bytes32</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">endpointId</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">sponsor</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">requester</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">external</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">view</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">override</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">returns</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">bool</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">bytes32</span><span style="color:#A6ACCD;"> expected </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0xf2ee</span><span style="color:#89DDFF;">...;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> endpointId </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> expected</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="why-is-an-authorization-scheme-needed" tabindex="-1">Why is an authorization scheme needed? <a class="header-anchor" href="#why-is-an-authorization-scheme-needed" aria-hidden="true">#</a></h3><p>Airnodes need the ability to fulfill requests selectively. This is required for two main reasons:</p><ol><li>The Airnode only fulfills requests made by requesters who have made payment to the Airnode owner, which allows them to monetize their services.</li><li>The services of the Airnode are sensitive and can only be accessed by certain requesters, e.g., who have gone through KYC.</li></ol><p>A protocol that does not have the authorizer scheme or equivalent functionality cannot be considered as permissionless, and will not be able to achieve wide-spread adoption.</p><h3 id="are-authorizers-required" tabindex="-1">Are authorizers required? <a class="header-anchor" href="#are-authorizers-required" aria-hidden="true">#</a></h3><p>Authorizers are not required. An Airnode operator could use <a href="./../grp-providers/guides/build-an-airnode/api-security.html#relayed-meta-data-security-schemes">Relayed Meta Data Security Schemes</a>. It is possible to use both authorizers and relay security schemes together.</p><h3 id="how-are-authorizers-implemented" tabindex="-1">How are authorizers implemented? <a class="header-anchor" href="#how-are-authorizers-implemented" aria-hidden="true">#</a></h3><p>There are two main points to consider about how authorization policies are implemented:</p><ol><li>If the policies are kept off-chain, the requester cannot see them or check if they satisfy them. Furthermore, the Airnode owner updating the policies (e.g., increasing the service fees) requires off-chain coordination with the requester.</li><li>Embedding the policies in the request\u2013response loop results in a gas cost overhead.</li></ol><p>Based on these considerations, Airnode uses a hybrid method. An Airnode announces its authorization policy through off-chain channels as the addresses of a list of authorizer contracts. Whenever the Airnode receives a request, it checks if it should fulfill this request by making a static call that queries this on-chain policy. Similarly, the requester can use this on-chain policy by making a static call to check if they are authorized. This scheme both allows the Airnode to set transparent and flexible policies, and this to be done with no gas overhead.</p><h3 id="access-deny-allow-filter" tabindex="-1">Access (deny, allow, filter) <a class="header-anchor" href="#access-deny-allow-filter" aria-hidden="true">#</a></h3><p>How authorizers impact access is based on the <code>chains</code> field of <code>config.json</code> for a given Airnode.</p><h4 id="deny-all" tabindex="-1">Deny All <a class="header-anchor" href="#deny-all" aria-hidden="true">#</a></h4><p>If the Airnode wants to deny all access for a particular chain, it should not operate on it (i.e., it should not exist in the <code>chains</code> list). The below example would &quot;deny all&quot; to chains 1 and 3\u2013n since they do not have entries in the <code>chains</code> field.</p><div class="language-json line-numbers-mode"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#A6ACCD;"> chains:</span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    id</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    authorizers</span><span style="color:#89DDFF;">:[],</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="allow-all" tabindex="-1">Allow All <a class="header-anchor" href="#allow-all" aria-hidden="true">#</a></h4><p>A <code>chains.authorizers</code> list of [] means &quot;let everyone through&quot;. In the example below chain 2 would allow access to any requester.</p><div class="language-json line-numbers-mode"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#A6ACCD;">  chains:</span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      id</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      authorizers</span><span style="color:#89DDFF;">:[]</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="filter-all" tabindex="-1">Filter All <a class="header-anchor" href="#filter-all" aria-hidden="true">#</a></h4><p>If the Airnode wants to give access selectively, it should use one or more authorizers that implement filtering logic. In the example below the Airnode will accept requests on chain <em>&quot;2&quot;</em> and the requester would be filtered by two authorizers.</p><div class="language-json line-numbers-mode"><button class="copy"></button><span class="lang">json</span><pre><code><span class="line"><span style="color:#A6ACCD;"> chains:</span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">   id:</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">   authorizers:</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">&#39;</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">xcd...cd</span><span style="color:#F78C6C;">8</span><span style="color:#A6ACCD;">d&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">&#39;</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">xff...d</span><span style="color:#F78C6C;">19</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">   ...</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="requesterauthorizerwithairnode" tabindex="-1">RequesterAuthorizerWithAirnode <a class="header-anchor" href="#requesterauthorizerwithairnode" aria-hidden="true">#</a></h3><p>This contract implements a requester-based RRP authorizer with three types of roles</p><ol><li>Whitelist expiration extender: Is allowed to extend temporary whitelisting expiration</li><li>Whitelist expiration setter: Is allowed to set the temporary whitelisting expiration (i.e., they can also reduce the expiration time)</li><li>Indefinite whitelister: Is allowed to whitelist/unwhitelist indefinitely Each Airnode&#39;s address is treated as if they have all these three roles for the respective Airnode, and they can also grant these roles to other accounts, which includes contracts that implement arbitrary business logic.</li></ol><h4 id="extendwhitelistexpiration" tabindex="-1">extendWhitelistExpiration <a class="header-anchor" href="#extendwhitelistexpiration" aria-hidden="true">#</a></h4><p>The <code>extendWhitelistExpiration()</code> function can be called by a whitelist expiration extender or the Airnode address to extend the whitelist expiration of a requester for the Airnode\u2013endpoint pair.</p><p>This function emits a <code>ExtendedWhitelistExpiration</code> event with the following signature:</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    event ExtendedWhitelistExpiration(</span></span>
<span class="line"><span style="color:#A6ACCD;">        address indexed airnode,</span></span>
<span class="line"><span style="color:#A6ACCD;">        bytes32 endpointId,</span></span>
<span class="line"><span style="color:#A6ACCD;">        address indexed requester,</span></span>
<span class="line"><span style="color:#A6ACCD;">        address indexed sender,</span></span>
<span class="line"><span style="color:#A6ACCD;">        uint256 expiration</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="setwhitelistexpiration" tabindex="-1">setWhitelistExpiration <a class="header-anchor" href="#setwhitelistexpiration" aria-hidden="true">#</a></h4><p>The <code>setWhitelistExpiration()</code> function can be called by a whitelist expiration setter or the Airnode address to set the whitelisting expiration of a requester for the Airnode\u2013endpoint pair. This can hasten expiration.</p><p>This function emits a <code>SetWhitelistExpiration</code> event with the following signature:</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    event SetWhitelistExpiration(</span></span>
<span class="line"><span style="color:#A6ACCD;">        address indexed airnode,</span></span>
<span class="line"><span style="color:#A6ACCD;">        bytes32 endpointId,</span></span>
<span class="line"><span style="color:#A6ACCD;">        address indexed requester,</span></span>
<span class="line"><span style="color:#A6ACCD;">        address indexed sender,</span></span>
<span class="line"><span style="color:#A6ACCD;">        uint256 expiration</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="setwhiteliststatuspastexpiration" tabindex="-1">setWhitelistStatusPastExpiration <a class="header-anchor" href="#setwhiteliststatuspastexpiration" aria-hidden="true">#</a></h4><p>The <code>setWhitelistStatusPastExpiration()</code> function can be called by an indefinite whitelister or the Airnode address to set the whitelist status of a requester past expiration for the Airnode\u2013endpoint pair. This is useful to allow access to an API even if the expiration date has passed. For example, keep authorizing requests while a sum of API3 tokens is locked.</p><p>This function emits a <code>ExtendedWhitelistExpiration</code> event with the following signature:</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    event SetWhitelistStatusPastExpiration(</span></span>
<span class="line"><span style="color:#A6ACCD;">        address indexed airnode,</span></span>
<span class="line"><span style="color:#A6ACCD;">        bytes32 endpointId,</span></span>
<span class="line"><span style="color:#A6ACCD;">        address indexed requester,</span></span>
<span class="line"><span style="color:#A6ACCD;">        address indexed sender,</span></span>
<span class="line"><span style="color:#A6ACCD;">        bool status</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="isauthorized" tabindex="-1">isAuthorized <a class="header-anchor" href="#isauthorized" aria-hidden="true">#</a></h4><p>The <code>isAuthorized()</code> function will be called by AirnodeRrpV0 to verify the authorization status of a request. This function will return true for all whitelisted requester contracts, admins and Airnode operator address.</p><h3 id="requesterauthorizerwithmanager" tabindex="-1">RequesterAuthorizerWithManager <a class="header-anchor" href="#requesterauthorizerwithmanager" aria-hidden="true">#</a></h3><p>This contract implements a requester-based RRP authorizer and assigns the API3 DAO as the manager or in other words, the highest ranking admin across all Airnodes.</p><p>The manager and the accounts that it has granted the whitelist expiration extender, whitelist expiration setter and the indefinite whitelister roles will use <code>RequesterAuthorizerWithManager</code> to whitelist requesters across all Airnodes.</p><h4 id="extendwhitelistexpiration-1" tabindex="-1">extendWhitelistExpiration <a class="header-anchor" href="#extendwhitelistexpiration-1" aria-hidden="true">#</a></h4><p>The <code>extendWhitelistExpiration()</code> function can be called by a whitelist expiration extender or the manager to extend the whitelist expiration of a requester for the Airnode\u2013endpoint pair.</p><p>This function emits a <code>ExtendedWhitelistExpiration</code> event with the following signature:</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    event ExtendedWhitelistExpiration(</span></span>
<span class="line"><span style="color:#A6ACCD;">        address indexed airnode,</span></span>
<span class="line"><span style="color:#A6ACCD;">        bytes32 endpointId,</span></span>
<span class="line"><span style="color:#A6ACCD;">        address indexed requester,</span></span>
<span class="line"><span style="color:#A6ACCD;">        address indexed sender,</span></span>
<span class="line"><span style="color:#A6ACCD;">        uint256 expiration</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="setwhitelistexpiration-1" tabindex="-1">setWhitelistExpiration <a class="header-anchor" href="#setwhitelistexpiration-1" aria-hidden="true">#</a></h4><p>The <code>setWhitelistExpiration()</code> function can be called by a whitelist expiration setter or the manager to set the whitelisting expiration of a requester for the Airnode\u2013endpoint pair. This can hasten expiration.</p><p>This function emits a <code>SetWhitelistExpiration</code> event with the following signature:</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    event SetWhitelistExpiration(</span></span>
<span class="line"><span style="color:#A6ACCD;">        address indexed airnode,</span></span>
<span class="line"><span style="color:#A6ACCD;">        bytes32 endpointId,</span></span>
<span class="line"><span style="color:#A6ACCD;">        address indexed requester,</span></span>
<span class="line"><span style="color:#A6ACCD;">        address indexed sender,</span></span>
<span class="line"><span style="color:#A6ACCD;">        uint256 expiration</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="setwhiteliststatuspastexpiration-1" tabindex="-1">setWhitelistStatusPastExpiration <a class="header-anchor" href="#setwhiteliststatuspastexpiration-1" aria-hidden="true">#</a></h4><p>The <code>setWhitelistStatusPastExpiration()</code> function can be called by an indefinite whitelister or the manager to set the whitelist status of a requester past expiration for the Airnode\u2013endpoint pair. This is useful to allow access to an API even if the expiration date has passed. For example, keep authorizing requests while a sum of API3 tokens is locked.</p><p>This function emits a <code>ExtendedWhitelistExpiration</code> event with the following signature:</p><div class="language- line-numbers-mode"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    event SetWhitelistStatusPastExpiration(</span></span>
<span class="line"><span style="color:#A6ACCD;">        address indexed airnode,</span></span>
<span class="line"><span style="color:#A6ACCD;">        bytes32 endpointId,</span></span>
<span class="line"><span style="color:#A6ACCD;">        address indexed requester,</span></span>
<span class="line"><span style="color:#A6ACCD;">        address indexed sender,</span></span>
<span class="line"><span style="color:#A6ACCD;">        bool status</span></span>
<span class="line"><span style="color:#A6ACCD;">    );</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="isauthorized-1" tabindex="-1">isAuthorized <a class="header-anchor" href="#isauthorized-1" aria-hidden="true">#</a></h4><p>The <code>isAuthorized()</code> function will be called by AirnodeRrpV0 to verify the authorization status of a request. This function will return true for all whitelisted requester contracts, admins and the meta-admin address.</p>`,81);function m(n,D,f,w,g,x){const t=s("VersionWarning"),r=s("TocHeader"),i=s("TOC");return l(),p("div",null,[a("h1",y,[c(d(n.$frontmatter.title)+" ",1),b]),e(t),e(r),e(i,{class:"table-of-contents","include-level":[2,5]}),C])}const v=o(A,[["render",m]]);export{z as __pageData,v as default};
