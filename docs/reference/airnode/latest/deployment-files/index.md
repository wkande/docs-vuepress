---
title: Overview
folder: Airnode
basePath: /airnode/v0.7
sidebarHeader: Reference
sidebarSubHeader: → Airnode v0.7
tags:
---

<!--TitleSpan>{{$frontmatter.folder}}</TitleSpan-->

<VersionPicklist/>

# {{$frontmatter.title}}

Airnode is configured using its `config.json` file. The diagrams below
illustrate the required files to successfully deploy an Airnode to AWS, GCP
or a Docker Container.

::: tabs

@tab AWS

<img src="/api-provider-overview-aws.png" style="width:450px;">

1. <p class="diagram-line"><b>config.json</b>: Contains the Airnode's configuration. The OIS object is important as it maps an API to Airnode endpoints.</p>
2. <p class="diagram-line" style="margin-top:10px;"><b>secrets.env</b>: Values that should not be exposed in config.json.</p>
3. <p class="diagram-line" style="margin-top:10px;">aws.env: AWS credentials required by the Docker deployer image.</p>
4. <p class="diagram-line" style="margin-top:10px;"><b>Docker deployer image</b>: Deploys Airnode using its deploy command.</p>

@tab GCP

<img src="/api-provider-overview-gcp.png" style="width:450px;">

1. <p class="diagram-line"><b>config.json</b>: Contains the Airnode's configuration. The OIS object is important as it maps an API to Airnode endpoints.</p>
2. <p class="diagram-line" style="margin-top:10px;"><b>secrets.env</b>: Values that should not be exposed in config.json.</p>
3. <p class="diagram-line" style="margin-top:10px;"><b>Docker deployer image</b>: Deploys Airnode using its deploy command.</p>

@tab Container

<img src="/api-provider-overview-container.png" style="width:450px;">

1. <p class="diagram-line" ><b>config.json</b>: Contains the Airnode's configuration. The OIS object is important as it maps an API to Airnode endpoints.</p>
2. <p class="diagram-line" style="margin-top:10px;"><b>secrets.env</b>: Values that should not be exposed in config.json.</p>
3. <p class="diagram-line" style="margin-top:10px;"><b>Docker client image</b>: Deploys Airnode using its deploy command.</p>

:::

Airnode deployment files:

- [config.json](./config-json.md) is the file that specifies the API–Airnode
  integrations and various node and deployment parameters.

- [secrets.env](./secrets-env.md) is the file that keeps the secret parameters
  (airnode mnemonic, API keys, blockchain provider URLs and others) that the
  Airnode deployments will use.

- [aws.env](./aws-env.md) is the file that holds credentials if the Airnode is
  deployed to AWS cloud provider. It is required by the Docker
  [deployer image](../../grp-providers/docker/deployer-image.md).

Airnode deployments utilizes secrets such as security scheme values (i.e., API
keys) and blockchain provider URLs. While populating `config.json` you can use
standard shell variable interpolation syntax (e.g. `${VARIABLE}`) to insert
values from `secrets.env`. That way the secrets are kept separately but are
available as part of the configuration during the Airnode runtime.

The `config.json` file does NOT reference values in `aws.env` as it is read
directly by the deployer image.

The deployer image outputs a [receipt.json](receipt-json.md) file after
deployment, which contains information about the deployment that can be referred
to later on for interaction or removal.
