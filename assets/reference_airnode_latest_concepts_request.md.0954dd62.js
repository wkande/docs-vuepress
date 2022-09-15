import{_ as o,o as i,c as d,a as t,b as c,t as p,d as e,e as u,r as s}from"./app.24634852.js";const h="/assets/concepts-request.d01b95c2.png",f="/assets/request-outcomes.146b30df.png",k=JSON.parse('{"title":"Request","description":"","frontmatter":{"title":"Request","docSetName":"Airnode v0.7","folder":"Concepts and Definitions","basePath":"/airnode/v0.7","tags":null},"headers":[{"level":2,"title":"requestId","slug":"requestid","link":"#requestid","children":[]},{"level":2,"title":"Request Parameters","slug":"request-parameters","link":"#request-parameters","children":[]},{"level":2,"title":"Full Request","slug":"full-request","link":"#full-request","children":[]},{"level":2,"title":"Template Request","slug":"template-request","link":"#template-request","children":[]},{"level":2,"title":"Request Outcomes","slug":"request-outcomes","link":"#request-outcomes","children":[{"level":3,"title":"Fulfill","slug":"fulfill","link":"#fulfill","children":[]},{"level":3,"title":"Fail","slug":"fail","link":"#fail","children":[]}]},{"level":2,"title":"Check if request is awaiting fulfillment","slug":"check-if-request-is-awaiting-fulfillment","link":"#check-if-request-is-awaiting-fulfillment","children":[]}],"relativePath":"reference/airnode/latest/concepts/request.md"}'),m={name:"reference/airnode/latest/concepts/request.md"},y={id:"frontmatter-title",tabindex:"-1"},A=t("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),b=u('<p>A request is made, by a <a href="./requester.html">requester</a>, to either the <code>makeFullRequest()</code> or <code>makeTemplateRequest()</code> functions of the <a href="./README.html#airnoderrpv0-sol">AirnodeRrpV0.sol</a> protocol contract which adds the request to its storage. The targeted off-chain <a href="./airnode.html">Airnode</a> gathers the request from AirnodeRrpV0.sol&#39;s storage and responds using the <code>fulFill()</code> function of AirnodeRrpV0.sol.</p><blockquote><img src="'+h+`" width="650px"><ol><li><p class="diagram-line">The requester calls makeFullRequest() on the AirnodeRrpV0 protocol contract.</p></li><li><p class="diagram-line">makeFullRequest() assigns a requestId to the request for tracking purposes, adds the requestId to storage, emits the request to the event logs and returns the requestId to the requester.</p></li><li><p class="diagram-line" style="color:gray;">Airnode, during its run cycle, picks the request from the event logs.</p></li><li><p class="diagram-line" style="color:blue;">Airnode gets data from the API and encodes it. The encoded response must have length at most 1024 bytes. (This is negligible in practice, since large responses are costly to store)</p></li><li><p class="diagram-line" style="color:green;">Airnode sends the response to fulFill() in AirnodeRrpV0 which in turn removes the pending requestId from storage and forwards the response to myFulFill(). The requestId is included as part of the response.</p></li></ol></blockquote><p>Learn more on how to <a href="./../grp-developers/call-an-airnode.html">Call an Airnode</a>.</p><h2 id="requestid" tabindex="-1"><code>requestId</code> <a class="header-anchor" href="#requestid" aria-hidden="true">#</a></h2><p>The <code>requestId</code> uniquely identifies a request. When a requester makes a request using AirnodeRrpV0.sol, a <code>requestId</code> is generated before the request is added to the event logs and the requestId is returned to the requester. This <code>requestId</code> is a hash of certain data members depending on which type of request is made, <code>makeFullRequest()</code> or <code>makeTemplateRequest()</code>. They only differ in that one uses <code>endpointId</code> plus <code>airnode</code> address and the other <code>templateId</code> (since template already contains the <code>airnode</code> address).</p><table><thead><tr><th style="text-align:left;">makeFullRequest()</th><th style="text-align:left;">makeTemplateRequest()</th></tr></thead><tbody><tr><td style="text-align:left;">block.chainid</td><td style="text-align:left;">block.chainid</td></tr><tr><td style="text-align:left;">address(this)</td><td style="text-align:left;">address(this)</td></tr><tr><td style="text-align:left;">msg.sender</td><td style="text-align:left;">msg.sender</td></tr><tr><td style="text-align:left;">requesterRequestCount</td><td style="text-align:left;">requesterRequestCount</td></tr><tr><td style="text-align:left;"></td><td style="text-align:left;">airnode</td></tr><tr><td style="text-align:left;"><span style="color:purple;">endpointId</span></td><td style="text-align:left;"><span style="color:purple;">templateId</span></td></tr><tr><td style="text-align:left;">sponsor</td><td style="text-align:left;">sponsor</td></tr><tr><td style="text-align:left;">sponsorWallet</td><td style="text-align:left;">sponsorWallet</td></tr><tr><td style="text-align:left;">fulfillAddress</td><td style="text-align:left;">fulfillAddress</td></tr><tr><td style="text-align:left;">fulfillFunctionId</td><td style="text-align:left;">fulfillFunctionId</td></tr><tr><td style="text-align:left;">parameters</td><td style="text-align:left;">parameters</td></tr></tbody></table><p>After the request (with <code>requestId</code>) is added to the event logs, Airnode gathers the request and verifies the <code>requestId</code> by re-computing its hash before responding to the request. This verifies the parameters have not been tampered with.</p><h2 id="request-parameters" tabindex="-1">Request Parameters <a class="header-anchor" href="#request-parameters" aria-hidden="true">#</a></h2><p>The following list summarizes the values expected for the parameters of a request.</p><ul><li><p><code>templateId</code> the id of a template to use, <em>(only used for <code>makeTemplateRequest</code>)</em></p></li><li><p><code>airnode</code> (address) and <code>endpointId</code> specify the endpoint, <em>(only used for <code>makeFullRequest</code>)</em></p></li><li><p><code>sponsor</code> and <code>sponsorWallet</code> (addresses) specify which wallet will be used to fulfill the request</p></li><li><p><code>fulfillAddress</code> and <code>fulfillFunctionId</code> specify which contract/function will be called to fulfill the request</p></li><li><p><code>parameters</code> specify the API and <a href="/ois/v1.0/ois.html#_5-4-reservedparameters">reserved</a> parameters (see <a href="./../reference/specifications/airnode-abi-specifications.html">Airnode ABI specifications</a> for how these are encoded)</p></li></ul><h2 id="full-request" tabindex="-1">Full Request <a class="header-anchor" href="#full-request" aria-hidden="true">#</a></h2><p>A full request does not refer to a template at all. Full requests are useful if the requester will not make a similar request ever again (e.g., in a prediction market context).</p><div class="language-solidity line-numbers-mode"><button class="copy"></button><span class="lang">solidity</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">makeFullRequest</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">airnode</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">bytes32</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">endpointId</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">sponsor</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">sponsorWallet</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">fulfillAddress</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">bytes4</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">fulfillFunctionId</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">bytes</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">calldata</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">parameters</span></span>
<span class="line"><span style="color:#89DDFF;">){...}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="template-request" tabindex="-1">Template Request <a class="header-anchor" href="#template-request" aria-hidden="true">#</a></h2><p>A template request refers to a template for the <code>airnode</code> address, <code>endpointId</code> and <code>parameters</code>.</p><div class="language-solidity line-numbers-mode"><button class="copy"></button><span class="lang">solidity</span><pre><code><span class="line"><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Template</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> airnode</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">bytes32</span><span style="color:#A6ACCD;"> endpointId</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">bytes</span><span style="color:#A6ACCD;"> parameters</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>The requester can refer to the <code>templateId</code> of a template while making a request, and the Airnode will fetch these and use them in the request.</p><div class="language-solidity line-numbers-mode"><button class="copy"></button><span class="lang">solidity</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">makeTemplateRequest</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">bytes32</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">templateId</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">sponsor</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">sponsorWallet</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">address</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">fulfillAddress</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">bytes4</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">fulfillFunctionId</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">bytes</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">calldata</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">parameters</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>When a template is used to make a request, both the parameters encoded in <code>parameters</code> of the template and <code>parameters</code> provided at request-time by the requester will be used by the Airnode. In case the two include a parameter with the same name, the one provided at request-time will be used.</p><h2 id="request-outcomes" tabindex="-1">Request Outcomes <a class="header-anchor" href="#request-outcomes" aria-hidden="true">#</a></h2><p>A request made to an Airnode has three possible outcomes:</p><ul><li><a href="./request.html#fulfill">Fulfill</a></li><li><a href="./request.html#fail">Fail</a></li><li><a href="./request.html#ignore">Ignore</a></li></ul><h3 id="fulfill" tabindex="-1">Fulfill <a class="header-anchor" href="#fulfill" aria-hidden="true">#</a></h3><p><code>fulfill()</code> is the desired outcome and it will only be called if Airnode received a successful response from the API provider.</p><blockquote><img src="`+f+'" width="550px"><ol><li><p class="diagram-line">Airnode calls AirnodeRrpV0.fulFill() with a response only if the API has not responded with an error. AirnodeRrpV0.fulfill() performs a call back to myFulFill() which in turn receives the response.</p></li><li><p class="diagram-line" style="color:green;">If AirnodeRrpV0.fulFill() fails internally or the underlying low level call to myFulFill() reverts then Airnode will start the process in step #3 to fail the request.</p></li><li><p class="diagram-line" style="color:green;">If Airnode errors, or is told by AirnodeRrpV0.fulFill() to error, it calls AirnodeRrpV0.fail() which removes the request from the pending list of requestIds on-chain.</p></li></ol></blockquote><div class="tip custom-block"><p class="custom-block-title">Important to Note</p><p>Fulfill is the only outcome that returns results to a requester contract.</p></div><p>For a successful request, Airnode calls the <code>fulfill()</code> function in AirnodeRrpV0.sol that will in turn call back the requester contract at <code>fulfillAddress</code> using function <code>fulfillFunctionId</code> to deliver <code>data</code>.</p><p><code>fulfill()</code> also receives a signature to validate on-chain that the response data was submitted by the Airnode. This is to prevent requesters from fulfilling their own requests in order to manipulate data submitted by AirnodeRrpV0.sol.</p><p><code>fulfill()</code> will not revert if the <code>fulfillFunctionId</code> external call reverts. However, it will return <code>false</code> in this case or if there is no function with a matching signature at <code>fulfillAddress</code>. On the other hand, it will return <code>true</code> if the external call returns successfully or if there is no contract deployed at <code>fulfillAddress</code>. In the case <code>false</code> is returned then an error message will also be returned in a variable which can be decoded to retrieve the revert string. For example Airnode will decode this variable when this function returns <code>false</code> and call <code>fail()</code> on AirnodeRrpV0.sol with the revert string as the error message.</p><h3 id="fail" tabindex="-1">Fail <a class="header-anchor" href="#fail" aria-hidden="true">#</a></h3><p>As noted in the diagram above, if the transaction that calls <code>fulfill()</code> returns <code>false</code>, the Airnode decodes the revert string and calls the <code>fail()</code> method to report the failure. For privacy and security reasons, API error messages are not sent on-chain. Also note that the node will not attempt to fulfill a failed request afterwards.</p><p>Airnode is stateless, which means that there is no database storing which requests have been fulfilled or failed, which are waiting on confirmations and which are still pending. This information is retrieved from the chain on each request-response cycle (roughly every minute). During each cycle, retrieved requests need to be ordered in the same way to ensure they are submitted using the same nonce. This is important because it&#39;s possible for a transaction to not have been confirmed by the time the next cycle runs. If this happens, the transaction is re-submitted with a &quot;faster&quot; transaction fee, overwriting the previous transaction.</p><h2 id="check-if-request-is-awaiting-fulfillment" tabindex="-1">Check if request is awaiting fulfillment <a class="header-anchor" href="#check-if-request-is-awaiting-fulfillment" aria-hidden="true">#</a></h2><p>There is a convenience method in AirnodeRrpV0.sol called <code>requestIsAwaitingFulfillment()</code> that can be called to check if a request was made but not yet fulfilled/failed. If a requester has made a request, received a <code>requestId</code> but did not hear back, it can call this method to check if the Airnode has called back <code>fail()</code> instead.Returns <code>true</code> if the request is awaiting fulfillment (i.e., <code>true</code> if <code>fulfill()</code> or <code>fail()</code> is not called back yet), <code>false</code> otherwise.</p>',34);function C(a,q,g,F,D,v){const l=s("VersionWarning"),n=s("TocHeader"),r=s("TOC");return i(),d("div",null,[t("h1",y,[c(p(a.$frontmatter.title)+" ",1),A]),e(l),e(n),e(r,{class:"table-of-contents","include-level":[2,3,4]}),b])}const I=o(m,[["render",C]]);export{k as __pageData,I as default};
