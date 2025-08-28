---
name: "Release Notes - v2025.8.0"
title: "Release Notes - v2025.8.0"
description: "Collection Variables, structured JSON data support, Bug Fixes and More..."
image: /images/release-2025-8-0.png
meta:
  - created_at: "2025-08-28"
  - published_at: "2025-08-28"
author: "Liyas Thomas"
---

<ReleaseHeader/>
<VersionBadge version="v2025.8.0" date="August 28th 2025"/>

## Release Notes - v2025.8.0

Collection Variables, structured JSON data support, Bug Fixes and More! 🚀

<TypeBadge type="new features"/>
<TypeBadge type="improvements"/>

<BannerImage imageSource="/images/release-2025-8-0.png"/>

<br />

### Highlights

- Collection variables to scope and reuse values across your API collections.
- Structured JSON data in the response viewer for easier navigation.
- Advanced parameters support in OAuth grant types for more flexible auth flows.
- OpenAPI import now supports body schemas.

<br/><br/>

<Row>
  <Added>
    <li>Collection variables</li>
    <li>Structured JSON data in the response viewer</li>
    <li>Support for body schemas in OpenAPI import</li>
    <li>Support advanced parameters in OAuth grant types</li>
  </Added>
  <Fixed>
    <li>Correctly resolve client IP behind proxies</li>
    <li>Update masked secret environment value after replace action</li>
    <li>Preserve request name when importing cURL commands</li>
    <li>Show argument type on click in GraphQL documentation view</li>
    <li>Handle edge cases and bugs in collection variables</li>
    <li>Desktop: rebase with app load mirror and hash</li>
    <li>Prevent GraphQL request failure caused by collection property computation</li>
    <li>Maintain incremental orderIndex for collections and requests</li>
  </Fixed>
  <Changed>
    <li>Bump dependencies and account for breaking changes</li>
    <li>Native: bump and align dependencies</li>
    <li>Align TailwindCSS to 3.4.16</li>
    <li>Bump version to 2025.8.0</li>
    <li>Bump CLI version</li>
    <li>Security patch for the dependency chain</li>
    <li>Improve French translations</li>
    <li>Update <code>ws</code> dependency for <code>subscriptions-transport-ws</code></li>
    <li>Revert dependency override for <code>ws</code> in <code>subscriptions-transport-ws</code></li>
  </Changed>
</Row>
