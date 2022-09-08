---
title: aws.env
folder: Reference > Deployment Files
sidebarHeader: Reference → Airnode v0.7
basePath: /airnode/v0.7
tags:
---

<reference-VersionPicklist/>

# {{$frontmatter.title}}


When it is time to deploy the Airnode to AWS, the Docker
[deployer image](../../grp-providers/docker/deployer-image.md) will need the AWS
credentials to build the node.

- Variable names cannot contain dashes (-) or start with a number.

```bash
AWS_ACCESS_KEY_ID=XYZ...123
AWS_SECRET_ACCESS_KEY=ABC7...89
```

