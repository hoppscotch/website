---
name: "Release Notes - v2026.4.0"
title: "Release Notes - v2026.4.0"
description: "Collection-level Scripts, SMTP OAuth2, Security Patches and more..."
image: /images/release-2026-4-0.png
meta:
  - created_at: "2026-04-29"
  - published_at: "2026-04-29"
author: "Liyas Thomas"
---

<ReleaseHeader/>
<VersionBadge version="v2026.4.0" date="April 29th 2026"/>

## Release Notes - v2026.4.0

Collection-level Scripts, SMTP OAuth2, Security Patches and more! 🚀

<TypeBadge type="new features"/>
<TypeBadge type="improvements"/>
<TypeBadge type="fixes"/>

<BannerImage imageSource="/images/release-2026-4-0.png"/>

<br />

### Highlights

- **Collection-level Pre-request and Test Scripts:** Attach pre-request and test scripts directly to collections — scripts run automatically for every request in the collection, so you no longer need to duplicate auth setup or assertion logic across individual requests.

<br /><br />

- **API Documentation UX Improvements:** The API documentation experience has been refined with a cleaner layout and improved interaction patterns, making it easier to publish and navigate your docs.

<br /><br />

- **SMTP OAuth2 Authentication (Self-Hosted):** Self-hosted instances can now authenticate with SMTP servers using OAuth2, enabling modern mail providers like Gmail and Microsoft 365 to work out of the box.

<br /><br />

- **Desktop Settings:** The desktop app now has a dedicated settings foundation with manual update checks and the option to disable automatic update checks at startup, giving you more control over when updates are applied.

<br /><br />

- **Security Patches:** This release includes a threat model and policy update alongside a patch for CVE-2026-31812 (quinn-proto bump to 0.11.14) and follow-up hardening across the platform.

<br /><br />

This update includes new features and important security fixes. Your data will be backed up automatically. If needed, see [<u>Downgrading and Restoring Backups</u>](https://docs.hoppscotch.io/guides/articles/downgrading-and-restoring-backups).

<br/>

#### 👉 [Read the full release blog](https://hoppscotch.com/blog/hoppscotch-v2026-4-0)

<br/>

<Row>
  <Added>
    <li>Collection-level pre-request and test scripts</li>
    <li>Set domain URL as mock server environment variable</li>
    <li>Option to customize web server timeouts</li>
    <li>SMTP OAuth2 authentication support for self-hosted instances</li>
    <li>Redis storage backend for rate limiting (self-hosted)</li>
    <li>Stateless OAuth2 state store with stateless OAuth for SAML and OIDC (self-hosted)</li>
    <li>Desktop Settings infrastructure with manual update check</li>
    <li>Option to disable automatic update check at startup (desktop)</li>
  </Added>
  <Fixed>
    <li>Improved API documentation UX</li>
    <li>Platform default proxy URL is now applied on load and reset (self-hosted)</li>
    <li>OTEL field update is skipped when observability is disabled (self-hosted)</li>
    <li>Login divider is now hidden conditionally (self-hosted)</li>
    <li>Fixed authorization code flow failing with Google OAuth</li>
    <li>Fixed environment tooltip overflow on hover</li>
    <li>Fixed environment validation when publishing API docs</li>
    <li>Fixed org auth timeout and state leak on desktop</li>
    <li>Updated security threat model and policy</li>
    <li>Patched CVE-2026-31812 by bumping quinn-proto to 0.11.14</li>
    <li>Applied security patch follow-up hardening</li>
  </Fixed>
</Row>
