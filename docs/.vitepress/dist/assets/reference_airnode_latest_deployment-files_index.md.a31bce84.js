import {
  _ as o,
  a,
  b as s,
} from "./chunks/api-provider-overview-container.ee22ccd3.js";
import {
  _ as n,
  o as r,
  c as l,
  d,
  a as e,
  b as p,
  t as c,
  e as m,
  r as h,
} from "./app.b352a92c.js";
const P = JSON.parse(
    '{"title":"Overview","description":"","frontmatter":{"title":"Overview","folder":"Airnode","basePath":"/airnode/v0.7","sidebarHeader":"Reference","sidebarSubHeader":"\u2192 Airnode v0.7","tags":null},"headers":[],"relativePath":"reference/airnode/latest/deployment-files/index.md"}'
  ),
  f = { name: "reference/airnode/latest/deployment-files/index.md" },
  g = { id: "frontmatter-title", tabindex: "-1" },
  u = e(
    "a",
    {
      class: "header-anchor",
      href: "#frontmatter-title",
      "aria-hidden": "true",
    },
    "#",
    -1
  ),
  b = m(
    '<p>Airnode is configured using its <code>config.json</code> file. The diagrams below illustrate the required files to successfully deploy an Airnode to AWS, GCP or a Docker Container.</p><p>::: tabs</p><p>@tab AWS</p><img src="' +
      o +
      '" style="width:450px;"><ol><li><p class="diagram-line"><b>config.json</b>: Contains the Airnode&#39;s configuration. The OIS object is important as it maps an API to Airnode endpoints.</p></li><li><p class="diagram-line" style="margin-top:10px;"><b>secrets.env</b>: Values that should not be exposed in config.json.</p></li><li><p class="diagram-line" style="margin-top:10px;">aws.env: AWS credentials required by the Docker deployer image.</p></li><li><p class="diagram-line" style="margin-top:10px;"><b>Docker deployer image</b>: Deploys Airnode using its deploy command.</p></li></ol><p>@tab GCP</p><img src="' +
      a +
      '" style="width:450px;"><ol><li><p class="diagram-line"><b>config.json</b>: Contains the Airnode&#39;s configuration. The OIS object is important as it maps an API to Airnode endpoints.</p></li><li><p class="diagram-line" style="margin-top:10px;"><b>secrets.env</b>: Values that should not be exposed in config.json.</p></li><li><p class="diagram-line" style="margin-top:10px;"><b>Docker deployer image</b>: Deploys Airnode using its deploy command.</p></li></ol><p>@tab Container</p><img src="' +
      s +
      '" style="width:450px;"><ol><li><p class="diagram-line"><b>config.json</b>: Contains the Airnode&#39;s configuration. The OIS object is important as it maps an API to Airnode endpoints.</p></li><li><p class="diagram-line" style="margin-top:10px;"><b>secrets.env</b>: Values that should not be exposed in config.json.</p></li><li><p class="diagram-line" style="margin-top:10px;"><b>Docker client image</b>: Deploys Airnode using its deploy command.</p></li></ol><p>:::</p><p>Airnode deployment files:</p><ul><li><p><a href="./config-json.html">config.json</a> is the file that specifies the API\u2013Airnode integrations and various node and deployment parameters.</p></li><li><p><a href="./secrets-env.html">secrets.env</a> is the file that keeps the secret parameters (airnode mnemonic, API keys, blockchain provider URLs and others) that the Airnode deployments will use.</p></li><li><p><a href="./aws-env.html">aws.env</a> is the file that holds credentials if the Airnode is deployed to AWS cloud provider. It is required by the Docker <a href="./../../grp-providers/docker/deployer-image.html">deployer image</a>.</p></li></ul><p>Airnode deployments utilizes secrets such as security scheme values (i.e., API keys) and blockchain provider URLs. While populating <code>config.json</code> you can use standard shell variable interpolation syntax (e.g. <code>${VARIABLE}</code>) to insert values from <code>secrets.env</code>. That way the secrets are kept separately but are available as part of the configuration during the Airnode runtime.</p><p>The <code>config.json</code> file does NOT reference values in <code>aws.env</code> as it is read directly by the deployer image.</p><p>The deployer image outputs a <a href="./receipt-json.html">receipt.json</a> file after deployment, which contains information about the deployment that can be referred to later on for interaction or removal.</p>',
    17
  );
function y(i, _, A, v, x, k) {
  const t = h("VersionPicklist");
  return (
    r(),
    l("div", null, [
      d(t),
      e("h1", g, [p(c(i.$frontmatter.title) + " ", 1), u]),
      b,
    ])
  );
}
const S = n(f, [["render", y]]);
export { P as __pageData, S as default };
