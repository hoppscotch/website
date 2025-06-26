---
name: "Release Notes - v2024.6.0"
title: "Release Notes - v2024.6.0"
description: "Major upgrades to the CLI, client certificates, and more..."
image: /images/release-2024-6-0.png
meta:
  - created_at: "2024-06-28"
  - published_at: "2024-06-28"
author: "Kiran Johns"
---

<ReleaseHeader/>

<VersionBadge version="v2024.6.0" date="June 28th 2024"/>

## Release Notes - v2024.6.0

Major upgrades to CLI, Client Certificates and more...

<TypeBadge type="new features"/>
<TypeBadge type="improvements"/>

<BannerImage imageSource="/images/release-2024-6-0.png"/>

#### Hoppscotch CLI gets a major upgrade

Hoppscotch CLI can now connect with your workspaces on Hoppscotch Cloud and Hoppscotch Self-Hosted versions, making it easy for you to run your collections and tests using the CLI for CI/CD. [**Read more about how you can integrate Hoppscotch CLI with your API client on cloud or self-hosted instances**](https://docs.hoppscotch.io/documentation/clients/cli/overview#running-collections-present-on-the-api-client).

#### Client Certificates

You can now configure client certificates on the Hoppscotch Desktop app to connect to APIs using mTLS. [**Read more about it here**](https://docs.hoppscotch.io/documentation/features/client-certificate), and [click here](https://hoppscotch.com/download) to download the Hoppscotch Desktop app!

#### Custom Banners

Self-hosted enterprise admins can now alert users of the organization about scheduled maintenance and other information.

<br/>

[Read the entire release blog](https://hoppscotch.com/blog/hoppscotch-v2024-6-0)

#### Other updates

<Row>
   <Added>
      <li>Personal access tokens</li>
      <li>Custom banner alerts for self-hosted enterprise admins</li>
      <li>User's last active time on self-hosted admin dashboard</li>
   </Added>
   <Fixed>
      <li>CodeMirror styling issue</li>
      <li>Code generation user experience</li>
      <li>Unwanted variable wrapping when importing from Insomnia</li>
   </Fixed>
   <Performance>
      <li>App performance</li>
      <li>Bumped dependencies</li>
   </Performance>
</Row>
