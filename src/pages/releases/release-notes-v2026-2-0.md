---
name: "Release Notes - v2026.2.0"
title: "Release Notes - v2026.2.0"
description: "URL Encoding, API Docs Versioning, Stronger Security and more..."
image: /images/release-2026-2-0.png
meta:
  - created_at: "2026-02-26"
  - published_at: "2026-02-26"
author: "Liyas Thomas"
---

<ReleaseHeader/>
<VersionBadge version="v2026.2.0" date="February 26th 2026"/>

## Release Notes - v2026.2.0

URL Encoding, API Docs Versioning, Stronger Security and more! 🚀

<TypeBadge type="new features"/>
<TypeBadge type="improvements"/>
<TypeBadge type="fixes"/>

<BannerImage imageSource="/images/release-2026-2-0.png"/>

<br />

### Highlights

- **Encode and Decode Highlighted Text:** Select just the part of the URL you want to encode or decode — no need to transform the entire text. Great for working with complex query strings.

<br /><br />

- **Version Your API Documentation:** Maintain and publish multiple versions of your API docs, so consumers always reference the right one as your API evolves.

<br /><br />

- **Easier Team Management for Admins:** The teams list in the admin dashboard now has search and pagination, making it a breeze to manage large organizations.

<br /><br />

- **Stronger Security Across the Board:** We've patched several vulnerabilities and tightened authorization checks across the platform to keep your data and your team's data safe.

<br /><br />

- **Smarter Script Error Handling:** The scripting sandbox now recovers automatically from bad states, so stale errors from previous runs won't stick around and block your workflow.

<br /><br />

- **Better Look and Feel:** Realtime pages now handle smaller screens gracefully, the environment variables dialog is roomier on large displays, and variable tooltips stay within view.

<br /><br />

This update includes new features and important security fixes. Your data will be backed up automatically. If needed, see [<u>Downgrading and Restoring Backups</u>](https://docs.hoppscotch.io/guides/articles/downgrading-and-restoring-backups).

<br/>

#### 👉 [Read the full release blog](https://hoppscotch.com/blog/hoppscotch-v2026-2-0)

<br/>

<Row>
  <Added>
    <li>Encode or decode only the selected portion of a URL</li>
    <li>Search and pagination in the admin dashboard teams list</li>
    <li>API documentation versioning support</li>
  </Added>
  <Fixed>
    <li>Secret environment variables in basic auth headers are now resolved correctly before encoding</li>
    <li>Scripting sandbox automatically recovers from corrupted state</li>
    <li>Realtime pages look and work better on smaller screens</li>
    <li>Updated dependencies to address security vulnerabilities</li>
    <li>Tightened access controls across collections, requests and onboarding</li>
    <li>Long variable values no longer overflow on hover</li>
    <li>Opening a request from search results no longer causes an error</li>
    <li>Environment variables dialog is wider on larger screens</li>
  </Fixed>
</Row>
