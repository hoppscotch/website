---
name: "Release Notes - v2026.3.0"
title: "Release Notes - v2026.3.0"
description: "Cloud for Organizations, Admin Dashboard Improvements, Security Patches and more..."
image: /images/release-2026-3-0.png
meta:
  - created_at: "2026-03-31"
  - published_at: "2026-03-31"
author: "Liyas Thomas"
---

<ReleaseHeader/>
<VersionBadge version="v2026.3.0" date="March 31st 2026"/>

## Release Notes - v2026.3.0

Cloud for Organizations, Admin Dashboard Improvements, Security Patches and more! 🚀

<TypeBadge type="new features"/>
<TypeBadge type="improvements"/>
<TypeBadge type="fixes"/>

<BannerImage imageSource="/images/release-2026-3-0.png"/>

<br />

### Highlights

- **Cloud for Organizations:** Cloud for Organizations is now generally available on the desktop app — connect your org workspaces and collaborate with your team natively from the desktop.

<br /><br />

- **Admin Dashboard Improvements:** Admins can now view user workspace memberships directly from the dashboard, making access audits and permission management faster and more transparent.

<br /><br />

- **Security Patches:** We've addressed multiple vulnerabilities — including XSS in tooltips and mock server responses, open redirects, and device-login redirect URI validation — and hardened the production image with dependency updates. Several additional issues were identified and patched as part of a broader security audit.

<br /><br />

- **Keyboard Shortcuts on Non-English Layouts:** Shortcuts now work correctly regardless of your keyboard layout, including numpad support for tab navigation.

<br /><br />

- **Smarter OpenAPI Imports:** When an OpenAPI operation lacks a summary, Hoppscotch now falls back to the operation title so your imported requests have meaningful names.

<br /><br />

This update includes new features and important security fixes. Your data will be backed up automatically. If needed, see [<u>Downgrading and Restoring Backups</u>](https://docs.hoppscotch.io/guides/articles/downgrading-and-restoring-backups).

<br/>

#### 👉 [Read the full release blog](https://hoppscotch.com/blog/hoppscotch-v2026-3-0)

<br/>

<Row>
  <Added>
    <li>Cloud for Organizations is now generally available on the desktop app</li>
    <li>View user workspace memberships in the admin dashboard</li>
    <li>Native Edit menu on Linux desktop for clipboard shortcuts</li>
  </Added>
  <Fixed>
    <li>Prevented stored XSS in team member overflow tooltip</li>
    <li>Prevented stored XSS via mock server responses and cross-site payloads</li>
    <li>Prevented open redirect on the enter page</li>
    <li>Validated device-login redirect URI to prevent token theft via DNS rebinding</li>
    <li>OAuth2 code challenge method selection now persists correctly</li>
    <li>Keyboard shortcuts now work on non-English keyboard layouts</li>
    <li>Fixed infinite auth refresh retry loop on permanent token errors</li>
    <li>Full team collection tree is now fetched on workspace import</li>
    <li>Restored tooltips on icon-only buttons inside popover triggers</li>
    <li>Operation title used as fallback name in OpenAPI imports</li>
    <li>File objects in HAR postData text are now handled correctly</li>
    <li>Newly created folders now appear in the save-as dialog</li>
    <li>Resolved history schema validation error on page reload</li>
    <li>Updated dependencies to address security vulnerabilities and hardened production image</li>
    <li>Updated Chinese translations</li>
  </Fixed>
</Row>
