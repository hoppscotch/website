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
    <li>Maintain incremental orderIndex for collections and requests</li>
  </Fixed>
  <Changed>
    <li>Bump dependencies and account for breaking changes</li>
    <li>Security patch for the dependency chain</li>
    <li>Improve French translations</li>
  </Changed>
</Row>
