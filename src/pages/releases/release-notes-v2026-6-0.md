---
name: "Release Notes - v2026.6.0"
title: "Release Notes - v2026.6.0"
description: "Desktop cookie persistence, security hardening, self-hosted sync fixes, mock server reliability updates and more..."
image: /images/release-2026-6-0.png
meta:
  - created_at: "2026-06-29"
  - published_at: "2026-06-29"
author: "Liyas Thomas"
---

<ReleaseHeader/>
<VersionBadge version="v2026.6.0" date="June 29th 2026"/>

## Release Notes - v2026.6.0: Desktop Cookie Persistence, Security Hardening, and Mock Server Reliability

Desktop cookie persistence, security hardening, self-hosted sync fixes, mock server reliability updates and more! 🚀

<TypeBadge type="new features"/>
<TypeBadge type="improvements"/>
<TypeBadge type="fixes"/>

<BannerImage imageSource="/images/release-2026-6-0.png"/>

<br />

### Highlights

- **Desktop Cookie Persistence and Reapplication:** The desktop app now preserves and reapplies cookies reliably across sessions, making authenticated workflows and multi-step testing significantly smoother.

<br /><br />

- **Ownership and Access Controls (Security):** Backend APIs now enforce ownership on user history and private user fields, reducing the risk of unauthorized data access.

<br /><br />

- **Self-Hosted Version Sync Reliability:** Desktop now correctly syncs the self-hosted instance version from the manifest, reducing version mismatch issues in self-hosted setups.

<br /><br />

- **Mock Server URL and Visibility Fixes:** Domain-based mock server URLs now correctly append `/backend` when subpath access is enabled, and newly created mock servers now persist `isPublic` state correctly (defaulting to private).

<br /><br />

- **Improved Collection and Request Handling:** OpenAPI re-import now preserves collection tree structure, inherited collection headers now resolve environment variables correctly, JSON bodies are preserved in cURL parsing, and API docs sandbox development instructions were refreshed.

<br /><br />

- **Security Hardening:** This release includes backend ownership enforcement for user history and private user fields, stricter SMTP URL validation (rejecting path/query/fragment), and supply chain security patching for the v2026.6.0 dependency chain.

<br /><br />

- **Admin and Platform Improvements:** Self-hosted admin now surfaces which configuration fields block saving, update request class validation was fixed, and `@hoppscotch/ui` was bumped to v0.2.6 across packages.

<br /><br />

This update includes new features and important security fixes. Your data will be backed up automatically. If needed, see [<u>Downgrading and Restoring Backups</u>](https://docs.hoppscotch.io/guides/articles/downgrading-and-restoring-backups).

<br/>

#### 👉 [Read the full release blog](https://hoppscotch.com/blog/hoppscotch-v2026-6-0)

<br/>

<Row>
  <Added>
    <li>Desktop cookie persistence and reapplication</li>
    <li>Self-hosted admin now surfaces which config fields block saving</li>
    <li>Mock server domain-based URL now appends <code>/backend</code> when subpath access is enabled</li>
  </Added>
  <Fixed>
    <li>Desktop now syncs self-hosted instance version from manifest</li>
    <li>Preserved JSON bodies in cURL parser</li>
    <li>Resolved environment variables in inherited collection headers</li>
    <li>Mock server now persists <code>isPublic</code> on creation and defaults to private</li>
    <li>Preserved collection tree on OpenAPI re-import</li>
    <li>Fixed class validation issue for updateRESTUserRequest</li>
    <li>Updated js-sandbox development instructions in docs</li>
    <li>Bumped <code>@hoppscotch/ui</code> dependency to v0.2.6 across packages</li>
    <li>Added Thai language translation</li>
    <li>Applied v2026.6.0 dependency chain security patch</li>
    <li>Enforced minimum release age for supply chain hardening</li>
    <li>Enforced ownership on user history and private user fields (backend)</li>
    <li>Rejected path/query/fragment in SMTP URL validation (GHSA-v7q6-r45w-2c6r)</li>
  </Fixed>
</Row>
