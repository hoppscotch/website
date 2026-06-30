---
name: "Release Notes - v2026.6.0"
title: "Release Notes - v2026.6.0"
description: "Desktop Cookie Persistence, OAuth2 ID Token Support, Mock Server Reliability, Thai Language Support, Security Hardening and more..."
image: /images/release-2026-6-0.png
meta:
  - created_at: "2026-06-29"
  - published_at: "2026-06-29"
author: "Liyas Thomas"
---

<ReleaseHeader/>
<VersionBadge version="v2026.6.0" date="June 29th 2026"/>

## Release Notes - v2026.6.0

Desktop Cookie Persistence, OAuth2 ID Token Support, Mock Server Reliability, Thai Language Support, Security Hardening and more! 🚀

<TypeBadge type="new features"/>
<TypeBadge type="improvements"/>
<TypeBadge type="fixes"/>

<BannerImage imageSource="/images/release-2026-6-0.png"/>

<br />

### Highlights

- **Desktop Cookie Persistence and Reapplication:** The desktop app now preserves and reapplies cookies across sessions, so authenticated and multi-step testing flows pick up where you left off instead of starting cold.

<br /><br />

- **ID Token Support for OAuth2:** OAuth2 token requests can now use the `id_token` returned by OpenID Connect providers, in addition to the standard access token — handy when an API expects the OIDC identity token for authentication.

<br /><br />

- **Mock Server URL and Visibility Fixes:** Domain-based mock server URLs now correctly append `/backend` when subpath access is enabled, and newly created mock servers default to private, saving their public/private visibility correctly.

<br /><br />

- **Collection and Request Handling:** Inherited collection headers now resolve environment variables correctly, and JSON request bodies are preserved when importing from cURL.

<br /><br />

- **Thai Language Support:** Hoppscotch is now available in Thai, thanks to our community translators.

<br /><br />

- **Security Hardening:** Backend APIs now enforce ownership on user history and private user fields, SMTP URL validation is hardened in the self-hosted backend, and the v2026.6.0 dependency chain received its security patch.

<br /><br />

- **Self-Hosted Admin Dashboard:** The admin dashboard now surfaces which configuration fields are blocking a save, making misconfigured instances quicker to debug.

<br /><br />

This update includes new features and important security fixes. Your data will be backed up automatically. If needed, see [<u>Downgrading and Restoring Backups</u>](https://docs.hoppscotch.io/guides/articles/downgrading-and-restoring-backups).

<br/>

#### 👉 [Read the full release blog](https://hoppscotch.com/blog/hoppscotch-v2026-6-0)

<br/>

<Row>
  <Added>
    <li>Desktop cookie persistence and reapplication</li>
    <li>ID Token support for OAuth2 token requests</li>
    <li>Self-hosted admin now surfaces which config fields block saving</li>
    <li>Mock server domain-based URL now appends <code>/backend</code> when subpath access is enabled</li>
    <li>Thai language translation</li>
  </Added>
  <Fixed>
    <li>Desktop now syncs self-hosted instance version from manifest</li>
    <li>Resolved environment variables in inherited collection headers</li>
    <li>Preserved JSON bodies in cURL parser</li>
    <li>New mock servers now default to private and save their public/private visibility correctly on creation</li>
    <li>Enforced ownership on user history and private user fields (backend)</li>
    <li>Hardened SMTP URL validation in the self-hosted backend</li>
    <li>Updated vulnerable dependencies and Docker build components as part of the v2026.6.0 security patch cycle</li>
  </Fixed>
</Row>
