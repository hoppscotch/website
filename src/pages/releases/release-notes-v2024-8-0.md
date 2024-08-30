---
name: "Release Notes - v2024.8.0"
title: "Release Notes - v2024.8.0"
description: "AWS Signature, HAR File Imports, Header Descriptions"
image: /images/release-2024-8-0.png
meta:
  - created_at: "2024-08-30"
  - published_at: "2024-08-30"
author: "Kiran Johns"
---

<PostHeader/>

<VersionBadge version="v2024.8.0" date="August 30th 2024"/>

## Release Notes - v2024.8.0

AWS Signature, HAR File Imports, Header Descriptions

<TypeBadge type="new features"/>
<TypeBadge type="improvements"/>

<BannerImage imageSource="/images/release-2024-8-0.png"/>

<br />

This update introduces new additions to the Hoppscotch Backend that require users to run a new migration (instructions can be found here for [community](https://docs.hoppscotch.io/documentation/self-host/community-edition/install-and-build#migrations) and [enterprise](https://docs.hoppscotch.io/documentation/self-host/enterprise-edition/install-and-build#migrations) editions respectively), in addition to that, we're also adding a new environment variable `DATA_ENCRYPTION_KEY` whose value is a 32 character alphanumeric string. For more details on this please refer to the [documentation](https://docs.hoppscotch.io).

<br />

#### AWS Signature Authorization Type 🔒

Support for AWS Signature authorization is now available. Just enter your AWS Access Key and Secret Key to securely sign your API requests within Hoppscotch.

<br />

#### Header & Parameter Descriptions 📝

You can now can add notes about what each parameter or header does right inside Hoppscotch, making it easier to remember the purpose of each part of your request.

<br />

#### Import HAR Files to Hoppscotch Collection 📦

With this new importer, you can now bring HAR files as your Hoppscotch Collection.

<br />

#### 👉 [Read the entire release blog](https://hoppscotch.com/blog/hoppscotch-v2024-8-0)

#### Summary

<Row>
   <Added>
      <li>AWS Signature Auth</li>
      <li>Header and Parameter Descriptions</li>
      <li>HAR File Imports </li>
      <li>OAuth2 Token Refresh</li>
   </Added>
   <Fixed>
      <li>Request Variable Support on Collection Runs</li>
      <li>Container Port Binding Issues</li>
   </Fixed>
   <Changed>
      <li>Alphabetically sorted environments</li>
   </Changed>
   <Others>
      <li>App performance</li>
   </Others>
</Row>
