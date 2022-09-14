---
title: Best Practices
folder: Introduction
---

<TitleSpan>{{$frontmatter.folder}}</TitleSpan>

# {{$frontmatter.title}}

<Toc/>

dAPIs are aggregated from multiple beacons using a decentralized pool of
independent Airnodes. All Airnodes are API provider owned and operated. API
providers supply data to the `DAPIServer` contract which lives on many chains.

dAPP developers should consider a few important aspects of dAPIs in general.

- Ease of Use
- Monitoring
- Security

## Ease of Use

dAPIs are the quickest way to connect your smart contracts to the real-world
data such as asset prices. One use for dAPIs is to retrieve the latest pricing
data of an asset in a single call and use that data either on-chain in a smart
contract or off-chain in another application of choosing.

If you already have a project started and would like to integrate dAPIs, add the
`DapiServer` contract to your existing smart contract. It is straight forward to
call a dAPI using the `DapiServer` contract.

```solidity
import "@api3/airnode-protocol-v1/contracts/dapis/interfaces/IDapiServer.sol";
...
 (value, timestamp) =
            IDapiServer(_dapiServerContractAddress).readDataFeedWithDapiName(_dapiName);
    }
```

See the details in the
[dApp Developers section](../developers/read-data-feed-with-dapi-name.md) of the
dAPI project.

::: tip Consideration for "Ease of Use"

Use the `DapiServer.sol` contract function
[readDataFeedWithDapiName(\_dapiName)](../developers/read-data-feed-with-dapi-name.md)
as the best way to access dAPI values as aggregated beacon values.

:::

## Monitoring

Code sample here written in nodejs.

::: tip Consideration for "Monitoring"

Build and deploy a monitoring app of your own that checks dAPIs that are
important to you.

:::

## Security

dAPP developers do not need to trust API3 as all Airnodes are owned and operated
by an API provider. Each API provider has deployed their Airnode using a
`secrets.env` file that API3 does not possess. Therefore the Airnode operates
under the complete autonomy of the API provider who's signed data is used to
update
[DapiServer.sol](https://github.com/api3dao/airnode-protocol-v1/blob/main/contracts/dapis/DapiServer.sol)
contract. API3 cannot alter values from API providers.

::: tip Consideration for "Security"

All [API3 source code](https://github.com/orgs/api3dao/repositories?type=all) is
open sourced and can be verified by anyone. Consider reading through API3 source
code to verify claims of security.

:::
