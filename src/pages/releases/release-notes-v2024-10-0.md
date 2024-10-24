---
name: "Release Notes - v2024.10.0"
title: "Release Notes - v2024.10.0"
description: "Collection Runner, Binary Files as Request Body, Digest Auth & More."
image: /images/release-2024-10-0.png
meta:
  - created_at: "2024-10-31"
  - published_at: "2024-10-31"
author: "Kiran Johns"
---

<PostHeader/>

<VersionBadge version="v2024.10.0" date="October 31th 2024"/>

## Release Notes - v2024.10.0

Collection Runner, Binary Files as Request Body, Digest Auth & More.

<TypeBadge type="new features"/>
<TypeBadge type="improvements"/>

<BannerImage imageSource="/images/release-2024-10-0.png"/>

<br />

#### Launching the collection runner 🏃

We're excited to release the collection runner on the Hoppscotch API testing client! Now you can automate the execution of multiple requests in a collection using the collection runner on the API client.

#### Send binary files as the request body 💽

You can now send a binary file content-type in your request body! Simply go to the request body section and choose binary file to get started!

#### Support for digest auth 🔒

We've added support for digest authorization. To use it, go to the Authorization tab in your request, choose Digest Auth from the Auth Type dropdown, enter your credentials, and you're ready to go!


<br />

#### 👉 [Read the entire release blog](https://hoppscotch.com/blog/hoppscotch-v2024-10-0)

#### Summary

<Row>
   <Added>
      <li>Collection Runner</li>
      <li>Digest Auth</li>
      <li>Binary file content-type</li>
      <li>Encode query parameters </li>
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
