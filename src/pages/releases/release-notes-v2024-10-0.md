---
name: "Release Notes - v2024.10.0"
title: "Release Notes - v2024.10.0"
description: "Digest Auth, CA and Client Certificates, Parameter Encoding and more"
image: /images/release-2024-10-0.png
meta:
  - created_at: "2024-10-31"
  - published_at: "2024-10-31"
author: "Kiran Johns"
---

<PostHeader/>

<VersionBadge version="v2024.10.0" date="October 31th 2024"/>

## Release Notes - v2024.10.0

Digest Auth, CA and Client Certificates, Parameter Encoding and more

<TypeBadge type="new features"/>
<TypeBadge type="improvements"/>

<BannerImage imageSource="/images/release-2024-10-0.png"/>

<br />

#### Support for digest auth

We've added support for digest authorization. To use it, go to the Authorization tab in your request, choose Digest Auth from the Auth Type dropdown, enter your credentials, and you're ready to go!

#### Encode Query Paramaters

We reorganized our settings page and you can now encode query parameters when sending a request

#### CA and Client Certificates

We're also bringing CA and Client Certificates to the web app, and you can use and configure your certificates when you use the Hoppscotch Agent as the interceptor

<br />

#### 👉 [Read the entire release blog](https://hoppscotch.com/blog/hoppscotch-v2024-10-0)

#### Summary

<Row>
   <Added>
      <li>Digest Auth</li>
      <li>Encode query parameters </li>
      <li>CA and Client Certificates on Web App</li>
   </Added>
   <Fixed>
   <li>Errors in tab service </li>
   </Fixed>
   <Changed>
   <li>Size of collection import on SH is now 50MB </li>
   </Changed>
   <Performance>
      <li>Dependency bumps</li>
   </Performance>
</Row>
