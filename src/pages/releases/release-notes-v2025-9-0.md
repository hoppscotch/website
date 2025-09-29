---
name: "Release Notes - v2025.9.0"
title: "Release Notes - v2025.9.0"
description: "Collection Sorting, Experimental Hopp Scripting Namespace, Enhanced Security Updates and More..."
image: /images/release-2025-9-0.png
meta:
  - created_at: "2025-09-29"
  - published_at: "2025-09-29"
author: "Liyas Thomas"
---

<ReleaseHeader/>
<VersionBadge version="v2025.9.0" date="September 29th 2025"/>

## Release Notes - v2025.9.0

Collection Sorting, Experimental hopp Scripting Namespace, Enhanced Security Updates and More! 🚀

<TypeBadge type="new features"/>
<TypeBadge type="improvements"/>

<BannerImage imageSource="/images/release-2025-9-0.png"/>

<br />

### Highlights

- Alphabetical sorting for user and team collections for better organization.
- Enhanced workspace management with support for non-empty shared workspace names.
- Improved UI interactions including better sidebar indentation and modal handling.
- New experimental hopp scripting namespace for future-proof script development.

<br/><br/>

<Row>
  <Added>
    <li>Alphabetical sort for user and team collections</li>
    <li>Support for non-empty shared workspace names</li>
    <li>New experimental hopp scripting namespace</li>
    <li>Improved modal interactions with overlay click-to-close</li>
  </Added>
  <Fixed>
    <li>Correct indentation for nested endpoints in sidebar</li>
    <li>Prevent empty entries when dragging items past last row</li>
    <li>Handle actions for logged-in users in case of token expiration</li>
    <li>Multiple Set-Cookie headers in response handling</li>
    <li>Race condition in active team collection tab inheritance</li>
    <li>Ensure npm is installed for Node.js base image</li>
  </Fixed>
  <Changed>
    <li>Bump non-major dependencies</li>
    <li>Security patch for the dependency chain</li>
    <li>Streamline duplicated advanced param type definitions for OAuth grant types</li>
  </Changed>
</Row>
