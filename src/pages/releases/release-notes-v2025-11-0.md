---
name: "Release Notes - v2025.11.0"
title: "Release Notes - v2025.11.0"
description: "API Documentation (Beta), Scripting Revamp, Portable Desktop Apps, Mock Server Enhancements and more..."
image: /images/release-2025-11-0.png
meta:
  - created_at: "2025-11-27"
  - published_at: "2025-11-27"
author: "Liyas Thomas"
---

<ReleaseHeader/>
<VersionBadge version="v2025.11.0" date="November 27th 2025"/>

## Release Notes - v2025.11.0

API Documentation (Beta), Scripting Revamp, Portable Desktop Apps, Mock Server Enhancements and more! 🚀

<TypeBadge type="new features"/>
<TypeBadge type="improvements"/>
<TypeBadge type="fixes"/>

<BannerImage imageSource="/images/release-2025-11-0.png"/>

<br />

### Highlights

- **API Documentation (Beta):** Create, edit, and view rich API documentation. Supports Markdown, code snippet generation for multiple languages, and sidebar navigation. Teams can collaboratively publish documentation to a public URL.

<br /><br />

- **Scripting Revamp:** Enhanced scripting sandbox now supports `hopp.fetch()`, global `fetch()`, and `pm.sendRequest()` in pre/post-request scripts. This enables advanced workflows like token refreshes, chained requests, and complex validations, all while respecting the chosen interceptor with strong typing.

<br /><br />

- **Portable Desktop Apps:** Major update introducing portable builds for both Cloud and Self-Hosted editions (Community and Enterprise). Run Hoppscotch instantly without installation, offering greater flexibility for restricted environments.

<br /><br />

- **Mock Server Enhancements:** Now supports using environment variables for mock URLs, streamlining workflow across environments. Includes a new Pet Store example collection for exploring CRUD capabilities and improved UX for creating example collections.

<br /><br />

- **CLI Updates:** The minimum supported Node.js version for the CLI is now `v22`. If you're on Node.js `v20` (EOL in April, 2026), you can continue using CLI `v0.26.0` alongside `v2025.10.1` of the Hoppscotch app. Future CLI versions will require Node.js v22 or higher.

<br /><br />

- **Other Improvements:** Added platform-specific import support for personal collections, improved Profile Page UX with routing, and new keybindings for erasing responses.

<br /><br />

This update includes new features and core desktop improvements. Your data will be backed up automatically. If needed, see [<u>Downgrading and Restoring Backups</u>](https://docs.hoppscotch.io/guides/articles/downgrading-and-restoring-backups).

<br /><br />

#### 👉 [Read the full release blog](https://hoppscotch.com/blog/hoppscotch-v2025-11-0)

<br/>

<Row>
  <Added>
    <li>API Documentation (Beta) with public publishing</li>
    <li>Scripting: <code>hopp.fetch()</code>, global <code>fetch()</code>, and <code>pm.sendRequest()</code></li>
    <li>Portable Desktop Apps for Cloud and Self-Hosted</li>
    <li>Mock Server: Environment variables for mock URLs</li>
    <li>Mock Server: Pet Store example collection</li>
    <li>Erase Response functionality with keybindings</li>
  </Added>
  <Fixed>
    <li>Collection variable referencing issues</li>
    <li>Duplicate active indicators for requests</li>
  </Fixed>
</Row>
